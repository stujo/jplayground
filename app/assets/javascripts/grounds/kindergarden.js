"use strict;"

/* Javascript for playground: Kindergarden */

$(document).ready(function () {
  /*
   A) Kindergarden things - Nested Selector

   1) Select all divs with the 'thing' class which are inside the div with id='kindergarden_thing_container'
   */
  var things = $('.kindergarden_thing_container > .thing');
  //TODO: HERE

  /*
   2) Assign the thing_of_interest class to all the 'things'
   */

   things.addClass('thing_of_interest');

  //TODO: HERE

  /*
   B) Find the balls

   1) Select all the balls (class="ball") that are directly inside id='kindergarden_ball_container_b'
   so that those which are inside of the red_bucket are not included
   */

  var balls = null;
  //TODO: HERE


  /*
  2) Add the thing_of_interest class to those balls
   */

  //TODO: HERE

  /*
   C) Find the Bucket Ball
   1) Find the first ball (class="ball") in the red_bucket inside id='kindergarden_ball_container_c'

   Remember that this is kindergarden_ball_container_c (with a c at the end)

   2) Add the thing_of_interest class to that ball
   */

  //TODO: HERE

});

