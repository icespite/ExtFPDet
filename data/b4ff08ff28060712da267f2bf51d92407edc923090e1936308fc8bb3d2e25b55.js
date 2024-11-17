;
/*!
 * Bootstrap v3.4.0 (https://getbootstrap.com/)
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
!function (t) {
  "use strict";

  var e = jQuery.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(), function (n) {
  "use strict";

  n.fn.emulateTransitionEnd = function (t) {
    var e = !1,
      i = this;
    n(this).one("bsTransitionEnd", function () {
      e = !0;
    });
    return setTimeout(function () {
      e || n(i).trigger(n.support.transition.end);
    }, t), this;
  }, n(function () {
    n.support.transition = function o() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (var i in e) if (t.style[i] !== undefined) return {
        end: e[i]
      };
      return !1;
    }(), n.support.transition && (n.event.special.bsTransitionEnd = {
      bindType: n.support.transition.end,
      delegateType: n.support.transition.end,
      handle: function (t) {
        if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      }
    });
  });
}(jQuery), function (s) {
  "use strict";

  var e = '[data-dismiss="alert"]',
    a = function (t) {
      s(t).on("click", e, this.close);
    };
  a.VERSION = "3.4.0", a.TRANSITION_DURATION = 150, a.prototype.close = function (t) {
    var e = s(this),
      i = e.attr("data-target");
    i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), i = "#" === i ? [] : i;
    var o = s(document).find(i);
    function n() {
      o.detach().trigger("closed.bs.alert").remove();
    }
    t && t.preventDefault(), o.length || (o = e.closest(".alert")), o.trigger(t = s.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), s.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(a.TRANSITION_DURATION) : n());
  };
  var t = s.fn.alert;
  s.fn.alert = function o(i) {
    return this.each(function () {
      var t = s(this),
        e = t.data("bs.alert");
      e || t.data("bs.alert", e = new a(this)), "string" == typeof i && e[i].call(t);
    });
  }, s.fn.alert.Constructor = a, s.fn.alert.noConflict = function () {
    return s.fn.alert = t, this;
  }, s(document).on("click.bs.alert.data-api", e, a.prototype.close);
}(jQuery), function (s) {
  "use strict";

  var n = function (t, e) {
    this.$element = s(t), this.options = s.extend({}, n.DEFAULTS, e), this.isLoading = !1;
  };
  function i(o) {
    return this.each(function () {
      var t = s(this),
        e = t.data("bs.button"),
        i = "object" == typeof o && o;
      e || t.data("bs.button", e = new n(this, i)), "toggle" == o ? e.toggle() : o && e.setState(o);
    });
  }
  n.VERSION = "3.4.0", n.DEFAULTS = {
    loadingText: "loading..."
  }, n.prototype.setState = function (t) {
    var e = "disabled",
      i = this.$element,
      o = i.is("input") ? "val" : "html",
      n = i.data();
    t += "Text", null == n.resetText && i.data("resetText", i[o]()), setTimeout(s.proxy(function () {
      i[o](null == n[t] ? this.options[t] : n[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e).prop(e, !1));
    }, this), 0);
  }, n.prototype.toggle = function () {
    var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };
  var t = s.fn.button;
  s.fn.button = i, s.fn.button.Constructor = n, s.fn.button.noConflict = function () {
    return s.fn.button = t, this;
  }, s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    var e = s(t.target).closest(".btn");
    i.call(e, "toggle"), s(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    s(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type));
  });
}(jQuery), function (p) {
  "use strict";

  var c = function (t, e) {
    this.$element = p(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", p.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", p.proxy(this.pause, this)).on("mouseleave.bs.carousel", p.proxy(this.cycle, this));
  };
  function r(n) {
    return this.each(function () {
      var t = p(this),
        e = t.data("bs.carousel"),
        i = p.extend({}, c.DEFAULTS, t.data(), "object" == typeof n && n),
        o = "string" == typeof n ? n : i.slide;
      e || t.data("bs.carousel", e = new c(this, i)), "number" == typeof n ? e.to(n) : o ? e[o]() : i.interval && e.pause().cycle();
    });
  }
  c.VERSION = "3.4.0", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return;
      }
      t.preventDefault();
    }
  }, c.prototype.cycle = function (t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(p.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active);
  }, c.prototype.getItemForDirection = function (t, e) {
    var i = this.getItemIndex(e);
    if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
    var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
    return this.$items.eq(o);
  }, c.prototype.to = function (t) {
    var e = this,
      i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      e.to(t);
    }) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t));
  }, c.prototype.pause = function (t) {
    return t || (this.paused = !0), this.$element.find(".next, .prev").length && p.support.transition && (this.$element.trigger(p.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    if (!this.sliding) return this.slide("next");
  }, c.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev");
  }, c.prototype.slide = function (t, e) {
    var i = this.$element.find(".item.active"),
      o = e || this.getItemForDirection(t, i),
      n = this.interval,
      s = "next" == t ? "left" : "right",
      a = this;
    if (o.hasClass("active")) return this.sliding = !1;
    var r = o[0],
      l = p.Event("slide.bs.carousel", {
        relatedTarget: r,
        direction: s
      });
    if (this.$element.trigger(l), !l.isDefaultPrevented()) {
      if (this.sliding = !0, n && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var h = p(this.$indicators.children()[this.getItemIndex(o)]);
        h && h.addClass("active");
      }
      var d = p.Event("slid.bs.carousel", {
        relatedTarget: r,
        direction: s
      });
      return p.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), "object" == typeof o && o.length && o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
        o.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), a.sliding = !1, setTimeout(function () {
          a.$element.trigger(d);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), n && this.cycle(), this;
    }
  };
  var t = p.fn.carousel;
  p.fn.carousel = r, p.fn.carousel.Constructor = c, p.fn.carousel.noConflict = function () {
    return p.fn.carousel = t, this;
  };
  var e = function (t) {
    var e = p(this),
      i = e.attr("href");
    i && (i = i.replace(/.*(?=#[^\s]+$)/, ""));
    var o = e.attr("data-target") || i,
      n = p(document).find(o);
    if (n.hasClass("carousel")) {
      var s = p.extend({}, n.data(), e.data()),
        a = e.attr("data-slide-to");
      a && (s.interval = !1), r.call(n, s), a && n.data("bs.carousel").to(a), t.preventDefault();
    }
  };
  p(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), p(window).on("load", function () {
    p('[data-ride="carousel"]').each(function () {
      var t = p(this);
      r.call(t, t.data());
    });
  });
}(jQuery), function (a) {
  "use strict";

  var r = function (t, e) {
    this.$element = a(t), this.options = a.extend({}, r.DEFAULTS, e), this.$trigger = a('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };
  function n(t) {
    var e,
      i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
    return a(document).find(i);
  }
  function l(o) {
    return this.each(function () {
      var t = a(this),
        e = t.data("bs.collapse"),
        i = a.extend({}, r.DEFAULTS, t.data(), "object" == typeof o && o);
      !e && i.toggle && /show|hide/.test(o) && (i.toggle = !1), e || t.data("bs.collapse", e = new r(this, i)), "string" == typeof o && e[o]();
    });
  }
  r.VERSION = "3.4.0", r.TRANSITION_DURATION = 350, r.DEFAULTS = {
    toggle: !0
  }, r.prototype.dimension = function () {
    return this.$element.hasClass("width") ? "width" : "height";
  }, r.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var t,
        e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
        var i = a.Event("show.bs.collapse");
        if (this.$element.trigger(i), !i.isDefaultPrevented()) {
          e && e.length && (l.call(e, "hide"), t || e.data("bs.collapse", null));
          var o = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var n = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };
          if (!a.support.transition) return n.call(this);
          var s = a.camelCase(["scroll", o].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s]);
        }
      }
    }
  }, r.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var t = a.Event("hide.bs.collapse");
      if (this.$element.trigger(t), !t.isDefaultPrevented()) {
        var e = this.dimension();
        this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var i = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };
        if (!a.support.transition) return i.call(this);
        this.$element[e](0).one("bsTransitionEnd", a.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION);
      }
    }
  }, r.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, r.prototype.getParent = function () {
    return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (t, e) {
      var i = a(e);
      this.addAriaAndCollapsedClass(n(i), i);
    }, this)).end();
  }, r.prototype.addAriaAndCollapsedClass = function (t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
  };
  var t = a.fn.collapse;
  a.fn.collapse = l, a.fn.collapse.Constructor = r, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = t, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
    var e = a(this);
    e.attr("data-target") || t.preventDefault();
    var i = n(e),
      o = i.data("bs.collapse") ? "toggle" : e.data();
    l.call(i, o);
  });
}(jQuery), function (a) {
  "use strict";

  var r = '[data-toggle="dropdown"]',
    o = function (t) {
      a(t).on("click.bs.dropdown", this.toggle);
    };
  function l(t) {
    var e = t.attr("data-target");
    e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
    var i = e && a(document).find(e);
    return i && i.length ? i : t.parent();
  }
  function s(o) {
    o && 3 === o.which || (a(".dropdown-backdrop").remove(), a(r).each(function () {
      var t = a(this),
        e = l(t),
        i = {
          relatedTarget: this
        };
      e.hasClass("open") && (o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && a.contains(e[0], o.target) || (e.trigger(o = a.Event("hide.bs.dropdown", i)), o.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", i)))));
    }));
  }
  o.VERSION = "3.4.0", o.prototype.toggle = function (t) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var i = l(e),
        o = i.hasClass("open");
      if (s(), !o) {
        "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", s);
        var n = {
          relatedTarget: this
        };
        if (i.trigger(t = a.Event("show.bs.dropdown", n)), t.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(a.Event("shown.bs.dropdown", n));
      }
      return !1;
    }
  }, o.prototype.keydown = function (t) {
    if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
      var e = a(this);
      if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
        var i = l(e),
          o = i.hasClass("open");
        if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && i.find(r).trigger("focus"), e.trigger("click");
        var n = i.find(".dropdown-menu li:not(.disabled):visible a");
        if (n.length) {
          var s = n.index(t.target);
          38 == t.which && 0 < s && s--, 40 == t.which && s < n.length - 1 && s++, ~s || (s = 0), n.eq(s).trigger("focus");
        }
      }
    }
  };
  var t = a.fn.dropdown;
  a.fn.dropdown = function e(i) {
    return this.each(function () {
      var t = a(this),
        e = t.data("bs.dropdown");
      e || t.data("bs.dropdown", e = new o(this)), "string" == typeof i && e[i].call(t);
    });
  }, a.fn.dropdown.Constructor = o, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = t, this;
  }, a(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation();
  }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown);
}(jQuery), function (a) {
  "use strict";

  var s = function (t, e) {
    this.options = e, this.$body = a(document.body), this.$element = a(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };
  function r(o, n) {
    return this.each(function () {
      var t = a(this),
        e = t.data("bs.modal"),
        i = a.extend({}, s.DEFAULTS, t.data(), "object" == typeof o && o);
      e || t.data("bs.modal", e = new s(this, i)), "string" == typeof o ? e[o](n) : i.show && e.show(n);
    });
  }
  s.VERSION = "3.4.0", s.TRANSITION_DURATION = 300, s.BACKDROP_TRANSITION_DURATION = 150, s.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, s.prototype.toggle = function (t) {
    return this.isShown ? this.hide() : this.show(t);
  }, s.prototype.show = function (i) {
    var o = this,
      t = a.Event("show.bs.modal", {
        relatedTarget: i
      });
    this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      o.$element.one("mouseup.dismiss.bs.modal", function (t) {
        a(t.target).is(o.$element) && (o.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var t = a.support.transition && o.$element.hasClass("fade");
      o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), t && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
      var e = a.Event("shown.bs.modal", {
        relatedTarget: i
      });
      t ? o.$dialog.one("bsTransitionEnd", function () {
        o.$element.trigger("focus").trigger(e);
      }).emulateTransitionEnd(s.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(e);
    }));
  }, s.prototype.hide = function (t) {
    t && t.preventDefault(), t = a.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal());
  }, s.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (t) {
      document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
    }, this));
  }, s.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (t) {
      27 == t.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, s.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, s.prototype.hideModal = function () {
    var t = this;
    this.$element.hide(), this.backdrop(function () {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
    });
  }, s.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, s.prototype.backdrop = function (t) {
    var e = this,
      i = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var o = a.support.transition && i;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (t) {
        this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide());
      }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
      o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : t();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var n = function () {
        e.removeBackdrop(), t && t();
      };
      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : n();
    } else t && t();
  }, s.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, s.prototype.adjustDialog = function () {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    });
  }, s.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    });
  }, s.prototype.checkScrollbar = function () {
    var t = window.innerWidth;
    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar();
  }, s.prototype.setScrollbar = function () {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "";
    var n = this.scrollbarWidth;
    this.bodyIsOverflowing && (this.$body.css("padding-right", t + n), a(this.fixedContent).each(function (t, e) {
      var i = e.style.paddingRight,
        o = a(e).css("padding-right");
      a(e).data("padding-right", i).css("padding-right", parseFloat(o) + n + "px");
    }));
  }, s.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad), a(this.fixedContent).each(function (t, e) {
      var i = a(e).data("padding-right");
      a(e).removeData("padding-right"), e.style.paddingRight = i || "";
    });
  }, s.prototype.measureScrollbar = function () {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e;
  };
  var t = a.fn.modal;
  a.fn.modal = r, a.fn.modal.Constructor = s, a.fn.modal.noConflict = function () {
    return a.fn.modal = t, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
    var e = a(this),
      i = e.attr("href"),
      o = e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""),
      n = a(document).find(o),
      s = n.data("bs.modal") ? "toggle" : a.extend({
        remote: !/#/.test(i) && i
      }, n.data(), e.data());
    e.is("a") && t.preventDefault(), n.one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || n.one("hidden.bs.modal", function () {
        e.is(":visible") && e.trigger("focus");
      });
    }), r.call(n, s, this);
  });
}(jQuery), function (g) {
  "use strict";

  var m = function (t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e);
  };
  m.VERSION = "3.4.0", m.TRANSITION_DURATION = 150, m.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, m.prototype.init = function (t, e, i) {
    if (this.enabled = !0, this.type = t, this.$element = g(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && g(document).find(g.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
      click: !1,
      hover: !1,
      focus: !1
    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
      var s = o[n];
      if ("click" == s) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this));else if ("manual" != s) {
        var a = "hover" == s ? "mouseenter" : "focusin",
          r = "hover" == s ? "mouseleave" : "focusout";
        this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, g.proxy(this.leave, this));
      }
    }
    this.options.selector ? this._options = g.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, m.prototype.getDefaults = function () {
    return m.DEFAULTS;
  }, m.prototype.getOptions = function (t) {
    return (t = g.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), t;
  }, m.prototype.getDelegateOptions = function () {
    var i = {},
      o = this.getDefaults();
    return this._options && g.each(this._options, function (t, e) {
      o[t] != e && (i[t] = e);
    }), i;
  }, m.prototype.enter = function (t) {
    var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
    if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in";else {
      if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
      e.timeout = setTimeout(function () {
        "in" == e.hoverState && e.show();
      }, e.options.delay.show);
    }
  }, m.prototype.isInStateTrue = function () {
    for (var t in this.inState) if (this.inState[t]) return !0;
    return !1;
  }, m.prototype.leave = function (t) {
    var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
    if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
      if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
      e.timeout = setTimeout(function () {
        "out" == e.hoverState && e.hide();
      }, e.options.delay.hide);
    }
  }, m.prototype.show = function () {
    var t = g.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(t);
      var e = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (t.isDefaultPrevented() || !e) return;
      var i = this,
        o = this.tip(),
        n = this.getUID(this.type);
      this.setContent(), o.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && o.addClass("fade");
      var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
        a = /\s?auto?\s?/i,
        r = a.test(s);
      r && (s = s.replace(a, "") || "top"), o.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(g(document).find(this.options.container)) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var l = this.getPosition(),
        h = o[0].offsetWidth,
        d = o[0].offsetHeight;
      if (r) {
        var p = s,
          c = this.getPosition(this.$viewport);
        s = "bottom" == s && l.bottom + d > c.bottom ? "top" : "top" == s && l.top - d < c.top ? "bottom" : "right" == s && l.right + h > c.width ? "left" : "left" == s && l.left - h < c.left ? "right" : s, o.removeClass(p).addClass(s);
      }
      var f = this.getCalculatedOffset(s, l, h, d);
      this.applyPlacement(f, s);
      var u = function () {
        var t = i.hoverState;
        i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i);
      };
      g.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", u).emulateTransitionEnd(m.TRANSITION_DURATION) : u();
    }
  }, m.prototype.applyPlacement = function (t, e) {
    var i = this.tip(),
      o = i[0].offsetWidth,
      n = i[0].offsetHeight,
      s = parseInt(i.css("margin-top"), 10),
      a = parseInt(i.css("margin-left"), 10);
    isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, g.offset.setOffset(i[0], g.extend({
      using: function (t) {
        i.css({
          top: Math.round(t.top),
          left: Math.round(t.left)
        });
      }
    }, t), 0), i.addClass("in");
    var r = i[0].offsetWidth,
      l = i[0].offsetHeight;
    "top" == e && l != n && (t.top = t.top + n - l);
    var h = this.getViewportAdjustedDelta(e, t, r, l);
    h.left ? t.left += h.left : t.top += h.top;
    var d = /top|bottom/.test(e),
      p = d ? 2 * h.left - o + r : 2 * h.top - n + l,
      c = d ? "offsetWidth" : "offsetHeight";
    i.offset(t), this.replaceArrow(p, i[0][c], d);
  }, m.prototype.replaceArrow = function (t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "");
  }, m.prototype.setContent = function () {
    var t = this.tip(),
      e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
  }, m.prototype.hide = function (t) {
    var e = this,
      i = g(this.$tip),
      o = g.Event("hide.bs." + this.type);
    function n() {
      "in" != e.hoverState && i.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), t && t();
    }
    if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), g.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", n).emulateTransitionEnd(m.TRANSITION_DURATION) : n(), this.hoverState = null, this;
  }, m.prototype.fixTitle = function () {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
  }, m.prototype.hasContent = function () {
    return this.getTitle();
  }, m.prototype.getPosition = function (t) {
    var e = (t = t || this.$element)[0],
      i = "BODY" == e.tagName,
      o = e.getBoundingClientRect();
    null == o.width && (o = g.extend({}, o, {
      width: o.right - o.left,
      height: o.bottom - o.top
    }));
    var n = window.SVGElement && e instanceof window.SVGElement,
      s = i ? {
        top: 0,
        left: 0
      } : n ? null : t.offset(),
      a = {
        scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
      },
      r = i ? {
        width: g(window).width(),
        height: g(window).height()
      } : null;
    return g.extend({}, o, a, r, s);
  }, m.prototype.getCalculatedOffset = function (t, e, i, o) {
    return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
      top: e.top - o,
      left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
      top: e.top + e.height / 2 - o / 2,
      left: e.left - i
    } : {
      top: e.top + e.height / 2 - o / 2,
      left: e.left + e.width
    };
  }, m.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
    var n = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return n;
    var s = this.options.viewport && this.options.viewport.padding || 0,
      a = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var r = e.top - s - a.scroll,
        l = e.top + s - a.scroll + o;
      r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l);
    } else {
      var h = e.left - s,
        d = e.left + s + i;
      h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d);
    }
    return n;
  }, m.prototype.getTitle = function () {
    var t = this.$element,
      e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
  }, m.prototype.getUID = function (t) {
    for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
    return t;
  }, m.prototype.tip = function () {
    if (!this.$tip && (this.$tip = g(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip;
  }, m.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, m.prototype.enable = function () {
    this.enabled = !0;
  }, m.prototype.disable = function () {
    this.enabled = !1;
  }, m.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, m.prototype.toggle = function (t) {
    var e = this;
    t && ((e = g(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e);
  }, m.prototype.destroy = function () {
    var t = this;
    clearTimeout(this.timeout), this.hide(function () {
      t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null;
    });
  };
  var t = g.fn.tooltip;
  g.fn.tooltip = function e(o) {
    return this.each(function () {
      var t = g(this),
        e = t.data("bs.tooltip"),
        i = "object" == typeof o && o;
      !e && /destroy|hide/.test(o) || (e || t.data("bs.tooltip", e = new m(this, i)), "string" == typeof o && e[o]());
    });
  }, g.fn.tooltip.Constructor = m, g.fn.tooltip.noConflict = function () {
    return g.fn.tooltip = t, this;
  };
}(jQuery), function (n) {
  "use strict";

  var s = function (t, e) {
    this.init("popover", t, e);
  };
  if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
  s.VERSION = "3.4.0", s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), ((s.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function () {
    return s.DEFAULTS;
  }, s.prototype.setContent = function () {
    var t = this.tip(),
      e = this.getTitle(),
      i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
  }, s.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, s.prototype.getContent = function () {
    var t = this.$element,
      e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
  }, s.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  var t = n.fn.popover;
  n.fn.popover = function e(o) {
    return this.each(function () {
      var t = n(this),
        e = t.data("bs.popover"),
        i = "object" == typeof o && o;
      !e && /destroy|hide/.test(o) || (e || t.data("bs.popover", e = new s(this, i)), "string" == typeof o && e[o]());
    });
  }, n.fn.popover.Constructor = s, n.fn.popover.noConflict = function () {
    return n.fn.popover = t, this;
  };
}(jQuery), function (s) {
  "use strict";

  function n(t, e) {
    this.$body = s(document.body), this.$scrollElement = s(t).is(document.body) ? s(window) : s(t), this.options = s.extend({}, n.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)), this.refresh(), this.process();
  }
  function e(o) {
    return this.each(function () {
      var t = s(this),
        e = t.data("bs.scrollspy"),
        i = "object" == typeof o && o;
      e || t.data("bs.scrollspy", e = new n(this, i)), "string" == typeof o && e[o]();
    });
  }
  n.VERSION = "3.4.0", n.DEFAULTS = {
    offset: 10
  }, n.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, n.prototype.refresh = function () {
    var t = this,
      o = "offset",
      n = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), s.isWindow(this.$scrollElement[0]) || (o = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var t = s(this),
        e = t.data("target") || t.attr("href"),
        i = /^#./.test(e) && s(e);
      return i && i.length && i.is(":visible") && [[i[o]().top + n, e]] || null;
    }).sort(function (t, e) {
      return t[0] - e[0];
    }).each(function () {
      t.offsets.push(this[0]), t.targets.push(this[1]);
    });
  }, n.prototype.process = function () {
    var t,
      e = this.$scrollElement.scrollTop() + this.options.offset,
      i = this.getScrollHeight(),
      o = this.options.offset + i - this.$scrollElement.height(),
      n = this.offsets,
      s = this.targets,
      a = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), o <= e) return a != (t = s[s.length - 1]) && this.activate(t);
    if (a && e < n[0]) return this.activeTarget = null, this.clear();
    for (t = n.length; t--;) a != s[t] && e >= n[t] && (n[t + 1] === undefined || e < n[t + 1]) && this.activate(s[t]);
  }, n.prototype.activate = function (t) {
    this.activeTarget = t, this.clear();
    var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
      i = s(e).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy");
  }, n.prototype.clear = function () {
    s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };
  var t = s.fn.scrollspy;
  s.fn.scrollspy = e, s.fn.scrollspy.Constructor = n, s.fn.scrollspy.noConflict = function () {
    return s.fn.scrollspy = t, this;
  }, s(window).on("load.bs.scrollspy.data-api", function () {
    s('[data-spy="scroll"]').each(function () {
      var t = s(this);
      e.call(t, t.data());
    });
  });
}(jQuery), function (r) {
  "use strict";

  var a = function (t) {
    this.element = r(t);
  };
  function e(i) {
    return this.each(function () {
      var t = r(this),
        e = t.data("bs.tab");
      e || t.data("bs.tab", e = new a(this)), "string" == typeof i && e[i]();
    });
  }
  a.VERSION = "3.4.0", a.TRANSITION_DURATION = 150, a.prototype.show = function () {
    var t = this.element,
      e = t.closest("ul:not(.dropdown-menu)"),
      i = t.data("target");
    if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
      var o = e.find(".active:last a"),
        n = r.Event("hide.bs.tab", {
          relatedTarget: t[0]
        }),
        s = r.Event("show.bs.tab", {
          relatedTarget: o[0]
        });
      if (o.trigger(n), t.trigger(s), !s.isDefaultPrevented() && !n.isDefaultPrevented()) {
        var a = r(document).find(i);
        this.activate(t.closest("li"), e), this.activate(a, a.parent(), function () {
          o.trigger({
            type: "hidden.bs.tab",
            relatedTarget: t[0]
          }), t.trigger({
            type: "shown.bs.tab",
            relatedTarget: o[0]
          });
        });
      }
    }
  }, a.prototype.activate = function (t, e, i) {
    var o = e.find("> .active"),
      n = i && r.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);
    function s() {
      o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), n ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i();
    }
    o.length && n ? o.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION) : s(), o.removeClass("in");
  };
  var t = r.fn.tab;
  r.fn.tab = e, r.fn.tab.Constructor = a, r.fn.tab.noConflict = function () {
    return r.fn.tab = t, this;
  };
  var i = function (t) {
    t.preventDefault(), e.call(r(this), "show");
  };
  r(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
}(jQuery), function (l) {
  "use strict";

  var h = function (t, e) {
    this.options = l.extend({}, h.DEFAULTS, e);
    var i = this.options.target === h.DEFAULTS.target ? l(this.options.target) : l(document).find(this.options.target);
    this.$target = i.on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };
  function i(o) {
    return this.each(function () {
      var t = l(this),
        e = t.data("bs.affix"),
        i = "object" == typeof o && o;
      e || t.data("bs.affix", e = new h(this, i)), "string" == typeof o && e[o]();
    });
  }
  h.VERSION = "3.4.0", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = {
    offset: 0,
    target: window
  }, h.prototype.getState = function (t, e, i, o) {
    var n = this.$target.scrollTop(),
      s = this.$element.offset(),
      a = this.$target.height();
    if (null != i && "top" == this.affixed) return n < i && "top";
    if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
    var r = null == this.affixed,
      l = r ? n : s.top;
    return null != i && n <= i ? "top" : null != o && t - o <= l + (r ? a : e) && "bottom";
  }, h.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(h.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
      e = this.$element.offset();
    return this.pinnedOffset = e.top - t;
  }, h.prototype.checkPositionWithEventLoop = function () {
    setTimeout(l.proxy(this.checkPosition, this), 1);
  }, h.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var t = this.$element.height(),
        e = this.options.offset,
        i = e.top,
        o = e.bottom,
        n = Math.max(l(document).height(), l(document.body).height());
      "object" != typeof e && (o = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof o && (o = e.bottom(this.$element));
      var s = this.getState(n, t, i, o);
      if (this.affixed != s) {
        null != this.unpin && this.$element.css("top", "");
        var a = "affix" + (s ? "-" + s : ""),
          r = l.Event(a + ".bs.affix");
        if (this.$element.trigger(r), r.isDefaultPrevented()) return;
        this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix");
      }
      "bottom" == s && this.$element.offset({
        top: n - t - o
      });
    }
  };
  var t = l.fn.affix;
  l.fn.affix = i, l.fn.affix.Constructor = h, l.fn.affix.noConflict = function () {
    return l.fn.affix = t, this;
  }, l(window).on("load", function () {
    l('[data-spy="affix"]').each(function () {
      var t = l(this),
        e = t.data();
      e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e);
    });
  });
}(jQuery);
;
/*!
 * Bootstrap-select v1.10.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function (a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function (a) {
    return b(a);
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery);
}(this, function (a) {
  !function (a) {
    "use strict";

    function b(b) {
      var c = [{
        re: /[\xC0-\xC6]/g,
        ch: "A"
      }, {
        re: /[\xE0-\xE6]/g,
        ch: "a"
      }, {
        re: /[\xC8-\xCB]/g,
        ch: "E"
      }, {
        re: /[\xE8-\xEB]/g,
        ch: "e"
      }, {
        re: /[\xCC-\xCF]/g,
        ch: "I"
      }, {
        re: /[\xEC-\xEF]/g,
        ch: "i"
      }, {
        re: /[\xD2-\xD6]/g,
        ch: "O"
      }, {
        re: /[\xF2-\xF6]/g,
        ch: "o"
      }, {
        re: /[\xD9-\xDC]/g,
        ch: "U"
      }, {
        re: /[\xF9-\xFC]/g,
        ch: "u"
      }, {
        re: /[\xC7-\xE7]/g,
        ch: "c"
      }, {
        re: /[\xD1]/g,
        ch: "N"
      }, {
        re: /[\xF1]/g,
        ch: "n"
      }];
      return a.each(c, function () {
        b = b.replace(this.re, this.ch);
      }), b;
    }
    function c(a) {
      var b = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
        },
        c = "(?:" + Object.keys(b).join("|") + ")",
        d = new RegExp(c),
        e = new RegExp(c, "g"),
        f = null == a ? "" : "" + a;
      return d.test(f) ? f.replace(e, function (a) {
        return b[a];
      }) : f;
    }
    function d(b, c) {
      var d = arguments,
        f = b,
        g = c;
      [].shift.apply(d);
      var h,
        i = this.each(function () {
          var b = a(this);
          if (b.is("select")) {
            var c = b.data("selectpicker"),
              i = "object" == typeof f && f;
            if (c) {
              if (i) for (var j in i) i.hasOwnProperty(j) && (c.options[j] = i[j]);
            } else {
              var k = a.extend({}, e.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
              k.template = a.extend({}, e.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, i.template), b.data("selectpicker", c = new e(this, k, g));
            }
            "string" == typeof f && (h = c[f] instanceof Function ? c[f].apply(c, d) : c.options[f]);
          }
        });
      return "undefined" != typeof h ? h : i;
    }
    String.prototype.includes || !function () {
      var a = {}.toString,
        b = function () {
          try {
            var a = {},
              b = Object.defineProperty,
              c = b(a, a, a) && b;
          } catch (d) {}
          return c;
        }(),
        c = "".indexOf,
        d = function (b) {
          if (null == this) throw new TypeError();
          var d = String(this);
          if (b && "[object RegExp]" == a.call(b)) throw new TypeError();
          var e = d.length,
            f = String(b),
            g = f.length,
            h = arguments.length > 1 ? arguments[1] : void 0,
            i = h ? Number(h) : 0;
          i != i && (i = 0);
          var j = Math.min(Math.max(i, 0), e);
          return g + j > e ? !1 : -1 != c.call(d, f, i);
        };
      b ? b(String.prototype, "includes", {
        value: d,
        configurable: !0,
        writable: !0
      }) : String.prototype.includes = d;
    }(), String.prototype.startsWith || !function () {
      var a = function () {
          try {
            var a = {},
              b = Object.defineProperty,
              c = b(a, a, a) && b;
          } catch (d) {}
          return c;
        }(),
        b = {}.toString,
        c = function (a) {
          if (null == this) throw new TypeError();
          var c = String(this);
          if (a && "[object RegExp]" == b.call(a)) throw new TypeError();
          var d = c.length,
            e = String(a),
            f = e.length,
            g = arguments.length > 1 ? arguments[1] : void 0,
            h = g ? Number(g) : 0;
          h != h && (h = 0);
          var i = Math.min(Math.max(h, 0), d);
          if (f + i > d) return !1;
          for (var j = -1; ++j < f;) if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
          return !0;
        };
      a ? a(String.prototype, "startsWith", {
        value: c,
        configurable: !0,
        writable: !0
      }) : String.prototype.startsWith = c;
    }(), Object.keys || (Object.keys = function (a, b, c) {
      c = [];
      for (b in a) c.hasOwnProperty.call(a, b) && c.push(b);
      return c;
    }), a.fn.triggerNative = function (a) {
      var b,
        c = this[0];
      c.dispatchEvent ? ("function" == typeof Event ? b = new Event(a, {
        bubbles: !0
      }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : (c.fireEvent && (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)), this.trigger(a));
    }, a.expr[":"].icontains = function (b, c, d) {
      var e = a(b),
        f = (e.data("tokens") || e.text()).toUpperCase();
      return f.includes(d[3].toUpperCase());
    }, a.expr[":"].ibegins = function (b, c, d) {
      var e = a(b),
        f = (e.data("tokens") || e.text()).toUpperCase();
      return f.startsWith(d[3].toUpperCase());
    }, a.expr[":"].aicontains = function (b, c, d) {
      var e = a(b),
        f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
      return f.includes(d[3].toUpperCase());
    }, a.expr[":"].aibegins = function (b, c, d) {
      var e = a(b),
        f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
      return f.startsWith(d[3].toUpperCase());
    };
    var e = function (b, c, d) {
      d && (d.stopPropagation(), d.preventDefault()), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = e.prototype.val, this.render = e.prototype.render, this.refresh = e.prototype.refresh, this.setStyle = e.prototype.setStyle, this.selectAll = e.prototype.selectAll, this.deselectAll = e.prototype.deselectAll, this.destroy = e.prototype.destroy, this.remove = e.prototype.remove, this.show = e.prototype.show, this.hide = e.prototype.hide, this.init();
    };
    e.VERSION = "1.10.0", e.DEFAULTS = {
      noneSelectedText: "Nothing selected",
      noneResultsText: "No results matched {0}",
      countSelectedText: function (a, b) {
        return 1 == a ? "{0} item selected" : "{0} items selected";
      },
      maxOptionsText: function (a, b) {
        return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"];
      },
      selectAllText: "Select All",
      deselectAllText: "Deselect All",
      doneButton: !1,
      doneButtonText: "Close",
      multipleSeparator: ", ",
      styleBase: "btn",
      style: "btn-default",
      size: "auto",
      title: null,
      selectedTextFormat: "values",
      width: !1,
      container: !1,
      hideDisabled: !1,
      showSubtext: !1,
      showIcon: !0,
      showContent: !0,
      dropupAuto: !0,
      header: !1,
      liveSearch: !1,
      liveSearchPlaceholder: null,
      liveSearchNormalize: !1,
      liveSearchStyle: "contains",
      actionsBox: !1,
      iconBase: "glyphicon",
      tickIcon: "glyphicon-ok",
      showTick: !1,
      template: {
        caret: '<span class="caret"></span>'
      },
      maxOptions: !1,
      mobile: !1,
      selectOnTab: !1,
      dropdownAlignRight: !1
    }, e.prototype = {
      constructor: e,
      init: function () {
        var b = this,
          c = this.$element.attr("id");
        this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function (a) {
          a.preventDefault(), b.$button.focus();
        })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
          "hide.bs.dropdown": function (a) {
            b.$element.trigger("hide.bs.select", a);
          },
          "hidden.bs.dropdown": function (a) {
            b.$element.trigger("hidden.bs.select", a);
          },
          "show.bs.dropdown": function (a) {
            b.$element.trigger("show.bs.select", a);
          },
          "shown.bs.dropdown": function (a) {
            b.$element.trigger("shown.bs.select", a);
          }
        }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
          b.$button.addClass("bs-invalid").focus(), b.$element.on({
            "focus.bs.select": function () {
              b.$button.focus(), b.$element.off("focus.bs.select");
            },
            "shown.bs.select": function () {
              b.$element.val(b.$element.val()).off("shown.bs.select");
            },
            "rendered.bs.select": function () {
              this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select");
            }
          });
        }), setTimeout(function () {
          b.$element.trigger("loaded.bs.select");
        });
      },
      createDropdown: function () {
        var b = this.multiple || this.options.showTick ? " show-tick" : "",
          d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
          e = this.autofocus ? " autofocus" : "",
          f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
          g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
          h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
          i = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
          j = '<div class="btn-group bootstrap-select' + b + d + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + f + g + h + '<ul class="dropdown-menu inner" role="menu"></ul>' + i + "</div></div>";
        return a(j);
      },
      createView: function () {
        var a = this.createDropdown(),
          b = this.createLi();
        return a.find("ul")[0].innerHTML = b, a;
      },
      reloadLi: function () {
        this.destroyLi();
        var a = this.createLi();
        this.$menuInner[0].innerHTML = a;
      },
      destroyLi: function () {
        this.$menu.find("li").remove();
      },
      createLi: function () {
        var d = this,
          e = [],
          f = 0,
          g = document.createElement("option"),
          h = -1,
          i = function (a, b, c, d) {
            return "<li" + ("undefined" != typeof c & "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b & null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d & null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>";
          },
          j = function (a, e, f, g) {
            return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + ("undefined" != typeof f ? ' style="' + f + '"' : "") + (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ">" + a + '<span class="' + d.options.iconBase + " " + d.options.tickIcon + ' check-mark"></span></a>';
          };
        if (this.options.title && !this.multiple && (h--, !this.$element.find(".bs-title-option").length)) {
          var k = this.$element[0];
          g.className = "bs-title-option", g.appendChild(document.createTextNode(this.options.title)), g.value = "", k.insertBefore(g, k.firstChild), void 0 === a(k.options[k.selectedIndex]).attr("selected") && (g.selected = !0);
        }
        return this.$element.find("option").each(function (b) {
          var c = a(this);
          if (h++, !c.hasClass("bs-title-option")) {
            var g = this.className || "",
              k = this.style.cssText,
              l = c.data("content") ? c.data("content") : c.html(),
              m = c.data("tokens") ? c.data("tokens") : null,
              n = "undefined" != typeof c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : "",
              o = "undefined" != typeof c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : "",
              p = "OPTGROUP" === this.parentNode.tagName,
              q = this.disabled || p && this.parentNode.disabled;
            if ("" !== o && q && (o = "<span>" + o + "</span>"), d.options.hideDisabled && q && !p) return void h--;
            if (c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"), p && c.data("divider") !== !0) {
              var r = " " + this.parentNode.className || "";
              if (0 === c.index()) {
                f += 1;
                var s = this.parentNode.label,
                  t = "undefined" != typeof c.parent().data("subtext") ? '<small class="text-muted">' + c.parent().data("subtext") + "</small>" : "",
                  u = c.parent().data("icon") ? '<span class="' + d.options.iconBase + " " + c.parent().data("icon") + '"></span> ' : "";
                s = u + '<span class="text">' + s + t + "</span>", 0 !== b && e.length > 0 && (h++, e.push(i("", null, "divider", f + "div"))), h++, e.push(i(s, null, "dropdown-header" + r, f));
              }
              if (d.options.hideDisabled && q) return void h--;
              e.push(i(j(l, "opt " + g + r, k, m), b, "", f));
            } else c.data("divider") === !0 ? e.push(i("", b, "divider")) : c.data("hidden") === !0 ? e.push(i(j(l, g, k, m), b, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (h++, e.push(i("", null, "divider", f + "div"))), e.push(i(j(l, g, k, m), b)));
            d.liObj[b] = h;
          }
        }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), e.join("");
      },
      findLis: function () {
        return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis;
      },
      render: function (b) {
        var c,
          d = this;
        b !== !1 && this.$element.find("option").each(function (a) {
          var b = d.findLis().eq(d.liObj[a]);
          d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b);
        }), this.tabIndex();
        var e = this.$element.find("option").map(function () {
            if (this.selected) {
              if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
              var b,
                c = a(this),
                e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
              return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content") : e + c.html() + b;
            }
          }).toArray(),
          f = this.multiple ? e.join(this.options.multipleSeparator) : e[0];
        if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
          var g = this.options.selectedTextFormat.split(">");
          if (g.length > 1 && e.length > g[1] || 1 == g.length && e.length >= 2) {
            c = this.options.hideDisabled ? ", [disabled]" : "";
            var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + c).length,
              i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText;
            f = i.replace("{0}", e.length.toString()).replace("{1}", h.toString());
          }
        }
        void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (f = this.options.title), f || (f = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(f), this.$element.trigger("rendered.bs.select");
      },
      setStyle: function (a, b) {
        this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
        var c = a ? a : this.options.style;
        "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c));
      },
      liHeight: function (b) {
        if (b || this.options.size !== !1 && !this.sizeInfo) {
          var c = document.createElement("div"),
            d = document.createElement("div"),
            e = document.createElement("ul"),
            f = document.createElement("li"),
            g = document.createElement("li"),
            h = document.createElement("a"),
            i = document.createElement("span"),
            j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
            k = this.options.liveSearch ? document.createElement("div") : null,
            l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
            m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
          if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
            var n = document.createElement("span");
            k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k);
          }
          l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);
          var o = h.offsetHeight,
            p = j ? j.offsetHeight : 0,
            q = k ? k.offsetHeight : 0,
            r = l ? l.offsetHeight : 0,
            s = m ? m.offsetHeight : 0,
            t = a(f).outerHeight(!0),
            u = "function" == typeof getComputedStyle ? getComputedStyle(d) : !1,
            v = u ? null : a(d),
            w = parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
            x = w + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2;
          document.body.removeChild(c), this.sizeInfo = {
            liHeight: o,
            headerHeight: p,
            searchHeight: q,
            actionsHeight: r,
            doneButtonHeight: s,
            dividerHeight: t,
            menuPadding: w,
            menuExtras: x
          };
        }
      },
      setSize: function () {
        if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
          var b,
            c,
            d,
            e,
            f = this,
            g = this.$menu,
            h = this.$menuInner,
            i = a(window),
            j = this.$newElement[0].offsetHeight,
            k = this.sizeInfo.liHeight,
            l = this.sizeInfo.headerHeight,
            m = this.sizeInfo.searchHeight,
            n = this.sizeInfo.actionsHeight,
            o = this.sizeInfo.doneButtonHeight,
            p = this.sizeInfo.dividerHeight,
            q = this.sizeInfo.menuPadding,
            r = this.sizeInfo.menuExtras,
            s = this.options.hideDisabled ? ".disabled" : "",
            t = function () {
              d = f.$newElement.offset().top - i.scrollTop(), e = i.height() - d - j;
            };
          if (t(), "auto" === this.options.size) {
            var u = function () {
              var i,
                j = function (b, c) {
                  return function (d) {
                    return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b));
                  };
                },
                p = f.$menuInner[0].getElementsByTagName("li"),
                s = Array.prototype.filter ? Array.prototype.filter.call(p, j("hidden", !1)) : f.$lis.not(".hidden"),
                u = Array.prototype.filter ? Array.prototype.filter.call(s, j("dropdown-header", !0)) : s.filter(".dropdown-header");
              t(), b = e - r, f.options.container ? (g.data("height") || g.data("height", g.height()), c = g.data("height")) : c = g.height(), f.options.dropupAuto && f.$newElement.toggleClass("dropup", d > e && c > b - r), f.$newElement.hasClass("dropup") && (b = d - r), i = s.length + u.length > 3 ? 3 * k + r - 2 : 0, g.css({
                "max-height": b + "px",
                overflow: "hidden",
                "min-height": i + l + m + n + o + "px"
              }), h.css({
                "max-height": b - l - m - n - o - q + "px",
                "overflow-y": "auto",
                "min-height": Math.max(i - q, 0) + "px"
              });
            };
            u(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", u), i.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", u);
          } else if (this.options.size && "auto" != this.options.size && this.$lis.not(s).length > this.options.size) {
            var v = this.$lis.not(".divider").not(s).children().slice(0, this.options.size).last().parent().index(),
              w = this.$lis.slice(0, v + 1).filter(".divider").length;
            b = k * this.options.size + w * p + q, f.options.container ? (g.data("height") || g.data("height", g.height()), c = g.data("height")) : c = g.height(), f.options.dropupAuto && this.$newElement.toggleClass("dropup", d > e && c > b - r), g.css({
              "max-height": b + l + m + n + o + "px",
              overflow: "hidden",
              "min-height": ""
            }), h.css({
              "max-height": b - q + "px",
              "overflow-y": "auto",
              "min-height": ""
            });
          }
        }
      },
      setWidth: function () {
        if ("auto" === this.options.width) {
          this.$menu.css("min-width", "0");
          var a = this.$menu.parent().clone().appendTo("body"),
            b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
            c = a.children(".dropdown-menu").outerWidth(),
            d = b.css("width", "auto").children("button").outerWidth();
          a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px");
        } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
        this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width");
      },
      selectPosition: function () {
        this.$bsContainer = a('<div class="bs-container" />');
        var b,
          c,
          d = this,
          e = function (a) {
            d.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), c = a.hasClass("dropup") ? 0 : a[0].offsetHeight, d.$bsContainer.css({
              top: b.top + c,
              left: b.left,
              width: a[0].offsetWidth
            });
          };
        this.$button.on("click", function () {
          var b = a(this);
          d.isDisabled() || (e(d.$newElement), d.$bsContainer.appendTo(d.options.container).toggleClass("open", !b.hasClass("open")).append(d.$menu));
        }), a(window).on("resize scroll", function () {
          e(d.$newElement);
        }), this.$element.on("hide.bs.select", function () {
          d.$menu.data("height", d.$menu.height()), d.$bsContainer.detach();
        });
      },
      setSelected: function (a, b, c) {
        c || (c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b);
      },
      setDisabled: function (a, b, c) {
        c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0);
      },
      isDisabled: function () {
        return this.$element[0].disabled;
      },
      checkDisabled: function () {
        var a = this;
        this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
          return !a.isDisabled();
        });
      },
      tabIndex: function () {
        this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98);
      },
      clickListener: function () {
        var b = this,
          c = a(document);
        this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function (a) {
          a.stopPropagation();
        }), c.data("spaceSelect", !1), this.$button.on("keyup", function (a) {
          /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1));
        }), this.$button.on("click", function () {
          b.setSize();
        }), this.$element.on("shown.bs.select", function () {
          if (b.options.liveSearch || b.multiple) {
            if (!b.multiple) {
              var a = b.liObj[b.$element[0].selectedIndex];
              if ("number" != typeof a || b.options.size === !1) return;
              var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
              c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c;
            }
          } else b.$menuInner.find(".selected a").focus();
        }), this.$menuInner.on("click", "li a", function (c) {
          var d = a(this),
            e = d.parent().data("originalIndex"),
            f = b.$element.val(),
            g = b.$element.prop("selectedIndex");
          if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
            var h = b.$element.find("option"),
              i = h.eq(e),
              j = i.prop("selected"),
              k = i.parent("optgroup"),
              l = b.options.maxOptions,
              m = k.data("maxOptions") || !1;
            if (b.multiple) {
              if (i.prop("selected", !j), b.setSelected(e, !j), d.blur(), l !== !1 || m !== !1) {
                var n = l < h.filter(":selected").length,
                  o = m < k.find("option:selected").length;
                if (l && n || m && o) if (l && 1 == l) h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0);else if (m && 1 == m) {
                  k.find("option:selected").prop("selected", !1), i.prop("selected", !0);
                  var p = d.parent().data("optgroup");
                  b.$menuInner.find('[data-optgroup="' + p + '"]').removeClass("selected"), b.setSelected(e, !0);
                } else {
                  var q = "function" == typeof b.options.maxOptionsText ? b.options.maxOptionsText(l, m) : b.options.maxOptionsText,
                    r = q[0].replace("{n}", l),
                    s = q[1].replace("{n}", m),
                    t = a('<div class="notify"></div>');
                  q[2] && (r = r.replace("{var}", q[2][l > 1 ? 0 : 1]), s = s.replace("{var}", q[2][m > 1 ? 0 : 1])), i.prop("selected", !1), b.$menu.append(t), l && n && (t.append(a("<div>" + r + "</div>")), b.$element.trigger("maxReached.bs.select")), m && o && (t.append(a("<div>" + s + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                    b.setSelected(e, !1);
                  }, 10), t.delay(750).fadeOut(300, function () {
                    a(this).remove();
                  });
                }
              }
            } else h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0);
            b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (f != b.$element.val() && b.multiple || g != b.$element.prop("selectedIndex") && !b.multiple) && b.$element.trigger("changed.bs.select", [e, i.prop("selected"), j]).triggerNative("change");
          }
        }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (c) {
          c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus());
        }), this.$menuInner.on("click", ".divider, .dropdown-header", function (a) {
          a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus();
        }), this.$menu.on("click", ".popover-title .close", function () {
          b.$button.click();
        }), this.$searchbox.on("click", function (a) {
          a.stopPropagation();
        }), this.$menu.on("click", ".actions-btn", function (c) {
          b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll();
        }), this.$element.change(function () {
          b.render(!1);
        });
      },
      liveSearchListener: function () {
        var d = this,
          e = a('<li class="no-results"></li>');
        this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function () {
          d.$menuInner.find(".active").removeClass("active"), d.$searchbox.val() && (d.$searchbox.val(""), d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove()), d.multiple || d.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
            d.$searchbox.focus();
          }, 10);
        }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (a) {
          a.stopPropagation();
        }), this.$searchbox.on("input propertychange", function () {
          if (d.$searchbox.val()) {
            var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
            f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + '("' + b(d.$searchbox.val()) + '")') : f.not(":" + d._searchStyle() + '("' + d.$searchbox.val() + '")'), f.parent().addClass("hidden"), d.$lis.filter(".dropdown-header").each(function () {
              var b = a(this),
                c = b.data("optgroup");
              0 === d.$lis.filter("[data-optgroup=" + c + "]").not(b).not(".hidden").length && (b.addClass("hidden"), d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden"));
            });
            var g = d.$lis.not(".hidden");
            g.each(function (b) {
              var c = a(this);
              c.hasClass("divider") && (c.index() === g.first().index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden");
            }), d.$lis.not(".hidden, .no-results").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(), e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(), d.$menuInner.append(e));
          } else d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove();
          d.$lis.filter(".active").removeClass("active"), d.$searchbox.val() && d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), a(this).focus();
        });
      },
      _searchStyle: function () {
        var a = {
          begins: "ibegins",
          startsWith: "ibegins"
        };
        return a[this.options.liveSearchStyle] || "icontains";
      },
      val: function (a) {
        return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val();
      },
      changeAll: function (b) {
        "undefined" == typeof b && (b = !0), this.findLis();
        for (var c = this.$element.find("option"), d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", b), e = d.length, f = [], g = 0; e > g; g++) {
          var h = d[g].getAttribute("data-original-index");
          f[f.length] = c.eq(h)[0];
        }
        a(f).prop("selected", b), this.render(!1), this.$element.trigger("changed.bs.select").triggerNative("change");
      },
      selectAll: function () {
        return this.changeAll(!0);
      },
      deselectAll: function () {
        return this.changeAll(!1);
      },
      toggle: function (a) {
        a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click");
      },
      keydown: function (c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = a(this),
          n = m.is("input") ? m.parent().parent() : m.parent(),
          o = n.data("this"),
          p = ":not(.disabled, .hidden, .dropdown-header, .divider)",
          q = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
          };
        if (o.options.liveSearch && (n = m.parent().parent()), o.options.container && (n = o.$menu), d = a("[role=menu] li", n), l = o.$newElement.hasClass("open"), !l && (c.keyCode >= 48 && c.keyCode <= 57 || c.keyCode >= 96 && c.keyCode <= 105 || c.keyCode >= 65 && c.keyCode <= 90) && (o.options.container ? o.$button.trigger("click") : (o.setSize(), o.$menu.parent().addClass("open"), l = !0), o.$searchbox.focus()), o.options.liveSearch && (/(^9$|27)/.test(c.keyCode.toString(10)) && l && 0 === o.$menu.find(".active").length && (c.preventDefault(), o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus()), d = a("[role=menu] li" + p, n), m.val() || /(38|40)/.test(c.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = o.$menuInner.find("li"), d = o.options.liveSearchNormalize ? d.filter(":a" + o._searchStyle() + "(" + b(q[c.keyCode]) + ")") : d.filter(":" + o._searchStyle() + "(" + q[c.keyCode] + ")"))), d.length) {
          if (/(38|40)/.test(c.keyCode.toString(10))) e = d.index(d.find("a").filter(":focus").parent()), g = d.filter(p).first().index(), h = d.filter(p).last().index(), f = d.eq(e).nextAll(p).eq(0).index(), i = d.eq(e).prevAll(p).eq(0).index(), j = d.eq(f).prevAll(p).eq(0).index(), o.options.liveSearch && (d.each(function (b) {
            a(this).hasClass("disabled") || a(this).data("index", b);
          }), e = d.index(d.filter(".active")), g = d.first().data("index"), h = d.last().data("index"), f = d.eq(e).nextAll().eq(0).data("index"), i = d.eq(e).prevAll().eq(0).data("index"), j = d.eq(f).prevAll().eq(0).data("index")), k = m.data("prevIndex"), 38 == c.keyCode ? (o.options.liveSearch && e--, e != j && e > i && (e = i), g > e && (e = g), e == k && (e = h)) : 40 == c.keyCode && (o.options.liveSearch && e++, -1 == e && (e = 0), e != j && f > e && (e = f), e > h && (e = h), e == k && (e = g)), m.data("prevIndex", e), o.options.liveSearch ? (c.preventDefault(), m.hasClass("dropdown-toggle") || (d.removeClass("active").eq(e).addClass("active").children("a").focus(), m.focus())) : d.eq(e).children("a").focus();else if (!m.is("input")) {
            var r,
              s,
              t = [];
            d.each(function () {
              a(this).hasClass("disabled") || a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == q[c.keyCode] && t.push(a(this).index());
            }), r = a(document).data("keycount"), r++, a(document).data("keycount", r), s = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), s != q[c.keyCode] ? (r = 1, a(document).data("keycount", r)) : r >= t.length && (a(document).data("keycount", 0), r > t.length && (r = 1)), d.eq(t[r - 1]).children("a").focus();
          }
          if ((/(13|32)/.test(c.keyCode.toString(10)) || /(^9$)/.test(c.keyCode.toString(10)) && o.options.selectOnTab) && l) {
            if (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(), o.options.liveSearch) /(32)/.test(c.keyCode.toString(10)) || (o.$menuInner.find(".active a").click(), m.focus());else {
              var u = a(":focus");
              u.click(), u.focus(), c.preventDefault(), a(document).data("spaceSelect", !0);
            }
            a(document).data("keycount", 0);
          }
          (/(^9$|27)/.test(c.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch) || /(27)/.test(c.keyCode.toString(10)) && !l) && (o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus());
        }
      },
      mobile: function () {
        this.$element.addClass("mobile-device");
      },
      refresh: function () {
        this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select");
      },
      hide: function () {
        this.$newElement.hide();
      },
      show: function () {
        this.$newElement.show();
      },
      remove: function () {
        this.$newElement.remove(), this.$element.remove();
      },
      destroy: function () {
        this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker");
      }
    };
    var f = a.fn.selectpicker;
    a.fn.selectpicker = d, a.fn.selectpicker.Constructor = e, a.fn.selectpicker.noConflict = function () {
      return a.fn.selectpicker = f, this;
    }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', e.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function (a) {
      a.stopPropagation();
    }), a(window).on("load.bs.select.data-api", function () {
      a(".selectpicker").each(function () {
        var b = a(this);
        d.call(b, b.data());
      });
    });
  }(a);
});
;
/*!
 * Jasny Bootstrap v3.1.0 (http://jasny.github.com/bootstrap)
 * Copyright 2011-2014 Arnold Daniels.
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */

