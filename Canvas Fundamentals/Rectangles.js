


// Set the fill color to blue
context.fillStyle = 'blue';

// Draw a rectangle
context.fillRect(10, 10, 100, 50);

// Fill the rectangle with blue color
context.fill();


context.strokeStyle = 'red';
context.strokeRect(270, 10, 25, 25);

context.stroke();

// get canvas width and height
console.log(canvas.width);
console.log(canvas.height);


// clear rectangle area
context.clearRect(10, 10, 20, 20);

// you can use fractions of canvas dimensions for movement 
context.fillStyle = 'yellow';
context.fillRect(canvas.width / 10, canvas.height / 10, 100, 50);



