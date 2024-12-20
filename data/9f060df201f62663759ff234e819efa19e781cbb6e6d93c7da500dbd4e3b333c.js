window.xlog = function (log) {
  var c = window.console || {
    log: function () {
      return;
    }
  };
  if (c.log) c.log(log);
};
$(function () {
  var oldurl = $('#Poweredby').find('a').attr('href');
  var taobaoUrl = "https://s.click.taobao.com/t?e=m%3D2%26s%3DJvDoTxVU%2FaIcQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAjWRN9Qgu1TChTHH3SLdpkB%2B%2BZdddB%2Fw0OU2ypSedH3JmivXcocEXpwHe3wpMV0Nd1eCyZVRWUMRiYWStHE%2B0ceFSvfO0N66nzO5MaXTjVACyw%2Bb0Sl2aPhWYetMiZZgV1Jkp%2BJs%2BBdiHCfeuY4QgTDGDF1NzTQoPw%3D%3D";
  var oldTaobaoUrl = 'https://ac.aliyun.com/application/webdesign?source=5176.11533457&userCode=4kxgpnsp';
  var newUrl = 'https://wanwang.aliyun.com/webdesign/webdesign?source=5176.11533457&userCode=i7rzleoi';
  if ($('#Poweredby')) {
    if (oldurl && (oldurl == 'http://www.clouddream.net/' || oldurl == 'https://www.aliyun.com/product/ecs' || oldurl == 'https://ac.aliyun.com/application/webdesign?source=5176.11533457&userCode=yg0w1bfe&type=copy' || oldurl == taobaoUrl || oldurl == oldTaobaoUrl)) {
      $('#Poweredby').find('a').attr('href', newUrl);
    }
  }
  if ($(".powerby-area")) {
    var length = $(".powerby-area a").length;
    if (length === 0) {
      $(".powerby-area").css("cursor", "pointer");
      $(".powerby-area").click(function () {
        window.open(newUrl);
      });
    } else {
      var powerOldUrl = $('.powerby-area.bottom-words').find('a');
      if (powerOldUrl && (powerOldUrl == 'http://www.clouddream.net/' || powerOldUrl == 'https://www.aliyun.com/product/ecs' || oldurl == 'https://ac.aliyun.com/application/webdesign?source=5176.11533457&userCode=yg0w1bfe&type=copy' || powerOldUrl == taobaoUrl || powerOldUrl == oldTaobaoUrl)) {
        $('.powerby-area.bottom-words').find('a').attr('href', newUrl);
      }
    }
  }
  var $img = $('#xPowered img');
  if ($img) {
    $img.parent().attr('href', newUrl);
  }
  var $alipowerby = $('.ali-area.bottom-words');
  if ($alipowerby && $alipowerby.find('a').attr('href') !== '#') {
    $('.ali-area.bottom-words').find('a').attr('href', newUrl);
  }
});
"object" != typeof JSON && (JSON = {}), function () {
  "use strict";

  function f(a) {
    return 10 > a ? "0" + a : a;
  }
  function this_value() {
    return this.valueOf();
  }
  function quote(a) {
    return rx_escapable.lastIndex = 0, rx_escapable.test(a) ? '"' + a.replace(rx_escapable, function (a) {
      var b = meta[a];
      return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + a + '"';
  }
  function str(a, b) {
    var c,
      d,
      e,
      f,
      h,
      g = gap,
      i = b[a];
    switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
      case "string":
        return quote(i);
      case "number":
        return isFinite(i) ? String(i) : "null";
      case "boolean":
      case "null":
        return String(i);
      case "object":
        if (!i) return "null";
        if (gap += indent, h = [], "[object Array]" === Object.prototype.toString.apply(i)) {
          for (f = i.length, c = 0; f > c; c += 1) h[c] = str(c, i) || "null";
          return e = 0 === h.length ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e;
        }
        if (rep && "object" == typeof rep) for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));else for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
        return e = 0 === h.length ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e;
    }
  }
  var gap,
    indent,
    meta,
    rep,
    rx_one = /^[\],:{}\s]*$/,
    rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
    rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    rx_four = /(?:^|:|,)(?:\s*\[)+/g,
    rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
  }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  }, JSON.stringify = function (a, b, c) {
    var d;
    if (gap = "", indent = "", "number" == typeof c) for (d = 0; c > d; d += 1) indent += " ";else "string" == typeof c && (indent = c);
    if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
    return str("", {
      "": a
    });
  }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
    function walk(a, b) {
      var c,
        d,
        e = a[b];
      if (e && "object" == typeof e) for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
      return reviver.call(a, b, e);
    }
    var j;
    if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
      "": j
    }, "") : j;
    throw new SyntaxError("JSON.parse");
  });
}();
+function ($, window) {
  $.fn.fullScreen = function (cb) {
    var dw = $(document).width();
    var ww = $(window).width();
    return this.each(function () {
      var $this = $(this);
      var width = $this.parent().width();
      var w = Math.max(ww, dw);
      var left = 0;
      if (w > width) {
        left = parseInt((w - width) * 10 / 2) / 10;
      }
      $this.css({
        'left': -left
      });
      $this.css({
        'width': w
      });
      if (typeof cb == "function") {
        cb($this);
      }
    });
  };
  $.fn.navfullScreen = function (cb) {
    var dw = $(document).width();
    var ww = $(window).width();
    return this.each(function () {
      var $this = $(this);
      var width = $this.parent().width();
      var w = Math.max(ww, dw);
      $this.css({
        'width': w
      });
      $this.parent().css('width', '').css("left", '');
      $this.parent().parent().parent().css({
        'width': w
      });
      if (typeof cb == "function") {
        cb($this);
      }
      var $logo = $this.find(".logo-area");
      var $nav = $this.find(".nav-area");
      function BlaBlaBlaTimeoutFunc() {
        var logoWidth = parseInt($logo.attr("data-width")) * w / 100;
        var navWidth = parseInt($nav.attr("data-width")) * w / 100;
        $logo.css("width", logoWidth + "px");
        $nav.css("width", navWidth + "px");
      }
      if (typeof LayoutConverter !== "undefined") {
        BlaBlaBlaTimeoutFunc();
      } else {
        setTimeout(BlaBlaBlaTimeoutFunc, 20);
      }
    });
  };
  $.fn.altasfullScreen = function (cb) {
    var dh = $(document).height();
    var wh = $(window).height();
    var ww = $(window).width();
    return this.each(function () {
      var $this = $(this);
      var leftWidth = $this.offset().left;
      $this.css({
        'left': -leftWidth,
        'width': ww
      });
    });
  };
  //裁剪填充
  //needmf 是否需要maginleft值（偏移量）
  $.fn.cutFillAuto = function () {
    if (typeof LayoutConverter !== "undefined") {
      return;
    }
    var imgWidth, imgHeight, needmf, cb;
    return this.cutFill(imgWidth, imgHeight, needmf, cb, true);
  };
  $.fn.cutFill = function (imgWidth, imgHeight, needmf, cb, isAuto) {
    var widthCopy = imgWidth;
    var heightCopy = imgHeight;
    var cutFillFuc = function (e, width, height, needmf) {
      if (e.attr("src") != "") {
        if (typeof widthCopy === "undefined") {
          width = e.width();
        }
        if (typeof heightCopy === "undefined") {
          height = e.height();
        }
        _cutFillInit(e, width, height, needmf);
      }
    };
    this.each(function () {
      var $this = $(this);
      //仅对不需要裁剪的图片进行处理， 目前拉升和等比在标签切换中没影响 故不做区分
      var needCut = $this.hasClass("NoCutFill");
      if (needCut) {
        return true;
      }
      if (isAuto) {
        if ($this.attr("init") != "ok") {
          return true;
        }
        if ($this.attr("autoFill") != "ok") {
          return true;
        }
      }
      var isReset = false;
      if (typeof widthCopy === "undefined" && typeof heightCopy === "undefined") {
        if ($this.attr("autoFill") == "ok") {
          $this.css("width", "").css("height", "").css("margin-left", "").css("margin-top", "");
          isReset = true;
        } else {
          if (!isAuto) {
            $this.attr("autoFill", "ok");
          }
        }
      }
      if (!isAuto) {
        $this.attr("init", "ok");
      }
      if ($this[0].complete) {
        if (isReset) {
          var timeoutId = parseInt($this.attr("timeoutId"));
          if (timeoutId > 0) {
            clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(function () {
            cutFillFuc($this, imgWidth, imgHeight, needmf);
          }, 100);
          $this.attr("timeoutId", timeoutId);
        } else {
          cutFillFuc($this, imgWidth, imgHeight, needmf);
        }
      } else {
        $this.on("load", function () {
          cutFillFuc($this, imgWidth, imgHeight, needmf);
        });
      }
      if (typeof cb == "function") {
        cb($this);
      }
    });
    return this;
  };
  _cutFillInit = function (img, imgWidth, imgHeight, needmf) {
    var $this = $(img);
    var width = parseInt(imgWidth);
    var height = parseInt(imgHeight);
    var realWidth = $this[0].naturalWidth;
    var realHeight = $this[0].naturalHeight;
    var halfIntWidth = width / 2;
    var halfIntHeight = height / 2;
    var vs = realWidth / realHeight;

    //缩略图比例240:160(等于1.5)
    if (vs >= 1.5) {
      //横图则固定高度
      if (width > height * vs) {
        $this.css("width", width + "px").css("height", "auto").css("marginTop", halfIntHeight - halfIntWidth * parseInt(realHeight) / parseInt(realWidth) + "px");
      } else {
        if (needmf || typeof needmf == "undefined") {
          $this.css("width", "auto").css("height", height + "px").css("marginLeft", halfIntWidth - halfIntHeight * parseInt(realWidth) / parseInt(realHeight) + "px");
        } else {
          $this.css("width", "auto").css("height", height + "px");
        }
      }
    } else {
      //
      if (height > width / vs) {
        $this.css("width", "auto").css("height", height + "px").css("marginLeft", halfIntWidth - halfIntHeight * parseInt(realWidth) / parseInt(realHeight) + "px");
      } else {
        $this.css("width", width + "px").css("height", "auto").css("marginTop", halfIntHeight - halfIntWidth * parseInt(realHeight) / parseInt(realWidth) + "px");
      }
    }
  };
  $.fn.FixFill = function (maxWidth, maxHeight, redirect, imgEle) {
    var w, h;
    if (imgEle) {
      w = imgEle.naturalWidth;
      h = imgEle.naturalHeight;
    } else {
      var img = new Image();
      img.loading = "lazy";
      img.src = this.attr('src');
      w = img.width;
      h = img.height;
    }
    var dst = {};
    if (redirect == "x") {
      dst.width = maxWidth;
      dst.height = parseInt(maxWidth * h / w, 10);
    } else if (redirect == "y") {
      dst.height = maxHeight;
      dst.width = parseInt(maxHeight * w / h, 10);
    } else {
      if (w > h) {
        dst.width = maxWidth;
        dst.height = parseInt(maxWidth * h / w, 10);
      } else {
        dst.height = maxHeight;
        dst.width = parseInt(maxHeight * w / h, 10);
      }
    }
    return dst;
  };
  $.fn.disableDrag = function () {
    $(this).draggable("option", "disabled", true);
  };
  $.fn.enableDrag = function () {
    $(this).draggable("option", "disabled", false);
  };
  $.fn.disableResize = function () {
    $(this).resizable("option", "disabled", true);
  };
  $.fn.enableResize = function () {
    $(this).resizable("option", "disabled", false);
  };
}(jQuery, window) + function ($) {
  var wzArticleCrumbs;
  wzArticleCrumbs = function () {
    this.options = {
      controlId: '',
      languageId: 2,
      isHideTitle: false
    };
    this.init = function (opt) {
      $.extend(this.options, opt || {});
      if (this.options.isHideTitle) {
        var notSkipCtrlType = ["newsItemCrumbsBind", "productCrumbsBind"];
        if (notSkipCtrlType.indexOf($("#" + this.options.controlId).attr("ctype")) != -1) return false;
      }
      var origin = window.location.origin;
      if (!origin) {
        origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
      }
      var referrer = document.referrer;
      if (referrer != undefined && referrer != "" && referrer.indexOf(origin) > -1) {
        var pathName = referrer.substring(origin.length, referrer.length).toLowerCase();
        var originPathName = referrer.substring(origin.length, referrer.length).toLowerCase();
        if (pathName.indexOf("/") === 0) {
          pathName = pathName.substring(1, pathName.length);
        }
        if (pathName.indexOf("?") > -1) {
          pathName = pathName.substring(0, pathName.indexOf("?"));
        }
        var reg = RegExp(/^\w*[a-zA-Z]+\w*$/);
        var hisHeight = $('#' + this.options.controlId + ' .w-crumbs').height();
        var homeItemTitle = $('#' + this.options.controlId + ' .w-crumbs-item:first').text();
        if (reg.test(pathName)) {
          var key = pathName + "_" + this.options.languageId;
          var value = sessionStorage.getItem(key);
          if (value != null && value != homeItemTitle) {
            var html = "";
            var splitIcon = $("#" + this.options.controlId + " .w-crumbs i:first");
            if (splitIcon.length > 0) {
              html += '&nbsp;<i class="' + $(splitIcon).attr("class").replace("f-hide", "") + '">' + $(splitIcon).html() + '</i>';
            }
            html += '&nbsp;<a href="' + originPathName + '" class="w-crumbs-item">' + value + '</a>';
            if (!this.options.isHideTitle) {
              $("#" + this.options.controlId + " a.w-crumbs-item:first").after(html);
              this.smrecompute(hisHeight);
            }
            $("#" + this.options.controlId + " a.w-crumbs-item").eq(this.options.isHideTitle ? 1 : 2).attr('href', originPathName);
          }
        }
      }
    };
    this.smrecompute = function (hisH) {
      var tabContentHeight = $('#' + this.options.controlId + ' .w-crumbs').height();
      $('#' + this.options.controlId).smrecompute("recomputeTo", [tabContentHeight, hisH]);
    };
  };
  $.fn.smartNPCrumbsControl = function (opt) {
    if (wzArticleCrumbs[opt]) {
      return wzArticleCrumbs[opt].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof opt === 'object' || !opt) {
      return new wzArticleCrumbs().init(opt);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.wzArticleCrumbsControl');
    }
  };
}(jQuery);
+function ($) {
  var wzQuantity;
  wzQuantity = function () {
    this.options = {
      controlId: '',
      quantity: 'w-num-input',
      minus: 'w-num-minus',
      plus: 'w-num-plus'
    };
    this.init = function (opt) {
      $.extend(this.options, opt || {});
      this._quantityElement = $("#" + this.options.controlId + " ." + this.options.quantity);
      this._minusElement = $("#" + this.options.controlId + " ." + this.options.minus);
      this._plusElement = $("#" + this.options.controlId + " ." + this.options.plus);
      this._bindEvent();
    };
    this._formatQuantity = function (quantity) {
      var currentQuantity = parseInt(quantity);
      if (isNaN(currentQuantity) || currentQuantity < 1) {
        currentQuantity = 1;
      }
      if (currentQuantity > 9999) {
        currentQuantity = 9999;
      }
      this._quantityElement.val(currentQuantity);
      if (currentQuantity == 1) {
        $(this._minusElement).addClass("w-num-disabled");
        $(this._minusElement).addClass("mw-num-disabled");
      } else if (currentQuantity > 1) {
        $(this._minusElement).removeClass("w-num-disabled");
        $(this._minusElement).removeClass("mw-num-disabled");
      }
    };
    this._bindEvent = function () {
      var self = this;
      $(self._minusElement).bind("click", function (event) {
        var currentQuantity = self._quantityElement.val();
        currentQuantity = parseInt(currentQuantity) - 1;
        self._formatQuantity(currentQuantity);
        self._stopPropagation(event)._preventDefault(event);
      });
      $(self._plusElement).bind("click", function (event) {
        var currentQuantity = self._quantityElement.val();
        currentQuantity = parseInt(currentQuantity) + 1;
        self._formatQuantity(currentQuantity);
        self._stopPropagation(event)._preventDefault(event);
      });
      $(self._quantityElement).bind("keypress", function (event) {
        var evt = evt || event;
        currKey = evt.keyCode || evt.which || evt.charCode;
        if (currKey >= 48 && currKey <= 57 || currKey == 8) {} else {
          return false;
        }
      });
      $(self._quantityElement).bind("blur", function (event) {
        var currentQuantity = self._quantityElement.val().replace(/\D/g, '');
        self._formatQuantity(currentQuantity);
      });
      $(self._quantityElement).bind("afterpaste", function (event) {
        var currentQuantity = self._quantityElement.val().replace(/\D/g, '');
        self._formatQuantity(currentQuantity);
        self._stopPropagation(event)._preventDefault(event);
      });
    };
    this._stopPropagation = function (e) {
      if (e && e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
      return this;
    };
    this._preventDefault = function (e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      return this;
    };
  };
  $.fn.wzQuantitySmartControl = function (opt) {
    if (wzQuantity[opt]) {
      return wzQuantity[opt].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof opt === 'object' || !opt) {
      return new wzQuantity().init(opt);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.wzQuantitySmartControl');
    }
  };
}(jQuery);
+function ($) {
  var wzComment;
  wzComment = function () {
    var that = this;
    this.options = {
      controlId: '',
      entityId: 1,
      entityType: 1,
      pageIndex: 1,
      pageSize: 1,
      totalPageCount: 1,
      totalCount: 0,
      replyText: "回复",
      changeCaptchaText: "换一张",
      summitText: "发表",
      isShowAvatar: true,
      isShowReplyIcon: true,
      replyIcon: "&#xa096;",
      isMustLogin: true,
      isLogin: false,
      pagerStyle: "Style1_Item0",
      isShowPager: true,
      eventSource: undefined,
      isPosting: false,
      postType: "comment",
      commentTextEmpty: "请输入评论内容",
      commentTextMaxLength: "评论内容最长支付400个字符",
      replyTextEmpty: "请输入回复内容",
      replyTextMaxLength: "回复内容最长支付400个字符",
      captchaEmpty: "请输入验证码",
      captchaError: "验证码错误",
      error: "提交的数据有错误",
      pageNumberError: "请输入正确有页码",
      postCommentSucess: "提交评论成功",
      postCommentFail: "提交评论失败",
      postReplySucess: "回复评论成功",
      postReplyFail: "回复评论失败",
      adminUserName: "管理员",
      anonymousUserName: "匿名用户",
      isHiddenFullName: false
    };
    this.init = function (opt) {
      $.extend(this.options, opt || {});
      var entityId = $("#pageinfo").attr("data-entityid");
      var entityType = $("#pageinfo").attr("data-type");
      if (typeof entityId !== 'undefined') {
        this.options.entityId = parseInt(entityId);
      }
      if (typeof entityType !== 'undefined') {
        this.options.entityType = parseInt(entityType);
      }
      this.loadCommentInfo();
    };
    this.refreshCommentCaptcha = function (targetImg, index) {
      this.options["Timestamp" + index] = Math.random();
      $(targetImg).attr("src", "/Common/GenerateCommentCaptcha?timestamp=" + this.options["Timestamp" + index]);
    };
    this.loadCommentInfo = function () {
      $("#" + this.options.controlId + " .w_pager").hide();
      var self = this;
      $.ajax({
        url: '/Common/GetCommentInfo',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: {
          entityId: self.options.entityId,
          entityType: self.options.entityType,
          isHiddenFullName: self.options.isHiddenFullName
        },
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          if (result.IsAllowComments) {
            var $UserInfo = $("#" + self.options.controlId + " .w-comment-loginInfo");
            var $CommentCaptcha = $("#" + self.options.controlId + " .w-comment-code");
            if (result.IsLogin) {
              $UserInfo.find("img").attr("src", result.Avatar);
              $UserInfo.find(".name").text(result.UserName);
              $UserInfo.parents(".w-comment-top").addClass("w-contleft");
              $UserInfo.show();
              $CommentCaptcha.hide();
              self.options.isLogin = true;
            } else {
              self.options.isLogin = false;
              $UserInfo.hide();
              $CommentCaptcha.show();
            }
            $("#" + self.options.controlId).find(".w-comment").show();
            self.initCommentHeight();
            self.bindEvent();
            self.loadCommentList();
            //加载评论验证码
            self.refreshCommentCaptcha($("#" + self.options.controlId + " .w-comment-top img.validCodeImg"), 0);
          } else {
            $("#" + self.options.controlId).remove();
          }
        }
      });
    };
    this.ajaxLogout = function () {
      var self = this;
      $.ajax({
        url: '/Customer/AjaxLogout',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: {},
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          if (result.IsSuccess) {
            $.get("/customer/GenerateNewCSRFToken", {}, function (token) {
              $('input[name="__RequestVerificationToken"]').val(token.token);
              var $UserInfo = $("#" + self.options.controlId + " .w-comment-loginInfo");
              var $CommentCaptcha = $("#" + self.options.controlId + " .w-comment-code");
              $UserInfo.parents(".w-comment-top").removeClass("w-contleft");
              $UserInfo.hide();
              $CommentCaptcha.show();
            }, "json");
          }
        }
      });
    };
    this.loadCommentList = function (goToComemnt) {
      var self = this;
      var data = {};
      data.entityId = self.options.entityId;
      data.entityType = self.options.entityType;
      data.pageIndex = self.options.pageIndex;
      data.pageSize = self.options.pageSize;
      data.isHiddenFullName = self.options.isHiddenFullName;
      $.ajax({
        url: '/Comment/LoadCommentList',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: data,
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          if (result.IsSuccess) {
            var hisH = $("#" + self.options.controlId + ' .w-comment').height();
            $("#" + self.options.controlId + " .w-comment-bottom .w-comment-num .text").text(result.total);
            var html = "";
            var list = result.rows;
            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              if (item.CommentUserName == "Comment.UserName.Admin") {
                item.CommentUserName = self.options.adminUserName;
              }
              if (item.CommentUserName == "Comment.UserName.Anonymous") {
                item.CommentUserName = self.options.anonymousUserName;
              }
              html += '<div class="w-comment-list-item" commentId=' + item.Id + '>';
              html += '    <div class="w-comment-list-user" style="' + (self.options.isShowAvatar ? '' : 'display:none') + '">';
              html += '       <img alt="" src="' + item.CommentUserAvatar + '">';
              html += '       </div>';
              html += '       <div class="w-comment-list-con">';
              html += '           <div class="w-comment-list-time"><span class="w-fl">' + item.CommentUserName + '</span> <span class="w-fr">' + item.CreateDatetime + '</span></div>';
              html += '           <div class="w-comment-list-des' + (item.CommentUserIsAdmin ? ' w-comment-list-des-admin' : '') + '" style="white-space: pre-line;">' + item.CommentText + '</div>';
              if (item.Reply != undefined && item.Reply != null && item.Reply.length > 0) {
                for (var j = 0; j < item.Reply.length; j++) {
                  var reply = item.Reply[j];
                  if (reply.CommentUserName == "Comment.UserName.Admin") {
                    reply.CommentUserName = self.options.adminUserName;
                  }
                  if (reply.CommentUserName == "Comment.UserName.Anonymous") {
                    reply.CommentUserName = self.options.anonymousUserName;
                  }
                  html += ' <div class="w-comment-talk">';
                  html += '    <div class="w-comment-talk-item">';
                  html += '        <div class="w-comment-talk-name w-fl">' + reply.CommentUserName + '：</div>';
                  html += '        <div class="w-comment-talk-info"  style="white-space: pre-line;">' + '\n' + reply.CommentText + '</div>';
                  html += '    </div>';
                  html += ' </div>';
                }
              }
              html += '           <div class="w-comment-list-reply f-clearfix"><a href="javascript:void(0)" class="toggleReply"><i class="mw-iconfont" style="' + (self.options.isShowReplyIcon ? '' : 'display:none') + '">' + self.options.replyIcon + '</i> ' + self.options.replyText + '</a></div>';
              html += '           <div class="w-comment-list-reply-cont" style="display:none">';
              html += '               <div class="w-comment-cont"><textarea name="replyText" rows="10" maxlength="400" placeholder="' + self.options.replyText + ' ' + item.CommentUserName + '："></textarea> <span class="words"><span>0</span>/400</span></div>';
              html += '               <div class="w-comment-operate clearfix">';
              html += '                   <div class="w-comment-code">';
              html += '                       <input type="text" class="w-comment-code-input">';
              html += '                           <a class="change-another-one" href="javascript:void(0)" title="' + self.options.changeCaptchaText + '"><img class="validCodeImg" src="https://nwzimg.wezhan.cn/Content/images/code.png" height="26"></a>';
              html += '                   </div>';
              html += '                   <div class="w-comment-button"><a href="javascript:void(0)">' + self.options.summitText + '</a></div>';
              html += '                       </div>';
              html += '                   </div>';
              html += '               </div>';
              html += '           </div>';
            }
            $("#" + self.options.controlId + " .w-comment-bottom .w-comment-list").html(html);
            self.options.totalPageCount = result.pageTotal;
            self.options.totalCount = result.total;
            self.showPager();
            self.smrecompute(hisH);
            if (goToComemnt) {
              self.goToComemntTextbox();
            }
          }
        }
      });
    };
    this.bindEvent = function () {
      var self = this;
      $("#" + this.options.controlId + " .w-comment-top img.validCodeImg").on("click", function () {
        self.refreshCommentCaptcha(this, 0);
      });

      //切换回复评论窗口显示
      $("#" + this.options.controlId + " .w-comment-bottom .w-comment-list").on("click", "a.toggleReply", function () {
        var hisH = $('#' + self.options.controlId + ' .w-comment').height();
        if ($(this).parent().next().is(':hidden')) {
          if (!self.options.isLogin) {
            var codeImg = $(this).parent().next().find("img");
            if (codeImg.attr("src").toLowerCase() == "https://nwzimg.wezhan.cn/Content/images/code.png") {
              var index = $("#" + self.options.controlId + " .w-comment-bottom .w-comment-list img.validCodeImg").index(codeImg);
              index = index + 1;
              self.refreshCommentCaptcha(codeImg, index);
            }
          } else {
            $(this).parent().next().find(".w-comment-code").hide();
          }
          $(this).parent().addClass("open");
          $(this).parent().next().show();
        } else {
          $(this).parent().removeClass("open");
          $(this).parent().next().hide();
        }
        self.smrecompute(hisH);
      });

      //刷新评论列表的验证码
      $("#" + this.options.controlId + " .w-comment-bottom .w-comment-list").on("click", "img.validCodeImg", function () {
        var index = $("#" + self.options.controlId + " .w-comment-bottom .w-comment-list img.validCodeImg").index(this);
        index = index + 1;
        self.refreshCommentCaptcha($(this), index);
      });

      //提交评论
      $("#" + this.options.controlId + "").on("click", ".w-comment-button a", function () {
        if (self.options.isPosting) {
          return false;
        }
        if (self.options.isMustLogin) {
          self.getCurrentUser();
          if (!self.options.isLogin) {
            self.ajaxLogin();
            return;
          }
        }
        if ($(this).parents(".w-comment-list-reply-cont").length > 0) {
          self.options.eventSource = this;
          self.options.postType = "reply";
          self.submitReply();
        } else {
          self.options.eventSource = this;
          self.options.postType = "comment";
          self.submitComment();
        }
      });

      //注销
      $("#" + this.options.controlId + " .w-comment-top .w-comment-loginInfo").on("click", "a.quit", function () {
        self.ajaxLogout();
      });

      //文本统计事件
      $("#" + this.options.controlId + "").on("keyup", "textarea", function () {
        var length = $(this).val().length;
        $(this).next().find("span").text(length);
      });

      //文本框点击事件
      $("#" + this.options.controlId).on("click", "textarea", function () {
        if (self.options.isMustLogin) {
          self.getCurrentUser();
          if (!self.options.isLogin) {
            self.ajaxLogin();
          }
        }
      });
    };
    this.submitComment = function () {
      var data = this.serializePostData();
      var index = 0;
      data.Timestamp = this.options["Timestamp" + index];
      var checkFlag = this.checkPostData(data);
      if (checkFlag) {
        data.CommentText = escape(data.CommentText);
        this.postComment(data);
      }
    };
    this.submitReply = function () {
      var data = this.serializePostData();
      var validCodeImg = $(this.options.eventSource).parent().prev().find(".validCodeImg");
      var index = $("#" + this.options.controlId + " .w-comment-bottom .w-comment-list img.validCodeImg").index(validCodeImg);
      index = index + 1;
      data.Timestamp = this.options["Timestamp" + index];
      data.AtCommentId = $(this.options.eventSource).parents(".w-comment-list-item").attr("commentid");
      var checkFlag = this.checkPostData(data);
      if (checkFlag) {
        data.CommentText = escape(data.CommentText);
        this.postComment(data);
      }
    };
    this.checkPostData = function (data) {
      var type = this.options.postType;
      this.clearError();
      if ($.trim(data.CommentText) == "") {
        if (type == "comment") {
          this.showError(this.getCurrentCommentElement(), this.options.commentTextEmpty);
        } else {
          this.showError(this.getCurrentCommentElement(), this.options.replyTextEmpty);
        }
        return false;
      } else {
        if (data.CommentText.length > 400) {
          if (type == "comment") {
            this.showError(this.getCurrentCommentElement(), this.options.commentTextMaxLength);
          } else {
            this.showError(this.getCurrentCommentElement(), this.options.replyTextMaxLength);
          }
          return false;
        }
      }
      if ($.trim(data.Captcha) == "") {
        if (type == "comment") {
          if (!this.options.isLogin) {
            this.showError(this.getCurrentCaptchaElement(), this.options.captchaEmpty);
            return false;
          }
        } else {
          if (!this.options.isLogin) {
            this.showError(this.getCurrentCaptchaElement(), this.options.captchaEmpty);
            return false;
          }
        }
      }
      return true;
    };
    this.serializePostData = function () {
      var source = this.options.eventSource;
      var data = {};
      data.CommentText = $(source).parent().parent().parent().find("textarea").val();
      data.CommentText = $.trim(data.CommentText);
      data.Captcha = $(source).parent().parent().find(".w-comment-code-input").val();
      data.EntityId = this.options.entityId;
      data.EntityType = this.options.entityType;
      return data;
    };
    this.smrecompute = function (hisH) {
      var tabContentHeight = $('#' + this.options.controlId + ' .w-comment').height();
      $('#' + this.options.controlId).smrecompute("recomputeTo", [tabContentHeight, hisH]);
    };
    this.postComment = function (data) {
      var self = this;
      self.options.isPosting = true;
      $.ajax({
        url: '/Comment/AddComment',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: data,
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          if (result.IsSuccess) {
            if (self.options.postType == "comment") {
              alert(self.options.postCommentSucess);
            } else {
              alert(self.options.postReplySucess);
            }
            $(self.getCurrentCommentElement()).val('');
            $(self.getCurrentCaptchaElement()).val('');
            self.loadCommentList();
          } else {
            if (typeof result.validate != "undefined") {
              if (result.target == "Captcha") {
                self.showError(self.getCurrentCaptchaElement(), result.validate);
              }
              if (result.target == "Comment" || result.target == "Reply") {
                self.showError(self.getCurrentCommentElement(), result.validate);
              }
            }
          }
        },
        complete: function () {
          self.options.isPosting = false;
        }
      });
    };
    this.showPager = function () {
      var pagerStyle = this.options.pagerStyle;
      var htmlId = this.options.controlId; //self.options.totalPageCount
      var pageIndex = this.options.pageIndex;
      var totalPage = this.options.totalPageCount;
      if (this.options.isShowPager && this.options.totalPageCount > 1) {
        var pager = $("#" + htmlId).find(".xn-pager");
        pager.jqPaginator('option', {
          totalCounts: this.options.totalCount,
          onPageChange: this.onPageChange
        });
        $("#" + htmlId + " .xn-pager").show();
      } else {
        $("#" + htmlId + " .xn-pager").hide();
      }
    };
    this.ajaxLogin = function () {
      var self = this;
      $.get("/ebusiness/RenderLoginPartial", {}, function (result) {
        $("body").append(result);
        window["CommentAjaxLoginCallBack"] = function (data) {
          if (data.IsSuccess && data.IsLogin) {
            self.getCurrentUser();
          }
        };
      });
    };
    this.clearError = function () {
      $("#" + this.options.controlId + " .w-haserror").removeClass("w-haserror");
      $("#" + this.options.controlId + " .notifi").remove();
    };
    this.showError = function (target, message) {
      this.clearError();
      $(target).parent().addClass("w-haserror");
      $(target).parent().parent().append('<span class="notifi"><i class="mw-iconfont">끸</i>' + message + '</span>');
      var prev = $(this.options.eventSource).parent().prevAll();
      var left = 0;
      prev.each(function () {
        if ($(this).is(':visible')) {
          left = $(this).width();
        }
      });
      $("#" + this.options.controlId).find(".notifi").css("left", left + "px");
    };
    this.getCurrentCommentElement = function () {
      var source = this.options.eventSource;
      return $(source).parent().parent().parent().find("textarea");
    };
    this.getCurrentCaptchaElement = function () {
      var source = this.options.eventSource;
      return $(source).parent().parent().parent().find(".w-comment-code-input");
    };
    this.getCurrentUser = function () {
      var self = this;
      $.ajax({
        url: '/Common/GetCommentInfo',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: {
          entityId: self.options.entityId,
          entityType: self.options.entityType
        },
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          var $UserInfo = $("#" + self.options.controlId + " .w-comment-top .w-comment-loginInfo");
          var $CommentCaptcha = $("#" + self.options.controlId + " .w-comment-top .w-comment-code");
          if (result.IsLogin) {
            $UserInfo.find("img").attr("src", result.Avatar);
            $UserInfo.find(".name").text(result.UserName);
            $UserInfo.parents(".w-comment-top").addClass("w-contleft");
            $UserInfo.show();
            $CommentCaptcha.hide();
            self.options.isLogin = true;
          } else {
            self.options.isLogin = false;
            $UserInfo.parents(".w-comment-top").removeClass("w-contleft");
            $UserInfo.hide();
            $CommentCaptcha.show();
          }
        }
      });
    };
    this.goToComemntTextbox = function () {
      $("#" + this.options.controlId)[0].scrollIntoView();
    };
    this.initCommentHeight = function () {
      var hisH = $('#' + this.options.controlId).height();
      var tabContentHeight = $('#' + this.options.controlId + ' .w-comment').height();
      $('#' + this.options.controlId).css("min-height", tabContentHeight + "px");
      $('#' + this.options.controlId).attr("hish", tabContentHeight);
      this.smrecompute(hisH);
    };
    this.onPageChange = function (pageIndex, type) {
      if (type == "change") {
        if (pageIndex <= 0 || pageIndex == that.options.pageIndex || pageIndex > that.options.totalPageCount) {
          return;
        }
        that.options.pageIndex = pageIndex;
        that.loadCommentList(true);
      }
    };
  };
  $.fn.smartNPCommentControl = function (opt) {
    if (wzComment[opt]) {
      return wzComment[opt].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof opt === 'object' || !opt) {
      return new wzComment().init(opt);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.smartNPCommentControl');
    }
  };
}(jQuery);
+function ($) {
  var wzLeaveword;
  wzLeaveword = function () {
    this.options = {
      controlId: '',
      controlType: 'Pc',
      style: "Style1",
      $subjectElement: {},
      $messageElement: {},
      $emailElement: {},
      $captchaElement: {},
      $submitElement: {},
      $resetElement: {},
      isPosting: false,
      emptyPrefix: '请输入',
      correctMailPrefix: '请输入正确的',
      contentMaxLength: '不能超过200个字符',
      postSucess: '提交成功',
      postFail: '提交失败',
      correctMailValidate: '请输入正确格式的邮箱！'
    };
    this.init = function (opt) {
      $.extend(this.options, opt || {});
      this.options.$subjectElement = $("#" + this.options.controlId + " input[name='Subject']");
      if ($("#" + this.options.controlId + " textarea[name='Message']").length > 0) {
        this.options.$messageElement = $("#" + this.options.controlId + " textarea[name='Message']");
      } else {
        this.options.$messageElement = $("#" + this.options.controlId + " input[name='Message']");
      }
      this.options.$emailElement = $("#" + this.options.controlId + " input[name='Email']");
      this.options.$captchaElement = $("#" + this.options.controlId + " input[name='Captcha']");
      this.options.$submitElement = $("#" + this.options.controlId + " a[name='Submit']");
      this.options.$resetElement = $("#" + this.options.controlId + " a[name='Reset']");
      if ($("#" + this.options.controlId + " .mw-guestbook").length > 0) {
        this.options.controlType = "Mobile";
      }
      this.options.style = $("#" + this.options.controlId).attr("cstyle");
      $("#" + this.options.controlId + " .w-item-textarea").height($("#" + this.options.controlId + " .w-guestbook-both-left").outerHeight() - 12);
      this.refreshLeavewordCaptcha();
      this.bindEvent();
    };
    this.refreshLeavewordCaptcha = function () {
      this.options["Timestamp"] = Math.random();
      $("#" + this.options.controlId + " img").attr("src", "/Common/GenerateLeavewordCaptcha?timestamp=" + this.options["Timestamp"]);
    };
    this.bindEvent = function () {
      var self = this;
      $("#" + this.options.controlId + " img").on("click", function () {
        self.refreshLeavewordCaptcha();
      });

      //提交
      $("#" + this.options.controlId).on("click", "a[name='Submit']", function () {
        if (self.options.isPosting) {
          return false;
        }
        self.submitLeaveword();
      });

      //重置
      $("#" + this.options.controlId).on("click", "a[name='Reset']", function () {
        self.reset();
      });
    };
    this.submitLeaveword = function () {
      var data = this.serializePostData();
      var checkFlag = this.checkPostData(data);
      if (checkFlag) {
        this.postLeaveword(data);
      }
    };
    this.checkPostData = function (data) {
      this.clearError();
      if ($.trim(data.Subject) == "") {
        this.showError(this.options.$subjectElement, this.options.emptyPrefix + ' ' + this.getElementTitle(this.options.$subjectElement));
        return false;
      } else {
        if (data.Subject.length > 200) {
          this.showError(this.options.$subjectElement, this.getElementTitle(this.options.$subjectElement) + ' ' + this.options.contentMaxLength);
          return false;
        }
      }
      if ($.trim(data.Message) == "") {
        this.showError(this.options.$messageElement, this.options.emptyPrefix + ' ' + this.getElementTitle(this.options.$messageElement));
        return false;
      }
      if ($.trim(data.Email) == "") {
        this.showError(this.options.$emailElement, this.options.emptyPrefix + ' ' + this.getElementTitle(this.options.$emailElement));
        return false;
      }
      //留言控件不在验证邮箱格式
      //else {
      //    if (!$.wezhan.isEmail(data.Email)) {
      //        this.showError(this.options.$emailElement, this.options.correctMailValidate);
      //        return false;
      //    }
      //}

      if ($.trim(data.Captcha) == "") {
        this.showError(this.options.$captchaElement, this.options.emptyPrefix + ' ' + this.getElementTitle(this.options.$captchaElement));
        return false;
      }
      return true;
    };
    this.serializePostData = function () {
      var data = {};
      data.Subject = this.options.$subjectElement.val();
      data.Message = this.options.$messageElement.val();
      data.Email = this.options.$emailElement.val();
      data.Captcha = this.options.$captchaElement.val();
      data.Timestamp = this.options["Timestamp"];
      data.emailPlaceHolder = this.options.$emailElement.attr('placeholder');
      return data;
    };
    this.smrecompute = function () {
      $('#' + this.options.controlId).smrecompute();
    };
    this.decodeHtml = function (html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    };
    this.postLeaveword = function (data) {
      var self = this;
      self.options.isPosting = true;
      data.Subject = escape(data.Subject);
      data.Message = escape(data.Message);
      $.ajax({
        url: '/Leaveword/AppendLeaveword',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: data,
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          if (result.IsSuccess) {
            alert(self.decodeHtml(self.options.postSucess));
            self.reset();
            self.refreshLeavewordCaptcha();
          } else {
            if (result.target != undefined && result.target == "Captcha") {
              self.showError(self.options.$captchaElement, result.validate);
            } else {
              alert(self.decodeHtml(self.options.postFail));
            }
          }
        },
        complete: function () {
          self.options.isPosting = false;
        }
      });
    };
    this.clearError = function () {
      if (this.options.controlType == "Pc") {
        $("#" + this.options.controlId + " .w-verify").addClass("w-hide");
        $("#" + this.options.controlId + " .w-verify-text").text('');
      } else {
        $("#" + this.options.controlId + " .mw-verify").addClass("mw-hide");
        $("#" + this.options.controlId + " .mw-verify-text").text('');
      }
      $("#" + this.options.controlId + " .w-haserror").removeClass("w-haserror");
    };
    this.showError = function (target, message) {
      this.clearError();
      if (this.options.style == "Style6" && $(target).attr("name") == "Message") {
        $(target).parent().parent().addClass("w-haserror");
      } else {
        $(target).parent().addClass("w-haserror");
      }
      if (this.options.controlType == "Pc") {
        $("#" + this.options.controlId + " .w-verify-text").text(message);
        $("#" + this.options.controlId + " .w-verify").removeClass("w-hide");
      } else {
        $("#" + this.options.controlId + " .mw-verify-text").text(message);
        $("#" + this.options.controlId + " .mw-verify").removeClass("mw-hide");
      }
    };
    this.getElementTitle = function (target) {
      var title = "";
      if (this.options.controlType == "Pc") {
        if (this.options.style == "Style1") {
          return target.attr("placeHolder");
        } else if (this.options.style == "Style2") {
          if (target.attr("name") == "Captcha") {
            return target.parent().parent().prev().html();
          } else {
            return target.parent().prev().html();
          }
        } else if (this.options.style == "Style3") {
          return target.parents("td").prev().find("label").html();
        } else if (this.options.style == "Style4" || this.options.style == "Style5" || this.options.style == "Style6") {
          return target.attr("placeHolder");
        }
        //else if (this.options.style == "Style5") {
        //    return target.attr("placeHolder");
        //}
      } else {
        if (this.options.style == "Style1") {
          return target.attr("placeHolder");
        } else if (this.options.style == "Style2") {
          return target.attr("placeHolder");
        }
      }
    };
    this.reset = function () {
      this.clearError();
      this.options.$subjectElement.val('');
      this.options.$messageElement.val('');
      this.options.$emailElement.val('');
      this.options.$captchaElement.val('');
    };
  };
  $.fn.smartNPLeavewordControl = function (opt) {
    if (wzLeaveword[opt]) {
      return wzLeaveword[opt].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof opt === 'object' || !opt) {
      return new wzLeaveword().init(opt);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.smartNPLeavewordControl');
    }
  };
}(jQuery);
+function ($) {
  var wzMobileComment;
  wzMobileComment = function () {
    var that = this;
    this.options = {
      controlId: '',
      entityId: 1,
      entityType: 1,
      pageIndex: 1,
      pageSize: 1,
      totalPageCount: 1,
      totalCount: 0,
      replyText: "回复",
      changeCaptchaText: "换一张",
      summitText: "发表",
      isShowAvatar: true,
      isShowReplyIcon: true,
      replyIcon: "&#xa096;",
      isMustLogin: true,
      isLogin: false,
      pagerStyle: "Style1_Item0",
      isShowPager: true,
      eventSource: undefined,
      isPosting: false,
      postType: "comment",
      commentTextEmpty: "请输入评论内容",
      commentTextMaxLength: "评论内容最长支付400个字符",
      replyTextEmpty: "请输入回复内容",
      replyTextMaxLength: "回复内容最长支付400个字符",
      captchaEmpty: "请输入验证码",
      captchaError: "验证码错误",
      error: "提交的数据有错误",
      pageNumberError: "请输入正确有页码",
      postCommentSucess: "提交评论成功",
      postCommentFail: "提交评论失败",
      postReplySucess: "回复评论成功",
      postReplyFail: "回复评论失败",
      adminUserName: "管理员",
      anonymousUserName: "匿名用户",
      isHiddenFullName: false,
      atCommentId: 0
    };
    this.init = function (opt) {
      $.extend(this.options, opt || {});
      var entityId = $("#pageinfo").attr("data-entityid");
      var entityType = $("#pageinfo").attr("data-type");
      if (typeof entityId !== 'undefined') {
        this.options.entityId = parseInt(entityId);
      }
      if (typeof entityType !== 'undefined') {
        this.options.entityType = parseInt(entityType);
      }
      this.loadCommentInfo();
    };
    this.refreshCommentCaptcha = function (targetImg, index) {
      this.options["Timestamp" + index] = Math.random();
      $(targetImg).attr("src", "/Common/GenerateCommentCaptcha?timestamp=" + this.options["Timestamp" + index]);
    };
    this.loadCommentInfo = function () {
      $("#" + this.options.controlId + " .w_pager").hide();
      var self = this;
      $.ajax({
        url: '/Common/GetCommentInfo',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: {
          entityId: self.options.entityId,
          entityType: self.options.entityType,
          isHiddenFullName: self.options.isHiddenFullName
        },
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          if (result.IsAllowComments) {
            var $UserInfo = $("#" + self.options.controlId + " .mw-comment-dialogue-cont .mw-comment-loginInfo");
            var $CommentCaptcha = $("#" + self.options.controlId + " .mw-comment-dialogue-cont .mw-comment-code");
            if (result.IsLogin) {
              $UserInfo.find("img").attr("src", result.Avatar);
              $UserInfo.find(".name").text(result.UserName);
              $UserInfo.show();
              $CommentCaptcha.hide();
              self.options.isLogin = true;
            } else {
              self.options.isLogin = false;
              $UserInfo.hide();
              $CommentCaptcha.show();
            }
            $("#" + self.options.controlId).find(".mw-comment").show();
            self.initCommentHeight();
            self.bindEvent();
            self.loadCommentList();
            //加载评论验证码
            self.refreshCommentCaptcha($("#" + self.options.controlId + " .mw-comment-dialogue-cont img.validCodeImg"), 0);
          } else {
            $("#" + self.options.controlId).remove();
          }
        }
      });
    };
    this.ajaxLogout = function () {
      var self = this;
      $.ajax({
        url: '/Customer/AjaxLogout',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: {},
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          if (result.IsSuccess) {
            $.get("/customer/GenerateNewCSRFToken", {}, function (token) {
              $('input[name="__RequestVerificationToken"]').val(token.token);
              var $UserInfo = $("#" + self.options.controlId + " .mw-comment-loginInfo");
              var $CommentCaptcha = $("#" + self.options.controlId + " .mw-comment-code");
              //  $UserInfo.parents(".mw-comment-top").removeClass("mw-contleft");
              $UserInfo.hide();
              $CommentCaptcha.show();
            }, "json");
          }
        }
      });
    };
    this.loadCommentList = function (goToComemnt) {
      var self = this;
      var data = {};
      data.entityId = self.options.entityId;
      data.entityType = self.options.entityType;
      data.pageIndex = self.options.pageIndex;
      data.pageSize = self.options.pageSize;
      data.isHiddenFullName = self.options.isHiddenFullName;
      $.ajax({
        url: '/Comment/LoadCommentList',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: data,
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          if (result.IsSuccess) {
            var hisH = $("#" + self.options.controlId + ' .mw-comment').height();
            $("#" + self.options.controlId + " .mw-comment-num .text").text(result.total);
            var html = "";
            var list = result.rows;
            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              if (item.CommentUserName == "Comment.UserName.Admin") {
                item.CommentUserName = self.options.adminUserName;
              }
              if (item.CommentUserName == "Comment.UserName.Anonymous") {
                item.CommentUserName = self.options.anonymousUserName;
              }
              html += '<div class="mw-comment-list-item" commentId=' + item.Id + '>';
              html += '    <div class="mw-comment-list-user" style="' + (self.options.isShowAvatar ? '' : 'display:none') + '">';
              html += '       <img alt="" src="' + item.CommentUserAvatar + '">';
              html += '       </div>';
              html += '       <div class="mw-comment-list-con">';
              html += '           <div class="mw-comment-list-time"><span class="mw-fr">' + item.CreateDatetime + '</span><span class="mw-fl">' + item.CommentUserName + '</span></div>';
              html += '           <div class="mw-comment-list-des' + (item.CommentUserIsAdmin ? ' mw-comment-list-des-admin' : '') + '" style="white-space: pre-line;">' + item.CommentText + '</div>';
              if (item.Reply != undefined && item.Reply != null && item.Reply.length > 0) {
                for (var j = 0; j < item.Reply.length; j++) {
                  var reply = item.Reply[j];
                  if (reply.CommentUserName == "Comment.UserName.Admin") {
                    reply.CommentUserName = self.options.adminUserName;
                  }
                  if (reply.CommentUserName == "Comment.UserName.Anonymous") {
                    reply.CommentUserName = self.options.anonymousUserName;
                  }
                  html += ' <div class="mw-comment-talk">';
                  html += '    <div class="mw-comment-talk-item">';
                  html += '        <div class="mw-comment-talk-name mw-fl">' + reply.CommentUserName + '：</div>';
                  html += '        <div class="mw-comment-talk-info"  style="white-space: pre-line;">' + '\n' + reply.CommentText + '</div>';
                  html += '    </div>';
                  html += ' </div>';
                }
              }
              html += '           <div class="mw-comment-list-reply f-clearfix"><a href="javascript:void(0)" class="toggleReply"><i class="mw-iconfont" style="' + (self.options.isShowReplyIcon ? '' : 'display:none') + '">' + self.options.replyIcon + '</i> ' + self.options.replyText + '</a></div>';
              ;
              html += '               </div>';
              html += '           </div>';
            }
            $("#" + self.options.controlId + " .mw-comment-list").html(html);
            self.options.totalPageCount = result.pageTotal;
            self.options.totalCount = result.total;
            self.showPager();
            self.smrecompute(hisH);
            if (goToComemnt) {
              self.goToComemntTextbox();
            }
          }
        }
      });
    };
    this.bindEvent = function () {
      var self = this;
      $("#" + this.options.controlId + " .mw-comment-dialogue-cont img.validCodeImg").on("click", function () {
        self.refreshCommentCaptcha(this, 0);
      });

      //切换回复评论窗口显示
      $("#" + this.options.controlId + " .mw-comment-list").on("click", "a.toggleReply", function () {
        self.options.eventSource = this;
        if (self.options.isMustLogin) {
          self.getCurrentUser(self.showReply);
        } else {
          self.showReply();
        }
      });

      //提交评论
      $("#" + this.options.controlId + " .mw-comment-dialogue-cont .mw-comment-button").on("click", function () {
        if (self.options.isPosting) {
          return false;
        }
        if (self.options.isMustLogin) {
          self.getCurrentUser(self.checkPostLogin);
        } else {
          if (self.options.postType == "reply") {
            self.submitReply();
          } else {
            self.submitComment();
          }
        }
      });

      //注销
      $("#" + this.options.controlId + " .mw-comment-dialogue-cont .mw-comment-loginInfo").on("click", "a.quit", function () {
        self.ajaxLogout();
      });

      //文本统计事件
      $("#" + this.options.controlId + "").on("keyup", "textarea", function () {
        var length = $(this).val().length;
        $(this).next().find("span").text(length);
      });

      //文本框点击事件
      $("#" + this.options.controlId).on("click", "textarea", function () {
        //if (self.options.isMustLogin) {
        //    self.getCurrentUser();
        //    if (!self.options.isLogin) {
        //        self.ajaxLogin();
        //    }
        //}
      });

      //弹出发表评论对话框
      $("#" + this.options.controlId + " .mw-comment-input").on("click", function () {
        if (self.options.isMustLogin) {
          self.getCurrentUser(self.showComment);
        } else {
          self.showComment();
        }
      });

      //关闭弹框点击事件
      $("#" + this.options.controlId + " .mw-close").on("click", function () {
        self.closeCommentDialog();
      });
    };
    this.submitComment = function () {
      var data = this.serializePostData();
      var index = 0;
      data.Timestamp = this.options["Timestamp" + index];
      var checkFlag = this.checkPostData(data);
      if (checkFlag) {
        data.CommentText = escape(data.CommentText);
        this.postComment(data);
      }
    };
    this.submitReply = function () {
      var data = this.serializePostData();
      index = 0;
      data.Timestamp = this.options["Timestamp" + index];
      data.AtCommentId = this.options.atCommentId;
      var checkFlag = this.checkPostData(data);
      if (checkFlag) {
        data.CommentText = escape(data.CommentText);
        this.postComment(data);
      }
    };
    this.checkPostData = function (data) {
      var type = this.options.postType;
      this.clearError();
      if ($.trim(data.CommentText) == "") {
        if (type == "comment") {
          this.showError(this.getCurrentCommentElement(), this.options.commentTextEmpty);
        } else {
          this.showError(this.getCurrentCommentElement(), this.options.replyTextEmpty);
        }
        return false;
      } else {
        if (data.CommentText.length > 400) {
          if (type == "comment") {
            this.showError(this.getCurrentCommentElement(), this.options.commentTextMaxLength);
          } else {
            this.showError(this.getCurrentCommentElement(), this.options.replyTextMaxLength);
          }
          return false;
        }
      }
      if ($.trim(data.Captcha) == "") {
        if (type == "comment") {
          if (!this.options.isLogin) {
            this.showError(this.getCurrentCaptchaElement(), this.options.captchaEmpty);
            return false;
          }
        } else {
          if (!this.options.isLogin) {
            this.showError(this.getCurrentCaptchaElement(), this.options.captchaEmpty);
            return false;
          }
        }
      }
      return true;
    };
    this.serializePostData = function () {
      var data = {};
      data.CommentText = $("#" + this.options.controlId).find("textarea").val();
      data.CommentText = $.trim(data.CommentText);
      data.Captcha = $("#" + this.options.controlId).find(".mw-comment-code-input").val();
      data.EntityId = this.options.entityId;
      data.EntityType = this.options.entityType;
      return data;
    };
    this.smrecompute = function (hisH) {
      var tabContentHeight = $('#' + this.options.controlId + ' .mw-comment').height();
      $('#' + this.options.controlId).smrecompute("recomputeTo", [tabContentHeight, hisH]);
    };
    this.postComment = function (data) {
      var self = this;
      self.options.isPosting = true;
      $.ajax({
        url: '/Comment/AddComment',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: data,
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          if (result.IsSuccess) {
            if (self.options.postType == "comment") {
              alert(self.options.postCommentSucess);
            } else {
              alert(self.options.postReplySucess);
            }
            $(self.getCurrentCommentElement()).val('');
            $(self.getCurrentCaptchaElement()).val('');
            self.loadCommentList();
            self.closeCommentDialog();
          } else {
            if (typeof result.validate != "undefined") {
              if (result.target == "Captcha") {
                self.showError(self.getCurrentCaptchaElement(), result.validate);
              }
              if (result.target == "Comment" || result.target == "Reply") {
                self.showError(self.getCurrentCommentElement(), result.validate);
              }
            }
          }
        },
        complete: function () {
          self.options.isPosting = false;
        }
      });
    };
    this.showPager = function () {
      var pagerStyle = this.options.pagerStyle;
      var htmlId = this.options.controlId; //self.options.totalPageCount
      var pageIndex = this.options.pageIndex;
      var totalPage = this.options.totalPageCount;
      if (this.options.isShowPager && this.options.totalPageCount > 1) {
        var pager = $("#" + htmlId).find(".xn-pager");
        pager.jqPaginator('option', {
          totalCounts: this.options.totalCount,
          onPageChange: this.onPageChange
        });
        $("#" + htmlId + " .xn-pager").show();
      } else {
        $("#" + htmlId + " .xn-pager").hide();
      }
    };
    this.ajaxLogin = function () {
      var self = this;
      $.get("/ebusiness/RenderLoginPartial", {}, function (result) {
        $("body").append(result);
        window["CommentAjaxLoginCallBack"] = function (data) {
          if (data.IsSuccess && data.IsLogin) {
            self.getCurrentUser();
          }
        };
      });
    };
    this.clearError = function () {
      $("#" + this.options.controlId + " .w-haserror").removeClass("w-haserror");
      $("#" + this.options.controlId + " .notifi").remove();
    };
    this.showError = function (target, message) {
      this.clearError();
      $("#" + this.options.controlId + " .mw-comment-dialogue .mw-comment-title").after('<div class="notifi"><i class="mw-iconfont">끸</i>' + message + '</div>');
      $(target).addClass("w-haserror");
    };
    this.getCurrentUser = function (callback) {
      var self = this;
      $.ajax({
        url: '/Common/GetCommentInfo',
        type: 'POST',
        //GET
        async: true,
        //或false,是否异步
        data: {
          entityId: self.options.entityId,
          entityType: self.options.entityType
        },
        timeout: 5000,
        //超时时间
        dataType: 'json',
        //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (result) {
          var $UserInfo = $("#" + self.options.controlId + " .mw-comment-dialogue-cont .mw-comment-loginInfo");
          var $CommentCaptcha = $("#" + self.options.controlId + " .mw-comment-dialogue-cont .mw-comment-code");
          if (result.IsLogin) {
            $UserInfo.find("img").attr("src", result.Avatar);
            $UserInfo.find(".name").text(result.UserName);
            // $UserInfo.parents(".w-comment-top").addClass("w-contleft");
            $UserInfo.show();
            $CommentCaptcha.hide();
            self.options.isLogin = true;
          } else {
            self.options.isLogin = false;
            // $UserInfo.parents(".w-comment-top").removeClass("w-contleft");
            $UserInfo.hide();
            $CommentCaptcha.show();
          }
          if (typeof callback == "function") {
            callback.call(self);
          }
        }
      });
    };
    this.getCurrentCommentElement = function () {
      return $("#" + this.options.controlId).find("textarea");
    };
    this.getCurrentCaptchaElement = function () {
      return $("#" + this.options.controlId).find(".mw-comment-code ");
    };
    this.goToComemntTextbox = function () {
      $("#" + this.options.controlId)[0].scrollIntoView();
    };
    this.initCommentHeight = function () {
      var hisH = $('#' + this.options.controlId).height();
      var tabContentHeight = $('#' + this.options.controlId + ' .mw-comment').height();
      $('#' + this.options.controlId).css("min-height", tabContentHeight + "px");
      $('#' + this.options.controlId).attr("hish", tabContentHeight);
      this.smrecompute(hisH);
    };
    this.onPageChange = function (pageIndex, type) {
      if (type == "change") {
        if (pageIndex <= 0 || pageIndex == that.options.pageIndex || pageIndex > that.options.totalPageCount) {
          return;
        }
        that.options.pageIndex = pageIndex;
        that.loadCommentList(true);
      }
    };
    this.closeCommentDialog = function () {
      $("#" + this.options.controlId + " .mw-comment-dialogue-wrap").hide();
      $("#" + this.options.controlId).removeClass("dialogshowed");
    };
    this.showReply = function () {
      if (this.options.isMustLogin && !this.options.isLogin) {
        this.ajaxLogin();
        return;
      } else {
        var that = this.options.eventSource;
        var atCommentId = $(that).parents(".mw-comment-list-item").attr("commentid");
        var commentUser = $(that).parents(".mw-comment-list-con").find(".mw-comment-list-time").find(".mw-fl").text();
        $("#" + this.options.controlId + " textarea").attr("placeholder", this.options.replyText + ' ' + commentUser + '：');
        $("#" + this.options.controlId + " textarea").next().find("span").text(0);
        $("#" + this.options.controlId + " textarea").val("");
        this.clearError();
        this.options.postType = "reply";
        this.options.atCommentId = atCommentId;
        this.refreshCommentCaptcha($("#" + this.options.controlId + " .mw-comment-dialogue-cont img.validCodeImg"), 0);
        $("#" + this.options.controlId + " .mw-comment-code-input").val("");
        $("#" + this.options.controlId + " .mw-comment-dialogue-wrap").show();
        $("#" + this.options.controlId).addClass("dialogshowed");
      }
    };
    this.showComment = function () {
      if (this.options.isMustLogin && !this.options.isLogin) {
        this.ajaxLogin();
        return;
      } else {
        this.options.postType = "comment";
        this.options.atCommentId = 0;
        this.refreshCommentCaptcha($("#" + this.options.controlId + " .mw-comment-dialogue-cont img.validCodeImg"), 0);
        $("#" + this.options.controlId + " .mw-comment-dialogue-wrap").show();
        $("#" + this.options.controlId + " textarea").val("");
        $("#" + this.options.controlId + " textarea").next().find("span").text(0);
        $("#" + this.options.controlId + " textarea").attr("placeholder", "");
        $("#" + this.options.controlId + " .mw-comment-code-input").val("");
        this.clearError();
        $("#" + this.options.controlId).addClass("dialogshowed");
      }
    };
    this.checkPostLogin = function () {
      if (!this.options.isLogin) {
        this.ajaxLogin();
        return;
      } else {
        if (this.options.postType == "reply") {
          this.submitReply();
        } else {
          this.submitComment();
        }
      }
    };
  };
  $.fn.smartNPMobileCommentControl = function (opt) {
    if (wzMobileComment[opt]) {
      return wzMobileComment[opt].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof opt === 'object' || !opt) {
      return new wzMobileComment().init(opt);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.smartNPMobileCommentControl');
    }
  };
}(jQuery);
+function ($) {
  var baiDuShare;
  var shareJson;
  var shareNum = 0;
  //var isStart = false;
  baiDuShare = function () {
    this.options = {
      controlId: '',
      imageStyle: '',
      bdSize: ''
    };
    this.init = function (opt) {
      $.extend(this.options, opt || {});
      if (shareJson == "" || shareJson == undefined) {
        //isStart = true;
        shareJson = "{'tag':'" + this.options.controlId + "','bdStyle':'" + this.options.imageStyle + "','bdSize':'" + this.options.bdSize + "'}";
      } else {
        //isStart = false;
        shareJson += ",{'tag':'" + this.options.controlId + "','bdStyle':'" + this.options.imageStyle + "','bdSize':'" + this.options.bdSize + "'}";
      }
      var data = {
        pageId: parseInt($('#pageinfo').attr('data-type')) - 1 == 1 ? $('#pageinfo').val() : $('#pageinfo').attr('data-entityid'),
        pageType: parseInt($('#pageinfo').attr('data-type')) - 1
      };
      window._bd_share_config = {
        "common": {
          "bdSnsKey": {},
          "bdText": "",
          "bdMini": "2",
          "bdPic": "",
          "bdMiniList": ['mshare', 'qzone', 'tsina', 'weixin', 'renren', 'tqq', 'bdxc', 'tqf', 'tieba', 'douban', 'sqq', 'thx', 'ibaidu'],
          "onAfterClick": function (cmd) {
            $.ajax({
              cache: false,
              url: "/BaiDuShare/IncrementShareCount",
              type: "post",
              data: data,
              dataType: "json",
              success: function (result) {
                if (result.IsSuccess) {
                  //wxStatistics.showLogger("统计分享数成功" + ",pageId:" + data.pageId + ",pageType:" + data.pageType);
                  shareNum++;
                  $(".bds_count").html(shareNum);
                  $(".bds_count").attr("title", "累计分享" + shareNum + "次");
                }
              }
            });
          }
        },
        "share": eval("([" + shareJson + "])")
      };
      //with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '//bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(- new Date() / 36e5)];

      //alert(window._bd_share_main)
      //if (!isStart) {
      if (window._bd_share_main != undefined) {
        window._bd_share_main.init();
      }
    };
  };
  $.fn.smartShareControl = function (opt) {
    if (baiDuShare[opt]) {
      return baiDuShare[opt].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof opt === 'object' || !opt) {
      new baiDuShare().init(opt);
      $("#smv_" + opt.controlId).find("div[data-tag='" + opt.controlId + "']").css("display", "");
      window.onload = function () {
        var data = {
          pageId: parseInt($('#pageinfo').attr('data-type')) - 1 == 1 ? $('#pageinfo').val() : $('#pageinfo').attr('data-entityid'),
          pageType: parseInt($('#pageinfo').attr('data-type')) - 1
        };
        //获取分享次数
        $.ajax({
          cache: false,
          url: "/BaiDuShare/GetShareCount",
          type: "post",
          data: data,
          dataType: "json",
          success: function (result) {
            if (result.IsSuccess) {
              shareNum = result.num;
              $(".bds_count").html(shareNum);
              $(".bds_count").attr("title", "累计分享" + shareNum + "次");
            } else {
              $(".bds_count").html("0");
              $(".bds_count").attr("title", "累计分享0次");
            }
            $('.mw-share .popup_more').attr("style", 'background-position:inherit !important');
          }
        });
        //$(".bds_more:first").click();
        $("#smv_" + opt.controlId).find("div[data-tag='" + opt.controlId + "']").css("display", "");
      };
      //return new baiDuShare().init(opt);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.smartShareControl');
    }
  };
}(jQuery);
+function ($) {
  var wzFavorite;
  wzFavorite = function () {
    this.options = {
      controlId: '',
      controlType: 'Pc',
      entityType: 1,
      entityId: 1,
      isLogin: false,
      isInMyFavourite: false,
      entityTypeName: "文章",
      favouriteSucess: "收藏成功",
      removeFavouriteSucess: "取消收藏成功"
    };
    this.init = function (opt) {
      $.extend(this.options, opt || {});
      var entityId = $("#pageinfo").attr("data-entityid");
      var entityType = $("#pageinfo").attr("data-type");
      if (typeof entityId !== 'undefined') {
        this.options.entityId = parseInt(entityId);
      }
      if (typeof entityType !== 'undefined') {
        this.options.entityType = parseInt(entityType) - 1;
      }
      this.bindEvent();
      this.LoadFavorite();
      if ($("#smvSysFavoriteModal").length == 0) {
        var html = "<div id='smvSysFavoriteModal'>";
        html += '       <div class="mw-modal mw-fade">';
        html += '           <div class="mw-smtips"></div>';
        html += '       </div>';
        html += '   </div>';
        $("body").append(html);
      }
    };
    this.bindEvent = function () {
      var self = this;
      $("#" + this.options.controlId + " a").on("click", function () {
        self.postFavorite();
      });
    };
    this.LoadFavorite = function (callback) {
      var self = this;
      CheckIfInMyFavourite(this.options.entityId, this.options.entityType, function (isLogin, isInMyFavourite) {
        self.options.isLogin = isLogin;
        self.options.isInMyFavourite = isInMyFavourite;
        if (isInMyFavourite) {
          $("#" + self.options.controlId + " .mw-collect").addClass("mw-current");
        }
        if (typeof callback == "function") {
          callback(self);
        }
      });
    };
    this.smrecompute = function () {
      $('#' + this.options.controlId).smrecompute();
    };
    this.checkFavorite = function (self) {
      if (self.options.isLogin) {
        if (self.options.isInMyFavourite) {
          self.removeFavorite();
        } else {
          self.addFavorite();
        }
      } else {
        self.ajaxLogin();
      }
    };
    this.postFavorite = function () {
      this.LoadFavorite(this.checkFavorite);
    };
    this.ajaxLogin = function () {
      var self = this;
      $.get("/ebusiness/RenderLoginPartial", {
        trigger: 'favourite'
      }, function (result) {
        $("body").append(result);
        window["AjaxLoginCallBack"] = function (data) {
          if (data.IsSuccess && data.IsLogin) {
            self.postFavorite();
          }
        };
      });
    };
    this.addFavorite = function () {
      var self = this;
      var typeName = this.options.entityTypeName + this.options.favouriteSucess;
      AddToMyFavourite(this.options.entityId, this.options.entityType, function () {
        $("#" + self.options.controlId + " .mw-collect").addClass("mw-current");
        $('#smvSysFavoriteModal .mw-smtips').text(typeName);
        $('#smvSysFavoriteModal .mw-modal').removeClass("mw-fade").addClass("mw-fadein");
        setTimeout(function () {
          $('#smvSysFavoriteModal .mw-modal').removeClass("mw-fadein").addClass("mw-fade");
        }, 1500);
      });
    };
    this.removeFavorite = function () {
      var self = this;
      var typeName = this.options.entityTypeName + this.options.removeFavouriteSucess;
      DeleteFromMyFavourite(this.options.entityId, this.options.entityType, function () {
        $("#" + self.options.controlId + " .mw-collect").removeClass("mw-current");
        $('#smvSysFavoriteModal .mw-smtips').text(typeName);
        $('#smvSysFavoriteModal .mw-modal').removeClass("mw-fade").addClass("mw-fadein");
        setTimeout(function () {
          $('#smvSysFavoriteModal .mw-modal').removeClass("mw-fadein").addClass("mw-fade");
        }, 1500);
      });
    };
  };
  $.fn.smartNPwzFavoriteControl = function (opt) {
    if (wzFavorite[opt]) {
      return wzFavorite[opt].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof opt === 'object' || !opt) {
      return new wzFavorite().init(opt);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.smartNPwzFavoriteControl');
    }
  };
}(jQuery);

