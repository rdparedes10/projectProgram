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
    users = data.params;
    $('#consultUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Consultando Usuarios</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}


function consultUserTable(data){
    var valuesTb = "";
    $.each(data, function(key,value) {
        valuesTb += ' <tr id="' + value.ci + '" onclick="onClickTableConsultUser(this)" >'
        valuesTb += '<td >' + value.ci + '</td>';
        valuesTb += '<td >' + value.userName + '</td>';
        valuesTb += '<td>' +value.email + '</td>';
        valuesTb += '<td>' +value.role + '</td>';
        valuesTb += ' </tr>';
    });
    var html = '<table class="table_client">' +
    ' <tr>'
        +'<th>Ci</th>'
        +'<th>UserName</th>'
        +'<th>Email</th>'
        +'<th>Role</th>'
    +' </tr>'
    + valuesTb
    +'</table>';
    return html;
}