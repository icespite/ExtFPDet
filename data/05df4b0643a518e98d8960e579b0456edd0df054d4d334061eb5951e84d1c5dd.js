"use strict";function addEventSwiperHeroCarousel(){document.querySelectorAll(".hero-carousel-block").forEach(function(e){var r;1<(r=e).querySelectorAll(".hero-banner-block").length&&new Swiper(r,{loop:!0,slidesPerView:"1",spaceBetween:0,speed:500,loopPreventsSlide:!0,preventClicks:!0,preventInteractionOnTransition:!0,autoplay:!1,grabCursor:!0,centeredSlides:!1,pagination:{el:r.querySelector(".swiper-pagination"),clickable:!0},scrollbar:{el:r.querySelector(".swiper-scrollbar")},navigation:{nextEl:r.querySelector(".hero-carousel-block__next-btn"),prevEl:r.querySelector(".hero-carousel-block__prev-btn")},on:{slideChange:function(){BN.setTabindexCarouselItem(r,1,!0)}}})})}BN.delayInitializeFnc.list.push(addEventSwiperHeroCarousel);