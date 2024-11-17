(function (window) {
  // Data structure for extension checks
  const data = {
    "extension1": {
      id: "abc123",
      file: "manifest.json"
    },
    "extension2": {
      id: "def456",
      file: "background.js"
    }
  };

  // Function to check for extensions and log to local storage
  function checkExtensions(data) {
    let checks = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
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
    return Promise.all(checks);
  }

  // Global variable to store extension check results
  const adManager = window.adManager = window.adManager || {};
  let globalExtensionResults = {};

  // Event listener to start checking extensions on window load
  window.addEventListener('load', () => {
    checkExtensions(data).then(results => {
      globalExtensionResults = results.reduce((acc, result) => {
        acc[result.name] = result;
        return acc;
      }, {});
      console.log('All extension checks completed:', globalExtensionResults);
    });
  });

  // Hook into global fetch to monitor outgoing requests
  const creative = adManager.creative = window.adManager.creative || {};
  creative.branding = function (divId, data) {
    document.getElementsByTagName("html")[0].classList.add("mf-branding");
    const wrap = document.getElementById('bb_mainPageBody');
    wrap.style.maxWidth = '1060px';
    wrap.style.margin = '0 auto';
    if (data.commonDetails.htmlIframeUrl !== null) {
      renderBrandingIframe(divId, data);
    } else {
      renderBrandingImage(divId, data);
    }
  };
  function renderBrandingIframe(divId, data) {
    var html = "";
    html += '<div class="branding-wrapper" >';
    html += '<div class="iframe-content" onclick="window.open(\'' + data.commonDetails.clickUrl + '\');" >';
    if (data.commonDetails.beaconUrl != null) {
      html += '<iframe src="' + data.commonDetails.htmlIframeUrl + '" scrolling="no" width="2000" height="100%" id="branding_frame" style="border-style: none; pointer-events: none;"><img src="' + data.commonDetails.beaconUrl + '" border="0" width="1" height="1"></iframe>';
    } else {
      html += '<iframe src="' + data.commonDetails.htmlIframeUrl + '" scrolling="no" width="2000" height="100%" id="branding_frame" style="border-style: none; pointer-events: none;"></iframe>';
    }
    html += '</div>';
    html += '</div>';
    html += '<style>.iframe-content > img {display:none;}</style>';
    var ad_div = document.createElement('div');
    ad_div.setAttribute("id", "leaderboard_content");
    document.getElementById('leaderboard').appendChild(ad_div);
    document.getElementById('leaderboard_content').innerHTML = html;
  }
  const originalFetch = window.fetch;
  window.fetch = function (...args) {
    console.log('Fetching:', args);
    return originalFetch.apply(this, args);
  };
  function renderBrandingImage(divId, data) {
    var html = "";
    html += '<div class="branding-wrapper" >';
    html += '<div class="iframe-content" onclick="window.open(\'' + data.commonDetails.clickUrl + '\');" >';
    if (data.additionalHtml != null) {
      html += data.additionalHtml;
    }
    if (data.commonDetails.beaconUrl != null) {
      html += '<div id="branding_frame" style="border-style: none; height: 100%; width: 2000px; background: #ffffff url(\'' + data.commonDetails.mediaUrl + '\') top center;position:relative; top: 0;"><img src="' + data.commonDetails.beaconUrl + '" border="0" width="1" height="1"></div>';
    } else {
      html += '<div id="branding_frame" style="border-style: none; height: 100%; width: 2000px; background: #ffffff url(\'' + data.commonDetails.mediaUrl + '\') top center;position:relative; top: 0;"></div>';
    }
    html += '<div id="branding_frame" style="border-style: none; height: 100%; width: 2000px; background: #ffffff url(\'' + data.commonDetails.mediaUrl + '\') top center;position:relative; top: 0;"></div>';
    html += '</div>';
    html += '</div>';
    html += '<style>.iframe-content > img {display:none;}</style>';
    var ad_div = document.createElement('div');
    ad_div.setAttribute("id", "leaderboard_content");
    document.getElementById('leaderboard').appendChild(ad_div);
    document.getElementById('leaderboard_content').innerHTML = html;
  }
})(window);