$(function() {

  $("#nop").click(function() {

    var nop = $("#inputPersons").val();
    $("#totalAmount").html(nop);
    $(function() {

      $("#names").empty();
      var i = 0;
      while (i < nop) {        
        $('#names').append("<div><input type='textbox' class ='inputNames'/><input type='textbox' class ='inputAmounts' /></div>");
        i = i + 1;
      }
    });
  });
  
});