// header
const typed = new Typed('.typedStrings', {
	strings: [ 'Front End Web Developer', 'Sports Fanatic', 'Lover of Dad Jokes', 'Coffee Enthusiast' ],
	typeSpeed: 60,
	backSpeed: 40,
	cursor: false,
	loop: true
});

// DOCUMENT READY
$(function() {
	$('.hamburger').on('click', function() {
		$('.menu').fadeIn('slow');
	});
	$('.exit-responsive').on('click', function() {
		$('.menu').fadeOut('slow');
	});
	$('.navMobile.a').on('click', function() {
		$('.menu').fadeOut('slow');
	});
	// w0w js
	new WOW().init({
		mobile: false,
		offset: 50
	});
	// smooth scroll
	$('nav ul li a').smoothScroll({
		speed: 700
	});
	$('.smooth-scroll').smoothScroll({
		speed: 700
	});
});
