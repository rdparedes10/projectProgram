function encryptionText(plaintext) {

	var pubilc_key = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzdxaei6bt/xIAhYsdFdW62CGTpRX+GXoZkzqvbf5oOxw4wKENjFX7LsqZXxdFfoRxEwH90zZHLHgsNFzXe3JqiRabIDcNZmKS2F0A7+Mwrx6K2fZ5b7E2fSLFbC7FsvL22mN0KNAp35tdADpl4lKqNFuF7NT22ZBp/X3ncod8cDvMb9tl0hiQ1hJv0H8My/31w+F+Cdat/9Ja5d1ztOOYIx1mZ2FD2m2M33/BgGY/BusUKqSk9W91Eh99+tHS5oTvE8CI8g7pvhQteqmVgBbJOa73eQhZfOQJ0aWQ5m2i0NUPcmwvGDzURXTKW+72UKDz671bE7YAch2H+U7UQeawwIDAQAB-----END PUBLIC KEY-----";
	// Encrypt with the public key...
	var encrypt = new JSEncrypt();
	encrypt.setPublicKey(pubilc_key);
	var encrypted = encrypt.encrypt(plaintext);
	return encrypted;
}


function sendPostInfoServices(urlRequest, jsonData, callback) {

	var xhr = new XMLHttpRequest();
    xhr.open('POST', urlRequest, true);
    xhr.setRequestHeader('Accept', 'application/json');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			var parsed = JSON.parse(xhr.response);
			callback(parsed);
		}
	};

	xhr.send( JSON.stringify(jsonData));
}


function sendGetInfoServices(urlRequest, callback) {

	var xhr = new XMLHttpRequest();
    xhr.open('GET', urlRequest, true);
    xhr.setRequestHeader('Accept', 'application/json');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			var parsed = JSON.parse(xhr.response);
			callback(parsed);
		}
	};

	xhr.send();
}

function showOldProgress() {
	$(".loader").show();
 }

 function hideOldProgress() {
   $(".loader").hide();
 }

 function addUpdate() {

	clickPlaceMarker();
	closeNav();
}

function openContact() {

	clickPlaceMarker();
	closeNav();
}