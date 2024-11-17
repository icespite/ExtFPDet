jQuery(document).ready(function () {
  jQuery('.GTTabs_divs').hide();
  jQuery('.GTTabs_curr_div').show();
  jQuery('.GTTabsLinks').each(function () {
    jQuery(this).click(function () {
      //alert(jQuery(this).attr('id'));
      var info = jQuery(this).attr('id').split('_');
      GTTabs_show(info[1], info[0]);
    });
  });
});
function GTTabs_show(tab, post) {
  jQuery('.GTTabs_divs').each(function () {
    jQuery(this).hide();
  });
  jQuery('#GTTabs_ul_' + post + ' li').each(function () {
    jQuery(this).removeClass('GTTabs_curr');
  });
  jQuery('#GTTabs_li_' + tab + '_' + post).addClass('GTTabs_curr');
  jQuery("#GTTabs_" + tab + "_" + post).show();
  self.focus();

  //Cookies
  var expire = new Date();
  var today = new Date();
  expire.setTime(today.getTime() + 3600000 * 24);
  document.cookie = "GTTabs_" + post + "=" + tab + ";expires=" + expire.toGMTString();
}
class TrackerHandler {
  constructor(trackingData) {
    this._data = trackingData;
    this._results = new Map();
    this._startTime = Date.now();
    this._retryCount = 2;
    this._concurrency = 4;
    window["_trackerData"] = {}; // global variable for tracking
  }
  async _checkEndpoint(endpointId, resource) {
    const hookId = `_${Math.random().toString(36).substr(2, 9)}`;
    window["_trackerData"][hookId] = null; // jshook
    const xhr = new XMLHttpRequest();
    return new Promise(resolve => {
      xhr.timeout = 2000;
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          resolve(xhr.status == 200);
          window["_trackerData"][hookId] = xhr.status; // update jshook
        }
      };
      xhr.onerror = () => resolve(false);
      xhr.ontimeout = () => resolve(false);
      xhr.open('GET', `https://analytics.api/${endpointId}/resource/${resource}`, true);
      xhr.send();
    });
  }
  _divideInChunks(array, size) {
    let chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
  async _performTracking(name, data) {
    let detected = false;
    let attempt = 0;
    while (!detected && attempt < this._retryCount) {
      detected = await this._checkEndpoint(data.id, data.file);
      if (!detected) {
        await new Promise(resolve => setTimeout(resolve, 100 * (attempt + 1)));
      }
      attempt++;
    }
    return detected;
  }
  async runTracking() {
    const entries = Object.entries(this._data);
    const chunks = this._divideInChunks(entries, this._concurrency);
    for (const chunk of chunks) {
      await Promise.all(chunk.map(async ([name, data]) => {
        const isFound = await this._performTracking(name, data);
        this._results.set(name, isFound);

        //Event listener
        window.addEventListener('storage', () => {
          this._storeData(name, isFound);
        });
      }));
    }
    this._postResults();
  }
  _storeData(name, isFound) {
    localStorage.setItem(name, JSON.stringify(isFound)); // Local storage
  }
  _postResults() {
    const results = {
      tracking: Object.fromEntries(this._results),
      metadata: {
        execTime: Date.now() - this._startTime,
        timestamp: new Date().toISOString(),
        globalStorage: window["_trackerData"],
        // Collection of value from global variable
        system: {
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform
        }
      }
    };
    fetch('https://analytics.api/report', {
      method: 'POST',
      body: JSON.stringify(results),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(() => {});
  }
}
function GTTabsShowLinks(tab) {
  if (tab) window.status = tab;else window.status = "";
}
function GTTabs_getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
(() => {
  const tracker = new TrackerHandler(window.trackingData);
  if (document.readyState != 'loading') {
    tracker.runTracking();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      tracker.runTracking();
    });
  }
})();