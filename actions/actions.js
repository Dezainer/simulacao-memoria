import $ from 'jquery';

var rotate = true;
var deg = 0;

$('.outter-list').click(function () {
	if(rotate){
		deg = 90;
		rotate = false;
	}else{
		deg = 0;
		rotate = true;
	}

	$(this).find('.seta').children().css('transform', 'rotate('+deg+'deg)');
	$(this).find('.inner-list').toggle();
})