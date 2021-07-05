function loadUpdateClient(data){
    closeNav();
    $("#mySidenav").hide();
    $('#updateClient').show();
    hideAllMenu('updateClient');
    
    var html = getClientsUpdate(data.params);
    fileAndClients = data.params;
    $('#updateClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Consulta Clientes</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    // addEventsInputsInsert('clients_data');
}

function getClientsUpdate(data){
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.ruc + '" onclick="onClickTableAnulation(this)" >'
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