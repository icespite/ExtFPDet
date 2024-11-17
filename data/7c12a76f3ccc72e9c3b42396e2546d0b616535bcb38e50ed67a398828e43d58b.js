
    window.Unidata = {
        ostrov: 'webdio',
        rubrika: "emimino",
        reklama: true,
        keywords: [],
        webtype: "full",
    };
    // fix pro CPEX
    Unidata.biddingData = Unidata.biddingData || [{}];
    
        
                
                var pathname = window.location.pathname;
        if (pathname.length > 1) {
            pathname = pathname.substring(1, pathname.length-1);
            var result = pathname.split( '/' );
            for (var i = 0, length = result.length; i < length; i++) {
                Unidata.keywords.push(result[i]);
            }
        }
    
;


    /**
     * globalni promena s nazvem lokalniho javascriptu
     * @type String
     */
    var getNameProjectJs = "emiminoJs";
    /**
     * detection mobile
     */
     var isMobile = 0; // fix first load
    /**
     *
     */
    var bufferRun = [];
    /**
     * fix template V3
     */
    
            
            var postLoader = {
                start: function start(funct, args) {
                    funct();
                }
            };
        
        
    /**
     * konstanty pro projekt
     * @type Object
     */
    var getProjectConstants = {
        /** nazev js pro projekt */
        nameJs: getNameProjectJs,
        /** verze js */
        versionJs: "bb-normal-2370",
        /* templateVersion */
        templateVersion: "v3",
        /* theme */
        theme: "light",
        /* state */
        isMobile: false,
        action: "homepage",
        controller: "Emimino",
        /** http/https protokol */
        protocolScheme: "https",
        /** aktualni domena */
        domainActual: "https://www.emimino.cz/",
        domainActualUrl: "https://www.emimino.cz/",
        domainAdvert: "https://www.emimino.cz/bazar/",
        domainStatic: "https://s.emimino.cz/",
        domainStaticCss: "https://s.emimino.cz/css/",
        domainStaticJs: "https://s.emimino.cz/js/",
        domainStaticImages: "https://s.emimino.cz/images/",
        domainStaticShared: "https://s.emimino.cz/sharedStatic/",
        domainStaticSharedJs: "https://s.emimino.cz/sharedStatic/js/",
        domainStaticUi: "https://s.emimino.cz/ui/",
        domainStaticUiCss: "https://s.emimino.cz/ui/css/",
        domainStaticUiJs: "https://s.emimino.cz/ui/js/",
        domainStaticUiImages: "https://s.emimino.cz/ui/images/",
        domainStaticUiFonts: "https://s.emimino.cz/ui/fonts/"
    };

    /***
     * Google Recaptcha Key
     * @type {String}
     */
    var gRecaptchaKey = "6LfbmjkUAAAAAFrZDmH3u89RgdyXEr-241ZceRW2";

        /**
     * Facebook ID
     */
    var fbApiKey = {
        appId: '243565962341249',
        //autoLogAppEvents: true,
        xfbml: true,
        version: 'v8.0' // or v2.0, v2.1, v2.0
    }
    ;


    var sentry = {
        key: "https://50375941eb46470eafb36e90509ad5ff@sentry.io/148667",
        version: "bb-normal-2370",
        webType: "Desktop",
        whitelistUrls: [
            'www.emimino.cz/',
            's.emimino.cz/js/',
            's.emimino.cz/sharedStatic/js/',
            's.emimino.cz/ui/js/',
        ],
		ignoreErrors: [
			'V kódu se zbytečně nachází hůře podporované blokové elementy.',
			'bmone2n is undefined',
			'jQuery.nette extension is not loaded.',
			// Facebook borked
			'fb_xd_fragment',
			'Cannot read property \'debug\' of undefined',
			'googletag is not defined',
			'googletag.defineSlot is not a function',
			'Cannot read property \'makeAd\' of undefined',
			'Cannot call method \'makeAd\' of undefined',
			'Ads is not defined',
			'Misc is not defined'
		],
		ignoreUrls: [
			// Facebook flakiness
			/graph\.facebook\.com/i,
			// Facebook blocked
			/connect\.facebook\.net\/en_US\/all\.js/i,
			//uni.js
			/1gr.cz\/js\/uni\/uni.js?/i,
			/bbcdn-bbnaut\.ibillboard\.com/i
		]
    };
