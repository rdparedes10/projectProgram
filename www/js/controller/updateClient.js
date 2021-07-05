function onClickTableUpdate(clientId){
    var data = getInputData();
    var html ='';
    $.each(fileAndClients, function(key,value) {
        if(value.ruc === clientId){
            client = value; 
        }
    });

    var html =     addUpdateInViewsInsert('clients_data', client);
    $('#updateClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Ingreso de Clientes</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('clients_data');
}

