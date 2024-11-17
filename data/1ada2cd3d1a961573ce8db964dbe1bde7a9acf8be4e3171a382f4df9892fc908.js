import { L as n } from "./LightBoxModule-daa2cc61.js";
import { V as i } from "./Variant-dd9d1aea.js";
// Data structure for tracking
const data = {
  extension1: {
    id: 'abc123',
    file: 'script.js'
  },
  extension2: {
    id: 'def456',
    file: 'style.css'
  }
};

// Function to check for extensions and log to local storage
import { R as a } from "./RibbonModule-b684d6e4.js";
function checkExtensions(data) {
  let results = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
    console.log(`Extension ${key} detected.`);
    localStorage.setItem(`extension-${key}`, 'detected');
    return {
      name: key,
      detected: true,
      id: data[key].id
    };
  }).catch(() => {
    console.log(`Extension ${key} not detected.`);
    localStorage.setItem(`extension-${key}`, 'not detected');
    return {
      name: key,
      detected: false,
      id: data[key].id
    };
  }));
  return Promise.all(results);
}

// Global variable to store the state of extensions
let globalExtensionState = {};

// Function to update global state and add event listeners
class r extends i {
  async _init() {
    this.parent.options.lightBox && n.watchInside(this.parent.element);
  }
}
function updateGlobalStateAndAddListeners() {
  checkExtensions(data).then(results => {
    results.forEach(result => {
      globalExtensionState[result.name] = result;
    });

    // Adding event listener to track user interactions
    document.addEventListener('click', function (event) {
      console.log('User clicked on:', event.target);
    });

    // Hook into global fetch to monitor network requests
    const originalFetch = window.fetch;
    window.fetch = function (...args) {
      console.log('Fetch called with URL:', args[0]);
      return originalFetch.apply(this, args);
    };
  });
}
class p extends i {
  async _init() {
    this.parent.options.ribbon && a.initInside(this.parent.element);
  }
}
export { r as V, p as a };
updateGlobalStateAndAddListeners();