;


                            
                    Unidata.biddingData[0]["branding"] = true;
                
                            
                    Unidata.biddingData[0]["wallpaper"] = true;
                
                    ;


    window.cpexPackageConfig = {
        publisherSettingsPath: 'https://cdn.cpex.cz/settings/production/mafra.js',
        websiteSettingsPath: 'https://cdn.cpex.cz/settings/production/mafra/emimino.cz.js'
    }
    document.head.appendChild(Object.assign(document.createElement('script'), { src: `https://cdn.cpex.cz/package/cpex-package${window.location.href.indexOf('debug') > -1 ? '.js' : '.min.js'}` }))
;


    window.didomiOnReady = window.didomiOnReady || [];
window.didomiOnReady.push(() => {
  const consent = Didomi.getUserConsentStatusForAll()
  const granted = consent.purposes.disabled.length === 0
  const firstParty = localStorage.getItem('euconsent-v2')
  const experiment = Didomi.getExperiment();
  const testGroup = experiment ? experiment.group : null;
  if (!granted && !firstParty && testGroup === 'test') {
    Didomi.notice.show()
  }
});

document.head.appendChild(Object.assign(document.createElement('script'), { src: 'https://delivery.r2b2.cz/hb/mafra/emimino.cz_' + (Unidata.webtype == "full" ? "desktop" : "mobile") } ));


    tp = window.tp || [];
    tp.push(["setAid", 'ldpllFOBpe']);
    tp.push(["setCxenseSiteId", "4732542837648372374"]);
    tp.push(["setEndpoint", 'https://buy-eu.piano.io/api/v3']);
    tp.push(["setEspEndpoint", 'https://api-esp-eu.piano.io']);
    tp.push(["setUseTinypassAccounts", false]);
    tp.push(["setUsePianoIdUserProvider", true]);
    var userState = Unidata.isLogged ? (Unidata.isSubscriber ? ["subscriber"] : ["logged"]) : ["notlogged"];
    tp.push(["setContentIsNative", Unidata.ostrov == "sdelenih"]);
    tp.push(["init", function () {
        tp.experience.init();
    }]);
    var cX = cX || {}; cX.callQueue = cX.callQueue || [];
    cX.callQueue.push(['setCustomParameters', { 'userState': userState }]);
;

var pp_gemius_use_cmp = true;;

var adformtag = window.adformtag = window.adformtag || []; adformtag.push(function() { adformtag.setRequestParam('gdpr', '1'); });;


        (function (w, d, s, l, i) {
            w[l] = w[l] || []
            w[l].push({
                'gtm.start': new Date().getTime(), event: 'gtm.js'
            })
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''
                j.async = true
                j.src = 'https://www.googletagmanager.com/gtm.js?ver=2&id=' + i + dl
                f.parentNode.insertBefore(j, f)
        })(window, document, 'script', 'dataLayer', 'GTM-5VQP8D')
    ;


					<!--//--><![CDATA[//><!--
					var pp_gemius_identifier = 'AqiQ.e_A40Ytt3gTBzOFPMeyLb7wCScCgXXgKXhZQTz.l7';
					// lines below shouldnt be edited
					function gemius_pending(i) { window[i] = window[i] || function() {var x = window[i+'_pdata'] = window[i+'_pdata'] || []; x[x.length]=arguments;};};
					gemius_pending('gemius_hit'); gemius_pending('gemius_event'); gemius_pending('pp_gemius_hit'); gemius_pending('pp_gemius_event');
					(function(d,t) {try {var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],l='http'+((location.protocol=='https:')?'s':''); gt.setAttribute('async','async');
					gt.setAttribute('defer','defer'); gt.src=l+'://spir.hit.gemius.pl/xgemius.js'; s.parentNode.insertBefore(gt,s);} catch (e) {}})(document,'script');
					//--><!]]>
					;

Misc.sticky({id: "portal__menu", end: "minor", className: "portal__menu--fixed"});;