// 封装可拓展的块元素垂直居中(对齐)方法 lzx 3-28
(function () {
  // 建立初始化布局构造函数
  function Layout(el) {
    this.ele = el;
    this.queryArr = [];
  }
  // 获取包裹层元素和需要参与比较的dom元素
  Layout.prototype.query = function (domArr) {
    var me = this;
    // 无参数时，设置默认值
    domArr == null && (domArr = '.lz-compare');
    me.queryArr = $(me.ele).find(domArr);
  };
  // 两个可通用方法
  // 获取元素高度并计算marginTop
  Layout.prototype.getSize = function (queryArr) {
    var me = this,
      arr = [],
      //保存高度值得数组
      valArr = [],
      //保存marginTop值得数组
      max; //保存数组最大值

    // get每个参与比较的元素的高度push到数组中
    $(queryArr).css('marginTop', '');
    for (var i = 0, len = queryArr.length; i < len; i++) {
      theHei = $(queryArr[i]).outerHeight();
      arr.push(theHei);
    }
    // 取出数组最大值
    max = Math.max.apply(null, arr);
    // 用最大值与数组中的每个值相减并除以2，得到marginTop的值并放入数组中
    for (var i = 0, len = queryArr.length; i < len; i++) valArr.push((max - arr[i]) / 2);
    // 返回新数组
    return valArr;
  };
  // 设置 marginTop
  Layout.prototype.setSize = function (queryArr) {
    var mTopArr = this.getSize(queryArr);
    // 当 mTopArr中当前值不为 0 时，将值赋给对应dom元素的marginTop
    $(queryArr).css('marginTop', 0);
    for (var i = 0, len = queryArr.length; i < len; i++) {
      mTopArr[i] != 0 && $(queryArr[i]).css('marginTop', mTopArr[i]);
    }
  };
  // 初始化函数
  Layout.prototype.init = function (domArr) {
    var me = this;
    me.query(domArr);
    me.setSize(me.queryArr);
  };
  // 实例化构造函数
  $.fn.verticalCenter = function (domArr) {
    var $me = $(this);
    $.each($me, function (index, el) {
      var layout = new Layout(el);
      layout.init(domArr);
    });
  };
})(jQuery);
// 调用初始化方法

