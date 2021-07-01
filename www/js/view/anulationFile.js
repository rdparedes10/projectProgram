function loadCancelledtFile(data){
    closeNav();
    $("#mySidenav").hide();
    $('#anulationFile').show();
    hideAllMenu('anulationFile');
    
    var html = getFiles(data);
    $('#anulationFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Consulta Clientes</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    // addEventsInputsInsert('clients_data');
}

function getFiles(data){
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr>'
        valuesTb += '<td>' + value.file.id + '</td>';
        valuesTb += '<td>' +value.file.sample + '</td>';
        valuesTb += '<td>' +value.client.name + '</td>';
        valuesTb += '<td>' +value.file.dateElaboration + '</td>';
        valuesTb += '<td>' +value.file.dueDate + '</td>';
        valuesTb += '<td><a href="#">' +value.file.cancelled + '</a></td>';
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