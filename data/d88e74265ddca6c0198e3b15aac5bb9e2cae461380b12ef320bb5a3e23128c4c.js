window.adblockExists=true;;

function ready(fn) {if (document.readyState != 'loading'){fn();} else {document.addEventListener('DOMContentLoaded', fn);}};

window.jQuery || document.write("<script src='https://www.fimela.com/assets/javascripts/vendor/jquery.min.js'><\/script>"); ;

window.dataLayer = window.dataLayer || [];;

var liputan6_id_site_id = "7";
var liputan6_id_client_id = "6";
var liputan6_id_client_token = "a87fc8f4e9a33eb95d1419541734fc4b";;

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PDJLBKS');;

 window.kmklabs = {};  window.kmklabs.env = 'production';  window.kmklabs.baseAssetsUrl = 'https://cdn-production-assets-kly.akamaized.net/assets';  window.kmklabs.gtm = {"articleId":"","articleTitle":"","category":"ChannelPage","editors":"","editorialType":"","embedVideo":"","pageTitle":"home","publicationDate":"","publicationTime":"","subCategory":"root","subSubCategory":"","tag":"","authors":{"type":"","names":""},"numberOfWords":0,"enabled":true,"log":false,"imageCreation":false,"type":"","videos":[],"photos":[],"partner":"","isSEO":false,"reporters":"","photographers":"","isLiveReport":false,"liveReportTag":"","audience":"","brand":"","videoSource":""};  window.kmklabs.visitor = {"publicationDate":"","publicationTime":"","tag":[],"subCategory":"root","subSubCategory":"","type":"","pageType":"ChannelPage","audience":[],"age":"","gender":"","title":"","platform":"Desktop","site":"fimela","isAdultContent":false};  window.kmklabs.platform = 'Desktop';  window.kmklabs.pageType = 'ChannelPage';  window.kmklabs.site = 'fimela';  window.kmklabs.dmpSegments = {"tw019h508":["lifestyle relationship \/ personality"],"tzh1jktow":["lifestyle relationship \/ relationship \/ love"],"tzlytf64c":["lifestyle relationship \/ food \/ culinary","lifestyle relationship \/ food \/ recipe"],"tzlz95r0n":["lifestyle relationship \/ food \/ tips","lifestyle relationship \/ sexuality \/ tips"],"tsais9e6x":["fashion style"],"tzl02g0bl":["beauty health"],"tsahjm7yw":["news entertainment \/ celebrity"]};window.gaPrefix = "Fimela";
 window.kmklabs.channel = {"id":841,"name":"Fimela","full_slug":""}; window.kmklabs.listSubChannel = [{"name":"Lifestyle","slug":"lifestyle"},{"name":"Fashion","slug":"fashion"},{"name":"Beauty","slug":"beauty"},{"name":"Food","slug":"food"},{"name":"Entertainment","slug":"entertainment"},{"name":"Info","slug":"info"},{"name":"Parenting","slug":"parenting"},{"name":"Relationship","slug":"relationship"},{"name":"Photo","slug":"photo"},{"name":"Video","slug":"video"},{"name":"Health","slug":"health"},{"name":"FimelaHood","slug":"fimelahood"}]; window.kmklabs.category = {"id":841,"name":"Fimela","full_slug":""}; window.kmklabs.toggle = {"disableVirtualpvPhoto":false,"lip6DelayPaging":false,"checkDuplicateCms":false,"cmsCheckAllTag":false,"lip6NoPageLoad":true,"disableVirtualPVFimela":true,"editorForMediaDescription":true,"updateGaLiputan":true,"parameterURL":true,"adminOtosiaSubdomain":false}; ;


    function setKmklabsVisitorGaId() {
        if (typeof ga === 'function') {
            if (typeof ga.getAll == 'function') {
                ga(function() {
                    window.kmklabs.visitor.gaid = ga.getAll()[0].get('clientId');
                });
            } else {
                setTimeout(setKmklabsVisitorGaId, 500);
            }
        } else {
            setTimeout(setKmklabsVisitorGaId, 500);
        }
    }
    setKmklabsVisitorGaId();
;


            oneSignalInitialized = false;
            window.addEventListener("load", function() {
                if (!$ || !$.fn || !$.fn.scroll){return;};
                $(window).scroll(function() {
                    if (oneSignalInitialized) {return;};
                    oneSignalInitialized = true;
                    var OneSignal = window.OneSignal || [];
                        OneSignal.push(function() {
                            OneSignal.init({
                            appId: "ead0809f-f804-40f0-b207-30e7b25b6e6c",
                        });
                    });
                });
            });
            ;

window.kmklabs.related_system = 'tag';
document.addEventListener("DOMContentLoaded", function(){
    if (window.window.screen.availWidth < 1020) {
        document.querySelector('html').style.minWidth = 'unset';
        document.querySelector('body').style.minWidth = 'unset';
    }
});
;

; window.gaSendEvent = function(event, category, action, label, fieldsObject) {
    window.ga && window.ga('kmkGATracker.send', 'event', category, action, label, fieldsObject);
}; window.clickEvent = function (category, action, label){
    window.ga && window.ga('kmkGATracker.send','event', category, action, label);
}; ;

