
$('.top-view-box .get-popular').click(function(){
    var type = $(this).data('type');
    var postnum = $(this).data('postnum');
    $(".popular-loading").show();
    $('.get-popular').removeClass('active');
    $(this).addClass('active');
    $.ajax({
        url:  ajax_var.url,
        type: 'POST',
        data: {
            action : 'get_popular_video',
            postnum: postnum,
            type: type
        },
        success: function(data)
        {
            $(".popular-post").html(data);
            $(".popular-loading").hide();
        }
    });

});
