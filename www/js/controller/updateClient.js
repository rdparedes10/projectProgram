function onClickTableUpdate(clientId){
    var data = getInputData();
    var html ='';
    $.each(fileAndClients, function(key,value) {
        if(value.ruc === clientId){
            client = value; 
        }
    });
    html +='<div style="background: #f2f2f2;"> ' ;
    html +='<h3 class="h3_anulation"> Datos del Cliente</h3>';
    $.each(data['user_data'], function(key,value) {

        if(client[value.id]){
            
            html +='<label class="load_data_left"><b>' + value.placeholder +' : </b>' + '</label>' ;
            html +='<label class="load_data_right">' + file[value.id] + '</label>' ;
            html +='<br>';
            html +='<br>';
            html +='<br>';
        }
    });
    html +='</div>';
    html +='<button onclick="cancelledFile();" class="button_load_data">Anular Ficha</button>';
    $('#anulationFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Anulación de Ficha</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
}

function addUpdateInViewsInsert(view){
    var data = getInputData();
    var html ='<div class="login-page">' +
        '<div class="form">' +
            '<div class="div-login login-form">';
    $.each(data[view], function(key,value) {

        switch(value.type_tag){
            case 'input' : {
                html +='<'+ value.type_tag + ' type=' + value.type + ' id='+ value.id  + ' placeholder="' + value.placeholder + '" ' + (value.style? ' style=' + value.style : "") + '/>' ;
                break;
            };
            case 'button':{
                html +='<'+ value.type_tag + ' id='+ value.id + ' ' + (value.style? ' style=' + value.style : "") +' >'+ value.placeholder + '</' + value.type_tag + '>' ;
                break; 
            };
            default : {
                html +='<'+ value.type_tag + ' id='+ value.id + ' ' +(value.style? ' style=' + value.style : "") + '>' + value.placeholder + '</' + value.type_tag + '>' ;
                break;
            }
        }
    });
    return html;
}