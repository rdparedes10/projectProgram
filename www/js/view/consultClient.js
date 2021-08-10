function loadConsultClient(){
    closeNav();
    $("#mySidenav").hide();
    $('#consultClient').show();
    hideAllMenu('consultClient');
    
    var html = addInputsInViewsInsert('consult_client_data');
    $('#consultClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Consultando Clientes</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('consult_client_data');
}

function loadSuccessConsultClient(data) {
    closeNav();
    $("#mySidenav").hide();
    $('#consultClient').show();
    hideAllMenu('consultClient');
    
    var html = consultClientTable(data.params);
    fileAndClients = data.params;
    $('#consultClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Consultando Clientes</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}


function consultClientTable(data){
    
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.ruc + '" onclick="onClickTableConsultClient(this)" >'
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