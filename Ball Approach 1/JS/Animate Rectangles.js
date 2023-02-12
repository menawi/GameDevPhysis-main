// Animate Rectangles



function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // // red rectangle
  // redRectangle.move(redRectangle.dx, redRectangle.dy);
  // redRectangle.draw(context);

  // // yellow rectangle
  // yellowRectangle.move(yellowRectangle.dx, yellowRectangle.dy);
  // yellowRectangle.draw(context);

  requestAnimationFrame(animate);
}


window.requestAnimationFrame(animate);