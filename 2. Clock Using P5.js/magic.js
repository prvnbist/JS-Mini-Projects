function setup() {
	var wW = windowWidth,
		wH = windowHeight;
	createCanvas(wW,wH);
	angleMode(DEGREES);
 }

 function draw() {
	clear();
	var wW = windowWidth,
		wH = windowHeight;

	translate(wW/2, wH/2);
	rotate(-90);

	var hr = hour(),
		min = minute(),
		sec = second();

	strokeWeight(8);
	stroke(18,64,64);

	var secHand = map(sec, 0, 60, 0, 360);
	push();
	rotate(secHand);
	line(0, 0, 110, 0);
	pop();
	
	var minHand = map(min, 0, 60, 0, 360);
	push();
	rotate(minHand);
	line(0, 0, 90, 0);
	pop();
	
	var hrHand = map(hr % 12, 0, 12, 0, 360);
	push();
	rotate(hrHand);
	line(0, 0, 60, 0);
	pop();

	strokeWeight(20);
	point(0, 0);
}