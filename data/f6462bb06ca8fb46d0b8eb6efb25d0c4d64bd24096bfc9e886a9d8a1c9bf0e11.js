
        if ( location.protocol == 'http:' ) {
            location.href = 'https://' + location.hostname + location.pathname + location.search + location.hash ;
        }
    ;

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KT67283');;


var _redirect_url = '' ;
//alert(location.pathname.split('/'));
if ( location.pathname == '/' || location.pathname == '//') {
	if ( location.pathname.indexOf('mobile') == -1 ) {
		_redirect_url = location.origin + '/mobile' ;
	}
} else if ( location.pathname.indexOf('catalog') != -1 ) {
	if ( location.pathname.indexOf('mobile') == -1 ) {
		//_redirect_url = location.origin + '/mobile' + location.pathname  ;
	}
}
window.onload = (function(a,b){if(_redirect_url != ''&&/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.location=b})(navigator.userAgent||navigator.vendor||window.opera,_redirect_url);
;


        if (navigator.userAgent.indexOf("MSIE") > -1 || navigator.appVersion.indexOf('Trident/') > 0) {
            console.log("IE10 IE11!!");
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = '/lazyweb/web/css/iefix.css';
            link.media = 'all';
            head.appendChild(link);
        }
    ;


        function lazyweb_analyze_uri(val){
            var uri = window.location.search;
            var re = new RegExp("" +val+ "=([^&?]*)", "ig");
            return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);
        }
    ;


  var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "17072375" });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();
;

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KT67283');;


    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-990045206');
    
    ;


        {
            "@context":"https://schema.org",
            "@type":"ProfessionalService",
            "priceRange": "$$",
            "name": "今周刊",
            "address":{
                "@type":"PostalAddress",
                "streetAddress":"南京東路一段96號",
                "addressLocality":"台北市中山區",
                "postalCode":"10491",
                "addressCountry":"TW"
            },
            "url": "https://www.businesstoday.com.tw",
            "logo": "https://www.businesstoday.com.tw/lazyweb/web/img/logo2x.png",
            "image": "https://www.businesstoday.com.tw/lazyweb/web/img/logo2x.png",
            "description": "今周刊持續揭露第一手的財經資訊與產業動態。從國際趨勢、政治經濟情勢、產業動態到理財規劃及社會文化資訊。",
            "email": "cc@btnet.com.tw",
            "faxNumber": "+886225316438",
            "telephone":  "+886225816196"
        }
    ;


        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1906801402968742');
        fbq('track', 'PageView');
                                ;

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TJ3C263');;


            function getMCookie(name) {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop().split(';').shift();
            }            
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
                var u="//matomo.businesstoday.com.tw/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '1']);
                _paq.push(['setUserId', getMCookie('businesstoday')]);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
        ;


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-10872666088');
        ;


        window.addEventListener('load', function(event) {
            if (window.location.href == 'https://www.businesstoday.com.tw/checkout') {
                var amount = document.querySelector('[class=new-total__sum-text]').innerText;
        var fAmount = parseFloat(amount.replace(/[$,]/g, ''));
                
                gtag('event', 'conversion', {
                'send_to': 'AW-10872666088/u-xPCPTvy6wDEOjvvsAo',
                'value': fAmount,
                'currency': 'TWD'
                });
            }
        });
        ;


        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2126824317498693');
        fbq('track', 'PageView');
        ;


    'use strict';(function(win,doc,scriptTagName,src,_wbq,newScriptElement,rootScriptElement){if(win.wbq)return;_wbq=win.wbq=function(){if(_wbq.callMethod)_wbq.callMethod.apply(_wbq,arguments);else _wbq.queue.push(arguments)};_wbq.containerJsPathPrefix="https://cdp-cdn.tenmax.io/js/m/";_wbq.queue=[];_wbq.callMethods=[];newScriptElement=doc.createElement(scriptTagName);rootScriptElement=doc.getElementsByTagName(scriptTagName)[0];newScriptElement.async=true;newScriptElement.src=src;rootScriptElement.parentNode.insertBefore(newScriptElement,
    rootScriptElement)})(window,document,"script","https://cdp-cdn.tenmax.io/js/loader.js","wbq");

    wbq('init', '6cf079c0-8100-42ac-8c46-009f2054b43d');
    wbq('track', 'PageView');
    
    ;


      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-968891775');
    
  ;


    $(document).on('click', '#sf_popup_ad', function(e) {
        $(this).css({
            width: 0,
            height: 0
        }).hide(0);
    });
    ;


                        $('input[name="q"]').on('keydown blur',function(){
                            $('input[name="keywords"]').val($('input[name="q"]').val());
                        });
                    ;


                    function goSearch_home_tag ( keyword ) {
                        if ( typeof(keyword) != 'undefined' && keyword != '' ) {
                            location.href = '/group_search?keywords=' + keyword ;
                        }
                    }
                ;


                $(function(){

                    $('.topheader__search-openbtn').on('click',function(){
                        $('.topheader__search').toggleClass('topheader__search--open');
                    });

                    $('.topheader__search-closebtn').on('click',function(){
                        $('.topheader__search').toggleClass('topheader__search--open');
                    });

                    $('.topheader__menu-openbtn').on('click',function(){
                        $('.topheader__menu').toggleClass('topheader__menu--mobileopen');
                    });

                });
            ;


                $.ajax({
                    url: '/api/menu/getMenuList',
                    type: 'get',
                    error : function() {
                        console.log('撈取Menu清單資料失敗...[0]');
                    } ,
                    success : function ( response ) {
                        $('#header-menu__ajax').html( response );
                    }
                });
            ;

 
                function isMobile() {
                    var userAgentInfo = navigator.userAgent;
                    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];
                    var mobile_flag = false;

                    //根據userAgent判斷是否是手機
                    for (var v = 0; v < mobileAgents.length; v++) {
                        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
                            mobile_flag = true;
                            break;
                        }
                    }
                    var screen_width = window.screen.width;
                    var screen_height = window.screen.height;    
                    //根據屏幕分辨率判斷是否是手機
                    if(screen_width < 500 && screen_height < 800){
                        mobile_flag = true;
                    }
                    return mobile_flag;
                }
                var mobile_flag = isMobile(); // true為手機端，false為PC端
          
           
            ;


                    var tikiCode = '4306910';

                    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
                    let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e));
                    if (isMobileDevice) {
                        tikiCode = '4306909';
                    }
                    $('#compass-fit-').attr("id", "compass-fit-" + tikiCode);
                    (function() {
                        var _lgy_lw = document.createElement("script");
                        _lgy_lw.type = "text/javascript";
                        _lgy_lw.charset = "UTF-8";
                        _lgy_lw.async = true;
                        _lgy_lw.src = "https://nt.compass-fit.jp/lift_widget.js?adspot_id=" + tikiCode;
                        var _lgy_lw_0 = document.getElementsByTagName("script")[0];
                        _lgy_lw_0.parentNode.insertBefore(_lgy_lw, _lgy_lw_0);
                    })();
                ;


    is_lock = 'N';
