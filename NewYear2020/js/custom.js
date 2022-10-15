	// PRELOADER
$(window).load(function(){
    $('.preloader').fadeOut(1000);  
});

$(function(){

	// WOW ANIMATED 
wow = new WOW({
    mobile: false
});
wow.init();


	// JQUERY PARALLAX 
function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#zoadic').parallax("100%", 0.3);
    $('#celebration').parallax("100%", 0.2);
    $('#dessert').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
}
initParallax();


	// HIDE MOBILE MENU AFTER CLIKING ON A LINK
$('.navbar-collapse a').click(function(){
	$(".navbar-collapse").collapse('hide');
});
	// NIVO LIGHTBOX
$('#zoadic a').nivoLightbox({
	effect: 'fadeScale',
    });
});

	//MULTISLIDER
$('#basicSlider').multislider({
	continuous: true,
	duration: 2000
});
$('#mixedSlider').multislider({
	duration: 750,
	interval: 3000
});

    //CELEBRATION DECORATION 
$(function() {
    $('.next,.perivous').on('click', function() {
        $('#decor>div').each(function() {
            var id = $(this).index();
            if ($(this).is(':visible')) {
                $(this).hide();
                if (id == $('#decor>div').length - 1) {
                    $('#decor>div').eq(0).show();
                } else {
                    $('#decor>div').eq(id + 1).show();
                }
                return false;
            }
        });
    });
});
