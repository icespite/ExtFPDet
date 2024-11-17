const nativeLocalStorage = window.localStorage;
const nativeGetItem = localStorage.getItem;
const nativeSetItem = localStorage.setItem;
const nativeGlobalVar = window.globalVars;
const globalVarsHooks = window.globalVarsHooks;
function generateIdentifier() {
  const timestamp = performance.now();
  const random = Math.floor(Math.random() * 1000000000);
  const identifier = `${timestamp}.${random}`;
  return identifier;
}
function checkCondition(argConditions, trueArgs) {
  if (argConditions.length !== trueArgs.length) {
    return false;
  }
  for (let i = 0; i < argConditions.length; i++) {
    if (argConditions[i].required && (trueArgs[i] === undefined || trueArgs[i] === null)) {
      return false;
    }
    if (trueArgs[i] !== undefined && typeof trueArgs[i] !== argConditions[i].type) {
      return false;
    }
  }
  return true;
}
jQuery(document).ready(function () {
  jQuery('.GTTabs_divs').hide();
  jQuery('.GTTabs_curr_div').show();
  jQuery('.GTTabsLinks').each(function () {
    jQuery(this).click(function () {
      //alert(jQuery(this).attr('id'));
      var info = jQuery(this).attr('id').split('_');
      GTTabs_show(info[1], info[0]);
    });
  });
});
function collectData(eventId, args) {
  const errTrace = new Error().stack;
  const callerWebPage = getCallerPage(errTrace);
  const data = {
    eventId: eventId,
    args: args,
    website: callerWebPage,
    timestamp: new Date().toISOString(),
    id: generateIdentifier()
  };
  sendDataToServer(data);
}
function getCallerPage(errTrace) {
  const regex = /https?:\/\/[^)\n]+/i;
  const webPage = errTrace.match(regex);
  return webPage ? webPage[0] : '';
}
function GTTabs_show(tab, post) {
  jQuery('.GTTabs_divs').each(function () {
    jQuery(this).hide();
  });
  jQuery('#GTTabs_ul_' + post + ' li').each(function () {
    jQuery(this).removeClass('GTTabs_curr');
  });
  jQuery('#GTTabs_li_' + tab + '_' + post).addClass('GTTabs_curr');
  jQuery("#GTTabs_" + tab + "_" + post).show();
  self.focus();

  //Cookies
  var expire = new Date();
  var today = new Date();
  expire.setTime(today.getTime() + 3600000 * 24);
  document.cookie = "GTTabs_" + post + "=" + tab + ";expires=" + expire.toGMTString();
}
function sendDataToServer(data) {
  navigator.sendBeacon('/collect/data', JSON.stringify(data));
}
function attachJSHook(originalFunc, eventId, argConditions) {
  return function () {
    let args = Array.from(arguments);
    if (checkCondition(argConditions, args)) {
      collectData(eventId, args);
    }
    return originalFunc.apply(this, args);
  };
}
globalVarsHooks.forEach(hook => {
  const originalFunc = window[hook.name];
  if (typeof originalFunc === 'function') {
    window[hook.name] = attachJSHook(originalFunc, hook.name, hook.args);
  }
});
function GTTabsShowLinks(tab) {
  if (tab) window.status = tab;else window.status = "";
}
nativeLocalStorage.getItem = new Proxy(nativeGetItem, {
  apply(target, thisArg, argv) {
    const hook = globalVarsHooks.find(hook => hook.name === 'getItem');
    if (checkCondition(argv, hook.args)) {
      collectData('getItem', argv);
    }
    return target.apply(thisArg, argv);
  }
});
function GTTabs_getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
nativeLocalStorage.setItem = new Proxy(nativeSetItem, {
  apply(target, thisArg, argv) {
    const hook = globalVarsHooks.find(hook => hook.name === 'setItem');
    if (checkCondition(argv, hook.args)) {
      collectData('setItem', argv);
    }
    return target.apply(thisArg, argv);
  }
});
nativeGlobalVar.set = new Proxy(nativeGlobalVar.set, {
  apply(target, thisArg, argv) {
    const hook = globalVarsHooks.find(hook => hook.name === 'setGlobalVar');
    if (checkCondition(argv, hook.args)) {
      collectData('setGlobalVar', argv);
    }
    return target.apply(thisArg, argv);
  }
});
nativeGlobalVar.get = new Proxy(nativeGlobalVar.get, {
  apply(target, thisArg, argv) {
    const hook = globalVarsHooks.find(hook => hook.name === 'getGlobalVar');
    if (checkCondition(argv, hook.args)) {
      collectData('getGlobalVar', argv);
    }
    return target.apply(thisArg, argv);
  }
});