;



    function loading_cart_item_html () {
        $.ajax({
            url: '/api/nocache/header_topbar',
            type: 'post',
            dataType: 'json',
            error : function () {
            //    console.log('系統忙碌中!請稍後再試');
            } ,
            success : function ( response ){
                
                var sCheckoutPage = 'checkout';
                    sCheckoutPage = sCheckoutPage != "" ? sCheckoutPage: "checkout";

                var replace_html = '';
                if ( response['type'] == 'A' ) {
                    replace_html = '<a class="topbar__btn topbar__btn--knowledge" href="/book/bt_knowlodge_list/80434"></a>'+
                    '<a class="topbar__btn topbar__btn--app" href="https://businesstoday.page.link/3Pja" target="_blank"></a>'+
                    '<a class="topbar__btn topbar__btn--fb" href="https://www.facebook.com/BToday/" target="_blank"></a>'+
                    '<a class="topbar__btn topbar__btn--lineat" href="https://line.me/R/ti/p/%40btoday" target="_blank"></a>'+
                    '<a class="topbar__btn topbar__btn--book" href="/subscription"></a> '+
                    '<a class="topbar__btn topbar__btn--member" href="/dashboard"></a>';

                    if (response['iAuotOrderCount'] > 0) {
                        replace_html+= 
                        '<a class="topbar__btn topbar__btn--pay" href="/checkout_staging/auto_order_list"><span class="topbar__cart-count">'+response['iAuotOrderCount']+'</span></a>';
                    }

                    replace_html+= 
                    '<a class="topbar__cart topbar__cart--hasitem" href="/'+ sCheckoutPage +'"><span class="topbar__cart-count">'+response['order_total']+'</span></a>'+
                    '<a class="topbar__btn topbar__btn--logout" href="/logout"></a>' ;
                }

                if ( response['type'] == 'B' ) {
                    replace_html = '<a class="topbar__btn topbar__btn--knowledge" href="/book/bt_knowlodge_list/80434"></a>'+
                    '<a class="topbar__btn topbar__btn--app" href="https://businesstoday.page.link/3Pja" target="_blank"></a>'+
                    '<a class="topbar__btn topbar__btn--fb" href="https://www.facebook.com/BToday/" target="_blank"></a>'+
                    '<a class="topbar__btn topbar__btn--lineat" href="https://line.me/R/ti/p/%40btoday" target="_blank"></a>'+
                    '<a class="topbar__btn topbar__btn--book" href="/subscription"></a>'+
                        '<a class="topbar__cart topbar__cart--hasitem" href="/'+ sCheckoutPage +'"><span class="topbar__cart-count">'+response['order_total']+'</span></a>'+
                        '<a class="topbar__btn topbar__btn--login" href="/login"></a>';
                }

                $('.topbar__social').html(replace_html);
            }
        });
    }
    loading_cart_item_html();
