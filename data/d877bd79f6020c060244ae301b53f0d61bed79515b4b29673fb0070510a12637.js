
(function(w, d, s, u) {
  w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
  var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
  j.async = true; j.src = 'https://chat.vps-server.ru/livechat/rocketchat-livechat.min.js?_=201903270000';
  h.parentNode.insertBefore(j, h);
})(window, document, 'script', 'https://chat.vps-server.ru/livechat');
;


    $(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 500);
            return false;
        });

    });
;


	jQuery(document).ready(function() {
			jQuery('#mycarousel').jcarousel();
	});

	jQuery(document).ready(function() {
			jQuery('#mycarouseltwo').jcarousel();
	});
;


   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(52382941, "init", {
        id:52382941,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
;


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-84614025-1', 'auto');
  ga('send', 'pageview');

