function onClickTableDeleteClient(clientId){
    var data = getInputData();
    var html ='';
    $.each(fileAndClients, function(key,value) {
        if(value.ruc === clientId.id){
            client = value; 
        }
    });
    html +='<div style="background: #f2f2f2;"> ' ;
    html +='<h3 class="h3_anulation"> Datos del Cliente</h3>';
    $.each(data['clients_data'], function(key,value) {

        if(client[value.id]){
            
            html +='<label class="load_data_left"><b>' + value.placeholder +' : </b>' + '</label>' ;
            html +='<label class="load_data_right">' + client[value.id] + '</label>' ;
            html +='<br>';
            html +='<br>';
            html +='<br>';
        }
    });
    html +='</div>';
    html +='<button onclick="deleteClientService();" class="button_load_data">Eliminar Cliente</button>';
    $('#deleteClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Eliminar Cliente</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}


function deleteClientService() {
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        file:{
            "id": file.id,
        },
        dataOld: client.ruc
    };
    var urlRequest = urlServices + deleteClientPath;
    sendPostInfoServices(urlRequest, jsonData, succesDeleteClientView);
}

function succesDeleteClientView(data){
    if (data && data.statusInfo.code === '0') {
        loadSuccessDeleteClient();
    } else {
        alert("Error");
    }
}

