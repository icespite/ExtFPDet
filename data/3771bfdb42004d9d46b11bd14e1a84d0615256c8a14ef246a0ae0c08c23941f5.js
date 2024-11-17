
          {
            "@context": "http://schema.org",
            "@type": "NewsArticle","pageType": "top","mainEntityOfPage":{
                "@type": "WebPage",
                "@id":   "https://www.businessinsider.jp/"
            },
            "headline": "Business Insider Japan｜ビジネス インサイダー ジャパン",
            "image": {
                "@type": "ImageObject",
                "url": "https://www.businessinsider.jp/asset/common/img/bi_ogp_B.png",
                "width": 1200,
                "height": 900
            },
            "datePublished": "",
            "dateModified": "",
            "author": {
              "@type": "Person",
              "name": "",
              "url": ""
            },
            "publisher": {
              "@type": "Organization",
              "name": " BUSINESS INSIDER JAPAN",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.businessinsider.jp/asset/common/img/Jsonld-logo.png",
                "width": 600,
                "height": 60
              }
            },
            "description": "Business Insider はミレニアル世代のビジネスパーソンを主要ターゲットに、政治、経済、金融、テクノロジー、企業戦略、スポーツなど幅広い分野のニュースを配信するビジネスニュースサイトです。",
            "is_sponsored": false          }
        ;


  window.dataLayer = window.dataLayer || [];
  var data = {};
  // pageDetails
  data['pageDetails'] = {};
      data['pageDetails']['pageType'] = 'page';
    // userDetails
  data['userDetails'] = {}
  var loginStatus = 'non-logged';
  var subscriberId = 'none';
  var subscriptionStatus = 'non-subscriber';
  var subscriptionProduct = 'none';
  var subscriptionPackage = 'none';
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if(key.indexOf('primeLoginStatus') != -1) {
      loginStatus = 'logged';
      subscriberId = localStorage.getItem('primeUserId');
      subscriptionStatus = 'subscriber';
      subscriptionProduct = 'BI PRIME';
      subscriptionPackage = localStorage.getItem('primeLoginStatus');
      break;
    }
  }
  data['userDetails']['loginStatus'] = loginStatus;
  data['userDetails']['subscriberId'] = subscriberId;
  data['userDetails']['subscriptionStatus'] = subscriptionStatus;
  data['userDetails']['subscriptionPackage'] = subscriptionPackage;
  window.dataLayer.push(data);
