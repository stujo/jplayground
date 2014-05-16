"use strict;"
/* Javascript for playground: Pre-K */

$( document ).ready(function() {


// A) Email Address Field
// 1) Assign emailField to be the jQuery object for the input field with id='prek_email_address'
  var emailField = $('#prek_email_address');

// 2) Change the placeholder attribute of the field to "Email Address"

  emailField.attr('placeholder', 'Email Address');

// B) Change CSS Dynamically
// 1) Assign greenThing to be the jQuery object for the div with id prek_green_thing

  var greenThing = null;
  greenThing = $('#prek_green_thing');

// 2) Assign the css class 'jplay_green' to greenThing
  greenThing.addClass('jplay_green');

// 3) Change the HTML of the greenThing to be I'm Green
  greenThing.html("I'm Green");

});

