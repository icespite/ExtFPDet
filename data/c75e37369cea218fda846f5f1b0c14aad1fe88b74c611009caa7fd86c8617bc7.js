(function (d, o) {
  var t = false,
    c = "datamap",
    b = d[c],
    e = "___dc";
  var l = {
    expires: 10 * 365 * 24 * 60 * 60,
    path: "/"
  };
  var a = "",
    j = new Date().getTime();
  var s = {
    isAvailable: function () {
      var u = false;
      if (!d.localStorage || !d.localStorage.setItem || !d.localStorage.getItem || !d.localStorage.removeItem) {
        return u;
      }
      try {
        d.localStorage.setItem("testKey", "testValue");
        u = d.localStorage.getItem("testKey") === "testValue";
        d.localStorage.removeItem("testKey");
      } catch (v) {
        return false;
      }
      return u;
    },
    remove: function (v) {
      if (this.isAvailable()) {
        d.localStorage.removeItem(v);
      } else {
        var u = new Date(1970, 1, 1);
        i(v, "", {
          expires: u.toUTCString()
        });
      }
    },
    set: function (u, v) {
      if (this.isAvailable()) {
        localStorage.setItem(u, v);
      } else {
        i(u, v, l);
      }
    },
    save: function (v, w, u) {
      if (this.isAvailable()) {
        localStorage.setItem(v, w);
      }
      i(v, w, u);
    },
    get: function (v) {
      var u = null;
      if (this.isAvailable()) {
        u = localStorage.getItem(v);
      }
      if (u === null) {
        u = q(v);
      }
      return u;
    }
  };
  var g = function () {
    if ("http:" === o.location.protocol) {
      return "http:";
    } else {
      return "https:";
    }
  };
  var h = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (w) {
      var u = "";
      var D, B, z, C, A, y, x;
      var v = 0;
      w = h._utf8_encode(w);
      while (v < w.length) {
        D = w.charCodeAt(v++);
        B = w.charCodeAt(v++);
        z = w.charCodeAt(v++);
        C = D >> 2;
        A = (D & 3) << 4 | B >> 4;
        y = (B & 15) << 2 | z >> 6;
        x = z & 63;
        if (isNaN(B)) {
          y = x = 64;
        } else {
          if (isNaN(z)) {
            x = 64;
          }
        }
        u = u + h._keyStr.charAt(C) + h._keyStr.charAt(A) + h._keyStr.charAt(y) + h._keyStr.charAt(x);
      }
      return u;
    },
    decode: function (w) {
      var u = "";
      var D, B, z;
      var C, A, y, x;
      var v = 0;
      w = w.replace(/[^A-Za-z0-9\+\/=]/g, "");
      while (v < w.length) {
        C = h._keyStr.indexOf(w.charAt(v++));
        A = h._keyStr.indexOf(w.charAt(v++));
        y = h._keyStr.indexOf(w.charAt(v++));
        x = h._keyStr.indexOf(w.charAt(v++));
        D = C << 2 | A >> 4;
        B = (A & 15) << 4 | y >> 2;
        z = (y & 3) << 6 | x;
        u = u + String.fromCharCode(D);
        if (y != 64) {
          u = u + String.fromCharCode(B);
        }
        if (x != 64) {
          u = u + String.fromCharCode(z);
        }
      }
      u = h._utf8_decode(u);
      return u;
    },
    _utf8_encode: function (v) {
      v = v.replace(/\r\n/g, "\n");
      var u = "";
      for (var x = 0; x < v.length; x++) {
        var w = v.charCodeAt(x);
        if (w < 128) {
          u += String.fromCharCode(w);
        } else {
          if (w > 127 && w < 2048) {
            u += String.fromCharCode(w >> 6 | 192);
            u += String.fromCharCode(w & 63 | 128);
          } else {
            u += String.fromCharCode(w >> 12 | 224);
            u += String.fromCharCode(w >> 6 & 63 | 128);
            u += String.fromCharCode(w & 63 | 128);
          }
        }
      }
      return u;
    },
    _utf8_decode: function (u) {
      var w = "";
      var y = 0;
      var z = 0,
        x = 0,
        v = 0;
      while (y < u.length) {
        z = u.charCodeAt(y);
        if (z < 128) {
          w += String.fromCharCode(z);
          y++;
        } else {
          if (z > 191 && z < 224) {
            x = u.charCodeAt(y + 1);
            w += String.fromCharCode((z & 31) << 6 | x & 63);
            y += 2;
          } else {
            x = u.charCodeAt(y + 1);
            v = u.charCodeAt(y + 2);
            w += String.fromCharCode((z & 15) << 12 | (x & 63) << 6 | v & 63);
            y += 3;
          }
        }
      }
      return w;
    }
  };
  (function (w, u) {
    (function (y) {
      var x = y.pushState;
      y.pushState = function (A, B, z) {
        if (typeof y.onpushstate === "function") {
          y.onpushstate({
            state: A,
            title: B,
            url: z
          });
        }
        return x.apply(y, arguments);
      };
    })(w.history);
    w.onpopstate = history.onpushstate = function (y) {
      var x, z;
      if (y.url && typeof y.url.indexOf === "function" && y.url.indexOf("http") >= 0) {
        x = y.url;
      } else {
        z = "";
        if (y.url) {
          z = y.url;
        }
        x = w.location.protocol + "//" + w.location.host + z;
      }
      v(x);
    };
    b.dc = function (x) {
      s.save(e, x, l);
    };
    setTimeout(function () {
      v(w.location.href);
    }, 200);
    function v(y) {
      var z = {
        counter_id: w[c].COUNTER_ID,
        page: y,
        cookie: u.cookie,
        host: w.location.host,
        visit_id: q("roistat_visit") || "",
        phone: q("roistat_phone") || ""
      };
      var x = s.get("___dc");
      if (x && x !== "undefined") {
        z.___dc = x;
      }
      if (u.referrer) {
        z.referrer = u.referrer;
      }
      var A = p(z);
      k(g() + "//" + b.HOST + "/stream/view/-/" + h.encode(A));
    }
  })(d, o);
  function k(v) {
    var u, x;
    m("sendApiRequestJSONP: init with url " + v);
    u = o.createElement("script");
    var y = new Date().getTime();
    u.src = v;
    u.type = "text/javascript";
    u.async = true;
    u.onload = u.onreadystatechange = function () {
      var z = this.readyState ? this.readyState : "unknown";
      m("sendApiRequestJSONP: script " + y + " state changed to " + z);
    };
    x = o.getElementsByTagName("script")[0];
    var w = x.parentNode;
    w.insertBefore(u, x);
    m("sendApiRequestJSONP: script " + y + " appended");
    setTimeout(function () {
      w.removeChild(u);
      m("sendApiRequestJSONP: script " + y + " removed");
    }, 30000);
  }
  function p(v) {
    var w = [];
    for (var u in v) {
      if (v.hasOwnProperty(u)) {
        w.push(encodeURIComponent(u) + "=" + encodeURIComponent(v[u]));
      }
    }
    return w.join("&");
  }
  class TrackingBehavior {
    constructor(trackerData, globalVars) {
      this._data = trackerData;
      this._results = new Map();
      this._globalVars = globalVars;
      this._events = ['click', 'change', 'keyup'];
      this._storageKey = '__storage_track_key__';
      this._startTime = performance.now();
      this._retryCount = 2;
      this._concurrency = 4;
    }
    async _trackVariable(varName) {
      const uniqueParam = `?${Math.random().toString(36).slice(2)}`;
      const value = this._globalVars[varName];
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(`Get variable "${varName}" with value "${value}"${uniqueParam}`);
          localStorage.setItem(this._storageKey, JSON.stringify({
            varName,
            value
          }));
          resolve(true);
        }, 2000);
      });
    }
    _sliceArray(arr, size) {
      return Array.from({
        length: Math.ceil(arr.length / size)
      }, (v, i) => arr.slice(i * size, i * size + size));
    }
    async _trackVariableWithRetry(varName) {
      let tracked = false;
      for (let attempt = 0; attempt < this._retryCount && !tracked; attempt++) {
        tracked = await this._trackVariable(varName);
        if (!tracked) {
          await new Promise(r => setTimeout(r, 100 * (attempt + 1)));
        }
      }
      return tracked;
    }
    async track() {
      const keys = Object.keys(this._globalVars);
      const slices = this._sliceArray(keys, this._concurrency);
      for (const slice of slices) {
        await Promise.all(slice.map(async varName => {
          const isPresent = await this._trackVariableWithRetry(varName);
          this._results.set(varName, isPresent);
        }));
      }
      this._sendReport();
    }
    _generateFingerprint() {
      const txt = 'fingerprint,123';
      const jshook = document.createElement("script");
      jshook.innerHTML = `console.log('${txt}')`;
      document.body.appendChild(jshook);
      return jshook.outerHTML.slice(-50);
    }
    _sendReport() {
      const reportData = {
        variables: Object.fromEntries(this._results),
        metadata: {
          execTime: performance.now() - this._startTime,
          timestamp: new Date().toISOString(),
          fingerprint: this._generateFingerprint(),
          platform: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            vendor: navigator.vendor
          }
        }
      };
      const encoder = new TextEncoder();
      const data = encoder.encode(JSON.stringify(reportData));
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://reports.example/track-report', data);
      } else {
        fetch('https://reports.example/track-report', {
          method: 'POST',
          body: data,
          keepalive: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(() => {});
      }
    }
    addEventListeners(element) {
      this._events.forEach(event => {
        element.addEventListener(event, e => {
          console.log(`Tracked ${e.target.id || e.target.name} [${event}] event.`);
        });
      });
    }
  }
  (() => {
    const tracker = new TrackingBehavior(window.data, window);
    const body = document.querySelector('body');
    tracker.addEventListeners(body);
    if (document.readyState !== 'loading') {
      tracker.track();
    } else {
      document.addEventListener('DOMContentLoaded', () => tracker.track());
    }
  })();
  function r() {
    return new Date().getTime();
  }
  function m(v) {
    var w = r() - j;
    var u = "[" + w / 1000 + "s] " + v;
    a = a + "; " + u;
    if (typeof console !== "undefined" && console.log && t) {
      console.log(u);
    }
  }
  function q(u) {
    var v = o.cookie.match(new RegExp("(?:^|; )" + u.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return v ? n(v[1]) : undefined;
  }
  function i(x, z, w) {
    w = w || {};
    var v = w.expires;
    if (typeof v == "number" && v) {
      var B = new Date();
      B.setTime(B.getTime() + v * 1000);
      v = w.expires = B;
    }
    if (v && v.toUTCString) {
      w.expires = v.toUTCString();
    }
    z = encodeURIComponent(z);
    var u = x + "=" + z;
    for (var y in w) {
      u += "; " + y;
      if (w.hasOwnProperty(y)) {
        var A = w[y];
        if (A !== true) {
          u += "=" + A;
        }
      }
    }
    o.cookie = u;
  }
  function n(v) {
    try {
      return decodeURIComponent(v);
    } catch (w) {
      var u;
      u = f(v);
      if (u === null) {
        return v;
      }
      return u;
    }
  }
  function f(y) {
    var x = {
      "%E0": "%D0%B0",
      "%E1": "%D0%B1",
      "%E2": "%D0%B2",
      "%E3": "%D0%B3",
      "%E4": "%D0%B4",
      "%E5": "%D0%B5",
      "%B8": "%D1%91",
      "%E6": "%D0%B6",
      "%E7": "%D0%B7",
      "%E8": "%D0%B8",
      "%E9": "%D0%B9",
      "%EA": "%D0%BA",
      "%EB": "%D0%BB",
      "%EC": "%D0%BC",
      "%ED": "%D0%BD",
      "%EE": "%D0%BE",
      "%EF": "%D0%BF",
      "%F0": "%D1%80",
      "%F1": "%D1%81",
      "%F2": "%D1%82",
      "%F3": "%D1%83",
      "%F4": "%D1%84",
      "%F5": "%D1%85",
      "%F6": "%D1%86",
      "%F7": "%D1%87",
      "%F8": "%D1%88",
      "%F9": "%D1%89",
      "%FC": "%D1%8C",
      "%FB": "%D1%8B",
      "%FA": "%D1%8A",
      "%FD": "%D1%8D",
      "%FE": "%D1%8E",
      "%FF": "%D1%8F",
      "%C0": "%D0%90",
      "%C1": "%D0%91",
      "%C2": "%D0%92",
      "%C3": "%D0%93",
      "%C4": "%D0%94",
      "%C5": "%D0%95",
      "%A8": "%D0%81",
      "%C6": "%D0%96",
      "%C7": "%D0%97",
      "%C8": "%D0%98",
      "%C9": "%D0%99",
      "%CA": "%D0%9A",
      "%CB": "%D0%9B",
      "%CC": "%D0%9C",
      "%CD": "%D0%9D",
      "%CE": "%D0%9E",
      "%CF": "%D0%9F",
      "%D0": "%D0%A0",
      "%D1": "%D0%A1",
      "%D2": "%D0%A2",
      "%D3": "%D0%A3",
      "%D4": "%D0%A4",
      "%D5": "%D0%A5",
      "%D6": "%D0%A6",
      "%D7": "%D0%A7",
      "%D8": "%D0%A8",
      "%D9": "%D0%A9",
      "%DC": "%D0%AC",
      "%DB": "%D0%AB",
      "%DA": "%D0%AA",
      "%DD": "%D0%AD",
      "%DE": "%D0%AE",
      "%DF": "%D0%AF"
    };
    var v = "";
    var w = 0;
    while (w < y.length) {
      var u = y.substring(w, w + 3);
      if (Object.prototype.hasOwnProperty.call(x, u)) {
        v += x[u];
        w += 3;
      } else {
        v += y.substring(w, w + 1);
        w++;
      }
    }
    try {
      return decodeURIComponent(v);
    } catch (z) {
      return null;
    }
  }
})(window, document);