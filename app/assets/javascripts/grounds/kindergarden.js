"use strict;"

/* Javascript for playground: Kindergarden */

$(document).ready(function () {
  /*
   A) Kindergarden things - Nested Selector

   1) Select all divs with the 'thing' class which are inside the div with id='kindergarden_thing_container'
   */
  var things = $('#kindergarden_thing_container .thing');


  /*
   2) Assign the thing_of_interest class to all the 'things'
   */

  things.addClass('thing_of_interest');

  /*
   B) Find the balls

   1) Select all the balls (class="kindergarden_ball") that are directly inside id='kindergarden_ball_container_b'
   so that those which are inside of the red_bucket are not included
   */

  var balls = $('#kindergarden_ball_container_b > .ball');


  /*
  2) Add the thing_of_interest class to those balls
   */

  balls.addClass('thing_of_interest');

  /*
   C) Find the Bucket Ball
   1) Find the first ball (class="kindergarden_ball") in the red_bucket inside id='kindergarden_ball_container_c'

   Remember that this is kindergarden_ball_container_c (with a c at the end)
   */

  var balls = $('#kindergarden_ball_container_c .red_bucket .ball:first');

  balls.addClass('thing_of_interest');

});

