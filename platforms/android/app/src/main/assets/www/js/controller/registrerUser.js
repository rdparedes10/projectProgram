function openRegistration() {

	var validateClient = $("#isClient").is(':checked');
	if (validateClient) {
		getRegisterClient();

	} else {
		if ($("#usernameRegister").val() && $("#passRegister").val() && $("#emailRegister").val() && $("#ciRegister").val()) {
			var urlRequest = urlServices + registerUser;
			var jsonData = {
				sessionId: sessionId,
				validateCl: true,
				user: {
					userName: $("#usernameRegister").val(),
					pass: encryptionText($("#passRegister").val()),
					email: $("#emailRegister").val(),
					ci: $("#ciRegister").val(),
				}
			};
			sendPostInfoServices(urlRequest, jsonData, successRegisteredUser);
		} else {
			$("#usernameRegister").addClass("inputError");
			$("#passRegister").addClass("inputError");
			$("#emailRegister").addClass("inputError");
			$("#ciRegister").addClass("inputError");
			$('#idEr').show();
		}
	}
	var menu = '<span class="span-menu">Create an account</span>';
	$('#mainMenuQuito').html(menu);
}

function registerValidate(data) {
	if (data && data.statusInfo.code === '0') {
		loadLogin();

		beforeLoadLogin();
	} else {
		$("#usernameRegister").addClass("inputError");
		$("#passRegister").addClass("inputError");
		$("#emailRegister").addClass("inputError");
		$("#ciRegister").addClass("inputError");
		$('#idEr').show();
	}
}

function getTypeInsurance() {
	var urlRequest = urlServices + getInsurance;
	sendGetInfoServices(urlRequest, function (data) {
		$.each(data.params, function (i, item) {
			$('#typeInsurance').append($('<option>', {
				value: item.idInsurance,
				text: item.coverageType
			}));
		});
	});
}

function takePhoto() {
	navigator.camera.getPicture(onSuccess, onFail, {
		quality: 50,
		destinationType: Camera.DestinationType.DATA_URL,
		correctOrientation: true,
	});

}
function onSuccessClenup() {

	console.log("Camera cleanup success.")
}

function onFailClenup(message) {
	alert('Failed because: ' + message);
}

function onSuccess(imageURI) {
	$("#photo").val(imageURI);
}

function onFail(message) {
	alert('Failed because: ' + message);
}

function getRegisterClient() {

	var validateInput = $('.input-register').toArray().some(function (el) {
		return $(el).val().length < 1;
	});
	if (!validateInput) {
		var urlRequest = urlServices + registerUser;
		var jsonData = {
			sessionId: sessionId,
			validateCl: false,
			user: {
				user: $("#usernameRegister").val(),
				pass: encryptionText($("#passRegister").val()),
				email: $("#emailRegister").val(),
				ci: $("#ciRegister").val(),
			},
			vehicle: {
				licensePlate: $("#licensePlate").val(),
				chassis: $("#chassis").val(),
				manufacturingDate: $("#manufacturingDate").val(),
				idBrand: $("#idBrand").val(),
				photo: $("#photo").val(),
				idClient: $("#ciRegister").val(),
				model: $("#model").val(),
			},
			client: {
				id: $("#ciRegister").val(),
				name: $("#nameRegister").val(),
				lastname: $("#lastname").val(),
				address: $("#address").val(),
				phone: $("#phone").val(),
				idInsurance: $("#typeInsurance").val(),
			}
		};
		sendPostInfoServices(urlRequest, jsonData, successRegisteredUser);
	} else {
		$('#idEr').show();
	}
}



function successRegisteredUser() {
	$("body").removeClass('map-custom');
	var html = '<div id="successRegistered" class="form">';
	html += '   <div class="divSuccess"> <h3 style="margin: 0;"> Proceso de Registro </h2></div> ';
	html += '   <div class="div-message"> <p class="p-class"> Su Registro se realizó exitosamente.</p><br><br></div> ';
	html += '   <div> <button class="buttonSu" style="margin: 0;" onclick="successReturnLogin();">Continuar</button></div>';
	html += '   </div>';
	$('#login').html(html);
}

function successReturnLogin() {
	loadLogin();
	$('.login-form').show();
	beforeLoadLogin();
}