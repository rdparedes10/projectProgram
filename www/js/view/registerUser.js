function loadRegisterUser() {
    closeNav();
    $("#mySidenav").hide();
    $('#registerUser').show();
    hideAllMenu('registerUser');

   var html = addInputsInViewsInsert('user_data');
    $('#registerUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Registro de Usuarios</span>';
    $('#mainMenuQuito').html(menu);
    getRole()
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('user_data');
}


function getRole(){
    var o = new Option("option text", "value");
    $(o).html("option text");
    $("#role").append(o);
    $("#role").addClass("formSelect");
}