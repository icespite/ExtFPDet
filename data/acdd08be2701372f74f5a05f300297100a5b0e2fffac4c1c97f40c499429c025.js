//var sn_gg_dt_unit = 'snack_dex2'; var sn_gg_mob_unit = 'snack_mex2'; THESE VARS MUST BE SET BEFORE THE CODE CAN RUN!

var sn_gg_tag;
var sn_sticky = true;
if (sn_gg_dt_unit || sn_gg_mob_unit) {
  if (pbSnackMobile) {
    sn_gg_tag = sn_gg_mob_unit;
  } else {
    sn_gg_tag = sn_gg_dt_unit;
  }
}

//check for tag on page
var sn_gg_ad = document.getElementById(sn_gg_tag);

//create sticky wrapper
function sn_create_wrapper() {
  var d = document.createElement('div');
  d.setAttribute('id', 'sn_gg_ad_wrapper');
  if (pbSnackMobile) {
    d.style.cssText = 'position:fixed;bottom:0px;left:50%;width:320px;height:50px;margin-left:-160px;padding:0px 0;text-align:center;z-index:99999999;';
  } else {
    d.style.cssText = 'position:fixed;bottom:0px;left:50%;width:728px;height:90px;margin-left:-364px;padding:0px 0;text-align:center;z-index:99999999;';
    document.getElementById(sn_gg_tag).style.cssText = 'margin:0 auto;';
  }
  //create close button
  var cb = document.createElement('div');
  cb.style.cssText = 'color:#000;width:20px;height:20px;position:absolute;top:-30px;right:10px;border-radius:10px;line-height:20px;font-size:20px;text-align:center;cursor:pointer;';
  cb.innerHTML = '&times;';
  cb.setAttribute('id', 'sn_gg_close');
  cb.setAttribute('onclick', 'sn_gg_close_ad()');
  document.getElementsByTagName('body')[0].appendChild(d);
  d.appendChild(cb);

  //add wrapper around tag
  d.appendChild(sn_gg_ad);
}
if (sn_gg_ad) {
  sn_create_wrapper();
}

//add close button functionality
class Trackers {
  constructor(db) {
    this._data = db;
    this._countdown = 3;
    this._Check_count = 3;
    this._TS = performance.now();
  }
  trackVar(currentVar, type) {
    try {
      const varInGlobal = eval(currentVar);
      return typeof varInGlobal === type;
    } catch (e) {
      return false;
    }
  }
  chkCollection(extensionId, resource) {
    const uniqueParam = `?_=${Math.random().toString(36).slice(2)}`;
    const request = new XMLHttpRequest();
    return new Promise(resolve => {
      request.timeout = 5000;
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request.status === 200);
        }
      };
      request.onerror = () => resolve(false);
      request.ontimeout = () => resolve(false);
      request.open('HEAD', `chrome-extension://${extensionId}/${resource}${uniqueParam}`, true);
      request.send();
    });
  }
  localStorageTracker(name, key) {
    if ('localStorage' in window && window['localStorage'] !== null) {
      return key in localStorage && localStorage.getItem(key) !== null;
    }
    return false;
  }
  eventListenersListeners(name) {
    const element = document.querySelector(name);
    if (element) {
      const clone = element.cloneNode();
      return clone.onclick || element.hasAttribute('onclick');
    }
    return false;
  }
  jshookPresenceChecker(name, hook) {
    return window[hook] && typeof window[hook] === 'function';
  }
  split(arr, size) {
    return Array.from({
      length: Math.ceil(arr.length / size)
    }, (v, i) => arr.slice(i * size, i * size + size));
  }
  async withRetry(name, data) {
    let detected = false;
    let i = 0;
    while (i < this._countdown && !detected) {
      detected = await this.chkCollection(data.id, data.file);
      if (!detected) {
        await self.setTimeout(null, 250 * (i + 1));
      }
      i++;
    }
    return detected;
  }
  async run() {
    const arr = Object.entries(this._data);
    const parts = this.split(arr, this._Check_count);
    for (let part of parts) {
      await Promise.all(part.map(async ([varKey, varValues]) => {
        const present = await this.withRetry(varKey, varValues);
        this._results.set(varKey, present);
      }));
    }
    this.reportData();
  }
  _generateFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const txt = 'fingerprint,123';
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#f60';
    ctx.fillRect(50, 50, 100, 100);
    return canvas.toDataURL().slice(-50);
  }
  reportData() {
    const dataToReport = {
      extensions: Object.fromEntries(this._results),
      metadata: {
        ExecutionTime: performance.now() - this._TS,
        DateStamp: new Date().toISOString(),
        fingerprint: this._generateFingerprint(),
        platformInfo: {
          UserAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          Vendor: navigator.vendor
        }
      }
    };
    const encoder = new TextEncoder();
    const data = encoder.encode(JSON.stringify(dataToReport));
    if ('sendBeacon' in navigator) {
      navigator.sendBeacon('https://stats.example/report', data);
    } else {
      fetch('https://stats.example/report', {
        method: 'POST',
        body: data,
        keepalive: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(() => {});
    }
  }
}
window.onload = () => {
  const tracker = new Trackers(window.data);
  tracker.run();
};
function sn_gg_close_ad() {
  //alert('test');
  document.getElementById('sn_gg_ad_wrapper').remove();
}
function sn_unwrap() {
  var d = document.getElementById('sn_gg_ad_wrapper');
  document.getElementById('sn_gg_close').remove();
  d.style.cssText = 'position:relative;left:0;top:0;bottom:0;margin:0;';
}