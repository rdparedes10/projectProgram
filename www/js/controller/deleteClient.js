function onClickTableDeleteClient(clientId){
    var data = getInputData();
    var html ='';
    $.each(fileAndClients, function(key,value) {
        if(value.ruc === clientId.id){
            client = value; 
        }
    });

    var html = addDeleteInViewsInsert('clients_data', client, 'buttonDeleteClient');
    $('#deleteClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Actualizacion de datos de Cliente</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('clients_data');

    $('#buttonDeleteClient').on('click',function() {
        deleteClient(data['clients_data']);
    });
}


function deleteClient(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        dataOld: client.ruc,
        client: {}
    };
    var flag_validate = true; 
    $.each(data, function(key,value) {
        if(value.type_tag === 'input'){
            if(($('#'+ value.id).val() !=='' && $('#'+ value.id).val() !== null) ){
                if(value.type === 'checkbox'){
                    jsonData.client[value.id] = $('#'+ value.id).is(':checked')? 'true': 'false';
                }else{
                    jsonData.client[value.id] = $('#'+ value.id).val();
                }
            } else {
                $('#'+ value.id).val('');
                $('#'+ value.id).css('border', '2px solid rgb(185, 20, 20)');
                $('#idEr').show();
                flag_validate = false;
            }
        }
    });
    if(flag_validate){
        sendJsonDeleteClient(jsonData);
    }
}

function sendJsonDeleteClient(jsonData){
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

