function loadInsertFile(clients) {
    closeNav();
    $("#mySidenav").hide();
    $('#insertFile').show();
    hideAllMenu('insertFile');

    var html = getListClient(clients);
    html += addInputsInViewsInsert('file_data');
    $('#insertFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr;  Ingreso de Fichas</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('file_data');

}

function getListClient(clients, optionSelected){

    var options = '';
    $.each(clients, function(key,value) {
        if(optionSelected === value.ruc ){
            options +='<option value="'+  value.ruc + '"  selected>' + value.name +  '</option>';
        }else {
            options +='<option value="'+  value.ruc + '">' + value.name +  '</option>';
        }
    });
    var listClient = '<div class="divSelect"> <label> Seleccione el cliente :  </label>' +
    '<select class="formSelect" name="selectClient" id="selectClient">'+
        options +
    '</select>'+
    '</div>';

    return listClient;
}

function loadSuccessFiles() {
    closeNav();
    $("#mySidenav").hide();
    $('#insertFile').show();
    hideAllMenu('insertFile');

    var html = getSuccessView('Ingreso Exitoso de los Datos de la ficha');
    $('#insertFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Ingreso de Fichas</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page")
}
