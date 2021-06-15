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