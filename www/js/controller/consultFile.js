function searchFile(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        client: {
            ruc: $( "#selectClient" ).val(),
        },
        file:{}
    };
    var flag_validate = false; 
    $.each(data, function(key,value) {
        if(value.type_tag === 'input'){
            if(($('#'+ value.id).val() !=='' && $('#'+ value.id).val() !== null) ){
                if(value.type === 'checkbox'){
                    jsonData.file[value.id] = $('#'+ value.id).is(':checked')? 'true': 'false';
                }else{
                    jsonData.file[value.id] = $('#'+ value.id).val();
                }
                flag_validate = true;
            }
        }
    });
    if(flag_validate){
        sendJsonFile(jsonData);
    }
}

function sendJsonSearchFile(jsonData){
 var urlRequest = urlServices + insertFilesPath;
    sendPostInfoServices(urlRequest, jsonData, successSearchFileView);
}

function successSearchFileView(data){
    if (data && data.statusInfo.code === '0') {
        loadSuccessFiles();
    } else {
        alert("Error");
    }
}