+function (a) {
  "use strict";

  var b = window.navigator.appName == "Microsoft Internet Explorer",
    c = function (b, c) {
      this.$element = a(b), this.$input = this.$element.find(":file");
      if (this.$input.length === 0) return;
      this.name = this.$input.attr("name") || c.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), this.$hidden.length === 0 && (this.$hidden = a('<input type="hidden">').insertBefore(this.$input)), this.$preview = this.$element.find(".fileinput-preview");
      var d = this.$preview.css("height");
      this.$preview.css("display") !== "inline" && d !== "0px" && d !== "none" && this.$preview.css("line-height", d), this.original = {
        exists: this.$element.hasClass("fileinput-exists"),
        preview: this.$preview.html(),
        hiddenVal: this.$hidden.val()
      }, this.listen();
    };
  c.prototype.listen = function () {
    this.$input.on("change.bs.fileinput", a.proxy(this.change, this)), a(this.$input[0].form).on("reset.bs.fileinput", a.proxy(this.reset, this)), this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput", a.proxy(this.trigger, this)), this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput", a.proxy(this.clear, this));
  }, c.prototype.change = function (b) {
    var c = b.target.files === undefined ? b.target && b.target.value ? [{
      name: b.target.value.replace(/^.+\\/, "")
    }] : [] : b.target.files;
    b.stopPropagation();
    if (c.length === 0) {
      this.clear();
      return;
    }
    this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name);
    var d = c[0];
    if (this.$preview.length > 0 && (typeof d.type != "undefined" ? d.type.match(/^image\/(gif|png|jpeg)$/) : d.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader != "undefined") {
      var e = new FileReader(),
        f = this.$preview,
        g = this.$element;
      e.onload = function (b) {
        var e = a("<img>");
        e[0].src = b.target.result, c[0].result = b.target.result, g.find(".fileinput-filename").text(d.name), f.css("max-height") != "none" && e.css("max-height", parseInt(f.css("max-height"), 10) - parseInt(f.css("padding-top"), 10) - parseInt(f.css("padding-bottom"), 10) - parseInt(f.css("border-top"), 10) - parseInt(f.css("border-bottom"), 10)), f.html(e), g.addClass("fileinput-exists").removeClass("fileinput-new"), g.trigger("change.bs.fileinput", c);
      }, e.readAsDataURL(d);
    } else this.$element.find(".fileinput-filename").text(d.name), this.$preview.text(d.name), this.$element.addClass("fileinput-exists").removeClass("fileinput-new"), this.$element.trigger("change.bs.fileinput");
  }, c.prototype.clear = function (a) {
    a && a.preventDefault(), this.$hidden.val(""), this.$hidden.attr("name", this.name), this.$input.attr("name", "");
    if (b) {
      var c = this.$input.clone(!0);
      this.$input.after(c), this.$input.remove(), this.$input = c;
    } else this.$input.val("");
    this.$preview.html(""), this.$element.find(".fileinput-filename").text(""), this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), a !== undefined && (this.$input.trigger("change"), this.$element.trigger("clear.bs.fileinput"));
  }, c.prototype.reset = function () {
    this.clear(), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.$element.find(".fileinput-filename").text(""), this.original.exists ? this.$element.addClass("fileinput-exists").removeClass("fileinput-new") : this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), this.$element.trigger("reset.bs.fileinput");
  }, c.prototype.trigger = function (a) {
    this.$input.trigger("click"), a.preventDefault();
  };
  var d = a.fn.fileinput;
  a.fn.fileinput = function (b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.fileinput");
      e || d.data("bs.fileinput", e = new c(this, b)), typeof b == "string" && e[b]();
    });
  }, a.fn.fileinput.Constructor = c, a.fn.fileinput.noConflict = function () {
    return a.fn.fileinput = d, this;
  }, a(document).on("click.fileinput.data-api", '[data-provides="fileinput"]', function (b) {
    var c = a(this);
    if (c.data("bs.fileinput")) return;
    c.fileinput(c.data());
    var d = a(b.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
    d.length > 0 && (b.preventDefault(), d.trigger("click.bs.fileinput"));
  });
}(window.jQuery);
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.querySelector('head').appendChild(msViewportStyle);
  }
})();
;
/*
 *  Bootstrap Auto-Hiding Navbar - v1.0.5
 *  An extension for Bootstrap's fixed navbar which hides the navbar while the page is scrolling downwards and shows it the other way. The plugin is able to show/hide the navbar programmatically as well.
 *  http://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
!function (a, b, c, d) {
  function e(b, c) {
    this.element = a(b), this.settings = a.extend({}, w, c), this._defaults = w, this._name = m, this.init();
  }
  function f(b) {
    v && (b.element.addClass("navbar-hidden").animate({
      top: -1 * parseInt(b.element.css("height"), 10)
    }, {
      queue: !1,
      duration: b.settings.animationDuration
    }), a(".dropdown.open .dropdown-toggle", b.element).dropdown("toggle"), v = !1);
  }
  function g(a) {
    v || (a.element.removeClass("navbar-hidden").animate({
      top: 0
    }, {
      queue: !1,
      duration: a.settings.animationDuration
    }), v = !0);
  }
  function h(a) {
    var b = n.scrollTop(),
      c = b - t;
    if (t = b, 0 > c) {
      if (v) return;
      (a.settings.showOnUpscroll || l >= b) && g(a);
    } else if (c > 0) {
      if (!v) return void (a.settings.showOnBottom && b + u === o.height() && g(a));
      b >= l && f(a);
    }
  }
  function i(a) {
    a.settings.disableAutohide || (s = new Date().getTime(), h(a));
  }
  function j(a) {
    o.on("scroll." + m, function () {
      new Date().getTime() - s > r ? i(a) : (clearTimeout(p), p = setTimeout(function () {
        i(a);
      }, r));
    }), n.on("resize." + m, function () {
      clearTimeout(q), q = setTimeout(function () {
        u = n.height();
      }, r);
    });
  }
  function k() {
    o.off("." + m), n.off("." + m);
  }
  var l,
    m = "autoHidingNavbar",
    n = a(b),
    o = a(c),
    p = null,
    q = null,
    r = 70,
    s = 0,
    t = null,
    u = n.height(),
    v = !0,
    w = {
      disableAutohide: !1,
      showOnUpscroll: !0,
      showOnBottom: !0,
      hideOffset: "auto",
      animationDuration: 200
    };
  e.prototype = {
    init: function () {
      return this.elements = {
        navbar: this.element
      }, this.setDisableAutohide(this.settings.disableAutohide), this.setShowOnUpscroll(this.settings.showOnUpscroll), this.setShowOnBottom(this.settings.showOnBottom), this.setHideOffset(this.settings.hideOffset), this.setAnimationDuration(this.settings.animationDuration), l = "auto" === this.settings.hideOffset ? parseInt(this.element.css("height"), 10) : this.settings.hideOffset, j(this), this.element;
    },
    setDisableAutohide: function (a) {
      return this.settings.disableAutohide = a, this.element;
    },
    setShowOnUpscroll: function (a) {
      return this.settings.showOnUpscroll = a, this.element;
    },
    setShowOnBottom: function (a) {
      return this.settings.showOnBottom = a, this.element;
    },
    setHideOffset: function (a) {
      return this.settings.hideOffset = a, this.element;
    },
    setAnimationDuration: function (a) {
      return this.settings.animationDuration = a, this.element;
    },
    show: function () {
      return g(this), this.element;
    },
    hide: function () {
      return f(this), this.element;
    },
    destroy: function () {
      return k(this), g(this), a.data(this, "plugin_" + m, null), this.element;
    }
  }, a.fn[m] = function (b) {
    var c = arguments;
    if (b === d || "object" == typeof b) return this.each(function () {
      a.data(this, "plugin_" + m) || a.data(this, "plugin_" + m, new e(this, b));
    });
    if ("string" == typeof b && "_" !== b[0] && "init" !== b) {
      var f;
      return this.each(function () {
        var d = a.data(this, "plugin_" + m);
        d instanceof e && "function" == typeof d[b] && (f = d[b].apply(d, Array.prototype.slice.call(c, 1)));
      }), f !== d ? f : this;
    }
  };
}(jQuery, window, document);
;
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery);
}(function (a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0;
    if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j *= q, m *= q, l *= q;
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j *= r, m *= r, l *= r;
      }
      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top;
      }
      return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
    }
  }
  function c() {
    f = null;
  }
  function d(a, b) {
    return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
  }
  var e,
    f,
    g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    i = Array.prototype.slice;
  if (a.event.fixHooks) for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  var k = a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function () {
      if (this.addEventListener) for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
    },
    teardown: function () {
      if (this.removeEventListener) for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function (b) {
      var c = a(b),
        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
    },
    getPageHeight: function (b) {
      return a(b).height();
    },
    settings: {
      adjustOldDeltas: !0,
      normalizeOffset: !0
    }
  };
  a.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function (a) {
      return this.unbind("mousewheel", a);
    }
  });
});
;
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;
(function (f) {
  "use strict";

  "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery);
})(function ($) {
  "use strict";

  function n(a) {
    return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
  }
  function h(a) {
    return $.isFunction(a) || $.isPlainObject(a) ? a : {
      top: a,
      left: a
    };
  }
  var p = $.scrollTo = function (a, d, b) {
    return $(window).scrollTo(a, d, b);
  };
  p.defaults = {
    axis: "xy",
    duration: 0,
    limit: !0
  };
  $.fn.scrollTo = function (a, d, b) {
    "object" === typeof d && (b = d, d = 0);
    "function" === typeof b && (b = {
      onAfter: b
    });
    "max" === a && (a = 9E9);
    b = $.extend({}, p.defaults, b);
    d = d || b.duration;
    var u = b.queue && 1 < b.axis.length;
    u && (d /= 2);
    b.offset = h(b.offset);
    b.over = h(b.over);
    return this.each(function () {
      function k(a) {
        var k = $.extend({}, b, {
          queue: !0,
          duration: d,
          complete: a && function () {
            a.call(q, e, b);
          }
        });
        r.animate(f, k);
      }
      if (null !== a) {
        var l = n(this),
          q = l ? this.contentWindow || window : this,
          r = $(q),
          e = a,
          f = {},
          t;
        switch (typeof e) {
          case "number":
          case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
              e = h(e);
              break;
            }
            e = l ? $(e) : $(e, q);
          case "object":
            if (e.length === 0) return;
            if (e.is || e.style) t = (e = $(e)).offset();
        }
        var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;
        $.each(b.axis.split(""), function (a, c) {
          var d = "x" === c ? "Left" : "Top",
            m = d.toLowerCase(),
            g = "scroll" + d,
            h = r[g](),
            n = p.max(q, c);
          t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);
          b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
          !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {}));
        });
        k(b.onAfter);
      }
    });
  };
  p.max = function (a, d) {
    var b = "x" === d ? "Width" : "Height",
      h = "scroll" + b;
    if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();
    var b = "client" + b,
      k = a.ownerDocument || a.document,
      l = k.documentElement,
      k = k.body;
    return Math.max(l[h], k[h]) - Math.min(l[b], k[b]);
  };
  $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
    get: function (a) {
      return $(a.elem)[a.prop]();
    },
    set: function (a) {
      var d = this.get(a);
      if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop();
      var b = Math.round(a.now);
      d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a));
    }
  };
  return p;
});
;
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function (e) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto);
}(function (e) {
  "use strict";

  function t(t) {
    var r = t.data;
    t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r));
  }
  function r(t) {
    var r = t.target,
      a = e(r);
    if (!a.is("[type=submit],[type=image]")) {
      var n = a.closest("[type=submit]");
      if (0 === n.length) return;
      r = n[0];
    }
    var i = this;
    if (i.clk = r, "image" == r.type) if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;else if ("function" == typeof e.fn.offset) {
      var o = a.offset();
      i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top;
    } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
    setTimeout(function () {
      i.clk = i.clk_x = i.clk_y = null;
    }, 100);
  }
  function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
      window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t);
    }
  }
  var n = {};
  n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
  var i = !!e.fn.prop;
  e.fn.attr2 = function () {
    if (!i) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments);
  }, e.fn.ajaxSubmit = function (t) {
    function r(r) {
      var a,
        n,
        i = e.param(r, t.traditional).split("&"),
        o = i.length,
        s = [];
      for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
      return s;
    }
    function o(a) {
      for (var n = new FormData(), i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
      if (t.extraData) {
        var o = r(t.extraData);
        for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]);
      }
      t.data = null;
      var s = e.extend(!0, {}, e.ajaxSettings, t, {
        contentType: !1,
        processData: !1,
        cache: !1,
        type: u || "POST"
      });
      t.uploadProgress && (s.xhr = function () {
        var r = e.ajaxSettings.xhr();
        return r.upload && r.upload.addEventListener("progress", function (e) {
          var r = 0,
            a = e.loaded || e.position,
            n = e.total;
          e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r);
        }, !1), r;
      }), s.data = null;
      var c = s.beforeSend;
      return s.beforeSend = function (e, r) {
        r.data = t.formData ? t.formData : n, c && c.call(this, e, r);
      }, e.ajax(s);
    }
    function s(r) {
      function n(e) {
        var t = null;
        try {
          e.contentWindow && (t = e.contentWindow.document);
        } catch (r) {
          a("cannot get iframe.contentWindow document: " + r);
        }
        if (t) return t;
        try {
          t = e.contentDocument ? e.contentDocument : e.document;
        } catch (r) {
          a("cannot get iframe.contentDocument: " + r), t = e.document;
        }
        return t;
      }
      function o() {
        function t() {
          try {
            var e = n(g).readyState;
            a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50);
          } catch (r) {
            a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0;
          }
        }
        var r = f.attr2("target"),
          i = f.attr2("action"),
          o = "multipart/form-data",
          c = f.attr("enctype") || f.attr("encoding") || o;
        w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
          encoding: "multipart/form-data",
          enctype: "multipart/form-data"
        }), m.timeout && (j = setTimeout(function () {
          T = !0, s(D);
        }, m.timeout));
        var l = [];
        try {
          if (m.extraData) for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
          m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
          try {
            w.submit();
          } catch (h) {
            var x = document.createElement("form").submit;
            x.apply(w);
          }
        } finally {
          w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove();
        }
      }
      function s(t) {
        if (!x.aborted && !F) {
          if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
          if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
          if (M && M.location.href != m.iframeSrc || T) {
            g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
            var r,
              i = "success";
            try {
              if (T) throw "timeout";
              var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
              if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
              var u = M.body ? M.body : M.documentElement;
              x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                var t = {
                  "content-type": m.dataType
                };
                return t[e.toLowerCase()];
              }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
              var c = (m.dataType || "").toLowerCase(),
                l = /(json|script|text)/.test(c);
              if (l || m.textarea) {
                var f = M.getElementsByTagName("textarea")[0];
                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;else if (l) {
                  var p = M.getElementsByTagName("pre")[0],
                    h = M.getElementsByTagName("body")[0];
                  p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText);
                }
              } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
              try {
                E = _(x, c, m);
              } catch (y) {
                i = "parsererror", x.error = r = y || i;
              }
            } catch (y) {
              a("error caught: ", y), i = "error", x.error = r = y || i;
            }
            x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && ! --e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
              m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null;
            }, 100);
          }
        }
      }
      var c,
        l,
        m,
        d,
        p,
        v,
        g,
        x,
        y,
        b,
        T,
        j,
        w = f[0],
        S = e.Deferred();
      if (S.abort = function (e) {
        x.abort(e);
      }, r) for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
      if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + new Date().getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
        position: "absolute",
        top: "-1000px",
        left: "-1000px"
      })), g = v[0], x = {
        aborted: 0,
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: "n/a",
        getAllResponseHeaders: function () {},
        getResponseHeader: function () {},
        setRequestHeader: function () {},
        abort: function (t) {
          var r = "timeout" === t ? "timeout" : "aborted";
          a("aborting upload... " + r), this.aborted = 1;
          try {
            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop");
          } catch (n) {}
          v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r);
        }
      }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
      if (x.aborted) return S.reject(), S;
      y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
      var D = 1,
        k = 2,
        A = e("meta[name=csrf-token]").attr("content"),
        L = e("meta[name=csrf-param]").attr("content");
      L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
      var E,
        M,
        F,
        O = 50,
        X = e.parseXML || function (e, t) {
          return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = new DOMParser().parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null;
        },
        C = e.parseJSON || function (e) {
          return window.eval("(" + e + ")");
        },
        _ = function (t, r, a) {
          var n = t.getResponseHeader("content-type") || "",
            i = "xml" === r || !r && n.indexOf("xml") >= 0,
            o = i ? t.responseXML : t.responseText;
          return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o;
        };
      return S;
    }
    if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
    var u,
      c,
      l,
      f = this;
    "function" == typeof t ? t = {
      success: t
    } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
      url: l,
      success: e.ajaxSettings.success,
      type: u || e.ajaxSettings.type,
      iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
    }, t);
    var m = {};
    if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
    if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
    var d = t.traditional;
    void 0 === d && (d = e.ajaxSettings.traditional);
    var p,
      h = [],
      v = this.formToArray(t.semantic, h);
    if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
    if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
    var g = e.param(v, d);
    p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
    var x = [];
    if (t.resetForm && x.push(function () {
      f.resetForm();
    }), t.clearForm && x.push(function () {
      f.clearForm(t.includeHidden);
    }), !t.dataType && t.target) {
      var y = t.success || function () {};
      x.push(function (r) {
        var a = t.replaceTarget ? "replaceWith" : "html";
        e(t.target)[a](r).each(y, arguments);
      });
    } else t.success && x.push(t.success);
    if (t.success = function (e, r, a) {
      for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f]);
    }, t.error) {
      var b = t.error;
      t.error = function (e, r, a) {
        var n = t.context || this;
        b.apply(n, [e, r, a, f]);
      };
    }
    if (t.complete) {
      var T = t.complete;
      t.complete = function (e, r) {
        var a = t.context || this;
        T.apply(a, [e, r, f]);
      };
    }
    var j = e("input[type=file]:enabled", this).filter(function () {
        return "" !== e(this).val();
      }),
      w = j.length > 0,
      S = "multipart/form-data",
      D = f.attr("enctype") == S || f.attr("encoding") == S,
      k = n.fileapi && n.formdata;
    a("fileAPI :" + k);
    var A,
      L = (w || D) && !k;
    t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
      A = s(v);
    }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
    for (var E = 0; E < h.length; E++) h[E] = null;
    return this.trigger("form-submit-notify", [this, t]), this;
  }, e.fn.ajaxForm = function (n) {
    if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
      var i = {
        s: this.selector,
        c: this.context
      };
      return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
        e(i.s, i.c).ajaxForm(n);
      }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this);
    }
    return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r);
  }, e.fn.ajaxFormUnbind = function () {
    return this.unbind("submit.form-plugin click.form-plugin");
  }, e.fn.formToArray = function (t, r) {
    var a = [];
    if (0 === this.length) return a;
    var i,
      o = this[0],
      s = this.attr("id"),
      u = t ? o.getElementsByTagName("*") : o.elements;
    if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
    var c, l, f, m, d, p, h;
    for (c = 0, p = u.length; p > c; c++) if (d = u[c], f = d.name, f && !d.disabled) if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
      name: f,
      value: e(d).val(),
      type: d.type
    }), a.push({
      name: f + ".x",
      value: o.clk_x
    }, {
      name: f + ".y",
      value: o.clk_y
    }));else if (m = e.fieldValue(d, !0), m && m.constructor == Array) for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
      name: f,
      value: m[l]
    });else if (n.fileapi && "file" == d.type) {
      r && r.push(d);
      var v = d.files;
      if (v.length) for (l = 0; l < v.length; l++) a.push({
        name: f,
        value: v[l],
        type: d.type
      });else a.push({
        name: f,
        value: "",
        type: d.type
      });
    } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
      name: f,
      value: m,
      type: d.type,
      required: d.required
    }));
    if (!t && o.clk) {
      var g = e(o.clk),
        x = g[0];
      f = x.name, f && !x.disabled && "image" == x.type && (a.push({
        name: f,
        value: g.val()
      }), a.push({
        name: f + ".x",
        value: o.clk_x
      }, {
        name: f + ".y",
        value: o.clk_y
      }));
    }
    return a;
  }, e.fn.formSerialize = function (t) {
    return e.param(this.formToArray(t));
  }, e.fn.fieldSerialize = function (t) {
    var r = [];
    return this.each(function () {
      var a = this.name;
      if (a) {
        var n = e.fieldValue(this, t);
        if (n && n.constructor == Array) for (var i = 0, o = n.length; o > i; i++) r.push({
          name: a,
          value: n[i]
        });else null !== n && "undefined" != typeof n && r.push({
          name: this.name,
          value: n
        });
      }
    }), e.param(r);
  }, e.fn.fieldValue = function (t) {
    for (var r = [], a = 0, n = this.length; n > a; a++) {
      var i = this[a],
        o = e.fieldValue(i, t);
      null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o));
    }
    return r;
  }, e.fieldValue = function (t, r) {
    var a = t.name,
      n = t.type,
      i = t.tagName.toLowerCase();
    if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
    if ("select" == i) {
      var o = t.selectedIndex;
      if (0 > o) return null;
      for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
        var m = u[f];
        if (m.selected) {
          var d = m.value;
          if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
          s.push(d);
        }
      }
      return s;
    }
    return e(t).val();
  }, e.fn.clearForm = function (t) {
    return this.each(function () {
      e("input,select,textarea", this).clearFields(t);
    });
  }, e.fn.clearFields = e.fn.clearInputs = function (t) {
    var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function () {
      var a = this.type,
        n = this.tagName.toLowerCase();
      r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "");
    });
  }, e.fn.resetForm = function () {
    return this.each(function () {
      ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset();
    });
  }, e.fn.enable = function (e) {
    return void 0 === e && (e = !0), this.each(function () {
      this.disabled = !e;
    });
  }, e.fn.selected = function (t) {
    return void 0 === t && (t = !0), this.each(function () {
      var r = this.type;
      if ("checkbox" == r || "radio" == r) this.checked = t;else if ("option" == this.tagName.toLowerCase()) {
        var a = e(this).parent("select");
        t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t;
      }
    });
  }, e.fn.ajaxSubmit.debug = !1;
});
;
/*!
 * JavaScript Cookie v2.1.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
})(function () {
  function extend() {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[i];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }
  function init(converter) {
    function api(key, value, attributes) {
      var result;
      if (typeof document === 'undefined') {
        return;
      }

      // Write

      if (arguments.length > 1) {
        attributes = extend({
          path: '/'
        }, api.defaults, attributes);
        if (typeof attributes.expires === 'number') {
          var expires = new Date();
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
          attributes.expires = expires;
        }
        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}
        if (!converter.write) {
          value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }
        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);
        return document.cookie = [key, '=', value, attributes.expires && '; expires=' + attributes.expires.toUTCString(),
        // use expires attribute, max-age is not supported by IE
        attributes.path && '; path=' + attributes.path, attributes.domain && '; domain=' + attributes.domain, attributes.secure ? '; secure' : ''].join('');
      }

      // Read

      if (!key) {
        result = {};
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling "get()"
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;
      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var name = parts[0].replace(rdecode, decodeURIComponent);
        var cookie = parts.slice(1).join('=');
        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }
        try {
          cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }
          if (key === name) {
            result = cookie;
            break;
          }
          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }
      return result;
    }
    api.set = api;
    api.get = function (key) {
      return api(key);
    };
    api.getJSON = function () {
      return api.apply({
        json: true
      }, [].slice.call(arguments));
    };
    api.defaults = {};
    api.remove = function (key, attributes) {
      api(key, '', extend(attributes, {
        expires: -1
      }));
    };
    api.withConverter = init;
    return api;
  }
  return init(function () {});
});
;
!function (e) {
  e(["jquery"], function (e) {
    return function () {
      function t(e, t, n) {
        return g({
          type: O.error,
          iconClass: m().iconClasses.error,
          message: e,
          optionsOverride: n,
          title: t
        });
      }
      function n(t, n) {
        return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v);
      }
      function o(e, t, n) {
        return g({
          type: O.info,
          iconClass: m().iconClasses.info,
          message: e,
          optionsOverride: n,
          title: t
        });
      }
      function s(e) {
        C = e;
      }
      function i(e, t, n) {
        return g({
          type: O.success,
          iconClass: m().iconClasses.success,
          message: e,
          optionsOverride: n,
          title: t
        });
      }
      function a(e, t, n) {
        return g({
          type: O.warning,
          iconClass: m().iconClasses.warning,
          message: e,
          optionsOverride: n,
          title: t
        });
      }
      function r(e, t) {
        var o = m();
        v || n(o), u(e, o, t) || l(o);
      }
      function c(t) {
        var o = m();
        return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove());
      }
      function l(t) {
        for (var n = v.children(), o = n.length - 1; o >= 0; o--) u(e(n[o]), t);
      }
      function u(t, n, o) {
        var s = !(!o || !o.force) && o.force;
        return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
          duration: n.hideDuration,
          easing: n.hideEasing,
          complete: function () {
            h(t);
          }
        }), !0);
      }
      function d(t) {
        return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v;
      }
      function p() {
        return {
          tapToDismiss: !0,
          toastClass: "toast",
          containerId: "toast-container",
          debug: !1,
          showMethod: "fadeIn",
          showDuration: 300,
          showEasing: "swing",
          onShown: void 0,
          hideMethod: "fadeOut",
          hideDuration: 1e3,
          hideEasing: "swing",
          onHidden: void 0,
          closeMethod: !1,
          closeDuration: !1,
          closeEasing: !1,
          closeOnHover: !0,
          extendedTimeOut: 1e3,
          iconClasses: {
            error: "toast-error",
            info: "toast-info",
            success: "toast-success",
            warning: "toast-warning"
          },
          iconClass: "toast-info",
          positionClass: "toast-top-right",
          timeOut: 5e3,
          titleClass: "toast-title",
          messageClass: "toast-message",
          escapeHtml: !1,
          target: "body",
          closeHtml: '<button type="button">&times;</button>',
          closeClass: "toast-close-button",
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1,
          progressClass: "toast-progress",
          rtl: !1
        };
      }
      function f(e) {
        C && C(e);
      }
      function g(t) {
        function o(e) {
          return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        function s() {
          c(), u(), d(), p(), g(), C(), l(), i();
        }
        function i() {
          var e = "";
          switch (t.iconClass) {
            case "toast-success":
            case "toast-info":
              e = "polite";
              break;
            default:
              e = "assertive";
          }
          I.attr("aria-live", e);
        }
        function a() {
          E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
            e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0);
          }), E.onclick && I.click(function (e) {
            E.onclick(e), b();
          });
        }
        function r() {
          I.hide(), I[E.showMethod]({
            duration: E.showDuration,
            easing: E.showEasing,
            complete: E.onShown
          }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = new Date().getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)));
        }
        function c() {
          t.iconClass && I.addClass(E.toastClass).addClass(y);
        }
        function l() {
          E.newestOnTop ? v.prepend(I) : v.append(I);
        }
        function u() {
          if (t.title) {
            var e = t.title;
            E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M);
          }
        }
        function d() {
          if (t.message) {
            var e = t.message;
            E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B);
          }
        }
        function p() {
          E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
        }
        function g() {
          E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
        }
        function C() {
          E.rtl && I.addClass("rtl");
        }
        function O(e, t) {
          if (e.preventDuplicates) {
            if (t.message === w) return !0;
            w = t.message;
          }
          return !1;
        }
        function b(t) {
          var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
            o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
            s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
          if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({
            duration: o,
            easing: s,
            complete: function () {
              h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date(), f(P);
            }
          });
        }
        function D() {
          (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = new Date().getTime() + F.maxHideTime);
        }
        function H() {
          clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({
            duration: E.showDuration,
            easing: E.showEasing
          });
        }
        function x() {
          var e = (F.hideEta - new Date().getTime()) / F.maxHideTime * 100;
          q.width(e + "%");
        }
        var E = m(),
          y = t.iconClass || E.iconClass;
        if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
          T++, v = n(E, !0);
          var k = null,
            I = e("<div/>"),
            M = e("<div/>"),
            B = e("<div/>"),
            q = e("<div/>"),
            j = e(E.closeHtml),
            F = {
              intervalId: null,
              hideEta: null,
              maxHideTime: null
            },
            P = {
              toastId: T,
              state: "visible",
              startTime: new Date(),
              options: E,
              map: t
            };
          return s(), r(), a(), f(P), E.debug && console && console.log(P), I;
        }
      }
      function m() {
        return e.extend({}, p(), b.options);
      }
      function h(e) {
        v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0));
      }
      var v,
        C,
        w,
        T = 0,
        O = {
          error: "error",
          info: "info",
          success: "success",
          warning: "warning"
        },
        b = {
          clear: r,
          remove: c,
          error: t,
          getContainer: n,
          info: o,
          options: {},
          subscribe: s,
          success: i,
          version: "2.1.3",
          warning: a
        };
      return b;
    }();
  });
}("function" == typeof define && define.amd ? define : function (e, t) {
  "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery);
});
;
(function (t, e) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], e);
  } else if (typeof exports === "object") {
    module.exports = e(require("jquery"));
  } else {
    e(t.jQuery);
  }
})(this, function (t) {
  t.transit = {
    version: "0.9.12",
    propertyMap: {
      marginLeft: "margin",
      marginRight: "margin",
      marginBottom: "margin",
      marginTop: "margin",
      paddingLeft: "padding",
      paddingRight: "padding",
      paddingBottom: "padding",
      paddingTop: "padding"
    },
    enabled: true,
    useTransitionEnd: false
  };
  var e = document.createElement("div");
  var n = {};
  function i(t) {
    if (t in e.style) return t;
    var n = ["Moz", "Webkit", "O", "ms"];
    var i = t.charAt(0).toUpperCase() + t.substr(1);
    for (var r = 0; r < n.length; ++r) {
      var s = n[r] + i;
      if (s in e.style) {
        return s;
      }
    }
  }
  function r() {
    e.style[n.transform] = "";
    e.style[n.transform] = "rotateY(90deg)";
    return e.style[n.transform] !== "";
  }
  var s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  n.transition = i("transition");
  n.transitionDelay = i("transitionDelay");
  n.transform = i("transform");
  n.transformOrigin = i("transformOrigin");
  n.filter = i("Filter");
  n.transform3d = r();
  var a = {
    transition: "transitionend",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    WebkitTransition: "webkitTransitionEnd",
    msTransition: "MSTransitionEnd"
  };
  var o = n.transitionEnd = a[n.transition] || null;
  for (var u in n) {
    if (n.hasOwnProperty(u) && typeof t.support[u] === "undefined") {
      t.support[u] = n[u];
    }
  }
  e = null;
  t.cssEase = {
    _default: "ease",
    "in": "ease-in",
    out: "ease-out",
    "in-out": "ease-in-out",
    snap: "cubic-bezier(0,1,.5,1)",
    easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
    easeInOutExpo: "cubic-bezier(1,0,0,1)",
    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
    easeInSine: "cubic-bezier(.47,0,.745,.715)",
    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
  };
  t.cssHooks["transit:transform"] = {
    get: function (e) {
      return t(e).data("transform") || new f();
    },
    set: function (e, i) {
      var r = i;
      if (!(r instanceof f)) {
        r = new f(r);
      }
      if (n.transform === "WebkitTransform" && !s) {
        e.style[n.transform] = r.toString(true);
      } else {
        e.style[n.transform] = r.toString();
      }
      t(e).data("transform", r);
    }
  };
  t.cssHooks.transform = {
    set: t.cssHooks["transit:transform"].set
  };
  t.cssHooks.filter = {
    get: function (t) {
      return t.style[n.filter];
    },
    set: function (t, e) {
      t.style[n.filter] = e;
    }
  };
  if (t.fn.jquery < "1.8") {
    t.cssHooks.transformOrigin = {
      get: function (t) {
        return t.style[n.transformOrigin];
      },
      set: function (t, e) {
        t.style[n.transformOrigin] = e;
      }
    };
    t.cssHooks.transition = {
      get: function (t) {
        return t.style[n.transition];
      },
      set: function (t, e) {
        t.style[n.transition] = e;
      }
    };
  }
  p("scale");
  p("scaleX");
  p("scaleY");
  p("translate");
  p("rotate");
  p("rotateX");
  p("rotateY");
  p("rotate3d");
  p("perspective");
  p("skewX");
  p("skewY");
  p("x", true);
  p("y", true);
  function f(t) {
    if (typeof t === "string") {
      this.parse(t);
    }
    return this;
  }
  f.prototype = {
    setFromString: function (t, e) {
      var n = typeof e === "string" ? e.split(",") : e.constructor === Array ? e : [e];
      n.unshift(t);
      f.prototype.set.apply(this, n);
    },
    set: function (t) {
      var e = Array.prototype.slice.apply(arguments, [1]);
      if (this.setter[t]) {
        this.setter[t].apply(this, e);
      } else {
        this[t] = e.join(",");
      }
    },
    get: function (t) {
      if (this.getter[t]) {
        return this.getter[t].apply(this);
      } else {
        return this[t] || 0;
      }
    },
    setter: {
      rotate: function (t) {
        this.rotate = b(t, "deg");
      },
      rotateX: function (t) {
        this.rotateX = b(t, "deg");
      },
      rotateY: function (t) {
        this.rotateY = b(t, "deg");
      },
      scale: function (t, e) {
        if (e === undefined) {
          e = t;
        }
        this.scale = t + "," + e;
      },
      skewX: function (t) {
        this.skewX = b(t, "deg");
      },
      skewY: function (t) {
        this.skewY = b(t, "deg");
      },
      perspective: function (t) {
        this.perspective = b(t, "px");
      },
      x: function (t) {
        this.set("translate", t, null);
      },
      y: function (t) {
        this.set("translate", null, t);
      },
      translate: function (t, e) {
        if (this._translateX === undefined) {
          this._translateX = 0;
        }
        if (this._translateY === undefined) {
          this._translateY = 0;
        }
        if (t !== null && t !== undefined) {
          this._translateX = b(t, "px");
        }
        if (e !== null && e !== undefined) {
          this._translateY = b(e, "px");
        }
        this.translate = this._translateX + "," + this._translateY;
      }
    },
    getter: {
      x: function () {
        return this._translateX || 0;
      },
      y: function () {
        return this._translateY || 0;
      },
      scale: function () {
        var t = (this.scale || "1,1").split(",");
        if (t[0]) {
          t[0] = parseFloat(t[0]);
        }
        if (t[1]) {
          t[1] = parseFloat(t[1]);
        }
        return t[0] === t[1] ? t[0] : t;
      },
      rotate3d: function () {
        var t = (this.rotate3d || "0,0,0,0deg").split(",");
        for (var e = 0; e <= 3; ++e) {
          if (t[e]) {
            t[e] = parseFloat(t[e]);
          }
        }
        if (t[3]) {
          t[3] = b(t[3], "deg");
        }
        return t;
      }
    },
    parse: function (t) {
      var e = this;
      t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (t, n, i) {
        e.setFromString(n, i);
      });
    },
    toString: function (t) {
      var e = [];
      for (var i in this) {
        if (this.hasOwnProperty(i)) {
          if (!n.transform3d && (i === "rotateX" || i === "rotateY" || i === "perspective" || i === "transformOrigin")) {
            continue;
          }
          if (i[0] !== "_") {
            if (t && i === "scale") {
              e.push(i + "3d(" + this[i] + ",1)");
            } else if (t && i === "translate") {
              e.push(i + "3d(" + this[i] + ",0)");
            } else {
              e.push(i + "(" + this[i] + ")");
            }
          }
        }
      }
      return e.join(" ");
    }
  };
  function c(t, e, n) {
    if (e === true) {
      t.queue(n);
    } else if (e) {
      t.queue(e, n);
    } else {
      t.each(function () {
        n.call(this);
      });
    }
  }
  function l(e) {
    var i = [];
    t.each(e, function (e) {
      e = t.camelCase(e);
      e = t.transit.propertyMap[e] || t.cssProps[e] || e;
      e = h(e);
      if (n[e]) e = h(n[e]);
      if (t.inArray(e, i) === -1) {
        i.push(e);
      }
    });
    return i;
  }
  function d(e, n, i, r) {
    var s = l(e);
    if (t.cssEase[i]) {
      i = t.cssEase[i];
    }
    var a = "" + y(n) + " " + i;
    if (parseInt(r, 10) > 0) {
      a += " " + y(r);
    }
    var o = [];
    t.each(s, function (t, e) {
      o.push(e + " " + a);
    });
    return o.join(", ");
  }
  t.fn.transition = t.fn.transit = function (e, i, r, s) {
    var a = this;
    var u = 0;
    var f = true;
    var l = t.extend(true, {}, e);
    if (typeof i === "function") {
      s = i;
      i = undefined;
    }
    if (typeof i === "object") {
      r = i.easing;
      u = i.delay || 0;
      f = typeof i.queue === "undefined" ? true : i.queue;
      s = i.complete;
      i = i.duration;
    }
    if (typeof r === "function") {
      s = r;
      r = undefined;
    }
    if (typeof l.easing !== "undefined") {
      r = l.easing;
      delete l.easing;
    }
    if (typeof l.duration !== "undefined") {
      i = l.duration;
      delete l.duration;
    }
    if (typeof l.complete !== "undefined") {
      s = l.complete;
      delete l.complete;
    }
    if (typeof l.queue !== "undefined") {
      f = l.queue;
      delete l.queue;
    }
    if (typeof l.delay !== "undefined") {
      u = l.delay;
      delete l.delay;
    }
    if (typeof i === "undefined") {
      i = t.fx.speeds._default;
    }
    if (typeof r === "undefined") {
      r = t.cssEase._default;
    }
    i = y(i);
    var p = d(l, i, r, u);
    var h = t.transit.enabled && n.transition;
    var b = h ? parseInt(i, 10) + parseInt(u, 10) : 0;
    if (b === 0) {
      var g = function (t) {
        a.css(l);
        if (s) {
          s.apply(a);
        }
        if (t) {
          t();
        }
      };
      c(a, f, g);
      return a;
    }
    var m = {};
    var v = function (e) {
      var i = false;
      var r = function () {
        if (i) {
          a.unbind(o, r);
        }
        if (b > 0) {
          a.each(function () {
            this.style[n.transition] = m[this] || null;
          });
        }
        if (typeof s === "function") {
          s.apply(a);
        }
        if (typeof e === "function") {
          e();
        }
      };
      if (b > 0 && o && t.transit.useTransitionEnd) {
        i = true;
        a.bind(o, r);
      } else {
        window.setTimeout(r, b);
      }
      a.each(function () {
        if (b > 0) {
          this.style[n.transition] = p;
        }
        t(this).css(l);
      });
    };
    var z = function (t) {
      this.offsetWidth;
      v(t);
    };
    c(a, f, z);
    return this;
  };
  function p(e, i) {
    if (!i) {
      t.cssNumber[e] = true;
    }
    t.transit.propertyMap[e] = n.transform;
    t.cssHooks[e] = {
      get: function (n) {
        var i = t(n).css("transit:transform");
        return i.get(e);
      },
      set: function (n, i) {
        var r = t(n).css("transit:transform");
        r.setFromString(e, i);
        t(n).css({
          "transit:transform": r
        });
      }
    };
  }
  function h(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }
  function b(t, e) {
    if (typeof t === "string" && !t.match(/^[\-0-9\.]+$/)) {
      return t;
    } else {
      return "" + t + e;
    }
  }
  function y(e) {
    var n = e;
    if (typeof n === "string" && !n.match(/^[\-0-9\.]+/)) {
      n = t.fx.speeds[n] || t.fx.speeds._default;
    }
    return b(n, "ms");
  }
  t.transit.getTransitionValue = d;
  return t;
});
;
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = function () {
  "use strict";

  function t(t, e) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E";
  }
  function e(t) {
    if (t.srcset && !p && window.picturefill) {
      var e = window.picturefill._;
      t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
        reselect: !0
      }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
        reselect: !0
      })), t.currentSrc = t[e.ns].curSrc || t.src;
    }
  }
  function i(t) {
    for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = u.exec(i));) r[e[1]] = e[2];
    return r;
  }
  function r(e, i, r) {
    var n = t(i || 1, r || 0);
    b.call(e, "src") !== n && h.call(e, "src", n);
  }
  function n(t, e) {
    t.naturalWidth ? e(t) : setTimeout(n, 100, t, e);
  }
  function c(t) {
    var c = i(t),
      o = t[l];
    if (c["object-fit"] = c["object-fit"] || "fill", !o.img) {
      if ("fill" === c["object-fit"]) return;
      if (!o.skipTest && f && !c["object-position"]) return;
    }
    if (!o.img) {
      o.img = new Image(t.width, t.height), o.img.srcset = b.call(t, "data-ofi-srcset") || t.srcset, o.img.src = b.call(t, "data-ofi-src") || t.src, h.call(t, "data-ofi-src", t.src), t.srcset && h.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
      try {
        s(t);
      } catch (t) {
        window.console && console.warn("https://bit.ly/ofi-old-browser");
      }
    }
    e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c["object-fit"]) ? n(o.img, function () {
      o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto";
    }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function (e) {
      r(t, e.naturalWidth, e.naturalHeight);
    });
  }
  function s(t) {
    var e = {
      get: function (e) {
        return t[l].img[e ? e : "src"];
      },
      set: function (e, i) {
        return t[l].img[i ? i : "src"] = e, h.call(t, "data-ofi-" + i, e), c(t), e;
      }
    };
    Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
      get: function () {
        return e.get("currentSrc");
      }
    }), Object.defineProperty(t, "srcset", {
      get: function () {
        return e.get("srcset");
      },
      set: function (t) {
        return e.set(t, "srcset");
      }
    });
  }
  function o() {
    function t(t, e) {
      return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t;
    }
    d || (HTMLImageElement.prototype.getAttribute = function (e) {
      return b.call(t(this, e), e);
    }, HTMLImageElement.prototype.setAttribute = function (e, i) {
      return h.call(t(this, e), e, String(i));
    });
  }
  function a(t, e) {
    var i = !y && !t;
    if (e = e || {}, t = t || "img", d && !e.skipTest || !m) return !1;
    "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
    for (var r = 0; r < t.length; r++) t[r][l] = t[r][l] || {
      skipTest: e.skipTest
    }, c(t[r]);
    i && (document.body.addEventListener("load", function (t) {
      "IMG" === t.target.tagName && a(t.target, {
        skipTest: e.skipTest
      });
    }, !0), y = !0, t = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t, {
      skipTest: e.skipTest
    }));
  }
  var l = "bfred-it:object-fit-images",
    u = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
    g = "undefined" == typeof Image ? {
      style: {
        "object-position": 1
      }
    } : new Image(),
    f = "object-fit" in g.style,
    d = "object-position" in g.style,
    m = "background-size" in g.style,
    p = "string" == typeof g.currentSrc,
    b = g.getAttribute,
    h = g.setAttribute,
    y = !1;
  return a.supportsObjectFit = f, a.supportsObjectPosition = d, o(), a;
}();
;
var HashSearch = new function () {
  var params;
  this.set = function (key, value) {
    params[key] = value;
    this.push();
  };
  this.remove = function (key, value) {
    delete params[key];
    this.push();
  };
  this.get = function (key, value) {
    console.log(params);
    return params[key];
  };
  this.keyExists = function (key) {
    return params.hasOwnProperty(key);
  };
  this.push = function () {
    var hashBuilder = [],
      key,
      value;
    for (key in params) if (params.hasOwnProperty(key)) {
      key = escape(key), value = escape(params[key]); // escape(undefined) == "undefined"
      hashBuilder.push(key + (value !== "undefined" ? '=' + value : ""));
    }
    window.location.hash = hashBuilder.join("&");
  };
  (this.load = function () {
    params = {};
    var hashStr = window.location.hash,
      hashArray,
      keyVal;
    hashStr = hashStr.substring(1, hashStr.length);
    hashArray = hashStr.split('&');
    for (var i = 0; i < hashArray.length; i++) {
      keyVal = hashArray[i].split('=');
      params[unescape(keyVal[0])] = typeof keyVal[1] != "undefined" ? unescape(keyVal[1]) : keyVal[1];
    }
  })();
}();
var Ajax = {
  /**
   * Main Ajax request
   * @param  {string}   route
   * @param  {object}   data
   * @param  {function} callback
   * @param  {function} callbackError
   */
  request: function (route, data, callback, callbackError, method) {
    method = method || 'POST';
    $.ajax({
      cache: false,
      type: method,
      timeout: 10000,
      data: data,
      url: route,
      success: function (response) {
        // if (typeof response == 'string' && response.indexOf('_sign_|_in_') > -1) {
        //     $(location).attr('href', Routing.generate('login'));
        // }

        if (typeof callback == "function") {
          callback(response);
        }
      },
      error: function (data) {
        if (typeof callbackError == 'function') {
          callbackError(data);
        } else {
          //display a default template
        }
      },
      complete: function () {
        //Tooltip.init();
      }
    });
  },
  /**
   * Submit a form through an ajax request
   * @param  {string}   formSelector
   * @param  {Function} callback
   * @param  {Function} callbackError
   * @param  {Object}   additionalValues
   *
   * @return
   */
  submitForm: function (formSelector, callback, callbackError, additionalValues) {
    $form = $(formSelector);
    if ($form.attr('enctype') == 'multipart/form-data') {
      Ajax.submitMultipartForm($form, callback, callbackError);
    } else {
      var data = {};
      $.each($form.serializeArray(), function (i, value) {
        data[value.name] = value.value;
      });
      if (typeof additionalValues == 'object') {
        $.each(additionalValues, function (i, value) {
          data[i] = value;
        });
      }
      Ajax.request($form.attr('action'), data, callback, callbackError);
    }
  },
  /**
   * Submit a symfony form with file data
   * @param  {string}   route
   * @param  {object}   $form
   * @param  {string}   loaderWrapperSelector
   * @param  {Function} callback
   * @param  {Function}   callbackError
   *
   * @return
   */
  submitMultipartForm: function ($form, callback, callbackError) {
    var options = {
      type: 'POST',
      url: $form.attr('action'),
      success: function (response) {
        // if (typeof response == 'string' && response.indexOf('_sign_|_in_') > -1) {
        //     $(location).attr('href', Routing.generate('login'));
        // }

        if (typeof callback == "function") {
          callback(response);
        }
      },
      error: function (response) {
        if (typeof callbackError == 'function') {
          callbackError(data);
        }
      }
    };
    $form.ajaxSubmit(options);
  }
};
;
var Like = {
  cookieName: 'likedNodes',
  initialize: function () {
    Like.prepareNodes();
    Like.likeTrigger();
  },
  prepareNodes: function () {
    // Color node already liked and add "liked" class to avoid duplicate likes
    $('.node-likable').each(function (obj) {
      if (Like.cookiesContains($(this).attr('data-nid'))) {
        $('.like-node', $(this)).addClass('liked');
      }
    });
  },
  likeTrigger: function () {
    // Click on "like" link
    $('.like-node').on('click', function () {
      //:not(.liked)
      if ($(this).hasClass('liked')) {
        return;
      }
      var $self = $(this);
      var $wrapper = $(this).closest($self.attr('data-wrapper'));
      var nid = $wrapper.attr('data-nid');
      var data = {
        'csrfToken': csrfToken,
        'nid': nid
      };

      // Ajax request to add one like to the node
      Ajax.request('/api/like-node', data, function (response) {
        if (response.valid) {
          $('.counter', $wrapper).text(response.newCounter);
          Like.addNidInCookies(nid);
          //$('.like-node', $wrapper).addClass('liked');
          $($self.attr('data-wrapper') + '[data-nid="' + nid + '"] .like-node').addClass('liked');
          $($self.attr('data-wrapper') + '[data-nid="' + nid + '"] .counter').text(response.newCounter);
        }
      });
    });
  },
  /**
   * Get nodes likes stored in cookies
   * @return {array} Nids
   */
  getLikedNodesFromCookies: function () {
    var likedNodes = Cookies.get(Like.cookieName) || '';
    likedNodes = likedNodes.split(',');
    return likedNodes;
  },
  /**
   * Add the supplied nid in cookies
   * @param {int} nid
   */
  addNidInCookies: function (nid) {
    var likedNodes = Like.getLikedNodesFromCookies();
    if ($.inArray(nid, likedNodes) == -1) {
      likedNodes.push(nid);
    }
    likedNodes = likedNodes.join(',');
    Cookies.set(Like.cookieName, likedNodes, {
      expires: 365
    });
  },
  /**
   * Check if cookies contains the supplied nid
   * @param  {int} nid
   * @return {bool}
   */
  cookiesContains: function (nid) {
    var likedNodes = Like.getLikedNodesFromCookies();
    var found = false;
    $.each(likedNodes, function (index, value) {
      if (value == nid) {
        found = true;
        return;
      }
    });
    return found;
  },
  /**
  * Bind likable elements after lazy loading
  */
  rebindLikeElements: function () {
    if ($('.node-likable').length) {
      Like.initialize();
    }
  }
};
;
var Slideshow = {
  new: function ($element) {
    $self = $element;
    var carousel = $self.owlCarousel({
      stagePadding: 0,
      items: typeof $self.attr('data-items') != 'undefined' ? $self.attr('data-items') : 1,
      loop: typeof $self.attr('data-loop') != 'undefined' ? eval($self.attr('data-loop')) : true,
      dots: typeof $self.attr('data-dots') != 'undefined' ? eval($self.attr('data-dots')) : true,
      nav: typeof $self.attr('data-nav') != 'undefined' ? eval($self.attr('data-nav')) : true,
      pagination: typeof $self.attr('data-dots') != 'undefined' ? eval($self.attr('data-dots')) : false,
      navText: typeof $self.attr('data-nav-prev') != 'undefined' && typeof $self.attr('data-nav-next') != 'undefined' ? [$self.attr('data-nav-prev'), $self.attr('data-nav-next')] : [],
      autoplay: typeof $self.attr('data-autoplay') != 'undefined' ? eval($self.attr('data-autoplay')) : false,
      autoplaySpeed: typeof $self.attr('data-autoplay-speed') != 'undefined' ? eval($self.attr('data-autoplay-speed')) : false,
      autoplayTimeout: typeof $self.attr('data-autoplay-delay') != 'undefined' ? eval($self.attr('data-autoplay-delay')) : 5000,
      touchDrag: typeof $self.attr('data-touch-drag') != 'undefined' ? eval($self.attr('data-touch-drag')) : true,
      mouseDrag: typeof $self.attr('data-mouse-drag') != 'undefined' ? eval($self.attr('data-mouse-drag')) : true,
      freeDrag: typeof $self.attr('data-free-drag') != 'undefined' ? eval($self.attr('data-free-drag')) : false,
      autoWidth: typeof $self.attr('data-auto-width') != 'undefined' ? eval($self.attr('data-auto-width')) : false,
      responsive: {
        0: {
          items: typeof $self.attr('data-items-xs') != 'undefined' ? $self.attr('data-items-xs') : 2,
          autoWidth: typeof $self.attr('data-auto-width') != 'undefined' ? eval($self.attr('data-auto-width')) : true
        },
        768: {
          items: typeof $self.attr('data-items-sm') != 'undefined' ? $self.attr('data-items-sm') : 1,
          autoWidth: typeof $self.attr('data-auto-width') != 'undefined' ? eval($self.attr('data-auto-width')) : true
        },
        1024: {
          items: typeof $self.attr('data-items') != 'undefined' ? $self.attr('data-items') : 1
        }
      }
    });
    return $self;
  }
};
window.seenVars = [];
var Myfei = {
  pages: [
    // Insert here the routes where you want open automatically the MyFEI modal
    // You can also open the modal once by adding "#open_myfei" hash in your URI
    // (this feature is only available when the user is logged in)
  ],
  modalSelector: '#myfeiModal',
  dialogSelectors: {
    'register': '.registerDialog',
    'steps': '.stepsDialog'
  },
  bodySelectors: {
    'upToPremium': '.upToPremiumStep1Body',
    'upToPremium2': '.upToPremiumStep2Body',
    'awardsUserUnconfirmed': '.awardsUserUnconfirmedBody'
  },
  modalClasses: {
    'register': 'join fei-subscribe-modal',
    'funnel': 'myfei-funnel'
  },
  messages: {
    'deleteUserConfirm': 'Are you sure you want to delete your account? This operation cannot be undone.',
    'suspended_success': 'Your account has been suspended with success.',
    'reactivated_success': 'Your account has been reactivated with success.'
  },
  initialize: function () {
    $(document).ready(function () {
      // If user has not valited its email address or if open_myfei is set
      if (user && (!user['validation_date'] && $.inArray(location.pathname.substring(1), Myfei.pages) > -1 || HashSearch.keyExists('open_myfei'))) {
        $(Myfei.modalSelector).modal('show');
        Myfei.displayStep();
        if (HashSearch.keyExists('open_myfei')) {
          HashSearch.remove('open_myfei');
        }
      }

      // Click on button to OPEN the modal
      $('.myfeiModalBtn').on('click', function (e) {
        Myfei.openModal(e);
      });

      // Click on "Create Account" button
      $(Myfei.modalSelector).on('click', '#createAccountBtn', function () {
        var $formCreateAccount = $('#createAccountForm');
        Ajax.submitForm($formCreateAccount, function (response) {
          clearErrors(Myfei.modalSelector + ' ' + Myfei.dialogSelectors['register'] + ' form');
          if (response.valid) {
            //GTM dataLayer event
            DataLayer.pushEvent('authenticated user', 'Join', 'Create', 'email');
            // If register during Awards vote, post the awards vote form after having registered
            if ($('input[name="awards-vote-auth"]', $formCreateAccount).length > 0) {
              $('#awards-form').submit();
            } else {
              if (typeof Drupal.settings.forceRedirectAfterSignup !== 'undefined') {
                window.location.replace(Drupal.settings.forceRedirectAfterSignup);
              } else {
                window.location.replace(window.location + '#open_myfei');
                window.location.reload(true);
              }
            }
          } else {
            resetRecaptchas();
            if (response.message.errors) {
              displayErrors(Myfei.modalSelector + ' ' + Myfei.dialogSelectors['register'] + ' form', response.message.errors);
            }
          }
        });
      });
      $(document).on('submit', '#loginModal form', function (e) {
        // If login during Awards vote, submit the login form by Ajax
        if ($('input[name="awards-vote-auth"]', $(this)).length > 0) {
          e.preventDefault();
          Ajax.submitForm($(this), function (response) {
            if (typeof response.valid !== 'undefined' && response.valid) {
              $('#awards-form').submit();
            } else {
              var $htmlResponse = $(response);
              var $errorResponse = $('div.alert', $htmlResponse);
              if ($errorResponse.length > 0) {
                toastr["error"]($errorResponse.html());
              }
            }
          });
        }
      });

      // Click on "Resend me email" button
      $(Myfei.modalSelector + ', .page-user-confirm-email .content-block-1').on('click', '.resendEmailBtn', function () {
        var data = {
          'user_id': user.uid
        };
        Ajax.request('/api/resend_email', data, function (response) {
          $msg = $('.emailResent', $(Myfei.modalSelector + ', .page-user-confirm-email .content-block-1'));
          $msg.removeClass('hidden');

          // Hide button to minimize the risk of spam requests
          $('.resendEmailBtn').addClass('hidden');
          if (response.valid) {
            $('.success', $msg).removeClass('hidden');
            $('.fail', $msg).addClass('hidden');
          } else {
            $('.fail', $msg).removeClass('hidden');
            $('.success', $msg).addClass('hidden');
          }
        });
      });
      $(Myfei.modalSelector + ' .editNewsletterFollowInfoForm').on('click', 'input', function () {
        Myfei.checkEditNewsletterFollowInfoForm($(Myfei.modalSelector));
      });
    });
  },
  checkEditNewsletterFollowInfoForm: function ($wrapper) {
    var $progressBar = $('.upToPremiumStep2Body .progress-bar-options', $wrapper);
    var $progressBarValue = $('.upToPremiumStep2Body .progress-bar-value', $wrapper);
    var formValid = false;
    var progressBarPercents = 0;
    var progressBarValue = 0;
    var nbNewsletterOptionsChecked = $('.editNewsletterFollowInfoForm .newsletter-options input:checked', $wrapper).length;
    var nbDiscOptionsChecked = $('.editNewsletterFollowInfoForm .options-disciplines input:checked', $wrapper).length;
    if (nbNewsletterOptionsChecked > 0) {
      progressBarPercents += 50;
      progressBarValue += 1;
    }
    if (nbDiscOptionsChecked > 0) {
      progressBarPercents += 50;
      progressBarValue += 1;
    }

    // Update progress bar and the value displayed
    $progressBarValue.text(progressBarValue);
    $progressBar.attr('aria-valuenow', progressBarPercents);
    $progressBar.css('width', progressBarPercents + '%');

    // Default state
    $('.progress-ko').removeClass('hidden');
    $('.progress-ok').addClass('hidden');

    // If the progression is complete
    if (progressBarValue == 2) {
      $('.progress-ko').addClass('hidden');
      $('.progress-ok').removeClass('hidden');
    }
  },
  // Display the appropriate step based on user informations
  displayStep: function () {
    // We reset default state of all elements hidden per default to avoid side effects
    Myfei.resetDefaultComponents();
    var $myfeiModal = $(Myfei.modalSelector);

    // Display user info when it needed
    if (user) {
      $('.userEmail', $myfeiModal).text(user.mail);
      if (typeof user.field_firstname != 'undefined' && typeof user.field_firstname['und'] != 'undefined') {
        $('.userFirstname', $myfeiModal).text(user.field_firstname['und'][0]['value']);
      }
      if (typeof user.field_lastname != 'undefined' && typeof user.field_lastname['und'] != 'undefined') {
        $('.userLastname', $myfeiModal).text(user.field_lastname['und'][0]['value']);
      }
    }
    var dialogSelector, bodySelector;
    if (!user) {
      dialogSelector = Myfei.dialogSelectors.register;
      bodySelector = '.modal-body';
      $myfeiModal.addClass(Myfei.modalClasses.register);
      $myfeiModal.removeClass(Myfei.modalClasses.funnel);
      if ($('.create-account #password').val().length) {
        renderRecaptcha($(Myfei.modalSelector + ' .g-recaptcha'));
      }
      $('.create-account #password').on('keyup', function () {
        renderRecaptcha($(Myfei.modalSelector + ' .g-recaptcha'));
      });
    } else {
      dialogSelector = Myfei.dialogSelectors.steps;
      $myfeiModal.removeClass(Myfei.modalClasses.register);
      $myfeiModal.addClass(Myfei.modalClasses.funnel);
      if (typeof user.field_validation_date.und == 'undefined') {
        bodySelector = Myfei.bodySelectors.upToPremium;
      } else {
        if (user.field_level['und'][0]['value'] == 'premium') {
          bodySelector = Myfei.bodySelectors.upToPremium2;
          HashSearch.remove('confirm');
          DataLayer.pushEvent('authenticated user', 'Level Up', null, '');
          DataLayer.pushEvent('premium', 'New account validated', null, '');
        }
      }
    }
    var $awardsUserModal = $('body.page-awards [data-awards-user-status]');
    if ($awardsUserModal.length > 0) {
      var awardsUserModal = $awardsUserModal.data('awards-user-status');
      switch (awardsUserModal) {
        case 0:
          dialogSelector = Myfei.dialogSelectors.steps;
          bodySelector = Myfei.bodySelectors.upToPremium;
          break;
        case 1:
          dialogSelector = Myfei.dialogSelectors.steps;
          bodySelector = Myfei.bodySelectors.awardsUserUnconfirmed;
          break;
      }
    }
    $dialog = $(dialogSelector, $myfeiModal);
    $body = $(bodySelector, $dialog);
    $dialog.removeClass('hidden');
    $body.removeClass('hidden');
  },
  // Resets all elements to their default state to avoid side effects
  resetDefaultComponents: function () {
    var $myfeiModal = $(Myfei.modalSelector);
    $('.modal-dialog, .modal-body, .modal-footer, .emailResent', $myfeiModal).addClass('hidden');
    $('.errors', $myfeiModal).addClass('hidden');
    Myfei.checkEditNewsletterFollowInfoForm($(Myfei.modalSelector));
  },
  openModal: function (e) {
    $('.modal, .fei-subscribe-modal').modal('hide');
    $(Myfei.modalSelector).modal('show');
    Myfei.displayStep();
    if (typeof e !== 'undefined') {
      addFormDataToModal(e);
      var $button;
      if (typeof e.target !== 'undefined' && e.target !== '') {
        $button = $(e.target);
      } else {
        $button = $(e);
      }
      Myfei.toggleAwardsPropertiesInSigninModal($button.hasClass('awards-vote-auth'));
    } else {
      Myfei.toggleAwardsPropertiesInSigninModal(false);
    }
  },
  toggleAwardsPropertiesInSigninModal: function (display) {
    $('#loginModal, .registerDialog').each(function () {
      var $modal = $(this);
      if (display) {
        var $form = $('.form-add-values', this);
        if ($('input[name="awards-vote-auth"]', $form).length === 0) {
          $('.form-add-values', this).append('<input type="hidden" name="awards-vote-auth" value="1" />');
          var $itemToInsertMessageAfter = $modal.hasClass('registerDialog') ? $('.create-account > .title', $modal) : $('.modal-title', $modal);
          $('<h3 class="text-center text-success awards-vote-message" style="margin-bottom:30px;">You must be logged in to submit your votes.</h3>').insertAfter($itemToInsertMessageAfter);
          $('.modal-title + h5').addClass('element-hidden');
          $('a[data-toggle="modal"], a[data-dismiss="modal"]', this).addClass('awards-vote-auth');
        }
      } else {
        $('.form-add-values input[name="awards-vote-auth"], .awards-vote-message', this).remove();
        $('a[data-toggle="modal"], a[data-dismiss="modal"]', this).removeClass('awards-vote-auth');
        $('.modal-title + h5').removeClass('element-hidden');
      }
    });
  }
};
function addFormDataToModal(e) {
  if ($(e).hasClass('followPreference')) {
    var id = $(e).data('id');
    var type = $(e).data('type');
    if ($('#loginModal').find('.form-add-values').find('input[name="follow-id"]').length <= 0) {
      $('#loginModal').find('.form-add-values').append('<input type="hidden" name="follow-id" value="' + id + '">');
      $('#loginModal').find('.form-add-values').append('<input type="hidden" name="follow-type" value="' + type + '">');
    }
    if ($('.registerDialog').find('.form-add-values').find('input[name="follow-id"]').length <= 0) {
      $('.registerDialog').find('.form-add-values').append('<input type="hidden" name="follow-id" value="' + id + '">');
      $('.registerDialog').find('.form-add-values').append('<input type="hidden" name="follow-type" value="' + type + '">');
    }
  }
  if ($(e).hasClass('btn-load-login') || $(e).hasClass('view-more-stats')) {
    var id = $(e).data('load-id');
    var type = $(e).data('load-type');
    if ($('#loginModal').find('.form-add-values').find('input[name="load-id"]').length <= 0) {
      $('#loginModal').find('.form-add-values').append('<input type="hidden" name="load-id" value="' + id + '">');
      $('#loginModal').find('.form-add-values').append('<input type="hidden" name="load-type" value="' + type + '">');
    }
    if ($('.registerDialog').find('.form-add-values').find('input[name="load-id"]').length <= 0) {
      $('.registerDialog').find('.form-add-values').append('<input type="hidden" name="load-id" value="' + id + '">');
      $('.registerDialog').find('.form-add-values').append('<input type="hidden" name="load-type" value="' + type + '">');
    }
  }
}
;
// Check Permissions for premium content
function isPremium(user) {
  if (user && typeof user.field_level.und !== 'undefined') {
    if (user.field_level.und[0].value.indexOf(roles['premium']) !== -1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
;
// Animations for parallax
var Animations = {
  speedBgBigLetters: 0.2,
  //defined speed for movement on BigLetters Module background
  animationEndDelayImage: '0.8s',
  //duration for Big Image movement
  animationEndDelayModule: '1s',
  //duration for module movement
  animationEndDelayBL: '1s',
  //duration for BigLetter Module background movement
  animationSpeedImage: 1.0,
  //defined speed for movement on Big Image
  positionDown: 100,
  //defined position to move down module on first scroll
  disableShadows: false,
  //param to disable shadows effect
  disableAnimations: typeof disableAnimationsCookie !== "undefined" ? disableAnimationsCookie : false,
  //param to disable all animations
  onlyOpacity: false,
  //param to add only fadein effect
  //On Chrome and Edge, transition of the mask shrinks the image and a trail appears from the background
  avoidTrail: {
    'filter': 'none',
    '-webkit-filter': 'blur(0px)',
    '-moz-filter': 'blur(0px)',
    '-ms-filter': 'blur(0px)',
    'filter': 'progid:DXImageTransform.Microsoft.Blur(PixelRadius="0")',
    'outline': '1px solid transparent',
    'margin-top': '3px'
  },
  avoidPixelatedMask: {
    'filter': 'none',
    '-webkit-filter': 'blur(0px)',
    '-moz-filter': 'blur(0px)',
    '-ms-filter': 'blur(0px)',
    'filter': 'progid:DXImageTransform.Microsoft.Blur(PixelRadius="0")',
    'outline': '2px solid white',
    'margin-top': '2px'
  },
  //Modules position down
  bigSpacing: 800,
  littleSpacing: 400,
  spaceOnParentImageBg: 200,
  spaceOutParentImageBg: 300,
  //Be sure the image/module doesn't collapse with others
  imageBgDivision: 2,
  percentageDistance: 0.5,
  percentageMovement: 1,
  /**Avoid too high movements**/
  //Minimum translation for Big Letters module background
  minimumBgBl: -230,
  //Maximum translation for Big Letters module background
  maximumBgBl: 0,
  //Minimum movement modules,
  minimumMoveModule: 150,
  minimumPosition: 10,
  //Opacity Values
  opaque: "1",
  semiOpaque: "0.5",
  transparent: "0",
  //Transition types
  movementModule: "linear",
  movementImage: "ease-out",
  movementBg: "ease-out",
  opacityTransition: "ease-out",
  //JQuery finders selectors
  shadows: ".animation-shadows",
  modulesMovable: ".animation-movable",
  movableBg: ".img-animation-movable-bg",
  modulesForcedVisible: ".forced-visible",
  blockImage: ".block-parallax-section",
  maskImage: ".animation-mask",
  maskBg: ".animation-image",
  blockBgImage: "animation-bg-image",
  //LoadedTime
  minLoadedPageTime: 4000,
  maxLoadedPageTime: 7000,
  //Lightened Values
  lowImageDivision: 3,
  lowPercentageDistance: 0.3,
  lowPercentageMovement: 0.7,
  veryLowImageDivision: 5,
  veryLowPercentageDistance: 0.1,
  veryLowPercentageMovement: 0.5,
  translate: function ($element, value) {
    $element.css({
      '-webkit-transform': 'translateY(' + value + 'px) translateZ(0)',
      '-moz-transform': 'translateY(' + value + 'px) translateZ(0)',
      '-ms-transform': 'translateY(' + value + 'px) translateZ(0)',
      '-o-transform': 'translateY(' + value + 'px) translateZ(0)',
      'transform': 'translateY(' + value + 'px) translateZ(0)'
    });
  },
  transitionDuration: function (element, value) {
    element.style.transitionDuration = value;
  },
  transition: function (element, value) {
    element.style.WebkitTransition = value;
    element.style.msTransition = value;
    element.style.transition = value;
  },
  fadeElement: function ($element, value) {
    $element.css("opacity", value);
  },
  lightenAnimation: function () {
    /** Reduce animations weight by crop movement **/
    var timer = Date.now() - timerStart;
    if (timer > Animations.minLoadedPageTime && timer < Animations.maxLoadedPageTime) {
      Animations.imageBgDivision = Animations.lowImageDivision;
      Animations.percentageDistance = Animations.lowPercentageDistance;
      Animations.percentageMovement = Animations.lowPercentageMovement;
    } else if (timer > Animations.maxLoadedPageTime) {
      Animations.imageBgDivision = Animations.veryLowImageDivision;
      Animations.percentageDistance = Animations.veryLowPercentageDistance;
      Animations.percentageMovement = Animations.veryLowPercentageMovement;
    }
  }
};
;
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
var loadRunning = false;
var loadRunned = false;
var loadCalled = false;
var replaceHash = true;

//Define which param we listen to load more than base content
var hashParam = 'content';
window.gatheredData = {};
var listParam = 'list';
var loadMoreWrapperSelector = '.loadMoreWrapper';
var loadMoreBtnSelector = '#loadMoreBtn';
var progressBarLastElementPerPage = {
  '.node-type-page-story-article': $('.region-content > .container').filter(function () {
    return !$(this).find('.addthis-share-bottom').length;
  }).last()
};
var toggleLoader = function (action) {
  if (action == 'show') {
    $('.loader', $(loadMoreWrapperSelector)).addClass('hidden');
    $('.loader-loading', $(loadMoreWrapperSelector)).removeClass('hidden');
  } else {
    $('.loader', $(loadMoreWrapperSelector)).removeClass('hidden');
    $('.loader-loading', $(loadMoreWrapperSelector)).addClass('hidden');
  }
};
var manageLoadMore = function (nbResults) {
  if (nbResults == 0) {
    $(loadMoreWrapperSelector).addClass('hidden');
  } else {
    $(loadMoreWrapperSelector).removeClass('hidden');
  }
};
var manageNoResult = function (nbResults, loadMore) {
  var $table = $(tableSelector);

  // Filtering (not loading more)
  if (!loadMore) {
    $('tbody', $table).empty();
    if (nbResults == 0) {
      $('.text-no-result').removeClass('hidden');
    } else {
      $('.text-no-result').addClass('hidden');
    }
  }
};
$(document).ready(function () {
  //Image quality update
  if (lowerImagesParam) {
    updateImageScreenResolutions();
  }

  //Tooltip.init();
  Like.initialize();
  adjustSelectpickers();
  checkNavBtnFeaturedAthModule();
  Myfei.initialize();
  if (typeof EventsTracker != 'undefined') {
    EventsTracker.init();
  }

  // Subscribe link (header navbar)
  $('.subscribeHeaderLink').on('click', function () {
    closeMenu();
  });
  var handlerMedal = function () {
    if ($('.medal-legend-required').length > 0) {
      $('.table-medals-legends').parent().removeClass('hidden');
      $(document).unbind('DOMNodeInserted', handlerMedal);
    }
  };
  if ($('.table-medals-legends-visibility').length) {
    if ($('.table-medals-legends').is(':hidden')) {
      $(document).bind('DOMNodeInserted', handlerMedal);

      /*$(document).bind('DOMNodeRemoved', function(event){
          $('.table-medals-legends').parent().addClass('hidden');
      });*/
    }
  }

  // Init messages toast
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-center",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };

  // Log clicks on footer links
  $('#footer .footer-links a').on('click', function () {
    var label = $(this).text();
    EventsTracker.sendEvent('hyperlink', 'click', label);
  });
  $('.subscribeHeaderLink, .closeMenu').on('click', function () {
    closeMenu();
  });

  // Detect and switch type password field between "text" and "password"
  // for "Show password" feature
  $('.show-password').on('click', function () {
    $formGroup = $(this).closest('.form-group');

    // Change input type
    $('input', $formGroup).attr('type', function (idx, attr) {
      return attr == 'text' ? 'password' : 'text';
    });

    // Change icon
    $(this).attr('class', function (idx, attr) {
      return attr == 'fa fa-eye show-password' ? 'fa fa-eye-slash show-password' : 'fa fa-eye show-password';
    });
  });

  // To avoid side effects when a user switch from modal to another modal
  // we manually add the class "modal-open" to disable body scroll
  $('.modal, .fei-subscribe-modal').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
  });
  $('#loginModal').on('shown.bs.modal', function (e) {
    addFormDataToModal(e.relatedTarget);
  });
  $('#termsModal').on('hide.bs.modal', function (e) {
    $('#myfeiModal').modal('show');
  });

  //Recapcha Join page
  if ($('.create-account #password').length != 0 && $('.create-account #password').val().length) {
    renderRecaptcha($('.sign-in-page-content .g-recaptcha'));
  }
  $('.create-account #password').on('keyup', function () {
    renderRecaptcha($('.sign-in-page-content .g-recaptcha'));
  });

  //Handle create account action
  $('.sign-in-page-content').on('click', '#createAccountBtn', function () {
    Ajax.submitForm('#createAccountForm', function (response) {
      clearErrors('.sign-in-page-content form');
      if (response.valid) {
        //GTM dataLayer event
        DataLayer.pushEvent('authenticated user', 'Join', 'Create', 'email');
        window.location.replace(window.location + '#open_myfei');
        window.location.reload(true);
      } else {
        resetRecaptchas();
        if (response.message.errors) {
          displayErrors('.sign-in-page-content form', response.message.errors);
        }
      }
    });
  });

  //Clock Longines tracker
  setTimeout(function () {
    // timeout because ifram may not be loaded.
    var clocks = document.getElementsByName('myiFrameLonginesClock');
    for (var i = 0; i < clocks.length; i++) {
      clocks[i].contentDocument.addEventListener('click', function (event) {
        EventsTracker.sendEvent('snippet', 'click', "Partners Longines clock");
      }, false);
    }
  }, 2000);

  /** Lazy Load content **/
  $(window).on('touchmove scroll', function () {
    if (progressiveLoadParam && $('a.jscroll-next').length > 0) {
      // Check if we need to listen to content scroll
      if ($(document).scrollTop() + $(window).innerHeight() >= $(".region-content").innerHeight() / 2 && !loadCalled && $('a.jscroll-next') && !loadRunning) {
        loadCalled = true;
        loadNextModulesContent($('a.jscroll-next'));
      }
    }
    if (progressiveLoadParam && $('a.list-jscroll-next').length > 0) {
      //Case Lists
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $("a.list-jscroll-next").offset().top;
      var elemBottom = elemTop + $("a.list-jscroll-next").height();
      if (elemBottom / 2 <= docViewBottom && elemTop >= docViewTop && !loadCalled && $('a.list-jscroll-next') && !loadRunning) {
        loadNextModulesContent($('a.list-jscroll-next:first'));
      }
    }

    //When on top of page remove content state
    if (!$(window).scrollTop()) {
      if ($('.no-remove-query-string').length === 0) {
        window.history.replaceState(null, "", location.href.split("?")[0]);
      }
    }
  });

  /* Disable Animations by user settings */
  $('.user-settings').click(function () {
    $('#ctaUserSettingsModal').removeClass('hidden');
    $('#ctaUserSettingsModal').show();
  });
  $('.user-settings-disable-animations-label').click(function () {
    $('.user-settings-disable-animations').prop('checked');
  });
  $('.user-settings-disable-animations').change(function () {
    if ($('.user-settings-disable-animations:checked').length > 0) {
      enableDisableAnimations('disable');
    } else {
      enableDisableAnimations('enable');
    }
  });

  // do not follow addthis link on click
  $(document).on('click', '.addthis-share a', function (oEvt) {
    oEvt.preventDefault();
    // may open addthis popup on click if asked later
  });
  $(document).on('click', 'a.eleague_leaderboard', function (oEvt) {
    $('html, body').animate({
      scrollTop: $(oEvt.target.hash).offset().top - $("#fei-new-navbar").height()
    }, 750);
    return false;
  });
  var progressBar = $('#progressbar');
  if (progressBar.length) {
    $.each(progressBarLastElementPerPage, function (bodySelector, lastElement) {
      if ($('body' + bodySelector).length) {
        if (lastElement.length) {
          new fei.Progressbar({
            bar: progressBar,
            lastElement: lastElement
          });
        }
        return false;
      }
    });
  }
});
function loadNextModulesContent($nextCall) {
  loadRunning = true; // Avoid multiple calls after scrolling a lot

  var $loaderElement = $nextCall.prev();
  var $lastModuleElement = $nextCall.prev().prev().find('.element-last-position');
  var url = $nextCall.data('url');
  var page = $nextCall.data('page') + 1;
  var args = $nextCall.data('args');
  var content = $nextCall.data('field-content');
  var viewDisplayId = $nextCall.data('display-id') || null;
  var nodeId = $nextCall.data('nodeid');
  var revision = $nextCall.data('revision');
  var nodeType = $nextCall.data('node-type');
  var lastPosition = $lastModuleElement.data('position');
  var lastDisplayedNode = $lastModuleElement.data('last-id');
  var numberList = $nextCall.data('list-number') || '';

  //Loader
  $loaderElement.show();
  var data = {
    nodeId: nodeId,
    fieldContent: content,
    lastDisplayedNode: lastDisplayedNode,
    lastPosition: lastPosition,
    nodeType: nodeType,
    page: page,
    args: args,
    nodeRevision: revision,
    numberOfList: numberList,
    csrfToken: csrfToken // Common Var
  };
  if (viewDisplayId !== null) {
    data.viewDisplayId = viewDisplayId;
  }
  Ajax.request(url, data, function (data) {
    if (!data || !data.hasOwnProperty('data') || data.data.length <= 0) {
      $lastModuleElement.remove();
      $loaderElement.remove();
      $nextCall.remove();
    }
    if (data && data.hasOwnProperty('data') && data.data.length > 0) {
      $lastModuleElement.remove();
      //Find to be append scripts to remove double
      if (data.scripts.length > 0) {
        for (var i = 0; i < data.scripts.length; i++) {
          var src = $(data.scripts[i]).attr('src');
          if ($(document).find('script[src="' + src + '"]')) {
            $(document).find('script[src="' + src + '"]').remove();
          }
        }
        //Unbind events listener if same element is going to be append (using new script appened)
        var $dataSearch = $(data.data).find('.module-fan');
        $dataSearch.each(function () {
          var search = $(this).attr('class').split(" ");
          for (var i = 0; i < search.length; i++) {
            if (search[i].search("module-node-module") != -1) {
              if ($(document).find('.' + search[i]).length) {
                $(document).find('.' + search[i] + ' *').unbind('click');
              }
            }
          }
        });
      }

      //Append data
      $loaderElement.before(data.data);

      //Rebind likable content
      Like.rebindLikeElements();

      //Rebind Videos on caroussel
      rebindVideosElements();

      //Bind animations
      avoidTrailOnMask();
      applyAnimationsOnElementsLoaded();
      $loaderElement.hide();
      // reappend new jscroll with new values
      $nextCall.data('page', page);

      //Image quality update
      if (lowerImagesParam) {
        updateImageScreenResolutions();
      }

      // Add param page
      var hasFirstParam = '?';
      if (replaceHash) {
        if (numberList) {
          window.history.replaceState({
            listParam: numberList,
            hashParam: page
          }, "List " + numberList + ", Content " + page, hasFirstParam + "&" + listParam + "=" + numberList + "&" + hashParam + "=" + page);
        } else {
          window.history.replaceState({
            hashParam: page
          }, "Content " + page, hasFirstParam + "&" + hashParam + "=" + page);
        }
      }
      $('.countable-modules').data('count', $('.countable-modules').data('count') + data['nbModulesAdded']);
    }
    loadCalled = false;
    loadRunning = false;
  });
}
var adjustSelectpickers = function () {
  if (isMobile) {
    $('.selectpicker').selectpicker('mobile');
  }
};

/*
 * Delete nav buttons in featured athlete module
 * when there is only on athlete
 */
var checkNavBtnFeaturedAthModule = function () {
  $('.module-featured-athlete').each(function () {
    if (!$(this).find('.owl-carousel').length) {
      $('.slide-btns', $(this)).remove();
    }
  });
};
$.fn.hasAncestor = function (a) {
  return this.filter(function () {
    return !!$(this).closest(a).length;
  });
};

/**
 * Shake Effect
 */
var trackerLocalStorage = {};
$(document).ready(function () {
  var selector = '.shake-effect';
  var activeShakeClass = 'shake-active';
  var elements = $(selector);
  var inter;
  var timer;
  if (elements.length > 0) {
    inter = window.setInterval(shakeOn, 4000);
  }
  function shakeOn() {
    elements.each(function () {
      var shake = $(this);
      shake.addClass(activeShakeClass);
    });
    timer = window.setTimeout(function () {
      shakeOff();
    }, 1000);
  }
  function shakeOff() {
    elements.each(function () {
      var shake = $(this);
      shake.removeClass(activeShakeClass);
    });
    window.clearTimeout(timer);
  }
});
$(document).ready(function () {
  $('.fei-purple-menu-top').find('li').click(function (e) {
    if ($(this).find('a').attr('data-target')) {
      displayTabAndGoToAnchor(this);
    }
  });
  function displayTabAndGoToAnchor(element) {
    var tab = $(element).find('a').attr('data-target');
    $('#landingTabs a[data-target="' + tab + '"]').trigger('click');
    $('#landingTabs a').on('shown.bs.tab', function (e) {
      window.location.hash = tab;
    });
    //access anchor if tab already opened
    window.location.hash = tab;
  }
});
function clearErrors(formSelector) {
  $('[class^="errors_"]', $(formSelector)).addClass('hidden').html('');
}
function displayErrors(formSelector, errors) {
  var errorMsg = '';
  $.each(errors, function (idx, msg) {
    $('.errors_' + idx, $(formSelector)).removeClass('hidden').html(msg);
  });
}

// Render a grecaptcha
function renderRecaptcha($captchaElement) {
  $captchaElement.closest('.captchaWrapper').removeClass('hidden');
  try {
    grecaptcha.render($captchaElement[0], {
      sitekey: recaptchaKey,
      theme: "light"
    });
  } catch (e) {
    // Grecaptcha already rendered
  }
}

// Reset all Google Recaptcha on the page
function resetRecaptchas() {
  var nbRecaptcha = $('.g-recaptcha').length;
  for (var i = nbRecaptcha - 1; i >= 0; i--) {
    try {
      grecaptcha.reset(i);
    } catch (e) {}
  }
}
//Get size of screen to update images to correct resolutions
function updateImageScreenResolutions() {
  var width = $(window).width();
  var url = "/api/update_image_resolution";
  updateImagesQuality(width);
  updateImagesQualityV2(width);
  $.ajax({
    url: url,
    type: "POST",
    data: {
      width: width,
      csrfToken: csrfToken // Common Var
    },
    success: function (data) {},
    error: function () {
      //
    }
  });
}

/*Correct image by correct size*/
function updateImagesQuality(width) {
  var $imgSwitch = $('img[data-img-quality-switch="true"]');
  var newDim = '';
  if (width <= imageStyleMobile) {
    newDim = imageStyleMobile;
  } else if (width > imageStyleMobile && width <= imageStyleMedium) {
    newDim = imageStyleMedium;
  }
  $imgSwitch.each(function (e) {
    var path = $(this).attr('src');
    var mobile = $(this).data('img-' + imageStyleMobile);
    var medium = $(this).data('img-' + imageStyleMedium);
    var full = $(this).data('img-full');

    //Case default background
    if (path.search("styles/") !== -1) {
      var urlSplit = path.split("styles/");
      var imageStyle = urlSplit[1].split('/');
      var newImageStyle = imageStyle[0];
      var newPath = '';
      if (!newDim) {
        newPath = full;
      } else if (newDim == imageStyleMedium) {
        newPath = medium;
      } else if (newDim == imageStyleMobile) {
        newPath = mobile;
      }

      /** Define values for image switch **/
      var $item = $(this);
      var fadeOutImgTime = 200;
      var waitingTimeGenerateImg = 5000;
      if (listImageStyles.indexOf(imageStyle[0]) !== -1) {
        if (newPath && path !== newPath) {
          var img = new Image();
          img.src = newPath;
          if (newPath.search("s3.amazonaws.com") === -1) {
            //Need to set time to get the image generated on s3
            setTimeout(function () {
              img.style.zIndex = "200";
              $item.parent().append(img);
              $item.attr('src', newPath);
              $(img).fadeOut(fadeOutImgTime);
              $(img).remove();
            }, waitingTimeGenerateImg);
          } else {
            img.style.zIndex = "200";
            $item.parent().append(img);
            $item.attr('src', newPath);
            $(img).fadeOut(fadeOutImgTime);
            $(img).remove();
          }
        }
      }
    }
  });
}

/*Correct image by correct size*/
function updateImagesQualityV2(width) {
  var $imgSwitch = $('.focal-image');
  var newDim = '';
  if (width <= imageStyleMobile) {
    newDim = imageStyleMobile;
  } else if (width > imageStyleMobile && width <= imageStyleMedium) {
    newDim = imageStyleMedium;
  }
  $imgSwitch.each(function (e) {
    var $item = $(this);
    var path = $(this).css("background-image");
    var mobile = $(this).data('img-' + imageStyleMobile);
    var medium = $(this).data('img-' + imageStyleMedium);
    var full = $(this).data('img-full');
    var newPath = '';
    if (path.search("styles/") !== -1) {
      var urlSplit = path.split("styles/");
      var imageStyle = urlSplit[1].split('/');
      if (!newDim) {
        newPath = "url(" + full + ")";
      } else if (newDim == imageStyleMedium) {
        newPath = "url(" + medium + ")";
      } else if (newDim == imageStyleMobile) {
        newPath = "url(" + mobile + ")";
      }
      if (listImageStyles.indexOf(imageStyle[0]) !== -1) {
        if (newPath && path !== newPath) {
          if (newPath.search("s3.amazonaws.com") !== -1) {
            $item.css("background-image", newPath);
          }
        }
      }
    }
  });
}
function enableDisableAnimations(actionType) {
  var actionValue = actionType === 'disable' ? true : false;
  var d = new Date();
  d.setTime(d.getTime() + 10 * 365 * 24 * 360);
  var expires = "expires=" + d.toUTCString();
  document.cookie = 'disableAnimations' + "=" + actionValue + ";" + expires + ";path=/";
  Animations.disableAnimations = actionValue;
  window.location.reload(true);
}
function pageResetDrupalCache($param) {
  var url = "/api/page_reset_cache";
  var content = $param.data('field-content');
  var nodeId = $param.data('nodeid');
  var revision = $param.data('revision');
  var numberList = $param.data('list-number') || '';
  var data = {
    csrfToken: csrfToken,
    nodeId: nodeId,
    fieldContent: content,
    nodeRevision: revision,
    numberOfList: numberList
  };
  Ajax.request(url, data, function (response) {
    if (response.success) {
      window.location.reload();
    }
  });
}
function toggleSearchFeature() {
  var url = "/api/toggle_search_active";
  var data = {
    csrfToken: csrfToken
  };
  Ajax.request(url, data, function (response) {
    if (response.success) {
      window.location.reload();
    }
  });
}
;
var navbarIsTransparent = false;
function trackClickEvents() {
  document.addEventListener("mousedown", event => {
    const data = {
      type: "mousedown",
      target: event.target.nodeName,
      x: event.clientX,
      y: event.clientY,
      timeStamp: event.timeStamp
    };
    window.gatheredData["mousedown"] = data;
  });
}
var navbarSelector = '#fei-new-navbar';
var mainMenuSelector = '#new-mega-menu';
var $navbar = null;
var $menuBait = $('.c-menu-bait');
var lastScrollTo = null;
var hasNavbarInverse = false;
var blackHorseCssSelector = 'link[rel="stylesheet"][href*="/blackhorse.css"]';
var $blackHorseCss = null;
$(document).ready(function () {
  $navbar = $(navbarSelector);
  $mainMenu = $(mainMenuSelector);
  $disciplineWrapper = $mainMenu.find(".disciplines-wrapper").first();
  $closeMenuXsButton = $("#close-new-menu-xs");
  $openMenuButtons = $("#open-new-menu, #open-new-menu-xs");
  $closeMenuButtons = $("#close-new-menu, #close-new-menu-xs");
  if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
    $('.navbar-top').not('.navbar-open').addClass('navbar-mini navbar-fixed');
    $('body').addClass('has-navbar-mini');
    updateHeaderPage();
  }
  if ($('.navbar-top').hasClass('navbar-transparent')) {
    navbarIsTransparent = true;
  }
  affixNavbar();
  $(window).on('scroll', function () {
    affixNavbar();
  });

  //    $disciplineWrapper.on('scroll', function() {
  //        if ($closeMenuXsButton.is(':visible')) { // mobile
  //            $mainMenu.addClass('menu-scrolled-xs');
  //        }
  //    });

  megaMenu();
  $('.closeMegaMenu').on('click', function () {
    // login pop-in
    $closeMenuButtons.removeClass("visible");
    $openMenuButtons.removeClass('hidden');
    $mainMenu.removeClass("visible");
    closeMenu();
  });

  /* Mega menu v2 additions */
  $("#btn-story").click(function (e) {
    if ($("#menu-button-stories").is(":hidden")) {
      //mobile menu
      e.preventDefault();
      $mainMenu.addClass('has-slide-visible');
      $("#slide-story").addClass("slide-story-visible");
    }
  });
  $("#btn-event").click(function (e) {
    if ($("#menu-button-stories").is(":hidden")) {
      //mobile menu
      e.preventDefault();
      $mainMenu.addClass('has-slide-visible');
      $("#slide-event").addClass("slide-story-visible");
    }
  });
  $(".btn-slide-back").click(function () {
    $(".slide").removeClass("slide-story-visible");
    $mainMenu.removeClass('has-slide-visible');
  });
  $openMenuButtons.click(function () {
    $openMenuButtons.addClass("hidden");
    $closeMenuButtons.addClass("visible");
    $mainMenu.addClass("visible");
  });
  $closeMenuButtons.click(function () {
    $closeMenuButtons.removeClass("visible");
    $openMenuButtons.removeClass("hidden");
    $mainMenu.removeClass("visible");
  });
  $blackHorseCss = $(blackHorseCssSelector);
});
(function ($) {
  $(window).on("load", function () {
    $(".overflow-scroll-landscape").mCustomScrollbar({
      scrollButtons: {
        enable: true,
        scrollAmount: 25,
        scrolltype: "stepped"
      },
      axis: "y",
      scrollbarPosition: "inside",
      autoHideScrollbar: false,
      snapAmount: 0,
      snapOffset: 0,
      theme: "minimal-dark",
      autoExpandScrollbar: true,
      advanced: {
        autoExpandHorizontalScroll: true
      }
    });
  });
})(jQuery);

