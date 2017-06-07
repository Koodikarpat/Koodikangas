
var shape = {
	circle: function(color) {
		var circle = new createjs.Shape();
		circle.graphics.beginFill(color || "red").drawCircle(0, 0, 50);
		circle.x = 100;
		circle.y = 100;
		stage.addChild(circle);
		return circle;
	},
	square: function(){
		
	},
	rectangle: function() {
		
	},
	line: function(){
		
	},
	text: function(){
		
	}
}
