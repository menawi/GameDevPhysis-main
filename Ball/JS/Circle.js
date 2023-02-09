// > Follow this to learn basic skills first prior to movement and physics
// https://github.com/bholzer/Bouncing-Ball-Animation-Tutorial





class newShape {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.color = color
    // can add array here to collect all shapes
  }

  draw(context) {
    // since drawing methods are specifc to the type of shape, you leave this empty and write it in the child classes
  }

  move(dx, dy) {
    this.x += dx
    this.y += dy
  }

  collide(canvasWidth, canvasHeight) {
    // hor walls
    if (this.x < 0 || this.x + this.width > canvasWidth) {
      this.x = -this.dix
    }
    // ver walls
    if (this.y < 0 || this.y + this.width > canvasHeight) {
      this.y = -this.dy
    }
  }

}


// note : for the circle child class, you will need to factor in the radius instead of the width

const circlesArray = []

class Circle extends newShape {
  constructor(x, y, color, radius) {
    super(x, y, color)
    this.radius = radius
    circlesArray.push(this)

  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    context.fillStyle = 'this.color';
    context.fill();
    // context.closePath();

  }

  move(dx, dy) {
    this.x += dx
    this.y += dy
  }

  collide(canvasWidth, canvasHeight) {
    if (this.x < 0 || this.x + this.radius > canvasWidth) {
      this.dx = -this.dx;
    }
    if (this.y < 0 || this.y + this.radius > canvasHeight) {
      this.dy = -this.dy;
    }
  }

}


function animateCircle() {
  // clear context
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < circlesArray.length; i++) {
    const circle = circlesArray[i];
    circle.move(circle.dx, circle.dy)
    circle.draw(context)
  }
  requestAnimationFrame(animateCircle)
}

animateCircle()