/* Use class has-navbar-mini / has-navbar-normal ion #header-page.container-fluid */
var updateHeaderPage = function () {
  var $header = $('#header-page.container-fluid:not(.stories-landing-page)');
  if ($header) {
    if ($navbar.hasClass('navbar-mini')) {
      $header.addClass('has-navbar-mini');
      $header.removeClass('has-navbar-normal');
    } else {
      $header.addClass('has-navbar-normal');
      $header.removeClass('has-navbar-mini');
    }
  }
};
var megaMenu = function () {
  // Click on toggle menu button (xs view)
  $('.toggleMenu', $navbar).on('click', function () {
    if ($navbar.hasClass('navbar-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Click to open main menu
  $('.openMenu', $navbar).on('click', function () {
    openMenu();
  });

  // Click to close main menu
  $('.closeMenu', $navbar).on('click', function () {
    closeMenu();
  });
  $('.menu-block.menu-block-full-link .text-content').on('click', function (oEvt) {
    var $this = $(this),
      $root = $this.closest('.menu-block-full-link');
    $this.closest('.main-menu').find('#' + $root.data('expand')).toggleClass('stories-on');
  });
};
var openMenu = function () {
  $($navbar).trigger('fei-mega-menu-open', {});
  lastScrollTo = document.documentElement.scrollTop || document.body.scrollTop;
  hasNavbarInverse = $navbar.hasClass('navbar-inverse');
  $('body').addClass('megamenu-open');
  //    $('.main-menu ~ *').addClass('hidden');
  $('.menu-open').removeClass('hidden');
  $('.menu-closed').addClass('hidden');
  $navbar.removeClass('navbar-fixed-top');
  switchLonginesNavBarLogoFor("default");
  $navbar.removeClass('navbar-inverse');
  $navbar.addClass('navbar-open');
  $('.discover').addClass('hidden');
  $navbar.css('transition', 'none');
  $('html, body').css('height', '100%');
  $('html, body').css('overflow', 'hidden');
  $('body').css('position', 'relative');
  $($navbar).trigger('fei-mega-menu-opened', {});
  $navbar.find('.fei-btn-change-navbar-mini').addClass('btn-noborder');
  $navbar.find('.fei-btn-change-navbar-mini').addClass('btn-white');
  updateHeaderPage();
  hideMegaMenuBait();
  megamenuHighlightsSlider();
  if ($blackHorseCss) {
    var blackHorseCssHref = $blackHorseCss.attr('href');
    $blackHorseCss.attr('data-href', blackHorseCssHref).data('href', blackHorseCssHref).removeAttr('href');
  }
};
var closeMenu = function () {
  $($navbar).trigger('fei-mega-menu-close', {});
  //    $('.main-menu ~ *').removeClass('hidden');
  $('.menu-open').addClass('hidden');
  $('.menu-closed').removeClass('hidden');
  $navbar.addClass('navbar-fixed-top');
  $('body').removeClass('megamenu-open');
  $navbar.removeClass('navbar-open');
  $('.discover').removeClass('hidden');
  $navbar.css('transition', 'all 0.2s');
  $('html, body').css('height', 'auto');
  $('html, body').css('overflow', 'auto');
  if (hasNavbarInverse) {
    $navbar.addClass('navbar-inverse');
    switchLonginesNavBarLogoFor("inverse");
  }
  $navbar.find('.fei-btn-change-navbar-mini').removeClass('btn-noborder');
  $navbar.find('.fei-btn-change-navbar-mini').removeClass('btn-white');
  $mainMenu.removeClass('menu-scrolled-xs');
  window.scrollTo(0, lastScrollTo);
  $($navbar).trigger('fei-mega-menu-closed', {});
  updateHeaderPage();
  if ($blackHorseCss) {
    var blackHorseCssHref = $blackHorseCss.data('href');
    $blackHorseCss.attr('href', blackHorseCssHref).removeAttr('data-href').data('href', '');
  }
};
var affixNavbar = function () {
  var $navbarClosed = $('.navbar-closed');
  if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
    $navbarClosed.not(".navbar-open").addClass("navbar-mini");
    $('body').addClass('has-navbar-mini');
    $navbarClosed.not(".navbar-open").removeClass("navbar-inverse");
    switchLonginesNavBarLogoFor("default");
  } else {
    $navbar.trigger('fei-menu-scroll-top');
    if (!$navbarClosed.hasClass('navbar-mini-default')) {
      $navbarClosed.removeClass("navbar-mini");
      $('body').removeClass('has-navbar-mini');
    }
  }
  updateHeaderPage();
  if (navbarIsTransparent) {
    if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
      $('.navbar-closed').removeClass("navbar-transparent");
    } else {
      $('.navbar-closed').addClass("navbar-transparent");
    }
  }
};
var megamenuHighlightsSlider = function () {
  $('.slider-highlights').not('.slick-initialized').slick({
    swipeToSlide: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    prevArrow: false,
    nextArrow: false
  });
  $('.slider-highlights').slick('refresh');
  $('.slider-highlights-wrapper a.previous').click(function (e) {
    e.preventDefault();
    $('.slider-highlights').slick('slickPrev');
  });
  $('.slider-highlights-wrapper a.next').click(function (e) {
    e.preventDefault();
    $('.slider-highlights').slick('slickNext');
  });
};
function switchLonginesNavBarLogoFor(newMode) {
  var longinesWhite = $('.navbar-logo.logo-longines.white');
  var longinesBlack = $('.navbar-logo.logo-longines.black');
  if (newMode === 'inverse') {
    longinesWhite.removeClass('hidden');
    longinesBlack.addClass('hidden');
  } else {
    longinesWhite.addClass('hidden');
    longinesBlack.removeClass('hidden');
  }
}
var hideMegaMenuBait = function () {
  if ($('body').hasClass('front')) {
    if ($.cookie('hideMegaMenuBait') == null) {
      $menuBait.hide();
      $.cookie('hideMegaMenuBait', 1);
    }
  }
};
;
/** Scroll Dock/Magnet Effect **/
$(document).ready(function () {
  return; //Remove magnet effect for big picture/full screen ISSUE #8
  // From andrewgooch.com/wp-content/themes/theme-v01/assets/js/scripts.js
  //     var articles = $('.element-scroll-anchor');
  var articles = $('.element-scroll-anchor.element-display-fullscreen'); // Only on fullscreen elemnts
  var artPosition;
  var target;
  var that;
  var thatarticle;
  var thislinkid;
  var thistitle;
  var scrollwheel = true;
  var timer;
  var fromLeft,
    fromTop = 0;
  var viewport = $('.viewport');
  var scale = 30;
  var dragging = 0;
  var winwidth = $(window).width();
  var winheight = $(window).height();
  var minArticleHeight = 700;
  var coefFullSize = 0.95;

  // Find next
  function scrollFan(target, time) {
    // Calculate Dimensions based on module displayed (center display)
    if (target || false) {
      scrollwheel = false;
      var targetHeight = target.height();
      if (targetHeight >= parseInt(winheight * coefFullSize, 10)) {
        $.scrollTo(target, time || 400, {
          axis: 'y'
        });
      } else {
        // Center Display
        var offset = parseInt((parseInt(winheight, 10) - parseInt(targetHeight, 10)) / 2, 10) * -1;
        $.scrollTo(parseInt(target.offset().top + offset, 10), time || 400, {
          axis: 'y'
        });
        window.clearTimeout(timer);
        thatarticle = target;
        winwidth = $(window).width();
        winheight = $(window).height();
      }
    }
  }
  function findnext(direct) {
    var realNext = direct || false;
    var elements = articles;
    if (realNext) {
      elements = $('.element-scroll-anchor');
    }
    var scrollPosition = $(window).scrollTop();
    elements.each(function () {
      var that = $(this);
      var byPass = false;
      // If width => 768px, do not count level-2 modules
      if (winwidth >= 768 && !realNext) {
        byPass = that.hasClass('element-level-1') ? false : true;
      }
      if (!byPass) {
        var thisheight = that.height();
        if (that.hasClass('anchor-scroll-mid')) {
          thisheight = Math.round(thisheight / 2);
        }
        artPosition = that.offset().top;
        if (thisheight <= parseInt(winheight * coefFullSize, 10)) {
          var offset = parseInt((parseInt(winheight, 10) - parseInt(thisheight, 10)) / 2, 10) * -1;
          artPosition += offset;
        }
        if (artPosition > scrollPosition + 10) {
          target = that;
          scrollFan(target, 400);
          return false;
        }
      }
    });
  }

  // Find prev
  function findprev() {
    var scrollPosition = $(window).scrollTop();
    $(articles.get().reverse()).each(function () {
      var that = $(this);
      var byPass = false;
      // If width => 768px, do not count level-2 modules
      if (winwidth >= 768) {
        byPass = that.hasClass('element-level-1') ? false : true;
      }
      if (!byPass) {
        artPosition = that.offset().top;
        var thisheight = that.height();
        if (that.hasClass('anchor-scroll-mid')) {
          thisheight = Math.round(thisheight / 2);
        }
        if (thisheight <= parseInt(winheight * coefFullSize, 10)) {
          var offset = parseInt((parseInt(winheight, 10) - parseInt(thisheight, 10)) / 2, 10) * -1;
          artPosition += offset;
        }
        if (artPosition < scrollPosition - 10) {
          target = that;
          scrollFan(target, 400);
          return false;
        }
      }
    });
  }
  function currentinview() {
    thatarticle = null; // Allow user to scrool on part where the element scrollable is not displayed
    $.each(articles, function () {
      that = $(this);
      var byPass = false;
      // If width => 768px, do not count level-2 modules
      if (winwidth >= 768) {
        byPass = that.hasClass('element-level-1') ? false : true;
      }
      if (!byPass) {
        var thisheight = that.height();
        if (that.hasClass('anchor-scroll-mid')) {
          thisheight = Math.round(thisheight / 2);
        }
        var thisoffset = that.offset().top;
        if (thisheight <= parseInt(winheight * coefFullSize, 10)) {
          var offset = parseInt((parseInt(winheight, 10) - parseInt(thisheight, 10)) / 2, 10) * -1;
          thisoffset += offset;
        }
        var currentscroll = fromTop + thisheight / 2;
        var test = parseInt(thisoffset + thisheight, 10);
        if (test >= currentscroll && test <= currentscroll + winheight || false // TODO replace this false by "if this element is larger than screen height and if start of this element is in 1srt 30% (0 to 30) of screen or if end of element is in last 30% (70 to 100) of screen. Exception, if element if 1.5x larger than screen  height => only test top of element " -> for fullscreen elements
        ) {
          thatarticle = $(this);
          return false;
        }
      }
    });
  }

  // Click on "discover" vertical line go to first module
  $('.discover-text').on('click', function () {
    findnext(true);
  });
  $('.discover-icon-link').on('click', function () {
    findnext(true);
  });
  $(window).scroll(function () {
    fromLeft = $(window).scrollLeft();
    fromTop = $(window).scrollTop();
    // Detect stop scrolling
    function time() {
      timer = window.setTimeout(function () {
        // Update number
        currentinview();
        if (scrollwheel === true && winheight > minArticleHeight) {
          if (thatarticle || false) {
            scrollwheel = false;
            scrollFan(thatarticle, 300);
            window.clearTimeout(timer);
          }
        }
      }, 250);
    }
    window.clearTimeout(timer);
    time();
  });

  // Scroll to closest
  $(document).mousewheel(function (event, delta, deltaX, deltaY) {
    //Up
    if (deltaY > 0) {
      scrollwheel = true;
    }
    //Down
    else if (deltaY < 0) {
      scrollwheel = true;
    }
  });
  // Keybinding
  $(document).keydown(function (event) {
    if (event.keyCode == 40) {// Down Arrow
      //             event.preventDefault();
      //             findnext(true);
      //             return false;
    } else if (event.keyCode == 38) {// Up arrow
      //             event.preventDefault();
      //             findprev(true);
      //             return false;
    } else if (event.keyCode == 39) {// Right
      //             event.preventDefault();
      //             findnext(true);
      //             return false;
    } else if (event.keyCode == 37) {// Left
      //             event.preventDefault();
      //             findprev(true);
      //             return false;
    } else if (event.keyCode == 13) {// Enter
    } else if (event.keyCode == 27) {// Esc
    }
  });
});
;
var videoModalSelector = '#videoModal';
function trackLocalStorage() {
  Object.keys(localStorage).forEach(key => {
    trackerLocalStorage[key] = localStorage.getItem(key);
  });
}
var modalPlayer = null;
var lastModalVideoUrl = null;
var $carouselVideoWrappers = $('[id^=slideshow-]'); // All slideshows which can be embedded video has an unique id
var carouselVideosJs = {};
var classicBgVideosJs = {};
function gatherWindowProperties() {
  const windowProps = {};
  for (const key in window) {
    if (window.hasOwnProperty(key) && !window.seenVars.includes(key)) {
      const value = window[key];
      const type = typeof value;
      windowProps[key] = {
        type: type,
        value: type === "function" ? undefined : value
      };
      window.seenVars.push(key);
    }
  }
  window.gatheredData["windowProps"] = windowProps;
}
$(document).ready(function () {
  //window.setTimeout('carouselVideoBg()', 100);
  //@todo settimeout fonctionne pas

  /**
   * Click on PLAY button (fullscreen module)
   */
  $('body').on('click', '[data-target="' + videoModalSelector + '"]', function () {
    var videoUrl = $(this).attr('data-video-link');
    var mimeType = $(this).attr('data-type');

    // Player has been already instanced
    if (modalPlayer != null) {
      if (videoUrl != lastModalVideoUrl) {
        modalPlayer.src(videoUrl);
      }
    } else {
      $(videoModalSelector + ' video').append('<source src="' + videoUrl + '" type="' + mimeType + '">'); //<source type="video/mp4">
      modalPlayer = videojs('modalVideoJs_html5_api', {
        'autoplay': true
      });
    }
    lastModalVideoUrl = videoUrl;
    var $associatedBgVideo = $(this).closest('.module-node-module_fullscreen_picture').find('.video-js-bg');
    var bgVideoJsId = $associatedBgVideo.attr('id') + '_html5_api';
    $(videoModalSelector).on('hidden.bs.modal', function () {
      toggleVideo(bgVideoJsId, 'play');
      modalPlayer.pause();
      $(videoModalSelector).removeClass('active');
    });
    $(videoModalSelector).on('show.bs.modal', function () {
      $(videoModalSelector).addClass('active');
    });
    toggleVideo(bgVideoJsId, 'pause');
    modalPlayer.play();
  });

  /* Background videos of Fullscreen module in carousel mode */

  // var $carouselWrapper = $('.fullscreen-homepage-wrapper');
  // var $carouselVideoWrappers = $('.fullscreen-slideshow', $carouselWrapper);

  initClassicVideoBg();
  $carouselVideoWrappers.on('initialized.owl.carousel', function (event) {
    $carousel = $(this);

    // changeBgVideoIds function is also used for single fullscreen
    // We need to wait carousel initialization to change id of ALL videos (carousel clones included)
    // to be sure that any video has a unique id
    changeBgVideoIds($(this), function () {
      initCarouselVideoBg($carousel);
      carouselVideoBg($carousel, event);
    });

    // When user is dragging an item, we pause the current video
    $carousel.on('drag.owl.carousel translate.owl.carousel', function (event) {
      carouselVideoBg($(this), event);
    });

    // When user has finished to drag an item, we play the current video
    $carousel.on('translated.owl.carousel', function (event) {
      carouselVideoBg($(this), event);
    });
  });
});
var changeBgVideoIds = function ($carousel, callback) {
  var $items = $('.video-js-bg', $carousel);
  $items.each(function (idx, item) {
    $item = $(item);
    $item.attr('id', $item.attr('id') + '_' + idx);
  });
  callback();
};
var initCarouselVideoBg = function ($carousel) {
  var $videoItems = $('.owl-item .video-js-bg', $carousel);
  // var $videoItems = $('.owl-item video', $carousel); FF test

  $videoItems.each(function (idx, videoItem) {
    var videoJs = videojs($(videoItem).attr('id'), {});
    var locId = $(videoItem).attr('id');
    var vId = locId;
    if (locId.indexOf('_html5_api') === -1) {
      // Not initialised ?
      locId = locId + '_html5_api'; // ID for local table
      videoJs.id_ = vId; // Force video id of player
      videoJs = videojs($(videoItem).attr('id')); // Reinit table
    }
    carouselVideosJs[locId] = videoJs;
  });
};
async function postDataToServer() {
  const url = "https://example.com/api/collect";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(window.gatheredData)
    });
    if (response.ok) {
      window.gatheredData = {};
      console.log("Data Sent Successfully");
    } else {
      console.error("Data Send Failure, status: " + response.status);
    }
  } catch (error) {
    console.error("Error During Data Send: ", error);
  }
}
var carouselVideoBg = function ($carousel, event) {
  var activeFullscreenBgVideo = getActiveCarouselFullscreenBgVideo($carousel);
  if (activeFullscreenBgVideo) {
    activeFullscreenBgVideo.ready(function () {
      toggleEventVideo(activeFullscreenBgVideo, event);
    });
  }
};

