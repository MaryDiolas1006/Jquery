
//Add an item (adding an item includes the icon)
$('input').keypress(function (e) {

	let input = $(this).val()

	if(e.key === 'Enter'){

		$('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${input}</li>`)
	}
})


//Toggle Strikethrough for the list items
$('ul').on('click', 'li', function () {

	$(this).toggleClass('completed')
})


//FadeOut animation on delete
$('ul').on('click', 'span', function () {

	$(this).parent().fadeOut(1000, function () {
        
		$(this).remove();
	})
})


//Plus icon should be able to slide in and out toggle the input
$('.fa-plus').click(function () {

	$('input').slideToggle(1000)
})





//Other Solution



//Show hide animation on Hover

/* let spanStyle = {
    	width: '15%',
    	opacity: '0.9'
    }

    let spanStyle2 = {
    	width: '0',
    	opacity: '0'
    }

$('ul').on('mouseenter', 'span', function () {

	$(this).css(spanStyle)
})


$('ul').on('mouseleave', 'span', function () {

	$(this).css(spanStyle2)
})


$('ul').on('mouseenter', 'li', function () {

	$(this).first().css(spanStyle)
})

$('ul').on('mouseleave', 'li', function () {

	$(this).first().css(spanStyle2)
})
*/









