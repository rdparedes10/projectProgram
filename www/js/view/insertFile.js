function loadInsertFile() {
    closeNav();
    $("#mySidenav").hide();
    $('#insertFile').show();
    hideAllMenu('insertFile');

    var html = getListClient();
    html += addInputsInViewsInsert('file_data');
    $('#insertFile').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr;  Ingreso de Fichas</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('file_data');

}

function getListClient(){
    var listClient = '<div class="divSelect"> <label> Seleccione el cliente :  </label>' +
    '<select class="formSelect" name="selectClient" id="selectClient">'+
      '<option value="volvo">Volvo </option>'+
      '<option value="saab">Saab </option>'+
      '<option value="opel">Opel </option>'+
      '<option value="audi">Audi </option>'+
    '</select>'+
    '</div>';
    return listClient;
}