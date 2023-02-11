class Rectangle extends Shape {
  constructor(x, y, width, height, color) {
    super(x, y, color);
    this.width = width;
    this.height = height;
    this.dx = 1;
    this.dy = 1;

  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move(dx, dy) {
    super.move(dx, dy);
    this.collide(canvas.width, canvas.height);
  }
}

// red rectangle 
const redRectangle = new Rectangle(10, 10, 50, 20, "red");

// yellow rectangle
const yellowRectangle = new Rectangle(100, 100, 25, 30, "yellow");





// 💡Instead of having to write code to run the draw and move methods on each individaul instance of the rectangle class, how can we run the methods on all instances?

