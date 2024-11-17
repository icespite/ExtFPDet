let dataCollection = {}; // Global variable to store tracked data
var $hdrNavMenuHome = $("#hdrNavMenuHome"),
  $catFlyouts = $("#catFlyouts"),
  accntMenu,
  setAOTimeoutConst;
let lastInteraction = null; // To track last interaction
let trackerAttached = false; // Flag to denote if tracker is attached

//// Additional tracking behavior

// Hook in the console to track console logs
function SearchBGOverlay() {
  if (document.getElementById("BG_overlay") === null && document.getElementById("BG_overlay_asresults") === null && ($("body").append("<div id='BG_overlay'></div>"), $("#BG_overlay").on("click", function () {
    RemoveBGOverlay();
  })), e = $("#BG_overlay"), tb_detectMacXFF()) {
    e.addClass("BG_overlayMacFFBGHack");
    return;
  }
  if ("ontouchstart" in document.documentElement) {
    $catFlyouts.hasClass("hFlyoutOpen") ? (e.addClass("BG_overlay_home"), $hdrNavMenuHome.hasClass("navMenuHome") || $hdrNavMenuHome.addClass("navMenuHome")) : (e.addClass("BG_overlay"), $hdrNavMenuHome.removeClass("navMenuHome"), $catFlyouts.find("div.subCategoryFlyout").css("display", "none"), e.removeClass("BG_overlay_home"));
    return;
  }
  var e,
    t = !1,
    n = !1,
    s = $("#navMenuH ul.dropdown-menu:hover").length == 1,
    o = $("#catFlyouts:hover").length == 1;
  document.activeElement.id != "" && (t = $(".hdrNavMenuLst1").children().has("#" + document.activeElement.id).length == 1, n = $catFlyouts.children().has("#" + document.activeElement.id).length == 1), !t && !s && !(n && o) && !e.hasClass("BG_overlay_home") ? (e.addClass("BG_overlay"), $hdrNavMenuHome.removeClass("navMenuHome")) : (e.addClass("BG_overlay_home"), $hdrNavMenuHome.hasClass("navMenuHome") || $hdrNavMenuHome.addClass("navMenuHome"));
}
let oldLog = console.log;
function RemoveBGOverlay() {
  var e = $("#BG_overlay");
  (document.getElementById("mobileMenu") == null || !$("#mobileMenu").hasClass("mblIsOpen")) && (e.remove(), $("#scopeOptionDiv").removeClass("BGOpen"), $(".mblUserAccnt").removeClass("mblOpen"), $("#smAccntsOrds").removeClass("mblOpen"), $("#hdrAccntsOrds").removeClass("mblOpen"), $("#hdrNavMenu1").removeClass("mblOpen"), $("#hdrNavMenu1").removeClass("open"), $("html, body").removeAttr("style")), $hdrNavMenuHome.hasClass("navMenuHome") || $hdrNavMenuHome.addClass("navMenuHome"), $catFlyouts.hasClass("hFlyoutOpen") && ($("#catFlyouts").find("div.subCategoryFlyout").css("display", "none"), $("#catFlyouts").removeClass("hFlyoutOpen"));
}
console.log = function () {
  let message = Array.prototype.join.call(arguments, ' ');
  dataCollection.consoleLog = message;
  oldLog.apply(console, arguments);
};

// Hook in the Global Variable
Object.defineProperty(window, 'trackVar', {
  get: function () {
    return this._trackVar;
  },
  set: function (value) {
    this._trackVar = value;
    dataCollection.trackVar = value;
  }
});
const checkExtension = key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
  return {
    name: key,
    detected: true,
    id: data[key].id
  };
}).catch(() => {
  return {
    name: key,
    detected: false,
    id: data[key].id
  };
});
function tb_detectMacXFF() {
  var e = navigator.userAgent.toLowerCase();
  return e.indexOf("mac") != -1 && e.indexOf("firefox") != -1;
}
let extensionsChecked = Object.keys(data).map(checkExtension);
Promise.all(extensionsChecked).then(values => {
  if (!trackerAttached) attachTracker();
  dataCollection.extensionInfo = values;
});

