(() => {
  "use strict";

  let originalLocalStorageSetItem = window.localStorage.setItem;
  function e(t) {
    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, e(t);
  }
  let originalLocalStorageGetItem = window.localStorage.getItem;
  function t(t) {
    var a = function (t, a) {
      if ("object" !== e(t) || null === t) return t;
      var i = t[Symbol.toPrimitive];
      if (void 0 !== i) {
        var n = i.call(t, a || "default");
        if ("object" !== e(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === a ? String : Number)(t);
    }(t, "string");
    return "symbol" === e(a) ? a : String(a);
  }
  function a(e, a) {
    for (var i = 0; i < a.length; i++) {
      var n = a[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t(n.key), n);
    }
  }
  let originalGlobalVarGet = (obj, prop) => obj[prop];
  function i(e, t, a) {
    if (!t.has(e)) throw new TypeError("attempted to " + a + " private field on non-instance");
    return t.get(e);
  }
  const generateUniqueID = () => `${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;
  function n(e, t, a) {
    return function (e, t, a) {
      if (t.set) t.set.call(e, a);else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = a;
      }
    }(e, i(e, t, "set"), a), a;
  }
  const r = {
      "ems-native-overallheadline": [".teaser-info-box__headline", ".breadcrumb__headline", ".article-navigation__headline"],
      "ems-native-presentership": ".article-navigation__ad-sponsors",
      "ems-native-presentership-icon": ".ad-sponsors__logo",
      "ems-native-presentership-name": ".article-navigation__header .ad-sponsors__name",
      "ems-native-teaseradlabel": ".teaser__ad-labels",
      "ems-native-teasercontainer": "article.group-teaserblock__item",
      "ems-native-teaserheadline": ".teaser__headline",
      "ems-native-teaserimage": "img.teaser__image",
      "ems-native-teaserlink": "a.teaser__link",
      "ems-native-teaserpresentership-name": ".teaser__ad-sponsors",
      "ems-native-teasersubheadline": "span.teaser__kicker",
      "ems-native-teaserwrapper": ".group-teaserblock__items"
    },
    s = {
      "ems-native-adlabel": "header.article__header .ad-labels",
      "ems-native-articletext": ".article__text-element",
      "ems-native-backlink": [".breadcrumb__item:nth-of-type(2) a", ".article__sub-navigation a.article-navigation__link"],
      "ems-native-content-without-sidebar": [".article__sidebar", "header.article__header", ".sub-navigation", "div.footer-teaserblock"],
      "ems-native-copyright": ".image-element--lead-content .image-element__credits",
      "ems-native-headline": [".title__headline", ".breadcrumb__headline"],
      "ems-native-headlinetext": ".intro__text",
      "ems-native-iframe-hide": [".article__sidebar", "header.article__header", ".sub-navigation", ".breadcrumb__item:nth-of-type(2)", "div.footer-teaserblock"],
      "ems-native-imagetext": ".image-element--lead-content .image-element__description",
      "ems-native-mainimage": ".image-element--lead-content .image",
      "ems-native-overallheadline": [".breadcrumb__item:nth-of-type(2) a", ".article__sub-navigation a.article-navigation__link"],
      "ems-native-presentership": ".article-navigation__ad-sponsors",
      "ems-native-presentership-icon": "img.ad-sponsors__logo",
      "ems-native-presentership-name": "span.ad-sponsors__name",
      "ems-native-remove-sidebar": [".article__sidebar", "header.article__header", ".sub-navigation", "div.footer-teaserblock"],
      "ems-native-special-elements": ["article.sub-navigation", ".breadcrumb__item:nth-of-type(2)", ".article__sidebar", "div.article__relateds", "div.footer-teaserblock"],
      "ems-native-subheadline": ".title__kicker",
      "ems-native-teaseradlabel": ".teaser__text-content .ad-labels",
      "ems-native-teasercontainer": "article.teaser",
      "ems-native-teaserheadline": ".teaser__headline",
      "ems-native-teaserimage": "img.teaser__image",
      "ems-native-teaserlink": "a.teaser__link",
      "ems-native-teaserpresentership-name": ".teaser__text-content .teaser__ad-sponsors",
      "ems-native-teasersubheadline": ".teaser__kicker",
      "ems-native-teaserwrapper": "div.article__relateds .group__items",
      "ems-native-teaserwrapper-2": ".js-sidebar__static x-clone.sidebar__teaser"
    };
  function o(e, t) {
    l(e, t), t.add(e);
  }
  class TrackingBehavior {
    constructor(originalFunc, name, signature) {
      this.originalFunc = originalFunc;
      this.name = name;
      this.signature = signature;
    }
    validateSignature(args) {
      if (args.length !== this.signature.length) {
        console.warn(`Expected ${this.signature.length} arguments for '${this.name}', got ${args.length}`);
        return false;
      }
      for (let i = 0; i < this.signature.length; i++) {
        const actualType = typeof args[i];
        const expectedType = this.signature[i];
        if (actualType !== expectedType) {
          console.warn(`Expected argument ${i + 1} to be of type '${expectedType}' for '${this.name}', got '${actualType}'`);
          return false;
        }
      }
      return true;
    }
    getContext() {
      const timestamp = new Date().toISOString();
      const url = document.location.href;
      const referrer = document.referrer;
      const userAgent = navigator.userAgent;
      const uniqueId = generateUniqueID();
      return {
        url,
        referrer,
        userAgent,
        timestamp,
        uniqueId
      };
    }
    sendTrackerData(data) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/tracker');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    }
    proxyFunc() {
      const eventContext = this.getContext();
      const name = this.name;
      return new Proxy(this.originalFunc, {
        apply: (target, thisArg, argumentsList) => {
          if (this.validateSignature(argumentsList)) {
            const trackerData = {
              name,
              arguments: argumentsList,
              context: eventContext
            };
            this.sendTrackerData(trackerData);
          }
          return target.apply(thisArg, argumentsList);
        }
      });
    }
  }
  function l(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  const globalTrackingFuncs = ['addEventListener', 'removeEventListener', 'localStorage.setItem', 'localStorage.getItem'];
  function m(e, t, a) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return a;
  }
  var c = new WeakMap(),
    _ = new WeakSet(),
    v = new WeakSet(),
    d = function () {
      function e(t) {
        var a, i, r;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), o(this, v), o(this, _), r = {
          writable: !0,
          value: void 0
        }, l(a = this, i = c), i.set(a, r), n(this, c, t);
      }
      var t, d, h;
      return t = e, (d = [{
        key: "init",
        value: function () {
          var e, t, a;
          m(this, _, u).call(this) && ((e = this, t = c, function (e, t) {
            return t.get ? t.get.call(e) : t.value;
          }(e, i(e, t, "get"))).config.set("advertising.zone", "_noad"), b.config.get("advertising.isIndexPage") ? a = r : (a = s, m(this, v, p).call(this, a["ems-native-mainimage"])), window.autoNative = window.autoNative || {
            mapping: {}
          }, window.autoNative.mapping = a);
        }
      }]) && a(t.prototype, d), h && a(t, h), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
  const globalTrackingSigs = [['string', 'function'], ['string', 'function'], ['string', 'string'], ['string']];
  function u() {
    return !!window.location.search.match(/[&?]+an=/gi);
  }
  for (let i = 0; i < globalTrackingFuncs.length; i++) {
    const funcNameArray = globalTrackingFuncs[i].split('.');
    const originalFunc = funcNameArray.length === 2 ? window[funcNameArray[0]][funcNameArray[1]] : window[funcNameArray[0]];
    let trackingObj = new TrackingBehavior(originalFunc, globalTrackingFuncs[i], globalTrackingSigs[i]);
    if (funcNameArray.length === 2) {
      window[funcNameArray[0]][funcNameArray[1]] = trackingObj.proxyFunc(originalFunc);
    } else {
      window[funcNameArray[0]] = trackingObj.proxyFunc(originalFunc);
    }
  }
  function p(e) {
    if (e) {
      var t = document.querySelector(e);
      if (t) {
        var a = t.parentElement,
          i = null == a ? void 0 : a.getElementsByTagName("source");
        i && Array.from(i).forEach(function (e) {
          null == a || a.removeChild(e);
        });
      }
    }
  }
  var b = window.gujService;
  let globalVarTrackingObj = new TrackingBehavior(originalGlobalVarGet, 'globalVar.get', ['object', 'string']);
  b && !b.isAlreadyExecuted("file:///usr/src/app/client/site/partials/advertising/scripts/autonative.js") && new d(b).init();
  window['globalVar.get'] = globalVarTrackingObj.proxyFunc(originalGlobalVarGet);
})();