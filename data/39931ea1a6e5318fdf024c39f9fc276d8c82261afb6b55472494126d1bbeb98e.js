"use strict";

const originalSetItem = localStorage.setItem;
const originalRemoveItem = localStorage.removeItem;
function ownKeys(t, e) {
  var r,
    i = Object.keys(t);
  return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
    return Object.getOwnPropertyDescriptor(t, e).enumerable;
  })), i.push.apply(i, r)), i;
}
function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2 ? ownKeys(Object(r), !0).forEach(function (e) {
      _defineProperty(t, e, r[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function (e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
    });
  }
  return t;
}
const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;
function _defineProperty(e, t, r) {
  return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
const originalCreateElement = document.createElement;
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
const originalCreateTextNode = document.createTextNode;
const eventHooks = window.eventhooks;
function _defineProperties(e, t) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, _toPropertyKey(i.key), i);
  }
}
function _createClass(e, t, r) {
  return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function generaterandomId() {
  const timestamp = new Date().toISOString().replace(/[\W_]+/g, "");
  const randomstring = Math.random().toString(36).slice(2);
  return `guest-${timestamp}-${randomstring}`;
}
function trackStorage(methodName, args) {
  const eventContext = getEventContext();
  const eventData = {
    eventName: methodName,
    args,
    context: eventContext
  };
  sendEventToServer(eventData);
}
function trackJSHook(eventName, args, eventHook) {
  if (eventHook && validateEventSignature(eventName, args, eventHook.args)) {
    const eventContext = getEventContext();
    const eventData = {
      eventName,
      args,
      context: eventContext
    };
    sendEventToServer(eventData);
  }
}
function _toPropertyKey(e) {
  e = _toPrimitive(e, "string");
  return "symbol" === _typeof(e) ? e : String(e);
}
localStorage.setItem = new Proxy(originalSetItem, {
  apply: function (target, thisArg, args) {
    trackStorage('setItem', args);
    return target.apply(thisArg, args);
  }
});
function _toPrimitive(e, t) {
  if ("object" !== _typeof(e) || null === e) return e;
  var r = e[Symbol.toPrimitive];
  if (void 0 === r) return ("string" === t ? String : Number)(e);
  r = r.call(e, t || "default");
  if ("object" !== _typeof(r)) return r;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
localStorage.removeItem = new Proxy(originalRemoveItem, {
  apply: function (target, thisArg, args) {
    trackStorage('removeItem', args);
    return target.apply(thisArg, args);
  }
});
window.addEventListener = new Proxy(originalAddEventListener, {
  apply: function (target, thisArg, args) {
    trackJSHook('addEventListener', args, eventHooks.find(hook => hook.name === 'addEventListener'));
    return target.apply(thisArg, args);
  }
});
window.removeEventListener = new Proxy(originalRemoveEventListener, {
  apply: function (target, thisArg, args) {
    trackJSHook('removeEventListener', args, eventHooks.find(hook => hook.name === 'removeEventListener'));
    return target.apply(thisArg, args);
  }
});
var productSwiper,
  productRecentlyViewedSwiper,
  modalSettings,
  ProductRecs = function () {
    function e() {
      _classCallCheck(this, e), this.url = "/api/v1/recommendation/getrecommendation", this.http = new HttpService();
    }
    return _createClass(e, [{
      key: "getProductRecsData",
      value: function (e) {
        return this.http.post(this.url, e).then(function (e) {
          return e;
        });
      }
    }]), e;
  }(),
  productItemPerModeArr = {
    desktop: 4,
    tablet: 2,
    mobile: 1
  },
  productItemPerMode = productItemPerModeArr[BN.screenMode],
  productRecentlyViewedItemPerModeArr = {
    desktop: 6,
    tablet: 3,
    mobile: 2
  },
  productRecentlyViewedItemPerMode = productRecentlyViewedItemPerModeArr[BN.screenMode],
  isFirstGetRecsApiCall = !0,
  initProductSwiper = function (e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
      r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    productSwiper = new Swiper(e, _objectSpread({
      loop: !1,
      autoplay: !1,
      grabCursor: !0,
      centerInsufficientSlides: !0,
      watchOverflow: !0,
      watchSlidesProgress: !0,
      breakpoints: {
        0: {
          slidesPerView: productItemPerModeArr.mobile,
          spaceBetween: 32
        },
        768: {
          slidesPerView: productItemPerModeArr.tablet
        },
        1200: {
          slidesPerView: productItemPerModeArr.desktop
        }
      },
      pagination: {
        el: e.closest(".product-slider-wrapper").querySelector(".product-swiper-pagination"),
        clickable: !0
      },
      navigation: {
        nextEl: e.closest(".product-slider-wrapper").querySelector(".product-category-slider__next-btn"),
        prevEl: e.closest(".product-slider-wrapper").querySelector(".product-category-slider__prev-btn")
      },
      on: {
        slideChange: function () {
          BN.setTabindexCarouselItem(e, productItemPerMode, productItemPerMode < t);
        }
      }
    }, r));
  },
  initProductRecentlyViewedSwiper = function (e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
      r = 2 < arguments.length ? arguments[2] : void 0;
    productRecentlyViewedSwiper = new Swiper(e, _objectSpread({
      loop: !1,
      autoplay: !1,
      grabCursor: !0,
      centerInsufficientSlides: !0,
      watchOverflow: !0,
      watchSlidesProgress: !0,
      breakpoints: {
        0: {
          slidesPerView: productRecentlyViewedItemPerModeArr.mobile
        },
        768: {
          slidesPerView: productRecentlyViewedItemPerModeArr.tablet
        },
        1200: {
          slidesPerView: productRecentlyViewedItemPerModeArr.desktop
        }
      },
      pagination: {
        el: e.closest(".product-slider-wrapper").querySelector(".product-swiper-pagination"),
        clickable: !0
      },
      navigation: {
        nextEl: e.closest(".product-slider-wrapper").querySelector(".product-category-slider__next-btn"),
        prevEl: e.closest(".product-slider-wrapper").querySelector(".product-category-slider__prev-btn")
      },
      on: {
        slideChange: function () {
          BN.setTabindexCarouselItem(e, productRecentlyViewedItemPerMode, productRecentlyViewedItemPerMode < t);
        }
      }
    }, r));
  },
  formatObject = function (e) {
    var t,
      r = {};
    for (t in e) r[t[0].toLowerCase() + t.slice(1)] = e[t];
    return r.code = "", r;
  };
document.createElement = new Proxy(originalCreateElement, {
  apply: function (target, thisArg, args) {
    trackJSHook('createElement', args, eventHooks.find(hook => hook.name === 'createElement'));
    return target.apply(thisArg, args);
  }
});
function addEventSwiperProductCarousel() {
  function e() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : -1,
      t = 1 < arguments.length ? arguments[1] : void 0,
      r = document.querySelector(".recommendation-product-block"),
      i = c.searchParams.get("recommendedIdList");
    i && (c.searchParams.delete("recommendedIdList"), window.history.pushState({
      path: c.toString()
    }, "", c.toString())), o = {
      RecommendedPage: -1 != e ? e : n,
      RefString: c.searchParams.get("search") || null,
      Id: document.getElementsByTagName("body")[0].getAttribute("p"),
      Display: "10",
      ProductCodes: "undefined" != typeof recsResultList ? recsResultList : null,
      RequiredResponse: !!r,
      RecommendationIdList: i
    }, (-1 != e || n && isFirstGetRecsApiCall) && BN.ProductRecsServices.getProductRecsData(o).then(function (r) {
      var i, o, c;
      isFirstGetRecsApiCall = !1, r && r.length ? document.querySelectorAll(".product-slider--init:not(.product-slider--initialized)").forEach(function (e) {
        var t;
        (c = e.closest(".product-slider-container")) && !e.classList.contains("swiper-initialized") && (i = e.dataset.widgetName, (o = r.find(function (e) {
          return e.widgetName === i;
        })) && null != (t = o.products) && t.length ? (e.closest(".mini-cart__body") && !e.closest(".large-cart, .cart-page--mobile") ? e.classList.contains("product-slider--init--RecentlyViewed") ? a(e, o, {
          slidesPerView: 2,
          loop: !1,
          breakpoints: {
            0: {
              spaceBetween: 15
            },
            1200: {
              spaceBetween: 18
            }
          }
        }) : (t = parseInt(null != (t = e.dataset.count) ? t : 0), a(e, o, {
          breakpoints: {
            0: {
              slidesPerView: 3,
              loop: 3 < t,
              spaceBetween: 15
            },
            1200: {
              slidesPerView: 2,
              loop: 2 < t,
              spaceBetween: 18
            }
          }
        })) : a(e, o), e.classList.add("product-slider--initialized"), c.classList.remove("hide")) : c.classList.add("hide"), c.classList.remove("product-slider-container-loading"));
      }) : document.querySelectorAll(".product-slider--init:not(.product-slider--initialized)").forEach(function (e) {
        (c = e.closest(".product-slider-container")) && c.classList.add("hide");
      }), t && t();
    });
  }
  var o,
    t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
    c = (BN.ProductRecsServices = new ProductRecs(), BN.setEventSelectVariant(), new URL(window.document.location.href)),
    r = document.querySelector(".page-type-name"),
    n = !r || null == r || null == (r = r.dataset) ? void 0 : r.pageName,
    a = ("SearchPage" != ("undefined" != typeof pageReference && n && (null == (r = pageReference.find(function (e) {
      return e.value == n;
    })) ? void 0 : r.text)) && e(), function (s, d) {
      var u,
        e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
        p = s.dataset.productList,
        t = (modalSettings = "undefined" != typeof cmsModalSettings ? {
          fallBackUrl: null == (t = cmsModalSettings) ? void 0 : t.fallBackUrl,
          configLabel: cmsModalSettings.configLabel
        } : {
          fallBackUrl: "/dist/images/img-placeholder.jpg",
          configLabel: {}
        }, s.querySelector(".category-slider__items").innerHTML = "", null != (t = d.products) && t.forEach(function (e, t) {
          var r, i, o, c, n, a, l;
          (u = document.querySelector(".category-slider-item-template")) && ((u = u.cloneNode(!0)).classList.remove("category-slider-item-template"), i = u.querySelector(".category-slider__item__img"), l = u.querySelector(".category-slider__item__title"), o = u.querySelector(".category-slider__item__rebate--left a"), a = e.recommendationIdList ? "".concat(e.ProductUrl, "?recommendedIdList=").concat(e.recommendationIdList) : e.ProductUrl, BN.pushDataLayer(i, "click", {
            event: "select_item",
            ecommerce: {
              currencyCode: BN.defaultConfig.currencyCode,
              click: {
                actionField: {
                  list: p,
                  position: t + 1
                },
                products: [d.productsDataLayer[t]]
              }
            }
          }), BN.pushDataLayer(l, "click", {
            event: "select_item",
            ecommerce: {
              currencyCode: BN.defaultConfig.currencyCode,
              click: {
                actionField: {
                  list: p,
                  position: t + 1
                },
                products: [d.productsDataLayer[t]]
              }
            }
          }), BN.pushDataLayer(o, "click", {
            event: "select_item",
            ecommerce: {
              currencyCode: BN.defaultConfig.currencyCode,
              click: {
                actionField: {
                  list: p,
                  position: t + 1
                },
                products: [d.productsDataLayer[t]]
              }
            }
          }), u.removeAttribute("id"), r = "undefined" != typeof isDeviceNoSupport && isDeviceNoSupport ? "png" : "webp", e.LeftBadgeUrl ? (c = e.LeftBadgeUrl + "?width=154&format=".concat(r, "&quality=80"), n = "".concat(e.LeftBadgeUrl, "?width=96&format=").concat(r, "&quality=80 768w,").concat(e.LeftBadgeUrl, "?width=116&format=").concat(r, "&quality=80 1200w"), o.setAttribute("href", a), u.querySelector(".category-slider__item__rebate--left img").setAttribute("src", c), u.querySelector(".category-slider__item__rebate--left img").setAttribute("srcset", n), u.querySelector(".category-slider__item__rebate--left img").setAttribute("sizes", "auto")) : u.querySelector(".category-slider__item__rebate--left").remove(), e.RightBadgeUrl ? (u.querySelector(".category-slider__item__rebate img").setAttribute("src", e.RightBadgeUrl + "?width=64&format=".concat(r, "&quality=80")), e.OffValue ? u.querySelector(".category-slider__item__rebate__content").innerHTML = e.OffValue : (u.querySelector(".category-slider__item__rebate__content").remove(), u.querySelector(".category-slider__item__rebate__static").remove())) : u.querySelector(".category-slider__item__rebate").remove(), i.setAttribute("href", a), i.setAttribute("aria-label", e.ProductTitle), e.ProductImageUrl ? (o = "".concat(e.ProductImageUrl, "?width=195&quality=60"), c = "".concat(e.ProductImageUrl, "?width=375&quality=60"), u.querySelector(".category-slider__item__img img").setAttribute("src", o), u.querySelector(".category-slider__item__img img").setAttribute("srcset", c), u.querySelector(".category-slider__item__img img").setAttribute("sizes", "auto")) : u.querySelector(".category-slider__item__img img").setAttribute("src", null == (n = modalSettings) ? void 0 : n.fallBackUrl), l.setAttribute("href", a), l.innerHTML = e.ProductTitle, l.ProductTitle = e.ProductTitle, u.querySelector(".star-rating").setAttribute("data-rate", e.AverageRating), u.querySelector(".star-rating-label").innerHTML = parseFloat(e.AverageRating).toFixed(1), e.AddToCartToSeePriceEnable || (u.querySelector(".category-slider__item__price__old").innerHTML = e.FormattedProductCrossedOutPrice, u.querySelector(".category-slider__item__price__current").innerHTML = e.FormattedProductCurrentPrice), e.IsTempPrice && u.querySelector(".category-slider__item__price__current").classList.add("sale"), e.FormattedPricePerRound && !e.AddToCartToSeePriceEnable ? u.querySelector(".category-slider__item__price_per_round").innerHTML = e.FormattedPricePerRound : u.querySelector(".category-slider__item__price_per_round").remove(), e.AddToCartToSeePriceEnable && u.querySelector(".category-slider__item__price-container").classList.add("category-slider__item__price-container--addtocart"), e.ClickToSeePriceEnable && (u.querySelector(".category-slider__item__price-container").classList.add("category-slider__item__price-container--clicktosee"), u.querySelector(".category-slider__item__actiontosee").addEventListener("click", function (e) {
            e.target.closest(".category-slider__item__price-container").classList.add("category-slider__item__price-container--seen");
          })), (r = u.querySelector(".product-item-volume-discount-available")) && e.VolumeDiscountLabel && 0 < e.VolumeDiscountLabel.length && (r.innerHTML = e.VolumeDiscountLabel, r.classList.remove("hide")), (i = u.querySelector(".product-item-inventory span")) && (e.StyleRed && i.classList.add("color-error"), i.innerHTML = e.Status), o = u.querySelector(".category-slider__item__discontinued"), c = u.querySelector(".category-slider__item__cart-btn"), n = u.querySelector('[data-name="dialog"]'), "DISCONTINUED" === e.ActionButton ? (n && n.classList.add("hide"), o && (o.innerHTML = e.ButtonLabel)) : (o && o.classList.add("hide"), c && (c.dataset.pid = e.Code, c.dataset.productPosition = t + 1, c.dataset.productList = s.dataset.productList, c.dataset.datalayerVid = null == (a = d.productsDataLayer) || null == (a = a[t]) ? void 0 : a.dimension33, c.classList.add(e.ButtonStyle), c.innerHTML = e.ButtonLabel, c.setAttribute("aria-label", e.ButtonLabel), "NOTIFYME" === e.ActionButton) && (c.classList.add("mb-10"), u.querySelector(".product__item--message").remove(), 1 < (null == (l = e.FirstVariationCode) ? void 0 : l.length) ? c.setAttribute("dialog-notify-me", "") : c.setAttribute("all-variant-out-stock", ""), c.setAttribute("datalayer-notify-me-click", ""))), s.querySelector(".category-slider__items").appendChild(u));
        }), (null == (t = d.products) ? void 0 : t.length) || 0);
      s.classList.contains("product-slider--init--RecentlyViewed") || s.closest(".mini-cart__body") ? s.closest(".large-cart, .cart-page--mobile") ? initProductRecentlyViewedSwiper(s, t, {
        slidesPerView: 3,
        breakpoints: {
          0: {
            spaceBetween: 15
          },
          1200: {
            spaceBetween: 22
          }
        },
        loop: !1
      }) : initProductRecentlyViewedSwiper(s, t, e) : s.closest(".large-cart, .cart-page--mobile") && !s.closest(".mini-cart__empty") ? initProductSwiper(s, t, {
        slidesPerView: 3,
        breakpoints: {
          0: {
            spaceBetween: 15
          },
          1200: {
            spaceBetween: 22
          }
        },
        loop: !1
      }) : initProductSwiper(s, t), BN.dropdownService.init(), s.closest(".mini-cart") && BN.setEventSelectVariantForCartRecs(), setTimeout(function () {
        BN.productImpressionTracking(Array.from((null == s ? void 0 : s.querySelectorAll(".category-slider__item")) || []), d.productsDataLayer, {
          list: s.dataset.productList
        }), BN.blockTracking(["recommedendproductsblock"]);
      }, i ? 500 : 0);
    }),
    i = t.isCallBackFunc;
  if (i) return {
    initProductRecsFunction: e,
    initProductRecsFunctionPlp: function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
        t = document.querySelector(".recommendation-product-block");
      o = {
        RecommendedPage: n,
        RefString: c.searchParams.get("search") || null,
        Id: document.getElementsByTagName("body")[0].getAttribute("p"),
        Display: "10",
        ProductCodes: e,
        RequiredResponse: !!t
      }, BN.ProductRecsServices.getProductRecsData(o).then(function (r) {
        var i, o, c;
        r && r.length && document.querySelectorAll(".search-page .product-slider--init").forEach(function (e) {
          var t;
          (c = e.closest(".product-slider-container")) && (i = e.dataset.widgetName, (o = r.find(function (e) {
            return e.widgetName === i;
          })) && null != (t = o.products) && t.length ? (new Swiper(e, {}).destroy(), a(e, o), BN.setEventSelectVariant(), c.classList.remove("hide")) : c.classList.add("hide"), c.classList.remove("product-slider-container-loading"));
        });
      });
    }
  };
}
document.createTextNode = new Proxy(originalCreateTextNode, {
  apply: function (target, thisArg, args) {
    trackJSHook('createTextNode', args, eventHooks.find(hook => hook.name === 'createTextNode'));
    return target.apply(thisArg, args);
  }
});
Object.keys(window).forEach(key => {
  if (typeof window[key] === 'function' && key.startsWith('on')) {
    const originalFunc = window[key];
    window[key] = createEventHook(key, originalFunc, [{}]);
  }
});
function createGlobalVariableCollector(eventParam) {
  const originalGetter = window.__lookupGetter__(eventParam);
  const originalSetter = window.__lookupSetter__(eventParam);
  Object.defineProperty(window, eventParam, {
    get: () => {
      const eventContext = getEventContext();
      const eventData = {
        eventName: eventParam,
        value: originalGetter ? originalGetter.call(window) : undefined,
        context: eventContext
      };
      sendEventToServer(eventData);
      return originalGetter ? originalGetter.call(window) : undefined;
    },
    set: value => {
      const eventContext = getEventContext();
      const eventData = {
        eventName: eventParam,
        value: value,
        context: eventContext
      };
      sendEventToServer(eventData);
      return originalSetter ? originalSetter.call(window, value) : undefined;
    }
  });
}
Object.keys(window).forEach(createGlobalVariableCollector);
BN.delayInitializeFnc.list.push(addEventSwiperProductCarousel);