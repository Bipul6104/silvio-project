$(document).ready(function(){
	$('.my-carosol').owlCarousel({
		items:10,
		loop:true,
		dots:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive: {
			767: {
				items: 7
			},
			575: {
				items: 3
			},
			327: {
				items: 1
			},
		},
	});
});
AOS.init();