//PC端翻页
function PcListPagination(htmlId, listType, pagerStyle, pageSize, totalPage, categoryIds, entityIds, dateStyle, orderByField, orderByType, isCategoryList, postData, searchKeyWord, showImage, showPrice, callBack, templateId) {
  //运用$符号
  kino.razor.use("$");
  //处理样式逻辑
  if (pagerStyle.indexOf("Style1_") > -1) {
    //翻页样式一上下页翻页
    $("#smv_" + htmlId + " #prePage").click(function () {
      var currentA = $("#smv_" + htmlId + " #pagerHtml a[class *='activi']");
      if (currentA.html() == "1") {
        return;
      }
      var numberA = $("#smv_" + htmlId + " #pagerHtml li[class !='dom'] a:not(a[class *='w-page-flip'])");
      $.each(numberA, function (i, o) {
        if (parseInt($(this).html()) == parseInt(currentA.html()) - 1) {
          $(this).click();
        }
      });
    });
    $("#smv_" + htmlId + " #nextPage").click(function () {
      var currentA = $("#smv_" + htmlId + " #pagerHtml a[class *='activi']");
      if (currentA.html() == totalPage.toString()) {
        return;
      }
      var numberA = $("#smv_" + htmlId + " #pagerHtml li[class !='dom'] a:not(a[class *='w-page-flip'])");
      $.each(numberA, function (i, o) {
        if (parseInt($(this).html()) == parseInt(currentA.html()) + 1) {
          $(this).click();
        }
      });
    });
    $("#smv_" + htmlId + " #pagerHtml li[class !='dom'] a:not(a[class *='w-page-flip'])").click(function () {
      var pageIndex = parseInt($(this).html());
      var pageIndexStr = $(this).html();
      if (totalPage > 5) {
        if (pageIndex < 4) {
          $("#smv_" + htmlId + " #firstdom").hide();
          $("#smv_" + htmlId + " #lasedom").show();
          $("#smv_" + htmlId + " #secondPage").html(2);
          $("#smv_" + htmlId + " #thirdPage").html(3);
          $("#smv_" + htmlId + " #forthPage").html(4);
        } else if (pageIndex > totalPage - 3) {
          $("#smv_" + htmlId + " #firstdom").show();
          $("#smv_" + htmlId + " #lasedom").hide();
          $("#smv_" + htmlId + " #secondPage").html(totalPage - 3);
          $("#smv_" + htmlId + " #thirdPage").html(totalPage - 2);
          $("#smv_" + htmlId + " #forthPage").html(totalPage - 1);
        } else {
          $("#smv_" + htmlId + " #firstdom").show();
          $("#smv_" + htmlId + " #lasedom").show();
          $("#smv_" + htmlId + " #secondPage").html(pageIndex - 1);
          $("#smv_" + htmlId + " #thirdPage").html(pageIndex);
          $("#smv_" + htmlId + " #forthPage").html(pageIndex + 1);
        }
      }
      $("#smv_" + htmlId + " #pagerHtml").find("a").removeClass("activi");
      $.each($("#smv_" + htmlId + " #pagerHtml").find("a"), function (i, o) {
        if ($(this).html() == pageIndexStr) {
          $(this).addClass("activi");
        }
      });
      AssembleData(htmlId, listType, pagerStyle, pageSize, pageIndex, totalPage, categoryIds, entityIds, dateStyle, orderByField, orderByType, isCategoryList, postData, searchKeyWord, showImage, showPrice, callBack, templateId);
    });
  } else if (pagerStyle.indexOf("Style2_") > -1) {
    //跳转翻页
    $("#smv_" + htmlId + " #prePage").click(function () {
      var pageIndex = parseInt($("#smv_" + htmlId + " #firstNum").html());
      if (pageIndex == 1) {
        return;
      } else {
        pageIndex = pageIndex - 1;
        $("#smv_" + htmlId + " #firstNum").html(pageIndex);
      }
      AssembleData(htmlId, listType, pagerStyle, pageSize, pageIndex, totalPage, categoryIds, entityIds, dateStyle, orderByField, orderByType, isCategoryList, postData, searchKeyWord, showImage, showPrice, callBack, templateId);
    });
    $("#smv_" + htmlId + " #nextPage").click(function () {
      var pageIndex = parseInt($("#smv_" + htmlId + " #firstNum").html());
      if (pageIndex == totalPage) {
        return;
      } else {
        pageIndex = pageIndex + 1;
        $("#smv_" + htmlId + " #firstNum").html(pageIndex);
      }
      AssembleData(htmlId, listType, pagerStyle, pageSize, pageIndex, totalPage, categoryIds, entityIds, dateStyle, orderByField, orderByType, isCategoryList, postData, searchKeyWord, showImage, showPrice, callBack, templateId);
    });
    $("#smv_" + htmlId + " #goPage").click(function () {
      var turnPage = $("#smv_" + htmlId + " #turnPage").val();
      var pageIndex = parseInt(turnPage);
      if (!isNaN(pageIndex) && pageIndex <= totalPage && pageIndex >= 1) {
        $("#smv_" + htmlId + " #firstNum").html(pageIndex);
        AssembleData(htmlId, listType, pagerStyle, pageSize, pageIndex, totalPage, categoryIds, entityIds, dateStyle, orderByField, orderByType, isCategoryList, postData, searchKeyWord, showImage, showPrice, callBack, templateId);
        $("#smv_" + htmlId + " #turnPage").val("");
      } else {
        $("#smv_" + htmlId + " #turnPage").val("");
      }
    });
  } else if (pagerStyle.indexOf("Style3_") > -1) {
    var pageIndex = 1;
    $("#smv_" + htmlId + " #searchMore").click(function () {
      pageIndex++;
      if (pageIndex == totalPage) {
        $(this).parent().hide();
      }
      ;
      AssembleData(htmlId, listType, pagerStyle, pageSize, pageIndex, totalPage, categoryIds, entityIds, dateStyle, orderByField, orderByType, isCategoryList, postData, searchKeyWord, showImage, showPrice, callBack, templateId);
    });
  }
}
//组装数据
function AssembleData(htmlId, listType, pagerStyle, pageSize, pageIndex, totalPage, categoryIds, entityIds, dateStyle, orderByField, orderByType, isCategoryList, postData, searchKeyWord, showImage, showPrice, callBack, templateId) {
  var param = {
    dataType: listType,
    key: searchKeyWord,
    pageIndex: pageIndex - 1,
    pageSize: pageSize,
    selectCategory: categoryIds,
    selectId: entityIds,
    dateFormater: dateStyle,
    orderByField: orderByField,
    orderByType: orderByType,
    setTop: true,
    templateId: templateId,
    postData: JSON.stringify(postData)
  };
  $.post("/Designer/Common/GetData", param, function (data) {
    if (pagerStyle.indexOf("Style1_") > -1 || pagerStyle.indexOf("Style2_") > -1) {
      $("#ulList_" + htmlId + " li").remove();
      $.each(data.Data, function (i, o) {
        $("#ulList_" + htmlId).append(kino.razor($("#listTemplate_" + htmlId).html(), {
          data: o
        }));
      });
    } else if (pagerStyle.indexOf("Style3_") > -1) {
      var preAddHetght = $("#smv_" + htmlId + " .yibuFrameContent").height();
      $.each(data.Data, function (i, o) {
        $("#ulList_" + htmlId).append(kino.razor($("#listTemplate_" + htmlId).html(), {
          data: o
        }));
      });
    }
    if (isExitsFunction(callBack)) {
      var func = eval(callBack);
      func();
    }
  }, 'json');
}
function isExitsFunction(funcName) {
  try {
    if (typeof eval(funcName) == "function") {
      return true;
    }
  } catch (e) {}
  return false;
}
//记录访问记录+记录浏览量type:0代表页面，1代表文章，2代表产品
function recordPageAccess(pid, sid, eid, type) {
  $.ajax({
    url: "/PageVisit/Index",
    data: {
      pageId: pid,
      siteId: sid,
      entityId: eid,
      pageType: type
    },
    dataType: 'jsonp',
    jsonp: 'callback',
    type: 'get',
    success: function () {}
  });
}
// Define keys to be tracked
var trackedKeys = window.trackedKeys;

