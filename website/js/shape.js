
var shape = {
	circle: function(color) {
		var circle = new createjs.Shape();
		circle.graphics.beginFill(color || "red").drawCircle(0, 0, 50);
		circle.x = Math.random() * 1000;
		circle.y = Math.random() * 1000;
		stage.addChild(circle);
		return circle;
	},
	square: function(color){
		var square = new createjs.Shape();
		square.graphics.beginFill(color || "red").drawRect(0, 0, 100, 100);
		square.x = Math.random() * 1000;
		square.y = Math.random() * 1000;
		stage.addChild(square);
		return square;
	},
	rectangle: function(color) {
		var rectangle = new createjs.Shape();
		rectangle.graphics.beginFill(color || "red").drawRect(0, 0, 200, 100);
		rectangle.x = Math.random() * 1000;
		rectangle.y = Math.random() * 1000;
		stage.addChild(rectangle);
		return rectangle;
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
	}
}