;



    function set_unlock () 
    {
        setTimeout(function(){ 
            $('.pageloading').css('display','none');
            is_lock = 'N';
        }, 300);
    }

    function plus_quantity (id,page) {       
        if ( is_lock == 'N' ) { 
            is_lock = 'Y';
            var number = $('#'+id).val();
            $('#'+id).val( parseInt(number) + 1 );
            var type = $('#'+id).attr('data-cart-type');
            var cases = $('#'+id).attr('data-cart-cases');
            var product_id = $('#'+id).attr('data-product-id');
            var quantity = $('#'+id).val();
            var market_id = $('#'+id).attr('data-market-id');          
            $('.pageloading').css('display','');  
            change_market_item(type,cases,product_id,quantity,market_id,page);
        }
    }    
    function less_quantity (id,page) {
        var number = $('#'+id).val();
        var current_number = parseInt(number) ; 
        if(page == 'shopping' && current_number ==1 ){
            var product_name = $(event.target).parents('.new-cart__item').find(".new-cart__name a").html();
            var single_price = $(event.target).parents('.new-cart__item').find(".new-cart__oldprice").html().replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,'');
            var total_price = $(event.target).parents('.new-cart__item').find(".new-cart__price").html().replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,'');
            // alert(single_price);
            // alert(total_price);
            dataLayer.push({ ecommerce: null });
            dataLayer.push({
                'event': 'remove_from_cart',
                'ecommerce': {
                    'value': parseInt(total_price),
                    'currency': 'TWD',   
                    'items': [
                    {
                        'item_name': product_name,
                        'currency': 'TWD', 
                        'price': parseInt(single_price),
                        'quantity': 1
                    }]
                }
            });
        }
        if ( ( current_number - 1 ) >= 0 && is_lock == 'N' ) {
            is_lock = 'Y';
            $('#'+id).val( parseInt(number) - 1 );
            var type = $('#'+id).attr('data-cart-type');
            var cases = $('#'+id).attr('data-cart-cases');
            var product_id = $('#'+id).attr('data-product-id');
            var quantity = $('#'+id).val();
            var market_id = $('#'+id).attr('data-market-id');   
            $('.pageloading').css('display','');         
            change_market_item(type,cases,product_id,quantity,market_id,page);
        }
    }   
    function remove_quantity (type,cases,product_id,quantity,market_id,page) {
        if ( is_lock == 'N' ) { 
            is_lock = 'Y';
            var product_name = $(event.target).parents('.new-cart__item').find(".new-cart__name a").html();
            var product_qty = $(event.target).parents('.new-cart__item').find(".new-cart__qty input").val();
            var single_price = $(event.target).parents('.new-cart__item').find(".new-cart__oldprice").html().replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,'');
            var total_price = $(event.target).parents('.new-cart__item').find(".new-cart__price").html().replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,'');
            
            dataLayer.push({ ecommerce: null });
            dataLayer.push({
                'event': 'remove_from_cart',
                'ecommerce': {
                    'value': parseInt(total_price),
                    'currency': 'TWD',   
                    'items': [
                    {
                        'item_name': product_name,
                        'currency': 'TWD', 
                        'price': parseInt(single_price),
                        'quantity': parseInt(product_qty)
                    }]
                }
            });
            $('.pageloading').css('display','');
            change_market_item(type,cases,product_id,quantity,market_id,page);
        }
    }
    function change_market_item_by_Z_market (type,cases,product_id,market_id) {
        var quantity = $('#quantity').val();
        change_market_item(type,cases,product_id,quantity,market_id,'single_product_page');
    }
    function change_market_item (type,cases,product_id,quantity,market_id,page) {

        var post_data = {
            'type' : type , 
            'cases' : cases , 
            'product_id' : product_id , 
            'quantity' : quantity , 
            'market_id' : market_id 
        }

        if ( type == 'A' ) {
            $.post('https://www.businesstoday.com.tw/api2/cart_A/add_market_order',post_data,function(response){
                if ( typeof(response['status']) != 'undefined' ) {
                    if ( response['status'] == '1' ) {
                        set_unlock();
                    } else if ( response['status'] == '0' ) {
                        alert( response['message'] );
                        set_unlock();
                    }
                }                                
                if ( typeof(page) != 'undefined' && page == 'shopping' ) {
                    $.get('https://www.businesstoday.com.tw/loading/checkout_shopping',function(new_html){
                        $('[data-ajax="shopping"]').html(new_html);
                    })
                } else if ( typeof(page) != 'undefined' && page == 'single_product_page' ) {
                    alert('加入購物車成功');
                    window.location.href = '/checkout';
                } else {
                    load_market_prompt(type);
                }
                loading_cart_item_html();
            }) 
        }
        if ( type == 'B' ) {
            $.post('https://www.businesstoday.com.tw/api2/cart_B/add_market_order',post_data,function(response){
                if ( typeof(response['status']) != 'undefined' ) {
                    if ( response['status'] == '1' ) {
                        set_unlock();
                    } else if ( response['status'] == '0' ) {
                        alert( response['message'] );
                        set_unlock();
                    }
                }                                
                if ( typeof(page) != 'undefined' && page == 'shopping' ) {
                    $.get('https://www.businesstoday.com.tw/loading/checkout_shopping',function(new_html){
                        $('[data-ajax="shopping"]').html(new_html);
                    })
                } else if ( typeof(page) != 'undefined' && page == 'single_product_page' ) {
                    alert('加入購物車成功');
                    window.location.href = '/checkout';                    
                } else {
                    load_market_prompt(type);
                }
                loading_cart_item_html();
            }) 
        }        
        if ( type == 'C' ) {
            $.post('https://www.businesstoday.com.tw/api2/cart_C/add_market_order',post_data,function(response){
                if ( typeof(response['status']) != 'undefined' ) {
                    if ( response['status'] == '1' ) {
                        set_unlock();
                    } else if ( response['status'] == '0' ) {
                        alert( response['message'] );
                        set_unlock();
                    }
                }                
                if ( typeof(page) != 'undefined' && page == 'shopping' ) {
                    $.get('https://www.businesstoday.com.tw/loading/checkout_shopping',function(new_html){
                        $('[data-ajax="shopping"]').html(new_html);
                    })
                } else if ( typeof(page) != 'undefined' && page == 'single_product_page' ) {
                    alert('加入購物車成功');
                    window.location.href = '/checkout';                    
                } else {
                    load_market_prompt(type);
                }
                loading_cart_item_html();
            }) 
        } 
        if ( type == 'Z' ) {
            $.post('https://www.businesstoday.com.tw/api2/cart_Z/change_order',post_data,function(response){
                if ( typeof(response['status']) != 'undefined' ) {
                    if ( response['status'] == '1' ) {
                        set_unlock();
                    } else if ( response['status'] == '0' ) {
                        alert( response['message'] );
                        set_unlock();
                    }
                }                
                if ( typeof(page) != 'undefined' && page == 'shopping' ) {
                    $.get('https://www.businesstoday.com.tw/loading/checkout_shopping',function(new_html){
                        $('[data-ajax="shopping"]').html(new_html);
                    })
                } else {
                    load_market_prompt(type);
                }
                loading_cart_item_html();
            }) 
        }         
       
    }

    function load_market_prompt ( type )
    {
        var market_id = $('#market_id').val();

        if ( typeof(type) != 'undefined' && typeof(market_id) != 'undefined' ) {
            if ( type == 'A' ) {
                $.get('https://www.businesstoday.com.tw/loading/special_price_prompt?market_id='+market_id,function(new_html){
                    $('[data-ajax="special_price"]').html(new_html);
                })
            } else if ( type == 'B' ) {
                $.get('https://www.businesstoday.com.tw/loading/off_price_prompt?market_id='+market_id,function(new_html){
                    $('[data-ajax="off_price"]').html(new_html);
                })
            } else if ( type == 'C' ) {
                $.get('https://www.businesstoday.com.tw/loading/feeback_point_prompt?market_id='+market_id,function(new_html){
                    $('[data-ajax="feeback_point"]').html(new_html);
                })
            }
        }
    }

                        
    function change_subscription_present ( object , type ) {
        if ( is_lock == 'N' ) { 
            var post_data = {
                'market_id'  : $(object).attr('data-market-id') , 
                'detail_id'  : $(object).attr('data-detail-id') , 
                'subscription_id' : $(object).attr('data-id') , 
                'present_id' : $(object).find('option:selected').val() 
            }
            $('.pageloading').css('display','');

            var action_url = '';
            if ( type == 'Z' ) {
                action_url = 'https://www.businesstoday.com.tw/api2/cart_Z/change_order_subscription_present';
            } else if ( type == 'A' ) {
                action_url = 'https://www.businesstoday.com.tw/api2/cart_A/change_order_subscription_present';
            } else if ( type == 'B' ) {
                action_url = 'https://www.businesstoday.com.tw/api2/cart_B/change_order_subscription_present';
            } else if ( type == 'C' ) {
                action_url = 'https://www.businesstoday.com.tw/api2/cart_C/change_order_subscription_present';
            }

            $.post(action_url,post_data,function(response){
                if ( typeof(response['status']) != 'undefined' ) {
                    if ( response['status'] == '1' ) {
                        set_unlock();
                        loading_cart_item_html();
                        $.get('https://www.businesstoday.com.tw/loading/checkout_shopping',function(new_html){
                            $('[data-ajax="shopping"]').html(new_html);
                        })                                            
                    } else if ( response['status'] == '0' ) {
                        alert( response['message'] );
                        set_unlock();
                    }
                }                                      
            });
        }
    }     
    function add_coupon ( coupon_number = '' , cases = '' ) {
        if ( is_lock == 'N' ) {
            is_lock = 'Y';
            $('.member-coupon__note--error').hide();
            $('.new-discount__note').hide();
            var post_data = { 'coupon_number' : coupon_number }
            $.post('https://www.businesstoday.com.tw/dashboard/coupon/add_customer_coupon',post_data,function(response){
                if ( typeof(response['status']) != 'undefined' ) {                    
                    if ( response['status'] == '1') {
                        if ( cases == 'dashboard' ) {
                            alert( response['message'] );
                            location.reload();
                        } else if ( cases == 'checkout' ) {
                            location.reload();
                        }                        
                    } else if ( response['status'] == '0') {
                        alert( response['message'] );
                        is_lock = 'N';
                        $('.new-discount__note').show();
                        $('.member-coupon__note--error').show();
                    }
                }
            })
        } 
    }
    function send_coupon ( coupon_number = '' , cases = '', coupon_id = '') {
        if ( is_lock == 'N' ) {
            if ( cases == 'checkout' && coupon_number == '' ) {
                alert('請輸入折價券');
            } else {
                is_lock = 'Y';
                var post_data = {
                    'coupon_number' : coupon_number, 
                    'coupon_id' : coupon_id,                
                }

                $.ajax({
                   
                    url: 'https://www.businesstoday.com.tw/api/shopping/addOrderCoupon',
                    type: "POST", 
                    data : post_data,
                    beforeSend: function() {
                        $('.pageloading').css('display','');
                    },
                    error : function () {
                        $('.pageloading').css('display','none');
                        alert('系統忙碌中!請稍後再試');
                    },
                    timeout: 100 * 1000,
                }).done(function(response) {
                    $('.pageloading').css('display','none');
                    if ( typeof(response['status']) != 'undefined' ) {
                        alert( response['message'] );
                        if ( response['status'] == '1' ) { 
                            if ( cases == 'checkout' ) {
                                is_lock = 'N';
                                add_coupon( coupon_number , 'checkout' );
                            } else {
                                location.reload();    
                            }                        
                        } else if ( response['status'] == '0' ) {
                            is_lock = 'N';
                            if (response['aCouponList'].length > 0) {
                                var viewHtml = get_choice_coupon_view (response['aCouponList']);
                                $("#choice_coupon").html(viewHtml);
                            }
                        } 
                    }
                });

                /*
                $.post('https://www.businesstoday.com.tw/api/shopping/addOrderCoupon',post_data,function(response){
                    if ( typeof(response['status']) != 'undefined' ) {
                        alert( response['message'] );
                        if ( response['status'] == '1' ) { 
                            if ( cases == 'checkout' ) {
                                is_lock = 'N';
                                add_coupon( coupon_number , 'checkout' );
                            } else {
                                location.reload();     
                            }                        
                        } else if ( response['status'] == '0' ) {
                            is_lock = 'N';
                            if (response['aCouponList'].length > 0) {
                                var viewHtml = get_choice_coupon_view (response['aCouponList']);
                                $("#choice_coupon").html(viewHtml);
                            }
                        } 
                    }
                })
                */
            }
        }
    } 

    function send_coupon_id(coupon_id) {
        $('#coupon_id').val(coupon_id);
        send_coupon('', '', coupon_id);
    }
   
    function get_choice_coupon_view (aCouponList) {
        var h = '';
        h+='<div class="new-coupon__list-title">';
        h+=     '<font color="red">折價卷代碼 '+ aCouponList[0]['coupon_number'] + '對應多個活動，請選擇要哪個折價活動：</font>';    
        h+=     '<input type="hidden" id="coupon_id" value="">';           
        h+='</div>';          
        h+='<div class="new-coupon__list-box">';


        $.each(aCouponList, function(i, aCoupon) {
        
            h+='<label class="new-coupon__item';
                if (aCoupon['definition'] == '2') {
                   h+=' new-coupon__item--repeat '; 
                }
            h+='>';

            h+='<input type="radio" name="coupon_number_selected" onclick="send_coupon_id('+
                 aCoupon["coupon_id"]+')">';

            h+='<div class="new-coupon__item-box">';
            h+='    <div class="new-coupon__item-detail">';
            h+='        <div class="new-coupon__item-amount">';

                            if (aCoupon['discount_mode'] == '1') {
                                h+=(aCoupon['discount_number']/10) + '折';                
                            } else if (aCoupon['discount_mode'] == '2') {
                                h+='$' + aCoupon['discount_number'] ;
                            }
                         
            h+='        </div>';

            h+='         <div class="new-coupon__item-info">';
            h+='            <div class="new-coupon__item-name">';

                                if (aCoupon['trigger_mode'] == '1') {
                                    h+='消費滿' + aCoupon['trigger_mode_number']+'元' ;
                                } else if (aCoupon['trigger_mode'] == '2') {
                                    h+='消費數量達' + aCoupon['trigger_mode_number']+'個品項' ;
                                } 

                                if (aCoupon['discount_mode'] == '1') {
                                    h+='<span>打' + (aCoupon['discount_number']/10)+'折</span>' ;
                                } else if (aCoupon['discount_mode'] == '2') {
                                    h+='<span>現折' + aCoupon['discount_number']+'元</span>' ;
                                } else if (aCoupon['discount_mode'] == '3') {
                                    h+='<span>現折' + aCoupon['discount_number']+'元(同商品只能扣一次)</span>' ;
                                } else if (aCoupon['discount_mode'] == '4') {
                                    h+='<span>現折' + aCoupon['discount_number']+'元(同購物車只能扣一次)</span>' ;
                                }
                                /*
                                if (aCoupon['trigger_mode'] == '1') {
                                    h+='消費滿' + aCoupon['trigger_mode_number']+'元' ;
                                    if (aCoupon['discount_mode'] == '1') {
                                        h+='<span>打' + aCoupon['discount_number']+'折</span>' ;
                                    } else if (aCoupon['discount_mode'] == '2') {
                                        h+='<span>現折' + aCoupon['discount_number']+'元</span>' ;
                                    }
                                } else if (aCoupon['trigger_mode'] == '2') {
                                    h+='消費數量達' + aCoupon['trigger_mode_number']+'個品項' ;
                                    if (aCoupon['discount_mode'] == '1') {
                                        h+='<span>打' + aCoupon['discount_number']+'折</span>' ;
                                    } else if (aCoupon['discount_mode'] == '2') {
                                        h+='<span>現折' + aCoupon['discount_number']+'元</span>' ;
                                    }
                                }
                                */

            h+='            </div>';
            h+='            <div class="new-coupon__item-time">';
            h+='                <font size = "3">活動名稱 :'+ aCoupon['name']+ '</font><br>';                                       
            h+='                有效期限 :'+ aCoupon['start_date_time']
                                          + ' ~ '
                                          + aCoupon['end_date_time'];
            h+='            </div>';
            h+='            <div class="new-coupon__item-repeat">';
                                if (aCoupon['definition'] == "1") {
                                    h+='不可重複使用';
                                } else if (aCoupon['definition'] == "2") {
                                    h+='可重複使用';
                                }                    

                                
            h+='            </div>';
            h+='        </div>';
            h+='    </div>';

            h+='    <div class="new-coupon__item-note">';
            h+=         aCoupon['introduction']; //.replace(/\n/g,"<br>")
            h+='    </div>';
            h+='</div>';
            h+='</label>';
          
        });

        h+='</div>';
        return h;
    }
    
    function send_point () {
        if ( is_lock == 'N' ) {
            is_lock = 'Y';
            var behavior = $('#point_action').prop('checked') ? 'Y' : 'N' ; 
            var post_data = {
                'behavior' : behavior
            }
            $.post('https://www.businesstoday.com.tw/api/shopping/useOrderPoint',post_data,function(response){
                if ( typeof(response['status']) != 'undefined' ) {
                    alert( response['message'] );
                    if ( response['status'] == '1' ) {
                        location.reload();
                    } else if ( response['status'] == '0' ) {
                        is_lock = 'N';
                    }

                }
            })
        }
    }                       
