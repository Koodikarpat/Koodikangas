var shape = {
	circle: function(color, radius, x, y) {
		var circle = new createjs.Shape();
		circle.radius = radius || 50;
		addFunctions(circle);
		circle.graphics.beginFill(color || "this").drawCircle(x || 200, y || 200, circle.radius);
		circle.radius = function(radius) {
			var newcircle = new createjs.Shape();
			console.log(this);
			newcircle.graphics.beginFill(color || "this").drawCircle(x || 200, y || 200, radius || 50 );
			this.remove();
			addFunctions(newcircle);
			addToStage(newcircle);
			return newcircle;	
		}
		circle.color = function(color) {
			var newcircle = new createjs.Shape();
			console.log(this);
			newcircle.graphics.beginFill(color || "this").drawCircle(x || 200, y || 200, radius || 50 );
			this.remove();
			addFunctions(newcircle);
			addToStage(newcircle);
			return newcircle;	
		}
		circle.place = function(x, y) {
			var newcircle = new createjs.Shape();
			console.log(this);
			newcircle.graphics.beginFill(color || "this").drawCircle(x || 200, y || 200, radius || 50 );
			this.remove();
			addFunctions(newcircle);
			addToStage(newcircle);
			return newcircle;
		}

		addToStage(circle);
		return circle;	
	},
	ellipse: function(color, width, height, x, y) {
		var ellipse = new createjs.Shape();
		ellipse.radius = 200, 100;
		addFunctions(ellipse);
		ellipse.graphics.beginFill(color || "this").drawEllipse(x || 200, y || 200, width || 200, height || 100);
		console.log(this);
		ellipse.radius = function(width, height) {
			var newellipse = new createjs.Shape();
			console.log(this);
			newellipse.graphics.beginFill(color || "this").drawEllipse(x || 200, y || 200, width || 200);
			this.remove();
			addFunctions(newellipse);
			addToStage(newellipse);
			return newellipse;
		}
		ellipse.color = function(color) {
			var newellipse = new createjs.Shape();
			console.log(this);
			newellipse.graphics.beginFill(color || "this").drawEllipse(x || 200, y || 200, width || 200, height || 100);
			this.remove();
			addFunctions(newellipse);
			addToStage(newellipse);
			return newellipse;
		}
		ellipse.place = function(x, y) {
			var newellipse = new createjs.Shape();
			console.log(this);
			newellipse.graphics.beginFill(color || "this").drawEllipse(x || 200, y || 200, width || 200, height || 100);
			this.remove();
			addFunctions(newellipse);
			addToStage(newellipse);
			return newellipse;
		}
		addToStage(ellipse);
		return ellipse;
	},
	square: function(color, sidelength, x, y) {
		var square = new createjs.Shape();
		addFunctions(square);
		square.graphics.beginFill(color || "this").drawRect(x || 200, y || 200, sidelength || 100, sidelength || 100);
		square.sidelength = function(sidelength) {
			var newsquare = new createjs.Shape();
			console.log(this);
			newsquare.graphics.beginFill(color || "this").drawRect(x || 200, y || 200, sidelength || 100, sidelength || 100);
			this.remove();
			addFunctions(newsquare);
			addToStage(newsquare);
			return newsquare;
		}
		square.color = function(color) {
			var newsquare = new createjs.Shape();
			console.log(this);
			newsquare.graphics.beginFill(color || "this").drawRect(x || 200, y || 200, sidelength || 100, sidelength || 100);
			this.remove();
			addFunctions(newsquare);
			addToStage(newsquare);
			return newsquare;
		}
		square.place = function(x, y) {
			var newsquare = new createjs.Shape();
			console.log(this);
			newsquare.graphics.beginFill(color || "this").drawRect(x || 200, y || 200, sidelength || 100, sidelength || 100);
			this.remove();
			addFunctions(newsquare);
			addToStage(newsquare);
			return newsquare;
		}
		addToStage(square);
		return square;
	},
	rectangle: function(color, width, height, x, y) {
		var rectangle = new createjs.Shape();
		addFunctions(rectangle);
		rectangle.graphics.beginFill(color || "this").drawRect(x || 200, y || 300, width || 200, height || 100);
		rectangle.sidelength = function(width, height) {
			var newrectangle = new createjs.Shape();
			console.log(this);
			newrectangle.graphics.beginFill(color || "this").drawRect(x || 200, y || 300, width || 200, height || 100);
			this.remove();
			addFunctions(newrectangle);
			addToStage(newrectangle);
			return newrectangle;
		}
		rectangle.width = function(width) {
			var newrectangle = new createjs.Shape();
			console.log(this.width, this.height);
			newrectangle.graphics.beginFill(color || "this").drawRect( x || 200, y || 300, width || 200, height || 100);
			newrectangle.height = this.height;
			this.remove();
			addFunctions(newrectangle);
			addToStage(newrectangle);
			return newrectangle;
		}
		rectangle.height = function(height) {
			var newrectangle = new createjs.Shape();
			console.log(this.width, this.height);
			newrectangle.graphics.beginFill(color || "this").drawRect( x || 200, y || 300, width || 200, height || 100);
			newrectangle.width = this.width;
			this.remove();
			addFunctions(newrectangle);
			addToStage(newrectangle);
			return newrectangle;
		}
		rectangle.color = function(color) {
			var newrectangle = new createjs.Shape();
			console.log(this.width, this.height);
			newrectangle.graphics.beginFill(color || "this").drawRect( x || 200, y || 300, width || 200, height || 100);
			newrectangle.width = this.width;
			newrectangle.height = this.height;
			this.remove();
			addFunctions(newrectangle);
			addToStage(newrectangle);
			return newrectangle;
		}
		rectangle.place = function(x, y) {
			var newrectangle = new createjs.Shape();
			console.log(this);
			newrectangle.graphics.beginFill(color || "this").drawRect(x || 200, y || 200, sidelength || 100, sidelength || 100);
			this.remove();
			addFunctions(newrectangle);
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
		triangle.color = function(color) {
			var newtriangle = new createjs.Shape();
			console.log(this.triangle);
			newtriangle.graphics.beginFill(color || "this");
			newtriangle.graphics.moveTo(75, 50);
			newtriangle.graphics.lineTo(125, 125);
			newtriangle.graphics.lineTo(175, 50);
			newtriangle.graphics.closePath();
			newtriangle.graphics.beginFill(color || "this");
			newtriangle.x = 180;
			newtriangle.y = 180;
			this.remove();
			addFunctions(newtriangle);
			addToStage(newtriangle);
			return newtriangle;
		}
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
		kite.color = function(color) {
			var newkite = new createjs.Shape();
			console.log(this.triangle);
			newkite.graphics.beginFill(color || "red");
			newkite.graphics.moveTo(75, 0);
			newkite.graphics.lineTo(150, 75);
			newkite.graphics.lineTo(75, 250);
			newkite.graphics.lineTo(0, 75);
			newkite.graphics.lineTo(75, 0);
			newkite.x = 100;
			newkite.y = 100;
			this.remove();
			addFunctions(newkite);
			addToStage(newkite);
			return newkite;
		}
		addToStage(kite);
		return kite; 
	},
	härpäke: function(color) {
		var härpäke = new createjs.Shape();
		addFunctions(härpäke);
		härpäke.graphics.beginFill (color || "red");
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
		härpäke.color = function(color) {
			var newhärpäke = new createjs.Shape();
			console.log(this.härpäke);
			newhärpäke.graphics.beginFill (color || "red");
			newhärpäke.graphics.moveTo (175, 215);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (Math.random() * 300, Math.random() * 100);
			newhärpäke.graphics.lineTo (175, 215);
			newhärpäke.x = 400
			newhärpäke.y = 400
			this.remove();
			addFunctions(newhärpäke);
			addToStage(newhärpäke);
			return newhärpäke;
		}
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
		parallelogram.color = function(color) {
			var newparallelogram = new createjs.Shape();
			console.log(this.parallelogram);
			newparallelogram.graphics.beginFill (color ||"red");
			newparallelogram.graphics.moveTo(50, 0);
			newparallelogram.graphics.lineTo(300, 0);
			newparallelogram.graphics.lineTo(250, 200);
			newparallelogram.graphics.lineTo(0, 200);
			newparallelogram.graphics.lineTo(50, 0);
			newparallelogram.graphics.closePath();
			newparallelogram.x = 150;
			newparallelogram.y = 150;
			this.remove();
			addFunctions(newparallelogram);
			addToStage(newparallelogram);
			return newparallelogram;
		}
		addToStage(parallelogram);
		return parallelogram;
	},
	star: function(color) {
		var star = new createjs.Shape();
		addFunctions(star);
		star.graphics.beginFill(color || "red");
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
		star.color = function(color) {
			var newstar = new createjs.Shape();
			console.log(this.star);
			newstar.graphics.beginFill(color || "red");
			newstar.graphics.moveTo(75, 50);
			newstar.graphics.lineTo(125, 125);
			newstar.graphics.lineTo(175, 50);
			newstar.graphics.closePath();
			newstar.graphics.moveTo(75, 100);
			newstar.graphics.lineTo(175, 100);
			newstar.graphics.lineTo(125, 25);
			newstar.graphics.closePath();
			newstar.graphics.beginFill(color || "red");
			newstar.x = 100;
			newstar.y = 100;
			this.remove();
			addFunctions(newstar);
			addToStage(newstar);
			return newstar;
		}
		addToStage(star);
		return star;
	},
	hollowstar: function(color) {
		var hollowstar = new createjs.Shape();
		addFunctions(hollowstar);
		hollowstar.graphics.beginFill (color || "red");
		hollowstar.graphics.moveTo(250, 0);
		hollowstar.graphics.lineTo(300, 190);
		hollowstar.graphics.lineTo(500, 190);
		hollowstar.graphics.lineTo(350, 310);
		hollowstar.graphics.lineTo(400, 500);
		hollowstar.graphics.lineTo(250, 390);
		hollowstar.graphics.lineTo(100, 500);
		hollowstar.graphics.lineTo(150, 310);
		hollowstar.graphics.lineTo(0, 190);
		hollowstar.graphics.lineTo(190, 190);
		hollowstar.graphics.lineTo(250, 0);
		hollowstar.graphics.lineTo(250, 10);
		hollowstar.graphics.lineTo(200, 200);
		hollowstar.graphics.lineTo(20, 200);
		hollowstar.graphics.lineTo(160, 310);
		hollowstar.graphics.lineTo(110, 490);
		hollowstar.graphics.lineTo(250, 380);
		hollowstar.graphics.lineTo(390, 490);
		hollowstar.graphics.lineTo(340, 310);
		hollowstar.graphics.lineTo(480, 200);
		hollowstar.graphics.lineTo(290, 200);
		hollowstar.graphics.lineTo(250, 10);
		hollowstar.graphics.lineTo(250,0);
		hollowstar.graphics.closePath();
		hollowstar.x = 100;
		hollowstar.y = 100;
		hollowstar.color = function(color) {
			var newhollowstar = new createjs.Shape();
			console.log(this.hollowstar);
			newhollowstar.graphics.beginFill (color || "red");
			newhollowstar.graphics.moveTo(250, 0);
			newhollowstar.graphics.lineTo(300, 190);
			newhollowstar.graphics.lineTo(500, 190);
			newhollowstar.graphics.lineTo(350, 310);
			newhollowstar.graphics.lineTo(400, 500);
			newhollowstar.graphics.lineTo(250, 390);
			newhollowstar.graphics.lineTo(100, 500);
			newhollowstar.graphics.lineTo(150, 310);
			newhollowstar.graphics.lineTo(0, 190);
			newhollowstar.graphics.lineTo(190, 190);
			newhollowstar.graphics.lineTo(250, 0);
			newhollowstar.graphics.lineTo(250, 10);
			newhollowstar.graphics.lineTo(200, 200);
			newhollowstar.graphics.lineTo(20, 200);
			newhollowstar.graphics.lineTo(160, 310);
			newhollowstar.graphics.lineTo(110, 490);
			newhollowstar.graphics.lineTo(250, 380);
			newhollowstar.graphics.lineTo(390, 490);
			newhollowstar.graphics.lineTo(340, 310);
			newhollowstar.graphics.lineTo(480, 200);
			newhollowstar.graphics.lineTo(290, 200);
			newhollowstar.graphics.lineTo(250, 10);
			newhollowstar.graphics.lineTo(250,0);
			newhollowstar.graphics.closePath();
			newhollowstar.x = 100;
			newhollowstar.y = 100;
			this.remove();
			addFunctions(newhollowstar);
			addToStage(newhollowstar);
			return newhollowstar;
		}
		addToStage(hollowstar);
		return hollowstar;
	},
	fivepointedstar: function(color) {
		var fivepointedstar = new createjs.Shape();
		addFunctions(fivepointedstar);
		fivepointedstar.graphics.beginFill (color || "red");
		fivepointedstar.graphics.moveTo(250, 0);
		fivepointedstar.graphics.lineTo(300, 190);
		fivepointedstar.graphics.lineTo(500, 190);
		fivepointedstar.graphics.lineTo(350, 310);
		fivepointedstar.graphics.lineTo(400, 500);
		fivepointedstar.graphics.lineTo(250, 390);
		fivepointedstar.graphics.lineTo(100, 500);
		fivepointedstar.graphics.lineTo(150, 310);
		fivepointedstar.graphics.lineTo(0, 190);
		fivepointedstar.graphics.lineTo(190, 190);
		fivepointedstar.graphics.lineTo(250, 0);
		fivepointedstar.graphics.closePath();
		fivepointedstar.x = 100;
		fivepointedstar.y = 100;
		fivepointedstar.color = function(color) {
			var newfivepointedstar = new createjs.Shape();
			console.log(this.fivepointedstar);
			newfivepointedstar.graphics.beginFill (color || "red");
			newfivepointedstar.graphics.moveTo(250, 0);
			newfivepointedstar.graphics.lineTo(300, 190);
			newfivepointedstar.graphics.lineTo(500, 190);
			newfivepointedstar.graphics.lineTo(350, 310);
			newfivepointedstar.graphics.lineTo(400, 500);
			newfivepointedstar.graphics.lineTo(250, 390);
			newfivepointedstar.graphics.lineTo(100, 500);
			newfivepointedstar.graphics.lineTo(150, 310);
			newfivepointedstar.graphics.lineTo(0, 190);
			newfivepointedstar.graphics.lineTo(190, 190);
			newfivepointedstar.graphics.lineTo(250, 0);
			newfivepointedstar.graphics.closePath();
			newfivepointedstar.x = 100;
			newfivepointedstar.y = 100;
			this.remove();
			addFunctions(newfivepointedstar);
			addToStage(newfivepointedstar);
			return newfivepointedstar;
		}
		addToStage(fivepointedstar);
		return fivepointedstar;
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
		pentagon.color = function(color) {
			var newpentagon = new createjs.Shape();
			console.log(this.pentagon);
			newpentagon.graphics.beginFill (color || "red");
			newpentagon.graphics.moveTo(0, 150);
			newpentagon.graphics.lineTo(150, 0);
			newpentagon.graphics.lineTo(300, 150);
			newpentagon.graphics.lineTo(225, 300);
			newpentagon.graphics.lineTo(75, 300);
			newpentagon.graphics.lineTo(0, 150);
			newpentagon.graphics.closePath();
			newpentagon.x = 110;
			newpentagon.y = 110;
			this.remove();
			addFunctions(newpentagon);
			addToStage(newpentagon);
			return newpentagon;
		}
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
		hexagon.color = function(color) {
			var newhexagon = new createjs.Shape();
			console.log(this.hexagon);
			newhexagon.graphics.beginFill (color || "red");
			newhexagon.graphics.moveTo(50, 50);
			newhexagon.graphics.lineTo(150, 50);
			newhexagon.graphics.lineTo(200, 136.6);
			newhexagon.graphics.lineTo(150, 223.2);
			newhexagon.graphics.lineTo(50, 223.2);
			newhexagon.graphics.lineTo(0, 136.6);
			newhexagon.graphics.closePath();
			newhexagon.x = 110;
			newhexagon.y = 110;
			this.remove();
			addFunctions(newhexagon);
			addToStage(newhexagon);
			return newhexagon;
		}
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
		cross.graphics.lineTo(155, 0);
		cross.graphics.lineTo(155, 525);
		cross.graphics.lineTo(150, 525);
		cross.graphics.lineTo(150, 0);
		cross.graphics.closePath();
		cross.x = 25;
		cross.y = 25;
		cross.color = function(color) {
			var newcross = new createjs.Shape();
			console.log(this.cross);
			newcross.graphics.beginFill (color || "red");
			newcross.graphics.moveTo(0, 150);
			newcross.graphics.lineTo(300, 150);
			newcross.graphics.lineTo(300, 155);
			newcross.graphics.lineTo(0, 155);
			newcross.graphics.lineTo(0, 150);
			newcross.graphics.moveTo(150, 0);
			newcross.graphics.lineTo(155, 0);
			newcross.graphics.lineTo(155, 525);
			newcross.graphics.lineTo(150, 525);
			newcross.graphics.lineTo(150, 0);
			newcross.graphics.closePath();
			newcross.x = 25;
			newcross.y = 25;
			this.remove();
			addFunctions(newcross);
			addToStage(newcross);
			return newcross;
		}
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
		octagon.x = 100;
		octagon.y = 100;
		octagon.color = function(color) {
			var newoctagon = new createjs.Shape();
			console.log(this.octagon);
			newoctagon.graphics.beginFill (color || "red");
			newoctagon.graphics.moveTo(100, 0);
			newoctagon.graphics.lineTo(241, 0);
			newoctagon.graphics.lineTo(341, 100);
			newoctagon.graphics.lineTo(341, 241);
			newoctagon.graphics.lineTo(241, 341);
			newoctagon.graphics.lineTo(100, 341);
			newoctagon.graphics.lineTo(0, 241);
			newoctagon.graphics.lineTo(0, 100);
			newoctagon.graphics.lineTo(100, 0);
			newoctagon.graphics.closePath();
			newoctagon.x = 100;
			newoctagon.y = 100;
			this.remove();
			addFunctions(newoctagon);
			addToStage(newoctagon);
			return newoctagon;
		}
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
		salmiakki.color = function(color) {
			var newoctagon = new createjs.Shape();
			console.log(this.salmiakki);
			newsalmiakki.graphics.beginFill (color || "red");
			newsalmiakki.graphics.moveTo(100, 0);
			newsalmiakki.graphics.lineTo(241, 0);
			newsalmiakki.graphics.lineTo(341, 100);
			newsalmiakki.graphics.lineTo(341, 241);
			newsalmiakki.graphics.lineTo(241, 341);
			newsalmiakki.graphics.lineTo(100, 341);
			newsalmiakki.graphics.lineTo(0, 241);
			newsalmiakki.graphics.lineTo(0, 100);
			newsalmiakki.graphics.lineTo(100, 0);
			newsalmiakki.graphics.closePath();
			newsalmiakki.x = 100;
			newsalmiakki.y = 100;
			this.remove();
			addFunctions(newsalmiakki);
			addToStage(newsalmiakki);
			return newsalmiakki;
		}
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
		palikka.color = function(color) {
			var newpalikka = new createjs.Shape();
			console.log(this.palikka);
			newpalikka.graphics.beginFill (color || "red");
			newpalikka.graphics.moveTo(20, 20);
			newpalikka.graphics.arcTo(140, 20, 140, 40, 50);
			newpalikka.graphics.lineTo(140, 240);
			newpalikka.graphics.arcTo(20, 240, 20, 220, 50);
			newpalikka.graphics.closePath();
			newpalikka.x = 200;
			newpalikka.y = 200;
			this.remove();
			addFunctions(newpalikka);
			addToStage(newpalikka);
			return newpalikka;
		}
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
		illuminati.color = function(color) {
			var newilluminati = new createjs.Shape();
			console.log(this.illuminati);
			newilluminati.graphics.beginFill(color || "this").drawCircle(200, 200, 50 );
			newilluminati.graphics.beginFill("white").drawCircle(200, 200, 10 );
			newilluminati.graphics.beginFill(color || "this");
			newilluminati.graphics.moveTo(200, 90);
			newilluminati.graphics.lineTo(283, 250);
			newilluminati.graphics.lineTo(273, 250);
			newilluminati.graphics.lineTo(200, 100);
			newilluminati.graphics.lineTo(200, 90);
			newilluminati.graphics.moveTo(200, 90);
			newilluminati.graphics.lineTo(200, 100);
			newilluminati.graphics.lineTo(127, 250);
			newilluminati.graphics.lineTo(117, 250);
			newilluminati.graphics.lineTo(200, 90);
			newilluminati.graphics.moveTo(283, 250);
			newilluminati.graphics.lineTo(288, 260);
			newilluminati.graphics.lineTo(112, 260);
			newilluminati.graphics.lineTo(117, 250);
			newilluminati.graphics.lineTo(283, 250);
			newilluminati.graphics.closePath();
			newilluminati.x = 0
			newilluminati.y = 0
			this.remove();
			addFunctions(newilluminati);
			addToStage(newilluminati);
			return newilluminati;
		}
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
function rotate(angle) {
	angle = angle*Matrix2D.DEG_TO_RAD;


}
var direction;


switch (direction) {
	case ("clockwise"):
		this.rotate += deltaTime/1000*this.speed || 50;
		break;
	case ("counterclockwise"):
		this.rotate -= deltaTime/1000*this.speed || 50;
		break;
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