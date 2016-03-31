var user = "USER";

function getCookie(name) {
	var cname = name + "=";
	var ca = document.cookie.split(';');
	
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
	}
	
	return "USER";
}

function greetings()
{
	"use strict";
	var today = new Date();
	var h = today.getHours();
	
	user = getCookie("username");
	
	if (h > 11)
	{
		if ( h > 17)
		{
			document.getElementById('greeting').innerHTML = "Good Evening, " + user;
		}
		else
		{
			document.getElementById('greeting').innerHTML = "Good Afternoon, " + user;
		}
	}
	else
	{
		if ( h > 7)
		{
			document.getElementById('greeting').innerHTML = "Good Morning, " + user;
		}
		else if (h > 4)
		{
			document.getElementById('greeting').innerHTML = "Early start, " + user + "?";
		}
		else if (h < 3)
		{
			document.getElementById('greeting').innerHTML = "Burning the midnight oil, " + user + "?";
		}
		else
		{
			document.getElementById('greeting').innerHTML = "Why are you still awake, " + user + "?";	
		}
	}
	var t = setTimeout(greetings, 500);
}
