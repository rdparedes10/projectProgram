function openRegistration() {
    var html = '';
    html += '   <div class="divInput"> <h2> Ingrese detalles de la ubicaci&oacute;n</h2> </div> ';
    html += '   <div id="idEr"class="divInput errorSt" style="display: none;"> Los Datos ingresados estan incorrectos por favor ingrese nuevamente<br><br></div>';
    html += '   <div class="divInput"> Ingrese su Usuario: <input class="inputForm" type="text" id="username" name="username" value=""><br><br></div>';
    html += '   <div class="divInput"> Ingrese su Contraseña: <input class="inputForm" type="password" id="pass" name="pass" value=""><br><br></div>';
    html += '   <div class="divInput"> <button class="buttonSu" id="buttonI" onclick="sendInfoLogin()"> Ingresar</button></div>';
    html += '   <div class="divInput"> <button class="buttonSu" id="buttonI" onclick="openRegistration()"> Registro</button></div>';
    html += '';
    //html += '<div> Ingrese su numero de cedula: <input type="text" name="FirstName" value=""><br></div>' ;
    $('#login').html(html);
    var menu = '<span class="span-menu"> Login</span>';
    $('#mainMenuQuito').html(menu);
}