var sessionId = '';

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
        loadMenu();
    } else {
        $("#username").addClass("inputError");
        $("#pass").addClass("inputError");
        $('#idEr').show();
    }

}

function getSessionId() {
    var urlRequest = urlServices + createSession;
    sendGetInfoServices(urlRequest, function(data) {
        sessionId = data.params.sessionId;
        sendInfoLogin();
    });
}

function logout() {
    loadLogin();
    beforeLoadLogin();
}


function beforeLoadLogin() {
    $('.message a').click(function() {
        $('.div-login').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });

    $("#isClient").on('change', function() {
        getTypeInsurance();
        $('.div-client').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
}