$(document).ready(function () {
	$('.hideOnLoad').hide();
	$('nav a, a[href="#shows"]').click(function () {
		var active = $('.section:visible');
		var newActive = $(this).attr('href');
		if ($(active).attr('id') != $(newActive).attr('id')) {
			$(active).hide('slide', {
				direction: 'up',
				duration: 500
			});
			$(newActive).delay(500).show('slide', {
				direction: 'up',
				duration: 500
			});
		}
	});
});