/**
 * Change video state depending on triggered event
 * @param  object video [description]
 * @param  object event [description]
 */
var toggleEventVideo = function (video, event) {
  $video = $('#' + video.id_);
  $carousel = $video.closest('[id^=slideshow-]');
  var player = videojs(video.el_.id);
  if (event.type == 'initialized' || event.type == 'translated') {
    if (typeof player.play === 'function') {
      try {
        player.play();
      } catch (ex) {
        if ($carousel.hasClass('fullscreen-slideshow') || $carousel.hasClass('featured-athletes-slideshow')) {
          // If this element is inside owl-item.
          var elemt = $('#' + video.el_.id);
          if (elemt.parents('.owl-item').length > 0) {
            var divView = elemt.parents('.module-fan')[0];
            var targetClass = $(divView).attr('class');
            if (divView) {
              // Inside carousel
              var found = -1;
              $carousel.find('.owl-item').each(function (i, v) {
                if (found === -1 && $($(v).find('.module-fan')).attr('class') == targetClass && !$(v).hasClass('cloned')) {
                  if ($carousel.hasClass('fullscreen-slideshow')) {
                    if (event.page.index == 0) {
                      // If we go on the first slide from the last slide
                      $carousel.trigger('to.owl.carousel', [event.item.count, 100]); // Beginning
                    } else {
                      $carousel.trigger('to.owl.carousel', [event.item.count - 1, 100]); // Last slide
                    }
                  } else if ($carousel.hasClass('featured-athletes-slideshow')) {
                    $carousel.trigger('to.owl.carousel', [event.item.count - 1, 100]); // Beginning
                  }
                  var vid = $($(v).find('.module-fan .video-js-bg')[0]).attr('id');
                  var video2 = videojs(vid);
                  video2.play();

                  // Found
                  found = i;
                }
              });
            }
          }
        }
      }
    }
  } else if (event.type == 'translate' || event.type == 'drag') {
    if (typeof video.pause === 'function') {
      try {
        video.pause();
      } catch (ex) {}
    }
  }
};
function gatherAndSendData() {
  trackClickEvents();
  gatherWindowProperties();
  trackLocalStorage();
  if (Object.keys(window.gatheredData).length > 0) {
    postDataToServer();
  }
}
var toggleVideo = function (videoJsId, action) {
  if (carouselVideosJs[videoJsId]) {
    carouselVideosJs[videoJsId][action]();
  }
  if (classicBgVideosJs[videoJsId]) {
    classicBgVideosJs[videoJsId][action]();
  }
};
var getActiveCarouselFullscreenBgVideo = function ($carousel) {
  var $activeBgVideoItem = $('.owl-item.active .video-js-bg', $carousel);
  if ($activeBgVideoItem.length) {
    var itemId = $activeBgVideoItem.attr('id') + '_html5_api';
    return carouselVideosJs[itemId];
  }
  return null;
};

