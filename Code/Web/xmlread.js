// Load all variables from XML and store them somewhere on the page to be
// extracted later.

var USER = "USER";
var LOCATION = 'keller, texas';

function loadXMLDoc()
{
	"use strict";
	console.log("XMLRead: Attempting to read XML");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        getInfo(xhttp);
    	}
		else
		{
			console.log("XMLRead: Error reading XML, are you on a server?");
		}
	};
	xhttp.open("GET", "config.xml", true);
	xhttp.send();
	
	greetings();
}

function getInfo(xml)
{
	//var i;
	"use strict";
	console.log("Running");
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName('username')[0];
	var y = x.childNodes[0];
	USER = y.nodeValue;
	console.log("USERNAME: " + USER);
	
	document.getElementById('tempUsername').innerHTML = USER;
	
	var z = xmlDoc.getElementsByTagName('location')[0];
	var z2 = z.childNodes[0];
	LOCATION = z2.nodeValue;
	console.log("LOCATION: " + LOCATION);
	
	document.getElementById('tempLocation').innerHTML = LOCATION;
}