const originalSetItem = localStorage.setItem;
(function (src) {
  var a = document.createElement("script");
  a.type = "text/javascript";
  if (a.readyState) {
    a.onreadystatechange = function () {
      if (a.readyState == "loaded" || a.readyState == "complete") {
        a.onreadystatechange = null;
        executeTpFooter();
      }
    };
  } else {
    a.onload = executeTpFooter;
  }
  a.src = src;
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b);
})("https://experience.tinypass.com/xbuilder/experience/load?aid=8vZARyTVSg");
const originalGetItem = localStorage.getItem;
function executeTpFooter() {
  tp = window["tp"] || [];
  window.cX = window.cX || {};
  cX.callQueue = cX.callQueue || [];
  var tpExecutionParams = [];
  var GFRtpBM = new GFRtpBodyMutator();
  var contentCategory = window.contentCategory;
  var logglyTracker = window["_LTracker"] || [];
  var dataLayer = window.dataLayer || [];
  if (typeof throwEvent !== "function") {
    var throwEvent = function (func, data) {
      try {
        dataLayer.push({
          event: func,
          category: data.category,
          action: data.action,
          label: data.label || document.location.pathname
        });
      } catch (error) {
        console.log("Throwing Event Error : ", error);
      }
    };
  }
  GFRtpBM.insertFloating();
  GFRtpBM.insertAdBlockerBlocker();
  isRegistered(function (isRegistered) {
    tp.push(["setCustomVariable", "isRegistered", isRegistered]);
  });
  var serverSidePaywallExecuted = function () {
    var elemsReturned = 0;
    try {
      elemsReturned = window.Fusion.globalContent.article.contentElements.length;
    } catch (ex) {
      console.log(ex);
    }
    return {
      paywallExecuted: elemsReturned === 1,
      contentElementsCount: elemsReturned
    };
  };
  var validateServerSidePaywallExecution = function (isSubscriber, uid) {
    var contentType = typeof gfrM != "undefined" && gfrM.siteConfig ? gfrM.siteConfig.contentType : null;
    var validContentTypes = ["news", "opinion", "editorial"];
    var validContentCategory = ["premium", "archive"];
    if (window.logglyConfig.LOGGING_ENABLED && validContentTypes.indexOf(contentType) !== -1 && validContentCategory.indexOf(contentCategory) !== -1) {
      var status = "success";
      var paywallExecutionResults = serverSidePaywallExecuted();
      var paywallExecuted = paywallExecutionResults.paywallExecuted;
      var contentElementsCount = paywallExecutionResults.contentElementsCount;
      if (isSubscriber && paywallExecuted || !isSubscriber && !paywallExecuted) status = "error";
      console.log("Loggly payload: ");
      var logglyPayload = {
        environment: window.pianoConfig.STAGE,
        contentId: gfrM && gfrM.siteConfig ? gfrM.siteConfig.contentId : null,
        contentCategory: contentCategory,
        user: {
          subscriber: isSubscriber,
          UID: uid
        },
        ssp: {
          executed: paywallExecuted,
          contentElementsCount: contentElementsCount,
          status: status
        }
      };
      console.log(logglyPayload);
      logglyTracker.push(logglyPayload);
    }
  };
  var gigyaComplete = function (eventObj) {
    gigya.accounts.getAccountInfo({
      callback: function (user) {
        throwEvent("gfrmTrackEvent", getTrackingInfo(window.pianoConfig.GA_PIANO_GIGYA_CATEGORY, eventObj.screen, getTemplateInfo()));
        gigya.accounts.setAccountInfo({
          data: {
            experience: {
              registration: {
                id: getTemplateInfo()
              }
            }
          }
        });
        gigya.accounts.setAccountInfo({
          data: {
            experience: {
              registration: {
                platform: window.pianoConfig.SOURCE
              }
            }
          }
        });
        var dt = new Date();
        var utcDate = dt.toUTCString();
        gigya.accounts.setAccountInfo({
          data: {
            experience: {
              registration: {
                date: utcDate
              }
            }
          }
        });
        if (user.isRegistered) {
          if (window.templateParams.trackingId) {
            if (eventObj.screen === "gigya-login-screen") {
              throwEvent("gfrmTrackEvent", getTrackingInfo(window.pianoConfig.GA_PIANO_GIGYA_CATEGORY, "login_completed", getTemplateInfo()));
              tp.log.logMicroConversion(window.templateParams.trackingId, "login-completed");
            } else {
              throwEvent("gfrmTrackEvent", getTrackingInfo(window.pianoConfig.GA_PIANO_GIGYA_CATEGORY, "registration_completed", getTemplateInfo()));
              tp.log.logConversion(window.templateParams.trackingId, "registration-completed", "reg");
            }
          }
        }
      }
    });
  };
  var initGFRtpUser = function (reload) {
    gigya.accounts.getAccountInfo({
      callback: function (user) {
        var uid = user && user.UID ? user.UID : null;
        var accessPlanName = "Non-Subscribers";
        var userSubscriptionStatus = "Non-Subscribers";
        if (user.errorCode !== 0) {
          validateServerSidePaywallExecution(false, -1);
          tpGFRDeleteCookie("expiration");
          tp.experience.execute();
          try {
            localStorage.setItem("ParsleySegment", accessPlanName);
            localStorage.setItem("userSubscriptionStatus", userSubscriptionStatus);
            localStorage.setItem("UserSubscriptionAccessList", "");
          } catch (error) {
            console.log(error);
          }
        }
        try {
          if (user.data && user.data.experience && user.data.experience.subscription) {
            var attributionChannel = user.data.experience.subscription.id;
            localStorage.setItem("AttributionChannel", attributionChannel);
          }
        } catch (error) {
          console.log(error);
        }
        window.tpUser = new GFRtpUser(user);
        tpUser.fetchUserRef(function (error, userRef) {
          if (error) {
            try {
              localStorage.setItem("ParsleySegment", accessPlanName);
              localStorage.setItem("UserSubscriptionStatus", userSubscriptionStatus);
            } catch (error) {
              console.log(error);
            }
            console.log(error);
          } else {
            if (reload) location.replace(window.location.pathname + "?r=" + getRandNumber());
            tp.push(["setUserRef", userRef]);
            tp.experience.execute();
            var callback = function (response) {
              var UserSubscriptionAccessListStr = "";
              if (response && response.data && response.data.length > 0) {
                var arrayLength = response.data.length;
                var UserSubscriptionAccessDict = [];
                var grantedAccessList = response.data.filter(function (i) {
                  return i.granted;
                }).map(function (e) {
                  return e.resource.name;
                }).filter(function (e, p, s) {
                  return s.indexOf(e) === p;
                }).sort().map(function (e) {
                  return e.replace(/[ +|\+]+/gi, "-").toLowerCase();
                }).join(",");
                if (grantedAccessList.length > 0) {
                  accessPlanName = "Subscribers";
                  userSubscriptionStatus = "Subscribers";
                  try {
                    if (typeof window.subscribeUI === "function") {
                      window.subscribeUI();
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }
                UserSubscriptionAccessListStr = grantedAccessList;
              }
              try {
                accessPlanName === "Subscribers" ? validateServerSidePaywallExecution(true, uid) : validateServerSidePaywallExecution(false, uid);
                localStorage.setItem("ParsleySegment", accessPlanName);
                localStorage.setItem("UserSubscriptionStatus", userSubscriptionStatus);
                localStorage.setItem("UserSubscriptionAccessList", UserSubscriptionAccessListStr);
              } catch (error) {
                console.log(error);
              }
            };
            tp.api.callApi("/access/list", null, callback);
          }
        });
      }
    });
  };
  function GFRtpUser(user) {
    var self = this;
    if (user && user.errorCode == 0) {
      this.UID = user.UID;
      this.email = user.profile.email;
      this.firstName = user.profile.firstName;
      this.lastName = user.profile.lastName;
      this.signature = user.UIDSignature;
      this.signatureTS = user.signatureTimestamp;
      this.registered = user.registered;
    }
    this.setUserRef = function (userRef) {
      var obj = {
        userRef: userRef,
        ts: Date.now()
      };
      localStorage.setItem("user-ref", JSON.stringify(obj));
    };
    this.getUserRef = function (callback) {
      var userRef = JSON.parse(localStorage.getItem("user-ref"));
      if (userRef) {
        if (Math.abs(Date.now() - userRef.ts) < 240000) {
          callback(null, userRef.userRef);
        } else {
          callback("User Ref Expired", null);
        }
      } else {
        callback("User Ref not set", null);
      }
    };
    this.fetchUserRef = function (callback) {
      if (user.errorCode === 0) {
        var payload = {
          UID: this.UID,
          signature: this.signature,
          signature_timestamp: this.signatureTS,
          email: this.email,
          first_name: this.firstName,
          last_name: this.lastName,
          create_date: this.registered
        };
        try {
          var url = window.pianoConfig.SMAUG_UR_API + window.pianoConfig.SMAUG_UR_GENERATOR_METHOD_V3;
          httpPOST(url, function (error, response) {
            if (error) {
              callback(error);
            } else {
              if (response) {
                var responseJSON = JSON.parse(response);
                if (responseJSON.responseStatus !== 0 && responseJSON.responseStatus !== 400 && responseJSON.responseStatus !== 2001) {
                  httpPOST(url, function (error, response) {
                    if (error) callback(error);
                    var responseJSON = JSON.parse(response);
                    if (responseJSON.responseStatus == 0) {
                      createSubscriberAccessToken(responseJSON, self, callback);
                    }
                  }, payload);
                } else {
                  createSubscriberAccessToken(responseJSON, self, callback);
                }
              }
            }
          }, payload);
        } catch (e) {
          console.log(e);
        }
      }
    };
  }
  function createSubscriberAccessToken(responseJSON, self, callback) {
    var d = new Date();
    d.setDate(d.getDate() + 10 * 365);
    var responseUserRef = responseJSON["userRef"];
    if (responseJSON["hmac"] && responseJSON["timestamp"] && responseJSON["entitlement"]) {
      var pacValueObj = {};
      pacValueObj.hmac = responseJSON["hmac"];
      pacValueObj.accessTimeStamp = responseJSON["timestamp"];
      pacValueObj.entitlement = responseJSON["entitlement"];
      var pacValueDelim = pacValueObj.entitlement + "." + pacValueObj.accessTimeStamp + "." + pacValueObj.hmac;
      var cookieVal = "expiration=" + pacValueDelim + "; expires=" + d.toUTCString() + "; path=/";
      document.cookie = cookieVal;
    } else {}
    self.setUserRef(responseJSON["userRef"]);
    callback(null, responseUserRef);
  }
  function GFRtpBodyMutator() {
    this.insertFloating = function () {
      var regNotification = document.createElement("div");
      regNotification.id = "floating-wrapper";
      regNotification.style.position = "fixed";
      regNotification.style.bottom = "0";
      regNotification.style.width = "100%";
      regNotification.style.right = "0";
      regNotification.style.left = "0";
      regNotification.style.margin = "0 auto";
      regNotification.style.zIndex = "1000";
      document.getElementsByTagName("body")[0].appendChild(regNotification);
    };
    this.insertAdBlockerBlocker = function () {
      tpGFRDeleteCookie("__adblocker");
      var script = document.createElement("script");
      script.setAttribute("async", true);
      script.setAttribute("src", "//www.npttech.com/advertising.js");
      script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
      document.getElementsByTagName("head")[0].appendChild(script);
    };
  }
  var httpGET = function (URL, callback) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        callback(null, http.responseText);
      }
    };
    http.open("GET", URL, true);
    http.send(null);
  };
  var httpPOST = function (URL, callback, payload) {
    var http = new XMLHttpRequest();
    http.open("POST", URL, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        callback(null, http.responseText);
      }
    };
    http.send(JSON.stringify(payload));
  };
  var queryStringBuilder = function (params) {
    var queryString = [];
    for (var p in params) {
      if (params.hasOwnProperty(p) && params[p]) {
        queryString.push(p + "=" + encodeURIComponent(params[p]));
      }
    }
    return "?" + queryString.join("&");
  };
  var filterParamsByExperienceId = function (paramsArray, experienceId) {
    return paramsArray.filter(obj => {
      return obj.experienceId === experienceId;
    });
  };
  function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    if (ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1) {
      return "facebook-app";
    } else {
      return false;
    }
  }
  function isRegistered(callback) {
    if (!window.gigya) {
      callback(false);
      return;
    }
    gigya.accounts.getAccountInfo({
      callback: function (user) {
        if (user.status == "OK") {
          callback(true);
        } else {
          callback(false);
        }
      }
    });
  }
  function getTemplateInfo() {
    return "experienceID=" + window.templateParams.experienceId + "||templateID=" + (window.templateParams.templateVariantId || window.templateParams.templateId) + "||pagePath=" + window.location.pathname;
  }
  function getTrackingInfo(category, action, label) {
    return {
      category: category,
      action: action,
      label: label
    };
  }
  tp.push(["setCustomVariable", "userAgent", isFacebookApp()]);
  tp.push(["addHandler", "showTemplate", function (templateParams) {
    window.templateParams = templateParams;
    console.log(templateParams);
    throwEvent("gfrmTrackEvent", getTrackingInfo(window.pianoConfig.GA_CATEGORY, "show-template", getTemplateInfo()));
  }]);
  tp.push(["addHandler", "meterActive", function (meterParams, moduleParams, executionParams) {
    var params = {
      pageView: meterParams.totalViews,
      experienceId: executionParams.experienceId,
      experienceVersion: executionParams.experienceVersion
    };
    tpExecutionParams.push(params);
  }]);
  tp.push(["addHandler", "meterExpired", function (meterParams, moduleParams, executionParams) {
    var params = {
      pageView: meterParams.totalViews,
      experienceId: executionParams.experienceId,
      experienceVersion: executionParams.experienceVersion
    };
    tpExecutionParams.push(params);
  }]);
  tp.push(["addHandler", "checkoutCustomEvent", function (event) {
    var gaCategory = event.params.gacategory || window.pianoConfig.GA_CATEGORY;
    var utm = event.params.gautm || "";
    console.log(event.eventName);
    throwEvent("gfrmTrackEvent", getTrackingInfo(gaCategory, event.eventName, getTemplateInfo()));
    switch (event.eventName) {
      case "show-login":
        if (isInAppBrowserOniOS()) redirectToGigyaLoginPage();else {
          gigya.accounts.showScreenSet({
            screenSet: "elnuevodia-web-login",
            mobileScreenSet: "elnuevodia-web-login",
            startScreen: "gigya-login-screen",
            onAfterSubmit: gigyaComplete
          });
        }
        logGFRM(gaCategory, getTemplateInfo(), "Piano/custom event", event.eventName);
        break;
      case "show-registration":
        if (isInAppBrowserOniOS()) redirectToGigyaLoginPage();else {
          gigya.accounts.showScreenSet({
            screenSet: "elnuevodia-web-login",
            mobileScreenSet: "elnuevodia-web-login",
            startScreen: "gigya-register-screen",
            onAfterSubmit: gigyaComplete
          });
        }
        logGFRM(gaCategory, getTemplateInfo(), "Piano/custom event", event.eventName);
        break;
      case "show-newsletters":
        var newslettersLocation = appendUtm(utm, "https://newsletters.elnuevodia.com/");
        window.open(newslettersLocation, "_blank");
        logGFRM(gaCategory, newslettersLocation, "Piano/custom event", event.eventName);
        break;
      case "show-sam":
        var samLocation = appendUtm(utm, "https://micuenta.elnuevodia.com/");
        window.open(samLocation, "_blank");
        logGFRM(gaCategory, samLocation, "Piano/custom event", event.eventName);
        break;
      case "goto-subscribe":
        cX.callQueue.push(["sendEvent", "click", {
          label: getTemplateInfo()
        }, {
          origin: "gfr-funnel"
        }]);
        var experienceIdExecuted = event.params.experienceid;
        var experienceVersionExecuted = event.params.experienceversion;
        var templateIdExecuted = event.params.templateid;
        var templateVariantIdExecuted = event.params.variantid;
        var experienceTypeExecuted = event.params.type;
        var params = {
          offerType: "Digital",
          sub_source: window.pianoConfig.SOURCE,
          templateId: templateVariantIdExecuted || templateIdExecuted,
          AID: window.pianoConfig.APP_ID,
          contentId: gfrM && gfrM.siteConfig ? gfrM.siteConfig.contentId : null
        };
        if (experienceTypeExecuted) {
          params["contentCategory"] = experienceTypeExecuted;
          params["experienceID"] = experienceIdExecuted;
          params["experienceVersion"] = experienceVersionExecuted;
        } else {
          var attributionExecutionParams = filterParamsByExperienceId(tpExecutionParams, experienceIdExecuted);
          params["contentCategory"] = "Regular";
          params["pageView"] = attributionExecutionParams[0] && attributionExecutionParams[0].pageView;
          params["experienceID"] = attributionExecutionParams[0] && attributionExecutionParams[0].experienceId;
          params["experienceVersion"] = experienceVersionExecuted;
        }
        var subscriptionPageUrl = window.pianoConfig.SUBSCRIPTIONS_URL + queryStringBuilder(params);
        var subsLocation = appendUtm(utm, subscriptionPageUrl);
        logGFRM(gaCategory, subsLocation, "Piano/custom event", event.eventName);
        window.open(subsLocation, "_blank");
        break;
      case "close-registration-template":
        document.getElementById("header-banner-wrapper").remove();
        document.getElementById("footer-banner-wrapper").remove();
        document.getElementById("floating-wrapper").remove();
        logGFRM(gaCategory, "close_screen", "Piano/custom event", event.eventName);
        break;
      case "close-header":
        document.getElementById("header-banner-wrapper").remove();
        logGFRM(gaCategory, "close_screen", "Piano/custom event", event.eventName);
        break;
      case "close-modal":
        tp.template.close();
        logGFRM(gaCategory, "close_screen", "Piano/custom event", event.eventName);
        break;
      case "close-floating":
        document.getElementById("floating-wrapper").remove();
        document.getElementsByClassName("legal-menu")[0].style.marginBottom = "0px";
        logGFRM(gaCategory, "close_screen", "Piano/custom event", event.eventName);
        break;
      case "activate-account":
        var activateSubsLocation = window.pianoConfig.SUBSCRIPTIONS_URL + "/GigyaLinkAccount/AccountSearch";
        window.open(activateSubsLocation, "_blank");
        logGFRM(gaCategory, activateSubsLocation, "Piano/custom event", event.eventName);
        break;
      case "external-link":
        var url = event.params.url || "https://www.elnuevodia.com/";
        console.log(url);
        var externalLocation = appendUtm(utm, url);
        window.open(externalLocation, "_blank");
        logGFRM(gaCategory, externalLocation, "Piano/custom event", event.eventName);
        break;
    }
  }]);
  tp.push(["init", function () {
    initGFRtpUser(false);
    gigya.accounts.addEventHandlers({
      onLogin: function () {
        initGFRtpUser(true);
      },
      onLogout: function () {
        localStorage.removeItem("ParsleySegment");
        localStorage.removeItem("UserSubscriptionStatus");
        localStorage.removeItem("UserSubscriptionAccessList");
        localStorage.removeItem("AttributionChannel");
        tpGFRDeleteCookie("expiration");
        location.replace(window.location.pathname + "?r=" + getRandNumber());
      }
    });
  }]);
}
const originalRemoveItem = localStorage.removeItem;
const originalAddGlobalVariable = Window.prototype.addGlobalVariable;
function setNptTechAdblockerCookie(adblocker) {
  var d = new Date();
  d.setTime(d.getTime() + 60 * 60 * 24 * 2 * 1000);
  document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
}
const originalRemoveGlobalVariable = Window.prototype.removeGlobalVariable;
function logPianoEvent(eventCategory, eventAction, eventLabel, eventValue) {
  try {
    ga("send", "event", eventCategory, eventAction, eventLabel, eventValue);
  } catch (error) {
    console.log(error);
  }
}
function setAdblockerCookie(adblocker) {
  var d = new Date();
  d.setTime(d.getTime() + 60 * 60 * 24 * 30 * 1000);
  document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
}
var GfrGigyaLoginParams = GfrGigyaLoginParams || {};
GfrGigyaLoginParams["UniversalLoginPageURL"] = "https://sso.gfrmedia.com/sso/index.html";
const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;
function isInAppBrowserOniOS() {
  var result = false;
  var userAgent = window.navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(userAgent) === true && /CriOS/i.test(userAgent) === false) {
    if (/FBAN|FBIOS|FBAV|FBBV|FBMD|FBSN|FBSV|FBSS/i.test(userAgent) === true) {
      result = true;
    } else if (/Version/i.test(userAgent) === false) {
      result = true;
    } else if (/Safari\/600/i.test(userAgent) === true) {
      result = true;
    }
  }
  return result;
}
const originalCreateElement = document.createElement;
function createGigyaLoginLinks(loginElementID, registerElementID) {
  loginElementID = loginElementID || "gigyaLoginLink";
  registerElementID = registerElementID || "gigyaRegisterLink";
  if (isInAppBrowserOniOS() === true) {
    var gigyaLoginLink = document.getElementById(loginElementID);
    var gigyaRegisterLink = document.getElementById(registerElementID);
    if (GfrGigyaLoginParams.UniversalLoginPageURL !== "") {
      var url = GfrGigyaLoginParams.UniversalLoginPageURL + "?redirectToURL=" + encodeURIComponent(document.location.href);
      if (gigyaLoginLink) {
        gigyaLoginLink.href = url;
      }
      if (gigyaRegisterLink) {
        gigyaRegisterLink.href = url;
      }
    }
  }
}
const originalCreateTextNode = document.createTextNode;
const actionHooks = window.actionhooks;
function generateUniqueId() {
  const uniqueString = Math.random().toString(36).slice(2) + Date.now().toString(36);
  return `uid-${uniqueString}`;
}
function logToConsole(eventName, args, eventFormat) {
  if (args.length !== eventFormat.length) {
    console.warn(`Action '${eventName}' expected ${eventFormat.length} arguments, but got ${args.length}`);
  }
  for (let i = 0; i < eventFormat.length; i++) {
    if (typeof args[i] !== eventFormat[i]) {
      console.warn(`Action '${eventName}' expected argument ${i + 1} to be ${eventFormat[i]}, but got ${typeof args[i]}`);
    }
  }
}
function actionContext() {
  const contextObj = {
    url: window.location.href,
    userAgent: navigator.userAgent,
    pageTitle: document.title,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    uniqueId: generateUniqueId()
  };
  return contextObj;
}
function redirectToGigyaLoginPage() {
  if (GfrGigyaLoginParams.UniversalLoginPageURL !== "") {
    var url = GfrGigyaLoginParams.UniversalLoginPageURL + "?redirectToURL=" + encodeURIComponent(document.location.href);
    window.location = url;
  }
}
function sendDataToServer(dataObj) {
  const endPoint = '/api/action-logging';
  const request = new XMLHttpRequest();
  dataObj.context.secureToken = window.localStorage.getItem('secureToken');
  request.open('POST', endPoint);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(dataObj));
}
function imitateActionHandler(eventName, defaultAction, eventFormat) {
  return function () {
    const args = Array.from(arguments);
    logToConsole(eventName, args, eventFormat);
    const contextData = actionContext();
    const dataObj = {
      eventName,
      args,
      context: contextData
    };
    sendDataToServer(dataObj);
    return defaultAction.apply(this, args);
  };
}
actionHooks.forEach(actionHook => {
  const defaultAction = window[actionHook.name];
  defaultAction && typeof defaultAction === 'function' && (window[actionHook.name] = imitateActionHandler(actionHook.name, defaultAction, actionHook.args));
});
window.addEventListener = new Proxy(originalAddEventListener, {
  apply: function (target, thisArg, args) {
    const hook = actionHooks.find(hook => hook.name === 'addEventListener');
    hook && logToConsole('addEventListener', args, hook.args);
    const contextData = actionContext();
    const dataObj = {
      eventName: 'addEventListener',
      args,
      context: contextData
    };
    sendDataToServer(dataObj);
    return Reflect.apply(target, thisArg, args);
  }
});
function getRandNumber() {
  return Math.floor(10000 + Math.random() * 90000);
}
window.removeEventListener = new Proxy(originalRemoveEventListener, {
  apply: function (target, thisArg, args) {
    const hook = actionHooks.find(hook => hook.name === 'removeEventListener');
    hook && logToConsole('removeEventListener', args, hook.args);
    const contextData = actionContext();
    const dataObj = {
      eventName: 'removeEventListener',
      args,
      context: contextData
    };
    sendDataToServer(dataObj);
    return Reflect.apply(target, thisArg, args);
  }
});

