$(function() {

	$("#nop").click(function() {

		nop = $("#inputPersons").val();

		$(function() {

			$("#names").empty();
			var i = 0;
			while (i < nop) {        
				$('#names').append("<div><input type='textbox' class ='inputNames' placeholder= 'Enter Name here' id='person"+ i +"'/><input type='textbox' class ='inputAmounts' placeholder = 'enter amount he paid' id='amount"+ i +"'/></div>");
				i = i + 1;
			}
		});
		$("#sum").css("display", "inline");

	});


	$("#sum").click(function() {
		var balance = [];
		var transaction = [];
		var totalAmount= 0;

		var i = 0;
		while (i < nop) {        
			totalAmount = totalAmount + parseInt($("#amount" + i ).val());
			i = i + 1;
		}
		$("#totalAmount").css("display", "inline");
		$("#totalAmount").html(" Total expense is " +totalAmount + " Rs.");
		perPerson = totalAmount/nop;
		$("#perPerson").html(" & per person contribution is " +perPerson+ " Rs.");


		for (var i = 0; i < nop; i++) {			
			var netBalance = $("#amount" + i ).val() - perPerson;
			balance[i]= netBalance;
		};


		for (var i = 0; i < balance.length; i++) {			
			
			if (balance[i] != 0) {

				var lowest = Math.min.apply(Math, balance);
				var highest = Math.max.apply(Math, balance);
				var lowestIndex = balance.indexOf(Math.min.apply(Math, balance));
				var highestIndex = balance.indexOf(Math.max.apply(Math, balance));

				if ((lowest + highest) < 0 ) {
					lowest = lowest + highest;


					var str1 = $('#person'+lowestIndex).val();			 

					var str2 = $('#person'+highestIndex).val();

					var msg = str1 + " should pay " + highest + " to " + str2;
					transaction.push(msg);

					balance[highestIndex] = 0;
					balance[lowestIndex] = lowest ;
				} else if ((lowest + highest) > 0 ) {
					highest = highest + lowest;


					var str1 = $('#person'+lowestIndex).val();			 

					var str2 = $('#person'+highestIndex).val();

					var msg = str1 + " should pay " + Math.abs(lowest) + " to " + str2;
					transaction.push(msg);

					balance[lowestIndex] = 0;
					balance[highestIndex] = highest ;
				} else {

					var str1 = $('#person'+lowestIndex).val();			 

					var str2 = $('#person'+highestIndex).val();

					var msg = str1 + " should pay " + highest + " to " + str2;
					transaction.push(msg);

					balance[lowestIndex] = 0;
					balance[highestIndex] = 0;
				};
			};
			

		};		

		linebreak = document.createElement("br");
		

		for (var i = 0; i < transaction.length; i++) {
			$("#content").append("<p>" + transaction[i] + "</p>");			
		};
		

	});

});