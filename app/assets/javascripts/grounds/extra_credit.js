"use strict;"
/* Javascript for playground: Extra Credit */



//TODO: Don't forget to wrap your code in document ready!



// 1) Write a function called extra_lazy_bones_delay which takes a jQuery wrapped <li>
// as a parameter.
// This function moves the <li> to the be the last <li> in the enclosing <ul>
// It should find the parent <ul> using the .parent() method
// and move the li using it's .appendTo() method
// Thus moving it to the end of the list

//TODO: Write  function extra_lazy_bones



// 2) READ THIS: http://api.jquery.com/on/

// 3) Assign a delegate click handler to ul#extra_todo_list for click events on all the buttons with
// class the .extra_postpone inside ul#extra_todo_list. This delegated click handler should
// call extra_lazy_bones_delay passing in the button's parent <li> item
//
// You will need to use the implicit $(this) param in the event handler
// $(this) will be the button if you set the
// Use the .closest() function with a selector for 'li' since the button might not be
// the direct child of the li

//TODO: Add the deletgated click handler to ul#extra_todo_list for button.extra_postpone



