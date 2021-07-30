function onClickTableUpdateUser(data){
    var jsonData = {
        sessionId: sessionId,
        client: {
            ruc: $( "#selectClient" ).val(),
        },
        user:{
            role: $('#role').val(),
        },
    };
    var flag_validate = true; 
    $.each(data, function(key,value) {
        if(value.type_tag === 'input'){
            if(($('#'+ value.id).val() !=='' && $('#'+ value.id).val() !== null) ){
                if(value.type === 'checkbox'){
                    jsonData.user[value.id] = $('#'+ value.id).is(':checked')? 'true': 'false';
                }else if(value.type === 'password'){
                    jsonData.user[value.id] = encryptionText($('#'+ value.id).val());
                }else{
                    
                    jsonData.user[value.id] = $('#'+ value.id).val();
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
        sendJsonUser(jsonData);
    }
}

function sendJsonUser(jsonData){
    var urlRequest = urlServices + insertUserPath;
    sendPostInfoServices(urlRequest, jsonData, succesInsertUsersView);
}

function succesInsertUsersView(data){
    if (data && data.statusInfo.code === '0') {
        loadSuccessUsers();
    } else {
        alert("Error");
    }
}