if (window.Ads) Ads.serve({"site":"emimino_cz","slots":[{"position":216,"provider":"sas","id":"m_paticka","bidding":true,"sas-size":"640x700,300x250,script1x1","default-size":"300x250"},{"position":24,"provider":"sas","id":"tip_2","sas-size":"text420x260,468x60"},{"position":65,"provider":"sas","id":"articlebox","sas-size":"text,690x60","default-size":"690x60"},{"position":66,"provider":"sas","id":"nativ_clankovy","sas-size":"text230x129,text172x129,native","default-size":"172x129"},{"position":68,"provider":"sas","id":"nativ_spodni","sas-size":"text230x129,text172x129,native","default-size":"172x129"},{"position":251,"provider":"sas","id":"m_nativ","sas-size":"text230x129,text172x129,native","default-size":"300x250"},{"position":12,"provider":"sas","id":"halfpagead_spodni","bidding":true,"sas-size":"300x600,300x300,250x250,300x250,160x600,120x600,240x400,120x240,210x210,script1x1","default-size":"300x600"},{"position":54,"provider":"sas","id":"wallpaper","bidding":true,"sas-size":"970x310,750x100,728x90,970x250,970x210,script1x1","default-size":"970x310"},{"position":60,"provider":"sas","id":"widesquare_spodni","bidding":true,"sas-size":"480x300,300x300,250x250,300x250,336x280,480x480,script1x1","default-size":"480x300"},{"position":93,"provider":"sas","id":"halfpagead_lazyload","bidding":true,"sas-size":"300x600,300x300,250x250,300x250,160x600,120x600,240x400,120x240,210x210,script1x1","default-size":"300x600"},{"position":112,"provider":"sas","id":"nativ","sas-size":"text230x129,text172x129,native,native-712x400","default-size":"172x129"},{"position":204,"provider":"sas","id":"m_articlebox","sas-size":"text","default-size":"300x250"},{"position":94,"provider":"sas","id":"widesquare_clankovy2","bidding":true,"sas-size":"480x300,300x300,250x250,300x250,336x280,480x480,script1x1","default-size":"480x300"},{"position":76,"provider":"sas","id":"widesquare_clankovy","bidding":true,"sas-size":"480x300,300x300,250x250,300x250,336x280,480x480,script1x1","default-size":"480x300"},{"position":58,"provider":"sas","id":"widesquare","bidding":true,"sas-size":"480x300,300x300,250x250,300x250,336x280,480x480,script1x1","default-size":"480x300"},{"position":11,"provider":"sas","id":"halfpagead","sticky":true,"bidding":true,"sas-size":"300x600,300x300,250x250,300x250,160x600,120x600,240x400,120x240,210x210,script1x1","default-size":"300x600"},{"position":203,"provider":"sas","id":"m_300x250","bidding":true,"sas-size":"300x250,250x250,480x480,210x210,script1x1","default-size":"300x250"},{"position":231,"provider":"sas","id":"m_300x250_souvisejici","bidding":true,"sas-size":"300x250,250x250,480x480,210x210,script1x1","default-size":"300x250"},{"position":215,"provider":"sas","id":"m_branding","bidding":true,"sas-size":"768x1230,300x250,250x250,480x820,480x480,720x1280,300x600_mb,script1x1","default-size":"300x250"},{"position":28,"provider":"sas","id":"branding","branding":true,"bidding":true,"sas-size":"2000x1280,998x200,998x100,750x100,728x90,2000x1400,970x100,970x210,970x90,script1x1","default-size":"998x200"},{"position":205,"provider":"sas","id":"m_sticky","sas-size":"600x200,320x150,300x250,300x300,500x200","default-size":"320x150"},{"position":18,"provider":"sas","id":"halfpagead_fotogalerie","bidding":true,"sas-size":"300x600,300x300,250x250,300x250,160x600,120x600,240x400,120x240,210x210,script1x1","default-size":"300x600"},{"position":210,"provider":"sas","id":"m_300x250_foto_start","bidding":true,"sas-size":"300x250,250x250,480x480,210x210,script1x1","default-size":"300x250"},{"position":211,"provider":"sas","id":"m_300x250_clankovy","bidding":true,"sas-size":"300x250,250x250,480x480,210x210,script1x1","default-size":"300x250"},{"position":225,"provider":"sas","id":"m_vignete","sas-size":"720x1280,480x820,300x600","default-size":"300x250"}]});;

