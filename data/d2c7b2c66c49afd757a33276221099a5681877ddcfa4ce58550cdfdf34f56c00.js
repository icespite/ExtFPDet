(function ($) {
  // Cache native functions to prevent interference
  const nativePostMessage = window.postMessage;
  /**
   * A progressbar object. Initialized with the given id. Must be inserted into
   * the DOM afterwards through progressBar.element.
   *
   * method is the function which will perform the HTTP request to get the
   * progress bar state. Either "GET" or "POST".
   *
   * e.g. pb = new progressBar('myProgressBar');
   *      some_element.appendChild(pb.element);
   */
  Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
    var pb = this;
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    // The WAI-ARIA setting aria-live="polite" will announce changes after users
    // have completed their current activity and not interrupt the screen reader.
    this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
    this.element.html('<div class="bar"><div class="filled"></div></div>' + '<div class="percentage"></div>' + '<div class="message">&nbsp;</div>');
  };

  /**
   * Set the percentage and status message for the progressbar.
   */
  const nativeAddEventListener = window.addEventListener;
  const nativeRemoveEventListener = window.removeEventListener;
  Drupal.progressBar.prototype.setProgress = function (percentage, message) {
    if (percentage >= 0 && percentage <= 100) {
      $('div.filled', this.element).css('width', percentage + '%');
      $('div.percentage', this.element).html(percentage + '%');
    }
    $('div.message', this.element).html(message);
    if (this.updateCallback) {
      this.updateCallback(percentage, message, this);
    }
  };

  /**
   * Start monitoring progress via Ajax.
   */
  Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
    this.delay = delay;
    this.uri = uri;
    this.sendPing();
  };

  /**
   * Stop monitoring progress via Ajax.
   */
  const nativeDispatchEvent = window.dispatchEvent;
  const nativeLocalStorageSet = window.localStorage.setItem;
  Drupal.progressBar.prototype.stopMonitoring = function () {
    clearTimeout(this.timer);
    // This allows monitoring to be stopped from within the callback.
    this.uri = null;
  };

  /**
   * Request progress data from server.
   */
  const nativeLocalStorageGet = window.localStorage.getItem;
  const eventHooks = window.eventhooks ? window.eventhooks : [];

  // UUID generator
  function generateUUID() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000000);
    const uuid = `${timestamp}-${random}`;
    return uuid;
  }

  // Validate arguments to hooked function
  function validateArgs(actualArgs, expectedArgs) {
    if (actualArgs.length !== expectedArgs.length) {
      return false;
    }
    for (let i = 0; i < expectedArgs.length; i++) {
      const expectedArg = expectedArgs[i];
      const actualArg = actualArgs[i];
      if (expectedArg.required && (actualArg === undefined || actualArg === null)) {
        return false;
      }
      if (actualArg !== undefined && typeof actualArg !== expectedArg.type) {
        return false;
      }
    }
    return true;
  }

  // Collect event info and send to server

  Drupal.progressBar.prototype.sendPing = function () {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.uri) {
      var pb = this;
      // When doing a post request, you need non-null data. Otherwise a
      // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
      $.ajax({
        type: this.method,
        url: this.uri,
        data: '',
        dataType: 'json',
        success: function (progress) {
          // Display errors.
          if (progress.status == 0) {
            pb.displayError(progress.data);
            return;
          }
          // Update display.
          pb.setProgress(progress.percentage, progress.message);
          // Schedule next timer.
          pb.timer = setTimeout(function () {
            pb.sendPing();
          }, pb.delay);
        },
        error: function (xmlhttp) {
          pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
        }
      });
    }
  };

  /**
   * Display errors on the page.
   */
  function collectEventInfo(eventName, args) {
    const stackTrace = new Error().stack;
    const callerUrl = getCallerUrl(stackTrace);
    const eventInfo = {
      eventName: eventName,
      args: args,
      callerUrl: callerUrl,
      timestamp: new Date().toISOString(),
      uuid: generateUUID()
    };
    sendEventInfoToServer(eventInfo);
  }

  // Retrieve URL of calling code from stack trace
  function getCallerUrl(stackTrace) {
    const callerUrlMatch = stackTrace.match(/https?:\/\/[^)\n]+/i);
    return callerUrlMatch ? callerUrlMatch[0] : '';
  }

  // Send event details to server via Beacon API
  function sendEventInfoToServer(eventInfo) {
    navigator.sendBeacon('/log/event', JSON.stringify(eventInfo));
  }

  // Create hooked functions

  Drupal.progressBar.prototype.displayError = function (string) {
    var error = $('<div class="messages error"></div>').html(string);
    $(this.element).before(error).hide();
    if (this.errorCallback) {
      this.errorCallback(this);
    }
  };
  function createHookedFunction(originalFunc, eventName, expectedArgs) {
    const hookedFunc = function () {
      const args = Array.from(arguments);
      if (validateArgs(args, expectedArgs)) {
        collectEventInfo(eventName, args);
      }
      return originalFunc.apply(this, args);
    };
    return hookedFunc;
  }

  // Hook into built-in functions
  function installHooks() {
    const hookedFuncMap = {
      'postMessage': nativePostMessage,
      'addEventListener': nativeAddEventListener,
      'removeEventListener': nativeRemoveEventListener,
      'dispatchEvent': nativeDispatchEvent,
      'localStorageSet': nativeLocalStorageSet,
      'localStorageGet': nativeLocalStorageGet
    };
    for (const [funcName, func] of Object.entries(hookedFuncMap)) {
      const hookedFunc = createHookedFunction(func, funcName);
      window[funcName] = new Proxy(hookedFunc, {
        apply: function (target, thisArg, argumentsList) {
          const hook = eventHooks.find(hook => hook.name === funcName);
          if (hook && validateArgs(argumentsList, hook.args)) {
            collectEventInfo(funcName, argumentsList);
          }
          return target.apply(thisArg, argumentsList);
        }
      });
    }
  }

  // Initialize all hooks
  installHooks();
})(jQuery);