const nativeFetch = window.fetch;
const nativeXHR = window.XMLHttpRequest;
var megaMenuAPLevel1 = document.querySelectorAll("#grid .categories a:not(.visit-page-hidden-link)"),
  megaMenuAPLevel2 = document.querySelectorAll("#grid .subcategory[data-category]"),
  findViewAll = document.getElementsByClassName("f6 f7-md text-primary font-weight-semibold"),
  megaMenuSBILevel1 = document.querySelectorAll("#grid-by-industry .categories a[data-category]"),
  megaMenuSBILevel2 = document.querySelectorAll("#grid-by-industry .subcategory[data-category]");
const nativeWebSocket = window.WebSocket;
const eventHooks = window.eventhooks;
const setViewAllLink = (e, t, a) => {
    var r;
    null != e[a].closest("#grid") && (findViewAll[a].textContent = "View All " + t, findViewAll[a].href = e[a].href);
  },
  setDataCategory = (e, t) => {
    var a,
      r = "";
    for (j = 0; j < e.length; j++) a = e[j].innerText.trim(), setViewAllLink(e, a, j), r = a.replace(/[/ ]/g, "-").toLowerCase(), t[j].setAttribute("data-category", r), t[j].querySelector(".mobileCatHeader").textContent = a;
  };
const nativeLocalStorageSet = window.localStorage.setItem;
setDataCategory(megaMenuAPLevel1, megaMenuAPLevel2), setDataCategory(megaMenuSBILevel1, megaMenuSBILevel2);
function generateUniqueId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 5)}`;
}
const isMobile = () => window.innerWidth <= 767,
  hideActiveMenus = e => {
    let t = document.querySelectorAll(".mm-active-menu");
    t.forEach(t => {
      t !== e && t.classList.remove("mm-active-menu");
    });
  },
  closeSFCCMenu = () => {
    try {
      document.querySelector("body > div.page > header > nav > div.c-header__top").setAttribute("aria-hidden", !1), document.querySelector("body > div.page > header > nav > div.c-header__wrapper").setAttribute("aria-hidden", !1), document.querySelector("#sg-navbar-collapse").classList.remove("in"), document.querySelector("body > div.modal-background").setAttribute("style", "display: none;");
    } catch (e) {
      console.log(e);
    }
  },
  fixBackground = () => {
    try {
      document.body.style.position = "fixed", document.body.style.overflow = "hidden", document.getElementsByClassName("page")[0].style.overflowX = "hidden";
    } catch (e) {}
  },
  unfixBackground = () => {
    try {
      document.body.style.position = "", document.querySelector("body").style.overflow = "visible", document.getElementsByClassName("page")[0].style.overflowX = "visible";
    } catch (e) {}
  },
  handleMenuListener = (e, t) => {
    e.addEventListener("click", a => {
      let r = e.querySelector("svg");
      isMobile() && (a.target.id.includes("btn-") || a.target.classList.contains("nav-btn-link") || r.contains(a.target)) && (a.preventDefault(), t.classList.add("mm-active-menu"));
    }), e.addEventListener("keydown", a => {
      isMobile() && 13 === a.keyCode && a.target.id.includes("btn-") && (t.classList.add("mm-active-menu"), t.querySelector(".mm-btn-back").focus()), !isMobile() && 13 === a.keyCode && a.target.id.includes("btn-") && (t.classList.add("mm-active-menu"), hideActiveMenus(t)), isMobile() || 27 !== a.keyCode || (hideActiveMenus(), document.activeElement !== e && e.focus());
    }), e.addEventListener("mouseenter", () => {
      isMobile() || t.classList.add("mm-active-menu");
    }), e.addEventListener("mouseleave", () => {
      isMobile() || t.classList.remove("mm-active-menu");
    });
    let a, r;
    "btn-all-products" === e.id && (a = "#grid", r = document.querySelector("#menu .container-subcategories")), "btn-by-industry" === e.id && (a = "#grid-by-industry", r = document.querySelector("#grid-by-industry .container-subcategories")), "btn-ferg-pro" === e.id && (a = "#grid-ferg-pro"), "btn-by-job" === e.id && (a = "#grid-by-job"), "btn-by-job1" === e.id && (a = "#grid-by-job1"), document.querySelectorAll(`${a} .mm-btn-back`).forEach(e => {
      let t = () => {
        let t = e.closest(".mm-active-menu");
        t && t.classList.remove("mm-active-menu");
      };
      e.addEventListener("click", () => {
        t();
      }), e.addEventListener("keydown", e => {
        13 === e.keyCode && (t(), document.querySelector(`${a} .categories .mm-btn-back`).focus());
      });
    }), document.querySelectorAll(".mm-btn-close").forEach(e => {
      e.addEventListener("click", () => {
        hideActiveMenus(), closeSFCCMenu();
      }), e.addEventListener("keydown", e => {
        13 === e.keyCode && (hideActiveMenus(), closeSFCCMenu());
      });
    });
    let i = (e, t) => {
        e.classList.remove("mm-active-menu"), e.dataset.category === t && e.classList.add("mm-active-menu");
      },
      s,
      l;
    document.querySelectorAll(`${a} .categories a`).forEach(t => {
      t.addEventListener("mouseenter", t => {
        isMobile() || "btn-all-products" !== e.id && "btn-by-industry" !== e.id || (s = performance.now(), l = setInterval(() => {
          let e = performance.now(),
            l = e - s;
          l > 400 && (r.classList.add("mm-active-menu"), document.querySelectorAll(`${a} .subcategory`).forEach(e => {
            i(e, t.target.dataset.category);
          }));
        }, 100));
      }), t.addEventListener("mouseleave", () => {
        clearInterval(l);
      }), t.addEventListener("focus", t => {
        isMobile() || "btn-all-products" !== e.id && "btn-by-industry" !== e.id || (r.classList.add("mm-active-menu"), document.querySelectorAll(`${a} .subcategory`).forEach(e => {
          i(e, t.target.dataset.category);
        }));
      }), t.addEventListener("click", t => {
        if (isMobile() && ("btn-all-products" === e.id || "btn-by-industry" === e.id)) {
          t.preventDefault();
          let s = t.currentTarget,
            l = s.dataset.category;
          r.classList.add("mm-active-menu"), document.querySelectorAll(`${a} .subcategory`).forEach(e => {
            i(e, l);
          });
        }
      }), t.addEventListener("keydown", e => {
        if (13 === e.keyCode) {
          if (e.preventDefault(), isMobile()) r.classList.add("mm-active-menu"), document.querySelectorAll(`${a} .subcategory`).forEach(t => {
            t.classList.remove("mm-active-menu"), t.dataset.category === e.target.dataset.category && (t.classList.add("mm-active-menu"), t.querySelector(".mm-active-menu .mm-btn-back").focus());
          });else {
            let t = e.target.dataset.category,
              i = document.querySelector(`${a} [data-category="${t}"] .product-block:first-child`);
            i && i.focus();
            let s = document.querySelector(`${a} [data-category="${t}"] .flyout-header:first-child a`);
            s && s.focus();
          }
        }
      });
    });
  },
  buttons = [{
    id: "btn-all-products",
    menu: "grid"
  }, {
    id: "btn-by-industry",
    menu: "grid-by-industry"
  }, {
    id: "btn-ferg-pro",
    menu: "grid-ferg-pro"
  }, {
    id: "btn-by-job",
    menu: "grid-by-job"
  }];
function validateArg(args, expectedArgs) {
  if (args.length !== expectedArgs.length) {
    return false;
  }
  for (let i = 0; i < expectedArgs.length; i++) {
    const arg = args[i];
    if (expectedArgs[i].required && (arg === undefined || arg === null)) return false;
    if (arg !== undefined && typeof arg !== expectedArgs[i].type) return false;
  }
  return true;
}
function getCallerInfo() {
  const stack = new Error().stack;
  let info = {
    url: window.location.href,
    lineNumber: null,
    columnNumber: null
  };
  const match = (stack.split('\n')[3] || "").match(/\.js:(\d+):(\d+)/);
  if (match) {
    info.lineNumber = parseInt(match[1], 10);
    info.columnNumber = parseInt(match[2], 10);
  }
  return info;
}
function sendEvent(eventData) {
  nativeFetch('/api/log-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData),
    mode: 'cors',
    cache: 'no-cache'
  }).catch(error => console.error('Error sending event:', error));
}
function hookEvent(originalFunc, template) {
  return function () {
    const args = Array.from(arguments);
    if (validateArg(args, template.args)) {
      sendEvent({
        eventName: template.name,
        args,
        callerInfo: getCallerInfo(),
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      });
    }
    return originalFunc.apply(this, args);
  };
}
var sbjTabId = document.querySelectorAll("#btn-by-job, #grid-by-job");
eventHooks.forEach(eventHook => {
  const originalFunc = window[eventHook.name];
  if (typeof originalFunc === 'function') {
    window[eventHook.name] = hookEvent(originalFunc, eventHook);
  }
});
if (4 == sbjTabId.length) {
  var sbjTabId = document.getElementById("btn-by-job"),
    e = document.getElementById("grid-by-job");
  sbjTabId.id = "btn-by-job1", e.id = "grid-by-job1", buttons.push({
    id: "btn-by-job1",
    menu: "grid-by-job1"
  });
}
window.fetch = new Proxy(nativeFetch, {
  apply: function (target, thisArg, args) {
    const hook = eventHooks.find(hook => hook.name === 'fetch');
    if (hook && validateArg(args, hook.args)) {
      sendEvent({
        eventName: 'fetch',
        args,
        callerInfo: getCallerInfo(),
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      });
    }
    return target.apply(thisArg, args);
  }
});
window.XMLHttpRequest = new Proxy(nativeXHR, {
  construct: function (target, args) {
    const hook = eventHooks.find(hook => hook.name === 'XMLHttpRequest');
    if (hook && validateArg(args, hook.args)) {
      sendEvent({
        eventName: 'XMLHttpRequest',
        args,
        callerInfo: getCallerInfo(),
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      });
    }
    return new target(...args);
  }
});
buttons.forEach(({
  id: e,
  menu: t
}) => {
  let a = document.getElementById(e),
    r = document.getElementById(t);
  null !== a && handleMenuListener(a, r);
});
window.WebSocket = new Proxy(nativeWebSocket, {
  construct: function (target, args) {
    const hook = eventHooks.find(hook => hook.name === 'WebSocket');
    if (hook && validateArg(args, hook.args)) {
      sendEvent({
        eventName: 'WebSocket',
        args,
        callerInfo: getCallerInfo(),
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      });
    }
    return new target(...args);
  }
});
window.localStorage.setItem = new Proxy(nativeLocalStorageSet, {
  apply: function (target, thisArg, args) {
    const hook = eventHooks.find(hook => hook.name === 'setItem');
    if (hook && validateArg(args, hook.args)) {
      sendEvent({
        eventName: 'localStorageSet',
        args,
        callerInfo: getCallerInfo(),
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      });
    }
    return target.apply(thisArg, args);
  }
});