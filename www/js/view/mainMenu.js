function loadMenu() {
    closeNav();
    $("#mySidenav").show();
    $('#mainMenu').removeClass("hide-page");
    $('#idEr').hide();
    hideAllMenu('mainMenu');
    var html = '<div id="errorRegisterAccident"class="divInput errorSt" style="display: none;">Verifique los datos ingresados<br><br></div>';
    html += '<img src="img/mainMenu.jpg"  width="100%" height="100%">';
    var menu = '<span class="span-menu" onclick="openNav();">&#9776;Menu Principal</span>';
    $('#mainMenuQuito').html(menu);
    $('#mainMenu').html(html);
}

function backMenu() {
    var menu = '<span class="span-menu" onclick="openNav()">&#9776;Menu Principal</span>';
    $('#addPosition').hide();
    $('#user-data').hide();
    $('#contact').hide();
    $('#mainMenuQuito').html(menu);
    closeNav();
    $("#mySidenav").show();
    loadMenu();
}