function openLink() {
	// Chooses a random link:
	// Directs the browser to the chosen target:
	var links = new Array();
	links[0] = "blog-posts/data-gen-keras.html";
	links[1] = "blog-posts/ars-hackathon.html";
	// links[2] = "http://www.yahoo.com/";
	// links[3] = "http://www.apple.com/";

	var i = Math.floor(Math.random() * links.length);

	parent.location = links[i];
	return false;
}