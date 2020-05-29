
var pos;
function addPositionMarker(elem) {
    $('#map-canvas').hide();
    $('#addPosition').show();
    $("body").removeClass('map-custom');
    var markersPos = elem.id;
	pos = parseInt(markersPos.substring(markersPos.length - 1));
    var html = '<div id="errorRegisterAccident"class="divInput errorSt" style="display: none;">Verifique los datos ingresados<br><br></div>';
    html += '<div class="form"><div id="addDate">';
    html += '   <div class="divInput"> <h2> Ingrese detalles de la ubicaci&oacute;n</h2> </div> ';
    html += '   <div class="divInput"> Ingrese la descripci&oacute;n del problema: <textarea class="inputForm" id="des" rows="4" cols="50"></textarea><br><br><br><br></div>';
    html += '   <div class="divInput"> <button class="buttonSu" id="buttonI" onclick="sendInfoAccident()"> Ingresar</button></div>';
    html += '   </div>';
    html += '</div>';
    $('#addPosition').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();"> &larr; Ingrese Datos</span>';
    $('#mainMenuQuito').html(menu);
    $('#des').on('input', function(a) {
        $("#des").removeClass("inputError");
        $('#errorRegisterAccident').hide();
    });
}

function sendInfoAccident() {
    
   
    if ($("#des").val() && markers[pos]) {
        var urlRequest = urlServices + registerAccident;
        
        var jsonData = {
            sessionId: sessionId,
            accident: {
                lon: markers[pos].getPosition().lng,
                lat: markers[pos].getPosition().lat,
                description: $("#des").val(),
            }
        };
        sendPostInfoServices(urlRequest, jsonData, validateGeo);
    } else {
        $("#des").addClass("inputError");
        $('#errorRegisterAccident').show();
    }
}

function validateGeo(data) {
    elemTemp = null;
    if (data && data.statusInfo.code === '0') {
        successRegistred();
    } else {
        $("#des").addClass("inputError");
        $('#errorRegisterAccident').show();
    }
}

function successRegistred(){
    $('#map-canvas').hide();
    $('#addPosition').show();
    $("body").removeClass('map-custom');
    var html = '<div id="addDate" class="form">';
    html += '   <div class="divSuccess"> <h3 style="margin: 0;"> Proceso de Ingreso de Solicitud </h2></div> ';
    html += '   <div class="div-message"> <p class="p-class"> Su solicitud fue ingresada exitosamente, un Asesor se comunicara pronto con usted.</p><br><br></div> ';
    html += '   <div> <button class="buttonSu" style="margin: 0;" onclick="backMenu()">Continuar</button></div>';
    html += '   </div>';
    $('#addPosition').html(html);
    var menu = '<span class="span-menu" onclick="backMenu();"> &larr; Ingreso Exitoso</span>';
    $('#mainMenuQuito').html(menu);
}