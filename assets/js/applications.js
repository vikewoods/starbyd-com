/*
	Initial scripts
 */

$(document).ready(function(){

	// init menu 
	(function($){
	var $li = $("#catalog-menu");
	var $menu = $("#catalog-sub-menu");

	/*$li.hover(
		function(){
			$menu.fadeIn('slow', function() {
				$li.addClass('active-li');
			});
		}
	);*/



	full_out = false;
	displayed = false;
	$li.mouseenter(function(){
		full_out = false;
		if (!displayed) {
			$menu.fadeIn('slow',function(){displayed = true;$li.addClass('active-li');});
		}
	});
	$li.mouseleave(function(){
		/*$menu.delay(300);
		$li.removeClass('active-li');
		returned = false;*/

		setTimeout(function(){
			if(full_out){
				$menu.fadeOut('fast', function(){displayed = false;});
				$li.removeClass('active-li');
			}
		},150);
		full_out = true;

	});

		$menu.mouseleave(function(){

		setTimeout(function(){
			if(full_out){
				$menu.fadeOut('fast',function(){displayed = false;$li.removeClass('active-li');});
			}
		},150);
		full_out = true;
	});

		$menu.mouseenter(function(){
			full_out = false;
		if (!displayed) {
			$menu.fadeIn('slow',function(){displayed = true;$li.addClass('active-li');});
		}
	});
	})(jQuery);


	/*
	Resize Video
	 */
	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://player.vimeo.com']"),

		// The element that is fluid width
		$fluidEl = $(".video-big");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)

			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	$(window).resize(function() {

		var newWidth = $fluidEl.width();

		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

});
