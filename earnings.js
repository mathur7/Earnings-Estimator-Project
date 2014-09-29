$( document ).ready(function() {
  
  var calculateSum = $('select').change(function(){
      var sum = 0; 
      $('select :selected').each(function() {
        sum += Number($(this).val());
      });   
      $("#sum").html(sum);
    });
  
  $("#calculate").click(function(){
    var deductions = Number($("#insurance").val()) + Number($("#maintainence").val());
    var net_earnings = calculateSum - deductions;
    $("#final_estimate").html(net_earnings);
  });

});





