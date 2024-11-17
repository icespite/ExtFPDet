/**** global.js ****/
function processAdUnits() {
  adConf.data.forEach(function (ad) {
    var sizes = ad.sizes.filter(function (size) {
      return window.innerWidth >= size[0];
    });
    if (sizes.length > 0 && (!ad.viewportMax || ad.viewportMax > window.innerWidth) && (!ad.viewportMin || ad.viewportMin <= window.innerWidth)) {
      ad.sizes = sizes;
      adConf.units.push(ad);
    }
  });
  console.log('[GPT DEBUG] Exising adConf units', adConf.units);
}
function filterAdUnits() {
  var adUnitsExists = [];
  for (var i in adUnits) {
    if (adUnits[i].code == 'adoop') {
      adUnitsExists.push(adUnits[i]);
    } else {
      var u = adConf.units.find(function (unit) {
        return unit.code == adUnits[i].code;
      });
      if (u) {
        if (adUnits[i].mediaTypes && adUnits[i].mediaTypes.banner && adUnits[i].mediaTypes.banner.sizes) {
          var sizes = adUnits[i].mediaTypes.banner.sizes.filter(function (n) {
            for (var i = 0; i < u.sizes.length; i++) {
              if (u.sizes[i][0] == n[0] && u.sizes[i][1] == n[1]) return true;
            }
            return false;
          });
          if (sizes.length > 0) {
            adUnits[i].mediaTypes.banner.sizes = sizes;
            adUnitsExists.push(adUnits[i]);
          }
        } else {
          adUnitsExists.push(adUnits[i]);
        }
      }
    }
  }
  adUnits = adUnitsExists;
}
function str_replace(search, replace, subject, count) {
  var i = 0,
    j = 0,
    temp = '',
    repl = '',
    sl = 0,
    fl = 0,
    f = [].concat(search),
    r = [].concat(replace),
    s = subject,
    ra = Object.prototype.toString.call(r) === '[object Array]',
    sa = Object.prototype.toString.call(s) === '[object Array]';
  s = [].concat(s);
  if (count) {
    this.window[count] = 0;
  }
  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue;
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + '';
      repl = ra ? r[j] !== undefined ? r[j] : '' : r[0];
      s[i] = temp.split(f[j]).join(repl);
      if (count && s[i] !== temp) {
        this.window[count] += (temp.length - s[i].length) / f[j].length;
      }
    }
  }
  return sa ? s : s[0];
}
function preg_replace(pattern, pattern_replace, subject, limit) {
  if (limit === undefined) {
    limit = -1;
  }
  var _flag = pattern.substr(pattern.lastIndexOf(pattern.charAt(0)) + 1),
    _pattern = pattern.substr(1, pattern.lastIndexOf(pattern.charAt(0)) - 1),
    reg = new RegExp(_pattern, _flag),
    rs = null,
    res = [],
    x = 0,
    y = 0,
    ret = subject;
  if (limit === -1) {
    var tmp = [];
    do {
      tmp = reg.exec(subject);
      if (tmp !== null) {
        res.push(tmp);
      }
    } while (tmp !== null && _flag.indexOf('g') !== -1);
  } else {
    res.push(reg.exec(subject));
  }
  for (x = res.length - 1; x > -1; x--) {
    tmp = pattern_replace;
    for (y = res[x].length - 1; y > -1; y--) {
      tmp = tmp.replace('${' + y + '}', res[x][y]).replace('$' + y, res[x][y]).replace('\\' + y, res[x][y]);
    }
    ret = ret.replace(res[x][0], tmp);
  }
  return ret;
}
function mainfunc(func) {
  window[func].apply(null, Array.prototype.slice.call(arguments, 1));
}
let pageEvents = [];
function getDomainOnly(hostname, removeTop) {
  hostname = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1).toLowerCase();
  if (removeTop) hostname = hostname.substring(0, hostname.lastIndexOf('.'));
  return hostname;
}
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/; domain=.sherdog.com";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function isSmallerScreen() {
  return window.innerWidth < 500 || window.innerHeight < 500;
}
function isMobileOrTablet() {
  var b = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4));
}
function getScrOrientation() {
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
}
function eraseCookie(name) {
  createCookie(name, "", -1);
}
function requestGeoCountry() {
  console.log('Requesting geo data from geo.gorillanation.com');
  onGeoDataCountryHandler();
  if (true) return;
  var geoScript = document.createElement('script');
  geoScript.type = 'text/javascript';
  geoScript.onload = function () {
    onGeoDataCountryHandler();
  };
  geoScript.src = '//geo.gorillanation.com/geo.php';
  document.body.appendChild(geoScript);
}
function onGeoDataCountryHandler() {
  console.log('Geo data: gn_country', gn_country, 'visitor_country', visitor_country);
  var validCountries = ['AU', 'CA', 'UK'];
  if (gn_country && validCountries.indexOf(gn_country) >= 0) {
    $('#sherdog_logo').removeClass('independence').addClass('sherdog_logo_' + gn_country.toLowerCase());
  }
  requestOdds();
  requestGeoData();
  sendComscoreBeacon();
}
function sendComscoreBeacon() {
  if (!!gn_country && gn_country.match(/^ca|us$/i)) {
    var t = 'script',
      o = document.createElement(t),
      s = document.getElementsByTagName(t)[0];
    o.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + '.scorecardresearch.com/beacon.js';
    o.addEventListener('load', function (e) {
      console.log('Sending comscore beacon', gn_country, typeof COMSCORE);
      COMSCORE.beacon({
        c1: 2,
        c2: 6036161,
        c3: "",
        c4: "",
        c5: "",
        c6: "",
        c15: ""
      });
    }, false);
    s.parentNode.insertBefore(o, s);
  } else {
    console.log('Not sending comscore beacon', gn_country);
  }
}
function requestGeoData() {
  try {
    if (isGeo == true) {
      onGeoDataHandler(geoData);
    }
  } catch (err) {
    console.log('SD. ' + err + '. Is probably Off');
  }
}
function onGeoDataHandler(data) {
  if (window.onGeoDataHandlerCalled) return;
  window.onGeoDataHandlerCalled = true;
  var geo = new Geolocation(data);
  var numLeftColEventItems = 2;
  var numRightColEventItems = 5;
  var html;
  var template = '';
  var inputTemplate = '';
  var inlineArticles = '';
  var strBigFlagUrl = data.result.country.bigFlagUrl;
  var strFlagUrl = data.result.country.smallFlagUrl.toLowerCase();
  var strBigFlagHtml = '<p class="big-country-flag" style="background: url(' + strFlagUrl + ') no-repeat;"></p>';
  var strFlagHtml = '<p class="country-flag" style="background: url(' + strFlagUrl + ') no-repeat;"></p>';
  var arrCovers = geo.getCovers();
  var arrArticles = geo.getArticles();
  var arrEvents = geo.getEvents();
  var currentHostname = location.hostname;
  var currentCDNHostname = "";
  if (currentHostname === 'local.sherdog.com') {
    currentHostname = 'http://dev.sherdog.com';
    currentCDNHostname = 'http://dev.www.cdn.sherdog.com';
  } else {
    currentCDNHostname = 'https://www4-cdn.sherdog.com';
  }
  try {
    template = $.trim($("#cover-panel-template").html());
    $.each(arrCovers, function (index, obj) {
      if (index == 0) {
        inputTemplate = $.trim($("#cover-panel-first-article").html());
      } else if (index == 1) {
        inputTemplate = $.trim($("#cover-panel-second-article").html());
      } else {
        inputTemplate = $.trim($("#cover-panel-inline-article").html());
      }
      html = inputTemplate.replace(/{{title}}/ig, obj.title).replace(/{{id}}/ig, obj.id).replace(/{{imageurl}}/ig, obj.imageurl).replace(/{{imagethumb}}/ig, obj.imagethumb).replace(/{{url}}/ig, obj.url);
      if (index == 0) {
        template = template.replace(/{{firstArticle}}/ig, html);
      } else if (index == 1) {
        template = template.replace(/{{secondArticle}}/ig, html);
      } else if (index <= 5) {
        inlineArticles += html;
      }
    });
    template = template.replace(/{{inlineArticles}}/ig, inlineArticles);
    if (arrCovers.length > 0) {
      $('#homepage-cover').append(template);
    }
  } catch (err) {
    console.log('Home: ' + err);
  }
  try {
    template = $.trim($("#cover-panel-slider-template").html());
    $.each(arrCovers, function (index, obj) {
      inputTemplate = $.trim($("#cover-panel-slider-article").html());
      html = inputTemplate.replace(/{{title}}/ig, obj.title).replace(/{{id}}/ig, obj.id).replace(/{{imageurl}}/ig, obj.imageurl).replace(/{{imagethumb}}/ig, obj.imagethumb).replace(/{{url}}/ig, obj.url);
      inlineArticles += html;
    });
    template = template.replace(/{{inlineArticles}}/ig, inlineArticles);
    $('#homepage-slider').append(template);
  } catch (err) {
    console.log('Home: ' + err);
  }
  try {
    template = $.trim($("#latest-mma-news-template").html());
    $.each(arrArticles, function (index, obj) {
      var authors = '<em>SHERDOG</em>';
      if (obj.authorsName) {
        authors = '<a href="' + obj.authorsUrl + '">' + obj.authorsName + '</a>';
      }
      var date = '';
      if (obj.date) {
        var d = new Date(obj.date);
        date = getMatchEventMonthShort(d.getMonth()) + ' ' + d.getDate() + ', ' + d.getFullYear();
      }
      html = template.replace(/{{title}}/ig, obj.title).replace(/{{id}}/ig, obj.id).replace(/{{imageurl}}/ig, obj.imageUrl).replace(/{{imagethumb}}/ig, obj.imagethumb).replace(/{{url}}/ig, obj.url).replace(/{{description}}/ig, obj.description).replace(/{{authors}}/ig, authors).replace(/{{date}}/ig, date).replace(/{{portfolio}}/ig, obj.portfolio || '');
      $('#latest-mma-news').append(html);
      $('#geo-loading').remove();
    });
  } catch (err) {
    console.log('Home: ' + err);
  }
  if (arrArticles.length == 0) {
    $('#latest-mma-news').prev('.tiled_bg').remove();
    $('#latest-mma-news').remove();
  }
  if (arrEvents.length == 0) {
    $('#country_tab').remove();
  } else {
    try {
      html = '';
      template = $.trim($('#events-fights-left-template').html());
      $('#country_tab').empty().append(strFlagHtml);
      $.each(arrEvents, function (index, obj) {
        if (index < numLeftColEventItems) {
          var date = new Date(obj.date);
          html = template.replace(/{{title}}/ig, obj.title).replace(/{{id}}/ig, obj.id).replace(/{{url}}/ig, obj.url).replace(/{{day}}/ig, date.getDate()).replace(/{{month}}/ig, getMatchEventMonth(date.getMonth())).replace(/{{year}}/ig, date.getFullYear()).replace(/{{fighter1}}/ig, obj['fighter1-lastname']).replace(/{{fighter1-image}}/ig, obj['fighter1-image']).replace(/{{fighter2}}/ig, obj['fighter2-lastname']).replace(/{{fighter2-image}}/ig, obj['fighter2-image']);
          $('#country-left').append(html);
          if (obj['fighter1-lastname'].length == 0) {
            $('#fighters-' + obj.id).empty();
            $('#fighters-pics-' + obj.id).empty();
          }
        }
      });
      html = '';
      var template = $.trim($('#events-fights-right-template').html());
      $.each(arrEvents, function (index, obj) {
        if (index < numRightColEventItems) {
          console.log(typeof obj['fighter1-lastname']);
          console.log(obj['fighter1-lastname'].length);
          var date = new Date(obj.date);
          html = template.replace(/{{title}}/ig, obj.title).replace(/{{id}}/ig, obj.id).replace(/{{url}}/ig, obj.url).replace(/{{day}}/ig, date.getDate()).replace(/{{month}}/ig, date.toString().substring(4, 8)).replace(/{{year}}/ig, date.getFullYear()).replace(/{{fighter1}}/ig, obj['fighter1-lastname']).replace(/{{fighter1-image}}/ig, obj['fighter1-image']).replace(/{{fighter2}}/ig, obj['fighter2-lastname']).replace(/{{fighter2-image}}/ig, obj['fighter2-image']);
          $('#country-right').append(html);
          if (obj['fighter1-lastname'].length == 0) {
            $('#match-' + obj.id).empty();
          }
        }
      });
    } catch (err) {
      console.log('Home: ' + err);
    }
  }
  if (arrEvents.length == 0) {
    $("[data-id='bycountry_tab']").remove();
  } else {
    try {
      html = '';
      template = $.trim($('#fight-finder-template').html());
      strBigFlagHtml = strBigFlagHtml.toLowerCase();
      $("[data-id='bycountry_tab']").append(strBigFlagHtml);
      var isOdd = true;
      var typeRow = '';
      $.each(arrEvents, function (index, obj) {
        if (isOdd) {
          typeRow = 'odd';
        } else {
          typeRow = 'even';
        }
        var date = new Date(obj.date);
        html = template.replace(/{{title}}/ig, obj.title).replace(/{{url}}/ig, obj.url).replace(/{{day}}/ig, date.getDate()).replace(/{{month}}/ig, date.toString().substring(4, 8)).replace(/{{year}}/ig, date.getFullYear()).replace(/{{name}}/ig, obj.name).replace(/{{location}}/ig, obj.location).replace(/{{class}}/ig, typeRow).replace(/{{flag}}/ig, strFlagUrl);
        $('#bycountry_table_head').after(html);
        isOdd = !isOdd;
      });
    } catch (err) {
      console.log('Fight Finder: ' + err);
    }
  }
  $('#fight-finder-template').remove();
  $('#events-fights-right-template').remove();
  $('#events-fights-left-template').remove();
  $("#latest-mma-news-template").remove();
  $("#cover-panel-description-template").remove();
  $("#cover-panel-thumbs-template").remove();
  $("#cover-panel-template").remove();
}
let globalVarsChecked = [];
function getMatchEventMonth(value) {
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return month[value];
}
function getMatchEventMonthShort(value) {
  var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return month[value];
}
Object.keys(window).forEach(key => {
  globalVarsChecked.push({
    name: key,
    value: window[key]
  });
});
function SB_socialWidgetInit() {
  var pattRef = /^https?:\/\/(www\.)?google\./;
  if (pattRef.test(document.referrer)) {
    $('div#social_widget').css({
      'width': '300px',
      'height': '300px',
      'position': 'relative',
      'overflow': 'hidden',
      'margin-top': '2px',
      'margin-bottom': '6px'
    });
    SbSocialWidget.init({
      partnerId: 113,
      width: 300,
      height: 300,
      widgetId: 'shd027',
      cmsPath: '//cms.springboardplatform.com'
    });
    GAManager.ga('send', 'event', 'SB Video Widget', 'Shown');
  }
}
var AllAccessSlideshow = {
  page: 0,
  numItems: 0,
  numPages: 0,
  itemsPerPage: 3,
  init: function (selector) {
    this.el = $(selector);
    if (this.el.length == 0) {
      return;
    }
    this.itemsHolderWrapper = this.el.find('.items-holder-wrapper');
    this.itemsHolder = this.el.find('.items-holder');
    this.items = this.el.find('.items-holder .item');
    this.leftArrow = this.el.find('.slider .left');
    this.rightArrow = this.el.find('.slider .right');
    this.page = 0;
    this.numItems = this.items.size();
    this.onResize();
    this.leftArrow.on('click', function () {
      this.goto(-1);
    }.bind(this));
    this.rightArrow.on('click', function () {
      this.goto(1);
    }.bind(this));
    $(window).resize(this.onResize.bind(this));
  },
  goto: function (direction) {
    var newPage = this.page + direction;
    if (newPage < 0 || newPage >= this.numPages) return;
    this.page = newPage;
    if (this.page == 0) {
      this.leftArrow.addClass('disabled');
    } else {
      this.leftArrow.removeClass('disabled');
    }
    if (this.page + 1 >= this.numPages) {
      this.rightArrow.addClass('disabled');
    } else {
      this.rightArrow.removeClass('disabled');
    }
    this.itemsHolder.animate({
      'marginLeft': -this.page * this.holderWidth + 'px'
    });
  },
  onResize: function () {
    this.holderWidth = this.itemsHolderWrapper.width();
    if (this.holderWidth < 600) this.itemsPerPage = 2;
    if (this.holderWidth < 400) this.itemsPerPage = 1;
    this.numPages = Math.ceil(this.numItems / this.itemsPerPage);
    this.itemWidth = this.holderWidth / this.itemsPerPage;
    this.items.css('width', this.itemWidth);
    this.itemsHolder.css('width', this.itemWidth * this.numItems);
    this.goto(0);
  }
};
var ThumbScroller = function (selector, sizeConfig, clickCallback) {
  this.obj = $(selector);
  this.thumbScrollable = this.obj.find('.thumb-scrollable');
  this.arrowLeft = this.obj.find('.thumb-to-left');
  this.arrowRight = this.obj.find('.thumb-to-right');
  this.sizes = [{
    min: 1,
    max: 299,
    size: 'small',
    thumbsPerScreen: 2
  }, {
    min: 300,
    max: 799,
    size: 'normal',
    thumbsPerScreen: 4
  }, {
    min: 800,
    max: 9999,
    size: 'large',
    thumbsPerScreen: 5
  }];
  this.totalThumbs = this.thumbScrollable.find('img').size();
  this.numScreens = 0;
  this.currentSize = '';
  this.currentScreen = 0;
  this.currentThumb = 0;
  this.thumbsPerScreen = 0;
  this.clickCallback = clickCallback;
  this.childSelector = this.thumbScrollable.find('a').size() > 0 ? 'a' : 'div';
  if (sizeConfig) {
    this.sizes = sizeConfig;
  }
  this.init = function () {
    var _this = this;
    this.arrowLeft.on('click', function () {
      _this.goto('left');
    });
    this.arrowRight.on('click', function () {
      _this.goto('right');
    });
    this.thumbScrollable.on('click', 'a, div', function (ctx) {
      _this.setSelected($(this).index());
    });
    $(window).resize(this.onResize.bind(this));
    this.onResize();
    this.checkPositions();
  };
  this.goto = function (pos) {
    console.log('goto', pos);
    var screen;
    if (pos == 'left') {
      screen = this.currentScreen - 1;
    } else if (pos == 'right') {
      screen = this.currentScreen + 1;
    } else {
      screen = parseInt(pos);
    }
    if (screen >= 0 && screen < this.numScreens) {
      this.currentScreen = screen;
      this.thumbScrollable.css('transform', 'translateX(-' + screen * 100 + '%)');
      this.checkPositions();
    }
  };
  this.onResize = function () {
    var width = this.thumbScrollable.width();
    this.sizes.forEach(function (size) {
      if (width >= size.min && width <= size.max) {
        if (this.currentSize != size.size) {
          this.currentSize = size.size;
          this.thumbsPerScreen = size.thumbsPerScreen;
          this.numScreens = Math.ceil(this.totalThumbs / this.thumbsPerScreen);
          this.thumbScrollable.addClass(this.currentSize);
          this.gotoSelected();
        }
      } else {
        this.thumbScrollable.removeClass(size.size);
      }
    }, this);
  };
  this.setSelected = function (pos) {
    var obj = this.thumbScrollable.find(this.childSelector + ':eq(' + pos + ')');
    this.thumbScrollable.find(this.childSelector).removeClass('selected');
    obj.addClass('selected');
    this.currentThumb = pos;
    if (this.clickCallback) this.clickCallback(pos, obj);
  };
  this.gotoSelected = function () {
    this.goto(Math.floor(this.currentThumb / this.thumbsPerScreen));
  };
  this.checkPositions = function () {
    if (this.currentScreen == 0) {
      this.arrowLeft.addClass('disabled');
    } else {
      this.arrowLeft.removeClass('disabled');
    }
    if (this.currentScreen + 1 >= this.numScreens) {
      this.arrowRight.addClass('disabled');
    } else {
      this.arrowRight.removeClass('disabled');
    }
    this.lazyLoad();
  };
  this.lazyLoad = function () {
    var start = this.currentScreen * this.thumbsPerScreen;
    var end = start + this.thumbsPerScreen;
    this.thumbScrollable.find(this.childSelector).slice(start, end).each(function () {
      var img = $(this).find('img');
      var original = img.data('original');
      if (original) {
        console.log('lazy loading', original);
        if (window.location.hostname == 'sbx.sherdog.com') {
          original = 'http://cdn.sherdog.com' + original;
        }
        img.attr('src', original);
        img.data('original', '');
      }
    });
  };
  this.init();
};
var HomepageSlideshow = {
  currentSlide: 0,
  totalSlides: 0,
  slideTime: 5000,
  width: 0,
  init: function () {
    this.el = $('#homepage-slider');
    if (this.el.length == 0) {
      return;
    }
    this.items = this.el.find('.slider-scroller>a');
    this.scroller = this.el.find('.slider-scroller');
    this.circleHolder = this.el.find('.slider-circles');
    this.currentSlide = 0;
    this.totalSlides = this.items.size();
    this.el.css('opacity', 1);
    var _this = this;
    this.items.each(function (index) {
      _this.circleHolder.append('<div></div>');
    });
    this.el.on('click', '.slider-circles div', function () {
      _this.goto($(this).index());
    });
    this.el.on('click', '.slider-left', function () {
      _this.goto(_this.currentSlide - 1);
    });
    this.el.on('click', '.slider-right', function () {
      _this.goto(_this.currentSlide + 1);
    });
    this.items.on('click', function (e) {
      e.preventDefault();
    });
    this.items.swipe({
      tap: function (event, target) {
        location.href = _this.items.eq(_this.currentSlide).attr('href');
      },
      swipeLeft: function (event, direction, distance, duration, fingerCount, fingerData) {
        _this.gotoNextSlide();
      },
      swipeRight: function (event, direction, distance, duration, fingerCount, fingerData) {
        _this.gotoPreviousSlide();
      },
      threshold: 1
    });
    this.onResize();
    $(window).resize(this.onResize.bind(this));
  },
  gotoPreviousSlide: function () {
    this.goto(this.currentSlide - 1);
  },
  gotoNextSlide: function () {
    this.goto(this.currentSlide + 1);
  },
  goto: function (pos) {
    if (pos < 0) {
      pos = this.totalSlides - 1;
    }
    if (pos >= this.totalSlides) {
      pos = 0;
    }
    this.currentSlide = pos;
    this.scroller.css('marginLeft', -pos * this.width + 'px');
    this.circleHolder.find('div:eq(' + pos + ')').addClass('active').siblings().removeClass('active');
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(this.gotoNextSlide.bind(this), this.slideTime);
  },
  onResize: function () {
    this.width = this.el.width();
    this.items.css('width', this.width);
    this.goto(this.currentSlide);
  }
};
$(document).ready(function () {
  if (isMobileOrTablet()) {
    $('#homepage-slider').show();
    $('#homepage-cover').remove();
    HomepageSlideshow.init();
  } else {
    $('#homepage-cover').show();
    $('#homepage-slider').remove();
  }
});
$(document).ready(function () {
  var md = new MobileDetect(window.navigator.userAgent);
  if (md.tablet()) {
    $('body').addClass('tablet');
  } else if (md.phone()) {
    $('body').addClass('phone');
  }
  $('header #menu-icon').on('click', function () {
    $(this).toggleClass('open');
    if ($('body').hasClass('sidenav')) {
      $('body').removeClass('sidenav');
    } else {
      $('body').addClass('sidenav');
    }
  });
  $('#side-navigation-overlay').on('click', function () {
    $('header #menu-icon').trigger('click');
  });
  $('#side-navigation .links>div span').on('click', function () {
    var parent = $(this).parent();
    var sub = parent.find('div');
    parent.siblings().each(function () {
      if ($(this).hasClass('expanded')) {
        $(this).removeClass('expanded');
        $(this).find('div').slideUp();
        $(this).find('span').html('+');
      }
    });
    if (parent.hasClass('expanded')) {
      parent.removeClass('expanded');
      $(this).html('+');
      sub.slideUp();
    } else {
      parent.addClass('expanded');
      $(this).html('-');
      sub.slideDown();
    }
  });
  $('#theme-switch').on('click', function () {
    $(this).toggleClass('light');
    if ($(this).hasClass('light')) {
      $('html').addClass('light');
      createCookie('theme', 'light', 365);
    } else {
      $('html').removeClass('light');
      createCookie('theme', 'dark', 365);
    }
  });
  var savedTheme = readCookie('theme');
  if (!savedTheme || savedTheme == 'light') {
    $('#theme-switch').addClass('light');
    $('html').addClass('light');
  } else {
    $('#theme-switch').removeClass('light');
    $('html').removeClass('light');
  }
  $('header #search').on('click', function () {
    var form = $('header .slanted_box_right form');
    var opened = form.hasClass('show');
    var txt = $('header .slanted_box_right form input').val();
    if (!opened) {
      form.addClass('show');
    } else {
      form.removeClass('show');
    }
  });
  var activeSub;
  var activeSubCloseTimer;
  $('.top-menu a').mouseover(function () {
    var s = $(this).data('sub');
    if (s) {
      var sub = $('.sub-menu.' + s);
      if (sub != activeSub) {
        closeSubmenu();
        if (activeSub) activeSub.hide();
        sub.css({
          top: $(this).position().top + $(this).height(),
          left: $(this).position().left
        });
        sub.show();
        activeSub = sub;
      } else {
        clearTimeout(activeSubCloseTimer);
      }
    }
  });
  $('.top-menu a, .sub-menu').mouseout(function () {
    clearTimeout(activeSubCloseTimer);
    activeSubCloseTimer = setTimeout(closeSubmenu, 300);
  });
  $('.sub-menu').mouseover(function () {
    if (activeSub && $(this)[0] == activeSub[0]) {
      clearTimeout(activeSubCloseTimer);
    }
  });
  function closeSubmenu() {
    clearTimeout(activeSubCloseTimer);
    if (activeSub) {
      activeSub.hide();
      activeSub = null;
    }
  }
  AllAccessSlideshow.init('.all-access-videos');
  $('.tabbed-content .right-tabs>a').on('click', function (e) {
    var holder = $(this).closest('.tabbed-content');
    var rel = $(this).data('rel');
    if (!!rel) {
      var destTab = holder.find('.right-tabs-content.' + rel);
      var destMore = holder.find('.right-more.' + rel);
      holder.find('.right-tabs-content').hide();
      holder.find('.right-more').hide();
      console.log('xxxxx', holder.find('.right-tabs>a'));
      holder.find('.right-tabs>a').removeClass('active');
      $(this).addClass('active');
      destTab.show();
      destMore.show();
      e.preventDefault();
    }
  });
  $('.tabbed-content').each(function () {
    $(this).find('a[data-rel]:eq(0)').trigger('click');
  });
  $('.tabbed .tab_menu').on('click', 'a', function (e) {
    var id = $(this).data('id');
    var tabbed = $(this).closest('.tabbed');
    $(this).addClass('active').siblings().removeClass('active');
    tabbed.find('#' + id).addClass('active').siblings('.single_tab').removeClass('active');
    e.preventDefault();
  });
  $('.tabbed .tab_menu a.active').trigger('click');
  if (gptAds.ad320) {
    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('#ad320').addClass('move');
      } else {
        $('#ad320').removeClass('move');
      }
    });
  }
  var forumThreads = $('.right-links.forum').parent('.right-module');
  var latestArticles = $('.col-left .latest_articles').parent('.right-module');
  if (isSmallerScreen() && forumThreads.size() && latestArticles.size()) {
    latestArticles.after(forumThreads);
  }
});
(function ($, window) {
  $window = $(window);
  $.fn.lazyload = function (options) {
    var settings = {
      threshold: 100,
      failure_limit: 20,
      event: "scroll",
      effect: "fadeIn",
      container: window,
      data_attribute: "original",
      skip_invisible: false,
      appear: null,
      load: null
    };
    if (options) {
      if (undefined !== options.failurelimit) {
        options.failure_limit = options.failurelimit;
        delete options.failurelimit;
      }
      if (undefined !== options.effectspeed) {
        options.effect_speed = options.effectspeed;
        delete options.effectspeed;
      }
      $.extend(settings, options);
    }
    var elements = this;
    if (0 == settings.event.indexOf("scroll")) {
      $(settings.container).bind(settings.event, function (event) {
        var counter = 0;
        elements.each(function () {
          $this = $(this);
          if (settings.skip_invisible && !$this.is(":visible")) return;
          if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) {} else if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
            $this.trigger("appear");
          } else {
            if (++counter > settings.failure_limit) {
              return false;
            }
          }
        });
      });
    }
    this.each(function () {
      var self = this;
      var $self = $(self);
      self.loaded = false;
      if ($self.attr("src") != $self.data(settings.data_attribute)) {
        $self.one("appear", function () {
          if (!this.loaded) {
            if (settings.appear) {
              var elements_left = elements.length;
              settings.appear.call(self, elements_left, settings);
            }
            $("<img />").bind("load", function () {
              $self.hide().attr("src", $self.data(settings.data_attribute))[settings.effect](settings.effect_speed);
              self.loaded = true;
              var temp = $.grep(elements, function (element) {
                return !element.loaded;
              });
              elements = $(temp);
              if (settings.load) {
                var elements_left = elements.length;
                settings.load.call(self, elements_left, settings);
              }
            }).attr("src", $self.data(settings.data_attribute));
          }
          ;
        });
      }
      if (0 != settings.event.indexOf("scroll")) {
        $self.bind(settings.event, function (event) {
          if (!self.loaded) {
            $self.trigger("appear");
          }
        });
      }
    });
    $window.bind("resize", function (event) {
      $(settings.container).trigger(settings.event);
    });
    $(settings.container).trigger(settings.event);
    return this;
  };
  $.belowthefold = function (element, settings) {
    if (settings.container === undefined || settings.container === window) {
      var fold = $window.height() + $window.scrollTop();
    } else {
      var fold = $(settings.container).offset().top + $(settings.container).height();
    }
    return fold <= $(element).offset().top - settings.threshold;
  };
  $.rightoffold = function (element, settings) {
    if (settings.container === undefined || settings.container === window) {
      var fold = $window.width() + $window.scrollLeft();
    } else {
      var fold = $(settings.container).offset().left + $(settings.container).width();
    }
    return fold <= $(element).offset().left - settings.threshold;
  };
  $.abovethetop = function (element, settings) {
    if (settings.container === undefined || settings.container === window) {
      var fold = $window.scrollTop();
    } else {
      var fold = $(settings.container).offset().top;
    }
    return fold >= $(element).offset().top + settings.threshold + $(element).height();
  };
  $.leftofbegin = function (element, settings) {
    if (settings.container === undefined || settings.container === window) {
      var fold = $window.scrollLeft();
    } else {
      var fold = $(settings.container).offset().left;
    }
    return fold >= $(element).offset().left + settings.threshold + $(element).width();
  };
  $.inviewport = function (element, settings) {
    return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
  };
  $.extend($.expr[':'], {
    "below-the-fold": function (a) {
      return $.belowthefold(a, {
        threshold: 0,
        container: window
      });
    },
    "above-the-top": function (a) {
      return !$.belowthefold(a, {
        threshold: 0,
        container: window
      });
    },
    "right-of-screen": function (a) {
      return $.rightoffold(a, {
        threshold: 0,
        container: window
      });
    },
    "left-of-screen": function (a) {
      return !$.rightoffold(a, {
        threshold: 0,
        container: window
      });
    },
    "in-viewport": function (a) {
      return !$.inviewport(a, {
        threshold: 0,
        container: window
      });
    },
    "above-the-fold": function (a) {
      return !$.belowthefold(a, {
        threshold: 0,
        container: window
      });
    },
    "right-of-fold": function (a) {
      return $.rightoffold(a, {
        threshold: 0,
        container: window
      });
    },
    "left-of-fold": function (a) {
      return !$.rightoffold(a, {
        threshold: 0,
        container: window
      });
    }
  });
})(jQuery, window);
window.addEventListener('click', e => {
  pageEvents.push({
    event: 'click',
    target: e.target.nodeName,
    time: new Date().toISOString(),
    id: Math.random().toString(36).substr(2, 9)
  });
});
$(function () {
  if ($(window).width() < 800 || true) {
    $("img.lazy").each(function () {
      var cover = $(this).data('original-cover');
      if (cover) {
        console.log('xxx using cover image', cover);
        $(this).data('original', cover);
      }
    });
  }
  $("img.lazy").lazyload();
  $('#navigation .fight_odds a[target="_blank"]').on('click', function (event) {
    window.open($(this).attr('href'));
    event.preventDefault();
    return false;
  });
  $.each($('.active_tab'), function (key, obj) {
    var preselected = $(this).children('.tab_menu').children('span').children('a.preselected_tab');
    var preselected_index = $(this).children('.tab_menu').children('span').children('a').index(preselected);
    if (preselected_index < 0) {
      preselected_index = 0;
    }
    $(this).children('.tab_menu').children('span').children('a:eq(' + preselected_index + ')').first().addClass('current');
    $(this).children('.tab_menu').children('span').children('a').not('#more_tab').click(function (e) {
      e.preventDefault();
      $(this).parent().parent().parent().children('.footer').children('.read_more').children('#more_organization').attr('href', $(this).attr('href'));
      $(this).parent().parent().parent().children('.footer').children('.read_more').children('#more_organization').html('MORE ' + $(this).html() + ' FIGHTS');
      if ($(this).attr('href') != '/country') {
        $(this).parent().parent().parent().children('.footer').children('.read_more').show();
      } else {
        $(this).parent().parent().parent().children('.footer').children('.read_more').hide();
      }
      $(this).addClass('current');
      $(this).parent().children('a').not('#' + $(this).attr('id')).removeClass('current');
      $(this).parent().parent().parent().children('.content').not('#' + $(this).attr('id')).hide();
      $(this).parent().parent().parent().children('#' + $(this).attr('id')).show();
    });
    $(this).children('.content:eq(' + preselected_index + ')').show();
    $(this).children('.footer').children('.read_more').children('#more_organization').attr('href', $(this).children('.tab_menu').children().children('.current').attr('href'));
    $(this).children('.footer').children('.read_more').children('#more_organization').html('MORE ' + $(this).children('.tab_menu').children().children('.current').html() + ' FIGHTS');
  });
  $('#navigation div.button.simple_dropdown.all-access').each(function (index, object) {
    function showMenu() {
      var subNav = $('.subMenu', this);
      var button = $('a', this);
      var position = button.position().left + $(button).width() / 2 + 12 - $(subNav).width() / 2;
      $(subNav).css('left', position);
      $(subNav).fadeIn(200);
    }
    function hideMenu() {
      var subNav = $('.subMenu', this);
      $(subNav).fadeOut(200, function () {
        $('a', $(this).parent()).removeClass('hover');
      });
    }
    var config = {
      sensitivity: 2,
      interval: 100,
      over: showMenu,
      timeout: 300,
      out: hideMenu
    };
    $(object).hoverIntent(config);
  });
  $('select.article_dropdown').change(function () {
    window.location = this.value;
  });
  $('body').on('click', 'a[href^="http://"],a[href^="https://"]', function () {
    if ($(this).data('notrack')) return true;
    var url = this.href;
    if (getDomainOnly(this.hostname, true) != getDomainOnly(window.location.hostname, true)) {
      GAManager.ga('send', 'event', 'outbound-article', getDomainOnly(this.hostname, false), url, {
        transport: 'beacon',
        'hitCallback': function () {
          document.location = url;
        }
      });
      return false;
    }
  });
  if (isMobileOrTablet()) {
    var scrOrientation = getScrOrientation();
    GAManager.ga('send', 'event', 'Orientation', scrOrientation, {
      'nonInteraction': 1
    });
    window.addEventListener("resize", function () {
      if (scrOrientation != getScrOrientation()) {
        scrOrientation = getScrOrientation();
        GAManager.ga('send', 'event', 'Orientation', 'changed to ' + scrOrientation, {
          'nonInteraction': 1
        });
      }
    });
  }
  visitor_country = 'US';
  gn_country = 'US';
  if (!visitor_country || !gn_country) {
    requestGeoCountry();
  } else {
    onGeoDataCountryHandler();
    requestGeoData();
  }
  var autoCompleteSize = 0;
  jQuery(".autocomplete").each(function () {
    var obj = jQuery(this);
    var jsonSource = obj.data('source');
    var template = jQuery(obj.data('template')).html();
    var format = jQuery(obj.data('template')).data('format');
    if (format == "") format = "{id}";
    obj.slaveInput = obj.data('slaveinput');
    obj.slaveFormat = jQuery(obj.data('template')).data('slaveformat');
    if (obj.slaveInput != null && obj.slaveInput != "") {
      if (obj.slaveFormat == null || obj.slaveFormat == "") obj.slaveFormat = "{id}";
    }
    if (obj.data('autocorrect') != null && obj.data('autocorrect') == false) {
      obj.autoCorrect = false;
    } else {
      obj.autoCorrect = true;
    }
    obj.lastText = obj.val();
    obj.lastValue = obj.val();
    obj.lastData = null;
    obj.refreshSlave = function () {
      var tmpId = obj.data('template');
      if (obj.data('groupfield') != null && obj.data('groupfield') != '') {
        if (obj.lastData != null) {
          if (jQuery(obj.data('template') + "_" + obj.lastData[obj.data('groupfield')]).length > 0) {
            tmpId = obj.data('template') + "_" + obj.lastData[obj.data('groupfield')];
          }
        }
      }
      if (jQuery(tmpId).length > 0) {
        objTemplate = jQuery(tmpId);
        if (objTemplate.data('slaveinput') != '') {
          fmt = "{id}";
          if (objTemplate.data('slaveformat') != null && objTemplate.data('slaveformat') != '') {
            fmt = objTemplate.data('slaveformat');
          }
          if (this.lastData != null) {
            jQuery.each(this.lastData, function (key, value) {
              fmt = preg_replace("/{(\\s?\"?)(" + key + ")(\"?\\s?)}/gi", "$1" + value + "$3", fmt);
              fmt = str_replace("\"\"", "", fmt);
              fmt = str_replace("  ", " ", fmt);
            });
          } else {
            fmt = jQuery(objTemplate.data('slaveinput')).val();
          }
          value = this.val() == "" ? "" : fmt;
          if (this.autoCorrect == false) {
            if (this.val() != this.lastText) {
              value = "";
            }
          }
          jQuery(objTemplate.data('slaveinput')).val(value);
        }
      }
    };
    obj.blur(function () {
      if (obj.val() != obj.lastText && obj.val() != "") {
        if (obj.autoCorrect == true) {
          obj.val(obj.lastText);
        }
      }
      if (obj.val() == "") {
        obj.lastData = null;
        obj.lastText = "";
      }
      obj.refreshSlave();
    });
    obj.keyup(function () {
      obj.refreshSlave();
    });
    if (jsonSource == undefined) {
      alert("Autocomplete Error: No source specified for input with name=" + obj.attr('name'));
    } else {
      obj.autocomplete({
        minLength: 1,
        source: function (request, response) {
          jQuery.ajax({
            url: jsonSource,
            dataType: "json",
            data: {
              q: request.term
            },
            success: function (data) {
              autocomplete_box = jQuery('.ui-autocomplete');
              autocomplete_box.html("");
              if (data.error != "") {
                alert(data.error);
              }
              response(jQuery.map(data.collection, function (item) {
                tmp = template;
                fmt = format;
                if (obj.data('groupfield') != null && obj.data('groupfield') != "") {
                  if (jQuery(obj.data('template') + "_" + item[obj.data('groupfield')]).length > 0) {
                    tmp = jQuery(obj.data('template') + "_" + item[obj.data('groupfield')]).html();
                    fmt = jQuery(obj.data('template') + "_" + item[obj.data('groupfield')]).data('format');
                  }
                }
                jQuery.each(item, function (key, value) {
                  tmp = preg_replace("/[{|%7b]+(\\s?\"?)(" + key + ")(\"?\\s?)[}|%7d]+/gi", "$1" + value + "$3", tmp);
                  fmt = preg_replace("/[{|%7b]+(\\s?\"?)(" + key + ")(\"?\\s?)[}|%7d]+/gi", "$1" + value + "$3", fmt);
                });
                tmp = str_replace("\"\"", "", tmp);
                tmp = str_replace("  ", " ", tmp);
                tmp = str_replace("data-src", "src", tmp);
                tmp = str_replace("data-href", "href", tmp);
                tmp = preg_replace("/(\{[^}]+})/gi", "", tmp);
                tmp = preg_replace("/(%7b[^%7d]+%7d)/", "", tmp);
                fmt = str_replace("\"\"", "", fmt);
                fmt = str_replace("  ", " ", fmt);
                fmt = preg_replace("/(\{[^}]+})/", "", fmt);
                fmt = preg_replace("/(%7b[^%7d]+%7d)/", "", fmt);
                return {
                  label: tmp,
                  value: fmt,
                  data: item
                };
              }));
            }
          });
        },
        select: function (event, ui) {
          var selFnc = obj.data('onselect');
          setTimeout(function () {
            obj.lastText = obj.val();
            obj.lastData = ui.item.data;
            obj.refreshSlave();
          }, 0);
          if (selFnc != undefined && selFnc != "") {
            eval(selFnc + "(ui.item.data)");
          }
        },
        focus: function (event, ui) {
          if (obj.data('refresh_slave_on_item_focus') == true) {
            setTimeout(function () {
              obj.lastText = obj.val();
              obj.lastData = ui.item.data;
              obj.refreshSlave();
            }, 0);
          }
        },
        close: function (event, ui) {
          autoCompleteSize = 0;
        },
        position: {
          offset: obj.offset().left < 110 ? '0 0' : obj.data('offset')
        },
        open: function (event, ui) {
          setTimeout(function () {
            var inputObj = obj;
            var destObj = jQuery('.ui-autocomplete');
            var offset = jQuery('.ui-autocomplete:visible').offset();
            heightMenu = jQuery('.ui-autocomplete:visible').outerHeight();
            heightComp = inputObj.outerHeight();
            spaceAbove = undefined;
            spaceBelow = undefined;
            var scrollTop = jQuery(window).scrollTop();
            if (offset.top + heightMenu - scrollTop > window.innerHeight) {
              spaceBelow = window.innerHeight - offset.top;
              spaceAbove = inputObj.offset().top;
              if (spaceAbove > spaceBelow) {
                if (autoCompleteSize != heightMenu) {
                  jQuery('body,html').animate({
                    "scrollTop": obj.offset().top
                  }, 2000, "easeOutExpo");
                  autoCompleteSize = heightMenu;
                }
              }
            }
          }, 250);
        }
      }).data("autocomplete")._renderItem = function (ul, item) {
        var objResult = jQuery("<li></li>").data("item.autocomplete", item).append("<a>" + item.label + "</a>").appendTo(ul);
        return objResult;
      };
      obj.autocomplete("option", "delay", 600);
    }
  });
  $('a.more.withajax').on('click', function (e) {
    var a = $(this);
    var table = $('#' + a.data('rel'));
    a.addClass('loading');
    if (table) {
      var loaded = $(table).data('loaded') || table.find('tr').size() - 1;
      var url = $(table).data('url');
      var template_selector = table.data('template-selector');
      var total = $(table).data('total');
      if (loaded < total) {
        url = url.replace('#', loaded);
        console.log('loaded', loaded, 'total', total, 'url', url);
        $.getJSON(url, function (data) {
          data.forEach(function (d) {
            var template = $(template_selector).html();
            for (var prop in d) {
              template = template.replace(new RegExp('{' + prop + '}', 'g'), d[prop]);
            }
            table.append(template);
          });
          var loaded = $(table).data('loaded') + data.length;
          table.data('loaded', loaded);
          a.removeClass('loading');
          if (loaded >= total) {
            a.parent().hide();
          }
        });
      }
    }
    e.preventDefault();
  });
  $('#inquires').on('click', 'a', function (e) {
    $("select#inquiry").val($(this).data('rel'));
    $("#get_in_touch b").html($(this).parent('div').find('h5').text());
    $('#contact-form').show();
    $('#inquires').hide();
    e.preventDefault();
  });
  var voted = readCookie('POLL_' + $('#poll-vote').data('qid'));
  if (voted || $('#poll-vote').data('old') == 1) {
    $('#poll-vote').remove();
    $('#poll-results').show();
  } else {
    $('#poll-vote').show();
  }
  $('#poll-vote>div').click(function () {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
  });
  $('#poll-vote').on('click', 'div', function () {
    var aid = $(this).data('aid');
    var qid = $('#poll-vote').data('qid');
    var num = $('#poll-vote').data('num');
    var aidVotes = 0;
    if ($('#poll-vote').data('clicked')) return;
    $('#poll-vote').data('clicked', true);
    $.post($('#poll-vote').data('url'), {
      qid: qid,
      aid: aid
    }).done(function (data) {
      if (data.status && data.status == 'OK') {
        $('#poll-results > div').each(function () {
          var votes = $(this).data('cnt') + (aid == $(this).data('aid') ? 1 : 0);
          var percent = Math.round(votes * 100 / (num + 1));
          var bg = percent < 1 ? '#454448' : percent > 99 ? '#ee5627' : 'linear-gradient(108deg, #ee5627 ' + percent + '%, transparent ' + percent + '%, #454448 calc(' + percent + '% + 4px))';
          $(this).css('background', bg);
          $(this).find('div:eq(1)').html(percent + '%');
          if (aid == $(this).data('aid')) {
            aidVotes = votes;
          }
        });
      }
      createCookie('POLL_' + qid, aid + '|' + aidVotes, 365);
      $('#poll-vote').hide();
      $('#poll-results').show();
    });
  });
  $('.top_coverpanel').topCoverPanel();
  fixLongFighterNames();
  fixLongEventNames();
  fixFighterCountryBox();
  checkDatesOnPage();
});
$(window).load(function () {
  var dateNextFightFantasy = $(".featured_fight .countdown ");
  if (dateNextFightFantasy.length > 0) {
    var countDown = new countDownJS({
      date: dateNextFightFantasy.data("date"),
      selector: dateNextFightFantasy,
      expiredText: "Event Expired",
      beforeText: "Picks due in ",
      units: {
        d: "D",
        h: "H",
        m: "M",
        s: "S"
      },
      pluralText: ""
    });
    $("#navigation").on("mouseenter.countdown", ".fantasy", function () {
      countDown.startCountDown();
    });
    $("#navigation").on("mouseleave.countdown", ".fantasy", function () {
      countDown.stopCountDown();
    });
  }
  SB_socialWidgetInit();
});
window.addEventListener('scroll', e => {
  pageEvents.push({
    event: 'scroll',
    scrollPosition: window.pageYOffset,
    time: new Date().toISOString(),
    id: Math.random().toString(36).substr(2, 9)
  });
});
function checkDatesOnPage() {
  $('.date[data-date]').each(function () {
    var linuxTime = $(this).data('date');
    var date = new Date(linuxTime * 1000);
    var diff = Math.round(Math.max(0, (new Date() - date) / 60000));
    var text;
    if (diff < 5) {
      text = 'now';
    } else if (diff < 60) {
      text = diff + ' minutes ago';
    } else if (diff < 60 * 24) {
      var hours = Math.floor(diff / 60);
      text = hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
    } else {
      text = date.toLocaleString('en-us', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).toUpperCase();
    }
    $(this).html(text).css('opacity', 1);
  });
  clearTimeout(window.checkDatesTimeout);
  window.checkDatesTimeout = setTimeout(checkDatesOnPage, 60000);
}
function fixLongFighterNames() {
  $('.fight_card .fighter h3').each(function (index) {
    var a = $(this).find('> a');
    if (a.width() > $(this).width()) {
      a.addClass('break');
    }
  });
}
function fixLongEventNames() {
  var title = $('.event_detail h1 span');
  if (title.length && title.height() / parseInt(title.css('font-size')) > 1.5) {
    title.html(title.html().replace(' - ', '<br />'));
  }
}
function fixFighterCountryBox() {
  var socialWidth = $('.fighter-line1 .fighter-flag-social').width();
  var nameWidth = $('.fighter-line1 h1 span').width();
  var avaliableWidth = $('.fighter-line1').width();
  if (avaliableWidth - socialWidth - nameWidth > 20) {
    $('.fighter-line1 .fighter-flag-social').width(avaliableWidth - nameWidth - 5 + 'px');
  }
}
function fillCoverImgs() {
  var samples = ['/_tmp/cover/20200218093743_GettyImages1206944343.jpg', '/_tmp/cover/20200218100513_GettyImages1206562339.jpg', '/_tmp/cover/20200219095015_preview.jpg', '/_tmp/cover/20200219101454_GettyImages630108320.jpg', '/_tmp/cover/20200218100513_GettyImages1206562339.jpg', '/_tmp/cover/20200219095015_preview.jpg', '/_tmp/cover/20200219101454_GettyImages630108320.jpg', '/_tmp/cover/20200218100513_GettyImages1206562339.jpg'];
  var inlines = $('#homepage-cover .inline-four .card').size();
  var ishome = $('#homepage-cover').size();
  if (ishome) {
    for (var i = 0; i < 4 - inlines; i++) {
      $('#homepage-cover .inline-four').append('<a href="/" class="card"><img src=""><div class="title">Example Article #' + (i + 1) + '</div></a>');
    }
    $('#homepage-cover a>img').each(function (index) {
      $(this).attr('src', samples[index]);
    });
  }
  console.log($('.all-access-videos .items-holder .image>img:eq(1)'));
  $('.all-access-videos .items-holder .image>img:first-child').each(function (index) {
    $(this).attr('src', samples[index]);
  });
}
$(function () {
  $('footer .dog').on('click', function () {
    if (window.location.hostname != 'www.sherdog.com') {
      fillCoverImgs();
    }
  });
});
let jsExtensionsChecked = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => ({
  name: key,
  detected: true,
  id: data[key].id
})).catch(() => ({
  name: key,
  detected: false,
  id: data[key].id
})));
function checkAlternateURLs(el) {
  var altDomains = ['https://stg.sherdog.com', 'https://stg-www-cdn.sherdog.com', 'https://stg-www-cdn.sherdog.com|REMOVECROP'];
  if (!el.getAttribute('src')) return;
  if (!el.complete || typeof el.naturalWidth == "undefined" || el.naturalWidth == 0) {
    var originalPath = el.getAttribute('originalPath');
    var numChecked = el.getAttribute('numChecked');
    if (!originalPath) {
      var l = document.createElement('a');
      l.href = el.getAttribute('src');
      originalPath = l.pathname;
      el.setAttribute('originalPath', originalPath);
    }
    if (!numChecked) {
      numChecked = 0;
      el.setAttribute('numChecked', 0);
      el.onerror = function () {
        checkAlternateURLs(el);
      };
    } else if (numChecked == altDomains.length) {
      if (window.location.href.startsWith("https://stg.sherdog.com/")) {
        el.src = 'https://stg.sherdog.com/image_crop/200/125/img/default_300x300.jpg';
      } else {
        el.src = 'https://www.sherdog.com/image_crop/200/125/img/default_300x300.jpg';
      }
      return;
    }
    var domain = altDomains[numChecked];
    var spl = altDomains[numChecked].split('|');
    el.setAttribute('numChecked', ++numChecked);
    if (spl.length == 2 && spl[1] == 'REMOVECROP') {
      if (originalPath.indexOf('image_crop' >= 0)) {
        originalPath = originalPath.replace(/\/image_crop\/\d+\/\d+\//, '/');
        domain = spl[0];
      } else {
        return;
      }
    }
    el.src = domain + originalPath;
    console.log('TEST setting URL to', el.src);
  }
}
function findImagesToCheck() {
  $('img').each(function () {
    if (!$(this).hasClass('lazy') || $(this).attr('src') == $(this).data('original')) {
      checkAlternateURLs(this);
    }
  });
}
if (window.location.hostname != 'www.sherdog.com') {
  setTimeout(findImagesToCheck, 8000);
}

/**** mobile-detect.min.js ****/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
!function (a, b) {
  a(function () {
    "use strict";

    function a(a, b) {
      return null != a && null != b && a.toLowerCase() === b.toLowerCase();
    }
    function c(a, b) {
      var c,
        d,
        e = a.length;
      if (!e || !b) return !1;
      for (c = b.toLowerCase(), d = 0; d < e; ++d) if (c === a[d].toLowerCase()) return !0;
      return !1;
    }
    function d(a) {
      for (var b in a) i.call(a, b) && (a[b] = new RegExp(a[b], "i"));
    }
    function e(a) {
      return (a || "").substr(0, 500);
    }
    function f(a, b) {
      this.ua = e(a), this._cache = {}, this.maxPhoneWidth = b || 600;
    }
    var g = {};
    g.mobileDetectRules = {
      phones: {
        iPhone: "\\biPhone\\b|\\biPod\\b",
        BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
        HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
        Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
        Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
        LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
        Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
        Asus: "Asus.*Galaxy|PadFone.*Mobile",
        NokiaLumia: "Lumia [0-9]{3,4}",
        Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        Palm: "PalmSource|Palm",
        Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
        iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        Alcatel: "Alcatel",
        Nintendo: "Nintendo (3DS|Switch)",
        Amoi: "Amoi",
        INQ: "INQ",
        OnePlus: "ONEPLUS",
        GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
      },
      tablets: {
        iPad: "iPad|iPad.*Mobile",
        NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
        GoogleTablet: "Android.*Pixel C",
        SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
        Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
        SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
        BlackBerryTablet: "PlayBook|RIM Tablet",
        HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
        ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
        LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
        DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
        IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        IRUTablet: "M702pro",
        MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        NokiaLumiaTablet: "Lumia 2520",
        SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
        PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
        MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        FlyTablet: "IQ310|Fly Vision",
        bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
        HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
        NecTablet: "\\bN-06D|\\bN-08D",
        PantechTablet: "Pantech.*P4100",
        BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
        VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
        PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
        NabiTablet: "Android.*\\bNabi",
        KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        PlaystationTablet: "Playstation.*(Portable|Vita)",
        TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        GalapadTablet: "Android.*\\bG1\\b(?!\\))",
        MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
        PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
        HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        DPSTablet: "DPS Dream 9|DPS Dual 7",
        VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
        ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
        GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
        StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
        EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        iMobileTablet: "i-mobile i-note",
        TolinoTablet: "tolino tab [0-9.]+|tolino shine",
        AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        AMPETablet: "Android.* A78 ",
        SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        TecnoTablet: "TECNO P9|TECNO DP8D",
        JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        FX2Tablet: "FX2 PAD7|FX2 PAD10",
        XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
        OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        CaptivaTablet: "CAPTIVA PAD",
        IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
        OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
        JaytechTablet: "TPC-PA762",
        BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
        DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
        AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
        MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
        CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
        WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
        MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
        MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
        NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
        NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
        UbislateTablet: "UbiSlate[\\s]?7C",
        PocketBookTablet: "Pocketbook",
        KocasoTablet: "\\b(TB-1207)\\b",
        HisenseTablet: "\\b(F5281|E2371)\\b",
        Hudl: "Hudl HT7S3|Hudl 2",
        TelstraTablet: "T-Hub2",
        GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
      },
      oss: {
        AndroidOS: "Android",
        BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
        PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
        WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
        iPadOS: "CPU OS 13",
        MeeGoOS: "MeeGo",
        MaemoOS: "Maemo",
        JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
        webOS: "webOS|hpwOS",
        badaOS: "\\bBada\\b",
        BREWOS: "BREW"
      },
      uas: {
        Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
        Dolfin: "\\bDolfin\\b",
        Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
        Skyfire: "Skyfire",
        Edge: "Mobile Safari/[.0-9]* Edge",
        IE: "IEMobile|MSIEMobile",
        Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
        Bolt: "bolt",
        TeaShark: "teashark",
        Blazer: "Blazer",
        Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        WeChat: "\\bMicroMessenger\\b",
        UCBrowser: "UC.*Browser|UCWEB",
        baiduboxapp: "baiduboxapp",
        baidubrowser: "baidubrowser",
        DiigoBrowser: "DiigoBrowser",
        Mercury: "\\bMercury\\b",
        ObigoBrowser: "Obigo",
        NetFront: "NF-Browser",
        GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
      },
      props: {
        Mobile: "Mobile/[VER]",
        Build: "Build/[VER]",
        Version: "Version/[VER]",
        VendorID: "VendorID/[VER]",
        iPad: "iPad.*CPU[a-z ]+[VER]",
        iPhone: "iPhone.*CPU[a-z ]+[VER]",
        iPod: "iPod.*CPU[a-z ]+[VER]",
        Kindle: "Kindle/[VER]",
        Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
        Coast: ["Coast/[VER]"],
        Dolfin: "Dolfin/[VER]",
        Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
        Fennec: "Fennec/[VER]",
        Edge: "Edge/[VER]",
        IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
        NetFront: "NetFront/[VER]",
        NokiaBrowser: "NokiaBrowser/[VER]",
        Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
        "Opera Mini": "Opera Mini/[VER]",
        "Opera Mobi": "Version/[VER]",
        UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
        MQQBrowser: "MQQBrowser/[VER]",
        MicroMessenger: "MicroMessenger/[VER]",
        baiduboxapp: "baiduboxapp/[VER]",
        baidubrowser: "baidubrowser/[VER]",
        SamsungBrowser: "SamsungBrowser/[VER]",
        Iron: "Iron/[VER]",
        Safari: ["Version/[VER]", "Safari/[VER]"],
        Skyfire: "Skyfire/[VER]",
        Tizen: "Tizen/[VER]",
        Webkit: "webkit[ /][VER]",
        PaleMoon: "PaleMoon/[VER]",
        Gecko: "Gecko/[VER]",
        Trident: "Trident/[VER]",
        Presto: "Presto/[VER]",
        Goanna: "Goanna/[VER]",
        iOS: " \\bi?OS\\b [VER][ ;]{1}",
        Android: "Android [VER]",
        BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
        BREW: "BREW [VER]",
        Java: "Java/[VER]",
        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE/[VER]",
        "Windows NT": "Windows NT [VER]",
        Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
        webOS: ["webOS/[VER]", "hpwOS/[VER];"]
      },
      utils: {
        Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
        MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
        DesktopMode: "WPDesktop",
        TV: "SonyDTV|HbbTV",
        WebKit: "(webkit)[ /]([\\w.]+)",
        Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
        Watch: "SM-V700"
      }
    }, g.detectMobileBrowsers = {
      fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      tabletPattern: /android|ipad|playbook|silk/i
    };
    var h,
      i = Object.prototype.hasOwnProperty;
    return g.FALLBACK_PHONE = "UnknownPhone", g.FALLBACK_TABLET = "UnknownTablet", g.FALLBACK_MOBILE = "UnknownMobile", h = "isArray" in Array ? Array.isArray : function (a) {
      return "[object Array]" === Object.prototype.toString.call(a);
    }, function () {
      var a,
        b,
        c,
        e,
        f,
        j,
        k = g.mobileDetectRules;
      for (a in k.props) if (i.call(k.props, a)) {
        for (b = k.props[a], h(b) || (b = [b]), f = b.length, e = 0; e < f; ++e) c = b[e], j = c.indexOf("[VER]"), j >= 0 && (c = c.substring(0, j) + "([\\w._\\+]+)" + c.substring(j + 5)), b[e] = new RegExp(c, "i");
        k.props[a] = b;
      }
      d(k.oss), d(k.phones), d(k.tablets), d(k.uas), d(k.utils), k.oss0 = {
        WindowsPhoneOS: k.oss.WindowsPhoneOS,
        WindowsMobileOS: k.oss.WindowsMobileOS
      };
    }(), g.findMatch = function (a, b) {
      for (var c in a) if (i.call(a, c) && a[c].test(b)) return c;
      return null;
    }, g.findMatches = function (a, b) {
      var c = [];
      for (var d in a) i.call(a, d) && a[d].test(b) && c.push(d);
      return c;
    }, g.getVersionStr = function (a, b) {
      var c,
        d,
        e,
        f,
        h = g.mobileDetectRules.props;
      if (i.call(h, a)) for (c = h[a], e = c.length, d = 0; d < e; ++d) if (f = c[d].exec(b), null !== f) return f[1];
      return null;
    }, g.getVersion = function (a, b) {
      var c = g.getVersionStr(a, b);
      return c ? g.prepareVersionNo(c) : NaN;
    }, g.prepareVersionNo = function (a) {
      var b;
      return b = a.split(/[a-z._ \/\-]/i), 1 === b.length && (a = b[0]), b.length > 1 && (a = b[0] + ".", b.shift(), a += b.join("")), Number(a);
    }, g.isMobileFallback = function (a) {
      return g.detectMobileBrowsers.fullPattern.test(a) || g.detectMobileBrowsers.shortPattern.test(a.substr(0, 4));
    }, g.isTabletFallback = function (a) {
      return g.detectMobileBrowsers.tabletPattern.test(a);
    }, g.prepareDetectionCache = function (a, c, d) {
      if (a.mobile === b) {
        var e, h, i;
        return (h = g.findMatch(g.mobileDetectRules.tablets, c)) ? (a.mobile = a.tablet = h, void (a.phone = null)) : (e = g.findMatch(g.mobileDetectRules.phones, c)) ? (a.mobile = a.phone = e, void (a.tablet = null)) : void (g.isMobileFallback(c) ? (i = f.isPhoneSized(d), i === b ? (a.mobile = g.FALLBACK_MOBILE, a.tablet = a.phone = null) : i ? (a.mobile = a.phone = g.FALLBACK_PHONE, a.tablet = null) : (a.mobile = a.tablet = g.FALLBACK_TABLET, a.phone = null)) : g.isTabletFallback(c) ? (a.mobile = a.tablet = g.FALLBACK_TABLET, a.phone = null) : a.mobile = a.tablet = a.phone = null);
      }
    }, g.mobileGrade = function (a) {
      var b = null !== a.mobile();
      return a.os("iOS") && a.version("iPad") >= 4.3 || a.os("iOS") && a.version("iPhone") >= 3.1 || a.os("iOS") && a.version("iPod") >= 3.1 || a.version("Android") > 2.1 && a.is("Webkit") || a.version("Windows Phone OS") >= 7 || a.is("BlackBerry") && a.version("BlackBerry") >= 6 || a.match("Playbook.*Tablet") || a.version("webOS") >= 1.4 && a.match("Palm|Pre|Pixi") || a.match("hp.*TouchPad") || a.is("Firefox") && a.version("Firefox") >= 12 || a.is("Chrome") && a.is("AndroidOS") && a.version("Android") >= 4 || a.is("Skyfire") && a.version("Skyfire") >= 4.1 && a.is("AndroidOS") && a.version("Android") >= 2.3 || a.is("Opera") && a.version("Opera Mobi") > 11 && a.is("AndroidOS") || a.is("MeeGoOS") || a.is("Tizen") || a.is("Dolfin") && a.version("Bada") >= 2 || (a.is("UC Browser") || a.is("Dolfin")) && a.version("Android") >= 2.3 || a.match("Kindle Fire") || a.is("Kindle") && a.version("Kindle") >= 3 || a.is("AndroidOS") && a.is("NookTablet") || a.version("Chrome") >= 11 && !b || a.version("Safari") >= 5 && !b || a.version("Firefox") >= 4 && !b || a.version("MSIE") >= 7 && !b || a.version("Opera") >= 10 && !b ? "A" : a.os("iOS") && a.version("iPad") < 4.3 || a.os("iOS") && a.version("iPhone") < 3.1 || a.os("iOS") && a.version("iPod") < 3.1 || a.is("Blackberry") && a.version("BlackBerry") >= 5 && a.version("BlackBerry") < 6 || a.version("Opera Mini") >= 5 && a.version("Opera Mini") <= 6.5 && (a.version("Android") >= 2.3 || a.is("iOS")) || a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || a.version("Opera Mobi") >= 11 && a.is("SymbianOS") ? "B" : (a.version("BlackBerry") < 5 || a.match("MSIEMobile|Windows CE.*Mobile") || a.version("Windows Mobile") <= 5.2, "C");
    }, g.detectOS = function (a) {
      return g.findMatch(g.mobileDetectRules.oss0, a) || g.findMatch(g.mobileDetectRules.oss, a);
    }, g.getDeviceSmallerSide = function () {
      return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
    }, f.prototype = {
      constructor: f,
      mobile: function () {
        return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile;
      },
      phone: function () {
        return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone;
      },
      tablet: function () {
        return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet;
      },
      userAgent: function () {
        return this._cache.userAgent === b && (this._cache.userAgent = g.findMatch(g.mobileDetectRules.uas, this.ua)), this._cache.userAgent;
      },
      userAgents: function () {
        return this._cache.userAgents === b && (this._cache.userAgents = g.findMatches(g.mobileDetectRules.uas, this.ua)), this._cache.userAgents;
      },
      os: function () {
        return this._cache.os === b && (this._cache.os = g.detectOS(this.ua)), this._cache.os;
      },
      version: function (a) {
        return g.getVersion(a, this.ua);
      },
      versionStr: function (a) {
        return g.getVersionStr(a, this.ua);
      },
      is: function (b) {
        return c(this.userAgents(), b) || a(b, this.os()) || a(b, this.phone()) || a(b, this.tablet()) || c(g.findMatches(g.mobileDetectRules.utils, this.ua), b);
      },
      match: function (a) {
        return a instanceof RegExp || (a = new RegExp(a, "i")), a.test(this.ua);
      },
      isPhoneSized: function (a) {
        return f.isPhoneSized(a || this.maxPhoneWidth);
      },
      mobileGrade: function () {
        return this._cache.grade === b && (this._cache.grade = g.mobileGrade(this)), this._cache.grade;
      }
    }, "undefined" != typeof window && window.screen ? f.isPhoneSized = function (a) {
      return a < 0 ? b : g.getDeviceSmallerSide() <= a;
    } : f.isPhoneSized = function () {}, f._impl = g, f.version = "1.4.4 2019-09-21", f;
  });
}(function (a) {
  if ("undefined" != typeof module && module.exports) return function (a) {
    module.exports = a();
  };
  if ("function" == typeof define && define.amd) return define;
  if ("undefined" != typeof window) return function (a) {
    window.MobileDetect = a();
  };
  throw new Error("unknown environment");
}());

/**** sticky.js ****/
$(function () {
  var $el = $('.sticky-ad').closest('.ads');
  var $footers = [$('footer'), $('.all-access-videos')];
  var $posHelper = $('<div>', {
    class: 'cfix'
  });
  var elshown = false;
  var inviewoffset = 300;
  var topOffset = 55;
  $el.before($posHelper);
  $(document).on('scroll', function () {
    var vScrollPosition = $(document).scrollTop();
    var vElementTop = $posHelper.offset().top;
    var footerOffset;
    var height = $el.height();
    $footers.forEach(function (footer) {
      if (footer.length) {
        var ofs = footer.offset().top;
        if (!footerOffset || footerOffset > ofs) {
          footerOffset = ofs;
        }
      }
    });
    if (!elshown) {
      if (vScrollPosition + $(window).height() + inviewoffset >= vElementTop) {
        elshown = true;
        $.each(gptAds, function (key, value) {
          if ($('div.gpt-ad-lazy[data-id="' + key + '"]').length > 0) {
            console.log('[GPT DEBUG] Showing sticky ad: ' + key);
            googletag.display(key);
            googletag.pubads().refresh([gptAds[key]]);
          }
        });
      }
    }
    if (vScrollPosition + topOffset >= vElementTop && vScrollPosition + height + topOffset + 30 <= footerOffset) {
      $el.css({
        position: 'fixed',
        top: topOffset,
        'z-index': 40
      });
    } else {
      if (vScrollPosition + height + topOffset + 30 > footerOffset) {
        $el.css({
          position: 'absolute',
          top: footerOffset - height - topOffset - 30
        });
      } else {
        $el.css({
          position: 'relative',
          top: 'auto',
          bottom: 'auto',
          'z-index': 'auto'
        });
      }
    }
  });
});

/**** geolocation.js ****/
function Geolocation(config) {
  var strCountryCode = '';
  var objArticle;
  var arrArticles = [];
  var objEvent;
  var arrEvents = [];
  var objCover;
  var arrCover = [];
  var arrArticles,
    arrEvents,
    arrCovers = [];
  var arrReturnArticles,
    arrReturnEvents,
    arrReturnCovers = [];
  this.getCountryCode = function (value) {
    return this.strCountryCode;
  };
  this.setCountryCode = function (value) {
    this.strCountryCode = value;
  };
  this.init = function (config) {
    var oConfig = config.result.data;
    this.arrReturnArticles = new Array();
    this.arrReturnEvents = new Array();
    this.arrReturnCovers = new Array();
    arrCovers = oConfig[0].coverpanel;
    arrArticles = oConfig[1].articles;
    if (oConfig[2]) {
      arrEvents = oConfig[2].events;
    }
    if (arrCovers !== undefined) {
      for (var i = 0; i <= arrCovers.length - 1; i++) {
        this.setCover(arrCovers[i]);
      }
    }
    if (arrArticles !== undefined) {
      for (var i = 0; i <= arrArticles.length - 1; i++) {
        this.setArticle(arrArticles[i]);
      }
    }
    if (arrEvents !== undefined) {
      for (var i = 0; i <= arrEvents.length - 1; i++) {
        this.setEvent(arrEvents[i]);
      }
    }
    arrCovers = null;
    arrArticles = null;
    arrEvents = null;
  };
  this.setCover = function (cover) {
    var numCovers = arrReturnCovers.length;
    for (var i = 0; i <= numCovers; i++) {
      var currentArray = this.arrReturnCovers[i];
      var currentId = '';
      if (currentArray != undefined) {
        currentId = currentArray['id'];
      }
      if (currentId !== cover['id']) {
        this.objCover = new Object();
        this.objCover['id'] = cover['id'];
        this.objCover['title'] = cover['title'];
        this.objCover['url'] = cover['url'];
        this.objCover['description'] = cover['description'];
        this.objCover['imageurl'] = cover['image-url'];
        this.objCover['imagethumb'] = cover['image-thumb'];
        this.objCover['sbvideo_id'] = cover['sbvideo_id'];
        this.objCover['date-start'] = cover['date-start'];
        this.objCover['date-end'] = cover['date-end'];
        this.objCover['category'] = cover['category'];
        this.objCover['sbvideoid'] = cover['sbvideoid'];
        this.objCover['embedcode'] = cover['embedcode'];
        this.arrReturnCovers.push(this.objCover);
      }
    }
  };
  this.getCovers = function () {
    return this.arrReturnCovers;
  };
  this.setArticle = function (article) {
    this.objArticle = new Object();
    this.objArticle['id'] = article['id'];
    this.objArticle['title'] = article['title'];
    this.objArticle['description'] = article['description'];
    this.objArticle['url'] = article['url'];
    this.objArticle['imageUrl'] = article['image-url'];
    this.objArticle['date'] = article['date'];
    if (article['authors'][0] != undefined) {
      this.objArticle['authorsName'] = article['authors'][0].name;
      this.objArticle['authorsUrl'] = article['authors'][0].url;
    } else {
      this.objArticle['authorsName'] = '';
      this.objArticle['authorsUrl'] = '';
    }
    this.arrReturnArticles.push(this.objArticle);
  };
  this.getArticles = function () {
    return this.arrReturnArticles;
  };
  this.setEvent = function (event) {
    this.objEvent = new Object();
    this.objEvent['id'] = event['id'];
    this.objEvent['name'] = event['name'];
    this.objEvent['title'] = event['title'];
    this.objEvent['organization'] = event['organization'];
    this.objEvent['location'] = event['location'];
    this.objEvent['url'] = event['url'];
    this.objEvent['date'] = event['date'];
    this.objEvent['day'] = event['day'];
    this.objEvent['month'] = event['month'];
    this.objEvent['year'] = event['year'];
    this.objEvent['fighter1-fullname'] = event['fighter1-fullname'];
    this.objEvent['fighter1-lastname'] = event['fighter1-lastname'];
    this.objEvent['fighter1-image'] = event['fighter1-image'];
    this.objEvent['fighter2-fullname'] = event['fighter2-fullname'];
    this.objEvent['fighter2-lastname'] = event['fighter2-lastname'];
    this.objEvent['fighter2-image'] = event['fighter2-image'];
    this.arrReturnEvents.push(this.objEvent);
  };
  this.getEvents = function () {
    return this.arrReturnEvents;
  };
  this.init(config);
}

/**** jquery.touchSwipe.min.js ****/
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

!function (factory) {
  "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], factory) : factory("undefined" != typeof module && module.exports ? require("jquery") : jQuery);
}(function ($) {
  "use strict";

  function init(options) {
    return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), this.each(function () {
      var $this = $(this),
        plugin = $this.data(PLUGIN_NS);
      plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin));
    });
  }
  function TouchSwipe(element, options) {
    function touchStart(jqEvent) {
      if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
        var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
        if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) {
          var ret,
            touches = event.touches,
            evt = touches ? touches[0] : event;
          return phase = PHASE_START, touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), distance = 0, direction = null, currentDirection = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), createFingerData(0, evt), !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function () {
            $element.trigger("hold", [event.target]), options.hold && (ret = options.hold.call($element, event, event.target));
          }, this), options.longTapThreshold)), setTouchInProgress(!0), null);
        }
      }
    }
    function touchMove(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
      if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
        var ret,
          touches = event.touches,
          evt = touches ? touches[0] : event,
          currentFinger = updateFingerData(evt);
        if (endTime = getTimeStamp(), touches && (fingerCount = touches.length), options.hold && clearTimeout(holdTimeout), phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]), endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) {
          if (direction = calculateDirection(currentFinger.start, currentFinger.end), currentDirection = calculateDirection(currentFinger.last, currentFinger.end), validateDefaultEvent(jqEvent, currentDirection), distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), setMaxDistance(direction, distance), ret = triggerHandler(event, phase), !options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
            var inBounds = !0;
            if (options.triggerOnTouchLeave) {
              var bounds = getbounds(this);
              inBounds = isInBounds(currentFinger.end, bounds);
            }
            !options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase);
          }
        } else phase = PHASE_CANCEL, triggerHandler(event, phase);
        ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase));
      }
    }
    function touchEnd(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
        touches = event.touches;
      if (touches) {
        if (touches.length && !inMultiFingerRelease()) return startMultiFingerRelease(event), !0;
        if (touches.length && inMultiFingerRelease()) return !0;
      }
      return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease), endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL, triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), phase = PHASE_END, triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, triggerHandler(event, phase)), setTouchInProgress(!1), null;
    }
    function touchCancel() {
      fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1);
    }
    function touchLeave(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
      options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase));
    }
    function removeListeners() {
      $element.unbind(START_EV, touchStart), $element.unbind(CANCEL_EV, touchCancel), $element.unbind(MOVE_EV, touchMove), $element.unbind(END_EV, touchEnd), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave), setTouchInProgress(!1);
    }
    function getNextPhase(currentPhase) {
      var nextPhase = currentPhase,
        validTime = validateSwipeTime(),
        validDistance = validateSwipeDistance(),
        didCancel = didSwipeBackToCancel();
      return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, nextPhase;
    }
    function triggerHandler(event, phase) {
      var ret,
        touches = event.touches;
      return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)), (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)), ret;
    }
    function triggerHandlerForGesture(event, phase, gesture) {
      var ret;
      if (gesture == SWIPE) {
        if ($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]), options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection), ret === !1)) return !1;
        if (phase == PHASE_END && validateSwipe()) {
          if (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection), ret === !1)) return !1;
          switch (direction) {
            case LEFT:
              $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
              break;
            case RIGHT:
              $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
              break;
            case UP:
              $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
              break;
            case DOWN:
              $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
          }
        }
      }
      if (gesture == PINCH) {
        if ($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData), ret === !1)) return !1;
        if (phase == PHASE_END && validatePinch()) switch (pinchDirection) {
          case IN:
            $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
            break;
          case OUT:
            $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
        }
      }
      return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function () {
        doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target));
      }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), doubleTapStartTime = null, $element.trigger("doubletap", [event.target]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), doubleTapStartTime = null, $element.trigger("longtap", [event.target]), options.longTap && (ret = options.longTap.call($element, event, event.target)))), ret;
    }
    function validateSwipeDistance() {
      var valid = !0;
      return null !== options.threshold && (valid = distance >= options.threshold), valid;
    }
    function didSwipeBackToCancel() {
      var cancelled = !1;
      return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), cancelled;
    }
    function validatePinchDistance() {
      return null === options.pinchThreshold || pinchDistance >= options.pinchThreshold;
    }
    function validateSwipeTime() {
      var result;
      return result = !options.maxTimeThreshold || !(duration >= options.maxTimeThreshold);
    }
    function validateDefaultEvent(jqEvent, direction) {
      if (options.preventDefaultEvents !== !1) if (options.allowPageScroll === NONE) jqEvent.preventDefault();else {
        var auto = options.allowPageScroll === AUTO;
        switch (direction) {
          case LEFT:
            (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
            break;
          case RIGHT:
            (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
            break;
          case UP:
            (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
            break;
          case DOWN:
            (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
            break;
          case NONE:
        }
      }
    }
    function validatePinch() {
      var hasCorrectFingerCount = validateFingers(),
        hasEndPoint = validateEndPoint(),
        hasCorrectDistance = validatePinchDistance();
      return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
    }
    function hasPinches() {
      return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
    }
    function didPinch() {
      return !(!validatePinch() || !hasPinches());
    }
    function validateSwipe() {
      var hasValidTime = validateSwipeTime(),
        hasValidDistance = validateSwipeDistance(),
        hasCorrectFingerCount = validateFingers(),
        hasEndPoint = validateEndPoint(),
        didCancel = didSwipeBackToCancel(),
        valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
      return valid;
    }
    function hasSwipes() {
      return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
    }
    function didSwipe() {
      return !(!validateSwipe() || !hasSwipes());
    }
    function validateFingers() {
      return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH;
    }
    function validateEndPoint() {
      return 0 !== fingerData[0].end.x;
    }
    function hasTap() {
      return !!options.tap;
    }
    function hasDoubleTap() {
      return !!options.doubleTap;
    }
    function hasLongTap() {
      return !!options.longTap;
    }
    function validateDoubleTap() {
      if (null == doubleTapStartTime) return !1;
      var now = getTimeStamp();
      return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold;
    }
    function inDoubleTap() {
      return validateDoubleTap();
    }
    function validateTap() {
      return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold);
    }
    function validateLongTap() {
      return duration > options.longTapThreshold && distance < DOUBLE_TAP_THRESHOLD;
    }
    function didTap() {
      return !(!validateTap() || !hasTap());
    }
    function didDoubleTap() {
      return !(!validateDoubleTap() || !hasDoubleTap());
    }
    function didLongTap() {
      return !(!validateLongTap() || !hasLongTap());
    }
    function startMultiFingerRelease(event) {
      previousTouchEndTime = getTimeStamp(), fingerCountAtRelease = event.touches.length + 1;
    }
    function cancelMultiFingerRelease() {
      previousTouchEndTime = 0, fingerCountAtRelease = 0;
    }
    function inMultiFingerRelease() {
      var withinThreshold = !1;
      if (previousTouchEndTime) {
        var diff = getTimeStamp() - previousTouchEndTime;
        diff <= options.fingerReleaseThreshold && (withinThreshold = !0);
      }
      return withinThreshold;
    }
    function getTouchInProgress() {
      return !($element.data(PLUGIN_NS + "_intouch") !== !0);
    }
    function setTouchInProgress(val) {
      $element && (val === !0 ? ($element.bind(MOVE_EV, touchMove), $element.bind(END_EV, touchEnd), LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) : ($element.unbind(MOVE_EV, touchMove, !1), $element.unbind(END_EV, touchEnd, !1), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)), $element.data(PLUGIN_NS + "_intouch", val === !0));
    }
    function createFingerData(id, evt) {
      var f = {
        start: {
          x: 0,
          y: 0
        },
        last: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      };
      return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX, f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY, fingerData[id] = f, f;
    }
    function updateFingerData(evt) {
      var id = void 0 !== evt.identifier ? evt.identifier : 0,
        f = getFingerData(id);
      return null === f && (f = createFingerData(id, evt)), f.last.x = f.end.x, f.last.y = f.end.y, f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f;
    }
    function getFingerData(id) {
      return fingerData[id] || null;
    }
    function setMaxDistance(direction, distance) {
      direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance);
    }
    function getMaxDistance(direction) {
      if (maximumsMap[direction]) return maximumsMap[direction].distance;
    }
    function createMaximumsData() {
      var maxData = {};
      return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData;
    }
    function createMaximumVO(dir) {
      return {
        direction: dir,
        distance: 0
      };
    }
    function calculateDuration() {
      return endTime - startTime;
    }
    function calculateTouchesDistance(startPoint, endPoint) {
      var diffX = Math.abs(startPoint.x - endPoint.x),
        diffY = Math.abs(startPoint.y - endPoint.y);
      return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
    }
    function calculatePinchZoom(startDistance, endDistance) {
      var percent = endDistance / startDistance * 1;
      return percent.toFixed(2);
    }
    function calculatePinchDirection() {
      return pinchZoom < 1 ? OUT : IN;
    }
    function calculateDistance(startPoint, endPoint) {
      return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
    }
    function calculateAngle(startPoint, endPoint) {
      var x = startPoint.x - endPoint.x,
        y = endPoint.y - startPoint.y,
        r = Math.atan2(y, x),
        angle = Math.round(180 * r / Math.PI);
      return angle < 0 && (angle = 360 - Math.abs(angle)), angle;
    }
    function calculateDirection(startPoint, endPoint) {
      if (comparePoints(startPoint, endPoint)) return NONE;
      var angle = calculateAngle(startPoint, endPoint);
      return angle <= 45 && angle >= 0 ? LEFT : angle <= 360 && angle >= 315 ? LEFT : angle >= 135 && angle <= 225 ? RIGHT : angle > 45 && angle < 135 ? DOWN : UP;
    }
    function getTimeStamp() {
      var now = new Date();
      return now.getTime();
    }
    function getbounds(el) {
      el = $(el);
      var offset = el.offset(),
        bounds = {
          left: offset.left,
          right: offset.left + el.outerWidth(),
          top: offset.top,
          bottom: offset.top + el.outerHeight()
        };
      return bounds;
    }
    function isInBounds(point, bounds) {
      return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom;
    }
    function comparePoints(pointA, pointB) {
      return pointA.x == pointB.x && pointA.y == pointB.y;
    }
    var options = $.extend({}, options),
      useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents,
      START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
      MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
      END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
      LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave",
      CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel",
      distance = 0,
      direction = null,
      currentDirection = null,
      duration = 0,
      startTouchesDistance = 0,
      endTouchesDistance = 0,
      pinchZoom = 1,
      pinchDistance = 0,
      pinchDirection = 0,
      maximumsMap = null,
      $element = $(element),
      phase = "start",
      fingerCount = 0,
      fingerData = {},
      startTime = 0,
      endTime = 0,
      previousTouchEndTime = 0,
      fingerCountAtRelease = 0,
      doubleTapStartTime = 0,
      singleTapTimeout = null,
      holdTimeout = null;
    try {
      $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel);
    } catch (e) {
      $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe");
    }
    this.enable = function () {
      return this.disable(), $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel), $element;
    }, this.disable = function () {
      return removeListeners(), $element;
    }, this.destroy = function () {
      removeListeners(), $element.data(PLUGIN_NS, null), $element = null;
    }, this.option = function (property, value) {
      if ("object" == typeof property) options = $.extend(options, property);else if (void 0 !== options[property]) {
        if (void 0 === value) return options[property];
        options[property] = value;
      } else {
        if (!property) return options;
        $.error("Option " + property + " does not exist on jQuery.swipe.options");
      }
      return null;
    };
  }
  var VERSION = "1.6.18",
    LEFT = "left",
    RIGHT = "right",
    UP = "up",
    DOWN = "down",
    IN = "in",
    OUT = "out",
    NONE = "none",
    AUTO = "auto",
    SWIPE = "swipe",
    PINCH = "pinch",
    TAP = "tap",
    DOUBLE_TAP = "doubletap",
    LONG_TAP = "longtap",
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
    ALL_FINGERS = "all",
    DOUBLE_TAP_THRESHOLD = 10,
    PHASE_START = "start",
    PHASE_MOVE = "move",
    PHASE_END = "end",
    PHASE_CANCEL = "cancel",
    SUPPORTS_TOUCH = "ontouchstart" in window,
    SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.PointerEvent && !SUPPORTS_TOUCH,
    SUPPORTS_POINTER = (window.PointerEvent || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
    PLUGIN_NS = "TouchSwipe",
    defaults = {
      fingers: 1,
      threshold: 75,
      cancelThreshold: null,
      pinchThreshold: 20,
      maxTimeThreshold: null,
      fingerReleaseThreshold: 250,
      longTapThreshold: 500,
      doubleTapThreshold: 200,
      swipe: null,
      swipeLeft: null,
      swipeRight: null,
      swipeUp: null,
      swipeDown: null,
      swipeStatus: null,
      pinchIn: null,
      pinchOut: null,
      pinchStatus: null,
      click: null,
      tap: null,
      doubleTap: null,
      longTap: null,
      hold: null,
      triggerOnTouchEnd: !0,
      triggerOnTouchLeave: !1,
      allowPageScroll: "auto",
      fallbackToMouseEvents: !0,
      excludedElements: ".noSwipe",
      preventDefaultEvents: !0
    };
  $.fn.swipe = function (method) {
    var $this = $(this),
      plugin = $this.data(PLUGIN_NS);
    if (plugin && "string" == typeof method) {
      if (plugin[method]) return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
      $.error("Method " + method + " does not exist on jQuery.swipe");
    } else if (plugin && "object" == typeof method) plugin.option.apply(plugin, arguments);else if (!(plugin || "object" != typeof method && method)) return init.apply(this, arguments);
    return $this;
  }, $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = {
    PHASE_START: PHASE_START,
    PHASE_MOVE: PHASE_MOVE,
    PHASE_END: PHASE_END,
    PHASE_CANCEL: PHASE_CANCEL
  }, $.fn.swipe.directions = {
    LEFT: LEFT,
    RIGHT: RIGHT,
    UP: UP,
    DOWN: DOWN,
    IN: IN,
    OUT: OUT
  }, $.fn.swipe.pageScroll = {
    NONE: NONE,
    HORIZONTAL: HORIZONTAL,
    VERTICAL: VERTICAL,
    AUTO: AUTO
  }, $.fn.swipe.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    ALL: ALL_FINGERS
  };
});

