
(function (ph){
try{
var A = self['' || 'AdriverCounter'],
	a = A(ph);
a.reply = {
ph:ph,
rnd:'764990',
bt:62,
sid:223825,
pz:0,
sz:'%2f',
bn:0,
sliceid:0,
netid:0,
ntype:0,
tns:0,
pass:'',
adid:0,
bid:2864425,
geoid:291,
cgihref:'//ad.adriver.ru/cgi-bin/click.cgi?sid=223825&ad=0&bid=2864425&bt=62&bn=0&pz=0&xpid=DByRJIZV8s5EgJHmdgifBQTkaNOHIKFigzt4foJ2fHu59KihVoOsg04DRFZyU3Nkk6cFPSPIbP6TlNAfEHw&ref=https:%2f%2fzvuk.com%2f&custom=',
target:'_blank',
width:'0',
height:'0',
alt:'AdRiver',
mirror:A.httplize('//mh8.adriver.ru'), 
comp0:'0/script.js',
custom:{},
cid:'AO7tRkAzpL2Qs5AdW8dCIQA',
uid:1243380030190,
xpid:'DByRJIZV8s5EgJHmdgifBQTkaNOHIKFigzt4foJ2fHu59KihVoOsg04DRFZyU3Nkk6cFPSPIbP6TlNAfEHw'
}
var r = a.reply;

r.comppath = r.mirror + '/images/0002864/0002864425/' + (/^0\//.test(r.comp0) ? '0/' : '');
r.comp0 = r.comp0.replace(/^0\//,'');
if (r.comp0 == "script.js" && r.adid){
	A.defaultMirror = r.mirror; 
	A.loadScript(r.comppath + r.comp0 + '?v' + ph) 
} else if ("function" === typeof (A.loadComplete)) {
   A.loadComplete(a.reply);
}
}catch(e){} 
}('1'));
