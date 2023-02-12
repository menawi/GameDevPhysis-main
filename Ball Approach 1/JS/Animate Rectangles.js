// Animate Rectangles



function animate() {
  // // must clear canvas before every reDraw (experiment changing the value !)
  context.clearRect(0, 0, canvas.width, canvas.height);

  // // red rectangle
  // redRectangle.move(redRectangle.dx, redRectangle.dy);
  // redRectangle.draw(context);

  // // yellow rectangle
  // yellowRectangle.move(yellowRectangle.dx, yellowRectangle.dy);
  // yellowRectangle.draw(context);

  //   circles

  blueCircle.move(blueCircle.dx, blueCircle.dy);
  blueCircle.draw(context);

  greenCircle.move(greenCircle.dx, greenCircle.dy);
  greenCircle.draw(context);

  // requestanimationframe
  requestAnimationFrame(animate);
}

// console.log('hello');

window.requestAnimationFrame(animate);