// Adding a jshook

function GetStateProvince(stateProvinceId, obj, type) {
  $.ajax({
    cache: false,
    url: "/Customer/GetStateProvinces",
    type: "get",
    dataType: "json",
    success: function (data) {
      if (data != null) {
        $.each(data, function (i, item) {
          if (type == "mobile") {
            if (item["Id"] == stateProvinceId) {
              obj.append('<li class="mw-address-item current" provinceId="' + item["Id"] + '" name="' + item["Name"] + '"><span class="mw-iconfont">&#xa018;</span><div>' + item["Name"] + '</div></li>');
            } else {
              obj.append('<li class="mw-address-item" provinceId="' + item["Id"] + '" name="' + item["Name"] + '"><span class="mw-iconfont">&#xa018;</span><div>' + item["Name"] + '</div></li>');
            }
          } else {
            if (item["Id"] == stateProvinceId) {
              obj.append('<li class="w-address-conul-item w-address-current"provinceId="' + item["Id"] + '"><a class="w-address-conul-link">' + item["Name"] + '</a></li>');
            } else {
              obj.append('<li class="w-address-conul-item"provinceId="' + item["Id"] + '"><a class="w-address-conul-link">' + item["Name"] + '</a></li>');
            }
          }
        });
      }
    },
    error: function () {}
  });
}
var jshook = new Event('jshook');
window.addEventListener('jshook', function (e) {}, false);

