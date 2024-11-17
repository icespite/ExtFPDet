
        window.CONFIG_CSM_DOMAIN_NAME = "csm.jp2.as.criteo.net";
        window.CONFIG_CSM_RATIO = 100;
        window.DNA_DOMAIN = "https://dnacdn.net/dna";
        window.DNSID_ENABLED = true;
        window.DNSID_DOMAIN_LIST = ["ag.gbc.criteo.com","gem.gbc.criteo.com"];
        window.GUM_DOMAIN = "gum.criteo.com";
    ;


        !function(){"use strict";var i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function t(t,n){function e(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var n=function(){return(n=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function e(r,s,a,u){return new(a=a||Promise)(function(t,n){function e(t){try{o(u.next(t))}catch(t){n(t)}}function i(t){try{o(u.throw(t))}catch(t){n(t)}}function o(n){n.done?t(n.value):new a(function(t){t(n.value)}).then(e,i)}o((u=u.apply(r,s||[])).next())})}function u(e,i){var o,r,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function n(n){return function(t){return function(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,r&&(s=2&n[0]?r.return:n[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,r=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=i.call(e,a)}catch(t){n=[6,t],r=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,t])}}}function l(t,n){if(!function(t){try{return void 0!==t.cookie}catch(t){return!1}}(t))return null;for(var e=t.cookie.split(";"),i=0;i<e.length;i++){var o=e[i],r=o.substr(0,o.indexOf("=")).replace(/^\s+|\s+$/g,""),s=o.substr(o.indexOf("=")+1);if(r===n&&s)return decodeURIComponent(s)}return null}var o=(r.prototype.logCounter=function(t){var n="entry=c~"+(this.METRIC_PREFIX?this.METRIC_PREFIX+".":"")+(t||"")+"~1";this._eventsQueue.push(n)},r.prototype.logHistogram=function(t,n){var e="entry=h~"+(this.METRIC_PREFIX?this.METRIC_PREFIX+".":"")+(t||"")+"~"+n;this._eventsQueue.push(e)},r.prototype.logError=function(t,n,e){void 0===e&&(e=null);var i=n&&n.message||n,o="string"==typeof e?[e]:e,r=[this.METRIC_PREFIX,t].concat(o).reduce(function(t,n){return t.concat(n&&n.split(".")||[])},[]).filter(function(t){return null!=t&&null!=t&&""!=t}).map(function(t){return"&tag="+encodeURIComponent(t)}).join(""),s="https://"+this.CSM_BASE_DOMAIN+"/iex?gPath="+(this.METRIC_PREFIX?this.METRIC_PREFIX+".":"")+encodeURIComponent(t)+"&msg="+encodeURIComponent(i)+r;this.logPixel(s)},r.prototype.sendMetrics=function(){this.flushEventQueue()},r.prototype.flushEventQueue=function(){if(0<this._eventsQueue.length){var t="https://"+this.CSM_BASE_DOMAIN+"/iev?"+this._eventsQueue.join("&");this.logPixel(t),this._eventsQueue=[]}},r.prototype.logPixel=function(t){if(!this.CSM_BASE_DOMAIN)return console.log("Pixel",t);var n=Math.floor(100*Math.random());this.SAMPLING_RATIO<=n||("function"==typeof navigator.sendBeacon?navigator.sendBeacon(t):(new Image).src=t)},r);function r(t,n,e){var i=this;void 0===n&&(n=""),void 0===e&&(e=100),this._eventsQueue=[],this.CSM_BASE_DOMAIN=t,this.SAMPLING_RATIO=e||100,this.METRIC_PREFIX=n||"",window.addEventListener("pagehide",function(){return i.flushEventQueue()})}var s=(a.prototype.sendSidJson=function(t){var n=this,e=a.buildUrl(this._sidUrlBase,t),i=Date.now();return fetch(e,{credentials:"include"}).then(function(t){return t.json()}).then(function(t){return n.csmClient.logCounter("SidReadSuccess"),n.csmClient.logHistogram("SidReadSuccessDuration",Date.now()-i),t}).catch(function(t){return n.csmClient.logCounter("SidReadFailure"),n.csmClient.logHistogram("SidReadFailureDuration",Date.now()-i),n.csmClient.logError("SidReadError",t),{}})},a.buildUrl=function(t,n){var e,i,o,r,s=window.location.ancestorOrigins&&window.location.ancestorOrigins[0]?window.location.ancestorOrigins[0]:null,a=s?new URL(s):null,u=a?a.hostname:"",l=n.fragmentData,d=n.topUrl||l.topUrl,c=n.privateModeStatus||l.pm,h=l.syncframeOverrideVersion||n.syncframeVersion,p=null!==(i=null===(e=n.delegationCookies)||void 0===e?void 0:e.bundle)&&void 0!==i?i:l.bundle,f=null!==(r=null===(o=n.delegationCookies)||void 0===o?void 0:o.optout)&&void 0!==r?r:l.optout;return t+"?origin="+l.origin+(h?"&v="+h:"")+"&domain="+encodeURIComponent(l.tld?l.tld:u)+"&sn="+n.syncframeName+"&so="+p.origin+(d?"&topUrl="+encodeURIComponent(d):"")+(l.sid.hasValue()?"&sid="+encodeURIComponent(l.sid.value):"")+(l.uid.hasValue()?"&idcpy="+encodeURIComponent(l.uid.value):"")+(l.lwid.hasValue()?"&lwid="+encodeURIComponent(l.lwid.value):"")+(p.hasValue()?"&bundle="+encodeURIComponent(p.value):"")+(n.dnaBundle?"&info="+encodeURIComponent(n.dnaBundle):"")+(n.dnsIdChunks&&n.dnsIdChunks.length?"&idsd="+n.dnsIdChunks.toString():"")+(c?"&pm="+c:"")+(l.cookiesWriteable?"&cw=1":"")+(f.hasValue()&&f.value?"&optout=1":"")+(l.rtusCallerId?"&rtusCallerId="+l.rtusCallerId:"")+(l.localStorageWritable?"&lsw=1":"")+(n.interestBasedAdvertising?"&topicsavail="+(n.interestBasedAdvertising.topicsApiAvailable?"1":"0"):"")+(n.interestBasedAdvertising?"&fledgeavail="+(n.interestBasedAdvertising.fledgeApiAvailable?"1":"0"):"")+(n.interestBasedAdvertising?n.interestBasedAdvertising.rawTopics.map(function(t){return"&topic="+encodeURIComponent(t)}).join(""):"")+(window.DEBUG?"&debug=1":"")},a);function a(t,n){this.csmClient=n,this._sidUrlBase="https://"+t+"/sid/json"}var d=(c.prototype.start=function(){return e(this,void 0,void 0,function(){var n,e;return u(this,function(t){switch(t.label){case 0:return[4,this.performCall()];case 1:return(n=t.sent()).info?[2,n]:[4,this.performCall()];case 2:return(e=t.sent()).info?this.csmClient.logCounter("StorageWriting.Dna.Success"):this.csmClient.logCounter("StorageWriting.Dna.Failure"),[2,e]}})})},c.prototype.performCall=function(){return e(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return[4,fetch(this.dnaDomain,{credentials:"include"}).then(function(t){return t.json()}).catch(function(t){return{info:null}})];case 1:return[2,t.sent()]}})})},c);function c(t,n){this.dnaDomain=t,this.csmClient=n}var f,h,g,p,v=(C.prototype.readAll=function(){return e(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return this.dnsIdEnabled?[4,Promise.all(this.dnsIdDomainList.map(this.read))]:[2,[]];case 1:return[2,t.sent().map(function(t){return t.idsd})]}})})},C.prototype.read=function(n){return e(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return[4,fetch("https://"+n+"/newidsd").then(function(t){return t.json()}).catch(function(t){return{idsd:-2}})];case 1:return[2,t.sent()]}})})},C);function C(t,n){this.dnsIdEnabled=t,this.dnsIdDomainList=n}(h=f=f||{})[h.None=0]="None",h[h.Cookie=1]="Cookie",h[h.LocalStorage=2]="LocalStorage",h[h.Delegation=4]="Delegation",(p=g=g||{})[p.Unknown=0]="Unknown",p[p.Deactivated=1]="Deactivated",p[p.Activated=2]="Activated";var m=(w.fromUserIdentificationData=function(t){return new w(t.value,t.origin)},w.fromValue=function(t){return new w(t,f.None)},w.prototype.hasValue=function(){return""!==String(this.value)&&null!==this.value&&void 0!==this.value},w);function w(t,n){this.value=t,this.origin=n}var I;t(y,I=m),y.prototype.hasValue=function(){return""!==String(this.value)&&null!==this.value&&void 0!==this.value},y.prototype.saveOnAllStorages=function(){if(this.hasValue()){var t="boolean"==typeof this.value?this.value?"1":"0":String(this.value);this.storageAdapter.writeToAllStorages(this.storageKey,t,this.expirationTimeHours)}},y.prototype.toJSON=function(){return{value:this.value,origin:this.origin}};function y(t,n,e,i,o){var r=I.call(this,e,i)||this;return r.storageKey=t,r.expirationTimeHours=n,r.storageAdapter=o,r}var D=(b.prototype.isEmpty=function(){return!(this.bundle||this.optout)},b);function b(t,n){this.bundle=t?new m(t,f.Delegation):void 0,this.optout=n?new m("1"===n,f.Delegation):void 0}var S=(_.prototype.read=function(){return e(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return this.hasToReadOnDelegatedSubdomain()?[4,fetch(this.delegationUrl,{credentials:"include"}).then(function(t){return t.json()}).then(function(t){return new D(t.cto_bundle,t.cto_optout)}).catch(function(t){return null})]:[3,2];case 1:return[2,t.sent()];case 2:return[2,new D]}})})},_.prototype.hasToReadOnDelegatedSubdomain=function(){return this.readCookiesOnDelegatedSubdomain&&this.delegationUrl},_);function _(t,n){this.delegationUrl=t,this.readCookiesOnDelegatedSubdomain=n}var O=(A.Create=function(t){var n,e,i,o,r,s,a,u,l,d,c={uid:{value:null,origin:f.None},lwid:{value:null,origin:f.None},bundle:{value:null,origin:f.None},optout:{value:null,origin:f.None},sid:{value:null,origin:f.None},tld:"",topUrl:"",version:"NA",cw:!1,lsw:!1,origin:"NA",pm:g.Unknown,rtusCallerId:void 0,osv:void 0,requestId:"ignored"};try{var h=location.hash.substring(1);"{%22"===h.substr(0,4)&&(h=decodeURIComponent(h)),d=JSON.parse(h)}catch(t){d=c}function p(t){var n,e=null!==(n=d[t])&&void 0!==n?n:c[t];return"object"==typeof e?m.fromUserIdentificationData(e):m.fromValue(e)}return new A(p("sid"),p("lwid"),p("uid"),p("optout"),p("bundle"),null!==(n=d.osv)&&void 0!==n?n:c.osv,null!==(e=d.tld)&&void 0!==e?e:c.tld,null!==(i=d.origin)&&void 0!==i?i:c.origin,String(null!==(o=d.version)&&void 0!==o?o:c.version),decodeURIComponent(null!==(r=d.topUrl)&&void 0!==r?r:c.topUrl),null!==(s=d.pm)&&void 0!==s?s:c.pm,null!==(a=d.cw)&&void 0!==a?a:c.cw,t,null!==(u=d.rtusCallerId)&&void 0!==u?u:c.rtusCallerId,null!==(l=d.lsw)&&void 0!==l?l:c.lsw,d.requestId)},A.prototype.emitCsmMetrics=function(){this.sid.hasValue()&&this.csmClient.logCounter("FragmentData."+this.origin+".Sid.Origin."+this.sid.origin),this.lwid.hasValue()&&this.csmClient.logCounter("FragmentData."+this.origin+".Lwid.Origin."+this.lwid.origin),this.uid.hasValue()&&this.csmClient.logCounter("FragmentData."+this.origin+".IdCpy.Origin."+this.uid.origin),this.optout.value&&this.csmClient.logCounter("FragmentData."+this.origin+".Optout.Origin."+this.optout.origin),this.bundle.hasValue()&&this.csmClient.logCounter("FragmentData."+this.origin+".Bundle.Origin."+this.bundle.origin),this.pm&&this.csmClient.logCounter("FragmentData."+this.origin+".PrivateMode.Origin."+this.pm)},A);function A(t,n,e,i,o,r,s,a,u,l,d,c,h,p,f,g){this.sid=t,this.lwid=n,this.uid=e,this.optout=i,this.bundle=o,this.syncframeOverrideVersion=r,this.tld=s,this.origin=a,this.version=u,this.topUrl=l,this.pm=d,this.cookiesWriteable=c,this.csmClient=h,this.rtusCallerId=p,this.localStorageWritable=f,this.requestId=g}var R,E=(M.prototype.getFragmentData=function(){return null==this.fragmentData&&(this.fragmentData=O.Create(this.getCsmClient())),this.fragmentData},M.prototype.getCsmClient=function(){return null==this.csmClient&&(this.csmClient=new o(this.window.CONFIG_CSM_DOMAIN_NAME,"Gum."+this.syncframeName,window.CONFIG_CSM_RATIO)),this.csmClient},M.prototype.getSidClient=function(t){return null==this.sidClient&&(this.sidClient=new s(t||this.window.GUM_DOMAIN,this.getCsmClient())),this.sidClient},M.prototype.getDnaClient=function(){return null==this.dnaClient&&(this.dnaClient=new d(window.DNA_DOMAIN,this.getCsmClient())),this.dnaClient},M.prototype.getDnsIdClient=function(){return null==this.dnsIdClient&&(this.dnsIdClient=new v(this.window.DNSID_ENABLED,window.DNSID_DOMAIN_LIST)),this.dnsIdClient},M.prototype.getDelegationClient=function(){return null==this.delegationClient&&(this.delegationClient=new S(this.window.DELEGATION_URI,this.window.READ_FROM_SUBDOMAIN_DELEGATION||!1)),this.delegationClient},M.prototype.postMessageToCaller=function(t){!function(t,n){n.parent.postMessage(t,"*")}(n(n({},t),{requestId:this.getFragmentData().requestId}),window)},M);function M(t,n){this.syncframeName=t,this.window=n}function U(){return R.call(this,"FirefoxSyncframe",window)||this}(new(t(U,R=E),U.prototype.Start=function(){return e(this,void 0,void 0,function(){var n,e,i,o,r,s,a;return u(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),n=function(){var t=l(document,"optout");return{uid:l(document,"uid"),optout:"1"===t||null}}(),e=this.getFragmentData(),this.logCookieMetrics(n),e.emitCsmMetrics(),[4,Promise.all([this.getDnaClient().start(),this.getDnsIdClient().readAll()])];case 1:return i=t.sent(),o=i[0],r=i[1],[4,this.getSidClient().sendSidJson({fragmentData:e,syncframeName:this.syncframeName,dnaBundle:o.info,dnsIdChunks:r})];case 2:return s=t.sent(),this.postMessageToCaller({isCriteoMessage:!0,optout:n.optout||s.optout,bundle:s.bundle}),[3,4];case 3:return a=t.sent(),this.getCsmClient().logError("GlobalError",a),[3,4];case 4:return[2]}})})},U.prototype.logCookieMetrics=function(t){for(var n=0,e=Object.keys(t);n<e.length;n++){var i=e[n];t[i]&&this.getCsmClient().logCounter("CookieRead."+i)}},U)).Start()}();

    