


function animate() {

  context.clearRect(0, 0, canvas.width, canvas.height);

  blueCircle.move(blueCircle.dx, blueCircle.dy);
  blueCircle.draw(context);

  greenCircle.move(greenCircle.dx, greenCircle.dy)
  greenCircle.draw(context)

  blueCircle.checkCollision_otherCircles(blueCircle, greenCircle)


  redCircle.move(redCircle.dx, redCircle.dy)
  redCircle.draw(context)

  requestAnimationFrame(animate);


  // console.log('hello');


}

window.requestAnimationFrame(animate);


