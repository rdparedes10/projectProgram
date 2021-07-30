function loadConsultFile(data){
    closeNav();
    $("#mySidenav").hide();
    $('#consultFile').show();
    hideAllMenu('consultFile');
    
    var html = addInputsInViewsInsert('consult_data');
    $('#consultFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Ingreso de Clientes</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('consult_data');
}

function getFilesAuthorized(data){
    
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.file.id + '" onclick="onClickTableAuthorized(this)" >'
        valuesTb += '<td >' + value.file.id + '</td>';
        valuesTb += '<td>' +value.file.sample + '</td>';
        valuesTb += '<td>' +value.client.name + '</td>';
        valuesTb += '<td>' +value.file.dateElaboration + '</td>';
        valuesTb += '<td>' +value.file.dueDate + '</td>';
        valuesTb += '<td>' + (value.file.cancelled === "false"? 'Activa': 'Anulada') + '</td>';
        valuesTb += ' </tr>';
    });
    var html = '<table class="table_client">' +
    ' <tr>'
        +'<th>Id</th>'
        +'<th>Muestra</th>'
        +'<th>Cliente</th>'
        +'<th>Fecha de Elaboración</th>'
        +'<th>Fecha de Caducidad</th>'
        +'<th>Estado de anulación</th>'
    +' </tr>'
    + valuesTb
    +'</table>';
return html;
}

function loadSuccessAuthorized() {
    closeNav();
    $("#mySidenav").hide();
    $('#consultFile').show();
    hideAllMenu('consultFile');

    var html = getSuccessView('Autorización de Ficha Exitoso');
    $('#consultFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Autorización de Fichas</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page")
}
