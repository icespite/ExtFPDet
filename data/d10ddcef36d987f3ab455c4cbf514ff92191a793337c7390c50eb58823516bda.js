function klappe(id)
{
var klappText = document.getElementById('k' + id);
var klappBild = document.getElementById('pic' + id);

if (klappText.style.display == 'none') {
 klappText.style.display = 'block'; 
}
else {
 klappText.style.display = 'none'; 
}
}

function klappe_news(id)
{
var klappText = document.getElementById('k' + id);
var klappBild = document.getElementById('pic' + id);

if (klappText.style.display == 'none') {
 klappText.style.display = 'block';
 klappBild.src = dimagedir + 'minus.gif';
}
else {
 klappText.style.display = 'none';
 klappBild.src = dimagedir + 'plus.gif';
}
}
