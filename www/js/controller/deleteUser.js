function onClickTableDeleteUser(userId){
    var data = getInputData();
    var html ='';
    $.each(fileAndClients, function(key,value) {
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
    html +='<button onclick="deleteUserService();" class="button_load_data">Eliminar Usuario</button>';
    $('#deleteUser').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Eliminar Usuario</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}


function deleteUserService() {
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        file:{
            "id": file.id,
        },
        dataOld: user.ci
    };
    var urlRequest = urlServices + deleteUserPath;
    sendPostInfoServices(urlRequest, jsonData, succesDeleteUserView);
}

function succesDeleteUserView(data){
    if (data && data.statusInfo.code === '0') {
        loadSuccessDeleteUser();
    } else {
        alert("Error");
    }
}

