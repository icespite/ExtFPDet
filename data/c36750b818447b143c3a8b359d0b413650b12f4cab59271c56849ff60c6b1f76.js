
    //<!--
(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));    //-->
;



    var GAManager = {
        _accounts: [],
        // initialize all trackers
        init: function (accounts) {
            this._accounts = accounts;
            this._accounts.forEach(function(item, index){
                ga("create", item, {"name": "tracker" + index}, "auto");
            });
        },
        // replacement for Googles ga send function
        ga: function() {
            var passedArgs = Array.prototype.slice.call(arguments);
            if (passedArgs[0] == "send" && passedArgs[1] == "event") {
                var lastParam = passedArgs[passedArgs.length - 1];
                var fieldsObject = typeof lastParam === "object" ? lastParam : null;
                var eventCategory = passedArgs[2];
                var eventAction = passedArgs[3];
                var eventLabel = (passedArgs[4] && passedArgs[4] != fieldsObject) ? passedArgs[4] : null;
                var eventValue = (passedArgs[5] && passedArgs[5] != fieldsObject) ? passedArgs[5] : null;

                if (eventCategory != "outbound-article") {
                    var eventObject = {
                        "event_category": eventCategory,
                        "event_action": eventAction
                    };
                    if (eventLabel) {
                        eventObject.event_label = eventLabel;
                    }
                    if (eventValue) {
                        eventObject.value = eventValue;
                    }
                    if (fieldsObject && fieldsObject.nonInteraction) {
                        eventObject.non_interaction = true;
                    }
                    if (fieldsObject && fieldsObject.transport) {
                        eventObject.transport_type = fieldsObject.transport;
                    }
                    console.log("gtag event", eventAction, eventObject);
                    gtag("event", eventAction, eventObject);
                }
            }
            if (/send|set|require/.test(passedArgs[0])) {
                this._accounts.forEach(function(item, index){
                    var args = passedArgs.slice();
                    args[0] = "tracker" + index + "." + args[0];
                    //console.log("analytics", args);
                    ga.apply(null, args);
                });
            }
        }
    };

    if (window.I11C && window.I11C.RegisterAbdCallback) {
        window.I11C.RegisterAbdCallback(function() {
            window.adsBlocked = true;
            var scr1 = document.createElement("script");
            var scr2 = document.createElement("script");
            scr1.src = "//doc.osesame.net/advertisement.js";
            document.head.appendChild(scr1);
            scr2.innerHTML = "" +
                "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n" +
                "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n" +
                "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n" +
                "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n" +
                "ga('provide', 'instabi', function(tracker, opts) {\n" +
                    "tracker.set('dimension' + opts.dimensionIndex, I11C && !!I11C.Morph);\n" +
                    "tracker.set('dimension' + (opts.dimensionIndex + 1), windows.adsBlocked);\n" +
                "})";
            document.head.appendChild(scr2);
            //ga("create", "UA-94323-27", "auto");
            GAManager.init(["UA-94323-27"]);
            GAManager.ga("require", "instabi", {dimensionIndex: 5});
            
            GAManager.ga("send", "pageview");

            if (typeof(window.I11C) !== "undefined" && window.I11C.Morph == 1) {
                GAManager.ga("send", "event", {
                    eventCategory: "instartLogic",
                    eventAction: "true",
                    transport: "beacon"
                });
            }
            return true;
        });
    } else {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");

        ga("provide", "instabi", function(tracker, opts) {
            var ad = document.createElement("ins");
            ad.className = "AdSense";
            ad.style.display = "block";
            ad.style.position = "absolute";
            ad.style.top = "-1px";
            ad.style.height = "1px";
            document.body.appendChild(ad);
            tracker.set("dimension" + opts.dimensionIndex, !ad.clientHeight);
            tracker.set("dimension4", typeof I10C != "undefined" && I10C && !!I10C.Morph);
            document.body.removeChild(ad);
        });

        //ga("create", "UA-94323-27", "auto");
        GAManager.init(["UA-94323-27"]);
        GAManager.ga("require", "instabi", {dimensionIndex: 5});
        
        GAManager.ga("send", "pageview");
    }
    ;


            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PPEXTWC7DT');

        ;


	var winLoadedAt = new Date().getTime();
	window.addEventListener('unload', function(event) {
		var cTime = new Date().getTime();
		var eValue = Math.round((cTime-winLoadedAt)/1000);
		if (eValue >= 30) { eValue = '30+'; } else if (eValue < 10) { eValue = '0' + eValue; }
		console.log('Pageview Duration: ' + eValue);
		if (typeof(ga) != 'undefined') {
			GAManager.ga('send', 'event', 'Pageview Duration', eValue, {transport: 'beacon'});
		}
	}, false);
	;

