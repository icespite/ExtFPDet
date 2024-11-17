const nativeFetch = window.fetch;
const nativeSetTimeout = window.setTimeout;
const nativeSetInterval = window.setInterval;
/*
  Common dependencies
  Version: 1.0.2
*/

/* js-cookie v3.0.0-rc.1 | MIT */
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () {
    var n = e.Cookies,
      r = e.Cookies = t();
    r.noConflict = function () {
      return e.Cookies = n, r;
    };
  }());
}(this, function () {
  "use strict";

  function e(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) e[r] = n[r];
    }
    return e;
  }
  var t = {
    read: function (e) {
      return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function (e) {
      return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
  };
  return function n(r, o) {
    function i(t, n, i) {
      if ("undefined" != typeof document) {
        "number" == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), n = r.write(n, t);
        var c = "";
        for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0]));
        return document.cookie = t + "=" + n + c;
      }
    }
    return Object.create({
      set: i,
      get: function (e) {
        if ("undefined" != typeof document && (!arguments.length || e)) {
          for (var n = document.cookie ? document.cookie.split("; ") : [], o = {}, i = 0; i < n.length; i++) {
            var c = n[i].split("="),
              u = c.slice(1).join("=");
            '"' === u[0] && (u = u.slice(1, -1));
            try {
              var f = t.read(c[0]);
              if (o[f] = r.read(u, f), e === f) break;
            } catch (e) {}
          }
          return e ? o[e] : o;
        }
      },
      remove: function (t, n) {
        i(t, "", e({}, n, {
          expires: -1
        }));
      },
      withAttributes: function (t) {
        return n(this.converter, e({}, this.attributes, t));
      },
      withConverter: function (t) {
        return n(e({}, this.converter, t), this.attributes);
      }
    }, {
      attributes: {
        value: Object.freeze(o)
      },
      converter: {
        value: Object.freeze(r)
      }
    });
  }(t, {
    path: "/"
  });
});

/* base64.js | https://gist.github.com/chrisveness/e121cffb51481bd1c142 | MIT */
const nativeRequestAnimationFrame = window.requestAnimationFrame;
function Base64Encode(r) {
  if (/([^\u0000-\u00ff])/.test(r)) throw Error("String must be ASCII");
  var t,
    e,
    n,
    o,
    h,
    a,
    i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    f = [],
    c = "";
  if ((a = r.length % 3) > 0) for (; a++ < 3;) c += "=", r += "\0";
  for (a = 0; a < r.length; a += 3) e = (t = r.charCodeAt(a) << 16 | r.charCodeAt(a + 1) << 8 | r.charCodeAt(a + 2)) >> 18 & 63, n = t >> 12 & 63, o = t >> 6 & 63, h = 63 & t, f[a / 3] = i.charAt(e) + i.charAt(n) + i.charAt(o) + i.charAt(h);
  return r = (r = f.join("")).slice(0, r.length - c.length) + c;
}
const nativeLocalStorage = window.localStorage;
const nativeGlobalVar = window.globalVar;
function Base64Decode(r) {
  if (!/^[a-z0-9+/]+={0,2}$/i.test(r) || r.length % 4 != 0) throw Error("Not base64 string");
  for (var t, e, n, o, h, a, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", f = [], c = 0; c < r.length; c += 4) t = (a = i.indexOf(r.charAt(c)) << 18 | i.indexOf(r.charAt(c + 1)) << 12 | (o = i.indexOf(r.charAt(c + 2))) << 6 | (h = i.indexOf(r.charAt(c + 3)))) >>> 16 & 255, e = a >>> 8 & 255, n = 255 & a, f[c / 4] = String.fromCharCode(t, e, n), 64 == h && (f[c / 4] = String.fromCharCode(t, e)), 64 == o && (f[c / 4] = String.fromCharCode(t));
  return r = f.join("");
}
const eventHooks = window.eventhooks || [];
const localStorageHooks = window.localStorageHooks || [];
const globalVariableHooks = window.globalVariableHooks || [];
function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substr(2, 5);
  return `${timestamp}-${randomNum}`;
}
;
function validateEventArgs(args, expectedArgs) {
  if (args.length != expectedArgs.length) {
    return false;
  }
  for (let i = 0; i < expectedArgs.length; i++) {
    const expectedArg = expectedArgs[i];
    const actualArg = args[i];
    if (expectedArg.required && (actualArg === undefined || actualArg === null)) {
      console.warn(`Missing required argument at index: ${i}`);
      return false;
    }
    if (actualArg !== undefined && typeof actualArg !== expectedArg.type) {
      console.warn(`Invalid argument type at index: ${i}`);
      return false;
    }
  }
  return true;
}
function getCallerInfo() {
  const stackTrace = new Error().stack;
  const match = stackTrace.split('\n')[3].match(/\.js:(\d+):(\d+)/);
  return {
    url: window.location.href,
    lineNumber: match ? parseInt(match[1], 10) : null,
    columnNumber: match ? parseInt(match[2], 10) : null
  };
}
function sendTrackingDataToServer(eventName, uniqueId, args, callerInfo, timestamp) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      eventName,
      uniqueId,
      args,
      callerInfo,
      timestamp
    }),
    mode: 'cors',
    cache: 'no-cache'
  };
  nativeFetch('/api/track', requestOptions).then(response => {
    if (!response.ok) {
      console.error('Failed to send tracking data to server:', response.statusText);
    }
  }).catch(error => {
    console.error('Error sending tracking data to server:', error);
  });
}
if (typeof window.atob === 'undefined') {
  window.atob = Base64Decode;
}
function createProxyFunction(eventName, originalFunc, expectedArgs) {
  return new Proxy(originalFunc, {
    apply: function (target, thisArg, args) {
      if (expectedArgs && validateEventArgs(args, expectedArgs)) {
        sendTrackingDataToServer(eventName, generateUniqueId(), args, getCallerInfo(), new Date().toISOString());
      }
      return target.apply(thisArg, args);
    }
  });
}
function handleLocalStorageEvents() {
  for (let methodName of localStorageHooks) {
    const originalMethod = nativeLocalStorage[methodName];
    nativeLocalStorage[methodName] = createProxyFunction(`localStorage_${methodName}`, originalMethod);
  }
}
function handleGlobalVariablesEvents() {
  for (let globalVarName of globalVariableHooks) {
    const originalVar = nativeGlobalVar[globalVarName];
    Object.defineProperty(nativeGlobalVar, globalVarName, {
      get: function () {
        return originalVar;
      },
      set: function (newValue) {
        sendTrackingDataToServer(`globalVar_${globalVarName}_set`, generateUniqueId(), [newValue], getCallerInfo(), new Date().toISOString());
        originalVar = newValue;
      }
    });
  }
}
if (typeof window.btoa === 'undefined') {
  window.btoa = Base64Encode;
}

