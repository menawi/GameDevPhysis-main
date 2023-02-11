//  class : define the properties of the shape class, add a render function in it, a move function, and a collision function.

// There are vars "width" and "height" that NOT referenced in the shape class BUT are referenced in its child rectangle class

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

  shapesCollide(shape) {

    if (this instanceof Circle && shape instanceof Circle) {
      return this.collideCircle(shape);
    } else if (this instanceof Rectangle && shape instanceof Rectangle) {
      return this.collideRectangle(shape);
    } else if (this instanceof Circle && shape instanceof Rectangle) {
      return this.collideCircleRectangle(shape);
    } else if (this instanceof Rectangle && shape instanceof Circle) {
      return shape.collideCircleRectangle(this);

    }

  }



}



// end shape class

// Rectangle class ; child of Shape class: add the properties of width and height , inherit "super" properties such as position, color and functions




// 🚨 What would running this below do?

// setInterval(() => {
//   animate()
// }, 500);

// It would run the function "animate()" once every 60ms which means the animation will iterate a new run as if you created multilpe rectangle animations

