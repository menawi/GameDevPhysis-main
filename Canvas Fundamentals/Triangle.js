

context.beginPath();
context.moveTo(50, 50); // move to the first point (50, 50)
context.lineTo(100, 100); // draw a line to the second point (100, 100)
context.lineTo(50, 100); // draw a line to the third point (50, 100)
context.closePath(); // close the path to complete the triangle
context.stroke(); // draw the triangle


const x = 100; // x-coordinate of the center of the triangle
const y = 100; // y-coordinate of the center of the triangle
const size = 50; // size of the triangle (length of each side)

// calculate the coordinates of the three points
const x1 = x - size / 2;
const y1 = y + (Math.sqrt(3) / 2) * size;
const x2 = x + size / 2;
const y2 = y + (Math.sqrt(3) / 2) * size;
const x3 = x;
const y3 = y - (Math.sqrt(3) / 2) * size;

// draw the triangle
context.beginPath();
context.moveTo(x1, y1); // move to the first point
context.lineTo(x2, y2); // draw a line to the second point
context.lineTo(x3, y3); // draw a line to the third point
context.closePath(); // close the path to complete the triangle
context.stroke(); // draw the triangle


context.strokeStyle = "#00FF00";
context.lineWidth = 0.25


for (let x = 0; x < canvas.width; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, canvas.height);
}

for (let y = 0; y < canvas.height; y += 10) {
  context.moveTo(0, y);
  context.lineTo(canvas.width, y);
}

context.stroke();


draw_grid(context);
context.beginPath();
context.arc(200, 200, 150, 0.2 * Math.PI, 1.8 * Math.PI);
context.lineTo(200, 200);
context.fillStyle = "yellow";
context.fill();


