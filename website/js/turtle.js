var pendown = true;

var turtle = {
	show: function() {
		this.turtle = new createjs.Bitmap("sprites/turtle.png"); 
		this.turtle.move = move;
		this.turtle.x = 120;
		this.turtle.y = 120;
		this.turtle.regX = this.turtle.image.width/2;
		this.turtle.regY = this.turtle.image.height/2;
		console.log(this.turtle);
		stage.addChild(this.turtle);
		
		return this.turtle;
	},
	turn: function(angle) {
		
		this.turtle.rotation += angle;
		
		
	},
	forward: function(distance, thickness, color) {
		
		
		var rotationRad = -(this.turtle.rotation+90) * Math.PI / 180;
		
		if (pendown == true) {
		line = new createjs.Shape();
		line.graphics.setStrokeStyle(thickness,"round").beginStroke(color || "black");
		line.graphics.moveTo(this.turtle.x, this.turtle.y);
		stage.addChild(line);
		
		this.turtle.x -= (distance || 50)*Math.cos(rotationRad);
		this.turtle.y += (distance || 50)*Math.sin(rotationRad);
		
		line.graphics.lineTo(this.turtle.x, this.turtle.y);
		
		} else {
		this.turtle.x -= distance*Math.cos(rotationRad);
		this.turtle.y += distance*Math.sin(rotationRad);
		}
		return line;
	}, 
	penup: function(){
		 penup = true;
		 pendown = false;
	},
	pendown: function(){
		penup = false;
		pendown = true;
		
	},
	hide: function() {
		this.turtle.visible = false;
		
	}
}	