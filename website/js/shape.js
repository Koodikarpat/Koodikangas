
var shape = {
	circle: function(color) {
		var circle = new createjs.Shape();
		circle.move= move
		circle.graphics.beginFill(color || "red").drawCircle(0, 0, 50);
		circle.x = Math.random() * 500;
		circle.y = Math.random() * 500;
		stage.addChild(circle);
		return circle;
	},
	square: function(color){
		var square = new createjs.Shape();
		square.graphics.beginFill(color || "red").drawRect(0, 0, 100, 100);
		square.x = Math.random() * 500;
		square.y = Math.random() * 500;
		stage.addChild(square);
		return square;
	},
	rectangle: function(color) {
		var rectangle = new createjs.Shape();
		rectangle.graphics.beginFill(color || "red").drawRect(0, 0, 200, 100);
		rectangle.x = Math.random() * 500;
		rectangle.y = Math.random() * 500;
		stage.addChild(rectangle);
		return rectangle;
	},
	triangle: function(color) {
		var triangle = new createjs.Shape();
		triangle.graphics.beginFill(color || "red");
		triangle.graphics.moveTo(75, 50);
		triangle.graphics.lineTo(125, 125);
		triangle.graphics.lineTo(175, 50);
		triangle.graphics.closePath();
		triangle.graphics.beginFill(color || "red");
		triangle.x = 180;
		triangle.y = 180;
		stage.addChild(triangle);
		return triangle;
	},
	star: function(color) {
		var star = new createjs.Shape();
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
		stage.addChild(star);
		return star;
	},
	hexagon: function(color) {
		var hexagon = new createjs.Shape();
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
		stage.addChild(hexagon);
		return hexagon;
	},
	salmiakki: function(color) {
		var salmiakki = new createjs.Shape();
		salmiakki.graphics.beginFill (color || "red");
		salmiakki.graphics.moveTo(100, 50);
		salmiakki.graphics.lineTo(150, 125);
		salmiakki.graphics.lineTo(100, 200);
		salmiakki.graphics.lineTo(50, 125);
		salmiakki.graphics.closePath();
		salmiakki.x = 200;
		salmiakki.y = 200;
		stage.addChild(salmiakki);
		return salmiakki;
	},
	palikka: function(color) {
		var palikka = new createjs.Shape();
		palikka.graphics.beginFill (color || "red");
		palikka.graphics.moveTo(20, 20);
		palikka.graphics.lineTo(100, 20);
		palikka.graphics.arcTo(150, 20, 150, 70, 50);
		palikka.graphics.lineTo(150, 120);
		palikka.graphics.closePath();
		palikka.x = 200;
		palikka.y = 200;
		stage.addChild(palikka);
		return palikka;
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
		var text = new createjs.Text(teksti, "20px Arial", "#ff7700");
		text.x = Math.random() * 1000;
		text.y = Math.random() * 1000;
		text.textBaseline = "alphabetic";
		stage.addChild(text);
		return text;
	},
	

}

var move = function() {
	var direction;
	var coordinates = [];
	
	for (var i = 0; i < arguments.length; i++){
		if (typeof arguments[i] == "string"){
			direction = arguments[i];
		} else { 
			coordinates.push(arguments[i])
		}
	this.x +=100
	this.y +=200
	}
}