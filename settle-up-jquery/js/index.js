$(function() {

  $("#nop").click(function() {

    var nop = $("#inputPersons").val();
    $("#totalAmount").html(nop);
    $(function() {

      $("#names").empty();
      var i = 0;
      while (i < nop) { 
        $(document.createElement('div')).appendTo("#names");             
        
        $('<input/>', {
    'type': 'Text',
    'placeholder':'Enter Name',
    'id': 'person'+i   
    }).appendTo("#names");

        $('<input/>', {
    'type': 'Text',
    'placeholder':'Enter amount',
    'id': 'amount'+i   
    }).appendTo("#names");
        i = i + 1;
      }
    });
  });


  // $("#sum").click(function() {
  // var totalAmount= 0;
  // totalAmount= parseInt($(".inputAmounts").val());
  // $("#totalAmount").html(totalAmount);
// });
});