/* Javascript for playground: Junior */

$( document ).ready(function() {
  /*
   A) Beginning Buttons!

   1) Find the button with id junior_show_and_tell and assign it button and give it the thing_of_interest css class
   */

  var button = $('#junior_show_and_tell');

  button.addClass('thing_of_interest');

  function say_hello()
  {
    alert('Hey! I\'m Telling!');
  }

  /*
   2) Assign the say_hello function to the click handler of the button
  */

  button.click(say_hello);

  /*
  3) Click the show and tell button!
  */

  /*
  4) Complete the Anonymous function of the fixer_button below to set the class
  of should_be_green to jplay_green AND change it's content to be "I'm Green"
  */

  var fixer_button = $('#junior_fix_green');

  fixer_button.click(function(){
    var should_be_green = $('#junior_green_thing');
    // YOUR CODE HERE
    should_be_green.addClass('jplay_green');
  });


  /*
  B) Now, you try it! PRO-TIP: Take great care on your indentation and parentheses, you are passing
    a function definition as a parameter, so make sure your keep track of where that function starts
    and ends

    1) Write the code to assign an anonymous function click callback to the button with
    the id of junior_fix_green_content. Use the example above as your guide

    2) In your callback function, write a selector for the element with id of junior_green_thing
    and assign the result to a local variable called 'green_thing'

    3) Also in your callback function, use that 'green_thing' variable to change that element's
    content to be "I'm now Green"

    4) Click the button!
  */

  // Just to get you started:
  var fix_green_button = null;


  var fix_green_button = $('#junior_fix_green_content');

  fix_green_button.click(function() {
    var green_thing = $('#junior_green_thing');
    green_thing.html("I'm now Green")
  });

});

