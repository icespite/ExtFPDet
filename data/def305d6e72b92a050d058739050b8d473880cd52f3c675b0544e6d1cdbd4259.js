if(window.cpexCMPVersion="2.0 TCF 2.2",window.didomiEventListeners=window.didomiEventListeners||[],window.didomiOnReady=window.didomiOnReady||[],window.cpexAddCMPCloseButton=function(){const e=document.getElementById("didomi-notice")||document.getElementsByClassName("didomi-popup-notice-logo-container")[0];if(e){const t=document.createElement("div");t.textContent="×",t.style.cssText="z-index: 2147483641; position: absolute; top: 10px; right: 10px; width: 40px; height: 40px; cursor: pointer; font-size: 20pt; text-align: center; line-height: 40px;",t.addEventListener("click",function(){Didomi.notice.hide()}),e.appendChild(t)}},!window.didomiLoaded){function a(e){if(!window.frames[e])if(document.body&&document.body.firstChild){var t=document.body,n=document.createElement("iframe");n.style.display="none",n.name=e,n.title=e,t.insertBefore(n,t.firstChild)}else setTimeout(function(){a(e)},5)}function e(e,t,n,o,i){function d(e,n,o,d){if("function"==typeof o){window[t]||(window[t]=[]);var c=!1;i&&(c=i(e,n,o)),c||window[t].push({command:e,parameter:n,callback:o,version:d})}}function c(t){if(window[e]&&!0===window[e].stub&&t.data){var i,d="string"==typeof t.data;try{i=d?JSON.parse(t.data):t.data}catch(e){return}if(i[n]){var c=i[n];window[e](c.command,c.parameter,function(e,n){var i={};i[o]={returnValue:e,success:n,callId:c.callId},t.source.postMessage(d?JSON.stringify(i):i,"*")},c.version)}}}d.stub=!0,"function"!=typeof window[e]&&(window[e]=d,window.addEventListener?window.addEventListener("message",c,!1):window.attachEvent("onmessage",c))}window.gdprAppliesGlobally=!0,e("__tcfapi","__tcfapiBuffer","__tcfapiCall","__tcfapiReturn"),a("__tcfapiLocator"),function(e){var t=document.createElement("script");t.id="spcloader",t.type="text/javascript",t.async=!0,t.src="https://sdk.privacy-center.org/9a8e2159-3781-4da1-9590-fbf86806f86e/loader.js?target="+document.location.hostname;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}(),window.didomiLoaded=!0}!function(){function e(){window.location.href.indexOf("debug")>-1&&console.log.apply(this,arguments)}void 0===window.cpexCmpAllowCloseButton&&-1===window.location.href.indexOf("cpexCmpAllowCloseButton")||window.didomiOnReady.push(window.cpexAddCMPCloseButton);var t=document.getElementById("cpex-cmp-script")?document.getElementById("cpex-cmp-script").dataset.vendor:"any",n={any:["https://a.slunecnice.cz/slunecnice/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1","https://a.denik.cz/vlm/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1","https://a.1gr.cz/mafra/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1","https://a.centrum.cz/cent/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1","https://a.csfd.cz/csfd/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1","https://a.echo24.cz/echo/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1"]};function o(o,i){i&&o.vendor.consents&&Object.keys(o.vendor.consents).length>0&&(n[t].forEach(function(e){!function(e){const t=document.createElement("img");t.setAttribute("src",e),t.style.width="1px",t.style.height="1px",t.style.position="absolute",t.style.bottom="0px",t.style.right="0px",t.style.border="none",document.body.appendChild(t)}(e.replace("%CONSENT%",o.tcString))}),localStorage.setItem("pixelsLastFired",Date.now()),e("CMP: added consent pixels"))}function i(t){e("CMP: trying to fire consent pixels");var n=localStorage.getItem("pixelsLastFired")||0;Date.now()-864e5>n||t?__tcfapi("addEventListener",2,o):e("CMP: 24 hours have not yet passed, based on pixelsLastFired in local storage")}window.didomiEventListeners.push({event:"consent.changed",listener:function(e){i(!0)}}),"complete"===document.readyState?i():window.addEventListener("load",function(){i()})}();
//# sourceMappingURL=cpex-cmp.min.js.map