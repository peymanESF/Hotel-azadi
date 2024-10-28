$(document).ready(function () {
		$('.changeLanguage li a').click(function(){
		$(this).siblings('ul').toggleClass('show');
	});
});