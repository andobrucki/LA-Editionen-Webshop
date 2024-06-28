var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		600: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
	},
	// Enable swiping on mobile
	touchEventsTarget: 'container',
	simulateTouch: true,
});
