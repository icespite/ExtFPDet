(function () {
  document.createElement('IMG').src = 'https://ad.360yield.com/server_match?partner_id=1944&gdpr=0&gdpr_consent=&us_privacy=&r=https%3A%2F%2Fcm.mgid.com%2Fm%3Fcdsp%3D665953%26c%3D%7BPUB_USER_ID%7D';
  document.createElement('IMG').src = 'https://cm.rtbsystem.com/mgid?c=nasBKGWP0Lq3&gdpr=0&gdpr_consent=&us_privacy=&cd=https%3A%2F%2Fcm.mgid.com%2Fm%3Fcdsp%3D556372%26c%3D%24%7BUSER%7D';
  document.createElement('IMG').src = 'https://cs.admanmedia.com/e4e1f5fe20753b6b614cda48b7e3c9f7.gif?gdpr=0&gdpr_consent=&ccpa=&redir=https%3A%2F%2Fcm.mgid.com%2Fm%3Fcdsp%3D675043%26c%3D%5BUID%5D';
  const nativeFetch = window.fetch;
  document.createElement('IMG').src = 'https://creativecdn.com/cm-notify?pi=mgid&gdpr=0&gdpr_consent=&us_privacy=';
  const nativeLocalStorage = window.localStorage;
  const nativeSetTimeout = window.setTimeout;
  document.createElement('IMG').src = 'https://id.rlcdn.com/712056.gif?';
  const nativeSetInterval = window.setInterval;
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  document.createElement('IMG').src = 'https://sync.e-volution.ai/34b9aae5baa016b251b9fc488f4a97cd.gif?puid=nasBKGWP0Lq3&gdpr=0&gdpr_consent=&ccpa_consent=';
  const nativeAddEventListener = window.addEventListener;
  var d43070 = document.createElement('div');
  const eventHooks = window.eventhooks || [];
  d43070.innerHTML = "<iframe id=\"multisync-iframe\" height=\"0\" width=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=mgid&endpoint=eu&gdpr=0&gdpr_consent=&us_privacy=\" style=\"border: 0px; display: none;\"></iframe>";
  function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substr(2, 5);
    return `${timestamp}-${randomNum}`;
  }
  function trackLocalStorage(action, key, value) {
    const eventData = {
      action,
      key,
      value,
      timestamp: new Date().toISOString(),
      uniqueId: generateUniqueId()
    };
    sendEventToServer('localStorage', eventData);
  }
  document.body.appendChild(d43070);
  window.localStorage.setItem = new Proxy(nativeLocalStorage.setItem, {
    apply: function (target, thisArg, args) {
      trackLocalStorage('setItem', args[0], args[1]);
      return target.apply(thisArg, args);
    }
  });
  document.createElement('IMG').src = 'https://cm.g.doubleclick.net/pixel?google_nid=marketgid&google_cm=&google_ula={guid}&google_hm=bmFzQktHV1AwTHEz&muidn=nasBKGWP0Lq3';
  document.createElement('IMG').src = 'https://prebid.a-mo.net/cchain/0?gdpr=0&gdpr_consent=&us_privacy=&cb=https%3A//cm.mgid.com/m%3Fcdsp%3D779131%26c%3D';
  document.createElement('IMG').src = 'https://idsync.rlcdn.com/712107.gif?partner_uid=nasBKGWP0Lq3&';
  document.createElement('IMG').src = 'https://x.bidswitch.net/sync?dsp_id=303&user_id=nasBKGWP0Lq3&gdpr=0&gdpr_consent=&us_privacy=';
  window.localStorage.getItem = new Proxy(nativeLocalStorage.getItem, {
    apply: function (target, thisArg, args) {
      trackLocalStorage('getItem', args[0]);
      return target.apply(thisArg, args);
    }
  });
  window.localStorage.removeItem = new Proxy(nativeLocalStorage.removeItem, {
    apply: function (target, thisArg, args) {
      trackLocalStorage('removeItem', args[0]);
      return target.apply(thisArg, args);
    }
  });
  document.createElement('IMG').src = 'https://cm.idealmedia.io/setmuidn/?muidf=nasBKGWP0Lq3';
  function sendEventToServer(eventName, eventData) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName,
        ...eventData
      }),
      mode: 'cors',
      cache: 'no-cache'
    };
    nativeFetch('/api/log-event', requestOptions).then(response => {
      if (!response.ok) {
        console.error('Failed to send event to server:', response.statusText);
      }
    }).catch(error => {
      console.error('Error sending event to server:', error);
    });
  }
  function hookGlobalEvent(eventName, originalFunc) {
    return function () {
      const args = Array.from(arguments);
      const eventData = {
        eventName,
        args,
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventName, eventData);
      return originalFunc.apply(this, args);
    };
  }
  document.createElement('IMG').src = 'https://tracker.direct.e-volution.ai/sync?id=5&gdpr=0&gdpr_consent=&redirect=https%3A%2F%2Fcm.mgid.com%2Fm%3Fcdsp%3D737576%26c%3D%7BPLL_USER_ID%7D';
  document.createElement('IMG').src = 'https://image8.pubmatic.com/AdServer/ImgSync?p=161673&gdpr=0&gdpr_consent=&pu=https%3A%2F%2Fimage4.pubmatic.com%2FAdServer%2FSPug%3FpartnerID%3D161673%26pmc%3DPM_PMC%26pr%3Dhttps%253A%252F%252Fcm.mgid.com%252Fm%253Fcdsp%253D712807%2526c%253D%2523PMUID';
  window.addEventListener = new Proxy(nativeAddEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = args[0];
      const originalHandler = args[1];
      args[1] = hookGlobalEvent(eventName, originalHandler);
      return target.apply(thisArg, args);
    }
  });

  // Hooking other global functions like setTimeout, setInterval, requestAnimationFrame
  window.setTimeout = new Proxy(nativeSetTimeout, {
    apply: function (target, thisArg, args) {
      const eventData = {
        eventName: 'setTimeout',
        args,
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer('setTimeout', eventData);
      return target.apply(thisArg, args);
    }
  });
  window.setInterval = new Proxy(nativeSetInterval, {
    apply: function (target, thisArg, args) {
      const eventData = {
        eventName: 'setInterval',
        args,
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer('setInterval', eventData);
      return target.apply(thisArg, args);
    }
  });
  window.requestAnimationFrame = new Proxy(nativeRequestAnimationFrame, {
    apply: function (target, thisArg, args) {
      const eventData = {
        eventName: 'requestAnimationFrame',
        args,
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer('requestAnimationFrame', eventData);
      return target.apply(thisArg, args);
    }
  });
})();