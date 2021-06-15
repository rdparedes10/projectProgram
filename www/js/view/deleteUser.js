function loadDeleteUser(){
    closeNav();
    $("#mySidenav").hide();
    $('#deleteUser').show();
    hideAllMenu('deleteUser');
    
    var html = getClients();
    $('#deleteUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Consulta Clientes</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    // addEventsInputsInsert('clients_data');
}

function getClients(){
    var html = '<table class="table_client">' +
    '<tr>' 
        +'<th>Firstname</th>'
        +'<th>Lastname</th> '
        +'<th>Age</th>'
    +' </tr>'
    +' <tr>'
        +'<td>Jill</td>'
        +'<td>Smith</td>'
        +'<td>50</td>'
    +' </tr>'
    +' <tr>'
        +'<td>Eve</td>'
        +'<td>Jackson</td>'
        +'<td>94</td>'
    +'</tr>'
    +'<tr>'
        +'<td>John</td>'
        +'<td>Doe</td>'
        +'<td>80</td>'
    +'</tr>'
    +'</table>';
return html;
}