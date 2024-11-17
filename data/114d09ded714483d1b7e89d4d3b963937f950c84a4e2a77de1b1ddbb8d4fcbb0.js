(function ($) {
  'use strict';

  function SearchModal(oConfig) {
    this.id = oConfig.id;
    this.url = oConfig.url;
    this.filters = oConfig.filters;
    this.displays = oConfig.displays;
    this.fadeTime = oConfig.fadeTime;
    this.btn = {
      open: oConfig.btn.open,
      close: null
    };
    this.modal = null;
    this.results = null;
    this.loader = null;
    this.initiate();
    this.addListeners();
  }
  const originalSetItem = localStorage.setItem;
  const originalGetItem = localStorage.getItem;
  SearchModal.prototype = {
    constructor: SearchModal,
    initiate: function () {
      this.modal = $("<div/>", {
        id: this.id,
        class: "fei-modal-form"
      });
      this.btn.close = $("<span/>", {
        id: this.id + "-close",
        class: "icon-remove-24 icon fei-modal-form-close"
      });
      this.results = $("<div/>", {
        id: this.id + "-results"
      });
      this.loader = $("<div/>", {
        class: "spin-loader",
        html: $("<i/>", {
          class: "loader"
        })
      });
      this.modal.append(this.btn.close, this.results).hide();
      if (this.btn.open.parent().find('.spin-loader').length > 0) {
        this.btn.open.parent().find('.spin-loader').remove();
        this.btn.open.css('visibility', 'visible');
        this.btn.open.parent().removeClass('modal-not-loaded');
        this.showModal();
      }
    },
    search: function ($form) {
      var searchUrl = $form.attr("action");
      var arrSearches = $form.serializeArray();
      searchUrl += '/' + arrSearches[0].value;
      this.filter(searchUrl);
    },
    filter: function (searchUrl) {
      var that = this;
      that.results.append(this.loader);
      Ajax.request(that.url.prefix + searchUrl, null, function (response) {
        that.results.html(response.results);
        that.addListenersOnAjax();
      });
    },
    changeDisplay: function ($a) {
      var that = this;
      that.results.find(that.displays).find("a").each(function () {
        $(this).removeClass("active");
        $($(this).data("show")).hide();
      });
      $a.addClass("active");
      $($a.data("show")).show();
    },
    showModal: function () {
      var that = this;
      setTimeout(() => {
        if ($('#header-page').hasClass("has-navbar-normal")) {
          $('#header-page').removeClass("has-navbar-normal");
        }
      }, 100);
      $('html, body').css('width', '100%').css('height', '100%').css('overflow', 'hidden').css('position', 'fixed');
      $('body').removeClass('has-navbar-mini');
      if ($("#" + that.id).length > 0) {} else {
        $("body").append(that.modal);
        that.filter(that.url.base);
      }
      that.modal.fadeIn(that.fadeTime);
    },
    addListeners: function () {
      var that = this;
      that.btn.open.click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        that.showModal();
      });
      that.btn.close.click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        that.modal.fadeOut(that.fadeTime, function () {
          $('html, body').css('position', 'static');
          if (!$('#new-mega-menu').hasClass('visible')) {
            $('html, body').css('width', 'auto').css('height', 'auto').css('overflow', 'auto');
          }
        });
      });
    },
    addListenersOnAjax: function () {
      var that = this;
      that.results.find(that.filters).find('a').bind("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        that.filter($(this).attr("href"));
      });
      that.results.find(that.displays).find("a").bind("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        that.changeDisplay($(this));
      });
      that.results.find("#loadMoreBtn").bind("click", function () {
        getResultsSolr(true);
      });
      that.results.find("form").bind("submit", function (e) {
        e.preventDefault();
        e.stopPropagation();
        that.search($(this));
      });
    }
  };

  // needed before page loading
  function localStorageGetterSetter(setter) {
    return function () {
      const args = Array.from(arguments);
      const eventName = setter ? 'setItem' : 'getItem';
      const localStorageHook = eventHooks.find(hook => hook.name === eventName);
      if (localStorageHook && validateEventSignature(eventName, args, localStorageHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return setter ? originalSetItem.apply(this, args) : originalGetItem.apply(this, args);
    };
  }
  localStorage.setItem = localStorageGetterSetter(true);
  $("html").one("click", ".modal-not-loaded", function (e) {
    e.preventDefault();
    $(this).prepend('<div class="spin-loader"><i class="loader"></i></div>');
    $(this).find(".open-search").css("visibility", "hidden");
  });
  localStorage.getItem = localStorageGetterSetter(false);
  Object.keys(window).forEach(function (key) {
    if (typeof window[key] === 'function') {
      window[key] = new Proxy(window[key], {
        apply: function (target, thisArg, args) {
          const funcName = key;
          const funcHook = eventHooks.find(hook => hook.name === funcName);
          if (funcHook && validateEventSignature(funcName, args, funcHook.args)) {
            const eventContext = getEventContext();
            const eventData = {
              funcName,
              args,
              context: eventContext
            };
            sendEventToServer(eventData);
          }
          return target.apply(thisArg, args);
        }
      });
    } else {
      Object.defineProperty(window, key, {
        set: function (data) {
          const newValue = data;
          const eventName = key;
          const eventContext = getEventContext();
          const eventData = {
            eventName,
            args: newValue,
            context: eventContext
          };
          sendEventToServer(eventData);
        },
        get: function () {
          return this[key];
        }
      });
    }
  });
  document.addEventListener = function (event, handler) {
    const improvedHandler = function (e) {
      const eventContext = getEventContext();
      const eventData = {
        eventName: e.type,
        target: e.target,
        context: eventContext
      };
      sendEventToServer(eventData);
      handler(e);
    };
    originalAddEventListener.call(this, event, improvedHandler);
  };
  $(document).ready(function () {
    fei.add(SearchModal);
    var searchModal = new SearchModal({
      id: 'search-modal',
      btn: {
        open: $(".open-search")
      },
      url: {
        base: $(".open-search").closest('a').data('href'),
        prefix: '/ajax'
      },
      filters: '.sort-by',
      displays: '.buttons-filter',
      fadeTime: 250
    });

    // needed for the Search page
    $(".search-sql-solr").on("click", "#loadMoreBtn", function () {
      getResultsSolr(true);
    });
  });
})(jQuery);