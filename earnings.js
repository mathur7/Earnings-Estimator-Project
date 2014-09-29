$( document ).ready(function() {
  
  var calculateSum = $('select').change(function(){
      var sum = 0; 
      $('select :selected').each(function() {
        sum += Number($(this).val());
      });   
      $("#sum").html(sum);
    });

});





