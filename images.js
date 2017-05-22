var images = [
	{name: "guatemalamap", extension: "png", width: 674, height: 800},
	{name: "banana", extension: "png", width: 300, height: 261},
	{name: "beans", extension: "png", width: 320, height: 355},
	{name: "cacao", extension: "png", width: 412, height: 329},
	{name: "coffee", extension: "png", width: 600, height: 312},
	{name: "corn", extension: "png", width: 448, height: 314},
	{name: "cotton", extension: "png", width: 567, height: 560},
	{name: "female_farmer", extension: "png", width: 312, height: 500},
	{name: "hemp", extension: "png", width: 600, height: 601},
	{name: "male_farmer", extension: "png", width: 340, height: 500},
	{name: "sugarcane", extension: "png", width: 552, height: 598},
	{name: "cloud", extension: "png", width: 600, height: 326},
	{name: "farmercat", extension: "gif", width: 720, height: 404},
	{name: "cities/Cobán", extension: "jpg", width: 640, height: 480},
	{name: "cities/San Pedro Carchá", extension: "jpg", width: 500, height: 375},
	{name: "cities/guatemalatemple", extension: "jpg", width: 2477, height: 1393},
	{name: "cities/SpanishMarket", extension: "jpg", width: 630, height: 322}
];

displayedGraphics = [];

var deviceScale = 1;

/* Initialize images */

