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
  this.prevXLoc = this.diameter/2.0;
  this.prevYLoc = canvasHeight - this.diameter/2.0;
  this.xLoc = 0;
  this.yLoc = 0;
  this.xSpeed = 1;
  this.ySpeed = -1;
  this.display = function () {
    this.moveBall();
    ellipse(this.xLoc, this.yLoc, this.diameter, this.diameter);
  }
  this.moveBall = function () {
    this.xLoc = this.prevXLoc;
    this.yLoc = this.prevYLoc;
  }
};