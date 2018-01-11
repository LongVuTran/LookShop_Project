// $('#carousel-example-generic').carousel({
//   interval: 3000
// });

// $('.carosel-control-right').click(function() {
//   $(this).blur();
//   $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
// });
// $('.carosel-control-left').click(function() {
//   $(this).blur();
//   $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
// });

$('.center').slick({
  centerMode: true,
  centerPadding: '6px',
  slidesToShow: 5,
  // slideToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4
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
