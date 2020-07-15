//Manipulating DOM 11

$(function () {
$('.gallery').hide();

let redBox = $('.red-box');

redBox.css('background-color', 'orange');
$('p').css('font-size', '18px');
redBox.css('width', '+=20px');

//user can't select the text
redBox.css('user-select', function () {
	return 'none';
});



});