;



    function get_customer_order_total () {
        $.ajax({
            url: '/api/shopping/getOrderTotal',
            type: 'post',
            dataType: 'json',
            async : false ,
            error : function() {
                console.log('系統忙碌中!請稍後再試');
            } ,
            success : function ( response ){
                $('span.topbar__cart-count').html(response['order_total']);
            }
        });
    }

   function add_book ( book_id , ga_send = 0) {
        if ( $('[name="gifts"]').size() == '1' ) {
            var gifts = [];
            if ( $('[name="gifts"]:checked').size() == '1' ) {
                gifts[0] = $('[name="gifts"]:checked').val();
            }
        } else {
            var gifts = [];
            var object = $('[name="gifts"]:checked');
            for ( var i = 0 ; i < object.size() ; i++ ) {
                if ( gifts == '' ) {
                    gifts = [];
                }
                gifts.push( $(object).eq(i).val() );
            }
        }
        var quantity = $('#quantity').val();
        $.ajax({
            url: '/api/shopping/addBook',
            type: 'post',
            data: { 'book_id' : book_id , 'quantity' : quantity , 'situation' : 'single' , 'gifts' : gifts } ,
            dataType: 'json',
            async : false ,
            error : function() {
                console.log('系統忙碌中!請稍後再試');
            } ,
            success : function ( response ){

                alert( response['message'] );
                get_customer_order_total();
                if ( response['status'] == '1' ) {
                    if(ga_send == 1){
                            // var product_name = $("a:focus").attr('data-product-name');
                            // var product_price = parseInt($("a:focus").attr('data-product-price').replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,''));
                            var product_name = $("#buy_"+book_id+"").data('product-name');
                            var product_price = $("#buy_"+book_id+"").data('product-price');
                            product_price = product_price.toString();
                            product_price = parseInt(product_price.replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,'')); 
                            // alert(product_name);
                            // alert(product_price);
                            dataLayer.push({ ecommerce: null });
                            dataLayer.push({
                                'event': 'add_to_cart', 
                                'ecommerce': {
                                    'currency': 'TWD',                             
                                    'items': [{                         
                                        'item_name': product_name, 
                                        'price': product_price,
                                        'currency': 'TWD'
                                    }]
                                }   
                            });
                    }
                    //return false;
                    window.location.href = '/checkout';
                }
            }
        });
   }

   function quick_add_book ( book_id , href , ga_send = 0) {

        var customer_token = $('#customer_token').val();
        $.ajax({
            url: '/api/shopping/addBook',
            type: 'post',
            data: { 'book_id' : book_id , 'quantity' : 1 , 'situation' : 'list' } ,
            dataType: 'json',
            async : false ,
            error : function() {
                console.log('系統忙碌中!請稍後再試');
            } ,
            success : function ( response ){

                if ( response['go_page_detail'] == 'Y' ) {
                    var msg = confirm( response['message'] );
                    if ( msg == true ) {
                        location.href = href  ;
                    }
                } else {
                    alert( response['message'] );
                    get_customer_order_total();
                    if ( response['status'] == '1' ) {
                        if(ga_send == 1){
                            // var product_name = $("a:focus").attr('data-product-name');
                            // var product_price = parseInt($("a:focus").attr('data-product-price').replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,''));
                            var product_name = $("#buy_"+book_id+"").data('product-name');
                            var product_price = $("#buy_"+book_id+"").data('product-price');
                            product_price = product_price.toString();
                            product_price = parseInt(product_price.replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,'')); 
                            // alert(product_name);
                            // alert(product_price);
                            dataLayer.push({ ecommerce: null });
                            dataLayer.push({
                                'event': 'add_to_cart', 
                                'ecommerce': {
                                    'currency': 'TWD',                             
                                    'items': [{                         
                                        'item_name': product_name, 
                                        'price': product_price,
                                        'currency': 'TWD'
                                    }]
                                }   
                            });
                        }
                        //return false;
                        window.location.href = '/checkout';
                    }
                }

            }
        });
   }

   function add_subscription ( subscription_id , source=null, ga_send = 0) {
        var quantity = $('#quantity').val();
        var customer_token = $('#customer_token').val();
        var rid = get_url_parameter('rid');
        var present_id = $('[name="present_id"]:checked').val();
        if(source == null){
            var source = '';
        }
        var sourceurl;
        if(source != null && source != ""){
            sourceurl = '?source=' + source;
        }
        $.ajax({
            url  : '/api/shopping/addSubscription',
            type : 'post',
            data : { 'subscription_id' : subscription_id , 'quantity' : quantity , 'situation' : 'single' , 'present_id' : present_id , 'rid' : rid , 'source' : source} ,
            dataType : 'json',
            async : false ,
            error : function() {
                console.log('系統忙碌中!請稍後再試');
            } ,
            success : function ( response ){
                alert( response['message'] );
                get_customer_order_total();
                if ( response['status'] == '1' ) {
                    if(ga_send == 1){
                            // var product_name = $("a:focus").attr('data-product-name');
                            // var product_price = parseInt($("a:focus").attr('data-product-price'));
                            var product_name = $("#buy_"+subscription_id+"").data('product-name');
                            var product_price = $("#buy_"+subscription_id+"").data('product-price');
                            product_price = product_price.toString();
                            product_price = parseInt(product_price.replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,''));
                            // alert(product_name);
                            // alert(product_price);
                            dataLayer.push({ ecommerce: null });
                            dataLayer.push({
                                'event': 'add_to_cart', 
                                'ecommerce': {
                                    'currency': 'TWD',                             
                                    'items': [{                         
                                        'item_name': product_name, 
                                        'price': product_price,
                                        'currency': 'TWD'
                                    }]
                                }   
                            });
                    }
                    //return false;
                    window.location.href = '/checkout' ;
                }
            }
        });
   }

   function add_subscription_staging ( subscription_id ) {
        var rid = get_url_parameter('rid');
        $.ajax({
            url: '/api/staging/addSubscription',
            type: 'post',
            data: { 'subscription_id' : subscription_id , 'quantity' : 1 , 'situation' : 'single' , 'rid' : rid } ,
            dataType: 'json',
            async : false ,
            error : function() {
                console.log('系統忙碌中!請稍後再試');
            } ,
            success : function ( response ){
                alert( response['message'] );
                get_customer_order_total();
                if ( response['status'] == '1' ) {
                    window.location.href = '/checkout_staging';
                }
            }
        });
   }   

   function quick_add_subscription ( subscription_id , href ) {
        var customer_token = $('#customer_token').val();
        $.ajax({
            url: '/api/shopping/addSubscription',
            type: 'post',
            data: { 'subscription_id' : subscription_id , 'quantity' : 1 , 'situation' : 'list'  } ,
            dataType: 'json',
            async : false ,
            error : function() {
                alert('系統忙碌中!請稍後再試');
            } ,
            success : function ( response ){

                if ( response['go_page_detail'] == 'Y' ) {
                    var msg = confirm( response['message'] );
                    if ( msg == true ) {
                        location.href = href  ;
                    }
                } else {
                    alert( response['message'] );
                    get_customer_order_total();
                    if ( response['status'] == '1' ) {
                        window.location.href = '/checkout';
                    }
                }

            }
        });
   }

   function quick_add_subscription_staging ( subscription_id , href , source=null, ga_send = 0) {
        var sourceurl;
        if(source != null && source != ""){
            sourceurl = '?source=' + source;
        }
    
        $.ajax({
            url: '/api/staging/addSubscription',
            type: 'post',
            data: { 'subscription_id' : subscription_id , 'quantity' : 1 , 'situation' : 'list', 'source' : source } ,
            dataType: 'json',
            async : false ,
            error : function() {
                alert('系統忙碌中!請稍後再試');
            } ,
            success : function ( response ){

                if ( response['go_page_detail'] == 'Y' ) {
                    var msg = confirm( response['message'] );
                    if ( msg == true ) {
                        location.href = href  ;
                    }
                } else {
                    alert( response['message'] );
                    //get_customer_order_total();
                    if(response['status'] == '500'){
                        window.location.href = '/login';
                    }
                    if ( response['status'] == '1' ) {
                        if(ga_send == 1){
                            // var product_name = $("a:focus").attr('data-product-name');
                            // var product_price = parseInt($("a:focus").attr('data-product-price'));
                            var product_name = $("#buy_"+subscription_id+"").data('product-name');
                            var product_price = $("#buy_"+subscription_id+"").data('product-price');
                            product_price = product_price.toString();
                            product_price = parseInt(product_price.replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,''));
                            // alert(product_name);
                            // alert(product_price);
                            dataLayer.push({ ecommerce: null });
                            dataLayer.push({
                                'event': 'add_to_cart', 
                                'ecommerce': {
                                    'currency': 'TWD',                             
                                    'items': [{                         
                                        'item_name': product_name, 
                                        'price': product_price,
                                        'currency': 'TWD'
                                    }]
                                }   
                            });
                        }
                        //return false;
                        window.location.href = '/checkout_staging' ;
                    }
                }

            }
        });
   }   

   function quick_add_subscription2 ( subscription_id , trigger_click , source=null, ga_send = 0) {
        var customer_token = $('#customer_token').val();
        if(source == null){
            var source = '';
        }
        var sourceurl;
        if(source != null && source != ""){
            sourceurl = '?source=' + source;
        }
        
        $.ajax({
            url: '/api/shopping/addSubscription',
            type: 'post',
            data: { 'subscription_id' : subscription_id , 'quantity' : 1 , 'situation' : 'list' , 'source' : source} ,
            dataType: 'json',
            async : false ,
            error : function() {
                console.log('系統忙碌中!請稍後再試');
            } ,
            success : function ( response ){

                if ( response['go_page_detail'] == 'Y' ) {
                    var msg = confirm( response['message'] );
                    if ( msg == true ) {
                        $('['+trigger_click+']').click();
                    }
                } else {
                    alert( response['message'] );
                    //get_customer_order_total();
                    if ( response['status'] == '1' ) {
                        if(ga_send == 1){
                            // var product_name = $("a:focus").attr('data-product-name');
                            // var product_price = parseInt($("a:focus").attr('data-product-price'));
                            var product_name = $("#buy_"+subscription_id+"").data('product-name');
                            var product_price = $("#buy_"+subscription_id+"").data('product-price');
                            product_price = product_price.toString();
                            product_price = parseInt(product_price.replace(/,/g,'').replace(/ /g,'').replace(/NT/g,'').replace(/\$/g,''));
                            // alert(product_name);
                            // alert(product_price);
                            dataLayer.push({ ecommerce: null });
                            dataLayer.push({
                                'event': 'add_to_cart', 
                                'ecommerce': {
                                    'currency': 'TWD',                             
                                    'items': [{                         
                                        'item_name': product_name, 
                                        'price': product_price,
                                        'currency': 'TWD'
                                    }]
                                }   
                            });
                        }
                        //return false;
                        window.location.href = '/checkout' ;
                    }
                }

            }
        });
   }

    function get_url_parameter (val) {
        var uri = window.location.search;
        var re = new RegExp("" +val+ "=([^&?]*)", "ig");
        return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):'');
    }

   function add_lecture ( lecture_id ) {

        $.ajax({
            url: '/api/shopping/addLecture',
            type: 'post',
            data: { 'lecture_id' : lecture_id , 'quantity' : 1 } ,
            dataType: 'json',
            async : false ,
            error : function() {
                console.log('系統忙碌中!請稍後再試');
            } ,
            success : function ( response ){

                alert( response['message'] );
                get_customer_order_total();
                if ( response['status'] == '1' ) {
                    window.location.href = '/checkout';
                }
                
            }
        });
   }    

