function showData(data) {
    closeNav();
    hideAllMenu('consultDataUser');
    $("body").removeClass('map-custom');
    $('#consultDataUser').show();
    var photo;
    var html = '<div id="successRegistered" class="form-data">';
    html += '   <div class="divSuccess"> <h3 style="margin: 0;">Sus Datos</h2></div> ';

    $.each(data.params, function(i, params) {
        $.each(params, function(key, value) {
            if (key !== 'photo') {
                html += '   <div class="div-message"> <p class="p-class"> ' + key + ':&nbsp;' + value + '</p></div> ';
            } else {
                photo = value;
                html += '   <div class="div-message" id="divPhoto"> <p class="p-class"> ' + key + ':&nbsp;</p></div> ';
            }
        });
    });
    html += '   <div> <button class="buttonSu" style="margin: 0;" onclick="backMenu();">Continuar</button></div>';
    html += '   </div>';
    $('#consultDataUser').html(html);
    var image = new Image(250, 250);
    image.src = 'data:image/jpeg;base64,' + photo;
    image.className = "image-data";

    $('#divPhoto').html(image);
    var menu = '<span class="span-menu" onclick="backMenu();"> &larr; Sus Datos</span>';
    $('#mainMenuQuito').html(menu);
}


function getUserData() {
    var urlRequest = urlServices + getUserDataURL;
    var jsonData = {
        sessionId: sessionId,
    };
    sendPostInfoServices(urlRequest, jsonData, function(data) {
        if (data && data.statusInfo.code === '0') {
            showData(data);
        }
    });
}