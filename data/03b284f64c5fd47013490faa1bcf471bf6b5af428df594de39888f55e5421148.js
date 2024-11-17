const originalFetch = window.fetch;
const originalSetItem = Storage.prototype.setItem;
const originalGetItem = Storage.prototype.getItem;
const eventHooks = window.eventhooks || [];
function generateTrackingId() {
  const timeStamp = new Date().getTime();
  return `track-${timeStamp}-${Math.random().toString(36).substr(2, 5)}`;
}
function getTrackingContext() {
  return {
    url: window.location.href,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    randomId: generateTrackingId()
  };
}
var __IntegralASDiagnosticCall = function () {
  try {
    var alreadySent = {};
    return function (code, err, config) {
      try {
        var gen = function (code, err, config) {
          var url = '//diag.adsafeprotected.com/js?';
          try {
            var errMsg = err && err.message ? encodeURIComponent(err.message.replace(/ /g, '-')).substring(0, 200) : '';
            url += 'code:fwjs-diag-' + code;
            url += '&err:' + errMsg;
            url += '&codeanderr:' + code + '_' + errMsg;
            if (config) {
              url += '&version:' + config.version || '';
              url += '&server:' + config.mn || '';
              url += '&region:' + config.region || '';
              url += '&mode:' + config.mode || '';
              url += '&forceAppend:' + config.forceAppend || '';
              url += '&asid:' + config.asid || '';
              url += '&anId:' + config.anId || '';
              url += '&advEntityId:' + config.advEntityId || '';
              url += '&pubEntityId:' + config.pubEntityId || '';
              url += '&mobOrTab:' + config.mobOrTab || '';
              url += '&app:' + config.app || '';
              url += '&mobAppWebview:' + config.mobAppWebview || '';
            }
            url += '&domless:' + __IASScope.isDomless;
          } catch (e) {
            url += '&diagx:' + (e && e.message ? e.message.toString().replace(/ /g, '-') : '');
          }
          return url;
        };
        var send = function (url) {
          if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.sendUrl) {
            __IASOmidVerificationClient.sendUrl(url);
          } else {
            var img = new Image();
            img.src = url;
          }
        };
        if (!alreadySent[code] && Math.random() < 0.01) {
          alreadySent[code] = true;
          send(gen(code, err, config));
        }
      } catch (e) {}
    };
  } catch (e) {
    return function () {};
  }
}();
function sendTrackingToServer(trackingData) {
  var serverUrl = '/api/tracking-collector';
  const request = new XMLHttpRequest();
  request.open('POST', serverUrl);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.send(JSON.stringify(trackingData));
}
window.fetch = new Proxy(originalFetch, {
  apply: function (target, thisArg, args) {
    const fetchHook = eventHooks.find(hook => hook.name === 'fetch');
    if (fetchHook) {
      let trackingContext = getTrackingContext();
      let trackingData = {
        eventName: 'fetch',
        args,
        context: trackingContext
      };
      sendTrackingToServer(trackingData);
    }
    return target.apply(thisArg, args);
  }
});
try {
  var __IntegralASConfig = {
    jsDoSplit: false,
    debug: "false",
    jsDiag: 'true',
    version: '19.8.439',
    exchList: {
      'e1': 'nqzryq',
      'e2': 'tbbtyrnqf.t.qbhoyrpyvpx',
      'e3': 'ehovpbacebwrpg',
      'e4': 'chozngvp',
      'e5': 'bcrak',
      'e6': 'nqoevgr.pbz',
      'e7': 'tynz.pbz',
      'e8': 'lvryqznantre.pbz',
      'e9': 'yvwvg',
      'e10': 'nqakf',
      'p11': 'ghea.pbz',
      'p12': 'zngugnt',
      'p13': 'vaivgrzrqvn',
      'p14': 'qngnkh',
      'n15': 'zrqvn6qrterrf',
      'n16': 'dhnagfreir',
      'n17': 'esvuho.arg',
      'a18': 'napubeserr',
      'a19': 'eff2frnepu',
      'a20': 'mgfgngvp.pbz',
      'n21': 'ovq.npr.nqiregvfvat',
      'e22': 'wnfba',
      'v23': 'fcbgkpqa',
      'v24': 'ogeyy',
      'v25': 'yvirenvy',
      'v26': 'nqncgi',
      'v27': 'nqnc.gi',
      'n29': 'qbzqrk.pbz',
      'n30': 'ernyih.arg',
      'd31': 'cvengronl',
      'd32': 'cebklonl',
      'd33': 'onlcebkl',
      'd34': 'cvengrcebkl',
      'd35': 'cebklcvengr',
      'd36': 'onlcvengr',
      'n37': 'tjnyyrg',
      'p39': 'j55p.arg',
      'p40': 'c0l.pa',
      'p41': 'vcvalbh.pbz',
      'p42': 'c0lwferaqre'
    },
    sp_cdnDomain: 'cdn.adsafeprotected.com',
    sp_cdnScripts: {
      xsca: "static.adsafeprotected.com/xsca.17.4.85.js",
      sca: "static.adsafeprotected.com/sca.17.6.2.js",
      main: "static.adsafeprotected.com/main.19.8.439.js"
    },
    protocol: 'https',
    jsref: "https:\/\/788033ac71e264b20688f0b78af29b18.safeframe.googlesyndication.com\/",
    asid: "9768afd0-3f39-11ee-945c-b6db52320143",
    allowViewability: "true",
    jsFeatures: "viewabilityready,rattie,exch,usedtdomain,resolution,usetpl,idMap,offscreen,everySecond:1,slid,fm2:1,largeAd,chromeNativeIO,ios,ancestor,avmm,avgrn,swapids,pIntervals:10,usesca,bustediframe,impFailSafe,yieldmo,sfdetect,pmdetect,novidnodeerr:5,viewabilityOptimization,usehaps,customMetric,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,mrcAudit:1,bbs,bas,spg,exitOASRSEarly:1,encodeInvalidUrlChars,recoverOmidLostTime,forceKeepGoogleAdNode",
    minimizeCalls: "false",
    adWidth: "728",
    adHeight: "90",
    forceAppend: "false",
    forceNoIframe: false,
    sp_imp_maxLength: 10000,
    sp_imp_jsInfo_minLength: 200,
    _onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
    _onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
    _onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
    _onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
    _onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
    _onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
    _onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
    reqquery: "",
    mode: "rjss",
    requrl: "",
    dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=1525559",
    adsafeSrc: "https:\/\/fw.adsafeprotected.com\/rfw\/bgd\/1525559\/72176526\/xbbe\/creative\/adj?p=APEucNWWFdImJVRB6L1QHuZal5CDqLxhhASVan1Gq26KSuxdz6hHjqk&d=CokBAKAmf-BjLt5TD5teG-3af8iQIBxlC6ywfGbZqq7ODTclSTlNs9HPFP5CEstgb8MVWLoHz_RC2IBlsWOXiAjhSDGU09IstrRUGAS4lulCjeFwO51Pbv8azAvBj8yfsFA6MFqZEKlMFfmaio9iwWFe0IWzqDIRf3V9HvVrI0bW1y-sY2Wmlf7IygQS-RMAoCZ_4DSyNAHWTh9rPn_0GZbb0DSXSdM5-tfsIcw9ZqriVU9kZ4sX3-phKvntFv3tlnDTTtLovGmitBXAvDjXWmYdwhILZbq_8ufwPz_EFdt87yroU4yXepf0zUrKenh4deRgk5Bggt1kuAblVg5WeS8z47p9TFT9gm0uujhb6wk5NDGwx8VwqKDr62mWOSVkr5QiSWKE7_c8Rr6xPmVqPzfmZHGHXGEqPtNh_q9Nu_N0VNccB7gdOmuBmdQlFsT0AT4yK3ZasIiH56-QmPOSm35sKr6ZmnpLQUsxkrXcAM7v3q_hZg3NRRvLFt5sTMwrnu8vf9gy9WB3CIbnfopqKa-3QlG2RKw4iAKkQZ-sl5kGrLK6O7GC7eDiDaw-UN6Rj_8buAiNIbP51mL9P8Lb8VRUcT6q4cu7iYP7o8rXq-LkLsstPE7DShKZSYiFlkl6nbsaksn-lOlZmA3FiMPmJHJZaWm9KNIY3VSZf20FhzzNrsgXCPX8AmQJw1hvIyQbzwqpJXsayKvS0dPDCirVLXp6zrLXHq9OGnwiE7Q_430b28mcF_bW0lwYLuc-1ZWFmtKBrENsFevaIjif6dYx_JLnYQOEnE01XCbaBzVOFTM9SGM37xaoE23X9tJ2skh-7Vo6aAn4z8T6F7zilDpyEz2VAl9rcB1V0-4VSPl_W4cPQqX4uu_llkSxq_pjIsJA_P3iGKzBhFtvjy8whY9Ku9uuDoAkS-jQbyZaMfJ6c79iF4_pBZop6KujAL7h5wIPPJG2LPPcOWJHLq20VQ6MrxSP764bSrGTCjoU4ujAqtmqVL-TPElX18i7OJqha8wdo_6DPBWMdq1kJL_d0EWxZl1pb5p4v6cjB3GosIF4sLbJYgptuYcWS0wjO9aASv62OxMJ0LBQ7i4qdjJxUIIoeZ9W4vBj9_Y44mDWWqU2djmgXVWY6CxWDh5B4LnLakA1QHb5miUHT5sgNp3UCPxFdKnkyzCrG136goWVcjyFuBy7xEk_C60E-QQfAvSrJiiY0SLdS5zuE9kWw9FcwKGEtgGf9vqGu32CjE0lmGgKlccb-oXRoBXQafNjDC7FuAuyl9DSeJfAmIFb1UkXw1NjQ8Ej_F5CYNzjHUimAGXSLm3ZZlb6jaIdZEP67hQQIbPXx4WX4IwNRBL6-v-lszEY9o6Q4VIcOIzkCtJ0gvG0jceCZOGLgeLXb8g71IaFqLFVGvW_cWh_vNe30OmZ9HMamJdZAullxluIhBAzFHpcIwBhyZQewlpBXIvksvxt1WYXVgMi6aFTgRwsTXxLcAhC6zLaD-IYa4LjytdHNSE9adXzFK2j6wQGJaTREKRgomX8AWWVPHvO2UM59eh_Zm4Wd_as9sPBg4vBluKh0xtfdNr7ZevdC_xvDgPKRJjLkOCBKDf8iacDKq4TtrmDRHFYNJ9OcB4TspM1_YXBqyOTzjvRG8TO9ATTHB_QAC2pYKlyIjSTDamnhirum_M6zjdLVoWDIQOqwUfa92mve4PVseVEhdDJtQuVDSEKaCpvOvDwVjQE3xJL7Yauvwu4ZA5I0euFS50Ao_xzc7-95ooO9Frgn5MafmfzUBOrKUiR7raz4BZ1eSIyc0iFd3dfdTDdQGXggJKUHBiSoFUROYUK8jAjt5bd5zVcF9fkO1-30r1BjTuXGDkC7umHW3yb7fmCARdtFl9W8OHGxfRsj6FwmkxMsRKfrcZ37vd9dRfqdrkLlUsLzsGWljFt-NaKJXums_zIyKvlkEboDONgzDgykrj30uy7Lmysi_7u05BlzcUd2DcEAKt0QPJlng9ZG_hDYU-W-5VvwiRbpkBHJv1rpaYnzMy_jC3UC7M72Q0E8akZUGLk5-BRx4z7-Rt6rSYlPpLG33k3UZZvdzYYjNPo_sC03o0hMNeRqHnHPRa-6XuQan-zVcMfL-C8YW8clFFyItnMjuEZ6JI-1gbgamgJWlZbDBf6F45PDJBs1h_2MvWuVt1fCS8FFY9U3h2EEFH-HpCTxs9fG6uszMUB-LmH_4nR3400yteep_DjYuSJyuLI0MaKxA0rhjLKUNW886SVsSWo2H9ayrx4lTUum0gfWTA1J5tizviH07vAGRoGacvzCPwYAwGKx4KKDaoUGWLNTWwMpfvKcVKdvgaQm9-G2dKZPv7JV67R_PbrsCwwcWuAm84fmOjscMr5Im9zqw2KORUbKvi_qnkHwxBpy9a8CQOR_fiAPhFGWtSI9ZWnPiPuVM41T1pmHv2v-XMEVt-pEshNzMe2tWc_gMd1pPLzHk0GT3pSLJGBVhk-BWvM_51_f6sWS6V6VWoHh3y_AOn9gmnL6mw50Qc4WhSAqMwF0ByOSLPMFeoWVQ0PAsaSzzhyfhzPoxuzMy3LFM-CqxM4iPG4c74Y5EgEeFxXCVTDZ5LQdA24GqoRPWlzSyBzT9HdePcBzW04PrEMWYsaBb8v6ij25MdepCGkNnYID67Gh6104Gr-cbVcBjK-CaidBOQmPPL9EiwIpVItMcG7XJJUuTZ9iMpUH2hmjwtJhKdHColX-D-jauMJMQEOsjrhSZ4AnfAqdIZk8pXYi9oL-a8KrehOTS_q6mQsmQW1kDKaFNbXamoFRi5kD3qc5uubUMy_eGwsDK3-EtGjVtGsz8V9p_IRQ1-IPJ5bM4eZaysjIQTw7bChl2Sta13u1m45m7JjtcZbrZsYXyDwc6OiAV_VKQgXI91Y4oxzZTL03kA2avWFVv3ZWdNRS1YG5o-kHlVrPWq2gx7oy1_yDp-2-ppBGc3wwOG00MAM8b2FNahELQh2VM2TTB9EcpsOFt4CVlLkl36MiwrL1MQ3D2NkIO2RQdv0Cu_l22jNIWoYNimgpS5jFrh6ZFvyesLQviwqF3uKTMFZSk-GtYWQjaYuYCB4nFbHqYUffkyMgFHPE27EeyStpEF0IzW-EndVKI1Amt668lBuOfQKgu4qK5K-HOvZujnCBTI8ly4JRDP_JgIuzrlkoiUuQhplPZSumc268oa_G6gMQIMxJVYyreg2hF8nmomJEqFkNceOS59D6RGY8k9PUjAJT9YypMQHIY7EQ2ohDnGvaZukgv4IURtlF7NEC1bAcsMmh-yZpukTfNIDfe0YMfwtHsk8DfWiB7MaPSXQSLimmxzPv3LVdQaxSEeIbzpSGXjn5Tnov6weLbBcxPiWroH5ZtC2eJQk6uP1YaOyklGmHbvLAiZvpifMlTz2N13BLkTq110WYujBU-vDKezWMqiCkOXDhz2_wPhryVwyd7AkhYU29GnU3_5DS7FLIOUpEcaF-U1LqWsLNfFPtQx_BHl__oQpSRw9y4Js21WHPi3uflI_Lo2mesgh2KXsNsp2a86o7pcf6sTGvP0JovKj4WU4uK-NcpG9NLn3JO5wVgwiPmGNoPMaQQgEEjsAaQJSVnK10ePxzdK4iYIXK4o9aiszf3V7UARSMqtlXU9EbMERLyGwrkYATPpvIEvZ9n45z9Zy6gtVEhgBYAE&cry=1&bundleId=&ias_dspID=3&ias_campId=1013025038&ias_pubId=pub-4529402052683454&ias_chanId=1&ias_placementId=20262206047&bidurl=https:\/\/suite101.com\/&ias_dealId=&adsafe_par&ias_impId=v4~~ABAjH0iujTrq09Q6Pka9ErvnCBld",
    tpiLookupURL: "",
    getTpl: "false",
    use100v: false,
    useBapiCallback: "",
    useViewabilityNotification: "",
    scriptUrl: "https:\/\/fw.adsafeprotected.com\/rjss\/bgd\/1525559\/72176526\/xbbe\/creative\/adj?p=APEucNWWFdImJVRB6L1QHuZal5CDqLxhhASVan1Gq26KSuxdz6hHjqk&d=CokBAKAmf-BjLt5",
    accountForSadImps: '',
    fwMonitoring: 'false',
    mn: "jsserver-primary-6c94bcc666-7qkv4",
    mobOrTab: false,
    app: false,
    mobAppWebview: false,
    mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/blocking\/app\/initial\/1525559\/72176526?redirectUrl=https%3A%2F%2Fbid.g.doubleclick.net%2Fxbbe%2Fcreative%2Fadj%3Fp%3DAPEucNWWFdImJVRB6L1QHuZal5CDqLxhhASVan1Gq26KSuxdz6hHjqk%26d%3DCokBAKAmf-BjLt5TD5teG-3af8iQIBxlC6ywfGbZqq7ODTclSTlNs9HPFP5CEstgb8MVWLoHz_RC2IBlsWOXiAjhSDGU09IstrRUGAS4lulCjeFwO51Pbv8azAvBj8yfsFA6MFqZEKlMFfmaio9iwWFe0IWzqDIRf3V9HvVrI0bW1y-sY2Wmlf7IygQS-RMAoCZ_4DSyNAHWTh9rPn_0GZbb0DSXSdM5-tfsIcw9ZqriVU9kZ4sX3-phKvntFv3tlnDTTtLovGmitBXAvDjXWmYdwhILZbq_8ufwPz_EFdt87yroU4yXepf0zUrKenh4deRgk5Bggt1kuAblVg5WeS8z47p9TFT9gm0uujhb6wk5NDGwx8VwqKDr62mWOSVkr5QiSWKE7_c8Rr6xPmVqPzfmZHGHXGEqPtNh_q9Nu_N0VNccB7gdOmuBmdQlFsT0AT4yK3ZasIiH56-QmPOSm35sKr6ZmnpLQUsxkrXcAM7v3q_hZg3NRRvLFt5sTMwrnu8vf9gy9WB3CIbnfopqKa-3QlG2RKw4iAKkQZ-sl5kGrLK6O7GC7eDiDaw-UN6Rj_8buAiNIbP51mL9P8Lb8VRUcT6q4cu7iYP7o8rXq-LkLsstPE7DShKZSYiFlkl6nbsaksn-lOlZmA3FiMPmJHJZaWm9KNIY3VSZf20FhzzNrsgXCPX8AmQJw1hvIyQbzwqpJXsayKvS0dPDCirVLXp6zrLXHq9OGnwiE7Q_430b28mcF_bW0lwYLuc-1ZWFmtKBrENsFevaIjif6dYx_JLnYQOEnE01XCbaBzVOFTM9SGM37xaoE23X9tJ2skh-7Vo6aAn4z8T6F7zilDpyEz2VAl9rcB1V0-4VSPl_W4cPQqX4uu_llkSxq_pjIsJA_P3iGKzBhFtvjy8whY9Ku9uuDoAkS-jQbyZaMfJ6c79iF4_pBZop6KujAL7h5wIPPJG2LPPcOWJHLq20VQ6MrxSP764bSrGTCjoU4ujAqtmqVL-TPElX18i7OJqha8wdo_6DPBWMdq1kJL_d0EWxZl1pb5p4v6cjB3GosIF4sLbJYgptuYcWS0wjO9aASv62OxMJ0LBQ7i4qdjJxUIIoeZ9W4vBj9_Y44mDWWqU2djmgXVWY6CxWDh5B4LnLakA1QHb5miUHT5sgNp3UCPxFdKnkyzCrG136goWVcjyFuBy7xEk_C60E-QQfAvSrJiiY0SLdS5zuE9kWw9FcwKGEtgGf9vqGu32CjE0lmGgKlccb-oXRoBXQafNjDC7FuAuyl9DSeJfAmIFb1UkXw1NjQ8Ej_F5CYNzjHUimAGXSLm3ZZlb6jaIdZEP67hQQIbPXx4WX4IwNRBL6-v-lszEY9o6Q4VIcOIzkCtJ0gvG0jceCZOGLgeLXb8g71IaFqLFVGvW_cWh_vNe30OmZ9HMamJdZAullxluIhBAzFHpcIwBhyZQewlpBXIvksvxt1WYXVgMi6aFTgRwsTXxLcAhC6zLaD-IYa4LjytdHNSE9adXzFK2j6wQGJaTREKRgomX8AWWVPHvO2UM59eh_Zm4Wd_as9sPBg4vBluKh0xtfdNr7ZevdC_xvDgPKRJjLkOCBKDf8iacDKq4TtrmDRHFYNJ9OcB4TspM1_YXBqyOTzjvRG8TO9ATTHB_QAC2pYKlyIjSTDamnhirum_M6zjdLVoWDIQOqwUfa92mve4PVseVEhdDJtQuVDSEKaCpvOvDwVjQE3xJL7Yauvwu4ZA5I0euFS50Ao_xzc7-95ooO9Frgn5MafmfzUBOrKUiR7raz4BZ1eSIyc0iFd3dfdTDdQGXggJKUHBiSoFUROYUK8jAjt5bd5zVcF9fkO1-30r1BjTuXGDkC7umHW3yb7fmCARdtFl9W8OHGxfRsj6FwmkxMsRKfrcZ37vd9dRfqdrkLlUsLzsGWljFt-NaKJXums_zIyKvlkEboDONgzDgykrj30uy7Lmysi_7u05BlzcUd2DcEAKt0QPJlng9ZG_hDYU-W-5VvwiRbpkBHJv1rpaYnzMy_jC3UC7M72Q0E8akZUGLk5-BRx4z7-Rt6rSYlPpLG33k3UZZvdzYYjNPo_sC03o0hMNeRqHnHPRa-6XuQan-zVcMfL-C8YW8clFFyItnMjuEZ6JI-1gbgamgJWlZbDBf6F45PDJBs1h_2MvWuVt1fCS8FFY9U3h2EEFH-HpCTxs9fG6uszMUB-LmH_4nR3400yteep_DjYuSJyuLI0MaKxA0rhjLKUNW886SVsSWo2H9ayrx4lTUum0gfWTA1J5tizviH07vAGRoGacvzCPwYAwGKx4KKDaoUGWLNTWwMpfvKcVKdvgaQm9-G2dKZPv7JV67R_PbrsCwwcWuAm84fmOjscMr5Im9zqw2KORUbKvi_qnkHwxBpy9a8CQOR_fiAPhFGWtSI9ZWnPiPuVM41T1pmHv2v-XMEVt-pEshNzMe2tWc_gMd1pPLzHk0GT3pSLJGBVhk-BWvM_51_f6sWS6V6VWoHh3y_AOn9gmnL6mw50Qc4WhSAqMwF0ByOSLPMFeoWVQ0PAsaSzzhyfhzPoxuzMy3LFM-CqxM4iPG4c74Y5EgEeFxXCVTDZ5LQdA24GqoRPWlzSyBzT9HdePcBzW04PrEMWYsaBb8v6ij25MdepCGkNnYID67Gh6104Gr-cbVcBjK-CaidBOQmPPL9EiwIpVItMcG7XJJUuTZ9iMpUH2hmjwtJhKdHColX-D-jauMJMQEOsjrhSZ4AnfAqdIZk8pXYi9oL-a8KrehOTS_q6mQsmQW1kDKaFNbXamoFRi5kD3qc5uubUMy_eGwsDK3-EtGjVtGsz8V9p_IRQ1-IPJ5bM4eZaysjIQTw7bChl2Sta13u1m45m7JjtcZbrZsYXyDwc6OiAV_VKQgXI91Y4oxzZTL03kA2avWFVv3ZWdNRS1YG5o-kHlVrPWq2gx7oy1_yDp-2-ppBGc3wwOG00MAM8b2FNahELQh2VM2TTB9EcpsOFt4CVlLkl36MiwrL1MQ3D2NkIO2RQdv0Cu_l22jNIWoYNimgpS5jFrh6ZFvyesLQviwqF3uKTMFZSk-GtYWQjaYuYCB4nFbHqYUffkyMgFHPE27EeyStpEF0IzW-EndVKI1Amt668lBuOfQKgu4qK5K-HOvZujnCBTI8ly4JRDP_JgIuzrlkoiUuQhplPZSumc268oa_G6gMQIMxJVYyreg2hF8nmomJEqFkNceOS59D6RGY8k9PUjAJT9YypMQHIY7EQ2ohDnGvaZukgv4IURtlF7NEC1bAcsMmh-yZpukTfNIDfe0YMfwtHsk8DfWiB7MaPSXQSLimmxzPv3LVdQaxSEeIbzpSGXjn5Tnov6weLbBcxPiWroH5ZtC2eJQk6uP1YaOyklGmHbvLAiZvpifMlTz2N13BLkTq110WYujBU-vDKezWMqiCkOXDhz2_wPhryVwyd7AkhYU29GnU3_5DS7FLIOUpEcaF-U1LqWsLNfFPtQx_BHl__oQpSRw9y4Js21WHPi3uflI_Lo2mesgh2KXsNsp2a86o7pcf6sTGvP0JovKj4WU4uK-NcpG9NLn3JO5wVgwiPmGNoPMaQQgEEjsAaQJSVnK10ePxzdK4iYIXK4o9aiszf3V7UARSMqtlXU9EbMERLyGwrkYATPpvIEvZ9n45z9Zy6gtVEhgBYAE%26cry%3D1%26bundleId%3D&ias_campId=1013025038&ias_pubId=pub-4529402052683454&ias_placementId=20262206047&ias_chanId=1&ias_dealId=&ias_impId=v4~~ABAjH0iujTrq09Q6Pka9ErvnCBld&ias_dspId=3",
    anId: '',
    advEntityId: '1525559',
    pubEntityId: '72176526',
    videoId: '',
    rts: {},
    customViewability: [],
    serverSideAppDetection: [],
    groupm_native_publisher: false,
    integration: null,
    staticServer: '\/\/static.adsafeprotected.com\/',
    passback: 'https:\/\/static.adsafeprotected.com\/passback_728x90.js',
    iasProxyPartnerDomain: '',
    region: 'sg'
  };
  try {
    __IASScope = typeof window !== "undefined" ? window : this;
    __IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
    __IntegralASConfig.staticMode = !__IntegralASConfig.isResolved;
    __IntegralASConfig.birthdate = new Date().getTime();
    __IntegralASConfig.perfBirth = typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function' ? __IASScope.performance.now() : null;
    ;
    (function (omidGlobal, factory, exports) {
      // CommonJS support
      if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(omidGlobal, exports);

        // If neither AMD nor CommonJS are used, export to a versioned name in the
        // global context.
      } else {
        var exports = {};
        var versions = ['1.3.25-iab3167'];
        var additionalVersionString = '';
        if (!!additionalVersionString) {
          versions.push(additionalVersionString);
        }
        factory(omidGlobal, exports);
        function deepFreeze(object) {
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              object[key] = deepFreeze(object[key]);
            }
          }
          return Object.freeze(object);
        }

        // Inject and freeze the exported components of omid.
        for (var key in exports) {
          if (exports.hasOwnProperty(key)) {
            if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
              // Define the top level property in the global scope
              Object.defineProperty(omidGlobal, key, {
                //						value: {},       Removed trailing comma for build
                value: {}
              });
            }
            versions.forEach(function (version) {
              if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
                var frozenObject = deepFreeze(exports[key]);
                // Define the object exports keyed-off versions
                Object.defineProperty(omidGlobal[key], version, {
                  get: function () {
                    return frozenObject;
                  },
                  //							enumerable: true,       Removed trailing comma for build
                  enumerable: true
                });
              }
            });
          }
        }
      }
    })(typeof global === 'undefined' ? this : global, function (omidGlobal, omidExports) {
      'use strict';

      var $jscomp = $jscomp || {};
      $jscomp.scope = {};
      $jscomp.arrayIteratorImpl = function (a) {
        var b = 0;
        return function () {
          return b < a.length ? {
            done: !1,
            value: a[b++]
          } : {
            done: !0
          };
        };
      };
      $jscomp.arrayIterator = function (a) {
        return {
          next: $jscomp.arrayIteratorImpl(a)
        };
      };
      $jscomp.makeIterator = function (a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : $jscomp.arrayIterator(a);
      };
      $jscomp.arrayFromIterator = function (a) {
        for (var b, c = []; !(b = a.next()).done;) {
          c.push(b.value);
        }
        return c;
      };
      $jscomp.arrayFromIterable = function (a) {
        return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
      };
      $jscomp.ASSUME_ES5 = !1;
      $jscomp.ASSUME_NO_NATIVE_MAP = !1;
      $jscomp.ASSUME_NO_NATIVE_SET = !1;
      $jscomp.SIMPLE_FROUND_POLYFILL = !1;
      $jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {};
        b.prototype = a;
        return new b();
      };
      $jscomp.underscoreProtoCanBeSet = function () {
        var a = {
            a: !0
          },
          b = {};
        try {
          return b.__proto__ = a, b.a;
        } catch (c) {}
        return !1;
      };
      $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) {
          throw new TypeError(a + " is not extensible");
        }
        return a;
      } : null;
      $jscomp.inherits = function (a, b) {
        a.prototype = $jscomp.objectCreate(b.prototype);
        a.prototype.constructor = a;
        if ($jscomp.setPrototypeOf) {
          var c = $jscomp.setPrototypeOf;
          c(a, b);
        } else {
          for (c in b) {
            if ("prototype" != c) {
              if (Object.defineProperties) {
                var d = Object.getOwnPropertyDescriptor(b, c);
                d && Object.defineProperty(a, c, d);
              } else {
                a[c] = b[c];
              }
            }
          }
        }
        a.superClass_ = b.prototype;
      };
      var module$exports$omid$common$constants = {
        AdEventType: {
          IMPRESSION: "impression",
          LOADED: "loaded",
          GEOMETRY_CHANGE: "geometryChange",
          SESSION_START: "sessionStart",
          SESSION_ERROR: "sessionError",
          SESSION_FINISH: "sessionFinish",
          MEDIA: "media",
          VIDEO: "video",
          START: "start",
          FIRST_QUARTILE: "firstQuartile",
          MIDPOINT: "midpoint",
          THIRD_QUARTILE: "thirdQuartile",
          COMPLETE: "complete",
          PAUSE: "pause",
          RESUME: "resume",
          BUFFER_START: "bufferStart",
          BUFFER_FINISH: "bufferFinish",
          SKIPPED: "skipped",
          VOLUME_CHANGE: "volumeChange",
          PLAYER_STATE_CHANGE: "playerStateChange",
          AD_USER_INTERACTION: "adUserInteraction",
          STATE_CHANGE: "stateChange"
        },
        MediaEventType: {
          LOADED: "loaded",
          START: "start",
          FIRST_QUARTILE: "firstQuartile",
          MIDPOINT: "midpoint",
          THIRD_QUARTILE: "thirdQuartile",
          COMPLETE: "complete",
          PAUSE: "pause",
          RESUME: "resume",
          BUFFER_START: "bufferStart",
          BUFFER_FINISH: "bufferFinish",
          SKIPPED: "skipped",
          VOLUME_CHANGE: "volumeChange",
          PLAYER_STATE_CHANGE: "playerStateChange",
          AD_USER_INTERACTION: "adUserInteraction"
        },
        ImpressionType: {
          DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
          UNSPECIFIED: "unspecified",
          LOADED: "loaded",
          BEGIN_TO_RENDER: "beginToRender",
          ONE_PIXEL: "onePixel",
          VIEWABLE: "viewable",
          AUDIBLE: "audible",
          OTHER: "other"
        },
        ErrorType: {
          GENERIC: "generic",
          VIDEO: "video",
          MEDIA: "media"
        },
        AdSessionType: {
          NATIVE: "native",
          HTML: "html",
          JAVASCRIPT: "javascript"
        },
        EventOwner: {
          NATIVE: "native",
          JAVASCRIPT: "javascript",
          NONE: "none"
        },
        AccessMode: {
          FULL: "full",
          DOMAIN: "domain",
          LIMITED: "limited"
        },
        AppState: {
          BACKGROUNDED: "backgrounded",
          FOREGROUNDED: "foregrounded"
        },
        Environment: {
          APP: "app",
          WEB: "web"
        },
        InteractionType: {
          CLICK: "click",
          INVITATION_ACCEPT: "invitationAccept"
        },
        CreativeType: {
          DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
          HTML_DISPLAY: "htmlDisplay",
          NATIVE_DISPLAY: "nativeDisplay",
          VIDEO: "video",
          AUDIO: "audio"
        },
        MediaType: {
          DISPLAY: "display",
          VIDEO: "video"
        },
        Reason: {
          NOT_FOUND: "notFound",
          HIDDEN: "hidden",
          BACKGROUNDED: "backgrounded",
          VIEWPORT: "viewport",
          OBSTRUCTED: "obstructed",
          CLIPPED: "clipped",
          UNMEASURABLE: "unmeasurable",
          NO_WINDOW_FOCUS: "noWindowFocus"
        },
        SupportedFeatures: {
          CONTAINER: "clid",
          VIDEO: "vlid"
        },
        VideoPosition: {
          PREROLL: "preroll",
          MIDROLL: "midroll",
          POSTROLL: "postroll",
          STANDALONE: "standalone"
        },
        VideoPlayerState: {
          MINIMIZED: "minimized",
          COLLAPSED: "collapsed",
          NORMAL: "normal",
          EXPANDED: "expanded",
          FULLSCREEN: "fullscreen"
        },
        NativeViewKeys: {
          X: "x",
          LEFT: "left",
          Y: "y",
          TOP: "top",
          WIDTH: "width",
          HEIGHT: "height",
          AD_SESSION_ID: "adSessionId",
          IS_FRIENDLY_OBSTRUCTION_FOR: "isFriendlyObstructionFor",
          CLIPS_TO_BOUNDS: "clipsToBounds",
          CHILD_VIEWS: "childViews",
          END_X: "endX",
          END_Y: "endY",
          OBSTRUCTIONS: "obstructions",
          OBSTRUCTION_CLASS: "obstructionClass",
          OBSTRUCTION_PURPOSE: "obstructionPurpose",
          OBSTRUCTION_REASON: "obstructionReason",
          PIXELS: "pixels",
          HAS_WINDOW_FOCUS: "hasWindowFocus"
        },
        MeasurementStateChangeSource: {
          CONTAINER: "container",
          CREATIVE: "creative"
        },
        ElementMarkup: {
          OMID_ELEMENT_CLASS_NAME: "omid-element"
        },
        CommunicationType: {
          NONE: "NONE",
          DIRECT: "DIRECT",
          POST_MESSAGE: "POST_MESSAGE"
        },
        OmidImplementer: {
          OMSDK: "omsdk"
        }
      };
      var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid",
        module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method",
        module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version",
        module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args",
        module$exports$omid$common$InternalMessage = function (a, b, c, d) {
          this.guid = a;
          this.method = b;
          this.version = c;
          this.args = d;
        };
      module$exports$omid$common$InternalMessage.isValidSerializedMessage = function (a) {
        return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] || void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
      };
      module$exports$omid$common$InternalMessage.deserialize = function (a) {
        return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
      };
      module$exports$omid$common$InternalMessage.prototype.serialize = function () {
        var a = {};
        a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
        void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
        return a;
      };
      var module$exports$omid$common$Communication = function (a) {
        this.to = a;
        this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
      };
      module$exports$omid$common$Communication.prototype.sendMessage = function (a, b) {};
      module$exports$omid$common$Communication.prototype.handleMessage = function (a, b) {
        if (this.onMessage) {
          this.onMessage(a, b);
        }
      };
      module$exports$omid$common$Communication.prototype.serialize = function (a) {
        return JSON.stringify(a);
      };
      module$exports$omid$common$Communication.prototype.deserialize = function (a) {
        return JSON.parse(a);
      };
      module$exports$omid$common$Communication.prototype.isDirectCommunication = function () {
        return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
      };
      module$exports$omid$common$Communication.prototype.isCrossOrigin = function () {};
      var module$exports$omid$common$logger = {
        error: function (a) {
          for (var b = [], c = 0; c < arguments.length; ++c) {
            b[c - 0] = arguments[c];
          }
          module$contents$omid$common$logger_executeLog(function () {
            throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))))();
          }, function () {
            return console.error.apply(console, $jscomp.arrayFromIterable(b));
          });
        },
        debug: function (a) {
          for (var b = [], c = 0; c < arguments.length; ++c) {
            b[c - 0] = arguments[c];
          }
          module$contents$omid$common$logger_executeLog(function () {}, function () {
            return console.error.apply(console, $jscomp.arrayFromIterable(b));
          });
        }
      };
      function module$contents$omid$common$logger_executeLog(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
      }
      ;
      var module$exports$omid$common$eventTypedefs = {};
      var module$exports$omid$common$version = {
        ApiVersion: "1.0",
        Version: "1.3.25-iab3167"
      };
      var module$exports$omid$common$argsChecker = {
        assertTruthyString: function (a, b) {
          if (!b) {
            throw Error("Value for " + a + " is undefined, null or blank.");
          }
          if ("string" !== typeof b && !(b instanceof String)) {
            throw Error("Value for " + a + " is not a string.");
          }
          if ("" === b.trim()) {
            throw Error("Value for " + a + " is empty string.");
          }
        },
        assertNotNullObject: function (a, b) {
          if (null == b) {
            throw Error("Value for " + a + " is undefined or null");
          }
        },
        assertNumber: function (a, b) {
          if (null == b) {
            throw Error(a + " must not be null or undefined.");
          }
          if ("number" !== typeof b || isNaN(b)) {
            throw Error("Value for " + a + " is not a number");
          }
        },
        assertNumberBetween: function (a, b, c, d) {
          (0, module$exports$omid$common$argsChecker.assertNumber)(a, b);
          if (b < c || b > d) {
            throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
          }
        },
        assertFunction: function (a, b) {
          if (!b) {
            throw Error(a + " must not be truthy.");
          }
        },
        assertPositiveNumber: function (a, b) {
          (0, module$exports$omid$common$argsChecker.assertNumber)(a, b);
          if (0 > b) {
            throw Error(a + " must be a positive number.");
          }
        }
      };
      var module$exports$omid$common$VersionUtils = {},
        module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
      module$exports$omid$common$VersionUtils.isValidVersion = function (a) {
        return /\d+\.\d+\.\d+(-.*)?/.test(a);
      };
      module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function (a, b) {
        a = a.split("-")[0].split(".");
        b = b.split("-")[0].split(".");
        for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
          var d = parseInt(a[c], 10),
            e = parseInt(b[c], 10);
          if (d > e) {
            break;
          } else {
            if (d < e) {
              return !1;
            }
          }
        }
        return !0;
      };
      var module$exports$omid$common$ArgsSerDe = {},
        module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
      module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function (a, b) {
        return (0, module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0, module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
      };
      module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function (a, b) {
        return (0, module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0, module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
      };
      var module$exports$omid$common$guid = {
        generateGuid: function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
            var b = 16 * Math.random() | 0;
            a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
            return a;
          });
        }
      };
      var module$exports$omid$common$OmidGlobalProvider = {};
      function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
        if ("undefined" !== typeof omidGlobal && omidGlobal) {
          return omidGlobal;
        }
        if ("undefined" !== typeof global && global) {
          return global;
        }
        if ("undefined" !== typeof window && window) {
          return window;
        }
        if ("undefined" !== typeof globalThis && globalThis) {
          return globalThis;
        }
        var a = Function("return this")();
        if (a) {
          return a;
        }
        throw Error("Could not determine global object context.");
      }
      module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
      var module$exports$omid$common$exporter = {};
      function module$contents$omid$common$exporter_getOmidExports() {
        return "undefined" === typeof omidExports ? null : omidExports;
      }
      function module$contents$omid$common$exporter_getOrCreateName(a, b) {
        return a && (a[b] || (a[b] = {}));
      }
      module$exports$omid$common$exporter.packageExport = function (a, b, c) {
        if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
          a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
        }
      };
      var module$exports$omid$common$windowUtils = {};
      function module$contents$omid$common$windowUtils_isValidWindow(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top;
      }
      module$exports$omid$common$windowUtils.isCrossOrigin = function (a) {
        if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
          return !1;
        }
        try {
          if ("undefined" === typeof a.location.hostname) {
            return !0;
          }
          module$contents$omid$common$windowUtils_isSameOriginForIE(a);
        } catch (b) {
          return !0;
        }
        return !1;
      };
      function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
        return "" === a.x || "" !== a.x;
      }
      module$exports$omid$common$windowUtils.resolveGlobalContext = function (a) {
        "undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
        return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
      };
      module$exports$omid$common$windowUtils.resolveTopWindowContext = function (a) {
        return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
      };
      module$exports$omid$common$windowUtils.isTopWindowAccessible = function (a) {
        try {
          return a.top.location.href ? !0 : !1;
        } catch (b) {
          return !1;
        }
      };
      module$exports$omid$common$windowUtils.evaluatePageUrl = function (a) {
        if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
          return null;
        }
        try {
          var b = a.top;
          return (0, module$exports$omid$common$windowUtils.isCrossOrigin)(b) ? null : b.location.href;
        } catch (c) {
          return null;
        }
      };
      var module$exports$omid$common$DirectCommunication = function (a) {
        module$exports$omid$common$Communication.call(this, a);
        this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
        this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
      };
      $jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
      module$exports$omid$common$DirectCommunication.prototype.sendMessage = function (a, b) {
        b = void 0 === b ? this.to : b;
        if (!b) {
          throw Error("Message destination must be defined at construction time or when sending the message.");
        }
        b.handleExportedMessage(a.serialize(), this);
      };
      module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function (a, b) {
        module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
      };
      module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function () {
        return !1;
      };
      var module$exports$omid$common$PostMessageCommunication = function (a, b) {
        b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
        module$exports$omid$common$Communication.call(this, b);
        var c = this;
        this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
        a.addEventListener("message", function (a) {
          if ("object" === typeof a.data) {
            var b = a.data;
            module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
          }
        });
      };
      $jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
      module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function (a) {
        return !!(a && a.addEventListener && a.postMessage);
      };
      module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function (a, b) {
        b = void 0 === b ? this.to : b;
        if (!b) {
          throw Error("Message destination must be defined at construction time or when sending the message.");
        }
        b.postMessage(a.serialize(), "*");
      };
      module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function () {
        return this.to ? (0, module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
      };
      var module$exports$omid$common$DetectOmid = {
        OMID_PRESENT_FRAME_NAME: "omid_v1_present",
        isOmidPresent: function (a) {
          try {
            return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
          } catch (b) {
            return !1;
          }
        },
        declareOmidPresence: function (a) {
          a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '"></iframe>'))));
        },
        appendPresenceIframe_: function (a) {
          var b = a.document.createElement("iframe");
          b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
          b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
          b.style.display = "none";
          a.document.body.appendChild(b);
        },
        isMutationObserverAvailable_: function (a) {
          return "MutationObserver" in a;
        },
        registerMutationObserver_: function (a) {
          var b = new MutationObserver(function (c) {
            c.forEach(function (c) {
              "BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
            });
          });
          b.observe(a.document.documentElement, {
            childList: !0
          });
        }
      };
      var module$exports$omid$common$serviceCommunication = {},
        module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"],
        module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"],
        module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
      function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
        return b.reduce(function (a, b) {
          return a && a[b];
        }, a);
      }
      function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
        if (!(0, module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
          try {
            var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
            if (e) {
              return new module$exports$omid$common$DirectCommunication(e);
            }
          } catch (f) {}
        }
        return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
      }
      function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
        b = $jscomp.makeIterator(b);
        for (var e = b.next(); !e.done; e = b.next()) {
          if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
            return e;
          }
        }
        return null;
      }
      module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function (a, b, c) {
        c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
        var d = [a, (0, module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
        b && d.unshift(b);
        return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
      };
      module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function (a, b) {
        b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
        var c = [],
          d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
        d && c.push(d);
        c.push((0, module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
        return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
      };
      var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version,
        module$contents$omid$verificationClient$VerificationClient_EventCallback;
      function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
        var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
        return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
      }
      var module$exports$omid$verificationClient$VerificationClient = function (a) {
        if (this.communication = a || (0, module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication)((0, module$exports$omid$common$windowUtils.resolveGlobalContext)())) {
          this.communication.onMessage = this.handleMessage_.bind(this);
        } else {
          if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
            this.omid3p = a;
          }
        }
        //----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
        this.callbackMap_ = {};
        this.imgCache_ = [];
        this.injectionId_ = (a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties) ? a.injectionId : void 0;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function () {
        return !(!this.communication && !this.omid3p);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.injectionSource = function () {
        var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties;
        if (a && a.injectionSource) {
          return a.injectionSource;
        }
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function (a, b) {
        (0, module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
        this.omid3p ? this.omid3p.registerSessionObserver(a, b, this.injectionId_) : this.sendMessage_("addSessionListener", a, b, this.injectionId_);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function (a, b) {
        (0, module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
        (0, module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
        this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function (a, b, c) {
        (0, module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
        module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function (a) {
          a && b ? b() : !a && c && c();
        }, a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function (a, b, c) {
        var d = this,
          e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
        this.imgCache_.push(e);
        var f = function (a) {
          var b = d.imgCache_.indexOf(e);
          0 <= b && d.imgCache_.splice(b, 1);
          a && a();
        };
        e.addEventListener("load", f.bind(this, b));
        e.addEventListener("error", f.bind(this, c));
        e.src = a;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function (a, b, c) {
        var d = this;
        (0, module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
        module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function (e, f) {
          e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
        }, a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function (a, b, c) {
        var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document,
          e = d.body;
        d = d.createElement("script");
        d.onload = b;
        d.onerror = c;
        d.src = a;
        d.type = "application/javascript";
        e.appendChild(d);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function (a, b) {
        try {
          eval(a);
        } catch (c) {
          module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
        }
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function (a, b) {
        (0, module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
        (0, module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
        if (this.hasTimeoutMethods_()) {
          return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
        }
        //----------var c = this.remoteTimeouts_++;
        var c = new Date().getTime() * 1000000 + Math.floor(Math.random() * 1000000);
        this.sendMessage_("setTimeout", a, c, b);
        return c;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function (a) {
        (0, module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
        this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function (a, b) {
        (0, module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
        (0, module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
        if (this.hasIntervalMethods_()) {
          return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
        }
        //----------var c = this.remoteIntervals_++;
        var c = new Date().getTime() * 1000000 + Math.floor(Math.random() * 1000000);
        this.sendMessage_("setInterval", a, c, b);
        return c;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function (a) {
        (0, module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
        this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function () {
        return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function () {
        return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function (a, b) {
        b = a.method;
        var c = a.guid;
        a = a.args;
        if ("response" === b && this.callbackMap_[c]) {
          var d = (0, module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
          this.callbackMap_[c].apply(this, d);
        }
        "error" === b && window.console && module$exports$omid$common$logger.error(a);
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function (a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) {
          c[d - 1] = arguments[d];
        }
        this.sendMessage_.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
      };
      module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function (a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) {
          d[e - 2] = arguments[e];
        }
        this.communication && (e = (0, module$exports$omid$common$guid.generateGuid)(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0, module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, d)), this.communication.sendMessage(d));
      };
      (0, module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);
    }, typeof exports === 'undefined' ? undefined : exports);
  } catch (e) {
    __IntegralASDiagnosticCall('thirdparty', e);
  }
  __IASScope.isDomless = typeof window === "undefined";
  __IASOmidVerificationClient = {
    isSupported: function () {
      return false;
    }
  };
  if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
    try {
      __IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.3.25-iab3167'](); //try standard in-browser instantiation
    } catch (e) {
      try {
        __IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
      } catch (e) {}
    }
  }
  __IntegralASConfig.useFIF = __IASScope && !!__IASScope.__IntegralASUseFIF && __IntegralASConfig.mode === 'jload';
  __IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;
  __IntegralASConfig.getContextNode = function (win, topWin) {
    'use strict';

    if (__IASScope.isDomless) {
      return;
    }
    if (__IntegralASConfig.useFIF) {
      return __IASScope.frameElement; // Early exit if using FIF
    }
    if (document.currentScript) {
      return document.currentScript;
    }
    var tempScript,
      scripts = document.getElementsByTagName('script'),
      result = scripts[scripts.length - 1],
      scriptIndex = scripts.length,
      scriptUrl = __IntegralASConfig.scriptUrl;
    try {
      while (--scriptIndex >= 0) {
        tempScript = scripts[scriptIndex];
        if (tempScript.src && tempScript.src.indexOf(scriptUrl) === 0 && tempScript.getAttribute('data-ias-script-tag') === null) {
          result = tempScript;
          tempScript.setAttribute('data-ias-script-tag', 'found');
          break;
        }
      }
    } catch (e) {} // TODO: maybe a jsDiagnostic?

    return result;
  };
  __IntegralASConfig.contextNode = __IASScope.isDomless ? undefined : __IntegralASConfig.getContextNode(window, top);
  __IntegralASConfig.perfFactory = function () {
    'use strict';

    var _marks = {};
    var START_CODE = 'A';
    var END_CODE = 'Z';
    function _addMark(codeName, time) {
      _marks[codeName] = time;
    }
    function mark(codeName) {
      _addMark(codeName, Math.round(__IASScope.performance.now()));
    }
    function markStart(baseName) {
      mark(baseName + START_CODE);
    }
    function markEnd(baseName) {
      mark(baseName + END_CODE);
    }
    function markResource(baseName, url) {
      var entry, entries;
      entries = __IASScope.performance.getEntriesByName(url);
      if (entries && entries.length) {
        entry = entries[entries.length - 1];
        if (entry.startTime > 0 && entry.responseEnd > 0) {
          _addMark(baseName + START_CODE, Math.round(entry.startTime));
          _addMark(baseName + END_CODE, Math.round(entry.responseEnd));
        }
      }
    }
    function getData() {
      return _marks;
    }
    function getStart(baseName) {
      return _marks[baseName + START_CODE];
    }
    function getEnd(baseName) {
      return _marks[baseName + END_CODE];
    }
    function noop() {}
    function setNoops() {
      _addMark = noop;
      mark = noop;
      markStart = noop;
      markEnd = noop;
      markResource = noop;
    }
    function isFunc(obj) {
      return typeof obj === 'function';
    }
    function _init() {
      var canUsePerformanceAPIs = false;
      var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
      var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
      var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
      var downloadMark;
      try {
        canUsePerformanceAPIs = __IASScope.performance && isFunc(__IASScope.performance.getEntriesByName) && isFunc(__IASScope.performance.now) && __IntegralASConfig.perfBirth !== null; // initialized to null or a time in jsAddOns1-birthdate.js

        if (canUsePerformanceAPIs) {
          downloadMark = __IntegralASConfig.jsDoSplit ? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD : PERF_MARK_MAIN_SCRIPT_DOWNLOAD;
          markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
          _addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
          markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
        } else {
          setNoops();
        }
      } catch (err) {
        // TODO: remove if we never get here?
        setNoops();
        if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
          __IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
        }
      }
    }
    _init();
    return {
      mark: mark,
      markStart: markStart,
      markEnd: markEnd,
      markResource: markResource,
      getData: getData,
      getStart: getStart,
      getEnd: getEnd
    };
  };
  __IntegralASConfig.perf = __IntegralASConfig.perfFactory();
} catch (err) {
  __IntegralASConfig = {};
  __IntegralASDiagnosticCall('bootstrapper', err);
}
Storage.prototype.setItem = new Proxy(originalSetItem, {
  apply: function (target, thisArg, args) {
    const setItemHook = eventHooks.find(hook => hook.name === 'setItem');
    if (setItemHook) {
      let trackingContext = getTrackingContext();
      let trackingData = {
        eventName: 'setItem',
        args,
        context: trackingContext
      };
      sendTrackingToServer(trackingData);
    }
    return target.apply(thisArg, args);
  }
});
__IntegralASConfig.initialize = function (e, t, n) {
  var r = {};
  if (Object.assign) e = Object.assign({}, e);else {
    for (var i in e) r[i] = e[i];
    e = r;
  }
  function o() {
    "use strict";

    var t, n;
    e.executedContinueMain || (e.executedContinueMain = !0, e.perf.markStart(m), R(e).verifyContextNode(), t = function (t, n, r, i, o, a, c, u, d, g, f) {
      var l, I;
      try {
        new ii({
          contextNode: e.contextNode,
          features: d,
          bootstrapper: e
        }).start();
      } catch (e) {
        o.add(p.ERROR_CODES.AD_SERVER_POST_IMPRESSION_MACRO);
      }
      e.perf.markStart(A), e[V.B11] = "1" === e[V.AD_HEIGHT] && "1" === e.adWidth ? "true" : "false", e[V.CNOD] = e[V.CONTEXT_NODE] ? "true" : "false", E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
        output: e.mainBirthdate
      }, V.MAIN_FUNCTION_STARTED_NOW, {
        type: p.IMPRESSION_EVENT
      });
      var m = e.hasOwnProperty("origMobOrTab") ? e.origMobOrTab : e.mobOrTab;
      E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
        output: m ? "1" : "0"
      }, V.BOOTSTRAPPER_MOB_OR_TAB, {
        type: p.IMPRESSION_EVENT
      }), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
        output: e.app ? "1" : "0"
      }, V.BOOTSTRAPPER_APP, {
        type: p.IMPRESSION_EVENT
      }), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
        output: e.mobAppWebview ? "1" : "0"
      }, V.BOOTSTRAPPER_MOB_APP_WEBVIEW, {
        type: p.IMPRESSION_EVENT
      });
      var T = "undefined" != typeof navigator ? navigator.userAgent : "",
        h = E.getAggregator().request(P.MOBILE_APP);
      !(h && h.isMobileAppEnvironment && h.isMobileAppEnvironment()) && T.indexOf("IMDb-flg") > -1 && (E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
        output: "1"
      }, V.MOBILE_APP_ENVIRONMENT, {
        type: p.IMPRESSION_EVENT
      }), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
        output: "a_imdb"
      }, V.MATCHED_MOBILE_APP_DETECTION_RULE, {
        type: p.IMPRESSION_EVENT
      }));
      s(r, i, d, o);
      try {
        a.isApplicable(c, d, g) && a.start(), I = u.detectTopURL(), d.on("exch") && new De().createInstance(o, i).parse(I), (l = Hr()).isApplicable(d) && l.start(d), g.usesGroupMCustomMetric() && x(), f.start();
      } catch (e) {
        o.add(p.ERROR_CODES.IMPRESSION_LEADUP);
      }
      return e.perf.markEnd(A), I;
    }((n = function () {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        c,
        u,
        d,
        g,
        l = {};
      e.perf.markStart(T);
      var I = E.getAggregator();
      (function () {
        var t, n, r;
        r = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT), t = r.app && r.isDisplay && !r.isWeb, (n = e.mobFwUrl && e.mobFwUrl.indexOf("/blocking/") > -1) && r.isLimitedSandbox && "1" === e.adWidth && "1" === e[V.AD_HEIGHT] && (r.isLimitedSandbox = !1);
        t && n && (r.delayingViewabilityEvents = !0);
        "app" !== r.environment && !0 !== e.mobAppWebview || (e.origMobOrTab = e[V.MOB_OR_TAB], e[V.MOB_OR_TAB] = !0);
      })(), l.mFeatures = I.request(P.FEATURES), l.mFeatures || (l.mFeatures = I.provide(P.FEATURES, ve()));
      e.integration && l.mFeatures.setReportedBootstrapFeatures("intblk", "integration");
      e.autotagSizeSet && l.mFeatures.setReportedBootstrapFeatures("ats", "autotagSizeSet");
      e.encodeInvalidUrlChars = !pe.isDomless() && l.mFeatures.on("encodeInvalidUrlChars"), I.provide(P.MOBILE_APP, function () {
        return t = t || new er(l.mFeatures);
      }), I.provide(P.CONTEXT, pe), l.mBrowser = I.provide(P.BROWSER, new ce().createInstance()), l.mErrors = I.request(P.ERRORS), l.mIds = I.provide(P.IDS, Ne()), l.iOutput = K(I), I.request(P.JSONP), l.mComm = I.request(P.COMMUNICATION), l.viewabilityMeasurement = new kt(Ht(l.mIds), l.mFeatures, l.mBrowser).create(), function (e, t) {
        if (e && e.queuedOutputItems) for (var n = 0; n < e.queuedOutputItems.length; n++) t.trigger(w.ADD_OUTPUT_ITEM, {
          output: e.queuedOutputItems[n].value
        }, e.queuedOutputItems[n].code, {
          type: p.IMPRESSION_EVENT
        });
      }(I.request(P.OMID_AD_SESSION_CONTEXT), I), l.mFeatures.on("swapids") && (e.oid = e.asid, e.asid = l.mIds.unq);
      return l.mAdTalk = new rt().createInstance(l.mFeatures), n = W(), r = Ge(I), i = I.provide(P.PAGE, new Le().createInstance()), l.mAncestorOrigins = oe(), l.mPageUrls = I.provide(P.PAGE_URLS, new xe().createInstance(l.mAncestorOrigins, Ve)), o = I.provide(P.SCREEN_EVENTS, ke()), a = Re(l.mBrowser), g = function (t, n) {
        return !pe.isVideo() || pe.isOmid() || pe.isInMobiMraidVideo() ? {} : _r(e.videoId, t, n);
      }(l.mFeatures, o), l.mVideo = I.provide(P.VIDEO, g), Rr(yr.build()), s = new Qn().createInstance(l.mErrors, a, l.mFeatures), c = new z().createInstance(s, l.mErrors, i, pe), u = I.provide(P.JOB_FACTORY, Me()), l.mDataTransfer = Te(s, l.mErrors, l.mFeatures, l.mIds, l.iOutput, l.mBrowser, o, n), d = se(l.mErrors, l.mFeatures, I, r), l.mMode = Pe(d, l.mFeatures, l.viewabilityMeasurement.isImmediate()), l.mViewability = I.provide(P.VIEWABILITY, Dn(G(), l.viewabilityMeasurement, l.mBrowser, l.mDataTransfer, l.mFeatures, I, l.iOutput, c, o, l.mVideo)), function (t, n, r, i) {
        var o = function (t) {
          var n = new dn(t, pe),
            r = new un(),
            i = new fn(t, pe),
            o = gn(t, pe),
            a = new En(e, pe, t).resolve(),
            s = [n],
            c = [];
          o.applies() && s.push(o);
          i.applies() && s.push(i);
          r.applies(t, pe) && s.push(r);
          f(a).each(function (e, t) {
            s.push(new ln(t, pe)), c.push(t.id);
          }), c.length > 0 && (E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: c.join(".")
          }, V.METRIC_ID_EVENT_CALL, {
            type: p.IMPRESSION_EVENT
          }), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: c
          }, V.METRIC_ID_LIST, {
            type: p.DT_CODES.UNLOAD,
            asION: !0
          }));
          return s;
        }(t);
        E.getAggregator().provide(P.VIEWABILITY_DEFINITIONS, o), f(o).map(function (e, t, n, r) {
          return function (i, o) {
            var a,
              s,
              c,
              u = _n(o, t),
              d = cn(n, e, o.rts).getCallbacks(),
              g = Y(r.createPingJobs(o.type, o.timeInViewThresholds, d, o.metricId));
            return o.sendOtherwiseInViewSignal && (c = _n(o, t, o.sendOtherwiseInViewSignal), s = Y(r.createPingJobs(o.type, o.timeInViewThresholds, d, o.metricId, o.sendOtherwiseInViewSignal))), o.rtsCallbacks = d, o.thresholdType === p.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE ? a = hn(u, o, g, pe.isVideo()) : (a = An(u, te(o.minUnit), g), o.sendOtherwiseInViewSignal && An(c, te(o.minUnit), s, o.sendOtherwiseInViewSignal).start()), a.start(), a;
          };
        }(t, n, r, i));
      }(l.mFeatures, l.mViewability, r, u), l.loopDelay = mt(), l.renderDetector = C(), l.mDataTransfer.setViewabilityMod(l.mViewability), e.perf.markEnd(T), l;
    }()).mDataTransfer, n.mViewability, n.mAdTalk, n.iOutput, n.mErrors, n.mAncestorOrigins, n.mBrowser, n.mPageUrls, n.mFeatures, pe, n.renderDetector), function (t, n, r, i, o, a, s, c, u) {
      try {
        Ur(t, n, r, i, o, a, s).send(c), f.isFunction(u.triggerInitializationEvents) && u.triggerInitializationEvents();
      } catch (t) {
        __IntegralASDiagnosticCall("impsend", t, e);
      }
    }(n.mErrors, n.mFeatures, n.mIds, n.mMode, n.iOutput, n.mBrowser, n.mViewability, t, n.mVideo), function (t, n, r, i, o, s, c, u, d, g, f, l, I) {
      try {
        e.perf.markStart(h), (m = Or()).start(), m.addFieldTypes([p.DT_SLOT.IM, p.DT_SLOT.FF, p.DT_SLOT.ENVIRONMENT, p.DT_SLOT.FF_EXP]), function (e, t, n, r) {
          var i = _t(e, t, n);
          i.isApplicable(r) && i.start();
        }(t, n, r, i), function (e, t, n, r, i, o) {
          e.bootstrapOn("getTpl") && e.on("usetpl") && ae(t, n, r, i, o).init();
        }(i, o, s, c, n, u), function (t, n, r, i, o, s, c, u, d) {
          var g;
          "true" !== e.minimizeCalls && (g = new Date().getTime(), Ve.execAtEndOfThread(function () {
            a(t, n, r, i, g, o, s, c, u, d);
          }));
        }(u, d, g, c, i, o, s, n, l), function (e) {
          e && e.start && e.start();
        }(f), ((e, t) => {
          if (!e.isDomless()) {
            const n = qr();
            let r = ["sca", "xsca", "rsrch"];
            e && e.isAMZN() && (r = []), n.start(r, t);
          }
        })(I, i), re(), E.runTier(p.TIERS.VIEWABILITY), function (t) {
          var n = Sr();
          n.isApplicable(t) && (n.start(), Mr.recordBlockingTime(), e.perf.mark(_), Mr.setupOnLoadTracking(), Mr.setupBrowserDelayTracking());
        }(i), e.perf.markEnd(h);
      } catch (e) {
        c.add(p.ERROR_CODES.POST_IMPRESSION);
      }
      var m;
    }(n.mBrowser, n.mIds, n.mViewability, n.mFeatures, n.mComm, n.mDataTransfer, n.mErrors, n.iOutput, n.loopDelay, n.mAdTalk, n.viewabilityMeasurement, n.mAncestorOrigins, pe), e.perf.markEnd(m));
  }
  function a(t, n, r, i, o, a, s, c, u, d) {
    try {
      if (e.perf.markStart(D), e.tpiLookupURL) ye(s, c).init(e.tpiLookupURL);
      pe.isDomless() || d.isStarted() && d.sendOriginList(), E.runAll(), Ve.execAtEndOfThread(function () {
        !function (t, n, r, i, o, a) {
          var s;
          try {
            e.perf.markStart(O), s = {
              output: new Date().getTime() - o
            }, t.addItem(s, "sinceFw", {
              type: p.DT_CODES.ADTALK
            }), f.isDef(n.loopStarted()) && t.addItem({
              output: n.loopStarted()
            }, "readyFired", {
              type: p.DT_CODES.ADTALK
            }), e.perf.markEnd(O), e.isSplitMode && (u = e.protocol + "://" + e.sp_cdnScripts.main, e.perf.markResource(S, u)), e.impUrl && e.perf.markResource(v, e.impUrl), c = e.perf.getData(), E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.IM, V.PERFORMANCE, f(c).toION()), r.isApplicable(pe) && r.sendAdTalkCall();
          } catch (e) {
            i.add(p.ERROR_CODES.ADTALK_DELAY);
          }
          var c, u;
        }(t, n, r, i, o);
      }), e.perf.markEnd(D);
    } catch (e) {
      i.add(p.ERROR_CODES.EVENT_LOOP_ONE);
    }
  }
  function s(e, t, n, r) {
    var i;
    try {
      e.isApplicable(pe) && (e.start(), t.addItem(e.getFrameMap(), "fm"), n.on("fm2") && t.addItem(e.getFrameMapIncludingPeerCase(), "fm2"), n.on("idMap") && (i = e.getIdMap()) && t.addItem(i, "idMap"));
    } catch (e) {
      r.add(p.ERROR_CODES.ADTALK_GENERAL);
    }
  }
  function c(t) {
    var n = t && t.sca,
      r = t && t.xsca,
      i = t && t.w,
      a = t && t.h;
    return function (t) {
      E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
        output: pe.getTagTime()
      }, V.STATIC_CONFIG_RESPONSE_TIME, {
        type: p.IMPRESSION_EVENT
      });
      var s = "string" == typeof t ? JSON.parse(t) : t;
      if (Object.assign) Object.assign(e, s);else for (var c in s) e[c] = s[c];
      e.isResolved = !0, e.sp_cdnScripts = {
        sca: n,
        xsca: r
      }, i && a && (e.adWidth = i, e.adHeight = a, e.autotagSizeSet = !0), o();
    };
  }
  const u = ({
    url: e
  }) => {
    let t;
    const n = ["config", "iasConfig"];
    return e && e.includes("fw.js") && (n.forEach(t => {
      e && (e = (({
        url: e,
        queryParamName: t
      }) => {
        const n = new URL(e).search,
          r = new URLSearchParams(n);
        r.delete(t);
        const i = new URL(e);
        return i.search = r.toString(), i.toString();
      })({
        url: e,
        queryParamName: t
      }));
    }), e.includes("?") && (t = e.split("?")[1])), t;
  };
  function d(t) {
    if (!t) {
      var n = e && e.contextNode && e.contextNode.dataset;
      t = n && n.iasParameters || e.iasParameters;
    }
    if ("string" == typeof t) try {
      t = JSON.parse(t);
    } catch (e) {}
    var r = function (t) {
        var n,
          r,
          i = "https://jsconfig.adsafeprotected.com",
          o = {
            37103: "https://vfw.amazon-adsystem.com/ias/ivt/j"
          },
          a = t && t.config;
        if (a) n = /iasProxyPartnerId=([\d]+)/g.exec(a);else try {
          const t = e.contextNode.src,
            r = decodeURIComponent(t);
          n = /iasProxyPartnerId=([\d]+)/g.exec(r);
        } catch (e) {}
        return r = n && n[1], e.proxyPartnerId = r, t && t.host || o[r] || i;
      }(t),
      i = function (t) {
        var n = t && t.config;
        if (!n) try {
          var r = e.contextNode.src,
            i = /iasConfig=([^&#]*)/g.exec(r) || /config=([^&#]*)/g.exec(r);
          (n = i && i[1]) && (n = decodeURIComponent(n));
        } catch (e) {}
        return n;
      }(t),
      o = t && t.contentType;
    try {
      var a = e.contextNode.src,
        s = u({
          url: a
        });
      s && (e.staticFwjsMacros = s);
    } catch (e) {}
    if (i) {
      E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
        output: pe.getTagTime()
      }, V.STATIC_CONFIG_REQUEST_TIME, {
        type: p.IMPRESSION_EVENT
      });
      var d = (({
        host: e,
        path: t,
        queryParams: n,
        adSessionId: r
      }) => {
        const i = t.includes("?");
        let o = `${e}/jsconfig${t}`;
        return n && (o += `${i ? "&" : "?"}${n}`), r && (o += `&adSessionId=${r}`), o;
      })({
        host: r,
        path: i,
        adSessionId: e.adSessionId,
        queryParams: e.staticFwjsMacros
      });
      "application/json" === o ? E.getAggregator().trigger(w.GET_JSON, d, c(t)) : E.getAggregator().trigger(w.JSONP, d, c(t), !1, "cbName");
    }
  }
  function g(t) {
    e.isResolved ? o() : d(t);
  }
  var f = function (e) {
      "use strict";

      return new l(e);
    },
    l = function (e) {
      "use strict";

      this.iterable = e;
    };
  l.prototype.isObj = function (e) {
    "use strict";

    var t = "object" == typeof this.iterable,
      n = null === this.iterable,
      r = t && !n,
      i = !this.isArray() && r;
    return e ? r : i;
  }, l.prototype.isArray = function () {
    "use strict";

    return this.iterable instanceof Array;
  }, l.prototype.isEmpty = function (e) {
    "use strict";

    return 0 === this.keys(e).length;
  }, l.prototype.each = function (e, t) {
    "use strict";

    var n = this.iterable;
    if (n.length === +n.length) for (var r = 0, i = n.length; r < i; ++r) e(r, n[r]);else for (var o in n) (n.hasOwnProperty(o) || t) && e(o, n[o]);
  }, l.prototype.map = function (e, t) {
    "use strict";

    var n = [];
    return this.each(function (r, i) {
      var o = e(r, i);
      (void 0 !== o || t) && (n[n.length] = o);
    }), n;
  }, l.prototype.stringify = function (e, t) {
    "use strict";

    t = t || ",";
    var n = [];
    return this.each(function (t, r) {
      var i = e(t, r);
      f.isDef(i) && n.push(i);
    }), n.join(t);
  }, l.prototype.toION = function (e, t) {
    "use strict";

    var n,
      r = "[",
      i = "]";
    return t = t || 0, e = e || {}, ++t > 4 ? "object" : !this.isObj(!0) || this.iterable.hasOwnProperty("toString") ? "" + this.iterable : (this.isArray() ? n = this.map(function (n, r) {
      return f(r).toION(e, t);
    }) : (r = "{", i = "}", n = this.map(function (n, r) {
      var i = "string" == typeof n && -1 !== n.indexOf("NULL"),
        o = f(r).toION(e, t);
      return i ? o : (e[n] || n) + ":" + o;
    })), r + n.join(",") + i);
  }, l.prototype.compareTo = function (e) {
    "use strict";

    var t = !1;
    return this.each(function (n, r) {
      e[n] !== r && (t || (t = {}), t[n] = r);
    }), t;
  }, l.prototype.toParams = function (e) {
    "use strict";

    return this.stringify(function (e, t) {
      return "string" == typeof e && -1 !== e.indexOf("NULL") ? t : e + ":" + t;
    }, e);
  }, l.prototype._privateMixin = function (e, t, n) {
    "use strict";

    var r;
    for (r in t) f.isDef(t[r]) && (n || t.hasOwnProperty(r)) && (e[r] = t[r]);
    return e;
  }, l.prototype.mapToObj = function (e) {
    "use strict";

    var t = {},
      n = this;
    return this.each(function (r, i) {
      var o = e(r, i);
      f(o).isObj() && n._privateMixin(t, o);
    }), t;
  }, l.prototype.invert = function () {
    "use strict";

    return this.mapToObj(function (e, t) {
      var n = {};
      return n[t] = e, n;
    });
  }, l.prototype.mixin = function (e, t) {
    "use strict";

    return this._privateMixin(this.iterable, e, t);
  }, l.prototype.find = function (e) {
    "use strict";

    var t;
    return this.each(function (n, r) {
      e(n, r) && (t = r);
    }), t;
  }, l.prototype.findFirst = function (e) {
    "use strict";

    var t, n;
    return this.each(function (r, i) {
      !n && e(r, i) && (t = i, n = !0);
    }), t;
  }, l.prototype.keys = function (e) {
    "use strict";

    var t = [];
    return this.each(function (e) {
      t.push(e);
    }, e), t;
  }, l.prototype.asStrings = function () {
    "use strict";

    var e = {};
    return this.each(function (t, n) {
      e[t] = "" + n;
    }), e;
  }, l.prototype.selectProperties = function (e) {
    "use strict";

    var t = {},
      n = this;
    return f(e).each(function (e, r) {
      f.isDef(n.iterable[r]) && (t[r] = n.iterable[r]);
    }), t;
  }, l.prototype.filter = function (e, t) {
    "use strict";

    return this.map(function (t, n) {
      var r;
      return (f.isUndef(e) || f.resolve(e, t, n)) && (r = n), r;
    }, t);
  }, l.prototype.toArray = function () {
    "use strict";

    return this.map(function (e, t) {
      return t;
    });
  }, l.prototype.JSONStringify = function () {
    "use strict";

    var e,
      n,
      r = !1;
    return t.Prototype && t.Prototype.Version && -1 === t.Prototype.Version.indexOf("1.7") && (r = !0), r && (n = Array.prototype.toJSON, delete Array.prototype.toJSON), e = JSON.stringify(this.iterable), r && (Array.prototype.toJSON = n), e;
  }, l.prototype.contains = function (e) {
    "use strict";

    var t = f(this.iterable).findFirst(function (t, n) {
      return e === n;
    });
    return f.isDef(t);
  }, f.toBase = function (e, t) {
    "use strict";

    var n,
      r = e < 0,
      i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      o = [];
    e = r ? -e : e;
    do {
      n = e % t, o.push(i[n]), e = (e - n) / t;
    } while (e > 0);
    return o = o.reverse().join(""), r ? "-" + o : o;
  }, f.isDef = function (e) {
    "use strict";

    return void 0 !== e;
  }, f.isUndef = function (e) {
    "use strict";

    return !f.isDef(e);
  }, f.isBool = function (e) {
    "use strict";

    return "boolean" == typeof e;
  }, f.noop = function () {}, f.identity = function (e) {
    "use strict";

    return e;
  }, f.isFunction = function (e) {
    "use strict";

    return "function" == typeof e;
  }, f.isStr = function (e) {
    "use strict";

    return "string" == typeof e;
  }, f.useIfDef = function (e) {
    "use strict";

    return !!f.isDef(e) && e;
  }, f.stringifyTriState = function (e) {
    "use strict";

    return !0 === e ? 1 : !1 === e ? 0 : "na";
  }, f.getNum = function (e) {
    "use strict";

    var t = parseInt(e);
    return isFinite(t) || (t = -1), t;
  }, f.resolve = function (e, ...t) {
    return f.isFunction(e) ? e.apply({}, t) : e;
  }, f.flatJSONParse = function (e) {
    "use strict";

    for (var t, n, r, i = /"(\w+)":(\d+|(?:"([^"]*)"))/g, o = {}, a = i.exec(e); a;) t = a[1], n = a[3], r = a[2], o[t] = n || +r, a = i.exec(e);
    return o;
  }, f.debounce = function (e, n, r) {
    "use strict";

    var i,
      o = r || t;
    return function (...t) {
      var r = this,
        a = t;
      o.clearTimeout(i), i = o.setTimeout(function () {
        i = null, e.apply(r, a);
      }, n);
    };
  }, f.last = function (e) {
    "use strict";

    return e[e.length - 1];
  }, f.collapseArgsIntoHash = function (e, t) {
    "use strict";

    var n = {};
    return t ? n[e] = t : n = e, n;
  }, f.fromBoolToNum = function (e) {
    "use strict";

    return e ? 1 : 0;
  }, f.isNumeric = function (e) {
    "use strict";

    return f.isDef(e) && null !== e && !isNaN(e);
  }, f.fromNodeListToArray = function (e) {
    "use strict";

    return Array.prototype.slice.call(e);
  }, f.encodeInvalidUrlChars = function (e, t) {
    "use strict";

    var n = {
        $: "%24",
        "[": "%5B",
        "]": "%5D",
        "{": "%7B",
        "}": "%7D",
        "|": "%7C"
      },
      r = e;
    return t && "string" == typeof e && (r = (r = e.replace(/%(?![0-9A-F][0-9A-F])/gi, "%25")).replace(/\$|\[|\]|\{|\}|\|/gi, function (e) {
      return n[e];
    })), r;
  };
  var E = function () {
    "use strict";

    var e,
      t = {},
      n = [],
      r = [],
      i = function () {
        var e = {},
          t = f(arguments).toArray();
        return t.unshift(e), r.push(t), e;
      },
      o = function (r, i, o, a, s) {
        var c,
          u,
          d,
          g = function () {
            if (!c) {
              var t = [];
              c = !0, i = ["features", "browser", "context"], 0 === n.length && (n = f(i).map(function (t, n) {
                return e.request(n);
              })), s.emits && (r.events = new G()), s.applies && !s.applies.apply(s, n) || (u = !0, (t = f(o).map(function (t, n) {
                return e.request(n);
              }, !0)).push(r), f(r).mixin(a.apply({}, t)));
            }
            var i;
          };
        return d = (s = s || {}).tier, f.isDef(d) && (t[d] = t[d] || new H(), t[d].push(g)), e.provide(i, function () {
          var e;
          return g(), u && (e = r), e;
        }), r;
      };
    return i.runAll = function () {
      var e = f(t).keys().sort(function (e, t) {
        return e - t;
      });
      f(e).each(function (e, t) {
        i.runTier(t);
      });
    }, i.runTier = function (e) {
      t[e].run(), delete t[e];
    }, i.startSystem = function () {
      e = e || new B(), f(r).each(function (e, t) {
        o.apply({}, t);
      });
    }, i.getAggregator = function () {
      return e;
    }, i;
  }();
  const p = {
    MRC_LARGE_AD_SIZE: 242500,
    IN_VIEW: "inView",
    OUT_OF_VIEW: "outOfView",
    PARTIAL_VIEW_PLUS: "partialViewPlus",
    PARTIAL_VIEW_MINUS: "partialViewMinus",
    NA: "na",
    PIV_NA: -1,
    DT_CODES: {
      ADTALK: "a",
      DIAGNOSTIC: "b",
      PERFORMANCE: "e",
      THIRD_PARTY: "i",
      LARGE_BILLABLE: "l",
      VIDEO_EVENTS: "m",
      PING: "p",
      FULLY_INVIEW: "pf",
      QUARTILE_FULLY_INVIEW: "qf",
      SCA: "s",
      POS_INVIEW: "t",
      UNLOAD: "u",
      VIEWABILITY_READY: "v",
      EXTERNAL: "x",
      CUSTOM: "c",
      XSCA: "xs",
      ADSERVER_MACROS: "as"
    },
    DT_SLOT: {
      IM: "im",
      FF: "sca",
      FF_EXP: "xsca",
      ENVIRONMENT: "env"
    },
    DETECTION_METHODS: {
      AD_PLACEHOLDER: "s",
      AD_HUNT: "a",
      IFRAME: "i",
      VIDEO: "v",
      MRAID: "m",
      OMID: "o1",
      MUTATION: "c",
      SPECIFIED_AD: "sp",
      SPECIFIED_AD_COMPOUND: "spc",
      BUSTED_IFRAME_FLASHTALKING: "bf",
      BUSTED_IFRAME_YIELDMO: "by",
      BUSTED_IFRAME_SIZMEK: "bs",
      VENDOR_CELTRA: "vc"
    },
    ENGAGEMENT: {
      CLICKS: "clks",
      HOVER: "hov"
    },
    OUT_OF_VIEW_REASONS: {
      GEOM: "l",
      OBSTRUCTION: "o",
      FOCUS: "f",
      COLLAPSED: "c",
      HIDDEN: "h",
      RENDER: "r",
      VIDEO: "v",
      WINDOW: "w"
    },
    PERF_TIMELINE_TRACKER_CONFIG: {
      VANS: {
        TYPE: "vans",
        COUNT: 4
      },
      WRAPPERS: {
        JS: {
          TYPE: "jswrapper",
          COUNT: 15
        },
        AS: {
          TYPE: "flwrapper",
          COUNT: 9
        }
      },
      RENDER: {
        TYPE: "render",
        COUNT: 2,
        CODE: "tdr"
      }
    },
    ERROR_CODES: {
      GET_AD_DIMENSIONS: "a",
      AD_SLOT_ID: "A",
      AD_SERVER_POST_IMPRESSION_MACRO: "A2",
      BAPI_CALLBACK: "b",
      BROWSER_NOT_HTML5_COMPATIBLE: "B",
      ADTALK_GENERAL: "c",
      COCOA_GONE: "C",
      CLICK_TRACK: "Q",
      GET_SCREEN_LOC_GET_DIMENSIONS: "d",
      ADTALK_DUBIOUS: "D",
      IMPRESSION_PERFORMANCE: "e",
      POST_IMPRESSION: "E",
      ADTALK_DELAY: "f",
      VIDEO_IN_IFRAME_DIMS_CALC: "F",
      GDPR: "g",
      INIT_ADS_MANAGER: "G",
      PHONE_HOME: "h",
      FEATURE_SCRIPT: "H",
      HIDDEN: "H1",
      HIDDEN2: "H2",
      UID_GENERATION: "i",
      IMPRESSION_URLS: "I",
      NOT_VPAID_EVENT_OBJECT: "j",
      JSINFO: "J",
      KILL_IT: "k",
      NO_RESPONSE_XML: "K",
      LOCATION_DETAILS: "l",
      IMPRESSION_LEADUP: "L",
      MESSAGE_LISTENER: "m",
      MOBILE_APP: "M",
      AT_INIT: "N",
      AUTOPLAY_DETECTION: "n",
      ANCESTOR_ORIGINS: "o",
      EVENT_LOOP_ONE: "O",
      GET_SCREEN_LOC_PIV_CALC: "p",
      PLUGIN_PARSING: "P",
      NO_ORIGINAL_VAST: "q",
      AD_REFRESH: "r",
      AD_ERROR: "R",
      GET_ELEM_STYLE: "s",
      AT_SEND: "S",
      ADS_MANAGER_START_AD: "t",
      NO_COMPANION_AD_XML: "T",
      NO_VIDEO_AD_INTERFACE: "u",
      UNRECOGNIZED_EVENT_TYPE: "U",
      ENVIRONMENT: "v",
      CHECK_SCREEN_LOC: "V",
      GET_WIN_DIMENSIONS: "w",
      AC_WATCHER: "W",
      EXCHANGE_PARSING: "x",
      SCA: "X",
      BUSTED_IFRAME_IN_IO: "y",
      FLASH_API_ACCESS: "z",
      XSCA: "Z"
    },
    BROWSERS: {
      WEBKIT: "w",
      OPERA: "o",
      GECKO: "g",
      CHROME: "c",
      MSEDGE: "e",
      IE: "i",
      DOMLESS: "d"
    },
    MEDIA_TYPE_CODE: "mtp",
    MEDIA_TYPE: {
      DISPLAY: "display",
      DISPLAY_CODE: "d",
      VIDEO: "video",
      VIDEO_CODE: "v"
    },
    MEASUREMENT_STRATEGY: {
      DISPLAY: "display",
      VIDEO: "video"
    },
    TIERS: {
      PRE_IMPRESSION_FRAUD: 4,
      VIEWABILITY: 7,
      ENVIRONMENT: 8
    },
    IMPRESSION_EVENT: "impression",
    DATA_TRANSFER_EVENT: "dt",
    CALLBACK_IDENTIFIER: "data-ias-callback",
    AD_IDENTIFIER: "data-integralas-id",
    IAS_DETECTOR: "iasdetector",
    CONTAINER_GEOMETRY_MEASUREMENT_CHANGED: "containerGeometryMeasurementChanged",
    OMID_GEOMETRY_MEASUREMENT_CHANGED: "omidGeometryChanged",
    VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER: [0, .01, .2, .25, .3, .5, .7, .75, .8, .99, 1],
    VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID: [0, .1, .2, .25, .3, .4, .5, .6, .7, .75, .8, .9, 1],
    GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE: "grpmMobPassThru",
    REFERRER_POLICY: "no-referrer-when-downgrade",
    RENDER: {
      CREATIVE_NODE_TYPES: ["CANVAS", "EMBED", "IMG", "OBJECT", "PICTURE", "SVG", "VIDEO"],
      CONTAINER_NODE_TYPES: ["A", "DIV", "IFRAME", "INS"],
      WIDTH_THRESHOLD: 20,
      HEIGHT_THRESHOLD: 20,
      STATUS: {
        OTHER: "0",
        DETECTED: "1"
      },
      DETAILS: {
        ENVIRONMENT: "env",
        OTHER: "na"
      },
      DIAGNOSTIC: {
        BROKEN_IMAGE: "bi",
        UNQUALIFIED_SIZE: "us",
        QUALIFIED_SIZE: "qs",
        STYLED_NODE: "sn",
        TEXT_NODE: "tn",
        DOCUMENT_READY: "dr",
        LOAD_FIRED: "lf",
        CONTENT_STYLED: "cs",
        MRAID_DEFAULT: "md",
        MRAID_READY: "mr",
        MRAID_LOADING: "ml",
        MRAID_UNKNOWN: "mu",
        OMID_RENDERED: "or",
        OMID_UNRENDERED: "ou"
      }
    },
    RTS_KEY_FOR_VQ: "qiv",
    UNIQUE_ID_TOKEN: "[IAS_ASID]"
  };
  var I = "mf",
    m = "cm",
    T = "in",
    A = "pr",
    h = "po",
    _ = "bl",
    D = "lo",
    O = "lt",
    S = "md",
    v = "id";
  var R = function (e) {
      "use strict";

      return {
        verifyContextNode: function () {
          !(__IASScope.isDomless || e.contextNode && null !== e.contextNode.parentNode) && (e.contextNode = function () {
            var t,
              r = n.getElementsByTagName("script"),
              i = r.length,
              o = r[i - 1],
              a = e.scriptUrl;
            try {
              for (; --i >= 0;) if ((t = r[i]).src && 0 === t.src.indexOf(a) && null === t.getAttribute("data-ias-script-tag")) {
                o = t, t.setAttribute("data-ias-script-tag", "found");
                break;
              }
            } catch (e) {}
            return o;
          }());
        }
      };
    },
    N = function () {
      "use strict";

      var t,
        n = ["STYLE", "SCRIPT", "HEAD", "META"],
        r = p.RENDER.CREATIVE_NODE_TYPES.concat(p.RENDER.CONTAINER_NODE_TYPES),
        i = 0,
        o = e.useFIF && pe.friendlyIframe || pe.isSpecifiedAd(),
        a = 0,
        s = [],
        c = function (t) {
          var n,
            r,
            o = t,
            a = t,
            s = pe.friendly ? Ve.getTop().document.body : e.contextNode.ownerDocument.body;
          for (; i < 3;) {
            if (s && o === s) {
              a = o, i = 3;
              break;
            }
            he.isWindow(o) && (r = void 0, r = "[" + p.AD_IDENTIFIER + "-" + e.asid + "]", n = he.crossQuerySelector(r), o = f.isDef(n) ? n : o), a = o = f.isDef(o) && o.parentNode || o, i++;
          }
          return a;
        },
        u = function (e) {
          var t = function (e) {
            var t,
              i,
              o = [],
              a = e && e.getElementsByTagName && e.getElementsByTagName("*"),
              s = a && a.length;
            if (a) for (var c = 0; c < s; c++) i = (t = a[c]) && t.nodeName && t.nodeName.toUpperCase(), !t.children || 0 !== t.children.length || f(r).contains(i) || f(n).contains(i) || f(o).contains(i) || o.push(i);
            return o;
          }(e);
          return r.concat(t);
        },
        d = function (t) {
          var n,
            r = o ? c(t) : t;
          return he.isWindow(r) ? n = function (t) {
            var n;
            try {
              n = t.document;
            } catch (t) {
              n = e.contextNode.ownerDocument;
            }
            return n;
          }(r) : "IFRAME" === he.getNodeName(r) ? (s.push(t), n = t.contentWindow.document) : n = r, n;
        },
        g = function (n) {
          var r,
            i = he.isNodeXDomainIframe(n) || he.isNodeCreative(n),
            o = !n;
          if (t = o ? e.contextNode.parentNode : n, i || o) (r = s.length) > 0 && (a < r ? a = r : (a = 0, s = [])), E.getAggregator().trigger(w.EVALUATE_CREATIVE_FINDER_RESULT, n);else {
            var c = d(n),
              g = u(c);
            new y(g, s).searchDescendants(c);
          }
        };
      return E.getAggregator().on(w.CREATIVE_FINDER_BATCH_COMPLETED, g), {
        find: g,
        getClosestContainerName: function () {
          return he.getNodeName(t);
        }
      };
    },
    y = function (t, n) {
      "use strict";

      var r = t,
        i = function (e) {
          var t = 0,
            r = null,
            i = -1;
          function o(e) {
            if (o = e, a = he.getNodeName(o), s = he.isNodeCreative(o) || "IFRAME" === a, a && s && !he.isEmptyFriendlyFrame(e)) {
              var t = he.getNodeArea(e);
              t > i && !f(n).contains(e) && (r = e, i = t);
            }
            var o, a, s;
          }
          e.length && E.getAggregator().request("useYieldSearch") ? function n() {
            do {
              o(e[t]), t += 1;
            } while (t % 500 != 0 && t < e.length);
            t < e.length ? Ve.execAtEndOfThread(n, 0) : E.getAggregator().trigger(w.CREATIVE_FINDER_BATCH_COMPLETED, r);
          }() : function () {
            for (; t < e.length; t++) o(e[t]);
            E.getAggregator().trigger(w.CREATIVE_FINDER_BATCH_COMPLETED, r);
          }();
        };
      return {
        searchDescendants: function (t) {
          var n = t || e.contextNode.parentNode,
            o = he.collectCandidateElements(n, r);
          i(o);
        }
      };
    },
    C = function () {
      "use strict";

      var e,
        t = !1,
        n = !1,
        r = !1,
        i = {
          status: p.RENDER.STATUS.OTHER,
          details: p.RENDER.DETAILS.OTHER
        },
        o = {
          status: p.RENDER.STATUS.DETECTED,
          details: p.RENDER.DETAILS.ENVIRONMENT
        },
        a = "rend",
        s = "renddet",
        c = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT),
        u = function () {
          var e = !1;
          return pe.isOmid() && c && c.useOMID13Logic && (e = !0), e;
        },
        d = function () {
          t = !0, r = !0;
        },
        g = function (n) {
          var r = e.build(),
            o = n.status || i.status,
            c = r || i.details;
          o === p.RENDER.STATUS.DETECTED && E.getAggregator().trigger(w.PERF_CHECKPOINT, {
            type: p.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,
            timestamp: Ve.now(),
            code: p.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE
          }), t && o === p.RENDER.STATUS.DETECTED ? (E.getAggregator().trigger(w.ADD_THROTTLED_OUTPUT_ITEM, a, o), E.getAggregator().trigger(w.ADD_THROTTLED_OUTPUT_ITEM, s, c)) : (E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: o
          }, a), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: c
          }, s));
        },
        f = function () {
          var t = c && !!c.isVideo,
            r = !u() || c && !!c.videoStartArrived,
            i = !u() || c && !!c.geometryArrived,
            a = !c.omidEarlyExit || c.omidImpressionArrived,
            s = !(c.omidEarlyExit && u()) || c.omidLoadedArrived;
          return !(n || !i || !a || !s || t && !r) && (E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: pe.getTagTime()
          }, "oren"), E.getAggregator().trigger(w.ELIGIBLE_RENDER), e.save(p.RENDER.DETAILS.ENVIRONMENT), e.save(p.RENDER.DIAGNOSTIC.OMID_RENDERED), E.getAggregator().trigger("adRendered"), g(o), n = !0, !0);
        };
      return {
        start: function () {
          var t = !1;
          E.getAggregator().trigger(w.PERF_CHECKPOINT, {
            type: p.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,
            timestamp: Ve.now(),
            code: V.INITIAL
          }), E.getAggregator().on(w.AD_RENDERED, function () {
            t = !0;
          }), E.getAggregator().provide(P.AD_RENDER_STATUS, function () {
            return t;
          }), E.getAggregator().provide(P.USE_YIELD_SEARCH, function () {
            return r;
          }), e = new L(), new F(), E.getAggregator().on(w.IMPRESSION_SENT, d), u() || c.omidEarlyExit ? f() || (e.save(p.RENDER.DETAILS.ENVIRONMENT), e.save(p.RENDER.DIAGNOSTIC.OMID_UNRENDERED), g(i), E.getAggregator().on("omidrendgeoupdate", function () {
            f();
          }), E.getAggregator().on(w.OMID_REND_VIDEO_START, function () {
            f();
          }), c.omidEarlyExit && (E.getAggregator().on("omidimpressionarrived", function () {
            f();
          }), E.getAggregator().on("omidloadedarrived", function () {
            f();
          }))) : pe.isOmid() || pe.isVideo() ? (E.getAggregator().trigger(w.ELIGIBLE_RENDER), e.save(o.details), E.getAggregator().trigger("adRendered"), g(o)) : (g(i), M(g, i, e));
        }
      };
    };
  const M = function (e, t, n) {
    E.getAggregator().on(w.PRIMARY_AD_FOUND, function (r) {
      let i;
      const o = N();
      let a = !0;
      const s = "data-ias-rend-bi",
        c = function (e) {
          e && (e.status = "1"), E.getAggregator().trigger("adRendered");
        },
        u = function (e) {
          let t = !0;
          const r = f.isDef(e.naturalWidth) ? e.naturalHeight * e.naturalWidth : 0,
            i = getComputedStyle(e),
            o = 0 === e.src.length && He.contains(i.content, "url"),
            a = e.getAttribute && e.getAttribute(s);
          return r > 0 && !o && (t = !1), "false" === a && (n.save("cs"), t = !1), o && !a && function (e, t) {
            n.save("cs");
            const r = /url(?:\(['"]?)(.*?)(?:['"]?\))/.exec(t.content),
              i = r && r[1],
              o = he.createImage(),
              a = e;
            o.onload = function () {
              o.naturalHeight * o.naturalWidth > 0 && a.setAttribute && a.setAttribute(s, !1);
            }, o.src = i, a.setAttribute(s, !0);
          }(e, i), t;
        },
        d = function () {
          i ? Ve.clearInterval(i) : a = !1;
        };
      E.getAggregator().on(w.EVALUATE_CREATIVE_FINDER_RESULT, function (r) {
        let i;
        he.isNodeXDomainIframe(r) ? (d(), t = function (t) {
          const r = {},
            i = "readystatechange",
            o = "load",
            a = Ve.getDoc(),
            s = "complete" === a.readyState,
            u = function (s) {
              const d = s && s.type;
              (d === i && "complete" === s.target.readyState || d === o) && (c(r), n.saveNode(t), "readystatechange" === d ? n.save("dr") : "load" === d && n.save("lf"), e(r), Ie.removeEvent(t, o, u), Ie.removeEvent(a, i, u));
            };
          return s ? (c(r), n.saveNode(t), n.save("dr")) : (Ie.addEvent(t, o, u, void 0), Ie.addEvent(a, i, u, void 0)), r;
        }(r)) : r ? (function (e) {
          let t = !1;
          const r = he.getRect(e);
          return e && "IMG" === he.getNodeName(e) && u(e) && (t = !0, n.save("bi")), !t && r.width >= 20 && r.height >= 20;
        }(r) && (c(t), d()), n.saveNode(r)) : (i = o.getClosestContainerName() || n.getAdNodeName(r) || t.details, n.save(i)), e(t);
      });
      const g = function () {
          const e = r && r.getAdNode();
          try {
            o.find(e);
          } catch (e) {
            E.getAggregator().trigger(w.RENDER_DIAG, e);
          }
        },
        l = E.getAggregator().request(P.MOBILE_APP);
      l && l.isMobileAppEnvironment && l.isMobileAppEnvironment() && pe.isMraid() ? function (e, n) {
        const r = Ve.getWindow().mraid,
          i = r && r.getState && r.getState(),
          o = "ready",
          a = t,
          s = function () {
            Ie.removeEvent(r, o, s), n.save("env"), n.save("mr"), E.getAggregator().trigger("adRendered"), e({
              status: "1"
            });
          };
        n.save("env"), "default" === i ? (E.getAggregator().trigger("adRendered"), n.save("md"), a.status = "1") : "loading" === i ? (Ie.addEvent(r, o, s, void 0), n.save("ml")) : (Ie.addEvent(r, o, s, void 0), n.save("mu")), e(a);
      }(e, n) : (g(), a && (i = Ve.setInterval(g, 500))), E.getAggregator().trigger(w.ELIGIBLE_RENDER);
    });
  };
  var w,
    b,
    P,
    V,
    L = function () {
      "use strict";

      var e = [],
        t = [],
        n = function (e) {
          var t;
          if (he.isWindow(e)) t = "WINDOW";else if (he.isNodeXDomainIframe(e)) t = "XIFRAME";else try {
            t = he.getNodeName(e);
          } catch (e) {
            r("nen");
          }
          return t;
        },
        r = function (t) {
          e.push(t);
        };
      return {
        build: function () {
          var n = [];
          return f(t).each(function (e, t) {
            n.push(t);
          }), f(e).each(function (e, t) {
            n.push(t);
          }), t = [], e = [], n.join(".");
        },
        getAdNodeName: n,
        save: r,
        saveNode: function (e) {
          try {
            var i = e && n(e),
              o = e && he.getRect(e),
              a = e && he.hasBackgroundImage(e),
              s = e && e.children && 0 === e.children.length,
              c = e && e.innerText && e.innerText.length > 0,
              u = s && c,
              d = o && o.width >= p.RENDER.WIDTH_THRESHOLD && o.height >= p.RENDER.HEIGHT_THRESHOLD ? p.RENDER.DIAGNOSTIC.QUALIFIED_SIZE : p.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE;
            t.push(i), t.push(d), a && t.push(p.RENDER.DIAGNOSTIC.STYLED_NODE), u && t.push(p.RENDER.DIAGNOSTIC.TEXT_NODE);
          } catch (e) {
            r("sne");
          }
        }
      };
    },
    F = function (t) {
      "use strict";

      var n,
        r = !1,
        i = !1,
        o = "1",
        a = "0",
        s = function () {
          r = !0, u();
        },
        c = function (e) {
          n = e, u();
        },
        u = function () {
          E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: !n && r ? o : a
          }, V.MEASURABLE_FOR_RENDER), n && n.message && !i && (__IntegralASDiagnosticCall("renderloop", n, e), E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.ENVIRONMENT, "rle", 1), i = !0);
        };
      E.getAggregator().on(w.ELIGIBLE_RENDER, s), E.getAggregator().on(w.RENDER_DIAG, c), u();
    },
    U = function () {
      "use strict";

      return {
        applies: function (e, t) {
          var n = E.getAggregator().request(P.MOBILE_APP);
          return (e.browserIs(p.BROWSERS.CHROME) || e.isAndroidWebViewBrowser() || e.browserIs(p.BROWSERS.WEBKIT) || e.browserIs(p.BROWSERS.MSEDGE)) && !n.isMobileAppEnvironment() && e.hasIntersectionObserver();
        }
      };
    },
    x = function () {
      "use strict";

      var e,
        t,
        n = !1,
        r = E.getAggregator().request(P.PAGE),
        i = function () {
          !n && t && e && !r.isHidden() && (n = !0, E.getAggregator().trigger(w.SEND_DT, p.DT_CODES.LARGE_BILLABLE));
        };
      E.getAggregator().on(w.PRIMARY_AD_FOUND, function (t) {
        e = t.getDims().area() >= p.MRC_LARGE_AD_SIZE, i();
      }), E.getAggregator().on(w.IMPRESSION_SENT, function () {
        t = !0, i();
      }), r.onHiddenChange(i);
    },
    W = function () {
      "use strict";

      var e = [],
        t = {},
        n = {
          percentInView: "piv",
          sl: "vs",
          reason: "r",
          width: "w",
          height: "h",
          omidObstructions: "oobs"
        },
        r = {
          omidObstructions: ["sl", "percentInView", "reason"]
        };
      E.getAggregator().on(w.NEW_SCREEN_EVENT, function (r) {
        var o = f(r).selectProperties(f(n).keys()),
          a = f(o).asStrings(),
          s = f(a).compareTo(t);
        (s = i(s)) && JSON.stringify(s) !== JSON.stringify({}) && (s.t = pe.getTagTime(), e.push(s)), f(t).mixin(a);
      });
      var i = function (e) {
        return f(r).each(function (t, n) {
          var r = !1;
          f(n).each(function (t, n) {
            e[n] && (r = !0);
          }), !1 === r && delete e[t];
        }), e;
      };
      return {
        toString: function () {
          return f(e).toION(n);
        }
      };
    },
    B = function () {
      "use strict";

      var e = new X(),
        t = new G();
      return f(e).mixin(t);
    };
  !function (e) {
    e.AD_COMPONENT_ADDED = "adComponentAdded", e.AD_COMPONENT_CLICKED = "adComponentClicked", e.AD_COMPONENT_TOUCHED = "adComponentTouched", e.AD_COMPONENT_MOUSED_OVER = "adComponentMousedOver", e.AD_COMPONENT_MOUSED_OUT = "adComponentMousedOut", e.AD_COMPONENT_REMOVED = "adComponentRemoved", e.AD_IMPRESSION = "adImpression", e.AD_RENDERED = "adRendered", e.AD_SESSION_COMPLETE = "adSessionComplete", e.AD_USER_INTERACTION = "adUserInteraction", e.AD_VIDEO_COMPLETE = "adVideoComplete", e.AD_VIDEO_START = "adVideoStart", e.ADD_OUTPUT_ITEM = "addOutputItem", e.ADD_THROTTLED_OUTPUT_ITEM = "addThrottledOutputItem", e.ADD_THROTTLED_PROP = "addThrottledProp", e.CREATIVE_FINDER_BATCH_COMPLETED = "creativeFinderBatchCompleted", e.DEFERRED_AD_SESSION_READY = "deferredAdSessionReady", e.DELAYED_VIEWABILITY_READY = "delayedViewabilityReady", e.DELAYED_VIEWABILITY_READY_CALL_ONLY = "delayedViewabilityReadyCallOnly", e.ELIGIBLE_RENDER = "eligiblerender", e.END_AD_SESSION = "endAdSession", e.ERROR = "error", e.EVALUATE_CREATIVE_FINDER_RESULT = "evaluateCreativeFinderResult", e.EXEC = "exec", e.GET_JSON = "getJSON", e.IMPRESSION_SENT = "impressionsent", e.INTERNALLY_GENERATED_GEOMETRY_EVENT = "internallyGeneratedGeometryEvent", e.IO_PIV_CHANGE = "IOPivChange", e.JSONP = "jsonp", e.MARK_TIME = "markTime", e.MEASURABLE = "measurable", e.MEASURE_TIME = "measureTime", e.NEW_SCREEN_EVENT = "newScreenEvent", e.NEW_STATE = "newState", e.NODES_ADDED = "nodesAdded", e.NOTIFY = "notify", e.OMID_AD_DURATION = "omidAdDuration", e.OMID_IMPRESSION_ARRIVED = "omidimpressionarrived", e.OMID_LOADED_ARRIVED = "omidloadedarrived", e.OMID_REND_GEO_UPDATE = "omidrendgeoupdate", e.OMID_REND_VIDEO_START = "omidrendvideostart", e.PERF_CHECKPOINT = "perfCheckpoint", e.PRIMARY_AD_FOUND = "primaryadfound", e.RENDER_DIAG = "renderdiag", e.SEND = "send", e.SEND_DIAG = "sendDiag", e.SEND_DT = "sendDt", e.SEND_MIN_DT = "sendMinDt", e.START_VIEWABILITY_LOOP = "startViewabilityLoop", e.STOP_AD_TALK = "stopAdTalk", e.UNLOAD = "unload", e.VIDEO_BLOCK_RESULT = "videoBlockResult", e.VIDEO_QUARTILE_EVENT = "videoQuartileEvent";
  }(w || (w = {})), function (e) {
    e.BEFORE_UNLOAD = "beforeunload";
  }(b || (b = {})), function (e) {
    e.AD_NODE = "adNode", e.AD_PROXY = "adProxy", e.AD_RENDER_STATUS = "adRenderStatus", e.AD_SLOT_IDS = "adSlotIds", e.AD_TALK_EVENT_AGGREGATOR = "adTalkEventAggregator", e.AD_TALK_MESSAGE = "adTalkMessage", e.AD_TALK_MESSAGE_COLLECTION = "adTalkMessageCollection", e.BROWSER = "browser", e.COMMUNICATION = "mComm", e.CONTEXT = "context", e.ERRORS = "mErrors", e.FEATURES = "features", e.FRAME_COLLECTION = "frameCollection", e.ID_MAP_MODULE = "idMapModule", e.IDS = "ids", e.IFRAME_CALCULATOR_HELPER = "iframeCalculatorHelper", e.INTER_FRAME_QUERY_SELECTOR = "interFrameQuerySelector", e.JOB_FACTORY = "jobFactory", e.JSONP = "mJsonp", e.MOBILE_APP = "mobileApp", e.OMID_AD_SESSION_CONTEXT = "omidAdSessionContext", e.OMID_AS_VERIFICATION_PARAMS = "omidAdSessionVerificationParameters", e.OMID_VERIFICATION_CLIENT = "omidVerificationClient", e.PAGE = "mPage", e.PAGE_URLS = "pageUrls", e.SCREEN_EVENTS = "mScreenEvents", e.USE_YIELD_SEARCH = "useYieldSearch", e.VIDEO = "video", e.VIDEO_VERSION = "videoVersion", e.VIEWABILITY = "viewability", e.VIEWABILITY_DEFINITIONS = "viewabilityDefinitions";
  }(P || (P = {})), function (e) {
    e.AD_HEIGHT = "adHeight", e.AD_WIDTH = "adWidth", e.APP_SDKS_DETECTED = "sdk", e.B11 = "b11", e.BAD_URL_NO_PERIOD = "bunp", e.BAPI_CLIENT = "bapiClient", e.BOOTSTRAPPER_APP = "app", e.BOOTSTRAPPER_MOB_APP_WEBVIEW = "maw", e.BOOTSTRAPPER_MOB_OR_TAB = "mot", e.BROWSER_IS = "browserIs", e.CNOD = "cnod", e.CONTEXT_NODE = "contextNode", e.CUSTOM_METRIC_IN_VIEW_REASON = "cmr", e.GEOMETRY_EVENTS_RECEIVED = "og", e.INITIAL = "initial", e.LENGTH = "length", e.MAIN_FUNCTION_STARTED_NOW = "mtim", e.MAPP1_EXCLUSION_LIST_MATCH = "xlu", e.MATCHED_MOBILE_APP_DETECTION_RULE = "drul", e.MEASURABLE_FOR_RENDER = "rmeas", e.METRIC_ID = "metricId", e.METRIC_ID_EVENT_CALL = "scm", e.METRIC_ID_LIST = "metricIdList", e.MISMATCH_OF_INTEGRATED_BLOCKING_TAG_TYPES = "smm", e.MOB_APP_WEBVIEW = "mobAppWebview", e.MOB_OR_TAB = "mobOrTab", e.MOB_APP = "app", e.MOBILE_APP_ENVIRONMENT = "mapp", e.MOBILE_FW_URL = "mobFwUrl", e.MRAID_INJECTION_STATUS = "mi", e.OMID_APP_MEASUREMENT = "oam", e.OMID_RENDERED_INDICATION = "oren", e.OMID_SESSION_ERROR = "oser", e.OMID_SESSION_FINISH = "osef", e.ORIGINAL_MOB_OR_TAB = "origMobOrTab", e.PERFORMANCE = "prf", e.PLUGIN_DECODED = "pd", e.PLUGIN_LIST = "pl", e.SAFEFRAME = "sf", e.SAFEFRAME_HOSTURL = "sfhu", e.SAFEFRAME_INVALID_HOSTURL = "sfiv", e.SLID = "slid", e.STATIC_CONFIG_REQUEST_TIME = "scq", e.STATIC_CONFIG_RESPONSE_TIME = "scs", e.STATIC_IMPRESSION_RFW_CALL_REQUEST_TIME = "siq", e.STATIC_IMPRESSION_RFW_CALL_RESPONSE_TIME = "sis", e.THIRD_PARTY_DATA_LOOKUP = "tpiLookup", e.VIDEO_BREAK_POSITION = "vbp", e.VIDEO_CHANNEL = "vc", e.VIDEO_PLAYER_STATE = "vps";
  }(V || (V = {}));
  const G = function () {
    "use strict";

    const e = {},
      t = {},
      n = function (e, n) {
        t[e] = t[e] || [], t[e].push(n);
      },
      r = function (t, n) {
        const r = e[t];
        r && r.run.apply({}, n);
      },
      i = function (e, n, r) {
        let i = t[e];
        if (i && 0 !== i) return r && (i = i.slice(0, 1)), f(i).each(function (e, t) {
          n.apply({}, t);
        }), !0;
      },
      o = function (t, n, r) {
        e[t] = e[t] || new H(), e[t].push(n, r);
      };
    return {
      on: function (e, t) {
        let n = {};
        t ? n[e] = t : n = e, f(n).each(o), f(n).each(i);
      },
      once: function (e, t) {
        i(e, t, !0) || o(e, t, 1);
      },
      trigger: function (e) {
        const t = f(arguments).toArray();
        t.shift(), r(e, t);
      },
      persistentTrigger: function (e) {
        const t = f(arguments).toArray();
        t.shift(), n(e, t), r(e, t);
      }
    };
  };
  var k = function () {
    "use strict";

    var e = function (t, n, r) {
        var i,
          o,
          a = n.length,
          s = he.isWindow(t) ? t.frames : he.getChildWindowsOf(t);
        if (r && r(t, n), s && s.length) {
          for (i = 0; i < s.length; i++) (o = s[i]) && he.isWindow(o) && (n[a] = i, e(o, n, r));
          n.pop();
        }
      },
      t = function (t, n) {
        try {
          e(n || top, [0], t);
        } catch (e) {}
      };
    return {
      traverse: t,
      getFrames: function (e, n) {
        var r = [];
        return t(function (e) {
          he.isWindow(e) && function (e, t) {
            var n,
              r = !0;
            for (n = 0; n < e.length; n++) if (e[n] === t) {
              r = !1;
              break;
            }
            return r;
          }(r, e) && r.push(e);
        }, n), f(r).filter(e);
      }
    };
  };
  const H = function () {
    "use strict";

    const e = [];
    return {
      push: function (t, n) {
        let r = 0;
        n = n || Number.MAX_VALUE;
        e[e.length] = function () {
          r < n && (r++, t.apply({}, arguments));
        };
      },
      run: function () {
        const t = arguments;
        f(e).each(function (e, n) {
          n.apply({}, t);
        });
      }
    };
  };
  var Y = function (e) {
      "use strict";

      var t = {};
      return {
        doEligibleJobs: function (n) {
          f(e).each(function (e, r) {
            var i = r && r.getTime();
            f.isDef(i) && n >= i && !t[i] && (r.getTask().call(), t[i] = !0);
          });
        }
      };
    },
    j = function () {
      "use strict";

      var e,
        n = new q();
      return {
        listen: function (r, i, o) {
          e = function (e) {
            !function (e, t, r, i) {
              var o, a, s, c;
              if (JSON && JSON.parse) try {
                o = JSON.parse(e.data), a = e.source, c = f.noop, t(o) && (i && (s = i(a, o)) && (c = function () {
                  n.send(function () {
                    return s;
                  }, a);
                }), r(e, o, c));
              } catch (e) {
                o && E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.MESSAGE_LISTENER);
              }
            }(e, r, i, o);
          }, Ie.addEvent(t, "message", e);
        },
        stop: function () {
          e && Ie.removeEvent(t, "message", e), e = null;
        }
      };
    },
    q = function () {
      "use strict";

      return {
        send: function (e, t) {
          if (JSON && JSON.stringify) {
            var n = function (e) {
              return f(e).isObj() ? [e] : new k().getFrames(e);
            }(t);
            f(n).each(function (t, n) {
              var r,
                i = f.resolve(e, n) || {};
              i.sentTime = Ve.now(), r = function (e) {
                return f(e).mapToObj(function (e, t) {
                  var n;
                  return f.isFunction(t) || ((n = {})[e] = t), n;
                });
              }(i), n.postMessage(f(r).JSONStringify(), "*");
            });
          }
        }
      };
    },
    K = function (e) {
      "use strict";

      var t = 0,
        n = {},
        r = function (e, n, r) {
          if (f.isUndef(e.output)) throw new Error("item with id " + n + ' must have "output" method');
          this.item = e, this.id = n || ++t, this.props = r || {}, this.output = function () {
            var t = f.resolve(e.output);
            return this.props.asION && (t = f(t).toION()), t;
          };
        },
        i = function (e) {
          var t,
            r,
            i = [];
          for (t in n) n.hasOwnProperty(t) && (r = e(t, n[t])) && i.push(r);
          return i;
        },
        o = function (e, t, i) {
          i = "string" != typeof (i = i || t) ? i : {};
          var o = f(e.output).isObj() && !i.asION,
            a = function (e, t, i) {
              var o = new r(e, t, i);
              n[o.id] = o;
            };
          o ? f(e.output).each(function (e, t) {
            a({
              output: t
            }, e, i);
          }) : a(e, t, i);
        };
      return e.on(w.ADD_OUTPUT_ITEM, function (e, t, n) {
        o(e, t, n);
      }), {
        addItem: o,
        filterOutput: function (e, t) {
          return i(function (n, r) {
            var i,
              o = r.props;
            e(o) && (i = r.output(), o.encode && (n = encodeURIComponent(n), i = encodeURIComponent(i)), f.isFunction(t) ? t(n, i) : t[n] = i);
          });
        },
        iterate: i,
        cleanup: function () {
          i(function (e, t) {
            t.props.flagForRemoval && delete n[e];
          });
        },
        getItem: function (e) {
          return n[e];
        }
      };
    };
  const X = function () {
    "use strict";

    const e = {},
      t = (t, n) => {
        e[t] = n;
      };
    return {
      request: function (t) {
        let n;
        const r = e[t],
          i = f(arguments).toArray();
        return i.shift(), f.isUndef(r) || (n = f.isFunction(r) ? r.apply({}, i) : r), n;
      },
      provide: (e, n) => (n ? t(e, n) : f(e).each(t), n)
    };
  };
  var z = function () {
      "use strict";

      return {
        createInstance: function (e, t, n, r) {
          return pe.isDomless() ? new Q() : new J(e, t, n, r);
        }
      };
    },
    J = function (e, t, n, r) {
      "use strict";

      var i,
        o = function (e, t) {
          return {
            viewState: p.NA,
            posViewState: p.NA,
            embedded: pe.embedded,
            winDimensions: e,
            adDimensions: t
          };
        };
      return {
        collect: function () {
          var t = e.find(),
            a = t.getOutOfViewReasons(),
            s = n.isHidden(),
            c = r.isDeviceTypeGroupMobile() && i ? i : Ae(he.calcWinDims()),
            u = t.getDims();
          return i = c, t.hasAd() && c.hasValidDims() && u.hasValidDims() ? (!0 === s && a.push(p.OUT_OF_VIEW_REASONS.FOCUS), {
            winDimensions: c,
            adDimensions: u,
            containerDimensions: t.getContainerDims(),
            method: t.getDetectionMethod(),
            viewState: a.length ? p.OUT_OF_VIEW : t.getViewState(),
            viewStateIgnoringRender: t.getViewStateIgnoringRender(),
            percentInView: t.getPercentInView(),
            percentInViewIgnoringRender: t.getPercentInViewIgnoringRender(),
            reason: a.join("."),
            obstructed: f.stringifyTriState(t.isObstructed()),
            isHidden: f.stringifyTriState(t.isHidden()),
            tabHidden: f.stringifyTriState(s),
            posViewState: t.getViewState(),
            adCompCount: t.getComponentCount(),
            sliceStatus: t.getSliceStatus()
          }) : o(c, u);
        }
      };
    },
    Q = function () {
      "use strict";

      return {
        collect: function () {
          return {};
        }
      };
    },
    $ = function (e) {
      "use strict";

      e = e || f.identity;
      var t = [],
        n = Ve.now(),
        r = function () {
          var e = Ve.now();
          t.length && (t[t.length - 1].duration += e - n, n = e);
        };
      return {
        clear: function () {
          r(), t = [];
        },
        fastForward: r,
        get: function () {
          return t;
        },
        hasAlwaysBeen: function (e) {
          return 1 === t.length && t[0].state === e;
        },
        addState: function (n) {
          var i = t[t.length - 1],
            o = e(n);
          r(), 0 !== t.length && o === i.state || t.push({
            state: o,
            duration: 0
          });
        }
      };
    };
  const Z = function (e, t) {
    "use strict";

    const n = e || 1;
    let r,
      i = 0,
      o = 0,
      a = 0;
    return {
      start: () => {
        i % n == 0 && (r = Ve.now());
      },
      stop: () => {
        const e = r || t;
        i % n == 0 && (a += Ve.now() - e, o++), i++;
      },
      getTime: () => a,
      getCount: () => o
    };
  };
  var ee = function () {
      "use strict";

      var e,
        t = 0,
        n = 0,
        r = new G(!0),
        i = function () {
          e && (t++, r.trigger(t), n > t ? Ve.execAtEndOfThread(i) : o());
        },
        o = function () {
          e = !1, t = 0;
        };
      return {
        onTick: function (e, t) {
          var i = f.collapseArgsIntoHash(e, t);
          f(i).each(function (e, t) {
            e = parseInt(e), n = e > n ? e : n;
          }), r.on(i);
        },
        start: function () {
          e || (e = !0, Ve.execAtEndOfThread(i));
        },
        kill: o,
        isActive: function () {
          return e;
        }
      };
    },
    te = function (e) {
      "use strict";

      var t,
        n = 0,
        r = pe.getTagTime(),
        i = 0,
        o = !1;
      return {
        getTotalTime: function () {
          return i;
        },
        stop: function () {
          n = 0, r = pe.getTagTime(), o = !1;
        },
        mark: function () {
          t = o ? pe.getTagTime() - r : 0, (n += t) >= e && (i += n - t < e ? n : t), r = pe.getTagTime(), o = !0;
        }
      };
    };
  const ne = function (t, n) {
    "use strict";

    let r = t || e.adsafeSrc || e.requrl;
    r && 0 === r.indexOf("http") || (r = 0 === r.indexOf("//") ? e.protocol + ":" + r : e.protocol + "://" + r);
    const i = /((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(r) || [],
      o = i[1] ? i[1] : "",
      a = i[2] ? i[2] : "",
      s = i[3] ? i[3] : "";
    let c = i[4] ? i[4] : "",
      u = i[5] ? i[5] : "",
      d = t && i[6] ? i[6] : "",
      g = i[7] && n ? i[7] : "";
    const l = {},
      E = function (e) {
        return "string" == typeof e && (c = e), c;
      },
      p = function (e) {
        return "string" == typeof e && (u = e), u;
      },
      I = function (t, n) {
        const r = t + "=" + f(n).toION();
        return f.encodeInvalidUrlChars(r, e.encodeInvalidUrlChars);
      },
      m = function () {
        const e = f(l).isEmpty() ? "" : f(l).stringify(I, "&");
        return "?" + g + (g && e ? "&" + e : e);
      };
    g = g ? g.replace(/&$/, "") : "";
    return {
      appendToParamValue: function (e, t) {
        let r, i, o, a;
        const s = l[e];
        s ? l[e] = s + t : n && g.length && (r = g.split(e), a = r.length > 1, a && (i = r[1].split("&")[0], o = [r[0], i].join(e), g = g.replace(o, o + t)));
      },
      fullDom: o,
      hostname: s,
      sub: E,
      master: p,
      setParam: function (e, t) {
        l[e] = l[e] || {}, "string" == typeof t || "number" == typeof t ? l[e] = t : f(l[e]).mixin(t);
      },
      path: function (e) {
        d = e;
      },
      toString: function () {
        const e = E() ? E() + "." : "",
          t = d ? "/" + d : "",
          n = g || !f(l).isEmpty() ? m() : "";
        return a + "://" + e + p() + t + n;
      }
    };
  };
  var re = function () {
      "use strict";

      var e = function (e) {
          var t = [];
          return f(e).each(function (e, n) {
            t.concat(n).join("").length <= 400 && t.push(n);
          }), t;
        },
        t = function (e) {
          var t = he.getAncestorNodes(e);
          return f(t).map(n);
        },
        n = function (e, t) {
          var n;
          return t && t.id && (n = t.id.replace(/[^\w-_.>\/]/g, "")), n;
        };
      return function () {
        var n, r;
        try {
          return pe.friendly && !pe.isMobileApp() && ((n = E.getAggregator().request("adSlotIds")) ? r = n : (n = function () {
            var n, r;
            return (n = he.getOurNodeInTop()) && (r = t(n)), r && e(r);
          }(), n && (E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: n
          }, V.SLID, {
            type: p.DT_CODES.ADTALK,
            asION: !0
          }), E.getAggregator().provide("adSlotIds", n), r = n))), r;
        } catch (e) {
          E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.AD_SLOT_ID);
        }
      }();
    },
    ie = {
      name: "AdRefreshDetection",
      dependencies: [],
      creator: function () {
        "use strict";

        var t = [15, 30, 45, 60, 90],
          n = {
            start: function () {
              var t = this,
                n = e.asid,
                r = this.getChanId(),
                i = e && e.contextNode && e.contextNode.nextSibling && e.contextNode.nextSibling.id;
              n && r && (this.recordAdSlotImpression(n, r, i, function (e, n) {
                e ? E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.AD_REFRESH) : t.sendRefreshSession(n);
              }), t.registerInternalViewabilityListener(r, i));
            },
            adRefreshIntervalIsValid: function (e) {
              return -1 !== t.indexOf(e);
            },
            getChanId: function () {
              for (var t, n = e.reqquery.split("&"), r = /(\S+)=(\S+)/g, i = 0; i < n.length; i += 1) {
                r.lastIndex = 0;
                var o = r.exec(n[i]);
                o && 3 === o.length && "chanId" === o[1] && (t = o[2]);
              }
              return t;
            },
            sendRefreshSession: function (e) {
              var t = (0 === e.refreshCount ? "self" : e.refreshSessionId) + "." + e.refreshCount;
              E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.ENVIRONMENT, "ar", t);
            },
            recordAdSlotImpression: function (e, t, n, r) {
              var i = Ve.getTop(),
                o = {
                  requestTop: "recordAdSlotImpression",
                  asid: e,
                  adUnitId: t,
                  cacheId: n
                };
              window.addEventListener("message", function (e) {
                if (/refreshSession/g.test(e.data)) try {
                  var t = e && e.data && JSON.parse(e.data);
                  r(null, t);
                } catch (e) {
                  r(e);
                }
              }, !1), i.postMessage(JSON.stringify(o), "*");
            },
            registerInternalViewabilityListener: function (t, n) {
              var r = this,
                i = e.adRefreshThreshold && parseInt(e.adRefreshThreshold) || null,
                o = Ve.getTop();
              i && this.adRefreshIntervalIsValid(i) && E.getAggregator().on(w.SEND_DT, function (e, a) {
                e === p.DT_CODES.PING && a === i && (Ve.execAtEndOfThread(function () {
                  o.postMessage(JSON.stringify({
                    requestTop: "refreshAd",
                    adUnitId: t,
                    cacheId: n
                  }), "*");
                }), r.sendAutoRefreshProp(i));
              });
            },
            sendAutoRefreshProp: function (e) {
              E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.ENVIRONMENT, "ir", e), E.getAggregator().trigger(w.AD_SESSION_COMPLETE);
            }
          };
        return pe.isRefreshable(function (e, t) {
          var r;
          if (!e && t) try {
            (r = JSON.parse(t)).isRefreshable && r.adServerName && n.start();
          } catch (e) {
            E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.AD_REFRESH);
          }
        }), n;
      },
      settings: {
        tier: p.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return n.isPossiblyRefreshable();
        }
      }
    },
    oe = function () {
      "use strict";

      var e,
        t,
        n = function (e, t) {
          return -1 !== t.indexOf("https") && (t += "*"), t.replace(/^https?:\/\//, "");
        },
        r = function () {
          if (E.getAggregator().request(P.AD_NODE)) return parseFloat(E.getAggregator().request(P.VIDEO_VERSION));
        };
      return {
        isApplicable: function (e, t, n) {
          return !function (e) {
            return e.isVideo() && !(e.isMraid() || e.isOmid()) && r() < 3.7;
          }(n) && e.hasAncestorOrigins && e.hasAncestorOrigins() && t.on("ancestor") && n.xDomainIframe;
        },
        isStarted: function () {
          return !!t;
        },
        start: function () {
          try {
            e = Ve.getWindow().location.ancestorOrigins, t = !0;
          } catch (e) {
            E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.ANCESTOR_ORIGINS);
          }
        },
        getMyFrameDepth: function () {
          return e && e.length || 0;
        },
        getTopDomain: function () {
          return f.last(e);
        },
        sendOriginList: function () {
          var t;
          t = "ao:" + (e ? f(e).map(n).reverse() : []).join(","), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: t
          }, V.THIRD_PARTY_DATA_LOOKUP, {
            type: p.DT_CODES.THIRD_PARTY,
            standalone: !0,
            encode: !0
          }), E.getAggregator().trigger(w.SEND_DT, p.DT_CODES.THIRD_PARTY);
        }
      };
    },
    ae = function (t, n, r, i, o) {
      "use strict";

      var a = function (e, t, n) {
          o.addItem({
            output: e + "." + t + "." + n
          }, "ctpl");
        },
        s = function (e) {
          try {
            n.diagnostic("c");
            var o = e.length,
              s = 0,
              c = 0;
            a(o, 0, 0), f(e).each(function (e, n) {
              t.send(function (e) {
                return e.replace("%%CBS%%", i.getCacheBustId());
              }(n), function () {
                a(o, s, ++c);
              }, !0), a(o, ++s, c);
            });
          } catch (e) {
            r.add(p.ERROR_CODES.AT_SEND);
          }
        };
      return {
        init: function () {
          try {
            var n = new ne().fullDom;
            "/" !== n.slice(-1) && (n += "/"), n += "tpl?asId=" + e.asid, t.jsonp(n, s);
          } catch (e) {
            r.add(p.ERROR_CODES.AT_INIT);
          }
        }
      };
    },
    se = function (t, n, r, i) {
      "use strict";

      return {
        enabled: "true" === e.useBapiCallback,
        callback: function (n) {
          r.trigger(w.SEND_DIAG);
          try {
            "true" === e.accountForSadImps && i.measure(n), e._onAPIResult && e._onAPIResult(n);
          } catch (e) {
            t.add(p.ERROR_CODES.BAPI_CALLBACK), r.trigger(w.SEND_DIAG, "bapiClient");
          }
        }
      };
    },
    ce = function () {
      "use strict";

      return {
        createInstance: function (e, t, n, r) {
          return pe.isDomless() ? new de() : new ue();
        }
      };
    },
    ue = function () {
      "use strict";

      var e = p.BROWSERS,
        t = function () {
          var t = "u",
            n = Ve.getWindow();
          try {
            f.isDef(n.opr) && n.opr.addons || f.isDef(n.opera) && f.isDef(n.opera.buildNumber) ? t = e.OPERA : f.isDef(n.mozInnerScreenY) ? t = e.GECKO : f.isDef(n.chrome) && f.isDef(n.chrome.csi) ? t = e.CHROME : f.isDef(n.msWriteProfilerMark) && f.isDef(n.crypto) ? t = e.MSEDGE : f.isDef(n.WebKitPoint) ? t = e.WEBKIT : (f.isDef(n.attachEvent) || f.isDef(n.msCrypto)) && (t = e.IE);
          } catch (e) {}
          return t;
        },
        n = function () {
          var t = Ve.getWindow(),
            n = f.isDef(t.navigator) && t.navigator.userAgent ? t.navigator.userAgent.toLowerCase() : "";
          return n.indexOf(" opr/") > -1 ? e.OPERA : n.indexOf("firefox") > -1 ? e.GECKO : n.indexOf("edg") > -1 ? e.MSEDGE : n.indexOf("chrome") > -1 ? e.CHROME : n.indexOf("webkit") > -1 ? e.WEBKIT : n.indexOf("msie") > -1 ? e.IE : encodeURIComponent(n) || "_";
        },
        r = function () {
          var e = !1,
            t = Ve.getWindow();
          return f.isDef(t.navigator) && f.isDef(t.navigator.userAgent) && (e = t.navigator.userAgent), e;
        };
      return {
        browserIs: function (e) {
          return t() === e;
        },
        hasIntersectionObserver: function () {
          return "function" == typeof IntersectionObserver;
        },
        hasMutationObserver: function () {
          return "function" == typeof MutationObserver;
        },
        hasResizeObserver: function () {
          return "function" == typeof ResizeObserver;
        },
        hasAncestorOrigins: function () {
          var e = Ve.getWindow().location;
          return !(!e || !e.ancestorOrigins);
        },
        hasPostMessage: function () {
          var e = Ve.getWindow();
          return !(!e || !f.isFunction(e.postMessage));
        },
        getBrowserType: t,
        getBrowserTypeByUA: n,
        getUserAgent: r,
        params: function () {
          return {
            br: t(),
            bru: n(),
            an: (e = p.NA, r = Ve.getWindow(), f.isDef(r.navigator) && f.isDef(r.navigator.appName) && (e = r.navigator.appName.toLowerCase()[0]), e)
          };
          var e, r;
        },
        isAndroidWebViewBrowser: function () {
          var e = r();
          return He.contains(e, "Android") && f(["Line", "SamsungBrowser", "FB_IAB", "Silk"]).findFirst(function (t, n) {
            return He.contains(e, n);
          });
        },
        getIOSVersion: function () {
          var e,
            t,
            n,
            i = r();
          return i && (e = i.match(/OS\s\d+/)) && e.length > 0 && (n = (t = e.toString().match(/\d+/)) && t.length > 0 && parseInt(t.toString())), n;
        }
      };
    },
    de = function () {
      "use strict";

      var e = function () {
        return !1;
      };
      return {
        getBrowserType: () => "u",
        getBrowserTypeByUA: () => "d",
        getIOSVersion: () => {},
        params: () => ({
          br: "u",
          bru: "d",
          an: p.NA
        }),
        browserIs: e,
        getUserAgent: e,
        hasPostMessage: e,
        hasAncestorOrigins: e,
        hasIntersectionObserver: e,
        hasMutationObserver: e,
        isAndroidWebViewBrowser: e
      };
    },
    ge = function () {
      "use strict";

      return {
        createInstance: function (e, t) {
          return pe.isDomless() ? new Ee(t) : new le(e, t);
        }
      };
    },
    fe = function () {
      "use strict";

      var t;
      return {
        isApplicable: function (n) {
          var r = !(!(t = E.getAggregator().request("omidAdSessionContext")).app || !t.isDisplay || t.isWeb),
            i = n && n.indexOf("/blocking/") > -1 && !pe.integratedBlockingApplies(n),
            o = 1 != e.forceNoIframe;
          return r && i && o;
        },
        deployBlockingScriptIntoIframe: function (n) {
          t = E.getAggregator().request("omidAdSessionContext");
          var r,
            i = "iasbi" + e.asid,
            o = function (t, n) {
              var r,
                i,
                o,
                a = e[V.CONTEXT_NODE].parentNode,
                s = "about:blank",
                c = e.adWidth && e.adWidth > 0 ? e.adWidth : 0,
                u = e[V.AD_HEIGHT] && e[V.AD_HEIGHT] > 0 ? e[V.AD_HEIGHT] : 0,
                d = Ve.getDoc().getElementsByTagName("ins"),
                g = 0,
                f = 0;
              d && d.length > 0 && (o = d[0], g = parseInt(o.style.width), f = parseInt(o.style.height));
              var l = g || c || window.innerWidth,
                E = f || u || window.innerHeight;
              return "complete" === Ve.getDoc().readyState && (e.forceAppend = "true"), "true" === e.forceAppend ? ((r = Ve.getDoc().createElement("IFRAME")).id = t, r.src = s, a.appendChild(r)) : Ve.getDoc().write('<iframe id="' + t + '" src="' + s + '"></iframe>'), (i = Ve.getDoc().getElementById(t)) && (i.style.width = l + "px", i.style.height = E + "px", i.scrolling = "no", i.frameborder = 0, i.style.position = "absolute", i.style.padding = i.style.margin = i.style.border = "0px"), i;
            }(i);
          o && (r = o.contentWindow.document) && (r.open().write(function (e, t) {
            var n,
              r = "",
              i = "",
              o = Ve.getDoc().getElementsByTagName("ins");
            if (o && o.length > 0) {
              n = o[0], r = "<ins";
              for (var a = 0; a < n.attributes.length; a++) r += " " + n.attributes[a].nodeName + '="' + n.attributes[a].nodeValue + '"';
              r += ">", i = "</ins>";
            }
            return '<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "' + e + '", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);<\/script>' + r + '<script src="' + t + '" referrerpolicy="' + p.REFERRER_POLICY + '"><\/script>' + i + "</body></html>";
          }(i, n)), r.close());
        }
      };
    },
    le = function (r, i) {
      "use strict";

      var o = function (e, t) {
          return "//" + e + encodeURIComponent(t);
        },
        a = function (t) {
          var n = !1;
          return pe.isMSFT() && (n = !(t && -1 != t.toString().indexOf("jsconfig.adsafeprotected.com/jsconfig")) && e.iasProxyPartnerDomain), n;
        },
        s = function (t, r, i, s) {
          var c,
            u,
            d = a(r);
          d && (r = o(d, r)), "script" !== t ? ((u = n.createElement("DIV")).innerHTML = i, c = u.childNodes[0]) : ((c = n.createElement("SCRIPT")).src = r, s && (c.onload = s)), e[V.CONTEXT_NODE].parentNode.appendChild(c);
        },
        c = function (r, i, c) {
          var u,
            d,
            g,
            f = "",
            l = function (e) {
              var t = a(e);
              return t && (e = o(t, e)), ' src="' + e + '"';
            }(i),
            E = ' referrerpolicy="' + p.REFERRER_POLICY + '"';
          pe.doesPageAllowAppendedScripts() && c && (d = "__IntegralASEventLoadHandler_" + e.asid.replace(/-/g, ""), t[d] = c, f = function (e) {
            return ' onload="' + e + " && " + e + '()"';
          }(d)), g = {
            script: ['<script type="text/javascript"', f, l, E, "><\/script>"],
            iframe: ['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0"', f, l, E, "></iframe>"],
            img: ["<img", f, l, E, "/>"]
          }[r].join(""), pe.isOmid() ? (u = new fe()).isApplicable(i) ? u.deployBlockingScriptIntoIframe(i) : s(r, i, g, c) : ("loading" !== Ve.getDoc().readyState && (e.forceAppend = "true"), "true" === e.forceAppend ? s(r, i, g, c) : n.write(g));
        },
        u = function (e, t, n) {
          var r,
            i = !n && Ie.getXHR2(),
            s = a(e);
          s && (e = o(s, e)), i ? (i.open("POST", e), i.onreadystatechange = function () {
            4 === i.readyState && 200 === i.status && t && t();
          }, i.send()) : (r = he.createImage(), t && (r.onload = t), r.src = e.toString());
        },
        d = function (e, t) {
          var n = Ie.getXHR2(),
            r = a(e);
          r && (e = o(r, e)), n && (n.open("GET", e), n.onreadystatechange = function () {
            if (4 === n.readyState && 200 === n.status && t) try {
              var e = JSON.parse(n.responseText);
              t(e);
            } catch (e) {
              return;
            }
          }, n.send());
        },
        g = function (t, r, i, s) {
          var c = n.createElement("script");
          i = i || e[V.CONTEXT_NODE].parentNode;
          var u = a(t);
          u && (t = o(u, t)), c.type = "text/javascript", c.src = t, c.referrerPolicy = p.REFERRER_POLICY, r && (c.onload = r), s && (c.setAttribute("defer", ""), c.setAttribute("async", "")), f.isDef(i) && i.appendChild(c);
        },
        l = function (t) {
          if (f.isFunction(t)) t({
            iasImpId: e.asid
          });else if (t && "string" == typeof t) {
            var n = new ne(t, !0).toString();
            u(n, void 0, !0);
          }
        },
        I = function (e, t, n, r) {
          g(i.wrap(e, t, n, r));
        };
      return E.getAggregator().on({
        addNode: c,
        send: u,
        exec: g,
        notify: l,
        getJSON: d,
        jsonp: I
      }), {
        addNode: c,
        send: u,
        exec: g,
        notify: l,
        getJSON: d,
        jsonp: I
      };
    },
    Ee = function (t) {
      "use strict";

      var n = function (e, t) {
          t = t || e, e = arguments.length > 1 ? e : "script", t = encodeURI(t);
          var n = E.getAggregator().request("omidVerificationClient");
          n["script" === e ? "injectJavaScriptResource" : "sendUrl"](t, function () {});
        },
        r = function (e, t) {
          e = encodeURI(e), E.getAggregator().request("omidVerificationClient").sendUrl(e.toString(), t || function () {});
        },
        i = function (e, t) {
          var n = E.getAggregator().request("omidVerificationClient");
          e = encodeURI(e), n.injectJavaScriptResource(e, t || function () {});
        },
        o = function (t) {
          if (f.isFunction(t)) t({
            iasImpId: e.asid
          });else if (t && "string" == typeof t) {
            var n = new ne(t, !0).toString();
            r(n);
          }
        },
        a = function (e, n, r, o) {
          i(t.wrap(e, n, r, o));
        };
      return E.getAggregator().on({
        addNode: n,
        send: r,
        exec: i,
        notify: o,
        jsonp: a
      }), {
        addNode: n,
        send: r,
        exec: i,
        notify: o,
        jsonp: a
      };
    },
    pe = function (t) {
      "use strict";

      var n = "undefined" == typeof window,
        r = function () {
          return n;
        },
        i = void 0 !== t && "undefined" != typeof top && t !== top,
        o = function () {
          var e = !1;
          if (r()) e = !0;else try {
            e = !!top.document;
          } catch (e) {}
          return e;
        }(),
        a = function () {
          return r() || f.isDef(Ve.getWindow().mraid);
        },
        s = function () {
          return !r() && f.isDef(Ve.getWindow().mraid);
        },
        c = function () {
          var e = !1;
          if (!r()) {
            var t = Ve.getWindow().inmobi,
              n = t && t.IASDocumentVideoBuffer,
              i = t && n && f.isFunction(n.addVideoEventListener);
            e = s() && !!i;
          }
          return e;
        },
        u = function () {
          return -1 !== e.mode.indexOf("jsvid") || (t = E.getAggregator(), n = t.request(P.OMID_VERIFICATION_CLIENT), r = !1, i = t.request(P.OMID_AD_SESSION_CONTEXT), n && i && (r = i.mediaType === p.MEDIA_TYPE.VIDEO), r) || c();
          var t, n, r, i;
        },
        d = function () {
          return !1 === e.fwMonitoring || "false" === e.fwMonitoring;
        },
        g = function () {
          return e[V.MOB_OR_TAB];
        },
        l = function (t) {
          if (!1 === f(e.customViewability).isArray()) return !1;
          return f(e.customViewability).filter(function (e, n) {
            return He.contains(n.id, t);
          }).length > 0;
        },
        I = function () {
          return e.use100v;
        },
        m = function () {
          return l("grpm") || I();
        },
        T = function () {
          return f.isStr(e.iasProxyPartnerDomain) && -1 !== e.iasProxyPartnerDomain.indexOf("bing");
        };
      return {
        embedded: i,
        friendly: o,
        isFriendlyToParent: function (e) {
          var t, n;
          if (r()) t = !0;else {
            try {
              n = ne(e.document.referrer).hostname === e.location.hostname;
            } catch (e) {}
            t = n;
          }
          return t;
        },
        friendlyIframe: i && o,
        xDomainIframe: i && !o,
        getTagTime: function () {
          return Ve.now() - e.birthdate;
        },
        getPageTime: function () {
          var e = p.NA;
          return !r() && f.isDef(t.chrome) && f.isDef(t.chrome.csi) && f.isFunction(t.chrome.csi) && (e = Ve.round(t.chrome.csi().pageT)), e;
        },
        isVideo: u,
        isMobileApp: a,
        isSpecifiedAd: function () {
          var t = !1;
          if (!r()) {
            var n = f.isFunction(e.contextNode.getAttribute) && e.contextNode.getAttribute("data-ias-container") || e._cl_adpath;
            t = n && f.isStr(n);
          }
          return t;
        },
        isCompoundAd: function () {
          var t = !1;
          if (!r()) {
            var n = e._cl_adpath,
              i = /\[(.*)\]/.exec(n);
            t = null !== i && 0 !== i[1].length && i[1].split(",").length > 1;
          }
          return t;
        },
        isOmid: function () {
          var t = E.getAggregator().request(P.OMID_VERIFICATION_CLIENT);
          return t && t.isSupported() && !e.videoId;
        },
        isOmidNative: function () {
          return new Zt().accepts();
        },
        isOmidSandboxedEnvironment: function () {
          return new Zt().accepts();
        },
        isOmidForWeb: function () {
          return new Mt().accepts();
        },
        isDomless: r,
        isBustedIframe: function () {
          var e = !1;
          return r() || (e = void 0 !== Fn()), e;
        },
        isMraid: s,
        isSafeFrame: function () {
          var e = !1;
          return r() || (e = f(Ve.getWindow().$sf).isObj(!1) && f(Ve.getWindow().$sf.ext).isObj(!1)), e;
        },
        isInMobiMraidVideo: c,
        isDeviceTypeGroupMobile: g,
        usesIASFullyInViewCustomMetric: function () {
          return l("fiv") || I() || !m();
        },
        usesGroupMCustomMetric: m,
        isCeltra: function () {
          var e = !1;
          return r() || (e = xn().isApplicable()), e;
        },
        usesGroupMCustomMetricMobilePassThru: function () {
          return m() && g();
        },
        usesZeroPivCustomMetric: function () {
          if (!1 === f(e.customViewability).isArray()) return !1;
          return f(e.customViewability).filter(function (e, t) {
            return f(t.thresholds).findFirst(function (e, t) {
              return 0 === t.piv;
            });
          }).length > 0;
        },
        isRefreshable: function (e) {
          try {
            var t = Ve.getTop();
            window.addEventListener("message", function (t) {
              /isRefreshable/g.test(t.data) && e(null, t && t.data);
            }, !1), t.postMessage(JSON.stringify({
              requestTop: "isRefreshable"
            }), "*");
          } catch (t) {
            e(t);
          }
        },
        isPossiblyRefreshable: function () {
          return !r() && !a() && !u() && i && "jload" === e.mode;
        },
        integratedBlockingApplies: function (t) {
          var n,
            r,
            i,
            o,
            a = !1;
          e.contextNode && f.isFunction(e.contextNode.getAttribute) && (n = e.contextNode.getAttribute("data-ias-check-tag"), r = e.contextNode.getAttribute("data-ias-check-done"), o = (i = e.contextNode.getAttribute(p.CALLBACK_IDENTIFIER.toString())) && f.isFunction(Ve.getWindow()[i]));
          var s = f.isDef(JSON) && f.isFunction(JSON.parse),
            c = e.integration && (t.indexOf("skeleton.js") > 0 || t.indexOf("/internal/") > 0),
            u = !0 === e.fwMonitoring || "true" === e.fwMonitoring;
          return s && c && ("true" === n && "true" !== r && o ? (a = !0, u && E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: "imgb"
          }, V.MISMATCH_OF_INTEGRATED_BLOCKING_TAG_TYPES, {
            type: "impression"
          })) : (a = !1, u || E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: "ibgm"
          }, V.MISMATCH_OF_INTEGRATED_BLOCKING_TAG_TYPES, {
            type: "impression"
          }))), a;
        },
        isBlocking: d,
        isBlockingSizmekTag: function () {
          return d() && He.contains(e.scriptUrl, "bs.serving-sys.com");
        },
        isAMZN: function () {
          return f.isStr(e.iasProxyPartnerDomain) && -1 !== e.iasProxyPartnerDomain.indexOf("amazon");
        },
        isMSFT: T,
        isPageOnShadowDomWhitelist: function () {
          var t = !1;
          return T() && (t = !0), f.isStr(e.iasProxyPartnerDomain) && -1 !== e.iasProxyPartnerDomain.indexOf("integral.local") && (t = !0), t;
        },
        doesPageAllowAppendedScripts: function () {
          var e = !0;
          return T() && (e = !1), e;
        }
      };
    }(t),
    Ie = {
      addEvent: function (e, t, n, r) {
        "use strict";

        f.isDef(e.addEventListener) && ("mouseenter" === t ? e.addEventListener("mouseover", Ie.mouseEnter(n), r) : "mouseleave" === t ? e.addEventListener("mouseout", Ie.mouseEnter(n), r) : e.addEventListener(t, n, r));
      },
      removeEvent: function (e, t, n) {
        "use strict";

        f.isDef(e.removeEventListener) && ("mouseenter" === t ? (t = "mouseover", n = Ie.mouseEnter) : "mouseleave" === t && (t = "mouseout", n = Ie.mouseEnter), e.removeEventListener(t, n));
      },
      mouseEnter: function (e) {
        "use strict";

        var t = this;
        return function (n) {
          var r = n.relatedTarget;
          this === r || t.isAChildOf(this, r) || e.call(this, n);
        };
      },
      isAChildOf: function (e, t) {
        "use strict";

        if (e === t) return !1;
        for (; t && t !== e;) t = t.parentNode;
        return t === e;
      },
      getStyle: function (e, t, r) {
        "use strict";

        var i,
          o = "";
        return r = r || "", n.defaultView && n.defaultView.getComputedStyle ? o = (i = n.defaultView.getComputedStyle(e, r)) ? i.getPropertyValue(t) : o : e.currentStyle && (t = t.replace(/\-(\w)/g, function (e, t) {
          return t.toUpperCase();
        }), o = e.currentStyle[t]), o;
      },
      getXHR2: function (e, n) {
        "use strict";

        var r, i;
        return f.isDef(t.XMLHttpRequest) ? "withCredentials" in (i = new XMLHttpRequest()) && (r = i) : f.isDef(XDomainRequest) && (r = new XDomainRequest()), r;
      },
      whenReady: function (e, t) {
        "use strict";

        if (pe.isDomless()) Ve.setTimeout(function () {
          e();
        }, 50);else {
          var r,
            i,
            o = t || (pe.xDomainIframe ? n : Ve.getTop().document),
            a = this;
          r = e, i = function () {
            r(!0);
          }, f.isFunction(n.addEventListener) ? "complete" == o.readyState || "loaded" == o.readyState || "interactive" == o.readyState ? Ve.execAtEndOfThread(i) : a.addEvent(o, "DOMContentLoaded", i, !1) : function (e) {
            var t = Ve.setInterval(function () {
              o.body && (Ve.clearInterval(t), e());
            }, 50);
          }(r);
        }
      },
      isSandboxed: function (e) {
        "use strict";

        var t,
          n = Ve.getWindow(),
          r = !1;
        if ("sandbox" in Ve.getDoc().createElement("iframe")) {
          try {
            t = n.frameElement;
          } catch (e) {}
          r = t ? t.hasAttribute("sandbox") : function () {
            var t = !1,
              n = Ve.getDoc();
            if (e.browserIs(p.BROWSERS.CHROME)) try {
              n.domain = "hol@#3+~";
            } catch (e) {
              /Assignment is forbidden for sandboxed iframes/.test(e.message) && (t = !0);
            }
            return t;
          }();
        }
        return r;
      },
      styleElement: function (e, t) {
        "use strict";

        if (e && f(e.style).isObj() && f(t).isObj()) {
          var n = "";
          f(t).each(function (e, t) {
            n += e + ": " + t + " !important;";
          }), e.style.cssText = n;
        }
      },
      nodeIsAbsolutelyPositioned: function (e) {
        "use strict";

        return "absolute" === Ie.getStyle(e, "position") || e.style && "absolute" === e.style.position;
      }
    },
    me = function (e) {
      "use strict";

      var t,
        n,
        r,
        i,
        o,
        a = me.callTypeCounter,
        s = [p.DT_CODES.ADTALK],
        c = {
          UNLOAD: -1,
          ADTALK: -2,
          VIEWABILITY_READY: -3,
          VIDEO_EVENTS: -4,
          DIAGNOSTIC: -5,
          THIRD_PARTY: -6,
          QUARTILE_FULLY_INVIEW: -7,
          LARGE_BILLABLE: -8,
          SCA: -10,
          ADSERVER_MACROS: -11
        };
      return i = (t = {}, n = p.DT_CODES, f(["UNLOAD", "ADTALK", "VIEWABILITY_READY", "VIDEO_EVENTS", "DIAGNOSTIC", "THIRD_PARTY", "QUARTILE_FULLY_INVIEW", "LARGE_BILLABLE", "SCA", "ADSERVER_MACROS"]).each(function (e, r) {
        t[n[r]] = c[r];
      }), t)[e], o = a && a[e], f.isDef(o) && 0 !== o && f(s).contains(e) && (i = i + "." + o), r = a[e], a[e] = f.isDef(r) ? r + 1 : 1, {
        callType: e,
        enumerator: i
      };
    };
  me.callTypeCounter = {};
  var Te = function (t, n, r, i, o, a, s, c) {
      "use strict";

      var u = 0,
        d = 0,
        g = !1,
        l = function (t, n, a, c, l, I) {
          a = a || !r.on("postDts");
          var m = t === p.DT_CODES.DIAGNOSTIC || t === p.DT_CODES.ADTALK || t === p.DT_CODES.SCA || t === p.DT_CODES.XSCA || t === p.DT_CODES.EXTERNAL || t === p.DT_CODES.LARGE_BILLABLE || t === p.DT_CODES.ADSERVER_MACROS;
          if (i.impressionIsIdentifiable() && (m || "n" !== s.getCurrentLoc())) try {
            var h = e.dtBaseURL,
              _ = new ne(h, !0),
              D = Ve.now();
            E.getAggregator().trigger("preSendDt", t), h || (_.path(p.DATA_TRANSFER_EVENT), r.on("usedtdomain") && _.sub(p.DATA_TRANSFER_EVENT)), T(_, t, n), l && l.field && _.setParam(l.field, l.value), c || A(_, t), E.getAggregator().trigger("send", _, function () {
              d += 1, u = Ve.now() - D, f.isFunction(I) && I();
            }, a), t === p.DT_CODES.UNLOAD && (g = !0), o.cleanup();
          } catch (e) {
            __IntegralASDiagnosticCall("dt-" + t, e), E.getAggregator().trigger("error", p.ERROR_CODES.PHONE_HOME);
          }
        },
        I = function () {
          if (!g) {
            var e = p.DT_CODES.UNLOAD;
            l(e, -1, !0);
          }
        },
        m = function (t, n) {
          var i = {
              bapi: "a",
              bapiClient: "b",
              jload: "c",
              jss: "d",
              jsi: "e"
            },
            o = e.mode,
            a = i[t] || i[o];
          n = n || o + "Diag", r.on(n) && a && l(p.DT_CODES.DIAGNOSTIC, -5, !0, !0, {
            field: "bkp",
            value: a
          });
        },
        T = function (t, n, r) {
          var a = new me(n),
            s = f.isDef(r) ? r : a.enumerator;
          t.setParam("asId", e.asid);
          var c = {
            c: i.getCacheBustId(),
            pingTime: s,
            time: pe.getTagTime(),
            type: n
          };
          o.filterOutput(function (e) {
            var t = e.minDt && (!e.type || e.type === n);
            return t && e.oneTime && (e.flagForRemoval = !0), t;
          }, c), t.setParam("tv", c);
        },
        A = function (t, i) {
          var g,
            f,
            l = {};
          o.filterOutput(function (e) {
            return e.standalone && !e.minDt && e.type === i;
          }, function (e, n) {
            t.setParam(e, n.replace(/%3A/g, ":"));
          }), s.fastForward(), function (e) {
            return e === p.DT_CODES.CUSTOM || e === p.DT_CODES.UNLOAD || e === p.DT_CODES.VIDEO_EVENTS || e === p.DT_CODES.FULLY_INVIEW || e === p.DT_CODES.PING || e === p.DT_CODES.VIEWABILITY_READY || e === p.DT_CODES.ADTALK;
          }(i) && (l.clog = c, pe.isVideo() && (f = pe.isOmid() ? "omidVideoEventsString" : "videoEventsString", (g = E.getAggregator().request(f)) && !g.isEmpty() && (l.ve = g))), i === p.DT_CODES.UNLOAD && (l.ndt = d), -1 !== e.mode.indexOf("jsvid") && (l.vv = E.getAggregator().request("videoVersion")), l.NULL1 = r.output(), l.NULL2 = s.stringify(10), l.em = pe.embedded, l.fr = pe.friendly, l.e = n.toString(), l.tt = e.mode, l.dtt = u, o.filterOutput(function (e) {
            var t = !(e.standalone || e.minDt || e.type && e.type !== i);
            return t && e.oneTime && (e.flagForRemoval = !0), t;
          }, l), t.setParam("tv", l), t.setParam("br", a.getBrowserType());
        };
      return E.getAggregator().on({
        sendDt: function (e, t, n) {
          var r;
          l(e, f.resolve(t), r, r, r, n);
        },
        sendMinDt: function (e, t) {
          l(e, t, void 0, !0);
        },
        sendDiag: m,
        updateDtCount: function () {
          d++;
        },
        unload: I
      }), {
        send: l,
        unload: I,
        diagnostic: m,
        setViewabilityMod: function (e) {
          e;
        }
      };
    },
    Ae = function (e) {
      "use strict";

      var n,
        r = {},
        i = !1,
        o = function (e) {
          return 1 === e.nodeType;
        },
        a = function () {
          var t = o(e) ? he.nodeIsHidden(e) : 0 === e.width || 0 === e.height;
          return !i && t;
        },
        s = function () {
          var e = {};
          return f(r).each(function (t, n) {
            e[t] = Ve.round(n);
          }), e;
        },
        c = function (e) {
          return f.isNumeric(e) || f.isUndef(e);
        },
        u = function () {
          return Ve.round(r.width) * Ve.round(r.height);
        };
      return e !== t.parent && (o(e) ? f.isDef(e.getBoundingClientRect) && (n = he.getRect(e), f(r).mixin({
        x: f.useIfDef(n.x) || n.scrX,
        y: f.useIfDef(n.y) || n.scrY,
        scrX: n.scrX,
        scrY: n.scrY,
        width: n.width,
        height: n.height
      })) : r = e), {
        hasValidDims: function () {
          return c(r.scrX) && c(r.scrY) && f.isNumeric(r.width) && f.isNumeric(r.height);
        },
        toString: function () {
          var e = s();
          return [e.scrX, e.scrY, e.width, e.height].join(".");
        },
        getRounded: s,
        getRoundedGeometry: function () {
          var e = {};
          return f(r).each(function (t, n) {
            e[t] = "x" === t || "y" === t || "width" === t || "height" === t ? Ve.round(n) : n;
          }), e;
        },
        set: function (e, t) {
          r[e] = t;
        },
        isHidden: a,
        treatAsPlaceholder: function () {
          i = !0;
        },
        area: u,
        isMrcLarge: function () {
          return u() >= p.MRC_LARGE_AD_SIZE;
        },
        isOneByOne: function () {
          return a() && u() <= 1;
        }
      };
    },
    he = {
      findElementsWithSize: function (e) {
        "use strict";

        var t = [],
          n = function (e) {
            he.getNodeArea(e) < 1 ? f(e.children).each(function (e, t) {
              n(t);
            }) : t.push(e);
          };
        return n(e), t;
      },
      nodeIsHidden: function (e) {
        "use strict";

        var t = this.getRect(e),
          n = 0 !== parseInt(Ie.getStyle(e, "width")) && 0 === t.width,
          r = 0 === t.width || 0 === t.height,
          i = "hidden" === Ie.getStyle(e, "visibility");
        return n || r || i;
      },
      calcWinDims: function () {
        "use strict";

        var e, t, n;
        try {
          t = he.browserWindowPosition(), n = he.windowSize(), e = {
            scrX: Ve.round(t.scrX),
            scrY: Ve.round(t.scrY),
            width: Ve.round(n.width),
            height: Ve.round(n.height)
          };
        } catch (t) {
          E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.GET_WIN_DIMENSIONS), e = {};
        }
        return e;
      },
      windowSize: function () {
        "use strict";

        var e,
          n,
          r,
          i = {};
        if (pe.isDomless()) return {
          width: 0,
          height: 0
        };
        if (pe.friendly) {
          if (n = (e = top.document).documentElement, r = e.body, f.isDef(top.innerWidth)) i.width = top.innerWidth, i.height = top.innerHeight;else if (f.isDef(n.clientWidth)) i.width = n.clientWidth, i.height = n.clientHeight;else {
            if (!f.isDef(r.clientWidth)) throw i.width = i.height = 0, "";
            i.width = r.clientWidth, i.height = r.clientHeight;
          }
        } else f.isDef(t.outerWidth) && (i.width = t.outerWidth, i.height = t.outerHeight);
        return i;
      },
      browserWindowPosition: function () {
        "use strict";

        var e = 0,
          n = 0;
        e = t.screenX, n = t.screenY;
        return E.getAggregator().request(P.BROWSER).browserIs(p.BROWSERS.GECKO) && -8 == e && -8 == n && (e += 8, n += 8), {
          scrX: e,
          scrY: n
        };
      },
      getNodeArea: function (e) {
        "use strict";

        var t = -1;
        if (e) {
          var n = he.getRect(e);
          t = n.width * n.height;
        }
        return t;
      },
      getRect: function (e) {
        "use strict";

        var t = {},
          n = he.browserWindowPosition(),
          r = e.getBoundingClientRect();
        return f.isUndef(r.x) && (t.x = r.left, t.y = r.top), f.isUndef(r.width) && (t.width = r.right - r.left, t.height = r.bottom - r.top), f(t).mixin(r, !0), t.scrX = n.scrX + t.x, t.scrY = n.scrY + t.y, t;
      },
      getPlaceholderSpan: function () {
        "use strict";

        var e = n.createElement("span");
        return f(e.style).mixin({
          width: "0px",
          height: "0px",
          display: "block",
          overflow: "hidden",
          visibiility: "hidden"
        }), e.innerHTML = ".", e;
      },
      createImage: function () {
        "use strict";

        var e = pe.friendly && Ve.getTop().Image;
        return f.isFunction(e) ? new e() : new Image();
      },
      createHiddenIframe: function (e) {
        "use strict";

        var t = Ve.getDoc().createElement("iframe"),
          n = e ? {
            display: "none"
          } : {
            width: "0px",
            height: "0px",
            border: "0",
            position: "absolute",
            top: "-10000px",
            left: "-10000px"
          };
        return Ie.styleElement(t, n), t;
      },
      tagNameIs: function (e, t) {
        "use strict";

        return e.tagName.toUpperCase() === t.toUpperCase();
      },
      getClippedDimensions: function (e, t) {
        "use strict";

        var r,
          i,
          o,
          a,
          s,
          c = 1e4,
          u = 1e4,
          d = Ie.nodeIsAbsolutelyPositioned(e);
        if (s = !he.tagNameIs(e, "OBJECT"), null !== e.parentNode && !d && s && !he.tagNameIs(t, "BODY")) {
          a = e;
          do {
            a = a.parentNode, i = !he.tagNameIs(a, "OBJECT"), o = "inline" !== Ie.getStyle(a, "display"), i && o && (c = (r = he.getRect(a)).width < c ? r.width : c, u = r.height < u ? r.height : u);
          } while (a.parentNode !== n && a !== t);
        }
        return {
          width: Ve.round(c),
          height: Ve.round(u)
        };
      },
      hasBackgroundImage: function (e) {
        var t = Ie.getStyle(e, "background-image");
        return "" !== t && "none" !== t;
      },
      isEmptyFriendlyFrame: function (e) {
        try {
          var t,
            n = !1;
          if (e && e.document) {
            var r = e && "IFRAME" === e.nodeName && e.contentDocument;
            r && (t = r.body) && t.childElementCount < 1 && (n = !0);
          }
          return n;
        } catch (e) {
          return !1;
        }
      },
      findChildWithLargestContent: function (e, t) {
        var n = E.getAggregator().request(P.MOBILE_APP).isMobileAppEnvironment(),
          r = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT),
          i = r && r.hasOwnProperty("ignoreDivAsCandidate"),
          o = this.hasBackgroundImage,
          a = null,
          s = function (t) {
            var n,
              r,
              a,
              s = null,
              c = -1;
            if (t.length) for (n = 0, r = t.length; n < r; n++) {
              var u = t[n],
                d = he.getNodeArea(u),
                g = !((a = u).parentNode === e && "DIV" === a.nodeName && !o(a) && ("0" === Ie.getStyle(a, "opacity") || "hidden" === Ie.getStyle(a, "visibility") || function () {
                  var e,
                    t,
                    n = a.childNodes;
                  for (e = 0; e < n.length; e++) 1 === n[e].nodeType && (t = !0);
                  return !t;
                }()));
              g && i && "DIV" === u.nodeName && (g = !1);
              var f = he.isEmptyFriendlyFrame(u);
              d > c && g && !f && (s = u, c = d);
            }
            return s && (s.hasValidSizeForMobileApp = c > 1), s;
          }(he.collectCandidateElements(e, t || "iframe,img,a,object,embed,div".split(",")));
        return s && ((a = function (t) {
          for (var r, o, a = t; t.parentNode !== e && "inline" !== Ie.getStyle(t.parentNode, "display");) (!n || (r = t.parentNode, o = void 0, o = !0, ("visible" === Ie.getStyle(r, "overflow") || "visible" === Ie.getStyle(r, "overflowX") && "visible" === Ie.getStyle(r, "overflowY")) && (o = !1), o && he.getNodeArea(t.parentNode) > 0)) && (n && i && "DIV" === t.parentNode.nodeName || (a = t.parentNode)), t = t.parentNode;
          return a;
        }(s)).hasValidSizeForMobileApp = s.hasValidSizeForMobileApp), a;
      },
      screenSize: function () {
        "use strict";

        if (pe.isDomless()) return {
          width: 0,
          height: 0
        };
        var e = {
          width: -1,
          height: -1
        };
        try {
          f.isDef(t.screen) && (e = {
            width: t.screen.width,
            height: t.screen.height
          });
        } catch (e) {}
        return e;
      },
      calcMonDims: function () {
        "use strict";

        var e = f(he.screenSize()).mixin({
          scrX: 0,
          scrY: 0
        });
        return f.isDef(screen.availLeft) && (e = {
          scrX: t.screen.availLeft,
          scrY: t.screen.availTop,
          width: t.screen.availWidth,
          height: t.screen.availHeight
        }), e;
      },
      getOurIFrameInTop: function () {
        "use strict";

        for (var e, t = Ve.getTop(), n = Ve.getWindow(); n != t;) n = (e = n).parent;
        return e;
      },
      getOurNodeInTop: function () {
        "use strict";

        var t, n;
        return pe.friendly && (t = pe.embedded ? (n = he.getOurIFrameInTop()) && n.frameElement : e.contextNode), t;
      },
      getAncestorNodes: function (e) {
        "use strict";

        var t = [],
          n = e.ownerDocument && e.ownerDocument.documentElement,
          r = e;
        if (n) for (; r.parentNode !== n;) t.push(r), r = r.parentNode;
        return t;
      },
      getTagsNamed: function (e, t) {
        "use strict";

        var n,
          r = t || Ve.getDoc();
        try {
          n = r.getElementsByTagName(e);
        } catch (e) {
          n = null;
        }
        return n;
      },
      containsScriptTagWithSrc: function (e) {
        "use strict";

        return !!f(he.getTagsNamed("script")).findFirst(function (t, n) {
          var r = n.src;
          return f.isFunction(e) ? e(r) : r === e;
        });
      },
      contains: function (e, t) {
        "use strict";

        var n = !1;
        try {
          n = f.isDef(e) && f.isFunction(e.contains) && e.contains(t);
        } catch (e) {}
        return n;
      },
      querySelector: function (e, t) {
        "use strict";

        var n;
        try {
          n = e.querySelector(t);
        } catch (e) {
          n = null;
        }
        return n;
      },
      nodeIsInWindow: function (e, t) {
        "use strict";

        return e.ownerDocument && (e.ownerDocument.defaultView || e.ownerDocument.parentWindow) === t;
      },
      setAttributeOf: function (e, t, n) {
        "use strict";

        e && f.isFunction(e.setAttribute) && e.setAttribute(t, n);
      },
      removeAttributeOf: function (e, t) {
        "use strict";

        e && f.isFunction(e.removeAttribute) && e.removeAttribute(t);
      },
      crossQuerySelector: function (t, n) {
        "use strict";

        var r,
          i,
          o = [e.contextNode.parentNode, Ve.getDoc()];
        if (pe.friendly && o.push(Ve.getTop().document), n && pe.embedded) try {
          o.push(Ve.getWindow().frameElement.ownerDocument);
        } catch (e) {}
        return f(o).each(function (e, n) {
          try {
            i = he.querySelector(n, t);
          } catch (e) {}
          !r && i && (r = i);
        }), r;
      },
      getNodeName: function (e) {
        "use strict";

        return e && e.nodeName;
      },
      isWindow: function (e) {
        "use strict";

        var t = !1;
        try {
          t = e && "object" == typeof e && "setInterval" in e;
        } catch (e) {
          t = !0;
        }
        return !!t;
      },
      getChildWindowsOf: function (e) {
        "use strict";

        var t = [],
          n = he.getTagsNamed("iframe", e);
        return n && (t = f(n).map(function (e, t) {
          return t.contentWindow;
        })), t;
      },
      getFrameId: function () {
        "use strict";

        var e = Ve.getWindow().frameElement;
        return e && e.id;
      },
      isViewportVisible: function (e, t) {
        "use strict";

        var n = e.innerWidth,
          r = e.innerHeight,
          i = n * r > t.width * t.height,
          o = n > t.width && r > t.height;
        return i && o;
      },
      getTagName: function (e) {
        "use strict";

        return e.tagName.toLowerCase();
      },
      getAttribute: function (e, t) {
        "use strict";

        return e.getAttribute(t);
      },
      attributeMatches: function (e, t, n) {
        "use strict";

        var r = e && he.getAttribute(e, t);
        return n.test(r);
      },
      isImageTag: function (e) {
        "use strict";

        return e && e.src && he.tagNameIs(e, "img");
      },
      getDimensionFromStyle: function (e) {
        "use strict";

        var t,
          n = Ie.getStyle(e, "width"),
          r = Ie.getStyle(e, "height");
        return n && r && (t = {
          width: f.getNum(n),
          height: f.getNum(r)
        }), t;
      },
      getDimensionFromAttributes: function (e) {
        "use strict";

        var t,
          n = he.getAttribute(e, "width"),
          r = he.getAttribute(e, "height");
        return n && r && (t = {
          width: f.getNum(n),
          height: f.getNum(r)
        }), t;
      },
      traverseAndFindFirstMatchingNode: function e(t, n) {
        "use strict";

        var r, i, o;
        if (n(t)) i = t;else if (o = t.children) for (r = 0; r < o.length && !(i = e(o[r], n)); r++);
        return i;
      },
      getFirstChildElement: function (e) {
        "use strict";

        return e && e.children && e.children[0];
      },
      isClippable: function (e, t) {
        "use strict";

        var n = !0,
          r = "fixed" === Ie.getStyle(e, "position"),
          i = !("hidden" === Ie.getStyle(t, "overflow")) && !r;
        return pe.isSpecifiedAd() && (r || i) && (n = !1), n;
      },
      isNodeCreative: function (e) {
        "use strict";

        var t = he.getNodeName(e),
          n = e && e.children && 0 === e.children.length,
          r = e && e.innerText && e.innerText.length > 0,
          i = n && r,
          o = t && -1 !== p.RENDER.CREATIVE_NODE_TYPES.indexOf(t.toUpperCase());
        return !!t && !!(o || he.hasBackgroundImage(e) || i);
      },
      getElementsDocument: function (e) {
        "use strict";

        return e.ownerDocument || e;
      },
      getElementsWindow: function (e) {
        "use strict";

        var t = he.getElementsDocument(e);
        return t.defaultView || t.parentWindow || e;
      },
      elementIsEmbedded: function (e) {
        "use strict";

        return he.getElementsWindow(e) !== Ve.getTop();
      },
      getParent: function (e) {
        "use strict";

        return e.parentNode || e.parent;
      },
      isNodeXDomainIframe: function (e) {
        "use strict";

        var t = !1;
        if (e && "IFRAME" === he.getNodeName(e)) try {
          t = !e.contentWindow.document;
        } catch (e) {
          t = !0;
        }
        return t;
      },
      isElement: function (e) {
        "use strict";

        return 1 === e.nodeType;
      },
      collectCandidateElements: function (e, t) {
        var n,
          r,
          i,
          o,
          a = [],
          s = t;
        for (n = 0, r = s.length; n < r; n++) {
          var c = s[n].toLowerCase(),
            u = e.getElementsByTagName && e.getElementsByTagName(c);
          if (u && u.length) for (i = 0, o = u.length; i < o; i++) a.push(u[i]);
        }
        return a;
      }
    },
    _e = function () {
      "use strict";

      var e = {},
        t = function (t) {
          f.isDef(e[t]) ? e[t]++ : e[t] = 1;
        };
      return E.getAggregator().on("error", function (e) {
        var n = f(e).isObj() ? e.errorCode : e;
        t(n);
      }), {
        list: e,
        add: t,
        toString: function () {
          var t = "";
          for (var n in e) e.hasOwnProperty(n) && (t += n);
          return t;
        },
        hasErrors: function () {
          for (var t in e) return !0;
          return !1;
        }
      };
    },
    De = function () {
      "use strict";

      return {
        createInstance: function (e, t) {
          return pe.isDomless() ? new Se() : new Oe(e, t);
        }
      };
    },
    Oe = function (t, n) {
      "use strict";

      var r = function (t) {
        var n = [];
        if (!(t && t instanceof Array)) throw new Error("Unexpected data type in ExchangeParser.getUrlList");
        return (n = f(t).map(function (e, t) {
          return t.val;
        })).push(e.adsafeSrc, e.requrl, e.reqquery), n;
      };
      return {
        parse: function (i) {
          try {
            var o,
              a = r(i),
              s = a && a.length && a.join("|"),
              c = e.exchList;
            s && (o = f(c).map(function (e, t) {
              return s.indexOf(He.rot(t)) >= 0 ? e : void 0;
            })).length && n.addItem({
              output: o.join(".")
            }, "ex", {
              type: p.IMPRESSION_EVENT
            });
          } catch (e) {
            t.add(p.ERROR_CODES.EXCHANGE_PARSING);
          }
        }
      };
    },
    Se = function () {
      "use strict";

      return {
        parse: function (e) {}
      };
    };
  const ve = function () {
    "use strict";

    const t = {},
      n = function (n) {
        let r, i, o, a;
        return f.isUndef(t[n]) && (r = e.jsFeatures, t[n] = !1, -1 !== r.indexOf(n) && (i = new RegExp(n + "(?=$|,)|" + n + ":(?!,|$)(.?\\d*(?=,|$))").exec(r), i && (o = i[1], a = !o, t[n] = a || o > 100 * Ve.random()))), t[n];
      },
      r = {
        es: "everySecond",
        sc: "usesca",
        ha: "usehaps",
        fgad: "forceKeepGoogleAdNode"
      },
      i = {
        fif: "useFIF",
        gmnp: "groupm_native_publisher",
        for: "forceAppend",
        b11: V.B11,
        cnod: V.CNOD
      },
      o = function (t) {
        const n = e[t];
        return f(["integration"]).contains(t) ? !!n : !0 === n || "true" === n || f.isFunction(n);
      };
    f(r).each(function (e, t) {
      n(t);
    });
    return {
      on: n,
      bootstrapOn: o,
      bootstrapperHas: function (t) {
        const n = f.isStr(t) ? [t] : t;
        return f(n).map(function (t, n) {
          const r = n;
          if (r && f.isDef(e[r])) return 1;
        }).length === n.length;
      },
      getEnabledScriptUrl: function (t) {
        const r = n("use" + t),
          i = e.sp_cdnScripts && e.sp_cdnScripts[t];
        return r && i;
      },
      setReportedBootstrapFeatures: function (e, t) {
        i[e] = t;
      },
      reportedBootstrapFeatures: i,
      output: function () {
        return f(function () {
          const e = f(r).mapToObj(function (e, n) {
              const r = {};
              return r[e] = f.fromBoolToNum(t[n]), r;
            }),
            n = f(i).mapToObj(function (e, t) {
              const n = {};
              return n[e] = f.fromBoolToNum(o(t)), n;
            });
          return n.gm = f.fromBoolToNum(pe.usesGroupMCustomMetric()), f(e).mixin(n);
        }()).toParams();
      }
    };
  };
  var Re = function () {
      "use strict";

      p.BROWSERS;
      var e = function (e, t) {
        var n = e.getRounded(),
          r = t.getRounded(),
          i = Math.max(n.scrX, r.scrX),
          o = Math.max(n.scrY, r.scrY),
          a = Math.min(n.scrX + n.width, r.scrX + r.width) - i,
          s = Math.min(n.scrY + n.height, r.scrY + r.height) - o;
        return Ae({
          scrX: i,
          scrY: o,
          width: a > 0 ? a : 0,
          height: s > 0 ? s : 0
        });
      };
      return {
        calcInitialViewState: function (e, t) {
          var n,
            r = p.NA;
          return n = t ? {
            IN_VIEW: 65,
            OUT_OF_VIEW: 25,
            PARTIAL_VIEW: 30
          } : {
            IN_VIEW: 75,
            OUT_OF_VIEW: 25,
            PARTIAL_VIEW: 50
          }, f.isDef(e) && e !== p.NA && e > -1 && (r = e >= n.IN_VIEW ? p.IN_VIEW : e <= n.OUT_OF_VIEW ? p.OUT_OF_VIEW : e >= n.PARTIAL_VIEW ? p.PARTIAL_VIEW_PLUS : p.PARTIAL_VIEW_MINUS), r;
        },
        calcPercentInView: function (t, n, r, i) {
          var o = 0,
            a = t;
          return t.hasValidDims() && !t.isHidden() && (f([n, r, i]).each(function (t, n) {
            n.hasValidDims() && (a = e(a, n));
          }), o = Ve.round(a.area() / t.area() * 100)), o;
        }
      };
    },
    Ne = function () {
      "use strict";

      var n,
        r,
        i,
        o = !1;
      r = function () {
        var e = "";
        try {
          for (var n, r = t.Uint32Array && t.crypto && t.crypto.getRandomValues; e.length < 32;) r ? (n = new Uint32Array(1), t.crypto.getRandomValues(n), e += n[0].toString(16)) : e += (16 * Ve.random() | 0).toString(16);
          e = e.slice(0, 32);
        } catch (e) {
          E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.UID_GENERATION);
        }
        return e;
      }(), (i = []).push(r.slice(0, 8)), i.push(r.slice(8, 12)), i.push(r.slice(12, 16)), i.push(r.slice(16, 20)), i.push(r.slice(20)), n = i.join("-");
      var a = function () {
        return e.anId;
      };
      return {
        getAsid: function () {
          return e.asid;
        },
        getAnId: a,
        getCacheBustId: function () {
          var e = new Date(),
            t = Date.parse("Jan 1 " + e.getFullYear()),
            n = e.getTime() - t;
          return f.toBase(n, 62);
        },
        getFwId: function () {
          return a() || e.advEntityId + "-" + e.pubEntityId;
        },
        impressionIsIdentifiable: function (e) {
          return e && (o = !0), o;
        },
        unq: n
      };
    },
    ye = function (e, t) {
      "use strict";

      return {
        init: function (n) {
          e.jsonp(n, function (e) {
            t.send(p.DT_CODES.THIRD_PARTY, void 0, !1, !0, {
              field: "tpiLookup",
              value: e
            });
          }, !1, "callback");
        }
      };
    },
    Ce = function (e, t, n, r, i) {
      "use strict";

      return {
        getTime: function () {
          return 1e3 * e.getTimeInViewInSeconds();
        },
        getTask: function () {
          return i ? function () {
            var n = E.getAggregator().request("adRenderStatus"),
              i = r || t,
              o = e.getTimeInViewInSeconds();
            n || E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.ENVIRONMENT, "nr_" + i, o);
          } : function () {
            var i = e.getTimeInViewInSeconds(),
              o = e.getTimeInViewForRts();
            f.isDef(r) && (E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
              output: r
            }, V.METRIC_ID, {
              type: t
            }), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
              output: "t"
            }, V.CUSTOM_METRIC_IN_VIEW_REASON, {
              type: t
            })), E.getAggregator().trigger(w.SEND_DT, t, i), n[o] && n[o]();
          };
        }
      };
    },
    Me = function () {
      "use strict";

      return {
        createPingJobs: function (e, t, n, r, i) {
          return f(t.getTimeThresholds()).map(function (t, o) {
            return new Ce(o, e, n, r, i);
          });
        }
      };
    },
    we = function () {
      var t,
        n = [],
        r = function (t) {
          var n = "type",
            r = "t",
            i = "timestamp";
          return {
            type: t["tp"] || t[n] || "",
            time: t[r] || t[i] && t[i] - e.birthdate || ""
          };
        },
        i = function () {
          t || (t = E.getAggregator().request("viewabilityDefinitions")), t && 0 == n.length && f(t).each(function (e, t) {
            t.qivThreshold && n.push(t);
          });
        },
        o = function (e, t) {
          E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: e.metricId
          }, V.METRIC_ID, {
            type: p.DT_CODES.CUSTOM
          }), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: "q"
          }, V.CUSTOM_METRIC_IN_VIEW_REASON, {
            type: p.DT_CODES.CUSTOM
          }), E.getAggregator().trigger(w.SEND_DT, p.DT_CODES.CUSTOM, t), e.rtsCallbacks && f.isFunction(e.rtsCallbacks[p.RTS_KEY_FOR_VQ]) && e.rtsCallbacks[p.RTS_KEY_FOR_VQ]();
        };
      return {
        init: function () {
          i(), E.getAggregator().on(w.VIDEO_QUARTILE_EVENT, function (e) {
            var t, a, s, c, u;
            i(), t = new r(e), s = (a = ["_", "firstQuartile", "midpoint", "thirdQuartile", "complete"]).indexOf(f(a).findFirst(function (e, n) {
              return -1 !== t.type.toLowerCase().indexOf(n.toLowerCase());
            })), c = E.getAggregator().request(P.SCREEN_EVENTS).getCurrentEvent(), u = Math.floor(t.time / 1e3), f(n).each(function (e, t) {
              var n = t.qivThreshold.indexOf(s);
              -1 !== n && t.isInView(c) && t.qivThreshold.length > 0 && (t.qivThreshold.splice(n, 1), 0 == t.qivThreshold.length && o(t, u));
            });
          });
        }
      };
    },
    be = function () {
      "use strict";

      var n = function () {
        var t = e.asid;
        return "__IntegralAS_" + (t && t.replace(/\-/g, "") || "") + "_" + Ve.round(1e4 * Math.random());
      };
      return {
        wrap: function (e, r, i, o) {
          var a,
            s,
            c,
            u = n();
          return function (e, t) {
            return new RegExp(t).test(e);
          }(e = "" + e, o = o || "ias_callback") && (a = function (e, t) {
            return new RegExp("(" + t + "=)(.[^&]*)").exec(e)[0];
          }(e, o), s = a.split("=")[1], c = He.stringToFn(s), e = function (e, t) {
            return -1 !== e.indexOf(t + "&") && (t += "&"), e.replace(t, "");
          }(e, a)), t[u] = function (e) {
            r(e), i && c && c(e), t[u] = void 0;
          }, e = function (e, t, n) {
            var r = e.indexOf("?"),
              i = t + "=" + n;
            return -1 === r ? e + "?" + i : (r++, e.slice(0, r) + i + "&" + e.slice(r));
          }(e, o, u), e;
        },
        wrapToGlobal: function (e) {
          var r = n();
          return t[r] = function (n) {
            e(n), t[r] = void 0;
          }, r;
        }
      };
    },
    Pe = function (t, n, r) {
      "use strict";

      var i = function (t, n) {
          var r,
            i = t;
          return n && (r = "," + f(n).stringify(function (e, t) {
            return e + ":" + t;
          }, ","), (i = ne(t, !0)).appendToParamValue("adsafe_jsinfo", f.encodeInvalidUrlChars(r, e.encodeInvalidUrlChars)), i = i.toString()), i;
        },
        o = {
          jss: {
            isFW: !0,
            nodeType: pe.doesPageAllowAppendedScripts() ? "script" : "img"
          },
          rjss: {
            isFW: !0,
            onloadCallback: xr,
            impressionMethod: function (t) {
              if (pe.isAMZN() && pe.isBlocking() && e.staticMode) E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
                output: !0
              }, "ablk"), E.getAggregator().trigger("jsonp", t + "&format=jsonp", e => {
                let {
                  nodeType: t,
                  creativeUrl: n
                } = e;
                t = "unknown" === t ? "script" : t, E.getAggregator().trigger("addNode", t, n);
              }, !1, "cbName");else {
                const e = pe.doesPageAllowAppendedScripts() ? "script" : "img";
                E.getAggregator().trigger("addNode", e, t, xr);
              }
            }
          },
          jsi: {
            isFW: !0,
            nodeType: "iframe"
          },
          rjsi: {
            isFW: !0,
            nodeType: "iframe"
          },
          jload: {
            impressionMethod: function (e) {
              t.enabled ? E.getAggregator().trigger("jsonp", e, t.callback, !0) : E.getAggregator().trigger("send", e, function () {
                xr(), E.getAggregator().trigger("sendDiag");
              }, !n.on("postMon"));
            }
          },
          bapi: {
            impressionMethod: function (e) {
              var n = t.enabled ? t.callback : f.noop,
                r = !!t.enabled;
              E.getAggregator().trigger("jsonp", e, n, r);
            }
          },
          jsapi: {
            isFW: !0,
            impressionMethod: function (e) {
              var n = t.enabled ? t.callback : f.noop,
                r = !!t.enabled;
              E.getAggregator().trigger("jsonp", e, n, r);
            }
          },
          jsvid: {
            manualDefer: !0,
            impressionMethod: function (r) {
              E.getAggregator().on("adImpression", function (o, a) {
                var s;
                try {
                  s = i(r, a), t.enabled ? E.getAggregator().trigger("jsonp", s, t.callback, !0) : E.getAggregator().trigger("send", s, f.noop, !n.on("postMon"));
                } catch (t) {
                  __IntegralASDiagnosticCall("jsvidimp", t, e);
                }
              });
            }
          },
          fwjsvid: {
            isFW: !0,
            manualDefer: !0,
            impressionMethod: function (t) {
              var n = "false" === e.fwMonitoring;
              n && E.getAggregator().trigger("jsonp", function (e) {
                var t;
                return (t = e.split("/"))[3] = "db2", t[4] = "video", t.join("/");
              }(t), function (e) {
                E.getAggregator().trigger("videoBlockResult", e);
              }), E.getAggregator().on("adImpression", function (r, o) {
                var a, s;
                try {
                  n && (s = r) && f.isBool(s.integral_didBlock) && s.integral_timeToDecision >= 0 && (t = function (e) {
                    var n = "$1$2,abc:" + (e.integral_didBlock ? 1 : 0) + ",abct:" + e.integral_timeToDecision;
                    return t.replace(/(adsafe_jsinfo=)([^&]*)/, n);
                  }(r)), a = i(t, o), E.getAggregator().trigger("send", a, f.noop, !0);
                } catch (t) {
                  __IntegralASDiagnosticCall("fwjsvidimp", t, e);
                }
              });
            }
          },
          jspix: {
            nodeType: "img"
          }
        };
      return new function () {
        var t = o[e.mode],
          n = !!t.isFW,
          i = function (t) {
            var n;
            return n = E.getAggregator().request("mobileApp").isMobileAppEnvironment() && e.mobFwUrl ? e.mobFwUrl : t ? e.adsafeSrc : e.requrl, t || (n += "?" + e.reqquery), n;
          }(n),
          a = i.indexOf("BEGIN__ADSAFE"),
          s = -1 !== a,
          c = s ? i.slice(a) : "";
        return {
          isFW: n,
          baseUrl: s ? i.slice(0, a) : function (e) {
            var t = -1 === e.indexOf("?") ? "?" : "&";
            return e + t;
          }(i),
          macroUrl: c,
          sendImpression: function (e) {
            var n = function () {
              E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
                output: pe.getTagTime()
              }, V.STATIC_IMPRESSION_RFW_CALL_REQUEST_TIME), t.nodeType ? E.getAggregator().trigger("addNode", t.nodeType, e, t.onloadCallback) : t.impressionMethod(e);
            };
            r || t.manualDefer ? n() : t.manualDefer || E.getAggregator().on("adImpression", function () {
              n();
            });
          }
        };
      }();
    },
    Ve = {
      execAtEndOfThread: function (e) {
        "use strict";

        Ve.setTimeout(e, 0);
      },
      now: function () {
        "use strict";

        return new Date().getTime();
      },
      random: function () {
        "use strict";

        return Math.random();
      },
      round: function (e) {
        "use strict";

        return Math.round(e);
      },
      ceil: function (e) {
        "use strict";

        return Math.ceil(e);
      },
      floor: function (e) {
        "use strict";

        return Math.floor(e);
      },
      min: function () {
        "use strict";

        return Math.min.apply(null, arguments);
      },
      max: function () {
        "use strict";

        return Math.max.apply(null, arguments);
      },
      getWindow: function () {
        "use strict";

        return t;
      },
      getTimeoutScope: function () {
        "use strict";

        return pe.isDomless() && pe.isOmid() ? E.getAggregator().request(P.OMID_VERIFICATION_CLIENT) : t;
      },
      setInterval: function (e, t) {
        "use strict";

        return Ve.getTimeoutScope().setInterval(e, t);
      },
      setTimeout: function (e, t) {
        "use strict";

        return Ve.getTimeoutScope().setTimeout(e, t);
      },
      clearInterval: function (e) {
        "use strict";

        Ve.getTimeoutScope().clearInterval(e);
      },
      clearTimeout: function (e) {
        "use strict";

        Ve.getTimeoutScope().clearTimeout(e);
      },
      getMaxNumber: function () {
        "use strict";

        return Number.MAX_VALUE;
      },
      getTop: function () {
        "use strict";

        return pe.isDomless(), top;
      },
      getDoc: function () {
        "use strict";

        return pe.isDomless(), n;
      },
      getIntersectionObserver: function (e, t) {
        "use strict";

        return pe.isDomless(), new IntersectionObserver(e, t);
      },
      getMutationObserver: function (e) {
        "use strict";

        return pe.isDomless(), new MutationObserver(e);
      },
      getResizeObserver: function (e) {
        "use strict";

        return pe.isDomless(), new ResizeObserver(e);
      },
      pow: function (e, t) {
        "use strict";

        return Math.pow(e, t);
      }
    },
    Le = function () {
      "use strict";

      return {
        createInstance: function () {
          return pe.isDomless() ? new Ue() : new Fe();
        }
      };
    },
    Fe = function () {
      "use strict";

      var e,
        t,
        n,
        r,
        i = !1,
        o = !1,
        a = (E.getAggregator().request(P.FEATURES), new H()),
        s = function () {
          return f.isDef(e.prop) ? Ve.getDoc()[e.prop] : null;
        };
      return t = "hidden", n = "visibilitychange", r = Ve.getDoc(), f.isUndef(r.hidden) ? f(["moz", "ms", "webkit"]).each(function (e, o) {
        var a = o + "Hidden";
        f.isDef(r[a]) && (t = a, n = o + n, i = !0);
      }) : i = !0, e = i ? {
        prop: t,
        event: n
      } : {}, {
        isHidden: s,
        onHiddenChange: function (t) {
          var n, r;
          a.push(t), o || (o = !0, n = Ve.getWindow(), r = function () {
            a.run(s());
          }, Ie.addEvent(n, "focus", r, !0), Ie.addEvent(n, "blur", r, !0), e.event && Ie.addEvent(Ve.getDoc(), e.event, r, !0));
        },
        supportsVisAPI: function () {
          return i;
        }
      };
    },
    Ue = function () {
      "use strict";

      return {
        isHidden: function () {
          return !1;
        },
        onHiddenChange: function (e) {},
        supportsVisAPI: function () {
          return !0;
        }
      };
    },
    xe = function () {
      "use strict";

      return {
        createInstance: function (e, t) {
          return pe.isDomless() ? new Be() : new We(e, t);
        }
      };
    },
    We = function (n, r) {
      "use strict";

      var i,
        o = function (e) {
          var t = [["ab", "about%3A"], ["da", "data%3A"], ["js", "javascript%3A"], ["fi", "file%3A"], ["uu", "uuid-in-package"], ["cx", "chrome-extension%3A"], ["lo", "http%3A%2F%2Flocalhost"], ["lo", "https%3A%2F%2Flocalhost"]];
          if ("string" == typeof e && "null" !== e && "" !== e && "undefined" !== e) {
            for (var n = 0; n < t.length; n++) if (e.startsWith(t[n][1])) return "";
            if (-1 === e.indexOf(".")) return E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
              output: e.substring(0, 40)
            }, V.BAD_URL_NO_PERIOD, {
              type: p.IMPRESSION_EVENT
            }), "";
          }
          return e;
        },
        a = function () {
          var a = {};
          try {
            a.a = encodeURIComponent(top.location.href);
          } catch (e) {}
          try {
            a.b = encodeURIComponent(parent.location.href);
          } catch (e) {}
          if (pe.embedded) {
            try {
              a.c = encodeURIComponent(parent.document.referrer);
            } catch (e) {}
            try {
              a.e = encodeURIComponent(t.document.referrer);
            } catch (e) {}
          }
          try {
            "jsi" !== e.mode && (a.d = encodeURIComponent(t.location.href));
          } catch (e) {}
          try {
            a.f = encodeURIComponent(e.jsref);
          } catch (e) {}
          try {
            var s = r.getWindow();
            a.q = encodeURIComponent(s.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href || "");
          } catch (e) {}
          try {
            n.isStarted() && n.getMyFrameDepth() > 1 && (a.g = encodeURIComponent(n.getTopDomain())), n.isStarted() && pe.xDomainIframe && 1 === n.getMyFrameDepth() && (a.y = encodeURIComponent(n.getTopDomain()));
          } catch (e) {}
          var c = "not-set";
          try {
            if (pe.isSafeFrame()) {
              var u = r.getWindow(),
                d = u && u.$sf && u.$sf.ext && u.$sf.ext.hostURL,
                g = "function" == typeof d && d();
              if ("string" == typeof g) {
                c = encodeURIComponent(g);
                var l = !1;
                "function" == typeof URL ? (new URL(g), l = !0) : g.startsWith("http") && (l = !0), l ? (a.x = c, E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
                  output: c
                }, V.SAFEFRAME_HOSTURL, {
                  type: p.IMPRESSION_EVENT
                })) : E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
                  output: c
                }, V.SAFEFRAME_INVALID_HOSTURL, {
                  type: p.IMPRESSION_EVENT
                });
              }
            }
          } catch (e) {
            E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
              output: c
            }, V.SAFEFRAME_INVALID_HOSTURL, {
              type: p.IMPRESSION_EVENT
            });
          }
          a = function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) {
              var n = o(e[t]);
              ("" === n || "null" === n || "undefined" === n || null === n || f.isUndef(n)) && delete e[t];
            }
            return e;
          }(a), a = function (e) {
            var t,
              n,
              r = {};
            for (n in e) e.hasOwnProperty(n) && (t = e[n], f.isUndef(r[t]) ? r[t] = n : r[t] += n);
            var i = {};
            for (n in r) r.hasOwnProperty(n) && (i[t = r[n]] = n);
            return i;
          }(a);
          var I = [];
          for (var m in a) a.hasOwnProperty(m) && I.push({
            key: m,
            val: a[m]
          });
          return I.sort(function (e, t) {
            return e.val.length > t.val.length ? 1 : e.val.length < t.val.length ? -1 : 0;
          }), i = I, I;
        };
      return {
        detectTopURL: a,
        getDetectedURLs: function () {
          return i || a();
        }
      };
    },
    Be = function () {
      "use strict";

      return {
        detectTopURL: function () {
          return [];
        },
        getDetectedURLs: function () {
          return [];
        }
      };
    },
    Ge = function (t) {
      "use strict";

      var n = !1;
      return {
        measure: function (r) {
          (n = 0 === r.rsa) && t.trigger("notify", e._onSuspicious);
        },
        skipAsFraudulent: function () {
          return n;
        }
      };
    },
    ke = function () {
      "use strict";

      var e,
        t,
        n,
        r = [],
        i = {},
        o = {
          sl: "n"
        },
        a = 0,
        s = {
          i: 0,
          o: 0,
          n: 0,
          pp: 0,
          pm: 0
        },
        c = function (e) {
          var t = E.getAggregator().request(P.FEATURES);
          if (t && t.on("recoverOmidLostTime")) {
            var n = s.ri;
            s.ri = n ? n + e : e;
          }
        },
        u = function (e, t) {
          var n = new $(t);
          return i[e] = n, n;
        },
        d = function (e, t) {
          return (t = t || "") + {
            inView: "i",
            outOfView: "o",
            na: "n",
            partialViewMinus: "pm",
            partialViewPlus: "pp"
          }[e];
        },
        g = function () {
          f(o).each(function (e, t) {
            var i = r.length ? n - a : n;
            s[t] += i;
          }), a = n;
        },
        l = function (e) {
          r.length && g(), f(e).each(function (e, t) {
            var n, r;
            n = t, (r = o[e]) !== n && "n" === r && (s[n] += s.n), o[e] = t;
          }), r.length || g();
        },
        I = function (e) {
          p.NA;
          var r,
            o = e.adDimensions ? e.adDimensions.getRounded() : {
              width: 0,
              height: 0
            },
            a = function (e) {
              var t,
                n = {},
                r = e.winDimensions,
                i = e.adDimensions;
              return f.isDef(r) && r.hasValidDims() && (n.wc = r), f.isDef(i) && i.hasValidDims() && (n.ac = i, n.am = e.method, n.cc = e.containerDimensions), f({
                piv: "percentInView",
                obst: "obstructed",
                th: "tabHidden",
                reas: "reason"
              }).each(function (t, r) {
                var i = e[r];
                f.isDef(i) && (n[t] = i);
              }), "" === (t = f(n).toParams()) ? "" : "," + t;
            }(e),
            s = e.omidObstructions,
            c = {
              sl: d(e.viewState)
            };
          return n = pe.getTagTime(), l(c), c.t = n, r = f({
            toString: function () {
              return f(i).each(function (e, t) {
                t.fastForward();
              }), "{" + f(c).toParams() + this.details + this.breakdowns + "}";
            },
            details: a,
            breakdowns: {
              piv: [],
              as: [],
              toString: function () {
                var e = "",
                  t = function (e, t) {
                    return t.duration + "~" + t.state;
                  };
                return e += "piv:[" + f(this.piv).stringify(t) + "]", ",bkn:{" + (e += ",as:[" + f(this.as).stringify(t) + "]") + "}";
              }
            }
          }).mixin(c), f(r).mixin(e), r.width = o.width, r.height = o.height, f.isUndef(r.percentInView) && (r.percentInView = p.PIV_NA), f.isUndef(r.reason) && (r.reason = ""), f.isDef(s) && "" !== s && (r.omidObstructions = s), t = r, r;
        };
      return function () {
        u("piv", function (e) {
          var t,
            n = e.percentInView,
            r = [1, 25, 30, 50, 75];
          return 100 === n || 0 === n ? t = n : (f(r).each(function (e, i) {
            f.isUndef(t) && n < i && (t = r[e - 1]);
          }), f.isUndef(t) && (t = r[r.length - 1])), t;
        }), u("as", function (e) {
          var t = p.NA,
            n = e.adDimensions ? e.adDimensions.getRounded() : {
              width: t,
              height: t
            };
          return n.width + "." + n.height;
        });
        var e = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT);
        e && e.recoveredTime > -1 && c(e.recoveredTime);
      }(), {
        fastForward: function () {
          n = pe.getTagTime(), g();
        },
        registerLocation: function (t) {
          var n,
            a = !1;
          return o.sl == d(t.viewState) && r.length ? (n = new I(t), r[r.length - 1].details = n.details) : (n = new I(t), r.push(n), e = t.viewState, a = !0), E.getAggregator().trigger(w.NEW_SCREEN_EVENT, n), f(i).each(function (e, t) {
            -1 !== "piv|as".indexOf(e) ? (a && t.clear(), t.addState(n), r[r.length - 1].breakdowns[e] = t.get()) : t.addState(n);
          }), n;
        },
        stringify: function (e) {
          var t = "";
          return r.length && (t = f({
            slTimes: "{" + f(s).toParams() + "}",
            slEvents: "[" + r.slice(-e).join(",") + "]",
            slEventCount: r.length
          }).toParams()), t;
        },
        createViewabilityTracker: u,
        getCurrentLoc: function () {
          return d(e);
        },
        getCurrentEvent: function () {
          return t;
        },
        setRecoveredTimeInSlTimes: c
      };
    },
    He = {
      hashCode: function (e) {
        "use strict";

        var t,
          n,
          r = 0;
        if (0 === e.length) return r;
        for (t = 0, n = e.length; t < n; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
        return r;
      },
      rot: function (e) {
        "use strict";

        return e.replace(/[a-zA-Z]/g, function (e) {
          return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26);
        });
      },
      stringToFn: function (e) {
        "use strict";

        var n,
          r,
          i = t,
          o = e.split(".");
        for (n = 0; n < o.length; n++) if (r = i, i = i[o[n]], f.isUndef(i) || n === o.length - 1 && !f.isFunction(i)) return !1;
        return function () {
          i.apply(r, arguments);
        };
      },
      stringToProp: function (e) {
        "use strict";

        var t,
          n = Ve.getWindow(),
          r = e.split(".");
        for (t = 0; t < r.length && (n, n = n[r[t]], !f.isUndef(n)); t++);
        return n;
      },
      contains: function (e, t) {
        "use strict";

        return !!f.isStr(e) && -1 !== e.indexOf(t);
      },
      trim: function (e) {
        "use strict";

        return f.isFunction(e.trim) ? e.trim() : e.replace(" ", "");
      }
    };
  const Ye = function () {
      "use strict";

      const e = function () {
          const e = function (e) {
              return e && e.width && e.width > 30 && e.height && e.height > 30;
            },
            t = function (t) {
              const n = he.getDimensionFromAttributes(t);
              return e(n);
            };
          return {
            hasValidDimensions: function (n) {
              return t(n) || function (t) {
                const n = he.getDimensionFromStyle(t);
                return e(n);
              }(n);
            },
            hasValidDimentionAttributes: t
          };
        }(),
        t = /GoogleActiveViewElement/,
        n = /DfaVisibilityIdentifier_/,
        r = /doubleclick.net\/pcs\/click?/,
        i = /_blank/,
        o = function (e) {
          const t = e && he.tagNameIs(e, "a"),
            n = he.attributeMatches(e, "href", r),
            o = he.attributeMatches(e, "target", i);
          return t && n && o;
        },
        a = function (e) {
          const r = he.tagNameIs(e, "div"),
            i = he.attributeMatches(e, "class", t),
            o = he.attributeMatches(e, "id", n);
          return r && i && o;
        };
      return {
        getDFPGoogleDiv: function (e) {
          return he.traverseAndFindFirstMatchingNode(e, a);
        },
        getClickableImage: function (t) {
          let n, r;
          const i = he.traverseAndFindFirstMatchingNode(t, o);
          return i && (r = he.getFirstChildElement(i), he.isImageTag(r) && e.hasValidDimentionAttributes(r) && (n = r)), n;
        },
        getNodeMatchingMinimumSize: function (t) {
          return he.traverseAndFindFirstMatchingNode(t, e.hasValidDimensions);
        }
      };
    },
    je = function () {
      "use strict";

      const e = Ye(),
        t = function (e, t) {
          t.tag = he.getTagName(e), t.size = he.getDimensionFromAttributes(e) || he.getDimensionFromStyle(e);
        };
      return {
        getDFPValue: function (n) {
          let r;
          const i = e.getDFPGoogleDiv(n);
          return r = i ? function (n) {
            let r, i;
            const o = {
              type: 0
            };
            return n && (o.type = 1, r = e.getClickableImage(n), r ? (o.type = 2, t(r, o)) : (i = e.getNodeMatchingMinimumSize(n), i && (o.type = 3, t(i, o)))), o;
          }(i) : function (n) {
            const r = {
                type: 0
              },
              i = e.getNodeMatchingMinimumSize(n);
            return i && (r.type = 4, t(i, r)), r;
          }(n), r;
        }
      };
    },
    qe = {
      name: "hB",
      dependencies: [],
      creator: function () {
        "use strict";

        try {
          const e = Ve.getWindow(),
            t = Ve.getTop(),
            n = !(!t || !t.document) && Object.getOwnPropertyNames(t),
            r = () => {
              var t, n;
              const r = null == e ? void 0 : e.navigator,
                i = null === (t = null == r ? void 0 : r.userAgentData) || void 0 === t ? void 0 : t.brands;
              return (null === (n = null == i ? void 0 : i.map(e => null == e ? void 0 : e.brand)) || void 0 === n ? void 0 : n.includes("HeadlessChrome")) || !1;
            },
            i = {
              cdcP: f.stringifyTriState(n && -1 !== n.indexOf("cdc_adoQpoasnfa76pfcZLmcfl_Promise")),
              cdcA: f.stringifyTriState(n && -1 !== n.indexOf("cdc_adoQpoasnfa76pfcZLmcfl_Array")),
              cdcS: f.stringifyTriState(n && -1 !== n.indexOf("cdc_adoQpoasnfa76pfcZLmcfl_Symbol")),
              cyp: f.stringifyTriState(n && -1 !== n.indexOf("Cypress")),
              wd: f.stringifyTriState(f.isDef(e.navigator.webdriver) && !0 === e.navigator.webdriver),
              uaHC: f.stringifyTriState(e.navigator.userAgent.length > 0 && -1 !== e.navigator.userAgent.indexOf("HeadlessChrome")),
              chHC: f.stringifyTriState(r())
            },
            o = 1,
            a = e => f(e).contains(o),
            s = function (e) {
              E.getAggregator().trigger("addThrottledProp", "sca", "hbs", f(e).toION());
            };
          a(i) && s(i);
        } catch (e) {}
      },
      settings: {
        tier: 4,
        applies: function () {
          "use strict";

          return !0;
        }
      }
    },
    Ke = {
      name: "viewport",
      dependencies: [],
      creator: function () {
        "use strict";

        const e = {
            width: 4,
            height: 4
          },
          t = function (t) {
            return !he.isViewportVisible(t, e);
          },
          n = function (e, r) {
            return e !== r && t(e) ? e : e !== r && pe.isFriendlyToParent(e) ? n(e.parent, r) : void 0;
          },
          r = function () {
            const e = Ve.getWindow();
            return n(e, Ve.getWindow().top);
          },
          i = function () {
            return void 0 !== r();
          };
        return {
          MIN_VISIBLE_DIM: e,
          isHidden: i,
          isCurrentIframeTheHiddenFrame: function () {
            let e;
            const n = Ve.getWindow();
            return t(n) ? e = !0 : i() && (e = !1), e;
          },
          getWindowWithHiddenViewport: r
        };
      }
    },
    Xe = function (e) {
      "use strict";

      let t, n;
      const r = function (r) {
          t = e.setInterval(r, 100), n = e.setTimeout(function () {
            i();
          }, 42e4);
        },
        i = function () {
          t && (e.clearInterval(t), t = null), n && (e.clearTimeout(n), n = null);
        };
      return {
        onResize: function (t) {
          let n = e.innerWidth,
            o = e.innerHeight,
            a = !1;
          r(function () {
            const r = function () {
              const t = e.innerWidth,
                r = e.innerHeight;
              return t !== n || r !== o;
            }();
            r && (a = !0), a && !r && (t(), i(), a = !1), n = e.innerWidth, o = e.innerHeight;
          });
        }
      };
    },
    ze = {
      name: "AS_Finder",
      dependencies: ["viewport"],
      creator: function (e, t) {
        "use strict";

        let n;
        const r = function () {
          try {
            !function (r) {
              let i;
              const o = {};
              r !== n && (i = f.stringifyTriState(r), o.res1 = i, o.ps = i, o.ts = Ve.now(), o.psfr = f.stringifyTriState(e.isCurrentIframeTheHiddenFrame()), t.events.trigger("newState", o)), n = r;
            }(e.isHidden());
          } catch (e) {
            E.getAggregator().trigger("error", p.ERROR_CODES.HIDDEN2);
          }
        };
        return {
          start: function () {
            e.isHidden() && (r(), function () {
              const t = e.getWindowWithHiddenViewport();
              t && Xe(t).onResize(r);
            }());
          }
        };
      },
      settings: {
        emits: !0,
        applies: function (e, t, n) {
          "use strict";

          return n.embedded && !n.isBustedIframe() && !n.isSpecifiedAd();
        }
      }
    },
    Je = {
      name: "hA",
      dependencies: ["AS_Finder"],
      creator: function (t) {
        "use strict";

        let n = 0;
        const r = function (e, t) {
            E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.FF, e, f(t).toION());
          },
          i = function (e) {
            n < 2 && r("ha1", e), n++;
          };
        !function () {
          let n, o;
          if (pe.embedded) try {
            o = e.contextNode.parentNode, n = je().getDFPValue(o), r("dfp", function (e) {
              const t = {};
              return t.df = e.type, e.size && (t.sz = e.size.width + "." + e.size.height), e.tag && (t.dom = e.tag), t;
            }(n)), n.size && t && (t.events.on("newState", i), t.start());
          } catch (e) {
            E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.HIDDEN);
          }
        }();
      },
      settings: {
        tier: p.TIERS.PRE_IMPRESSION_FRAUD,
        applies: function (e) {
          "use strict";

          return e.on("usehaps");
        }
      }
    },
    Qe = {
      name: "thresholdDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        return {
          create: (e, t, n) => {
            let r;
            let i = t();
            const o = () => {
              const o = t();
              o !== i && !0 && (n(e, o), Ve.clearInterval(r)), i = o;
            };
            i && (n(e, i), r = Ve.setInterval(o, 50));
          }
        };
      }
    },
    $e = {
      name: "invisibleAds",
      dependencies: ["thresholdDetector"],
      creator: function (t) {
        "use strict";

        const n = {
            width: 4,
            height: 4
          },
          r = () => {
            const e = Ie.getStyle(Ve.getWindow().frameElement, "opacity");
            return parseFloat(e) < .2;
          },
          i = () => "hidden" === Ie.getStyle(Ve.getWindow().frameElement, "visibility"),
          o = (e, t) => {
            const n = {
              res1: f.stringifyTriState(t)
            };
            E.getAggregator().trigger(w.ADD_THROTTLED_PROP, "sca", e, f(n).toION());
          };
        try {
          const a = e.contextNode.parentNode,
            s = je().getDFPValue(a);
          he.isViewportVisible(Ve.getWindow(), n) && 2 === s.type && (r() && t.create("ha2", r, o), i() && t.create("ha3", i, o));
        } catch (e) {}
      },
      settings: {
        tier: 4,
        applies: function (e, t, n) {
          "use strict";

          return n.embedded && !n.isBustedIframe() && !n.isSpecifiedAd();
        }
      }
    };
  var Ze = function (e, n, r, i) {
      "use strict";

      var o,
        a,
        s = 0,
        c = 0,
        u = e && e.body,
        d = !1,
        g = function () {
          if ((o = Math.round(he.getNodeArea(e.body))) >= i) {
            for (var t, n, a = o + 20 * o / 100, u = e.querySelectorAll("iframe"), d = f.fromNodeListToArray(u); d.length && (c < a || s < r);) t = d.shift(), (n = Math.round(he.getNodeArea(t))) >= i && (s++, c += n);
            c >= a && s >= r && l();
          }
        },
        l = function () {
          var e = {
            va: o,
            bia: c,
            bin: s
          };
          E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.FF, n, f(e).toION()), d = !0;
        };
      u && (Ve.execAtEndOfThread(g), !d && f.isDef(t.MutationObserver) && (a = new MutationObserver(function (e) {
        d ? a.disconnect() : Ve.execAtEndOfThread(function () {
          f(e).each(function (e, t) {
            if (t.addedNodes.length) {
              var n = t.addedNodes[0];
              n && he.isElement(n) && he.tagNameIs(n, "IFRAME") && f.debounce(g, 10);
            }
          });
        });
      })).observe(e.body, {
        attributes: !1,
        childList: !0,
        characterData: !1
      }));
    },
    et = {
      name: "BS_InApp",
      dependencies: [],
      creator: function () {
        "use strict";

        var e = Ve.getWindow().document,
          t = e && e.body;
        E.getAggregator().request(P.MOBILE_APP).isMobileAppEnvironment() && t && nt.isValidMobileAdSize(e.body) && Ze(e, "bs1", 3, 100);
      },
      settings: {
        tier: p.TIERS.VIEWABILITY,
        applies: function (e, t, n) {
          "use strict";

          var r = n.isOmid() || n.isMraid(),
            i = !n.isDomless() && n.friendly && !n.embedded;
          return e.on("bas") && r && i && e.bootstrapOn("app");
        }
      }
    },
    tt = {
      name: "BS_Browser",
      dependencies: [],
      creator: function () {
        "use strict";

        var e = Ve.getWindow().document,
          t = e.body ? Math.round(he.getNodeArea(e.body)) : null;
        !E.getAggregator().request(P.MOBILE_APP).isMobileAppEnvironment() && t && Ze(e, "bs2", 10, t);
      },
      settings: {
        tier: p.TIERS.VIEWABILITY,
        applies: function (e, t, n) {
          "use strict";

          var r = !e.bootstrapOn("app") && !n.isDomless();
          return e.on("bbs") && n.embedded && r;
        }
      }
    };
  const nt = {
    isValidMobileAdSize: e => {
      const t = he.getRect(e);
      return f([{
        width: 320,
        height: 50
      }, {
        width: 300,
        height: 250
      }, {
        width: 336,
        height: 280
      }, {
        width: 300,
        height: 250
      }, {
        width: 728,
        height: 90
      }, {
        width: 468,
        height: 60
      }, {
        width: 336,
        height: 280
      }]).find((e, n) => n.width === t.width && n.height === t.height);
    }
  };
  var rt = function () {
      "use strict";

      return {
        createInstance: function (e) {
          return pe.isDomless() ? new ot() : new it(e);
        }
      };
    },
    it = function (e) {
      "use strict";

      var n,
        r,
        i,
        o = new B(),
        a = new k(),
        s = new ut(o),
        c = new st(),
        u = new pt(),
        d = new lt(o, e),
        g = function () {
          return f.isUndef(i) && (i = new gt(o)), i;
        };
      return {
        isApplicable: function (e) {
          return f.isDef(t.JSON) && f.isDef(t.postMessage) && (!e.isOmidNative() || e.isOmidForWeb());
        },
        start: function () {
          o.provide({
            frameCollection: function () {
              return s;
            },
            adProxy: function () {
              return u;
            },
            adTalkMessage: function (e) {
              return new at(e, o);
            },
            adTalkMessageCollection: function () {
              return c;
            },
            idMapModule: g,
            interFrameQuerySelector: function (e) {
              return new ft(e);
            }
          }), a.traverse(s.addFrame), d.startListening(), d.sendToKnownFrames(), E.getAggregator().once(w.STOP_AD_TALK, function () {
            d.stopListening();
          }), E.getAggregator().provide(P.AD_TALK_EVENT_AGGREGATOR, o);
        },
        sendAdTalkCall: d.sendAdTalkCall,
        getFrameMap: function () {
          return f.isUndef(n) && (n = new dt(o)), n;
        },
        getFrameMapIncludingPeerCase: function () {
          return f.isUndef(r) && (r = new dt(o, !0)), r;
        },
        getIdMap: g
      };
    };
  const ot = function () {
    "use strict";

    return {
      isApplicable: () => !1,
      start: () => {}
    };
  };
  var at = function (t, n) {
      "use strict";

      var r,
        i = n.request(P.AD_PROXY).myIdCard,
        o = n.request(P.FRAME_COLLECTION).getMe().getStringifiedPosition();
      r = E.getAggregator().request(P.FEATURES).on("swapids") ? e.oid : e.asid;
      var a, s;
      return {
        messageContent: t || {},
        srcAsid: e.asid,
        srcTagId: i.tagId,
        srcIsEmbedded: pe.embedded,
        srcIsFriendly: pe.friendly,
        srcBirthdate: e.birthdate,
        iasCommonId: r.split("-")[2],
        nodeSelector: pe.friendly ? "[" + p.AD_IDENTIFIER + "-" + e.asid + "]" : 'iframe[src*="' + ((s = (a = Ve.getWindow()).location && a.location.href) && s.replace(/^https?\:\/\//i, "")) + '"]',
        positionStr: o,
        version: "0.1"
      };
    },
    st = function () {
      "use strict";

      var e = {};
      return {
        add: function (t) {
          var n = t && t.srcAsid;
          n && (e[n] = t);
        },
        map: function (t) {
          return f(e).map(t);
        },
        has: function (t) {
          var n = t && t.srcAsid;
          return e[n];
        }
      };
    },
    ct = function (n, r, i, o) {
      "use strict";

      var a,
        s = n == t;
      (a = {
        position: r.slice(0),
        id: r.join("-"),
        isMe: s,
        isLeaf: !n.frames.length,
        adProxies: s ? i : [],
        selfDescription: void 0,
        unifiedId: e.birthdate,
        srcIsEmbedded: o ? o.srcIsEmbedded : void 0,
        inbox: o ? [o] : []
      }).getDomObj = function () {
        return n;
      }, a.getStringifiedPosition = function () {
        return f(a.position).map(function (e, t) {
          return f.toBase(Number(t) + 1, 36);
        }).join("");
      }, a.isValidForMapping = function () {
        return a.isLeaf || a.isMe || f.isDef(a.selfDescription);
      };
      var c = function (e, t) {
        return !f(e).find(function (e, n) {
          return n.adSafeId && n.adSafeId === t.adSafeId;
        });
      };
      return a.addInformationFromSrc = function (e, t) {
        var n, r, i, o;
        n = t, r = a.adProxies, i = n.adProxies, o = [], r.length && i.length ? f(i).each(function (e, t) {
          c(r, t) && o.push(t);
        }) : o = i, a.adProxies = r.concat(o), function (e) {
          f(a.inbox).find(function (t, n) {
            return n.srcAsid && n.srcAsid === e.srcAsid;
          }) || a.inbox.push(e);
        }(e), a.srcIsEmbedded = e.srcIsEmbedded, a.selfDescription = t;
      }, a;
    },
    ut = function (e) {
      "use strict";

      var t = [],
        n = {},
        r = {
          noMe: !0
        };
      return {
        addFrame: function (i, o, a) {
          var s = e.request(P.AD_PROXY).getAll(),
            c = new ct(i, o, s, a);
          return t.push(c), n[c.id] = c, c.isMe && (r = c), c;
        },
        getFrame: function (e) {
          return n[e];
        },
        list: t,
        dictionary: n,
        getMe: function () {
          return r;
        }
      };
    },
    dt = function (t, n) {
      "use strict";

      var r = function (e, t) {
          var r = t.adProxies,
            a = "";
          if (t.isValidForMapping()) return a += n ? o(r, t.getStringifiedPosition()) : i(r, t);
        },
        i = function (e, t) {
          var n = "";
          return n += t.getStringifiedPosition(), n += t.isMe ? "*" : "", n += e.length ? "." + e[0].tagId : "";
        },
        o = function (e, t) {
          var n = "";
          return e.length ? n += f(e).stringify(function (e, n) {
            return a(n, t);
          }, "|") : n += t, n;
        },
        a = function (t, n) {
          return n + (e.asid === t.adSafeId ? "*" : "") + "." + t.tagId;
        };
      return {
        output: function () {
          var e = t.request(P.FRAME_COLLECTION),
            n = f(e.list).stringify(r, "|");
          return f.toBase(e.getMe().unifiedId, 62) + "+" + n;
        }
      };
    },
    gt = function (t) {
      "use strict";

      var n = t.request(P.FRAME_COLLECTION).getMe().getStringifiedPosition(),
        r = e.contextNode.parentNode,
        i = t.request(P.INTER_FRAME_QUERY_SELECTOR, r),
        o = function (e) {
          var t = !1,
            o = !pe.embedded,
            a = "BODY" !== he.getNodeName(r) && "HEAD" !== he.getNodeName(r),
            s = e.srcIsEmbedded && !function (e) {
              var t = "0.1" !== e.version,
                n = e.nodeSelector && -1 === e.nodeSelector.indexOf(p.AD_IDENTIFIER);
              return t ? n : !e.srcIsFriendly;
            }(e);
          return t = o && a && !s ? !!function (e) {
            return i.queryFor(e.nodeSelector);
          }(e) : !!function (e) {
            var t = e.positionStr,
              r = e.srcIsEmbedded && pe.embedded,
              i = 0 === n.indexOf(t) || 0 === t.indexOf(n);
            return r && i;
          }(e), t;
        };
      return {
        output: function () {
          var r,
            i,
            a = n + "*";
          return (i = t.request(P.AD_TALK_MESSAGE_COLLECTION).map(function (t, n) {
            var r;
            return t !== e.asid && o(n) && (r = function (e) {
              return e.positionStr + "." + e.srcAsid + "." + e.transferDuration + "_" + e.srcTagId;
            }(n)), r;
          })).push(a), r = i.join("|"), r.length > 120 && (r = function (e) {
            return e && e.substr(0, 120) + ".of" + e.length;
          }(r), E.getAggregator().trigger(w.STOP_AD_TALK)), r;
        },
        isCandidateForMyIdMap: o
      };
    },
    ft = function (e) {
      "use strict";

      var t = new k(),
        n = function (e, t) {
          return he.querySelector(function (e) {
            var t = e,
              n = "IFRAME" === he.getNodeName(e),
              r = he.isWindow(e);
            return n ? t = e.contentWindow.document : r && (t = e.document), t;
          }(e), t);
        };
      return {
        queryFor: function (r) {
          var i = null;
          return r && (i = function (r, i) {
            var o, a, s;
            try {
              (a = n(r, i)) || (o = t.getFrames(!0, e), f(o).findFirst(function (e, t) {
                return s = n(t, i);
              }));
            } catch (e) {}
            return a || s || null;
          }(e, r)), i;
        }
      };
    },
    lt = function (t) {
      "use strict";

      var n,
        r,
        i = !1,
        o = E.getAggregator().request(P.FEATURES);
      r = o.on("swapids") ? e.oid : e.asid;
      var a = function (n) {
          var i = r.split("-")[2],
            o = !t.request(P.AD_TALK_MESSAGE_COLLECTION).has(n) && n.srcAsid !== e.asid;
          return n.hasOwnProperty("messageContent") && i === n.iasCommonId && o;
        },
        s = function () {
          var e = t.request(P.FRAME_COLLECTION).getMe(),
            n = {
              self: e,
              unifiedId: e.unifiedId
            };
          return t.request(P.AD_TALK_MESSAGE, n);
        },
        c = function () {
          var e = p.DT_CODES.ADTALK;
          t.request(P.FRAME_COLLECTION);
          i || (i = !0), E.getAggregator().trigger(w.SEND_DT, e);
        },
        u = function (e, n, r) {
          var o, a, s, u, d, g, l;
          try {
            o = t.request(P.FRAME_COLLECTION), a = t.request(P.AD_TALK_MESSAGE_COLLECTION), s = n.messageContent.self, a.add(n), g = o.getMe(), l = s, g.unifiedId > l.unifiedId && (g.unifiedId = l.unifiedId), n.transferDuration = function (e) {
              return Ve.now() - e.sentTime;
            }(n), u = o.getFrame(s.id), d = u, f.isUndef(d) || f.isUndef(d.selfDescription) ? ((u = u || o.addFrame(e.source, s.id.split("-"), n)).addInformationFromSrc(n, s), r()) : u.addInformationFromSrc(n, s), i && t.request(P.ID_MAP_MODULE).isCandidateForMyIdMap(n) && c();
          } catch (e) {
            E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.ADTALK_DUBIOUS);
          }
        };
      return {
        sendAdTalkCall: c,
        sendToKnownFrames: function () {
          new q().send(s);
        },
        startListening: function () {
          (n = new j()).listen(a, u, s);
        },
        stopListening: function () {
          n && n.stop();
        },
        validateMessage: a,
        processMessage: u,
        createMessage: s
      };
    },
    Et = function () {
      "use strict";

      var e = E.getAggregator().request(P.IDS),
        t = e.getAsid();
      return {
        tagId: e.getFwId(),
        adSafeId: t
      };
    },
    pt = function () {
      "use strict";

      var e,
        t = [],
        n = function (e) {
          var n = new Et(e);
          return t.push(n), n;
        };
      return e = n(), {
        createNew: n,
        getAll: function () {
          return t;
        },
        myIdCard: e
      };
    },
    It = function (e, t) {
      "use strict";

      var n,
        r,
        i = p.NA,
        o = i,
        a = !1,
        s = !1,
        c = !1,
        u = !t,
        d = E.getAggregator().request(P.BROWSER),
        g = function (e, t) {
          (function (e) {
            var t = E.getAggregator().request(P.MOBILE_APP);
            return (e.browserIs(p.BROWSERS.CHROME) || e.isAndroidWebViewBrowser() || e.browserIs(p.BROWSERS.WEBKIT) || e.browserIs(p.BROWSERS.MSEDGE)) && !t.isMobileAppEnvironment() && e.hasResizeObserver();
          })(d) && Ve.getResizeObserver(function (n, r) {
            var i = n.pop();
            i.contentRect.height * i.contentRect.width > 0 && (t.unobserve(e), t.observe(e), r.disconnect());
          }).observe(e);
        },
        l = function () {
          var t = Ve.getIntersectionObserver(function (e, t) {
            var r = e.pop(),
              a = r.intersectionRect.width * r.intersectionRect.height / (r.boundingClientRect.width * r.boundingClientRect.height) * 100;
            isNaN(a) && (g(r.target, t), a = 0), i = Math.min(a, 100), n = r.boundingClientRect, i !== o && Ve.execAtEndOfThread(function () {
              E.getAggregator().trigger(w.IO_PIV_CHANGE, i);
            }), o = i;
          }, {
            threshold: p.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER
          });
          u && Ve.execAtEndOfThread(function () {
            i === p.NA && (i = 0);
          }), t.observe(I(e)), u && Ve.execAtEndOfThread(function () {
            pe.isBustedIframe() || E.getAggregator().trigger(w.DELAYED_VIEWABILITY_READY);
          }), a = !0;
        },
        I = function (t) {
          if (!f.isUndef(t)) {
            if (c) {
              var n = e.document,
                i = n.createElement("div");
              f(i.style).mixin({
                position: "absolute",
                width: "100%",
                opacity: "0",
                height: "100%",
                zIndex: -999,
                top: "0px",
                left: "0px"
              }), i[p.IAS_DETECTOR] = !0, n.body.appendChild(i), t = i;
            }
            return r = t, t;
          }
        };
      return {
        start: function () {
          var t = function () {
            var t;
            try {
              e.document && (c = !0, t = {
                bodyElement: e.document.body,
                document: e.document
              });
            } catch (e) {
              s = !0;
            }
            return t;
          }();
          t && null !== t.bodyElement ? l() : t && t.document ? Ie.whenReady(l, t.document) : s ? E.getAggregator().request("errors").add(p.ERROR_CODES.BUSTED_IFRAME_IN_IO) : l();
        },
        isReady: function () {
          return i !== p.NA;
        },
        isStarted: function () {
          return a;
        },
        getAdNodeDimensions: function () {
          var e;
          return n && (e = Ae({
            scrX: void 0,
            scrY: void 0,
            width: n.width,
            height: n.height
          })), e;
        },
        getObservedNode: function () {
          return r;
        },
        getPiv: function () {
          return i;
        }
      };
    },
    mt = function () {
      "use strict";

      var e = !1;
      return Ie.whenReady(function () {
        E.getAggregator().trigger(w.START_VIEWABILITY_LOOP), e = !0;
      }), {
        loopStarted: function () {
          return e;
        }
      };
    },
    Tt = {
      name: "loopDelay",
      dependencies: [],
      creator: mt,
      settings: {
        applies: function (e, t, n) {
          "use strict";

          return e.bootstrapOn("allowViewability");
        },
        tier: p.TIERS.VIEWABILITY
      }
    },
    At = function () {
      "use strict";

      return {
        start: function (e) {
          E.getAggregator().on(w.MEASURABLE, function () {
            e();
          });
        },
        isApplicable: function (e, t) {
          return !t.browserIs(p.BROWSERS.WEBKIT) || !e.isImmediatelyMeasurable();
        }
      };
    },
    ht = function () {
      "use strict";

      return {
        start: function (e) {
          e();
        },
        isApplicable: function (e) {
          return e.isImmediatelyMeasurable();
        }
      };
    },
    _t = function (t, n, r) {
      "use strict";

      var i = !1,
        o = function () {
          try {
            n.impressionIsIdentifiable() && !i ? (i = !0, E.getAggregator().trigger(w.NOTIFY, e._onMeasurable)) : n.impressionIsIdentifiable() || __IntegralASDiagnosticCall("rtsmeas_imp_not_iden", {}, e);
          } catch (t) {
            __IntegralASDiagnosticCall("rtsmeas_send_noti_error", t, e);
          }
        };
      return {
        start: function () {
          try {
            var n,
              i = [Ot(), Dt(), ht(), At()];
            (n = f(i).findFirst(function (e, n) {
              return n.isApplicable(r, t);
            })) ? n.start(o) : __IntegralASDiagnosticCall("rtsmeas_no_chosen_strategy", {}, e);
          } catch (t) {
            __IntegralASDiagnosticCall("rtsmeas_start_error", t, e);
          }
        },
        isApplicable: function (t) {
          return t.bootstrapOn("useViewabilityNotification") && f.isDef(e._onMeasurable);
        }
      };
    },
    Dt = function () {
      "use strict";

      return {
        start: function (e) {
          var t, n;
          (t = E.getAggregator(), n = [w.AD_IMPRESSION, w.MEASURABLE], {
            onAll: function (e) {
              var r = {};
              f(n).each(function (i, o) {
                t.on(o, function () {
                  r[o] = 1, f(r).keys().length === n.length && (r = {}, e());
                });
              });
            }
          }).onAll(function () {
            e();
          });
        },
        isApplicable: function (e, t) {
          var n = t.getIOSVersion() >= 9;
          return (!t.browserIs(p.BROWSERS.WEBKIT) || n) && pe.isVideo();
        }
      };
    },
    Ot = function () {
      "use strict";

      return {
        start: function (e) {
          E.getAggregator().once(w.AD_IMPRESSION, function () {
            e();
          });
        },
        isApplicable: function (e) {
          return e.isImmediatelyMeasurable() && pe.isVideo();
        }
      };
    },
    St = function (e, t, n) {
      "use strict";

      var r = ["rjss", "jss", "jload"];
      return {
        accepts: function () {
          var e = f.isDef(f(r).find(function (e, t) {
            return t === n;
          }));
          return t.accepts() && t.isMediaType(p.MEDIA_TYPE.DISPLAY) && e;
        },
        isImmediate: function () {
          return !0;
        },
        isMediaType: t.isMediaType,
        supportsAdContainerGeometry: function () {
          return t.supportsAdContainerGeometry();
        },
        start: function () {}
      };
    },
    vt = function (t) {
      "use strict";

      var n = Ve.getWindow(),
        r = n && n.omid3p,
        i = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT),
        o = !!(t && t.isSupported && t.isSupported()),
        a = !!(r && f.isFunction(r.registerSessionObserver) && f.isFunction(r.addEventListener));
      return {
        accepts: function () {
          return (o || a) && !e.videoId;
        },
        isMediaType: function (e) {
          return e === i.mediaType;
        },
        supportsAdContainerGeometry: function () {
          return !0;
        }
      };
    },
    Rt = function (e, t, n) {
      "use strict";

      var r,
        i = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT),
        o = i.isHtml && i.isWeb,
        a = Ve.getWindow(),
        s = a && a.omid3p,
        c = !!(s && f.isFunction(s.registerSessionObserver) && f.isFunction(s.addEventListener)) ? s : e;
      r = o ? ["rjss", "jss", "jload", "jsvid", "fwjsvid"] : ["rjss", "jss", "jload"];
      return {
        accepts: function () {
          var e = f.isDef(f(r).find(function (e, t) {
            return t === n;
          }));
          return t.accepts() && t.isMediaType(p.MEDIA_TYPE.VIDEO) && e;
        },
        isImmediate: function () {
          return !0;
        },
        isMediaType: t.isMediaType,
        supportsAdContainerGeometry: function () {
          return t.supportsAdContainerGeometry();
        },
        start: function () {
          c.addEventListener("start", function (e) {
            E.getAggregator().trigger(w.AD_IMPRESSION);
          });
        }
      };
    },
    Nt = function (e) {
      "use strict";

      return {
        resolve: function () {
          return f(e).findFirst(function (e, t) {
            return t.environment.accepts();
          });
        }
      };
    },
    yt = function (n) {
      "use strict";

      var r = !1,
        i = !1,
        o = !1,
        a = !1,
        s = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT);
      s.queuedOutputItems = [], s.cachedEvents = [], s.cachedGeometryEventsReceived = !1, s.cachedVideoEventsReceived = !1, s.recoveredTime = -1;
      var c = new Er(),
        u = E.getAggregator().request(P.OMID_AS_VERIFICATION_PARAMS),
        d = E.getAggregator().request(P.FEATURES),
        l = Ve.getWindow(),
        I = l && l.omid3p,
        m = !!(I && f.isFunction(I.registerSessionObserver) && f.isFunction(I.addEventListener)) ? I : n,
        T = !1;
      s.omidEarlyExit = !1, s.mediaType = "display";
      var A = !1,
        h = function (e, t) {
          s.queuedOutputItems.push({
            code: e,
            value: t
          });
        },
        _ = function (e, t, n) {
          E.getAggregator().trigger(e, t, n);
        },
        D = function (e) {
          E.getAggregator().trigger(e);
        },
        O = function () {
          r && i && (!a || o) && (t.omidSupported = !0, s.hasOwnProperty("impressionType") && h("oiet", s.impressionType), s.hasOwnProperty("creativeType") && h("oct", s.creativeType), s.underEvaluation && h("oef", !0), s.exitedOASRS = !0, T = !0, g(u && u.IAS && Object.keys(u.IAS).length > 0 ? u.IAS : u));
        },
        S = function (t) {
          function n() {
            return pe.isOmidForWeb() || t.data.hasOwnProperty("supportsLoadedEvent") && ("true" === t.data.supportsLoadedEvent || !0 === t.data.supportsLoadedEvent) && "string" == typeof t.data.creativeType && "" !== t.data.creativeType;
          }
          var c = "0";
          if ("sessionStart" === t.type) {
            s.adSessionType = t.data.context.adSessionType || "undefined", s.environment = t.data.context.environment, s.accessMode = t.data.context.accessMode || "limited", s.omidNativeInfo = t.data.context.omidNativeInfo, s.omidJsInfo = t.data.context.omidJsInfo, s.deviceInfo = t.data.context.deviceInfo, s.app = t.data.context.app, s.supports = t.data.context.supports, s.app && "string" == typeof s.app.appId && s.app.appId.toLowerCase().indexOf("pandora") > -1 && (s.ignoreDivAsCandidate = !0), t.data.hasOwnProperty("contentUrl") && (s.contentUrl = t.data.contentUrl), t.data.context.hasOwnProperty("underEvaluation") && (s.underEvaluation = t.data.context.underEvaluation), s.isJavaScript = "javascript" === s.adSessionType, s.isNative = "native" === s.adSessionType || "javascript" === s.adSessionType, s.isLimitedSandbox = "app" === s.environment ? pe.embedded : "full" !== t.data.context.accessMode, s.isHtml = "html" === t.data.context.adSessionType, s.isWeb = "web" === t.data.context.environment, s.partnerName = s.omidNativeInfo && s.omidNativeInfo.partnerName && s.omidNativeInfo.partnerName.toLowerCase(), u = t.data.verificationParameters, s.isOmidForWebEnvironment = s.isHtml && s.isWeb, s.element = t.data.context.videoElement || t.data.context.slotElement || null, n() ? (a = !0, s.useOMID13Logic = !0, h("ohand", "13"), m.addEventListener("video", R), m.addEventListener("media", R)) : h("ohand", "12"), s.isOmidForWebEnvironment || (s.integratedBlocking = e && e.isResolved && pe.integratedBlockingApplies(e.mobFwUrl), s.integratedBlocking && d && d.on("exitOASRSEarly") && (s.omidEarlyExit = !0, c = "1", s.omidEarlyExit && e.mobFwUrl.indexOf("xmtp=v") > -1 && (s.mediaType = "video")), !t.data.mediaType || "display" !== t.data.mediaType && "video" !== t.data.mediaType || (s.mediaType = t.data.mediaType)), s.omidEarlyExit && (i = !0, h("omtp", s.mediaType), n() && (o = !0), "video" === s.mediaType && (s.isVideo = !0), s.isNativeVideo = s.isNative && s.isVideo, s.isDisplay = "display" === s.mediaType), "audio" === t.data.creativeType && (s.accessMode = "limited", s.isLimitedSandbox = !0);
            for (var g, f, l, E = [{
                root: "omidNativeInfo",
                code: "onpn",
                field: "partnerName"
              }, {
                root: "omidNativeInfo",
                code: "onpv",
                field: "partnerVersion"
              }, {
                root: "omidJsInfo",
                code: "ojpn",
                field: "partnerName"
              }, {
                root: "omidJsInfo",
                code: "ojpv",
                field: "partnerVersion"
              }, {
                root: "omidJsInfo",
                code: "osev",
                field: "serviceVersion"
              }, {
                root: "omidJsInfo",
                code: "oscv",
                field: "sessionClientVersion"
              }, {
                root: "app",
                code: "applv",
                field: "libraryVersion"
              }, {
                root: "app",
                code: "appid",
                field: "appId"
              }, {
                root: "deviceInfo",
                code: "dty",
                field: "deviceType"
              }, {
                root: "deviceInfo",
                code: "osn",
                field: "os"
              }, {
                root: "deviceInfo",
                code: "osv",
                field: "osVersion"
              }], p = 0; p < E.length; p++) g = E[p].root, f = E[p].field, l = E[p].code, "object" == typeof s[g] && void 0 !== s[g][f] && h(l, s[g][f]);
            h("oast", s.adSessionType), h("oacm", s.accessMode), h("oenv", s.environment), s.hasOwnProperty("contentUrl") && h("ocon", encodeURIComponent(s.contentUrl || "")), h("oerl", c), h("oses", pe.getTagTime()), r = !0, O();
          }
          if ("sessionError" === t.type) {
            var I = "string" == typeof t.data.errorType ? t.data.errorType : "NoErrType",
              A = "string" == typeof t.data.message ? t.data.message : "NoMessage",
              D = I + "_" + encodeURIComponent(A);
            T ? _(w.ADD_OUTPUT_ITEM, {
              output: D
            }, V.OMID_SESSION_ERROR) : h(V.OMID_SESSION_ERROR, D);
          }
        },
        v = function (e) {
          e.type === p.IMPRESSION_EVENT && (s.omidImpressionArrived = !0, D(w.OMID_IMPRESSION_ARRIVED), s.mediaType = "web" === s.environment ? e.data.mediaType || "video" : e.data.mediaType, h("omtp", s.mediaType), "audio" === e.data.creativeType && (s.accessMode = "limited", s.isLimitedSandbox = !0), h("oimp", pe.getTagTime()), "video" === e.data.mediaType && (s.isVideo = !0), function (e) {
            return e.data.adView && (e.data.viewport || s.isWeb);
          }(e) && (s.impressionViewabilityMeasurement = {
            type: "geometryChange",
            data: {
              viewport: e.data.viewport,
              adView: e.data.adView
            },
            timestamp: e.timestamp
          }, void 0 === s.geometryArrived && c.checkForViewAttachmentBasedOnAdSessionType(s, e.data.adView) && (s.geometryArrived = !0, D(w.OMID_REND_GEO_UPDATE))), e.data.hasOwnProperty("impressionType") && !o && (s.impressionType = e.data.impressionType), s.isNativeVideo = s.isNative && "video" === e.data.mediaType, s.isDisplay = "display" === e.data.mediaType, i = !0, O());
        },
        R = function (e) {
          if (e && "start" === e.type) return s.videoStartArrived = !0, void D(w.OMID_REND_VIDEO_START);
          "loaded" !== e.type || s.omidLoadedArrived || (h("oloa", pe.getTagTime()), o = !0, s.omidLoadedArrived = !0, D(w.OMID_LOADED_ARRIVED), e.data.hasOwnProperty("creativeType") && (s.creativeType = e.data.creativeType), "audio" === s.creativeType && (s.accessMode = "limited", s.isLimitedSandbox = !0), e.data.hasOwnProperty("impressionType") && (s.impressionType = e.data.impressionType), !0 === s.omidEarlyExit && (A || (_(w.ADD_THROTTLED_OUTPUT_ITEM, "oiet", s.impressionType), _(w.ADD_THROTTLED_OUTPUT_ITEM, "oct", s.creativeType), A = !0)), O());
        },
        N = function (e) {
          e && e.data && e.data.interactionType && "click" === e.data.interactionType && xt.omid.trackClick();
        };
      return {
        start: function () {
          m.registerSessionObserver(S, "IAS"), m.addEventListener(p.IMPRESSION_EVENT, v), m.addEventListener(w.AD_USER_INTERACTION, N);
        }
      };
    },
    Ct = function () {
      "use strict";

      return {
        accepts: function () {
          return !0;
        }
      };
    },
    Mt = function () {
      "use strict";

      var e = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT),
        t = E.getAggregator().request(P.OMID_VERIFICATION_CLIENT),
        n = new vt(t),
        r = e.isHtml && e.isWeb;
      return {
        accepts: function () {
          return n.accepts() && r;
        }
      };
    },
    wt = function () {
      "use strict";

      return {
        start: function () {
          g();
        }
      };
    };
  const bt = ({
    jsInfoCode: e,
    output: t,
    errorCode: n
  }) => {
    try {
      E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
        output: t
      }, e), E.getAggregator().trigger(w.SEND_DT, p.DT_CODES.PERFORMANCE);
    } catch (e) {
      E.getAggregator().trigger(w.ERROR, n);
    }
  };
  class Pt {
    constructor({
      tagStartTime: e
    }) {
      this.initClickTracking = ({
        clickSource: e
      }) => {
        this.clickData[e] || (this.clickData[e] = []);
      }, this.getClicks = ({
        clickSource: e
      }) => this.clickData[e], this.setupTrackAndBroadcastClick = ({
        clientX: e,
        clientY: t,
        clickSource: n
      }) => {
        const r = [e, t, pe.getTagTime()];
        this.getClicks({
          clickSource: n
        }).push(r), bt({
          output: f(this.clickData).toION(),
          errorCode: "Q",
          jsInfoCode: "clks"
        });
      }, this.trackClick = ({
        event: e,
        clickSource: t
      }) => {
        const {
          clientX: n,
          clientY: r
        } = e;
        this.setupTrackAndBroadcastClick({
          clientX: n,
          clientY: r,
          clickSource: t
        });
      }, this.trackTouch = ({
        touchEvent: e,
        clickSource: t
      }) => {
        const {
          clientX: n,
          clientY: r
        } = {
          clientX: Math.round(e.clientX),
          clientY: Math.round(e.clientY)
        };
        this.setupTrackAndBroadcastClick({
          clientX: n,
          clientY: r,
          clickSource: t
        });
      }, this.trackOmidClick = () => {
        this.initClickTracking({
          clickSource: "om"
        }), this.trackClick({
          event: {
            clientX: 0,
            clientY: 0
          },
          clickSource: "om"
        });
      }, this.trackAdComponentClick = e => {
        this.initClickTracking({
          clickSource: "ac"
        }), this.trackClick({
          event: e,
          clickSource: "ac"
        });
      }, this.trackMobileTouch = e => {
        if (e.changedTouches && e.changedTouches[0]) {
          const t = e.changedTouches[0];
          this.initClickTracking({
            clickSource: "mt"
          }), this.trackTouch({
            touchEvent: t,
            clickSource: "mt"
          });
        }
      }, this.clickData = {}, this.tagStartTime = e;
    }
  }
  class Vt {
    constructor({
      tagStartTime: e
    }) {
      this.trackAdComponentMouseOver = () => {
        this.hoverData.timeToFirstHover || (this.hoverData.timeToFirstHover = pe.getTagTime()), this.hoverData.hoverCount += 1, this.hoverTimer.startTimer(), bt({
          output: f(this.hoverData.getData()).toION(),
          errorCode: "he",
          jsInfoCode: "hov"
        });
      }, this.trackAdComponentMouseOut = () => {
        const e = this.hoverTimer.endTimer();
        (e || 0 === e) && (this.hoverData.totalHoverTime += e, bt({
          output: f(this.hoverData.getData()).toION(),
          errorCode: "he",
          jsInfoCode: "hov"
        }));
      }, this.tagStartTime = e, this.hoverData = new Lt(), this.hoverTimer = new Ft();
    }
  }
  class Lt {
    constructor() {
      this.getData = () => [this.timeToFirstHover, this.hoverCount, this.totalHoverTime], this.hoverCount = 0, this.totalHoverTime = 0, this.timeToFirstHover = 0;
    }
  }
  class Ft {
    constructor() {
      this.startTime = 0;
    }
    startTimer() {
      this.startTime = new Date().getTime();
    }
    endTimer() {
      let e;
      return this.startTime && (e = new Date().getTime() - this.startTime), this.startTime = 0, e;
    }
  }
  const {
      birthdate: Ut
    } = e,
    xt = new class {
      constructor({
        tagStartTime: e
      }) {
        this.finalizeAllCollectedData = () => {
          this.hover.trackAdComponentMouseOut();
        }, this.tagStartTime = e, this.click = new Pt({
          tagStartTime: e
        }), this.hover = new Vt({
          tagStartTime: e
        });
      }
      get adComponent() {
        return {
          trackClick: this.click.trackAdComponentClick,
          trackMouseOver: this.hover.trackAdComponentMouseOver,
          trackMouseOut: this.hover.trackAdComponentMouseOut
        };
      }
      get mobile() {
        return {
          trackTouch: this.click.trackMobileTouch
        };
      }
      get omid() {
        return {
          trackClick: this.click.trackOmidClick
        };
      }
    }({
      tagStartTime: Ut
    });
  var Wt = function (n, r) {
      "use strict";

      var i = "videoPlaybackEvent",
        o = [],
        a = new Date().getTime(),
        s = 0,
        c = 1,
        u = 0,
        d = !1,
        g = new we(),
        l = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT),
        I = Ve.getWindow(),
        m = I && I.omid3p,
        T = !!(m && f.isFunction(m.registerSessionObserver) && f.isFunction(m.addEventListener)) ? m : n,
        A = !1,
        h = !1,
        _ = {
          isEmpty: function () {
            return 0 === o.length;
          },
          toString: function () {
            for (var e = "{vEventCount:" + o.length + ",vEvents:[", t = 0; t < o.length; t++) {
              var n = o[t];
              e += (t > 0 ? ",{" : "{") + "t:" + n.t + ",rt:" + n.rt + ",tp:" + n.tp + ",sl:" + n.sl + ",ad_duration:" + n.ad_duration + ",volume:" + n.volume + ",devol:" + n.devol + "}";
            }
            return e += "]}";
          }
        },
        D = function () {
          d = !0;
        },
        O = function (n) {
          var g,
            I,
            m,
            T = "start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish",
            _ = "complete|pause|bufferStart|skipped";
          if (-1 !== ("|" + T + "|" + _ + "|playerStateChange|loaded|volumeChange|").indexOf("|" + n.type + "|")) try {
            var D,
              O = "",
              S = n.hasOwnProperty("timestamp") ? n.timestamp : new Date().getTime(),
              v = S - (e.birthdate || S + 1),
              R = "n",
              N = !1;
            switch (n.type) {
              case "start":
                O = w.AD_VIDEO_START, l.videoStartArrived = !0, E.getAggregator().trigger(w.OMID_REND_VIDEO_START), a = S, (u = n.data.duration || "0") > 1e3 && (u /= 1e3), s = null != n.data.mediaPlayerVolume ? n.data.mediaPlayerVolume : n.data.videoPlayerVolume, c = null != n.data.deviceVolume ? n.data.deviceVolume : 1;
                break;
              case "volumeChange":
                O = "volumeChanged", s = null != n.data.mediaPlayerVolume ? n.data.mediaPlayerVolume : n.data.videoPlayerVolume, c = null != n.data.deviceVolume ? n.data.deviceVolume : 1;
                break;
              case "firstQuartile":
              case "midpoint":
              case "thirdQuartile":
              case "complete":
                O = "adVideo" + n.type.substring(0, 1).toUpperCase() + n.type.substring(1), N = !0, E.getAggregator().trigger(w.VIDEO_QUARTILE_EVENT, n);
                break;
              case "pause":
              case "bufferStart":
                O = "pauseAd";
                break;
              case "resume":
              case "bufferFinish":
                O = "resumeAd";
                break;
              case "skipped":
                O = "adSkipped";
            }
            if (s = s > 0 && s < .1 ? .1 : parseInt(10 * s) / 10, c = c > 0 && c < .1 ? .1 : parseInt(10 * c) / 10, "" !== O) {
              var y = E.getAggregator().request(P.SCREEN_EVENTS);
              y && (R = y.getCurrentLoc() || R), o.push({
                t: S - a,
                rt: v,
                tp: O,
                sl: R,
                ad_duration: u,
                volume: s,
                devol: c
              });
            }
            if ("loaded" === n.type && f.isDef(n.data)) {
              var C = ["preroll", "midroll", "postroll", "standalone"].indexOf(n.data.position),
                M = -1 !== C ? C + 1 : void 0,
                b = [];
              !0 === n.data.autoPlay ? b.push("autoplayed") : b.push("clicktoplay"), !0 === n.data.skippable && b.push("skippable"), "fullscreen" === n.data.state && b.push("fullscreen");
              var L = b.join(".");
              !0 === d ? (f.isDef(M) && E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.ENVIRONMENT, V.VIDEO_BREAK_POSITION, M), E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.ENVIRONMENT, V.VIDEO_PLAYER_STATE, L)) : (f.isDef(M) && E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
                output: M
              }, V.VIDEO_BREAK_POSITION, {
                type: p.IMPRESSION_EVENT
              }), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
                output: L
              }, V.VIDEO_PLAYER_STATE, {
                type: p.IMPRESSION_EVENT
              }));
            }
            if ("start" === n.type && (E.getAggregator().trigger(w.OMID_AD_DURATION, {
              ad_duration: u
            }), l.adDuration = u), "playerStateChange" === n.type ? D = "fullscreen" === n.data.state ? "AdEnteredFullscreen" : "AdExitedFullscreen" : -1 !== T.indexOf(n.type) ? (D = "AdPlaying", h = !0) : -1 !== _.indexOf(n.type) && (D = "AdPaused", h = !1), "audio" === l.creativeType && "" !== O) {
              var F = (g = p.RENDER.WIDTH_THRESHOLD, I = p.RENDER.HEIGHT_THRESHOLD, (m = {
                type: "geometryChange",
                timestamp: S,
                internallyGenerated: !0,
                treatAsCached: A,
                data: {
                  viewport: {
                    width: g,
                    height: I
                  },
                  adView: {
                    measuringElement: !1,
                    percentageInView: 100,
                    geometry: {
                      x: 0,
                      y: 0,
                      width: g,
                      height: I,
                      obstructions: [],
                      reasons: []
                    },
                    reasons: []
                  }
                }
              }).data.adView.onScreenGeometry = m.data.adView.containerGeometry = m.data.adView.onScreenContainerGeometry = m.data.adView.geometry, m);
              h && 0 !== c && 0 !== s || (F.data.adView.geometry.width = F.data.adView.geometry.height = 0, F.data.adView.percentageInView = 0), E.getAggregator().trigger(w.INTERNALLY_GENERATED_GEOMETRY_EVENT, F);
            }
            A && "loaded" !== n.type && (l.cachedVideoEventsReceived = !0, "start" === n.type && (l.cachedStartEventIndex = l.cachedEvents.length), l.cachedEvents.push(n)), f.isDef(D) && r.trigger(i, {
              eventType: D,
              eventData: null
            }), N && E.getAggregator().trigger(w.SEND_DT, p.DT_CODES.VIDEO_EVENTS);
          } catch (e) {
            __IntegralASDiagnosticCall("omidvideo", e, t.bootstrapper);
          }
        };
      return {
        start: function () {
          E.getAggregator().on(w.IMPRESSION_SENT, D), E.getAggregator().provide({
            omidVideoEventsString: _
          }), A = !0, "audio" === l.creativeType ? T.addEventListener("media", O) : T.addEventListener("video", O), A = !1, l.cachedVideoEventsChecked = !0, l.cachedVideoEventsReceived && l.processCachedEvents(), g.init();
        },
        addVideoPlaybackEventListener: function (e) {
          r.on(i, e);
        }
      };
    },
    Bt = function (e, t) {
      "use strict";

      var n = "measurementChanged",
        r = !1,
        i = function (e) {
          return e >= 50;
        },
        o = function (e) {
          var o = e.percentageInView;
          r = !0, e.viewState = function (e) {
            return i(e) ? p.IN_VIEW : p.OUT_OF_VIEW;
          }(o), e.outOfViewReason = i(o) ? "" : p.OUT_OF_VIEW_REASONS.GEOM, t.trigger(n, e);
        };
      return {
        start: function () {
          E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: p.MEDIA_TYPE.DISPLAY_CODE
          }, p.MEDIA_TYPE_CODE, {
            type: p.IMPRESSION_EVENT
          }), e.addScreenLocationChangedListener(o), e.start();
        },
        getStrategyName: function () {
          return p.MEASUREMENT_STRATEGY.DISPLAY;
        },
        addMeasurementChangedListener: function (e) {
          t.on(n, e);
        },
        isMeasurable: function () {
          return r;
        }
      };
    },
    Gt = function (e, t, n) {
      "use strict";

      var r = f.isDef(e) ? e.environment : void 0,
        i = f.isDef(e) ? e.measurementStrategy : void 0,
        o = function () {
          return f.isDef(i);
        };
      f.isDef(t) && t.start();
      return {
        hasMeasurementStrategy: o,
        getScreenLocationInfo: function (e) {
          return t.create(e);
        },
        isImmediate: function () {
          return !o() || r.isImmediate();
        },
        isMeasurable: function () {
          return !!o() && i.isMeasurable();
        },
        isMediaType: function (e) {
          return !!o() && r.isMediaType(e);
        },
        supportsAdContainerGeometry: function () {
          return e.environment.supportsAdContainerGeometry();
        },
        start: function () {
          o() && r.start();
        },
        requiresDelayedViewabilityEvent: function () {
          o() && t.requiresDelayedViewabilityEvent();
        }
      };
    },
    kt = function (e, t, n) {
      "use strict";

      var r = E.getAggregator().request(P.MOBILE_APP);
      return {
        create: function () {
          var t = [];
          t = (t = t.concat(e.getOmidMeasurementStrategies())).concat(e.getMraidMeasurementStrategies());
          var n = new Yt(t).resolve();
          n || E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: "0"
          }, V.OMID_APP_MEASUREMENT, {
            type: p.IMPRESSION_EVENT
          });
          var i = new jt(n);
          return new Gt(n, i, r.isMobileAppEnvironment());
        }
      };
    },
    Ht = function (t) {
      "use strict";

      var n = E.getAggregator().request(P.MOBILE_APP);
      return {
        getOmidMeasurementStrategies: function () {
          var t = E.getAggregator().request(P.OMID_VERIFICATION_CLIENT),
            n = new vt(t),
            r = [];
          if (n.accepts()) {
            var i = new Zt(),
              o = new tn(),
              a = new Mt(),
              s = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT),
              c = new $t(t, new G()),
              u = [{
                environment: i,
                measurementStrategy: new en(t, new G())
              }, {
                environment: a,
                measurementStrategy: new nn(new wn(), Ve.getWindow(), new G())
              }, {
                environment: o,
                measurementStrategy: new on(new Wn(), Ve.getWindow(), new G())
              }],
              d = new Yt(u).resolve(),
              g = d ? d.measurementStrategy : {},
              f = new zt(new Qt(new cr()), new cr(), s.isHtml),
              l = new St(t, n, e.mode),
              p = new Jt(c, g, new G(), f),
              I = new Rt(t, n, e.mode),
              m = new rn(c, g, new Wt(t, new G()), new G(), f);
            r.push({
              environment: l,
              measurementStrategy: p
            }), r.push({
              environment: I,
              measurementStrategy: m
            });
          }
          return r;
        },
        getMraidMeasurementStrategies: function () {
          var e = [],
            t = n.isSafeToInjectMraid(),
            r = new an(Ve.getWindow(), t, n.isMobileAppEnvironment());
          if (r.accepts()) {
            var i,
              o = E.getAggregator().request("context"),
              a = new Kt(Ve.getWindow(), o),
              s = new sn(Ve.getWindow(), new G());
            if (a.accepts()) {
              var c = new Xt(Ve.getWindow(), new G());
              i = {
                environment: a,
                measurementStrategy: new qt(s, c, new G())
              };
            } else {
              i = {
                environment: r,
                measurementStrategy: new Bt(s, new G())
              };
            }
            e.push(i);
          }
          return e;
        }
      };
    },
    Yt = function (e) {
      "use strict";

      return {
        resolve: function () {
          var t = f(e).findFirst(function (e, t) {
            return t.environment.accepts();
          });
          if (f.isDef(t)) return t;
        }
      };
    },
    jt = function (e) {
      "use strict";

      var t,
        n = !1,
        r = {
          winDimensions: Ae({
            scrX: 0,
            scrY: 0,
            width: 0,
            height: 0
          }),
          adDimensions: Ae({
            scrX: 0,
            scrY: 0,
            width: 0,
            height: 0
          }),
          containerDimensions: Ae({
            scrX: 0,
            scrY: 0,
            width: 0,
            height: 0
          }),
          method: p.NA,
          viewState: p.NA,
          percentInView: p.PIV_NA,
          reason: "",
          obstructed: p.NA,
          isHidden: p.NA,
          tabHidden: p.NA,
          posViewState: p.NA,
          adCompCount: 1
        },
        i = function (e) {
          return e ? new Ae({
            scrX: e.x,
            scrY: e.y,
            width: e.width,
            height: e.height
          }) : Ae({
            scrX: 0,
            scrY: 0,
            width: 0,
            height: 0
          });
        },
        o = function (e) {
          t = {
            winDimensions: i(e.windowDimensions),
            adDimensions: i(e.adDimensions),
            containerDimensions: i(e.containerDimensions),
            method: e.detectionMethod || p.NA,
            viewState: e.viewState || p.NA,
            percentInView: f.isDef(e.percentageInView) ? e.percentageInView : p.PIV_NA,
            reason: e.outOfViewReason || "",
            obstructed: f.stringifyTriState(e.isObstructed),
            isHidden: p.NA,
            tabHidden: p.NA,
            posViewState: e.viewState || p.NA,
            adCompCount: 1,
            shouldDelegateToDomBasedViewability: e.shouldDelegateToDomBasedViewability,
            sliceStatus: e.sliceStatus,
            isVideoPlaying: e.isVideoPlaying,
            isVideoPlayingInFullscreen: e.isVideoPlayingInFullscreen,
            isSoundOn: e.isSoundOn
          };
          var r = e.omidObstructions;
          f.isDef(r) && "" !== r && (t.omidObstructions = r), e.isMeasurable && (!0, n && (n = !1, E.getAggregator().trigger(w.DELAYED_VIEWABILITY_READY)));
        };
      return {
        create: function (n) {
          var i = r;
          return f.isDef(t) && (e.environment.supportsAdContainerGeometry() ? i = t : t.shouldDelegateToDomBasedViewability ? (i = n).method = t.method : (0 === t.percentInView || t.percentInView >= 75) && (i = t)), i;
        },
        start: function () {
          var t;
          f.isDef(e) && f.isDef(e.measurementStrategy) && ((t = e.measurementStrategy).addMeasurementChangedListener(o), t.start());
        },
        requiresDelayedViewabilityEvent: function () {
          n = !0;
        }
      };
    },
    qt = function (e, t, n) {
      "use strict";

      var r,
        i,
        o,
        a,
        s = "measurementChanged",
        c = !1,
        u = !1,
        d = !1,
        g = function (e) {
          return e < 50;
        },
        l = function () {
          if (!f.isUndef(i)) {
            var e,
              t,
              l = [];
            c ? (u ? (t = !1, e = 100) : (t = a, e = o), g(e) && l.push(p.OUT_OF_VIEW_REASONS.GEOM)) : (t = !1, e = 0, l.push(p.OUT_OF_VIEW_REASONS.VIDEO)), d = !0, i.shouldDelegateToDomBasedViewability = t, i.percentageInView = e, i.viewState = function (e) {
              return g(e) ? p.OUT_OF_VIEW : p.IN_VIEW;
            }(e), i.outOfViewReason = l.join("."), r = i, n.trigger(s, r);
          }
        },
        I = function (e) {
          i = e, o = e.percentageInView, a = e.shouldDelegateToDomBasedViewability, l();
        },
        m = function (e) {
          var t = e.eventType;
          "AdEnteredFullscreen" === t ? u = !0 : "AdExitedFullscreen" === t ? u = !1 : -1 !== "AdStarted|AdVideoStart|AdPlaying".indexOf(t) ? c = !0 : -1 !== "AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(t) && (c = !1), l();
        };
      return {
        start: function () {
          E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: p.MEDIA_TYPE.VIDEO_CODE
          }, p.MEDIA_TYPE_CODE, {
            type: p.IMPRESSION_EVENT
          }), e.addScreenLocationChangedListener(I), e.start(), t.addVideoPlaybackEventListener(m), t.start();
        },
        getStrategyName: function () {
          return p.MEASUREMENT_STRATEGY.VIDEO;
        },
        addMeasurementChangedListener: function (e) {
          n.on(s, e);
        },
        isMeasurable: function () {
          return d;
        }
      };
    },
    Kt = function (e, t) {
      "use strict";

      return {
        accepts: function () {
          return t.isInMobiMraidVideo();
        },
        isImmediate: function () {
          return !1;
        },
        supportsAdContainerGeometry: function () {
          return !1;
        },
        start: function () {
          try {
            var t;
            e.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function (e) {
              "AdVideoStart" !== e.type || t || (t = !0, E.getAggregator().trigger(w.AD_IMPRESSION));
            });
          } catch (e) {}
        }
      };
    },
    Xt = function (e, t) {
      "use strict";

      var n = "inMobiMraidVideoPlaybackEvent",
        r = function (e) {
          try {
            var r = e.type;
            t.trigger(n, {
              eventType: r
            });
          } catch (e) {}
        };
      return {
        start: function () {
          try {
            e.inmobi.IASDocumentVideoBuffer.addVideoEventListener(r);
          } catch (e) {}
        },
        addVideoPlaybackEventListener: function (e) {
          t.on(n, e);
        }
      };
    },
    zt = function (e, t, n) {
      "use strict";

      var r = function (e, t) {
          var n = Math.max(e.x, t.x),
            r = Math.max(e.y, t.y),
            i = Math.min(e.x + e.width, t.x + t.width) - n,
            o = Math.min(e.y + e.height, t.y + t.height) - r;
          return {
            x: n,
            y: r,
            width: i > 0 ? i : 0,
            height: o > 0 ? o : 0
          };
        },
        i = function (e, t, n) {
          var i = r(t, e);
          return r(n, {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
          });
        },
        o = function (e, t) {
          var n = pe.isOmidForWeb(),
            r = !pe.isOmidSandboxedEnvironment(),
            i = n && r;
          return {
            x: i ? t.x : e.x + t.x,
            y: i ? t.y : e.y + t.y,
            width: t.width,
            height: t.height
          };
        },
        a = function (e, t) {
          return {
            x: t.x - e.x,
            y: t.y - e.y,
            width: t.width,
            height: t.height
          };
        };
      function s(e, t, n) {
        var r = a(t, n),
          o = i(e, t, r);
        return o.width * o.height;
      }
      var c = function (e) {
          return u(e) ? p.IN_VIEW : p.OUT_OF_VIEW;
        },
        u = function (e) {
          return e >= 50;
        };
      return {
        calculateGeometricMeasurement: function (r, d) {
          if (f.isDef(r) && f.isDef(d)) {
            var g,
              l,
              E = r.viewport,
              I = r.computedAdContainer,
              m = I.obstructions,
              T = r.omidObstructions,
              A = m && m.length > 0,
              h = r.originalAdContainer,
              _ = d.adGeometry,
              D = d.adFound,
              O = r.detectionMethod,
              S = 0,
              v = {
                x: 0,
                y: 0,
                width: E.width,
                height: E.height
              },
              R = o(h, _),
              N = r.outOfViewReason,
              y = 0,
              C = 0,
              M = A || !1,
              w = _.width * _.height <= 1;
            return n && w && (N = function (e, t) {
              var n = e || "";
              return t || -1 !== n.indexOf(p.OUT_OF_VIEW_REASONS.GEOM) || (n = p.OUT_OF_VIEW_REASONS.GEOM + ("" !== n ? "." + n : "")), n;
            }(N, D = !1)), D && r.percentageInView > 0 ? (y = s(v, I, R), C = A ? function (t, n, r, s) {
              var c = a(n, r),
                u = i(t, n, c),
                d = o(n, u);
              return e.calculateObstructedArea(d, s);
            }(v, I, R, m) : 0, S = Math.round((y - C) / (R.width * R.height) * 100), A && 0 === C && (M = !1), l = function (n, r, i, o) {
              var a,
                c,
                u,
                d,
                g = 0,
                f = t.getConfig(i).numberOfSlices,
                l = Ve.floor(i.height / f) || 1,
                E = [],
                p = o ? e.getObstructionStatusBySlice(f) : [];
              for (g = 0; g < f; g++) d = i.y + l * g, g == f - 1 && (l = i.y + i.height - d), c = s(n, r, a = {
                x: i.x,
                y: d,
                width: i.width,
                height: l
              }) / (a.width * a.height) == 1, E.push(c);
              if (o) for (u = Ve.min(p.length, f), g = 0; g < u; g++) E[g] = E[g] && !p[g];
              return E;
            }(v, I, new Ae(R).getRoundedGeometry(), M)) : l = t.getConfig(_).defaultSliceArray, g = {
              windowDimensions: v,
              containerDimensions: h,
              adDimensions: R,
              percentageInView: S,
              viewState: c(S),
              outOfViewReason: u(S) ? "" : N || p.OUT_OF_VIEW_REASONS.GEOM,
              detectionMethod: O,
              isObstructed: M,
              sliceStatus: l
            }, f.isDef(T) && "" !== T && (g.omidObstructions = T), g;
          }
        }
      };
    },
    Jt = function (e, t, n, r) {
      "use strict";

      var i,
        o,
        a,
        s = "geometryMeasurementChanged",
        c = function () {
          if (f.isDef(i) && f.isDef(o)) {
            var e = r.calculateGeometricMeasurement(i, o);
            e.isMeasurable = !0, a = !0, n.trigger(s, e);
          }
        },
        u = function (e) {
          i = e, c();
        },
        d = function (e) {
          o = e, c();
        };
      return {
        start: function () {
          E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: p.MEDIA_TYPE.DISPLAY_CODE
          }, p.MEDIA_TYPE_CODE, {
            type: p.IMPRESSION_EVENT
          }), e.addAdContainerGeometryMeasurementChangedListener(u), e.start(), t.addAdGeometryMeasurementChangedListener(d), t.start();
        },
        addMeasurementChangedListener: function (e) {
          n.on(s, e);
        },
        getStrategyName: function () {
          return p.MEASUREMENT_STRATEGY.DISPLAY;
        },
        isMeasurable: function () {
          return a;
        }
      };
    },
    Qt = function (e) {
      "use strict";

      var t,
        n = [],
        r = function (e, t) {
          for (var n = o(e, t), r = n.x - e.x, i = n.y - e.y, a = r + n.width, s = i + n.height, c = Math.round(r); c < Math.round(a); c++) for (var u = Math.round(i); u < Math.round(s); u++) void 0 !== e.matrix[c] && void 0 === e.matrix[c][u] && (e.matrix[c][u] = 1, e.obscuredPixelCount += 1);
          return e;
        },
        i = function (e) {
          for (var t = Math.round(e.width), n = Math.round(e.height), r = new Array(t), i = 0; i < t; i++) r[i] = new Array(n);
          return {
            matrix: r,
            obscuredPixelCount: 0,
            x: Math.round(e.x),
            y: Math.round(e.y),
            width: t,
            height: n
          };
        },
        o = function (e, t) {
          var n = Math.max(e.x, t.x),
            r = Math.max(e.y, t.y),
            i = Math.min(e.x + e.width, t.x + t.width) - n,
            o = Math.min(e.y + e.height, t.y + t.height) - r;
          return {
            x: n,
            y: r,
            width: i > 0 ? i : 0,
            height: o > 0 ? o : 0
          };
        },
        a = function (e, t, n) {
          return e + (t - n);
        },
        s = function (e, t, n, r) {
          return e == t || n === r - 1;
        },
        c = function (t) {
          if (f.isUndef(t.matrix) || 0 === t.matrix.length) return [];
          for (var n = 0, r = !1, i = t.matrix[0].length, o = t.matrix.length, c = e.getConfig({
              height: i
            }).numberOfSlices, u = Ve.floor(i / c) || 1, d = [], g = 0; g < i; g++) {
            r = !1;
            for (var l = 0; l < o; l++) if (1 === t.matrix[l][g]) {
              r = !0;
              break;
            }
            n++, r && (g = a(g, u, n), n = u), s(n, u, g, i) && (d.push(r), n = 0, r = !1);
          }
          return d;
        };
      return {
        calculateObstructedArea: function (e, o) {
          var a,
            s = o && o.length > 0,
            u = s ? i(e) : {},
            d = 0,
            g = 0;
          if (s) {
            for (; d < o.length; d++) a = o[d], u = r(u, a);
            g = u.obscuredPixelCount, t = c(u);
          } else t = n;
          return g;
        },
        getObstructionStatusBySlice: function () {
          return t;
        }
      };
    },
    $t = function (t, n) {
      "use strict";

      var r = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT);
      r.geometryChangeEvents = [];
      var i = null,
        o = !1,
        a = Ve.getWindow(),
        s = a && a.omid3p,
        c = !!(s && f.isFunction(s.registerSessionObserver) && f.isFunction(s.addEventListener)) ? s : t,
        u = new Er(),
        d = !1,
        g = !1,
        l = function () {
          var t = Ve.getDoc().getElementById("iasbi" + e.asid);
          t && t.hasAttribute("CreativeLoaded") ? (r.delayingViewabilityEvents = !1, o = !1, i && (I(i), i = null)) : Ve.setTimeout(l, 50);
        },
        I = function (t) {
          if (t && "geometryChange" === t.type && t.data && t.data.adView && ("audio" !== r.creativeType || t.internallyGenerated)) {
            var a = d || t.treatAsCached;
            a && (r.cachedGeometryEventsReceived || (r.cachedFirstGeometricIndex = r.cachedEvents.length), r.cachedGeometryEventsReceived = !0, r.cachedEvents.push(t));
            var s = t.data.adView,
              c = !!(s.measuringElement && s.containerGeometry && s.onScreenContainerGeometry),
              g = r.cachedStartEventIndex;
            if (!a && r.unrecoveredPlayTime && g > -1 && s.percentageInView >= 50 && "audio" !== r.creativeType) {
              var I = Ve.now() - r.cachedEvents[g].timestamp,
                T = E.getAggregator().request(P.SCREEN_EVENTS);
              T && T.setRecoveredTimeInSlTimes && T.setRecoveredTimeInSlTimes(I);
            }
            if (r.geometryChangeEvents.length < 10 && (r.geometryChangeEvents.push(t.timestamp - e.birthdate + "." + s.percentageInView), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
              output: r.geometryChangeEvents.join("_")
            }, V.GEOMETRY_EVENTS_RECEIVED)), r.delayingViewabilityEvents) i = t, o || (o = !0, l());else {
              var A = [];
              s.onScreenGeometry && s.onScreenGeometry.obstructions && s.onScreenGeometry.obstructions.length > 0 && (c && (s.onScreenContainerGeometry.obstructions = s.onScreenGeometry.obstructions), s.reasons && s.reasons.indexOf("obstructed") > -1 && s.percentageInView < 100 && (s.onScreenGeometry.obstructions = s.onScreenGeometry.obstructions.slice(0, 4), f(s.onScreenGeometry.obstructions).each(function (e, t) {
                A.push(Math.round(t.x) + "." + Math.round(t.y) + "." + Math.round(t.width) + "." + Math.round(t.height));
              })));
              var h = pe.isOmidForWeb() ? he.calcWinDims() : {
                  width: 0,
                  height: 0
                },
                _ = new Ae(t.data.viewport || h),
                D = new Ae(c ? s.containerGeometry : s.geometry || {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }),
                O = new Ae(c ? s.onScreenContainerGeometry : s.onScreenGeometry || {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }),
                S = {
                  viewport: _.getRoundedGeometry(),
                  originalAdContainer: D.getRoundedGeometry(),
                  computedAdContainer: O.getRoundedGeometry(),
                  percentageInView: s.percentageInView,
                  detectionMethod: p.DETECTION_METHODS.OMID,
                  outOfViewReason: m(s.reasons),
                  omidObstructions: A.join("_")
                };
              void 0 === r.geometryArrived && u.checkForViewAttachmentBasedOnAdSessionType(r, t.data.adView) && (r.geometryArrived = !0, E.getAggregator().trigger("omidrendgeoupdate")), n.trigger(p.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED, S);
            }
          }
        },
        m = function (e) {
          var t = {
              inactive: p.OUT_OF_VIEW_REASONS.FOCUS,
              viewport: p.OUT_OF_VIEW_REASONS.GEOM,
              clipped: p.OUT_OF_VIEW_REASONS.GEOM,
              obstructed: p.OUT_OF_VIEW_REASONS.OBSTRUCTION,
              backgrounded: p.OUT_OF_VIEW_REASONS.FOCUS,
              notFound: p.OUT_OF_VIEW_REASONS.HIDDEN,
              hidden: p.OUT_OF_VIEW_REASONS.HIDDEN,
              noWindowFocus: p.OUT_OF_VIEW_REASONS.WINDOW
            },
            n = [];
          return e ? (f(e).each(function (e, r) {
            var i = t[r];
            i && n.indexOf(n) < 0 && n.push(i);
          }), n.join(".")) : "";
        };
      r.processCachedEvents = function () {
        if (!g) {
          var e = "video" === r.mediaType,
            t = r.supports && r.supports.join().indexOf("clid") > -1,
            n = "limited" === r.accessMode,
            i = "full" === r.accessMode,
            o = n || i && t,
            a = !e || r.cachedVideoEventsChecked,
            s = r.cachedGeometryEventsChecked;
          if (o && s && a && r.cachedEvents.length > 0) {
            var c = "o",
              u = "o",
              d = 0,
              f = 0,
              l = 0,
              p = !e,
              I = !1,
              m = Ve.now();
            if (e) {
              var T = r.cachedStartEventIndex,
                A = r.cachedFirstGeometricIndex,
                h = r.cachedEvents[A],
                _ = r.cachedEvents[T];
              h && _ && h.timestamp > _.timestamp && (h.timestamp = _.timestamp);
            }
            for (var D = 0; D < r.cachedEvents.length; D++) {
              for (var O = m, S = -1, v = 0; v < r.cachedEvents.length; v++) !r.cachedEvents[v].alreadyOrdered && r.cachedEvents[v].timestamp < O && (O = r.cachedEvents[v].timestamp, S = v);
              if (-1 !== S) {
                var R = r.cachedEvents[S];
                R.alreadyOrdered = !0, "geometryChange" === R.type && R.data && R.data.adView ? (d = R.data.adView.percentageInView, I = !0) : p = "start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(R.type) > -1, u = d && d >= 50 && p ? "i" : "o", "o" === c && "i" === u ? f = R.timestamp : "i" === c && "o" === u ? l += R.timestamp - f : "i" === c && "i" === u && (l += R.timestamp - f, f = R.timestamp), c = u;
              }
            }
            if (g = !0, "i" === c ? l += m - f : e && !I && r.cachedStartEventIndex > -1 && (r.unrecoveredPlayTime = !0), l > 0) {
              "audio" === r.creativeType && (l = Math.min(l, m - h.timestamp)), r.recoveredTime = l;
              var N = E.getAggregator().request(P.SCREEN_EVENTS);
              N && N.setRecoveredTimeInSlTimes && (N.setRecoveredTimeInSlTimes(l), r.recoveredTime = -1);
            }
          }
        }
      };
      return {
        start: function () {
          d = !0, void 0 !== r.impressionViewabilityMeasurement && I(r.impressionViewabilityMeasurement), c.addEventListener("geometryChange", I), d = !1, r.cachedGeometryEventsChecked = !0, r.cachedGeometryEventsReceived && r.processCachedEvents(), E.getAggregator().on(w.INTERNALLY_GENERATED_GEOMETRY_EVENT, I);
        },
        addAdContainerGeometryMeasurementChangedListener: function (e) {
          n.on(p.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED, e);
        },
        translateOmidOutOfViewReasons: m
      };
    },
    Zt = function () {
      "use strict";

      var e = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT);
      return {
        accepts: function () {
          return e && (e.isNative || e.isLimitedSandbox);
        }
      };
    },
    en = function (t, n) {
      "use strict";

      var r = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT),
        i = null,
        o = !1,
        a = Ve.getWindow(),
        s = a && a.omid3p,
        c = !!(s && f.isFunction(s.registerSessionObserver) && f.isFunction(s.addEventListener)) ? s : t,
        u = new Er(),
        d = function () {
          var t = Ve.getDoc().getElementById("iasbi" + e.asid);
          t && t.hasAttribute("CreativeLoaded") ? (r.delayingViewabilityEvents = !1, o = !1, i && (g(i), i = null)) : Ve.setTimeout(d, 50);
        },
        g = function (e) {
          if (e && "geometryChange" === e.type && e.data && e.data.adView && ("audio" !== r.creativeType || e.internallyGenerated)) if (r.delayingViewabilityEvents) i = e, o || (o = !0, d());else {
            var t = e.data.adView.geometry,
              a = e.data.adView.containerGeometry,
              s = !!t,
              c = e.data.adView.measuringElement && !!a,
              g = new Ae({
                x: s && c ? t.x - a.x : 0,
                y: s && c ? t.y - a.y : 0,
                width: s ? t.width : 0,
                height: s ? t.height : 0
              }).getRoundedGeometry();
            g, void 0 === r.geometryArrived && u.checkForViewAttachmentBasedOnAdSessionType(r, e.data.adView) && (r.geometryArrived = !0, E.getAggregator().trigger("omidrendgeoupdate")), n.trigger(p.OMID_GEOMETRY_MEASUREMENT_CHANGED, {
              adGeometry: g,
              adFound: s
            });
          }
        };
      return {
        start: function () {
          void 0 !== r.impressionViewabilityMeasurement && g(r.impressionViewabilityMeasurement), c.addEventListener("geometryChange", g), E.getAggregator().on(w.INTERNALLY_GENERATED_GEOMETRY_EVENT, g);
        },
        addAdGeometryMeasurementChangedListener: function (e) {
          n.on(p.OMID_GEOMETRY_MEASUREMENT_CHANGED, e);
        }
      };
    },
    tn = function () {
      "use strict";

      var e = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT);
      return {
        accepts: function () {
          return e && !e.isNative;
        }
      };
    },
    nn = function (e, t, n) {
      "use strict";

      var r;
      var i = function () {
        var t,
          i,
          o,
          a = e.find(),
          s = !1;
        f.isDef(a) && null !== a ? (o = !0, t = {
          x: (i = a.getBoundingClientRect()).x || i.left,
          y: i.y || i.top,
          width: i.width,
          height: i.height
        }, a.hasOwnProperty("adWasClipped") && (t.adWasClipped = !0)) : (r && (s = !0, t = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }), o = !1), (o && function (e) {
          return !f.isDef(r) || !1 !== f(e).compareTo(r);
        }(t) || s) && (r = t, n.trigger(p.OMID_GEOMETRY_MEASUREMENT_CHANGED, {
          adGeometry: t,
          adFound: o
        }));
      };
      return {
        start: function () {
          i(), t.setInterval(i, 50);
        },
        addAdGeometryMeasurementChangedListener: function (e) {
          n.on(p.OMID_GEOMETRY_MEASUREMENT_CHANGED, e);
        }
      };
    },
    rn = function (e, t, n, r, i) {
      "use strict";

      var o,
        a,
        s,
        c,
        u,
        d = "videoGeometryMeasurementChanged",
        g = !1,
        l = !1,
        I = function () {
          if (!(f.isUndef(a) || f.isUndef(s) || f.isUndef(c))) {
            u = !0;
            var e = i.calculateGeometricMeasurement(a, s),
              t = g && l,
              n = g && e.percentageInView >= 50,
              E = {
                windowDimensions: e.windowDimensions,
                containerDimensions: e.containerDimensions,
                adDimensions: e.adDimensions,
                percentageInView: e.percentageInView,
                detectionMethod: e.detectionMethod,
                isMeasurable: !0,
                isObstructed: e.isObstructed,
                sliceStatus: e.sliceStatus,
                isVideoPlaying: g,
                isVideoPlayingInFullscreen: t,
                isSoundOn: !0
              },
              I = e.omidObstructions;
            f.isDef(I) && "" !== I && (E.omidObstructions = I), t && (E.percentageInView = 100), t || n ? E.viewState = p.IN_VIEW : (E.viewState = p.OUT_OF_VIEW, E.outOfViewReason = e.outOfViewReason || p.OUT_OF_VIEW_REASONS.VIDEO), o = E, r.trigger(d, o);
          }
        },
        m = function (e) {
          a = e, I();
        },
        T = function (e) {
          s = e, I();
        },
        A = function (e) {
          c = e;
          var t = e.eventType;
          "AdEnteredFullscreen" === t ? l = !0 : "AdExitedFullscreen" === t ? l = !1 : -1 !== "AdStarted|AdVideoStart|AdPlaying".indexOf(t) ? g = !0 : -1 !== "AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(t) && (g = !1), I();
        };
      return {
        start: function () {
          E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: p.MEDIA_TYPE.VIDEO_CODE
          }, p.MEDIA_TYPE_CODE, {
            type: p.IMPRESSION_EVENT
          }), e.addAdContainerGeometryMeasurementChangedListener(m), e.start(), t.addAdGeometryMeasurementChangedListener(T), t.start(), n.addVideoPlaybackEventListener(A), n.start();
        },
        getStrategyName: function () {
          return p.MEASUREMENT_STRATEGY.VIDEO;
        },
        addMeasurementChangedListener: function (e) {
          r.on(d, e);
        },
        isMeasurable: function () {
          return u;
        }
      };
    },
    on = function (e, t, n) {
      "use strict";

      var r;
      var i = function () {
        var t,
          i,
          o,
          a = e.find(),
          s = !1;
        f.isDef(a) ? (o = !0, t = {
          x: (i = a.getBoundingClientRect()).left,
          y: i.top,
          width: i.width,
          height: i.height
        }, a.hasOwnProperty("adWasClipped") && (t.adWasClipped = !0)) : (r && (s = !0, t = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }), o = !1), (o && function (e) {
          return !f.isDef(r) || !1 !== f(e).compareTo(r);
        }(t) || s) && (r = t, n.trigger(p.OMID_GEOMETRY_MEASUREMENT_CHANGED, {
          adGeometry: t,
          adFound: o
        }));
      };
      return {
        start: function () {
          i(), t.setInterval(i, 50);
        },
        addAdGeometryMeasurementChangedListener: function (e) {
          n.on(p.OMID_GEOMETRY_MEASUREMENT_CHANGED, e);
        }
      };
    },
    an = function (e, t, n) {
      "use strict";

      return {
        accepts: function () {
          var r = f(e.mraid).isObj();
          return n && (r || t);
        },
        isImmediate: function () {
          return !0;
        },
        supportsAdContainerGeometry: function () {
          return !1;
        },
        start: function () {}
      };
    },
    sn = function (e, t) {
      "use strict";

      var n = "mraidScreenLocationChanged",
        r = "mraid.js",
        i = !1,
        o = function () {
          var r, i, o;
          try {
            r = e.mraid.isViewable() ? 100 : 0;
            var a = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            o = 100 === r ? [!0] : [!1], i = {
              windowDimensions: a,
              adDimensions: a,
              containerDimensions: a,
              shouldDelegateToDomBasedViewability: !1,
              isMeasurable: !0,
              isObstructed: !1,
              isHidden: !1,
              percentageInView: r,
              detectionMethod: p.DETECTION_METHODS.MRAID,
              sliceStatus: o
            }, t.trigger(n, i);
          } catch (e) {}
        },
        a = function () {
          var t = e.mraid;
          !0, o(), t.addEventListener("viewableChange", o);
        },
        s = function () {
          var t = e.mraid;
          (function () {
            var t = e.mraid;
            return f(t).isObj() && f.isFunction(t.isViewable);
          })() && (i = !0, "loading" === t.getState() ? t.addEventListener("ready", function () {
            a();
          }) : a());
        },
        c = function () {
          i || s();
        };
      return {
        start: function () {
          var t;
          t = !0, (f.isDef(e.mraid) || he.containsScriptTagWithSrc(r)) && (t = !1), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: f.stringifyTriState(t)
          }, V.MRAID_INJECTION_STATUS, {
            type: p.IMPRESSION_EVENT
          }), t ? E.getAggregator().trigger(w.EXEC, r, c) : s();
        },
        addScreenLocationChangedListener: function (e) {
          t.on(n, e);
        }
      };
    },
    cn = function (e, t, n) {
      "use strict";

      var r = {};
      return n && f(n).map(function (n, i) {
        var o, a;
        r[n] = (o = i, a = f.noop, t.bootstrapOn("useViewabilityNotification") && (a = function () {
          e.skipAsFraudulent() || E.getAggregator().trigger(w.NOTIFY, o);
        }), a);
      }), {
        getCallbacks: function () {
          return r;
        }
      };
    },
    un = function () {
      "use strict";

      var t = new pn({
          tiv: [1e4]
        }),
        n = f([p.IN_VIEW, p.PARTIAL_VIEW_PLUS]);
      return {
        timeInViewThresholds: t,
        type: p.DT_CODES.FULLY_INVIEW,
        rts: {},
        isInView: function (e) {
          var t = Ve.max(e.fullPercentInView || 0, e.percentInView);
          return n.contains(e.viewState) && 100 === t;
        },
        applies: function (t, n) {
          return t.on("abcAudit") && 925955 == e.anId && n.usesIASFullyInViewCustomMetric();
        },
        minUnit: 1e3,
        shouldIncludeSound: !1
      };
    },
    dn = function (t, n) {
      "use strict";

      var r,
        i,
        o,
        a = t.on("everySecond"),
        s = n.isVideo(),
        c = [1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3, 1e4, 11e3, 12e3, 13e3, 14e3, 15e3],
        u = [1e3, 5e3, 15e3, 3e4, 45e3, 6e4, 9e4],
        d = [2e3, 5e3, 15e3],
        g = function (e, t) {
          var n = t ? "viewStateIgnoringRender" : "viewState";
          return -1 !== (p.IN_VIEW + "|" + p.PARTIAL_VIEW_PLUS).indexOf(e[n]);
        };
      return a ? (r = new pn({
        tiv: c
      }), i = c[0]) : s ? (r = new pn({
        tiv: d
      }), i = d[0]) : (r = new pn({
        tiv: u
      }), i = u[0]), (o = {
        5e3: e._onInViewMRC5,
        15e3: e._onInViewMRC15
      })[i] = e._onInViewMRC, {
        timeInViewThresholds: r,
        type: p.DT_CODES.PING,
        rts: o,
        isInView: g,
        isInViewIgnoringRender: function (e) {
          return g(e, !0);
        },
        applies: !0,
        minUnit: 1e3,
        shouldIncludeSound: !1,
        sendOtherwiseInViewSignal: !0
      };
    },
    gn = function (e, t) {
      "use strict";

      var n,
        r = e.on("everySecond"),
        i = t.isVideo(),
        o = t.usesIASFullyInViewCustomMetric(),
        a = function (e) {
          var t = Ve.max(e.fullPercentInView || 0, e.percentInView);
          return -1 !== (p.IN_VIEW + "|" + p.PARTIAL_VIEW_PLUS).indexOf(e.viewState) && 100 === t;
        };
      return n = new pn(r ? {
        tiv: [1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3, 1e4, 11e3, 12e3, 13e3, 14e3, 15e3]
      } : i ? {
        tiv: [2e3, 5e3, 15e3]
      } : {
        tiv: [1e3, 5e3, 15e3]
      }), E.getAggregator().provide("isFullyInViewProvider", {
        isFullyInView: a
      }), {
        timeInViewThresholds: n,
        type: p.DT_CODES.FULLY_INVIEW,
        isInView: a,
        applies: function () {
          return o;
        },
        minUnit: 1e3,
        shouldIncludeSound: !1
      };
    },
    fn = function (t, n) {
      "use strict";

      return {
        timeInViewThresholds: new pn({
          tiv: [0]
        }),
        type: p.DT_CODES.FULLY_INVIEW,
        rts: {
          0: e._onInViewFull
        },
        isInView: function (e) {
          var t = Ve.max(e.fullPercentInView || 0, e.percentInView);
          return -1 !== (p.IN_VIEW + "|" + p.PARTIAL_VIEW_PLUS).indexOf(e.viewState) && 100 === t;
        },
        applies: function () {
          return n.usesGroupMCustomMetric();
        },
        minUnit: 1e3,
        shouldIncludeSound: !1
      };
    },
    ln = function (t, n) {
      "use strict";

      var r,
        i,
        o,
        a,
        s,
        c,
        u = Ve.getMaxNumber(),
        d = n.isVideo(),
        g = t.id,
        l = t.sound && "on" === t.sound,
        E = !(t.soundExcl && "groupm_native" === t.soundExcl && e.groupm_native_publisher) && l,
        I = function (e, n) {
          if (!e.adDimensions) return !1;
          var r,
            i,
            o,
            a,
            s = n ? "percentInViewIgnoringRender" : "percentInView",
            c = e.adDimensions.area(),
            g = 1 === e.tabHidden,
            l = Ve.max(e.fullPercentInView || 0, e[s]);
          return r = f(t.thresholds).findFirst(function (e, t) {
            if (i = t.lb || 0, o = t.ub || u, c >= i && c <= o) return !0;
          }), a = !g && l >= r.piv, function (e) {
            return e.method == p.DETECTION_METHODS.AD_PLACEHOLDER;
          }(e) && function (e) {
            return 0 === e.tiv;
          }(t) && (a = !1), d && (a = a && e.isVideoPlaying, E && (a = a && e.isSoundOn)), a;
        };
      return r = new pn(t), i = t.qiv, o = {}, f.isDef(e.rts) && f.isDef(e.rts[g]) && (s = r && f.isFunction(r.getTimeThresholds) && r.getTimeThresholds()[0], c = f.isDef(s) ? f.isFunction(s.getTimeInViewForRts) && s.getTimeInViewForRts() : p.RTS_KEY_FOR_VQ, o[c] = e.rts[g]), a = t.minunit ? 1e3 * t.minunit : 1e3, {
        timeInViewThresholds: r,
        qivThreshold: i,
        type: p.DT_CODES.CUSTOM,
        rts: o,
        isInView: I,
        isInViewIgnoringRender: function (e) {
          return I(e, !0);
        },
        metricId: g,
        minUnit: a,
        thresholdType: t.thresholdType,
        shouldIncludeSound: E,
        sendOtherwiseInViewSignal: !0
      };
    },
    En = function (e, t, n) {
      "use strict";

      var r = "groupmCM",
        i = t.isVideo() ? "video" : "display",
        o = t.isMobileApp() ? "app" : "web",
        a = t.isDeviceTypeGroupMobile() ? "mobile" : "desktop",
        s = f(e.customViewability).isArray() && e.customViewability.length > 0,
        c = n.on("customMetric"),
        u = n.on(r),
        d = function (e, t) {
          var n, s, c, d;
          return n = f(t.mediaTypes).contains(i), s = f(t.distributionChannels).contains(o), c = !f.isDef(t.deviceGroups) || f(t.deviceGroups).contains(a), d = !He.contains(t.id, "fiv"), He.contains(t.id, r) && (d = u), d && n && s && c;
        };
      return {
        resolve: function () {
          var t,
            n = [];
          return c && s && (t = f(e.customViewability).filter(d), f(t).each(function (e, t) {
            n.push(t);
          })), n;
        }
      };
    },
    pn = function (e) {
      "use strict";

      var t = [];
      if (f(e.tiv).isArray()) f(e.tiv).each(function (e, n) {
        t.push(new mn(n));
      });else if ("string" == typeof e.tiv) {
        var n = e.tiv.split("|"),
          r = new In();
        t.push(new Tn(r, parseInt(n[1].replace("%")))), t.push(new mn(1e3 * parseInt(n[0])));
      } else f.isDef(e.tiv) && t.push(new mn(1e3 * e.tiv));
      return {
        getTimeThresholds: function () {
          return t;
        }
      };
    },
    In = function () {
      "use strict";

      var e = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT).adDuration || -1,
        t = function (t) {
          if (!n()) {
            var r = f.isDef(t.ad_duration) ? t.ad_duration : t.adRemainingTime;
            (function (e) {
              return void 0 !== e && e > 0;
            })(r) && (e = Math.ceil(r));
          }
        },
        n = function () {
          return e > 0;
        };
      return E.getAggregator().on({
        omidAdDuration: t,
        adVideoStart: t,
        adDurationChange: t
      }), {
        getAdDuration: function () {
          return e;
        },
        isVideoDurationResolved: n
      };
    },
    mn = function (e) {
      "use strict";

      var t,
        n = 0;
      return e > 0 && (n = e / 1e3), t = 1e3 * n, {
        getTimeInViewInSeconds: function () {
          return n;
        },
        getTimeInViewForRts: function () {
          return t;
        }
      };
    },
    Tn = function (e, t) {
      "use strict";

      var n = 0,
        r = !1,
        i = function (e) {
          n = 0, t > 0 && e > 0 && (n = Ve.ceil(e * (t / 100)));
        };
      return i(15), {
        getTimeInViewInSeconds: function () {
          return !r && e.isVideoDurationResolved() && (r = !0, i(e.getAdDuration())), n;
        },
        getTimeInViewForRts: function () {
          return 0;
        }
      };
    },
    An = function (e, t, n, r) {
      "use strict";

      var i = r ? "isInViewIgnoringRender" : "isInView",
        o = function (r) {
          e[i](r) ? (t.mark(), n.doEligibleJobs(t.getTotalTime())) : t.stop();
        };
      return {
        start: function () {
          e.addMeasurementChangedListener(o);
        }
      };
    },
    hn = function (e, t, n, r) {
      "use strict";

      var i,
        o,
        a,
        s,
        c,
        u,
        d = function (e, t) {
          return !t && e;
        },
        g = function (e, t, n, r) {
          return !!r || !t && (e || r) && n;
        },
        l = function (e) {
          var d,
            l = 0,
            E = 1 === e.tabHidden,
            I = e.isVideoPlaying,
            m = e.isSoundOn,
            T = e.isVideoPlayingInFullscreen;
          f(e.sliceStatus).each(function (e, t) {
            a(t, E, I, T) ? i[e].mark() : i[e].stop(), s[e] = i[e].getTotalTime();
          }), p("slcVt", s), r && (f(e.sliceStatus).each(function (e, t) {
            !function (e, t, n, r, i) {
              return g(e, t, n, r) && i;
            }(t, E, I, T, m) ? o[e].stop() : o[e].mark(), c[e] = o[e].getTotalTime();
          }), p("slcVtVol", c)), u = r && t && t.shouldIncludeSound ? c : s, d = f(u).findFirst(function (e, t) {
            return l = Math.max(l, t), t <= 0;
          }), f.isUndef(d) && n.doEligibleJobs(l);
        },
        p = function (e, t) {
          var n = {};
          n[e] = t, E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: n
          }, {
            minDt: !1
          });
        },
        I = function (e) {
          f.isUndef(e.sliceStatus) || (i || function (e) {
            !i && e.sliceStatus && (i = [], o = [], s = [], c = [], f(e.sliceStatus).each(function (e) {
              i.push(new te(1)), s.push(0), r && (o.push(new te(1)), c.push(0));
            }));
          }(e), l(e));
        };
      return {
        start: function () {
          a = r ? g : d, e.addMeasurementChangedListener(I);
        }
      };
    },
    _n = function (e, t, n) {
      "use strict";

      return {
        isInView: e.isInView,
        isInViewIgnoringRender: e.isInViewIgnoringRender,
        addMeasurementChangedListener: function (e) {
          t.addMeasurementChangedListener(e, n);
        }
      };
    },
    Dn = function (e, t, n, r, i, o, a, s, c, u) {
      "use strict";

      var d = "measurementChanged",
        g = !1,
        f = pe.isVideo(),
        l = o.request(P.MOBILE_APP),
        E = U().applies(n, i),
        I = n.browserIs(p.BROWSERS.GECKO) || E,
        m = pe.xDomainIframe && !I,
        T = new Z(10),
        A = function () {
          i.on("viewabilityready") && !g && (r.send(p.DT_CODES.VIEWABILITY_READY), o.trigger(w.MEASURABLE), g = !0);
        };
      o.on(w.DELAYED_VIEWABILITY_READY, function () {
        h(), A();
      }), o.on(w.DELAYED_VIEWABILITY_READY_CALL_ONLY, A);
      var h = function (n) {
        n = n || !1;
        try {
          var r, i;
          T.start(), t.hasMeasurementStrategy() ? i = (l.isMobileAppEnvironment() || pe.isOmidNative()) && t.supportsAdContainerGeometry() ? t.getScreenLocationInfo({}, n) : t.getScreenLocationInfo(s.collect(), n) : (i = s.collect(), l.isMobileAppEnvironment() ? (i.viewState = p.NA, i.method = p.NA, i.percentInView = p.NA) : m && (i.viewState = p.NA, i.percentInView = p.PIV_NA), f && u.setVideoSpecificScreenEventFields(i)), r = c.registerLocation(i), n || e.trigger(d, i), T.stop();
          var g = Ve.round(T.getTime() / T.getCount());
          return a.addItem({
            output: g
          }, "lt", {
            type: p.DT_CODES.UNLOAD
          }), r;
        } catch (e) {
          o.trigger(w.ERROR, p.ERROR_CODES.CHECK_SCREEN_LOC);
        }
      };
      return {
        checkScreenLoc: h,
        stringifyPingTimes: function () {
          return i.on("everySecond") ? "1-2-3-4-5-6-7-8-9-10-11-12-13-14-15" : f ? "2-5-15" : "1-5-15";
        },
        isImmediatelyMeasurable: function () {
          var e = pe.xDomainIframe,
            r = e && n.browserIs(p.BROWSERS.WEBKIT),
            i = e && n.browserIs(p.BROWSERS.MSEDGE),
            o = !r && !i && !(e && E);
          return l.isMobileAppEnvironment() ? t.isMeasurable() : o;
        },
        requiresDelayedViewabilityEvent: function () {
          l.isMobileAppEnvironment() && t.hasMeasurementStrategy() && t.requiresDelayedViewabilityEvent();
        },
        addMeasurementChangedListener: function (t) {
          e.on(d, t);
        }
      };
    },
    On = {
      name: "viewabilityLoopLifecycle",
      dependencies: [P.VIEWABILITY, P.FEATURES, P.CONTEXT, P.BROWSER],
      creator: function (n, r, i, o) {
        "use strict";

        var a,
          s = Sn(i),
          c = [new Rn(), new vn(s)],
          u = function (e) {
            "sessionFinish" === e.type && (E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
              output: pe.getTagTime()
            }, V.OMID_SESSION_FINISH), E.getAggregator().trigger(w.AD_SESSION_COMPLETE));
          },
          d = function () {
            var e,
              t = E.getAggregator().request(P.MOBILE_APP).isMobileAppEnvironment();
            E.getAggregator().request(P.IDS).impressionIsIdentifiable() && (a = function (e, t) {
              var n,
                r = t,
                i = function (t) {
                  n || (t && e(), n = Ve.setInterval(e, r));
                },
                o = function (t) {
                  n && (t && e(), Ve.clearInterval(n), n = null);
                };
              return {
                start: i,
                stop: o,
                updateFrequency: function (e, t) {
                  r = e, n && (o(), i(t));
                }
              };
            }(n.checkScreenLoc, s.getPollingFrequency()), (e = f(c).findFirst(function (e, t) {
              return t.applies(o, r, i) ? t : void 0;
            })) ? e.start(a) : a.start(!0), pe.isOmid() ? E.getAggregator().request(P.OMID_VERIFICATION_CLIENT).registerSessionObserver(u, "IAS") : g(t ? "MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE" : "beforeunload"));
          },
          g = function (e) {
            Ie.addEvent(t, e, function () {
              E.getAggregator().trigger(w.AD_SESSION_COMPLETE);
            }, !1);
          },
          l = function () {
            i.isVideo() && !i.isOmid() && I(), E.getAggregator().trigger(w.UNLOAD), a && a.stop(), E.getAggregator().trigger(w.END_AD_SESSION), E.getAggregator().trigger(w.STOP_AD_TALK);
          },
          I = function () {
            var t = new me(p.DT_CODES.VIDEO_EVENTS);
            E.getAggregator().trigger(w.SEND_DT, t.callType, t.enumerator, function () {
              var t = {
                id: e.videoId,
                msg: "unloadComplete",
                messageType: "misc"
              };
              Ve.getWindow().postMessage(JSON.stringify(t), "*");
            });
          };
        E.getAggregator().once(w.START_VIEWABILITY_LOOP, d), E.getAggregator().once(w.AD_SESSION_COMPLETE, l);
      },
      settings: {
        tier: p.TIERS.VIEWABILITY
      }
    },
    Sn = function (e) {
      "use strict";

      return {
        getPollingFrequency: function () {
          return e.isVideo() ? 200 : 100;
        },
        getOptimizedPollingFrequency: function () {
          return 1e3;
        }
      };
    },
    vn = function (e) {
      "use strict";

      var t,
        n,
        r,
        i,
        o,
        a = !0,
        s = function (c) {
          if (r && !o && c < 1) return o = !0, void Ve.setTimeout(function () {
            s(c);
          }, 1e3);
          i = c < 1, !n && i ? (n = !0, t.updateFrequency(e.getOptimizedPollingFrequency(), a)) : n && !i && (n = !1, t.updateFrequency(e.getPollingFrequency(), a));
        },
        c = function (e) {
          s(e.percentInView);
        };
      return {
        applies: function (e, t, n) {
          var i = t.on("viewabilityOptimization");
          return r = n.usesZeroPivCustomMetric(), i;
        },
        start: function (e) {
          (t = e).start(a), E.getAggregator().on(w.IO_PIV_CHANGE, s), E.getAggregator().on(w.NEW_SCREEN_EVENT, c);
        }
      };
    },
    Rn = function () {
      "use strict";

      var e,
        t,
        n,
        r = !0,
        i = !1,
        o = function (a) {
          return n && !i && a < 1 ? (i = !0, void Ve.setTimeout(function () {
            o(a);
          }, 1e3)) : (a < 1 ? (e || t.stop(r), e = !0) : e && (e = !1, t.start(r)), e);
        },
        a = function () {
          t.start(r);
        };
      return {
        applies: function (e, t, r) {
          n = r.usesZeroPivCustomMetric();
          var i = U();
          return t.on("viewabilityOptimization") && i.applies(e, t, r) && r.isDeviceTypeGroupMobile();
        },
        start: function (e) {
          (t = e).start(r), E.getAggregator().on(w.IO_PIV_CHANGE, o), E.getAggregator().on(w.NODES_ADDED, a);
        }
      };
    },
    Nn = function (r, i, o, a, s, c) {
      "use strict";

      var u,
        d,
        g,
        l,
        I,
        m,
        T,
        A,
        h,
        _,
        D = he.getElementsWindow(i),
        O = (he.getElementsDocument(i), E.getAggregator().provide(P.IFRAME_CALCULATOR_HELPER, Jn(D)), jn(i, a)),
        S = p.AD_IDENTIFIER + "-" + e.asid,
        v = !1,
        R = Ae({}),
        N = pe.isDeviceTypeGroupMobile(),
        y = pe.usesGroupMCustomMetricMobilePassThru(),
        C = function () {
          return u || (u = O.calcDims(i, a, g), e.autotagSizeSet && e.adWidth > 1 && e.adHeight > 1 && (u.set("width", e.adWidth), u.set("height", e.adHeight)), M() ? b(u) : o === p.DETECTION_METHODS.AD_PLACEHOLDER && u.treatAsPlaceholder()), u;
        },
        M = function () {
          return o === p.DETECTION_METHODS.VIDEO && pe.embedded;
        },
        b = function (e) {
          var t = new Ae(i).getRounded();
          try {
            e.set("width", t.width), e.set("height", t.height);
          } catch (e) {
            E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC);
          }
        },
        V = function () {
          return !1;
        },
        L = function () {
          var e,
            n = W(),
            i = O.getClippedDims && (M() || pe.isCeltra());
          return n ? d = g.getPiv() : f.isUndef(d) && (e = !N && (pe.friendly || f.isDef(t.mozInnerScreenX)) && s.on("offscreen"), A = C(), T = new Ae(he.calcWinDims()), m = new Ae(e ? he.calcMonDims() : {}), h = i ? O.getClippedDims() : R, d = r.calcPercentInView(A, T, m, h)), d;
        },
        F = function () {
          return r.calcInitialViewState(L());
        },
        x = function () {
          return i !== t && C().isHidden();
        },
        W = function () {
          var e = pe.xDomainIframe && v,
            t = N && v && g.isReady();
          return e || t;
        };
      return function () {
        var e = Ve.getWindow(),
          t = Ve.getDoc(),
          n = i === e,
          a = t.body,
          s = E.getAggregator(),
          c = new U(),
          u = s.request(P.BROWSER),
          d = s.request(P.FEATURES),
          f = s.request(P.CONTEXT),
          m = !pe.xDomainIframe,
          T = n && a ? t.body : i;
        if (_ = pe.friendlyIframe ? e.frameElement : T, Ie.addEvent(T, "click", function (e) {
          E.getAggregator().trigger(w.AD_COMPONENT_CLICKED, e);
        }), Ie.addEvent(T, "touchend", function (e) {
          E.getAggregator().trigger(w.AD_COMPONENT_TOUCHED, e);
        }), Ie.addEvent(T, "mouseover", function (e) {
          E.getAggregator().trigger(w.AD_COMPONENT_MOUSED_OVER, e);
        }), Ie.addEvent(T, "mouseout", function (e) {
          E.getAggregator().trigger(w.AD_COMPONENT_MOUSED_OUT, e);
        }), c.applies(u, d, f)) {
          if ((g = It(i, m)).start(), v = !0, y && o !== p.DETECTION_METHODS.AD_PLACEHOLDER) {
            var A = new sr(C().getRounded()),
              h = new fr(),
              D = new lr(g.getObservedNode(), h);
            l = new ur(A.getSlices(), D);
          }
        } else y && (I = new dr(r));
      }(), {
        mark: function () {
          he.setAttributeOf(_, S, "");
        },
        cleanup: function () {
          he.removeAttributeOf(_, S);
        },
        isNode: function (e) {
          return i === e;
        },
        isHidden: x,
        isObstructed: V,
        getDims: C,
        getPercentInView: L,
        getLocationState: F,
        getOnPageViewability: function () {
          return x() ? p.OUT_OF_VIEW : F();
        },
        getDetectionMethod: function () {
          return o;
        },
        getContainerDims: function () {
          return O.allowsOptimization ? u : Ae(a);
        },
        refresh: function () {
          u = void 0, d = void 0, m = void 0, T = void 0, A = void 0, h = void 0, c && function () {
            var e, r;
            if (!pe.isDomless() && (r = i.parentNode)) {
              for (; i !== t && r && r !== n && !e;) e = r === a, r = r.parentNode;
              e || (a = i.parentNode);
            }
          }();
        },
        getAdNode: function () {
          return i;
        },
        getSliceStatus: function () {
          var e;
          return l && l.isReadyToMeasure() ? e = l.getSliceStatus() : pe.friendly && I && f.isDef(A) && (e = I.getSliceStatus(A, T, m, h)), e;
        }
      };
    },
    yn = function (e, t) {
      "use strict";

      var n,
        r = [],
        i = f([]),
        o = function () {
          return r[0] && r[0].getDetectionMethod() === p.DETECTION_METHODS.AD_PLACEHOLDER;
        },
        a = function (a, s, c, u) {
          var d,
            g = o() || 0 === r.length,
            l = Nn(e, a, s, c, t, u);
          o() && (d = r.shift(), i = f(r), d.cleanup(), n = void 0), r.push(l), i = f(r), g && l.mark(), g && s !== p.DETECTION_METHODS.AD_PLACEHOLDER && E.getAggregator().trigger(w.PRIMARY_AD_FOUND, l);
        },
        s = function () {
          if (n) return n;
          var e,
            t = !1,
            r = 0,
            o = 0;
          return i.each(function (n, i) {
            var a,
              s = i.getDims();
            s.hasValidDims() && (e = i.getPercentInView(), t = e !== p.NA, a = s.area(), r += a, o += e / 100 * a);
          }), n = {
            totalArea: r,
            totalInView: o,
            hasMeasurement: t
          };
        },
        c = function (e) {
          var t = E.getAggregator().request(P.AD_RENDER_STATUS);
          return !e && !t;
        },
        u = function (e) {
          var t,
            n = s();
          return t = n.hasMeasurement ? Ve.round(n.totalInView / n.totalArea * 100) : p.PIV_NA, (isNaN(t) || c(e)) && (t = 0), t;
        },
        d = function (n) {
          var r = t.bootstrapOn(V.MOB_OR_TAB),
            i = s().totalArea >= p.MRC_LARGE_AD_SIZE && t.on("largeAd") && !r && !pe.isVideo();
          return e.calcInitialViewState(u(n), i);
        },
        g = function (e) {
          var t = -1;
          return i.each(function (n, r) {
            r.isNode(e) && (t = n);
          }), t;
        },
        l = function (e) {
          return function () {
            return r[0] && r[0][e]();
          };
        };
      return E.getAggregator().on(w.AD_COMPONENT_ADDED, function (e) {
        f(e).each(function (e, t) {
          -1 === g(t) && a(t, p.DETECTION_METHODS.MUTATION);
        });
      }), E.getAggregator().on(w.AD_COMPONENT_REMOVED, function (e) {
        f(e).each(function (e, t) {
          var n = g(t);
          n > -1 && r.splice(n, 1);
        });
      }), {
        getDims: l("getDims"),
        isObstructed: l("isObstructed"),
        getDetectionMethod: l("getDetectionMethod"),
        getContainerDims: l("getContainerDims"),
        getViewState: d,
        getViewStateIgnoringRender: function () {
          return d(!0);
        },
        getPercentInView: u,
        getPercentInViewIgnoringRender: function () {
          return u(!0);
        },
        isHidden: l("isHidden"),
        isUsingPlaceholder: o,
        hasAd: function () {
          return !!r.length;
        },
        refresh: function () {
          n = void 0, i.each(function (e, t) {
            t.refresh();
          });
        },
        addAdComponent: a,
        clearCollection: function () {
          i.each(function (e, t) {
            t.cleanup();
          }), r = [], i = f([]), n = void 0;
        },
        getOutOfViewReasons: function (e) {
          var t,
            i = [],
            o = r[0],
            a = p.OUT_OF_VIEW_REASONS;
          return o && (t = n || d(), c(e) ? i.push(a.RENDER) : t !== p.OUT_OF_VIEW && t !== p.PARTIAL_VIEW_MINUS || i.push(a.GEOM), o.isHidden() && i.push(a.HIDDEN), o.isObstructed() && i.push(a.OBSTRUCTION)), i;
        },
        getComponentCount: function () {
          return r.length;
        },
        getComponents: function () {
          return r;
        },
        getSliceStatus: l("getSliceStatus")
      };
    },
    Cn = function () {
      "use strict";

      var e,
        t,
        n,
        r = function (e) {
          e ? e && n && (Ve.execAtEndOfThread(function () {
            E.getAggregator().trigger(w.DELAYED_VIEWABILITY_READY_CALL_ONLY);
          }), n = !1) : n = !0;
        };
      return {
        detectionMethod: function () {
          return t && t.detectionMethod;
        },
        isApplicable: function (e) {
          return e.isBustedIframe();
        },
        find: function () {
          t = t || Fn();
          var n = he.crossQuerySelector(Fn().getCssSelector(), !0);
          return e = n ? n.parentNode : e, r(n), n;
        },
        getAdContainer: function () {
          return e;
        },
        allowForAdContainerChange: !0
      };
    },
    Mn = function (t, n) {
      "use strict";

      var r,
        i = t || e.contextNode.parentNode,
        o = he.findChildWithLargestContent(i, n);
      return he.getNodeArea(o) > 1 && !o[p.IAS_DETECTOR] && (r = o), r;
    },
    wn = function () {
      "use strict";

      var e = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT);
      return {
        usePlaceholder: !0,
        detectionMethod: p.DETECTION_METHODS.OMID,
        isApplicable: function () {
          return pe.isOmidForWeb() && !pe.isOmidNative();
        },
        find: function () {
          return e.element || e.queuedOutputItems.push({
            code: "oea",
            value: !0
          }), e.element;
        },
        getAdContainer: function () {
          return e.element && e.element.parentNode;
        },
        allowForAdContainerChange: !0
      };
    },
    bn = function () {
      "use strict";

      return {
        detectionMethod: p.DETECTION_METHODS.IFRAME,
        find: function () {
          return t;
        },
        isApplicable: function () {
          return pe.embedded;
        },
        getAdContainer: function () {
          return e.contextNode.parentNode;
        },
        allowForAdContainerChange: !0
      };
    },
    Pn = function () {
      "use strict";

      var e,
        t = Ve.getDoc().scripts,
        n = function () {
          return e || (e = f(t).findFirst(function (e, t) {
            return He.contains(t.src, "servedby.flashtalking");
          })), e;
        };
      return {
        detectionMethod: p.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,
        isApplicable: function (e, t) {
          return t.on("bustediframe") && e.embedded && void 0 !== n();
        },
        getCssSelector: function () {
          var t,
            r = function () {
              var t,
                r = e || n();
              return r && r.src && (t = r.src.match(/;(\d+);/)[1]), t;
            }(),
            i = "#ftdiv" + r,
            o = "#ftframe" + r;
          try {
            t = f([i, o]).findFirst(function (e, t) {
              return he.crossQuerySelector(t, true);
            });
          } catch (e) {}
          return t;
        }
      };
    },
    Vn = function () {
      "use strict";

      var e = "_tpi";
      return {
        isApplicable: function (t, n) {
          var r;
          try {
            r = he.getFrameId();
          } catch (e) {}
          return n.on("yieldmo") && r && He.contains(r, e) && he.crossQuerySelector("[data-href*='ads.yieldmo.com']", !0);
        },
        getCssSelector: function () {
          return "[id='" + he.getFrameId().replace(e, "") + "']";
        },
        detectionMethod: p.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO
      };
    },
    Ln = function () {
      "use strict";

      var e,
        t,
        n = Ve.getDoc(),
        r = function () {
          var t,
            r,
            i = "ebDiv";
          return e || (r = (t = he.querySelector(n, "div[id*='ebDiv']")) && t.id, e = r && r.split(i)[1]), e;
        },
        i = function () {
          var e = he.crossQuerySelector("iframe[id*='ebAd'][id$='" + r() + "']", !0);
          return e && e.id;
        },
        o = function () {
          var e, n;
          return t || (e = i() ? i() : (n = he.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='" + r() + "']", !0)) && n.id, t = e && "#" + e), t;
        };
      return {
        detectionMethod: p.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,
        isApplicable: function (e, t) {
          var n,
            i,
            a = Ve.getWindow(),
            s = e.friendlyIframe && Ve.getWindow().frameElement,
            c = s && Ae(s).isOneByOne(),
            u = (n = ["bs.serving-sys.com/BurstingPipe/adServer", "secure-ds.serving-sys.com/BurstingCachedScripts"], i = Ve.getDoc().scripts, f(i).findFirst(function (e, t) {
              return f(n).findFirst(function (e, n) {
                return He.contains(t.src, n);
              });
            })),
            d = a.EBG && a.EBG.ads && !f(a.EBG.ads).isEmpty();
          return t.on("sizmek") && u && d && c && r() && o();
        },
        getCssSelector: o
      };
    },
    Fn = function () {
      "use strict";

      var e,
        t = E.getAggregator().request(P.FEATURES);
      return e || (e = [Ln(), Vn(), Pn()]), f(e).findFirst(function (e, n) {
        return n.isApplicable(pe, t);
      });
    },
    Un = function () {
      "use strict";

      var e,
        t = function () {
          Ve.execAtEndOfThread(function () {
            E.getAggregator().trigger(w.DELAYED_VIEWABILITY_READY_CALL_ONLY);
          });
        };
      return {
        usePlaceholder: !1,
        detectionMethod: p.DETECTION_METHODS.VENDOR_CELTRA,
        isApplicable: function (e, t) {
          return t.on("celtra") && e.isCeltra();
        },
        find: function () {
          var n,
            r = xn().find();
          return r && r.celtra && r.celtra.loaded && (n = r.celtra.viewabilityObservee, e = he.getElementsWindow(n).frameElement || n.parentNode, t()), n;
        },
        getAdContainer: function () {
          return e;
        },
        allowForAdContainerChange: !1
      };
    },
    xn = function () {
      "use strict";

      var t,
        n = "celtra-ad-v3",
        r = "celtra-ad-v4",
        i = function () {
          var i,
            o = e.contextNode.parentNode;
          return o && (He.contains(o.className, n) || He.contains(o.className, r)) ? t = o : (i = o && (he.querySelector(o, ".celtra-ad-v3") || he.querySelector(o, ".celtra-ad-v4"))) && (t = i), t;
        };
      return {
        find: i,
        isApplicable: function () {
          return void 0 !== i();
        }
      };
    },
    Wn = function () {
      "use strict";

      var t = E.getAggregator().request(P.MOBILE_APP);
      return {
        usePlaceholder: !0,
        detectionMethod: p.DETECTION_METHODS.AD_HUNT,
        isApplicable: t.isMobileAppEnvironment,
        find: function () {
          return (e = he.findChildWithLargestContent(Ve.getDoc().body)) && e.hasValidSizeForMobileApp && !e[p.IAS_DETECTOR] ? e : void 0;
          var e;
        },
        getAdContainer: function () {
          return e.contextNode.parentNode;
        },
        allowForAdContainerChange: !0
      };
    };
  const Bn = new class {
    constructor() {
      this.cachedIsFoundOnPage = !1;
    }
    getDocument() {
      let e;
      try {
        e = Ve.getDoc();
      } catch (e) {}
      return e;
    }
    get isIE11() {
      const e = this.getDocument();
      return e && e.documentMode;
    }
    hasBrowserSupport() {
      let e = !1;
      const t = this.getDocument(),
        n = !pe.isDomless(),
        r = !(this.isIE11 || !t || "function" != typeof t.body.attachShadow);
      return n && r && (e = !0), e;
    }
    isFoundOnPage(e) {
      const t = Ve.getDoc(),
        n = e || t.body;
      let r = !1;
      if (this.cachedIsFoundOnPage) r = !0;else if (this.hasBrowserSupport()) {
        if (n.shadowRoot) r = !0, this.cachedIsFoundOnPage = !0;else {
          const e = n.querySelectorAll("*");
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            if (n && n.shadowRoot) {
              r = !0, this.cachedIsFoundOnPage = !0;
              break;
            }
          }
        }
      } else r = !1;
      return r;
    }
    querySelector({
      customRootElement: e,
      selector: t
    }) {
      const n = Ve.getDoc(),
        r = e || n.body;
      let i;
      const o = e => {
        const n = t && t.replace("#", "");
        if (!i) for (let t = 0; t < e.length; t++) {
          const r = e[t];
          r && r.id === n && (i = r), r && r.shadowRoot && o(r.shadowRoot.querySelectorAll("*"));
        }
      };
      return r.shadowRoot && o(r.shadowRoot.querySelectorAll("*")), o(r.querySelectorAll("*")), i;
    }
  }();
  var Gn = function () {
      "use strict";

      var t,
        n = function (e) {
          var t = f.isFunction(e.contextNode.getAttribute) && e.contextNode.getAttribute("data-ias-container");
          return t && "#" + t || e._cl_adpath;
        },
        r = function () {
          var t = E.getAggregator().request(P.FEATURES),
            n = e && 4 === e.integration;
          return !t.on("forceKeepGoogleAdNode") || !n;
        };
      return {
        getAdSelectorId: n,
        detectionMethod: p.DETECTION_METHODS.SPECIFIED_AD,
        isApplicable: function () {
          return pe.isSpecifiedAd();
        },
        find: function () {
          var i = n(e),
            o = he.crossQuerySelector(i),
            a = pe.isPageOnShadowDomWhitelist(),
            s = function (e) {
              return r() && he.getNodeArea(e) < 1;
            }(o);
          return o ? (t = he.getParent(o), s && (t = o, o = he.findElementsWithSize(o))) : a && Bn.isFoundOnPage() && (o = Bn.querySelector({
            selector: i
          }), t = he.getParent(o)), o;
        },
        getAdContainer: function () {
          return t;
        },
        allowForAdContainerChange: !0,
        shouldValidateAdNode: r
      };
    },
    kn = function () {
      "use strict";

      var t;
      return {
        detectionMethod: p.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,
        isApplicable: function () {
          return pe.isCompoundAd();
        },
        find: function () {
          var n,
            r,
            i = [];
          return (n = e._cl_adpath, /\[(.*)\]/.exec(n)[1].split(",")).forEach(function (e) {
            (r = he.crossQuerySelector(e)) && (t = he.getParent(r), he.getNodeArea(r) < 1 && (t = r, r = he.findElementsWithSize(r))), i.push(r);
          }), i;
        },
        getAdContainer: function () {
          return t;
        },
        allowForAdContainerChange: !0
      };
    },
    Hn = function () {
      "use strict";

      return {
        usePlaceholder: !0,
        detectionMethod: p.DETECTION_METHODS.AD_HUNT,
        isApplicable: function () {
          return !0;
        },
        find: Mn,
        getAdContainer: function () {
          return e.contextNode.parentNode;
        },
        allowForAdContainerChange: !0
      };
    },
    Yn = function () {
      "use strict";

      return {
        detectionMethod: p.DETECTION_METHODS.VIDEO,
        find: E.getAggregator().request(P.VIDEO).findAdNode,
        isApplicable: pe.isVideo,
        getAdContainer: function () {
          return e.contextNode.parentNode;
        },
        allowForAdContainerChange: !0
      };
    },
    jn = function (e, t) {
      "use strict";

      var n,
        r,
        i = [Xn(), Kn(), qn()];
      return r = f(i).findFirst(function (n, r) {
        return r.isApplicable(e, t);
      }), (n = zn()).isApplicable(t) && (n.setBaseStrategy(r), r = n), r;
    },
    qn = function () {
      "use strict";

      return {
        calcDims: function (e, t) {
          var n,
            r,
            i = new Ae(e);
          return he.isClippable(e, t) && (n = he.getClippedDimensions(e, t), r = i.getRounded(), i.set("height", n.height < r.height ? n.height : r.height || 1), i.set("width", n.width < r.width ? n.width : r.width || 1)), i;
        },
        allowsOptimization: !1,
        isApplicable: function (e) {
          var t = (pe.isSpecifiedAd() || pe.isBustedIframe()) && he.nodeIsInWindow(e, Ve.getTop()),
            n = !he.elementIsEmbedded(e);
          return t || n;
        }
      };
    },
    Kn = function () {
      "use strict";

      var e = E.getAggregator().request(P.IFRAME_CALCULATOR_HELPER);
      return {
        calcDims: e.calcDims,
        getClippedDims: e.getClippedDims,
        allowsOptimization: !0,
        isApplicable: function (e) {
          return !(pe.isSpecifiedAd() || pe.isBustedIframe()) && he.elementIsEmbedded(e);
        }
      };
    },
    Xn = function () {
      "use strict";

      var e = E.getAggregator().request(P.IFRAME_CALCULATOR_HELPER);
      return {
        calcDims: function (t) {
          var n = e.calcDims(),
            r = new Ae(t).getRounded();
          return n.set("height", r.height), n.set("width", r.width), n;
        },
        getClippedDims: e.getClippedDims,
        allowsOptimization: !1,
        isApplicable: function (e, t) {
          var n = (pe.isSpecifiedAd() || pe.isBustedIframe()) && pe.embedded && !he.nodeIsInWindow(t, Ve.getTop()),
            r = pe.isCeltra() && he.elementIsEmbedded(e);
          return n || r;
        }
      };
    },
    zn = function () {
      "use strict";

      var e;
      return {
        calcDims: function (t, n, r) {
          var i = f.isDef(r) ? r.getAdNodeDimensions() : void 0;
          return e && f.isUndef(i) && (i = e.calcDims(t, n)), i;
        },
        isApplicable: function (e) {
          var t = U(),
            n = E.getAggregator(),
            r = n.request(P.BROWSER),
            i = n.request(P.FEATURES),
            o = n.request(P.CONTEXT);
          return o.isDeviceTypeGroupMobile() && t.applies(r, i, o);
        },
        allowsOptimization: !1,
        setBaseStrategy: function (t) {
          e = t;
        }
      };
    },
    Jn = function (e) {
      "use strict";

      e = e || Ve.getWindow();
      var t = function (n, r) {
          n = n || e, r = r || {
            top: 0,
            left: 0,
            width: Ve.getMaxNumber(),
            height: Ve.getMaxNumber()
          };
          for (var i, o = n.parent.frames, a = !1, s = 0, c = o.length; s < c; s++) if (o[s] == n) {
            i = o[s], a = !0;
            break;
          }
          if (a) {
            var u = he.getRect(i.frameElement);
            r.left += u.left, r.top += u.top;
            try {
              r.width = Ve.min(r.width, u.width), r.height = Ve.min(r.height, u.height);
            } catch (e) {
              E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.GET_AD_DIMENSIONS);
            }
            n !== Ve.getTop() && t(n.parent, r);
          }
          return r;
        },
        n = function () {
          var n,
            r,
            i,
            o,
            a,
            s,
            c,
            u,
            d,
            g,
            l,
            I = {};
          try {
            g = Ve.getMaxNumber(), l = Ve.getMaxNumber(), pe.friendly ? (s = (o = t()).left, c = o.top, g = o.width, l = o.height, u = (a = he.browserWindowPosition()).scrX + s, d = a.scrY + c) : f.isDef(e.mozInnerScreenX) && (u = Ve.round(e.mozInnerScreenX), d = Ve.round(e.mozInnerScreenY)), I = {
              scrX: u,
              scrY: d,
              iFrameClippingWidth: g,
              iFrameClippingHeight: l
            }, f.isDef(e.innerWidth) ? (r = e.innerWidth, i = e.innerHeight) : e.frameElement && f.isDef(e.frameElement.clientWidth) && (r = e.frameElement.clientWidth, i = e.frameElement.clientHeight), n = {
              width: r,
              height: i
            }, I.height = n.height, I.width = n.width;
          } catch (e) {
            E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.GET_AD_DIMENSIONS);
          }
          return I;
        };
      return {
        calcDims: function () {
          return new Ae(n());
        },
        getClippedDims: function () {
          var e = n();
          return new Ae({
            scrX: e.scrX,
            scrY: e.scrY,
            width: e.iFrameClippingWidth,
            height: e.iFrameClippingHeight
          });
        }
      };
    },
    Qn = function () {
      "use strict";

      return {
        createInstance: function (e, t, n) {
          return pe.isDomless() ? new Zn() : new $n(e, t, n);
        }
      };
    },
    $n = function (r, i, o) {
      "use strict";

      var a,
        s,
        c = E.getAggregator().request(P.BROWSER),
        u = e && e.contextNode && e.contextNode.parentNode ? e.contextNode.parentNode : null,
        d = yn(i, o),
        g = function () {
          var e, t, n, r;
          a = a || function (e, t) {
            var n = [kn(), Gn()],
              r = [wn(), Wn(), Yn(), Cn(), Un(), bn(), Hn()],
              i = n.concat(r);
            return f(i).findFirst(function (n, r) {
              return r.isApplicable(e, t);
            });
          }(pe, o), e = a.find(), pe.friendlyIframe && pe.isBlockingSizmekTag() && A(e), !e && a.usePlaceholder ? (l(), m()) : e && (n = f(e).isArray() ? e : [e], t = a.getAdContainer(), r = a.allowForAdContainerChange, f(n).each(function (e, n) {
            d.addAdComponent(n, f.resolve(a.detectionMethod), t, r);
          }));
        },
        l = function () {
          var t;
          d.hasAd() || (t = he.getPlaceholderSpan(), u.insertBefore(t, e.contextNode.nextSibling), d.addAdComponent(t, p.DETECTION_METHODS.AD_PLACEHOLDER, he.getParent(t)));
        },
        I = function (e, t) {
          var n = !1;
          f(e).each(function (e, t) {
            t.addedNodes && t.addedNodes.length > 0 && (n = !0);
          }), n && (E.getAggregator().trigger(w.NODES_ADDED), t.disconnect());
        },
        m = function () {
          pe.isDeviceTypeGroupMobile() && c.hasMutationObserver() && Ve.getMutationObserver(I).observe(u, {
            childList: !0
          });
        },
        T = function (e, t) {
          var n,
            r = !1;
          f(e).each(function (e, t) {
            switch (t.type) {
              case "childList":
                f(t.addedNodes).each(function (e, t) {
                  t.nodeName && "script" === t.nodeName.toLowerCase() && (r = !0);
                });
                break;
              case "attributes":
                t.target.height * t.target.width <= 1 && (r = !0);
            }
          }), r && ((n = Ln()).isApplicable(pe, o) && (t.disconnect(), a = Cn(), d.clearCollection(), E.getAggregator().trigger(w.NODES_ADDED)), setTimeout(function () {
            n.isApplicable(pe, o) && (t.disconnect(), a = Cn(), d.clearCollection(), E.getAggregator().trigger(w.NODES_ADDED));
          }, 0));
        },
        A = function (e) {
          var t, n;
          if (!s && c.hasMutationObserver() && he.isWindow(e)) try {
            s = Ve.getMutationObserver(T), t = e && e.frameElement, n = e && e.document && e.document.body, s.observe(t, {
              attributes: !0,
              attributeFilter: ["height", "width"]
            }), s.observe(n, {
              childList: !0,
              subtree: !0
            });
          } catch (e) {}
        };
      return function (e) {
        var r = !1;
        if (!f.isUndef(t.MutationObserver)) {
          var i = new t.MutationObserver(function (e) {
              Ve.execAtEndOfThread(function () {
                r && f(e).each(function (e, t) {
                  t.addedNodes.length && E.getAggregator().trigger(w.AD_COMPONENT_ADDED, t.addedNodes), t.removedNodes.length && E.getAggregator().trigger(w.AD_COMPONENT_REMOVED, t.removedNodes);
                });
              });
            }),
            o = function () {
              r = !0, Ve.setTimeout(function () {
                r = !1;
              }, 40);
            };
          E.getAggregator().on(w.AD_COMPONENT_CLICKED, o), E.getAggregator().on(w.AD_COMPONENT_TOUCHED, o), E.getAggregator().on(w.AD_COMPONENT_MOUSED_OVER, o), E.getAggregator().on(w.AD_COMPONENT_CLICKED, xt.adComponent.trackClick), E.getAggregator().on(w.AD_COMPONENT_MOUSED_OVER, xt.adComponent.trackMouseOver), E.getAggregator().on(w.AD_COMPONENT_MOUSED_OUT, xt.adComponent.trackMouseOut), E.getAggregator().on(w.AD_COMPONENT_TOUCHED, xt.mobile.trackTouch), Ie.addEvent(t, b.BEFORE_UNLOAD, xt.finalizeAllCollectedData, !1), Ie.whenReady(function () {
            try {
              i.observe(n.body, {
                attributes: !0,
                childList: !0,
                characterData: !0
              });
            } catch (t) {
              e.add(p.ERROR_CODES.AC_WATCHER);
            }
          }, Ve.getDoc());
        }
      }(r), {
        find: function () {
          return d.isUsingPlaceholder() || !d.hasAd() ? g() : d.refresh(), d;
        },
        getDetectionMethod: function () {}
      };
    },
    Zn = function () {
      "use strict";

      var e = function () {
        return null;
      };
      return {
        find: e,
        getDetectionMethod: e
      };
    },
    er = function (e) {
      "use strict";

      var t = new ir(),
        n = new or(),
        r = "undefined" != typeof navigator ? navigator.userAgent.toLowerCase() : "",
        i = function () {
          var e,
            t = ["FBAN", "FBAV", "Twitter", "Instagram", "Flipboard", "Snapchat", "LinkedInApp", "Pinterest"],
            n = !1;
          for (e = 0; e < t.length; e++) if (r.indexOf(t[e].toLowerCase()) > -1) {
            n = !0, E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
              output: t[e].substring(0, 2)
            }, V.MAPP1_EXCLUSION_LIST_MATCH, {
              type: p.IMPRESSION_EVENT
            });
            break;
          }
          return n;
        };
      return function () {
        var r = "",
          o = E.getAggregator().request(P.OMID_AD_SESSION_CONTEXT),
          a = pe.isDomless() || o && "app" === o.environment,
          s = o && "web" === o.environment,
          c = e.bootstrapOn(V.MOB_OR_TAB),
          u = e.bootstrapOn(V.MOB_APP_WEBVIEW),
          d = e.bootstrapOn(V.MOB_APP),
          g = c && u || d;
        try {
          a || !s && g && !i() ? (r = t.detect(), t.hasDetectedMobileApp() && ("s_serv" !== r && "u_cars" !== r || (ar[ar.length - 1].detectionRules.userAgent[0] = "/"), n.detect(), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: "1"
          }, V.MOBILE_APP_ENVIRONMENT, {
            type: p.IMPRESSION_EVENT
          }), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: r
          }, V.MATCHED_MOBILE_APP_DETECTION_RULE, {
            type: p.IMPRESSION_EVENT
          }))) : s && E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: "a_oweb"
          }, V.MATCHED_MOBILE_APP_DETECTION_RULE, {
            type: p.IMPRESSION_EVENT
          });
        } catch (e) {
          E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.MOBILE_APP);
        }
      }(), {
        excludedByUserAgent: i,
        isMobileAppEnvironment: function () {
          return t.hasDetectedMobileApp();
        },
        isSafeToInjectMraid: function () {
          return n.isSafeToInjectMraid();
        }
      };
    };
  const tr = {
      url: {
        STRINGIFIED_METHOD: "u",
        detect: function (r) {
          "use strict";

          if (pe.isDomless()) return !1;
          const i = Ve.getWindow().location.href,
            o = [i];
          try {
            o.push(top.location.href);
          } catch (e) {}
          try {
            o.push(parent.location.href);
          } catch (e) {}
          if (pe.embedded) {
            try {
              o.push(parent.document.referrer);
            } catch (e) {}
            try {
              o.push(n.referrer);
            } catch (e) {}
          }
          try {
            "jsi" !== e.mode && o.push(t.location.href);
          } catch (e) {}
          try {
            o.push(e.jsref);
          } catch (e) {}
          return o.sort(function (e, t) {
            return e.length > t.length ? 1 : e.length < t.length ? -1 : 0;
          }), !!f(r).findFirst(function (e, t) {
            let n,
              r,
              a = !1;
            const s = "mobfox" === t ? o : [i];
            for (r = 0; r < s.length; r++) {
              n = s[r];
              const e = "string" == typeof t ? [t] : t;
              if (f(e).isArray() && e) for (let t = 0; t < e.length && (a = n.indexOf(e[t]) > -1, !1 !== a); t++);
              if (a) break;
            }
            return a;
          });
        }
      },
      userAgent: {
        STRINGIFIED_METHOD: "a",
        detect: function (e) {
          "use strict";

          return !pe.isDomless() && !!f(e).findFirst(function (e, t) {
            let n,
              r = !1;
            const i = Ve.getWindow();
            return f.isDef(i.navigator) && f.isDef(i.navigator.userAgent) && (n = i.navigator.userAgent, r = n && -1 !== n.indexOf(t)), r;
          });
        }
      },
      javascript: {
        STRINGIFIED_METHOD: "j",
        detect: function (e) {
          "use strict";

          return !!f(e).findFirst(function (e, t) {
            let n = !1;
            return n = f.isDef(He.stringToProp(t)), n;
          });
        }
      },
      scriptSrc: {
        STRINGIFIED_METHOD: "s",
        detect: function (e) {
          "use strict";

          return !pe.isDomless() && !!f(e).findFirst(function (e, t) {
            return he.containsScriptTagWithSrc(function (e) {
              let n = !1;
              return n = f.isDef(e) && -1 !== e.indexOf(t), n;
            });
          });
        }
      }
    },
    nr = function () {
      "use strict";

      const e = function (e, t) {
        let n;
        const r = tr[e];
        return r.detect(t) && (n = r.STRINGIFIED_METHOD), n;
      };
      return {
        process: function (t) {
          return f(t).map(e).join("");
        }
      };
    };
  var rr = [{
      STRINGIFIED_APPDET: "omid",
      detectionRules: {
        javascript: ["omidSupported"]
      }
    }, {
      STRINGIFIED_APPDET: "file",
      detectionRules: {
        url: ["file:"],
        scriptSrc: ["file:"]
      }
    }, {
      STRINGIFIED_APPDET: "cont",
      detectionRules: {
        url: ["content:"]
      }
    }, {
      STRINGIFIED_APPDET: "appl",
      detectionRules: {
        url: ["applewebdata:"]
      }
    }, {
      STRINGIFIED_APPDET: "adma",
      detectionRules: {
        javascript: ["ADMARVEL"]
      }
    }, {
      STRINGIFIED_APPDET: "admb",
      detectionRules: {
        userAgent: ["afma-sdk"],
        url: ["afma-sdk"]
      }
    }, {
      STRINGIFIED_APPDET: "imbi",
      detectionRules: {
        javascript: ["InmobiObj"]
      }
    }, {
      STRINGIFIED_APPDET: "mopb",
      detectionRules: {
        url: ["ads.mopub.com"],
        javascript: ["mopubFinishLoad"]
      }
    }, {
      STRINGIFIED_APPDET: "pand",
      detectionRules: {
        javascript: ["PandoraApp"]
      }
    }, {
      STRINGIFIED_APPDET: "sads",
      detectionRules: {
        javascript: ["mraid.sasSendMessage"]
      }
    }, {
      STRINGIFIED_APPDET: "ogry",
      detectionRules: {
        url: ["ogury.io"],
        scriptSrc: ["OguryFR"]
      }
    }, {
      STRINGIFIED_APPDET: "cnvt",
      detectionRules: {
        url: ["adsx.greystripe.com/openx/www/delivery/ia.php"]
      }
    }, {
      STRINGIFIED_APPDET: "mobf",
      safeToInjectMraid: !0,
      detectionRules: {
        url: ["mobfox"]
      }
    }, {
      STRINGIFIED_APPDET: "innr",
      detectionRules: {
        url: ["inner-active.mobi"]
      }
    }, {
      STRINGIFIED_APPDET: "apnx",
      detectionRules: {
        javascript: ["anjam"]
      }
    }, {
      STRINGIFIED_APPDET: "aers",
      detectionRules: {
        userAgent: ["AerServ"]
      }
    }, {
      STRINGIFIED_APPDET: "tapj",
      detectionRules: {
        url: [["tapjoyads", "app_id"]]
      }
    }, {
      STRINGIFIED_APPDET: "quan",
      detectionRules: {
        userAgent: ["QuantcastSDK"]
      }
    }, {
      STRINGIFIED_APPDET: "cars",
      safeToInjectMraid: !0,
      detectionRules: {
        url: [["carsales", ".android"], ["carsales", ".ios"]]
      }
    }, {
      STRINGIFIED_APPDET: "mrai",
      detectionRules: {
        javascript: ["mraid"]
      }
    }],
    ir = function () {
      "use strict";

      var t,
        n = function (e, t) {
          var n,
            r = nr().process(t.detectionRules);
          return r && (n = r + "_" + t.STRINGIFIED_APPDET), n;
        };
      return {
        detect: function () {
          return "" === (t = (t = f(rr).map(n)).length > 0 ? t[0] : "") && e.hasOwnProperty("serverSideAppDetection") && 0 !== e.serverSideAppDetection.length && (t = "s_serv"), t;
        },
        hasDetectedMobileApp: function () {
          return void 0 !== t && "" !== t;
        }
      };
    },
    or = function () {
      "use strict";

      var e = [],
        t = [],
        n = function (t, n) {
          var r,
            i = nr().process(n.detectionRules);
          return i && (e.push(n.STRINGIFIED_SDK + "*" + i), r = n), r;
        };
      return {
        detect: function () {
          return (t = f(ar).map(n)).length > 0 && E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: function () {
              return e.join(".");
            }
          }, V.APP_SDKS_DETECTED, {
            type: p.IMPRESSION_EVENT
          }), t.length > 0;
        },
        isSafeToInjectMraid: function () {
          return 1 === t.length && f.isDef(t[0].safeToInjectMraid) && t[0].safeToInjectMraid;
        }
      };
    },
    ar = [{
      STRINGIFIED_SDK: "adma",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["ADMARVEL"],
        url: ["AdMarvel"]
      }
    }, {
      STRINGIFIED_SDK: "admb",
      safeToInjectMraid: !0,
      detectionRules: {
        userAgent: ["afma-sdk"],
        url: ["afma-sdk"]
      }
    }, {
      STRINGIFIED_SDK: "imbi",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["InmobiObj"]
      }
    }, {
      STRINGIFIED_SDK: "mmed",
      detectionRules: {
        url: ["mmsdk"],
        scriptSrc: ["mmsyscache"]
      }
    }, {
      STRINGIFIED_SDK: "mopb",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["mopubFinishLoad"],
        url: ["ads.mopub.com"]
      }
    }, {
      STRINGIFIED_SDK: "pand",
      detectionRules: {
        javascript: ["PandoraApp"]
      }
    }, {
      STRINGIFIED_SDK: "ambe",
      safeToInjectMraid: !0,
      detectionRules: {
        url: ["amobee"]
      }
    }, {
      STRINGIFIED_SDK: "smat",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["smaato_bridge"]
      }
    }, {
      STRINGIFIED_SDK: "afrm",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["Adform"]
      }
    }, {
      STRINGIFIED_SDK: "vrve",
      safeToInjectMraid: !0,
      detectionRules: {
        javascript: ["vrvsdk"]
      }
    }, {
      STRINGIFIED_SDK: "sads",
      detectionRules: {
        javascript: ["mraid.sasSendMessage"],
        url: ["smartadserver.com"]
      }
    }, {
      STRINGIFIED_SDK: "ogry",
      safeToInjectMraid: !0,
      detectionRules: {
        url: ["ogury.io"],
        scriptSrc: ["OguryFR"]
      }
    }, {
      STRINGIFIED_SDK: "cnvt",
      detectionRules: {
        url: ["adsx.greystripe.com/openx/www/delivery/ia.php"]
      }
    }, {
      STRINGIFIED_SDK: "mobf",
      safeToInjectMraid: !0,
      detectionRules: {
        url: ["mobfox"]
      }
    }, {
      STRINGIFIED_SDK: "innr",
      detectionRules: {
        url: ["inner-active.mobi"]
      }
    }, {
      STRINGIFIED_SDK: "apnx",
      detectionRules: {
        javascript: ["anjam"]
      }
    }, {
      STRINGIFIED_SDK: "aers",
      safeToInjectMraid: !0,
      detectionRules: {
        userAgent: ["AerServ"]
      }
    }, {
      STRINGIFIED_SDK: "tapj",
      detectionRules: {
        url: [["tapjoyads", "app_id"]]
      }
    }, {
      STRINGIFIED_SDK: "quan",
      detectionRules: {
        userAgent: ["QuantcastSDK"]
      }
    }, {
      STRINGIFIED_SDK: "mrad",
      safeToInjectMraid: !0,
      detectionRules: {
        userAgent: ["unmatchabledetectionstring"]
      }
    }],
    sr = function (e) {
      "use strict";

      var t = [],
        n = function (e, t, n) {
          return new gr(0, e, n, n + t);
        };
      return function () {
        if (e.height < 10) t.push({
          geometry: new gr(0, e.width, 0, e.height),
          percentageInViewContribution: 100,
          isInView: !1
        });else for (var r, i = Math.floor(e.height), o = i % 10, a = (i - o) / 10, s = 0; s < 10; s++) {
          var c = s < o ? a + 1 : a,
            u = {
              geometry: n(e.width, c, r || 0),
              percentageInViewContribution: 10,
              isInView: !1
            };
          t.push(u), r = u.geometry.value().bottomY;
        }
      }(), {
        getSlices: function () {
          return t;
        }
      };
    },
    cr = function () {
      "use strict";

      var e,
        t = p.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,
        n = p.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,
        r = [];
      return {
        getConfig: function (i) {
          if (e) return e;
          i.height < t && (t = 1, n = [100]);
          for (var o = 0; o < t; o++) r.push(!1);
          return e = {
            numberOfSlices: t,
            defaultSliceArray: r,
            percentInViewSliceArray: n
          };
        }
      };
    },
    ur = function (e, t) {
      "use strict";

      var n = {
          mbrd: !1,
          mbvs: [],
          mbe: "n",
          mbv: 9,
          mbs: [],
          mbm: 1,
          mbivs: []
        },
        r = function (e, t) {
          var n,
            r = 0,
            i = function (e, t) {
              var n = [],
                r = e.geometry.value();
              return f(t).each(function (t, i) {
                if (e.geometry.doesIntersect(i)) {
                  var o = i.value(),
                    a = Math.max(r.leftX, o.leftX),
                    s = Math.min(r.rightX, o.rightX),
                    c = Math.max(r.topY, o.topY),
                    u = Math.min(r.bottomY, o.bottomY);
                  n.push(new gr(a, s, c, u));
                }
              }), n;
            }(e, t);
          return f(i).each(function (e, t) {
            n = t.value(), r += n.area;
          }), r;
        },
        i = function (t) {
          f(e).each(function (e, n) {
            n.isInView = r(n, t) >= n.geometry.value().area;
          });
        };
      return t.addListener(i), {
        getPercentInView: function () {
          var t = function () {
            var t = 0;
            return n.mbs = [], f(e).each(function (e, r) {
              n.mbs.push(r.isInView), r.isInView && (t += r.percentageInViewContribution);
            }), t;
          }();
          return n.mbrd = 1, t !== n.mbp && n.mbivs.push([pe.getTagTime(), t]), n.mbp = t, t;
        },
        removePixels: function () {
          void 0 !== t && t.stop();
        },
        getPixelStateForDebug: function () {
          return n.mbm = 1, n.mbpr = [], n.mbir = [], f(e).each(function (e, t) {
            n.mbpr.push(p.NA), n.mbir.push(!1);
          }), n;
        },
        isReadyToMeasure: function () {
          return !0;
        },
        getSliceStatus: function () {
          var t = [];
          return f(e).each(function (e, n) {
            t.push(n.isInView);
          }), t;
        }
      };
    },
    dr = function (e) {
      "use strict";

      var t = cr();
      return {
        getSliceStatus: function (n, r, i, o) {
          var a,
            s = [],
            c = n.getRounded(),
            u = c.height,
            d = c.scrY,
            g = new Ae({
              scrX: c.scrX,
              width: c.width
            }),
            f = t.getConfig(c).numberOfSlices;
          g.set("height", Ve.floor(u / f));
          for (var l = 0; l < f; l++) g.set("scrY", Ve.ceil(d + u / f * l)), a = 100 === e.calcPercentInView(g, r, i, o), s.push(a);
          return s;
        }
      };
    },
    gr = function (e, t, n, r) {
      "use strict";

      var i = Math.ceil(e),
        o = Math.ceil(t),
        a = Math.ceil(n),
        s = Math.ceil(r),
        c = o - i,
        u = s - a,
        d = c * u,
        g = function () {
          return {
            leftX: i,
            rightX: o,
            topY: a,
            bottomY: s,
            width: c,
            height: u,
            area: d
          };
        };
      return {
        value: g,
        doesIntersect: function (e) {
          var t = g(),
            n = e.value();
          return n.leftX < t.rightX && n.rightX > t.leftX && n.topY < t.bottomY && n.bottomY > t.topY;
        }
      };
    },
    fr = function () {
      "use strict";

      return {
        createInstance: function (e, t) {
          return new IntersectionObserver(e, t);
        }
      };
    },
    lr = function (e, t) {
      "use strict";

      var n,
        r = [],
        i = [],
        o = function (e, t) {
          -1 === e.indexOf(t) && e.push(t);
        },
        a = function (e) {
          var t,
            n = function () {
              var e = [];
              return f(i).each(function (t, n) {
                var r = n.value();
                o(e, r.topY), o(e, r.bottomY);
              }), e = e.sort(function (e, t) {
                return e - t;
              });
            }();
          i = [];
          for (var r = 0; n.length > r && (t = r, n.length !== t + 1); r++) {
            var a = n[r],
              s = n[r + 1];
            i.push(new gr(0, e, a, s));
          }
        },
        s = function (e, t) {
          i.push(e), a(t), f(r).each(function (e, t) {
            t(i);
          });
        },
        c = function () {
          n.unobserve(e), n.disconnect();
        };
      return (n = t.createInstance(function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          u = e.pop(),
          d = u.boundingClientRect,
          g = d.width,
          f = u.intersectionRatio,
          l = u.intersectionRect,
          E = (t = d, r = (n = l).left - t.left, i = r + n.width, o = n.top - t.top, a = o + n.height, new gr(r, i, o, a));
        s(E, g), 1 === f && c();
      }, {
        threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
      })).observe(e), {
        addListener: function (e) {
          r.push(e);
        }
      };
    },
    Er = function () {
      "use strict";

      var e = function (e) {
          var t = !1;
          return pr.forEach(function (n) {
            e === n.PARTNER_NAME && (t = !0);
          }), t;
        },
        t = function (t, r) {
          return t.omidNativeInfo && t.omidNativeInfo.partnerName && e(t.omidNativeInfo.partnerName) ? r && n(r.onScreenContainerGeometry) : r && n(r.onScreenGeometry);
        },
        n = function (e) {
          return e && e.hasOwnProperty("x") && e.hasOwnProperty("y") && e.hasOwnProperty("width") && e.hasOwnProperty("height");
        };
      return {
        detect: e,
        checkAdViewGeometryBasedOnWhitelist: t,
        checkGeometryObject: n,
        checkForViewAttachmentBasedOnAdSessionType: function (e, n) {
          if (n && n.reasons && n.reasons.indexOf("notFound") < 0 && e.adSessionType && (e.adSessionType.indexOf("native") > -1 || e.adSessionType.indexOf("javascript") > -1 || e.adSessionType.indexOf("html") > -1 && t(e, n))) return !0;
        }
      };
    },
    pr = [{
      PARTNER_NAME: "IAB"
    }, {
      PARTNER_NAME: "IAS"
    }, {
      PARTNER_NAME: "com.integralads.omid.iassdk"
    }],
    Ir = function () {
      "use strict";

      return {
        listenForResult: function () {
          E.getAggregator().on(w.VIDEO_BLOCK_RESULT, function (t) {
            var n = E.getAggregator().request(P.AD_NODE),
              r = !1,
              i = "blockAd" + e.videoId;
            "failed" === t.action && (r = !0), n && f.isDef(n.blockAd) ? n.blockAd(r) : n && f.isDef(n[i]) && n[i](r);
          });
        }
      };
    };
  const mr = function () {
    "use strict";

    const t = [];
    return {
      registerEvent: (n, r) => {
        const i = function (t, n) {
          const r = E.getAggregator().request("videoTranslator").translate(t.messageType),
            i = (e => {
              const t = e.eventData || {},
                n = f({}).mixin(t);
              return n.ext_passthrough && delete n.ext_passthrough, n;
            })(t),
            o = (e => {
              let t;
              const n = e.eventData && e.eventData.ext_passthrough,
                r = (e, t) => {
                  const n = {};
                  return n[`x_${e}`] = t, n;
                };
              return n && (t = f(n).mapToObj(r)), t;
            })(t),
            a = {
              t: t.time - e.birthdate,
              tp: r,
              sl: n
            };
          f(a).mixin(i), f(a).mixin(o);
          const s = f({
            indicatesPlaying: () => -1 !== "showAd|adImpression|adVideoStart|resumeAd".indexOf(r),
            indicatesNotPlaying: () => -1 !== "adVideoComplete|adStopped|stopAd|pauseAd".indexOf(r),
            indicatesFullscreen: () => {
              const e = Ve.getWindow();
              return !("resizeAd" !== r && "initAd" !== r || "fullscreen" !== i.viewMode && i.width !== e.screen.width);
            },
            indicatesNormalSize: () => "resizeAd" === r && "normal" === i.viewMode,
            indicatesQuartile: () => -1 !== "adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(r),
            indicatesCompletion: () => -1 !== "adStopped|adVideoComplete|adSkipped|adError".indexOf(r),
            getVolume: e => e.getVolumeFromContext(i),
            updateScreenLoc: e => {
              a.sl = e, s.sl = e;
            },
            trigger: () => {
              "adImpression" === r ? E.getAggregator().persistentTrigger(r, i, o) : E.getAggregator().trigger(r, i, o);
            },
            toString: () => "{" + f(a).toParams() + "}"
          }).mixin(a);
          return s;
        }(n, r);
        return t.push(i), i;
      },
      toString: () => "{" + f({
        vEventCount: t.length,
        vEvents: "[" + t.join(",") + "]"
      }).toParams() + "}",
      isEmpty: () => 0 === t.length
    };
  };
  var Tr = function () {
      "use strict";

      var e,
        t,
        n,
        r = function (r) {
          n = f.isDef(r) ? 0 === r : n, t && n && e.addState({
            isFullyInView: function () {
              return !1;
            }
          });
        },
        i = function () {
          e && e.hasAlwaysBeen(!0) && E.getAggregator().trigger(w.SEND_DT, p.DT_CODES.QUARTILE_FULLY_INVIEW);
        },
        o = function () {
          t = !0, r();
        },
        a = function (e) {
          var t = new hr().getVolumeFromContext(e);
          r(t);
        };
      return {
        isApplicable: function (e) {
          return e.usesGroupMCustomMetric();
        },
        start: function (n) {
          E.getAggregator().on({
            adVideoStart: o,
            adImpression: o,
            volumeChanged: a,
            adVideoMidpoint: i
          }), e = n.createViewabilityTracker("mpt", function (e) {
            var n = E.getAggregator().request("isFullyInViewProvider");
            return !t || n && n.isFullyInView(e);
          });
        }
      };
    },
    Ar = function () {
      "use strict";

      var e = {
        AdPaused: "pauseAd",
        AdVolumeChange: "volumeChanged",
        AdPlaying: "resumeAd"
      };
      return {
        translate: function (t) {
          var n = t.charAt(0).toLowerCase() + t.slice(1);
          return t in e && (n = e[t]), n;
        }
      };
    };
  const hr = function () {
    "use strict";

    return {
      getVolumeFromContext: e => {
        let t,
          n = -1;
        return f.isDef(e) && (f.isDef(e.volume) ? n = e.volume : f.isDef(e.adVolume) && (n = e.adVolume)), -1 !== n && (t = n), t;
      }
    };
  };
  var _r = function (t, n, r) {
      "use strict";

      var i,
        o,
        a,
        s = "IASid" + t,
        c = "getIasVidBridgeVersion" + t,
        u = [],
        d = p.OUT_OF_VIEW,
        g = !1,
        l = !1,
        I = !1,
        m = !0,
        T = new mr(),
        A = Tr(),
        h = new Ir(),
        _ = new hr(),
        D = new we(),
        O = function (e) {
          var t;
          return g = !0, t = S(e), u.push(t), a && y(), t;
        },
        S = function (e) {
          var n,
            i,
            o = {};
          try {
            o = JSON.parse(unescape(e && e.data ? e.data : e));
          } catch (e) {
            o = {};
          }
          return o.id == t && ((n = T.registerEvent(o, r.getCurrentLoc())).indicatesPlaying() ? (l = !0, d = !!I && p.IN_VIEW) : n.indicatesNotPlaying() ? (l = !1, d = p.OUT_OF_VIEW) : n.indicatesFullscreen() ? (I = !0, d = l ? p.IN_VIEW : p.OUT_OF_VIEW) : n.indicatesNormalSize() && (I = !1, d = !l && p.OUT_OF_VIEW), (i = parseFloat(n.getVolume(_))) > 0 ? m = !0 : 0 === i && (m = !1)), n;
        },
        v = function () {
          i || (f(["*[data-integralas-vid-" + t + "]", ".integral-vid-" + t, "ias-ad", "object", "embed"]).findFirst(function (e, t) {
            var n = Ve.getDoc().querySelectorAll(t);
            return i = function (e) {
              return f(f(e).toArray()).findFirst(function (e, t) {
                return f.isFunction(t[s]);
              });
            }(n), i;
          }), !i && n.on("novidnodeerr") && Math.random() < .1 && __IntegralASDiagnosticCall("novidnode", {
            message: "node not found*10"
          }, e));
          return i;
        },
        R = function () {
          var n = v();
          return n && !g && function (n) {
            var r,
              i,
              o = be().wrapToGlobal(O);
            try {
              i = n[c] || n.getIasVidBridgeVersion, r = f.isFunction(i) && "2" === i.call(n) ? unescape(n[s].call(n, t, o)) : unescape(n[s].call(n, t)), g = !0, function (e) {
                f.isStr(e) && (E.getAggregator().provide("vc", function () {
                  return e;
                }), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
                  output: e
                }, V.VIDEO_CHANNEL, {
                  type: p.IMPRESSION_EVENT
                }));
              }(r || "n");
            } catch (t) {
              __IntegralASDiagnosticCall("handshakefailure", t, e);
            }
          }(n), n;
        },
        N = function (e) {
          var t = _.getVolumeFromContext(e);
          m = !!f.isDef(t) && t > 0;
        },
        y = function () {
          D.init(), f(u).each(function (e, t) {
            t && (f.isUndef(t.sl) && t.updateScreenLoc(r.getCurrentLoc()), t.trigger(), t.indicatesCompletion() && E.getAggregator().trigger(w.AD_SESSION_COMPLETE), t.indicatesQuartile() && (t.tp !== w.AD_VIDEO_COMPLETE && E.getAggregator().trigger(w.SEND_DT, p.DT_CODES.VIDEO_EVENTS), E.getAggregator().trigger(w.VIDEO_QUARTILE_EVENT, t)));
          }), u = [], a = !0;
        },
        C = function () {
          return I && l;
        };
      return Ie.addEvent(Ve.getWindow(), "message", function (e) {
        O(e);
      }), E.getAggregator().on({
        volumeChanged: N
      }), E.getAggregator().provide({
        videoEventsString: T,
        videoVersion: function () {
          var e,
            t = R();
          try {
            e = t.getVersion();
          } catch (t) {
            e = -1, E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.NO_VIDEO_AD_INTERFACE);
          }
          return e;
        },
        videoTranslator: function () {
          return o = o || new Ar();
        },
        adNode: R
      }), R(), h.listenForResult(), A.isApplicable(pe) && A.start(r), {
        findAdNode: R,
        getViewStateOverride: function () {
          return d;
        },
        isHandshakeComplete: function () {
          return g;
        },
        triggerInitializationEvents: y,
        setVideoSpecificScreenEventFields: function (e) {
          var t = e.viewState === p.NA;
          if (e.isVideoPlaying = !0, e.isSoundOn = m, e.isVideoPlayingInFullscreen = !1, d) {
            if (d === p.OUT_OF_VIEW) {
              var n = e.reason ? e.reason.split(".") : [];
              n[n.length] = p.OUT_OF_VIEW_REASONS.VIDEO, e.reason = n.join(".");
            }
            e.viewState = t ? e.viewState : d, e.isVideoPlaying = d === p.IN_VIEW;
          }
          C() && (e.percentInView = 100, e.isVideoPlayingInFullscreen = !0);
        }
      };
    },
    Dr = function () {
      "use strict";

      var e = p.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT;
      return new Nr(p.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE, e);
    },
    Or = function () {
      "use strict";

      var e,
        t,
        n = {},
        r = 0,
        i = function (n) {
          (n || e) && (r += 5, t.onTick(r, function () {
            e ? i() : E.getAggregator().trigger("sendDt", p.DT_CODES.PERFORMANCE);
          }), e = !1);
        },
        o = function () {
          t = new ee(), r = 0, i(!0), t.start();
        },
        a = function (r, i, a, s) {
          var c = n[r];
          s ? (f.isDef(c[i]) || (c[i] = []), c[i].push(a)) : c[i] = a, t && t.isActive() || o(), e = !0;
        },
        s = function (n, r, i) {
          E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: r
          }, n, i), t && t.isActive() || o(), e = !0;
        },
        c = function (t) {
          f(n).each(function (r, i) {
            !function (t, r) {
              var i = n[t],
                o = {
                  type: r,
                  oneTime: !0,
                  minDt: !0,
                  asION: !0
                };
              f(i).isEmpty() || (E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
                output: i
              }, t, o), n[t] = {}), e = !1;
            }(r, t);
          });
        };
      return {
        start: function () {
          E.getAggregator().on("preSendDt", function (e) {
            c(e), t && t.kill();
          }), E.getAggregator().on("addThrottledProp", a), E.getAggregator().on("addThrottledOutputItem", s);
        },
        addFieldTypes: function (e) {
          f(e).each(function (e, t) {
            n[t] = {};
          });
        }
      };
    },
    Sr = function () {
      "use strict";

      var t = {},
        n = function (n) {
          return !t[n] && (t[n] = new Z(1, e.birthdate)), t[n];
        },
        r = function (e) {
          n(e).start();
        },
        i = function (e) {
          var t = n(e);
          t.stop(), E.getAggregator().trigger("addThrottledProp", "im", e, t.getTime());
        };
      return {
        start: function () {
          E.getAggregator().on({
            markTime: r,
            measureTime: i
          });
        },
        isApplicable: function (e) {
          return e.on("pIntervals");
        }
      };
    },
    vr = function () {
      "use strict";

      var e = p.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT;
      return new Nr(p.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE, e);
    },
    Rr = function (e) {
      "use strict";

      var t = {},
        n = e instanceof Array && e.length > 0;
      return n && (f(e).each(function (e, n) {
        var r;
        t[(r = n).getType()] = r;
      }), E.getAggregator().on(w.PERF_CHECKPOINT, function (e) {
        var n = t[e.type];
        if (n) try {
          n.addPoint(e), n.isFinished() && E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.IM, "pci", n.toString());
        } catch (e) {}
      })), E.getAggregator().provide("perfActive", function () {
        return n;
      }), {
        isActive: n
      };
    },
    Nr = function (e, t) {
      "use strict";

      var n = 0,
        r = [],
        i = function () {
          var e,
            t = {};
          return r.sort(function (e, t) {
            return e.timestamp - t.timestamp;
          }), f(r).each(function (r, i) {
            e && (t[i.code] = i.timestamp - e), i.timestamp, r === n && (e = i.timestamp);
          }), t;
        };
      return {
        addPoint: function (e) {
          r.push(e);
        },
        toString: function () {
          return f(i()).toION();
        },
        getType: function () {
          return e;
        },
        setBaseOrdinal: function (e) {
          n = e;
        },
        isFinished: function () {
          return r.length === t;
        }
      };
    },
    yr = function () {
      "use strict";

      function e() {}
      return e.build = function () {
        var e,
          t = [];
        t.push((e = p.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT, new Nr(p.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE, e)));
        var n,
          r = (n = E.getAggregator().request("vc")) ? {
            jv3: Cr,
            av3: Cr,
            jvw: vr,
            avw: Dr
          }[n] : void 0;
        return r && t.push(r()), t;
      }, e;
    }(),
    Cr = function () {
      "use strict";

      var e = p.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT;
      return new Nr(p.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE, e);
    },
    Mr = {
      IDS: {
        BLOCK_TIME: "pBlk",
        ON_LOAD: "pLoad",
        IN_BROWSER_DELAY: "pWait"
      },
      recordBlockingTime: function () {
        "use strict";

        E.getAggregator().trigger(w.MEASURE_TIME, Mr.IDS.BLOCK_TIME);
      },
      setupOnLoadTracking: function () {
        "use strict";

        Ie.addEvent(t, "load", function () {
          E.getAggregator().trigger(w.MEASURE_TIME, Mr.IDS.ON_LOAD);
        });
      },
      setupBrowserDelayTracking: function () {
        "use strict";

        var e = new ee();
        e.onTick({
          4: function () {
            E.getAggregator().trigger(w.MARK_TIME, Mr.IDS.IN_BROWSER_DELAY);
          },
          5: function () {
            E.getAggregator().trigger(w.MEASURE_TIME, Mr.IDS.IN_BROWSER_DELAY);
          }
        }), e.start();
      }
    },
    wr = {
      isFrameworkAvailable: function (e, t) {
        var n,
          r,
          i = Ve.getTop(),
          o = Ve.getWindow();
        try {
          n = i[e];
        } catch (e) {
          for (; !r;) {
            try {
              o.frames[t] && (r = o.frames[t].parent);
            } catch (e) {}
            if (o === i) break;
            o = o.parent;
          }
        }
        return n || r;
      },
      getMessageHandler: function (e, t) {
        var n = wr.getCallId(),
          r = function (i) {
            try {
              i && i.data && i.data[e] && i.data[e].callId === n && i.data[e].returnValue && (t(i.data[e].returnValue), Ie.removeEvent(Ve.getWindow(), "message", r));
            } catch (e) {
              E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.GDPR);
            }
          };
        return r;
      },
      getCallId: function () {
        return "ias_" + e.asid;
      },
      send: function (e, t) {
        E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.ENVIRONMENT, e, t);
      }
    },
    br = {
      name: "CCPAConsentDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        var e;
        function t(e) {
          e && wr.send("ccd", f(e).toION());
        }
        e = wr.isFrameworkAvailable("__uspapi", "__uspapiLocator"), wr.send("cca", !!e), e && function (e) {
          var n, r;
          f.isFunction(e) ? e("getUSPData", 1, t) : (n = {
            __uspapiCall: {
              command: "getUSPData",
              version: 1,
              callId: wr.getCallId()
            }
          }, r = wr.getMessageHandler("__uspapiReturn", t), Ie.addEvent(Ve.getWindow(), "message", r), e.postMessage(n, "*"));
        }(e);
      },
      settings: {
        tier: p.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return t.hasPostMessage() && !n.isDomless();
        }
      }
    },
    Pr = {
      name: "GDPRConsentDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        var e,
          t = 278;
        function n(e) {
          var t = f.isDef(e) && f.isDef(e.vendorConsents) && f.isDef(e.vendorConsents[278]) ? e.vendorConsents[278] : void 0,
            n = {
              appl: f.stringifyTriState(e.gdprApplies),
              cnst: f.stringifyTriState(t),
              glbl: f.stringifyTriState(e.hasGlobalScope),
              mtdt: encodeURIComponent(e.metadata)
            },
            r = e && e.tcString;
          E.getAggregator().provide("tcString", function () {
            return r;
          }), wr.send("gcd", f(n).toION());
        }
        e = wr.isFrameworkAvailable("__cmp", "__cmpLocator"), wr.send("gca", !!e), e && function (e) {
          var r, i;
          f.isFunction(e) ? e("getVendorConsents", [t], n) : (r = {
            __cmpCall: {
              command: "getVendorConsents",
              parameter: [t],
              callId: wr.getCallId()
            }
          }, i = wr.getMessageHandler("__cmpReturn", n), Ie.addEvent(Ve.getWindow(), "message", i), e.postMessage(r, "*"));
        }(e);
      },
      settings: {
        tier: p.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return t.hasPostMessage() && !n.isDomless();
        }
      }
    },
    Vr = {
      name: "GDPRV2ConsentDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        var e;
        function t(e) {
          var t = f.isDef(e) && f.isDef(e.vendor) && f.isDef(e.vendor.consents) && f.isDef(e.vendor.consents[278]) ? e.vendor.consents[278] : void 0,
            n = {
              appl: f.stringifyTriState(e.gdprApplies),
              cnst: f.stringifyTriState(t)
            };
          wr.send("gcd2", f(n).toION());
        }
        e = wr.isFrameworkAvailable("__tcfapi", "__tcfapiLocator"), wr.send("gca2", !!e), e && function (e) {
          var n, r;
          f.isFunction(e) ? e("getTCData", 2, t) : (n = {
            __tcfapiCall: {
              command: "getTCData",
              parameter: [278],
              callId: wr.getCallId(),
              version: 2
            }
          }, r = wr.getMessageHandler("__tcfapiReturn", t), Ie.addEvent(Ve.getWindow(), "message", r), e.postMessage(n, "*"));
        }(e);
      },
      settings: {
        tier: p.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return t.hasPostMessage() && !n.isDomless();
        }
      }
    },
    Lr = {
      name: "postMessageDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        var t,
          n = !1,
          r = "pmdetector" + e.asid,
          i = function (e) {
            (e && e.data) === r && (n = !0);
          };
        t = Ve.getWindow(), Ie.addEvent(t, "message", i), t.postMessage(r, "*"), Ve.execAtEndOfThread(function () {
          E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.IM, "pom", f.stringifyTriState(n)), Ie.removeEvent(t, "message", i);
        });
      },
      settings: {
        tier: p.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return e.on("pmdetect") && t.hasPostMessage();
        }
      }
    },
    Fr = {
      name: "safeFrameDetector",
      dependencies: [],
      creator: function () {
        "use strict";

        E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.IM, V.SAFEFRAME, f.stringifyTriState(pe.isSafeFrame()));
      },
      settings: {
        tier: p.TIERS.ENVIRONMENT,
        applies: function (e, t, n) {
          "use strict";

          return e.on("sfdetect");
        }
      }
    },
    Ur = function (t, n, r, i, o, a, s) {
      "use strict";

      var c = "adsafe_jsinfo=",
        u = function (e, t) {
          return isNaN(e) || e < 0 || "" === e ? t : e;
        },
        d = function (e) {
          return "&" === e.slice(-1) ? "" : "&";
        },
        g = function (g) {
          var l = i.baseUrl,
            I = u(e.sp_imp_maxLength, 2e3);
          if (pe.integratedBlockingApplies(l) && (l = function (t) {
            var n = E.getAggregator().request("mobileApp"),
              r = n && n.isMobileAppEnvironment && n.isMobileAppEnvironment(),
              i = t + "adContainerId=" + e.contextNode.getAttribute("data-ias-container") + "&cbFunctionName=" + e.contextNode.getAttribute(p.CALLBACK_IDENTIFIER.toString());
            i = r ? i.replace("monitoring", "blocking") : i.replace("skeleton.js", e.integration + ".js");
            var o = e.protocol + ":" + e.staticServer + e.integration + "a.js",
              a = e.protocol + ":" + e.staticServer + e.integration + ".js";
            return i + "&true_pb=" + encodeURIComponent(e.passback) + (r ? "&redirectUrl=" + encodeURIComponent(a) : "") + (r ? "&passback=" : "&adsafe_pb=") + encodeURIComponent(o) + "&";
          }(l)), l = l.replace(p.UNIQUE_ID_TOKEN, e.asid), l += function (r, i, o) {
            var a,
              s = u(e.sp_imp_jsInfo_minLength, 0),
              d = "";
            try {
              (a = i - r - s) > 0 && (d += kr(o, a, c.length, n.on("partialUrls")).join("&"));
            } catch (e) {
              t.add(p.ERROR_CODES.IMPRESSION_URLS);
            }
            return d;
          }(l.length, I, g), l += d(l), l += function (e, i) {
            var u = "";
            try {
              u += Wr(i - e, c, t, n, r, o, a, s, i);
            } catch (e) {
              t.add(p.ERROR_CODES.JSINFO), u += "adsafe_jsinfo=e:" + t.toString();
            }
            return u;
          }(l.length, I), i.macroUrl && (l += d(l), l += i.macroUrl), e.staticFwjsMacros && (l += d(l), l += e.staticFwjsMacros), pe.isAMZN() && -1 === l.indexOf("gdpr_consent")) {
            var m = E.getAggregator().request("tcString");
            f.isDef(m) && (l += d(l), l += "gdpr_consent=" + m);
          }
          return l;
        };
      return {
        send: function (t) {
          try {
            var n = g(t);
            e.impUrl = n, i.sendImpression(n), E.getAggregator().trigger("impressionsent"), function () {
              if (e.rts && e.rts.tracked) {
                var t = e.rts.tracked;
                E.getAggregator().trigger("notify", t);
              }
            }();
          } catch (t) {
            __IntegralASDiagnosticCall("impsend", t, e);
          }
        }
      };
    },
    xr = function () {
      try {
        var n,
          r,
          i,
          o,
          a,
          s,
          c = e.perf;
        E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
          output: pe.getTagTime()
        }, V.STATIC_IMPRESSION_RFW_CALL_RESPONSE_TIME);
        c.markEnd("ec"), n = c.getEnd("ec"), r = t.performance && "function" == typeof t.performance.getEntriesByName && t.performance.getEntriesByName(e.impUrl)[0], i = function (t) {
          var n = c.getStart("bd"),
            r = c.getStart(S);
          return e.jsDoSplit ? Math.round(t - n) : Math.round(t - r);
        }(n), o = function (e) {
          return Math.round(e && e.duration);
        }(r), a = function (e, t) {
          var n = t && t.responseEnd;
          return Math.round(e - n);
        }(n, r), f.isNumeric(i) && f.isNumeric(o) && f.isNumeric(a) && (s = {
          ttecl: i,
          ecd: o,
          tsecr: a
        }, E.getAggregator().trigger("addThrottledProp", p.DT_SLOT.IM, "imprf", f(s).toION()));
      } catch (e) {
        E.getAggregator().trigger("error", p.ERROR_CODES.IMPRESSION_PERFORMANCE);
      }
    },
    Wr = function (t, n, r, i, o, a, s, c, u) {
      "use strict";

      var d, g, l, I, m;
      return function (r) {
        var i = f.encodeInvalidUrlChars(r.primary.join(","), e.encodeInvalidUrlChars),
          a = n,
          s = 0,
          c = function (e) {
            return a.length + e.length + 5 <= t;
          },
          u = function (e) {
            if (e) return "," + e;
          };
        return c(i) ? (a += u(i), o.impressionIsIdentifiable(!0), f(r.secondary).each(function (t, n) {
          var r = f.encodeInvalidUrlChars(n, e.encodeInvalidUrlChars);
          c(r) ? a += u(r) : s += 1;
        })) : s += r.primary.length, a += ",ov:" + s;
      }((I = {
        viewState: p.NA
      }, m = I, pe.isDomless() ? m = c.checkScreenLoc(!0) || I : i.on("impFailSafe") ? Ve.getDoc().body && (m = c.checkScreenLoc(!0) || I) : f.isDef(Ve.getDoc().body) && (m = c.checkScreenLoc(!0)), c.isImmediatelyMeasurable() || c.requiresDelayedViewabilityEvent(), d = Br((l = m).viewState, o, i), g = Gr(l, r, i, o, a, s, c, u), E.getAggregator().trigger("eligiblerender"), {
        primary: d,
        secondary: g
      }));
    },
    Br = function (t, n, r) {
      "use strict";

      var i = E.getAggregator().request("mPage");
      return ["id:" + e.asid, "c:" + n.getCacheBustId(), "sl:" + t, "em:" + pe.embedded, "fr:" + pe.friendly, "thd:" + f.stringifyTriState(i.supportsVisAPI())];
    },
    Gr = function (t, n, r, i, o, a, s, c) {
      "use strict";

      var u,
        d = "NotFound",
        g = [];
      g.push("mn:" + e.mn), g.push("rg:" + e.region), e.iasProxyPartnerDomain && g.push("ipp:" + encodeURIComponent(e.iasProxyPartnerDomain)), g.push("pt:" + function () {
        var e = s.stringifyPingTimes();
        return t.viewState !== p.NA && (e += t.details), e;
      }()), g.push("mu:" + c), g.push(f(a.params()).toParams()), r.on("mrcAudit") && !pe.isDomless() && g.push("dvs:" + Ve.getDoc().visibilityState), o.iterate(function (e, t) {
        var n = !t.props || f.isUndef(t.props.type),
          r = !t.props || t.props.type === p.IMPRESSION_EVENT;
        (n || r) && g.push(e + ":" + t.output());
      }), n.toString() && g.push("e:" + n.toString()), g.push(r.output()), g.push("tt:" + e.mode), g.push("et:" + (Ve.now() - e.birthdate)), e.perf.mark("si"), r.on("swapids") ? g.push("oid:" + e.oid) : g.push("uid:" + i.unq), g.push("v:19.8.439"), g.push("sp:" + (e.isSplitMode ? 1 : 0)), g.push("st:" + (e.staticMode ? 1 : 0)), g.push("fwm:" + ("true" === e.fwMonitoring ? 1 : 0)), r.on("resolution") && (g.push("wr:" + f(he.windowSize()).toArray().join(".")), g.push("sr:" + f(he.screenSize()).toArray().join(".")));
      var l = /iasProxyPartnerId=([\d]+)/g.exec(e.scriptUrl),
        E = l && l[1],
        I = e.proxyPartnerId || E || "";
      return I && g.push("ppi:" + I), u = function () {
        var t,
          n = "ias_xpc",
          r = String(e.scriptUrl).toLowerCase(),
          i = r.indexOf(n);
        if (i > -1) {
          var o = r.substring(i + n.length + 1),
            a = o.indexOf("&");
          t = a > -1 ? o.substring(0, a) : o;
        } else t = d;
        return t || "";
      }(), d !== u && g.push("x_xpc:" + u), g;
    },
    kr = function (e, t, n, r) {
      "use strict";

      var i,
        o,
        a = "adsafe_url=",
        s = "&adsafe_type=",
        c = [],
        u = function (e) {
          return -1 !== e.key.indexOf("q") || -1 !== e.key.indexOf("g");
        },
        d = function (e) {
          var i,
            o,
            u,
            d = e.val,
            g = e.key,
            f = (o = g, u = a.length + s.length + c.join("&").length + o.length + n, t - u);
          r && f < d.length && f > 0 && (d = d.substr(0, f)), (d.length || "" === e.val || "" === e.type) && function (e) {
            var n = c.join("&").length;
            return e.length + n <= t;
          }(i = a + d + s + g) && c.push(i);
        };
      return e && e.length && (i = f(e).map(function (e, t) {
        if (u(t)) return t;
      }), o = f(e).map(function (e, t) {
        if (!u(t)) return t;
      }), f(i.concat(o)).each(function (e, t) {
        d(t);
      })), c;
    },
    Hr = function () {
      "use strict";

      return {
        isApplicable: function (e) {
          var t = Ve.getWindow();
          return !(!t.navigator || !t.navigator.plugins);
        },
        start: function (e) {
          var t,
            n,
            r,
            i = Ve.getWindow(),
            o = Kr(i.navigator.plugins),
            a = o.hash();
          n = a.join("."), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: n
          }, V.PLUGIN_LIST, {
            type: p.IMPRESSION_EVENT
          }), a.length && (t = o.decode(a), r = t.join("."), E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, {
            output: r
          }, V.PLUGIN_DECODED, {
            type: p.DT_CODES.ADTALK
          }));
        }
      };
    },
    Yr = function (e, t) {
      "use strict";

      return {
        start: function () {
          try {
            var n = jr(),
              r = n.getMethodName(e),
              i = new ne(t.getEnabledScriptUrl(e));
            new Xr((o = Ve.getDoc()).body || o.head || o.documentElement, i).getWindow()[r] = n.getMethod(t);
          } catch (e) {
            E.getAggregator().trigger(w.ERROR, p.ERROR_CODES.FEATURE_SCRIPT);
          }
          var o;
        }
      };
    },
    jr = function () {
      "use strict";

      var t = function (t, n, r) {
        t === e.asid && (r.unshift(n), E.getAggregator().trigger.apply(null, r));
      };
      return {
        getMethod: function (n) {
          return function (r) {
            var i = {
              asid: e.asid,
              constant: p,
              features: n,
              context: pe,
              dtBaseURL: e.dtBaseURL,
              spg: zr
            };
            "function" == typeof r && r(t, i);
          };
        },
        getMethodName: function (e) {
          return "register_" + e;
        }
      };
    },
    qr = function () {
      "use strict";

      return {
        start: function (e, t) {
          f(e).each(function (e, n) {
            t.getEnabledScriptUrl(n) && Yr(n, t).start();
          });
        }
      };
    },
    Kr = function (e) {
      "use strict";

      var t = function (e) {
        return e.filename.replace(/\.plugin$/, "");
      };
      return {
        hash: function () {
          for (var n, r, i, o = 0, a = e.length, s = []; o < a; o++) r = t(e[o]), i = He.hashCode(r), n = f.toBase(i, 62).slice(-4), s.push(n);
          return s;
        },
        decode: function (n) {
          var r, i;
          return r = Ve.floor(Ve.random() * n.length), i = encodeURIComponent(t(e[r])), [n[r], i];
        }
      };
    },
    Xr = function (t, n) {
      "use strict";

      var r,
        i = function () {
          return "about:blank";
        };
      return function (n) {
        var o;
        (r = he.createHiddenIframe()).setAttribute("src", i()), r.setAttribute("class", "_ntnrjf7826-hj"), (t || e.contextNode.parentNode).appendChild(r), o = function (e) {
          return e.contentWindow.document;
        }(r);
        var a = ["<head></head>", '<body onload="', "var d = document;", "var s = d.createElement('script');", "d.getElementsByTagName('head')[0].", "appendChild(s).src", "='" + n + "'\">"].join("");
        o.open().write(a), o.close();
      }(n), {
        getWindow: function () {
          return r.contentWindow;
        }
      };
    },
    zr = function (t) {
      "use strict";

      var n = new j();
      n.listen(function (n) {
        return n && n.scaInfoOriginatorASID && n.scaInfoOriginatorASID !== e.asid && n.cache && t.allExpectedKeysPresent(n.cache);
      }, function (e, r) {
        n.stop(), Ve.setTimeout(function () {
          t.isDtCallAlreadySent() || (E.getAggregator().trigger(w.ADD_THROTTLED_PROP, p.DT_SLOT.FF, "spg", r.scaInfoOriginatorASID), f(r.cache).each(function (e, n) {
            t.addToCache(e, n);
          }));
        }, Ve.round(1e3 * Ve.random()));
      }), E.getAggregator().on("addToSpg", function (e, n) {
        t.addToCache(n, e), t.isFull() && (t.sendToOtherTags(), Ve.setTimeout(t.sendToOtherTags, 1300), Ve.setTimeout(t.sendToOtherTags, 3200));
      });
    },
    Jr = {
      name: "spg",
      dependencies: ["spgCache"],
      creator: zr,
      settings: {
        tier: p.TIERS.PRE_IMPRESSION_FRAUD,
        applies: function (e, t, n) {
          "use strict";

          return e.on("spg");
        }
      }
    },
    Qr = {
      name: "spgCache",
      dependencies: [],
      creator: function () {
        "use strict";

        var t = ["asp", "ch", "fsc", "mvn", "no", "sd"],
          n = {},
          r = !1,
          i = function () {
            return o(n);
          },
          o = function (e) {
            return f(e).keys().sort().toString() === t.toString();
          },
          a = function () {
            r || (r = !0, f(n).each(function (e, t) {
              E.getAggregator().trigger(w.ADD_OUTPUT_ITEM, t, e, {
                type: p.DT_CODES.SCA,
                minDt: !0,
                sendOnce: !0
              });
            }), E.getAggregator().trigger(w.SEND_MIN_DT, p.DT_CODES.SCA));
          };
        return {
          allExpectedKeysPresent: o,
          isDtCallAlreadySent: function () {
            return r;
          },
          addToCache: function (e, t) {
            t && t.output && !i() && (n[e] = t), i() && a();
          },
          isFull: i,
          sendToOtherTags: function () {
            new q().send({
              scaInfoOriginatorASID: e.asid,
              cache: n
            });
          }
        };
      },
      settings: {}
    },
    $r = function () {
      for (var e = [Pr, br, Vr, tt, et, ze, Je, qe, $e, Qe, Ke, Lr, Fr, ie, Tt, On, Qr, Jr], t = 0; t < e.length; t += 1) E(e[t].name, e[t].dependencies, e[t].creator, e[t].settings);
    };
  const Zr = new RegExp("^(ft|ftias)_?.*_(\\d+)$"),
    ei = "?iasend?",
    ti = ({
      aggregator: e,
      ftInstance: t,
      macros: n
    }) => {
      try {
        const r = (({
          ftInstance: e,
          macros: t
        }) => {
          const n = Object.keys(t),
            r = n.map(e => `${e}=${t[e]}`).join("&") + ei;
          let i = e.replaceMacros(r);
          const o = i.indexOf(ei);
          return o > 0 && (i = i.substring(0, o)), i.split("&").reduce((e, t) => {
            const r = t.split("="),
              i = r ? r[0] : void 0,
              o = r ? r[1] : void 0;
            return i && n.includes(i) && i && o && (e[i] = o), e;
          }, {});
        })({
          ftInstance: t,
          macros: n
        });
        for (const [t, n] of Object.entries(r)) {
          const r = "string" == typeof n ? n : "number" == typeof n ? n.toString() : n;
          e.trigger(w.ADD_OUTPUT_ITEM, {
            output: r
          }, t, {
            type: p.DT_CODES.ADSERVER_MACROS,
            standalone: !0
          });
        }
        Object.keys(r).length > 0 && e.trigger(w.SEND_DT, p.DT_CODES.ADSERVER_MACROS);
      } catch (e) {}
    },
    ni = ({
      checkInterval: e,
      collectorTimeout: t,
      aggregator: n,
      macros: r,
      contextNode: i,
      scopedWindow: o
    }) => {
      const a = Ve.setInterval(() => {
        const e = (({
          contextNode: e,
          scopedWindow: t
        }) => {
          var n;
          const r = null === (n = null == e ? void 0 : e.getAttribute(p.CALLBACK_IDENTIFIER.toString())) || void 0 === n ? void 0 : n.match(Zr);
          if (!r || r.length < 3) return;
          const i = r[2],
            o = t ? t[`ft${i}`] : null;
          return o && "function" == typeof o.replaceMacros ? o : void 0;
        })({
          contextNode: i,
          scopedWindow: o
        });
        e && (Ve.clearInterval(a), ti({
          aggregator: n,
          ftInstance: e,
          macros: r
        }));
      }, e);
      Ve.setTimeout(() => {
        Ve.clearInterval(a);
      }, t);
    };
  class ri {
    constructor({
      macros: e,
      collectorTimeout: t,
      checkInterval: n,
      aggregator: r,
      scopedWindow: i
    }) {
      this.macros = {}, this.collectorTimeout = 5e3, this.checkInterval = 500, this.aggregator = E.getAggregator(), this.collectorTimeout = null != t ? t : this.collectorTimeout, this.checkInterval = null != n ? n : this.checkInterval, this.aggregator = r || this.aggregator, this.scopedWindow = i || ("undefined" != typeof window ? window : void 0), this.macros = e || this.macros;
    }
    applies({
      contextNode: e,
      features: t
    }) {
      var n;
      const r = null != this.scopedWindow,
        i = null != t && 1 == t.on("ftPostRedirectMacros"),
        o = null != e && null != e.getAttribute(p.CALLBACK_IDENTIFIER.toString()) && Zr.test(null !== (n = null == e ? void 0 : e.getAttribute(p.CALLBACK_IDENTIFIER.toString())) && void 0 !== n ? n : "");
      return !!(r && i && o);
    }
    start({
      contextNode: e
    }) {
      this.aggregator.on(w.IMPRESSION_SENT, () => {
        ni({
          checkInterval: this.checkInterval,
          collectorTimeout: this.collectorTimeout,
          aggregator: this.aggregator,
          macros: this.macros,
          contextNode: e,
          scopedWindow: this.scopedWindow
        });
      });
    }
  }
  class ii {
    constructor({
      contextNode: e,
      features: t,
      bootstrapper: n,
      macroCollector: r
    }) {
      this.contextNode = e, this.features = t, this.macroCollectors = r || [new ri({
        macros: n.ftMacros
      })];
    }
    start() {
      for (const e of this.macroCollectors) e.applies({
        contextNode: this.contextNode,
        features: this.features
      }) && e.start({
        contextNode: this.contextNode
      });
    }
  }
  try {
    !function () {
      "use strict";

      var t, n, r, i, o, a, s;
      e.mainBirthdate = e.hasOwnProperty("birthdate") ? new Date().getTime() - e.birthdate : -1, e.perf.markStart(I), $r(), E.startSystem();
      var c = E.getAggregator();
      i = {}, o = {}, c.provide({
        [P.OMID_AD_SESSION_CONTEXT]: i
      }), c.provide({
        [P.OMID_AS_VERIFICATION_PARAMS]: o
      }), e.isResolved && c.provide(P.FEATURES, ve()), t = _e(), n = be(), r = new ge().createInstance(t, n), c.provide({
        [P.ERRORS]: t,
        [P.JSONP]: n,
        [P.COMMUNICATION]: r
      }), a = __IASOmidVerificationClient, c.provide({
        [P.OMID_VERIFICATION_CLIENT]: a
      }), s = [{
        environment: vt(a),
        adSessionReadyStrategy: yt(a)
      }, {
        environment: Ct(),
        adSessionReadyStrategy: wt()
      }], new Nt(s).resolve().adSessionReadyStrategy.start(), e.perf.markEnd(I);
    }();
  } catch (t) {
    __IntegralASDiagnosticCall("main", t, e);
  }
};
try {
  !function () {
    var e = __IntegralASConfig.useFIF ? __IASScope.parent : __IASScope;
    try {
      top.__IntegralASAdPush = function (t) {
        (t || top.isSingleIASInstance && top.iasAdSlots).forEach(function (t) {
          __IntegralASConfig._cl_adpath = t.adSelector, __IntegralASConfig.iasParameters = t.iasParameters, __IntegralASConfig.initialize(__IntegralASConfig, e, e.document);
        });
      }, top.isSingleIASInstance && top.iasAdSlots ? top.__IntegralASAdPush() : __IntegralASConfig.initialize(__IntegralASConfig, e, e.document);
    } catch (t) {
      __IntegralASConfig.initialize(__IntegralASConfig, e, e.document);
    }
  }();
} catch (e) {
  __IntegralASDiagnosticCall("initialize", e, __IntegralASConfig);
}
Storage.prototype.getItem = new Proxy(originalGetItem, {
  apply: function (target, thisArg, args) {
    const getItemHook = eventHooks.find(hook => hook.name === 'getItem');
    if (getItemHook) {
      let trackingContext = getTrackingContext();
      let trackingData = {
        eventName: 'getItem',
        args,
        context: trackingContext
      };
      sendTrackingToServer(trackingData);
    }
    return target.apply(thisArg, args);
  }
});