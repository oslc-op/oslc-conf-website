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

$(document).ready(function () {
	//Initialization

  //END Initialization

	//Event Handlers
	$('.menu-toggle').click(function(){
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
		$('.main-header').addClass('scrolled');
		if(pageYOffset < 100 && !$(this).hasClass('active'))
			$('.main-header').removeClass('scrolled');
	});

	$('.menu').click(function(){
		$(this).toggleClass('active');
		$('.menu-toggle').toggleClass('active');
	});
	//END Event Handlers

	//Helpers
});