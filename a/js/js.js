$(document).ready(function() {
const navOffset = $("#section-menu").offset().top;
$(window).scroll(function(){
	const scrolled = $(this).scrollTop();
	if (scrolled > navOffset) {
		$("#section-menu").addClass("nav-fixed");
	} else if (scrolled < navOffset){
		$("#section-menu").removeClass("nav-fixed");
	}
	console.log(navOffset);
	console.log(scrolled);
});
});