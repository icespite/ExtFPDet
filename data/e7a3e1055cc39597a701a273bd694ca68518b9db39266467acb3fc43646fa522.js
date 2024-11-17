{"@context":"http://schema.org","@type":"CollectionPage","mainEntityOfPage":{"@type":"WebPage","@id":"/"},"headline":"The Washington Post - Breaking news and latest headlines, U.S. news, world news, and video - The Washington Post","description":"Breaking news, live coverage, investigations, analysis, video, photos and opinions from The Washington Post. Subscribe for the latest on U.S. and international news, politics, business, technology, climate change, health and wellness, sports, science, weather, lifestyle and more.","image":["https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Fimg%252Ewashingtonpost%252Ecom%2Fpb%2Fresources%2Fimg%2Ftwp-social-share%252Epng&w=1484"],"isAccessibleForFree":true,"hasPart":{"@type":"WebPageElement","isAccessibleForFree":true,"cssSelector":".paywall"},"publisher":{"@type":"NewsMediaOrganization","name":"The Washington Post","url":"/","ethicsPolicy":"https://www.washingtonpost.com/policies-and-standards/","masthead":"https://www.washingtonpost.com/policies-and-standards/masthead/","missionCoveragePrioritiesPolicy":"https://www.washingtonpost.com/policies-and-standards/","diversityPolicy":"https://www.washingtonpost.com/policies-and-standards/","correctionsPolicy":"https://www.washingtonpost.com/policies-and-standards/","verificationFactCheckingPolicy":"https://www.washingtonpost.com/policies-and-standards/","unnamedSourcesPolicy":"https://www.washingtonpost.com/policies-and-standards/","actionableFeedbackPolicy":"https://www.washingtonpost.com/policies-and-standards/","foundingDate":"1877-12-06","ownershipFundingInfo":"https://www.washingtonpost.com/policies-and-standards/","diversityStaffingReport":"http://asne.org/newsroom_diversitysurvey","refLocalNationalRequirements":null,"logo":{"@type":"ImageObject","url":"https://www.washingtonpost.com/pb/resources/img/thewashingtonpost-black-400x60.png"}}};

window.wpAdFusion = {"permutive":{"platform":"assembler","canonicalUrl":"https://www.washingtonpost.com/"},"commercialNode":"washingtonpost.com","contentType":"homepage","keywords":["washington d.c. news","dc news","virginia news","maryland news","breaking news video","photos","world news","local news","national news","us news","foreign news","dc traffic;dc weather","Obama","government","federal government","White House","dc sports","politics","politics news","political news","political opinion","environment","economy","technology","education","travel","dc","virginia","Maryland","washington post"],"isHomepage":true};


      !function(e,o,n,i){if(!e){e=e||{},window.permutive=e,e.q=[];var t=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})};e.config=i||{},e.config.apiKey=o,e.config.workspaceId=n,e.config.environment=e.config.environment||"production",(window.crypto||window.msCrypto)&&(e.config.viewId=t());for(var g=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],r=0;r<g.length;r++){var w=g[r];e[w]=function(o){return function(){var n=Array.prototype.slice.call(arguments,0);e.q.push({functionName:o,arguments:n})}}(w)}}}(window.permutive,"b1345a23-4810-46bd-a111-1ae9732b6d57","5f1f2661-22d4-401c-9c10-4d7647fb6edc",{"consentRequired":true});
      ;

var wpMetaData = {"canonical_url":"","commercial_node":"","content_section":"","alt_sections":"","content_type":"homepage","ct_tags":"","domain":"https://www.washingtonpost.com","sct_tags":"default","subType":"","authors":"","published_date":"","display_date":""};window.consumers=window.consumers || [];window.registerPwapiConsumer=function(callback){window.consumers.push(callback)};

