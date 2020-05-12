/**
 * 
 */

/* navigator.geolocation.getCurrentPosition(onSuccess, onError, {
	timeout : 30000
}); */
var map;
var markers = [];
var positionNow;
var contentSend = {};
var serviceCom;
function initMap() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
}
function onSuccess(position) {

	//Google Maps
	var myLatlng = { lat: position.coords.latitude, lng: position.coords.longitude };
	var mapOptions = {
		target: myLatlng,
		zoom: 20,
	}


	map = plugin.google.maps.Map.getMap(document.getElementById('map-canvas'));
	//mapOptions

	map.animateCamera(mapOptions);
}

function onError(error) {
	alert('code: ' + error.code + '\n' +
		'message: ' + error.message + '\n');
}
function placeMarker(map, location) {
	var marker = map.addMarker({
		position: { lat: location.lat, lng: location.lng },
	});
	positionNow = location;
	addmarker(map, marker);
}

function addmarker(map, marker) {
	var content = "<div> <p> Agregar Punto de referencias </p>" +
		"<button  onclick='addPositionMarker(this)' id='add-references'>" +
		"Agregar" +
		"</button>" +
		"<button onclick='deleteMarker(this)'id='delete-references" + markers.length + "'>" +
		"Eliminar" +
		"</button>" +
		"</div>";
	var infoWindow = new plugin.google.maps.HtmlInfoWindow();

	marker.on(plugin.google.maps.event.MARKER_CLICK, function () {
		infoWindow.setContent(content);
		infoWindow.open(marker);
	});

	markers.push(marker);
}

function deleteMarker(elem) {
	alert("Usted elimino el punto de referencia");
	var markersPos = elem.id;
	var pos = parseInt(markersPos.substring(markersPos.length - 1));
	markers[pos].remove();
	setDeleteMarker(pos);
}

function addEmapDetails() {
	clickPlaceMarkert('EPMAPS');

	closeNav();

}

function addElectricaDetails() {

	clickPlaceMarkert('ELECTRICA');
	closeNav();
}

function addCNTDetails() {

	clickPlaceMarkert('CNT');
	closeNav();
}

function clickPlaceMarkert(services) {
	serviceCom = services;

	map.on(plugin.google.maps.event.MAP_CLICK, function (event) {
		placeMarker(map, event);
	});
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].remove();
	}
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
	setMapOnAll(null);
}
// Shows any markers currently in the array.
function showMarkers() {
	setMapOnAll(map);
}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
	clearMarkers();
	markers = [];
}
function backMenu() {
	var menu = '<span class="span-menu" onclick="openNav()">&#9776;Menu Principal</span>';
	$('#map-canvas').show();
	$('#addPosition').hide();
	$('#mainMenuQuito').html(menu);
	google.maps.event.clearListeners(map, 'click');
	initMapPos();

}
function addPositionMarker(elem) {
	$('#map-canvas').hide();
	$('#addPosition').show();

	var html = '<div id="addDate">';
	html += '   <div class="divInput"> <h2> Ingrese detalles de la ubicaci&oacute;n</h2> </div> ';
	html += '   <div id="idEr"class="divInput errorSt" style="display: none;"> Los Datos ingresados estan incorrectos por favor ingrese nuevamente<br><br></div>';
	html += '   <div class="divInput"> Ingrese su n&uacute;mero de cedula: <input class="inputForm" type="text" id="CI" name="CI" value=""><br><br></div>';
	html += '   <div class="divInput"> Ingrese su nombre y su apellido: <input class="inputForm" type="text" id="firstName" name="firstName" value=""><br><br></div>';
	html += '   <div class="divInput"> Ingrese su n&uacute;mero de celular : <input class="inputForm"type="text" id="number" name="number" value=""><br><br></div>';
	html += '   <div class="divInput"> Ingrese la descripci&oacute;n de del problema: <textarea class="inputForm" id="des" rows="4" cols="50"></textarea><br><br><br><br></div>';
	html += '   <div class="divInput"> <button class="buttonSu" id="buttonI" onclick="sendInfo()"> Ingresar</button></div>';
	html += '</div>';
	//html += '<div> Ingrese su numero de cedula: <input type="text" name="FirstName" value=""><br></div>' ;
	$('#addPosition').html(html);
	var menu = '<span class="span-menu" onclick="backMenu();"> &larr; Ingrese Datos</span>';
	$('#mainMenuQuito').html(menu);

}

function sendInfo() {
	var lon = positionNow.lng() + '';
	var lati = positionNow.lat() + '';
	if ($("#CI").val() || $("#firstName").val() || $("#number").val() || $("#des").val()) {
		var urlrequest = 'http://192.168.2.1:8080/springapp/quitoTeConectaPuce?long=' + lon + '&lati=' + lati;
		$.ajax({
			url: urlrequest,
			success: function () {
				alert("Envio de sus datos exitoso.");
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert(xhr.statusText);
			}
		});
		backMenu();
	} else {
		$("#CI").addClass("inputError");
		$("#firstName").addClass("inputError");
		$("#number").addClass("inputError");
		$("#des").addClass("inputError");
		$('#idEr').show();
	}
}

function initMapPos() {
	var myLatlng = { lat: positionNow.lat, lng: positionNow.lng };
	var mapOptions = {
		target: myLatlng,
		zoom: 20,
	}


	map = plugin.google.maps.Map.getMap(document.getElementById('map-canvas'));
	//mapOptions

	map.animateCamera(mapOptions);
}

// Sets the map on all markers in the array.
function setDeleteMarker(pos) {
	var newMarker = [];
	for (var i = 0; i < markers.length; i++) {
		if (i !== pos) {
			newMarker = markers[i];
		}
	}
	markers = newMarker;
}