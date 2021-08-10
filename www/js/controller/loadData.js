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
    if (data && data.statusInfo.code === '0' && data.params.length > 0) {
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
        if (data && data.statusInfo.code === '0' && data.params.length > 0) {
            loadUpdateUser(data);
        }
    });
}


function getFileAuthorized(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        authorized: data,
    };
    sendJsonAuthorizedFile(jsonData);
}


function getFileApproved(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        approved: data,
    };
    sendJsonApprovedFile(jsonData);
}


function sendJsonAuthorizedFile(jsonData){
    var urlRequest = urlServices + getAuthorizedFiles;
    sendPostInfoServices(urlRequest, jsonData, successAuthorizedFilesView);
}

function sendJsonApprovedFile(jsonData){
    var urlRequest = urlServices + getApprovedFiles;
    sendPostInfoServices(urlRequest, jsonData, successApprovedFilesView);
}

function successAuthorizedFilesView(data){
    if (data && data.statusInfo.code === '0' && data.params.length > 0) {
        loadAuthorizedFile(data.params);    
    } else {
        alert("Error");
    }
}

function successApprovedFilesView(data){
    if (data && data.statusInfo.code === '0' && data.params.length > 0) {
        loadApprovedFile(data.params);    
    } else {
        alert("Error");
    }
}


function getAllFile(data){
    var jsonData = {
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
        approved: data,
    };
    sendJsonAllFile(jsonData);
}


function sendJsonAllFile(jsonData){
    var urlRequest = urlServices + getAuthorizedFiles;
    sendPostInfoServices(urlRequest, jsonData, successAllFileView);
}

function successAllFileView(data){
    if (data && data.statusInfo.code === '0' && data.params.length > 0) {
        loadConsultFile(data.params);    
    } else {
        alert("Error");
    }
}


function loadDeleteClientData(){
    var rqClients ={
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
    }
    var urlRequest = urlServices + getClientAllPath;
    sendPostInfoServices(urlRequest, rqClients, loadDeleteClient);
}


function loadConsultClientData(){
    var rqClients ={
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
    }
    var urlRequest = urlServices + getClientAllPath;
    sendPostInfoServices(urlRequest, rqClients, loadConsultClient);
}

function loadDeleteUserData(){
    var rqUsers ={
        sessionId: sessionId,
        user: {
            userName: $("#username").val(),
        },
    }
    var urlRequest = urlServices + getUserAll;
    sendPostInfoServices(urlRequest, rqUsers, loadDeleteUser);
}