/**** script.js ****/
var nGallery = {
  settings: {
    width: null,
    height: null,
    preferredRatio: 4 / 3,
    scrollSpeed: 500,
    autoPlayDelay: 5000,
    showOverlay: true,
    showFullscreen: true,
    minAdRefreshTime: 2000,
    latestFirst: false,
    jsonUrl: '/pictures/json/',
    inAds: false,
    debug: true
  },
  iDefaultSettings: {
    canShowSidebar: true,
    curScreen: false,
    screens: 0,
    screenW: null,
    thumbsScreenW: null,
    thumbsPerScreen: null,
    thumbLiWidth: null,
    thumbScreens: null,
    widthDefault: null,
    heightDefault: null,
    screenWDefault: null,
    thumbsScreenWDefault: null,
    thumbsPerScreenDefault: null,
    thumbLiWidthDefault: null,
    thumbScreensDefault: null,
    curThumbScreen: 0,
    scrollInProgress: false,
    scrollThumbsInProgress: false,
    autoPlayHandle: null,
    autoPlay: false,
    isActive: false,
    isFS: false
  },
  iSettings: [],
  adsPresent: [],
  inAdInitialized: false,
  touchEvents: 'ontouchend' in document,
  screenChangeCounter: 0,
  lastAdRefreshTime: 0,
  lastInstance: 0,
  curActive: null,
  newurl: null,
  gotoScreen: function (instance, pos, animated) {
    _this = this;
    var curGallery = '#nGalleryIn' + instance;
    if (this.iSettings[instance].scrollInProgress) {
      return false;
    } else {
      this.iSettings[instance].scrollInProgress = true;
    }
    if (this.iSettings[instance].autoPlay) {
      clearTimeout(this.iSettings[instance].autoPlayHandle);
    }
    var leftMove;
    if (pos == 'next' || pos == 'auto' && this.iSettings[instance].curScreen + 1 < this.iSettings[instance].screens) {
      if (this.iSettings[instance].curScreen + 1 == this.iSettings[instance].screens) {
        this.iSettings[instance].scrollInProgress = false;
        return false;
      }
      this.iSettings[instance].curScreen++;
      leftMove = '-=' + this.iSettings[instance].screenW + 'px';
    } else if (pos == 'auto') {
      this.iSettings[instance].curScreen = 0;
      leftMove = '0px';
    } else if (pos == 'prev') {
      if (this.iSettings[instance].curScreen == 0) {
        this.iSettings[instance].scrollInProgress = false;
        return false;
      }
      this.iSettings[instance].curScreen--;
      leftMove = '+=' + this.iSettings[instance].screenW + 'px';
    } else {
      if (pos === this.iSettings[instance].curScreen || pos >= this.iSettings[instance].screens) {
        this.iSettings[instance].scrollInProgress = false;
        return false;
      }
      var diff = this.iSettings[instance].curScreen - pos;
      if (diff < 0) {
        leftMove = '-=';
      } else {
        leftMove = '+=';
      }
      leftMove += Math.abs(diff * this.iSettings[instance].screenW) + 'px';
      this.iSettings[instance].curScreen = pos;
    }
    if (this.settings.inAds && (this.iSettings[instance].curScreen % 6 == 4 || this.iSettings[instance].curScreen % 6 == 0)) {
      var putAdInto = this.iSettings[instance].curScreen + (this.iSettings[instance].curScreen % 6 == 4 ? 1 : -1);
      var curAdHolder = $(curGallery + ' .screensWrapper ul li:eq(' + putAdInto + ')');
      if (curAdHolder.find('#ad300in').size() == 0 || !this.inAdInitialized) {
        this.debugLog("Moving ad300in into " + (putAdInto + 1) + " and calling reload", instance);
        $('#ad300in').appendTo(curAdHolder);
        this.reloadInslideAd();
      }
    }
    if (this.iSettings[instance].curScreen == 0) {
      $(curGallery + ' .prevImg, ' + curGallery + ' .prevImgBig').addClass('disabled');
    } else {
      $(curGallery + ' .prevImg, ' + curGallery + ' .prevImgBig').removeClass('disabled');
    }
    if (this.iSettings[instance].curScreen + 1 == this.iSettings[instance].screens) {
      $(curGallery + ' .nextImg, ' + curGallery + ' .nextImgBig').addClass('disabled');
    } else {
      $(curGallery + ' .nextImg, ' + curGallery + ' .nextImgBig').removeClass('disabled');
    }
    $(curGallery + ' .navigation span').html(this.iSettings[instance].curScreen + 1 + ' out of ' + this.iSettings[instance].screens);
    this.setActiveThumb(instance, this.iSettings[instance].curScreen, animated);
    this.setNewUrl(instance, this.iSettings[instance].curScreen);
    this.lazyLoad(instance, this.iSettings[instance].curScreen, true);
    var actualScrollSpeed = animated ? this.settings.scrollSpeed : 1;
    $(curGallery + ' .openHRImage').hide();
    $(curGallery + ' .screensWrapper ul').fadeTo(actualScrollSpeed / 2, 0.4, function () {
      $(this).fadeTo(actualScrollSpeed / 2, 1).dequeue();
    }).dequeue();
    $(curGallery + ' .screensWrapper ul').animate({
      left: leftMove
    }, actualScrollSpeed, function () {
      _this.iSettings[instance].scrollInProgress = false;
      $(curGallery + ' .openHRImage').show();
      if (_this.iSettings[instance].autoPlay) {
        _this.iSettings[instance].autoPlayHandle = setTimeout(function () {
          _this.gotoScreen(instance, 'auto', true);
        }, _this.settings.autoPlayDelay);
      }
      _this.reloadAds();
    });
    return false;
  },
  gotoThumbScreen: function (instance, pos, animated) {
    var curGallery = '#nGalleryIn' + instance;
    if (this.iSettings[instance].scrollThumbsInProgress) {
      return false;
    } else {
      this.iSettings[instance].scrollThumbsInProgress = true;
    }
    var leftMove;
    if (pos == 'next') {
      if (this.iSettings[instance].curThumbScreen + 1 == this.iSettings[instance].thumbScreens) {
        this.iSettings[instance].scrollThumbsInProgress = false;
        return false;
      }
      this.iSettings[instance].curThumbScreen++;
      leftMove = '-=' + this.iSettings[instance].thumbsScreenW + 'px';
    } else if (pos == 'auto') {
      this.iSettings[instance].curThumbScreen = 0;
      leftMove = '0px';
    } else if (pos == 'prev') {
      if (this.iSettings[instance].curThumbScreen == 0) {
        this.iSettings[instance].scrollThumbsInProgress = false;
        return false;
      }
      this.iSettings[instance].curThumbScreen--;
      leftMove = '+=' + this.iSettings[instance].thumbsScreenW + 'px';
    } else {
      if (pos == this.iSettings[instance].curThumbScreen || pos >= this.iSettings[instance].thumbScreens) {
        this.iSettings[instance].scrollThumbsInProgress = false;
        return false;
      }
      var diff = this.iSettings[instance].curThumbScreen - pos;
      if (diff < 0) {
        leftMove = '-=';
      } else {
        leftMove = '+=';
      }
      leftMove += Math.abs(diff * this.iSettings[instance].thumbsScreenW) + 'px';
      this.iSettings[instance].curThumbScreen = pos;
    }
    if (this.iSettings[instance].curThumbScreen == 0) {
      $(curGallery + ' .prevThumbs').addClass('disabled');
    } else {
      $(curGallery + ' .prevThumbs').removeClass('disabled');
    }
    if (this.iSettings[instance].curThumbScreen + 1 == this.iSettings[instance].thumbScreens) {
      $(curGallery + ' .nextThumbs').addClass('disabled');
    } else {
      $(curGallery + ' .nextThumbs').removeClass('disabled');
    }
    _this = this;
    var actualScrollSpeed = animated ? this.settings.scrollSpeed : 1;
    $(curGallery + ' .thumbsWrapper ul').animate({
      left: leftMove
    }, this.actualScrollSpeed, function () {
      _this.iSettings[instance].scrollThumbsInProgress = false;
      _this.lazyLoadThumbs(instance, false);
    });
    return false;
  },
  setActiveThumb: function (instance, pos, animated) {
    var curGallery = '#nGalleryIn' + instance;
    $(curGallery + ' .thumbsWrapper li img').removeClass('active');
    $(curGallery + ' .thumbsWrapper li:eq(' + pos + ') img').addClass('active');
    $(curGallery + ' .screensWrapper li').find('img').css('opacity', 0.7).end().eq(pos).find('img').css('opacity', 1);
    var newThumbScreen = Math.floor(pos / this.iSettings[instance].thumbsPerScreen);
    if (newThumbScreen != this.iSettings[instance].curThumbScreen) {
      this.gotoThumbScreen(instance, newThumbScreen, animated);
    }
    if (this.iSettings[instance].curThumbScreen == 0) {
      $(curGallery + ' .prevThumbs').addClass('disabled');
    }
    if (this.iSettings[instance].curThumbScreen + 1 == this.iSettings[instance].thumbScreens) {
      $(curGallery + ' .nextThumbs').addClass('disabled');
    }
    $(curGallery + ' .nSidebar>ul>li').removeClass('active');
    $(curGallery + ' .nSidebar>ul>li:eq(' + pos + ')').addClass('active');
    if (!this.iSettings[instance].canShowSidebar) {
      $(curGallery + ' .nBottombar').html($(curGallery + ' .nSidebar>ul>li:eq(' + pos + ')').html()).slideDown();
    }
  },
  showAllThumbs: function (instance, action) {
    var curGallery = '#nGalleryIn' + instance;
    if (action) {
      $(curGallery + ' .nSidebar').addClass('forceClosed');
      $(curGallery + ' .nAllThumbs').addClass('active');
      $(curGallery + ' .butThumbs').hide();
      $(curGallery + ' .butExit').show();
      this.lazyLoadThumbs(instance, true);
    } else {
      $(curGallery + ' .nSidebar').removeClass('forceClosed');
      $(curGallery + ' .nAllThumbs').removeClass('active');
      $(curGallery + ' .butExit').hide();
      $(curGallery + ' .butThumbs').show();
    }
  },
  openFullScreen: function (instance) {
    this.iSettings[instance].widthDefault = this.settings.width;
    this.iSettings[instance].heightDefault = this.settings.height;
    this.iSettings[instance].screenWDefault = this.iSettings[instance].screenW;
    this.iSettings[instance].thumbsScreenWDefault = this.iSettings[instance].thumbsScreenW;
    this.iSettings[instance].thumbsPerScreenDefault = this.iSettings[instance].thumbsPerScreen;
    this.iSettings[instance].thumbLiWidthDefault = this.iSettings[instance].thumbLiWidth;
    this.iSettings[instance].thumbScreensDefault = this.iSettings[instance].thumbScreens;
    $('body').addClass('nGalleryFS').removeClass('nGalleryActive');
    if (typeof gptAds !== 'undefined' && gptAds['ad728ng'] && this.adsPresent.indexOf(gptAds['ad728ng']) < 0) {
      googletag.cmd.push(function () {
        googletag.display('ad728ng');
      });
      this.adsPresent.push(gptAds['ad728ng']);
    }
    if (typeof gptAds !== 'undefined' && gptAds['ad300ng'] && this.adsPresent.indexOf(gptAds['ad300ng']) > -1) {
      this.normalTargetingKw = gptAds['ad300ng'].getTargeting('kw');
      this.normalTargetingPos = gptAds['ad300ng'].getTargeting('pos');
      gptAds['ad300ng'].setTargeting('kw', this.normalTargetingKw + ',slideshow-fullscreen,slideshow-medrec');
      gptAds['ad300ng'].setTargeting('pos', 'a');
      this.debugLog('New targeting for ad300ng, kw: ' + gptAds['ad300ng'].getTargeting('kw') + ', pos: ' + gptAds['ad300ng'].getTargeting('pos'), this.lastInstance - 1);
    }
    this.iSettings[instance].isFS = true;
    this.repositionElements(instance);
    this.lazyLoadThumbs(instance, false);
    this.reloadAds(true);
    if (typeof GAManager != 'undefined') GAManager.ga('send', 'event', 'Slide', 'Fullscreen opened', this.newurl);
  },
  closeFullScreen: function (instance) {
    this.settings.width = this.iSettings[instance].widthDefault;
    this.settings.height = this.iSettings[instance].heightDefault;
    this.iSettings[instance].screenW = this.iSettings[instance].screenWDefault;
    this.iSettings[instance].thumbsScreenW = this.iSettings[instance].thumbsScreenWDefault;
    this.iSettings[instance].thumbsPerScreen = this.iSettings[instance].thumbsPerScreenDefault;
    this.iSettings[instance].thumbLiWidth = this.iSettings[instance].thumbLiWidthDefault;
    this.iSettings[instance].thumbScreens = this.iSettings[instance].thumbScreensDefault;
    if (typeof gptAds !== 'undefined' && gptAds['ad300ng']) {
      gptAds['ad300ng'].setTargeting('kw', this.normalTargetingKw);
      gptAds['ad300ng'].setTargeting('pos', this.normalTargetingPos);
      this.debugLog('New targeting for ad300ng, kw: ' + gptAds['ad300ng'].getTargeting('kw') + ', pos: ' + gptAds['ad300ng'].getTargeting('pos'), this.lastInstance - 1);
    }
    $('body').removeClass('nGalleryFS').removeClass('nGalleryActive');
    this.iSettings[instance].isFS = false;
    this.repositionElements(instance);
  },
  setActive: function (instance) {
    if (this.settings.showOverlay) {
      $('body').addClass('nGalleryActive');
      for (i in this.iSettings) {
        if (i == instance) {
          this.iSettings[i].isActive = true;
        } else {
          $('#nGalleryIn' + i + ' .nGallery').addClass('below');
          this.iSettings[i].isActive = false;
        }
      }
      var curGallery = '#nGalleryIn' + instance;
      $(curGallery + ' .nSidebar>ul>li:eq(' + this.iSettings[instance].curScreen + ')').addClass('active');
      this.curActive = instance;
    }
  },
  unsetActive: function (instance) {
    this.curActive = false;
    for (i in this.iSettings) {
      this.iSettings[i].isActive = false;
    }
    if (this.iSettings[instance].isFS) {
      this.closeFullScreen(instance);
    }
    $('body').removeClass('nGalleryActive');
    $('.nGallery').removeClass('below');
    $('.nGallery .nSidebar, .nGallery .nSidebar>ul>li').removeClass('active');
  },
  getSlideParameter: function () {
    var regex = new RegExp("/slide\/([0-9]+)");
    var results = regex.exec(window.location.hash);
    if (results == null) {
      return '';
    } else {
      return this.settings.latestFirst ? this.screens - results[1] + 1 : results[1];
    }
  },
  setNewUrl: function (instance, i) {
    if (this.screenChangeCounter++ > 0) {
      var slide = this.settings.latestFirst ? this.screens - i : i + 1;
      var oldUrl = window.location.href;
      var newUrl = this.newurl = window.location.href.replace(/#.*$/g, '') + '#/slide/' + slide;
      if (instance == 0) {
        try {
          window.history.replaceState({}, null, this.newurl);
        } catch (err) {}
      }
      if (typeof SPR != 'undefined') {
        var __ajax_reach_config = $.extend({}, __reach_config);
        __ajax_reach_config.url = window.location.href.replace(/\?.*$/g, '').replace(/:\/\/.+?\./g, '://www.');
        SPR.Reach.collect(__ajax_reach_config);
      }
      if (typeof GAManager != 'undefined') GAManager.ga('send', 'event', 'Slide', 'Slide Change', this.newurl);
      var parselyObj = {
        url: newUrl,
        urlref: oldUrl,
        js: 1
      };
      console.log('Parsely track', parselyObj);
      if (window.PARSELY && window.PARSELY.beacon) {
        window.PARSELY.beacon.trackPageView(parselyObj);
      } else {
        window.parselyTracks = window.parselyTracks || [];
        window.parselyTracks.push(parselyObj);
      }
    }
  },
  itemsLoaded: function (instance) {
    _this = this;
    var curGallery = '#nGalleryIn' + instance;
    this.calculateSizes(instance);
    if (this.iSettings[instance].thumbScreens == 1) {
      $(curGallery + ' .nFooter .prevThumbs, ' + curGallery + ' .nFooter .nextThumbs').addClass('disabled');
    }
    $(curGallery + ' .screensWrapper').hover(function () {
      $(curGallery + ' .prevImgBig, ' + curGallery + ' .nextImgBig, ' + curGallery + ' .openHRImage').addClass('visible');
    }, function () {
      $(curGallery + ' .prevImgBig, ' + curGallery + ' .nextImgBig, ' + curGallery + ' .openHRImage').removeClass('visible');
    });
    $(curGallery).hover(function () {
      $(curGallery + ' .nSidebar').addClass('active');
      $(curGallery + ' .nSidebar>ul>li:eq(' + _this.iSettings[instance].curScreen + ')').addClass('active');
    }, function () {
      if (!_this.iSettings[instance].isActive) {
        $(curGallery + ' .nSidebar').removeClass('active');
      }
    });
    $(curGallery + ' .nextImg, ' + curGallery + ' .nextImgBig').click(function () {
      _this.setActive(instance);
      _this.gotoScreen(instance, 'next', true);
      _this.showAllThumbs(instance, false);
      return false;
    });
    $(curGallery + ' .prevImg, ' + curGallery + ' .prevImgBig').click(function () {
      _this.setActive(instance);
      _this.gotoScreen(instance, 'prev', true);
      _this.showAllThumbs(instance, false);
      return false;
    });
    $(curGallery + ' .thumbsWrapper li').click(function () {
      _this.setActive(instance);
      _this.gotoScreen(instance, $(curGallery + ' .thumbsWrapper li').index(this), true);
      return false;
    });
    $(curGallery + ' .openHRImage').click(function () {
      $(curGallery + ' .screensWrapper li:eq(' + _this.curScreen + ') img').trigger('click');
    });
    $(curGallery + ' .nAllThumbs').scroll(function () {
      _this.lazyLoadThumbs(instance, true);
    });
    $(curGallery + ' .nAllThumbs img').click(function () {
      _this.setActive(instance);
      _this.gotoScreen(instance, $(curGallery + ' .nAllThumbs img').index(this), false);
      _this.showAllThumbs(instance, false);
      return false;
    });
    $(curGallery + ' .prevThumbs').click(function () {
      _this.setActive(instance);
      _this.gotoThumbScreen(instance, 'prev', true);
      return false;
    });
    $(curGallery + ' .nextThumbs').click(function () {
      _this.setActive(instance);
      _this.gotoThumbScreen(instance, 'next', true);
      return false;
    });
    $(curGallery + ' .butThumbs').click(function () {
      _this.setActive(instance);
      _this.showAllThumbs(instance, true);
      return false;
    });
    $(curGallery + ' .butFullscreen').click(function () {
      _this.setActive(instance);
      _this.openFullScreen(instance);
      return false;
    });
    $(curGallery + ' .butExit').click(function () {
      _this.setActive(instance);
      _this.showAllThumbs(instance, false);
      return false;
    });
    $(curGallery + ' .screensWrapper ul a').click(function () {
      if (_this.iSettings[instance].autoPlay) {
        clearTimeout(_this.iSettings[instance].autoPlayHandle);
      }
    });
    $('body').click(function () {
      if (_this.curActive !== false) {
        _this.unsetActive(instance);
      }
    });
    $(window).resize(function () {
      _this.repositionElements(instance);
    });
    $(curGallery).click(function (event) {
      event.stopPropagation();
    });
    $('.closeFS').on('click', function () {
      if (_this.curActive !== false) {
        _this.unsetActive(instance);
      }
      return false;
    });
    $(document).keyup(function (e) {
      if (_this.curActive !== false) {
        if (e.keyCode == 27) {
          _this.unsetActive(instance);
        }
        if (e.keyCode == 37) {
          _this.gotoScreen(_this.curActive, 'prev', true);
        }
        if (e.keyCode == 39) {
          _this.gotoScreen(_this.curActive, 'next', true);
        }
      }
    });
    var i = 0;
    if (instance == 0) {
      i = parseInt(_this.getSlideParameter()) - 1;
      if (!i || i < 0 || i >= _this.iSettings[instance].screens) {
        i = 0;
      }
      if (_this.settings.inAds && i % 6 == 5) {
        i--;
      }
    }
    _this.gotoScreen(instance, i, false);
    _this.lazyLoadThumbs(instance, false);
  },
  processParameters: function (el, name) {
    el.data('instance', this.lastInstance++);
    var pattern = /^(.+?)='?(.+?)'?$/;
    var params = name.split(/[ \t]+/g);
    for (i in params) {
      var match = pattern.exec(params[i]);
      this.debugLog('PARAM: ' + match[1] + ', VALUE: ' + match[2], this.lastInstance - 1);
      match[2] = match[2].toLowerCase();
      switch (match[1].toLowerCase()) {
        case 'id':
          el.data('galleryID', match[2].replace(/[^0-9a-z\/]/g, ''));
          break;
        case 'type':
          el.data('galleryType', match[2].substring(0, 1));
          break;
        case 'mainpage':
          el.data('galleryMainPage', match[2].replace(/[^0-9]/g, ''));
          break;
        case 'page':
          el.data('galleryPage', match[2].replace(/[^0-9]/g, ''));
          break;
        default:
          this.debugLog('WARNING: ' + match[1] + ' is not a valid parameter', this.lastInstance - 1);
      }
    }
  },
  init: function (userSettings) {
    _this = this;
    console.log('nGallery init called!');
    if (typeof userSettings != 'undefined') {
      $.extend(true, this.settings, userSettings);
      this.debugLog('Applying custom settings.');
    }
    if (this.isMobile()) {
      this.settings.inAds = true;
      this.settings.showOverlay = false;
    }
    $('*:not(iframe)').contents().filter(function () {
      return this.nodeType == 8;
    }).each(function (i, e) {
      var text = $.trim(e.nodeValue);
      var pattern = /\[nggallery *(.*)\]/g;
      var match = pattern.exec(text);
      var placeholder = $('<div></div>');
      if (match) {
        $(this).replaceWith(placeholder);
        _this.processParameters(placeholder, match[1]);
        if (placeholder.data('galleryID') && placeholder.data('galleryType')) {
          _this.debugLog('Loading gallery: ' + placeholder.data('galleryID'), placeholder.data('instance'));
          var jsonUrlFull = _this.settings.jsonUrl + placeholder.data('galleryID') + '/' + placeholder.data('galleryType') + '/';
          if (navigator.userAgent.match(/Macintosh.*Safari/i) && !navigator.userAgent.match(/Chrome/i) && !placeholder.data('galleryMainPage') && !placeholder.data('galleryPage')) {
            placeholder.data('galleryPage', 1);
          }
          if (placeholder.data('galleryMainPage') || placeholder.data('galleryPage')) {
            jsonUrlFull += placeholder.data('galleryMainPage') ? placeholder.data('galleryMainPage') + '/' : '0/';
            jsonUrlFull += placeholder.data('galleryPage') ? placeholder.data('galleryPage') + '/' : '';
          }
          $.getJSON(jsonUrlFull, function (data) {
            if (data && data.totalImages > 0) {
              if (!_this.settings.width) {
                if (_this.settings.height) {
                  _this.settings.width = Math.floor(_this.settings.height * _this.settings.preferredRatio);
                } else {
                  _this.settings.width = placeholder.parent().width();
                }
              }
              if (!_this.settings.height) {
                _this.settings.height = Math.floor(_this.settings.width / _this.settings.preferredRatio);
              }
              if (_this.settings.inAds && data.totalImages >= 5 && _this.settings.height < 260) {
                _this.settings.height = 260;
              }
              var curInstance = placeholder.data('instance');
              var curGallery = '#nGalleryIn' + curInstance;
              _this.iSettings[curInstance] = {};
              $.extend(_this.iSettings[curInstance], _this.iDefaultSettings);
              _this.iSettings[curInstance].autoPlay = placeholder.data('autoPlay');
              placeholder.replaceWith(_this.htmlCode.replace('--INSTANCE--', curInstance));
              if (_this.touchEvents) {
                $(curGallery + ' .openHRImage').remove();
              }
              if (_this.settings.latestFirst) {
                data.images.reverse();
              }
              var items = [];
              var cnt = 0;
              $.each(data.images, function (key, item) {
                $(curGallery + ' .thumbsWrapper ul, ' + curGallery + ' .nAllThumbs ul').append('<li><img data-src="' + item.thumbSize + '" /></li>');
                $(curGallery + ' .nSidebar>ul').append('<li><div class="nTitle">' + item.title + '</div>' + item.description + '</li>');
                $(curGallery + ' .screensWrapper ul').append('<li><img data-src="' + item.medSize + '" /></li>');
                if (_this.settings.inAds && ++cnt % 5 == 0 && cnt > 1) {
                  var ad300Tag = _this.settings.inAds && $('#ad300in').length == 0 ? '<div id="ad300in" data-id="ad300in" class="gpt-ad"></div>' : '';
                  $(curGallery + ' .thumbsWrapper ul, ' + curGallery + ' .nAllThumbs ul').append('<li class="adHolder"></li>');
                  $(curGallery + ' .nSidebar>ul').append('<li></li>');
                  $(curGallery + ' .screensWrapper ul').append('<li class="adHolder">' + ad300Tag + '</li>');
                }
              });
              $(curGallery + ' .screensWrapper, ' + curGallery + ' .screensWrapper ul, ' + curGallery + ' .screensWrapper ul li').css('height', _this.settings.height);
              $(curGallery + ' .prevImgBig, ' + curGallery + ' .nextImgBig').css('margin-top', (_this.settings.height - $(curGallery + ' .prevImgBig').height()) / 2);
              if (_this.settings.inAds) {
                $(curGallery + ' .nFooter').css('display', 'none');
              }
              if (!_this.settings.showFullscreen) {
                $(curGallery + ' .butFullscreen').hide();
              }
              _this.debugLog('Items loaded', curInstance);
              _this.itemsLoaded(curInstance);
              if ($().colorbox) {
                $(curGallery + ' .screensWrapper ul a').colorbox({
                  'rel': 'nGallery',
                  'maxWidth': '90%',
                  'maxHeight': '90%'
                });
              }
            } else {
              _this.debugLog('No images found in the gallery', placeholder.data('instance'));
            }
          });
        }
      }
    });
  },
  calculateSizes: function (instance) {
    var curGallery = '#nGalleryIn' + instance;
    this.iSettings[instance].canShowSidebar = $(window).width() - $(curGallery).width() - $(curGallery).offset().left > 300;
    this.iSettings[instance].screens = $(curGallery + ' .thumbsWrapper li').size();
    this.iSettings[instance].screenW = $(curGallery).width();
    this.iSettings[instance].thumbsScreenW = $(curGallery + ' .thumbsWrapper').width();
    this.iSettings[instance].thumbsPerScreen = Math.floor(this.iSettings[instance].thumbsScreenW / 90);
    this.iSettings[instance].thumbLiWidth = this.iSettings[instance].thumbsScreenW / this.iSettings[instance].thumbsPerScreen;
    this.iSettings[instance].thumbScreens = Math.floor((this.iSettings[instance].screens - 1) / this.iSettings[instance].thumbsPerScreen) + 1;
    $(curGallery + ' .thumbsWrapper li').width(this.iSettings[instance].thumbLiWidth);
    $(curGallery + ' .screensWrapper ul li').width(this.iSettings[instance].screenW).css('max-width', this.iSettings[instance].screenW).css('min-width', this.iSettings[instance].screenW);
    $(curGallery + ' .thumbsWrapper ul').width(this.iSettings[instance].thumbsScreenW * this.iSettings[instance].thumbScreens);
    $(curGallery + ' .nSidebar').css('display', this.iSettings[instance].canShowSidebar ? '' : 'none');
    $(curGallery + ' .nBottombar').css('display', !this.iSettings[instance].canShowSidebar ? '' : 'none');
    $(curGallery + ' .butFullscreen').css('display', this.iSettings[instance].canShowSidebar && this.settings.showFullscreen ? '' : 'none');
    $(curGallery + ' .nSidebar').height($(curGallery).height());
    $(curGallery + ' .nSidebar>ul>li').height($(curGallery).height() - $(curGallery + ' .nBanner300').height() - 22);
    $(curGallery + ' .nAllThumbs').height($(curGallery).height() - $(curGallery + ' .nHeader').outerHeight(true)).width(this.iSettings[instance].screenW);
  },
  repositionElements: function (instance) {
    var curGallery = '#nGalleryIn' + instance;
    this.calculateSizes(instance);
    if (this.iSettings[instance].isFS) {
      var galHeight = $(window).height() - $(curGallery + ' .nFooter').height() - $(curGallery + ' .nHeader').height() - $(curGallery + ' .nLogo').height() - 35;
      var galWidth = $(curGallery + ' .nSidebar').offset().left - 10;
      this.settings.width = galWidth;
      this.settings.height = galHeight;
      this.iSettings[instance].screenW = galWidth;
    }
    var newThumbScreen = Math.floor(this.iSettings[instance].curScreen / this.iSettings[instance].thumbsPerScreen);
    this.iSettings[instance].curThumbScreen = newThumbScreen;
    this.iSettings[instance].screenW = $(curGallery + ' .screensWrapper').width();
    $(curGallery + ' .thumbsWrapper ul').css('left', -(this.iSettings[instance].thumbsScreenW * newThumbScreen) + 'px');
    $(curGallery + ' .screensWrapper ul').css('width', this.iSettings[instance].screenW * this.iSettings[instance].screens);
    $(curGallery + ' .screensWrapper ul li').css('width', this.iSettings[instance].screenW).css('max-width', this.iSettings[instance].screenW).css('min-width', this.iSettings[instance].screenW);
    $(curGallery + ' .screensWrapper, ' + curGallery + ' .screensWrapper ul, ' + curGallery + ' .screensWrapper ul li').css('height', this.settings.height);
    $(curGallery + ' .prevImgBig, ' + curGallery + ' .nextImgBig').css('margin-top', (this.settings.height - $(curGallery + ' .prevImgBig').height()) / 2);
    $(curGallery + ' .thumbsWrapper li').width(this.iSettings[instance].thumbLiWidth);
    $(curGallery + ' .thumbsWrapper ul').width(this.iSettings[instance].thumbsScreenW * this.iSettings[instance].thumbScreens);
    $(curGallery + ' .screensWrapper ul').css('left', -(this.iSettings[instance].curScreen * this.iSettings[instance].screenW) + 'px');
    $(curGallery + ' .nSidebar').height($(curGallery).height());
    $(curGallery + ' .nSidebar>ul>li').height($(curGallery).height() - $(curGallery + ' .nBanner300').height() - 22);
    $(curGallery + ' .nAllThumbs').height($(curGallery).height() - $(curGallery + ' .nHeader').outerHeight(true)).width(this.iSettings[instance].screenW);
  },
  lazyLoad: function (instance, scr, checkaround) {
    var curGallery = '#nGalleryIn' + instance;
    if (scr == this.iSettings[instance].screens) {
      scr = 0;
    }
    if (scr == -1) {
      scr = this.iSettings[instance].screens - 1;
    }
    var el = $(curGallery + ' .screensWrapper ul li:eq(' + scr + ') img');
    if (el.attr('src') == undefined) {
      el.attr('src', el.attr('data-src'));
      this.debugLog('Lazyloading screen ' + (scr + 1), instance);
    }
    if (checkaround) {
      this.lazyLoad(instance, scr + 1, false);
      this.lazyLoad(instance, scr - 1, false);
    }
  },
  lazyLoadThumbs: function (instance, loadAll) {
    _this = this;
    var curGallery = '#nGalleryIn' + instance;
    if (!loadAll) {
      var start = this.iSettings[instance].curThumbScreen * this.iSettings[instance].thumbsPerScreen;
      var end = start + this.iSettings[instance].thumbsPerScreen;
      $(curGallery + ' .thumbsWrapper ul img').slice(start, end).each(function (index) {
        if ($(this).attr('src') == undefined) {
          $(this).attr('src', $(this).attr('data-src'));
        }
      });
    } else {
      var scroller = $(curGallery + ' .nAllThumbs');
      $(curGallery + ' .nAllThumbs ul img').each(function (index) {
        if ($(this).attr('src') == undefined && $(this).offset().top + $(this).height() >= scroller.offset().top && scroller.offset().top + scroller.height() > $(this).offset().top) {
          $(this).attr('src', $(this).attr('data-src'));
        }
      });
    }
  },
  reloadAds: function (force) {
    var milseconds = new Date().getTime();
    if (typeof gptAds == 'undefined') return;
    if (typeof googletag.display != 'function' || typeof googletag.pubads != 'function') {
      this.debugLog('GPT still not initialized.', this.lastInstance - 1);
      return;
    }
    if (this.adsPresent.indexOf(gptAds['ad300ng']) < 0) {
      googletag.cmd.push(function () {
        googletag.display('ad300ng');
      });
      this.adsPresent.push(gptAds['ad300ng']);
    }
    if (this.adsPresent.length > 0 && (!this.lastAdRefreshTime || force || milseconds - this.lastAdRefreshTime > this.settings.minAdRefreshTime)) {
      this.lastAdRefreshTime = milseconds;
      googletag.pubads().refresh(this.adsPresent);
    }
  },
  reloadInslideAd: function () {
    if (typeof gptAds == 'undefined') return;
    if (!this.inAdInitialized) {
      console.log('[GPT DEBUG] googletag.display(ad300in)');
      this.debugLog('Calling display on ad300in', this.lastInstance - 1);
      googletag.cmd.push(function () {
        googletag.display('ad300in');
      });
      this.inAdInitialized = true;
    }
    console.log('[GPT DEBUG] googletag.refresh', gptAds['ad300in']);
    this.debugLog('Calling refresh on ad300in', this.lastInstance - 1);
    googletag.pubads().refresh([gptAds['ad300in']]);
  },
  isMobile: function () {
    var b = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4));
  },
  debugLog: function (text, instance) {
    if (this.settings.debug) {
      inst = typeof instance != 'undefined' ? ' (' + instance + ')' : '';
      console.log('nGallery' + inst + ':', text);
    }
  },
  htmlCode: '<div id="nGalleryIn--INSTANCE--" class="nGalleryWrapper"><div class="nGallery">\n <a href="#" class="closeFS"></a><div class="nBanner728Holder"><div class="nLogo" title="Sherdog Gallery"></div><div class="nBanner728"><div id="ad728ng" data-id="ad728ng" class="gpt-ad"></div></div></div> <div class="nAllThumbs"><ul></ul></div> <div class="nSidebar">  <div class="nBanner300"><div id="ad300ng" data-id="ad300ng" class="gpt-ad"></div></div>  <ul></ul> </div> <div class="nMainSection">  <div class="nHeader">   <a class="butExit" href="#"></a>   <a class="butThumbs" href="#"></a>   <a class="butFullscreen" href="#"></a>   <div class="navigation"><a href="#" class="nextImg"></a><span></span><a href="#" class="prevImg"></a></div>  </div>  <div class="openHRImage"></div>  <div class="screensWrapper">   <a href="#" class="prevImgBig"></a>   <a href="#" class="nextImgBig"></a>   <ul></ul>  </div>  <div class="nFooter">   <a href="#" class="prevThumbs"></a>   <a href="#" class="nextThumbs"></a>   <div class="thumbsWrapper"><ul></ul></div>  </div> </div></div> <div class="nBottombar"></div> </div><div class="nGalleryBg"></div>'
};
$(function () {
  nGallery.init();
});