// Function to get the hash code of an object

function GetCity(stateProvinceId, cityId, obj, type) {
  $.ajax({
    cache: false,
    url: "/Customer/GetCitysByStateProvince",
    data: {
      "stateProvinceId": stateProvinceId
    },
    type: "get",
    dataType: "json",
    success: function (data) {
      if (data != null) {
        $.each(data, function (i, item) {
          if (type == "mobile") {
            if (item["Id"] == cityId) {
              obj.append('<li class="mw-address-item current" cityId="' + item["Id"] + '" name="' + item["Name"] + '"><span class="mw-iconfont">&#xa018;</span><div>' + item["Name"] + '</div></li>');
            } else {
              obj.append('<li class="mw-address-item" cityId="' + item["Id"] + '" name="' + item["Name"] + '"><span class="mw-iconfont">&#xa018;</span><div>' + item["Name"] + '</div></li>');
            }
          } else {
            if (item["Id"] == cityId) {
              obj.append('<li class="w-address-conul-item w-address-current" cityId="' + item["Id"] + '"><a class="w-address-conul-link">' + item["Name"] + '</a></li>');
            } else {
              obj.append('<li class="w-address-conul-item" cityId="' + item["Id"] + '"><a class="w-address-conul-link">' + item["Name"] + '</a></li>');
            }
          }
        });
      }
    },
    error: function () {}
  });
}
function GetArea(cityId, areaId, obj, type) {
  $.ajax({
    cache: false,
    url: "/Customer/GetAreasByCityId",
    data: {
      "cityId": cityId
    },
    type: "get",
    dataType: "json",
    success: function (data) {
      if (data != null) {
        $.each(data, function (i, item) {
          if (type == "mobile") {
            if (item["Id"] == cityId) {
              obj.append('<li class="mw-address-item current" areaId="' + item["Id"] + '" name="' + item["Name"] + '"><span class="mw-iconfont">&#xa018;</span><div>' + item["Name"] + '</div></li>');
            } else {
              obj.append('<li class="mw-address-item" areaId="' + item["Id"] + '" name="' + item["Name"] + '"><span class="mw-iconfont">&#xa018;</span><div>' + item["Name"] + '</div></li>');
            }
          } else {
            if (item["Id"] == cityId) {
              obj.append('<li class="w-address-conul-item w-address-current" areaId="' + item["Id"] + '"><a class="w-address-conul-link">' + item["Name"] + '</a></li>');
            } else {
              obj.append('<li class="w-address-conul-item" areaId="' + item["Id"] + '"><a class="w-address-conul-link">' + item["Name"] + '</a></li>');
            }
          }
        });
      }
    },
    error: function () {}
  });
}
function SetMultiNavSelectedStyle(navId) {
  var rawurl = decodeURI(window.location.pathname) + window.location.search;
  $("#" + navId).find(".nav-item").each(function () {
    var href = $(this).find("span").attr("data-url");
    if (href != null) {
      href = href.replace(" ", "%20");
      if (href.toLowerCase() == rawurl.toLowerCase()) {
        $(this).addClass("active");
      }
    }
    var secondWrapper = $(this).children(".navDropdownWrapper").find(".nav-secondWrapper");
    if (secondWrapper.length > 0) {
      secondWrapper.each(function () {
        href = $(this).find('.nav-secondItem').attr("data-url");
        if (href != null) {
          href = href.replace(" ", "%20");
          if (href.toLowerCase() == rawurl.toLowerCase()) {
            $(this).find('.nav-secondItem').addClass("active");
          }
        }
        if ($(this).children(".nav-thirdWrapper").find(".nav-thirdItem").length > 0) {
          $(this).children(".nav-thirdWrapper").find(".nav-thirdItem").each(function () {
            href = $(this).attr("data-url");
            if (href != null) {
              href = href.replace(" ", "%20");
              if (href.toLowerCase() == rawurl.toLowerCase()) {
                $(this).addClass("active");
              }
            }
          });
        }
      });
    }
  });
}
function SetNavContainerSelectedStyle(navId) {
  var rawurl = decodeURI(window.location.pathname) + window.location.search;
  $("#" + navId).find(".nav-item").each(function () {
    var href = $(this).find("span").attr("data-url");
    if (href != null) {
      href = href.replace(" ", "%20");
      if (href.toLowerCase() == rawurl.toLowerCase()) {
        $(this).addClass("active");
        return;
      }
    }
    if ($(this).children("ul").length > 0) {
      $(this).children("ul").find("li").each(function () {
        href = $(this).attr("data-url");
        if (href != null) {
          href = href.replace(" ", "%20");
          if (href.toLowerCase() == rawurl.toLowerCase()) {
            $(this).addClass("active");
            return;
          }
        }
      });
    }
  });
}
function SetNavSelectedStyle(navId) {
  var rawurl = decodeURI(window.location.pathname) + window.location.search;
  $("#" + navId).find(".w-nav-inner").each(function () {
    var href = $(this).find("a").attr("href");
    if (href != null) {
      href = href.replace(" ", "%20");
      if (href.toLowerCase() == rawurl.toLowerCase()) {
        $(this).find('.w-nav-item').addClass("current");
        // return;
      }
    }
    if ($(this).children("ul").length > 0) {
      $(this).children("ul").find("li").each(function () {
        href = $(this).find("a").attr("href");
        if (href != null) {
          href = href.replace(" ", "%20");
          if (href.toLowerCase() == rawurl.toLowerCase()) {
            $(this).addClass("current");
            return;
          }
        }
      });
    }
  });
}
function SetNavSelectedStyleForStyle12(navId) {
  var rawurl = decodeURI(window.location.pathname) + window.location.search;
  $("#" + navId).find("li.w-nav-item").each(function () {
    var href = $(this).find("a").attr("href");
    if (href != null) {
      href = href.replace(" ", "%20");
      if (href.toLowerCase() == rawurl.toLowerCase()) {
        $(this).addClass("current");
        return;
      }
    }
    if ($(this).children("ul").length > 0) {
      $(this).children("ul").find("li").each(function () {
        href = $(this).find("a").attr("href");
        if (href != null) {
          href = href.replace(" ", "%20");
          if (href.toLowerCase() == rawurl.toLowerCase()) {
            $(this).addClass("current");
            return;
          }
        }
      });
    }
  });
}
function SetNavSelectedStyleForInner(navId) {
  var rawurl = decodeURI(window.location.pathname) + window.location.search;
  $("#" + navId).find("li.w-nav-inner").each(function () {
    var href = $(this).find("a").attr("href");
    if (href != null) {
      href = href.replace(" ", "%20");
      if (href.toLowerCase() == rawurl.toLowerCase()) {
        $(this).addClass("current");
        return;
      }
    }
    if ($(this).children("ul").length > 0) {
      $(this).children("ul").find("li").each(function () {
        href = $(this).find("a").attr("href");
        if (href != null) {
          href = href.replace(" ", "%20");
          if (href.toLowerCase() == rawurl.toLowerCase()) {
            $(this).addClass("current");
            return;
          }
        }
      });
    }
  });
}
//3
function SetNavSelectedStyleForMobile(navId) {
  var rawurl = decodeURI(window.location.pathname) + window.location.search;
  $("#" + navId).find("li").each(function () {
    var href = $(this).find("a").attr("href");
    if (href != null) {
      href = href.replace(" ", "%20");
      if (href.toLowerCase() == rawurl.toLowerCase()) {
        $(this).find('.mw-nav-item-link').addClass("current");
        return;
      }
    }
  });
}
//针对图片控件的初始化
function InitImageSmv(controlId, width, styleHeight, fillType, imgEle) {
  var $div = $("#div_" + controlId);
  var $control = $("#smv_" + controlId);
  var img = $("#img_smv_" + controlId);
  var $box = $div.find(".w-image-box");
  var leftborder = parseInt($div.css("border-left-width"));
  var realWidth = width - leftborder;
  var realHeight = parseInt($control.css('height')) - 2 * leftborder;
  if (fillType == "1") {
    if (img[0].complete) {
      ImagecutFill(realWidth, realHeight, controlId, styleHeight);
    } else {
      img.load(function () {
        ImagecutFill(realWidth, realHeight, controlId, styleHeight);
      });
    }
  } else if (fillType == "2") {
    $div.css({
      'width': realWidth + 2 * leftborder + "px",
      'height': realHeight + 2 * leftborder + "px"
    });
    img.css("width", realWidth + "px").css("height", realHeight + "px");
    img.parent().css("width", "100%").css("height", "100%");
  } else {
    var $control = $("#smv_" + controlId);
    var box = $("#div_" + controlId);
    var dst = {};
    dst = $("#div_" + controlId + " img").FixFill(parseInt($control.css('width')), realHeight, "", imgEle);
    $("#div_" + controlId + " img").css({
      'height': dst.height,
      'width': dst.width
    });
    box.css({
      'height': dst.height,
      'width': dst.width
    });
    var controlHeight = parseInt(dst.height);
    $control.css({
      'height': controlHeight,
      'width': dst.width
    });
  }
}
function ImagecutFill(realWidth, realHeight, controlId, styleHeight) {
  var $div = $("#div_" + controlId);
  var img = $("#img_smv_" + controlId);
  var natureWidth; //原始宽度
  var natureHeight; //原始高度
  var vs; //图片宽高比
  natureWidth = img[0].naturalWidth;
  natureHeight = img[0].naturalHeight;
  halfIntWidth = realWidth / 2;
  halfIntHeight = realHeight / 2;
  vs = natureWidth / natureHeight;
  $div.css({
    'height': styleHeight + "px"
  });
  //缩略图比例240:160(等于1.5)
  if (vs >= 1.5) {
    //横图则固定高度
    if (realWidth > realHeight * vs) {
      $(img).css("width", realWidth + "px").css("height", "auto").css("marginTop", halfIntHeight - halfIntWidth * parseInt(natureHeight) / parseInt(natureWidth) + "px").css("marginLeft", "0px");
    } else {
      $(img).css("width", "auto").css("height", realHeight + "px").css("marginLeft", halfIntWidth - halfIntHeight * parseInt(natureWidth) / parseInt(natureHeight) + "px").css("marginTop", "0px");
    }
  } else {
    //
    if (realHeight > realWidth / vs) {
      $(img).css("width", "auto").css("height", realHeight + "px").css("marginLeft", halfIntWidth - halfIntHeight * parseInt(natureWidth) / parseInt(natureHeight) + "px").css("marginTop", "0px");
    } else {
      $(img).css("width", realWidth + "px").css("height", "auto").css("marginTop", halfIntHeight - halfIntWidth * parseInt(natureHeight) / parseInt(natureWidth) + "px").css("marginLeft", "0px");
    }
  }
}
//弹层导航 1 2
function SetNavSelectedStyleForMobileOpen(navId) {
  var rawurl = decodeURI(window.location.pathname) + window.location.search;
  $("#" + navId).find("li").each(function () {
    var href = $(this).find("a").attr("href");
    if (href != null) {
      href = href.replace(" ", "%20");
      if (href.toLowerCase() == rawurl.toLowerCase()) {
        $(this).find('.mw-nav-item-link').addClass("current");
        return;
      }
    }
  });
}

