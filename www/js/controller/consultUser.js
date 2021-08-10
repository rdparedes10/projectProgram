
function searchUser(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
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
        sendJsonSearchUser(jsonData);
    }
}

function sendJsonSearchUser(jsonData){
 var urlRequest = urlServices + searchUserPath;
    sendPostInfoServices(urlRequest, jsonData, successSearchUserView);
}

function successSearchUserView(data){
    if (data && data.statusInfo.code === '0' && data.params !=null) {
        loadSuccessConsultUser(data);
    } else {
        alert("Error");
    }
}


function onClickTableConsultUser(userId){
    var data = getInputData();
    var html ='';
    $.each(users, function(key,value) {
        if(value.ci === userId.id){
            user = value; 
        }
    });
    html +='<div style="background: #f2f2f2;"> ' ;
    html +='<h3 class="h3_anulation"> Datos del Usuario</h3>';
    $.each(data['user_data'], function(key,value) {

        if(user[value.id]){
            
            html +='<label class="load_data_left"><b>' + value.placeholder +' : </b>' + '</label>' ;
            html +='<label class="load_data_right">' + user[value.id] + '</label>' ;
            html +='<br>';
            html +='<br>';
            html +='<br>';
        }
    });
    html +='</div>';
    html +='<button onclick="loadMenu();" class="button_load_data">Continuar</button>';
    $('#consultUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Consultando Usuarios</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}