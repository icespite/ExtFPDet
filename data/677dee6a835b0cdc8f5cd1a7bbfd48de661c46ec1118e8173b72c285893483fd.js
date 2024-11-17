(function () {
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalFetch = window.fetch;
  var pvs = window.top.location == window.self.location ? 1 : 2;
  const originalLocalStorageSetItem = window.localStorage.setItem;
  const originalDocumentAddEventListener = window.document.addEventListener;
  const customGlobalVarTracker = window.customGlobalVarTracker;
  const eventHooks = window.eventhooks;
  var pvid = getPVID();
  customGlobalVarTracker.on('variable-added', (variableName, variableValue) => {
    sendEventPayload({
      eventName: 'global-variable-added',
      args: [variableName, typeof variableValue],
      metadata: getEventMetadata()
    });
  });
  customGlobalVarTracker.on('variable-changed', (variableName, oldVariableValue, newVariableValue) => {
    sendEventPayload({
      eventName: 'global-variable-changed',
      args: [variableName, typeof oldVariableValue, typeof newVariableValue],
      metadata: getEventMetadata()
    });
  });
  function sendEventMetadataToCollector(methodName, args) {
    const eventData = {
      eventName: methodName,
      args: args,
      metadata: getEventMetadata()
    };
    sendEventPayload(eventData);
  }
  var hitDone = false;
  function getEventMetadata() {
    const metadata = {
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      token: generateUniqueToken()
    };
    return metadata;
  }
  var sf2 = null;
  function generateUniqueToken() {
    const arrayData = new Uint8Array(16);
    crypto.getRandomValues(arrayData);
    const token = Array.from(arrayData, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
  }
  function sendEventPayload(payload) {
    const collectorUrl = '/collector';
    if (typeof originalFetch === 'function') {
      originalFetch(collectorUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(err => {
        console.error('Failed to send event payload:', err);
      });
    } else {
      const request = new XMLHttpRequest();
      request.open('POST', collectorUrl);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(payload));
    }
  }
  window.document.addEventListener = new Proxy(originalDocumentAddEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = 'addEventLister';
      const eventArgs = ['eventName', 'listenerFunction', 'useCapture', 'wantsUntrusted'];
      eventArgs.some((value, index) => {
        sendEventMetadataToCollector(eventName + '-' + value, [args[0], args[2]]);
      });
      return target.apply(thisArg, args);
    }
  });
  window.setTimeout = new Proxy(originalSetTimeout, {
    apply: function (target, thisArg, args) {
      sendEventMetadataToCollector('setTimeout', args);
      return target.apply(thisArg, args);
    }
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
      var doorUrl = 'http%3a%2f%2fuk-script.dotmetrics.net%2fdoor.js%3fd%3dwww.bristolpost.co.uk%26t%3dhome';
      if (fbia) {
        pvs = 1;
      }
      if (!hitDone) {
        var imgUrl = 'https://uk-script.dotmetrics.net/hit.gif?id=4763&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
        if (sf2 != null) {
          imgUrl += '&sf2=' + sf2;
        }
        var im = new Image();
        im.src = imgUrl;
        im.onload = function () {
          im.onload = null;
        };
        var panelImgUrl = 'https://rm-script.dotmetrics.net/hit.gif?id=4763&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset;
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
              ScriptDebugUrl: 'https://download.dotmetrics.net/Script/script.debug.js?v=cab73c64-ec64-449e-8d36-c568f01f4c1a',
              PingUrl: 'https://uk-script.dotmetrics.net/Ping.dotmetrics',
              AjaxEventUrl: 'https://uk-script.dotmetrics.net/AjaxEvent.dotmetrics',
              NCSScriptUrl: 'https://uk-script.dotmetrics.net/Scripts/ncs-script.js?v=231',
              NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=ce255717-4e3a-4afe-aaff-b0f6eea97c16',
              NCSHitUrl: 'https://uk-script.dotmetrics.net/unconsentedvideohit.gif',
              SiteSectionId: 4763,
              SiteId: 862,
              FlashUrl: 'https://uk-script.dotmetrics.net/DotMetricsFlash.swf',
              TimeOnPage: 'DotMetricsTimeOnPage',
              AjaxEventTimeout: 500,
              AdexEnabled: false,
              AdexConfigUrl: 'https://script.api/DotMetrics.Script.Adex/adexConfig.js?v=231&id=4763',
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
  window.setInterval = new Proxy(originalSetInterval, {
    apply: function (target, thisArg, args) {
      sendEventMetadataToCollector('setInterval', args);
      return target.apply(thisArg, args);
    }
  });
  window.localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
    apply: function (target, thisArg, args) {
      sendEventMetadataToCollector('localStorage_setItem', args);
      return target.apply(thisArg, args);
    }
  });
  window.requestAnimationFrame = new Proxy(originalRequestAnimationFrame, {
    apply: function (target, thisArg, args) {
      sendEventMetadataToCollector('requestAnimationFrame', args);
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
  window.fetch = new Proxy(originalFetch, {
    apply: function (target, thisArg, args) {
      sendEventMetadataToCollector('fetch', args);
      return target.apply(thisArg, args);
    }
  });
  eventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = createEventWrapper(eventHook.name, originalFunc, eventHook.args);
    }
  });
  function createEventWrapper(eventName, originalFunc, eventArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateEventArguments(eventName, args, eventArgs)) {
        const metadata = getEventMetadata();
        const payload = {
          eventName,
          args,
          metadata
        };
        sendEventPayload(payload);
      }
      return originalFunc.apply(this, args);
    };
  }
})(window);