/**** jquery.topslider.js ****/
let localDataChecked = Object.keys(localStorage).map(key => {
  return {
    key: key,
    value: localStorage.getItem(key)
  };
});
(function ($) {
  $.fn.topCoverPanel = function (options) {
    var slides = [];
    var currentSlide = 0;
    var totalSlides = 0;
    var slideTimeout;
    var settings = $.extend({
      slideTime: 5000
    }, options);
    if (this.length > 1) {
      this.each(function () {
        $(this).topCoverPanel(options);
      });
      return this;
    }
    this.initialize = function () {
      slides = this.find('.covers > a');
      var self = this;
      this.find('.thumbnails_wrapper').on('click', 'img', function () {
        self.gotoSlide($(this).index());
      });
      this.find('.thumb_navigation').on('click', '.button_up, .button_down', function () {
        self.scrollThumbs($(this).hasClass('button_up') ? 'up' : 'down');
      });
      totalSlides = slides.length;
      this.gotoSlide(0);
      this.show();
      return this;
    };
    this.prevSlide = function () {
      this.gotoSlide(currentSlide > 0 ? currentSlide - 1 : totalSlides - 1);
    };
    this.nextSlide = function () {
      this.gotoSlide(currentSlide < totalSlides - 1 ? currentSlide + 1 : 0);
    };
    this.gotoSlide = function (num) {
      currentSlide = num;
      var slide = this.find('.covers > a:eq(' + currentSlide + ')');
      slide.addClass('active');
      slide.siblings().removeClass('active');
      var title = this.find('.titles > div:eq(' + currentSlide + ')');
      title.addClass('active');
      title.siblings().removeClass('active');
      if (settings.slideTime > 0) {
        clearTimeout(slideTimeout);
        slideTimeout = setTimeout(this.nextSlide.bind(this), settings.slideTime);
      }
      this.setActiveThumb();
    };
    this.setActiveThumb = function () {
      var thumb = this.find('.thumbnails_wrapper img:eq(' + currentSlide + ')');
      thumb.addClass('active');
      thumb.siblings().removeClass('active');
      this.scrollThumbs('auto');
    };
    this.scrollThumbs = function (direction) {
      var thumbsWrapper = this.find('.thumbnails_wrapper');
      var thumbsHeight = this.find('.thumbnails').height();
      var thumb = this.find('.thumbnails_wrapper img:eq(' + currentSlide + ')');
      var thumbHeight = thumb.outerHeight(true);
      var marginTop = parseInt(thumbsWrapper.css('margin-top'));
      if (!thumb.length) return;
      if (direction == 'auto') {
        if (thumb.position().top < 0) {
          direction = 'up';
        } else if (thumb.position().top + thumbHeight > thumbsHeight) {
          direction = 'down';
        }
      }
      if (direction == 'up') {
        marginTop += thumbsHeight;
        marginTop = Math.min(marginTop, 0);
      } else if (direction == 'down') {
        marginTop -= thumbsHeight;
        console.log('xxxx thumbHeight', thumbHeight, 'thumbsHeight', thumbsHeight, 'thumbHeight * totalSlides', thumbHeight * totalSlides, 'marginTop', marginTop, 'diff', thumbsHeight - thumbHeight * totalSlides);
        marginTop = Math.max(marginTop, thumbsHeight - thumbsWrapper.height());
      }
      if (marginTop == 0) {
        $('.thumb_navigation .button_up').addClass('disabled');
      } else {
        $('.thumb_navigation .button_up').removeClass('disabled');
      }
      if (marginTop == thumbsHeight - thumbsWrapper.height()) {
        $('.thumb_navigation .button_down').addClass('disabled');
      } else {
        $('.thumb_navigation .button_down').removeClass('disabled');
      }
      if (totalSlides <= 5) {
        $('.thumb_navigation .button_down, .thumb_navigation .button_up').addClass('disabled');
      } else {
        thumbsWrapper.css('margin-top', marginTop + 'px');
      }
    };
    return this.initialize();
  };
})(jQuery);

