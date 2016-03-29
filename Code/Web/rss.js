var RSS1 = "RSS";

$(document).ready(function() {
	//feed to parse
	var feed = "http://www.reddit.com/r/news/.rss";
	
	//very basic, just making sure we're getting something...
	//Spolier Alert: We are. Yay!
	feednami.load(feed,function(result){
		if(result.error){
			console.log(result.error)
		}
		else{
			var entries = result.feed.entries
			for(var i = 0; i < entries.length; i++){
				var entry = entries[i]
				console.log(entry.title)
			}
		}
	})
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
	
	var t = setTimeout(getRSS, 10000);
}