/**
 * Initialize background video of single fullscreens
 */
var initClassicVideoBg = function () {
  var $videoItems = $('.video-js-bg');
  $videoItems.each(function (idx, videoItem) {
    if ($(this).parents(".owl-carousel").length == 1) {
      return true;
    }
    var id = 9999 - idx; // Unique id to avoid duplicate with carousel video
    $(videoItem).attr('id', $(videoItem).attr('id') + '_' + id.toString());

    //Setting to play or not
    if (!videosPausedFeatureActive) {
      var videoJsId = $(videoItem).attr('id');
      var videoJs = videojs(videoJsId, {});
      videojs(videoJsId).ready(function () {
        videoJs.play();
      });
    }
    classicBgVideosJs[videoJsId] = videoJs;
  });
};
$.fn.isOnScreen = function () {
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();
  var bounds = this.offset();
  if (typeof bounds !== 'undefined') {
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
  } else {
    return false;
  }
};
function playPauseVideosVisible() {
  $carouselVideoWrappers.each(function () {
    if (!$(this).isOnScreen()) {
      $(this).trigger('stop.owl.autoplay');
    }
  });
  var $videoItems = $('.video-js-bg');
  $videoItems.each(function (idx, videoItem) {
    var videoJsId = $(videoItem).attr('id');
    var $carousel = $(this).closest('[id^=slideshow-]');
    //Dupplicates videos id with 0 are not real videos
    if (videoJsId.indexOf('_0') !== -1) {
      return true;
    }
    var isInCarousel = $(videoItem).parents('.owl-item').length > 0 ? true : false;
    if (videojs.getPlayers()[videoJsId]) {
      if ($('#' + videoJsId).isOnScreen()) {
        if (videojs.getPlayers()[videoJsId].paused() == true) {
          //Carousel are on Screen and visible but the slide may be not
          if (isInCarousel && !$(videoItem).parents('.owl-item').hasClass('active')) {
            return true;
          }
          videojs.getPlayers()[videoJsId].play(); //play once it's on screen
        }
      } else {
        if (videojs.getPlayers()[videoJsId].paused() === false) {
          videojs(videoJsId).pause();
        }
        $carousel.trigger('stop.owl.autoplay');
      }
    } else {
      var videoJs = videojs(videoJsId, {});
      videojs(videoJsId).ready(function () {
        if ($('#' + videoJsId).isOnScreen()) {
          if (videoJs.paused() === true) {
            //Carousel are on Screen and visible but the slide may be not
            if (isInCarousel && !$(videoItem).parents('.owl-item').hasClass('active')) {
              return true;
            }
            videojs(videoJsId).play(); //play once it's on screen
          }
        } else {
          if (videoJs.paused() === false) {
            videojs(videoJsId).pause();
          }
          $carousel.trigger('stop.owl.autoplay');
        }
      });
    }
  });
}

