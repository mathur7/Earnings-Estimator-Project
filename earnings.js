$( document ).ready(function() {
  
  //calculating the total earnings based on the services selected
  //the change function is triggered when an option is selected
  //the each function iterates through every option that is selected and adds the value of each option to the next option selected 
  //and returns the sum of all options selected
  function calculateSum(){  
    $('select').change(function(){
      var sum = 0;
      $('select :selected').each(function() {
        sum += Number($(this).val());
      });   
      $("#sum").html(sum);
    }); 
  }
  calculateSum();
  
  //the calculate function takes the earnings and the deductions and returns the difference between the two as net earnings
  $("#calculate").click(function(){
    var deductions = Number($("#insurance").val()) + Number($("#maintainence").val());
    //issue: calculateSum() function is not returning the value of the earnings at the moment
    var net_earnings = calculateSum() - deductions;
    $("#final_estimate").html(net_earnings);
  });

});