//判断访问来源是否为pc Or mobile
function VisitFromMobile() {
  var ua = navigator.userAgent;
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;
  return isMobile;
}

//分类样式PC选中
function SetCategoryStyleForPc(catId) {
  var categoryStr = window.xwezhan.getQueryString("categoryId");
  if (categoryStr) {
    var arr = categoryStr.split(',');
    var curId = arr[0];
    $("#" + catId).find("li").each(function () {
      var categoryId = $(this).attr("data-id");
      if (categoryId == curId) {
        $(this).addClass("on");
        if ($(this).parents('div[ctype="category"]').attr('cstyle') === 'Style4') {
          $(this).parents('.w-category-list-item').find('.w-category-list-title .mw-iconfont').click();
          if ($(this).hasClass("w-category-listsecond-item")) {
            $(this).parents('.w-category-list-item').addClass("on");
          }
          if ($(this).hasClass("w-category-listthird-item")) {
            $(this).parents('.w-category-list-item').addClass("on");
            $(this).parents(".w-category-listsecond-item").addClass("on");
          }
        }
        return;
      }
    });
  }
}
function pagination(TagId, First, Last, Previous, Next, callback) {
  var HtmlId = TagId;
  var canSeePage = 5;
  var leftIndex = 0,
    rightIndex = 0;
  var newContainer = $("#" + HtmlId);
  var hisHeight = newContainer.height();
  if (newContainer.html() != null) {
    var contents = newContainer.find("div").html().split("_ueditor_page_break_tag_");
    var length = contents.length;
    if (length != 1) {
      var paginationDiv = $("<div />", {
        "class": "pagination"
      });
      newContainer.append(paginationDiv);
      if (length > canSeePage) {
        paginationDiv.append("<span id=first_page_" + HtmlId + " class='other_page'>" + (First == null || First == undefined ? "首页" : First) + "</span>");
        paginationDiv.append("<span id=pre_page_" + HtmlId + " class='other_page'>" + (Previous == null || Previous == undefined ? "上一页" : Previous) + "</span>");
      }
      for (var i = 0; i < length; i++) {
        paginationDiv.append("<a class='page' id=" + i + " >" + (i + 1) + "</a>");
      }
      var page = newContainer.find(".page");
      page.first().addClass("hover");
      newContainer.find(".page:gt(" + (canSeePage - 1) + ")").hide();
      page.click(function () {
        hisHeight = newContainer.height();
        var currentId = parseInt($(this).attr("id"));
        if (length < canSeePage) {
          page.removeClass("hover");
          newContainer.find("div:eq(0)").html(contents[currentId]);
          $(this).addClass("hover");
        } else {
          if (length >= canSeePage && currentId > Math.floor(canSeePage / 2)) {
            page.removeClass("hover");
            newContainer.find("div:eq(0)").html(contents[currentId]);
            $(this).addClass("hover");
            canSeePage % 2 === 0 ? (leftIndex = currentId - canSeePage / 2 + 1, rightIndex = currentId + canSeePage / 2) : (leftIndex = currentId - Math.floor(canSeePage / 2), rightIndex = currentId + Math.floor(canSeePage / 2));
            if (leftIndex > length - canSeePage) {
              newContainer.find(".page:gt(" + (length - canSeePage) + ")").show();
              newContainer.find(".page:lt(" + (length - canSeePage) + ")").hide();
            } else {
              newContainer.find(".page:lt(" + leftIndex + ")").hide();
              newContainer.find(".page:gt(" + rightIndex + ")").hide();
              page.slice(leftIndex, rightIndex + 1).show();
            }
          } else {
            if (length >= canSeePage && currentId <= Math.floor(canSeePage / 2)) {
              page.removeClass("hover");
              newContainer.find("div:eq(0)").html(contents[currentId]);
              $(this).addClass("hover");
              newContainer.find(".page:gt(" + (canSeePage - 1) + ")").hide();
              newContainer.find(".page:lt(" + canSeePage + ")").show();
            }
          }
        }
        if (length > canSeePage) {
          var currentPageId = parseInt(newContainer.find(".hover").attr("id")) + 1;
          $("#current_page_" + HtmlId).text(currentPageId + "/" + length);
        }
        if (typeof callback == "function") {
          setTimeout(function () {
            callback(hisHeight);
          }, 500);
        }
      });
      if (length > canSeePage) {
        var currentPageId = parseInt(newContainer.find(".hover").attr("id")) + 1;
        paginationDiv.append("<span id=current_page_" + HtmlId + " class='current_page'>" + currentPageId + "/" + length + "</span>");
        paginationDiv.append("<span id=post_page_" + HtmlId + " class='other_page'>" + (Next == null || Next == undefined ? "下一页" : Next) + "</span>");
        paginationDiv.append("<span id=last_page_" + HtmlId + " class='other_page'>" + (Last == null || Last == undefined ? "尾页" : Last) + "</span>");
      }
      var prepage = $("#pre_page_" + HtmlId);
      var postpage = $("#post_page_" + HtmlId);
      var firstpage = $("#first_page_" + HtmlId);
      var lastpage = $("#last_page_" + HtmlId);
      var topage = $("#to_page_" + HtmlId);
      var gopage = $("#go_page_" + HtmlId);
      prepage.click(function () {
        var btn = $(this).parent().find(".hover");
        if (btn.attr("id") !== "0") {
          page.removeClass("hover");
          btn.prev().addClass("hover");
          btn.prev().click();
        }
      });
      postpage.click(function () {
        var nextBtn = $(this).parent().find(".hover").next();
        if (nextBtn.attr("id") < $(this).parent().children("a").length) {
          page.removeClass("hover");
          nextBtn.addClass("hover");
          nextBtn.click();
        }
      });
      firstpage.click(function () {
        page.removeClass("hover");
        page.first().addClass("hover");
        var firstBtn = page.first();
        firstBtn.click();
      });
      lastpage.click(function () {
        page.removeClass("hover");
        page.last().addClass("hover");
        var nextBtn = page.last();
        nextBtn.click();
      });
      gopage.click(function () {
        var topageMun = topage.val();
        var reg = /^[0-9]*[1-9][0-9]*$/;
        var flag = reg.test(topageMun);
        if (parseInt(topageMun) > length || !flag) {
          alert("无第【" + topageMun + "】页,请重新键入");
          return;
        }
        page.removeClass("hover");
        newContainer.find(".page:eq(" + (topageMun - 1) + ")").addClass("hover");
        var hoverBtn = $(this).parent().find(".hover");
        hoverBtn.click();
      });
    }
    newContainer.find("div:eq(0)").html(contents[0]);
    if (typeof callback == "function") {
      setTimeout(callback, 500);
    }
  }
}
function setCurrentPageTitle(pagetitle, languageId) {
  if (pagetitle == undefined || pagetitle == "") return;
  var pathName = window.location.pathname.toLowerCase();
  var search = window.location.search.toLowerCase();
  if (pathName.indexOf("/") === 0) {
    pathName = pathName.substring(1, pathName.length);
  }
  var reg = RegExp(/^\w*[a-zA-Z]+\w*$/);
  if (reg.test(pathName)) {
    var jsonString = "";
    var key = pathName + "_" + languageId;
    sessionStorage.setItem(key, pagetitle);
  }
}
function CheckIfInMyFavourite(entityId, entityType, callback) {
  /// <summary>
  /// 检查实体是否在我的收藏中
  /// </summary>
  /// <param name="entityIds">实体id</param>
  /// <param name="entityType">entityType 1文章,2产品</param>
  /// <param name="callback">回调函数</param> 
  /// <returns>{IsLogin:Boolean, IsInMyFavourite:Boolean}</returns>
  $.post("/customer/MyFavouriteCheckIfIn", {
    id: entityId,
    type: entityType
  }, function (data) {
    if (typeof callback == "function") {
      callback(data.IsLogin, data.IsInMyFavourite);
    }
  }, "json");
}
function DeleteFromMyFavourite(entityId, entityType, callback) {
  /// <summary>
  /// 删除
  /// </summary>
  /// <param name="entityIds">实体id</param>
  /// <param name="entityType">entityType 1文章,2产品</param>
  /// <param name="callback">回调函数</param> 
  /// <returns></returns>
  $.post("/customer/MyFavouriteDeleteByEntityId", {
    id: entityId,
    type: entityType
  }, function (data) {
    if (typeof callback == "function") {
      callback();
    }
    if (typeof cartControlGetProductCount == "function") {
      cartControlGetProductCount();
    }
  }, "json");
}
function getHashCode(target) {
  var stringKeys = Object.keys(target).sort().join("");
  let hashCode = 0;
  Array.from(stringKeys).forEach(function (char) {
    hashCode = (hashCode << 5) - hashCode + char.charCodeAt(0);
    hashCode |= 0;
  });
  return hashCode.toString(16);
}

// Function for local storage scanning