window.dQ = window.dQ || {};
          window.dQ.hold = window.dQ.hold || [];
          var otCookie = document.cookie.match('wp_ak_ot=(1)[^;]*(;|$)') ? RegExp.$1 : '';
          window.dQ.participants = ["iab_banner","softwall"];
          // Removed iab_banner to support gradual rollout. Will remove upon completion.
          if (otCookie !== "1" && (window && window.location.href.indexOf('gtml=true') <= 0)) {
              window.dQ.participants = window.dQ.participants.filter(element =>  element !== 'iab_banner');
          }
          // Define placeholder function early. Will be replaced by Tetro client.
          if (typeof window.registerDisplay !== "function") {
              window.registerDisplay = (...args) => {
              dQ.hold.push(args[0]);
              };
          };;


       var OneTrustTCFStub;
       var otCookie = document.cookie.match('wp_ak_ot=(1)[^;]*(;|$)') ? RegExp.$1 : '';
       var geoCookie = document.cookie.match('(^|;) ?wp_geo=([^;]*)(;|$)') ? RegExp.$2 : '';
       if ((otCookie === "1" || (window && window.location.href.indexOf('gtml=true') >= 0)) &&
           ((geoCookie.indexOf('|EEA') >= 0) ||
            (window && window.location.href.indexOf('otr=eea') >= 0))) {
       OneTrustTCFStub = (function (e) {
    "use strict";
    var t = function () {
        var o = this;
        (this.LOCATOR_NAME = "__tcfapiLocator"),
          (this.win = window),
          (this.init = function () {
            for (; o.win; ) {
              try {
                if (o.win.frames[o.LOCATOR_NAME]) {
                  o.cmpFrame = o.win;
                  break;
                }
              } catch (e) {}
              if (o.win === window.top) break;
              o.win = o.win.parent;
            }
            o.cmpFrame ||
              (o.addFrame(),
              (o.win.__tcfapi = o.executeTcfApi),
              (o.win.receiveOTMessage = o.receiveIabMessage),
              (o.win.attachEvent || o.win.addEventListener)(
                "message",
                o.win.receiveOTMessage,
                !1
              ));
          }),
          (this.addFrame = function () {
            var e = o.win.document,
              t = !!o.win.frames[o.LOCATOR_NAME];
            if (!t)
              if (e.body) {
                var i = e.createElement("iframe");
                (i.style.cssText = "display:none"),
                  (i.name = o.LOCATOR_NAME),
                  i.setAttribute("title", "TCF Locator"),
                  e.body.appendChild(i);
              } else setTimeout(o.addFrame, 5);
            return !t;
          }),
          (this.receiveIabMessage = function (a) {
            var n = "string" == typeof a.data,
              e = {};
            try {
              e = n ? JSON.parse(a.data) : a.data;
            } catch (e) {}
            if (e && e.__tcfapiCall) {
              var t = e.__tcfapiCall,
                r = t.callId,
                i = t.command,
                s = t.parameter,
                c = t.version;
              o.executeTcfApi(
                i,
                s,
                function (e, t) {
                  var i = {
                    __tcfapiReturn: {
                      returnValue: e,
                      success: t,
                      callId: r,
                    },
                  };
                  a &&
                    a.source &&
                    a.source.postMessage &&
                    a.source.postMessage(n ? JSON.stringify(i) : i, "*");
                },
                c
              );
            }
          }),
          (this.executeTcfApi = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            if (!e.length) return o.win.__tcfapi.a || [];
            if ("setGdprApplies" === e[0])
              3 < e.length &&
                2 === parseInt(e[1], 10) &&
                "boolean" == typeof e[3] &&
                ((o.gdprApplies = e[3]),
                "function" == typeof e[2] && e[2]("set", !0));
            else {
              var i = e[0],
                a = e[1],
                n = e[2],
                r = e[3];
              "function" == typeof n &&
                i &&
                ("ping" === i
                  ? o.getPingReq(n, o.gdprApplies)
                  : o.addToQ(i, a, n, r));
            }
          }),
          (this.addToQ = function (e, t, i, a) {
            var n = o.win.__tcfapi;
            (n.a = n.a || []), n.a.push([e, t, i, a]);
          }),
          (this.getPingReq = function (e, t) {
            void 0 === t && (t = void 0),
              e({
                gdprApplies: t,
                cmpLoaded: !1,
                cmpStatus: "stub",
                apiVersion: "2.0",
              });
          }),
          this.init();
      },
      i = new t();
    return (e.TCF = t), (e.tcfStub = i), e;
  })({});} else {
     // do nothing
   };


            window.renderingEnv = "next",
            window.Fusion = {
              metas: {
                contentType: {value: "homepage"},
                pageName: {value: "homepage"},
                section: {value: "homepage"}
              },
              template: "template/homepage",
              deployment: "alpha"
            };
            window.pageType = "homepage";
      ;

window.assemblerVariant = "ab544fafc89dbc2e";;

window.isMobile = false;;

window.isNoNav = false;;