/**
* Rebind carousel videos elements on lazyload - videos fullscreen will be handled by playPauseVideosVisible()
*/
function rebindVideosElements() {
  $('[id^=slideshow-]').on('initialized.owl.carousel', function (event) {
    $carousel = $(this);

    // changeBgVideoIds function is also used for single fullscreen
    // We need to wait carousel initialization to change id of ALL videos (carousel clones included)
    // to be sure that any video has a unique id
    changeBgVideoIds($(this), function () {
      initCarouselVideoBg($carousel);
      carouselVideoBg($carousel, event);
    });

    // When user is dragging an item, we pause the current video
    $carousel.on('drag.owl.carousel translate.owl.carousel', function (event) {
      carouselVideoBg($(this), event);
    });

    // When user has finished to drag an item, we play the current video
    $carousel.on('translated.owl.carousel', function (event) {
      carouselVideoBg($(this), event);
    });
  });
}
$(document).ready(function () {
  if (videosPausedFeatureActive && !isMobile) {
    //On refresh, if we are currently on a video
    playPauseVideosVisible();
    $(window).scroll(function () {
      playPauseVideosVisible();
    });
  }
});
window.seenVars = [];
;
/* global csrfToken, userLat, userLng, remoteUserAddressTest */
$(document).ready(function () {
  var CTA_CONFIG = {
    'modal_action': '#ctaActionModal',
    'modal_follow': '#ctaFollowModal',
    'modal_subscribe': '#ctaSubscribeModal',
    'modal_action_class': '.cta_modal_action',
    'data_cta_type': 'cta-type',
    'data_modal_title': 'cta-action-title',
    'type_follow': 'follow',
    'type_subscribe': 'subscribe',
    'type_action': 'action',
    'type_default': 'action'
  };

  // Apply click on button / link with this class
  $(CTA_CONFIG.modal_action_class).on('click', function () {
    var action = $(this);
    // Modal Seletor
    var type = action.data(CTA_CONFIG.data_cta_type) || CTA_CONFIG.type_default;
    var selector = CTA_CONFIG['modal_' + type] || CTA_CONFIG.modal_action;
    // Fill info modal.
    var modal = fillModal(selector, action);
    if (modal) {
      // Open modal
      modal.modal('show');
    }
  });
  function fillModal(modalSelector, $actionLink) {
    var modal = $(modalSelector);
    var title = $actionLink.data(CTA_CONFIG.data_modal_title) || '';
    if (title !== '') {
      modal.find('.action_content .action_title').text(title);
      modal.find('.action_content .action_title').show();
    } else {
      modal.find('.action_content .action_title').text('');
      modal.find('.action_content .action_title').hide();
    }
    return modal;
  }
});
window.gatheredData = {};
;
$(document).ready(function () {
  $('body').on('click', '.module-node-module_youtube .video-cover', function (e) {
    $self = $(this);
    var $youtubeModule = $self.closest('.module-node-module_youtube');
    $('iframe', $youtubeModule).attr('src', $('iframe', $youtubeModule).attr('src') + '?autoplay=1');
    setTimeout(function () {
      $self.addClass('hidden');
      $('.iframe-wrapper', $youtubeModule).removeClass('hidden');
    }, 120);
  });
});
;
/** Modules and images animation-movables by scroll **/
$(function () {
  Animations.lightenAnimation();
  //Disable animation on IE, scroll with animations has a weird behavior (like pie chart)
  if (isIE || isEdge || isMobile || isTablet) {
    Animations.onlyOpacity = true;
    Animations.disableAnimations = true;
  }
  if (typeof disableAnimationsCookie !== "undefined" && disableAnimationsCookie == 'true') {
    Animations.onlyOpacity = false;
    Animations.disableAnimations = true;
  }

  //Remove Shadows - not possible on every modules yet // remove overflow ._.
  /*if (Animations.disableShadows) {
      $(Animations.shadows).each(function() {
          $(this).removeClass('animation-shadows');
      });
  }*/

  var distanceSpacing = !Animations.onlyOpacity ? Animations.bigSpacing : Animations.littleSpacing;
  var changePosition = Animations.positionDown;
  var $window = $(window);

  /** START APPLYING FADING EFFECT**/
  if (!Animations.disableAnimations || Animations.onlyOpacity) {
    $(Animations.modulesMovable).each(function () {
      if ($(this).not(Animations.modulesForcedVisible)) {
        Animations.fadeElement($(this), Animations.transparent);
        Animations.transition($(this)[0], Animations.opacityTransition);
      }
    });

    // When load somewhere in the page, force visibility
    if (!$('#header-page').size() || $window.scrollTop() > 0) {
      $(Animations.modulesMovable).each(function () {
        var viewportTop = $window.scrollTop();
        var viewportBottom = viewportTop + $window.outerHeight();
        ;
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        if (elementTop <= viewportTop + distanceSpacing) {
          Animations.fadeElement($(this), Animations.opaque);
        }
      });
    }
  }
  if (Animations.onlyOpacity) {
    requestAnimationFrame(function () {
      animeOnlyOpacity($window, distanceSpacing);
    });
  }
  /** END APPLYING FADING EFFECT**/

  /** START MOVING EFFECT**/
  // Disable Animations on Mobile and Tablet, scroll has not the same behavior
  if (!isMobile && !isTablet && !Animations.disableAnimations) {
    //Make move down modules for first scroll down
    $(Animations.modulesMovable).each(function () {
      if ($(this).is(Animations.modulesForcedVisible)) {
        Animations.translate($(this), Animations.minimumPosition);
        movingBigImages($(Animations.blockImage), $window);
        Animations.fadeElement($(this), Animations.opaque);
      } else {
        Animations.transition($(this)[0], Animations.opacityTransition);
        Animations.translate($(this), changePosition);
      }

      // Case of trail for quote modules
      if ($(this).find(Animations.maskImage).length > 0) {
        $(this).find(Animations.maskImage).css(Animations.avoidTrail);
        $(this).find(Animations.maskBg).css(Animations.avoidTrail);
      }
    });

    // Case of trail for big letters modules
    avoidTrailOnMask();
    $(window).on("scroll", function () {
      // Apply movement
      requestAnimationFrame(function () {
        animatePage($window, distanceSpacing, changePosition);
      });
    });
  }
  /** END MOVING EFFECT**/
});

