function onClickTableUpdateFile(fileId, dataClient){
    var data = getInputData();
    $.each(fileAndClients, function(key,value) {
        if(value.id === fileId.id){
            file = value; 
        }
    });
    var html = getListClient(dataClient, file.clientRuc);
    html += addUpdateInViewsInsert('file_data', file, 'buttonUpdateFile');
    $('#updateFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Actualizacion de datos de Ficha</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('file_data');

    $('#buttonUpdateFile').on('click',function() {
        updateFile(data['file_data']);
    });
}


function updateFile(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        client: {
            ruc: $( "#selectClient" ).val(),
        },
        dataOld: file.id,
        file: {}
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
        sendJsonUpdateFile(jsonData);
    }
}

function sendJsonUpdateFile(jsonData){
 var urlRequest = urlServices + updateFilesPath;
    sendPostInfoServices(urlRequest, jsonData, succesUpdateFileView);
}

function succesUpdateFileView(data){
    if (data && data.statusInfo.code === '0') {
        loadSuccessUpdateFile();
    } else {
        alert("Error");
    }
}


function loadAllUpdateFile(fileId){
    var rqClients ={
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
    }
    var urlRequest = urlServices + getClientAllPath;
    sendPostInfoServices(urlRequest, rqClients, function(data){
        onClickTableUpdateFile(fileId, data.params);
    });
}