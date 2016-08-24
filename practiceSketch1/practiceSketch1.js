var ballA;
var canvasWidth = 640;
var canvasHeight = 360;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  stroke(255);
  fill(255);
  background(0);
  ballA = new Ball();
}

function draw() {
  background(0);
  ballA.display();
}

function Ball() {
  this.diameter = 50;
  this.xLoc = 0;
  this.yLoc = 0;
  this.display = function () {
    ellipse(this.xLoc, this.yLoc, this.diameter, this.diameter);
  }
};