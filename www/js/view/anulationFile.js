function loadCancelledtFile(data){
    closeNav();
    $("#mySidenav").hide();
    $('#anulationFile').show();
    hideAllMenu('anulationFile');
    
    var html = getFiles(data);
    fileAndClients = data;
    $('#anulationFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Anulación de Fichas</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}

function getFiles(data){
    
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.file.id + '" onclick="onClickTableAnulation(this)" >'
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

function loadSuccessAnulation() {
    closeNav();
    $("#mySidenav").hide();
    $('#anulationFile').show();
    hideAllMenu('anulationFile');

    var html = getSuccessView('Anulación de Ficha Exitoso');
    $('#anulationFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Anulación de Fichas</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page")
}
