function loadInsertFiles() {
    closeNav();
    $("#mySidenav").hide();
    $('#login').show();
    hideAllMenu('login');

    var html = '<div id="idErClient"class="divInput errorSt" style="display: none;">Verifique los datos ingresados<br><br></div>' +
        '<div class="login-page">' +
            '<div class="form">' +
                '<div class="div-login login-form">' +
                    '<input type="text"  id="clientName"  placeholder="Nombre del Cliente"/>' +
                    '<input type="text"  id="ruc"  placeholder="RUC o Cédula"/>' +
                    '<input type="text"  id="clientAddress"  placeholder="Dirección del cliente"/>' +
                    '<input type="text"  id="phone"  placeholder="Número de telefono"/>' +
                    '<input type="text"  id="mobile"  placeholder="Número de celular"/>' +
                    '<input type="text"  id="email"  placeholder="Email del cliente"/>' +
                    '<label>Envío por email</label><input type="checkbox"  id="isEmailSend"/>' +
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