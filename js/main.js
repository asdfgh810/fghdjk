jQuery(document).ready(function ($) {

	
	
	// FEATURE BLOCK
	$(".list-item_alt").not(":first").hide();
	$(".homa .control-item_alt").click(function () {
		$(".homa .control-item_alt").removeClass("item_active").eq($(this).index()).addClass("item_active");
		$(".list-item_alt").hide().eq($(this).index()).addClass('item_active').fadeIn(400)
	});


	// WHY BLOCK
	$('.control-item_alt_2').click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.adv[data-tab="' + id + '"]');

		$('.control-item_alt_2.item_active').removeClass('item_active');
		$(this).addClass('item_active');

		$('.adv.item_active').removeClass('item_active');
		content.addClass('item_active');
	});

	$(".oknoactive").hide();
	$(".openokno").click(function () {
		$(".homa .control-item_alt").removeClass("item_active").eq($(this).index()).addClass("item_active");
		$(".list-item_alt").hide().eq($(this).index()).addClass('item_active').fadeIn(400)
	});
	
	$('.openokno').click(function () {
		$('.okno').addClass('oknoactive');
		
	
	});
	$('.close').click(function () {
		$('.okno').removeClass('oknoactive');
		
	
	});
	

	// NAV SCROLL
	$('.scroll').on('click', function (e) {
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 20
		}, 500);
		e.preventDefault();
	});

	// SCROLL TO TOP

	$(".top").on("click", function () {
		$("html,body").animate({
			scrollTop: 0
		}, 900)
	});

	// Functions
	
	// Animation 
	$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		// $w = $('.slider .slick-slide[data-slick-index='+ nextSlide+']');
		// console.log($w);
		$current = $('.slider .slick-slide[data-slick-index=' + currentSlide + ']');
		$next = $('.slider .slick-slide[data-slick-index=' + nextSlide + ']');

		$current.find('.under-block').css('opacity', '0');
		$current.find('.up-block').css('opacity', '0');
		$current.find('.name_business').css('opacity', '0');
		$next.find('.under-block').css('opacity', '0');
		$next.find('.up-block').css('opacity', '0');
		$next.find('.name_business').css('opacity', '0');



	});

	$('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		$current = $('.slider .slick-slide[data-slick-index=' + currentSlide + ']');
		$current.find('.under-block').animate({
			opacity: 1
		}, 400);
		$current.find('.up-block').animate({
			opacity: 1
		}, 400);
		$current.find('.name_business').animate({
			opacity: 1
		}, 400);
	});


	// popup





});



//menu

function configToggleAnimation() {
	var toggle = document.querySelector('.nav-toggle'),
		nav = document.querySelector('.nav'),
		snap = Snap(document.querySelector('.nav-morph svg')),
		nav_morph = document.querySelector('.nav-morph'),
		path = snap.select('path'),
		reset = path.attr('d'),
		open = nav_morph.getAttribute('data-open'),
		close = nav_morph.getAttribute('data-close'),
		speed = 250,
		speed_back = 800,
		easing = mina.easeinout,
		easing_back = mina.elastic,
		isOpen = false;

	toggle.addEventListener('click', function () {
		// si ouvert on ferme
		if (isOpen) {
			path.stop().animate({
				'path': close
			}, speed, easing, function () {
				path.animate({
					'path': reset
				}, speed_back, easing_back);
				isOpen = false;
			});
			nav.classList.remove('nav--open');
		} else {

			path.stop().animate({
				'path': open
			}, speed, easing, function () {
				path.animate({
					'path': reset
				}, speed_back, easing_back);
				isOpen = true;
			});
			nav.classList.add('nav--open');
		}
	});

}

function initialize() {
	configToggleAnimation();
}

document.addEventListener('DOMContentLoaded', initialize);




