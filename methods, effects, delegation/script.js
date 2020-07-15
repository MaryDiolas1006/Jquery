//inJS, we get our elements(node)?
// let variable1 = document.getElementById('flash');
// let variable2 = document.querySelector('#batman')
// console.log(variable2); //element node li Bruce Wayne



//$ to access jQuery
//.method()
//$('selector').method()

$('')
console.log($('#batman'));

let heading = $('#heading');
console.log(heading);

$('#batman').hide()

/*styling*/
/*
 $('selector').css('property', 'value')
*/

$('h1').css('color', 'red');

/*
 applying multiple styles

 -create a variable 
 - assign an object that contains the styles
 -pass the variable in the css method
*/
//reusable styles
let h1Style = {

	color: 'black',
	border: '2px solid black',
	backgroundColor: 'skyblue'
}

//applying same styles
$('h1').css(h1Style);
$('ul').css(h1Style)


//Jquery Methods

//$(selector).text()== similar to textContent in vanilla JS

/*
  Gets the text content of the element
*/

console.log($('h1').text());
//returns text content of the element

//to update the text inside the element
$('h1').text('Not The League')


//$(selector).html()== similar innerHTML in vanilla JS
console.log($('ul').html())

$('ul').html('<li>Robin</li><li>Aqualad</li>')
//overwrites the previous children


//$(selector).attr()== similar to setAttribute in vanilla JS

/*
  Get the value of an attribute for the first element
*/

console.log($('li').attr('id'))
$('li').attr('id', 'Ajerk')
//.attr(att, val)

$('li').attr({id: 'teenTitan', class: 'sidekicks'});



//.val() method
//Get the value of the selected element

console.log($('#addHero').val());

let input = $('#addHero');

/*we can also update the vale of our input by passing an argument
through the val method*/
input.val('jerkjerkjerk!!!!!!!')


//Manipulating Classess

//.addClass()
/*
  This is the same as Classlist.add() method
*/


$('#superman').addClass('correct');


//.removeClass()

$('#superman').removeClass('correct');


//.toggleClass()

$('#batman').toggleClass('correct');//from black to green color
$('#batman').toggleClass('correct');//back to black color


/*
  Jquery Events

  1. click
  2.keypress
  3.on
*/

//pass an anonymous function as an argument
$('#heading').click(() => {

  alert('I have been clicked')

})


$('li').click(function() {

	let text = $(this).text()
	//this keyword refers to the element the function attached to.
	console.log(text);

	alert(text)
})


//.keypress()
$('#addHero').keypress(function(e){
	let input = $(this).val()
	if(e.key === 'Enter'){
		$('#roster').append(`<li>${input}</li>`)
	}
	
})


//.on()
/*
  similar to addEventListener, allows to specify the event
  mouseenter
*/

$('li').on('mouseenter', function() {

	$(this).toggleClass('done')
})


//mouseleave
$('li').on('mouseleave', function() {

	$(this).toggleClass('done')
})


//Jquery Effects

//fadeout
$('li').on('click', function() {

	$(this).fadeOut(1000, function(){
		$(this).remove()
	})
})


//slideToggle

$('li').on('click', function () {

	$('#heading').slideToggle(1000);
})


//keypress() 
$("#addHero").keypress(function(event){

		//1.save in a variable
		let input = $(this).val()

		//2. if statement, if the key pressed is Enter
		if(event.key === "Enter"){

			$("#roster").append(`<li> <button>click</button> ${ input }</li>`)
			//works like appendChild in vanilla JS
			//pressing Enter key will add the value of input to the li with button
		}
	});


//.on()with event delegation
//.on('event', 'childNode', function(){})
$('ul').on('click', 'button', function() {
    //this refer to the button
	$(this).parent().slideToggle(1000, function () {
        //this keyword is refers to the object is attached on
		$(this).remove()
	});
	/*When a child node is specified for delegation,
	this keyword now refers to the child node as its object.
	Its children inherets the event.*/
});