// JavaScript Document
	//<!-- Time Stuff -->
	//<!-- START SECTION TO PARSE XML -->
	var userPref = new XMLHttpRequest();
	
	userPref.open("GET", "config.xml", true);
	userPref.send();
	
	//<!-- This needs to be run on a webserver to work -->
	var xmlDoc = userPref.responseXML;
	//<!-- var user = xmlDoc.getElementsByTagName("username")[0].childNodes[0].nodeValue; -->
	
	//<!-- END PARSE XML SECTION -->
	
	var user = "Alan";
	console.log(user);
	function startTime()
	{
		"use strict";
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var dayOfTheWeek = today.getDay();
		var dayOfTheMonth = today.getDate();
		var thisMonth = today.getMonth();
		var actualDay, actualMonth;
		m = checkTime(m);
		
		switch (dayOfTheWeek)
		{
			case 0:
				actualDay = "Sunday";
				break;
			case 1:
				actualDay = "Monday";
				break;
			case 2:
				actualDay = "Tuesday";
				break;
			case 3:
				actualDay = "Wednesday";
				break;
			case 4:
				actualDay = "Thursday";
				break;
			case 5:
				actualDay = "Friday";
				break;
			case 6:
				actualDay = "Saturday";
				break;					
		}
		
		switch (thisMonth)
		{
			case 0:
				actualMonth = "January";
				break;
			case 1:
				actualMonth = "February";
				break;
			case 2:
				actualMonth = "March";
				break;
			case 3:
				actualMonth = "April";
				break;
			case 4:
				actualMonth = "May";
				break;
			case 5:
				actualMonth = "June";
				break;
			case 6:
				actualMonth = "July";
				break;
			case 7:
				actualMonth = "August";
				break;		
			case 8:
				actualMonth = "September";
				break;	
			case 9:
				actualMonth = "October";
				break;	
			case 10:
				actualMonth = "November";
				break;	
			case 11:
				actualMonth = "December";
				break;				
		}
		
		if (dayOfTheMonth == 1 || dayOfTheMonth == 21 || dayOfTheMonth == 31)
		{
			document.getElementById('weatherTitle').innerHTML = actualDay + ", " + actualMonth + " " + dayOfTheMonth + "st";
		}
		else if (dayOfTheMonth == 2 || dayOfTheMonth == 22)
		{
			document.getElementById('weatherTitle').innerHTML = actualDay + ", " + actualMonth + " " + dayOfTheMonth + "nd";
		}
		else if (dayOfTheMonth == 3 || dayOfTheMonth == 23)
		{
			document.getElementById('weatherTitle').innerHTML = actualDay + ", " + actualMonth + " " + dayOfTheMonth + "rd";
		}
		else
		{
			document.getElementById('weatherTitle').innerHTML = actualDay + ", " + actualMonth + " " + dayOfTheMonth + "th";
		}
		
		if (h > 12)
		{
			document.getElementById('time').innerHTML = (h - 12) + ":" + m + " PM";
			
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
			document.getElementById('time').innerHTML = h + ":" + m + " AM";
			
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
		var t = setTimeout(startTime, 500);
	}
	function checkTime(i)
	{
		"use strict";
		if ( i < 10)
		{
			i = "0" + i;	
		}
		return i;
	}