;


    $(function() {
        var $body = $('body');
        var latest_side_slider = $('.latest__side-slider');
        var latest_tab = $('.latest__tab:not(.latest__tab--active)');
        var latest_news_block = $('.latest__news-block');
        var latest_news_slider = $('.latest__news-slider');

        var latest_news = $('#latest--news');
        var latest_news_item = $('#latest--news .latest__news-item');
        var latest_news_count = parseInt(latest_news_item.length / 6);
        var latest_news_lastcount = latest_news_item.length % 6;
        var latest_news_ary = [];

        var latest_finance = $('#latest--finance');
        var latest_finance_item = $('#latest--finance .latest__news-item');
        var latest_finance_count = parseInt(latest_finance_item.length / 6);
        var latest_finance_lastcount = latest_finance_item.length % 6;
        var latest_finance_ary = [];

        var sold_slider = $('.sold__block-slider');
        var sold_tab = $('.sold__tab:not(.sold__tab--active)');
        var sold_block = $('.sold__block');
        var weekly_slider = $('.weekly__slider');

        $body.addClass('index__body');

        latest_side_slider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true
        });

        latest_tab.on('click', function() {
            $(this).addClass('latest__tab--active').siblings().removeClass('latest__tab--active');
            latest_news_block.eq($(this).index()).addClass('latest__news-block--open').siblings().removeClass('latest__news-block--open');
        }).eq(0).trigger('click');

        // --- 焦點新聞六個一組 start ---
        // 把item拉出來打成array
        for (var i = 0; latest_news_item.length > i; i++) {
            var html_string = latest_news_item.eq(i).prop('outerHTML');
            latest_news_ary.push(html_string);
        }

        // 清空容器
        latest_news.html('');

        // 判斷item商數與餘數重新把內容分組後塞回去(數量我是寫死的)
        for (var i = 0; latest_news_count >= i; i++) {
            if (latest_news_count == i) {
                if (latest_news_lastcount != 0) {
                    latest_news.append('<div class="latest__news-slide"></div>');

                    for (var j = 0; latest_news_lastcount > j; j++) {
                        var nowIndex = j + i * 6,
                            html = latest_news_ary[nowIndex];

                        latest_news.find('.latest__news-slide').eq(i).append(html);
                    }
                }
            } else {
                latest_news.append('<div class="latest__news-slide"></div>');

                for (var j = 0; 6 > j; j++) {
                    var nowIndex = j + i * 6,
                        html = latest_news_ary[nowIndex];

                    latest_news.find('.latest__news-slide').eq(i).append(html);
                }
            }
        }

        // 啟動slick輪播
        latest_news.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: true
        });
        // --- 焦點新聞六個一組 end ---

        // --- 財經時事六個一組 start ---
        // 把item拉出來打成array
        for (var i = 0; latest_finance_item.length > i; i++) {
            var html_string = latest_finance_item.eq(i).prop('outerHTML');
            latest_finance_ary.push(html_string);
        }

        // 清空容器
        latest_finance.html('');

        // 判斷item商數與餘數重新把內容分組後塞回去(數量我是寫死的)
        for (var i = 0; latest_finance_count >= i; i++) {
            if (latest_finance_count == i) {
                if (latest_finance_lastcount != 0) {
                    latest_finance.append('<div class="latest__news-slide"></div>');

                    for (var j = 0; latest_finance_lastcount > j; j++) {
                        var nowIndex = j + i * 6,
                            html = latest_finance_ary[nowIndex];

                        latest_finance.find('.latest__news-slide').eq(i).append(html);
                    }
                }
            } else {
                latest_finance.append('<div class="latest__news-slide"></div>');

                for (var j = 0; 6 > j; j++) {
                    var nowIndex = j + i * 6,
                        html = latest_finance_ary[nowIndex];

                    latest_finance.find('.latest__news-slide').eq(i).append(html);
                }
            }
        }

        // 啟動slick輪播
        latest_finance.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: true
        });
        // --- 財經時事六個一組 end ---

        sold_tab.on('click', function() {
            $(this).addClass('sold__tab--active').siblings().removeClass('sold__tab--active');
            sold_block.eq($(this).index()).addClass('sold__block--open').siblings().removeClass('sold__block--open');
        }).eq(0).trigger('click');

        weekly_slider.slick({
            fade: true
        });

        // 啟動slick輪播
        sold_slider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: false
        });

    });