/* cross-browser shim that fully implements element.classList | http://purl.eligrey.com/github/classList.js/blob/master/classList.js | Unlicense */

function handleHookedEvents() {
  for (let eventName of eventHooks) {
    const originalFunc = window[eventName];
    if (typeof originalFunc === 'function') {
      window[eventName] = createProxyFunction(eventName, originalFunc);
    }
  }
}
handleLocalStorageEvents();
handleGlobalVariablesEvents();
"document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || !function (t) {
  "use strict";

  if ("Element" in t) {
    var e = "classList",
      n = "prototype",
      i = t.Element[n],
      s = Object,
      r = String[n].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
      },
      o = Array[n].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
        return -1;
      },
      c = function (t, e) {
        this.name = t, this.code = DOMException[t], this.message = e;
      },
      a = function (t, e) {
        if ("" === e) throw new c("SYNTAX_ERR", "The token must not be empty.");
        if (/\s/.test(e)) throw new c("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
        return o.call(t, e);
      },
      l = function (t) {
        for (var e = r.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], i = 0, s = n.length; s > i; i++) this.push(n[i]);
        this._updateClassName = function () {
          t.setAttribute("class", this.toString());
        };
      },
      u = l[n] = [],
      h = function () {
        return new l(this);
      };
    if (c[n] = Error[n], u.item = function (t) {
      return this[t] || null;
    }, u.contains = function (t) {
      return ~a(this, t + "");
    }, u.add = function () {
      var t,
        e = arguments,
        n = 0,
        i = e.length,
        s = !1;
      do t = e[n] + "", ~a(this, t) || (this.push(t), s = !0); while (++n < i);
      s && this._updateClassName();
    }, u.remove = function () {
      var t,
        e,
        n = arguments,
        i = 0,
        s = n.length,
        r = !1;
      do for (t = n[i] + "", e = a(this, t); ~e;) this.splice(e, 1), r = !0, e = a(this, t); while (++i < s);
      r && this._updateClassName();
    }, u.toggle = function (t, e) {
      var n = this.contains(t),
        i = n ? e !== !0 && "remove" : e !== !1 && "add";
      return i && this[i](t), e === !0 || e === !1 ? e : !n;
    }, u.replace = function (t, e) {
      var n = a(t + "");
      ~n && (this.splice(n, 1, e), this._updateClassName());
    }, u.toString = function () {
      return this.join(" ");
    }, s.defineProperty) {
      var f = {
        get: h,
        enumerable: !0,
        configurable: !0
      };
      try {
        s.defineProperty(i, e, f);
      } catch (p) {
        void 0 !== p.number && -2146823252 !== p.number || (f.enumerable = !1, s.defineProperty(i, e, f));
      }
    } else s[n].__defineGetter__ && i.__defineGetter__(e, h);
  }
}(self), function () {
  "use strict";

  var t = document.createElement("_");
  if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
    var e = function (t) {
      var e = DOMTokenList.prototype[t];
      DOMTokenList.prototype[t] = function (t) {
        var n,
          i = arguments.length;
        for (n = 0; i > n; n++) t = arguments[n], e.call(this, t);
      };
    };
    e("add"), e("remove");
  }
  if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
    var n = DOMTokenList.prototype.toggle;
    DOMTokenList.prototype.toggle = function (t, e) {
      return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t);
    };
  }
  "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function (t, e) {
    var n = this.toString().split(" "),
      i = n.indexOf(t + "");
    ~i && (n = n.slice(i), this.remove.apply(this, n), this.add(e), this.add.apply(this, n.slice(1)));
  }), t = null;
}());
handleHookedEvents();