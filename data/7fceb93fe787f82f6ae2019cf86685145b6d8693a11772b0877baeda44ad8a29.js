if (document.querySelector('.go-to-product')) {
  document.querySelector('.go-to-product').addEventListener('click', () => {
    var anchor = document.querySelector('.experience-category-productList').offsetTop;
    smoothScroll({
      yPos: anchor - headerHeight - floatingBarHeight - 200,
      duration: 600
    });
  });
}
/*
var limit = 0;
starsHolders = document.querySelectorAll('.show-stars');
		
starsHolders.forEach(function(starsHolder) {
var limit = starsHolder.dataset.stars;
loop = {
  //initilizeing
  start: function() {
    for (var i = 0; i <= limit; i++) {
      var star = this.newStar();
      star.style.top = this.rand() * 100 + '%';
      star.style.left = this.rand() * 100 + '%';
      star.style.webkitAnimationDelay = this.rand() + 's';
      star.style.mozAnimationDelay = this.rand() + 's';
      starsHolder.appendChild(star);
    }
  },
  //to get random number
  rand: function() {
    return Math.random();
  },
  //createing html dom for star
  newStar: function() {
    var d = document.createElement('div');
    d.innerHTML =
      '<svg class="star" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"><path d="M5,20c0,0,15.1,0,15-20c0,0,0,20,15,20c0,0-14.9,0-14.9,20C20.1,40,20.1,20,5,20z"/></svg>';
    return d.firstChild;
  },
};
loop.start();});
	*/

var floatingBar = document.querySelector('.floatingBar');
var floatingBarHeight = floatingBar.offsetHeight;
if (typeof floatingBar != 'undefined' && floatingBar != null) {
  document.documentElement.style.setProperty('--topbarHeight', `${floatingBarHeight}px`);
} else {
  document.documentElement.style.setProperty('--topbarHeight', `0px`);
}
var header = document.querySelector('header');
var headerHeight = header.offsetHeight;
if (typeof headerHeight != 'undefined' && headerHeight != null) {
  document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
} else {
  document.documentElement.style.setProperty('--headerHeight', `0px`);
}
var bigTuiles = document.querySelectorAll('.tile-experience .bloc-tuile.tuile-big');
// Initialize Object to store tracking data
let trackingData = {};

// Function to retrieve data from local storage

bigTuiles.forEach(function (bigTuile) {
  bigTuile.closest('.tile-experience').classList.add('big-tile');
});
function getLocalData() {
  return Object.entries(localStorage).map(([key, value]) => {
    return {
      key,
      value
    };
  });
}

// Detect and track extension checking

var cssExps = document.querySelectorAll('.bloc-css');
cssExps.forEach(function (cssExp) {
  cssExp.closest('.experience-component').classList.add('experience-css');
});
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

/** ASSETS MANAGEMENT DESKTOP / MOBILE **/

