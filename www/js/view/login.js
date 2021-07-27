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
    clearSession();
    $("#mySidenav").hide();
    $('#login').show();
    hideAllMenu('login');

    var html ='<div class="login-page">' +
        '<div class="form">' +
        '<div class="div-login login-form">' +
        '<input type="text"  id="username"  placeholder="username"/>' +
        '<input type="password"   id="passLogin" placeholder="password"/>' +
        '<button id="buttonI" onclick="getSessionId()">login</button>' +
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
    $('#passLogin').on('input', function(a) {
        $("#passLogin").removeClass("inputError");
        $('#idEr').hide();
    });
}