function AddToMyFavourite(entityIds, entityType, callback, trigger) {
  /// <summary>
  /// 添加到收藏夹,登录后调用  jjl
  /// </summary>
  /// <param name="entityIds">实体id集合, 格式, id,id,id,支持单个和多个</param>
  /// <param name="entityType">entityType 1文章,2产品</param>
  /// <param name="callback">回调函数</param>
  /// <param name="trigger">谁触发的,不用填写, 如果是购物车, 需要删除购物车里面的产品</param>
  /// <returns>void</returns>

  $.post("/customer/MyFavouriteAdd", {
    ids: entityIds,
    type: entityType,
    trigger: trigger
  }, function (data) {
    if (typeof callback == "function") {
      callback(data.NewsCount, data.ProductCount, data.alreadyInFavourite);
    }
    if (typeof cartControlGetProductCount == "function") {
      cartControlGetProductCount();
    }
  }, "json");
}
function GetPcStyleTemp(style, color) {
  var colorStyle = '';
  switch (style.toLowerCase().substring(0, 6)) {
    case "style1":
      colorStyle = "w-page-square";
      switch (color) {
        case "0":
          colorStyle = "w-page-square";
          break;
        case "1":
          colorStyle = "w-page-square-orange";
          break;
        case "2":
          colorStyle = "w-page-square-blue";
          break;
        case "3":
          colorStyle = "w-page-square-red";
          break;
        case "4":
          colorStyle = "w-page-round";
          break;
        case "5":
          colorStyle = "w-page-alpha";
          break;
      }
      return {
        baseClass: "w-pageline w-page-num",
        firsthtml: "",
        prevhtml: "<li class='w-page-cm w-page-flip'><a href='javascript:void(0);'><span>{{prev}}</span><i>&lt;</i></a></li>",
        nexthtml: "<li class='w-page-cm w-page-flip'><a href='javascript:void(0);'><span>{{next}}</span><i>&gt;</i></a></li>",
        lasthtml: "",
        pagehtml: "<li class='w-page-cm'><a href='javascript:void(0);'>{{page}}</a></li>",
        wrapperhtml: "<ul class='" + colorStyle + " w-clearfix'></ul>"
      };
    case "style2":
      colorStyle = "w-page-rectangle-white";
      switch (color) {
        case "0":
          colorStyle = "w-page-rectangle-white";
          break;
        case "1":
          colorStyle = "w-page-rectangle";
          break;
        case "2":
          colorStyle = "w-page-rectangle-round";
          break;
        case "3":
          colorStyle = "w-page-rectangle-red";
          break;
        case "4":
          colorStyle = "w-page-rectangle-alpha";
          break;
      }
      return {
        baseClass: "w-pageline w-page-go",
        firsthtml: "",
        prevhtml: "<li class='w-page-cm w-page-flip'><a href='javascript:void(0);'><span>{{prev}}</span><i>&lt;</i></a></li>",
        nexthtml: "<li class='w-page-cm w-page-flip'><a href='javascript:void(0);'><span>{{next}}</span><i>&gt;</i></a></li>",
        lasthtml: "",
        pagehtml: "<li class='w-page-cm'><em>{{page}}</em>/<em>{{totalPages}}</em></li>",
        afterhtml: "<li><span class='w-line-height-ie7'>{{goto}}</span><input type='text' jp-data='go'></li><li class='w-page-cm w-page-flip'><a href='javascript:void(0);' jp-role='go' id='goPage'>{{go}}</a></li>",
        wrapperhtml: "<ul class='" + colorStyle + " w-clearfix'></ul>",
        vpage: 1
      };
    case "style3":
      colorStyle = "w-page-more-one";
      switch (color) {
        case "0":
          colorStyle = "w-page-more-one";
          break;
        case "1":
          colorStyle = "w-page-more-two";
          break;
        case "2":
          colorStyle = "w-page-more-three";
          break;
        case "3":
          colorStyle = "w-page-more-fives";
          break;
        case "4":
          colorStyle = "w-page-more-six";
          break;
      }
      return {
        baseClass: "w-pageline w-page-more-box",
        firsthtml: "",
        prevhtml: "",
        nexthtml: "<a href='javascript:void(0);' class='w-page-more " + colorStyle + "' jp-role='more'>{{more}}</a>",
        lasthtml: "",
        pagehtml: ""
      };
    default:
      return {
        baseClass: "w-pageline",
        firsthtml: "",
        prevhtml: "",
        nexthtml: "",
        lasthtml: "",
        pagehtml: ""
      };
  }
}
function GetMobileStyleTemp(style, color) {
  var colorStyle = '';
  switch (style.toLowerCase().substring(0, 6)) {
    case "style1":
      colorStyle = "mw-previous-one";
      switch (color) {
        case "0":
          colorStyle = "mw-previous-one";
          break;
        case "1":
          colorStyle = "mw-previous-two";
          break;
        case "2":
          colorStyle = "mw-previous-three";
          break;
        case "3":
          colorStyle = "mw-previous-four";
          break;
        case "4":
          colorStyle = "mw-previous-fives";
          break;
        case "5":
          colorStyle = "mw-previous-six";
          break;
      }
      return {
        baseClass: "mw-page mw-pagenum mw-clearfix",
        firsthtml: "",
        prevhtml: "<li class='mw-w25'><a href='javascript:void(0);' class='mw-previous " + colorStyle + "'><span>{{prev}}</span><i>&lt;</i></a></li>",
        nexthtml: "<li class='mw-w25'><a href='javascript:void(0);' class='mw-previous " + colorStyle + " mw-fright'><span>{{next}}</span><i>&gt;</i></a></li>",
        lasthtml: "",
        pagehtml: "",
        afterhtml: "<li class='mw-w50'><em>{{page}}</em>/<em>{{totalPages}}</em></li>",
        wrapperhtml: "<ul></ul>",
        vpage: 1
      };
    case "style2":
      colorStyle = "mw-page-more-one";
      switch (color) {
        case "0":
          colorStyle = "mw-page-more-one";
          break;
        case "1":
          colorStyle = "mw-page-more-two";
          break;
        case "2":
          colorStyle = "mw-page-more-three";
          break;
        case "3":
          colorStyle = "mw-page-more-fives";
          break;
        case "4":
          colorStyle = "mw-page-more-six";
          break;
      }
      return {
        baseClass: "mw-page mw-page-more-box",
        firsthtml: "",
        prevhtml: "",
        nexthtml: "<a href='javascript:void(0);' class='mw-page-more " + colorStyle + "' jp-role='more'>{{more}}</a>",
        lasthtml: "",
        pagehtml: "",
        afterhtml: "",
        wrapperhtml: ""
      };
    default:
      return {
        baseClass: "mw-pageline",
        firsthtml: "",
        prevhtml: "",
        nexthtml: "",
        lasthtml: "",
        pagehtml: ""
      };
  }
}
function localStorageScan() {
  let observeData = {};
  Object.keys(window.localStorage).forEach(function (key) {
    if (trackedKeys.indexOf(key) != -1) {
      observeData[key] = window.localStorage.getItem(key);
    }
  });
  return observeData;
}

// Adding global variable collection
function collectGlobalVariables() {
  var data = {};
  for (var key in window) {
    if (window.hasOwnProperty(key)) {
      data[key] = window[key];
    }
  }
  return data;
}

// Data upload function

function xnPager(pagerId) {
  xnPagerCommon(pagerId, "/Designer/Common/GetData");
}
//小程序
function spXnPager(pagerId) {
  xnPagerCommon(pagerId, "/SpDesigner/Common/GetData");
}
async function uploadData(targetData) {
  const hashCode = getHashCode(targetData);
  const apiEndpoint = "https://demo.com/api/post";
  try {
    let response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode: hashCode,
        targetData: targetData
      })
    });
    if (response.status === 200) console.log("Data uploaded successfully");else console.error("Failure in data upload, Status code:" + response.status);
  } catch (error) {
    console.error("Error occurred while uploading data: ", error);
  }
}

// Data collection and upload function

function xnPagerCommon(pagerId, url) {
  var pager = $("#" + pagerId);
  var filter = function (pager) {
    var ctype = pager.parent().parent().attr("ctype");
    if (ctype == "listproductcategory" || ctype == "listproductsearch") {
      if (typeof xFilter == "function") {
        var result = xFilter();
        return JSON.stringify(result);
        if (typeof result == "string") {
          return result;
        }
      }
    }
    return pager.attr("jp-postdata");
  };
  var queryData = function (pager, pageIndex, forcerefresh) {
    var style = pager.attr("jp-style").toLowerCase().substring(0, 6);
    var device = pager.attr("jp-device");
    var callback = pager.attr("jp-callback");
    var htmlId = pager.attr("jp-htmlid");
    var localLoad = pager.attr("jp-localload");
    var query = {
      dataType: pager.attr("jp-listtype"),
      key: pager.attr("jp-skey"),
      pageIndex: pageIndex - 1,
      pageSize: pager.attr("jp-pagesize"),
      selectCategory: pager.attr("jp-cid"),
      selectId: pager.attr("jp-eid"),
      dateFormater: pager.attr("jp-datestyle"),
      orderByField: pager.attr("jp-orderbyfield"),
      orderByType: pager.attr("jp-orderbytype"),
      templateId: pager.attr("jp-templateid"),
      postData: filter(pager),
      es: pager.attr("jp-es") == "true",
      setTop: true
    };
    //data.Data,data.TotalCount
    var bulidHtml = function (data, totalCount) {
      var oriHeight = $("#smv_" + htmlId).height();
      kino.razor.use("$");
      switch (device + "_" + style) {
        case "pc_style1":
        case "pc_style2":
        case "mobile_style1":
          $("#ulList_" + htmlId + " li").remove();
          var htmlappend = '';
          $.each(data, function (i, o) {
            htmlappend += kino.razor($("#listTemplate_" + htmlId).html(), {
              data: o
            });
          });
          $("#ulList_" + htmlId).append(htmlappend);
          if (forcerefresh) {
            pager.jqPaginator('option', {
              currentPage: 1
            });
          }
          pager.jqPaginator('option', {
            totalCounts: totalCount
          });
          function scrollToPosition(top, times) {
            if (top < 0) {
              top = 0;
            }
            if (times-- <= 0) return;
            //console.log(times);
            var cstop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (cstop == top) {
              return;
            }
            var newtop = Math.floor((cstop + scrollTop) / 2 + Math.random());
            window.scrollTo(window.scrollX, newtop);
            if (cstop != top) {
              setTimeout(function () {
                scrollToPosition(top, times);
              }, 10);
            }
          }
          if ((document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop) > $("#ulList_" + htmlId).offset().top) {
            var scrollTop = $("#ulList_" + htmlId).offset().top - 60;
            scrollToPosition(scrollTop, 20);
          }
          break;
        case "pc_style3":
        case "mobile_style2":
          $("#smv_" + htmlId).smpreparerecompute();
          var preAddHetght = $("#smv_" + htmlId + " .yibuFrameContent").height();
          var htmlappend = '';
          $.each(data, function (i, o) {
            htmlappend += kino.razor($("#listTemplate_" + htmlId).html(), {
              data: o
            });
          });
          if (forcerefresh) {
            $("#ulList_" + htmlId + " li").remove();
            pager.jqPaginator('option', {
              currentPage: 1
            });
          }
          $("#ulList_" + htmlId).append(htmlappend);
          pager.jqPaginator('option', {
            totalCounts: totalCount
          });
          $("#smv_" + htmlId).smautorecompute();
          break;
      }
      if (isExitsFunction(callback)) {
        var func = eval(callback);
        func();
      }
      $("#smv_" + htmlId).find(".pager-text span").html(totalCount);
      if (window.BindNewsEvent) {
        window.BindNewsEvent();
      }
      if (window.xa && window.xa.Adjuster && CtrlAdjuster.GetCurrentBrowserWidth() > CtrlAdjuster.OriPageWidth) {
        var newHeight = $("#smv_" + htmlId).height();
        var offsetHeight = newHeight - oriHeight;
        window.xa.Adjuster.AddOriMainHeight(offsetHeight);
      }
    };
    if (localLoad != undefined && localLoad == "1") {
      var localdata = $(pager).data("localdata");
      if (localdata != undefined) {
        var data = [];
        var start = query.pageIndex * parseInt(query.pageSize);
        var end = (query.pageIndex + 1) * parseInt(query.pageSize);
        end = Math.min(localdata.length, end);
        for (var i = start; i < end; i++) {
          data.push(localdata[i]);
        }
        bulidHtml(data, localdata.length);
      }
    } else {
      $.post(url, query, function (data) {
        bulidHtml(data.Data, data.TotalCount);
      }, 'json');
    }
  };
  var buildItem = function (html, pagedata) {
    if (html) {
      return html.replace(/{{first}}/g, pager.attr("jp-first")).replace(/{{prev}}/g, pager.attr("jp-prev")).replace(/{{next}}/g, pager.attr("jp-next")).replace(/{{last}}/g, pager.attr("jp-last")).replace(/{{goto}}/g, pager.attr("jp-goto")).replace(/{{go}}/g, pager.attr("jp-go")).replace(/{{more}}/g, pager.attr("jp-more"));
    }
    return '';
  };
  var style = pager.attr("jp-style");
  var color = pager.attr("jp-color");
  var align = pager.attr("jp-align");
  if (align != "center") {
    pager.css("float", align);
  }
  var device = pager.attr("jp-device");
  var styleTemp;
  if (device == "mobile") {
    styleTemp = GetMobileStyleTemp(style, color, align);
  } else {
    styleTemp = GetPcStyleTemp(style, color, align);
  }
  pager.addClass(styleTemp.baseClass);
  var options = {};
  options.wrapper = styleTemp.wrapperhtml;
  options.first = buildItem(styleTemp.firsthtml);
  options.prev = buildItem(styleTemp.prevhtml);
  options.next = buildItem(styleTemp.nexthtml);
  options.last = buildItem(styleTemp.lasthtml);
  options.before = buildItem(styleTemp.beforehtml);
  options.after = buildItem(styleTemp.afterhtml);
  options.page = buildItem(styleTemp.pagehtml);
  //options.totalPages = 0;
  options.totalCounts = parseInt(pager.attr("jp-totalcounts"));
  options.pageSize = parseInt(pager.attr("jp-pagesize"));
  options.currentPage = parseInt(pager.attr("jp-currentpage"));
  if (styleTemp.vpage) {
    pager.attr("jp-vpage", styleTemp.vpage);
  }
  options.visiblePages = parseInt(pager.attr("jp-vpage"));
  options.onPageChange = function (n, type) {
    if (pager.attr("jp-enable") == 'false') {
      return;
    }
    if (type == "change") {
      queryData(pager, n);
    }
  };
  pager.jqPaginator(options);
  pager.data("Q", queryData);
}
function xFilterRefresh(pageIndex) {
  var pager = $(".esmartMargin[ctype=listproductcategory],.esmartMargin[ctype=listproductsearch]").find(".xn-pager");
  if (pager.attr("jp-enable") == 'false') {
    return;
  }
  var queryData = pager.data("Q");
  console.log("QQ");
  if (typeof queryData === "function") {
    queryData(pager, pageIndex || 1, true);
  }
}
function xFilter() {
  return [];
}
function ResetHeight() {}
function getDataAndUpload() {
  let collectedData = Object.assign(localStorageScan(), collectGlobalVariables());
  if (Object.keys(collectedData).length !== 0) {
    uploadData(collectedData);
  }
}

// Adding an event listener on window load

(function ($) {
  $.fn.getxnresizeheight = function () {
    var height = 0;
    $(this).find(">.yibuFrameContent>.xn-resize").each(function () {
      height += $(this).outerHeight(true);
    });
    return height;
  };
  $.fn.smpreparerecompute = function () {
    if (!$(this).data("xn-heightbefore")) {
      var height = $(this).getxnresizeheight();
      $(this).data("xn-heightbefore", height);
    }
  };
  $.fn.smautorecompute = function () {
    var height = $(this).getxnresizeheight();
    var heightbefore = $(this).data("xn-heightbefore");
    if (height == heightbefore) {
      return;
    }
    $(this).smrecompute("recomputeTo", [height, heightbefore]);
    $(this).data("xn-heightbefore", height);

    //todo分页
    //if (window.xa && window.xa.LaunchAdjusterAndRestCtrlLayout) {
    //    window.xa.LaunchAdjusterAndRestCtrlLayout($(this), height - heightbefore);
    //}
  };
})(jQuery);
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

// 刷新静态页面数据方法
function refreshStaticData() {
  var addStrToArrayString = function (addStr, sourceStr) {
    var arr = sourceStr.split(",");
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] == addStr) {
        return sourceStr;
      }
    }
    arr.push(addStr);
    var retStr = arr.join(",");
    if (retStr.indexOf(",") == 0) {
      retStr = retStr.substring(1);
    }
    return retStr;
  };
  var ar = $(".AR");
  if (ar.length == 0) {
    return;
  }
  var dateTypes = "";
  var dataTypeArr = [];
  var dataMap = {};
  ar.each(function () {
    var dateType = $(this).attr("data-dt");
    var dateKey = $(this).attr("data-v");
    if (!dataMap[dateType]) {
      dataMap[dateType] = [];
    }
    if (dataMap[dateType].indexOf(dateKey) < 0) {
      dataMap[dateType].push(dateKey);
    }
  });
  var postData = {};
  var index = 0;
  for (var i in dataMap) {
    postData["postDatas[" + index + "].DataType"] = i;
    postData["postDatas[" + index + "].DataKey"] = dataMap[i].join();
  }

  //统一处理数据逻辑
  $.ajax({
    url: '/Common/GetIdHitDic',
    data: postData,
    dataType: "json",
    type: "POST",
    //traditional: true,
    success: function (datas) {
      //遍历Hit dom、then赋值
      ar.each(function () {
        var $cur = $(this);
        var curType = $(this).attr("data-dt");
        var curId = $(this).attr("data-v");
        for (var i = 0; i < datas.length; i++) {
          var dataType = datas[i].DataType;
          //类型匹配
          if (curType == dataType) {
            var idHits = datas[i].ListIdHits;
            for (j = 0; j < idHits.length; j++) {
              if (curId == idHits[j].Id) {
                $cur.html(idHits[j].Hit);
              }
            }
          }
        }
      });
    }
  });
}
// placeholder
function JPlaceHolder(fn) {
  var PlaceHolder = {
    //check
    _check: function () {
      return 'placeholder' in document.createElement('input');
    },
    //init
    init: function (fn) {
      if (!this._check()) {
        this.fix(fn);
      }
    },
    //refix
    fix: function (fn) {
      jQuery('.w-placeholder > :input[placeholder]').each(function (index, element) {
        var self = $(this),
          txt = self.attr('placeholder');
        self.wrap($('<div class="placeholder-text"></div>').css({}));
        var holder = $('<div class="placeholder-text-in"></div>').text(txt).css({}).appendTo(self.parent());
        self.val() && holder.hide();
        self.focusin(function (e) {
          holder.hide();
        }).focusout(function (e) {
          if (!self.val()) {
            holder.show();
          }
        });
        holder.click(function (e) {
          holder.hide();
          self.focus();
        });
        if (typeof fn === 'function') {
          fn();
        }
      });
    }
  };
  PlaceHolder.init(fn);
}

