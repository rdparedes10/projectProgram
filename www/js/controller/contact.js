function showContact(){
    closeNav();
    $('#map-canvas').hide();
    $('#addPosition').hide();
    $('#user-data').hide();
    $("body").removeClass('map-custom');
    $('#contact').show();
    var html = '<div id="successRegistered" class="form">';
	html += '   <div class="divSuccess"> <h3 style="margin: 0;">Contáctenos</h2></div> ';
    html += '   <div class="div-message"> <p class="p-class"> Estos son los numeros a los cuales se puede contactar:</p><br></div> ';
    html += '   <div class="div-message"> <p class="p-class"> E-mail: ventas@gmail.com <br>Teléfono: +593 2 244 5838</p><br><br></div> ';
	html += '   <div> <button class="buttonSu" style="margin: 0;" onclick="backMenu();">Continuar</button></div>';
	html += '   </div>';
    $('#contact').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();"> &larr; Contáctenos</span>';
    $('#mainMenuQuito').html(menu);
}