
//Elements Selector
$(function () {

  $('p').css("background-color", "yellow");

  //selecting multiple elements for colors
  $('input, h2' ).css("background-color", "yellow");

  //Even and odd to select
  $('li:even').css("background-color", "yellow");
  $('li:odd').css("background-color", "yellow");
   
   //to select the last item
  $('li:last').css("background-color", "green");
  //to select the first item
  $('li:first').css("background-color", "green");



  //Methods for traversal
  $('#list').find('li').css("background-color", "red");
  $('#list').children('li').css("background-color", "blue");

  //parents()
  $('#list').parent().css("background-color", "pink");
  $('#list').parents('div').css("background-color", "orange");
  $('#list').parents('body').css("background-color", "skyblue");

  //siblings()
  $('#list').siblings('p').css("background-color", "teal");
  $('#list').siblings(':header').css("background-color", "teal");

  //previous()
  $('#list').prev().css("background-color", "white");

  //next()
  $('#list').next().css("background-color", "pink");



//Methods for Filtering
 $('#list').children('li').filter(':even').css("background-color", "pink");
 $('li').filter(function (index) {
    return index % 3 === 2
 }).css("background-color", "violet");

//first() & last() selecting first or last element
 $('li').first().css("background-color", "violet");
 $('li').last().css("background-color", "violet");

 //eq(number) selecting elements by numbers
 $('li').eq(3).css("background-color", "indigo");

 //not() if you want to excludes an elements for selecting
 $('li').not(':first').css("background-color", "indigo");
 $('li').not(function (index) {
  return index % 3 === 2
 }).css("background-color", "pink");




})