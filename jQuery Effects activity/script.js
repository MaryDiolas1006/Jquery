//clicking the button slides up all the boxes

$('button').on('click', function() {

	$('div').slideToggle(1000);
})


//Hovering the boxes displays the name of the box.

$('#one').on('mouseenter', function() {
    $('h1').text('One')
	$(this).toggleClass('done')
})

$('#two').on('mouseenter', function() {
    $('h1').text('Two')
	$(this).toggleClass('done')
})

$('#three').on('mouseenter', function() {
    $('h1').text('Three')
	$(this).toggleClass('done')
})


//other solution
$('div').on('mouseenter', function() {

	$('h1').text($(this.text()));
});


//hovering out of the box displays the original text

$('#one').on('mouseleave', function() {
   $('h1').text('jQuery Effects')
	$(this).toggleClass('done')
})

$('#two').on('mouseleave', function() {
     $('h1').text('jQuery Effects')
	$(this).toggleClass('done')
})

$('#three').on('mouseleave', function() {
     $('h1').text('jQuery Effects')
	$(this).toggleClass('done')
})

//other solution
$('div').on('mouseleave', function () {

	$('h1').text($(this.text()));
});



//Clicking the boxes fades it out

$('div').on('click', function () {

	$(this).fadeOut(1000);
})