/*
	Initial scripts
 */

$(document).ready(function(){

	var $li = $("#catalog-menu");
	var $menu = $("#catalog-sub-menu");

	$li.hover(
		function(){
			$menu.fadeIn('slow', function() {
				$li.addClass('active-li');
			});
		}
	);

	$menu.mouseleave(function(){
		$(this).fadeOut('fast', function(){});
		$li.removeClass('active-li');
	});


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
