"use strict;"

/* Javascript for playground: Undergraduate */

$( document ).ready(function() {

/*
* 1) Add an event handler to the undergraduate_progress_select select field to set
* the inline style and html of the progress bar  undergraduate_progress_bar such
* that when the select is changed the progress bar correctly displays the percentage
* selected.
*
* a) Look at this description of the bootstrap progress bar:
* http://getbootstrap.com/components/#progress-label
*
* b) Use the css jQuery method to set the width
* http://api.jquery.com/css/
*
* c) You already know how to set the html
*
* d) Read http://api.jquery.com/change/
*
* e) Look at how your handler can receive an 'event' object which has a .target property
* consider using that object to access the currently selected value,
*
* */

  $('#undergraduate_progress_select').change( function(event) {
     var percent = $(event.target).val() + '%';
     $('#undergraduate_progress_bar').css({width: percent}).html(percent);
  } )

});

