# Scripts to use later when more advanced

# Collisions between circles and rectangles

```javascript

// under circle class
  //  collide with RECTANGLES
  collideRectangle(rectangle) {
    let closestX = clamp(this.x, rectangle.x - rectangle.width / 2, rectangle.x + rectangle.width / 2);
    let closestY = clamp(this.y, rectangle.y - rectangle.height / 2, rectangle.y + rectangle.height / 2);
    let distance = Math.sqrt(Math.pow(closestX - this.x, 2) + Math.pow(closestY - this.y, 2));
    return distance < this.radius;
  }


// under rectangle class
  //  collide with  CIRCLES
  collideCircleRectangle(circle) {
    let closestX = clamp(circle.x, this.x - this.width / 2, this.x + this.width / 2);
    let closestY = clamp(circle.y, this.y - this.height / 2, this.y + this.height / 2);
    let distance = Math.sqrt(Math.pow(closestX - circle.x, 2) + Math.pow(closestY - circle.y, 2));
    return distance < circle.radius;
  }


// under she Shapes parent class
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

```