for (var i = 0; i < images.length; i++) {
	var new_image = document.createElement("IMG");
	new_image.src = "res/images/" + images[i].name + "." + images[i].extension;
	new_image.id = images[i].name;
	new_image.width = images[i].width;
	new_image.height = images[i].height;
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

function disableDOMs(){
	for (var i = 0; i < displayedGraphics.length; i++){
		var temp = document.getElementById(displayedGraphics[i]);
		temp.style.display = "none";
	}
}
function displayText(id, text, size, x, y, isBold, color, backgroundColor){

	if (document.getElementById(id)){
		document.getElementById(id).style.display = "inline";
	}
	else{
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
		if (backgroundColor)
			sampleText.style.backgroundColor = backgroundColor;
		document.body.appendChild(sampleText);
		displayedGraphics.push(id);
	}	
}

function displayButton(id, text, x, y, color, big){

	if (document.getElementById(id)){
		document.getElementById(id).style.display = "inline";
	}
	else{
		var sampleButton = document.createElement("BUTTON");

		if (big){
			sampleButton.style.fontSize = 26*deviceScale+"px";
			sampleButton.style.height = 60*deviceScale+"px";
			sampleButton.style.width = 140*deviceScale+"px";
		}
		else {
			sampleButton.style.fontSize = 16.9*deviceScale+"px";
			sampleButton.style.height = 39*deviceScale+"px";
			sampleButton.style.width = 91*deviceScale+"px";
		}

		sampleButton.id = id;
		sampleButton.style.position = "fixed";
		sampleButton.style.display = "block";
		sampleButton.style.color = color;
		sampleButton.textContent = text;
		sampleButton.style.top = y*deviceScale+"px";
		sampleButton.style.left = x*deviceScale+"px";
		sampleButton.style.color = color;
		sampleButton.style.zIndex = 1000;
		displayedGraphics.push(id);
		document.body.appendChild(sampleButton);
}	

}

function showImage(imgId, imgScale, x, y, zIndex) {

	var image = document.getElementById(imgId);
	image.style.width = image.width*deviceScale*imgScale+"px";
	image.style.height = image.height*deviceScale*imgScale+"px";
	image.style.top = y*deviceScale+"px";
	image.style.left = x*deviceScale+"px";
	image.style.zIndex = zIndex;
	displayedGraphics.push(imgId);
	image.style.display = "inline";

}

/*
function showRepeating(imgId, height, width, x, y){

	var image = document.getElementById(imgId);

}
*/

var cropArr = ["corn", "banana", "cacao", "beans", "cotton", "hemp", "sugarcane", "coffee"];
var cropArrToSpanish = ["Maíces", "Platanos", "Cacaos", "Frijoles", "Algodones", "Cáñamos", "Caña de azúcar", "Café"];
var cityCrops = [
	{ name: "Flores", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "Tikal", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "Huehuetenango", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "Cobán", cropbool: [true, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "San Pedro Carchá", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "La Ciudad de Guatemala", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "Mazatenango", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "San José", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "Livingston", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]}
]




var
money = 1000000000000000000;
cropVals = [
	corn = 1,
	bananas = 1,
	cacao = 1,
	beans = 1,
	cotton = 1,
	hemp = 1,
	sugarcane = 1,
	coffee = 1,
],

currentcityId = "Cobán",

hasMap = true,
running = true,
isMale = true,
tickCount = 0;

function tick(){	
	tickCount++;
	displayInventory();
	for (var i = 0; i < cropVals.length; i++){
		var sumHarvesters = 0;
		for (var j = 0; j < cityCrops.length; j++){
			sumHarvesters += cityCrops[j].harvesters[i];
		}
		if (sumHarvesters == 0 ){
			continue;
		}
		var tempRate = Math.ceil(1 / (sumHarvesters / 150));
		var extra = (sumHarvesters > 150) ? (1 - (sumHarvesters / 150)) : 0;
		if (tickCount % tempRate == 0){ 
			cropVals[i]+= (1 + extra);
		}
	}

}

function initInventory(){

	displayText("moneyvalue", "Quetzales: " + money.toFixed(2), 30, 1030, 15, false, "green", "black");
	for (var i = 0; i < cropArr.length; i++){
		displayText(cropArr[i] + "value", cropArrToSpanish[i] + ": " + Math.floor(cropVals[i]), 30, 1030, 50+35*i, false, "green", "black");
		if (cropVals[i] < 1) document.getElementById(cropArr[i] + "value").display = "none";
	}

}

function displayInventory(){
	document.getElementById("moneyvalue").innerHTML =  "Quetzales: " + money.toFixed(2);
	for (var i = 0; i < cropArr.length; i++){
		var tempelem = document.getElementById(cropArr[i] + "value");
		tempelem.innerHTML = cropArrToSpanish[i] + ": " + cropVals[i];
		tempelem.display = "inline";
	}
}

function getCityIndex(cityname){
	for (var i = 0; i < cityCrops.length; i++){
		if (cityname === cityCrops[i].name)
			return i;
	}
	console.log("error");
	return -1;
}

function purchaseHarvester(cityIndex, cropIndex){

	console.log("worked " + cityIndex + " " + cropIndex);

	var
	harvesters = cityCrops[cityIndex].harvesters[cropIndex],
	harvesterPrice = Math.round((0.5 + Math.pow(1.3, harvesters))*100)/100;

	if (money >= harvesterPrice){

		money -= harvesterPrice;
		cityCrops[cityIndex].harvesters[cropIndex]++;
		harvesterPrice = Math.round((0.5 + Math.pow(1.3, harvesters+1))*100)/100;

		document.getElementById(cropArr[cropIndex]+"harvesters").innerHTML = ("Cosechadores: " + (harvesters+1) + "<br />" + harvesterPrice + " Quetzales");
		displayInventory();
	}

}

function displayCropImages(){

	var
	cityIndex = getCityIndex(currentcityId),

	currNumCrop = 0,
	xOffset = 0,
	yOffset = 0;

	for (var i = 0; i < cityCrops[cityIndex].cropbool.length; i++){
		if (cityCrops[cityIndex].cropbool[i]){
			var tempY = 0;

			var tempImg = document.getElementById(cropArr[i])

			var ratio = 150/tempImg.height;

			if (ratio*tempImg.width > 140){
				tempScale = 140 / tempImg.width;
				tempY = 100-(tempScale*tempImg.height);
			}
			else {
				tempScale = ratio;
			}

			showImage(cropArr[i], tempScale, 15+xOffset, 20 + tempY + currNumCrop*150+yOffset, 1);
			displayButton(cropArr[i]+"buybutton", "Comprar", 180+xOffset, 80 + currNumCrop*150+yOffset, false);
			var tempHarvesters = cityCrops[cityIndex].harvesters[i];
			var tempHarvesterPrice = Math.round((0.5 + Math.pow(1.2, tempHarvesters))*100)/100;
			displayText(cropArr[i]+"harvesters", "Cosechadores: " + tempHarvesters + "<br />" + tempHarvesterPrice + " Quetzales", 20, 170+xOffset, 20 + currNumCrop*150+yOffset, true, "red");
			(function(i) {
				document.getElementById(cropArr[i]+"buybutton").onclick = function() { purchaseHarvester(cityIndex, i); };
			})(i);
			currNumCrop++;
			if (currNumCrop > 3) {xOffset = 450; yOffset = -600;}
		}
	}

}

function walkToMarket(){
	disableDOMs();
	initInventory();
	showImage("cities/SpanishMarket", 2, 0, 0, 0);
	displayButton("leavemarketbutton", "Salir", 1065, 550, true, "black");
	displayText("markettext", "Estás en el mercado.", 60, 90, 575, false, "black");
	document.getElementById("leavemarketbutton").onclick = function() { youAreIn("cities/" + currentcityId); };
}

function initBasicButtons(){

	displayText("market", "Al mercado", 30, 1050, 500, true, "black");
	displayButton("marketbutton", "Caminar", 1065, 550, true, "black");
	document.getElementById("marketbutton").onclick = function() { 
		walkToMarket();
	};

}

function youAreIn(cityId){

	disableDOMs();

	var cityImg = document.getElementById(cityId);
	var imgStretch = 1000/cityImg.width;
	
	showImage(cityId, imgStretch, 0, 0, 0);
	displayText("citytext", "Estás en la ciudad de " + currentcityId + ".", 60, 90, 575, false, "white");
	displayCropImages();
	initInventory();
	initBasicButtons();

	if(hasMap){

	}


}

	/* Display guatemala + nodes
	showImage("guatemala", 1, 0, 0);
	for (var i = 0; i < circles.length; i++){
		var town = document.getElementById(circles[i].id);
		town.style.display = "inline";
	}
	*/

function run(){
	setInterval(function() { tick(); }, 50);

	youAreIn("cities/"+currentcityId)

}

function startgame(male){

	isMale = male;

	disableDOMs();

	showImage("cities/guatemalatemple", 0.5, 0, 0, 0);
	displayText("welcometext", "Bienvenido a Guatemala!", 70, 100, 550, true, "white");
	displayButton("continuetogamebutton", "Continuar", 650, 75, "black", true);

	document.getElementById("continuetogamebutton").onclick = function() { 
		disableDOMs(["cities/guatemalatemple", "welcometext", "continuetogamebutton"]);
		run();
	};
}


function begingame(){

	showImage("farmercat", 1.5, 0, 160, 0);

	displayText("introtext", "Bienvenido!", 150, 100, 0, true, "blue");
	displayText("starttext",
				"Macho&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hembra",
				60, 30, 200, true, "red");
	displayButton("malebutton", "Jugar", 70, 280, "black", true);
	displayButton("femalebutton", "Jugar", 860, 280, "black", true);

	document.getElementById("malebutton").onclick = function() {startgame(true);};
	document.getElementById("femalebutton").onclick = function() {startgame(false);};

}

begingame();
