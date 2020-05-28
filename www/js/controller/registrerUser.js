function openRegistration() {
	if ($("#usernameRegister").val() && $("#passRegister").val() && $("#emailRegister").val() && $("#ciRegister").val()) {
		showOldProgress();
		var urlRequest = urlServices + registerUser;
		var jsonData = {
			user: {
				user: $("#usernameRegister").val(),
				pass: $("#passRegister").val(),
				email: $("#emailRegister").val(),
				ci: $("#ciRegister").val(),
			}
		};
		sendPostInfoServices(urlRequest, jsonData, registerValidate);
	} else {
		$("#usernameRegister").addClass("inputError");
		$("#passRegister").addClass("inputError");
		$("#emailRegister").addClass("inputError");
		$("#ciRegister").addClass("inputError");
		$('#idEr').show();
	}
	var menu = '<span class="span-menu">Create an account</span>';
	$('#mainMenuQuito').html(menu);
}

function registerValidate(data) {
	if (data && data.statusInfo.code === '0') {
		loadLogin();
		hideOldProgress();
	} else {
		$("#usernameRegister").addClass("inputError");
		$("#passRegister").addClass("inputError");
		$("#emailRegister").addClass("inputError");
		$("#ciRegister").addClass("inputError");
		$('#idEr').show();
	}
}