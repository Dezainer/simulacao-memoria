import $ from 'jquery';

var rotate = true;
var deg = 0;

$(document.body).on('click', '.seta', function () {
	if(rotate){
		deg = 90;
		rotate = false;
	}else{
		deg = 0;
		rotate = true;
	}

	$(this).children().css('transform', 'rotate('+deg+'deg)');
	$(this).parent().parent().find('.inner-list').toggle();
});