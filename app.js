window.onload = function() {
canv = document.getElementById("gc");
ctx = canv.getContext("2d");
document.addEventListener("keydown", keyPush);
speed = setInterval(game, 1000/5);
length = document.getElementById("length");
speedometer = document.getElementById("speedometer");
}

px = py = 10;
gs = tc = 20;
ax = ay = 10;
xv = yv = 0;
trail = [];
tail = 5;

	
function setTitle(string){
	if (title.innerHTML !== string){
		title.innerHTML = string;
		setTimeout(function(){
			title.innerHTML = "";
		}, 5000);			
	}
}

function game() {
	if (tail < 10){
		clearInterval(speed);
		speed = setInterval(game, 1000/5);
		speedometer.innerHTML = 'Snail snake';
		speedometer.style.backgroundColor = "#8A3232";
		length.innerHTML = "LEVEL 1";
	}

	if (tail == 7) {
		setTitle("IT'S NOT ABOUT THE SPEED");

	}
	if (tail == 10){
		setTitle("SPEED BITES");
	}
	if (tail == 15){
		setTitle("IT DOESN'T MATTER IF YOU WIN BY AN INCH OR A MILE");
	}
	if (tail == 20){
		setTitle("ONE LAST RIDE");

	}
	if (tail == 25){
		setTitle("REACHING 88 MPH...");
	}
	if (tail == 30) {
		setTitle("IN A GALAXY FAR FAR AWAY");
		
	}
	if (tail >= 10 && tail < 15){
		clearInterval(speed);
		speed = setInterval(game, 1000/10);
		speedometer.innerHTML = 'Snake';
		speedometer.style.backgroundColor = "#A63333";
		length.innerHTML = "LEVEL 2";
	}
	if (tail >=15 && tail <20){
		clearInterval(speed);
		speed = setInterval(game, 1000/15);
		speedometer.innerHTML = 'Fast & Furious snake';
		speedometer.style.backgroundColor = "#C22F2F";
		length.innerHTML = "LEVEL 3";
	}
	if (tail >=20 && tail < 25){
		clearInterval(speed);
		speed = setInterval(game, 1000/20);		
		speedometer.innerHTML = 'Vin Diesel snake';
		speedometer.style.backgroundColor = "#DE2020";
		length.innerHTML = "LEVEL 4";
	}
	if (tail >=25 && tail < 30) {
		clearInterval(speed);
		speed = setInterval(game, 1000/25);		
		speedometer.innerHTML = 'Time travel snake';
		speedometer.style.backgroundColor = "#F21616";
		length.innerHTML = "LEVEL 5";

	}
	if (tail >=30 && tail < 35) {
		clearInterval(speed);
		speed = setInterval(game, 1000/30);		
		speedometer.innerHTML = 'Millennium Falcon snake';
		speedometer.style.backgroundColor = "#FF0000";
		length.innerHTML = "LEVEL 6";
	}
	px += xv;
	py += yv;
	if (px < 0){
		px = tc - 1;
	}
	if (px > tc - 1) {
		px = 0;
	}
	if (py < 0) {
		py = tc - 1;		
	}
	if (py > tc -1) {
		py = 0;
	}
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canv.width, canv.height);

	ctx.fillStyle = 'lime';
	for (var i=0; i<trail.length; i++){
		ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
		if (trail[i].x == px && trail[i].y == py){
			tail = 5;
		}
	}

	trail.push({x: px, y: py});
	while(trail.length > tail) {
		trail.shift();
	}

	if (ax == px && ay == py){
		tail++;

		ax = Math.floor(Math.random() * tc);
		ay = Math.floor(Math.random() * tc);
	}	

	ctx.fillStyle = 'red';
	ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);
}

function keyPush(evt) {
	switch(evt.keyCode){
		case 37: 
			xv = -1;
			yv = 0;
			break;
		case 38: 
			xv = 0;
			yv = -1;
			break;
		case 39: 
			xv = 1;
			yv = 0;
			break;
		case 40: 
			xv = 0;
			yv = 1;
			break;
	}
}	