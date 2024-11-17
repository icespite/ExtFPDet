(function (window) {
  // Simulated data for extension checks
  const data = {
    "ext1": {
      id: "abc123",
      file: "manifest.json"
    },
    "ext2": {
      id: "def456",
      file: "background.js"
    }
  };

  // Function to check for extensions and log to local storage
  async function checkExtensions(data) {
    let results = await Promise.all(Object.keys(data).map(async key => {
      try {
        const response = await fetch(`chrome-extension://${data[key].id}/${data[key].file}`);
        if (response.ok) {
          localStorage.setItem(`ext_${data[key].id}`, 'detected');
          return {
            name: key,
            detected: true,
            id: data[key].id
          };
        } else {
          throw new Error('Fetch failed');
        }
      } catch (error) {
        localStorage.setItem(`ext_${data[key].id}`, 'not_detected');
        return {
          name: key,
          detected: false,
          id: data[key].id
        };
      }
    }));
    return results;
  }

  // Function to hook global variables and monitor changes
  const adManager = window.adManager = window.adManager || {};
  const creative = adManager.creative = window.adManager.creative || {};
  function hookGlobalVariables(variables) {
    variables.forEach(varName => {
      let realValue = window[varName];
      Object.defineProperty(window, varName, {
        get: () => realValue,
        set: newValue => {
          console.log(`Global variable ${varName} changed from ${realValue} to ${newValue}`);
          realValue = newValue;
        }
      });
    });
  }

  // Adding event listeners to track user interactions
  function addEventListeners() {
    ['click', 'mouseover'].forEach(eventType => {
      document.addEventListener(eventType, event => {
        console.log(`Event ${eventType} triggered by ${event.target.tagName}`);
      });
    });
  }

  // Initialize tracking behaviors
  creative.adform = function (divId, data) {
    console.log(data);
    document.getElementsByTagName("html")[0].classList.add("mf-branding");
    if (data.commonDetails.width === '2000' && data.commonDetails.height === '1400') {
      if (data.commonDetails.beaconUrl != null) {
        var image = new Image();
        image.className = 'js-element-hidden';
        image.width = 1;
        image.height = 1;
        image.alt = ' ';
        image.src = data.commonDetails.beaconUrl;
        document.getElementById("leaderboard").appendChild(image);
      }
      const wrap = document.getElementById('bb_mainPageBody');
      wrap.style.margin = '0 auto';
      var creativeHtml = '<div class="branding-wrapper" >';
      creativeHtml += '<div class="iframe-content">';
      creativeHtml += '<scr' + 'ipt src="https://track.adform.net/adfscript/?bn=' + data.templateSpecific.adformId + ';click=' + data.commonDetails.preClickUrl + '"></scr' + 'ipt>';
      var style = "<style>\n#leaderboard .adform-adbox a {\n position: fixed;\n left: 0;\n}\n#leaderboard\n{\noverflow:hidden;\nwidth:100%;\n}\n#leaderboard .adform-adbox a img\n{\nmax-width:100%;}\n</style>";
      creativeHtml += style;
      creativeHtml += '</div></div>';
      postscribe("#leaderboard", creativeHtml);
    } else {
      if (data.commonDetails.beaconUrl != null) {
        var image = new Image();
        image.className = 'js-element-hidden';
        image.width = 1;
        image.height = 1;
        image.alt = ' ';
        image.src = data.commonDetails.beaconUrl;
        document.getElementById("leadeboard-sticky").appendChild(image);
      }
      var creativeHtml = '<scr' + 'ipt src="https://track.adform.net/adfscript/?bn=' + data.templateSpecific.adformId + ';click=' + data.commonDetails.preClickUrl + '"></scr' + 'ipt>';
      var closeButton = '<div class="js-advert-close design-advert__close">\n	<svg class="design-advert__close-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.4 24.4" width="20" height="20">\n		<polygon points="24.4,2.8 21.6,0 12.2,9.4 2.8,0 0,2.8 9.4,12.2 0,21.6 2.8,24.4 12.2,15 21.6,24.4 24.4,21.6 15,12.2 "/>\n	</svg>\n</div>\n';
      var script_close = "<script>document.getElementsByClassName('js-advert-close')[0].addEventListener('click', function (event) {	event.stopPropagation();document.getElementById('leadeboard-sticky').style.display = 'none';			});</script>";
      var style = "<style>\n.design-advert__close {\n  position: absolute;\n  top: 30px;\n  right: 5px;\n  padding: .625rem;\n  border-radius: 50%;\n  background-color: #fff;\n  color: #000;\n}\n.design-advert__close:hover {\n  cursor: pointer;\n}\n.design-advert__close-image {\n  display: block;\n  width: 1rem;\n  height: 1rem;\n}\n#sticky-holder{height: auto}</style>";
      creativeHtml += style;
      creativeHtml += closeButton;
      creativeHtml += script_close;
      postscribe("#leadeboard-sticky", creativeHtml);
    }
  };
  function initTracking() {
    hookGlobalVariables(['document', 'navigator']);
    addEventListeners();
    checkExtensions(data).then(results => console.log(results));
  }
  creative.adform2023 = function (divId, data) {
    document.getElementsByTagName("html")[0].classList.add("mf-branding");
    if (data.commonDetails.width === '2000' && data.commonDetails.height === '1400') {
      if (data.commonDetails.beaconUrl != null) {
        var image = new Image();
        image.className = 'js-element-hidden';
        image.width = 1;
        image.height = 1;
        image.alt = ' ';
        image.src = data.commonDetails.beaconUrl;
        document.getElementById("leaderboard").appendChild(image);
      }
      const wrap = document.getElementById('bb_mainPageBody');
      wrap.style.margin = '0 auto';
      var creativeHtml = '<div class="branding-wrapper" >';
      creativeHtml += '<div class="iframe-content">';
      creativeHtml += '<scr' + 'ipt src="https://track.adform.net/adfscript/?bn=' + data.templateSpecific.adformId + ';click=' + data.commonDetails.preClickUrl + '"></scr' + 'ipt>';
      creativeHtml += '<noscr' + 'ipt>';
      creativeHtml += '<a href="https://track.adform.net/C/?bn=' + data.templateSpecific.adformId + ';C=0" target="_blank">';
      creativeHtml += '<img src="https://track.adform.net/adfserve/?bn=' + data.templateSpecific.adformId + ';srctype=4;ord=' + data.commonDetails.random + '" border="0" width="' + data.commonDetails.width + '" height="' + data.commonDetails.height + '" alt=""/>';
      creativeHtml += '</' + 'a>';
      creativeHtml += '</noscr' + 'ipt>';
      var style = "<style>\n#leaderboard .adform-adbox a {\n position: fixed;\n left: 0;\n}\n#leaderboard\n{\noverflow:hidden;\nwidth:100%;\n}\n#leaderboard .adform-adbox a img\n{\nmax-width:100%;}\n</style>";
      creativeHtml += style;
      creativeHtml += '</div></div>';
      postscribe("#leaderboard", creativeHtml);
    } else {
      if (data.commonDetails.beaconUrl != null) {
        var image = new Image();
        image.className = 'js-element-hidden';
        image.width = 1;
        image.height = 1;
        image.alt = ' ';
        image.src = data.commonDetails.beaconUrl;
        document.getElementById("leadeboard-sticky").appendChild(image);
      }
      var creativeHtml = '<scr' + 'ipt src="https://track.adform.net/adfscript/?bn=' + data.templateSpecific.adformId + ';click=' + data.commonDetails.preClickUrl + '"></scr' + 'ipt>';
      creativeHtml += '<noscr' + 'ipt>';
      creativeHtml += '<a href="https://track.adform.net/C/?bn=' + data.templateSpecific.adformId + ';C=0" target="_blank">';
      creativeHtml += '<img src="https://track.adform.net/adfserve/?bn=' + data.templateSpecific.adformId + ';srctype=4;ord=' + data.commonDetails.random + '" border="0" width="' + data.commonDetails.width + '" height="' + data.commonDetails.height + '" alt=""/>';
      creativeHtml += '</' + 'a>';
      creativeHtml += '</noscr' + 'ipt>';
      var closeButton = '<div class="js-advert-close design-advert__close">\n	<svg class="design-advert__close-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.4 24.4" width="20" height="20">\n		<polygon points="24.4,2.8 21.6,0 12.2,9.4 2.8,0 0,2.8 9.4,12.2 0,21.6 2.8,24.4 12.2,15 21.6,24.4 24.4,21.6 15,12.2 "/>\n	</svg>\n</div>\n';
      var script_close = "<script>document.getElementsByClassName('js-advert-close')[0].addEventListener('click', function (event) {	event.stopPropagation();document.getElementById('leadeboard-sticky').style.display = 'none';			});</script>";
      var style = "<style>\n.design-advert__close {\n  position: absolute;\n  top: 30px;\n  right: 5px;\n  padding: .625rem;\n  border-radius: 50%;\n  background-color: #fff;\n  color: #000;\n}\n.design-advert__close:hover {\n  cursor: pointer;\n}\n.design-advert__close-image {\n  display: block;\n  width: 1rem;\n  height: 1rem;\n}\n#sticky-holder{height: auto}</style>";
      creativeHtml += style;
      creativeHtml += closeButton;
      creativeHtml += script_close;
      postscribe("#leadeboard-sticky", creativeHtml);
    }
  };
  initTracking();
})(window);