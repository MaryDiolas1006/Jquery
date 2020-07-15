//Manipulating the DOM
$(function () {

//adding an element
$('ul ul:first' ).append('<li>I am gonna be last sub item </li>')
$('ul ul:first' ).prepend('<li>I am gonna be first sub item </li>')
$('<li>I am gonna be last sub item </li>').appendTo('ul ul:last')
$('<li>I am gonna be first sub item </li>').prependTo('ul ul:last')


//adding new next sibling
$('.red-box').after('<div class="red-box">Another Red</div>')
$('.blue-box').before('<div class="blue-box">Another blue</div>')

//another way to add elements
$('.blue-box').before(function () {

    return '<div class="green-box">Another green</div>'

});


//ReplaceWith()
$('li').replaceWith('<li>replaced</li>');
$('li').replaceWith(function() {

  return '<li>Replaced with function </li>'
})

//to replace an element with another element
let firstListItem = $('li:first')
$('p:first').replaceWith(firstListItem);


//Remove() - removing elements

$('li').remove();
$('form').children().not('input:text, textarea, br').remove();

//reattaching elements that has been remove

let detachedListItem = $('li').detach();
$('#content').append(detachedListItem);

$('.red-box, .green-box, .blue-box').empty()


Manipulating attributes and properties
attr(), prop(), val()


let specialLink = $('#special-link');
specialLink.attr('href', 'htpps//');

let checkBox = $('input:checkbox');
console.log(checkBox.prop('checked'));
console.log(checkBox.attr('checked'));

let textInput = $('input:text');
console.log(textInput.val());

let rangeInput = $('input[type= range]');
console.log(rangeInput.val())



//images slide show
let image = $('.gallery').find('img').first();
let images = [
  'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/outdoor_cat_risks_ref_guide/1800x1200_outdoor_cat_risks_ref_guide.jpg',
  'https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1',
   'https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg',
  'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2'
];


let t = 0;

setInterval(function () {

  t = (t + 1) % images.length;//0,1 2, 0, 1, 2, 1, ...
  image.fadeOut(function () {
  	$(this).attr('src', images[t]);
        $(this).fadeIn()
  });
  // console.log(image.attr('src'));

}, 2000)

});
