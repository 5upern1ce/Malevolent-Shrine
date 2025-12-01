const canvas = document.getElementById("domain");

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

function getRandom(max) {
	return Math.floor(Math.random() * max);
}

function setLine(startx, starty, endx, endy, speed) {
	let currentx = startx;
	let currenty = starty;

	drawLine(startx, starty, endx, endy, speed, currentx, currenty);
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

function drawLine(startx, starty, endx, endy, speed, currentx, currenty) {
	let color = "";
	ctx.beginPath();
	ctx.moveTo(startx, starty);
	ctx.lineTo(currentx, currenty);
	if (getRandom(2) === 0) {
		color = "black";
	} else {
		color = "red";
	}
	ctx.strokeStyle = color;
	ctx.lineWidth = getRandom(8);
	ctx.stroke();
	console.log("Another frame");
	if (currentx < endx) {
		requestAnimationFrame(() =>
			drawLine(
				startx,
				starty,
				endx,
				endy,
				speed,
				currentx + (endx - startx) * speed,
				currenty + (endy - starty) * speed
			)
		);
	} else {
	}
}

function main() {
	setLine(0, 600, 1000, 600, 0.1);
	setLine(0, 800, 1000, 200, 0.1);
	setLine(0, 100, 1000, 600, 0.1);
	setLine(0, 800, 1000, 400, 0.1);
	setLine(0, 500, 1000, 600, 0.1);
	setLine(0, 200, 1000, 300, 0.1);
}

main();
