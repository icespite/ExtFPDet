'use strict';

$('#menu2').slicknav({
  label: '',
  prependTo: '.mobile-menu-wrapper'
});

$("input[type='text'], textarea").on("click", function () {
  $(this).select();
});

$('.link-share').click(function (e) {
  e.preventDefault();
  $('.player-share').show();
});

$('.player-share-close').click(function (e) {
  e.preventDefault();
  $('.player-share').hide();
});