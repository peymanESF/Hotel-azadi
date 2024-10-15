$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	  items: 4,
      rtl: true,
      loop: true,
      dots: true,
      nav: true,
      navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
	  responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:4
		}
	  }
  });
  
});