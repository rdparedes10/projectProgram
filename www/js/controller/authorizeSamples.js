function onClickTableApproved(fileId){
    var data = getInputData();
    var html ='';
    $.each(fileAndClients, function(key,value) {
        if(value.file.id === fileId.id){
            file = value.file; 
        }
    });
    html +='<div style="background: #f2f2f2;"> ' ;
    html +='<h3 class="h3_anulation"> Datos de la Ficha</h3>';
    $.each(data['file_data'], function(key,value) {

        if(file[value.id]){
            
            html +='<label class="load_data_left"><b>' + value.placeholder +' : </b>' + '</label>' ;
            html +='<label class="load_data_right">' + file[value.id] + '</label>' ;
            html +='<br>';
            html +='<br>';
            html +='<br>';
        }
    });
    html +='</div>';
    html +='<button onclick="approvedFile();" class="button_load_data">Autorizar Muestra</button>';
    $('#authorizeSamples').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Autorización de Muestras</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}


function approvedFile() {
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        file:{
            "id": file.id,
        }
    };
    var urlRequest = urlServices + approvedFilePath;
    sendPostInfoServices(urlRequest, jsonData, validateApproved);
}

function validateApproved(data){
    if (data && data.statusInfo.code === '0') {
        loadSuccessApproved();
    } else {
        alert("Error");
    }
}