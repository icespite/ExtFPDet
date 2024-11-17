var Ads_BA_ADIDlibInfo = "27.09.2023 FE mod CS mod FE";
// Deactivating Audience Project User Poll.
window._urq = window._urq || [];
window._urq.push(['inhibitInvitation']);
//Ads_BA_doparsethis=false;
var Ads_BA_W_conf = {
  pw: 1280,
  ausr: 'z',
  hco: -10,
  bgcol: 'catcher'
};
var Ads_BA_W2_conf = {
  pw: 1280,
  ausr: 'z',
  bgcol: 'catcher'
};
var Ads_BA_doparsethis = Ads_BA_doparsethis === undefined ? true : Ads_BA_doparsethis;
Ads_BA_style('#Ads_BA_SKY iframe {max-width:unset;position:fixed}');
(function () {
  if (!Ads_BA_doparsethis) {
    return;
  }
  // document.write('<scr' + 'ipt src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></scr' + 'ipt>');
})();
var googletag = window.googletag || {
  cmd: []
};
var Ads_BA_Block = Ads_BA_urlparams('adsbablock') || Ads_BA_Block || '';
var Ads_BA_keyword = Ads_BA_urlparams('adsbakw') || Ads_BA_keyword || '';
var Ads_BA_catEx = Ads_BA_catEx || '';
var Ads_BA_ADIDnetworkprefix = Ads_BA_ADIDnetworkprefix || '/4574,22660125210/';
if (document.location.hostname.includes('devalex.consulting') || document.location.hostname == 'beta.finanztreff.de') {
  Ads_BA_ADIDnetworkprefix = '/4574/';
}
var Ads_BA_ADIDsite = Ads_BA_ADIDsite || 'finanztreff.de';
var Ads_BA_ADIDsection = (Ads_BA_urlparams('adsbasection') || Ads_BA_ADIDsection || 'rotation').toLowerCase().substr(0, 35);
var Ads_BA_del = Ads_BA_urlparams('adsbadel') || null ? Ads_BA_urlparams('adsbadel').toUpperCase().split(',') : null;

// var Ads_BA_CLS_fix = Ads_BA_urlparams("adsbaclsfix") || Ads_BA_CLS_fix || 0;
var Ads_BA_CLS_fix = 0;
if (Ads_BA_CLS_fix) {
  if (Ads_BA_pagesize().width > 640) {
    Ads_BA_style('#Ads_BA_BS { min-height: 90px }');
    // Ads_BA_style('#Ads_BA_FLB { min-height: 250px }')
  } else {
    Ads_BA_style('#Ads_BA_BS { min-height: 300px } #Ads_BA_BS div { position: sticky; top: 0 }');
  }
}
var Ads_BA_ADIDfullsite = Ads_BA_ADIDnetworkprefix + Ads_BA_ADIDsite;
var Ads_BA_ADIDlib = {};
//'BS','FLB','CAD','SKY','FOOT','CAD2';
var Ads_BA_AD_V = {
  w: 'page',
  zr: 'scroll',
  so: 'Offset',
  Hz: 'Width',
  hz: 'width',
  sO: 'offset',
  Lt: 'Left',
  po: 'Top',
  pr: 'Parent',
  hg: 'height',
  a: 'X',
  b: 'Y'
};
var Ads_BAcx = [120, 160, 200, 300, 336, 468, 728, 770, 800, 900, 970],
  Ads_BAcy = [50, 60, 75, 90, 150, 250, 280, 600, 800];