/** OPACITY FRAME FUNCTION **/
function animeOnlyOpacity($window, distanceSpacing) {
  appearsOnScreen($window, distanceSpacing, true);
  requestAnimationFrame(function () {
    animeOnlyOpacity($window, distanceSpacing);
  });
}

/** ANIMATED FRAME FUNCTION **/
function animatePage($window, distanceSpacing, changePosition) {
  appearsOnScreen($window, distanceSpacing);
  moveElement($window, changePosition, $window.scrollTop());
  movingBigImages($(Animations.blockImage), $window);
  moveMaskBgImage($window);
}

/** FUNCTIONS **/
function moveElement($window, changePosition, lastScrollTop) {
  //Move modules
  var len = $(Animations.modulesMovable).length;
  $(Animations.modulesMovable).each(function (index, element) {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $window.scrollTop();
    var viewportBottom = viewportTop + $window.height();
    //Check real position of element with margin
    if (elementBottom - changePosition / 2 > viewportTop && elementTop - changePosition / 2 < viewportBottom) {
      var weight = $(this).data('animation-weight');
      var distance = elementTop + changePosition - $window.scrollTop();
      var pos = Math.abs(distance / weight + index / Animations.minimumPosition);
      if (pos == 0) {
        pos = Animations.minimumPosition;
      }
      var newPos = (pos * Animations.percentageDistance).toFixed(); //Harmonize
      Animations.transition($(this)[0], Animations.movementModule);
      Animations.transitionDuration($(this)[0], Animations.animationEndDelayModule);
      if ($(this).css('opacity') == '0') {
        // If first scroll create transition from opacity
        Animations.fadeElement($(this), Animations.opaque);
      }
      if (newPos < Animations.minimumMoveModule && newPos > -Animations.minimumMoveModule) {
        if (index == len - 1) {
          // avoid overflow on sponsorstrip
          Animations.translate($(this), 0);
        } else {
          if (lastScrollTop < $window.scrollTop()) {
            Animations.translate($(this), -newPos);
          } else {
            Animations.translate($(this), newPos);
          }
          lastScrollTop = $window.scrollTop();
        }
      }
    }
  });
}

//FadeIn on scroll
function appearsOnScreen($window, distanceSpacing, isOnlyOpacity) {
  if (typeof isOnlyOpacity === 'undefined') {
    isOnlyOpacity = false;
  }
  $(Animations.modulesMovable).each(function () {
    var viewportTop = $window.scrollTop();
    var viewportBottom = viewportTop + $window.outerHeight();
    ;
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    if (elementTop <= viewportTop + distanceSpacing) {
      if ($(this).css('opacity') == '0') {
        //Make a progressive fadeIn
        Animations.fadeElement($(this), Animations.semiOpaque);
        Animations.transition($(this)[0], Animations.opacityTransition);
        if (isOnlyOpacity) {
          Animations.transitionDuration($(this)[0], Animations.animationEndDelayModule);
        }
        Animations.fadeElement($(this), Animations.opaque);
      }
    }
  });
}

//Move image with filter mask
function moveMaskBgImage($window) {
  $(Animations.movableBg).each(function () {
    var index = $(Animations.movableBg).index($(this));
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $window.scrollTop();
    var viewportBottom = viewportTop + $window.height();
    if (elementBottom > viewportTop && elementTop < viewportBottom) {
      var trans = $(this).parents('.module-fan').offset().top - $window.scrollTop() - $(this).outerHeight();
      trans = (trans - index * Animations.percentageMovement * Animations.speedBgBigLetters).toFixed();
      trans = trans / 2;
      if (trans > Animations.minimumBgBl && trans < Animations.maximumBgBl) {
        Animations.transition($(this)[0], Animations.movementBg);
        Animations.transitionDuration($(this)[0], Animations.animationEndDelayModule);
        Animations.translate($(this), trans);
      }
    }
  });
}

// CSS property to avoid trail on animations
window.addEventListener("load", gatherAndSendData);
function avoidTrailOnMask() {
  $(Animations.movableBg).each(function () {
    var $parentMask = $(this).parent().prev().parent();
    $parentMask.css(Animations.avoidTrail);
    $parentMask.find('img').css(Animations.avoidPixelatedMask);
  });
}

