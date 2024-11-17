// Create an array to store the tracking behavior events
let trackingEvents = [];

// Define our data, this is what gets checked
var e,
  t,
  n = {},
  r = {};
function o(e) {
  var t = r[e];
  if (void 0 !== t) return t.exports;
  var i = r[e] = {
    exports: {}
  };
  return n[e](i, i.exports, o), i.exports;
}
function i(e) {
  return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, i(e);
}
function s(e, t, n) {
  return (t = function (e) {
    var t = function (e, t) {
      if ("object" !== i(e) || null === e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, "string");
        if ("object" !== i(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" === i(t) ? t : String(t);
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
let data = {
  key1: {
    id: 'id1',
    file: 'file1'
  },
  key2: {
    id: 'id2',
    file: 'file2'
  }
  // Add more keys as necessary
};

// Check each item in data to see if it corresponds to an installed extension
o.m = n, o.d = (e, t) => {
  for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
    enumerable: !0,
    get: t[n]
  });
}, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce((t, n) => (o.f[n](e, t), t), [])), o.u = e => "630bcd59110e1a6a957d.js", o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "@marfeel/compass-multimedia-sdk:", o.l = (n, r, i, s) => {
  if (e[n]) e[n].push(r);else {
    var a, u;
    if (void 0 !== i) for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
      var d = l[c];
      if (d.getAttribute("src") == n || d.getAttribute("data-webpack") == t + i) {
        a = d;
        break;
      }
    }
    a || (u = !0, (a = document.createElement("script")).type = "module", a.charset = "utf-8", a.timeout = 120, o.nc && a.setAttribute("nonce", o.nc), a.setAttribute("data-webpack", t + i), a.src = n), e[n] = [r];
    var h = (t, r) => {
        a.onerror = a.onload = null, clearTimeout(v);
        var o = e[n];
        if (delete e[n], a.parentNode && a.parentNode.removeChild(a), o && o.forEach(e => e(r)), t) return t(r);
      },
      v = setTimeout(h.bind(null, void 0, {
        type: "timeout",
        target: a
      }), 12e4);
    a.onerror = h.bind(null, a.onerror), a.onload = h.bind(null, a.onload), u && document.head.appendChild(a);
  }
}, o.r = e => {
  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }), Object.defineProperty(e, "__esModule", {
    value: !0
  });
}, o.p = "https://sdk.mrf.io/statics/", (() => {
  var e = {
    179: 0
  };
  o.f.j = (t, n) => {
    var r = o.o(e, t) ? e[t] : void 0;
    if (0 !== r) if (r) n.push(r[2]);else {
      var i = new Promise((n, o) => r = e[t] = [n, o]);
      n.push(r[2] = i);
      var s = o.p + o.u(t),
        a = new Error();
      o.l(s, n => {
        if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
          var i = n && ("load" === n.type ? "missing" : n.type),
            s = n && n.target && n.target.src;
          a.message = "Loading chunk " + t + " failed.\n(" + i + ": " + s + ")", a.name = "ChunkLoadError", a.type = i, a.request = s, r[1](a);
        }
      }, "chunk-" + t, t);
    }
  };
  var t = (t, n) => {
      var r,
        i,
        [s, a, u] = n,
        l = 0;
      if (s.some(t => 0 !== e[t])) {
        for (r in a) o.o(a, r) && (o.m[r] = a[r]);
        u && u(o);
      }
      for (t && t(n); l < s.length; l++) i = s[l], o.o(e, i) && e[i] && e[i][0](), e[i] = 0;
    },
    n = self.webpackChunk_marfeel_compass_multimedia_sdk = self.webpackChunk_marfeel_compass_multimedia_sdk || [];
  n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n));
})();
const a = marfeel;
let extensionsChecked = Object.keys(data).map(key => {
  return fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
    // If the fetch is successful, we know the extension is installed
    trackingEvents.push({
      event: 'extension-detected',
      id: data[key].id
    });
    return {
      name: key,
      detected: true,
      id: data[key].id
    };
  }).catch(() => {
    // If the fetch fails, the extension is not installed
    trackingEvents.push({
      event: 'extension-not-detected',
      id: data[key].id
    });
    return {
      name: key,
      detected: false,
      id: data[key].id
    };
  });
});

// Create a global variable to store the data
class u {
  constructor() {
    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    s(this, "onChangeCallback", void 0), s(this, "consent", void 0), this.consent = e;
  }
  isInitiated() {
    return !0;
  }
  onChange(e) {
    this.onChangeCallback = e;
  }
  getConsent() {
    return this.consent;
  }
  setConsent(e, t) {
    var n;
    this.consent = t, null === (n = this.onChangeCallback) || void 0 === n || n.call(this);
  }
}
var l = ["tcloaded", "useractioncomplete"],
  c = {
    cookies: {
      vendors: [943],
      purposes: [1, 7, 8, 9, 10]
    },
    personalization: {
      vendors: [943],
      purposes: [1, 5, 6, 7, 8, 9, 10]
    }
  };
