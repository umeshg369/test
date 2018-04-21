jQuery(document).ready(function($){
	$(".banner-slider").slick({
		dots: false,
		arrows:false,
		infinite: true,
		speed: 300,
		autoplay: false,
		autoplaySpeed: 5000,
		fade: true,
		touchMove: false,
		touchThreshold: 0,
		slidesToShow: 1,
		asNavFor: '.banner-thumb',
    responsive: [
      /*{
          breakpoint: 9999,
          settings: "unslick"
      },*/
      {
	      breakpoint: 800,
	      settings: {
	        dots: false,
					arrows:true,
					infinite: false,
					speed: 300,
					autoplay: false,
					autoplaySpeed: 5000,
					slidesToShow: 2,
			  }
      },
      {
        breakpoint: 741,
        settings: {
          dots: false,
					arrows:true,
					infinite: false,
					speed: 300,
					autoplay: false,
					autoplaySpeed: 5000,
					slidesToShow: 1,
         }
      }
    ]
	});

	$('.banner-thumb').slick({
		autoplay: false,
	  centerMode: true,
	  infinite: true,
	  slidesToShow: 3,
	  asNavFor: '.banner-slider',
	  focusOnSelect: true,
	  touchMove: false,
		touchThreshold: 0,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        slidesToShow: 1
	      }
	    }
	  ]
	});


	$(".step-slider").slick({
		dots: false,
		arrows:false,
		infinite: false,
		speed: 300,
		autoplay: false,
		autoplaySpeed: 5000,
		fade: true,
		touchMove: false,
		touchThreshold: 0,
		slidesToShow: 1,
		asNavFor: '.step-nav'
	});
	$('.step-nav').slick({
		dots: false,
		arrows:false,
		infinite: false,
		autoplay: false,
	  slidesToShow: 5,
	  asNavFor: '.step-slider',
	  focusOnSelect: true,
	  touchMove: false,
		touchThreshold: 0,
		vertical: true,
	});

	$(".features-slider").slick({
		dots: false,
		arrows:false,
		infinite: false,
		speed: 300,
		autoplay: false,
		autoplaySpeed: 5000,
		fade: true,
		touchMove: false,
		touchThreshold: 0,
		slidesToShow: 1,
		asNavFor: '.features-nav'
	});
	$('.features-nav').slick({
		dots: false,
		arrows:false,
		infinite: false,
		autoplay: false,
	  slidesToShow: 7,
	  asNavFor: '.features-slider',
	  focusOnSelect: true,
	  touchMove: false,
		touchThreshold: 0,
		vertical: true,
	});

	var dteNow = new Date();
	var intYear = dteNow.getFullYear();
	$(".coppy-text .year").append(intYear);

	$('nav a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    try{
	    $('html, body').stop().animate({
	    	'scrollTop': $target.offset().top - 85
	    }, 900, 'swing', function () {
	    	window.location.hash = target;
	    });
    }catch(e){}
	});

  $('.video-banner').click(function () {
  	var a = $(this).attr("data-video");
  	$(".video-pop video").attr("src", a);
		$(".video-pop").simplePopup();
		$(".video-pop video").get(0).play();
  });

});