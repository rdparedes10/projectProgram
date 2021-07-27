function loadUpdateUser(data){
    closeNav();
    $("#mySidenav").hide();
    $('#updateUser').show();
    hideAllMenu('updateUser');
    
    var html = getUsersUpdate(data.params);
    users = data.params;
    $('#updateUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Actualización de datos de Usuario</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}

function getUsersUpdate(data){

    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.ci + '" onclick="onClickTableUpdateUser(this)" >'
        valuesTb += '<td >' + value.ci + '</td>';
        valuesTb += '<td >' + value.userName + '</td>';
        valuesTb += '<td>' +value.email + '</td>';
        valuesTb += '<td>' +value.role + '</td>';
        valuesTb += ' </tr>';
    });
    var html = '<table class="table_client">' +
    ' <tr>'
        +'<th>CI</th>'
        +'<th>Username</th>'
        +'<th>Email</th>'
        +'<th>Rol</th>'
    +' </tr>'
    + valuesTb
    +'</table>';
    return html;
}

function loadSuccessUpdateUser() {
    closeNav();
    $("#mySidenav").hide();
    $('#updateUser').show();
    hideAllMenu('updateUser');

    var html = getSuccessView('Actualización de los Datos del Usuario Exitoso');
    $('#updateUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Actualización de datos de Usuario</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page")
}