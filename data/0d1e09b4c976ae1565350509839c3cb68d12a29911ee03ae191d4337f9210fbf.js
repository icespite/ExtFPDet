/** Anti-fraud and anti-abuse applications only. See google.com/recaptcha */ try{var clients={'sodar':'https://pagead2.googlesyndication.com/pagead/sodar?'};window.addEventListener("message",function(a){try{if(a.source===window.parent){var b=JSON.parse(a.data);var c=clients[b['id']];if(c){var d=document.createElement('img');d.src=c+b['params']+'&rc='+(localStorage.getItem("rc::a")?sessionStorage.getItem("rc::b"):"");window.document.body.appendChild(d);sessionStorage.setItem("rc::e",parseInt(sessionStorage.getItem("rc::e")||0)+1);localStorage.setItem("rc::h",'1694142475960');}}}catch(b){}});window.parent.postMessage("_grecaptcha_ready", "*");}catch(b){}