var sessionId = '';
// document.addEventListener('deviceready', function () {
// 	loadLogin();
// 	beforeLoadLogin();
// });
setTimeout(function() {
    $(document).ready(function() {
        loadLogin();
        beforeLoadLogin();
    });
}, 1000);

function loadLogin() {
    sessionId = '';
    closeNav();
    getSessionId();
    $("#mySidenav").hide();
    $('#login').show();
    hideAllMenu('login');

    var html ='<div class="login-page">' +
        '<div class="form">' +
        '<div class="div-login login-form">' +
        '<input type="text"  id="username"  placeholder="username"/>' +
        '<input type="password"   id="pass" placeholder="password"/>' +
        '<button id="buttonI" onclick="sendInfoLogin()">login</button>' +
        ' </div>' +
        ' </div>' +
        '</div>';

    $('#login').html(html);
    var menu = '<span class="span-menu">Sign In</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");

    $('#username').on('input', function(a) {
        $("#username").removeClass("inputError");
        $('#idEr').hide();
    });
    $('#pass').on('input', function(a) {
        $("#pass").removeClass("inputError");
        $('#idEr').hide();
    });
}