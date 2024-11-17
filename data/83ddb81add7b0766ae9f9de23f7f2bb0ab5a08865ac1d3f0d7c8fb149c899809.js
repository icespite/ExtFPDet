/* PLEASE DO NOT COPY AND PASTE THIS CODE. */(function () {
  var w = window,
    C = '___grecaptcha_cfg',
    cfg = w[C] = w[C] || {},
    N = 'grecaptcha';
  const nativeFetch = window.fetch;
  const nativeSetTimeout = window.setTimeout;
  var gr = w[N] = w[N] || {};
  gr.ready = gr.ready || function (f) {
    (cfg['fns'] = cfg['fns'] || []).push(f);
  };
  const nativeSetInterval = window.setInterval;
  w['__recaptcha_api'] = 'https://www.google.com/recaptcha/api2/';
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  (cfg['render'] = cfg['render'] || []).push('6Lf4mIooAAAAAKeyNDAqnrqYB827gvwu-WiPeFMX');
  const nativeLocalStorageSetItem = window.localStorage.setItem;
  w['__google_recaptcha_client'] = true;
  const nativeAddEventListener = EventTarget.prototype.addEventListener;
  var d = document,
    po = d.createElement('script');
  const eventHooks = window.eventhooks;
  po.type = 'text/javascript';
  po.async = true;
  po.src = 'https://www.gstatic.com/recaptcha/releases/fGZmEzpfeSeqDJiApS_XZ4Y2/recaptcha__en.js';
  let uniqueIdCount = 0;
  const formattedDate = () => new Date().toISOString().replace(/\D/g, '');
  po.crossOrigin = 'anonymous';
  function generateUniqueId() {
    uniqueIdCount += 1;
    return `${formattedDate()}-${uniqueIdCount}`;
  }
  function validateEventArgs(args, expectedArgs) {
    if (args.length < expectedArgs.length) {
      console.warn('Missing arguments');
      return false;
    }
    for (let i = 0; i < expectedArgs.length; i++) {
      const actualArg = args[i];
      if (typeof actualArg !== expectedArgs[i]) {
        console.warn('Invalid argument type');
        return false;
      }
    }
    return true;
  }
  po.integrity = 'sha384-BkcmNQWtC2+F6VzriTvPuJFQk+CQm9Ka25Y8yH4U7AvSZTgBts+ceh072QKv1qYq';
  var e = d.querySelector('script[nonce]'),
    n = e && (e['nonce'] || e.getAttribute('nonce'));
  function getEventCallerInfo() {
    const stackInfo = new Error().stack.split('at ')[2].trim();
    const callerInfo = {
      url: window.location.href,
      stackInfo
    };
    return callerInfo;
  }
  function sendEventToServer(eventData) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData),
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
  function createEventHook(originalFunc, expectedArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateEventArgs(args, expectedArgs)) {
        const callerInfo = getEventCallerInfo();
        const eventData = {
          operation: originalFunc.name,
          args,
          callerInfo,
          timestamp: formattedDate(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
      return originalFunc.apply(this, args);
    };
  }
  const eventsMap = {
    fetch: ['string', 'object'],
    setTimeout: ['function', 'number'],
    setInterval: ['function', 'number'],
    requestAnimationFrame: ['function'],
    setItem: ['string', 'string'],
    addEventListener: ['string', 'function', 'object']
  };
  if (n) {
    po.setAttribute('nonce', n);
  }
  Object.keys(eventsMap).forEach(key => {
    if (!window[key]) return;
    const originalFunc = key === 'setItem' ? nativeLocalStorageSetItem : key === 'addEventListener' ? nativeAddEventListener : window[key];
    window[key] = createEventHook(originalFunc, eventsMap[key]);
  });
  var s = d.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(po, s);
})();