var ball;

function setup() {
  createCanvas(640,360);
  stroke(255);
  fill(255);
}

function draw() {
  if(!mouseIsPressed) {
    background(0);
  }
  createBall(mouseX, mouseY);
}

function Ball() {
  this.diameter = 50;
  this.x = 50;
  this.y = 50;
  this.display = function () {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function createBall(xLoc, yLoc) {
  ellipse(xLoc, yLoc, 50, 50);
}