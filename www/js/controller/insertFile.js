function insertFile(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            user: $("#username").val(),
        },
        client: {
            ruc: $( "#selectClient" ).val(),
        },
        file:{}
    };
    var flag_validate = true; 
    $.each(data, function(key,value) {
        if(value.type_tag === 'input'){
            if(($('#'+ value.id).val() !=='' && $('#'+ value.id).val() !== null) ){
                if(value.type === 'checkbox'){
                    jsonData.file[value.id] = $('#'+ value.id).is(':checked')? 'true': 'false';
                }else{
                    jsonData.file[value.id] = $('#'+ value.id).val();
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
        sendJsonFile(jsonData);
    }
}

function sendJsonFile(jsonData){
 var urlRequest = urlServices + insertFilesPath;
    sendPostInfoServices(urlRequest, jsonData, succesInsertFilesView);
}

function succesInsertFilesView(data){
    if (data && data.statusInfo.code === '0') {
        loadSuccessFiles();
    } else {
        alert("Error");
    }
}