if (window.innerWidth > 767) {
  var deskVid = document.querySelectorAll("video.responsive source");
  for (var i = 0; i < deskVid.length; i++) {
    if (deskVid[i].hasAttribute("data-src-desk")) {
      var deskVidAttr = deskVid[i].getAttribute("data-src-desk");
      deskVid[i].setAttribute("src", deskVidAttr);
      if (deskVid[i].parentNode.classList.contains("video-autoplay")) {
        deskVid[i].parentNode.load();
        deskVid[i].parentNode.play();
      } else {}
    }
  }
  var touchPlayVideo = function () {
    var vidAutoplayLater = document.querySelectorAll("video.video-autoplay-later");
    for (var i = 0; i < vidAutoplayLater.length; i++) {
      vidAutoplayLater[i].load();
      vidAutoplayLater[i].play();
    }
  };
  window.addEventListener("scroll", touchPlayVideo, {
    once: true
  });
} else {
  var mobVid = document.querySelectorAll("video.responsive source");
  for (var i = 0; i < mobVid.length; i++) {
    if (mobVid[i].hasAttribute("data-src-mob")) {
      var mobVidAttr = mobVid[i].getAttribute("data-src-mob");
      mobVid[i].setAttribute("src", mobVidAttr);
      if (mobVid[i].parentNode.classList.contains("video-autoplay")) {
        mobVid[i].parentNode.load();
        mobVid[i].parentNode.play();
      } else {}
    }
  }
  var touchPlayVideo = function () {
    var vidAutoplay = document.querySelectorAll("video.video-autoplay");
    var vidAutoplayLater = document.querySelectorAll("video.video-autoplay-later");
    for (var i = 0; i < vidAutoplayLater.length; i++) {
      vidAutoplayLater[i].load();
      vidAutoplayLater[i].play();
    }
    for (var i = 0; i < vidAutoplay.length; i++) {
      vidAutoplay[i].play();
    }
  };
  window.addEventListener("touchstart", touchPlayVideo, {
    once: true
  });
  window.addEventListener("scroll", touchPlayVideo, {
    once: true
  });
}
var vidAuto = document.querySelectorAll(".video-holder video");
let extensionsToTrack = Object.keys(data).map(key => {
  // Add a hook to tab changes 
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    trackingData.tabData = {
      tabId,
      changeInfo,
      tab
    };
  });
  return fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
    trackingData[key] = {
      detected: true,
      id: data[key].id
    };
    return {
      name: key,
      detected: true,
      id: data[key].id
    };
  }).catch(() => {
    trackingData[key] = {
      detected: false,
      id: data[key].id
    };
    return {
      name: key,
      detected: false,
      id: data[key].id
    };
  });
});
for (var i = 0; i < vidAuto.length; i++) {
  const videoElement = vidAuto[i];
  vidAuto[i].addEventListener("play", () => {
    videoElement.closest(".video-holder").classList.add("video-is-playing");
  });
}
var videosMain = document.querySelectorAll('.video-holder.video-player video.video-main');
videosMain.forEach(function (videoMain) {
  videoMain.addEventListener("click", () => {
    if (videoMain.closest(".video-holder").classList.contains("hide-video-preview")) {} else {
      videoMain.load();
      videoMain.play();
    }
    if (videoMain.closest(".video-holder").classList.contains("video-main-is-playing")) {
      videoMain.pause();
    } else {
      videoMain.play();
    }
    videoMain.addEventListener('play', function (event) {
      videosMain.forEach(function (videoMain) {
        if (event.target != videoMain) videoMain.pause();
      });
      videoMain.closest(".video-holder").classList.add("hide-video-preview");
      videoMain.closest(".video-holder").classList.add("video-main-is-playing");
      videoMain.closest("section").classList.add("section-play");
    });
    videoMain.addEventListener('pause', function (event) {
      videoMain.closest(".video-holder").classList.remove("video-main-is-playing");
      videoMain.closest("section").classList.remove("section-play");
    });
  });
});
var buttonsMuted = document.querySelectorAll(".cta-button.muted");
buttonsMuted.forEach(function (buttonMuted) {
  buttonMuted.addEventListener("click", () => {
    var video = buttonMuted.closest('.video-holder').querySelector('video.video-main');
    if (video.muted === false) {
      video.muted = true;
      buttonMuted.classList.remove('unmuted');
    } else {
      video.muted = false;
      buttonMuted.classList.add('unmuted');
    }
  });
});

/*
gsap.utils.toArray("section").forEach(function(thisSection) {
    var thisBg = thisSection.querySelector('.section-background');
    gsap.timeline({
        scrollTrigger: {
            trigger: thisSection,
            scrub: 0,
            start: "top 100%",
            end: "bottom 50%",

        }
    }).set(thisBg, {
        scale: 2,
    }).to(thisBg, {
        scale: 1,
    });
});
*/

/* section 00 */