(function (a, c, s, u){'Insticator'in a || (a.Insticator={ad:{loadAd: function (b){Insticator.ad.q.push(b)}, q: []}, helper:{}, embed:{}, version: "4.0", q: [], load: function (t, o){Insticator.q.push({t: t, o: o})}}); var b=c.createElement(s); b.src=u; b.async=!0; var d=c.getElementsByTagName(s)[0]; d.parentNode.insertBefore(b, d)})(window, document, 'script', 'https://d3lcz8vpax4lo2.cloudfront.net/ads-code/fc0dfd76-50f1-4ee7-9e23-c7def2f2a597.js');

!(function(o,_name){function $(){($.q=$.q||[]).push(arguments)}$.v=1,o[_name]=o[_name]||$;!(function(o,t,n,c){function e(n){(function(){try{return(localStorage.getItem("v4ac1eiZr0")||"").split(",")[4]>0}catch(o){}return!1})()&&(n=o[t].pubads())&&n.setTargeting(_name+"-engaged","true")}(c=o[t]=o[t]||{}).cmd=c.cmd||[],typeof c.pubads===n?e():typeof c.cmd.unshift===n?c.cmd.unshift(e):c.cmd.push(e)})(window,"googletag","function");})(window,String.fromCharCode(97,100,109,105,114,97,108));!(function(t,n,c,i,o,a,r){!(function e(f,u,$,s){u=n.createElement(i),$=n.getElementsByTagName(i)[0],s=$.parentNode,u.async=1,u.src=f,u[o]&&u[o]("error",(function(i){s.removeChild(u),t++,i&&!i.isTrusted||t>2?(function(t,i,o){if(new(function(){t=(function h(e,t,r,n){if(!e||function e(r,n,i,o){for(o=0;r&&o<r.length;o+=2)o>0&&(r[o+1]||[]).unshift(i),i=(n=t[r[o]])&&n(e,r[o+1]||[]);return i}(e))return r.apply(this,n||[])}([0,[[[1,[[2,[[[4,["admbenefits"],3,[""]]]]]]]]]],[function c(e,t){for(var r=t[0]&&t[0].length>0,n=0;r&&n<t[0].length;n++)r=e(t[0][n]);return r},function a(e,t){return!e(t[0])},function o(e,t){for(var r=!1,n=0;!r&&t[0]&&n<t[0].length;n++)r=e(t[0][n]);return r},function u(e,t,r,n){return r=t[0]||"",(n=t[1]||"")?-1!==r.indexOf(n):!!r},function f(e,t,r){return(r=(document.cookie||"").match(new RegExp("(^|;\s*)"+t[0]+"\s*=\s*([^;]+)")))?r[2]:void 0}],function(el,a,f,i,m){el=document.createElement("div");el.innerHTML="<style>.bOvWNQ{all:initial;position:fixed;top:0;right:0;bottom:0;left:0;font-family:'Source Sans Pro',Arial,'Helvetica';overflow:auto;background-color:rgba(255,255,255,1);z-index:2147483647;}.ghwPHX{width:100%;height:100%;max-width:740px;margin:0 auto;position:relative;padding-top:0;}.duogaR{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:0 auto;height:100%;}.cNA-DtH{display:inline-block;max-width:700px;width:100%;margin-top:48px;padding-top:48px;border-top:1px solid rgba(18,30,64,0.12);}.ingAWB{position:fixed;bottom:0;height:40px;width:100%;text-align:center;line-height:40px;font-size:13px;color:rgba(153,153,153,1);background-color:rgba(153,153,153,0.4);}.fcJBux{display:block;}.gqbAuJ{max-width:150px;max-height:150px;}.dfmDjJ{height:15px;vertical-align:middle;}.bBWhhG{text-align:left;box-sizing:border-box;margin:0 0 5px;font-size:24px;line-height:28px;font-weight:500;color:rgba(0,0,0,1);}.eGsdXc{box-sizing:border-box;text-align:left;margin-bottom:15px;font-size:14px;line-height:22px;font-weight:400;color:rgba(0,0,0,1);}.cPOkjL{display:inline-block;margin-right:5px;line-height:40px;}.fKMnlC{-webkit-text-decoration:none;text-decoration:none;color:rgba(153,153,153,1);}.goLcbP{width:100%;height:33px;cursor:pointer;color:rgba(255,255,255,1);background-color:rgba(255,120,0,1);border:none;border-radius:3px;font-weight:700;margin-bottom:24px;}.hWLVlJ{cursor:pointer;background-color:rgba(255,255,255,1);color:rgba(153,153,153,1);border:none;font-weight:700;}</style><div class=\"bOvWNQ\"><div class=\"ghwPHX\"><div class=\"duogaR\"><div class=\"fcJBux\"><img src=\"https://i.imgur.com/db6ML8Rh.jpg\" class=\"gqbAuJ\"></img></div><div class=\"cNA-DtH\"><h3 color=\"0,0,0,1\" class=\"bBWhhG\">It looks like you're using an adblocker.</h3><div color=\"0,0,0,1\" class=\"eGsdXc\">Advertising helps our team create the content you love on Sherdog. You can support us for free by disabling your adblocker while browsing.</div><button data-asfn-click-0 data-instructions-url=\"https://my.getadmiral.com/instructions\" color=\"255,255,255,1\" class=\"goLcbP\">Disable my adblocker</button><button data-asfn-click-2 color=\"153,153,153,1\" class=\"hWLVlJ\">Continue without disabling</button></div></div></div><div color=\"153,153,153,1\" class=\"ingAWB\"><span><span class=\"cPOkjL\">Need help? <a href=\"https://getadmiral.typeform.com/to/s8M2nY5H\" target=\"_blank\" color=\"153,153,153,1\" class=\"fKMnlC\">Contact support</a></span><span class=\"cPOkjL\">|</span></span><span class=\"cPOkjL\"><a href=\"https://getadmiral.com/pb/\" target=\"_blank\" color=\"153,153,153,1\" class=\"fKMnlC\"><span>We&apos;re using&nbsp;</span><img src=\"https://cdnral.com/412d3542383834413139444439304546363938383032364230392d3138_logo.svg\" class=\"dfmDjJ\"></img></a></span></div></div>";function onClose(){el.remove()}a='data-asfn-';f=["click",function(e){var t=e.currentTarget.getAttribute("data-instructions-url"),r=e.currentTarget.parentElement,n=document.createElement("iframe");n.src=t,n.style="margin: 36px 0 36px;outline: 0;border: 0;width: 100%;height: 400px;",r.replaceWith(n),window.addEventListener("message",(function e(t){var i=t.data,o=i.goBack,c=i.blockerDisabled;o?(n.replaceWith(r),window.removeEventListener("message",e)):c&&window.location.reload()}))},"click",onClose];for (i=0;i<f.length;i+=2){(m=el.querySelector('[data-asfn-'+f[i]+'-'+i+']'))&&m.addEventListener(f[i],f[i+1]);}document.body.appendChild(el);return {"candidates":[{"batchID":"62ed6dcae9711610ddca6ee1","candidateID":"62ed6dcae9711610ddca6ee2","groups":["purpose:failsafe"],"payload":{"container":"body","name":"Failsafe","options":{"attribution":true,"btnColor":"255,120,0,1","btnText":"Continue without disabling","btnTextColor":"255,255,255,1","continueTextColor":"153,153,153,1","footerBgColor":"153,153,153,0.4","footerTextColor":"153,153,153,1","headerBgColor":"255,255,255,1","headline":"It looks like you're using an adblocker.","instructionsActionText":"Disable my adblocker","logoImageURL":"https://i.imgur.com/db6ML8Rh.jpg","logoLocation":"top","message":"Advertising helps our team create the content you love on Sherdog. You can support us for free by disabling your adblocker while browsing.","name":"Default Failsafe","showXButton":false,"supportLeaderText":"Need help?","supportLinkText":"Contact support","textBgColor":"255,255,255,1","textColor":"0,0,0,1","type":"gated"},"replace":false,"when":["and",[["not",["or",[["find","cookie:admbenefits",""]]]]]]},"payloadType":"template","triggers":[{"type":"adblockerDisabled"}],"tsUpdated":1680296095.641}]}},[]))}),!r++){i=c.sessionStorage;try{o=JSON.parse(i[a]).slice(-4)}catch(e){o=[]}o.push([Date.now(),{p:""+c.location,r:""+n.referrer,cs:t,t:1}]),i[a]=JSON.stringify(o)}})():e(t>1?"https://succeedscene.com/ads_3480d257-d52b-48cf-b904-78a81c28b976/v2/ads.load.js":f)})),s.insertBefore(u,$)})("https://blushingbread.com/build/4f0840069/d3710a2375262fd1d14c3c800ef.js")})(0,document,window,"script","addEventListener","afsvisits");;;!(function(t,n,e,i,a){function c(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);if(!t.length)return a;"ping"===t[0]?t[2]({gdprAppliesGlobally:!!n.__cmpGdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub"}):t.length>0&&a.push(t)}function o(t){if(t&&t.data&&t.source){var i,a=t.source,c="string"==typeof t.data&&t.data.indexOf("__tcfapiCall")>=0;(i=c?((function(t){try{return JSON.parse(t)}catch(n){}})(t.data)||{}).__tcfapiCall:(t.data||{}).__tcfapiCall)&&n[e](i.command,i.version,(function(t,n){var e={__tcfapiReturn:{returnValue:t,success:n,callId:i.callId}};a&&a.postMessage(c?JSON.stringify(e):e,"*")}),i.parameter)}}!(function f(){if(!n.frames[i]){var e=t.body;if(e){var a=t.createElement("iframe");a.style.display="none",a.name=i,e.appendChild(a)}else setTimeout(f,5)}})(),c.v=1,"function"!=typeof n[e]&&(n[e]=n[e]||c,n.addEventListener?n.addEventListener("message",o,!1):n.attachEvent&&n.attachEvent("onmessage",o))})(document,window,"__tcfapi","__tcfapiLocator",[]);;!(function(n,t,i,u,e,o,r){function a(n){if(n){var u=(n.data||{}).__uspapiCall;u&&t[i](u.command,u.version,(function(t,i){n.source.postMessage({__uspapiReturn:{returnValue:t,success:i,callId:u.callId}},"*")}))}}!(function f(){if(!window.frames[u]){var t=n.body;if(t){var i=n.createElement("iframe");i.style.display="none",i.name=u,t.appendChild(i)}else setTimeout(f,5)}})();var s={getUSPData:function(n,t){return n!==1?t&&t(null,!1):t&&t({version:null,uspString:null},!1)}};function c(n,t,i){return s[n](t,i)}c.v=1,"function"!=typeof t[i]&&(t[i]=t[i]||c,t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent&&t.attachEvent("onmessage",a)),o=n.createElement(e),r=n.getElementsByTagName(e)[0],o.src="https://blushingbread.com/scripts/41a7b65cad6/838a6e976e7d624450e8d872804b5a9.js",r.parentNode.insertBefore(o,r)})(document,window,"__uspapi","__uspapiLocator","script");;


window.grumi = {
key: "2a236ed9-fb8c-429e-ab47-cacac34a3be6"
};
;



var PREBID_TIMEOUT = 2500;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

googletag.cmd.push(function() {
  googletag.pubads().disableInitialLoad();
});

var noPrebid = false;

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var adUnits = [
{
	code: 'ad728',
	mediaTypes: {
		banner: {
			sizes: [
				[728, 90],
				[970, 90]
			]
		}
	},
	bids: [
    {
			bidder: 'appnexus',
			params: {
				placementId: '11079634'
			}
		},
		{
			bidder: 'rubicon',
			params: {
				accountId: '9366',
				siteId: '16808',
				zoneId: '448918'
			}
		},
        {
        bidder: 'pubmatic',
        params : {
            publisherId: '160831',
            adSlot: 'sherdog_ad728'
        }
        }
	]
}, {
	code: 'ad728ng',
	mediaTypes: {
		banner: {
			sizes: [
				[728, 90]
			]
		}
	},
	bids: [
    {
			bidder: 'rubicon',
			params: {
				accountId: '9366',
				siteId: '16808',
				zoneId: '448920'
			}
		}
	]
}, {
	code: 'ad300',
	mediaTypes: {
		banner: {
			sizes: [
				[300, 250],
				[300, 600]
			]
		}
	},
	bids: [
    {
			bidder: 'appnexus',
			params: {
				placementId: '11079631'
			}
		},
		{
			bidder: 'rubicon',
			params: {
				accountId: '9366',
				siteId: '16808',
				zoneId: '448918'
			}
		},
        {
        bidder: 'pubmatic',
        params : {
            publisherId: '160831',
            adSlot: 'sherdog_ad300'
        }
        }
	]
}, {
	code: 'ad300ng',
	mediaTypes: {
		banner: {
			sizes: [
				[300, 250]
			]
		}
	},
	bids: [
    {
			bidder: 'appnexus',
			params: {
				placementId: '11079638'
			}
		},
		{
			bidder: 'rubicon',
			params: {
				accountId: '9366',
				siteId: '16808',
				zoneId: '448920'
			}
		},
        {
            bidder: 'pubmatic',
            params : {
                publisherId: '160831',
                adSlot: 'sherdog_ad300ng'
            }
        }
	]
}, {
	code: 'ad300st',
	mediaTypes: {
		banner: {
			sizes: [
				[300, 250]
			]
		}
	},
	bids: [
    {
			bidder: 'appnexus',
			params: {
				placementId: '11079644'
			}
		},
		{
			bidder: 'rubicon',
			params: {
				accountId: '9366',
				siteId: '16808',
				zoneId: '448922'
			}
		},
	]
}, {
	code: 'ad320',
	mediaTypes: {
		banner: {
			sizes: [
				[300, 50],
				[320, 50],
				[320, 100],
				[320, 150]
			]
		}
	},
	bids: [
    {
			bidder: 'appnexus',
			params: {
				placementId: '11079639'
			}
		},
		{
			bidder: 'rubicon',
			params: {
				accountId: '9366',
				siteId: '16808',
				zoneId: '448918'
			}
		},
	]
}
];

var validAdUnits = isSmallerScreen() ? ['ad320', 'ad300', 'ad300inP'] : ['ad728', 'ad728ng', 'ad300', 'ad300in', 'ad300inP', 'ad300ng', 'ad300st'];
var adUnitsExists = [];
for (var i in adUnits) {
    if (validAdUnits.indexOf(adUnits[i].code) >= 0) {
        adUnitsExists.push(adUnits[i]);
    }
}
adUnits = adUnitsExists;

function fetchHeaderBids(forceRefresh = false) {

    function allBiddersBack() {
        var bidders = ['prebid'];
        var allBiddersBack =
            bidders.map(function(bidder) {
                return biddersBack[bidder];
            })
            .filter(function(bool) {
                return bool;
            })
            .length === bidders.length;
        return allBiddersBack;
    }

    function headerBidderBack(bidder) {
        if (biddersBack.adserverRequestSent === true) {
            return;
        }
        if (bidder === 'prebid') {
            biddersBack.prebid = true;
        }
        if (allBiddersBack()) {
            sendAdserverRequest();
        }
    }

    function sendAdserverRequest() {                                        // called when prebid bids are back (replacment for prebids initAdServer)
        if (biddersBack.adserverRequestSent === true) {
            return;
        }
        biddersBack.adserverRequestSent = true;

        googletag.cmd.push(function() {
            pbjs.que.push(function() {
                pbjs.setTargetingForGPTAsync();

                if (forceRefresh) {
                    googletag.pubads().refresh();
                }

                var adsPresent = [];
                $.each(gptAds, function (key, value) {
                    if ($('div.gpt-ad:not(.js-inview)[data-id="' + key + '"]').length) {
                        adsPresent.push(value);
                        // this line is needed for the refresh method to work correctly
                        googletag.display(key);
                    }
                });

                googletag.pubads().refresh(adsPresent);
            });
        });
    };


    var biddersBack = {
        prebid: false,
        adserverRequestSent: false
    };

    // Request bids from Prebid
    if (noPrebid === true) {
      headerBidderBack('prebid');
    } else {
      pbjs.requestBids({
          bidsBackHandler: function(bidResponses) {
              var targetingParams = pbjs.getAdserverTargeting();
              headerBidderBack('prebid');                                         // here we had initAdserver();
          }
      });
    }

    // Set timeout function
    setTimeout(function() {
        sendAdserverRequest();
    }, PREBID_TIMEOUT);

}

function refreshBids() {
    fetchHeaderBids(true);
};
;



if (adUnits.length > 0) {

    pbjs.que.push(function() {
        pbjs.addAdUnits(adUnits);
        pbjs.bidderSettings = {
            standard: {adserverTargeting: [
                {key: 'hb_bidder', val: function(bidResponse) {return bidResponse.bidderCode;}},
                {key: 'hb_adid', val: function(bidResponse) {return bidResponse.adId;}},
                {key: 'hb_pb', val: function(bidResponse) { var cpm = bidResponse.cpm;if (cpm <= 1.00) {return (Math.floor(cpm * 20) / 20).toFixed(2);} else if (cpm <= 5.00) {return (Math.floor(cpm * 10) / 10).toFixed(2);} else if (cpm <= 20.00) {return (Math.floor(cpm * 2) / 2).toFixed(2);} else {return '20.00';}}},
                {key: 'hb_size', val: function(bidResponse) {return bidResponse.size;}}
            ]}
        };

    fetchHeaderBids();
    });

} else {
    fetchHeaderBids(false);
}
;



var gptAds = gptAds || {};

googletag.cmd.push(function() {

console.log('[GPT DEBUG] googletag.cmd.push');

if (!(typeof(window.I11C) !== 'undefined' && window.I11C.Morph == 1)) {
gptAds['adoop']    = googletag.defineOutOfPageSlot('/4403/cr/sherdog/home', 'adoop').addService(googletag.pubads());
} else {
googletag.pubads().setTargeting('instartLogic', '1');
}

if (!isSmallerScreen()) {
gptAds['ad728']    = googletag.defineSlot('/4403/cr/sherdog/home', [[728,90], [970,90], [970,250]], 'ad728').addService(googletag.pubads()).setTargeting('pos', 'a');
gptAds['ad300']    = googletag.defineSlot('/4403/cr/sherdog/home', [[300,250], [300,600], [160,600]], 'ad300').addService(googletag.pubads()).setTargeting('pos', 'a').setTargeting('kw', 'rightrail');
gptAds['ad728ng']  = googletag.defineSlot('/4403/cr/sherdog/home', [[728,90]], 'ad728ng').addService(googletag.pubads()).setTargeting('pos', 'a').setTargeting('kw', 'slideshow,slideshow-fullscreen,slideshow-lb');
gptAds['ad300ng']  = googletag.defineSlot('/4403/cr/sherdog/home', [[300,250]], 'ad300ng').addService(googletag.pubads()).setTargeting('pos', 's').setTargeting('kw', 'slideshow');
gptAds['ad300inP']  = googletag.defineSlot('/4403/cr/sherdog/home', [[300,250]], 'ad300inP').addService(googletag.pubads()).setTargeting('pos', 'p').setTargeting('ntvPlacement', '1111176').setTargeting('kw', 'in-article');
gptAds['ad300st']  = googletag.defineSlot('/4403/cr/sherdog/home', [[300,250]], 'ad300st').addService(googletag.pubads()).setTargeting('pos', 'b').setTargeting('kw', 'rightrail');
gptAds['ad300601'] = googletag.defineSlot('/4403/cr/sherdog/home', [[300,601], [300,250]], 'ad300601').addService(googletag.pubads()).setTargeting('pos', 'i').setTargeting('kw', 'insticator');
} else {
gptAds['ad320']    = googletag.defineSlot('/4403/cr/sherdog/home', [[300,50], [320,50], [320,100], [320,150]], 'ad320').addService(googletag.pubads()).setTargeting('pos', 'a');
gptAds['ad300']    = googletag.defineSlot('/4403/cr/sherdog/home', [[300,250]], 'ad300').addService(googletag.pubads()).setTargeting('pos', 'a').setTargeting('ntvPlacement', '1111177').setTargeting('kw', 'in-article-mobile');
gptAds['ad300inP']  = googletag.defineSlot('/4403/cr/sherdog/home', [[300,250]], 'ad300inP').addService(googletag.pubads()).setTargeting('pos', 'p').setTargeting('ntvPlacement', '1111176').setTargeting('kw', 'in-article');
gptAds['ad300in']  = googletag.defineSlot('/4403/cr/sherdog/home', [[300,250]], 'ad300in').addService(googletag.pubads()).setTargeting('pos', 's').setTargeting('kw', 'slideshow');
gptAds['ad300ng']  = googletag.defineSlot('/4403/cr/sherdog/home', [[300,250]], 'ad300ng').addService(googletag.pubads()).setTargeting('pos', 'c');
}
gptAds['fighterw']  = googletag.defineSlot('/4403/cr/sherdog/fighterpagewidgetunit', [[370, 200], [370, 250], [370, 150], [300, 250]], 'fighterw').addService(googletag.pubads());
gptAds['fighterh']  = googletag.defineSlot('/4403/cr/sherdog/hp_header_widget', [[390, 125], [972, 85]], 'fighterh').addService(googletag.pubads());

googletag.pubads().setTargeting('ct', 'home').setTargeting('site', 'sherdog').setTargeting('ci', '1');
googletag.pubads().enableSingleRequest();
googletag.pubads().disableInitialLoad();
googletag.pubads().collapseEmptyDivs(true);
googletag.enableServices();

});
;


var sbIngageTargeting = {
    custom_params: [
        { site : 'sherdog' },
        { ct : 'home' },
        { ci : '1' },
    ],
    zone : 'home'
}
;


    (function () {
        window.siqConfig = {
            engineKey: "e24fe983e6ac3a447328bbd9a8dd6797",
            forceLoadSettings: false        // change false to true if search box on your site is adding dynamically
        };
        window.siqConfig.baseUrl = "//pub.searchiq.co/";
        var script = document.createElement("SCRIPT");
        script.src = window.siqConfig.baseUrl + '/js/container/siq-container-2.js?cb=' + (Math.floor(Math.random()*999999)) + '&engineKey=' + siqConfig.engineKey;
        script.id = "siq-container";
        document.getElementsByTagName("HEAD")[0].appendChild(script);
    })();
;


		var isPlayByPlay = false;
	;


		(function(w,d,t,u){
			var a=d.createElement(t);a.async=1;a.src=u+"?url="+encodeURIComponent(w.location.href)+"&ref="+encodeURIComponent(d.referrer);
			var s=d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(a,s);
		})(window, document, 'script', 'https://a.ad.gt/api/v1/u/matches/316');
	;

{"@type":"WebPage","headline":"Sherdog.com: UFC, Mixed Martial Arts (MMA) News, Results, Fighting","@context":"http:\/\/schema.org","url":"https:\/\/www.sherdog.com\/"};


var geoData = {
    "result": {
        "country": {
            "code": "US",
            "smallFlagUrl": "\/img\/flags\/US.gif",
            "bigFlagUrl": "\/img\/flags\/big\/US.png"
        },
        "data": [
            {
                "coverpanel": []
            },
            []
        ]
    }
};
;

var isGeo = true;;


    <div class="slider-scroller">
        {{inlineArticles}}
    </div>
    <div class="slider-circles"></div>
    <img class="slider-left" src="/img/new/cover_slide_left.svg" alt="Left" /><img class="slider-right" src="/img/new/cover_slide_right.svg" alt="Right" />
;


    <a href="{{url}}">
        <img src="{{imageurl}}" alt="{{title}}" title="{{title}}" />
        <div class="title"><div>{{title}}</div></div>
    </a>
;

var isGeo = true;;


    <div class="first-row">
        {{firstArticle}}
        {{secondArticle}}
    </div>

    <div class="inline-four">
        {{inlineArticles}}
    </div>
;


    <a href="{{url}}" class="cover">
        <img src="{{imageurl}}" alt="{{title}}" title="{{title}}" /><div class="title">
            <div>{{title}}</div>
            <img src="/img/new/slanted_right.svg" alt="d" />
        </div>
    </a>
;


    <a href="{{url}}" class="card card-cover">
        <img src="{{imageurl}}" alt="{{title}}" title="{{title}}" />
        <div class="title">{{title}}</div>
    </a>
;


    <a href="{{url}}" class="card">
        <img src="{{imageurl}}" alt="{{title}}" title="{{title}}" />
        <div class="title">{{title}}</div>
    </a>
;

(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);;


function autocomplete_select(data) {
    if ((data.url != null) && (data.url != "")) {
        document.location = data.url;
    }
}
;


            let adhesiveTag = '', screenWidth = window.innerWidth;

            window.googletag = window.googletag || { cmd: [] };
            googletag.cmd.push(function () {
                if (screenWidth <= 400) {
                    adhesiveTag = googletag.defineSlot('/4403/cr/sherdog/adhesion-mobile', [[320, 50]], 'adhesiveLeaderboard').addService(googletag.pubads());
                }
                googletag.enableServices();
                googletag.display('adhesiveLeaderboard');
                googletag.pubads().refresh([adhesiveTag]);
            });
        ;


        let adhesiveCloseBtn = document.querySelector('.AdhesiveCloseBtn'), adhesiveContainer = document.querySelector('.adhesiveContainer');

        if (window.innerWidth <= 400) {
            adhesiveCloseBtn.style = "position: absolute; top:0; left: 0; color: #000000; cursor: pointer; width: 30px; height: 30px; padding: 2px; font-weight: bold;";
        }
        adhesiveCloseBtn.addEventListener('click', function () {
            adhesiveContainer.remove();
        })
    ;


  (function(){
    var insL1 = document.createElement('link'),
        insL2 = document.createElement('link'),
        firstSc = document.querySelector('script');

    insL1.setAttribute('rel', 'preload');
    insL2.setAttribute('rel', 'preload');

    insL1.setAttribute('as', 'script');
    insL2.setAttribute('as', 'script');

    insL1.setAttribute('href', 'https://securepubads.g.doubleclick.net/tag/js/gpt.js');
    insL2.setAttribute('href', 'https://d3lcz8vpax4lo2.cloudfront.net/ads-code/fc0dfd76-50f1-4ee7-9e23-c7def2f2a597.js');

    firstSc.parentNode.insertBefore( insL1, firstSc );
    firstSc.parentNode.insertBefore( insL2, firstSc );

  })();
;


window._qevents = window._qevents || [];

(function() {
var elem = document.createElement('script');
elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
elem.async = true;
elem.type = "text/javascript";
var scpt = document.getElementsByTagName('script')[0];
scpt.parentNode.insertBefore(elem, scpt);
})();

window._qevents.push({
qacct:"p-N_Vu1y1KSZqd5",
uid:"diana.johnson@craveonline.com"
});
;


;


 var pvar = { cid: "au-evolve", content: "0", server: "secure-au" };
 var trac = nol_t(pvar);
 trac.record().post();
;


            window.PARSELY = window.PARSELY || {
                autotrack: true,
                onload: function() {
                    console.log("Parsely loaded", window.parselyTracks);
                    if (window.parselyTracks) {
                        window.parselyTracks.forEach(function(parselyObj){
                            window.PARSELY.beacon.trackPageView(parselyObj);
                        });
                    }
                }
            };
            