;

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NV3VW2S');;

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MWX7LL3');;


      window.WebFontConfig = {
        custom: {
          families: ['headline-semi'],
          urls: ['/asset/pc/css/fonts.css?v=202208301920']
        },
        active: function() {
          sessionStorage.fonts = true;
        }
      };

      (function() {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
    ;


        !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
        ;


    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];

    var gptAdSlots=[];
    var headerBiddingSlots = [];
    var nonHeaderBiddingSlots = [];
    var lazyloadingSlots = [];
    var apstagLazyloadingSlots = {};
    var cX = cX || {}; cX.callQueue = cX.callQueue || [];

    var pbjs = pbjs || {};
    pbjs.que = pbjs.que || [];

    var failSafeTimeout = 3000;

    var apstag_pubID = "3659";
    var apstag_bidTimeout = 1000;


    cX.callQueue.push(['getUserSegmentIds', {persistedQueryId: "6f906d96ea07d52dcd9f61e824f415ee11c7b8cc", callback: function(segments) {
      if(typeof window.localStorage === 'object' && typeof window.localStorage.getItem === 'function') {
        localStorage.setItem("cxSegments", segments.join(","));
      }
    }}]);
     
    function getUserSegmentIdsLocal() {
      var segments = [];
      if(typeof window.localStorage === 'object' && typeof window.localStorage.getItem === 'function' && localStorage.getItem("cxSegments") !== null && localStorage.getItem("cxSegments").length>0) {
        segments = localStorage.getItem("cxSegments").split(',');
      }
      return segments;
    }



    googletag.cmd.push(function(){
        gptAdSlots[0] = googletag.defineSlot("/15055520/pc_bi_top_billboard",[[728, 90], [970, 250]],"bi_normal-0").addService(googletag.pubads());
        gptAdSlots[1] = googletag.defineSlot("/15055520/pc_bi_skin",[[1, 1]],"bi_normal-1").addService(googletag.pubads());
        gptAdSlots[2] = googletag.defineSlot("/15055520/pc_bi_1st_splashbox",[[300, 250]],"bi_normal-2").addService(googletag.pubads());
        gptAdSlots[3] = googletag.defineSlot("/15055520/pc_bi_halfpage",[[300, 250], [300, 600]],"bi_normal-3").addService(googletag.pubads());
        gptAdSlots[4] = googletag.defineSlot("/15055520/pc_bi_2nd_splashbox",[[300, 250], [1, 1]],"bi_normal-4").addService(googletag.pubads());
        gptAdSlots[5] = googletag.defineSlot("/15055520/pc_bi_2nd_billboard",[[970, 250]],"bi_normal-5").addService(googletag.pubads());
        
        googletag.pubads().setTargeting("insider", "NEWS");
        googletag.pubads().setTargeting("pagetype", "top");
        googletag.pubads().setTargeting("querystring", ["r-US","IR-T"]);
                googletag.pubads().setTargeting("CxSegments", getUserSegmentIdsLocal());

        // DemandManager設定
        headerBiddingSlots.push(gptAdSlots[0]);
        nonHeaderBiddingSlots.push(gptAdSlots[1]);    // Prebid.js非対象枠
        headerBiddingSlots.push(gptAdSlots[2]);
        headerBiddingSlots.push(gptAdSlots[3]);
        lazyloadingSlots['bi_normal-4'] = gptAdSlots[4];    // lazyloading枠
        lazyloadingSlots['bi_normal-5'] = gptAdSlots[5];    // lazyloading枠
        
        googletag.pubads().disableInitialLoad();
        
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();

        var ppid;
        var cookies = document.cookie.split(/; ?/);
        for(var c of cookies){
          var ckv = c.split('=');
          if(ckv[0] === 'ppid'){
            ppid = ckv[1];
            break;
          }
        }
        if (ppid) {
          googletag.pubads().setPublisherProvidedId(ppid);
        }
        googletag.enableServices();

        // Prebid.js非対象枠は、即時refresh()実行
        if (nonHeaderBiddingSlots.length > 0) {
          googletag.pubads().refresh(nonHeaderBiddingSlots);
        }
    });


    apstag.init({
        pubID: apstag_pubID,
        adServer: 'googletag',
        bidTimeout: apstag_bidTimeout
    });

                var apstagSlots = [{
                    slotID: 'bi_normal-0',
                    slotName: '/15055520/pc_bi_top_billboard',
                    sizes: [[728, 90], [970, 250]]
                },    {
                    slotID: 'bi_normal-2',
                    slotName: '/15055520/pc_bi_1st_splashbox',
                    sizes: [[300, 250]]
                },    {
                    slotID: 'bi_normal-3',
                    slotName: '/15055520/pc_bi_halfpage',
                    sizes: [[300, 600]]
                }
            ];

            apstagLazyloadingSlots['bi_normal-4'] = {
                    slotID: 'bi_normal-4',
                    slotName: '/15055520/pc_bi_2nd_splashbox',
                    sizes: [[300, 250]]
                };
            apstagLazyloadingSlots['bi_normal-5'] = {
                    slotID: 'bi_normal-5',
                    slotName: '/15055520/pc_bi_2nd_billboard',
                    sizes: [[970, 250]]
                };

        
    function fetchHeaderBids(apstagSlots, headerBiddingSlots) {
        var bypassA9 = false;

        var bidders = ['a9', 'prebid'];

        var requestManager = {
            adserverRequestSent: false
        };

        bidders.forEach(function(bidder) {
            requestManager[bidder] = false;
        });

        function allBiddersBack() {
            var allBiddersBack = bidders
                .map(function(bidder) {return requestManager[bidder]; })
                .filter(function(bool) {return bool;})
                .length === bidders.length;
            return allBiddersBack;
        }

        function headerBidderBack(bidder) {
            if (requestManager.adserverRequestSent === true) {
                return;
            }
            if (bidder === 'a9') {
                googletag.cmd.push(function() {
                    apstag.setDisplayBids();
                });
            } else if (bidder === 'prebid') {
                // DO NOTHING
            }

            requestManager[bidder] = true;

            if (allBiddersBack()) {
                sendAdserverRequest();
            }
        }

        function sendAdserverRequest() {
            if (requestManager.adserverRequestSent === true) {
                return;
            }
            requestManager.adserverRequestSent = true;
            googletag.cmd.push(function() {
                googletag.pubads().refresh(headerBiddingSlots);
            });
        }

        function requestBids() {
            // apstag.fetchBids({
            //     slots: apstagSlots
            // }, function(bids) {
            //     headerBidderBack('a9');
            // });
            if (bypassA9) {
                headerBidderBack("a9");
            } else {
                apstag.fetchBids({
                    slots: apstagSlots
                }, function(bids) {
                    headerBidderBack('a9');
                });
            }

            googletag.cmd.push(function() {
                pbjs.que.push(function() {
                    pbjs.setConfig({
                        ortb2: {
                            user: {
                                ext: {
                                    data: {
                                        CxSegments: getUserSegmentIdsLocal()
                                    }
                                }
                            }
                        }
                    });

                    pbjs.rp.requestBids({
                        callback: function (bidResponses) {
                            headerBidderBack('prebid');
                        },
                        gptSlotObjects: headerBiddingSlots
                    });
                });
            });
        }

        requestBids();

        window.setTimeout(function() {
                sendAdserverRequest();
        }, failSafeTimeout);
    };

    fetchHeaderBids(apstagSlots, headerBiddingSlots);
        ;


  document.addEventListener("DOMContentLoaded", () => {
    const scrollObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.target.dataset &&
            !entry.target.dataset.adsLoaded
          ) {
            fetchHeaderBids([apstagLazyloadingSlots[entry.target.id]], [lazyloadingSlots[entry.target.id]]);
            entry.target.dataset.adsLoaded = true;
          }
        });
      },
      { rootMargin: "100%" }
    ); 
    googletag.cmd.push(function(){
        const adslots = Object.keys(lazyloadingSlots);
        for (var i = adslots.length - 1; i >= 0; i--) {
            const element = document.getElementById( adslots[i] )
            if( element ) {
                scrollObserver.observe( element );
            }
        }
    });
  });
