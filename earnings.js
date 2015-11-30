$( document ).ready(function() {
  
  //calculating the total earnings based on the services selected
  //the change function is triggered when an option is selected
  //the each function iterates through every option that is selected and adds the value of each option to the next option selected 
  //and returns the sum of all options selected
  
    $("#calculate").click(function(){
      console.log(calculateSum());
      var maintainenceCost = Number($("#maintainence").val());
      var insuranceCost = Number($("#insurance").val());
      var deductions = maintainenceCost + insuranceCost;
      var netEarnings = calculateSum() - deductions;
      console.log(netEarnings);
      $("#final_estimate").html(netEarnings);
    });

  function calculateSum(){  
    $('select').change(function(){
      var sum = 0;
      $('select :selected').each(function() {
        sum += Number($(this).val());
      });   
      $("#sum").html(sum);
    }); 
    return sum.innerHTML;
  }
  calculateSum();
});
  
  //the calculate function takes the earnings and the deductions and returns the difference between the two as net earnings
  
    