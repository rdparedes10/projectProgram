function loadRegisterUser() {
    closeNav();
    $("#mySidenav").hide();
    $('#registerUser').show();
    hideAllMenu('registerUser');

   var html = addInputsInViewsInsert('user_data');
    $('#registerUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Registro de Usuarios</span>';
    $('#mainMenuQuito').html(menu);
    loadAllProfiles();
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('user_data');
}


function getProfile(data, profileId){
    $.each(data.params, function(key,value) {
        var o = '';
        if(value.role === profileId){
            o = new Option(value.role, value.role, true, false);
        }else {
            o = new Option(value.role, value.role);
        }
        $(o).html(value.role);
        $("#role").append(o);
        $("#role").addClass("formSelect");
    });
}


function loadSuccessUsers() {
    closeNav();
    $("#mySidenav").hide();
    $('#insertUser').show();
    hideAllMenu('registerUser');

    var html = getSuccessView('Ingreso Registro de Usuario');
    $('#registerUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Ingreso Registro de Usuario</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page")
}
