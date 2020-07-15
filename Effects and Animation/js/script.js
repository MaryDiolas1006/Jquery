//jQuery Effects Animations


$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  //fadeOut()
  $(".red-box").fadeOut(2000);
  $('.green-box').fadeOut(2000);

  //fadeIn()
  $('.blue-box').fadeIn(2000);
  $('.red-box').fadeIn(2000);

  //fadeTo()
  $('.green-box').fadeTo(1000, 0.7);
  $('.blue-box').fadeTo(1000, 0.5);

  //fageToggle()
  $('.blue-box').fadeToggle();
  $('.blue-box').fadeToggle();
  $('.green-box').fadeToggle();
  $('.green-box').fadeToggle();

  //hide()
  $('.green-box').hide();

  //show()
  $('.green-box').show();

  //toggle()
  $('.green-box').toggle();

  //slideUP()

$(".red-box").slideUp(2000);

//slideDown()
$(".red-box").slideDown(2000);

//hide and slide down p
$('p').hide();
$('p').slideDown(1000);

//.animate()
$('.red-box').animate({
	'margin-left': '200px'
});

//adding margin 200px
$('.blue-box').animate({

	'margin-left': '+=200px'
}, 1000, 'linear');

//putting to it's place
$('.blue-box').animate({

	'margin-left': '-=200px'
}, 1000, 'linear');

//fading and shrinking in size

$('.blue-box').animate({

	marginLeft: '200px',
	opacity: '0',
	height: '50px',
	width: '50px',
	marginTop: '25px'
}, 3000);

$('p').animate({
	fontSize: '20px'
}, 3000);

//delay()
$('p').delay(1000).animate({
	fontSize: '20px'
}, 2000);
$('.blue-box').delay(1000).fadeTo(1000, 0.5);


//nested callback function
$('.red-box').fadeTo(2000, 0, function() {
   $('.green-box').fadeTo(2000, 0.5, function() {
    $('.blue-box').fadeOut(2000, 0.7, function() {

    });

   });

});



// lightbox form for sign in
$('.lightbox').delay(1000).fadeIn(1000);





});






