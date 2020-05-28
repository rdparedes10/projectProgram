
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
		'<input type="text" id="usernameRegister" placeholder="username"/>' +
		'<input type="password"  id="passRegister" placeholder="password"/>' +
		'<input type="text"  id="emailRegister" placeholder="email address"/>' +
		'<button onclick="openRegistration();">create</button>' +
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