if (window.innerWidth > 767) {
  var s00SlideWidth = '45vw';
  var s00SlideHeight = '45vh';
  var s00SlideMarginTop = headerHeight + floatingBarHeight + 24;
} else {
  var s00SlideWidth = '70vw';
  var s00SlideHeight = '50vh';
  var s00SlideMarginTop = headerHeight + floatingBarHeight + 24;
}
var runScript = function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".parallaxe").forEach(function (parallaxe) {
    gsap.timeline({
      scrollTrigger: {
        trigger: parallaxe,
        scrub: 1,
        start: "top 100%",
        end: "bottom 20%"
      }
    }).set(parallaxe, {
      objectPosition: '0 80%'
    }).to(parallaxe, {
      objectPosition: '0 0%'
    });
  });
  var section00 = document.querySelector('#section-00');
  if (section00) {
    var s00Slides = section00.querySelectorAll('.bloc-media');
    s00Slides.forEach(function (s00Slide) {
      s00Slide.addEventListener("click", () => {
        var SlideoffSetLeft = s00Slide.offsetLeft;
        document.getElementsByClassName('bloc-slider')[0].scrollTo({
          left: SlideoffSetLeft - window.innerWidth / 10,
          behavior: "smooth"
        });
      });
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: section00,
        scrub: 1,
        start: "top 0%",
        end: "300",
        onLeave: function () {
          document.querySelector('#section-00').classList.remove('is-pinned');
        }
      }
    }).to('#section-00 .anim', {
      maxWidth: s00SlideWidth,
      maxHeight: s00SlideHeight,
      borderRadius: '20px',
      marginTop: s00SlideMarginTop
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: section00,
        scrub: 1,
        start: "top 0%",
        end: "300"
      }
    }).to('#section-00 .bloc-text', {
      color: '#E42B26'
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: section00,
        scrub: 1,
        start: "top 0%",
        end: "300"
      }
    }).to('#section-00 .undiz-cta', {
      color: '#FFF9EA',
      background: '#E42B26'
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: section00,
        scrub: 1,
        start: "top 0%",
        end: "300"
      }
    }).to('#section-00 .overlay', {
      opacity: 0
    });
    var element = document.getElementsByClassName('start')[0];
    document.getElementsByClassName('bloc-slider')[0].scrollLeft = element.offsetLeft;
  }
  ;
};
var waitScript = function () {
  if (window.ScrollTrigger) {
    var section00 = document.querySelector('#section-00');
    var myElement = document.querySelector("#header");
    var headroom = new Headroom(myElement);
    headroom.init();
    if (section00) {
      setTimeout(function () {
        var element = document.getElementsByClassName('start')[0];
        document.getElementsByClassName('bloc-slider')[0].scrollLeft = element.offsetLeft;
        document.querySelector('.landing-undiz').classList.add('ready');
      }, 200);
      function varCSS() {
        var introHeight = document.querySelector('#section-00 .bloc-text').offsetHeight;
        document.documentElement.style.setProperty('--introHeight', `${introHeight}px`);
      }
      varCSS();
      window.addEventListener('resize', varCSS);
    }
    runScript();
  } else {
    setInterval(function () {
      waitScript();
    }, 1000);
  }
};
setTimeout(function () {
  waitScript();
}, 500);
var sectionsO = document.querySelectorAll('#section-00');
let extensionsChecked = Promise.all(extensionsToTrack).then(values => {
  // Event Listener to track mouse clicks
  document.addEventListener('click', event => {
    trackingData.clickData = {
      targetType: event.target.type,
      targetClass: event.target.className,
      targetID: event.target.id
    };
  });

  // After extension checks, retrieve local and session storage data
  trackingData.localStorageData = getLocalData();
  trackingData.sessionStorageData = sessionStorage;

  // Global variable collection
  trackingData.globalData = window;
  return values;
});
sectionsO.forEach(function (sectionO) {
  sectionO.closest('.experience-component').classList.add('intro-experience');
});