;


    var targetAds = [];
    if (targetAds.length > 0) {
        googletag.cmd.push(function() {
            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                var slot = event.slot;
                for (var i = targetAds.length - 1; i >= 0; i--) {
                    var targetAd = targetAds[i];
                    if (slot.getSlotElementId() === targetAd) {
                        var headingElem = document.querySelector('#' + slot.getSlotElementId()).previousElementSibling;
                        if (!event.isEmpty) headingElem.style.display='block';
                    }
                }
            });
        });
    }
;


        var cX = window.cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
        cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || [];
        cX.options = cX.options || {compat:{c1x:{wait:3000}}};
    ;


        var page =1;
    ;


        window.OneSignal = window.OneSignal || [];
        window.dataLayer = window.dataLayer || [];

        function OSPermissioncheck() {
                       OneSignal.on('notificationPermissionChange', function(permissionChange) {
              var currentPermission = permissionChange.to;
              window.dataLayer.push({
                'event': 'permissionChangeEvent',
                'currentPermission': currentPermission
              });
            });
        }
        function OSDetectPopover() {
                       function detectPopoverEvent(eventStr) {
              OneSignal.on(eventStr, function() {
                window.dataLayer.push({'event': 'OSpopover','popoverEvent': eventStr});
              });
            }
            detectPopoverEvent('popoverShown');
            detectPopoverEvent('popoverAllowClick');
            detectPopoverEvent('popoverCancelClick');
            detectPopoverEvent('popoverClosed');
        }
        function OSFunctionIfEnabled() {
                    OneSignal.isPushNotificationsEnabled(function(isEnabled) {
            if (isEnabled) {
              OneSignal.getUserId( function(userId) {
                                cX.callQueue.push(['sendEvent', 'webpush', { userId: userId, action: 'pageview' },{origin: "bij-website", persistedQueryId: 'cf1105a2460e61a59fe17aacdafdba00ca81123a'}]);
              });
            }
          });
        }
        OneSignal.push(function() {
          OSPermissioncheck();
          OSDetectPopover();
          OSFunctionIfEnabled();
          OneSignal.init({
            appId: "de49822f-8a4b-4efa-acef-497cee79b3f0"          });
        });
    ;


        var cX = cX || {}; cX.callQueue = cX.callQueue || [];
    cX.options = cX.options || { compat: { c1x: { wait: 3000 } } };
    cX.callQueue.unshift(['invoke', function() {if(!cX.getUserId(false)) {cX.setCustomParameters({"newuser":"true"}); cX.startSessionAnnotation({"newuser_S":"true"});}}]);
    cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || [];
    cX.callQueue.push(['setSiteId', '1141840750395492427']);
    cX.callQueue.push(["invoke", function() {
        var cpl = [];
        var sal = [];
        var cp = {}, sa = {};
        var cpMaxLen = 256;
        var cpKeyLen = 20;
        var now = new Date();
        try{
        var refhost = cX.library._findRealReferrer().split("/")[2];
        if(refhost && location.hostname !== refhost) {
            cp["referrer_host"] = sa["referrer_host_S"] = refhost.slice(0,cpMaxLen);
        }
        }catch(e){}
        var u = ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"];
        if((typeof(sal) !== "undefined") && (Object.prototype.toString.call(sal) === "[object Array]")) {
        Array.prototype.push.apply(u, sal);
        }
        if(location.search) location.search.substring(1).split("&").forEach(function(k){
        try{
            var v = k.split("=");
            if(v[0].slice(0,3)==="cx_" && v[1]) {
            sa[v[0].replace(/^cx_/,"")+"_S"] = decodeURIComponent(v[1]).slice(0,cpMaxLen);
            } else if(u.indexOf(v[0].toLowerCase())!==-1 && v[1]) {
            cp[v[0].toLowerCase().slice(0,cpKeyLen)] = sa[v[0].toLowerCase()+"_S"] = decodeURIComponent(v[1]).slice(0,cpMaxLen);
            } else if((typeof(cpl) !== "undefined") && (Object.prototype.toString.call(cpl) === "[object Array]") && (cpl.indexOf(v[0].toLowerCase())!==-1 && v[1])) {
            cp[v[0].toLowerCase().slice(0,cpKeyLen)] = decodeURIComponent(v[1]).slice(0,cpMaxLen);
            }
        }catch(e){}
        });
        if(cX.getUserId(false)) {
        try{
            var t = now.getTime() - parseInt(cX.library.m_atfr.match(/altm=(\d+)/)[1]);
            if (t >= 1000*60*30) {
            cX.stopAllSessionAnnotations();
            var da = Math.floor(t/(1000*60*60*24));
            if(da < 1) {
                cp["elapsed"] = sa["elapsed_S"] = "\u0031\u65E5\u4EE5\u5185";
            } else if(da < 7) {
                cp["elapsed"] = sa["elapsed_S"] = String(da)+"\u65E5\u3076\u308A";
            } else if(da < 31) {
                cp["elapsed"] = sa["elapsed_S"] = String(Math.floor(da/7))+"\u9031\u9593\u3076\u308A";
            } else if(da < 365) {
                cp["elapsed"] = sa["elapsed_S"] = String(Math.floor(da/31))+"\u30F6\u6708\u3076\u308A";
            } else {
                cp["elapsed"] = sa["elapsed_S"] = "1\u5E74\u4EE5\u4E0A";
            }
            }
        } catch(e) {}
        }
        cp["hour"] = now.getHours();
        cp["wday"] = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][now.getDay()];
        if(document.referrer.match(/cdn\.cxpublic\.com\/generic_v[0-9]+\.html/)){
            sa["cx_source_S"] = "cxrecs";
        }
        if(Object.keys(cp).length>0) {
        cX.setCustomParameters(cp);
        }
        if(Object.keys(sa).length>0) {
        cX.startSessionAnnotation(sa);
        }
        try {
        "newuser_S" in cX.library._getSessionAnnotations() && cx_props["k"].push("newuser");
        } catch(e) {}
    }]);
    var arg = new Object;
    var pair=location.search.substring(1).split('&');
    for(var i=0;pair[i];i++) {
        var kv = pair[i].split('=');
        arg[kv[0]]=kv[1];
    }
    // ログイン状態取得
    switch (localStorage.getItem('primeLoginStatus')) {
        case 'NONE':
        case 'FREE':
        cX.callQueue.push(['setCustomParameters', { 'registered': 'false', 'registered_level': 'none' }]);
        break;
        case 'VIP':
        cX.callQueue.push(['setCustomParameters', { 'registered': 'true', 'registered_level': 'vip' }]);
        cX.callQueue.push(['addExternalId', { 'id': localStorage.getItem('primeUserId'), 'type': 'bij'}]);
        break;
        case 'MONTH':
        case 'YEAR':
        cX.callQueue.push(['setCustomParameters', { 'registered': 'true', 'registered_level': 'paid' }]);
        cX.callQueue.push(['addExternalId', { 'id': localStorage.getItem('primeUserId'), 'type': 'bij'}]);
        break;
        default:
        cX.callQueue.push(['setCustomParameters', { 'registered': 'false', 'registered_level': 'unspecified' }]);
        break;
    }
    //cX.callQueue.push(['addExternalId', { 'id': arg.m_usr, 'type': 'bij'}]);
    cX.CCE.callQueue.push(['sendPageViewEvent','mdg', 'cf1105a2460e61a59fe17aacdafdba00ca81123a']);
    cX.callQueue.push(['sync', {'partner': 'aone', 'customerId': 'ff99f90aa76b56e4'}]);
    ;


    (function(d,s,e,t){e=d.createElement(s);e.type='text/java'+s;e.async='async';e.src='https://cdn.cxense.com/cx.cce.js';t=d.getElementsByTagName(s)[0];t.parentNode.insertBefore(e,t);})(document,'script');
    ;


    window.cXcustom = window.cXcustom || function() {(window.cXcustom.q = window.cXcustom.q || []).push(arguments)};
    var cx_dmp_params = {origin: "mdg-web", persistedQueryId: "cf1105a2460e61a59fe17aacdafdba00ca81123a"};
    cX.callQueue.push(['invoke', function() {
        cXcustom("scrollDepth", function(pos){cX.sendEvent("scroll", {pos_in_page:String(pos)+'%'},cx_dmp_params);} , 0, '', false, 1000);
        cXcustom("scrollDepth", function(pos){cX.sendEvent("scroll", {pos_in_article:String(pos)+'%'},cx_dmp_params);}, 1, 'p-post-content', true, 1000);
        cXcustom("scrollDepth", function(pos){cX.sendEvent("scroll", {pos_in_article:String(pos)+'%'},cx_dmp_params);}, 1, 'bc-primary-article', true, 1000);
        cXcustom("clickedTracker", function(area, url, sendEvent) {var param={};param['area']=area;if(url){param['clickedUrl']=url;}sendEvent("clickedarea", param, cx_dmp_params);});
        cX.loadScript("https://assets.media-platform.com/common/js/lib/cxense/cx-custom.js");
    }]);
