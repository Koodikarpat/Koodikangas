

var sprite = { //testiä varten
	circle: function(color) {
		var circle = new createjs.Shape();
		circle.graphics.beginFill(color || "red").drawCircle(0, 0, 50);
		circle.x = Math.random() * 500;
		circle.y = Math.random() * 500;
		stage.addChild(circle);
		return circle;
	},			// pitää saada toimimaan ja tuomaan kuvat
	olio: function() {
		var olio = document.getElementById("olio")
		olio.x = 120;
		olio.y = 120;
		stage.addChild(olio);
		return olio;
	},
	
}