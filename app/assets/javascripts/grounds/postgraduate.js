"use strict;"

/* Javascript for playground: Postgraduate */

$(document).ready(function () {

  /*
  1) Add a mouseover handler to postgraduate_mouseover_div which increments
  the value by one each time.
  Use parseInt and isNaN if you need them
   */

  $('#postgraduate_mouseover_div').mouseover(function () {
    var current = parseInt($('#postgraduate_mouseover_count').val());
    if (isNaN(current)) {
      current = 0;
    }
    current++;
    $('#postgraduate_mouseover_count').val(current);
  });

});

