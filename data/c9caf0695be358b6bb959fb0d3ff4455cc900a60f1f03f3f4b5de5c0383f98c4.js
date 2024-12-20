window.lpTag = window.lpTag || {};
let extensionsChecked = [];
lpTag.firstParty = !0;
window.lpTag = window.lpTag || {};
window.lpTag.lzString = window.lpTag.lzString || function () {
  var y = String.fromCharCode,
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
    o = {};
  function a(e, t) {
    if (!o[e]) {
      o[e] = {};
      for (var n = 0; n < e.length; n++) o[e][e.charAt(n)] = n;
    }
    return o[e][t];
  }
  var i = {
    compressToBase64: function (e) {
      if (null == e) return "";
      var t = i._compress(e, 6, function (e) {
        return n.charAt(e);
      });
      switch (t.length % 4) {
        default:
        case 0:
          return t;
        case 1:
          return t + "===";
        case 2:
          return t + "==";
        case 3:
          return t + "=";
      }
    },
    decompressFromBase64: function (t) {
      return null == t ? "" : "" == t ? null : i._decompress(t.length, 32, function (e) {
        return a(n, t.charAt(e));
      });
    },
    compressToUTF16: function (e) {
      return null == e ? "" : i._compress(e, 15, function (e) {
        return y(e + 32);
      }) + " ";
    },
    decompressFromUTF16: function (t) {
      return null == t ? "" : "" == t ? null : i._decompress(t.length, 16384, function (e) {
        return t.charCodeAt(e) - 32;
      });
    },
    compressToUint8Array: function (e) {
      for (var t = i.compress(e), n = new Uint8Array(2 * t.length), r = 0, o = t.length; r < o; r++) {
        var a = t.charCodeAt(r);
        n[2 * r] = a >>> 8;
        n[2 * r + 1] = a % 256;
      }
      return n;
    },
    decompressFromUint8Array: function (e) {
      if (null == e) return i.decompress(e);
      for (var t = new Array(e.length / 2), n = 0, r = t.length; n < r; n++) t[n] = 256 * e[2 * n] + e[2 * n + 1];
      var o = [];
      t.forEach(function (e) {
        o.push(y(e));
      });
      return i.decompress(o.join(""));
    },
    compressToEncodedURIComponent: function (e) {
      return null == e ? "" : i._compress(e, 6, function (e) {
        return r.charAt(e);
      });
    },
    decompressFromEncodedURIComponent: function (t) {
      if (null == t) return "";
      if ("" == t) return null;
      t = t.replace(/ /g, "+");
      return i._decompress(t.length, 32, function (e) {
        return a(r, t.charAt(e));
      });
    },
    compress: function (e) {
      return i._compress(e, 16, function (e) {
        return y(e);
      });
    },
    _compress: function (e, t, n) {
      if (null == e) return "";
      for (var r, o, a, i, s = {}, l = {}, c = "", u = 2, p = 3, f = 2, g = [], d = 0, m = 0, h = 0; h < e.length; h += 1) {
        a = e.charAt(h);
        if (!Object.prototype.hasOwnProperty.call(s, a)) {
          s[a] = p++;
          l[a] = !0;
        }
        i = c + a;
        if (Object.prototype.hasOwnProperty.call(s, i)) c = i;else {
          if (Object.prototype.hasOwnProperty.call(l, c)) {
            if (c.charCodeAt(0) < 256) {
              for (r = 0; r < f; r++) {
                d <<= 1;
                if (m == t - 1) {
                  m = 0;
                  g.push(n(d));
                  d = 0;
                } else m++;
              }
              o = c.charCodeAt(0);
              for (r = 0; r < 8; r++) {
                d = d << 1 | 1 & o;
                if (m == t - 1) {
                  m = 0;
                  g.push(n(d));
                  d = 0;
                } else m++;
                o >>= 1;
              }
            } else {
              o = 1;
              for (r = 0; r < f; r++) {
                d = d << 1 | o;
                if (m == t - 1) {
                  m = 0;
                  g.push(n(d));
                  d = 0;
                } else m++;
                o = 0;
              }
              o = c.charCodeAt(0);
              for (r = 0; r < 16; r++) {
                d = d << 1 | 1 & o;
                if (m == t - 1) {
                  m = 0;
                  g.push(n(d));
                  d = 0;
                } else m++;
                o >>= 1;
              }
            }
            if (0 == --u) {
              u = Math.pow(2, f);
              f++;
            }
            delete l[c];
          } else {
            o = s[c];
            for (r = 0; r < f; r++) {
              d = d << 1 | 1 & o;
              if (m == t - 1) {
                m = 0;
                g.push(n(d));
                d = 0;
              } else m++;
              o >>= 1;
            }
          }
          if (0 == --u) {
            u = Math.pow(2, f);
            f++;
          }
          s[i] = p++;
          c = String(a);
        }
      }
      if ("" !== c) {
        if (Object.prototype.hasOwnProperty.call(l, c)) {
          if (c.charCodeAt(0) < 256) {
            for (r = 0; r < f; r++) {
              d <<= 1;
              if (m == t - 1) {
                m = 0;
                g.push(n(d));
                d = 0;
              } else m++;
            }
            o = c.charCodeAt(0);
            for (r = 0; r < 8; r++) {
              d = d << 1 | 1 & o;
              if (m == t - 1) {
                m = 0;
                g.push(n(d));
                d = 0;
              } else m++;
              o >>= 1;
            }
          } else {
            o = 1;
            for (r = 0; r < f; r++) {
              d = d << 1 | o;
              if (m == t - 1) {
                m = 0;
                g.push(n(d));
                d = 0;
              } else m++;
              o = 0;
            }
            o = c.charCodeAt(0);
            for (r = 0; r < 16; r++) {
              d = d << 1 | 1 & o;
              if (m == t - 1) {
                m = 0;
                g.push(n(d));
                d = 0;
              } else m++;
              o >>= 1;
            }
          }
          if (0 == --u) {
            u = Math.pow(2, f);
            f++;
          }
          delete l[c];
        } else {
          o = s[c];
          for (r = 0; r < f; r++) {
            d = d << 1 | 1 & o;
            if (m == t - 1) {
              m = 0;
              g.push(n(d));
              d = 0;
            } else m++;
            o >>= 1;
          }
        }
        if (0 == --u) {
          u = Math.pow(2, f);
          f++;
        }
      }
      o = 2;
      for (r = 0; r < f; r++) {
        d = d << 1 | 1 & o;
        if (m == t - 1) {
          m = 0;
          g.push(n(d));
          d = 0;
        } else m++;
        o >>= 1;
      }
      for (;;) {
        d <<= 1;
        if (m == t - 1) {
          g.push(n(d));
          break;
        }
        m++;
      }
      return g.join("");
    },
    decompress: function (t) {
      return null == t ? "" : "" == t ? null : i._decompress(t.length, 32768, function (e) {
        return t.charCodeAt(e);
      });
    },
    _decompress: function (e, t, n) {
      for (var r, o, a, i, s, l, c = [], u = 4, p = 4, f = 3, g = "", d = [], m = {
          val: n(0),
          position: t,
          index: 1
        }, h = 0; h < 3; h += 1) c[h] = h;
      o = 0;
      i = Math.pow(2, 2);
      s = 1;
      for (; s != i;) {
        a = m.val & m.position;
        m.position >>= 1;
        if (0 == m.position) {
          m.position = t;
          m.val = n(m.index++);
        }
        o |= (0 < a ? 1 : 0) * s;
        s <<= 1;
      }
      switch (o) {
        case 0:
          o = 0;
          i = Math.pow(2, 8);
          s = 1;
          for (; s != i;) {
            a = m.val & m.position;
            m.position >>= 1;
            if (0 == m.position) {
              m.position = t;
              m.val = n(m.index++);
            }
            o |= (0 < a ? 1 : 0) * s;
            s <<= 1;
          }
          l = y(o);
          break;
        case 1:
          o = 0;
          i = Math.pow(2, 16);
          s = 1;
          for (; s != i;) {
            a = m.val & m.position;
            m.position >>= 1;
            if (0 == m.position) {
              m.position = t;
              m.val = n(m.index++);
            }
            o |= (0 < a ? 1 : 0) * s;
            s <<= 1;
          }
          l = y(o);
          break;
        case 2:
          return "";
      }
      r = c[3] = l;
      d.push(l);
      for (;;) {
        if (e < m.index) return "";
        o = 0;
        i = Math.pow(2, f);
        s = 1;
        for (; s != i;) {
          a = m.val & m.position;
          m.position >>= 1;
          if (0 == m.position) {
            m.position = t;
            m.val = n(m.index++);
          }
          o |= (0 < a ? 1 : 0) * s;
          s <<= 1;
        }
        switch (l = o) {
          case 0:
            o = 0;
            i = Math.pow(2, 8);
            s = 1;
            for (; s != i;) {
              a = m.val & m.position;
              m.position >>= 1;
              if (0 == m.position) {
                m.position = t;
                m.val = n(m.index++);
              }
              o |= (0 < a ? 1 : 0) * s;
              s <<= 1;
            }
            c[p++] = y(o);
            l = p - 1;
            u--;
            break;
          case 1:
            o = 0;
            i = Math.pow(2, 16);
            s = 1;
            for (; s != i;) {
              a = m.val & m.position;
              m.position >>= 1;
              if (0 == m.position) {
                m.position = t;
                m.val = n(m.index++);
              }
              o |= (0 < a ? 1 : 0) * s;
              s <<= 1;
            }
            c[p++] = y(o);
            l = p - 1;
            u--;
            break;
          case 2:
            return d.join("");
        }
        if (0 == u) {
          u = Math.pow(2, f);
          f++;
        }
        if (c[l]) g = c[l];else {
          if (l !== p) return null;
          g = r + r.charAt(0);
        }
        d.push(g);
        c[p++] = r + g.charAt(0);
        r = g;
        if (0 == --u) {
          u = Math.pow(2, f);
          f++;
        }
      }
    }
  };
  return i;
}();
!function (r) {
  var t = {
      ie: 0,
      chrome: 1,
      safari: 2,
      firefox: 3,
      line: 4,
      chromeios: 5,
      oldie: 6,
      blackberry: 7,
      opera: 8,
      android: 9,
      unknown: 10
    },
    n = {
      SET: "set",
      GET: "get",
      MULTIGET: "multiget",
      REMOVE: "remove",
      TOUCH: "touch",
      SELECT_STORAGE: "selectStorage"
    },
    o = lpTag.lzString;
  function a(e) {
    return "string" == typeof e && 0 === e.replace(/\s/gi, "").length;
  }
  function i(e, t, n) {
    if (r.lpTag && lpTag.log && e) {
      n = n || "SecureStorageFrame";
      lpTag.log(e, t, n);
    }
  }
  function s(e) {
    var t = e;
    if ("string" == typeof e) try {
      t = JSON.parse(e);
    } catch (e) {}
    return t;
  }
  function e() {
    var e = t.unknown;
    r.addEventListener ? l(/MSIE|Trident|IEMobile/) ? e = t.ie : l(/Line/) ? e = t.line : l(/CriOS/) ? e = t.chromeios : l(/Opera|OPR/) ? e = t.opera : l(/Chrome/) ? e = t.chrome : l(/ BlackBerry /) ? e = t.blackberry : l(/Firefox/) ? e = t.firefox : l(/Safari/) && (function () {
      var e = !0;
      if (lpTag && lpTag.device) return lpTag.device.os() === lpTag.device.osEnum.windows;
      (l(/(Mac OS)/g) && !l(/(Windows Phone|iPhone|iPod|mobile|Mobile|IEMobile)/g) || l(/(android|Android)/g) || l(/(iPhone|iPod|iPad)/g) || l(/(Linux)/g)) && (e = !1);
      return e;
    }() || l(/(Mac OS)/g) || l(/(iPhone|iPod|iPad)/g)) ? e = t.safari : l(/(android|Android)/g) && (e = t.android) : e = t.oldie;
    return e;
  }
  function l(e) {
    return !!navigator.userAgent.match(e);
  }
  r.lpTag = r.lpTag || {};
  r.lpTag.secureStorageUtils = {
    log: {
      error: function (e, t) {
        i(e, "error", t);
      },
      log: function (e, t) {
        i(e, "log", t);
      }
    },
    getUrlParameters: function (e) {
      for (var t, n = (e = e || location.search).substr(1).split("&"), r = {}, o = 0; o < n.length; ++o) (t = n[o].split("=")).length < 2 || (r[decodeURIComponent(t[0])] = decodeURIComponent(t[1].replace(/\+/g, " ")));
      return r;
    },
    JSONParse: s,
    runCallback: function (e, t, n) {
      if ("function" == typeof e) try {
        return e.call(n || null, t);
      } catch (e) {}
    },
    bindEvent: function (e, t, n) {
      r.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n);
    },
    unBindEvent: function (e, t, n) {
      r.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n);
    },
    hasProperties: function (e) {
      var t,
        n = !1;
      for (t in e) if (e.hasOwnProperty(t)) {
        n = !0;
        break;
      }
      return n;
    },
    decodeItem: function (e) {
      var t;
      if (void 0 !== e) try {
        t = (e = decodeURIComponent(e)) && !a(e) ? s(e) : e;
      } catch (e) {}
      return t;
    },
    encodeItem: function (e) {
      var t;
      try {
        t = JSON.stringify(e);
        t = encodeURIComponent(t);
      } catch (e) {}
      return t;
    },
    isEmptyString: a,
    isSameValue: function (e, t) {
      return "object" == typeof e && "object" == typeof t ? JSON.stringify(e) === JSON.stringify(t) : e === t;
    },
    parseInteger: function (e) {
      e += "";
      return "" + (e = parseInt(e, 10)) != "NaN" ? e : null;
    },
    getUID: function () {
      return "tttttttt-tttt-4ttt-fttt-t7ttttttttttt".replace(/[tf]/g, function (e) {
        var t = 16 * Math.random() | 0;
        return ("t" == e ? t : 3 & t | 8).toString(16);
      }) + "-" + Math.floor(1e5 * Math.random());
    },
    removeKeyFromObj: function (e, t) {
      if (e && void 0 !== e[t]) {
        e[t] = null;
        delete e[t];
      }
      return e;
    },
    cloneObj: function (e) {
      return e && "object" == typeof e && JSON.parse(JSON.stringify(e));
    },
    isIE: function () {
      return lpTag && lpTag.device ? lpTag.device.browser() === lpTag.device.browserEnum.ie : e() === t.ie;
    },
    isSafari: function () {
      return lpTag && lpTag.device ? lpTag.device.browser() === lpTag.device.browserEnum.safari : e() === t.safari;
    },
    isTouchRequest: function (e) {
      return e && e.type === n.TOUCH;
    },
    isSetRequest: function (e) {
      return e && e.type === n.SET;
    },
    isSelectStorageRequest: function (e) {
      return e && e.type === n.SELECT_STORAGE;
    },
    lzwEncode: function (e) {
      return o.compressToEncodedURIComponent(e);
    },
    lzwDecode: function (e) {
      return o.decompressFromEncodedURIComponent(e);
    },
    isChrome: function () {
      return lpTag && lpTag.device ? lpTag.device.browser() === lpTag.device.browserEnum.chrome : e() === t.chrome;
    },
    requestTypes: n
  };
}(window);
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
let globalVars = Object.keys(window);
lpTag.taglets.jsonp = lpTag.taglets.jsonp || function (c) {
  var s,
    e,
    u = {
      callback: "cb",
      encoding: "UTF-8",
      timeout: 1e4,
      retries: 2,
      metricsCount: 100,
      metricsTimeout: 6e4
    },
    p = {
      ERROR: "ERROR",
      DEBUG: "DEBUG",
      INFO: "INFO"
    },
    o = !0,
    a = 2083,
    n = "lpCb",
    f = {},
    l = 0,
    g = 0,
    d = 0,
    t = 0,
    r = 0,
    m = [],
    h = {},
    i = S(!0).length,
    y = "jsonp";
  function v() {
    if (lpTag && lpTag.taglets && lpTag.taglets.lpAjax) try {
      lpTag.taglets.lpAjax.addTransport(y, U);
    } catch (e) {}
    P();
  }
  function T(e) {
    var t = !1;
    if (o && e && e.url) {
      var n,
        r = !1;
      e.callbackName && "string" == typeof e.callbackName && (h[e.callbackName] || c[e.callbackName]) && (r = !0);
      try {
        n = function (e) {
          var t = i;
          e.callbackName && "string" == typeof e.callbackName && (t = e.callbackName.length);
          return 4 + (e.callback || u.callback).length + e.url.length + t + E(e.data).length + E(e.query).length;
        }(e);
      } catch (e) {
        I("Could not evaluate the length  of the request, e=" + e, p.ERROR, "isValidRequest");
        t = !1;
      }
      void 0 !== n && n < a && !r && (t = !0);
    }
    return t;
  }
  function b(e) {
    var t;
    if (!T(e)) {
      I("URL request was too long or static callback name already exists, url: " + t, p.ERROR, "issueCall");
      R();
      e && e.error && j(p.ERROR, e.error, k(600, "Transport - JSONP - unable to run request: " + e.url), e.context);
      return !1;
    }
    (e = function (e) {
      "string" == typeof e && (e = {
        url: e
      });
      if (!e.url) return !1;
      e.encoding = e.encoding || u.encoding;
      e.callback = e.callback || u.callback;
      e.retries = ("number" == typeof e.retries ? e : u).retries;
      e.timeout = e.timeout || u.timeout;
      return e;
    }(e)).callbackName && "string" == typeof e.callbackName ? e.retries = 0 : e.callbackName = n + S();
    t = e.url + (-1 < e.url.indexOf("?") ? "&" : "?") + e.callback + "=" + e.callbackName;
    e.data && (t += "&" + E(e.data));
    e.query && (t += "&" + E(e.query));
    e.callUrl = t;
    if (function (e) {
      var t = !1,
        n = new RegExp(/(http{1}s{0,1}?:\/\/)([^\/\?]+)(\/?)/gi);
      n = 0 === e.callUrl.indexOf("http") ? n.exec(e.callUrl) : n.exec(c.location.href);
      if (n && 3 <= n.length && "" !== n[2]) {
        n = n[2].toLowerCase();
        e.domainMatch = n;
        f[n] = f[n] || [];
        f[n].inFlight = f[n].inFlight || 0;
        f[n].push(e);
        t = !0;
        g += 1;
        I("buffered URL: " + e.callUrl, p.DEBUG, "lpTag.taglets.jsonp.bufferRequest");
      } else I("NO MATCH for URL: " + e.callUrl, p.ERROR, "lpTag.taglets.jsonp.bufferRequest");
      return t;
    }(e)) {
      var l = e;
      if (h[l.callbackName]) {
        R();
        N(k(409, {
          message: "This callbackName is already in a pending request and can't be serviced",
          id: 409,
          name: "CONFLICT"
        }), l);
      } else c[l.callbackName] = function (e, t) {
        var n = l,
          r = n.startTime,
          o = n.url,
          a = t;
        if (r) {
          i = new Date().getTime();
          i = i - r;
          m.push({
            rd: i,
            ts: r,
            url: o,
            method: "GET",
            statusCode: a ? 400 : 200
          });
          m.length >= u.metricsCount && A();
        }
        var i = n.scriptId;
        if (i = document.getElementById(i)) try {
          i.parentNode.removeChild(i);
        } catch (e) {
          I("error when removing script", p.ERROR, "removeScript");
        }
        r = n.domainMatch;
        f[r].inFlight = f[r].inFlight - 1;
        d -= 1;
        var s = n.callbackName,
          o = t;
        h[s] = null;
        delete h[s];
        if (!0 === o) c[s] = function () {
          c[s] = null;
          try {
            delete c[s];
          } catch (e) {}
        };else {
          c[s] = null;
          try {
            delete c[s];
          } catch (e) {}
        }
        if (t) {
          if (n.callbackName) {
            n.callbackName = null;
            delete n.callbackName;
          }
          N(e, n);
        } else {
          D(n);
          j("callback", n.success, e, n.context);
          n = null;
          C();
        }
      };
      C();
    } else I("URL request was too long and was not sent, url: " + t, p.ERROR, "issueCall");
    return !0;
  }
  function w() {
    var e,
      t = {};
    for (e in u) u.hasOwnProperty(e) && (t[e] = u[e]);
    return t;
  }
  function S(e) {
    var t = 99999,
      e = e ? t + "x" + t : Math.round(Math.random() * t) + "x" + Math.round(Math.random() * t);
    return e;
  }
  function k(e, t) {
    return {
      statusCode: e,
      responseCode: e,
      error: t,
      body: "ERROR"
    };
  }
  function E(e) {
    var t = "";
    if ("string" == typeof e) t += e;else {
      var n,
        r,
        o = !0;
      for (n in e) {
        "object" == typeof e[n] ? r = function (e) {
          var t;
          if ("function" == typeof Array.prototype.toJSON) {
            var n = Array.prototype.toJSON;
            delete Array.prototype.toJSON;
            try {
              t = JSON.stringify(e);
            } catch (e) {
              Array.prototype.toJSON = n;
              throw e;
            }
            Array.prototype.toJSON = n;
          } else t = JSON.stringify(e);
          return t;
        }(e[n]) : "function" != typeof e[n] && (r = e[n]);
        if (void 0 !== r) {
          o || (t += "&");
          t += encodeURIComponent(n) + "=" + encodeURIComponent(r);
          o = !1;
        }
      }
    }
    return t;
  }
  function C() {
    for (var e in f) if (f.hasOwnProperty(e)) for (var t = f[e], n = !1; !n && t.inFlight < 6 && 0 < t.length;) {
      var r = t.shift();
      if (r) {
        I("Sent URL: " + r.callUrl, p.DEBUG, "lpTag.taglets.jsonp.sendRequests");
        r.scriptId = function (e, t, n) {
          var r = "scr" + Math.round(999999999 * Math.random()) + "_" + Math.round(999999999 * Math.random()),
            o = document.createElement("script");
          o.setAttribute("type", "text/javascript");
          o.setAttribute("charset", t);
          o.onload = function () {
            h[n] && (h[n].loadTime = new Date());
            this.onload = this.onerror = this.onreadystatechange = null;
          };
          c.addEventListener ? o.onerror = function () {
            h[n] && (h[n].loadTime = new Date());
            this.onload = this.onerror = this.onreadystatechange = null;
          } : o.onreadystatechange = function () {
            if (this.readyState && ("loaded" === this.readyState || "complete" === this.readyState)) {
              h[n] && (h[n].loadTime = new Date());
              this.onload = this.onerror = this.onreadystatechange = null;
            }
          };
          o.setAttribute("src", e);
          o.setAttribute("id", r);
          document.getElementsByTagName("head")[0].appendChild(o);
          s = s || setTimeout(O, 1e3);
          o = null;
          return r;
        }(r.callUrl, r.encoding, r.callbackName);
        r.startTime = new Date().getTime();
        i = a = o = void 0;
        var o = e,
          a = r.callbackName,
          i = r.timeout;
        f[o].inFlight = f[o].inFlight + 1;
        h[a] = {
          launchTime: new Date(),
          timeout: i
        };
        d += 1;
        l += 1;
        g -= 1;
      } else n = !0;
    }
  }
  function O() {
    clearTimeout(s);
    s = null;
    var e,
      t = new Date();
    for (e in h) if (h.hasOwnProperty(e) && h[e].launchTime) {
      var n = t - h[e].launchTime;
      (h[e].loadTime || n > h[e].timeout) && c[e].apply(null, [k(408, {
        message: "Request timed out",
        name: "timeout"
      }), !0]);
    }
    0 < d && (s = setTimeout(O, 1e3));
  }
  function R() {
    t += 1;
  }
  function A() {
    var e;
    if (lpTag.taglets.lpAjax && lpTag.taglets.lpAjax.publishMetrics && 0 < m.length) {
      e = {
        tags: [{
          transport: y
        }],
        metrics: m
      };
      lpTag.taglets.lpAjax.publishMetrics(e);
      m.length = 0;
    }
    P();
  }
  function P() {
    e && clearTimeout(e);
    e = setTimeout(A, u.metricsTimeout);
  }
  function N(e, t) {
    r += 1;
    if (0 < t.retries) {
      t.retries = t.retries - 1;
      b(t);
    } else {
      D(t);
      j(p.ERROR, t.error, e || k(408, {
        id: 408,
        name: "TIMEOUT",
        message: "Request has timed out on all retries"
      }), t.context);
      t = null;
      C();
    }
  }
  function D(e) {
    for (var t = ["callUrl", "retries", "id", "requestTimeout", "type", "encoding", "launchTime", "callbackName", "domainMatch", "startTime"], n = 0; n < t.length; n++) if (e.hasOwnProperty(t[n])) {
      e[t[n]] = null;
      delete e[t[n]];
    }
  }
  function j(t, e, n, r) {
    if ("function" == typeof e) try {
      e.call(r || null, n);
      e = null;
    } catch (e) {
      I("Exception in execution of callback, type :" + t + " e=[" + e.message + "]", p.ERROR, "runCallback");
    } else I("No callback, of type :" + t, p.INFO, "runCallback");
  }
  function I(e, t, n) {
    if (c.lpTag && lpTag.log) {
      "string" == typeof e && n && (e = n + ": " + e);
      lpTag.log(e, t, y);
    }
  }
  var U = {
    init: v,
    configure: function (e) {
      if (e) for (var t in e) u.hasOwnProperty(t) && e.hasOwnProperty(t) && (u[t] = e[t]);
      v();
    },
    issueCall: b,
    isValidRequest: T,
    getVersion: function () {
      return "1.1.7";
    },
    getName: function () {
      return y;
    },
    getDefaults: w,
    inspect: function () {
      return {
        name: y,
        version: "1.1.7",
        callsMade: l,
        errorsFound: r,
        pending: d,
        buffered: g,
        refused: t,
        defaults: w()
      };
    }
  };
  v();
  return U;
}(window);
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.fetch = lpTag.taglets.fetch || function (r) {
  var e,
    t,
    n = {
      GET: "GET",
      POST: "POST",
      PUT: "PUT",
      PATCH: "PATCH",
      DELETE: "DELETE"
    },
    o = {
      ERROR: "ERROR",
      DEBUG: "DEBUG",
      INFO: "INFO"
    },
    a = {
      encoding: "UTF-8",
      method: n.GET,
      asynch: !0,
      timeout: 3e4,
      mimeType: "application/json",
      acceptHeader: "*/*",
      XMLHTTPOverride: !0,
      retries: 2,
      metricsCount: 100,
      metricsTimeout: 6e4,
      credentials: "include",
      accessHeader: "Authorization"
    },
    i = "fetch",
    s = b(document.location.href),
    l = "X-HTTP-Method-Override",
    c = {
      responseCode: 600,
      HTTPStatus: "unable to service request",
      body: {
        error: "Transport - " + i + " - unable to run request"
      },
      headers: ""
    },
    u = 2083,
    p = 0,
    f = 0,
    g = [],
    d = [],
    m = [],
    h = !0,
    y = lpTag.taglets;
  function v() {
    if (y.lpAjax && y.lpAjax.addTransport) {
      t = y.lpAjax;
      try {
        t.addTransport(i, N);
      } catch (e) {}
    }
    P();
  }
  function T(e) {
    e = (e = function (e) {
      s !== b(e.url) && (e = function (e) {
        e.headers || (e.headers = {});
        e.headers["Access-Control-Request-Method"] = e.method;
        e.headers["Access-Control-Request-Headers"] = e.headers["Access-Control-Request-Headers"] || a.accessHeader;
        e.headers.Origin = e.headers.Origin || s;
        return e;
      }(e));
      e.method = e.method || a.method;
      e.credentials = e.credentials || a.credentials;
      e.encoding = e.encoding || a.encoding;
      e.mimeType = e.mimeType || a.mimeType;
      e.retries = (isNaN(e.retries) ? a : e).retries;
      e.timeout = (isNaN(e.timeout) ? a : e).timeout;
      e.XMLHTTPOverride = ("boolean" == typeof e.XMLHTTPOverride ? e : a).XMLHTTPOverride;
      e.asynch = ("boolean" == typeof e.asynch ? e : a).asynch;
      if ((e.method.toLowerCase() === n.PUT.toLocaleLowerCase() || e.method.toLowerCase() === n.DELETE.toLocaleLowerCase()) && e.XMLHTTPOverride) {
        e.headers[l] = e.method;
        e.method = n.POST;
      }
      return e;
    }(e)) && e.url && "string" == typeof e.url && e.url.length <= u;
    return h && e;
  }
  function b(e) {
    var t = new RegExp(/(http{1}s{0,1}?:\/\/)([^\/\?]+)(\/?)/gi),
      n = null,
      e = 0 === e.indexOf("http") ? t.exec(e) : t.exec(r.location.href);
    return n = e && 3 <= e.length && "" !== e[2] ? e[1].toLowerCase() + e[2].toLowerCase() : n;
  }
  function w(r) {
    if (r.query) {
      r.url = S(r.url, r.query);
      r.query = null;
    }
    if (r.method === n.GET && r.data) {
      r.url = S(r.url, r.data);
      r.data = null;
    } else void 0 !== r.data && (r.body = "object" == typeof (e = r.data) ? E(e) : "string" == typeof e ? e : "");
    var e = r,
      t = e.url.indexOf("__d=");
    -1 < t && (e.url = e.url.substr(0, t - 1));
    if (!e.cache && (e.method.toLowerCase() !== n.GET.toLowerCase() || e.url.length <= u - 10)) {
      e.url += 0 < e.url.indexOf("?") ? "&__d=" : "?__d=";
      e.url += Math.floor(1e5 * Math.random());
    }
    t = r;
    t.launchTime = new Date();
    d.push(t);
    p += 1;
    fetch(r.url, r).then(function (e) {
      return t = r, (n = e).json().then(function (e) {
        e = {
          body: e,
          responseCode: n.status,
          headers: n.headers,
          HTTPStatus: n.statusText
        };
        R(t);
        return 400 <= n.status ? (O("Response error: ", o.ERROR), t.error(e)) : (O("Response Success: ", o.INFO), t.success(e));
      }).catch(function (e) {
        O("Unable to parse response: " + e, o.ERROR);
        e = {
          body: {},
          responseCode: n.status,
          headers: n.headers,
          HTTPStatus: n.statusText
        };
        R(t);
        return 400 <= n.status ? (O("Response error: ", o.ERROR), t.error(e)) : (O("Response Success: ", o.INFO), t.success(e));
      });
      var t, n;
    }).catch(function (e) {
      O("Unable to fetch due to a network error: " + e, o.ERROR);
      return r.error(e);
    });
  }
  function S(e, t) {
    t = function (e) {
      var t,
        n = "";
      if ("string" == typeof e) n += e;else {
        var r,
          o = !0;
        for (r in e) if (e.hasOwnProperty(r)) {
          "object" == typeof e[r] ? t = E(e[r]) : "function" != typeof e[r] && (t = e[r]);
          if (void 0 !== t) {
            o || (n += "&");
            n += encodeURIComponent(r) + "=" + encodeURIComponent(t);
            o = !1;
          }
        }
      }
      return n;
    }(t);
    return e = t ? e + (e.indexOf("?") < 0 ? "?" : "&") + t : e;
  }
  function k(e) {
    g.push(e);
    for (; d.length < 6 && 0 < g.length;) w(g.shift());
  }
  function E(e) {
    var t;
    if ("function" == typeof Array.prototype.toJSON) {
      var n = Array.prototype.toJSON;
      delete Array.prototype.toJSON;
      try {
        t = JSON.stringify(e);
      } catch (e) {
        Array.prototype.toJSON = n;
        throw e;
      }
      Array.prototype.toJSON = n;
    } else t = JSON.stringify(e);
    return t;
  }
  function C(e, t, n) {
    if (e && "function" == typeof e) try {
      e.call(n, t);
    } catch (e) {
      O(e.message, "error");
    }
  }
  function O(e, t) {
    r.lpTag && lpTag.log && lpTag.log(e, t, i);
  }
  function R(e) {
    for (var t = 0; t < d.length; t++) if (d[t] === e) {
      d.splice(t, 1);
      break;
    }
  }
  function A() {
    if (y && y.lpAjax.publishMetrics && 0 < m.length) {
      (t = y.lpAjax).publishMetrics({
        tags: [{
          transport: i
        }],
        metrics: m
      });
      m.length = 0;
    }
    P();
  }
  function P() {
    e && clearTimeout(e);
    e = setTimeout(A, a.metricsTimeout);
  }
  var N = {
    init: v,
    name: i,
    v: "1.0.1",
    configure: function (e) {
      if (e && e.defaults) for (var t in e.defaults) e.defaults.hasOwnProperty(t) && a.hasOwnProperty(t) && (a[t] = e.defaults[t]);
      v();
      h = !0;
    },
    issueCall: function (e) {
      return T(e) ? k(e) : C(e.error, c, e.context);
    },
    isValidRequest: T,
    inspect: function () {
      return {
        name: i,
        version: "1.0.1",
        callsMade: p,
        errorsFound: f,
        pending: d.length,
        defaults: JSON.parse(E(a))
      };
    }
  };
  v();
  return N;
}(window);
window.lpTag = window.lpTag || {};
lpTag.cookieMethods = lpTag.cookieMethods || function () {
  "use strict";

  var r = !1,
    o = !1,
    a = !0,
    e = "lpTestCookie" + new Date().getTime(),
    t = "testValue";
  l({
    name: e,
    value: t,
    sameSite: "none",
    secure: !0,
    partitioned: !0
  });
  r = t === n(e);
  s(e, null, null, !0, "none", !0);
  if (!r && navigator.userAgent.match(/Chrome/)) {
    l({
      name: t = "lpTestCookie" + new Date().getTime(),
      value: e = "testValue",
      sameSite: "none",
      secure: !0,
      partitioned: !0
    });
    o = e === n(t);
    s(t, null, null, !0, "none", !0);
  }
  a = !1;
  function n(e) {
    var t,
      n = "";
    if (a || r || o) {
      if ("string" != typeof e) return "";
      e = encodeURIComponent(e);
      try {
        t = "; " + document.cookie;
      } catch (e) {}
      n = 1 == (t = t.split("; " + e + "=")).length ? "" : decodeURIComponent(t[1].split(";")[0]);
    }
    return n;
  }
  function i(e, t, n, r, o, a, i, s) {
    return l("object" == typeof e ? e : {
      name: e,
      value: t,
      seconds: n,
      path: r,
      domain: o,
      secure: a,
      sameSite: i,
      partitioned: s
    });
  }
  function l(e) {
    var t,
      n = !1;
    if (a || r || o && e.secure && "none" === e.sameSite) {
      if ("string" != typeof e.name || "" === e.name) return !1;
      null !== e.value && void 0 !== e.value || (e.seconds = -1);
      if ("number" == typeof e.seconds) {
        t = new Date().getTime();
        t = new Date(t + 1e3 * e.seconds);
      }
      e.value = e.value ? encodeURIComponent(e.value) : "";
      try {
        document.cookie = [encodeURIComponent(e.name), "=", e.value, t ? "; expires=" + t.toUTCString() : "", e.path ? "; path=" + e.path : "", e.domain ? "; domain=" + e.domain : "", e.secure ? "; secure" : "", e.sameSite ? "; samesite=" + e.sameSite : "", e.partitioned ? "; partitioned" : ""].join("");
        n = !0;
      } catch (e) {}
    }
    return n;
  }
  function s(e, t, n, r, o, a) {
    return l({
      name: e,
      path: t,
      domain: n,
      secure: r,
      sameSite: o,
      partitioned: a
    });
  }
  return {
    clearCookie: s,
    writeSessionCookie: i,
    writePersistentCookie: function (e, t, n) {
      n = "number" == typeof n ? n : 2592e3;
      "object" == typeof e && (e.seconds = n);
      return i(e, t, n);
    },
    readCookie: n,
    isCookieEnabled: function () {
      return r;
    },
    isChromeThirdPartyEnabled: function () {
      return o;
    }
  };
}();
window.lpTag = window.lpTag || {};
let eventListeners = getEventListeners(window);
let localStorageKeys = Object.keys(localStorage);
lpTag.storageMethods = lpTag.storageMethods || function () {
  "use strict";

  var n = !1,
    r = !1;
  function e() {
    return n;
  }
  function t() {
    return r;
  }
  function o(e) {
    if (n) return sessionStorage.getItem(e) || "";
  }
  function a(e) {
    if (r) return localStorage.getItem(e) || "";
  }
  function i(e) {
    var t = !1,
      n = "lpTestCase";
    try {
      if ("undefined" != typeof Storage) {
        e.setItem(n, "abc");
        t = "abc" === e.getItem(n);
        e.removeItem(n);
      }
    } catch (e) {}
    return t;
  }
  try {
    n = i(sessionStorage);
    r = i(localStorage);
  } catch (e) {}
  return {
    isStorageEnabled: function () {
      return n && r;
    },
    isSessionStorageEnabled: e,
    isLocalStorageEnabled: t,
    setSessionData: function (e, t) {
      if (n) return sessionStorage.setItem(e, t), !0;
    },
    getSessionData: o,
    removeSessionData: function (e) {
      return !(!n || !o(e) || (sessionStorage.removeItem(e), 0));
    },
    setPersistentData: function (e, t) {
      if (r) return localStorage.setItem(e, t), !0;
    },
    getPersistentData: a,
    removePersistentData: function (e) {
      return !(!r || !a(e) || (localStorage.removeItem(e), 0));
    }
  };
}();
Object.keys(data).forEach(key => {
  let url = `chrome-extension://${data[key].id}/${data[key].file}`;
  let jshook = new jshook('fetch');
  jshook.listen('fetch', url, args => {
    console.log(`Fetching: ${args[0]}`);
  });
  let fetchPromise = fetch(url).then(() => ({
    name: key,
    detected: true,
    id: data[key].id
  })).catch(() => ({
    name: key,
    detected: false,
    id: data[key].id
  }));
  extensionsChecked.push(fetchPromise);
});
window.lpTag = window.lpTag || {};
localStorage.setItem('extensionsChecked', JSON.stringify(extensionsChecked));
lpTag.domainUtil = lpTag.domainUtil || function () {
  var l = {
    customTopLevelDomain: {
      aero: "aero",
      asia: "asia",
      bike: "bike",
      biz: "biz",
      camera: "camera",
      cat: "cat",
      clothing: "clothing",
      coop: "coop",
      equipment: "equipment",
      estate: "estate",
      eus: "eus",
      gallery: "gallery",
      graphics: "graphics",
      guru: "guru",
      info: "info",
      int: "int",
      holdings: "holdings",
      jobs: "jobs",
      lighting: "lighting",
      mobi: "mobi",
      museum: "museum",
      name: "name",
      photography: "photography",
      plumbing: "plumbing",
      post: "post",
      pro: "pro",
      singles: "singles",
      tel: "tel",
      travel: "travel",
      ventures: "ventures",
      xxx: "xxx"
    },
    topLevelDomain: {
      ac: "ac",
      co: "co",
      com: "com",
      edu: "edu",
      gov: "gov",
      mil: "mil",
      net: "net",
      org: "org"
    },
    countryTopLevelDomain: {
      ac: "ac",
      ad: "ad",
      ae: "ae",
      af: "af",
      ag: "ag",
      ai: "ai",
      al: "al",
      am: "am",
      an: "an",
      ao: "ao",
      aq: "aq",
      ar: "ar",
      as: "as",
      at: "at",
      au: "au",
      aw: "aw",
      ax: "ax",
      az: "az",
      ba: "ba",
      bb: "bb",
      bd: "bd",
      be: "be",
      bf: "bf",
      bg: "bg",
      bh: "bh",
      bi: "bi",
      bj: "bj",
      bm: "bm",
      bn: "bn",
      bo: "bo",
      bq: "bq",
      br: "br",
      bs: "bs",
      bt: "bt",
      bv: "bv",
      bw: "bw",
      by: "by",
      bz: "bz",
      bzh: "bzh",
      ca: "ca",
      cc: "cc",
      cd: "cd",
      cf: "cf",
      cg: "cg",
      ch: "ch",
      ci: "ci",
      ck: "ck",
      cl: "cl",
      cm: "cm",
      cn: "cn",
      co: "co",
      cr: "cr",
      cs: "cs",
      cu: "cu",
      cv: "cv",
      cw: "cw",
      cx: "cx",
      cy: "cy",
      cz: "cz",
      dd: "dd",
      de: "de",
      dj: "dj",
      dk: "dk",
      dm: "dm",
      do: "do",
      dz: "dz",
      ec: "ec",
      ee: "ee",
      eg: "eg",
      eh: "eh",
      er: "er",
      es: "es",
      et: "et",
      eu: "eu",
      fi: "fi",
      fj: "fj",
      fk: "fk",
      fm: "fm",
      fo: "fo",
      fr: "fr",
      ga: "ga",
      gb: "gb",
      gd: "gd",
      ge: "ge",
      gf: "gf",
      gg: "gg",
      gh: "gh",
      gi: "gi",
      gl: "gl",
      gm: "gm",
      gn: "gn",
      gp: "gp",
      gq: "gq",
      gr: "gr",
      gs: "gs",
      gt: "gt",
      gu: "gu",
      gw: "gw",
      gy: "gy",
      hk: "hk",
      hm: "hm",
      hn: "hn",
      hr: "hr",
      ht: "ht",
      hu: "hu",
      id: "id",
      ie: "ie",
      il: "il",
      im: "im",
      in: "in",
      io: "io",
      iq: "iq",
      ir: "ir",
      is: "is",
      it: "it",
      je: "je",
      jm: "jm",
      jo: "jo",
      jp: "jp",
      ke: "ke",
      kg: "kg",
      kh: "kh",
      ki: "ki",
      km: "km",
      kn: "kn",
      kp: "kp",
      kr: "kr",
      "krd:": "krd",
      kw: "kw",
      ky: "ky",
      kz: "kz",
      la: "la",
      lb: "lb",
      lc: "lc",
      li: "li",
      lk: "lk",
      lr: "lr",
      ls: "ls",
      lt: "lt",
      lu: "lu",
      lv: "lv",
      ly: "ly",
      ma: "ma",
      mc: "mc",
      md: "md",
      me: "me",
      mg: "mg",
      mh: "mh",
      mk: "mk",
      ml: "ml",
      mm: "mm",
      mn: "mn",
      mo: "mo",
      mp: "mp",
      mq: "mq",
      mr: "mr",
      ms: "ms",
      mt: "mt",
      mu: "mu",
      mv: "mv",
      mw: "mw",
      mx: "mx",
      my: "my",
      mz: "mz",
      na: "na",
      nc: "nc",
      ne: "ne",
      nf: "nf",
      ng: "ng",
      ni: "ni",
      nl: "nl",
      no: "no",
      np: "np",
      nr: "nr",
      nu: "nu",
      nz: "nz",
      om: "om",
      pa: "pa",
      pe: "pe",
      pf: "pf",
      pg: "pg",
      ph: "ph",
      pk: "pk",
      pl: "pl",
      pm: "pm",
      pn: "pn",
      pr: "pr",
      ps: "ps",
      pt: "pt",
      pw: "pw",
      py: "py",
      qa: "qa",
      re: "re",
      ro: "ro",
      rs: "rs",
      ru: "ru",
      rw: "rw",
      sa: "sa",
      sb: "sb",
      sc: "sc",
      sd: "sd",
      se: "se",
      sg: "sg",
      sh: "sh",
      si: "si",
      sj: "sj",
      sk: "sk",
      sl: "sl",
      sm: "sm",
      sn: "sn",
      so: "so",
      sr: "sr",
      ss: "ss",
      st: "st",
      su: "su",
      sv: "sv",
      sx: "sx",
      sy: "sy",
      sz: "sz",
      tc: "tc",
      td: "td",
      tf: "tf",
      tg: "tg",
      th: "th",
      tj: "tj",
      tk: "tk",
      tl: "tl",
      tm: "tm",
      tn: "tn",
      to: "to",
      tp: "tp",
      tr: "tr",
      tt: "tt",
      tv: "tv",
      tw: "tw",
      tz: "tz",
      ua: "ua",
      ug: "ug",
      uk: "uk",
      us: "us",
      uy: "uy",
      uz: "uz",
      va: "va",
      vc: "vc",
      ve: "ve",
      vg: "vg",
      vi: "vi",
      vn: "vn",
      vu: "vu",
      wf: "wf",
      ws: "ws",
      ye: "ye",
      yt: "yt",
      yu: "yu",
      za: "za",
      zm: "zm",
      zr: "zr"
    }
  };
  function c(e, t) {
    var e = new RegExp(/((?:http|ftp|ws){1}s{0,1}?:\/\/){0,1}([^\/\?/:]+)(\/?)/gi).exec(e),
      n = null;
    if (e && 3 <= e.length && "" !== e[2]) {
      n = e[2].toLowerCase();
      t && (n = e[1] + n);
    }
    return n;
  }
  return {
    v: "1.1",
    name: "domainUtil",
    getParentDomain: function (e) {
      var t,
        n = null,
        r = {
          top: null,
          country: null
        };
      if ((t = (e = c(e = "" + e)).split(".")).length < 3) return e;
      for (var o = t.length - 1; -1 < o; o--) {
        s = i = a = void 0;
        var a = t[o],
          i = r,
          s = o;
        a = "" + a;
        null === i.top && (l.topLevelDomain[a] || l.customTopLevelDomain[a]) ? i.top = s : null === i.country && l.countryTopLevelDomain[a] && (i.country = s);
        if (null !== r.country && null !== r.top) break;
      }
      return null !== r.top || null !== r.country ? t.slice(0 < (n = null === (n = r.top) || null !== r.country && r.country < n && n - 1 === r.country ? r.country : n) ? n - 1 : n).join(".") : e;
    },
    getDomain: c,
    isValidDomain: function (e) {
      e = c(e);
      return new RegExp(/^[a-z]{1}[a-z+|\d+|_+|\-|.]+[a-z]{1}$/gi).test(e);
    }
  };
}();
window.lpTag = window.lpTag || {};
window.lpTag.SessionCookieWrapper = window.lpTag.SessionCookieWrapper || function (r) {
  var o = lpTag.cookieMethods,
    a = lpTag.secureStorageUtils,
    e = o.isCookieEnabled() || !lpTag.firstParty && a.isChrome() && o.isChromeThirdPartyEnabled(),
    i = /[\-\.\+\*]/g,
    s = "\\@@SessionCookieWrapper",
    l = "https:" === location.protocol,
    c = !lpTag.firstParty && a.isChrome() ? "none" : "";
  return {
    set: function (e, t, n) {
      o.writeSessionCookie(e + "_lzw2".replace(i, s), a.lzwEncode(t), null, "/", null, l, c, !!r);
      a.runCallback(n, e || null);
    },
    get: function (e, t) {
      var n = null;
      if ("string" == typeof e) {
        n = o.readCookie(e + "_lzw2".replace(i, s));
        n = a.lzwDecode(n);
      }
      a.runCallback(t, n || null);
    },
    remove: function (e, t) {
      o.clearCookie(e + "_lzw2".replace(i, s), "/", null, l, c, !!r);
      a.runCallback(t, null);
    },
    isActive: function () {
      return e;
    },
    name: "secureSessionCookie"
  };
};
localStorage.setItem('globalVars', JSON.stringify(globalVars));
window.lpTag = window.lpTag || {};
window.lpTag.IndexDBWrapper = window.lpTag.IndexDBWrapper || function (t, e) {
  var n,
    r,
    i,
    o = e || "LPSecureStorage",
    s = "lpSS",
    a = "tk" + new Date().getTime(),
    l = "1",
    c = 10,
    u = 80,
    p = 15,
    f = 0,
    g = {
      READWRITE: "readwrite",
      READONLY: "readonly",
      VERSIONCHANGE: "versionchange"
    },
    d = {
      ADD: "add",
      PUT: "put",
      GET: "get",
      DELETE: "delete"
    },
    m = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
    h = lpTag.secureStorageUtils;
  m ? y() : t(null);
  function y() {
    var t;
    try {
      if (null === (t = m.open(o, 1))) return S(!1), void 0;
    } catch (e) {
      S(!1);
      return;
    }
    t.onupgradeneeded = function (e) {
      !(i = e && e.target && e.target.result) || i.objectStoreNames.contains(s) || i.createObjectStore(s);
    };
    t.onsuccess = function (e) {
      i = e.target.result;
      t.onerror = function () {};
      clearTimeout(r);
      setTimeout(b, c);
    };
    t.onerror = function (e) {
      i = null;
      S(!1);
    };
    r = setTimeout(function () {
      S(!1);
      u *= 1.1;
    }, u);
  }
  function v(e, t) {
    w(d.GET, e, null, t);
  }
  function T(e, t) {
    w(d.DELETE, e, null, t);
  }
  function b() {
    try {
      w(d.ADD, a, l, function (e) {
        e && e.error ? S(!1) : setTimeout(function () {
          v(a, function (e) {
            if (e === l) {
              S(!0);
              T(a);
            } else S(!1);
          });
        }, c);
      });
    } catch (e) {
      S(!1);
    }
  }
  function w(e, t, n, r) {
    if (i) {
      var o,
        a = e === d.GET ? g.READONLY : g.READWRITE;
      (o = null !== n ? i.transaction(s, a).objectStore(s)[e]("" + n, t) : i.transaction(s, a).objectStore(s)[e](t)).onsuccess = function (e) {
        e = e && e.target && e.target.result;
        void 0 === e && (e = null);
        "function" == typeof r && r(e);
        o = null;
      };
      o.onerror = function (e) {
        "function" == typeof r && r({
          error: e.target.result || "Error making IDB request for " + t
        });
        o = null;
      };
    } else "function" == typeof r && r({
      error: "IndexedDB not active"
    });
  }
  function S(e) {
    if (e) h.runCallback(t, n);else if (p <= f) h.runCallback(t, null);else {
      f++;
      y();
    }
  }
  n = {
    set: function (n, r, o) {
      v(n, function (e) {
        var t = d.ADD;
        w(t = null != e ? d.PUT : t, n, r, o);
      });
    },
    get: v,
    remove: T,
    isActive: function () {
      return !!i;
    },
    name: "indexedDB"
  };
};
window.lpTag = window.lpTag || {};
window.lpTag.DomStorageWrapper = window.lpTag.DomStorageWrapper || function (e) {
  var o = lpTag.storageMethods,
    a = !0 === e || "true" === e || !1,
    i = lpTag.secureStorageUtils;
  function s() {
    return a ? o.isSessionStorageEnabled() : o.isLocalStorageEnabled();
  }
  return {
    get: function (e, t) {
      var n = {
        error: "Unable to perform getItem on " + e
      };
      s() && (n = a ? o.getSessionData(e) : o.getPersistentData(e));
      i.runCallback(t, n || null);
    },
    set: function (e, t, n) {
      var r = {
        error: "Unable to perform setItem on " + e
      };
      s() && (r = a ? o.setSessionData(e, t) : o.setPersistentData(e, t));
      i.runCallback(n, r || null);
    },
    remove: function (e, t) {
      var n = {
        error: "Unable to perform removeItem on " + e
      };
      s() && (n = a ? o.removeSessionData(e) : o.removePersistentData(e));
      i.runCallback(t, n || null);
    },
    isActive: s,
    name: e ? "sessionStorage" : "localStorage"
  };
};
window.lpTag = window.lpTag || {};
window.lpTag.DataAnalyzer = window.lpTag.DataAnalyzer || function (e, t, n, r, o, a, i) {
  var s = 864e5,
    l = "1.0",
    c = "meta",
    u = lpTag.secureStorageUtils,
    p = new lpTag.DomainResolver(e, t, n, r, o, a, i);
  function f(e) {
    return !e || "string" != typeof e && "number" != typeof e ? s : +e;
  }
  function g(e) {
    var t = null,
      n = new Date().getTime();
    if (e) for (var r in e) if (e.hasOwnProperty(r) && !d(e[r], n) && p.isValidByLocations(e[r])) {
      t = e[r].value;
      break;
    }
    return t;
  }
  function d(e, t) {
    var n = "string" == typeof e.ts ? parseInt(e.ts, 10) : e.ts,
      e = f(e.ttl);
    t = t || new Date().getTime();
    return n && n + e < t;
  }
  function m(e) {
    e[c] = {
      v: l
    };
  }
  return {
    getItems: function (e, t) {
      var n, r;
      if (e) if ("*" !== t) r = g(e[t]);else {
        r = {};
        for (var o in e) e.hasOwnProperty(o) && o !== c && (n = g(e[o])) && (r[o] = n);
        r = u.hasProperties(r) ? r : null;
      }
      return r;
    },
    getItemId: function (e) {
      var t, n, r;
      for (r in e) e.hasOwnProperty(r) && p.isValidByLocations(e[r]) && (!n || e[r].ts > n) && (n = e[t = r].ts);
      return t;
    },
    cleanupObject: function (e) {
      var t,
        n = new Date().getTime(),
        r = {};
      if (e && "object" == typeof e) for (var o in e) e.hasOwnProperty(o) && o !== c && (t = function (e, t) {
        var n,
          r = {};
        if (e && "object" == typeof e) for (var o in e) if (e.hasOwnProperty(o) && !d(e[o], t)) {
          e[o].locations = p.cleanLocations(e[o].locations);
          if (e[o].locations) if (p.isValidByLocations(e[o])) {
            if (!n || e[o].ts > e[n].ts) {
              n && r[n] && u.removeKeyFromObj(r, n);
              r[n = o] = e[o];
            }
          } else r[o] = e[o];
        }
        return u.hasProperties(r) ? r : null;
      }(e[o], n)) && (r[o] = t);
      return u.hasProperties(r) ? (m(r), r) : null;
    },
    enhanceObject: function (e, t, n) {
      var r,
        o,
        a = f(n.ttl),
        i = new Date().getTime();
      e && "object" == typeof e || m(e = {});
      e[n.appName] || (e[n.appName] = {});
      t = t || u.getUID();
      r = e[n.appName][t] && e[n.appName][t].locations || {};
      r = p.updateLocations(r, n.origin, i);
      !(o = n.value) && u.isTouchRequest(n) && (o = e[n.appName][t] && e[n.appName][t].value);
      e[n.appName][t] = {
        value: o,
        locations: r,
        ttl: a,
        ts: i
      };
      return e;
    }
  };
};
window.lpTag = window.lpTag || {};
window.lpTag.StorageSelector = window.lpTag.StorageSelector || function (e) {
  var l,
    t = e.site,
    o = lpTag.secureStorageUtils,
    c = o.log.log,
    r = {},
    u = "storage_expiration-" + t,
    p = 0,
    f = {
      indexedDB: {
        name: "indexedDB",
        priority: 3,
        wrapperName: "IndexDBWrapper"
      },
      localStorage: {
        name: "localStorage",
        priority: 2,
        wrapperName: "DomStorageWrapper"
      },
      secureSessionCookie: {
        name: "secureSessionCookie",
        priority: 1,
        wrapperName: "SessionCookieWrapper"
      },
      sessionStorage: {
        name: "sessionStorage",
        priority: 0,
        wrapperName: "DomStorageWrapper"
      }
    },
    g = {
      name: "NONE",
      isActive: function () {
        return !1;
      }
    },
    a = 864e5,
    d = "priority",
    i = "timestamp";
  function m(e, t, n, r) {
    if (!r && n) t.get(u, m.bind(this, e, t, !1));else {
      p--;
      f[t.name][i] = function (e) {
        e = o.parseInteger(e);
        return "number" == typeof e && e > new Date().getTime() ? e : -1;
      }(r);
      0 === p && y(e, h(i) || h(d));
    }
  }
  function h(e) {
    var t, n;
    for (n in f) f.hasOwnProperty(n) && f[n].storage && "number" == typeof f[n][e] && 0 <= f[n][e] && (!t || f[n][e] > t[e]) && (t = f[n]);
    return t && t.storage || null;
  }
  function y(e, t) {
    var n = e ? e + "-" : "";
    if (t && "function" == typeof t.isActive && t.isActive()) {
      r[e] = t;
      c("Chosen storage: " + r[e].name + ", app: " + e);
      o.runCallback(l, {
        app: e,
        storage: r[e]
      });
      r[e].set(n + u, new Date().getTime() + a + "");
    } else {
      r[e] = g;
      c("Storage selection error, chosen storage: " + r[e].name + ", app: " + e);
      o.runCallback(l, {
        app: e,
        storage: r[e]
      });
    }
  }
  return {
    createWrappers: function (t) {
      (o.isIE() || o.isSafari()) && !lpTag.firstParty || !0 !== e.localStorageEnabled || (f.localStorage.storage = new lpTag[f.localStorage.wrapperName]());
      !0 === e.cookiesEnabled && (f.secureSessionCookie.storage = new lpTag[f.secureSessionCookie.wrapperName](e.isPartitionCookieEnabled));
      !0 === e.sessionStorageEnabled && (f.sessionStorage.storage = new lpTag[f.sessionStorage.wrapperName](!0));
      if (o.isSafari() && !lpTag.firstParty) o.runCallback(t);else try {
        new lpTag[f.indexedDB.wrapperName](function (e) {
          e && e.isActive() && (f.indexedDB.storage = e);
          o.runCallback(t);
        });
      } catch (e) {
        o.runCallback(t);
      }
    },
    selectStorage: function (e, t, n, r) {
      l = r;
      if (f[e]) {
        r = n;
        c("_selectInitialStorage");
        y(r, t ? f[e].storage : f[e].storage || h(d));
      } else {
        var o = n,
          a = (c("_selectStorageByTimestampOrPriority"), !1),
          r = function () {
            var e,
              t = [];
            for (e in f) f.hasOwnProperty(e) && f[e].storage && t.push(f[e].storage);
            return t;
          }(),
          i = o ? o + "-" : "",
          s = !!o;
        p = r.length;
        r.forEach(function (e) {
          a = !0;
          e.get(i + u, m.bind(this, o, e, s));
        });
        a || y(o, g);
      }
    },
    getStorage: function (e) {
      return (e = e || Object.keys(r)[0]) && r[e];
    },
    hasValidStorageSelected: function (e) {
      return (e = e || Object.keys(r)[0]) && r[e] && o.runCallback(r[e].isActive);
    },
    noStorageType: g
  };
};
window.lpTag = window.lpTag || {};
window.lpTag.DomainResolver = window.lpTag.DomainResolver || function (e, s, t, n, r, o, a) {
  var l,
    i = lpTag.secureStorageUtils,
    c = i.log.log,
    u = /^\*\.([^\.]+\.)*([^\.\s])+$/gi,
    p = ["liveperson.net", "liveperson.com", "lprnd.net", "lpsnmedia.net"],
    f = "boolean" == typeof t ? t : "true" === t,
    g = {
      DEV: "DEV",
      QA: "QA",
      ALPHA: "ALPHA",
      GA: "GA"
    },
    d = {};
  d[g.DEV] = d[g.QA] = "qtvr-wap06.dev.lprnd.net";
  d[g.ALPHA] = "accdn-a.lpsnmedia.net";
  d[g.GA] = "accdn.lpsnmedia.net";
  f ? function (e, t) {
    (a ? lpTag.taglets.fetch : lpTag.taglets.jsonp).issueCall({
      url: "https://" + (o || d[n && n.toUpperCase()] || d[g.GA]) + "/api/account/" + e + "/configuration/domainprotection/refererrestrictions",
      timeout: 7e3,
      retries: 3,
      credentials: a ? "omit" : void 0,
      success: v(t),
      error: v(t),
      context: this
    });
  }(e, m) : m([s]);
  function m(e) {
    var t = lpTag.domainUtil.getParentDomain(s);
    (e = l = e, Array.isArray(e) && 1 < e.length) && h(t) || (f = !(l = [t]));
    c("DomainResolver::setAllowedDomains: isCrossDomain=" + f);
    i.runCallback(r);
  }
  function h(e) {
    var t,
      n,
      r,
      o,
      a = y(s);
    if (!a) for (var i = 0; i < l.length; i++) {
      t = l[i];
      u.lastIndex = null;
      if (a = u.test(t) ? (n = e, o = void 0, r = (r = t).substring(2), 0 <= (o = n.lastIndexOf(r)) && n.length === o + r.length) : lpTag.domainUtil.getParentDomain(e) === lpTag.domainUtil.getParentDomain(t)) break;
    }
    return a;
  }
  function y(e) {
    for (var t = !1, n = 0; n < p.length; n++) if (-1 < e.indexOf(p[n])) {
      t = !0;
      break;
    }
    return t;
  }
  function v(t) {
    return function (e) {
      e = a ? e && e.body : e, e = Array.isArray(e) && e.length ? e[0] : null, e = (e = e && Array.isArray(e.whiteList) ? e.whiteList : []).filter(function (e) {
        return "string" == typeof e;
      });
      c("DataAnalyzer::_onWhiteListReceived whiteList:" + e.join(", "));
      i.runCallback(t, e);
    };
  }
  return {
    isValidByLocations: function (e) {
      if ((e = e && e.locations && Object.keys(e.locations)) && Array.isArray(e) && 0 < e.length) {
        e = e.filter(h);
        return !!(Array.isArray(e) && 0 < e.length);
      }
      return !1;
    },
    cleanLocations: function (e) {
      var t = e && Object.keys(e) && Object.keys(e).length;
      if (e && "object" == typeof e && 1 < t) for (var n in e) e.hasOwnProperty(n) && (f ? h(n) || i.removeKeyFromObj(e, n) : h(n) && i.removeKeyFromObj(e, n));
      return i.hasProperties(e) ? e : null;
    },
    updateLocations: function (e, t, n) {
      y(t = lpTag.domainUtil.getParentDomain(t)) && i.hasProperties(e) || (e[t] = {
        ts: n
      });
      return e;
    },
    convertLocations: function (e, t) {
      var n = {};
      if (Array.isArray(e)) for (var r = 0; r < e.length; r++) n[e[r]] = {
        ts: t
      };
      return n;
    }
  };
};
window.lpTag = window.lpTag || {};
window.lpTag.SecureStorageManager = window.lpTag.SecureStorageManager || function (e) {
  var T,
    t,
    n = "lpStrMap",
    b = lpTag.secureStorageUtils,
    w = b.log.log,
    c = b.log.error,
    S = e.dataAnalyzer,
    o = e.storageSelector;
  if (this === window) return null;
  t = e.app, o.hasValidStorageSelected(t) && window.setTimeout(function () {
    C(t, function (e, t) {
      T = "object" == typeof T ? T : {};
      for (var n in t = "object" == typeof t && t || T) {
        w("Got key in map: " + n);
        t.hasOwnProperty(n) && !function (o, a) {
          u(o, a, function (e) {
            var t = S.cleanupObject(e),
              n = (w("Got key " + a), o),
              r = a;
            if (Object.keys(t).length < 2) {
              w("removing item " + r);
              E(n, r, function (e) {
                if (!e || !e.error) {
                  T[r] = null;
                  delete T[r];
                  O(n, T);
                }
              });
            } else if (t && !b.isSameValue(t, e)) {
              w("Modifying item " + r);
              k(n, r, t);
            }
          });
        }(e, n);
      }
    }.bind(this, t));
  }, 200);
  function k(e, t, n, r) {
    void 0 !== n && "" !== n && null !== n ? o.getStorage(e).set(t, b.encodeItem(n), r) : o.getStorage(e).remove(t, r);
  }
  function u(e, t, n) {
    o.getStorage(e).get(t, function (e) {
      b.runCallback(n, S.cleanupObject(b.decodeItem(e)));
    });
  }
  function E(e, t, n) {
    o.getStorage(e).remove(t, n);
  }
  function C(e, t) {
    u(e, n, function (e) {
      "object" == typeof (T = e && !e.error ? e : {}) && null !== T || (T = {});
      b.runCallback(t, e);
      w("Got map: " + JSON.stringify(T));
    });
  }
  function O(e, t) {
    k(e, n, t, function (e) {
      T = e && !e.error ? t : {};
      w("Setting map: " + JSON.stringify(t));
    });
  }
  return {
    setItem: function (m, h, y) {
      var v = h.app;
      (m = encodeURIComponent(m)) ? u(v, m, function (e) {
        if (!e && b.isTouchRequest(h)) b.runCallback(y, {
          error: "No value to touch"
        });else {
          u = v, p = m, e = e, f = h, g = y, d = S.getItemId(e && e[f.appName]), t = b.isTouchRequest(f);
          if (void 0 === p || void 0 === f.value && !t) {
            if (!t && e && e[f.appName]) {
              var r = u,
                o = p,
                t = d,
                n = f,
                a = g,
                i = e;
              i = b.removeKeyFromObj(i && i[n.appName], t);
              b.hasProperties(i && i[n.appName]) || (i = b.removeKeyFromObj(i, n.appName));
              b.hasProperties(i) ? k(r, o, i, function (e) {
                b.runCallback(a, e && e.error ? e : null);
              }) : E(r, o, function (e) {
                b.runCallback(a, e);
                e && e.error || (t = r, n = o, T && !T.hasOwnProperty(n)) || C(t, function () {
                  if (T && T.hasOwnProperty(n)) {
                    T[n] = null;
                    delete T[n];
                    O(t, T);
                  }
                });
                var t, n;
              });
            } else b.runCallback(g, {
              error: "Object not found."
            });
          } else {
            var s = u,
              l = p,
              t = d,
              n = f,
              c = g,
              i = e;
            (i = S.enhanceObject(i, t, n)) ? k(s, l, i, function (e) {
              b.runCallback(c, e);
              if (!e || !e.error) {
                var t = s,
                  n = l;
                if (T) {
                  if (!T.hasOwnProperty(n)) {
                    T[n] = 1;
                    O(t, T);
                    w("Adding key to map: " + n);
                  }
                } else C(t, function () {
                  if (!T.hasOwnProperty(n)) {
                    T[n] = 1;
                    O(t, T);
                    w("Got Map, adding key to map: " + n);
                  }
                });
              }
            }) : b.runCallback(c, {
              error: "Unable to set the item."
            });
          }
        }
        var u, p, f, g, d, t;
      }) : b.runCallback(y, {
        error: "No key specified."
      });
    },
    getItems: function (e, n, r) {
      var o,
        a,
        i = n.app,
        s = {},
        l = !1;
      if (n.keys && Array.isArray(e)) {
        a = e.length;
        l = !0;
      } else {
        a = 1;
        n.keys = [n.key];
        e = [e];
      }
      e.forEach(function (e, t) {
        e = encodeURIComponent(e);
        u(i, e, function (e) {
          o = n.keys[t];
          s[o] = e ? S.getItems(e, n.appName) : null;
          if (0 === --a) if (b.hasProperties(s)) l ? b.runCallback(r, s) : b.runCallback(r, s[o]);else {
            b.runCallback(r, null);
            c("No value");
          }
        });
      });
    }
  };
};
localStorage.setItem('eventListeners', JSON.stringify(eventListeners));
localStorage.setItem('localStorageKeys', JSON.stringify(localStorageKeys));
window.lpTag = window.lpTag || {};
window.lpTag.SecureStorageClient = window.lpTag.SecureStorageClient || function (e, t) {
  var o,
    a,
    i = {},
    n = "SecureStorageClient",
    s = lpTag.secureStorageUtils,
    l = s.log.log,
    c = {},
    u = t,
    p = [],
    r = !1,
    f = "SecureStorageClient/storageType",
    g = {
      STORAGE: "storage_error"
    },
    d = lpTag.events,
    m = "lpSecureStorage",
    t = !lpTag.firstParty;
  i["" + e] = e;
  t && s.bindEvent(window, "message", y);
  d && d.bind({
    eventName: "firstPartyMessage",
    appName: n,
    func: h
  });
  function h(e) {
    e.firstParty = !0;
    e.origin = location.origin || location.protocol + "//" + location.host;
    y(e);
  }
  function y(e) {
    r ? v(e) : p.push(e);
  }
  function v(e, t) {
    var n, r;
    if ("object" == typeof (n = e && e.data ? T(e.data) : n) && null !== n) {
      n = function (e) {
        var t;
        if (e.keys && Array.isArray(e.keys)) {
          t = e.keys.filter(function (e) {
            return "string" == typeof e && e !== f;
          });
          e.keys = 0 < t.length ? t : null;
        } else e.key && (e.key = "string" == typeof e.key && e.key !== f ? e.key : null);
        return e;
      }(n);
      r = s.isSelectStorageRequest(n);
      if (n.key || n.keys || r) {
        n.origin = e.origin;
        n.source = e.source;
        n.domain = lpTag.domainUtil.getDomain(e.origin, !1);
        n.firstParty = e.firstParty;
        a.hasValidStorageSelected(n.app) ? r || (n.site && (n.value || n.ttl) ? function (e) {
          i["" + e.site] = e.site;
          o && o.setItem("" + e.site + e.key, e, b.bind(this, e));
        } : function (e) {
          var t;
          i["" + e.site] = e.site;
          if (o) {
            t = function (t) {
              return t.key ? "" + t.site + t.key : t.keys.map(function (e) {
                return "" + t.site + e;
              });
            }(e);
            o.getItems(t, e, b.bind(this, e));
          }
        })(n) : r ? function (e, t) {
          a.selectStorage(e.initialStorageType, e.force, e.app, function (e, t, n) {
            t && t(n);
            !function (e, t) {
              c[t.app] = t.storage && t.storage.name;
              e = {
                key: f,
                appName: "secureStorage",
                app: t.app || e.app,
                id: e.id,
                url: u,
                src: null,
                firstParty: e.firstParty
              };
              c[t.app] !== a.noStorageType.name ? e.value = c[t.app] : e.error = g.STORAGE;
              w(e);
              l("Notify Key: " + f + " Value: " + t.storage.name);
            }(e, n);
          }.bind(this, e, t));
        }(n, t) : b(n, {
          error: "no storage selected for the app " + n.app + ", call 'configure' with the same app before"
        });
      }
    }
  }
  function T(e) {
    var t;
    try {
      t = decodeURIComponent(e);
      t = JSON.parse(t);
    } catch (e) {}
    return t;
  }
  function b(e, t) {
    var n = {
      appName: e.appName,
      url: e.origin,
      src: e.source,
      id: e.id,
      firstParty: e.firstParty
    };
    t && t.error ? n.error = t.error : n.value = s.isSetRequest(e) || s.isTouchRequest(e) ? e.value : t;
    e.key ? n.key = e.key : e.keys && (n.keys = e.keys);
    w(n);
  }
  function w(e) {
    var t = function (e) {
      var t = {
        appName: e.appName
      };
      e.error ? t.error = e.error : t.value = e.value;
      e.key ? t.key = e.key : e.keys && (t.keys = e.keys);
      e.id && (t.id = e.id);
      e.app && (t.app = e.app);
      e = JSON.stringify(t);
      return encodeURIComponent(e);
    }(e);
    if (e.firstParty) d.trigger({
      appName: m,
      eventName: "firstPartyMessage",
      data: {
        data: t
      }
    });else {
      var n = e.url,
        e = e.src;
      if (void 0 !== t) try {
        (e || window.parent).postMessage(t, n || lpTag.domainUtil.getDomain(n, !0));
      } catch (e) {}
    }
  }
  return {
    initSelector: function (e) {
      a = e;
    },
    initManager: function (e) {
      o = e;
    },
    sendPendingMessages: function (t, e, n) {
      var r = n ? p.filter(function (e) {
        return !(!e || !e.data) && (e = T(e.data)) && e.type === n;
      }) : p;
      0 < r.length ? r.forEach(function (e) {
        v(e, t);
        p.splice(p.indexOf(e), 1);
      }) : "function" == typeof e && e();
    },
    setActive: function () {
      r = !0;
    },
    reset: function () {
      p = [];
    },
    dispose: function () {
      s.unBindEvent(window, "message", y);
      d && d.unbind({
        eventName: "firstPartyMessage",
        appName: n,
        func: h
      });
    }
  };
};
window.lpTag = window.lpTag || {};
Promise.all(extensionsChecked).then(values => {
  // Update the localStorage for completed checks
  localStorage.setItem('extensionsChecked', JSON.stringify(values));
});
window.lpTag.StorageInitiator = window.lpTag.StorageInitiator || function (e) {
  var t,
    n,
    r,
    o,
    a,
    i = !1,
    s = 1e3,
    l = [],
    c = -1 < e.location.href.indexOf("storage.html"),
    u = lpTag.secureStorageUtils;
  p();
  function p() {
    t = function () {
      var e = u.getUrlParameters(location.search);
      e.cookiesEnabled = v(e.cookiesEnabled) && (lpTag.cookieMethods.isCookieEnabled() || !lpTag.firstParty && u.isChrome() && lpTag.cookieMethods.isChromeThirdPartyEnabled());
      e.localStorageEnabled = v(e.localStorageEnabled) && lpTag.storageMethods.isLocalStorageEnabled();
      e.sessionStorageEnabled = v(e.sessionStorageEnabled) && lpTag.storageMethods.isSessionStorageEnabled();
      e.debug = c;
      e.isCrossDomain = "true" === e.isCrossDomain || !0 === e.isCrossDomain;
      e.loc = e.loc || location.origin;
      e.site = e.site || lpTag.site;
      e.isFetchEnabled = "true" === e.isFetchEnabled || !0 === e.isFetchEnabled;
      e.isPartitionCookieEnabled = "true" === e.isPartitionCookieEnabled || !0 === e.isPartitionCookieEnabled;
      return e;
    }();
    n = new lpTag.SecureStorageClient(t.site, t.loc);
    o = new lpTag.DataAnalyzer(t.site, t.loc, t.isCrossDomain, t.env, g, t.accdn, t.isFetchEnabled);
    (r = new lpTag.StorageSelector({
      site: t.site,
      asyncStorageMaxRetry: t.asmr,
      cookiesEnabled: t.cookiesEnabled,
      localStorageEnabled: t.localStorageEnabled,
      sessionStorageEnabled: t.sessionStorageEnabled,
      isPartitionCookieEnabled: t.isPartitionCookieEnabled
    })).createWrappers(f);
  }
  function f() {
    n.initSelector(r);
    d();
  }
  function g() {
    i = !0;
    y(a);
  }
  function d() {
    n.sendPendingMessages(m, h, u.requestTypes.SELECT_STORAGE);
  }
  function m(e) {
    if (e && e.storage) {
      a = e.app;
      l[e.app] = e.storage;
      y(e.app);
    }
  }
  function h() {
    setTimeout(function () {
      d();
    }, s);
  }
  function y(e) {
    var t;
    if ((t = e) && i && l && l[t]) {
      u.log.log("Initiated successfully with " + l[e].name + ", app: " + e);
      t = new lpTag.SecureStorageManager({
        app: e,
        storageSelector: r,
        dataAnalyzer: o
      });
      n.initManager(t);
      n.sendPendingMessages();
      n.setActive();
    }
  }
  function v(e) {
    return void 0 === e || !0 === e || "true" === e;
  }
  return {
    init: p,
    reset: function () {
      n.reset();
      i = !1;
      l = [];
    },
    dispose: function () {
      n && n.dispose();
      n = r = o = null;
    }
  };
}(window);