var bubbles = [];

function setup() {
	frameRate(40);
	// Creates Canvas
	createCanvas(windowWidth, windowHeight);
	//Genrates 100 Particles with random a & y
	for (var i = 0; i < 60; i++) {
		var x = random(width); 
		var y = random(height);
		bubbles[i] = new Bubble(x, y);
	}
}

function draw() {
	clear();
	//Adds color and motion
	for (var i = 0; i < bubbles.length; i++) {
		fill(bubbles[i].clr.r, bubbles[i].clr.g, bubbles[i].clr.b);
		bubbles[i].move();
		bubbles[i].display();
		//For Individual particle collision
		for (var j = i + 1; j < bubbles.length; j++) {
			// Connected Lines
			if (dist(bubbles[i].x, bubbles[i].y, bubbles[j].x, bubbles[j].y) < 70){
				var v1 = createVector(bubbles[i].x,bubbles[i].y);
				var v2 = createVector(bubbles[j].x,bubbles[j].y);
				var lineWidth = dist(bubbles[i].x, bubbles[i].y, bubbles[j].x, bubbles[j].y);
				stroke(bubbles[i].clr.r, bubbles[i].clr.g, bubbles[i].clr.b);
				line(v1.x,v1.y,v2.x,v2.y);
			}
		}
	}
}

function Bubble(x, y) {
	this.x = x;
	this.y = y;
	this.wh = 15;
	this.speedX = random(1, 5);
	this.speedY = random(1, 5);

	//Individual Particle Creation
	this.display = function() {
		noStroke();
		ellipse(this.x, this.y, this.wh, this.wh);
	};

	//Randomizes colors
	this.clr = {
		r: random(255),
		g: random(255),
		b: random(255)
	};

	//Particle Motion
	this.move = function() {
		//Motion in X direction
		this.x += this.speedX;
		//Bouncing back on X-axis
		if (this.x > windowWidth || this.x < 0) {
			this.speedX = -this.speedX;
		}
		//Motion in Y Direction
		this.y += this.speedY;
		//Bouncing back on Y-axis
		if (this.y > windowHeight || this.y < 0) {
			this.speedY = -this.speedY;
		}
	};
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}