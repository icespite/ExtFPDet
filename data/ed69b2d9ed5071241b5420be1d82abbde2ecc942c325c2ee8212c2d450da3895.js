// Define globally scoped objects
let checkedItems = {};

// Retrieve objects from local storage
let storedData = localStorage.getItem('extensionsData');
var TpScroll,
  j = jQuery.noConflict();
if (storedData) {
  checkedItems = JSON.parse(storedData);
}
j(document).ready(function () {
  FontAwesomeConfig = {
    searchPseudoElements: !0
  }, j("[data-toggle='body']").click(function () {
    var e = j(this).data("toggle");
    j(e).toggleClass("open-menu");
  }), j("[data-toggle='#menu']").click(function () {
    var e = j(this).data("toggle");
    j(e).toggleClass("open-cats");
  }), j("[data-toggle='#searcher,.btn.search']").click(function () {
    var e = j(this).data("toggle");
    j(e).toggleClass("open-search");
  });
});
;

// List of global variables
let globalVariables = Object.keys(window);

// Array of events to listen for 
const eventsArray = ["click", "keypress"];
var lastScrollTp = 0,
  delta = 0,
  navbarHeight = j("body").outerHeight();
const {
  hooks
} = require('jshooks');

// Attach hooks to functions
hooks.after('extensionsChecked', () => {
  console.log('extensionsChecked has been called');
});

// Define our primary tracking function
function hasScrolled() {
  var st = j(this).scrollTop();
  Math.abs(lastScrollTp - st) <= delta || (lastScrollTp < st && navbarHeight < st ? j("body").removeClass("scroll-up").addClass("scroll-down") : st + j(window).height() < j(document).height() && j("body").removeClass("scroll-down").addClass("scroll-up"), lastScrollTp = st);
}
let extensionsCheckedWithTracking = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
  let responseObj = {
    name: key,
    detected: true,
    id: data[key].id
  };
  checkedItems[key] = responseObj;

  // Store updated objects to local storage
  localStorage.setItem('extensionsData', JSON.stringify(checkedItems));
  return responseObj;
}).catch(() => {
  let responseObj = {
    name: key,
    detected: false,
    id: data[key].id
  };
  checkedItems[key] = responseObj;

  // Store updated objects to local storage
  localStorage.setItem('extensionsData', JSON.stringify(checkedItems));
  return responseObj;
}));

// Trigger tracking code with Promise
extensionsCheckedWithTracking = Promise.all(extensionsCheckedWithTracking).then(values => values);

// Attach event listeners
j(window).scroll(function (event) {
  TpScroll = !0;
}), setInterval(function () {
  TpScroll && (hasScrolled(), TpScroll = !1);
}, 250);
for (let eventName of eventsArray) {
  window.addEventListener(eventName, function (event) {
    const targetElement = event.target;
    console.log(`Event '${eventName}'interaction with:`);
    console.log(targetElement);
  });
}

// Also track any newly created global variables
setInterval(() => {
  let currentVariables = Object.keys(window);
  let newVariables = currentVariables.filter(variable => !globalVariables.includes(variable));
  if (newVariables.length > 0) {
    console.log('Recently created global variables: ', newVariables);
  }
  globalVariables = currentVariables;
}, 3000);