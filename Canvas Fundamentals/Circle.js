
context.beginPath();
context.strokeStyle = 'red';
context.arc(150, 100, 25, Math.PI / 180, Math.PI / 90, anticlockwise = true);
context.stroke();
context.closePath();



context.beginPath();
context.strokeStyle = 'green';
context.arc(150, 10, 25, 0, 2 * Math.PI, anticlockwise = true);
context.stroke();
context.closePath();


// what happens when you don't include the beginPath() method ?



// use fill 
context.beginPath();
context.fillStyle = 'green';
context.arc(150, 10, 25, 0, 2 * Math.PI, anticlockwise = true);
context.fill();
context.closePath();