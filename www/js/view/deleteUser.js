function loadDeleteUser(data){
    closeNav();
    $("#mySidenav").hide();
    $('#deleteUser').show();
    hideAllMenu('deleteUser');

    var html = getUsersDelete(data.params);
    fileAndClients = data.params;
    $('#deleteUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Eliminar Usuario</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}

function getUsersDelete(data){
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.ci + '" onclick="onClickTableDeleteUser(this)" >'
        valuesTb += '<td >' + value.ci + '</td>';
        valuesTb += '<td >' + value.userName + '</td>'; 
        valuesTb += '<td>' +value.email + '</td>';
        valuesTb += '<td>' +value.role + '</td>';
        valuesTb += ' </tr>';
    });
    var html = '<table class="table_client">' +
    ' <tr>'
        +'<th>CI</th>'
        +'<th>User Name</th>'
        +'<th>Email</th>'
        +'<th>Rol</th>'
    +' </tr>'
    + valuesTb
    +'</table>';
    return html;
}

function loadSuccessDeleteUser() {
    closeNav();
    $("#mySidenav").hide();
    $('#deleteUser').show();
    hideAllMenu('deleteUser');

    var html = getSuccessView('Datos del Usuario eliminados con Exitoso');
    $('#deleteUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Eliminar Usuario</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page")
}