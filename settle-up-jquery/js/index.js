$(function() {

	$("#nop").click(function() {

		nop = $("#inputPersons").val();

		$(function() {

			$("#names").empty();
			var i = 0;
			while (i < nop) {        
				$('#names').append("<div><input type='textbox' class ='inputNames' id='person"+ i +"'/><input type='textbox' class ='inputAmounts' id='amount"+ i +"'/></div>");
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
		$("#totalAmount").html(" Total expense is " +totalAmount);
		perPerson = totalAmount/nop;

		for (var i = 0; i < nop; i++) {			
			var netBalance = $("#amount" + i ).val() - perPerson;
			balance[i]= netBalance;
		};

		
		// for (var i = 0; i < balance.length && balance[i] != 0; i++) {			
			
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
			} else if ((lowest + highest) > 0 ) {
				highest = highest + lowest;


				var str1 = $('#person'+lowestIndex).val();			 

				var str2 = $('#person'+highestIndex).val();

				var msg = str1 + " should pay " + lowest + " to " + str2;
				transaction.push(msg);

				balance[lowestIndex] = 0;
			} else {

				var str1 = $('#person'+lowestIndex).val();			 

				var str2 = $('#person'+highestIndex).val();

				var msg = str1 + " should pay " + lowest + " to " + str2;
				transaction.push(msg);

				balance[lowestIndex] = 0;
				balance[highestIndex] = 0;
			};

		// };

		


		$("#content").html(transaction[0]);
		// $("#content").html(" lowest highest is " + lowest +"  "+highest);

	});

});