!function(e){var n="https://s.go-mpulse.net/boomerang/";if("False"=="True")e.BOOMR_config=e.BOOMR_config||{},e.BOOMR_config.PageParams=e.BOOMR_config.PageParams||{},e.BOOMR_config.PageParams.pci=!0,n="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="2L2Z6-GDWNL-RH2G3-MVS3W-7M6WF",function(){function e(){if(!o){var e=document.createElement("script");e.id="boomr-scr-as",e.src=window.BOOMR.url,e.async=!0,i.parentNode.appendChild(e),o=!0}}function t(e){o=!0;var n,t,a,r,d=document,O=window;if(window.BOOMR.snippetMethod=e?"if":"i",t=function(e,n){var t=d.createElement("script");t.id=n||"boomr-if-as",t.src=window.BOOMR.url,BOOMR_lstart=(new Date).getTime(),e=e||d.body,e.appendChild(t)},!window.addEventListener&&window.attachEvent&&navigator.userAgent.match(/MSIE [67]\./))return window.BOOMR.snippetMethod="s",void t(i.parentNode,"boomr-async");a=document.createElement("IFRAME"),a.src="about:blank",a.title="",a.role="presentation",a.loading="eager",r=(a.frameElement||a).style,r.width=0,r.height=0,r.border=0,r.display="none",i.parentNode.appendChild(a);try{O=a.contentWindow,d=O.document.open()}catch(_){n=document.domain,a.src="javascript:var d=document.open();d.domain='"+n+"';void(0);",O=a.contentWindow,d=O.document.open()}if(n)d._boomrl=function(){this.domain=n,t()},d.write("<bo"+"dy onload='document._boomrl();'>");else if(O._boomrl=function(){t()},O.addEventListener)O.addEventListener("load",O._boomrl,!1);else if(O.attachEvent)O.attachEvent("onload",O._boomrl);d.close()}function a(e){window.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!window.BOOMR||!window.BOOMR.version&&!window.BOOMR.snippetExecuted){window.BOOMR=window.BOOMR||{},window.BOOMR.snippetStart=(new Date).getTime(),window.BOOMR.snippetExecuted=!0,window.BOOMR.snippetVersion=12,window.BOOMR.url=n+"2L2Z6-GDWNL-RH2G3-MVS3W-7M6WF";var i=document.currentScript||document.getElementsByTagName("script")[0],o=!1,r=document.createElement("link");if(r.relList&&"function"==typeof r.relList.supports&&r.relList.supports("preload")&&"as"in r)window.BOOMR.snippetMethod="p",r.href=window.BOOMR.url,r.rel="preload",r.as="script",r.addEventListener("load",e),r.addEventListener("error",function(){t(!0)}),setTimeout(function(){if(!o)t(!0)},3e3),BOOMR_lstart=(new Date).getTime(),i.parentNode.appendChild(r);else t(!1);if(window.addEventListener)window.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a)}}(),"".length>0)if(e&&"performance"in e&&e.performance&&"function"==typeof e.performance.setResourceTimingBufferSize)e.performance.setResourceTimingBufferSize();!function(){if(BOOMR=e.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var n=""=="true"?1:0,t="",a="gtbi7yqxfe3pczhbn2vq-f-88c430313-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,o={"ak.v":"36","ak.cp":"914675","ak.ai":parseInt("403158",10),"ak.ol":"0","ak.cr":1,"ak.ipv":4,"ak.proto":"h2","ak.rid":"a52c693","ak.r":36432,"ak.a2":n,"ak.m":"j","ak.n":"essl","ak.bpcip":"52.194.143.0","ak.cport":41718,"ak.gh":"23.192.46.44","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.csrc":"-","ak.acc":"","ak.t":"1692495531","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==CA/zPOvpKwJ/w6yYoIEPEOIQSuDwQEe2CZB17ebEWkN3/S0SOSYzsgM+HCKzgwoojpCyBscUxw6tvaDltJTeAyloxs1BYkFDZYBDkvooFdU0QkqPSaZ2sqi8WQ1LVpeJTsiS7ZZGy8tOtmDs88OckQvA8IYKfs16I/y6WeDiNRXWwhw5J1bimvZGE+akvdZs0Ae+fdCv5/YX6b+IeEmU9LVGtTcGgpMN5mxUN6mcmGVOvd6K1H5RYRPGhNBn7Bn0+zNyEFFkSDksLeM/YMzwJr43Xx0G6MBiXp6bNbNaqVDJYpc5jITRyHQmQ21QUXDvnnKBB2FZoFRALqArNbmyfBlBeA6S9tmzFYvD9XTB4cGTpuJCPbPfr4oDFbyhZwypOfJ2YdvV6rAFQlzgTaYxWkxjyUM2+IS+Y+cFNcPa3+Y=","ak.pv":"2267","ak.dpoabenc":"","ak.tf":i};if(""!==t)o["ak.ruds"]=t;var r={i:!1,av:function(n){var t="http.initiator";if(n&&(!n[t]||"spa_hard"===n[t]))o["ak.feo"]=void 0!==e.aFeoApplied?1:0,BOOMR.addVar(o)},rv:function(){var e=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(e)}};BOOMR.plugins.AK={akVars:o,akDNSPreFetchDomain:a,init:function(){if(!r.i){var e=BOOMR.subscribe;e("before_beacon",r.av,null,null),e("onbeacon",r.rv,null,null),r.i=!0}return this},is_complete:function(){return!0}}}}()}(window);;



        var deployment = window.Fusion && window.Fusion.deployment || "no release";
        typeof window !== "undefined" && window.Sentry && window.Sentry.onLoad(function sentryInit() {
          window.Sentry.init({
            dsn: "https://cbbf40fbb8df40f88c3e24ceaea718b4@o298168.ingest.sentry.io/5418082",
            release: deployment,
            environment: "prod",
            sampleRate: 0.01,
            traceSampleRate: 0.01,
            integrations: [new Sentry.BrowserTracing()],
            whitelistUrls: [
              "washingtonpost.com",
              "wapodev.com",
              "wapostage.com",
              "washpost.arcpublishing.com",
              "sandbox.washpost.arcpublishing.com"
            ],
            blacklistUrls: [
              "washingtonpost.com/wp-stat/",
              "washingtonpost.com/scripts/",
              "*/src/",
              "*/verify.js",
              "*/score.min.js",
              "localhost"
            ],
            beforeSend: function(event, hint) {
              var error = hint && hint.originalException;
              if (error && error.message && error.message.match(/WPFusionReactErrorElex/)) {
                return event;
              }
              return null;
            }
        });
        window.Sentry.forceLoad();
      });
  