// CIRCLE CLASS

let circlesArray = []

class Circle extends Shape {
  constructor(x, y, radius, color) {
    super(x, y, color);
    this.radius = radius;
    this.dx = 1;
    this.dy = 1;
    circlesArray.push(this)


  }

  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

  }

  move(dx, dy, circle1, circle2) {
    super.move(dx, dy);
    this.collideCircleWalls(canvas.width, canvas.height);

  }

  // collide with WALLS
  collideCircleWalls(canvasWidth, canvasHeight) {
    if (this.x - this.radius < 0 || this.x + this.radius > canvasWidth) {
      this.dx = -this.dx;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > canvasHeight) {
      this.dy = -this.dy;
    }
  }

  checkCollision_otherCircles(circle1, circle2) {
    let distance = Math.sqrt(Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2));

    if (distance < circle1.radius + circle2.radius) {
      circle1.dx = - circle1.dx
      circle1.dy = - circle1.dy
      circle2.dx = - circle2.dx
      circle2.dy = - circle2.dy
    }

  }

}

// blue circle
const blueCircle = new Circle(100, 100, 10, "blue");

// green circle
const greenCircle = new Circle(40, 40, 15, "green");

// red circle
const redCircle = new Circle(100, 100, 5, "red");


