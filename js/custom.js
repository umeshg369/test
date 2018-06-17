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
					slidesToShow: 2,
			  }
      },
      {
        breakpoint: 741,
        settings: {
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
	      breakpoint: 1150,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});


	$(".step-slider").slick({
		dots: false,
		arrows:false,
		infinite: true,
		speed: 300,
		autoplay: false,
		autoplaySpeed: 5000,
		touchMove: false,
		touchThreshold: 0,
		centerMode: true,
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

  $(".mobIcon").click(function(){
		$(".top nav").stop().slideToggle();
	});

	$(".accord-btn").each(function () {
		$(this).click(function () {
			if ($(this).hasClass("active")) {
		  	$(this).next().slideUp();
		    $(this).removeClass("active");
		  } else {
	      $(".active").each(function () {
	      	$(this).next().slideUp();
	        $(this).removeClass("active");
	      });
	      $(this).next().slideDown();
	      $(this).addClass("active");
		  }
		  return false;
		});
  });
	function scrollToDiv(element){
		var offset = element.offset();
		var offsetTop = offset.top - 40;
		//console.log(offsetTop);
		$('body,html').animate({
			scrollTop: offsetTop
		}, 500);
	}

	$('.videolib-one, .videolib-two').slick({
		autoplay: false,
	  infinite: true,
	  slidesToShow: 3,
	  touchMove: false,
		touchThreshold: 0,
	  responsive: [
	  	{
	      breakpoint: 1150,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.videolib-slider li').each(function () {
  	$(this).click(function(){
  		$('.videolib-slider li').removeClass("lib-active");
  		$(this).addClass("lib-active");
  		var b = $(this).attr("slide-data");
	  	$(this).parents(".videolib-slider").find('.videolib-detail').each(function () {
  			var c = $(this).attr("slide-data");
  			if ( b == c) {
	  			$('.videolib-detail').fadeOut()
		  		$(this).fadeIn();
	  		}
		  });
  	});
  });

	$(".close-lib-btn").click(function () {
  	$('.videolib-detail').fadeOut()
  });

  $('.video-lib-detail').click(function () {
  	var a = $(this).attr("data-video");
  	$(".video-pop video").attr("src", a);
		$(".video-pop").simplePopup();
		$(".video-pop video").get(0).play();
  });

  $('.tab-data .clickme a').each(function(){
    $(this).click(function(){
	    $(this).parents(".tab-data").find('.clickme a').removeClass('active');
	    $(this).addClass('active');
	    var tagid = $(this).data('tag');
	    $(this).parents(".tab-data").find('.list').removeClass('show-tab');
	    $(this).parents(".tab-data").find('#'+tagid).addClass('show-tab');
	  });
  });

});