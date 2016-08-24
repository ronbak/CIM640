var ballA;

function setup() {
  createCanvas(640,360);
  stroke(255);
  fill(255);
  background(0);
  ballA = new Ball();
}

function draw() {
  if(!mouseIsPressed) {
    background(0);
  }
  ballA.display();
}

function Ball() {
  this.diameter = 50;
  this.display = function () {
    ellipse(mouseX, mouseY, this.diameter, this.diameter);
  }
};