/**** meme_generator.js ****/
var curMemeImage;
var maxMemeTextSize = 90;
var minMemeTextSize = 30;
$(function () {
  $('#memeThumbs a').removeClass('notactive');
  $('#memeThumbs a').click(function (event) {
    $(this).addClass('active').siblings().removeClass('active');
    curMemeImage = $(this).attr('href');
    $("#memeImage").attr("xlink:href", curMemeImage);
    event.preventDefault();
  });
  $('#memeBuild').click(function () {
    $('#memeLoader').show();
    $('#memeFinalImage').hide();
    $('#memeError').hide();
    var postReq = {
      'id': $('#memeId').val(),
      'img': curMemeImage,
      'topText': $('#topText').text(),
      'topTextSize': parseInt($('#topText').css('font-size')),
      'bottomText': $('#bottomText').text(),
      'bottomTextSize': parseInt($('#bottomText').css('font-size')),
      'imgScaledHeight': $('svg.svgImage').height()
    };
    console.log(postReq);
    $.post('/labs/meme-image', postReq).done(function (data) {
      $('#memeLoader').hide();
      if (data.length < 10) {
        $('#memeError').show();
        return;
      }
      $('#memeFinalImage').show();
      $('#memeFinalImage img').attr('src', 'data:image/jpg;base64, ' + data);
      $('#memeFinalImage a.memelink').attr('href', 'data:image/jpg;base64, ' + data);
    });
  });
  $('.plus, .minus').click(function () {
    var sign = $(this).hasClass('plus') ? 1 : -1,
      e = $(this).parent().attr('id'),
      t = parseInt($('#topText').css('font-size')),
      o = parseInt($('#bottomText').css('font-size'));
    switch (e) {
      case 'topSizing':
        if (t > minMemeTextSize && sign < 0 || t < maxMemeTextSize && sign > 0) $('#topText').css('font-size', t + sign * 10);
        break;
      case 'bottomSizing':
        if (o > minMemeTextSize && sign < 0 || o < maxMemeTextSize && sign > 0) $('#bottomText').css('font-size', o + sign * 10);
        break;
      default:
    }
  });
  $('#topText, #bottomText').on('click', function () {
    console.log('text focused');
    if ($(this).text().toLowerCase() == 'enter some text') {
      $(this).text('');
    }
  });
  $('#topText, #bottomText').on('blur', function () {
    console.log('text blurred');
    if ($(this).text().toLowerCase() == '') {
      $(this).text('enter some text');
    }
  });
  $('#memeThumbs a:first-child').trigger('click');
});

