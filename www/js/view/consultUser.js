function loadConsultUser(data){
    closeNav();
    $("#mySidenav").hide();
    $('#consultUser').show();
    hideAllMenu('consultUser');
    
    var html = addInputsInViewsInsert('consult_user_data');
    $('#consultUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Consultando Usuarios</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('consult_user_data');
}

function loadSuccessConsultUser(data) {
    closeNav();
    $("#mySidenav").hide();
    $('#consultUser').show();
    hideAllMenu('consultUser');
    
    var html = consultUserTable(data.params);
    fileAndUsers = data.params;
    $('#consultUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Consultando Usuarios</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}


function consultUserTable(data){
    
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.ruc + '" onclick="onClickTableConsultUser(this)" >'
        valuesTb += '<td >' + value.ruc + '</td>';
        valuesTb += '<td >' + value.name + '</td>';
        valuesTb += '<td>' +value.date + '</td>';
        valuesTb += '<td>' +value.email + '</td>';
        valuesTb += '<td>' +value.phone + '</td>';
        valuesTb += '<td>' +value.mobile + '</td>';
        valuesTb += ' </tr>';
    });
    var html = '<table class="table_user">' +
    ' <tr>'
        +'<th>RUC</th>'
        +'<th>Usere</th>'
        +'<th>Fecha de Registro</th>'
        +'<th>Email</th>'
        +'<th>Telefono</th>'
        +'<th>Celular</th>'
    +' </tr>'
    + valuesTb
    +'</table>';
    return html;
}