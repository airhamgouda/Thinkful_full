'use strict';
/*global createCanvas background */
var s;
var scl = 20;
var food;



function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
function draw() {
  background(51);
  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();



  fill(random(255), random(255), random(255));
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW && s.xspeed !== 0 && s.yspeed !== 1) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && s.xspeed !== 0 && s.yspeed !== -1) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && s.xspeed !== -1 && s.speedy !== 0) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && s.xspeed !== 1 && s.yspeed !== 0) {
    s.dir(-1, 0);
  }
}