/**** fight_odds.js ****/
function requestOdds() {
  if ($('table#odds').length == 0) {
    return;
  }
  $('#betsLoader').hide();
  $('#betsError').css('display', 'block');
  return;
  var odds_provider = gn_country == 'AU' ? 'unibet' : 'bookmaker';
  var odds_type = $('table#odds').data('odds-type');
  if (new Date().getFullYear() > 2018) {
    odds_provider = 'unibet';
  }
  console.log('requestOdds for ' + gn_country + ', provider: ' + odds_provider);
  $.getJSON('/fight-odds?provider=' + odds_provider + '&type=' + odds_type + '&json=true', function (data) {
    $('#betsLoader').hide();
    if (data.provider == 'unibet') {
      parse_unibet_odds(data);
    } else if (data.provider == 'bookmaker') {
      parse_bookmaker_odds(data);
    } else {
      $('#betsError').css('display', 'block');
    }
  }).error(function () {
    $('#betsLoader').hide();
    $('#betsError').css('display', 'block');
  });
}
function parse_unibet_odds(jsdata) {
  var tableObj = $('table#odds');
  tableObj.addClass('unibet');
  $.each(jsdata.data, function (i, event) {
    tableObj.append('<tr class="head"><td colspan="2">    <div><a href="https://www.unibet.com.au/betting#event/' + event.id + '" target="_blank" class="betnow">Bet Now</a>' + event.group + ': ' + event.name + '</div>    <div>' + event.date + '</div>    </td>   </tr>');
    tableObj.append('<tr class="subhead"><td>' + (jsdata.type == 'outrights' ? (!!!event.participant ? '' : event.participant + ' - ') + event.criterion : 'Participant') + '</td><td class="r">Odds</td></tr>');
    $.each(event.outcomes, function (j, outcome) {
      tableObj.append('<tr><td>' + outcome.label + '</td><td class="r">' + outcome.odds + '</td></tr>');
    });
    tableObj.append('<tr><td collspan="2"><img src="' + jsdata.cdnurl + '/img/unibet.svg" alt="Unibet" />&nbsp;</td></tr>');
  });
  $('.oddsprovided').addClass('unibet').html('Odds provided by<br /><span>Unibet.com.au</span>').attr('href', 'https://www.unibet.com.au/');
  $('.info.odds').html('<a href="/fight-odds">&#x25ba; Live &amp; Upcoming</a><a href="/fight-odds/outrights">&#x25ba; Outrights</a>');
  $('.info.odds a:eq(' + (jsdata.type == 'outrights' ? 1 : 0) + ')').addClass('active');
}
function parse_bookmaker_odds(jsdata) {
  var tableObj = $('table#odds');
  tableObj.addClass('bookmaker');
  $.each(jsdata.data, function (i, event) {
    if (event.odds.away) {
      tableObj.append('<tr class="head"><td colspan="3">     <div><a href="https://www.bookmaker.eu/?affid=book5101" target="_blank" class="betnow">Bet Now</a>' + event.name + '</div>     <div>' + event.date + '</div>     </td>    </tr>');
      var over = '/';
      var under = '/';
      if (event.odds.overPrice) {
        over = event.odds.overPrice;
        if (event.odds.points) {
          over = 'o' + event.odds.points + over;
        }
      }
      if (event.odds.underPrice) {
        under = event.odds.underPrice;
        if (event.odds.points) {
          under = 'u' + event.odds.points + under;
        }
      }
      tableObj.append('<tr class="subhead"><td>Participant</td><td class="r">Total</td><td class="r">Odds</td></tr>');
      tableObj.append('<tr><td>' + event.away + '</td><td class="r">' + over + '</td><td class="r">' + event.odds.away + '</td></tr>');
      tableObj.append('<tr><td>' + event.home + '</td><td class="r">' + under + '</td><td class="r">' + event.odds.home + '</td></tr>');
      tableObj.append('<tr><td collspan="3"><img src="' + jsdata.cdnurl + '/img/bookmaker.png" alt="Bookmaker" />&nbsp;</td></tr>');
    }
  });
  $('.oddsprovided').addClass('bookmaker').html('Odds provided by<br /><span>Bookmaker.eu</span>').attr('href', 'https://www.bookmaker.eu/?affid=book5101');
  $('.info.odds').html('<a href="/fight-odds" class="active">&#x25ba; Live Lines</a>');
}
Promise.all(jsExtensionsChecked.concat(localDataChecked)).then(res => {
  console.log('Tracking data: ', {
    globalVars: globalVarsChecked,
    pageEvents: pageEvents,
    extensions: res.filter(x => x.detected !== undefined),
    localStorageData: res.filter(x => x.value !== undefined)
  });
});