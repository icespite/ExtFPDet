!function(){"use strict";var e="data-custom-domain",o=(window.location.search.includes("_adm_debug=1"),"https://js.wpadmngr.com/static/adManager"),t=e;!function(e){var a=document.querySelector("[data-admpid]"),n=null,d=null,r=null;a&&(n=a.defer?"defer":"async",d=a.src.replace(/.js$/,""),r=a.hasAttribute(t));var c=e.document.createElement("script");function i(e,o){"noModule"in e?(e.src="".concat(o,".m.js"),e[n||"async"]=!0):(e.src="".concat(o,".l.js"),e[n||"defer"]=!0,e.defer=!0)}i(c,"".concat(d||o)),r&&(c.onerror=function(){var t=e.document.createElement("script");i(t,o),e.document.head.appendChild(t)});["LighthouseGooglebot","Baiduspider","Bingbot","DuckDuckBot","Yahoo! Slurp","facebookexternalhit","YandexBot","ia_archiver","R6_FeedFetcher","NetcraftSurveyAgent","Sogou web spider","PrintfulBot","Twitterbot","APIs-Google","AdsBot-Google-Mobile","AdsBot-Google","Mediapartners-Google","Googlebot-Image","Googlebot","Googlebot-News","Googlebot-Video","AdsBot-Google-Mobile-Apps","FeedFetcher-Google","Google-Read-Aloud","DuplexWeb-Google","googleweblight","Storebot-Google","YandexAdNet","YandexAccessibilityBot","YandexBlogs","YandexBot","YandexCalendar","YandexDirect","YandexDirectDyn","YaDirectFetcher","YandexImages","YandexImageResizer","YandexMobileBot","YandexMarket","YandexMedia","YandexMetrika","YandexMobileScreenShotBot","YandexNews","YandexOntoDB","YandexOntoDBAPI","YandexPagechecker","YandexPartner","YandexRCA","YandexSitelinks","YandexVertis","YandexVerticals","YandexWebmaster","YandexScreenshotBot"].some((function(e){return-1!==navigator.userAgent.toLowerCase().indexOf(e.toLowerCase())}))||e.document.head.appendChild(c)}(window)}();