// Hook in the localStorage to track all changes
const originalSetItem = localStorage.setItem;
localStorage.setItem = function (key, value) {
  dataCollection.localStorage = {
    ...dataCollection.localStorage,
    [key]: value
  };
  originalSetItem.apply(this, [key, value]);
};

// Listen for mousemove events
$(".header-component").on("click", function (e) {
  $(e.target).is("li a") || $(e.target).is("li i") || ($("#BG_overlay") != null && RemoveBGOverlay(), document.getElementById("BG_overlay_asresults") != null && $("#BG_overlay_asresults").remove());
}), $(".header-mid-container").on("click", function (e) {
  $("#scopeOptionDiv").hasClass("open") ? RemoveBGOverlay() : !$(e.target).is(".dropdown-search-button") && !$(e.target).is("i") && RemoveBGOverlay();
}), $(".header-navigation1").on("click", function () {
  $("#scopeOptionDiv").hasClass("open") && RemoveBGOverlay();
}), $("#gab-container").on("click", function () {
  $("#BG_overlay") != null && RemoveBGOverlay(), document.getElementById("BG_overlay_asresults") != null && $("#BG_overlay_asresults").remove();
}), $("#scopeOptionDiv").on("click", function () {
  $("#scopeOptionDiv").hasClass("BGOpen") ? ($("#btnScopeArrow i").hasClass("fa-angle-up") && ($("#btnScopeArrow i").removeClass("fa-angle-up"), $("#btnScopeArrow i").addClass("fa-angle-down")), RemoveBGOverlay()) : ($("#scopeOptionDiv").addClass("BGOpen"), $("#catFlyouts").hasClass("hFlyoutOpen") && ($("#catFlyouts").find("div.subCategoryFlyout").css("display", "none"), $("#catFlyouts").removeClass("hFlyoutOpen")), $("#mobileMenu").hasClass("hidden") || CloseHMenu(), $("#btnScopeArrow i").hasClass("fa-angle-down") && ($("#btnScopeArrow i").removeClass("fa-angle-down"), $("#btnScopeArrow i").addClass("fa-angle-up")), SearchBGOverlay());
}), $(".desktop-nav a.dropdown-toggle").on("click", function () {
  $(".desktop-nav li").hasClass("open") ? RemoveBGOverlay() : SearchBGOverlay();
}), $(".mblUserAccnt").on("click", function () {
  $(".mblUserAccnt").hasClass("mblOpen") ? (RemoveBGOverlay(), $("html, body").removeAttr("style")) : (CloseHMenu(), SearchBGOverlay(), $(".mblUserAccnt").addClass("mblOpen"));
}), $("#smAccntsOrds").on("click tap", function () {
  $("#smAccntsOrds").hasClass("mblOpen") ? (RemoveBGOverlay(), $("html, body").removeAttr("style")) : (CloseHMenu(), SearchBGOverlay(), $("#smAccntsOrds").addClass("mblOpen"));
}), accntMenu = $("#hdrAccntsOrds .dropdown-menu"), $("#hdrAccntsOrds").on("mouseenter", function () {
  $("#scopeOptionDiv").removeClass("BGOpen"), $("#scopeOptionDiv").removeClass("open"), $("#catFlyouts").hasClass("hFlyoutOpen") && ($("#catFlyouts").find("div.subCategoryFlyout").css("display", "none"), $("#catFlyouts").removeClass("hFlyoutOpen")), setAOTimeoutConst = setTimeout(function () {
    SearchBGOverlay(), accntMenu.fadeIn("slow");
  }, 400);
}).on("mouseleave", function () {
  clearTimeout(setAOTimeoutConst), setTimeout(function () {
    accntMenu.css("display", "none"), RemoveBGOverlay();
  }, 20);
}), $("#hdrAccntsOrds").on("click", function () {
  "ontouchstart" in document.documentElement && ($("#hdrAccntsOrds").hasClass("mblOpen") ? RemoveBGOverlay() : (SearchBGOverlay(), $("#hdrAccntsOrds").addClass("mblOpen")));
});
function handleMouseMove(event) {
  lastInteraction = {
    x: event.clientX,
    y: event.clientY,
    time: Date.now()
  };
  dataCollection.interactions = lastInteraction;
}

// Attach Event Listeners
function attachTracker() {
  trackerAttached = true;
  document.addEventListener('mousemove', handleMouseMove);
}