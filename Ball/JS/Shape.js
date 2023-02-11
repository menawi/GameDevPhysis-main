// SHAPE CLASS

let shapesArray = []

class Shape {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    shapesArray.push(this)
  }

  draw(context) {
    // fill the function child classes
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  collide(canvasWidth, canvasHeight) {
    if (this.x < 0 || this.x + this.width > canvasWidth) {
      this.dx = -this.dx;
    }
    if (this.y < 0 || this.y + this.height > canvasHeight) {
      this.dy = -this.dy;
    }
  }


}





