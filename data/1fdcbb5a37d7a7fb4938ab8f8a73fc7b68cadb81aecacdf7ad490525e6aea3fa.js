
    var l = "",
    m = this,
    Fb = document,
    K = window,
    eM = K.addEventListener ? "addEventListener" : "attachEvent";
var jsgo = {
    th: this,
    aE: function(c, b, a) {
        if (c.addEventListener) {
            c.addEventListener(b, a, false)
        } else {
            if (c.attachEvent) {
                c["e" + b + a] = a;
                c[b + a] = function() {
                    c["e" + b + a](K.event)
                };
                c.attachEvent("on" + b, c[b + a])
            }
        }
    },
    gT: function(b) {
        l = Fb.getElementsByTagName(b);
        for (var c = 0, a = l.length; c < a; c++) {
            if (l[c].getAttribute("href")) {
                jsgo.aE(l[c], "mousedown", jsgo.mD);
                jsgo.aE(l[c], "touchstart", jsgo.tS)
            }
        }
        jsgo.rsm()
    },
    mD: function(a) {
        a.touches = [{
            clientX: a.clientX,
            clientY: a.clientY
        }];
        jsgo.tS(a)
    },
    tS: function(c) {
        t = c.target || c.srcElement;
        var a = t.parentNode.getAttribute("href");
        var b = a.split("&jurl");
        t.parentNode.href = b[0] + "&jmx=" + c.clientX + "&jmy=" + c.clientY + "&jurl" + b[1]
    },
    qs: function(b) {
        var a = K.location.search.substring(1);
        var d = a.split("&");
        for (var c = 0; c < d.length; c++) {
            var e = d[c].split("=");
            if (e[0] == b) {
                return e[1]
            }
        }
        return (false)
    },
    rsm: function() {
        var b = jsgo.qs("adzone") + "_" + document.body.scrollHeight + "_" + document.body.scrollWidth;
        try {
           // window.parent.postMessage(b, "*")
        } catch (a) {
            window.location.hash = b
        }
    }
};
document.addEventListener("DOMContentLoaded", function() {
    jsgo.gT("a")
});
