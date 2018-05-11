scrollToggle ();

$(window).scroll(function () {
	scrollToggle ();
});

//Helper
function scrollToggle () {
	if(pageYOffset > 100 && innerWidth > 768) {
		$('.main-header').addClass('scrolled');
	}
	else if (pageYOffset > 0 && innerWidth <= 768) {
		$('.main-header').addClass('scrolled');	
	}
	else {
		$('.main-header').removeClass('scrolled');
	}

}
//END Helper