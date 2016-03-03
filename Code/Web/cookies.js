function setCookie(name, value, exdays) {
	var d = new Date();
	d.setTime(d.getTime + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = name + "=" + value + "; " + expires + "; path=/";
	console.log(document.cookie);
}

function getCookie(name) {
	var cname = name + "=";
	var ca = document.cookie.split(';');
	
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
	}
	
	return "";
}

function checkCookie() {
	var firstRun = getCookie("firstrun");
	console.log(firstRun);
	if (firstRun != "")
	{
		window.location = "smartmirror.html";
	}
	else
	{
		window.location = "welcome.html";
	}
}

function getInfo() {
	var username = getCookie("username");
	var location = getCookie("location");
	
}