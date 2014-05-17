"use strict;"

/* Javascript for playground: Senior */

$(document).ready(function () {

//A) Toggle!

  //1) Add a click handler to the button with id 'senior_toggle' to toggle the visibility of $("#senior_visual_thing")

  // Your code here!

  $("#senior_toggle").click(function () {
    $("#senior_visual_thing").toggle();
  });


  //2) Add a click handler to the button with id 'senior_fade_in' to fadeIn the element $("#senior_fading_thing")

  // Your code here!

  $("#senior_fade_in").click(function () {
    $("#senior_fading_thing").fadeIn();
  });


  //3) Add a click handler to the button with id 'senior_fade_out' to fadeOut the element $("#senior_fading_thing")

  // Your code here!

  $("#senior_fade_out").click(function () {
    $("#senior_fading_thing").fadeOut();
  });

  //B) Sliding

  //1) Change the speed of the animation! Add a click handler to the button with id 'senior_slide_toggle'
  // to slideToggle the element  $("#senior_sliding_thing") with a speed of "slow"

  $("#senior_slide_toggle").click(function () {
    $("#senior_sliding_thing").slideToggle("slow");
  });


});

