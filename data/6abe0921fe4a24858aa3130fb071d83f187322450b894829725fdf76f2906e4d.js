SIQ_settings_loaded({"searchBoxName":"MainSearchTxt","postTypesForSearch":"post,product","autocompleteNumRecords":5,"customSearchNumRecords":10,"showACImages":true,"disableAutocomplete":false,"customSearchThumbnailsEnabled":true,"resultPageUrl":"https://www.sherdog.com/search.php","queryParameter":"q","autocompleteTextResults":"Results","autocompleteTextPoweredBy":"powered by","autocompleteTextMoreLink":"Show all # results","feedEnabled":true,"crossSiteSearch":true,"crossSiteSearchOnPage":true,"mobileEnabled":true,"mobileFloatSearchIconEnable":true,"mobileFloatSearchBarEnable":false,"siqSid":"11167975","showAuthorAndDate":true,"showPostLink":false,"showCategory":true,"showTag":true,"searchAlgorithm":"BROAD_MATCH","customSearchBarPlaceholder":"Enter Your Search Term","customSearchResultsInfoText":"Showing ##offset## to ##limit## of ##total## Results","customSearchResultsOrderRelevanceText":"Relevance","customSearchResultsOrderNewestText":"Newest","customSearchResultsOrderOldestText":"Oldest","paginationPrevText":"Prev","paginationNextText":"Next","noRecordsFoundText":"No records found","sortBy":"RELEVANCE","featureExcludeFields":true,"isProPack":false,"thumbnailType":"crop","resizeFromOriginalImg":false,"scripts":["##BASEURL##js/##VERSION##/autocomplete.js","##BASEURL##js/##VERSION##/search-results.js","##BASEURL##js/##VERSION##/siq-mobile.js","##BASEURL##js/##VERSION##/sa.js"],"rawScripts":["!function($){var fbViewLog=function(eventName,eventData,callback){if(!eventData){return log(\"Event data is corrupted\")}var url=\"https://www.facebook.com/tr/?id=649690295426340\"+\"&ev=\"+encodeURIComponent(eventName);var data={sid:eventData.sid,said:eventData.said,engineKey:eventData.engineKey};for(var key in data){if(data.hasOwnProperty(key)){url+=\"&cd[\"+encodeURIComponent(key)+\"]=\"+encodeURIComponent(data[key])}}var img=new Image;img.onerror=img.onload=callback;img.src=url};var pinViewLog=function(eventName,eventData,callback){if(!eventData){return log(\"Event data is corrupted\")}var url=\"https://ct.pinterest.com/v3/?tid=2612465858884\"+\"&event=\"+encodeURIComponent(eventName);var data={sid:eventData.sid,said:eventData.said,engineKey:eventData.engineKey};for(var key in data){if(data.hasOwnProperty(key)){url+=\"&ed[\"+encodeURIComponent(key)+\"]=\"+encodeURIComponent(data[key])}}var img=new Image;img.onerror=img.onload=callback;img.src=url};var said=location.href.replace(/^https?:\\/\\/([^\\/]+).*$/i,\"$1\").toLowerCase().replace(\"www.\",\"\");var eventData={sid:SiqConfig.siqSid,said:said,engineKey:siqConfig.engineKey};fbViewLog(\"pageView\",eventData);pinViewLog(\"pagevisit\",eventData)}(window.siq_S);","(function(){var said=location.href.replace(/^https?:\\/\\/([^\\/]+).*$/i,\"$1\").toLowerCase();var fbLog=function(eventName,eventData,callback){if(!eventData){return log(\"Event data is corrupted\")}if(eventName.toLowerCase()===\"search\"){eventName=\"Search\"}var url=\"https://www.facebook.com/tr/?id=649690295426340\"+\"&ev=\"+encodeURIComponent(eventName);if(eventName===\"Search\"){url+=\"&cd[search_string]=\"+encodeURIComponent(eventData.kw)}var data={sid:eventData.sid,said:eventData.said.replace(\"www.\",\"\"),kw:eventData.kw,engineKey:eventData.engineKey};for(var key in data){if(data.hasOwnProperty(key)){url+=\"&cd[\"+encodeURIComponent(key)+\"]=\"+encodeURIComponent(data[key])}}var img=new Image;img.onerror=img.onload=callback;img.src=url};var pinLog=function(eventName,eventData,callback){if(!eventData){return log(\"Event data is corrupted\")}if(eventName.toLowerCase()===\"search\"){eventName=\"search\"}var url=\"https://ct.pinterest.com/v3/?tid=2612465858884\"+\"&event=\"+encodeURIComponent(eventName);if(eventName===\"search\"){url+=\"&ed[search_query]=\"+encodeURIComponent(eventData.kw)}var data={sid:eventData.sid,said:eventData.said.replace(\"www.\",\"\"),kw:eventData.kw,engineKey:eventData.engineKey};for(var key in data){if(data.hasOwnProperty(key)){url+=\"&ed[\"+encodeURIComponent(key)+\"]=\"+encodeURIComponent(data[key])}}var img=new Image;img.onerror=img.onload=callback;img.src=url};var firePixels=function(eventName,eventData,callback){fbLog(eventName,eventData,callback);pinLog(eventName,eventData,callback)};var getSearchData=function(){var autocomplete=window.siq_S(\".holdResults\");if(autocomplete.length===0){return}var classes=autocomplete.attr(\"class\").split(\" \");var index=-1;for(var i=0;i<classes.length;i++){var clazz=classes[i].trim();if(/^siq_searchIndexResult-\\d+$/.test(clazz)){index=clazz.replace(/^siq_searchIndexResult-(\\d+)$/,\"$1\")}}if(index<0){return}var input=window.siq_S(\".siq_searchIndex-\"+index);return{kw:input.val(),sid:SiqConfig.siqSid,said:said,engineKey:siqConfig.engineKey}};var getMobileSearchData=function(el){var input=window.siq_S(el).parents(\"#siq_mobile\").find(\".siq_searchwrap input.siq_searchfield\");return{kw:input.val(),sid:SiqConfig.siqSid,said:said,engineKey:siqConfig.engineKey}};var bindEventListeners=function(){window.siq_S(document).on(\"click\",\".holdResults .searchWrapperLabel, .holdResults ul li .resultsMore\",function(){firePixels(\"Search\",getSearchData())});window.siq_S(document).on(\"click\",\".siq-autocomplete a\",function(){if(!window.siq_S(this).hasClass(\"siq-recommended-link\")&&window.siq_S(this).parents(\".siq-recommended-link\").length===0){firePixels(\"Search\",getSearchData())}});window.siq_S(document).on(\"submit\",\"form.siq_searchForm\",function(){firePixels(\"Search\",getSearchData())});window.siq_S(document).on(\"keydown\",function(e){e=e||window.event;switch(e.which||e.keyCode){case 13:if(window.siq_S(\".holdResults\").length>0&&window.siq_S(\".holdResults .siq-autocomplete.highlighted\").length>0){firePixels(\"Search\",getSearchData())}else if(window.siq_S(e.target).is(\"#siq_ajax_search\")||window.siq_S(e.target).parents(\"form\").is(\"#siq_search_results div.siq_search_ajax.siq_search_box form\")){firePixels(\"Search\",getSearchData())}break}});window.siq_S(document).on(\"click touch\",\".siq_aclinewrap\",function(){firePixels(\"Search\",getMobileSearchData(this))});if(document.referrer&&document.referrer.replace(/^https?:\\/\\/([^\\/]+).*$/i,\"$1\").toLowerCase()!==said){var searchPageUrl=SiqConfig.resultPageUrl.replace(/^https?:/,\"\").replace(/\\?.*$/,\"\");var currentPageUrl=location.href.replace(/^https?:/,\"\").replace(/\\?.*$/,\"\");if(searchPageUrl!==currentPageUrl){return}var getParamFromURL=function(url,param){if(url.indexOf(\"?\")<0){return undefined}var query=url.substr(url.indexOf(\"?\")+1);if(query.length===0){return undefined}var paramValsPairs=query.split(\"&\");for(var i=0;i<paramValsPairs.length;i++){var pair=paramValsPairs[i];if(pair.indexOf(\"=\")<0&&decodeURIComponent(pair)===param){return true}else{var name=decodeURIComponent(pair.substr(0,pair.indexOf(\"=\")));if(param===name){return decodeURIComponent(pair.substr(pair.indexOf(\"=\")+1))}}}return undefined};var keyword=getParamFromURL(location.href,SiqConfig.queryParameter)||getParamFromURL(location.href,SiqConfig.searchBoxName);eventData={kw:keyword,sid:SiqConfig.siqSid,said:said,engineKey:siqConfig.engineKey,refURL:document.referrer};firePixels(\"Search\",eventData)}};var init=function(){SiqContainer.waitAndRun(function(){return!!window.siq_S},bindEventListeners,1e3,20*1e3)};init()})();","!function(){var r;SiqConfig.impression_id=(r=(new Date).getTime(),\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g,function(e){var i=(r+16*Math.random())%16|0;return r=Math.floor(r/16),(\"x\"==e?i:3&i|8).toString(16)}));var e={};e.sid=SiqConfig.siqSid,e.said=location.href.replace(/^https?:\\/\\/([^\\/]+).*$/i,\"$1\").toLowerCase().replace(\"www.\",\"\"),e.engine_key=siqConfig.engineKey,e.source_url=location.href,e.external_referrer=document.referrer,e.impression_id=SiqConfig.impression_id,e=e,e=\"//track3.searchiq.co/api/tr?event=\"+\"impression\"+\"&eventInfo=\"+encodeURIComponent(JSON.stringify(e))+\"&cb=\"+Date.now(),document.createElement(\"IMG\").src=e}();","!function(s){var o,a,n,r;void 0!==s&&(o=location.href.replace(/^https?:\\/\\/([^\\/]+).*$/i,\"$1\").toLowerCase(),a=location.href,n=function(e,i,n){var r,t,s;i&&((r=new Image).onerror=r.onload=n,t=null!=i.kw?i.kw.replace(/\\\"/g,\"\"):i.kw,s='{\"sid\":\"'+i.sid+'\",\"said\":\"'+i.said.replace(\"www.\",\"\")+'\",\"kw\":\"'+t+'\",\"source_url\":\"'+a+'\",\"engineKey\":\"'+i.engineKey+'\"'+(i.refURL?',\"external_referrer\":\"'+i.refURL+'\"':\"\")+\"}\",r.src=\"//track.searchiq.co/api/tr?event=\"+encodeURIComponent(\"search\")+\"&eventInfo=\"+encodeURIComponent(s))},r=function(){var e=s(\".holdResults\");if(0!==e.length){for(var i=e.attr(\"class\").split(\" \"),n=-1,r=0;r<i.length;r++){var t=i[r].trim();/^siq_searchIndexResult-\\d+$/.test(t)&&(n=t.replace(/^siq_searchIndexResult-(\\d+)$/,\"$1\"))}if(!(n<0))return{kw:s(\".siq_searchIndex-\"+n).val(),sid:SiqConfig.siqSid,said:o,engineKey:siqConfig.engineKey}}},function(){if(s(document).on(\"click\",\".holdResults .searchWrapperLabel, .holdResults ul li .resultsMore\",function(){n(0,r())}),s(document).on(\"click\",\".siq-autocomplete a\",function(){s(this).hasClass(\"siq-recommended-link\")||0!==s(this).parents(\".siq-recommended-link\").length||n(0,r())}),s(document).on(\"submit\",\"form.siq_searchForm\",function(){n(0,r())}),s(document).on(\"keydown\",function(e){switch((e=e||window.event).which||e.keyCode){case 13:(0<s(\".holdResults\").length&&0<s(\".holdResults .siq-autocomplete.highlighted\").length||s(e.target).is(\"#siq_ajax_search\")||s(e.target).parents(\"form\").is(\"#siq_search_results div.siq_search_ajax.siq_search_box form\"))&&n(0,r())}}),s(document).on(\"click touch\",\".siq_aclinewrap\",function(){n(0,{kw:s(this).parents(\"#siq_mobile\").find(\".siq_searchwrap input.siq_searchfield\").val(),sid:SiqConfig.siqSid,said:o,engineKey:siqConfig.engineKey})}),document.referrer&&document.referrer.replace(/^https?:\\/\\/([^\\/]+).*$/i,\"$1\").toLowerCase()!==o){if(SiqConfig.resultPageUrl.replace(/^https?:/,\"\").replace(/\\?.*$/,\"\")!==location.href.replace(/^https?:/,\"\").replace(/\\?.*$/,\"\"))return;function e(e,i){if(!(e.indexOf(\"?\")<0)){var n=e.substr(e.indexOf(\"?\")+1);if(0!==n.length)for(var r=n.split(\"&\"),t=0;t<r.length;t++){var s=r[t];if(s.indexOf(\"=\")<0&&decodeURIComponent(s)===i)return!0;if(i===decodeURIComponent(s.substr(0,s.indexOf(\"=\"))))return decodeURIComponent(s.substr(s.indexOf(\"=\")+1))}}}var i=e(location.href,SiqConfig.queryParameter)||e(location.href,SiqConfig.searchBoxName);eventData={kw:i,sid:SiqConfig.siqSid,said:o,engineKey:siqConfig.engineKey,refURL:document.referrer},n(0,eventData)}}())}(window.siq_S);","!function(){\n var img=new Image();\n img.src=\"//api.searchiq.co/live?engineKey=\"+(window.siqConfig||window.SiqACConfig).engineKey;\n}();"],"enableAutocompleteFacet":false,"enableResultsPageFacet":false,"openResultInTab":false,"resultPageLayout":"LIST","hideLogo":false,"licensed":true,"enablePostTypeFilter":true,"defaultThumbnailUrl":"","displayContentFromStart":false,"autocompleteTemplate":"default","resultPageTemplate":"default","domain":"www.sherdog.com","multiSelectFacetEnabled":false,"enablePopularitySorting":false,"engineKey":"e24fe983e6ac3a447328bbd9a8dd6797","forceToApplyAutocompleteResult":false,"noResultPage":false,"autocompleteFollowUrlByClick":false,"enableSearchHistory":false,"enablePopularKeywordSearch":false,"enableKeywordSuggestions":true,"injectionUnitEnabled":false,"partnerEventFireEnabled":false,"autocompleteSponsoredInjectionOnly":false,"publisherAutocompleteDisabled":false,"disableWrapTextVertically":false,"disableSponsoredTitle":false,"disableSponsoredBody":false,"disableSponsoredImage":false,"disableSponsoredDomain":false,"isPartner":false})