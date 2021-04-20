// Defining EvilCircle class, inheriting from Shape

function EvilCircle(x, y, exists) {
  Shape.call(this, x, y, 20, 20, exists);

  this.color = "white";
  this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

// Drawing the EvilCircle

EvilCircle.prototype.draw = function () {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 3;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
};

// Avoiding EvilCirlce from exit the screen

EvilCircle.prototype.checkBounds = function () {
  if (this.x + this.size >= width) {
    this.x -= this.size;
  }

  if (this.x - this.size <= 0) {
    this.x += this.size;
  }

  if (this.y + this.size >= height) {
    this.y -= this.size;
  }

  if (this.y - this.size <= 0) {
    this.y += this.size;
  }
};

// Creating keys control

EvilCircle.prototype.setControls = function () {
  var _this = this;
  window.onkeydown = function (e) {
    if (e.keyCode === 37) {
      _this.x -= _this.velX;
    } else if (e.keyCode === 39) {
      _this.x += _this.velX;
    } else if (e.keyCode === 38) {
      _this.y -= _this.velY;
    } else if (e.keyCode === 40) {
      _this.y += _this.velY;
    }
  };
};

// Detecting EvilCircle collisions

EvilCircle.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (balls[j].exists) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
        counter--;
        para.textContent = "Remaining balls: " + counter;
      }
    }
  }
};
