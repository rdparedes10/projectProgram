function loadInsertClient() {
    closeNav();
    $("#mySidenav").hide();
    $('#insertClient').show();
    hideAllMenu('insertClient');

   var html = addInputsInViewsInsert('clients_data');
    $('#insertClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Ingreso de Clientes</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page");
    addEventsInputsInsert('clients_data');
}
function loadSuccessClients() {
    closeNav();
    $("#mySidenav").hide();
    $('#insertClient').show();
    hideAllMenu('insertClient');

    var html = getSuccessView('Ingreso Exitoso de los Datos del Cliente');
    $('#insertClient').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();">&larr; Ingreso de Clientes</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenuQuito').removeClass("hide-page")
}