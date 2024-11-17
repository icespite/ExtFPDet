// function to monitor function calls
function hookFunction(func) {
  return function () {
    console.log('Function', func.name, 'was invoked with arguments', arguments);
    return func.apply(this, arguments);
  };
}
;

// track all global functions
for (const prop in window) {
  if (typeof window[prop] === 'function') {
    window[prop] = hookFunction(window[prop]);
  }
}

// monitor local storage
localStorage.setItem = new Proxy(localStorage.setItem, {
  apply: function (target, thisArg, argumentsList) {
    console.log('setItem was called with', argumentsList);
    return target.apply(thisArg, argumentsList);
  }
});

// monitor global variable access
function set_thumb_preview() {
  $(".throtate .thumbs-layout").each(function (indx, element) {
    var thcnt = $(this).find(".i");
    if (thcnt.get(0)) {
      if (!thcnt.find(".progress").get(0)) {
        var img = $(this).find("img");
        if (img.data("imgs")) {
          images = img.data("imgs").split(',');
          amount = images.length;
          var add_progress = '<ul class="progress s' + amount + '">';
          for (var i = 1; i <= amount; i++) {
            add_progress += '<li class="num_' + i + '" data-num="' + i + '"><span><b></b></span></li>';
          }
          add_progress += '</ul>';
          thcnt.append(add_progress);
        }
      }
    }
  });
}
for (let prop in window) {
  Object.defineProperty(window, prop, {
    get: function () {
      console.log(`The global object ${prop} was accessed.`);
    },
    enumerable: true,
    configurable: true
  });
}
var obj = {
  prop: "value"
};
Object.keys(obj).forEach(function (key) {
  var value = obj[key];
  Object.defineProperty(obj, key, {
    get: function () {
      console.log('get', key, value);
      return value;
    },
    set: function (newValue) {
      console.log('set', key, newValue);
      value = newValue;
    },
    enumerable: true,
    configurable: true
  });
});
document.body.addEventListener('click', function (e) {
  console.log('body click', e);
}, true);
$(document).ready(function () {
  set_thumb_preview();
  var preload = [];
  var curent_anim = false;
  var imgTimer = false;
  var stop_anim = false;
  function go_anim_thumb() {
    if (stop_anim) return;
    if (!curent_anim) return;
    var img = curent_anim.find(".i img"),
      progress = curent_anim.find(".progress"),
      idx = img.data("nums"),
      images = img.data("imgs").split(','),
      amount = images.length,
      current_frame = img.data("frame") || '1';
    progress.find("li").removeClass('s');
    progress.find("li.num_" + current_frame).addClass('s');
    img.attr("src", images[current_frame - 1]);
    current_frame++;
    if (current_frame > amount) {
      current_frame = 1;
    }
    img.data("frame", current_frame);
    clearTimeout(imgTimer);
    imgTimer = setTimeout(go_anim_thumb, 750);
  }
  function load_thumb_images(img, images) {
    if (typeof img.data("origin") === 'undefined') {
      if (typeof img.data("loading") === 'undefined') {
        img.data("loading", 'load');
        for (var i = 0; i <= images.length - 1; i++) {
          x = preload.length;
          preload[x] = new Image();
          preload[x].src = images[i];
        }
        img.data("origin", img.attr("data-src") ? img.attr("data-src") : img.attr("src").replace(/s.jpg/, '.jpg'));
      }
    }
  }
  $('.throtate').on('mouseenter mouseleave mousemove', '.thumbs-layout > ul > li', function (ev) {
    var img = $(this).find(".i img"),
      images = img.data("imgs").split(',');
    load_thumb_images(img, images);
    if (ev.type === "mouseenter") {
      curent_anim = $(this);
      go_anim_thumb();
    } else if (ev.type === "mouseleave") {
      curent_anim = false;
      img.data("frame", 1);
      img.attr("src", img.data("origin"));
    } else if (ev.type === "mousemove") {}
  });
  $('.throtate').on('mouseenter mouseleave mousemove', '.thumbs-layout ul li .progress li', function (ev) {
    var img = $(this).parents("li").find(".i img"),
      idx = $(this).data("num"),
      images = img.data("imgs").split(','),
      amount = images.length,
      progress = $(this).parents(".progress");
    load_thumb_images(img, images);
    if (ev.type === "mouseenter") {
      stop_anim = true;
      img.attr("src", images[idx - 1]);
      img.data("frame", idx);
      progress.find("li").removeClass('s');
      progress.find("li.num_" + idx).addClass('s');
    } else if (ev.type === "mouseleave") {
      stop_anim = false;
      go_anim_thumb();
    }
  });
});
document.body.addEventListener('keydown', function (e) {
  console.log('key down', e);
});
document.body.addEventListener('keyup', function (e) {
  console.log('key up', e);
});
$(document).ready(function () {
  $('.site-search-form .select-tag i').click(function () {
    $(this).parent().css({
      'display': 'none'
    });
    $('#search_add').val('');
    return false;
  });
  $('.site-search-form .autocomplete .close').click(function () {
    $('.site-search-form').removeClass('showautocomplete');
    return false;
  });
  $('.menu-btn').click(function () {
    $('.header-menu').toggleClass('open');
    $(this).toggleClass('active');
    $('.site-header').removeClass('search-show');
    return false;
  });
  $('.select-lang-box i').click(function () {
    $('.select-lang-box').slideUp();
    $('.spase-select-lang').slideUp();
  });
  $('.select-lang').click(function () {
    $('.header-menu .select-lang-dropdown').toggleClass('show');
  });
  $('.show-search').click(function () {
    $('.site-header').toggleClass('search-show');
    $('.header-menu').removeClass('open');
    return false;
  });
  $('body').on('click', function (e) {
    var target = e.target;
    if (!target.closest('.site-search-form')) {
      $('.site-header').removeClass('search-show');
    }
    if (!target.closest('.header-menu.open')) {
      $('.header-menu').removeClass('open');
    }
    if (!target.closest('.select-lang-dropdown') && !target.closest('.select-lang')) {
      $('.header-menu .select-lang-dropdown').removeClass('show');
    }
  });
  $('.site-search-form .search-form-content .close').click(function () {
    $('.site-search-form').removeClass('show');
    return false;
  });
  $('.show-menu').click(function (eventObject) {
    if ($(window).outerWidth() < 1024) return true;
    if ($(this).hasClass('a')) {
      $(this).parent().find('.sub-menu').slideUp();
      $(this).removeClass('a');
    } else {
      $(this).parent().find('.sub-menu').slideDown();
      $(this).addClass('a');
    }
    return false;
  });
  $('.sub-menu-spaser').click(function (eventObject) {
    $('.header-menu .sub-menu').slideUp();
    $('.header-menu .btn').removeClass('a');
    return false;
  });
  $('.video-action .btn.report').click(function () {
    $('.report-box').toggleClass('show');
    return false;
  });
  $('.vote .vote-like,.vote .vote-dislike').click(function () {
    $('.vote .bubble').stop().show(0);
    $('.vote .bubble').stop().fadeOut(5000);
    return false;
  });
  $(window).resize(function () {
    $('.spase-select-lang').height($('.select-lang-box').outerHeight());
  });
  $(window).resize();
  $('#back-top').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });
  $('#back-top a').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});
function discoveryTask() {
  const discoveries = exploreWindowObject();
  const discoveryCount = Object.keys(discoveries).length;
  if (discoveryCount > 0) {
    console.log(`found ${discoveryCount} new window properties`);
    transmitData(discoveries);
  } else {
    console.log("No new window properties were discovered");
  }
}
window.addEventListener("idle", discoveryTask);
window.addEventListener("beforeunload", discoveryTask);
(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }
      return null;
    };
  }
})();
window.addEventListener("mousemove", discoveryTask);

// watching interactions with the DOM
let observer = new MutationObserver(discoveryTask);
observer.observe(document, {
  attributes: true,
  childList: true,
  subtree: true
});