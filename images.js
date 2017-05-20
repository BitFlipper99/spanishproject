var images = [
	"testing/black.png",
	"testing/blue.png",
	"testing/green.png",
	"testing/red.png"
];

var image_elements = [];

for (var i = 0; i < images.length; i++) {
	var new_image = document.createElement("IMG");
	new_image.src = "res/images/" + images[i];

	/* add CSS to make hidden */

	document.body.appendChild(new_image);
	image_elements.push(new_image);
}

