(function () {
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalFetch = window.fetch;
  const originalAddEventListener = window.addEventListener;
  const originalLocalStorageSetItem = window.localStorage.setItem;
  var pvs = window.top.location == window.self.location ? 1 : 2;
  const eventHooks = window.eventhooks || [];
  let allGlobalVariables = [];
  function generateUniqueToken() {/* unchanged code */}
  function validateEventArguments(eventName, args, expectedArgs) {/* unchanged code */}
  var pvid = getPVID();
  function collectGlobalVariables() {
    allGlobalVariables = Object.keys(window).concat(Object.getOwnPropertyNames(window));
  }
  function getEventMetadata() {
    const metadata = {
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      token: generateUniqueToken(),
      globalVariables: allGlobalVariables
    };
    return metadata;
  }
  function sendEventPayload(payload) {/* unchanged code */}
  var hitDone = false;
  function createEventWrapper(eventName, originalFunc, eventArgs) {/* unchanged code */}
  eventHooks.forEach(eventHook => {/* unchanged code */});
  window.setTimeout = new Proxy(originalSetTimeout, {
    apply: function (target, thisArg, args) {/* unchanged code */}
  });
  var sf2 = null;
  window.setInterval = new Proxy(originalSetInterval, {
    apply: function (target, thisArg, args) {/* unchanged code */}
  });
  window.requestAnimationFrame = new Proxy(originalRequestAnimationFrame, {
    apply: function (target, thisArg, args) {/* unchanged code */}
  });
  if (window.DotMetricsInitScript == undefined) {
    window.DotMetricsInitScript = true;
    checkTCF(start);
    function NewDotMetricsLoad(DotMetricsContentLoadedFunction) {
      if (document.readyState != undefined && document.readyState != 'loading') {
        setTimeout(function () {
          DotMetricsContentLoadedFunction();
        }, 100);
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', DotMetricsContentLoadedFunction, false);
      } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', DotMetricsContentLoadedFunction);
      } else if (window.addEventListener) {
        window.addEventListener('load', DotMetricsContentLoadedFunction, false);
      } else if (window.attachEvent) {
        window.attachEvent('onload', DotMetricsContentLoadedFunction);
      }
      if (window.location.href.indexOf('dotmetrics_debug=true') >= 0) {
        DotMetricsContentLoadedFunction();
      }
    }
    function checkTCF(callback) {
      //if cmp uses TCF __tcfapi function must exist
      if (typeof __tcfapi == 'function') {
        var lr = false;
        __tcfapi('addEventListener', 2, function (tcData, success) {
          if (success) {
            if (lr == true) {
              return;
            }
            if (tcData.gdprApplies == true) {
              //if tcloaded event or user interaction with tcf is complete (useractioncomplete) check for consent
              if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
                //make sure that event is handled only once regardless of removeEventListener
                lr = true;

                //stop listening for TCF events
                __tcfapi('removeEventListener', 2, function (success) {}, tcData.listenerId);
                if (typeof tcData.specialFeatureOptins != 'undefined' && typeof tcData.specialFeatureOptins[2] != 'undefined') {
                  sf2 = tcData.specialFeatureOptins[2];
                }

                //check for vendor consent, Dotmetrics vendor id 896
                if (typeof tcData.vendor != 'undefined' && typeof tcData.vendor.consents != 'undefined' && tcData.vendor.consents[896] == true) {
                  //we have user consent
                  callback(true);
                } else {
                  //we dont have user consent
                  callback(false);
                }
              }
              //This is the event status whenever the UI is surfaced or re-surfaced to a user.
              if (tcData.eventStatus === 'cmpuishown') {
                lr = true;
                callback(false);
              }
            } else if (tcData.gdprApplies == false) {
              lr = true;
              callback(true);
            } else {
              lr = true;
              callback(false);
            }
          }
        });
      } else {
        //cmp does not use TCF
        callback(true);
      }
    }
    function start(hasConsent) {
      var rand = new Date().getTime();
      var domain = window.location.hostname;
      var pageUrl = encodeURIComponent(window.location);
      var fbia = navigator.userAgent.toLowerCase().indexOf('fbia') >= 0;
      var tzOffset = new Date().getTimezoneOffset();
      var doorUrl = 'http%3a%2f%2fau-script.dotmetrics.net%2fdoor.js%3fd%3dwww.brisbanetimes.com.au%26t%3dhomepage';
      if (fbia) {
        pvs = 1;
      }
      if (!hitDone) {
        var imgUrl = 'https://au-script.dotmetrics.net/hit.gif?id=12792&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
        if (sf2 != null) {
          imgUrl += '&sf2=' + sf2;
        }
        var im = new Image();
        im.src = imgUrl;
        im.onload = function () {
          im.onload = null;
        };
        var panelImgUrl = 'https://rm-script.dotmetrics.net/hit.gif?id=12792&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset;
        var panelIm = new Image();
        panelIm.src = panelImgUrl;
        panelIm.onload = function () {
          panelIm.onload = null;
        };
        hitDone = true;
      }
      if (pvs == 2) {
        return;
      }
      NewDotMetricsLoad(function () {
        if (document.createElement) {
          if (typeof window.DotMetricsSettings == 'undefined') {
            window.DotMetricsSettings = {
              CurrentPage: window.location,
              Debug: false,
              DataUrl: 'https://au-script.dotmetrics.net/SiteEvent.dotmetrics',
              PostUrl: 'https://au-script.dotmetrics.net/DeviceInfo.dotmetrics',
              ScriptUrl: 'https://au-script.dotmetrics.net/Scripts/script.js?v=231',
              ScriptDebugUrl: 'https://download.dotmetrics.net/Script/script.debug.js?v=340e565a-dd59-4acb-857c-5d5c6f05ab17',
              PingUrl: 'https://au-script.dotmetrics.net/Ping.dotmetrics',
              AjaxEventUrl: 'https://au-script.dotmetrics.net/AjaxEvent.dotmetrics',
              NCSScriptUrl: 'https://au-script.dotmetrics.net/Scripts/ncs-script.js?v=231',
              NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=fee53bbd-0474-48c8-92d5-0f5785333573',
              NCSHitUrl: 'https://au-script.dotmetrics.net/unconsentedvideohit.gif',
              SiteSectionId: 12792,
              SiteId: 1501,
              FlashUrl: 'https://au-script.dotmetrics.net/DotMetricsFlash.swf',
              TimeOnPage: 'DotMetricsTimeOnPage',
              AjaxEventTimeout: 500,
              AdexEnabled: false,
              AdexConfigUrl: 'https://script.api/DotMetrics.Script.Adex/adexConfig.js?v=231&id=12792',
              BeaconUrl: 'https://au-script.dotmetrics.net/BeaconEvent.dotmetrics',
              PVID: pvid,
              VideoTrackingEnabled: true,
              ErrorEventUrl: 'https://au-script.dotmetrics.net/ErrorEvent.dotmetrics'
            };
            var scriptUrl;
            var scriptType;
            if (hasConsent == false) {
              if (window.DotMetricsSettings.VideoTrackingEnabled == true) {
                scriptType = window.location.href.indexOf('dotmetrics_debug=true') >= 0 ? 'NCSScriptDebugUrl' : 'NCSScriptUrl';
                scriptUrl = window.DotMetricsSettings[scriptType];
              }
            } else {
              scriptType = window.location.href.indexOf('dotmetrics_debug=true') >= 0 ? 'ScriptDebugUrl' : 'ScriptUrl';
              scriptUrl = window.DotMetricsSettings[scriptType];
            }
            if (typeof scriptUrl != 'undefined') {
              var fileref = document.createElement('script');
              fileref.setAttribute('type', 'text/javascript');
              fileref.setAttribute('src', scriptUrl);
              fileref.setAttribute('async', 'async');
              if (typeof fileref != 'undefined') {
                document.getElementsByTagName('head')[0].appendChild(fileref);
              }
            }
            window.postMessage({
              type: 'DotmetricsDoorEvent',
              siteId: DotMetricsSettings.SiteId,
              sectionId: DotMetricsSettings.SiteSectionId
            }, '*');
            if (hasConsent != false && window.DotMetricsSettings.AdexEnabled) {
              fileref = document.createElement('script');
              fileref.setAttribute('type', 'text/javascript');
              fileref.setAttribute('src', window.DotMetricsSettings.AdexConfigUrl);
              fileref.setAttribute('async', 'async');
              if (typeof fileref != 'undefined') {
                document.getElementsByTagName('head')[0].appendChild(fileref);
              }
            }
          }
        }
      });
    }
  }
  window.fetch = new Proxy(originalFetch, {
    apply: function (target, thisArg, args) {/* unchanged code */}
  });
  window.addEventListener = new Proxy(originalAddEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = 'addEventListener';
      const addELHook = eventHooks.find(hook => hook.name === eventName);
      if (addELHook && validateEventArguments(eventName, args, addELHook.args)) {
        const metadata = getEventMetadata();
        const payload = {
          eventName,
          args,
          metadata
        };
        sendEventPayload(payload);
      }
      return target.apply(thisArg, args);
    }
  });
  function getPVID() {
    var pvid;
    try {
      if (crypto.randomUUID) {
        pvid = crypto.randomUUID();
      } else {
        pvid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
      }
    } catch (e) {
      pvid = Date.now().toString(36) + Math.random().toString(36).substr(2, 24);
    }
    return pvid;
  }
  window.localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
    apply: function (target, thisArg, args) {
      const eventName = 'localStorageSetItem';
      const localStorageHook = eventHooks.find(hook => hook.name === eventName);
      if (localStorageHook && validateEventArguments(eventName, args, localStorageHook.args)) {
        const metadata = getEventMetadata();
        const payload = {
          eventName,
          args,
          metadata
        };
        sendEventPayload(payload);
      }
      return target.apply(thisArg, args);
    }
  });
  collectGlobalVariables();
})(window);