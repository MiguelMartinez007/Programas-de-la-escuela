$(window).scroll(function(event) {
	if ($(this).scrollTop()>10) {
		$('header').css({
			'position':'fixed',
			'top':'0',
			'left':'0'
		});
		// alert($('header').css('height'));
		$('div.contenedor').css({'margin':'80px auto auto auto'});
	}else
	{
		$('header').css({
			'position':'inherit'
		});
		$('div.contenedor').css({'margin':'auto'});
	}
});