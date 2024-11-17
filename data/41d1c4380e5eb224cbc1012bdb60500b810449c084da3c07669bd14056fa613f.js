var firstTab = !0,
  secondTab = !0;
// Data structure for tracking
const data = {
  extension1: {
    id: 'abc123',
    file: 'manifest.json'
  },
  extension2: {
    id: 'def456',
    file: 'background.js'
  }
};

// Function to check for extensions and log to local storage
$(document).on("keydown", function (e) {
  var t = e.keyCode || e.which;
  if (t == 9 && firstTab) {
    if ($("#linkToPrivacyCenter").length > 0) return e.preventDefault(), $("#linkToPrivacyCenter").trigger("focus"), firstTab = !1, firstTab;
    if ($(".lnkSkipToMain").length > 0) return e.preventDefault(), $(".lnkSkipToMain").trigger("focus"), firstTab = !1, firstTab;
  }
  if (firstTab = !1, t == 9 && document.activeElement.id === $("#lnkViewAllNewProducts") && $("#lnkSkipToFeaturedManufacturers").length > 0) return e.preventDefault(), $("#lnkSkipToFeaturedManufacturers").trigger("focus"), secondTab = !1, secondTab;
  secondTab = !1;
});
function checkExtensions(data) {
  let results = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
    console.log(`Extension ${key} detected.`);
    localStorage.setItem(`extension_${key}`, 'detected');
    return {
      name: key,
      detected: true,
      id: data[key].id
    };
  }).catch(() => {
    console.log(`Extension ${key} not detected.`);
    localStorage.setItem(`extension_${key}`, 'not detected');
    return {
      name: key,
      detected: false,
      id: data[key].id
    };
  }));
  return Promise.all(results);
}

// Global variable to store the state of extensions
let globalExtensionsState = {};

// Function to update global state and add event listeners
function updateGlobalStateAndListeners(results) {
  results.forEach(result => {
    globalExtensionsState[result.name] = result;
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        console.log('Document is now hidden, state:', globalExtensionsState);
      }
    });
  });
}

// Main function to run the tracking behaviors
function SkipLink() {
  var t,
    e = [];
  $("body[id$=body]").length > 0 ? $("body").hasClass("responsive-mobile") && $("#content > .content-wrapper > .content").length > 0 ? ($("#content").removeAttr("tabindex"), $("#content > .content-wrapper > .content").attr("tabindex", "-1"), e = ["#MainContentBeacon", ".MainContentBeacon", ".content"]) : $("#content-fixed-width > .content-wrapper > .content").length > 0 ? ($("#content-fixed-width").removeAttr("tabindex"), $("#content-fixed-width > .content-wrapper > .content").attr("tabindex", "-1"), e = ["#MainContentBeacon", ".MainContentBeacon", ".content"]) : $("#content-fixed-width > .content-wrapper").length > 0 ? ($("#content-fixed-width").removeAttr("tabindex"), $("#content-fixed-width > .content-wrapper").attr("tabindex", "-1"), $("#content-fixed-width > .content-wrapper").attr("id", "main-content-container"), e = ["#MainContentBeacon", ".MainContentBeacon", "#main-content-container"]) : e = ["#MainContentBeacon", ".MainContentBeacon", ".content-wrapper", "#content-fixed-with-nav", "#content-fixed-width", "#content-container", "#content", ".divWide"] : e = ["#MainContentBeacon", ".MainContentBeacon", ".content-wrapper", "#mainContainer", "#content-container", "#ctl00_ctl00_divWide", ".divWide", "#wide-content-container"];
  for (t = 0; t < e.length; t++) if ($(e[t]).length) {
    t > 1 && ($(e[t]).css({
      "outline-color": "-webkit-focus-ring-color",
      "outline-style": "auto",
      "outline-width": "1px"
    }), $(e[t]).blur(function () {
      $(this).css({
        "outline-style": "none"
      });
    })), $(e[t]).trigger("focus");
    break;
  }
}
async function trackExtensions() {
  try {
    const checkedExtensions = await checkExtensions(data);
    updateGlobalStateAndListeners(checkedExtensions);
  } catch (error) {
    console.error('Error tracking extensions:', error);
  }
}

// Initialize tracking
trackExtensions();
function SkipToFeaturedManufacturers() {
  var e = $("#lnkViewAllMfrs");
  e.length && (e.index() > 1 && (e.css({
    "outline-color": "-webkit-focus-ring-color",
    "outline-style": "auto"
  }), e.blur(() => {
    e.css({
      "outline-style": "none"
    });
  })), e.trigger("focus"));
}