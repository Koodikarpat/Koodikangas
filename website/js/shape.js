var shape = {
	circle: function(color, radius) {
		var circle = new createjs.Shape();
		addFunctions(circle);
		circle.graphics.beginFill(color || "this").drawCircle(200, 200, radius || 50 );
		circle.radius = function(radius) {
			var newcircle = new createjs.Shape();
			console.log(this);
			newcircle.graphics.beginFill(color || "this").drawCircle(200, 200, radius || 50 );
			this.remove();
			addFunctions(newcircle);
			addToStage(newcircle);
			return newcircle;	
		}
		addToStage(circle);
		return circle;	
	},
	square: function(color, sidelength) {
		var square = new createjs.Shape();
		addFunctions(square);
		square.graphics.beginFill(color || "this").drawRect(200, 200, sidelength || 100, sidelength || 100);
		square.sidelength = function(sidelength) {
			var newsquare = new createjs.Shape();
			console.log(this);
			newsquare.graphics.beginFill(color || "this").drawRect(200, 200, sidelength || 100, sidelength || 100);
			this.remove();
			addFunctions(newsquare);
			addToStage(newsquare);
			return newsquare;
		}
		addToStage(square);
		return square;
	},
rectangle: function(color, width, height) {
		var rectangle = new createjs.Shape();
		rectangle.w = width || 400;
		rectangle.h = height || 100;
		addFunctions(rectangle);
		rectangle.graphics.beginFill(color || "this").drawRect(200, 300, rectangle.h, rectangle.h);
		
		rectangle.width = function(width)  {
			var newrectangle = new createjs.Shape();
			console.log(this.w, this.h);
			newrectangle.w = width || 400;
			newrectangle.graphics.beginFill(color || "this").drawRect(200, 300, newrectangle.w, this.h || 100);
			this.remove();
			addFunctions(newrectangle);
			newrectangle.height = this.height;
			newrectangle.width = this.width;
			addToStage(newrectangle);
			return newrectangle;
		}
		rectangle.height = function(height)  {
			var newrectangle = new createjs.Shape();
			console.log(this.w, this.h, this);
			newrectangle.h = height || 400;
			newrectangle.graphics.beginFill(color || "this").drawRect(200, 300, this.w || 400, newrectangle.h);
			this.remove();
			addFunctions(newrectangle);
			newrectangle.height = this.height;
			newrectangle.width = this.width;
			addToStage(newrectangle);
			return newrectangle;
		}
		addToStage(rectangle);
		return rectangle;
	},	
	triangle: function(color) {
		var triangle = new createjs.Shape();
		addFunctions(triangle);
		triangle.graphics.beginFill(color || "red");
		triangle.graphics.moveTo(75, 50);
		triangle.graphics.lineTo(125, 125);
		triangle.graphics.lineTo(175, 50);
		triangle.graphics.closePath();
		triangle.graphics.beginFill(color || "red");
		triangle.x = 180;
		triangle.y = 180;
		addToStage(triangle);
		return triangle;
	},
	kite: function(color) {
		var kite = new createjs.Shape();
		addFunctions(kite);
		kite.graphics.beginFill(color || "red");
		kite.graphics.moveTo(75, 0);
		kite.graphics.lineTo(150, 75);
		kite.graphics.lineTo(75, 250);
		kite.graphics.lineTo(0, 75);
		kite.graphics.lineTo(75, 0);
		kite.x = 100;
		kite.y = 100;
		addToStage(kite);
		return kite; 
	},
	härpäke: function(color) {
		var härpäke = new createjs.Shape();
		addFunctions(härpäke);
		härpäke.graphics.beginFill(color || "red");
		härpäke.graphics.moveTo (175, 215);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
		härpäke.graphics.lineTo (175, 215);
		härpäke.x = 400
		härpäke.y = 400
		addToStage(härpäke);
		return härpäke;
	},	
	parallelogram: function(color) {
		var parallelogram = new createjs.Shape();
		addFunctions(parallelogram);
		parallelogram.graphics.beginFill (color ||"red");
		parallelogram.graphics.moveTo(50, 0);
		parallelogram.graphics.lineTo(300, 0);
		parallelogram.graphics.lineTo(250, 200);
		parallelogram.graphics.lineTo(0, 200);
		parallelogram.graphics.lineTo(50, 0);
		parallelogram.graphics.closePath();
		parallelogram.x = 150;
		parallelogram.y = 150;
		addToStage(parallelogram);
		return parallelogram;
	},
	star: function(color) {
		var star = new createjs.Shape();
		addFunctions(star);
		star.graphics.beginFill (color || "red");
		star.graphics.moveTo(75, 50);
		star.graphics.lineTo(125, 125);
		star.graphics.lineTo(175, 50);
		star.graphics.closePath();
		star.graphics.moveTo(75, 100);
		star.graphics.lineTo(175, 100);
		star.graphics.lineTo(125, 25);
		star.graphics.closePath();
		star.graphics.beginFill(color || "red");
		star.x = 100;
		star.y = 100;
		addToStage(star);
		return star;
	},
	pentagon: function(color) {
		var pentagon = new createjs.Shape();
		addFunctions(pentagon);
		pentagon.graphics.beginFill (color || "red");
		pentagon.graphics.moveTo(0, 150);
		pentagon.graphics.lineTo(150, 0);
		pentagon.graphics.lineTo(300, 150);
		pentagon.graphics.lineTo(225, 300);
		pentagon.graphics.lineTo(75, 300);
		pentagon.graphics.lineTo(0, 150);
		pentagon.graphics.closePath();
		pentagon.x = 110;
		pentagon.y = 110;
		addToStage(pentagon);
		return pentagon;
	},
	hexagon: function(color) {
		var hexagon = new createjs.Shape();
		addFunctions(hexagon);
		hexagon.graphics.beginFill (color || "red");
		hexagon.graphics.moveTo(50, 50);
		hexagon.graphics.lineTo(150, 50);
		hexagon.graphics.lineTo(200, 136.6);
		hexagon.graphics.lineTo(150, 223.2);
		hexagon.graphics.lineTo(50, 223.2);
		hexagon.graphics.lineTo(0, 136.6);
		hexagon.graphics.closePath();
		hexagon.x = 110;
		hexagon.y = 110;
		addToStage(hexagon);
		return hexagon;
	},
	cross: function(color) {
		var cross = new createjs.Shape();
		addFunctions(cross);
		cross.graphics.beginFill (color || "red");
		cross.graphics.moveTo(0, 150);
		cross.graphics.lineTo(300, 150);
		cross.graphics.lineTo(300, 155);
		cross.graphics.lineTo(0, 155);
		cross.graphics.lineTo(0, 150);
		cross.graphics.moveTo(150, 0);
		cross.graphics.moveTo(155, 0);
		cross.graphics.lineTo(155, 525);
		cross.graphics.lineTo(150, 525);
		cross.graphics.lineTo(150, 0);
		cross.graphics.closePath();
		cross.x = 25;
		cross.y = 25;
		addToStage(cross);
		return cross;
	},
	octagon: function(color) {
		var octagon = new createjs.Shape();
		addFunctions(octagon);
		octagon.graphics.beginFill (color || "red");
		octagon.graphics.moveTo(100, 0);
		octagon.graphics.lineTo(241, 0);
		octagon.graphics.lineTo(341, 100);
		octagon.graphics.lineTo(341, 241);
		octagon.graphics.lineTo(241, 341);
		octagon.graphics.lineTo(100, 341);
		octagon.graphics.lineTo(0, 241);
		octagon.graphics.lineTo(0, 100);
		octagon.graphics.lineTo(100, 0);
		octagon.graphics.closePath();
		octagon.x = 100
		octagon.y = 100
		addToStage(octagon);
		return octagon;
	},
	salmiakki: function(color) {
		var salmiakki = new createjs.Shape();
		addFunctions(salmiakki);
		salmiakki.graphics.beginFill (color || "red");
		salmiakki.graphics.moveTo(100, 50);
		salmiakki.graphics.lineTo(150, 125);
		salmiakki.graphics.lineTo(100, 200);
		salmiakki.graphics.lineTo(50, 125);
		salmiakki.graphics.closePath();
		salmiakki.x = 200;
		salmiakki.y = 200;
		addToStage(salmiakki);
		return salmiakki;
	},
	palikka: function(color) {
		var palikka = new createjs.Shape();
		addFunctions(palikka);
		palikka.graphics.beginFill (color || "red");
		palikka.graphics.moveTo(20, 20);
		palikka.graphics.arcTo(140, 20, 140, 40, 50);
		palikka.graphics.lineTo(140, 240);
		palikka.graphics.arcTo(20, 240, 20, 220, 50);
		palikka.graphics.closePath();
		palikka.x = 200;
		palikka.y = 200;
		addToStage(palikka);
		return palikka;
	},
	illuminati: function(color) {
		var illuminati = new createjs.Shape();
		addFunctions(illuminati);
		illuminati.graphics.beginFill(color || "this").drawCircle(200, 200, 50 );
		illuminati.graphics.beginFill("white").drawCircle(200, 200, 10 );
		illuminati.graphics.beginFill(color || "this");
		illuminati.graphics.moveTo(200, 90);
		illuminati.graphics.lineTo(283, 250);
		illuminati.graphics.lineTo(273, 250);
		illuminati.graphics.lineTo(200, 100);
		illuminati.graphics.lineTo(200, 90);
		illuminati.graphics.moveTo(200, 90);
		illuminati.graphics.lineTo(200, 100);
		illuminati.graphics.lineTo(127, 250);
		illuminati.graphics.lineTo(117, 250);
		illuminati.graphics.lineTo(200, 90);
		illuminati.graphics.moveTo(283, 250);
		illuminati.graphics.lineTo(288, 260);
		illuminati.graphics.lineTo(112, 260);
		illuminati.graphics.lineTo(117, 250);
		illuminati.graphics.lineTo(283, 250);
		illuminati.graphics.closePath();
		illuminati.x = 0
		illuminati.y = 0
		addToStage(illuminati);
		return illuminati;
	},
	hollow: function(color){
		var hollow = new createjs.Shape();
		addFunctions(hollow);
		hollow.graphics.beginStroke("black").drawRect(-1, -1, 102, 102);
		hollow.graphics.beginFill(color || "red").drawRect(0, 0, 100, 100);
		hollow.graphics.beginFill("white").drawRect(25, 25, 50, 50);
		hollow.graphics.beginStroke("black").drawRect(26, 26, 48, 48);
		hollow.x = Math.random() * 500;
		hollow.y = Math.random() * 500;
		addToStage(hollow);
		return hollow;
	},
	line: function(){
		var color;
		var numbers = [];
		for (var i = 0; i < arguments.length; i++){
			if (typeof arguments[i]  == "string"){	
				color = arguments[i];	
			} else {
				numbers.push(arguments[i]);
			}
		}
		var line = new createjs.Shape();
		line.graphics.beginStroke(color || "red");
		line.graphics.moveTo(numbers[0],numbers[1]).lineTo(numbers[2],numbers[3]);
		stage.addChild(line)
		return line;
	},
	text: function(teksti){
		var text = new createjs.Text(teksti, "66px Lato", "#ff7700");
		text.move = move
		text.x = Math.random() * 500;
		text.y = Math.random() * 500;
		text.textBaseline = "alphabetic";
		addToStage(text);
		return text;
	},
}
var direction;
var move = function(content) {
	var coordinates = [];
	for (var i = 0; i < arguments.length; i++){
		if (typeof arguments[i] == "string"){
			direction = arguments[i];
		} else { 
			coordinates.push(arguments[i])
		}
	}
	switch (direction) {
		case ("right"):
			this.x += deltaTime/1000*this.speed || 50;
			break;
		case ("left"):
			this.x -= deltaTime/1000*this.speed || 50;
			break;
		case ("up"): 
			this.y -= deltaTime/1000*this.speed || 50;
			break;
		case ("down"):
			this.y += deltaTime/1000*this.speed || 50;
			break;
		default: 
			this.x += coordinates[0] || deltaTime/1000*this.speed;
			this.y += coordinates[1] || deltaTime/1000*this.speed;
}
}
 function addToStage(object) {
	 if(currentObjects == maxobjects) {
	 alert("Et voi luoda enempää muotoja! Poista jokin muoto ennen kuin jatkat.");
	 } else {
	 stage.addChild(object);
	 stagearray.push(object);
	 currentObjects++;
	 }
 }
 function remove(){
	stage.removeChild(this)
	stagearray.pop(stagearray.indexOf(this));
	currentObjects--;
 }
 function addFunctions(object){
	 object.move = move;
	 object.remove = remove;
 }
 var maxobjects = "a";
 var currentObjects = 0;
 var stagearray = [];
function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}