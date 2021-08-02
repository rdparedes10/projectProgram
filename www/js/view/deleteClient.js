function loadDeleteClient(data){
    closeNav();
    $("#mySidenav").hide();
    $('#deleteClient').show();
    hideAllMenu('deleteClient');

    var html = getClientsDelete(data.params);
    fileAndClients = data.params;
    $('#deleteClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Borrar datos de Cliente</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}

function getClientsDelete(data){
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.ruc + '" onclick="onClickTableDeleteClient(this)" >'
        valuesTb += '<td >' + value.ruc + '</td>';
        valuesTb += '<td >' + value.name + '</td>';
        valuesTb += '<td>' +value.date + '</td>';
        valuesTb += '<td>' +value.email + '</td>';
        valuesTb += '<td>' +value.phone + '</td>';
        valuesTb += '<td>' +value.mobile + '</td>';
        valuesTb += ' </tr>';
    });
    var html = '<table class="table_client">' +
    ' <tr>'
        +'<th>RUC</th>'
        +'<th>Cliente</th>'
        +'<th>Fecha de Registro</th>'
        +'<th>Email</th>'
        +'<th>Telefono</th>'
        +'<th>Celular</th>'
    +' </tr>'
    + valuesTb
    +'</table>';
    return html;
}

function loadSuccessDeleteClient() {
    closeNav();
    $("#mySidenav").hide();
    $('#deleteClient').show();
    hideAllMenu('deleteClient');

    var html = getSuccessView('Datos del Cliente eliminados con Exitoso');
    $('#deleteClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Borrar de datos de Cliente</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page")
}