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

	$('.toggle-btn').click(function () {
		var target = $(this);
		var selector = $(this).attr('data-select');

		if($(target).hasClass('active')) {
			$(selector).add($(target)).removeClass('active');
			$('.overlay').remove();
		}
		else if($(selector).hasClass('active')){
			$(selector).removeClass('active');
			$('[data-select="'+selector+'"]').removeClass('active');
			$('.overlay').remove();
		} else{
			$(selector).add($(target)).addClass('active');
			if(!$(target).hasClass('no-overlay')) {
				$('<div class="overlay"></div>').click(function() {
			    	$(selector).add($(target)).removeClass('active');
			    	$(this).remove();
			  	}).appendTo($(document.body));
		  	}
		}
	});
	//END Event Handlers

	//Helpers
});