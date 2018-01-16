$(document).ready(function() {
	$('.center').slick({
		centerMode: true,
		infinite: true,
		centerPadding: '90px',
		slidesToShow: 4,
		variableWidth: false,
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				arrows: false,
				centerMode: true,
				infinite: true,
				centerPadding: '0px',
				slidesToShow: 3,
				variableWidth: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
		]
	});

	$('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log('beforeChange', currentSlide, nextSlide);
	});
	$('.center').on('afterChange', function(event, slick, currentSlide){
		console.log('afterChange', currentSlide);
	});
});