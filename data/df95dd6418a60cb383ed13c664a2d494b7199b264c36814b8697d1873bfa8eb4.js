
            $(document).ready(function() {
              var footerHeight = $('#announcement_wrapper').outerHeight();
              $('#announcement_wrapper').css('height', footerHeight + "px");
              $('body').css('padding-bottom', footerHeight + "px");
            });

            function dismissBanner() {
              $('body').css('padding-bottom', "0px");
              $('#announcement_wrapper').css('display','none');
              document.cookie = "banner=dismiss;path=/";
            }
          ;



    $(document).ready(function(){

        //When mouse rolls over
        $(".expand").mouseover(function(){
            $(this).stop().animate({height:'200px',width:'200px',opacity:1});
        });

        //When mouse is removed
        $(".expand").mouseout(function(){
            $(this).stop().animate({height:'100px',width:'100px',opacity:.4});
        });

    });

var z = 11 ;
