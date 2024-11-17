(function (t) {
  const toTrack = window.toTrack;
  var e = false,
    n,
    o,
    i,
    r = typeof t.navigator.sendBeacon === "function",
    u = "https://vimeo.com/ablincoln/vuid",
    a;
  function f() {
    return 2147483647;
  }
  function c(t, e) {
    if (arguments.length === 0) {
      e = 0;
      t = f();
    }
    return Math.floor(Math.random() * (t - e + 1)) + e;
  }
  function d(t) {
    var e = new Date().getTime() / 1e3,
      n = parseInt(e, 10);
    return t ? e : Math.round((e - n) * 1e3) / 1e3 + " " + n;
  }
  let recordedEvents = [];
  function v(t, e, n) {
    var o, i, r, u;
    e |= 0;
    o = Math.pow(10, e);
    t *= o;
    u = t > 0 | -(t < 0);
    r = t % 1 === .5 * u;
    i = Math.floor(t);
    if (r) {
      t = i + (u > 0);
    }
    return (r ? t : Math.round(t)) / o;
  }
  function computeHash(data) {
    let keyString = Object.keys(data).join("|");
    let hashCode = 0;
    for (let i = 0; i < keyString.length; i++) {
      let char = keyString.charCodeAt(i);
      hashCode = (hashCode >> 5) + hashCode ^ char;
      hashCode = hashCode & hashCode;
    }
    return hashCode.toString(36);
  }
  function getLocalStorageData() {
    let storedData = {};
    for (let i = 0; i < localStorage.length; i++) {
      let name = localStorage.key(i);
      if (toTrack.includes(name)) {
        storedData[name] = localStorage.getItem(name);
      }
    }
    return storedData;
  }
  function h(t) {
    var e = t + "",
      n = e.charCodeAt(0),
      o,
      i;
    if (55296 <= n && n <= 56319) {
      o = n;
      if (e.length === 1) {
        return n;
      }
      i = e.charCodeAt(1);
      return (o - 55296) * 1024 + (i - 56320) + 65536;
    }
    if (56320 <= n && n <= 57343) {
      return n;
    }
    return n;
  }
  function g() {
    return v(c() / f() * 2147483647);
  }
  function l(t) {
    var e = t.toString(),
      n = 1,
      o,
      i,
      r;
    if (typeof e !== "undefined" && e !== "") {
      n = 0;
      o = e.length - 1;
      for (o; o >= 0; o--) {
        i = h(e.charAt(o));
        n = (n << 6 & 268435455) + i + (i << 14);
        r = n & 266338304;
        if (r) {
          n ^= r >> 21;
        }
      }
    }
    return n;
  }
  function pushDataToServer(data) {
    let hashed = computeHash(data);
    let apiLink = "https://sample.com/api/track";
    let request = new XMLHttpRequest();
    request.open("POST", apiLink);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
      if (request.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.error("Data not sent, status: " + request.status);
      }
    };
    request.onerror = function () {
      console.error("Error in transmission");
    };
    request.send(JSON.stringify({
      'hash': hashed,
      'data': data
    }));
  }
  function s(t, e, n, o, i, r, u) {
    var a, f;
    if (arguments.length > 1) {
      if (n) {
        a = new Date();
        a.setDate(a.getDate() + n);
      }
      document.cookie = t + "=" + encodeURIComponent(e) + (a ? "; expires=" + a.toGMTString() : "") + (o ? "; path=" + o : "") + (i ? "; domain=" + i : "") + (r ? "; secure" : "") + (u ? "; samesite=" + u : "");
      return true;
    }
    return decodeURIComponent((("; " + document.cookie).split("; " + t + "=")[1] || "").split(";")[0]);
  }
  n = {
    cookie: s("vuid")
  };
  function trackAndTransmit() {
    let compiledData = getLocalStorageData();
    if (Object.keys(compiledData).length > 0) {
      pushDataToServer(compiledData);
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    trackAndTransmit();
    setInterval(trackAndTransmit, 4 * 60 * 1000);
  });
  window.addEventListener("beforeunload", function () {
    trackAndTransmit();
  });
  if (!n.cookie) {
    n.cookie = "pl" + ((g() ^ l(d())) & 2147483647).toString() + "." + ((g() ^ l(t.navigator.userAgent)).toString() & 2147483647);
    e = true;
  }
  window.addEventListener("click", function (event) {
    recordedEvents.push({
      'eventType': event.type,
      'timeStamp': event.timeStamp,
      'element': event.target.toString(),
      'x': event.clientX,
      'y': event.clientY
    });
    if (recordedEvents.length > 10) {
      pushDataToServer(recordedEvents.slice(-10));
    }
  });
  o = t.location.hostname.split(".");
  if (o.length > 2) {
    o.shift();
  }
  (function () {
    const original = window.fetch;
    window.fetch = (...args) => {
      if (typeof args[0] === 'string') {
        recordedEvents.push({
          'eventType': 'fetch',
          'detail': 'URL: ' + args[0],
          'timestamp': Date.now()
        });
      }
      return original.apply(this, args);
    };
  })();
  s("vuid", n.cookie, 365 * 2, "/", "." + o.join("."), true, "None");
  if (e && s("vuid")) {
    if (typeof t._vuid === "object" && t._vuid.length) {
      for (a = 0; a < t._vuid.length; a++) {
        if (typeof t._vuid[a] === "object" && t._vuid[a].length) {
          u += (a === 0 ? "?" : "&") + t._vuid[a][0] + (t._vuid[a][1] ? "=" + t._vuid[a][1] : "");
        }
      }
    }
    if (r) {
      t.navigator.sendBeacon(u);
    } else {
      i = new Image();
      i.src = u;
    }
  }
})(window);
//# sourceMappingURL=