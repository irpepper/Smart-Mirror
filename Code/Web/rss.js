var NUM_OF_FEEDS = 3;
var feeds = ["http://www.reddit.com/r/news/.rss", "http://www.reddit.com/r/gaming/.rss", "http://rss.cnn.com/rss/cnn_world.rss"]

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
	document.getElementById('ticker').innerHTML = '<div class="ticker__item"><b>Pudding News:</b></div>'
	
	for (var x = 0; x < NUM_OF_FEEDS; x++)
	{
		feednami.load(feeds[x],function(result){
			if(result.error){
				console.log(result.error)
				document.getElementById('error').innerHTML = 'RSS ERROR: ' + result.error;
			}
			else{
				document.getElementById('ticker').innerHTML += '<div class="ticker__item"><i>' + result.feed.meta.title + ' </i></div>';
				var entries = result.feed.entries
				for(var i = 0; i < 5; i++){
					var entry = entries[i]
					console.log(entry.title)
					document.getElementById('ticker').innerHTML += '<div class="ticker__item"> ~ ' + entry.title + ' ~ </div>';
				}
				document.getElementById('error').innerHTML = '';
				console.log("RSS: Updated RSS Feed!");
			}
		});
	}
	
	var t = setTimeout(getRSS, 300000); // This should probably be equal to the time of the ticker animation in style_frontend.css
}