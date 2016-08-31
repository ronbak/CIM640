var ballA;
var paddleA;
var paddleB;
var canvasWidth = 640;
var canvasHeight = 360;
var paddleDistanceFromSide = 60;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  stroke(255);
  fill(255);
  background(0);
  ballA = new Ball();
  paddleA = new Paddle(paddleDistanceFromSide);
  paddleB = new Paddle(canvasWidth - paddleDistanceFromSide);
}

function draw() {
  background(0);
  ballA.display();
  if(keyIsDown(80)) // p
  {
    paddleB.moveUp();
  }
  if(keyIsDown(76)) // l
  {
    paddleB.moveDown();
  }
  if(keyIsDown(81)) // q
  {
    paddleA.moveUp();
  }
  if(keyIsDown(65)) // a
  {
    paddleA.moveDown();
  }
  paddleA.display();
  paddleB.display();
}


function Paddle(xPos) {
    this.xPos = xPos;
    this.yPos = canvasHeight/2.0;
    this.height = 80;
    this.width = 20;
    this.highPoint = this.height/2.0;
    this.lowPoint = canvasHeight - this.height/2.0;
    this.display = function () {
        rect(this.xPos - this.width/2.0, this.yPos - this.height/2.0, this.width, this.height);
    }
    this.moveUp = function () {
        if(this.yPos >= this.highPoint)
        {
            this.yPos--;
        }
    }
    this.moveDown = function () {
        if(this.yPos <= this.lowPoint)
        {
            this.yPos++;
        }
    }
}

function Ball() {
  this.diameter = 50;
  this.highPoint = this.diameter/2.0;
  this.lowPoint = canvasHeight - this.diameter/2.0;
  this.leftMostPoint = this.diameter/2.0;
  this.rightMostPoint = canvasWidth - this.diameter/2.0;
  this.prevXLoc = this.diameter/2.0;
  this.prevYLoc = canvasHeight - this.diameter/2.0;
  this.xLoc = 0;
  this.yLoc = 0;
  this.xSpeed = 2;
  this.ySpeed = -2;
  this.display = function () {
    this.moveBall();
    ellipse(this.xLoc, this.yLoc, this.diameter, this.diameter);
    this.prevXLoc = this.xLoc;
    this.prevYLoc = this.yLoc;
  }
  this.moveBall = function () {
    if(this.xLoc > this.rightMostPoint)
    {
        this.xSpeed = -this.xSpeed;
    }
    if(this.xLoc < this.leftMostPoint)
    {
        this.xSpeed = -this.xSpeed;
    }
    if(this.yLoc > this.lowPoint)
    {
        this.ySpeed = -this.ySpeed;
    }
    if(this.yLoc < this.highPoint)
    {
        this.ySpeed = -this.ySpeed;
    }
    this.collideWithPaddles();
    this.xLoc = this.prevXLoc + this.xSpeed;
    this.yLoc = this.prevYLoc + this.ySpeed;
  }
  this.collideWithPaddles = function() {
    if((this.yLoc > paddleA.yPos - paddleA.height/2.0) && (this.yLoc < paddleA.yPos + paddleA.height/2.0))
    {       
        if(this.xLoc - this.diameter/2.0 < paddleA.xPos + paddleA.width/2.0)
        {
            this.xSpeed = abs(this.xSpeed);
        }
    }
    if((this.yLoc > paddleB.yPos - paddleB.height/2.0) && (this.yLoc < paddleB.yPos + paddleB.height/2.0))
    {
        if(this.xLoc + this.diameter/2.0 > paddleB.xPos - paddleB.width/2.0)
        {
            this.xSpeed = -abs(this.xSpeed);
        }
    }
  }
};