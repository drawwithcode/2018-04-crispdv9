function preload() {
  // put preload code here
}

//creo  variabili vuote
var balls = [];


function setup() {

  createCanvas(windowWidth, windowHeight);
  textFont('Helvetica')


  var ballNumber = 20;


  for (var i = 0; i < ballNumber; i++) {


    var myBall = new Ball(random(0, width), random(0, height), 50);

    myBall.diameter = random(20, 100)
    myBall.speed = random(1, 4);
    myBall.color = color(255, 100);
    balls.push(myBall);
  }
}

function mousePressed() {
  for (var j = 0; j < balls.length; j++)
    balls[j].click();


}


function draw() {
  background(113,164,223)
  for (var j = 0; j < balls.length; j++) {

    balls[j].move();
    balls[j].display();

  }
  push();
  textSize(20);
  text('Paint the balls', windowWidth/2, windowHeight/2);
  pop();
}



function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 'blue';
  this.speed = 4;


  var yDirezione = 1;
  var xDirezione = 1;

  this.display = function() {
    noStroke()
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
  this.move = function() {
    this.x += this.speed * xDirezione;
    this.y += this.speed * yDirezione;

    if (this.y > height || this.y < 0) {
      yDirezione = yDirezione * -1;
    }

    if (this.x > width || this.x < 0) {
      xDirezione = xDirezione * -1;

    }
    this.click = function() {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < 40) {
        this.color = color(255, random(255), random(255),200);

      }

    }

  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)

}
