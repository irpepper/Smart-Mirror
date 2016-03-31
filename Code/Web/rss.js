var RSS1 = "RSS";
var feed = "http://www.reddit.com/r/news/.rss";

$(document).ready(function() {
	//very basic, just making sure we're getting something...
	//Spolier Alert: We are. Yay!
	getRSS();
});
	

function getCookie(name) {
	var cname = name + "=";
	var ca = document.cookie.split(';');
	
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if(c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
	}
	
	return "";
}

function getRSS()
{
	"use strict";
	
	console.log("RSS: Updating RSS");
	document.getElementById('ticker').innerHTML = '<div class="ticker__item">Pudding News:</div>'
	
	feednami.load(feed,function(result){
		if(result.error){
			console.log(result.error)
		}
		else{
			var entries = result.feed.entries
			for(var i = 0; i < 5; i++){
				var entry = entries[i]
				console.log(entry.title)
				document.getElementById('ticker').innerHTML += '<div class="ticker__item"> ~ ' + entry.title + ' ~ </div>';
			}
			console.log("RSS: Updated RSS Feed!");
		}
	});
	
	var t = setTimeout(getRSS, 300000);
}