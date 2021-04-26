
var sessionId = '';
document.addEventListener('deviceready', function () {
	loadLogin();
	beforeLoadLogin();
});

function loadLogin() {
	sessionId = '';
	closeNav();
	getSessionId();
	$("#mySidenav").hide();
	$("#map-canvas").hide();
	$('#login').show();
	$("body").removeClass('map-custom');

	var html = ' <div id="idEr"class="divInput errorSt" style="display: none;">Verifique los datos ingresados<br><br></div>' +
		'<div class="login-page">' +
		'<div class="form">' +
		'<div class="div-login register-form">' +
		'<input type="checkbox" id="isClient" style="width: 10%;" value="second_checkbox"> <label for="isClient">Usted No Es cliente</label>'+
		'<input type="tel" id="ciRegister" placeholder="cedula"/>' +
		'<input type="text" id="usernameRegister" placeholder="username"/>' +
		'<input type="password"  id="passRegister" placeholder="password"/>' +
		'<input type="text"  id="emailRegister" placeholder="email address"/>' +
		'<div class="div-client register-client-form">' +
		'<input type="text" class="input-register" id="nameRegister" placeholder="Nombre"/>' +
		'<input type="text" class="input-register" id="lastname" placeholder="Apellido"/>' +
		'<input type="text" class="input-register" id="address" placeholder="Dirección"/>' +
		'<input type="tel" class="input-register" id="phone" placeholder="Teléfono"/>' +
		'<label for="typeInsurance">Tipo de Seguro</label><select class="selector-register" id="typeInsurance"name="typeInsurance"></select>'+
		'<input type="text" class="input-register" id="licensePlate" placeholder="Placa del vehículo"/>' +
		'<input type="text"  class="input-register" id="chassis" placeholder="Chasis"/>' +
		'<p class="take-date">Fecha de Fabricación: <input type="date" class="input-register" id="manufacturingDate"/></p>'+
		'<input type="text" class="input-register" id="idBrand" placeholder="Marca"/>' +
		'<input type="text" class="input-register" id="model" placeholder="Modelo"/>' +
		'<input type="text" class="input-register" id="photo" style="display:none;"/>' +
		' <p class="take-photo"><a onclick="takePhoto();" href="#">Take Car Photo</a></p>' +
		'</div>' +
		'<button onclick="openRegistration();">create</button>' +
		' <p class="message">Already registered? <a href="#">Sign In</a></p>' +
		'</div>' +
		'<div class="div-login login-form">' +
		'<input type="text"  id="username"  placeholder="username"/>' +
		'<input type="password"   id="pass" placeholder="password"/>' +
		'<button id="buttonI" onclick="sendInfoLogin()">login</button>' +
		' <p class="message">Not registered? <a href="#">Create an account</a></p>' +
		' </div>' +
		' </div>' +
		'</div>';

	$('#login').html(html);
	var menu = '<span class="span-menu">Sign In</span>';
	$('#mainMenuQuito').html(menu);

	$('#username').on('input', function (a) {
		$("#username").removeClass("inputError");
		$('#idEr').hide();
	});
	$('#pass').on('input', function (a) {
		$("#pass").removeClass("inputError");
		$('#idEr').hide();
	});

	$('#ciRegister').on('input', function (a) {
		$("#ciRegister").removeClass("inputError");
		$('#idEr').hide();
	});
	$('#usernameRegister').on('input', function (a) {
		$("#usernameRegister").removeClass("inputError");
		$('#idEr').hide();
	});
	$('#passRegister').on('input', function (a) {
		$("#passRegister").removeClass("inputError");
		$('#idEr').hide();
	});
	$('#emailRegister').on('input', function (a) {
		$("#emailRegister").removeClass("inputError");
		$('#idEr').hide();
	});
	$('.input-register').on('input', function (a) {
		$('#idEr').hide();
	});
}

function sendInfoLogin() {

	if ($("#username").val() && $("#pass").val()) {
		var urlRequest = urlServices + loginPath;
		var jsonData = {
			sessionId: sessionId,
			user: {
				user: $("#username").val(),
				pass: encryptionText($("#pass").val()),
			}
		};
		sendPostInfoServices(urlRequest, jsonData, signInValidate);
	} else {
		$("#username").val('');
		$("#pass").val('');
		$("#username").addClass("inputError");
		$("#pass").addClass("inputError");
		$('#idEr').show();
	}

}

function signInValidate(data) {
	if (data && data.statusInfo.code === '0') {
		initMap();
	} else {
		$("#username").addClass("inputError");
		$("#pass").addClass("inputError");
		$('#idEr').show();
	}

}
function getSessionId() {
	var urlRequest = urlServices + createSession;
	sendGetInfoServices(urlRequest, function (data) {
		sessionId = data.params.sessionId;
	});
}

function logout(){
	loadLogin();
	beforeLoadLogin();
}


function beforeLoadLogin(){
	$('.message a').click(function () {
		$('.div-login').animate({ height: "toggle", opacity: "toggle" }, "slow");
	});

	$("#isClient").on( 'change', function() {
			getTypeInsurance();
			$('.div-client').animate({ height: "toggle", opacity: "toggle" }, "slow");
	});
}