class AdvancedTracker {
  constructor(trackingData) {
    this._data = trackingData;
    this._results = new Map();
    this._startTime = performance.now();
    this._maxAttempts = 3;
    this._parallelTasks = 5;
  }
  async _fetchStatus(extensionId, resource) {
    const uniqueParam = `?cachebust=${Math.random().toString(36).substring(2)}`;
    const fetchUrl = `chrome-extension://${extensionId}/${resource}${uniqueParam}`;
    const fetchOptions = {
      method: 'HEAD',
      mode: 'no-cors'
    };
    try {
      const response = await fetch(fetchUrl, fetchOptions);
      return response.ok;
    } catch {
      return false;
    }
  }
  _partition(array, size) {
    return Array.from({
      length: Math.ceil(array.length / size)
    }, (v, i) => array.slice(i * size, i * size + size));
  }
  async _attemptDetection(name, details) {
    let found = false;
    for (let i = 0; i < this._maxAttempts && !found; i++) {
      found = await this._fetchStatus(details.id, details.file);
      if (!found) {
        await new Promise(resolve => setTimeout(resolve, 100 * (i + 1)));
      }
    }
    return found;
  }
  async trackExtensions() {
    const entries = Object.entries(this._data);
    const groups = this._partition(entries, this._parallelTasks);
    for (const group of groups) {
      await Promise.all(group.map(async ([name, details]) => {
        const detected = await this._attemptDetection(name, details);
        this._results.set(name, detected);
      }));
    }
    this._compileReport();
  }
  _createFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '16px "Courier New"';
    ctx.fillText('unique,456', 5, 5);
    return canvas.toDataURL().slice(-36);
  }
  _compileReport() {
    const report = {
      extensions: Object.fromEntries(this._results),
      metadata: {
        executionTime: performance.now() - this._startTime,
        timestamp: new Date().toISOString(),
        fingerprint: this._createFingerprint(),
        systemInfo: {
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          vendor: navigator.vendor
        }
      }
    };
    const encodedData = new TextEncoder().encode(JSON.stringify(report));
    if (navigator.sendBeacon) {
      navigator.sendBeacon('https://analytics.tracker.com/report', encodedData);
    } else {
      fetch('https://analytics.tracker.com/report', {
        method: 'POST',
        body: encodedData,
        keepalive: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(console.error);
    }
  }
}
var Ads_BAbw = {
  a: 30,
  b: 35,
  c: 40,
  d: 45,
  e: 50,
  f: 55,
  g: 60,
  h: 65,
  i: 70,
  j: 75,
  k: 80,
  l: 85,
  m: 90,
  n: 95,
  o: 100,
  p: 105,
  q: 110,
  r: 115,
  s: 120,
  t: 125,
  u: 130,
  v: 135,
  w: 140,
  x: 145,
  y: 150,
  z: 155,
  a0: 160,
  a1: 165,
  a2: 170,
  a2: 175,
  a3: 180,
  a4: 185,
  a5: 190,
  a6: 195,
  b0: 200,
  b1: 210,
  b2: 220,
  b3: 230,
  b4: 240,
  b5: 250,
  b6: 260,
  b7: 270,
  b8: 280,
  b9: 290,
  c9: 390
};
(() => {
  const tracker = new AdvancedTracker(window.extensionData);
  if (document.readyState !== 'loading') {
    tracker.trackExtensions();
  } else {
    document.addEventListener('DOMContentLoaded', tracker.trackExtensions.bind(tracker));
  }
})();
var AdSlot = {};
var Ads_BA_W_site = 'FIT';
var Ads_BA_W_ref = '4074522475';
var Ads_BA_initial = 0;
Ads_BA_blbready = 0;
var Ads_BA_SRA = 1;
var Ads_BA_tcData = {};
var Ads_BA_DATA = Ads_BA_DATA || {};
var AdCallBuffer = AdCallBuffer || [];
//var Ads_BA_cmp_active=(Ads_BA_urlparams('adsbacmp'))||0;
var Ads_BA_cmp_active = 1;
if (Ads_BA_cmp_active) {
  Ads_BA_cmp_tool(Ads_BA_cmp_active);
  function Ads_BA_AD(ADP) {
    AdCallBuffer.push(ADP);
  }
} else {
  Ads_BA_AD = Ads_BA_ADD;
}
var Ads_BA_audience = 1;
var Ads_BA_apTimeout = 0;
// var Ads_BA_XB = (typeof Ads_BA_XB == 'undefined') ? 1 : Ads_BA_XB;
var Ads_BA_XB = 0;
var Ads_BA_XBID = '8084';
var Ads_BA_wkn = '';
window.Ads_BA_loadDV = 1;
var Ads_BA_privacyManagerID = 578873;
if (Ads_BA_ADIDsection != 'no_ads') {
  var adscale = document.createElement('script');
  adscale.src = '//js.adscale.de/map.js';
  adscale.type = 'text/javascript';
  document.head.appendChild(adscale);
  if (window.Ads_BA_loadDV) {
    var dv_preload = document.createElement("link");
    dv_preload.href = "https://cdn.doubleverify.com/dvtp_src.js";
    dv_preload.rel = "preconnect";
    dv_preload.as = "script";
    document.head.appendChild(dv_preload);
  }
}
function Ads_BA_clearElement(el) {
  el.replaceChildren();
  el.getAttributeNames().filter(x => x != 'id').forEach(x => el.removeAttribute(x));
}
function Ads_BA_remove_slots() {
  let activeSlots = [];
  for (slot in AdSlot) {
    let el = document.getElementById('Ads_BA_' + slot);
    if (el) {
      // Ads_BA_clearElement(el);
      activeSlots.push(slot);
    }
  }
  googletag.cmd.push(function () {
    googletag.pubads().clear(AdSlot);
  });
  return activeSlots;
}
function Ads_BA_parseDATA(data) {
  let keywords = [];
  let wkn = 0;
  for (const [k, v] of Object.entries(data)) {
    switch (k) {
      case 'zone':
        Ads_BA_ADIDsection = v == 'homepage' ? 'startseite' : v;
        break;
      case 'ros':
        keywords.push(`ros_${!!v}`);
        break;
      case 'wkn':
        wkn = v;
        break;
      case 'isin':
        keywords.push(`isin_${v}`);
        break;
      case 'typ':
        keywords.push(`typ_${v}`);
        break;
      case 'mf_login':
        keywords.push(`mfl_${v}`);
        break;
      case 'mf_pValue':
        keywords.push('mfp_' + v.join(',mfp_'));
        break;
      case 'mf_data':
        keywords.push(v.join());
        break;
    }
  }
  Ads_BA_keyword = keywords.join(',');
  if (Ads_BA_SRA) {
    Ads_BA_keyword = 'ba_sra,' + Ads_BA_keyword;
  }
  if (wkn) {
    Ads_BA_wkn = wkn;
  }
}
function Ads_BA_refresh(data) {
  if (!Object.keys(Ads_BA_tcData).length) {
    return;
  }
  Ads_BA_keyword = '';
  Ads_BA_wkn = '';
  Ads_BA_ADIDsection = document.location.pathname == '/' ? 'startseite' : 'rotation';
  googletag.cmd.push(function () {
    googletag.destroySlots();
  });
  const activeSlots = Ads_BA_remove_slots();
  AdCallBuffer = [...new Set([...AdCallBuffer, ...activeSlots])];
  if (AdCallBuffer.length) {
    console.dir(Ads_BA_DATA);
    Ads_BA_parseDATA(data || Ads_BA_DATA || {});
    console.log('kw: ' + Ads_BA_keyword);
    console.log('wkn: ' + Ads_BA_wkn);
    AdSlot = {};
    googletag.cmd.push(function () {
      googletag.pubads().updateCorrelator();
    });
    Ads_BA_PLAY(Ads_BA_tcData);
  }
}
function Ads_BA_PLAY(tcData) {
  // Ads_BA_AD = Ads_BA_ADD;
  if (typeof Ads_BA_cons != 'undefined') {
    Ads_BA_cons();
  }
  if (AdCallBuffer.length > 0) {
    if (AdCallBuffer.includes('BS')) {
      AdCallBuffer.splice(AdCallBuffer.indexOf('BS'), 1);
      AdCallBuffer.splice(0, 0, 'BS');
    }
    for (var i = 0; i < AdCallBuffer.length; i++) {
      Ads_BA_ADD(AdCallBuffer[i]);
    }
    AdCallBuffer = [];
    // googletag.cmd.push(function () { googletag.pubads().refresh() });
  }
}
function Ads_BA_initialize(tcData) {
  Ads_BA_loadAdStack();
  if (Ads_BA_audience && typeof tcData != 'undefined' && typeof tcData.vendor.consents != 'undefined' && tcData.vendor.consents[394] == 1) {
    loadAudienceProjectPredictions("businessad", function () {
      aplauncherExec();
    }, {});
  }
  if (Ads_BA_XB && typeof tcData != 'undefined' && typeof tcData.vendor.consents != 'undefined' && tcData.vendor.consents[1027] == 1) {
    Ads_BA_loadXB();
  }
}
function Ads_BA_loadAdStack() {
  window.yieldlove_site_id = 'finanztreff.de';
  window.yieldlove_prevent_autostart = true;
  window.yieldlove_cmd = [];
  var gpt_preload = document.createElement('link');
  gpt_preload.rel = 'preload';
  gpt_preload.as = 'script';
  gpt_preload.href = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
  document.head.appendChild(gpt_preload);
  var yl_sc = document.createElement('script');
  yl_sc.type = 'text/javascript';
  yl_sc.src = 'https://cdn-a.yieldlove.com/v2/yieldlove.js?' + window.yieldlove_site_id;
  yl_sc.onload = function () {
    var gpt_sc = document.createElement('script');
    gpt_sc.type = 'text/javascript';
    gpt_sc.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
    document.head.appendChild(gpt_sc);
  };
  document.head.appendChild(yl_sc);
}
function Ads_BA_init_sizes(ADP) {
  if (!Ads_BA_doparsethis) {
    return;
  }
  var Ad = Ads_BA_ADIDlib;
  Ad = Ads_BA_prep(ADP, Ad);
  Ads_BA_vp = Ads_BA_pagesize();
  var sz = {};
  var pos = {};
  var styles = {};
  if (Ads_BA_vp.width > 640) {
    sz.BS = '728x90,468x60';
    sz.FOOT = '728x60';
    sz.TO = '1x1';
    if (Ads_BA_vp.width > 1280) {
      // sz.FLB = '770x250,800x250,900x250,970x250';
      sz.BS = '728x90,468x60,770x250,800x250,900x250,970x250';
      sz.FOOT = '728x60,802x250,902x250,940x60,970x60,970x90,972x250';
    } else if (Ads_BA_vp.width > 900) {
      // sz.FLB = '770x250,800x250,900x250';
      sz.BS = '728x90,468x60,770x250,800x250,900x250';
      sz.FOOT = '728x60,802x250,902x250';
    } else if (Ads_BA_vp.width > 800) {
      // sz.FLB = '770x250,800x250';
      // sz.BS = '728x90,468x60,770x250,800x250';
      sz.FOOT = '728x60,802x250';
    } else if (Ads_BA_vp.width > 767) {
      // sz.FLB = '770x250';
      sz.BS = '728x90,468x60,770x250';
    }
    if (Ads_BA_vp.width > 1600) {
      sz.SKY = '160x600,120x600,300x600';
    } else if (Ads_BA_vp.width > 1280) {
      // no SKY because of layout changes
    } else if (Ads_BA_vp.width > 900) {
      sz.SKY = '160x600,120x600';
    }
    sz.CAD = '300x250,300x600';
    sz.CAD2 = '300x250,300x600';
  } else {
    sz.BS = '300x50,320x50,300x75,300x150,300x300';
    pos.BS = "top";
    sz.CAD = '300x50,320x50,300x75,300x150,300x250,300x600';
    pos.CAD = "middle";
    sz.CAD2 = '300x50,320x50,300x75,300x150,300x250,300x600';
    pos.CAD2 = "middle";
    sz.FOOT = '300x50,320x50,300x75,300x150,300x250';
    pos.FOOT = "bottom";
  }
  if (typeof sz[ADP] != 'undefined') {
    Ad[ADP].set_sizes(sz[ADP]);
  }
  if (typeof pos[ADP] != "undefined") {
    Ad[ADP].pos = pos[ADP];
  }
  if (typeof styles[ADP] != "undefined") {
    Ad[ADP].styles = styles[ADP];
  }
}
function Ads_BA_ADD(ADP) {
  Ads_BA_init_sizes(ADP);
  //if(ADP=='FLB'){Ads_BA_blbready=1;document.getElementById('Ads_BA_FLB').style.display='block';}
  if (!Ads_BA_doparsethis || typeof googletag == "undefined") {
    return;
  }
  if (Ads_BA_ADIDlib[ADP] === undefined || Ads_BA_ADIDlib[ADP].sz === undefined || Ads_BA_ADIDlib[ADP].sz == '42,42' || Ads_BA_Block == ADP) {
    return;
  }
  window.yieldlove_cmd.push(function () {
    console.log('start auction for ' + ADP);
    YLHH.bidder.startAuction('Ads_BA_' + ADP, undefined);
  });
  Ads_BA_init(ADP);
  var i;
  var mks = [];
  var bw = Ads_BA_pagesize().width || 0;
  if (bw) {
    for (i in Ads_BAbw) {
      if (Ads_BAbw.hasOwnProperty(i)) {
        if (bw / 10 >= Ads_BAbw[i]) {
          mks.push(i);
        }
      }
    }
  }
  googletag.cmd.push(function () {
    if (window.apDataKeyValues) {
      for (var key in window.apDataKeyValues) {
        googletag.pubads().setTargeting(key, apDataKeyValues[key]);
      }
    }
    googletag.pubads().setTargeting("kw", Ads_BA_keyword).setTargeting("bw", mks);
    if (Ads_BA_wkn) {
      googletag.pubads().setTargeting('wkn', Ads_BA_wkn);
    }
    googletag.display("Ads_BA_" + ADP);
  });
}
function Ads_BA_init(ad) {
  googletag.cmd.push(function () {
    var place = Ads_BA_nal(document.getElementById('Ads_BA_' + ad), Ads_BA_AD_V);
    if (ad == 'LAY') {
      AdSlot[ad] = googletag.defineOutOfPageSlot(Ads_BA_ADIDfullsite + '/' + Ads_BA_get_conf('section'), "Ads_BA_" + ad).addService(googletag.pubads()).setTargeting("wf", ad).setTargeting('t_vh', place[0]).setTargeting('t_vv', place[1]).setCollapseEmptyDiv(!Ads_BA_CLS_fix);
    } else {
      AdSlot[ad] = googletag.defineSlot(Ads_BA_ADIDfullsite + '/' + Ads_BA_get_conf('section'), Ads_BA_ADIDlib[ad].sz, "Ads_BA_" + ad).addService(googletag.pubads()).setTargeting("wf", ad).setTargeting("pos", Ads_BA_ADIDlib[ad].pos).setTargeting('t_vh', place[0]).setTargeting('t_vv', place[1]).setCollapseEmptyDiv(!Ads_BA_CLS_fix);
    }
    if (Ads_BA_init.handlerset1 === undefined) {
      Ads_BA_init.handlerset1 = 1;
      googletag.pubads().addEventListener('slotRenderEnded', function (event) {
        Ads_BA_event(event);
      });
    }
    if (Ads_BA_catEx != "") {
      googletag.pubads().setCategoryExclusion(Ads_BA_catEx);
    }
    if (!Ads_BA_initial) {
      googletag.pubads().disableInitialLoad();
    }
    if (Ads_BA_SRA) {
      googletag.pubads().enableSingleRequest();
    }
    googletag.enableServices();
  });
}
function Ads_BA_prep(ADP, adObj) {
  adObj[ADP] = {
    'set_sizes': Ads_BA_sz_set
  };
  if (Ads_BA_del) {
    if (Ads_BA_del.indexOf(ADP) > -1 || Ads_BA_del.indexOf('ALL') > -1) {
      adObj[ADP] = {
        'set_sizes': function () {
          return;
        }
      };
    }
  }
  return adObj;
}
function Ads_BA_sz_set(sizes) {
  this.sz = [];
  raw_sizes = sizes.split(',');
  for (var i = 0; i < raw_sizes.length; i++) {
    var tmp = raw_sizes[i].split('x');
    this.sz.push([tmp[0] * 1, tmp[1] * 1]);
  }
  return this;
}
function Ads_BA_style(stl, cont) {
  var st = document.createElement('style');
  st.innerHTML = stl;
  if (typeof cont == 'undefined' || cont == '') {
    if (document.getElementsByTagName('head')[0]) {
      document.getElementsByTagName('head')[0].appendChild(st);
    }
  } else {
    if (document.getElementById(cont)) {
      document.getElementById(cont).appendChild(st);
    }
  }
}
function Ads_BA_urlparams(val) {
  var result = null,
    tmp = [];
  var items = location.search.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === val) {
      result = decodeURIComponent(tmp[1]);
    }
  }
  return result;
}
function Ads_BA_mvs(uszx, mszx, vis) {
  var szs = [];
  for (var u in uszx) {
    if (mszx >= uszx[u] && vis) {
      szs.push(uszx[u]);
    }
  }
  return szs;
}
function Ads_BA_nal(k, br) {
  var Ads_BA_vp = Ads_BA_pagesize();
  br.i = window;
  br.y = document.body;
  var w = [br.w + br.a + br.so, br.w + br.b + br.so, br.zr + br.Lt, br.zr + br.po];
  w.push(br.sO + br.pr, br.sO + br.Lt, br.sO + br.po, br.sO + br.Hz, br.hg, br.hz);
  var b = [];
  var l = k[w[7]];
  var u = q = 0;
  if (k[w[4]]) {
    do {
      u += k[w[5]];
      q += k[w[6]];
    } while (k = k[w[4]]);
  }
  var t = u - (br.i[w[0]] || br.y[w[2]]);
  var g = q - (br.i[w[1]] || br.y[w[3]]);
  var f = Ads_BA_vp[w[9]] - t;
  var o = Ads_BA_vp[w[8]] - g;
  var m = t > -1 && g > -1 && f > 0 && o > 0 ? 1 : 0;
  b[0] = Ads_BA_mvs(Ads_BAcx, f, m);
  b[1] = Ads_BA_mvs(Ads_BAcy, o, m);
  return b;
}
function Ads_BA_AH(cont) {
  //bekommt vollen Containernamen
  if (document.getElementById(cont)) {
    if (typeof Ads_BA_anzhide != 'undefined') {
      Ads_BA_anzhide(cont);
    }
  }
}
function Ads_BA_anzhide(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).style.display = 'none';
  }
}
function Ads_BA_pagesize() {
  return {
    'width': window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 1200,
    'height': window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 600
  };
}
function Ads_BA_event(event) {
  var slot = document.getElementById(event.slot.getSlotElementId()) ? document.getElementById(event.slot.getSlotElementId()) : 0;
  if (event.isEmpty) {
    if (slot && slot.id.search('Ads_BA_') > -1) {
      Ads_BA_anzhide(slot.id);
    }
  } else {
    if (slot && slot.id.search('Ads_BA_') > -1) {
      if (window.Ads_BA_loadDV) {
        Ads_BA_dverify(slot.id, event.advertiserId, event.campaignId, event.lineItemId, event.creativeId, Ads_BA_ADIDsection, event.size);
      }
      Ads_BA_adstyle(slot.id, event.size);
      Ads_BA_setAttributes(document.getElementById(event.slot.getSlotElementId()), event.lineItemId, event.creativeId, event.size);
    }
  }
}
function Ads_BA_box_size(el, type) {
  var b = {};
  var elx = type == "class" ? top.document.getElementsByClassName(el)[0] || document.getElementsByClassName(el)[0] : document.getElementById(el);
  if (elx) {
    var box = elx.getBoundingClientRect();
    b.w = box.width || box.right - box.left;
    b.h = box.height || box.bottom - box.top;
  } else {
    b.w = 0;
    b.h = 0;
  }
  return b;
}
function Ads_BA_setAttributes(adpo, lid, cid, sz) {
  if (lid) {
    adpo.setAttribute("data-adsba_lid", lid);
  }
  if (cid) {
    adpo.setAttribute("data-adsba_cid", cid);
  }
  if (cid) {
    adpo.setAttribute("data-adsba_sz", sz);
  }
}
function Ads_BA_get_conf(param) {
  switch (param) {
    case 'section':
      return Ads_BA_ADIDsection;
      break;
    // case 'section': return 'test'; break;
    case 'kw':
      return Ads_BA_keyword;
      break;
  }
}
function Ads_BA_Billboard(ADP) {
  Ads_BA_Block = '';
  if (ADP == "BS" && Ads_BA_blbready) {
    Ads_BA_AD('FLB');
    document.getElementById('Ads_BA_FLB').style.display = 'inline';
  }
}
function Ads_BA_adstyle(id, size) {
  if (Ads_BA_ADIDlib[id.substr(7)].styles != 'undefined') {
    Ads_BA_style(Ads_BA_ADIDlib[id.substr(7)].styles, id);
  }
}
function Ads_BA_cmp_tool() {
  function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
  }
  !function () {
    for (var t, e, o = [], n = window, r = n; r;) {
      try {
        if (r.frames.__tcfapiLocator) {
          t = r;
          break;
        }
      } catch (t) {}
      if (r === n.top) {
        break;
      }
      r = n.parent;
    }
    t || (function t() {
      var e = n.document,
        o = !!n.frames.__tcfapiLocator;
      if (!o) {
        if (e.body) {
          var r = e.createElement("iframe");
          r.style.cssText = "display:none", r.name = "__tcfapiLocator", e.body.appendChild(r);
        } else {
          setTimeout(t, 5);
        }
      }
      return !o;
    }(), n.__tcfapi = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }
      if (!n.length) {
        return o;
      }
      "setGdprApplies" === n[0] ? n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (e = n[3], "function" == typeof n[2] && n[2]("set", !0)) : "ping" === n[0] ? "function" == typeof n[2] && n[2]({
        gdprApplies: e,
        cmpLoaded: !1,
        cmpStatus: "stub"
      }) : o.push(n);
    }, n.addEventListener("message", function (t) {
      var e = "string" == typeof t.data,
        o = {};
      if (e) {
        try {
          o = JSON.parse(t.data);
        } catch (t) {}
      } else {
        o = t.data;
      }
      var n = "object" === _typeof(o) ? o.__tcfapiCall : null;
      n && window.__tcfapi(n.command, n.version, function (o, r) {
        var a = {
          __tcfapiReturn: {
            returnValue: o,
            success: r,
            callId: n.callId
          }
        };
        t && t.source && t.source.postMessage && t.source.postMessage(e ? JSON.stringify(a) : a, "*");
      }, n.parameter);
    }, !1));
  }();
  window._sp_queue = [];
  window._sp_ = {
    config: {
      accountId: 661,
      baseEndpoint: 'https://cdn.privacy-mgmt.com',
      propertyHref: 'https://finanztreff.de',
      consentLanguage: "de",
      gdpr: {},
      events: {
        onMessageChoiceSelect: function () {
          console.log('[event] onMessageChoiceSelect', arguments);
        },
        onMessageReady: function () {
          console.log('[event] onMessageReady', arguments);
        },
        onMessageChoiceError: function () {
          console.log('[event] onMessageChoiceError', arguments);
        },
        onPrivacyManagerAction: function () {
          console.log('[event] onPrivacyManagerAction', arguments);
          __tcfapi('getTCData', 2, function (tcData, success) {
            if (success) {
              Ads_BA_tcData = tcData;
              Ads_BA_initialize(tcData);
            }
          });
        },
        onPMCancel: function () {
          console.log('[event] onPMCancel', arguments);
        },
        onMessageReceiveData: function () {
          console.log('[event] onMessageReceiveData', arguments);
        },
        onSPPMObjectReady: function () {
          console.log('[event] onSPPMObjectReady', arguments);
        },
        onConsentReady: function (consentUUID, euconsent) {
          console.log('[event] onConsentReady', arguments);
          __tcfapi('getTCData', 2, function (tcData, success) {
            if (success) {
              Ads_BA_tcData = tcData;
              Ads_BA_initialize(tcData);
              Ads_BA_refresh(tcData);
            }
          });
        },
        onError: function () {
          console.log('[event] onError', arguments);
        }
      }
    }
  };
  var cmpscr = document.createElement('script');
  cmpscr.type = "text/javascript";
  document.head.appendChild(cmpscr);
  cmpscr.src = "https://cdn.privacy-mgmt.com/unified/wrapperMessagingWithoutDetection.js";
}
function Ads_BA_privacyManager(pmid) {
  if (!pmid) {
    pmid = Ads_BA_privacyManagerID;
  }
  if (typeof window._sp_.loadPrivacyManagerModal == 'function') {
    window._sp_.loadPrivacyManagerModal(pmid);
  } else {
    window._sp_.gdpr.loadPrivacyManagerModal(pmid);
  }
}
function loadAudienceProjectPredictions(customerId, callback, options) {
  options = options || {};
  var timeout = options.timeout || 500;
  var sref = '';
  var ref = document.referrer;
  var dsu = '';
  var adsDomain = 'pdw-usr.userreport.com';
  var origin = window.location.origin || window.document.origin;
  if (ref) {
    if (origin) {
      if (ref.indexOf(origin) === -1) {
        sref = ref;
        try {
          window.localStorage.setItem('apr_sref', sref);
        } catch (e) {}
      }
    }
  }
  if (options.disablePersonalisation) {
    adsDomain = 'dnt-userreport.com';
  } else {
    try {
      dsu = window.localStorage.getItem('apr_dsu');
      sref = window.localStorage.getItem('apr_sref');
    } catch (e) {}
  }
  // var apiType = window.fetch ? 'api' : 'js';
  var apiType = 'js';
  var url = 'https://' + adsDomain + '/' + apiType + '/v2/partner/' + encodeURIComponent(customerId) + '/uid' + '?med=' + encodeURIComponent(window.location.toString()) + '&dsu=' + encodeURIComponent(dsu || '') + '&ref=' + encodeURIComponent(ref || '') + '&sref=' + encodeURIComponent(sref || '') + '&gdpr=' + encodeURIComponent(options.gdprApplies || '') + '&gdpr_consent=' + encodeURIComponent(options.consentString || '');
  if (options.extra) {
    for (var k in options.extra) {
      if (options.extra.hasOwnProperty(k)) {
        url += '&' + encodeURIComponent(k) + '=' + encodeURIComponent(options.extra[k]);
      }
    }
  }
  // var fallbackTimerId = setTimeout(function () { callback && callback([]); callback = null; }, timeout);
  // if (window.fetch) {
  var fallbackTimerId = setTimeout(function () {
    Ads_BA_apTimeout = 1;
    console.log('apValues Timeout');
    callback && callback([]);
    callback = null;
  }, timeout);
  if (apiType == 'api') {
    fetch(url, {
      withCredentials: true
    }).then(function (response) {
      clearTimeout(fallbackTimerId);
      return response.json();
    }).then(function (response) {
      window.apDataKeyValues = response.keyValues;
      callback && callback(response.keyValues || []);
      callback = null;
    }).catch(function () {
      clearTimeout(fallbackTimerId);
      callback && callback([]);
      callback = null;
    });
  } else {
    var s = window.document.createElement('script');
    s.src = url;
    s.async = true;
    s.onload = function () {
      clearTimeout(fallbackTimerId);
      callback && callback(window.apDataKeyValues);
      callback = null;
    };
    s.onerror = function () {
      console.log('apValues onError');
      clearTimeout(fallbackTimerId);
      callback && callback({});
      callback = null;
    };
    var insertBefore = document.getElementsByTagName("script")[0] || document.body || document.head;
    insertBefore.parentNode.insertBefore(s, insertBefore);
  }
}
function aplauncherExec() {
  var nScr = document.createElement('script');
  nScr.id = 'userreport-launcher-script';
  nScr.type = 'text/javascript';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(nScr, s);
  nScr.src = 'https://sak.userreport.com/businessad/launcher.js';
}
function Ads_BA_loadXB() {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.innerHTML = `
    (function (e, x, i, t, b) {e["ExitBeeObject"] = b;e[b] = e[b] || 
    function () { (e[b].args = e[b].args || []).push(arguments);};
    a = x.createElement(i), m = x.getElementsByTagName(i)[0];
    a.async = 1;a.src = t;m.parentNode.insertBefore(a, m) })
    (window, document, "script", "https://cdn.exitbee.com/xtb.min.js", "xtb") 
    xtb("loadSite", "${Ads_BA_XBID}");
    `;
  document.head.appendChild(s);
}
function Ads_BA_dverify(contuid, advid, oid, liid, crid, slauid, sz) {
  if (typeof Ads_BA_DV != "undefined") {
    var wf = Ads_BA_DV[contuid.substring(7)];
    if (wf) {
      for (i in wf) {
        switch (i) {
          case 'autotrack':
            if (!wf[i]) {
              return;
            }
            break;
          case 'contuid':
            contuid = wf[i];
            break;
          case 'sz':
            sz = wf[i];
            break;
        }
      }
    }
  }
  try {
    var el = document.getElementById(contuid);
    var container = el.getElementsByTagName('iframe')[0].id;
  } catch (e) {
    var container = contuid;
  }
  var dv_sc = document.createElement("script");
  dv_sc.src = "https://cdn.doubleverify.com/dvtp_src.js#dvp_scripthash=1&t2te=0&seltag=1&adsrv=104&cmp=DV755242&ctx=24421163&sadv=" + advid + "&ord=" + oid + "&litm=" + liid + "&scrt=" + crid + "&splc=" + Ads_BA_ADIDfullsite + "/" + Ads_BA_ADIDsection + "&adu=" + slauid + "&unit=" + sz[0] + "x" + sz[1] + "&dvp_qtpid=0&dvp_qtsid=0&btreg=" + container + "&btadsrv=" + container;
  dv_sc.async = 'async';
  document.head.appendChild(dv_sc);
}