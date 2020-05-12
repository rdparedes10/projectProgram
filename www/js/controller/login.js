function loadLogin(){
	var html = '';
	html += '   <div class="divInput"> <h2> Ingrese detalles de la ubicaci&oacute;n</h2> </div> ';
	html += '   <div id="idEr"class="divInput errorSt" style="display: none;"> Los Datos ingresados estan incorrectos por favor ingrese nuevamente<br><br></div>';
	html += '   <div class="divInput"> Ingrese su Usuario: <input class="inputForm" type="text" id="CI" name="CI" value=""><br><br></div>';
	html += '   <div class="divInput"> Ingrese su Contraseña: <input class="inputForm" type="text" id="firstName" name="firstName" value=""><br><br></div>';
	html += '   <div class="divInput"> Ingrese su n&uacute;mero de celular : <input class="inputForm"type="text" id="number" name="number" value=""><br><br></div>';
	html += '   <div class="divInput"> Ingrese la descripci&oacute;n de del problema: <textarea class="inputForm" id="des" rows="4" cols="50"></textarea><br><br><br><br></div>';
	html += '   <div class="divInput"> <button class="buttonSu" id="buttonI" onclick="sendInfo()"> Ingresar</button></div>';
	html += '';
	//html += '<div> Ingrese su numero de cedula: <input type="text" name="FirstName" value=""><br></div>' ;
	$('#login').html(html);
	var menu = '<span class="span-menu" onclick="backMenu();"> Login</span>';
	$('#mainMenuQuito').html(menu);
}
