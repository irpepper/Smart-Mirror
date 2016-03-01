var user = "USER";

function loadXMLDoc()
{
	"use strict";
	console.log("Is this doing anything?");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        getName(xhttp);
    	}
	};
	xhttp.open("GET", "config.xml", true);
	xhttp.send();
	
	greetings();
}

function getName(xml)
{
	//var i;
	"use strict";
	console.log("Running");
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName('username')[0];
	var y = x.childNodes[0];
	user = y.nodeValue;
	console.log("USERNAME: " + user);
}

function greetings()
{
	"use strict";
	var today = new Date();
	var h = today.getHours();
	
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
