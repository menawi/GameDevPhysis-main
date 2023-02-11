// CIRCLE CLASS

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

  // collide with WALLS
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


}

// blue circle
const blueCircle = new Circle(10, 10, 10, "blue");

// green circle
const greenCircle = new Circle(40, 40, 15, "green");


