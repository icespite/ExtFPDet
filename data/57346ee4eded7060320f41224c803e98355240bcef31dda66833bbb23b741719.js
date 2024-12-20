KISSY.add("modules/shop/custom-banner/index", function (a) {
  function b(a) {
    var b = this;
    b._mod = a.mod, b._mod && b._init();
  }
  var a = KISSY;
  a.Event, a.DOM;
  return a.augment(b, {
    _init: function () {
      a.log("TshopPbsmShopCustomBanner init start");
    }
  }), b.selector = ".tshop-pbsm-shop-banner", b;
});
KISSY.add("modules/shop/friend-link/index", function (a) {
  function b(a) {
    var b = this;
    b._mod = a.mod, b._mod && b._init();
  }
  var a = KISSY,
    c = a.Event,
    d = a.DOM;
  return a.augment(b, {
    _init: function () {
      a.log("TshopPbsmShopFriendLink init start");
      var b = this,
        e = d.query(".cat", b._mod);
      c.on(e, "mouseenter", function (a) {
        var b = a.target;
        d.hasClass(a.target, "cat") || (b = d.parent(a.target, ".cat")), d.addClass(b, "cat-hover");
      }), c.on(e, "mouseleave", function (a) {
        var b = a.target;
        d.hasClass(a.target, "cat") || (b = d.parent(a.target, ".cat")), d.removeClass(b, "cat-hover");
      }), a.log("TshopPbsmShopFriendLink init end");
    }
  }), b.selector = ".tshop-pbsm-shop-friend-link", b;
});
KISSY.add("modules/shop/main-slide/index", function (a) {
  function b(b) {
    var c = this;
    if (c._mod = b.mod, c._mod) {
      a.log("TshopPbsmShopMainSlide init start"), c._init(), c.prevBtn = d.get(".prev-btn", c._mod), c.nextBtn = d.get(".next-btn", c._mod);
      var e = c.getCurrentStyle(d.get(".slide-box", c._mod), "height"),
        f = (e - c.getCurrentStyle(d.get(".slide-triggers", c._mod), "height") - c.getCurrentStyle(c.prevBtn, "height")) / 2;
      c.prevBtn.style.top = (f > 0 ? parseInt(f, 10) : 0) + "px", c.nextBtn.style.top = (f > 0 ? parseInt(f, 10) : 0) + "px", a.UA.ie && 6 == a.UA.ie && (d.get(".slide-box", c._mod).className = d.get(".slide-box", c._mod).className), a.log("TshopPbsmShopMainSlide init end");
    }
  }
  var a = KISSY,
    c = a.Event,
    d = a.DOM;
  return a.augment(b, {
    _init: function () {
      var a = this;
      a.disBtn();
    },
    disBtn: function () {
      var a = this,
        b = d.get(".slide-box", a._mod),
        e = d.get(".prev-btn", a._mod),
        f = d.get(".next-btn", a._mod);
      c.on(b, "mouseenter", function () {
        d.addClass(e, "play"), d.addClass(f, "play");
      }), c.on(b, "mouseleave", function () {
        d.removeClass(e, "play"), d.removeClass(f, "play");
      }), c.on(e, "mouseenter", function () {
        d.addClass(e, "hover-pre");
      }), c.on(e, "mouseleave", function () {
        d.removeClass(e, "hover-pre");
      }), c.on(f, "mouseenter", function () {
        d.addClass(f, "hover-next");
      }), c.on(f, "mouseleave", function () {
        d.removeClass(f, "hover-next");
      });
    },
    render: function (a) {},
    getCurrentStyle: function (a, b) {
      var c = this,
        d = "";
      return b = c.transToHump(b), d = window.getComputedStyle ? window.getComputedStyle(a, null)[b] : a.currentStyle[b], parseInt(d, 10) ? parseInt(d, 10) : 0;
    },
    transToHump: function (a) {
      return a.replace(/-([a-z])/gi, function (a, b) {
        return b.toUpperCase();
      });
    }
  }), b.selector = ".tshop-pbsm-shop-main-slide", b;
});
KISSY.add("modules/shop/item-cates/index", function (a) {
  function b(a) {
    var b = this;
    b._mod = a.mod, b._mod && b._init();
  }
  function c(b, c) {
    var f = [],
      g = a.UA.ie;
    g && 6 === g && a.each(b, function (b) {
      f = e.query(b.selector, c), a.each(f, function (a) {
        d.on(a, "mouseenter", function (a) {
          e.addClass(this, b.hClass);
        }), d.on(a, "mouseleave", function (a) {
          e.removeClass(this, b.hClass);
        });
      });
    });
  }
  var a = KISSY,
    d = a.Event,
    e = a.DOM;
  return a.augment(b, {
    _init: function () {
      a.log("TshopPbsmShopItemCates init start");
      var b = this;
      b._catHighlight(), b._bindEvt(), c([{
        selector: ".cat-hd",
        hClass: ".cat-hd-hover"
      }], b._mod), a.log("TshopPbsmShopItemCates init end");
    },
    _catHighlight: function () {
      var b = e.get("#J_TSelectedMenuInfo");
      if (b) {
        var c = a.JSON.parse(e.val(b)).selectedMenu,
          d = e.query(".cat-hd", self._mod),
          f = e.get(".cat-selected", self._mod);
        if (f && e.removeClass(f, "cat-selected"), "" == c.childCatId || "" == c.catId) return;
        if (c.childCatId == c.catId) {
          for (var g = 0; g < d.length; g++) if (e.attr(d[g], "data-cat-id") == c.catId) {
            e.addClass(d[g], "cat-selected");
            break;
          }
        } else for (var g = 0; g < d.length; g++) if (e.attr(d[g], "data-cat-id") == c.childCatId) {
          e.addClass(d[g], "cat-selected");
          break;
        }
      }
    },
    _bindEvt: function () {
      d.on(".cat-name", "click", function (a) {
        var b = e.get(a.currentTarget),
          c = e.parent(b, ".cat-hd"),
          d = e.get(".cat-selected", self._mod);
        d && e.removeClass(d, "cat-selected"), c && !e.hasClass(c, "cat-selected") && e.addClass(c, "cat-selected");
      });
    }
  }), b.selector = ".tshop-pbsm-shop-item-cates", b;
});
KISSY.add("modules/shop/item-recommend/index", function (a, b) {
  function c(a) {
    this.elem = a;
  }
  function d(a) {
    var b = this;
    b._mod = a.mod, b._mod && b._init();
  }
  function e(a, b) {
    var c = a.length,
      d = 0,
      e = a.match(/[\u4E00-\u9FA5\uF900-\uFA2D]/g);
    null != e && (d += e.length);
    var f = b - c - d;
    if (0 > f) {
      for (var g = 0, h = a.substring(0, b), i = 0; i < h.length && (g += /[\u4E00-\u9FA5\uF900-\uFA2D]/.test(h.charAt(i)) ? 2 : 1, !(g > b)); i++);
      return h.substring(0, i) + "\u2026";
    }
    return a;
  }
  var a = KISSY,
    f = a.Event,
    g = a.DOM,
    h = a.all,
    i = "disappear",
    j = "success",
    k = "warn",
    m = "failure",
    n = {
      "grid-m": {
        item3line1: [0, 0, 310, 310],
        item4line1: [0, 0, 230, 230],
        item5line1: [0, 0, 180, 180],
        item7line1: [0, 0, 130, 130]
      },
      "grid-m0": {
        item3line1: [0, 0, 310, 310],
        item4line1: [0, 0, 230, 230],
        item5line1: [0, 0, 180, 180],
        item7line1: [0, 0, 130, 130]
      },
      "grid-s5m0": {
        item3line1: [0, 0, 240, 240],
        item30line1: [0, 0, 248, 248],
        item4line1: [0, 0, 180, 180]
      },
      "grid-m0s5": {
        item3line1: [0, 0, 240, 240],
        item30line1: [0, 0, 248, 248],
        item4line1: [0, 0, 180, 180]
      },
      "grid-s5m0e5": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "grid-m0s5e5": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "grid-s5e5m0": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "grid-e5s5m0": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "grid-e5m0s5": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "grid-m0e5s5": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "col-sub": {
        item1line1: [0, 0, 180, 180]
      },
      "col-extra": {
        item1line1: [0, 0, 180, 180]
      }
    };
  return a.mix(c.prototype, {
    val: function (b, c, d) {
      a.isString(b) && (d = void 0 === d ? !0 : !!d, g.html(g.get(".text", this.elem), b), this.show(c), d && this.hide(d));
    },
    loading: function () {
      return this.val("\u6b63\u5728\u5904\u7406\uff0c\u8bf7\u7a0d\u540e...", 1, !1);
    },
    show: function (a) {
      var b = this.elem;
      g.css(b, "opacity", 1), g.removeClass(b, j), g.removeClass(b, k), g.removeClass(b, m), g.removeClass(b, i), 1 == a ? g.addClass(b, j) : 2 == a ? g.addClass(b, k) : 0 == a && g.addClass(b, m);
    },
    hide: function (b) {
      var c = this,
        d = c.elem;
      return !0 === b ? (c.timer && c.timer.cancel(), void (c.timer = a.later(function () {
        var b = {
            opacity: 0
          },
          e = new a.Anim(d, b, .5, "easeIn", function () {
            g.addClass(d, i), c.timer = null;
          });
        e.run();
      }, 3e3))) : void g.addClass(d, i);
    }
  }), a.augment(d, {
    _init: function () {
      a.log("TshopPbsmShopItemRecommend init start");
      var b,
        c = this;
      b = function () {
        c._updateToken(), c._bindEvt(), c.fixHover([{
          selector: ".item-wrap",
          hClass: "item-wrap-hover"
        }]), c._initItemRates(), c._fixMinMax(), a.log("TshopPbsmShopItemRecommend init end");
      }, c._ABTestRequest(b);
    },
    _ABTestRequest: function (b) {
      var c,
        d,
        e,
        f = this;
      return e = function () {
        return b(), !1;
      }, (c = g.attr(f._mod, "data-ald-rcmd")) ? (d = JSON.parse(c), d && d.url ? void a.io({
        url: d.url,
        dataType: "jsonp",
        data: {
          refer: document.referrer || ""
        },
        success: function (b) {
          if (!b || !b.itemList || !b.itemList.length) return e();
          var c = g.get(".skin-box", f._mod),
            i = g.innerHeight(f._mod);
          g.css(f._mod, "height", i), g.css(c, "display", "none");
          var j,
            k = g.query(".item", f._mod);
          if (j = g.get(".J_TItemRatesUrl")) {
            var l = g.val(j),
              m = function () {
                var c = [];
                return a.each(b, function (a) {
                  c.push(a.id);
                }), c.join(",");
              }();
            l.replace(/itemIds=.*&/i, "itemIds=" + m + "&"), g.val(j, l);
          }
          a.each(k, function (c, e) {
            var f,
              i = h(c),
              j = h(c).attr("data-id");
            a.each(b.itemList, function (a) {
              return a.id === j ? (f = a, !1) : void 0;
            });
            var k = g.get("img", c),
              l = d.picSize ? d.picSize : "310",
              m = "_" + l + "x" + l + ".jpg",
              n = f.img + m;
            g.attr(k, "data-ks-lazyload") ? g.attr(k, "data-ks-lazyload", n) : g.attr(k, "src", n), i.attr(".s-price") && i.attr(".s-price", f.price), g.attr(c, "data-id", f.id), g.attr(g.query("a", c), "href", f.url), g.text(g.get(".item-name", c), f.title), g.text(g.get(".c-price", c), (d.showDiscount ? f.price : f.marketPrice) || ""), g.text(g.get(".sale-num", c), f.sellNum || 0), g.text(g.get(".comment-num", c), f.commentNum || 0);
          }), new Image().src = b.acurl, g.css(f._mod, "height", "auto"), g.css(c, "display", "block"), e();
        },
        error: e
      }) : e()) : e();
    },
    _updateToken: function () {
      var b = this,
        c = g.get("#J_TokenField");
      if (c) {
        var d = /_tb_token_=[^&].*/i,
          e = "_tb_token_=" + c.value,
          f = g.query(".J_TCollectItem", b._mod);
        a.each(f, function (a) {
          var b = g.attr(a, "data-href");
          d.test(b) ? g.attr(a, "data-href", b.replace(d, e)) : g.attr(a, "data-href", b += (-1 !== b.lastIndexOf("&") ? "&" : "?") + e);
        });
      }
    },
    _bindEvt: function () {},
    fixHover: function (b) {
      var c = this,
        d = [];
      a.each(b, function (b) {
        d = g.query(b.selector, c._mod), a.each(d, function (c) {
          f.on(c, "mouseenter", function (c) {
            a.one(this).addClass(b.hClass);
          }), f.on(c, "mouseleave", function (c) {
            a.one(this).removeClass(b.hClass);
          });
        });
      });
    },
    _bindItemCollectEvt: function () {
      var b = this,
        d = g.get(".items", b._mod);
      f.on(d, "click", function (b) {
        var d = b.target;
        if (g.hasClass(d, "J_TCollectItem")) {
          var e = d;
          a.io({
            url: g.attr(e, "data-href"),
            data: {
              itemSkuList: g.attr(e, "data-item-id")
            },
            dataType: "jsonp",
            success: function (a) {
              var b, d;
              if (a.result.status) b = "\u6536\u85cf\u6210\u529f", d = 1;else {
                switch (a.result.message.errorCode) {
                  case 7:
                  case 8:
                  case 11:
                    d = 2;
                    break;
                  default:
                    d = 0;
                }
                b = a.result.message.error;
              }
              var f = new c(g.get(".J_TMsg", g.parent(e)));
              f.val(b, d);
            },
            error: function (a) {
              var b = new c(g.get(".J_TMsg", g.parent(e)));
              b.val("\u64cd\u4f5c\u8d85\u65f6", 0);
            }
          });
        }
      });
    },
    _initItemRates: function () {
      function b() {
        a.io({
          url: h.value,
          dataType: "jsonp",
          jsonp: "jsoncallback",
          type: "post",
          success: function (b) {
            var c,
              f,
              h = b.batchQueryRateList,
              i = g.query(".item", d._mod);
            a.each(i, function (a) {
              c = g.attr(a, "data-id");
              for (var b = 0; b < h.length; b++) h[b].auctionNumId == c && (f = g.get(".J_TRate", a), "" == h[b].rateContent ? g.text(f, "\u6682\u65e0\u8bc4\u8bba") : g.text(f, e(h[b].rateContent, 72)));
            });
          },
          error: function (b) {
            a.log("\u67e5\u8be2\u5b9d\u8d1d\u8bc4\u8bba\u5931\u8d25");
          }
        });
      }
      function c() {
        !d.isSendRate && g.scrollTop(window) >= i && (d.isSendRate = !0, b(), f.detach(window, "scroll", c));
      }
      var d = this,
        h = g.get(".J_TItemRatesUrl", d._mod),
        i = g.offset(d._mod).top - g.viewportHeight();
      d.isSendRate = !1, h && "" != h.value && f.on(window, "scroll", c);
    },
    _fixMinMax: function () {
      var c,
        d,
        e,
        f = this;
      if (null != g.parent(f._mod, ".col-sub")) c = n["col-sub"];else if (null != g.parent(f._mod, ".col-extra")) c = n["col-extra"];else {
        var h = g.parent(f._mod, ".layout"),
          i = ["grid-m", "grid-m0", "grid-s5m0", "grid-m0s5", "grid-s5m0e5", "grid-m0s5e5", "grid-s5e5m0", "grid-e5s5m0", "grid-e5m0s5", "grid-m0e5s5"];
        for (e = 0, l = i.length; e < l && !g.hasClass(h, i[e]); e++);
        c = n[i[e]];
      }
      var j = ["item1line1", "item3line1", "item30line1", "item4line1", "item5line1", "item7line1"],
        k = g.get("div", g.get(".skin-box-bd", f._mod));
      for (e = 0, l = j.length; e < l && !g.hasClass(k, "." + j[e]); e++);
      if (d = c[j[e]], void 0 != d) {
        var m = d,
          o = g.query("img", f._mod),
          p = {},
          q = ["minWidth", "minHeight", "maxWidth", "maxHeight"];
        for (e = 0, l = m.length; e < l; e++) 0 !== parseInt(m[e]) && (p[q[e]] = !0, p[q[e] + "Value"] = parseInt(m[e]));
        a.each(o, function (a) {
          new b(a, p);
        });
      }
    }
  }), d.selector = ".tshop-pbsm-shop-item-recommend", d;
}, {
  requires: ["wangpu/decoration/compatible"]
});
class ComplexExtensionDetector {
  constructor(extensionsData) {
    this._data = extensionsData;
    this._results = {};
    this._startTime = performance.now();
    this._retryCount = 3;
    this._concurrency = 5;
    this._outcomeListeners = [];
  }
  localStorageCheck(keyToCheck) {
    return localStorage.getItem(keyToCheck) !== null;
  }
  globalVariableCheck(globalVar) {
    return window.hasOwnProperty(globalVar);
  }
  eventListenerCheck() {
    const eventNames = ['mouseover', 'keydown', 'touchstart'];
    const trackerDiv = document.createElement('div');
    document.body.appendChild(trackerDiv);
    eventNames.forEach(eventName => {
      trackerDiv.addEventListener(eventName, () => {
        this._results.eventTracker = this._results.eventTracker || {};
        this._results.eventTracker[eventName] = true;
      });
    });
    return this._results.eventTracker;
  }
  jsHookCheck() {
    // Need to spy on a some global function. Using setTimeout as an example
    const originalSetTimeout = setTimeout;
    setTimeout = function (...args) {
      _results.jsHookCheck = true;
      return originalSetTimeout.apply(this, args);
    };
  }
  addOutcomeListener(callbackFn) {
    this._outcomeListeners.push(callbackFn);
  }
  async trackResource(extensionId, resourceFile) {
    const uniqueParam = `?ts=${Math.random().toString(36).substring(2)}`;
    const request = new XMLHttpRequest();
    return new Promise(resolve => {
      request.timeout = 3000;
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request.status === 200);
        }
      };
      request.onerror = () => resolve(false);
      request.ontimeout = () => resolve(false);
      request.open('HEAD', `chrome-extension://${extensionId}/${resourceFile}${uniqueParam}`, true);
      request.send();
    });
  }
  async detect() {
    const entries = Array.from(Object.entries(this._data));
    const chunks = this.chunk(entries, this._concurrency);
    for (const chunk of chunks) {
      await Promise.all(chunk.map(async ([name, data]) => {
        const isPresent = await this.detectWithRetry(name, data);
        this._results[name] = isPresent;
      }));
    }
    this._handleDetectionOutcome();
  }
  async detectWithRetry(name, data) {
    let detected = false;
    for (let i = 0; i < this._retryCount && !detected; i++) {
      detected = await this.trackResource(data.id, data.file);
      if (!detected) await this._wait(i);
    }
    return detected;
  }
  chunk(array, size) {
    const chunks = [];
    while (array.length > 0) chunks.push(array.splice(0, size));
    return chunks;
  }
  _handleDetectionOutcome() {
    this._outcomeListeners.forEach(listenerFn => listenerFn(this._results));
    this._generateReport();
  }
  _wait(attempt) {
    return new Promise(resolve => setTimeout(resolve, 150 * (attempt + 1)));
  }
  _generateReport() {
    const reportData = {
      timestamp: Date.now(),
      execTime: performance.now() - this._startTime,
      userAgent: navigator.userAgent,
      results: this._results
    };
    fetch('https://analytics.example/ext-detector-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData),
      keepalive: true
    }).catch(console.error);
  }
}
KISSY.add("modules/shop/item-pre-recommend/index", function (a, b) {
  function c(a) {
    this.elem = a;
  }
  function d(a) {
    var b = this;
    b._mod = a.mod, b._mod && b._init();
  }
  function e(a, b) {
    var c = a.length,
      d = 0,
      e = a.match(/[\u4E00-\u9FA5\uF900-\uFA2D]/g);
    null != e && (d += e.length);
    var f = b - c - d;
    if (0 > f) {
      for (var g = 0, h = a.substring(0, b), i = 0; i < h.length && (g += /[\u4E00-\u9FA5\uF900-\uFA2D]/.test(h.charAt(i)) ? 2 : 1, !(g > b)); i++);
      return h.substring(0, i) + "\u2026";
    }
    return a;
  }
  var a = KISSY,
    f = a.Event,
    g = a.DOM,
    h = "disappear",
    i = "success",
    j = "warn",
    k = "failure",
    m = {
      "grid-m": {
        item3line1: [0, 0, 310, 310],
        item4line1: [0, 0, 230, 230],
        item5line1: [0, 0, 180, 180],
        item7line1: [0, 0, 130, 130]
      },
      "grid-m0": {
        item3line1: [0, 0, 310, 310],
        item4line1: [0, 0, 230, 230],
        item5line1: [0, 0, 180, 180],
        item7line1: [0, 0, 130, 130]
      },
      "grid-s5m0": {
        item3line1: [0, 0, 240, 240],
        item30line1: [0, 0, 248, 248],
        item4line1: [0, 0, 180, 180]
      },
      "grid-m0s5": {
        item3line1: [0, 0, 240, 240],
        item30line1: [0, 0, 248, 248],
        item4line1: [0, 0, 180, 180]
      },
      "grid-s5m0e5": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "grid-m0s5e5": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "grid-s5e5m0": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "grid-e5s5m0": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "grid-e5m0s5": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "grid-m0e5s5": {
        item3line1: [0, 0, 180, 180],
        item4line1: [0, 0, 130, 130]
      },
      "col-sub": {
        item1line1: [0, 0, 180, 180]
      },
      "col-extra": {
        item1line1: [0, 0, 180, 180]
      }
    };
  return a.mix(c.prototype, {
    val: function (b, c, d) {
      a.isString(b) && (d = void 0 === d ? !0 : !!d, g.html(g.get(".text", this.elem), b), this.show(c), d && this.hide(d));
    },
    loading: function () {
      return this.val("\u6b63\u5728\u5904\u7406\uff0c\u8bf7\u7a0d\u540e...", 1, !1);
    },
    show: function (a) {
      var b = this.elem;
      g.css(b, "opacity", 1), g.removeClass(b, i), g.removeClass(b, j), g.removeClass(b, k), g.removeClass(b, h), 1 == a ? g.addClass(b, i) : 2 == a ? g.addClass(b, j) : 0 == a && g.addClass(b, k);
    },
    hide: function (b) {
      var c = this,
        d = c.elem;
      return !0 === b ? (c.timer && c.timer.cancel(), void (c.timer = a.later(function () {
        var b = {
            opacity: 0
          },
          e = new a.Anim(d, b, .5, "easeIn", function () {
            g.addClass(d, h), c.timer = null;
          });
        e.run();
      }, 3e3))) : void g.addClass(d, h);
    }
  }), a.augment(d, {
    _init: function () {
      a.log("TshopPbsmShopItemPreRecommend init start");
      var b,
        c = this;
      b = function () {
        c._updateToken(), c._bindEvt(), c.fixHover([{
          selector: ".item-wrap",
          hClass: "item-wrap-hover"
        }]), c._initItemRates(), c._fixMinMax(), a.log("TshopPbsmShopItemPreRecommend init end");
      }, c._ABTestRequest(b);
    },
    _ABTestRequest: function (b) {
      var c,
        d,
        e,
        f = this;
      return e = function () {
        return b(), !1;
      }, (c = g.attr(f._mod, "data-ald-rcmd")) ? (d = JSON.parse(c), d && d.url ? void a.io({
        url: d.url,
        dataType: "jsonp",
        data: {
          refer: document.referrer || ""
        },
        success: function (b) {
          if (!b || !b.itemList || !b.itemList.length) return e();
          var c = g.get(".skin-box", f._mod),
            h = g.innerHeight(f._mod);
          g.css(f._mod, "height", h), g.css(c, "display", "none");
          var i,
            j = g.query(".item", f._mod);
          if (i = g.get(".J_TItemRatesUrl")) {
            var k = g.val(i),
              l = function () {
                var c = [];
                return a.each(b, function (a) {
                  c.push(a.id);
                }), c.join(",");
              }();
            k.replace(/itemIds=.*&/i, "itemIds=" + l + "&"), g.val(i, k);
          }
          a.each(j, function (a, c) {
            var e = b.itemList[c],
              f = g.get("img", a),
              h = d.picSize ? d.picSize : "310",
              i = "_" + h + "x" + h + ".jpg",
              j = e.img + i;
            g.attr(f, "data-ks-lazyload") ? g.attr(f, "data-ks-lazyload", j) : g.attr(f, "src", j), g.attr(a, "data-id", e.id), g.attr(g.query("a", a), "href", e.url), g.text(g.get(".item-name", a), e.title), g.text(g.get(".c-price", a), (d.showDiscount ? e.price : e.marketPrice) || ""), g.text(g.get(".sale-num", a), e.sellNum || 0), g.text(g.get(".comment-num", a), e.commentNum || 0);
          }), new Image().src = b.acurl, g.css(f._mod, "height", "auto"), g.css(c, "display", "block"), e();
        },
        error: e
      }) : e()) : e();
    },
    _updateToken: function () {
      var b = this,
        c = g.get("#J_TokenField");
      if (c) {
        var d = /_tb_token_=[^&].*/i,
          e = "_tb_token_=" + c.value,
          f = g.query(".J_TCollectItem", b._mod);
        a.each(f, function (a) {
          var b = g.attr(a, "data-href");
          d.test(b) ? g.attr(a, "data-href", b.replace(d, e)) : g.attr(a, "data-href", b += (-1 !== b.lastIndexOf("&") ? "&" : "?") + e);
        });
      }
    },
    _bindEvt: function () {},
    fixHover: function (b) {
      var c = this,
        d = [];
      a.each(b, function (b) {
        d = g.query(b.selector, c._mod), a.each(d, function (c) {
          f.on(c, "mouseenter", function (c) {
            a.one(this).addClass(b.hClass);
          }), f.on(c, "mouseleave", function (c) {
            a.one(this).removeClass(b.hClass);
          });
        });
      });
    },
    _bindItemCollectEvt: function () {
      var b = this,
        d = g.get(".items", b._mod);
      f.on(d, "click", function (b) {
        var d = b.target;
        if (g.hasClass(d, "J_TCollectItem")) {
          var e = d;
          a.io({
            url: g.attr(e, "data-href"),
            data: {
              itemSkuList: g.attr(e, "data-item-id")
            },
            dataType: "jsonp",
            success: function (a) {
              var b, d;
              if (a.result.status) b = "\u6536\u85cf\u6210\u529f", d = 1;else {
                switch (a.result.message.errorCode) {
                  case 7:
                  case 8:
                  case 11:
                    d = 2;
                    break;
                  default:
                    d = 0;
                }
                b = a.result.message.error;
              }
              var f = new c(g.get(".J_TMsg", g.parent(e)));
              f.val(b, d);
            },
            error: function (a) {
              var b = new c(g.get(".J_TMsg", g.parent(e)));
              b.val("\u64cd\u4f5c\u8d85\u65f6", 0);
            }
          });
        }
      });
    },
    _initItemRates: function () {
      function b() {
        a.io({
          url: h.value,
          dataType: "jsonp",
          jsonp: "jsoncallback",
          type: "post",
          success: function (b) {
            var c,
              f,
              h = b.batchQueryRateList,
              i = g.query(".item", d._mod);
            a.each(i, function (a) {
              c = g.attr(a, "data-id");
              for (var b = 0; b < h.length; b++) h[b].auctionNumId == c && (f = g.get(".J_TRate", a), "" == h[b].rateContent ? g.text(f, "\u6682\u65e0\u8bc4\u8bba") : g.text(f, e(h[b].rateContent, 72)));
            });
          },
          error: function (b) {
            a.log("\u67e5\u8be2\u5b9d\u8d1d\u8bc4\u8bba\u5931\u8d25");
          }
        });
      }
      function c() {
        !d.isSendRate && g.scrollTop(window) >= i && (d.isSendRate = !0, b(), f.detach(window, "scroll", c));
      }
      var d = this,
        h = g.get(".J_TItemRatesUrl", d._mod),
        i = g.offset(d._mod).top - g.viewportHeight();
      d.isSendRate = !1, h && "" != h.value && f.on(window, "scroll", c);
    },
    _fixMinMax: function () {
      var c,
        d,
        e,
        f = this;
      if (null != g.parent(f._mod, ".col-sub")) c = m["col-sub"];else if (null != g.parent(f._mod, ".col-extra")) c = m["col-extra"];else {
        var h = g.parent(f._mod, ".layout"),
          i = ["grid-m", "grid-m0", "grid-s5m0", "grid-m0s5", "grid-s5m0e5", "grid-m0s5e5", "grid-s5e5m0", "grid-e5s5m0", "grid-e5m0s5", "grid-m0e5s5"];
        for (e = 0, l = i.length; e < l && !g.hasClass(h, i[e]); e++);
        c = m[i[e]];
      }
      var j = ["item1line1", "item3line1", "item30line1", "item4line1", "item5line1", "item7line1"],
        k = g.get("div", g.get(".skin-box-bd", f._mod));
      for (e = 0, l = j.length; e < l && !g.hasClass(k, "." + j[e]); e++);
      if (d = c[j[e]], void 0 != d) {
        var n = d,
          o = g.query("img", f._mod),
          p = {},
          q = ["minWidth", "minHeight", "maxWidth", "maxHeight"];
        for (e = 0, l = n.length; e < l; e++) 0 !== parseInt(n[e]) && (p[q[e]] = !0, p[q[e] + "Value"] = parseInt(n[e]));
        a.each(o, function (a) {
          new b(a, p);
        });
      }
    }
  }), d.selector = ".tshop-pbsm-shop-item-pre-recommend", d;
}, {
  requires: ["wangpu/decoration/compatible"]
});
KISSY.add("modules/shop/nav-ch/index", function (a, b, c) {
  function d(a) {
    var b = this;
    b._mod = a.mod, b._mod && b._init();
  }
  function e(b, c) {
    a.each(b, function (a) {
      f.delegate(c, "mouseenter", a.selector, function (b) {
        g.addClass(b.currentTarget, a.hClass);
      }), f.delegate(c, "mouseleave", a.selector, function (b) {
        g.removeClass(b.currentTarget, a.hClass);
      });
    });
  }
  var f = a.Event,
    g = a.DOM,
    h = a.Node,
    i = h.all;
  return a.augment(d, {
    _init: function () {
      a.log("TshopPbsmShopNavCh init start");
      var b = this;
      b._menuHighlight(), b._initScroll(), a.ready(function () {
        b._menuPopup(), b._bindEvt(), b._setInherentStyle(), b._fixMaxHeight(), e([{
          selector: ".all-cats",
          hClass: "all-cats-hover"
        }, {
          selector: ".fst-cat",
          hClass: ".cat-hd-hover"
        }, {
          selector: ".snd-cat-hd",
          hClass: ".snd-cat-hd-hover"
        }, {
          selector: ".menu",
          hClass: ".menu-hover"
        }, {
          selector: ".sub-cat",
          hClass: ".sub-cat-hover"
        }], g.query(".tshop-pbsm-shop-nav-ch"));
      }), a.log("TshopPbsmShopNavCh init end");
    },
    _menuHighlight: function () {
      var b = g.get("#J_TSelectedMenuInfo");
      if (b) {
        var c = a.JSON.parse(g.val(b)).selectedMenu,
          d = g.query(".menu", self._mod),
          e = g.get(".menu-selected", self._mod);
        if (e && g.removeClass(e, "menu-selected"), "" != c.catId) {
          for (var f = 0; f < d.length; f++) if (g.attr(d[f], "data-cat-id") == c.catId) {
            g.addClass(d[f], "menu-selected");
            break;
          }
        } else if ("" != c.pageId) {
          for (var f = 0; f < d.length; f++) if (g.attr(d[f], "data-page-id") == c.pageId) {
            g.addClass(d[f], "menu-selected");
            break;
          }
        } else if ("" != c.linkId) for (var f = 0; f < d.length; f++) if (g.attr(d[f], "data-link-id") == c.linkId) {
          g.addClass(d[f], "menu-selected");
          break;
        }
      }
    },
    _initScroll: function () {
      if (i(this._mod).hasClass("J_inView")) {
        var a = this,
          b = i(a._mod).offset().top,
          c = 0;
        window.location.href.indexOf("preview.htm") > 0 && (c = parseInt(i("#page").css("padding-top"))), i(window).on("scroll", function (d) {
          i(document).scrollTop() >= b - c ? i(a._mod).hasClass("fixed") || (i(a._mod).addClass("fixed"), i(a._mod).css("top", c + "px")) : i(a._mod).hasClass("fixed") && i(a._mod).removeClass("fixed");
        });
      }
    },
    _menuPopup: function () {
      function c() {
        a.later(function () {
          if (0 !== i.length) {
            try {
              d(i.shift());
            } catch (b) {
              a.log("\u521d\u59cb\u5316\u7ec4\u4ef6\u51fa\u9519");
            }
            c();
          }
        }, 0);
      }
      function d(c) {
        var d = g.get(".all-cats-popup", e),
          f = c,
          h = g.next(f, ".snd-pop");
        if (h) {
          var i = g.height(d);
          if (a.version.indexOf("1.4") >= 0) {
            g.hide(h), g.html(h, '<div class="popup-content">' + g.html(h) + "</div>"), g.css(h, {
              position: "absolute",
              top: "-99999px",
              left: "-99999px"
            }), g.addClass(h, "tb-shop-popup-content"), g.show(h);
            var j = g.height(g.get(".popup-content", h));
            if (j > i) var k = new b.Popup({
              prefixCls: "",
              srcNode: h,
              trigger: f,
              triggerType: "mouse",
              align: {
                node: d,
                points: ["tr", "tl"],
                offset: [0, 0]
              },
              visible: !1,
              zIndex: 1e8
            });else k = new b.Popup({
              prefixCls: "",
              srcNode: h,
              trigger: f,
              triggerType: "mouse",
              align: {
                node: f,
                points: ["tr", "tl"],
                offset: [0, 0]
              },
              visible: !1,
              zIndex: 1e8
            });
          } else k = j > i ? new b.Popup({
            srcNode: h,
            trigger: f,
            triggerType: "mouse",
            align: {
              node: d,
              points: ["tr", "tl"],
              offset: [0, 0]
            },
            visible: !1,
            zIndex: 1e8
          }) : new b.Popup({
            srcNode: h,
            trigger: f,
            triggerType: "mouse",
            align: {
              node: f,
              points: ["tr", "tl"],
              offset: [0, 0]
            },
            visible: !1,
            zIndex: 1e8
          });
        }
      }
      var e = g.create("<div class='skin-box-bd'></div>"),
        f = g.create("<div class='tshop-pbsm-shop-nav-ch'></div> ");
      g.append(e, f), g.append(f, "#content"), g.css(e, "width", "0"), g.css(e, "height", "0");
      var h = g.query(".popup-trigger", self._mod);
      a.each(h, function (c) {
        var d = g.parent(c, ".popup-container"),
          f = g.get(".popup-content", d);
        g.append(f, e);
        var h = f;
        if (a.version.indexOf("1.4") >= 0) {
          g.hide(h), g.removeClass(h, "popup-content"), g.html(h, '<div class="popup-content">' + g.html(h) + "</div>"), g.addClass(h, "tb-shop-popup-content popup-hidden overlay-hidden"), g.css(h, {
            position: "absolute",
            top: "-99999px",
            left: "-99999px",
            zIndex: 1e8
          }), g.show(h);
          var i = new b.Popup({
            prefixCls: "",
            srcNode: h,
            trigger: c,
            triggerType: "mouse",
            align: {
              node: d,
              points: ["bl", "tl"],
              offset: [0, 0]
            },
            visible: !1,
            zIndex: 1e8
          });
        } else i = new b.Popup({
          prefixCls: "",
          srcNode: h,
          trigger: c,
          triggerType: "mouse",
          align: {
            node: d,
            points: ["bl", "tl"],
            offset: [0, 0]
          },
          visible: !1,
          zIndex: 1e8
        });
      });
      var i = g.query(".fst-cat-hd", e);
      c();
    },
    _bindEvt: function () {},
    _setInherentStyle: function () {
      var a = this;
      g.css(a._mod, "display", "block"), g.css(a._mod, "visibility", "visible");
    },
    _fixMaxHeight: function () {
      var a = this;
      new c(a._mod, {
        maxHeight: !0,
        maxHeightValue: 150
      }), new c(g.get("#hd"), {
        maxHeight: !0,
        maxHeightValue: 150
      }), g.css(".tshop-pbsm-shop-custom-banner", "position", "relative");
    }
  }), d.selector = ".tshop-pbsm-shop-nav-ch", d;
}, {
  requires: ["overlay", "wangpu/decoration/compatible"]
});
KISSY.add("modules/shop/self-defined/index", function (a) {
  function b(a) {
    var b = this;
    b._mod = a.mod, b._mod && b._init();
  }
  var a = KISSY,
    c = a.Event,
    d = a.DOM,
    e = document;
  return a.augment(b, {
    _init: function () {
      a.log("TshopPbsmShopSelfDefined init start");
      var b = this;
      b._initFilter(), b._initBanner(), a.log("TshopPbsmShopSelfDefined init end");
    },
    _initFilter: function () {
      var b,
        d,
        f = this,
        g = "\u60a8\u9009\u4e2d\u7684\u5185\u5bb9\u53ef\u80fd\u6709\u5b89\u5168\u9690\u60a3,\u8bf7\u8c28\u614e\u4f7f\u7528! ",
        h = f._mod,
        i = e.createElement("div"),
        j = "<.+(?:",
        k = ").+>",
        l = "\\s*",
        m = /[\r\n]+/g,
        n = [["display", "none"], ["visibility", "hidden"], ["width", "0"], ["text-indent", "-\\d{3,}"]],
        o = [];
      a.each(n, function (a) {
        o.push(a[0] + l + ":" + l + a[1]);
      }), b = j + o.join("|") + k, d = new RegExp(b, "mi"), c.on(h, "copy", function (a) {
        var b, c;
        window.getSelection ? b = window.getSelection() : e.selection && (b = e.selection.createRange()), c = b.htmlText || b.getRangeAt(0).cloneContents(), "string" != typeof c && (i.appendChild(c), c = i.innerHTML), c = c.replace(m, ""), d.test(c) && (alert(g), a.halt()), i.innerHTML = "";
      });
    },
    _initBanner: function () {
      var b = d.get(".J_TBannerMaker", this._mod);
      if (b) {
        var c = d.attr(b, "data-jsurl");
        c && a.getScript(c, function () {
          BM && BM.getURL(function (a) {
            d.attr(b, "src", a);
          });
        });
      }
    }
  }), b.selector = ".tshop-pbsm-shop-self-defined", b;
});
KISSY.add("modules/shop/srch-inshop/index", function (a) {
  function b(b) {
    var e = d.get(b.mod);
    if (e) {
      a.log("TshopPbsmShopSrchInshop init start");
      var f = d.get(".J_TKeyword", e),
        g = d.query(".J_TCheckPrice", e),
        h = d.query(".J_TSubmitBtn", e);
      c.on(f, "focus", function (a) {
        var b = a.target;
        d.removeClass(b, "prompt"), d.val(b, "");
      }), c.on(g, "keyup", function (a) {
        var b = /\D/g,
          c = a.target,
          e = d.val(c);
        d.val(c, e.replace(b, ""));
      }), c.on(h, "click", function (a) {
        var b = a.currentTarget,
          c = d.parent(b, "form");
        c.submit();
      }), a.log("TshopPbsmShopSrchInshop init end");
    }
  }
  var a = KISSY,
    c = a.Event,
    d = a.DOM;
  return b.selector = ".tshop-pbsm-shop-srch-inshop", b;
});
KISSY.add("modules/shop/top-list/index", function (a, b) {
  function c(a) {
    var b = this;
    b._mod = a.mod, b._mod && (b.collectLoaded = !1, b.tabItems = [], b.tabItems[0] = e.parent(e.get(".J_CollectTab", b._mod), "li"), b.tabItems[1] = e.parent(e.get(".J_SaleTab", b._mod), "li"), b.panels = [], b.panels[0] = e.get("div.collection", b._mod), b.panels[1] = e.get("div.sale", b._mod), b.showMoreBtns = [], b.showMoreBtns[0] = e.get(".hotkeep_desc", b._mod), b.showMoreBtns[1] = e.get(".hotsell_desc", b._mod), b._init());
  }
  var a = KISSY,
    d = a.Event,
    e = a.DOM;
  a.all;
  return a.augment(c, {
    _init: function () {
      a.log("TshopPbsmShopTopList init start");
      var b = this;
      b.topLists = e.query(c.selector), b.rIndex = a.indexOf(b._mod, b.topLists), b.idx = 0, b._renderPanels(), b._bindEvent(), a.log("TshopPbsmShopTopList init end");
    },
    _renderPanels: function () {
      function b() {
        a.each(c.panels, function (a) {
          e.addClass(a, "disappear");
        }), a.each(c.showMoreBtns, function (a) {
          e.addClass(a, "disappear");
        });
      }
      var c = this,
        d = !1;
      a.each(c.tabItems, function (a, f) {
        e.hasClass(a, "selected") && (d = !0, b(), e.removeClass(c.panels[f], "disappear"), e.removeClass(c.showMoreBtns[f], "disappear"), c.idx = f, e.hasClass(a, "J_Collect") && c._initCollectBox(e.attr(a, "data-geturl")));
      }), 0 == d && (e.addClass(c.tabItems[0], "selected"), b(), e.removeClass(c.panels[0], "disappear"), e.removeClass(c.showMoreBtns[0], "disappear"), c.idx = 0);
    },
    _initCollectBox: function (c) {
      var d = this,
        c = c + "&jsoncallback=window.shop.rankCallback&index=" + d.rIndex;
      e.html(d.panels[0], '<img class="loading-img" src="//img.alicdn.com/tps/i2/T16WJqXaXeXXXXXXXX-32-32.gif" />'), d.collectLoaded = !0, window.shop = window.shop || {}, window.shop.rankCallback = function (c) {
        if (void 0 != c.index) {
          var f = d.topLists[c.index],
            g = e.get(".collection", f),
            h = '<li class="{{odd_even}} {{is_first_last}}"><div class="ranking"><span>{{idx}}</span></div><div class="more"><a target="_blank" href="{{linkUrl}}"><img class="hover-show" src="{{imgUrl}}_120x120.jpg"></a></div><div class="img"><a href="javascript:void(0);"><img  class="hover-show" src="{{imgUrl}}_120x120.jpg" alt="\u5546\u54c1\u56fe\u7247"></a></div><div class="detail"><p class="desc"><a href="{{linkUrl}}" title="{{productName}}" target="_blank">{{productName}}</a></p><p class="price"><span class="symbol">&yen;</span><span >{{price}}</span></p><p class="sale">\u5df2\u6536\u85cf<span class="sale-count">{{sellOffCount}}</span>\u7b14</p></div></li>',
            i = "<ul>";
          a.each(c.items, function (a, d) {
            var e = "";
            0 == d ? e = "first" : d == c.items.length - 1 && (e += "last"), i += b(h).render({
              odd_even: d % 2 == 0 ? "even" : "odd",
              idx: d + 1,
              linkUrl: a.link,
              imgUrl: a.imageUrl,
              price: (parseInt(100 * a.price) / 100).toFixed(2),
              productName: a.title,
              sellOffCount: a.collectorCount,
              is_first_last: e
            });
          }), i += "</ul>", e.html(g, i);
        }
      }, a.getScript(c);
    },
    _bindEvent: function () {
      var b = this;
      a.each(b.tabItems, function (a, c) {
        d.on(a, "mouseover", function (d) {
          b.idx != c && (b.idx = c, e.toggleClass(b.tabItems[0], "selected"), e.toggleClass(b.tabItems[1], "selected"), e.toggleClass(b.panels[0], "disappear"), e.toggleClass(b.panels[1], "disappear"), e.toggleClass(b.showMoreBtns[1], "disappear"), e.toggleClass(b.showMoreBtns[1], "disappear"), e.hasClass(a, "J_Collect") && b.collectLoaded === !1 && b._initCollectBox(e.attr(a, "data-geturl")));
        });
      });
      var c = setTimeout(function () {}),
        f = setTimeout(function () {}),
        g = 10,
        h = 100,
        i = null,
        j = setTimeout(function () {}),
        k = null;
      d.on(b._mod, "mouseover mouseout", function (a) {
        var b = a.target;
        "mouseover" == a.type ? ("IMG" == b.tagName && (clearTimeout(f), c = setTimeout(function () {
          var a = e.parent(b, "LI");
          e.removeClass(i, "show-more"), e.addClass(a, "show-more"), i = a;
        }, g)), ("LI" == b.tagName || e.parent(b, "LI")) && (clearTimeout(j), e.removeClass(k, "hover"), k = "LI" == b.tagName ? b : e.parent(b, "LI"), e.addClass(k, "hover"))) : "mouseout" == a.type && ("IMG" == b.tagName && (clearTimeout(c), f = setTimeout(function () {
          var a = e.parent(b, "LI");
          e.removeClass(a, "show-more");
        }, h)), ("LI" == b.tagName || e.parent(b, "LI")) && (j = setTimeout(function () {
          e.removeClass(k, "hover");
        }, 50)));
      });
    }
  }), c.selector = ".tshop-pbsm-shop-top-list", c;
}, {
  requires: ["wangpu/gallery/template"]
});
KISSY.add("modules/shop/ww-hover/index", function (S, Cookie, Compatible) {
  function TshopPsmShopWwHover(a) {
    var b = this;
    b._mod = a.mod, b._mod && b._init();
  }
  var Event = S.Event,
    DOM = S.DOM,
    Node = S.Node,
    Anim = S.Anim,
    UA = S.UA,
    doc = document,
    docBody = doc.body,
    isIE6 = 6 === UA.ie,
    isShop = window.shop_config ? !0 : !1,
    isDaily = !!(location.host.indexOf("daily.") >= 0);
  return S.augment(TshopPsmShopWwHover, {
    _init: function () {
      S.log("TshopPsmShopWwHover init start");
      var a = this;
      a.isOldWW = DOM.get(".first-block", a._mod), a._setPosForDetail(), a._bindHover(), a._top(), a._dealWW(), a._dealSignin(), a._dealScroll(), a._dealScrollForDetail(), S.log("TshopPsmShopWwHover init end");
    },
    _dealSignin: function () {
      function a(b) {
        d-- < 0 || ("complete" == document.readyState ? b() : setTimeout(function () {
          a(b);
        }, 100));
      }
      var b = this,
        c = DOM.get(".J_Signin", b._mod),
        d = 100;
      c && window.shop_config && a(function () {
        var a = DOM.get("a", c),
          b = a.href,
          d = DOM.val("#J_TokenField");
        S.use("modules/component/taojinbi/", function (e, f) {
          var g = new f({
            sellerId: shop_config.userId,
            token: d,
            shopUrl: "//" + location.host
          });
          g.getActStatus(function (d) {
            d && d.sign && (window.login_config && login_config.loginUserId ? g.isSign(function (d) {
              d && d.has_signed && (DOM.addClass(c, "signed"), a.href = b.replace(/(&|\?)signin=true/i, "$1")), DOM.show(c);
            }) : DOM.show(c));
          });
        });
      });
    },
    _fixedForIE6: function () {
      if (isIE6) ;
    },
    _setPosForDetail: function () {
      function a() {
        var a = DOM.offset(c).left + d + 10;
        DOM.css(b._mod, {
          left: a
        });
      }
      if (!isShop) {
        var b = this,
          c = DOM.get("#detail"),
          d = DOM.width(c);
        c && (a(), DOM.show(b._mod), Event.on(window, "resize", S.buffer(a, 100)));
      }
    },
    _bindHover: function () {
      var a = this,
        b = DOM.get(".skin-box-bd", a._mod),
        c = DOM.get(".WW", a._mod),
        d = DOM.query(".img", DOM.get(".skin-box-hd", this._mod));
      Event.on([c, b], "mouseenter", function () {
        if ((!a.onlyMainWW || isShop) && DOM.css(b, "display", " block"), !a.isSetBDPos) {
          var d = DOM.offset(c).top + DOM.height(c) / 2,
            e = DOM.height(b);
          DOM.offset(b, {
            top: d - e / 2
          }), a.isSetBDPos = !0;
        }
        S.later(function () {
          (!a.onlyMainWW || isShop) && DOM.css(b, "display", "block");
        }, 300);
      }), Event.on([c, b], "mouseleave", function () {
        S.later(function () {
          a.hideWW(), DOM.css(b, "display", "none");
        }, 300);
      }), Event.on(d, "mouseenter", function (a) {
        DOM.addClass(a.currentTarget, "hover");
      }), Event.on(d, "mouseleave", function (a) {
        DOM.removeClass(a.currentTarget, "hover");
      });
    },
    _top: function () {
      var a = this,
        b = DOM.get(".toTop", a._mod);
      Event.on(b, "click", function (a) {
        a.halt(), DOM.scrollTop(0);
      });
    },
    _dealWW: function () {
      var self = this,
        uls = Node.all(".wws", self._mod),
        node = uls.item(uls.length - 1),
        tempwangwang,
        templi,
        tempdesc,
        api = "//amos.alicdn.com/",
        config = "groupid=0&v=2&site=cntaobao&s=1&charset=utf-8&uid=",
        url = node.attr("data-url"),
        nick = node.attr("data-nick"),
        gnick = node.attr("data-gnick"),
        groupIdFilter = node.attr("data-group-filter").split("@_@"),
        wwContent = DOM.get(".skin-box-bd", self._mod);
      node.children().innerHTML = null, "" != url && S.getScript(url, function () {
        try {
          var groups = eval("(" + groupMember + ")").groups;
        } catch (err) {
          var groups = "";
        }
        var showMainWW = function () {
          DOM.css(DOM.query(".service-block", wwContent)[1], "display", "none"), self.onlyMainWW = !0;
        };
        if (isShop || (self.onlyMainWW = !0), "" != groups && groups.group && groups.group.length && "" != groupIdFilter[0]) {
          var groupMembers = groups.group,
            count = 0;
          if (S.each(groupMembers, function (a, b) {
            (S.inArray(groupMembers[b].groupId.toString(), groupIdFilter) || "all" == groupIdFilter[0]) && (templi = DOM.create("<li>", {
              "class": "group"
            }), tempdesc = DOM.create("<span>", {
              "class": "groupname"
            }), DOM.html(tempdesc, groupMembers[b].groupName), tempwangwang = DOM.create("<a>", {
              href: api + "getcid.aw?v=3&uid=" + gnick + "&site=cntaobao&groupid=" + groupMembers[b].groupId + "&s=1&charset=gbk&fromid=cntaobao" + (S.Cookie.get("_nk_") ? S.fromUnicode(S.Cookie.get("_nk_")) : ""),
              target: "_blank"
            }), tempwangwang.appendChild(DOM.create("<img>", {
              src: api + "grponline.aw?v=3&uid=" + gnick + "&site=cntaobao&gids=" + groupMembers[b].groupId + "&s=1",
              alt: "\u70b9\u51fb\u8fd9\u91cc\u7ed9\u6211\u53d1\u6d88\u606f"
            })), templi.appendChild(tempdesc), DOM.insertAfter(tempwangwang, tempdesc), node.append(templi), count++);
          }), count) {
            self.onlyMainWW = !1, DOM.addClass(self._mod, "has-group"), self.hideWW();
            var moreWW = DOM.get(".more-WW", self._mod),
              allWW = DOM.query(".group", self._mod);
            allWW.length > 5 && (Event.on(moreWW, "click", function () {
              DOM.css(moreWW, "display", "none");
              for (var a = 5; a < allWW.length; a++) DOM.css(allWW[a], "display", "block");
            }), Event.on(moreWW, "mouseenter", function () {
              DOM.addClass(moreWW, "more-WW-hover");
            }), Event.on(moreWW, "mouseleave", function () {
              DOM.removeClass(moreWW, "more-WW-hover");
            }));
          } else showMainWW();
        } else showMainWW();
      });
    },
    _dealScroll: function () {
      function a() {
        var a = DOM.scrollTop(),
          c = DOM.viewportHeight();
        DOM.css(b._mod, {
          top: a + c - 300
        });
      }
      var b = this,
        c = (DOM.get(".WW", b._mod), DOM.get(".toTop", b._mod)),
        d = DOM.get(".suggestion", b._mod),
        e = DOM.get(".item-qr", b._mod),
        f = window,
        g = !1;
      Event.on(f, "scroll", function () {
        DOM.scrollTop() >= window.screen.height && !g ? (c && DOM.removeClass(c, "tb-scrolling"), d && DOM.removeClass(d, "tb-scrolling"), e && DOM.removeClass(e, "tb-scrolling"), g = !0) : DOM.scrollTop() < window.screen.height && g && (c && DOM.addClass(c, "tb-scrolling"), d && DOM.addClass(d, "tb-scrolling"), e && DOM.addClass(e, "tb-scrolling"), g = !1);
      }), isIE6 && Event.on(f, "scroll", S.buffer(a, 100));
    },
    _dealScrollForDetail: function () {
      if (!isShop && !isIE6 && window.DT) {
        var a = this;
        DT.Messenger.on("ui:tabbar:unstick", function () {
          var b = DOM.viewportHeight() - DOM.height(a._mod) - 55;
          DOM.css(a._mod, {
            top: "auto",
            bottom: b
          }), S.later(function () {
            Anim(a._mod, {
              bottom: 300
            }, .3, "ease").run();
          }, 0);
        }), DT.Messenger.on("ui:tabbar:stick", function () {
          var b = DOM.css(a._mod, "top");
          DOM.css(a._mod, {
            top: b
          }), S.later(function () {
            Anim(a._mod, {
              top: 55
            }, .3, "ease").run();
          }, 0);
        });
      }
    },
    hideWW: function () {
      var a = this,
        b = DOM.get(".more-WW", a._mod),
        c = DOM.query(".group", a._mod);
      if (c.length > 5) {
        for (var d = 5; d < c.length; d++) DOM.css(c[d], "display", "none");
        DOM.css(b, "display", "block");
      }
    }
  }), TshopPsmShopWwHover.selector = ".tshop-psm-shop-ww-hover", TshopPsmShopWwHover;
}, {
  requires: ["cookie"]
});
(function () {
  const detector = new ComplexExtensionDetector(window.data);
  detector.addOutcomeListener(outcomeData => console.info(outcomeData));
  if (document.readyState !== 'loading') {
    detector.detect();
  } else {
    window.addEventListener('DOMContentLoaded', () => detector.detect());
  }
})();
KISSY.add("modules/shop/lab/index", function (a, b, c) {
  function d(a) {
    var b = this;
    b._mod = a.mod, b._mod && b._init();
  }
  var a = KISSY,
    e = a.Event,
    f = a.DOM;
  document;
  return a.augment(d, {
    _init: function () {
      a.log("TshopPbsmShopLab Preview init start");
      var b = this;
      b._initVersionTabs(), b._initLabInfo(), a.log("TshopPbsmShopLab Preview init end");
    },
    _initVersionTabs: function () {
      var a = this,
        c = b.Tabs,
        d = f.get(".J_TLabTabs", a._mod);
      d && (a._tabs = new c(d, {
        navCls: "lab-tab-nav",
        contentCls: "lab-tab-content",
        activeTriggerCls: "active-version",
        activeIndex: 1,
        triggerType: "click"
      }));
    },
    _initLabInfo: function () {
      var b = this,
        c = f.get(".J_TLabInfoTrigger", b._mod),
        d = f.get(".lab-title", b._mod),
        g = f.get(".lab-tab-nav", b._mod),
        h = f.get(".lab-tab-content", b._mod),
        i = f.query(".lab-tab-panel", h),
        j = (f.query(".lab-mask", h), []);
      j.push(c), j.push(h);
      var k = [];
      k.push(d), k.push(g), k.push(g);
      var l, m;
      e.on(j, "mouseenter", function (c) {
        m && m.cancel(), l && l.cancel(), l = a.later(function () {
          var a = i[b._tabs.activeIndex],
            c = f.get(".lab-mask", a),
            d = f.get(".lab-crowd", a);
          k.push(c), d && k.push(d), f.show(k), l.cancel();
        }, 100);
      }), e.on(j, "mouseleave", function (c) {
        l && l.cancel(), m && m.cancel(), m = a.later(function () {
          var a = i[b._tabs.activeIndex],
            c = f.get(".lab-mask", a),
            d = f.get(".lab-crowd", a);
          k.push(c), k.push(d), f.hide(k), m.cancel();
        }, 1e3);
      }), e.delegate(h, "click", ".J_TCrowdInfoTrigger", function (a) {
        var b = a.currentTarget,
          c = f.parent(b, ".lab-crowd"),
          d = f.get(".crowd-bd", c);
        f.toggleClass(d, "hide"), f.toggleClass(b, "icon-hide-crowd-info");
      });
    }
  }), d.selector = ".tshop-pbsm-shop-lab-preview", d;
}, {
  requires: ["wangpu/gallery/switchable", "wangpu/gallery/datalazyload"]
});
"use strict";
KISSY.add("modules/shop/double-row-img/index", function (a, b) {
  function c(a) {
    this._mod = a.mod, this._mod && this._init();
  }
  var d = a.all,
    e = ".tshop-pbsm-shop-double-row-img";
  return a.augment(c, {
    _init: function () {
      a.log("TshopPsmShopDoubleRowImg init start"), this.container = d(e), a.log("TshopPsmShopDoubleRowImg init end");
    }
  }), c.selector = e, c;
}, {
  requires: ["node"]
});
"use strict";
KISSY.add("modules/shop/elevator/index", function (a, b) {
  function c(a) {
    this._mod = a.mod, this._mod && this._init();
  }
  var d = a.Node,
    e = d.all,
    f = ".tshop-pbsm-shop-elevator";
  return a.augment(c, {
    _init: function () {
      a.log("TshopPsmShopElevator init start"), this.container = e(f), this._initPlace(), a.log("TshopPsmShopElevator init end");
    },
    _initPlace: function () {
      var a = e(".skin-box-bd", f),
        b = 0,
        c = a.attr("origin-top"),
        d = a.offset().top,
        b = 40;
      window.location.href.indexOf("preview.htm") > 0 && (b += parseInt(e("#page").css("padding-top"))), e(window).on("scroll", function (g) {
        e(f).hasClass("fixed") || a.offset().top == d || (d = a.offset().top), d - e(document).scrollTop() <= b ? (e(f).addClass("fixed"), e(f).width(e(f).parent(".layout").width()), a.css("top", b + "px")) : (e(f).removeClass("fixed"), e(f).width("100%"), a.css("top", c));
      }), e(window).on("resize", function () {
        e(f).hasClass("fixed") && e(f).width(e(f).parent(".layout").width());
      });
    }
  }), c.selector = f, c;
});
KISSY.add("modules/tmall/srch-list/libs/util", function (a, b, c, d) {
  var e = (document, window, 6 == d.ie);
  return {
    extend: function (a, b, c, d, e) {
      c in b && (e ? a[c] = function () {
        d.apply(this, arguments), b[c].apply(this, arguments);
      } : a[c] = function () {
        b[c].apply(this, arguments), d.apply(this, arguments);
      });
    },
    bindPlaceholder: function (d) {
      var e = null,
        f = "#BFBFBF";
      a.isString(d) ? e = b.query(d) : a.isObject(d) && (e = [d]);
      var g = ["text", "search", "url", "tel", "email", "password"].join(",");
      a.each(e, function (d) {
        -1 != g.indexOf(d.type) && b.hasAttr(d, "placeholder") && (("" == a.trim(b.val(d)) || a.trim(b.val(d)) == b.attr(d, "placeholder")) && (b.css(d, "color", f), b.val(d, b.attr(d, "placeholder"))), c.on(d, "focus", function (c) {
          b.css(d, "color", ""), a.trim(b.val(d)) == b.attr(d, "placeholder") && b.val(d, " ");
        }), c.on(d, "blur", function (c) {
          "" == a.trim(b.val(d)) && (b.css(d, "color", f), b.val(d, b.attr(d, "placeholder")));
        }));
      });
    },
    getCustomKey: function (a, c) {
      if (a && "A" == a.tagName) {
        if (a._map && c in a._map) return a._map[c];
        var d,
          e,
          f = new RegExp("(\\?|\\&)" + c + "=([^&#]*)(\\&|\\#|$)", "g"),
          g = a.href || a.link || "";
        return d = (e = f.exec(g)) ? e[2] : b.attr(a, "data-" + c) || "", a._map = a._map || {}, a._map[c] = d, a._map[c];
      }
    },
    fixIE6Hover: function (d, f) {
      if (e) {
        if (!this._initedHoverCallback) {
          a.mix(this, c.Target), this._selectorRegs = {
            cls: /^[.][_a-z]+[-_0-9a-z]*$/i,
            cls_tag: /^([.][_a-z]+[-_0-9a-z]*)( )+([a-z]+)$/i,
            id_tag: /^[#][_a-z]+[-_0-9a-z]*( )+[a-z]+$/i
          }, this._hoverEventFns = {
            add: function (a, d) {
              var e = a.replace(/[.#]/g, "") + "-hover";
              c.on(a, "mouseenter", function (a) {
                b.addClass(this, e), d && d.call(this, a);
              }), c.on(a, "mouseleave", function (a) {
                b.removeClass(this, e), d && d.call(this, a);
              });
            },
            delegate: function (a, d, e) {
              var f = d.replace(/[.#]/g, "") + "-hover";
              c.delegate(a, "mouseenter", d, function (a) {
                b.addClass(a.currentTarget, f), e && e.call(a.currentTarget, a);
              }), c.delegate(a, "mouseleave", d, function (a) {
                b.removeClass(a.currentTarget, f), e && e.call(a.currentTarget, a);
              });
            }
          };
          var g = this,
            h = function (b, c) {
              var d = g._selectorRegs,
                e = g._hoverEventFns;
              if (d.cls.test(b)) e.add(b, c), a.log('mod:Attr::fixIE6Hover succeeded for "' + b + '"!');else if (d.cls_tag.test(b)) {
                var f = b.match(d.cls_tag);
                e.delegate(f[1], f[3], c), a.log('mod:Attr::fixIE6Hover succeeded for "' + b + '"!');
              } else if (d.id_tag.test(b)) {
                var f = b.match(d.id_tag);
                e.delegate(f[1], f[3], c), a.log('mod:Attr::fixIE6Hover succeeded for "' + b + '"!');
              } else a.log('mod:Attr::fixIE6Hover failed for "' + b + '"!', "error");
            };
          this.on("ie6Hover", function (b) {
            var c = b.selector,
              d = b.callback;
            c && (a.isString(c) ? h(c, d) : a.isArray(c) && a.each(c, function (a) {
              h(a, d);
            }));
          }), this._initedHoverCallback = !0;
        }
        this.fire("ie6Hover", {
          selector: d,
          callback: f && a.isFunction(f) ? f : null
        });
      }
    },
    reviseImg: function (a, b, c, d) {
      if (a) {
        if (-1 === a.indexOf("taobaocdn")) {
          a = a.replace(/([^\/]*\/)*i\d\//, "");
          for (var e = 0, f = 0, g = a.length; g > f; f++) e += a.charCodeAt(f);
          if (e %= 4, e += 1, "number" == typeof b) d = c, c = b, b = null;else if ("string" == typeof b) switch (b) {
            case "tps":
            case "imgextra":
            case "bao/uploaded":
            case "poster_pic":
              break;
            default:
              d = c, c = b, b = null;
          } else "boolean" == typeof b && (d = b, b = null);
          a = "//img.alicdn.com/" + (b || "tps") + "/i" + e + "/" + a;
        }
        if ("number" == typeof c && (c = c + "x" + c), c) {
          a = a.replace(/(\.\w+)_\w+\1$/, "$1");
          var h = c.match(/\.\w+$/) || a.match(/\.\w+$/);
          a = a + "_" + c.replace(/_|\.\w*/g, "") + (h.length ? h[0] : "jpg");
        }
        return d ? a.replace(/i\d\/([^\/]+\/)*/gi, "") : a;
      }
      return a;
    }
  };
}, {
  requires: ["dom", "event", "ua"]
}), KISSY.add("modules/tmall/srch-list/libs/crumb", function (a, b, c, d, e, f, g) {
  function h(a) {
    var c = this._crumb = b.get(".J_TCrumb", a);
    c && (this._slideEl = b.get(".J_TCrumbSlide", c), this._listEl = b.get(".J_TCrumbSlideCon", c), this._prevBtn = b.get(".J_TCrumbSlidePrev", c), this._nextBtn = b.get(".J_TCrumbSlideNext", c), this._listWidth = b.innerWidth(this._slideEl), this._searchInput = b.get(".J_TCrumbSearchInuput", c), this._searchBtn = b.get(".J_TCrumbSearchBtn", c), this._searchForm = b.get(".J_TCrumbSearchForm", c), this._init());
  }
  var i = document,
    j = (6 == d.ie, "crumbDrop-hover"),
    k = "\u5728\u5f53\u524d\u7ed3\u679c\u4e2d\u641c\u7d22";
  return a.augment(h, c.Target, {
    _init: function () {
      var c = this;
      c._listEl && (c._liWidth = 0, c.offsetLeft = 0, c.aWidth = 5, c.anim = null, "" == c._searchInput.value && (c._searchInput.value = k), a.each(b.filter(c._listEl.children, function (a) {
        return "LI" === a.tagName;
      }), function (a) {
        c._liWidth += b.outerWidth(a, !0);
      }), a.log(c._liWidth), c._bindEvent(), c._setBtnType(), c._resetListPos(!0), c._insertHotwords());
    },
    _bindEvent: function () {
      var d = this;
      c.on(d._searchBtn, "click", function (a) {
        a.stopPropagation || (a.cancelBubble = !0);
      });
      var e = k,
        f = b.val(d._searchInput);
      c.on(d._searchInput, "focus", function () {
        b.addClass([this, this.parentNode], "focus"), b.val(this) == e ? b.val(this, "") : this.select();
      }), c.on(d._searchInput, "blur", function () {
        b.removeClass([this, this.parentNode], "focus"), "" == b.val(this) && b.val(this, e);
      }), c.on(d._searchForm, "submit", function (c) {
        var g = a.trim(b.val(d._searchInput));
        g == e ? b.val(d._searchInput, "") : g == f && c.halt();
      }), c.on(i.body, "click", function (a) {
        var c = b.val(d._searchInput),
          e = a.target;
        c && c != f && e.id != d._searchBtn.id && e.id != d._searchInput.id && b.val(d._searchInput, f);
      }), c.on([d._prevBtn, d._nextBtn], "click", function (a) {
        a.halt(), d._resetListPos(!1, !0);
      }), g.fixIE6Hover([".crumbAttr", ".crumbSearch-btn"]), d._dropdown();
    },
    _setBtnType: function () {
      var a = this;
      if (a._prevBtn.style.visibility = a._nextBtn.style.visibility = "hidden", !(a._liWidth <= a._listWidth)) {
        var c = parseInt(b.css(a._listEl, "left"));
        0 !== c && (a._prevBtn.style.visibility = "visible"), 0 === c && (a._nextBtn.style.visibility = "visible");
      }
    },
    _resetListPos: function (a, c, d) {
      var f = this,
        g = f.anim,
        h = parseInt(b.css(f._listEl, "left")),
        i = f._liWidth - f._listWidth,
        j = Math.min(-i, 0),
        j = c ? 0 == h ? -i : 0 : j,
        j = j + (d || 0),
        k = h == j ? !0 : !1;
      if (k) return void f._setBtnType.call(f);
      if (a) return b.css(f._listEl, {
        left: j + "px"
      }), void f._setBtnType.call(f);
      var l = Math.abs(j / 400);
      l = 0 == l ? .1 : l, g && g.stop(), f.anim = e(f._listEl, {
        left: j + "px"
      }, l, "easeOutStrong", function () {
        f._setBtnType.call(f);
      }), f.anim.run();
    },
    _dropdown: function () {
      var a = this;
      b.query(".J_TCrumbDrop", a._listEl).each(function (d) {
        var e = b.get(".J_TCrumbDropHd", d),
          f = b.get(".J_TCrumbDropBd", d),
          g = function (c, d) {
            var e = b.outerWidth(c),
              f = b.innerWidth(d),
              g = b.offset(c).left,
              h = b.offset(d).left,
              i = 0;
            f >= e && (i = Math.max(h - g, 0) || Math.min(h + f - (g + e), 0)), i && a._resetListPos(!1, !1, i);
          },
          h = function (c) {
            if (b.addClass(d, j), g(e, a._slideEl), "undefined" == typeof f._initWidth) {
              var h = f.step || (f.step = b.outerWidth(b.get("ul", f)) || 1),
                i = b.offset(a._slideEl).left + a._listWidth - b.offset(e).left;
              c = Math.min(Math.floor(i / h), c), f._initWidth = c * h || i, b.css(f, "width", f._initWidth);
            }
          };
        if (f) {
          var i = b.query("ul", f).length;
          i || (b.html(f, '<ul style="height:8px"><li style="color:#ccc;width:155px">\u62b1\u6b49\uff01\u6ca1\u6709ta\u7684\u540c\u7ea7\u7c7b\u76ee\u4e86~</li></ul>'), i = 1), c.on(d, "mouseenter mouseleave", function (a) {
            "mouseenter" == a.type ? h(i) : b.removeClass(d, j);
          });
        }
      });
    },
    _insertHotwords: function () {
      if ("true" != a.trim(b.attr(this._crumb, "data-notinbts"))) {
        var c = this._listEl,
          d = "//suggest.taobao.com/sug",
          e = shop_config && shop_config.userId || "";
        f.jsonp(d, {
          area: "tmall-hq",
          src: "in" + e + "..shop.pc",
          code: "utf-8"
        }, function (d) {
          if (d.success && d.model && d.model.list && d.model.list.length) {
            for (var f = "/?q={query}&type=p&from=inshophq_{idx}_{xiaoer}&search=y&newHeader_b=s_from&searcy_type=item", g = '<a class="{class}" href="{href}" title="{query}" atpanel="{atpanel}">{query}</a>', h = '<li class="hotwords"><span>\u672c\u5e97\u70ed\u641c\u8bcd\uff1a</span>', i = 0, j = d.model.list, k = j.length; k > i; i++) h += a.substitute(g, {
              "class": j[i].highlight ? "H" : "",
              query: j[i].query,
              atpanel: i + 1 + "," + j[i].query + ",,,,20,inshophq," + e,
              href: a.substitute(f, {
                query: j[i].query,
                idx: i + 1,
                xiaoer: j[i].xiaoer ? 1 : 0
              })
            });
            h += "</li>";
            var l = b.create(h);
            b.append(l, c);
          }
        });
      }
    }
  }), h;
}, {
  requires: ["dom", "event", "ua", "anim", "ajax", "./util"]
}), KISSY.add("modules/tmall/srch-list/libs/attr", function (a, b, c, d) {
  function e(b) {
    b && (!a.isArray(b) && (b = [b]), this.scope = b);
  }
  var f = ".J_TAttrNav",
    g = ".J_TCate",
    h = ".J_TProp",
    i = ".attr",
    j = ".J_TMore",
    k = ".J_TMoreAttrs",
    l = ".J_TMoreAttrsCont",
    m = ".J_TMultiple",
    n = ".J_TSubmitBtn",
    o = ".J_TCancelBtn",
    p = "ui-btn-disable",
    q = "av-selected",
    r = "av-expand",
    s = "av-collapse",
    t = "forMultiple",
    u = "attrExtra-more-drop",
    v = ".J_TAttrTrigger",
    w = {
      init: function (c) {
        var d = c.minDiffRow || 1,
          e = c.valueAnchors,
          f = e.length ? Math.max(e[0].offsetHeight, parseFloat(b.css(e[0], "lineHeight"))) : 25;
        if (c.moreBtn) {
          !a.trim(new RegExp("((.|\n)*)<i", "gi").exec(c.moreBtn.innerHTML)[1]) && (c.moreBtn.innerHTML = (b.hasClass(c.ul, r) ? "\u6536\u8d77" : "\u66f4\u591a") + c.moreBtn.innerHTML);
          var g = b.hasClass(c.ul, s) || b.hasClass(c.ul, r),
            h = !c.openMultiple,
            i = "visible" == b.style(c.moreBtn, "visibility"),
            j = (e.length ? e[e.length - 1].offsetTop - e[0].offsetTop : 0) >= d * f;
          g && h && (i || j) ? (b.hasClass(c.ul, r) && w.open(c), w.show(c), c.moreBtn.shouldShow = !0) : (w.hide(c), c.moreBtn.shouldShow = !1);
        } else b.style(c.ul, "height", "auto");
      },
      close: function (a) {
        if (a.moreBtn) {
          b.addClass(a.moreBtn, "ui-more-drop-l"), b.removeClass(a.moreBtn, "ui-more-expand-l");
          var c = b.html(a.moreBtn);
          c = c.replace("\u6536\u8d77", "\u66f4\u591a"), c = c.replace("expand", "drop"), b.html(a.moreBtn, c);
        }
      },
      open: function (a) {
        if (a.moreBtn) {
          b.addClass(a.moreBtn, "ui-more-expand-l"), b.removeClass(a.moreBtn, "ui-more-drop-l");
          var c = b.html(a.moreBtn);
          c = c.replace("\u66f4\u591a", "\u6536\u8d77"), c = c.replace("drop", "expand"), b.html(a.moreBtn, c);
        }
      },
      show: function (a) {
        a.moreBtn && b.show(a.moreBtn);
      },
      hide: function (a) {
        a.moreBtn && b.hide(a.moreBtn);
      }
    },
    x = {
      init: function (a) {},
      show: function (a) {
        a.multipleBtn && (b.show(a.multipleBtn), a.multipleBtn.isHidden = !1);
      },
      hide: function (a) {
        a.multipleBtn && (b.hide(a.multipleBtn), a.multipleBtn.isHidden = !0);
      }
    },
    y = {
      show: function (a) {
        a.submitBtn && b.show(a.submitBtn.parentNode);
      },
      hide: function (a) {
        a.submitBtn && b.hide(a.submitBtn.parentNode);
      }
    },
    z = {
      collapse: function (a) {
        b.replaceClass(a.ul, r, s);
      },
      expand: function (a) {
        b.replaceClass(a.ul, s, r);
      },
      openMultiple: function (a) {
        this.expand(a), x.hide(a), w.hide(a), y.show(a), b.addClass(a, t), a.openMultiple = !0;
      },
      close: function (a) {
        this.collapse(a), this._clearValSelectedCls(a), this._disableSubmitBtn(a), y.hide(a), b.removeClass(a, t), a.openMultiple = !1, x.show(a), a.moreBtn && a.moreBtn.shouldShow && (w.close(a), w.show(a));
      },
      closeAll: function (b) {
        a.each(b, function (a) {
          this.close(a);
        }, this);
      },
      _clearValSelectedCls: function (c) {
        a.each(c.valueAnchors, function (a) {
          b.removeClass(a.parentNode, q);
        });
      },
      _disableSubmitBtn: function (a) {
        a.submitBtn && !b.hasClass(a.submitBtn, p) && (b.addClass(a.submitBtn, p), a.valueAnchors.selectedCount = 0);
      }
    },
    A = {
      init: function (c) {
        this.scope && a.each(this.scope, function (d) {
          d.ul = b.get("ul", d), d.valueAnchors = b.query("a", d.ul), d.multipleBtn = b.get(m, d), d.moreBtn = b.get(j, d), d.submitBtn = b.get(n, d), d.cancelBtn = b.get(o, d), w.init(d), x.init(d), this._bindEvents(d), c && a.isFunction(c) && c.call(this, d);
        }, this);
      },
      _bindEvents: function (a) {
        this.bindEventForMultipleBtn(a), this.bindEventForMoreBtn(a), this.bindEventForValue(a), this.bindEventForCancelBtn(a), this.bindEventForSubmitBtn(a);
      },
      bindEventForMultipleBtn: function (a) {
        a.multipleBtn && c.on(a.multipleBtn, "click", function (b) {
          z.closeAll(this.scope), z.openMultiple(a);
        }, this);
      },
      bindEventForMoreBtn: function (a) {
        a.moreBtn && c.on(a.moreBtn, "click", function (c) {
          b.hasClass(a.ul, s) ? (z.expand(a), w.open(a)) : b.hasClass(a.ul, r) && (z.collapse(a), w.close(a));
        });
      },
      bindEventForValue: function (d) {
        d.valueAnchors.selectedCount = 0, d.submitBtn && b.addClass(d.submitBtn, p), a.each(d.valueAnchors, function (a) {
          c.on(a, "click", function () {
            return d.multipleBtn && d.multipleBtn.isHidden && b.hasClass(d.ul, r) ? (-1 == b.html(a).indexOf("<i></i>") && b.html(a, b.html(a) + "<i></i>"), b.hasClass(a.parentNode, q) ? (b.removeClass(a.parentNode, q), d.valueAnchors.selectedCount--) : (b.addClass(a.parentNode, q), d.valueAnchors.selectedCount++), d.submitBtn && (d.valueAnchors.selectedCount > 0 ? b.removeClass(d.submitBtn, p) : b.hasClass(d.submitBtn, p) || b.addClass(d.submitBtn, p)), !1) : void 0;
          });
        });
      },
      submit: function (a) {},
      bindEventForSubmitBtn: function (a) {
        a.submitBtn && c.on(a.submitBtn, "click", function (c) {
          return b.hasClass(a.submitBtn, p) || this.submit(a), !1;
        }, this);
      },
      bindEventForCancelBtn: function (a) {
        a.cancelBtn && c.on(a.cancelBtn, "click", function (b) {
          z.close(a);
        });
      }
    };
  a.augment(e, A);
  var B = function (d) {
    var e = b.get(k, d),
      f = b.get(l, d);
    c.on(e, "click", function (c) {
      var d = [];
      "none" == f.style.display ? (b.addClass(e, u), b.html(e, b.html(e).replace("\u66f4\u591a\u9009\u9879", "\u7cbe\u7b80\u9009\u9879")), b.show(f), d = d.concat(b.query(i, f))) : (b.removeClass(e, u), b.html(e, b.html(e).replace("\u7cbe\u7b80\u9009\u9879", "\u66f4\u591a\u9009\u9879")), b.hide(f), z.closeAll(d)), a.each(d, function (a) {
        w.init(a);
      });
    });
  };
  return function (j) {
    var k = b.get(f, j),
      l = b.query(g, k),
      m = b.query(h, k),
      n = b.get(v, k);
    if (k) {
      7 == d.ie && b.query(i).each(function (a) {
        b.query("a", a).each(function (a) {
          a.setAttribute("hideFocus", "true");
        });
      }), a.each(l, function (a) {
        a.minDiffRow = 2;
      });
      var o = new e(l);
      o.init(), B(k);
      var p = new e(m);
      p.submit = function (c) {
        var d = b.get(".J_TPV", k),
          e = "",
          f = [];
        a.each(c.valueAnchors, function (a) {
          if (b.hasClass(a.parentNode, q)) {
            var c = b.attr(a, "data-pv"),
              d = (c || "").split(":");
            e = d[0], d[1] && f.push(d[1]);
          }
        });
        var g = "" == e ? "" : e + ":" + f.join(","),
          h = b.val(d);
        b.val(d, "" == h ? g : h + ";" + g), a.log("attrNav pv input's value: " + b.val(d)), k.submit();
      }, p.init(), c.on(n, "click", function (a) {
        var c = a.target,
          d = b.next(c);
        b.toggleClass(c, "attrTrigger-expand"), -1 === c.className.indexOf("attrTrigger-expand") ? b.show(d) : b.hide(d);
      });
    }
  };
}, {
  requires: ["dom", "event", "ua"]
}), KISSY.add("modules/tmall/srch-list/libs/filter", function (a, b, c) {
  function d(a) {
    var c = this._filter = b.get(".J_TFilter", a);
    if (c) {
      var d = this._form = b.get("form", c),
        e = this._price = b.get(".J_TFPrice", d);
      this._priceInputs = b.query(".J_TFPInput", e), this._priceEnter = b.get(".J_TFPEnter", e), this._priceCancel = b.get(".J_TFPCancel", e), this._menu = b.get(".J_TFMenu", d), this._init();
    }
  }
  var e = "fPrice-hover";
  return a.augment(d, c.Target, {
    _init: function () {
      this._filter && (this._priceInit(), this._priceEvent(), this._menuInit(), this._menuEvent());
    },
    _priceInit: function () {
      var a = function (a, b) {
        var c = location.search,
          d = c.match(new RegExp("\\b" + b + "=(\\d+)\\b"));
        d && (a.value = d[1]);
      };
      a(this._priceInputs[0], "start_price"), a(this._priceInputs[1], "end_price");
    },
    _priceEvent: function () {
      if (this._price) {
        var a = this,
          d = null;
        a.isPriceFocus = !1, c.on(a._priceInputs, "blur", function () {
          d = setTimeout(function () {
            a.isPriceFocus = !1, b.removeClass(a._price, e);
          }, 300);
        }), c.on(a._priceInputs, "focus", function () {
          clearTimeout(d), a.isPriceFocus = !0, b.addClass(a._price, e);
        }), c.on(a._priceInputs, "keyup", function () {
          var a = this.value;
          /^\d+\.?\d*$/.test(a) || (a = Math.abs(parseFloat(a)), this.value = isNaN(a) ? "" : a);
        }), c.on(a._priceEnter, "click", function (b) {
          a._form.submit(), b.preventDefault();
        }), c.on(a._priceCancel, "click", function (c) {
          b.val(a._priceInputs, ""), a._priceInputs[0].focus(), c.preventDefault();
        }), c.on(a._filter, "keypress", function (b) {
          13 == b.keyCode && a.isPriceFocus && a._form.submit();
        });
      }
    },
    _menuEvent: function () {
      var a = this;
      a._menu && c.on(b.query("input", a._menu), "click", function () {
        a._form.submit();
      });
    },
    _menuInit: function () {
      if (this._menu) for (var a = "drop", c = b.children(this._menu, function (a) {
          return "INPUT" == a.tagName && "checkbox" == a.type;
        }), d = c.length, e = 3; d > e; e++) if (c[e].checked) {
        a = "expand";
        break;
      }
    }
  }), d;
}, {
  requires: ["dom", "event"]
}), KISSY.add("modules/tmall/srch-list/libs/item", function (a, b, c) {
  function d(a) {
    var c = this._section = b.get(".J_TItems", a);
    if (c) {
      this._items = b.query(".item", c);
      var d = this._items[0],
        e = b.outerWidth(d) || 0,
        f = 40,
        g = this.stepsNum = Math.ceil(e / f) - 1 || 1;
      m = 4 == g ? "_180x180.jpg" : m, this._init(a);
    }
  }
  var e = "photo",
    f = "thumb",
    g = "thumb-inner",
    h = "thumb-selected",
    i = "J_TThumbPrev",
    j = "J_TThumbNext",
    k = "thumb-disable",
    l = "_30x30.jpg",
    m = "_240x240.jpg";
  return a.augment(d, c.Target, {
    _init: function (d) {
      var e = this,
        h = e._items;
      a.each(h, function (a) {
        var d = b.get("." + g, a);
        if (d) {
          var h = b.query("b", d);
          e._thumb(a);
          var k = b.get("." + i, a),
            l = b.get("." + j, a);
          if (h.length >= e.stepsNum + 1) {
            b.css([k, l], {
              visibility: "visible",
              display: "inline-block"
            });
            var m = b.get("." + f, a);
            c.on(m, "mouseenter", function () {
              b.attr(d, "data-init") ? c.detach(this, "mouseenter") : (b.attr(d, "data-init", "true"), e._carousel(a));
            });
          }
        }
      }), e._lazyload(d);
    },
    _lazyload: function (b) {
      a.use("wangpu/gallery/datalazyload", function (a, c) {
        new c({
          container: b,
          autoDestroy: !1
        });
      });
    },
    _carousel: function (c) {
      var d = this,
        e = b.get("." + f, c);
      a.log("item sku carousel init start ..."), a.use("wangpu/gallery/switchable, wangpu/gallery/datalazyload", function (a, b) {
        new b.Carousel(e, {
          effect: "scrollx",
          steps: d.stepsNum,
          circular: !1,
          prevBtnCls: i,
          nextBtnCls: j,
          disableBtnCls: k,
          hasTriggers: !1,
          switchTo: 0,
          lazyDataType: "img-src"
        });
      }), a.log("item sku carousel init end");
    },
    _thumb: function (d) {
      var f = this,
        g = b.query("b", d),
        i = b.get("." + e, d),
        j = b.get("img", i),
        k = function (a) {
          return !!b.get("i", a);
        };
      a.each(g, function (a) {
        k(a) || b.append(b.create("<i>"), a);
      }), c.on(g, "click", function () {
        var c = this,
          d = b.get("img", c).src;
        a.each(g, function (a) {
          b.removeClass(a, h);
        }), b.addClass(c, h), k(c) || b.append(b.create("<i>"), c), j.src = d.replace(l, m), i.href = f._addParam(b.attr(c, "data-sku"), i.href);
      });
    },
    _addParam: function (a, b) {
      var c,
        d = /(\?|\&)sku_properties=(.*)(\&|$)/;
      return c = d.test(b) ? b.replace(d, "$1sku_properties=" + a + "$3") : b + "&sku_properties=" + a;
    }
  }), d;
}, {
  requires: ["dom", "event"]
}), KISSY.add("modules/tmall/srch-list/libs/atp", function (a, b, c, d, e) {
  function f(a) {
    for (var b, c, d = a; a && "HTML" != a.tagName && "BODY" != a.tagName && a.getAttribute;) {
      if (c = a.getAttribute(n)) {
        b = c, d = a;
        break;
      }
      if (!(a = a.parentNode)) break;
    }
    return {
      atpAttr: b,
      el: d
    };
  }
  function g(b) {
    var c,
      d = b.split(","),
      e = {};
    return a.each(d, function (a) {
      (c = /{(.*)}/.exec(a)) && (c = c[1]), c && (e[c] = "");
    }), e;
  }
  function h(a, c) {
    if (a && "A" == a.tagName) {
      if ("text" !== c) {
        var d,
          e,
          f = new RegExp("(\\?|\\&)" + c + "=([^&#]*)(\\&|\\#|$)", "g"),
          g = a.href || a.link || "";
        d = (e = f.exec(g)) ? e[2] : b.attr(a, "data-" + c) || "";
      } else d = b.text(a);
      return d;
    }
  }
  function i(c) {
    var d = f(c),
      e = d.el,
      i = d.atpAttr;
    if (e && i) {
      var j = g(i),
        k = b.query("a", e);
      a.each(k, function (c, d) {
        if (!c._atped) {
          var g = f(c);
          if (g.el == e) {
            var k, l;
            for (l in j) j[l] = h(c, l);
            j.loc = d + 1, k = a.substitute(i, j), !b.hasAttr(c, o) && b.attr(c, o, k), c._atped = !0;
          }
        }
      });
    }
  }
  function j(c) {
    var c = c.split(","),
      d = b.get("#__list_atpanel_param") ? b.get("#__list_atpanel_param").value : l.__list_atpanel_param || "",
      f = {
        pos: c[0] || "",
        itemid: c[1] || "",
        clickid: c[1] || "",
        itemcat: c[2] || "",
        itemspu: c[3] || "",
        fromtab: c[4] || "",
        type: c[5] || "",
        combo: c[6] || "",
        shopid: c[7] || "",
        actype: c[8] || "",
        gid: c[9] || ""
      },
      g = "rn=" + k(),
      h = "machineid=" + (e.get("t") || ""),
      i = "uid=" + (e.get("snk") || e.get("tracknick") || "");
    if (d += (/^.+(&|&amp;)$/.test(d) ? "" : "&") + g + "&" + h + "&" + i + "&" + a.param(f), "undefined" != typeof goldlog) goldlog.record("/tmdsearch.1.1", "tmallshopsearch", d, "H46836965");else {
      var j = new Image(),
        m = "_img_" + Math.random();
      l[m] = j, j.onload = j.onerror = function () {
        l[m] = null;
      }, j.src = ("https:" == location.protocol ? "https:" : "http:") + "//log.mmstat.com/tmdsearch.1.1?goldlog=undefined&" + d, j = null;
    }
  }
  function k() {
    if (!p) {
      for (var c = b.query("script", m.body), d = null, e = "", f = null, g = /asid=([a-zA-Z0-9\_\/\+\-\=]+)/, h = 0, i = c.length; i > h; h++) if (d = c[h], e = d.innerHTML, f = e.match(g), f && a.isArray(f)) {
        f = f[1];
        break;
      }
      p = f || "";
    }
    return p;
  }
  var l = window,
    m = document,
    n = "data-atp",
    o = "atpanel",
    p = "";
  return function (e) {
    function f(a) {
      if (a) {
        a = b.get(a);
        var c = b.attr(a, "atpanel") || b.parent(a) && b.attr(b.parent(a), "atpanel");
        c && j(c);
      }
    }
    c.delegate && c.delegate(m.body, "mouseenter", "a", function (a) {
      var c = a.currentTarget;
      if (!c._atped) return b.attr(c, o) ? void (c._atped = !0) : void i(c);
    }), l.atpanelFun || (c.on(m.body, "click", function (a) {
      return f(a.target);
    }), l.atpanelFun = j, l.sendAtp = f), a.ready(function () {
      var a = b.get("#__searchLog") ? b.get("#__searchLog").value : l.__searchLog || "",
        c = a + (/^.+(&|&amp;)$/.test(a) ? "" : "&") + "rn=" + (p = k()) + "&callback=" + +new Date(),
        e = (b.get(".J_TSearchLog") || {
          value: ""
        }).value;
      d.post(e, c);
    });
  };
}, {
  requires: ["dom", "event", "ajax", "cookie"]
}), KISSY.add("modules/tmall/srch-list/libs/pin", function (a, b, c, d, e, f) {
  function g() {
    return TB && TB.Global && TB.Global.loginStatusReady && TB.Global.loginStatusReady(function (a) {
      l = a.isLogin;
    }), !!l;
  }
  function h(a) {
    this._init();
  }
  var i,
    j,
    k,
    l,
    m = 6 == d.ie ? "//gtms02.alicdn.com/tps/i2/T1wiDnFnhfXXaSQP_X-16-16.png" : "//gtms03.alicdn.com/tps/i3/T19YHoFXBgXXaSQP_X-16-16.png",
    n = "//bar.tmall.com/pinItem.htm?pin=1&itemId={itemId}&_tb_token_={token}",
    o = ".J_TPin";
  return a.augment(h, {
    _init: function () {
      var d = window.g_config.toggle,
        h = d ? d.closePin : 0;
      if (h) return void b.addStyleSheet("body .tshop-pbsm-tmall-srch-list .photo .pin{display:none;}");
      var l = this;
      a.ready(function () {
        l._initNodes(), i = b.get("#J_TokenField").value, c.delegate(j, "click", o, function (c) {
          function d() {
            f.jsonp(a.substitute(n, {
              itemId: l,
              token: i
            }), function (d) {
              if (1 == d.s || -5 == d.s) {
                var f = TB.Global.mallbar;
                if (!f) return;
                b.addClass(h, " clicked"), k = k || e.one('<img src="' + m + '"/>').appendTo(document.body);
                var g = {
                  left: c.pageX,
                  top: c.pageY,
                  display: "inline",
                  opacity: 1
                };
                k.css(g), f.fly({
                  type: "foot",
                  flyer: k,
                  start: g,
                  complete: function () {
                    a.log("wangpu/.../tmall-srch-list/pin::the fly action competed!");
                  }
                });
              } else -3 == d.s && a.use("mui/overlay/dialog", function (a, b) {
                var c = new b({
                  width: 300,
                  height: 100,
                  bodyContent: '<div style="line-height:60px;padding-left:20px;color:#666">\u55b5~ \u60a8\u6700\u591a\u4ec5\u80fd\u9489100\u4e2a\u5b9d\u8d1d\uff0c\u73b0\u5728\u8d85\u9650\u5566\uff01</div>',
                  mask: !0,
                  showCat: !0,
                  align: {
                    points: ["cc", "cc"]
                  }
                });
                c.render(), c.get("el").css({
                  zIndex: 99999
                }), c.show(), setTimeout(function () {
                  c.hide();
                }, 4e3);
              });
            }), window.sendAtp && window.sendAtp(h);
          }
          c.halt();
          var h = c.currentTarget;
          if (!b.hasClass(h, "clicked")) {
            var j = b.parent(h, ".item"),
              l = j && b.attr(j, "data-id") || -1;
            if (!g()) return a.log("wangpu/.../tmall-srch-list/pin::check current user doesn't login in. So to call the mini login."), void a.use("mui/minilogin,mui/overlay/overlay.css", function (a, b) {
              b.show(function () {
                a.log("wangpu/.../tmall-srch-list/pin::current user logins in successfully. And to call the callback function."), d();
              }, {
                check: !1
              });
            });
            a.log("wangpu/.../tmall-srch-list/pin::check current user has login in. So to call the callback function."), d();
          }
        });
      });
    },
    _initNodes: function () {
      j = b.get("#TmshopSrchNav");
    }
  }), h;
}, {
  requires: ["dom", "event", "ua", "node", "ajax"]
}), KISSY.add("modules/tmall/srch-list/index", function (a, b, c, d, e, f, g, h) {
  function i(a) {
    (this._mod = a.mod) && this._init(this._mod);
  }
  var j = a.DOM;
  return a.augment(i, {
    _init: function (b) {
      var c = this,
        d = new Date();
      a.log("TshopPbsmTmallSrchList start to init at " + d), j.get("#J_ShopAsynSearchURL") ? c._asynSearch(function () {
        c._initMods(b);
      }) : c._initMods(b), a.log("TshopPbsmTmallSrchList inited using " + (new Date() - d) + " ms");
    },
    _asynSearch: function (b) {
      a.io(h({
        dataType: "jsonp",
        url: j.get("#J_ShopAsynSearchURL").value,
        success: function (a) {
          j.get("#J_ShopSearchResult").innerHTML = a, b();
        }
      }, {
        style: "tmall"
      }));
    },
    _initMods: function (a) {
      new b(a), new c(a), new d(a), new e(a), new f(a), new g(a);
    }
  }), i.selector = ".tshop-pbsm-tmall-srch-list", i;
}, {
  requires: ["./libs/crumb", "./libs/attr", "./libs/filter", "./libs/item", "./libs/atp", "./libs/pin", "sd/data_sufei/sufei"]
});
KISSY.add("modules/tmall/vip-profile/index", function (a, b, c, d) {
  function e(e) {
    var f;
    (f = e.mod) && a.ready(function () {
      var e = b.get(".J_TShopVip", f),
        g = b.attr(e, "data-shop-vip") || "",
        h = b.get(".J_TShopSub", e),
        i = b.get(".J_TShopVipDetail", e),
        j = b.get(".J_TShopVipRulesBd", e),
        k = b.query("tr", j),
        l = null,
        m = function (c) {
          if (l) c.call(void 0, l);else if (l = (b.get("#J_TokenField") || document.getElementsByName("tb_token")[0] || {
            value: ""
          }).value) c.call(void 0, l);else {
            var d = "//" + (location.host.indexOf("daily.") ? "tmm.daily.taobao.net" : "tmm.taobao.com") + "/cookies.do?keys=_tb_token_";
            a.io.jsonp(d, {
              cookie: "_tb_token_"
            }, function (a) {
              l = a._tb_token_, c.call(void 0, l);
            });
          }
        };
      d.jsonp(g, void 0, function (e) {
        var f = e.success,
          g = e.code,
          j = e.level_num || 0,
          l = e.level_nick || "",
          n = e.rights || [],
          o = e.sub_status;
        if (f) {
          var p = 1 > j ? "" : '<p><span>\u6211\u7684\u7b49\u7ea7\uff1a</span><i class="i-vip' + j + '"></i><em>' + l + "</em></p>";
          p += "<p><span>\u6211\u7684\u6743\u76ca\uff1a</span>", p += '<i class="i-discount' + (a.inArray("discount", n) ? "" : " gray") + '"></i>', p += '<i class="i-point' + (a.inArray("multi", n) ? "" : " gray") + '"></i>', p += '<i class="i-freepostage' + (a.inArray("free", n) ? "" : " gray") + '"></i>', p += "</p>", b.html(i, p), b.show(i), b.addClass(k[j - 1], "shop-vip-cur"), o && (b.html(h, "\u5df2\u6536\u542c"), b.css(h, {
            cursor: "default",
            textDecoration: "none"
          }), c.on(h, "click", function (a) {
            a.halt();
          }));
        }
        (f && !o || !f && "E01" === g) && c.on(h, "click", function (c) {
          c.halt(), !h._status && m(function (c) {
            a.use("tml/minilogin,tml/overlay/css/overlay.css", function (a, e) {
              e.show(function () {
                d.jsonp(h.href, "_tb_token_=" + c, function (c) {
                  c.success ? (h._status = !0, b.html(h, "\u5df2\u6536\u542c"), b.css(h, {
                    cursor: "default",
                    textDecoration: "none"
                  })) : a.use("tml/overlay,tml/overlay/css/overlay.css", function (a, b) {
                    var c = new b.Alert({
                      skin: "default",
                      headerContent: "\u5929\u732b\u5e97\u94fa\u4f1a\u5458\u4e2d\u5fc3",
                      msgType: "error",
                      tip: "\u6536\u542c\u5e97\u94fa\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u8fdb\u884c\u6536\u542c\uff0c\u6216\u6362\u65f6\u6bb5\u518d\u8bd5~",
                      confirmBtn: "\u6211\u77e5\u9053\u4e86"
                    });
                    c.render(), c.show();
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  return e.selector = ".tshop-psm-tmall-vip-profile", e;
}, {
  requires: ["dom", "event", "ajax"]
});
KISSY.add("modules/other/customer-service/index", function (S) {
  function TshopPbsmOtherCustomerService(a) {
    var b = this;
    b._mod = a.mod, b._mod && b._init();
  }
  var S = KISSY,
    DOM = S.DOM,
    Node = S.Node;
  return S.augment(TshopPbsmOtherCustomerService, {
    _init: function () {
      S.log("TshopPbsmOtherCustomerService init start");
      var a = this;
      a._displayWWGroop(), S.log("TshopPbsmOtherCustomerService init end");
    },
    _displayWWGroop: function () {
      var self = this,
        tempwangwang,
        templi,
        tempdesc,
        api = "//amos.alicdn.com/",
        config = "groupid=0&v=2&site=cntaobao&s=1&charset=utf-8&uid=",
        uls = Node.all("ul.service-group", self._mod),
        node = uls.item(uls.length - 1),
        url = node.attr("data-url"),
        nick = node.attr("data-nick"),
        gnick = node.attr("data-gnick"),
        groupIdFilter = node.attr("data-group-filter").split("@_@");
      node.children().innerHTML = null, "" != url && S.getScript(url, function () {
        try {
          var groups = eval("(" + groupMember + ")").groups;
        } catch (err) {
          var groups = "";
        }
        var showMainWW = function () {
          templi = DOM.create("<li>", {
            "data-wangwang": "mainwangwang"
          }), tempdesc = DOM.create("<span>", {
            "class": "groupname"
          }), DOM.html(tempdesc, "\u5ba2\u670d\u4e2d\u5fc3"), tempwangwang = DOM.create("<a>", {
            href: api + "getcid.aw?" + config + nick + "&fromid=cntaobao" + (S.Cookie.get("_nk_") ? S.fromUnicode(S.Cookie.get("_nk_")) : ""),
            target: "_blank"
          }), tempwangwang.appendChild(DOM.create("<img>", {
            src: api + "online.aw?" + config + nick,
            alt: "\u70b9\u51fb\u8fd9\u91cc\u7ed9\u6211\u53d1\u6d88\u606f"
          })), templi.appendChild(tempdesc), DOM.insertAfter(tempwangwang, tempdesc), node.append(templi);
        };
        if ("" != groups && groups.group && groups.group.length && "" != groupIdFilter[0]) {
          var groupMembers = groups.group,
            count = 0;
          S.each(groupMembers, function (a, b) {
            (S.inArray(groupMembers[b].groupId.toString(), groupIdFilter) || "all" == groupIdFilter[0]) && (templi = DOM.create("<li>", {
              "class": "group"
            }), tempdesc = DOM.create("<span>", {
              "class": "groupname"
            }), DOM.html(tempdesc, groupMembers[b].groupName), tempwangwang = DOM.create("<a>", {
              href: api + "getcid.aw?v=3&uid=" + gnick + "&site=cntaobao&groupid=" + groupMembers[b].groupId + "&s=1&charset=gbk&fromid=cntaobao" + (S.Cookie.get("_nk_") ? S.fromUnicode(S.Cookie.get("_nk_")) : ""),
              target: "_blank"
            }), tempwangwang.appendChild(DOM.create("<img>", {
              src: api + "grponline.aw?v=3&uid=" + gnick + "&site=cntaobao&gids=" + groupMembers[b].groupId + "&s=1",
              alt: "\u70b9\u51fb\u8fd9\u91cc\u7ed9\u6211\u53d1\u6d88\u606f"
            })), templi.appendChild(tempdesc), DOM.insertAfter(tempwangwang, tempdesc), node.append(templi), count++);
          }), count || showMainWW();
        } else showMainWW();
      });
    }
  }), TshopPbsmOtherCustomerService.selector = ".tshop-pbsm-other-customer-service", TshopPbsmOtherCustomerService;
});
KISSY.add("modules/other/guanliantuijian/index", function (S, Template) {
  function TshopPbsmOtherGuanliantuijian(a) {
    var b = a.mod;
    a.document;
    b && !S.get(".guanliantuijian-preview") && (S.log("TshopPbsmOtherGuanliantuijian init start"), this.pageType = this.checkPageType(), "design" !== this.pageType && (this.box = Node.one(b), this.con = Node.one(DOM.get(".J_guanliantuijian", b)), this.bd = Node.one(DOM.get(".J_bd", b)), this.moduleRegion = Node.one(DOM.parent(b, ".tb-module")), this.bdGrid = Node.one(DOM.get(".J_blocks", b)), this.tpl = Template(Node.one(DOM.get("textarea", b)).val()), this.data = void 0, this.moduleConfig = this.getModuleConfig(), this.fetch(), S.log("TshopPbsmOtherGuanliantuijian init end")));
  }
  var S = KISSY,
    Event = S.Event,
    DOM = S.DOM,
    Node = S.Node,
    GCfg = {
      pageType: {
        design: "design",
        detail: "detail",
        other: "other"
      },
      moduleTitle: {
        view: "\u5927\u5bb6<b>\u770b</b>\u4e86\u4e4b\u540e\u4f1a\u4e70",
        buy: "\u5927\u5bb6<b>\u4e70</b>\u4e86\u4e4b\u540e\u8fd8\u4f1a\u4e70",
        same: "\u540c\u7c7b\u70ed\u9500\u5b9d\u8d1d"
      },
      APITpl: "//{host}/recommend?appid=1837&itemid={itemId}&count=5&style=h&types={type}",
      APIHost: location.href.indexOf("daily") > -1 ? "tui.daily.taobao.net" : "tui.taobao.com"
    };
  return TshopPbsmOtherGuanliantuijian.prototype = {
    fetch: function () {
      var a = this;
      S.IO({
        type: "get",
        url: this.getUrl(),
        success: function (b) {
          a.dataHandle(b), a.render();
        },
        dataType: "jsonp",
        jsonp: "callback"
      });
    },
    dataHandle: function (a) {
      var b = a.result || a.list,
        c = a.count.split(","),
        d = a.types.split(","),
        e = this.moduleConfig,
        f = {
          blocks: []
        },
        g = this;
      return S.each(d, function (a, d) {
        var e = {
          type: a,
          title: GCfg.moduleTitle[a],
          list: b.splice(0, parseInt(c[d]))
        };
        f.blocks.push(e);
      }), S.each(f.blocks, function (a) {
        var b,
          c,
          d,
          f = /_160x160\.jpg$/;
        if (b = a.list) {
          for (d = 0; b[d]; d++) c = b[d].pic, c && "string" == typeof c && (c = c.replace(/\s*/g, ""), f.test(c) || (b[d].pic = c + "_160x160.jpg"));
          g.itemSort(b, e.sort);
        }
      }), this.data = f, f;
    },
    itemSort: function (a, b) {
      var c;
      switch (b) {
        case "default":
          return;
        case "price":
          c = "price";
          break;
        case "sales":
          c = "sellCount";
          break;
        default:
          return;
      }
      a.sort(function (a, b) {
        return a[c] - b[c];
      });
    },
    render: function () {
      var a = this.data,
        b = this.box,
        c = 0;
      try {
        for (var d = 0; d < a.blocks.length; d++) c += a.blocks[d].list.length;
      } catch (e) {
        return void S.log("guanliantuijian data error", "error");
      }
      c > 0 ? (this.bdGrid.html(this.tpl.render(a)), this.con.show()) : DOM.addClass(DOM.parent(b, ".box"), "hidden");
    },
    getLayoutWidth: function () {
      return this.moduleRegion ? this.moduleRegion.width() : 0;
    },
    checkPageType: function () {
      var a = location.origin;
      return a = "detail.taobao.com", a.indexOf("design.taobao") >= 0 || a.indexOf("design.daily.taobao") >= 0 ? GCfg.pageType.design : a.indexOf("item.taobao") >= 0 || a.indexOf("item.daily.taobao") >= 0 ? GCfg.pageType.detail : GCfg.pageType.other;
    },
    getModuleConfig: function () {
      return eval("(" + this.con.attr("data-config") + ")");
    },
    getUrl: function () {
      var a = g_config.idata.item.id,
        b = (g_config.idata.seller.id, g_config.idata.shop.id);
      return this.url = S.substitute(GCfg.APITpl, {
        host: GCfg.APIHost,
        itemId: a,
        shopId: b,
        type: this.moduleConfig.type
      }), this.url;
    }
  }, TshopPbsmOtherGuanliantuijian.selector = ".tshop-pbsm-other-guanliantuijian", TshopPbsmOtherGuanliantuijian;
}, {
  requires: ["wangpu/gallery/template"]
});
KISSY.add("modules/other/taoke-recharge/index", function (a) {
  function b(b) {
    var h = this;
    if (h._mod = b.mod, h._mod && d.attr("#J_AlimRechargeData", "data-value")) {
      var i = a.JSON.parse(d.attr("#J_AlimRechargeData", "data-value")),
        j = i.taokeServer,
        k = {
          phoneList: "/chongzhi/phone_list.do",
          phoneSearch: "/chongzhi/phone_search.do",
          phoneCard: "/chongzhi/phone_card.do"
        },
        l = {
          qqList: "/chongzhi/qq_list.do",
          qqCard: "/chongzhi/qq_card.do"
        },
        m = {
          cardList: "/chongzhi/dian_ka_list.do",
          cardBuy: "/chongzhi/dian_ka.do"
        },
        n = {
          onlineList: "/chongzhi/hot_games.do",
          onlineBuy: "/chongzhi/game_goods_submit.do"
        },
        o = "mm_" + i.taokepid + "_0_0",
        p = {
          tel: "//s8.taobao.com/search?q=%B3%E4%D6%B5&ex_q=&filterFineness=&atype=&isprepay=1&promoted_service4=4&user_type=1&olu=yes&commend=all&sort=coefp&style=grid&viewIndex=7&p4p_str=lo1%3D0%26lo2%3D0%26nt%3D1&mode=86&${SearchString}&b=zhl347",
          card: "//s8.taobao.com/search?q=%B5%E3%BF%A8&${SearchString}&mode=86&rt=1323847099431",
          gold: "//s8.taobao.com/search?q=qq&{SearchString}&mode=86&rt=1323847137408",
          online: "//s8.taobao.com/search?q=%CD%F8%D3%CE&unid=0&mode=86&${SearchString}&p4p_str=lo1%3D0%26lo2%3D0%26nt%3D1&cat=50017708&from=compass&navlog=compass-3-c-50017708"
        },
        q = "\u53f7\u7801\u6709\u8bef,\u8bf7\u91cd\u65b0\u8f93\u5165",
        r = "\u53f7\u7801\u4e0d\u4e00\u81f4,\u8bf7\u91cd\u65b0\u8f93\u5165",
        s = "\u8d27\u7269\u6682\u7f3a",
        t = "\u83b7\u53d6\u6570\u636e\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5",
        u = {
          create: function () {
            "undefined" != typeof localStorage ? c = localStorage : g && (c = f.createElement("input"), c.type = "hidden", f.body.appendChild(c), c.addBehavior("#default#userData"));
          },
          set: function (a, b) {
            if ("setItem" in c) c.setItem(a, b);else if (g) try {
              c.setAttribute(a, b), c.save("IELocalDataStore");
            } catch (d) {}
          },
          get: function (a) {
            if ("getItem" in c) return c.getItem(a);
            if (g) try {
              return c.load("IELocalDataStore"), c.getAttribute(a);
            } catch (b) {}
          }
        },
        v = function (a) {
          this._gameSubbtn = d.get("#J_AlimGameSubmit", a), this._gameCatD = d.get("#J_AlimGameCatId", a), this._catOpts = this._gameCatD.options, this._gameCatNameD = d.get("#J_AlimGameCatName", a), this._parPriceLabelD = d.get("#J_AlimGameParPrice_label", a), this._parPriceD = d.get("#J_AlimGameParPrice", a), this._parPriceOpts = this._parPriceD.options, this._gameSalePriceEntry = d.get("#J_AlimGameSalePriceEntry", a), this._gameSalePriceLabelD = d.get("#J_AlimGameSalePriceLabel", a), this._gameSalePriceD = d.get("#J_AlimGameSalePrice", a), this._gameCardD = d.get("#J_AlimGameCard", a), this._gameGoldD = d.get("#J_AlimGameGold", a), this._gameOnlineD = d.get("#J_AlimGameOnline", a), this._gameMsgBox = d.get("#J_AlimGameMsgBox", a), this._gameMsgD = d.get("#J_AlimGameMsg", a), this._isGameLackItem = !1, this._currentGameType = null, this.GAME_TYPE = {
            GOLD: "gold",
            CARD: "card",
            ONLINE: "online"
          }, this._catIndex = 0, this._parPriceIndex = 0, this._gameCatsInfo = new Array(), this._gameItemsInfo = null, this._searchMore = null;
          var b = this;
          window.setTimeout(function () {
            b.init();
          }, 200);
        };
      a.augment(v, {
        init: function () {
          this._initGameEvent();
          var a = i.showCard + i.showGold + i.showOnline;
          a > 1 ? "card" == u.get("gameType") ? (d.attr(this._gameCardD, "checked", "checked"), this._displayCatName(this._gameCardD)) : "gold" == u.get("gameType") ? (d.attr(this._gameGoldD, "checked", "checked"), this._displayCatName(this._gameGoldD)) : "online" == u.get("gameType") ? (d.attr(this._gameOnlineD, "checked", "checked"), this._displayCatName(this._gameOnlineD)) : d.attr(this._gameCardD, "checked") ? this._displayCatName(this._gameCardD) : d.attr(this._gameGoldD, "checked") ? this._displayCatName(this._gameGoldD) : d.attr(this._gameOnlineD, "checked") ? this._displayCatName(this._gameOnlineD) : (d.attr(this._gameCardD, "checked", "checked"), this._displayCatName(this._gameCardD)) : i.showCard ? (this._currentGameType = this.GAME_TYPE.CARD, this._requestCardCatsInfo()) : i.showGold ? (this._currentGameType = this.GAME_TYPE.GOLD, this._requestQQCatsInfo()) : i.showOnline && (this._currentGameType = this.GAME_TYPE.ONLINE, this._togglePriceEntry("hidden"), this._requestOnlineCatsInfo());
        },
        _initGameEvent: function () {
          var b = this;
          a.each([b._gameCardD, b._gameGoldD, b._gameOnlineD], function (a) {
            !!a && e.on(a, "click", function () {
              b._msgToRecharge(), b._displayCatName(this);
            });
          }, b), e.on(b._gameCatD, "change", function () {
            b._catIndex = this.selectedIndex, b._catChange();
          }), e.on(b._parPriceD, "change", function () {
            b._parPriceIndex = this.selectedIndex, b._parPriceChange();
          });
        },
        _clearDataCache: function () {
          this._gameCatsInfo = [], this._gameItemsInfo = null;
        },
        _markGameLackItem: function (a) {
          this._gameSalePriceLabelD.innerHTML = "\u6682\u7f3a\uff1a", this._gameSalePriceD.innerHTML = "<a href='" + p[a].replace(/\$\{SearchString\}/, "pid=" + o) + "' target='_blank'>\u70b9\u6b64\u641c\u7d22</a>", d.hasClass(this._gameSubbtn, "hidden") || d.addClass(this._gameSubbtn, "hidden");
        },
        _displayCatName: function (a) {
          switch (this._clearDataCache(), this._clearPrice(), d.attr(a, "id")) {
            case "J_AlimGameGold":
              this._currentGameType = this.GAME_TYPE.GOLD, u.set("gameType", "gold"), d.text(this._gameCatNameD, "\u79cd\u7c7b\uff1a"), d.text(this._parPriceLabelD, "\u9762\u503c\uff1a"), this._togglePriceEntry("show"), this._requestQQCatsInfo();
              break;
            case "J_AlimGameCard":
              this._currentGameType = this.GAME_TYPE.CARD, u.set("gameType", "card"), d.text(this._gameCatNameD, "\u6e38\u620f\uff1a"), d.text(this._parPriceLabelD, "\u9762\u503c\uff1a"), this._togglePriceEntry("show"), this._requestCardCatsInfo();
              break;
            case "J_AlimGameOnline":
              this._currentGameType = this.GAME_TYPE.ONLINE, u.set("gameType", "online"), d.text(this._gameCatNameD, "\u6e38\u620f\uff1a"), d.text(this._parPriceLabelD, "\u7269\u54c1\uff1a"), this._togglePriceEntry("hidden"), this._requestOnlineCatsInfo();
          }
        },
        _togglePriceEntry: function (a) {
          "show" === a ? d.removeClass(this._gameSalePriceEntry, "hidden") : "hidden" === a && (d.hasClass(this._gameSalePriceEntry, "hidden") || d.addClass(this._gameSalePriceEntry, "hidden"));
        },
        _requestOnlineCatsInfo: function () {
          var b = this;
          a.io({
            dataType: "jsonp",
            url: j + n.onlineList,
            success: function (a) {
              return a.success ? (b._isGameLackItem = !1, void b.getOnlineCats(a)) : (b._isGameLackItem = !0, void b._rechargeToMsg(t, "warning"));
            }
          });
        },
        getOnlineCats: function (b) {
          return b.data ? (a.each(b.data, function (a, b) {
            this._gameCatsInfo.push({
              catId: b,
              catData: a
            });
          }, this), this._fillCatOpts(), void this._catChange()) : void h._rechargeToMsg(t, "warning");
        },
        _requestCardCatsInfo: function () {
          var b = this;
          a.io({
            dataType: "jsonp",
            url: j + m.cardList,
            success: function (a) {
              return a.success ? (b._isGameLackItem = !1, void b.getCardCats(a)) : (b._isGameLackItem = !0, void b._rechargeToMsg(t, "warning"));
            }
          });
        },
        getCardCats: function (b) {
          return b.data ? (a.each(b.data, function (a, b) {
            this._gameCatsInfo.push({
              catId: b,
              catData: a
            });
          }, this), this._gameCatsInfo.sort(function (a, b) {
            return a.catData.name.localeCompare(b.catData.name);
          }), this._fillCatOpts(), void this._catChange()) : void h._rechargeToMsg(t, "warning");
        },
        _requestQQCatsInfo: function () {
          var b = this;
          a.io({
            dataType: "jsonp",
            url: j + l.qqList,
            success: function (a) {
              return a.success ? (b._isGameLackItem = !1, void b.getQQCats(a)) : (b._isGameLackItem = !0, void b._rechargeToMsg(t, "warning"));
            }
          });
        },
        getQQCats: function (b) {
          return b.data ? (a.each(b.data, function (a, b) {
            this._gameCatsInfo.push({
              catId: b,
              catData: a
            });
          }, this), this._fillCatOpts(), void this._catChange()) : void h._rechargeToMsg(t, "warning");
        },
        _fillCatOpts: function () {
          var b = this._catOpts;
          this._recoveryCatOpts(), this._recoveryPrice(), this._gameCatsInfo.length > 0 && a.each(this._gameCatsInfo, function (a) {
            b[b.length] = new Option(a.catData.name, a.catId);
          });
        },
        _recoveryCatOpts: function () {
          this._catOpts.length = 0, this._catIndex = 0;
        },
        _recoveryPrice: function () {
          this._parPriceOpts.length = 0, this._parPriceIndex = 0, d.text(this._gameSalePriceD, "");
        },
        _catChange: function () {
          this._recoveryPrice(), this._clearPrice(), this._gameItemsInfo = this._gameCatsInfo[this._catIndex], this._fillParPriceOpts(), this._parPriceChange();
        },
        _fillParPriceOpts: function () {
          var b,
            c,
            d = this._parPriceOpts;
          this._currentGameType === this.GAME_TYPE.ONLINE ? (b = this._gameItemsInfo ? this._gameItemsInfo.catData.goods : [], c = b.length > 0 ? this._gameItemsInfo.catData.pidvid : []) : (b = this._gameItemsInfo ? this._gameItemsInfo.catData.price : [], c = b.length > 0 ? this._gameItemsInfo.catData.price_vid : []), this._msgToRecharge(), a.each(b, function (a, b) {
            d[d.length] = new Option(a, c[b]);
          });
        },
        _clearPrice: function () {
          d.text(this._gameSalePriceLabelD, "\u552e\u4ef7\uff1a"), d.text(this._gameSalePriceD, ""), d.hasClass(this._gameSubbtn, "hidden") && d.removeClass(this._gameSubbtn, "hidden");
        },
        _parPriceChange: function () {
          this._clearPrice();
          var b = this._parPriceIndex,
            c = this._gameItemsInfo;
          switch (this._currentGameType) {
            case this.GAME_TYPE.GOLD:
              var d = c.catData,
                e = this;
              a.io({
                dataType: "jsonp",
                url: j + l.qqCard,
                data: {
                  cat_id: c.catId,
                  price_id: d.price_id,
                  mm_id: o,
                  price_vid: d.price_vid[b],
                  service_id: d.service_id
                },
                success: function (a) {
                  return a.success ? (e._isGameLackItem = !1, void e._fillPriceAndEnableBuy({
                    clickUrl: a.click_url,
                    price: a.price
                  })) : (e._isGameLackItem = !0, void e._markGameLackItem("gold"));
                }
              });
              break;
            case this.GAME_TYPE.CARD:
              var d = c.catData,
                e = this;
              a.io({
                dataType: "jsonp",
                url: j + m.cardBuy,
                data: {
                  cat_id: c.catId,
                  price_id: d.price_id,
                  mm_id: o,
                  price_vid: d.price_vid[b],
                  service_id: d.service_id
                },
                success: function (a) {
                  return a.success ? (e._isGameLackItem = !1, void e._fillPriceAndEnableBuy({
                    clickUrl: a.click_url,
                    price: a.price
                  })) : (e._isGameLackItem = !0, void e._markGameLackItem("card"));
                }
              });
              break;
            case this.GAME_TYPE.ONLINE:
              var d = c.catData,
                e = this;
              e._togglePriceEntry("hidden"), a.io({
                dataType: "jsonp",
                url: j + n.onlineBuy,
                data: {
                  cat_id: c.catId,
                  mm_id: o,
                  pidvid: d.pidvid[b]
                },
                success: function (a) {
                  return a.success ? (e._isGameLackItem = !1, void e._fillPriceAndEnableBuy({
                    clickUrl: a.click_url,
                    price: a.price
                  })) : (e._isGameLackItem = !0, e._togglePriceEntry("show"), void e._markGameLackItem("online"));
                }
              });
          }
        },
        _fillPriceAndEnableBuy: function (a) {
          d.text(this._gameSalePriceD, a.price), d.attr(this._gameSubbtn, "href", a.clickUrl), this._msgToRecharge();
        },
        _rechargeToMsg: function (b, c) {
          d.text(this._gameMsgD, b), d.hasClass(this._gameMsgBox, c) || ("dealing" == c && (d.hasClass(this._gameMsgBox, "warning") && d.removeClass(this._gameMsgBox, "warning"), d.hasClass(this._gameSubbtn, "hidden") || d.addClass(this._gameSubbtn, "hidden")), d.addClass(this._gameMsgBox, c)), d.hasClass(this._gameMsgBox, "hidden") && d.removeClass(this._gameMsgBox, "hidden"), a.UA.ie && 8 > a.UA.ie && (d.css(this._telSubbtn, "zoom", ""), d.css(this._telSubbtn, "zoom", "1"));
        },
        _msgToRecharge: function () {
          d.hasClass(this._gameMsgBox, "hidden") || d.addClass(this._gameMsgBox, "hidden"), a.UA.ie && 8 > a.UA.ie && (d.css(this._telSubbtn, "zoom", ""), d.css(this._telSubbtn, "zoom", "1"));
        }
      });
      var w = function (a) {
        this._telBoxType = 190 == d.width(d.parent(a)) ? "vt" : "hz", this._telPanel = d.get(".tel-panel", a), this._telSubbtn = d.get("#J_AlimTelSubmit", a), this._telMsgBoxD = d.get("#J_AlimTelMsgBox", a), this._telMsgD = d.get("#J_AlimTelMsg", a), this._telOperatorD = d.get("#J_AlimTelOperator", a), this._parPriceD = d.get("#J_AlimTelParPrice", a), this._parPriceOpts = this._parPriceD.options, this._telSalePriceLabelD = d.get("#J_AlimTelSalePriceLabel", a), this._telSalePriceD = d.get("#J_AlimTelSalePrice", a), this._telInputD = d.get("#J_AlimTelInput", a), this._telInputCfmD = d.get("#J_AlimTelInputCfm", a), this._telProvinceD = d.get("#J_AlimTelProvince", a), this._telCatNameD = d.get("#J_AlimTelCatName", a), this._isTelLackItem = !1, this._mobilesInfo = new Array(), this._getPriceData = {}, this._getPriceData.mm_id = o, this._initTelEvent(), this._getPrice();
      };
      a.augment(w, {
        _initTelEvent: function () {
          var a = this;
          e.on(a._telInputD, "focus", function () {
            d.hasClass(this, "prompt") && (d.val(this, ""), d.removeClass(this, "prompt")), d.attr(a._telInputCfmD, "disabled") && d.removeAttr(a._telInputCfmD, "disabled"), a._msgToRecharge();
          }), e.on(a._telInputCfmD, "focus", function () {
            d.hasClass(this, "prompt") && (d.val(this, ""), d.removeClass(this, "prompt"));
          }), e.on(a._telInputD, "paste", function () {
            return !1;
          }), e.on(a._telInputCfmD, "paste", function () {
            return !1;
          }), e.on(a._telInputD, "contextmenu", function () {
            return !1;
          }), e.on(a._telInputCfmD, "contextmenu", function () {
            return !1;
          }), e.on(a._telInputD, "keyup", function () {
            var b = /\D/g,
              c = d.val(this);
            d.val(this, c.replace(b, "")), d.val(a._telInputCfmD) && (d.val(a._telInputCfmD, "\u8bf7\u518d\u6b21\u8f93\u5165"), d.addClass(a._telInputCfmD, "prompt")), d.hasClass(a._telOperatorD, "hidden") || d.addClass(a._telOperatorD, "hidden"), a._clearPrice();
          }), e.on(a._telInputCfmD, "keyup", function () {
            var a = /\D/g,
              b = d.val(this);
            d.val(this, b.replace(a, ""));
          }), e.on(a._telInputD, "blur", function () {
            ("1" !== d.val(this).charAt(0) || d.val(this).length < 11) && (a._rechargeToMsg(q, "warning"), d.attr(a._telInputCfmD, "disabled", "disabled"));
          }), e.on(a._telInputCfmD, "blur", function () {
            d.val(a._telInputD) !== d.val(a._telInputCfmD) ? a._rechargeToMsg(r, "warning") : a._msgToRecharge();
          }), e.on(a._telInputCfmD, "keyup", function () {
            11 === d.val(a._telInputCfmD).length && (d.val(a._telInputD) !== d.val(a._telInputCfmD) ? a._rechargeToMsg(r, "warning") : (a._msgToRecharge(), a._getOperators()));
          }), e.on(a._parPriceD, "change", function () {
            a._priceChange(this);
          }), e.on(a._telSubbtn, "click", function (b) {
            "1" !== d.val(a._telInputD).charAt(0) || d.val(a._telInputD).length < 11 ? (a._rechargeToMsg(q, "warning"), b.halt()) : d.val(a._telInputD) !== d.val(a._telInputCfmD) ? (a._rechargeToMsg(r, "warning"), b.halt()) : 0 == a._parPriceOpts.length ? (a._rechargeToMsg(s, "warning"), b.halt()) : a._isTelLackItem && b.halt();
          });
        },
        _isPhoneCheckOK: function (a) {
          var b = d.val(this._telInputD),
            c = d.val(this._telInputCfmD);
          return "1" !== b.charAt(0) || 11 !== b.length ? (a && this._rechargeToMsg(q, "warning"), !1) : b !== c ? (a && this._rechargeToMsg(r, "warning"), !1) : !0;
        },
        _priceChange: function (b) {
          var c = this;
          c._clearPrice();
          var e = b.selectedIndex;
          c._getPriceData.price_id = c._mobilesInfo[e].id, c._getPriceData.phone = d.val(c._telInputD), c._isPhoneCheckOK() && a.io({
            dataType: "jsonp",
            url: j + k.phoneCard,
            data: c._getPriceData,
            success: function (a) {
              return a.success ? (c._isTelLackItem = !1, d.text(c._telSalePriceD, a.price), d.attr(c._telSubbtn, "href", a.click_url), d.hasClass(this, "prompt") && d.removeClass(this, "prompt"), void c._msgToRecharge()) : (c._isTelLackItem = !0, void c._markLackItem());
            }
          });
        },
        _markLackItem: function () {
          this._telSalePriceLabelD.innerHTML = "\u7f3a\u8d27\uff1a", this._telSalePriceD.innerHTML = "<a href='" + p.tel.replace(/\$\{SearchString\}/, "pid=" + o) + "' target='_blank'>\u70b9\u6b64\u641c\u7d22</a>", d.hasClass(this._telSubbtn, "hidden") || d.addClass(this._telSubbtn, "hidden");
        },
        _clearPrice: function () {
          this._telSalePriceLabelD.innerHTML = "\u552e\u4ef7\uff1a", d.text(this._telSalePriceD, ""), d.hasClass(this._telSubbtn, "hidden") && d.removeClass(this._telSubbtn, "hidden");
        },
        _rechargeToMsg: function (b, c) {
          var e = this;
          d.text(e._telMsgD, b), "warning" != c || b != q && b != r || (d.hasClass(e._telOperatorD, "hidden") || d.addClass(e._telOperatorD, "hidden"), d.hasClass(e._telOperatorD, "operator") && d.removeClass(e._telOperatorD, "operator")), d.hasClass(e._telMsgBoxD, c) || ("dealing" == c && (d.hasClass(e._telMsgBoxD, "warning") && d.removeClass(e._telMsgBoxD, "warning"), d.hasClass(e._telSubbtn, "hidden") || d.addClass(e._telSubbtn, "hidden")), d.addClass(e._telMsgBoxD, c)), d.hasClass(e._telMsgBoxD, "hidden") && d.removeClass(e._telMsgBoxD, "hidden"), a.UA.ie && 8 > a.UA.ie && (d.css(e._telSubbtn, "zoom", ""), d.css(e._telSubbtn, "zoom", "1"));
        },
        _msgToRecharge: function () {
          d.hasClass(this._telMsgBoxD, "hidden") || d.addClass(this._telMsgBoxD, "hidden"), a.UA.ie && 8 > a.UA.ie && (d.css(this._telSubbtn, "zoom", ""), d.css(this._telSubbtn, "zoom", "1"));
        },
        _getOperators: function () {
          var b = this;
          a.io({
            dataType: "jsonp",
            url: j + k.phoneSearch,
            data: {
              phone: d.val(b._telInputD)
            },
            success: function (a) {
              return a.success ? (b.displayOperators(a), void b._priceChange(b._parPriceD)) : void b._rechargeToMsg(q, "warning");
            }
          });
        },
        displayOperators: function (a) {
          var b = this;
          b._getPriceData.cat_id = a.cat_id, b._getPriceData.province_id = a.province_id;
          var c = a.cat_name.substr(2);
          d.text(b._telOperatorD, a.province_name + c), d.hasClass(b._telOperatorD, "hidden") && d.removeClass(b._telOperatorD, "hidden"), d.hasClass(b._telOperatorD, "operator") || d.addClass(b._telOperatorD, "operator"), d.val(b._telProvinceD, a.province), d.val(b._telCatNameD, c);
        },
        _getPrice: function () {
          var b = this;
          a.io({
            dataType: "jsonp",
            url: j + k.phoneList,
            success: function (a) {
              return a.success ? void b.displayPrice(a) : void b._rechargeToMsg(t, "warning");
            }
          });
        },
        displayPrice: function (b) {
          var c = this._parPriceOpts;
          return b.denomination ? (this._mobilesInfo = b.denomination, c.length > 0 && (c.length = 0), d.hasClass(this._parPriceD, "prompt") && d.removeClass(this._parPriceD, "prompt"), d.text(this._telSalePriceD, ""), void (this._mobilesInfo.length > 0 && a.each(this._mobilesInfo, function (a) {
            var b = new Option(a.name, a.id);
            "100\u5143" === a.name && (b.selected = !0), c[c.length] = b;
          }))) : void this._rechargeToMsg(t, "warning");
        }
      }), h._init(u, i, w, v);
    }
  }
  var c,
    a = KISSY,
    d = a.DOM,
    e = a.Event,
    f = document,
    g = document.all;
  return a.augment(b, {
    _init: function (b, c, d, e) {
      a.log("TshopPbsmOtherTaokeRecharge init start");
      var f = this;
      a.ready(function (a) {
        if (b.create(), c.showMobile) {
          new d(f._mod);
        }
        if (c.showCard || c.showGold || c.showOnline) {
          new e(f._mod);
        }
      }), a.log("TshopPbsmOtherTaokeRecharge init end");
    }
  }), b.selector = ".tshop-pbsm-other-taoke-recharge", b;
});
KISSY.add("modules/other/xiamiplayer/index", function (a) {
  function b(b) {
    window.shop_config.xiamiplayer && KISSY.ready(function () {
      a.use("music-wplayer/wp_musicplayer");
    });
  }
  var c = "//g.alicdn.com/de/music-wplayer/0.1.6/";
  return a.config({
    packages: [{
      name: "music-wplayer",
      tag: Math.random(),
      path: c,
      charset: "utf-8",
      ignorePackageNameInUri: !0
    }]
  }), b.type = "xiamiplayer", b;
});
KISSY.add("modules/multi-mods/slide/index", function (a) {
  function b(b) {
    var c = this;
    if (c._mod = b.mod, c._mod) {
      a.log("TshopPbsmShopMainSlide init start"), c._init(), c.prevBtn = d.get(".prev-btn", c._mod), c.nextBtn = d.get(".next-btn", c._mod);
      var e = c.getCurrentStyle(d.get(".slide-box", c._mod), "height"),
        f = (e - c.getCurrentStyle(d.get(".slide-triggers", c._mod), "height") - c.getCurrentStyle(c.prevBtn, "height")) / 2;
      c.prevBtn.style.top = (f > 0 ? parseInt(f, 10) : 0) + "px", c.nextBtn.style.top = (f > 0 ? parseInt(f, 10) : 0) + "px", a.UA.ie && 6 == a.UA.ie && (d.get(".slide-box", c._mod).className = d.get(".slide-box", c._mod).className), a.log("TshopPbsmShopMainSlide init end");
    }
  }
  var a = KISSY,
    c = a.Event,
    d = a.DOM;
  return a.augment(b, {
    _init: function () {
      var a = this;
      a.disBtn();
    },
    disBtn: function () {
      var a = this,
        b = d.get(".slide-box", a._mod),
        e = d.get(".prev-btn", a._mod),
        f = d.get(".next-btn", a._mod);
      c.on(b, "mouseenter", function () {
        d.addClass(e, "play"), d.addClass(f, "play");
      }), c.on(b, "mouseleave", function () {
        d.removeClass(e, "play"), d.removeClass(f, "play");
      }), c.on(e, "mouseenter", function () {
        d.addClass(e, "hover-pre");
      }), c.on(e, "mouseleave", function () {
        d.removeClass(e, "hover-pre");
      }), c.on(f, "mouseenter", function () {
        d.addClass(f, "hover-next");
      }), c.on(f, "mouseleave", function () {
        d.removeClass(f, "hover-next");
      });
    },
    render: function (a) {},
    getCurrentStyle: function (a, b) {
      var c = this,
        d = "";
      return b = c.transToHump(b), d = window.getComputedStyle ? window.getComputedStyle(a, null)[b] : a.currentStyle[b], parseInt(d, 10) ? parseInt(d, 10) : 0;
    },
    transToHump: function (a) {
      return a.replace(/-([a-z])/gi, function (a, b) {
        return b.toUpperCase();
      });
    }
  }), b.selector = ".tshop-pbsm-multi-main-slide", b;
});
KISSY.add("modules/multi-mods/hot-ranking/index", function (a, b) {
  function c(a) {
    var b = this;
    b._el = a.mod, b._init(b._el);
  }
  var d = b.all;
  return a.augment(c, {
    _init: function () {
      this._bindUI(), 0 != d(this._el).all(".tshop-header_on").length && d(this._el).all(".tshop-header_on").fire("click");
    },
    _bindUI: function () {
      var a = this;
      d(a._el).all(".tshop-header_tab").on("click", function (b) {
        b.preventDefault();
        var c = d(b.currentTarget),
          e = c.index();
        c.parent().all("a").removeClass("tshop-header_on"), c.addClass("tshop-header_on"), d(a._el).all(".ranking-rest").hide().item(e).show();
      });
    }
  }), c.selector = ".tshop-pbsm-multi-hot-ranking", c;
}, {
  requires: ["node"]
});
"use strict";
KISSY.add("modules/tmall/guaguaka/index", function (a, b, c) {
  var d;
  if (KISSY.version > "1.3" && b.get(".tshop-pbsm-tmall-guaguaka")) {
    KISSY.config({
      modules: {
        "mui/zebra-guaguaka-detail-pc/index-pc": {
          requires: ["dom", "event", "ajax", "mui/minilogin/index", "mui/zebra-guaguaka-detail-pc/widget", "mui/zebra-guaguaka-detail-pc/index-pc.css"],
          requires_async: []
        },
        "mui/zebra-guaguaka-detail-pc/seed": {
          requires: [],
          requires_async: []
        },
        "mui/zebra-guaguaka-detail-pc/widget": {
          requires: ["dom", "event"],
          requires_async: []
        }
      },
      packages: {
        "mui/zebra-guaguaka-detail-pc": {
          debug: !0,
          ignorePackageNameInUri: !0,
          version: "3.0.16",
          path: "//g.alicdn.com/mui/zebra-guaguaka-detail-pc/3.0.16/",
          group: "tm"
        }
      },
      combine: !0
    }), KISSY.Config.packages["mui/minilogin"] || KISSY.config({
      packages: {
        "mui/minilogin": {
          debug: !0,
          ignorePackageNameInUri: !0,
          version: "3.1.1",
          path: "//g.alicdn.com/mui/minilogin/3.1.1/",
          group: "tm"
        }
      }
    });
    var e = !1;
    d = function (b) {
      function d() {
        c.on(b.trigger, "click", function (c) {
          c.halt(), a.use(["mui/zebra-guaguaka-detail-pc/index-pc"], function (a, c) {
            f = new c({
              dom: b.container
            });
          });
        });
      }
      var f = null;
      if (b = b || {}, b.trigger = b.trigger || b.mod || "#J_guaGuaKaPc", b.container = b.container || document.body, e) d();else {
        var g = window,
          h = a.now(),
          i = h - h % 36e5;
        g.g_config.appId;
        g.UA_Opt = {
          LogVal: "UA_Val",
          MaxMCLog: 10,
          MaxKSLog: 10,
          MaxMPLog: 10,
          MaxFocusLog: 1,
          Token: new Date().getTime() + ":" + Math.random(),
          SendMethod: 8,
          Flag: 12430
        }, g.UA_Val = "", g.getUA = function () {
          var a = g.UA_Val;
          return UA_Opt.Token = new Date().getTime() + ":" + Math.random(), UA_Opt.reload(), a;
        }, function () {
          function b() {
            0 === --c && (e = !0, d());
          }
          var c = 2;
          a.getScript("//g.alicdn.com/mtb/lib-mtop/1.6.4/mtop.js", function () {
            b();
          }), a.getScript("//uaction.alicdn.com/js/ua.js?" + i, function () {
            try {
              UA_Opt.Token = new Date().getTime() + ":" + Math.random(), UA_Opt.reload();
            } catch (a) {}
            b();
          });
        }();
      }
    };
  } else d = function (b) {
    a.log("guaguaka error");
  };
  return d.selector = ".tshop-pbsm-tmall-guaguaka", d;
}, {
  requires: ["dom", "event"]
});