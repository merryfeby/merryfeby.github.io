$(document).ready (function() {

  var count =0;
  $('.cart-btn').click(function(){
    count++
    $('#cart-count').text(count);
  });

});