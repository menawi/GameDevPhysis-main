# Milestones

Reminder : start low, start slow, consolidate understanding

> The "super" method in constructors

The super keyword is a reference to the parent class. In a subclass constructor, you can use super to call the constructor of the parent class, passing in any required arguments.

In the example I gave, super(x, y, color) is calling the constructor of the parent class (Shape) and passing in the x, y, and color arguments. This allows the Rectangle class to inherit the properties and methods of the Shape class.

By calling super.move(dx, dy) in the move method of the Rectangle class, the move method of the parent class is being executed, updating the position of the rectangle. This allows the Rectangle class to inherit and extend the behavior of the Shape class.

> Center a canvas

```CSS
#canvas {
  display: block;
  margin: 0 auto;
}
```

In this example, the display property is set to block to make the canvas element a block-level element, which takes up the full width of its parent container. The margin property is set to 0 auto, which applies zero margin to the top and bottom of the canvas and automatically calculates the left and right margins so that the canvas is centered horizontally within its parent container.

> Understand setInterval running a function without "deleting" the previous one

It can essentially accumulate the output of the function like a 'waterfall' for example

This is where setTimeOut comes into play

> context.arc ( x,y,0, 2 \* Math.PI)

(two times Math.PI)

0 is the starting angle of the arc, specified in radians.

2 \* Math.PI is the ending angle of the arc, specified in radians.

This value represents a full circle, as Math.PI is half of the circumference of a circle and 2 \_ Math.PI is the full circumference.

= so two points ➡️ starting point of the line and the end point.

What specifiecs the movement in circular motion though? ✅ The context.arc method is specifc to circles

> Canvas Coordinates

0,0 on Canvas is top left

> Canvas creation

Key point
Class is only for Javascript generated objects. If we init a class Canvas, we must create the canvas HTML element from JS. THe question is : is it good practice though?

class Canvas {
constructor(id, width, height) {
this.canvas = document.getElementById(id)
this.context = this.canvas.getContext('2d')
this.width = width
this.height = height
}
}

const myCanvas = new Canvas("canvas01", 500, 700);

> Collision :: the midpoint

Collision is :: check distance between midpoint of object and midpoint of other object (width or height)
