// JavaScript Document
var loc = 'NULL';
var defaultMode = false;

$(document).ready(function() {
	
	getInfo();
	getWeather();
	
});

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

function getInfo() {
	console.log("Trying to get info");
	loc = getCookie("location");
	console.log(loc);
	
	if (loc == "USER")
	{
		loc = "Denton, Texas";
		defaultMode = true;
	}
}

function getWeather()
{
	setInterval(getWeather, 300000);

$.simpleWeather({
		location:loc,
		unit: 'f',
		success:function(weather){
			"use strict";
			var currentTemp = weather.temp + '&deg;' + weather.units.temp;
			var code = weather.code;
			console.log("Weather code: " + code);
			$("#weatherCurrentTemp").html(currentTemp);
			
			var weather0 = '<font color="#FFAAAA" size="5">' + weather.forecast[0].high + '</font><br><font color="#AAAAFF" size="5">' + weather.forecast[0].low +'</font>';
			var weather1 = '<font color="#FFAAAA"><br><br>' + weather.forecast[1].high + '</font><br><font color="#AAAAFF">' + weather.forecast[1].low +'</font>';
			var weather2 = '<font color="#FFAAAA"><br><br>' + weather.forecast[2].high + '</font><br><font color="#AAAAFF">' + weather.forecast[2].low +'</font>';
			var weather3 = '<font color="#FFAAAA"><br><br>' + weather.forecast[3].high + '</font><br><font color="#AAAAFF">' + weather.forecast[3].low +'</font>';
			var weather4 = '<font color="#FFAAAA"><br><br>' + weather.forecast[4].high + '</font><br><font color="#AAAAFF">' + weather.forecast[4].low +'</font>';
			
			$("#firstImage").html(weather0);
			$("#secondImage").html(weather1);
			$("#thirdImage").html(weather2);
			$("#fourthImage").html(weather3);
			$("#fifthImage").html(weather4);
			
			var weatherImage0 = "url('" + weather.image + "')";
			var weatherImage1 = "url('" + weather.forecast[1].image + "')";
			var weatherImage2 = "url('" + weather.forecast[2].image + "')";
			var weatherImage3 = "url('" + weather.forecast[3].image + "')";
			var weatherImage4 = "url('" + weather.forecast[4].image + "')";
			
			document.getElementById("firstImage").style.backgroundImage = weatherImage0;
			document.getElementById("secondImage").style.backgroundImage = weatherImage1;
			document.getElementById("thirdImage").style.backgroundImage = weatherImage2;
			document.getElementById("fourthImage").style.backgroundImage = weatherImage3;
			document.getElementById("fifthImage").style.backgroundImage = weatherImage4;
			$("#weatherLocation").html(loc);
			
			if (code == 0 || code == 1 || code == 2 || code == 3 || code == 4 || code == 17 || code == 25 || code == 37 || code == 38 || code == 39 || code == 45 || code == 47)
			{
				//17 35 37 38 39 45 47
				// thunderstorm video
				console.log("Weather: Thunderstorm");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/thunderstorm_vid.png">';
			}
			else if (code == 5 || code == 6 || code == 7 || code == 8 || code == 10 || code == 18)
			{
				//18
				// sleet video
				console.log("Weather: Sleet");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/sleet_vid.png">';
			}
			else if (code == 9 || code == 11 || code == 12 || code == 40)
			{
				//40
				// rain video
				console.log("Weather: Rain");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/rain_vid.png">';
			}
			else if (code == 13 || code == 14 || code == 15 || code == 16 || code == 41 || code == 42 || code == 43 || code == 46)
			{
				//13 14 15 16 41(heavy) 42 43(heavy) 46
				// snow video
				console.log("Weather: Snow");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/snow_vid.png">';
			}
			else if (code == 30 || code == 44)
			{
				// partly cloudy
				//30(day) 29(night) 44
				console.log("Weather: Partly Cloudy");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/partlycloudy_vid.png">';
			}
			else if (code == 29)
			{
				// partly cloudy night
				//29
				console.log("Weather: Partly Cloudy - Night");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/partlycloudy_night_vid.png">';
			}
			else if (code == 28)
			{
				// mostly cloudy
				//28 (day) 27(night)
				console.log("Weather: Mostly Cloudy");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/mostlycloudy_vid.png">';
				
			}
			else if (code == 27)
			{
				// mostly cloudy night
				console.log("Weather: Mostly Cloudy - Night");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/mostlycloudy_night_vid.png">';
			}
			else if (code == 19 || code == 21 || code == 22)
			{
				// Dust, haze, smoke
				//19 21 22
				console.log("Weather: Visual Obstructions");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/haze_vid.png">';
			}
			else if (code == 23 || code == 24)
			{
				// Wind
				//23 24
				console.log("Weather: Wind");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/windy_vid.png">';
			}
			else if (code == 31 || code == 33)
			{
				// Clear Night
				//31 33
				console.log("Weather: Clear Night");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/moon_vid.png">';
			}
			else if (code == 32 || code == 34)
			{
				// Clear Day
				//32 34 36(hot)
				console.log("Weather: Clear Day");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/sun_vid.png">';
			}
			else if (code == 20 || code == 26)
			{
				// Cloudy / foggy
				//20 26
				console.log("Weather: Cloudy / Foggy");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/cloudy_vid.png">';
			}
			else if (code = 36)
			{
				// Hot
				// 36
				console.log("Weather: Hot");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/hot_vid.png">';
			}
			else if (code == 25)
			{
				// Cold
				//25
				console.log("Weather: Cold");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/cold_vid.png">';
			}
			else
			{
				// Code not found, basic video.
				console.log("Weather: Code not found - switching to basic video");
				document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/base_vid.png">';
				
			}
			
			if (defaultMode == false)
			{
				document.getElementById('error').innerHTML = '';
				console.log('Weather: Updated!');
			}
			else
			{
				document.getElementById('error').innerHTML = 'WEATHER ERROR: No Location Data Found, Defaulting To Denton, Texas. Please check configuration.';
				console.log('Weather: Updated, but in default mode');
			}
			
		},
		error:function(error){
			"use strict";
			console.log("Weather: Bad things happened...");
			console.log("Weather: Displaying basic video...");
			console.log("Weather: " + error);
			document.getElementById('fullscreen_bg').innerHTML = '<img src="weather_images/900p/base_vid.png">';
			document.getElementById('error').innerHTML = 'WEATHER ERROR: There was a problem retrieving the latest weather information.';
		}		
	});
}