"use strict";(function(){var b="cnx_roi",p="cnxclid",i="cnxv2",a="~",j=3,l="https://www.bizrate.com/roi/index.xpml";function d(u,q,t,r){var s=new Date();s.setTime(s.getTime()+r*24*60*60*1000);u.cookie=q+"="+t+";expires="+s.toUTCString()+";domain="+o(window.location.hostname)+";path=/;"+(window.location.protocol==="https:"?"SameSite=None;Secure":"")}function o(s){var r=s;var q=!!r.match(/(\.co\.uk|\.co\.nz|\.co\.it|\.co\.at|\.org\.uk)$/i);if(r.indexOf(".")!==-1){r=r.split(".");if(q){r=r[r.length-3]+"."+r[r.length-2]+"."+r[r.length-1]}else{r=r[r.length-2]+"."+r[r.length-1]}}return r}function k(r,q){d(r,b,q,30)}function f(r){var q=r.cookie.match("(^|;) ?"+b+"=([^;]*)(;|$)");return q?q[2]:null}function h(s){var r=s.reduce(function(v,u){if(u[0]==="config"){v[u[0]]=u[1]}if(u[0]==="event"){var t={};if(!v[u[0]]){t[u[1]]=u.length>2?u[2]:{};v[u[0]]=t}else{t=v[u[0]];t[u[1]]=u.length>2?u[2]:{};v[u[0]]=t}}return v},{});if(!r.event&&(!r.config||!r.config.disableAutoTag)){var q={};q.pageview={};r.event=q}return r}function c(r,q){return r.location.href.indexOf(q+"=")>0}function n(v,u){var r=v.location.search.substring(1),s=r.split("&"),t,q;for(q=0;q<s.length;q++){t=s[q].split("=");if(t[0]===u){return decodeURIComponent(t[1])}}return false}function m(v,u,t){var s,q=f(v);if(t.event.pageview&&t.event.pageview.cnxclid){s=t.event.pageview.cnxclid}else{if(c(u,p)){s=n(u,p)}}if(s){var r=q?q.split(a):[];r.unshift(s);q=r.slice(0,j).join(a);k(v,q)}return q}function g(q){return q!=null?q:""}function e(){if(!window.cnxDataLayer){window.cnxDataLayer=[]}var w=document,r=window,x=r.cnxDataLayer,t=h(x),u=m(w,r,t);if(t.event.conversion){var z=t.event.conversion.mid,B=t.event.conversion.cust_type,v=t.event.conversion.order_value,s=t.event.conversion.order_id,y=t.event.conversion.units_ordered,q,A;q=l+"?cnxclid="+encodeURIComponent(btoa(g(u)))+"&cust_type="+g(B)+"&mid="+z+"&order_id="+g(s)+"&order_value="+g(v)+"&units_ordered="+g(y)+"&v="+i;A=new Image(1,1);A.src=q}}if(document.readyState==="complete"){e()}else{window.addEventListener("load",e())}})();