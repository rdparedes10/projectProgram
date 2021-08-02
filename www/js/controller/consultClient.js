function searchClient(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        client: {
            ruc: $( "#selectClient" ).val(),
        },
        search:{}
    };
    var flag_validate = false; 
    $.each(data, function(key,value) {
        if(value.type_tag === 'input'){
            if(($('#'+ value.id).val() !=='' && $('#'+ value.id).val() !== null) ){
                if(value.type === 'checkbox'){
                    jsonData.search[value.id] = $('#'+ value.id).is(':checked')? 'true': 'false';
                }else{
                    jsonData.search[value.id] = $('#'+ value.id).val();
                }
                flag_validate = true;
            }
        }
    });
    if(flag_validate){
        sendJsonSearchClient(jsonData);
    }
}

function sendJsonSearchClient(jsonData){
 var urlRequest = urlServices + searchFilePath;
    sendPostInfoServices(urlRequest, jsonData, successSearchClientView);
}

function successSearchClientView(data){
    if (data && data.statusInfo.code === '0' && data.params !=null) {
        loadSuccessConsultClient(data);
    } else {
        alert("Error");
    }
}


function onClickTableConsultClient(clientId){
    var data = getInputData();
    var html ='';
    $.each(clientAndClients, function(key,value) {
        if(value.client.id === clientId.id){
            client = value.client; 
        }
    });
    html +='<div style="background: #f2f2f2;"> ' ;
    html +='<h3 class="h3_anulation"> Datos de la Ficha</h3>';
    $.each(data['client_data'], function(key,value) {

        if(client[value.id]){
            
            html +='<label class="load_data_left"><b>' + value.placeholder +' : </b>' + '</label>' ;
            html +='<label class="load_data_right">' + client[value.id] + '</label>' ;
            html +='<br>';
            html +='<br>';
            html +='<br>';
        }
    });
    html +='</div>';
    html +='<button onclick="consultFileShow();" class="button_load_data">Ver Documento</button>';
    $('#consultFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Consultando Fichas</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}