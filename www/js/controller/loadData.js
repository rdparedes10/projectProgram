function loadAllClients(){
    var rqClients ={
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
    }
    var urlRequest = urlServices + getClientAllPath;
    sendPostInfoServices(urlRequest, rqClients, successGetClients);
}

function successGetClients(data){
    if (data && data.statusInfo.code === '0') {
        loadInsertFile(data.params);    
    } else {
        alert("Error");
    }
}
function loadClientWithParams(params){

}

function loadAllFiles(){

}

function loadFileWithParams(params){

}


function getFileCancelled(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        cancelled: data,
    };
    sendJsonCancelledFile(jsonData);
}

function sendJsonCancelledFile(jsonData){
 var urlRequest = urlServices + getFilesCancelledPath;
    sendPostInfoServices(urlRequest, jsonData, successCancelledFilesView);
}

function successCancelledFilesView(data){
    if (data && data.statusInfo.code === '0') {
        loadCancelledtFile(data.params);    
    } else {
        alert("Error");
    }
}

function loadUpdateClientData(){
    var rqClients ={
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
    }
    var urlRequest = urlServices + getClientAllPath;
    sendPostInfoServices(urlRequest, rqClients, loadUpdateClient);
}

function loadUpdateFileData(){
    var rqClients ={
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
    }
    var urlRequest = urlServices + getFilesAllPath;
    sendPostInfoServices(urlRequest, rqClients, loadUpdateFiles);
}


function loadAllProfiles(profileId){
    var rqClients ={
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
    }
    var urlRequest = urlServices + getProfileAllPath;
    sendPostInfoServices(urlRequest, rqClients, function(data){
        getProfile(data, profileId);
    });
}

function getUserData() {
    var urlRequest = urlServices + getUserAll;
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
    };
    sendPostInfoServices(urlRequest, jsonData, function(data) {
        if (data && data.statusInfo.code === '0') {
            loadUpdateUser(data);
        }
    });
}