function jsFCPInitializator() {
                if (typeof fimela !== 'undefined') {
                    
fimela.init();
if(fimela.categories) { 
	if(fimela.categories.init) { fimela.categories.init(); } 
	if(fimela.categories.init_show) { fimela.categories.init_show(); } 
}
if(fimela.final) { fimela.final(); }
;
                } else {
                    setTimeout(jsFCPInitializator, 500);
                }
            } 
            ready(function() {
                jsFCPInitializator(); 
            });
        $(document).ready(function() {
          var lazyload_ad = $("div.lazyload_ad");
          if (lazyload_ad.size() > 0) {
            lazyload_ad.lazyLoadAd();
          }
        });
      ;


        grunticon([
          "https://cdn-production-assets-kly.akamaized.net/builds/fimela-icons.data.svg.c8ade5f9.css",
          "https://cdn-production-assets-kly.akamaized.net/builds/fimela-icons.data.png.6a7212f1.css",
          "https://cdn-production-assets-kly.akamaized.net/builds/fimela-icons.fallback.a117ab68.css"
        ]);
      ;


    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
    import {getAnalytics, logEvent} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
    import {getRemoteConfig, fetchAndActivate, getValue} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-remote-config.js";

    const firebaseConfig = {
        apiKey: "AIzaSyDGt_EBulRPrTRA5fyA8mTJy4oyu-bxXYE",
        authDomain: "kly-all-vertical.firebaseapp.com",
        projectId: "kly-all-vertical",
        storageBucket: "kly-all-vertical.appspot.com",
        messagingSenderId: "1031270433652",
        appId: "1:1031270433652:web:ecaa223f7397c59bca6221",
        measurementId: "G-YV9LXF9F74"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const remoteConfig = getRemoteConfig(app);

    //load modul to window object
    window.fbase = {
        app: app,
        analytics: analytics,
        remoteConfig: remoteConfig,
        logEvent: (key, val) => {
            return logEvent(analytics, key, val)
        },
        fetchAndActivate: fetchAndActivate,
        getValue: (key) => {
            return getValue(key)
        }
    } 
;


    window.ahoyUserDefinedConfig = {
        sendBatch: true,
        environment: 'production',
        plentyHostnameProduction: 'https://cdp.vidio.com',
        plentyHostnameStaging: 'https://cdp.int.vidio.com'
    };
    var urlParams = new URLSearchParams(window.location.search);
;


    var gpt_gam_ver = 'v09-ADS';
    gpt_gam_site = window.location.hostname.toUpperCase();
    gpt_gam_ver = (typeof gpt_gam_site !== 'undefined') ? gpt_gam_ver.toUpperCase() : 'V.0.1';

    /*PROTOTYPE CUSTOM FILTERING*/
    String.prototype.klyFiltering = function(delimiter) {
        return this.trim().split(delimiter).map(function(t) {
            return t.trim().toLowerCase()
        }).filter(x => x != "");
    };

    window.GAMLibrary = {};
    window.GAMLibrary = {
        gamImmersive: '/36504930/KLY/DESKTOP/FIMELA.COM/IMMERSIVE',
        gamTopFrame: '/36504930/KLY/DESKTOP/FIMELA.COM/TOP_FRAME',
        gamBottomFrame: '/36504930/KLY/DESKTOP/FIMELA.COM/BOTTOM_FRAME',
        gamSkinad: '/36504930/KLY/DESKTOP/FIMELA.COM/SKINAD',
        gamBillboard: '/36504930/KLY/DESKTOP/FIMELA.COM/MASTHEAD',
        gamShowcase: '/36504930/KLY/DESKTOP/FIMELA.COM/SHOWCASE',
        gamHalfpage1: '/36504930/KLY/DESKTOP/FIMELA.COM/HALFPAGE_1',
        gamHalfpage2: '/36504930/KLY/DESKTOP/FIMELA.COM/HALFPAGE_2',
        gamLeaderboard: '/36504930/KLY/DESKTOP/FIMELA.COM/LEADERBOARD',
        gamBalloon: '/36504930/KLY/DESKTOP/FIMELA.COM/BALLOON',
        gamHeadline1: '/36504930/www.fimela.com/dfp-headline1',
        gamHeadline2: '/36504930/www.fimela.com/dfp-headline2',
        gamNewsTag1: '/36504930/KLY/DESKTOP/FIMELA.COM/NEWS_TAG_1',
        gamNewsTag2: '/36504930/KLY/DESKTOP/FIMELA.COM/NEWS_TAG_2',
        gamHeadlineCRM: '/36504930/KLY/DESKTOP/FIMELA.COM/HEADLINE_CRM',
        gamOrganicFeedCRM1: '/36504930/KLY/DESKTOP/FIMELA.COM/ORGANIC_FEED_CRM_1',
        gamOrganicFeedCRM2: '/36504930/KLY/DESKTOP/FIMELA.COM/ORGANIC_FEED_CRM_2',
        gamOrganicFeedCRM3: '/36504930/KLY/DESKTOP/FIMELA.COM/ORGANIC_FEED_CRM_3',
        gamAdvertorialHL1: '/36504930/KLY/DESKTOP/FIMELA.COM/ADVERTORIAL_HEADLINE_1',
        gamAdvertorialHL2: '/36504930/KLY/DESKTOP/FIMELA.COM/ADVERTORIAL_HEADLINE_2',
        gamInterstitial: '/36504930/KLY/DESKTOP/FIMELA.COM/INTERSTITIAL',
        tags: '',
        documentMeta: function(metaName) {
            var metaResult = '';
            var metas = document.getElementsByTagName('meta');
            if (metas) {
                for (var x = 0, y = metas.length; x < y; x++) {
                    if (metas[x].name.toLowerCase() == metaName) {
                        metaResult += metas[x].content;
                    }
                }
            }
            return metaResult != '' ? metaResult : '';
        },
        create_element: function(elID, elAnchor) {
            var newDiv = document.createElement("div");
            newDiv.id = elID;
            (document.getElementById(elAnchor)) && (document.getElementById(elAnchor)).appendChild(newDiv);
            return document.getElementById(elID);
        },
        userAgent: navigator.userAgent.toLowerCase(),
        GAMisTablet: /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(this.userAgent),
        brandSafetyChecker: function() {
            _klyObject = typeof window.kly !== 'undefined' ? window.kly : window.kmklabs,
                _articlePages = _klyObject && _klyObject.article,
                _isAdultContent = _articlePages && _articlePages.isAdultContent;
            isMatcont = "0",
                isViolateBrandSafety = "0",

                /*POPULATE META DATA*/
                bsKeyword = [],
                dfp_pageTitle = _articlePages && _articlePages.title.klyFiltering(' '),
                dfp_titles = (typeof dfp_pageTitle !== 'undefined') ? dfp_pageTitle : '',
                dfp_keyword = this.documentMeta("keywords"),
                dfp_desc = this.documentMeta("description"),
                /*tagForAds = _klyObject.gtm.tag.replace(/[^A-Za-z0-9|\- ]/ig, "").klyFiltering("|");*/
              dfp_tag = _klyObject.gtm.tag || _klyObject.tag && _klyObject.tag.name,
tagForAds = typeof dfp_tag === 'undefined' ? [] :  dfp_tag.replace(/[^A-Za-z0-9|\- ]/ig, "").klyFiltering("|");
            this.tags = tagForAds;
            const bsKeywordList =  {
    'adult': ['adegan erotis', 'adegan seks', 'aduhai', 'adult', 'affair', 'air mani', 'alat bantu seks', 'alat kelamin', 'alat kontrasepsi', 'alat vital pria', 'alergi', 'anal', 'anatomi vagina', 'anjeng', 'anjing', 'anjlng', 'anjrit', 'anus', 'anying', 'apa itu kondom', 'artis indonesia bugil', 'artis porno', 'ass', 'asu', 'ayam hitam', 'babi', 'bahaya masturbasi', 'bajingan', 'bandar ceme', 'bangsat', 'bdsm', 'bego', 'belahan', 'bentuk kelamin', 'bentuk payudara', 'bercinta', 'bercinta saat hamil', 'bergairah', 'berhubungan intim', 'berhubungan seks', 'berhubungan seksual', 'bersetubuh', 'bikini', 'bintang film porno', 'bintang porno', 'biseksual', 'bitch', 'bocah sd foto mesum', 'body shaming', 'bokne', 'bokong', 'bom surabaya 2018', 'boneka seks', 'boob', 'bra', 'bugil', 'bullshit', 'bulshit', 'bulu kemaluan', 'bunuh diri', 'cabul', 'cara berhubungan intim', 'cara membuat suami bergairah', 'cara memperbesar penis', 'cara mengatasi ejakulasi dini', 'cara seksual', 'celana', 'cemani', 'cemen', 'chat firza-rizieq', 'ciuman', 'cleavage', 'cock', 'cok', 'cukur bulu kemaluan', 'cum', 'dada', 'death', 'dewasa', 'di bawah umur', 'dick', 'dildo', 'diremas', 'disfungsi ereksi', 'doggie', 'doll', 'drunk', 'ejakulasi', 'ejakulasi dini', 'ejakulasi wanita', 'eksotik', 'elo', 'entot', 'ereksi', 'erotic', 'erotis', 'ewe', 'exotic', 'fakta seks', 'fase menstruasi', 'fenomena kelainan seksual', 'fetish', 'film dewasa', 'film porno', 'foreplay', 'foto berhubungan intim', 'foto intim', 'foto telanjang', 'fuck', 'gairah', 'gairah seks', 'gairah seksual', 'gangbang', 'gangguan jiwa', 'gangguan seks', 'ganguan jiwa', 'ganguan seksual', 'ganja', 'gay', 'gaya bercinta', 'gaya bercinta dalam islam', 'gaya bercinta yang disukai pria', 'gaya seks', 'gejala penyakit', 'gemar368', 'germo', 'goblok', 'gue', 'gwe', 'hardcore', 'hasrat seksual', 'henceut', 'hindu', 'hitam mafia', 'homoseks', 'horny', 'hot', 'hubungan', 'hubungan intim', 'hubungan seksual', 'ibu hamil', 'implan payudara', 'industri film porno', 'intim', 'itil', 'jancok', 'jancuk', 'jenis alat kontrasepsi', 'jerawat', 'jual beli sperma', 'kacau', 'kakek cabul', 'kamasutra', 'kanibal', 'kanibalisme', 'kanker payudara', 'kapalan', 'kasus asusila', 'kebencian', 'kecanduan seks', 'kehidupan seks', 'kekerasan seksual', 'kelainan seks', 'kelamin', 'kelamin wanita', 'kemaluan', 'kemaluan wanita', 'kencing', 'keperawanan', 'keriting', 'kesehatan kulit dan kelamin', 'kesehatan payudara', 'kesehatan penis', 'kesehatan reproduksi', 'kesehatan wanita', 'khusus deewasa', 'kimpet', 'kisah perselingkuhan', 'kiss', 'klitoris', 'komunitas swinger', 'kondom', 'kondom pria', 'kontol', 'kontolnya', 'kontrasepsi', 'kontroversi hukuman mati', 'kontroversi lgbt', 'kotor', 'kotoran', 'kristen', 'kumuh', 'kursi tantra seks', 'legalisasi ganja', 'lemari es', 'lendir', 'lesbian', 'lgbt', 'libido', 'lingerie', 'lolita', 'lonte', 'm3m3k', 'mabuk', 'mahasiswi', 'mainan dewasa', 'mainan perangsang gairah', 'makanan berbahaya', 'makanan sehat', 'masa subur pria', 'masturbasi', 'matcont', 'mature', 'meki', 'melakukan hubungan intim', 'memek', 'memerkosa', 'mencukur bulu kemaluan', 'menggairahkan', 'menggoda', 'mengupas', 'menstruasi', 'menyiangi', 'meraba-raba', 'mesra', 'mesum', 'mimpi seks', 'mimpi telanjang', 'miss-v', 'mitos seks', 'model hot', 'model seksi', 'monyet', 'mr-p', 'mucikari siswi smp', 'nakal', 'naked', 'naughty', 'ngentot', 'ngewe', 'nipple', 'nipples', 'nonok', 'nude', 'obat ejakulasi dini', 'obat kuat', 'obat pembesar', 'obat pembesar penis terbaik', 'onani', 'oral', 'oral seks', 'organ', 'organ intim wanita', 'orgasme', 'orgasme wanita', 'overdose', 'overdosis', 'paha', 'pakistan', 'pamer', 'pantat', 'panties', 'payudara', 'payudara kecil', 'payudara wanita', 'pelacur', 'pelecehan', 'pelecehan seksual', 'pembesar penis', 'pembunuh', 'pembunuhan', 'pemerkosaan', 'pemerkosaan anak', 'pemuda', 'pencabulan', 'penetrasi', 'penetratif', 'pengetahuan seks', 'pengobatan alternatif', 'penis', 'penis bengkok', 'penis besar', 'penis kecil', 'penis pria', 'penyakit sipilis', 'penyakit vagina', 'penyimpangan seks', 'perawan', 'perawatan vagina', 'perbudakan', 'perek', 'perguruan tinggi', 'perkosa', 'perkosaan', 'permen', 'perselingkuhan', 'piss', 'play boy', 'pole', 'porn', 'porno', 'pornoaksi', 'pornografi', 'posisi bercinta', 'posisi hubungan intim suami istri menurut islam', 'posisi seks', 'posisi seksual', 'pria dewasa', 'pria idaman', 'prostitusi', 'provokatif', 'pukang', 'puki', 'puting', 'puting payudara', 'putting', 'radikal', 'raksasa', 'rangsang payudara', 'ranjang', 'rasis', 'rasisme', 'razia pasangan mesum', 'rokok', 'rudapaksa', 'rumah bordil', 'sbobet', 'seks', 'seks bebas', 'seks dalam islam', 'seks dan agama', 'seks dan kriminal', 'seks dan pasutri', 'seks oral', 'seks pria dan wanita', 'seks toy', 'seksi', 'seksual', 'seksual lelaki dan perempuan', 'seksualitas', 'seksualitas pria', 'seksualitas wanita', 'semen', 'sensual', 'seronok', 'sex', 'sex toy', 'sexy', 'shit', 'siklus menstruasi', 'situs poker terpercaya', 'situs porno', 'skandal', 'sperma', 'stres dan depresi', 'strip', 'striptease', 'striptis', 'suicide', 'sundulan', 'swinger', 'syur', 'tai', 'taik', 'tamparan', 'tante seksi', 'taruhan online', 'telanjang', 'telentang', 'terangsang', 'teroris', 'terorisme', 'tes keperawanan', 'test pack', 'testis', 'tiduri', 'tips bercinta', 'tips seks', 'titik rangsang', 'titit', 'toket', 'tolol', 'topless', 'toys', 'ujian', 'ukuran normal penis', 'ukuran penis', 'ukuran penis normal', 'ukuran penis orang indonesia', 'ukuran vagina', 'vagina', 'vagina gatal', 'vagina wanita', 'vakum pembesar penis', 'viagra', 'vibrator', 'video bercinta dengan pasangan', 'video porno', 'video seks', 'virus corona', 'vital', 'wanita telanjang', 'waria', 'woman on top', 'xxx', 'xxxx online', 'angry', 'bastard', 'blow job', 'bordil', 'college', 'crush', 'dirty', 'education', 'escort', 'furious', 'hiburan dewasa', 'homoseksual', 'household', 'lose', 'meraung', 'pahlawan wanita', 'pedofil', 'pedofilia', 'rises', 'rush', 'Sensitive', 'sexual', 'sialan', 'situs dewasa', 'spray', 'tanah amp', 'teen'],
    'war_politics': ['ahed tamimi', 'ahok gugat cerai veronica tan', 'aliran sesat', 'anarkis', 'anarkisme suporter sepakbola', 'begal motor', 'bentrok suporter', 'bentrokan', 'bentrokan warga', 'berita hoax', 'capres jokowi', 'capres prabowo', 'fanatik', 'ferdy sambo', 'fpi', 'g30s', 'invasi rusia', 'jemaah ansharut daulah', 'kebohongan ratna sarumpaet', 'kediktatoran arab saudi', 'kekerasan pada wartawan', 'killing', 'kisah mualaf', 'koalisi jokowi', 'koalisi pilpres 2019', 'koalisi prabowo', 'konflik palestina israel', 'konflik palestina-israel', 'konflik rusia ukraina', 'konflik suriah', 'lia eden', 'luwu timur', 'nato', 'penembakan', 'penganiayaan', 'pengawal', 'pengeroyokan', 'penistaan agama', 'perang', 'perang di ukraina', 'perang dunia', 'perang dunia 3', 'perang rusia', 'peristiwa', 'pilpres 2019', 'polisi', 'prabowo subianto', 'prabowo-sandiaga', 'presiden rusia', 'presiden ukraina', 'propaganda rusia', 'ratna sarumpaet', 'rokok elektrik', 'rusia', 'rusia dan ukraina', 'rusia serang ukraina', 'senjata rusia', 'serang ukraina', 'serangan', 'suporter tewas', 'taliban', 'tentara', 'ternyata hoax', 'ujaran kebencian', 'ukraina', 'vladimir putin', 'tni', 'jenderal', 'korupsi', 'politik', 'politikus', 'kpk', 'kkb', 'penjajah', 'berduka', 'army', 'corpse', 'demo', 'dilempar', 'ferdi sambo', 'news', 'news foto', 'news readers', 'politic', 'politics', 'polri', 'Palestina', 'israel', 'boikot', 'yahudi', 'ajudan', 'gaza', 'hamas', 'perwira', 'sianida', 'capres', 'cawapres', 'pemilu', 'ganjar pranowo', 'mahfud md', 'gibran rakabuming', 'anies baswedan', 'muhaimin iskandar', 'cak imin', 'politik', 'mirna', 'jessica wongso', 'makam', 'ganjar', 'anies', 'gibran', 'anis', 'presiden', 'bacapres', 'prabowo', 'mahfud', 'megawati', 'mk', 'mahkamah', 'iriana', 'firaun', 'mesir', 'ham', 'hak asasi manusia', 'cpns', 'militer', 'amunisi', 'senjata', 'senpi', 'kpu', 'partai', 'wapres', 'menteri', 'dpr', 'mrp', 'mpr', 'caleg', 'calon legislatif', 'anggota dpr', 'anggota mpr', 'bupati', 'wakil bupati', 'walikota', 'walkot', 'anggota dprd', 'dprd', 'bawaslu', 'komcad', 'cacar', 'gubernur', 'wakil gubernur', 'partai politik', 'parpol'],
    'drugs_tobacco_alcohol': ['adiktif', 'akibat merokok', 'alcohol', 'alkohol', 'artis narkoba', 'asap rokok', 'bahaya berhenti merokok', 'bahaya merokok', 'bahaya narkoba', 'bahaya rokok', 'bahaya rokok elektrik', 'berhenti merokok', 'bnn', 'cancer', 'candy', 'cara berhenti merokok', 'cbd', 'ciri ciri pengguna narkoba', 'dampak merokok', 'djarum', 'drugs', 'efek berhenti merokok', 'ganja', 'hash', 'impotensi', 'jantung', 'jenis alkohol', 'jenis alkohol dalam minuman keras', 'jenis jenis narkoba', 'jenis narkotika', 'kanker', 'kartel narkoa', 'kasus narkoba', 'kecanduan', 'kesehatan paru', 'larangan merokok', 'mafia narkoba', 'manfaat berhenti merokok', 'merokok', 'minuman beralkohol', 'minuman keras', 'narkoba', 'narkoba artis', 'obat psikotropika', 'overdosis', 'pelanggaran', 'penyalahgunaan narkoba', 'penyeludupan narkoba', 'perokok', 'pot', 'pppa', 'rehabilitasi narkoba', 'remaja narkoba', 'rokok', 'rokok elektrik', 'ruu minuman beralkohol', 'sabu', 'selebriti narkoba', 'sidang narkoba', 'stroke', 'tablet', 'tembakau', 'tips berhenti merokok', 'cukai rokok', 'kokain', 'puntung'],
    'disaster': ['10 macam pencemaran lingkungan', 'autopsi', 'bahaya pencemaran udara', 'bahaya polusi', 'belasungkawa', 'bencana', 'bencana besar', 'bola', 'bom', 'bom atom', 'bom bali', 'bom bunuh diri', 'bom gereja', 'bom meledak', 'bom nuklir', 'bom panci', 'bom sarinah', 'bom seks', 'bunuh orang', 'cara mencegah global warming', 'cara mencegah pemanasan global', 'cara mengatasi pemanasan global', 'cara mengatasi pemanasan global sebagai pelajar', 'cara mengatasi pencemaran udara', 'climate change', 'contoh pencemaran lingkungan', 'dampak pencemaran lingkungan', 'dampak pencemaran udara', 'darurat bencana', 'dilaporkan tewas', 'dimakamkan', 'dinyatakan meninggal', 'dipastikan tewas', 'ditemukan mati', 'ditemukan tewas', 'efek rumah kaca', 'efek rumah kaca adalah', 'fenomena alam', 'gas', 'gas rumah kaca', 'gempa donggala', 'gempa palu', 'gempa sulawesi tengah', 'global warming', 'global warming adalah', 'hilangkan nyawa', 'hilangnya nyawa', 'identitas korban', 'inalillahi', 'isis', 'jasad', 'jasad korban', 'jasadnya', 'jenasah wanita', 'jenazah', 'jenazah pria', 'jenazah teridentifikasi', 'jenis pencemaran lingkungan', 'kapal tenggelam', 'kapal tenggelam di danau toba', 'kasus penebangan pohon', 'kasus tabrak lari', 'keadaan kritis', 'kecelakaan', 'kecelakaan bus', 'kehilangan darah', 'kehilangan hidupnya', 'kehilangan nyawa', 'kehilangan nyawanya', 'kematian', 'korban', 'korban jiwa', 'korban meninggal', 'korban tewas', 'kota paling berpolusi', 'kota paling berpolusi didunia', 'krisis iklim', 'kualitas udara', 'ledakan bom', 'liga', 'limbah', 'limbah pabrik', 'lion air hilang kontak', 'lion air jatuh', 'lion air jatuh di karawang', 'macam pencemaran lingkungan', 'mati', 'mayat', 'mayat korban', 'meledak', 'memakan nyawa', 'membakar', 'membunuh', 'membunuh istrinya', 'membunuh mereka', 'membunuh suaminya', 'menelan nyawa', 'menemui ajal', 'menewaskan', 'menewaskan orang', 'mengalami koma', 'mengamuk', 'mengancam nyawa', 'menghembuskan nafas terakhir', 'menimbulkan korban', 'meninggal', 'meninggal akibat sakit', 'meninggal dunia', 'menyebabkan kematian', 'meregang nyawa', 'meregggut nyawa', 'merenggut jiwa', 'merenggut nyawa', 'modar', 'nyawa hilang', 'nyawa melayang', 'nyawa tak tertolong', 'orang mati', 'orang tewas', 'pelayat', 'pemakaman', 'pemanasan global', 'pemanasan global adalah', 'pembunuhan', 'pembunuhan sadis', 'pencemaran', 'pencemaran air', 'pencemaran air bersih', 'pencemaran air laut', 'pencemaran limbah', 'pencemaran lingkungan', 'pencemaran minyak', 'pencemaran sungai', 'pencemaran sungai brantas', 'pencemaran udara', 'penemuan mayat', 'pengertian efek rumah kaca', 'pengertian efek rumah kaca menurut para ahli', 'pengertian pemanasan global', 'penyakit polusi udara', 'penyakit yang disebabkan oleh polusi udara', 'penyebab efek rumah kaca', 'penyebab global warming', 'penyebab kematian', 'penyebab kerusakan lingkungan', 'penyebab pemanasan global', 'penyebab pemanasan global akibat aktivitas manusia', 'penyebab pencemaran air', 'penyebab pencemaran udara', 'penyebab perubahan iklim', 'penyebab perubahan iklim global', 'penyebab polusi udara', 'penyebab terjadinya efek rumah kaca', 'penyebab terjadinya pemanasan global', 'penyebab terjadinya pemanasan global dan efek rumah kaca', 'permintaan maaf', 'pertandingan', 'perubahan iklim', 'perubahan iklim global', 'pesawat hilang kontak', 'pesawat jatuh', 'petugas penyelamat', 'piala dunia', 'pollution', 'polusi', 'polusi jakarta', 'polusi udara', 'polusi udara di jakarta', 'polutan', 'renggut nyawa', 'sampah plastik', 'sepak', 'stadion', 'tak bernyawa', 'tak sadarkan diri', 'telah meninggal', 'telan nyawa', 'terbunuh', 'terkapar', 'teror bom', 'tewas', 'tewaskan', 'tidak bernyawa', 'timnas', 'tim penyelamat', 'trauma', 'tsunami palu', 'tutup usia', 'udara bersih', 'udara jakarta', 'wafat', 'wanita meninggal', 'won'],
    'epidemic_desease': ['corona', 'corona di indonesia', 'covid', 'covid 19', 'covid-19', 'doctor', 'dokter', 'health', 'healthy', 'hospital', 'infeksi saluran kencing', 'insomnia dan tidur', 'kematian', 'kematian virus', 'kematian wabah', 'kesehatan', 'korban terinfeksi', 'korona', 'obesitas', 'odp', 'osteoporosis', 'pdp', 'penyakit', 'positif korona', 'rsud', 'rumah sakit', 'sakit pernapasan', 'sedih', 'sehat', 'sesak', 'terinfeksi virus corona', 'terjangkit covid-19', 'terkena', 'virus', 'virus corona', 'virus korona', 'virus menyerang', 'virus-corona', 'wabah', 'wabah corona', 'crowd', 'dead', 'die', 'fail', 'fatal', 'fire', 'flu', 'illness', 'kanjuruhan', 'kanker paru paru', 'kerusuhan', 'murder', 'pneumonia', 'pulau sampah', 'stampede', 'tembak', 'tergeletak', 'terinjak', 'tragedi', 'trigger'],
    'religion': ['15lam', 'abu bakar al-baghdadi', 'al quran', 'al-quran', 'buda', 'budha', 'ibrahim al-hashimi al-qurayshi,', 'injil', 'isl4m', 'islam', 'ismi aisyah', 'jimat', 'kafir', 'katolik', 'muh4mmad', 'muhammad', 'muhammad saw', 'nabi', 'yesus', 'idul fitri', 'puasa', 'ramadan', 'ramadhan'],
    'gambling': ['agen poker', 'agen sbobet', 'bonus deposit', 'bonus refferal', 'bonus rollingan', 'cashtree', 'game', 'judi', 'minimal deposit', 'poker', 'poker online'],
    'parenting': ['anak', 'anak artis', 'anak cerdas', 'anak dan balita', 'anak mandiri', 'anak selebritis', 'anak selebritis indonesia', 'arti nama anak', 'arti nama bayi', 'artis bercerai', 'artis hamil', 'asi anak', 'ayah', 'baby', 'baby ameena', 'baby arsy', 'baby bump', 'baby bump artis', 'baby dan balita', 'baby face', 'baby gempi', 'baby leslar', 'baby shower', 'baby shower selebritis', 'baby sitter', 'baby spa', 'baby walker', 'babymoon', 'babymoon artis', 'babyologist', 'baru lahir', 'bayi', 'bayi 6 bulan', 'bayi artis', 'bayi dan anak', 'bayi kembar', 'bayi muntah', 'bayi pilek', 'bayi seleb', 'bayi selebritis', 'bayi selebritis indonesia', 'bayi tabung', 'camilan bayi', 'cara mengeluarkan dahak pada bayi', 'child', 'children', 'family', 'father', 'gaya baby', 'ibu', 'ibu anak', 'induk', 'jadwal makan bayi', 'jam tidur bayi', 'kehamilan', 'keibuan', 'kelahiran anak', 'kelahiran bayi', 'keluarga', 'keluarga artis', 'keluarga bahagia', 'keluarga dan anak', 'keluarga harmonis', 'keluarga penjabat', 'keluarga seleb', 'kesehatan bayi', 'kesehatan bayi dan balita', 'kesehatan keluarga', 'kid', 'masalah anak', 'mendidik anak', 'menyusui', 'mother', 'mpasi', 'nama anak', 'nama anak islam', 'nama anak kristen', 'nama anak laki laki', 'nama anak perempuan', 'nama anak sansekerta', 'nama bayi', 'nama bayi islam', 'nama bayi kristen', 'nama bayi laki laki', 'nama bayi laki laki unik', 'nama bayi perempuan', 'nama bayi perempuan unik', 'nama bayi sansekerta', 'newborn', 'orang tua', 'parent', 'parenting', 'pendidikan', 'penyakit bayi', 'penyebab bayi muntah', 'perawatan bayi', 'perceraian artis', 'perkembangan janin', 'perlengkapan bayi', 'pertumbuhan anak', 'pijat bayi', 'remaja', 'resep mpasi', 'rumah tangga', 'school', 'sekolah', 'spa baby', 'tips parenting', 'ucapan kelahiran', 'youth']
            };

            /*change this acording to the site page layout*/
            var siteContentObject = document.querySelectorAll('.read-page--core-article'),
                siteContentText = siteContentObject[0] && siteContentObject[0].innerText;

            siteContentText = dfp_keyword.concat(dfp_titles,' ', dfp_desc,' ', tagForAds,' ', siteContentText);

            /*Iterate for all keyword list category to find match word*/
            for (var bsKey in bsKeywordList) {
                var subKeywordList = bsKeywordList[bsKey];
                if (subKeywordList.length > 0) {
                    if (matchString = new RegExp("\\b(" + subKeywordList.join("|") + ")\\b", "ig").exec(siteContentText)) {

                        bsKeyword.push(bsKey);
                    }
                }
            }


            if (bsKeyword.length > 0) {
                googletag.pubads().setTargeting("bsKeyword", bsKeyword);
                /*Temporary preserve the previous brand safety targeting*/
                googletag.pubads().setTargeting("isMatcont", isMatcont);
                googletag.pubads().setTargeting("brandsafety", isViolateBrandSafety);
            }

        },
        onMessageReceivedGPTUpdateCreativeStyle: function() {
            this.onMessageReceivedGetStyle = function(e) {
                /** filter only correct origin and setStyle command */
                if (!(e.origin.match(/safeframe.googlesyndication.com/ig)) ||
                    typeof e.data !== 'object' ||
                    typeof e.data.id !== 'string' ||
                    e.data.cmd !== 'setStyle' ||
                    typeof e.data.params !== 'object'
                ) {
                    return;
                }

                /* remove # character from id, we don't use jquery*/
                var elementId = e.data.id.replace(/#/, "");

                var wrapperEl = document.getElementById(elementId);
                if (wrapperEl === null) {
                    return;
                }

                var elements = [wrapperEl];
                /*target on KLY authorized element child ( div and iframe ) */
                if (typeof e.data.query === 'string' && e.data.query) {
                    let el = null;
                    if (el = e.data.query.match(/(div|iframe)/ig)) {
                        elements = wrapperEl.querySelectorAll(el.join(", "));
                    }
                }

                /** target on KLY authorized attribute ( display, heigth, width ) */
                elements.forEach(function(element) {
                    Object.keys(e.data.params).forEach(function(param) {
                        let allowedAttr = ['display', 'height', 'width'];
                        allowedAttr.indexOf(param) > -1 ? (element.style[param] = e.data.params[param]) : '';
                    });
                });

            }
            if (window.addEventListener) {
                window.addEventListener('message', this.onMessageReceivedGetStyle, false);
            } else {
                if (window.attachEvent) {
                    window.attachEvent('onmessage', this.onMessageReceivedGetStyle);
                } else {
                    window.onmessage = this.onMessageReceivedGetStyle;
                }
            }
        }
    }

    /** LOAD PREBID - START */
    /** START - PREBID FUNCTION LIST */
    function spotxOutstreamFunc(bid) {
        function mobileAndTabletcheck() {
            var check = false;
            (function(a) {
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                        a
                    ) ||
                    /1207|6310|6590|3gso|4thp|50[1 6]i|770s|802s|a wa|abac|ac(er|oo|s\ )|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\ m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\ (n|u)|c55\/|capi|ccwa|cdm\ |cell|chtm|cldc|cmd\ |co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\ s|devi|dica|dmob|do(c|p)o|ds(12|\ d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4 7]0|os|wa|ze)|fetc|fly(\ |_)|g1 u|g560|gene|gf\ 5|g\ mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\ (m|p|t)|hei\ |hi(pt|ta)|hp( i|ip)|hs\ c|ht(c(\ | |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\ (20|go|ma)|i230|iac( |\ |\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\ |kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\ [a w])|libw|lynx|m1\ w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\ cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\ | |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0 2]|n20[2 3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\ |on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\ ([1 8]|c))|phil|pire|pl(ay|uc)|pn\ 2|po(ck|rt|se)|prox|psio|pt\ g|qa\ a|qc(07|12|21|32|60|\ [2 7]|i\ )|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\ |oo|p\ )|sdk\/|se(c(\ |0|1)|47|mc|nd|ri)|sgh\ |shar|sie(\ |m)|sk\ 0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\ |v\ |v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\ |tdg\ |tel(i|m)|tim\ |t\ mo|to(pl|sh)|ts(70|m\ |m3|m5)|tx\ 9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0 3]|\ v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\ | )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\ |your|zeto|zte\ /i.test(
                        a.substr(0, 4)
                    )
                )
                    check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
        var bMobile = mobileAndTabletcheck();
        if (bMobile) {
            var playerWidth = 300;
            var playerHeight = 169;
        } else {
            var playerWidth = 640;
            var playerHeight = 360;
        }

        const videoDiv = bid.adUnitCode;
        let script = window.document.createElement("script");
        script.type = "text/javascript";
        script.src = "//cdn.spotxcdn.com/website/integration_test/media/asia/EASI.js";
        script.setAttribute("data-spotx_channel_id", "" + bid.channel_id);
        script.setAttribute("data-spotx_vast_url", "" + bid.vastUrl);
        script.setAttribute("data-spotx_content_width", playerWidth);
        script.setAttribute("data-spotx_content_height", playerHeight);
        script.setAttribute("data-spotx_content_page_url", bid.renderer.config.content_page_url);
        script.setAttribute("data-spotx_ad_unit", "incontent");
        script.setAttribute("data-spotx_autoplay", "1");
        script.setAttribute("data-spotx_continue_out_of_view", "1");
        script.setAttribute("data-spotx_content_container_id", videoDiv);
        var vid_contain = window.document.getElementById(videoDiv);
        vid_contain.style.cssText = "display: none; margin-bottom: 20px";
        vid_contain.appendChild(script);
    }
    /** END - PREBID FUNCTION LIST */

    /** START - PREBID INITIATE CLASS  */
    class PrebidInstantiate {
        constructor(timeout, fstimeout, hbtimeout, adunitDisplay, adunitVideo, price) {
            this.PREBID_TIMEOUT = timeout;
            this.FAILSAFE_TIMEOUT = fstimeout;
            this.HB_TIMEOUT = hbtimeout;
            this.ADUNITDISPLAY = adunitDisplay;
            this.ADUNITVIDEO = adunitVideo;
            this.PRICE = price;
            this.pushBid();
            this.failsafePrebid();
        }

        failsafePrebid() {
            let that = this;
            setTimeout(function() {
                that.initAdserver();
            }, this.FAILSAFE_TIMEOUT);
        }
        pushBid() {
            pbjs.que.push(() => {
                pbjs.addAdUnits(this.ADUNITDISPLAY);
                pbjs.addAdUnits(this.ADUNITVIDEO);
                pbjs.setConfig({
                    priceGranularity: this.PRICE,
                    enableSendAllBids: true,
                    cache: {
                        url: 'https://prebid.adnxs.com/pbc/v1/cache'
                    },
                    // bidderTimeout: 2000,
                });
                pbjs.requestBids({
                    bidsBackHandler: this.initAdserver,
                    timeout: this.PREBID_TIMEOUT,
                });
            });
        }

        initAdserver() {
            if (pbjs.initAdserverSet) return;
            pbjs.initAdserverSet = true;

            // Get all of the adUnit codes for the display adUnits
            var displayAdUnitCodes = [];
            adUnitsDisplay.forEach(function(adUnit) {
                displayAdUnitCodes.push(adUnit.code);
                //console.log(adUnit.code);
            });

            googletag.cmd.push(function() {
                pbjs.que.push(function() {
                    pbjs.setTargetingForGPTAsync(displayAdUnitCodes);
                    googletag.pubads().refresh([window.GAMLibrary.showcase]);
                    googletag.pubads().refresh([window.GAMLibrary.halfpage1]);
                    googletag.pubads().refresh([window.GAMLibrary.leaderboard]);
                });
            });

        }
    }
    /** START - PREBID INITIATE CLASS  */

    /** START - PREBID INIT, CONFIGURATION & GOOGLE INIT   */
    const priceGranularityConfig = {
        buckets: [{
            precision: 2,
            min: 0.02,
            max: 2.99,
            increment: 0.01
        }, {
            precision: 2,
            min: 3,
            max: 10,
            increment: 0.1
        }, ],
    };
    var gptadslots = [];
    var googletag = googletag || {};
    var pbjs = pbjs || {};
    var adUnitsDisplay = [{
        code: "div-gpt-ad-fimela-sc-1",
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [250, 250],
                    [200, 200],
                ],
            },

        },
        bids: [{
            bidder: "innity",
            params: {
                zone: 97854,
                pub: 536
            }
        },{
            bidder: "teads",
            params: {
                pageId: 151756,
                placementId: 167827
            }
        },{
            bidder: "rubicon",
            params: {
                accountId: 12534,
                siteId: 377678,
                zoneId: 2083798
            }
        }, {
            bidder: 'pubmatic',
            params: {
                publisherId: '156536',
                adSlot: 'Prebid-Fimela-Mobile-300x250_1'
            }
        }, {
            bidder: 'unruly',
            params: {
                siteId: 243584
            }
        }, {
            bidder: 'medianet',
            params: {
                cid: '8CUWX4UX4',
                crid: '576550861'
            }
        }, {
            bidder: 'smartadserver',
            params: {
                domain: 'https://prg-apac.smartadserver.com',
                networkId: 4221,
                siteId: 498332,
                pageId: 1556524,
                formatId: 111310
            }
        }, {
            bidder: "openx",
            params: {
                delDomain: "emtek-d.openx.net",
                unit: "556894074"
            }
        }, {
            bidder: 'ix',
            params: {
                siteId: '802778'
            }
        }, { bidder: "oftmedia", params: { placementId: "27497155" } },
        { bidder: "yahoossp", params: { dcn: '8a969d80018383b1b722c650cea4023c', pos: '8a9695bc018383b1c995c6510d7a024c' } },
        { bidder: "taboola", params: { tagId: 'showcase_homepage_1', publisherId: '1501404', } },
        { bidder: "triplelift", params: { inventoryCode: 'Fimela_300x250_Prebid' } }, ],
    }, {
        code: "div-gpt-ad-fimela-halfpage-1",
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [300, 600],
                    [160, 600],
                ],
            },

        },
        bids: [{
            bidder: "innity",
            params: {
                zone: 98050,
                pub: 536
            }
        },{
            bidder: "teads",
            params: {
                pageId: 151756,
                placementId: 167827
            }
        },{
            bidder: "rubicon",
            params: {
                accountId: 12534,
                siteId: 377678,
                zoneId: 2083798
            }
        }, {
            bidder: 'pubmatic',
            params: {
                publisherId: '156536',
                adSlot: 'Prebid-Fimela-Mobile-300x600'
            }
        }, {
            bidder: 'unruly',
            params: {
                siteId: 243584
            }
        }, {
            bidder: 'medianet',
            params: {
                cid: '8CUWX4UX4',
                crid: '123558562'
            }
        }, {
            bidder: 'smartadserver',
            params: {
                domain: 'https://prg-apac.smartadserver.com',
                networkId: 4221,
                siteId: 498332,
                pageId: 1556524,
                formatId: 111311
            }
        }, {
            bidder: "openx",
            params: {
                delDomain: "emtek-d.openx.net",
                unit: "556894069"
            }
        }, {
            bidder: 'ix',
            params: {
                siteId: '802781'
            }
        }, { bidder: "oftmedia", params: { placementId: "27497156" } },
        { bidder: "yahoossp", params: { dcn: '8a969d80018383b1b722c650cea4023c', pos: '8a96992f018383b1c311c65152410246' } },
        { bidder: "taboola", params: { tagId: 'halfpage_homepage_1', publisherId: '1501404', } },
        { bidder: "triplelift", params: { inventoryCode: 'Fimela_300x600_Prebid' } }, ],
    }, {
        code: "div-gpt-ad-fimela-halfpage-2",
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [300, 600],
                    [160, 600],
                ],
            },

        },
        bids: [{
            bidder: "innity",
            params: {
                zone: 98050,
                pub: 536
            }
        },{
            bidder: "teads",
            params: {
                pageId: 151756,
                placementId: 167827
            }
        },{
            bidder: "rubicon",
            params: {
                accountId: 12534,
                siteId: 377678,
                zoneId: 2083798
            }
        }, {
            bidder: 'pubmatic',
            params: {
                publisherId: '156536',
                adSlot: 'Prebid-Fimela-Mobile-300x600'
            }
        }, {
            bidder: 'unruly',
            params: {
                siteId: 243584
            }
        }, {
            bidder: 'medianet',
            params: {
                cid: '8CUWX4UX4',
                crid: '123558562'
            }
        }, {
            bidder: "openx",
            params: {
                delDomain: "emtek-d.openx.net",
                unit: "556894069"
            }
        }, { bidder: "yahoossp", params: { dcn: '8a969d80018383b1b722c650cea4023c', pos: '8a96992f018383b1c311c65152410246' } },
        { bidder: "taboola", params: { tagId: 'halfpage_homepage_2', publisherId: '1501404', } }, ],
    }, {
        code: "div-gpt-ad-liputan6-lb",
        mediaTypes: {
            banner: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
            },
        },
        bids: [{
            bidder: 'smartadserver',
            params: {
                domain: 'https://prg-apac.smartadserver.com',
                networkId: 4221,
                siteId: 498332,
                pageId: 1556524,
                formatId: 111313
            }
        }, {
            bidder: 'ix',
            params: {
                siteId: '802777'
            }
        },{
            bidder: "teads",
            params: {
                pageId: 151756,
                placementId: 167827
            }
        },{ bidder: "oftmedia", params: { placementId: "27497157" } },
        { bidder: "yahoossp", params: { dcn: '8a969d80018383b1b722c650cea4023c', pos: '8a96992f018383b1c311c65237800248' } },
        { bidder: "taboola", params: { tagId: 'leaderboard_homepage_1', publisherId: '1501404', } }, ],
    }, ];
    var adUnitsVideo = [{
        code: "div-gpt-ad-fimela-sc-1",
        mediaTypes: {
            video: {
                playerSize: [300, 250], // Not set so that the player can be repsonsive
                context: "outstream",
                protocols: [2, 3, 7],
            },

        },
        bids: [{
            bidder: "spotx",
            params: {
                channel_id: 285432,
                ad_unit: "outstream",
                outstream_function: spotxOutstreamFunc
            }
        }, {
            bidder: 'ix',
            params: {
                siteId: '802778'
            }
        }, ],
    }, {
        code: "div-gpt-ad-fimela-halfpage-1",
        mediaTypes: {
            video: {
                playerSize: [300, 600], // Not set so that the player can be repsonsive
                context: "outstream",
                protocols: [2, 3, 7],
            },

        },
        bids: [{
            bidder: "spotx",
            params: {
                channel_id: 285432,
                ad_unit: "outstream",
                outstream_function: spotxOutstreamFunc
            }
        }, {
            bidder: 'ix',
            params: {
                siteId: '802781'
            }
        }, ],
    }, {
        code: "div-gpt-ad-fimela-halfpage-2",
        mediaTypes: {
            video: {
                playerSize: [300, 600], // Not set so that the player can be repsonsive
                context: "outstream",
                protocols: [2, 3, 7],
            },

        },
        bids: [{
            bidder: "spotx",
            params: {
                channel_id: 285432,
                ad_unit: "outstream",
                outstream_function: spotxOutstreamFunc
            }
        }, ],
    }, {
        code: "div-gpt-ad-liputan6-lb",
        mediaTypes: {
            video: {
                playerSize: [970, 250], // Not set so that the player can be repsonsive
                context: "outstream",
                protocols: [2, 3, 7]
            },
        },
        bids: [{
            bidder: 'ix',
            params: {
                siteId: '802777'
            }
        }, ],
    }, ];
  
  	pbjs.bidderSettings = {
			taboola: {storageAllowed: true}
    }
  
    pbjs.que = pbjs.que || [];
    googletag.cmd = googletag.cmd || [];
    /** END - PREBID INIT, CONFIGURATION & GOOGLE INIT   */
    /** LOAD PREBID - END */

    /* DMP CATEGORY LIST */
    window.createDMPTracker = function(adsCatList, dfpTracker, macro) {
        window.createCDPTracker(adsCatList, macro);
        parent.window.open(dfpTracker, '_blank');
    };

    window.createCDPTracker = function(cat, macro) {
        var cName = 'ahoy_visitor=',
            cVisitorId = document.cookie.split(';').find(v => {
                return v.match(cName);
            }),
            partnerUID = cVisitorId ? decodeURIComponent(cVisitorId).trim().replace(cName, '') : 0,
            gamMacro = typeof macro === "string" ? JSON.parse(macro) : macro,
            defaultKey = {
                adunitId: "ads_adunit_id",
                advertiserId: "ads_advertiser_id",
                creativeId: "ads_creative_id",
                lineitemId: "ads_lineitem_id",
                orderId: "ads_order_id",
            };

        actionDetails = Object.keys(gamMacro).reduce((obj, k) => Object.assign(obj, defaultKey[k] ? {
                [defaultKey[k]]: gamMacro[k]
            } : {
                [k]: gamMacro[k]
            }), {}),
            cdpData = {
                action: actionDetails.action ? actionDetails.action : 'ads_click',
                action_category: cat,
                action_details: actionDetails.action ? (delete actionDetails.action, actionDetails = actionDetails) : actionDetails,
                visitor_id: partnerUID
            };

        //partnerUID ? window.VidioPersonalization.sendData(null, cdpData) : '';
        //partnerUID ? window.AhoyEvent.sendPersonalizationUserEvent(cdpData) : '';
        (actionDetails.action == 'ads_click') ? (partnerUID ? window.AhoyEvent.sendPersonalizationUserEvent(cdpData) : '') : '';
    };

    var elImmersiveContainer = document.createElement('div');
    elImmersiveContainer.setAttribute('id', 'div-gpt-ad-fimela-immersive-oop');
    if (document.body.appendChild(elImmersiveContainer)) {
        googletag.cmd.push(function() {
            /*INIT CONTENT FILTERING SCRIPT*/
            var urlPath = document.URL;

            GAMLibrary.brandSafetyChecker();

            /* DEFINE IMMERSIVE TAG - DO NOT CHANGE THE SLOT ORDER, IMMERSIVE ALWAYS ON THE 1st POSITION - */
            window.GAMLibrary.immersive = googletag.defineOutOfPageSlot(GAMLibrary.gamImmersive, 'div-gpt-ad-fimela-immersive-oop').addService(googletag.pubads());
            window.GAMLibrary.leaderboard = googletag.defineSlot(GAMLibrary.gamLeaderboard, [
                [728, 90],
                [970, 90],
                [970, 250]
            ], 'div-gpt-ad-fimela-lb-1').addService(googletag.pubads());
            window.GAMLibrary.showcase = googletag.defineSlot(GAMLibrary.gamShowcase, [
                [300, 250],
                [250, 250]
            ], 'div-gpt-ad-fimela-sc-1').addService(googletag.pubads());
            window.GAMLibrary.halfpage1 = googletag.defineSlot(GAMLibrary.gamHalfpage1, [
                [300, 250],
                [300, 600],
                [160, 600]
            ], 'div-gpt-ad-fimela-halfpage-1').addService(googletag.pubads());

            window.GAMLibrary.ballon = googletag.defineOutOfPageSlot(GAMLibrary.gamBalloon, 'div-gpt-ad-fimela-lFloating-oop').addService(googletag.pubads());
            window.GAMLibrary.newstag1 = googletag.defineOutOfPageSlot(GAMLibrary.gamNewsTag1, 'div-gpt-ad-fimela-newstag1').addService(googletag.pubads());
            window.GAMLibrary.newstag2 = googletag.defineOutOfPageSlot(GAMLibrary.gamNewsTag2, 'div-gpt-ad-fimela-newstag2').addService(googletag.pubads());
            window.GAMLibrary.headlineCRM = googletag.defineOutOfPageSlot(GAMLibrary.gamHeadlineCRM, 'div-gpt-ad-fimela-crm-headline-oop').addService(googletag.pubads());
            window.GAMLibrary.organicFeedCRM1 = googletag.defineOutOfPageSlot(GAMLibrary.gamOrganicFeedCRM1, 'div-gpt-ad-fimela-crm1-oop').addService(googletag.pubads());
            window.GAMLibrary.organicFeedCRM2 = googletag.defineOutOfPageSlot(GAMLibrary.gamOrganicFeedCRM2, 'div-gpt-ad-fimela-crm2-oop').addService(googletag.pubads());
            window.GAMLibrary.organicFeedCRM3 = googletag.defineOutOfPageSlot(GAMLibrary.gamOrganicFeedCRM3, 'div-gpt-ad-fimela-crm3-oop').addService(googletag.pubads());
            window.GAMLibrary.advertHL1 = googletag.defineOutOfPageSlot(GAMLibrary.gamAdvertorialHL1, 'div-gpt-ad-fimela-advertorial-headline1').addService(googletag.pubads());
            window.GAMLibrary.advertHL2 = googletag.defineOutOfPageSlot(GAMLibrary.gamAdvertorialHL2, 'div-gpt-ad-fimela-advertorial-headline2').addService(googletag.pubads());
            /* INTERSTITIAL ADS */
            window.GAMLibrary.interstitial = googletag.defineOutOfPageSlot(GAMLibrary.gamInterstitial, googletag.enums.OutOfPageFormat.INTERSTITIAL);
            window.GAMLibrary.interstitial ? window.GAMLibrary.interstitial.addService(googletag.pubads()) : '';
            /* INTERSTITIAL ADS */

            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                var dfp_slotElementId = event.slot.getSlotId().getDomId();
                var containerId = event.slot.getSlotElementId();
                var containerEl = document.getElementById(containerId);

                if (event.slot == window.GAMLibrary.immersive) {
                    if (event.isEmpty) {
                        gam_billboard = googletag.defineOutOfPageSlot(GAMLibrary.gamBillboard, 'div-gpt-ad-fimela-billboard-oop').addService(googletag.pubads());
                        gam_topfrm = googletag.defineOutOfPageSlot(GAMLibrary.gamTopFrame, 'div-gpt-ad-fimela-topfrm-oop').addService(googletag.pubads());
                        gam_bottomfrm = googletag.defineSlot(GAMLibrary.gamBottomFrame, [468, 60], 'div-gpt-ad-fimela-bottomfrm-oop').addService(googletag.pubads());
                        if (!GAMLibrary.GAMisTablet) {
                            gam_skinad = googletag.defineOutOfPageSlot(GAMLibrary.gamSkinad, 'div-gpt-ad-fimela-skinad-oop').addService(googletag.pubads());
                            googletag.pubads().refresh([gam_billboard, gam_topfrm, gam_bottomfrm, gam_skinad]);
                        } else {
                            googletag.pubads().refresh([gam_billboard, gam_topfrm, gam_bottomfrm]);
                        }

                    }
                }

                if (containerEl !== null) {
                    var iframeEl = containerEl.querySelectorAll('iframe')[0];

                    /* it's delayed by 10 milliseconds, because iframe is not yet fully rendered
                    and limited to max to 10 seconds to wait*/
                    var timeoutFunction = function() {
                        var src = "#" + containerId;
                        /* `src` attribute is null, when iframe is FriendlyIframe, and
                        when it's present, then it's SafeFrame */
                        if (iframeEl) {
                            if ((iframeEl.getAttribute('src') !== null)) {
                                src = iframeEl.getAttribute('src').replace(/#.*/, "") + src;
                            } else {
                                var name = iframeEl.getAttribute('name') + "#" + containerId;
                                iframeEl.setAttribute('name', name);
                            }
                            iframeEl.setAttribute('src', src);
                        }
                    };
                    setTimeout(timeoutFunction, 10);
                }
            });

            /* START - SEND IMPRESSION DATA TO CDP */
            googletag.pubads().addEventListener('slotOnload', function(event) {
                var dfp_slotDelivered = event.slot.getResponseInformation() ? 'block' : 'none'; /* check wheter there is ads or not*/

                if (dfp_slotDelivered == 'block') {
                    cdpData = {
                        action: 'ads_impression',
                        action_details: {
                            slotElementId: event.slot.getSlotElementId(),
                            ResponseInformation: event.slot.getResponseInformation(),
                            sizes: event.slot.getSizes(),
                            adunitPath: event.slot.getAdUnitPath(),
                            outOfPage: event.slot.getOutOfPage()
                        }
                    };
                    window.AhoyEvent.sendPersonalizationUserEvent(cdpData);
                }
            });
            /* END - SEND IMPRESSION DATA TO CDP */

            /*  START TARGETING BLOCK   */
            googletag.pubads().setTargeting("tags", GAMLibrary.tags);
            googletag.pubads().setTargeting("articleTitle", kmklabs.gtm.articleTitle);
    				googletag.pubads().setTargeting("articlePath", window.location.pathname);
            googletag.pubads().setTargeting("platform", kmklabs.platform);
            googletag.pubads().setTargeting("type", kmklabs.gtm.type);
            googletag.pubads().setTargeting("pageType", kmklabs.pageType);
            googletag.pubads().setTargeting("channel", kmklabs.gtm.subCategory);
            googletag.pubads().setTargeting("audience", kmklabs.gtm.audience ? kmklabs.gtm.audience.split("|") : "false");
            googletag.pubads().setTargeting("isAdvertorial", typeof(isAdvertorial = kmklabs.article && kmklabs.article.isAdvertorial.toString()) === "undefined" ? "false" : isAdvertorial);
            googletag.pubads().setTargeting("isMultipage", typeof(isMultipage = kmklabs.article && kmklabs.article.isMultipage.toString()) === "undefined" ? "false" : isMultipage);
            googletag.pubads().setTargeting("articleId", kmklabs.gtm.articleId.toString());
            googletag.pubads().setTargeting("pagingNum", typeof(pageParam = kmklabs.gtm.pageParam && kmklabs.gtm.pageParam.toString()) === "undefined" ? "false" : pageParam);
            googletag.pubads().setTargeting("site", kmklabs.site);
            googletag.pubads().setTargeting("age", typeof(age = kmklabs.gtm.age) === "undefined" ? "false" : kmklabs.gtm.age.toString());
            googletag.pubads().setTargeting("gender", typeof(gender = kmklabs.gtm.gender) === "undefined" ? "false" : kmklabs.gtm.gender.toString());
            googletag.pubads().setTargeting("subcategory", kmklabs.gtm.subCategory);
            /*  END TARGETING BLOCK   */

            /* SET VISITOR ID AS PUBLISHER PROVIDED ID - START*/
            var cVisitorId = (visId = document.cookie.split("ahoy_visitor")[1]) ? visId.split(';')[0].replace(/[^a-zA-Z0-9]/ig, '') : (window.ahoy.visitorId) ? window.ahoy.visitorId : false;

            if (cVisitorId) {
                googletag.pubads().setPublisherProvidedId(cVisitorId + 'kly');
            }
            /* SET VISITOR ID AS PUBLISHER PROVIDED ID - END*/

            googletag.pubads().setCentering(true);
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();

            googletag.pubads().refresh([window.GAMLibrary.interstitial, window.GAMLibrary.immersive, window.GAMLibrary.ballon, window.GAMLibrary.headline1, window.GAMLibrary.headline2, window.GAMLibrary.newstag1, window.GAMLibrary.newstag2, window.GAMLibrary.headlineCRM, window.GAMLibrary.organicFeedCRM1, window.GAMLibrary.organicFeedCRM2, window.GAMLibrary.organicFeedCRM3, window.GAMLibrary.advertHL1, window.GAMLibrary.advertHL2]);

        });
    }

    /* INITIATE PREBID */
    var prebidObject = new PrebidInstantiate(1000, 3000, 1000, adUnitsDisplay, adUnitsVideo, priceGranularityConfig);

    /** GET MESSAGE FROM SAFEFRAME CONTAINER */
    GAMLibrary.onMessageReceivedGPTUpdateCreativeStyle();
    /** GET MESSAGE FROM SAFEFRAME CONTAINER */

    /*add load more ads div container*/
    GAMLibrary.create_element('div-gpt-ad-fimela-lb-2', 'lb-2');
    GAMLibrary.create_element('div-gpt-ad-fimela-lb-3', 'lb-3');
    GAMLibrary.create_element('div-gpt-ad-fimela-sc-2', 'sc-2');
    GAMLibrary.create_element('div-gpt-ad-fimela-sc-3', 'sc-3');
    GAMLibrary.create_element('div-gpt-ad-fimela-halfpage-2', 'halfpage-2');
    GAMLibrary.create_element('div-gpt-ad-fimela-halfpage-3', 'halfpage-3');

    /*observe any changes on class when load more triggered*/
    var $div = document.getElementsByClassName("fimela--articles--iridescent-list");
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === "class") {
                /*get load more order number*/
                var order = parseInt((mutation.target).getAttribute('data-index')) + 1;
                /*trigger new adrequest from these adunits*/
                if (document.querySelector('div-gpt-ad-fimela-lb-' + order)) {
                    var fim_lb = googletag.defineSlot(GAMLibrary.gamLeaderboard, [
                        [728, 90],
                        [970, 90],
                        [970, 250]
                    ], 'div-gpt-ad-fimela-lb-' + order).addService(googletag.pubads());
                    googletag.pubads().refresh([fim_lb]);
                }

                if (document.querySelector('div-gpt-ad-fimela-halfpage-' + order)) {
                    var fim_hp = googletag.defineSlot(GAMLibrary.gamHalfpage1, [
                        [300, 250],
                        [300, 600],
                        [160, 600]
                    ], 'div-gpt-ad-fimela-halfpage-' + order).addService(googletag.pubads());
                    googletag.pubads().refresh([fim_hp]);
                }

                if (document.querySelector('div-gpt-ad-fimela-sc-' + order)) {
                    var fim_sc = googletag.defineSlot(GAMLibrary.gamShowcase, [
                        [300, 250],
                        [250, 250]
                    ], 'div-gpt-ad-fimela-sc-' + order).addService(googletag.pubads());
                    googletag.pubads().refresh([fim_sc]);
                }

            }
        });
    });
    observer.observe($div[1], {
        attributes: true
    });
    observer.observe($div[2], {
        attributes: true
    });
