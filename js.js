$(document).ready(function () {
    $('.hideOnLoad').hide();
	console.log("TEST1");
});
$('nav a').click(function () {
	console.log("TEST2");
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