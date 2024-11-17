
		function addToCart( subid )
		{
			try
			{
				document.forms['add_to_cart_'+subid].submit();
			}
			catch( e )
			{
			}
		}

		function addToWishlist()
		{
			try
			{
				document.forms['add_to_wishlist'].submit();
			}
			catch( e )
			{
			}
		}
	;



		function ResizeText( errorMargin )
		{
			var containerWidth = $("#header").innerWidth();
			var width= $("#header > .tail").outerWidth();
			$('#header > .main_text').css( {'max-width': containerWidth - width });
		}

		$(window).load(function() {
			ResizeText(0);
		});

		$(window).resize(function() {
			ResizeText(0);
		});
	