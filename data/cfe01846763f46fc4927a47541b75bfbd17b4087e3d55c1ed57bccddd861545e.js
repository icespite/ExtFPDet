
<!--
document.cookie='9e67d=bm9yZWZ8fHwxfDB8MHxub25lfDA6; expires=Mon, 21 Aug 2023 05:52:38 GMT; path=/;';
document.cookie='9e67db=1692510758; expires=Mon, 19 Aug 2024 05:52:38 GMT; path=/;';
//-->
;


function __resolver_set(key, val) {
var d = new Date();
document.cookie = key + "=" + encodeURIComponent(val) + ";expires=" + d.setTime(d.getTime() + 86400 * 1000) + "; path=/";
}
;

document.addEventListener("DOMContentLoaded",function(){function appendUrlParam(url,k,v){var sep='?'
if(url.indexOf('?')>=0){sep='&'}
url+=sep+k+'='+encodeURIComponent(v)
return url}
function main(){$(".search form").on("submit",function(){var q=$(this).find("input[type=text]").val();q=encodeURIComponent(q).replace(/%20/g,"+");document.location=tr_searchUrlPattern.replace("{query}",q);return!1});$('body').on('mousedown','.thumb',function(event){if(!tr_trackOnClick){return}
if(event.button==2){}
var $thumb=$(this)
var slug=$thumb.find('img').attr('data-slug')
if(!slug){var regexp=new RegExp(tr_videoUrlTplRegExp)
var $a=$thumb.find('a')
var match=$a.attr('href').match(regexp)
if(match){slug=match[1]}else{return console.error("Couldn't find slug")}}
var url=tr_trkTpl.replace('{slug}',slug)
var prevUrl=$thumb.find('a').attr('href')
$thumb.find('a').attr('href',url)
$('body').one('mouseup mousemove',function(){setTimeout(function(){$thumb.find('a').attr('href',prevUrl)},1000)})})
var preventExit=!0
var preventTimeout
$(document).on('mousedown keydown',function(){preventExit=!1
try{clearTimeout(preventTimeout)}catch(ex){}
preventTimeout=setTimeout(function(){preventExit=!0},1000)})
if(typeof allowPreventExit!=='undefined'&&allowPreventExit){$(window).on('beforeunload',function(){if(preventExit){return'out from '+document.location.host+'?'}})}}
function checkJqAndRun(){if(typeof $==="undefined"){setTimeout(checkJqAndRun,200)}else{main()}}
checkJqAndRun()},!1);

$(function(){});

tr_searchUrlPattern="\/scan\/{query}\/top\/";
tr_trackOnClick=true;
tr_trkTpl="\/newclips\/{slug}";
tr_videoUrlTplRegExp="\/clip\/([a-z0-9-]+)";;

allowPreventExit=true;;

allowRotationDots=false;;

(function(){var js = "window['__CF$cv$params']={r:'7f985f10bcf9e3bf',t:'MTY5MjUxMDc1OS4wNjkwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/invisible.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();