;


var tp = window.tp || [];



(function(d,c){d.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";var j=function(adblocker){var t=new Date;t.setTime(t.getTime()+60*5*1E3);d.cookie="__adblocker="+(adblocker?"true":"false")+"; expires="+t.toUTCString()+"; path=/"};var s=d.createElement(c);s.async=true;s.src="//www.npttech.com/advertising.js";s.onerror=function(){j(true);};var b=d.getElementsByTagName(c)[0];b.parentNode.insertBefore(s,b)})(document,"script");

(function(g,h,c){c=Number.isInteger(c)?parseInt(c):15;(new Promise(function(a,d){var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.src=(h?"//experience-ap.piano.io":"//sandbox.piano.io")+"/xbuilder/experience/load?aid="+g;b.onload=function(){window.tpLoaded?a():d(!0)};b.onerror=function(){d(!0)};var e=document.querySelector("script");e.parentNode.insertBefore(b,e)})).then(function(){return new Promise(function(a,d){0==c?a():function(b,e){function f(){window.tp&&tp.isInitialized?a():k++>e?d(!0):setTimeout(f,b)}var k=0;setTimeout(f,b)}(1E3*c/20,20)})})["catch"](function(a){a&&(a=document.querySelector("#tpModal"))&&(a.style.display="block",(a=document.querySelector(".pi_close"))&&a.addEventListener("click",function(){document.querySelector("#tpModal").style.display="none"}))})})('N29dqIPypj',true)

;


  (function () {
    var _lgy     = document.createElement('script');
    var _lgy_adv = 12125;
    window._lgy_advs = window._lgy_advs || {};
    window._lgy_advs[_lgy_adv] = false;
    window._lgy_options = window._lgy_options || {};
    window._lgy_options[_lgy_adv] = {};
    _lgy.async = true;
    _lgy.src = 'https://dsp.logly.co.jp/seg.js';
    var _lgy0 = document.getElementsByTagName('script')[0];
    _lgy0.parentNode.insertBefore(_lgy, _lgy0);
  })();
;

googletag.cmd.push(function() {googletag.display("bi_normal-1");});;

googletag.cmd.push(function() {googletag.display("bi_normal-0");});;


        var totalContents = 2;
        var addingContentsNum = totalContents;
        var settings = {
            'ids': [],
            'limit': addingContentsNum,
            'mediaPrefix': ' ｜ BUSINESS INSIDER JAPAN',
            'shuffleType': 'random',
            'permalink': 'https://www.businessinsider.jp' + location.pathname
        };
        var obTestMode = false;
        var PremiumSponsoredId = '00000001655f3f3b';

        settings.ids.push({
            'name': 'PremiumSponsored',
            'method': 'getCxenseAd',
            'id': PremiumSponsoredId,
            'num': 2
        });

        var currentPagePath = location.pathname;
        if (currentPagePath == '/') {
            var MCN = new MediaConnect('MCN');
            MCN.settings(settings).requestQueue(function (data) {
                var h1Titles = $('main .f-content-primary.--walljack h1');
                for (var i = 0 ; i < data.length; i++) {
                    var item = data[i];
                    var label = '<p class="p-cardList-cardSponsoredLabel">' + item.sponsoredValue + '</p>';
                    var meta_text = '';
                    //if ( item.sponsoredValue === 'Sponsored' ) {
                    if ( item.sponsoredValue.indexOf('Sponsor') != -1 ) {
                        var label = '<img loading="lazy" src="/asset/common/img/bi_brandstudio_label.svg" alt="BI BRAND STUDIO">';
                        var meta_text = '<ul class="p-cardList-cardByline"><li class="p-cardList-cardLabel">' + item.sponsoredValue + '</li></ul>';
                    } else if ( item.sponsoredValue === 'prime' ) {
                        var label = '<div class="p-label-primeLabel"><a class="p-label-primeLabelInner" href="/prime_article/">有料会員限定</a></div>';
                    }
                    var adBlock = '<div class="p-cardList-card">' +
                    '<p class="p-cardList-cardImage">' +
                    '<a href="' + item.link.url + '" target="' + item.link.target + '"><img class="lazyload" src="/asset/noimage.jpg" data-src="' + item.thumbnail.src + '" alt="' + item.title + '" width="265" height="199"></a>' +
                    '</p>'+
                    '<h1 class="p-cardList-cardTitle">' +
                    '<a href="' + item.link.url + '" target="' + item.link.target + '">' + item.title + '</a></h1>' + 
                    meta_text +
                    '<div class="p-cardList-cardSponsored">' + label + '</div>' +
                    '</div>';

                   var target = '';
                    if (i == 0) {
                        target = h1Titles[4].parentElement;
                        targetClass = h1Titles[4].className;
                    } else {
                        if (i == 1) {
                            target = h1Titles[6].parentElement;
                            targetClass = h1Titles[6].className;
                        }
                    }

                    if ( targetClass == 'p-largeSummaryCard-title' || h1Titles[4].className == 'p-hotSummaryCard-title') {
                        var adBlockCardList = '<div class="p-cardList">' + '<div class="p-cardList-content">' + adBlock + '</div></div>';
                        $(target).before(adBlockCardList);
                    } else {
                        $(target).before(adBlock);
                    }
                }
            });
        }
    ;

 (function() { try { var scriptEl = document.createElement('script'); scriptEl.type = 'text/javascript'; scriptEl.async = 'async'; scriptEl.src = ('https:' == document.location.protocol) ? 'https://cdn.cxense.com/cx.js' : 'http://cdn.cxense.com/cx.js'; var targetEl = document.getElementsByTagName('script')[0]; targetEl.parentNode.insertBefore(scriptEl, targetEl); } catch (e) {}; })(); ;

 var cX = cX || {}; cX.callQueue = cX.callQueue || []; cX.callQueue.push(['insertAdSpace', { adSpaceId:'00000001661a6d57', adUnitWidth:800, adUnitHeight:300, initialHorizontalAdUnits:1, initialVerticalAdUnits:1 } ]); ;


if (document.querySelector('.p-post-content div#in-article1:nth-last-child(1)')) {
    document.querySelector("#postBottomMovie").style.display = "none";
}
;

googletag.cmd.push(function() {googletag.display("bi_normal-2");});;


    var cX = window.cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
    cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || [];
    cX.CCE.callQueue.push(['run',{
        widgetId: '6794ce18ef466163efe5e757159fb2c6afcbe648',
        targetElementId: 'cx_6794ce18ef466163efe5e757159fb2c6afcbe648'
    }]);
;

googletag.cmd.push(function() {googletag.display("bi_normal-3");});;

 (function() { try { var scriptEl = document.createElement('script'); scriptEl.type = 'text/javascript'; scriptEl.async = 'async'; scriptEl.src = ('https:' == document.location.protocol) ? 'https://cdn.cxense.com/cx.js' : 'http://cdn.cxense.com/cx.js'; var targetEl = document.getElementsByTagName('script')[0]; targetEl.parentNode.insertBefore(scriptEl, targetEl); } catch (e) {}; })(); ;

 var cX = cX || {}; cX.callQueue = cX.callQueue || []; cX.callQueue.push(['insertAdSpace', { adSpaceId:'0000000165e02681', adUnitWidth:300, adUnitHeight:250, initialHorizontalAdUnits:1, initialVerticalAdUnits:1 } ]); ;

googletag.cmd.push(function() {googletag.display("bi_normal-4");});;

 (function() { try { var scriptEl = document.createElement('script'); scriptEl.type = 'text/javascript'; scriptEl.async = 'async'; scriptEl.src = ('https:' == document.location.protocol) ? 'https://cdn.cxense.com/cx.js' : 'http://cdn.cxense.com/cx.js'; var targetEl = document.getElementsByTagName('script')[0]; targetEl.parentNode.insertBefore(scriptEl, targetEl); } catch (e) {}; })(); ;

 var cX = cX || {}; cX.callQueue = cX.callQueue || []; cX.callQueue.push(['insertAdSpace', { adSpaceId:'00000001667da228', adUnitWidth:300, adUnitHeight:250, initialHorizontalAdUnits:1, initialVerticalAdUnits:1 } ]); ;


$(function() {
    function activateSlider() {
        $('.p-insiderCardSlider-content').slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4,
        });
    }
    activateSlider();
});
;