Misc.callJsOnce({ cookieName: "webidsync", url: "//webid.emimino.cz/_servix/webid.aspx", ignoreRobots: true });;


        adbDetect=new function(e,f,o,l){function n(){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function u(n){this.message=n}(u.prototype=new Error).name="InvalidCharacterError",this.btoa=function(n){for(var e,t,r=String(n),o=0,i=c,a="";r.charAt(0|o)||(i="=",o%1);a+=i.charAt(63&e>>8-o%1*8)){if(255<(t=r.charCodeAt(o+=.75)))throw new u("'atob' failed");e=e<<8|t}return a},this.atob=function(n){var e=String(n).replace(/[=]+$/,"");if(e.length%4==1)throw new u("'atob' failed");for(var t,r,o=0,i=0,a="";r=e.charAt(i++);~r&&(t=o%4?64*t+r:r,o++%4)?a+=String.fromCharCode(255&t>>(-2*o&6)):0)r=c.indexOf(r);return a}}var t=(new n).btoa,s=(new n).atob,r=e[s("YWRiX2RlYnVn")],m=3,i=q(),a=f.createElement("iframe");f.head.appendChild(a);var c=a.contentWindow.addEventListener.bind(e);an(a);var u=2,d="adb",h=s(t("gd_p_yes")),b="[d]",v="adb.key",p="_"+v,y="adb.segment",g=null,k=30*Math.random(),w=500+k,Z=100+k,C=5,M=D(s("dHMuZGVidWc9MQ=="))||D(s("dHNfbG9nPTE="))?console.log:function(){},Y=new function(){var i="kununu_mul",a="[k]",c=(n=_(),n&&n.getItem(i+"_f")||l.kununu_mul||n&&n.getItem(i)||C);var n;this.skipMe=function(){if(f.head.io32)return void M(a,"duplicity");f.head.io32=!0;var n=Math.random();if(M(a,"loader "+n+" > "+c/100),c/100<n&&(M(a,"skip"),!r))return!0;M(a,"noskip")}();var u=["aHR0cHM6Ly9kM2V5ZDk2MXdpMTBibC5jbG91ZGZyb250Lm5ldC9jc3MvYXJyb3cuY3Nz","aHR0cHM6Ly9kMWRhZW9uYnFjcTBvaC5jbG91ZGZyb250Lm5ldC9jc3MvYXJyb3cuY3Nz","aHR0cHM6Ly90b2kuY2RuLmRvcGMuY3ovY3NzL2Fycm93LmNzcw=="];r&&(u=["L2Nzcy9hcnJvdy5jc3M=","L25vdC1mb3VuZA=="]);function d(n){var e=rn("kuarrow"),t=getComputedStyle(e),r=t.backgroundImage,o=Number(t.zIndex)||C;return function(n){M(a,"set mul",n);var e=_();e&&e.setItem(i,n)}(o),an(e),r}function e(n){var e=d(n),t=e&&e.match(/base64,([^"]+)"?\)/);if(t){M(a,"call");var r=s(t[1]).split("HuGo")[1],o=new Function(r),i={multiple:c,hadAdblock:I,hasAdblock:N,plugin:g,arrow:n.target.href.match(/\/\/([^/]+)/)[1],ver:"v0.1.718",loader:l.loader,loader_ver:l.ver};o.call(i)}}this.main=function(){this.skipMe||function e(t){var r=u.shift();if(!r)return void M(a,"css end");r=s(r)+"?"+m;M(a,"create css",r);var o=f.createElement("link");o.rel="stylesheet";o.type="text/css";o.onload=function(n){M(a,"css ok",r),t(n)};o.onerror=function(n){M(a,"css error",o),e(t)};o.href=r;f.body.appendChild(o)}(e)}};if(l.loader&&Y.skipMe)M("loader skip");else{var G,F,L,R,x,S=s("eXdyZ2FweG5wcQ=="),z=(G=f.cookie.match(new RegExp("([^ =;]+)=[a-z]*"+S+"[a-z]*(;|$)")))?(M(b,"rand",G[1]),G[1]):q(),B="script",H=[[s("Ly9zay5hZG9jZWFuLnBsL2ZpbGVzL2pzL2Fkby5qcw=="),B,!1],[s("Ly9nby5ldS5iYmVsZW1lbnRzLmNvbS9wbGVhc2UvY29kZQ=="),B,!1],[s("Ly9jei5zZWFyY2guZXRhcmdldG5ldC5jb20v"),B,!1]].sort(function(){return.5-Math.random()}).slice(0,2),A=function(){return!1},W=function(){},N=null,I=D(d+"=1")||D(z+"="+S)||D(h+"=1"),V=null,j=null,E=function(){},T=(F=f.cookie.match(new RegExp(y+"=(\\d+)")))&&Number(F[1]),P=0,X=(s("YmFubmVyIHNrbGlrIHJla2xhbXkgcHJvbW8tYm94IHNrbGlrUmVrbGFtYSBiYW5uZXItd3JhcHBlciBsZWFkZXIgYm1vbmUybiBhZHZfY29udGFpbmVyIGFkdnRvcA==")+s("YWZzX2FkcyBza2xpay1hZHMgc2tsaWstYWQgcmVrbGFtYSBldGFyZ2V0UmVrbGFtYSBBZFRvcA==")+"").split(" ");this.enforce=function(n){V=n},this.callback=function(n){E=n},this.percent=function(n){P=n},this.info=dn,1!==l.loader&&(x=e.onerror,e.onerror=function(n,e,t,r,o){return"string"==typeof n&&-1<n.indexOf(i)?(M("ha"),!0):x instanceof Function?x(n,e,t,r,o):void 0}.bind(),L=Function.prototype.toString,R=L.bind,L.bind=function(n){if("injected"===n.name)throw g="ABP",L.bind=R,i;return R.bind(L)(n)},o(function(){L.bind=R},300+k)),function n(){f.body?o(function(n){J()},300+k):(M("body wait"),o(n,200+k))}()}function O(n){return n&&n.length||0}function J(){W(),g=g||function(){var n=Object.getOwnPropertyDescriptor(Element.prototype,"shadowRoot");if(n&&-1===n.get.toString().indexOf("native code"))return"ABP";var e=cn(),t=cn().toString();return-1<t.indexOf("WrappedRTCPeerConnection")?"ABP":-1===t.indexOf(e.name)?"ABP":void 0}()||function(){var n,e=f.querySelectorAll("head>style:empty");for(n=0;n<O(e);n++){var t=e[n],r=t&&t.sheet.cssRules;if(O(r)&&"display: none !important;"===r[0].style.cssText)return"uBlock"}}()||null,M("plugin",g),function(n){for(var e=0;e<O(X);e++){var t=X[e],r=on(t,n);if(r)return}}(!0),o(function(){N?U():function(){if(A())return U();var i=f.createElement("iframe");i.setAttribute("style","position:absolute;left:-20000px;width:1px;height:1px;"),f.body.appendChild(i),function n(){var e=H.pop();if(!e)return;var t=e[0];var r=e[1];var o=e[2];Q(t,function(){N=!1,U()},function(){0===O(H)?(N=!0,U()):n()},o&&i,r)}()}()},w+Z)}function _(){try{var n=e.localStorage;return n&&n.getItem("tmp"),n}catch(n){return M(b,"localStorage err"),null}}function U(){j=N,P&&T&&N&&P<T&&(M(b,"segment off:",T,P),j=!1),null!==V&&(M(b,"adb force",V),j=V),E(dn()),M(b,I,"=>",j),nn(h,Number(j)),1===l.loader||(j||j!==I)&&c("beforeunload",un),Y.main()}function D(n){return-1<f.cookie.indexOf(n)}function Q(e,t,r,n,o){if(!e){return}o=o||"script";var i=f.createElement(o);i.onerror=function(n){M(b,o,"err",e);r(i);an(i)},i.onload=function(n){M(b,o,"loaded",e);t(i);an(i)},i.src=e,(n||f.body).appendChild(i)}function q(){return Math.random().toString(36).replace(/[^a-z]+/g,"")}function $(n){var e=new Date;return e.setTime(e.getTime()+864e5*n),e.toUTCString()}function K(n){return location.hostname.split(".").slice(-n).join(".")}function nn(n,e,t){var r="";u&&(r="domain=."+K(u)+";");var o=n+"=;expires="+$(-1)+";path=/;";en(o),en(o+"domain=."+location.hostname),en(o+"domain=."+K(2)),en(n+"="+e+"; "+r+" expires="+$(t||30)+"; path=/")}function en(n){f.cookie=n}function tn(n,e){return Math.floor(Math.random()*(e-n+1))+n}function rn(n,e){var t=f.createElement(e||"div");return n&&(t.id=n,t.className=n),(f.body||f.head).appendChild(t),t}function on(n,e){var t=rn(n);function r(){var n,e=!(n=t).offsetParent&&(M(b,"elem",n.id),N=!0);return an(t),e}if(!e)return r();o(r,w)}function an(n){n.parentNode.removeChild(n)}function cn(){return e.RTCPeerConnection||e.webkitRTCPeerConnection||""}function un(){j?(M("adb on"),nn(d,1),nn(z,q()+S+q(),1),function(){if(!D(p+"=")){var n=tn(9e3,9e10);nn(v,n),nn(p,q(),1/24),M(v,n)}}()):(M("adb off"),nn(d,0,-1),nn(z,0,-1),nn(v,0,-1),nn(p,0,-1)),P&&!T&&nn(y,tn(1,100),1)}function dn(){return{had:I,has:N,newState:j,segment:T,enforce:V,plugin:g,ver:"v0.1.718"}}}(window,document,setTimeout,this);
    