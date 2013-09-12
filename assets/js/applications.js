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
});
