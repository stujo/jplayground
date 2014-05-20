/* Javascript for playground: Junior */

$( document ).ready(function() {
  /*
   A) Beginning Buttons!

   1) Find the button with id junior_show_and_tell and assign it to button and give it the thing_of_interest css class
   */

  var button = null;
  //TODO: HERE

  /*
   2) Assign the say_hello function to the click handler of the button
  */
  function say_hello()
  {
    alert('Hey! I\'m Telling!');
  }


  //TODO: HERE

  /*
  3) Click the show and tell button!
  */

  /*
  4) Complete the Anonymous function of the fixer_button click event below to set the class
  of the element should_be_green to jplay_green, AND change it's content to be "I'm Green"
  */

  var fixer_button = $('#junior_fix_green');

  fixer_button.click(function(){
    var should_be_green = $('#junior_green_thing');
    //TODO: HERE
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

  // Just to get you started, select junior_fix_green_content and assign it to fix_green_button:
  var fix_green_button = null;


  //TODO: HERE


});

