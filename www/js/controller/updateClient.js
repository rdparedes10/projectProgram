function onClickTableUpdateClient(clientId){
    var data = getInputData();
    $.each(fileAndClients, function(key,value) {
        if(value.ruc === clientId.id){
            client = value; 
        }
    });
    var html = addUpdateInViewsInsert('clients_data', client, 'buttonUpdateClient');
    $('#updateClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Actualizacion de datos de Cliente</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('clients_data');

    $('#buttonUpdateClient').on('click',function() {
        updateClient(data['clients_data']);
    });
}


function updateClient(data){
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
        sendJsonUpdateClient(jsonData);
    }
}

function sendJsonUpdateClient(jsonData){
 var urlRequest = urlServices + updateClientPath;
    sendPostInfoServices(urlRequest, jsonData, succesUpdateClientView);
}

function succesUpdateClientView(data){
    if (data && data.statusInfo.code === '0') {
        loadSuccessUpdateClient();
    } else {
        alert("Error");
    }
}

