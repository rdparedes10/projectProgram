function onClickTableUpdateUser(userId){
    var data = getInputData();
    var html ='';
    $.each(users, function(key,value) {
        if(value.ci === userId.id){
            user = value; 
        }
    });
    var html = addUpdateInViewsInsert('user_data', user, 'buttonUpdateUser');
    loadAllProfiles(user.role);
    $('#updateUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Actualizacion de datos de Ficha</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('user_data');

    $('#buttonUpdateUser').on('click',function() {
        updateUser(data['user_data']);
    });
}


function updateUser(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            role: $('#role').val(),
        },

        dataOld: user.ci,
        file: {}
    };
    var flag_validate = true; 
    $.each(data, function(key,value) {
        if(value.type_tag === 'input'){
            if(($('#'+ value.id).val() !=='' && $('#'+ value.id).val() !== null) ){
                if(value.type === 'checkbox'){
                    jsonData.user[value.id] = $('#'+ value.id).is(':checked')? 'true': 'false';
                }else if(value.type === 'password'){
                    jsonData.user[value.id] = encryptionText($('#'+ value.id).val());
                }else {
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
        sendJsonUpdateUser(jsonData);
    }
}

function sendJsonUpdateUser(jsonData){
    var urlRequest = urlServices + updateUsersPath;
    sendPostInfoServices(urlRequest, jsonData, succesUpdateUserView);
}

function succesUpdateUserView(data){
    if (data && data.statusInfo.code === '0') {
        loadSuccessUpdateUser();
    } else {
        alert("Error");
    }
}


function loadAllUpdateUser(fileId){
    var rqClients ={
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
    }
    var urlRequest = urlServices + getClientAllPath;
    sendPostInfoServices(urlRequest, rqClients, function(data){
        onClickTableUpdateUser(fileId, data.params);
    });
}
