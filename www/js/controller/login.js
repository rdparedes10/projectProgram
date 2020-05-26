
var sessionId = '';
document.addEventListener('deviceready', function () {
	loadLogin();
	$('.message a').click(function () {
		$('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
	});
});

function loadLogin() {
	sessionId = '';
	getSessionId();
	$("#mySidenav").hide();
	$("#map-canvas").hide();
	$("body").removeClass('map-custom');

	var html = ' <div id="idEr"class="divInput errorSt" style="display: none;">Verifique los datos ingresados<br><br></div>' +
		'<div class="login-page">' +
		'<div class="form">' +
		'<div class="register-form">' +
		'<input type="text" id="ciRegister" placeholder="cedula"/>' +
		'<input type="text" id="usernameRegister" placeholder="name"/>' +
		'<input type="password"  id="passRegister" placeholder="password"/>' +
		'<input type="text"  id="emailRegister" placeholder="email address"/>' +
		'<button>create</button>' +
		' <p class="message">Already registered? <a href="#">Sign In</a></p>' +
		'</div>' +
		'<div class="login-form">' +
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

}

function sendInfoLogin() {

	if ($("#username").val() && $("#pass").val()) {
		showOldProgress();
		var urlRequest = urlServices + loginPath;
		var jsonData = {
			sessionId: sessionId,
			objct: {
				user: $("#username").val(),
				pass: $("#pass").val(),
			}
		};
		sendPostInfoServices(urlRequest, jsonData, signInValidate);
	} else {
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

function openRegistration() {
	if ($("#usernameRegister").val() && $("#passRegister").val() && $("#emailRegister").val() && $("#ciRegister").val()) {
		showOldProgress();
		var urlRequest = urlServices + loginPath;
		var jsonData = {
			user: $("#usernameRegister").val(),
			pass: $("#passRegister").val(),
			email: $("#emailRegister").val(),
			ci: $("#ciRegister").val(),
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

function getSessionId() {
	var urlRequest = urlServices + createSession;
	sendGetInfoServices(urlRequest, function (data) {
		sessionId = data.params.sessionId;
	});
}