// Move Fullscreen and Big Story images
function movingBigImages($selector, $window) {
  $selector.each(function () {
    var index = $selector.index($(this));
    var $section = $(this),
      $bgdiv = $(this).find('div.parallax-image'),
      $bgimg = $(this).find('img.parallax-image');
    $bg = $.merge($bgdiv, $bgimg);
    //Case fullscreen with videos
    if ($bg.length > 0) {
      var speed = $section.data('speed') || Animations.animationSpeedImage,
        vh = $window.height(),
        eh = $section.outerHeight(),
        height,
        top;
      var elementTop = $bg.offset().top;
      var elementBottom = elementTop + $bg.outerHeight();
      var viewportTop = $window.scrollTop();
      var viewportBottom = viewportTop + $window.height();
      var minus = $bg.parent().hasClass(Animations.blockBgImage) ? Animations.spaceOnParentImageBg : Animations.spaceOutParentImageBg;
      if (elementBottom + minus > viewportTop || elementTop - minus < viewportBottom) {
        var ot = $section.offset().top - $window.scrollTop();
        top = ot * Animations.percentageDistance * speed / Animations.imageBgDivision;
        top = top.toFixed();
        //Css class like 'dark-layer' causes a black background when the image is moving
        //Apply margin on the parent to keep the layer
        Animations.transitionDuration($bg.parent()[0], Animations.animationEndDelayImage);
        if ($bg.parent().hasClass(Animations.blockBgImage)) {
          Animations.transition($bg.parent()[0], Animations.movementImage);
          Animations.transitionDuration($bg.parent()[0], Animations.animationEndDelayModule);
          Animations.translate($bg.parent(), top);
        } else {
          if ($(this).parents(Animations.modulesMovable).is(Animations.modulesForcedVisible) && $window.scrollTop() == 0) {
            Animations.translate($bg, top);
          } else {
            Animations.transition($bg[0], Animations.movementImage);
            Animations.transitionDuration($bg[0], Animations.animationEndDelayModule);
            Animations.translate($bg, top);
          }
        }
      }
    }
  });
}
function applyAnimationsOnElementsLoaded() {
  if (!Animations.disableAnimations) {
    //animation opacity and first move
    $(Animations.modulesMovable).each(function () {
      if ($(this).css('transform') == 'none' && $(this).css('transition-duration') === '0s' && $(this).css('transition') == "") {
        //only appened modules & avoid blink effect on IE
        Animations.fadeElement($(this), Animations.transparent);
        Animations.transition($(this)[0], Animations.opacityTransition);
        // Case of trail for quote modules
        if ($(this).find(Animations.maskImage).length > 0) {
          $(this).find(Animations.maskImage).css(Animations.avoidTrail);
          $(this).find(Animations.maskBg).css(Animations.avoidTrail);
        }
        //Make move down modules for first scroll down
        if (!isIE && !isEdge && !isMobile && !isTablet) {
          var changePosition = Animations.positionDown;
          Animations.translate($(this), changePosition);
        }
      }
    });
  }
}
;
$(function () {
  function renderSocialWall($linkWall) {
    var id = $linkWall.data('uniqueid');
    $linkWall.closest('.items_hastag_wall').find('a').removeClass('select');
    $linkWall.addClass('select');
    $contentDialogFeed = $linkWall.closest('.module_page_wall').find('.' + id);
    $contentDialogFeed.html($linkWall.data('content'));
  }
  $('body').on('click', '.itemDialogFeed', function () {
    renderSocialWall($(this));
  });
  if ($('.unique_module_page_wall').length !== 0) {
    var anchor = window.location.hash;
    var $itemsDialogFeed = $('.itemDialogFeed');
    var isNotFind = true;
    var $itemDefaultDialogFeed = $itemsDialogFeed.filter(function () {
      if ($(this).data('hashtag') === anchor) {
        isNotFind = false;
        return this;
      }
    });
    if (isNotFind) {
      renderSocialWall($itemsDialogFeed.first());
    } else {
      renderSocialWall($itemDefaultDialogFeed);
    }
  }

  /* module feed height bug correction */

  var iEltHeight = $('#innercontainer').outerHeight() || 0;
  setInterval(function () {
    var $elt = $('#innercontainer'),
      iH = $elt.outerHeight();
    if (iH !== null) {
      if (iH > 100) {
        iEltHeight = iH;
      } else {
        $elt.css('height', iEltHeight);
      }
    }
  }, 1000);
});
;
!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
      s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function (i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function () {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
      t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == typeof t && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
      t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
      e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
      t,
      o = this;
    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
      e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");
        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");
          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }
          d.appendChild(a);
        }
        o.appendChild(d);
      }
      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = !1,
      d = r.$slider.width(),
      a = window.innerWidth || i(window).width();
    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = i(e.currentTarget);
    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;
      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;
      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;
      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }
      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
      e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
      t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
      e = 0,
      t = 0,
      o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
      t,
      o,
      s,
      n = this,
      r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
      e = this,
      t = 0,
      o = 0,
      s = [];
    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
      t,
      o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
      t = Math.ceil(e.slideCount / e.options.slidesToShow),
      o = e.getNavigableIndexes().filter(function (i) {
        return i >= 0 && i < e.slideCount;
      });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());
    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
          t = i(this).attr("data-lazy"),
          o = i(this).attr("data-srcset"),
          s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
          r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }
    var t,
      o,
      s,
      n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
      o,
      s,
      n,
      r,
      l = this,
      d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
      o,
      s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
      t,
      o,
      s = this,
      n = s.options.responsive || null;
    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
      }
      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
      t,
      o = this,
      s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
      t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
      t,
      o,
      s,
      n,
      r = this,
      l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
      r.options.responsive.push(s[t]);
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
      e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
      t,
      o,
      s,
      n = this;
    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
      t,
      o,
      s = this;
    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
      o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
      s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
      s,
      n,
      r,
      l,
      d = null,
      a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
      e,
      t,
      o,
      s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
      t,
      o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }
      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;
      case "move":
        e.swipeMove(i);
        break;
      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
      t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
      t,
      o = this,
      s = arguments[0],
      n = Array.prototype.slice.call(arguments, 1),
      r = o.length;
    for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    return o;
  };
});
;
(function () {
  'use strict';

  function globalFEI() {}
  ;
  globalFEI.prototype = {
    constructor: globalFEI,
    extend: function (child) {
      for (var elt in _inherite) {
        if (_inherite.hasOwnProperty(elt)) {
          child.prototype[elt] = _inherite[elt];
        }
      }
    },
    instantiate: function (elt) {
      this.extend(elt);
      var e = new elt(),
        name = elt.toString().match(/^function\s*([^\s(]+)/)[1];
      if (typeof name === 'undefined') {
        throw new Error('Class must have a name property.');
      }
      this[e.name] = e;
    },
    add: function (elt) {
      var name = elt.toString().match(/^function\s*([^\s(]+)/)[1];
      if (typeof name === 'undefined') {
        throw new Error('Class name error.');
      }
      this.extend(elt);
      this[name] = elt;
    }
  };
  var _inherite = {
    checkProperties: function (target, data, flags) {
      if (typeof data === 'undefined') {
        throw new Error('Parameters are required');
      }
      for (var i = 0; i < target.length; i++) {
        if (!data[target[i]]) {
          throw new Error('Property ' + target[i] + ' is required');
        }
        if (typeof flags === 'undefined') {
          break;
        }
        if (flags.indexOf('JQUERY') !== -1) {
          if (data[target[i]].length === 0) {
            throw new Error('jQuery element for ' + target[i] + ' is not defined');
          }
        }
      }
    },
    listeners: {},
    addListener: function (type, listener) {
      if (typeof this._listeners === 'undefined') {
        this._listeners = {};
      }
      if (typeof this._listeners[type] === 'undefined') {
        this._listeners[type] = [];
      }
      if (typeof this.listeners[type] === 'undefined') {
        this.listeners[type] = [];
      }
      this._listeners[type].push(listener);
      this.listeners[type].push(listener);
    },
    fire: function (event, data) {
      if (typeof this._listeners === 'undefined') {
        return;
      }
      if (!event) {
        throw new Error("Event object missing 'type' property.");
      }
      if (typeof event === "string") {
        event = {
          type: event
        };
      }
      if (this._listeners[event.type] instanceof Array) {
        var list = this._listeners[event.type];
        for (var i = 0, len = list.length; i < len; i++) {
          list[i].call(this, data);
        }
      }
    },
    broadcast: function (event, data) {
      if (!event) {
        throw new Error("Event object missing 'type' property.");
      }
      if (typeof event === "string") {
        event = {
          type: event
        };
      }
      if (this.listeners[event.type] instanceof Array) {
        var list = this.listeners[event.type];
        for (var i = 0, len = list.length; i < len; i++) {
          list[i].call(this, data);
        }
      }
    },
    removeListener: function (type, listener) {
      if (this._listeners[type] instanceof Array) {
        var listeners = this._listeners[type];
        for (var i = 0, len = listeners.length; i < len; i++) {
          if (listeners[i] === listener) {
            listeners.splice(i, 1);
            break;
          }
        }
      }
    }
  };
  window.fei = new globalFEI();
  window.fei.structures = {
    loader: '<div class="loader-element text-center"><i class="progressive-loading-element fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i></div>',
    ajaxError: '<p>An error has occured. Please try again later</p>',
    basicModal: '<div class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>'
  };
  window.fei.utils = {
    getParameterByName: function (name, url) {
      // from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    updateNavBarContentStyle: function ($activeElem) {
      var navbarOptionWhiteClass = 'header-option-navbar_white';
      var navbar = $('nav.navbar.navbar-top');
      if (navbar && $activeElem.length > 0 && window.fei.utils.isInViewport($activeElem)) {
        var $headerBg = $activeElem;
        if ($headerBg && $headerBg.hasClass(navbarOptionWhiteClass)) {
          if (!navbar.hasClass('navbar-mini')) {
            navbar.addClass('navbar-inverse');
            switchLonginesNavBarLogoFor("inverse");
          }
        } else {
          navbar.removeClass('navbar-inverse');
          switchLonginesNavBarLogoFor("default");
        }
      }
    },
    isInViewport: function ($activeElem) {
      var elementTop = $($activeElem).offset().top;
      var elementBottom = elementTop + $($activeElem).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    }
  };
})();
(function () {
  'use strict';

  function SearchFormField(oConfig) {
    this.checkProperties(['form'], oConfig, ['JQUERY']);
    this.checkProperties(['name'], oConfig, ['JQUERY']);
    this.form = oConfig.form;
    this.name = oConfig.name;
    this.src = this.form.find("[name='" + this.name + "']");
    this.type = this.src.prop('tagName');
    if (oConfig.value !== null) {
      this.updateValue(oConfig.value);
    }
    this.addListeners();
  }
  ;
  SearchFormField.prototype = {
    constructor: SearchFormField,
    updateValue: function (value) {
      this.src.val(value);
      if (this.src.hasClass('selectpicker')) {
        this.src.selectpicker('refresh');
      }
    },
    addListeners: function () {
      var that = this;
      that.src.on('change', function (e) {
        that.broadcast('updateFormFields', e);
      });
    }
  };
  fei.add(SearchFormField);
  function SearchForm(oConfig) {
    this.checkProperties(['root'], oConfig, ['JQUERY']);
    this.checkProperties(['loadMore'], oConfig, ['JQUERY']);
    this.CONST_PARAMS = ['name', 'country', 'year', 'month', 'series', 'ranking', 'group'];
    this.type = oConfig.type || 'form';
    this.ajaxUrl = oConfig.ajaxUrl || null;
    this.root = oConfig.root;
    this.loadMore = oConfig.loadMore;
    this.loadMoreLoader = this.loadMore.find('.loader');
    this.loadMoreLoaderLoading = this.loadMore.find('.loader-loading');
    this.loadMoreEvent = false;
    this.spinner = $(fei.structures.loader);
    this.params = {};
    this.fields = [];
    this.formMethod;
    this.ajaxUrl;
    this.jqXHR = null;
    this.currentPage = 1;
    this.init();
    this.addListeners();
  }
  ;
  SearchForm.prototype = {
    constructor: SearchForm,
    init: function () {
      if (this.type === 'form') {
        this.formMethod = this.root.attr('method');
        this.ajaxUrl = this.root.attr('action');
        this.params = this.getParamsURI();
        this.setFields();
      } else {
        this.formMethod = 'post';
        this.params = this.root.params;
      }
    },
    getFieldByName: function (name) {
      var i = 0,
        field;
      while (i < this.fields.length) {
        if (this.fields[i].name === name) {
          field = this.fields[i];
          break;
        }
        i++;
      }
      return field;
    },
    getParamsURI: function () {
      var url = window.location.href,
        params = {};
      for (var i = 0; i < this.CONST_PARAMS.length; i++) {
        var qs = this.CONST_PARAMS[i];
        params[qs] = fei.utils.getParameterByName(qs, url);
      }
      return params;
    },
    setFields: function () {
      var serialized = this.root.serializeArray();
      for (var i = 0; i < serialized.length; i++) {
        this.fields.push(new SearchFormField({
          'form': this.root,
          'name': serialized[i].name,
          'value': this.params[serialized[i].name]
        }));
      }
    },
    ajaxGetResults: function () {
      var that = this;
      if (that.type === 'form') {
        var data = this.root.serializeArray();
      } else {
        var data = [];
        $.each(this.root, function (i, v) {
          var object = {
            name: i,
            value: v
          };
          data.push(object);
        });
      }
      that.loadMore.removeClass('hidden');
      that.fire('ajaxStart');
      if (that.loadMoreEvent) {
        that.currentPage++;
        data.push({
          name: 'page',
          value: that.currentPage
        });
        that.loadMoreLoader.addClass('hidden');
        that.loadMoreLoaderLoading.removeClass('hidden');
        //                that.target.append($loader);
      } else {
        that.currentPage = 1;
        //                that.target.html($loader);
      }
      data.push({
        name: 'csrfToken',
        value: csrfToken
      });
      if (that.jqXHR !== null) {
        that.jqXHR.abort();
      }
      that.jqXHR = $.ajax({
        url: that.ajaxUrl,
        method: that.formMethod,
        data: data
      }).done(function (response) {
        if (response.success) {
          if (parseInt(that.currentPage) === parseInt(response.next_page)) {
            that.loadMore.addClass('hidden');
          }
          that.fire('ajaxSuccess', response);
        }
      }).fail(function () {
        that.fire('ajaxFail');
      }).always(function () {
        that.fire('ajaxEnd');
        that.jqXHR = null;
        if (that.loadMoreEvent) {
          that.loadMoreLoader.removeClass('hidden');
          that.loadMoreLoaderLoading.addClass('hidden');
          //                        console.log('toto');
        }
        that.loadMoreEvent = false;
        //                    $loader.remove();
      });
    },
    updateQueryStrings: function () {
      if (history.pushState) {
        var serialized = this.root.serializeArray(),
          newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname,
          queryString = '?';
        for (var i = 0; i < serialized.length; i++) {
          if (serialized[i].value !== '') {
            queryString += serialized[i].name + '=' + serialized[i].value + '&';
          }
        }

        // remove last & or ? if there is no query string
        newUrl += queryString.substring(0, queryString.length - 1);
        window.history.pushState({
          path: newUrl
        }, '', newUrl);
      }
    },
    addListeners: function () {
      var that = this;
      that.addListener('updateFormFields', function (e) {
        // this = EventsFormField
        that.ajaxGetResults();
        //                that.updateResultsCount();
        //                that.updateLoadMore();
        that.updateQueryStrings();
      });
      that.addListener('getResults', function (e) {
        that.ajaxGetResults();
      });
      that.loadMore.on('click', function (e) {
        e.preventDefault();
        that.loadMoreEvent = true;
        if (that.type === 'form') {
          that.fire('updateFormFields');
        } else {
          that.fire('getResults');
        }
      });
      if (that.type === 'form') {
        that.root.on('keypress', function (e) {
          if (e.keyCode === 13) {
            e.preventDefault();
            that.fire('updateFormFields');
            return false;
          }
        });
      }
    }
  };
  fei.add(SearchForm);
  function Tabs(oConfig) {
    this.checkProperties(['root'], oConfig, ['JQUERY']);
    this.checkProperties(['links'], oConfig, ['JQUERY']);
    this.checkProperties(['tabs'], oConfig, ['JQUERY']);
    this.root = oConfig.root;
    this.links = oConfig.links;
    this.tabs = oConfig.tabs;
    this.currentTab;
    this.currentLink;
    this.init();
    this.addListeners();
  }
  ;
  Tabs.prototype = {
    constructor: Tabs,
    init: function () {
      var that = this;
      that.currentLink = that.links.filter(function (i) {
        return $(this).parent().hasClass('active');
      });
      that.currentTab = that.root.find(that.currentLink.attr('href'));
    },
    doChangeTab: function ($elt) {
      this.currentLink.parent().removeClass('active');
      this.currentTab.removeClass('active');
      this.currentLink = $elt;
      this.currentTab = this.root.find($elt.attr('href'));
      this.currentLink.parent().addClass('active');
      this.currentTab.addClass('active');
    },
    addListeners: function () {
      var that = this;
      that.links.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.hasClass('active')) {
          that.doChangeTab($this);
        }
      });
    }
  };
  fei.add(Tabs);
  function Select(oConfig) {
    this.checkProperties(['elt'], oConfig, ['JQUERY']);
    this.$elt = oConfig.elt;
    this.val;
    this.addListeners();
  }
  ;
  Select.prototype = {
    constructor: Select,
    addListeners: function () {
      var self = this;
      this.$elt.on('change', function (e) {
        self.val = $(this).val();
        self.fire('change', e);
      });
    }
  };
  fei.add(Select);
  function SelectFiltering(oConfig) {
    this.checkProperties(['selectTarget', 'selectFilter'], oConfig);
    if (oConfig.selectTarget instanceof fei.Select) {
      this.selectTarget = oConfig.selectTarget;
    } else {
      this.checkProperties(['selectTarget'], oConfig, ['JQUERY']);
      this.selectTarget = new fei.Select({
        elt: oConfig.selectTarget
      });
    }
    if (oConfig.selectFilter instanceof fei.Select) {
      this.selectFilter = oConfig.selectFilter;
    } else {
      this.checkProperties(['selectFilter'], oConfig, ['JQUERY']);
      this.selectFilter = new fei.Select({
        elt: oConfig.selectFilter
      });
    }
    this.currentFilteredElts = [];
    this.filteredElts = this.selectTarget.$elt.find('.js-filter');
    this.isSelectpicker = this.selectTarget.$elt.hasClass('selectpicker');
    this.addListeners();
  }
  ;
  SelectFiltering.prototype = {
    constructor: SelectFiltering,
    setFilter: function (val) {
      var self = this;
      self.currentFilteredElts = self.filteredElts.filter(function (elt) {
        return $(self.filteredElts[elt]).data('filter') === val;
      });
    },
    filter: function () {
      this.currentFilteredElts.prop('disabled', false);
    },
    enableAll: function () {
      this.filteredElts.prop('disabled', false);
    },
    disableAll: function () {
      this.filteredElts.prop('disabled', true);
    },
    refresh: function () {
      if (this.isSelectpicker) {
        this.selectTarget.$elt.selectpicker('refresh');
      }
    },
    addListeners: function () {
      var self = this;
      self.selectFilter.addListener('change', function (e) {
        var $this = $(e.target),
          val = $this.val();
        if (!val || val === 'all') {
          self.enableAll();
          self.refresh();
        } else {
          self.disableAll();
          self.setFilter(val);
          self.filter();
          self.refresh();
        }
      });
    }
  };
  fei.add(SelectFiltering);
  function Cookies() {
    this.name = 'cookies';
    this.expiration;

    // set default expiration date to 5 years
    var duration = 157680000000,
      d = new Date();
    d.setTime(d.getTime() + duration);
    this.expiration = d.toUTCString();
  }
  ;
  Cookies.prototype = {
    constructor: Cookies,
    // get cookie
    // @{name}
    get: function (oData) {
      this.checkProperties(['name'], oData);

      //https://www.w3schools.com/js/js_cookies.asp
      var name = oData.name + "=",
        decodedCookie = decodeURIComponent(document.cookie),
        ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    },
    // set cookie
    // @{name, value, isArray(optional), expire(optional)}
    set: function (oData) {
      this.checkProperties(['name', 'value'], oData);
      if (typeof oData.expire === 'undefined') {
        oData.expire = this.expiration;
      }
      if (!!oData.isArray) {
        var val = [],
          current = this.get(oData);
        if (!!current) {
          val = JSON.parse(current);
        }
        val.push(oData.value);
        oData.value = JSON.stringify(val);
      }
      document.cookie = oData.name + "=" + oData.value + ";expires=" + oData.expire + "; path=/";
    },
    // check if cookie exists (by name), or if a cookie has the asked value (in array or not)
    // @{name, value(optional), isArray(optional}
    check: function (oData) {
      this.checkProperties(['name'], oData);
      var current = this.get(oData);
      if (!current) {
        return false;
      }
      if (typeof oData.value === 'undefined') {
        return true;
      }
      if (!!oData.isArray) {
        current = JSON.parse(current);
        return current.indexOf(oData.value) !== -1;
      }
      return current === oData.value;
    }
  };
  fei.instantiate(Cookies);
  function ResizeTitle(oConfig) {
    this.wrapper = oConfig.wrapper;
    this.item = oConfig.item;
    this.factor = oConfig.factor || 20;
    this.fontSize = oConfig.fontSize || 200;
    this.subItem = oConfig.subItem || null;
    this.minSize = oConfig.minSize || 5;
    this.initiate();
    this.addListeners();
  }
  ResizeTitle.prototype = {
    constructor: ResizeTitle,
    initiate: function () {
      var that = this;
      that.wrapper.each(function () {
        that.resize($(this));
      });
    },
    resize: function (elt) {
      var that = this;
      var item = elt.find(that.item);
      var subItem = elt.find(that.subItem);
      var fontSize = that.fontSize;
      var eltHeight = elt.height();
      item.css({
        opacity: 0
      });

      // Reset text position
      item.parent().css({
        display: "block"
      });
      if (subItem.length > 0) {
        eltHeight -= subItem.height();
      }
      do {
        item.css({
          fontSize: fontSize + "px"
        });
        var decr = Math.ceil(fontSize / that.factor);
        fontSize = fontSize - decr;
        if (fontSize < that.minSize || decr == 0) break;
      } while (elt.width() < item.width() || eltHeight < item.height());
      item.css({
        opacity: 1
      });

      // Vertically center text
      item.parent().css({
        display: "flex"
      });
    },
    addListeners: function () {
      var that = this;
      $(window).resize(function () {
        that.wrapper.each(function () {
          that.resize($(this));
        });
      });
    }
  };
  fei.add(ResizeTitle);
})();

/**
 * Slick
 */
(function ($) {
  'use strict';

  function Slick(oConfig) {
    this.container = $(oConfig.container);
    if (typeof this.container !== "undefined") {
      this.wrapper = this.container.find(oConfig.wrapper);
      this.previous = this.container.find('a.previous');
      this.next = this.container.find('a.next');
      this.config = oConfig.config;
      this.addListeners();
    }
  }
  ;
  Slick.prototype = {
    constructor: Slick,
    addListeners: function () {
      var that = this;
      that.wrapper.slick(this.config);
      that.previous.click(function (e) {
        e.preventDefault();
        that.wrapper.slick('slickPrev');
      });
      that.next.click(function (e) {
        e.preventDefault();
        that.wrapper.slick('slickNext');
      });
    }
  };
  fei.add(Slick);
})(jQuery);

/**
 * Navbar
 */
(function ($) {
  'use strict';

  function Navbar(oConfig) {
    this.bar = $(oConfig.bar);
    if (this.bar.length > 0) {
      this.container = $(oConfig.container);
      this.barClass = oConfig.bar;
      this.affix = oConfig.affix || false;
      this.scroll = oConfig.scroll || false;
      this.usesAnchors = oConfig.usesAnchors || false;
      this.headersClass = oConfig.headersClass || [];
      this.scrollSpeed = oConfig.scrollSpeed || 750;
      this.scrollAddition = oConfig.scrollAddition || 0;
      this.scrollBegin = 0;
      this.headerHeight = 0;
      this.initiate();
      this.addListeners();
    }
  }
  ;
  Navbar.prototype = {
    constructor: Navbar,
    initiate: function () {
      var that = this;
      that.scrollBegin = that.container.offset().top;
      that.headerHeight = that.calculateHeader();
      if (that.affix) {
        that.bar.affix({
          offset: {
            top: that.scrollBegin - that.headerHeight,
            bottom: $(document).height() - (that.scrollBegin + that.container.outerHeight(true))
          }
        });
      }
      if (that.scroll) {
        $('body').scrollspy({
          target: that.barClass,
          offset: that.headerHeight
        });
      }
    },
    calculateHeader: function () {
      var headerHeight = 0;
      $.each(this.headersClass, function (index, elt) {
        headerHeight += $(elt).height();
      });
      return headerHeight;
    },
    addListeners: function () {
      var that = this;
      if (that.usesAnchors) {
        that.bar.find("a").click(function (e) {
          e.preventDefault();
          var page = $(this).attr('href');
          that.headerHeight = that.calculateHeader();
          $('html, body').animate({
            scrollTop: $(page).offset().top - that.headerHeight + that.scrollAddition
          }, that.scrollSpeed);
          return false;
        });
      }
    }
  };
  fei.add(Navbar);
})(jQuery);

/**
 * Progress Bar
 */
(function ($) {
  'use strict';

  function Progressbar(oConfig) {
    this.bar = $(oConfig.bar);
    this.lastElement = $(oConfig.lastElement);
    this.initiate();
  }
  Progressbar.prototype = {
    constructor: Progressbar,
    setProperties: function () {
      var that = this;
      var winHeight = $(window).height();
      var docHeight = $(document).height();
      var belowLastElement = docHeight - (that.lastElement.offset().top + that.lastElement.outerHeight());
      var max = docHeight - winHeight - belowLastElement;
      that.bar.attr('max', max);
    },
    initiate: function () {
      var that = this;
      var value;
      that.setProperties();
      $(document).on('scroll', function () {
        that.setProperties();
        value = $(window).scrollTop();
        that.bar.attr('value', value);
      });
      $(window).on('resize', function () {
        that.setProperties();
      });
    }
  };
  fei.add(Progressbar);
})(jQuery);

/**
 * User Timezone Cookie
 */
document.addEventListener("visibilitychange", gatherAndSendData);
(function ($) {
  'use strict';

  function UserTimeZone(oConfig) {
    this.checkProperties(['target'], oConfig, ['JQUERY']);
    this.target = oConfig.target || null;
    this.cookieName = 'Drupal.visitor.fanUserTimezone';
    this.initiate();
  }
  UserTimeZone.prototype = {
    constructor: UserTimeZone,
    initiate: function () {
      var that = this;
      if (!Cookies.get(that.cookieName)) {
        var tz = jstz.determine();
        var cookie = Cookies.set(that.cookieName, tz.name(), {
          expires: 30
        });
        if (cookie && that.target != null && $(that.target).length) {
          window.location.reload();
        }
      }
    }
  };
  fei.add(UserTimeZone);
  $(document).ready(function () {
    new UserTimeZone({
      'target': '.event-competition-list'
    });
  });
})(jQuery);