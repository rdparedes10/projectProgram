function addPositionMarker(elem) {
    $('#map-canvas').hide();
    $('#addPosition').show();
    $("body").removeClass('map-custom');
    var html = '<div id="errorRegisterAccident"class="divInput errorSt" style="display: none;">Verifique los datos ingresados<br><br></div>';
    html += '<div class="form"><div id="addDate">';
    html += '   <div class="divInput"> <h2> Ingrese detalles de la ubicaci&oacute;n</h2> </div> ';
    html += '   <div class="divInput"> Ingrese su n&uacute;mero de cedula: <input class="inputForm" type="text" id="ci" name="CI" value=""><br><br></div>';
    html += '   <div class="divInput"> Ingrese su n&uacute;mero de celular : <input class="inputForm"type="text" id="number" name="number" value=""><br><br></div>';
    html += '   <div class="divInput"> Ingrese la descripci&oacute;n del problema: <textarea class="inputForm" id="des" rows="4" cols="50"></textarea><br><br><br><br></div>';
    html += '   <div class="divInput"> <button class="buttonSu" id="buttonI" onclick="sendInfo()"> Ingresar</button></div>';
    html += '   </div>';
    html += '</div>';
    $('#addPosition').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();"> &larr; Ingrese Datos</span>';
    $('#mainMenuQuito').html(menu);

}

function sendInfo() {

    if ($("#ci").val() && $("#number").val() && $("#des").val()) {

        backMenu();
        initMap();
    } else {
        $("#ci").addClass("inputError");
        $("#number").addClass("inputError");
        $("#des").addClass("inputError");
        $('#errorRegisterAccident').show();
    }
}