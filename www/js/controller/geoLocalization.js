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
    $("#mySidenav").show();
    $("#map-canvas").show();
	$("#login").hide();
	$("body").addClass('map-custom');
    var menu = '<span class="span-menu" onclick="openNav();">&#9776;Menu Principal</span>';
	$('#mainMenuQuito').html(menu);
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
		"<button  onclick='addPositionMarker(this)' id='add-references"+ markers.length + "'>" +
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

function addAccident() {
	clickPlaceMarker();

	closeNav();

}



function clickPlaceMarker() {
    map.setClickable(true);
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
	map.clear();
	map.setClickable(false);
	initMapPos();

}

function initMapPos() {
	$("body").addClass('map-custom');
	var myLatlng = { lat: positionNow.lat, lng: positionNow.lng };
	var mapOptions = {
		target: myLatlng,
		zoom: 20,
	}

	map = null;
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

