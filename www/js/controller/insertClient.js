function insertClient(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            user: $("#username").val(),
        },
        client:{}
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
        sendJsonClient(jsonData);
    }
}

function sendJsonClient(jsonData){
    var urlRequest = urlServices + insertClientPath;
    sendPostInfoServices(urlRequest, jsonData, succesInsertClientView);
}


function succesInsertClientView(data){
    if (data && data.statusInfo.code === '0') {
        loadSuccessClients();
    } else {
        alert("Error");
    }
}