var images = [
	"guatemala",
	"testing/black",
	"testing/blue",
	"testing/green",
	"testing/red",
	"banana",
	"beans",
	"cacao",
	"coffee",
	"corn",
	"cotton",
	"female_farmer",
	"hemp",
	"male_farmer",
	"sugarcane"
];

/* Initialize images */
/*
for (var i = 0; i < images.length; i++) {
	var new_image = document.createElement("IMG");
	new_image.src = "res/images/" + images[i] + ".png";
	new_image.id = images[i];
	new_image.style.display = "none";
	new_image.style.position = "fixed";
	document.body.appendChild(new_image);
}
*/

/* Initialize circles */
var circles = [
	{ color: "red", x: 250, y: 250, size: 100 },
	{ color: "blue", x: 500, y: 250, size: 100 },
	{ color: "green", x: 750, y: 250, size: 100 }
];
for (var i = 0; i < circles.length; i++) {
	var new_circle = document.createElement("DIV");
	new_circle.style.position = "fixed";
	new_circle.style.display = "block";
	new_circle.style.height = circles[i].size + "px";
	new_circle.style.width = circles[i].size + "px";
	new_circle.style.borderRadius = circles[i].size / 2;
	new_circle.style.top = circles[i].x + "px";
	new_circle.style.left = circles[i].y + "px";
	new_circle.style.backgroundColor = circles[i].color;
	document.body.appendChild(new_circle);
}

function showImage(imgId, height, width, x, y) {

	var image = document.getElementById(imgId);

	image.width = width;
	image.height = height;
	image.style.top = x+"px";
	image.style.left = y+"px";

	image.style.display = "inline";

}
//showImage("banana", 100, 100, 200, 200)
//showImage("guatemala", 800*2, 674*2, 0, 0)



function moveImage(imgId, height, width, x1, y1, x2, y2, time){

	var image = document.getElementById(imgId);

	//TODO

}