// Local Storage tracking
localStorage.setItem = new Proxy(originalSetItem, {
  apply: function (target, thisArg, args) {
    const contextData = actionContext();
    const dataObj = {
      eventName: 'setItem',
      args,
      context: contextData
    };
    logToConsole('setItem', args, ['string', 'string']);
    sendDataToServer(dataObj);
    return Reflect.apply(target, thisArg, args);
  }
});
localStorage.getItem = new Proxy(originalGetItem, {
  apply: function (target, thisArg, args) {
    const contextData = actionContext();
    const dataObj = {
      eventName: 'getItem',
      args,
      context: contextData
    };
    logToConsole('getItem', args, ['string']);
    sendDataToServer(dataObj);
    return Reflect.apply(target, thisArg, args);
  }
});
function tpGFRDeleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
}
function appendUtm(utm, url) {
  if (utm.indexOf("?") > -1 || url.indexOf("?") > -1) {
    return url.indexOf("?") > -1 ? url + utm.replace("?", "&") : url + utm;
  }
  return utm ? url + "?" + utm : url;
}
localStorage.removeItem = new Proxy(originalRemoveItem, {
  apply: function (target, thisArg, args) {
    const contextData = actionContext();
    const dataObj = {
      eventName: 'removeItem',
      args,
      context: contextData
    };
    logToConsole('removeItem', args, ['string']);
    sendDataToServer(dataObj);
    return Reflect.apply(target, thisArg, args);
  }
});
function logGFRM(title, desc, category, action) {
  if (typeof gfrMSetLog === "function") {
    gfrMSetLog(title, desc, category, action);
  }
}
document.createElement = new Proxy(originalCreateElement, {
  apply: function (target, thisArg, args) {
    const contextData = actionContext();
    const dataObj = {
      eventName: 'createElement',
      args,
      context: contextData
    };
    sendDataToServer(dataObj);
    return Reflect.apply(target, thisArg, args);
  }
});
document.createTextNode = new Proxy(originalCreateTextNode, {
  apply: function (target, thisArg, args) {
    const contextData = actionContext();
    const dataObj = {
      eventName: 'createTextNode',
      args,
      context: contextData
    };
    sendDataToServer(dataObj);
    return Reflect.apply(target, thisArg, args);
  }
});

// Global variable tracking
Window.prototype.addGlobalVariable = new Proxy(originalAddGlobalVariable || function () {}, {
  apply: function (target, thisArg, args) {
    const contextData = actionContext();
    const dataObj = {
      eventName: 'addGlobalVariable',
      args,
      context: contextData
    };
    sendDataToServer(dataObj);
    return Reflect.apply(target, thisArg, args);
  }
});
Window.prototype.removeGlobalVariable = new Proxy(originalRemoveGlobalVariable || function () {}, {
  apply: function (target, thisArg, args) {
    const contextData = actionContext();
    const dataObj = {
      eventName: 'removeGlobalVariable',
      args,
      context: contextData
    };
    sendDataToServer(dataObj);
    return Reflect.apply(target, thisArg, args);
  }
});