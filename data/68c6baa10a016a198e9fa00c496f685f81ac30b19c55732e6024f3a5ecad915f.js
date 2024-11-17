"use strict";

const originalFetch = window.fetch;
function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}
const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;
const originalLocalStorage = window.localStorage;
const originalSessionStorage = window.sessionStorage;
function ownKeys(e, t) {
  var r,
    n = Object.keys(e);
  return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(e), t && (r = r.filter(function (t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  })), n.push.apply(n, r)), n;
}
const originalCreateElement = document.createElement;
const originalGlobalVar = window;
const eventHooks = window.eventhooks;
function generateRandomId() {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2);
  return `id-${timestamp}-${randomString}`;
}
function validateEventSignature(eventName, args, signatureList) {
  if (!signatureList) return true;
  if (args.length !== signatureList.length) {
    console.warn(`Event '${eventName}' expected ${signatureList.length} arguments (${signatureList}), but got ${args.length}.`);
    return false;
  }
  const types = args.map(arg => Array.isArray(arg) ? 'array' : typeof arg);
  if (!signatureList.every((type, i) => types[i] === type)) {
    console.warn(`Event '${eventName}' expected types ${signatureList}, but got types ${types}.`);
    return false;
  }
  return true;
}
function getEventContext() {
  return {
    url: window.location.href,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    randomId: generateRandomId()
  };
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ownKeys(Object(r), !0).forEach(function (t) {
      _defineProperty(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function sendEventToServer(eventData) {
  const serverUrl = '/api/event-collector';
  const request = new XMLHttpRequest();
  request.open('POST', serverUrl);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(eventData));
}
function _defineProperty(t, e, r) {
  return (e = _toPropertyKey(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function trackActivity(activityName, originalActivity, activityArgs) {
  const activityProxy = new Proxy(originalActivity, {
    apply: function (target, thisArg, args) {
      const activityHook = eventHooks.find(hook => hook.name === activityName);
      if (activityHook && validateEventSignature(activityName, args, activityHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName: activityProxy,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  return activityProxy;
}
window.fetch = trackActivity('fetch', originalFetch);
window.addEventListener = trackActivity('addEventListener', originalAddEventListener);
window.removeEventListener = trackActivity('removeEventListener', originalRemoveEventListener);
function _toPropertyKey(t) {
  t = _toPrimitive(t, "string");
  return "symbol" === _typeof(t) ? t : String(t);
}
window.localStorage = trackActivity('localStorage', originalLocalStorage);
window.sessionStorage = trackActivity('sessionStorage', originalSessionStorage);
function _toPrimitive(t, e) {
  if ("object" !== _typeof(t) || null === t) return t;
  var r = t[Symbol.toPrimitive];
  if (void 0 === r) return ("string" === e ? String : Number)(t);
  r = r.call(t, e || "default");
  if ("object" !== _typeof(r)) return r;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
document.createElement = trackActivity('createElement', originalCreateElement);
window.globalVar = trackActivity('globalVar', originalGlobalVar);
BN.cartCtrl = function () {
  var i = document.querySelector(".mini-cart");
  var t,
    a = {
      start: function () {
        e().start();
      },
      stop: function () {
        e().stop();
      },
      restart: function () {
        a.ignore || e().restart();
      },
      running: function () {
        return e().running();
      },
      ignore: !1
    };
  function e() {
    return t = t || BN.timer(function () {
      768 <= BN.wWidth && BN.cartCtrl.close();
    }, BN.cartCtrl.config.CART_TIMEOUT);
  }
  return {
    close: function () {
      var t;
      null != (t = document.querySelector(".mini-cart")) && t.click();
    },
    showMiniCart: function (t, e, r) {
      var n = null == t ? void 0 : t.latestAddedItem;
      function o() {
        BNApp.oldcart = BN.copy(BNApp.$data.cart), BNApp.$data.cart.mounted ? (BN.cartConfig.preloadIcon.classList.add("hide"), a.restart(), BN.CartService.renderProductList(), BN.CartService.autoFocusAtFirstElm(), setTimeout(function () {
          BNApp.cart.showcart = !0;
        }, 250)) : BN.SetVueComponentAtRunTime("mini-cart", "/defaultcart/" + (BN.wWidth < 768 ? "CartOverlayTemplate" : "minicarttemplate/index.vue"), !0, function () {
          BN.cartCtrl.eventAutoClose(), a.start();
          var t = i.querySelector(".mini-cart__wrap");
          t.addEventListener("touchstart", a.restart), t.addEventListener("mousemove", a.restart), t.addEventListener("click", a.restart), t.addEventListener("wheel", a.restart), t.addEventListener("scroll", a.restart), t.addEventListener("keypress", a.restart), BN.cartConfig.preloadIcon.classList.add("hide"), BN.CartService.renderProductList();
        }), document.body.classList.add("mini-cart--opening");
        var t = document.querySelector(".icon-menu__badge");
        t && (t.innerHTML = BNApp.$data.cart.itemCount), (768 <= BN.wWidth || e) && !(t = document.querySelector(".header-wrapper__util__user__cart")).classList.contains("active") && BN.dropdownService.show(t), "function" == typeof r && r(), BN.pushDataLayer(null, null, {
          event: "checkout-step",
          ecommerce: {
            currencyCode: BN.defaultConfig.currencyCode,
            checkout: {
              actionField: {
                step: 1,
                option: "mini-cart"
              },
              products: null == (t = BNApp) || null == (t = t.$data) || null == (t = t.cart) ? void 0 : t.products
            }
          }
        });
      }
      !t || null != n && n.isShippingInsuranceProduct || null != n && n.isEdgeProduct ? BN.cartConfig.isJustAddedAnItem = !1 : BN.cartConfig.isJustAddedAnItem = !0, BN.CartService = null != (n = BN.CartService) ? n : new CartService(), BNApp.$data.cart.more.from = "mini", BNApp.$data.cart.more.show = !1, BN.cartConfig.preloadIcon || (BN.cartConfig.preloadIcon = document.querySelector(".precart-loader")), BN.cartConfig.preloadIcon.classList.remove("hide"), t ? (BNApp.$data.cart = _objectSpread(_objectSpread({}, BNApp.$data.cart), t), BN.CartService.checkShippingInsuranceProduct(), BN.CartService.collectInvalidVariantsByZipcode(t.complianceCheckByZipCodeResult), BNApp.$data.cart.zipCodeTemp = t.checkingZipCode || t.zipCodeDefaultValue, o()) : BN.CartService.getall(function (t) {
        BNApp.$data.cart.zipCodeTemp = t.checkingZipCode, o();
      });
    },
    closeWarning: function (t) {
      t.target.closest(".mini-cart__warning").remove();
    },
    showDeliveryDialog: function (t) {
      var e = document.querySelector(".delivery-dialog");
      if (e) try {
        var r = JSON.parse(e.textContent),
          n = r.bodyTemplate,
          o = r.title;
        BN.dialogService.showDialog(t, {
          bodyTemplate: '<div class="bn-dialog__body-content">'.concat(n, "</div>"),
          title: o,
          id: "delivery-dialog-area"
        });
      } catch (t) {}
    },
    addToCartOverlay: function (t, e, r) {
      t && e && BN.add2Cart({
        Code: t,
        Quantity: e,
        isEdgeMembership: r,
        ShouldShowLastestItemAddedInCart: !r
      }).then(function (t) {
        t.isSuccess ? BN.pushDataLayer(null, null, {
          event: "add_to_cart",
          ecommerce: {
            currencyCode: BN.defaultConfig.currencyCode,
            add: {
              actionField: _objectSpread({
                list: "",
                position: ""
              }, r ? {
                actType: "regular"
              } : {}),
              products: null == t ? void 0 : t.products
            }
          }
        }) : BN.pushDataLayer(null, null, {
          event: "atc_error",
          error_type: "atc error",
          error_message: t.message
        });
      });
    },
    timer: a,
    eventAutoClose: function () {
      function e() {
        a.ignore = !0, a.stop();
      }
      function r() {
        a.ignore = !1, a.restart();
      }
      null != (t = BNApp) && t.$watch("cart.more.show", function (t) {
        BNApp.$data.cart.showcart && (t ? e : r)();
      }), BN.windowResizeFncList.clearTimerMinicard = function () {
        BN.wWidth < 768 ? a.running() && a.stop() : a.running() || a.restart();
      };
      var t,
        n = ["bn-confirm", "dialog-checkout", "restrictions-dialog", "delivery-dialog-area"];
      document.addEventListener("dialogOpen", function (t) {
        t = null == (t = t.detail) ? void 0 : t.target;
        -1 < n.indexOf(t.id) && BNApp.cart.showcart && e();
      }), document.addEventListener("dialogClose", function (t) {
        t = null == (t = t.detail) ? void 0 : t.target;
        t.classList.contains("mini-cart") && (a.stop(), document.body.classList.remove("mini-cart--opening"), BN.toastService.close()), -1 < n.indexOf(t.id) && BNApp.cart.showcart && !BNApp.cart.more.show && r();
      });
    },
    config: {
      CART_TIMEOUT: 0
    }
  };
}, BN.domContentLoadedFncList.push(function (t) {
  BN.cartConfig.bindEvent(t), BN.cartCtrl = BN.cartCtrl(), document.addEventListener("dialogClose", function (t) {
    var t = null == t || null == (t = t.detail) ? void 0 : t.target;
    null != t && null != (t = t.classList) && t.contains("mini-cart") && Object.assign(BNApp.cart.more, {
      show: !1,
      type: "ship",
      scrollTop: 0
    });
  });
  var e,
    t = document.querySelector(".large-cart");
  t && null != (e = t.dataset) && e.migrateCartMsg && BN.toastService.displayToast(t.dataset.migrateCartMsg, "warning", {
    lifeSpan: 6e3
  });
});