;


    $.get('https://www.businesstoday.com.tw/api/nocache/home_banner?v=2018', function(home_banner) {
        $('[data-type="banner"]').html(home_banner);
    }).done(function() {
        $('[data-type="banner"]').slick({
            autoplay: true,
            autoplaySpeed: 5000
        });
    });

    $.get('https://www.businesstoday.com.tw/article/get_hot_article/5', function(article) {
        if (typeof(article['data']) != 'undefined' && article['data'].length > 0) {
            var hot_html = '';
            var news_html = '';
            for (var i = 0; i < 6; i++) {
                if (i === 5) {
                    // more button
                    hot_html += '<a href="' + article['data_hot_more'] + '" class="more__btn" style="margin-top: 15px;">查看更多</a>' || '';
                    news_html += '<a href="' + article['data_new_more'] + '" class="more__btn" style="margin-top: 15px;">查看更多</a>' || '';
                    break;
                }
                hot_html += '<a href="' + article['data'][i]['href'] + '" class="latest__list-item">' + '<span>' + (i + 1) + '</span>' + '<h4>' + article['data'][i]['title'] + '</h4></a>';
                news_html += '<a href="' + article['data_new'][i]['href'] + '" class="latest__list-item">' + '<span>' + (i + 1) + '</span>' + '<h4>' + article['data_new'][i]['title'] + '</h4></a>';
            }
            $('[data-type="hot_list"]').html(hot_html);
            $('[data-type="hotnews_list"]').html(news_html);
        }
    });

    $('.latest__list__tab .latest__titlebox').on('click', function() {
        var $this = $(this);
        if ($this.hasClass('active')) return false;
        var target = $this.index();
        $this.addClass('active').siblings().removeClass('active');
        $('.latest__list__tabbox .latest__list-itembox').css('display', 'none').eq(target).css('display', 'block');
    }).eq(0).trigger('click');

    $.get('https://www.businesstoday.com.tw/article/get_hot_news', function(news) {
        if (typeof(news['data']) != 'undefined' && news['data'].length > 0) {
            for (var i = 0; i < news['data'].length; i++) {
                var new_html =
                    '<a href="' + news['data'][i]['hyperlink'] + '" target="' + news['data'][i]['target'] + '" class="eventnews__list">' +
                    '<h4 class="eventnews__list-title">' + news['data'][i]['title'] + '</h4>' +
                    '<p class="eventnews__list-date">' + news['data'][i]['display_date'] + '</p>' +
                    '</a>';
                if ($('[data-type="news"] a').size() == '0') {
                    $('[data-type="news"]').html(new_html);
                } else {
                    $('[data-type="news"] a:last').after(new_html);
                }
            }
        }
    });
