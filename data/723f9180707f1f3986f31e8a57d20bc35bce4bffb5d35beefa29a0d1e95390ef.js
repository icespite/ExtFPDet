var JCaption=function(t){var e,n,i,o=function(t){var i=e(t),o=i.attr("title"),s=i.attr("width")||t.width,a=i.attr("align")||i.css("float")||t.style.styleFloat||"none",r=e("<p/>",{text:o,class:n.replace(".","_")}),l=e("<div/>",{class:n.replace(".","_")+" "+a,css:{float:a,width:s}});i.before(l),l.append(i),""!==o&&l.append(r)};i=t,(e=jQuery.noConflict())(n=i).each(function(t,e){o(e)})};