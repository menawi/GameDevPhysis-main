

const shapes = [new Shape(...), new Shape(...), ...];

// In your animation loop:
shapes.forEach((shape1, i) => {
  for (let j = i + 1; j < shapes.length; j++) {
    let shape2 = shapes[j];
    if (shape1.collide(shape2)) {
      console.log(`Shapes ${i} and ${j} are colliding`);
    }
  }
});
