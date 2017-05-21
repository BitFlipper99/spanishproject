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
	"sugarcane",
	"cloud",
];

var gifs = [
	"farmercat"
]

for (var i = 0; i < gifs.length; i++) {
	var new_image = document.createElement("IMG");
	new_image.src = "res/images/" + gifs[i] + ".gif";
	new_image.id = gifs[i];
	new_image.style.display = "none";
	new_image.style.position = "fixed";
	document.body.appendChild(new_image);
}



/* Initialize images */

for (var i = 0; i < images.length; i++) {
	var new_image = document.createElement("IMG");
	new_image.src = "res/images/" + images[i] + ".png";
	new_image.id = images[i];
	new_image.style.display = "none";
	new_image.style.position = "fixed";
	document.body.appendChild(new_image);
}


var guatheight = 1600*0.75;
var guatwidth = 1348*0.75;
/* Initialize circles */
var circles = [
	{ color: "red", x: 750/1348*guatwidth, y: 400/1600*guatheight, size: 30, id: "Flores"},
	{ color: "red", x: 800/1348*guatwidth, y: 300/1600*guatheight, size: 30, id: "Tikal" },
	{ color: "red", x: 325/1348*guatwidth, y: 835/1600*guatheight, size: 30, id: "Huehuetenango"},
	{ color: "red", x: 630/1348*guatwidth, y: 800/1600*guatheight, size: 30, id: "Cobán"},
	{ color: "red", x: 690/1348*guatwidth, y: 810/1600*guatheight, size: 30, id: "San Pedro Carchá"},
	{ color: "red", x: 610/1348*guatwidth, y: 1080/1600*guatheight, size: 30, id: "La Ciudad de Guatemala"},
	{ color: "red", x: 360/1348*guatwidth, y: 1120/1600*guatheight, size: 30, id: "Mazatenango"},
	{ color: "red", x: 540/1348*guatwidth, y: 1280/1600*guatheight, size: 30, id: "San José"},
	{ color: "red", x: 1050/1348*guatwidth, y: 750/1600*guatheight, size: 30, id: "Livingston"}
];
for (var i = 0; i < circles.length; i++) {
	var new_circle = document.createElement("BUTTON");
	new_circle.style.position = "fixed";
	new_circle.style.display = "block";
	new_circle.style.height = circles[i].size + "px";
	new_circle.style.width = circles[i].size + "px";
	new_circle.style.borderRadius = circles[i].size / 2;
	new_circle.style.top = circles[i].y + "px";
	new_circle.style.left = circles[i].x + "px";
	new_circle.id = circles[i].id;
	new_circle.style.backgroundColor = circles[i].color;
	new_circle.style.borderRadius = "50%";
	new_circle.style.display = "none";
	document.body.appendChild(new_circle);
}

function showImage(imgId, height, width, y, x) {

	var image = document.getElementById(imgId);

	image.width = width;
	image.height = height;
	image.style.top = y+"px";
	image.style.left = x+"px";

	image.style.display = "inline";

}


function showRepeating(imgId, height, width, x, y){

	var image = document.getElementById(imgId);

}



function startgame(){
	var disabled = ["starttext", "startbutton", "introtext", "farmercat"];

	for (var i = 0; i < disabled.length; i++){
		var temp = document.getElementById(disabled[i]);
		temp.style.display = "none";
	}

	showImage("guatemala", guatheight, guatwidth, 0, 0);
	for (var i = 0; i < circles.length; i++){
		var town = document.getElementById(circles[i].id);
		town.style.display = "inline";
	}


}






function begingame(){

	showImage("farmercat", 404*1.5, 720*1.5, 160, 0);
	var intro = document.createElement("DIV");
	intro.style.color = "blue";
	intro.style.fontSize = "150px";
	intro.innerHTML = "Bienvenido!";
	intro.style.left = "100px";
	intro.style.position = "absolute";
	intro.style.fontWeight = "bold";
	intro.id = "introtext";

	var startbutton = document.createElement("BUTTON");
	startbutton.classList.add('mybutton');
	startbutton.style.top = "280px";
	startbutton.style.left = "110px";
	startbutton.id = "startbutton";

	var starttext = document.createElement("DIV");
	starttext.style.color = "red";
	starttext.style.fontSize = "60px";
	starttext.innerHTML = "Comienza";
	starttext.style.left = "30px";
	starttext.style.top = "200px";
	starttext.style.position = "absolute";
	starttext.style.fontWeight = "bold";
	starttext.id = "starttext";


	
	document.body.appendChild(startbutton);
	startbutton.addEventListener("click", startgame);
	document.body.appendChild(intro);
	document.body.appendChild(starttext);



}

begingame();
