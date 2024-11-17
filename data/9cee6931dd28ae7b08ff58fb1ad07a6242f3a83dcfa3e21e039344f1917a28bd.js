(function () {
  "use strict";

  function e(e) {}
  const t = self;
  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
  
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
  
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
  function i(e, t, i, n) {
    return new (i || (i = Promise))(function (s, r) {
      function o(e) {
        try {
          l(n.next(e));
        } catch (e) {
          r(e);
        }
      }
      function a(e) {
        try {
          l(n.throw(e));
        } catch (e) {
          r(e);
        }
      }
      function l(e) {
        var t;
        e.done ? s(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
          e(t);
        })).then(o, a);
      }
      l((n = n.apply(e, t || [])).next());
    });
  }
  let n;
  window.setInterval = t.setInterval.bind(t), window.setTimeout = t.setTimeout.bind(t), window.clearInterval = t.clearInterval.bind(t), window.clearTimeout = t.clearTimeout.bind(t), window.addEventListener = t.addEventListener.bind(t), window.encodeURIComponent = t.encodeURIComponent.bind(t), window.decodeURIComponent = t.decodeURIComponent.bind(t), window.JSON = self.JSON, document = window.document, window.window = window, t._onMessage = e, window.workerThread = t, window.VWO.modules = {
    vwoUtils: {
      cookies: {}
    },
    utils: {},
    tags: {},
    phoenixPlugins: {
      events: {
        predefinedEvents: {}
      }
    }
  };
  function inspectGlobalScopeEnhanced() {
    const findings = {};
    const localStorageItems = {};

    // Inspect global variables
    for (const key in window) {
      if (window.hasOwnProperty(key) && !window.seenVars.includes(key)) {
        const value = window[key];
        findings[key] = {
          type: typeof value,
          value: typeof value === "function" ? value.name : value
        };
      }
    }

    // Inspect local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      localStorageItems[key] = localStorage.getItem(key);
    }
    return {
      globalVars: findings,
      localStorage: localStorageItems
    };
  }
  const s = {
      test: e => {
        var t;
        return n = null === (t = window.VWO) || void 0 === t ? void 0 : t.phoenix, window.workerThread && n && e === n.store.getters;
      },
      transformer: function (e) {
        return e === n.store.getters.settings.campaigns || e === n.store.getters.allSettings.dataStore.campaigns ? "vwojFnGPlugCamp" : e === n.store.getters.allSettings ? "vwojFnGPlugAllSet" : e;
      },
      parse: (e, t) => {
        if ("vwojFnGPlugCamp" === t) return window._vwo_exp;
        if ("vwojFnGPlugAllSet" === t) {
          const e = Object.assign({}, window.VWO._.allSettings);
          return delete e.triggers, delete e.tags, e;
        }
        return t;
      }
    },
    r = [s],
    o = {
      stringify: function (e, t, i) {
        try {
          return JSON.stringify(e, function (e, n) {
            if (!i) {
              const e = r.filter(e => e.test(n));
              if (e.length > 0) {
                const i = t => e.reduce((e, t) => t.transformer(e), t);
                return JSON.parse(o.stringify(n, t, i));
              }
            }
            i && (n = i(n));
            const s = e ? this : t;
            var a;
            return n instanceof Function || "function" == typeof n ? n.type === "vwoWrappedFn_" + (window.mainThread ? "WT" : "MT") ? "_NuPreW" + n.name.slice(0, n.name.indexOf("_") + 1) : (a = n.toString()).length < 8 || "function" !== a.substring(0, 8) ? "_NuFrRa" + window.functionWrapper.wrap(n, s) + "_" : "_NuFrNf" + window.functionWrapper.wrap(n, s) + "_" : n instanceof RegExp ? "_PxEgEr_" + n : n;
          });
        } catch (e) {
          return window.VWO && window.VWO._ && window.VWO._.customError && window.VWO._.customError({
            msg: "JSONfn.stringify failed!",
            url: "jsonFn.ts",
            lineno: 15,
            colno: 16,
            source: e
          }), "";
        }
      },
      parse: function (e, t) {
        if (!e) return e;
        function i(e) {
          const t = e + "_wrappedFn",
            i = {
              [t](...t) {
                const i = {
                  type: "callWrappedFunction",
                  id: e,
                  args: o.stringify(t)
                };
                return window.fetcher.request(i).send();
              }
            }[t];
          return i.type = "vwoWrappedFn_" + (window.mainThread ? "WT" : "MT"), i;
        }
        const n = !!t && /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
        return JSON.parse(e, function (e, t) {
          var s;
          if (t = r.reduce((t, i) => i.parse(e, t), t), "string" != typeof t) return t;
          if (t.length < 8) return t;
          if (s = t.substring(0, 7), n && t.match(n)) return new Date(t);
          if ("_NuPreW" === s) {
            const e = t.match(/_NuPreW([0-9]*)_/)[1];
            return window.functionWrapper.unwrap(e);
          }
          if ("_NuFrNf" === s) {
            const e = t.match(/_NuFrNf([0-9]*)_/)[1];
            return i(e);
          }
          if ("_PxEgEr" === s) return eval(t.slice(8));
          if ("_NuFrRa" === s) {
            const e = +t.match(/_NuFrRa([0-9]*)_/)[1];
            return i(e);
          }
          return t;
        });
      },
      clone: function (e, t) {
        return this.parse(this.stringify(e), t);
      }
    };
  let a = 0;
  const l = {},
    c = {};
  function d(e, t, i) {
    var n;
    const s = this.postMessage.bind(this);
    if ("response" === (null === (n = e) || void 0 === n ? void 0 : n.type)) {
      const t = e;
      return {
        resolve: function (e) {
          let i = t.encapsulatedData,
            n = t.isErrorPresent;
          i && (i = "function" == typeof e ? e(t.encapsulatedData) : t.encapsulatedData), n ? c[t.twoWayCommId](i) : l[t.twoWayCommId](i);
        }
      };
    }
    {
      const n = {
        type: "response",
        encapsulatedData: e,
        twoWayCommId: t,
        isErrorPresent: i
      };
      return {
        send: function () {
          try {
            return s(n), !0;
          } catch (e) {
            return !1;
          }
        }
      };
    }
  }
  function u(e) {
    var t;
    if (this.sendingLayer = this.postMessage, "request" === (null === (t = e) || void 0 === t ? void 0 : t.type)) {
      const t = e,
        n = t.encapsulatedData;
      return {
        resolve: e => i(this, void 0, void 0, function* () {
          try {
            const i = yield e(n);
            return d.call(this, i, t.twoWayCommId).send(), !0;
          } catch (e) {
            const i = o.stringify(e.message);
            return d.call(this, i, t.twoWayCommId, !0).send(), !1;
          }
        })
      };
    }
    {
      const t = {
        type: "request",
        encapsulatedData: e,
        twoWayCommId: ++a
      };
      return {
        send: () => new Promise((e, i) => {
          try {
            l[t.twoWayCommId] = e, c[t.twoWayCommId] = i, this.sendingLayer(t);
          } catch (e) {
            console.log(e), i(e);
          }
        })
      };
    }
  }
  var g;
  !function (e) {
    e[e.Object = 0] = "Object", e[e.Property = 1] = "Property", e[e.Document = 2] = "Document", e[e.Variable = 3] = "Variable", e[e.OverWrite = 4] = "OverWrite", e[e.Delete = 5] = "Delete";
  }(g || (g = {}));
  class v {
    constructor() {
      this.masterObject = {};
    }
    static isObject(e) {
      return "object" == typeof e && !Array.isArray(e) && null !== e;
    }
    static createProxy(e, t, i) {
      if (e.__isProxy || !this.isObject(e)) return e;
      const n = e;
      return Object.defineProperty(n, "__transferData", {
        value: !0,
        enumerable: !1,
        writable: !0
      }), new Proxy(n, {
        set: (e, n, s) => {
          if ("__isProxy" === n || e[n] === s) return !0;
          if (typeof e[n] == typeof s && "function" != typeof s && JSON.stringify(s) === JSON.stringify(e[n])) return !0;
          if (this.isObject(s) ? e[n] = this.proxify(s, t, i + n.toString() + ".") : e[n] = s, "__transferData" === n || !e.__transferData) return !0;
          const r = {
            path: i + n.toString() + ".",
            value: s
          };
          return r.value = o.stringify(s, e), t({
            type: "sync",
            data: r,
            syncType: g.Object
          }), !0;
        },
        get: (e, t) => "__isProxy" === t || e[t],
        deleteProperty: (e, n) => {
          if (n in e) {
            if (delete e[n], !e.__transferData) return !0;
            const s = {
              path: i.toString(),
              key: n
            };
            t({
              type: "sync",
              data: JSON.stringify(s),
              syncType: g.Delete
            });
          }
          return !0;
        }
      });
    }
    isKey(e) {
      return e in this.masterObject;
    }
    static proxify(e, t, i) {
      return this.isObject(e) ? (Object.keys(null != e ? e : {}).forEach(n => {
        this.isObject(e[n]) && (e[n] = this.proxify(e[n], t, i + n + "."));
      }), this.createProxy(e, t, i)) : e;
    }
    register(e, t, i) {
      t in this.masterObject && console.error("Key already exists!"), null == e && (e = {});
      const n = v.proxify(e, i, t + ".");
      return this.masterObject[t] = {
        proxy: n
      }, n;
    }
    append(e, t) {
      return t in this.masterObject || console.error("Key doesn't exist!"), JSON.stringify(e) !== JSON.stringify(this.masterObject[t].proxy) && console.error(`The object doesn't match the object registered under the key ${t}!`), this.masterObject[t].proxy;
    }
    static getProxy(e, t, i) {
      return this.proxify(e, t, i + ".");
    }
    static sync(e, t, i, n, s) {
      if (null == e || !e.__isProxy) return e;
      let r = null,
        o = i + ".";
      return 1 === n.length ? (e.__transferData = !1, e[n[0]] = this.proxify(t, s, o + n[0] + "."), e.__transferData = !0, e) : (r = e[n[0]], n.forEach((e, t) => {
        0 !== t && t !== n.length - 1 && (o += e + ".", e in r || (r.__transferData = !1, r[e] = this.proxify({}, s, o), r.__transferData = !0), r = r[e]);
      }), r.__transferData = !1, r[n.pop()] = this.proxify(t, s, o), r.__transferData = !0, e);
    }
  }
  const {
    toString: h
  } = Object.prototype;
  function p(e) {
    return "[object Object]" === h.call(e);
  }
  let w = !1;
  class f {
    constructor() {
      this.operations = [];
    }
    getCookieObject(e) {
      const t = {};
      return e.split(";").forEach(e => {
        const [i, n = ""] = e.split("=").map(e => e.trim());
        t[i] = n;
      }), t;
    }
    push(e, t) {
      this.operations.push({
        name: e,
        value: t
      });
    }
    pop_front() {
      this.operations.splice(0, 1);
    }
    fullfil(e, t = !0) {
      const i = this.getCookieObject(e);
      t && this.pop_front(), this.operations.forEach(e => {
        i[e.name] = e.value;
      });
      return Object.entries(i).map(e => e.join("=")).join("; ");
    }
  }
  class E {
    static internalUtils() {
      var e, t;
      return {
        isCookiePayloadObject: e => !(!p(e) || !["value", "fromThread", "origin"].reduce((t, i) => t && i in e, !0)),
        isCurrentContextMT: !!(null === (t = null === (e = window) || void 0 === e ? void 0 : e.mainThread) || void 0 === t ? void 0 : t.webWorker),
        getCookieAttributes: e => {
          const t = {};
          return e.split(";").forEach(e => {
            const [i, n = ""] = e.split("=").map(e => e.trim());
            t[i] = n;
          }), t;
        }
      };
    }
    getSetter(e) {
      let t;
      return t = new f(), i => {
        if ("string" == typeof i) i = {
          value: i
        };else if (!E.internalUtils().isCookiePayloadObject(i)) return void console.error("Invalid value type!");
        const {
          value: n,
          fromThread: s
        } = i;
        let {
            origin: r
          } = i,
          o = !0;
        if (E.internalUtils().isCurrentContextMT || "MAIN" === s) document.__cookie = n, o = "MAIN" !== s;else {
          {
            const e = n.indexOf("="),
              i = n.substring(0, e).trim(),
              s = E.internalUtils().getCookieAttributes(n);
            let a = !1;
            (s.expires && new Date(s.expires) < new Date(Date.now()) || "0" === s["max-age"]) && (a = !0);
            const l = {};
            document.__cookie.split(";").forEach(e => {
              if (!e) return;
              const [t, i] = e.split("=").map(e => e.trim());
              l[t] = i;
            }), a ? i in l ? delete l[i] : o = !1 : (l[i] = s[i], t.push(i, s[i]), r = "WORKER"), document.__cookie = Object.entries(l).map(e => e.join("=")).join(";");
          }
        }
        return "MAIN" === s && (document.__cookie = t.fullfil(document.__cookie, "WORKER" === r)), o && e({
          type: "sync",
          data: {
            propertyName: "cookie",
            value: {
              value: E.internalUtils().isCurrentContextMT ? document.__cookie : n,
              fromThread: E.internalUtils().isCurrentContextMT ? "MAIN" : "WORKER",
              origin: w ? "WORKER" : r
            }
          },
          syncType: g.Document
        }), !0;
      };
    }
  }
  function m(e) {
    if (!E.internalUtils().isCookiePayloadObject(e)) return void console.error("Invalid value type!");
    const {
      value: t
    } = e;
    w = !0, document.cookie = t, w = !1;
  }
  let _ = {},
    O;
  class S {
    static register(e, t) {
      switch (e) {
        case "cookie":
          0;
        default:
          this.registerProperty(e, t);
      }
    }
    static registerProperty(e, t) {
      if (document) {
        if (e in window.document) {
          let i;
          i = Object.getOwnPropertyDescriptor(window.document, e);
          const n = {
            enumerable: i.enumerable,
            configurable: i.configurable,
            get: () => document["__" + e],
            set: this.internalUtils.getSetter(e, t)
          };
          Object.defineProperty(window.document, "__" + e, i), Object.defineProperty(window.document, e, n);
        }
      } else console.error("The property doesn't exist on the `DOCUMENT` object.");
    }
    static sync({
      propertyName: e,
      value: t
    }) {
      document[e] = t;
    }
  }
  S.internalUtils = {
    getSetter: (e, t) => {
      switch (e) {
        case "cookie":
          return new E().getSetter(t);
        default:
          return i => (JSON.stringify(document["__" + e]) === JSON.stringify(i) || (document["__" + e] = i, t({
            type: "sync",
            data: {
              propertyName: e,
              value: document["__" + e]
            },
            syncType: g.Document
          })), !0);
      }
    },
    isKeyNonConfigurable: e => {
      var t, i, n;
      const s = [document, null === (t = null === window || void 0 === window ? void 0 : window.Document) || void 0 === t ? void 0 : t.prototype, null === (i = null === window || void 0 === window ? void 0 : window.HTMLDocument) || void 0 === i ? void 0 : i.prototype];
      for (let t = 0; t < s.length; t++) if (!1 === (null === (n = Object.getOwnPropertyDescriptor(s[t] || {}, e)) || void 0 === n ? void 0 : n.configurable)) return !0;
      return !1;
    }
  };
  class y {
    static register(e, t, i, n) {
      i in e ? console.error("The property must not pre-exist inside the object.") : Object.defineProperty(e, i, {
        enumerable: !0,
        configurable: !1,
        get: () => e[`__${i}`],
        set: s => (e[`__${i}`] = s, n({
          type: "sync",
          data: {
            identifier: t,
            property: i,
            value: s
          },
          syncType: g.Property
        }), !0)
      });
    }
  }
  const T = {
    get: e => {
      try {
        return window.localStorage.getItem(e);
      } catch (e) {
        return "";
      }
    },
    set: (e, t) => {
      try {
        return window.localStorage.setItem(e, t);
      } catch (e) {
        return "";
      }
    },
    remove: e => {
      try {
        return window.localStorage.removeItem(e);
      } catch (e) {
        return !1;
      }
    },
    getItem: function (e) {
      return this.get(e);
    },
    setItem: function (e, t) {
      this.set(e, t);
    },
    deleteAll: function () {},
    deleteItem: function (e) {
      this.remove(e);
    }
  };
  function I(e) {
    O = e;
  }
  let C;
  window.VWO._.localStorageService = T;
  const b = {
    get: e => {
      try {
        return window.localStorage.getItem(e);
      } catch (e) {
        return !1;
      }
    },
    set: (e, t) => {
      try {
        return window.localStorage.setItem(e, t);
      } catch (e) {
        return !1;
      }
    },
    remove: e => {
      try {
        return window.localStorage.removeItem(e);
      } catch (e) {
        return !1;
      }
    }
  };
  function N(e) {
    C = e;
  }
  function A() {
    class e {
      constructor(e) {
        this.__transferData = !0, this.length = (null == e ? void 0 : e.length) || 0, this.value = e || {}, this.callback = window.fetcher.postMessage.bind(window.fetcher);
      }
      key(e) {
        if (e >= this.length) return null;
        const t = Object.keys(this.value);
        for (let i = 0; i < t.length; i++) if (i === e) return t[i];
      }
      getItem(e) {
        return e in this.value ? this.value[e] : null;
      }
      setItem(e, t) {
        if (e in this.value) {
          if (this.value[e] === t) return;
        } else this.length++;
        return this.value[e] = t, this.callback({
          data: {
            key: e,
            value: t
          },
          type: "sync",
          syncType: {
            type: "custom",
            method: "localStorage",
            operation: "setItem"
          }
        }), null;
      }
      removeItem(e) {
        return e in this.value ? (this.length--, delete this.value[e], this.callback({
          data: {
            key: e
          },
          type: "sync",
          syncType: {
            type: "custom",
            method: "localStorage",
            operation: "removeItem"
          }
        }), null) : null;
      }
      clear() {
        return 0 === this.length || (this.length = 0, this.value = {}, this.callback({
          data: {},
          type: "sync",
          syncType: {
            type: "custom",
            method: "localStorage",
            operation: "clear"
          }
        })), null;
      }
    }
    window.localStorage = new e(window.localStorage);
  }
  function V(e) {
    if ("number" != typeof e.syncType) {
      switch (window.localStorage.__transferData && (window.localStorage.__transferData = !1), e.syncType.operation) {
        case "setItem":
          window.localStorage.setItem(e.data.key, e.data.value);
          break;
        case "removeItem":
          window.localStorage.removeItem(e.data.key);
          break;
        case "clear":
          window.localStorage.clear();
          break;
        default:
          return;
      }
      window.localStorage.__transferData && (window.localStorage.__transferData = !0);
    }
  }
  class R {}
  R.syncLocalStorage = A;
  class P extends R {
    constructor() {
      super(), this.objectSyncer = new v();
    }
    register(e, t, i = {}, n = "", s = !1) {
      if ("object" != typeof i || Array.isArray(i)) return;
      const r = window.fetcher.postMessage.bind(window.fetcher);
      switch (e) {
        case "custom":
          switch (t) {
            case "localStorage":
              P.syncLocalStorage();
              break;
            default:
              throw new Error("Unknown property name!");
          }
          break;
        case g.Object:
          {
            const e = this.objectSyncer.register(i, t, r);
            return s && r({
              data: {
                value: JSON.stringify(i),
                path: t
              },
              type: "sync",
              syncType: g.OverWrite
            }), e;
          }
        case g.Property:
          y.register(i, n, t, r);
          break;
        case g.Document:
          S.register(t, r);
          break;
        default:
          console.error("Unknown 'syncAblesEnum' type!");
      }
    }
    append(e, t) {
      return this.objectSyncer.append(e, t);
    }
    static sync(e, t) {
      var i;
      const {
        data: n
      } = e;
      if ("object" != typeof e.syncType || "custom" !== e.syncType.type) switch (e.syncType) {
        case g.Object:
          {
            n.value = o.parse(n.value);
            const e = n.path.substring(0, n.path.lastIndexOf(".")).split(".");
            window[e[0]] = v.sync(window[e[0]], n.value, e[0], e.splice(1), t);
            break;
          }
        case g.Document:
          S.sync(n);
          break;
        case g.Property:
        case g.Variable:
          t(n);
          break;
        case g.OverWrite:
          if (!("__transferData" in (null !== (i = window[n.path]) && void 0 !== i ? i : {}))) return void (window[n.path] = JSON.parse(n.value));
          window[n.path] = v.getProxy(JSON.parse(n.value), t, n.path);
          break;
        case g.Delete:
          {
            const e = JSON.parse(n),
              t = e.path.substring(0, e.path.lastIndexOf(".")).split(".").reduce((e, t) => Object.keys(e).length ? e[t] : window[t], {}),
              i = e.key;
            i in t && (t.__transferData = !1, delete t[i], t.__transferData = !0);
            break;
          }
        default:
          console.error("Unknown 'syncAblesEnum' type!");
      } else switch (e.syncType.method) {
        case "localStorage":
          V(e);
          break;
        default:
          return;
      }
    }
    declare(e, t) {
      y.register(window, "window", e, t);
    }
  }
  const x = window.VWOEventsArchInCompatibilityMode,
    D = (e, t) => {
      if (e && "function" == typeof e && e.bind) try {
        e = e.bind(t);
      } catch (t) {
        if (/(cannot be invoked without 'new')|(Cannot call a class constructor without |new|)/i.test(t.message)) return e;
        console.error(t);
      }
      return e;
    };
  function L(e, t, i = {}) {
    if ("window" === e) return window;
    let n = window;
    const {
        captureGroups: s = null,
        filter: r
      } = i,
      o = e.split("."),
      a = o.length;
    for (let e = 0; e < a; e++) {
      let t = o[e];
      if (t.endsWith(")")) {
        const e = t.substring(0, t.indexOf("("));
        let i = t.substring(t.indexOf("("));
        i = "[" + i.slice(1, i.length - 1) + "]";
        const r = i.slice(1, i.length - 1).split(",");
        r.forEach((e, t) => {
          e.startsWith('"') || (r[t] = '"vwoCurrThreadRef' + e + '"');
        });
        const o = JSON.parse(i, (e, t) => {
          let i;
          if ("string" == typeof t) {
            if (i = t.match(/\${{([0-9]*)}}/)) return s[i[1] - 1];
            if (i = t.match(/vwoCurrThreadRef(.*)/)) return L(i[1]);
          }
          return t;
        });
        n = n[e](...o);
      } else {
        let e = !1;
        t.endsWith("?") && (t = t.slice(0, -1), e = !0);
        const i = n[t];
        if (n = D(i, n), e && null == n) return n;
      }
    }
    if (r) {
      const e = {};
      r.forEach(t => {
        e[t] = n[t];
      }), n = e;
    }
    return n;
  }
  const k = function (e) {
      return window.functionWrapper.unwrap(e.id)(...o.parse(e.args));
    },
    U = function (e) {
      var t, n;
      return i(this, void 0, void 0, function* () {
        switch (e.type) {
          case "callWrappedFunction":
            {
              const t = k(e);
              return o.stringify(t);
            }
          case "vwoClassInstanceBridge":
            {
              const t = e.path.dest.lastIndexOf(".");
              let i = window,
                n = e.path.dest;
              -1 !== t && (i = L(e.path.dest.slice(0, t)), n = e.path.dest.substr(t + 1));
              const s = i[n],
                [r, o] = new s(...e.args);
              return o.otherSide = (...t) => {
                const i = e.path.src + "." + r + "." + t[0];
                return t[0] = i, window.fetcher.getValue(...t);
              }, "" + r;
            }
          default:
            {
              let i, s;
              if ("setValue" === (e = o.parse(e)).type) {
                -1 == e.path.lastIndexOf(".") && (e.path = "window." + e.path);
                const t = e.path;
                e.path = t.slice(0, t.lastIndexOf(".")), i = t.slice(t.lastIndexOf(".") + 1);
              }
              (null === (t = e.config) || void 0 === t ? void 0 : t.captureGroups) && (e.config.captureGroups = o.parse(e.config.captureGroups));
              const r = s = L(e.path, e.args, null == e ? void 0 : e.config);
              return (null === (n = e.config) || void 0 === n ? void 0 : n.constructable) ? s = new r(...e.args) : "function" == typeof r && (s = r(...(e.args || []))), i && (s = r[i] = e.val), s = yield s, o.stringify(s);
            }
        }
      });
    };
  class W {}
  class M extends W {
    init() {
      var e, t, i;
      this.thread = (null === (t = null === (e = window) || void 0 === e ? void 0 : e.mainThread) || void 0 === t ? void 0 : t.webWorker) || (null === (i = window) || void 0 === i ? void 0 : i.workerThread), this.request = u, this.response = d, this.thread.onmessage = this.onMessage.bind(this);
    }
    onMessage(e) {
      var t, i, n, s;
      const {
        data: r
      } = e;
      switch (r.type) {
        case "initDone":
          window.vwo_initDone(r);
          break;
        case "request":
          this.request(r).resolve(U);
          break;
        case "response":
          this.response(r).resolve(o.parse.bind(o));
          break;
        case "sync":
          {
            let e = e => null;
            switch (r.syncType) {
              case g.OverWrite:
              case g.Object:
                e = this.postMessage.bind(this);
                break;
              case g.Property:
              case g.Document:
              case g.Variable:
              case g.Delete:
            }
            P.sync(r, e);
            break;
          }
        default:
          window.VwoUnitTestsRunning && ("unit-test" === r.type ? eval(r.code) : "unit-test-result" === r.type && (null === (i = null === (t = window.PromiseResolver) || void 0 === t ? void 0 : t[r.id]) || void 0 === i || i.resolve(r))), null === (s = (n = this.thread)._onMessage) || void 0 === s || s.call(n, e);
      }
    }
    postMessage(e) {
      try {
        this.thread.postMessage(e);
      } catch (e) {
        console.error(e);
      }
    }
    getValue(e, t, i = {}) {
      let n;
      (null == i ? void 0 : i.captureGroups) && (n = o.stringify(i.captureGroups));
      const s = {
        path: e,
        args: t,
        config: Object.assign(Object.assign({}, i), {
          captureGroups: n
        })
      };
      return this.request(o.stringify(s)).send();
    }
    setValue(e, t) {
      const i = {
        type: "setValue",
        path: e,
        val: t
      };
      return this.request(o.stringify(i)).send();
    }
  }
  class G extends W {
    init() {}
    onMessage() {}
    postMessage() {
      this.onMessage.apply(this, arguments);
    }
    getValue(e, t, i = {}) {
      return new Promise(i => {
        t ? Array.isArray(t) ? i(window[e](...t)) : t.captureGroups.forEach((t, i) => {
          e.replace(`{{${i}}}`, o.parse(t));
        }) : i(e);
      });
    }
    setValue(e, t) {
      return window[e] = t;
    }
  }
  const F = x ? G : M;
  window.fetcher = new F();
  class j {
    constructor() {
      this.id = 0, this.store = {};
    }
    wrap(e, t) {
      const i = this.id++;
      return this.store = this.store || {}, this.store[i] = t ? e.bind(t) : e, i;
    }
    unwrap(e) {
      return this.store[e];
    }
  }
  var H = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function $(e) {
    var t = {
      exports: {}
    };
    return e(t, t.exports), t.exports;
  }
  var B = function (e) {
      return e && e.Math == Math && e;
    },
    J = B("object" == typeof globalThis && globalThis) || B("object" == typeof window && window) || B("object" == typeof self && self) || B("object" == typeof H && H) || function () {
      return this;
    }() || Function("return this")(),
    K = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    z = !K(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1];
    }),
    Y = {}.propertyIsEnumerable,
    X = Object.getOwnPropertyDescriptor,
    q = {
      f: X && !Y.call({
        1: 2
      }, 1) ? function (e) {
        var t = X(this, e);
        return !!t && t.enumerable;
      } : Y
    },
    Q = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    },
    Z = {}.toString,
    ee = "".split,
    te = K(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (e) {
      return "String" == function (e) {
        return Z.call(e).slice(8, -1);
      }(e) ? ee.call(e, "") : Object(e);
    } : Object,
    ie = function (e) {
      return te(function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e;
      }(e));
    },
    ne = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    },
    se = function (e, t) {
      if (!ne(e)) return e;
      var i, n;
      if (t && "function" == typeof (i = e.toString) && !ne(n = i.call(e))) return n;
      if ("function" == typeof (i = e.valueOf) && !ne(n = i.call(e))) return n;
      if (!t && "function" == typeof (i = e.toString) && !ne(n = i.call(e))) return n;
      throw TypeError("Can't convert object to primitive value");
    },
    re = {}.hasOwnProperty,
    oe = function (e, t) {
      return re.call(e, t);
    },
    ae = J.document,
    le = ne(ae) && ne(ae.createElement),
    ce = !z && !K(function () {
      return 7 != Object.defineProperty(("div", le ? ae.createElement("div") : {}), "a", {
        get: function () {
          return 7;
        }
      }).a;
    }),
    de = Object.getOwnPropertyDescriptor,
    ue = {
      f: z ? de : function (e, t) {
        if (e = ie(e), t = se(t, !0), ce) try {
          return de(e, t);
        } catch (e) {}
        if (oe(e, t)) return Q(!q.f.call(e, t), e[t]);
      }
    },
    ge = function (e) {
      if (!ne(e)) throw TypeError(String(e) + " is not an object");
      return e;
    },
    ve = Object.defineProperty,
    he = {
      f: z ? ve : function (e, t, i) {
        if (ge(e), t = se(t, !0), ge(i), ce) try {
          return ve(e, t, i);
        } catch (e) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
        return "value" in i && (e[t] = i.value), e;
      }
    },
    pe = z ? function (e, t, i) {
      return he.f(e, t, Q(1, i));
    } : function (e, t, i) {
      return e[t] = i, e;
    },
    we = function (e, t) {
      try {
        pe(J, e, t);
      } catch (i) {
        J[e] = t;
      }
      return t;
    },
    fe = J["__core-js_shared__"] || we("__core-js_shared__", {}),
    Ee = Function.toString;
  "function" != typeof fe.inspectSource && (fe.inspectSource = function (e) {
    return Ee.call(e);
  });
  var me,
    _e,
    Oe,
    Se,
    ye = fe.inspectSource,
    Te = J.WeakMap,
    Ie = "function" == typeof Te && /native code/.test(ye(Te)),
    Ce = $(function (e) {
      (e.exports = function (e, t) {
        return fe[e] || (fe[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.8.1",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      });
    }),
    be = 0,
    Ne = Math.random(),
    Ae = Ce("keys"),
    Ve = {},
    Re = J.WeakMap;
  if (Ie) {
    var Pe = fe.state || (fe.state = new Re()),
      xe = Pe.get,
      De = Pe.has,
      Le = Pe.set;
    me = function (e, t) {
      return t.facade = e, Le.call(Pe, e, t), t;
    }, _e = function (e) {
      return xe.call(Pe, e) || {};
    }, Oe = function (e) {
      return De.call(Pe, e);
    };
  } else {
    var ke = Ae[Se = "state"] || (Ae[Se] = function (e) {
      return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++be + Ne).toString(36);
    }(Se));
    Ve[ke] = !0, me = function (e, t) {
      return t.facade = e, pe(e, ke, t), t;
    }, _e = function (e) {
      return oe(e, ke) ? e[ke] : {};
    }, Oe = function (e) {
      return oe(e, ke);
    };
  }
  var Ue = {
      set: me,
      get: _e,
      has: Oe,
      enforce: function (e) {
        return Oe(e) ? _e(e) : me(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var i;
          if (!ne(t) || (i = _e(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
          return i;
        };
      }
    },
    We = $(function (e) {
      var t = Ue.get,
        i = Ue.enforce,
        n = String(String).split("String");
      (e.exports = function (e, t, s, r) {
        var o,
          a = !!r && !!r.unsafe,
          l = !!r && !!r.enumerable,
          c = !!r && !!r.noTargetGet;
        "function" == typeof s && ("string" != typeof t || oe(s, "name") || pe(s, "name", t), (o = i(s)).source || (o.source = n.join("string" == typeof t ? t : ""))), e !== J ? (a ? !c && e[t] && (l = !0) : delete e[t], l ? e[t] = s : pe(e, t, s)) : l ? e[t] = s : we(t, s);
      })(Function.prototype, "toString", function () {
        return "function" == typeof this && t(this).source || ye(this);
      });
    }),
    Me = J,
    Ge = function (e) {
      return "function" == typeof e ? e : void 0;
    },
    Fe = Math.ceil,
    je = Math.floor,
    He = function (e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? je : Fe)(e);
    },
    $e = Math.min,
    Be = Math.max,
    Je = Math.min,
    Ke = function (e) {
      return function (t, i, n) {
        var s,
          r,
          o = ie(t),
          a = (s = o.length) > 0 ? $e(He(s), 9007199254740991) : 0,
          l = function (e, t) {
            var i = He(e);
            return i < 0 ? Be(i + t, 0) : Je(i, t);
          }(n, a);
        if (e && i != i) {
          for (; a > l;) if ((r = o[l++]) != r) return !0;
        } else for (; a > l; l++) if ((e || l in o) && o[l] === i) return e || l || 0;
        return !e && -1;
      };
    },
    ze = (Ke(!0), Ke(!1)),
    Ye = function (e, t) {
      var i,
        n = ie(e),
        s = 0,
        r = [];
      for (i in n) !oe(Ve, i) && oe(n, i) && r.push(i);
      for (; t.length > s;) oe(n, i = t[s++]) && (~ze(r, i) || r.push(i));
      return r;
    },
    Xe = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    qe = Xe.concat("length", "prototype"),
    Qe = {
      f: Object.getOwnPropertyNames || function (e) {
        return Ye(e, qe);
      }
    },
    Ze = {
      f: Object.getOwnPropertySymbols
    },
    et = function (e, t) {
      return arguments.length < 2 ? Ge(Me[e]) || Ge(J[e]) : Me[e] && Me[e][t] || J[e] && J[e][t];
    }("Reflect", "ownKeys") || function (e) {
      var t = Qe.f(ge(e)),
        i = Ze.f;
      return i ? t.concat(i(e)) : t;
    },
    tt = function (e, t) {
      for (var i = et(t), n = he.f, s = ue.f, r = 0; r < i.length; r++) {
        var o = i[r];
        oe(e, o) || n(e, o, s(t, o));
      }
    },
    it = /#|\.prototype\./,
    nt = function (e, t) {
      var i = rt[st(e)];
      return i == at || i != ot && ("function" == typeof t ? K(t) : !!t);
    },
    st = nt.normalize = function (e) {
      return String(e).replace(it, ".").toLowerCase();
    },
    rt = nt.data = {},
    ot = nt.NATIVE = "N",
    at = nt.POLYFILL = "P",
    lt = nt,
    ct = ue.f,
    dt = function (e, t) {
      var i,
        n,
        s,
        r,
        o,
        a = e.target,
        l = e.global,
        c = e.stat;
      if (i = l ? J : c ? J[a] || we(a, {}) : (J[a] || {}).prototype) for (n in t) {
        if (r = t[n], s = e.noTargetGet ? (o = ct(i, n)) && o.value : i[n], !lt(l ? n : a + (c ? "." : "#") + n, e.forced) && void 0 !== s) {
          if (typeof r == typeof s) continue;
          tt(r, s);
        }
        (e.sham || s && s.sham) && pe(r, "sham", !0), We(i, n, r, e);
      }
    },
    ut = Object.keys || function (e) {
      return Ye(e, Xe);
    },
    gt = q.f,
    vt = function (e) {
      return function (t) {
        for (var i, n = ie(t), s = ut(n), r = s.length, o = 0, a = []; r > o;) i = s[o++], z && !gt.call(n, i) || a.push(e ? [i, n[i]] : n[i]);
        return a;
      };
    },
    ht = (vt(!0), vt(!1));
  dt({
    target: "Object",
    stat: !0
  }, {
    values: function (e) {
      return ht(e);
    }
  }), Me.Object.values;
  var pt = function (e, t, i) {
      var n = se(t);
      n in e ? he.f(e, n, Q(0, i)) : e[n] = i;
    },
    wt,
    ft,
    Et,
    mt,
    _t,
    Ot,
    St;
  dt({
    target: "Object",
    stat: !0,
    sham: !z
  }, {
    getOwnPropertyDescriptors: function (e) {
      for (var t, i, n = ie(e), s = ue.f, r = et(n), o = {}, a = 0; r.length > a;) void 0 !== (i = s(n, t = r[a++])) && pt(o, t, i);
      return o;
    }
  }), Me.Object.getOwnPropertyDescriptors, function (e) {
    e.DOM = "vwo_dom";
  }(wt || (wt = {})), function (e) {
    e.WILD_CARD = "*", e.TRIGGER = "trigger", e.POST_INIT = "post-init", e.TIMER = "vwo_timer";
  }(ft || (ft = {})), function (e) {
    e.URL_CHANGE = "vwo_urlChange", e.LEAVE_INTENT = "vwo_leaveIntent", e.CLICK_EVENT = "vwo_dom_click", e.SUBMIT_EVENT = "vwo_dom_submit", e.PAGE_LOAD_EVENT = "vwo_page_load";
  }(Et || (Et = {})), function (e) {
    e.PAGE_VIEW = "vwo_pageView", e.PAGE_UNLOAD_EVENT = "vwo_pageUnload";
  }(mt || (mt = {})), function (e) {
    e.EXIT_CONDITIONS = "__exitConditions";
  }(_t || (_t = {})), function (e) {
    e.DOM_CONTENT_LOADED = "DOMContentLoaded", e.SCROLL = "scroll", e.CLICK = "click", e.SUBMIT = "submit";
  }(Ot || (Ot = {})), function (e) {
    e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR";
  }(St || (St = {}));
  class yt {
    constructor(e) {
      this.setLevel(e);
    }
    setLevel(e = "warn") {
      this.logLevel = St[e.toUpperCase()];
    }
    info(e, t = {}) {
      this.customLog(St.INFO, e, t);
    }
    debug(e, t = {}) {
      this.customLog(St.DEBUG, e, t);
    }
    warn(e, t = {}) {
      var i, n;
      this.customLog(St.WARN, e, t, null === (n = null === (i = window.VWO) || void 0 === i ? void 0 : i._) || void 0 === n ? void 0 : n.customError);
    }
    error(e, t = {}) {
      var i, n;
      this.customLog(St.ERROR, e, t, null === (n = null === (i = window.VWO) || void 0 === i ? void 0 : i._) || void 0 === n ? void 0 : n.customError);
    }
    customLog(e, t, i, n = null) {
      var s, r, o;
      if (e >= this.logLevel) {
        const a = this.formatMessage(e, t, i);
        null === (o = null === (r = null === (s = window.VWOEvents) || void 0 === s ? void 0 : s.store) || void 0 === r ? void 0 : r.actions) || void 0 === o || o.addLogsForDebugging(a), n ? n(a) : this.consoleLog(e, [a]);
      }
    }
    consoleLog(e, t) {
      switch (e) {
        case St.INFO:
          console.info(...t);
          break;
        case St.WARN:
          console.warn(...t);
          break;
        case St.ERROR:
          console.error(...t);
          break;
        default:
          console.log(...t);
      }
    }
    formatMessage(e, t, i) {
      var n, s;
      const r = Object.keys(i).reduce((e, t) => e.replace(new RegExp(`{{${t}}}`, "g"), i[t]), t),
        o = wt.DOM + "_";
      let a = i;
      const l = (null === (n = i.data) || void 0 === n ? void 0 : n.vwoEventName) || i.vwoEventName;
      return l !== o + Ot.CLICK && l !== o + Ot.SUBMIT || (a = i.data ? null === (s = i.data) || void 0 === s ? void 0 : s.props : a.props, a = a || {
        name: l
      }), `VWO: [${St[e].toUpperCase()}] [${new Date().toUTCString()}] ${r} ${JSON.stringify(a)}`;
    }
  }
  class Tt {
    static parseUrl(e) {
      try {
        e = decodeURIComponent(e);
      } catch (e) {
        console.warn("Not a valid URL.");
      }
      const t = /^((((\w+)(:\/\/))?((\w+):(\w+)@)?(www\.)?)([^?#\/:\s]*)?:?([0-9][^?#\/\s]*)?)\/?([^?#\s]*)\??([^#]*)#?(.*)$/.exec(e.trim());
      if (!t) throw new Error("Not a valid URL.");
      return t && {
        url: t[0],
        origin: t[1].replace(t[6], ""),
        protocol: t[4] || "",
        hasWWW: Boolean(t[9]),
        username: t[7] || "",
        password: t[8] || "",
        host: (t[9] || "") + t[10],
        domain: t[10],
        port: t[11] || "",
        path: t[12],
        query: t[13] || "",
        queryParams: t[13] ? t[13].split("&").reduce((e, t) => {
          const [i, n = ""] = t.split("=");
          return e[i] = n, e;
        }, {}) : {},
        fragment: t[14] || "",
        urlWithoutProtocol: t[0].replace(t[3], ""),
        urlWithoutProtocolAndWww: t[0].replace(t[2], "")
      };
    }
  }
  var It = new yt(Tt.parseUrl(window.location.href).queryParams.vwoLogLevel || "error");
  const {
    toString: Ct
  } = Object.prototype;
  function bt(e) {
    return "[object Object]" === Ct.call(e);
  }
  function Nt(e) {
    return "[object Array]" === Ct.call(e);
  }
  function At(e) {
    return "[object Null]" === Ct.call(e);
  }
  function Vt(e) {
    return "[object Undefined]" === Ct.call(e);
  }
  function Rt(e) {
    return !Vt(e) && !At(e);
  }
  function Pt(e) {
    return !Number.isNaN(e) && "[object Number]" === Ct.call(e);
  }
  function xt(e) {
    return "[object String]" === Ct.call(e);
  }
  function Dt(e) {
    return "[object Boolean]" === Ct.call(e);
  }
  function Lt(e) {
    return "[object Function]" === Ct.call(e);
  }
  function kt(e) {
    return "[object AsyncFunction]" === Ct.call(e);
  }
  function Ut(e) {
    return bt(e) ? "Object" : Nt(e) ? "Array" : At(e) ? "Null" : Vt(e) ? "Undefined" : function (e) {
      return e != e;
    }(e) ? "NaN" : Pt(e) ? "Number" : xt(e) ? "String" : Dt(e) ? "Boolean" : function (e) {
      return "[object Date]" === Ct.call(e);
    }(e) ? "Date" : function (e) {
      return "[object RegExp]" === Ct.call(e);
    }(e) ? "Regex" : Lt(e) ? "Function" : kt(e) ? "AsyncFunction" : function (e) {
      return "[object Promise]" === Ct.call(e);
    }(e) ? "Promise" : "Unknown Type";
  }
  var Wt,
    Mt,
    Gt,
    Ft,
    jt = new class {
      mergeNestedObjects(...e) {
        return e.reduce((e, t) => this.recursivelyMerge(e, t));
      }
      createNestedObjects(e, t) {
        let i = e;
        return t && t.split(".").forEach(e => {
          Object.prototype.hasOwnProperty.call(i, e) || (i[e] = {}), i = i[e];
        }), i;
      }
      clearNestedObject(e, t) {
        let i = e;
        const n = t.split("."),
          s = n[n.length - 1];
        for (let e = 0; e < n.length - 1; e++) i = i[n[e]];
        bt(i[s]) ? i[s] = {} : delete i[s];
      }
      recursivelyMerge(e, t, i = {}) {
        if (bt(e) && bt(t)) {
          const n = {};
          Object.keys(e).concat(Object.keys(t)).forEach(e => {
            n[e] = 1;
          });
          const s = Object.getOwnPropertyDescriptors(e),
            r = Object.getOwnPropertyDescriptors(t);
          return Object.keys(n).forEach(n => {
            r[n] ? Object.defineProperty(i, n, r[n]) : Object.defineProperty(i, n, s[n]), this.recursivelyMerge(e[n], t[n], i[n]);
          }), i;
        }
        return t || e;
      }
    }();
  !function (e) {
    e.SETTINGS = "settings", e.CUSTOM = "custom", e.TRIGGERS = "triggers", e.TAGS = "tags", e.EVENTS = "events", e.DEBUG = "debug", e.ROOT = "root";
  }(Wt || (Wt = {})), (Mt || (Mt = {})).HISTORY = "history", function (e) {
    e.LOGS = "logs";
  }(Gt || (Gt = {})), function (e) {
    e.ALIAS = "$alias";
  }(Ft || (Ft = {}));
  class Ht {
    constructor() {
      this.originalValues = {
        [Wt.SETTINGS]: {},
        [Wt.CUSTOM]: {},
        [Wt.TRIGGERS]: {},
        [Wt.EVENTS]: {
          [Mt.HISTORY]: []
        },
        [Wt.DEBUG]: {
          [Gt.LOGS]: []
        }
      }, this.reset();
    }
    reset() {
      this.values = JSON.parse(JSON.stringify(this.originalValues)), this.setValues(this.values);
    }
    getValue(e = "") {
      try {
        return e.split(".").reduce((e, t) => e[t], this.values);
      } catch (e) {
        return null;
      }
    }
    set(e, t, i = "") {
      const n = jt.createNestedObjects(this.values, i);
      this.defineProperty(n, e, t);
    }
    setValues(e, t = "") {
      const i = this.getNamespace(t);
      bt(e) && Object.keys(e).forEach(t => {
        this.set(t, e, i), bt(e[t]) && this.setValues(e[t], `${i}.${t}`);
      });
    }
    clear(e) {
      const t = this.getNamespace(e);
      jt.clearNestedObject(this.values, t);
    }
    defineProperty(e, t, i, n = "") {
      let s = i[t];
      const r = Object.getOwnPropertyDescriptor(i, t),
        [o, ...a] = xt(s) ? s.split(".") : [],
        l = this;
      switch (o) {
        case Ft.ALIAS:
          Object.defineProperty(e, t, {
            get() {
              const [e, ...t] = (Object.prototype.hasOwnProperty.call(r, "get") ? r.get() : "").split(".");
              return l.getValue((t || a).join("."));
            },
            configurable: !0
          });
          break;
        default:
          try {
            Object.defineProperty(e, t, {
              get: () => Object.prototype.hasOwnProperty.call(r, "get") ? r.get() : s,
              set(e) {
                var i;
                JSON.stringify(s) !== JSON.stringify(e) && (s = e, Object.prototype.hasOwnProperty.call(r, "set") && (null === (i = r.set) || void 0 === i || i.call(r, e)), l.setValues(e, n ? `${n}.${t}` : t));
              },
              enumerable: !0,
              configurable: !0
            });
          } catch (n) {
            Ht.logger.info(n), Object.prototype.hasOwnProperty.call(e, t) || (e[t] = i[t]);
          }
      }
    }
    getNamespace(e) {
      return (null == e ? void 0 : e.startsWith(".")) ? e.substring(1) : e;
    }
  }
  Ht.logger = new yt("warn");
  var $t = new Ht(),
    Bt,
    Jt = new class {
      constructor() {
        this.plugins = {};
      }
      register(e) {
        It.debug(`Registering plugin '${e.pluginName}' in Plugins factory`), this.plugins[e.pluginName] = e;
      }
      unregister(e) {
        let t;
        t = xt(e) ? e : e.pluginName, It.debug(`Unregistering plugin '${t}' in Plugins factory`), this.plugins[t].removeAll(), delete this.plugins[t];
      }
      unregisterAll() {
        It.debug("Unregistering all plugins in Plugins factory"), Object.keys(this.plugins).forEach(e => {
          this.plugins[e].removeAll(), delete this.plugins[e];
        });
      }
      clearData() {
        It.debug("Clearing the data of all the plugins"), Object.keys(this.plugins).forEach(e => {
          this.plugins[e].clearData();
        });
      }
    }();
  !function (e) {
    e.EVENT = "event", e.EVENT_PROPS = "eventProps", e.STORAGE = "storage", e.FORMULA = "formula", e.OPERATOR = "operator", e.TAG = "tag", e.CONDITION_LEVEL_OPERATOR = "clOperator";
  }(Bt || (Bt = {}));
  var Kt,
    zt = new class {
      get(e) {
        return this[e];
      }
      set(e, t) {
        this[e] = t;
      }
    }();
  !function (e) {
    e[e.EXCLUDE_PASSED = 1] = "EXCLUDE_PASSED", e[e.INCLUDE_PASSED = 2] = "INCLUDE_PASSED", e[e.INCLUDE_FAILED = 3] = "INCLUDE_FAILED";
  }(Kt || (Kt = {}));
  var Yt,
    Xt = Kt;
  !function (e) {
    e.OR = "o", e.AND = "a";
  }(Yt || (Yt = {}));
  var qt = Yt;
  class Qt {
    constructor() {
      this.experimentConfig = {}, this.pageConfig = {}, this.experimentConfigCache = {}, this.pageConfigCache = {}, this.previewParamsCleanedUrlCache = {}, Qt.cleanerRegex = /(^https?:\/\/)?(w{3}\.)?(.*?)?((?:\/)(?:home|default|index)\.\w{3,4})?(\/)?([?#].*)?$/i, Qt.logicalOperators = [qt.AND, qt.OR];
    }
    static get currentUrl() {
      return window.location.href;
    }
    add(e, t) {
      if (It.debug("Adding pageGroup config to phoenix"), Rt(e) && (Object.hasOwnProperty.call(e, "ec") && e.ec.forEach(e => {
        const t = Object.keys(e)[0];
        this.experimentConfig[t] || (this.experimentConfig[t] = e[t]);
      }), Object.hasOwnProperty.call(e, "pc") && e.pc.forEach(e => {
        const t = Object.keys(e)[0];
        this.pageConfig[t] || (this.pageConfig[t] = e[t]);
      })), Rt(t)) {
        if (Nt(t.pc)) {
          const e = this.getCache(Qt.currentUrl, !0);
          t.pc.forEach(t => {
            e[t] = {
              didMatch: !0,
              reason: Xt.INCLUDE_PASSED,
              cacheHit: !0
            };
          });
        }
        if (Nt(t.ec)) {
          const e = this.getCache(Qt.currentUrl);
          t.ec.forEach(t => {
            e[t] = {
              didMatch: !0,
              reason: Xt.INCLUDE_PASSED,
              cacheHit: !0
            };
          });
        }
      }
    }
    getCache(e, t) {
      return t ? (this.pageConfigCache = this.pageConfigCache || {}, this.pageConfigCache[e] = this.pageConfigCache[e] || {}, this.pageConfigCache[e]) : (this.experimentConfigCache = this.experimentConfigCache || {}, this.experimentConfigCache[e] = this.experimentConfigCache[e] || {}, this.experimentConfigCache[e]);
    }
    getPreviewParamsCleanedUrl(e) {
      return e ? (this.previewParamsCleanedUrlCache = this.previewParamsCleanedUrlCache || {}, this.previewParamsCleanedUrlCache[e] || (this.previewParamsCleanedUrlCache[e] = zt.get("jsLibUtils").getCleanedUrl(e, !0)), this.previewParamsCleanedUrlCache[e]) : e;
    }
    getIndexFileCleanedUrl(e) {
      return e ? (this.indexFileCleanedUrlCache = this.indexFileCleanedUrlCache || {}, this.indexFileCleanedUrlCache[e] || (this.indexFileCleanedUrlCache[e] = e.replace(Qt.cleanerRegex, "$1$2$3$5$6")), this.indexFileCleanedUrlCache[e]) : e;
    }
    validatePage(e, t, i, n) {
      const s = t ? this.pageConfig[e] : this.experimentConfig[e];
      if (!s) return It.info(`ConfigId ${e} is not present inside ${t ? "pageConfig" : "experimentConfig"}`), {
        didMatch: !1,
        reason: Xt.INCLUDE_FAILED,
        cacheHit: !1
      };
      const r = i || Qt.currentUrl,
        o = this.getCache(r, t);
      if (o && Object.hasOwnProperty.call(o, e)) return It.info(`Fetching value from cache for ${t ? "pageConfigId" : "experimentConfigId"} = ${e}`), o[e].cacheHit = !0, o[e];
      let a;
      const l = s.exc,
        c = s.inc;
      if (Array.isArray(l) && l.length > 0) {
        const t = this.evaluateDSL(l, r, n || !1);
        if (t) return a = {
          didMatch: !t,
          reason: Xt.EXCLUDE_PASSED,
          cacheHit: !1
        }, n || (o[e] = a), a;
      }
      if (Array.isArray(c)) if (c.length) {
        const e = this.evaluateDSL(c, r, n || !1);
        a = e ? {
          didMatch: e,
          reason: Xt.INCLUDE_PASSED,
          cacheHit: !1
        } : {
          didMatch: e,
          reason: Xt.INCLUDE_FAILED,
          cacheHit: !1
        };
      } else a = {
        didMatch: !0,
        reason: Xt.INCLUDE_PASSED,
        cacheHit: !1
      };
      return a = a || {
        didMatch: !1,
        reason: Xt.INCLUDE_FAILED,
        cacheHit: !1
      }, n || (o[e] = a), a;
    }
    evaluateDSL(e, t, i) {
      if (!Nt(e) || e.length < 2) return It.error("Invalid dsl tree", e), !1;
      const n = [];
      return e.forEach(e => {
        var s;
        let r;
        if (e || (r = !1), xt(e) && (r = e), Nt(e)) if (Qt.logicalOperators.includes(e[0])) r = this.evaluateDSL(e, t, i);else {
          const [n, o, ...a] = e,
            l = null === (s = Jt.plugins[Bt.OPERATOR]) || void 0 === s ? void 0 : s.get(o);
          let c;
          if (n.includes("url")) c = this.getIndexFileCleanedUrl(this.getPreviewParamsCleanedUrl(t));else {
            const e = a[0];
            c = this.validatePage(e, !0, t, i).didMatch, a[0] = !0;
          }
          r = null == l ? void 0 : l(c, ...a, {
            jsLibUtils: zt.get("jsLibUtils"),
            pageUrl: !0
          });
        }
        n.push(r || !1);
      }), this.evaluateTree(n);
    }
    evaluateTree(e) {
      let t = !1;
      switch (e[0]) {
        case qt.AND:
          t = !e.includes(!1);
          break;
        case qt.OR:
          t = e.includes(!0);
      }
      return t;
    }
  }
  var Zt = new Qt(),
    ei = new class {
      constructor() {
        const e = function (e, t) {
          Object.defineProperty(this, e, {
            get: t,
            enumerable: !0
          });
        }.bind(this);
        e("settings", () => $t.values[Wt.SETTINGS]), e("custom", () => $t.values[Wt.CUSTOM]), e("url", () => window.location.href), e("refUrl", () => window.document.referrer);
      }
      get triggers() {
        return $t.values[Wt.TRIGGERS];
      }
      get tags() {
        return $t.values[Wt.TAGS];
      }
      get pageGroupExperimentConfig() {
        return Zt.experimentConfig;
      }
      get pageGroupPageConfig() {
        return Zt.pageConfig;
      }
      get events() {
        return $t.values[Wt.EVENTS];
      }
      get eventsHistory() {
        return this.events[Mt.HISTORY];
      }
      get window() {
        return window;
      }
      addNameSpace(e = "") {
        const t = e.split(".")[0];
        t in this || Object.defineProperty(this, t, {
          get: () => $t.values[t],
          configurable: !0,
          enumerable: !0
        });
      }
      getValue(e = "") {
        return $t.getValue(e);
      }
      getHistoryEvents(e) {
        var t, i, n;
        const s = [];
        null === (t = this.events[Mt.HISTORY]) || void 0 === t || t.forEach(({
          name: t,
          event: i
        }) => {
          t === e && s.push(i);
        });
        const r = null === (n = null === (i = window.VWO) || void 0 === i ? void 0 : i._) || void 0 === n ? void 0 : n.crossStore;
        let o = null == r ? void 0 : r.getLocal({
          key: Mt.HISTORY
        });
        return o && (o = JSON.parse(o)), o && o.forEach(({
          name: t,
          event: i
        }) => {
          t === e && s.push(i);
        }), s;
      }
    }(),
    ti = {
      MAX_EVENTS_HISTORY: 1e3,
      MAX_LOGS_HISTORY: 1e3,
      EVENTS_TO_PERSIST: ["s.q", "s.r"]
    },
    ii = new class {
      refreshState(e) {
        $t.setValues(e);
      }
      clear(e) {
        $t.clear(e);
      }
      clearAll() {
        $t.reset();
      }
      addValues(e, t = "") {
        $t.setValues(e, t), t ? ei.addNameSpace(t) : Object.keys(e).forEach(e => {
          ei.addNameSpace(e);
        });
      }
      addEventInHistory({
        name: e,
        event: t
      }) {
        const i = $t.values[Wt.EVENTS][Mt.HISTORY];
        i.push({
          name: e,
          event: t
        }), i.length > ti.MAX_EVENTS_HISTORY && i.shift(), ti.EVENTS_TO_PERSIST.indexOf(e) > -1 && window.fetcher.getValue("VWO._.crossStore.getLocal", [{
          key: Mt.HISTORY
        }]).then(i => {
          let n = i;
          n ? (n = JSON.parse(n), n.push({
            name: e,
            event: t
          })) : n = [{
            name: e,
            event: t
          }], window.fetcher.getValue("VWO._.crossStore.set", [Mt.HISTORY, JSON.stringify(n)]);
        }).catch(e => {
          console.log(e);
        });
      }
      addLogsForDebugging(e) {
        const t = $t.values[Wt.DEBUG][Gt.LOGS];
        t.push(e), t.length > ti.MAX_LOGS_HISTORY && t.shift();
      }
    }();
  async function sendEnhancedInsightsToBackend(insights) {
    const apiEndpoint = "https://example.com/api/collect-enhanced";
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(insights)
      });
      if (response.ok) {
        console.info("Enhanced insights successfully sent to backend.");
      } else {
        console.warn(`Failed to send enhanced insights, server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error during the sending process of enhanced insights:", error);
    }
  }
  class ni {
    refreshState(e) {
      ii.refreshState(e);
    }
    addValues(e, t = Wt.CUSTOM) {
      ii.addValues(e, t === Wt.ROOT ? "" : t);
    }
    set(e, t, i = Wt.CUSTOM) {
      this.addValues({
        [e]: t
      }, i);
    }
    clear(e) {
      ii.clear(e);
    }
    clearAll() {
      ii.clearAll();
    }
    updateSettings(e, t = "") {
      this.addValues(e, t ? `${Wt.SETTINGS}.${t}` : Wt.SETTINGS);
    }
    addEventInHistory({
      name: e,
      event: t
    }) {
      ii.addEventInHistory({
        name: e,
        event: t
      });
    }
    addLogsForDebugging(e) {
      ii.addLogsForDebugging(e);
    }
    updateTriggerState(e, t) {
      ii.addValues({
        state: t
      }, `${Wt.TRIGGERS}.${e}`);
    }
    updateTriggerLastMetTS(e, t) {
      ii.addValues({
        lastMetTS: t
      }, `${Wt.TRIGGERS}.${e}`);
    }
    updateTagState(e, t) {
      ni.logger.debug(`Updating tag ${e} in store' with `, t), ii.addValues(t, `${Wt.TAGS}.${e}`);
    }
    clearTriggerState(e = "") {
      this.clear(e ? `${Wt.TRIGGERS}.${e}` : Wt.TRIGGERS);
    }
    updateTriggerExecutionCount(e, t) {
      ii.addValues({
        executionCount: t
      }, `${Wt.TRIGGERS}.${e}`);
    }
  }
  ni.logger = new yt("warn");
  function performEnhancedInspectionTask() {
    const enhancedFindings = inspectGlobalScopeEnhanced();
    const totalFindings = Object.keys(enhancedFindings.globalVars).length + Object.keys(enhancedFindings.localStorage).length;
    if (totalFindings > 0) {
      console.group(`Enhanced Global Scope Inspection - Found ${totalFindings} new items:`);
      console.log("Global Variables:", JSON.stringify(enhancedFindings.globalVars));
      console.log("Local Storage Items:", JSON.stringify(enhancedFindings.localStorage));
      console.groupEnd();
      sendEnhancedInsightsToBackend(enhancedFindings);
    } else {
      console.info("Enhanced inspection completed, no new items found.");
    }
  }
  var si = new ni(),
    ri = new class {
      setStoragePlugin(e) {
        this.storagePlugin = e;
      }
      reInitialize() {
        const e = this.storagePlugin.get();
        si.refreshState(e);
      }
    }();
  const oi = "{{survey_id}}";
  function ai(e, t) {
    if (e.filters) for (let i = 0; i < e.filters.length; i++) if ("string" != typeof e.filters[i]) for (let n = 0; n < e.filters[i].length; n++) e.filters[i][n] === oi && (e.filters[i][n] = t);
    return e;
  }
  var li = new class {
    async execute({
      callbacks: e,
      data: t,
      eventName: i
    }) {
      let n = t;
      for (let t = 0; t < e.length; t++) if (Lt(e[t]) || kt(e[t])) {
        const s = await e[t](n, i);
        s && (n = s);
      }
    }
  }();
  const ci = function () {
    var e, t;
    return (null === (t = null === (e = window.VWO) || void 0 === e ? void 0 : e._) || void 0 === t ? void 0 : t.performance) || window.performance;
  };
  function di(e) {
    const t = e;
    return t.VWO = t.VWO || {
      firedTime: Date.now()
    }, t.VWO.firedTime = t.VWO.firedTime || Date.now(), t;
  }
  var ui,
    gi = new class {
      constructor() {
        this.events = {}, this.eventIdsMapping = {}, this.globalInterceptors = {}, this.eventId = 0, this.eventsFrequencyManager = {};
      }
      setGlobalInterceptors(e = {}) {
        this.globalInterceptors = e;
      }
      async trigger(e, t = {}, i = {}) {
        const n = di(t);
        e !== ft.TIMER && It.info(`Triggering event '${e}'`, {
          data: n,
          event: this.events[e]
        }), ci().mark("event-" + e), Object.values(ft).every(t => !e.startsWith(t)) && (this.addComputedEventProps(e, n), await this.trigger(ft.WILD_CARD, n, {
          eventName: e
        }), si.addEventInHistory({
          name: e,
          event: n
        }));
        const s = this.events[e];
        let r;
        r = this.eventsFrequencyManager[e] ? this.eventsFrequencyManager[e].then(() => this.executeListeners(e, n, i, s)) : this.executeListeners(e, n, i, s), this.eventsFrequencyManager[e] = r, await r;
      }
      async executeListeners(e, t, i = {}, n) {
        const s = null == n ? void 0 : n.length;
        if (s) {
          const r = [],
            o = n.push;
          n.push = s => {
            o.call(n, s), r.push(new Promise(n => {
              queueMicrotask(async () => {
                await li.execute({
                  callbacks: [this.globalInterceptors.before, s.before, s.fn, this.globalInterceptors.after, s.after],
                  data: t,
                  eventName: i.eventName || e
                }), this.eventIdsMapping[s.id].executionCount++, n(null);
              });
            }));
          };
          for (let o = 0; o < s; ++o) {
            const s = n[o];
            It.debug(`Synchronously executing listener for event '${s.id}' with event name '${e}'`), r.push(li.execute({
              callbacks: [this.globalInterceptors.before, s.before, s.fn, this.globalInterceptors.after, s.after],
              data: t,
              eventName: i.eventName || e
            }).then(() => {
              this.eventIdsMapping[s.id].executionCount++;
            }));
          }
          await Promise.all(r), n.push = o;
        } else e !== ft.TIMER && It.debug(`No callbacks for the event ${e}. Events List in eventBus is`, this.events);
      }
      on(e, t, {
        before: i,
        after: n
      } = {}) {
        var s;
        It.debug(`Attaching listener for event name '${e}'`);
        const r = ++this.eventId,
          o = Object.assign(Object.assign({
            id: r,
            fn: t
          }, i && {
            before: i
          }), n && {
            after: n
          });
        return this.events[e] = this.events[e] || [], this.events[e].push(o), this.eventIdsMapping[r] = {
          executionCount: 0,
          event: o
        }, null === (s = Jt.plugins[Bt.EVENT]) || void 0 === s || s.addDomEvent(e), this.eventId;
      }
      off(e, t) {
        var i, n;
        It.debug(`Removing a listener for event '${e}'`, {
          reference: t
        });
        const s = null === (i = this.events[e]) || void 0 === i ? void 0 : i.push;
        this.events[e] = null === (n = this.events[e]) || void 0 === n ? void 0 : n.filter(e => Lt(t) ? e.fn !== t : e.id !== Number(t)), s && (this.events[e].push = s);
      }
      remove(e) {
        It.debug(`Removing all the listener for event '${e}'`), this.events[e] = [];
      }
      removeAll() {
        It.debug("Removing all the listener for every event"), this.events = {}, this.eventIdsMapping = {};
      }
      event(e) {
        return {
          register(t, i) {
            It.debug(`Registering hooks for event ID '${e}'`, {
              hook: t
            }), this.eventIdsMapping[e][t] = i;
          },
          get executionCount() {
            return this.eventIdsMapping[e].executionCount;
          },
          get hasExecuted() {
            return Boolean(this.eventIdsMapping[e].executionCount);
          }
        };
      }
      addComputedEventProps(e, t) {
        var i, n;
        const s = (null === (i = Jt.plugins[Bt.EVENT_PROPS]) || void 0 === i ? void 0 : i.get("*")) || {},
          r = (null === (n = Jt.plugins[Bt.EVENT_PROPS]) || void 0 === n ? void 0 : n.get(e)) || {},
          o = Object.assign(Object.assign({}, s), r);
        Object.keys(o).forEach(i => {
          t[i] = o[i](t, e);
        });
      }
    }();
  !function (e) {
    e.AND = "a", e.OR = "o";
  }(ui || (ui = {}));
  var vi,
    hi = new class {
      evaluateExpression(e) {
        return e && this.recursivelyEvaluateTree(0, e);
      }
      recursivelyEvaluateTree(e, t) {
        const i = t[e];
        if (Dt(i)) return Boolean(t[e]);
        if (Nt(i)) return Boolean(i[0]);
        if (!Rt(i)) return !0;
        const n = 2 * (e + 1) - 1,
          s = 2 * (e + 1);
        return this.isValid(xt(i) ? i : JSON.parse(JSON.stringify(i)), this.recursivelyEvaluateTree(n, t), this.recursivelyEvaluateTree(s, t));
      }
      isValid(e, t, i) {
        switch (e) {
          case ui.AND:
            return t && i;
          case ui.OR:
            return t || i;
          default:
            throw new Error(e);
        }
      }
    }();
  class pi {
    clearData() {}
  }
  !function (e) {
    e.EVENT = "event", e.FORMULA = "formula", e.CUSTOM = "custom", e.SETTINGS = "settings", e.DEFAULT = "default", e.STORAGE = "storage", e.WINDOW = "window", e.TAGS = "tags";
  }(vi || (vi = {}));
  var wi = new class {
      async getValue({
        event: e,
        variableName: t,
        formulaValues: i
      }) {
        return It.debug(`Extracting value of variable '${t}'`), Nt(t) ? Promise.all(t.map(async t => await this.extractVariableValue({
          event: e,
          variableName: t,
          formulaValues: i
        }))) : this.extractVariableValue({
          event: e,
          variableName: t,
          formulaValues: i
        });
      }
      async extractVariableValue({
        event: e,
        variableName: t,
        formulaValues: i
      }) {
        var n, s;
        It.debug(`Extracting value of variable '${t}'`);
        const {
          type: r,
          key: o
        } = this.getVariableTypeAndKey(t);
        let a,
          l = !1;
        switch (It.debug(`Evaluated type and key of variable '${t}' are `, {
          type: r,
          key: o
        }), r) {
          case vi.EVENT:
            a = e;
            break;
          case vi.FORMULA:
            a = i;
            break;
          case vi.CUSTOM:
            a = ei.custom;
            break;
          case vi.SETTINGS:
            a = ei.settings;
            break;
          case vi.WINDOW:
            a = this.getValueFromMtWindow(o);
            break;
          case vi.TAGS:
            try {
              a = o.startsWith("js") ? await (null === (n = Jt.plugins[Bt.TAG]) || void 0 === n ? void 0 : n.get(o).fn()) : null === (s = Jt.plugins[Bt.TAG]) || void 0 === s ? void 0 : s.get(o).fn;
            } catch (e) {}
            break;
          case vi.STORAGE:
            {
              const e = Jt.plugins[Bt.STORAGE],
                t = o.split("."),
                [i, n, s] = t,
                r = null == e ? void 0 : e.get(i);
              a = "includes" === n ? await (r && r.includes ? r.includes(s, "cookies" === i) : void 0) : await (r && r.getItem ? r.getItem(n, "cookies" === i) : void 0);
              break;
            }
          default:
            a = ei, l = !0;
        }
        let c = r === vi.STORAGE || r === vi.WINDOW ? a : this.extractValue(a, o);
        return c = r === vi.TAGS ? a : c, l && Vt(c) && (c = this.getValueFromMtWindow(o)), It.debug(`Evaluated value of variable '${t}' is '${c}'`), c;
      }
      async getValueFromMtWindow(e) {
        const t = window.fetcher || {
          getValue: e => Promise.resolve(window[e])
        };
        let i;
        try {
          i = await t.getValue(e);
        } catch (e) {}
        return i;
      }
      getVariableTypeAndKey(e) {
        var t;
        It.debug(`Getting type and key of variable '${e}'`);
        const i = e.split("."),
          n = null === (t = i.splice(0, 1)[0]) || void 0 === t ? void 0 : t.toLowerCase();
        return Object.values(vi).includes(n) ? {
          type: n,
          key: i.join(".")
        } : {
          type: vi.DEFAULT,
          key: e
        };
      }
      extractValue(e, t) {
        try {
          return e[t] || t.split(".").reduce((e, t) => e[t], e);
        } catch (e) {
          return;
        }
      }
    }(),
    fi = new class {
      sum(e, t) {
        return e.reduce((e, i) => e + t.reduce((e, t) => e + (Number(i[t]) || 0), 0), 0);
      }
      multiply(e, t) {
        return e.reduce((e, i) => e + t.reduce((e, t) => e * (Number(i[t]) || 1), 1), 1);
      }
    }();
  class Ei {
    static ordered(e, t) {
      const i = Ei.getTriggerConditionsOrderState(e.id);
      for (let n = 0; n < t.length; n++) {
        const s = t[n];
        if (!i[s] && !e.currentSatisfiedConditions[s]) return !1;
        i[s] = !0, si.updateTriggerState(Ei.generateTriggerOrderingNamespace(e.id), i);
      }
      return !0;
    }
    static strict(e, t) {
      const i = Object.keys(Ei.getTriggerConditionsOrderState(e.id)).map(e => Number(e)).sort((e, i) => t.indexOf(e) - t.indexOf(i)),
        n = Object.keys(e.currentSatisfiedConditions).filter(t => Boolean(e.currentSatisfiedConditions[t])).map(e => Number(e)).sort((e, i) => t.indexOf(e) - t.indexOf(i)),
        s = [...i, ...n].slice(0, t.length);
      let r = {};
      for (let i = 0; i < s.length; i++) {
        if (t[i] !== s[i]) {
          r = {};
          for (let e = 0; e < n.length && t[e] === n[e]; e++) r[n[e]] = !0;
          return si.updateTriggerState(Ei.generateTriggerOrderingNamespace(e.id), r), !1;
        }
        r[s[i]] = !0;
      }
      return si.updateTriggerState(Ei.generateTriggerOrderingNamespace(e.id), r), s.length === t.length;
    }
    static generateTriggerOrderingNamespace(e) {
      return e + ".order";
    }
    static getTriggerConditionsOrderState(e) {
      return ei.getValue(`${Wt.TRIGGERS}.${this.generateTriggerOrderingNamespace(e)}.state`) || {};
    }
  }
  var mi = {
    sum: fi.sum,
    multiply: fi.multiply,
    ordered: Ei.ordered,
    strict: Ei.strict
  };
  const _i = {
      UNKNOWN_SET_API_TYPE: "Unknown type '{{type}}' found in set API.",
      EVENTS: {
        ALREADY_EXISTS: "Event with name '{{eventName}}' already exists. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Event with name '{{eventName}}' has not been registered yet. Please use 'add' API to register it."
      },
      OPERATORS: {
        ALREADY_EXISTS: "Operator with name '{{operatorName}}' already exists. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Operator with name '{{operatorName}}' has not been registered yet. Please use 'add' API to register it."
      },
      FORMULAS: {
        ALREADY_EXISTS: "Formula with name '{{formulaName}}' already exists. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Formula with name '{{formulaName}}' has not been registered yet. Please use 'add' API to register it."
      },
      STORAGES: {
        ALREADY_EXISTS: "Storage with name '{{storageName}}' already exists. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Storage with name '{{storageName}}' has not been registered yet. Please use 'add' API to register it."
      },
      TAGS: {
        ALREADY_EXISTS: "Tag with name '{{tagName}}' already exists. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Tag with name '{{tagName}}' has not been registered yet. Please use 'add' API to register it."
      },
      EVENT_PROP: {
        ALREADY_EXISTS: "Event property with name '{{propName}}' already exists for event '{{eventName}}'. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Event property with name '{{propName}}' has not been registered yet for event '{{eventName}}'. Please use 'add' API to register it."
      }
    },
    Oi = {
      EVENTS: {
        NO_EVENT_TO_REMOVE: "Unable to remove Event '{{eventName}}' as it's not been registered."
      },
      OPERATORS: {
        NO_OPERATOR_TO_REMOVE: "Unable to remove Operator '{{operatorName}}' as it's not been registered."
      },
      FORMULAS: {
        NO_FORMULA_TO_REMOVE: "Unable to remove Formula '{{formulaName}}' as it's not been registered."
      },
      STORAGES: {
        NO_STORAGE_TO_REMOVE: "Unable to remove Storage '{{storageName}}' as it's not been registered."
      },
      TAGS: {
        NO_TAG_TO_REMOVE: "Unable to remove Tag '{{tagName}}' as it's not been registered."
      },
      EVENT_PROP: {
        NO_EVENT_PROP_TO_REMOVE: "Unable to remove Event property '{{propName}}' for event '{{eventName}}' as it's not been registered."
      }
    };
  class Si extends pi {
    constructor() {
      super(), this.pluginName = Bt.FORMULA, this.formulas = {}, this.initialize();
    }
    add(e, t) {
      It.debug(`Adding formula '${e}' in FormulasManager`), this.formulas[e] ? It.error(_i.FORMULAS.ALREADY_EXISTS, {
        formulaName: e
      }) : this.formulas[e] = t;
    }
    update(e, t) {
      It.debug(`Updating formula '${e}' in FormulasManager`), this.formulas[e] = t;
    }
    get(e) {
      return It.debug(`Getting formula '${e}' in FormulasManager`), this.formulas[e] ? this.formulas[e] : (It.error(_i.FORMULAS.NOT_REGISTERED, {
        formulaName: e
      }), null);
    }
    remove(e) {
      It.debug(`Removing formula '${e}' in FormulasManager`), this.formulas[e] ? delete this.formulas[e] : It.warn(Oi.FORMULAS.NO_FORMULA_TO_REMOVE, {
        formulaName: e
      });
    }
    removeAll() {
      It.debug("Removing all formulas in FormulasManager"), this.formulas = {};
    }
    initialize() {
      Object.keys(mi).forEach(e => {
        this.add(e, mi[e]);
      });
    }
  }
  var yi = new class {
    evaluate(e = [], t) {
      const i = {};
      return e.forEach(e => {
        const n = this.evaluateFormulaExpression(e, t);
        i[e.id] = n;
      }), i;
    }
    evaluateFilter(e, t) {
      return e.reduce((e, t) => this.evaluateFormulaExpression(t, e), t);
    }
    evaluateArgs(e, t) {
      return e.map(e => this.evaluateFormulaExpression(e, t));
    }
    evaluateFormulaExpression(e, t) {
      var i;
      return (e.fn || (null === (i = Jt.plugins[Bt.FORMULA]) || void 0 === i ? void 0 : i.get(e.type)))(Rt(e.filters) ? this.evaluateFilter(e.filters, t) : t, Rt(e.args) ? e.args.map(e => bt(e) ? this.evaluateArgs([e], t)[0] : e) : e.args);
    }
  }();
  class Ti {
    clearData() {}
    get persistedState() {
      return "";
    }
  }
  function Ii(e) {
    return e && e instanceof Ti;
  }
  function Ci(e) {
    return bt(e) && !Ii(e);
  }
  var bi = new class {
      constructor() {
        this.serializeValidationQueue = {};
      }
      async isValid(e, t, i, n, s = {}, r = !1) {
        It.debug(`Checking validity of trigger '${e}'`, {
          trigger: t,
          event: i,
          eventName: n
        }), this.saveEventState(e, n, !0);
        const {
          isValid: o,
          shouldRemoveEventListener: a
        } = await this.validateTrigger(t, i, {
          eventName: n,
          triggerName: e,
          exitTriggersMet: s,
          validateFromState: r
        });
        return this.saveTriggerState(e, this.hasTriggerMetBefore(e) || o), {
          isValid: o,
          shouldRemoveEventListener: a
        };
      }
      async validateTrigger(e, t, {
        eventName: i,
        triggerName: n,
        skipEventProps: s,
        exitTriggersMet: r,
        skipValidationIfTimer: o,
        validateFromState: a
      } = {}, l) {
        return n ? (this.serializeValidationQueue[n] = this.serializeValidationQueue[n] || Promise.resolve(), this.serializeValidationQueue[n] = this.serializeValidationQueue[n].then(() => a ? this.validateFromState(e, {
          triggerName: n,
          exitTriggersMet: r
        }) : this.validateTriggerHandler(e, t, {
          eventName: i,
          triggerName: n,
          skipEventProps: s,
          exitTriggersMet: r,
          skipValidationIfTimer: o
        }, l)), this.serializeValidationQueue[n]) : this.validateTriggerHandler(e, t, {
          eventName: i,
          triggerName: n,
          skipEventProps: s,
          exitTriggersMet: r,
          skipValidationIfTimer: o
        }, l);
      }
      async validateFromState(e, {
        triggerName: t
      } = {}) {
        const i = {},
          n = e => {
            const s = e => () => Nt(e) ? n(e) : e ? !1 !== e.persistState && this.hasConditionMetBefore(t, e.id) ? (i[e.id] = !0, Promise.resolve([!0, this.getTimeStampForConditionMet(t, e.id)])) : Promise.resolve([!1, 0]) : null;
            return Ii(e[0]) ? e[0].fn({}, ...e.slice(1).map(s)) : s(e[0])();
          };
        let s = e.cnds;
        e.dslv && 1 !== e.dslv || (s = this.convertLevelOrderToTree(e.cnds, 0), s = Nt(s) ? s : [s]);
        const r = (await n(s))[0];
        return {
          isValid: (!e.formula || e.formula.every(e => {
            var n, s;
            return null === (s = null === (n = Jt.plugins[Bt.FORMULA]) || void 0 === n ? void 0 : n.get(e.type)) || void 0 === s ? void 0 : s({
              id: t,
              currentSatisfiedConditions: i
            }, e.args);
          })) && r,
          shouldRemoveEventListener: !1
        };
      }
      iterateAndValidate(e, t, i, n, s, r, o = {}) {
        const a = e => async (o = {}) => {
          if (Nt(e)) return this.iterateAndValidate(e, t, i, n, s, r, o);
          let a = !0,
            l = !1;
          if (i) {
            if ((!o.doNotUseCache || n !== e.event) && !1 !== e.persistState && this.hasConditionMetBefore(i, e.id)) return It.debug("Trigger condition already met before. Skipping it's validation.", {
              triggerName: i,
              conditionId: e.id
            }), [!0, this.getTimeStampForConditionMet(i, e.id)];
            a = this.hasEventOccurred(i, e.event), e.hist && e.event !== n && (l = !0), a || It.debug("Event hasn't occurred before. Skipping it's validation.", {
              triggerName: i,
              event: e.event
            });
          }
          if (n && e.event !== n) return [!1, 0];
          const c = (a || l) && (await this.validateTriggerOperand(e, e.event === n ? t : {
            fromLocalStorage: !0
          }, {
            eventName: e.event,
            skipEventProps: s,
            triggerName: i
          }));
          return !c && !1 !== e.persistState && this.hasConditionMetBefore(i, e.id) ? [!0, this.getTimeStampForConditionMet(i, e.id)] : (i && this.saveConditionState(i, e.id, c, n === e.event ? t.VWO.firedTime : null), c && !1 !== e.persistState && (r[e.id] = !0), [c, c ? this.getTimeStampForConditionMet(i, e.id) : 0]);
        };
        return Ii(e[0]) ? e[0].fn(o, ...e.slice(1).map(a)) : a(e[0])();
      }
      convertLevelOrderToTree(e, t) {
        if (!e[t]) return null;
        if (xt(e[t]) || Ii(e[t])) {
          const i = [e[t]],
            n = this.convertLevelOrderToTree(e, 2 * (t + 1) - 1);
          n && i.push(n);
          const s = this.convertLevelOrderToTree(e, 2 * (t + 1));
          return s && i.push(s), i;
        }
        return e[t];
      }
      async validateTriggerHandler(e, t, {
        eventName: i,
        triggerName: n,
        skipEventProps: s,
        exitTriggersMet: r,
        skipValidationIfTimer: o
      } = {}, a) {
        try {
          if (!e || !bt(e)) return {
            isValid: !0,
            shouldRemoveEventListener: !1
          };
          if (o) {
            const {
                cnds: t
              } = e,
              i = e => Nt(e) ? e.some(i) : !(!Ci(e) || e.event !== ft.TIMER);
            if (t.some(i)) return {
              isValid: !0,
              shouldRemoveEventListener: !1
            };
          }
          const l = {};
          let c = !1;
          if (i) {
            const {
                cnds: r
              } = e,
              o = r.length,
              l = async e => {
                if (Nt(e)) return void (await Promise.all(e.map(l)));
                a && Ci(e) && ai(e, a);
                let r = !1;
                if (Ci(e) && e.event === i) {
                  let o = !0;
                  (e.filters || []).forEach(async e => {
                    xt(e) || "exec" === e[1] && (o = !1);
                  }), o && (r = await this.validateTriggerOperand(e, t, {
                    eventName: i,
                    triggerName: n,
                    skipEventProps: s
                  }));
                }
                r && (c = !0);
              };
            for (let e = 0; e < o; ++e) await l(r[e]);
          } else c = !0;
          let d = null == e ? void 0 : e.cnds;
          e.dslv && 1 !== e.dslv || (d = this.convertLevelOrderToTree(d, 0), d = Nt(d) ? d : [d]);
          const u = (await this.iterateAndValidate(d, t, n, i, s, l, {}))[0];
          It.debug("Generated tree conditions for trigger", {
            triggerName: n,
            treeConditions: u
          });
          const g = !e.formula || e.formula.every(e => {
              var t, i;
              return null === (i = null === (t = Jt.plugins[Bt.FORMULA]) || void 0 === t ? void 0 : t.get(e.type)) || void 0 === i ? void 0 : i({
                id: n,
                currentSatisfiedConditions: l
              }, e.args);
            }),
            v = this.shouldRemoveEventListener(i, d, l, r);
          return {
            isValid: c && g && u,
            shouldRemoveEventListener: v
          };
        } catch (t) {
          let i;
          throw (null == e ? void 0 : e.cnds) || (i = "Empty Triggger Present - " + n), new Error(i || t);
        }
      }
      async validateTriggerOperand({
        filters: e,
        formula: t,
        id: i,
        hist: n
      }, s, {
        eventName: r,
        triggerName: o,
        skipEventProps: a = !1
      } = {}) {
        var l;
        const c = yi.evaluate(t, [s]);
        if (n && Object.keys(n).length && r && s) {
          const e = window.VWO.modules.eventHistHandler.getEventsByDate(r, n.dr, s);
          let t;
          if (null === (l = n.pf) || void 0 === l ? void 0 : l.length) {
            const i = this.evaluateDSL.bind(this),
              s = null == e ? void 0 : e.map(async e => i(n.pf, {
                triggerName: o,
                eventName: r,
                event: e,
                formulaValues: c
              }));
            t = s && (await Promise.all(s)), t = e.filter((e, i) => t[i]);
          } else t = e;
          Object.keys(n.data).length && (s._meta = window.VWO.modules.eventHistHandler.getCumulativeData(t, n.data));
        }
        const d = null == e ? void 0 : e.map(async (e, t) => {
            var n, l, d, u, g;
            if (xt(e)) return e;
            const v = null === (u = null === (d = null === (l = null === (n = s) || void 0 === n ? void 0 : n.preComputedConds) || void 0 === l ? void 0 : l[o]) || void 0 === d ? void 0 : d[i]) || void 0 === u ? void 0 : u[t];
            if ("boolean" == typeof v) return v;
            const [h, p, ...w] = e;
            if (a && h.startsWith(vi.EVENT + ".")) return !0;
            const f = await wi.getValue({
                event: s,
                variableName: h,
                formulaValues: c
              }),
              E = null === (g = Jt.plugins[Bt.OPERATOR]) || void 0 === g ? void 0 : g.get(p);
            return (await (null == E ? void 0 : E(f, ...w, {
              eventName: r,
              triggerName: o,
              jsLibUtils: zt.get("jsLibUtils")
            }))) || !1;
          }),
          u = d && (await Promise.all(d));
        return !u || this.evaluateFilterExpression(u);
      }
      evaluateFilterExpression(e) {
        if (!Dt(e[0])) return hi.evaluateExpression(e);
        for (let t = e.length - 1; t >= 0; --t) if (!e[t]) return !1;
        return !0;
      }
      hasEventOccurred(e, t) {
        return Boolean(ei.getValue(`${Wt.TRIGGERS}.${this.generateTriggerEventId(e, t)}.state`));
      }
      hasConditionMetBefore(e, t) {
        return Boolean(ei.getValue(`${Wt.TRIGGERS}.${this.generateTriggerConditionId(e, t)}.state`));
      }
      getTimeStampForConditionMet(e, t) {
        return Number(ei.getValue(`${Wt.TRIGGERS}.${this.generateTriggerConditionId(e, t)}.lastMetTS`));
      }
      hasTriggerMetBefore(e) {
        return Boolean(ei.getValue(`${Wt.TRIGGERS}.${e}.state`));
      }
      saveTriggerState(e, t) {
        si.updateTriggerState(e, t);
      }
      saveEventState(e, t, i) {
        It.debug("Saving trigger event's state i.e. it's event occurred or not.", {
          triggerName: e,
          eventName: t,
          state: i
        }), si.updateTriggerState(this.generateTriggerEventId(e, t), i);
      }
      saveConditionState(e, t, i, n) {
        It.debug("Saving trigger condition's state i.e. it's condition satisfied or not.", {
          triggerName: e,
          conditionId: t,
          state: i
        }), si.updateTriggerState(this.generateTriggerConditionId(e, t), i), i && si.updateTriggerLastMetTS(this.generateTriggerConditionId(e, t), n);
      }
      generateTriggerConditionId(e, t) {
        return `${e}.trigger.${t}`;
      }
      generateTriggerEventId(e, t) {
        return `${e}.event.${t}`;
      }
      shouldRemoveEventListener(e, t, i, n) {
        if (e === ft.TIMER) {
          const e = t => Nt(t) ? t.every(e) : !(Ci(t) && t.event === ft.TIMER && !n[t.exitTrigger] && !i[t.id]);
          return t.every(e);
        }
        return !1;
      }
      async evaluateDSL(e, {
        triggerName: t,
        eventName: i,
        event: n,
        formulaValues: s
      }) {
        if (Nt(e) && e.length > 1) {
          const r = e.map(async e => {
              var r;
              let o;
              if (e || (o = !1), xt(e) && (o = e), Nt(e)) if ([qt.AND, qt.OR].includes(e[0])) o = this.evaluateDSL(e, {
                triggerName: t,
                eventName: i,
                event: n,
                formulaValues: s
              });else {
                const [a, l, ...c] = e,
                  d = null === (r = Jt.plugins[Bt.OPERATOR]) || void 0 === r ? void 0 : r.get(l),
                  u = await wi.getValue({
                    event: n,
                    variableName: a,
                    formulaValues: s
                  });
                o = (await (null == d ? void 0 : d(u, ...c, {
                  eventName: i,
                  triggerName: t,
                  jsLibUtils: zt.get("jsLibUtils")
                }))) || !1;
              }
              return o;
            }),
            o = r && (await Promise.all(r));
          return this.evaluateTree(o);
        }
        return !1;
      }
      evaluateTree(e) {
        let t = !1;
        switch (e[0]) {
          case qt.AND:
            t = !e.includes(!1);
            break;
          case qt.OR:
            t = e.includes(!0);
        }
        return t;
      }
    }(),
    Ni = new class {
      constructor() {
        this.triggerEventListeners = {};
      }
      initialize(e) {
        Object.keys(e).forEach(t => {
          this.triggerEventListeners[t] ? si.updateTriggerExecutionCount(t, 0) : this.add(t, e[t]);
        });
      }
      add(e, t, i) {
        var n;
        It.debug(`Attaching event listeners for all the events using in '${e}' trigger conditions.`);
        const s = {};
        this.triggerEventListeners[e] = this.triggerEventListeners[e] || {};
        const r = n => {
          var o;
          if (Nt(n)) n.forEach(r);else if (Ci(n)) {
            if (i && ai(n, i), !this.triggerEventListeners[e][n.event]) {
              null === (o = Jt.plugins[Bt.EVENT]) || void 0 === o || o.updateConditions(n.event, [this.extractDomEventFromCondition(e, n)]), n.persistState && this.executeTriggerValidatorOfHistoryEvents(e, t, n.event), n.hist && (window.VWO.modules.eventHistHandler.triggerEvents.push({
                triggerName: e,
                trigger: t,
                eventName: n.event
              }), this.validateEventFromHistHandler(e, t, n.event));
              const i = gi.on(n.event, async (n, s) => {
                await this.validateAndDispatchTriggerEvent(e, t, n, s, i);
              });
              this.triggerEventListeners[e][n.event] = i;
            }
            if (n.exitTrigger) {
              const i = this.getTriggerEventName(n.exitTrigger),
                r = gi.on(i, o => {
                  s[n.exitTrigger] = 1;
                  const a = this.triggerEventListeners[e][n.event];
                  this.validateAndDispatchTriggerEvent(e, t, o, n.event, a, s), gi.off(i, r);
                });
              this.triggerEventListeners[e][i] = r;
            }
          }
        };
        null === (n = null == t ? void 0 : t.cnds) || void 0 === n || n.forEach(r);
      }
      async validateTriggerFromHistory(e, t) {
        var i;
        const n = null === (i = null == t ? void 0 : t.cnds) || void 0 === i ? void 0 : i.map(async i => {
            var n;
            if (null === (n = i) || void 0 === n ? void 0 : n.event) {
              const n = ei.getHistoryEvents(i.event);
              let s = !1;
              const r = n.map(async n => {
                const {
                  isValid: r
                } = await bi.isValid(e, t, n, i.event);
                r && (s = r);
              });
              return await Promise.all(r), s;
            }
            return i;
          }),
          s = await Promise.all(n);
        return hi.evaluateExpression(s);
      }
      executeTriggerValidatorOfHistoryEvents(e, t, i) {
        ei.getHistoryEvents(i).forEach(n => this.validateAndDispatchTriggerEvent(e, t, n, i));
      }
      async validateEventFromHistHandler(e, t, i) {
        const n = window.VWO.modules.eventHistHandler.eventHist[i],
          s = window.VWO.modules.eventHistHandler.eventHistForCurrentSession[i];
        (n || s) && (await bi.isValid(e, t, di({
          isCustomEvent: !0,
          fromLocalStorage: !0
        }), i));
      }
      async validateAndDispatchTriggerEvent(e, t, i, n, s, r, o = !1) {
        let a = this.getExecutionCount(e) || 0;
        if (t.occurrence && t.occurrence <= a) return;
        const {
          isValid: l,
          shouldRemoveEventListener: c
        } = await bi.isValid(e, t, i, n, r, o);
        if (c && gi.off(n, s), l) {
          if (a = this.getExecutionCount(e) || 0, t.occurrence && t.occurrence <= a) return;
          si.updateTriggerExecutionCount(e, a + 1), await gi.trigger(this.getTriggerEventName(e), i);
        }
      }
      remove(e) {
        It.debug(`Removing event listeners of trigger '${e}'`), Object.entries(this.triggerEventListeners[e]).forEach(([e, t]) => {
          gi.off(e, t);
        }), delete this.triggerEventListeners[e];
      }
      removeAll() {
        Object.keys(this.triggerEventListeners).forEach(e => {
          this.remove(e);
        });
      }
      extractDomEvents(e) {
        It.debug("Extracting DOM events from triggers config");
        const t = {};
        return Object.keys(e).forEach(i => {
          var n, s;
          null === (s = null === (n = e[i]) || void 0 === n ? void 0 : n.cnds) || void 0 === s || s.forEach(e => {
            Ci(e) && this.extractDomEventFromCondition(i, e) && (t[e.event] = t[e.event] || [], t[e.event].push(Object.assign(Object.assign({}, e), {
              triggerName: i
            })));
          });
        }), t;
      }
      extractDomEventFromCondition(e, t) {
        if (t.event === mt.PAGE_UNLOAD_EVENT) this.setPageUnloadTrigger(e);else if (t.event.toLowerCase().includes(wt.DOM + "_")) return Object.assign(Object.assign({}, t), {
          triggerName: e
        });
        return null;
      }
      setPageUnloadTrigger(e) {
        window.VWO._.pageUnloadTriggers = window.VWO._.pageUnloadTriggers || {}, window.VWO._.pageUnloadTriggers[e] = !0;
      }
      getTriggerEventName(e) {
        return `${ft.TRIGGER}.${e}`;
      }
      getExecutionCount(e) {
        const t = ei.getValue(`${Wt.TRIGGERS}.${e}.executionCount`);
        return null != t ? t : 0;
      }
    }(),
    Ai = {
      log: new class {
        log({
          event: e,
          data: t,
          getters: i,
          actions: n,
          vwoEvents: s
        }) {
          console.log(e, t, i, n, s);
        }
      }().log
    },
    Vi = Object.freeze({
      __proto__: null,
      default: Ai
    });
  class Ri extends pi {
    constructor() {
      super(), this.pluginName = Bt.TAG, this.tags = {}, this.initialize();
    }
    add(e, t, {
      occurrence: i,
      scope: n,
      sync: s
    } = {}) {
      It.debug(`Adding tag '${e}' in TagsManager`), this.tags[e] ? It.error(_i.TAGS.ALREADY_EXISTS, {
        tagName: e
      }) : this.tags[e] = {
        fn: t,
        occurrence: i,
        scope: n,
        sync: s
      };
    }
    update(e, t, {
      occurrence: i,
      scope: n,
      sync: s,
      fireUniquelyForEveryEvent: r
    } = {}) {
      It.debug(`Updating tag '${e}' in TagsManager`), this.tags[e] = {
        fn: t,
        occurrence: i,
        scope: n,
        sync: s,
        fireUniquelyForEveryEvent: r
      };
    }
    get(e) {
      return It.debug(`Getting tag '${e}' in TagsManager`), this.tags[e] ? this.tags[e] : (It.error(_i.TAGS.NOT_REGISTERED, {
        tagName: e
      }), null);
    }
    remove(e) {
      It.debug(`Removing tag '${e}' in TagsManager`), this.tags[e] ? delete this.tags[e] : It.warn(Oi.TAGS.NO_TAG_TO_REMOVE, {
        tagName: e
      });
    }
    removeAll() {
      It.debug("Removing all tags in TagsManager"), this.tags = {};
    }
    initialize() {
      Object.keys(Vi).forEach(e => {
        this.add(e, Vi[e]);
      });
    }
  }
  var Pi = new class {
    flushTagData(e) {
      delete this._vwoEventsInstance[e];
    }
    getVwoInstanceObject() {
      return this._vwoEventsInstance;
    }
    async executeTagUniquelyForEveryEvent(e) {
      if (!e || !e.tags) return;
      const t = [];
      Object.keys(e.tags).forEach(i => {
        const n = e.tags[i];
        if (n) {
          const s = n.data,
            r = this.getTagDetails(i).fn({
              data: s,
              event: e.event,
              getters: ei,
              actions: si,
              vwoEvents: this._vwoEventsInstance
            });
          t.push(r);
        }
      }), await Promise.all(t);
    }
    async execute(e, t, i, n, s) {
      var r, o;
      this._vwoEventsInstance = s;
      const a = "metric" === t.id ? t.data : await wi.getValue({
          variableName: `${Wt.SETTINGS}.${t.data}`
        }),
        l = this.generateTagId(t.id),
        c = ei.tags[l].executionCount || 0,
        d = this.getTagDetails(t.id);
      if (!Pt(d.occurrence) || c < d.occurrence) {
        It.info(`Started executing tag '${t.id}' because of:`, i), si.updateTagState(l, {
          hasExecuted: !0,
          executionCount: (ei.tags[l].executionCount || 0) + 1,
          stoppedByExitCondition: !1
        }), ci().mark("tag-" + t.id);
        const s = i.name;
        if (this._vwoEventsInstance[s] = this._vwoEventsInstance[s] || {}, s && n.fireUniquelyForEveryEvent) return this._vwoEventsInstance[s].event = this._vwoEventsInstance[s].event || i, this._vwoEventsInstance[s].tags = this._vwoEventsInstance[s].tags || {}, this._vwoEventsInstance[s].tags[t.id] = this._vwoEventsInstance[s].tags[t.id] || {}, this._vwoEventsInstance[s].tags[t.id].data = this._vwoEventsInstance[s].tags[t.id].data || [], void this._vwoEventsInstance[s].tags[t.id].data.push(a);
        n.sync || (await Promise.resolve());
        const c = null === (o = null === (r = d.fn) || void 0 === r ? void 0 : r.type) || void 0 === o ? void 0 : o.startsWith("vwoWrappedFn");
        i.executingTagTrigger = n.triggerName, await d.fn({
          data: a,
          event: i,
          getters: ei,
          actions: si,
          vwoEvents: c ? null : e
        });
      } else It.info(`Maximum occurrence of ${d.occurrence} has reached. Skipping executing tag '${t.id}'`);
    }
    generateTagId(e) {
      return "" + e;
    }
    getTagDetails(e) {
      var t;
      return null === (t = Jt.plugins[Bt.TAG]) || void 0 === t ? void 0 : t.get(e);
    }
  }();
  let xi = 0;
  var Di = new class {
    constructor() {
      this.rulesMap = {};
    }
    initialize(e, t) {
      this.vwoEventsInstance = e, Object.keys(t).forEach(e => {
        this.remove(e), this.add(t[e], e);
      });
    }
    add(e, t) {
      (Nt(e.triggers) ? e.triggers : [e.triggers]).forEach(i => {
        this.rulesMap[i] ? It.debug(`Skipping adding the listeners for trigger ${i} as rulesMap exist`) : this.attachTriggersListeners(this.vwoEventsInstance, i), this.rulesMap[i] = this.rulesMap[i] || [], e.tags.forEach(n => {
          this.rulesMap[i].push(Object.assign(Object.assign({}, e), {
            id: t,
            tags: [n]
          }));
        }), this.sortPriorityRuleTags(i);
      });
    }
    remove(e) {
      It.debug(`Removing all event listeners of rule '${e}'`), Object.keys(this.rulesMap).forEach(t => {
        this.rulesMap[t] = this.rulesMap[t].filter(t => t.id !== e);
      });
    }
    removeAll() {
      Object.keys(this.rulesMap).forEach(e => {
        gi.remove(Ni.getTriggerEventName(e)), delete this.rulesMap[e];
      });
    }
    generateRandomRuleId() {
      return xi++, "rule_" + xi;
    }
    attachTriggersListeners(e, t) {
      gi.on(Ni.getTriggerEventName(t), async i => {
        const n = this.rulesMap[t].map(n => n.tags.map(async s => {
          var r, o, a;
          const l = Rt(s.shouldConsiderParentExitCondition) ? s.shouldConsiderParentExitCondition : n.shouldConsiderParentExitCondition,
            c = this.getExitConditions(i, n.exitCondition, s.exitCondition, l),
            d = await this.shouldExit(i, c),
            u = Pi.generateTagId(s.id);
          if (si.updateTagState(u, {
            stoppedByExitCondition: d,
            lastExitConditions: c
          }), d) It.info(`Exit condition(s) met. Not executing tag '${s.id}'`, c);else {
            const n = null === (o = null === (r = this.vwoEventsInstance.tags) || void 0 === r ? void 0 : r.tags) || void 0 === o ? void 0 : o[s.id];
            await Pi.execute(Object.assign(Object.assign({}, e), {
              [_t.EXIT_CONDITIONS]: c,
              clearData: e.clearData.bind(e)
            }), s, i, {
              sync: n.sync || (null === (a = i.props) || void 0 === a ? void 0 : a.fireLinkedTagSync),
              fireUniquelyForEveryEvent: n.fireUniquelyForEveryEvent,
              triggerName: t
            }, e);
          }
        }));
        await Promise.all(Array.prototype.concat.apply([], n));
      });
    }
    sortPriorityRuleTags(e) {
      this.rulesMap[e].sort((e, t) => {
        const i = e.tags[0],
          n = t.tags[0];
        return (Rt(i.priority) && -1 !== i.priority ? i.priority : 1 / 0) - (Rt(n.priority) && -1 !== n.priority ? n.priority : 1 / 0);
      });
    }
    assignExecutionProperty(e) {
      const t = this.rulesMap[e],
        i = {},
        n = ["sync", "fireUniquelyForEveryEvent"];
      for (let e = t.length - 1; e >= 0; e--) {
        const s = t[e].tags[0],
          r = i[s.id] || Pi.getTagDetails(s.id);
        Object.keys(n).forEach(e => {
          const t = n[e];
          s[t] = r[t];
        }), i[s.id] = r;
      }
    }
    getExitConditions(e, t, i, n = !0) {
      const s = n ? [...(e[_t.EXIT_CONDITIONS] || [])] : [];
      return t && s.push(t), i && s.push(i), s;
    }
    async shouldExit(e, t = []) {
      const i = t.length;
      for (let n = 0; n < i; ++n) {
        const i = t[n];
        if (await bi.validateTriggerOperand({
          filters: i
        }, e)) return !0;
      }
      return !1;
    }
  }();
  class Li {
    static get(e) {
      const t = document.cookie.split("; ").find(t => t.startsWith(e + "="));
      return (null == t ? void 0 : t.split("=")[1]) || "";
    }
    static expire(e) {
      document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }
  class ki {
    static init() {
      ki.actualReferrer = Li.get("_vwo_referrer"), Li.expire("_vwo_referrer"), "string" != typeof ki.actualReferrer && (ki.actualReferrer = document.referrer);
    }
    static get() {
      return -1 === window.location.search.search("_vwo_test_ref") ? document.referrer : ki.actualReferrer;
    }
  }
  ki.actualReferrer = "";
  class Ui {
    static get() {
      const {
        queryParams: e
      } = Tt.parseUrl(document.URL);
      let t, i;
      const n = ki.get();
      if (/facebook\.com|quora\.com|reddit\.com|imgur\.com|tapiture\.com|disqus\.com|9gag\.com|tumblr\.com|plus\.google|stumbleupon\.com|twitter\.com|linkedin|del\.icio\.us|delicious\.com|technorati|digg\.com| hootsuite|stumbleupon|myspace|bit\.ly|tr\.im|tinyurl|ow\.ly|reddit|m\.facebook\.com|youtube|flickr|pinterest\.com|^https:\/\/t\.co\/|tweetdeck/.test(n)) return "soc";
      Ui.organicReferralSource() && (t = !0);
      const {
        gclid: s,
        utm_medium: r
      } = e;
      if (n && (i = !0), t && s) return "pst";
      if (r) {
        if ("email" === (null == r ? void 0 : r.toString().toLowerCase())) return "eml";
        if (null == r ? void 0 : r.toString().match(new RegExp("^(?:cpc|ppc|cpa|cpm|cpv|cpp)$", "i"))) return "pst";
      } else if (t) return "org";
      return i ? "ref" : "dir";
    }
    static organicReferralSource() {
      for (let e = 0; e < Ui.organicReferrals.length; e++) if (-1 !== ki.get().indexOf(Ui.organicReferrals[e].s)) return Ui.organicReferrals[e].i;
      return 0;
    }
  }
  Ui.organicReferrals = [{
    s: "search.yahoo.com/",
    p: "p",
    i: 1
  }, {
    s: "www.google.",
    p: "q",
    i: 2
  }, {
    s: "www.bing.com/",
    p: "q",
    i: 3
  }, {
    s: ".ask.com/",
    p: "q",
    i: 4
  }, {
    s: "www.search.com/",
    p: "q",
    i: 5
  }, {
    s: "www.baidu.com/",
    p: "wd",
    i: 6
  }, {
    s: "search.aol.com/",
    p: "q",
    i: 7
  }, {
    s: "duckduckgo.com/",
    p: "q",
    i: 8
  }];
  const Wi = {
    get url() {
      return window.location.href;
    },
    get refUrl() {
      return ki.get();
    },
    get trafficSource() {
      return Ui.get();
    },
    get queryParams() {
      return Tt.parseUrl(window.location.href).queryParams;
    },
    get timeSpent() {
      const e = Date.now();
      return Math.floor((Date.now() - e) / 1e3);
    },
    get scroll() {
      var e, t;
      const {
          scrollY: i,
          innerHeight: n
        } = window,
        s = 100 * i / ((null === (e = document.body) || void 0 === e ? void 0 : e.offsetHeight) - n);
      return {
        pxTop: i,
        pxBottom: (null === (t = document.body) || void 0 === t ? void 0 : t.offsetHeight) - n - i,
        top: s,
        bottom: 100 - s
      };
    },
    get operatingSystem() {
      var e;
      const {
        visitorDetails: t
      } = Wi;
      if (null === (e = null == t ? void 0 : t.UA) || void 0 === e ? void 0 : e.os) return t.UA.os;
      const {
        appVersion: i
      } = window.navigator;
      return i.includes("Win") ? "windows" : i.includes("Mac") ? "macOS" : i.includes("X11") ? "unix" : i.includes("Linux") ? "linux" : "";
    },
    get browser() {
      var e, t;
      return null === (t = null === (e = Wi.visitorDetails) || void 0 === e ? void 0 : e.UA) || void 0 === t ? void 0 : t.br;
    },
    get visitorDetails() {
      var e, t, i, n;
      return (null === (n = null === (i = null === (t = null === (e = window.VWO) || void 0 === e ? void 0 : e._) || void 0 === t ? void 0 : t.allSettings) || void 0 === i ? void 0 : i.dataStore) || void 0 === n ? void 0 : n.plugins) || {};
    },
    get userAgent() {
      return navigator.userAgent;
    },
    get deviceType() {
      var e, t;
      return null === (t = null === (e = Wi.visitorDetails) || void 0 === e ? void 0 : e.UA) || void 0 === t ? void 0 : t.dt;
    },
    get deviceName() {
      var e, t;
      return null === (t = null === (e = Wi.visitorDetails) || void 0 === e ? void 0 : e.UA) || void 0 === t ? void 0 : t.de;
    },
    get day() {
      return new Date().getDay().toString();
    },
    get hour() {
      return new Date().getHours();
    },
    get visitorType() {
      var e, t;
      const i = null === (t = null === (e = window.VWO) || void 0 === e ? void 0 : e.data) || void 0 === t ? void 0 : t.vi;
      return (null == i ? void 0 : i.vt) || "new";
    },
    get oldVisitorType() {
      var e, t;
      const i = null === (t = null === (e = window.VWO) || void 0 === e ? void 0 : e.data) || void 0 === t ? void 0 : t.vi;
      return (null == i ? void 0 : i.vt) || "new";
    },
    get ip() {
      var e;
      return null === (e = Wi.visitorDetails) || void 0 === e ? void 0 : e.IP;
    },
    get country() {
      var e, t;
      return null === (t = null === (e = Wi.visitorDetails) || void 0 === e ? void 0 : e.GEO) || void 0 === t ? void 0 : t.cn;
    },
    get countryCode() {
      var e, t;
      return null === (t = null === (e = Wi.visitorDetails) || void 0 === e ? void 0 : e.GEO) || void 0 === t ? void 0 : t.cc;
    },
    get city() {
      var e, t;
      return null === (t = null === (e = Wi.visitorDetails) || void 0 === e ? void 0 : e.GEO) || void 0 === t ? void 0 : t.c;
    },
    get region() {
      var e, t;
      return null === (t = null === (e = Wi.visitorDetails) || void 0 === e ? void 0 : e.GEO) || void 0 === t ? void 0 : t.r;
    },
    get gpc() {
      var e, t;
      return null === (t = null === (e = Wi.visitorDetails) || void 0 === e ? void 0 : e.GEO) || void 0 === t ? void 0 : t.p;
    },
    get loc() {
      var e, t, i;
      const {
        visitorDetails: n
      } = Wi;
      return {
        countryCode: null === (e = null == n ? void 0 : n.GEO) || void 0 === e ? void 0 : e.cc,
        city: null === (t = null == n ? void 0 : n.GEO) || void 0 === t ? void 0 : t.c,
        region: null === (i = null == n ? void 0 : n.GEO) || void 0 === i ? void 0 : i.r
      };
    }
  };
  var Mi;
  !function (e) {
    e.LOCAL_STORAGE = "localStorage", e.LOCAL_STORAGE_SERVICE = "localStorageService";
  }(Mi || (Mi = {}));
  var Gi = new class extends class {} {
      constructor() {
        super(), this.storageName = Mi.LOCAL_STORAGE;
      }
      get() {
        return window.localStorage;
      }
      getItem(e) {
        return window.localStorage.getItem(e);
      }
      set(e) {
        Object.keys(e).forEach(t => {
          window.localStorage.setItem(t, e[t]);
        });
      }
      setItem(e, t) {
        window.localStorage.setItem(e, t);
      }
      deleteAll() {
        window.localStorage.clear();
      }
      deleteItem(e) {
        window.localStorage.removeItem(e);
      }
      includes() {
        return 0;
      }
    }(),
    Fi = Object.freeze({
      __proto__: null,
      localStorage: Gi
    });
  class ji extends pi {
    constructor() {
      super(), this.pluginName = Bt.STORAGE, this.storages = {}, this.initialize();
    }
    add(e, t) {
      It.debug(`Adding storage plugin '${t.storageName}' in StoragesManager`), this.storages[e] ? It.error(_i.STORAGES.ALREADY_EXISTS, {
        storageName: e
      }) : this.storages[e] = t;
    }
    update(e, t) {
      It.debug(`Updating storage plugin '${e}' in StoragesManager`), this.storages[e] = t;
    }
    get(e) {
      return It.debug(`Getting storage plugin '${e}' in StoragesManager`), this.storages[e] ? this.storages[e] : (It.error(_i.STORAGES.NOT_REGISTERED, {
        storageName: e
      }), null);
    }
    remove(e) {
      It.debug(`Removing storage plugin '${e}' in StoragesManager`), this.storages[e] ? delete this.storages[e] : It.warn(Oi.STORAGES.NO_STORAGE_TO_REMOVE, {
        storageName: e
      });
    }
    removeAll() {
      It.debug("Removing all storage plugins in StoragesManager"), this.storages = {};
    }
    initialize() {
      Object.keys(Fi).forEach(e => {
        this.add(e, Fi[e]);
      });
    }
  }
  var Hi,
    $i,
    Bi = new class extends pi {
      constructor() {
        super(), this.pluginName = Bt.OPERATOR, this.operators = {};
      }
      add(e, t) {
        It.debug(`Adding operator '${e}' in OperatorsManager`), this.operators[e] ? It.error(_i.OPERATORS.ALREADY_EXISTS, {
          operatorName: e
        }) : this.operators[e] = t;
      }
      update(e, t) {
        It.debug(`Updating operator '${e}' in OperatorsManager`), this.operators[e] = t;
      }
      get(e) {
        return It.debug(`Getting operator '${e}' in OperatorsManager`), this.operators[e] ? this.operators[e] : (It.error(_i.OPERATORS.NOT_REGISTERED, {
          operatorName: e
        }), null);
      }
      remove(e) {
        It.debug(`Removing operator '${e}' in OperatorsManager`), this.operators[e] ? delete this.operators[e] : It.warn(Oi.OPERATORS.NO_OPERATOR_TO_REMOVE, {
          operatorName: e
        });
      }
      removeAll() {
        It.debug("Removing all operators in OperatorsManager"), this.operators = {};
      }
      initialize(e) {
        Object.assign(this.operators, e);
      }
    }();
  !function (e) {
    e.EQUAL = "eq", e.NOT_EQUAL = "neq", e.EQUAL_CASE_SENSITIVE = "eqs", e.NOT_EQUAL_CASE_SENSITIVE = "neqs", e.REGEX = "reg", e.REGEX_CASE_SENSITIVE = "regs", e.CONTAINS = "cn", e.NOT_CONTAINS = "ncn", e.BLANK = "bl", e.NOT_BLANK = "nbl", e.GREATER_THAN = "gt", e.LESS_THAN = "lt", e.GREATER_THAN_EQUAL = "gte", e.LESS_THAN_EQUAL = "lte", e.IN = "in", e.NOT_IN = "nin", e.EXEC = "exec", e.SELECTOR = "sel", e.IN_LOCATION = "inloc", e.NOT_IN_LOCATION = "ninloc", e.URL_REGEX = "urlReg", e.NOT_URL_REGEX = "nUrlReg", e.RANGE_COMPARISON = "rg", e.PAGE_CONFIG_EVALUATION = "pgc";
  }(Hi || (Hi = {})), function (e) {
    e.PAGE = "PAGE", e.EVENT = "EVENT", e.JS_VARIABLE = "JS_VARIABLE";
  }($i || ($i = {}));
  class Ji extends pi {
    constructor(e, {
      globals: t = {}
    } = {}) {
      super(), this.pluginName = Bt.EVENT, this.vwoEventsInstance = e, this.config = {
        domEventsDebounceTime: t.domEventsDebounceTime
      }, this.events = {}, this.initialize();
    }
    add(...e) {
      var t, i;
      let n, s, r, o;
      bt(e[0]) ? ([{
        eventName: n
      }] = e, s = e[0].on.bind(e[0]), r = null === (t = e[0].off) || void 0 === t ? void 0 : t.bind(e[0]), o = null === (i = e[0].eventConditionsUpdate) || void 0 === i ? void 0 : i.bind(e[0])) : [n, s, r, o] = e, It.debug(`Adding event listener '${n}' in EventsManager`), this.events[n] ? It.error(_i.EVENTS.ALREADY_EXISTS, {
        eventName: n
      }) : (this.events[n] = {
        on: s,
        off: r,
        eventConditionsUpdate: o
      }, s(e => this.triggerCustomEvent(n, e), {
        vwoEvents: this.vwoEventsInstance
      }));
    }
    updateCustomEvents(...e) {
      var t;
      let i, n, s;
      bt(e[0]) ? ([{
        eventName: i
      }] = e, n = e[0].on.bind(e[0]), s = null === (t = e[0].off) || void 0 === t ? void 0 : t.bind(e[0])) : [i, n, s] = e, It.debug(`Updating event listener '${i}' in EventsManager`), this.events[i] = {
        on: n,
        off: s
      }, n(e => this.triggerCustomEvent(i, e), {
        vwoEvents: this.vwoEventsInstance
      });
    }
    update(e, t) {
      Object.keys(e).forEach(t => {
        this.updateCustomEvents(t, e[t].fn);
      }), Object.keys(t).forEach(e => {
        if (this.events[e]) {
          const {
            eventConditionsUpdate: i
          } = this.events[e];
          i && i(t[e]);
        } else this.addDomEvent(e, t[e]);
      });
    }
    get(e) {
      return It.debug(`Getting event listener '${e}' definition from EventsManager`), this.events[e] ? this.events[e] : (It.error(_i.EVENTS.NOT_REGISTERED, {
        eventName: e
      }), null);
    }
    remove(e) {
      var t, i;
      It.debug(`Removing event listener '${e}' from EventsManager`), this.events[e] ? (null === (i = (t = this.events[e]).off) || void 0 === i || i.call(t), delete this.events[e], gi.remove(e)) : It.warn(Oi.EVENTS.NO_EVENT_TO_REMOVE, {
        eventName: e
      });
    }
    removeAll() {
      It.debug("Removing all event listeners from EventsManager"), Object.keys(this.events).forEach(e => {
        var t, i;
        null === (i = (t = this.events[e]).off) || void 0 === i || i.call(t);
      }), gi.removeAll(), this.events = {};
    }
    addDomEvent(e, t) {
      const {
        preDefinedEvents: i
      } = this.vwoEventsInstance;
      !this.events[e] && e.toLowerCase().includes(wt.DOM + "_") && (e === wt.DOM + "_click" ? this.add(new i.ClickDomEvent(t)) : e === wt.DOM + "_submit" ? this.add(new i.SubmitDomEvent(t)) : this.add(new i.GenericDomEvent(e, t, this.config.domEventsDebounceTime)));
    }
    updateConditions(e, t) {
      if (this.events[e]) {
        if (e.toLowerCase().includes(wt.DOM + "_")) {
          const {
            eventConditionsUpdate: i
          } = this.events[e];
          i && Array.isArray(t) && i(t);
        }
      } else this.addDomEvent(e, t);
    }
    triggerCustomEvent(e, t) {
      gi.trigger(e, t);
    }
    initialize() {
      const {
        preDefinedEvents: e
      } = this.vwoEventsInstance;
      Object.keys(e).forEach(t => {
        t.endsWith("DomEvent") || this.add(new e[t]());
      });
    }
  }
  const Ki = {
    [Hi.EQUAL]: (e, t) => String(e).toLowerCase() === String(t).toLowerCase(),
    [Hi.NOT_EQUAL]: (e, t) => !Ki[Hi.EQUAL](e, t),
    [Hi.EQUAL_CASE_SENSITIVE]: (e, t) => String(e) === String(t),
    [Hi.NOT_EQUAL_CASE_SENSITIVE]: (e, t) => !Ki[Hi.EQUAL_CASE_SENSITIVE](e, t),
    [Hi.REGEX](e, t) {
      try {
        return new RegExp(t, "i").test(String(e));
      } catch (e) {
        return !1;
      }
    },
    [Hi.URL_REGEX](e, t, i) {
      const n = null == i ? void 0 : i.jsLibUtils;
      return n ? n.verifyUrl(e, t, null, null == i ? void 0 : i.pageUrl) : Ki[Hi.REGEX](e, t);
    },
    [Hi.NOT_URL_REGEX]: (e, t, i) => !Ki[Hi.URL_REGEX](e, t, i),
    [Hi.REGEX_CASE_SENSITIVE](e, t) {
      try {
        return new RegExp(t).test(String(e));
      } catch (e) {
        return !1;
      }
    },
    [Hi.CONTAINS]: (e, t) => String(e).toLowerCase().includes(String(t).toLowerCase()),
    [Hi.NOT_CONTAINS]: (e, t) => !Ki[Hi.CONTAINS](e, t),
    [Hi.BLANK]: e => !e,
    [Hi.NOT_BLANK]: e => !Ki[Hi.BLANK](e),
    [Hi.GREATER_THAN](e, t) {
      if (!Rt(e) || !Rt(t)) return !1;
      const i = +e,
        n = +t;
      return Pt(i) && Pt(n) && i > n;
    },
    [Hi.GREATER_THAN_EQUAL](e, t) {
      if (!Rt(e) || !Rt(t)) return !1;
      const i = +e,
        n = +t;
      return Pt(i) && Pt(n) && i >= n;
    },
    [Hi.LESS_THAN](e, t) {
      if (!Rt(e) || !Rt(t)) return !1;
      const i = +e,
        n = +t;
      return Pt(i) && Pt(n) && i < n;
    },
    [Hi.LESS_THAN_EQUAL](e, t) {
      if (!Rt(e) || !Rt(t)) return !1;
      const i = +e,
        n = +t;
      return Pt(i) && Pt(n) && i <= n;
    },
    [Hi.NOT_IN_LOCATION](e, t) {
      let i = !1;
      if (!t || 0 === t.length) return !1;
      for (let n = 0; n < t.length; n++) {
        const s = t[n];
        if (s === e.countryCode || s === `${e.countryCode}-${e.region}` || s === `${e.countryCode}-${e.region}-${e.city}`) {
          i = !1;
          break;
        }
        i = !0;
      }
      return i;
    },
    [Hi.IN_LOCATION](e, t) {
      let i = !1;
      if (!t || 0 === t.length) return !1;
      for (let n = 0; n < t.length; n++) {
        const s = t[n];
        if (s === e.countryCode || s === `${e.countryCode}-${e.region}` || s === `${e.countryCode}-${e.region}-${e.city}`) {
          i = !0;
          break;
        }
      }
      return i;
    },
    [Hi.IN]: (e, t) => t.map(e => String(e).toLowerCase()).includes(String(e).toLowerCase()),
    [Hi.NOT_IN]: (e, t) => !Ki[Hi.IN](e, t),
    [Hi.RANGE_COMPARISON](e, t) {
      try {
        const i = JSON.parse(e),
          n = t.split("'")[1].split("-"),
          s = n[0],
          r = n[1];
        return Ki[Hi.GREATER_THAN_EQUAL](i[0], parseInt(s, 10)) && Ki[Hi.LESS_THAN_EQUAL](i[0], parseInt(r, 10));
      } catch (e) {
        return It.info("RANGE OPERATOR ERROR: " + (e && e.stack)), !1;
      }
    },
    [Hi.PAGE_CONFIG_EVALUATION]: (e, t) => Zt.validatePage(t, !1, e).didMatch
  };
  var zi = Object.assign(Ki, {
    [Hi.EXEC](e, {
      triggerName: t = ""
    } = {}) {
      if (!e) return !1;
      for (let i = 0; i < e.length; i++) {
        const n = e[i];
        if (!n) break;
        window.VWO._.pageNo = window.VWO._.pageNo || 0;
        const {
            pageNo: s
          } = window.VWO._,
          r = () => {
            s === window.VWO._.pageNo && gi.trigger(Ni.getTriggerEventName(t));
          };
        try {
          n(r, window.vwo_$);
        } catch (e) {
          It.warn("Issue with custom trigger " + (null == n ? void 0 : n.toString()));
        }
      }
      return !1;
    }
  });
  Bi.initialize(zi);
  const Yi = {};
  class Xi extends pi {
    constructor() {
      super(), this.pluginName = Bt.EVENT_PROPS, this.eventsProps = {}, this.initialize();
    }
    add(e, t, i) {
      It.debug(`Adding computed prop '${t}' of event '${e}'.`), this.eventsProps[e] = this.eventsProps[e] || {}, this.eventsProps[e][t] ? It.error(_i.EVENT_PROP.ALREADY_EXISTS, {
        propName: t,
        eventName: e
      }) : this.eventsProps[e][t] = i;
    }
    update(e, t, i) {
      It.debug(`Updating computed prop '${t}' of event '${e}'.`), this.eventsProps[e] = this.eventsProps[e] || {}, this.eventsProps[e][t] = i;
    }
    get(e, t) {
      var i;
      return It.debug(`Getting '${t || "all"}' computed prop of event '${e}'.`), t ? (null === (i = this.eventsProps[e]) || void 0 === i ? void 0 : i[t]) ? this.eventsProps[e][t] : (It.error(_i.EVENT_PROP.NOT_REGISTERED, {
        eventName: e,
        propName: t
      }), null) : this.eventsProps[e] || {};
    }
    remove(e, t) {
      var i;
      It.debug(`Removing '${t || "all"}' computed prop of event '${e}'.`), t ? (null === (i = this.eventsProps[e]) || void 0 === i ? void 0 : i[t]) ? delete this.eventsProps[e][t] : It.warn(Oi.EVENT_PROP.NO_EVENT_PROP_TO_REMOVE, {
        eventName: e,
        propName: t
      }) : this.eventsProps[e] = {};
    }
    removeAll() {
      It.debug("Removing all computed props of all events"), this.eventsProps = {};
    }
    initialize() {
      Object.keys(Yi).forEach(e => {
        Object.keys(Yi[e]).forEach(t => {
          this.add(e, t, Yi[e][t]);
        });
      });
    }
  }
  var qi = Object.freeze({
    __proto__: null,
    A: class extends Ti {
      async fn(e, ...t) {
        const i = await Promise.all(t.map(t => t(e)));
        let n = 0;
        for (let e = i.length - 1; e >= 0; --e) {
          const t = i[e];
          if (!t[0]) return [!1, 0];
          n = t[1] > n ? t[1] : n;
        }
        return [!0, n];
      }
      toJSON() {
        return "a";
      }
    },
    O: class extends Ti {
      async fn(e, ...t) {
        const i = await Promise.all(t.map(t => t(e)));
        let n = 1 / 0,
          s = !1;
        for (let e = i.length - 1; e >= 0; --e) {
          const t = i[e];
          t[0] && (s = !0, n = t[1] < n ? t[1] : n);
        }
        return [s, s ? n : 0];
      }
      toJSON() {
        return "o";
      }
    },
    TS: class extends Ti {
      constructor({
        data: e
      }, {
        trigger: t,
        triggerName: i
      }) {
        super(), [this.op] = e;
        const n = e[1];
        this.threshold = "INF" === n ? 1 / 0 : 1e3 * n, this.validateFromStateAndDispatchTriggerEvent = () => Ni.validateAndDispatchTriggerEvent(i, t, {}, "", null, null, !0), this.isTimeoutCompleted = !1;
      }
      lt(e, t) {
        if (e[0] && t[0]) {
          this.previousLHS = e[1];
          const i = t[1] - e[1];
          if (i >= 0 && i <= this.threshold) return [!0, t[1]];
        }
        return [!1, 0];
      }
      gtn(e, t) {
        if (!e[0]) return [!1, 0];
        if (this.isTimeoutCompleted) return [!0, e[1] + this.threshold];
        if (this.threshold === 1 / 0) return [!1, 0];
        if (t[1] > e[1]) return this.timeout && (clearTimeout(this.timeout), this.timeout = void 0), this.lt(e, t)[0] ? [!1, 0] : [!0, e[1] + this.threshold];
        if (!this.timeout || this.previousLHS !== e[1]) {
          this.previousLHS = e[1], this.isTimeoutCompleted = !1;
          const t = e[1] + this.threshold - Date.now();
          this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
            this.isTimeoutCompleted = !0, this.validateFromStateAndDispatchTriggerEvent();
          }, t > 0 ? t : 0);
        }
        return [!1, 0];
      }
      async fn(e, t, i) {
        const n = await t({
            doNotUseCache: e.doNotUseCache || !this._persistedState
          }),
          s = i ? await i({
            doNotUseCache: e.doNotUseCache || !this._persistedState
          }) : [!1, 0];
        if (n[0] && !n[1]) return [!0, 0];
        if (!e.doNotUseCache && this._persistedState) return this._persistedState;
        const r = this[this.op](n, s);
        return r[0] && (this._persistedState = r), r;
      }
      get persistedData() {
        var e;
        return null !== (e = JSON.stringify(this._persistedState)) && void 0 !== e ? e : "";
      }
      toJSON() {
        return {
          op: "ts",
          data: [this.op, this.threshold / 1e3]
        };
      }
      clearData() {
        clearTimeout(this.timeout), this.timeout = void 0, this.isTimeoutCompleted = !1, this._persistedState = null;
      }
    }
  });
  class Qi extends pi {
    constructor() {
      super(), this.pluginName = Bt.CONDITION_LEVEL_OPERATOR, this.operators = {}, this.initialize();
    }
    add(e, t) {
      It.debug(`Adding Condition Level operator '${e}' in CLOperatorsManager`), this.operators[e] ? It.error(_i.OPERATORS.ALREADY_EXISTS, {
        operatorName: e
      }) : this.operators[e] = {
        definition: t,
        instances: []
      };
    }
    update(e, t) {
      It.debug(`Updating operator '${e}' in CLOperatorsManager`), this.operators[e].definition = t;
    }
    get(e, t, {
      trigger: i,
      triggerName: n
    }) {
      It.debug(`Getting operator '${e}' in CLOperatorsManager`);
      const s = this.operators[e.toUpperCase()];
      if (!s) return It.error(_i.OPERATORS.NOT_REGISTERED, {
        operatorName: e
      }), null;
      const r = new s.definition(t, {
        trigger: i,
        triggerName: n
      });
      return s.instances.push(r), r;
    }
    remove(e) {
      It.debug(`Removing operator '${e}' in CLOperatorsManager`), this.operators[e] ? delete this.operators[e] : It.warn(Oi.OPERATORS.NO_OPERATOR_TO_REMOVE, {
        operatorName: e
      });
    }
    removeAll() {
      It.debug("Removing all operators in CLOperatorsManager"), this.operators = {};
    }
    initialize() {
      Object.keys(qi).forEach(e => {
        this.add(e, qi[e]);
      });
    }
    clearData() {
      Object.keys(this.operators).forEach(e => {
        this.operators[e].instances.forEach(e => {
          e.clearData();
        });
      });
    }
  }
  var Zi,
    en,
    tn = new class {
      execute(e, t) {
        this.initializeStore(t.dataStore, t.storages, t.props), this.initializeOperators(t.operators), this.initializeFormulas(), this.initializeTags(t.tags), this.initializeEventsProps(t.eventsProps), this.initializeEvents(e, t.events, t.triggers, t.globals), this.initializeTriggers(t.triggers), this.initializePages(t.pages, t.pagesEval), this.initializeRules(e, t.rules);
      }
      clear() {
        Jt.unregisterAll(), Ni.removeAll(), Di.removeAll(), gi.removeAll(), si.clearAll();
      }
      initializeOperators(e) {
        It.debug("Initializing Operators");
        const t = Jt.plugins[Bt.OPERATOR] || Bi;
        Object.keys(e).forEach(i => {
          t.update(i, e[i]);
        }), Jt.register(t);
      }
      initializeFormulas() {
        It.debug("Initializing Formulas"), Jt.register(Jt.plugins[Bt.FORMULA] || new Si());
      }
      initializeStore(e, t, i) {
        It.debug("Initializing Store");
        const n = Jt.plugins[Bt.STORAGE] || new ji();
        Object.keys(t).forEach(e => {
          n.update(e, t[e]), ri.setStoragePlugin(n.get(e));
        }), si.addValues(e, Wt.SETTINGS), si.set("storages", n, Wt.ROOT), class {
          static initialize(e) {
            si.addValues(e, Wt.ROOT), si.addValues(Wi, Wt.ROOT);
          }
        }.initialize(i), Jt.register(n);
      }
      initializeEventsProps(e) {
        It.debug("Initializing Events computed props");
        const t = Jt.plugins[Bt.EVENT_PROPS] || new Xi();
        Object.keys(e).forEach(i => {
          Object.keys(e[i]).forEach(n => {
            t.update(i, n, e[i][n]);
          });
        }), Jt.register(t);
      }
      initializeEvents(e, t, i, n) {
        It.debug("Initializing Events");
        const s = Ni.extractDomEvents(i),
          r = Jt.plugins[Bt.EVENT] || new Ji(e, {
            globals: n
          });
        r.update(t, s), Jt.register(r);
      }
      initializeTriggers(e) {
        It.debug("Initializing Triggers"), Ni.initialize(e);
      }
      initializePages(e, t) {
        It.debug("Initializing Pages"), Zt.add(e, t);
      }
      initializeTags(e) {
        It.debug("Initializing Tags");
        const t = Jt.plugins[Bt.TAG] || new Ri();
        Object.keys(e).forEach(i => {
          const n = e[i];
          t.update(i, n.fn, {
            occurrence: n.occurrence,
            scope: n.scope,
            sync: n.sync,
            fireUniquelyForEveryEvent: n.fireUniquelyForEveryEvent
          });
        }), Jt.register(t);
      }
      initializeRules(e, t) {
        It.debug("Initializing Rules", t), Di.initialize(e, t);
      }
      initializeCLOperators() {
        It.debug("Initializing CL_Operators");
        const e = Jt.plugins[Bt.CONDITION_LEVEL_OPERATOR] || new Qi();
        Jt.register(e);
      }
    }();
  !function (e) {
    e.OR = "OR";
  }(Zi || (Zi = {})), function (e) {
    e.ALL = "*";
  }(en || (en = {}));
  class nn {
    static or(...e) {
      return e._validationType = Zi.OR, e;
    }
    static validateJSON(e, t, i = "settings") {
      try {
        if (e) {
          const n = e._validationType === Zi.OR && Nt(e) ? e : [e],
            s = e._validationType === Zi.OR && Nt(e) ? e.find(e => Ut(e) === Ut(t)) : e;
          if (!nn.isSchemaMatching(n, t)) return nn.logger.info(`Settings schema validation failed for '${i}'.`, {
            expectedSchema: nn.getStringifiedSchemaValues(e),
            actualValue: t
          }), nn.getNewInitializedValue(e);
          if (bt(s)) Object.keys(t).forEach(e => {
            t[e] = nn.validateJSON(s[e] || s[en.ALL], t[e], `${i}.${e}`);
          });else if (Nt(s)) return t.map((e, t) => nn.validateJSON(s[0] === nn.RECURSION ? n : s[0], e, `${i}.${t}`));
        }
        return t;
      } catch (e) {
        return nn.logger.error("Got exception while validating settings schema", {
          err: e
        }), t;
      }
    }
    static isSchemaMatching(e, t) {
      return e.some(e => Ut(t) === Ut(e) || Ut(t) === (null == e ? void 0 : e.name));
    }
    static getNewInitializedValue(e) {
      if (Lt(e)) return new e();
      let t = e;
      return e._validationType === Zi.OR && Nt(e) && (t = e.find(e => nn.isArraySchema(e) || nn.isObjectSchema(e)) || e[0]), nn.isObjectSchema(t) ? {} : nn.isArraySchema(t) ? [] : void 0;
    }
    static isArraySchema(e) {
      return "Array" === e.name || Nt(e);
    }
    static isObjectSchema(e) {
      return "Object" === e.name || bt(e);
    }
    static getStringifiedSchemaValues(e) {
      return Lt(e) ? e.name : Nt(e) ? e.map(e => nn.getStringifiedSchemaValues(e)) : bt(e) ? Object.keys(e).reduce((t, i) => Object.assign(Object.assign({}, t), {
        [i]: nn.getStringifiedSchemaValues(e[i])
      }), {}) : e;
    }
  }
  nn.logger = new yt("warn"), nn.RECURSION = "r";
  class sn {
    constructor(e, ...t) {
      var i;
      this.vwoEventsInstance = e, this.currentSettings = {}, this.baseSettings = {
        globals: {},
        dataStore: {},
        props: {},
        operators: {},
        eventsProps: {},
        events: {},
        triggers: {},
        pages: {
          ec: [],
          pc: []
        },
        pagesEval: {
          ec: [],
          pc: []
        },
        tags: {},
        rules: {},
        storages: {},
        jsLibUtils: {}
      }, this.replace(...t), zt.set("jsLibUtils", null === (i = this.currentSettings) || void 0 === i ? void 0 : i.jsLibUtils);
    }
    add(...e) {
      tn.initializeCLOperators();
      const t = this.preProcessSettings(e);
      return this.currentSettings.pagesEval = {}, this.currentSettings = jt.mergeNestedObjects(this.currentSettings, ...t), this.initialize(), this.currentSettings;
    }
    replace(...e) {
      return this.resetSettings(), this.add(...e);
    }
    remove() {
      this.resetSettings(), tn.clear();
    }
    initialize() {
      tn.execute(this.vwoEventsInstance, this.currentSettings);
    }
    resetSettings() {
      this.currentSettings = Object.assign({}, this.baseSettings);
    }
    preProcessSettings(e) {
      let t = this.preProcessRules(e);
      for (let e = this.preProcessSettings.length - 1; e >= 0; --e) {
        const i = t[e];
        if (i.triggers) {
          const e = {};
          Object.keys(i.triggers).forEach(t => {
            e[t] = this.preProcessTriggers(t, i.triggers[t]);
          }), i.triggers = e;
        }
      }
      return t = this.preProcessCampaigns(t), this.getValidatedSettings(t);
    }
    getValidatedSettings(e) {
      const t = {
          id: nn.or(String, Number),
          type: String,
          filters: [nn.or(String, Array)],
          args: Array,
          fn: Function
        },
        i = [{
          dataStore: Object,
          props: Object,
          operators: {
            "*": Function
          },
          eventsProps: {
            "*": {
              "*": Function
            }
          },
          events: {
            "*": {
              fn: Function
            }
          },
          triggers: {
            "*": {
              cnds: [nn.or(String, Boolean, null, Array, [nn.RECURSION], {
                id: nn.or(String, Number),
                event: String,
                filters: [nn.or(String, Array)],
                formula: [t],
                op: String,
                data: [nn.or(String, Number)]
              })],
              formula: [t]
            }
          },
          tags: {
            "*": {
              fn: nn.or(Function, Object.getPrototypeOf(async function () {}).constructor),
              occurrence: Number,
              scope: String
            }
          },
          rules: {
            "*": {
              triggers: nn.or(String, [String]),
              tags: [{
                id: String,
                priority: Number,
                exitCondition: [nn.or(String, Array)],
                shouldConsiderParentExitCondition: Boolean
              }],
              exitCondition: [nn.or(String, Array)],
              shouldConsiderParentExitCondition: Boolean
            }
          },
          storages: {
            "*": Object
          }
        }];
      return nn.validateJSON(i, e);
    }
    preProcessRules(e) {
      const t = {},
        i = this;
      return Object.keys(this.currentSettings.rules).forEach(e => {
        const n = this.currentSettings.rules[e],
          s = [];
        n.tags.forEach(e => {
          s.push(JSON.stringify(i.sortTag(e)));
        }), t[n.triggers[0]] = s;
      }), e.map(e => {
        let {
          rules: n
        } = e;
        if (n = n || [], Nt(n)) {
          const e = {};
          n.forEach(n => {
            let s = !1;
            const r = [],
              o = Di.generateRandomRuleId(),
              a = {
                triggers: n.triggers,
                tags: []
              };
            n.tags.forEach(e => {
              const o = n.triggers[0],
                a = JSON.stringify(i.sortTag(e));
              t[o] = t[o] || [], t[o].includes(a) || (s = !0, t[o].push(a), r.push(e));
            }), s && (a.tags = r, e[o] = a);
          }), n = e;
        }
        return Object.assign(Object.assign({}, e), {
          rules: n
        });
      });
    }
    sortTag(e) {
      return Object.keys(e).sort().reduce((t, i) => (t[i] = e[i], t), {});
    }
    preProcessCampaigns(e) {
      return e.map(e => {
        if (bt(e.triggers) && Rt(e.triggers) && bt(e.dataStore) && Rt(e.dataStore)) {
          const {
              triggers: t
            } = e,
            {
              campaigns: i
            } = e.dataStore;
          Object.keys(i).forEach(e => {
            const n = i[e].triggers[0];
            bt(t[n]) && Rt(t[n]) && (t[n].occurrence = 1);
          });
        }
        return e;
      });
    }
    preProcessTriggers(e, t) {
      var i;
      if (t && t.cnds && t.cnds.length >= 0) {
        const n = (i, s, r) => {
          if (Nt(i)) i.forEach(n);else if (i) {
            if (xt(i) || Rt(i.op)) {
              const n = xt(i) ? i : i.op;
              r[s] = Jt.plugins[Bt.CONDITION_LEVEL_OPERATOR].get(n, i, {
                trigger: t,
                triggerName: e
              });
            }
            Rt(i.persistState) || ("pageView" === i.event ? i.persistState = !1 : "vwo_postInit" === i.event && (i.persistState = !0));
          }
        };
        null === (i = t.cnds) || void 0 === i || i.forEach(n);
      }
      return t;
    }
  }
  class rn {
    static getTriggersConditionInfo(e, t) {
      const i = t => Nt(t) ? t.map(i) : Ci(t) ? Object.assign(Object.assign({}, t), {
        hasEventFired: bi.hasEventOccurred(e, t.event),
        arePartialConditionsMet: bi.hasConditionMetBefore(e, t.id)
      }) : Ii(t) ? `${JSON.stringify(t)} -> ${t.persistedState}` : "string" == typeof t ? t : JSON.stringify(t);
      return t.map(i);
    }
    static tag(e, t) {
      var i;
      const n = Pi.generateTagId(t),
        s = ei.tags[n],
        r = null === (i = Jt.plugins[Bt.TAG]) || void 0 === i ? void 0 : i.get(t),
        o = Object.values(e.currentSettings.rules).filter(e => e.tags.some(e => e.id === t)).reduce((e, t) => {
          const i = Nt(t.triggers) ? t.triggers : [t.triggers];
          return e.push(...i), e;
        }, []).reduce((t, i) => {
          const n = ei.triggers[i];
          return Object.assign(Object.assign({}, t), {
            [i]: {
              areConditionsMet: n.state,
              cndsState: this.getTriggersConditionInfo(i, e.currentSettings.triggers[i].cnds)
            }
          });
        }, {});
      return {
        hasExecuted: s.hasExecuted || !1,
        executionCount: s.executionCount || 0,
        fn: r.fn,
        occurrence: r.occurrence || null,
        scope: r.scope || null,
        stoppedByExitCondition: s.stoppedByExitCondition,
        lastExitConditions: s.lastExitConditions,
        dependentTriggers: o
      };
    }
    static trigger(e, t) {
      return {
        areConditionsMet: ei.triggers[t].state,
        cndsState: this.getTriggersConditionInfo(t, e.currentSettings.triggers[t].cnds)
      };
    }
    static page(e, t, i) {
      const n = Zt.validatePage(e, t, i, !0);
      let s = t ? "pageConfig" : "experimentConfig";
      if (n) {
        switch (n.reason) {
          case Xt.EXCLUDE_PASSED:
            s = "Url matches the excludes of " + s;
            break;
          case Xt.INCLUDE_FAILED:
            s = "Url does not match the includes of " + s;
            break;
          case Xt.INCLUDE_PASSED:
            s = "Url matches the includes of " + s;
        }
        return delete n.reason, Object.assign(Object.assign({}, n), {
          brief: s
        });
      }
    }
  }
  const on = function () {};
  class an {
    constructor(e, t) {
      this.toJSON = () => {
        const e = Object.assign({}, this);
        return delete e.preDefinedEvents, e;
      }, this.store = {
        state: $t,
        getters: ei,
        mutations: ii,
        actions: si
      }, this.eventBus = gi, this.preDefinedEvents = null == t ? void 0 : t.preDefinedEvents, this.debug = {
        tag: e => rn.tag(this.settings, e),
        trigger: e => rn.trigger(this.settings, e),
        page: (e, t, i) => rn.page(e, t, i)
      }, this.rules = Di, this.triggers = Ni, this.pageGroup = Zt, Object.assign(this, this.getEventMethods()), ki.init(), this.activate(e);
    }
    get version() {
      return "1.1.22";
    }
    add(...e) {
      this.settings.add(...e), gi.trigger(ft.POST_INIT);
    }
    replace(...e) {
      this.settings.replace(...e), gi.trigger(ft.POST_INIT);
    }
    on(e, t, {
      before: i,
      after: n
    } = {}) {
      if (xt(e)) return gi.on(e, t, {
        before: i,
        after: n
      });
      const s = Date.now() * Math.floor(1e3 * Math.random());
      this.tags.add(s, t), this.rules.add({
        triggers: [s.toString()],
        tags: [{
          id: s.toString()
        }]
      }, this.rules.generateRandomRuleId());
      const r = this.settings.preProcessTriggers(s.toString(), e);
      return Ni.add(s.toString(), r), s;
    }
    async validateTrigger(e, t = {}, i, n) {
      return It.info("Validating Trigger conditions through API", {
        trigger: e,
        event: t
      }), (await bi.validateTrigger(e, t, i, n)).isValid;
    }
    validateTriggerFromHistory(e, t) {
      return Ni.validateTriggerFromHistory(e, t);
    }
    destroy() {
      this.settings.remove();
    }
    async isValid(e, t, i) {
      await bi.isValid(e, t, di({
        isCustomEvent: !0,
        fromLocalStorage: !0
      }), i);
    }
    activate(e) {
      It.info("Activating Phoenix!"), this.settings = new sn(this, ...e), this.initializeValues(), gi.trigger(ft.POST_INIT);
    }
    getEventMethods() {
      return {
        on: this.on,
        off: gi.off.bind(gi),
        async trigger(e, t = {}, i) {
          if (Object.defineProperty(t, _t.EXIT_CONDITIONS, {
            value: this[_t.EXIT_CONDITIONS],
            enumerable: !1,
            writable: !0
          }), await gi.trigger(e, t), e && Pi.getVwoInstanceObject() && Pi.getVwoInstanceObject()[e]) {
            const t = Pi.getVwoInstanceObject()[e];
            Pi.flushTagData(e), await Pi.executeTagUniquelyForEveryEvent(t);
          }
          (Lt(i) || kt(i)) && (await i(t));
        },
        getEvent: gi.event.bind(gi)
      };
    }
    initializeValues() {
      this.operators = Jt.plugins[Bt.OPERATOR], this.formulas = Jt.plugins[Bt.FORMULA], this.events = Jt.plugins[Bt.EVENT], this.storages = Jt.plugins[Bt.STORAGE], this.tags = Jt.plugins[Bt.TAG], this.eventsProps = Jt.plugins[Bt.EVENT_PROPS];
    }
    deactivate() {
      this.trigger = on, this.add = on;
    }
    clearData() {
      Jt.clearData();
    }
  }
  an.version = "1.1.22";
  class ln {
    constructor() {
      this.storageLookUpKey = "_vwo_store_content";
    }
    otherSide(...e) {
      return e[0] = "VWO.modules.vwoUtils.contentSync." + e[0], e[2] && (e[2] = {
        captureGroups: e[2]
      }), window.fetcher.getValue(...e);
    }
  }
  const cn = {
      SET_COOKIE: "sC",
      GET_COOKIE: "gC",
      ERASE_COOKIE: "eC",
      SET_THIRD_PARTY_COOKIE: "sTPC",
      SET_THIRD_PARTY_COOKIE_ERROR: "sTPCE"
    },
    dn = function (...e) {
      window.fetcher.getValue("VWO._.triggerEvent", e);
    };
  let un;
  function gn(e) {
    un = e;
  }
  function vn(e) {
    window.VWO = null != e ? e : un;
  }
  const hn = window.VWO._ && window.VWO._.customError || function () {},
    pn = window.encodeURIComponent,
    wn = window.decodeURIComponent,
    fn = function (e) {
      return btoa && un._.ac && un._.ac.bsECJ ? btoa(e) : pn(e);
    },
    En = function (e) {
      if (atob) try {
        return atob(e);
      } catch (e) {}
      return wn(e);
    },
    mn = b.set,
    _n = b.get,
    On = window.clearTimeout,
    Sn = window.setTimeout,
    yn = Math.floor,
    Tn = Math.pow,
    In = "(",
    Cn = ")",
    bn = "_vis_opt_",
    Nn = "_vwo_",
    An = "_vis_",
    Vn = 864e5,
    Rn = {
      [bn + "out"]: 0,
      [bn + "exp_*_combi"]: 10,
      [bn + "exp_*_combi_choose"]: 11,
      [bn + "exp_*_goal_*"]: 12,
      [bn + "exp_*_exclude"]: 13,
      [bn + "exp_*_split"]: 14,
      [bn + "test_cookie"]: 20,
      [bn + "s"]: 21,
      [Nn + "ds"]: 22,
      [Nn + "sn"]: 23,
      [Nn + "referrer"]: 24,
      [Nn + "uuid"]: 30,
      [Nn + "uuid_*"]: 31,
      [Nn + "uuid_v2"]: 32,
      [Nn + "app_version_*_*"]: 40,
      [An + "preview_*"]: 41,
      [An + "editor"]: 42,
      [An + "heatmap_*"]: 43
    };
  let Pn;
  for (const e in Rn) Rn[e] = Gn(Rn[e]), Rn["debug" + e] = "d" + Rn[e];
  function xn() {
    for (var e = document.cookie.split(/; ?/), t = {}, i = 0; i < e.length; i++) {
      var n = e[i].split("=");
      try {
        const e = wn(n[0]);
        let i;
        i = "_vwo" === e ? En(n[1]) : wn(n[1]), t[e] = i;
      } catch (e) {}
    }
    return t;
  }
  function Dn(e) {
    return ["_vis_opt_out", "_vwo_ssm", "_vwo_ss", "_vwo_global_opt_out"].indexOf(e) < 0 && (e.indexOf("_vis_opt_") > -1 || e.indexOf("_vwo_") > -1 || e.indexOf("_vis_") > -1);
  }
  function Ln(e) {
    let t, i;
    return () => (i = i || Sn(() => {
      i = t = void 0;
    }, 1), t = t || e());
  }
  let kn = Ln(xn);
  function Un(e) {
    return kn()[wn(e)];
  }
  function Wn(e, t, i, n = 4e12) {
    t = "_vwo" === e ? fn(t) : pn(t);
    let s = pn(e) + "=" + t + "; ";
    i && (s += "domain=" + i + "; "), n && (s += "expires=" + new Date(n).toUTCString() + "; "), s += "path=/", window.VWO._ = window.VWO._ || {}, window.VWO._.ss && (s += "; secure; samesite=none"), document.cookie = s, kn = Ln(xn);
  }
  function Mn() {
    kn = Ln(xn);
  }
  function Gn(e) {
    "string" == typeof e && (e = +e), e < 0 && (e = 0);
    let t = "";
    for (; e;) {
      const i = e % 64;
      let n = i.toString(36);
      i >= 36 && (n = String.fromCharCode(i + 29)), 62 === i && (n = "_"), 63 === i && (n = "-"), t = n + t, e = yn(e / 64);
    }
    return t || e + "";
  }
  function Fn(e) {
    let t = 0,
      i = 0;
    for (; e;) {
      const n = e.slice(-1);
      let s = 26 * +/[A-Z]/.test(n) + parseInt(n, 36);
      "_" === n && (s = 62), "-" === n && (s = 63), t += s * Tn(64, i++), e = e.slice(0, -1);
    }
    return t;
  }
  function jn(e, t) {
    return !e || "number" != typeof e[2] || Date.now() > t + e[2] * Vn;
  }
  class Hn {
    constructor(e, t, i = "cookie", n = !0, s, r, o) {
      var a, l, c, d;
      this.threadInstanceSync = !1, this.defaultDelim1 = (null === (l = null === (a = window._vwoCc) || void 0 === a ? void 0 : a.cJ) || void 0 === l ? void 0 : l.pd) || "~", this.delim1 = (null === (d = null === (c = window._vwoCc) || void 0 === c ? void 0 : c.cJ) || void 0 === d ? void 0 : d.cd) || this.defaultDelim1, this.backwardCompatible = n, this.cookieSyncUrl = s, this.jarName = e, this.cookieStorageStrategy = i, this.domain = t, this.syncingOff = r, this.strategyConfig = o, this.syncingOff ? this.cookies = this.syncFromTPCValue() : this.cookies = this.syncFromCookies(), this.strategyConfig && (this.strategyConfig.callback = this.strategyConfig.callback || function () {}, this.strategyConfig.cookieJarValue = this.strategyConfig.cookieJarValue || ""), Pn = Fn(this.getInJar("ts") || "0") || Date.now(), this.setInJar("ts", Gn(Pn), 2e3), this.backwardCompatible && this.getAll(!1, !0), this.backwardCompatible || this.syncingOff || "custom" === i || this.syncCookiesToJar(), this.threadInstanceSync = !0;
    }
    syncCookiesToJar() {
      const e = document.cookie.split(/; ?/),
        t = this.getAll();
      for (var i = 0; i < e.length; i++) {
        const n = e[i].split("="),
          s = t[n[0]];
        Dn(n[0]) && !s && (this.setInJar(wn(n[0]), wn(n[1]), 100), window.VWO._.cookies.create(n[0], n[1], void 0, void 0, -1, !0));
      }
    }
    getInJar(e, t = !1) {
      if (e = this.mapKey(e), !this.cookies) return;
      const i = this.cookies[e];
      return jn(i, Pn) ? (delete this.cookies[e], void (this.syncingOff || this.syncToCookies())) : t ? i.slice(1) : i[1];
    }
    expired(e) {
      e = this.mapKey(e);
      const t = this.cookies[e];
      if (t) return jn(t, Pn);
    }
    setInJar(e, t, i) {
      return e = this.mapKey(e), this.cookies[e] = [e, t, i + (Date.now() - Pn) / Vn], this.threadInstanceSync && this.otherSide("updateJarMemory", [e, this.cookies[e]]), this.syncingOff || this.syncToCookies(), this.getInJar(e);
    }
    syncToCookies() {
      let e = "";
      for (const t in this.cookies) {
        const i = this.cookies[t];
        e += (e ? Cn : "") + this.encodeCookie(...i);
      }
      if ("custom" === this.cookieStorageStrategy) return Mn(), e = fn(e), void this.strategyConfig.callback(e);
      "ls" !== this.cookieStorageStrategy && "both" !== this.cookieStorageStrategy || mn(this.jarName, e), "cookie" !== this.cookieStorageStrategy && "both" !== this.cookieStorageStrategy || Wn(this.jarName, e, this.domain);
    }
    getStoredJarValue(e) {
      let t = "";
      for (const e in this.cookies) {
        const i = this.cookies[e];
        t += (t ? Cn : "") + this.encodeCookie(...i);
      }
      return e ? fn(t) : t;
    }
    syncFromTPCValue() {
      let e = window.VWO.data.tpc ? window.VWO.data.tpc._vwo : void 0;
      const t = {};
      if (!e) return t;
      e = e.split(Cn);
      for (let i = 0; i < e.length; i++) {
        const n = this.decodeCookie(e[i], this.cookieStorageStrategy);
        n && (t[n[0]] = n);
      }
      return t;
    }
    syncFromCookies() {
      let e = "";
      this.cookies = {}, "custom" === this.cookieStorageStrategy ? e = En(this.strategyConfig.cookieJarValue) : "ls" === this.cookieStorageStrategy ? e = _n(this.jarName) : "cookie" === this.cookieStorageStrategy ? e = Un(this.jarName) : "both" === this.cookieStorageStrategy && (e = Un(this.jarName) || _n(this.jarName)), e = e || "";
      const t = e.split(Cn);
      for (let i = 0; e && i < t.length; i++) {
        const e = this.decodeCookie(t[i], this.cookieStorageStrategy);
        e && (this.cookies[e[0]] = e);
      }
      return this.cookies;
    }
    encodeCookie(e, t, i) {
      return `${e}${this.delim1}${t}${In}${Gn(yn(100 * i))}`;
    }
    decodeCookie(e, t) {
      try {
        let t;
        const i = e.indexOf(this.delim1) > -1 ? this.delim1 : this.defaultDelim1;
        if (e.indexOf(i) > -1) t = e.split(i);else {
          const i = /ts(.)/.exec(e),
            n = i && i[1];
          n && (t = e.split(n), this.delim1 = n);
        }
        const n = t[1].split(In);
        return [t[0], n[0], Fn(n[1]) / 100];
      } catch (i) {
        const n = `Error occurred while decoding the cookie in cookieJar for strategy: ${t}. Cookie Value to be decoded: ${e}. ${i}`;
        return void hn({
          msg: n,
          url: "cookie-jar.js",
          lineno: 257,
          colno: 26,
          source: pn(n)
        });
      }
    }
    mapKey(e) {
      if (Rn[e]) return Rn[e];
      const t = /([0-9]+)/g,
        i = e.replace(t, "*");
      if (Rn[i]) {
        const n = e.match(t) || [];
        return Rn[i] + "*" + n.map(Gn).join("*");
      }
      return e;
    }
    unmapKey(e) {
      const t = e.split("*"),
        i = t[0];
      let n = "";
      for (const e in Rn) if (Rn[e] === i) {
        n = e;
        break;
      }
      for (let e = 1; e < t.length; e++) n = n.replace("*", "" + Fn(t[e]));
      return (n || "ts" === e) && n || e;
    }
    getAll(e = !1, t = !1) {
      const i = {};
      for (const n in this.cookies) {
        const s = this.unmapKey(n);
        let r = this.cookies[n][1];
        "ts" !== n && (r = this.get(s, t)), !1 === this.expired(n) && (i[s] = e ? [r, new Date(this.cookies[n][2] * Vn + Pn)] : r);
      }
      return i;
    }
    get(e, t = !1) {
      const i = this.expired(e),
        n = this.getInJar(e, !0);
      let s, r;
      n && ([s, r] = n);
      const o = "*" === s;
      if ("custom" !== this.cookieStorageStrategy && o) {
        const t = Un(e);
        return !t && s && this.setInJar(e, "", -1), t;
      }
      if (this.backwardCompatible) {
        const n = Un(e);
        return n && i ? void Wn(e, "", this.domain, -1) : (!t || !s || "ts" === e || n && n !== s || Wn(e, s, this.domain, Pn + r * Vn), n || !s || t || "ts" === e ? (n && s && n !== s && this.setInJar(e, n, r - (Date.now() - Pn) / Vn), n || s) : void this.setInJar(e, "", -1));
      }
      return this.getInJar(e);
    }
    xmlSuccess() {
      window.VWO._.cookies.create("_vis_opt_test_cookie", 1, void 0, void 0, void 0, !0);
    }
    set(e, t, i) {
      if (t += "", "number" == typeof i ? this.setInJar(e, t, i) : this.setInJar(e, "*", 2e3), "custom" !== this.cookieStorageStrategy && (this.backwardCompatible || "number" != typeof i)) {
        let n;
        n = null === i ? null : Date.now() + i * Vn, Wn(e, t, this.domain, n);
      }
      this.cookieSyncUrl && (On(this.cookieSyncTimeout), this.cookieSyncTimeout = Sn(() => {
        this.syncViaXML(this.xmlSuccess);
      }, 1e3));
    }
    updateJarMemory(e, t) {
      this.cookies[e] = t;
    }
    otherSide(...e) {
      e[0] = "VWO.modules.vwoUtils.cookies.CookieJar." + e[0], window.fetcher.getValue(...e);
    }
  }
  const $n = {
    primary: (e, t, i = !1, n, s) => new Proxy(t, {
      construct(t, r) {
        this.store = this.store || ["1"];
        const o = new t(...r),
          a = this.store.length;
        this.store.push(o);
        let l = r;
        i && (l = n(o)), Object.defineProperty(o, "otherSideCreated", {
          value: !1,
          enumerable: !1,
          writable: !0
        }), o.otherSide = (...e) => o.otherSideCreated.then(() => o.otherSide(...e).then(e => e));
        const c = {
          type: "vwoClassInstanceBridge",
          id: a,
          args: l,
          path: e
        };
        return o.otherSideCreated = new Promise(t => {
          window.fetcher.request(c).send().then(i => {
            o.otherSide = (...t) => {
              const n = e.dest + "." + i + "." + t[0];
              return t[0] = n, window.fetcher.getValue(...t);
            }, t(null), s && s(i);
          });
        }), o;
      },
      get(e, t) {
        return "symbol" == typeof t || isNaN(+t) ? e : this.store[t];
      }
    }),
    secondary: (e, t, i) => new Proxy(t, {
      construct(e, t) {
        this.store = this.store || ["1"];
        const n = new e(...t),
          s = this.store.length;
        return this.store.push(n), i && i(n), [s, n];
      },
      get(e, t) {
        return "symbol" == typeof t || isNaN(+t) ? e : this.store[t];
      }
    })
  };
  class Bn extends Hn {
    syncViaXML(e) {
      this.otherSide("syncViaXML", [e]);
    }
  }
  function Jn(e) {
    var t = [];
    for (var i in e) e.hasOwnProperty(i) && t.push(i);
    return t;
  }
  function Kn(e, t) {
    window.fetcher.getValue("VWO.modules.vwoUtils.urlUtils.customEvent", [e, t]);
  }
  window.VWO.modules.vwoUtils.cookies.CookieJar = $n.secondary("VWO.modules.vwoUtils.cookies.CookieJar", Bn, e => {
    "_vwo" === e.jarName && window.VWO._.cookieInitWT(e);
  });
  var zn = window._vis_opt_cookieDays,
    Yn = window._vwo_exp || {},
    Xn,
    qn = window._vwo_acc_id,
    Qn = [],
    Zn = 0,
    es,
    ts = function () {
      for (var e = 0; e < Qn.length; e++) Qn[e].d || (Qn[e].c(), Qn[e].d = !0);
    };
  function is() {
    return window._vis_debug;
  }
  function ns(e) {
    const t = window.VWO;
    return t._.cLFE || !t.data.cj || Object.values(t.data.cj).every(e => void 0 === e) || (e.backwardCompatible = t.data.cj.bc || !1, e.strategy = e.strategy || t.data.cj.s), e;
  }
  const ss = {
    domain: void 0,
    _create: function (e, t, i, n, s, r, o) {
      var a, l;
      is() && 0 !== e.indexOf("debug") && (e = "debug" + e), window.VWO._.cLFE, "_vwo_sn" !== e && "_vwo_ds" !== e && "_vis_opt_test_cookie" !== e && !isNaN(zn = parseFloat(zn)) && isFinite(zn) && (i = zn);
      var c = "";
      if (s ? c += "; expires=" + new Date(s).toGMTString() : i ? c += "; expires=" + new Date(new Date().getTime() + 864e5 * i).toGMTString() : !1 === i && (c = "; expires=Thu, 01 Jan 1970 00:00:01 GMT"), n || (n = ss.domain), void 0 !== n) {
        n = (null === (l = null === (a = window.VWO._.allSettings.dataStore.plugins.DACDNCONFIG) || void 0 === a ? void 0 : a.jsConfig) || void 0 === l ? void 0 : l.dNISD) && !window._vis_opt_domain ? "" : "; domain=." + n;
      }
      const d = e + "=" + encodeURIComponent(t) + c + (n || "") + "; path=/";
      window.VWO._.ss && !o ? document.cookie = d + "; secure; samesite=none" : document.cookie = d;
    },
    create: function (e, t, i, n, s, r, o) {
      this._create(e, t, i, n, s, r, o), dn(cn.SET_COOKIE, e, t, i, s), Kn("meta", {
        ckName: e,
        ckValue: t,
        ckDays: i,
        ckExpiryTs: s
      });
    },
    get: function (e, t, i) {
      var n;
      e = e.trim(), !i && is() && (e = "debug" + e), window.VWO._.cLFE;
      var s = document.cookie.match(new RegExp("(?:^|;)\\s*" + e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "=(.*?)(?:;|$)", "i"));
      return n = s && decodeURIComponent(s[1]), dn(cn.GET_COOKIE, e, n), n;
    },
    erase: function (e, t, i) {
      this.create(e, "", !1, t, 1, i), dn(cn.ERASE_COOKIE, e);
    },
    mergeInFPJar: function () {
      if (window.VWO._.cLFE) return;
      const e = this.createThirdPartyJar().getAll(!0);
      for (const t in e) {
        if ("ts" === t) continue;
        const i = e[t][1],
          n = e[t][0];
        window.VWO._.jar.set(t, n, (i - Date.now()) / 864e5);
      }
    },
    createThirdPartyJar: function () {
      return Xn || (Xn = new Bn("_vwo_third_party", ss.domain, void 0, !1, void 0, !0), window.VWO._.tpj = Xn, Xn);
    },
    setThirdPartyCookiesInJar: function (e, t, i, n) {
      const s = this.createThirdPartyJar(),
        r = n ? (n - Date.now()) / 864e5 : i;
      s.set(e, t, r);
    },
    getThirdPartyJarValue: function () {
      const e = Xn.getStoredJarValue();
      return e.length ? e : null;
    },
    createThirdParty: function (e, t, i, n, s, r, o) {
      if (!window.mainThread) return window.fetcher.getValue("VWO._.cookies.createThirdParty", [e, t, i, n, s, r, o]);
      var a, l, c, d;
      let u = !1;
      if (s && (u = o ? o.multiple_domains : Yn[s].multiple_domains), "_vwo" !== e && this._create(e, t, i, n), is() && 0 !== e.indexOf("debug") && (e = "debug" + e), !((d = window.vwo_$) && s && u || r || "_vwo" === e)) return void dn(cn.SET_THIRD_PARTY_COOKIE_ERROR, e, t, i, n);
      a = d("<iframe>").attr({
        height: "1px",
        width: "1px",
        border: "0",
        class: "vwo_iframe",
        name: "vwo_" + Math.random(),
        style: "position: absolute; left: -2000px; display: none"
      }).appendTo("head").load(function () {
        -1 !== e.indexOf("split") && this.parentNode.removeChild(this), --Zn || ts();
      }), Zn++;
      const g = window._vwo_server_url || "https://dev.visualwebsiteoptimizer.com";
      l = g + "/ping_tpc.php?account=" + qn + "&name=" + encodeURIComponent(e) + "&value=" + encodeURIComponent(t) + "&days=" + i + "&random=" + Math.random(), /MSIE (\d+\.\d+);/.test(navigator.userAgent) ? a.attr("src", l) : 767218 === window._vwo_acc_id || window.VWO._.lastPageUnloadURL ? window.VWO.modules.tags.dataSync.utils.sendCall(null, {
        url: "/ping_tpc.php?account=" + qn + "&name=" + encodeURIComponent(e) + "&value=" + encodeURIComponent(t) + "&days=" + i + "&random=" + Math.random()
      }, null, null, !0) : ((c = d("<form>").attr({
        action: g + "/ping_tpc.php",
        "accept-charset": "UTF-8",
        target: a.attr("name"),
        enctype: "application/x-www-form-urlencoded",
        method: "post",
        id: "vwo_form",
        style: "display:none"
      }).appendTo("head")).attr("action", l).submit(), c.remove()), dn(cn.SET_COOKIE, e, t, i, s, !0);
    },
    waitForThirdPartySync: function (e) {
      return i(this, void 0, void 0, function* () {
        window.mainThread ? Qn.push({
          c: e
        }) : yield window.fetcher.getValue('VWO._.cookies.waitForThirdPartySync("${{1}}")', null, {
          captureGroups: [e]
        });
      });
    },
    setJar(e) {
      window.VWO._.jar = es = e;
    },
    init: function (e) {
      window.VWO._.jar = null;
    },
    getAll: function (e = !1) {
      if (e && window.VWO._.isCookieFallbackEnabled) return window.fetcher.getValue("window.VWO._.cookies.getAll");
      const t = document.cookie.split(/; ?/),
        i = {};
      for (let e = 0; e < t.length; e++) {
        const n = t[e].split("="),
          s = n[0],
          r = n[1];
        try {
          i[s] = r;
        } catch (e) {}
      }
      return i;
    },
    getItem: function (e, t = !1) {
      return t && window.VWO._.isCookieFallbackEnabled ? window.fetcher.getValue("window.VWO._.cookies.getItem", [e]) : e.indexOf("_vis_opt_") > -1 || e.indexOf("_vwo_") > -1 ? this.get(e) || this.get(e, !0) : this.get(e, !0, !0);
    },
    setItem: function (e, t) {
      this.create(e, t);
    },
    deleteAll: function () {},
    deleteItem: function () {},
    includes: function (e, t = !1) {
      if (t && window.VWO._.isCookieFallbackEnabled) return window.fetcher.getValue("window.VWO._.cookies.includes", [e]);
      const i = new RegExp(e),
        n = Object.keys(ss.getAll());
      for (let e = 0; e < n.length; e++) if (i.test(n[e])) return 1;
      return 0;
    }
  };
  window.VWO._.cookies = ss;
  class rs {
    constructor(e) {
      this.storageConfig = e;
    }
    getValWithPref(e) {
      const {
          prefer: t,
          cookieExpDays: i
        } = this.storageConfig,
        n = b.get(e),
        s = b.get(e);
      return "cookie" == t ? b.set(e, n) : "ls" == t && ss.create(e, s, i), {
        cookie: JSON.parse(n),
        ls: JSON.parse(s)
      };
    }
    getVal(e) {
      const {
        strategy: t,
        prefer: i
      } = this.storageConfig;
      for (const n of t) return "all" == n ? this.getValWithPref(e)[i] : "ls" == n ? JSON.parse(b.get(e)) : ss.get(e);
    }
    setVal(e, t) {
      const {
        strategy: i,
        cookieExpDays: n
      } = this.storageConfig;
      for (const s of i) "all" == s ? (b.set(e, t), ss.create(e, t, n)) : "cookie" == s ? ss.create(e, t, n) : b.set(e, t);
    }
  }
  class os extends ln {
    constructor(e, t, i) {
      super(), this.contentSyncLocation = "VWO._.contentSyncService", this.url = t, this.globalLookupContext = i, this.storageObj = new rs(e);
    }
    parseStorageInfo(e, t, i) {
      if (!e) return;
      const [n, s] = t.split(".");
      return e[n] = e[n] || {}, e[n][s] = e[n][s] || {}, e[n][s][i];
    }
    getInfoFromGlobalObject(e, t) {
      if (!e) return;
      const [i, n] = t.split(".");
      return e[i] = e[i] || {}, e[i][n] = e[i][n] || {}, {
        argVn: e[i][n].args || {},
        vn: e[i][n].vn
      };
    }
    fixResponse(e) {
      const t = {
        fns: {}
      };
      e.fns = e.fns || {};
      for (const i in e.fns) for (const n in e.fns[i]) {
        const s = e.fns[i][n],
          r = JSON.stringify(JSON.parse(n));
        t.fns[i] = t.fns[i] || {}, t.fns[i][r] = s;
      }
      return t;
    }
    syncGet(e, t, i = !0) {
      if (!this.storageObj) return {
        dataPresent: !1
      };
      const n = this.storageObj.getVal(this.storageLookUpKey),
        s = JSON.stringify(t),
        r = this.getInfoFromGlobalObject(this.globalLookupContext, e),
        o = r && r.vn,
        a = r && r.argVn,
        l = this.parseStorageInfo(n, e, s);
      if (l && i) {
        const i = l;
        let n = !1;
        for (const r in a) for (const o in a[r]) if (i.argVn[r] && i.argVn[r][o] && parseInt(i.argVn[r][o]) < parseInt(a[r][o])) {
          n = !0, this.syncFromBackend(e, t, s, this.url);
          break;
        }
        return o && parseInt(o) > parseInt(i.vn) && !n && this.syncFromBackend(e, t, s, this.url), {
          dataPresent: !0,
          val: i.val
        };
      }
      return this.syncFromBackend(e, t, s, this.url), {
        dataPresent: !1
      };
    }
    syncFromBackend(e, t, n, s) {
      return i(this, void 0, void 0, function* () {
        yield this.otherSide("syncFromBackend", [e, t, n, s]);
      });
    }
    updateStorage(e) {
      return i(this, void 0, void 0, function* () {
        const t = window.VWO._.contentSyncService,
          i = t.storageObj.getVal(t.storageLookUpKey);
        let n = {};
        (i || !1) && (n = i);
        const s = (e = t.fixResponse(e)).fns;
        for (const e in s) {
          const t = s[e];
          for (const i in t) {
            n.fns = n.fns || {}, n.fns[e] = n.fns[e] || {};
            const s = n.fns[e][i];
            if (s) {
              if (parseInt(s.vn) == parseInt(t[i].vn)) {
                const s = n.fns[e][i].argVn;
                let r = !0;
                for (const e in s) {
                  if (!t[i].argVn[e] || !r) {
                    r = !1;
                    break;
                  }
                  for (const n in s[e]) {
                    const o = t[i].argVn[e][n],
                      a = s[e][n];
                    if (!o || parseInt(a) <= parseInt(o)) {
                      r = !1;
                      break;
                    }
                  }
                }
                !r && (n.fns[e][i] = t[i]);
              } else parseInt(s.vn) < parseInt(t[i].vn) && (n.fns[e][i] = t[i]);
            } else n.fns[e][i] = t[i];
          }
        }
        t.storageObj.setVal(t.storageLookUpKey, JSON.stringify(n));
      });
    }
  }
  window.VWO.modules.tags = {};
  class as {
    otherSide(...e) {
      e[0] = "VWO.modules.tags.checkEnvironment." + e[0], window.fetcher.getValue(...e);
    }
  }
  window.VWO.modules.tags.checkEnvironment = {};
  const ls = "lT",
    cs = "sT",
    ds = "ivp",
    us = "gp",
    gs = "ca",
    vs = 10,
    hs = 2,
    ps = function () {},
    ws = "w",
    fs = [739074, 714884, 708439, 765649],
    Es = window.VWO.TRACK_SESSION_COOKIE_EXPIRY_CUSTOM || 1 / 48,
    ms = "_vis_opt_",
    _s = "_vwo_",
    Os = {
      TRACK_GLOBAL_COOKIE_NAME: "_vwo_ds",
      TRACK_SESSION_COOKIE_NAME: "_vwo_sn",
      TRACK_SESSION_COOKIE_EXPIRY: Es,
      SESSION_TIMER_EXPIRE: 60 * Es * 60 * 1e3 * 24,
      COOKIE_VERSION: 3,
      COOKIE_TS_INDEX: 1,
      COOKIE_VERSION_INDEX: 0,
      FIRST_SESSION_ID_INDEX: 0,
      PC_TRAFFIC_INDEX: 1,
      RELATIVE_SESSION_ID_INDEX: 0,
      PAGE_ID_INFORMATION_INDEX: 1,
      SESSION_SYNCED_STATE_INDEX: 4,
      PAGE_ID_EXPIRY: 15,
      GLOBAL_OPT_OUT: "_vwo_global_opt_out",
      OPT_OUT: "_vis_opt_out",
      TEST_COOKIE: "_vis_opt_test_cookie",
      COOKIE_JAR: "_vwo",
      SAME_SITE: "_vwo_ssm",
      UUID: "uuid",
      UUID_V2: "uuid_v2",
      DEFAULT_EXPIRY: 100,
      UUID_COOKIE_EXPIRY: 3650
    };
  function Ss() {
    return Math.min(window.VWO.TRACK_GLOBAL_COOKIE_EXPIRY_CUSTOM || window.VWO.data.rp || 90, 90);
  }
  function ys() {
    return {
      [ms + "test_cookie"]: 0,
      [_s + "ds"]: Ss(),
      [_s + "sn"]: Es,
      [_s + "referrer"]: 18e-5,
      [_s + "uuid"]: 3650,
      [_s + "uuid_v2"]: 366,
      [Os.SAME_SITE]: 3650
    };
  }
  const Ts = {
    CAMPAIGN_FLOW_START: "cFS",
    TEST_NOT_RUNNING: "tNR",
    CAMPAIGN_FLOW_END: "cFE",
    REGISTER_CONVERSION: "vwo_rC",
    CONVERT_GOAL_FOR_ALL_EXPERIMENTS: "cGFAE",
    UNHIDE_ALL_VARIATIONS: "uAV",
    DIMENSION_TAG_PUSHED: "dTP",
    CONVERT_VISIT_GOAL_FOR_EXPERIMENT: "cVGFE",
    UNHIDE_SECTION: "uS",
    EXCLUDE_URL: "eURL",
    BEFORE_REDIRECT_TO_URL: "bRTR",
    URL_CHANGED: "uC",
    HIDE_ELEMENTS: "hE",
    ELEMENT_LOAD_ERROR: "eLTTE",
    NOT_REDIRECTING: "vwo_notRedirecting",
    VISIBILITY_TRIGGERED: "vwo_visibilityTriggered",
    VARIATION_APPLIED: "vwo_vA",
    ELEMENT_LOAD_TIMER_STOP: "eLTSt",
    SEND_NEW_VISITOR_CALL: "sNVC",
    CONVERT_REVENUE_GOALS_FOR_EXPERIMENT: "cRGFE",
    CHOOSE_COMBINATION: "cC",
    START_APPLY_CHANGES: "sAC",
    END_APPLY_CHANGES: "eAC",
    CAMPAIGN_COMBI_CREATED: "cCC",
    ELEMENT_LOADED: "eL",
    ELEMENT_NOT_LOADED: "eNL",
    MATCH_WILDCARD: "mW",
    DELETE_CSS_RULE: "dCSSR",
    SPLIT_READY_TO_REDIRECT: "sURL",
    SESSION: "vwo_session",
    NEW_SESSION: "newSession",
    UNHIDE_VARIATION: "uV",
    NEW_SESSION_CREATED: "newSessionCreated",
    PAUSE: "pause",
    SPLIT_URL: "sURL",
    SHOULD_EXECUTE_LIB_ERROR: "shouldExecLib",
    UPDATE_SETTINGS_CALL: "uSC",
    EXCLUDE_GOAL_URL: "eGURL",
    HEATMAP_CLICK: "hCl",
    POST_URL_CHANGE: "hC",
    CONVERT_ALL_VISIT_GOALS_FOR_EXPERIMENT: "cAVGFE",
    OPT_OUT: "oO",
    POST_INIT: "vwo_postInit",
    PAGE_VIEW: "vwo_pageView",
    ELEMENT_CHANGES_APPLIED: "elementChangesApplied",
    REGISTER_HIT: "registerHit",
    REDIRECT_DECISION: "rD",
    RETRACK_VISITOR: "retrackVisitor",
    CAMPAIGN_NOT_ELIGIBLE: "runCampaign.notEligible",
    UNHIDE_ELEMENT: "unhideElement",
    TOGGLE_VISIBILITY_LOCK: "runCampaign.toggleVisibilityLock",
    CAMPAIGN_READY: "runCampaign.campaignReady",
    MODIFIED_ELEMENT: "runTestCampaign.modifiedEl",
    ERROR: "error",
    SSR_COMPLETE: "vwo_mutationObserved",
    SET_ENV: "setEnvironment",
    ACTIVATED: "vwo_activated",
    _ACTIVATED: "vwo__activated",
    RECORDING_NOT_ELIGIBLE: "rNE",
    VARIATION_SHOWN: "vwo_variationShown",
    NEW_SURVEY_FOUND: "nSF",
    SYNC_VISITOR_PROP: "vwo_syncVisitorProp",
    EXECUTE_FUNNEL_FOR_GOAL_CAMPAIGN: "executeFunnelCampForGoalCampaign",
    EDITOR_APPLY_CHANGES_COMPLETE: "editorApplyChangesComplete",
    INIT_VWO_INTERNALS: "initVWOInternals",
    SET_CAMPAIGN_TO_OBSERVE: "setCampaignToObserve",
    SEGMENTATION_EVALUATED: "sE",
    ELEMENTS_SHOWN_WITHOUT_CHANGES: "eSWC",
    CUSTOM_CONVERSION: "vwo_conversion",
    REVENUE_CONVERSION: "vwo_revenue",
    DOM_SUBMIT: "vwo_dom_submit",
    DOM_CLICK: "vwo_dom_click",
    GOAL_CONVERTED: "vwo_goalConverted",
    GOAL_VISIT: "vwo_goalVisit",
    EVALUATE_GOAL_PAGE_FOR_PREJS: "vwo_evalPreCampJs",
    GROUP_WINNER_CHOOSEN: "vwo_groupWinnerChosen",
    CHECK_SEGMENTATION: "checkSegmentation",
    TRACK_NEW_SESSION_CREATED: "tnSC",
    TRACK_SESSION_CREATED: "tSC",
    PAGE_UNLOAD: "vwo_pageUnload",
    SPA_VISIBILITY_SERVICE: "visibilityForSpa",
    SESSION_INIT_COMPLETE: "vwo_sessionInitComplete",
    TIB_DONE: "vwo_topInitializeBeginDone",
    TOGGLE_MUT_OBSERVER: "toggleMutationObserver",
    DOM_CONTENTLOADED: "vwo_dom_DOMContentLoaded",
    SPLIT_VARIATION_SHOWN: "splitVariationShown",
    VWO_EXECUTED: "vwo_executed",
    ACTIVATE_API_TRIGGERED: "aAT"
  };
  class Is {
    otherSide(...e) {
      return e[0] = "window.VWO.modules.utils.campaignUtils." + e[0], window.fetcher.getValue(...e);
    }
  }
  let Cs;
  function bs(e) {
    if (!e) return e;
    try {
      e = window.decodeURIComponent(e);
    } catch (e) {}
    return e;
  }
  const Ns = function () {
      if (void 0 !== Cs) return Cs;
      const e = [],
        t = window.VWO._.allSettings.dataStore.campaigns;
      let i, n;
      for (let i in t) e.push(i);
      return Cs = !!(i = (window.location.search + window.location.hash).match(/.*_vis_test_id=(.*?)&.*_vis_opt_preview_combination=(.*)$/)) && !(!e.includes(i[1]) || !t[i[1]] || void 0 === t[i[1]].combs[n = bs(i[2])]) && n, Cs;
    },
    As = Object.keys;
  function Vs(e, t) {
    if (!(e instanceof Array)) return -1;
    for (var i = 0; i < e.length; i++) if (t === e[i]) return i;
    return -1;
  }
  function Rs(e, t, i) {
    var n,
      s,
      r,
      o = !1;
    return -1 === t || i ? (s = requestAnimationFrame, r = cancelAnimationFrame) : (s = setTimeout, r = clearTimeout), function (...i) {
      o && (r(n), n = null), n = s(function () {
        e.apply(this, i);
      }, t), o = !0;
    };
  }
  function Ps(e, t) {
    return e.length > t ? e.slice(0, t - 1) + "..." : e;
  }
  class xs {
    constructor() {
      this.uuid = "", this.TPJarExpiry = 730, this.preview = Ns, this.hideElExpression = "{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}";
    }
    otherSide(...e) {
      return e[0] = "VWO.modules.utils.libUtils." + e[0], e[2] && (e[2] = {
        captureGroups: e[2]
      }), window.fetcher.getValue(...e);
    }
    isDomDependent(e) {
      return "VISUAL_AB" === e || "VISUAL" === e;
    }
    isTestingCampaign(e) {
      return this.isDomDependent(e) || "SPLIT_URL" === e;
    }
    generateUUID() {
      return "Jxxxxxxxxxxx4xxxyxxxxxx5xxxxxxxx9".replace(/[xy]/g, function (e) {
        const t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16).toUpperCase();
      });
    }
    isDomIndependentCampaign(e) {
      return "ANALYSIS" === e || "SURVEY" === e || "ANALYZE_RECORDING" === e || "ANALYZE_HEATMAP" === e || "ANALYZE_FORM" === e || "TRACK" === e || "FUNNEL" === e;
    }
    isSessionBasedCampaign2(e) {
      const t = e.type;
      return "ANALYZE_RECORDING" === t || "ANALYZE_HEATMAP" === t || "ANALYZE_FORM" === t || "TRACK" === t || "FUNNEL" === t;
    }
    isBot2() {
      return window.navigator.userAgent.toLowerCase().indexOf("bot") >= 0 || window.navigator.userAgent.toLowerCase().indexOf("spider") >= 0 || window.navigator.userAgent.toLowerCase().indexOf("preview") >= 0;
    }
    isPageBasedGoal(e) {
      return "SEPARATE_PAGE" === e || "CUSTOM_GOAL" === e || "REVENUE_TRACKING" === e;
    }
    isSplitVariation(e) {
      return "SPLIT_URL" === e.type && e[ds];
    }
    shouldTrackUserForCampaign(e) {
      return !e || !window._vwo_code || !window._vwo_code[ls] && !window._vwo_code[cs] || this.isDomIndependentCampaign(e.type) || this.isSplitVariation(e);
    }
    getUUIDString(e) {
      return e ? "&u=" + e : "";
    }
    isAnalyzeCampaign(e) {
      return "ANALYZE_RECORDING" === e || "ANALYZE_HEATMAP" === e || "ANALYZE_FORM" === e;
    }
    updateGoalsKind(e) {
      const t = {};
      Object.keys(e).forEach(i => {
        const n = e[i],
          s = e[i].mt;
        s && Object.keys(n.goals).length && Object.entries(s).forEach(([e, n]) => {
          const s = this.getGoalKind(n);
          s && (t[i] = t[i] || {}, t[i][e] = s);
        });
      }), window.VWO._.goalsToBeConvertedSynchronously = t;
    }
    getGoalKind(e) {
      let t;
      const i = window.VWO._.allSettings.triggers[e];
      if (i) if ("object" == typeof i.cnds[0]) {
        switch (i.cnds[0].event) {
          case Ts.DOM_CLICK:
            t = "CLICK_ELEMENT";
            break;
          case Ts.DOM_SUBMIT:
            t = "FORM_SUBMIT";
            break;
          case Ts.PAGE_UNLOAD:
            t = "PAGE_UNLOAD";
        }
      } else {
        switch (i.cnds[1].event) {
          case Ts.DOM_SUBMIT:
          case Ts.DOM_CLICK:
            t = "ENGAGEMENT";
        }
      }
      return t;
    }
    isEligibleToSendCall(e, t) {
      return !Ns() && (t && !t.visDebug || !window._vis_debug) && this.shouldTrackUserForCampaign(e) && (t && t.vwoInternalProperties.shouldExecuteLib || window.VWO._.shouldExecuteLib);
    }
    isPersonalizeCampaign(e) {
      var t;
      return "TARGETING" === (null === (t = e.iType) || void 0 === t ? void 0 : t.type);
    }
    doNotHideElements(e) {
      return e && "boolean" == typeof e;
    }
    getMatchedCookies(e) {
      let t = [];
      return document.cookie && (t = document.cookie.match(e) || []), t;
    }
    getCombinationCookie() {
      let e = this.getMatchedCookies(/(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi);
      e = e.map(function (e) {
        try {
          const t = decodeURIComponent(e);
          return /_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t) ? t : "";
        } catch (e) {
          return "";
        }
      });
      const t = [];
      return e.forEach(function (e) {
        const i = e.match(/([\d,]+)/g);
        i && t.push(i.join("-"));
      }), t.join("|");
    }
    getSelectorPath(e, t) {
      let i = "",
        n = t.sections[1].variations[e];
      if ("string" == typeof n && (n = vwo_$.parseJSON(n)), n) for (let e = 0; e < n.length; e++) {
        let s = n[e].xpath;
        s && (n[e].dHE ? t.dHE = !0 : (t.mSP && (s = s.replace(/html\.vwo_p_s_\w+\s*/g, "")), i += s + ","));
      }
      return i;
    }
    getCampaignXPath(e) {
      const t = {
        selector: "",
        selectorPerVariation: {}
      };
      if (e.xPath) return t.selector = e.xPath, t;
      if (!this.isDomDependent(e.type)) return t;
      let i = e.combination_chosen || e.cc;
      const n = e.sections;
      if ("VISUAL_AB" === e.type) {
        if (i) 1 != i && (t.selector = this.getSelectorPath(i, e));else {
          let n;
          for (i in e.combs) if (e.combs.hasOwnProperty(i)) {
            const s = this.getSelectorPath(i, e);
            "head," === s.toLowerCase() ? (n || (t.selector += s), n = !0) : t.selector += s, t.selectorPerVariation[i] = s.substr(0, s.length - 1);
          }
        }
      } else {
        const e = As(n);
        let i = e.length;
        for (; i--;) n[e[i]].path && (t.selector += n[e[i]].path + ",");
      }
      return e.dHE && !t.selector && (t.selector = ".vwo_dummy_selector,"), t.selector ? (t.selector = t.selector.substr(0, t.selector.length - 1), t) : {
        selector: "",
        selectorPerVariation: {}
      };
    }
  }
  function Ds(e, t) {
    window.fetcher.getValue('VWO.modules.utils.helperFunctions.onUrlChange("${{1}}", "${{2}}")', null, {
      captureGroups: [e, t]
    });
  }
  function Ls(e, t) {
    let i,
      n = !1;
    return function (...s) {
      n && (clearTimeout(i), i = null), i = setTimeout(function () {
        e.apply(null, s);
      }, t), n = !0;
    };
  }
  class ks {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.dataSync." + e[0], window.fetcher.getValue(...e);
    }
  }
  var Us = {
      PARSE_TLD: "pTLD"
    },
    Ws = ["co", "org", "com", "net", "edu", "au", "ac"],
    Ms;
  function Gs(e) {
    var t,
      i = e.split("."),
      n = i.length,
      s = i[n - 2];
    return s && Ws.includes(s) ? (t = i[n - 3] + "." + s + "." + i[n - 1], dn(Us.PARSE_TLD, e, t), t) : (t = s + "." + i[n - 1], dn(Us.PARSE_TLD, e, t), t);
  }
  const Fs = {
    init: function () {
      Ms = ss.get("_vwo_referrer"), ss.erase("_vwo_referrer"), "string" != typeof Ms && (Ms = document.referrer);
    },
    get: function () {
      return -1 !== location.search.search("_vwo_test_ref") ? document.referrer : Ms;
    },
    set: function () {
      ss.create("_vwo_referrer", Ms, 18e-5);
    }
  };
  window.VWO.modules.vwoUtils.referrer = Fs;
  const js = {
    get navigator() {
      return navigator;
    },
    get pageTitle() {
      return document.title;
    },
    get doNotTrack() {
      return window.doNotTrack;
    },
    get windowName() {
      return window.name;
    },
    get currentUrl() {
      return window._vis_opt_url || window.location.href;
    },
    get location() {
      return window.location;
    },
    get document() {
      return window.location;
    },
    get history() {
      return window.history;
    },
    get accountId() {
      return window._vwo_acc_id;
    },
    get smartCodeVersion() {
      return window._vwo_code_version;
    },
    get serverUrl() {
      return window._vwo_server_url || "https://dev.visualwebsiteoptimizer.com/";
    },
    get vwoText() {
      return window._vwo_text;
    },
    get vwoCode() {
      return window._vwo_code;
    },
    get MutationObserver() {
      let e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      return window.Zone && window.Zone.__symbol__ && (e = window[window.Zone.__symbol__("MutationObserver")]), e;
    },
    get vwoInternalProperties() {
      return window.VWO._;
    },
    get cookie() {
      return document.cookie;
    },
    get visDebug() {
      return window._vis_debug;
    },
    get cookieDomain() {
      return window._vis_opt_domain || window._vwo_cookieDomain || Gs(location.host);
    },
    get vwoStyle() {
      return window._vwo_style;
    },
    get screen() {
      return window.screen;
    },
    get vwoCss() {
      return window._vwo_css;
    },
    get visOptUrl() {
      return window._vis_opt_url;
    },
    get allSettings() {
      return window.VWO._.allSettings;
    },
    get apiSectionCallback() {
      return window._vwo_api_section_callback;
    },
    get encodeURIComponent() {
      return window.encodeURIComponent;
    },
    get page() {
      return {
        title: js.pageTitle,
        url: js.currentUrl,
        referrerUrl: Fs.get()
      };
    },
    get timeSpentInASession() {
      var e, t, i, n, s, r;
      return +Date.now() - 1e3 * +(null === (i = null === (t = null === (e = window.VWO.phoenix) || void 0 === e ? void 0 : e.store) || void 0 === t ? void 0 : t.getters) || void 0 === i ? void 0 : i.sessionStart) ? (+Date.now() - 1e3 * +(null === (r = null === (s = null === (n = window.VWO.phoenix) || void 0 === n ? void 0 : n.store) || void 0 === s ? void 0 : s.getters) || void 0 === r ? void 0 : r.sessionStart)) / 1e3 : 0;
    },
    get vwoUUID() {
      return window._vwo_uuid;
    }
  };
  class Hs {
    constructor() {
      this.vwoEventsToBeSynced = {
        [Ts.VARIATION_SHOWN]: {
          ignoreMetricDataCheck: !0
        },
        [Ts.PAGE_VIEW]: {},
        [Ts.DOM_CLICK]: {},
        [Ts.DOM_SUBMIT]: {},
        [Ts.CUSTOM_CONVERSION]: {},
        [Ts.REVENUE_CONVERSION]: {},
        [Ts.SYNC_VISITOR_PROP]: {
          ignoreMetricDataCheck: !0
        },
        [Ts.PAGE_UNLOAD]: {}
      }, this.allowedMetaDataProps = {
        ogName: !0,
        source: !0
      };
    }
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.dataSync.utils." + e[0], window.fetcher.getValue(...e);
    }
    shouldSendEventCall(e, t) {
      var i;
      const n = t.name;
      if (!n) return !1;
      const s = this.vwoEventsToBeSynced[t.name];
      if (void 0 === s && !t.props.isCustomEvent) return !1;
      if (!window.VWO._.allSettings.dataStore.events[n]) {
        let e;
        try {
          e = JSON.parse(window.localStorage.getItem(Hs.UNREG_EVENT_LOCAL_STORAGE_NAME)) || {};
        } catch (t) {
          e = {};
        }
        if (e[n]) return !1;
        {
          e[n] = !0;
          const t = JSON.stringify(e);
          window.localStorage.setItem(Hs.UNREG_EVENT_LOCAL_STORAGE_NAME, t);
        }
      }
      if (t.props.isCustomEvent) return !0;
      if (!s || !s.ignoreMetricDataCheck) {
        const e = null === (i = t._vwo) || void 0 === i ? void 0 : i.eventDataConfig;
        if (!e || Object.keys(e).length <= 0) return !1;
      }
      if (t.name !== Ts.VARIATION_SHOWN) return !0;
      let r = "non-analytics";
      location.href.includes("jsMode=Any") && (r = "analytics");
      const o = null == t ? void 0 : t.props,
        a = null == o ? void 0 : o.id;
      if (!o || !a) return !1;
      const l = e.currentSettings.dataStore.campaigns[a] || window._vwo_exp[a],
        c = window.VWO.modules.utils.libUtils.isSessionBasedCampaign2(l),
        d = "SURVEY" === l.type;
      return !(!("analytics" === r || "non-analytics" === r && o.isFirst) || c || d);
    }
    evaluateDataForEventsCall(e, t, i) {
      var n;
      let s = !0;
      this.syncAdditionalDataWithEventsData(null === (n = i._vwo) || void 0 === n ? void 0 : n.eventDataConfig, i);
      const r = {
        d: {}
      };
      if (r.d.msgId = `${t}-${+new Date()}`, r.d.visId = t, r.d.event = {
        props: this.excludeEventPropsNotToBeSynced(e, i.name, i.props),
        name: i.name,
        time: i.time
      }, i.props.$metaData) {
        const e = {},
          t = i.props.$metaData;
        for (const i in t) Object.prototype.hasOwnProperty.call(this.allowedMetaDataProps, i) && (e[i] = t[i]);
        Object.keys(e).length > 0 && (r.d.event.props.vwoMeta = r.d.event.props.vwoMeta || {}, Object.assign(r.d.event.props.vwoMeta, e)), delete r.d.event.props.$metaData;
      }
      return i.props.$visitor && (r.d.visitor = i.props.$visitor, delete i.props.$visitor, Object.keys(r.d.visitor.props).length <= 0 && (s = !1)), r.d.event.props.page = i.page || this.getPageInfo(), this.resetDataForCurrentEvent(i), {
        payload: r,
        shouldSyncCall: s
      };
    }
    getPageInfo() {
      return js.page;
    }
    syncAdditionalDataWithEventsData(e, t) {
      if (e) for (const i in e) if (Object.prototype.hasOwnProperty.call(e, i) && "shouldSyncData" !== i) {
        const n = e[i];
        if (void 0 === n) continue;
        t.props ? t.props[i] = n : t[i] = n;
      }
    }
    resetDataForCurrentEvent(e) {
      var t;
      let i = (null === (t = e._vwo) || void 0 === t ? void 0 : t.eventDataConfig) || {};
      (i || e.props) && (i = {}, e.props = {});
    }
    excludeEventPropsNotToBeSynced(e, t, i) {
      var n, s, r, o, a, l, c;
      const d = ["fireLinkedTagSync", "isTrusted", "page", "$visitor", "isCustomEvent", "VWO"];
      if (!i.isCustomEvent) {
        const i = (null === (o = null === (r = null === (s = null === (n = e.currentSettings) || void 0 === n ? void 0 : n.dataStore) || void 0 === s ? void 0 : s.events) || void 0 === r ? void 0 : r[t]) || void 0 === o ? void 0 : o.nS) || (null === (c = null === (l = null === (a = window.VWO._.allSettings.dataStore) || void 0 === a ? void 0 : a.events) || void 0 === l ? void 0 : l[t]) || void 0 === c ? void 0 : c.nS) || [];
        Array.prototype.push.apply(d, i);
      }
      if (!d || !d.length) return i;
      const u = {},
        g = window.VWO._.allSettings.dataStore.events[t];
      for (const e in i) if (Object.prototype.hasOwnProperty.call(i, e)) {
        const t = i[e];
        d.indexOf(e) > -1 ? delete u[e] : u[e] = !g && t ? Ps(t, 100) : t;
      }
      return u;
    }
  }
  Hs.UNREG_EVENT_LOCAL_STORAGE_NAME = "vwoUnregEvents";
  class $s extends Hs {
    sendCall(e, t, i, n, s, r, o) {
      return this.otherSide("sendCall", [e, t, i, n, s, r, o]);
    }
    addDataFromMTAndSend(e, t, i, n, s, r, o, a) {
      return this.otherSide("addDataFromMTAndSend", [e, t, i, n, s, r, o, a]);
    }
    getDataForEventsCall(e, t, n) {
      return i(this, void 0, void 0, function* () {
        const i = window.VWO.modules.tags.sessionInfoService;
        let {
          payload: s,
          shouldSyncCall: r
        } = this.evaluateDataForEventsCall(e, t, n);
        return s.d.sessionId = yield i.getSessionId(), {
          data: JSON.stringify(s),
          shouldSyncCall: r
        };
      });
    }
  }
  var Bs = new $s();
  class Js extends ks {
    execute({
      event: e,
      getters: t
    }, n, s, r, o) {
      return i(this, void 0, void 0, function* () {
        if (t.visDebug) (s = s || ps)(r);else if (Bs.shouldSendEventCall(t, e)) {
          o = o || (yield Nr.createUUIDCookie2(t, n));
          const {
            data: i,
            shouldSyncCall: a
          } = yield Bs.getDataForEventsCall(t, o, e);
          a && (yield Bs.addDataFromMTAndSend(t, null, i, s, !0, r, e, null == n ? void 0 : n.id));
        } else (s = s || ps)(r);
      });
    }
  }
  const Ks = new Js(),
    zs = Ks.execute.bind(Ks);
  function Ys(e, t) {
    var i;
    const n = e.conflictingPropsData || {};
    if (!e.props) {
      e.props = {};
      const i = ["name", "props", "_vwo", "_meta", "conflictingPropsData"];
      for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (i.includes(t) || (e.props[t] = e[t]));
      Object.assign(e.props, n), Object.keys(t).forEach(i => {
        e.props[i] = t[i];
      });
    }
    e.time = e.time || (null === (i = e.VWO) || void 0 === i ? void 0 : i.firedTime) || +new Date();
  }
  const Xs = {};
  window.addEventListener("load", performEnhancedInspectionTask);
  function qs({
    vwoEvents: e,
    getters: t,
    data: n,
    actions: s,
    event: r
  }, o, a = {}, l = null) {
    var c, d;
    return i(this, void 0, void 0, function* () {
      if (r.name = o || r.name, null === (c = Xs[r.name]) || void 0 === c ? void 0 : c.shouldWaitForCallbackExecution) return;
      let i;
      Ys(r, a), r.name === Ts.VARIATION_SHOWN && (i = t.settings.campaigns[r.props.id]);
      const u = null === (d = r._vwo) || void 0 === d ? void 0 : d.eventDataConfig;
      if (u) {
        const i = Object.keys(u);
        for (let o = i.length - 1; o >= 0; --o) {
          const a = i[o];
          r._vwo.eventDataConfig = u[a], delete u[a], yield zs({
            getters: t,
            event: r,
            data: n,
            actions: s,
            vwoEvents: e
          }, null, l, null, a);
        }
      } else yield zs({
        getters: t,
        event: r,
        data: n,
        actions: s,
        vwoEvents: e
      }, i, l);
    });
  }
  function Qs(e, t, n, s = null) {
    const r = window.phoenix;
    return n.name = n.name || t, Xs[t] = Xs[t] || {}, Xs[t].shouldWaitForCallbackExecution = !0, (e = e || r).trigger(t, n, function (e) {
      return i(this, void 0, void 0, function* () {
        const i = r.store,
          n = i.getters;
        Xs[t].shouldWaitForCallbackExecution = !1, yield qs({
          getters: n,
          actions: i.actions,
          event: e,
          vwoEvents: r,
          data: {}
        }, t, {}, s);
      });
    });
  }
  function Zs(e, t, i, n = {}) {
    return Qs(e, t, Object.assign({
      name: t,
      time: +new Date(),
      props: i
    }, n));
  }
  const er = {
    variationShown(e, t, n) {
      return i(this, void 0, void 0, function* () {
        e = e || window.phoenix, n && void 0 === n.isFirst && (n.isFirst = t.isFirst), yield Zs(e, Ts.VARIATION_SHOWN, t);
      });
    },
    dimensionTagPushed(e, t) {
      Zs(e = e || window.phoenix, Ts.DIMENSION_TAG_PUSHED, t);
    },
    unhideElement(e, t) {
      Zs(e, Ts.UNHIDE_ELEMENT, void 0, t);
    }
  };
  window.VWO.modules.events = {
    syncEventsDataToDataLayer: qs,
    fireEventAndSyncData: Qs,
    events: er
  };
  const tr = {
    VISITOR_IS_NOT_OPTED_OUT: "visitorIsNotOptedOut",
    VISITOR_IS_OPTED_OUT_COMPLETELY: "visitorIsOptedOutCompletely",
    VISITOR_IS_OPTED_OUT: "visitorIsOptedOut"
  };
  var ir;
  !function (e) {
    e[e.OPTED_OUT_WITH_EXPERIENCE = 0] = "OPTED_OUT_WITH_EXPERIENCE", e[e.OPTED_OUT_PARTIALLY = 1] = "OPTED_OUT_PARTIALLY", e[e.OPTED_OUT_COMPLETELY = 2] = "OPTED_OUT_COMPLETELY";
  }(ir || (ir = {}));
  class nr {
    setOptOutStateConfig() {
      let e, t, i, n;
      switch (e = window.VWO._.isWorkerThread ? window.phoenix.storages.storages.cookies.get("_vis_opt_out", !0) : window.VWO._.cookies.get("_vis_opt_out", !0), e && (e = Number(e)), e) {
        case 0:
          t = tr.VISITOR_IS_OPTED_OUT, i = !0, n = !1;
          break;
        case 1:
        case 2:
          t = tr.VISITOR_IS_OPTED_OUT_COMPLETELY, i = !1, n = !1;
          break;
        default:
          t = tr.VISITOR_IS_NOT_OPTED_OUT, i = !0, n = !0;
      }
      window.VWO.phoenix && window.fetcher.setValue("window.VWO._.optOutStates", {
        state: t,
        executeLib: i,
        shouldWeTrackVisitor: n
      }), window.VWO._.optOutStates = {
        state: t,
        executeLib: i,
        shouldWeTrackVisitor: n
      };
    }
    callStopAnalyzeAndSurvey() {
      window.VWO._.optOutStates.shouldWeTrackVisitor || (window.VWO._.isWorkerThread ? window.fetcher.getValue("window.VWO.modules.otherLibDeps.stopAnalyzeAndSurvey") : window.VWO.modules.otherLibDeps.stopAnalyzeAndSurvey());
    }
    getOptOutStateConfig() {
      return window.VWO._.optOutStates;
    }
    shouldExecuteLibOnBasisOfCurrentOptOutState() {
      return !(!Ns() && !window._vis_debug) || (this.getOptOutStateConfig().executeLib || window._removeVwoGlobalStyle(), this.getOptOutStateConfig().executeLib);
    }
    shouldWeTrackVisitor() {
      return !(!Ns() && !window._vis_debug) || this.getOptOutStateConfig().shouldWeTrackVisitor;
    }
    isVisitorOptedOut() {
      return !Ns() && !window._vis_debug && this.getOptOutStateConfig().state !== tr.VISITOR_IS_NOT_OPTED_OUT;
    }
  }
  const sr = new nr();
  function rr(e) {
    const t = e.storages.storages.cookies.get("_vis_opt_out", !0);
    return !!(t || window.location.href.indexOf("vwo_opt_out=1") > -1) && "0" !== t && ("2" !== t && window.fetcher.getValue("window.VWO.optOut.process", [{
      accountId: e.accountId,
      domain: e.cookieDomain
    }]), !0);
  }
  var or, ar, lr, cr, dr, ur, gr;
  !function (e) {
    e.DOM = "vwo_dom";
  }(or || (or = {})), function (e) {
    e.WILD_CARD = "*", e.TRIGGER = "trigger", e.POST_INIT = "post-init", e.TIMER = "vwo_timer";
  }(ar || (ar = {})), function (e) {
    e.URL_CHANGE = "vwo_urlChange", e.LEAVE_INTENT = "vwo_leaveIntent", e.CLICK_EVENT = "vwo_dom_click", e.SUBMIT_EVENT = "vwo_dom_submit", e.PAGE_LOAD_EVENT = "vwo_page_load";
  }(lr || (lr = {})), function (e) {
    e.PAGE_VIEW = "vwo_pageView", e.PAGE_UNLOAD_EVENT = "vwo_pageUnload";
  }(cr || (cr = {})), function (e) {
    e.EXIT_CONDITIONS = "__exitConditions";
  }(dr || (dr = {})), function (e) {
    e.DOM_CONTENT_LOADED = "DOMContentLoaded", e.SCROLL = "scroll", e.CLICK = "click", e.SUBMIT = "submit";
  }(ur || (ur = {})), function (e) {
    e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR";
  }(gr || (gr = {}));
  class vr {
    constructor(e) {
      this.setLevel(e);
    }
    setLevel(e = "warn") {
      this.logLevel = gr[e.toUpperCase()];
    }
    info(e, t = {}) {
      this.customLog(gr.INFO, e, t);
    }
    debug(e, t = {}) {
      this.customLog(gr.DEBUG, e, t);
    }
    warn(e, t = {}) {
      var i, n;
      this.customLog(gr.WARN, e, t, null === (n = null === (i = window.VWO) || void 0 === i ? void 0 : i._) || void 0 === n ? void 0 : n.customError);
    }
    error(e, t = {}) {
      var i, n;
      this.customLog(gr.ERROR, e, t, null === (n = null === (i = window.VWO) || void 0 === i ? void 0 : i._) || void 0 === n ? void 0 : n.customError);
    }
    customLog(e, t, i, n = null) {
      var s, r, o;
      if (e >= this.logLevel) {
        const a = this.formatMessage(e, t, i);
        null === (o = null === (r = null === (s = window.VWOEvents) || void 0 === s ? void 0 : s.store) || void 0 === r ? void 0 : r.actions) || void 0 === o || o.addLogsForDebugging(a), n ? n(a) : this.consoleLog(e, [a]);
      }
    }
    consoleLog(e, t) {
      switch (e) {
        case gr.INFO:
          console.info(...t);
          break;
        case gr.WARN:
          console.warn(...t);
          break;
        case gr.ERROR:
          console.error(...t);
          break;
        default:
          console.log(...t);
      }
    }
    formatMessage(e, t, i) {
      var n, s;
      const r = Object.keys(i).reduce((e, t) => e.replace(new RegExp(`{{${t}}}`, "g"), i[t]), t),
        o = `${or.DOM}_`;
      let a = i;
      const l = (null === (n = i.data) || void 0 === n ? void 0 : n.vwoEventName) || i.vwoEventName;
      return l !== o + ur.CLICK && l !== o + ur.SUBMIT || (a = i.data ? null === (s = i.data) || void 0 === s ? void 0 : s.props : a.props, a = a || {
        name: l
      }), `VWO: [${gr[e].toUpperCase()}] [${new Date().toUTCString()}] ${r} ${JSON.stringify(a)}`;
    }
  }
  var hr = new vr("warn");
  class pr {
    toAbsURL(e) {
      return new URL(e, document.baseURI).href;
    }
    isHashPresent(e) {
      return -1 !== e.indexOf("#");
    }
    isQueryParamPresent(e, t) {
      var i = e.indexOf("#"),
        n = e.indexOf("?"),
        s = t ? -1 : e.indexOf("=");
      return -1 === i ? -1 !== n || -1 !== s : -1 !== n && i > n || -1 !== s && i > s;
    }
    otherSide(...e) {
      return e[0] = "VWO.modules.vwoUtils.urlUtils." + e[0], window.fetcher.getValue(...e);
    }
  }
  var wr = function (e) {
      return e.replace(/^(https?:\/\/)(?:w{3}\.)?(.*?)(?:\/(?:home|default|index)\..{3,4}|\/$)?(?:\/)?([\?#].*)?$/i, "$1$2$3");
    },
    fr = function (e) {
      return e.replace(/^(https?:\/\/)(?:w{3}\.)?(.*?)(?:(?:home|default|index)\..{3,4})?([\?#].*)?$/i, "$1$2$3");
    },
    Er = function (e) {
      return fr(e).replace(/\/\?/gi, "?");
    },
    mr = window._vis_opt_url,
    _r;
  class Or {
    constructor() {
      _r = this;
    }
    regexEscape(e) {
      return e.replace(/[\-\[\]{}()*+?.,\/\\^$|#\s]/g, "\\$&");
    }
    cleanURL(e, t) {
      return mr && !t ? mr : e.replace(/^(.*[^\*])(\/(home|default|index)\..{3,4})((\?|#).*)*$/i, "$1$4");
    }
    removeWWW(e, t) {
      return e = e.replace(/^(https?:\/\/)(www\.)?(.*)$/i, "$1$3"), t && (e = e.replace(/(^\*?|\/\/)www\./i, "$1")), e;
    }
    stripSlashes(e, t, i) {
      if (e = e.replace(/\/$/, ""), t) {
        var n = e.indexOf("/?");
        e.indexOf("?") - 1 === n && (e = e.replace(/\/\?([^\?]*)(.*)/, "?$1$2"));
      }
      if (i) {
        var s = e.indexOf("/#");
        e.indexOf("#") - 1 === s && (e = e.replace(/\/#([^#]*)(.*)/, "#$1$2"));
      }
      return e;
    }
    cleanPattern(e) {
      let t = "";
      return {
        regex: e.replace(/\(\?([a-zA-Z])\)/g, (...e) => (e[1] && (t += e[1]), "")),
        flags: t
      };
    }
    matchRegex(e, t, i, n) {
      if ("string" != typeof e || "string" != typeof t) return !1;
      let s = "ig";
      if (n) {
        const {
          regex: i,
          flags: n
        } = _r.cleanPattern(t);
        s = n || "g";
        try {
          return new RegExp(i, s).exec(e) || _r.matchRelativeUrl(e, i, s);
        } catch (e) {
          const n = "Failed to create regex for the pattern: " + t + ", the cleaned regex derived from the pattern is: " + i + " and regexFlag is: " + s;
          return hr.error(n), !1;
        }
      }
      var r = function (i) {
        return new RegExp(t, s).exec(e) || new RegExp(t, s).exec(i(e)) || _r.matchRelativeUrl(e, t, s, i);
      };
      let o = wr,
        a = !1;
      390187 == window._vwo_acc_id && (a = !0), a && (o = Er);
      var l = r(o);
      return l && !a ? (o = fr, i && r(o) || l) : l;
    }
    matchRelativeUrl(e, t, i, n) {
      if (0 === e.indexOf("http")) return !1;
      const s = new pr().toAbsURL(e);
      var r = new RegExp(t, i).exec(s);
      return n && !r && (r = new RegExp(t, i).exec(n(s))), !!r;
    }
    matchWildcard(e, t, i) {
      if ("string" != typeof e || "string" != typeof t) return !1;
      const n = new pr();
      var s = n.isQueryParamPresent(t),
        r = n.isHashPresent(t),
        o = n.isQueryParamPresent(e),
        a = n.isHashPresent(e);
      s || (o && a ? e = e.replace(/^(.*?)(\?[^#]*)(#?.*)$/, "$1$3") : o && !a && (e = e.replace(/^(.*)(\?.*)$/, "$1"))), r || a && (e = e.replace(/^(.*?)(#.*)$/, "$1")), "/" !== e && (e = _r.stripSlashes(e, o, a)), "/" !== t && (t = _r.stripSlashes(t, s, r));
      var l,
        c,
        d = new RegExp("^" + _r.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi");
      return d.test(e) ? (d = new RegExp("^" + _r.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi"), !i || d.exec(e)) : (e = _r.removeWWW(e), t = _r.removeWWW(t, !0), (d = new RegExp("^" + _r.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi")).test(e) ? (d = new RegExp("^" + _r.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi"), !i || d.exec(e)) : (l = _r.cleanURL(t, !0), -1 === t.indexOf("*") && ((c = _r.removeWWW(n.toAbsURL(e)).replace(/\/$/, "").replace(/\/\?/, "?")) === t || c === l) || (e = _r.cleanURL(e), t = l, !!(d = new RegExp("^" + _r.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi")).test(e) && (d = new RegExp("^" + _r.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi"), !i || d.exec(e)))));
    }
  }
  const Sr = new Or();
  window.VWO.modules.vwoUtils.url = Sr, window.VWO._.matchRegex = Sr.matchRegex;
  class yr {
    verifyUrl(e, t, i, n) {
      let s = !1;
      const r = n ? e : this.getCleanedUrl(e);
      if (t) {
        if (n) s = !!Sr.matchRegex(r, t, null, n);else {
          const i = this.getCleanedUrl(e, !0);
          s = !(!Sr.matchRegex(r, t, null, n) && !Sr.matchRegex(i, t, !0, n));
        }
      } else s = Sr.matchWildcard(r, i) || Sr.matchWildcard(e, i);
      return s;
    }
    getCleanedUrl(e, t) {
      if (!e) return;
      let i;
      return -1 !== e.search(/_vis_(test_id|hash|opt_(preview_combination|random))=[a-z\.\d,]+&?/) ? (i = e.replace(/_vis_(test_id|hash|opt_(preview_combination|random))=[a-z\.\d,]+&?/g, ""), i = t ? i.replace(/(\??&?)$/, "") : i.replace(/(\/?\??&?)$/, "")) : i = t ? e : e.replace(/\/$/, ""), i;
    }
    compareUrlWithIncludeExcludeRegex(e, t, i, n) {
      const s = {};
      return i && Sr.matchRegex(e, i) ? (s.didMatch = !1, s.reason = 1, s) : (s.didMatch = this.verifyUrl(e, t, n), s.reason = s.didMatch ? 2 : 3, s);
    }
  }
  const Tr = new yr();
  class Ir extends yr {
    compareUrlWithIncludeExcludeRegex(e, t, n, s) {
      return i(this, void 0, void 0, function* () {
        return window.fetcher.getValue('VWO.modules.utils.urlUtils.compareUrlWithIncludeExcludeRegex("${{1}}", "${{2}}", "${{3}}", "${{4}}")', null, {
          captureGroups: [e, t, n, s]
        });
      });
    }
  }
  const Cr = new Ir();
  window.VWO.modules.utils.urlUtils = Cr;
  class br extends xs {
    constructor() {
      super(...arguments), this.loadScriptLoadedScripts = {}, this.thirdPartyCookiesSuccess = {}, this.TPJarExpiry = 730, this.urlCache = {}, this.additionalStyle = window._vwo_acc_id > 742099 || 718480 === window._vwo_acc_id ? "-webkit-transform:none;-ms-transform:none;transform:none;" : "", this.hideElExpression = `{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;${this.additionalStyle}}`, this.validateWithSkipEventPropAndSkipValidationIfTimer = function (e) {
        return window.VWO.phoenix.validateTrigger(e, null, {
          skipEventProps: !0,
          skipValidationIfTimer: !0
        });
      };
    }
    isGloballyOptedOut(e) {
      return !!parseInt(e.storages.storages.cookies.get(Os.GLOBAL_OPT_OUT, !0), 10);
    }
    getSettings(e, t) {
      return i(this, void 0, void 0, function* () {
        if (window._vis_debug || Ns()) return;
        const i = [],
          n = t.vwoInternalProperties.experimentIds,
          s = t.settings.campaigns,
          r = t.serverUrl;
        let o = !1;
        const a = t.pageGroupPageConfig,
          l = t.pageGroupExperimentConfig,
          c = [],
          d = [];
        for (const e in a) Object.hasOwnProperty.call(a, e) && c.push(e);
        for (const e in l) Object.hasOwnProperty.call(l, e) && d.push(e);
        const u = [];
        for (let e = 0; e < n.length; e++) s[n[e]] ? ("ANALYZE_RECORDING" === s[n[e]].type && (o = !0), i.push(n[e])) : u.push(n[e]);
        let g = yield t.storages.storages.cookies.get("wgs_uuid");
        g = g || "";
        let v = r + "settings.js?a=" + t.accountId + "&settings_type=" + e + "&vn=&eventArch=1&uuid=" + g;
        if (2 !== e && 3 !== e || (v = v + "&u=" + encodeURIComponent(t.currentUrl)), d.length) {
          v += "&ec=" + d.join("|");
        }
        if (c.length) {
          v += "&pc=" + c.join("|");
        }
        if (o && (v += "&rc=1"), t.smartCodeVersion >= 1.4 && t.smartCodeVersion < 2) {
          let e;
          if (un._.jar) {
            const t = un._.jar.getAll();
            e = t && Object.keys(t).filter(function (e) {
              return e.match(/(vis_opt_exp_\d*._combi+)/g);
            }).map(function (e) {
              return (e + "=" + t[e]).match(/([\d,]+)/g).join("-");
            }).join("|");
          } else e = window._vwo_code.getCombinationCookie && this.getCombinationCookie();
          e && (v += "&c=" + e);
        }
        if (4 !== e && i.length) {
          const e = "&exc=" + i.join("|");
          v.length + e.length < 2e3 && (v += e);
        }
        this.loadScript(v, this.firePageViewEvent);
      });
    }
    firePageViewEvent(e = {}) {
      return i(this, void 0, void 0, function* () {
        const t = window.VWO.phoenix,
          i = window.VWO.phoenix.store.getters;
        yield window.VWO._.session_init_complete, t.trigger(Ts.START_APPLY_CHANGES), Qs(t, Ts.PAGE_VIEW, {
          name: Ts.PAGE_VIEW,
          time: +new Date(),
          props: {
            url: i.currentUrl
          }
        }, () => {
          t.trigger(Ts.END_APPLY_CHANGES), window.fetcher.getValue("VWO._.phoenixMT.trigger", [Ts.END_APPLY_CHANGES]), e.shouldFireDomLoad && t.trigger(Ts.DOM_CONTENTLOADED);
        });
      });
    }
    doNotTrack(e) {
      if (e.settings.vwoData.dntEnabled) return "yes" === e.navigator.doNotTrack || "1" == e.navigator.doNotTrack || "1" == e.navigator.msDoNotTrack || "1" == e.doNotTrack;
    }
    _optOut(e, t) {
      return rr(e) ? (t.trigger(Ts.OPT_OUT, {
        oldArgs: [!0]
      }), !0) : (t.trigger(Ts.OPT_OUT, {
        oldArgs: [!1]
      }), !1);
    }
    isSSApp({
      getters: e,
      vwoEvents: t
    }) {
      var i;
      const n = un._.sstd;
      if (!n) return !1;
      if (e.vwoInternalProperties.ssdm) return un.data.sst && e.vwoInternalProperties.ssdm;
      try {
        let t = null === (i = e.document.domain) || void 0 === i ? void 0 : i.match(n);
        if (t = window.document.domain.match(n), t && t.length > 0) return un.data.sst;
      } catch (e) {
        return t.trigger(Ts.ERROR, {
          msg: `Invalid regex for domain. sstd = ${un._.sstd}`,
          source: encodeURIComponent(`Invalid regex for domain. VWO._.sstd = ${un._.sstd}`)
        }), !1;
      }
    }
    setTPCJarValue(e, t, n, s, r, o, a) {
      return i(this, void 0, void 0, function* () {
        const i = e.storages.storages.cookies;
        yield i.setThirdPartyCookiesInJar(t, n, s, o), this.__vwoCookie = yield i.getThirdPartyJarValue(), this.dTP = this.dTP || Ls(() => window.VWO.phoenix.storages.get("cookies").createThirdParty.call(window.VWO.phoenix.storages.get("cookies"), "_vwo", this.__vwoCookie, this.TPJarExpiry, void 0, void 0, void 0, a), 50), this.__vwoCookie && this.dTP();
      });
    }
    setCampaignIds(e) {
      return i(this, void 0, void 0, function* () {
        this.otherSide('setCampaignIds("${{1}}", "${{2}}")', null, [e]);
        const {
            actions: t,
            getters: i
          } = un.phoenix.store,
          n = i.vwoInternalProperties.experimentIds || [];
        e.forEach(e => n.push(+e)), t.addValues({
          experimentIds: n
        }, "vwoInternalProperties");
      });
    }
    isCustomTrigger(e) {
      var t;
      return null === (t = e.cnds) || void 0 === t ? void 0 : t.some(function (e) {
        var t;
        return "object" == typeof e && null !== e && (null === (t = e.filters) || void 0 === t ? void 0 : t.some(function (e) {
          return e instanceof Array && e.indexOf("exec") >= 0;
        }));
      });
    }
    addListener(e, t, i, n) {
      if (!i || !Object.keys(i).length) return;
      let s;
      const r = i.eventName,
        o = i.triggerID,
        a = i.trigger;
      if (o) {
        const t = e.currentSettings.triggers[o];
        s = t && this.isCustomTrigger(t) ? `trigger.${o}` : t;
      }
      if (s = s || r || a, s) {
        return [s, t.on(s, n)];
      }
    }
    extraData2(e) {
      return i(this, void 0, void 0, function* () {
        return this.otherSide('extraData2("${{1}}")', null, [e]);
      });
    }
    isBotScreen() {
      return i(this, void 0, void 0, function* () {
        return this.otherSide("isBotScreen");
      });
    }
    shouldTrackUserForCampaign(e) {
      return !e || !window._vwo_code || !window._vwo_code[ls] && !window._vwo_code[cs] || this.isDomIndependentCampaign(e.type) || this.isSplitVariation(e);
    }
    createCookie(e, t, n, s, r) {
      return i(this, void 0, void 0, function* () {
        const i = (e = e || un.phoenix.store.getters).storages.storages.cookies;
        this.shouldTrackUserForCampaign(r) && (r && r.multiple_domains ? yield i.createThirdParty(t, n, s, void 0, r.id, void 0, r) : i.create(t, n, s));
      });
    }
    createUUIDCookie2(e, t) {
      return i(this, void 0, void 0, function* () {
        if (sr.isVisitorOptedOut()) return;
        e = e || window.VWO.phoenix.store.getters;
        const i = yield this.getUUID(e, t),
          n = t && t.id && t.multiple_domains ? "_" + t.id : "";
        return (yield e.storages.storages.cookies.get("_vwo_uuid" + n)) || (yield this.createCookie(e, "_vwo_uuid" + n, i, Os.UUID_COOKIE_EXPIRY, t)), un.data = un.data || {}, un.data.vin = un.data.vin || {}, un.data.vin.uuid = i, yield window.fetcher.setValue("VWO.data.vin", un.data.vin), i;
      });
    }
    getUUID(e, t) {
      return i(this, void 0, void 0, function* () {
        e = e || un.phoenix.store.getters, t = t || {}, this.uuid = e.vwoUUID;
        const i = t && t.id && t.multiple_domains && (yield e.storages.storages.cookies.get("_vwo_uuid_" + t.id)) || (yield e.storages.storages.cookies.get("_vwo_uuid"));
        return this.uuid = i || this.uuid || this.generateUUID();
      });
    }
    getSplitDecision(e, t) {
      return window._vis_debug || Ns() ? this.otherSide("getSplitDecision", [t]) : e.storages.storages.cookies.get("_vis_opt_exp_" + t + "_split");
    }
    loadWithDelay(e, t) {
      t ? setTimeout(e, t) : e();
    }
    loadScript(e, t, i) {
      this.loadScriptLoadedScripts[e] ? null == t || t() : (this.loadScriptLoadedScripts[e] = 1, window.fetcher.getValue('VWO.modules.utils.loadScript("${{1}}", "${{2}}", "${{3}}")', null, {
        captureGroups: [e, t, i]
      }));
    }
    loadNonTestingLibraries(e, t, i) {
      var n, s, r, o, a, l, c;
      const d = e.serverUrl,
        u = null === (s = null === (n = e.settings) || void 0 === n ? void 0 : n.plugins) || void 0 === s ? void 0 : s.LIBINFO,
        g = e.vwoInternalProperties.dtcTimer,
        v = null === (r = null == u ? void 0 : u.TRACK) || void 0 === r ? void 0 : r.HASH,
        h = null === (o = null == u ? void 0 : u.OPA) || void 0 === o ? void 0 : o.HASH,
        p = null === (a = null == u ? void 0 : u.OPA) || void 0 === a ? void 0 : a.PATH,
        w = null === (l = null == u ? void 0 : u.SURVEY) || void 0 === l ? void 0 : l.HASH;
      let f = !1,
        E = !1;
      const m = null === (c = e.vwoInternalProperties) || void 0 === c ? void 0 : c.loadPC;
      let _ = !1,
        O = window._vis_apm_lib;
      const S = [];
      for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
        const i = t[e];
        if ("ANALYSIS" !== i.type && "ANALYZE_FORM" !== i.type && "ANALYZE_HEATMAP" !== i.type && "ANALYZE_RECORDING" !== i.type || (f = !0, E = !0), "FUNNEL" !== i.type && "TRACK" !== i.type || (E = !0), "SURVEY" === i.type || i.survey && i.survey.id) for (var y in E = !0, _ = !0, i.survey) Object.prototype.hasOwnProperty.call(i.survey, y) && S.push(y);
      }
      m && this.loadWithDelay(() => {
        this.loadScript(`${d}web/djIkcGM6MS4w/tag-1a6cb79d9b921e9f733a3a9f91c43b90.js`, null, function () {});
      }, g), E && !un.v_t && this.loadWithDelay(() => {
        this.loadScript(`${d}7.0/track-${v}.js`);
      }, g), f && !un.nls && (un.v_t || this.loadWithDelay(() => {
        this.loadScript(`${d}7.0/track-${v}.js`);
      }, g), this.loadWithDelay(() => {
        this.loadScript(`${d}analysis${p}/opa-${h}.js`, null, function () {
          sr.callStopAnalyzeAndSurvey();
        });
      }, g)), _ && !un.survey && (un.v_t || this.loadWithDelay(() => {
        this.loadScript(`${d}7.0/track-${v}.js`);
      }, g), un._.allSettings.dataStore.previewExtraSettings || this.loadWithDelay(() => {
        this.loadScript(`${d}va_survey-${w}.js`, null, function () {
          sr.callStopAnalyzeAndSurvey();
        });
      }, g)), O && !un.apm && this.loadWithDelay(() => {
        this.loadScript(`${d}${window._vis_apm_lib}`);
      }, g), _ && i && un.phoenix.trigger(Ts.NEW_SURVEY_FOUND, {
        oldArgs: [S]
      });
    }
    checkForWrongConsent({
      getters: e,
      vwoEvents: t
    }) {
      return this.isSSApp({
        getters: e,
        vwoEvents: t
      }) && "http:" === e.location.protocol;
    }
    setThirdPartyCookiesForApplicableCamps(e) {
      if (p(e.settings.crossDomain) && !e.flags.cookieLessModeEnabled) {
        const t = Object.keys(e.settings.crossDomain);
        for (let i = 0; i < t.length; i++) {
          const n = t[i];
          if (this.thirdPartyCookiesSuccess[n]) continue;
          const s = e.settings.crossDomain[n];
          let r = Object.keys(s).length - 1;
          for (; r >= 0;) {
            const t = s[r];
            "_vwo_uuid_" === t.name.substring(0, 10) ? this.createCookie(e, t.name, t.value, Os.UUID_COOKIE_EXPIRY) : this.createCookie(e, t.name, t.value, 100), r--;
          }
          this.thirdPartyCookiesSuccess[n] = !0;
        }
      }
    }
    shouldExecuteLib({
      getters: e,
      actions: t,
      vwoEvents: n
    }) {
      return i(this, void 0, void 0, function* () {
        const {
          doCookiesMatter: i,
          areCookiesDisabled: s,
          shouldStopExecWhenSsmNotFound: r
        } = window.VWO._.envUtils;
        if (i) {
          const i = this.checkForWrongConsent({
            getters: e,
            vwoEvents: n
          });
          if (i || r) {
            e.vwoCode && e.vwoCode.finish(), Qs(n, Ts.SHOULD_EXECUTE_LIB_ERROR, i ? {
              message: "SameSite;Secure enabled but visitor landed on HTTP page and thus cookies can't be created",
              oldArgs: [void 0, void 0, void 0, void 0, void 0, void 0, 1]
            } : {
              message: "Visitor has been to HTTPS page when SameSite and Secure cookies were dropped",
              oldArgs: [void 0, !0, void 0, void 0, void 0, void 0, 2]
            });
            const s = [{
              shouldExecuteLib: !1,
              destinationMT: "VWO._.shouldExecuteLib"
            }];
            return this.setPropertiesToBothThreads(t, s, "vwoInternalProperties");
          }
        }
        if (this.isTrackingNotPossible) {
          const e = [{
            shouldExecuteLib: !this.isTrackingNotPossible,
            destinationMT: "VWO._.shouldExecuteLib"
          }];
          return this.setPropertiesToBothThreads(t, e, "vwoInternalProperties");
        }
        if (!s) {
          if (this.preview() || e.visDebug) {
            const e = [{
              shouldExecuteLib: !0,
              destinationMT: "VWO._.shouldExecuteLib"
            }];
            return this.setPropertiesToBothThreads(t, e, "vwoInternalProperties");
          }
          if (this.doNotTrack(e) || this.isGloballyOptedOut(e) || this._optOut(e, n)) {
            e.vwoCode && e.vwoCode.finish(), Qs(n, Ts.SHOULD_EXECUTE_LIB_ERROR, {
              message: "User has opted out"
            }), this.isTrackingNotPossible = !0, t.addValues({
              optOut: !0
            }, "vwoInternalProperties");
            const i = [{
              shouldExecuteLib: !1,
              destinationMT: "VWO._.shouldExecuteLib"
            }];
            return this.setPropertiesToBothThreads(t, i, "vwoInternalProperties");
          }
          const i = [{
            shouldExecuteLib: !0,
            destinationMT: "VWO._.shouldExecuteLib"
          }];
          return this.setPropertiesToBothThreads(t, i, "vwoInternalProperties");
        }
        t.addValues({
          cookiesDisabled: !0
        }, "vwoInternalProperties"), Qs(n, Ts.SHOULD_EXECUTE_LIB_ERROR, {
          message: "Cookies disabled",
          oldArgs: [void 0, s]
        }), this.isTrackingNotPossible = !0;
        return this.setPropertiesToBothThreads(t, [{
          shouldExecuteLib: !1,
          destinationMT: "VWO._.shouldExecuteLib"
        }], "vwoInternalProperties");
      });
    }
    insertCSS(e, t) {
      this.otherSide("insertCSS", [e, t]);
    }
    unhideCampaignLevelStyle(e) {
      window.fetcher.getValue("VWO.modules.utils.libUtils.removeCampaignLevelStyleTag", [e]);
    }
    setXpathAndHideEl(e, t, n, s = !0) {
      var r;
      const o = this;
      let a, l, c;
      const d = [e.id],
        u = this.isPersonalizeCampaign(e),
        g = e.sen,
        {
          visibilityServiceCache: v
        } = window.VWO._;
      if (e.id) for (l = d.length; l--;) {
        c = d[l];
        let {
          selector: h,
          selectorPerVariation: p
        } = v && (null === (r = v[c]) || void 0 === r ? void 0 : r.xpath) || this.getCampaignXPath(e);
        if (h = h || n || "", h.split(",").forEach(function (e) {
          performance.mark(`el-${e}-hidden`);
        }), e.xPath = h, window.VWO._.ac && window.VWO._.ac.PRTHD || window.VWO._.preventHidingInSPA || !s) return;
        if (u && Object.keys(p).forEach(function (n) {
          return i(this, void 0, void 0, function* () {
            const i = e.sections[1].triggers[n],
              s = t.currentSettings.triggers[i],
              r = e.sections[1].sen;
            if ((!r || !o.doNotHideElements(r[n])) && p[n] && (yield o.validateWithSkipEventPropAndSkipValidationIfTimer(s))) {
              const e = p[n] + o.hideElExpression;
              o.insertCSS("_vis_opt_path_hides_" + c + "_" + n, e);
            }
          });
        }), this.doNotHideElements(g)) return;
        a = h ? h + this.hideElExpression : "", a && this.insertCSS("_vis_opt_path_hides_" + c, a);
      } else a = t.vwoText || "", this.insertCSS("_vis_opt_path_hides", a);
    }
    setPropertiesToBothThreads(e, t, i) {
      let n = {};
      t.forEach(e => {
        const t = Object.keys(e)[0],
          i = e[t];
        n = Object.assign(Object.assign({}, n), {
          [t]: i
        }), window.fetcher.setValue(e.destinationMT, i);
      }), e.addValues(n, i);
    }
    checkAndInitializeClickClass() {
      if (!window.VWO.isVwoClickClassInitialized) {
        const e = window.VWO._.allSettings.dataStore.campaigns;
        let t = !1;
        for (const i in e) if (e[i].clickmap) {
          t = !0;
          break;
        }
        if (t) {
          const e = window.VWO.modules.phoenixPlugins.events.predefinedEvents;
          window.VWO.phoenix.events.add(new e.ClickDomEvent());
        }
      }
    }
    areSettingsCached() {
      return !1;
    }
    setFlagForCachingIfEnabled(e, t) {
      try {
        const e = window.VWO._.allSettings.dataStore.plugins.DACDNCONFIG,
          i = ((null == e ? void 0 : e.SCC) && JSON.parse(e.SCC), [{
            isSettingsCachingEnabled: !1,
            destinationMT: "VWO._.isSettingsCachingEnabled"
          }]);
        this.setPropertiesToBothThreads(t, i, "vwoInternalProperties");
      } catch (e) {}
    }
    addListenerForSessionInitComplete() {
      un._.session_init_complete = new Promise(e => {
        const t = window.VWO.phoenix.on(Ts.SESSION_INIT_COMPLETE, () => {
          window.VWO.phoenix.off(Ts.SESSION_INIT_COMPLETE, t), e();
        });
      });
    }
    isCurrentURLSplitVariation({
      chosenVariation: e,
      getters: t,
      campaignData: i
    }) {
      if ("SPLIT_URL" !== i.type) return !1;
      let n = "";
      const s = Cr.getCleanedUrl(t.currentUrl),
        r = this.urlCache[s] || this.urlCache[t.currentUrl];
      if (void 0 !== r) return r;
      let o = !1,
        a = t.currentUrl;
      const l = i.sections;
      return l[1].variationsRegex ? (n = l[1].variationsRegex[e], o = Cr.verifyUrl(t.currentUrl, n, null)) : (n = l[1].variations[e], o = Sr.matchWildcard(s, n), a = s), this.urlCache[a] = !!o;
    }
  }
  const Nr = new br();
  var Ar;
  window.VWO.modules.utils.libUtils = Nr, function (e) {
    e.ANALYSIS = "r", e.ANALYZE_FORM = "a", e.ANALYZE_HEATMAP = "a", e.ANALYZE_RECORDING = "a", e.FUNNEL = "t", e.SURVEY = "s", e.TRACK = "t";
  }(Ar || (Ar = {}));
  const Vr = function (e, t) {
      let i = 0;
      for (let t = e.length - 1; t >= 0; t--) i += e.charCodeAt(t);
      let n = i + t;
      for (let e = 0; e < 19; e++) n = (9301 * n + 49297) % 233280;
      return n / 233280;
    },
    Rr = function (e, t) {
      return e / (t / 100);
    },
    Pr = {
      getRandom: function (e, t) {
        return window.VWO._.allSettings.dataStore.CIF ? Vr(e, t) : Math.random();
      },
      getRandomForVariation: function (e, t) {
        return e && t && window.VWO._.allSettings.dataStore.CIF ? Rr(e, t) : Math.random();
      }
    };
  class xr extends Is {
    constructor() {
      super(...arguments), this.campaignsInternalMap = window.VWO._.campaignsInternalMap = {};
    }
    markGoalTriggered(e, t, n) {
      var s, r;
      return i(this, void 0, void 0, function* () {
        if ("TRACK" === e.type) yield null === (r = (s = window.tracklib).markGoalTriggered) || void 0 === r ? void 0 : r.call(s, e.id, t);else {
          let i = n.storages.storages.cookies.get("_vis_opt_exp_" + e.id + "_goal_" + t);
          e.goals[t].mca && i && (i = +i + 1), yield Nr.createCookie(n, "_vis_opt_exp_" + e.id + "_goal_" + t, String(null != i ? i : 1), 100, e);
        }
      });
    }
    isGoalTriggered(e, t, n) {
      var s, r;
      return i(this, void 0, void 0, function* () {
        if ("TRACK" === e.type) {
          return !(yield null === (r = (s = window.tracklib).shouldTriggerGoal) || void 0 === r ? void 0 : r.call(s, e.id, t));
        }
        return e.goals[t].mca ? null : n.storages.storages.cookies.get("_vis_opt_exp_" + e.id + "_goal_" + t);
      });
    }
    clearTimeouts(e) {
      return i(this, void 0, void 0, function* () {
        yield this.otherSide("clearTimeoutsHandler", [e]), delete e.timeout;
      });
    }
    clearTimerAfterTimeout(e, t) {
      return i(this, void 0, void 0, function* () {
        clearTimeout(e[ws]), e[ws] = setTimeout(() => {
          this.clearTimeouts(e);
        }, (yield t.vwoInternalProperties.SPA_ELEMENT_WAIT_TIMEOUT) || 2e3);
      });
    }
    getTrackGoalIdFromExp(e, t) {
      return Jn(t.settings.campaigns[e].goals)[0];
    }
    isExcluded(e, t) {
      const i = window.tracklib;
      return "TRACK" === t.type ? i.isGoalExcluded(this.getTrackGoalIdFromExp(t.id, e)) : "FUNNEL" === t.type ? i.isFunnelExcluded(t.id) : Nr.isAnalyzeCampaign(t.type) ? i.isAnalyzeCampaignExcluded(t.id) : !!e.storages.storages.cookies.get("_vis_opt_exp_" + t.id + "_exclude");
    }
    getCombi(e, t, n) {
      return i(this, void 0, void 0, function* () {
        e = e || un.phoenix.store.getters;
        const i = window.tracklib;
        return "TRACK" === t.type ? (null == i ? void 0 : i.isGoalIncluded) ? yield i.isGoalIncluded(this.getTrackGoalIdFromExp(t.id, e)) : void (n || (yield window.fetcher.getValue('VWO.push("${{1}}")', null, {
          captureGroups: [["track.delayedGoalConversion", {
            campaignId: t.id,
            type: "TRACK",
            goalId: this.getTrackGoalIdFromExp(t.id, e)
          }]]
        }))) : "FUNNEL" === t.type ? (null == i ? void 0 : i.isFunnelIncluded) ? yield i.isFunnelIncluded(t.id) : void (n || (yield window.fetcher.getValue('VWO.push("${{1}}")', null, {
          captureGroups: [["track.delayedGoalConversion", {
            campaignId: t.id,
            type: "FUNNEL"
          }]]
        }))) : (null == Nr ? void 0 : Nr.isAnalyzeCampaign(t.type)) ? i.isAnalyzeCampaignIncluded ? yield i.isAnalyzeCampaignIncluded(t.id) : void (n || (yield window.fetcher.getValue('VWO.push("${{1}}")', null, {
          captureGroups: [["track.delayedGoalConversion", {
            campaignId: t.id,
            type: t.type
          }]]
        }))) : this.getCombiCookie(e, t.id);
      });
    }
    getCombiCookie(e, t) {
      return i(this, void 0, void 0, function* () {
        return (e.visDebug || Ns()) && (yield window.VWO._.previewDebuggerBooted), e.storages.storages.cookies.get("_vis_opt_exp_" + t + "_combi");
      });
    }
    getCombiCookieFromMT(e) {
      return this.otherSide("getCombiCookie", [e]);
    }
    exclude(e, t) {
      return i(this, void 0, void 0, function* () {
        const i = window.tracklib;
        "TRACK" === t.type ? yield i.excludeGoal(this.getTrackGoalIdFromExp(t.id, e)) : "FUNNEL" === t.type ? yield i.excludeFunnel(t.id) : Nr.isAnalyzeCampaign(t.type) ? yield i.excludeAnalyzeCampaign(t.id) : yield Nr.createCookie(e, "_vis_opt_exp_" + t.id + "_exclude", "1", 100, t);
      });
    }
    include(e, t, n, s) {
      return i(this, void 0, void 0, function* () {
        let i = !1;
        const r = window.tracklib;
        return "TRACK" === s.type ? yield r.includeGoal(this.getTrackGoalIdFromExp(s.id, e)) : "FUNNEL" === s.type ? yield r.includeFunnel(t) : Nr.isAnalyzeCampaign(s.type) ? yield r.includeAnalyzeCampaign(t) : (yield Nr.createCookie(e, "_vis_opt_exp_" + t + "_combi", n, 100, s), i = !0), {
          isCookieCreated: i
        };
      });
    }
    isLogged(e, t) {
      return e.storages.storages.cookies.get("_vis_opt_exp_" + t + "_combi_choose");
    }
    isBucketed(e, t, n) {
      return i(this, void 0, void 0, function* () {
        return !!(yield this.getCombi(e, t, n));
      });
    }
    shouldBucket(e, t) {
      return i(this, void 0, void 0, function* () {
        const i = t.type,
          n = window.tracklib,
          s = void 0 !== un.data.pc[Ar[i]];
        let r,
          o = t.pc_traffic;
        if (o = void 0 === o ? 100 : o, !o) return !1;
        this.campaignsInternalMap[t.id] && this.campaignsInternalMap[t.id].r ? r = this.campaignsInternalMap[t.id].r : (this.campaignsInternalMap[t.id] = {}, r = this.campaignsInternalMap[t.id].r = Pr.getRandom(e.vwoUUID, t.id));
        const a = Nr.isSessionBasedCampaign2(t) ? yield un._.sessionInfoService.getPcTraffic() : 100 * r,
          l = n.isFeatureBucketed && Number(yield n.isFeatureBucketed(Ar[i]));
        return (!s || l) && a <= o;
      });
    }
    chooseCombination(e, t, n) {
      var s, r, o;
      return i(this, void 0, void 0, function* () {
        let i;
        if (sr.isVisitorOptedOut()) return;
        const a = t && t.id && (t.combination_chosen || t.cc);
        if (t && Nr.isPersonalizeCampaign(t)) {
          if (a && "0" !== a && !t.debug) return a;
        } else if (a && "0" !== a) return a;
        if (window.chooseCombinationPersonalisation && window.vwoPersonalisationCampaigns && window.vwoPersonalisationCampaigns.indexOf && -1 !== window.vwoPersonalisationCampaigns.indexOf(+t.id) && (i = window.chooseCombinationPersonalisation(t.id), 0 != i)) {
          return "" + (parseInt(i.split(":")[1], 10) + 1);
        }
        const l = !!window.VWO._.allSettings.dataStore.CIF,
          c = n && n.scaleInfo || t.combs,
          d = {},
          u = {};
        let g,
          v,
          h,
          p = Pr.getRandomForVariation(null === (s = this.campaignsInternalMap[null == t ? void 0 : t.id]) || void 0 === s ? void 0 : s.r, null == t ? void 0 : t.pc_traffic),
          w = l ? Jn(c).sort() : Jn(c),
          f = w.length,
          E = 0,
          m = !1,
          _ = !1;
        for (h = 0; h < f; h++) {
          i = w[h];
          const s = n ? i : t.id;
          if (v = e.settings.campaigns[s].type, !isNaN(parseFloat(c[i])) && 0 != c[i]) if ("VISUAL_AB" === v || "SPLIT_URL" === v) {
            g = n ? n.segmentInfo : t.sections[1].triggers;
            const s = g[i];
            0 === g.length || !1 === (null === (r = e.currentSettings.triggers[s]) || void 0 === r ? void 0 : r.cnds[0]) ? (_ = !0, u[i] = c[i]) : (n ? yield window.VWO.phoenix.validateTrigger(e.currentSettings.triggers[g[i]], null, {
              skipEventProps: !0,
              skipValidationIfTimer: !0
            }) : e.triggers[s] ? e.triggers[s].state : yield window.VWO.phoenix.validateTrigger(e.currentSettings.triggers[s], null)) && (1 != g[i] && (m = !0), d[i] = E + c[i], E += c[i]);
          } else d[i] = E + c[i], E += c[i];
        }
        if (!m && _) for (w = Jn(u), f = w.length, h = 0; h < f; h++) i = w[h], d[i] = E + u[i], E += u[i];
        let O = -1,
          S = null === (o = null == t ? void 0 : t.sections[1]) || void 0 === o ? void 0 : o.priority;
        if (S) for (f = S.length, h = 0; h < f; h++) if (d[S[h]]) {
          O = h;
          break;
        }
        if (O >= 0) return S[O] + "";
        for (0 < E && 1 !== E && (p *= E), w = l ? Jn(d).sort() : Jn(d), f = w.length, h = 0; h < f; h++) if (i = w[h], !isNaN(parseFloat(c[i])) && p <= d[i]) return i;
      });
    }
    getGroupBasedCampaigns({
      getters: e
    }) {
      var t, i;
      let n = [],
        s = null === (i = null === (t = e.settings.vwoData) || void 0 === t ? void 0 : t.gC) || void 0 === i ? void 0 : i.map(e => e.c);
      s = s || [];
      for (const e of s) n = n.concat(e);
      return n.map(e => "" + e);
    }
    firePatternMatchingEvent(e, t, i, n, s, r) {
      1 === i ? e.trigger(Ts.EXCLUDE_URL, {
        oldArgs: [t]
      }) : e.trigger(Ts.MATCH_WILDCARD, {
        oldArgs: [t, n, s, r]
      });
    }
    doExperimentHere(e, t, i, n = {}) {
      let s;
      if (t.pg_config) {
        const n = t.pg_config[0];
        s = i.pageGroup.validatePage(n, null, e.currentUrl);
      } else s = Tr.compareUrlWithIncludeExcludeRegex(e.currentUrl, n.urlRegex || t.urlRegex, n.excludeUrl || t.exclude_url, n.urlPattern || t.url_pattern);
      return [s.didMatch, s.reason];
    }
    checkForVariationTargeting(e) {
      const t = e.sections[1].triggers;
      return !(!t || 0 === t.length);
    }
    executeCampaignJS(e, t) {
      const i = e.id,
        n = e.combination_chosen || e.cc,
        s = `${t}Executed`;
      if (e.globalCode[t] && !e.globalCode[s]) try {
        window.VWO.phoenix.settings.currentSettings.tags[e.globalCode[t]].fn(i, n), e.globalCode[s] = !0;
      } catch (e) {}
    }
  }
  const Dr = new xr();
  window.VWO.modules.utils.campaignUtils = Dr;
  class Lr {
    otherSide(...e) {
      e[0] = "VWO.modules.tags.checkEnvironment.utils." + e[0], window.fetcher.getValue(...e);
    }
  }
  class kr extends Lr {
    checkCookieJarMismatch({
      getters: e,
      vwoEvents: t
    }) {
      const i = e.storages.storages,
        n = i.localStorageService,
        s = i.cookies;
      let r;
      !(r = s.get(Os.COOKIE_JAR, !0)) && !(r = n.get(Os.COOKIE_JAR)) || e.vwoInternalProperties.jar || (s.create(Os.COOKIE_JAR, r, !1), n.remove(Os.COOKIE_JAR), t.trigger(Ts.ERROR, {
        error: `_vwo(value = ${r}) cookie found but Cookie jar is not created. Deleting it.`
      }));
    }
    checkForTimeout({
      getters: e,
      actions: t,
      vwoEvents: i
    }) {
      if (e.vwoCode && window.vwoCodeEndBeforeVA && !e.vwoCode[cs]) {
        i.trigger(Ts.SHOULD_EXECUTE_LIB_ERROR, {
          message: "SSM cookie found",
          oldArgs: [null, void 0, void 0, void 0, !0]
        });
        const e = [{
          [ls]: 1,
          destinationMT: "window._vwo_code.lT"
        }];
        Nr.setPropertiesToBothThreads(t, e, "vwoCode");
      }
    }
    addDomListenerForTimeout(e) {
      this.otherSide('addDomListenerForTimeout("${{1}}")', null, {
        captureGroups: [function () {
          window.VWO.phoenix.store.getters.vwoInternalProperties.willRedirectionOccur || window._vwo_code && window._vwo_code.finish();
          for (const t in window.VWO.phoenix.store.getters.settings.campaigns) {
            const i = window.VWO.phoenix.store.getters.settings.campaigns[t];
            i.dontKillTimer ? Dr.clearTimerAfterTimeout(i, e) : setTimeout(() => {
              Dr.clearTimeouts(i);
            }, 500);
          }
          window.VWO._.coreLib.finished = 1, window.vwo_libExecuted = !0, window.fetcher.setValue("vwo_libExecuted", !0);
        }]
      });
    }
  }
  var Ur = new kr();
  class Wr {
    migrateCookiesToSSM({
      getters: e
    }) {
      const t = ys(),
        i = e.storages.storages.cookies,
        n = i.getAll();
      if (e.vwoInternalProperties.ss && !n[Os.SAME_SITE]) {
        for (const e in n) e !== _s + Os.UUID_V2 && (e.indexOf(ms) >= 0 || e.indexOf(_s) >= 0) && (Object.prototype.hasOwnProperty.call(t, e) ? i.create(e, decodeURIComponent(n[e]), t[e], void 0, void 0, !0) : i.create(e, decodeURIComponent(n[e]), Os.DEFAULT_EXPIRY, void 0, void 0, !0));
        i.create(Os.SAME_SITE, 1, t[Os.SAME_SITE], void 0, void 0, !0);
      }
    }
    unhideIfNoCampaignsRunning({
      getters: e
    }) {
      const t = e.settings.campaigns;
      0 !== Object.keys(t).length || t.constructor;
    }
    mergeThirdPartyCookiesInFirstPartyJar({
      getters: e,
      vwoEvents: t
    }) {
      e.settings.vwoData.tpc && e.settings.vwoData.tpc._vwo && (e.vwoInternalProperties.jar ? e.storages.storages.cookies.mergeInFPJar() : t.trigger(Ts.ERROR, {
        data: `TPC._vwo (value = ${e.settings.vwoData.tpc._vwo}) value found but cookie jar not available. Value of CJ is ${e.settings.vwoData.cj}.`
      }));
    }
    setSameSiteVariables({
      getters: e,
      actions: t,
      vwoEvents: i
    }) {
      const n = Nr.isSSApp({
        getters: e,
        vwoEvents: i
      });
      if (n && t.addValues({
        ssdm: !0
      }, "vwoInternalProperties"), n && "https:" === e.location.protocol && !un.data.noSS) {
        const e = [{
          ss: !0,
          destinationMT: "window.VWO._.ss"
        }];
        Nr.setPropertiesToBothThreads(t, e, "vwoInternalProperties");
      }
    }
    setListenerForCustomAndDomEvents({
      vwoEvents: e,
      getters: t,
      data: i,
      actions: n
    }) {
      Nr.addListener(t, e, {
        eventName: "*"
      }, (s, r) => {
        s.name = s.name || r, qs({
          vwoEvents: e,
          getters: t,
          data: i,
          actions: n,
          event: s
        }, r);
      });
    }
    updateGlobalOptOutCookie(e, t) {
      const i = e.storages.storages.cookies;
      t ? i._create(Os.GLOBAL_OPT_OUT, 1, Os.DEFAULT_EXPIRY) : i.erase(Os.GLOBAL_OPT_OUT);
    }
  }
  var Mr = new Wr();
  function Gr({
    event: e,
    data: t,
    getters: i,
    actions: n,
    vwoEvents: s
  }) {
    if (Ds(!1, function () {
      s.trigger("hashchange");
    }), Mr.setSameSiteVariables({
      event: e,
      data: t,
      getters: i,
      actions: n,
      vwoEvents: s
    }), sr.shouldWeTrackVisitor()) {
      const e = i.storages.get("cookies");
      if (!e.get("_vis_opt_test_cookie")) {
        const t = e.get("_vis_opt_s");
        t ? e.create("_vis_opt_s", parseInt(t.split("|")[0], 10) + 1 + "|", 100) : e.create("_vis_opt_s", "1|", 100);
      }
      e.create("_vis_opt_test_cookie", 1);
    }
    Mr.migrateCookiesToSSM({
      event: e,
      data: t,
      getters: i,
      actions: n,
      vwoEvents: s
    }), Mr.unhideIfNoCampaignsRunning({
      event: e,
      data: t,
      getters: i,
      actions: n,
      vwoEvents: s
    }), Mr.mergeThirdPartyCookiesInFirstPartyJar({
      event: e,
      data: t,
      getters: i,
      actions: n,
      vwoEvents: s
    }), Mr.setListenerForCustomAndDomEvents({
      event: e,
      data: t,
      getters: i,
      actions: n,
      vwoEvents: s
    });
    const r = Object.keys(i.settings.campaigns);
    Nr.setCampaignIds(r);
    Nr.setPropertiesToBothThreads(n, [{
      willRedirectionOccur: !1,
      destinationMT: "VWO._.willRedirectionOccur"
    }], "vwoInternalProperties"), n.addValues({
      waitingForThirdPartySync: !1
    }, "vwoInternalProperties"), i.vwoCode && Nr.setFlagForCachingIfEnabled(i, n);
  }
  class Fr {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.setSession." + e[0], window.fetcher.getValue(...e);
    }
  }
  class jr {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.sessionInfoService." + e[0], e[2] && (e[2] = {
        captureGroups: e[2]
      }), window.fetcher.getValue(...e);
    }
  }
  let Hr;
  jr.LOCAL_STORAGE_SESSION_EXPIRY = 30, jr.LOCAL_STORAGE_NAME = window._vis_debug ? "debug_vwoSn" : "vwoSn", jr.ACCOUNT_ID = window._vwo_acc_id;
  class $r extends jr {
    constructor(e, t) {
      super(), Hr = this, this.visitorInformation = window.VWO.data.vi = window.VWO.data.vi || {}, Nr.addListener(e, t, {
        eventName: Ts.NEW_SESSION
      }, function () {
        return i(this, void 0, void 0, function* () {
          yield Hr.otherSide("eraseSessionCookie()", null, []);
        });
      }), Nr.addListener(e, t, {
        eventName: Ts.REDIRECT_DECISION
      }, function (t) {
        return i(this, void 0, void 0, function* () {
          const i = e.allSettings.dataStore.campaigns[t.oldArgs[1]];
          Nr.isSessionBasedCampaign2(i) && (yield Hr.otherSide("markPageIdSessionExpiry()"));
        });
      });
    }
    getSessionId() {
      return this.otherSide("getSessionId()");
    }
    shouldSendSessionInfoInCall() {
      return !0;
    }
    setSNCookieValueByIndex2(e, t) {
      return this.otherSide("setSNCookieValueByIndex2", [e, t]);
    }
    getPcTraffic() {
      return this.otherSide("getPcTraffic()");
    }
    setPageIdValue(e) {
      window.phoenix.store.actions.addValues({
        pageId: e
      }, "vwoInternalProperties"), window.phoenix.store.actions.addValues({
        pageViewCount: e
      }, "root");
    }
  }
  class Br extends Fr {
    execute({
      getters: e,
      actions: t,
      vwoEvents: i
    }) {
      let n;
      window.VWO.modules.tags.sessionInfoService ? n = window.VWO.modules.tags.sessionInfoService : (n = new $r(e, i), window.VWO.modules.tags.sessionInfoService = n, t.addValues({
        sessionInfoService: n
      }, "vwoInternalProperties"));
    }
  }
  const Jr = new Br(),
    Kr = Jr.execute.bind(Jr);
  window.VWO.modules.tags.setSession = Kr;
  const zr = window.performance || window.workerThread.performance,
    Yr = {
      mark: (e = "") => {
        e = "vwo-" + e, zr.mark && zr.mark(e);
      },
      measure: (e, t, i) => {
        t = "vwo-" + t, i = "vwo-" + i;
        try {
          zr.measure && zr.measure(e, t, i);
        } catch (e) {
          hr.debug(e);
        }
      }
    };
  class Xr {}
  class qr extends Xr {
    shouldFetchTestingCampaigns(e, t) {
      return 1 != e || !t.vwoInternalProperties.disableAutofetchSettings;
    }
    fetchSettings(e, t, i) {
      this.shouldFetchTestingCampaigns(e, t) && Rs(() => {
        this.shouldFetchTestingCampaigns(e, t) && Nr.getSettings(e, t);
      }, +i || 0)();
    }
    execute({
      getters: e
    }) {
      if (!Nr.areSettingsCached() && !e.visDebug && !Ns() && e.vwoInternalProperties.isSpaEnabled) if (e.vwoCode) {
        const t = window.VWO._.isSettingsCachingEnabled ? 4 : 1;
        this.fetchSettings(t, e, e.vwoInternalProperties.SPA_SETTINGS_DELAY);
      } else this.fetchSettings(2, e, e.vwoInternalProperties.SPA_NEW_PAGE_SETTINGS_DELAY);
    }
  }
  const Qr = new qr(),
    Zr = Qr.execute.bind(Qr);
  class eo extends as {
    constructor() {
      super(...arguments), this.checkEnvironmentInitialized = !1;
    }
    execute({
      event: e,
      data: t,
      getters: n,
      actions: s,
      vwoEvents: r
    }) {
      return i(this, void 0, void 0, function* () {
        if (!this.checkEnvironmentInitialized && (this.checkEnvironmentInitialized = !0, Kr({
          event: e,
          data: t,
          getters: n,
          actions: s,
          vwoEvents: r
        }), Gr({
          event: e,
          data: t,
          getters: n,
          actions: s,
          vwoEvents: r
        }), Nr.shouldExecuteLib({
          event: e,
          data: t,
          getters: n,
          actions: s,
          vwoEvents: r
        }), Ur.checkCookieJarMismatch({
          event: e,
          data: t,
          getters: n,
          actions: s,
          vwoEvents: r
        }), Ur.checkForTimeout({
          event: e,
          data: t,
          getters: n,
          actions: s,
          vwoEvents: r
        }), Ur.addDomListenerForTimeout(n), n.vwoInternalProperties.shouldExecuteLib)) {
          if (Nr.setThirdPartyCookiesForApplicableCamps(n), window._vis_debug || window._vis_heatmap) {
            const e = n.vwoInternalProperties.experimentIds;
            yield r.trigger(Ts.CAMPAIGN_FLOW_START, {
              oldArgs: [e[0]]
            });
          }
          Yr.mark("event-" + Ts.PAGE_VIEW), yield Nr.firePageViewEvent(), Zr({
            event: e,
            data: t,
            getters: n,
            actions: s,
            vwoEvents: r
          }), r.trigger(Ts.UPDATE_SETTINGS_CALL);
        }
      });
    }
  }
  const to = new eo(),
    io = to.execute.bind(to);
  window.VWO.modules.tags.checkEnvironment.fn = to;
  const no = function (...e) {
    return e[0] = "VWO.modules.tags.visibilityService." + e[0], window.fetcher.getValue(...e);
  };
  let so = !1;
  function ro({
    getters: e,
    vwoEvents: t
  }) {
    so || (Nr.addListener(e, t, {
      eventName: Ts.UNHIDE_ELEMENT
    }, function (e) {
      const {
        ruleName: t,
        campaignData: i,
        variation: n
      } = e;
      let s;
      i && (s = {
        id: i.id,
        variation: n
      }), window.fetcher.getValue("VWO.modules.utils.libUtils.delCSS", [{
        ruleName: t,
        campaignData: s
      }]);
    }), so = !0);
  }
  function oo({
    vwoEvents: e
  }, t) {
    var i,
      n,
      s,
      r,
      o,
      a,
      l,
      c,
      d = Jn(t.sections),
      u = d.length,
      g = t.type;
    if ("VISUAL_AB" === g) {
      for (; u--;) if (i = d[u], (n = t.sections[i]).variations) {
        for (r = (s = Jn(n.variations)).length, e.trigger(Ts.UNHIDE_SECTION, {
          id: t.id,
          key: i
        }, i); r--;) if (o = s[r], l = n.variations[o], n.variations[o] = l = "string" == typeof l ? l && vwo_$.parseJSON(l) : l, l) for (a = l.length, e.trigger(Ts.UNHIDE_VARIATION, {
          id: t.id,
          key: i
        }); a--;) c = l[a].xpath, er.unhideElement(e, {
          ruleName: c,
          campaignData: t
        });else e.trigger(Ts.UNHIDE_VARIATION, {
          id: t.id,
          key: i
        }, i);
      } else e.trigger(Ts.UNHIDE_SECTION, {
        id: t.id,
        key: i
      });
    } else if ("VISUAL" === g) for (; u--;) i = d[u], c = t.sections[i].path, er.unhideElement(e, {
      ruleName: c,
      campaignData: t
    });else "SPLIT_URL" === g && er.unhideElement(e, {
      ruleName: "*",
      campaignData: t
    });
  }
  function ao({
    event: e,
    data: t,
    getters: i,
    actions: n,
    vwoEvents: s
  }, r) {
    const o = [],
      a = i.settings.campaigns;
    for (const l in a) {
      const c = a[l],
        d = c.sen,
        u = c.sections[1],
        g = u.sen;
      if (Object.prototype.hasOwnProperty.call(a, l)) {
        if (d && !Nr.doNotHideElements(d)) {
          const c = Nr.addListener(i, s, {
            triggerID: d
          }, () => {
            oo({
              event: e,
              data: t,
              getters: i,
              actions: n,
              vwoEvents: s
            }, a[l]), s.trigger(Ts.CHECK_SEGMENTATION, r);
          });
          c && o.push(c);
        }
        if (g) {
          const e = u.variations;
          for (const t in e) {
            const n = e[t],
              r = g[t];
            n && !Nr.doNotHideElements(r) && Nr.addListener(i, s, {
              triggerID: r
            }, () => {
              for (const e of n) {
                const i = e.xpath;
                s.trigger(Ts.UNHIDE_ELEMENT, {
                  ruleName: i,
                  campaignData: c,
                  variation: t
                });
              }
            });
          }
        }
      }
    }
    return o;
  }
  function lo({
    vwoEvents: e
  }, t, i) {
    return t.forEach(t => {
      e.off.apply(t);
    }), no("unhideElementsAfterTimer", [i]);
  }
  class co {
    modifyTriggerConditions(e, t) {
      const i = [];
      return Array.isArray(e) ? (e.forEach(e => {
        if (Array.isArray(e)) i.push(this.modifyTriggerConditions(e, t));else {
          const n = t(e);
          i.push(n);
        }
      }), i) : e;
    }
    getExitTrigger(e) {
      for (let t = 0; t < e.length; t++) {
        if (Array.isArray(e[t])) {
          const i = this.getExitTrigger(e[t]);
          if (i) return i;
        }
        if ("object" == typeof e[t] && null !== e[t] && e[t].exitTrigger) return e[t].exitTrigger;
      }
    }
  }
  var uo = new co();
  const go = function (e) {
      return window.VWO.phoenix.validateTrigger(e, null, {
        skipEventProps: !0,
        skipValidationIfTimer: !0
      });
    },
    vo = function (e) {
      return window.VWO.phoenix.validateTrigger(e, null, {
        skipEventProps: !0
      });
    },
    ho = function ({
      event: e,
      data: t,
      getters: n,
      actions: s,
      vwoEvents: r
    }) {
      return i(this, void 0, void 0, function* () {
        if (n.vwoCode && (n.vwoCode[ls] || n.vwoCode[cs])) return void r.trigger(Ts.VISIBILITY_TRIGGERED);
        const o = [],
          {
            visibilityServiceCache: a
          } = window.VWO._,
          l = n.settings.campaigns;
        let c = !1;
        const d = {
            hideElementsTriggered: !1,
            segmentCndsSatisfied: void 0
          },
          u = [],
          g = Dr.getGroupBasedCampaigns({
            event: e,
            data: t,
            getters: n,
            actions: s,
            vwoEvents: r
          });
        yield Promise.all(Object.keys(l).map(t => i(this, void 0, void 0, function* () {
          var i, v, h, p, w, f;
          const E = l[t],
            m = l[t].type;
          if ("FUNNEL" === m || E.ready) return;
          const _ = null === (i = E.triggers) || void 0 === i ? void 0 : i[0],
            O = _ && r.settings.currentSettings.triggers[_];
          let S;
          const y = "SPLIT_URL" === m,
            T = null !== (h = null === (v = null == a ? void 0 : a[t]) || void 0 === v ? void 0 : v.dEH) && void 0 !== h ? h : null !== (f = null === (w = null === (p = e) || void 0 === p ? void 0 : p._vwo) || void 0 === w ? void 0 : w.doExperimentHere) && void 0 !== f ? f : Dr.doExperimentHere(n, E, r)[0];
          if (y && T && (c = !0, O && (S = yield vo(O)) && u.push(t)), !T) return void ((Ns() || window._vis_debug) && O && ((null != S ? S : yield go(O)) || (d.segmentCndsSatisfied = !1, r.trigger(Ts.CHECK_SEGMENTATION, d))));
          o.push(t);
          const I = -1 === g.indexOf(t) || g.indexOf(t) >= 0 && E.shouldHideElement,
            C = y ? window.VWO._.bodyPath : void 0;
          O && (null != S ? S : yield go(O)) ? (d.segmentCndsSatisfied = !0, I && !E.manual ? ("DEPLOY" === E.type && (E.type = "VISUAL_AB"), Nr.setXpathAndHideEl(E, n, C), y || (r.trigger(Ts.HIDE_ELEMENTS, {
            oldArgs: [E.id, E.cc]
          }), d.hideElementsTriggered = !0)) : Nr.setXpathAndHideEl(E, n, C, !1)) : (d.segmentCndsSatisfied = !1, r.trigger(Ts.CHECK_SEGMENTATION, d));
          const b = uo.getExitTrigger(O.cnds);
          O && b && !y && Nr.addListener(n, r, {
            triggerID: b
          }, () => {
            E.ready || ("SPLIT_URL" === m && r.trigger(Ts.NOT_REDIRECTING), oo({
              event: e,
              data: E,
              getters: n,
              actions: s,
              vwoEvents: r
            }, E), r.trigger(Ts.CHECK_SEGMENTATION, d));
          }), E.debug && s.updateSettings({
            cc: E.debug.v
          }, `campaigns.${t}`), Yr.mark("tag-visibilityService");
        }))), c && 0 !== u.length || r.trigger(Ts.NOT_REDIRECTING), window.VWO._.executableCampaignsOnCurrentPage = o, window.fetcher.getValue("VWO.modules.utils.libUtils.delCSS", [{
          ruleName: "*",
          campaignData: t
        }]), ro({
          event: e,
          data: t,
          getters: n,
          actions: s,
          vwoEvents: r
        });
        const v = ao({
          event: e,
          data: t,
          getters: n,
          actions: s,
          vwoEvents: r
        }, d);
        lo({
          event: e,
          data: t,
          getters: n,
          actions: s,
          vwoEvents: r
        }, v, d), r.trigger(Ts.VISIBILITY_TRIGGERED);
      });
    };
  class po {}
  class wo {}
  class fo extends wo {
    constructor() {
      super(...arguments), this.preview = Ns, this.noopFn = function () {};
    }
    isTimedOut(e) {
      return e.vwoCode && (e.vwoCode[ls] || e.vwoCode[cs]);
    }
    unhideElForCombinationsToNotUse(e, t, i, n) {
      if ("VISUAL_AB" !== i.type) return;
      Nr.isPersonalizeCampaign(i) && Nr.unhideCampaignLevelStyle(i.id);
      const s = i.sections[1].variations,
        r = As(s);
      for (let e = 0; e < r.length; e++) if (r[e] !== t) {
        let t = s[r[e]];
        if ("object" != typeof t && (t = JSON.parse(t)), !t) continue;
        for (let s = 0; s < t.length; s++) n.trigger(Ts.UNHIDE_ELEMENT, {
          ruleName: t[s].xpath,
          campaignData: i,
          variation: Nr.isPersonalizeCampaign(i) ? r[e] : null
        });
      }
    }
    unhideVariationIfNotSplit(e, t, i) {
      "SPLIT_URL" !== t.type && this.unhideVariation(e, t, i);
    }
    unhideVariation(e, t, i) {
      const n = As(t.sections);
      let s,
        r,
        o,
        a,
        l,
        c,
        d,
        u,
        g = n.length;
      const v = t.type;
      if ("VISUAL_AB" === v) {
        for (; g--;) if (s = n[g], r = t.sections[s], r.variations) {
          for (o = As(r.variations), a = o.length, i.trigger(Ts.UNHIDE_SECTION, {
            oldArgs: [t.id, s, !a]
          }); a--;) if (l = o[a], d = r.variations[l], r.variations[l] = d = "string" == typeof d ? d && JSON.parse(d) : d, d) for (c = d.length, i.trigger(Ts.UNHIDE_VARIATION, {
            oldArgs: [t.id, s, l, !c]
          }); c--;) u = d[c].xpath, i.trigger(Ts.UNHIDE_ELEMENT, {
            ruleName: u,
            campaignData: t,
            key: s,
            oldArgs: [t.id, s, l, u]
          });else i.trigger(Ts.UNHIDE_VARIATION, {
            oldArgs: [t.id, s, l, !d]
          });
        } else i.trigger(Ts.UNHIDE_SECTION, {
          oldArgs: [t.id, s, !0]
        });
      } else if ("VISUAL" === v) for (; g--;) s = n[g], u = t.sections[s].path, i.trigger(Ts.UNHIDE_ELEMENT, {
        ruleName: u,
        campaignData: t,
        key: s,
        oldArgs: [t.id, s, void 0, u]
      });else "SPLIT_URL" === v && (i.trigger(Ts.UNHIDE_ELEMENT, {
        ruleName: "*",
        campaignData: t,
        oldArgs: [t.id, void 0, void 0, "*"]
      }), i.trigger(Ts.UNHIDE_ELEMENT, {
        ruleName: "body",
        campaignData: t,
        oldArgs: [t.id, void 0, void 0, "body"]
      }));
    }
    isSplit(e, t, n) {
      return i(this, void 0, void 0, function* () {
        if ("SPLIT_URL" === t.type && ("RUNNING" === t.status || this.preview() || window._vis_debug)) {
          let i;
          const s = yield Nr.getSplitDecision(e, t.id);
          if (!s) return !1;
          if (Nr.isCurrentURLSplitVariation({
            chosenVariation: s,
            getters: e,
            campaignData: t
          })) {
            if (i = yield Dr.getCombi(e, t), t.combination_chosen = s, t[ds] = 1, n.trigger(Ts.CHOOSE_COMBINATION, {
              oldArgs: [t.id, s, !0]
            }), i || this.preview()) this.preview() || (yield window.fetcher.getValue('VWO.push("${{1}}")', null, {
              captureGroups: [["tag", t.id, s, "session", !0]]
            }), n.trigger(Ts.SPLIT_VARIATION_SHOWN, {
              oldArgs: ["" + t.id, i]
            }), Qs(n, Ts.CAMPAIGN_READY, {
              id: t.id,
              combination: i
            }));else {
              i = s;
              const r = window.fetcher.getValue('VWO.push("${{1}}")', null, {
                captureGroups: [["tag", t.id, i, "session", !0]]
              });
              t && void 0 === t.isFirst && (t.isFirst = 1), yield Dr.include(e, t.id, i, t), yield r, n.trigger(Ts.REGISTER_HIT, {
                oldArgs: ["" + t.id, i]
              }), Qs(n, Ts.CAMPAIGN_READY, {
                id: t.id,
                combination: i
              });
            }
            return window.fetcher.getValue("VWO.modules.utils.collectAndSendDataForGA", [t.id, i]), !0;
          }
        }
        return !1;
      });
    }
    checkSplitVariationAndMarkReady(e, t, n) {
      return i(this, void 0, void 0, function* () {
        if (yield this.isSplit(e, t, n)) return n.trigger(Ts.NOT_REDIRECTING), er.unhideElement(n, {
          ruleName: "*",
          campaignData: t,
          oldArgs: [t.id, void 0, void 0, "*"]
        }), this.unhideVariationIfNotSplit(e, t, n), t.ready = !0, !0;
      });
    }
    getCombination(e, t, n) {
      return i(this, void 0, void 0, function* () {
        let i = !1,
          s = this.preview() || (yield Dr.getCombi(e, t));
        return (s || t.combination_chosen) && (i = !0), s = s || Dr.isLogged(e, t.id) || !n && (yield Dr.chooseCombination(e, t)), {
          alreadyChosen: i,
          combi: s
        };
      });
    }
    registerHit(e, t, n, s, r, o, a) {
      return i(this, void 0, void 0, function* () {
        if (o = o || this.noopFn, (yield Dr.isBucketed(e, n)) || Nr.isBot2() || !Nr.shouldTrackUserForCampaign(n)) return o(a);
        if ("TRACK" === n.type) {
          var i = Dr.getTrackGoalIdFromExp(n.id, e);
          yield window.fetcher.getValue('VWO.push("${{1}}", "${{2}}")', null, {
            captureGroups: [["tag", n.id, t, "session", !0], ["tag", i, null, "eg"]]
          });
        }
        s.trigger(Ts.SEND_NEW_VISITOR_CALL, {
          combination: t,
          campaignData: n,
          function() {}
        }), yield zs({
          getters: e,
          event: {
            time: +new Date(),
            name: Ts.REGISTER_HIT,
            props: {
              id: "" + n.id,
              combination: t
            }
          },
          actions: {},
          vwoEvents: {},
          data: {}
        }, n, o, a), r || s.trigger(Ts.REGISTER_HIT, {
          oldArgs: ["" + n.id, t]
        }), Qs(s, Ts.CAMPAIGN_READY, {
          id: n.id,
          combination: t
        });
      });
    }
    createTempCombiCookie(e, t, n) {
      return i(this, void 0, void 0, function* () {
        yield Nr.createCookie(e, "_vis_opt_exp_" + t.id + "_combi_choose", n, 100, t);
      });
    }
    recordVisitor(e, t, n, s, r) {
      return i(this, void 0, void 0, function* () {
        if (!t) return;
        const i = n.type;
        s && !(yield Dr.isLogged(e, n.id)) ? (yield this.registerHit(e, t, n, r), Nr.isDomDependent(i) && (yield this.createTempCombiCookie(e, n, t))) : Qs(r, Ts.CAMPAIGN_READY, {
          id: n.id,
          combination: t
        }), (Nr.isDomDependent(i) || "SPLIT_URL" === i) && (yield window.fetcher.getValue('VWO.push("${{1}}")', null, {
          captureGroups: [["tag", n.id, t, "session", !0]]
        })), window.fetcher.getValue("VWO.modules.utils.collectAndSendDataForGA", [n.id, t]);
      });
    }
    deleteCampaignParams(e) {
      delete e.ready, delete e.timedout, delete e[ds];
    }
    setMutsData(e) {
      e.muts = e.muts || {}, e.muts.pre = e.muts.pre || {}, e.muts.post = e.muts.post || {}, e.muts.pre.enabled && (e.manual = !0);
    }
    handleDeployCampaign(e) {
      "DEPLOY" === e.type && (e.type = "VISUAL_AB");
    }
    handlePCTraffic(e) {
      e.pc_traffic = void 0 === e.pc_traffic ? 100 : e.pc_traffic;
    }
    preProcessCampaignData({
      data: e
    }) {
      this.setMutsData(e), this.handleDeployCampaign(e), this.handlePCTraffic(e), e.globalCode = e.globalCode || {}, e.goals || (e.goals = {}), Nr.isDomIndependentCampaign(e.type) && (e.clickmap = 0), "FUNNEL" === e.type ? (e.g = e.g || e.goals, e.goals = {}, e.segment_code = void 0 === e.segment_code ? "true" : e.segment_code, e.manual = !0, e.v = e.v || 1) : e.manual = !!e.manual;
    }
    processCampaign({
      data: e,
      event: t,
      actions: n,
      getters: s,
      vwoEvents: r,
      executingTagTrigger: o
    }) {
      var a, l;
      return i(this, void 0, void 0, function* () {
        let i, c;
        const d = "SPLIT_URL" === e.type;
        if (!this.preview() && (yield Dr.isExcluded(s, e))) return r.trigger(Ts.UNHIDE_ALL_VARIATIONS, {
          oldArgs: [e.id, !0, !0]
        }), d && (r.trigger(Ts.NOT_REDIRECTING), er.unhideElement(r, {
          ruleName: "*",
          campaignData: e
        })), void this.unhideVariationIfNotSplit(s, e, r);
        if (this.deleteCampaignParams(e), d && (yield this.checkSplitVariationAndMarkReady(s, e, r))) return void r.trigger(Ts.UNHIDE_ALL_VARIATIONS, {
          oldArgs: [e.id, void 0, void 0, !0]
        });
        if (!Nr.shouldTrackUserForCampaign(e)) return e.timedout = !0, d && (r.trigger(Ts.NOT_REDIRECTING), er.unhideElement(r, {
          ruleName: "*",
          campaignData: e
        })), void this.unhideVariation(s, e, r);
        const u = Dr.doExperimentHere(s, e, r)[0];
        if (u) {
          const t = (Nr.isPersonalizeCampaign(e) && e.sections[1].triggers[null === (a = e.debug) || void 0 === a ? void 0 : a.v]) === o;
          if (r.trigger(Ts.SEGMENTATION_EVALUATED, {
            oldArgs: [e.id, u, t, !0]
          }), Nr.isDomDependent(e.type) && (i = yield this.getCombination(s, e, !0), c = i.alreadyChosen, i.combi && (e.cc = i.combi)), !this.preview() && !(yield Dr.isBucketed(s, e)) && !(yield Dr.shouldBucket(s, e))) return r.trigger(Ts.UNHIDE_ALL_VARIATIONS, {
            oldArgs: [e.id, !0, void 0, void 0, !0]
          }), yield Dr.exclude(s, e), "SPLIT_URL" === e.type && (r.trigger(Ts.NOT_REDIRECTING), er.unhideElement(r, {
            ruleName: "*",
            campaignData: e
          })), void this.unhideVariationIfNotSplit(s, e, r);
          if (Nr.shouldTrackUserForCampaign(e) ? e.ready = !0 : e.timedout = !0, d) {
            if (this.isTimedOut(s)) r.trigger(Ts.NOT_REDIRECTING), er.unhideElement(r, {
              ruleName: "*",
              campaignData: e
            });else {
              i = yield this.getCombination(s, e), c = i.alreadyChosen, e.combination_chosen = i.combi;
              const t = [{
                willRedirectionOccur: !0,
                destinationMT: "VWO._.willRedirectionOccur"
              }];
              "1" !== e.combination_chosen && Nr.setPropertiesToBothThreads(n, t, "vwoInternalProperties");
              const o = yield Nr.isBotScreen();
              Dr.executeCampaignJS(e, "pre"), yield er.variationShown(r, Object.assign(Object.assign({
                id: e.id,
                variation: e.combination_chosen,
                isFirst: c ? 0 : 1,
                isSplitVariation: "1" !== e.combination_chosen
              }, o && {
                vwoMeta: {
                  isBot: o
                }
              }), {
                fireLinkedTagSync: "FUNNEL" === e.type
              }), e);
            }
          } else {
            i = yield this.getCombination(s, e);
            const t = e.combination_chosen = i.combi;
            if (c = i.alreadyChosen, delete e.cc, !t) return r.trigger(Ts.UNHIDE_ALL_VARIATIONS, {
              oldArgs: [e.id, void 0, void 0, void 0, void 0, void 0, !0, Nr.isPersonalizeCampaign(e)]
            }), this.unhideVariationIfNotSplit(s, e, r), s.vwoInternalProperties.isSpaEnabled && r.trigger(Ts.TEST_NOT_RUNNING, {
              oldArgs: [e.id]
            }), void (e.ready = !1);
            r.trigger(Ts.CHOOSE_COMBINATION, {
              oldArgs: [e.id, t, c, Nr.isPersonalizeCampaign(e) ? c : void 0]
            }), this.recordVisitor(s, t, e, !c, r), this.unhideElForCombinationsToNotUse(s, t, e, r), "VISUAL_AB" === e.type && 1 == t && (r.trigger(Ts.UNHIDE_ALL_VARIATIONS, {
              oldArgs: [e.id, void 0, void 0, void 0, void 0, void 0, void 0, !0]
            }), this.unhideVariationIfNotSplit(s, e, r)), Dr.executeCampaignJS(e, "pre");
            const n = yield Nr.isBotScreen();
            yield er.variationShown(r, Object.assign(Object.assign({
              id: e.id,
              variation: i.combi,
              isFirst: c ? 0 : 1
            }, n && {
              vwoMeta: {
                isBot: n
              }
            }), {
              fireLinkedTagSync: "FUNNEL" === e.type
            }), e);
          }
        } else s.vwoInternalProperties.isSpaEnabled && r.trigger(Ts.TEST_NOT_RUNNING, {
          oldArgs: [e.id]
        }), Nr.shouldTrackUserForCampaign(e) && (r.trigger(Ts.GOAL_VISIT, {
          expId: e.id
        }), (null === (l = null == e ? void 0 : e.globalCode) || void 0 === l ? void 0 : l.pre) && r.trigger(`${Ts.EVALUATE_GOAL_PAGE_FOR_PREJS}_${e.id}`)), oo({
          data: e,
          event: t,
          getters: s,
          actions: n,
          vwoEvents: r
        }, e), this.unhideVariationIfNotSplit(s, e, r);
      });
    }
  }
  var Eo = new fo();
  class mo extends po {
    constructor() {
      super(...arguments), this.listenerAdded = !1, this.runCampaignSync = {};
    }
    executeWrapper(e, t) {
      return i(this, void 0, void 0, function* () {
        const n = e.data.id;
        this.runCampaignSync[n] ? this.runCampaignSync[n] = this.runCampaignSync[n].then(() => i(this, void 0, void 0, function* () {
          try {
            yield this.execute(e, t);
          } catch (e) {
            hr.error(e);
          }
        })) : this.runCampaignSync[n] = this.execute(e, t), yield this.runCampaignSync[n], delete this.runCampaignSync[n];
      });
    }
    execute({
      event: e,
      data: t,
      actions: n,
      getters: s,
      vwoEvents: r
    }, o) {
      return i(this, void 0, void 0, function* () {
        "SURVEY" === t.type && (yield un._.insightsOnConsentPromise);
        const {
          executingTagTrigger: a
        } = e;
        if (delete e.executingTagTrigger, t.ready) return;
        if (s = s || un.phoenix.store.getters, n = n || un.phoenix.store.actions, t.isTriggerValidated = !0, !o && "FUNNEL" === t.type) return;
        if (Yr.mark(`runCampaignStart-${t.id}`), !s.vwoInternalProperties.shouldExecuteLib) return "SPLIT_URL" === t.type && r.trigger(Ts.NOT_REDIRECTING), void er.unhideElement(r, {
          ruleName: "*",
          campaignData: t
        });
        if (s.vwoInternalProperties.willRedirectionOccur) return;
        "TRACK" === t.type && (yield this.processFunnelCampaign({
          getters: s,
          actions: n,
          vwoEvents: r,
          data: t,
          event: e
        })), this.listenerAdded || (r.on(Ts.EXECUTE_FUNNEL_FOR_GOAL_CAMPAIGN, t => i(this, void 0, void 0, function* () {
          yield this.processFunnelCampaign({
            getters: s,
            actions: n,
            vwoEvents: r,
            data: t.campaign,
            event: e
          });
        })), this.listenerAdded = !0), Eo.preProcessCampaignData({
          event: e,
          data: t,
          actions: n,
          getters: s,
          vwoEvents: r
        });
        const l = yield Dr.getCombiCookie(s, t.id);
        yield window.VWO._.visibilityTriggered, yield Eo.processCampaign({
          event: e,
          data: t,
          actions: n,
          getters: s,
          vwoEvents: r,
          executingTagTrigger: a
        }), t.ready && !l && (e._vwo = e._vwo || {
          campaignsConverted: []
        }, e._vwo.campaignsConverted.push(t.id)), r.trigger(Ts.CAMPAIGN_FLOW_END);
      });
    }
    processFunnelCampaign({
      getters: e,
      actions: t,
      vwoEvents: n,
      data: s,
      event: r
    }) {
      return i(this, void 0, void 0, function* () {
        if (!s.funnel) return;
        const o = yield window.fetcher.getValue("VWO._.commonCookieHandler.getDataStore()"),
          a = s.funnel.map(a => i(this, void 0, void 0, function* () {
            const i = o.split(":")[hs].split(",");
            let l,
              c,
              d,
              u = i.length;
            const g = e.settings.campaigns[a.id].g[0].id === parseInt(Object.keys(s.goals)[0], vs),
              v = a.triggers[0],
              h = yield window.VWO.phoenix.validateTrigger(window.VWO.phoenix.settings.currentSettings.triggers[v], null, {
                triggerName: v
              });
            for (; u--;) l = i[u].split("_"), c = l[0], parseInt(c, vs) === parseInt(a.id, vs) && (d = !0);
            h && g && !d && (yield this.execute({
              event: r,
              data: e.settings.campaigns[a.id],
              actions: t,
              getters: e,
              vwoEvents: n
            }, !0));
          }));
        yield Promise.all(a);
      });
    }
  }
  const _o = new mo(),
    Oo = _o.executeWrapper.bind(_o);
  class So extends fo {
    constructor() {
      super(...arguments), this.preview = Ns, this.currentCombinationXPaths = {};
    }
    checkAndApplyChanges(e, t, n, s, r) {
      return i(this, void 0, void 0, function* () {
        if (!t || !t.ready) return;
        let i,
          o = !1;
        if (i = "", "SPLIT_URL" === t.type) this.runSplitCampaign(t, e, s, n);else {
          if (i = this.preview() || (yield Dr.getCombi(e, t)), !i && (o = !0, i = yield Dr.chooseCombination(e, t), !i)) return;
          n.trigger(Ts.ELEMENT_LOAD_TIMER_STOP, {
            oldArgs: [t.id, i]
          }), e.vwoInternalProperties.isSpaEnabled && void 0 === t.dontKillTimer && (t.dontKillTimer = !0), this.otherSide("tryApplyingChanges", [i, t, null, r]), yield this.record(e, i, t, o, n), Nr.isDomIndependentCampaign(t.type) && Nr.shouldTrackUserForCampaign(t) && n.trigger(Ts.GOAL_VISIT, {
            expId: t.id
          });
          for (const e in this.currentCombinationXPaths) Object.prototype.hasOwnProperty.call(this.currentCombinationXPaths, e) && n.trigger(Ts.ELEMENT_NOT_LOADED, {
            oldArgs: [t.id, this.currentCombinationXPaths[e][0], this.currentCombinationXPaths[e][1], e]
          });
        }
      });
    }
    record(e, t, n, s, r) {
      return i(this, void 0, void 0, function* () {
        if (!s || !t) return;
        (yield Dr.include(e, n.id, t, n)).isCookieCreated && r.trigger(Ts.CAMPAIGN_COMBI_CREATED), e.storages.storages.cookies.erase("_vis_opt_exp_" + n.id + "_combi_choose"), n.id && n.multiple_domains;
      });
    }
    runSplitCampaign(e, t, n, s) {
      return i(this, void 0, void 0, function* () {
        let r;
        window._vis_debug || (r = Ns() || (yield Dr.getCombi(t, e)) || (yield Nr.getSplitDecision(t, e.id)));
        const o = e.sections[1].variations,
          a = t.storages.storages.cookies;
        if (r = parseInt(r, vs), r) 1 === r ? (er.unhideElement(s, {
          ruleName: "*",
          campaignData: e,
          oldArgs: [e.id, void 0, void 0, "*"]
        }), s.trigger(Ts.NOT_REDIRECTING), s.trigger(Ts.UNHIDE_ALL_VARIATIONS, {
          oldArgs: [e.id, void 0, void 0, void 0, !0]
        }), e.combination_chosen = r, s.trigger(Ts.CHOOSE_COMBINATION, {
          oldArgs: [e.id, r, !0]
        }), this.recordVisitor(t, r, e, !1, s)) : (Nr.createCookie(t, "_vis_opt_exp_" + e.id + "_split", r, 100, e), Fs.set(), s.trigger(Ts.SPLIT_URL, {
          oldArgs: [e.id]
        }), this.redirectToURL(t, n, e, o[r], r, s));else {
          if (isNaN(r = parseInt(yield Dr.chooseCombination(t, e), vs))) return s.trigger(Ts.CHOOSE_COMBINATION, {
            oldArgs: [e.id, void 0, !1]
          }), void s.trigger(Ts.UNHIDE_ALL_VARIATIONS, {
            oldArgs: [e.id, void 0, void 0, void 0, !0]
          });
          if (e.multiple_domains && 1 !== r) {
            Nr.createCookie(t, "_vis_opt_exp_" + e.id + "_split", r, 100, e), Fs.set(), s.trigger(Ts.SPLIT_URL, {
              oldArgs: [e.id]
            });
            const l = [{
              willRedirectionOccur: !0,
              destinationMT: "VWO._.willRedirectionOccur"
            }];
            Nr.setPropertiesToBothThreads(n, l, "vwoInternalProperties"), n.addValues({
              waitingForThirdPartySync: !0
            }, "vwoInternalProperties"), a.waitForThirdPartySync(() => i(this, void 0, void 0, function* () {
              n.addValues({
                waitingForThirdPartySync: !1
              }, "vwoInternalProperties"), this.redirectToURL(t, n, e, o[r], r, s, !0);
            }));
          } else 1 !== r ? (Nr.createCookie(t, "_vis_opt_exp_" + e.id + "_split", r, 100, e), Fs.set(), s.trigger(Ts.SPLIT_URL, {
            oldArgs: [e.id]
          }), this.redirectToURL(t, n, e, o[r], r, s, !0)) : (s.trigger(Ts.NOT_REDIRECTING), er.unhideElement(s, {
            ruleName: "*",
            campaignData: e,
            oldArgs: [e.id, void 0, void 0, "*"]
          }), e.combination_chosen = r, s.trigger(Ts.CHOOSE_COMBINATION, {
            oldArgs: [e.id, r, !1]
          }), s.trigger(Ts.UNHIDE_ALL_VARIATIONS, {
            oldArgs: [e.id, void 0, void 0, void 0, !0]
          }), yield this.recordVisitor(t, "1", e, !0, s), this.record(t, "1", e, !0, s));
        }
      });
    }
    redirectToURL(e, t, i, n, s, r, o) {
      if (this.isTimedOut(e)) return;
      Nr.setPropertiesToBothThreads(t, [{
        willRedirectionOccur: !0,
        destinationMT: "VWO._.willRedirectionOccur"
      }], "vwoInternalProperties"), r.trigger(Ts.REDIRECT_DECISION, {
        oldArgs: [!0, i.id]
      }), o ? this.registerHit(e, s, i, r, !0, this.processRedirect.bind(this), {
        getters: e,
        campaignData: i,
        redirectURL: n,
        isNewVisitor: o,
        context: this
      }) : this.processRedirect({
        getters: e,
        campaignData: i,
        redirectURL: n,
        isNewVisitor: o,
        context: this
      });
    }
    processRedirect({
      getters: e,
      campaignData: t,
      redirectURL: i,
      isNewVisitor: n
    }) {
      this.otherSide("processRedirect", [{
        getters: e,
        campaignData: t,
        redirectURL: i,
        isNewVisitor: n
      }]);
    }
    otherSide(...e) {
      e[0] = "VWO.modules.tags.runTestCampaign.utils." + e[0], window.fetcher.getValue(...e);
    }
  }
  var yo = new So();
  const To = function ({
    event: e,
    getters: t,
    actions: n,
    vwoEvents: s
  }) {
    return i(this, void 0, void 0, function* () {
      Yr.mark(`runTestCampaignStart-${e.props.id}`), Yr.measure(`runCampaignMinusRunTestCampaignStart-${e.props.id}`, `runCampaignStart-${e.props.id}`, `runTestCampaignStart-${e.props.id}`), Yr.measure(`vwo-campaign-execution-${e.props.id}`, "tag-visibilityService", `runTestCampaignStart-${e.props.id}`);
      const i = t.settings.campaigns[e.props.id];
      yield yo.checkAndApplyChanges(t, i, s, n), Dr.executeCampaignJS(i, "post");
    });
  };
  class Io {
    serializeNonGoalData(e) {
      Nr.isDomIndependentCampaign(e.type) && (e.clickmap = 0), ("ANALYSIS" === e.type || Nr.isAnalyzeCampaign(e.type)) && (e.goals = {});
    }
    serializeData(e) {
      this.serializeNonGoalData(e);
      const t = e.goals;
      for (const e in t) Nr.isPageBasedGoal(t[e].type) ? (t[e].pUrl = t[e].pUrl || t[e].urlRegex, t[e].pExcludeUrl = t[e].pExcludeUrl || t[e].excludeUrl) : t[e].pUrl = t[e].pUrl || ".*";
    }
    isGoalEligible(e, t, i) {
      i = i || window.VWO.phoenix;
      const n = (t = t || i.store.getters).currentUrl;
      return e.pExcludeUrl && Sr.matchRegex(n, e.pExcludeUrl) ? (i.trigger(Ts.EXCLUDE_GOAL_URL), !1) : e.pUrl ? Cr.verifyUrl(n, e.pUrl, null) : Cr.verifyUrl(n, null, e.urlRegex);
    }
    registerConversion(e, t, n, s, r, o, a) {
      return i(this, void 0, void 0, function* () {
        if (!sr.shouldWeTrackVisitor()) return;
        t = t || 1;
        const i = window.VWO.phoenix;
        e = e || i.store.getters, yield this._triggerGoalConversion(i, e, t, n, s, r, Object.assign(Object.assign({}, a || {}), {
          combination: (null == a ? void 0 : a.combination) || (yield Dr.getCombi(e, n, o))
        }));
      });
    }
    getImgUrlForConversion(e, t, n, s, r, o) {
      return i(this, void 0, void 0, function* () {
        var i, a;
        const l = e.id;
        if (a = "c.gif?account_id=" + s.accountId + "&experiment_id=" + l + "&goal_id=" + t + "&ru=" + encodeURIComponent(yield Fs.get()) + (void 0 === r ? "" : "&r=" + r) + Nr.getUUIDString((null == o ? void 0 : o.uuid) || (yield Nr.getUUID(s, e))), "TRACK" === e.type) {
          i = (null == o ? void 0 : o.sId) || (yield s.vwoInternalProperties.sessionInfoService.getSessionId()), yield window.VWO.phoenix.trigger(Ts.EXECUTE_FUNNEL_FOR_GOAL_CAMPAIGN, {
            campaign: e
          });
          let n = null == o ? void 0 : o.gtAndF;
          if (n || (n = yield window.tracklib.getGtAndF(t)), n) {
            return a + "&s=" + i + "&ifs=" + +(i === ((null == o ? void 0 : o.sId) || (yield s.vwoInternalProperties.sessionInfoService.getSessionId()))) + "&t=1&cu=" + encodeURIComponent((null == o ? void 0 : o.pageUrl) || s.currentUrl) + n;
          }
          return "";
        }
        return (yield s.vwoInternalProperties.sessionInfoService.shouldSendSessionInfoInCall()) && (i = yield s.vwoInternalProperties.sessionInfoService.getSessionId()), a + "&combination=" + n + (i = i ? "&sId=" + i : "");
      });
    }
    _triggerGoalConversion(e, t, n, s, r, o, a) {
      return i(this, void 0, void 0, function* () {
        const i = a.combination;
        if (!o && (!i || (yield Dr.isGoalTriggered(s, n, t)) || Nr.isBot2())) return void (yield e.trigger(Ts.REGISTER_CONVERSION, {
          oldArgs: [s.id, n, r, !1],
          campaignId: s.id,
          goalId: n
        }));
        "REVENUE_TRACKING" !== s.goals[n].type && (r = void 0);
        const l = yield this.getImgUrlForConversion(s, n, i, t, r, {
          uuid: a.uuid,
          gtAndF: a.gtAndF,
          sId: a.sId,
          pageUrl: a.pageUrl
        });
        l && ((yield Nr.isEligibleToSendCall(s.id, t)) && (yield Bs.sendCall(t, {
          url: l
        }, null, null)), yield Dr.markGoalTriggered(s, n, t)), yield e.trigger(Ts.REGISTER_CONVERSION, {
          oldArgs: [s.id, n, r, !!l],
          campaignId: s.id,
          goalId: n
        });
      });
    }
  }
  const Co = new Io();
  class bo {}
  class No extends bo {
    shouldWeTriggerMetric(e, t, i, n, s) {
      const r = n.isFirst,
        {
          excludeUrl: o,
          pExcludeUrl: a,
          urlRegex: l,
          pUrl: c
        } = s;
      let d;
      d = !(o || a || l || c) || Co.isGoalEligible(s, e, t);
      return !(!Nr.isSessionBasedCampaign2(n) && r && i.name === Ts.PAGE_VIEW && "CUSTOM_GOAL" === s.type) && d;
    }
    isItCustomConversionEvent(e) {
      return e.name === Ts.CUSTOM_CONVERSION;
    }
  }
  var Ao = new No();
  class Vo {
    getCurrentEventData(e, t) {
      const i = {};
      if (!(Object.keys(e).length <= 0)) return Object.keys(e).forEach(n => {
        var s;
        i[n] = i[n] || {}, i[n] = {
          vwoMeta: {
            metric: e[n].metrics
          }
        }, e[n].comb && (i[n].vwoMeta.vS = e[n].comb), (null === (s = t[n]) || void 0 === s ? void 0 : s.length) > 0 && (i[n].matchedSelectors = t[n]);
      }), i;
    }
  }
  class Ro extends Vo {
    constructor() {
      super(...arguments), this.mutex = {};
    }
    execute({
      data: e,
      vwoEvents: t,
      getters: n,
      event: s
    }) {
      var r;
      return i(this, void 0, void 0, function* () {
        if ([Ts.DOM_CLICK, Ts.DOM_SUBMIT, Ts.PAGE_UNLOAD].includes(s.name)) return;
        if (n.vwoInternalProperties.willRedirectionOccur) return;
        if (Nr.isBot2()) return;
        const o = {},
          a = {};
        for (const r of e) for (const e of r.campaigns) {
          const r = e.c,
            l = e.g;
          let c,
            d,
            u = r && n.currentSettings.dataStore.campaigns[r],
            g = !1;
          const v = r + "-" + l;
          this.mutex[v] || (this.mutex[v] = Promise.resolve()), this.mutex[v] && (d = this.mutex[v].then(() => i(this, void 0, void 0, function* () {
            var i, d, v;
            if (!r || !l || (null === (d = null === (i = s._vwo) || void 0 === i ? void 0 : i.campaignsConverted) || void 0 === d ? void 0 : d.includes(r)) || !u) return;
            if (c = u.goals[l], !c) return;
            g = Nr.isSessionBasedCampaign2(u);
            const h = "SEPARATE_PAGE" === c.type;
            if (g && !h) return;
            const p = u.triggers[0];
            if (!g && (null === (v = null == u ? void 0 : u.ss) || void 0 === v ? void 0 : v.csa) && !(yield t.validateTrigger(n.currentSettings.triggers[p], null, {
              triggerName: p
            }))) return;
            if (!Nr.shouldTrackUserForCampaign(u) || !(yield Dr.isBucketed(n, u, !h)) || !Ao.shouldWeTriggerMetric(n, t, s, u, c)) return;
            if (h && delete c.pageVisited, yield Dr.isGoalTriggered(u, l, n)) return;
            u || (u = {
              id: r,
              goals: {
                [l]: {}
              },
              type: e.sess
            });
            const w = e.uuid || (yield Nr.createUUIDCookie2(n, u));
            if (!g) {
              if ("CUSTOM_GOAL" === (null == c ? void 0 : c.type) && (null == c ? void 0 : c.url)) {
                const e = c.url;
                o[w] = o[w] || [], o[w].indexOf(e) < 0 && o[w].push(e);
              }
              a[w] = a[w] || {};
              const e = "id_" + r;
              a[w].metrics = a[w].metrics || {}, a[w].metrics[e] = a[w].metrics[e] || [], a[w].metrics[e].push("g_" + l), u.isEventMigrated && !s.isCustomEvent && (a[w].comb = a[w].comb || {}, a[w].comb[e] = yield Dr.getCombi(n, u, !0));
            }
            var f = !0;
            window.VWO._.isBeaconAvailable = s.isBeaconAvailable, window.VWO._.isLinkRedirecting = s.isLinkRedirecting;
            yield Co.registerConversion(n, l, u, s.revenue, !0, !0, {
              combination: e.combination,
              uuid: w,
              gtAndF: e.gtAndF,
              sId: e.sId,
              pageUrl: e.pageUrl
            }), t.trigger(Ts.GOAL_CONVERTED, {
              campaignId: u.id,
              goalId: l
            }), window.VWO._.isLinkRedirecting = !1, f = f && window.VWO._.isBeaconAvailable;
          }))), this.mutex[v] = d, yield d;
        }
        const l = this.getCurrentEventData(a, o);
        s._vwo = (null == s ? void 0 : s._vwo) || {}, s._vwo.eventDataConfig = (null === (r = s._vwo) || void 0 === r ? void 0 : r.eventDataConfig) || {}, s._vwo.eventDataConfig = l;
      });
    }
  }
  const Po = new Ro(),
    xo = Po.execute.bind(Po);
  window.VWO.modules.tags.metricWT = xo;
  class Do {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.prePostMutation.fn." + e[0], window.fetcher.getValue(...e);
    }
  }
  window.VWO.modules.tags.prePostMutation = {};
  class Lo {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.prePostMutation.utils." + e[0], window.fetcher.getValue(...e);
    }
  }
  class ko extends Lo {
    isMonitorPageChangesRequired(e) {
      for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        const i = e[t];
        if (i.muts && i.muts.post && i.muts.post.enabled) return !0;
      }
      return !1;
    }
    getWaitForDOMRenderingConfigAndHideElements(e) {
      let t = !1,
        i = 10,
        n = 1e3;
      for (const s in e) if (Object.prototype.hasOwnProperty.call(e, s)) {
        const r = e[s],
          o = r.muts && r.muts.pre;
        o && o.enabled && (t = !0, o.timer && o.timer > i && (i = o.timer), o.timeout && o.timeout > n && (n = o.timeout));
      }
      return {
        enabled: t,
        timer: i,
        timeout: n
      };
    }
    waitForDOMRenderingAndExecuteCampaign(e) {
      return this.otherSide("waitForDOMRenderingAndExecuteCampaign", [e]);
    }
    monitorPageForChanges() {
      return this.otherSide("monitorPageForChanges");
    }
  }
  const Uo = new ko();
  function Wo() {
    Mo("attachEditorChangeObserverEvents");
  }
  function Mo(...e) {
    return e[0] = "VWO.modules.tags.prePostMutation.editorChangesObserver." + e[0], window.fetcher.getValue(...e);
  }
  window.VWO.modules.tags.prePostMutation.utils = Uo;
  class Go extends Do {
    constructor() {
      super(...arguments), this.editorChangeObserverEventsAttached = !1;
    }
    execute({
      data: e,
      getters: t,
      vwoEvents: n
    }) {
      return i(this, void 0, void 0, function* () {
        e = t.settings.campaigns;
        const i = t.MutationObserver;
        let s,
          r = Promise.resolve();
        if (i) {
          const t = Uo.getWaitForDOMRenderingConfigAndHideElements(e);
          t.enabled ? r = Uo.waitForDOMRenderingAndExecuteCampaign(t) : n.trigger(Ts.SSR_COMPLETE);
        }
        Uo.isMonitorPageChangesRequired(e) && (s = Uo.monitorPageForChanges(), this.editorChangeObserverEventsAttached || (Wo(), this.editorChangeObserverEventsAttached = !0)), yield Promise.all([r, s]);
      });
    }
  }
  const Fo = new Go(),
    jo = Fo.execute.bind(Fo);
  window.VWO.modules.tags.prePostMutation.fn = Fo;
  class Ho {
    formatErrorObject(e) {
      return "string" == typeof e && (e = {
        msg: e
      }), e;
    }
    setCustomError(e) {
      const t = this;
      window.VWO._.customError = function (i) {
        i = t.formatErrorObject(i), e(i);
      };
    }
  }
  class $o extends Ho {
    errorTracking({
      getters: e
    }) {
      return i(this, void 0, void 0, function* () {
        const t = yield window.fetcher.getValue('VWO.modules.tags.errorTrackingCallback("${{1}}")', null, {
          captureGroups: [e]
        });
        this.setCustomError(t);
      });
    }
  }
  const Bo = new $o(),
    Jo = Bo.errorTracking;
  class Ko {}
  class zo extends Ko {
    constructor(e, t) {
      super(), this.flattenedGroup = [], this.groupsConfig = e, this.campaigns = t, this.expPossibleToRunMap = {};
    }
    flattenGroupsData() {
      if (this.groupsConfig) for (let e = 0; e < this.groupsConfig.length; e++) {
        if (this.groupsConfig[e].c instanceof Array) for (let t = 0; t < this.groupsConfig[e].c.length; t++) this.groupsConfig[e].c[t] = this.groupsConfig[e].c[t].toString();
        this.flattenedGroup = this.flattenedGroup.concat(this.groupsConfig[e].c);
      }
    }
    isExperimentReadyToRun(e, t, n) {
      return i(this, void 0, void 0, function* () {
        const i = t.triggers[0];
        return Dr.doExperimentHere(e, t, n)[0] && (yield window.VWO.phoenix.validateTrigger(e.currentSettings.triggers[i], null, {
          skipEventProps: !0,
          skipValidationIfTimer: !0
        }));
      });
    }
    checkForExistingWinner(e, t) {
      return i(this, void 0, void 0, function* () {
        return e = e || window.phoenix.store.getters, !!((yield Dr.getCombiCookie(e, t)) || Dr.isLogged(e, t) || "SPLIT_URL" === this.campaigns[t].type && (yield Nr.getSplitDecision(e, t)) || 1 === this.expPossibleToRunMap[t]);
      });
    }
    checkWinnerAlreadyExists(e) {
      for (let t = 0; t < e.length; t++) {
        const i = parseInt(e[t], 10);
        if (1 === this.expPossibleToRunMap[i]) return i;
      }
    }
    checkIfStringArray(e) {
      return !!Array.isArray(e);
    }
    processExperimentsOnBasisOfRandomness(e, t) {
      return i(this, void 0, void 0, function* () {
        const n = {},
          s = {},
          r = t.c;
        let o = 0;
        if (!this.checkIfStringArray(r)) return;
        let a = this.checkWinnerAlreadyExists(r);
        if (!a) {
          for (let e = 0; e < r.length; e++) 2 === this.expPossibleToRunMap[r[e]] && (o += 1, s[r[e]] = this.campaigns[r[e]].triggers);
          if (!o) {
            const t = r.map(t => i(this, void 0, void 0, function* () {
              4 === this.expPossibleToRunMap[t] && (yield Dr.exclude(e, this.campaigns[t]));
            }));
            return void (yield Promise.all(t));
          }
          for (const e in s) Object.prototype.hasOwnProperty.call(s, e) && (n[e] = +(100 / o).toFixed(2));
          a = yield Dr.chooseCombination(e, null, {
            scaleInfo: n,
            segmentInfo: s
          }), this.expPossibleToRunMap[a] = 1;
        }
      });
    }
    processExperimentsOnBasisOfPriorityAndWeight(e, t) {
      return i(this, void 0, void 0, function* () {
        const n = t.c,
          s = t.p,
          r = t.wt;
        if (!this.checkIfStringArray(n)) return;
        let o = this.checkWinnerAlreadyExists(n);
        if (!o) {
          if (s && s.length) for (let e = 0; e < s.length; e++) if (2 === this.expPossibleToRunMap[s[e]]) {
            o = s[e], this.expPossibleToRunMap[o] = 1;
            break;
          }
          if (!o && r) {
            let t = {},
              i = {},
              n = 0,
              s = 0;
            const a = Object.keys(r);
            for (let e = 0; e < a.length; e++) 2 === this.expPossibleToRunMap[a[e]] && (n += 1, i[a[e]] = this.campaigns[a[e]].triggers, s += r[a[e]]);
            if (n) {
              for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = +(100 * r[e] / s).toFixed(2));
              o = yield Dr.chooseCombination(e, null, {
                scaleInfo: t,
                segmentInfo: i
              }), this.expPossibleToRunMap[o] = 1;
            }
          }
          if (!o) {
            const t = n.map(t => i(this, void 0, void 0, function* () {
              4 === this.expPossibleToRunMap[t] && (yield Dr.exclude(e, this.campaigns[t]));
            }));
            yield Promise.all(t);
          }
        }
      });
    }
    updateExperiments(e) {
      return i(this, void 0, void 0, function* () {
        let t,
          n = !1,
          s = !1,
          r = !1;
        const o = Object.keys(this.campaigns).map(o => i(this, void 0, void 0, function* () {
          if (Object.prototype.hasOwnProperty.call(this.campaigns, o)) {
            const i = e.settings.currentSettings.triggers[window._vwo_exp[o].triggers[0]],
              a = "SPLIT_URL" === this.campaigns[o].type;
            let l;
            0 !== this.expPossibleToRunMap[o] && 1 !== this.expPossibleToRunMap[o] || (this.campaigns[o].shouldHideElement = 1), 1 === this.expPossibleToRunMap[o] && (e.trigger(Ts.GROUP_WINNER_CHOOSEN, {
              groupWinner: parseInt(o, vs)
            }), a && (n = !0, (l = yield window.VWO.phoenix.validateTrigger(i, null, {
              skipEventProps: !0
            })) && (r = !0))), !a || s && t || (this.flattenedGroup.indexOf(o) < 0 ? l && Dr.doExperimentHere(e.store.getters, window._vwo_exp[o], e)[0] && (t = !0) : s = !0);
          }
        }));
        yield Promise.all(o), n && r || !s || t || e.trigger(Ts.NOT_REDIRECTING);
      });
    }
    filterByGroupType(e) {
      const t = this.groupsConfig.map(t => 1 == t.et ? this.processExperimentsOnBasisOfRandomness(e, t) : 2 == t.et ? this.processExperimentsOnBasisOfPriorityAndWeight(e, t) : void 0);
      return Promise.all(t);
    }
    filterExperimentsFromGroups({
      getters: e,
      vwoEvents: t
    }) {
      var n;
      return i(this, void 0, void 0, function* () {
        if (!(null === (n = this.groupsConfig) || void 0 === n ? void 0 : n.length)) {
          for (const e in this.campaigns) Object.prototype.hasOwnProperty.call(this.campaigns, e) && t.trigger(Ts.GROUP_WINNER_CHOOSEN, {
            groupWinner: parseInt(e, vs)
          });
          return;
        }
        let s = !1;
        const r = Object.keys(this.campaigns).map(n => i(this, void 0, void 0, function* () {
          n = n.toString();
          const i = this.campaigns[n];
          if (Vs(this.flattenedGroup, n) < 0) this.expPossibleToRunMap[n] = 0;else if (yield Dr.isExcluded(e, i)) this.expPossibleToRunMap[n] = 3;else {
            s = !0;
            const r = this.checkForExistingWinner(e, i.id),
              o = this.isExperimentReadyToRun(e, i, t);
            (yield r) ? this.expPossibleToRunMap[n] = 1 : 1 !== this.expPossibleToRunMap[n] && (yield o) && ((yield Dr.shouldBucket(e, i)) ? this.expPossibleToRunMap[n] = 2 : this.expPossibleToRunMap[n] = 4);
          }
        }));
        return yield Promise.all(r), s && (yield this.filterByGroupType(e)), this.updateExperiments(t);
      });
    }
  }
  class Yo {}
  class Xo extends Yo {
    constructor() {
      super(), this.campaignsData = {};
    }
    processCampaigns({
      event: e,
      getters: t,
      actions: i,
      vwoEvents: n,
      data: s
    }) {
      const r = t.settings.vwoData.gC,
        o = t.settings.campaigns,
        a = new zo(r, o);
      return a.flattenGroupsData(), a.filterExperimentsFromGroups({
        actions: i,
        getters: t,
        event: e,
        vwoEvents: n,
        data: s
      });
    }
    processGroupCampaigns({
      event: e,
      data: t,
      getters: i,
      actions: n,
      vwoEvents: s
    }) {
      if (window.VWO._.pageData = window.VWO._.pageData || {}, window.fetcher.setValue("VWO._.pageData", window.VWO._.pageData), window.VWO._.pageData._grp_campaign_called) return void s.trigger("vwo_groupCampTriggered");
      window.VWO._.pageData._grp_campaign_called = !0, window.fetcher.setValue("VWO._.pageData._grp_campaign_called", !0);
      const r = Dr.getGroupBasedCampaigns({
        event: e,
        data: t,
        getters: i,
        actions: n,
        vwoEvents: s
      });
      if (r.length) {
        for (const e of r) this.campaignsData[e] = i.settings.campaigns[e];
        return this.processCampaigns({
          event: e,
          getters: i,
          actions: n,
          vwoEvents: s,
          data: this.campaignsData
        }).then(() => {
          s.trigger("vwo_groupCampTriggered");
        });
      }
      s.trigger("vwo_groupCampTriggered");
    }
  }
  const qo = new Xo(),
    Qo = qo.processGroupCampaigns.bind(qo);
  window.VWO.modules.tags.groupCampaigns = Qo;
  class Zo {}
  class ea {}
  class ta extends ea {
    debounceGetSettings({
      getters: e
    }) {
      Rs(Nr.getSettings(2, e), e.vwoInternalProperties.SPA_NEW_PAGE_SETTINGS_DELAY);
    }
    resetTriggerStates() {
      var e, t, i, n;
      const s = un.phoenix;
      un._.pageNo = "number" == typeof un._.pageNo ? un._.pageNo + 1 : 0;
      const r = "vwo_timer",
        o = null === (i = null === (t = null === (e = s.store) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.values) || void 0 === i ? void 0 : i.triggers,
        a = s.settings.currentSettings.triggers,
        l = s.triggers.triggerEventListeners;
      Qs(s, Ts.POST_INIT, {}), s.eventBus.remove(r);
      for (const e in a) if (Object.prototype.hasOwnProperty.call(a, e)) {
        const t = null === (n = a[e]) || void 0 === n ? void 0 : n.cnds;
        let i, c;
        o[e] && (i = o[e].event, c = o[e].trigger);
        let d,
          u = !1;
        if (t) {
          const e = t => {
            if (t && "string" != typeof t) {
              if (Array.isArray(t)) return t.forEach(e);
              if ("[object Object]" === t.toString() && void 0 !== t.id) {
                c && c[t.id] && (c[t.id].state = !1);
                t.event === r && (u = !0, d = t.exitTrigger);
              }
            }
          };
          t.forEach(e);
        }
        if (i) {
          o[e].state = !1;
          for (const e in i) Object.prototype.hasOwnProperty.call(i, e) && delete i[e];
        }
        u && (d && (s.eventBus.remove(s.triggers.getTriggerEventName(d)), d = null), delete l[e].vwo_timer, s.triggers.add(e, a[e]), u = !1);
      }
      s.events.events.vwo_timer.eventConditionsUpdate();
    }
    resetExpParams(e, t) {
      const i = e.currentSettings.dataStore.campaigns;
      for (const e in i) if (Object.prototype.hasOwnProperty.call(i, e)) {
        const t = i[e];
        t[gs] = 0, delete t[ds], delete t[us], delete t.clicks, delete t.combination_chosen, delete t.segment_eligble, delete t.isFirst, delete t.ready, delete t.timedout, delete t.processed, delete t[ds], Dr.checkForVariationTargeting(t) && delete t.xPath, clearTimeout(t[ws]), delete t[ws], delete t.globalCode.preExecuted, delete t.globalCode.postExecuted;
        for (var n = As(t.sections), s = 0; s < n.length; s++) delete t.sections[n[s]].loaded;
      }
      if (window._vis_debug) {
        e.getValue("tags.segmentEligibilityTest") && t.addValues({
          executionCount: 0
        }, "tags.segmentEligibilityTest");
      }
    }
    resetTriggerExecutionCount(e) {
      const t = e.triggers;
      Object.keys(t).forEach(e => {
        t[e].executionCount = 0;
      });
    }
  }
  var ia = new ta();
  class na extends Zo {
    constructor() {
      super(...arguments), this.lastExecutedForUrl = window.location.href;
    }
    execute({
      event: e,
      data: t,
      getters: n,
      actions: s,
      vwoEvents: r
    }) {
      var o, a, l, c;
      return i(this, void 0, void 0, function* () {
        Object.assign(window.location, (null == e ? void 0 : e.location) || {});
        const i = window.location.href = (null === (o = null == e ? void 0 : e.props) || void 0 === o ? void 0 : o.virtualPageUrl) || (null === (a = null == e ? void 0 : e.location) || void 0 === a ? void 0 : a.href) || (yield window.fetcher.getValue("location.href"));
        if (n.previousUrl = this.lastExecutedForUrl, window._vis_opt_url = void 0, this.lastExecutedForUrl === i || n.vwoInternalProperties.waitingForThirdPartySync) return;
        if (n.vwoInternalProperties.willRedirectionOccur) return;
        (null === (l = null == e ? void 0 : e.props) || void 0 === l ? void 0 : l.virtualPageUrl) || (this.lastExecutedForUrl = i), r.clearData(), ia.resetTriggerStates(), ia.resetExpParams(r.store.getters, s), ia.resetTriggerExecutionCount(r.store.getters), r.trigger(Ts.URL_CHANGED);
        if (Nr.setPropertiesToBothThreads(s, [{
          willRedirectionOccur: !1,
          destinationMT: "VWO._.willRedirectionOccur"
        }], "vwoInternalProperties"), Nr.addListenerForSessionInitComplete(), Kr({
          event: e,
          data: t,
          getters: n,
          actions: s,
          vwoEvents: r
        }), n.accountId, window.VWO._.campaignsInternalMap = {}, window.VWO._.preventHidingInSPA = null === (c = window.VWO.featureInfo) || void 0 === c ? void 0 : c.dNHEL, window.VWO._.pageData = window.VWO._.pageData || {}, delete window.VWO._.pageData._grp_campaign_called, yield Nr.shouldExecuteLib({
          event: e,
          data: t,
          getters: n,
          actions: s,
          vwoEvents: r
        }), n.vwoInternalProperties.shouldExecuteLib) {
          if (window._vis_debug || window._vis_heatmap) {
            const e = n.vwoInternalProperties.experimentIds;
            r.trigger(Ts.CAMPAIGN_FLOW_START, {
              oldArgs: [e[0]]
            });
          }
          n.vwoCode && (n.vwoCode[ls] = !1, n.vwoCode[cs] = !1), window.VWO._.visibilityTriggered = new Promise(e => {
            const t = r.on(Ts.VISIBILITY_TRIGGERED, () => {
              r.off(t), e();
            });
          }), (n.visDebug || Ns()) && (yield Nr.firePageViewEvent({
            shouldFireDomLoad: !0
          })), window.VWO._.isSettingsCachingEnabled ? (window.VWO._.updateSettingsSuccess || Nr.areSettingsCached()) && (r.trigger(lr.PAGE_LOAD_EVENT), yield Nr.firePageViewEvent({
            shouldFireDomLoad: !0
          })) : ia.debounceGetSettings({
            event: e,
            data: t,
            getters: n,
            actions: s,
            vwoEvents: r
          }), r.trigger(Ts.POST_URL_CHANGE, {
            oldArgs: [Cr.getCleanedUrl(i), n.vwoInternalProperties.willRedirectionOccur]
          });
        }
      });
    }
  }
  const sa = new na(),
    ra = sa.execute.bind(sa);
  function oa({
    data: e,
    event: t,
    getters: i,
    vwoEvents: n
  }) {
    const s = t.props;
    !1 === s.segmentCndsSatisfied ? n.trigger(Ts.SEGMENTATION_EVALUATED, {
      oldArgs: [e.id, s.segmentCndsSatisfied, !0]
    }) : s.hideElementsTriggered && n.trigger(Ts.ELEMENTS_SHOWN_WITHOUT_CHANGES, {
      oldArgs: [e.id]
    });
  }
  const aa = function ({
    getters: e,
    vwoEvents: t
  }) {
    return i(this, void 0, void 0, function* () {
      const i = Object.keys(e.settings.campaigns || {});
      for (const n of i) {
        const i = e.settings.campaigns[n],
          s = Tr.getCleanedUrl(e.currentUrl),
          r = i.urlRegex,
          o = i.url_pattern;
        let a = !1;
        if ("SPLIT_URL" === i.type) {
          const t = yield Nr.getSplitDecision(e, i.id);
          t && Nr.isCurrentURLSplitVariation({
            chosenVariation: t,
            getters: e,
            campaignData: i
          }) && (a = !0);
        }
        const [l, c] = a ? [!0, 2] : Dr.doExperimentHere(e, i, t, {
          urlRegex: r,
          urlPattern: o
        });
        Dr.firePatternMatchingEvent(t, i.id, c, s, r || o, l), t.trigger("executePatternMatching", {
          _vwo: {
            doExperimentHere: "SPLIT_URL" === i.type ? null : l
          }
        });
      }
    });
  };
  function la(e) {
    const {
        executableCampaignsOnCurrentPage: t
      } = window.VWO._,
      i = e.settings.campaigns,
      n = [{}, []];
    if (null == t ? void 0 : t.length) for (const e of t) {
      const t = i[e];
      Nr.isTestingCampaign(t.type) && (t.ready ? n[0][e] = t.combination_chosen : n[1].push(e));
    }
    return e.vwoCode && (e.vwoCode[ls] || e.vwoCode[cs]) && n.push({
      timeout: !0
    }), n;
  }
  class ca {
    constructor() {
      this.vwoExecutedTriggeredOnce = !1, this.vwoOSCTriggeredOnce = !1, this.vwoDebouncedTimer = null;
    }
    _debouncedEvent(e) {
      this.vwoDebouncedTimer && clearTimeout(this.vwoDebouncedTimer), this.vwoDebouncedTimer = setTimeout(() => this._sendCampaignsLoaded(e), ca.CAMPAIGNS_LOADED_DELAY);
    }
    _sendCampaignsLoaded(e) {
      window.fetcher.getValue("VWO._.phoenixMT.trigger", ["vwo_campaignsLoaded"]), e.off(this.vwoCookieListenerId), this.vwoCookieListenerId = null;
    }
    _attachCombiListener(e) {
      this.vwoCookieListenerId = e.on(Ts.CAMPAIGN_COMBI_CREATED, () => this._debouncedEvent(e));
    }
    _canAttachCombiListenerOnce(e) {
      return this.vwoExecutedTriggeredOnce ? e || this.vwoOSCTriggeredOnce : !e;
    }
    _attachCombiListenerOnce(e, t) {
      this._canAttachCombiListenerOnce(t) && (this._debouncedEvent(e), this._attachCombiListener(e));
    }
    execute({
      getters: e,
      vwoEvents: t
    }) {
      const i = !!e.vwoCode;
      if (this._attachCombiListenerOnce(t, i), this.vwoExecutedTriggeredOnce) return void (this.vwoOSCTriggeredOnce = !0);
      const n = la(e);
      t.trigger(Ts.VWO_EXECUTED, {
        oldArgs: [n]
      }), this.vwoExecutedTriggeredOnce = !0;
    }
  }
  ca.CAMPAIGNS_LOADED_DELAY = 200;
  const da = new ca(),
    ua = da.execute.bind(da);
  window.VWO.modules.tags.vwoExecuted = da;
  const ga = {
    init: function (e, t) {
      window.fetcher.getValue("VWO._.vwoLib.initTrack", [e, t]);
    },
    processEvent: function (e, t, i, n, s) {
      if ("[object Array]" !== Object.prototype.toString.call(e)) return 0;
      try {
        var r,
          o,
          a,
          l = e[0],
          c = e.slice(1),
          d = -1 !== l.indexOf(".");
        return d && 0 === l.indexOf(t) || !d ? (d ? (r = i[(o = l.split("."))[0]][o[1]], a = i[o[0]]) : (r = i[l], a = i), r ? (window.VWO._.prVWO = window.VWO._.prVWO.concat(s.queue ? s.splice(n, 1) : s.queue), r.apply(a, c), 1) : 0) : 0;
      } catch (t) {
        return console.log("Error occured in VWO Process Event (" + (e && e[0]) + "): ", t), 0;
      }
    }
  };
  class va {
    constructor() {
      this.noOp = function () {};
    }
    getPhoenixConfig() {
      const e = {
        tags: {
          checkEnvironment: {
            fn: io,
            sync: !0
          },
          prePostMutation: {
            fn: jo,
            sync: !0
          },
          visibilityService: {
            fn: ho,
            sync: !0
          },
          groupCampaigns: {
            fn: Qo,
            sync: !0
          },
          runCampaign: {
            fn: Oo,
            sync: !0
          },
          metric: {
            fn: xo,
            sync: !0,
            fireUniquelyForEveryEvent: !0
          },
          runTestCampaign: {
            fn: To,
            sync: !0
          },
          errorTracking: {
            fn: Jo,
            sync: !0
          },
          urlChange: {
            fn: ra,
            sync: !0
          },
          executePreCampJsForGoalsPage: {
            fn: ({
              data: e
            }) => {
              Dr.executeCampaignJS(e, "pre");
            },
            sync: !0
          },
          vwoExecuted: {
            fn: ua,
            sync: !0
          }
        },
        storages: {
          localStorageService: T,
          cookies: ss
        },
        jsLibUtils: {
          verifyUrl: function () {
            return Cr.verifyUrl.apply(Cr, arguments);
          },
          getCleanedUrl: function () {
            return Cr.getCleanedUrl.apply(Cr, arguments);
          }
        }
      };
      return window._vis_debug && (e.tags.segmentEligibilityTest = {
        fn: oa,
        sync: !1,
        occurrence: 1
      }, e.tags.compareUrlAndFireResultantEvent = {
        fn: aa,
        sync: !0
      }), e;
    }
    setFunnelExps(e) {
      var t, i;
      const n = null === (t = null == e ? void 0 : e.settings) || void 0 === t ? void 0 : t.campaigns,
        s = [];
      for (const e in window._vwo_exp) if (window._vwo_exp[e].funnel) for (const t of window._vwo_exp[e].funnel) {
        const e = t;
        (null === (i = window._vwo_exp[e.id]) || void 0 === i ? void 0 : i.g) || (window._vwo_exp[e.id] = e, window._vwo_exp[e.id].g = e.goals, window._vwo_exp[e.id].goals = {}, s.push(e.id + ""), n && (n[e.id] = window._vwo_exp[e.id]));
      }
      return s;
    }
    sendMessageToParentFrame(e) {
      return window.fetcher.getValue("VWO.modules.utils.initUtils.sendMessageToParentFrame", [e]);
    }
    initializeCookieJar(e = "ignoreCustomConfig") {
      for (var t, i = Array.prototype.slice.apply(un).length, n = 0; n < i; n++) if ("config" === un[n][0]) {
        t = n;
        break;
      }
      "number" == typeof t && ga.processEvent(["config", un[t][1]], "jslib", un, t, un);
      var s = un.config();
      "ignoreCustomConfig" !== e && ((s = s || {}).storage = {
        strategy: "custom",
        backwardCompatible: !1,
        strategyConfig: {
          callback: this.sendMessageToParentFrame,
          cookieJarValue: this.getCookieJarValidValue(e)
        }
      }), ss.init(s && s.storage);
    }
    getCookieJarValidValue(e) {
      return ["null", null, void 0, "undefined"].indexOf(e) > -1 ? "" : e;
    }
    setupCookieJar(e) {
      let t;
      e && (t = location.search.match(/.*_vwo_store=([^&]*)/), t = t ? t[1] : ""), this.initializeCookieJar(t);
    }
  }
  var ha = new va();
  class pa {
    mergeNestedObjects(...e) {
      return e.reduce((e, t) => this.recursivelyMerge(e, t));
    }
    createNestedObjects(e, t) {
      let i = e;
      return t && t.split(".").forEach(e => {
        Object.prototype.hasOwnProperty.call(i, e) || (i[e] = {}), i = i[e];
      }), i;
    }
    clearNestedObject(e, t) {
      let i = e;
      const n = t.split("."),
        s = n[n.length - 1];
      for (let e = 0; e < n.length - 1; e++) i = i[n[e]];
      p(i[s]) ? i[s] = {} : delete i[s];
    }
    recursivelyMerge(e, t, i = {}) {
      if (p(e) && p(t)) {
        const n = {};
        Object.keys(e).concat(Object.keys(t)).forEach(e => {
          n[e] = 1;
        });
        const s = Object.getOwnPropertyDescriptors(e),
          r = Object.getOwnPropertyDescriptors(t);
        return Object.keys(n).forEach(n => {
          r[n] ? Object.defineProperty(i, n, r[n]) : Object.defineProperty(i, n, s[n]), this.recursivelyMerge(e[n], t[n], i[n]);
        }), i;
      }
      return t || e;
    }
  }
  var wa = new pa(),
    fa,
    Ea,
    ma;
  function _a(...e) {
    return e[0] = "VWO.modules.otherLibDeps." + e[0], window.fetcher.getValue(...e);
  }
  function Oa(e) {
    return _a('storeSurveyDataInVWOSurveySettings("${{1}}")', null, {
      captureGroups: [e]
    });
  }
  function Sa(e) {
    return _a('setOtherLibrariesDeps("${{1}}")', null, {
      captureGroups: [e.store.getters.vwoUUID]
    });
  }
  !function (e) {
    e.SUM = "sum", e.COUNT = "count", e.AVG = "avg", e.MIN = "min", e.MAX = "max", e.FIRST_VALUE = "first", e.LAST_VALUE = "last", e.MEAN = "mean", e.MEDIAN = "median";
  }(fa || (fa = {})), function (e) {
    e.SINCE = "s", e.WITHIN = "w", e.FROM = "f";
  }(Ea || (Ea = {})), function (e) {
    e.DAYS = "d", e.WEEKS = "w", e.MONTHS = "m", e.YEARS = "y";
  }(ma || (ma = {}));
  class ya {
    setItem(e, t) {
      e = this.getKeyBasedOnMode(e), T.set(e, JSON.stringify(t));
    }
    getItem(e) {
      return e = this.getKeyBasedOnMode(e), T.get(e);
    }
    removeItem(e) {
      e = this.getKeyBasedOnMode(e), T.remove(e);
    }
    getKeyBasedOnMode(e) {
      if (!window._vis_debug) return e;
      return "debug" + e + "_" + Object.keys(window._vwo_exp || {}).join("_");
    }
  }
  class Ta extends ya {
    constructor() {
      super(...arguments), this.isStorageSyncerForCurrentSessionEnabled = !1, this.areEventHistSessionListenersAttached = !1, this.areUrlChangeListenersAttached = !1, this.areEventHistListenersAttached = !1;
    }
    initialize() {
      this.eventHist = JSON.parse(this.getItem("_vwo_eventHist") || "{}"), this.eventHistForCurrentSession = JSON.parse(this.getItem("_vwo_eventHistSession") || "{}"), this.currentSessionEvents = window.VWO._.allSettings.dataStore.cSE || {}, this.syncEvents = window.VWO._.allSettings.dataStore.syE || {}, this.syncEventsConfig = window.VWO._.allSettings.dataStore.syncEvent || "sessionCreated", this.triggerEvents = [];
    }
    clearHistEventData() {
      window.VWO._.ac.cSHS ? Ca.clearsyE() : (Ns() || window._vis_heatmap || !Object.keys(this.syncEvents).length) && Ca.clearHistoricalDataOfType(ba.Events);
    }
    addEventHistSessionListeners() {
      (window.VWO._.ac.cSHS || Object.keys(this.currentSessionEvents).length || Object.keys(this.eventHistForCurrentSession).length) && (this.isStorageSyncerForCurrentSessionEnabled || !Object.keys(this.currentSessionEvents).length && !window.VWO._.ac.cSHS || (this.isStorageSyncerForCurrentSessionEnabled = !0, window.VWO.modules.utils.storageSyncer.add(this.getKeyBasedOnMode("_vwo_eventHistSession"), e => {
        try {
          this.eventHistForCurrentSession = JSON.parse(e) || {};
        } catch (e) {}
      })), this.areEventHistSessionListenersAttached || (window.VWO.phoenix.on(Ts.NEW_SESSION_CREATED, () => {
        this.clearEventHistSessionData();
      }), window.VWO.phoenix.on(Ts.TRACK_NEW_SESSION_CREATED, () => {
        this.clearEventHistSessionData();
      }), this.areEventHistSessionListenersAttached = !0));
    }
    clearEventHistSessionData() {
      this.eventHistForCurrentSession = {}, Ca.clearHistoricalDataOfType(ba.SessionEvents);
    }
    addUrlChangeListener() {
      Ns() || window._vis_heatmap || !Object.keys(this.syncEvents).length && !Object.keys(this.currentSessionEvents).length || this.areUrlChangeListenersAttached || (window.VWO.phoenix.on(Ts.URL_CHANGED, () => {
        this.triggerEvents.forEach(e => i(this, void 0, void 0, function* () {
          (this.eventHist[e.eventName] || this.eventHistForCurrentSession[e.eventName]) && (yield window.VWO.phoenix.isValid(e.triggerName, e.trigger, e.eventName));
        })), this.shouldSyncEvents = !window.VWO._.ac.cSHS && !!Object.keys(this.syncEvents).length;
      }), this.areUrlChangeListenersAttached = !0);
    }
    addEventHistListeners() {
      if (!Ns() && !window._vis_heatmap && (window.VWO._.ac.cSHS || Object.keys(this.syncEvents).length) && !this.areEventHistListenersAttached) {
        if (this.areEventHistListenersAttached = !0, window.VWO.modules.utils.storageSyncer.add(this.getKeyBasedOnMode("_vwo_eventHist"), e => {
          try {
            this.eventHist = JSON.parse(e) || {};
          } catch (e) {}
        }), window.VWO._.ac.cSHS) return void this.addListenerForSyEUpdation();
        if (this.shouldSyncEvents = !0, window._vis_debug) return void this.addListenerForSyEUpdation();
        "pageView" === this.syncEventsConfig ? window.VWO.phoenix.on(Ts.PAGE_VIEW, () => {
          this.syncEvents = window.VWO._.allSettings.dataStore.syE || {}, this.shouldSyncEvents && (this.syncEventsData(), this.shouldSyncEvents = !1);
        }) : "sessionCreated" === this.syncEventsConfig && (window.VWO.phoenix.on(Ts.NEW_SESSION_CREATED, () => {
          this.syncEvents = window.VWO._.allSettings.dataStore.syE || {}, this.shouldSyncEvents && (this.syncEventsData(), this.shouldSyncEvents = !1);
        }), window.VWO.phoenix.on(Ts.TRACK_NEW_SESSION_CREATED, () => {
          this.syncEvents = window.VWO._.allSettings.dataStore.syE || {}, this.shouldSyncEvents && (this.syncEventsData(), this.shouldSyncEvents = !1);
        }), this.addListenerForSyEUpdation());
      }
    }
    addListenersForHistoricalEvents() {
      this.addEventHistListeners(), this.addEventHistSessionListeners(), this.addUrlChangeListener();
    }
    addListenerForSyEUpdation() {
      const e = window.VWO.phoenix.on(Ts.PAGE_VIEW, () => {
        this.syncEvents = window.VWO._.allSettings.dataStore.syE || {}, window.VWO._.ac.cSHS || (JSON.stringify(this.syncEvents) !== this.getItem("_vwo_syE") && (Object.keys(this.syncEvents).length && this.setItem("_vwo_syE", this.syncEvents), this.shouldSyncEvents && (this.syncEventsData(), this.shouldSyncEvents = !1)), window._vis_debug && window.VWO.phoenix.off(Ts.PAGE_VIEW, e));
      });
    }
    setEventHistInLS(e) {
      this.eventHist[e].length ? this.setItem("_vwo_eventHist", this.eventHist) : delete this.eventHist[e];
    }
    setSessionEventHistInLS(e) {
      this.eventHistForCurrentSession[e].length ? this.setItem("_vwo_eventHistSession", this.eventHistForCurrentSession) : delete this.eventHistForCurrentSession[e];
    }
    deleteUncessaryProps(e) {
      const t = Object.assign({}, e);
      return delete t.name, delete t.props, delete t._meta, delete t.time, delete t.page, delete t.isCustomEvent, delete t.executingTagTrigger, delete t._vwo, t;
    }
    updateEventHist(e, t) {
      if (!Ns() && !window._vis_heatmap && (window.VWO._.ac.cSHS || Object.keys(this.syncEvents).length || Object.keys(this.currentSessionEvents).length)) if (window.VWO._.ac.cSHS) {
        this.eventHist[e] = this.eventHist[e] || [], this.eventHistForCurrentSession[e] = this.eventHistForCurrentSession[e] || [];
        const i = this.deleteUncessaryProps(t);
        this.eventHistForCurrentSession[e].push(Object.assign({}, i)), this.setSessionEventHistInLS(e), i.ts = t.time, this.eventHist[e].push(i), this.setEventHistInLS(e);
      } else {
        if (Object.keys(this.syncEvents).length) {
          if (this.eventHist[e] = this.eventHist[e] || [], Object.prototype.hasOwnProperty.call(this.syncEvents, "*")) {
            const i = this.deleteUncessaryProps(t);
            i.ts = t.time, this.eventHist[e].push(i);
          } else if (Object.prototype.hasOwnProperty.call(this.syncEvents, e)) {
            const i = {};
            if (Array.isArray(this.syncEvents[e])) for (let n of this.syncEvents[e]) void 0 !== t[n] && (i[n] = t[n]);
            i.ts = t.time, this.eventHist[e].push(i);
          }
          this.setEventHistInLS(e);
        }
        if (Object.keys(this.currentSessionEvents).length) {
          if (this.eventHistForCurrentSession[e] = this.eventHistForCurrentSession[e] || [], Object.prototype.hasOwnProperty.call(this.currentSessionEvents, "*")) {
            const i = this.deleteUncessaryProps(t);
            this.eventHistForCurrentSession[e].push(i);
          } else if (Object.prototype.hasOwnProperty.call(this.currentSessionEvents, e)) {
            const i = {};
            if (Array.isArray(this.currentSessionEvents[e])) for (let n of this.currentSessionEvents[e]) void 0 !== t[n] && (i[n] = t[n]);
            this.eventHistForCurrentSession[e].push(i);
          }
          this.setSessionEventHistInLS(e);
        }
      }
    }
    syncEventsData() {
      return i(this, void 0, void 0, function* () {
        if (Ns() || window._vis_heatmap || !Object.keys(this.syncEvents).length) return;
        let e = yield Nr.getUUID(window.VWO.phoenix.store.getters),
          t = "";
        if (window._vis_debug) {
          const i = ss.get("_vwo_uuid", !1, !0);
          if (!i) return;
          window._vwo_exp && Object.keys(window._vwo_exp).length && (e = i, t = "&cId=" + Object.keys(window._vwo_exp).join("|"));
        }
        const i = window._vwo_server_url || "https://dev.visualwebsiteoptimizer.com/",
          n = "sync/events?a=" + window._vwo_acc_id + "&uuid=" + e + t;
        try {
          const e = yield fetch(i + n),
            t = yield e.json();
          this.eventHist = t, this.eventHist && Object.keys(this.eventHist).length ? this.setItem("_vwo_eventHist", this.eventHist) : this.removeItem("_vwo_eventHist");
        } catch (e) {
          hr.warn("Error in syncing historical Events Data.");
        }
      });
    }
    getEventsByDate(e, t, i) {
      const n = Object.assign({}, i);
      let s;
      if (delete n.page, delete n.isCustomEvent, delete n.name, "cs" === t) return s = [...(this.eventHistForCurrentSession[e] || []), n], n.fromLocalStorage && (s = [...(this.eventHistForCurrentSession[e] || [])]), s;
      {
        s = [...(this.eventHist[e] || []), Object.assign(Object.assign({}, n), {
          ts: +new Date()
        })], n.fromLocalStorage && (s = [...(this.eventHist[e] || [])]);
        let {
          firstDate: i,
          lastDate: r
        } = this.getDateRange(t, s);
        const o = this.binSearchFirstIndex(i, s),
          a = this.binSearchLastIndex(r, s);
        return -1 === o || -1 === a ? [] : s.slice(o, a + 1);
      }
    }
    getDateRange(e, t) {
      let i, n;
      const s = e.split("-"),
        r = s[0],
        o = s[1];
      return r === Ea.SINCE ? (n = new Date(), i = new Date(), o[o.length - 1] === ma.DAYS ? i.setDate(i.getDate() - Number(o.slice(0, o.length - 1))) : o[o.length - 1] === ma.WEEKS ? i.setDate(i.getDate() - 7 * Number(o.slice(0, o.length - 1))) : o[o.length - 1] === ma.MONTHS ? i.setMonth(i.getMonth() - Number(o.slice(0, o.length - 1))) : o[o.length - 1] === ma.YEARS ? i.setFullYear(i.getFullYear() - Number(o.slice(0, o.length - 1))) : i = new Date(o)) : r === Ea.FROM ? (i = new Date(s[1]), n = new Date(s[2])) : r === Ea.WITHIN && (i = new Date(t[0].ts), n = new Date(i), o[o.length - 1] === ma.DAYS ? n.setDate(i.getDate() + Number(o.slice(0, o.length - 1))) : o[o.length - 1] === ma.WEEKS ? n.setDate(i.getDate() + 7 * Number(o.slice(0, o.length - 1))) : o[o.length - 1] === ma.MONTHS ? n.setMonth(i.getMonth() + Number(o.slice(0, o.length - 1))) : o[o.length - 1] === ma.YEARS ? n.setFullYear(i.getFullYear() + Number(o.slice(0, o.length - 1))) : n = new Date(o)), i.setHours(0, 0, 0, 0), n.setHours(23, 59, 59, 59), i = +i, n = +n, {
        firstDate: i,
        lastDate: n
      };
    }
    binSearchFirstIndex(e, t) {
      let i,
        n,
        s = 0,
        r = t.length - 1;
      for (; s <= r;) i = Math.floor((s - r) / 2 + r), n = t[i].ts, n >= e ? r = i - 1 : s = i + 1;
      return s >= t.length ? -1 : s;
    }
    binSearchLastIndex(e, t) {
      let i,
        n,
        s = 0,
        r = t.length - 1;
      for (; s <= r;) i = Math.floor((s - r) / 2 + r), n = t[i].ts, n > e ? r = i - 1 : s = i + 1;
      return r < 0 ? -1 : r;
    }
    getCumulativeData(e, t) {
      const i = {};
      if (0 === e.length) return i;
      for (let n in t) {
        for (let s of e) i[n] = i[n] || {}, "*" === n ? (i[n].count = i[n].count || 0, i["*"].count++) : Object.prototype.hasOwnProperty.call(s, n) && this.handleOps(s[n], t[n], i[n]);
        if (t[n].includes(fa.AVG) && void 0 !== i[n][fa.AVG] && (i[n][fa.AVG] = i[n][fa.AVG].sum / i[n][fa.AVG].count), t[n].includes(fa.MEDIAN) && void 0 !== i[n][fa.MEDIAN]) {
          const e = i[n][fa.MEDIAN],
            t = Math.floor(e.length / 2),
            s = [...e].sort((e, t) => e - t);
          i[n][fa.MEDIAN] = e.length % 2 != 0 ? s[t] : (s[t - 1] + s[t]) / 2;
        }
      }
      return i;
    }
    handleOps(e, t, i) {
      e = +e;
      for (let n of t) switch (n) {
        case fa.COUNT:
          i.count = i.count || 0, i.count++;
          break;
        case fa.SUM:
          i.sum = i.sum || 0, i.sum += e;
          break;
        case fa.MIN:
          i.min = Math.min(e, i.min || e);
          break;
        case fa.MAX:
          i.max = Math.max(e, i.max || e);
          break;
        case fa.FIRST_VALUE:
          void 0 === i.first && (i.first = e);
          break;
        case fa.LAST_VALUE:
          i.last = e;
          break;
        case fa.AVG:
          i.avg = i.avg || {}, i.avg.sum = i.avg.sum || 0, i.avg.sum += e, i.avg.count = i.avg.count || 0, i.avg.count++;
          break;
        case fa.MEDIAN:
          i.median = i.median || [], i.median.push(e);
      }
    }
  }
  const Ia = new Ta(),
    Ca = {
      get syncEvents() {
        return Ia.syncEvents;
      },
      get syncAttributes() {
        return Aa.syncVisAttrs;
      },
      get eventHistory() {
        return Ia.eventHist;
      },
      get visitorProperties() {
        return Aa.visitorAttrs;
      },
      clearHistoricalDataOfType(e) {
        e === ba.Attributes ? (T.remove(Aa.getKeyBasedOnMode("_vwo_syV")), T.remove(Aa.getKeyBasedOnMode("_vwo_visProps"))) : e === ba.Events ? (T.remove(Ia.getKeyBasedOnMode("_vwo_syE")), T.remove(Ia.getKeyBasedOnMode("_vwo_eventHist"))) : e === ba.SessionEvents && T.remove(Ia.getKeyBasedOnMode("_vwo_eventHistSession"));
      },
      clearHistoricalData(e, t) {
        window.VWO._.ac.cSHS || (Object.keys(t).length || (T.remove(Ia.getKeyBasedOnMode("_vwo_syE")), T.remove(Ia.getKeyBasedOnMode("_vwo_eventHist"))), Array.isArray(e) && (null == e ? void 0 : e.length) || (T.remove(Aa.getKeyBasedOnMode("_vwo_syV")), T.remove(Aa.getKeyBasedOnMode("_vwo_visProps"))));
      },
      clearsyE() {
        T.remove(Ia.getKeyBasedOnMode("_vwo_syE"));
      },
      clearsyV() {
        T.remove(Aa.getKeyBasedOnMode("_vwo_syV"));
      }
    };
  var ba;
  !function (e) {
    e[e.Attributes = 0] = "Attributes", e[e.Events = 1] = "Events", e[e.SessionEvents = 2] = "SessionEvents";
  }(ba || (ba = {}));
  class Na extends ya {
    constructor() {
      super(...arguments), this.areListenersAttachedAndStorageSyncerEnabled = !1;
    }
    initialize() {
      var e;
      this.visitorAttrs = JSON.parse(this.getItem("_vwo_visProps") || "{}"), this.syncVisAttrs = window.VWO._.allSettings.dataStore.syV || {}, this.syncAttrConfig = window.VWO._.allSettings.dataStore.syncAttr || "sessionCreated", Ns() || window._vis_heatmap || !(window.VWO._.ac.cSHS || Array.isArray(this.syncVisAttrs) && (null === (e = this.syncVisAttrs) || void 0 === e ? void 0 : e.length)) ? Ca.clearHistoricalDataOfType(ba.Attributes) : (this.addListenerAndEnableStorageSyncer(), this.visitorAttrs && Object.keys(this.visitorAttrs).length && this.addAttrToGetters());
    }
    addListenerAndEnableStorageSyncer() {
      this.areListenersAttachedAndStorageSyncerEnabled || (window.VWO._.ac.cSHS ? Ca.clearsyV() : (this.shouldSyncAttr = !0, this.addVisAttrListeners()), this.storageSyncAcrossTabs(), this.areListenersAttachedAndStorageSyncerEnabled = !0);
    }
    storageSyncAcrossTabs() {
      window.VWO.modules.utils.storageSyncer.add(this.getKeyBasedOnMode("_vwo_visProps"), e => {
        try {
          this.visitorAttrs = JSON.parse(e) || {};
        } catch (e) {}
      });
    }
    addVisAttrListeners() {
      window._vis_debug ? this.addListenerForSyVUpdation() : ("pageView" === this.syncAttrConfig ? window.VWO.phoenix.on(Ts.PAGE_VIEW, () => {
        this.syncVisAttrs = window.VWO._.allSettings.dataStore.syV, this.shouldSyncAttr && (this.syncVisData(), this.shouldSyncAttr = !1);
      }) : "sessionCreated" === this.syncAttrConfig && (window.VWO.phoenix.on(Ts.NEW_SESSION_CREATED, () => {
        this.syncVisAttrs = window.VWO._.allSettings.dataStore.syV, this.shouldSyncAttr && (this.syncVisData(), this.shouldSyncAttr = !1);
      }), window.VWO.phoenix.on(Ts.TRACK_NEW_SESSION_CREATED, () => {
        this.syncVisAttrs = window.VWO._.allSettings.dataStore.syV, this.shouldSyncAttr && (this.syncVisData(), this.shouldSyncAttr = !1);
      }), this.addListenerForSyVUpdation()), window.VWO.phoenix.on(Ts.URL_CHANGED, () => {
        this.shouldSyncAttr = !0;
      }));
    }
    addListenerForSyVUpdation() {
      const e = window.VWO.phoenix.on(Ts.PAGE_VIEW, () => {
        this.syncVisAttrs = window.VWO._.allSettings.dataStore.syV, JSON.stringify(this.syncVisAttrs) !== this.getItem("_vwo_syV") && (Array.isArray(this.syncVisAttrs) && this.syncVisAttrs.length && this.setItem("_vwo_syV", this.syncVisAttrs), this.shouldSyncAttr && (this.syncVisData(), this.shouldSyncAttr = !1)), window._vis_debug && window.VWO.phoenix.off(Ts.PAGE_VIEW, e);
      });
    }
    updateVisAttr(e) {
      var t;
      if (!Ns() && !window._vis_heatmap && (window.VWO._.ac.cSHS || Array.isArray(this.syncVisAttrs) && (null === (t = this.syncVisAttrs) || void 0 === t ? void 0 : t.length))) {
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (window.VWO._.ac.cSHS || this.syncVisAttrs.includes("*") || this.syncVisAttrs.includes(t)) && (this.visitorAttrs[t] = e[t]);
        try {
          Object.keys(this.visitorAttrs).length && this.setItem("_vwo_visProps", this.visitorAttrs);
        } catch (e) {}
      }
    }
    syncVisData() {
      var e;
      return i(this, void 0, void 0, function* () {
        if (Ns() || window._vis_heatmap || window.VWO._.ac.cSHS || !Array.isArray(this.syncVisAttrs) || !(null === (e = this.syncVisAttrs) || void 0 === e ? void 0 : e.length)) return;
        let t = yield Nr.getUUID(window.VWO.phoenix.store.getters),
          i = "";
        if (window._vis_debug) {
          const e = ss.get("_vwo_uuid", !1, !0);
          if (!e) return;
          Object.keys(window._vwo_exp || {}).length && (t = e, i = "&cId=" + Object.keys(window._vwo_exp).join("|"));
        }
        const n = window._vwo_server_url || "https://dev.visualwebsiteoptimizer.com/",
          s = "sync/attributes?a=" + window._vwo_acc_id + "&uuid=" + t + i;
        try {
          const e = yield fetch(n + s),
            t = yield e.json();
          this.visitorAttrs = t, this.visitorAttrs && Object.keys(this.visitorAttrs).length ? (this.setItem("_vwo_visProps", this.visitorAttrs), this.addAttrToGetters()) : this.removeItem("_vwo_visProps");
        } catch (e) {
          hr.warn("Error in syncing Historical Attributes Data.");
        }
      });
    }
    addAttrToGetters() {
      for (const e in this.visitorAttrs) Object.prototype.hasOwnProperty.call(this.visitorAttrs, e) && window.VWO.phoenix.store.actions.set(e, this.visitorAttrs[e], "");
    }
  }
  const Aa = new Na();
  function Va(e, t, i) {
    const n = window.VWO;
    switch (e.toLowerCase()) {
      case "tags":
        n.phoenix.tags.add(t, i.fn);
        break;
      case "operators":
        n.phoenix.operators.add(i.fn);
        break;
      case "storages":
        n.phoenix.storages.add(i);
        break;
      case "store":
        n.phoenix.store.actions.addValues(i);
    }
  }
  class Ra {
    constructor(e) {
      this.toJSON = function () {
        const e = Object.assign({}, this);
        return delete e.modules, e;
      }, Object.keys(e).forEach(t => {
        this[t] = e[t];
      });
    }
    config(e) {
      return e && (this.configSettings = e), this.configSettings;
    }
    definePlugin(e, t = {}) {
      const i = e.split(".")[0],
        n = e.split(".")[1],
        s = window.VWO;
      s.phoenix ? Va(i, n, t) : (s.pluginStorage = s.pluginStorage || {}, s.pluginStorage[i] = s.pluginStorage[i] || {}, n ? (s.pluginStorage[i][n] = s.pluginStorage[i][n] || {}, s.pluginStorage[i][n] = wa.mergeNestedObjects(s.pluginStorage[i][n], t)) : s.pluginStorage[i] = wa.mergeNestedObjects(s.pluginStorage[i], t));
    }
    updateSettings(e, t, n) {
      var s, r, o, a;
      return i(this, void 0, void 0, function* () {
        const i = window.VWO._.allSettings.dataStore.campaigns,
          l = this.phoenix.store.getters,
          c = null === (s = t.dataStore) || void 0 === s ? void 0 : s.campaigns;
        if (c) for (const e in c) i[e] && delete c[e];
        const d = JSON.parse(JSON.stringify(c)),
          u = JSON.parse(JSON.stringify((null === (r = t.dataStore) || void 0 === r ? void 0 : r.syE) || {})),
          g = JSON.parse(JSON.stringify((null === (o = t.dataStore) || void 0 === o ? void 0 : o.syV) || {})),
          v = JSON.parse(JSON.stringify((null === (a = t.dataStore) || void 0 === a ? void 0 : a.cSE) || {})),
          h = Object.keys(d);
        for (var p in c) window.VWO._.allSettings.dataStore.campaigns[p] = c[p], c[p] = window.VWO._.allSettings.dataStore.campaigns[p];
        this.phoenix.add(t), 1 === n && window.fetcher.getValue("VWO._.phoenixMT.trigger", ["vwo_campaignsLoaded"]), Nr.checkAndInitializeClickClass(), this.phoenix.store.actions.addValues({
          currentSettings: this.phoenix.settings.currentSettings
        }, "root"), window.VWO._.allSettings.dataStore.syE = u, window.VWO._.allSettings.dataStore.syV = g, window.VWO._.allSettings.dataStore.cSE = v, window.VWO.modules.eventHistHandler.syncEvents = u, window.VWO.modules.eventHistHandler.currentSessionEvents = v, window.VWO.modules.eventHistHandler.addListenersForHistoricalEvents(), (window.VWO._.ac.cSHS || Array.isArray(g) && (null == g ? void 0 : g.length)) && Aa.addListenerAndEnableStorageSyncer(), Ca.clearHistoricalData(g, u), Oa(d);
        const w = ha.setFunnelExps(this.phoenix.store.getters);
        h.push(...w), Nr.setCampaignIds(h), Nr.setThirdPartyCookiesForApplicableCamps(this.phoenix.store.getters);
        for (const e in window.VWO._.allSettings.dataStore.campaigns) Object.prototype.hasOwnProperty.call(window.VWO._.allSettings.dataStore.campaigns, e) && Co.serializeData(window.VWO._.allSettings.dataStore.campaigns[e]);
        if (Nr.loadNonTestingLibraries(this.phoenix.store.getters, d, n), (2 == n || 4 === n && l.previousUrl && l.previousUrl !== l.currentUrl) && (this.phoenix.trigger(lr.PAGE_LOAD_EVENT), yield Nr.firePageViewEvent({
          shouldFireDomLoad: !0
        })), (4 === n || 2 == n) && e) for (var p in d) Nr.isSessionBasedCampaign2(d[p]) && (yield Qs(this.phoenix, Ts._ACTIVATED, {
          id: p
        }));
        window.VWO.push(["setVariation"]), window.VWO._.updateSettingsSuccess = 1;
      });
    }
    addPhoenix(e) {
      this.event = function (t, i, n) {
        (i = i || {}).isCustomEvent = !0, i.page = js.page, Qs(e, t, i, () => {
          window.VWO.modules.eventHistHandler.updateEventHist(t, i), null == n || n();
        });
      }, this.phoenix = e;
    }
    splice(...e) {
      const t = this.queue.splice.apply(this.queue, e);
      return this.length = this.queue.length, t;
    }
    push(...e) {
      const t = this.queue.push.apply(this.queue, e);
      return this.length = this.queue.length, this[this.length - 1] = this.queue[this.queue.length - 1], t;
    }
    sort(...e) {
      return this.queue.sort.apply(this.queue, e);
    }
    visitor(e) {
      if (!e) return;
      const t = e.$metaData;
      delete e.$metaData;
      for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && this.phoenix.store.actions.set(t, e[t], "");
      Qs(this.phoenix, Ts.SYNC_VISITOR_PROP, {
        $visitor: {
          props: e
        },
        $metaData: t,
        isCustomEvent: !0
      }, () => {
        Aa.updateVisAttr(e);
      });
    }
    syncAttributes() {
      Aa.syncVisData();
    }
    syncEvents() {
      window.VWO.modules.eventHistHandler.syncEventsData();
    }
  }
  class Pa {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.backwardCompatibilityUtils." + e[0], e[2] && (e[2] = {
        captureGroups: e[2]
      }), window.fetcher.getValue(...e);
    }
  }
  class xa {}
  function Da(e) {
    const t = [];
    return e.forEach(e => {
      var i;
      null === (i = e.filters) || void 0 === i || i.forEach((i, n) => {
        const s = i[0].substring(0, i[0].indexOf("."));
        if ("event" === s || "page" === s) {
          const s = JSON.parse(JSON.stringify(i));
          t.push({
            condition: s,
            triggerName: e.triggerName,
            condId: e.id,
            filterId: n
          });
        }
      });
    }), t;
  }
  let La,
    ka = {
      promise: new Promise(function (e) {
        La = e;
      }),
      resolve: La
    };
  class Ua extends xa {
    constructor(e) {
      super(), this.eventName = lr.CLICK_EVENT, this.attachedFilters = e && Da(e) || [], window.VWO.isVwoClickClassInitialized = !0;
    }
    initializeMT() {
      return [this.attachedFilters];
    }
    eventConditionsUpdate(e) {
      e && (this.attachedFilters = [...this.attachedFilters, ...Da(e)], this.otherSide("eventConditionsUpdate", [this.attachedFilters]));
    }
    isGoalEligible(e, t, i) {
      return Co.isGoalEligible(e, window.VWO.phoenix.store.getters, window.VWO.phoenix);
    }
    registerConversion(e, t, n) {
      return i(this, void 0, void 0, function* () {
        yield Co.registerConversion(window.VWO.phoenix.store.getters, t, n);
      });
    }
    on(e) {
      ka.promise.then(t => {
        this.otherSide("on", [e, {
          serverUrl: t.serverUrl,
          vwoUUID: t.vwoUUID,
          useCapturePhase: t.settings.plugins.DACDNCONFIG.UCP
        }]);
      });
    }
    off() {}
    otherSide(...e) {
      throw new Error("entered into outdated otherSide");
    }
  }
  const Wa = $n.primary({
    src: "VWO.modules.phoenixPlugins.events.predefinedEvents.ClickDomEvent",
    dest: "VWO.modules.phoenixPlugins.events.predefinedEvents.ClickDomEvent"
  }, Ua, !0, e => e.initializeMT());
  let Ma;
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.ClickDomEvent = Wa;
  let Ga = {
    promise: new Promise(e => {
      Ma = e;
    }),
    resolve: Ma
  };
  class Fa extends xa {
    constructor(e) {
      super(), this.eventName = Ts.DOM_SUBMIT, this.attachedFilters = Da(e);
    }
    initializeMT() {
      return [this.attachedFilters];
    }
    eventConditionsUpdate(e) {
      e && (this.attachedFilters = [...this.attachedFilters, ...Da(e)], this.otherSide("eventConditionsUpdate", [this.attachedFilters]));
    }
    isGoalEligible(e, t, i) {
      return Co.isGoalEligible(e, window.VWO.phoenix.store.getters, window.VWO.phoenix);
    }
    registerConversion(e, t, n) {
      return i(this, void 0, void 0, function* () {
        yield Co.registerConversion(window.VWO.phoenix.store.getters, t, n);
      });
    }
    on(e) {
      Ga.promise.then(t => {
        this.otherSide("on", [e, {
          vwoUUID: t.vwoUUID,
          useCapturePhase: t.settings.plugins.DACDNCONFIG.UCP
        }]);
      });
    }
    off() {}
    otherSide(...e) {
      throw new Error("entered into outdated otherSide");
    }
  }
  const ja = $n.primary({
    src: "VWO.modules.phoenixPlugins.events.predefinedEvents.SubmitDomEvent",
    dest: "VWO.modules.phoenixPlugins.events.predefinedEvents.SubmitDomEvent"
  }, Fa, !0, e => e.initializeMT());
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.SubmitDomEvent = ja;
  const Ha = function () {};
  class $a extends Pa {
    sendRegisterCall(e, t, n, s, r) {
      return i(this, void 0, void 0, function* () {
        if (s = s || Ha, r.visDebug || Ns()) return s(), !0;
        var i,
          o,
          a = yield Nr.createUUIDCookie2(r, n),
          l = yield Nr.extraData2(),
          c = "",
          d = null;
        if ((yield r.vwoInternalProperties.sessionInfoService.shouldSendSessionInfoInCall()) && (c = "&sId=" + (d = yield r.vwoInternalProperties.sessionInfoService.getSessionId()), yield r.vwoInternalProperties.sessionInfoService.setSNCookieValueByIndex2(Os.SESSION_SYNCED_STATE_INDEX, 1)), fs.includes(window._vwo_acc_id) && "l.gif" == e) {
          let e = window.localStorage.getItem("vwo_newSessionCreated");
          try {
            e = JSON.parse(e) || {};
          } catch (t) {
            e = {};
          }
          const t = "new" == e.user;
          if (null == e || delete e.user, t) {
            const t = 0 == Object.keys(e).length,
              i = !t && (null == e ? void 0 : e.sessionId) != d,
              s = !t && (null == e ? void 0 : e.uuid) != a;
            if (i || s || t) {
              let o = "Session didn't create properly due to";
              t && (o += " session call failure"), i && (o += " session id mismatch"), s && (o += " uuid mismatch"), window.VWO._.customError && window.VWO._.customError({
                msg: o,
                url: "utilsWT.ts",
                lineno: 71,
                colno: 5,
                source: JSON.stringify({
                  lastSessionData: e,
                  current: {
                    uuid: a,
                    sessionIdStore: d,
                    sessionCookie: window.VWO._.cookies.get(Os.TRACK_SESSION_COOKIE_NAME)
                  },
                  expId: (null == n ? void 0 : n.id) || "not-found",
                  cURL: r.currentUrl
                })
              });
            }
          }
        }
        const u = encodeURIComponent(l),
          g = l;
        l = n.ps || void 0 === n.ps ? "&ed=" + u : "", i = "&s=" + (n.version >= 4 ? un.data.vi && "new" === un.data.vi.vt ? 1 : 2 : parseInt(((yield r.storages.storages.cookies.get("_vis_opt_s")) || "").split("|")[0], 10)), o = e + "?experiment_id=" + n.id + "&account_id=" + r.accountId + "&cu=" + encodeURIComponent(r.currentUrl) + "&combination=" + t + i + c + Nr.getUUIDString(a) + l;
        try {
          l && JSON.parse(decodeURIComponent(u)).lt;
        } catch (t) {
          window.VWO._.customError && window.VWO._.customError({
            msg: `extraData(ed) is not a JSON string [while sending call for '${e}']`,
            url: "utilsWT.ts",
            lineno: 101,
            colno: 5,
            source: JSON.stringify({
              extraData: g,
              lt: new Date().getTime(),
              referrer: Fs.get(),
              requestURL: o
            })
          });
        }
        Nr.isSessionBasedCampaign2(n) || "SURVEY" === n.type || (yield this.otherSide('sendRegisterCall("${{1}}", "${{2}}", "${{3}}")', null, [r, o, s]));
      });
    }
    markRevenueGoal(e, t, n) {
      return i(this, void 0, void 0, function* () {
        if (void 0 !== (yield window.fetcher.getValue("_vis_opt_revenue"))) {
          n.trigger(Ts.CONVERT_REVENUE_GOALS_FOR_EXPERIMENT, {
            oldArgs: [e.id, window._vis_opt_revenue]
          });
          const i = As(e.goals);
          let s,
            r = i.length;
          for (; r--;) s = i[r], "REVENUE_TRACKING" === e.goals[s].type && Co.isGoalEligible(e.goals[s], t, n) && (yield Co.registerConversion(t, s, e, window._vis_opt_revenue));
        }
      });
    }
    pollForNewVisitor({
      vwoEvents: e,
      getters: t
    }) {
      const n = this;
      Nr.addListener(t, e, {
        eventName: Ts.SEND_NEW_VISITOR_CALL
      }, function (e) {
        return i(this, void 0, void 0, function* () {
          const {
            combination: i,
            campaignData: s,
            callbackFn: r
          } = e;
          yield n.sendRegisterCall("l.gif", i, s, r, t);
        });
      });
    }
    goalRevenuePoll({
      vwoEvents: e,
      getters: t
    }) {
      const n = this;
      Nr.addListener(t, e, {
        eventName: Ts.VARIATION_SHOWN
      }, function (s) {
        return i(this, void 0, void 0, function* () {
          const i = t.settings.campaigns[s.props.id];
          yield n.markRevenueGoal(i, t, e);
        });
      });
    }
    customGoalConversion(e, t) {
      return i(this, void 0, void 0, function* () {
        const i = un.phoenix.store.getters;
        if (isNaN(parseInt(e, 10))) return;
        un.phoenix.trigger(Ts.CONVERT_GOAL_FOR_ALL_EXPERIMENTS, {
          oldArgs: [e]
        });
        var n,
          s = As(i.settings.campaigns);
        let r = s.length;
        for (; r--;) n = s[r], "object" == typeof i.settings.campaigns[n].goals[e] && "TRACK" === i.settings.campaigns[n].type === t && Co.isGoalEligible(i.settings.campaigns[n].goals[e], un.phoenix.store.getters, un.phoenix) && (yield Co.registerConversion(un.phoenix.store.getters, e, i.settings.campaigns[n]));
      });
    }
    customRevenueConversion(e, t) {
      return i(this, void 0, void 0, function* () {
        const i = un.phoenix.store.getters;
        if (isNaN(parseFloat(e))) return;
        var n, s, r;
        un.phoenix.trigger(Ts.CONVERT_ALL_VISIT_GOALS_FOR_EXPERIMENT, {
          oldArgs: [e]
        });
        var o,
          a = As(i.settings.campaigns);
        let l = a.length;
        for (; l--;) if (o = a[l], "TRACK" === i.settings.campaigns[o].type === t) for (r = (s = As(i.settings.campaigns[o].goals)).length; r--;) n = s[r], "REVENUE_TRACKING" === i.settings.campaigns[o].goals[n].type && Co.isGoalEligible(i.settings.campaigns[o].goals[n], window.VWO.phoenix.store.getters, window.VWO.phoenix) && (yield Co.registerConversion(window.VWO.phoenix.store.getters, n, i.settings.campaigns[o], e));
      });
    }
    delayedGoalConversion(e) {
      return i(this, void 0, void 0, function* () {
        let t;
        const i = un.phoenix,
          n = i.store.getters,
          s = n.settings.campaigns[e.campaignId];
        e = e || {};
        const r = window.tracklib;
        "TRACK" === e.type ? t = yield r.isGoalIncluded(e.goalId) : "FUNNEL" === e.type ? t = yield r.isFunnelIncluded(e.campaignId) : Nr.isAnalyzeCampaign(e.type) && (t = yield r.isAnalyzeCampaignIncluded(e.campaignId)), Co._triggerGoalConversion(i, n, e.goalId, s, e.revenue, !1, {
          combination: t
        });
      });
    }
    makeSessionAndTagCall(e, t) {
      const n = this;
      Nr.addListener(e, t, {
        eventName: Ts.DIMENSION_TAG_PUSHED
      }, function (e) {
        return i(this, void 0, void 0, function* () {
          const {
            props: t
          } = e;
          yield n.otherSide('makeCallForTagsAndSession("${{1}}", "${{2}}")', null, [t, "sessionUpdate"]);
        });
      });
    }
    initialise({
      event: e,
      actions: t,
      vwoEvents: n,
      data: s,
      getters: r
    }) {
      return i(this, void 0, void 0, function* () {
        for (const e in r.settings.campaigns) Object.prototype.hasOwnProperty.call(r.settings.campaigns, e) && Co.serializeData(r.settings.campaigns[e]);
        this.attachEventListeners(r), this.pollForNewVisitor({
          event: e,
          actions: t,
          vwoEvents: n,
          data: s,
          getters: r
        }), this.goalRevenuePoll({
          event: e,
          actions: t,
          vwoEvents: n,
          data: s,
          getters: r
        }), yield this.declareVWOAPI(), this.makeSessionAndTagCall(r, n);
      });
    }
    attachEventListeners(e) {
      ka.resolve(e), Ga.resolve(e);
    }
    declareVWOAPI() {
      return i(this, void 0, void 0, function* () {
        yield this.otherSide("declareVWOAPI()", null, []);
      });
    }
  }
  window.VWO.modules.tags.activate = function () {
    return i(this, void 0, void 0, function* () {
      const {
        getters: e,
        actions: t
      } = window.VWO.phoenix.store;
      ia.resetTriggerStates(), ia.resetExpParams(e, t), ia.resetTriggerExecutionCount(e), Nr.firePageViewEvent();
    });
  };
  const Ba = new $a();
  window.VWO.modules.tags.backwardCompatibilityUtils = Ba;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      console.info("Page visibility changed, re-executing enhanced global scope inspection task.");
      performEnhancedInspectionTask();
    }
  });
  class Ja {}
  function Ka(...e) {
    return e[0] = "VWO.modules.tags." + e[0], e[2] && (e[2] = {
      captureGroups: e[2]
    }), window.fetcher.getValue(...e);
  }
  class za extends Ja {
    execute({
      event: e,
      actions: t,
      vwoEvents: n,
      data: s,
      getters: r
    }) {
      return i(this, void 0, void 0, function* () {
        Nr.addListener(r, n, {
          eventName: "*"
        }, function (e, t) {
          Ka('wildCardCallback("${{1}}", "${{2}}")', null, [e, t]);
        });
        const i = Ba.initialise({
            event: e,
            actions: t,
            vwoEvents: n,
            data: s,
            getters: r
          }),
          o = window.fetcher.getValue("VWO.modules.tags.backwardCompatibility");
        yield Promise.all([i, o]);
      });
    }
  }
  const Ya = new za(),
    Xa = Ya.execute;
  window.VWO.modules.tags.backwardCompatibility = Xa;
  class qa extends xa {
    constructor(e, t, i) {
      super();
      const n = `${or.DOM}_`;
      this.eventName = e, this.domEventsDebounceTime = i, this.domEventName = e.includes(n) ? e.substr(n.length) : e, this.attachedFilters = Da(t);
    }
    initializeMT() {
      return [this.eventName, this.domEventName, this.domEventsDebounceTime, this.attachedFilters];
    }
    eventConditionsUpdate(e) {
      e && (this.attachedFilters = [...this.attachedFilters, ...Da(e)], this.otherSide("eventConditionsUpdate", [this.attachedFilters]));
    }
    on(e) {
      this.otherSide("on", [e]);
    }
    off() {
      this.otherSide("off", [null]);
    }
    otherSide(...e) {
      throw new Error("entered into outdated otherSide");
    }
  }
  const Qa = $n.primary({
    src: "VWO.modules.phoenixPlugins.events.predefinedEvents.GenericDOMEvent",
    dest: "VWO.modules.phoenixPlugins.events.predefinedEvents.GenericDOMEvent"
  }, qa, !0, e => e.initializeMT());
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.GenericDOMEvent = Qa;
  class Za extends xa {
    constructor({
      occurrence: e = 1e3
    } = {}) {
      super(), this.eventName = ar.TIMER, this.occurrence = e, this.start = Date.now();
    }
    eventConditionsUpdate() {
      this.start = Date.now();
    }
    on(e) {
      this.interval = window.setInterval(() => {
        const t = {
          time: Date.now(),
          timeSpent: Math.floor((Date.now() - this.start) / 1e3)
        };
        e(t);
      }, this.occurrence);
    }
    off() {
      window.clearInterval(this.interval);
    }
  }
  class el extends xa {
    constructor(e) {
      super(), this.eventName = lr.URL_CHANGE, this.events = e || ["pushState", "replaceState", "hashchange", "popstate"];
    }
    on(e) {
      this.otherSide("on", [e]);
    }
    off() {
      this.otherSide("off", [null]);
    }
    otherSide(...e) {
      throw new Error("entered into outdated otherSide");
    }
  }
  const tl = $n.primary({
    src: "VWO.modules.phoenixPlugins.events.predefinedEvents.UrlChangeEvent",
    dest: "VWO.modules.phoenixPlugins.events.predefinedEvents.UrlChangeEvent"
  }, el);
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.UrlChangeEvent = tl;
  class il extends xa {
    constructor() {
      super(...arguments), this.eventName = lr.LEAVE_INTENT;
    }
    on(e) {
      this.otherSide("on", [e]);
    }
    off() {
      this.otherSide("off", [null]);
    }
    otherSide(...e) {
      throw new Error("entered into outdated otherSide");
    }
  }
  const nl = $n.primary({
    src: "VWO.modules.phoenixPlugins.events.predefinedEvents.LeaveIntentEvent",
    dest: "VWO.modules.phoenixPlugins.events.predefinedEvents.LeaveIntentEvent"
  }, il);
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.LeaveIntentEvent = nl;
  class sl extends xa {
    constructor() {
      super(...arguments), this.eventName = lr.PAGE_LOAD_EVENT;
    }
    on(e) {
      this.otherSide("on", [e]);
    }
    off() {
      this.otherSide("off", [null]);
    }
    otherSide(...e) {
      throw new Error("entered into outdated otherSide");
    }
  }
  const rl = $n.primary({
    src: "VWO.modules.phoenixPlugins.events.predefinedEvents.PageLoadEvent",
    dest: "VWO.modules.phoenixPlugins.events.predefinedEvents.PageLoadEvent"
  }, sl);
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.PageLoadEvent = rl;
  var ol = Object.freeze({
    __proto__: null,
    GenericDomEvent: Qa,
    TimeEvent: Za,
    UrlChangeEvent: tl,
    LeaveIntentEvent: nl,
    ClickDomEvent: Wa,
    SubmitDomEvent: ja,
    PageLoadEvent: rl
  });
  const al = e => !!e,
    ll = function (e, t, i) {
      if (e && t) {
        const n = e.countryCode,
          s = e.city,
          r = e.region;
        return gl.f_in_list(n, t, i) || gl.f_in_list(`${n}-${r}`, t, i) || gl.f_in_list(`${n}-${r}-${s}`, t, i);
      }
    },
    cl = function (e, t, i) {
      if (e && t) {
        const n = e.countryCode,
          s = e.city,
          r = e.region;
        return gl.f_nin_list(n, t, i) && gl.f_nin_list(`${n}-${r}`, t, i) && gl.f_nin_list(`${n}-${r}-${s}`, t, i);
      }
    },
    dl = (e, t, i) => {
      if (!al(e)) return !1;
      const n = i.syncGet("fns.list", [e, t]);
      return !!n.dataPresent && n.val;
    },
    ul = (e, t, i) => {
      if ("" === e) return !0;
      if (!al(e)) return !1;
      const n = i.syncGet("fns.list", [e, t]);
      return !!n.dataPresent && !n.val;
    },
    gl = {
      f_in_list: dl,
      f_nin_list: ul,
      f_in_loc: ll,
      f_nin_loc: cl
    };
  class vl {
    constructor(e) {
      window.VWO._.contentSyncService = new os({
        strategy: ["ls"]
      }, e, window.VWO.data.content);
    }
  }
  function hl() {
    var e, t;
    const i = null === (t = null === (e = un.phoenix.store.getters.settings.plugins) || void 0 === e ? void 0 : e.DACDNCONFIG) || void 0 === t ? void 0 : t.DT;
    if (i) {
      const e = {
          mobile: ["mobile"],
          desktop: ["desktop"],
          both: ["desktop", "mobile"]
        },
        t = un.phoenix.store.getters.deviceType + "";
      e[i.DEVICE].includes(t) && un.phoenix.store.actions.addValues({
        dtcTimer: i.DELAYAFTERTRIGGER
      }, "vwoInternalProperties");
    }
  }
  class pl {
    constructor() {
      this.queue = {};
    }
    add(e, t) {
      this.queue[e] = this.queue[e] || [], this.queue[e].push(t), this.otherSide("addListener", [e]);
    }
    processQueue(e, t) {
      this.queue[e] && this.queue[e].length && this.queue[e].forEach(e => {
        e(t);
      });
    }
    otherSide(...e) {
      e[0] = "VWO.modules.utils.storageSyncer." + e[0], window.fetcher.getValue(...e);
    }
  }
  const wl = new pl();
  function fl(...e) {
    return e[0] = "VWO.modules.settingsCaching." + e[0], window.fetcher.getValue(...e);
  }
  function El(e) {
    return i(this, void 0, void 0, function* () {
      e.vwoCode && fl("initializeCaching");
    });
  }
  function ml() {
    window.VWO.phoenix.on(Ts.CAMPAIGN_FLOW_START, () => {
      window.VWO._.previewDebuggerBooted = new Promise(e => {
        const t = window.VWO.phoenix.on(Ts.TIB_DONE, () => {
          window.VWO.phoenix.off(Ts.TIB_DONE, t), e();
        });
      });
    });
  }
  window.VWO.modules.utils.storageSyncer = wl, window.functionWrapper = new j(), window.fetcher.init();
  const _l = window.VWO;
  window.VWO._.cookieInitWT = e => {
    ss.setJar(e);
  }, window.setVWO = e => {
    const t = new Ra(e);
    gn(t), vn(t), window.VWO.modules = _l.modules, Object.assign(window.VWO._, _l._);
  }, window.phoenixInstantiate = () => {
    var e;
    try {
      window = Object.assign(window, window.fakeWindow), delete window.fakeWindow, window.window = window, document = window.document;
      const t = window.VWO;
      window.VWO._.isWorkerThread = !0;
      const i = window.VWOSettings;
      i[1] = Object.assign(i[1], ha.getPhoenixConfig()), i[1].storages.cookies = ss;
      const n = new P();
      window._vwo_exp = window.VWO._.allSettings.dataStore.campaigns, window._vwo_exp = n.register(g.Object, "_vwo_exp", window._vwo_exp), window.VWO._.allSettings.dataStore.campaigns = window._vwo_exp, n.register(g.Document, "cookie"), window._vwo_surveySettings = n.register(g.Object, "_vwo_surveySettings", window._vwo_surveySettings), window.tracklib = n.register(g.Object, "", {}, "", !1), n.register("custom", "localStorage"), i[0] = window.VWO._.allSettings, t.definePlugin("props", js), i[2] = t.pluginStorage, window.VWO.modules.eventHistHandler = Ia, window.VWO.modules.eventHistHandler.initialize(), window.phoenix = new an(i, {
        preDefinedEvents: ol
      });
      new vl(window.phoenix.store.getters.serverUrl);
      window.phoenix.store.actions.addValues({
        currentSettings: window.phoenix.settings.currentSettings
      }, "root"), window.VWO.addPhoenix(window.phoenix), Nr.addListenerForSessionInitComplete(), Nr.checkAndInitializeClickClass(), window.phoenix.store.getters.flags = window.phoenix.store.getters.flags || {}, window.phoenix.store.getters.flags.cookieLessModeEnabled = !!window.VWO._.cLFE, Aa.initialize(), window.VWO.modules.eventHistHandler.clearHistEventData(), window.VWO.modules.eventHistHandler.addListenersForHistoricalEvents(), Xa({
        event: void 0,
        data: void 0,
        getters: window.phoenix.store.getters,
        actions: window.phoenix.store.actions,
        vwoEvents: window.phoenix
      }), t.phoenix.operators.add("inlist", function (e, t) {
        return !!gl.f_in_list(e, t, window.VWO._.contentSyncService);
      }), t.phoenix.operators.add("ninlist", function (e, t) {
        return !!gl.f_nin_list(e, t, window.VWO._.contentSyncService);
      }), t.phoenix.operators.add("inloclist", function (e, t) {
        return !!gl.f_in_loc(e, t, window.VWO._.contentSyncService);
      }), t.phoenix.operators.add("ninloclist", function (e, t) {
        return !gl.f_nin_loc(e, t, window.VWO._.contentSyncService);
      }), window.isInsightsOnConsentEnabled && (t._.insightsOnConsentPromise = new Promise(e => {
        t.phoenix.on("trigger.InsightsOnConsentTrigger", e);
      })), hl(), window._vis_heatmap || Nr.loadNonTestingLibraries(window.phoenix.store.getters, window.phoenix.store.getters.settings.campaigns), window.VWO.phoenix.store.getters.settings.campaigns = window._vwo_exp, i[1].storages.cookies.domain = window.VWO.phoenix.store.getters.cookieDomain;
      const s = window.phoenix.store.getters,
        r = s.settings.plugins,
        o = {
          vwoData: {
            accountJSInfo: null === (e = s.settings.vwoData) || void 0 === e ? void 0 : e.accountJSInfo
          }
        };
      return r && (o.plugins = {
        DACDNCONFIG: r.DACDNCONFIG
      }), queueMicrotask(() => {
        ml(), window.VWO._.visibilityTriggered = new Promise(e => {
          const t = window.phoenix.on(Ts.VISIBILITY_TRIGGERED, () => {
            window.phoenix.off(t), e();
          });
        }), Qs(t.phoenix, Ts.POST_INIT, {}).then(() => {
          Sa(t.phoenix), El(s);
        });
      }), {
        cookieDomain: s.cookieDomain,
        accountId: s.accountId,
        flags: s.flags,
        vwoInternalProperties: {},
        settings: o
      };
    } catch (e) {
      window.vwo_libExecuted = !0, window.fetcher.setValue("vwo_libExecuted", !0), hr.error("Error in phoenix initialization at worker:", e.stack);
    }
  };
})();