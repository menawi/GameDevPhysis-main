// > Follow this to learn basic skills first prior to movement and physics
// https://github.com/bholzer/Bouncing-Ball-Animation-Tutorial


class Circle extends Shape {
  constructor(x, y, radius, color) {
    super(x, y, color);
    this.radius = radius;
    this.dx = 1;
    this.dy = 1;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }

  move(dx, dy) {
    super.move(dx, dy);
    this.collideCircle(canvas.width, canvas.height);
  }

  // 📌Assignment : explain why used collideCircle instead of collide?
  //   Explain why we need to factor in the radius the way we did?
  collideCircle(canvasWidth, canvasHeight) {
    if (this.x - this.radius < 0 || this.x + this.radius > canvasWidth) {
      this.dx = -this.dx;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > canvasHeight) {
      this.dy = -this.dy;
    }
  }
  //  collide with other CIRCLES
  collideCircle(circle) {
    let distance = Math.sqrt(Math.pow(this.x - circle.x, 2) + Math.pow(this.y - circle.y, 2));
    return distance < this.radius + circle.radius;
  }
  //  collide with other rectangles
  collideRectangle(rectangle) {
    let closestX = clamp(this.x, rectangle.x - rectangle.width / 2, rectangle.x + rectangle.width / 2);
    let closestY = clamp(this.y, rectangle.y - rectangle.height / 2, rectangle.y + rectangle.height / 2);
    let distance = Math.sqrt(Math.pow(closestX - this.x, 2) + Math.pow(closestY - this.y, 2));
    return distance < this.radius;
  }

}

// blue circle
const blueCircle = new Circle(10, 10, 10, "blue");

// green circle
const greenCircle = new Circle(40, 40, 15, "green");

// function animate() {
//   // must clear canvas before every reDraw (experiment changing the value !)
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   // red rectangle
//   redRectangle.move(redRectangle.dx, redRectangle.dy);
//   redRectangle.draw(context);

//   // yellow rectangle
//   yellowRectangle.move(yellowRectangle.dx, yellowRectangle.dy);
//   yellowRectangle.draw(context);

//   //   circles

//   blueCircle.move(blueCircle.dx, blueCircle.dy);
//   blueCircle.draw(context);

//   greenCircle.move(greenCircle.dx, greenCircle.dy);
//   greenCircle.draw(context);

//   // requestanimationframe
//   requestAnimationFrame(animate);
// }

// // console.log('hello');

// window.requestAnimationFrame(animate);



