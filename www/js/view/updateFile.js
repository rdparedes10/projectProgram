function loadUpdateFiles(data){
    closeNav();
    $("#mySidenav").hide();
    $('#updateFile').show();
    hideAllMenu('updateFile');
    
    var html = getFilesUpdate(data.params);
    fileAndClients = data.params;
    $('#updateFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Actualización de datos de Ficha</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");

}

function getFilesUpdate(data){
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.id + '" onclick="loadAllUpdateFile(this)" >'
        valuesTb += '<td >' + value.id + '</td>';
        valuesTb += '<td >' + value.sample + '</td>';
        valuesTb += '<td >' + value.feature + '</td>';
        valuesTb += '<td>' +value.lote + '</td>';
        valuesTb += '<td>' +value.localization + '</td>';
        valuesTb += '<td>' +value.container + '</td>';
        valuesTb += '<td>' +value.dateElaboration + '</td>';
        valuesTb += '<td>' +value.dueDate + '</td>';
        valuesTb += ' </tr>';
    });
    var html = '<table class="table_client">' +
    ' <tr>'
        +'<th>Id</th>'
        +'<th>Muestra</th>'
        +'<th>Caracteristicas</th>'
        +'<th>Lote</th>'
        +'<th>Localizacion</th>'
        +'<th>Contenido</th>'
        +'<th>Fecha de Elaboracion</th>'
        +'<th>Fecha de Vencimiento</th>'
    +' </tr>'
    + valuesTb
    +'</table>';
    return html;
}

function loadSuccessUpdateFile() {
    closeNav();
    $("#mySidenav").hide();
    $('#updateFile').show();
    hideAllMenu('updateFile');

    var html = getSuccessView('Actualización de los Datos del ficha Exitoso');
    $('#updateFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Actualización de datos de Ficha</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page")
}