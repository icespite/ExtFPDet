var EGFrame={"aId":"EG18253742","domain":"bupaltd.egain.cloud,dev.np.bupa.co.uk,smoke2.np.bupa.co.uk,uat2.np.bupa.co.uk,bupa.co.uk,ussuhvemea0060.egain.co.uk,ussuhvemea0104.egdemo.info,eglb31.egdemo.info,ussuhvemea0104.egdemo.info,powerappsportals.com"};respondToIncomingMessage=function(j){var c;function q(i){var f=i.slice(1,i.length-1).split(",",6),i=f[0].slice(10,f[0].length-1),a=f[1].slice(9,f[1].length-1),b=f[2].slice(7,f[2].length-1),c=f[3].slice(7,f[3].length-1),e=f[4].slice(7,f[4].length-1),f=f[5].slice(11,f[5].length-1);return{action:i,scope:a,aId:b,uId:c,sId:e,message:f}}function o(i){var i=i.slice(1,i.length-1).split("},{"),a=[],g;for(g in i){var b=i[g].split(","),c=b[0].slice(7,b[0].length-1),b=b[1].slice(5);a.push({aId:c,ts:b})}return a} function p(i){for(var a="",b=0;b<i.length;b++)0<b&&(a+=","),a+='{"aId":"'+i[b].aId+'","ts":'+i[b].ts+"}";return a}function l(){var a=c.checkAndGet("TsArray",b),a=o(a);a.sort(function(a,b){return a.ts-b.ts});var f=a[0].aId;a.splice(0,1);0!==a.length&&(a=p(a),c.checkAndSet("TsArray",a,b,!1));return f}function r(a,f){var g=!1,e=c.checkAndGet("TsArray",b);if(e){var d=o(e),h;for(h in d)if(d[h].aId===a){d[h].ts=f;g=!0;break}g||(d[d.length]={aId:a,ts:f})}else d=[],d[0]={aId:a,ts:f};try{e=p(d),c.checkAndSet("TsArray", e,b,!0)}catch(j){if(22===j.code||1014===j.code)g=l(),k(g)}}function k(a){c.remove("EG-BUFFER-"+a,b);c.remove("EG-BUFFER-FLAG-"+a,b);c.remove("sId-"+a,b);c.remove("EG-U-ID-"+a,b);c.remove("EG-S-ID-"+a,b)}function m(b,f){var g="",d=c.checkAndGet("EG-S-ID-"+b,f);d&&(g=d.split("$$"),1<g.length?(d=g[1],72E5<(new Date).getTime()-d?(k(a.aId),g=""):g=g[0]):g="");return g}function n(b,f){var d=c.checkAndGet("EG-U-ID-"+a.aId,f);d||(d="");return d}if(function(){var a=EGFrame.domain;if(a)for(var a=a.split(","), b=0,c=a.length;b<c;b++)if(RegExp(a[b].replace(/^\s+|\s+$/g,"").replace("*",""),"i").test(j.origin))return!0;return!1}()&&(c=void 0,c={checkAndSet:function(a,b,c,d){try{c.setItem(a,b)}catch(e){if(d&&(22===e.code||1014===e.code))throw e;}},remove:function(a,b){try{b.removeItem(a)}catch(c){}},checkAndGet:function(a,b){var c;try{c=b.getItem(a)}catch(d){}return c},clearAll:function(a){try{a.clear()}catch(b){}}},j.data.substring&&"action"===j.data.substring(2,8))){var a=q(j.data);if(a.aId===EGFrame.aId){var d= !1;try{var b="user"===a.scope?localStorage:sessionStorage}catch(t){d=!0}if("isFlagOff"===a.action){if(!a.sId){var h=c.checkAndGet("sId-"+a.aId,b);h&&k(a.aId)}bufferFlag=c.checkAndGet("EG-BUFFER-FLAG-"+a.aId,b);d&&(bufferFlag="OFF");h=m(a.aId,b);d=n(a.aId,b);d='{"action":"FlagStatus","uId":"'+d+'","sId":"'+h+'","message":"'+bufferFlag+'"}';j.source.postMessage(d,j.origin)}else if("SET"===a.action){try{h=(new Date).getTime();if(!c.checkAndGet("EG-U-ID"+a.aId,b)||!c.checkAndGet("EG-S-ID"+a.aId,b))c.checkAndSet("EG-U-ID-"+ a.aId,a.uId,b,!0),c.checkAndSet("EG-S-ID-"+a.aId,a.sId+"$$"+h,b,!0);if("undefined"===typeof a.message||"undefined"===a.message.replace(/^\s+|\s+$/g,""))return;r(a.aId,h);var e=c.checkAndGet("EG-BUFFER-"+a.aId,b);if(e&&50<(e.match(/(\|\$\$\|)/g)||[]).length)var s=e.indexOf("|$$|")+4,e="&start=1"+e.substring(s,e.length);e=e?e+"|$$|"+a.message:"&start=1"+a.message;c.checkAndSet("EG-BUFFER-"+a.aId,e,b,!0)}catch(u){d=l(),k(d),e=(e=c.checkAndGet("EG-BUFFER-"+a.aId,b))?e+"|$$|"+a.message:"&start=1"+a.message, c.checkAndSet("EG-BUFFER-"+a.aId,e,b,!1)}h=c.checkAndGet("sId-"+a.aId,b);if(!h)try{c.checkAndSet("sId-"+a.aId,a.sId,b,!0)}catch(v){d=l(),k(d)}}else if("GET"===a.action){if(e=c.checkAndGet("EG-BUFFER-"+a.aId,b))h=m(a.aId,b),d=n(a.aId,b),j.source.postMessage('{"action":"bufferData","uId":"'+d+'","sId":"'+h+'","message":"'+e+'"}',j.origin),c.remove("EG-BUFFER-"+a.aId,b);c.checkAndSet("EG-BUFFER-FLAG-"+a.aId,"OFF",b,!1)}else"GET-UID-SID"===a.action?(h=m(a.aId,b),d=n(a.aId,b),j.source.postMessage('{"action":"uIdsId","uId":"'+ d+'","sId":"'+h+'","message":""}',j.origin)):"CLEAR-STORAGE"===a.action&&c.clearAll(b)}}};window.addEventListener?window.addEventListener("message",respondToIncomingMessage,!1):window.attachEvent("onmessage",respondToIncomingMessage);