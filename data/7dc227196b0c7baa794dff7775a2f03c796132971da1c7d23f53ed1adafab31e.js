var TpScroll,j=jQuery.noConflict();j(document).ready(function(){FontAwesomeConfig={searchPseudoElements:!0},j("[data-toggle='body']").click(function(){var e=j(this).data("toggle");j(e).toggleClass("open-menu")}),j("[data-toggle='#menu']").click(function(){var e=j(this).data("toggle");j(e).toggleClass("open-cats")}),j("[data-toggle='#searcher,.btn.search']").click(function(){var e=j(this).data("toggle");j(e).toggleClass("open-search")})});var lastScrollTp=0,delta=0,navbarHeight=j("body").outerHeight();function hasScrolled(){var st=j(this).scrollTop();Math.abs(lastScrollTp-st)<=delta||(lastScrollTp<st&&navbarHeight<st?j("body").removeClass("scroll-up").addClass("scroll-down"):st+j(window).height()<j(document).height()&&j("body").removeClass("scroll-down").addClass("scroll-up"),lastScrollTp=st)}j(window).scroll(function(event){TpScroll=!0}),setInterval(function(){TpScroll&&(hasScrolled(),TpScroll=!1)},250);