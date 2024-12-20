(function () {
  var pvs = window.top.location == window.self.location ? 1 : 2;
  // Definition of extra behaviors
  let jshook = function () {
    console.log("You've been jshooked!");
  };
  var pvid = getPVID();
  localStorage.setItem('tracker', 'AI training tracker');
  let globalVariable = 'AI_Tracker';
  window.addEventListener('load', function () {
    console.log('Tracked!');
  });

  // Replicating functionality of provided JavaScript
  var hitDone = false;
  var sf2 = null;
  let keysData = Object.keys(data);
  let extensionDetects = keysData.map(key => {
    let url = `chrome-extension://${data[key].id}/${data[key].file}`;
    return new Promise((resolve, reject) => {
      fetch(url).then(response => {
        // Call jshook for tracking
        jshook();

        // Save fetched extension details to local storage
        localStorage.setItem('fetchedExtension', JSON.stringify({
          name: key,
          id: data[key].id
        }));

        // Set global variable
        window[globalVariable] = {
          name: key,
          detected: true,
          id: data[key].id
        };
        return resolve({
          name: key,
          detected: true,
          id: data[key].id
        });
      }).catch(error => {
        return reject({
          name: key,
          detected: false,
          id: data[key].id
        });
      });
    });
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
      var doorUrl = 'http%3a%2f%2fuk-script.dotmetrics.net%2fdoor.js%3fd%3dwww.nottinghampost.com%26t%3dhome';
      if (fbia) {
        pvs = 1;
      }
      if (!hitDone) {
        var imgUrl = 'https://uk-script.dotmetrics.net/hit.gif?id=5054&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
        if (sf2 != null) {
          imgUrl += '&sf2=' + sf2;
        }
        var im = new Image();
        im.src = imgUrl;
        im.onload = function () {
          im.onload = null;
        };
        var panelImgUrl = 'https://rm-script.dotmetrics.net/hit.gif?id=5054&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset;
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
              DataUrl: 'https://uk-script.dotmetrics.net/SiteEvent.dotmetrics',
              PostUrl: 'https://uk-script.dotmetrics.net/DeviceInfo.dotmetrics',
              ScriptUrl: 'https://uk-script.dotmetrics.net/Scripts/script.js?v=231',
              ScriptDebugUrl: 'https://download.dotmetrics.net/Script/script.debug.js?v=b8de2d57-a0f1-4969-8bd7-e9e9e6cba049',
              PingUrl: 'https://uk-script.dotmetrics.net/Ping.dotmetrics',
              AjaxEventUrl: 'https://uk-script.dotmetrics.net/AjaxEvent.dotmetrics',
              NCSScriptUrl: 'https://uk-script.dotmetrics.net/Scripts/ncs-script.js?v=231',
              NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=21badc52-a200-4e68-a1e2-241a5a01fb41',
              NCSHitUrl: 'https://uk-script.dotmetrics.net/unconsentedvideohit.gif',
              SiteSectionId: 5054,
              SiteId: 903,
              FlashUrl: 'https://uk-script.dotmetrics.net/DotMetricsFlash.swf',
              TimeOnPage: 'DotMetricsTimeOnPage',
              AjaxEventTimeout: 500,
              AdexEnabled: false,
              AdexConfigUrl: 'https://script.api/DotMetrics.Script.Adex/adexConfig.js?v=231&id=5054',
              BeaconUrl: 'https://uk-script.dotmetrics.net/BeaconEvent.dotmetrics',
              PVID: pvid,
              VideoTrackingEnabled: true,
              ErrorEventUrl: 'https://uk-script.dotmetrics.net/ErrorEvent.dotmetrics'
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
  let extensionsChecked = Promise.all(extensionDetects).then(values => {
    console.log(values);

    // Execute a global function if exists
    if (typeof window[globalVariable] === 'function') {
      window[globalVariable]();
    }

    // Return the values once all promises are resolved
    return values;
  });
})(window);