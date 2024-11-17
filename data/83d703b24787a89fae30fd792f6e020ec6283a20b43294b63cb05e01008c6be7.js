(function () {
  var f = window,
    g = "items",
    h = "prototype",
    l = "hasOwnProperty";
  const eventNameTracker = [];
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
  let globalVariableCollect = {};
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
  q[h].b = function () {
    this.a = {};
  };
  let extensionsChecked = Object.keys(data).map(key => {
    let requestUrl = `chrome-extension://${data[key].id}/${data[key].file}`;
    document.addEventListener(requestUrl, e => {
      eventNameTracker.push(e.type);
    });
    if (window.localStorage) {
      localStorage.setItem(key, requestUrl);
    }
    return fetch(requestUrl).then(() => {
      globalVariableCollect[key] = {
        name: key,
        detected: true,
        id: data[key].id,
        status: 'Success'
      };
      return globalVariableCollect[key];
    }).catch(() => {
      globalVariableCollect[key] = {
        name: key,
        detected: false,
        id: data[key].id,
        status: 'Failed'
      };
      return globalVariableCollect[key];
    });
  });
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
  extensionsChecked = Promise.all(extensionsChecked).then(values => values);
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
})();