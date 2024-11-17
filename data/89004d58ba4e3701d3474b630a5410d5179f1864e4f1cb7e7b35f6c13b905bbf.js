/* global jQuery */
/* global document */

(function ($) {
  'use strict';

  const nativeFetch = window.fetch;
  const nativeSetTimeout = window.setTimeout;
  const nativeSetInterval = window.setInterval;
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  var createCookie = function (name, value, time) {
    var expires;
    if (time) {
      var date = new Date();
      var ms = time;
      if (typeof time === 'object') {
        ms = time.value;
        switch (time.type) {
          case 'days':
            ms = ms * 24 * 60 * 60 * 1000;
            break;
        }
      }
      date.setTime(date.getTime() + ms);
      expires = '; expires=' + date.toGMTString();
    } else {
      expires = '';
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  };
  var readCookie = function (name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i += 1) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  };
  const nativeLocalStorage = window.localStorage;
  const nativeAddEventListener = window.addEventListener;
  function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substr(2, 5);
    return `${timestamp}-${randomNum}`;
  }
  function trackLocalStorage(key, value) {
    const eventData = {
      type: 'localStorage',
      action: 'set',
      key: key,
      value: value,
      timestamp: new Date().toISOString(),
      uniqueId: generateUniqueId()
    };
    sendEventToServer(eventData);
  }
  function enhancedAddEventListener(eventName, handler, options) {
    return nativeAddEventListener(eventName, function (event) {
      const eventData = {
        type: 'eventListener',
        eventName: eventName,
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      return handler(event);
    }, options);
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
  var slideUp = function () {
    var $slideUpSlotWrap = $('.adace-slideup-slot-wrap'),
      $slideUpCloserBtn = $slideUpSlotWrap.find('.adace-slideup-slot-closer'),
      SlideupCookie = readCookie('adace_slideup_disabled');
    $slideUpCloserBtn.on('click', function (e) {
      e.preventDefault();
      $slideUpSlotWrap.addClass('hidden');
      createCookie('adace_slideup_disabled', 1, 24 * 60 * 60 * 1000);
    });
    if (SlideupCookie) {
      $slideUpSlotWrap.remove();
    }
  };
  window.localStorage.setItem = new Proxy(nativeLocalStorage.setItem, {
    apply: function (target, thisArg, args) {
      trackLocalStorage(args[0], args[1]);
      return target.apply(thisArg, args);
    }
  });
  window.addEventListener = new Proxy(nativeAddEventListener, {
    apply: function (target, thisArg, args) {
      return enhancedAddEventListener(args[0], args[1], args[2]);
    }
  });
  window.fetch = new Proxy(nativeFetch, {
    apply: function (target, thisArg, args) {
      const eventData = {
        type: 'fetch',
        url: args[0],
        options: args[1],
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      return target.apply(thisArg, args);
    }
  });
  window.setTimeout = new Proxy(nativeSetTimeout, {
    apply: function (target, thisArg, args) {
      const eventData = {
        type: 'setTimeout',
        delay: args[1],
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      return target.apply(thisArg, args);
    }
  });
  $(document).ready(function () {
    slideUp();
  });
  window.setInterval = new Proxy(nativeSetInterval, {
    apply: function (target, thisArg, args) {
      const eventData = {
        type: 'setInterval',
        interval: args[1],
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      return target.apply(thisArg, args);
    }
  });
  window.requestAnimationFrame = new Proxy(nativeRequestAnimationFrame, {
    apply: function (target, thisArg, args) {
      const eventData = {
        type: 'requestAnimationFrame',
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      return target.apply(thisArg, args);
    }
  });
})(jQuery);