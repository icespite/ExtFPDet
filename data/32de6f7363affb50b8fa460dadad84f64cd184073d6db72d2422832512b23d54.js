!function(o){"use strict";jQuery(".post-list").each((function(o){let t=jQuery(this),e=window[t.attr("id")];t.on("click",".load_more",(function(o){o.preventDefault();let a=jQuery(this);a.text("Loading..."),jQuery.post(postListBlockAjax.ajaxUrl,{action:"postListBlock",task:"loadMore",security:postListBlockAjax._nonce,data:e}).done((function(o){""!==o?(a.text("Load more"),t.find(".posts_list").append(o),e.page+=e.paged):a.hide(),e.page>=e.maxPages&&a.hide()})).fail((function(o){a.hide(),console.log("Unable to load more"),console.log(o)}))}))}))}(jQuery);