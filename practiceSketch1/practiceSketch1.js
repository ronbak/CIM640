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

function createBall(xLoc, yLoc) {
  ellipse(xLoc, yLoc, 50, 50);
}