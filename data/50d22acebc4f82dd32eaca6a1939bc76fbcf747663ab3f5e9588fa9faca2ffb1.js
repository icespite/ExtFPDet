(function(){var h=function(){function c(a){this._prefix="adthrive_";this._storageType=a;"local"===a?this._storage=window.localStorage:"session"===a&&(this._storage=window.sessionStorage);}c.prototype._getExpiryDate=function(a){var b=new Date;b.setTime(b.getTime()+864E5*a);return b.toUTCString()};c.prototype.read=function(a){a=this._prefix+a;return "cookie"===this._storageType?this._readCookie(a):this._readFromStorage(a)};c.prototype.delete=function(a){var b;a=this._prefix+a;"cookie"===
this._storageType?document.cookie="".concat(a,"=; SameSite=None; Secure; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"):null===(b=this._storage)||void 0===b?void 0:b.removeItem(a);};c.prototype.set=function(a,b,d,e){void 0===d&&(d=400);void 0===e&&(e=!1);a=this._prefix+a;"cookie"===this._storageType?this._setCookie(a,b,d):this._setInStorage(a,b,d,e);};c.prototype._readCookie=function(a){var b=document.cookie.split("; ").find(function(d){return d.startsWith(a)});if(!b)return null;b=b.split("=").slice(1).join("=");
try{return JSON.parse(decodeURIComponent(b))}catch(d){return b||null}};c.prototype._readFromStorage=function(a){var b,d=null===(b=this._storage)||void 0===b?void 0:b.getItem(a);if(!d)return null;try{var e=JSON.parse(d);if((new Date).getTime()>e.expiry)return this.delete(a),null;e.resetOnRead&&this._resetExpiry(e,a);return e.value}catch(g){return d}};c.prototype._resetExpiry=function(a,b){var d;a.expiry=(new Date).getTime()+864E5*a.expiryDays;null===(d=this._storage)||void 0===d?void 0:d.setItem(b,
JSON.stringify(a));};c.prototype._setCookie=function(a,b,d){document.cookie="".concat(a,"=").concat(JSON.stringify(b),"; SameSite=None; Secure; expires=").concat(this._getExpiryDate(d),"; path=/");};c.prototype._setInStorage=function(a,b,d,e){var g;b={value:b,expiry:d?(new Date).getTime()+864E5*d:null,expiryDays:d,resetOnRead:e};null===(g=this._storage)||void 0===g?void 0:g.setItem(a,JSON.stringify(b));};return c}(),f;(function(c){c.GetPiiData="adthrive_GetPiiData";c.SetPiiData="adthrive_SetPiiData";
c.DeletePiiData="adthrive_DeletePiiData";c.SendPiiData="adthrive_SendPiiData";})(f||(f={}));var k=new h("cookie"),l=new h("local");h=function(c){var a=document.referrer.split("/");(""===a[0]?"":"".concat(a[0],"//").concat(a[2]))===c.origin&&(a=c.data.action,a===f.GetPiiData?(a=l.read("PiiData")||k.read("PiiData")||null,window.parent.postMessage({action:f.SendPiiData,piiData:a},c.origin)):a===f.SetPiiData?(l.set("PiiData",c.data.piiData),k.set("PiiData",c.data.piiData)):a===f.DeletePiiData&&(l.delete("PiiData"),
k.delete("PiiData")));};try{window.addEventListener("message",h);}catch(c){console.warn(c);}})();