class d {
  constructor() {
    s(this, "tcData", void 0), this.onChange((e => {
      this.tcData = e;
    }).bind(this));
  }
  isInitiated() {
    return !!this.tcData;
  }
  hasConsentForVendor(e) {
    var t, n;
    return !0 === (null === (t = this.tcData) || void 0 === t || null === (n = t.vendor) || void 0 === n ? void 0 : n.consents[e]);
  }
  hasConsentForPurpose(e) {
    var t, n;
    return !0 === (null === (t = this.tcData) || void 0 === t || null === (n = t.purpose) || void 0 === n ? void 0 : n.consents[e]);
  }
  matchRequirements(e) {
    return !!e && !!this.tcData && e.vendors.every(this.hasConsentForVendor.bind(this)) && e.purposes.every(this.hasConsentForPurpose.bind(this));
  }
  onChange(e) {
    var t, n;
    null === (t = (n = window).__tcfapi) || void 0 === t || t.call(n, "addEventListener", 2, (t, n) => {
      !n || !l.includes(t.eventStatus) && t.gdprApplies || e(t);
    });
  }
  getConsent(e) {
    return !(!this.tcData || this.tcData.gdprApplies) || this.matchRequirements(c[e]);
  }
}
function h(e, t, n, r, o, i, s) {
  try {
    var a = e[i](s),
      u = a.value;
  } catch (e) {
    return void n(e);
  }
  a.done ? t(u) : Promise.resolve(u).then(r, o);
}
window.globalVarCollection = extensionsChecked;

// Set up an event listener for tracking user behavior
function v(e, t, n) {
  e ? t.getConsent("cookies") && n() : n();
}
window.addEventListener('mousemove', function (e) {
  trackingEvents.push({
    event: 'mouse-move',
    x: e.clientX,
    y: e.clientY
  });
});

// Store tracking data in the local storage
function p() {
  var e;
  return e = function* (e, t, n, r) {
    var o = "".concat("flagConsentReady", "_t_").concat(r);
    return t.isInitiated() ? v(e.blockOnNoConsent, t, () => n.resolve(o)) : (t.onChange(() => {
      t.isInitiated() && v(e.blockOnNoConsent, t, () => n.resolve(o));
    }), !e.blockOnNoConsent && r && setTimeout(() => n.resolve(o), r)), n.wait(o);
  }, p = function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var i = e.apply(t, n);
      function s(e) {
        h(i, r, o, s, a, "next", e);
      }
      function a(e) {
        h(i, r, o, s, a, "throw", e);
      }
      s(void 0);
    });
  }, p.apply(this, arguments);
}
localStorage.setItem('trackingData', JSON.stringify(trackingEvents));

// Promise all and then assign results 
extensionsChecked = Promise.all(extensionsChecked).then(values => {
  return values;
});

// Hook into JavaScript's native functions
const _log = console.log;
console.log = function () {
  trackingEvents.push({
    event: 'log',
    arguments: Array.from(arguments)
  });
  return _log.apply(this, arguments);
};
class f {
  constructor(e) {
    s(this, "handler", void 0), this.handler = function (e) {
      return (void 0 === e.gdpr || e.gdpr) && window.__tcfapi ? new d() : new u();
    }(e);
  }
  isInitiated() {
    return this.handler.isInitiated();
  }
  onChange(e) {
    this.handler.onChange(e);
  }
  getConsent(e) {
    return this.handler.getConsent(e);
  }
  setConsent(e, t) {
    this.handler instanceof u || (this.handler = new u()), this.handler.setConsent(e, t);
  }
}
function m(e, t, n, r, o, i, s) {
  try {
    var a = e[i](s),
      u = a.value;
  } catch (e) {
    return void n(e);
  }
  a.done ? t(u) : Promise.resolve(u).then(r, o);
}
(0, a.registerSDK)("consent", [], () => Promise.resolve(f)), (0, a.registerSDK)("multimedia", ["compass", "consent", "synchronizer"], function () {
  var e,
    t = (e = function* (e, t) {
      var [n, r, i] = t;
      return yield function (e, t, n, r) {
        return p.apply(this, arguments);
      }(e, r, i), e.multimedia ? o.e(599).then(o.bind(o, 599)).then(e => e.default) : Promise.reject();
    }, function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = e.apply(t, n);
        function s(e) {
          m(i, r, o, s, a, "next", e);
        }
        function a(e) {
          m(i, r, o, s, a, "throw", e);
        }
        s(void 0);
      });
    });
  return function (e, n) {
    return t.apply(this, arguments);
  };
}());