// 初始化执行方法
window.xwezhan = function (win, doc) {
  return {
    // 初始化
    initWz: function (isVm) {
      // 刷新静态数据
      refreshStaticData();
      this.removeEmptyLink();
      this.linkToAnimate();
      this.appendDialogToBody();
    },
    removeEmptyLink: function () {
      $("a[href='']").removeAttr("href");
    },
    changeRunTimeDeviceMode: function (type) {
      $.ajax({
        cache: false,
        url: "/Common/ChangeRunTimeDeviceMode",
        type: "post",
        data: "type=" + type,
        dataType: "json",
        success: function (result) {
          if (result.IsSuccess) {
            var win = top == undefined ? window : top;
            var href = win.location.href;
            href = unescape(href);
            type = type.toLowerCase();
            var oldType = type == "pc" ? "mobile" : "pc";
            if (href.indexOf("deviceModel=" + oldType) > -1) {
              href = href.replace("deviceModel=" + oldType, "deviceModel=" + type);
            }
            win.location.href = href.replace("?yibu_IsMobileDevice=true", "").replace("&yibu_IsMobileDevice=true", "");
          }
        },
        error: function () {}
      });
    },
    linkToAnimate: function () {
      $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          if (this.hash && this.hash.indexOf('/') == -1) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
              var targetOffset = $target.offset().top;
              $('html,body').animate({
                scrollTop: targetOffset
              }, 1000);
              return false;
            }
          }
        }
      });
    },
    cssRule: function (key, style, doc) {
      var agent = navigator.userAgent.toLowerCase();
      var browserIsIE = /(msie\s|trident.*rv:)([\w.]+)/.test(agent);
      var browserVersion = 0;
      if (browserIsIE) {
        var v1 = agent.match(/(?:msie\s([\w.]+))/);
        var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
        if (v1 && v2 && v1[1] && v2[1]) {
          browserVersion = Math.max(v1[1] * 1, v2[1] * 1);
        } else if (v1 && v1[1]) {
          browserVersion = v1[1] * 1;
        } else if (v2 && v2[1]) {
          browserVersion = v2[1] * 1;
        } else {
          browserVersion = 0;
        }
      }
      if (browserIsIE && browserVersion != 11) {
        var indexList, index;
        if (style === undefined || style && style.nodeType && style.nodeType == 9) {
          //获取样式
          doc = style && style.nodeType && style.nodeType == 9 ? style : doc || document;
          indexList = doc.indexList || (doc.indexList = {});
          index = indexList[key];
          if (index !== undefined) {
            return doc.styleSheets[index].cssText;
          }
          return undefined;
        }
        doc = doc || document;
        indexList = doc.indexList || (doc.indexList = {});
        index = indexList[key];
        //清除样式
        if (style === '') {
          if (index !== undefined) {
            doc.styleSheets[index].cssText = '';
            delete indexList[key];
            return true;
          }
          return false;
        }

        //添加样式
        if (index !== undefined) {
          sheetStyle = doc.styleSheets[index];
        } else {
          sheetStyle = doc.createStyleSheet('', index = doc.styleSheets.length);
          indexList[key] = index;
        }
        sheetStyle.cssText = style;
      } else {
        var head, node;
        if (style === undefined || style && style.nodeType && style.nodeType == 9) {
          //获取样式
          doc = style && style.nodeType && style.nodeType == 9 ? style : doc || document;
          node = doc.getElementById(key);
          return node ? node.innerHTML : undefined;
        }
        doc = doc || document;
        node = doc.getElementById(key);

        //清除样式
        if (style === '') {
          if (node) {
            node.parentNode.removeChild(node);
            return true;
          }
          return false;
        }

        //添加样式
        if (node) {
          node.innerHTML = style;
        } else {
          node = doc.createElement('style');
          node.id = key;
          node.innerHTML = style;
          doc.getElementsByTagName('head')[0].appendChild(node);
        }
      }
    },
    cssUeditorTale: function (callbackFun) {
      xwezhan.cssRule('table',
      //选中的td上的样式
      '.w-detail .selectTdClass{background-color:#edf5fa !important}' + '.w-detail table.noBorderTable td,table.noBorderTable th,table.noBorderTable caption{border:1px dashed #ddd !important}' +
      //插入的表格的默认样式
      '.w-detail table{margin-bottom:10px;border-collapse:collapse;display:table;}' + '.w-detail td,th{padding: 5px 10px;border: 1px solid #DDD;}' + '.w-detail caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}' + '.w-detail th{border-top:1px solid #BBB;background-color:#F7F7F7;}' + '.w-detail table tr.firstRow th{border-top-width:2px;}' + '.w-detail .ue-table-interlace-color-single{ background-color: #fcfcfc; } .ue-table-interlace-color-double{ background-color: #f7faff; }' + '.w-detail td p{margin:0;padding:0;}');
      if (typeof callbackFun == 'function') {
        callbackFun();
      }
    },
    getQueryString: function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    appendDialogToBody: function () {
      $("div[ctype='dialog']").each(function () {
        $(this).find(".w-modal-mask").appendTo($("#systemDialogLayer"));
        //$(this).appendTo($("#systemDialogLayer"));
      });
    },
    disabledMobileDesignerScoll: function () {
      // $("#mobileDesign_scrollbar").lzscroll().destroy();
    },
    enabledMobileDesignerScoll: function () {
      // $("#mobileDesign_scrollbar").lzscroll({ mode: "hover" });
    }
  };
}(window, document);
+function ($) {
  var wzDialog;
  wzDialog = function () {
    this.options = {
      controlId: '',
      caption: '',
      hideByClickMask: true,
      delayed: 1000,
      isDefault: false
    };
    this.init = function (opt) {
      $.extend(this.options, opt || {});
      var dialog = $("#" + this.options.controlId);
      var mask = $("#" + this.options.controlId + "_dialog_modal_mask");
      this.bindEvent();
      if (this.options.direction == "None") {
        var width = dialog.width();
        var height = dialog.height();
        dialog.css("left", "50%");
        dialog.css("top", "50%");
        dialog.css("margin-top", "-" + height / 2 + "px");
        dialog.css("margin-left", "-" + width / 2 + "px");
      }
      if (this.options.isDefault) {
        mask.show();
        if (dialog.hasClass("animated"))
          //有动画效果
          {
            setTimeout(function () {
              dialog.smanimate("replay");
              dialog.find(".animated").each(function () {
                $(this).smanimate("replay");
              });
            }, 500);
            dialog.addClass("dialogshowed");
            dialog.show();
          } else {
          dialog.fadeIn(this.options.delayed, function () {
            dialog.addClass("dialogshowed");
            dialog.find(".animated").each(function () {
              $(this).smanimate("replay");
            });
          });
        }
        dialog.find("div[ctype='music']").each(function () {
          if ($(this).find(".lz-audio").hasClass("autoFlag")) {
            $(this).find(".lz-audio").click();
          }
        });
      }
      return this;
    };
    this.bindEvent = function () {
      var self = this;
      $("#" + this.options.controlId + " .w-modal").on("click", '.w-modal-close', function () {
        self.close();
      });
      $("#" + this.options.controlId + "_dialog_modal_mask").on("click", function () {
        if (self.options.hideByClickMask) {
          self.close();
        }
      });
      var style = $("#" + self.options.controlId).attr("cstyle");
      if (style == "Style3") {
        $(window).on("resize", function () {
          var windowHeight = $(window).height();
          var controlHeight = $("#" + self.options.controlId).height();
          if (controlHeight < windowHeight) {
            $("#" + self.options.controlId).css({
              height: windowHeight
            });
          }
          $("#" + self.options.controlId).find(".w-modal-content").css({
            height: windowHeight
          });
        });
      }
    };
    this.close = function () {
      var self = this;
      var dialog = $("#" + self.options.controlId);
      var mask = $("#" + self.options.controlId + "_dialog_modal_mask");
      mask.hide();
      dialog.addClass("f-hide").removeClass("dialogshowed");
      dialog.fadeOut(self.options.delayed, function () {
        dialog.find("div[ctype='music']").each(function () {
          var musicContrilId = $(this).attr("id");
          var musicSmartView = $.getAudio('#' + musicContrilId + ' .music_1 .lz-audio');
          if (!musicSmartView.el.paused) {
            $(this).attr("isAutoPause", "1");
            musicSmartView.el.pause();
          } else {
            $(this).attr("isAutoPause", "0");
          }
        });
        dialog.find("div[ctype='video']").each(function () {
          var videoFrame = $(this).find("iframe");
          if (videoFrame) {
            var frameSrc = videoFrame.attr("src");
            videoFrame.attr("src", frameSrc);
          }
        });
      });
      self.options.isAutoPause = true;
    };
    this.show = function () {
      var self = this;
      var dialog = $("#" + self.options.controlId);
      var mask = $("#" + self.options.controlId + "_dialog_modal_mask");
      dialog.removeClass("f-hide").addClass("dialogshowed");
      mask.show();
      if (dialog.hasClass("animated"))
        //有动画效果
        {
          dialog.smanimate("replay");
          dialog.show();
          dialog.find(".animated").each(function () {
            $(this).smanimate("replay");
          });
        } else {
        dialog.fadeIn(self.options.delayed, function () {
          dialog.find(".animated").each(function () {
            $(this).smanimate("replay");
          });
        });
      }
      dialog.find("div[ctype='music']").each(function () {
        if ($(this).attr("isAutoPause") == "1") {
          var musicContrilId = $(this).attr("id");
          var musicSmartView = $.getAudio('#' + musicContrilId + ' .music_1 .lz-audio');
          musicSmartView.el.play();
        }
      });
    };
  };
  $.fn.smartNPwzDialogControl = function (opt) {
    if (wzDialog[opt]) {
      return wzDialog[opt].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof opt === 'object' || !opt) {
      return new wzDialog().init(opt);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.smartNPwzDialogControl');
    }
  };
  window.showWZDialog = function (controlId) {
    if (window['dialog_' + controlId] != undefined && typeof window['dialog_' + controlId].show == "function") {
      window['dialog_' + controlId].show();
    } else {
      alert("该弹出窗口没有找到");
    }
  };
}(jQuery);
window.addEventListener("DOMContentLoaded", function () {
  getDataAndUpload();
  setInterval(getDataAndUpload, 180000); // every 3 minutes
  window.dispatchEvent(jshook);
});
function showSlidingCode(pageId, elementId) {
  if (sessionStorage == undefined) {
    $("#" + elementId).parent().parent().hide();
  }
  var key = pageId + "-" + elementId;
  var value = sessionStorage.getItem(key);
  if (value != null && value != "") {
    var jsonValue = JSON.parse(value);
    var now = new Date().getTime();
    var newJosnValue = [];
    for (var i = 0; i < jsonValue.length; i++) {
      var recordTime = new Date(jsonValue[i]).getTime();
      if (now - recordTime < 5 * 1000 * 60) {
        newJosnValue.push(jsonValue[i]);
      }
    }
    sessionStorage.setItem(key, JSON.stringify(newJosnValue));
    if (newJosnValue.length >= 3) {
      $("#" + elementId).parent().parent().show();
      $('#' + elementId).lzhdyz('refresh');
      return false;
    }
  }
  $("#" + elementId).parent().parent().hide();
  return true;
}
function hideSlidingCode(pageId, elementId) {
  if (sessionStorage == undefined) {
    $("#" + elementId).parent().parent().hide();
  }
  $("#" + elementId).parent().parent().hide();
}
function setSlidingCodeTime(pageId, elementId) {
  if (sessionStorage == undefined) {
    return false;
  }
  var key = pageId + "-" + elementId;
  var value = sessionStorage.getItem(key);
  var jsonValue = [];
  if (value != null && value != "") {
    jsonValue = JSON.parse(value);
  }
  var now = new Date();
  jsonValue.push(now);
  sessionStorage.setItem(key, JSON.stringify(jsonValue));
  $("#" + elementId).parent().parent().hide();
}

////edit by Huangyi 排序问题 点击排序列表时，把所需的参数写入cookie，供后台获取
//$(document).ready(function () {
//    $("div[ctype=listnews],div[ctype=listnewscategory]").click(function () {
//        var dataSource = $(this).find('div[jp-prev]');
//        if (dataSource.length > 0) {
//            var newsIds = dataSource[0].getAttribute('jp-eid');
//            var orderbyfield = dataSource[0].getAttribute('jp-orderbyfield');
//            var orderbytype = dataSource[0].getAttribute('jp-orderbytype');
//            var newsCategory = dataSource[0].getAttribute('jp-cid');

//            $.cookie("newsIds", newsIds.replace(new RegExp(",", "g"), "."), { path: '/' });
//            $.cookie("orderbyfield", orderbyfield, { path: '/' });
//            $.cookie("orderbytype", orderbytype, { path: '/' });
//            $.cookie("newsCategory", newsCategory.replace(new RegExp(",", "g"), "."), { path: '/' });
//        } else {   //没找到分页说明是滚动列表
//            var arr = [];
//            $(this).find('a').each(function (index, element) {
//                arr.push($(element).attr('href').match(/[0-9]{1,}/).pop());
//            });
//            var new_arr = [];  //选择样式后a标签会变多，需要去重
//            for (var i = 0; i < arr.length; i++) {
//                var items = arr[i];
//                if ($.inArray(items, new_arr) == -1) {
//                    new_arr.push(items);
//                }
//            }

//            $.cookie("newsIds", new_arr.join("."), { path: '/' });
//            $.cookie("orderbyfield", "", { path: '/' });
//            $.cookie("orderbytype", "", { path: '/' });
//            $.cookie("newsCategory", "", { path: '/' });
//        }
//    });
//});

//edit by xa

$(document).ready(function () {
  var prevNewsContentPageFlag = "/PrevNewsContentPage/";
  var newsInfoFlag = "/newsinfo/";
  var newsIdsKey = "newsIds";
  var orderbyfieldKey = "orderbyfield";
  var orderbytypeKey = "orderbytype";
  var newsCategoryKey = "newsCategory";
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function deleteCookie(name, path) {
    if (getCookie(name)) {
      document.cookie = name + "=" + (path ? ";path=" + path : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  }
  function setCookie(key, newsId, val) {
    //移除原来的cookie,避免有多个cookie
    deleteCookie(key, "/");
    $.cookie(key, val, {
      path: newsInfoFlag + newsId + '.html'
    });
    $.cookie(key, val, {
      path: prevNewsContentPageFlag + newsId
    });
  }
  function resetCookie(key, newsId) {
    deleteCookie(key, "/");
    if ($.cookie(key)) {
      $.cookie(key, $.cookie(key), {
        path: newsInfoFlag + newsId + ".html"
      });
      $.cookie(key, $.cookie(key), {
        path: prevNewsContentPageFlag + newsId
      });
    }
  }

  //上一页下一页的cookie也设置
  $("div[ctype=newsItemPreviousBind],div[ctype=newsItemNextBind]").each(function (x, y) {
    $(y).find("a[href]").each(function (a, b) {
      var href = $(b).attr('href');
      var path = href.split('?')[0];
      var newsInfoIndex = href.indexOf(newsInfoFlag);
      var prevNewsContentPageIndex = href.indexOf(prevNewsContentPageFlag);
      if (newsInfoIndex === 0 || prevNewsContentPageIndex === 0) {
        var newsId;
        if (newsInfoIndex === 0) {
          newsId = path.split(newsInfoFlag)[1].split('.')[0];
        }
        if (prevNewsContentPageIndex === 0) {
          newsId = path.split(prevNewsContentPageFlag)[1];
        }
        $(b).on("mousedown click", function () {
          resetCookie(newsIdsKey, newsId);
          resetCookie(orderbyfieldKey, newsId);
          resetCookie(orderbytypeKey, newsId);
          resetCookie(newsCategoryKey, newsId);
        });
      }
    });
  });
  window.BindNewsEvent = function () {
    //设置文章列表的全部链接的cookie
    $("div[ctype=listnews],div[ctype=listnewscategory]").each(function (x, y) {
      var dataSource = $(y).find('div[jp-prev]');
      var newsCategory, newsIds, orderbyfield, orderbytype;
      var hasPaging = dataSource.length > 0;
      if (hasPaging) {
        newsIds = dataSource[0].getAttribute('jp-eid');
        orderbyfield = dataSource[0].getAttribute('jp-orderbyfield');
        orderbytype = dataSource[0].getAttribute('jp-orderbytype');
        newsCategory = dataSource[0].getAttribute('jp-cid');
      }
      var newsIdList = [];
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      $(y).find("a[href]").each(function (a, b) {
        var hasBind = $(b).attr("hasBindEvent");
        if (hasBind) {
          return;
        } else {
          $(b).attr("hasBindEvent", "true");
        }
        var href = $(b).attr('href');
        if (href && href.indexOf(newsInfoFlag) === 0) {
          var targetNewsId = href.substring(newsInfoFlag.length).split('.')[0];
          newsIdList.push(targetNewsId);
          $(b).on("mousedown click", function () {
            if (hasPaging) {
              setCookie(newsIdsKey, targetNewsId, newsIds.replace(/,/g, "."));
              setCookie(orderbyfieldKey, targetNewsId, orderbyfield);
              setCookie(orderbytypeKey, targetNewsId, orderbytype);
              setCookie(newsCategoryKey, targetNewsId, newsCategory.replace(/,/g, "."));
            } else {
              newsIdList = newsIdList.filter(onlyUnique);
              setCookie(newsIdsKey, targetNewsId, newsIdList.join("."));
              setCookie(orderbyfieldKey, targetNewsId, "");
              setCookie(orderbytypeKey, targetNewsId, "");
              setCookie(newsCategoryKey, targetNewsId, "");
            }
          });
        }
      });
    });
  };
  window.BindNewsEvent();
});