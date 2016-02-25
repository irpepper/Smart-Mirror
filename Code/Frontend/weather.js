// JavaScript Document
$.simpleWeather({
		location:'keller, texas',
		unit: 'f',
		success:function(weather){
			"use strict";
			var currentTemp = weather.temp + '&deg;' + weather.units.temp;
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
			
			console.log('Weather: Passed!');
		},
		error:function(error){
			"use strict";
			console.log("Weather: Bad things happened...");
		}		
	});