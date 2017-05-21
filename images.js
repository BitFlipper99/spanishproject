var images = [
	{name: "guatemala", extension: "png"},
	{name: "banana", extension: "png"},
	{name: "beans", extension: "png"},
	{name: "cacao", extension: "png"},
	{name: "coffee", extension: "png"},
	{name: "corn", extension: "png"},
	{name: "cotton", extension: "png"},
	{name: "female_farmer", extension: "png"},
	{name: "hemp", extension: "png"},
	{name: "male_farmer", extension: "png"},
	{name: "sugarcane", extension: "png"},
	{name: "cloud", extension: "png"},
	{name: "farmercat", extension: "gif"},
	{name: "cities/coban", extension: "jpg"},
	{name: "cities/sanpedrocarcha", extension: "jpg"},
	{name: "cities/guatemalatemple", extension: "jpg"}
];

var deviceScale = 1;

/* Initialize images */

for (var i = 0; i < images.length; i++) {
	var new_image = document.createElement("IMG");
	new_image.src = "res/images/" + images[i].name + "." + images[i].extension;
	new_image.id = images[i].name;
	new_image.style.display = "none";
	new_image.style.position = "fixed";
	document.body.appendChild(new_image);
}


function travel(arg){
	console.log(arg);
}

var
scale = 0.5;

guatheight = 1600*scale*deviceScale,
guatwidth = 1348*scale*deviceScale;
/* Initialize circles */
var circles = [
	{ color: "red", x: 750/1348*guatwidth, y: 400/1600*guatheight, size: 20, id: "Flores"},
	{ color: "red", x: 800/1348*guatwidth, y: 300/1600*guatheight, size: 20, id: "Tikal" },
	{ color: "red", x: 325/1348*guatwidth, y: 835/1600*guatheight, size: 20, id: "Huehuetenango"},
	{ color: "red", x: 630/1348*guatwidth, y: 800/1600*guatheight, size: 20, id: "Cobán"},
	{ color: "red", x: 690/1348*guatwidth, y: 810/1600*guatheight, size: 20, id: "San Pedro Carchá"},
	{ color: "red", x: 610/1348*guatwidth, y: 1080/1600*guatheight, size: 20, id: "La Ciudad de Guatemala"},
	{ color: "red", x: 360/1348*guatwidth, y: 1120/1600*guatheight, size: 20, id: "Mazatenango"},
	{ color: "red", x: 540/1348*guatwidth, y: 1280/1600*guatheight, size: 20, id: "San José"},
	{ color: "red", x: 1050/1348*guatwidth, y: 750/1600*guatheight, size: 20, id: "Livingston"}
];
for (var i = 0; i < circles.length; i++) {
	var new_circle = document.createElement("BUTTON");
	new_circle.style.position = "fixed";
	new_circle.style.display = "block";
	new_circle.style.height = circles[i].size*deviceScale + "px";
	new_circle.style.width = circles[i].size*deviceScale + "px";
	new_circle.style.borderRadius = circles[i].size*deviceScale / 2;
	new_circle.style.top = circles[i].y*deviceScale + "px";
	new_circle.style.left = circles[i].x*deviceScale + "px";
	new_circle.id = circles[i].id;
	new_circle.style.backgroundColor = circles[i].color;
	new_circle.style.borderRadius = "50%";
	new_circle.style.display = "none";
	new_circle.onclick = function() { travel(this.id); };
	document.body.appendChild(new_circle);
}

function disableDOMs(domarr){
	for (var i = 0; i < domarr.length; i++){
		var temp = document.getElementById(domarr[i]);
		temp.style.display = "none";
	}
}

function showImage(imgId, height, width, y, x) {

	var image = document.getElementById(imgId);

	image.width = width*deviceScale;
	image.height = height*deviceScale;
	image.style.top = y*deviceScale+"px";
	image.style.left = x*deviceScale+"px";

	image.style.display = "inline";

}


function showRepeating(imgId, height, width, x, y){

	var image = document.getElementById(imgId);

}




var
corn = 0,
bananas = 0,
cacao = 0,
beans = 0,
cotton = 0,
hemp = 0,
sugarcane = 0,
coffee = 0,
currentcityId = "Cobán";

isMale = true,
tickcount = 0;

function tick(){
	
	tickcount++;

	if (tickcount % 20 == 0){
		console.log(tickcount);
	}

}



	/* Display guatemala + nodes
	showImage("guatemala", guatheight, guatwidth, 0, 0);
	for (var i = 0; i < circles.length; i++){
		var town = document.getElementById(circles[i].id);
		town.style.display = "inline";
	}
	*/

function run(){

	setInterval(function() { tick(); }, 50);


}

function startgame(male){

	isMale = male;

	disableDOMs(["starttext", "malebutton", "femalebutton", "introtext", "farmercat"]);

	showImage("cities/guatemalatemple", 1393*0.5, 2477*0.5, 0, 0);
	displayText("welcometext", "Bienvenido a Guatemala!", 70, 100, 550, true, "white");
	displayButton("continuetogamebutton", "Continuar", 650, 75, "black");

	document.getElementById("continuetogamebutton").onclick = function() { 
		disableDOMs(["cities/guatemalatemple", "welcometext", "continuetogamebutton"]);
		run();
	};
}

function displayText(id, text, size, x, y, isBold, color){
	var sampleText = document.createElement("DIV");
	sampleText.style.color = color;
	sampleText.style.fontSize = size*deviceScale+"px";
	sampleText.innerHTML = text;
	sampleText.id = id;
	sampleText.style.position = "absolute";
	if (isBold)
		sampleText.style.fontWeight = "bold";
	sampleText.style.left = x*deviceScale+"px";
	sampleText.style.top = y*deviceScale+"px";
	sampleText.style.zIndex = 10;
	document.body.appendChild(sampleText);
}

function displayButton(id, text, x, y, color){
	var sampleButton = document.createElement("BUTTON");
	sampleButton.id = id;
	sampleButton.style.position = "fixed";
	sampleButton.style.display = "block";
	sampleButton.style.fontSize = 26*deviceScale+"px";
	sampleButton.style.color = color;
	sampleButton.style.height = 60*deviceScale+"px";
	sampleButton.style.width = 140*deviceScale+"px";
	sampleButton.textContent = text;
	sampleButton.style.top = y*deviceScale+"px";
	sampleButton.style.left = x*deviceScale+"px";
	sampleButton.style.color = color;
	sampleButton.style.zIndex = 1000;

	document.body.appendChild(sampleButton);

}

function begingame(){

	showImage("farmercat", 404*1.5, 720*1.5, 160, 0);

	displayText("introtext", "Bienvenido!", 150, 100, 0, true, "blue");
	displayText("starttext",
				"Macho&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hembra",
				60, 30, 200, true, "red");
	displayButton("malebutton", "Jugar", 70, 280, "black");
	displayButton("femalebutton", "Jugar", 860, 280, "black");

	document.getElementById("malebutton").onclick = function() {startgame(true);};
	document.getElementById("femalebutton").onclick = function() {startgame(false);};

}

begingame();
