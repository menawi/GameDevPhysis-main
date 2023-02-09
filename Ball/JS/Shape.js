//  class : define the properties of the shape class, add a render function in it, a move function, and a collision function.

// There are vars "width" and "height" that NOT referenced in the shape class BUT are referenced in its child rectangle class

class Shape {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw(context) {
    // Override this method in child classes
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

// end shape class


// Rectangle class ; child of Shape class: add the properties of width and height , inherit "super" properties such as position, color and functions

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



function animate() {
  // must clear canvas before every reDraw (experiment changing the value !)
  context.clearRect(0, 0, canvas.width, canvas.height);

  // red rectangle
  redRectangle.move(redRectangle.dx, redRectangle.dy);
  redRectangle.draw(context);

  // yellow rectangle
  yellowRectangle.move(yellowRectangle.dx, yellowRectangle.dy)
  yellowRectangle.draw(context)

  // requestanimationframe
  requestAnimationFrame(animate)
}

// console.log('hello');


animate()




// 💡Instead of having to write code to run the draw and move methods on each individaul instance of the rectangle class, how can we run the methods on all instances?




// 🚨 What would running this below do?

// setInterval(() => {
//   animate()
// }, 500);

// It would run the function "animate()" once every 60ms which means the animation will iterate a new run as if you created multilpe rectangle animations

