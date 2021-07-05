function loadAllClients(){
    var rqClients ={
        sessionId: sessionId,
        user: {
            user: $("#username").val(),
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
            user: $("#username").val(),
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
            user: $("#username").val(),
        },
    }
    var urlRequest = urlServices + getClientAllPath;
    sendPostInfoServices(urlRequest, rqClients, loadUpdateClient);
}