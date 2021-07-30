function loadApprovedFile(data){
    closeNav();
    $("#mySidenav").hide();
    $('#authorizeSamples').show();
    hideAllMenu('authorizeSamples');
    
    var html = getFilesApproved(data);
    fileAndClients = data;
    $('#authorizeSamples').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Autorización de Muestras</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}

function getFilesApproved(data){
    
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.file.id + '" onclick="onClickTableApproved(this)" >'
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

function loadSuccessApproved() {
    closeNav();
    $("#mySidenav").hide();
    $('#authorizeSamples').show();
    hideAllMenu('authorizeSamples');

    var html = getSuccessView('Autorización de Ficha Exitoso');
    $('#authorizeSamples').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Autorización de Muestras</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page")
}
