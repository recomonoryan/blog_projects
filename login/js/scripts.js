$("#login-tab").click(function(){ //Invoked when element with id of 'login-tab' is clicked
	$("#register-tab").removeClass("active"); //removes class value of 'active'
	$("#login-tab").addClass("active"); //adds class value of 'active'

	$("#form-register").fadeOut(400, function(){ //hides content for Register
		$("#form-login").fadeIn("slow"); //shows content for Login
	});
});
$("#register-tab").click(function(){ //Invoked when element with id of 'register-tab' is clicked
	$("#login-tab").removeClass("active");
	$("#register-tab").addClass("active");

	$("#form-login").fadeOut(400, function(){ //hides content for Login
		$("#form-register").fadeIn("slow"); //shows content for Register
	});
});