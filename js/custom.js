$(document).ready(function( ) {
    $('block').each(function() {
	$( this ).prepend('<div class="header"></div>');
	$( this ).find('.header').html($( this ).data('header'));
    });
    $('definition').each(function() {
	$( this ).prepend('<div class="header">Definition</div>');
	$( this ).find('.header').append(' (' + $( this ).data('header') + ')');
    });

});
