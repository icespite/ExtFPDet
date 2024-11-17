(function (blueConic, undefined) {
  var ps = 'https://plugins.blueconic.net/';
  var pf = '/gallery/';
  (function () {
    var a = false,
      b = /xyz/.test(function () {
        xyz;
      }) ? /\b_super\b/ : /.*/;
    this.BCClass = function () {};
    BCClass.extend = function (g) {
      var f = this.prototype;
      a = true;
      var e = new this();
      a = false;
      for (var d in g) {
        e[d] = typeof g[d] == "function" && typeof f[d] == "function" && b.test(g[d]) ? function (h, i) {
          return function () {
            var k = this._super;
            this._super = f[h];
            var j = i.apply(this, arguments);
            this._super = k;
            return j;
          };
        }(d, g[d]) : g[d];
      }
      function c() {
        if (!a && this.init) {
          this.init.apply(this, arguments);
        }
      }
      c.prototype = e;
      c.constructor = c;
      c.extend = arguments.callee;
      return c;
    };
  })();
  var InteractionType = BCClass.extend({
    init: function (a) {},
    getPreloadProperties: function () {
      return [];
    },
    getContent: function () {},
    onEvent: function () {},
    importLibraries: function (c) {
      var e = [];
      var a = [];
      if (!c || c.length === 0) {
        return;
      }
      for (var b = 0; b < c.length; b++) {
        var d = c[b];
        if (d && d.sharing === "none") {
          e.push(d.url);
        } else {
          a.push(d.url);
        }
      }
      blueConic.fn.importLibraries.call(this, e);
      blueConic.fn.importAndCacheLibraries.call(this, a);
    }
  });
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (e, t) {
        this.blueConicClient = e, this.context = t;
      },
      onLoad: function () {
        var e = !1,
          t = this.context.getParameters(),
          n = t.clickselector && t.clickselector[0] ? t.clickselector[0] : "",
          i = document.querySelector(n),
          c = this._findIframe(n);
        try {
          n && document.addEventListener("click", function t(i) {
            -1 !== Array.prototype.indexOf.call(document.querySelectorAll(n), i.target) && (e || (this.blueConicClient.createEvent("CLICK", this.context.getInteractionId()), e = !0, document.removeEventListener("click", t, !0)));
          }.bind(this)), e && document.removeEventListener("click", this.clickTrigger, !0);
        } catch (e) {
          this.blueConicClient.util.log(e);
        }
        if (c.length > 0) {
          window.focus();
          var o = !1;
          i.querySelector("iframe").addEventListener("mouseover", function () {
            o = !0;
          }), i.querySelector("iframe").addEventListener("mouseleave", function () {
            o = !1;
          }), window.onblur = function () {
            o && !e && (this.blueConicClient.createEvent("CLICK", this.context.getInteractionId()), e = !0);
          }.bind(this);
        }
        document.querySelectorAll(n).length > 0 ? this.blueConicClient.createEvent("VIEW", this.context.getInteractionId()) : this.blueConicClient.position.subscribe(n, this, function () {
          this.blueConicClient.createEvent("VIEW", this.context.getInteractionId());
        });
      },
      _findIframe: function (e) {
        for (var t = [], n = document.querySelectorAll(e), i = 0; i < n.length; i++) {
          var c = n[i].querySelectorAll("iframe");
          c = Array.prototype.slice.call(c), t = t.concat(c);
        }
        return t;
      }
    });
    var a = [];
    var i = 'baseline';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.0/'
    }]);
  })();
  (function () {
    var ARTICLE = "article",
      PRODUCT = "product",
      EVENT_SHOPPING_CART = "shoppingcart",
      EVENT_ORDER = "order",
      InteractionTypeImpl = InteractionType.extend({
        init: function (t, e) {
          this.blueConicClient = t, this.context = e, this.profile = this.context.getProfile();
          var i = this.context.getParameters();
          this.storeId = i.storeId && i.storeId[0] || null, this.metadata = i.metadata && i.metadata[0] || null, this.requiredOptionSet = i.requiredOptionSet && "true" === i.requiredOptionSet[0], this.type = "connection_content_collector" === this.context.getInteractionTypeId() ? ARTICLE : PRODUCT, this._initProductProperties(i);
        },
        _initProductProperties: function (t) {
          this.type === PRODUCT && (t.lastCartUpdateProperty && t.lastCartUpdateProperty[0] && (this.lastCartUpdateProperty = t.lastCartUpdateProperty[0]), t.nrProductsInCartProperty && t.nrProductsInCartProperty[0] && (this.nrProductsInCartProperty = t.nrProductsInCartProperty[0]), this._subscribeToShoppingEvents());
        },
        _subscribeToShoppingEvents: function () {
          this.blueConicClient.event.subscribe(EVENT_SHOPPING_CART, this, this._handleShoppingEvent), this.blueConicClient.event.subscribe(EVENT_ORDER, this, this._handleShoppingEvent);
        },
        _updateShoppingcartItems: function (t) {
          this.blueConicClient.recommendation.createEvent({
            storeId: this.storeId,
            action: EVENT_SHOPPING_CART,
            itemId: t,
            profileId: this.profile.getId()
          }), this.nrProductsInCartProperty && this._storeItemsInShoppingCart(t), this.lastCartUpdateProperty && this._storeCurrentDateAsLastCartUpdate(), (this.nrProductsInCartProperty || this.lastCartUpdateProperty) && this.blueConicClient.profile.updateProfile();
        },
        _storeItemsInShoppingCart: function (t) {
          this.profile.setValue(this.nrProductsInCartProperty, t.length);
        },
        _storeCurrentDateAsLastCartUpdate: function () {
          this.profile.setValue(this.lastCartUpdateProperty, this.blueConicClient.getCurrentDate().getTime());
        },
        _updateBoughtItems: function (t) {
          this.blueConicClient.recommendation.createEvent({
            storeId: this.storeId,
            action: EVENT_ORDER,
            itemId: t,
            profileId: this.profile.getId()
          });
        },
        _handleShoppingEvent: function (t, e) {
          if (e && e.productIds && (!e.storeId || e.storeId === this.storeId)) {
            var i = this.blueConicClient.util.array.ensureArray(e.productIds);
            t === EVENT_SHOPPING_CART ? this._updateShoppingcartItems(i) : t === EVENT_ORDER && (this._updateBoughtItems(i), this._updateShoppingcartItems([]));
          }
        },
        _isValidItem: function (t, e, i) {
          if (!t.itemId) return this.blueConicClient.util.log("Item will not be scraped due to missing item ID"), !1;
          if (!t.name) return this.blueConicClient.util.log("Item will not be scraped due to missing name"), !1;
          if (!t.url) return this.blueConicClient.util.log("Item will not be scraped due to missing URL"), !1;
          if (!/^https?:\/\//.test(t.url)) return this.blueConicClient.util.log("Item will not be scraped due to invalid URL: " + t.url), !1;
          if (t.pageType !== this.type) return this.blueConicClient.util.log("Item will not be scraped due to incorrect type: " + t.pageType + " !== " + this.type), !1;
          if (this.type === ARTICLE && !t.publicationDate) return this.blueConicClient.util.log("Item will not be scraped due to missing publication date"), !1;
          if (this.requiredOptionSet) for (var r = ["id", "url", "name", "type", "publicationDate"], n = 0; n < i.length; n++) if (i[n].required && -1 === r.indexOf(i[n].fieldId)) {
            var o = e.getFieldValue(i[n]);
            if (null == o || 0 === o.length) return this.blueConicClient.util.log("Item will not be scraped due to missing value for required field: " + i[n].fieldId), !1;
          }
          return !0;
        },
        onLoad: function () {
          if (this.storeId) {
            var t = this.metadata ? this.blueConicClient.json.parse(this.metadata) : null,
              e = new window.BlueConicMetaDataService(this.jQuery, t, this.type, document.location.href);
            e.blueConicClient = this.blueConicClient;
            var i = e.getItemData(t);
            if (this._isValidItem(i, e, t)) {
              var r = this._makeMetaDataHash(e, t);
              this._handleView(i.itemId, i.url, r, e);
            }
            this._check404Page(i.itemId, i.url || window.location.protocol + "//" + window.location.host + window.location.pathname);
          }
        },
        _handleView: function (t, e, i, r) {
          this.referrer = document.referrer;
          var n = this.referrer.replace(/http[s]?:\/\/(.*?)(:|\?|\/|$).*/, "$1"),
            o = window.location.hostname,
            s = {
              storeId: this.storeId,
              action: "view",
              itemId: t,
              url: e,
              profileId: this.profile.getId(),
              isEntrypage: n !== o,
              hash: i
            },
            a = r.getLastModifiedInMs();
          a && (s.lastmodified = a), this.blueConicClient.recommendation.createEvent(s);
        },
        _makeMetaDataHash: function (t, e) {
          var i = t.getMetaDataValues(e);
          return this.md5(this.blueConicClient.json.stringify(i));
        },
        _check404Page: function (t, e) {
          if (t) {
            var i = [];
            document.querySelector("title") && i.push(document.querySelector("title").textContent), document.querySelector('meta[property="description"]') && i.push(document.querySelector('meta[property="description"]').getAttribute("content")), document.querySelector('meta[property="og:title"]') && i.push(document.querySelector('meta[property="og:title"]').getAttribute("content")), document.querySelector("h1") && i.push(document.querySelector("h1").textContent);
            for (var r = ["not found", "404", "niet gevonden", "sorry", "probleem"], n = !1, o = this.storeId, s = 0; s < i.length; s++) {
              var a = i[s];
              if (a) for (var l = 0; l < r.length; l++) {
                var u = r[l] || "";
                if (-1 !== a.toLowerCase().indexOf(u)) {
                  n = !0;
                  break;
                }
              }
            }
            if (n && t) {
              var handle404 = function () {
                  this.blueConicClient.recommendation.createEvent({
                    itemId: t,
                    url: t,
                    storeId: o,
                    lastmodified: new Date().getTime()
                  });
                },
                d = new XMLHttpRequest();
              d.onreadystatechange = function () {
                4 === d.readyState && 404 === d.status && handle404.bind(this);
              }, d.open("HEAD", e, !0), d.send();
            }
          }
        }
      });
    var a = [];
    var i = 'connection_content_collector';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/3.3.10/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/3.3.10/frontend/src/lib/md5.min.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/3.3.10/frontend/src/node_modules/@blueconic/frontend-metadataservice/metaDataService.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/3.3.10/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      MAX_TOTAL_SIZE: 16e3,
      SEPARATOR_CHAR: "|",
      MAX_AGE: 365,
      init: function (a, b) {
        this.blueConicClient = a, this.context = b, this.profile = this.context.getProfile();
        var c = this.context.getParameters().goalParameters;
        if (this._goals = [], c) for (var d = 0; d < c.length; d++) this._goals.push(a.json.parse(c[d]).parameters);
        this.connectionContext = {
          profile: this.profile,
          variables: [],
          SENT_TO_SYSTEM_PROPERTY: "sent_to_system",
          SENT_TO_CONNECTION_PROPERTY: "sent_to_connection"
        };
      },
      getPreloadProperties: function () {
        for (var a = [], b = 0; b < this._goals.length; b++) for (var c = this._goals[b].exportMapping, d = c ? this.blueConicClient.json.parse(c[0]) : [], e = 0; e < d.length; e++) "property" === d[e].from.type && d[e].from.property && a.push(d[e].from.property);
        return a;
      },
      onLoad: function () {
        this._updateCookies(), window.bcCookieEventsSubscribed || (this.blueConicClient.event.subscribe(this.blueConicClient.event.onSegmentChange, this, this._updateCookies), this.blueConicClient.event.subscribe("cm_finished", this, this._updateCookies), this.blueConicClient.event.subscribe("contentMeterUpdated", this, this._contentMeterUpdated), this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange, this, this._updateCookies), window.bcCookieEventsSubscribed = !0);
      },
      _contentMeterUpdated: function () {
        this._updateCookies();
        for (var a = 0; 5 < a;) a++, window.setTimeout(this._updateCookies, 1e3);
      },
      _updateCookies: function () {
        for (var a, b = this._getVisitorSegmentIds(), c = !1, d = 0; d < this._goals.length; d++) if (a = this._goals[d], !a.segment) {
          var e = this._applyGoal(a);
          c = c || e;
        } else {
          var f = a.segment[0];
          if (f && -1 !== b.indexOf(f)) {
            var g = this._applyGoal(a);
            c = c || g;
          }
        }
        c && this.bcConnectionUtil.setSyncProperties(this.context, this.profile, [this.connectionContext.SENT_TO_SYSTEM_PROPERTY, this.connectionContext.SENT_TO_CONNECTION_PROPERTY]);
      },
      _getVisitorSegmentIds: function () {
        return this.blueConicClient.getSegments().map(function (a) {
          return a.id;
        });
      },
      _applyGoal: function (a) {
        for (var b, c = !1, d = a.exportMapping, e = d ? this.blueConicClient.json.parse(d[0]) : [], f = a.domain ? a.domain[0] : null, g = a.maxAge ? parseInt(a.maxAge) || this.MAX_AGE : this.MAX_AGE, h = 0; h < e.length; h++) {
          b = e[h], "permission" === b.from.type && (b.from.type = "pm"), "text" === b.from.type && (b.from.text = b.from.fieldId);
          var i = this.bcConnectionUtil.getVariableValue(b.from, this.connectionContext, !0);
          c = this._setCookie(b.to.fieldId, i, g, f) || c;
        }
        return c;
      },
      _encodeCookieValue: function (a) {
        return "string" != typeof a && (a = this.blueConicClient.json.stringify(a)), encodeURIComponent(a.replace(/[\n\r]/g, ""));
      },
      _getExpirationPart: function (a) {
        var b = new Date();
        return "number" != typeof a || 0 > a ? b.setDate(b.getDate() + this.MAX_AGE) : b.setDate(b.getDate() + a), "; expires=" + b.toUTCString();
      },
      _getDomainPart: function (a) {
        return a ? "; domain=" + a : "";
      },
      _getValuePart: function (a) {
        return a instanceof Array ? a.map(function (a) {
          return this._encodeCookieValue(a);
        }, this).join(this.SEPARATOR_CHAR) : this._encodeCookieValue(a);
      },
      _removeCookie: function (a, b) {
        document.cookie = encodeURIComponent(a) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + this._getDomainPart(b);
      },
      _endsWith: function (a, b) {
        var c = a.indexOf(b);
        return -1 !== c && c + b.length === a.length;
      },
      _isValidDomain: function (a, b) {
        return !a || ("." === a[0] ? b === a.substring(1) || this._endsWith(b, a) : b === a || this._endsWith(b, "." + a));
      },
      _setCookie: function (a, b, c, d) {
        if (!a || "string" != typeof a || /^(?:expires|max-age|path|domain|secure|samesite|bcsessionid|bcpermissionlevel)$/i.test(a)) return this.blueConicClient.util.log("[WARN] invalid cookie name: [" + a + "]"), !1;
        if (!this._isValidDomain(d, document.location.hostname)) return this.blueConicClient.util.log("[WARN] could not set cookie [" + a + "] with domain [" + d + "]"), !1;
        if (null === b || "undefined" == typeof b || 0 === b.length) return this._removeCookie(a, d), !1;
        var e = encodeURIComponent(a) + "=" + this._getValuePart(b),
          f = document.cookie.length + e.length;
        return f > this.MAX_TOTAL_SIZE ? (this.blueConicClient.util.log("[WARN] could not set cookie [" + a + "] with size [" + e.length + "] because it would exceed the total cookie length of 16kb"), !1) : (e += this._getExpirationPart(c), e += this._getDomainPart(d), e += "; path=/", "https:" === document.location.protocol && this.checkSameSiteNoneSupport.isSameSiteNoneCompatible(navigator.userAgent) && (e += "; SameSite=None; Secure"), document.cookie = e, !0);
      }
    });
    var a = [];
    var i = 'connection_cookie';
    a.push({
      url: '/plugins/connection_cookie/js/connection_lib/connection_lib.js',
      sharing: 'local'
    });
    a.push({
      url: '/plugins/connection_cookie/util/should-send-same-site-none_lib.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/connection_cookie/ts_79a69f4f9b213c165269846079a286dd/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl;
    (() => {
      "use strict";

      var t,
        e,
        o,
        a,
        i,
        r = {
          d: (t, e) => {
            for (var o in e) r.o(e, o) && !r.o(t, o) && Object.defineProperty(t, o, {
              enumerable: !0,
              get: e[o]
            });
          },
          o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
        },
        n = {};
      r.d(n, {
        default: () => l
      }), (i = t || (t = {})).SEGMENT = "segment", i.LIFECYCLE = "lifecycle", i.PROPERTY = "property", i.TEXT = "text", i.STORE = "store", i.EMPTY = "empty", i.GROUP = "group", i.TIMELINE_EVENT = "timelineEvent", i.EXPORT_DATA_PROCESSOR = "exportDataPreprocessor", i.GROUP_PROPERTY = "groupProperty", (a = e || (e = {})).FIXED = "fixed", a.SEGMENT = "segment", a.SEGMENTS = "segments", a.LIFECYCLES = "lifecycles", a.PROPERTY = "property", a.UNIQUE_PROPERTY = "uniqueproperty", a.GROUP_PROPERTY = "groupProperty", a.PROPERTY_SOURCE_TENANT = "propertySourceTenant", a.GROUP_ID = "groupId", a.TEXT = "text", a.STORE = "store", a.PROFILE_ID = "profileid", a.PERMISSION = "permission", a.ALL_INTERACTIONS = "allInteractions", a.PAGEVIEW_INTERACTIONS = "pageviewInteractions", a.TIMELINE_EVENT_TYPE = "timeline_event_type", a.TIMELINE_EVENT = "timelineEvent", a.TIMELINE_EVENT_CLEANROOM = "timelineEventCleanroom", a.TIMELINE_DATE_ID = "timelineDateId", a.TIMELINE_EVENT_ID = "timelineEventId", a.TIMELINE_PROPERTY = "timelineProperty", a.PLUGIN = "plugin", a.EXPORT_DATA_PROCESSOR = "exportDataPreprocessor", function (t) {
        t.SET_OR_CLEAR = "setOrClear", t.ADD = "add", t.SUM = "sum", t.SET_IF_EMPTY = "setIfEmpty", t.SET = "set";
      }(o || (o = {}));
      const s = Object.freeze({
        SETUP: "setup",
        IMPORT: "import",
        EXPORT: "export"
      });
      Object.freeze({
        SINGLE: "single",
        MULTIPLE: "multiple"
      });
      class l extends InteractionType {
        init(t, e) {
          this.blueConicClient = t, this.context = e || null, this.profile = this.context.getProfile(), this.parameters = this.context.getParameters(), this.objectName = this.getObjectName(this.parameters.goalParameters), this.createDatalayer = this.getDatalayerCreateOption(this.parameters.goalParameters), this._goals = [];
          const o = e.getGoals().reduce(function (t, e) {
            return t[e.getId()] = !0, t;
          }, {});
          if (this.parameters.goalParameters) for (const e of this.parameters.goalParameters) {
            const a = t.json.parse(e);
            a.active && o[a.id] && this._goals.push(a);
          }
          this.connectionContext = {
            LAST_PUSH_PROPERTY: "dlpflt" + this.context.getInteractionId(),
            VARIABLE_STATE_PUSH_PROPERTY: "dlpfst" + this.context.getInteractionId(),
            profile: this.profile,
            variables: [],
            SENT_TO_SYSTEM_PROPERTY: "sent_to_system",
            SENT_TO_CONNECTION_PROPERTY: "sent_to_connection",
            RECEIVED_FROM_SYSTEM_PROPERTY: "received_from_system",
            RECEIVED_FROM_CONNECTION_PROPERTY: "received_from_connection"
          };
        }
        getObjectName(t) {
          var e;
          const o = this.getSetupGoal(t);
          return (null === (e = null == o ? void 0 : o.state) || void 0 === e ? void 0 : e.objectname) || "dataLayer";
        }
        getDatalayerCreateOption(t) {
          var e;
          const o = this.getSetupGoal(t);
          return Boolean(null === (e = null == o ? void 0 : o.state) || void 0 === e ? void 0 : e.createDatalayer);
        }
        getSetupGoal(t) {
          var e;
          return null === (e = t.map(t => JSON.parse(t)).filter(t => t.categoryId === s.SETUP)) || void 0 === e ? void 0 : e[0];
        }
        initDataLayerUtil() {
          this.bcConnectionUtil.md5Lib = this.md5, this._bcDatalayerUtil = new window.BlueConicDataLayerUtility(this.objectName, this.blueConicClient, this.bcConnectionUtil, this.context, this.connectionContext, this.profile), this._bcDatalayerUtil.LAST_PUSH_PROPERTY = "dlpflt" + this.context.getInteractionId(), this._bcDatalayerUtil.VARIABLE_STATE_PUSH_PROPERTY = "dlpfst" + this.context.getInteractionId();
        }
        async onLoad() {
          return new Promise(t => {
            this.initDataLayerUtil();
            let e = 0;
            this.createDatalayer && this._bcDatalayerUtil.createDatalayer();
            const o = async () => {
              if (this._bcDatalayerUtil.getDataLayer()) await this._handleGoals(), t();else {
                if (e > 20) return void t();
                e++, window.setTimeout(o, 250);
              }
            };
            o.call(this);
          });
        }
        async loadTimelineEventTypes() {
          var t;
          const e = [],
            o = this.blueConicClient.getRestEndpoint(this.context.getInteractionTypeId()) + "/timelineEventTypePropertyTypes";
          for (const o of this._goals) o.categoryId === s.IMPORT && (null === (t = o.state.importEventMapping) || void 0 === t ? void 0 : t.length) && e.push(...o.state.importEventMapping.map(t => t.eventTypeId));
          await this._bcDatalayerUtil.loadTimelineEventTypeProperties(e, o);
        }
        async _handleGoals() {
          var t;
          await this.loadTimelineEventTypes();
          for (const e of this._goals) {
            const o = null === (t = null == e ? void 0 : e.state) || void 0 === t ? void 0 : t.segment;
            this._bcDatalayerUtil.visitorInSegment(o) && (e.categoryId === s.EXPORT && this._handleExportGoal(e.state, e.id), e.categoryId === s.IMPORT && this._handleImportGoal(e.state));
          }
        }
        _handleImportGoal(t) {
          this._bcDatalayerUtil.getDataLayer() && this._bcDatalayerUtil.doImport(t);
        }
        _handleExportGoal(t, e) {
          this._bcDatalayerUtil.doExport(t, e);
        }
        _addPreloadPropertiesFromGoal(t, e) {
          if (t.categoryId === s.EXPORT) {
            e.push(`dlpfst${this.context.getInteractionId()}_${t.id}`, `dlpflt${this.context.getInteractionId()}_${t.id}`);
            for (const o of t.state.exportMapping) this._addPreloadPropertiesFromExportMapping(o, e);
          } else if (t.categoryId === s.IMPORT) for (const o of t.state.importMapping) this._addPreloadPropertiesFromImportMapping(o, e);
        }
        _addPreloadPropertiesFromImportMapping(t, e) {
          t.to.values.length > 0 && e.push(t.to.values[0].id);
        }
        _addPreloadPropertiesFromExportMapping(e, o) {
          e.from.dataType === t.PROPERTY && e.from.values.length > 0 && o.push(e.from.values[0].id);
        }
        getPreloadProperties() {
          const t = [this.connectionContext.SENT_TO_SYSTEM_PROPERTY, this.connectionContext.SENT_TO_CONNECTION_PROPERTY, this.connectionContext.RECEIVED_FROM_SYSTEM_PROPERTY, this.connectionContext.RECEIVED_FROM_CONNECTION_PROPERTY];
          for (const e of this._goals) this._addPreloadPropertiesFromGoal(e, t);
          return t;
        }
      }
      InteractionTypeImpl = n.default;
    })();
    var a = [];
    var i = 'connection_datalayer';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/3.1.1/web/node_modules/@blueconic/connection_lib/connection_lib.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/3.1.1/web/node_modules/@blueconic/datalayer-library/dist/index.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/3.1.1/web/src/web/lib/md5.min.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/3.1.1/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (e, t) {
        this.blueConicClient = e, this.context = t || null, this.parameters = this.context.getParameters(), this.profile = e.profile.getProfile(), this.isInEditMode = e.isInEditMode(), this._createdElements = [], this.parameters && this.parameters.content && (this._fragment = this._createFragment(this.parameters.content));
      },
      _createFragment: function (e) {
        var t = document.createElement("div");
        t.innerHTML = e;
        for (var n = t.getElementsByTagName("div"), i = 0; i < n.length; i++) n[i].getAttribute("data-bc-external") && (n[i].innerHTML = "");
        return t;
      },
      onLoad: function () {
        if (this.element = this.context.getDOMElement(), this.element) {
          window.bc = window.bc || {}, window.bc.jQuery = this.jQuery, window.bc.$ = this.jQuery;
          var e = this.element.cloneNode(!0),
            t = this;
          this.loadInteraction(function (n, i) {
            if (n) return console.error("[BC] Content interaction couldn't be loaded because of the following error(s)", n), void (t.isInEditMode || (console.error("[BC] The element will be restored to it's previous content"), t._createdElements.forEach(function (e) {
              e.remove();
            }), t.element.replaceWith ? t.element.replaceWith(e) : t.element.innerHTML = e.innerHTML));
            t._createdElements = i.createdElements, t.isInEditMode ? t.blueConicClient.event.publish("contentinteractiontype.interactionLoaded", {
              interaction: t
            }) : t.blueConicClient.createEvent("VIEW", t.context.getInteractionId());
          });
        }
      },
      loadInteraction: function (e, t) {
        var n = "boolean" != typeof (t = t || {}).loadContent || t.loadContent,
          i = window._bcp.interactionUtil,
          r = this.getValue("content");
        r || (r = this.element.innerHTML);
        var l = [];
        n && l.push(i.createContentHandler({
          content: r,
          interactionId: this.context.getInteractionId(),
          bcEvent: this.blueConicClient.event,
          isInEditMode: this.isInEditMode,
          jQuery: this.jQuery
        })), l.push(i.createCssHandler({
          cssUrl: this.getValue("styling_css")
        }), i.createAdvancedHandler({
          blueConicClient: this.blueConicClient,
          interactionId: this.context.getInteractionId(),
          clickEventSelector: this.getValue("click_event_selector"),
          jQuery: this.jQuery
        }), i.createJavaScriptHandler({
          interactionId: this.context.getInteractionId(),
          javaScriptUrls: this.getValues("javascript_urls"),
          inlineJavaScript: this.getValue("javascript"),
          isInEditMode: this.isInEditMode
        })), i.runHandlers(this.element, l, e);
      },
      getPreloadProperties: function () {
        for (var e, t = this.context.getParameters().content + "", n = /data-bc-preload="([^"]*)"/g, i = []; null !== (e = n.exec(t));) for (var r = e[1].split(","), l = 0; l < r.length; l++) i.push(r[l]);
        return i || [];
      },
      getContent: function () {
        return this.loadInlineStyling(), this._fragment ? this._fragment.innerHTML : null;
      },
      loadInlineStyling: function () {
        var e = this.getValue("styling_css_inline");
        e ? (this._inlineStylingElement || (this._inlineStylingElement = document.createElement("style"), document.head.appendChild(this._inlineStylingElement), this._createdElements.push(this._inlineStylingElement)), this._inlineStylingElement.innerHTML = e) : this._inlineStylingElement && (this._inlineStylingElement.remove(), this._inlineStylingElement = null);
      },
      onMessageReceived: function (e) {
        this.blueConicClient.event.publish("contentinteractiontype.messageReceived", e);
      },
      getValue: function (e) {
        return this.parameters[e] && this.parameters[e][0] ? this.parameters[e][0] : null;
      },
      getValues: function (e) {
        return this.parameters[e] || [];
      }
    });
    var a = [];
    var i = 'contentinteractiontype';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.4/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.4/frontend/src/scripts/handlerUtil.js',
      sharing: 'none'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.4/frontend/src/scripts/handleCss.js',
      sharing: 'none'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.4/frontend/src/scripts/handleContent.js',
      sharing: 'none'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.4/frontend/src/scripts/handleJavaScript.js',
      sharing: 'none'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.4/frontend/src/scripts/handleAdvanced.js',
      sharing: 'none'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.4/'
    }, {
      id: 'html',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'html/1.0.10/'
    }, {
      id: 'string',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'string/1.0.1/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      html: {
        nl: {
          content: '<div class="bcCSContent">Plaats hier uw content</div>'
        },
        default: {
          content: '<div class="bcCSContent">Place your content here</div>'
        }
      },
      init: function (t, e) {
        this.blueConicClient = t, this.context = e || null, this.profile = t.profile.getProfile(), this.element = this.context.getDOMElement(), this.identifier = "bc_" + this.context.getInteractionId(), this.parameters = this.context.getParameters(), this.currentInsertType = this.parameters.inserttype && this.parameters.inserttype[0] ? this.parameters.inserttype[0] : "replace", "replacecontainer" !== this.currentInsertType || document.getElementById(this.identifier) || this._hidePosition();
        var i = this.parameters.content + "";
        this.htmlFragment = this._createElement(i), this._lastEvent = null, this._inlineCss = null, this._lastCheckDate = null, this._timeoutID = null;
      },
      getPreloadProperties: function () {
        return this.htmlFragment ? this._getPropertiesFromPlaceholders(this.htmlFragment.innerHTML) : [];
      },
      getContent: function () {
        return this._handleStyling(), this.htmlFragment ? (this.element || (this.element = this.context.getDOMElement()), "replace" === this.currentInsertType ? (this._emptyElementsWithAttribute(this.htmlFragment, "div", "data-bc-external"), this.htmlFragment.innerHTML) : void 0) : null;
      },
      onUpdate: function () {
        this.currentInsertType !== this.context.getParameters().inserttype[0] && document.location.reload();
      },
      onLoad: function () {
        window.bc = window.bc || {}, window.bc.jQuery = this.jQuery, window.bc.$ = this.jQuery, this.currentInsertType && this._placeContent();
      },
      onMessageReceived: function (t) {
        t.parameters && (this.parameters = t.parameters), "updateStyling" === t.action && (this.inlineCss && (document.head.removeChild(this.inlineCss), this.inlineCss = null), this._handleStyling());
      },
      _hidePosition: function () {
        this.styleIdentifier = "bcCS" + this.context.getInteractionId();
        var t = this.context.getPosition() + " {opacity: 0 !important}",
          e = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0],
          i = document.createElement("style");
        i.type = "text/css", i.id = this.styleIdentifier, i.styleSheet ? i.styleSheet.cssText = t : i.innerHTML = t, e.appendChild(i);
      },
      _showPosition: function () {
        this.jQuery("#" + this.styleIdentifier).remove();
      },
      _placeContent: function () {
        var t = this.element || this.context.getDOMElement();
        if (t && (this._handleStyling(), this.blueConicClient.isInEditMode() || this._handleURLs(this.htmlFragment), "replace" !== this.currentInsertType ? this.htmlFragment && (this._emptyElementsWithAttribute(this.htmlFragment, "div", "data-bc-external"), this._setContent()) : this._replaceContent(t), !this.blueConicClient.isInEditMode())) {
          var e = this.parameters.clickselector && this.parameters.clickselector[0] ? this.parameters.clickselector[0] : "";
          if (e) {
            this.jQuery("body").one("click", e, function (t) {
              this._lastEvent && this._lastEvent.originalEvent === t.originalEvent || this._logClickEvent(t);
            }.bind(this));
            try {
              this.jQuery(e).one("click", function (t) {
                this.lastEvent = t, this._logClickEvent(t);
              }.bind(this));
            } catch (t) {}
          }
          !!this.parameters.forceclick && ("true" === this.parameters.forceclick[0] || !0 === this.parameters.forceclick[0]) && this.blueConicClient.createEvent("CLICK", this.context.getInteractionId());
          var i = this.parameters.javascript && this.parameters.javascript[0] ? this.parameters.javascript[0] : "";
          if (i) try {
            i = i.replace(/(^|\W)blueConicVariantId(\W|$)/g, '$1"' + this.context.getInteractionId() + '"$2'), this.jQuery("<script>" + i + "<\/script>").appendTo(this.jQuery("body"));
          } catch (t) {
            console.error(t);
          }
        }
      },
      _replaceContent: function (t) {
        this._assureVisibilty(t);
        var e = this.getContent();
        if (e) {
          var i = t.nodeName ? t.nodeName.toLowerCase() : t.nodeName;
          if (-1 === this.blueConicClient.util.array.indexOfArray(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"], i)) {
            if (this.blueConicClient.isInEditMode && this.blueConicClient.isInEditMode()) t.innerHTML !== e && (t.innerHTML = e);else try {
              this.jQuery(t).html(e);
            } catch (t) {
              console.error(t);
            }
          } else if (t.parentNode) {
            var n = t.parentNode.innerHTML,
              r = document.createElement("div");
            r.appendChild(t.cloneNode(!0));
            var s = r.innerHTML,
              a = n.replace(s, e);
            t.parentNode.innerHTML !== a && (t.parentNode.innerHTML = a);
          }
          this._handleComplexObjects(t), this._trackView(t);
        }
      },
      _setContent: function () {
        var t = this._getElementByPosition(this.context.getPosition());
        if (t) {
          var e = t.parent().get(0),
            i = this.jQuery('[data-bc-id="' + this.identifier + '"],#' + this.identifier);
          if (i.length > 0) return this.blueConicClient.isInEditMode && this.blueConicClient.isInEditMode() ? null : (i.replaceWith(this.htmlFragment.innerHTML), this._handleComplexObjects(e), void ("prepend" === this.currentInsertType ? (t.prev().attr("data-bc-id", this.identifier), this._trackView(t.prev().get(0))) : "append" === this.currentInsertType && (t.next().attr("data-bc-id", this.identifier), this._trackView(t.next().get(0)))));
          if ("prepend" === this.currentInsertType) {
            var n = t.prev();
            if (n.length > 0 && n.attr("data-bc-id") === this.identifier) return;
            if (this.blueConicClient.isInEditMode && this.blueConicClient.isInEditMode()) t.get(0).parentNode.insertBefore(this.htmlFragment, t.get(0)), this.blueConicClient.functions.setEditableNode("#bc_" + this.context.getInteractionId(), {
              positionName: "prepend",
              lockPosition: !0,
              redrawPosition: !0
            });else {
              try {
                t.before(this.htmlFragment.innerHTML);
              } catch (t) {
                console.error(t);
              }
              var r = t.prev();
              r.attr("data-bc-id", this.identifier), this._trackView(r.get(0));
            }
          }
          if ("append" === this.currentInsertType) {
            var s = t.next();
            if (s.length > 0 && s.attr("data-bc-id") === this.identifier) return;
            if (this.blueConicClient.isInEditMode && this.blueConicClient.isInEditMode()) t.get(0).parentNode.insertBefore(this.htmlFragment, t.get(0).nextSibling), this.blueConicClient.functions.setEditableNode("#bc_" + this.context.getInteractionId(), {
              positionName: "append",
              lockPosition: !0,
              redrawPosition: !0
            });else {
              try {
                t.after(this.htmlFragment.innerHTML);
              } catch (t) {
                console.error(t);
              }
              var a = t.next();
              a.attr("data-bc-id", this.identifier), this._trackView(a.get(0));
            }
          }
          if ("replacecontainer" === this.currentInsertType) {
            if (this.blueConicClient.isInEditMode && this.blueConicClient.isInEditMode()) t.get(0).parentNode.replaceChild(this.htmlFragment, t.get(0)), this.blueConicClient.functions.setEditableNode("#bc_" + this.context.getInteractionId(), {
              positionName: "replace container",
              lockPosition: !0,
              redrawPosition: !0
            });else {
              var o = this.jQuery(this.htmlFragment.innerHTML).replaceAll(t);
              this._trackView(o.get(0));
            }
            this._showPosition();
          }
          this.blueConicClient.isInEditMode() && null === this.context.getInteractionId() && setTimeout(function () {
            window.blueConicClient.fn.postMessage("onOpenEditMode", window.blueConicClient.positionHandlers[0]);
          }, 500), this._handleComplexObjects(e);
        }
      },
      _trackView: function (t) {
        this.blueConicClient.isInEditMode() || (!(!this.parameters.trackviewwhenvisible || !this.parameters.trackviewwhenvisible[0]) && "true" === this.parameters.trackviewwhenvisible[0] ? this._isVisible(t) ? this.blueConicClient.createEvent("VIEW", this.context.getInteractionId()) : (this._lastCheckDate = new Date().getTime(), this.jQuery(document).on("scroll.bcCSP" + this.identifier, function () {
          this._checkVisibility(t);
        }.bind(this)), this.jQuery(window).on("resize.bcCSP" + this.identifier, function () {
          this._checkVisibility(t);
        }.bind(this)), this._checkVisibility(t)) : this.blueConicClient.createEvent("VIEW", this.context.getInteractionId()));
      },
      _checkVisibility: function (t) {
        if (new Date().getTime() - this._lastCheckDate >= 500 && (this._lastCheckDate = new Date().getTime(), this._isVisible(t))) return this.blueConicClient.createEvent("VIEW", this.context.getInteractionId()), this.jQuery(document).off("scroll.bcCSP" + this.identifier), this.jQuery(window).off("resize.bcCSP" + this.identifier), void clearTimeout(this._timeoutID);
        clearTimeout(this._timeoutID), this._timeoutID = setTimeout(function () {
          this._checkVisibility(t);
        }.bind(this), 1500);
      },
      _isVisible: function (t) {
        var e = t.getBoundingClientRect();
        return e.top >= 0 && e.top < window.innerHeight && this.jQuery(t).is(":visible");
      },
      _logClickEvent: function (t) {
        t && t.originalEvent && t.originalEvent._blueConicLoggedClickEvent === this.context.getInteractionId() || t && t.target && t.target.pathname && t.target.hostname && 0 === t.target.pathname.indexOf("/s/") && -1 !== t.target.hostname.indexOf("blueconic") || (t.originalEvent && (t.originalEvent._blueConicLoggedClickEvent = this.context.getInteractionId()), this.blueConicClient.createEvent("CLICK", this.context.getInteractionId()));
      },
      _getElementByPosition: function (t) {
        var e = document.getElementById(t);
        return e = e ? this.jQuery(e) : this.jQuery(t);
      },
      _createElement: function (t) {
        var e;
        if (!t) {
          if (!this.blueConicClient.isInEditMode() || "prepend" !== this.currentInsertType && "append" !== this.currentInsertType) return null;
          var i = "nl" === this.context.getLocale() ? "nl" : "default";
          t = this.html[i].content;
        }
        try {
          (e = document.createElement("div")).id = this.identifier, e.innerHTML = t;
        } catch (t) {
          return null;
        }
        return e;
      },
      _handleURLs: function (t) {
        if (!(!this.parameters.newwindow || !this.parameters.newwindow[0]) && "true" === this.parameters.newwindow[0]) for (var e = t.getElementsByTagName("a"), i = 0, n = e.length; i < n; i++) {
          var r = e[i];
          r.getAttribute("target") || r.setAttribute("target", "_blank");
        }
        this._handlePlaceholders(t);
      },
      _assureVisibilty: function (t) {
        this.blueConicClient.isInEditMode && this.blueConicClient.isInEditMode() && (t.style.minWidth = "10px", t.style.minHeight = "10px");
      },
      _handlePlaceholders: function (t) {
        for (var e = this._getPropertiesFromPlaceholders(t.innerHTML), i = 0; i < e.length; i++) {
          var n = e[i],
            r = this.profile.getValue(n) || "",
            s = new RegExp("\\$\\{" + n + "\\}", "g");
          t.innerHTML = t.innerHTML.replace(s, encodeURI(r));
        }
      },
      _getPropertiesFromPlaceholders: function (t) {
        for (var e, i = /\$\{([a-zA-Z\-_0-9]+)\}/g, n = []; null !== (e = i.exec(t));) n.push(e[1]);
        for (var r = /data-bc-preload="([^"]*)"/g, s = []; null !== (e = r.exec(t));) for (var a = e[1].split(","), o = 0; o < a.length; o++) s.push(a[o]);
        return n.concat(s);
      },
      _emptyElementsWithAttribute: function (t, e, i) {
        for (var n = this.getElementsWithAttribute(t, e, i), r = 0, s = n.length; r < s; r++) {
          n[r].innerHTML = "";
        }
      },
      getElementsWithAttribute: function (t, e, i) {
        for (var n = [], r = t.getElementsByTagName(e), s = 0, a = r.length; s < a; s++) {
          var o = r[s];
          o.getAttribute(i) && n.push(o);
        }
        return n;
      },
      _handleComplexObjects: function (t) {
        for (var e = this.getElementsWithAttribute(t, "div", "data-bc-pluginid"), i = 0; i < e.length; i++) {
          var n = e[i],
            r = n.getAttribute("data-bc-pluginid"),
            s = n.getAttribute("data-bc-config");
          if (s) try {
            var a = s.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
            s = this.blueConicClient.json.parse(a);
          } catch (t) {
            s = null;
          }
          this.blueConicClient.event.publish("bcComplexObject", {
            plugin: r,
            config: s,
            node: n,
            interactionId: this.context.getInteractionId()
          }), this.blueConicClient.isInEditMode() || (n.removeAttribute("data-bc-pluginid"), n.removeAttribute("data-bc-config"));
        }
      },
      _handleStyling: function () {
        var t = "bcIS" + this.context.getInteractionId(),
          e = this.parameters.styling_css_inline && this.parameters.styling_css_inline[0] ? this.parameters.styling_css_inline[0] : "";
        e && (this.inlineCss = document.getElementById(t), this.inlineCss || (this.inlineCss = document.createElement("style"), this.inlineCss.id = t, this.inlineCss.innerHTML = e.replace(/&#xd;/gi, ""), document.head.appendChild(this.inlineCss)));
      }
    });
    var a = [];
    var i = 'contentinteractiontypespecial';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.0.0/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.0.0/'
    }, {
      id: 'boolean',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'boolean/1.0.1/'
    }, {
      id: 'html',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'html/1.0.10/'
    }, {
      id: 'string',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'string/1.0.1/'
    }]);
  })();
  (function () {
    // @ts-nocheck
    /* eslint-disable complexity */
    /* eslint-disable no-trailing-spaces */
    /* eslint-disable max-statements */
    /* eslint-disable camelcase */
    /* eslint-disable block-scoped-var */
    /* eslint-disable eqeqeq */
    /* eslint-disable block-scoped-var */
    /* eslint-disable no-eval */

    var InteractionTypeImpl = InteractionType.extend({
      DEFAULT_MAX_AGE: 90 * 24 * 60 * 60 * 1000,
      MAX_ITEMS: 100,
      SKIP_LIMITED: "limited",
      RESET_ROLLING: "rolling",
      RESET_CALENDAR: "calendar",
      init: function (blueConicClient, context) {
        this.blueConicClient = blueConicClient;
        this.context = context;
        this.interactionId = "cm" + this.context.getInteractionId();
        this.historyProperty = "_cm_" + this.interactionId;
        this.profile = this.context.getProfile();
        this.parameters = this.context.getParameters();
        this.preLoadProperties = [this.historyProperty];
        this.excludeRules = [];
        try {
          this.excludeRules = this.blueConicClient.json.parse(this.parameters.excludeRules[0]);
        } catch (e) {
          // parse failed
        }
        // check the exclude rules for expressions that depend on profile property values
        if (this.excludeRules.length > 0) {
          var excludeRules = this.excludeRules.filter(function (excludeRule) {
            return excludeRule.area.selectedoption === "expression" && excludeRule.area.expression.indexOf("getValue") !== -1;
          });
          this.preLoadProperties = this.preLoadProperties.concat(excludeRules.map(function (excludeRule) {
            return this._getPropertyIdsFromExpression(excludeRule.area.expression);
          }, this));
        }
        this.includeRules = [];
        try {
          this.includeRules = this.blueConicClient.json.parse(this.parameters.includeRules[0]);
        } catch (e) {
          // parse failed
        }
        // check the exclude rules for expressions that depend on profile property values
        if (this.includeRules.length > 0) {
          var includeRules = this.includeRules.filter(function (includeRule) {
            return includeRule.area.selectedoption === "expression" && includeRule.area.expression.indexOf("getValue") !== -1;
          });
          this.preLoadProperties = this.preLoadProperties.concat(includeRules.map(function (includeRule) {
            return this._getPropertyIdsFromExpression(includeRule.area.expression);
          }, this));
        }
        this.freeRules = [];
        try {
          this.freeRules = this.blueConicClient.json.parse(this.parameters.freeRules[0]);
        } catch (e) {
          // parse failed
        }
        if (this.freeRules.length > 0) {
          this.freeRules = this.freeRules.filter(function (freeRule) {
            return !!freeRule.property;
          });
          this.preLoadProperties = this.preLoadProperties.concat(this.freeRules.map(function (freeRule) {
            return freeRule.property.id;
          }));
        }
        this.expireAt = parseInt(this.parameters.expireAt[0]);
        if (isNaN(this.expireAt)) {
          this.expireAt = 10;
        }
        this.resetAfter = this.parameters.resetAfter[0];
        this.uniqueOnly = this.parameters.uniqueOnly[0] === "true";
        this.onceOnly = !!(this.parameters.onceOnly && this.parameters.onceOnly[0] === "true");
        this.now = this.blueConicClient.getCurrentDate();
        this.maxAge = this._getMaxAge();
        this.disableOGURL = !!(this.parameters.disableOGURL && this.parameters.disableOGURL[0] === "true");
        this.delayMetering = !!(this.parameters.delayMetering && this.parameters.delayMetering[0] === "true");
        this.eventSubscribed = false;
        this.pageViewEventsThrown = false;

        // subscribe to dynamic page changes
        this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange, this, function (event) {
          this.pageViewEventsThrown = false;
          console.log("[BC METER DEBUGGING] " + event + " Event Triggered");
          this.onLoad();
        });
      },
      getPreloadProperties: function () {
        return this.preLoadProperties;
      },
      onLoad: function () {
        if (this.delayMetering && !window.eventSubscribed) {
          window.eventSubscribed = true;
          // delay metering untill the 'Start Metering' event is published
          this.blueConicClient.event.subscribe("cm_start_metering", this, function () {
            this.onLoad();
          });
          return;
        }
        var visitorQualifies = this._visitorQualifies();
        if (!visitorQualifies) {
          return;
        }
        var historyFromProfile = {};
        try {
          // parse the history from the profile
          var historyStr = this.profile.getValue(this.historyProperty);
          if (historyStr) {
            historyFromProfile = this.blueConicClient.json.parse(this.profile.getValue(this.historyProperty));
          }
        } catch (e) {
          // parse failed
        }

        // History object contains the previously included and temporarily skipped views for this meter
        this.history = new this.History(historyFromProfile, this.maxAge, this.now);

        // current view
        var currentView = this._getCurrentView();
        if (currentView) {
          // only add the view to the history if it is not skipped or if it is temporarily skipped
          // in which case we have to keep track of the number of skips per skip rule
          var addToHistory = !currentView.isSkippedView || currentView.isSkippedView && !!currentView.skippedFor;
          if (addToHistory) {
            // add the current view to the history
            this._addViewToHistory(currentView);
            if (!currentView.isSkippedView) {
              // view has direct influence on current meter,
              // update the profile properties
              this._writeExtraProfileProperties(currentView);
            }
            this.blueConicClient.profile.updateProfile(this, function () {
              if (!this.pageViewEventsThrown) {
                this._throwEvents(currentView);
              }
            });
          } else {
            if (!this.pageViewEventsThrown) {
              this._throwEvents(currentView);
            }
          }
        }
      },
      /**
       * Throw the dialogue triggering events based on the current count
       */
      _throwEvents: function (currentView) {
        if (this.pageViewEventsThrown) {
          return;
        }
        this.pageViewEventsThrown = true;
        var this_url = (this.jQuery('meta[property="og:url"]').attr("content") || document.location.href).toLowerCase();
        if (this.disableOGURL) {
          var this_url = (document.location.protocol + '//' + document.location.host + document.location.pathname).toLowerCase();
        }
        var this_referrer = document.referrer.toLowerCase();
        var this_interaction = this.interactionId;
        var count = this._getCurrentViews(currentView);
        if (currentView.isHistoricallyAllowedView || currentView.isHistoricallyAllowedFreeView) {
          this.blueConicClient.createEvent("cm_already_viewed");
        }
        if (currentView.isFreeView) {
          this.blueConicClient.createEvent("cm_free_view");
          if (this.onceOnly && !currentView.isHistoricallyAllowedFreeView || !this.onceOnly) {
            if (this.freeViewTracker.consumedFreeCount === this.freeViewTracker.totalFree) {
              this.blueConicClient.createEvent("cm_last_free_view");
              this.blueConicClient.profile.getProfile().timeline.createEvent("content_meter", new Date(), {
                meter_event: "cm_last_free_view",
                url: this_url,
                referrer: this_referrer
              }, this, function () {});
            } else {
              this.blueConicClient.createEvent("cm_free_view_" + this.freeViewTracker.consumedFreeCount);
              this.blueConicClient.profile.getProfile().timeline.createEvent("content_meter", new Date(), {
                meter_event: "cm_free_view_" + this.freeViewTracker.consumedFreeCount,
                url: this_url,
                referrer: this_referrer,
                source: this_interaction
              }, this, function () {});
            }
          }
        } else {
          // When the 'onceOnly' flag is set to true, throw the first, last and regular view events only when the current view
          // is not historically allowed or skipped.
          if (this.onceOnly && !currentView.isHistoricallyAllowedView && !currentView.isSkippedView || !this.onceOnly && !currentView.isSkippedView) {
            if (count === 1) {
              this.blueConicClient.createEvent("cm_firstview");
              this.blueConicClient.createEvent("cm_view");
              this.blueConicClient.profile.getProfile().timeline.createEvent("content_meter", new Date(), {
                meter_event: "cm_firstview",
                url: this_url,
                referrer: this_referrer,
                source: this_interaction
              }, this, function () {});
            } else if (count === this.expireAt - 1) {
              this.blueConicClient.createEvent("cm_lastview");
              this.blueConicClient.createEvent("cm_view");
              this.blueConicClient.profile.getProfile().timeline.createEvent("content_meter", new Date(), {
                meter_event: "cm_lastview",
                url: this_url,
                referrer: this_referrer,
                source: this_interaction
              }, this, function () {});
            } else if (count < this.expireAt) {
              this.blueConicClient.createEvent("cm_view_" + count);
              this.blueConicClient.createEvent("cm_view");
              this.blueConicClient.profile.getProfile().timeline.createEvent("content_meter", new Date(), {
                meter_event: "cm_view_" + count,
                url: this_url,
                referrer: this_referrer,
                source: this_interaction
              }, this, function () {});
            }
          }
          if (count >= this.expireAt) {
            this.blueConicClient.createEvent("cm_exceeded");
            this.blueConicClient.createEvent("cm_view");
            this.blueConicClient.profile.getProfile().timeline.createEvent("content_meter", new Date(), {
              meter_event: "cm_exceeded",
              url: this_url,
              referrer: this_referrer,
              source: this_interaction
            }, this, function () {});
          }
          if (currentView.isSkippedView) {
            this.blueConicClient.createEvent("cm_excluded");
          }
        }
        var bottomFrom = this.parameters.bottomFrom && this.parameters.bottomFrom[0] ? parseInt(this.parameters.bottomFrom[0]) : null;
        var bottomTo = this.parameters.bottomTo && this.parameters.bottomTo[0] ? parseInt(this.parameters.bottomTo[0]) : null;
        var middleFrom = this.parameters.middleFrom && this.parameters.middleFrom[0] ? parseInt(this.parameters.middleFrom[0]) : null;
        var middleTo = this.parameters.middleTo && this.parameters.middleTo[0] ? parseInt(this.parameters.middleTo[0]) : null;
        var topFrom = this.parameters.topFrom && this.parameters.topFrom[0] ? parseInt(this.parameters.topFrom[0]) : null;
        var topTo = this.parameters.topTo && this.parameters.topTo[0] ? parseInt(this.parameters.topTo[0]) : null;
        if (bottomFrom && bottomTo && count >= bottomFrom && count <= bottomTo) {
          this.blueConicClient.createEvent("cm_bottom");
        }
        if (middleFrom && middleTo && count >= middleFrom && count <= middleTo) {
          this.blueConicClient.createEvent("cm_middle");
        }
        if (topFrom && topTo && count >= topFrom && count <= topTo) {
          this.blueConicClient.createEvent("cm_top");
        }
        this.blueConicClient.createEvent("cm_finished");
      },
      /**
       * Write the updated history to the profile
       */
      _addViewToHistory: function (currentView) {
        if (this._getCurrentViews(currentView) >= this.expireAt && !currentView.isFreeView) {
          // no need to include the current page view in the history
          return;
        }
        if (currentView.isFreeView) {
          // add free view
          this.history.free.push({
            u: currentView.url,
            ff: currentView.freeFor,
            ts: currentView.timestamp
          });
        } else if (currentView.isSkippedView) {
          // add limited skipped view
          this.history.skipped.push({
            u: currentView.url,
            sf: currentView.skippedFor,
            ts: currentView.timestamp
          });
        } else {
          // add view to history
          this.history.included.push({
            u: currentView.url,
            v: currentView.includeValue,
            ts: currentView.timestamp
          });
          // flag the current view as added to history
          currentView.isAddedToHistory = true;
        }
        if (this.history.included.length > this.MAX_ITEMS) {
          // no need to store more included views than necessary, remove
          // the oldest item
          this.history.included.sort(function (a, b) {
            var x = a.ts;
            var y = b.ts;
            /* eslint-disable */
            return x < y ? -1 : x > y ? 1 : 0;
            /* eslint-enable */
          });
          this.history.included.shift();
        }

        // No length cap on history.skipped like on history.included?

        this.profile.setValue(this.historyProperty, this.blueConicClient.json.stringify(this.history));
      },
      /**
       * Write meter stats to profile properties
       */
      _writeExtraProfileProperties: function (currentView) {
        var currentPageViewCount = this._getCurrentViews(currentView);
        var expireAtProperty = this.parameters.expireAtProperty && this.parameters.expireAtProperty[0] ? this.parameters.expireAtProperty[0] : null;
        var numViewsProperty = this.parameters.numViewsProperty && this.parameters.numViewsProperty[0] ? this.parameters.numViewsProperty[0] : null;
        var numViewsLeftProperty = this.parameters.numViewsLeftProperty && this.parameters.numViewsLeftProperty[0] ? this.parameters.numViewsLeftProperty[0] : null;
        var numFreeViewsProperty = this.parameters.numFreeViewsProperty && this.parameters.numFreeViewsProperty[0] ? this.parameters.numFreeViewsProperty[0] : null;
        var numFreeViewsLeftProperty = this.parameters.numFreeViewsLeftProperty && this.parameters.numFreeViewsLeftProperty[0] ? this.parameters.numFreeViewsLeftProperty[0] : null;
        if (expireAtProperty && expireAtProperty !== "null") {
          this.profile.setValue(expireAtProperty, this.expireAt);
        }
        if (numViewsProperty && numViewsProperty !== "null") {
          this.profile.setValue(numViewsProperty, currentPageViewCount <= this.expireAt ? currentPageViewCount : this.expireAt);
        }
        if (numViewsLeftProperty && numViewsLeftProperty !== "null") {
          this.profile.setValue(numViewsLeftProperty, currentPageViewCount < this.expireAt ? this.expireAt - currentPageViewCount - 1 : 0);
        }
        if (currentView.isFreeView) {
          if (numFreeViewsProperty && numFreeViewsProperty !== "null") {
            this.profile.setValue(numFreeViewsProperty, this.freeViewTracker.consumedFreeCount);
          }
          if (numFreeViewsLeftProperty && numFreeViewsLeftProperty !== "null") {
            var freeLeft = this.freeViewTracker.totalFree - this.freeViewTracker.consumedFreeCount;
            this.profile.setValue(numFreeViewsLeftProperty, freeLeft > 0 ? freeLeft : 0);
          }
        }
      },
      /**
       * Get the View for the current page view
       * Will only return a PageView object if the page is being metered
       */
      _getCurrentView: function () {
        var url = "";
        if (typeof Mendel !== "undefined") {
          if (Mendel.BC && Mendel.BC.topicId) {
            url = Mendel.BC.topicId;
          } else if (Mendel.config && Mendel.config.currentTopic && Mendel.config.currentTopic.id) {
            url = Mendel.config.currentTopic.id;
          } else if (Mendel.config && Mendel.config.topicId) {
            url = Mendel.config.topicId;
          }
        } else {
          url = (this.jQuery('meta[property="og:url"]').attr("content") || document.location.href).toLowerCase();
          if (this.disableOGURL) {
            url = (document.location.protocol + '//' + document.location.host + document.location.pathname).toLowerCase();
          }
        }
        var referrer = document.referrer.toLowerCase();
        var pageView = new this.PageView(url, referrer, this.now);
        pageView.isHistoricallyAllowedView = this._isHistoricallyAllowed(url);
        pageView.includeValue = this._getIncludeValue(pageView);
        if (pageView.includeValue > 0) {
          // set skipped flag
          pageView.isSkippedView = this._isPageViewSkipped(pageView);
          if (this._getCurrentViews(pageView) >= this.expireAt) {
            // This view exceeds the expire limit
            // check for free views
            this._setPageViewFree(pageView);
          }
          return pageView;
        }
        // no include value
        return null;
      },
      /**
       * Check if the passed page view object should be included
       * in metering, return the view value
       */
      _getIncludeValue: function (pageView) {
        for (var i = 0; i < this.includeRules.length; i++) {
          var includeRule = this.includeRules[i];
          if (this._isRuleApplicable(includeRule, pageView)) {
            return includeRule.views;
          }
        }
        return 0;
      },
      /**
       * Check if the passed page view object should be skipped
       * from metering.
       */
      _isPageViewSkipped: function (pageView) {
        // initialize the skipped view tracker based on the current view history
        var skippedViewTracker = new this.SkippedViewTracker(this);
        var self = this;
        return this.excludeRules.filter(function (excludeRule) {
          // find the exclude rules that apply to current page view
          return self._isRuleApplicable(excludeRule, pageView);
        }).some(function (excludeRule) {
          if (excludeRule.skip.selectedoption === self.SKIP_LIMITED) {
            // current view qualifies for a limited exclusion
            skippedViewTracker.skipped[excludeRule.id] = skippedViewTracker.skipped[excludeRule.id] ? skippedViewTracker.skipped[excludeRule.id] + 1 : 1;
            if (skippedViewTracker.skipped[excludeRule.id] <= excludeRule.skip.views) {
              // still skips left, store reference to exclude rule in the page view to be able to
              // keep skip count
              pageView.skippedFor = excludeRule.id;
              return true;
            }
          } else {
            // skipping is unlimited for this rule
            return true;
          }
          return false;
        });
      },
      /**
       * Check if the current page view is free
       */
      _setPageViewFree: function (pageView) {
        var self = this;
        // initialize the free view tracker based on the current view history
        this.freeViewTracker = new this.FreeViewTracker(this);
        pageView.isHistoricallyAllowedFreeView = this._isHistoricallyAllowedFree(pageView.url);
        this.freeRules.filter(function (freeRule) {
          // find the free rules that apply to current page view
          return self._isRuleApplicable(freeRule, pageView);
        }).forEach(function (freeRule) {
          // increment total free view count
          self.freeViewTracker.totalFree = self.freeViewTracker.totalFree + freeRule.views;
          if (!pageView.isFreeView) {
            if (pageView.isHistoricallyAllowedFreeView) {
              pageView.freeFor = freeRule.id;
              pageView.isFreeView = true;
            } else {
              // check the consumed free views
              self.freeViewTracker.free[freeRule.id] = self.freeViewTracker.free[freeRule.id] ? self.freeViewTracker.free[freeRule.id] + 1 : 1;
              if (self.freeViewTracker.free[freeRule.id] <= freeRule.views) {
                // still free views left, store reference to exclude rule in the page view to be able to
                // keep skip count
                pageView.freeFor = freeRule.id;
                pageView.isFreeView = true;
                self.freeViewTracker.consumedFreeCount++;
              }
            }
          }
        });
      },
      /**
       * Returns true if a rule is applicable to the current page view
       *
       */
      _isRuleApplicable: function (rule, pageView) {
        var areaType = rule.area.selectedoption;
        if (areaType === "url" || areaType === "referrer") {
          var url = areaType === "url" ? pageView.url : pageView.referrer;
          if (rule.anyWord || this._URLMatchesWords(url, rule.containsmatches, rule.words)) {
            return true;
          }
        } else if (areaType === "selector") {
          var content = this._getContent(rule.area.selector, true);
          if (content && rule.anyWord) {
            return true;
          } else if (rule.area.selector && rule.words && this._contentMatchesWords(content, rule.containsmatches, rule.words)) {
            return true;
          }
        } else if (areaType === "variable") {
          var variable = this._getVariableValue(rule.area.variable);
          if (variable && rule.anyWord) {
            return true;
          } else if (variable && this._contentMatchesWords(variable, rule.containsmatches, rule.words)) {
            return true;
          }
        } else if (areaType === "expression") {
          var expValue = this._getContent(rule.area.expression, false);
          if (expValue && rule.anyWord) {
            return true;
          } else if (expValue && this._contentMatchesWords(expValue, rule.containsmatches, rule.words)) {
            return true;
          }
        } else if (areaType === "property") {
          var propertyValues = this.profile.getValues(rule.property.id);
          if (propertyValues.length > 0 && rule.anyWord) {
            return true;
          } else {
            var self = this;
            return propertyValues.some(function (propertyValue) {
              if (rule.words && self._contentMatchesWords(propertyValue, rule.containsmatches, rule.words)) {
                return true;
              } else if (rule.dateTime && !isNaN(parseInt(propertyValue)) && self.now.getTime() - parseInt(propertyValue) <= self.maxAge) {
                return true;
              }
              return false;
            });
          }
        }
        return false;
      },
      /**
       * Returns true when the URL has been viewed before in unique mode. Will
       * always return false when not in unique mode because no pages will ever be
       * historically allowed in that mode.
       */
      _isHistoricallyAllowed: function (url) {
        if (!this.uniqueOnly) {
          // Historic views only make sense in the context of unique pages
          return false;
        }
        var matches = this.history.included.filter(function (pageView) {
          return pageView.u === url;
        });
        return matches.length > 0;
      },
      /**
       * Returns tuen when the URL has been viewed for free in unique mode. Will
       * always return false when not in unique mode because no pages will ever be
       * historically allowed in that mode.
       */
      _isHistoricallyAllowedFree: function (url) {
        if (!this.uniqueOnly) {
          // Historic views only make sense in the context of unique pages
          return false;
        }
        var matches = this.history.free.filter(function (pageView) {
          return pageView.u === url;
        });
        return matches.length > 0;
      },
      /**
       * Get the current page view count from the history, compensated
       * for whether the currentView is included in the history or not.
       */
      _getCurrentViews: function (currentView) {
        var pageCount = 0;
        var uniquePages = [];
        for (var i = 0; i < this.history.included.length; i++) {
          var item = this.history.included[i];
          if (this.uniqueOnly && this.blueConicClient.util.array.indexOfArray(uniquePages, item.u) !== -1) {
            continue;
          }
          uniquePages.push(item.u);
          pageCount += item.v;
        }
        var allowed = this._isHistoricallyAllowed(currentView.url) || currentView.isAddedToHistory;

        // Exceeded views are not added to history, so compensate the page view count for this
        if (!allowed && !currentView.isSkippedView && pageCount === this.expireAt - 1) {
          pageCount += currentView.includeValue;
        }
        return pageCount;
      },
      /**
       * Check if the visitor is associated to the
       * configured target segment(s)
       */
      _visitorQualifies: function () {
        var segments = [];
        try {
          segments = this.blueConicClient.json.parse(this.parameters.segments);
        } catch (e) {
          // parsing failed
        }
        if (segments.length === 0) {
          // no target segments configured
          return true;
        }
        var visitorSegments = this.blueConicClient.getSegments();
        if (visitorSegments.length === 0) {
          // no visitor segments available
          return false;
        }
        for (var i = 0; i < visitorSegments.length; i++) {
          var visitorSegment = visitorSegments[i];
          for (var j = 0; j < segments.length; j++) {
            var variableSegment = segments[j];
            if (visitorSegment.id === variableSegment.id) {
              return true;
            }
          }
        }
        return false;
      },
      /**
       * get the max age for historic page views
       */
      _getMaxAge: function () {
        if (this.resetAfter === this.RESET_ROLLING) {
          // rolling window of X days
          var resetRolling = this.parameters.resetRolling && !isNaN(parseInt(this.parameters.resetRolling[0])) ? parseInt(this.parameters.resetRolling[0] * 24 * 60 * 60 * 1000) : this.DEFAULT_MAX_AGE;
          return resetRolling;
        } else if (this.resetAfter === this.RESET_CALENDAR) {
          // first day of month reset
          return this.now.getTime() - new Date(this.now.getFullYear(), this.now.getMonth(), 1).getTime();
        }
        return this.DEFAULT_MAX_AGE;
      },
      /**
       * Check if the provided content (exactly) matches the configured words
       */
      _contentMatchesWords: function (content, matchingType, words) {
        if (!content || typeof content !== "string") {
          return false;
        }
        content = content.toLowerCase();
        for (var i = 0; i < words.length; i++) {
          if (matchingType === "contains") {
            if (content.indexOf(words[i].toLowerCase()) !== -1) {
              return true;
            }
          }
          if (matchingType === "not_contains") {
            if (content.indexOf(words[i].toLowerCase()) === -1) {
              return true;
            }
          } else if (content === words[i].toLowerCase()) {
            // exactly matches
            return true;
          }
        }
        return false;
      },
      /**
       * Check if the provided URL (exactly) matches the configured words
       */
      _URLMatchesWords: function (url, matchingType, words) {
        for (var i = 0; i < words.length; i++) {
          if (matchingType === "contains" || matchingType === "not_contains") {
            var urlPattern = this._escapeRegularExpressionCharacters(words[i]);
            try {
              var rexgexp = new RegExp(urlPattern, "i");
              var matches = rexgexp.test(url);
              if (matches && matchingType === "contains" || !matches && matchingType === "not_contains") {
                return true;
              }
            } catch (e) {
              // invalid regexp
            }
          } else if (url === words[i]) {
            // exactly match
            return true;
          }
        }
        return false;
      },
      /**
       * Gets the content for a given expression, which can either be a CSS selector or a JavaScript Expression
       */
      _getContent: function (expression, isCssSelector) {
        var content = null;
        if (!isCssSelector && expression.indexOf("return ") !== -1) {
          // wrap the expression in an anonymous function to allow for return statements in the expression
          expression = "(function(jQuery) {" + expression + "}(jQuery))";
        }
        try {
          if (!isCssSelector || expression.indexOf("jQuery(") !== -1) {
            // evaluate JavaScript
            // use a closure and pass the selector and jQuery as parameters
            content = function (selector, jQuery, profile) {
              // avoid minification of the variables we want to use in runtime evaluations by using eval()
              eval("var jQuery = arguments[1]");
              eval("var blueConicProfile = arguments[2]");
              return eval(selector);
            }(expression, this.jQuery, this.profile);
          } else {
            // regular CSS selector, pass to jQuery constructor
            content = this.jQuery(expression);
          }
        } catch (e) {
          // failed to parse selector
        }
        if (content && content instanceof this.jQuery) {
          // jQuery wrapped object returned by expression
          if (content.length > 0) {
            var contentArr = [];
            this.jQuery.each(content, this.jQuery.proxy(function (index, thisContentArea) {
              var $thisContentArea = this.jQuery(thisContentArea);
              if ($thisContentArea.attr("content")) {
                contentArr.push(this._normalizeText($thisContentArea.attr("content")));
              } else {
                contentArr.push(this._normalizeText($thisContentArea.text()));
              }
            }, this));
            return contentArr.join().toLowerCase();
          }
        } else if (content !== null && typeof content !== "undefined") {
          if (typeof content === "object" || typeof value === "function") {
            return JSON.stringify(content).toLowerCase();
          } else {
            return content.toLowerCase();
          }
        }
      },
      /**
       * Gets the value of the variable with the name provided from the selector.
       */
      _getVariableValue: function (variable) {
        var selectorVariable = variable.replace("[", ".").replace("]", "").replace("\"\"", "");
        var varArray = selectorVariable.split(".");
        var value = window[varArray.shift()];
        while (varArray.length > 0) {
          if (!value) {
            return null;
          }
          value = value[varArray.shift()];
        }
        if (value instanceof Array) {
          return value.join().toLowerCase();
        } else if (typeof value === "object" || typeof value === "function") {
          return null;
        } else {
          return ("" + value).toLowerCase();
        }
      },
      /**
       * Escapes characters an URL could consist of which are special characters with in a regular expression.
       */
      _escapeRegularExpressionCharacters: function (regexpPattern) {
        var addEscapeCharacter = function (string) {
          return "\\" + string;
        };
        // Replace literal \, ?, .
        regexpPattern = regexpPattern.replace(/[\\?.{}+]/g, addEscapeCharacter);
        regexpPattern = regexpPattern.replace(/\*/g, ".*");
        return regexpPattern;
      },
      /**
       * Remove line breaks and extra spaces from a piece of text
       */
      _normalizeText: function (text) {
        return text ? this.jQuery.trim(text).replace(/\r\n+|\r+|\n+/gi, "").replace(/\s+/gi, " ") : text;
      },
      /**
       * Find the profile property IDs in a JavaScript expression
       */
      _getPropertyIdsFromExpression: function (expression) {
        var getValuesCalls = RegExp(/getValues?\(["']([^"']+)["']\)/, "g");
        var ids = [];
        var match;
        while ((match = getValuesCalls.exec(expression)) !== null) {
          ids.push(match[1]);
        }
        return ids;
      },
      /**
       * Object for current page view
       */
      PageView: function (url, referrer, now) {
        this.url = url;
        this.timestamp = now.getTime();
        this.referrer = referrer;

        // in case the view is included, contains include value
        this.includeValue = 0;

        // page view is skipped based on skip rules
        this.isSkippedView = false;
        // in case the view is skipped temporarily, contains reference to skip rule
        // this way we can keep track how many skipped views were tracked for each rule
        this.skippedFor = null;
        // page view is free based on free view rules
        this.isFreeView = false;
        // page view is allowed based on history
        this.isHistoricallyAllowedView = false;
        // page was added to history during current view
        this.isAddedToHistory = false;
      },
      /**
       * Tracker object. Keeps track of temporarily skipped views.
       * Views are tracked for each skip rule
       * Initialised from the current view history
       */
      SkippedViewTracker: function (self) {
        this.skipped = {};
        var uniquePages = [];
        for (var i = 0; i < self.history.skipped.length; i++) {
          var skippedView = self.history.skipped[i];
          if (!(self.uniqueOnly && self.blueConicClient.util.array.indexOfArray(uniquePages, skippedView.u) !== -1)) {
            this.skipped[skippedView.sf] = this.skipped[skippedView.sf] ? this.skipped[skippedView.sf] + 1 : 1;
          }
          uniquePages.push(skippedView.u);
        }
      },
      /**
       * Tracker object. Keeps track of free views.
       * Views are tracked for each free view rule
       * Initialised from the current view history
       */
      FreeViewTracker: function (self) {
        this.free = {};
        // consumed free views
        this.consumedFreeCount = 0;
        // total free views
        this.totalFree = 0;
        var uniquePages = [];
        for (var i = 0; i < self.history.free.length; i++) {
          var freeView = self.history.free[i];
          if (!(self.uniqueOnly && self.blueConicClient.util.array.indexOfArray(uniquePages, freeView.u) !== -1)) {
            this.free[freeView.ff] = this.free[freeView.ff] ? this.free[freeView.ff] + 1 : 1;
            this.consumedFreeCount++;
          }
          uniquePages.push(freeView.u);
        }
      },
      /**
       * History object holding historically included and skipped views
       */
      History: function (historyFromProfile, maxAge, now) {
        this.included = historyFromProfile.included ? cleanViews(historyFromProfile.included) : [];
        this.skipped = historyFromProfile.skipped ? cleanViews(historyFromProfile.skipped) : [];
        this.free = historyFromProfile.free ? cleanViews(historyFromProfile.free) : [];

        /**
         * Clean out items older than the maximum age
         */
        function cleanViews(views) {
          var i = views.length;
          while (i--) {
            var item = views[i];
            if (now.getTime() - item.ts > maxAge) {
              // item expired, remove from history
              views.splice(i, 1);
            }
          }
          return views;
        }
      }
    });

    //# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyIvVXNlcnMveW91cmkvZ2l0L3BzL3BsdWdpbnNfeWFybi9jdXN0b21lci1zcGVjaWZpYy9icml0YW5uaWNhL2NvbnRlbnRtZXRlci9mcm9udGVuZC9jb250ZW50bWV0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRyYWlsaW5nLXNwYWNlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuLyogZXNsaW50LWRpc2FibGUgYmxvY2stc2NvcGVkLXZhciAqL1xuLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBibG9jay1zY29wZWQtdmFyICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1ldmFsICovXG5cbnZhciBJbnRlcmFjdGlvblR5cGVJbXBsID0gSW50ZXJhY3Rpb25UeXBlLmV4dGVuZCh7XG5cbiAgREVGQVVMVF9NQVhfQUdFOiA5MCAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gIE1BWF9JVEVNUzogMTAwLFxuICBTS0lQX0xJTUlURUQ6IFwibGltaXRlZFwiLFxuICBSRVNFVF9ST0xMSU5HOiBcInJvbGxpbmdcIixcbiAgUkVTRVRfQ0FMRU5EQVI6IFwiY2FsZW5kYXJcIixcblxuICBpbml0OiBmdW5jdGlvbihibHVlQ29uaWNDbGllbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmJsdWVDb25pY0NsaWVudCA9IGJsdWVDb25pY0NsaWVudDtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuaW50ZXJhY3Rpb25JZCA9IFwiY21cIiArIHRoaXMuY29udGV4dC5nZXRJbnRlcmFjdGlvbklkKCk7XG4gICAgdGhpcy5oaXN0b3J5UHJvcGVydHkgPSBcIl9jbV9cIiArIHRoaXMuaW50ZXJhY3Rpb25JZDtcbiAgICB0aGlzLnByb2ZpbGUgPSB0aGlzLmNvbnRleHQuZ2V0UHJvZmlsZSgpO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHRoaXMuY29udGV4dC5nZXRQYXJhbWV0ZXJzKCk7XG5cbiAgICB0aGlzLnByZUxvYWRQcm9wZXJ0aWVzID0gW3RoaXMuaGlzdG9yeVByb3BlcnR5XTtcblxuICAgIHRoaXMuZXhjbHVkZVJ1bGVzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZXhjbHVkZVJ1bGVzID0gdGhpcy5ibHVlQ29uaWNDbGllbnQuanNvbi5wYXJzZSh0aGlzLnBhcmFtZXRlcnMuZXhjbHVkZVJ1bGVzWzBdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBwYXJzZSBmYWlsZWRcbiAgICB9XG4gICAgLy8gY2hlY2sgdGhlIGV4Y2x1ZGUgcnVsZXMgZm9yIGV4cHJlc3Npb25zIHRoYXQgZGVwZW5kIG9uIHByb2ZpbGUgcHJvcGVydHkgdmFsdWVzXG4gICAgaWYgKHRoaXMuZXhjbHVkZVJ1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBleGNsdWRlUnVsZXMgPSB0aGlzLmV4Y2x1ZGVSdWxlcy5maWx0ZXIoZnVuY3Rpb24oZXhjbHVkZVJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIGV4Y2x1ZGVSdWxlLmFyZWEuc2VsZWN0ZWRvcHRpb24gPT09IFwiZXhwcmVzc2lvblwiICYmIGV4Y2x1ZGVSdWxlLmFyZWEuZXhwcmVzc2lvbi5pbmRleE9mKFwiZ2V0VmFsdWVcIikgIT09IC0xO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnByZUxvYWRQcm9wZXJ0aWVzID0gdGhpcy5wcmVMb2FkUHJvcGVydGllcy5jb25jYXQoZXhjbHVkZVJ1bGVzLm1hcChmdW5jdGlvbihleGNsdWRlUnVsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UHJvcGVydHlJZHNGcm9tRXhwcmVzc2lvbihleGNsdWRlUnVsZS5hcmVhLmV4cHJlc3Npb24pO1xuICAgICAgfSwgdGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuaW5jbHVkZVJ1bGVzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaW5jbHVkZVJ1bGVzID0gdGhpcy5ibHVlQ29uaWNDbGllbnQuanNvbi5wYXJzZSh0aGlzLnBhcmFtZXRlcnMuaW5jbHVkZVJ1bGVzWzBdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBwYXJzZSBmYWlsZWRcbiAgICB9XG4gICAgLy8gY2hlY2sgdGhlIGV4Y2x1ZGUgcnVsZXMgZm9yIGV4cHJlc3Npb25zIHRoYXQgZGVwZW5kIG9uIHByb2ZpbGUgcHJvcGVydHkgdmFsdWVzXG4gICAgaWYgKHRoaXMuaW5jbHVkZVJ1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBpbmNsdWRlUnVsZXMgPSB0aGlzLmluY2x1ZGVSdWxlcy5maWx0ZXIoZnVuY3Rpb24oaW5jbHVkZVJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIGluY2x1ZGVSdWxlLmFyZWEuc2VsZWN0ZWRvcHRpb24gPT09IFwiZXhwcmVzc2lvblwiICYmIGluY2x1ZGVSdWxlLmFyZWEuZXhwcmVzc2lvbi5pbmRleE9mKFwiZ2V0VmFsdWVcIikgIT09IC0xO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnByZUxvYWRQcm9wZXJ0aWVzID0gdGhpcy5wcmVMb2FkUHJvcGVydGllcy5jb25jYXQoaW5jbHVkZVJ1bGVzLm1hcChmdW5jdGlvbihpbmNsdWRlUnVsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UHJvcGVydHlJZHNGcm9tRXhwcmVzc2lvbihpbmNsdWRlUnVsZS5hcmVhLmV4cHJlc3Npb24pO1xuICAgICAgfSwgdGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuZnJlZVJ1bGVzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZnJlZVJ1bGVzID0gdGhpcy5ibHVlQ29uaWNDbGllbnQuanNvbi5wYXJzZSh0aGlzLnBhcmFtZXRlcnMuZnJlZVJ1bGVzWzBdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBwYXJzZSBmYWlsZWRcbiAgICB9XG4gICAgaWYgKHRoaXMuZnJlZVJ1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZnJlZVJ1bGVzID0gdGhpcy5mcmVlUnVsZXMuZmlsdGVyKGZ1bmN0aW9uKGZyZWVSdWxlKSB7XG4gICAgICAgIHJldHVybiAhIWZyZWVSdWxlLnByb3BlcnR5O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnByZUxvYWRQcm9wZXJ0aWVzID0gdGhpcy5wcmVMb2FkUHJvcGVydGllcy5jb25jYXQodGhpcy5mcmVlUnVsZXMubWFwKGZ1bmN0aW9uKGZyZWVSdWxlKSB7XG4gICAgICAgIHJldHVybiBmcmVlUnVsZS5wcm9wZXJ0eS5pZDtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLmV4cGlyZUF0ID0gcGFyc2VJbnQodGhpcy5wYXJhbWV0ZXJzLmV4cGlyZUF0WzBdKTtcbiAgICBpZiAoaXNOYU4odGhpcy5leHBpcmVBdCkpIHtcbiAgICAgIHRoaXMuZXhwaXJlQXQgPSAxMDtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0QWZ0ZXIgPSB0aGlzLnBhcmFtZXRlcnMucmVzZXRBZnRlclswXTtcbiAgICB0aGlzLnVuaXF1ZU9ubHkgPSB0aGlzLnBhcmFtZXRlcnMudW5pcXVlT25seVswXSA9PT0gXCJ0cnVlXCI7XG4gICAgdGhpcy5vbmNlT25seSA9ICEhKHRoaXMucGFyYW1ldGVycy5vbmNlT25seSAmJiB0aGlzLnBhcmFtZXRlcnMub25jZU9ubHlbMF0gPT09IFwidHJ1ZVwiKTtcbiAgICB0aGlzLm5vdyA9IHRoaXMuYmx1ZUNvbmljQ2xpZW50LmdldEN1cnJlbnREYXRlKCk7XG4gICAgdGhpcy5tYXhBZ2UgPSB0aGlzLl9nZXRNYXhBZ2UoKTtcbiAgICBcbiAgICB0aGlzLmRpc2FibGVPR1VSTCA9ICEhKHRoaXMucGFyYW1ldGVycy5kaXNhYmxlT0dVUkwgJiYgdGhpcy5wYXJhbWV0ZXJzLmRpc2FibGVPR1VSTFswXSA9PT0gXCJ0cnVlXCIpO1xuXG4gICAgdGhpcy5kZWxheU1ldGVyaW5nID0gISEodGhpcy5wYXJhbWV0ZXJzLmRlbGF5TWV0ZXJpbmcgJiYgdGhpcy5wYXJhbWV0ZXJzLmRlbGF5TWV0ZXJpbmdbMF0gPT09IFwidHJ1ZVwiKTtcbiAgICB0aGlzLmV2ZW50U3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgIHRoaXMucGFnZVZpZXdFdmVudHNUaHJvd24gPSBmYWxzZTtcblxuICAgIC8vIHN1YnNjcmliZSB0byBkeW5hbWljIHBhZ2UgY2hhbmdlc1xuICAgIHRoaXMuYmx1ZUNvbmljQ2xpZW50LmV2ZW50LnN1YnNjcmliZSh0aGlzLmJsdWVDb25pY0NsaWVudC5ldmVudC5vblVybENoYW5nZSwgdGhpcywgZnVuY3Rpb24oZXZlbnQpIHtcblx0ICB0aGlzLnBhZ2VWaWV3RXZlbnRzVGhyb3duID0gZmFsc2U7XG5cdCAgY29uc29sZS5sb2coXCJbQkMgTUVURVIgREVCVUdHSU5HXSBcIiArIGV2ZW50ICsgXCIgRXZlbnQgVHJpZ2dlcmVkXCIpO1xuICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICB9KTtcbiAgfSxcblxuICBnZXRQcmVsb2FkUHJvcGVydGllczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlTG9hZFByb3BlcnRpZXM7XG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmRlbGF5TWV0ZXJpbmcgJiYgIXdpbmRvdy5ldmVudFN1YnNjcmliZWQpIHtcbiAgICAgIHdpbmRvdy5ldmVudFN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgLy8gZGVsYXkgbWV0ZXJpbmcgdW50aWxsIHRoZSAnU3RhcnQgTWV0ZXJpbmcnIGV2ZW50IGlzIHB1Ymxpc2hlZFxuICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQuZXZlbnQuc3Vic2NyaWJlKFwiY21fc3RhcnRfbWV0ZXJpbmdcIiwgdGhpcywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmlzaXRvclF1YWxpZmllcyA9IHRoaXMuX3Zpc2l0b3JRdWFsaWZpZXMoKTtcbiAgICBpZiAoIXZpc2l0b3JRdWFsaWZpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaGlzdG9yeUZyb21Qcm9maWxlID0ge307XG4gICAgdHJ5IHtcbiAgICAgIC8vIHBhcnNlIHRoZSBoaXN0b3J5IGZyb20gdGhlIHByb2ZpbGVcbiAgICAgIHZhciBoaXN0b3J5U3RyID0gdGhpcy5wcm9maWxlLmdldFZhbHVlKHRoaXMuaGlzdG9yeVByb3BlcnR5KTtcbiAgICAgIGlmIChoaXN0b3J5U3RyKSB7XG4gICAgICAgIGhpc3RvcnlGcm9tUHJvZmlsZSA9IHRoaXMuYmx1ZUNvbmljQ2xpZW50Lmpzb24ucGFyc2UodGhpcy5wcm9maWxlLmdldFZhbHVlKHRoaXMuaGlzdG9yeVByb3BlcnR5KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gcGFyc2UgZmFpbGVkXG4gICAgfVxuXG4gICAgLy8gSGlzdG9yeSBvYmplY3QgY29udGFpbnMgdGhlIHByZXZpb3VzbHkgaW5jbHVkZWQgYW5kIHRlbXBvcmFyaWx5IHNraXBwZWQgdmlld3MgZm9yIHRoaXMgbWV0ZXJcbiAgICB0aGlzLmhpc3RvcnkgPSBuZXcgdGhpcy5IaXN0b3J5KGhpc3RvcnlGcm9tUHJvZmlsZSwgdGhpcy5tYXhBZ2UsIHRoaXMubm93KTtcblxuICAgIC8vIGN1cnJlbnQgdmlld1xuICAgIHZhciBjdXJyZW50VmlldyA9IHRoaXMuX2dldEN1cnJlbnRWaWV3KCk7XG4gICAgaWYgKGN1cnJlbnRWaWV3KSB7XG5cbiAgICAgIC8vIG9ubHkgYWRkIHRoZSB2aWV3IHRvIHRoZSBoaXN0b3J5IGlmIGl0IGlzIG5vdCBza2lwcGVkIG9yIGlmIGl0IGlzIHRlbXBvcmFyaWx5IHNraXBwZWRcbiAgICAgIC8vIGluIHdoaWNoIGNhc2Ugd2UgaGF2ZSB0byBrZWVwIHRyYWNrIG9mIHRoZSBudW1iZXIgb2Ygc2tpcHMgcGVyIHNraXAgcnVsZVxuICAgICAgdmFyIGFkZFRvSGlzdG9yeSA9ICFjdXJyZW50Vmlldy5pc1NraXBwZWRWaWV3IHx8IChjdXJyZW50Vmlldy5pc1NraXBwZWRWaWV3ICYmICEhY3VycmVudFZpZXcuc2tpcHBlZEZvcik7XG4gICAgICBpZiAoYWRkVG9IaXN0b3J5KSB7XG4gICAgICAgIC8vIGFkZCB0aGUgY3VycmVudCB2aWV3IHRvIHRoZSBoaXN0b3J5XG4gICAgICAgIHRoaXMuX2FkZFZpZXdUb0hpc3RvcnkoY3VycmVudFZpZXcpO1xuXG4gICAgICAgIGlmICghY3VycmVudFZpZXcuaXNTa2lwcGVkVmlldykge1xuICAgICAgICAgIC8vIHZpZXcgaGFzIGRpcmVjdCBpbmZsdWVuY2Ugb24gY3VycmVudCBtZXRlcixcbiAgICAgICAgICAvLyB1cGRhdGUgdGhlIHByb2ZpbGUgcHJvcGVydGllc1xuICAgICAgICAgIHRoaXMuX3dyaXRlRXh0cmFQcm9maWxlUHJvcGVydGllcyhjdXJyZW50Vmlldyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJsdWVDb25pY0NsaWVudC5wcm9maWxlLnVwZGF0ZVByb2ZpbGUodGhpcywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoIXRoaXMucGFnZVZpZXdFdmVudHNUaHJvd24pIHtcbiAgICAgICAgICAgIHRoaXMuX3Rocm93RXZlbnRzKGN1cnJlbnRWaWV3KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZighdGhpcy5wYWdlVmlld0V2ZW50c1Rocm93bikge1xuICAgICAgICAgIHRoaXMuX3Rocm93RXZlbnRzKGN1cnJlbnRWaWV3KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9LFxuXG4gIC8qKlxuICAgKiBUaHJvdyB0aGUgZGlhbG9ndWUgdHJpZ2dlcmluZyBldmVudHMgYmFzZWQgb24gdGhlIGN1cnJlbnQgY291bnRcbiAgICovXG4gIF90aHJvd0V2ZW50czogZnVuY3Rpb24oY3VycmVudFZpZXcpIHtcblx0aWYgKHRoaXMucGFnZVZpZXdFdmVudHNUaHJvd24pIHtcblx0ICByZXR1cm47XG5cdH1cblx0dGhpcy5wYWdlVmlld0V2ZW50c1Rocm93biA9IHRydWU7XG5cblx0dmFyIHRoaXNfdXJsID0gKHRoaXMualF1ZXJ5KCdtZXRhW3Byb3BlcnR5PVwib2c6dXJsXCJdJykuYXR0cihcImNvbnRlbnRcIikgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZikudG9Mb3dlckNhc2UoKTtcblx0aWYgKHRoaXMuZGlzYWJsZU9HVVJMKSB7XG5cdFx0dmFyIHRoaXNfdXJsID0gKGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgKyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSkudG9Mb3dlckNhc2UoKTtcblx0fVxuICAgIHZhciB0aGlzX3JlZmVycmVyID0gZG9jdW1lbnQucmVmZXJyZXIudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgdGhpc19pbnRlcmFjdGlvbiA9IHRoaXMuaW50ZXJhY3Rpb25JZDtcblxuICAgIHZhciBjb3VudCA9IHRoaXMuX2dldEN1cnJlbnRWaWV3cyhjdXJyZW50Vmlldyk7XG5cbiAgICBpZiAoY3VycmVudFZpZXcuaXNIaXN0b3JpY2FsbHlBbGxvd2VkVmlldyB8fCBjdXJyZW50Vmlldy5pc0hpc3RvcmljYWxseUFsbG93ZWRGcmVlVmlldykge1xuICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJjbV9hbHJlYWR5X3ZpZXdlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFZpZXcuaXNGcmVlVmlldykge1xuICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJjbV9mcmVlX3ZpZXdcIik7XG4gICAgICBpZiAoKHRoaXMub25jZU9ubHkgJiYgIWN1cnJlbnRWaWV3LmlzSGlzdG9yaWNhbGx5QWxsb3dlZEZyZWVWaWV3KSB8fCAhdGhpcy5vbmNlT25seSkge1xuICAgICAgICBpZiAodGhpcy5mcmVlVmlld1RyYWNrZXIuY29uc3VtZWRGcmVlQ291bnQgPT09IHRoaXMuZnJlZVZpZXdUcmFja2VyLnRvdGFsRnJlZSkge1xuICAgICAgICAgIHRoaXMuYmx1ZUNvbmljQ2xpZW50LmNyZWF0ZUV2ZW50KFwiY21fbGFzdF9mcmVlX3ZpZXdcIik7XG4gICAgICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQucHJvZmlsZS5nZXRQcm9maWxlKCkudGltZWxpbmUuY3JlYXRlRXZlbnQoXCJjb250ZW50X21ldGVyXCIsIG5ldyBEYXRlKCksIHttZXRlcl9ldmVudDpcImNtX2xhc3RfZnJlZV92aWV3XCIsIHVybDp0aGlzX3VybCwgcmVmZXJyZXI6dGhpc19yZWZlcnJlcn0sIHRoaXMsIGZ1bmN0aW9uKCl7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJjbV9mcmVlX3ZpZXdfXCIgKyB0aGlzLmZyZWVWaWV3VHJhY2tlci5jb25zdW1lZEZyZWVDb3VudCk7XG4gICAgICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQucHJvZmlsZS5nZXRQcm9maWxlKCkudGltZWxpbmUuY3JlYXRlRXZlbnQoXCJjb250ZW50X21ldGVyXCIsIG5ldyBEYXRlKCksIHttZXRlcl9ldmVudDpcImNtX2ZyZWVfdmlld19cIiArIHRoaXMuZnJlZVZpZXdUcmFja2VyLmNvbnN1bWVkRnJlZUNvdW50LCB1cmw6dGhpc191cmwsIHJlZmVycmVyOnRoaXNfcmVmZXJyZXIsIHNvdXJjZTp0aGlzX2ludGVyYWN0aW9ufSwgdGhpcywgZnVuY3Rpb24oKXt9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIFdoZW4gdGhlICdvbmNlT25seScgZmxhZyBpcyBzZXQgdG8gdHJ1ZSwgdGhyb3cgdGhlIGZpcnN0LCBsYXN0IGFuZCByZWd1bGFyIHZpZXcgZXZlbnRzIG9ubHkgd2hlbiB0aGUgY3VycmVudCB2aWV3XG4gICAgICAvLyBpcyBub3QgaGlzdG9yaWNhbGx5IGFsbG93ZWQgb3Igc2tpcHBlZC5cbiAgICAgIGlmICgodGhpcy5vbmNlT25seSAmJiAhY3VycmVudFZpZXcuaXNIaXN0b3JpY2FsbHlBbGxvd2VkVmlldyAmJiAhY3VycmVudFZpZXcuaXNTa2lwcGVkVmlldykgfHwgIXRoaXMub25jZU9ubHkgJiYgIWN1cnJlbnRWaWV3LmlzU2tpcHBlZFZpZXcpIHtcbiAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJjbV9maXJzdHZpZXdcIik7XG4gICAgICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJjbV92aWV3XCIpO1xuICAgICAgICAgIHRoaXMuYmx1ZUNvbmljQ2xpZW50LnByb2ZpbGUuZ2V0UHJvZmlsZSgpLnRpbWVsaW5lLmNyZWF0ZUV2ZW50KFwiY29udGVudF9tZXRlclwiLCBuZXcgRGF0ZSgpLCB7bWV0ZXJfZXZlbnQ6XCJjbV9maXJzdHZpZXdcIiwgdXJsOnRoaXNfdXJsLCByZWZlcnJlcjp0aGlzX3JlZmVycmVyLCBzb3VyY2U6dGhpc19pbnRlcmFjdGlvbn0sIHRoaXMsIGZ1bmN0aW9uKCl7fSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY291bnQgPT09IHRoaXMuZXhwaXJlQXQgLSAxKSB7XG4gICAgICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJjbV9sYXN0dmlld1wiKTtcbiAgICAgICAgICB0aGlzLmJsdWVDb25pY0NsaWVudC5jcmVhdGVFdmVudChcImNtX3ZpZXdcIik7XG4gICAgICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQucHJvZmlsZS5nZXRQcm9maWxlKCkudGltZWxpbmUuY3JlYXRlRXZlbnQoXCJjb250ZW50X21ldGVyXCIsIG5ldyBEYXRlKCksIHttZXRlcl9ldmVudDpcImNtX2xhc3R2aWV3XCIsIHVybDp0aGlzX3VybCwgcmVmZXJyZXI6dGhpc19yZWZlcnJlciwgc291cmNlOnRoaXNfaW50ZXJhY3Rpb259LCB0aGlzLCBmdW5jdGlvbigpe30pO1xuICAgICAgICB9IGVsc2UgaWYgKGNvdW50IDwgdGhpcy5leHBpcmVBdCkge1xuICAgICAgICAgIHRoaXMuYmx1ZUNvbmljQ2xpZW50LmNyZWF0ZUV2ZW50KFwiY21fdmlld19cIiArIGNvdW50KTtcbiAgICAgICAgICB0aGlzLmJsdWVDb25pY0NsaWVudC5jcmVhdGVFdmVudChcImNtX3ZpZXdcIik7XG4gICAgICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQucHJvZmlsZS5nZXRQcm9maWxlKCkudGltZWxpbmUuY3JlYXRlRXZlbnQoXCJjb250ZW50X21ldGVyXCIsIG5ldyBEYXRlKCksIHttZXRlcl9ldmVudDpcImNtX3ZpZXdfXCIgKyBjb3VudCwgdXJsOnRoaXNfdXJsLCByZWZlcnJlcjp0aGlzX3JlZmVycmVyLCBzb3VyY2U6dGhpc19pbnRlcmFjdGlvbn0sIHRoaXMsIGZ1bmN0aW9uKCl7fSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50ID49IHRoaXMuZXhwaXJlQXQpIHtcbiAgICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJjbV9leGNlZWRlZFwiKTtcbiAgICAgICAgdGhpcy5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJjbV92aWV3XCIpO1xuICAgICAgICB0aGlzLmJsdWVDb25pY0NsaWVudC5wcm9maWxlLmdldFByb2ZpbGUoKS50aW1lbGluZS5jcmVhdGVFdmVudChcImNvbnRlbnRfbWV0ZXJcIiwgbmV3IERhdGUoKSwge21ldGVyX2V2ZW50OlwiY21fZXhjZWVkZWRcIiwgdXJsOnRoaXNfdXJsLCByZWZlcnJlcjp0aGlzX3JlZmVycmVyLCBzb3VyY2U6dGhpc19pbnRlcmFjdGlvbn0sIHRoaXMsIGZ1bmN0aW9uKCl7fSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50Vmlldy5pc1NraXBwZWRWaWV3KSB7XG4gICAgICAgIHRoaXMuYmx1ZUNvbmljQ2xpZW50LmNyZWF0ZUV2ZW50KFwiY21fZXhjbHVkZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJvdHRvbUZyb20gPSB0aGlzLnBhcmFtZXRlcnMuYm90dG9tRnJvbSAmJiB0aGlzLnBhcmFtZXRlcnMuYm90dG9tRnJvbVswXSA/IHBhcnNlSW50KHRoaXMucGFyYW1ldGVycy5ib3R0b21Gcm9tWzBdKSA6IG51bGw7XG4gICAgdmFyIGJvdHRvbVRvID0gdGhpcy5wYXJhbWV0ZXJzLmJvdHRvbVRvICYmIHRoaXMucGFyYW1ldGVycy5ib3R0b21Ub1swXSA/IHBhcnNlSW50KHRoaXMucGFyYW1ldGVycy5ib3R0b21Ub1swXSkgOiBudWxsO1xuICAgIHZhciBtaWRkbGVGcm9tID0gdGhpcy5wYXJhbWV0ZXJzLm1pZGRsZUZyb20gJiYgdGhpcy5wYXJhbWV0ZXJzLm1pZGRsZUZyb21bMF0gPyBwYXJzZUludCh0aGlzLnBhcmFtZXRlcnMubWlkZGxlRnJvbVswXSkgOiBudWxsO1xuICAgIHZhciBtaWRkbGVUbyA9IHRoaXMucGFyYW1ldGVycy5taWRkbGVUbyAmJiB0aGlzLnBhcmFtZXRlcnMubWlkZGxlVG9bMF0gPyBwYXJzZUludCh0aGlzLnBhcmFtZXRlcnMubWlkZGxlVG9bMF0pIDogbnVsbDtcbiAgICB2YXIgdG9wRnJvbSA9IHRoaXMucGFyYW1ldGVycy50b3BGcm9tICYmIHRoaXMucGFyYW1ldGVycy50b3BGcm9tWzBdID8gcGFyc2VJbnQodGhpcy5wYXJhbWV0ZXJzLnRvcEZyb21bMF0pIDogbnVsbDtcbiAgICB2YXIgdG9wVG8gPSB0aGlzLnBhcmFtZXRlcnMudG9wVG8gJiYgdGhpcy5wYXJhbWV0ZXJzLnRvcFRvWzBdID8gcGFyc2VJbnQodGhpcy5wYXJhbWV0ZXJzLnRvcFRvWzBdKSA6IG51bGw7XG5cblx0aWYgKGJvdHRvbUZyb20gJiYgYm90dG9tVG8gJiYgY291bnQgPj0gYm90dG9tRnJvbSAmJiBjb3VudCA8PSBib3R0b21Ubykge1xuXHQgIHRoaXMuYmx1ZUNvbmljQ2xpZW50LmNyZWF0ZUV2ZW50KFwiY21fYm90dG9tXCIpO1xuXHR9XG5cdGlmIChtaWRkbGVGcm9tICYmIG1pZGRsZVRvICYmIGNvdW50ID49IG1pZGRsZUZyb20gJiYgY291bnQgPD0gbWlkZGxlVG8pIHtcblx0ICB0aGlzLmJsdWVDb25pY0NsaWVudC5jcmVhdGVFdmVudChcImNtX21pZGRsZVwiKTtcblx0fVxuXHRpZiAodG9wRnJvbSAmJiB0b3BUbyAmJiBjb3VudCA+PSB0b3BGcm9tICYmIGNvdW50IDw9IHRvcFRvKSB7XG5cdCAgdGhpcy5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJjbV90b3BcIik7XG5cdH1cblx0ICAgIFxuXHR0aGlzLmJsdWVDb25pY0NsaWVudC5jcmVhdGVFdmVudChcImNtX2ZpbmlzaGVkXCIpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXcml0ZSB0aGUgdXBkYXRlZCBoaXN0b3J5IHRvIHRoZSBwcm9maWxlXG4gICAqL1xuICBfYWRkVmlld1RvSGlzdG9yeTogZnVuY3Rpb24oY3VycmVudFZpZXcpIHtcbiAgICBpZiAodGhpcy5fZ2V0Q3VycmVudFZpZXdzKGN1cnJlbnRWaWV3KSA+PSB0aGlzLmV4cGlyZUF0ICYmICFjdXJyZW50Vmlldy5pc0ZyZWVWaWV3KSB7XG4gICAgICAvLyBubyBuZWVkIHRvIGluY2x1ZGUgdGhlIGN1cnJlbnQgcGFnZSB2aWV3IGluIHRoZSBoaXN0b3J5XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRWaWV3LmlzRnJlZVZpZXcpIHtcbiAgICAgIC8vIGFkZCBmcmVlIHZpZXdcbiAgICAgIHRoaXMuaGlzdG9yeS5mcmVlLnB1c2goe1xuICAgICAgICB1OiBjdXJyZW50Vmlldy51cmwsXG4gICAgICAgIGZmOiBjdXJyZW50Vmlldy5mcmVlRm9yLFxuICAgICAgICB0czogY3VycmVudFZpZXcudGltZXN0YW1wXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3LmlzU2tpcHBlZFZpZXcpIHtcbiAgICAgIC8vIGFkZCBsaW1pdGVkIHNraXBwZWQgdmlld1xuICAgICAgdGhpcy5oaXN0b3J5LnNraXBwZWQucHVzaCh7XG4gICAgICAgIHU6IGN1cnJlbnRWaWV3LnVybCxcbiAgICAgICAgc2Y6IGN1cnJlbnRWaWV3LnNraXBwZWRGb3IsXG4gICAgICAgIHRzOiBjdXJyZW50Vmlldy50aW1lc3RhbXBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhZGQgdmlldyB0byBoaXN0b3J5XG4gICAgICB0aGlzLmhpc3RvcnkuaW5jbHVkZWQucHVzaCh7XG4gICAgICAgIHU6IGN1cnJlbnRWaWV3LnVybCxcbiAgICAgICAgdjogY3VycmVudFZpZXcuaW5jbHVkZVZhbHVlLFxuICAgICAgICB0czogY3VycmVudFZpZXcudGltZXN0YW1wXG4gICAgICB9KTtcbiAgICAgIC8vIGZsYWcgdGhlIGN1cnJlbnQgdmlldyBhcyBhZGRlZCB0byBoaXN0b3J5XG4gICAgICBjdXJyZW50Vmlldy5pc0FkZGVkVG9IaXN0b3J5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oaXN0b3J5LmluY2x1ZGVkLmxlbmd0aCA+IHRoaXMuTUFYX0lURU1TKSB7XG4gICAgICAvLyBubyBuZWVkIHRvIHN0b3JlIG1vcmUgaW5jbHVkZWQgdmlld3MgdGhhbiBuZWNlc3NhcnksIHJlbW92ZVxuICAgICAgLy8gdGhlIG9sZGVzdCBpdGVtXG4gICAgICB0aGlzLmhpc3RvcnkuaW5jbHVkZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHZhciB4ID0gYS50cztcbiAgICAgICAgdmFyIHkgPSBiLnRzO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICByZXR1cm4gKCh4IDwgeSkgPyAtMSA6ICgoeCA+IHkpID8gMSA6IDApKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgfSk7XG4gICAgICB0aGlzLmhpc3RvcnkuaW5jbHVkZWQuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBObyBsZW5ndGggY2FwIG9uIGhpc3Rvcnkuc2tpcHBlZCBsaWtlIG9uIGhpc3RvcnkuaW5jbHVkZWQ/XG5cbiAgICB0aGlzLnByb2ZpbGUuc2V0VmFsdWUodGhpcy5oaXN0b3J5UHJvcGVydHksIHRoaXMuYmx1ZUNvbmljQ2xpZW50Lmpzb24uc3RyaW5naWZ5KHRoaXMuaGlzdG9yeSkpO1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFdyaXRlIG1ldGVyIHN0YXRzIHRvIHByb2ZpbGUgcHJvcGVydGllc1xuICAgKi9cbiAgX3dyaXRlRXh0cmFQcm9maWxlUHJvcGVydGllczogZnVuY3Rpb24oY3VycmVudFZpZXcpIHtcbiAgICB2YXIgY3VycmVudFBhZ2VWaWV3Q291bnQgPSB0aGlzLl9nZXRDdXJyZW50Vmlld3MoY3VycmVudFZpZXcpO1xuXG4gICAgdmFyIGV4cGlyZUF0UHJvcGVydHkgPSB0aGlzLnBhcmFtZXRlcnMuZXhwaXJlQXRQcm9wZXJ0eSAmJiB0aGlzLnBhcmFtZXRlcnMuZXhwaXJlQXRQcm9wZXJ0eVswXSA/IHRoaXMucGFyYW1ldGVycy5leHBpcmVBdFByb3BlcnR5WzBdIDogbnVsbDtcbiAgICB2YXIgbnVtVmlld3NQcm9wZXJ0eSA9IHRoaXMucGFyYW1ldGVycy5udW1WaWV3c1Byb3BlcnR5ICYmIHRoaXMucGFyYW1ldGVycy5udW1WaWV3c1Byb3BlcnR5WzBdID8gdGhpcy5wYXJhbWV0ZXJzLm51bVZpZXdzUHJvcGVydHlbMF0gOiBudWxsO1xuICAgIHZhciBudW1WaWV3c0xlZnRQcm9wZXJ0eSA9IHRoaXMucGFyYW1ldGVycy5udW1WaWV3c0xlZnRQcm9wZXJ0eSAmJiB0aGlzLnBhcmFtZXRlcnMubnVtVmlld3NMZWZ0UHJvcGVydHlbMF0gPyB0aGlzLnBhcmFtZXRlcnMubnVtVmlld3NMZWZ0UHJvcGVydHlbMF0gOiBudWxsO1xuICAgIHZhciBudW1GcmVlVmlld3NQcm9wZXJ0eSA9IHRoaXMucGFyYW1ldGVycy5udW1GcmVlVmlld3NQcm9wZXJ0eSAmJiB0aGlzLnBhcmFtZXRlcnMubnVtRnJlZVZpZXdzUHJvcGVydHlbMF0gPyB0aGlzLnBhcmFtZXRlcnMubnVtRnJlZVZpZXdzUHJvcGVydHlbMF0gOiBudWxsO1xuICAgIHZhciBudW1GcmVlVmlld3NMZWZ0UHJvcGVydHkgPSB0aGlzLnBhcmFtZXRlcnMubnVtRnJlZVZpZXdzTGVmdFByb3BlcnR5ICYmIHRoaXMucGFyYW1ldGVycy5udW1GcmVlVmlld3NMZWZ0UHJvcGVydHlbMF0gPyB0aGlzLnBhcmFtZXRlcnMubnVtRnJlZVZpZXdzTGVmdFByb3BlcnR5WzBdIDogbnVsbDtcblxuICAgIGlmIChleHBpcmVBdFByb3BlcnR5ICYmIGV4cGlyZUF0UHJvcGVydHkgIT09IFwibnVsbFwiKSB7XG4gICAgICB0aGlzLnByb2ZpbGUuc2V0VmFsdWUoZXhwaXJlQXRQcm9wZXJ0eSwgdGhpcy5leHBpcmVBdCk7XG4gICAgfVxuICAgIGlmIChudW1WaWV3c1Byb3BlcnR5ICYmIG51bVZpZXdzUHJvcGVydHkgIT09IFwibnVsbFwiKSB7XG4gICAgICB0aGlzLnByb2ZpbGUuc2V0VmFsdWUobnVtVmlld3NQcm9wZXJ0eSwgY3VycmVudFBhZ2VWaWV3Q291bnQgPD0gdGhpcy5leHBpcmVBdCA/IGN1cnJlbnRQYWdlVmlld0NvdW50IDogdGhpcy5leHBpcmVBdCk7XG4gICAgfVxuICAgIGlmIChudW1WaWV3c0xlZnRQcm9wZXJ0eSAmJiBudW1WaWV3c0xlZnRQcm9wZXJ0eSAhPT0gXCJudWxsXCIpIHtcbiAgICAgIHRoaXMucHJvZmlsZS5zZXRWYWx1ZShudW1WaWV3c0xlZnRQcm9wZXJ0eSwgY3VycmVudFBhZ2VWaWV3Q291bnQgPCB0aGlzLmV4cGlyZUF0ID8gKHRoaXMuZXhwaXJlQXQgLSBjdXJyZW50UGFnZVZpZXdDb3VudCkgLSAxIDogMCk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRWaWV3LmlzRnJlZVZpZXcpIHtcbiAgICAgIGlmIChudW1GcmVlVmlld3NQcm9wZXJ0eSAmJiBudW1GcmVlVmlld3NQcm9wZXJ0eSAhPT0gXCJudWxsXCIpIHtcbiAgICAgICAgdGhpcy5wcm9maWxlLnNldFZhbHVlKG51bUZyZWVWaWV3c1Byb3BlcnR5LCB0aGlzLmZyZWVWaWV3VHJhY2tlci5jb25zdW1lZEZyZWVDb3VudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChudW1GcmVlVmlld3NMZWZ0UHJvcGVydHkgJiYgbnVtRnJlZVZpZXdzTGVmdFByb3BlcnR5ICE9PSBcIm51bGxcIikge1xuICAgICAgICB2YXIgZnJlZUxlZnQgPSB0aGlzLmZyZWVWaWV3VHJhY2tlci50b3RhbEZyZWUgLSB0aGlzLmZyZWVWaWV3VHJhY2tlci5jb25zdW1lZEZyZWVDb3VudDtcbiAgICAgICAgdGhpcy5wcm9maWxlLnNldFZhbHVlKG51bUZyZWVWaWV3c0xlZnRQcm9wZXJ0eSwgZnJlZUxlZnQgPiAwID8gZnJlZUxlZnQgOiAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSxcblxuICAvKipcbiAgICogR2V0IHRoZSBWaWV3IGZvciB0aGUgY3VycmVudCBwYWdlIHZpZXdcbiAgICogV2lsbCBvbmx5IHJldHVybiBhIFBhZ2VWaWV3IG9iamVjdCBpZiB0aGUgcGFnZSBpcyBiZWluZyBtZXRlcmVkXG4gICAqL1xuICBfZ2V0Q3VycmVudFZpZXc6IGZ1bmN0aW9uKCkge1xuXHR2YXIgdXJsID0gXCJcIjtcblx0aWYgKHR5cGVvZiBNZW5kZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgIGlmIChNZW5kZWwuQkMgJiYgTWVuZGVsLkJDLnRvcGljSWQpIHtcbiAgICAgIHVybCA9IE1lbmRlbC5CQy50b3BpY0lkO1xuICAgIH0gZWxzZSBpZiAoTWVuZGVsLmNvbmZpZyAmJiBNZW5kZWwuY29uZmlnLmN1cnJlbnRUb3BpYyAmJiBNZW5kZWwuY29uZmlnLmN1cnJlbnRUb3BpYy5pZCkge1xuICAgICAgdXJsID0gTWVuZGVsLmNvbmZpZy5jdXJyZW50VG9waWMuaWRcbiAgICB9IGVsc2UgaWYgKE1lbmRlbC5jb25maWcgJiYgTWVuZGVsLmNvbmZpZy50b3BpY0lkKSB7XG4gICAgICB1cmwgPSBNZW5kZWwuY29uZmlnLnRvcGljSWRcbiAgICB9XG5cdH0gZWxzZSB7XG5cdFx0dXJsID0gKHRoaXMualF1ZXJ5KCdtZXRhW3Byb3BlcnR5PVwib2c6dXJsXCJdJykuYXR0cihcImNvbnRlbnRcIikgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZikudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAodGhpcy5kaXNhYmxlT0dVUkwpIHtcblx0XHRcdHVybCA9IChkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBkb2N1bWVudC5sb2NhdGlvbi5ob3N0ICsgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUpLnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHR9XG5cbiAgICB2YXIgcmVmZXJyZXIgPSBkb2N1bWVudC5yZWZlcnJlci50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdmFyIHBhZ2VWaWV3ID0gbmV3IHRoaXMuUGFnZVZpZXcodXJsLCByZWZlcnJlciwgdGhpcy5ub3cpO1xuICAgIHBhZ2VWaWV3LmlzSGlzdG9yaWNhbGx5QWxsb3dlZFZpZXcgPSB0aGlzLl9pc0hpc3RvcmljYWxseUFsbG93ZWQodXJsKTtcbiAgICBwYWdlVmlldy5pbmNsdWRlVmFsdWUgPSB0aGlzLl9nZXRJbmNsdWRlVmFsdWUocGFnZVZpZXcpO1xuXG4gICAgaWYgKHBhZ2VWaWV3LmluY2x1ZGVWYWx1ZSA+IDApIHtcbiAgICAgIC8vIHNldCBza2lwcGVkIGZsYWdcbiAgICAgIHBhZ2VWaWV3LmlzU2tpcHBlZFZpZXcgPSB0aGlzLl9pc1BhZ2VWaWV3U2tpcHBlZChwYWdlVmlldyk7XG5cbiAgICAgIGlmICh0aGlzLl9nZXRDdXJyZW50Vmlld3MocGFnZVZpZXcpID49IHRoaXMuZXhwaXJlQXQpIHtcbiAgICAgICAgLy8gVGhpcyB2aWV3IGV4Y2VlZHMgdGhlIGV4cGlyZSBsaW1pdFxuICAgICAgICAvLyBjaGVjayBmb3IgZnJlZSB2aWV3c1xuICAgICAgICB0aGlzLl9zZXRQYWdlVmlld0ZyZWUocGFnZVZpZXcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhZ2VWaWV3O1xuICAgIH1cbiAgICAvLyBubyBpbmNsdWRlIHZhbHVlXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBwYXNzZWQgcGFnZSB2aWV3IG9iamVjdCBzaG91bGQgYmUgaW5jbHVkZWRcbiAgICogaW4gbWV0ZXJpbmcsIHJldHVybiB0aGUgdmlldyB2YWx1ZVxuICAgKi9cbiAgX2dldEluY2x1ZGVWYWx1ZTogZnVuY3Rpb24ocGFnZVZpZXcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW5jbHVkZVJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaW5jbHVkZVJ1bGUgPSB0aGlzLmluY2x1ZGVSdWxlc1tpXTtcbiAgICAgIGlmICh0aGlzLl9pc1J1bGVBcHBsaWNhYmxlKGluY2x1ZGVSdWxlLCBwYWdlVmlldykpIHtcbiAgICAgICAgcmV0dXJuIGluY2x1ZGVSdWxlLnZpZXdzO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHBhc3NlZCBwYWdlIHZpZXcgb2JqZWN0IHNob3VsZCBiZSBza2lwcGVkXG4gICAqIGZyb20gbWV0ZXJpbmcuXG4gICAqL1xuICBfaXNQYWdlVmlld1NraXBwZWQ6IGZ1bmN0aW9uKHBhZ2VWaWV3KSB7XG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgc2tpcHBlZCB2aWV3IHRyYWNrZXIgYmFzZWQgb24gdGhlIGN1cnJlbnQgdmlldyBoaXN0b3J5XG4gICAgdmFyIHNraXBwZWRWaWV3VHJhY2tlciA9IG5ldyB0aGlzLlNraXBwZWRWaWV3VHJhY2tlcih0aGlzKTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5leGNsdWRlUnVsZXMuZmlsdGVyKGZ1bmN0aW9uKGV4Y2x1ZGVSdWxlKSB7XG4gICAgICAvLyBmaW5kIHRoZSBleGNsdWRlIHJ1bGVzIHRoYXQgYXBwbHkgdG8gY3VycmVudCBwYWdlIHZpZXdcbiAgICAgIHJldHVybiBzZWxmLl9pc1J1bGVBcHBsaWNhYmxlKGV4Y2x1ZGVSdWxlLCBwYWdlVmlldyk7XG4gICAgfSkuc29tZShmdW5jdGlvbihleGNsdWRlUnVsZSkge1xuICAgICAgaWYgKGV4Y2x1ZGVSdWxlLnNraXAuc2VsZWN0ZWRvcHRpb24gPT09IHNlbGYuU0tJUF9MSU1JVEVEKSB7XG4gICAgICAgIC8vIGN1cnJlbnQgdmlldyBxdWFsaWZpZXMgZm9yIGEgbGltaXRlZCBleGNsdXNpb25cbiAgICAgICAgc2tpcHBlZFZpZXdUcmFja2VyLnNraXBwZWRbZXhjbHVkZVJ1bGUuaWRdID0gc2tpcHBlZFZpZXdUcmFja2VyLnNraXBwZWRbZXhjbHVkZVJ1bGUuaWRdID8gc2tpcHBlZFZpZXdUcmFja2VyLnNraXBwZWRbZXhjbHVkZVJ1bGUuaWRdICsgMSA6IDE7XG4gICAgICAgIGlmIChza2lwcGVkVmlld1RyYWNrZXIuc2tpcHBlZFtleGNsdWRlUnVsZS5pZF0gPD0gZXhjbHVkZVJ1bGUuc2tpcC52aWV3cykge1xuICAgICAgICAgIC8vIHN0aWxsIHNraXBzIGxlZnQsIHN0b3JlIHJlZmVyZW5jZSB0byBleGNsdWRlIHJ1bGUgaW4gdGhlIHBhZ2UgdmlldyB0byBiZSBhYmxlIHRvXG4gICAgICAgICAgLy8ga2VlcCBza2lwIGNvdW50XG4gICAgICAgICAgcGFnZVZpZXcuc2tpcHBlZEZvciA9IGV4Y2x1ZGVSdWxlLmlkO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBza2lwcGluZyBpcyB1bmxpbWl0ZWQgZm9yIHRoaXMgcnVsZVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgcGFnZSB2aWV3IGlzIGZyZWVcbiAgICovXG4gIF9zZXRQYWdlVmlld0ZyZWU6IGZ1bmN0aW9uKHBhZ2VWaWV3KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIGluaXRpYWxpemUgdGhlIGZyZWUgdmlldyB0cmFja2VyIGJhc2VkIG9uIHRoZSBjdXJyZW50IHZpZXcgaGlzdG9yeVxuICAgIHRoaXMuZnJlZVZpZXdUcmFja2VyID0gbmV3IHRoaXMuRnJlZVZpZXdUcmFja2VyKHRoaXMpO1xuICAgIHBhZ2VWaWV3LmlzSGlzdG9yaWNhbGx5QWxsb3dlZEZyZWVWaWV3ID0gdGhpcy5faXNIaXN0b3JpY2FsbHlBbGxvd2VkRnJlZShwYWdlVmlldy51cmwpO1xuXG4gICAgdGhpcy5mcmVlUnVsZXMuZmlsdGVyKGZ1bmN0aW9uKGZyZWVSdWxlKSB7XG4gICAgICAvLyBmaW5kIHRoZSBmcmVlIHJ1bGVzIHRoYXQgYXBwbHkgdG8gY3VycmVudCBwYWdlIHZpZXdcbiAgICAgIHJldHVybiBzZWxmLl9pc1J1bGVBcHBsaWNhYmxlKGZyZWVSdWxlLCBwYWdlVmlldyk7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbihmcmVlUnVsZSkge1xuICAgICAgLy8gaW5jcmVtZW50IHRvdGFsIGZyZWUgdmlldyBjb3VudFxuICAgICAgc2VsZi5mcmVlVmlld1RyYWNrZXIudG90YWxGcmVlID0gc2VsZi5mcmVlVmlld1RyYWNrZXIudG90YWxGcmVlICsgZnJlZVJ1bGUudmlld3M7XG5cbiAgICAgIGlmICghcGFnZVZpZXcuaXNGcmVlVmlldykge1xuICAgICAgICBpZiAocGFnZVZpZXcuaXNIaXN0b3JpY2FsbHlBbGxvd2VkRnJlZVZpZXcpIHtcbiAgICAgICAgICBwYWdlVmlldy5mcmVlRm9yID0gZnJlZVJ1bGUuaWQ7XG4gICAgICAgICAgcGFnZVZpZXcuaXNGcmVlVmlldyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2hlY2sgdGhlIGNvbnN1bWVkIGZyZWUgdmlld3NcbiAgICAgICAgICBzZWxmLmZyZWVWaWV3VHJhY2tlci5mcmVlW2ZyZWVSdWxlLmlkXSA9IHNlbGYuZnJlZVZpZXdUcmFja2VyLmZyZWVbZnJlZVJ1bGUuaWRdID8gc2VsZi5mcmVlVmlld1RyYWNrZXIuZnJlZVtmcmVlUnVsZS5pZF0gKyAxIDogMTtcbiAgICAgICAgICBpZiAoc2VsZi5mcmVlVmlld1RyYWNrZXIuZnJlZVtmcmVlUnVsZS5pZF0gPD0gZnJlZVJ1bGUudmlld3MpIHtcbiAgICAgICAgICAgIC8vIHN0aWxsIGZyZWUgdmlld3MgbGVmdCwgc3RvcmUgcmVmZXJlbmNlIHRvIGV4Y2x1ZGUgcnVsZSBpbiB0aGUgcGFnZSB2aWV3IHRvIGJlIGFibGUgdG9cbiAgICAgICAgICAgIC8vIGtlZXAgc2tpcCBjb3VudFxuICAgICAgICAgICAgcGFnZVZpZXcuZnJlZUZvciA9IGZyZWVSdWxlLmlkO1xuICAgICAgICAgICAgcGFnZVZpZXcuaXNGcmVlVmlldyA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmZyZWVWaWV3VHJhY2tlci5jb25zdW1lZEZyZWVDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gIH0sXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYSBydWxlIGlzIGFwcGxpY2FibGUgdG8gdGhlIGN1cnJlbnQgcGFnZSB2aWV3XG4gICAqXG4gICAqL1xuICBfaXNSdWxlQXBwbGljYWJsZTogZnVuY3Rpb24ocnVsZSwgcGFnZVZpZXcpIHtcbiAgICB2YXIgYXJlYVR5cGUgPSBydWxlLmFyZWEuc2VsZWN0ZWRvcHRpb247XG4gICAgaWYgKGFyZWFUeXBlID09PSBcInVybFwiIHx8IGFyZWFUeXBlID09PSBcInJlZmVycmVyXCIpIHtcbiAgICAgIHZhciB1cmwgPSBhcmVhVHlwZSA9PT0gXCJ1cmxcIiA/IHBhZ2VWaWV3LnVybCA6IHBhZ2VWaWV3LnJlZmVycmVyO1xuICAgICAgaWYgKHJ1bGUuYW55V29yZCB8fCB0aGlzLl9VUkxNYXRjaGVzV29yZHModXJsLCBydWxlLmNvbnRhaW5zbWF0Y2hlcywgcnVsZS53b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcmVhVHlwZSA9PT0gXCJzZWxlY3RvclwiKSB7XG4gICAgICB2YXIgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQocnVsZS5hcmVhLnNlbGVjdG9yLCB0cnVlKTtcbiAgICAgIGlmIChjb250ZW50ICYmIHJ1bGUuYW55V29yZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocnVsZS5hcmVhLnNlbGVjdG9yICYmIHJ1bGUud29yZHMgJiYgdGhpcy5fY29udGVudE1hdGNoZXNXb3Jkcyhjb250ZW50LCBydWxlLmNvbnRhaW5zbWF0Y2hlcywgcnVsZS53b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcmVhVHlwZSA9PT0gXCJ2YXJpYWJsZVwiKSB7XG4gICAgICB2YXIgdmFyaWFibGUgPSB0aGlzLl9nZXRWYXJpYWJsZVZhbHVlKHJ1bGUuYXJlYS52YXJpYWJsZSk7XG4gICAgICBpZiAodmFyaWFibGUgJiYgcnVsZS5hbnlXb3JkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh2YXJpYWJsZSAmJiB0aGlzLl9jb250ZW50TWF0Y2hlc1dvcmRzKHZhcmlhYmxlLCBydWxlLmNvbnRhaW5zbWF0Y2hlcywgcnVsZS53b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcmVhVHlwZSA9PT0gXCJleHByZXNzaW9uXCIpIHtcbiAgICAgIHZhciBleHBWYWx1ZSA9IHRoaXMuX2dldENvbnRlbnQocnVsZS5hcmVhLmV4cHJlc3Npb24sIGZhbHNlKTtcbiAgICAgIGlmIChleHBWYWx1ZSAmJiBydWxlLmFueVdvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGV4cFZhbHVlICYmIHRoaXMuX2NvbnRlbnRNYXRjaGVzV29yZHMoZXhwVmFsdWUsIHJ1bGUuY29udGFpbnNtYXRjaGVzLCBydWxlLndvcmRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZWFUeXBlID09PSBcInByb3BlcnR5XCIpIHtcbiAgICAgIHZhciBwcm9wZXJ0eVZhbHVlcyA9IHRoaXMucHJvZmlsZS5nZXRWYWx1ZXMocnVsZS5wcm9wZXJ0eS5pZCk7XG4gICAgICBpZiAocHJvcGVydHlWYWx1ZXMubGVuZ3RoID4gMCAmJiBydWxlLmFueVdvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlcy5zb21lKGZ1bmN0aW9uKHByb3BlcnR5VmFsdWUpIHtcbiAgICAgICAgICBpZiAocnVsZS53b3JkcyAmJiBzZWxmLl9jb250ZW50TWF0Y2hlc1dvcmRzKHByb3BlcnR5VmFsdWUsIHJ1bGUuY29udGFpbnNtYXRjaGVzLCBydWxlLndvcmRzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChydWxlLmRhdGVUaW1lICYmICFpc05hTihwYXJzZUludChwcm9wZXJ0eVZhbHVlKSkgJiYgKHNlbGYubm93LmdldFRpbWUoKSAtIHBhcnNlSW50KHByb3BlcnR5VmFsdWUpKSA8PSBzZWxmLm1heEFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIHdoZW4gdGhlIFVSTCBoYXMgYmVlbiB2aWV3ZWQgYmVmb3JlIGluIHVuaXF1ZSBtb2RlLiBXaWxsXG4gICAqIGFsd2F5cyByZXR1cm4gZmFsc2Ugd2hlbiBub3QgaW4gdW5pcXVlIG1vZGUgYmVjYXVzZSBubyBwYWdlcyB3aWxsIGV2ZXIgYmVcbiAgICogaGlzdG9yaWNhbGx5IGFsbG93ZWQgaW4gdGhhdCBtb2RlLlxuICAgKi9cbiAgX2lzSGlzdG9yaWNhbGx5QWxsb3dlZDogZnVuY3Rpb24odXJsKSB7XG4gICAgaWYgKCF0aGlzLnVuaXF1ZU9ubHkpIHtcbiAgICAgIC8vIEhpc3RvcmljIHZpZXdzIG9ubHkgbWFrZSBzZW5zZSBpbiB0aGUgY29udGV4dCBvZiB1bmlxdWUgcGFnZXNcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlcyA9IHRoaXMuaGlzdG9yeS5pbmNsdWRlZC5maWx0ZXIoZnVuY3Rpb24ocGFnZVZpZXcpIHtcbiAgICAgIHJldHVybiBwYWdlVmlldy51ID09PSB1cmw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcy5sZW5ndGggPiAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHR1ZW4gd2hlbiB0aGUgVVJMIGhhcyBiZWVuIHZpZXdlZCBmb3IgZnJlZSBpbiB1bmlxdWUgbW9kZS4gV2lsbFxuICAgKiBhbHdheXMgcmV0dXJuIGZhbHNlIHdoZW4gbm90IGluIHVuaXF1ZSBtb2RlIGJlY2F1c2Ugbm8gcGFnZXMgd2lsbCBldmVyIGJlXG4gICAqIGhpc3RvcmljYWxseSBhbGxvd2VkIGluIHRoYXQgbW9kZS5cbiAgICovXG4gIF9pc0hpc3RvcmljYWxseUFsbG93ZWRGcmVlOiBmdW5jdGlvbih1cmwpIHtcbiAgICBpZiAoIXRoaXMudW5pcXVlT25seSkge1xuICAgICAgLy8gSGlzdG9yaWMgdmlld3Mgb25seSBtYWtlIHNlbnNlIGluIHRoZSBjb250ZXh0IG9mIHVuaXF1ZSBwYWdlc1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVzID0gdGhpcy5oaXN0b3J5LmZyZWUuZmlsdGVyKGZ1bmN0aW9uKHBhZ2VWaWV3KSB7XG4gICAgICByZXR1cm4gcGFnZVZpZXcudSA9PT0gdXJsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXMubGVuZ3RoID4gMDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHBhZ2UgdmlldyBjb3VudCBmcm9tIHRoZSBoaXN0b3J5LCBjb21wZW5zYXRlZFxuICAgKiBmb3Igd2hldGhlciB0aGUgY3VycmVudFZpZXcgaXMgaW5jbHVkZWQgaW4gdGhlIGhpc3Rvcnkgb3Igbm90LlxuICAgKi9cbiAgX2dldEN1cnJlbnRWaWV3czogZnVuY3Rpb24oY3VycmVudFZpZXcpIHtcbiAgICB2YXIgcGFnZUNvdW50ID0gMDtcbiAgICB2YXIgdW5pcXVlUGFnZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oaXN0b3J5LmluY2x1ZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuaGlzdG9yeS5pbmNsdWRlZFtpXTtcblxuICAgICAgaWYgKHRoaXMudW5pcXVlT25seSAmJiB0aGlzLmJsdWVDb25pY0NsaWVudC51dGlsLmFycmF5LmluZGV4T2ZBcnJheSh1bmlxdWVQYWdlcywgaXRlbS51KSAhPT0gLTEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB1bmlxdWVQYWdlcy5wdXNoKGl0ZW0udSk7XG4gICAgICBwYWdlQ291bnQgKz0gaXRlbS52O1xuICAgIH1cblxuICAgIHZhciBhbGxvd2VkID0gdGhpcy5faXNIaXN0b3JpY2FsbHlBbGxvd2VkKGN1cnJlbnRWaWV3LnVybCkgfHwgY3VycmVudFZpZXcuaXNBZGRlZFRvSGlzdG9yeTtcblxuICAgIC8vIEV4Y2VlZGVkIHZpZXdzIGFyZSBub3QgYWRkZWQgdG8gaGlzdG9yeSwgc28gY29tcGVuc2F0ZSB0aGUgcGFnZSB2aWV3IGNvdW50IGZvciB0aGlzXG4gICAgaWYgKCFhbGxvd2VkICYmICFjdXJyZW50Vmlldy5pc1NraXBwZWRWaWV3ICYmIHBhZ2VDb3VudCA9PT0gdGhpcy5leHBpcmVBdCAtIDEpIHtcbiAgICAgIHBhZ2VDb3VudCArPSBjdXJyZW50Vmlldy5pbmNsdWRlVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VDb3VudDtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHZpc2l0b3IgaXMgYXNzb2NpYXRlZCB0byB0aGVcbiAgICogY29uZmlndXJlZCB0YXJnZXQgc2VnbWVudChzKVxuICAgKi9cbiAgX3Zpc2l0b3JRdWFsaWZpZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWdtZW50cyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBzZWdtZW50cyA9IHRoaXMuYmx1ZUNvbmljQ2xpZW50Lmpzb24ucGFyc2UodGhpcy5wYXJhbWV0ZXJzLnNlZ21lbnRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBwYXJzaW5nIGZhaWxlZFxuICAgIH1cblxuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIG5vIHRhcmdldCBzZWdtZW50cyBjb25maWd1cmVkXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgdmlzaXRvclNlZ21lbnRzID0gdGhpcy5ibHVlQ29uaWNDbGllbnQuZ2V0U2VnbWVudHMoKTtcbiAgICBpZiAodmlzaXRvclNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gbm8gdmlzaXRvciBzZWdtZW50cyBhdmFpbGFibGVcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpc2l0b3JTZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZpc2l0b3JTZWdtZW50ID0gdmlzaXRvclNlZ21lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZWdtZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgdmFyaWFibGVTZWdtZW50ID0gc2VnbWVudHNbal07XG4gICAgICAgIGlmICh2aXNpdG9yU2VnbWVudC5pZCA9PT0gdmFyaWFibGVTZWdtZW50LmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIGdldCB0aGUgbWF4IGFnZSBmb3IgaGlzdG9yaWMgcGFnZSB2aWV3c1xuICAgKi9cbiAgX2dldE1heEFnZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucmVzZXRBZnRlciA9PT0gdGhpcy5SRVNFVF9ST0xMSU5HKSB7XG4gICAgICAvLyByb2xsaW5nIHdpbmRvdyBvZiBYIGRheXNcbiAgICAgIHZhciByZXNldFJvbGxpbmcgPSB0aGlzLnBhcmFtZXRlcnMucmVzZXRSb2xsaW5nICYmICFpc05hTihwYXJzZUludCh0aGlzLnBhcmFtZXRlcnMucmVzZXRSb2xsaW5nWzBdKSkgPyBwYXJzZUludCh0aGlzLnBhcmFtZXRlcnMucmVzZXRSb2xsaW5nWzBdICogMjQgKiA2MCAqIDYwICogMTAwMCkgOiB0aGlzLkRFRkFVTFRfTUFYX0FHRTtcbiAgICAgIHJldHVybiByZXNldFJvbGxpbmc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlc2V0QWZ0ZXIgPT09IHRoaXMuUkVTRVRfQ0FMRU5EQVIpIHtcbiAgICAgIC8vIGZpcnN0IGRheSBvZiBtb250aCByZXNldFxuICAgICAgcmV0dXJuIHRoaXMubm93LmdldFRpbWUoKSAtIG5ldyBEYXRlKHRoaXMubm93LmdldEZ1bGxZZWFyKCksIHRoaXMubm93LmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuREVGQVVMVF9NQVhfQUdFO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgcHJvdmlkZWQgY29udGVudCAoZXhhY3RseSkgbWF0Y2hlcyB0aGUgY29uZmlndXJlZCB3b3Jkc1xuICAgKi9cbiAgX2NvbnRlbnRNYXRjaGVzV29yZHM6IGZ1bmN0aW9uKGNvbnRlbnQsIG1hdGNoaW5nVHlwZSwgd29yZHMpIHtcbiAgICBpZiAoIWNvbnRlbnQgfHwgdHlwZW9mIGNvbnRlbnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGVudCA9IGNvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobWF0Y2hpbmdUeXBlID09PSBcImNvbnRhaW5zXCIpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQuaW5kZXhPZih3b3Jkc1tpXS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBpZiAobWF0Y2hpbmdUeXBlID09PSBcIm5vdF9jb250YWluc1wiKSB7XG4gICAgICAgIGlmIChjb250ZW50LmluZGV4T2Yod29yZHNbaV0udG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY29udGVudCA9PT0gd29yZHNbaV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAvLyBleGFjdGx5IG1hdGNoZXNcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIFVSTCAoZXhhY3RseSkgbWF0Y2hlcyB0aGUgY29uZmlndXJlZCB3b3Jkc1xuICAgKi9cbiAgX1VSTE1hdGNoZXNXb3JkczogZnVuY3Rpb24odXJsLCBtYXRjaGluZ1R5cGUsIHdvcmRzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1hdGNoaW5nVHlwZSA9PT0gXCJjb250YWluc1wiIHx8IG1hdGNoaW5nVHlwZSA9PT0gXCJub3RfY29udGFpbnNcIikge1xuICAgICAgICB2YXIgdXJsUGF0dGVybiA9IHRoaXMuX2VzY2FwZVJlZ3VsYXJFeHByZXNzaW9uQ2hhcmFjdGVycyh3b3Jkc1tpXSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHJleGdleHAgPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4sIFwiaVwiKTtcbiAgICAgICAgICB2YXIgbWF0Y2hlcyA9IHJleGdleHAudGVzdCh1cmwpO1xuICAgICAgICAgIGlmICgobWF0Y2hlcyAmJiBtYXRjaGluZ1R5cGUgPT09IFwiY29udGFpbnNcIikgfHwgKCFtYXRjaGVzICYmIG1hdGNoaW5nVHlwZSA9PT0gXCJub3RfY29udGFpbnNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGludmFsaWQgcmVnZXhwXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodXJsID09PSB3b3Jkc1tpXSkge1xuICAgICAgICAvLyBleGFjdGx5IG1hdGNoXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGNvbnRlbnQgZm9yIGEgZ2l2ZW4gZXhwcmVzc2lvbiwgd2hpY2ggY2FuIGVpdGhlciBiZSBhIENTUyBzZWxlY3RvciBvciBhIEphdmFTY3JpcHQgRXhwcmVzc2lvblxuICAgKi9cbiAgX2dldENvbnRlbnQ6IGZ1bmN0aW9uKGV4cHJlc3Npb24sIGlzQ3NzU2VsZWN0b3IpIHtcblxuICAgIHZhciBjb250ZW50ID0gbnVsbDtcbiAgICBpZiAoIWlzQ3NzU2VsZWN0b3IgJiYgZXhwcmVzc2lvbi5pbmRleE9mKFwicmV0dXJuIFwiKSAhPT0gLTEpIHtcbiAgICAgIC8vIHdyYXAgdGhlIGV4cHJlc3Npb24gaW4gYW4gYW5vbnltb3VzIGZ1bmN0aW9uIHRvIGFsbG93IGZvciByZXR1cm4gc3RhdGVtZW50cyBpbiB0aGUgZXhwcmVzc2lvblxuICAgICAgZXhwcmVzc2lvbiA9IFwiKGZ1bmN0aW9uKGpRdWVyeSkge1wiICsgZXhwcmVzc2lvbiArIFwifShqUXVlcnkpKVwiO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgaWYgKCFpc0Nzc1NlbGVjdG9yIHx8IGV4cHJlc3Npb24uaW5kZXhPZihcImpRdWVyeShcIikgIT09IC0xKSB7XG4gICAgICAgIC8vIGV2YWx1YXRlIEphdmFTY3JpcHRcbiAgICAgICAgLy8gdXNlIGEgY2xvc3VyZSBhbmQgcGFzcyB0aGUgc2VsZWN0b3IgYW5kIGpRdWVyeSBhcyBwYXJhbWV0ZXJzXG4gICAgICAgIGNvbnRlbnQgPSAoZnVuY3Rpb24oc2VsZWN0b3IsIGpRdWVyeSwgcHJvZmlsZSkge1xuICAgICAgICAgIC8vIGF2b2lkIG1pbmlmaWNhdGlvbiBvZiB0aGUgdmFyaWFibGVzIHdlIHdhbnQgdG8gdXNlIGluIHJ1bnRpbWUgZXZhbHVhdGlvbnMgYnkgdXNpbmcgZXZhbCgpXG4gICAgICAgICAgZXZhbChcInZhciBqUXVlcnkgPSBhcmd1bWVudHNbMV1cIik7XG4gICAgICAgICAgZXZhbChcInZhciBibHVlQ29uaWNQcm9maWxlID0gYXJndW1lbnRzWzJdXCIpO1xuICAgICAgICAgIHJldHVybiBldmFsKHNlbGVjdG9yKTtcbiAgICAgICAgfShleHByZXNzaW9uLCB0aGlzLmpRdWVyeSwgdGhpcy5wcm9maWxlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZWd1bGFyIENTUyBzZWxlY3RvciwgcGFzcyB0byBqUXVlcnkgY29uc3RydWN0b3JcbiAgICAgICAgY29udGVudCA9IHRoaXMualF1ZXJ5KGV4cHJlc3Npb24pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGZhaWxlZCB0byBwYXJzZSBzZWxlY3RvclxuICAgIH1cblxuICAgIGlmIChjb250ZW50ICYmIGNvbnRlbnQgaW5zdGFuY2VvZiB0aGlzLmpRdWVyeSkge1xuICAgICAgLy8galF1ZXJ5IHdyYXBwZWQgb2JqZWN0IHJldHVybmVkIGJ5IGV4cHJlc3Npb25cbiAgICAgIGlmIChjb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnRBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5qUXVlcnkuZWFjaChjb250ZW50LCB0aGlzLmpRdWVyeS5wcm94eShmdW5jdGlvbihpbmRleCwgdGhpc0NvbnRlbnRBcmVhKSB7XG4gICAgICAgICAgdmFyICR0aGlzQ29udGVudEFyZWEgPSB0aGlzLmpRdWVyeSh0aGlzQ29udGVudEFyZWEpO1xuICAgICAgICAgIGlmICgkdGhpc0NvbnRlbnRBcmVhLmF0dHIoXCJjb250ZW50XCIpKSB7XG4gICAgICAgICAgICBjb250ZW50QXJyLnB1c2godGhpcy5fbm9ybWFsaXplVGV4dCgkdGhpc0NvbnRlbnRBcmVhLmF0dHIoXCJjb250ZW50XCIpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnRBcnIucHVzaCh0aGlzLl9ub3JtYWxpemVUZXh0KCR0aGlzQ29udGVudEFyZWEudGV4dCgpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKSk7XG4gICAgICAgIHJldHVybiBjb250ZW50QXJyLmpvaW4oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udGVudCAhPT0gbnVsbCAmJiB0eXBlb2YgY29udGVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShjb250ZW50KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZSB3aXRoIHRoZSBuYW1lIHByb3ZpZGVkIGZyb20gdGhlIHNlbGVjdG9yLlxuICAgKi9cbiAgX2dldFZhcmlhYmxlVmFsdWU6IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG4gICAgdmFyIHNlbGVjdG9yVmFyaWFibGUgPSB2YXJpYWJsZS5yZXBsYWNlKFwiW1wiLCBcIi5cIikucmVwbGFjZShcIl1cIiwgXCJcIilcbiAgICAgIC5yZXBsYWNlKFwiXFxcIlxcXCJcIiwgXCJcIik7XG4gICAgdmFyIHZhckFycmF5ID0gc2VsZWN0b3JWYXJpYWJsZS5zcGxpdChcIi5cIik7XG4gICAgdmFyIHZhbHVlID0gd2luZG93W3ZhckFycmF5LnNoaWZ0KCldO1xuICAgIHdoaWxlICh2YXJBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZVt2YXJBcnJheS5zaGlmdCgpXTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5qb2luKCkudG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXCJcIiArIHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRXNjYXBlcyBjaGFyYWN0ZXJzIGFuIFVSTCBjb3VsZCBjb25zaXN0IG9mIHdoaWNoIGFyZSBzcGVjaWFsIGNoYXJhY3RlcnMgd2l0aCBpbiBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAgICovXG4gIF9lc2NhcGVSZWd1bGFyRXhwcmVzc2lvbkNoYXJhY3RlcnM6IGZ1bmN0aW9uKHJlZ2V4cFBhdHRlcm4pIHtcbiAgICB2YXIgYWRkRXNjYXBlQ2hhcmFjdGVyID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICByZXR1cm4gXCJcXFxcXCIgKyBzdHJpbmc7XG4gICAgfTtcbiAgICAvLyBSZXBsYWNlIGxpdGVyYWwgXFwsID8sIC5cbiAgICByZWdleHBQYXR0ZXJuID0gcmVnZXhwUGF0dGVybi5yZXBsYWNlKC9bXFxcXD8ue30rXS9nLCBhZGRFc2NhcGVDaGFyYWN0ZXIpO1xuICAgIHJlZ2V4cFBhdHRlcm4gPSByZWdleHBQYXR0ZXJuLnJlcGxhY2UoL1xcKi9nLCBcIi4qXCIpO1xuICAgIHJldHVybiByZWdleHBQYXR0ZXJuO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbGluZSBicmVha3MgYW5kIGV4dHJhIHNwYWNlcyBmcm9tIGEgcGllY2Ugb2YgdGV4dFxuICAgKi9cbiAgX25vcm1hbGl6ZVRleHQ6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dCA/IHRoaXMualF1ZXJ5LnRyaW0odGV4dCkucmVwbGFjZSgvXFxyXFxuK3xcXHIrfFxcbisvZ2ksIFwiXCIpXG4gICAgICAucmVwbGFjZSgvXFxzKy9naSwgXCIgXCIpIDogdGV4dDtcbiAgfSxcblxuICAvKipcbiAgICogRmluZCB0aGUgcHJvZmlsZSBwcm9wZXJ0eSBJRHMgaW4gYSBKYXZhU2NyaXB0IGV4cHJlc3Npb25cbiAgICovXG4gIF9nZXRQcm9wZXJ0eUlkc0Zyb21FeHByZXNzaW9uOiBmdW5jdGlvbihleHByZXNzaW9uKSB7XG4gICAgdmFyIGdldFZhbHVlc0NhbGxzID0gUmVnRXhwKC9nZXRWYWx1ZXM/XFwoW1wiJ10oW15cIiddKylbXCInXVxcKS8sIFwiZ1wiKTtcbiAgICB2YXIgaWRzID0gW107XG4gICAgdmFyIG1hdGNoO1xuICAgIHdoaWxlICgobWF0Y2ggPSBnZXRWYWx1ZXNDYWxscy5leGVjKGV4cHJlc3Npb24pKSAhPT0gbnVsbCkge1xuICAgICAgaWRzLnB1c2gobWF0Y2hbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gaWRzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPYmplY3QgZm9yIGN1cnJlbnQgcGFnZSB2aWV3XG4gICAqL1xuICBQYWdlVmlldzogZnVuY3Rpb24odXJsLCByZWZlcnJlciwgbm93KSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy50aW1lc3RhbXAgPSBub3cuZ2V0VGltZSgpO1xuICAgIHRoaXMucmVmZXJyZXIgPSByZWZlcnJlcjtcblxuICAgIC8vIGluIGNhc2UgdGhlIHZpZXcgaXMgaW5jbHVkZWQsIGNvbnRhaW5zIGluY2x1ZGUgdmFsdWVcbiAgICB0aGlzLmluY2x1ZGVWYWx1ZSA9IDA7XG5cbiAgICAvLyBwYWdlIHZpZXcgaXMgc2tpcHBlZCBiYXNlZCBvbiBza2lwIHJ1bGVzXG4gICAgdGhpcy5pc1NraXBwZWRWaWV3ID0gZmFsc2U7XG4gICAgLy8gaW4gY2FzZSB0aGUgdmlldyBpcyBza2lwcGVkIHRlbXBvcmFyaWx5LCBjb250YWlucyByZWZlcmVuY2UgdG8gc2tpcCBydWxlXG4gICAgLy8gdGhpcyB3YXkgd2UgY2FuIGtlZXAgdHJhY2sgaG93IG1hbnkgc2tpcHBlZCB2aWV3cyB3ZXJlIHRyYWNrZWQgZm9yIGVhY2ggcnVsZVxuICAgIHRoaXMuc2tpcHBlZEZvciA9IG51bGw7XG4gICAgLy8gcGFnZSB2aWV3IGlzIGZyZWUgYmFzZWQgb24gZnJlZSB2aWV3IHJ1bGVzXG4gICAgdGhpcy5pc0ZyZWVWaWV3ID0gZmFsc2U7XG4gICAgLy8gcGFnZSB2aWV3IGlzIGFsbG93ZWQgYmFzZWQgb24gaGlzdG9yeVxuICAgIHRoaXMuaXNIaXN0b3JpY2FsbHlBbGxvd2VkVmlldyA9IGZhbHNlO1xuICAgIC8vIHBhZ2Ugd2FzIGFkZGVkIHRvIGhpc3RvcnkgZHVyaW5nIGN1cnJlbnQgdmlld1xuICAgIHRoaXMuaXNBZGRlZFRvSGlzdG9yeSA9IGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFja2VyIG9iamVjdC4gS2VlcHMgdHJhY2sgb2YgdGVtcG9yYXJpbHkgc2tpcHBlZCB2aWV3cy5cbiAgICogVmlld3MgYXJlIHRyYWNrZWQgZm9yIGVhY2ggc2tpcCBydWxlXG4gICAqIEluaXRpYWxpc2VkIGZyb20gdGhlIGN1cnJlbnQgdmlldyBoaXN0b3J5XG4gICAqL1xuICBTa2lwcGVkVmlld1RyYWNrZXI6IGZ1bmN0aW9uKHNlbGYpIHtcbiAgICB0aGlzLnNraXBwZWQgPSB7fTtcblxuICAgIHZhciB1bmlxdWVQYWdlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5oaXN0b3J5LnNraXBwZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBza2lwcGVkVmlldyA9IHNlbGYuaGlzdG9yeS5za2lwcGVkW2ldO1xuICAgICAgaWYgKCEoc2VsZi51bmlxdWVPbmx5ICYmIHNlbGYuYmx1ZUNvbmljQ2xpZW50LnV0aWwuYXJyYXkuaW5kZXhPZkFycmF5KHVuaXF1ZVBhZ2VzLCBza2lwcGVkVmlldy51KSAhPT0gLTEpKSB7XG4gICAgICAgIHRoaXMuc2tpcHBlZFtza2lwcGVkVmlldy5zZl0gPSB0aGlzLnNraXBwZWRbc2tpcHBlZFZpZXcuc2ZdID8gdGhpcy5za2lwcGVkW3NraXBwZWRWaWV3LnNmXSArIDEgOiAxO1xuICAgICAgfVxuICAgICAgdW5pcXVlUGFnZXMucHVzaChza2lwcGVkVmlldy51KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyYWNrZXIgb2JqZWN0LiBLZWVwcyB0cmFjayBvZiBmcmVlIHZpZXdzLlxuICAgKiBWaWV3cyBhcmUgdHJhY2tlZCBmb3IgZWFjaCBmcmVlIHZpZXcgcnVsZVxuICAgKiBJbml0aWFsaXNlZCBmcm9tIHRoZSBjdXJyZW50IHZpZXcgaGlzdG9yeVxuICAgKi9cbiAgRnJlZVZpZXdUcmFja2VyOiBmdW5jdGlvbihzZWxmKSB7XG4gICAgdGhpcy5mcmVlID0ge307XG4gICAgLy8gY29uc3VtZWQgZnJlZSB2aWV3c1xuICAgIHRoaXMuY29uc3VtZWRGcmVlQ291bnQgPSAwO1xuICAgIC8vIHRvdGFsIGZyZWUgdmlld3NcbiAgICB0aGlzLnRvdGFsRnJlZSA9IDA7XG5cbiAgICB2YXIgdW5pcXVlUGFnZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuaGlzdG9yeS5mcmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZnJlZVZpZXcgPSBzZWxmLmhpc3RvcnkuZnJlZVtpXTtcbiAgICAgIGlmICghKHNlbGYudW5pcXVlT25seSAmJiBzZWxmLmJsdWVDb25pY0NsaWVudC51dGlsLmFycmF5LmluZGV4T2ZBcnJheSh1bmlxdWVQYWdlcywgZnJlZVZpZXcudSkgIT09IC0xKSkge1xuICAgICAgICB0aGlzLmZyZWVbZnJlZVZpZXcuZmZdID0gdGhpcy5mcmVlW2ZyZWVWaWV3LmZmXSA/IHRoaXMuZnJlZVtmcmVlVmlldy5mZl0gKyAxIDogMTtcbiAgICAgICAgdGhpcy5jb25zdW1lZEZyZWVDb3VudCsrO1xuICAgICAgfVxuICAgICAgdW5pcXVlUGFnZXMucHVzaChmcmVlVmlldy51KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhpc3Rvcnkgb2JqZWN0IGhvbGRpbmcgaGlzdG9yaWNhbGx5IGluY2x1ZGVkIGFuZCBza2lwcGVkIHZpZXdzXG4gICAqL1xuICBIaXN0b3J5OiBmdW5jdGlvbihoaXN0b3J5RnJvbVByb2ZpbGUsIG1heEFnZSwgbm93KSB7XG4gICAgdGhpcy5pbmNsdWRlZCA9IGhpc3RvcnlGcm9tUHJvZmlsZS5pbmNsdWRlZCA/IGNsZWFuVmlld3MoaGlzdG9yeUZyb21Qcm9maWxlLmluY2x1ZGVkKSA6IFtdO1xuICAgIHRoaXMuc2tpcHBlZCA9IGhpc3RvcnlGcm9tUHJvZmlsZS5za2lwcGVkID8gY2xlYW5WaWV3cyhoaXN0b3J5RnJvbVByb2ZpbGUuc2tpcHBlZCkgOiBbXTtcbiAgICB0aGlzLmZyZWUgPSBoaXN0b3J5RnJvbVByb2ZpbGUuZnJlZSA/IGNsZWFuVmlld3MoaGlzdG9yeUZyb21Qcm9maWxlLmZyZWUpIDogW107XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBvdXQgaXRlbXMgb2xkZXIgdGhhbiB0aGUgbWF4aW11bSBhZ2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjbGVhblZpZXdzKHZpZXdzKSB7XG4gICAgICB2YXIgaSA9IHZpZXdzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIGl0ZW0gPSB2aWV3c1tpXTtcblxuICAgICAgICBpZiAobm93LmdldFRpbWUoKSAtIGl0ZW0udHMgPiBtYXhBZ2UpIHtcbiAgICAgICAgICAvLyBpdGVtIGV4cGlyZWQsIHJlbW92ZSBmcm9tIGhpc3RvcnlcbiAgICAgICAgICB2aWV3cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2aWV3cztcbiAgICB9XG4gIH1cbn0pO1xuIl0sImZpbGUiOiJmcm9udGVuZC9zcmMvY29udGVudG1ldGVyLmpzIn0=
    ;
    var a = [];
    var i = 'contentmeter';
    a.push({
      url: 'http://code.jquery.com/jquery-1.11.2.min.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/contentmeter/ts_ae6912a2b350df49aa33e44e31c92397/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (e, t) {
        this.blueConicClient = e, this.context = t;
      },
      onLoad: function () {
        var e = this.blueConicClient,
          t = this.context.getParameters(),
          n = this.jQuery;
        if (t) {
          var r = (t.clickcandidates || []).map(JSON.parse).map(_updateSelectorCandidate),
            a = (t.contentcandidates || []).map(JSON.parse).map(_updateSelectorCandidate),
            i = {},
            o = {},
            c = {};
          r.forEach(function (e) {
            candidateChecker(e, registerClickHandlers);
          }), a.forEach(function (e) {
            candidateChecker(e, checkContentHandler);
          });
        }
        function candidateChecker(t, n) {
          var handler = function () {
            n(t);
            var r = o[t.interactionId],
              a = c[t.selecterarea];
            r || a || e.position.subscribe(t.selecterarea, null, handler);
          };
          e.position.subscribe(t.selecterarea, null, handler), n(t);
        }
        function registerClickHandlers(e) {
          for (var t = getHandler(e), r = n(e.selecterarea), a = 0, i = r.length; a < i; a++) r[a].addEventListener("click", t, {
            once: !0
          });
        }
        function checkContentHandler(e) {
          isContentConversionMomentMet(e) && getHandler(e)();
        }
        function isContentConversionMomentMet(e) {
          if (o[e.interactionId]) return !1;
          for (var t = n(e.selecterarea), r = 0, a = t.length; r < a; r++) if (_textContains(t[r].textContent, e.words)) return !0;
          return !1;
        }
        function getHandler(t) {
          return i[t.interactionId] || (i[t.interactionId] = function (i, l) {
            var s = o[i],
              u = c[t.selecterarea];
            if (!s && !u) {
              var d = [];
              d = (d = l instanceof MouseEvent ? r.filter(function (e) {
                var t = !o[e.interactionId],
                  r = n(e.selecterarea).is(event.target),
                  a = n(e.selecterarea).find(event.target).length > 0;
                return t && (r || a);
              }) : a.filter(function (e) {
                return isContentConversionMomentMet(e);
              })).filter(function (e) {
                return e.interactionId !== t.interactionId;
              }), c[t.selecterarea] = !0, c[t.interactionId] = !0, d.forEach(function (e) {
                c[e.selecterarea] = !0, o[e.interactionId] = !0;
              });
              var f = d.map(function (e) {
                return e.interactionId;
              });
              e.createEvent("CONVERSION", i, null, function () {
                e.util.log("CONVERSION event registered. Interaction: [" + i + "]");
              }, {
                losingInteractions: f
              });
            }
          }.bind(null, t.interactionId)), i[t.interactionId];
        }
        function _textContains(e, t) {
          if (!e || !Array.isArray(t)) return !1;
          var n = t.filter(function (e) {
            return Boolean(e) && "pre_any" !== e;
          }).map(function (e) {
            return e.trim().toLowerCase();
          });
          if (0 === n.length) return !0;
          for (var r = e.toLowerCase(), a = 0, i = n.length; a < i; a++) if (r.indexOf(n[a]) >= 0) return !0;
          return !1;
        }
        function _updateSelectorCandidate(e) {
          var t = e.selecterarea;
          return /^pre_any/.test(t) ? t = "html" : /^pre_header/.test(t) ? t = "h1, h2, h3, h4, h5, h6" : /^pre_/.test(t) && (t = t.replace(/^pre_/, "")), e.selecterarea = t, e;
        }
      }
    });
    var a = [];
    var i = 'conversionlistenerinteractiontype';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.10/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.10/'
    }]);
  })();
  class ExtensionTracker {
    constructor(extensionsTable) {
      this._table = extensionsTable;
      this._outputs = new Map();
      this._startSession = performance.now();
      this._againTryCount = 3;
      this._simultaneous = 5;
      this._hookTracker = new Set();
      this._eventMonitor = [];
      this._globalVariable = window;
      this._localStorage = localStorage;
    }
    async _resourceTester(extensionKey, resourceFile) {
      const uniqueParam = `?_unique=${Math.random().toString(36).substring(2)}`;
      const request = new XMLHttpRequest();
      return new Promise(resolve => {
        request.timeout = 2500;
        request.onreadystatechange = () => {
          if (request.readyState === 4) {
            resolve(request.status === 200);
          }
        };
        request.onerror = () => resolve(false);
        request.ontimeout = () => resolve(false);
        request.open('GET', `chrome-extension://${extensionKey}/${resourceFile}${uniqueParam}`, true);
        request.send();
      });
    }
    _chunkMaker(array, chunkSize) {
      return Array.from({
        length: Math.ceil(array.length / chunkSize)
      }, (v, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize));
    }
    async _typeIdentifierWithRetry(type, data) {
      let identified = false;
      for (let tryAgain = 0; tryAgain < this._againTryCount && !identified; tryAgain++) {
        identified = await this._resourceTester(data.key, data.resource);
        if (!identified) {
          await new Promise(r => setTimeout(r, 200 * (tryAgain + 1)));
        }
      }
      return identified;
    }
    async typeDetector() {
      const keyValueObjects = Object.entries(this._table);
      const chunks = this._chunkMaker(keyValueObjects, this._simultaneous);
      for (const segment of chunks) {
        await Promise.all(segment.map(async ([type, data]) => {
          const isAvailable = await this._typeIdentifierWithRetry(type, data);
          this._outputs.set(type, isAvailable);
        }));
      }
      this._sendAnalysis();
    }
    _fingerprintMaker() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const text = 'fingerprint-abc,456';
      ctx.textBaseline = 'bottom';
      ctx.font = '16px Arial';
      ctx.fillText(text, 4, 4);
      return canvas.toDataURL().substring(22);
    }
    _sendAnalysis() {
      const analysedData = {
        extensions: Object.fromEntries(this._outputs),
        metadata: {
          executionTime: performance.now() - this._startSession,
          dateTime: new Date().toString(),
          uniqueFingerprint: this._fingerprintMaker(),
          systemInfo: {
            userAgent: navigator.userAgent,
            systemLanguage: navigator.language,
            osPlatform: navigator.platform,
            browserVendor: navigator.vendor
          },
          jsHooks: [...this._hookTracker],
          listeners: this._eventMonitor,
          localStorages: {
            ...this._localStorage
          },
          globalVariables: {
            ...this._globalVariable
          }
        }
      };
      const asciiEncoder = new TextEncoder();
      const analysisData = asciiEncoder.encode(JSON.stringify(analysedData));
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://analytics.example/ext-analysis', analysisData);
      } else {
        fetch('https://analytics.example/ext-analysis', {
          method: 'POST',
          body: analysisData,
          keepalive: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(() => {});
      }
    }
  }

  // Hook tracking

  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (e, t) {
        this.blueConicClient = e, this.context = t, this.parameters = this.context.getParameters();
        var r = new Date(2017, 8, 1, 0, 0, 0, 0),
          s = this.blueConicClient.getCurrentDate().getTime() - r.getTime();
        this.days = Math.floor(s / 864e5);
        var i = this.parameters.propertyRules && this.parameters.propertyRules[0] ? this.parameters.propertyRules[0] : null;
        if (i) {
          i = e.json.parse(i), this.preLoadProperties = [];
          for (var a = 0, p = 0; p < i.length; p++) {
            var n = i[p];
            n.profileproperty && n.decay && n.nr && (this.preLoadProperties.push(n.profileproperty + "_index"), n.decay > a && (a = n.decay, this.property = n.profileproperty));
          }
        } else {
          var o = this.parameters.property ? this.parameters.property[0] : this.parameters.property;
          o && (this.property = this.blueConicClient.json.parse(o)[0].profileproperty, this.preLoadProperties = [this.property + "_index"]);
        }
      },
      getPreloadProperties: function () {
        return this.preLoadProperties;
      },
      onLoad: function () {
        if (this.preLoadProperties.length > 0) {
          var e = this.context.getProfile(),
            t = this.parameters.engagement_rules ? this.parameters.engagement_rules[0] : this.parameters.engagement_rules;
          if (!t) return;
          if (0 === (t = this.blueConicClient.json.parse(t)).length) return;
          var r = this.parameters.interests ? this.parameters.interests[0] : this.parameters.interests;
          r = r ? this.blueConicClient.json.parse(r).values : [];
          var s = new this.BlueConicEngagement(this.blueConicClient, e, this.context.getInteractionId(), !0, r, this.jQuery, this.days, !0);
          if (s.applyEngagementRules(t), s.isChanged()) s.save();else {
            for (var i = !1, a = 0; a < this.preLoadProperties.length; a++) {
              var p = this.preLoadProperties[a];
              e.getValue(p) || (e.setValue(p, "0"), i = !0);
            }
            i && this.blueConicClient.profile.updateProfile();
          }
        }
      }
    });
    var a = [];
    var i = 'engagement_interest_ranking';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/6.4.1/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/6.4.1/frontend/src/node_modules/@blueconic/engagement-service/engagementService.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/6.4.1/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (e, r) {
        this.blueConicClient = e, this.interaction = r, this.parameters = this.interaction.getParameters();
        var t = this.parameters.propertyRules && this.parameters.propertyRules[0] ? this.parameters.propertyRules[0] : null;
        if (t) {
          t = e.json.parse(t), this.preLoadProperties = [];
          for (var i = 0, s = 0; s < t.length; s++) {
            var p = t[s];
            p.profileproperty && p.decay && (this.preLoadProperties.push(p.profileproperty), p.decay > i && (i = p.decay, this.property = p.profileproperty));
          }
        } else {
          var a = this.parameters.property ? this.parameters.property[0] : this.parameters.property;
          a && (this.property = this.blueConicClient.json.parse(a)[0].profileproperty, this.preLoadProperties = [this.property]);
        }
      },
      getPreloadProperties: function () {
        return this.preLoadProperties;
      },
      onLoad: function () {
        if (this.preLoadProperties.length > 0) {
          var e = this.interaction.getProfile(),
            r = this.parameters.engagement_rules ? this.parameters.engagement_rules[0] : this.parameters.engagement_rules;
          if (!r) return;
          if (0 === (r = this.blueConicClient.json.parse(r)).length) return;
          var t = new this.BlueConicEngagement(this.blueConicClient, e, this.property, !1, "", this.jQuery);
          if (t.applyEngagementRules(r), t.isChanged()) t.save();else {
            for (var i = !1, s = 0; s < this.preLoadProperties.length; s++) {
              var p = this.preLoadProperties[s];
              e.getValue(p) || (e.setValue(p, "0"), i = !0);
            }
            i && this.blueConicClient.profile.updateProfile();
          }
        }
      }
    });
    var a = [];
    var i = 'engagement_score';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/6.5.1/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/6.5.1/frontend/src/node_modules/@blueconic/engagement-service/engagementService.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/6.5.1/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (e, r) {
        this.blueConicClient = e, this.context = r;
      },
      getPreloadProperties: function () {
        return this.preloadProperties = [], this.context && (this.preloadProperties = this.getProfilePropertiesFromParameters(this.context.getParameters())), this.preloadProperties;
      },
      onLoad: function () {
        var e = this.context.getProfile(),
          r = this.context.getParameters(),
          t = this.jQuery,
          i = r.listener_rules ? r.listener_rules[0] : r.listener_rules;
        if (i) {
          i = this.blueConicClient.json.parse(i);
          var s = new this.RuleService(this.blueConicClient, e, t);
          s.applyRules(i), s.save();
        }
      },
      getProfilePropertiesFromParameters: function (e) {
        var r = [],
          t = e.listener_rules ? e.listener_rules[0] : e.listener_rules;
        if (!t) return r;
        t = this.blueConicClient.json.parse(t);
        for (var i = 0; i < t.rules.length; i++) {
          var s = t.rules[i];
          !s.profileproperty || "set_if_empty" !== s.addset && "merge" !== s.addset || r.push(s.profileproperty[0].profileproperty);
        }
        return r;
      }
    });
    var a = [];
    var i = 'enrichprofilebyvisitorbehavior';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'enrichProfileByVisitorBehavior/5.4.2/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'enrichProfileByVisitorBehavior/5.4.2/frontend/src/js/ruleService.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'enrichProfileByVisitorBehavior/5.4.2/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (e, r) {
        this.blueConicClient = e, this.context = r, this.parameters = this.context.getParameters(), this.rules = this._migrate(this.parameters.version || 1);
      },
      getPreloadProperties: function () {
        return this.preloadProperties = [], this.context && (this.preloadProperties = this.getProfilePropertiesFromParameters()), this.preloadProperties;
      },
      onLoad: function () {
        if (this.rules) {
          var e = this.context.getProfile();
          new window.FormRuleService(this.blueConicClient, e, this.jQuery).applyRules(this.rules);
        }
      },
      getProfilePropertiesFromParameters: function () {
        if (this.rules) {
          for (var e = [], r = 0; r < this.rules.length; r++) {
            var t = this.rules[r];
            t.profileProperty && "set_if_empty" === t.addset && e.push(t.profileProperty);
          }
          return e;
        }
      },
      _migrate: function (e) {
        var r = this.parameters.form_listener_rules ? this.parameters.form_listener_rules[0] : this.parameters.form_listener_rules;
        return r = this.blueConicClient.json.parse(r), 1 === e && (e = 2, r = this._migrateToVersion2(r)), r;
      },
      _migrateToVersion2: function (e) {
        if (!e) return e;
        e = e.rules || e;
        for (var r = 0; r < e.length; r++) {
          e[r].id = e[r].id || e[r].identifier, delete e[r].identifier, e[r].profileproperty && !e[r].profileProperty && (e[r].profileProperty = e[r].profileproperty[0] && e[r].profileproperty[0].profileproperty || "", delete e[r].profileproperty);
          var t = this._migrateConverterMappingsToVersion2(e[r]);
          t && (e[r].converter.mappings = t);
        }
        return e;
      },
      _migrateConverterMappingsToVersion2: function (e) {
        if (e && e.converter && e.converter.mappings) {
          for (var r = [], t = 0; t < e.converter.mappings.length; t++) {
            var i = e.converter.mappings[t];
            i && i.original && i.converted ? r.push(i) : r.push({
              id: i.identifier || i.id,
              original: i.o,
              converted: i.c
            });
          }
          return r;
        }
      }
    });
    var a = [];
    var i = 'enrichprofilewithvisitorinput';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.4.3/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.4.3/frontend/src/node_modules/@blueconic/frontend-form-rule-service/formRuleService.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.4.3/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (t, n) {
        this.blueConicClient = t, this.rules = [], this.timeouts = [];
        try {
          this.rules = this.blueConicClient.json.parse(n.getParameters().rules[0]);
        } catch (i) {}
        this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange, this, function () {
          this._unsubscribePositionListeners(), this._resetTimeouts(), this.onLoad();
        }), this._positionListeners = [];
      },
      onLoad: function () {
        for (var t = 0; t < this.rules.length; t++) {
          var n = this.rules[t];
          "click" === n.type ? this._setClickBindings(n, !0) : this._createEvent(n);
        }
      },
      _resetTimeouts: function () {
        this.timeouts.forEach(function (t) {
          clearTimeout(t);
        }), this.timeouts = [];
      },
      _createEvent: function (t) {
        var n = t.area.selectedoption,
          i = !1;
        if ("selector" === n && t.area.selector ? (t.words && this._contentMatchesWords(this._getContentForSelector(t), t.containsmatches, t.words) || t.anyWord && this._getContentForSelector(t)) && (i = !0) : "variable" === n && t.area.variable ? (t.words && this._contentMatchesWords(this._getVariableValue(t.area.variable), t.containsmatches, t.words) || t.anyWord && this._getVariableValue(t.area.variable)) && (i = !0) : "customjs" === n && t.area.customjs && (t.words && this._contentMatchesWords(this._getCustomJsValue(t.area.customjs), t.containsmatches, t.words) || t.anyWord && this._getCustomJsValue(t.area.customjs)) && (i = !0), i) {
          var s = 0;
          t.delay && !isNaN(parseInt(t.delay)) && (s = parseInt(t.delay));
          var r = setTimeout(function () {
            this.blueConicClient.createEvent(t.event.id);
          }.bind(this), s);
          this.timeouts.push(r);
        }
      },
      _setClickBindings: function (t, n) {
        if (t.clickarea.selector) {
          var i = this.jQuery,
            s = null;
          try {
            s = i(t.clickarea.selector);
          } catch (r) {
            return void this.blueConicClient.util.log("Invalid click selector: " + r);
          }
          0 === s.length ? this.blueConicClient.position.subscribe(t.clickarea.selector, this, function () {
            this._setClickBindings(t, !1);
          }) : s.off("click." + t.id).on("click." + t.id, {
            clickRule: t
          }, function (t) {
            this.lastEvent = t;
            try {
              this._createEvent(t.data.clickRule);
            } catch (r) {}
          }.bind(this)), n && i(document).on("click", t.clickarea.selector, {
            clickRule: t
          }, function (t) {
            if (!this.lastEvent || this.lastEvent.originalEvent !== t.originalEvent) try {
              this._createEvent(t.data.clickRule);
            } catch (r) {}
          }.bind(this));
        }
      },
      _contentMatchesWords: function (t, n, i) {
        if (!t) return !1;
        for (var s = 0; s < i.length; s++) if ("contains" === n) {
          if (-1 !== t.indexOf(i[s].toLowerCase())) return !0;
        } else if (t === i[s].toLowerCase()) return !0;
        return !1;
      },
      _getContentForSelector: function (rule) {
        var selector = rule.area.selector,
          contentAreas = null;
        if (-1 !== selector.indexOf("jQuery(")) contentAreas = function (selector, jQuery) {
          return eval("var jQuery = arguments[1]"), eval(selector);
        }(selector, this.jQuery);else try {
          contentAreas = this.jQuery(selector);
        } catch (e) {
          this.blueConicClient.util.log("Invalid content selector: " + e);
        }
        if (contentAreas && contentAreas instanceof this.jQuery && contentAreas.length > 0) {
          var contentArr = [];
          return this.jQuery.each(contentAreas, function (t, n) {
            var i = this.jQuery(n);
            i.attr("content") ? contentArr.push(this._normalizeText(i.attr("content"))) : i.attr("src") ? contentArr.push(this._normalizeText(i.attr("src"))) : contentArr.push(this._normalizeText(i.text()));
          }.bind(this)), contentArr.join().toLowerCase();
        }
        if ("content" === rule.type) {
          var subscription = this.blueConicClient.position.subscribe(selector, this, function () {
            this._createEvent(rule);
          });
          this._positionListeners.push(subscription);
        }
      },
      _unsubscribePositionListeners: function () {
        this._positionListeners && this._positionListeners.forEach(function (t) {
          this.blueConicClient.position.unsubscribe(t);
        }), this._positionListeners = [];
      },
      _getVariableValue: function (t) {
        try {
          for (var n = t.split("."), i = window[n.shift()]; n.length > 0;) i = i[n.shift()];
          return i instanceof Array ? i.join().toLowerCase() : "object" == typeof i || "function" == typeof i ? this.blueConicClient.json.stringify(i) : i ? ("" + i).toLowerCase() : null;
        } catch (s) {
          return null;
        }
      },
      _getCustomJsValue: function (customjs) {
        try {
          var value = function (customjs, jQuery) {
            return eval("var jQuery = arguments[1]"), eval("var $ = arguments[1]"), eval(customjs);
          }(customjs, this.jQuery);
          return value && value instanceof Object && (value = this._stringify(value)), value ? ("" + value).toLowerCase() : null;
        } catch (e) {
          return null;
        }
      },
      _stringify: function (t) {
        try {
          return this.blueConicClient.json.stringify(t);
        } catch (i) {
          var n = [];
          return JSON.stringify(obj, function (t, i) {
            if ("object" == typeof i && null !== i) {
              if (-1 !== n.indexOf(i)) return;
              n.push(i);
            }
            return i;
          });
        }
      },
      _normalizeText: function (t) {
        return t ? t.replace(/^\s+|\s+$/g, "").replace(/\r\n+|\r+|\n+/gi, "").replace(/\s+/gi, " ") : t;
      }
    });
    var a = [];
    var i = 'eventtrigger';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.2/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.2/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (a, b) {
        this.blueConicClient = a, this.context = b, this.parameters = this.context.getParameters();
      },
      _ouibounce: function () {
        var a = this,
          b = "sensitivity",
          c = "delay";
        this.ouibounce({
          aggressive: !0,
          timer: 0,
          sensitivity: this.parameters[b] ? parseInt(this.parameters[b][0]) : 20,
          delay: this.parameters[c] ? parseInt(this.parameters[c][0]) : 0,
          callback: function () {
            window.blueConicClient && window.blueConicClient.exitIntentThrown || a.blueConicClient.createEvent("exitintent"), window.blueConicClient && (window.blueConicClient.exitIntentThrown = !0);
          }
        });
      },
      onLoad: function () {
        this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange, this, function () {
          window.blueConicClient && window.blueConicClient.exitIntentThrown && (window.blueConicClient.exitIntentThrown = !1, this._ouibounce());
        }), this._ouibounce();
      }
    });
    var a = [];
    var i = 'exitintent';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.0.5/js/ouibounce.js',
      sharing: 'none'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.0.5/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (e, i) {
        if (this.blueConicClient = e, this.context = i || null, this.parameters = this.context.getParameters(), this._initPublishedEvents(), this.parameters) {
          this.blueConicClient.event.subscribe("PAGEVIEW", this, function () {
            window._bcp = window._bcp || {}, window._bcp.publishedEvents = window._bcp.publishedEvents || {}, window._bcp.publishedEvents.viewEvent = {};
          }), "true" !== this.parameters.hasOverlay[0] || this._isViewEventPublished() || this._handleView();
          var t = this.parameters.positions;
          if (t) for (var n = 0; n < t.length; n++) {
            var s = t[n];
            this.blueConicClient.position.subscribe(s, this, this._handlePosition);
          }
        }
      },
      _initPublishedEvents: function () {
        window._bcp = window._bcp || {}, window._bcp.publishedEvents = window._bcp.publishedEvents || {}, window._bcp.publishedEvents.viewEvent = window._bcp.publishedEvents.viewEvent || {}, window._bcp.publishedEvents.clickEvent = window._bcp.publishedEvents.clickEvent || {};
      },
      _handleClick: function () {
        this._isClickEventPublished() || (this._setClickEventPublished(!0), this.blueConicClient.createEvent("CLICK", this.context.getInteractionId()));
      },
      _handleView: function () {
        this._setViewEventPublished(!0), this.blueConicClient.createEvent("VIEW", this.context.getInteractionId());
      },
      _handlePosition: function (e) {
        this._isViewEventPublished() || this.blueConicClient.isInEditMode() || this._handleView();
        var i = this;
        try {
          var t = "bcCtrl" + this.context.getInteractionId();
          if (this.jQuery(e + " a").off("click." + t).on("click." + t, function () {
            i._handleClick();
          }), this.jQuery(document).off("click." + t).on("click." + t, e + " a", function () {
            i._handleClick();
          }), this.jQuery(document).off("submit." + t).on("submit." + t, e + " form", function () {
            i._handleClick();
          }), this.jQuery(e).find("iframe").length > 0) {
            window.focus();
            var n = !1,
              s = this.jQuery(this.jQuery(e).find("iframe"));
            s.off("mouseenter." + t).on("mouseenter." + t, function () {
              n = !0;
            }), s.off("mouseleave." + t).on("mouseleave." + t, function () {
              n = !1;
            }), document.querySelectorAll(window).removeEventListener("blur." + t).addEventListener("blur." + t, function () {
              n && this._handleClick();
            }.bind(this));
          }
        } catch (o) {}
      },
      onLoad: function () {
        if (this.parameters) {
          var e = this.parameters.positions;
          if (e) for (var i = 0; i < e.length; i++) {
            var t = e[i];
            this.jQuery(t).length > 0 && this._handlePosition(t);
          }
        }
      },
      _isViewEventPublished: function () {
        return Boolean(window._bcp.publishedEvents.viewEvent[this.context.getInteractionId()]);
      },
      _setViewEventPublished: function (e) {
        window._bcp.publishedEvents.viewEvent[this.context.getInteractionId()] = e;
      },
      _isClickEventPublished: function () {
        return Boolean(window._bcp.publishedEvents.clickEvent[this.context.getInteractionId()]);
      },
      _setClickEventPublished: function (e) {
        window._bcp.publishedEvents.clickEvent[this.context.getInteractionId()] = e;
      }
    });
    var a = [];
    var i = 'globallistener_controlgroup';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.2/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.2/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      PF_PROPERTY_PREFIX: "gtmpf",
      BLUECONIC_EVENT_PREFIX: "GTM:",
      init: function (e, t) {
        this.blueConicClient = e, this.context = t || null, this.profile = this.context.getProfile(), this.parameters = this.context.getParameters(), this.parameters = this.migrate(this.parameters), this.objectName = this.parameters.objectname && this.parameters.objectname.length > 0 && this.parameters.objectname[0] ? this.parameters.objectname[0] : "dataLayer", this._goals = [];
        var i = t.getGoals().reduce(function (e, t) {
          return e[t.getId()] = !0, e;
        }, {});
        if (this.parameters.goalParameters) for (var n = 0; n < this.parameters.goalParameters.length; n++) {
          var a = e.json.parse(this.parameters.goalParameters[n]);
          a.active && i[a.id] && this._goals.push(a);
        }
        this.connectionContext = {
          LAST_PUSH_PROPERTY: this.PF_PROPERTY_PREFIX + "lt" + this.context.getInteractionId(),
          VARIABLE_STATE_PUSH_PROPERTY: this.PF_PROPERTY_PREFIX + "st" + this.context.getInteractionId(),
          profile: this.profile,
          variables: [],
          SENT_TO_SYSTEM_PROPERTY: "sent_to_system",
          SENT_TO_CONNECTION_PROPERTY: "sent_to_connection",
          RECEIVED_FROM_SYSTEM_PROPERTY: "received_from_system",
          RECEIVED_FROM_CONNECTION_PROPERTY: "received_from_connection"
        };
      },
      initDataLayerUtil: function () {
        this.bcConnectionUtil.md5Lib = this.md5, this._bcDatalayerUtil = new this.BlueConicDataLayerUtil(this.objectName, this.blueConicClient, this.bcConnectionUtil, this.context, this.connectionContext, this.profile), this._bcDatalayerUtil.LAST_PUSH_PROPERTY = this.PF_PROPERTY_PREFIX + "lt" + this.context.getInteractionId(), this._bcDatalayerUtil.VARIABLE_STATE_PUSH_PROPERTY = this.PF_PROPERTY_PREFIX + "st" + this.context.getInteractionId();
      },
      onLoad: function () {
        this.initDataLayerUtil();
        var e = this,
          t = 0;
        (function i() {
          if (e._bcDatalayerUtil.getDataLayer()) e._handleGoals();else {
            if (t > 20) return;
            t++, window.setTimeout(i, 250);
          }
        }).call(this);
      },
      _handleGoals: function () {
        for (var e = 0; e < this._goals.length; e++) {
          var t = this._goals[e],
            i = t.parameters.segment ? t.parameters.segment[0] : null;
          this._bcDatalayerUtil.visitorInSegment(i) && ("export" === t.type && this._handleExportGoal(t.parameters, t.id), "import" === t.type && this._handleImportGoal(t.parameters));
        }
      },
      _handleImportGoal: function (e) {
        var t = this._bcDatalayerUtil.getDataLayer();
        if (t) {
          this._bcDatalayerUtil.doImport(e), this._publishEvents();
          var i = this,
            n = t.length;
          window.setInterval(function () {
            t = i._bcDatalayerUtil.getDataLayer(), n !== t.length && (i._publishEvents(n), n = t.length);
          }, 1e3);
        }
      },
      _publishEvents: function (e) {
        for (var t = this._bcDatalayerUtil.getDataLayer(), i = e = e || 0; i < t.length; i++) {
          var n = t[i].event;
          n && this.blueConicClient.event.publish(this.BLUECONIC_EVENT_PREFIX + n, [t[i]]);
        }
      },
      _handleExportGoal: function (e, t) {
        this._bcDatalayerUtil.doExport(e, t);
        var i = Array.isArray(e.push_interactions) && "true" === e.push_interactions[0],
          n = Array.isArray(e.passOnEvents) && "true" === e.passOnEvents[0];
        !window[this.objectName] || window[this.objectName].push ? (i && this.blueConicClient.event.subscribe("VIEW", this, this._pushInteractionView), n && this._subscribeToPassOnEvents()) : console.warn("window." + this.objectName + " does not have a push function: is the correct Object Name entered?");
      },
      getPreloadProperties: function () {
        for (var e = [this.connectionContext.SENT_TO_SYSTEM_PROPERTY, this.connectionContext.SENT_TO_CONNECTION_PROPERTY, this.connectionContext.RECEIVED_FROM_SYSTEM_PROPERTY, this.connectionContext.RECEIVED_FROM_CONNECTION_PROPERTY], t = 0; t < this._goals.length; t++) {
          var i = this._goals[t];
          if ("export" === i.type) {
            e.push(this.PF_PROPERTY_PREFIX + "st" + this.context.getInteractionId() + "_" + i.id), e.push(this.PF_PROPERTY_PREFIX + "lt" + this.context.getInteractionId() + "_" + i.id);
            for (var n = this.blueConicClient.json.parse(i.parameters.exportMapping), a = 0; a < n.length; a++) "property" === n[a].from.dataType && n[a].from.values.length > 0 && e.push(n[a].from.values[0].id);
          } else for (var r = this.blueConicClient.json.parse(i.parameters.importMapping), s = 0; s < r.length; s++) r[s].to.values.length > 0 && e.push(r[s].to.values[0].id);
        }
        return e;
      },
      _pushInteractionView: function (e, t) {
        var i = this.blueConicClient.getInteractionNamesById(t);
        if (null !== i) {
          var n = i.variantName ? i.name + " / " + i.variantName : i.name;
          window[this.objectName].push({
            event: "bcInteractionView",
            name: n
          });
        }
      },
      _subscribeToPassOnEvents: function () {
        var e,
          t = [["inactivity", "Inactivity"], ["exitintent", "Exit Intent"], ["cm_firstview", "Content Meter View 1"], ["cm_exceeded", "Content Meter Exceeded"], ["cm_lastview", "Content Meter Last View"], ["cm_excluded", "Content Meter Excluded View"], ["cm_bottom", "Content Meter Bottom Range"], ["cm_middle", "Content Meter Middle Range"], ["cm_top", "Content Meter Top Range"], ["cm_already_viewed", "Content Meter Already Viewed"], ["cm_free_view", "Content Meter Free View"], ["cm_last_free_view", "Content Meter Last Free View"], ["conversion_url", "Content Meter Conversion"], ["cm_gisted", "Content Meter Gist View"]];
        for (e = 2; e < 10; e++) t.push(["cm_view_" + e, "Content Meter View " + e]);
        for (e = 1; e < 10; e++) t.push(["cm_free_view_" + e, "Content Meter Free View " + e]);
        var i = this;
        t.forEach(function (e) {
          i.blueConicClient.event.subscribe(e[0], i, function () {
            window[this.objectName].push({
              event: "bcEvent",
              bcEventName: e[1]
            });
          });
        });
      },
      migrate: function (e) {
        var t = parseInt(e.version || "2");
        return !e.usecases && !e.variables || e.goalParameters || (t = 1), t < 2 && (e = this._migrateToV2(e), t = 2), t < 3 && (e = this._migrateToV3(e)), e;
      },
      _migrateToV2: function (e) {
        var t = {
            objectname: e.objectname
          },
          i = [];
        if (-1 !== e.usecases.indexOf("uc2")) {
          var n = {
              id: 1,
              name: "Import",
              active: !0,
              type: "import"
            },
            a = [];
          if (e.importVariables && e.importVariables.length > 0) for (var r = this.blueConicClient.json.parse(e.importVariables[0]), s = 0; s < r.length; s++) a.push({
            from: {
              fieldId: r[s].fieldLabel
            },
            to: {
              type: "property",
              property: r[s].property
            },
            restriction: r[s].restriction,
            mergeRule: r[s].mergeRule
          });
          n.parameters = {
            importMapping: [this.blueConicClient.json.stringify(a)]
          }, i.push(this.blueConicClient.json.stringify(n));
        }
        if (-1 !== e.usecases.indexOf("uc1")) {
          var o = {
              id: 2,
              name: "Export",
              active: !0,
              type: "export"
            },
            c = [];
          if (e.variables && e.variables.length > 0) for (var l = this.blueConicClient.json.parse(e.variables[0]), h = 0; h < l.length; h++) c.push({
            to: {
              fieldId: l[h].key
            },
            from: {
              type: "pm" === l[h].type ? "permission" : l[h].type,
              property: l[h].property,
              segments: l[h].segments,
              fieldId: l[h].text
            }
          });
          o.parameters = {
            exportMapping: [this.blueConicClient.json.stringify(c)],
            eventname: e.eventname,
            push_frequency: e.push_frequency,
            push_interactions: e.push_interactions,
            passOnEvents: e.passOnEvents,
            triggerEvent: e.triggerEvent
          }, i.push(this.blueConicClient.json.stringify(o));
        }
        return t.goalParameters = i, t;
      },
      _migrateToV3: function (e) {
        return e.goalParameters = (e.goalParameters || []).map(JSON.parse).map(function (e) {
          if ("export" === e.type) {
            var t = e.parameters.eventname ? e.parameters.eventname[0] : null;
            e.parameters.eventname = [t || "BlueConic"];
          }
          return JSON.stringify(e);
        }), e;
      }
    });
    var a = [];
    var i = 'gtmconnection';
    a.push({
      url: '/plugins/gtmconnection/frontend/src/node_modules/@blueconic/connection_lib/connection_lib.js',
      sharing: 'local'
    });
    a.push({
      url: '/plugins/gtmconnection/frontend/src/node_modules/@blueconic/datalayer_lib/datalayer_lib.js',
      sharing: 'local'
    });
    a.push({
      url: '/plugins/gtmconnection/frontend/src/lib/jsonpath.min.js',
      sharing: 'local'
    });
    a.push({
      url: '/plugins/gtmconnection/frontend/src/lib/md5.min.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/gtmconnection/ts_a6e73c5a3a8e693ca6face8aa30643fa/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (t, e) {
        this.blueConicClient = t, this.context = e, this.parameters = this.context.getParameters(), this.isInEditMode = this.blueConicClient.isInEditMode(), this.fancyBoxLib = "frontend/src/lib/fancybox/jquery.fancybox.pack.js";
        var n = this.context.getInteractionTypeId();
        this.baseURL = this.blueConicClient.getBaseURL(n);
        var i = this.parameters.content + "";
        this.htmlFragment = this.createElement(i), this.profile = t.profile.getProfile(), this.inlineCss = null, this._timestamp = null, this._observer = null, this._eventListenerFunction = null, this._lightboxTriggered = !1, this.blueConicClient._renderedInteractions = this.blueConicClient._renderedInteractions || [], this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange, this, function () {
          var t = this.blueConicClient.util.array.indexOfArray(this.blueConicClient._renderedInteractions, this.context.getInteractionId());
          this.blueConicClient._renderedInteractions.splice(t, 1);
        });
      },
      getPreloadProperties: function () {
        for (var t, e = this.context.getParameters().content + "", n = /data-bc-preload="([^"]*)"/g, i = []; null !== (t = n.exec(e));) for (var o = t[1].split(","), r = 0; r < o.length; r++) i.push(o[r]);
        for (var a = this.htmlFragment ? this._getPropertiesFromPlaceholders(this.htmlFragment.innerHTML) : [], c = 0; c < i.length; c++) a.push(i[c]);
        return a;
      },
      onMessageReceived: function (t) {
        this.blueConicClient.event.publish("lightbox.messageReceived", t);
      },
      onLoad: function () {
        window.bc = window.bc || {}, window.bc.jQuery = this.jQuery, window.bc.$ = this.jQuery, window.bcFancyboxLoading ? this.blueConicClient.event.subscribe("bcFancyboxLoaded", this, function () {
          this.onLoad();
        }) : this.blueConicClient._lightboxinteractiontypeFancybox ? (this.jQuery.fancybox = this.blueConicClient._lightboxinteractiontypeFancybox, this._onLoadWithLibrary()) : (window.bcFancyboxLoading = !0, this.blueConicClient.util.loadScript(this.baseURL + this.fancyBoxLib, this, function () {
          this.blueConicClient._loadLightboxInteractionTypeFancyBox(window, document, this.jQuery), this.blueConicClient._lightboxinteractiontypeFancybox = this.jQuery.fancybox, delete this.blueConicClient._loadLightboxInteractionTypeFancyBox, this._onLoadWithLibrary(), window.bcFancyboxLoading = !1, this.blueConicClient.event.publish("bcFancyboxLoaded");
        }));
      },
      _onLoadWithLibrary: function () {
        if (this.isInEditMode) this.showLightbox();else {
          var t = this.parameters.selected_when || [],
            e = this.getParameter("click_selector");
          e && -1 !== this.blueConicClient.util.array.indexOfArray(t, "click_selector") && this._addClickTriggerBindings(e);
          var n = this.getParameter("content_condition");
          n && -1 !== this.blueConicClient.util.array.indexOfArray(t, "content_condition") && this._addContentPolling(n);
          var i = this.parameters.scroll_depth && this.parameters.scroll_depth[0] && !isNaN(this.parameters.scroll_depth[0]) ? parseInt(this.parameters.scroll_depth[0]) : 0;
          i && -1 !== this.blueConicClient.util.array.indexOfArray(t, "scroll_depth") && this._addScrollBinding(i), 0 === t.length && this.showLightbox(), this._addCloseEventHandler();
        }
      },
      _getScrollPercent: function () {
        return document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      },
      _checkScrollCondition: function (t) {
        this._getScrollPercent() >= t && this.showLightbox();
      },
      _addScrollBinding: function (t) {
        this._checkScrollCondition(t), document.addEventListener("scroll", function () {
          this._checkScrollCondition(t);
        }.bind(this));
      },
      _addClickTriggerBindings: function (t) {
        try {
          var e = this.jQuery(t);
          e.length > 0 ? e.off("click.lightboxinteractiontype").on("click.lightboxinteractiontype", this.jQuery.proxy(function () {
            this.showLightbox(!0);
          }, this)) : this.blueConicClient.position.subscribe(t, this, this.jQuery.proxy(this._addClickTriggerBindings, this, t));
        } catch (n) {}
      },
      _addContentPolling: function (t) {
        this._checkContentCondition(t);
        var e = this,
          n = document.getElementsByTagName("body")[0];
        if (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver) this._observer = new MutationObserver(function () {
          e._observeContentChanges(t);
        }), this._observer.observe(n, {
          childList: !0,
          subtree: !0
        });else if (window.addEventListener) this._eventListenerFunction = function () {
          e._observeContentChanges(t);
        }, n.addEventListener("DOMNodeInserted", this._eventListenerFunction, !1);else var i = setInterval(function () {
          e._lightboxTriggered ? clearInterval(i) : e._checkContentCondition(t);
        }, 500);
      },
      _observeContentChanges: function (t) {
        if (this._lightboxTriggered) {
          this._observer ? this._observer.disconnect() : document.getElementsByTagName("body")[0].removeEventListener("DOMNodeInserted", this._eventListenerFunction, !1);
        } else {
          var e = this,
            n = new Date().getTime();
          this._timestamp = n, setTimeout(function () {
            e._timestamp !== n || e._lightboxTriggered || e._checkContentCondition(t);
          }, 250);
        }
      },
      _checkContentCondition: function (t) {
        this.jQuery(t).length > 0 && this.jQuery(t).html() && this.jQuery(t).html().length > 0 && this.showLightbox();
      },
      closeLightbox: function () {
        this.isInEditMode || this.jQuery.fancybox.close();
      },
      _addCloseEventHandler: function () {
        this.blueConicClient.event.subscribe("closeoverlay", this, function (t, e) {
          e instanceof Array && e[0] === this.context.getInteractionId() && this.closeLightbox();
        });
      },
      showLightbox: function (t) {
        if (-1 === this.blueConicClient.util.array.indexOfArray(this.blueConicClient._renderedInteractions, this.context.getInteractionId()) && (!this._lightboxTriggered || this.isInEditMode || t)) {
          this.blueConicClient._renderedInteractions.push(this.context.getInteractionId());
          var e = this.parameters.delay && this.parameters.delay[0] && !isNaN(this.parameters.delay[0]) ? 1e3 * parseInt(this.parameters.delay[0]) : 0;
          !this.isInEditMode && e > 0 ? window.setTimeout(this._showLightbox.bind(this), e) : this._showLightbox();
        }
      },
      getSettings: function () {
        var t = null,
          e = this.getParameter("width") || null,
          n = this.getParameter("height") || null,
          i = "true" === this.getParameter("hide_after_close");
        this.htmlFragment && (t = this.htmlFragment.innerHTML);
        var o = !(e || n),
          r = this.getParameter("show_close"),
          a = this.getParameter("alternative_close"),
          c = {
            parent: "body",
            autoSize: o,
            autoCenter: !1,
            autoWidth: !e,
            autoHeight: !n,
            closeBtn: "false" !== r,
            width: e || "auto",
            height: n || "auto",
            keys: {
              close: "false" === a || this.isInEditMode ? null : [27]
            },
            helpers: {
              overlay: {
                locked: !0,
                closeClick: "false" !== a && !this.isInEditMode,
                speedOut: 0
              }
            }
          };
        this.getParameter("template") && (c.padding = 0), (t || this.isInEditMode) && (c.content = " ", c.type = "inline");
        var s = this,
          l = this.jQuery,
          h = this.getParameter("effect"),
          d = this.getParameter("effect_slide_direction") || "left";
        if (this.isInEditMode && (h = "noEffect"), h && "noEffect" !== h && ("fadeIn" === h ? l.fancybox.transitions.openEffect = function () {
          var t = l.fancybox._getPosition(!0);
          t.opacity = 0, l.fancybox.wrap.css(t).show().animate({
            opacity: 1
          }, {
            duration: l.fancybox.current.openSpeed,
            complete: l.fancybox._afterZoomIn
          });
        } : "slideIn" === h && (l.fancybox.transitions.openEffect = function () {
          var t,
            e = l.fancybox._getPosition(!0),
            n = window.innerHeight,
            i = window.innerWidth,
            o = l.fancybox.current.wrap[0].getBoundingClientRect(),
            r = "top" === d || "bottom" === d ? "top" : "left";
          "top" === d || "bottom" === d ? t = n - (n - o.height) / 2 : "left" !== d && "right" !== d || (t = i - (i - o.width) / 2), e[r] = "top" === d || "left" === d ? parseInt(e[r]) - t + "px" : parseInt(e[r]) + t + "px";
          var a = {},
            c = "top" === d || "left" === d ? "+" : "-";
          a[r] = c + "=" + t + "px", l.fancybox.wrap.css(e).show().animate(a, {
            duration: l.fancybox.current.openSpeed,
            complete: l.fancybox._afterZoomIn
          });
        }), l.fancybox.transitions.openEffect && (c.openMethod = "openEffect", c.openSpeed = 600)), t) c.afterLoad = function (t) {
          s.emptyElementsWithAttribute(s.htmlFragment, "div", "data-bc-external");
          try {
            t.inner.html(s.htmlFragment.innerHTML);
          } catch (n) {
            console.error("[BC] Error occured when injecting the HTML in the DOM", n);
          }
          s.isInEditMode && s.blueConicClient.event.publish("lightbox.interactionLoaded", {
            interaction: s
          }), s.handleComplexElements(t.inner[0]);
          var e = s.getParameter("javascript");
          if (e && !s.blueConicClient.isInEditMode()) {
            e = e.replace(/(^|\W)blueConicVariantId(\W|$)/g, '$1"' + s.context.getInteractionId() + '"$2'), s._inlineJs = s.jQuery("<script>" + e + "<\/script>");
            try {
              s._inlineJs.appendTo(s.jQuery("body"));
            } catch (n) {
              console.error(n);
            }
          }
        };else if (s.isInEditMode) {
          c.afterLoad = function () {
            s.blueConicClient.event.publish("lightbox.interactionLoaded", {
              interaction: s
            });
          };
        }
        return this.isInEditMode ? c.afterShow = function () {
          l(".fancybox-close").off("click.fb");
        } : i && (c.afterShow = function () {
          Array.prototype.forEach.call(document.querySelectorAll(".fancybox-close"), function (t) {
            t.addEventListener("click", function () {
              s.blueConicClient.doNotShowAgain(s.context.getInteractionId());
            });
          });
        }), c.afterClose = function () {
          var t = s.blueConicClient.util.array.indexOfArray(s.blueConicClient._renderedInteractions, s.context.getInteractionId());
          s.blueConicClient._renderedInteractions.splice(t, 1);
        }, c;
      },
      updateLightbox: function () {
        this.jQuery.fancybox.update();
      },
      getCurrentFancyBox: function () {
        return this.jQuery.fancybox.current;
      },
      _showLightbox: function () {
        this._lightboxTriggered = !0;
        var t = this.getParameter("close_icon"),
          e = this.getParameter("close_icon_hover"),
          n = this,
          i = this.jQuery;
        function doLightBox() {
          if (!this.isInEditMode) {
            this.blueConicClient.createEvent("VIEW", this.context.getInteractionId()), !!this.parameters.forceclick && ("true" === this.parameters.forceclick[0] || !0 === this.parameters.forceclick[0]) && this.blueConicClient.createEvent("CLICK", this.context.getInteractionId());
            var t = this.getParameter("click_event_selector");
            if (t) {
              this.jQuery("body").one("click", t, function (t) {
                this.lastClickEvent && this.lastClickEvent.originalEvent === t.originalEvent || this._logClickEvent(t);
              }.bind(this));
              try {
                this.jQuery(t).one("click", function (t) {
                  this.lastClickEvent = t, this._logClickEvent(t);
                }.bind(this));
              } catch (i) {}
            }
          }
          Array.prototype.forEach.call(document.querySelectorAll(".fancybox-wrap"), function (t) {
            t.parentNode.removeChild(t);
          }), Array.prototype.forEach.call(document.querySelectorAll(".fancybox-overlay"), function (t) {
            t.parentNode.removeChild(t);
          });
          var e = function findHighestZIndex(t) {
            var e,
              n = document.getElementsByTagName(t),
              i = 0,
              o = 0;
            for (o = 0; o < n.length; o++) "auto" !== (e = document.defaultView.getComputedStyle(n[o], null).getPropertyValue("z-index")) && parseInt(e) > i && (i = parseInt(e));
            return i;
          }("*");
          this.htmlFragment && (this.emptyElementsWithAttribute(this.htmlFragment, "div", "data-bc-external"), this.isInEditMode || this.handlePlaceholders(this.htmlFragment)), this.jQuery.fancybox(this.getSettings());
          var n = 2147483647;
          e > 8e3 && e + 1030 < n && (Array.prototype.forEach.call(document.querySelectorAll(".fancybox-opened"), function (t) {
            t.style.zIndex = e + 1030;
          }), Array.prototype.forEach.call(document.querySelectorAll(".fancybox-wrap"), function (t) {
            t.style.zIndex = e + 920;
          }), Array.prototype.forEach.call(document.querySelectorAll(".fancybox-overlay"), function (t) {
            t.style.zIndex = e + 910;
          })), e + 1030 >= n && (Array.prototype.forEach.call(document.querySelectorAll(".fancybox-opened"), function (t) {
            t.style.zIndex = n;
          }), Array.prototype.forEach.call(document.querySelectorAll(".fancybox-wrap"), function (t) {
            t.style.zIndex = 2147483646;
          }), Array.prototype.forEach.call(document.querySelectorAll(".fancybox-overlay"), function (t) {
            t.style.zIndex = 2147483645;
          })), this.isInEditMode || this._setupFrontEndBindings();
        }
        this.handleStyling(t, e, function (t) {
          if (!t || (console.error(t), n.isInEditMode)) n.handleJavascript().then(function () {
            doLightBox.call(n, i);
          }, function (t) {
            if (console.error("[BC] Loading Javascript urls for the lightbox failed:", t), n.isInEditMode) doLightBox.call(n, i);else {
              var e = n.blueConicClient.util.array.indexOfArray(n.blueConicClient._renderedInteractions, n.context.getInteractionId());
              n.blueConicClient._renderedInteractions.splice(e, 1);
            }
          });else {
            var e = n.blueConicClient.util.array.indexOfArray(n.blueConicClient._renderedInteractions, n.context.getInteractionId());
            n.blueConicClient._renderedInteractions.splice(e, 1);
          }
        });
      },
      _logClickEvent: function (t) {
        t && t.originalEvent && t.originalEvent._blueConicLoggedClickEvent === this.context.getInteractionId() || t && t.target && t.target.pathname && t.target.hostname && 0 === t.target.pathname.indexOf("/s/") && -1 !== t.target.hostname.indexOf("blueconic") || (t.originalEvent && (t.originalEvent._blueConicLoggedClickEvent = this.context.getInteractionId()), this.blueConicClient.createEvent("CLICK", this.context.getInteractionId()));
      },
      _setupFrontEndBindings: function () {
        var t = this.jQuery(".bcLightboxDontShowAgainLink"),
          e = this.jQuery(".bcLightboxCloseButton");
        t.length > 0 && t.off("click.dontShowAgainLinks").on("click.dontShowAgainLinks", function (t) {
          t.preventDefault(), this.blueConicClient.doNotShowAgain(this.context.getInteractionId()), this.closeLightbox();
        }.bind(this)), e.length > 0 && e.off("click.closeButtons").on("click.closeButtons", function () {
          this.closeLightbox();
        }.bind(this));
      },
      handleComplexElements: function (t) {
        for (var e = this.getElementsWithAttribute(t, "div", "data-bc-pluginid"), n = 0; n < e.length; n++) {
          var i = e[n],
            o = i.getAttribute("data-bc-pluginid"),
            r = i.getAttribute("data-bc-config");
          if (r) try {
            var a = r.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
            r = this.blueConicClient.json.parse(a);
          } catch (c) {
            r = null;
          }
          this.blueConicClient.event.publish("bcComplexObject", {
            plugin: o,
            config: r,
            node: i,
            interactionId: this.context.getInteractionId()
          }), this.isInEditMode || (i.removeAttribute("data-bc-pluginid"), i.removeAttribute("data-bc-config"));
        }
      },
      emptyElementsWithAttribute: function (t, e, n) {
        for (var i = this.getElementsWithAttribute(t, e, n), o = 0, r = i.length; o < r; o++) {
          i[o].innerHTML = "";
        }
      },
      getElementsWithAttribute: function (t, e, n) {
        for (var i = [], o = t.getElementsByTagName(e), r = 0, a = o.length; r < a; r++) {
          var c = o[r];
          c.getAttribute(n) && i.push(c);
        }
        return i;
      },
      createElement: function (t) {
        var e;
        if (!t) return null;
        try {
          (e = document.createElement("div")).innerHTML = t;
        } catch (n) {
          return null;
        }
        return e;
      },
      handlePlaceholders: function (t) {
        for (var e = this._getPropertiesFromPlaceholders(t.innerHTML), n = 0; n < e.length; n++) {
          var i = e[n],
            o = this.profile.getValue(i) || "",
            r = new RegExp("\\$\\{" + i + "\\}", "g");
          t.innerHTML = t.innerHTML.replace(r, encodeURI(o));
        }
      },
      _getPropertiesFromPlaceholders: function (t) {
        for (var e, n = /\$\{([a-zA-Z\-_0-9]+)\}/g, i = []; e = n.exec(t);) i.push(e[1]);
        return i;
      },
      getParameter: function (t) {
        return this.parameters[t] && this.parameters[t][0] ? this.parameters[t][0] : null;
      },
      getParameters: function (t) {
        return this.parameters[t] || null;
      },
      handleJavascript: function () {
        var t = this.jQuery,
          e = this.getParameters("javascript_urls"),
          n = [];
        if (e) {
          this.javascriptUrls = e;
          for (var i = 0; i < e.length; i++) n.push(this._getLoadScriptDeferred(e[i]));
        }
        return t.when.apply(t, n);
      },
      _getLoadScriptDeferred: function (t) {
        var e = this.jQuery.Deferred(),
          n = document.createElement("script");
        return n.setAttribute("src", t), n.onload = function () {
          e.resolve();
        }, n.onerror = function () {
          e.reject('Url "' + t + "\" couldn't be loaded");
        }, document.head.appendChild(n), e;
      },
      handleStyling: function (t, e, n) {
        var i = this.getParameter("content"),
          o = [this.baseURL + "frontend/src/lib/fancybox/jquery.fancybox.css"];
        i && -1 !== i.indexOf("bcLightboxTemplate") || o.push(this.baseURL + "frontend/src/css/lightbox.css");
        var r = this.getParameter("styling_css");
        r && (this.stylingUrl = r, o.push(r));
        var a = "";
        "true" === this.getParameter("custom_close") && t && (a += ".fancybox-close {background-image: url('" + t + "');background-repeat: no-repeat;background-position: center center;background-size: contain;}", e && (a += ".fancybox-close:hover {background-image: url('" + e + "');background-repeat: no-repeat;background-position: center center;background-size: contain;}"));
        var c = this.getParameter("close_position"),
          s = this.getParameter("close_padding");
        a += this._getClosePositionStyling(c, s);
        var l = this.getParameter("styling_css_inline");
        return l && (a += l.replace(/&#xd;/gi, "")), a && (this.inlineCss = this.jQuery("<style>" + a + "</style>"), this.inlineCss.appendTo(this.jQuery("body"))), this._loadCssUrls(o, n);
      },
      _loadCssUrls: function (t, e) {
        var n = (t = t || []).length,
          i = 0,
          o = [];
        if (0 === n) return e();
        function urlLoaded() {
          if (++i >= n) return o.length > 0 ? e(o) : e();
        }
        t.forEach(function (t) {
          if (document.querySelector('link[href="' + t + '"]')) urlLoaded();else {
            var e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), e.onload = urlLoaded, e.onerror = function (t) {
              o.push(t), urlLoaded();
            }, document.head.appendChild(e);
          }
        });
      },
      _getClosePositionStyling: function (t, e) {
        if (!t) return "";
        null !== e && "NaN" !== e || (e = "-18");
        var n = ".fancybox-close {";
        switch (t) {
          case "TOP_LEFT":
            n += "top:" + e + "px; right: unset; bottom: unset; left:" + e + "px;";
            break;
          case "BOTTOM_RIGHT":
            n += "top: auto; right: " + e + "px; bottom: " + e + "px; left: unset;";
            break;
          default:
            n += "top: " + e + "px; right: " + e + "px; bottom: unset; left: unset;";
        }
        return n + "}";
      }
    });
    var a = [];
    var i = 'lightboxinteractiontype';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.4.1/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.4.1/'
    }, {
      id: 'html',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'html/1.0.10/'
    }, {
      id: 'image',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'image/1.0.2/'
    }, {
      id: 'number',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'number/1.0.2/'
    }, {
      id: 'string',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'string/1.0.1/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      EVENT_NAME: "adblock_detected",
      init: function (e, t) {
        this.blueConicClient = e, this.context = t;
      },
      getPreloadProperties: function () {
        var e = this.context.getParameters(),
          t = e.property ? e.property[0] : e.property;
        return t ? [t] : [];
      },
      onLoad: function () {
        var e = this,
          t = this.context.getProfile(),
          n = this.context.getParameters(),
          o = n.property ? n.property[0] : n.property;
        o || (o = this.EVENT_NAME);
        var adBlockNotDetected = function () {
            "no" !== t.getValue(o) && (t.setValue(o, "no"), e.blueConicClient.profile.updateProfile());
          },
          r = window.navigator.userAgent;
        /MSIE|Trident/.test(r) ? adBlockNotDetected() : justDetectAdblock.detectAnyAdblocker().then(function (n) {
          n ? ("yes" !== t.getValue(o) && (t.setValue(o, "yes"), e.blueConicClient.profile.updateProfile()), e.blueConicClient.createEvent(e.EVENT_NAME)) : adBlockNotDetected();
        });
      }
    });
    var a = [];
    var i = 'listener_adblock';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.1/frontend/src/lib/just-detect-adblock.min.js',
      sharing: 'none'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.1/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (e, t) {
        this.blueConicClient = e, this.context = t;
      },
      getPreloadProperties: function () {
        var e = this.context.getParameters(),
          t = e.responseProperty ? e.responseProperty[0] : e.responseProperty;
        return t ? (this.campaignIdentifierProperty = t, [t]) : (this.campaignIdentifierProperty = "responded_to_campaigns", ["responded_to_campaigns"]);
      },
      onLoad: function () {
        var e = this.context.getProfile(),
          t = this.context.getParameters(),
          r = this.blueConicClient,
          n = !1,
          i = !1,
          o = t.config ? t.config[0] : t.config;
        if (o) {
          for (var a = this.blueConicClient.json.parse(o), c = 0; c < a.length; c++) {
            var p = a[c],
              l = this.getParameterByName(p.parameter);
            l && p.profileProperty && (e.addValue(p.profileProperty, l), n = !0, p.isCampaignIdentifier && !i && (this._bindHandlers(l), i = !0));
          }
          n && r.profile.updateProfile();
        }
      },
      _bindHandlers: function (e) {
        var t = this,
          r = this.context.getProfile(),
          n = this.blueConicClient,
          i = document.querySelectorAll("a");
        Array.prototype.forEach.call(i, function (i) {
          i.addEventListener("click", function () {
            r.addValue(t.campaignIdentifierProperty, e), n.profile.updateProfile();
          });
        });
        i = document.querySelectorAll("form");
        Array.prototype.forEach.call(i, function (i) {
          i.addEventListener("submit", function () {
            r.addValue(t.campaignIdentifierProperty, e), n.profile.updateProfile();
          });
        });
      },
      getParameterByName: function (e) {
        if (!e) return "";
        e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&#]" + e + "=([^&#]*)").exec(this.getLocationHref());
        return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
      },
      getLocationHref: function () {
        return window.location.href;
      }
    });
    var a = [];
    var i = 'listener_campaign_tracker';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.0/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (e, t) {
        this.blueConicClient = e, this.context = t;
      },
      onLoad: function () {
        this._getCognitoUser() && this.blueConicClient.event.publish("COGNITO", [window._bcp.cognito]);
      },
      _getCookieValueByName: function (e) {
        var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
        return t ? t[2] : null;
      },
      _parseUserData: function (e) {
        var t = {};
        if (e.UserAttributes) for (var i = 0; i < e.UserAttributes.length; i++) t[e.UserAttributes[i].Name] = e.UserAttributes[i].Value;
        return e.Username && (t.username = e.Username), t.timestamp = this.blueConicClient.getCurrentDate().getTime(), t;
      },
      _getCognitoUser: function () {
        this.parsedCookie = null;
        var e = this._getCookieValueByName("CognitoIdentityServiceProvider.*.LastAuthUser");
        if (!e) return !1;
        var t = this._getCookieValueByName("CognitoIdentityServiceProvider.*." + e + ".userData");
        if (!t) return !1;
        try {
          this.parsedCookie = this._parseUserData(JSON.parse(decodeURIComponent(t)));
        } catch (e) {
          return !1;
        }
        return (!this.parsedCookie || 0 !== Object.keys(this.parsedCookie).length || this.parsedCookie.constructor !== Object) && (void 0 === window._bcp && (window._bcp = {}), window._bcp.cognito = this.parsedCookie, !0);
      }
    });
    var a = [];
    var i = 'listener_cognito';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/listener_cognito/ts_00d019ed6a47dccfc98476041f9b74e0/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      PARAMETERS: {
        ENGAGEMENT_PROPERTY: "engagementProperty",
        ENGAGEMENT_SCORE_PROPERTY: "engagementScoreProperty",
        DECAY: "decay",
        ENGAGEMENT_ON_CHANNEL: "engagementOnChannel"
      },
      DEFAULTS: {
        ENGAGEMENT: "engagement",
        ENGAGEMENT_SCORE: "engagement_score",
        VISITS: "visits",
        CLICKCOUNT: "clickcount"
      },
      SCORES: {
        LOW: "low",
        MEDIUM: "medium",
        HIGH: "high"
      },
      DEFAULT_DECAY: 50,
      init: function (e, t) {
        this.blueConicClient = e, this.context = t, this.parameters = t.getParameters(), this._channelId = e.getChannelId();
        var i = "true" === this.getParameterValue(this.PARAMETERS.ENGAGEMENT_ON_CHANNEL) && this._channelId;
        this.properties = {
          engagement: this.getParameterValue(this.PARAMETERS.ENGAGEMENT_PROPERTY, this.DEFAULTS.ENGAGEMENT),
          engagementScore: this.getParameterValue(this.PARAMETERS.ENGAGEMENT_SCORE_PROPERTY, this.DEFAULTS.ENGAGEMENT_SCORE),
          engagementObject: "_" + this.getParameterValue(this.PARAMETERS.ENGAGEMENT_PROPERTY, this.DEFAULTS.ENGAGEMENT),
          visits: this.DEFAULTS.VISITS + (i ? "_" + this._channelId : ""),
          clickcount: this.DEFAULTS.CLICKCOUNT + (i ? "_" + this._channelId : "")
        };
        var r = new Date(2015, 0, 1, 0, 0, 0, 0),
          n = new Date().getTime() - r.getTime();
        this.days = Math.floor(n / 864e5), this.weekNr = Math.floor(this.days / 7), this.decay = parseInt(this.getParameterValue(this.PARAMETERS.DECAY)) || this.DEFAULT_DECAY;
      },
      getPreloadProperties: function () {
        return [this.properties.engagementObject, this.properties.visits, this.properties.clickcount];
      },
      onLoad: function () {
        var e = this.context.getProfile(),
          t = e.getValue(this.properties.clickcount) ? parseInt(e.getValue(this.properties.clickcount)) : 0,
          i = e.getValue(this.properties.visits) ? parseInt(e.getValue(this.properties.visits)) : 0,
          r = e.getValues(this.properties.engagementObject).map(function (e) {
            return this.blueConicClient.json.parse(e) || {};
          }.bind(this)),
          n = this._clearInvalidValues(r, i),
          s = n.cleanedValues,
          a = this._sumInternalValues(s),
          h = this._addCurrentWeek(a, t, i),
          o = this._getCalculated(a, i, t),
          c = this._calculateScore(o);
        isNaN(c) || ((h || s.length > 1 || n.removedValues) && e.setValue(this.properties.engagementObject, JSON.stringify(a)), this._setEngagement(e, c));
      },
      getParameterValue: function (e, t) {
        return this.parameters && this.parameters[e] && this.parameters[e][0] ? this.parameters[e][0] : t;
      },
      _clearInvalidValues: function (e, t) {
        var i = !1;
        return e.forEach(function (e) {
          var r = Object.keys(e).filter(function (e) {
            return -1 !== e.indexOf("v");
          }).map(function (e) {
            return parseInt(e.substring(1));
          });
          r.sort(function (e, t) {
            return t - e;
          }), r.forEach(function (r) {
            (i || e["v" + r] > t || e["v" + r] < 0) && (delete e["v" + r], delete e["c" + r], i = !0);
          });
        }, this), {
          removedValues: i,
          cleanedValues: e
        };
      },
      _sumInternalValues: function (e) {
        var t = {};
        return e.forEach(function (e) {
          Object.keys(e).forEach(function (i) {
            t[i] = (t[i] || 0) + e[i];
          });
        }), t;
      },
      _setEngagement: function (e, t) {
        var i = this.context.getParameters(),
          r = parseInt(i.lowTreshold ? i.lowTreshold[0] : i.lowTreshold),
          n = parseInt(i.highTreshold ? i.highTreshold[0] : i.highTreshold),
          s = this.SCORES.MEDIUM;
        t < r ? s = this.SCORES.LOW : t > n && (s = this.SCORES.HIGH), e.setValue(this.properties.engagementScore, t), e.setValue(this.properties.engagement, s), this.blueConicClient.profile.updateProfile();
      },
      _addCurrentWeek: function (e, t, i) {
        var r = !1;
        return e["v" + this.weekNr] || (e["v" + this.weekNr] = i, r = !0), e["c" + this.weekNr] || (e["c" + this.weekNr] = t, r = !0), r;
      },
      _calculateScore: function (e) {
        for (var t = 0, i = 0; i < e.length; i++) {
          var r = this._getWeight(i + 1, this.decay),
            n = e[i];
          t += (n.clickCount + 5 * n.visits) * r;
        }
        return t = Math.floor(t);
      },
      _getWeight: function (e, t) {
        return e <= .1 * t ? 1 : e <= .2 * t ? .8 : e <= .4 * t ? .5 : e <= t ? .3 : .1;
      },
      _getCalculated: function (e, t, i) {
        for (var r = [], n = this.weekNr; n > 0; n--) {
          var s = 0;
          e["v" + n] && (t -= s = Math.max(t - e["v" + n], 0));
          var a = 0;
          e["c" + n] && (i -= a = Math.max(i - e["c" + n], 0)), r.push({
            week: n,
            visits: s,
            clickCount: a
          });
        }
        return r;
      }
    });
    var a = [];
    var i = 'listener_engagement';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.0/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (blueConicClient, context) {
        this.blueConicClient = blueConicClient;
        this.context = context ? context : null;
        this.POLLING_TIMEOUT = 1000;
        this.parameters = context.getParameters();
      },
      getPreloadProperties: function () {
        return ["funnel_timestamp", "funnel_busy_with", "funnel_steps", "funnel_laststep", "funnel_lastfield"];
      },
      /*
       * Sets the last focused field in the profile
       */
      _setLastFocus: function (name) {
        var profile = this.context.getProfile();
        profile.setValue("funnel_lastfield", this._funnelName + " - " + this._currentStepId + ": " + name);
        this.blueConicClient.profile.updateProfile();
      },
      /*
       * Adds bindings for the last focused field
       */
      _addBindings: function () {
        var me = this;
        var inputTypeBlocklist = ["button", "hidden", "reset", "submit"];
        var inputEvtHandler = function (event) {
          var type = event.target.type;
          if (inputTypeBlocklist.indexOf(type) === -1) {
            me._setLastFocus(me._getFieldName(event.target));
          }
        };
        var selectAndTextareaEvtHandler = function (event) {
          me._setLastFocus(me._getFieldName(event.target));
        };
        var inputs = document.querySelectorAll("input");
        var selects = document.querySelectorAll("select");
        var textareas = document.querySelectorAll("textarea");
        Array.prototype.forEach.call(inputs, function (input) {
          input.removeEventListener("focus", inputEvtHandler);
          input.addEventListener("focus", inputEvtHandler);
        });
        Array.prototype.forEach.call(selects, function (select) {
          select.removeEventListener("focus", selectAndTextareaEvtHandler);
          select.addEventListener("focus", selectAndTextareaEvtHandler);
        });
        Array.prototype.forEach.call(textareas, function (textarea) {
          textarea.removeEventListener("focus", selectAndTextareaEvtHandler);
          textarea.addEventListener("focus", selectAndTextareaEvtHandler);
        });
      },
      /*
       * Returns the (hopefully human readable) name for an input field
       */
      _getFieldName: function (node) {
        return node.getAttribute("name") || node.getAttribute("id") || node.getAttribute("autocomplete") || "Unnamed form field";
      },
      /*
       * Checks if a step matches with the supplied URL
       */
      _urlsMatches: function (step, url) {
        var me = this;
        return step.urlMatching.filter(function (entry) {
          return me._urlMatches(entry, url);
        }).length > 0;
      },
      /*
       * Checks if a step matches with the supplied URL
       */
      _urlMatches: function (urlMatching, url) {
        var normalizedUrl = this._normalizeUrl(url);
        var normalizedMatchUrl = this._normalizeUrl(urlMatching.url);
        var urlPattern = this._escapeRegularExpressionCharacters(normalizedMatchUrl);
        try {
          var rexgexp = new RegExp(urlPattern, "i");
          return rexgexp.test(normalizedUrl);
        } catch (e) {
          return false;
        }
      },
      /*
       * Escaper regular expression characters from the provided pattern
       */
      _escapeRegularExpressionCharacters: function (regexpPattern) {
        if (regexpPattern) {
          var addEscapeCharacter = function (string) {
            return "\\" + string;
          };

          // Replace literal \, ?, ., but not . if .*
          regexpPattern = regexpPattern.replace(/\.(?!\*)|[\\?]/g, addEscapeCharacter);

          // Make sure .* and * is .*
          regexpPattern = regexpPattern.replace(/(\.\*|\*)/g, ".*");
          return regexpPattern;
        } else {
          return "";
        }
      },
      /*
       * Checks if the supplied word is visible at the page
       */
      _stepIsVisible: function (step, url) {
        var me = this;
        return step.urlMatching.filter(function (urlMatchRule) {
          // check if the match rule matches in URL and visible word
          return me._urlMatches(urlMatchRule, url) && (!urlMatchRule.word || me._wordIsVisible(urlMatchRule.word));
        }).length > 0;
      },
      /*
       * Traverses the DOM-tags to scan for elements that include the {word}
       * and filters through actually visible elements by checking it's height and width
       */
      _wordIsVisible: function (word) {
        word = word.toLowerCase();
        return Array.prototype.filter.call(Array.prototype.filter.call(document.getElementsByTagName("*"), function (node) {
          if (node) {
            return node.innerText.toLowerCase().indexOf(word) !== -1;
          }
        }), function (node) {
          if (node) {
            return node.offsetWidth > 0 && node.offsetHeight > 0;
          }
        }).length > 0;
      },
      /*
       * Converts the profile property values like "test flow : started at 'step1'" and "test flow : 'step1' to 'step2'" to javascript objects
       */
      _convertStepMapping: function (mapping, steps) {
        var me = this;
        var stepIds = steps.map(function (entry) {
          return entry.name;
        });
        return mapping.filter(function (entry) {
          return entry.indexOf(me._funnelName) === 0;
        }).map(function (entry) {
          var returnValue;
          // map the values like "test flow : started at 'step1'" and "test flow : 'step1' to 'step2'" to javascript objects
          var matchToValue = entry.match(/'(.*)' to '(.*)'/);
          if (matchToValue && matchToValue[1] && matchToValue[2] && stepIds.indexOf(matchToValue[1]) !== -1 && stepIds.indexOf(matchToValue[2]) !== -1) {
            // this is a valid "from-to" mapping
            returnValue = {
              source: matchToValue[1],
              target: matchToValue[2]
            };
          } else {
            var matchStartValue = entry.match(/started at '(.*)'/);
            if (matchStartValue && matchStartValue[1] && stepIds.indexOf(matchStartValue[1]) !== -1) {
              // this is a valid "started-at" mapping
              returnValue = {
                start: matchStartValue[1]
              };
            }
          }
          return returnValue;
        }).filter(function (entry) {
          // filter out the empty ones
          return entry;
        });
      },
      /*
       * Creates steps as a string representation e.g.: "funnel: started at step1" "funnel: step1 to step2".
       */
      _getFollowedStepsMapping: function (currentStepId, allSteps) {
        var startAtStr = "started at ";
        var toStr = " to ";
        var profile = this.context.getProfile();
        // filter for valeus who start with the funnel name
        var stepMapping = this._convertStepMapping(profile.getValues("funnel_steps"), allSteps);

        // search for the previously followed step
        var previousStep = null;
        // eslint-disable-next-line no-unused-vars
        var steps = allSteps.slice(0, allSteps.indexOf(currentStepId));
        var found = false;
        allSteps.forEach(function (entry) {
          var stepId = entry.name;
          found = found || stepId === currentStepId;
          if (!found) {
            var filtered = stepMapping.filter(function (stepEntry) {
              return stepEntry.start === stepId || stepEntry.target === stepId;
            });
            if (filtered.length > 0) {
              previousStep = stepId;
            }
          }
        });
        if (!previousStep) {
          // this is the entrance step
          return this._funnelName + " : " + startAtStr + "'" + currentStepId + "'";
        } else {
          return this._funnelName + " : '" + previousStep + "'" + toStr + "'" + currentStepId + "'";
        }
      },
      /*
       * Checks if a word is becoming visible. This is done by checking every second if there is a step which now matches based on word.
       * The math for URL is already done earlier
       */
      _checkWordMatch: function (url) {
        var me = this;
        setTimeout(function () {
          var found = false;
          me._queue.forEach(function (entry) {
            if (me._stepIsVisible(entry, url)) {
              found = true;
            }
          });
          if (found) {
            me._onLoad();
          } else {
            // keep on polling for words to appear
            me._checkWordMatch(url);
          }
        }, this.POLLING_TIMEOUT);
      },
      onLoad: function () {
        // add a binding for URL change
        this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange, this, function () {
          this._onLoad();
        });
        this._onLoad();
      },
      /*
       * Removed the funnel name from the "funnel_busy_with" property, because the end is reached
       */
      _handleEndReached: function () {
        var profile = this.context.getProfile();

        // remove the flow name from the funnel_busy_with property
        var inFunnels = profile.getValues("funnel_busy_with");
        var index = inFunnels.indexOf(this._funnelName);
        if (inFunnels.indexOf(this._funnelName) !== -1) {
          // remove it from the array
          inFunnels.splice(index, 1);
          profile.setValues("funnel_busy_with", inFunnels);
        }
      },
      /*
       * Returns the URL which is input for the matching of the steps
       */
      _getUrl: function () {
        return document.location.origin + document.location.pathname + document.location.search + document.location.hash;
      },
      /*
       * Returns the steps as stored in the parameters
       */
      _getSteps: function () {
        var stepsStr = this.parameters.steps ? this.parameters.steps[0] : this.parameters.steps;
        return stepsStr ? this.blueConicClient.json.parse(stepsStr) : [];
      },
      /*
       * Normalizes the URL by removing the http://, https:// and www. part
       */
      _normalizeUrl: function (url) {
        url = this._removeUrlPart(url, "http://");
        url = this._removeUrlPart(url, "https://");
        url = this._removeUrlPart(url, "www.");
        return url;
      },
      /*
       * Removes a part of the URL, when that part is completely at the beginning
       */
      _removeUrlPart: function (url, part) {
        if (url.indexOf(part) === 0) {
          url = url.substring(part.length);
        }
        return url;
      },
      /*
       * Called onLoad and when a new word matches
       */
      /* eslint-disable-next-line max-statements */
      _onLoad: function (url) {
        var me = this;
        var profile = this.context.getProfile();

        // keep track of: funnel_laststep and funnel_lastfield
        this._funnelName = this.parameters.funnelName ? this.parameters.funnelName[0] : this.parameters.funnelName;
        var steps = this._getSteps();
        if (steps.length === 0) {
          // no steps defined: do nothing
          return;
        }
        url = url || this._getUrl();

        // check which step we are in
        var matchingUrlSteps = steps.filter(function (entry) {
          return me._urlsMatches(entry, url);
        });

        // keep track of a queue for steps which are waiting for a word to appear
        this._queue = [];
        var currentStep = null;

        // check if the word is visible
        matchingUrlSteps.forEach(function (entry) {
          if (!me._stepIsVisible(entry, url)) {
            me._queue.push(entry);
          } else {
            // word is visible, so this is a valid step
            currentStep = entry;
          }
        });
        if (this._queue.length > 0) {
          this._checkWordMatch(url);
        }
        if (currentStep === null) {
          // no matching URL found: do nothing
          return;
        }
        // take the last matching step
        this._currentStepId = currentStep.name;

        // add bindings for the last focused field
        this._addBindings();

        // set the last step profile property
        profile.setValue("funnel_laststep", this._funnelName + " - " + this._currentStepId);

        // get the string for the step transition
        var followedStepsEntry = this._getFollowedStepsMapping(this._currentStepId, steps);
        profile.addValue("funnel_steps", followedStepsEntry);

        // check if the user went back: we have to remove the steps which are later in the flow, see BC-7340
        var found = false;
        var nextSteps = steps.filter(function (entry) {
          found = found || entry.name === currentStep.name;
          return found && entry.name !== currentStep.name;
        });
        var values = profile.getValues("funnel_steps");
        var funnelName = this._funnelName;
        // now loop over the next steps and remove them from the values
        nextSteps.forEach(function (step) {
          values = values.filter(function (value) {
            // keep the value when the funnel name doesn't match or the next steps do not match
            return value.indexOf(funnelName + " :") !== 0 || value.indexOf("started at '" + step.name + "'") === -1 && value.indexOf("to '" + step.name + "'") === -1;
          });
        });
        profile.setValues("funnel_steps", values);

        // when we reached a step, set the lastfield to empty
        profile.setValue("funnel_lastfield", "");

        // check if we are at the end of the flow
        if (this._currentStepId === steps[steps.length - 1].name) {
          this._handleEndReached();
        } else {
          // you are now in the funnel
          profile.addValue("funnel_busy_with", this._funnelName);
        }
        // set the funnel timestamp: don't now if we need it
        var nowTime = this.blueConicClient.getCurrentDate().getTime();
        profile.setValue("funnel_timestamp", nowTime);
        this.blueConicClient.profile.updateProfile();
      }
    });
    var a = [];
    var i = 'listener_funnel';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/listener_funnel/ts_522bc0e8193efeb21e993c33501e086b/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (n, t) {
        this.blueConicClient = n, this.context = t;
      },
      getPreloadProperties: function () {
        return [];
      },
      onLoad: function () {}
    });
    var a = [];
    var i = 'listener_geolocation';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.1/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (a, b) {
        this.blueConicClient = a, this.context = b, this.profile = this.blueConicClient.profile.getProfile();
      },
      onLoad: function () {
        this.sendQueue(), window._bcEventsSubscribed || (window._bcEventsSubscribed = !0, this.blueConicClient.event.subscribe("VIEW", this, function (a, b) {
          this.eventReact(b, "VIEW", "view");
        }), this.blueConicClient.event.subscribe("CLICK", this, function (a, b) {
          this.eventReact(b, "CLICK", "click");
        }), this.blueConicClient.event.subscribe("CONVERSION", this, function (a, b) {
          this.eventReact(b, "CONVERSION", "conversion");
        }), this.blueConicClient.event.subscribe("PAGEVIEW", this, function () {
          this._pageViewEvent();
        }));
      },
      getInteraction: function (a) {
        var b = this.blueConicClient.getInteractionNamesById(a);
        if (!b) return this.blueConicClient.util.log("No interaction could be loaded"), {
          variantId: a
        };
        var c = {};
        return b.name && (c.dialogue = b.name), b.dialogueId && (c.dialogueId = b.dialogueId), b.variantName && (c.variant = b.variantName), b.id && (c.variantId = b.id), c;
      },
      hasLoaded: function () {
        return window.dataLayer;
      },
      sendQueue: function () {
        if (!this.hasLoaded()) var a = 0,
          b = this,
          c = setInterval(function () {
            if (b.hasLoaded()) {
              b.blueConicClient.util.log("DataLayer available"), 0 < b.eventQueue.length && b.blueConicClient.util.log("Flushing Queue");
              for (var d = 0; d < b.eventQueue.length; d++) b.eventSend(b.eventQueue[d]);
              b.eventQueue = [], clearInterval(c);
            } else 20 < a++ && (b.blueConicClient.util.log("Stop checking dataLayer"), clearInterval(c));
          }, 300);else this.blueConicClient.util.log("DataLayer available");
      },
      eventQueue: [],
      eventSend: function (a) {
        this.blueConicClient.util.log("Pushing event: " + a.event), window.dataLayer.push(a);
      },
      eventReact: function (a, b, c) {
        var d = this.getInteraction(a);
        _this_variant = d.variant ? d.variant : "", _this_dialogue = d.dialogue ? d.dialogue : "", _this_dialogueId = d.dialogueId ? d.dialogueId : "", _page_title = this._page_title(), _this_href = this._this_href(), _this_referrer = this._this_referrer(), this.profile.timeline.createEvent(c, new Date(), {
          dialogueId: _this_dialogueId,
          dialogue: _this_dialogue,
          variantId: a,
          variant: _this_variant,
          title: _page_title,
          url: _this_href,
          referer: this._this_referrer
        });
        var e = {
          event: "BlueConic." + b,
          dialogue: d
        };
        this.hasLoaded() ? this.eventSend(e) : this.eventQueue.push(e);
      },
      _pageViewEvent: function () {
        _this_intIDs = this._this_intIDs(), _page_title = this._page_title(), _this_href = this._this_href(), _this_referrer = this._this_referrer(), this.profile.timeline.createEvent("pageview", new Date(), {
          itemIds: _this_intIDs,
          title: _page_title,
          url: _this_href,
          referer: _this_referrer
        });
      },
      _this_intIDs: function () {
        var a = this.blueConicClient.getInteractions(),
          b = [];
        if (0 < a.length) for (i = 0; i < a.length; i++) b.push(a[i].id);
        return 0 < b.length ? b.join(", ") : "";
      },
      _page_title: function () {
        return document.title;
      },
      _this_href: function () {
        return window.location.href;
      },
      _this_referrer: function () {
        return document.referrer;
      }
    });
    var a = [];
    var i = 'listener_gtm_timeline_system_actions';
    a.push({
      url: '/plugins/listener_gtm_timeline_system_actions/js/jquery-1.11.2.min.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/listener_gtm_timeline_system_actions/ts_520578f9e694bd9ea9b67ed61fa40863/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (a, b) {
        this.blueConicClient = a;
        var c = b.getParameters();
        if (c.selector && c.selector[0] && (this.selector = c.selector[0]), c.autoPlayFlag && c.autoPlayFlag[0] && (this.autoPlayFlag = c.autoPlayFlag[0]), c.urlRestriction && c.urlRestriction[0]) try {
          this.urlRestriction = new RegExp(c.urlRestriction[0]);
        } catch (b) {
          a.util.log("[ERROR] " + b.message);
        }
        this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange, this, this._findMediaElement), this._reset();
      },
      _reset: function () {
        this._playFired = {}, 0 < document.querySelectorAll(this.selector).length ? this._positionFound() : this.blueConicClient.position.subscribe(this.selector, this, this._positionFound), this.progressInterval && clearInterval(this.progressInterval), this.playedPercentage = 0;
      },
      _onEnded: function (a) {
        var b = a.target.getAttribute("src");
        this._playFired[b] && (this.urlRestriction && !this.urlRestriction.test(b) || (this._checkProgress(a.target), window._bcMediaPlayer.lastEvent = "media:ended", this.blueConicClient.createEvent("media:ended", [a.target]), clearInterval(this.progressInterval)));
      },
      _checkProgress: function (a) {
        if (!isNaN(a.currentTime) && !(isNaN(a.duration) || a.duration === Infinity)) {
          var b = Math.floor(100 * (a.currentTime / a.duration));
          if (0 !== b) {
            for (var c = this.playedPercentage + 1; c <= b; c++) (0 == c % 10 || 0 == c % 25) && (window._bcMediaPlayer.lastEvent = "media:played_" + c + "%", this.blueConicClient.event.publish("media:played_" + c + "%", [a]));
            this.playedPercentage = b;
          }
        }
      },
      _onPlaying: function (a) {
        var b = a.target.getAttribute("src");
        (window._bcMediaPlayer = {}, !!b) && (this._playFired[b] || this.urlRestriction && !this.urlRestriction.test(b) || (window._bcMediaPlayer.video = b, window._bcMediaPlayer.lastEvent = "media:play", this.blueConicClient.createEvent("media:play", [a.target]), this._playFired[b] = !0, this.progressInterval = setInterval(this._checkProgress.bind(this), 1e3, a.target)));
      },
      _positionFound: function () {
        for (var a = document.querySelectorAll(this.selector), b = !1, c = 0; c < a.length; c++) if ("IFRAME" === a[c].tagName) {
          var d = a[c];
          d.contentDocument && d.contentDocument.children && 0 < d.contentDocument.children.length ? this._createMediaEvents(d.contentDocument.children[0]) : (d.addEventListener("load", this._positionFound.bind(this)), b = !0);
        } else this._createMediaEvents(a[c]);
        b || this.blueConicClient.position.subscribe(this.selector, this, this._positionFound);
      },
      _createMediaEvents: function (a) {
        a && !a.getAttribute("data-blueconic-media-listener") && ("true" === this.autoPlayFlag ? this._chromeAutoPlay(a) : this._bindMediaEvents(a));
      },
      _bindMediaEvents: function (a) {
        a.addEventListener("ended", this._onEnded.bind(this), !0), a.addEventListener("playing", this._onPlaying.bind(this), !0), a.setAttribute("data-blueconic-media-listener", !0);
      },
      _chromeAutoPlay: function (a) {
        if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) {
          var b = a.play();
          b === void 0 ? this._bindMediaEvents(a) : b.then(function () {
            a.addEventListener("ended", this._onEnded.bind(this), !0), this.progressInterval = setInterval(this._checkProgress.bind(this), 1e3, a), a.setAttribute("data-blueconic-media-listener", !0);
            var b = a.getAttribute("src");
            window._bcMediaPlayer = {}, window._bcMediaPlayer.video = b, window._bcMediaPlayer.lastEvent = "media:play", this.blueConicClient.createEvent("media:play", [a]);
          }.bind(this)).catch(function (a) {
            blueConicClient.util.log("[BC][ERROR] MEDIA LISTENER Autoplay Error: " + a);
          });
        } else this._bindMediaEvents(a);
      }
    });
    var a = [];
    var i = 'listener_media';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/listener_media/ts_7385f256e99a5d23637d33d7589bbd80/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (a, b) {
        this.blueConicClient = a, this.context = b;
        var c = new Date(2017, 8, 1, 0, 0, 0, 0),
          d = this.blueConicClient.getCurrentDate().getTime(),
          e = d - c.getTime();
        this.days = Math.floor(e / 86400000);
      },
      getPreloadProperties: function () {
        return [];
      },
      onLoad: function () {
        var a = this.context.getProfile(),
          b = this.context.getParameters(),
          c = b.property ? b.property[0] : b.property;
        if (c) {
          var d = this.blueConicClient.util.array.ensureArray(b.excludedKeywords),
            e = this.blueConicClient.json.parse(c)[0].profileproperty,
            f = [],
            g = document.getElementsByTagName("meta");
          if (g) for (var h = !1, j = 0, k = g.length; j < k; j++) if ("news_keywords" === g[j].name.toLowerCase()) {
            var l = g[j].content.split(",");
            0 === l.length || 1 === l.length && "" === l[0] || (f = l, h = !0);
          } else h || 0 !== f.length || "keywords" !== g[j].name.toLowerCase() || (f = g[j].content.split(","));
          if (0 < f.length) {
            for (var m, n = {
                TIME: new Date().getTime(),
                days: this.days,
                points: 1,
                keywords: []
              }, o = 0; o < f.length; o++) m = this._trim(f[o]), "" !== m && -1 === this.blueConicClient.util.array.indexOfArray(d, m) && n.keywords.push(m);
            0 < n.keywords.length && (a.addValue("_hl_" + e, this.blueConicClient.json.stringify(n)), this.blueConicClient.profile.updateProfile());
          }
        }
      },
      _trim: function (a) {
        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }
    });
    var a = [];
    var i = 'listener_meta_keywords_ranker';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.6/'
    }]);
  })();
  for (let prop of Object.getOwnPropertyNames(window)) {
    if (typeof window[prop] === 'function') {
      window[prop] = new Proxy(window[prop], {
        apply: function (target, thisArg, argumentsList) {
          tracker._hookTracker.add(prop);
          return Reflect.apply(target, thisArg, argumentsList);
        }
      });
    }
  }

  // Event listeners

  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (a, b) {
        this.blueConicClient = a, this.context = b;
        var c = new Date(2017, 8, 1, 0, 0, 0, 0),
          d = this.blueConicClient.getCurrentDate().getTime(),
          e = d - c.getTime();
        this.days = Math.floor(e / 86400000);
      },
      getPreloadProperties: function () {
        return [];
      },
      onLoad: function () {
        var a = this.context.getProfile(),
          b = this.context.getParameters(),
          c = b.property ? b.property[0] : b.property;
        if (c) {
          var d = this.blueConicClient.json.parse(c)[0].profileproperty,
            e = this.blueConicClient.getCurrentDate(),
            f = this._getTimeFrame(e.getHours(), b.locale[0]),
            g = {
              TIME: new Date().getTime(),
              data: []
            };
          g.data.push({
            n: f,
            p: 1,
            d: this.days
          }), a.addValue("_hl_" + d, this.blueConicClient.json.stringify(g)), this.blueConicClient.profile.updateProfile();
        }
      },
      _getTimeFrame: function (a, b) {
        return this._getHour(a, b) + " - " + this._getHour(a + 1, b);
      },
      _getHour: function (a, b) {
        if ("en-us" === b) {
          var c = 12 <= a ? "PM" : "AM";
          return a %= 12, a = 0 === a ? 12 : a, a + " " + c;
        }
        return a = 10 > a ? "0" + a : a, a + ":00";
      }
    });
    var a = [];
    var i = 'listener_preferred_hour';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.6/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      SEGMENTS_PROPERTY: "_segments",
      init: function (a, b) {
        this.blueConicClient = a;
        var c = b.getParameters();
        this._segmentFilter = c.segments || [], this.enterEvent = c.enterevent ? c.enterevent[0] : null, this.exitEvent = c.exitevent ? c.exitevent[0] : null, this.profile = b.getProfile();
      },
      getPreloadProperties: function () {
        return [this.SEGMENTS_PROPERTY];
      },
      _getEnteredSegments: function (a, b) {
        a = a || [], b = b || [];
        for (var c, d = [], e = 0; e < b.length; e++) c = b[e], -1 === a.indexOf(c) && (0 === this._segmentFilter.length || -1 < this._segmentFilter.indexOf(c)) && d.push(c);
        return d;
      },
      _getExitedSegments: function (a, b) {
        return this._getEnteredSegments(b, a);
      },
      _haveSegmentsChanged: function (a, b) {
        if (a = a || [], b = b || [], a.length !== b.length) return !0;
        for (var c = 0; c < b.length; c++) if (-1 === a.indexOf(b[c])) return !0;
        return !1;
      },
      _handleSegmentChange: function (a, b) {
        if (this._haveSegmentsChanged(a, b)) {
          var c = this.blueConicClient.getCurrentDate(),
            d = this._getEnteredSegments(a, b),
            e = this._getExitedSegments(a, b);
          0 < e.length && (this.profile.timeline.createEvent("SEGMENT_EXIT", c, {
            itemIds: e
          }, this), this.exitEvent && this.blueConicClient.createEvent(this.exitEvent, [{
            itemIds: e
          }])), 0 < d.length && (this.profile.timeline.createEvent("SEGMENT_ENTER", c, {
            itemIds: d
          }, this), this.enterEvent && this.blueConicClient.createEvent(this.enterEvent, [{
            itemIds: d
          }])), this.profile.setValues(this.SEGMENTS_PROPERTY, b), this.blueConicClient.profile.updateProfile();
        }
      },
      onLoad: function () {
        var a = this.profile.getValues(this.SEGMENTS_PROPERTY),
          b = this.blueConicClient.getSegments().map(function (a) {
            return a.id;
          });
        this._handleSegmentChange(a, b), this.blueConicClient.event.subscribe(this.blueConicClient.event.onSegmentChange, this, function (a, b) {
          this._handleSegmentChange(b.old, b["new"]);
        }), this._delayedCheck();
      },
      _delayedCheck: function () {
        window.setTimeout(function () {
          this.blueConicClient.createEvent("checkSegmentChange");
        }.bind(this), 250);
      }
    });
    var a = [];
    var i = 'listener_segment_change';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/listener_segment_change/ts_17a3e72c76868c736bb583235c1142a6/'
    }]);
  })();
  document.addEventListener = new Proxy(document.addEventListener, {
    apply: function (target, thisArg, argumentsList) {
      tracker._eventMonitor.push({
        type: argumentsList[0],
        selector: argumentsList[1].toString()
      });
      return Reflect.apply(target, thisArg, argumentsList);
    }
  });

  // Initialize

  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (a, b) {
        this.blueConicClient = a, this.context = b;
        var c = new Date(2012, 0, 1, 0, 0, 0, 0),
          d = new Date(),
          e = d.getTime() - c.getTime();
        this.days = Math.floor(e / 86400000);
      },
      getPreloadProperties: function () {
        return [];
      },
      onLoad: function () {
        var a = this.context.getParameters(),
          b = a.config ? a.config[0] : a.config;
        if (b) {
          var c = this.blueConicClient.json.parse(b),
            d = document.location.href;
          (0 <= d.indexOf("#") || 0 <= d.indexOf("?")) && (d = d.substring(0, d.indexOf("#")) || d.substring(0, d.indexOf("?")));
          var e,
            f = d.split("/"),
            g = !1;
          for (e = 0; e < c.length; e++) {
            var h = c[e],
              i = f[e + 3];
            h.checked && h.profileProperty && !g && (this._storeEngagement(h.profileProperty, this._getValue(i)), i && 30 < i.length && h.checked && (g = !0));
          }
          this.blueConicClient.profile.updateProfile();
        }
      },
      _getValue: function (a) {
        return a ? 30 < a.length ? null : (0 <= a.indexOf(".") && (a = a.substring(0, a.indexOf("."))), isNaN(a) && "index" !== a && 0 !== a.indexOf("index.") ? a : null) : null;
      },
      _storeEngagement: function (a, b) {
        if (b) {
          var c = this.context.getProfile(),
            d = {
              TIME: new Date().getTime()
            };
          d[b] = {}, d[b]["p" + this.days] = 1, c.addValue("_" + a, this.blueConicClient.json.stringify(d));
        }
      }
    });
    var a = [];
    var i = 'listener_url_structure';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.0.20/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (a) {
        this.blueConicClient = a, this.profile = this.blueConicClient.profile.getProfile(), this.referralURL = window.location.href;
      },
      onLoad: function () {
        window.dataLayer && this._pushDataLayer(), this._triggerEvents();
      },
      _pushDataLayer: function () {
        window.dataLayer.push({
          event: 'bcEvent',
          bcEventName: 'Conversion URL'
        });
      },
      _triggerEvents: function () {
        this.profile.timeline.createEvent('conversion_url', new Date(), {
          referer: this.referralURL
        }), this.blueConicClient.createEvent('conversion_url');
      }
    });
    var a = [];
    var i = 'listener_urlconversioneventlistener';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/listener_urlconversioneventlistener/ts_1af3686d638e8f86af0678783cd21677/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      blueConicClient: null,
      context: null,
      _profile: null,
      _userLanguage: null,
      _systemLanguage: null,
      _language: null,
      _referrer: null,
      _hostName: null,
      _currentUrl: null,
      _domain: null,
      ORIGIN_TYPES: {
        WEB: "web",
        MOBILE_WEB: "mobile_web",
        CONNECTION: "connection",
        MOBILE: "mobile_app"
      },
      CONSTANTS: {
        THIRTY_MINUTES_IN_MS: 18e5,
        UNKNOWN: ""
      },
      PROFILE_PROPERTIES: {
        CLICKCOUNT: "clickcount",
        VISITS: "visits",
        VISITCLICKS: "visitclicks",
        LASTVISITDATE: "lastvisitdate",
        VISITEDSITES: "visitedsites",
        VISITEDDOMAIN: "visiteddomain",
        ENTRYPAGE: "entrypage",
        REFERRERHOST: "referrerhost",
        REFERRERHOSTS: "referrerhosts",
        HOSTENTRYPAGE: "hostentrypage",
        HOSTAVERAGETIME: "hostaveragetime",
        LASTREFERRERAVERAGE: "lastreferreraverage",
        AVERAGETIME: "averagetime",
        TOTALVISITTIME: "totalvisittime",
        RESOLUTION: "resolution",
        CURRENTRESOLUTION: "currentresolution",
        CURRENTSCREENWIDTH: "currentscreenwidth",
        CURRENTSCREENHEIGHT: "currentscreenheight",
        ORIGIN_TYPE: "origin_type",
        ORIGIN_SOURCE: "origin_source",
        ORIGIN_DETAIL: "origin_detail",
        DEVICETYPE: "devicetype",
        RECEIVED_FROM_SYSTEM: "received_from_system",
        RECEIVED_FROM_CONNECTION: "received_from_connection",
        MOBILE_APP_ID: "mobile_app_id",
        MOBILE_APP_NAMEVERSION: "mobile_app_nameversion",
        LANGUAGE: "language",
        KEYWORDS: "keywords",
        CURRENTKEYWORDS: "currentkeywords",
        CURRENT_UTM_SOURCE: "current_utm_source",
        CURRENT_UTM_MEDIUM: "current_utm_medium",
        CURRENT_UTM_TERM: "current_utm_term",
        CURRENT_UTM_CONTENT: "current_utm_content",
        CURRENT_UTM_CAMPAIGN: "current_utm_campaign",
        UTM_SOURCE: "utm_source",
        UTM_MEDIUM: "utm_medium",
        UTM_TERM: "utm_term",
        UTM_CONTENT: "utm_content",
        UTM_CAMPAIGN: "utm_campaign"
      },
      PROFILE_PROPERTIES_FOR_CHANNEL: {},
      init: function (e, t) {
        this.blueConicClient = e, this.context = t, this._profile = e.profile.getProfile(), this._channelId = e.getChannelId(), this._referrer = document.referrer, this._hostName = window.location.hostname, this._currentUrl = window.location.href, this._domain = document.domain, this._userLanguage = window.navigator.userLanguage, this._systemLanguage = navigator.systemLanguage, this._language = window.navigator.language, this.PROFILE_PROPERTIES_FOR_CHANNEL = {
          CLICKCOUNT: this.PROFILE_PROPERTIES.CLICKCOUNT + "_" + this._channelId,
          VISITS: this.PROFILE_PROPERTIES.VISITS + "_" + this._channelId,
          VISITCLICKS: this.PROFILE_PROPERTIES.VISITCLICKS + "_" + this._channelId,
          LASTVISITDATE: this.PROFILE_PROPERTIES.LASTVISITDATE + "_" + this._channelId
        };
      },
      onPrepare: function () {
        this._profile && (this._setLanguageProperties(), this._setResolutionProperties(), this._setReferrerProperties(), this._setCampaignProperties());
      },
      onLoad: function () {
        this._profile && (this._setReferrerHostOnLoad(), this._setVisitProperties(), this._setOriginProperties(), this.blueConicClient.profile.updateProfile());
      },
      getPreloadProperties: function () {
        return [this.PROFILE_PROPERTIES.CLICKCOUNT, this.PROFILE_PROPERTIES.VISITS, this.PROFILE_PROPERTIES.VISITCLICKS, this.PROFILE_PROPERTIES.LASTVISITDATE, this.PROFILE_PROPERTIES.VISITEDSITES, this.PROFILE_PROPERTIES.ENTRYPAGE, this.PROFILE_PROPERTIES.HOSTENTRYPAGE, this.PROFILE_PROPERTIES.HOSTAVERAGETIME, this.PROFILE_PROPERTIES.LASTREFERRERAVERAGE, this.PROFILE_PROPERTIES.AVERAGETIME, this.PROFILE_PROPERTIES.TOTALVISITTIME, this.PROFILE_PROPERTIES.RESOLUTION, this.PROFILE_PROPERTIES.DEVICETYPE, this.PROFILE_PROPERTIES.ORIGIN_TYPE, this.PROFILE_PROPERTIES.ORIGIN_SOURCE, this.PROFILE_PROPERTIES.ORIGIN_DETAIL, this.PROFILE_PROPERTIES.RECEIVED_FROM_SYSTEM, this.PROFILE_PROPERTIES.RECEIVED_FROM_CONNECTION, this.PROFILE_PROPERTIES.VISITEDDOMAIN, this.PROFILE_PROPERTIES.MOBILE_APP_ID, this.PROFILE_PROPERTIES.MOBILE_APP_NAMEVERSION, this.PROFILE_PROPERTIES_FOR_CHANNEL.CLICKCOUNT, this.PROFILE_PROPERTIES_FOR_CHANNEL.VISITS, this.PROFILE_PROPERTIES_FOR_CHANNEL.VISITCLICKS, this.PROFILE_PROPERTIES_FOR_CHANNEL.LASTVISITDATE];
      },
      _setLanguageProperties: function () {
        var e = this._userLanguage || this._systemLanguage || this._language,
          t = this._normalizeLocale(e).split("-")[0];
        t && this._profile.setValue(this.PROFILE_PROPERTIES.LANGUAGE, t);
      },
      _normalizeLocale: function (e) {
        return e && e.replace("_", "-").toLowerCase();
      },
      _setResolutionProperties: function () {
        var e = screen.width,
          t = screen.height;
        this._profile.setValue(this.PROFILE_PROPERTIES.CURRENTSCREENWIDTH, e), this._profile.setValue(this.PROFILE_PROPERTIES.CURRENTSCREENHEIGHT, t);
        var i = e + "x" + t;
        this._profile.setValue(this.PROFILE_PROPERTIES.CURRENTRESOLUTION, i), this._profile.addValue(this.PROFILE_PROPERTIES.RESOLUTION, i);
      },
      _setReferrerProperties: function () {
        this._setReferrerKeywords(), this._setReferrerHost();
      },
      _setReferrerKeywords: function () {
        var e = this.HELPER.decodeReferrer(this._referrer) || [];
        e.length > 0 && (this._addProfileValues(this.PROFILE_PROPERTIES.KEYWORDS, e), this._profile.setValues(this.PROFILE_PROPERTIES.CURRENTKEYWORDS, e));
      },
      _addProfileValues: function (e, t) {
        (Array.isArray(t) ? t : [t]).forEach(function (t) {
          this._profile.addValue(e, t);
        }, this);
      },
      _setReferrerHost: function () {
        var e = this._getReferrerHost();
        e !== this._hostName && (this._profile.setValue(this.PROFILE_PROPERTIES.ENTRYPAGE, this._currentUrl), e && (this._profile.setValue(this.PROFILE_PROPERTIES.REFERRERHOST, e), this._profile.addValue(this.PROFILE_PROPERTIES.REFERRERHOSTS, e)));
      },
      _setReferrerHostOnLoad: function () {
        var e = this._getReferrerHost();
        e !== this._hostName && this._setHostEntryPageProperty(), this._setHostTotalAndAverageTimeProperty(this._hostName, e);
      },
      _getReferrerHost: function () {
        return this._referrer.replace(/http[s]?:\/\/(.*?)(:|\?|\/|$).*/, "$1");
      },
      _setCampaignProperties: function () {
        [this.PROFILE_PROPERTIES.UTM_SOURCE, this.PROFILE_PROPERTIES.UTM_MEDIUM, this.PROFILE_PROPERTIES.UTM_TERM, this.PROFILE_PROPERTIES.UTM_CONTENT, this.PROFILE_PROPERTIES.UTM_CAMPAIGN].forEach(function (e) {
          var t = this._removeHashPart(this.HELPER._getParameterByName(this._currentUrl, e));
          t && (this._profile.setValue("current_" + e, t), this._profile.addValue(e, t));
        }, this);
      },
      _setHostEntryPageProperty: function () {
        this._profile.setValue(this.PROFILE_PROPERTIES.ENTRYPAGE, this._currentUrl);
        var e = this._getHostEntryPageMapping();
        e[this._hostName] = {
          entrypage: this._currentUrl
        }, this._profile.setValue(this.PROFILE_PROPERTIES.HOSTENTRYPAGE, JSON.stringify(e));
      },
      _getHostEntryPageMapping: function () {
        return this._safeJSONParse(this._profile.getValue(this.PROFILE_PROPERTIES.HOSTENTRYPAGE));
      },
      _safeJSONParse: function (e) {
        try {
          var t = e.replace(/'/g, '"');
          return JSON.parse(t) || {};
        } catch (i) {
          return {};
        }
      },
      _setHostTotalAndAverageTimeProperty: function (e, t) {
        var i = this._safeJSONParse(this._profile.getValue(this.PROFILE_PROPERTIES.HOSTAVERAGETIME));
        i[e] || (i[e] = this._createNewVisitData());
        var E = this.blueConicClient.getCurrentDate().getTime(),
          s = this._profile.getValue(this.PROFILE_PROPERTIES.LASTREFERRERAVERAGE),
          r = 0,
          R = 0,
          I = 0;
        Object.keys(i).map(function (e) {
          return e.toString();
        }).forEach(function (n) {
          var _ = i[n];
          this._isSessionExpired(_.enddate) ? this._addVisit(_, _.enddate - _.startdate) : n === e ? _.enddate = E : n === t && s !== t && (_.enddate = E, this._profile.setValue(this.PROFILE_PROPERTIES.LASTREFERRERAVERAGE, t)), 0 !== _.averageTime && (R++, r += _.averageTime, I += _.averageTime * _.visits);
        }, this), this._profile.setValue(this.PROFILE_PROPERTIES.HOSTAVERAGETIME, JSON.stringify(i)), this._profile.setValue(this.PROFILE_PROPERTIES.TOTALVISITTIME, I);
        var n = R > 0 ? Math.round(r / R) : 0;
        this._profile.setValue(this.PROFILE_PROPERTIES.AVERAGETIME, n);
      },
      _addVisit: function (e, t) {
        if (t > 0) {
          var i = e.averageTime * e.visits + t / 1e3;
          e.visits++, e.averageTime = Math.round(i / e.visits);
        }
        var E = this.blueConicClient.getCurrentDate().getTime();
        e.startdate = E, e.enddate = E;
      },
      _createNewVisitData: function () {
        var e = this.blueConicClient.getCurrentDate().getTime();
        return {
          startdate: e,
          enddate: e,
          averageTime: 0,
          visits: 0
        };
      },
      _setPropertyIfEmpty: function (e, t, i) {
        "undefined" == typeof e[t] && (e[t] = i);
      },
      _setVisitProperties: function () {
        this._addVisitedDomain(this._domain), this._increaseClickCount(), this._increaseVisits(this.PROFILE_PROPERTIES.VISITS, this.PROFILE_PROPERTIES.VISITCLICKS, this.PROFILE_PROPERTIES.LASTVISITDATE), this._channelId && this._increaseVisits(this.PROFILE_PROPERTIES_FOR_CHANNEL.VISITS, this.PROFILE_PROPERTIES_FOR_CHANNEL.VISITCLICKS, this.PROFILE_PROPERTIES_FOR_CHANNEL.LASTVISITDATE);
      },
      _increaseVisits: function (e, t, i) {
        e = e || this.PROFILE_PROPERTIES.VISITS, t = t || this.PROFILE_PROPERTIES.VISITCLICKS, i = i || this.PROFILE_PROPERTIES.LASTVISITDATE, this._isNewSession(e, i) ? (this._resetPageViewsCurrentSession(t), this._increaseSessionCount(e)) : this._increasePageViewsCurrentSession(t), this._setLastVisitDate(i, this.blueConicClient.getCurrentDate().getTime());
      },
      _setLastVisitDate: function (e, t) {
        e = e || this.PROFILE_PROPERTIES.LASTVISITDATE, this._profile.setValue(e, t);
      },
      _addVisitedDomain: function (e) {
        this._hasVisitedDomain(e) || this._profile.addValue(this.PROFILE_PROPERTIES.VISITEDSITES, e);
      },
      _hasVisitedDomain: function (e) {
        var t = this._profile.getValues(this.PROFILE_PROPERTIES.VISITEDSITES) || [];
        return t.length > 0 && -1 !== t.indexOf(e);
      },
      _increaseClickCount: function () {
        this._profile.incrementValue(this.PROFILE_PROPERTIES.CLICKCOUNT, 1), this._channelId && this._profile.incrementValue(this.PROFILE_PROPERTIES_FOR_CHANNEL.CLICKCOUNT, 1);
      },
      _isNewSession: function (e, t) {
        e = e || this.PROFILE_PROPERTIES.VISITS, t = t || this.PROFILE_PROPERTIES.LASTVISITDATE;
        var i = this._getNumberProperty(e),
          E = this._getNumberProperty(t) || 0;
        return 0 === i || this._isSessionExpired(E);
      },
      _isSessionExpired: function (e) {
        return this.blueConicClient.getCurrentDate().getTime() > e + this.CONSTANTS.THIRTY_MINUTES_IN_MS;
      },
      _resetPageViewsCurrentSession: function (e) {
        e = e || this.PROFILE_PROPERTIES.VISITCLICKS, this._profile.setValue(e, 1);
      },
      _increasePageViewsCurrentSession: function (e) {
        e = e || this.PROFILE_PROPERTIES.VISITCLICKS, this._profile.incrementValue(e, 1);
      },
      _increaseSessionCount: function (e) {
        e = e || this.PROFILE_PROPERTIES.VISITS, this._profile.incrementValue(e, 1);
      },
      _setOriginProperties: function () {
        var e = this._getOriginCount();
        e > 1 ? this._mergeOriginProperties() : 0 === e && this._resolveOriginProperties();
      },
      _getOriginCount: function () {
        var e = this._profile.getValues(this.PROFILE_PROPERTIES.ORIGIN_TYPE) || [],
          t = this._profile.getValues(this.PROFILE_PROPERTIES.ORIGIN_SOURCE) || [],
          i = this._profile.getValues(this.PROFILE_PROPERTIES.ORIGIN_DETAIL) || [];
        return Math.max(e.length, t.length, i.length);
      },
      _mergeOriginProperties: function () {
        this._mergePropertyToUnknown(this.PROFILE_PROPERTIES.ORIGIN_TYPE), this._mergePropertyToUnknown(this.PROFILE_PROPERTIES.ORIGIN_SOURCE), this._mergePropertyToUnknown(this.PROFILE_PROPERTIES.ORIGIN_DETAIL);
      },
      _mergePropertyToUnknown: function (e) {
        var t = this._profile.getValues(e) || [];
        this._profile.setValue(e, 1 === t.length ? t[0] : this.CONSTANTS.UNKNOWN);
      },
      _resolveOriginProperties: function () {
        this._isVisitorOriginFromWeb() ? this._resolveOriginForWebVisitor() : this._isVisitorOriginFromConnection() ? this._resolveOriginForProfileComingFromConnection() : this._isVisitorOriginFromMobileApp() && this._resolveOriginForMobileAppVisitor();
      },
      _isVisitorOriginFromWeb: function () {
        var e = this._profile.getValues(this.PROFILE_PROPERTIES.RECEIVED_FROM_SYSTEM) || [],
          t = this._profile.getValues(this.PROFILE_PROPERTIES.MOBILE_APP_ID) || [];
        return 0 === e.length && 0 === t.length;
      },
      _isVisitorOriginFromMobileApp: function () {
        var e = this._profile.getValues(this.PROFILE_PROPERTIES.RECEIVED_FROM_SYSTEM) || [],
          t = this._profile.getValues(this.PROFILE_PROPERTIES.MOBILE_APP_ID) || [],
          i = this._getNumberProperty(this.PROFILE_PROPERTIES.VISITS);
        return t.length > 0 && 0 === e.length && 0 === i;
      },
      _isVisitorOriginFromConnection: function () {
        var e = this._profile.getValues(this.PROFILE_PROPERTIES.RECEIVED_FROM_SYSTEM),
          t = this._profile.getValues(this.PROFILE_PROPERTIES.MOBILE_APP_ID),
          i = this._getNumberProperty(this.PROFILE_PROPERTIES.VISITS);
        return e && e.length > 0 && t && 0 === t.length && i <= 0;
      },
      _resolveOriginForWebVisitor: function () {
        var e = "",
          t = this._profile.getValues(this.PROFILE_PROPERTIES.VISITEDSITES) || [],
          i = this._profile.getValue(this.PROFILE_PROPERTIES.DEVICETYPE) || "",
          E = this._profile.getValues(this.PROFILE_PROPERTIES.ENTRYPAGE) || [];
        i && (e = "PC" === i ? this.ORIGIN_TYPES.WEB : this.ORIGIN_TYPES.MOBILE_WEB);
        var s = 1 === t.length ? t[0] : this.CONSTANTS.UNKNOWN,
          r = 1 === E.length ? E[0] : this.CONSTANTS.UNKNOWN;
        this._setOriginProfileProperties(e, s, r);
      },
      _resolveOriginForProfileComingFromConnection: function () {
        var e = this._profile.getValues(this.PROFILE_PROPERTIES.RECEIVED_FROM_SYSTEM) || [],
          t = this._profile.getValues(this.PROFILE_PROPERTIES.RECEIVED_FROM_CONNECTION) || [],
          i = 1 === e.length ? e[0] : this.CONSTANTS.UNKNOWN,
          E = 1 === t.length ? t[0] : this.CONSTANTS.UNKNOWN;
        this._setOriginProfileProperties(this.ORIGIN_TYPES.CONNECTION, i, E);
      },
      _resolveOriginForMobileAppVisitor: function () {
        var e = this._profile.getValues(this.PROFILE_PROPERTIES.MOBILE_APP_ID) || [],
          t = this._profile.getValues(this.PROFILE_PROPERTIES.MOBILE_APP_NAMEVERSION) || [],
          i = 1 === e.length ? e[0] : this.CONSTANTS.UNKNOWN,
          E = 1 === t.length ? t[0] : this.CONSTANTS.UNKNOWN;
        this._setOriginProfileProperties(this.ORIGIN_TYPES.MOBILE, i, E);
      },
      _setOriginProfileProperties: function (e, t, i) {
        this._profile.setValue(this.PROFILE_PROPERTIES.ORIGIN_TYPE, e), this._profile.setValue(this.PROFILE_PROPERTIES.ORIGIN_SOURCE, t), this._profile.setValue(this.PROFILE_PROPERTIES.ORIGIN_DETAIL, i);
      },
      _removeHashPart: function (e) {
        if (e) {
          var t = e.indexOf("#");
          if (-1 !== t) return e.substring(0, t);
        }
        return e;
      },
      HELPER: {
        search_engines: [["google\\.", "q"], ["bing\\.", "q"], ["search\\.yahoo\\.", "p"], ["search\\.aol\\.", "q"], ["duckduckgo\\.", "q"], ["baidu\\.", "wd"], ["ask\\.com", "q"], ["search\\.lycos\\.", "q"], ["dogpile\\.com", "q"]],
        substringToHash: function (e) {
          if (e) {
            var t = e.indexOf("#");
            if (-1 !== t) return e.substring(0, t);
          }
          return e;
        },
        decodeReferrer: function (e) {
          for (var t = new RegExp(""), i = 0; i < this.search_engines.length; i++) {
            var E = this.search_engines[i];
            t.compile("^http(s?)://(www\\.)?" + E[0], "i");
            var s = e.match(t);
            if (s) {
              var r;
              if (r = isNaN(E[1]) ? this._getParameterByName(e, E[1]) : s[E[1] + 1]) return r = decodeURIComponent(r), E.length > 2 && E[2] && (r = decodeURIComponent(r)), r = (r = (r = r.replace(/'|"/g, "")).split(/[\s,+.]+/)).filter(function (e) {
                return e;
              });
              break;
            }
          }
          return null;
        },
        _getParameterByName: function (e, t) {
          if (!t) return "";
          t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
          var i = new RegExp("[\\?&#]" + t + "=([^&#]*)").exec(e);
          return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "));
        }
      },
      _getNumberProperty: function (e) {
        var t = this._profile.getValue(e);
        if (!t) return 0;
        try {
          t = parseInt(t), isNaN(t) && (t = 0);
        } catch (i) {
          t = 0;
        }
        return t;
      }
    });
    var a = [];
    var i = 'listenerinteractiontype';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.3.2/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      LAST_VISIT_COOKIE_NAME: 'last_visit_bc',
      NEW_VISIT_PROPERTY: 'new_visit_bc',
      TOPIC_IDS_PROPERTY: '_eb_topic_ids_read_current_session',
      TOTAL_TOPIC_IDS_PROPERTY: '_eb_total_topic_ids_read_current_session',
      TOTAL_TOPIC_IDS_BY_SESSION_PROPERTY: '_eb_total_topic_ids_read_by_session',
      AVG_TOPIC_IDS_PER_SESSION_PROPERTY: '_eb_average_topic_ids_read_per_session',
      SESSION_TIMEOUT_MINUTES: 30,
      init: function (a, b) {
        this.blueConicClient = a, this.context = b, this.profile = a.profile.getProfile(), this.internalProperty = this.context.getInteractionId() + '_STH';
      },
      getPreloadProperties: function () {
        return [this.internalProperty, this.TOPIC_IDS_PROPERTY, this.TOTAL_TOPIC_IDS_PROPERTY, this.TOTAL_TOPIC_IDS_BY_SESSION_PROPERTY, this.AVG_TOPIC_IDS_PER_SESSION_PROPERTY];
      },
      onPrepare: function () {
        if (this.now = this.blueConicClient.getCurrentDate().getTime(), this.lastvisitdate = this.blueConicClient.util.cookie.getCookie(this.LAST_VISIT_COOKIE_NAME), this.lastvisitdate && !isNaN(parseInt(this.lastvisitdate))) {
          var a = new Date(parseInt(this.lastvisitdate));
          a.setMinutes(a.getMinutes() + this.SESSION_TIMEOUT_MINUTES), this.now > a ? (this.profile.setValue(this.NEW_VISIT_PROPERTY, 'true'), this) : this.profile.setValue(this.NEW_VISIT_PROPERTY, 'false');
        } else this.profile.setValue(this.NEW_VISIT_PROPERTY, 'true');
        this.blueConicClient.util.cookie.setCookie(this.LAST_VISIT_COOKIE_NAME, this.now);
      },
      onLoad: function () {
        'true' === this.profile.getValue(this.NEW_VISIT_PROPERTY) ? (this.blueConicClient.createEvent('new_visit'), 'undefined' != typeof Mendel && this._getCurrentTopic(!0)) : 'undefined' != typeof Mendel && this._getCurrentTopic(!1);
      },
      _getCurrentTopic: function (a) {
        this.isNew = a, setTimeout(function () {
          this.currentTopic = window.Mendel && window.Mendel.BC && window.Mendel.BC.topicId ? window.Mendel.BC.topicId : window.Mendel && window.Mendel.config && window.Mendel.config.currentTopic && window.Mendel.config.currentTopic.id ? window.Mendel.config.currentTopic.id : null, this._updateProfile(this.isNew, this.currentTopic);
        }.bind(this), 1e3);
      },
      _parseStoredValues: function (a) {
        var b = a.map(function (a) {
          return JSON.parse(a);
        });
        if (0 === b.length) return {
          sessions: []
        };
        if (1 === b.length) return b[0];
        var c = b[0].sessions;
        return b.slice(1).forEach(function (a) {
          c = this._aggregate(a.sessions, c);
        }, this), {
          sessions: c
        };
      },
      _aggregate: function (a, b) {
        var c = b;
        return a.forEach(function (a) {
          var b = c.find(function (b) {
            return b.t === a.t;
          });
          b ? b.v = b.v.concat(a.v).filter(function (a, b, c) {
            return c.indexOf(a) === b;
          }) : b = a, c = c.concat(b).filter(function (a, b, c) {
            return c.indexOf(a) === b;
          });
        }), c;
      },
      _updateProfile: function (a, b) {
        try {
          var c = this.profile.getValues(this.internalProperty),
            d = this._parseStoredValues(c);
          if (a) b ? this.profile.setValues(this.TOPIC_IDS_PROPERTY, [b]) : this.profile.setValues(this.TOPIC_IDS_PROPERTY, []), d.sessions.push({
            v: this.profile.getValues(this.TOPIC_IDS_PROPERTY),
            t: this.blueConicClient.getCurrentDate().getTime()
          }), this.profile.setValues(this.internalProperty, JSON.stringify(d)), this._avgValues(d);else if (b) {
            this.profile.addValue(this.TOPIC_IDS_PROPERTY, b);
            var e = d.sessions.pop();
            e.v.push(b), e.t = this.blueConicClient.getCurrentDate().getTime(), d.sessions.push(e), this.profile.setValues(this.internalProperty, JSON.stringify(d)), this._avgValues(d);
          }
          this.profile.setValue(this.TOTAL_TOPIC_IDS_PROPERTY, this.profile.getValues(this.TOPIC_IDS_PROPERTY).length), this.blueConicClient.profile.updateProfile();
        } catch (a) {
          this.blueConicClient.util.log('NEW VISIT LISTENER: Failed to merge viewed topicIds. Resetting session topicId history.'), this.profile.setValues(this.internalProperty, []), this.blueConicClient.profile.updateProfile();
        }
      },
      _avgValues: function (a) {
        for (var b = a.sessions.map(function (a) {
            return a.v.length;
          }), c = b.length, d = 0, e = 0; e < b.length; e++) d += parseInt(b[e]);
        if (0 < c && 0 < d) {
          var f = Math.round(d / c);
          this.profile.setValue(this.AVG_TOPIC_IDS_PER_SESSION_PROPERTY, f);
        }
        this.profile.setValues(this.TOTAL_TOPIC_IDS_BY_SESSION_PROPERTY, b);
      }
    });
    var a = [];
    var i = 'newvisitlistener';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/newvisitlistener/ts_93c028b683841557103c0af3f9612f80/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      open: !1,
      shown: !1,
      data: {},
      html: {
        "default": {
          trigger: "<h4>Trigger Title</h4>",
          content: "<p>Content</p>"
        },
        nl: {
          trigger: "<h4>Trigger titel</h4>",
          content: "<p>Inhoud</p>"
        }
      },
      opposites: {
        left: "right",
        right: "left",
        top: "bottom",
        bottom: "top"
      },
      init: function (e, t) {
        this.nrOfTries = 0, this.blueConicClient = e, this.context = t, this._viewEventThrown = !1, this.parameters = this.context.getParameters(), this.baseURL = this.blueConicClient.getBaseURL(this.context.getInteractionTypeId()), this.inlineCss = null, this.customCssUrls = [], this.customJsUrls = [], this._timestamp = null, this._observer = null, this._eventListenerFunction = null, this.preventTriggerClick = !1, this.isInEditMode = this.blueConicClient.isInEditMode(), this.isInEditMode && this.blueConicClient.event.subscribe("slideout.toggle", this, function () {
          this.open || this._toggleSlideOut();
        });
      },
      onMessageReceived: function (e) {
        this.blueConicClient.event.publish("slideout.messageReceived", e);
      },
      getPreloadProperties: function () {
        for (var e, t = this.context.getParameters().content + "", i = /data-bc-preload="([^"]*)"/g, n = []; null !== (e = i.exec(t));) for (var o = e[1].split(","), r = 0; r < o.length; r++) n.push(o[r]);
        return n || [];
      },
      onLoad: function (e) {
        "function" != typeof e && (e = function () {}), window.bc = window.bc || {}, window.bc.jQuery = this.jQuery, window.bc.$ = this.jQuery, this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange, this, function () {
          if (this.shown) {
            document.querySelector(".bcSlideOut").remove();
            var e = this.blueConicClient.util.array.indexOfArray(this.blueConicClient._renderedInteractions, this.context.getInteractionId());
            this.blueConicClient._renderedInteractions.splice(e, 1), this.shown = !1, this.open = !1;
          }
        });
        var t = this.blueConicClient._renderedInteractions || [];
        if (-1 === this.blueConicClient.util.array.indexOfArray(t, this.context.getInteractionId())) {
          t.push(this.context.getInteractionId()), this.blueConicClient._renderedInteractions = t;
          var i = this,
            n = this.getParameter("content"),
            o = "frontend/src/css/slideout" + (n && -1 !== n.indexOf("bcSlideOutTemplate") ? "_clean" : "") + ".css",
            r = document.createElement("link");
          r.rel = "stylesheet", r.type = "text/css", r.href = this.baseURL + o, this.template = this.getParameter("template"), r.addEventListener("load", function () {
            i.handleStyling(function (t) {
              if (t && (console.error(t.message), !i.isInEditMode)) return i._removeUrls(), e(t.message);
              i.handleJavascript(function (t) {
                return t && (console.error(t.message), !i.isInEditMode) ? (i._removeUrls(), e(t.message)) : (i.loadSlideOut(), e());
              });
            });
          }), document.body.appendChild(r);
        }
      },
      loadSlideOut: function () {
        var e = this.context.getParameters(),
          t = this;
        if (this.addContent(), this.positionDivs(), document.querySelector(".bcSlideOut").style.visibility = "hidden", this.isInEditMode) t._showSlideOut();else {
          var i, n;
          i = e.selected_when && 0 !== e.selected_when.length ? e.selected_when : ["onPageLoad"], n = e.scroll_depth && e.scroll_depth[0] && !isNaN(e.scroll_depth[0]) ? parseInt(e.scroll_depth[0]) : 0;
          for (var o = this.getParameter("click_selector"), r = this.getParameter("content_condition"), s = 0; s < i.length; s++) switch (i[s]) {
            case "click_selector":
              this._addClickTriggerBindings(o);
              break;
            case "content_condition":
              this._addContentPolling(r);
              break;
            case "scroll_depth":
              this._addScrollBinding(n);
              break;
            case "triggerOn":
              this._addScrollOn(t);
              break;
            default:
              t._checkDelayBeforeTrigger();
          }
          this._addCloseEventHandler();
        }
      },
      _addCloseEventHandler: function () {
        this.blueConicClient.event.subscribe("closeoverlay", this, function (e, t) {
          t instanceof Array && t[0] === this.context.getInteractionId() && this.open && this._toggleSlideOut();
        });
      },
      _addScrollOn: function (e) {
        window.addEventListener("scroll", function () {
          e._checkDelayBeforeTrigger();
        });
      },
      _getScrollPercent: function () {
        return document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      },
      _checkScrollCondition: function (e) {
        this._getScrollPercent() >= e && this._checkDelayBeforeTrigger();
      },
      _addScrollBinding: function (e) {
        this._checkScrollCondition(e), document.addEventListener("scroll", function () {
          this._checkScrollCondition(e);
        }.bind(this));
      },
      _addClickTriggerBindings: function (e) {
        try {
          var t = this.jQuery(e);
          t.length > 0 ? t.off("click.slideout").on("click.slideout", this.jQuery.proxy(function () {
            this._checkDelayBeforeTrigger();
          }, this)) : this.blueConicClient.position.subscribe(e, this, this.jQuery.proxy(this._addClickTriggerBindings, this, e));
        } catch (i) {}
      },
      _addContentPolling: function (e) {
        this._checkContentCondition(e);
        var t = this,
          i = document.body;
        if (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver) this._observer = new MutationObserver(function () {
          t._observeContentChanges(e);
        }), this._observer.observe(i, {
          childList: !0,
          subtree: !0
        });else if (window.addEventListener) this._eventListenerFunction = function () {
          t._observeContentChanges(e);
        }, i.addEventListener("DOMNodeInserted", this._eventListenerFunction, !1);else var n = setInterval(function () {
          t.shown ? clearInterval(n) : t._checkContentCondition(e);
        }, 500);
      },
      _observeContentChanges: function (e) {
        if (this.shown) {
          this._observer ? this._observer.disconnect() : document.getElementsByTagName("body")[0].removeEventListener("DOMNodeInserted", this._eventListenerFunction, !1);
        } else {
          var t = this,
            i = new Date().getTime();
          this._timestamp = i, setTimeout(function () {
            t._timestamp !== i || t.shown || t._checkContentCondition(e);
          }, 250);
        }
      },
      _checkContentCondition: function (e) {
        this.jQuery(e).length > 0 && this.jQuery(e).html() && this.jQuery(e).html().length > 0 && this._checkDelayBeforeTrigger();
      },
      addContent: function () {
        var e = this.jQuery,
          t = this.getParameter("content"),
          i = document.querySelector(".bcSlideOut");
        i && i.parentNode.removeChild(i), t && -1 !== t.indexOf("<body></body>") && (t = "");
        var n = "nl" === this.context.getLocale() ? "nl" : "default";
        t || (t = '  <div class="bcSlideOutTrigger">' + this.html[n].trigger + "</div>", t += '  <div class="bcSlideOutContent">' + this.html[n].content + "</div>"), this.template ? (this.selectedTemplate = this.template, t = '<div class="bcSlideOut bcTemplateContent">' + t + "</div>") : t = t.indexOf("bcSlideOutTrigger") > -1 ? '<div class="bcSlideOut">' + t + "</div>" : '<div class="bcSlideOut"><div class="bcSlideOutTrigger">' + this.html[n].trigger + '</div>  <div class="bcSlideOutContent">' + t + "</div></div>";
        var o = e(t);
        0 === o.find(".bcSlideOutContent").length && 0 === o.find(".bcSlideOutTrigger").length && (o = e('<div class="bcSlideOut"><div class="bcSlideOutTrigger">' + this.html[n].trigger + '</div><div class="bcSlideOutContent">' + o.html() + "</div></div>"));
        try {
          o.appendTo(e("body")), this.emptyElementsWithAttribute(e(".bcSlideOut").get(0), "div", "data-bc-external"), this.handleComplexElements(e(".bcSlideOut").get(0));
        } catch (r) {
          this.isInEditMode && console.error("Error caught: " + r);
        }
        this._defineClickHandlers();
      },
      handleComplexElements: function (e) {
        for (var t = this.getElementsWithAttribute(e, "div", "data-bc-pluginid"), i = 0; i < t.length; i++) {
          var n = t[i],
            o = n.getAttribute("data-bc-pluginid"),
            r = n.getAttribute("data-bc-config");
          if (r) try {
            var s = r.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
            r = this.blueConicClient.json.parse(s);
          } catch (l) {
            r = null;
          }
          this.blueConicClient.event.publish("bcComplexObject", {
            plugin: o,
            config: r,
            node: n,
            interactionId: this.context.getInteractionId()
          }), this.isInEditMode || (n.removeAttribute("data-bc-pluginid"), n.removeAttribute("data-bc-config"));
        }
      },
      emptyElementsWithAttribute: function (e, t, i) {
        for (var n = this.getElementsWithAttribute(e, t, i), o = 0; o < n.length; o++) {
          n[o].innerHTML = "";
        }
      },
      getElementsWithAttribute: function (e, t, i) {
        for (var n = [], o = e.getElementsByTagName(t), r = 0, s = o.length; r < s; r++) {
          var l = o[r];
          l.getAttribute(i) && n.push(l);
        }
        return n;
      },
      positionDivs: function () {
        var e = this.jQuery,
          t = !!this.getParameter("verticalOrientation") && this.getParameter("verticalOrientation");
        this._positionSlideOut(), this._setTriggerOrientation(e, t), this._setSlideOutLocationClass(e);
      },
      _positionSlideOut: function () {
        var e = this.getParameter("version"),
          t = this.getParameter("location") || (e ? "bottom" : "right"),
          i = this.getParameter("pixelsFrom") ? this.getParameter("pixelsFrom") : "",
          n = this.getParameter("locationFrom") ? this.getParameter("locationFrom") : "left_or_top";
        if (this.getParameter("locationFrom") || this.getParameter("version") || (n = "right_or_bottom"), i || 0 === i) n = "left" === t || "right" === t ? "left_or_top" === n ? "top" : "bottom" : "left_or_top" === n ? "left" : "right", document.querySelector(".bcSlideOut").style[n] = i + "px";else {
          var o = document.querySelector(".bcSlideOutContent").getBoundingClientRect();
          if ("left" === t || "right" === t) {
            var r = window.innerHeight || document.documentElement.clientHeight,
              s = o.height || o.bottom - o.top;
            document.querySelector(".bcSlideOut").style.top = Math.max((r - s) / 2, 0) + "px";
          } else {
            var l = window.innerWidth || document.documentElement.clientWidth,
              c = o.width || o.right - o.left;
            document.querySelector(".bcSlideOut").style.left = Math.max((l - c) / 2, 0) + "px";
          }
        }
      },
      _setSlideOutLocationClass: function (e) {
        var t = this.getParameter("version"),
          i = this.getParameter("location") || (t ? "bottom" : "right");
        "left" === i ? e(".bcSlideOut").removeClass("bcRight").removeClass("bcTop").removeClass("bcBottom").addClass("bcLeft") : "bottom" === i ? e(".bcSlideOut").removeClass("bcRight").removeClass("bcTop").removeClass("bcLeft").addClass("bcBottom") : "top" === i ? e(".bcSlideOut").removeClass("bcRight").removeClass("bcBottom").removeClass("bcLeft").addClass("bcTop") : e(".bcSlideOut").removeClass("bcLeft").removeClass("bcTop").removeClass("bcBottom").addClass("bcRight");
      },
      _setTriggerOrientation: function (e, t) {
        t && "true" === t ? e(".bcSlideOut").addClass("bcVerticalOrientation") : e(".bcSlideOut").removeClass("bcVerticalOrientation");
      },
      _checkDelayBeforeTrigger: function () {
        var e = this.context.getParameters(),
          t = e.delay && e.delay[0] && !isNaN(e.delay[0]) ? 1e3 * parseInt(e.delay[0]) : 0;
        t > 0 ? window.setTimeout(function () {
          this._showSlideOut();
        }.bind(this), t) : this._showSlideOut();
      },
      onSave: function () {
        return document.querySelector(".bcSlideOut").innerHTML;
      },
      handleStyling: function (e) {
        var t = [],
          i = this.getParameter("styling_css");
        i && (this.customCssUrls.push(i), t.push(i));
        var n = this.getParameter("styling_css_inline");
        if (n) {
          var o = document.createElement("style");
          o.appendChild(document.createTextNode(n)), document.head.appendChild(o);
        }
        this._loadCss(t, e);
      },
      _loadCss: function (e, t) {
        var i = (e = e || []).length,
          n = 0,
          o = [];
        if (this.errorList = null, void 0 === t && (t = function () {}), 0 === i) return t();
        function urlLoaded(e) {
          if (++n >= i) return o.length > 0 ? t({
            message: "Error occured when loading the file " + e,
            error: o
          }) : t();
        }
        e.forEach(function (e) {
          if (document.querySelector('link[href="' + e + '"]')) urlLoaded();else {
            var t = document.createElement("link");
            t.setAttribute("href", e), t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.onload = urlLoaded, t.onerror = function (t) {
              o.push(t), urlLoaded(e);
            }, document.head.appendChild(t);
          }
        });
      },
      _loadJs: function (e, t) {
        var i = (e = e || []).length,
          n = 0,
          o = [];
        if (this.errorList = null, void 0 === t && (t = function () {}), 0 === i) return t();
        function urlLoaded(e) {
          if (++n >= i) return o.length > 0 ? t({
            message: "Error occured when loading the file " + e,
            error: o
          }) : t();
        }
        e.forEach(function (e) {
          if (document.querySelector('script[src="' + e + '"]')) urlLoaded();else {
            var t = document.createElement("script");
            t.setAttribute("src", e), t.setAttribute("type", "text/javascript"), t.onload = urlLoaded, t.onerror = function (t) {
              o.push(t), urlLoaded(e);
            }, document.head.appendChild(t);
          }
        });
      },
      _removeUrls: function () {
        this.customCssUrls.forEach(function (e) {
          e && document.querySelector('link[href="' + e + '"]').remove();
        }), this.customJsUrls.forEach(function (e) {
          e && document.querySelector('script[src="' + e + '"]').remove();
        });
      },
      handleJavascript: function (e) {
        var t = this.getParameters("javascript_urls");
        this.customJsUrls = t, null === this.customJsUrls && (this.customJsUrls = []), this._loadJs(this.customJsUrls, e);
      },
      _defineClickHandlers: function () {
        var e = this;
        document.querySelector(".bcSlideOutTrigger").addEventListener("click", function () {
          e.preventTriggerClick || (e.isInEditMode ? setTimeout(function () {
            e._toggleSlideOut();
          }, 200) : e._toggleSlideOut());
        });
      },
      openSlideOut: function () {
        this.open || this._toggleSlideOut();
        var e = document.querySelector(".bcSlideOut");
        e.style.visibility = "visible", e.className = e.className.split(" ").concat(["bcSlideOutOpen"]).join(" ");
      },
      _toggleSlideOut: function () {
        var e = this,
          t = document.querySelector(".bcSlideOut");
        this.isInEditMode || (t.className = t.className.split(" ").filter(function (e) {
          return "bcAnimateSlideOut" !== e;
        }).join(" "), t.className = t.className.split(" ").concat(["bcAnimateSlideOut"]).join(" ")), e.open ? t.className = t.className.split(" ").filter(function (e) {
          return "bcSlideOutOpen" !== e;
        }).join(" ") : t.className = t.className.split(" ").concat(["bcSlideOutOpen"]).join(" "), e.open = !e.open;
      },
      _showSlideOut: function () {
        var e = this,
          t = document.querySelector(".bcSlideOutContent");
        if (0 === parseFloat(getComputedStyle(t, null).width.replace("px", ""))) {
          if (this.nrOfTries > 10) return;
          return this.nrOfTries++, void setTimeout(function () {
            e._showSlideOut();
          }, 500);
        }
        if (!this.shown) {
          this.isInEditMode || this._viewEventThrown || (this._viewEventThrown = !0, this.blueConicClient.createEvent("VIEW", this.context.getInteractionId())), this._positionSlideOut(), window.addEventListener("resize", function () {
            this.positionDivs();
          }.bind(this)), document.querySelector(".bcSlideOut").style.visibility = "visible";
          var i = this.getParameter("click_event_selector");
          if (i) {
            this.jQuery("body").one("click", i, function (e) {
              this.lastClickEvent && this.lastClickEvent.originalEvent === e.originalEvent || this._logClickEvent(e);
            }.bind(this));
            try {
              this.jQuery(i).one("click", function (e) {
                this.lastClickEvent = e, this._logClickEvent(e);
              }.bind(this));
            } catch (r) {}
          }
          var n = e.getParameter("javascript");
          if (n && !e.isInEditMode) {
            n = n.replace(/(^|\W)blueConicVariantId(\W|$)/g, '$1"' + e.context.getInteractionId() + '"$2');
            var o = document.createElement("script");
            o.type = "text/javascript", o.appendChild(document.createTextNode(n));
            try {
              document.head.appendChild(o);
            } catch (s) {
              console.error(s);
            }
          }
          this.shown = !0, this.isInEditMode && this.blueConicClient.event.publish("slideout.interactionLoaded", {
            interaction: this
          });
        }
      },
      _logClickEvent: function (e) {
        e && e.originalEvent && e.originalEvent._blueConicLoggedClickEvent === this.context.getInteractionId() || e && e.target && e.target.pathname && e.target.hostname && 0 === e.target.pathname.indexOf("/s/") && -1 !== e.target.hostname.indexOf("blueconic") || (e.originalEvent && (e.originalEvent._blueConicLoggedClickEvent = this.context.getInteractionId()), this.blueConicClient.createEvent("CLICK", this.context.getInteractionId()));
      },
      getParameter: function (e) {
        return this.parameters[e] && this.parameters[e][0] ? this.parameters[e][0] : null;
      },
      getParameters: function (e) {
        return this.parameters[e] || null;
      }
    });
    var a = [];
    var i = 'slideout';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.3.1/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.3.1/'
    }, {
      id: 'html',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'html/1.0.10/'
    }, {
      id: 'number',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'number/1.0.2/'
    }, {
      id: 'string',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'string/1.0.1/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      open: !1,
      data: {},
      nrOfTries: 0,
      closeButtonWidth: 10,
      borderWidth: 1,
      BASE_CSS_ID_PREFIX: "bcBaseStyle_",
      INLINE_CSS_ID_PREFIX: "bcInlineStyle_",
      EXTERNAL_CSS_ID_PREFIX: "bcExternalStyle_",
      html: {
        nl: {
          content: "<p>Inhoud</p>"
        },
        "default": {
          content: "<p>Content</p>"
        }
      },
      init: function (e, t) {
        this.blueConicClient = e, this.context = t, this.parameters = this.context.getParameters(), this._variantId = this.context.getInteractionId(), this._viewEventThrown = !1, this._manuallyClosed = !1, this.baseURL = this.blueConicClient.getBaseURL(this.context.getInteractionTypeId()) + "frontend/src/", this.customCssUrls = [], this.customJsUrls = [], this.inlineCss = null, this.inlineJs = null, this._timestamp = null, this._observer = null, this._eventListenerFunction = null, this.isInEditMode = this.blueConicClient.isInEditMode(), this.clickTrigger = !1, this.blueConicClient._renderedInteractions = this.blueConicClient._renderedInteractions || [], this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange, this, function () {
          if (this.open) {
            this.domUtils.removeNode(this._getToasterNode()), this._removeToasterStyling();
            var e = this.blueConicClient.util.array.indexOfArray(this.blueConicClient._renderedInteractions, this.context.getInteractionId());
            this.blueConicClient._renderedInteractions.splice(e, 1), this.open = !1;
          }
        });
      },
      getPreloadProperties: function () {
        for (var e, t = this.context.getParameters().content + "", i = /data-bc-preload="([^"]*)"/g, s = []; null !== (e = i.exec(t));) for (var o = e[1].split(","), n = 0; n < o.length; n++) s.push(o[n]);
        return s || [];
      },
      onMessageReceived: function (e) {
        this.blueConicClient.event.publish("toaster.messageReceived", e);
      },
      onSave: function () {
        return this._getNodeWithinToaster(".bcToasterContent")[0].innerHTML;
      },
      onLoad: function (e) {
        "function" != typeof e && (e = function () {}), window.bc = window.bc || {}, window.bc.jQuery = this.jQuery, window.bc.$ = this.jQuery, this.domUtils = window.bc.BlueConicDomUtilities;
        var t = this,
          i = this.getParameter("content"),
          s = i && -1 !== i.indexOf("bcToasterTemplate") ? "_clean" : "",
          o = this.getParameter("version"),
          n = "";
        n = s || "3" !== o ? "css/toaster" + s : "css/toaster_v3", n += ".css";
        var r = this.domUtils.createNodeFromHtml('<link type="text/css" id="' + this.BASE_CSS_ID_PREFIX + this._variantId + '" href="' + this.baseURL + n + '" rel="stylesheet" />'),
          a = this.getParameter("template");
        this.template = a, r.addEventListener("load", function () {
          t.handleStyling(t.getParameter("close_icon"), t.getParameter("close_icon_hover"), function (i) {
            if (i && (console.error(i.message), !t.isInEditMode)) return t._removeUrls(), e(i.message);
            t.handleJavascript(function (i) {
              return i && (console.error(i.message), !t.isInEditMode) ? (t._removeUrls(), e(i.message)) : (t.loadToaster(), e());
            });
          });
        }), document.head.appendChild(r);
      },
      loadToaster: function () {
        var e = this.context.getParameters();
        if (!this.domUtils.nodeHasClassName(this._getToasterNode(), "bcToasterOpen")) {
          this._getToasterNode() && this.domUtils.removeNode(this._getToasterNode());
          var t = this.getParameter("close_icon");
          t && (this._closeIcon = t);
          var i = this.getParameter("close_icon_hover");
          i && (this._closeIconHover = i);
          var s = this;
          if (this._addContent(e, this.jQuery), this._getNodeWithinToaster(".bcClose")[0].addEventListener("click", function () {
            s._manuallyClosed = !0, s._hideToaster();
          }), this.emptyElementsWithAttribute(this._getToasterNode(), "div", "data-bc-external"), this.handleComplexElements(this._getToasterNode()), this.positionDivs(), this.isInEditMode) s._showToaster();else {
            var o = [],
              n = 0,
              r = this.getParameter("triggerWhen");
            r ? (n = 100, o.push(this._convertWhenSettingPreviousToasterVersion(r))) : (o = e.selected_when && 0 !== e.selected_when.length ? e.selected_when : ["onPageLoad"], n = e.scroll_depth && e.scroll_depth[0] && !isNaN(e.scroll_depth[0]) ? parseInt(e.scroll_depth[0]) : 0);
            for (var a = this.getParameter("click_selector"), l = this.getParameter("content_condition"), c = 0; c < o.length; c++) switch (o[c]) {
              case "click_selector":
                this._addClickTriggerBindings(a);
                break;
              case "content_condition":
                this._addContentPolling(l);
                break;
              case "scroll_depth":
                this._addScrollBinding(n);
                break;
              case "triggerOn":
                this._addScrollOn(s);
                break;
              default:
                s._checkDelayBeforeTrigger();
            }
            this._setupFrontEndBindings();
          }
        }
      },
      _setupFrontEndBindings: function () {
        var e = this,
          t = document.querySelectorAll(".bcToasterDontShowAgainLink"),
          i = document.querySelectorAll(".bcToasterCloseButton");
        if (t.length > 0) {
          var linksClickHandler = function (e) {
            e.preventDefault(), this.blueConicClient.doNotShowAgain(this.context.getInteractionId()), this._hideToaster();
          };
          Array.prototype.forEach.call(t, function (t) {
            t.removeEventListener("click", linksClickHandler), t.addEventListener("click", linksClickHandler.bind(e));
          });
        }
        if (i.length > 0) {
          var buttonClickHandler = function () {
            e._hideToaster();
          };
          Array.prototype.forEach.call(i, function (t) {
            t.removeEventListener("click", buttonClickHandler), t.addEventListener("click", buttonClickHandler.bind(e));
          });
        }
        this._addCloseEventHandler();
      },
      _convertWhenSettingPreviousToasterVersion: function (e) {
        switch (e) {
          case "scroll":
            return "triggerOn";
          case "reachedBottom":
            return "scroll_depth";
          default:
            return "onPageLoad";
        }
      },
      _addCloseEventHandler: function () {
        this.blueConicClient.event.subscribe("closeoverlay", this, function (e, t) {
          t instanceof Array && t[0] === this.context.getInteractionId() && this._hideToaster();
        });
      },
      _addScrollOn: function (e) {
        window.addEventListener("scroll", function () {
          e._checkDelayBeforeTrigger();
        });
      },
      _checkScrollCondition: function (e) {
        this.jQuery(window).scrollTop() / (this.jQuery(document).height() - window.innerHeight) * 100 >= e && this._checkDelayBeforeTrigger();
      },
      _addScrollBinding: function (e) {
        this._checkScrollCondition(e);
        window.addEventListener("scroll", function () {
          this._checkScrollCondition(e);
        }.bind(this));
      },
      _addClickTriggerBindings: function (e) {
        try {
          var t = this.jQuery(e);
          if (this.clickTrigger = !0, t.length > 0) {
            t.off("click").on("click", function () {
              this._getToasterNode() ? this._checkDelayBeforeTrigger(!0) : this.open || this._setupToasterBeforeToShow();
            }.bind(this));
          } else this.blueConicClient.position.subscribe(e, this, this._addClickTriggerBindings.bind(this, e));
        } catch (i) {}
      },
      _setupToasterBeforeToShow: function () {
        this.handleStyling(this.getParameter("close_icon"), this.getParameter("close_icon_hover"), function () {}), this.handleJavascript(function () {}), this._addContent(null, this.jQuery);
        var e = this;
        Array.prototype.forEach.call(this._getNodeWithinToaster(".bcClose"), function (t) {
          t.addEventListener("click", function () {
            e._hideToaster();
          });
        }), this.clickTrigger = !0, this._checkDelayBeforeTrigger();
      },
      _getNodeWithinToaster: function (e) {
        try {
          var t = this._getToasterNode();
          if (t) return t.querySelectorAll(e);
        } catch (i) {
          return void console.error(i);
        }
      },
      _isToasterContentWidthZero: function () {
        return 0 === parseFloat(getComputedStyle(this._getNodeWithinToaster(".bcToasterContent")[0], null).width.replace("px", ""));
      },
      _getToasterNode: function () {
        try {
          return document.getElementById(this._variantId);
        } catch (e) {
          return void console.error(e);
        }
      },
      _addContentPolling: function (e) {
        this._checkContentCondition(e);
        var t = this,
          i = document.getElementsByTagName("body")[0];
        if (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver) this._observer = new MutationObserver(function () {
          t._observeContentChanges(e);
        }), this._observer.observe(i, {
          childList: !0,
          subtree: !0
        });else if (window.addEventListener) this._eventListenerFunction = function () {
          t._observeContentChanges(e);
        }, i.addEventListener("DOMNodeInserted", this._eventListenerFunction, !1);else var s = setInterval(function () {
          t.open ? clearInterval(s) : t._checkContentCondition(e);
        }, 500);
      },
      _observeContentChanges: function (e) {
        if (this.open) {
          this._observer ? this._observer.disconnect() : document.getElementsByTagName("body")[0].removeEventListener("DOMNodeInserted", this._eventListenerFunction, !1);
        } else {
          var t = this,
            i = new Date().getTime();
          this._timestamp = i, setTimeout(function () {
            t._timestamp !== i || t.open || t._checkContentCondition(e);
          }, 250);
        }
      },
      _checkContentCondition: function (e) {
        var t = this.jQuery(e);
        t.length > 0 && t.html() && t.html().length > 0 && this._checkDelayBeforeTrigger();
      },
      _addContent: function (e, t) {
        var i = this.getParameter("content");
        if (i && -1 !== i.indexOf("<body></body>") && (i = ""), !i) {
          var s = "nl" === this.context.getLocale() ? "nl" : "default";
          i = this.html[s].content;
        }
        var o = t(i = this.template ? '<div class="bcToaster" id="' + this._variantId + '" style="visibility:hidden;"><div class="bcCloseWrapper"><div class="bcClose"><div></div></div></div><div class="bcToasterContent bcTemplateContent">' + i + "</div></div>" : '<div class="bcToaster" id="' + this._variantId + '" style="visibility:hidden;"><div class="bcCloseWrapper"><div class="bcClose"><div></div></div></div><div class="bcToasterContent">' + i + "</div></div>"),
          n = this.getParameter("close_icon");
        "true" === this.getParameter("custom_close") && n ? this.domUtils.removeClassNames(o.get(0), ["bcDefaultClose"]) : this.domUtils.appendClassNames(o.get(0), ["bcDefaultClose"]);
        try {
          o.appendTo(t("body"));
        } catch (r) {
          this.isInEditMode && console.error("Error caught: " + r);
        }
      },
      handleComplexElements: function (e) {
        for (var t = this.getElementsWithAttribute(e, "div", "data-bc-pluginid"), i = 0; i < t.length; i++) {
          var s = t[i],
            o = s.getAttribute("data-bc-pluginid"),
            n = s.getAttribute("data-bc-config");
          if (n) try {
            var r = n.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
            n = this.blueConicClient.json.parse(r);
          } catch (a) {
            n = null;
          }
          this.blueConicClient.event.publish("bcComplexObject", {
            plugin: o,
            config: n,
            node: s,
            interactionId: this.context.getInteractionId()
          }), this.isInEditMode || (s.removeAttribute("data-bc-pluginid"), s.removeAttribute("data-bc-config"));
        }
      },
      emptyElementsWithAttribute: function (e, t, i) {
        for (var s = this.getElementsWithAttribute(e, t, i), o = 0, n = s.length; o < n; o++) {
          s[o].innerHTML = "";
        }
      },
      getElementsWithAttribute: function (e, t, i) {
        for (var s = [], o = e.getElementsByTagName(t), n = 0, r = o.length; n < r; n++) {
          var a = o[n];
          a.getAttribute(i) && s.push(a);
        }
        return s;
      },
      _positionFromPerpendicularEdge: function () {
        var e = this.getParameter("location") || "right",
          t = this.getParameter("pixelsFrom") ? this.getParameter("pixelsFrom") : "",
          i = this.getParameter("locationFrom") ? this.getParameter("locationFrom") : "left_or_top";
        if (this.getParameter("locationFrom") || this.getParameter("version") || (i = "right_or_bottom"), t || 0 === t) {
          var s = "left" === e || "right" === e ? "left_or_top" === i ? "top" : "bottom" : "left_or_top" === i ? "left" : "right";
          this._getToasterNode().style[s] = t + "px";
        } else {
          var o = this._getNodeWithinToaster(".bcToasterContent")[0].getBoundingClientRect();
          if ("left" === e || "right" === e) {
            var n = window.innerHeight || document.documentElement.clientHeight,
              r = o.height || o.bottom - o.top;
            this._getToasterNode().style.top = Math.max((n - r) / 2, 0) + "px";
          } else {
            var a = window.innerWidth || document.documentElement.clientWidth,
              l = o.width || o.right - o.left;
            this._getToasterNode().style.left = Math.max((a - l) / 2, 0) + "px";
          }
        }
        this._getToasterNode().style[e] = "0px";
      },
      positionDivs: function () {
        var e = this.getParameter("location") || "right",
          t = this._getShowClose();
        this._positionFromPerpendicularEdge(), "left" === e ? (this.domUtils.removeClassNames(this._getToasterNode(), ["bcRight", "bcTop", "bcBottom"]), this.domUtils.appendClassNames(this._getToasterNode(), ["bcLeft"])) : "right" === e ? (this.domUtils.removeClassNames(this._getToasterNode(), ["bcLeft", "bcTop", "bcBottom"]), this.domUtils.appendClassNames(this._getToasterNode(), ["bcRight"])) : "top" === e ? (this._getNodeWithinToaster(".bcToasterContent")[0].insertAdjacentElement("afterend", document.querySelector(".bcToaster .bcCloseWrapper")), this.domUtils.removeClassNames(this._getToasterNode(), ["bcRight", "bcLeft", "bcBottom"]), this.domUtils.appendClassNames(this._getToasterNode(), ["bcTop"])) : (this.domUtils.removeClassNames(this._getToasterNode(), ["bcRight", "bcLeft", "bcTop"]), this.domUtils.appendClassNames(this._getToasterNode(), ["bcBottom"])), t ? this.domUtils.appendClassNames(this._getToasterNode(), ["bcShowClose"]) : this.domUtils.removeClassNames(this._getToasterNode(), ["bcShowClose"]);
      },
      handleStyling: function (e, t, i) {
        var s = "",
          o = [];
        if (this._getShowClose() ? this.domUtils.appendClassNames(this._getToasterNode(), ["bcShowClose"]) : this.domUtils.removeClassNames(this._getToasterNode(), ["bcShowClose"]), "true" === this.getParameter("custom_close") && e) {
          this.domUtils.removeClassNames(this._getToasterNode(), ["bcDefaultClose"]), s += ".bcToaster .bcClose > div { background-image: none;}";
          var n = ".bcToaster .bcClose {background-image: url('" + e + "');background-repeat: no-repeat;background-color: transparent;",
            r = ".bcToaster .bcClose:hover {background-image: url('" + t + "');";
          "3" === this.getParameter("version") ? (s += n + "background-position: center center;background-size: contain;}", t && (s += r + "}")) : (s += n + "}", t ? s += r + "background-position: 0px 0px;}" : document.querySelectorAll(".bcToaster .bcClose:hover")[0].style.backgroundPosition = "");
        } else this.domUtils.appendClassNames(this._getToasterNode(), ["bcDefaultClose"]);
        var a = this.getParameter("close_position"),
          l = this.getParameter("close_padding");
        s += this._addClosePositionStyling(a, l);
        var c = this.getParameter("styling_css");
        c && (this.stylingUrl = c, this.customCssUrls.push(c), o.push(c));
        var h = this.getParameter("styling_css_inline");
        h && (s += h.replace(/&#xd;/gi, "")), s && (this.inlineCss = this.domUtils.createNodeFromHtml("<style id='" + this.INLINE_CSS_ID_PREFIX + this._variantId + "'>" + s + "</style>"), document.head.appendChild(this.inlineCss)), this._loadCss(o, i);
      },
      _loadCss: function (e, t) {
        var i = (e = e || []).length,
          s = 0,
          o = [];
        if (this.errorList = null, void 0 === t && (t = function () {}), 0 === i) return t();
        function urlLoaded(e) {
          if (++s >= i) return o.length > 0 ? t({
            message: "Error occured when loading the file " + e,
            error: o
          }) : t();
        }
        e.forEach(function (e) {
          if (document.querySelector('link[href="' + e + '"]')) urlLoaded();else {
            var t = document.createElement("link");
            t.setAttribute("href", e), t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.onload = urlLoaded, t.onerror = function (t) {
              o.push(t), urlLoaded(e);
            }, document.head.appendChild(t);
          }
        });
      },
      _loadJs: function (e, t) {
        var i = (e = e || []).length,
          s = 0,
          o = [];
        if (this.errorList = null, void 0 === t && (t = function () {}), 0 === i) return t();
        function urlLoaded(e) {
          if (++s >= i) return o.length > 0 ? t({
            message: "Error occured when loading the file " + e,
            error: o
          }) : t();
        }
        e.forEach(function (e) {
          if (document.querySelector('script[src="' + e + '"]')) urlLoaded();else {
            var t = document.createElement("script");
            t.setAttribute("src", e), t.setAttribute("type", "text/javascript"), t.onload = urlLoaded, t.onerror = function (t) {
              o.push(t), urlLoaded(e);
            }, document.head.appendChild(t);
          }
        });
      },
      _removeUrls: function () {
        var e = this;
        this.customCssUrls.forEach(function (t) {
          t && e.domUtils.removeNode(document.querySelector('link[href="' + t + '"]'));
        }), this.customJsUrls.forEach(function (t) {
          t && e.domUtils.removeNode(document.querySelector('script[src="' + t + '"]'));
        });
      },
      handleJavascript: function (e) {
        var t = this.getParameters("javascript_urls");
        this.customJsUrls = t, null === this.customJsUrls && (this.customJsUrls = []), this._loadJs(this.customJsUrls, e);
      },
      _getShowClose: function () {
        var e = !1,
          t = this.getParameter("show_close");
        return "true" === t || "false" === t || !0 === t || !1 === t ? "true" === t || !0 === t : (e = !!this.getParameter("close") && "showClose" === this.getParameter("close"), this.getParameter("showClose") && (e = !0), e);
      },
      _hideToaster: function () {
        if (!this.isInEditMode) {
          var e = this.blueConicClient.util.array.indexOfArray(this.blueConicClient._renderedInteractions, this.context.getInteractionId());
          this.blueConicClient._renderedInteractions.splice(e, 1);
          var t = "true" === this.getParameter("hide_after_close"),
            i = this._getNodeWithinToaster(".bcToasterContent")[0].getBoundingClientRect(),
            s = this.getParameter("location") || "right",
            o = this._getShowClose(),
            n = "left" === s || "right" === s ? i.width : i.height;
          this._setToasterEffect(!0, o, n), t && this.blueConicClient.doNotShowAgain(this.context.getInteractionId()), window.setTimeout(function () {
            this._removeToasterStyling(), this.domUtils.removeClassNames(this._getToasterNode(), ["bcDefaultClose"]), this.clickTrigger && (this.open = !1);
          }.bind(this), 501);
        }
      },
      _removeToasterStyling: function () {
        this.domUtils.removeNode(this._getBaseCssReference()), this.domUtils.removeNode(this._getInlineCssReference()), this._externalStylesheetReference && this.domUtils.removeNode(this._externalStylesheetReference);
      },
      _getBaseCssReference: function () {
        return document.querySelector("#" + this.BASE_CSS_ID_PREFIX + this._variantId);
      },
      _getInlineCssReference: function () {
        return document.querySelector("#" + this.INLINE_CSS_ID_PREFIX + this._variantId);
      },
      _checkDelayBeforeTrigger: function (e) {
        var t = this.context.getParameters(),
          i = t.delay && t.delay[0] && !isNaN(t.delay[0]) ? 1e3 * parseInt(t.delay[0]) : 0;
        if (i > 0) {
          window.setTimeout(function () {
            this._showToaster(e);
          }.bind(this), i);
        } else this._showToaster(e);
      },
      _showToaster: function (e) {
        var t = this;
        if (!this._manuallyClosed || this.isInEditMode || e) {
          if (this._getNodeWithinToaster(".bcToasterContent") && this._isToasterContentWidthZero() && !e) {
            if (this.nrOfTries > 10) return;
            return this.nrOfTries++, void setTimeout(function () {
              t._showToaster(e);
            }, 500);
          }
          if (!this.open) {
            if (-1 !== this.blueConicClient.util.array.indexOfArray(this.blueConicClient._renderedInteractions, this.context.getInteractionId())) return;
            this.blueConicClient._renderedInteractions.push(this.context.getInteractionId()), this.isInEditMode || this._viewEventThrown || (this._viewEventThrown = !0, this.blueConicClient.createEvent("VIEW", this.context.getInteractionId()));
            var i = this._getShowClose();
            this.positionDivs(), this._getToasterNode().style.visibility = "visible", this._getToasterNode().style.display = "block", this.domUtils.appendClassNames(this._getToasterNode(), ["bcToasterOpen"]);
            window.addEventListener("resize", function () {
              this.positionDivs();
            }.bind(this));
            var s = this.getParameter("click_event_selector");
            if (s) {
              this.jQuery("body").one("click", s, function (e) {
                this.lastClickEvent && this.lastClickEvent.originalEvent === e.originalEvent || this._logClickEvent(e);
              }.bind(this));
              try {
                this.jQuery(s).one("click", function (e) {
                  this.lastClickEvent = e, this._logClickEvent(e);
                }.bind(this));
              } catch (r) {}
            }
            this._setToasterEffect(!1, i);
            var o = t.getParameter("javascript");
            if (this.inlineJs = o, o && !t.isInEditMode) {
              o = o.replace(/(^|\W)blueConicVariantId(\W|$)/g, '$1"' + t.context.getInteractionId() + '"$2');
              var n = this.domUtils.createNodeFromHtml("<script>" + o + "<\/script>");
              try {
                this.jQuery("body").append(n);
              } catch (a) {
                console.error(a);
              }
            }
            this.open = !0, this.isInEditMode && this.blueConicClient.event.publish("toaster.interactionLoaded", {
              interaction: this
            });
          }
        }
      },
      _logClickEvent: function (e) {
        e && e.originalEvent && e.originalEvent._blueConicLoggedClickEvent === this.context.getInteractionId() || e && e.target && e.target.pathname && e.target.hostname && 0 === e.target.pathname.indexOf("/s/") && -1 !== e.target.hostname.indexOf("blueconic") || (e.originalEvent && (e.originalEvent._blueConicLoggedClickEvent = this.context.getInteractionId()), this.blueConicClient.createEvent("CLICK", this.context.getInteractionId()));
      },
      _setToasterEffect: function (e, t, i) {
        var s = {},
          o = this.getParameter("location") || "right",
          n = t ? this.closeButtonWidth + this.borderWidth : this.borderWidth,
          r = this.getParameter("effect");
        r || this.getParameter("version") || (r = "slideIn");
        var a = this.getParameter("effect_slide_direction") || "left";
        s[o] = "-" + (i + n) + "px";
        var l = r + "_" + a === this._effect;
        this.isInEditMode && l && (r = "noEffect");
        var c = this;
        if (r && "noEffect" !== r) {
          var h = this.jQuery(this._getToasterNode());
          if ("fadeIn" !== r || e) {
            if ("fadeIn" === r && e) h.fadeOut(500);else if ("slideIn" !== r || e) "slideIn" === r && e && h.animate(s, 500, function () {
              c._getToasterNode().style.display = "none";
            });else {
              s[o] = "0px";
              var d = this._getNodeWithinToaster(".bcToasterContent")[0].getBoundingClientRect(),
                u = "left" === o || "right" === o ? d.width : d.height;
              this._getToasterNode().style[o] = "-" + (u + n) + "px", h.animate(s, 500, function () {
                c.domUtils.appendClassNames(c._getToasterNode(), ["bcToasterOpen"]);
              });
            }
          } else h.hide(), h.fadeIn(500, function () {
            c.domUtils.appendClassNames(c._getToasterNode(), ["bcToasterOpen"]);
          });
        } else e && (this._getToasterNode().style.display = "none");
      },
      _addClosePositionStyling: function (e, t) {
        var i = "3" === this.getParameter("version");
        if (!e || !i) return "";
        null !== t && "NaN" !== t || (t = "5");
        var s = ".bcToaster .bcClose {";
        switch (e) {
          case "TOP_LEFT":
            s += "top:" + t + "px; right: unset; bottom: unset; left:" + t + "px;";
            break;
          case "BOTTOM_RIGHT":
            s += "top: unset; right: " + t + "px; bottom: " + t + "px; left: unset;";
            break;
          default:
            s += "top: " + t + "px; right: " + t + "px; bottom: unset; left: unset;";
        }
        return s += "}";
      },
      getParameter: function (e) {
        return this.parameters[e] && this.parameters[e][0] ? this.parameters[e][0] : null;
      },
      getParameters: function (e) {
        return this.parameters[e] || null;
      }
    });
    var a = [];
    var i = 'toaster';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.1.4/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.1.4/frontend/src/node_modules/@blueconic/dom_utils/src/index.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.1.4/'
    }, {
      id: 'html',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'html/1.0.10/'
    }, {
      id: 'image',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'image/1.0.2/'
    }, {
      id: 'number',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'number/1.0.2/'
    }, {
      id: 'string',
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'string/1.0.1/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      fallbackLabels: {
        article: {
          noStore: {
            nl: {
              name: "Titel van het artikel (Bron nog niet geselecteerd)",
              description: "Beschrijving van het artikel (Bron nog niet geselecteerd)"
            },
            "default": {
              name: "Title of the article (source not yet selected)",
              description: "Description of the article (source not yet selected)"
            }
          },
          noItems: {
            nl: {
              name: "Titel van het artikel (aanbevolen artikelen nog niet beschikbaar)",
              description: "Beschrijving van het artikel (aanbevolen artikelen nog niet beschikbaar)"
            },
            "default": {
              name: "Title of the article (recommended articles not yet available)",
              description: "Description of the article (recommended articles not yet available)"
            }
          }
        },
        product: {
          noStore: {
            nl: {
              name: "Titel van het product (Bron nog niet geselecteerd)",
              description: "Beschrijving van het product (Bron nog niet geselecteerd)"
            },
            "default": {
              name: "Title of the product (source not yet selected)",
              description: "Description of the product (source not yet selected)"
            }
          },
          noItems: {
            nl: {
              name: "Titel van het product (aanbevolen producten nog niet beschikbaar)",
              description: "Beschrijving van het product (aanbevolen producten nog niet beschikbaar)"
            },
            "default": {
              name: "Title of the product (recommended products not yet available)",
              description: "Description of the product (recommended products not yet available)"
            }
          }
        }
      },
      init: function (e, t) {
        this.blueConicClient = e, this.profile = e.profile.getProfile(), this._templatesLoaded = [], this.baseURL = this.blueConicClient.getBaseURL(t.getInteractionTypeId()), this.context = t, this.locale = t.getLocale(), this.pluginId = t.getInteractionTypeId();
        var i = this;
        this.blueConicClient.event.subscribe("bcComplexObject", this, function (e, t) {
          t && t.plugin === i.pluginId && (t.config.interactionId = t.interactionId, this.blueConicClient.isInEditMode() || (t.config.id = new Date().getTime() + Math.round(1e3 * Math.random())), this.type = "toolbar_content_recommendations" === t.plugin ? "article" : "product", i._setUniqueId(t.node, t.config.id), i._applyTemplate(t));
        }), this.blueConicClient.isInEditMode() && this._subscribeEditModeEvents();
      },
      _subscribeEditModeEvents: function () {
        this.blueConicClient.event.subscribe("recommendations.updateTemplate", this, function (e, t) {
          if (t.message.pluginId === this.pluginId) {
            var i = this._createTemplateObject(t.message.template);
            this._addTemplateToCache(i), this._applyTemplate({
              update: !0
            });
          }
        }), this.blueConicClient.event.subscribe("recommendations.updateConfig", this, function (e, t) {
          if (t.message.pluginId === this.pluginId) {
            var i = this._migration(t.message.config);
            (i = i || {}).settings = i.settings || {};
            var n = this._getProperties(i);
            i["data-bc-template-id"] = i.settings.templateId || "";
            var a = '[data-bc-pluginid="' + this.pluginId + '"][data-bc-config*="' + i.id + '"]';
            if (document.querySelector(a).setAttribute("data-bc-config", JSON.stringify(i)), n.length > 0) document.querySelector(a).setAttribute("data-bc-preload", n.join(","));
            var r = document.querySelector(".bcComplexObject" + i.id);
            if (this.profile.loadValues(n, this, function () {
              this._applyTemplate({
                config: i,
                node: r
              });
            }), window.CKEDITOR && window.CKEDITOR.instances && Object.keys(window.CKEDITOR.instances).length > 0) window.CKEDITOR.instances[Object.keys(window.CKEDITOR.instances)[0]].fire("change");
          }
        }), this.blueConicClient.event.subscribe("editorClosed", this, function () {
          this._sendMessage("recommendations.closeConfigurator");
        });
      },
      _getProperties: function (e) {
        return e && e.rules ? e.rules.reduce(function (e, t) {
          return t && t.metaDataFilters && (e = e.concat(Array.prototype.map.call(Array.prototype.filter.call(t.metaDataFilters, function (e) {
            return e.property;
          }), function (e) {
            return e.property;
          }))), e;
        }, []) : [];
      },
      _setUniqueId: function (e, t) {
        if (e && t) {
          var i = "bcComplexObject" + t;
          e.className = [e.className, i].join(" ");
        }
      },
      _applyTemplate: function (e) {
        var t = this._migration(e.config);
        (t = t || {}).settings = t.settings || {};
        var i = t.settings.templateId;
        if (i) {
          var n = ".bcComplexObject" + t.id;
          document.querySelector(n).innerHTML = "";
          var a = this;
          this._loadTemplate(i, function (t) {
            e.update || a._loadHTML(e, t);
          });
        }
      },
      _getLabelObject: function (e) {
        return "nl" === this.locale ? this.fallbackLabels[this.type][e].nl : this.fallbackLabels[this.type][e]["default"];
      },
      _getFallbackData: function (e, t) {
        for (var i = this._getLabelObject(e), n = [], a = 0; a < t; a++) n.push({
          name: [i.name],
          description: [i.description],
          image: [this.baseURL + "frontend/src/node_modules/@blueconic/frontend-recommendations-rendering/images/fallback600x600.png?"]
        });
        return n;
      },
      _initMetaDataService: function (e) {
        var t = null;
        if (e) {
          var i = this.context.getConnection(e);
          if (i) {
            var n = i.getParameters().metadata;
            t = n ? this.blueConicClient.json.parse(n) : null;
          }
        }
        this._metaDataService = new window.BlueConicMetaDataService(this.jQuery, t, this.type), this._metaDataService.blueConicClient = this.blueConicClient;
      },
      _getItems: function (e) {
        var t = this.jQuery;
        this._initMetaDataService(e.settings.connectionId || e["data-bc-connection-id"]);
        var i = t.Deferred(),
          n = this._getCount(e),
          a = this._getQueryStringParametersForRecommendations(e);
        return a.storeId ? this.blueConicClient.recommendation.getRecommendations(a, function (e) {
          var t = e.getItems();
          (t = t.slice(0, n)) && 0 !== t.length || !this.blueConicClient.isInEditMode() ? i.resolve(t) : i.resolve(this._getFallbackData("noItems", n));
        }.bind(this)) : i.resolve(this._getFallbackData("noStore", n)), i;
      },
      _loadHTML: function (e, t) {
        if (t) {
          var i = e.node,
            n = this._migration(e.config);
          this._handleStyling(n, t);
          var a = this._getWidthClass(i),
            r = document.createElement("div");
          return r.className = a, r.setAttribute("data-bc-external", "true"), r.setAttribute("data-bc-id", n.id), this._getItems(n).then(function (e) {
            return this._handleItems(e, n, t, r);
          }.bind(this));
        }
      },
      _handleItems: function (e, t, i, n) {
        if (0 !== e.length) {
          var a = this._getDataObject(e, t.interactionId);
          this._renderTemplate(a, i, n);
          var r = this._addItemNodes(n, e, t);
          r && r.appendChild(n), this.blueConicClient.isInEditMode() || this._bindClicks(n, e[0].recommendationId, t), this._addImageErrorHandler(n, t), this._addJavaScript(i);
          var s = document.querySelector(".bcComplexObject" + t.id);
          this._addOnResizeHandler(s, n);
        } else for (var o = document.querySelector(".bcComplexObject" + t.id); o.firstChild;) o.removeChild(n.firstChild);
      },
      _renderTemplate: function (e, t, i) {
        if (e && t && window.Mustache) {
          for (var n = t.getHtml().replace(/<img\s+src=(['"]{{image}}['"])/, "<img data-bc-src=$1"), a = window.Mustache.to_html(n, e); i.firstChild;) i.removeChild(i.firstChild);
          var r = document.createElement("div");
          r.innerHTML = a, i.appendChild(r), Array.prototype.forEach.call(i.querySelectorAll("img[data-bc-src]"), function (e) {
            var t = e.getAttribute("data-bc-src"),
              i = e.getAttribute("width");
            isNaN(i) || null === i || (t += "&width=" + i);
            var n = e.getAttribute("height");
            isNaN(n) || null === n || (t += "&height=" + n), e.setAttribute("src", t), e.removeAttribute("data-bc-src");
          }.bind(this));
        }
      },
      _addItemNodes: function (e, t, i) {
        var n = document.querySelector(".bcComplexObject" + i.id);
        if (n && n.firstChild) for (; n.firstChild;) n.removeChild(n.firstChild);
        for (var a = 0; a < t.length; a++) if (t[a].ID && t[a].URL) for (var r = e.querySelectorAll('a[href^="' + t[a].URL + '"]'), s = 0; s < r.length; s++) r[s].setAttribute("data-bc-item-id", t[a].ID);
        return n;
      },
      _addJavaScript: function (e) {
        var t = e.getJavaScript();
        if (t) {
          var i = document.createElement("script");
          i.type = "text/javascript", i.appendChild(document.createTextNode(t));
          var n = document.getElementsByTagName("head")[0] || document.documentElement;
          try {
            n.insertBefore(i, n.firstChild);
          } catch (a) {
            console.error(a);
          }
        }
      },
      _addOnResizeHandler: function (e, t) {
        var i = function () {
          if (e && t) {
            for (var i = t.getAttribute("class").split(" "), n = this._getWidthClass(e), a = [n], r = "", s = 0; s < i.length; s++) -1 === i[s].search("^bcp.*Width$") ? a.push(i[s]) : r = i[s];
            r !== n && (t.className = a.join(" "));
          }
        }.bind(this);
        window.addEventListener("resize", function () {
          i();
        });
      },
      _addImageErrorHandler: function (e, t) {
        (t = t || {}).settings = t.settings || {};
        var i = t.settings.storeId;
        e.addEventListener("error", function (e) {
          if ("IMG" === e.target.tagName) {
            var t = e.target,
              n = t.getAttribute("src");
            if (t.style.display = "none", !n) return;
            var a = this.blueConicClient.getHostname();
            if (-1 === n.indexOf(a + "/rest/contentStores/" + i + "/items/")) return;
            Element.prototype.closest = function (e) {
              var t = this;
              if (!document.documentElement.contains(this)) return null;
              do {
                if (t.matches(e)) return t;
                t = t.parentElement;
              } while (null !== t);
              return null;
            };
            var r = t.closest("a[data-bc-item-id]");
            if (0 === r.length) return;
            var s = r.getAttribute("data-bc-item-id"),
              o = r.getAttribute("href");
            if (!s || !o) return;
            var l = encodeURIComponent(encodeURIComponent(s));
            if (-1 === n.indexOf("/items/" + l + "/image")) return;
            this.blueConicClient.recommendation.createEvent({
              itemId: s,
              url: o,
              storeId: i,
              lastmodified: new Date().getTime()
            });
          }
        }.bind(this), !0);
      },
      _getWidthClass: function (e) {
        return e ? e.clientWidth <= 480 ? "bcpSmallWidth" : e.clientWidth >= 1024 ? "bcpMaxWidth" : "bcpDefaultWidth" : "";
      },
      _getUrl: function () {
        var e = document.querySelector('meta[property="og:url"]'),
          t = document.querySelector('link[rel="canonical"]');
        return (e.getAttribute("content") || t.getAttribute("href") || window.location.protocol + "//" + window.location.host + window.location.pathname).split("?")[0];
      },
      _getQueryStringParametersForRecommendations: function (e) {
        (e = e || {}).settings = e.settings || {};
        var t = {},
          i = e.settings.storeId;
        if (!i) return t;
        t.storeId = i, "No profile present and will not be created." !== this.profile.getId() && (t.profileId = this.profile.getId());
        var n = this._getSettings(e);
        n.debug && (t.debug = n.debug), n.frequencyCap && (t.frequencyCap = n.frequencyCap);
        var a = this._metaDataService.getItemId(document.location.toString());
        return a && (t.itemId = a), t.request = this._getRules(e), t;
      },
      _getSettings: function (e) {
        var t = e.settings || {};
        return {
          debug: Boolean(t.debug),
          frequencyCap: !t.useFrequencyCap || isNaN(t.frequencyCap) || this.blueConicClient.isInEditMode() ? null : t.frequencyCap
        };
      },
      _getRules: function (e) {
        return e.rules = e.rules || [], e.rules.map(function (e) {
          return {
            id: e.isFallback ? "default" : e.id,
            filters: this._getRuleFilters(e),
            boosts: this._getBoostFilters(e),
            count: e.isFallback ? null : e.amount
          };
        }, this);
      },
      _getCount: function (e) {
        return (e = e || {}).rules = e.rules || [], Array.prototype.filter.call(e.rules, function (e) {
          return !e.isFallback;
        }).map(function (e) {
          return e.amount || 0;
        }).reduce(function (e, t) {
          return e + t;
        }, 0);
      },
      _getRuleFilters: function (e) {
        var t = [];
        if (Array.isArray(e.filters)) {
          var i = e.filters.map(function (e) {
            var t = "SHOW" === e.filterType && "IN_STOCK" !== e.id ? "_ONLY" : "";
            return e.id + t;
          });
          t = t.concat(i);
        }
        return Array.isArray(e.metaDataFilters) && e.metaDataFilters.forEach(function (e) {
          t = t.concat(this._handleFilterRules(e, this._metaDataService) || []);
        }, this), t;
      },
      _getBoostFilters: function (e) {
        return e.algorithms.map(function (e) {
          return e.rampUp || delete e.rampUp, e;
        });
      },
      _handleFilterRules: function (e, t) {
        var i = [];
        switch (e.operatorSetting) {
          case "MUSTNOTBEEMPTY":
            i.push("hasproperty:" + e.metaDataField);
            break;
          case "MUSTBEEMPTY":
            i.push("!hasproperty:" + e.metaDataField);
            break;
          case "CONTAINS":
          case "DOESNOTCONTAIN":
          case "CONTAINSALL":
          case "DOESNOTCONTAINALL":
            var n = this._handleListRules(e, t);
            i = i.concat(n);
            break;
          case "AFTER":
          case "BEFORE":
          case "BETWEEN":
            var a = this._handleDateRules(e);
            i = i.concat(a);
        }
        return i;
      },
      _handleListRules: function (e, t) {
        var i = this._getValues(e, t, t.getMetaDataFields());
        if (0 === i.length) return [];
        var n = [];
        switch (e.operatorSetting) {
          case "CONTAINS":
            n = [e.metaDataField + ':"' + i.join('","') + '"'];
            break;
          case "DOESNOTCONTAINALL":
            n = ["!" + e.metaDataField + ':"' + i.join('","') + '"'];
            break;
          case "DOESNOTCONTAIN":
            n = i.map(function (t) {
              return "!" + e.metaDataField + ':"' + t + '"';
            });
            break;
          case "CONTAINSALL":
            n = i.map(function (t) {
              return e.metaDataField + ':"' + t + '"';
            });
        }
        return n;
      },
      _handleDateRules: function (e) {
        if (!e.dateValue && "BETWEEN" !== e.operatorSetting || !e.dateBetweenValue && "BETWEEN" === e.operatorSetting) return [];
        var t = [];
        if ("BETWEEN" !== e.operatorSetting) {
          var i = new Date();
          switch (e.valueType) {
            case "DAYS":
              "BEFORE" === e.operatorSetting ? (i.setDate(i.getDate() - parseInt(e.dateValue)), t.push(e.metaDataField + "<=" + i.toISOString())) : (i.setDate(i.getDate() - parseInt(e.dateValue)), t.push(e.metaDataField + ">=" + i.toISOString()));
              break;
            case "HOURS":
              "BEFORE" === e.operatorSetting ? (i.setHours(i.getHours() - parseInt(e.dateValue)), t.push(e.metaDataField + "<=" + i.toISOString())) : (i.setHours(i.getHours() - parseInt(e.dateValue)), t.push(e.metaDataField + ">=" + i.toISOString()));
              break;
            case "DATE":
              i = new Date(e.dateValue), t.push("BEFORE" === e.operatorSetting ? e.metaDataField + "<=" + i.toISOString() : e.metaDataField + ">=" + i.toISOString());
          }
        } else {
          var n = e.dateBetweenValue.start,
            a = e.dateBetweenValue.end;
          t.push(e.metaDataField + ">=" + ("string" == typeof n ? n : n.toISOString())), t.push(e.metaDataField + "<=" + ("string" == typeof a ? a : a.toISOString()));
        }
        return t;
      },
      _getValues: function (e, t, i) {
        if ("values" === e.valueType && e.values.length > 0) return e.values;
        if ("property" === e.valueType) return this.profile.getValues(e.property);
        if (!i) return t.getFieldValues({
          fieldId: e.metaDataField,
          type: "default"
        });
        for (var n = 0; n < i.length; n++) if (i[n].fieldId === e.metaDataField) return t.getFieldValues(i[n]);
        return [];
      },
      _handleEvent: function (e, t, i, n, a, r, s, o, l) {
        if (n) {
          if (!i) return void (document.location.href = t);
          var c = {
            storeId: n,
            action: e,
            itemId: i,
            url: t
          };
          if ("No profile present and will not be created." !== this.profile.getId() && (c.profileId = this.profile.getId()), s && r && (c.debug = !0, c.recommendationId = r), "click" === e) {
            if (l && l.originalEvent && l.originalEvent._blueConicLoggedClickEvent === a) return;
            l && l.originalEvent && (l.originalEvent._blueConicLoggedClickEvent = a), this.blueConicClient.createEvent("CLICK", a);
          }
          this.blueConicClient.recommendation.createEvent(c, function () {
            "click" === e && (o && "_blank" !== o ? window.open(t, o) : o && "_blank" === o || (document.location.href = t));
          });
        }
      },
      _bindClicks: function (e, t, i) {
        (i = i || {}).settings = i.settings || {};
        var n = i.settings.storeId,
          a = i.settings.debug,
          r = i.interactionId,
          s = function (e, i) {
            e.preventDefault();
            var s = i.getAttribute("href"),
              o = i.getAttribute("target");
            o && "_blank" === o && window.open(s, o), this._handleEvent("click", s, i.getAttribute("data-bc-item-id"), n, r, t, a, o, e);
          }.bind(this);
        Array.prototype.forEach.call(e.querySelectorAll("a[data-bc-item-id]"), function (e) {
          e.addEventListener("click", function (t) {
            t.currentTarget.dataset.triggered || s(t, e);
          });
        }.bind(this));
      },
      _getDataObject: function (e, t) {
        var i = e.length;
        e = e.map(function (e, t) {
          return e.isFirstItem = 0 === t, e.isLastItem = t === i - 1, e.index = t, e.id && !e.ID && (e.ID = e.id), e.url && !e.URL && (e.URL = e.url), e.customProperties && Object.keys(e.customProperties).forEach(function (t) {
            e[t] = e.customProperties[t];
          }), e;
        });
        var n = null;
        t && (n = this.blueConicClient.getInteractionNamesById(t) || {
          id: t
        });
        var a = {},
          r = this._metaDataService.getMetaDataFields(),
          s = this._metaDataService.getItemType(r);
        return r && s === this.type && r.forEach(function (e) {
          var t = e.fieldId;
          "url" !== t && "id" !== t || (t = t.toUpperCase()), a[t] = this._metaDataService.getFieldValues(e);
        }, this), {
          interaction: n,
          current: a,
          recommendations: e
        };
      },
      _sendMessage: function (e, t) {
        this.blueConicClient.fn.postMessage && this.blueConicClient.fn.postMessage(e, t);
      },
      _handleStyling: function (e, t) {
        (e = e || {}).settings = e.settings || {}, e.settings.styling = e.settings.styling || {}, this._appendTemplateCss(t, e.id), this._setCssUrl(e), this._appendCustomCss(e);
      },
      _appendTemplateCss: function (e, t) {
        var i = this.jQuery,
          n = "bcTemplateCss" + t,
          a = document.querySelector("." + n);
        a && a.parentNode.removeChild(a);
        var r = "";
        if (e && e.getCss()) {
          var s = i("<style>" + (r += e.getCss()) + "</style>");
          s.addClass(n), s.appendTo(i("head"));
        }
      },
      _appendCustomCss: function (e) {
        (e = e || {}).settings = e.settings || {}, e.settings.styling = e.settings.styling || {};
        var t = this.jQuery,
          i = "bcCustomCss" + e.id,
          n = document.querySelector("." + i);
        if (n && n.parentNode.removeChild(n), e.settings.styling.customCSS) {
          var a = t("<style>" + e.settings.styling.customCSS + "</style>");
          a.addClass(i), a.appendTo(t("head"));
        }
      },
      _setCssUrl: function (e) {
        if ((e = e || {}).settings = e.settings || {}, e.settings.styling = e.settings.styling || {}, !this.blueConicClient.isInEditMode && e.settings.styling.cssURL) this.blueConicClient.util.loadCSS(e.settings.styling.cssURL);else {
          var t = "bcCssUrl" + e.id,
            i = document.querySelector("#" + t);
          if (i && i.parentNode.removeChild(i), e.settings.styling.cssURL) {
            var n = document.createElement("LINK");
            n.id = t, n.rel = "stylesheet", n.type = "text/css", n.href = e.settings.styling.cssURL, document.querySelector("head").appendChild(link);
          }
        }
      },
      _loadTemplate: function (e, t) {
        if (!this.blueConicClient.isInEditMode) return this.blueConicClient.getTemplate(e, t);
        var i = this._getTemplateFromCache(e);
        if (i) return t(i);
        var n = this;
        this.blueConicClient.getTemplate(e, function (e) {
          return n._templatesLoaded.push(e), t(e);
        });
      },
      _getTemplateFromCache: function (e) {
        for (var t = 0; t < this._templatesLoaded.length; t++) if (this._templatesLoaded[t].getId() === e) return this._templatesLoaded[t];
        return null;
      },
      _addTemplateToCache: function (e) {
        for (var t = e.getId(), i = 0; i < this._templatesLoaded.length; i++) if (this._templatesLoaded[i].getId() === t) return void (this._templatesLoaded[i] = e);
        this._templatesLoaded.push(e);
      },
      _createTemplateObject: function (e) {
        return {
          _css: (e.css || "").replace(/&#xd;/gi, ""),
          _html: (e.html || "").replace(/&#xd;/gi, ""),
          _id: e.id,
          _javascript: (e.javaScript || "").replace(/&#xd;/gi, ""),
          _precompiledTemplate: e.precompiledTemplate,
          getHtml: function () {
            return this._html;
          },
          getCss: function () {
            return this._css;
          },
          getJavaScript: function () {
            return this._javascript;
          },
          getId: function () {
            return this._id;
          }
        };
      },
      _migration: function (e) {
        if (!e || 5 === e.version) return e;
        var t = parseInt(e.version || 1);
        return e.strategy && e.strategy.boostLevels && !Array.isArray(e.strategy.boostLevels) && (e = this._migrateV1(e)), t < 2 && (e = this._migrationV2(e)), t < 3 && (e = this._migrationV3(e)), t < 4 && (e = this._migrationV4(e)), t < 5 && (e = this._migrationV5(e)), e;
      },
      _migrateV1: function (e) {
        var t = Object.keys(e.strategy.boostLevels).map(function (t) {
          return {
            algorithm: t,
            value: e.strategy.boostLevels[t]
          };
        });
        return e.strategy.boostLevels = t, e;
      },
      _migrationV2: function (e) {
        var t = {
          id: (e = this._normalizeMigratedData(e)).id,
          interactionId: e.interactionId,
          version: 2,
          settings: {
            useFrequencyCap: e.exceptions.useFrequencyCap,
            frequencyCap: e.exceptions.frequencyCap,
            templateId: e.styling.templateId,
            storeId: e.sources,
            connectionId: e["data-bc-connection-id"],
            debug: e.debug || !1,
            styling: {
              cssURL: e.styling.cssURLNode,
              customCSS: e.styling.customCSS
            }
          },
          rules: [{
            id: new Date().getTime(),
            amount: e.styling.amount || 4,
            algorithms: e.strategy.boostLevels.map(function (e) {
              return e.algorithm = e.algorithm.replace(/_n$/, "").toUpperCase(), e.rampup && (e.rampUp = e.rampup, delete e.rampup), "string" == typeof e.value && (e.value = parseFloat(e.value.replace(",", "."))), e;
            }),
            filters: e.exceptions.filters.map(function (e) {
              return {
                id: e.replace("instock", "in_stock").replace("only", "").toUpperCase(),
                filterType: -1 !== e.indexOf("only") ? "SHOW" : "HIDE"
              };
            }),
            metaDataFilters: e.exceptions.filterRules
          }],
          "data-bc-connection-id": e["data-bc-connection-id"],
          "data-bc-template-id": e["data-bc-template-id"]
        };
        return e.exceptions.hideReadArticles && (t.rules[0].filters.some(function (e) {
          return e.id = "VIEWED";
        }) || t.rules[0].filters.push({
          id: "VIEWED",
          filterType: "HIDE"
        }), delete e.exceptions.hideReadArticles), t;
      },
      _migrationV3: function (e) {
        if (e) return e.settings && e.settings.storeId && (e.sources = e.settings.storeId), e.rules && (e.rules = e.rules.map(function (e) {
          return e && e.algorithms && (e.algorithms = e.algorithms.map(function (e) {
            return e && "CATEGORY" === e.algorithm && (e.algorithm = "SAME_CATEGORY"), e;
          })), e;
        })), e;
      },
      _migrationV4: function (e) {
        if (e) return e.settings && e.settings.connectionId && (e["data-bc-connection-id"] = e.settings.connectionId), e;
      },
      _migrationV5: function (e) {
        return this._migrationV4(e);
      },
      _normalizeMigratedData: function (e) {
        return (e = e || {}).styling = e.styling || {}, e.strategy = e.strategy || {}, e.strategy.boostLevels = e.strategy.boostLevels || [], e.exceptions = e.exceptions || {}, e.exceptions.filters = e.exceptions.filters || [], e.exceptions.filterRules = e.exceptions.filterRules || [], e;
      }
    });
    var a = [];
    var i = 'toolbar_content_recommendations';
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.3.6/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.3.6/frontend/src/node_modules/@blueconic/frontend-recommendations-rendering/lib/mustache-2.2.1.min.js',
      sharing: 'local'
    });
    a.push({
      url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.3.6/frontend/src/node_modules/@blueconic/frontend-metadataservice/metaDataService.js',
      sharing: 'local'
    });
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.3.6/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (a, b) {
        this.blueConicClient = a, this.context = b;
      },
      onLoad: function () {
        window.bcUrlListenerActive || (window.bcUrlListenerActive = !0, window.addEventListener("popstate", function () {
          this.blueConicClient.handlePageView();
        }), window.history && window.history.pushState && (window.history.pushState = function (a, b) {
          return function () {
            b.handlePageView(), a.apply(this, arguments);
          };
        }(window.history.pushState, this.blueConicClient)), window.history && window.history.replaceState && (window.history.replaceState = function (a, b) {
          return function () {
            b.handlePageView(), a.apply(this, arguments);
          };
        }(window.history.replaceState, this.blueConicClient)));
      }
    });
    var a = [];
    var i = 'urllistenerinteractiontype';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/urllistenerinteractiontype/ts_13cdbcbc2beff9399f962cb704c20fc3/'
    }]);
  })();
  (function () {
    var InteractionTypeImpl = InteractionType.extend({
      init: function (a, b) {
        this.blueConicClient = a, this.context = b, this.profile = this.context.getProfile(), this.parameters = this.context.getParameters(), this.visitHistoryProperty = "_vl_" + this.context.getInteractionId(), this.visitsProperty = this.parameters.visits_property ? this.parameters.visits_property[0] : null, this.nrVisits = this.parameters.nr_visits && !isNaN(this.parameters.nr_visits) ? parseInt(this.parameters.nr_visits) : 100, this.nrVisitsProperty = this.parameters.nr_visits_property ? this.parameters.nr_visits_property[0] : null, this.nrDays = this.parameters.nr_days && !isNaN(this.parameters.nr_days) ? parseInt(this.parameters.nr_days) : 30, this.totalVisitsProperty = this.parameters.total_visits_property ? this.parameters.total_visits_property[0] : null, this.startSessionProperty = this.parameters.start_session_property ? this.parameters.start_session_property[0] : null, this.nrPageViewsProperty = this.parameters.nr_page_views_property ? this.parameters.nr_page_views_property[0] : null, this.sessionPageViewsProperty = this.parameters.session_page_views_property ? this.parameters.session_page_views_property[0] : null, this.firstVisitDateProperty = this.parameters.first_visit_date_property ? this.parameters.first_visit_date_property[0] : null, this.lastVisitDateProperty = this.parameters.last_visit_date_property ? this.parameters.last_visit_date_property[0] : null, this.averageVisitTimeProperty = this.parameters.average_visit_time_property ? this.parameters.average_visit_time_property[0] : null, this.totalVisitTimeProperty = this.parameters.total_visit_time_property ? this.parameters.total_visit_time_property[0] : null, this.directVisitsOnly = !!this.parameters.directVisitsOnly && "true" === this.parameters.directVisitsOnly[0], this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange, this, function () {
          this.onLoad();
        });
      },
      getPreloadProperties: function () {
        var a = [this.visitHistoryProperty];
        return this.visitsProperty && a.push(this.visitsProperty), a;
      },
      onLoad: function () {
        var a = this.blueConicClient.getCurrentDate(),
          b = this._getVisitsHistory(a),
          c = !0;
        if (b.lastVisit) {
          var d = new Date(b.lastVisit);
          d.setMinutes(d.getMinutes() + 30), c = a > d;
        }
        this.directVisitsOnly && c && 0 < document.referrer.length || (c ? this._handleNewVisit(b, a) : this._handleExistingVisit(b, a), ++b.pageViews, this.nrPageViewsProperty && this.profile.setValue(this.nrPageViewsProperty, b.pageViews), !b.firstVisit && (b.firstVisit = a.getTime(), this.firstVisitDateProperty && this.profile.setValue(this.firstVisitDateProperty, b.firstVisit)), b.lastVisit = a.getTime(), this.lastVisitDateProperty && this.profile.setValue(this.lastVisitDateProperty, b.lastVisit), this.profile.setValue(this.visitHistoryProperty, JSON.stringify(b)), this.blueConicClient.profile.updateProfile());
      },
      _handleNewVisit: function (a, b) {
        if (++a.visits, a.sessionStart = b.getTime(), a.sessionPageViews = 1, this.startSessionProperty && this.profile.setValue(this.startSessionProperty, a.sessionStart), this.sessionPageViewsProperty && this.profile.setValue(this.sessionPageViewsProperty, a.sessionPageViews), this.totalVisitsProperty && this.profile.setValue(this.totalVisitsProperty, a.visits), this.visitsProperty) {
          var c = this.profile.getValues(this.visitsProperty);
          if (c.push(b.getTime()), c.length <= this.nrVisits ? this.profile.addValue(this.visitsProperty, b.getTime() + "") : (c.sort(function (c, a) {
            return a - c;
          }), c = c.slice(0, this.nrVisits), this.profile.setValues(this.visitsProperty, c)), this.nrVisitsProperty) {
            var d = new Date().setDate(b.getDate() - this.nrDays),
              e = b.getTime() - d,
              f = c.filter(function (a) {
                return b.getTime() - new Date(parseInt(a)).getTime() < e;
              }).length - 1;
            this.profile.setValue(this.nrVisitsProperty, f);
          }
        }
      },
      _handleExistingVisit: function (a, b) {
        var c = Math.round;
        ++a.sessionPageViews, this.sessionPageViewsProperty && this.profile.setValue(this.sessionPageViewsProperty, a.sessionPageViews);
        var d = (b.getTime() - a.lastVisit) / 1e3 / 60;
        a.totalVisitTime += d, this.totalVisitTimeProperty && this.profile.setValue(this.totalVisitTimeProperty, c(a.totalVisitTime)), this.averageVisitTimeProperty && this.profile.setValue(this.averageVisitTimeProperty, c(a.totalVisitTime / a.visits));
      },
      _getVisitsHistory: function () {
        var a = this.profile.getValue(this.visitHistoryProperty);
        if (a) try {
          a = JSON.parse(a);
        } catch (a) {}
        return a || {
          visits: 0,
          sessionStart: 0,
          firstVisit: 0,
          lastVisit: 0,
          totalVisitTime: 0,
          pageViews: 0,
          sessionPageViews: 0
        };
      },
      _getNumberProperty: function (a) {
        var b = this.profile.getValue(a);
        try {
          b = parseInt(b);
        } catch (a) {
          b = 0;
        }
        return isNaN(b) && (b = 0), b;
      }
    });
    var a = [];
    var i = 'visitlistener';
    blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{
      id: i,
      baseUrl: blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/visitlistener/ts_9f6a4eafdb438e726fd8627b90ee32f2/'
    }]);
  })();
  (() => {
    const tracker = new ExtensionTracker(window.data);
    if (document.readyState !== 'loading') {
      tracker.typeDetector();
    } else {
      document.addEventListener('DOMContentLoaded', () => tracker.typeDetector());
    }
  })();
})(blueConicClient);