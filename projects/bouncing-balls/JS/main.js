// Creating the balls

let balls = [];

while (balls.length < 30) {
  var size = random(10, 20);
  var ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-4, 4),
    random(-4, 4),
    true,
    "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")",
    size
  );
  balls.push(ball);
  counter++;
  para.textContent = "Remaining balls: " + counter;
}

// Creating the evilBall

let evilBall = new EvilCircle(random(0, width), random(0, height), true);
evilBall.setControls();

function loop() {
  ctx.fillStyle = "rgba(0,0,0,0.7)";
  ctx.fillRect(0, 0, width, height);
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  evilBall.draw();
  evilBall.checkBounds();
  evilBall.collisionDetect();

  requestAnimationFrame(loop);
}

// ejecting the app

loop();
