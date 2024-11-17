(()=> {
const loc = window.location;
const exceptions = ["prod-proxy.tm-aws.com","localhost"];
if (exceptions.includes(loc.hostname)) {return;}
if (loc.hostname !== 'www.nottinghampost.com') {
window.location.replace(`https://www.nottinghampost.com${loc.pathname}`);
}
})();;

/*!
* $script.js JS loader & dependency manager
* https://github.com/ded/script.js
* (c) Dustin Diaz 2014 | License MIT
*/
(function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()})("$script",function(){function p(e,t){for(var n=0,i=e.length;n<i;++n)if(!t(e[n]))return r;return 1}function d(e,t){p(e,function(e){return!t(e)})}function v(e,t,n){function g(e){return e.call?e():u[e]}function y(){if(!--h){u[o]=1,s&&s();for(var e in f)p(e.split("|"),g)&&!d(f[e],g)&&(f[e]=[])}}e=e[i]?e:[e];var r=t&&t.call,s=r?t:n,o=r?e.join(""):t,h=e.length;return setTimeout(function(){d(e,function t(e,n){if(e===null)return y();e=!n&&e.indexOf(".js")===-1&&!/^https?:\/\//.test(e)&&c?c+e+".js":e;if(l[e])return o&&(a[o]=1),l[e]==2?y():setTimeout(function(){t(e,!0)},0);l[e]=1,o&&(a[o]=1),m(e,y)})},0),v}function m(n,r){var i=e.createElement("script"),u;i.onload=i.onerror=i[o]=function(){if(i[s]&&!/^c|loade/.test(i[s])||u)return;i.onload=i[o]=null,u=1,l[n]=2,r()},i.async=1,i.src=h?n+(n.indexOf("?")===-1?"?":"&")+h:n,t.insertBefore(i,t.lastChild)}var e=document,t=e.getElementsByTagName("head")[0],n="string",r=!1,i="push",s="readyState",o="onreadystatechange",u={},a={},f={},l={},c,h;return v.get=m,v.order=function(e,t,n){(function r(i){i=e.shift(),e.length?v(i,r):v(i,t,n)})()},v.path=function(e){c=e},v.urlArgs=function(e){h=e},v.ready=function(e,t,n){e=e[i]?e:[e];var r=[];return!d(e,function(e){u[e]||r[i](e)})&&p(e,function(e){return u[e]})?t():!function(e){f[e]=f[e]||[],f[e][i](t),n&&n(r)}(e.join("|")),v},v.done=function(e){v([null],e)},v});

!function(){return function e(n,r,t){function o(u,f){if(!r[u]){if(!n[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(i)return i(u,!0);var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d}var a=r[u]={exports:{}};n[u][0].call(a.exports,function(e){return o(n[u][1][e]||e)},a,a.exports,e,n,r,t)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<t.length;u++)o(t[u]);return o}}()({1:[function(e,n,r){"use strict";!function(){window.$css=function(e,n){var r=document.createElement("link");r.rel="stylesheet",-1===e.indexOf("v=")&&(e=e+(-1===e.indexOf("?")?"?":"&")+"v="+window.TMCONFIG.frontendVersion),r.href=e,n&&(r.onload=n),document.getElementsByTagName("HEAD")[0].appendChild(r)}}()},{}]},{},[1]);
//# sourceMappingURL=cssloader.min.js.map;

window.dataLayer = [];
;

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M3TH25P');;

if(!window.Promise || !window.IntersectionObserver) {
var xhrRequest = new XMLHttpRequest();
var timer;
xhrRequest.open('GET', 'https://s2-prod.nottinghampost.com/@trinitymirrordigital/chameleon-polyfills/js/index.min.js?v=09d273e02d515692d7cbcc98aa75b72a', false);
xhrRequest.onreadystatechange = function() {
if (xhrRequest.readyState === 4) {
var polyfills = document.createElement("script");
polyfills.appendChild(document.createTextNode(xhrRequest.responseText));
document.head.appendChild(polyfills);
window.clearTimeout(timer);
xhrRequest = null;
}
};
xhrRequest.send(null);
window.setTimeout(function () {
if (xhrRequest && xhrRequest.readyState !== 4 && typeof xhrRequest.abort === 'function') {
xhrRequest.abort();
xhrRequest = null;
}
}, 15000);
};

TMCONFIG = {"platform":"ronionals","publicationId":11,"topSectionId":386,"homepageId":386,"sectionAncestorsIDs":[386],"publication":"nottinghampost","frontendRoot":"https://s2-prod.nottinghampost.com","frontendVersion":"1515491370","publicSectionParams":{"googleAnalytics.optimizeContainerID":"GTM-MF7GP8J","chartbeatHeadScriptEnabled":"true","optaLiveFootballScoreCss":"https://secure.widget.cloud.opta.net/v3/css/v3.core.opta-widgets.css","videoAutoplayTimeout":"4","partner.pipeline.end-date-time":"24/07/2018 00:00","ias.pet.v2.enabled":"false","commercial.integrations.taboola.enabled":"true","partner.weather.targetUrl":"https://weather.com/redir?par=tm_nottinghampost_widget&page=today&locale=en-GB&id=52.954783,-1.158109","partner.quicklinks.rich":"true","gtmFbiaContainerId":"GTM-PNLXFZS","commentsCssBundled":"true","commercial.screen.sizes.minimum.width":"3840,1920,1500,1360,1200,1024,728,667,568,414,375","partner.ga.impressionTrack":"true","optaLiveFootballScoreJs":"https://secure.widget.cloud.opta.net/v3/v3.opta-widgets.js","partner.madgex.hot-job-url":"/fish4data","partner.quicklinks.basic":"true","video.ad.request.timeout.desktop":"5000","displayHeaderBiddingTimeout":"5000","partner.ga.clickTrack":"true","video.ad.request.timeout.mobile":"5000","converse.widget.enable":"true","googleAnalyticsAccountIdGoogle":"UA-110513849-45","felizEndpoint":"https://feliz-web.data.tm-awx.com/smile-web.min.js","partner.pipeline.start-date-time":"24/05/2018 10:00","lazy.load.ads.offset":"300","iOSAppId":"1322019846","gtmClientIdEndpoint":"https://stmg-prod.mirror.co.uk/analytics.config.json","search.googleCustomSearchEngineId":"015440420724022033189:hmifmuod28s","aylTimeout":"12000","converse.isEventLoaded":"true","partner.masthead.takeover":"true","lazy.load.ads":"false","floatAndParkCloseButtonDelaySec":"10","communicatorEndpoint":"https://e.nottinghampost.com/interface/list.php","partner.campaign.name":"pipeline","taboola.desktop.campaign":"exchange","scrollDepthTrack":"true","partner.quicklinks.discountUrl":"http://discountcode.mirror.co.uk/","gtmContainerId":"GTM-M3TH25P","partner.quicklinks.bar":"true","topBoxRecommendation.enabled":"true","hide.slot.on.first.page.view":"false","pancake.modifications.section":"[{\"group\":\"featuredStories\",\"index\":0,\"max\":7},{\"group\":\"featuredStories\",\"index\":1,\"max\":9}]","chronos.live-centre.url":"https://livecentreps-cdn-neptune-prod.tm-awx.com","partner.madgex.hot-jobs":"true","partner.ga.customDimension":"true","taboola.mobile.campaign":"organic","optaSubscriptionId":"a0388ad77c1977dc16697ca9c747dd0a"},"features":{"showVpaidControls":"true","amazon.waitConsent":"true","pubmaticIdEnabled":"true","consentDate":"06/08/2021","thirtythreeacrossDisplayPrebidEnabled":"false","jwRtdEnabled":"true","prebidLibrary":"false","amp.cmpCollapsableBtn":"true","authUI":"true","mantisRecommender.useCommonAdunit":"true","hideAndSeek.baseApiUrl":"https://d20eutak7bpup8.cloudfront.net","taboolaNonConsented":"true","openxDisplayPrebidEnabled":"false","navWithArticle.enabled":"true","useNewPreferenceCentre":"true","enableInternalRecaptchaValidation":"true","pubmaticIdDisabled":"false","cmpHostName":"nottinghampost.com","fbia.mantisRecommender":"true","RRET-227.cutOffDate":"2020-06-30T10:30:00","prebidUseTestRuntime":"true","bookmarksBaseUrl":"https://5yc6ykd9ei.execute-api.us-east-1.amazonaws.com/prod/api","enableSlideInSkinnySignUp":"true","amazonTagEnabled":"true","mantisRecommender.recommenderMaxMpuNumber":"10","mantisRecommender.autoplayInterval":"5000","hideAndSeekEnabled":"false","videoPlaylistEnabled":"true","domain":"nottinghampost.com","profileMenu":"true","ampVideoCacheBuster":"true","adHiddenLoading":"true","mantisRecommender.enableOnErrorPages":"true","sovrnDisplayPrebidEnabled":"false","video.header.bidding.enabled":"false","authUI.default":"true","webPushNotifications.appKey":"60ZKPmuZRUOUDUO8UkoO9w","newslettersURL":"https://communicatoremail.com/IN/DCF/Ad9Bw6ZcmPSmMwDi7On4yR/","mantisRecommender.underimageSlot":"true","adServedMastheadStripEnabled":"true","flagsFromDataLayerForFBIA":"true","irisClientToken":"1TR15X3XJ12S3S7","spotxVideoPrebidEnabled":"false","openxVideoPrebidEnabled":"false","amp.stickyAdRefresh":"90","ixVideoPrebidEnabled":"true","globalTrayEnabled":"true","mantisRecommender.limit":"20","jwRtdAuctionDelay":"300","delayAdsUntilCMP":"true","preloadFonts":"true","PWA.enable":"true","replaceMobileNativeWithAdSlot":"true","readNextEmbeds":"true","removeSSO":"true","tripleliftDisplayPrebidEnabled":"false","video.ctpFloatAndPark":"true","felix.endpoint":"https://feliz-amp.data.tm-awx.com/config.json","convoStarterEnabled":"true","mantisRecommender.stopPageSwipes":"true","adFixedMobileBottomSticky":"true","xandrDisplayPrebidEnabled":"false","consentText":"We use your sign-up to provide content in ways you’ve consented to and improve our understanding of you. This may include adverts from us and third parties based on our knowledge of you. ","mediaGridDisplayPrebidEnabled":"false","aylDisableTag":"true","recommendations":"https://mab.data.tm-awx.com/rhs","convergeDisplayPrebidEnabled":"false","mailingListApiBaseUrl":"https://mailinglistapi.data-services.tm-awx.com","publicationTimezone":"Europe/London","accountHubEnabled":"true","emxDisplayPrebidEnabled":"false","authUI.publicationID":"nottinghampost","mantisRecommender.mpuPositionsStart":"1","bundledCss":"false","IASVisRestrictToGeo":"UK-IE","photoStoryExperiment":"true","mantisRecommender.newzitEnabled":"false","tcfVersion":"2","outstreamPlayerId":"114291","richaudienceSkinsPrebidEnabled":"true","codesplit":"false","irisTvEnabled":"true","converse.domain.url":"https://converse.nottinghampost.com","nocodesplit":"true","emxVideoPrebidEnabled":"false","mantisRecommender.recommenderMaxRhcNumber":"2","aylBackfill":"true","mantisRecommender.recommenderMaxLbNumber":"4","delayAdsUntilConsented":"true","newsletterSiteName":"NottinghamshireLive","ovpEnabled":"true","embeddedSearchEnabled":"true","videojs.normal.load.enabled":"true","webPushNotifications.vapidKey":"BLyxEPa2wJ2xGLG3UUrpt1jeAGBpNeB8V3tf6DpWk02bvDMALwmOBF4vnN_LufUN_DVWNBSyijC0RpFCUiIOtVA=","amp.mantisRecommender":"true","accountHubVersion":"ad7009b1304b67c8714fcfefe5dea39fdf7461a3","loginRadius":"true","readNextRecommendation":"https://recommendations.data.tm-awx.com/fallback","webPushNotifications.token":"MTo2MFpLUG11WlJVT1VEVU84VWtvTzl3OkRzNkw1dkJZVU4zUTkxSm0yeklFOERwLU9ZUDZQdFhfbU5PLVdUblpOY1U","mantisRecommenderReplacementRHCMPUEnabled":"false","improvedigitalDisplayPrebidEnabled":"false","authUI.reCaptchaKey":"6LdSRW8cAAAAAMrIRm3jyY2iN9JLy8U2wPDAi7Nq","tripleliftVideoPrebidEnabled":"false","gumgumDisplayPrebidEnabled":"true","video.jwplayer.iframe.norec.playerId":"Ou8DoFgF","ozoneVideoPrebidEnabled":"true","ozoneAllowedKeys":"oz_gmpd_crid,oz_gmpd,oz_gmpd_adid,oz_winner,oz_gmpd_adomain,oz_gmpd_pb_r,oz_gmpd_adv","outstreamPlayerROW":"taboola","mantisIdEnabled":"true","verizonDisplayPrebidEnabled":"false","newslettersBaseUrl":"https://e.nottinghampost.com","video.jwplayer.mobile.autoplay":"true","amp.cmpDisableExposesTcfApi":"false","jwplayer.float.mode.always":"false","richaudienceDisplayPrebidEnabled":"true","ppidEnabled":"true","apiCommentCountEnabled":"true","fundingChoicesEnabled":"true","viafouraSectionUuid":"00000000-0000-4000-8000-0cd0ec02c1a6","newslettersUIVersion":"3e2e344555334e76a72a7dae0d60955e83f7e111","prebidAds":"true","video.jwplayer.iframe.playerId":"9O9Neltj","aylReplaceSlots":"true","newzit.enabled":"false","liveCommentsEnabled":"true","video.jwplayer.norec.playerId":"7q3OBVt0","lotameMantisDisabled":"false","massDisplayPrebidEnabled":"true","felizRhsRecommendations":"true","teadsAnalytics":"true","commentsEnabled":"true","mantisRecommender.autoplay":"true","disableInlineSkinnySignup":"false","outstreamPlayerEnabled":"true","taboolaDoubleLoaderEnabled":"false","chameleon.cookiePolicy.enabled":"false","mvtTests.googleOptimizeId":"cS4qCHIHT82OYVsAEiaj6g","tag.amphtml.enabled":"true","googleOneTap":"true","bookmarksUIVersion":"2cbcfb15bf19770b7b8e3e9cabfcb546d0e98cad","aylSlot3":"true","aylSlot2":"true","ix.wrapper":"true","smartAdServerVideoPrebidEnabled":"false","debounceDataLayer":"true","oneTapNewsletter":"true","PWA":"{\"trackOffline\":true,\"cacheFirst\":{\"modalTimeout\":2000},\"combinedPrompt\":true,\"scope\":\"/\",\"options\":{\"pushStyle\":\"headline\",\"pushSticky\":true},\"subsets\":[{\"homepage\":\"/all-about/nottingham-forest-fc\",\"tag\":\"Nottingham Forest FC\",\"manifest\":\"all-about/nottingham-forest-fc/manifest.json\",\"title\":\"Nottingham Forest FC\"},{\"homepage\":\"/all-about/notts-county-fc\",\"tag\":\"Notts County FC\",\"manifest\":\"all-about/notts-county-fc/manifest.json\",\"title\":\"Notts County FC\"}]}","pubmaticVideoPrebidEnabled":"false","prebidTestLibrary":"false","bundledJS":"true","amp.readmore.link.target.enabled":"true","readNextRecommendedGoLive":"2023-06-20","video.mobile.disabledAutoplayGeoLocations":"IE","readNextMobileFeliz":"true","prebid.waitConsent":"true","partner.quicklinks.bar":"true","justpremiumDisplayPrebidEnabled":"true","amazonVideoTagEnabled":"true","mvtTests":"[]","nonIframeMantisRecommender":"true","webPushNotifications.serviceName":"airship","publicationId":"fa81612f-a64a-4c51-9685-5c6961993408","hideAndSeek.termsAndCondUrl":"https://www.mirror.co.uk/hs-terms-conditions","lotameLightningTagV2":"true","aylReplace":"true","pubmaticDisplayPrebidEnabled":"false","hideAndSeekImage":"https://d2ypkube9fje7d.cloudfront.net/@trinitymirrordigital/hide-and-seek/images/football/pound-coin-clickme.gif","enableMagicLink":"true","adslotsFixedSize":"true","hideAndSeekTrialEnabled":"false","xandrPSPVideoPrebidEnabled":"true","criteoDisplayPrebidEnabled":"false","mantisRecommender.useIntTracking":"true","chatEnabled":"true","outstreamPlayerUKEU":"taboola","enableAboutTopics":"true","viafouraComments":"true","convergeVideoPrebidEnabled":"false","video.jwplayer.playerId":"cRfP93R3","mediaGridVideoPrebidEnabled":"false","amp.taboola.outstream.enabled":"true","mantisRecommender.useCommonAdunitBottom":"true","mantisRecommender.hbEnabled":"true","collectiveDisplayPrebidEnabled":"false","fbia.converse.enabled":"true","modularCss":"true","manualReconsent":"1.0","domainRedirectExceptions":"prod-proxy.tm-aws.com","nobidDisplayPrebidEnabled":"false","bookmarksEnabled":"true","M101.apiUrl":"https://partner-widget-api-prod.tm-awx.com/monitizer/1432/compare/prices/gbp_en","publicationName":"Nottinghamshire Live","video.jwplayer.enabled":"true","loadIrisManually":"true","photoStoryGalleryClickThrough":"true","disableAdvertMaxHeight":"true","viafouraEnabled":"true","taboolaOutstreamBypassGAM":"false","xandrPSPDisplayPrebidEnabled":"true","mantisRecommender.enableOnTopicPage":"true","chartbeatHeadlinePageTypes":"[\"home\",\"topic\",\"channel\",\"section\"]","breakingNewsPull":"true","nobidVideoPrebidEnabled":"false","mantisRecommenderReplacementRHCMPUDisabled":"true","magniteDisplayPrebidEnabled":"false","smallerFloatParkVideo":"false","amazon.fpd.signals.enabled":"true","viafouraNewCdn":"true","tripleliftNativePrebidEnabled":"false","richaudienceVideoPrebidEnabled":"true","swipeNavigation.endpoint":"https://mab.data.tm-awx.com/pwa-swipe","ampQuantcastCMPEnabled":"true","ozoneOutstreamPrebidEnabled":"true","loginRadiusAPIKey":"415307d0-d73a-49d3-9958-1c42c71165ee","readMoreWithImage":"true","xandrVideoMaxDuration":"30","googleOneTapConsentCheck":"false","nativeAdsFallback":"true","amp.aylEnabled":"true","prebid.sendAllBids":"true","ovpType":"primis","improvedigitalVideoPrebidEnabled":"false","prebid.sendHBKeys":"false","irisAutoplayVideosMax":"4","enableUserProfile":"true","vipslot.placeholder.enabled":"true","standaloneMpu":"true","smartAdServerDisplayPrebidEnabled":"true","mantisRecommender":"false","jwplayer.trackingOnConsent":"true","prebidLoadAtRuntime":"true","webPushNotifications.pushDisplayService":"airship","enableCallToActionBar":"true","notificationTrayEnabled":"true","customHtmlElements":"true","readNextRecommended":"true","mvtTests.enable":"false","mantisRecommender.basePartnership":"true","swipeNavigation":"true","blockthrough.enabled":"false","customAdExperience":"true","adFixedTopSlot":"true","ampCommentsEnabled":"true","externalBrandCSS":"true","LoginRadiusDomain":"https://auth.reachplc.com","quantcastCMPInline":"true","authUI.env":"prod","displayPrebidEnabled":"true","ozoneDisplayPrebidEnabled":"true","nativeAppBanner":"true","ixDisplayPrebidEnabled":"true","commentCountEnabled":"true","newslettersBaseUrlProtected":"https://status.data-services.tm-awx.com/subscriptions","video.ima3Version":"3.6","videoPrebidEnabled":"true","delayVideoAdsUntilConsented":"true","fbia.chartbeat.inbody":"false","appNexusVideoPrebidEnabled":"false"},"piano":{},"pluck":{},"pageInfo":{},"facebook":{},"jotform":{"url":"https://jotform-competitions.tm-awx.com/"},"mpulse":{},"responsiveRequest":true,"optout":{"enabled":false},"cookiePolicy":{"url":"https://www.nottinghampost.com/cookie-policy/"},"isPreview":false};;

(function() {
var host = window.location.hostname;
var element = document.createElement('script');
var firstScript = document.getElementsByTagName('script')[0];
var url = 'https://cmp.quantcast.com'
.concat('/choice/', 'JYWDqeLS64fbt', '/', host, '/choice.js?tag_version=V2');
var uspTries = 0;
var uspTriesLimit = 3;
element.async = true;
element.type = 'text/javascript';
element.src = url;
firstScript.parentNode.insertBefore(element, firstScript);
function makeStub() {
var TCF_LOCATOR_NAME = '__tcfapiLocator';
var queue = [];
var win = window;
var cmpFrame;
function addFrame() {
var doc = win.document;
var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);
if (!otherCMP) {
if (doc.body) {
var iframe = doc.createElement('iframe');
iframe.style.cssText = 'display:none';
iframe.name = TCF_LOCATOR_NAME;
doc.body.appendChild(iframe);
} else {
setTimeout(addFrame, 5);
}
}
return !otherCMP;
}
function tcfAPIHandler() {
var gdprApplies;
var args = arguments;
if (!args.length) {
return queue;
} else if (args[0] === 'setGdprApplies') {
if (
args.length > 3 &&
args[2] === 2 &&
typeof args[3] === 'boolean'
) {
gdprApplies = args[3];
if (typeof args[2] === 'function') {
args[2]('set', true);
}
}
} else if (args[0] === 'ping') {
var retr = {
gdprApplies: gdprApplies,
cmpLoaded: false,
cmpStatus: 'stub'
};
if (typeof args[2] === 'function') {
args[2](retr);
}
} else {
if(args[0] === 'init' && typeof args[3] === 'object') {
args[3] = Object.assign(args[3], { tag_version: 'V2' });
}
queue.push(args);
}
}
function postMessageEventHandler(event) {
var msgIsString = typeof event.data === 'string';
var json = {};
try {
if (msgIsString) {
json = JSON.parse(event.data);
} else {
json = event.data;
}
} catch (ignore) {}
var payload = json.__tcfapiCall;
if (payload) {
window.__tcfapi(
payload.command,
payload.version,
function(retValue, success) {
var returnMsg = {
__tcfapiReturn: {
returnValue: retValue,
success: success,
callId: payload.callId
}
};
if (msgIsString) {
returnMsg = JSON.stringify(returnMsg);
}
if (event && event.source && event.source.postMessage) {
event.source.postMessage(returnMsg, '*');
}
},
payload.parameter
);
}
}
while (win) {
try {
if (win.frames[TCF_LOCATOR_NAME]) {
cmpFrame = win;
break;
}
} catch (ignore) {}
if (win === window.top) {
break;
}
win = win.parent;
}
if (!cmpFrame) {
addFrame();
win.__tcfapi = tcfAPIHandler;
win.addEventListener('message', postMessageEventHandler, false);
}
};
makeStub();
var uspStubFunction = function() {
var arg = arguments;
if (typeof window.__uspapi !== uspStubFunction) {
setTimeout(function() {
if (typeof window.__uspapi !== 'undefined') {
window.__uspapi.apply(window.__uspapi, arg);
}
}, 500);
}
};
var checkIfUspIsReady = function() {
uspTries++;
if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
console.warn('USP is not accessible');
} else {
clearInterval(uspInterval);
}
};
if (typeof window.__uspapi === 'undefined') {
window.__uspapi = uspStubFunction;
var uspInterval = setInterval(checkIfUspIsReady, 6000);
}
})();;


!function(){var e=document.getElementById("scriptConfig"),t={indexExchange:{enabled:!1}};if(e)try{t=JSON.parse(e.getAttribute("content"))}catch(e){window.console.log("IX tag: ERROR parsing scriptConfig",e)}if(window.console.log("IX tag: scriptConfig",t),(t.indexExchange||{}).enabled&&t.indexExchange.headerTag){var n=document.createElement("script");n.defer=!0,n.type="text/javascript",n.src="https:"+t.indexExchange.headerTag;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a)}}();
;


-1===window.location.hostname.indexOf("insider.co.uk")&&(window.addEventListener("A9.loaded",function(e){console.log("A9 loaded: ",JSON.stringify(e))}),window.apstagDEBUG={testBidTimeout:200},function(){var e=function(e){var t,n=window,a={A9Loaded:!0};window.console.log("fireA9Loaded: "+JSON.stringify(e),1),n&&(document.createEvent?((t=document.createEvent("HTMLEvents")).initEvent("A9.loaded",!0,!0),t.data=a,n.dispatchEvent(t)):document.createEventObject&&((t=document.createEventObject()).data=a,n.fireEvent("onA9.loaded",t)),window.addEventListener("DOMContentLoaded",function(){n.dataEvents=n.dataEvents||{},n.dataEvents["A9.loaded"]=n.dataEvents["A9.loaded"]||[],n.dataEvents["A9.loaded"].push(!0)},!1))};!function(t,n,a,d,o,i,s){function c(e,a){n[t]._Q.push([e,a])}n[t]||(n[t]={init:function(){c("i",arguments)},fetchBids:function(){c("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},(i=a.createElement(d)).async=!0,i.src="https://c.amazon-adsystem.com/aax2/apstag.js",i.onload=e,(s=a.getElementsByTagName(d)[0]).parentNode.insertBefore(i,s))}("apstag",window,document,"script"),window.TMFeatures||(window.TMFeatures={}),window.TMFeatures.amazonHeaderEnabled=!0}());
;

!function(){return function e(t,n,r){function o(i,c){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){return o(t[i][1][e]||e)},l,l.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}}()({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e){return[].slice.call(e)}var t="DOMContentLoaded";function n(e,t,n,r){if(r=r||{},e.addEventListener(t,n),e.dataEvents){var o=e.dataEvents[t];if(o)if(r.purgeEventData)for(;o.length>0;)n.call(e,{data:o.shift(),target:e});else o.forEach(function(t){n.call(e,{data:t,target:e})})}}function r(e,t,n){e.dataEvents=e.dataEvents||{},e.dataEvents[t]=e.dataEvents[t]||[],e.dataEvents[t].push(n)}return{delegate:function(){return function(t,n,r,o,a){a=a||{},n=n.split(","),void 0===t.length&&(t=[t]),t.forEach||(t=e(t)),t.forEach(function(t){t.addEventListener(r,function(r){var i=[];n.forEach(function(n){i=">"===n.substr(0,1)?function(t,n,r){var o=e(n.querySelectorAll(r.substr(1)));return o=o.filter(function(e){return e.parentNode===n}),t.concat(o)}(i,t,n):function(t,n,r){return t.concat(e(n.querySelectorAll(r)))}(i,t,n)}),function e(t,n,r,o,a,i){if(n!==r){var c=o.indexOf(n);-1!==c&&(a.call(o[c],t),i.preventDefault&&t.preventDefault()),e(t,n.parentNode,r,o,a,i)}else i.stopPropagation&&t.stopPropagation()}(r,r.target,t,i,o,a)})})}}(),domReady:function(e){"complete"===document.readyState||"loaded"===document.readyState?(r(document,t),r(window,"load")):"interactive"===document.readyState&&r(document,t),document.addEventListener?n(document,t,e):n(window,"load",e)},fire:function(e,t,n){var o;n=n||{},document.createEvent?((o=document.createEvent("HTMLEvents")).initEvent(t,!0,!0),o.data=n,e.dispatchEvent(o)):document.createEventObject&&((o=document.createEventObject()).data=n,e.fireEvent("on"+t,o)),r(e,t,n)},listen:n}}();n.default=r},{}],2:[function(e,t,n){"use strict";function r(e,t){var n=e[0],r=e[1],o=e[2],s=e[3];r=u(r=u(r=u(r=u(r=c(r=c(r=c(r=c(r=i(r=i(r=i(r=i(r=a(r=a(r=a(r=a(r,o=a(o,s=a(s,n=a(n,r,o,s,t[0],7,-680876936),r,o,t[1],12,-389564586),n,r,t[2],17,606105819),s,n,t[3],22,-1044525330),o=a(o,s=a(s,n=a(n,r,o,s,t[4],7,-176418897),r,o,t[5],12,1200080426),n,r,t[6],17,-1473231341),s,n,t[7],22,-45705983),o=a(o,s=a(s,n=a(n,r,o,s,t[8],7,1770035416),r,o,t[9],12,-1958414417),n,r,t[10],17,-42063),s,n,t[11],22,-1990404162),o=a(o,s=a(s,n=a(n,r,o,s,t[12],7,1804603682),r,o,t[13],12,-40341101),n,r,t[14],17,-1502002290),s,n,t[15],22,1236535329),o=i(o,s=i(s,n=i(n,r,o,s,t[1],5,-165796510),r,o,t[6],9,-1069501632),n,r,t[11],14,643717713),s,n,t[0],20,-373897302),o=i(o,s=i(s,n=i(n,r,o,s,t[5],5,-701558691),r,o,t[10],9,38016083),n,r,t[15],14,-660478335),s,n,t[4],20,-405537848),o=i(o,s=i(s,n=i(n,r,o,s,t[9],5,568446438),r,o,t[14],9,-1019803690),n,r,t[3],14,-187363961),s,n,t[8],20,1163531501),o=i(o,s=i(s,n=i(n,r,o,s,t[13],5,-1444681467),r,o,t[2],9,-51403784),n,r,t[7],14,1735328473),s,n,t[12],20,-1926607734),o=c(o,s=c(s,n=c(n,r,o,s,t[5],4,-378558),r,o,t[8],11,-2022574463),n,r,t[11],16,1839030562),s,n,t[14],23,-35309556),o=c(o,s=c(s,n=c(n,r,o,s,t[1],4,-1530992060),r,o,t[4],11,1272893353),n,r,t[7],16,-155497632),s,n,t[10],23,-1094730640),o=c(o,s=c(s,n=c(n,r,o,s,t[13],4,681279174),r,o,t[0],11,-358537222),n,r,t[3],16,-722521979),s,n,t[6],23,76029189),o=c(o,s=c(s,n=c(n,r,o,s,t[9],4,-640364487),r,o,t[12],11,-421815835),n,r,t[15],16,530742520),s,n,t[2],23,-995338651),o=u(o,s=u(s,n=u(n,r,o,s,t[0],6,-198630844),r,o,t[7],10,1126891415),n,r,t[14],15,-1416354905),s,n,t[5],21,-57434055),o=u(o,s=u(s,n=u(n,r,o,s,t[12],6,1700485571),r,o,t[3],10,-1894986606),n,r,t[10],15,-1051523),s,n,t[1],21,-2054922799),o=u(o,s=u(s,n=u(n,r,o,s,t[8],6,1873313359),r,o,t[15],10,-30611744),n,r,t[6],15,-1560198380),s,n,t[13],21,1309151649),o=u(o,s=u(s,n=u(n,r,o,s,t[4],6,-145523070),r,o,t[11],10,-1120210379),n,r,t[2],15,718787259),s,n,t[9],21,-343485551),e[0]=d(n,e[0]),e[1]=d(r,e[1]),e[2]=d(o,e[2]),e[3]=d(s,e[3])}function o(e,t,n,r,o,a){return d((t=d(d(t,e),d(r,a)))<<o|t>>>32-o,n)}function a(e,t,n,r,a,i,c){return o(t&n|~t&r,e,t,a,i,c)}function i(e,t,n,r,a,i,c){return o(t&r|n&~r,e,t,a,i,c)}function c(e,t,n,r,a,i,c){return o(t^n^r,e,t,a,i,c)}function u(e,t,n,r,a,i,c){return o(n^(t|~r),e,t,a,i,c)}function s(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}Object.defineProperty(n,"__esModule",{value:!0});var l="0123456789abcdef".split("");function f(e){for(var t="",n=0;n<4;n++)t+=l[e>>8*n+4&15]+l[e>>8*n&15];return t}function d(e,t){return e+t&4294967295}n.default=function(e){return function(e){for(var t=0;t<e.length;t++)e[t]=f(e[t]);return e.join("")}(function(e){var t,n=e.length,o=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=e.length;t+=64)r(o,s(e.substring(t-64,t)));e=e.substring(t-64);var a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<e.length;t++)a[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(a[t>>2]|=128<<(t%4<<3),t>55)for(r(o,a),t=0;t<16;t++)a[t]=0;return a[14]=8*n,r(o,a),o}(e))}},{}],3:[function(e,t,n){"use strict";var r,o=e(9),a=(r=o)&&r.__esModule?r:{default:r};var i=(0,e(10).path)("TMCONFIG.features",window)||{},c=i["webPushNotifications.pushDisplayService"],u=i.PWA;if(u)try{u=JSON.parse(u)}catch(e){u=u||{}}if(u){var s=(0,o.validate)(u.subsets,u.scope);if(s){var l=""+location.hostname+s.homepage;(0,o.getManifest)(l).then(function(e){(0,a.default)(i.PWA,c,e.push_options)})}}},{10:10,9:9}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.deleteCaches=n.response=void 0;var r,o=e(10),a=e(2),i=(r=a)&&r.__esModule?r:{default:r};var c="offline/",u=2e3,s=[{name:"gpt",pattern:function(e){return"https://www.googletagservices.com/tag/js/gpt.js"===e}},{name:"permutive",pattern:function(e){return"https://d3alqb8vzo7fun.cloudfront.net/8a2c2f13-f564-4fff-8d22-177534028b95-1.0.js"===e}},{name:"weather.com",pattern:function(e){return e.startsWith("https://widgets-stage.weather.com/")}},{name:"gigya",pattern:function(e){return e.startsWith("https://cdns.gigya.com/JS/gigya.js")}},{name:"facebook",pattern:function(e){return"https://connect.facebook.net/en_US/sdk.js"===e}},{name:"onscroll",pattern:function(e){return e.match(/tags\.onscroll\.com.*/)}}],l=[{name:"breaking-news",pattern:function(e){return e.match(/\/breaking-news-client\/breaking\//)}}];function f(e){e.modal&&e.removeChild(e.modal),delete e.modal,clearTimeout(e.modalTimeout),e.classList.remove("skeleton")}n.default=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).modalTimeout,n=arguments[2].clog,r=window.localStorage.getItem(o.HASH_KEY),a=window.localStorage.getItem(o.DATE_KEY),i=new Promise(function(i,c){!function(e){var t=document.createElement("DIV");t.className="modal",e.appendChild(t),e.classList.add("skeleton"),e.modal=t}(e),e.modalTimeout=setTimeout(function(){f(e),n("Timed out getting new version"),c("TIMEOUT"),n("TIMEOUT")},t||u),caches.open(o.CACHE_KEY).then(function(e){e.match(location.href).then(function(e){if(e){var t=e.headers.get(o.HASH_PREFIX),n=e.headers.get("date");e.text().then(function(e){r!==t&&Date(n)>Date(a)&&i({content:e,contentHash:t,status:"networkCacheUpdate",date:n})})}})}),navigator.serviceWorker.addEventListener("message",function(e){if(e.origin===location.origin){var t=e.data;if(t&&"NEW_VERSION"===t.message&&t.url===location.href){n("Updating from sw message"),n("NETWORK UPDATE");var r={content:t.content,contentHash:t.contentHash,status:"networkUpdate",date:t.date};i(r)}}})});return i.then(function(t){n("GETDATA RESOLVED"),function(e,t){if(window.localStorage.getItem(o.HASH_KEY)!==t.contentHash){var n=document.implementation.createHTMLDocument("temp");n.documentElement.innerHTML=t.content,e.parentNode.replaceChild(n.querySelector("main"),e),f(e);var r=document.createEvent("HTMLEvents");r.initEvent("component.activate",!0,!0),r.data={},document.querySelector("main").dispatchEvent(r),window.localStorage.setItem(o.HASH_KEY,t.contentHash),window.localStorage.setItem(o.DATE_KEY,t.date)}else f(e)}(e,t),n(t.status)}).catch(function(e){n("GETDATA REJECTED"),n("Error getting data: "+e)}),i},n.response=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",r=arguments[3],a=(arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}).debug,u=e.request.url,f=function(){};a&&(f=function(e){console.log("[TM PWA] "+e)});var d=u.match(/\/\/.+?\//)[0].includes(t),h=d&&!u.includes("service-worker.js");if((h=function(e,t){for(var n=s.length,r=l.length,o=0;!t&&o<n;)t=s[o].pattern(e),o++;for(o=0;t&&o<r;)l[o].pattern(e)&&(t=!1),o++;return t}(u,h))&&"GET"===e.request.method){var g="navigate"===e.request.mode,v=r.cacheFirst&&r.cacheFirst.useCachedHtml;if(g&&!v)return;e.respondWith(caches.open(o.CACHE_KEY).then(function(t){return t.match(e.request).then(function(e){g&&e&&f("CACHE RESPONSE");var t={};d||(t.mode="no-cors");var a=fetch(u,t).then(function(e){var t=void 0;if(g){var n=e.clone(),r={status:n.status,statusText:n.statusText,headers:{}};n.headers.forEach(function(e,t){r.headers[t]=e}),t=n.text().then(function(e){return r.headers[o.HASH_PREFIX]=(0,i.default)(e),new Response(e,r)}),f("NETWORK RESPONSE")}return caches.open(o.CACHE_KEY).then(function(n){g?t.then(function(e){n.delete(u),n.put(u,e.clone()).then(function(){e.clone().text().then(function(t){!function(e,t){var n=t.clog;e.message="NEW_VERSION",clients.matchAll().then(function(t){t.forEach(function(t){n("Posting message"),t.postMessage(e)})})}({url:u,content:t,contentHash:e.headers.get(o.HASH_PREFIX),date:e.headers.get("date")},{clog:f})})}).catch(function(e){n.delete(u),f("Error updating cache - deleting entry: "+e)})}):(n.delete(u),n.put(u,e.clone()).catch(function(e){n.delete(u),f("Error updating cache - deleting entry: "+e)}))}),t?Promise.resolve(t.then(function(e){return e.clone()})):e.clone()}).catch(function(e){if(f(e),r.offlineSupport&&g)return console.log("OFFLINE"),caches.match(n+c)});return e||a})}))}},n.deleteCaches=function(){caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e.startsWith(o.CACHE_NAME)}).map(function(e){if(e!==o.CACHE_KEY)return caches.delete(e)}))})}},{10:10,2:2}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getConfig=void 0,n.stub=function(e){var t={getConfig:s};return n.getConfig=s=e.stub(),{getConfig:s,restore:function(){n.getConfig=s=t.getConfig}}};var r,o=e(6),a=(r=o)&&r.__esModule?r:{default:r};var i="config",c=1,u=3e3;function s(e){return new Promise(function(t,n){setTimeout(n,u),(0,a.default)(e,i).then(function(e){var n=e.get(c);n.onsuccess=function(){t(n.result.config)}})})}n.default=function(e,t){return(0,a.default)(e,i,"readwrite").then(function(e){e.put({version:c,config:t})})},n.getConfig=s},{6:6}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=[{name:"config",key:"version"},{name:"pageviews",key:"url"}];n.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"readonly";return new Promise(function(o,a){var i=e.open("marwood-pwa",1);i.onupgradeneeded=function(){r.forEach(function(e){i.result.objectStoreNames.contains(e.name)||i.result.createObjectStore(e.name,{keyPath:e.key})})},i.onsuccess=function(){if(i.result.onversionchange=function(e){null===e.newVersion&&e.target.close()},i&&i.result&&i.result.objectStoreNames.contains(t)){var e=i.result.transaction(t,n).objectStore(t);if(e)return void o(e)}a()}})}},{}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r="marwood-45f0ce64d61a20c70ba557e0a2260eb7",o="offline/";function a(e){caches.open(r).then(function(t){document.querySelectorAll('meta[name="cache-preload"]').forEach(function(e){var n=e.getAttribute("content");t.match(n).then(function(e){e||t.add(n)})});var n=e+o;t.match(n).then(function(e){e||fetch(n).then(function(e){if(e.redirected){var r=e.clone(),o={status:r.status,statusText:r.statusText,headers:{}};e.headers.forEach(function(e,t){o.headers[t]=e}),r.text().then(function(e){t.put(n,new Response(e,o))})}else t.put(n,e)})})})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=e.maxUrls,i=e.endpoint,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/";navigator.serviceWorker.addEventListener("message",function(e){e.origin===location.origin&&"SERVICE_WORKER_INSTALL"===e.data&&a(c)}),navigator.onLine&&location.pathname!==c+o&&(a(c),"number"!=typeof n&&(n=10),i||t||(t=".teaser"),window.addEventListener("load",function(){var e=JSON.parse(localStorage.getItem("offlineUrls"))||[];(function(e,t){var n=e.endpoint,r=e.selector;if(n)return new Promise(function(e){fetch(n+"?url="+location.href.split("?")[0]).then(function(n){n.json().then(function(n){e(n.filter(function(e){return e.url&&e.url.length>0}).slice(0,t).map(function(e){return{url:e.url,text:e.title,image:e.image.href.replace("/BINARY/","/alternates/s615b/"),tag:e.tags&&e.tags[0]}}))})})});if(r){var o=Array.from(document.querySelectorAll(r)).slice(0,t);return Promise.resolve(o.map(function(e){var t=e.querySelector("a.headline"),n=e.querySelector("img"),r=e.querySelector("a.label");return{url:t&&t.getAttribute("href"),text:t&&t.innerHTML,image:n&&n.getAttribute("data-src")||n.getAttribute("src"),tag:r&&r.innerHTML}}))}})({endpoint:i,selector:t},n).then(function(t){var o=t;e.length&&(o=t.filter(function(t){return e.find(function(e){return t.url!==e.url})})),o.length&&caches.open(r).then(function(t){o.forEach(function(r){r.text&&r.url&&r.image&&t.addAll([r.url,r.image]).then(function(){e.find(function(e){return e.url===r.url})||e.unshift(r),e.length>n&&e.pop(),localStorage.setItem("offlineUrls",JSON.stringify(e))})})})})}))}},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.track=function(e,t){(0,a.default)(e,i,"readwrite").then(function(e){e.put({url:t,timestamp:(new Date).getTime()})})},n.offlineLandingTracking=function(){var e=localStorage.getItem(c);return localStorage.removeItem(c),e},n.trackOfflineLanding=function(){localStorage.setItem(c,Number(localStorage.getItem(c)||0)+1)};var r,o=e(6),a=(r=o)&&r.__esModule?r:{default:r};var i="pageviews",c="offlineLandingPageViews";n.default=function(e,t){(0,a.default)(e,i,"readwrite").then(function(e){var n=e.count();n.onsuccess=function(){var r=n.result-1;r>0&&t(r),e.clear()}})}},{6:6}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MANIFEST_CACHE_NAME=n.validate=n.urlBase64ToUint8Array=n.cookie=n.getManifest=n.analytics=void 0,n.stub=function(e){var t={analytics:h,getManifest:m};return n.analytics=h=e.stub(),n.getManifest=m=e.stub(),{analytics:h,getManifest:m,restore:function(){n.analytics=h=t.analytics,n.getManifest=m=t.getManifest}}};var r=e(8),o=l(r),a=l(e(4)),i=l(e(1)),c=l(e(7)),u=l(e(5)),s=e(10);function l(e){return e&&e.__esModule?e:{default:e}}var f=navigator.userAgent.match(/iPhone|iPad|iPod/i);function d(e,t){var n=t.clog;i.default.fire(window,"contentupdate",e),n("CONTENTUPDATE: "+e)}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"metrics";i.default.fire(window,"analytics.track",{name:e,category:n,value:t})}function g(e,t,n){var r=n.clog,o=window.localStorage.getItem(s.HASH_KEY);(0,a.default)(e,t.cacheFirst,{clog:r}).then(function(e){d(o===e.contentHash?"unchanged":"fresh",{clog:r}),h("cacheFirstPageView")}).catch(function(){d("cached",{clog:r}),h("cacheFirstPageView"),r("CACHED PAGE VIEW"),navigator.serviceWorker.addEventListener("message",function(e){if(e.origin===location.origin){var t=e.data;t&&"NEW_VERSION"===t.message&&t.url===location.href&&(o!==t.contentHash?(h("stalePageView"),r("STALE PAGE VIEW")):(h("cachedPageView"),r("MOULDY PAGE VIEW")))}})})}function v(e){return encodeURIComponent(e||"")}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1],n=document.querySelector("link[rel=manifest]");if(n){var r=t||n.href;return new Promise(function(t,n){caches.open(s.MANIFEST_CACHE_NAME+":"+e).then(function(e){e.match(r).then(function(n){n?t(n):fetch(r).then(function(n){e.put(r,n.clone()),t(n.clone())})})}).catch(function(e){return n(e)})}).then(function(e){return e.json().then(function(e){return e})})}}n.default=function(e,t,n){var a=function(){};if("serviceWorker"in navigator){try{e=JSON.parse(e)}catch(t){e=e||{}}if(!e.debug)try{e.debug=new URLSearchParams(window.location.search).get("pwaDebug")}catch(e){}(0,u.default)(window.indexedDB,e,n);var s="/service-worker.js?v=8b9ff72c50c36645e8f7322528520d04";e.debug&&(s+="&pwaDebug="+e.debug,a=function(e){window.console.log("[TM PWA] "+e)}),e.cacheFirst&&(s+="&cacheFirst=true"),e.offlineSupport&&(s+="&offlineSupport=true"),t&&(s=s+"&pushDisplayService="+t+"&vap="+v(n.vapidKey)+"&a="+v(n.appKey)+"&t="+v(n.token)+"&i="+v());var l=void 0;if(e.scope&&(l={scope:e.scope}),window.sessionStorage.setItem("swUrl",s),navigator.serviceWorker.register(s,l).then(function(){a("Service worker registered successfully");var e="\n !function (n, t, c, e, u) { \n function r(n) { try { f = n(u) } catch (n) { return h = n, void i(p, n) } i(s, f) } \n function i(n, t) { for (var c = 0; c < n.length; c++)d(n[c], t); } \n function o(n, t) { return n && (f ? d(n, f) : s.push(n)), t && (h ? d(t, h) : p.push(t)), l } \n function a(n) { return o(!1, n) } \n function d(t, c) { n.setTimeout(function () { t(c) }, 0) } \n var f, h, s = [], p = [], l = { then: o, catch: a, _setup: r }; \n n[e] = l; \n var v = t.createElement(\"script\"); \n v.src = c, v.async = !0, v.id = \"_uasdk\", v.rel = e, t.head.appendChild(v) }(window, document, \n 'https://aswpsdkus.com/notify/v1/ua-sdk.min.js', \n 'UA', // This value can be changed to use a custom variable name. \n { appKey: '"+n.appKey+"', \n token: '"+n.token+"', \n vapidPublicKey: '"+n.vapidKey+"', \n websitePushId: 'web.com.reach.all',\n workerUrl: '"+s+"' })",t=document.createElement("script");t.innerHTML=e,document.body.appendChild(t);var r=new Event("airship.sdk.snippet.loaded");window.dispatchEvent(r)},function(t){e.debug&&(a("Service worker registration failed"),a(t))}),e.offlineSupport&&navigator.onLine){(0,o.default)(window.indexedDB,function(e){h("attemptedPageViews",e)});var m=(0,r.offlineLandingTracking)();m&&h("offlineLandingPageViews",m)}if(e.cacheFirst&&e.cacheFirst.useCachedHtml&&(navigator.serviceWorker.controller||e.cacheFirst&&e.cacheFirst.force)){var p=document.querySelector("main");if(p)g(p,e.cacheFirst,{clog:a});else{var E=new MutationObserver(function(){var t=document.body;t&&(E.disconnect(),(E=new MutationObserver(function(){var t=document.querySelector("main");t&&(g(t,e.cacheFirst,{clog:a}),E.disconnect())})).observe(t,{childList:!0}))});E.observe(document.documentElement,{childList:!0})}}else d("none",{clog:a});e.offlineSupport&&(0,c.default)(e.offlineSupport,e.scope),window.matchMedia("(display-mode: standalone)").matches&&(h("pwaPageView"),document.documentElement.setAttribute("tm-pwa",e.scope||"/")),!0===window.navigator.standalone&&f&&(h("iOSPwaPageView"),document.documentElement.setAttribute("tm-pwa",e.scope||"/"),i.default.delegate(document.body,"a","click",function(e){var t=e.target.getAttribute("href");window.history.pushState({},"",t),location.replace(t)},{preventDefault:!0})),window.indexedDB.deleteDatabase("1"),window.indexedDB.deleteDatabase("cacheStatus")}else d("none",{clog:a})},n.analytics=h,n.getManifest=m,n.cookie=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),document.cookie=e+"="+t+";expires="+r.toUTCString()+";path=/"},n.urlBase64ToUint8Array=s.urlBase64ToUint8Array,n.validate=function(e,t){var n=t||"";if(!e)return{homepage:n};var r=void 0;try{r=JSON.parse(document.getElementById("manifest-validation").getAttribute("content"))}catch(e){return null}var o=e.filter(function(e){return r.url&&r.url.includes(e.homepage)}),a=e.filter(function(e){return r.primaryTag&&r.primaryTag===e.tag}),i=e.filter(function(e){return r.tags&&r.tags.includes(e.tag)});if(1===o.length)return o[0];if(1===a.length)return a[0];if(1===i.length)return i[0];var c=e.filter(function(e){return e.scope===n});return c.length>0?c[0]:"string"==typeof t?{homepage:t}:void 0},n.MANIFEST_CACHE_NAME=s.MANIFEST_CACHE_NAME},{1:1,10:10,4:4,5:5,7:7,8:8}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=/(.*\/amp\/.*|.*\.amp)/g,o="TM-Hash-"+location.href,a="TM-Date-"+location.href;n.CACHE_KEY="marwood-45f0ce64d61a20c70ba557e0a2260eb7",n.CACHE_NAME="marwood",n.MANIFEST_CACHE_NAME="manifestCache",n.urlBase64ToUint8Array=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r},n.isAmpArticle=function(e){return e.match(r)},n.HASH_PREFIX="TM-Hash",n.HASH_KEY=o,n.DATE_KEY=a,n.PUSH_SERVICE_KEY="airship",n.PUSH_SERVICE_SCRIPT="https://aswpsdkus.com/notify/v1/ua-sdk.min.js",n.getAssetUrl=function(e){return e&&e.replace?e.replace("prod",function(e){return/-bertha\./.test(e)?"bertha":/-stable\./.test(e)?"stable":"prod"}(self.location)):e},n.path=function(e,t){if(e&&t){var n=e.split?e.split("."):e;if(n.reduce)return n.reduce(function(e,t){return e&&e[t]?e[t]:void 0},t)}},n.externalDebug=function(e,t){t&&localStorage.removeItem("airship");var n=JSON.parse(localStorage.getItem("airship")||"[]");e.length&&n.push(e),localStorage.setItem("airship",JSON.stringify(n))}},{}]},{},[3]);
//# sourceMappingURL=pwa.min.js.map;

(function () {
var headlineSelector = "h3, h2, h1";
var articleBlockSelector = "article,div.teaser";
var timeout = 1500;
if(!("srcset"in document.createElement("img")))return;const e=window.chartbeatFlicker=window.chartbeatFlicker||{};function t(e,t,c,o){const n=document.createElement("style"),i=function(e,t){return e.split(",").reduce((e,c)=>e+c+` ${t} { visibility: hidden; }\n`,"")}(c,o);n.id=t,e.appendChild(n),n.type="text/css",n.appendChild(document.createTextNode(i))}window._sf_async_config=window._sf_async_config||{},e.timeout=timeout||1e3,e.headlineSelector=headlineSelector||"h3, h2, h1",window._sf_async_config.articleBlockSelector=articleBlockSelector||"article, section";const c=window._sf_async_config.articleBlockSelector;e.timeoutFlag=!1,e.strategyFetched=e.strategyFetched||!1;const o=document.head||document.querySelector("head");t(o,"chartbeat-flicker-control-style-ht",c,e.headlineSelector),t(o,"chartbeat-flicker-control-style-it",c,"img"),document.addEventListener("DOMContentLoaded",()=>{if(e.timeoutFlag){const e=document.getElementById("chartbeat-flicker-control-style-it");return void(e&&e.parentNode.removeChild(e))}document.querySelectorAll(c).forEach(function(e){Array.prototype.slice.call(e.querySelectorAll("img")).forEach(function(e){e.getAttribute("pinger-seen")||e.classList.add("cb-it-hide")})});const t=document.getElementById("chartbeat-flicker-control-style-it");t&&t.parentNode.removeChild(t)}),window.setTimeout(function(){if(!e.strategyFetched){e.timeoutFlag=!0;const t=document.getElementById("chartbeat-flicker-control-style-ht");t&&t.parentNode.removeChild(t)}document.querySelectorAll(c).forEach(function(e){Array.prototype.slice.call(e.querySelectorAll("img")).forEach(function(e){"true"!==e.getAttribute("keep-hiding")&&e.classList.remove("cb-it-hide")})});const t=document.getElementById("chartbeat-flicker-control-style-it");t&&t.parentNode.removeChild(t)},e.timeout)
})();;

(function (w) {
var c = w._sf_async_config = w._sf_async_config || {};
c.uid = 33715;
c.useCanonical = true;
c.domain = w.location.hostname;
c.flickerControl = false;
c.lazyLoadSrcsetAttribute = 'data-srcset';
w.testingActive = true;
w._sf_startpt = new Date().getTime();
})(window);;


var publicSectionPara = window.TMCONFIG.publicSectionParams;
var env = "digitalData.page.attributes.environment"
.split(".")
.reduce(function (acc, cur) {
return (acc && acc[cur]) || undefined;
}, window);
function loadHotjar() {
(function (h, o, t, j, a, r) {
h.hj =
h.hj ||
function () {
(h.hj.q = h.hj.q || []).push(arguments);
};
h._hjSettings = {
hjid: publicSectionPara["hotjar.hjid"],
hjsv: 6,
};
a = o.getElementsByTagName("head")[0];
r = o.createElement("script");
r.async = 1;
r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
}
var handleHotjar = () => {
if (
env === "prod" &&
publicSectionPara["hotjar.hjid"] &&
window?.TMConsent
) {
var isConsented = window.TMConsent.api.isConsented(15, true);
if ( isConsented ) {
loadHotjar();
} else {
window.TMConsent.cmpState.ready.then(() => {
if (isConsented) {
loadHotjar();
}
});
}
} else {
setTimeout(handleHotjar, 1000);
}
};
setTimeout(handleHotjar, 1000);
;


function isEmptyObjHeader(obj) {
for(var prop in obj) {
if(Object.prototype.hasOwnProperty.call(obj, prop)) {
return false;
}
}
return JSON.stringify(obj) === JSON.stringify({});
}
var digitalData = digitalData || {};
if ((digitalData && Object.keys && Object.keys(digitalData).length === 0 && Object.getPrototypeOf && Object.getPrototypeOf(digitalData) === Object.prototype) || isEmptyObjHeader(digitalData)) {
var dataLayerElSync = document.getElementById('dataLayer');
if (dataLayerElSync) {
digitalData = JSON.parse(dataLayerElSync.getAttribute('content'));
}
}
;

!function(){return function e(t,n,a){function r(i,u){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!u&&c)return c(i,!0);if(o)return o(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){return r(t[i][1][e]||e)},l,l.exports,e,t,n,a)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<a.length;i++)r(a[i]);return r}}()({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=document.documentElement,r={breakpointType:null,overlayActive:!1,resize:{active:!1,debounceTimer:200,interval:null},scroll:{active:!1,debounceTimer:50,interval:null},tapOrClickEvent:"click",throttleDateTime:null,timings:{debounce:250},windowHeight:a.clientHeight,windowTopOffset:null,windowWidth:a.clientWidth};function o(e){for(var t=e.split("."),n=0,a=r;n<t.length;n++)a=a[t[n]];return a}r.breakpoints=[{name:"baseLayout",width:-1},{name:"tabletPortraitUpwards",width:728},{name:"tabletLandscapeUpwards",width:1024},{name:"desktop",width:1240}],n.default={getOption:o,inspect:function(){return r},getBreakpoint:function(e){e=e||window.innerWidth;var t,n=o("breakpoints"),a=n.length;for(t=0;t<a;t++)if(e<n[t].width)return n[t-1].name;return n[a-1].name}}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e){return[].slice.call(e)}var t="DOMContentLoaded";function n(e,t,n,a){if(a=a||{},e.addEventListener(t,n),e.dataEvents){var r=e.dataEvents[t];if(r)if(a.purgeEventData)for(;r.length>0;)n.call(e,{data:r.shift(),target:e});else r.forEach(function(t){n.call(e,{data:t,target:e})})}}function a(e,t,n){e.dataEvents=e.dataEvents||{},e.dataEvents[t]=e.dataEvents[t]||[],e.dataEvents[t].push(n)}return{delegate:function(){return function(t,n,a,r,o){o=o||{},n=n.split(","),void 0===t.length&&(t=[t]),t.forEach||(t=e(t)),t.forEach(function(t){t.addEventListener(a,function(a){var i=[];n.forEach(function(n){i=">"===n.substr(0,1)?function(t,n,a){var r=e(n.querySelectorAll(a.substr(1)));return r=r.filter(function(e){return e.parentNode===n}),t.concat(r)}(i,t,n):function(t,n,a){return t.concat(e(n.querySelectorAll(a)))}(i,t,n)}),function e(t,n,a,r,o,i){if(n!==a){var u=r.indexOf(n);-1!==u&&(o.call(r[u],t),i.preventDefault&&t.preventDefault()),e(t,n.parentNode,a,r,o,i)}else i.stopPropagation&&t.stopPropagation()}(a,a.target,t,i,r,o)})})}}(),domReady:function(e){"complete"===document.readyState||"loaded"===document.readyState?(a(document,t),a(window,"load")):"interactive"===document.readyState&&a(document,t),document.addEventListener?n(document,t,e):n(window,"load",e)},fire:function(e,t,n){var r;n=n||{},document.createEvent?((r=document.createEvent("HTMLEvents")).initEvent(t,!0,!0),r.data=n,e.dispatchEvent(r)):document.createEventObject&&((r=document.createEventObject()).data=n,e.fireEvent("on"+t,r)),a(e,t,n)},listen:n}}();n.default=a},{}],3:[function(e,t,n){"use strict";var a=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,u=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===r.call(e)},c=function(e){if(!e||"[object Object]"!==r.call(e))return!1;var t,n=a.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&a.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!o)return!1;for(t in e);return void 0===t||a.call(e,t)},d=function(e,t){o&&"__proto__"===t.name?o(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if("__proto__"===t){if(!a.call(e,t))return;if(i)return i(e,t).value}return e[t]};t.exports=function e(){var t,n,a,r,o,i,f=arguments[0],s=1,p=arguments.length,w=!1;for("boolean"==typeof f&&(w=f,f=arguments[1]||{},s=2),(null==f||"object"!=typeof f&&"function"!=typeof f)&&(f={});s<p;++s)if(null!=(t=arguments[s]))for(n in t)a=l(f,n),f!==(r=l(t,n))&&(w&&r&&(c(r)||(o=u(r)))?(o?(o=!1,i=a&&u(a)?a:[]):i=a&&c(a)?a:{},d(f,{name:n,newValue:e(w,i,r)})):void 0!==r&&d(f,{name:n,newValue:r}));return f}},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.track=n.newPage=n.dataLayer=n.init=void 0;var a=d(e(2)),r=c(e(8)),o=c(e(6)),i=d(e(7)),u=d(e(9));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function d(e){return e&&e.__esModule?e:{default:e}}var l=function(e){if(i.default.track(e),e.category&&e.name){var t={};t[e.category]={},t[e.category][e.name]=e.value,o.update({page:{info:t}})}},f=function(){i.default.newPage()};function s(e,t){e=e.replace(/\W+(.)/g,function(e,t){return t.toUpperCase()});var n=r.mark(e);return o.update({page:{info:{timing:n}}}),i.default.timer(e,n[e],t),n}n.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];o.init((0,u.default)(),e[0]),i.default.getClientId(t),s("start"),a.default.domReady(function(){a.default.fire(window,"perceivedload",s("perceived").perceived)}),a.default.listen(window,"analytics.track",function(e){l(e.data)}),a.default.listen(window,"analytics.newpage",f),a.default.listen(window,"analytics.mark",function(e){s(e.data)}),a.default.fire(window,"analytics.ready",{track:l,newPage:f,mark:s}),e.forEach(function(e){l({name:"ChameleonMVT",category:"MVT",value:e})}),a.default.listen(window,"load",function(){s("pageload")})},n.dataLayer=o,n.newPage=f,n.track=l},{2:2,6:6,7:7,8:8,9:9}],5:[function(e,t,n){"use strict";var a=e(4),r=void 0;try{r=window.TMCONFIG.publicSectionParams.gtmClientIdEndpoint}catch(e){}(0,a.init)(window.TMMVTTESTS,r)},{4:4}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.update=n.access=n.init=void 0;var a=i(e(2)),r=i(e(1)),o=i(e(3));function i(e){return e&&e.__esModule?e:{default:e}}var u={};function c(e){(0,o.default)(!0,u,e),a.default.fire(window,"dataLayer.changed",e)}function d(e){return e.split(".").reduce(function(e,t){return e[t]},u||this)}function l(e){c({article:{attributes:{articleViewMode:e.data}},page:{attributes:{configurationMode:e.data}}})}function f(e){c({page:{info:{timing:{perceived:e.data}}}})}n.init=function(e,t){var n;(n=document.getElementById("dataLayer"))&&(u=JSON.parse(n.getAttribute("content"))),window.digitalData=u,a.default.fire(window,"dataLayer.changed",u),c({page:{attributes:{chameleonSegment:!0},info:{uhid:e,ABTest:t},url:location.href},platform:"chameleon"}),a.default.listen(window,"breakpointchange",l),a.default.listen(window,"perceivedload",f),a.default.listen(window,"dataLayer.update",function(e){c(e.data)}),l({data:r.default.getBreakpoint(window.innerWidth)}),a.default.fire(window,"dataLayer.ready",{access:d,update:c}),window.TMDATA||(window.TMDATA={access:d,update:c})},n.access=d,n.update=c},{1:1,2:2,3:3}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=e(2),i=(a=o)&&a.__esModule?a:{default:a};var u="TM_ga_clientId",c=new Promise(function(e){i.default.domReady(function(){setTimeout(e,100)})});function d(e){if(window.dataLayer&&window.dataLayer.push){var t=e.data||{};t.event=e.type,window.dataLayer.push(t)}}function l(e){window.dataLayer&&window.dataLayer.push&&window.dataLayer.push({clientId:e,event:"clientId",eventCallback:function(){i.default.fire(window,"analytics.clientId.ready",{clientId:e})}})}i.default.listen(window,"dataLayer.changed",d),n.default={newPage:function(){d({type:"pageview",data:{url:location.pathname}})},track:function(e){c.then(function(){if("object"===(void 0===e?"undefined":r(e))&&e.name){var t=e.category||"generic",n={type:t+"."+e.name,data:{}};n.data[t]={},n.data[t][e.name]=e.value,d(n)}else d({type:e})}).catch(function(){window.console.log("GTM in unknown state - Dom Ready did not fire")})},timer:function(e,t){d({type:"timing."+e,data:{timingCategory:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Generic Timer",timingVar:e,timingValue:Math.round(t)}})},getClientId:function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=(t=u,(t=(document.cookie+";").match(new RegExp(t+"=.*;")))&&t[0].split(/=|;/)[1]);if(a)l(a);else if(e){var r=new XMLHttpRequest;r.open("get",e),r.withCredentials=!0,r.send(),r.onload=function(){if(4===r.readyState)if(200===r.status){var e=void 0;try{e=JSON.parse(r.responseText).vars.clientId}catch(e){return void window.console.log("Client ID response error: "+e)}l(e);var t=new Date;t.setTime(t.getTime()+63113904e3);var a=n?"SameSite=None;Secure;":"";document.cookie=u+"="+e+";expires="+t.toGMTString()+";"+a+"path=/"}else window.console.log("Client ID error: "+r.statusText)}}else window.console.log("No Client ID endpoint!")}}},{2:2}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=void 0,r=void 0,o=window.performance;o?(n.start=r=o.timing.navigationStart,a=function(){return o.now()}):(n.start=r=(new Date).getTime(),a=function(){return(new Date).getTime()-r}),n.start=r,n.mark=function(e){var t={};return t[e]=a(),t}},{}],9:[function(e,t,n){"use strict";function a(e,t){for(;e.toString().length<t;)e="0"+e;return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=new Date;return"UHID|"+e.getUTCFullYear().toString().substr(2,2)+":"+a(e.getUTCMonth()+1,2)+":"+a(e.getUTCDate(),2)+":"+a(e.getUTCHours(),2)+":"+a(e.getUTCMinutes(),2)+":"+a(e.getUTCSeconds(),2)+":"+a(e.getUTCMilliseconds(),3)+"_"+function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}()}},{}]},{},[5]);
//# sourceMappingURL=chameleon-analytics.min.js.map;

$css("https://s2-prod.nottinghampost.com/@trinitymirrordigital/article-service/scss/section.css?v=380025aedb1a58becc2b1d5946e1dc24");$css("https://s2-prod.nottinghampost.com/@trinitymirrordigital/withnail/scss/withnail.css?v=3a223be4f7a501aab4af779b2265d175");$css("https://s2-prod.nottinghampost.com/@trinitymirrordigital/chameleon-partnership-widgets/scss/section.css?v=4de8889cb53b060c499289b6747bbe1c");;

!function(){return function r(t,n,e){function i(a,u){if(!n[a]){if(!t[a]){var f="function"==typeof require&&require;if(!u&&f)return f(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(r){return i(t[a][1][r]||r)},s,s.exports,r,t,n,e)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<e.length;a++)i(e[a]);return i}}()({1:[function(r,t,n){},{}],2:[function(r,t,n){"use strict";var e=Object.prototype.hasOwnProperty;function i(r,t){return Array.isArray(r)?function(r,t){for(var n,e="",o="",a=Array.isArray(t),u=0;u<r.length;u++)(n=i(r[u]))&&(a&&t[u]&&(n=f(n)),e=e+o+n,o=" ");return e}(r,t):r&&"object"==typeof r?function(r){var t="",n="";for(var i in r)i&&r[i]&&e.call(r,i)&&(t=t+n+i,n=" ");return t}(r):r||""}function o(r){if(!r)return"";if("object"==typeof r){var t="";for(var n in r)e.call(r,n)&&(t=t+n+":"+r[n]+";");return t}return r+""}function a(r,t,n,e){if(!1===t||null==t||!t&&("class"===r||"style"===r))return"";if(!0===t)return" "+(e?r:r+'="'+r+'"');var i=typeof t;return"object"!==i&&"function"!==i||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=f(t))," "+r+'="'+t+'"'):" "+r+"='"+t.replace(/'/g,"&#39;")+"'"}n.merge=function r(t,n){if(1===arguments.length){for(var e=t[0],i=1;i<t.length;i++)e=r(e,t[i]);return e}for(var a in n)if("class"===a){var u=t[a]||[];t[a]=(Array.isArray(u)?u:[u]).concat(n[a]||[])}else if("style"===a){var u=o(t[a]);u=u&&";"!==u[u.length-1]?u+";":u;var f=o(n[a]);f=f&&";"!==f[f.length-1]?f+";":f,t[a]=u+f}else t[a]=n[a];return t},n.classes=i,n.style=o,n.attr=a,n.attrs=function(r,t){var n="";for(var u in r)if(e.call(r,u)){var f=r[u];if("class"===u){f=i(f),n=a(u,f,!1,t)+n;continue}"style"===u&&(f=o(f)),n+=a(u,f,!1,t)}return n};var u=/["&<>]/;function f(r){var t=""+r,n=u.exec(t);if(!n)return r;var e,i,o,a="";for(e=n.index,i=0;e<t.length;e++){switch(t.charCodeAt(e)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}i!==e&&(a+=t.substring(i,e)),i=e+1,a+=o}return i!==e?a+t.substring(i,e):a}n.escape=f,n.rethrow=function t(n,e,i,o){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||o))throw n.message+=" on line "+i,n;try{o=o||r(1).readFileSync(e,"utf8")}catch(r){t(n,null,i)}var a=3,u=o.split("\n"),f=Math.max(i-a,0),c=Math.min(u.length,i+a);var a=u.slice(f,c).map(function(r,t){var n=t+f+1;return(n==i?" > ":" ")+n+"| "+r}).join("\n");n.path=e;n.message=(e||"Pug")+":"+i+"\n"+a+"\n\n"+n.message;throw n}},{1:1}],3:[function(r,t,n){"use strict";window.pug=r(2)},{2:2}]},{},[3]);
//# sourceMappingURL=pug-runtime.min.js.map;


window.console.log("iPhone/Edge Fix v2 running...");
(function (doc) {
var agnt = navigator.userAgent;
var css = ".captify-widget>div>div>div{padding-bottom:30px!important}";
var count = 300; // 300 * 100ms == 30000ms limit
function isIphone() {
return /iPhone/.test(agnt);
}
function isEdge() {
return /Edge/.test(agnt);
}
function isEdgeOrIphone() {
return isIphone() || isEdge();
}
function applyFix() {
var ifr = doc.querySelector(".captify-iframe");
if (ifr && isEdge(agnt)) {
fixEdge(ifr);
} else if (ifr && ifr.contentDocument && ifr.contentDocument.head && isIphone(agnt)) {
fixIphone(ifr.contentDocument);
} else {
count--;
if (count) {
setTimeout(applyFix, 100);
}
}
}
function fixIphone(doc) {
var styleTag = doc.createElement("style");
styleTag.type = "text/css";
styleTag.appendChild(doc.createTextNode(css));
styleTag.cssText = doc.head.appendChild(styleTag);
}
function fixEdge(ifr) {
if (ifr.contentDocument && ifr.contentDocument.childNodes && ifr.contentDocument.childNodes.length) {
//finished
}
else {
ifr.classList.add("hidden");
count = 100; // 100 * 50ms == 5000ms limit
setTimeout(unhideEdge, 50, ifr);
}
}
function unhideEdge(ifr){
if (ifr.contentDocument && ifr.contentDocument.childNodes && ifr.contentDocument.childNodes.length) {
ifr.classList.remove("hidden");
} else {
count--;
if (count) {
setTimeout(unhideEdge, 50, ifr);
}
}
}
if (isEdgeOrIphone()) {
applyFix();
}
})(document);
;

window.addEventListener('load', function() {
setTimeout(function() {
["https://s2-prod.nottinghampost.com/@trinitymirrordigital/breaking-news-client/c03ad77cb1521dffa15147996f426e5b1d1442b5/pull.js"].forEach(file => {const el=document.createElement('SCRIPT');el.setAttribute('src', file);el.setAttribute('type', 'module');document.body.appendChild(el);});
}, 3000);
});;

var tag = document.createElement("script");tag.src = "https://static.reachdata.live/elections23/du_council_totalizer_23.min.js";document.getElementsByTagName("head")[0].appendChild(tag);!function(t){!function n(i,o){if("function"==typeof window[i]){new window[i](t,"small")}else--o>0&&setTimeout((function(){n(i,o)}),150)}("du_council_totalizer_23_ctt_widget",30)}(document.currentScript)