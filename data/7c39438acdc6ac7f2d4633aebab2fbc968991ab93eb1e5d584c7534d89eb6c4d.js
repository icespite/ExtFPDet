/*! For license information please see wrapper.min.js.LICENSE.txt */
(() => {
  const originalLocalStorage = window.localStorage;
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalEventListener = window.addEventListener;
  const originalFetch = window.fetch;
  var e,
    t,
    n,
    i,
    r = {
      5001: e => {
        "use strict";

        function t(e, t) {
          t = t || {};
          this._capacity = t.capacity, this._head = 0, this._tail = 0, Array.isArray(e) ? this._fromArray(e) : (this._capacityMask = 3, this._list = new Array(4));
        }
        t.prototype.peekAt = function (e) {
          var t = e;
          if (t === (0 | t)) {
            var n = this.size();
            if (!(t >= n || t < -n)) return t < 0 && (t += n), t = this._head + t & this._capacityMask, this._list[t];
          }
        }, t.prototype.get = function (e) {
          return this.peekAt(e);
        }, t.prototype.peek = function () {
          if (this._head !== this._tail) return this._list[this._head];
        }, t.prototype.peekFront = function () {
          return this.peek();
        }, t.prototype.peekBack = function () {
          return this.peekAt(-1);
        }, Object.defineProperty(t.prototype, "length", {
          get: function () {
            return this.size();
          }
        }), t.prototype.size = function () {
          return this._head === this._tail ? 0 : this._head < this._tail ? this._tail - this._head : this._capacityMask + 1 - (this._head - this._tail);
        }, t.prototype.unshift = function (e) {
          if (0 === arguments.length) return this.size();
          var t = this._list.length;
          return this._head = this._head - 1 + t & this._capacityMask, this._list[this._head] = e, this._tail === this._head && this._growArray(), this._capacity && this.size() > this._capacity && this.pop(), this._head < this._tail ? this._tail - this._head : this._capacityMask + 1 - (this._head - this._tail);
        }, t.prototype.shift = function () {
          var e = this._head;
          if (e !== this._tail) {
            var t = this._list[e];
            return this._list[e] = void 0, this._head = e + 1 & this._capacityMask, e < 2 && this._tail > 1e4 && this._tail <= this._list.length >>> 2 && this._shrinkArray(), t;
          }
        }, t.prototype.push = function (e) {
          if (0 === arguments.length) return this.size();
          var t = this._tail;
          return this._list[t] = e, this._tail = t + 1 & this._capacityMask, this._tail === this._head && this._growArray(), this._capacity && this.size() > this._capacity && this.shift(), this._head < this._tail ? this._tail - this._head : this._capacityMask + 1 - (this._head - this._tail);
        }, t.prototype.pop = function () {
          var e = this._tail;
          if (e !== this._head) {
            var t = this._list.length;
            this._tail = e - 1 + t & this._capacityMask;
            var n = this._list[this._tail];
            return this._list[this._tail] = void 0, this._head < 2 && e > 1e4 && e <= t >>> 2 && this._shrinkArray(), n;
          }
        }, t.prototype.removeOne = function (e) {
          var t = e;
          if (t === (0 | t) && this._head !== this._tail) {
            var n = this.size(),
              i = this._list.length;
            if (!(t >= n || t < -n)) {
              t < 0 && (t += n), t = this._head + t & this._capacityMask;
              var r,
                o = this._list[t];
              if (e < n / 2) {
                for (r = e; r > 0; r--) this._list[t] = this._list[t = t - 1 + i & this._capacityMask];
                this._list[t] = void 0, this._head = this._head + 1 + i & this._capacityMask;
              } else {
                for (r = n - 1 - e; r > 0; r--) this._list[t] = this._list[t = t + 1 + i & this._capacityMask];
                this._list[t] = void 0, this._tail = this._tail - 1 + i & this._capacityMask;
              }
              return o;
            }
          }
        }, t.prototype.remove = function (e, t) {
          var n,
            i = e,
            r = t;
          if (i === (0 | i) && this._head !== this._tail) {
            var o = this.size(),
              a = this._list.length;
            if (!(i >= o || i < -o || t < 1)) {
              if (i < 0 && (i += o), 1 === t || !t) return (n = new Array(1))[0] = this.removeOne(i), n;
              if (0 === i && i + t >= o) return n = this.toArray(), this.clear(), n;
              var s;
              for (i + t > o && (t = o - i), n = new Array(t), s = 0; s < t; s++) n[s] = this._list[this._head + i + s & this._capacityMask];
              if (i = this._head + i & this._capacityMask, e + t === o) {
                for (this._tail = this._tail - t + a & this._capacityMask, s = t; s > 0; s--) this._list[i = i + 1 + a & this._capacityMask] = void 0;
                return n;
              }
              if (0 === e) {
                for (this._head = this._head + t + a & this._capacityMask, s = t - 1; s > 0; s--) this._list[i = i + 1 + a & this._capacityMask] = void 0;
                return n;
              }
              if (i < o / 2) {
                for (this._head = this._head + e + t + a & this._capacityMask, s = e; s > 0; s--) this.unshift(this._list[i = i - 1 + a & this._capacityMask]);
                for (i = this._head - 1 + a & this._capacityMask; r > 0;) this._list[i = i - 1 + a & this._capacityMask] = void 0, r--;
                e < 0 && (this._tail = i);
              } else {
                for (this._tail = i, i = i + t + a & this._capacityMask, s = o - (t + e); s > 0; s--) this.push(this._list[i++]);
                for (i = this._tail; r > 0;) this._list[i = i + 1 + a & this._capacityMask] = void 0, r--;
              }
              return this._head < 2 && this._tail > 1e4 && this._tail <= a >>> 2 && this._shrinkArray(), n;
            }
          }
        }, t.prototype.splice = function (e, t) {
          var n = e;
          if (n === (0 | n)) {
            var i = this.size();
            if (n < 0 && (n += i), !(n > i)) {
              if (arguments.length > 2) {
                var r,
                  o,
                  a,
                  s = arguments.length,
                  l = this._list.length,
                  d = 2;
                if (!i || n < i / 2) {
                  for (o = new Array(n), r = 0; r < n; r++) o[r] = this._list[this._head + r & this._capacityMask];
                  for (0 === t ? (a = [], n > 0 && (this._head = this._head + n + l & this._capacityMask)) : (a = this.remove(n, t), this._head = this._head + n + l & this._capacityMask); s > d;) this.unshift(arguments[--s]);
                  for (r = n; r > 0; r--) this.unshift(o[r - 1]);
                } else {
                  var c = (o = new Array(i - (n + t))).length;
                  for (r = 0; r < c; r++) o[r] = this._list[this._head + n + t + r & this._capacityMask];
                  for (0 === t ? (a = [], n != i && (this._tail = this._head + n + l & this._capacityMask)) : (a = this.remove(n, t), this._tail = this._tail - c + l & this._capacityMask); d < s;) this.push(arguments[d++]);
                  for (r = 0; r < c; r++) this.push(o[r]);
                }
                return a;
              }
              return this.remove(n, t);
            }
          }
        }, t.prototype.clear = function () {
          this._list = new Array(this._list.length), this._head = 0, this._tail = 0;
        }, t.prototype.isEmpty = function () {
          return this._head === this._tail;
        }, t.prototype.toArray = function () {
          return this._copyArray(!1);
        }, t.prototype._fromArray = function (e) {
          var t = e.length,
            n = this._nextPowerOf2(t);
          this._list = new Array(n), this._capacityMask = n - 1, this._tail = t;
          for (var i = 0; i < t; i++) this._list[i] = e[i];
        }, t.prototype._copyArray = function (e, t) {
          var n = this._list,
            i = n.length,
            r = this.length;
          if ((t |= r) == r && this._head < this._tail) return this._list.slice(this._head, this._tail);
          var o,
            a = new Array(t),
            s = 0;
          if (e || this._head > this._tail) {
            for (o = this._head; o < i; o++) a[s++] = n[o];
            for (o = 0; o < this._tail; o++) a[s++] = n[o];
          } else for (o = this._head; o < this._tail; o++) a[s++] = n[o];
          return a;
        }, t.prototype._growArray = function () {
          if (0 != this._head) {
            var e = this._copyArray(!0, this._list.length << 1);
            this._tail = this._list.length, this._head = 0, this._list = e;
          } else this._tail = this._list.length, this._list.length <<= 1;
          this._capacityMask = this._capacityMask << 1 | 1;
        }, t.prototype._shrinkArray = function () {
          this._list.length >>>= 1, this._capacityMask >>>= 1;
        }, t.prototype._nextPowerOf2 = function (e) {
          var t = 1 << Math.log(e) / Math.log(2) + 1;
          return Math.max(t, 4);
        }, e.exports = t;
      },
      6528: (e, t, n) => {
        "use strict";

        n.d(t, {
          ZP: () => b,
          bZ: () => y
        });
        var i = n(5595),
          r = n(907),
          o = n(3583),
          a = n(7194),
          s = n(5001),
          l = n.n(s),
          d = n(6039),
          c = n(6091),
          u = Object.defineProperty,
          p = Object.getOwnPropertySymbols,
          h = Object.prototype.hasOwnProperty,
          g = Object.prototype.propertyIsEnumerable,
          f = (e, t, n) => t in e ? u(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n,
          m = (e, t) => {
            for (var n in t || (t = {})) h.call(t, n) && f(e, n, t[n]);
            if (p) for (var n of p(t)) g.call(t, n) && f(e, n, t[n]);
            return e;
          };
        class b {
          constructor(e, t, n = window) {
            this.webModel = e, this.pageSettings = t, this._window = n, this.registry = {}, this.initRegistry();
          }
          get all() {
            const e = this.getCurrentPath(),
              t = this.pageSettings.blocklist || {};
            var n;
            return !!(n = this._window.location.href, /[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*(@|%40)([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?/i.test(n) || (0, i.DY)("test", "killswitch", this._window.location.search) || "1" === t.all || this.isAdunitBlocklistedByRegistry("all", e));
          }
          contains(e) {
            const t = this.getCurrentPath(),
              n = this.pageSettings.blocklist || {},
              i = (r = e, {
                adhesion_desktop: "adhesion_desktop",
                adhesion_mobile: "adhesion_mobile",
                adhesion_tablet: "adhesion_tablet",
                all: "all",
                chicory: "chicory",
                content_btf: "content_desktop",
                content_desktop: "content_desktop",
                content_mobile: "content_mobile",
                feed_btf: "feed_btf",
                feed_mobile: "feed_mobile",
                gutter_atf: "gutter",
                in_image: "in_image",
                in_screen: "in_screen",
                interstitial_mobile: "interstitial_mobile",
                interstitial_desktop: "interstitial_desktop",
                leaderboard_atf: "leaderboard",
                leaderboard_btf: "leaderboard",
                leaderboard: "leaderboard",
                readmore: "readmore",
                recipe: "recipe",
                recipe_btf: "recipe",
                recipe_mobile: "recipe",
                sidebar_atf: "sidebar_atf",
                sidebar_btf: "sidebar_btf",
                zergnet: "zergnet"
              }[r] || r).toLowerCase();
            var r;
            const o = this.isAdunitBlocklistedByRegistry(i, t);
            return this.all || (0, a.P)(n[i]) || (0, a.P)(o);
          }
          isBlockListed(e) {
            const {
              adUnitId: t,
              target: n
            } = e;
            return this.checkOnPageBlockList(t, n) || this.contains(t);
          }
          isAdunitBlocklistedByRegistry(e, t) {
            return Object.keys(this.registry).filter(e => this.doesPathMatch(e, t, !!this.registry[e].starts_with)).reduce((t, n) => this.registry[n][e] || t, !1);
          }
          initRegistry() {
            this.webModel.urlFilters.forEach(e => this.registerSettingsToPath(e));
          }
          registerSettingsToPath({
            path: e,
            settings: t
          }) {
            const n = this.formatPath(e);
            this.registry[n] || (this.registry[n] = {}), this.registry[n] = function (e) {
              const t = {};
              return (0, c.RR)(e).map(n => {
                t[n.toLowerCase()] = e[n];
              }), t;
            }(m(m({}, this.registry[n]), t));
          }
          getCurrentPath() {
            return this.formatPath(this._window.location.pathname);
          }
          formatPath(e) {
            const t = document.createElement("a");
            t.href = e;
            const n = t.pathname.replace(/\.[^/.]+$/, "").replace(/\/$/, "");
            return n.length ? n : "/";
          }
          doesPathMatch(e, t, n) {
            if ("/" === e && !0 === n) return !0;
            const i = e.replace(/\*/g, ".*?");
            let r;
            return r = n ? new RegExp(`^${i}(/|$)(.*?)`) : new RegExp(`^${i}$`), r.test(t);
          }
          checkOnPageBlockList(e, t) {
            function n(e) {
              const t = Object.keys(e.dataset);
              return t.length > 0 && t.some(e => -1 !== e.indexOf(o.Iw) || -1 !== e.indexOf(o.K3));
            }
            function i(e, t) {
              const n = Array.from(e),
                i = n.filter(r.iT),
                a = n.filter(r.vm).pop(),
                s = a && (0, r.W$)(a),
                l = i.map(e => "1" === e.value && ((0, r.R_)(e, o.Nq) || (0, r.R_)(e, o.pO)));
              return !s && l.some(e => e === t || e === o.QN);
            }
            return !!t && (t === document.body ? function (t) {
              let r = !1,
                o = !1,
                a = t.attributes;
              const s = new (l())();
              let d = t;
              for (; d;) {
                if (n(d)) {
                  a = d.attributes, o = !0;
                  break;
                }
                for (let e = 0; e < d.children.length; e++) s.push(d.children[e]);
                d = s.shift();
              }
              return o && (r = i(a, e)), r;
            }(t) : function (t) {
              let r = !1,
                o = !1,
                a = t.attributes,
                s = t.parentElement;
              for (; s && !o;) o = n(s), a = s.attributes, s = s.parentElement;
              return o && (r = i(a, e)), r;
            }(t));
          }
        }
        const v = {
          Adhesion: {
            mobile: "adhesion_mobile",
            tablet: "adhesion_tablet",
            desktop: "adhesion_desktop"
          },
          Content: {
            mobile: "content_mobile",
            tablet: "content_mobile",
            desktop: "content_desktop"
          },
          Feed: {
            mobile: "feed_mobile",
            tablet: "feed_mobile",
            desktop: "feed_btf"
          },
          Interstitial: {
            mobile: "interstitial_mobile",
            tablet: "interstitial_mobile",
            desktop: "interstitial_desktop"
          },
          Leaderboard: {
            mobile: "leaderboard",
            tablet: "leaderboard",
            desktop: "leaderboard"
          },
          LeaderboardAtf: {
            mobile: "leaderboard",
            tablet: "leaderboard",
            desktop: "leaderboard"
          },
          LeaderboardBtf: {
            mobile: "leaderboard",
            tablet: "leaderboard",
            desktop: "leaderboard"
          },
          Recipe: {
            mobile: "recipe",
            tablet: "recipe",
            desktop: "recipe"
          },
          SidebarAtf: {
            mobile: "sidebar_atf",
            tablet: "sidebar_atf",
            desktop: "sidebar_atf"
          },
          SidebarBtf: {
            mobile: "sidebar_btf",
            tablet: "sidebar_btf",
            desktop: "sidebar_btf"
          },
          SidebarBtfStacked: {
            mobile: "sidebar_btf",
            tablet: "sidebar_btf",
            desktop: "sidebar_btf"
          },
          Skin: {
            mobile: null,
            tablet: null,
            desktop: "skin_desktop"
          },
          GutterAtf: {
            mobile: "gutter",
            tablet: "gutter",
            desktop: "gutter"
          },
          UniversalPlayer: {
            mobile: "universal_player_mobile",
            tablet: "universal_player_mobile",
            desktop: "universal_player_desktop"
          },
          Arrival: {
            mobile: "recipe",
            tablet: "recipe",
            desktop: "recipe"
          },
          Video: {
            mobile: null,
            tablet: null,
            desktop: null
          },
          Sidebar: {
            mobile: null,
            tablet: null,
            desktop: null
          },
          Comments: {
            mobile: "comments_mobile",
            tablet: "comments_mobile",
            desktop: "comments_btf"
          }
        };
        function y(e) {
          return v[e][d.A.deviceType];
        }
      },
      9399: (e, t, n) => {
        "use strict";

        n.d(t, {
          g: () => i
        });
        var i = (e => (e.AT = "AT", e.BE = "BE", e.BG = "BG", e.CH = "CH", e.CY = "CY", e.CZ = "CZ", e.DE = "DE", e.DK = "DK", e.EE = "EE", e.EL = "EL", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.GB = "GB", e.GR = "GR", e.HR = "HR", e.HU = "HU", e.IE = "IE", e.IS = "IS", e.IT = "IT", e.LI = "LI", e.LT = "LT", e.LU = "LU", e.LV = "LV", e.MT = "MT", e.NL = "NL", e.NO = "NO", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.SE = "SE", e.SI = "SI", e.SK = "SK", e.UK = "UK", e.ZA = "ZA", e))(i || {});
      },
      3583: (e, t, n) => {
        "use strict";

        n.d(t, {
          Af: () => v,
          Cf: () => a,
          DB: () => G,
          DY: () => N,
          Iw: () => h,
          JA: () => x,
          K3: () => g,
          LD: () => O,
          Lx: () => T,
          Mg: () => c,
          N3: () => Z,
          No: () => _,
          Nq: () => u,
          Nz: () => F,
          Pu: () => w,
          Q0: () => s,
          QK: () => y,
          QN: () => f,
          SE: () => W,
          TJ: () => P,
          Tq: () => z,
          U4: () => $,
          WC: () => R,
          Y5: () => Y,
          ZK: () => k,
          bZ: () => d,
          cm: () => C,
          eN: () => S,
          hF: () => D,
          hW: () => M,
          mY: () => E,
          n3: () => r,
          n8: () => I,
          nr: () => j,
          o6: () => m,
          ol: () => L,
          or: () => l,
          pO: () => p,
          r5: () => A,
          sg: () => B,
          tY: () => b,
          uU: () => o
        });
        var i = n(5595);
        const r = 40,
          o = 728,
          a = 768,
          s = (0, i.DY)("noRefresh", "true") ? 0 : 29,
          l = 3,
          d = 2,
          c = "data-slot-rendered",
          u = "data-blacklist-",
          p = "data-blocklist-",
          h = "blacklist",
          g = "blocklist",
          f = "all",
          m = 59,
          b = 2,
          v = 2,
          y = 46,
          w = 31536e3,
          _ = 1e3 * w,
          M = "US",
          A = !0,
          S = 1,
          I = 755,
          x = 858,
          C = "v2",
          E = 1,
          T = 46,
          P = 31536e3,
          k = "v2test",
          j = "4",
          O = "out_2",
          L = "1_native",
          N = "stickyout_1",
          D = "tam_1",
          R = "tamout_1",
          z = "1uktatc",
          B = .51,
          $ = "mv-adhesion-native",
          Z = "mv-ad-box",
          W = "content_btf_wrapper",
          Y = "content_mobile_wrapper",
          G = "mv-native-ad",
          F = 767;
      },
      7562: (e, t, n) => {
        "use strict";

        n.d(t, {
          Ee: () => w,
          FW: () => m,
          Je: () => b,
          KB: () => v,
          Og: () => a,
          QC: () => g,
          UI: () => p,
          U_: () => l,
          Y0: () => s,
          a$: () => d,
          bM: () => r,
          bg: () => i,
          qA: () => o,
          r2: () => f,
          sY: () => y,
          t_: () => u,
          y9: () => h,
          yq: () => c
        });
        const i = 300,
          r = 5,
          o = 30,
          a = 5,
          s = "mv-video-target",
          l = "mv-first-video",
          d = "mv_auto_insert_headline",
          c = "mv-video-player-clicked",
          u = 480,
          p = 640,
          h = 8e3,
          g = 2,
          f = 1500,
          m = .01,
          b = "https://securepubads.g.doubleclick.net/gampad/live/ads",
          v = "https://pubads.g.doubleclick.net/gampad/ads?slotname=/124319096/external/ad_rule_samples&sz=640x480&ciu_szs=300x250&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&url=https://developers.google.com/interactive-media-ads/docs/sdks/html5/tags&unviewed_position_start=1&output=xml_vast3&impl=s&env=vp&gdfp_req=1&ad_rule=0&vad_type=linear&vpos=preroll&pod=1&ppos=1&lip=true&min_ad_duration=0&max_ad_duration=30000&vrid=6256&video_doc_id=short_onecue&cmsid=496&kfa=0&tfcd=0",
          y = "https://securepubads.g.doubleclick.net/gampad/live/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=",
          w = "tamvid_1";
      },
      8250: (e, t, n) => {
        "use strict";

        n.d(t, {
          ZP: () => A,
          wz: () => P,
          Lq: () => x,
          v6: () => S
        });
        var i = n(6616),
          r = n(6039),
          o = n(1374),
          a = n(3528);
        const s = ["DIV", "ARTICLE", "SECTION", "MAIN", "BLOCKQUOTE", "CENTER", "P", "OL", "UL", "LI"];
        var l, d;
        (d = l || (l = {})).defaultMinCharCount = 60, d.splitAndReplaceElements = (e, t) => {
          const n = [];
          for (const i of e) {
            const {
              parentNode: e
            } = i;
            if (!P(i, /wprm/)) {
              n.push(i);
              continue;
            }
            const r = s.includes(i.tagName),
              o = !!t && i.matches(t);
            if (!r || o) {
              n.push(i);
              continue;
            }
            if (i.innerHTML.match(/img/)) {
              n.push(i);
              continue;
            }
            let a = !1;
            if (i.children.length > 0) for (const e of Array.from(i.children)) "block" === getComputedStyle(e).display && (a = !0, n.push(...d.splitAndReplaceElements([e], t)));
            if (a) continue;
            const l = d.splitParagraph(i);
            let c = !1;
            l.forEach(t => {
              if (t === i) return n.push(i);
              null == e || e.insertBefore(t, i), c = !0;
            }), c && (null == e || e.removeChild(i), n.push(...l));
          }
          return n;
        }, d.splitParagraph = e => {
          if ("P" !== e.nodeName) return [e];
          let t = "",
            n = "",
            i = 0;
          const r = e.innerHTML;
          if (!r || r.length <= d.defaultMinCharCount) return [e];
          const o = d.getSplitGenerator(r);
          let a = o.next();
          for (; !a.done;) {
            const {
              charCount: e,
              sentence: r
            } = a.value;
            0 !== e ? (i += e, n += `${r}`, i > d.defaultMinCharCount && (t += `<p>${n}</p>`, i = 0, n = ""), a = o.next()) : (n += r, a = o.next(), i += e);
          }
          n.trim() && (t += `<p>${n}</p>`);
          const s = document.createElement("template");
          return s.innerHTML = t, Array.from(s.content.children);
        }, d.getSplitGenerator = function* (e) {
          const t = u(e);
          let n = "",
            i = !1;
          for (const e of t) {
            const t = e.match(/"|“|”/g);
            t && t.length % 2 != 0 ? n ? (n += e, i = !0) : n += e : n && !i && (n += e);
            const r = {};
            if (n && i) r.sentence = n, r.charCount = n.length, n = "", i = !1;else {
              if (n && !i) continue;
              r.sentence = e, r.charCount = e.length;
            }
            yield r;
          }
        };
        const c = [/\w{3,}\.\s+/g, /!\s+/g, /\?\s+/g],
          u = e => c.reduce((e, t) => p(e, t), [e]),
          p = (e, t) => e.map(e => e.replace(t, "$&**").split("**")).reduce((e, t) => [...e, ...t], []);
        var h = n(5595),
          g = (e, t, n) => new Promise((i, r) => {
            var o = e => {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              a = e => {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
            s((n = n.apply(e, t)).next());
          });
        const f = 250,
          m = ["img", "iframe", "video", "embed", "object", "form"],
          b = [".mv-unbustable", ".wp-block-latest-posts", ".wprm-recipe-container", ".mv-create-card", ".wp-block-mv-recipe", "div[id^=om-][id$=-holder]", "div#chicory_button"],
          v = ["DIV", "ARTICLE", "SECTION", "MAIN", "BLOCKQUOTE", "CENTER"],
          y = ["OL", "UL"],
          w = ["relative", "static"],
          _ = (...e) => a.ZP.custom(["dynamic"], ...e),
          M = class {
            constructor(e) {
              var t, n, i;
              this.slots = [], this.pixelsToNextSlot = 0, this.slotCounter = 0, this.startingParagraphNumber = 0, this.leavesVisited = 0, this.minSlotsToInsert = 0, this.iterations = 0, this.insertQueue = [], this.slotFactory = e.slotFactory, this.slotClass = e.slotClass, this.uninsertableClassRegExp = e.uninsertableClassRegExp, this.uninsertableAfterSelector = e.uninsertableAfterSelector, this.uninsertableBeforeSelector = e.uninsertableBeforeSelector;
              const o = e.unbustableSelector ? [e.unbustableSelector] : [];
              this.unbustableSelector = [...b, ...o].join(", "), this.optimizeCLSMode = e.optimizeCLSMode || !1, this.minSlotsToInsert = function (e) {
                if (!e.minSlotsToInsert) return 0;
                if (e.slotLimit && e.minSlotsToInsert > e.slotLimit) return 0;
                return e.minSlotsToInsert;
              }(e);
              const a = r.A.isMobileOrTablet ? .3 : .25;
              this.divBuster = e.divBuster, this.listBuster = e.listBuster, this.belowContentEnabled = e.belowContentEnabled, this.displayContentAfterFlex = e.displayContentAfterFlex, this.bustableElements = this.getBustableElements(), this.target = e.target;
              const s = O(e.target),
                l = void 0 !== e.endingParagraphNumber ? s.length - e.endingParagraphNumber : s.length;
              var d;
              this.startingParagraphNumber = null != (t = e.startingParagraphNumber) ? t : 0, this.startingDensity = e.density || a, this.slotLimit = !!((d = e.slotLimit) && d >= 4) && d, this.elements = s.slice(this.startingParagraphNumber, l), this.stopSelector = e.stopSelector, this.minParagraphBuffer = null != (n = e.minParagraphBuffer) ? n : L(), this.contentRequireText = null != (i = e.contentRequireText) ? i : 0, this.currentParagraphBuffer = this.minParagraphBuffer, this.optShortFormContent = e.optShortFormContent || !!(0, h.DY)("test", "sfc");
            }
            static attachPrebidFacade(e) {
              M.prebidFacade = e, M.prePrebidFacadeSlots.forEach(t => {
                new o.ZP(t, e);
              }), M.prePrebidFacadeSlots = [];
            }
            createSlots() {
              return g(this, arguments, function* (e = this.startingDensity, t = !0, n) {
                this.iterations++, this.iterations > 20 && (t = !1);
                const i = z(e);
                if (this.slotCounter = 0, this.leavesVisited = 0, this.pixelsToNextSlot = n || i, this.currentParagraphBuffer = this.minParagraphBuffer, yield this.loopSlots(this.elements, t, i), !t) return e;
                if (this.optShortFormContent && N(this.slotCounter)) {
                  D(this.slotCounter) ? this.spicySlotIncreaseMode() : this.mildSlotIncreaseMode();
                  const e = r.A.isMobileOrTablet ? .3 : .25,
                    t = 100;
                  return this.pixelsToNextSlot = t, yield this.loopSlots(this.elements, !0, i), this.createSlots(e, !1, t);
                }
                const o = this.slotLimit && this.slotCounter > this.slotLimit;
                if (this.slotLimit && o) {
                  const e = i * (this.slotCounter / this.slotLimit),
                    t = R(e);
                  return this.createSlots(t);
                }
                if (this.minSlotsToInsert > this.slotCounter) {
                  const t = e * 1.1;
                  return _("Minimum slot insertation not reached. Increasing density!"), this.createSlots(t);
                }
                return _("No Slot Increase Mode applicable to this page"), this.createSlots(e, !1);
              });
            }
            spicySlotIncreaseMode() {
              this.mildSlotIncreaseMode(), _("And Spicy Slot Increase Mode"), l.splitAndReplaceElements(this.elements, this.unbustableSelector), this.elements = O(this.target), this.startingParagraphNumber = 0, this.pixelsToNextSlot = 100;
            }
            mildSlotIncreaseMode() {
              _("Mild Slot Increase Mode"), this.divBuster = !0, this.listBuster = !0, this.bustableElements = this.getBustableElements(), this.slotLimit = !1, this.minParagraphBuffer = L() - 1, this.contentRequireText = i.$.anywhere;
            }
            loopSlots(e, t, n) {
              return g(this, null, function* () {
                const i = (e, t, n) => {
                  for (let r = 0; r < e.length; r++) {
                    const o = e[r],
                      s = e[r + 1];
                    if (!o || this.stopSelector && o.matches(this.stopSelector)) break;
                    const l = Array.from(o.children),
                      d = window.getComputedStyle(o);
                    if (this.doesBustinMakeMeFeelGood(o, n, d)) {
                      i(l, t, n);
                      continue;
                    }
                    const c = "absolute" !== d.position ? E(o) : 0;
                    this.pixelsToNextSlot -= c, T(o, c) && (this.currentParagraphBuffer += 1, this.leavesVisited += 1, this.divBuster && !t && a.ZP.debug("Buster Insert Point: ", this.leavesVisited, o));
                    const u = j(o, s, this.contentRequireText),
                      p = this.listBuster && "LI" === o.tagName,
                      h = o.getBoundingClientRect().bottom > document.documentElement.clientHeight,
                      g = !this.optimizeCLSMode || h,
                      f = P(o, this.uninsertableClassRegExp) && k(o, this.uninsertableAfterSelector) && (!s || k(s, this.uninsertableBeforeSelector)) && this.pixelsToNextSlot <= 0 && (x(o) || this.displayContentAfterFlex && C(o) || p) && this.currentParagraphBuffer >= this.minParagraphBuffer && u && g;
                    _(o, "height", c, "hasRegExpAcceptableClasses", P(o, this.uninsertableClassRegExp), "hasAfterSelectorAcceptableClasses", k(o, this.uninsertableAfterSelector), "hasBeforeSelectorAcceptableClasses", !s || k(s, this.uninsertableBeforeSelector), "below pixelsToNextSlot", this.pixelsToNextSlot <= 0, "pixelsToNextSlot", this.pixelsToNextSlot, "is block or insertable element", x(o) || p, "above paragraph buffer", this.currentParagraphBuffer >= this.minParagraphBuffer, "satisfiesViewportRule", g, "satisifies placement rules", u, "meetsAllCriteria", f), f && (this.slotCounter += 1, this.currentParagraphBuffer = 0, this.pixelsToNextSlot = Math.max(this.pixelsToNextSlot + n, 200), this.insertQueue.push({
                      element: o,
                      position: p ? "beforeend" : "afterend"
                    }));
                  }
                };
                t ? (this.insertQueue = [], i(e, t, n)) : this.slots = yield Promise.all(this.insertQueue.map(e => g(this, null, function* () {
                  return M.insertSlot(e.element, this.slotClass, this.slotFactory, e.position);
                })));
              });
            }
            doesBustinMakeMeFeelGood(e, t, n) {
              if (!this.divBuster && !this.listBuster && !e.classList.contains("grow-allow-content-ads")) return !1;
              let i = !1;
              const r = e.parentElement,
                o = Array.from(e.children),
                a = n || window.getComputedStyle(e),
                s = this.bustableElements.includes(e.tagName),
                l = w.includes(a.position),
                d = o.length > 0,
                c = r && r.offsetWidth || document.body.offsetWidth,
                u = e.offsetWidth / c > .8 || e.offsetWidth >= 720,
                p = !this.unbustableSelector || !e.matches(this.unbustableSelector);
              let h = d && s && u && l && p && (x(e) || "flex" === a.display);
              return h && (i = this.pixelsToNextSlot + t < E(e), h = h && i), _("elementTagIsBustable: ", s, "elementIsBlock", x(e) || "flex" === a.display, "elementPositionIsGood", l, "elementHasChildren", d, `elementHasEnoughHeightForAd (${this.pixelsToNextSlot + t})`, i, "elementIsWideEnough", u, e.offsetWidth, r && r.offsetWidth, "pixelsToNextSlot", this.pixelsToNextSlot, t, "height", E(e), h, e.tagName, e), h;
            }
            getBustableElements() {
              let e = [];
              return this.divBuster && (e = e.concat(v)), this.listBuster && (e = e.concat(y)), this.bustableElements = e, e;
            }
            static insertSlot(e, t, n, i = "afterend", r = !1) {
              return g(this, null, function* () {
                const a = {
                    type: t,
                    selector: e,
                    insertPosition: i,
                    dynamic: !0,
                    fromHint: r
                  },
                  s = yield n.new(a);
                return s ? (s.lazy && (M.prebidFacade ? new o.ZP(s, M.prebidFacade) : M.prePrebidFacadeSlots.push(s)), s) : null;
              });
            }
          };
        let A = M;
        function S(e) {
          return !!e && !!e.textContent && e.textContent.length >= 9;
        }
        function I(e) {
          return -1 !== m.indexOf(e.nodeName.toLowerCase()) ? e : e.querySelector(m.join());
        }
        function x(e) {
          return "block" === window.getComputedStyle(e).display && !e.nodeName.match(/H[1-9]/) || "BR" === e.nodeName;
        }
        function C(e) {
          return "flex" === window.getComputedStyle(e).display;
        }
        function E(e) {
          let t = 0;
          if (e instanceof HTMLElement) {
            t = e.offsetHeight;
            const i = I(e);
            !i || (!(n = i).getAttribute("data-lazy-src") && "image" !== n.getAttribute("data-lazy-type") || n.getAttribute("src") && 1 !== n.offsetHeight) && (0 !== n.offsetHeight || "none" === n.style.display && null === n.getAttribute("srcset")) || (t += function (e, t) {
              const n = e.parentNode,
                i = parseFloat(e.getAttribute("height") || "0"),
                r = parseFloat(e.getAttribute("width") || "1"),
                o = !!e.getAttribute("src"),
                a = i / r || .75,
                s = e.offsetHeight > 100,
                l = o && s ? e.offsetWidth : 0,
                d = t && t.offsetWidth,
                c = n && n.offsetWidth;
              return (l || d || c) * a || 0;
            }(i, e));
          } else e instanceof SVGElement && (t = e.clientHeight);
          var n;
          return "none" === e.style.display && (t = 0), t;
        }
        function T(e, t) {
          return !e.querySelector(".adunit") && (I(e) || S(e)) && (t || E(e)) > 0;
        }
        A.prePrebidFacadeSlots = [];
        const P = (e, t) => !t || !Array.from(e.classList).some(e => t.test(e)),
          k = (e, t) => !t || !e.matches(t);
        function j(e, t, n) {
          let r = !0;
          const o = I(e);
          return n === i.$.onlyAfterTextParagraphs && (r = !o && S(e)), n === i.$.onlyBetweenTextParagraphs && (r = !o && S(e) && S(t) && !I(t)), r;
        }
        function O(e) {
          let t = e && e.children;
          for (; t && 1 === t.length && t[0].children && t[0].children.length > 0;) t = t[0].children;
          return t ? Array.from(t) : [];
        }
        const L = (e = r.A.isMobileOrTablet) => 2,
          N = e => e < ((e = r.A.isMobileOrTablet) => e ? 6 : 3)(),
          D = (e, t = r.A.isMobileOrTablet) => t && e < 4 || !t && e < 2,
          R = e => f / (e + f),
          z = e => parseInt(f / e - f, 10);
      },
      9: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z9: () => u
        });
        var i = Object.defineProperty,
          r = Object.getOwnPropertySymbols,
          o = Object.prototype.hasOwnProperty,
          a = Object.prototype.propertyIsEnumerable,
          s = (e, t, n) => t in e ? i(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n,
          l = (e, t) => {
            for (var n in t || (t = {})) o.call(t, n) && s(e, n, t[n]);
            if (r) for (var n of r(t)) a.call(t, n) && s(e, n, t[n]);
            return e;
          };
        const d = Object.freeze({
            adXNative: "adXNative",
            adXStandard: "adXStandard"
          }),
          c = Object.freeze({
            prebidStandard: "prebidStandard",
            inBannerNative: "inBannerNative",
            prebidNative: "prebidNative"
          }),
          u = Object.freeze(l(l({}, d), c));
      },
      2845: (e, t, n) => {
        "use strict";

        n.d(t, {
          L4: () => a,
          SL: () => o,
          nf: () => r,
          tO: () => i
        });
        var i = (e => (e.google = "google", e.gumgum = "gumgum", e.indexExchange = "indexExchange", e.pubmatic = "pubmatic", e.rubicon = "rubicon", e.triplelift = "triplelift", e.uam = "amazon", e.S2S = "S2S", e))(i || {}),
          r = (e => (e.pulsepoint_s2s = "pulsepoint_s2s", e.districtm_s2s = "districtm_s2s", e.sovrn_s2s = "sovrn_s2s", e.appnexus_s2s = "appnexus_s2s", e.openx_s2s = "openx_s2s", e.rubicon_s2s = "rubicon_s2s", e.emx_s2s = "brealtime_s2s", e.indexExchange_s2s = "indexExchange_s2s", e.yieldmo_s2s = "yieldmo_s2s", e.nativo_s2s = "nativo_s2s", e.kargo_s2s = "kargo_s2s", e))(r || {}),
          o = (e => (e.uam = "amazon", e.gumgum = "gumgum", e.indexExchange = "indexExchange", e.pubmatic = "pubmatic", e.rubicon = "rubicon", e.S2S = "S2S", e))(o || {}),
          a = (e => (e.uam = "amazon", e.indexExchange = "indexExchange", e.pubmatic = "pubmatic", e.rubicon = "rubicon", e.triplelift = "triplelift", e.S2S = "S2S", e))(a || {});
      },
      1272: (e, t, n) => {
        "use strict";

        n.d(t, {
          C: () => i
        });
        var i = (e => (e.Brazil = "BR", e.China = "CN", e.Cuba = "CU", e.Iran = "IR", e["North Korea"] = "KP", e.Russia = "RU", e.Switzerland = "CH", e.Syria = "SY", e))(i || {});
      },
      3127: (e, t, n) => {
        "use strict";

        n.d(t, {
          l: () => i
        });
        var i = (e => (e.velocityCheck = "velocityCheck", e.version = "version", e.contentMobileOffsetMultiplier = "content_mobile offset multiplier", e.contentBtfOffsetMultiplier = "content_btf offset multiplier", e.contentMobileTimeout = "Content Mobile Timeout", e.s2sBeta = "s2sBeta", e.recipeOffset = "Recipe Offset Multiplier", e.feedBtfOffsetMultiplier = "feed_btf Offset Multiplier", e.feedMobileOffsetMultiplier = "feed_mobile Offset Multiplier", e.feedMobileTimeout = "Feed Mobile Timeout", e.slidebarOffsetMultiplier = "Slidebar Offset Multiplier", e))(i || {});
      },
      4222: (e, t, n) => {
        "use strict";

        n.d(t, {
          w: () => i
        });
        var i = (e => (e.placement = "placement", e.comscore = "comscore", e.googletag = "gpt", e.growFaves = "growFaves", e.pubnation = "pubnation", e.gumgum = "gumgum", e.videoPlayer = "videoPlayer", e.nonLazyRequestsLoaded = "nonLazyRequestsLoaded", e.zergnet_id = "zergnet_id", e.zergnet_traffic_id = "zergnet_traffic_id", e.p_and_g_pixel = "p_and_g_pixel", e.ima = "ima", e))(i || {});
      },
      5077: (e, t, n) => {
        "use strict";

        n.d(t, {
          D: () => i
        });
        var i = (e => (e.banner = "banner", e.video = "video", e.outstream = "outstream", e.native = "native", e))(i || {});
      },
      6643: (e, t, n) => {
        "use strict";

        n.d(t, {
          D: () => i
        });
        var i = (e => (e.strict = "strict", e.lax = "lax", e.none = "none", e))(i || {});
      },
      6616: (e, t, n) => {
        "use strict";

        n.d(t, {
          $: () => i
        });
        var i = (e => (e[e.anywhere = 0] = "anywhere", e[e.onlyAfterTextParagraphs = 1] = "onlyAfterTextParagraphs", e[e.onlyBetweenTextParagraphs = 2] = "onlyBetweenTextParagraphs", e))(i || {});
      },
      5914: (e, t, n) => {
        "use strict";

        n.d(t, {
          y: () => i
        });
        var i = (e => (e.AL = "AL", e.AK = "AK", e.AS = "AS", e.AZ = "AZ", e.AR = "AR", e.CA = "CA", e.CO = "CO", e.CT = "CT", e.DE = "DE", e.DC = "DC", e.FM = "FM", e.FL = "FL", e.GA = "GA", e.GU = "GU", e.HI = "HI", e.ID = "ID", e.IL = "IL", e.IN = "IN", e.IA = "IA", e.KS = "KS", e.KY = "KY", e.LA = "LA", e.ME = "ME", e.MH = "MH", e.MD = "MD", e.MA = "MA", e.MI = "MI", e.MN = "MN", e.MS = "MS", e.MO = "MO", e.MT = "MT", e.NE = "NE", e.NV = "NV", e.NH = "NH", e.NJ = "NJ", e.NM = "NM", e.NY = "NY", e.NC = "NC", e.ND = "ND", e.MP = "MP", e.OH = "OH", e.OK = "OK", e.OR = "OR", e.PW = "PW", e.PA = "PA", e.PR = "PR", e.RI = "RI", e.SC = "SC", e.SD = "SD", e.TN = "TN", e.TX = "TX", e.UT = "UT", e.VT = "VT", e.VI = "VI", e.VA = "VA", e.WA = "WA", e.WV = "WV", e.WI = "WI", e.WY = "WY", e))(i || {});
      },
      2321: (e, t, n) => {
        "use strict";

        n.d(t, {
          j: () => r,
          Z: () => a
        });
        var i = n(3194);
        var r = (e => (e.impressionViewable = "impressionViewable", e.slotVisibilityChanged = "slotVisibilityChanged", e.slotRenderEnded = "slotRenderEnded", e.slotWrapperRenderEnded = "slotWrapperRenderEnded", e.slotBidRequested = "slotBidRequested", e.bidResponse = "bidResponse", e.bidWon = "bidWon", e.auctionEnd = "auctionEnd", e.bidRequested = "bidRequested", e.bidReady = "bidReady", e.bidTimeout = "bidTimeout", e.timeOnSite = "timeOnSite", e.initLauncher = "initLauncher", e.outstreamAdCanPlay = "outstreamAdCanPlay", e.outstreamAdStart = "outstreamAdStart", e.outstreamAdError = "outstreamAdError", e.registerRefreshable = "registerRefreshable", e.refreshTimeReached = "refreshTimeReached", e.slotRefreshed = "slotRefreshed", e.shortCircuitRefresh = "shortCircuitRefresh", e.resetRefreshable = "resetRefreshable", e.heavyAdRemoved = "heavyAdRemoved", e.coreVital = "coreVital", e.sequenceError = "sequenceError", e.lineItemFailure = "lineItemFailure", e))(r || {});
        class o extends i.p {
          constructor(e) {
            super(r), e.registerGlobalEvents && function () {
              try {
                const e = new ReportingObserver((e, t) => {
                  e.forEach(e => a.trigger(a.events.heavyAdRemoved, e));
                }, {
                  buffered: !0
                });
                window.addEventListener("pagehide", t => {
                  e.takeRecords().forEach(e => a.trigger(a.events.heavyAdRemoved, e));
                });
              } catch (e) {}
            }();
          }
          on(e, t) {
            return super.on(e, t);
          }
          trigger(e, ...t) {
            return super.trigger(e, ...t);
          }
        }
        const a = new o({
          registerGlobalEvents: !0
        });
      },
      7713: (e, t, n) => {
        "use strict";

        function i(e) {
          const t = Math.round(100 * e) / 100;
          let n = 0;
          return n = t <= .1 ? .1 : t < 1.11 ? .01 * Math.round(t / .01) : t < 1.8 ? .03 * Math.round(t / .03) : t < 3 ? .05 * Math.round(t / .05) : t < 12 ? .15 * Math.round(t / .15) : t < 20 ? .25 * Math.round(t / .25) : t < 40 ? 1 * Math.round(t / 1) : t < 70 ? 2 * Math.round(t / 2) : t < 200 ? 5 * Math.round(t / 5) : 200, n;
        }
        function r(e) {
          const t = i(Number(e));
          return Math.round(100 * t).toString();
        }
        function o(e, t) {
          const n = 1.25 * Number(e),
            r = i(Math.max(n, t)),
            o = Math.round(100 * r);
          return o < 138 ? 138..toString() : o.toString();
        }
        n.d(t, {
          av: () => o,
          hL: () => i,
          sS: () => r
        });
      },
      9238: (e, t, n) => {
        "use strict";

        n.d(t, {
          Y: () => d
        });
        var i = n(2321),
          r = n(2200);
        const o = "[class*=grow-exclusive-content-widget]",
          a = "growExclusive",
          s = `\n  body ${o} .adunitwrapper {\n    visibility: hidden;\n    display: none;\n  }\n  body ${o} mv-ad-reporter {\n    visibility: hidden;\n    display: none;\n  }\n`,
          l = class {
            static slotIsBlocked(e) {
              return l.blockEnabled && l.blockedAdUnits.has(e);
            }
            static userLoggedIn() {
              l.blockEnabled = !1;
              const e = document.querySelector("#growExclusive");
              e && e.remove();
            }
            constructor() {
              l.blockEnabled = !0, (0, r.hm)(s, a), i.Z.on(i.Z.events.slotWrapperRenderEnded, e => {
                e.wrapper.matches(`${o} div`) && l.blockedAdUnits.add(e);
              });
            }
          };
        let d = l;
        d.blockedAdUnits = new Set(), d.blockEnabled = !1;
      },
      9909: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => g
        });
        var i = n(5671),
          r = n(5595),
          o = n(4222),
          a = n(3528);
        const s = () => {
          return e = void 0, t = null, i = function* () {
            if (!window.uuid) {
              const {
                v5: e
              } = yield n.e(2063).then(n.bind(n, 7017));
              window.uuid = {
                v5: e
              };
            }
          }, new Promise((n, r) => {
            var o = e => {
                try {
                  s(i.next(e));
                } catch (e) {
                  r(e);
                }
              },
              a = e => {
                try {
                  s(i.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, a);
            s((i = i.apply(e, t)).next());
          });
          var e, t, i;
        };
        var l = n(9238),
          d = n(2183),
          c = (e => (e.notEnabled = "1", e.enabledNotLoaded = "2", e.loadedAndResponsible = "3", e.loadedNotResponsible = "4", e))(c || {}),
          u = n(2005);
        const p = "https://faves.grow.me",
          h = class {
            constructor(e) {
              var t;
              let n = `${p}/main.js`;
              const d = (0, r.Ph)("growFavesVersion"),
                u = (0, r.Ph)("growFavesSiteId") || (null == (t = window.GrowMeSite) ? void 0 : t.id) || e.growSiteID;
              d && (n = `${p}/main.${d}.js`), h.willGrowLoad() ? (new l.Y(), h.growIsLoading = !0, h.state = c.enabledNotLoaded, this.setUpGrowStub(), h.growHasLoaded = new Promise((e, t) => {
                i(n, o.w.growFaves, {
                  before: function (e, t) {
                    u && t.setAttribute("data-grow-faves-site-id", u);
                  },
                  success() {
                    window.growMe && window.growMe(() => {
                      window.growMe && (window.growMe.on("loaded", ({
                        source: t,
                        version: n
                      }) => {
                        t ? (h.source = t, h.state = c.loadedAndResponsible) : h.state = c.loadedNotResponsible, n && (h.version = n), e();
                      }), window.growMe.on("authStatusChanged", ({
                        isLoggedIn: e,
                        readerId: t,
                        gid: n
                      }) => {
                        h.gid = n && n.toString() || "0", h.hasLoggedInUser = e, e && l.Y.userLoggedIn(), setTimeout(() => window.$adManagementConfig.growId = t, 500), e && s(), window.pbjs && window.pbjs.que.push(() => {
                          window.pbjs.refreshUserIds();
                        });
                      }), window.growMe.on("uid2AdvertisingTokenChanged", ({
                        advertisingToken: e
                      }) => window.$adManagementConfig.uid2 = e), window.growMe.on("id5IdChanged", ({
                        connectId: e
                      }) => {
                        window.$adManagementConfig.connectId = null != e ? e : "";
                      }), window.growMe.on("publinkIdChanged", ({
                        publink: e
                      }) => {
                        window.$adManagementConfig.publinkId = e;
                      }));
                    });
                  },
                  error(e) {
                    t(e);
                  }
                }), setTimeout(() => {
                  a.ZP.debug("Grow.me load timed out."), t("Grow Timeout (4000 ms) Exceeded.");
                }, 4e3);
              }).catch(e => a.ZP.debug(e) && void 0)) : (h.growIsLoading = !1, h.growHasLoaded = Promise.reject("Grow is not supposed to load.").catch(e => a.ZP.debug(e) && void 0), a.ZP.debug("ERROR: both ?growFavesAccountId and ?growFavesSiteId must be specified to load GrowFaves"));
            }
            static insert(e) {
              window.growMe && (0, u.m)(window.growMe.insert) && window.growMe.insert(e);
            }
            setUpGrowStub() {
              if (window.growMe) return;
              const e = e => {
                var t;
                return null == (t = window.growMe) ? void 0 : t._.push(e);
              };
              e._ = [], window.growMe = e;
            }
            static willGrowLoad() {
              var e;
              const t = window.$adManagementConfig.web.model;
              return !!((0, r.Ph)("growFavesSiteId") || (null == (e = window.GrowMeSite) ? void 0 : e.id)) || !(!t.growFavesEnabled || !t.growSiteID);
            }
          };
        let g = h;
        g.hasLoggedInUser = !1, g.gid = d.V_.noAuth, g.state = c.notEnabled, g.carouselSelector = "[class^='MiniCarousel']", g.rootSelector = "div#grow-me-root";
      },
      3580: (e, t, n) => {
        "use strict";

        function i(e) {
          return window.pageYOffset + e.getBoundingClientRect().top;
        }
        n.d(t, {
          Z: () => i
        });
      },
      2200: (e, t, n) => {
        "use strict";

        n.d(t, {
          AE: () => d,
          Cx: () => l,
          IV: () => s,
          Od: () => a,
          cn: () => o,
          hm: () => r,
          i_: () => u
        });
        var i = n(3580);
        function r(e, t) {
          !function (e, t, n) {
            const i = document.createElement("style");
            i.type = "text/css", n && i.setAttribute("id", n), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
            e.appendChild(i);
          }(document.head || document.getElementsByTagName("head")[0], e, t);
        }
        const o = (e, t) => {
            null !== e && (e.classList ? e.classList.add(t) : e.className += ` ${t}`);
          },
          a = e => {
            null !== e && null !== e.parentNode && e.parentNode.removeChild(e);
          },
          s = (e, t) => {
            null !== e && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp(`(^|\\b)${t.split(" ").join("|")}(\\b|$)`, "gi"), " "));
          };
        function l(e, t) {
          return (0, i.Z)(e) < (0, i.Z)(t);
        }
        const d = e => {
            "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", () => {
              "loading" !== document.readyState && e();
            });
          },
          c = "mv-size";
        function u(e, t) {
          !function (e, t) {
            Array.from(t.classList).forEach(n => {
              n.match(new RegExp(e, "g")) && t.classList.remove(n);
            });
          }(c, t);
          const n = `mv-size-${e.size[0]}x${e.size[1]}`;
          t.classList.add(n);
        }
      },
      7194: (e, t, n) => {
        "use strict";

        function i(e) {
          return -1 !== ["1", "true", !0, 1].indexOf(e);
        }
        n.d(t, {
          P: () => i
        });
      },
      6039: (e, t, n) => {
        "use strict";

        n.d(t, {
          A: () => r
        });
        const i = window.$adManagementConfig.bowser.parse(window.navigator.userAgent);
        class r {
          static get isSafariOrIOS() {
            return r.isIOS || "Safari" === r.browser;
          }
          static get isMobile() {
            return "mobile" === i.platform.type;
          }
          static get isTablet() {
            return "tablet" === i.platform.type;
          }
          static get isMobileOrTablet() {
            return "mobile" === i.platform.type || "tablet" === i.platform.type;
          }
          static get isDesktop() {
            return !this.isMobileOrTablet;
          }
          static get isTv() {
            return "tv" === i.platform.type;
          }
          static get isAndroid() {
            return "Android" === i.os.name;
          }
          static get isIOS() {
            return "iOS" === i.os.name;
          }
          static get isBot() {
            return "bot" === i.platform.type;
          }
          static get os() {
            return i.os.name || "";
          }
          static get osversion() {
            return i.os.version;
          }
          static get browser() {
            return i.browser.name || "";
          }
          static get supportsScrollAnchor() {
            return void 0 !== window.document.body.style.overflowAnchor;
          }
          static get deviceType() {
            return i.platform.type;
          }
        }
      },
      6185: (e, t, n) => {
        "use strict";

        n.d(t, {
          K: () => r
        });
        var i = n(6189);
        class r {
          constructor(e) {
            this.allExperiments = e;
          }
          activate(e) {
            const t = this.allExperiments.filter(t => t && t.flag === e);
            if (!t.length) return null;
            let n;
            for (let e = 0; e < t.length; e++) if (t[e].default && !0 === t[e].default) {
              n = t[e];
              break;
            }
            if (!n) throw Error(`No default experiment provided for ${e}`);
            const r = t.reduce((e, t) => t && !t.default && t.percent + e || e, 0);
            let o = Math.max(100, r) * i.Vl;
            const a = (0, i.tr)(o);
            for (const e of t) if (!e.default && (o -= e.percent * i.Vl, a > o)) {
              n = e;
              break;
            }
            const s = /random\((\d+.?\d*),\s*(\d+.?\d*),?\s*(\d+)\)/.exec(n.value);
            if (s) {
              return function (e, t, n) {
                const i = Math.random() * (t - e) + e,
                  r = Math.pow(10, n);
                return Math.floor(i * r) / r;
              }(parseFloat(s[1]), parseFloat(s[2]), parseInt(s[3], 10));
            }
            return n.value;
          }
        }
      },
      3528: (e, t, n) => {
        "use strict";

        n.d(t, {
          Yd: () => o,
          ZP: () => a,
          in: () => r
        });
        var i = n(5595),
          r = (e => (e.silent = "silent", e.debug = "debug", e))(r || {});
        class o {
          constructor(e) {
            this.logLevel = e, this.debug = (...e) => this.custom("debug", ...e);
          }
          custom(e, ...t) {
            return this.isCurrentLogLevel(e) && window.console.log(...t), this;
          }
          isCurrentLogLevel(e) {
            return this.logLevel === e || Array.isArray(e) && -1 !== e.indexOf(this.logLevel);
          }
        }
        const a = new o((0, i.Ph)("loglevel", window.location.search) || "silent");
      },
      5662: (e, t, n) => {
        "use strict";

        n.d(t, {
          Y: () => o,
          c: () => s
        });
        class i {
          constructor(e) {
            this.observerClass = e, this.instances = {}, this.callbacks = {}, this.fireCallbacks = e => (t, n) => {
              this.callbacks[e].forEach(e => e(t, n));
            };
          }
          onChange(e, t, n) {
            const i = JSON.stringify(t),
              r = this.instances[i] = this.instances[i] || new this.observerClass(this.fireCallbacks(i), t);
            return this.callbacks[i] = this.callbacks[i] || [], this.callbacks[i].push(e), n && this.observe(n, t), r;
          }
          observe(e, t) {
            const n = JSON.stringify(t),
              i = this.instances[n] = this.instances[n] || new this.observerClass(this.fireCallbacks(n), t);
            return i.observe(e, t), i;
          }
          disconnect(e, t) {
            const n = JSON.stringify(t),
              i = this.instances[n] = this.instances[n] || new this.observerClass(this.fireCallbacks(n), t);
            return i.disconnect(e, t), i;
          }
        }
        let r;
        const o = () => r = r || new i(MutationObserver);
        let a;
        const s = () => a = a || new i(IntersectionObserver);
      },
      1577: (e, t, n) => {
        "use strict";

        n.d(t, {
          X: () => r
        });
        const i = class {
          static init() {
            i.currentPosition = window.pageYOffset, i.delta = 0, i.lastRequestTime = performance.now(), i.eventListener = window.setInterval(i.calcDelta.bind(i), 100);
          }
          static calcDelta() {
            requestAnimationFrame(() => {
              i.calcDeltaHelper();
            });
          }
          static calcDeltaHelper() {
            const e = performance.now(),
              t = e - i.lastRequestTime;
            if (t < 25) return;
            const n = window.pageYOffset;
            i.delta = Math.abs((i.currentPosition - n) / (t / 100)), i.currentPosition = n, i.lastRequestTime = e;
          }
        };
        let r = i;
        r.currentPosition = 0, r.delta = 0, r.eventListener = 0;
      },
      2907: (e, t, n) => {
        "use strict";

        var i;
        n.d(t, {
          o: () => i
        }), (e => {
          e.parse = function (e) {
            for (var n = t, i = n.parser[n.strictMode ? "strict" : "loose"].exec(e) || "strict", r = {}, o = 14; o--;) r[n.key[o]] = i[o] || "";
            return r[n.q.name] = {}, r[n.key[12]].replace(n.q.parser, function (e, t, i) {
              t && (r[n.q.name][t] = i);
            }), r;
          };
          const t = {
            strictMode: !1,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
              name: "queryKey",
              parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
              strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
              loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
          };
          e.getParam = function (e) {
            for (var t = {}, n = (e || window.location.search.substring(1)).split("&"), i = 0; i < n.length; i++) {
              var r = n[i].split("=");
              if (void 0 === t[r[0]]) t[r[0]] = r[1];else if ("string" == typeof t[r[0]]) {
                var o = [t[r[0]], r[1]];
                t[r[0]] = o;
              } else t[r[0]].push(r[1]);
            }
            return t;
          }, e.getHost = function (t) {
            return e.parse(t).host.replace("www.", "");
          };
        })(i || (i = {}));
      },
      2658: (e, t, n) => {
        "use strict";

        n.d(t, {
          s: () => c,
          t: () => u
        });
        var i = Object.defineProperty,
          r = Object.defineProperties,
          o = Object.getOwnPropertyDescriptors,
          a = Object.getOwnPropertySymbols,
          s = Object.prototype.hasOwnProperty,
          l = Object.prototype.propertyIsEnumerable,
          d = (e, t, n) => t in e ? i(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n;
        const c = e => e[Math.floor(Math.random() * e.length)],
          u = e => {
            const t = e.reduce((e, t) => {
              return n = ((e, t) => {
                for (var n in t || (t = {})) s.call(t, n) && d(e, n, t[n]);
                if (a) for (var n of a(t)) l.call(t, n) && d(e, n, t[n]);
                return e;
              })({}, e), r(n, o({
                [t]: !0
              }));
              var n;
            }, {});
            return Object.keys(t);
          };
      },
      9879: (e, t, n) => {
        "use strict";

        n.d(t, {
          F2: () => u,
          oH: () => c
        });
        var i = n(3127),
          r = n(6185),
          o = n(5595),
          a = n(6189),
          s = n(3528),
          l = n(2137);
        Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
        function d(e, t, n) {
          const r = "production" === e ? i.l.s2sBeta : "version",
            o = [];
          return t.filter(e => !e.slugs || e.slugs[n]).forEach(e => {
            o.push({
              flag: r,
              percent: parseInt(e.trafficPercentage, 10),
              value: e.version
            });
          }), o.push({
            flag: r,
            default: !0,
            value: "production"
          }), o;
        }
        function c(e = "production", t = window.$adManagementConfig.web.model.s2sBetas) {
          const n = (0, o.Ph)("s2sVersion");
          if (n) return {
            group: "t",
            version: n,
            name: n
          };
          if (window.$adManagementConfig.web.s2sBetaSelection) return window.$adManagementConfig.web.s2sBetaSelection;
          const s = d(e, t, ""),
            l = new r.K(s).activate(i.l.s2sBeta),
            c = 100 * a.Vl,
            u = (0, a.tr)(c) <= .5 * c;
          let p = "";
          p = l && l !== e ? u ? `${l}-t` : `${l}-c` : e;
          const h = {
            version: l || "production",
            name: p
          };
          return window.$adManagementConfig.web.s2sBetaSelection = h, h;
        }
        function u(e, t) {
          const n = (0, o.Ph)("videoVersion");
          if (n) return {
            name: `${n}-beta-test`,
            version: n
          };
          const i = new l.z_();
          if (i.depth > 1 && i.videoVersionGroup) {
            const n = i.videoVersionGroup.version;
            if (n === e || t.some(e => e.version === n)) return i.videoVersionGroup;
          }
          try {
            const n = 500,
              r = 100 * a.Vl,
              o = (0, a.tr)(r) <= n;
            let s = (0, a.tr)(100);
            for (const {
              trafficPercentage: n,
              version: r
            } of t) {
              if (s <= n) {
                const t = {
                  name: o ? `${r}-beta-control` : `${r}-beta-test`,
                  version: o ? e : r
                };
                return i.setVideoVersionGroup(t), t;
              }
              s -= n;
            }
          } catch (e) {
            s.ZP.debug("Problem selecting group:", e);
          }
          const r = {
            name: "default",
            version: e
          };
          return i.setVideoVersionGroup(r), r;
        }
      },
      4441: (e, t, n) => {
        "use strict";

        n.d(t, {
          V: () => u
        });
        var i = n(6643),
          r = Object.defineProperty,
          o = Object.getOwnPropertySymbols,
          a = Object.prototype.hasOwnProperty,
          s = Object.prototype.propertyIsEnumerable,
          l = (e, t, n) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n,
          d = (e, t) => {
            for (var n in t || (t = {})) a.call(t, n) && l(e, n, t[n]);
            if (o) for (var n of o(t)) s.call(t, n) && l(e, n, t[n]);
            return e;
          };
        const c = n(6808);
        class u {
          constructor({
            name: e,
            sameSite: t,
            maxAge: n
          }) {
            this.name = e, this.sameSite = t || i.D.strict, this.maxAge = n;
          }
          set(e, t = {}) {
            const n = {
              sameSite: this.sameSite
            };
            this.maxAge && (t["max-age"] = String(this.maxAge)), c.set(this.name, e, d(d({}, n), t));
          }
          get value() {
            const e = c.get(this.name);
            try {
              return JSON.parse(e);
            } catch (t) {
              return e || "";
            }
          }
        }
      },
      9225: (e, t, n) => {
        "use strict";

        function i(e) {
          let t,
            n = e;
          return (...e) => (n && (t = n(...e), n = null), t);
        }
        n.d(t, {
          r: () => i
        });
      },
      2001: (e, t, n) => {
        "use strict";

        function i(e) {
          if ("object" == typeof (t = e) && null !== t && "message" in t && "string" == typeof t.message) return e;
          var t;
          try {
            return new Error(JSON.stringify(e));
          } catch (t) {
            return new Error(String(e));
          }
        }
        function r(e) {
          return i(e).message;
        }
        n.d(t, {
          H: () => i,
          e: () => r
        });
      },
      5595: (e, t, n) => {
        "use strict";

        n.d(t, {
          DY: () => o,
          Ph: () => r,
          nB: () => s
        });
        var i = n(6091);
        function r(e, t = window.location.search) {
          return a(t)[e];
        }
        function o(e, t, n = window.location.search) {
          const i = a(n)[e];
          return -1 !== (Array.isArray(i) ? i : [i]).indexOf(t);
        }
        function a(e) {
          return e ? e.replace(/^\?/, "").split("&").reduce((e, t) => {
            let n = t.indexOf("=");
            n = -1 === n ? t.length : n;
            let i = t.slice(0, n);
            const r = decodeURIComponent(t.slice(n + 1));
            return /\[\]$/.test(i) ? (i = i.replace("[]", ""), e[i] = e[i] || [], Array.isArray(e[i]) && e[i].push(r)) : e[i] = r || "", e;
          }, {}) : {};
        }
        function s(e) {
          return (0, i.RR)(e).map(t => Array.isArray(e[t]) ? e[t].map(e => `${t}[]=${e}`).join("&") : `${t}=${e[t]}`).join("&");
        }
      },
      2005: (e, t, n) => {
        "use strict";

        n.d(t, {
          m: () => i
        });
        const i = e => Boolean(e && "function" == typeof e && e.apply && e.call);
      },
      6497: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => r
        });
        var i = n(6497);
        const r = {
          fetch: function (e, t = "GET", n = null, i) {
            return new Promise((r, o) => {
              const a = new XMLHttpRequest();
              a.onloadend = function () {
                try {
                  a.readyState === XMLHttpRequest.DONE && 200 === a.status || 204 === a.status ? r(a) : o(a);
                } catch (e) {
                  o(e);
                }
              }, a.open(t, e), "function" == typeof i && i(a), a.send(n);
            });
          },
          fetchJson: function (e, t = "GET", n = null, r) {
            return o = this, a = null, s = function* () {
              return i.Z.fetch(e, t, n, r).then(e => JSON.parse(e.responseText));
            }, new Promise((e, t) => {
              var n = e => {
                  try {
                    r(s.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                i = e => {
                  try {
                    r(s.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                r = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, i);
              r((s = s.apply(o, a)).next());
            });
            var o, a, s;
          }
        };
      },
      6091: (e, t, n) => {
        "use strict";

        n.d(t, {
          RR: () => s,
          mT: () => o,
          t1: () => a
        });
        var i = n(3692),
          r = n(6189);
        function o(e) {
          return i(e).map(function (e) {
            (this.circular || -1 !== [null, void 0].indexOf(e)) && this.remove();
          });
        }
        const a = e => {
            const t = Object.keys(e),
              n = t.length - 1;
            return t[(0, r.Iy)(0, n)];
          },
          s = Object.keys;
      },
      3194: (e, t, n) => {
        "use strict";

        n.d(t, {
          p: () => i
        });
        class i {
          constructor(e) {
            this.events = e, this.register = {}, this.oneRegister = {};
          }
          one(e, t) {
            return Array.isArray(this.oneRegister[e]) ? this.oneRegister[e].push(t) : this.oneRegister[e] = [t], this;
          }
          on(e, t) {
            return Array.isArray(this.register[e]) ? this.register[e].push(t) : this.register[e] = [t], () => {
              this.off(e, t);
            };
          }
          off(e, t) {
            const n = this.register[e],
              i = n.findIndex(e => e === t);
            i >= 0 && n.splice(i, 1);
          }
          trigger(e, ...t) {
            if (!this.register[e] && !this.oneRegister[e]) return this;
            for (; this.oneRegister[e] && this.oneRegister[e].length;) {
              const n = this.oneRegister[e].pop();
              "function" == typeof n && n.apply(n, t);
            }
            return this.register[e] && this.register[e].forEach(function (e) {
              e.apply(e, t);
            }), this;
          }
          reset() {
            this.register = {}, this.oneRegister = {};
          }
        }
      },
      6189: (e, t, n) => {
        "use strict";

        n.d(t, {
          Iy: () => r,
          Vl: () => a,
          _Y: () => i,
          tr: () => o
        });
        const i = (e = .5) => Math.random() <= e,
          r = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
          o = e => Math.floor(Math.random() * e) + 1,
          a = 10;
      },
      4381: (e, t, n) => {
        "use strict";

        n.d(t, {
          h: () => r
        });
        var i = n(6091);
        const r = e => ({
          onto: (t, n) => e && (0, i.RR)(e).map(i => {
            const r = e[i];
            n && -1 !== n.indexOf(i) || (t[i] = r);
          })
        });
      },
      2379: (e, t, n) => {
        "use strict";

        n.d(t, {
          G: () => r
        });
        const i = class {
          static get width() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          }
          static get height() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          }
          static isWindowTooSmall() {
            return i.height <= i.MIN_WINDOW_HEIGHT && i.width <= i.MIN_WINDOW_WIDTH;
          }
        };
        let r = i;
        r.MIN_WINDOW_HEIGHT = 250, r.MIN_WINDOW_WIDTH = 300;
      },
      8490: (e, t, n) => {
        "use strict";

        n.d(t, {
          f: () => s
        });
        var i = n(2321),
          r = n(2200),
          o = n(3528);
        const a = class {
          constructor(e) {
            this.webModel = e, this.setupCssClasses(), i.Z.on(i.Z.events.bidWon, this.onBidWon.bind(this));
          }
          onBidWon(e) {
            if (this.isHighImpactAdhesion(e)) {
              o.ZP.custom(["highImpactAdhesion", "debug"], "High Impact Adhesion Bid", e);
              const t = document.querySelector(`#${a.container.id} .adhesion_wrapper`);
              t && (t.style.height = "150px");
            }
          }
          isHighImpactAdhesion(e) {
            var t;
            return Boolean(e.adUnitCode.includes("adhesion") && (null == (t = e.ext) ? void 0 : t.isHighImpactAdhesion));
          }
          setupCssClasses() {
            const e = document.createElement("div");
            e.id = a.container.id, a.isEnabled(this.webModel) && ((0, r.cn)(e, a.container.className), (0, r.cn)(document.body, a.container.className)), document.body.appendChild(e);
          }
          static isEnabled(e) {
            return Boolean(e.high_impact_adhesion);
          }
        };
        let s = a;
        s.partners = new Set(["kargo"]), s.container = {
          id: "fixed_container_bottom",
          className: "highImpact_adhesion"
        }, s.adSizes = [[320, 100]], s.isValid = (e, t) => {
          var n;
          return Boolean((null == (n = e.adUnitCode) ? void 0 : n.includes("adhesion")) && t.high_impact_adhesion);
        }, s.isHighImpactAdhesionPartner = e => Boolean(e.s2sBidder && a.partners.has(e.s2sBidder));
      },
      3769: (e, t, n) => {
        "use strict";

        n.d(t, {
          k: () => a
        });
        var i = n(8250),
          r = n(6039);
        const o = class {
          constructor() {
            throw Error("Singleton class. Do not instantiate.");
          }
          static getSizeOverride(e) {
            const t = (e && e.replace(/\s/g, "").split(",") || []).reduce((e, t) => {
                const n = t[0],
                  i = this.validSizeOverrideDeviceValues.includes(n),
                  r = i ? n : "all",
                  o = i ? t.slice(1) : t,
                  [a, s] = o.split("x").map(e => parseInt(e, 10));
                return e[r].push([a, s]), e;
              }, {
                all: [],
                m: [],
                t: [],
                d: []
              }),
              n = t.all;
            return r.A.isMobile ? n.concat(t.m) : r.A.isTablet ? n.concat(t.t) : n.concat(t.d);
          }
          static getHintParagraphs(e) {
            return Array.from(document.querySelectorAll(r.A.isMobileOrTablet ? e.mobileSelector : e.desktopSelector));
          }
          static getTypeHintParagraphs(e) {
            const t = r.A.isMobileOrTablet ? e.mobileSelector : e.desktopSelector,
              n = e.slot ? `[${o.SLOT_TYPE_ATTRIBUTE}="${e.slot.toLowerCase()}"]` : "";
            return Array.from(document.querySelectorAll(`${n}${t}`));
          }
          static addSlotsToHints(e) {
            return t = this, n = null, r = function* () {
              const t = o.getHintParagraphs(e);
              let n = !1;
              if (!t || !t.length) return n;
              for (const r of t) {
                const t = r.getAttribute(o.INSERTED_SLOT_ATTRIBUTE);
                if ("true" !== t && "blocked" !== t) {
                  const t = e.slot ? e.slot : s(r.getAttribute(o.SLOT_TYPE_ATTRIBUTE)),
                    a = r.getAttribute(o.SIZES_ATTRIBUTE),
                    l = o.getSizeOverride(a);
                  let d = null;
                  a && !l.length || (d = yield i.ZP.insertSlot(r, t, e.slotFactory, void 0, !0)), d ? (n = !0, l.length && (d.sizes = l, d.refreshSizeRestricted = !0), d.lazy || e.prebidFacade.requestBids([d], d.timeout.value), r.setAttribute(o.INSERTED_SLOT_ATTRIBUTE, "true")) : r.setAttribute(o.INSERTED_SLOT_ATTRIBUTE, "blocked");
                }
              }
              return n;
            }, new Promise((e, i) => {
              var o = e => {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                },
                a = e => {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                },
                s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(o, a);
              s((r = r.apply(t, n)).next());
            });
            var t, n, r;
          }
        };
        let a = o;
        function s(e) {
          return e ? e.charAt(0).toUpperCase() + e.slice(1) : e;
        }
        a.INSERTED_SLOT_ATTRIBUTE = "data-hint-slot-inserted", a.SLOT_TYPE_ATTRIBUTE = "data-slot", a.SIZES_ATTRIBUTE = "data-hint-slot-sizes", a.validSizeOverrideDeviceValues = ["m", "t", "d"];
      },
      2183: (e, t, n) => {
        "use strict";

        n.d(t, {
          V_: () => m,
          iJ: () => f,
          nn: () => b
        });
        var i = n(7311),
          r = n(3528),
          o = n(2001),
          a = n(6091),
          s = Object.defineProperty,
          l = Object.getOwnPropertySymbols,
          d = Object.prototype.hasOwnProperty,
          c = Object.prototype.propertyIsEnumerable,
          u = (e, t, n) => t in e ? s(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n,
          p = (e, t) => {
            for (var n in t || (t = {})) d.call(t, n) && u(e, n, t[n]);
            if (l) for (var n of l(t)) c.call(t, n) && u(e, n, t[n]);
            return e;
          },
          h = (e, t, n) => new Promise((i, r) => {
            var o = e => {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              a = e => {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
            s((n = n.apply(e, t)).next());
          });
        const g = class {
          static get gid() {
            if (Object.values(g.hasAuth).some(e => !!e)) return m.identityApiAuth;
          }
          static init(e) {
            g.checkExistingAuthData();
            const t = g.optIn.bind(g.optIn, e),
              n = g.optOut.bind(g.optOut, e);
            window.$adManagementConfig.web.identityOptIn = t, window.$adManagementConfig.web.identityOptOut = n, window.dispatchEvent(new CustomEvent("mediavineIdentityReady"));
          }
          static optIn(e, t, n) {
            return h(this, null, function* () {
              try {
                const [{
                    LiveRamp: i
                  }] = yield g.loadModules(),
                  r = {
                    liveRamp: yield i.optIn(e, t)
                  };
                return g.authServicesMap = r, n(null);
              } catch (e) {
                return r.ZP.debug(["Identity", "optIn"], e), n((0, o.H)(e));
              }
            });
          }
          static optOut(e, t) {
            return h(this, null, function* () {
              try {
                const [{
                    LiveRamp: e
                  }] = yield g.loadModules(),
                  n = {
                    liveRamp: e.optOut()
                  };
                return g.authServicesMap = n, t(null);
              } catch (e) {
                r.ZP.debug(["Identity", "optOut"], e), t((0, o.H)(e));
              }
            });
          }
          static loadModules() {
            return h(this, null, function* () {
              return Promise.all([n.e(1642).then(n.bind(n, 4286))]);
            });
          }
          static checkExistingAuthData() {
            (0, a.RR)(b).map(e => {
              const t = i.a[e];
              t && (g.hasAuth[e] = t());
            });
          }
          static set authServicesMap(e) {
            g.hasAuth = p(p({}, g.hasAuth), e), (0, a.RR)(e).forEach(e => {
              r.ZP.debug(["Identity"], `Authentication data set for: "${e}"`);
            });
          }
        };
        let f = g;
        f.hasAuth = {};
        var m = (e => (e.noAuth = "0", e.growAuth = "1", e.identityApiAuth = "2", e.unverified = "3", e))(m || {}),
          b = (e => (e.liveRamp = "mv_liveRamp", e))(b || {});
      },
      7311: (e, t, n) => {
        "use strict";

        n.d(t, {
          a: () => o
        });
        var i = n(2183),
          r = n(3528);
        const o = {
          liveRamp() {
            const e = localStorage.getItem(i.nn.liveRamp);
            if (e) {
              const {
                envelope: t,
                expiresAt: n
              } = JSON.parse(e);
              if (new Date(n) > new Date()) return window.ats = window.ats || {}, window.ats.retrieveEnvelope = e => {
                e(JSON.stringify({
                  envelope: t
                }));
              }, r.ZP.debug(["Identity", "LiveRamp"], "Using existing envelope data"), !0;
            }
            return !1;
          }
        };
      },
      1374: (e, t, n) => {
        "use strict";

        n.d(t, {
          ZP: () => y
        });
        var i = n(6682),
          r = n(5671),
          o = n(3127),
          a = n(4222),
          s = n(2379),
          l = n(6039),
          d = n(1577),
          c = n(953),
          u = n(3580),
          p = n(5662),
          h = n(9225),
          g = n(2321);
        const f = 12 * s.G.height;
        let m;
        const b = {
            rootMargin: `${f}px 0px 0px 0px`
          },
          v = class {
            constructor(e, t) {
              this.slot = e, this.prebidFacade = t, this.rendered = !1, this.cleanupRequestListener = () => {}, v.initCleanupObserver(), e.lazyable = this, v.lessLazy = e.model.less_lazy_mode, v.debounceRequestBids || (v.debounceRequestBids = (0, i.Z)(() => {
                const n = v.lazySlotsToRequest.sort((e, t) => {
                    const n = e.wrapper,
                      i = t.wrapper,
                      r = window.pageYOffset;
                    if (e.stickyConfig.isSticky || t.stickyConfig.isSticky) {
                      const n = e.stickyConfig.isSticky ? 1 : 0;
                      return (t.stickyConfig.isSticky ? 1 : 0) - n;
                    }
                    return Math.abs((0, u.Z)(n) - r) - Math.abs((0, u.Z)(i) - r);
                  }),
                  i = e.model.ad_box ? 4 : 2,
                  r = n.splice(0, i);
                v.lazySlotsToRequest = n;
                const o = r.map(e => e.timeout.value),
                  a = Math.max(...o);
                t.requestBids(r, a);
                const s = e.model.ad_box ? 1 : 1e3;
                v.lazySlotsToRequest.length > 0 && setTimeout(() => {
                  v.debounceRequestBids();
                }, s);
              }, 100, {
                maxWait: e.model.ad_box ? 0 : 500
              })), v.lessLazy && r.ready(a.w.nonLazyRequestsLoaded, () => {
                if (v.waitedForAtf) v.renderAd(e);else {
                  setTimeout(() => {
                    v.waitedForAtf = !0, v.renderAd(e);
                  }, 3e3);
                }
              }), this.createWaypoint();
            }
            static get contentDisabledFor() {
              let e = 0;
              return v.contentDisabledUntil && (e = v.contentDisabledUntil - Date.now(), e = e > 0 ? e : 0), e;
            }
            static disableContentWaypointsFor(e) {
              v.disableContentWaypoints = !0, v.contentDisabledUntil = Date.now() + e, setTimeout(() => {
                v.disableContentWaypoints = !1, v.contentDisabledUntil = null;
              }, e);
            }
            static setContentWaypointsDisable(e) {
              v.disableContentWaypoints = e;
            }
            static renderLazyAds(e, t = !1) {
              const n = [];
              return Array.from(e.querySelectorAll(".adunit")).map(e => {
                const i = e.getAttribute("id");
                if (!i) return;
                const r = c.Z.getSlotById(i);
                r && r.lazyable && v.renderAd(r) && (t && (r.isLessLazyRendered = !0), n.push(r));
              }), n;
            }
            static renderAd(e) {
              var t;
              return !(null == (t = e.lazyable) ? void 0 : t.rendered) && (v.renderAdCleanup(e), v.lazySlotsToRequest.push(e), v.debounceRequestBids(), !0);
            }
            static renderAdCleanup(e) {
              e.lazyable && (e.lazyable.rendered = !0, e.lazyable.cleanupRequestListener(), e.stickyConfig.isSticky || v.lessLazy || (0, p.c)().observe(e.wrapper, b));
            }
            createWaypoint() {
              const e = this.slot,
                t = {
                  rootMargin: `0px 0px ${e.offset ? e.offset : l.A.isMobileOrTablet ? 2400 : 1600}px 0px`
                },
                n = (0, p.c)().onChange(w, t);
              this.cleanupRequestListener = g.Z.on(g.Z.events.slotBidRequested, t => {
                t === e && (n.unobserve(e.wrapper), v.renderAdCleanup(e));
              });
              const i = e.getSlotDom();
              i ? n.observe(i) : g.Z.on(g.j.slotWrapperRenderEnded, t => {
                t === e && n.observe(e.getSlotDom());
              });
            }
          };
        let y = v;
        function w(e, t) {
          const n = Math.round(d.X.delta);
          function i(e, n, i) {
            t.unobserve(e.target), r.ready(a.w.nonLazyRequestsLoaded, () => {
              n.setTargeting({
                velocity: i,
                maxVelocity: m
              }), y.renderAd(n);
            });
          }
          e.forEach(e => {
            const t = e.target.getAttribute("data-wrapper") ? e.target : e.target.querySelector("[data-wrapper]"),
              r = t && t.getAttribute("data-wrapper") || "",
              a = c.Z.getSlotById(r);
            if (!a || "Content" === a.type && y.disableContentWaypoints) return;
            m = function (e) {
              return m || parseInt(e.model.experiment.activate(o.l.velocityCheck) || "0", 10) || 1e3;
            }(a);
            const s = "Content" === a.type && n > m;
            (e.isIntersecting || a.stickyConfig.isSticky) && (s ? setTimeout(() => {
              const t = e.target.getBoundingClientRect();
              if (t.top - t.height / 2 > 0) {
                const t = Math.round(d.X.delta);
                i(e, a, t);
              }
            }, 1e3) : i(e, a, n));
          });
        }
        function _(e, t) {
          e.forEach(e => {
            const n = e.target.getAttribute("data-wrapper") ? e.target : e.target.querySelector("[data-wrapper]"),
              i = n && n.getAttribute("data-wrapper") || "",
              r = e.boundingClientRect.bottom < 0,
              o = e.boundingClientRect.bottom <= -f;
            if (i && r && o && 0 === e.intersectionRatio) {
              t.unobserve(e.target);
              const n = c.Z.getSlotById(i);
              if (n) {
                n.destroyGSlot();
                n.wrapper.style.visibility = "hidden";
              }
            }
          });
        }
        y.lazySlotsToRequest = [], y.disableContentWaypoints = !1, y.contentDisabledUntil = null, y.waitedForAtf = !1, y.lessLazy = !1, y.initCleanupObserver = (0, h.r)(() => {
          (0, p.c)().onChange(_, b);
        }), window.$adManagementConfig.web.renderLazyAds = y.renderLazyAds, window.$adManagementConfig.web.setContentWaypointDisable = y.setContentWaypointsDisable, window.$adManagementConfig.web.disableContentWaypointsFor = y.disableContentWaypointsFor;
      },
      2946: (e, t, n) => {
        "use strict";

        n.d(t, {
          Rw: () => m
        });
        var i = n(3528),
          r = n(6189),
          o = n(6091),
          a = n(2658),
          s = Object.defineProperty,
          l = Object.getOwnPropertySymbols,
          d = Object.prototype.hasOwnProperty,
          c = Object.prototype.propertyIsEnumerable,
          u = (e, t, n) => t in e ? s(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n,
          p = (e, t) => {
            for (var n in t || (t = {})) d.call(t, n) && u(e, n, t[n]);
            if (l) for (var n of l(t)) c.call(t, n) && u(e, n, t[n]);
            return e;
          };
        const h = ["medianet", "adx", "amazon"],
          g = {
            Control: 0,
            All: 1,
            Prebid: 2,
            Eb: 3,
            S2S: 4,
            PrebidAndEb: 5,
            PrebidAndS2S: 6,
            EbAndS2S: 7
          },
          f = {
            All: 0,
            Display: 1,
            Video: 2,
            Outstream: 3
          };
        class m {
          constructor(e, t = 1) {
            this.bidder = null, this.exchange = null, this.mediaType = null, this.exchangeCode = null, this.mediaTypeCode = null;
            (0, r._Y)(t) && (this.bidder = b(e), this.exchange = v(), this.exchangeCode = g[this.exchange], this.mediaType = y(), this.mediaTypeCode = f[this.mediaType], i.ZP.debug(`\n      Lift Test Results:\n      Bidder ${this.bidder}\n      Exchange ${this.exchange}\n      ExchangeCode ${this.exchangeCode}\n      MediaType ${this.mediaType}\n      MediaTypeCode ${this.mediaTypeCode}\n    `));
          }
          static new(e) {
            return m.instance = m.instance || new m(e), m.instance;
          }
          isMediaType(e) {
            return this.mediaTypeCode === f.All || null !== this.mediaTypeCode && -1 !== e.indexOf(this.mediaTypeCode);
          }
          isDisplay() {
            return this.isMediaType([f.All, f.Display]);
          }
          isVideo() {
            return this.isMediaType([f.All, f.Video]);
          }
          isOutstream() {
            return this.isMediaType([f.All, f.Outstream]);
          }
          isExchange(e) {
            return this.exchangeCode === g.All || null !== this.exchangeCode && -1 !== e.indexOf(this.exchangeCode);
          }
          isPrebid() {
            return this.isExchange([g.Prebid, g.PrebidAndEb, g.PrebidAndS2S, g.All]);
          }
          isEb() {
            return this.isExchange([g.Eb, g.PrebidAndEb, g.EbAndS2S, g.All]);
          }
          isS2S() {
            return this.isExchange([g.S2S, g.EbAndS2S, g.PrebidAndS2S, g.All]);
          }
          getPartnerLiftValue({
            bidder: e,
            exchangeCode: t,
            mediaTypeCode: n
          } = this) {
            const i = [];
            return e && i.push(`${e}E${t}M${n}`), this.isEb() && i.push("ebOff"), i;
          }
        }
        const b = e => {
            const t = (e => {
                const t = p(p(p({}, e.bannerDiscrepancies), e.videoDiscrepancies), e.outstreamDiscrepancies),
                  n = [...e.s2sBidders, ...Object.keys(t), ...h];
                return (0, a.t)(n);
              })(e),
              n = t.length - 1;
            return t[(0, r.Iy)(0, n)];
          },
          v = () => (0, o.t1)(g),
          y = () => (0, o.t1)(f);
      },
      5683: (e, t, n) => {
        "use strict";

        n.d(t, {
          S: () => o
        });
        var i = n(3528);
        const r = (...e) => i.ZP.custom(["perf"], ...e);
        class o {
          static mark(e) {
            const t = performance.mark(e);
            return r(`AdPerformance: ${e}: ${t.startTime}`), t;
          }
          static measure(e, t, n = "AdMeas") {
            const i = performance.measure(n, e, t);
            return r(`AdPerformance:  [${e}] - [${t}]`, i.duration), i;
          }
        }
      },
      1711: (e, t, n) => {
        "use strict";

        n.d(t, {
          ZP: () => k
        });
        var i = n(2321),
          r = n(5595),
          o = n(3528);
        class a {
          record(e, t) {
            o.ZP.custom(["debug", "metrics"], e, t);
          }
        }
        var s = n(6497),
          l = Object.defineProperty,
          d = Object.getOwnPropertySymbols,
          c = Object.prototype.hasOwnProperty,
          u = Object.prototype.propertyIsEnumerable,
          p = (e, t, n) => t in e ? l(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n,
          h = (e, t) => {
            for (var n in t || (t = {})) c.call(t, n) && p(e, n, t[n]);
            if (d) for (var n of d(t)) u.call(t, n) && p(e, n, t[n]);
            return e;
          };
        const g = Date.now(),
          f = {
            beacon: "bam.nr-data.net",
            errorBeacon: "bam.nr-data.net",
            licenseKey: "826b256fb3",
            applicationID: "21735165",
            sa: 1
          };
        const m = e => {
            return t = void 0, n = null, i = function* () {
              try {
                yield s.Z.fetch(((e, t = g) => {
                  const n = Date.now() - t;
                  return `https://${e.beacon}/ins/1/${e.licenseKey}?a=${e.applicationID}&sa=1&v=1158.afc605b&t=Unnamed%20Transaction&rst=${n}&ref=${document.URL}`;
                })(f), "POST", e);
              } catch (e) {
                o.ZP.debug(e);
              }
            }, new Promise((e, r) => {
              var o = e => {
                  try {
                    s(i.next(e));
                  } catch (e) {
                    r(e);
                  }
                },
                a = e => {
                  try {
                    s(i.throw(e));
                  } catch (e) {
                    r(e);
                  }
                },
                s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(o, a);
              s((i = i.apply(t, n)).next());
            });
            var t, n, i;
          },
          b = e => e ? Array.isArray(e) ? e.length && "object" == typeof e[0] ? JSON.stringify(e) : e : "object" == typeof e ? e.message || e.stack || JSON.stringify(e) : e : e,
          v = e => ({
            ins: [...e]
          }),
          y = new class {
            constructor() {
              this.info = f, this.actions = [], this.customAttributes = {}, this.disable = window.$adManagementConfig.web.model.disable_newrelic, this.samplingRate = window.$adManagementConfig.web.model.samplingRate || .1, setInterval(() => this.sendBatch(), 3e3), window.addEventListener("pagehide", () => this.sendBatch()), window.$adManagementConfig.newrelic = window.$adManagementConfig.newrelic || this, this.addPageAction = this.addPageAction.bind(this), this.setCustomAttribute = this.setCustomAttribute.bind(this);
            }
            addPageAction(e, t) {
              if (n = this.samplingRate, !(Math.random() < n)) return;
              var n;
              Object.keys(t).forEach(e => t[e] = b(t[e]));
              const i = Date.now(),
                r = h(h({
                  actionName: e,
                  timestamp: i,
                  timeSinceLoad: (i - g) / 1e3,
                  browserWidth: window.document.documentElement.clientWidth,
                  browserHeight: window.document.documentElement.clientHeight,
                  eventType: "PageAction",
                  referrerUrl: document.referrer,
                  currentUrl: document.location + "",
                  pageUrl: document.location.origin
                }, this.customAttributes), t);
              this.actions.push(r);
            }
            setErrorHandler(e) {}
            setCustomAttribute(e, t) {
              this.customAttributes[e] = t;
            }
            sendBatch() {
              if (0 === this.actions.length || this.disable) return;
              const e = v(this.actions);
              m(JSON.stringify(e)), this.actions = [];
            }
          }();
        n(6039);
        var w = Object.defineProperty,
          _ = Object.defineProperties,
          M = Object.getOwnPropertyDescriptors,
          A = Object.getOwnPropertySymbols,
          S = Object.prototype.hasOwnProperty,
          I = Object.prototype.propertyIsEnumerable,
          x = (e, t, n) => t in e ? w(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n,
          C = (e, t) => {
            for (var n in t || (t = {})) S.call(t, n) && x(e, n, t[n]);
            if (A) for (var n of A(t)) I.call(t, n) && x(e, n, t[n]);
            return e;
          },
          E = (e, t) => _(e, M(t));
        class T {
          constructor(e, t = y) {
            var n, i;
            this.model = e, this.newrelic = t, t && (t.setCustomAttribute("offering", null != (n = e.offering.name) ? n : "unknown"), t.setCustomAttribute("offeringId", null != (i = e.offering.id) ? i : 0));
          }
          record(e, t, r = y) {
            if (r) switch (e) {
              case i.j.initLauncher:
                return;
              case i.j.bidResponse:
                n.e(9900).then(n.bind(n, 9900)).then(({
                  parseBidResponse: e
                }) => {
                  r.addPageAction("bidResponse", e(t, this.model));
                });
                break;
              case i.j.bidWon:
                n.e(9900).then(n.bind(n, 9900)).then(({
                  parseBidResponse: e
                }) => {
                  r.addPageAction("bidWon", e(t, this.model));
                });
                break;
              case i.j.bidRequested:
                this.model.newRelicBidRequests && n.e(9900).then(n.bind(n, 9900)).then(({
                  parseBidRequest: e
                }) => {
                  r.addPageAction("bidRequested", e(t, this.model));
                });
                break;
              case i.j.bidTimeout:
                n.e(9900).then(n.bind(n, 9900)).then(({
                  parseBidTimeout: e
                }) => {
                  t.forEach(t => {
                    r.addPageAction("bidTimeout", e(t, this.model));
                  });
                });
                break;
              case i.j.impressionViewable:
                const e = t;
                n.e(9900).then(n.bind(n, 9900)).then(({
                  getBaseData: t
                }) => {
                  r.addPageAction(i.j.impressionViewable, E(C({}, t(this.model)), {
                    adunit: e.adUnitId
                  }));
                });
                break;
              case i.j.slotRenderEnded:
              case i.j.timeOnSite:
                return;
              case i.j.outstreamAdCanPlay:
                n.e(9900).then(n.bind(n, 9900)).then(({
                  parseBidResponse: e
                }) => {
                  const n = C({}, e(t, this.model));
                  r.addPageAction(i.j.outstreamAdCanPlay, n);
                });
                break;
              case i.j.outstreamAdStart:
                n.e(9900).then(n.bind(n, 9900)).then(({
                  parseBidResponse: e
                }) => {
                  const n = C({}, e(t, this.model));
                  r.addPageAction(i.j.outstreamAdStart, n);
                });
                break;
              case i.j.outstreamAdError:
                n.e(9900).then(n.bind(n, 9900)).then(({
                  parseBidResponse: e
                }) => {
                  const n = t.adError,
                    o = t.bidResponse,
                    a = t.outstreamFloor,
                    s = E(C({}, e(o, this.model)), {
                      errorCode: n.getErrorCode(),
                      vastErrorCode: n.getVastErrorCode(),
                      type: n.getType(),
                      name: n.name,
                      message: n.getMessage(),
                      innerError: n.getInnerError(),
                      bidFloor: a
                    });
                  r.addPageAction(i.j.outstreamAdError, s);
                });
                break;
              case i.j.heavyAdRemoved:
                return;
              case i.j.sequenceError:
                r.addPageAction(i.j.sequenceError, t);
                break;
              case i.j.lineItemFailure:
                let o = {
                  adUnitCode: t.id
                };
                try {
                  o = C({
                    targeting: t.gSlot.getTargetingMap()
                  }, o);
                } catch (e) {}
                r.addPageAction(i.j.lineItemFailure, o);
            }
          }
        }
        const P = [5e3, 1e4, 15e3, 3e4, 45e3, 9e4];
        class k {
          constructor(e) {
            var t;
            this.model = e, Object.keys(i.Z.events).forEach(e => {
              const t = i.Z.events[e];
              i.Z.on(t, e => this.record(t, e));
            }), this.clients = [new a()], (0, r.Ph)("forceMetrics") ? this.clients = [new a(), new T(e)] : !(t = e.samplingRate) || t < Math.random() || (this.clients = [new a(), new T(e)]);
          }
          static new(e) {
            return k.instance ? k.instance : k.instance = new k(e);
          }
          record(e, t) {
            this.clients.forEach(n => {
              try {
                n.record(e, t);
              } catch (e) {}
            });
          }
          trackTimeMetrics() {
            let e = 0;
            const t = setInterval(() => {
              e++, this.record("timeOnSite", {
                time_elapsed: 60 * e
              });
            }, 6e4);
            P.forEach(e => setTimeout(() => this.record("timeOnSite", {
              time_elapsed: e / 1e3
            }), e)), setTimeout(() => clearInterval(t), 6e5);
          }
        }
      },
      7856: (e, t, n) => {
        "use strict";

        n.d(t, {
          CX: () => E,
          WA: () => T,
          ZP: () => S
        });
        var i = n(8858),
          r = n(2845),
          o = n(6039),
          a = n(2379),
          s = n(6185),
          l = n(5595),
          d = n(3528),
          c = n(4381),
          u = n(2946),
          p = n(4666),
          h = n(5914),
          g = n(9399),
          f = n(9504),
          m = n(6091),
          b = Object.defineProperty,
          v = Object.getOwnPropertySymbols,
          y = Object.prototype.hasOwnProperty,
          w = Object.prototype.propertyIsEnumerable,
          _ = (e, t, n) => t in e ? b(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n,
          M = (e, t) => {
            for (var n in t || (t = {})) y.call(t, n) && _(e, n, t[n]);
            if (v) for (var n of v(t)) w.call(t, n) && _(e, n, t[n]);
            return e;
          },
          A = (e => (e.interstitial = "Interstitial", e.leaderboard_atf = "LeaderboardAtf", e.leaderboard_btf = "LeaderboardBtf", e.sidebar_atf = "SidebarAtf", e.sidebar_btf = "SidebarBtf", e.recipe_btf = "Recipe", e.recipe_mobile = "Recipe", e.comments = "Comments", e.feed_btf = "Feed", e.feed_mobile = "Feed", e))(A || {});
        class S {
          constructor(e) {
            var t, n;
            this.ad_box_bg_color = "#fafafa", this.ad_box_placeholder_text = !1, this.ad_box = !1, this.additionalRequestTypes = ["native", "skin_desktop"], this.adhesion_close = !1, this.adhesion_desktop = !0, this.adhesion_light = !1, this.adhesion_mobile = !0, this.adhesion_tablet = !0, this.appnexus = !0, this.below_content = !0, this.brand_color = "#41A4A9", this.brealtime = !0, this.ccpa_link_loc = "footer", this.ccpa_modal_enabled = !0, this.content_cba_desktop_buffer = 2, this.content_cba_desktop_limit = -1, this.content_cba_desktop_percentage = 20, this.content_cba_mobile_buffer = 2, this.content_cba_mobile_limit = -1, this.content_cba_mobile_percentage = 28, this.content_desktop = !0, this.content_mobile = !0, this.content_require_text = 0, this.content_skip_after_selector = "", this.content_skip_before_selector = "", this.custom_cmp_header = "", this.desktop_inview = !1, this.display_ads = !0, this.divbuster_exclusions = "", this.enable_divbuster = !1, this.enable_listbuster = !1, this.enable_mvp_branding = !0, this.gdpr_compliance = 1, this.google = !0, this.group_m_approved = !0, this.gumgum_in_image = !1, this.gumgum_skins = !1, this.gumgum_skip_first_image = !1, this.interscroller_desktop = !1, this.interscroller_mobile = !1, this.jtr_arrival_unit_enabled = !0, this.jtr_button_selector = "", this.killswitch = !1, this.launch_mode = !1, this.leaderboard = !1, this.less_lazy_mode = !1, this.mcm_tagging = !1, this.mcmNetworkCode = null, this.mediavine_comscore = !0, this.mobile_inview = !1, this.optimize_short_form_content = !1, this.optouts = [], this.outstream_density = "medium", this.privacy_policy_link = "", this.psa = !1, this.psas = [], this.recipe_instruction_density = "default", this.recipe_slot_density = "default", this.s2sBidders = [], this.sidebar_btf_disable_sticky = !1, this.sidebar_btf_sticky_offset = 0, this.spm_approval = !1, this.triplelift = !0, this.url_change_reload = !1, this.urlFilters = [], this.video_adhesion_color = "#41A4A9", this.videoLineItemVersion = "vid_6", function (e) {
              for (const t of P) {
                if (!(0, i.Z)(e, t)) throw new Error(`Required model property ${t} not provided`);
              }
            }(e), e.indexExchange = null == (t = e.index) || t, e.S2S = !0, e = S.applyLocalModel(e), (0, c.h)(e).onto(this), this.feed_btf_selector = this.feed_btf_selector || this.feed_selector, this.feed_btf_position = this.feed_btf_position || this.feed_position, this.feed_mobile_selector = this.feed_mobile_selector || this.feed_selector, this.feed_mobile_position = this.feed_mobile_position || this.feed_position, this.experiment = new s.K(e.experiments || []), this.slots = function (e) {
              const t = [];
              return t.push(...function ({
                slots: e
              }) {
                const t = [];
                return e.forEach(({
                  adunit: e,
                  position: n,
                  selector: i,
                  deviceType: r
                }) => {
                  const o = a.G.width <= 428;
                  if (e && n) {
                    if (r && "both" !== r) {
                      if ("desktop" === r && o || "mobile" === r && !o) return;
                    }
                    let a;
                    const s = n;
                    switch (e) {
                      case "leaderboard":
                        a = "LeaderboardBtf";
                        break;
                      case "sidebar":
                        a = "SidebarBtf";
                        break;
                      case "feed":
                        a = "Feed";
                        break;
                      case "recipe":
                        a = "Recipe";
                        break;
                      case "content":
                        a = "Content";
                        break;
                      default:
                        return;
                    }
                    t.push({
                      insertPosition: s,
                      selector: i,
                      type: a,
                      userDefined: !0
                    });
                  }
                }), t;
              }(e)), t.push(...function (e) {
                const t = [];
                return (0, m.RR)(A).map(n => {
                  const i = A[n];
                  if (-1 === n.indexOf("recipe_") && I(e, n)) try {
                    t.push({
                      type: i,
                      selector: e[`${n}_selector`],
                      insertPosition: e[`${n}_position`],
                      mobileSelector: e[`${n}_mobile_selector`],
                      mobileInsertPosition: e[`${n}_mobile_position`]
                    });
                  } catch (e) {
                    d.ZP.debug(`error creating slot ${i}`, e);
                  }
                }), t;
              }(e)), t.push(...function (e) {
                const t = [],
                  {
                    recipeCard: n
                  } = new p.l();
                if (n === p.v.Tasty && e.enable_automatic_recipe_selectors) return t.push(...function ({
                  recipe_slot_density: e,
                  recipe_instruction_density: t
                }) {
                  const n = [],
                    i = o.A.isMobileOrTablet ? "mobile" : "desktop",
                    r = C[e][i];
                  o.A.isMobileOrTablet && n.push(x(".tasty-recipes-ingredients ul:nth-of-type(3n + 1),\n        .tasty-recipes-ingredients ol:nth-of-type(3n + 1),\n        .tasty-recipes-ingredients p:nth-of-type(3n + 1),\n        .tasty-recipes-ingredients h4:nth-of-type(3n + 1),\n        .tasty-recipe-ingredients ul:nth-of-type(3n + 1),\n        .tasty-recipe-ingredients ol:nth-of-type(3n + 1),\n        .tasty-recipe-ingredients p:nth-of-type(3n + 1),\n        .tasty-recipe-ingredients h4:nth-of-type(3n + 1)", "afterend"));
                  n.push(x(".tasty-recipes-ingredients, .tasty-recipe-ingredients", "afterbegin")), "none" === t && n.push(x(".tasty-recipes-instructions, .tasty-recipe-instructions", "afterend"));
                  return n.splice(0, r);
                }(e)), t;
                if (n === p.v.WPRecipeMaker && e.enable_automatic_recipe_selectors) return t.push(...function ({
                  recipe_slot_density: e,
                  recipe_instruction_density: t
                }) {
                  const n = [],
                    i = o.A.isMobileOrTablet ? "mobile" : "desktop",
                    r = C[e][i];
                  o.A.isMobileOrTablet && n.push(x(".wprm-recipe-instructions-container > .wprm-recipe-instructions-header", "beforebegin"));
                  n.push(x(".wprm-recipe-ingredients-container", "afterbegin")), "none" === t && n.push(x(".wprm-recipe-instructions-container", "afterend"));
                  return n.splice(0, r);
                }(e)), t;
                n === p.v.MvCreate && t.push(...function ({
                  recipe_slot_density: e
                }) {
                  const t = [],
                    n = o.A.isMobileOrTablet ? "mobile" : "desktop",
                    i = C[e][n] - 1;
                  o.A.isMobileOrTablet && t.push(x(".mv-create-instructions-slot-v2", "beforebegin"));
                  return t.splice(0, i);
                }(e));
                const i = o.A.isMobileOrTablet ? "recipe_mobile" : "recipe_btf";
                I(e, i) && t.push({
                  type: "Recipe",
                  selector: e.recipe_selector,
                  insertPosition: e.recipe_position,
                  mobileSelector: e.recipe_mobile_selector,
                  mobileInsertPosition: e.recipe_mobile_position
                });
                return t;
              }(e)), t.forEach(t => {
                t.lazy = !t.type.includes("Atf"), function (e, t) {
                  "SidebarBtf" === e.type && (e.stickyOffset = t.sidebar_btf_sticky_offset, e.sticky = !t.sidebar_btf_disable_sticky, e.stickyStopSelector = t.sidebar_btf_stop_selector);
                }(t, e), function (e, t) {
                  "SidebarAtf" !== e.type || t.sidebar_minimum_width || (e.lazy = !0);
                }(t, e);
              }), t;
            }(e), this.customTargeting = window.$adManagementConfig.web.customTargeting || {}, this.videoCacheUrl = `https://video-cache.${null == (n = this.offering) ? void 0 : n.offering_code}.com`;
            const f = u.Rw.new(e);
            this.addAdditionalBidRequestTypes(), Object.keys(this.bidRequests).forEach(e => {
              f.bidder && f.isDisplay() && f.isPrebid() && (this.bidRequests[e] = this.bidRequests[e].filter(({
                bidder: e
              }) => e !== f.bidder)), this.bidRequests[e].unshift({
                bidder: r.tO.S2S,
                params: {}
              });
            }), function (e) {
              (0, l.DY)("test", "disableGdpr") && (e.gdpr = "0");
              (0, l.DY)("test", "gdpr") && (e.gdpr = "1", e.geoLoc.country_code = g.g.FR);
              (0, l.DY)("test", "ccpa") && (e.cpa = "1", e.geoLoc.state = h.y.CA);
              const t = (0, l.Ph)("testCPA");
              t && (e.cpa = "1", e.geoLoc.state = t);
              (0, l.DY)("test", "cssStickySidebar") && (e.optimize_sticky_sidebar_cls = !0, e.optimize_sticky_sidebar_cls_log = !0);
              (0, l.DY)("test", "adboxLabel") && (e.ad_box_placeholder_text = !0);
              (0, l.DY)("test", "mobileInview") && (e.mobile_inview = !0);
              (0, l.DY)("test", "urlChangeReload") && (e.url_change_reload = !0);
              const n = (0, l.Ph)("uninsertableAfterSelector");
              n && (e.content_skip_after_selector = Array.isArray(n) ? n[0] : n);
              const i = (0, l.Ph)("uninsertableBeforeSelector");
              i && (e.content_skip_before_selector = Array.isArray(i) ? i[0] : i);
            }(this), function (e) {
              e.ad_box && (o.A.isMobileOrTablet && e.mobile_inview || o.A.isDesktop && e.desktop_inview) && (e.videoSettings.mobile_popout_placement = "bottom_left");
            }(this), window.$adManagementConfig.web.deviceType = o.A.deviceType, d.ZP.debug(this);
          }
          addAdditionalBidRequestTypes() {
            this.additionalRequestTypes.forEach(e => {
              this.bidRequests[e] = [];
            });
          }
          get disableContentBtfNative() {
            return Boolean(this.cb_dn);
          }
          static applyLocalModel(e) {
            if (e.disable_local_model) return e;
            const t = window.$adManagementConfig.web.localModel || {},
              n = (i = t) && i.constructor === Object ? t : {};
            var i;
            return e = M(M({}, e), n), window.$adManagementConfig.web.model = e, e;
          }
        }
        function I(e, t) {
          return {
            adhesion_desktop: e.adhesion_desktop,
            adhesion_mobile: e.adhesion_mobile,
            adhesion_tablet: e.adhesion_tablet,
            comments: !!e.comments_selector,
            interstitial_mobile: e.enable_interstitial_ads,
            interstitial_desktop: e.enable_desktop_interstitial_ads,
            feed_btf: !o.A.isMobileOrTablet && !!e.feed_selector,
            feed_mobile: o.A.isMobileOrTablet && !!e.feed_selector,
            leaderboard_atf: e.leaderboard && !!e.leaderboard_atf_selector,
            leaderboard_btf: e.leaderboard && !!e.leaderboard_btf_selector,
            recipe_mobile: o.A.isMobileOrTablet && (!!e.recipe_mobile_selector || !!e.recipe_selector),
            recipe_btf: !o.A.isMobileOrTablet && !!e.recipe_selector,
            sidebar_btf: !!e.sidebar_btf_selector && !(0, f.Z)(e),
            sidebar_atf: !!e.sidebar_atf_selector
          }[t] || !1;
        }
        function x(e, t) {
          return {
            insertPosition: t,
            selector: e,
            lazy: !0,
            type: "Recipe"
          };
        }
        const C = {
          default: {
            desktop: 2,
            mobile: 3
          },
          medium: {
            desktop: 1,
            mobile: 2
          },
          low: {
            desktop: 1,
            mobile: 1
          }
        };
        function E() {
          if (!window.$adManagementConfig || !window.$adManagementConfig.web || !window.$adManagementConfig.web.model || window.$adManagementConfig.web.disable_pagespeed || "false" === (0, l.Ph)("optimizeSpeed")) return !1;
          const e = "Safari" === o.A.browser;
          return Boolean("true" === (0, l.Ph)("optimizeSpeed") || window.$adManagementConfig.web.model.optimize_mobile_pagespeed && o.A.isMobileOrTablet && !e);
        }
        function T() {
          if (!window.$adManagementConfig || !window.$adManagementConfig.web || !window.$adManagementConfig.web.model || window.$adManagementConfig.web.disable_pagespeed || "false" === (0, l.Ph)("optimizeSpeed")) return !1;
          const e = "Safari" === o.A.browser;
          return Boolean("true" === (0, l.Ph)("optimizeSpeed") || window.$adManagementConfig.web.model.optimize_desktop_pagespeed && !o.A.isMobileOrTablet && !e);
        }
        const P = ["offering.gam_network_code", "offering.offering_code"];
      },
      1806: (e, t, n) => {
        "use strict";

        n.d(t, {
          FH: () => r,
          ZP: () => o
        });
        const i = window.$adManagementConfig.web.model;
        var r = (e => (e.cleanup = "cleanup", e.restart = "restart", e))(r || {});
        const o = new class {
          initPageRefresh() {
            return e = this, t = arguments, r = function* (e = i) {
              if (this.pageRefreshHandlerInstance || !function (e) {
                return e.url_change_reload;
              }(e)) return;
              const {
                PageRefreshHandlerInstance: t
              } = yield n.e(8597).then(n.bind(n, 7145));
              this.pageRefreshHandlerInstance = t;
            }, new Promise((n, i) => {
              var o = e => {
                  try {
                    s(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                },
                a = e => {
                  try {
                    s(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                },
                s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, a);
              s((r = r.apply(e, t)).next());
            });
            var e, t, r;
          }
          on(e, t) {
            this.pageRefreshHandlerInstance && this.pageRefreshHandlerInstance.on(e, t);
          }
          one(e, t) {
            this.pageRefreshHandlerInstance && this.pageRefreshHandlerInstance.one(e, t);
          }
        }();
      },
      907: (e, t, n) => {
        "use strict";

        n.d(t, {
          R_: () => c,
          W$: () => d,
          ZP: () => l,
          iT: () => h,
          vm: () => u
        });
        var i = n(3528);
        const r = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/,
          o = "data-",
          a = "data-blacklist-",
          s = "data-blocklist-";
        class l {
          constructor(e = document) {
            this._document = e, this.element || i.ZP.debug("Page Settings element is not present on page");
          }
          get blocklist() {
            return this.attributesToObject(h, a);
          }
          get settings() {
            return this.attributesToObject(p, o);
          }
          attributesToObject(e, t) {
            const n = this.element && Array.from(this.element.attributes) || [],
              i = n.filter(u).pop(),
              r = i && d(i);
            if (!this.element || r) return {};
            const o = {};
            return n.filter(e).forEach(e => {
              o[c(e, t)] = e.nodeValue;
            }), o;
          }
          get element() {
            return this._document.getElementById("mediavine-settings");
          }
        }
        function d(e) {
          if (!e) return !0;
          const t = e.nodeValue,
            n = t && t.match(r);
          return !t || !n || Date.parse(t) < new Date().getTime();
        }
        function c(e, t) {
          return e.nodeName.substr(t.length).replace(/-/g, "_").toLowerCase();
        }
        function u(e) {
          return "data-expires-at" === e.nodeName;
        }
        function p(e) {
          return function (e) {
            return e.nodeName.substr(0, o.length) === o;
          }(e) && !u(e) && !h(e);
        }
        function h(e) {
          return e.nodeName.substring(0, a.length) === a || e.nodeName.substring(0, s.length) === s;
        }
      },
      6135: (e, t, n) => {
        "use strict";

        n.d(t, {
          CK: () => c,
          Kv: () => a,
          qC: () => d
        });
        var i = n(6039),
          r = n(7457);
        const o = ["US", "CA", "JP", "AU", "SG", "KR", "TH", "MY", "NZ", "MX"];
        function a({
          geoLoc: e,
          iiqRate: t
        }, n) {
          return !n.isUSNatV1OptOut() && !(!i.A.isSafariOrIOS || !o.includes(e.country_code)) && (void 0 === t || 1 === t || Math.random() <= t);
        }
        function s() {
          var e, t, n;
          return "A" === (null == (n = null == (t = null == (e = window.$adManagementConfig.web.iiqObject) ? void 0 : e.intentIqConfig) ? void 0 : t.abTesting) ? void 0 : n.currentTestGroup);
        }
        function l() {
          return s() || "B" === (null == (n = null == (t = null == (e = window.$adManagementConfig.web.iiqObject) ? void 0 : e.intentIqConfig) ? void 0 : t.abTesting) ? void 0 : n.currentTestGroup);
          var e, t, n;
        }
        function d(e) {
          var t;
          if (s() && e) return (null == (t = e.ext) ? void 0 : t.iiq) || "0";
        }
        function c(e) {
          var t;
          try {
            if (!l()) return;
            if (!(null == (t = window.$adManagementConfig.web.iiqObject) ? void 0 : t.reportExternalWin)) throw Error("iiqObject or iiqObject.reportExternalWin does not exist");
            const n = (0, r.rw)(e, window.$adManagementConfig.web.model.sdef),
              i = e.cpm + Number(n),
              o = {
                biddingPlatformId: 4,
                partnerAuctionId: "",
                bidderCode: e.s2sBidder || e.bidder,
                prebidAuctionId: e.auctionId,
                cpm: i,
                currency: e.currency,
                originalCpm: i,
                originalCurrency: e.currency,
                status: "rendered",
                placementId: e.adUnitCode
              };
            window.$adManagementConfig.web.iiqObject.reportExternalWin(o);
          } catch (e) {
            window.$adManagementConfig.newrelic.addPageAction("iiqReportError", {
              message: e instanceof Error ? e.message : e,
              domain: window.location.href,
              wrapperVersion: window.$adManagementConfig.web.model.versionGroup.version,
              wrapperGroup: window.$adManagementConfig.web.model.versionGroup.name
            });
          }
        }
      },
      7457: (e, t, n) => {
        "use strict";

        n.d(t, {
          BI: () => g,
          DX: () => u,
          G4: () => f,
          WS: () => h,
          bU: () => m,
          qh: () => b,
          rw: () => p,
          tY: () => v,
          u9: () => d
        });
        var i = n(7713),
          r = n(2845),
          o = n(5077),
          a = n(6039);
        const s = [r.tO.triplelift],
          l = [r.nf.yieldmo_s2s, r.nf.nativo_s2s, r.nf.kargo_s2s];
        function d(e) {
          e = Number(e);
          const t = (0, i.hL)(e);
          return (Math.round(100 * t) / 100).toFixed(2);
        }
        function c() {
          var e;
          return !!(null == (e = window.$adManagementConfig.web.iiqObject) ? void 0 : e.intentIqConfig) && a.A.isSafariOrIOS;
        }
        function u(e, t) {
          return c() ? e * t : e;
        }
        function p(e, t) {
          if (c()) {
            return (e.cpm / t - e.cpm).toFixed(2);
          }
          return "";
        }
        function h({
          cpm: e,
          bidderCode: t,
          s2sBidder: n,
          mediaType: i
        }, r) {
          const o = n || t;
          if (!r || !r[o]) return e;
          return e * (r[o] || 1);
        }
        function g(e) {
          return v(e) || function (e) {
            return (e.bidderCode === r.tO.triplelift || e.s2sBidder === r.tO.triplelift) && e.mediaType !== o.D.video && e.ad && -1 === e.ad.indexOf("ib.3lift.com");
          }(e) ? "1" : f(e) || e.mediaType === o.D.video || function (e) {
            if ("string" == typeof e.s2sBidder) return -1 !== l.indexOf(`${e.s2sBidder}_s2s`);
            return -1 !== l.indexOf(e.bidderCode);
          }(e) || function (e) {
            var t;
            return !!(null == (t = e.ext) ? void 0 : t.inarticle);
          }(e) ? "0" : "1";
        }
        function f(e) {
          return !m(e) && (1 === e.height && 1 === e.width || "1x1" === e.size || function ({
            adUnitCode: e,
            bidderCode: t,
            s2sBidder: n
          }) {
            return !(-1 === e.indexOf("content_") && -1 === e.indexOf("recipe") && -1 === e.indexOf("sidebar") && -1 === e.indexOf("feed_") || -1 === s.indexOf(t) && -1 === s.indexOf(String(n)));
          }(e) || function (e) {
            return (e.bidderCode === r.tO.gumgum || e.s2sBidder === r.tO.gumgum) && !!e.ad && -1 !== e.ad.indexOf('product="2"');
          }(e));
        }
        function m(e) {
          return -1 !== (e.outstreamAdUnitCode || e.adUnitCode).indexOf("outstream") && e.mediaType === o.D.video;
        }
        function b(e) {
          const t = e.outstreamAdUnitCode || e.adUnitCode;
          return !e.unifyOutstream && ("sidebar_btf_outstream_desktop" === t || "sidebar_btf_outstream_mobile" === t || "universalPlayer_outstream_desktop" === t || "universalPlayer_outstream_mobile" === t);
        }
        function v(e) {
          return !!e.native;
        }
      },
      4666: (e, t, n) => {
        "use strict";

        n.d(t, {
          v: () => r,
          l: () => a
        });
        class i {
          constructor(e, t = document) {
            this.selectors = e, this._document = t, this.present = !1;
            for (const n of e) {
              if (t.querySelector(n)) {
                this.present = !0, this.selector = n;
                break;
              }
            }
          }
        }
        var r = (e => (e.ER = "ER", e.MPP = "MPP", e.WPUR = "WPUR", e.Zip = "Zip", e.Yum = "Yum", e.BYC = "BYC", e.SRP = "SRP", e.WPRecipeMaker = "WPRM", e.Tasty = "Tsty", e.MvCreate = "MVC", e))(r || {});
        const o = class extends class {
          constructor(e, t = document) {
            this.trackables = e, this._document = t, this.presentTrackables = [], this.trackables.forEach(e => {
              (this[e.name] = new i(e.selectors, t)).present && this.presentTrackables.push(e.name);
            });
          }
        } {
          constructor(e = o.plugins, t = document) {
            super(e, t), this.trackables = e, this._document = t;
          }
          get recipeCard() {
            return this.multiple ? "multiple" : this.presentTrackables[0];
          }
          get multiple() {
            return this.presentTrackables.length > 1;
          }
        };
        let a = o;
        a.plugins = [{
          name: "ER",
          selectors: [".ERSInstructionsHeader", ".ERSIngredients"]
        }, {
          name: "MPP",
          selectors: ["#mpprecipe-ingredients", "#mprecipe-ingredients-list"]
        }, {
          name: "WPUR",
          selectors: [".wpurp-recipe-ingredient-group-container", ".wpurp-recipe-ingredient-container"]
        }, {
          name: "Zip",
          selectors: ["#zlrecipe-ingredients", "#zlrecipe-instructions", "#zlrecipe-ingredients-list"]
        }, {
          name: "Yum",
          selectors: ["#yrecipe-ingredients", "#yrecipe-ingredients-list"]
        }, {
          name: "BYC",
          selectors: [".blog-yumprint-ingredient-section", ".blog-yumprint-recipe-contents"]
        }, {
          name: "SRP",
          selectors: [".recipe-instructions-wrap", ".recipe-ingredients-wrap"]
        }, {
          name: "WPRM",
          selectors: [".wprm-recipe-ingredients-container"]
        }, {
          name: "Tsty",
          selectors: [".tasty-recipes-ingredients", ".tasty-recipe-ingredients"]
        }, {
          name: "MVC",
          selectors: [".mv-create-card"]
        }];
      },
      8129: (e, t, n) => {
        "use strict";

        n.d(t, {
          l: () => p
        });
        var i = function (e, t, n, i) {
            return (e /= i / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t;
          },
          r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          };
        const o = function () {
          var e = void 0,
            t = void 0,
            n = void 0,
            o = void 0,
            a = void 0,
            s = void 0,
            l = void 0,
            d = void 0,
            c = void 0,
            u = void 0,
            p = void 0,
            h = void 0;
          function g() {
            return window.scrollY || window.pageYOffset;
          }
          function f(e) {
            return e.getBoundingClientRect().top + t;
          }
          function m(n) {
            c || (c = n), p = a(u = n - c, t, l, d), window.scrollTo(0, p), u < d ? window.requestAnimationFrame(m) : function () {
              window.scrollTo(0, t + l), e && s && (e.setAttribute("tabindex", "-1"), e.focus());
              "function" == typeof h && h();
              c = !1;
            }();
          }
          return function (c) {
            var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (d = u.duration || 1e3, o = u.offset || 0, h = u.callback, a = u.easing || i, s = u.a11y || !1, t = g(), void 0 === c ? "undefined" : r(c)) {
              case "number":
                e = void 0, s = !1, n = t + c;
                break;
              case "object":
                n = f(e = c);
                break;
              case "string":
                e = document.querySelector(c), n = f(e);
            }
            switch (l = n - t + o, r(u.duration)) {
              case "number":
                d = u.duration;
                break;
              case "function":
                d = u.duration(l);
            }
            window.requestAnimationFrame(m);
          };
        }();
        var a = n(953),
          s = n(5042),
          l = n(3580),
          d = n(3583),
          c = (e, t, n) => new Promise((i, r) => {
            var o = e => {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              a = e => {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
            s((n = n.apply(e, t)).next());
          });
        const u = class {
          constructor(e, t, n) {
            this.model = e, this.slotFactory = t, this.prebidFacade = n;
          }
          render() {
            if (u.jtrClicked && void 0 === u.arrivalSlot && this.model.jtr_arrival_unit_enabled) {
              const e = u.getJtrButton(this.model);
              if (!e) return;
              this.onJTRClick(e);
            }
          }
          static getJtrButton(e) {
            const t = e.jtr_button_selector || u.jtrButtonSelector;
            return document.querySelector(t);
          }
          static getLocation(e) {
            var t;
            const n = e.jtr_selector || (null == (t = u.getJtrButton(e)) ? void 0 : t.getAttribute("href")) || "";
            return document.querySelector(n);
          }
          static attachListener(e, t) {
            if (!e.jtr_arrival_unit_enabled) return;
            const n = u.getJtrButton(e);
            if (!n) return;
            const i = r => c(this, null, function* () {
              r.preventDefault(), r.stopPropagation(), this.jtrClicked && u.scrollToArrivalSlot(e), this.jtrClicked = !0;
              if ((yield t()) === s.F6.halted) {
                const e = new MouseEvent(r.type, r);
                n.removeEventListener("click", i), n.dispatchEvent(e);
              }
            });
            n.addEventListener("click", i);
          }
          onJTRClick(e) {
            return c(this, null, function* () {
              const e = u.getLocation(this.model);
              if (e && !u.arrivalSlot) {
                const t = yield this.createArrivalSlot(e);
                t ? (u.arrivalSlot = t, this.addContinueButtonListener(e), this.moveTastyPrintButton(u.arrivalSlot), this.auctionSlots(), function (e) {
                  const t = `.${d.Y5},.${d.SE}`,
                    n = function (e, t) {
                      const n = document.querySelectorAll(t),
                        i = (0, l.Z)(e);
                      let r, o;
                      return n.forEach(e => {
                        const t = i - (0, l.Z)(e);
                        if (!(t < 0)) return !r || t < o ? (r = e, void (o = t)) : void 0;
                      }), r;
                    }(e, t);
                  if (!n) return;
                  const i = a.Z.getSlotByWrapper(n);
                  i && i.getSlotDom().remove();
                }(u.arrivalSlot.wrapper)) : u.arrivalSlot = null, setTimeout(() => u.scrollToArrivalSlot(this.model), 150);
              }
            });
          }
          static scrollToArrivalSlot(e) {
            var t, n, i;
            const r = e.sidebar_btf_sticky_offset || 0,
              a = null == (t = u.arrivalSlot) ? void 0 : t.getSlotDom(),
              s = u.getLocation(e),
              l = (a && ("none" !== (null == (n = a.style) ? void 0 : n.display) ? a.getBoundingClientRect().top : null == (i = a.previousElementSibling) ? void 0 : i.getBoundingClientRect().bottom) || s.getBoundingClientRect().top) + r;
            window.$adManagementConfig.web.setContentWaypointDisable(!0), o(l, {
              duration: 3e3,
              callback: () => {
                var e;
                o((null == (e = u.arrivalSlot) ? void 0 : e.getSlotDom()) || s, {
                  duration: 500,
                  easing: h,
                  offset: -160 - r,
                  callback: () => window.$adManagementConfig.web.setContentWaypointDisable(!1)
                });
              }
            });
          }
          addContinueButtonListener(e) {
            const t = document.querySelector(".mv-arrival-continue-button");
            t && t.addEventListener("click", t => {
              t.preventDefault(), o(e, {
                duration: 500,
                offset: 300,
                easing: h
              });
            });
          }
          moveTastyPrintButton(e) {
            if (!e) return;
            const t = document.querySelector(".tasty-recipes-print-button");
            t && !t.matches(".am-skip-button") && (t.remove(), e.getSlotDom().insertAdjacentElement("afterend", t));
          }
          auctionSlots() {
            if (!u.arrivalSlot) return;
            const e = a.Z.getRecipeSlots().filter(e => !e.adType).slice(0, 2);
            this.prebidFacade.requestBids([u.arrivalSlot, ...e], u.arrivalSlot.timeout.value);
          }
          createArrivalSlot(e) {
            return c(this, null, function* () {
              return yield this.slotFactory.new({
                insertPosition: "beforebegin",
                selector: e,
                type: "Arrival"
              });
            });
          }
        };
        let p = u;
        p.jtrClicked = !1, p.jtrButtonSelector = ".tasty-recipes-jump-link, .wprm-recipe-jump, .mv-create-jtr-slot-v2";
        const h = (e, t, n, i) => (e /= i / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t;
      },
      9353: (e, t, n) => {
        "use strict";

        n.d(t, {
          d: () => o
        });
        var i = n(3769);
        const r = class {
          constructor(e, t) {
            window.$adManagementConfig.web.fillContentHints = () => (this.render(), !0), this.hintConfig = {
              desktopSelector: r.DESKTOP_SELECTOR,
              mobileSelector: r.MOBILE_SELECTOR,
              prebidFacade: e,
              slotFactory: t,
              slot: r.SLOT_CLASS
            }, this.render();
          }
          render() {
            i.k.addSlotsToHints(this.hintConfig);
          }
        };
        let o = r;
        o.MOBILE_SELECTOR = ".content_mobile_hint, .content_hint", o.DESKTOP_SELECTOR = ".content_desktop_hint, .content_hint", o.SLOT_CLASS = "Content";
      },
      9504: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => s
        });
        var i = n(3583),
          r = n(9909),
          o = n(2379),
          a = n(6039);
        function s(e) {
          const t = e.sidebar_minimum_width || i.Nz;
          return Boolean(o.G.width > t && !a.A.isMobile && e.enable_grow_slidebar && e.sidebar_btf_selector && r.Z.willGrowLoad());
        }
      },
      2137: (e, t, n) => {
        "use strict";

        n.d(t, {
          ZP: () => l,
          z_: () => s
        });
        var i = n(4441),
          r = n(4381),
          o = n(2907);
        const a = class {
          constructor(e) {
            this.depth = 0, this.referrer = "";
            const t = !("1" === window.$adManagementConfig.web.model.gdpr && !e);
            if (window.$adManagementConfig.web.session || a.singletonSession) return a.singletonSession = a.singletonSession || window.$adManagementConfig.web.session, t && a.cookie.set(a.singletonSession), a.singletonSession;
            const n = a.cookie.value || {};
            (0, r.h)(n).onto(this);
            const i = this.getReferrer();
            this.referrer && this.referrer === i || (this.depth = 0), this.depth++, this.referrer = i, a.singletonSession = this, window.$adManagementConfig.web.session = this, t && a.cookie.set(this);
          }
          static updateSession() {
            return delete a.singletonSession, delete window.$adManagementConfig.web.session, a.singletonSession = new a(), window.$adManagementConfig.web.session = a.singletonSession, a.singletonSession;
          }
          static resetSession() {
            return delete a.singletonSession, delete window.$adManagementConfig.web.session, a.singletonSession = new a(), a.singletonSession.depth = 0, a.singletonSession.referrer = "", a.cookie.set(a.singletonSession), window.$adManagementConfig.web.session = a.singletonSession, a.singletonSession;
          }
          setWrapperVersionGroup(e) {
            this.wrapperVersionGroup = e;
          }
          setVideoVersionGroup(e) {
            this.videoVersionGroup = e;
          }
          setS2SVersionGroup(e) {
            this.s2sVersionGroup = e;
          }
          getReferrer() {
            const e = o.o.getHost(window.location.hostname),
              t = document.referrer,
              n = o.o.getHost(t),
              i = n.includes(e);
            return this.referrer ? t && this.referrer !== t && !i ? t : this.referrer : "" === n || i ? "DIRECT" : t;
          }
        };
        let s = a;
        s.cookie = new i.V({
          name: "mediavine_session",
          maxAge: 1800
        });
        const l = new s();
      },
      3784: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => r
        });
        const i = class {
          static ensureSlot(e) {
            void 0 === i.registry[e] && (i.registry[e] = 0);
          }
          static increment(e) {
            return i.ensureSlot(e), ++i.registry[e];
          }
          static nextAvailable(e) {
            return i.total(e) + 1;
          }
          static total(e) {
            return i.ensureSlot(e), i.registry[e];
          }
          static reset() {
            for (const e in i.registry) i.registry[e] = 0;
          }
        };
        let r = i;
        r.registry = {};
      },
      953: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => r
        });
        const i = {};
        class r {
          static add(e) {
            i[e.id] = e;
          }
          static remove(e) {
            delete i[e.id];
          }
          static all() {
            return Object.keys(i).map(e => i[e]);
          }
          static getSlotById(e) {
            return i[e];
          }
          static getSlotByWrapper(e) {
            const t = e.getAttribute("data-wrapper") || "";
            return r.getSlotById(t);
          }
          static getSlotByGSlot(e) {
            return r.getSlotById(e.getSlotElementId());
          }
          static get adhesionSlot() {
            const e = r.all().filter(e => -1 !== e.adUnitId.indexOf("adhesion"));
            if (e.length) return e.pop();
          }
          static getRecipeSlots() {
            return r.all().filter(e => "Recipe" === e.type);
          }
        }
      },
      2501: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => V
        });
        var i = n(6039),
          r = n(2200),
          o = n(8250),
          a = n(9353),
          s = n(3528),
          l = n(7562);
        function d(e) {
          const t = e.offering.offering_code,
            n = function (e) {
              const t = [`script[src*='scripts.${e}.com/videos/']`, `script[src*='video.${e}.com/videos/']`, `script[src*='video-staging.${e}.com/videos/']`, "script[src*='localhost:3030/videos/']", `script[src*='scripts.${e}.com/playlists/']`, `script[src*='video.${e}.com/playlists/']`, `script[src*='video-staging.${e}.com/playlists/']`, "script[src*='localhost:3030/playlists/']"].join(","),
                n = document.querySelectorAll(t);
              return Array.from(n).filter(t => !!c(t, e));
            }(t);
          n.forEach(e => {
            const n = c(e, t);
            let i = Array.from(document.querySelectorAll(`[id="${n}"]`));
            const o = window[e.getAttribute("data-options") || ""];
            0 !== i.length || o ? o && (i = [document.querySelector(`[id="${o.targetID}"]`)]) : (i.push(document.createElement("div")), e.insertAdjacentElement("beforebegin", i[0]), s.ZP.debug("Video: optionsDiv NOT found.  ADDING ONE!", n)), i.length > 0 && i.forEach(e => {
              (0, r.cn)(e, l.Y0), e.setAttribute("data-video-id", n);
            });
          });
        }
        function c(e, t) {
          let n = "";
          const i = e.getAttribute("src") || "",
            r = i.match(/\/(?:videos|playlists\/(?:.+?))\/([\w-]+)\.js/);
          let o;
          return r && r[1] && (n = r[1]), o = -1 !== i.indexOf("/playlists/") ? `${t}-playlist-${n}` : n, o;
        }
        var u = n(5671),
          p = n(5595),
          h = n(2321),
          g = n(6497),
          f = n(4222),
          m = n(1374),
          b = (e => (e[e.processing = 0] = "processing", e[e.live = 1] = "live", e[e.deleted = 2] = "deleted", e))(b || {}),
          v = n(7194);
        function y(e) {
          return !!e.getClientRects().length;
        }
        var w,
          _ = n(6091),
          M = Object.defineProperty,
          A = Object.getOwnPropertySymbols,
          S = Object.prototype.hasOwnProperty,
          I = Object.prototype.propertyIsEnumerable,
          x = (e, t, n) => t in e ? M(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n,
          C = (e, t) => {
            for (var n in t || (t = {})) S.call(t, n) && x(e, n, t[n]);
            if (A) for (var n of A(t)) I.call(t, n) && x(e, n, t[n]);
            return e;
          },
          E = (e, t, n) => new Promise((i, r) => {
            var o = e => {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              a = e => {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
            s((n = n.apply(e, t)).next());
          });
        const T = window.$adManagementConfig.web.model.slug,
          P = `video.${null == (w = window.$adManagementConfig.web.model.offering) ? void 0 : w.offering_code}.com`;
        let k = !1;
        function j(e, t) {
          return E(this, null, function* () {
            var n;
            if (!function (e, t) {
              var n;
              if (!t) return console.error("video target div is missing."), !1;
              if (!(null == (n = null == e ? void 0 : e.video) ? void 0 : n.status) || e.video.status !== b.live) return console.error("no video to play"), t.style.display = "none", !1;
              if (!y(t)) return !1;
              return !0;
            }(e, t)) return;
            window.$adManagementConfig.video || (window.$adManagementConfig.video = {});
            const i = V.group;
            window.$adManagementConfig.video.playerGroup = (null == (n = window.$adManagementConfig.video) ? void 0 : n.playerGroup) || i.name, e.targetDiv = t;
            const r = O(t),
              o = (0, p.Ph)("debug_src"),
              a = o || `${e.playerSource}/${i.version}`,
              s = window.$adManagementConfig.web.model.videoSettings;
            e.playerSource = o || a, e.playerVersion = i.version, e.playerGroup = i.name, h.Z.trigger(h.Z.events.initLauncher, e), k ? u.ready(f.w.placement, () => {
              var n, i;
              (null == (i = null == (n = null == window ? void 0 : window.$adManagementConfig) ? void 0 : n.video) ? void 0 : i.render) && (window.$adManagementConfig.video.render(e, r), V.insertVideoHeadline(t, s));
            }) : (k = !0, u(`${a}/placement.js`, f.w.placement), u.ready(f.w.placement, () => {
              window.$adManagementConfig.video && (window.$adManagementConfig.video.render(e, r), V.insertVideoHeadline(t, s));
            }));
          });
        }
        function O(e) {
          if (!e) return {};
          const t = e.getAttribute("data-callbacks"),
            n = t ? window[t] : {};
          return {
            aspectRatio: e.getAttribute("data-ratio") || void 0,
            autoInsert: (0, v.P)(e.getAttribute("data-autoInsert")),
            disableJsonLD: (0, v.P)(e.getAttribute("data-disable-jsonld")),
            height: Number(e.getAttribute("data-height")) || 0,
            isAutomobile: (0, v.P)(e.getAttribute("data-automobile")),
            isAutoplay: (0, v.P)(e.getAttribute("data-autoplay")),
            isMuted: (0, v.P)(e.getAttribute("data-muted")),
            sticky: (0, v.P)(e.getAttribute("data-sticky")),
            title: e.getAttribute("data-title") || void 0,
            volume: Number(e.getAttribute("data-volume")) || 0,
            width: Number(e.getAttribute("data-width")) || 0,
            videoStartTime: Number(e.getAttribute("data-start-time")) || 0,
            permalink: e.getAttribute("data-permalink") || void 0,
            srcPoster: e.getAttribute("data-srcPoster") || void 0,
            srcHls: e.getAttribute("data-srcHls") || void 0,
            srcHlsH265: e.getAttribute("data-srcHlsH265") || void 0,
            srcDash: e.getAttribute("data-srcDash") || void 0,
            onAdStarted: n.onAdStarted,
            onEnded: n.onEnded,
            onError: n.onError,
            onViewable: n.onViewable
          };
        }
        function L(e, t) {
          return (0, _.RR)(e).reduce((n, i) => n || "@type" === i && e[i] === t || e && "object" == typeof e && L(e[i], t), !1);
        }
        function N(e, t) {
          try {
            const n = JSON.parse(e);
            return "object" == typeof n && L(n, t);
          } catch (e) {
            return !1;
          }
        }
        function D(e) {
          const t = document.getElementsByTagName("script");
          return Array.from(t).filter(e => "application/ld+json" === e.type).reduce((t, n) => t || N(n.text, e), !1);
        }
        function R(e, t) {
          return E(this, null, function* () {
            const n = V.getVideoIdFromTargetDiv(e),
              i = V.getPlaylistIdFromTargetDiv(e),
              r = V.videoConfigs,
              o = O(e);
            if (n) {
              if (!r[n]) {
                const e = g.Z.fetchJson(`https://${P}/videos/v2/${n}.json`, "GET"),
                  i = g.Z.fetchJson(`https://${P}/playlists/v1/${T}/upnext-raw.json`, "GET");
                r[n] = Promise.all([e, i]).then(([e, t]) => {
                  const n = (t || []).filter(t => t.slug != e.video.slug);
                  return e.playlist = n, e;
                }).then(e => V.addSiteData(e, t)).catch(e => ({
                  meta: {},
                  site: {},
                  video: {}
                })), V.haveWrittenMajorSchema = V.haveWrittenMajorSchema || D("VideoObject"), o.disableJsonLD || V.haveWrittenMajorSchema || (V.haveWrittenMajorSchema = !0, B(yield r[n]));
              }
            } else i && (r[i] || (r[i] = g.Z.fetchJson(`https://${P}/playlists/v1/${T}/${i}.json`, "GET").then(e => V.addSiteData(e, t)).catch(e => ({
              meta: {},
              site: {},
              video: {}
            })), V.haveWrittenMajorSchema = V.haveWrittenMajorSchema || D("ItemList"), o.disableJsonLD || V.haveWrittenMajorSchema || (V.haveWrittenMajorSchema = !0, B(yield r[i]))));
          });
        }
        function z(e, t) {
          return E(this, null, function* () {
            const n = V.getVideoIdFromTargetDiv(e),
              i = V.getPlaylistIdFromTargetDiv(e),
              r = V.videoConfigs;
            yield R(e, t);
            const o = m.ZP.contentDisabledFor;
            setTimeout(() => E(this, null, function* () {
              if (n) {
                const t = yield r[n];
                j(C({}, t), e);
              } else if (i) {
                const t = yield r[i];
                j(C({}, t), e);
              }
            }), o);
          });
        }
        function B(e) {
          const t = document.createElement("script"),
            n = document.head || document.getElementsByTagName("head")[0],
            i = JSON.stringify(e.meta);
          t.className = "mediavine-video__ld-json", t.setAttribute("type", "application/ld+json");
          try {
            t.appendChild(document.createTextNode(i)), n.appendChild(t);
          } catch (e) {
            t.text = i, n.appendChild(t);
          }
        }
        var $ = n(9879);
        var Z = n(3583),
          W = (e, t, n) => new Promise((i, r) => {
            var o = e => {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              a = e => {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
            s((n = n.apply(e, t)).next());
          });
        const Y = ["noscript", "script", "header", "h1", "h2", "h3", "h4", "h5", "h6", "img"],
          G = new RegExp(new RegExp('\\[adthrive-in-post-video-player video-id=[”"″](?<videoId>\\w*?)[”"″] .*?]', "g")),
          F = class {
            constructor(e, t) {
              this.model = e, this.blocklist = t;
              const {
                videoVersion: n,
                videoBetas: i
              } = e;
              F.group = (0, $.F2)(n, i), (0, r.AE)(() => {
                F.setVideoTargetDivs(e), window.$adManagementConfig.web.videoOptionsSet = !0, this.setupStickyVideo(e);
              });
            }
            static generateSiteParams(e) {
              return {
                aspectRatio: e.videoSettings.player_aspect_ratio,
                contentSelector: e.content_selector,
                defaultVtt: e.videoSettings.default_vtt,
                disableAutoplayOnClose: e.videoSettings.disable_autoplay_on_close,
                domain: e.domain,
                letterboxColor: e.videoSettings.player_background,
                midrollEnabled: e.videoSettings.midroll_enabled,
                mobilePopoutPlacement: e.videoSettings.mobile_popout_placement,
                mobilePopoutTopMargin: e.videoSettings.mobile_popout_top_margin,
                offering: e.offering,
                sidebarSelector: e.sidebar_btf_selector,
                stickyContentSide: e.videoSettings.sticky_content_side,
                videoAdhesionBackground: e.video_adhesion_color,
                videoAdhesionLightTheme: e.adhesion_light,
                youtubeChannelId: e.youtube_channel_id
              };
            }
            static addSiteData(e, t) {
              return e.site = F.generateSiteParams(t), e;
            }
            setupStickyVideo(e = this.model) {
              const t = e.videoSettings,
                n = "/" === window.location.pathname,
                i = !!(0, p.DY)("preview", "true") && !!(0, p.Ph)("p"),
                r = F.getMediavineVideoTargetDivs();
              if (this.blocklist.all || n && !i || !t) return void (this.blocklist.all && r.forEach(e => {
                e.style.display = "none";
              }));
              const o = r.length > 0,
                a = F.getFirstValidVideoTargetDiv();
              o && (a && F.shouldHoistPlayer(a, e) && F.hoistVideo(a, e), r.forEach(e => {
                e.removeAttribute("data-autoplay"), e.removeAttribute("data-automobile");
              }));
              const s = document.querySelector(`.${l.Y0}`);
              s && (s.id = l.U_, location.hash === `#${l.U_}` && s.scrollIntoView({
                block: "center"
              }));
            }
            render() {
              F.setupMvVideoTargets(this.model);
            }
            static hoistVideo(e, t) {
              const n = F.calculateHoistLocation(t);
              if (n && e) {
                (0, r.cn)(e, "mv-video__optimized");
                const {
                  insertTarget: t,
                  insertPosition: i
                } = n;
                t.insertAdjacentElement(i, e);
              }
            }
            static shouldHoistPlayer(e, t) {
              const n = 0 === document.querySelectorAll('div[data-sticky="true"], div[data-sticky="1"], div[data-sticky=true]').length,
                r = !(0, v.P)(e.getAttribute("data-disable-optimize")),
                o = !(0, v.P)(e.getAttribute("data-disable-autoplay")),
                a = function ({
                  videoSettings: e
                }, t, {
                  isMobileOrTablet: n
                } = i.A) {
                  if ((0, v.P)(t.getAttribute("data-force-optimize"))) return !0;
                  if (e.hoist_first_video_desktop && !n) return !0;
                  if (e.hoist_first_video_mobile && n) return !0;
                  return !1;
                }(t, e);
              return !!e && r && o && a && (e.hasAttribute("autoHoisted") || n);
            }
            static getVideoTargetContentAdElement(e) {
              var t;
              let n, r;
              for (i.A.isMobileOrTablet ? (r = e && e.querySelectorAll(`.${Z.Y5},${a.d.MOBILE_SELECTOR}`), n = r && r.length > 1 && r[1]) : (r = e && e.querySelectorAll(`.${Z.SE},${a.d.DESKTOP_SELECTOR}`), n = r && r.length > 0 && r[0]); n && n.parentElement && n.parentElement !== e && n.parentElement.children.length < 2;) n = n.parentElement;
              return n && (null == (t = n.parentElement) ? void 0 : t.classList.contains(Z.N3)) && (n = n.parentElement), n;
            }
            static canPlaceAdAfterElement(e) {
              return F.isTwoConsecutiveBRs(e) || (0, o.v6)(e) && (0, o.Lq)(e) && -1 === Y.indexOf(e.tagName.toLowerCase());
            }
            static isTwoConsecutiveBRs(e) {
              let t = !1;
              if ("BR" === e.tagName) {
                const n = e.nextElementSibling && e.nextElementSibling.tagName,
                  i = e.previousElementSibling && e.previousElementSibling.tagName;
                if ("BR" === n && i) {
                  const n = e.nextSibling,
                    r = n && n.nodeName,
                    o = n && (n.textContent || "").trim();
                  t = !(!e.nextSibling || "BR" !== r && ("#text" !== r || "" !== o)) && -1 === Y.indexOf(i.toLowerCase());
                }
              }
              return t;
            }
            static calculateHoistLocation(e) {
              let t = null,
                n = null;
              const o = function (e) {
                  let t;
                  t = i.A.isMobileOrTablet && e.content_selector_mobile ? document.querySelector(e.content_selector_mobile) : e.content_selector ? document.querySelector(e.content_selector) : null;
                  return t;
                }(e),
                a = e.videoSettings.custom_hoist_selector ? document.querySelector(e.videoSettings.custom_hoist_selector) : null,
                s = e.videoSettings.custom_hoist_position || void 0,
                l = F.getVideoTargetContentAdElement(o);
              if (a) return n = a, t = s || "afterbegin", {
                insertTarget: n,
                insertPosition: t
              };
              if (o instanceof HTMLElement && l instanceof HTMLElement) {
                let e = l.nextElementSibling;
                for (; e && !F.canPlaceAdAfterElement(e);) e = e.nextElementSibling;
                const i = .3,
                  r = e && o.offsetHeight > 0 && e.offsetHeight / o.offsetHeight > i;
                e && !r ? (n = e, t = "afterend") : (n = l, t = "afterend");
              } else if (o instanceof HTMLElement) {
                const e = 4,
                  i = o.children.length >= e ? e : o.children.length - 1;
                if (i > 0) {
                  const e = o.children[i];
                  e instanceof HTMLElement && (n = e, t = "afterend");
                } else n = o, t = "afterbegin";
              }
              if (!n || !t) return;
              const d = document.querySelector(".wp-block-mv-list");
              return d && (0, r.Cx)(d, n) && (n = d, t = "beforebegin"), {
                insertTarget: n,
                insertPosition: t
              };
            }
            static getVideoTemplateDiv(e, t) {
              const n = document.createElement("div");
              return n.className = l.Y0, n.setAttribute(`data-${e}-id`, t), n.setAttribute("data-muted", "true"), n;
            }
            static getHeadlineTemplateDiv(e, t) {
              const n = document.createElement(t);
              return n.className = `${l.a$}`, n.textContent = e, n;
            }
            static setupMvVideoTargets(e) {
              return W(this, null, function* () {
                if (!F.setVideoTargetDivsComplete) return void h.Z.trigger(h.Z.events.sequenceError, "setupMvVideoTargets");
                const t = `div.${l.Y0}:not([data-video-placement-inited="true"])`,
                  n = document.querySelectorAll(t),
                  i = Array.from(n).filter(e => F.getVideoIdFromTargetDiv(e) || F.getPlaylistIdFromTargetDiv(e));
                for (const t of i) (0, r.cn)(t, "ggnoads"), (0, r.cn)(t, "mv-video__embedded"), t.setAttribute("data-video-placement-inited", "true"), F.setupVideoClickEvents(t), yield z(t, e);
              });
            }
            static setupVideoClickEvents(e) {
              e.addEventListener("click", H), function (e, t) {
                let n = !1;
                function i() {
                  n = !1, window.removeEventListener("touchmove", i);
                }
                function r() {
                  n && t(), e.removeEventListener("touchend", r), window.removeEventListener("touchmove", i);
                }
                e.addEventListener("touchstart", t => {
                  n = !0, window.addEventListener("touchmove", i), e.addEventListener("touchend", r);
                });
              }(e, H);
            }
            static getVideoIdFromTargetDiv(e) {
              if (e.hasAttribute("data-video-id")) return e.getAttribute("data-video-id");
              {
                const t = Array.from(e.classList).find(e => -1 !== e.indexOf("mv-video-id-"));
                return t ? t.split("-")[3] : null;
              }
            }
            static convertAdThriveVideoDivs() {
              const e = document.querySelectorAll('div[id^=cls-video-container-]:not([data-video-placement-inited="true"]),\n      div.adthrive-video-player:not([data-video-placement-inited="true"])'),
                t = [];
              return e.forEach(e => {
                const n = e.id.split("-")[3] || e.getAttribute("data-video-id");
                if (n) {
                  const i = F.getVideoTemplateDiv("video", `i${n}`);
                  e.insertAdjacentElement("beforebegin", i), e.remove(), t.push(i);
                }
              }), t;
            }
            static convertAdThriveVideoShortcodes() {
              const e = function (e, t) {
                  const n = [],
                    i = document.evaluate(e, t || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                  for (let e = 0, t = i.snapshotLength; e < t; ++e) {
                    const t = i.snapshotItem(e);
                    t && n.push(t);
                  }
                  return n;
                }("//*[text()[contains(.,'[adthrive-in-post-video-player')]]"),
                t = [];
              return e.forEach(e => {
                e.childNodes.forEach(n => {
                  if (!n.textContent) return;
                  const i = G.exec(n.textContent);
                  if (i && i.groups) {
                    const r = `i${i.groups.videoId}`,
                      o = F.getVideoTemplateDiv("video", r);
                    n.textContent = n.textContent.replace(G, ""), e.insertBefore(o, n), t.push(o);
                  }
                });
              }), t;
            }
            static getPlaylistIdFromTargetDiv(e) {
              if (e.hasAttribute("data-playlist-id")) return e.getAttribute("data-playlist-id");
              {
                const t = Array.from(e.classList).find(e => -1 !== e.indexOf("mv-playlist-id-"));
                return t ? t.split("-")[3] : null;
              }
            }
            static getMediavineVideoTargetDivs() {
              const e = `div.${l.Y0}`,
                t = document.querySelectorAll(e);
              return Array.from(t);
            }
            static getFirstValidVideoTargetDiv() {
              return F.getMediavineVideoTargetDivs().find(e => !(0, v.P)(e.getAttribute("data-disable-auto-upgrade")) && !(0, v.P)(e.getAttribute("data-disable-autoplay")) && y(e));
            }
            static insertVideoHeadline(e, t) {
              return W(this, null, function* () {
                if ((0, v.P)(e.getAttribute("data-disable-headline"))) return;
                const n = this.getVideoIdFromTargetDiv(e),
                  i = this.getPlaylistIdFromTargetDiv(e),
                  o = e.getAttribute("data-video-headline"),
                  a = i || n;
                if (a) {
                  const n = yield F.videoConfigs[a],
                    i = o || n.video.videoHeadline || t.default_video_headline,
                    s = t.default_video_headline_el || "h2";
                  if (i) {
                    const t = F.getHeadlineTemplateDiv(i, s);
                    (0, r.cn)(t, "mv-video__embedded-auto-headline"), e.insertAdjacentElement("beforebegin", t);
                  }
                }
              });
            }
            static setVideoTargetDivs(e) {
              d(e);
              const t = F.getMediavineVideoTargetDivs();
              let n = Array.from(t);
              if (0 === n.length) {
                n = [...F.convertAdThriveVideoDivs(), ...F.convertAdThriveVideoShortcodes()];
              }
              n.forEach(t => {
                R(t, e);
                let n = .42857142857142855;
                const i = t.getAttribute("data-ratio"),
                  r = i && i.split(":");
                r && 2 === r.length && (n = parseInt(r[1], 10) / parseInt(r[0], 10)), t.style.minHeight = t.clientWidth * n + 66 + "px";
              });
              const i = F.getFirstValidVideoTargetDiv();
              i && F.setAutoplayOptions(i, e), F.setVideoTargetDivsComplete = !0;
            }
            static setAutoplayOptions(e, t) {
              if (!e) return void s.ZP.debug("Video: Something has gone wrong setting video options.");
              const n = document.querySelectorAll('div[data-sticky="true"], div[data-sticky="1"], div[data-sticky=true]').length > 0,
                i = parseInt((0, p.Ph)("mvs"));
              isNaN(i) || (e.setAttribute("data-start-time", i.toString()), e.setAttribute("data-automobile", "true"), e.setAttribute("data-autoplay", "true"), e.setAttribute("data-muted", "false")), n || (e.setAttribute("data-sticky", "true"), e.setAttribute("autoHoisted", ""));
            }
          };
        let V = F;
        function H() {
          window.dispatchEvent(new Event(l.yq));
        }
        V.videoConfigs = {}, V.haveWrittenMajorSchema = !1, V.setVideoTargetDivsComplete = !1;
      },
      8015: (e, t, n) => {
        "use strict";

        n.d(t, {
          Ar: () => o,
          nO: () => a,
          m2: () => s
        });
        var i = n(3583),
          r = n(8490);
        const o = "#a5a5a5",
          a = "mv-device-",
          s = ({
            adhesion_light: e,
            custom_css: t,
            recipe_float: n,
            triplelift: o,
            sidebar_minimum_width: a
          }) => `\n  :root {\n    --adhesion-background-color: ${e ? "rgba(250, 250, 250, 0.9);" : "rgba(0, 0, 0, 0.9);"}\n  }\n\n  .mv-empty-wrapper {\t\n    margin: 0 !important;\t\n    height: 0px !important;\t\n    min-height: unset !important;\t\n  } \n  .adunitwrapper {\n    overflow: visible;\n    position: relative;\n    /* Typical height + padding for adunitlabels */\n    height: 264px;\n    /* Typical Width */\n    width: 300px;\n    /* try transition in separate a/b test */\n    /* transition: all 0.5s; */\n  }\n\n  div#${r.f.container.id} {\n    position: fixed;\n    bottom: 0;\n    width: 100vw;\n    height: 400px;\n    gap: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    z-index: 2147483535;\n    pointer-events: none;\n    left: 0px !important;\n  }\n\n  div#${r.f.container.id} > * {\n    pointer-events: auto;\n    transition: all .3s ease-in;\n    transition-delay: 500ms;\n  }\n\n  body .adunitwrapper[style*='display: block']>.adunit:before {\n    content: "Loading Ad...";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-align-content: center;\n    align-content: center;\n    justify-content: center;\n    font-size: 14px;\n    color: #999;\n    display: -webkit-box;\n    -webkit-box-pack: center;\n    -webkit-box-align: center;\n    box-sizing: border-box;\n  }\n\n  div.mv_slot_target[data-slot] {\n    height: 264px;\n  }\n\n  div.mv_slot_target[data-hint-slot-inserted="true"],\n  div.mv_slot_target[data-hint-slot-inserted="blocked"] {\n    height: revert;\n  }\n\n  .mv-outstream-container + .adunit:before { \n    display: none!important;\n  }\n\n  .mv-outstream-container + .adunitwrapper>.adunit:before {\n    display: none!important;\n  }\n\n  body .adunitwrapper[style*='display: block']>.adunit {\n    position: relative;\n  }\n\n  body .adunitwrapper[style*='display: block']>.adunit>div {\n    position: relative;\n  }\n\n  .adhesion_wrapper {\n    display: none;\n    max-height: 90px!important;\n  }\n\n  div.${r.f.container.className} .adhesion_wrapper {\n    max-height: 150px!important;\n  }\n\n  .mv-native-size {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: initial;\n    padding-left: 20px;\n    overflow: hidden !important;\n  }\n\n  .mv-native-size.sidebar_atf_wrapper,\n  .mv-native-size.sidebar_btf_wrapper {\n    padding-left: 0px;\n    padding-bottom: 19px;\n  }\n\n  .mv-native-size div[id^='google_ads'] {\n    min-height: 100%!important;\n    height: 100%!important;\n    width: 100%!important;\n  }\n\n  .mv-dynamic-size div[id^='google_ads'] {\n    height: initial!important;\n    width: initial!important;\n  }\n\n  mv-ad-reporter {\n    display: none;\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    z-index: 1200;\n    line-height: 1.0;\n  }\n\n  .adunitwrapper mv-ad-reporter {\n    bottom: 0px;\n    right: -22px;\n  }\n  \n  .adunitwrapper.sidebar_atf_wrapper mv-ad-reporter,\n  .adunitwrapper.sidebar_btf_wrapper mv-ad-reporter,\n  .adunitwrapper.gutter_atf_wrapper mv-ad-reporter {\n    bottom: -20px;\n    right: 1px;\n  }\n\n  /* Hide Gutter Ad Reporters until the slot is filled with an ad.*/\n  .ad_gutter_middle .adunitwrapper.sidebar_btf_wrapper.mv-empty-wrapper mv-ad-reporter {\n    display: none;\n  }\n\n  #adhesion_mobile_wrapper mv-ad-reporter,\n  #adhesion_desktop_wrapper mv-ad-reporter,\n  #adhesion_tablet_wrapper mv-ad-reporter {\n    position: relative;\n    left: 3px;\n  }\n\n  @media (max-width: 391px) {\n    .adunitwrapper mv-ad-reporter {\n      bottom: -20px;\n      right: 1px;\n    }\n  }\n\n  .adunitwrapper.mv-native-size mv-ad-reporter {\n    right: 1px;\n    bottom: 0px;\n  }\n\n  .mv-ad-box mv-ad-reporter {\n    bottom: 1px;\n    right: 1px;\n  }\n\n  .mv-outstream-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n  }\n\n  .mv-outstream-container.active {\n    z-index: 1000;\n  }\n\n  .mv-outstream-container.inactive {\n    z-index: -1;\n  }\n\n  .adhesion_wrapper .mv-outstream-container {\n    top: -51px;\n    left: 5%;\n    width: auto;\n  }\n  \n  .mv-outstream-mute {\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    width: 30px;\n    height: 30px;\n    z-index: 999;\n  }\n\n  .mv-mute-button {\n    pointer-events: none;\n  }\n\n  .mv-mute-button img {\n    width: 32px;\n  }\n\n  #arrival_wrapper {\n    margin: 10px auto 20px auto!important;\n  }\n\n  .mv-arrival-continue-button {\n    margin: 0 auto;\n    display: block;\n    width: 300px;\n    text-align: center;\n    border-top: 1px solid #efefef;\n    padding: 15px 0px;\n    z-index: 1001;\n  }\n\n  body.adhesion {\n    padding-bottom: 90px!important;\n  }\n\n  body.adhesion.${r.f.container.className} {\n    padding-bottom: 150px!important;\n  }\n\n  .mediavine img {\n    margin : 0 !important;\n    padding : 0 !important;\n    border : 0 !important;\n    box-shadow: none !important;\n  }\n\n  .sidebar_btf_wrapper {\n    margin : 0 auto 0 auto;\n    width : 300px;\n  }\n\n  .recipe_mobile_wrapper,\n  .${i.Y5},\n  .comments_mobile_wrapper {\n    margin-bottom : 10px;\n  }\n\n  [data-recipe-ads-inserted] .recipe_btf_wrapper,\n  [data-recipe-ads-inserted] .recipe_mobile_wrapper {\n    margin: 0 auto;\n  }\n\n  .wprm-recipe-ingredients-container .recipe_btf_wrapper{\n    float: right;\n  }\n\n  .tasty-recipes-ingredients .recipe_btf_wrapper{\n    float: right;\n  }\n\n  @media (max-width: ${(a || 1100) - 1}px) {\n    #sidebar_btf_sticky_wrapper, .sidebar_btf_wrapper, .sidebarBtfStacked, .sidebarBtfStackedSpacer {\n      display : none !important;\n    }\n  }\n\n\n  .mv-create-target { \n    max-width: 300px !important;\n  }\n\n  .adunit a,\n  .adunit object,\n  .adunit embed,\n  .adunit img,\n  .adunit div,\n  .adunit iframe {\n    margin: 0 auto !important;\n    text-align: center;\n  }\n\n  .${i.SE}.native,\n  .${i.Y5}.native {\n    max-width : 600px;\n  }\n\n  .content_float_right {\n    margin : 0 0 10px 20px;\n    float : right;\n  }\n\n  .${i.Y5},\n  .recipe_mobile_wrapper,\n  .comments_mobile_wrapper,\n  .comments_btf_wrapper,\n  .comments_mobile_wrapper,\n  .${i.SE},\n  .feed_mobile_wrapper,\n  .feed_btf_wrapper {\n    margin : 10px auto 20px auto;\n    text-align : center;\n  }\n\n  .${i.SE},\n  .${i.Y5} {\n    clear: both;\n  }\n  .sidebar_atf_wrapper,\n  .leaderboard_btf_wrapper {\n    margin : 0px auto 20px auto;\n    text-align : center;\n  }\n  .leaderboard_btf_wrapper {\n    margin-top : 20px;\n  }\n\n  @media (max-width : 727px) {\n    .leaderboard_atf_wrapper {\n      display : none !important;\n    }\n  }\n\n  .leaderboard_atf_wrapper {\n    margin: 0px auto 0px auto;\n  }\n\n  .leaderboard_atf_wrapper.adunitwrapper {\n    height: 250px;\n  }\n\n\n  .adhesion_wrapper.adhesion_container {\n    position: relative;\n    text-align: center;\n    width: 100% !important;\n    z-index: 2147483535;\n    order: 2;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--adhesion-background-color, \n      ${e ? "rgba(250, 250, 250, 0.9)" : "rgba(0, 0, 0, 0.9)"})\n  }\n\n  .adhesion_wrapper>.adunit>div {\n    position: sticky;\n  }\n\n  .adhesion_wrapper div {\n    margin: 0px;\n  }\n\n  .gumgumAdhesion .adhesion_wrapper {\n    visibility: hidden;\n  }\n\n  #skin_desktop_wrapper {\n    position: fixed;\n    top: 0;\n  }\n\n  .adhesion_wrapper .adhesion_buttons {\n    height: 80px;\n    width: 48px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-around;\n    margin-left: 3px;\n  }\n\n  .adhesion_wrapper .mv_close_button {\n    width: 24px;\n    height: 24px;\n    display: block;\n    position: relative;\n    cursor: pointer; \n  }\n\n  .adhesion_wrapper .mv_unbutton {\n    padding: unset;\n    border: unset;\n    background-color: transparent;\n  }\n\n  .adhesion_wrapper .mv_close_button img {\n    width: 24px;\n    height: 24px;\n    pointer-events: none;\n    /* Position it 50% from the top-left corner. */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    /* Then move it back half its width and height for perfect centering. */\n    transform: translate(-50%, -50%);\n  }\n\n  .universalPlayer_wrapper.uvp_fadeout {\n    opacity: 0%;\n    transition: all 0.5s linear 3s;\n  }\n\n  .universalPlayer_wrapper.uvp_hidden {\n    visibility: hidden !important;\n  }\n\n  .universalPlayer_wrapper {\n    display: block;\n    position: fixed;\n    background: none;\n    box-shadow: rgb(0 0 0 / 15%) 0px 2px 10px;\n    z-index: 1100;\n    overflow: visible;\n    right: 20px;\n    bottom: 20px;\n    transition: all .3s ease-in;\n    transition-delay: 500ms;\n  }\n\n  div.${r.f.container.className} .universalPlayer_wrapper {\n    position: relative;\n    order: 1;\n    align-self: end;\n  }\n\n  .universalPlayer_wrapper:after {\n    content: "\\00B7\\00B7\\00B7";\n    position: absolute;\n    top: 0px;\n    display: flex!important;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    color: #C4C4C4;\n    font-size: 62px;\n    letter-spacing: 2px;\n    z-index: 999;\n    animation: fadeOut 1s linear 0s infinite;\n    animation-direction: alternate;\n  }\n\n  .universalPlayer_wrapper .mv-outstream-container {\n    border-radius: 10px;\n    overflow: hidden;\n  }\n\n  .universalPlayer_wrapper .mv-outstream-mute {\n    top: unset;\n    bottom: 4px;\n    left: 30px;\n    width: unset;\n    opacity: 0.75;\n  }\n\n  .universalPlayer_wrapper .mv-outstream-mute:after {\n    content: "Ad";\n    position: absolute;\n    top: 6px;\n    color: whitesmoke;\n    text-shadow: 0px 0px 8px black;\n    font-weight: lighter;\n    font-size: 12px;\n    width: fit-content;\n    word-break: normal;\n  }\n\n  .universalPlayer_wrapper .mv-outstream-mute img {\n    width: 29px;\n  }\n\n  .universalPlayer_wrapper .mv-uvp-menu-backdrop {\n    display: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\n    background: rgb(0,0,0, 40%);\n    border-radius: 10px;\n    z-index: 1002;\n  }\n\n  .universalPlayer_wrapper .mv-uvp-menu {\n    position: absolute;\n    z-index: 1003;\n    display: flex;\n    flex-direction: column;\n    width: 55%;\n    height: 60%;\n    background: white;\n    border-radius: 5px;\n    align-items: center;\n    justify-content: space-around;\n    font-weight: 300;\n    font-size: 15px;\n  }\n\n  .universalPlayer_wrapper .mv-uvp-menu .mv-uvp-menu-item {\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;       \n  }\n\n  .universalPlayer_wrapper .mv-uvp-menu .mv-uvp-menu-item a {\n    text-decoration: none;\n    color: inherit;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .universalPlayer_wrapper .mv-uvp-menu .mv-uvp-menu-item a:hover {\n    text-decoration: underline;\n  }\n\n  .universalPlayer_wrapper .mv-uvp-menu #iconReportSvg {\n    margin-right: 3px;\n  }\n\n  .universalPlayer_wrapper .mv-uvp-menu .mv-uvp-menu-item:not(:last-child) {\n    border-bottom: solid lightgrey 1px;\n  }\n\n  .universalPlayer_wrapper .mv-uvp-menu .mv-uvp-menu-item.mv-ad-report-button > * {\n    pointer-events: none;\n  }\n\n  .universalPlayer_report {\n    position: absolute;\n    left: 3px;\n    bottom: 5px;\n    z-index: 1001;\n    height: 26px;\n    width: 26px;\n\n    display: flex;\n    align-items: center;\n\n    background: rgba(30, 30, 30, 0.5);\n    border-radius: 15px;\n  }\n\n  .universalPlayer_report img {\n    opacity: 100%;\n    width: 20px;\n    height: 20px;\n    pointer-events: none;\n    margin: 0 auto !important;\n  }\n\n  .universalPlayer_close {\n    position: absolute;\n    top: 7px;\n    z-index: 3000;\n    padding: 0px 10px;\n    line-height: 35px;\n    cursor: pointer;\n    filter: drop-shadow(0px 0px 6px black);\n  }\n\n  .universalPlayer_close img {\n    width: 15px;\n    height: 15px;\n    pointer-events: none;\n    margin: 0 auto !important;\n  }\n\n  .adunit#universalPlayer {\n    background: black;\n    border-radius: 10px;\n    width: 100%;\n    height: 100%;\n  }\n\n  .universalPlayer__top {\n    top: 0;\n  }\n\n  .universalPlayer__bottom {\n    bottom: 0;\n  }\n\n  .universalPlayer__right {\n    right: 15px;\n  }\n\n  .universalPlayer__left {\n    left: 15px;\n  }\n\n  /* Note: this rule and others that specifically target '.universalPlayer__bottom.universalPlayer__left'\n    are specifically to fix a conflict with Slipstream.  Adding an extra rule makes it more specific than Slipstream's\n    and force it to have higher priority.\n    https://mediavine.atlassian.net/browse/SUP-565 */\n    div.${r.f.container.className} .universalPlayer__bottom.universalPlayer__left{\n    transform: translateX(0);\n    align-self: start;\n  }\n\n  body.adhesion div.${r.f.container.className} .universalPlayer__bottom {\n    transform: translateX(0);\n  }\n\n  /* make grow me inserted content typically used with dynamic sidebars sticky */\n  body.grow-me-scroll-carousel-active .growInsertedContent {\n    top: 60px;\n  }\n  .growInsertedContent {\n    position: sticky;\n    top: 0;\n  }\n\n\n  body.adhesion.gumgumAdhesion div.${r.f.container.className} .universalPlayer__bottom.universalPlayer__left {\n    align-self: start;\n    transform: translateX(0);\n  }\n\n  /*Keep Close Button on screen for small devices*/\n  @media(min-width: 350px) {\n    .adhesion_wrapper .mv_close_small {\n      display: none;\n    }\n\n  }\n\n  /*Push Logo Up*/\n  @media (max-width: 350px) {\n    .adhesion_wrapper .mv_unbutton {\n      display: none;\n    }\n\n    .adhesion_wrapper .adhesion_buttons {\n      position: absolute;\n      bottom: 51px;\n      right: 0px;\n      z-index: 11;\n      width: 20px;\n      height: 20px !important;\n    }\n\n    #adhesion_mobile_wrapper mv-ad-reporter {\n      display: none !important;\n    }\n  }\n\n  @media (min-width: 728px) and (max-width: 840px) {\n    \n  }\n\n  @media (max-width: 727px) {\n    body.adhesion {\n      padding-bottom : 50px;\n    }\n\n    body.adhesion.${r.f.container.className} {\n      padding-bottom: 150px!important;\n    }\n\n    .adhesion_wrapper.adhesion_container {\n      justify-content: center;\n    }\n\n    /* Provides centered padding for Mediavine logo and Report Button */\n    .mv-native-size .adunitlabel {\n      max-width: calc(100vw - 15px) !important;\n    }\n  }\n\n  @media (min-width: 728px) {\n    body.adhesion {\n      padding-bottom : 90px;\n    }\n\n    body.adhesion.${r.f.container.className} {\n      padding-bottom: 150px!important;\n    }\n  }\n\n  ${n ? "\n  #recipe_btf_wrapper {\n    float : right;\n  }\n  " : "\n  .recipe_btf_wrapper {\n    width : 300px;\n    margin : 20px 0 20px 0px !important;\n  }"}\n\n  @media print {\n    .adunit,\n    .adunitwrapper,\n    .adhesion_wrapper,\n    .mv-ad-box, \n    mv-ad-reporter {\n      display : none !important;\n    }\n  }\n\n  #sovrn_beacon {\n    position: absolute\n  }\n\n  ${o ? "\n    .triplelift {\n      margin-bottom : 5px !important;\n    }\n\n    .triplelift .entry-title {\n      background : none !important;\n      font-size : 18px;\n      line-height : 22px;\n      clear : none !important;\n    }\n    .triplelift .entry-content {\n      clear : none !important;\n      background : none !important;\n    }\n    .triplelift .entry-meta {\n      display : block !important;\n      background : none !important;\n      clear : none !important;\n      border : none !important;\n      float : none !important;\n    }\n    .triplelift .entry-title a {\n      line-height: inherit !important;\n      float: none !important;\n      width: auto !important;\n      height: auto !important;\n      background: none !important;\n      color: inherit !important;\n      font-size: inherit !important;\n      line-height: inherit !important;\n      margin: 0 !important;\n      padding: 0 !important;\n    }\n    " : ""}\n\n  \n.mv-native-ad {\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n\twidth: fit-content;\n}\n\n.mv-native-ad div {\n  box-sizing: border-box !important;\n}\n\n.mv-native-ad + .adunit {\n  height: 0px;\n  width: 0px;\n}\n\n.mv-native-ad-icon {\n\theight: 16px;\n\twidth: 16px;\n\tcolor: #FFF;\n\tbackground: #919191;\n\tfont-size: 10px;\n\ttext-align: center;\n  align-items: center;\n\tjustify-content: center;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n`;
      },
      5042: (e, t, n) => {
        "use strict";

        n.d(t, {
          F6: () => _e,
          _d: () => Ce,
          Gu: () => xe
        });
        var i = n(6528),
          r = n(2200),
          o = n(3528),
          a = n(7856),
          s = n(907),
          l = n(8250),
          d = n(6039),
          c = n(3769),
          u = n(3784),
          p = n(5595),
          h = n(1806),
          g = (e, t, n) => new Promise((i, r) => {
            var o = e => {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              a = e => {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
            s((n = n.apply(e, t)).next());
          });
        const f = class {
          constructor(e, t) {
            var n;
            if (this.slotFactory = t, this.slots = [], d.A.isMobileOrTablet && !e.content_mobile) return void (this.renderedPromise = Promise.resolve());
            if (!d.A.isMobileOrTablet && !e.content_desktop) return void (this.renderedPromise = Promise.resolve());
            this.divBuster = e.enable_divbuster, this.listBuster = e.enable_listbuster, this.uninsertableAfterSelector = e.content_skip_after_selector, this.uninsertableBeforeSelector = e.content_skip_before_selector, this.belowContentEnabled = !!e.below_content;
            const i = this.belowContentEnabled && !this.divBuster ? 1 : 0;
            this.startingParagraphNumber = null != (n = e.content_buffer_begin) ? n : 0, this.endingParagraphNumber = Math.max(e.content_buffer_end || 0, i), this.divBuster && (this.startingParagraphNumber = 0, this.endingParagraphNumber = 0), this.contentRequireText = e.content_require_text, this.stopSelector = e.content_stop_selector, this.displayContentAfterFlex = e.display_content_after_flex, this.minParagraphBuffer = e.content_cba_desktop_buffer, this.density = e.content_cba_desktop_percentage && e.content_cba_desktop_percentage / 100, this.slotLimit = e.content_cba_desktop_limit, this.target = e.content_selector, this.optShortFormContent = e.optimize_short_form_content, this.unbustableSelector = e.divbuster_exclusions, this.optimizeCLSMode = !!e.ad_box;
            const o = (0, p.Ph)("enableDivbuster");
            void 0 !== o && ("" !== o && (this.target = o), this.divBuster = !0);
            void 0 !== (0, p.Ph)("enableListbuster") && (this.listBuster = !0), d.A.isMobileOrTablet && (this.minParagraphBuffer = e.content_cba_mobile_buffer, this.density = e.content_cba_mobile_percentage && e.content_cba_mobile_percentage / 100, this.slotLimit = e.content_cba_mobile_limit, this.target = e.content_selector_mobile || e.content_selector), window.$adManagementConfig.web.insertContentAds = this.dynamicallyCreateSlots.bind(this), this.renderedPromise = new Promise(e => {
              (0, r.AE)(() => {
                this.render().then(() => {
                  e();
                });
              });
            });
          }
          render() {
            return g(this, null, function* () {
              if (c.k.getHintParagraphs({
                mobileSelector: f.MOBILE_SELECTOR,
                desktopSelector: f.DESKTOP_SELECTOR
              }).length > 0) return;
              const e = (this.target ? Array.from(document.querySelectorAll(`${this.target}, ${f.DATA_CONTENT_SELECTOR}`)) : []).map(e => this.dynamicallyCreateSlots(e));
              yield Promise.all(e);
            });
          }
          dynamicallyCreateSlots(e) {
            return g(this, null, function* () {
              if (!(e && e instanceof Element)) return o.ZP.debug("Mediavine: Must provide a valid element to insert ads into.", e), !1;
              if ("true" === e.getAttribute("data-content-ads-inserted")) return !1;
              e.setAttribute("data-content-ads-inserted", "true"), h.ZP.one(h.FH.cleanup, () => {
                e.setAttribute("data-content-ads-inserted", "false");
              });
              const t = new l.ZP({
                slotFactory: this.slotFactory,
                slotClass: "Content",
                prebidFacade: this.prebidFacade,
                target: e,
                slotLimit: this.slotLimit,
                startingParagraphNumber: this.startingParagraphNumber,
                endingParagraphNumber: this.endingParagraphNumber,
                density: this.density,
                contentRequireText: this.contentRequireText,
                minParagraphBuffer: this.minParagraphBuffer,
                stopSelector: this.stopSelector,
                divBuster: this.divBuster,
                listBuster: this.listBuster,
                unbustableSelector: this.unbustableSelector,
                optShortFormContent: this.optShortFormContent,
                uninsertableClassRegExp: /wprm-recipe-container/,
                uninsertableAfterSelector: this.uninsertableAfterSelector,
                uninsertableBeforeSelector: this.uninsertableBeforeSelector,
                belowContentEnabled: this.belowContentEnabled,
                optimizeCLSMode: this.optimizeCLSMode,
                displayContentAfterFlex: this.displayContentAfterFlex
              });
              yield t.createSlots();
              const n = e.clientHeight > 2 * window.innerHeight,
                i = u.Z.total("Content");
              return this.belowContentEnabled && (n || 0 === i) && function (e) {
                const t = e.slots[e.slots.length - 1],
                  n = (null == t ? void 0 : t.adReporterAnchor.getBoundingClientRect().bottom) || 0,
                  i = e.target.getBoundingClientRect().bottom;
                return i - n >= 250;
              }(t) && l.ZP.insertSlot(e, "Content", this.slotFactory, "beforeend"), !0;
            });
          }
        };
        let m = f;
        m.MOBILE_SELECTOR = ".content_mobile_hint, .content_hint", m.DESKTOP_SELECTOR = ".content_desktop_hint, .content_hint", m.DATA_CONTENT_SELECTOR = "[data-content-area]", m.SLOT_CLASS = "Content";
        var b,
          v,
          y = n(2321),
          w = n(3583),
          _ = n(9),
          M = n(5683),
          A = n(6135);
        (v = b || (b = {})).preRenderValid = (e, t) => {
          const n = (0, p.Ph)("slotType", t) || "",
            i = "string" == typeof n ? n : n[0],
            r = !i || i.toLocaleLowerCase() === e.type.toLocaleLowerCase(),
            o = !e.allowSelector || !!document.querySelector(e.allowSelector);
          return r && o;
        }, v.render = e => {
          var t;
          return !(!(e.target && e.insertPosition && e.template) || e.blockRenderForCLS() || (e.validate() ? (e.target.setAttribute(`${w.Mg}-${e.slotModel.type}`, "true"), null == (t = e.target) || t.insertAdjacentHTML(e.insertPosition, e.template()), y.Z.trigger(y.Z.events.slotWrapperRenderEnded, e), 0) : (e.target.setAttribute(`${w.Mg}-${e.slotModel.type}`, "invalid"), 1)));
        }, v.handleRenderEnded = ({
          size: e,
          isEmpty: t
        }, n, i) => {
          var r;
          if (S(t, n), function (e) {
            if (e.id.includes("adhesion") && 0 === e.reauctions) {
              const t = `${e.id} - #${e.reauctions} - SlotRenderEnded`;
              M.S.mark(t);
              const n = M.S.measure("afterScrollMark", t);
              window.$adManagementConfig.newrelic.addPageAction("TimeToFirstRender", function (e, t) {
                const n = t.id;
                return {
                  duration: Math.round(e.duration),
                  pageSpeedMode: d.A.isDesktop ? (0, a.WA)() : (0, a.CX)(),
                  adunit: n && n.replace(/_[0-9]+|_refresh/g, ""),
                  adUnitFull: n,
                  domain: window.location.hostname.replace("www.", ""),
                  deviceType: d.A.deviceType,
                  wrapperVersion: window.$adManagementConfig.web.model.versionGroup.version,
                  wrapperGroup: window.$adManagementConfig.web.model.versionGroup.name
                };
              }(n, e));
            }
          }(n), n.isRefreshing) {
            if (t) return void (n.refreshRetries >= w.or ? (n.refreshTime = 0, n.onRefreshRetryFail()) : (n.refreshTime = 15, n.refreshRetries++, y.Z.trigger(y.Z.events.registerRefreshable, n)));
            n.refreshRetries = 0, n.refreshTime = w.Q0;
          } else if (t) return void n.cleanup();
          if ("string" == typeof e) return;
          const [o, s] = e;
          if (1 !== o && 1 !== s ? (n.adType = 0 === o && 0 === s ? _.Z9.adXNative : _.Z9.adXStandard, n.width = o, n.height = s, n.sizeContainers(), n && n.highestPrebid && (i.addBids([n.highestPrebid]), n.highestPrebid = void 0)) : n.highestPrebid && (0, A.CK)(n.highestPrebid), !n.refreshSizeRestricted && n.restrictRefreshSize) {
            const e = n.height || (null == (r = n.highestPrebid) ? void 0 : r.height) || !1;
            e && e > 1 && (n.fixedHeight = e, n.sizes = n.sizes.filter(t => !e || Array.isArray(t) && t[1] <= e));
          }
          n.displayAdUnitLabels(n.adType);
        };
        const S = (e, t) => {
          var n, i, r;
          const a = !!(null == (n = t.highestPrebid) ? void 0 : n.adserverTargeting.hb_pb),
            s = null == (i = window.googletag) ? void 0 : i.pubads().getTargeting("test").includes("houseads");
          if (e && (a || s)) {
            y.Z.trigger(y.Z.events.lineItemFailure, t);
            try {
              const e = JSON.stringify(null == (r = null == t ? void 0 : t.gSlot) ? void 0 : r.getTargetingMap(), null, 2);
              o.ZP.debug(`GAM Line Item Failure: slot ${t.id} with targeting ${e}`);
            } catch (e) {
              o.ZP.debug(`GAM Line Item Failure: slot ${t.id}`);
            }
          }
        };
        var I = n(953),
          x = (e, t, n) => new Promise((i, r) => {
            var o = e => {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              a = e => {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
            s((n = n.apply(e, t)).next());
          });
        class C {
          constructor(e, t) {
            this.model = e, this.blocklist = t;
          }
          registerSlotRenderEndedHandler(e) {
            this.auctionHouse || (this.auctionHouse = e, y.Z.on(y.Z.events.slotRenderEnded, (t, n) => {
              n && b.handleRenderEnded(t, n, e);
            }));
          }
          new(e) {
            return x(this, null, function* () {
              try {
                const t = (0, i.bZ)(e.type);
                if (this.blocklist.all || t && this.blocklist.contains(t) || !b.preRenderValid(e)) return;
                const n = yield this.getSlotConstructor(e.type);
                if (!n) throw `Couldn't find SlotConstructor for ${e.type}`;
                const r = new n(e, this.model);
                if (this.blocklist.isBlockListed(r)) return;
                return b.render(r) ? (u.Z.increment(e.type), o.ZP.debug(`Rendered slot ${r.id}`), I.Z.add(r), h.ZP.one(h.FH.cleanup, () => {
                  r.destroy();
                }), r) : void 0;
              } catch (t) {
                o.ZP.debug(t), o.ZP.debug(`Slot ${e.type} unable to instantiate!`);
              }
            });
          }
          getSlotConstructor(e) {
            return x(this, null, function* () {
              switch (e) {
                case "Adhesion":
                  const {
                    Adhesion: e
                  } = yield Promise.all([n.e(9906), n.e(3706)]).then(n.bind(n, 3706));
                  return e;
                case "Arrival":
                  const {
                    Arrival: t
                  } = yield Promise.all([n.e(9906), n.e(2799)]).then(n.bind(n, 2799));
                  return t;
                case "Comments":
                  const {
                    Comments: i
                  } = yield Promise.all([n.e(9906), n.e(6008)]).then(n.bind(n, 6008));
                  return i;
                case "Content":
                  const {
                    Content: r
                  } = yield Promise.all([n.e(9906), n.e(675), n.e(3367)]).then(n.bind(n, 3367));
                  return r;
                case "Feed":
                  const {
                    Feed: o
                  } = yield Promise.all([n.e(9906), n.e(675), n.e(8763)]).then(n.bind(n, 8763));
                  return o;
                case "Leaderboard":
                  const {
                    Leaderboard: a
                  } = yield Promise.all([n.e(9906), n.e(2197)]).then(n.bind(n, 2197));
                  return a;
                case "LeaderboardAtf":
                  const {
                    LeaderboardAtf: s
                  } = yield Promise.all([n.e(9906), n.e(546)]).then(n.bind(n, 546));
                  return s;
                case "LeaderboardBtf":
                  const {
                    LeaderboardBtf: l
                  } = yield Promise.all([n.e(9906), n.e(3278)]).then(n.bind(n, 3278));
                  return l;
                case "Recipe":
                  const {
                    Recipe: d
                  } = yield Promise.all([n.e(9906), n.e(7825)]).then(n.bind(n, 7825));
                  return d;
                case "Sidebar":
                  const {
                    Sidebar: c
                  } = yield Promise.all([n.e(9906), n.e(2723)]).then(n.bind(n, 2723));
                  return c;
                case "SidebarAtf":
                  const {
                    SidebarAtf: u
                  } = yield Promise.all([n.e(9906), n.e(427)]).then(n.bind(n, 427));
                  return u;
                case "SidebarBtf":
                  const {
                    SidebarBtf: p
                  } = yield Promise.all([n.e(6381), n.e(9906), n.e(4166), n.e(5629), n.e(2726), n.e(5728)]).then(n.bind(n, 5728));
                  return p;
                case "SidebarBtfStacked":
                  const {
                    SidebarBtfStacked: h
                  } = yield Promise.all([n.e(9906), n.e(9423)]).then(n.bind(n, 9423));
                  return h;
                case "Skin":
                  const {
                    Skin: g
                  } = yield Promise.all([n.e(9906), n.e(6578)]).then(n.bind(n, 6578));
                  return g;
                case "UniversalPlayer":
                  const {
                    UniversalPlayer: f
                  } = yield Promise.all([n.e(6381), n.e(9906), n.e(4166), n.e(5629), n.e(2726)]).then(n.bind(n, 2726));
                  return f;
                case "GutterAtf":
                  const {
                    GutterAtf: m
                  } = yield Promise.all([n.e(9906), n.e(3948)]).then(n.bind(n, 3948));
                  return m;
                default:
                  return null;
              }
            });
          }
        }
        var E = n(2501),
          T = n(8015),
          P = n(5671);
        var k = n(5151),
          j = n(5506);
        const O = "offeringLogo";
        class L {
          constructor(e) {
            this.model = e, this.loaded = !1, y.Z.on(y.Z.events.slotWrapperRenderEnded, e => this.addReportButton(e)), document.addEventListener("click", e => this.handleReportButtonClick(e));
          }
          static new(e) {
            return L.instance = L.instance || new L(e);
          }
          handleReportButtonClick(e) {
            const t = e.composedPath()[0];
            if (!t.classList.contains("mv-ad-report-button")) return;
            const {
                offering_code: n
              } = this.model.offering || {
                offering_code: ""
              },
              i = `https://adreporter.${n}.com/assets/modal.js`;
            this.loaded ? this.openAdReporter(t) : P(i, () => {
              this.loaded = !0, this.openAdReporter(t);
            });
          }
          openAdReporter(e) {
            const t = e.getAttribute("data-target") || "",
              n = e.getAttribute("data-adtype") || "video",
              i = "video" === n ? I.Z.getSlotById("video") : I.Z.getSlotById(t);
            window.$adManagementConfig.adReporter.open(t, n, i);
          }
          addReportButton(e) {
            var t, n;
            if ("UniversalPlayer" === e.type || !e.model.enable_mvp_branding) return;
            const i = document.createElement("mv-ad-reporter");
            i.setAttribute("data-slot-id", e.id), i.setAttribute("data-offering", (null == (t = e.model.offering.id) ? void 0 : t.toString()) || ""), i.setAttribute("data-offering-name", (null == (n = e.model.offering) ? void 0 : n.offering_code) || ""), e.adReporterAnchor.insertAdjacentElement("beforeend", i);
          }
        }
        const N = class extends HTMLElement {
          constructor() {
            super(), this.isMenuHidden = !0, this.reporterShadow = this.attachShadow({
              mode: "open"
            }), N.allAdReporters.push(this);
          }
          closeMenu() {
            this.menuOverlay && this.logoButton && (this.menuOverlay.style.display = "none", this.logoButton.src = this.getOfferingLogo(this.offeringId), this.isMenuHidden = !0);
          }
          openMenu() {
            this.menuOverlay && this.logoButton && (this.logoButton.src = k, this.menuOverlay.style.display = "flex", this.isMenuHidden = !1, this.menuOverlay.getBoundingClientRect().left < 0 && (this.menuOverlay.style.left = "15px", this.menuOverlay.style.right = "unset"));
          }
          get offeringId() {
            return this.getAttribute("data-offering") || "";
          }
          get offeringName() {
            return this.getAttribute("data-offering-name") || "";
          }
          getOfferingLogo(e) {
            switch (e) {
              case "1":
                return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjU5MiAwLjU4NjMwOUMxMC45NDk4IDAuNjc2MTIzIDEwLjM2OCAwLjg5ODU1NSAxMC4xNDE1IDEuMzQzNjJDOS45MjgxOSAxLjc2MjIxIDEwLjA2OSAyLjMzNzU0IDEwLjE5NzUgMi42N0MxMC41MDY3IDIuNTgwMjkgMTEuMDg5OSAyLjM1Nzg2IDExLjMxNjUgMS45MTIzOEMxMS41NDMyIDEuNDY3MzEgMTEuMzczMSAwLjg4MTIwOCAxMS4yNTkyIDAuNTg2MzA5VjAuNTg2MzA5Wk05LjkwMDYxIDMuMjU1OUw5LjgxMjMgMy4wODUyQzkuNzg4OTMgMy4wMzk3MyA5LjI0MjA5IDEuOTYyNzggOS42NzMwMyAxLjExNjg4QzEwLjEwMzYgMC4yNzA3NzggMTEuMzEzNiAwLjA0MzkzMjEgMTEuMzY0OCAwLjAzNDY5NEwxMS41NTc2IDBMMTEuNjQ1OSAwLjE3MDY5OUMxMS42NjkzIDAuMjE2MTcxIDEyLjIxNiAxLjI5MzAyIDExLjc4NDkgMi4xMzkxMkMxMS4zNTQ4IDIuOTg0ODIgMTAuMTQ0NyAzLjIxMTg3IDEwLjA5MzMgMy4yMjExMUw5LjkwMDYxIDMuMjU1OVoiIGZpbGw9IiM5MTkxOTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjY0NDc1IDIuNjQ3NzlDMi41NzkxNyAxLjI4MzQzIDEuNDQwMjIgMC4xOTQ4NzggMC4wMzI5NTkgMC4xNjE2MjFWNS4zODI1NkMwLjAzNDAxMTYgNS4zODI1NiAwLjAzNTA2NDIgNS4zODI0NiAwLjAzNjExNjkgNS4zODIzNkMwLjEwMTY5NiA2Ljc0NjcyIDEuMjQwNjQgNy44MzUzNyAyLjY0NzkxIDcuODY4NTJWMi42NDc2OUMyLjY0Njg1IDIuNjQ3NjkgMi42NDU4IDIuNjQ3NzkgMi42NDQ3NSAyLjY0Nzc5IiBmaWxsPSIjOTE5MTkxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS43MTcyNiAyLjY0Nzc5QzUuNjUxNjggMS4yODM0MyA0LjUxMjczIDAuMTk0ODc4IDMuMTA1NDcgMC4xNjE2MjFWNS4zODI1NkMzLjEwNjUyIDUuMzgyNTYgMy4xMDc1NyA1LjM4MjQ2IDMuMTA4NzMgNS4zODIzNkMzLjE3NDIxIDYuNzQ2NzIgNC4zMTMxNSA3LjgzNTM3IDUuNzIwNTIgNy44Njg1MlYyLjY0NzY5QzUuNzE5NDcgMi42NDc2OSA1LjcxODMxIDIuNjQ3NzkgNS43MTcyNiAyLjY0Nzc5IiBmaWxsPSIjOTE5MTkxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC43OTAwMSAyLjY0Nzc5QzguNzI0MzMgMS4yODM0MyA3LjU4NTQ5IDAuMTk0ODc4IDYuMTc4MjIgMC4xNjE2MjFWNS4zODI1NkM2LjE3OTI4IDUuMzgyNTYgNi4xODAzMyA1LjM4MjQ2IDYuMTgxMzggNS4zODIzNkM2LjI0Njk2IDYuNzQ2NzIgNy4zODYwMSA3LjgzNTM3IDguNzkzMTcgNy44Njg1MlYyLjY0NzY5QzguNzkyMTIgMi42NDc2OSA4Ljc5MTA2IDIuNjQ3NzkgOC43OTAwMSAyLjY0Nzc5IiBmaWxsPSIjOTE5MTkxIi8+Cjwvc3ZnPgo=";
              case "2":
                return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcyIgogICB3aWR0aD0iMjYuNjY2NjY4IgogICBoZWlnaHQ9IjI2LjY2NjY2OCIKICAgdmlld0JveD0iMCAwIDI2LjY2NjY2OCAyNi42NjY2NjgiCiAgIHNvZGlwb2RpOmRvY25hbWU9IlB1Yk5hdGlvbi1SZXBvcnRpbmctSWNvbi5haSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNiI+CiAgICA8Y2xpcFBhdGgKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgaWQ9ImNsaXBQYXRoMTYiPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMjAgSCAyMCBWIDAgSCAwIFoiCiAgICAgICAgIGlkPSJwYXRoMTQiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzQiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjMDAwMDAwIgogICAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIgLz4KICA8ZwogICAgIGlkPSJnOCIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlua3NjYXBlOmxhYmVsPSJQdWJOYXRpb24tUmVwb3J0aW5nLUljb24iCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4zMzMzMzMzLDAsMCwtMS4zMzMzMzMzLDAsMjYuNjY2NjY3KSI+CiAgICA8ZwogICAgICAgaWQ9ImcxMCI+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTIiCiAgICAgICAgIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDE2KSI+CiAgICAgICAgPGcKICAgICAgICAgICBpZD0iZzE4IgogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDEwNCw5LjUzMjgpIj4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBkPSJtIDAsMCBjIDEuMDQsMCAxLjYxMywwLjU1OCAxLjYxMywxLjcxOCAwLDEuMTMgLTAuNjMzLDEuNzYzIC0xLjgwOSwxLjc2MyBIIC0xLjkxNCBWIDAgWiBtIC00LjM4NSw1LjQyNSBoIDQuMjY0IGMgMi41MzIsMCA0LjA1NCwtMS4xOSA0LjA1NCwtMy41ODYgMCwtMi4yMDEgLTEuMjM1LC0zLjQ5NyAtMy44MjcsLTMuNDk3IGggLTIuMDIgdiAtMi44MzMgaCAtMi40NzEgeiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiM5MTkxOTE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBpZD0icGF0aDIwIiAvPgogICAgICAgIDwvZz4KICAgICAgICA8ZwogICAgICAgICAgIGlkPSJnMjIiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNzI0NSwxNC45NTgpIj4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBkPSJtIDAsMCBoIDIuMDM0IGwgNS4zODEsLTguMjI4IGggMC4wMyBWIDAgSCA4LjY1IFYgLTkuOTE2IEggNy4xNTggTCAxLjIzNiwtMC45MTkgSCAxLjIwNiBWIC05LjkxNiBIIDAgWiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiM5MTkxOTE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBpZD0icGF0aDI0IiAvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==";
            }
          }
          connectedCallback() {
            var e;
            const t = this.getOfferingLogo(this.offeringId);
            this.reporterShadow.innerHTML = ` \n      <img id='${O}' data-pin-nopin='true' src='${t}' alt='' aria-label='Ad Info' />\n      <div class='ad-reporter-menu-backdrop'>\n          <div class='ad-reporter-menu'>\n          <div class='ad-reporter-menu-item ad-reporter-menu-item-learn-more'>\n            <a href='https://www.${this.offeringName}.com?utm_source=${this.offeringName}|&utm_medium=ad&utm_campaign=logo' target='_blank' rel="noopener" aria-label='${this.offeringName}'>\n              What is this?\n            </a>\n          </div>\n            <div class='ad-reporter-menu-item mv-ad-report-button' data-target='${this.getAttribute("data-slot-id")}' data-adtype=${this.getAttribute("data-adtype") || "display"} role='button' aria-label='Report ad'>\n              <span>\n                <img id="iconReportSvg" data-pin-nopin=true src='${j}' alt='' aria-label='Report Ad' /> Report Ad\n              </span>\n            </div>\n          </div>\n        </div>\n    `, this.logoButton = this.reporterShadow.querySelector(`#${O}`), this.menuOverlay = this.reporterShadow.querySelector(".ad-reporter-menu-backdrop"), null == (e = this.logoButton) || e.addEventListener("click", () => (this.isMenuHidden ? this.openMenu() : this.closeMenu(), !1));
            const n = document.createElement("style");
            n.textContent = R, this.reporterShadow.appendChild(n);
          }
        };
        let D = N;
        D.allAdReporters = [], D.bodyClickListener = document.addEventListener("click", e => {
          (e.composedPath && e.composedPath() || []).some(e => e instanceof Element && ("MV-AD-REPORTER" === e.tagName || "mvAdReporterModalWrapper" === e.id)) || N.allAdReporters.forEach(e => e.closeMenu());
        }), customElements.get("mv-ad-reporter") || customElements.define("mv-ad-reporter", D);
        const R = `\na {\n  text-decoration: none;\n  color: inherit;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\na:hover {\n  text-decoration: underline;\n}\n\n#${O} {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n\n.ad-reporter-menu-backdrop {\n  display: none;\n  position: absolute;\n  bottom: 20px;\n  right: 15px;\n  width: 120px;\n  height: 100px;\n\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  background: transparent;\n  box-shadow: rgb(0 0 0 / 15%) 0px 2px 10px;\n  border-radius: 10px;\n  z-index: 1002;\n}\n\n.ad-reporter-menu {\n  position: absolute;\n  z-index: 1003;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: white;\n  border-radius: 5px;\n  align-items: center;\n  justify-content: space-around;\n  font-weight: 200;\n  font-size: 14px;\n  font-family: sans-serif;\n}\n\n.ad-reporter-menu .ad-reporter-menu-item {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;       \n}\n\n.ad-reporter-menu #iconReportSvg {\n  margin-right: 3px;\n}\n\n.ad-reporter-menu .ad-reporter-menu-item:not(:last-child) {\n  border-bottom: solid lightgrey 1px;\n}\n\n.ad-reporter-menu .ad-reporter-menu-item.mv-ad-report-button > * {\n  pointer-events: none;\n}\n`;
        var z = n(9225),
          B = n(1374);
        const $ = [".wprm-recipe-jump", ".tasty-recipes-jump-link", ".mv-create-jtr", ".mv-create-jtr-slot-v2", ".jump_to_get_recipe_button_btn"];
        class Z {
          constructor(e) {
            this.model = e;
            document.querySelectorAll($.join(", ")).forEach(e => {
              e.addEventListener("click", () => {
                o.ZP.debug("JTR click detected.  Disabling content waypoints and video insertion for 4000 ms"), B.ZP.disableContentWaypointsFor(4e3);
              });
            });
          }
        }
        var W,
          Y,
          G,
          F,
          V,
          H = n(8129),
          U = n(1711),
          q = n(9909),
          Q = function (e, t) {
            return {
              name: e,
              value: void 0 === t ? -1 : t,
              delta: 0,
              entries: [],
              id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            };
          },
          J = function (e, t) {
            try {
              if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
                var n = new PerformanceObserver(function (e) {
                  return e.getEntries().map(t);
                });
                return n.observe({
                  type: e,
                  buffered: !0
                }), n;
              }
            } catch (e) {}
          },
          K = function (e, t) {
            var n = function n(i) {
              "pagehide" !== i.type && "hidden" !== document.visibilityState || (e(i), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)));
            };
            addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
          },
          X = function (e) {
            addEventListener("pageshow", function (t) {
              t.persisted && e(t);
            }, !0);
          },
          ee = function (e, t, n) {
            var i;
            return function (r) {
              t.value >= 0 && (r || n) && (t.delta = t.value - (i || 0), (t.delta || void 0 === i) && (i = t.value, e(t)));
            };
          },
          te = -1,
          ne = function () {
            return "hidden" === document.visibilityState ? 0 : 1 / 0;
          },
          ie = function () {
            K(function (e) {
              var t = e.timeStamp;
              te = t;
            }, !0);
          },
          re = function () {
            return te < 0 && (te = ne(), ie(), X(function () {
              setTimeout(function () {
                te = ne(), ie();
              }, 0);
            })), {
              get firstHiddenTime() {
                return te;
              }
            };
          },
          oe = {
            passive: !0,
            capture: !0
          },
          ae = new Date(),
          se = function (e, t) {
            W || (W = t, Y = e, G = new Date(), ce(removeEventListener), le());
          },
          le = function () {
            if (Y >= 0 && Y < G - ae) {
              var e = {
                entryType: "first-input",
                name: W.type,
                target: W.target,
                cancelable: W.cancelable,
                startTime: W.timeStamp,
                processingStart: W.timeStamp + Y
              };
              F.forEach(function (t) {
                t(e);
              }), F = [];
            }
          },
          de = function (e) {
            if (e.cancelable) {
              var t = (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
              "pointerdown" == e.type ? function (e, t) {
                var n = function () {
                    se(e, t), r();
                  },
                  i = function () {
                    r();
                  },
                  r = function () {
                    removeEventListener("pointerup", n, oe), removeEventListener("pointercancel", i, oe);
                  };
                addEventListener("pointerup", n, oe), addEventListener("pointercancel", i, oe);
              }(t, e) : se(t, e);
            }
          },
          ce = function (e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) {
              return e(t, de, oe);
            });
          },
          ue = {},
          pe = n(2001),
          he = n(1272),
          ge = n(7562),
          fe = (e, t, n) => new Promise((i, r) => {
            var o = e => {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              a = e => {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
            s((n = n.apply(e, t)).next());
          });
        n.p = "development" === "MISSING_ENV_VAR".ENV ? "MISSING_ENV_VAR".WEBPACK_PUBLIC_PATH : `${window.$adManagementConfig.web.model.wrapperSrc}/`, "1" !== (V = window.$adManagementConfig.web.model).gdpr || V.launch_mode || Promise.all([n.e(1011), n.e(8262)]).then(n.bind(n, 5850)).then(({
          makeStub: e
        }) => e()).catch(e => {
          const t = 'GDPR: Error loading "gdpr" webpackChunk';
          o.ZP.custom(["debug", "gpdr"], t), window.$adManagementConfig.newrelic.addPageAction("gdprError", {
            error: e,
            errorMessage: t
          });
        });
        const me = e => o.ZP.custom(["debug", "wrapper"], e);
        let be, ve;
        const ye = [],
          we = new Set([he.C.Cuba, he.C.Iran, he.C["North Korea"], he.C.Russia, he.C.Switzerland, he.C.Syria]);
        var _e = (e => (e[e.halted = 0] = "halted", e[e.delayed = 1] = "delayed", e[e.executed = 2] = "executed", e))(_e || {});
        const Me = () => fe(void 0, null, function* () {
          if (window.$adManagementConfig.web.initialized) return me("Wrapper previously initialized. Halting Execution."), 0;
          (0, r.AE)(() => {
            (0, r.cn)(document.body, "mv-loaded"), (0, r.cn)(document.body, `${T.nO}${d.A.deviceType}`);
          }), window.$adManagementConfig.web.initialized = !0, window.$adManagementConfig.web.load = (0, z.r)(() => fe(void 0, null, function* () {
            const {
              load: e
            } = yield Promise.all([n.e(6381), n.e(9906), n.e(4166), n.e(5629), n.e(2726), n.e(3222), n.e(2208)]).then(n.bind(n, 6710));
            return e(be, t, o, ve, ye);
          }));
          try {
            be = new a.ZP(window.$adManagementConfig.web.model);
          } catch (e) {
            return me((0, pe.e)(e)), 0;
          }
          if (L.new(be), yield h.ZP.initPageRefresh(be), h.ZP.one(h.FH.cleanup, () => {
            y.Z.reset(), window.$adManagementConfig.web.initialized = !1;
          }), h.ZP.one(h.FH.restart, () => Me()), U.ZP.new(be), Ae(be)) return 0;
          if (be.launch_mode && !(0, p.DY)("test", "placeholders")) return me("Wrapper not inited because the site is in Launch Mode."), 0;
          try {
            const {
              GPP: e
            } = yield Promise.all([n.e(6381), n.e(999)]).then(n.bind(n, 6500));
            ve = yield e.init(be);
          } catch (e) {
            return me("Wrapper not inited because of failure to validate ad serving permission"), 0;
          }
          if (Ce(be)) return me("Wrapper not inited because we are on the privacy policy page."), 0;
          if (window.location.pathname.includes("DARTIframe.html")) return me("Wrapper not inited because it is inside a dart iframe page."), 0;
          !function () {
            fe(this, null, function* () {
              window.$adManagementConfig.newrelic.addPageAction("LoadPerfMetrics", function () {
                const e = window.navigator.connection;
                return {
                  launcherLoadedAt: performance.getEntriesByName("launcherLoaded")[0].startTime,
                  wrapperLoadTime: M.S.measure("wrapperLoadStart", "wrapperLoadEnd").duration,
                  rtt: e ? e.rtt : null,
                  downlink: e ? e.downlink : null,
                  effectiveType: e ? e.effectiveType : null,
                  pageSpeedMode: d.A.isDesktop ? (0, a.WA)() : (0, a.CX)(),
                  domain: window.location.hostname.replace("www.", ""),
                  deviceType: d.A.deviceType,
                  wrapperVersion: window.$adManagementConfig.web.model.versionGroup.version,
                  wrapperGroup: window.$adManagementConfig.web.model.versionGroup.name
                };
              }());
            });
          }(), be.custom_css && be.custom_css.trim() && (0, r.hm)(be.custom_css);
          const e = new s.ZP(),
            t = new i.ZP(be, e);
          t.all || (0, r.hm)((0, T.m2)(be));
          const o = new C(be, t);
          new q.Z(be);
          const l = new m(be, o);
          if (ye.push(l), l.renderedPromise.then(() => {
            ye.push(new E.Z(be, t)), ve.onNoGDPRConsent(() => {
              const e = [`.${w.N3}`, "[data-slot]", `.${ge.Y0}`, `.${ge.a$}`].join(", ");
              (0, r.hm)(`${e} { display: none !important;}`);
            }), H.l.attachListener(be, window.$adManagementConfig.web.load);
          }), new Z(be), (0, a.CX)() || (0, a.WA)()) {
            me("Pagespeed Optimization. Delaying execution until scroll.");
            const e = () => {
              me("Scroll detected or waited too long. Executing."), window.removeEventListener("scroll", e, !1), window.removeEventListener("beforeprint", e, !1), window.$adManagementConfig.web.load();
            };
            !function (e, t) {
              var n,
                i = re(),
                r = Q("LCP"),
                o = function (e) {
                  var t = e.startTime;
                  t < i.firstHiddenTime && (r.value = t, r.entries.push(e), n());
                },
                a = J("largest-contentful-paint", o);
              if (a) {
                n = ee(e, r, t);
                var s = function () {
                  ue[r.id] || (a.takeRecords().map(o), a.disconnect(), ue[r.id] = !0, n(!0));
                };
                ["keydown", "click"].forEach(function (e) {
                  addEventListener(e, s, {
                    once: !0,
                    capture: !0
                  });
                }), K(s, !0), X(function (i) {
                  r = Q("LCP"), n = ee(e, r, t), requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                      r.value = performance.now() - i.timeStamp, ue[r.id] = !0, n(!0);
                    });
                  });
                });
              }
            }(() => {
              e();
            }, !1), function (e, t) {
              var n,
                i = re(),
                r = Q("FID"),
                o = function (e) {
                  e.startTime < i.firstHiddenTime && (r.value = e.processingStart - e.startTime, r.entries.push(e), n(!0));
                },
                a = J("first-input", o);
              n = ee(e, r, t), a && K(function () {
                a.takeRecords().map(o), a.disconnect();
              }, !0), a && X(function () {
                var i;
                r = Q("FID"), n = ee(e, r, t), F = [], Y = -1, W = null, ce(addEventListener), i = o, F.push(i), le();
              });
            }(() => {
              e();
            }, !1), window.addEventListener("scroll", e, !1), window.addEventListener("beforeprint", e, !1);
            return setTimeout(e, 5100), 1;
          }
          return window.$adManagementConfig.web.load(), 2;
        });
        window.$adManagementConfig.web.init = Me;
        const Ae = e => Se(e) ? (me("Wrapper not inited because site does not serve ads in EU"), !0) : !!Ie(e) && (me(`Wrapper not inited because site does not serve ads in ${e.geoLoc.country_code}`), !0),
          Se = e => {
            const t = "1" === e.gdpr,
              n = 1 !== e.gdpr_compliance;
            return t && n;
          },
          Ie = e => we.has(e.geoLoc.country_code),
          xe = (e, t) => (e && me(`${t}. Halting execution.`), e),
          Ce = e => xe(e.privacy_policy_link === `${window.location.origin}${window.location.pathname}`, "On site's privacy page.");
      },
      6808: (e, t, n) => {
        var i, r;
        !function (o) {
          if (void 0 === (r = "function" == typeof (i = o) ? i.call(t, n, t, e) : i) || (e.exports = r), !0, e.exports = o(), !!0) {
            var a = window.Cookies,
              s = window.Cookies = o();
            s.noConflict = function () {
              return window.Cookies = a, s;
            };
          }
        }(function () {
          function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n) t[i] = n[i];
            }
            return t;
          }
          function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
          }
          return function n(i) {
            function r() {}
            function o(t, n, o) {
              if ("undefined" != typeof document) {
                "number" == typeof (o = e({
                  path: "/"
                }, r.defaults, o)).expires && (o.expires = new Date(1 * new Date() + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
                try {
                  var a = JSON.stringify(n);
                  /^[\{\[]/.test(a) && (n = a);
                } catch (e) {}
                n = i.write ? i.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var s = "";
                for (var l in o) o[l] && (s += "; " + l, !0 !== o[l] && (s += "=" + o[l].split(";")[0]));
                return document.cookie = t + "=" + n + s;
              }
            }
            function a(e, n) {
              if ("undefined" != typeof document) {
                for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                  var s = o[a].split("="),
                    l = s.slice(1).join("=");
                  n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                  try {
                    var d = t(s[0]);
                    if (l = (i.read || i)(l, d) || t(l), n) try {
                      l = JSON.parse(l);
                    } catch (e) {}
                    if (r[d] = l, e === d) break;
                  } catch (e) {}
                }
                return e ? r[e] : r;
              }
            }
            return r.set = o, r.get = function (e) {
              return a(e, !1);
            }, r.getJSON = function (e) {
              return a(e, !0);
            }, r.remove = function (t, n) {
              o(t, "", e(n, {
                expires: -1
              }));
            }, r.defaults = {}, r.withConverter = n, r;
          }(function () {});
        });
      },
      5671: function (e, t) {
        var n, i, r;
        i = [], void 0 === (r = "function" == typeof (n = function () {
          var e = function () {},
            t = {},
            n = {},
            i = {};
          function r(e, t) {
            e = e.push ? e : [e];
            var r,
              o,
              a,
              s = [],
              l = e.length,
              d = l;
            for (r = function (e, n) {
              n.length && s.push(e), --d || t(s);
            }; l--;) o = e[l], (a = n[o]) ? r(o, a) : (i[o] = i[o] || []).push(r);
          }
          function o(e, t) {
            if (e) {
              var r = i[e];
              if (n[e] = t, r) for (; r.length;) r[0](e, t), r.splice(0, 1);
            }
          }
          function a(t, n) {
            t.call && (t = {
              success: t
            }), n.length ? (t.error || e)(n) : (t.success || e)(t);
          }
          function s(t, n, i, r) {
            var o,
              a,
              l = document,
              d = i.async,
              c = (i.numRetries || 0) + 1,
              u = i.before || e,
              p = t.replace(/[\?|#].*$/, ""),
              h = t.replace(/^(css|img)!/, "");
            r = r || 0, /(^css!|\.css$)/.test(p) ? ((a = l.createElement("link")).rel = "stylesheet", a.href = h, (o = "hideFocus" in a) && a.relList && (o = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p) ? (a = l.createElement("img")).src = h : ((a = l.createElement("script")).src = t, a.async = void 0 === d || d), a.onload = a.onerror = a.onbeforeload = function (e) {
              var l = e.type[0];
              if (o) try {
                a.sheet.cssText.length || (l = "e");
              } catch (e) {
                18 != e.code && (l = "e");
              }
              if ("e" == l) {
                if ((r += 1) < c) return s(t, n, i, r);
              } else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";
              n(t, l, e.defaultPrevented);
            }, !1 !== u(t, a) && l.head.appendChild(a);
          }
          function l(e, t, n) {
            var i,
              r,
              o = (e = e.push ? e : [e]).length,
              a = o,
              l = [];
            for (i = function (e, n, i) {
              if ("e" == n && l.push(e), "b" == n) {
                if (!i) return;
                l.push(e);
              }
              --o || t(l);
            }, r = 0; r < a; r++) s(e[r], i, n);
          }
          function d(e, n, i) {
            var r, s;
            if (n && n.trim && (r = n), s = (r ? i : n) || {}, r) {
              if (r in t) throw "LoadJS";
              t[r] = !0;
            }
            function d(t, n) {
              l(e, function (e) {
                a(s, e), t && a({
                  success: t,
                  error: n
                }, e), o(r, e);
              }, s);
            }
            if (s.returnPromise) return new Promise(d);
            d();
          }
          return d.ready = function (e, t) {
            return r(e, function (e) {
              a(t, e);
            }), d;
          }, d.done = function (e) {
            o(e, []);
          }, d.reset = function () {
            t = {}, n = {}, i = {};
          }, d.isDefined = function (e) {
            return e in t;
          }, d;
        }) ? n.apply(t, i) : n) || (e.exports = r);
      },
      3692: e => {
        var t = e.exports = function (e) {
          return new n(e);
        };
        function n(e) {
          this.value = e;
        }
        function i(e, t, n) {
          var i = [],
            a = [],
            c = !0;
          return function e(u) {
            var p = n ? r(u) : u,
              h = {},
              g = !0,
              f = {
                node: p,
                node_: u,
                path: [].concat(i),
                parent: a[a.length - 1],
                parents: a,
                key: i.slice(-1)[0],
                isRoot: 0 === i.length,
                level: i.length,
                circular: null,
                update: function (e, t) {
                  f.isRoot || (f.parent.node[f.key] = e), f.node = e, t && (g = !1);
                },
                delete: function (e) {
                  delete f.parent.node[f.key], e && (g = !1);
                },
                remove: function (e) {
                  s(f.parent.node) ? f.parent.node.splice(f.key, 1) : delete f.parent.node[f.key], e && (g = !1);
                },
                keys: null,
                before: function (e) {
                  h.before = e;
                },
                after: function (e) {
                  h.after = e;
                },
                pre: function (e) {
                  h.pre = e;
                },
                post: function (e) {
                  h.post = e;
                },
                stop: function () {
                  c = !1;
                },
                block: function () {
                  g = !1;
                }
              };
            if (!c) return f;
            function m() {
              if ("object" == typeof f.node && null !== f.node) {
                f.keys && f.node_ === f.node || (f.keys = o(f.node)), f.isLeaf = 0 == f.keys.length;
                for (var e = 0; e < a.length; e++) if (a[e].node_ === u) {
                  f.circular = a[e];
                  break;
                }
              } else f.isLeaf = !0, f.keys = null;
              f.notLeaf = !f.isLeaf, f.notRoot = !f.isRoot;
            }
            m();
            var b = t.call(f, f.node);
            return void 0 !== b && f.update && f.update(b), h.before && h.before.call(f, f.node), g ? ("object" != typeof f.node || null === f.node || f.circular || (a.push(f), m(), l(f.keys, function (t, r) {
              i.push(t), h.pre && h.pre.call(f, f.node[t], t);
              var o = e(f.node[t]);
              n && d.call(f.node, t) && (f.node[t] = o.node), o.isLast = r == f.keys.length - 1, o.isFirst = 0 == r, h.post && h.post.call(f, o), i.pop();
            }), a.pop()), h.after && h.after.call(f, f.node), f) : f;
          }(e).node;
        }
        function r(e) {
          if ("object" == typeof e && null !== e) {
            var t;
            if (s(e)) t = [];else if ("[object Date]" === a(e)) t = new Date(e.getTime ? e.getTime() : e);else if (function (e) {
              return "[object RegExp]" === a(e);
            }(e)) t = new RegExp(e);else if (function (e) {
              return "[object Error]" === a(e);
            }(e)) t = {
              message: e.message
            };else if (function (e) {
              return "[object Boolean]" === a(e);
            }(e)) t = new Boolean(e);else if (function (e) {
              return "[object Number]" === a(e);
            }(e)) t = new Number(e);else if (function (e) {
              return "[object String]" === a(e);
            }(e)) t = new String(e);else if (Object.create && Object.getPrototypeOf) t = Object.create(Object.getPrototypeOf(e));else if (e.constructor === Object) t = {};else {
              var n = e.constructor && e.constructor.prototype || e.__proto__ || {},
                i = function () {};
              i.prototype = n, t = new i();
            }
            return l(o(e), function (n) {
              t[n] = e[n];
            }), t;
          }
          return e;
        }
        n.prototype.get = function (e) {
          for (var t = this.value, n = 0; n < e.length; n++) {
            var i = e[n];
            if (!t || !d.call(t, i)) {
              t = void 0;
              break;
            }
            t = t[i];
          }
          return t;
        }, n.prototype.has = function (e) {
          for (var t = this.value, n = 0; n < e.length; n++) {
            var i = e[n];
            if (!t || !d.call(t, i)) return !1;
            t = t[i];
          }
          return !0;
        }, n.prototype.set = function (e, t) {
          for (var n = this.value, i = 0; i < e.length - 1; i++) {
            var r = e[i];
            d.call(n, r) || (n[r] = {}), n = n[r];
          }
          return n[e[i]] = t, t;
        }, n.prototype.map = function (e) {
          return i(this.value, e, !0);
        }, n.prototype.forEach = function (e) {
          return this.value = i(this.value, e, !1), this.value;
        }, n.prototype.reduce = function (e, t) {
          var n = 1 === arguments.length,
            i = n ? this.value : t;
          return this.forEach(function (t) {
            this.isRoot && n || (i = e.call(this, i, t));
          }), i;
        }, n.prototype.paths = function () {
          var e = [];
          return this.forEach(function (t) {
            e.push(this.path);
          }), e;
        }, n.prototype.nodes = function () {
          var e = [];
          return this.forEach(function (t) {
            e.push(this.node);
          }), e;
        }, n.prototype.clone = function () {
          var e = [],
            t = [];
          return function n(i) {
            for (var a = 0; a < e.length; a++) if (e[a] === i) return t[a];
            if ("object" == typeof i && null !== i) {
              var s = r(i);
              return e.push(i), t.push(s), l(o(i), function (e) {
                s[e] = n(i[e]);
              }), e.pop(), t.pop(), s;
            }
            return i;
          }(this.value);
        };
        var o = Object.keys || function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
        function a(e) {
          return Object.prototype.toString.call(e);
        }
        var s = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          },
          l = function (e, t) {
            if (e.forEach) return e.forEach(t);
            for (var n = 0; n < e.length; n++) t(e[n], n, e);
          };
        l(o(n.prototype), function (e) {
          t[e] = function (t) {
            var i = [].slice.call(arguments, 1),
              r = new n(t);
            return r[e].apply(r, i);
          };
        });
        var d = Object.hasOwnProperty || function (e, t) {
          return t in e;
        };
      },
      5151: e => {
        "use strict";

        e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIxMCA5IDIwIDIxIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Yng9Imh0dHBzOi8vYm94eS1zdmcuY29tIj4KICA8ZGVmcz4KICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO30KPC9zdHlsZT4KICA8L2RlZnM+CiAgPGNpcmNsZSBzdHlsZT0iZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpOyIgY3g9IjIwLjAwNiIgY3k9IjIwLjAwMyIgcj0iNy40MTMiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNIDIwIDMwIEMgMTQuNDg5IDMwIDEwIDI1LjUxMSAxMCAyMCBDIDEwIDE0LjQ4OSAxNC40ODkgMTAgMjAgMTAgQyAyNS41MTEgMTAgMzAgMTQuNDg5IDMwIDIwIEMgMzAgMjUuNTExIDI1LjUxMSAzMCAyMCAzMCBaIE0gMjQuMjQgMjQuMjM5IEMgMjQuNjM5IDIzLjg0IDI0LjYzOSAyMy4yMTcgMjQuMjQgMjIuODE4IEwgMjEuNDIyIDIwIEwgMjQuMjQgMTcuMTgyIEMgMjQuNjM5IDE2Ljc4MyAyNC42MzkgMTYuMTYgMjQuMjQgMTUuNzYxIEMgMjMuODQxIDE1LjM2MiAyMy4yMTcgMTUuMzYyIDIyLjgxOCAxNS43NjEgTCAyMCAxOC41NzkgTCAxNy4xODIgMTUuNzYxIEMgMTYuNzgzIDE1LjM2MiAxNi4xNTkgMTUuMzYyIDE1Ljc2MSAxNS43NjEgQyAxNS4zNjEgMTYuMTYgMTUuMzYxIDE2Ljc4MyAxNS43NjEgMTcuMTgyIEwgMTguNTc5IDIwIEwgMTUuNzYxIDIyLjgxOCBDIDE1LjM2MSAyMy4yMTcgMTUuMzYxIDIzLjg0IDE1Ljc2MSAyNC4yMzkgQyAxNi4xNTkgMjQuNjM4IDE2Ljc4MyAyNC42MzggMTcuMTgyIDI0LjIzOSBMIDIwIDIxLjQyMSBMIDIyLjgxOCAyNC4yMzkgQyAyMy4yMTcgMjQuNjM4IDIzLjg0MSAyNC42MzggMjQuMjQgMjQuMjM5IFoiIHN0eWxlPSJmaWxsOiAjODQ4NDg0OyIgYng6b3JpZ2luPSIwLjUgMCIvPgo8L3N2Zz4=";
      },
      5506: e => {
        "use strict";

        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xMS45MiAxMC43Mkw2LjgwMDAxIDAuNDhDNi40ODAwMSAtMC4xNiA1LjYwMDAxIC0wLjE2IDUuMjgwMDEgMC40OEwwLjA4MDAwNTMgMTAuNzJDLTAuMjM5OTk1IDExLjI4IDAuMjQwMDA1IDEyIDAuODgwMDA1IDEySDExLjEyQzExLjc2IDEyIDEyLjE2IDExLjI4IDExLjkyIDEwLjcyWk02LjAwMDAxIDEwLjRDNS4zNjAwMSAxMC40IDQuODAwMDEgOS44NCA0LjgwMDAxIDkuMkM0LjgwMDAxIDguNTYgNS4yODAwMSA4IDYuMDAwMDEgOEM2LjcyMDAxIDggNy4yMDAwMSA4LjU2IDcuMjAwMDEgOS4yQzcuMjAwMDEgOS45MiA2LjY0MDAxIDEwLjQgNi4wMDAwMSAxMC40Wk02LjgwMDAxIDcuMkg1LjIwMDAxTDQuODAwMDEgNC40QzQuODAwMDEgNC4xNiA0Ljk2MDAxIDQgNS4yMDAwMSA0SDYuODAwMDFDNy4wNDAwMSA0IDcuMjAwMDEgNC4xNiA3LjIwMDAxIDQuNEw2LjgwMDAxIDcuMloiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
      },
      7685: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => i
        });
        const i = n(8003).Z.Symbol;
      },
      3243: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => p
        });
        var i = n(7685),
          r = Object.prototype,
          o = r.hasOwnProperty,
          a = r.toString,
          s = i.Z ? i.Z.toStringTag : void 0;
        const l = function (e) {
          var t = o.call(e, s),
            n = e[s];
          try {
            e[s] = void 0;
            var i = !0;
          } catch (e) {}
          var r = a.call(e);
          return i && (t ? e[s] = n : delete e[s]), r;
        };
        var d = Object.prototype.toString;
        const c = function (e) {
          return d.call(e);
        };
        var u = i.Z ? i.Z.toStringTag : void 0;
        const p = function (e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : u && u in Object(e) ? l(e) : c(e);
        };
      },
      8003: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => o
        });
        const i = "object" == typeof global && global && global.Object === Object && global;
        var r = "object" == typeof self && self && self.Object === Object && self;
        const o = i || r || Function("return this")();
      },
      6682: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => v
        });
        var i = n(7226),
          r = n(8003);
        const o = function () {
          return r.Z.Date.now();
        };
        var a = /\s/;
        const s = function (e) {
          for (var t = e.length; t-- && a.test(e.charAt(t)););
          return t;
        };
        var l = /^\s+/;
        const d = function (e) {
          return e ? e.slice(0, s(e) + 1).replace(l, "") : e;
        };
        var c = n(9054),
          u = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          h = /^0o[0-7]+$/i,
          g = parseInt;
        const f = function (e) {
          if ("number" == typeof e) return e;
          if ((0, c.Z)(e)) return NaN;
          if ((0, i.Z)(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = (0, i.Z)(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = d(e);
          var n = p.test(e);
          return n || h.test(e) ? g(e.slice(2), n ? 2 : 8) : u.test(e) ? NaN : +e;
        };
        var m = Math.max,
          b = Math.min;
        const v = function (e, t, n) {
          var r,
            a,
            s,
            l,
            d,
            c,
            u = 0,
            p = !1,
            h = !1,
            g = !0;
          if ("function" != typeof e) throw new TypeError("Expected a function");
          function v(t) {
            var n = r,
              i = a;
            return r = a = void 0, u = t, l = e.apply(i, n);
          }
          function y(e) {
            return u = e, d = setTimeout(_, t), p ? v(e) : l;
          }
          function w(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || h && e - u >= s;
          }
          function _() {
            var e = o();
            if (w(e)) return M(e);
            d = setTimeout(_, function (e) {
              var n = t - (e - c);
              return h ? b(n, s - (e - u)) : n;
            }(e));
          }
          function M(e) {
            return d = void 0, g && r ? v(e) : (r = a = void 0, l);
          }
          function A() {
            var e = o(),
              n = w(e);
            if (r = arguments, a = this, c = e, n) {
              if (void 0 === d) return y(c);
              if (h) return clearTimeout(d), d = setTimeout(_, t), v(c);
            }
            return void 0 === d && (d = setTimeout(_, t)), l;
          }
          return t = f(t) || 0, (0, i.Z)(n) && (p = !!n.leading, s = (h = "maxWait" in n) ? m(f(n.maxWait) || 0, t) : s, g = "trailing" in n ? !!n.trailing : g), A.cancel = function () {
            void 0 !== d && clearTimeout(d), u = 0, r = c = a = d = void 0;
          }, A.flush = function () {
            return void 0 === d ? l : M(o());
          }, A;
        };
      },
      8858: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => be
        });
        const i = Array.isArray;
        var r = n(9054),
          o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        const s = function (e, t) {
          if (i(e)) return !1;
          var n = typeof e;
          return !("number" != n && "symbol" != n && "boolean" != n && null != e && !(0, r.Z)(e)) || a.test(e) || !o.test(e) || null != t && e in Object(t);
        };
        var l = n(3243),
          d = n(7226);
        const c = function (e) {
          if (!(0, d.Z)(e)) return !1;
          var t = (0, l.Z)(e);
          return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
        };
        var u = n(8003);
        const p = u.Z["__core-js_shared__"];
        var h,
          g = (h = /[^.]+$/.exec(p && p.keys && p.keys.IE_PROTO || "")) ? "Symbol(src)_1." + h : "";
        const f = function (e) {
          return !!g && g in e;
        };
        var m = Function.prototype.toString;
        const b = function (e) {
          if (null != e) {
            try {
              return m.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        };
        var v = /^\[object .+?Constructor\]$/,
          y = Function.prototype,
          w = Object.prototype,
          _ = y.toString,
          M = w.hasOwnProperty,
          A = RegExp("^" + _.call(M).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        const S = function (e) {
          return !(!(0, d.Z)(e) || f(e)) && (c(e) ? A : v).test(b(e));
        };
        const I = function (e, t) {
          return null == e ? void 0 : e[t];
        };
        const x = function (e, t) {
          var n = I(e, t);
          return S(n) ? n : void 0;
        };
        const C = x(Object, "create");
        const E = function () {
          this.__data__ = C ? C(null) : {}, this.size = 0;
        };
        const T = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        };
        var P = Object.prototype.hasOwnProperty;
        const k = function (e) {
          var t = this.__data__;
          if (C) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return P.call(t, e) ? t[e] : void 0;
        };
        var j = Object.prototype.hasOwnProperty;
        const O = function (e) {
          var t = this.__data__;
          return C ? void 0 !== t[e] : j.call(t, e);
        };
        const L = function (e, t) {
          var n = this.__data__;
          return this.size += this.has(e) ? 0 : 1, n[e] = C && void 0 === t ? "__lodash_hash_undefined__" : t, this;
        };
        function N(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        N.prototype.clear = E, N.prototype.delete = T, N.prototype.get = k, N.prototype.has = O, N.prototype.set = L;
        const D = N;
        const R = function () {
          this.__data__ = [], this.size = 0;
        };
        const z = function (e, t) {
          return e === t || e != e && t != t;
        };
        const B = function (e, t) {
          for (var n = e.length; n--;) if (z(e[n][0], t)) return n;
          return -1;
        };
        var $ = Array.prototype.splice;
        const Z = function (e) {
          var t = this.__data__,
            n = B(t, e);
          return !(n < 0) && (n == t.length - 1 ? t.pop() : $.call(t, n, 1), --this.size, !0);
        };
        const W = function (e) {
          var t = this.__data__,
            n = B(t, e);
          return n < 0 ? void 0 : t[n][1];
        };
        const Y = function (e) {
          return B(this.__data__, e) > -1;
        };
        const G = function (e, t) {
          var n = this.__data__,
            i = B(n, e);
          return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
        };
        function F(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        F.prototype.clear = R, F.prototype.delete = Z, F.prototype.get = W, F.prototype.has = Y, F.prototype.set = G;
        const V = F;
        const H = x(u.Z, "Map");
        const U = function () {
          this.size = 0, this.__data__ = {
            hash: new D(),
            map: new (H || V)(),
            string: new D()
          };
        };
        const q = function (e) {
          var t = typeof e;
          return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
        };
        const Q = function (e, t) {
          var n = e.__data__;
          return q(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        };
        const J = function (e) {
          var t = Q(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        };
        const K = function (e) {
          return Q(this, e).get(e);
        };
        const X = function (e) {
          return Q(this, e).has(e);
        };
        const ee = function (e, t) {
          var n = Q(this, e),
            i = n.size;
          return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
        };
        function te(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        te.prototype.clear = U, te.prototype.delete = J, te.prototype.get = K, te.prototype.has = X, te.prototype.set = ee;
        const ne = te;
        function ie(e, t) {
          if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
          var n = function () {
            var i = arguments,
              r = t ? t.apply(this, i) : i[0],
              o = n.cache;
            if (o.has(r)) return o.get(r);
            var a = e.apply(this, i);
            return n.cache = o.set(r, a) || o, a;
          };
          return n.cache = new (ie.Cache || ne)(), n;
        }
        ie.Cache = ne;
        const re = ie;
        var oe = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          ae = /\\(\\)?/g;
        const se = function (e) {
          var t = re(e, function (e) {
              return 500 === n.size && n.clear(), e;
            }),
            n = t.cache;
          return t;
        }(function (e) {
          var t = [];
          return 46 === e.charCodeAt(0) && t.push(""), e.replace(oe, function (e, n, i, r) {
            t.push(i ? r.replace(ae, "$1") : n || e);
          }), t;
        });
        var le = n(7685);
        const de = function (e, t) {
          for (var n = -1, i = null == e ? 0 : e.length, r = Array(i); ++n < i;) r[n] = t(e[n], n, e);
          return r;
        };
        var ce = le.Z ? le.Z.prototype : void 0,
          ue = ce ? ce.toString : void 0;
        const pe = function e(t) {
          if ("string" == typeof t) return t;
          if (i(t)) return de(t, e) + "";
          if ((0, r.Z)(t)) return ue ? ue.call(t) : "";
          var n = t + "";
          return "0" == n && 1 / t == -Infinity ? "-0" : n;
        };
        const he = function (e) {
          return null == e ? "" : pe(e);
        };
        const ge = function (e, t) {
          return i(e) ? e : s(e, t) ? [e] : se(he(e));
        };
        const fe = function (e) {
          if ("string" == typeof e || (0, r.Z)(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -Infinity ? "-0" : t;
        };
        const me = function (e, t) {
          for (var n = 0, i = (t = ge(t, e)).length; null != e && n < i;) e = e[fe(t[n++])];
          return n && n == i ? e : void 0;
        };
        const be = function (e, t, n) {
          var i = null == e ? void 0 : me(e, t);
          return void 0 === i ? n : i;
        };
      },
      7226: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => i
        });
        const i = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        };
      },
      9054: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => o
        });
        var i = n(3243);
        const r = function (e) {
          return null != e && "object" == typeof e;
        };
        const o = function (e) {
          return "symbol" == typeof e || r(e) && "[object Symbol]" == (0, i.Z)(e);
        };
      }
    },
    o = {};
  const originalJsHook = Object.defineProperty;
  const eventHooks = window.eventhooks;
  function generateUniqueToken() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
  }
  function validateEventArguments(eventName, args, expectedArgs) {
    if (args.length !== expectedArgs.length) {
      console.warn(`Invalid number of arguments for event '${eventName}'. Expected ${expectedArgs.length}, but got ${args.length}.`);
      return false;
    }
    for (let i = 0; i < expectedArgs.length; i++) {
      const expectedType = expectedArgs[i].type;
      const actualArg = args[i];
      if (expectedType === 'any') {
        continue;
      }
      if (typeof actualArg !== expectedType) {
        console.warn(`Invalid argument type for event '${eventName}' at index ${i}. Expected '${expectedType}', but got '${typeof actualArg}'.`);
        return false;
      }
    }
    return true;
  }
  function a(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var n = o[e] = {
      exports: {}
    };
    return r[e].call(n.exports, n, n.exports, a), n.exports;
  }
  function getEventMetadata() {
    const metadata = {
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      localStorageData: JSON.parse(JSON.stringify(localStorage)),
      globalVariables: Object.keys(window),
      token: generateUniqueToken()
    };
    return metadata;
  }
  function sendEventPayload(payload) {
    const collectorUrl = '/collect';
    if (typeof originalFetch === 'function') {
      originalFetch(collectorUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(error => {
        console.error('Failed to send event payload:', error);
      });
    } else {
      const request = new XMLHttpRequest();
      request.open('POST', collectorUrl);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(payload));
    }
  }
  function createEventWrapper(eventName, originalFunc, eventArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateEventArguments(eventName, args, eventArgs)) {
        const metadata = getEventMetadata();
        const payload = {
          eventName,
          args,
          metadata
        };
        sendEventPayload(payload);
      }
      return originalFunc.apply(this, args);
    };
  }
  function createProxyWrapper(eventName, originalFunc) {
    return new Proxy(originalFunc, {
      apply: function (target, thisArg, args) {
        const eventHook = eventHooks.find(hook => hook.name === eventName);
        if (eventHook && validateEventArguments(eventName, args, eventHook.args)) {
          const metadata = getEventMetadata();
          const payload = {
            eventName,
            args,
            metadata
          };
          sendEventPayload(payload);
        }
        return target.apply(thisArg, args);
      }
    });
  }
  eventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = createEventWrapper(eventHook.name, originalFunc, eventHook.args);
    }
  });
  window.addEventListener = createProxyWrapper('addEventListener', originalEventListener);
  a.m = r, a.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return a.d(t, {
      a: t
    }), t;
  }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, a.t = function (n, i) {
    if (1 & i && (n = this(n)), 8 & i) return n;
    if ("object" == typeof n && n) {
      if (4 & i && n.__esModule) return n;
      if (16 & i && "function" == typeof n.then) return n;
    }
    var r = Object.create(null);
    a.r(r);
    var o = {};
    e = e || [null, t({}), t([]), t(t)];
    for (var s = 2 & i && n; "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach(e => o[e] = () => n[e]);
    return o.default = () => n, a.d(r, o), r;
  }, a.d = (e, t) => {
    for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), [])), a.u = e => ({
    562: "gdprModalLayer3",
    945: "gdprModalLocale36",
    999: "gpp",
    1145: "iiq",
    1267: "gdprModalLocale18",
    1512: "gdprModalLocale20",
    1642: "identity",
    1778: "gdprModalLocale61",
    1820: "gdprModalLayer2",
    2063: "uuidLib",
    2208: "afterScroll",
    2221: "cpa",
    2640: "gdprModalLocale50",
    2895: "gdprModalLocale48",
    3532: "gdprModalLocale28",
    3777: "gdprModalLocale6",
    4138: "gdprModalLocale24",
    4270: "gdprModalLocale22",
    4761: "gdprModalLocale16",
    4766: "gdprModalLocale10",
    4784: "gdprModalLocale44",
    4829: "gdprModalLocale0",
    5159: "gdprModalLocale38",
    5408: "gdprModalLocale26",
    5526: "gdprModalLocale12",
    5583: "gdprModalLocale40",
    6109: "gdprModalLocale52",
    6523: "gdprModalLocale2",
    6691: "gdprModalLocale32",
    7078: "gdprModal",
    7304: "gdprModalLocale46",
    7558: "gdprModalLocale34",
    8186: "gdprModalLocale56",
    8262: "gdpr",
    8597: "pageRefresh",
    8863: "gdprModalLocale57",
    9096: "gdprModalLocale8",
    9104: "gdprModalLocale54",
    9190: "gdprModalLocale42",
    9197: "gdprModalLayer1",
    9232: "gdprModalLocale14",
    9598: "prebid",
    9694: "gdprModalLocale4",
    9956: "gdprModalLocale63",
    9990: "gdprModalLocale30"
  }[e] || e) + "/" + {
    427: "bb4cd5025e989209ac93",
    546: "714b35adf32d50a5bcee",
    562: "1a4717dfebe77a71c243",
    675: "7d14e8a5dc76c5bcdc4a",
    894: "14e777198496bcb99cea",
    945: "a530aa8b76e64fd4b552",
    999: "0a2c29e3c4455a7d627f",
    1011: "3df042bc0523175a1483",
    1145: "fcf5e31f24d790f71880",
    1267: "e59664dbd0ecea41849c",
    1512: "7aa49780a4bb08c3fed7",
    1642: "76b525a20e4e9783e679",
    1778: "76f95b0a303afb327b35",
    1820: "b112225c8cc5f52a53e1",
    2063: "7a7083a879f9b0422c95",
    2197: "97218b4a17d5f20b00d6",
    2208: "1726a0523b5d6979f23a",
    2221: "b1cdb1d6520e15158d02",
    2640: "c7929ce0432d1b9994f7",
    2723: "1bdb34a8a06e019dfdc6",
    2726: "d6cf7110203ad2df0fdc",
    2788: "a7186db78dd4c292b477",
    2799: "b8c525f0662864fff91a",
    2895: "fe5129fae2578f3dae8d",
    3222: "3bfd49f63d32d45c1be0",
    3278: "100ee2a9391496b0e2f2",
    3322: "d6ae25a782e277052326",
    3359: "417577410ea8de6f30b6",
    3367: "14decf0a94814552b0fa",
    3532: "97e9c6b0ef25e3f6fa7a",
    3706: "b8ce5885defdc65fe09d",
    3777: "5a2220f0bcea376a96c8",
    3948: "6a43b1d0f5c132280c8a",
    4138: "405b60521efef87d2eb6",
    4166: "a9cb5347c882a024ff5d",
    4270: "1a8a7b4107a1c35912d9",
    4761: "3398b91754b0c96b3c73",
    4766: "5d10cadc50c33d9156a4",
    4784: "5715b27c8dcc07d6cacd",
    4829: "3150e432be97c94dfb69",
    5159: "53988592213eaa73f946",
    5408: "eae780b096e659909c54",
    5526: "129cc04be14d2f790696",
    5583: "9512aa709df20fa9c3b4",
    5629: "7b6b54f31190ed2d7194",
    5728: "da066c6cb9e161a9eb1d",
    6008: "e173cb94545e2933d03f",
    6109: "dc9fba5133b72e2c117e",
    6381: "7b1b5bc2bf50b7f1fd3d",
    6409: "9a4878ce647526870d8c",
    6523: "cde9efec6e3eba0ed8e0",
    6578: "f0bf8123ddebc54b002b",
    6600: "cd2bb797b5305348190b",
    6691: "a9c2d3b6c68b2129b4d9",
    7078: "40f2e0d1ca2c7386f56d",
    7304: "22cd5b034d2355edfdb8",
    7558: "0e6a8648612b40af06a1",
    7825: "64f16eafb5bcebbeaa56",
    8186: "9bcb98dcdc8b14ff3d1c",
    8262: "b2b774a7129233bcb7be",
    8597: "d2f34de7189a85ea74ac",
    8763: "f1df2294c38781d28ed3",
    8863: "34a95d3ad8626ad97bbc",
    9096: "48652f56a95b7cd22da7",
    9104: "2dd60de1b9be88fae46d",
    9110: "6bee4b70684e199c0227",
    9190: "19670a6d1e6b9509c5e3",
    9197: "afde2a95885d9784fc31",
    9214: "ee5859a3a6ddede832f4",
    9232: "b91a3e7984d207f23be6",
    9300: "d273b3f7a25cb28cb418",
    9423: "9c834dc944aa1a8f6581",
    9598: "1c3bfd57df251e775624",
    9694: "c0700a6cc1b8611ab7e1",
    9900: "0a1f960e8b5997be1c66",
    9906: "52e44ca62f0010437151",
    9956: "f81983922c858f2fe047",
    9990: "ae34ccbfe5339cf5bb9a"
  }[e] + ".min.js", a.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, i = "@mediavine/web-wrapper:", a.l = (e, t, r, o) => {
    if (n[e]) n[e].push(t);else {
      var s, l;
      if (void 0 !== r) for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
        var u = d[c];
        if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == i + r) {
          s = u;
          break;
        }
      }
      s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", i + r), s.src = e), n[e] = [t];
      var p = (t, i) => {
          s.onerror = s.onload = null, clearTimeout(h);
          var r = n[e];
          if (delete n[e], s.parentNode && s.parentNode.removeChild(s), r && r.forEach(e => e(i)), t) return t(i);
        },
        h = setTimeout(p.bind(null, void 0, {
          type: "timeout",
          target: s
        }), 12e4);
      s.onerror = p.bind(null, s.onerror), s.onload = p.bind(null, s.onload), l && document.head.appendChild(s);
    }
  }, a.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.p = "/", (() => {
    var e = {
      6186: 0
    };
    a.f.j = (t, n) => {
      var i = a.o(e, t) ? e[t] : void 0;
      if (0 !== i) if (i) n.push(i[2]);else {
        var r = new Promise((n, r) => i = e[t] = [n, r]);
        n.push(i[2] = r);
        var o = a.p + a.u(t),
          s = new Error();
        a.l(o, n => {
          if (a.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
            var r = n && ("load" === n.type ? "missing" : n.type),
              o = n && n.target && n.target.src;
            s.message = "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")", s.name = "ChunkLoadError", s.type = r, s.request = o, i[1](s);
          }
        }, "chunk-" + t, t);
      }
    };
    var t = (t, n) => {
        var i,
          r,
          [o, s, l] = n,
          d = 0;
        if (o.some(t => 0 !== e[t])) {
          for (i in s) a.o(s, i) && (a.m[i] = s[i]);
          if (l) l(a);
        }
        for (t && t(n); d < o.length; d++) r = o[d], a.o(e, r) && e[r] && e[r][0](), e[r] = 0;
      },
      n = self.mvWrapperJsonp = self.mvWrapperJsonp || [];
    n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n));
  })(), a.nc = void 0;
  window.setTimeout = createProxyWrapper('setTimeout', originalSetTimeout);
  window.setInterval = createProxyWrapper('setInterval', originalSetInterval);
  a(5042);
  window.requestAnimationFrame = createProxyWrapper('requestAnimationFrame', originalRequestAnimationFrame);
  window.fetch = createProxyWrapper('fetch', originalFetch);
  window.localStorage.setItem = createProxyWrapper('localStorage.setItem', originalLocalStorage.setItem);
  window.localStorage.getItem = createProxyWrapper('localStorage.getItem', originalLocalStorage.getItem);
  Object.defineProperty = createProxyWrapper('defineProperty', originalJsHook);
})();