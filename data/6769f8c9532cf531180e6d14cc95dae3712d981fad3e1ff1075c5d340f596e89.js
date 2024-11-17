
window.dataLayer = window.dataLayer || [];
dataLayer.push({'pageBreadcrumb': 'Splash - select language','pageContentType': 'ChooseLanguagePage','pageLanguage': 'en-GB','pageCountry': 'GB','pageName': 'Splash - select language','domain': 'uk','cookieConsentEnabled': '1'});
;

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);})
(window,document,'script','dataLayer','GTM-NVL4JDR');;



    document.addEventListener("DOMContentLoaded", function () {
        if("False" === "True"){
             document.getElementById('profileHeaderBar').style.backgroundColor = "white";
        }
    });

    function rememberPrevisitedPage() {

        try {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", "/api/login/set-previsited-page");
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(JSON.stringify({ url: window.location.pathname + window.location.search }));
        } catch (e) {
            //Do nothing
        }

        return true;
    }
;


FindApi=false;
;


if(typeof FindApi === 'function'){var api = new FindApi();api.setApplicationUrl('/');api.setServiceApiBaseUrl('/find_v2/');api.processEventFromCurrentUri();api.bindWindowEvents();api.bindAClickEvent();api.sendBufferedEvents();}
;

(function(){var js = "window['__CF$cv$params']={r:'80346a87af2b329c',t:'MTY5NDE0NzAwOC45MDcwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();