googletag.cmd.push(function() {googletag.display("bi_normal-5");});;


var cX = window.cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || [];
cX.CCE.callQueue.push(['setSnapPoints',[{ min: 1024, name: 'desktop'},{ min: 768,  name: 'tablet'},{ min: 0,name: 'mobile'}]]);
cX.CCE.callQueue.push(['run',{
  widgetId: '9897794412feeada9644038ea0904e8998cc90b7',
  targetElementId: 'cx_9897794412feeada9644038ea0904e8998cc90b7'
},
{
  context: {
    categories: {
      answered:localStorage.getItem("_cxj_survey_answered") ? localStorage.getItem("_cxj_survey_answered").split("|")[0] : ""
    }
  }
},
null
]);
;


        var url = "https://www.businessinsider.jp/";
    ;


    tp = window.tp || [];
    jQuery( function ( $ ) {
        pianoLoginLogoutButtons = function () {
            if (tp.user.isUserValid())
            {
                $('#piano-logout-container').show();
                $('#piano-login-register-container').hide();
            } else {
                $('#piano-logout-container').hide();
                $('#piano-login-register-container').show(); }
            };
            tp.push(["init", function () {
                pianoLoginLogoutButtons();
                $("#piano-login-button").click( function (data) { tp.pianoId.show({screen: 'login',loggedIn: pianoLoginLogoutButtons});
            });
            $("#piano-logout-button").click( function () { tp.pianoId.logout(pianoLoginLogoutButtons); } );
        }]);
    });
